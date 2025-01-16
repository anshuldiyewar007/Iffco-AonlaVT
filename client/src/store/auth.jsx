import { createContext, useContext, useState, useEffect } from "react";
//const API = import.meta.env.VITE_API;
//console.log("API URL:", API);


export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState([]);
  const AuthorizationToken = `Bearer ${token}`; 

  // Function to store the token in local storage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken); // Stores token in LS
  };

  // Check if user is logged in or not
  let isLoggedIn = !!token;

  // Function to check whether the user is logged in or not
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  // Function to check the user Authentication or not
  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:5000/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        // Our main goal is to get the user data 👇
        setUser(data.userData);
        setIsLoading(false);
      } else {
        console.error("Error fetching user data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // To fetch services from the database
  const getServices = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/data/service`, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setServices(data.data); // Ensure you're setting the correct data field here
      } else {
        console.log("Failed to fetch services:", response.status);
      }
    } catch (error) {
      console.log(`services frontend error: ${error}`);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token"); // Get token from localStorage
    if (storedToken) {
      setToken(storedToken); // Set token from LS if it exists
      console.log("Stored Token:", storedToken); // Check the token here
    }

    if (token) {
      userAuthentication(); // Fetch user data if token is available
    }
    getServices(); // Always try to get services when the component mounts
  }, [token]); // Dependency on token to re-fetch user if token changes

  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, services, user , AuthorizationToken , isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};

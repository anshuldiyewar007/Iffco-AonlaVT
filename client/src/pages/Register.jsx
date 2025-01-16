import React, { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    city: "",
    degree: "",
    percentage: "",
    yearOfCompletion: "",
    college: "",
    branch: "",
  });

  const { storeTokenInLS } = useAuth();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedUser = {
      ...user,
      percentage: Number(user.percentage),
      yearOfCompletion: Number(user.yearOfCompletion),
    };

    try {
      const response = await fetch(`http://localhost:5000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedUser),
      });

      const responseData = await response.json();
      if (response.ok) {
        toast.success("Registration successful");
        storeTokenInLS(responseData.token);
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
          city: "",
          degree: "",
          percentage: "",
          yearOfCompletion: "",
          college: "",
          branch: "",
        });
        navigate("/"); // Redirect to home page
      } else {
        toast.error(responseData.extraDetails || responseData.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 via-white to-green-50 py-12">
      <div className="w-full max-w-4xl bg-white p-10 rounded-2xl shadow-2xl">
        <h2 className="text-4xl font-bold text-green-800 mb-8 text-center">
          Register Now
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: "username", label: "Username", type: "text" },
            { name: "email", label: "Email", type: "email" },
            { name: "phone", label: "Phone Number", type: "tel" },
            { name: "password", label: "Password", type: "password" },
            { name: "city", label: "City", type: "text" },
            { name: "degree", label: "Degree Pursuing", type: "text" },
            { name: "percentage", label: "Current Percentage", type: "number" },
            { name: "yearOfCompletion", label: "Year of Completion", type: "number" },
            { name: "college", label: "College/University", type: "text" },
            { name: "branch", label: "Branch of Study", type: "text" },
          ].map(({ name, label, type }) => (
            <div key={name}>
              <label
                htmlFor={name}
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                {label}
              </label>
              <input
                type={type}
                name={name}
                id={name}
                value={user[name]}
                onChange={handleInput}
                placeholder={`Enter your ${label.toLowerCase()}`}
                className="block w-full px-4 py-3 text-lg border border-gray-300 rounded-xl shadow-sm focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all duration-200"
                required
              />
            </div>
          ))}
          <div className="col-span-full">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-green-800 text-white px-8 py-4 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:from-green-700 hover:to-green-900 transform hover:-translate-y-1"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

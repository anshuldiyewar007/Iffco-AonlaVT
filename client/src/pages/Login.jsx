import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const responseData = await response.json();

      if (response.ok) {
        toast.success("Login Successful");
        storeTokenInLS(responseData.token);
        navigate("/");
      } else {
        toast.error(
          responseData.extraDetails
            ? responseData.extraDetails
            : responseData.message
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="w-full max-w-3xl bg-white p-12 rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-extrabold text-green-800 text-center mb-10">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInput}
              placeholder="Enter your email"
              className="mt-1 block w-full px-6 py-4 text-lg border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInput}
              placeholder="Enter your password"
              className="mt-1 block w-full px-6 py-4 text-lg border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-green-800 text-white px-8 py-4 text-lg rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-200 hover:from-green-700 hover:to-green-900"
          >
            Login Now
          </button>
        </form>
        <p className="mt-8 text-lg text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-green-800 font-bold">
            Register
          </a>
        </p>
      </div>
    </section>
  );
};

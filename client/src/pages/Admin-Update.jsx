import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
    city: "",
    degree: "",
    percentage: "",
    yearOfCompletion: "",
    college: "",
    branch: "",
  });

  const params = useParams();
  const { AuthorizationToken } = useAuth();

  const getSingleUserData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`, {
        method: "GET",
        headers: { Authorization: AuthorizationToken },
      });
      const userData = await response.json();
      setData(userData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: AuthorizationToken,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("User updated successfully");
      } else {
        toast.error("Failed to update user");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Update User Data</h1>
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-medium text-gray-700" htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={data.username}
                  onChange={handleInput}
                  placeholder="Enter username"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700" htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={data.email}
                  onChange={handleInput}
                  placeholder="Enter email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700" htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={data.phone}
                  onChange={handleInput}
                  placeholder="Enter phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700" htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={data.city}
                  onChange={handleInput}
                  placeholder="Enter city"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700" htmlFor="degree">Degree</label>
                <input
                  type="text"
                  name="degree"
                  id="degree"
                  value={data.degree}
                  onChange={handleInput}
                  placeholder="Enter degree"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700" htmlFor="percentage">Percentage</label>
                <input
                  type="number"
                  name="percentage"
                  id="percentage"
                  value={data.percentage}
                  onChange={handleInput}
                  placeholder="Enter percentage"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700" htmlFor="yearOfCompletion">Year of Completion</label>
                <input
                  type="number"
                  name="yearOfCompletion"
                  id="yearOfCompletion"
                  value={data.yearOfCompletion}
                  onChange={handleInput}
                  placeholder="Enter year of completion"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700" htmlFor="college">College</label>
                <input
                  type="text"
                  name="college"
                  id="college"
                  value={data.college}
                  onChange={handleInput}
                  placeholder="Enter college"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700" htmlFor="branch">Branch</label>
                <input
                  type="text"
                  name="branch"
                  id="branch"
                  value={data.branch}
                  onChange={handleInput}
                  placeholder="Enter branch"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg font-semibold hover:from-green-700 hover:to-green-900 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                Update User
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

import { useEffect, useState } from "react";
import { useAuth } from "../store/auth"; 
import { Link } from "react-router-dom";

export const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { AuthorizationToken } = useAuth();

  const getAllUsersData = async () => {
    if (!AuthorizationToken) {
      console.error("No token available");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/admin/users`, {
        method: "GET",
        headers: { Authorization: AuthorizationToken },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Response error:", errorData);
        return;
      }

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: { Authorization: AuthorizationToken },
      });

      const data = await response.json();
      if (response.ok) {
        getAllUsersData();
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, [AuthorizationToken]);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Admin Users Management</h1>
        <p className="mt-2 text-lg text-gray-600">Manage all users in your system with ease.</p>
      </div>

      {/* Main content container */}
      <div className="container mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Phone</th>
                <th className="py-3 px-6 text-left">City</th>
                <th className="py-3 px-6 text-left">Degree</th>
                <th className="py-3 px-6 text-left">Percentage</th>
                <th className="py-3 px-6 text-left">Year of Completion</th>
                <th className="py-3 px-6 text-left">College</th>
                <th className="py-3 px-6 text-left">Branch</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user._id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-6">{user.username}</td>
                    <td className="py-3 px-6">{user.email}</td>
                    <td className="py-3 px-6">{user.phone}</td>
                    <td className="py-3 px-6">{user.city}</td>
                    <td className="py-3 px-6">{user.degree}</td>
                    <td className="py-3 px-6">{user.percentage}</td>
                    <td className="py-3 px-6">{user.yearOfCompletion}</td>
                    <td className="py-3 px-6">{user.college}</td>
                    <td className="py-3 px-6">{user.branch}</td>
                    <td className="py-3 px-6 text-center space-x-2">
                      <Link to={`/admin/users/${user._id}/edit`} className="text-blue-600 hover:text-blue-800 font-semibold">
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteUser(user._id)}
                        className="text-red-600 hover:text-red-800 font-semibold"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" className="text-center py-4 text-gray-500">No users found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

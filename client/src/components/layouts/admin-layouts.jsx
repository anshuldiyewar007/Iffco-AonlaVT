import { NavLink, Outlet, Navigate } from "react-router-dom";
import { FaUser, FaHome } from "react-icons/fa";
import { FaMessage, FaImages } from "react-icons/fa6"; // Added FaImages for Gallery icon
import { useAuth } from "../../store/auth";

export const AdminLayout = () => {
  const { user, isLoading } = useAuth();
  console.log("admin layout ", user);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="loader"></div>
      </div>
    );
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <header className="bg-gradient-to-r from-green-600 to-green-800 shadow-md">
        <div className="container mx-auto px-6 py-4">
          <nav>
            <ul className="flex justify-around items-center space-x-6">
              <li>
                <NavLink
                  to="/admin/users"
                  className="text-white text-lg font-medium hover:text-green-200 transition duration-300 flex items-center gap-2"
                >
                  <FaUser /> Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/contacts"
                  className="text-white text-lg font-medium hover:text-green-200 transition duration-300 flex items-center gap-2"
                >
                  <FaMessage /> Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  className="text-white text-lg font-medium hover:text-green-200 transition duration-300 flex items-center gap-2"
                >
                  <FaImages /> Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="text-white text-lg font-medium hover:text-green-200 transition duration-300 flex items-center gap-2"
                >
                  <FaHome /> Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="container mx-auto py-6">
        <Outlet />
      </div>
    </>
  );
};

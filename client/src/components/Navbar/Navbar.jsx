import { NavLink } from "react-router-dom";
import { useAuth } from "../../store/auth";
import { useState } from "react";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative bg-gradient-to-r from-green-600 to-green-800">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <span className="text-xl font-bold text-white">IFFCO Aonla</span>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl text-white focus:outline-none md:hidden"
        >
          ☰
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 text-white hover:text-green-100 transition-colors ${
                isActive ? 'font-semibold bg-green-700 rounded-lg' : ''
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-2 text-white hover:text-green-100 transition-colors ${
                isActive ? 'font-semibold bg-green-700 rounded-lg' : ''
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `px-3 py-2 text-white hover:text-green-100 transition-colors ${
                isActive ? 'font-semibold bg-green-700 rounded-lg' : ''
              }`
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3 py-2 text-white hover:text-green-100 transition-colors ${
                isActive ? 'font-semibold bg-green-700 rounded-lg' : ''
              }`
            }
          >
            Contact
          </NavLink>
          {isLoggedIn ? (
            <NavLink
              to="/logout"
              className="px-4 py-2 text-green-700 bg-white rounded-lg hover:bg-green-50 transition-colors"
            >
              Logout
            </NavLink>
          ) : (
            <>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-green-700 transition-colors ${
                    isActive ? 'bg-green-700' : ''
                  }`
                }
              >
                Register
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `px-4 py-2 bg-white text-green-700 rounded-lg hover:bg-green-50 transition-colors ${
                    isActive ? 'bg-green-50' : ''
                  }`
                }
              >
                Login
              </NavLink>
            </>
          )}
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-green-700 z-50 md:hidden shadow-lg">
          <div className="px-4 py-3 space-y-2">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 text-white hover:text-green-100 transition-colors ${
                  isActive ? 'font-semibold bg-green-800 rounded-lg' : ''
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 text-white hover:text-green-100 transition-colors ${
                  isActive ? 'font-semibold bg-green-800 rounded-lg' : ''
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/gallery"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 text-white hover:text-green-100 transition-colors ${
                  isActive ? 'font-semibold bg-green-800 rounded-lg' : ''
                }`
              }
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 text-white hover:text-green-100 transition-colors ${
                  isActive ? 'font-semibold bg-green-800 rounded-lg' : ''
                }`
              }
            >
              Contact
            </NavLink>
            {isLoggedIn ? (
              <NavLink
                to="/logout"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-green-700 bg-white rounded-lg hover:bg-green-50 transition-colors"
              >
                Logout
              </NavLink>
            ) : (
              <>
                <NavLink
                  to="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-green-800 transition-colors ${
                      isActive ? 'bg-green-800' : ''
                    }`
                  }
                >
                  Register
                </NavLink>
                <NavLink
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 mt-2 bg-white text-green-700 rounded-lg hover:bg-green-50 transition-colors ${
                      isActive ? 'bg-green-50' : ''
                    }`
                  }
                >
                  Login
                </NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
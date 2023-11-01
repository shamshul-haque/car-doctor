import { AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo/logo.svg";

const Navbar = () => {
  return (
    <div className="py-5 flex items-center justify-between">
      {/* logo */}
      <img src={logo} alt="logo" className="w-16" />

      {/* manus of large devices */}
      <div className="hidden lg:block">
        <ul className="flex gap-5 text-[#444444] font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-red-500 active" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-red-500 active" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-red-500 active" : ""
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-red-500 active" : ""
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-red-500 active" : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* buttons of large devices */}
      <div className="hidden lg:flex items-center gap-5">
        <BiSearch className="text-2xl text-[#444444]" />
        <HiOutlineShoppingBag className="text-2xl text-[#444444]" />
        <Link to="/appointment">
          <button className="text-red-500 px-3 py-1 rounded-md font-semibold border border-red-500">
            Appointment
          </button>
        </Link>
        <Link to="/login">
          <button className="text-red-500 px-3 py-1 rounded-md font-semibold border border-red-500">
            Login
          </button>
        </Link>
      </div>

      {/* manus and buttons of small and medium devices */}
      <div className="dropdown dropdown-end block lg:hidden">
        <label tabIndex={0} className="btn m-1">
          <AiOutlineMenu className="text-xl" />
        </label>
        <div
          tabIndex={0}
          className="dropdown-content p-5 shadow bg-base-100 rounded-box"
        >
          <ul className="text-[#444444] font-semibold space-y-1">
            <li className="border-b pb-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-red-500 active" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="border-b pb-1">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-red-500 active" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li className="border-b pb-1">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "text-red-500 active" : ""
                }
              >
                Services
              </NavLink>
            </li>
            <li className="border-b pb-1">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-red-500 active" : ""
                }
              >
                Blog
              </NavLink>
            </li>
            <li className="border-b pb-1">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-red-500 active" : ""
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="flex justify-center gap-3 mt-3">
            <BiSearch className="text-2xl text-[#444444]" />
            <HiOutlineShoppingBag className="text-2xl text-[#444444]" />
          </div>
          <Link to="/appointment">
            <button className="text-red-500 px-3 py-1 rounded-md font-semibold border border-red-500 w-full mt-3">
              Appointment
            </button>
          </Link>
          <Link to="/login">
            <button className="text-red-500 px-3 py-1 rounded-md font-semibold border border-red-500 w-full mt-3">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

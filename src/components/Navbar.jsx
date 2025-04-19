import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaShoppingCart } from 'react-icons/fa';
import { BiSolidBookmarkAltPlus } from 'react-icons/bi';

const Navbar = () => {
  return (
    <>
      <div className="navbar p-0 bg-base-100 shadow-sm  font-bold max-w-screen-2xl mx-auto px-8 md:12 lg:16 xl:24">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className=" cursor-pointer mr-2 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'text-indigo-600 font-bold bg-emerald-200' : ''
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'text-indigo-600 font-bold bg-emerald-200' : ''
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'text-indigo-600 font-bold bg-emerald-200' : ''
                  }
                  to="/cart"
                >
                  <FaShoppingCart size={25} />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'text-indigo-600 font-bold bg-emerald-200' : ''
                  }
                  to="/favorites"
                >
                  <BiSolidBookmarkAltPlus size={25} />
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="font-bold text-xl">
            FlagshipFaceoff
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-center ">
            <ul className="menu menu-horizontal px-1 hidden lg:flex gap-2 justify-center items-center">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'text-indigo-600 font-bold bg-emerald-200' : ''
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'text-indigo-600 font-bold bg-emerald-200' : ''
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'text-indigo-600 font-bold bg-emerald-200' : ''
                  }
                  to="/cart"
                >
                  <FaShoppingCart size={25} />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'text-indigo-600 font-bold bg-emerald-200' : ''
                  }
                  to="/favorites"
                >
                  <BiSolidBookmarkAltPlus size={25} />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

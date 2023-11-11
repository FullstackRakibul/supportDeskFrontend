import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/react.svg"

function Header() {
  return (
    <>
      <header className="shadow p-3 border-s-amber-300">
        <nav className=" bg-slate-500 border-gray-200 px-4 lg:px-6 py-2.5  ">
          <div className=" flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to='/' className=" flex items-center ">
                <img src={Logo} alt="" /> 
            </Link>
            <ul>
                <li>
                    <NavLink to="/ticket"  >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/agent"  >Agent</NavLink>
                </li>
                <li>
                    <NavLink to="/user"  >User</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard"  >Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/chat"  >Chat</NavLink>
                </li>
            </ul>
            <Link to='/login'>Login</Link>
            <Link to='/registration'>Registration</Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;

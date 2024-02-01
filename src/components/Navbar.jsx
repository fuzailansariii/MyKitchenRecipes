import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="flex flex-col justify-center items-center font-alata text-xl text-black my-2">
        <div className="my-2 font-sacramento font-extrabold text-4xl">
          <ul>
            <li className="cursor-pointer">
              <Link to="/">My Kitchen</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;

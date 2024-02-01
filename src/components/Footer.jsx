import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex flex-col ml-10 md:flex md:flex-row md:justify-evenly md:mt-20 md:mb-8">
      <div className="flex flex-col w-96">
        <ul className="my-2 font-sacramento font-extrabold text-4xl">
          <li className="cursor-pointer">
            <Link to="/">My Kitchen</Link>
          </li>
        </ul>
        <p className="opacity-80 font-semibold italic">
          "My Kitchen - Crafting Memories, One Recipe at a Time. Join us in the
          joy of cooking and savoring delicious moments."
        </p>
      </div>
      <div>
        <h1 className="mt-5 font-alata font-bold">My Kitchen</h1>
        <ul className="opacity-80 mt-5 font-alata">
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="career">Careers</Link>
          </li>
          <li>
            <Link to="contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="feedback">Feedback</Link>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="mt-5 font-alata font-bold">Follow</h1>
        <ul className="opacity-80 mt-5 font-alata">
          <li>
            <Link to="/">Facebook</Link>
          </li>
          <li>
            <Link to="/">Twitter</Link>
          </li>
          <li>
            <Link to="/">Instagram</Link>
          </li>
          <li>
            <Link to="/">Youtube</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

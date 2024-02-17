"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "./customComponents/Navlink";
import Image from "next/image";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`holder transition-all  overflow-hidden items-center bg-purple-800 text-white ${
          isMobileMenuOpen ? "h-auto transition-all" : "transition"
        }`}
      >
        <div className="flex items-center px-3 py-5 ">
          <nav className="flex w-full justify-between items-center">
            <div className="LogoSide font-bold ml-5 text">
              <Image
                alt="Grandlendings"
                src="/assets/GLlogo.png"
                width={1000}
                height={1000}
                className="w-auto h-10"
              />
            </div>
            <div
              className={`burger lg:hidden xl:hidden md:hidden cursor-pointer py-2 pr-6 ${
                isMobileMenuOpen ? "w-10" : "w-auto"
              }`}
              onClick={toggleMobileMenu}
            >
              <FontAwesomeIcon
                icon={isMobileMenuOpen ? faTimes : faBars}
                className="text-sm w-5 h-5"
              />
            </div>
            <div
              className={`menus hidden lg:block xl:block md:block ${
                isMobileMenuOpen ? "hidden" : ""
              }`}
            >
              <ul className="flex cursor-pointer items-center">
                <NavLink href="/" exact>
                  <li className="px-2 text-sm">Home</li>
                </NavLink>
                <NavLink href="/about-us">
                  {" "}
                  <li className="px-2 opacity-80 text-sm">About Us</li>
                </NavLink>
                <NavLink href="/Loan-Process">
                  <li className="px-2 opacity-80 text-sm">How it Works</li>
                </NavLink>
                <NavLink href="/FAQ">
                  <li className="px-2 opacity-80 text-sm">FAQ</li>
                </NavLink>
                <NavLink href="/Contact-Us">
                  <li className="px-2 opacity-80 text-sm">Contact Us</li>
                </NavLink>
              </ul>
            </div>
            {/* <div
              className={`catchysha hidden md:block lg:block xl:block ${
                isMobileMenuOpen ? "hidden" : ""
              }`}
            >
              {/* <button className="rounded-full bg-[#ffffff40] px-4 py-2 font-semibold text-sm">
                Get Started
              </button>
            </div>  */}
          </nav>
        </div>
        <div
          className={`mobile-menus transition-all lg:hidden xl:hidden md:hidden w-full justify-center items-center ${
            isMobileMenuOpen ? "" : "hidden"
          }`}
        >
          <ul className="flex flex-col cursor-pointer items-center">
            <NavLink href="/" exact>
              <li className="font-semibold py-3  w-full my-2 px-10">Home</li>
            </NavLink>
            <NavLink href="/about-us">
              <li className="font-semibold py-3  w-full my-2 px-10">
                About Us
              </li>
            </NavLink>
            <NavLink href="/Loan-Process">
              <li className="font-semibold py-3  w-full my-2 px-10">
                How it Works
              </li>
            </NavLink>
            <NavLink href="/FAQ">
              <li className="font-semibold py-3  w-full my-2 px-10">FAQ</li>
            </NavLink>
            <NavLink href="/Contact-Us">
              <li className="font-semibold py-3 w-full my-2 px-10">
                Contact Us
              </li>
            </NavLink>
            <NavLink href="/">
              <li className="my-5 font-semibold py-3  w-full  px-10">
                Get Started
              </li>
            </NavLink>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Navbar;

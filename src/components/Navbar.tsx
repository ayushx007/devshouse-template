"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-[1000] w-full bg-white shadow-lg px-6 sm:px-10 md:px-16">
      <div className="container mx-auto p-4 flex justify-between items-center md:px-0">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/assets/gdsc-logo.png"
            width={100}
            height={100}
            alt="GDSC Logo"
            className="lg:w-14  md:mr-2 md:w-10 w-10"
          />
          <div className="ml-2 text-gray-600 md:text-lg">
            <p className="font-medium text-sm lg:text-lg md:text-xs">Google Developer Student Clubs</p>
            <p className="text-xs">VIT, Chennai</p>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:space-x-10 lg:mr-20 md:flex space-x-4 lg:relative lg:right-10">
          <Link href="#" className="text-gray-600 hover:text-gray-400">
            Home
          </Link>
          <Link href="#about" className="text-gray-600 hover:text-gray-400">
            About
          </Link>
          <Link href="#theme" className="text-gray-600 hover:text-gray-400">
            Themes
          </Link>
          <Link href="#sponsors" className="text-gray-600 hover:text-gray-400">
            Sponsors
          </Link>
          <Link href="#faqs" className="text-gray-600 hover:text-gray-400">
            FAQs
          </Link>
          <Link href="#contacts" className="text-gray-600 hover:text-gray-400">
            Contacts
          </Link>
        </div>
        {/* <Image src="/images/MLH icon.png" alt="MLH-trust-badge" width={100} height={100}className='w-20 md:w-28 fixed top-0 right-5 z-[100]' /> */}

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>☰</button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white p-2">
          <ul className="flex flex-col space-y-2 items-center">
            <li>
              <Link href="/" legacyBehavior>
                <a className="text-gray-600 hover:text-gray-300">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about" legacyBehavior>
                <a className="text-gray-600 hover:text-gray-300">About</a>
              </Link>
            </li>
            <li>
              <Link href="/theme" legacyBehavior>
                <a className="text-gray-600 hover:text-gray-300">Themes</a>
              </Link>
            </li>
            <li>
              <Link href="/sponsors" legacyBehavior>
                <a className="text-gray-600 hover:text-gray-300">Sponsors</a>
              </Link>
            </li>
            <li>
              <Link href="/faqs" legacyBehavior>
                <a className="text-gray-600 hover:text-gray-300">FAQs</a>
              </Link>
            </li>
            <li>
              <Link href="/contests" legacyBehavior>
                <a className="text-gray-600 hover:text-gray-300">Contacts</a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

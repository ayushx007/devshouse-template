"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg px-6 sm:px-10 md:px-16">
      <div className="container mx-auto p-4 flex justify-between items-center md:px-0">

        {/* Logo */}
        <div className="flex items-center">
          <Image src="/assets/gdsc-logo.png" width={100} height={100} alt="GDSC Logo" className="lg:w-14 lg:h-10 md:mr-2 md:w-10" />
          <div className="ml-2 text-gray-600 md:text-lg">
            <p className="font-medium lg:text-lg md:text-xs">Google Developer Student Clubs</p>
            <p className="text-xs">Vellore Institute of Technology, Chennai</p>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:space-x-10 md:flex space-x-4">
          <Link href="/" legacyBehavior>
            <a className="text-gray-600 hover:text-gray-400">Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="text-gray-600 hover:text-gray-400">About</a>
          </Link>
          <Link href="/theme" legacyBehavior>
            <a className="text-gray-600 hover:text-gray-400">Themes</a>
          </Link>
          <Link href="/sponsors" legacyBehavior>
            <a className="text-gray-600 hover:text-gray-400">Sponsors</a>
          </Link>
          <Link href="/faqs" legacyBehavior>
            <a className="text-gray-600 hover:text-gray-400">FAQs</a>
          </Link>
          <Link href="/contests" legacyBehavior>
            <a className="text-gray-600 hover:text-gray-400">Contacts</a>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-400">
            ☰
          </button>
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

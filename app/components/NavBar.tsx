'use client';   
import { useState } from "react";
import Link from "next/link"; // Import Link from next/link
import ThemeToggler from "./ThemeToggler";

// Navbar component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-light-background dark:bg-dark-background shadow-lg">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Use Link for navigation */}
            <Link href="/" className="flex items-center text-lg font-semibold text-light-text dark:text-dark-text">
              My Logo
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center space-x-4">
              {/* Navigation Links */}
              {["Home", "About", "Services", "Contact"].map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`} className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary">
                  {item}
                </Link>
              ))}
            </div>
            <ThemeToggler /> {/* Theme toggle button */}
          </div>
          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-light-text dark:text-dark-text focus:outline-none">
              {isOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="block text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary">
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

"use client";
import { useState } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-white shadow-lg pt-2">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          SAMSUNG
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          {["Shop", "Mobile", "TV & AV", "Appliances", "Computing", "Accessories", "SmartThings", "AI"].map(
            (item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase()}`} className="hover:text-blue-400 transition duration-300">
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Icons */}
        <div className="hidden md:flex space-x-4">
          <ShoppingCart className="cursor-pointer hover:text-blue-400" />
          <User className="cursor-pointer hover:text-blue-400" />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden text-center py-4 space-y-4 bg-black">
          {["Shop", "Mobile", "TV & AV", "Appliances", "Computing", "Accessories", "SmartThings", "AI"].map(
            (item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase()}`} className="block text-lg hover:text-blue-400 transition">
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-slate-200 sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="flex items-center justify-between container mx-auto px-4 py-5">

        {/* Logo */}
        <div>
          <h1 className="text-xl font-bold text-gray-900">
            Book Vibe
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <li>
            <Link href="/" className="rounded-md border border-green-500 px-4 py-2 text-green-600">
              Home
            </Link>
          </li>

          <li>
            <Link href="/books" className="transition hover:text-green-600">
              Books
            </Link>
          </li>

          <li>
            <Link href="/listedbook" className="transition hover:text-green-600">
              Listed book
            </Link>
          </li>

          <li>
            <Link href="/chartbook" className="transition hover:text-green-600">
              Chart book
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <button className="rounded-md bg-green-600 px-5 py-3 text-sm font-medium text-white hover:bg-green-700">
            Sign In
          </button>

          <button className="rounded-md bg-sky-400 px-5 py-3 text-sm font-medium text-white hover:bg-sky-500">
            Sign Up
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 px-4 py-4">
          <ul className="flex flex-col gap-4 text-gray-600">

            <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-green-600"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/books"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-green-600"
              >
                Books
              </Link>
            </li>

            <li>
              <Link
                href="/listedbook"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-green-600"
              >
                Listed Book
              </Link>
            </li>

            <li>
              <Link
                href="/chartbook"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-green-600"
              >
                Chart Book
              </Link>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
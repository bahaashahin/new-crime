import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../assets/logo.webp";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar العادي */}
      <nav className="bg-none backdrop-blur text-white fixed top-0 w-full z-50">
        <div
          className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
          dir="rtl"
        >
          {/* Title - RIGHT */}
          <div className="text-xl font-bold hidden md:block whitespace-nowrap">
            الدورة التأهيلية (97) لأعمال البحث الجنائي
          </div>

          {/* Links - CENTER (Desktop) */}
          <ul className="hidden md:flex gap-4 bg-[#acabab50] px-4 py-1 rounded-full mx-auto h-10 items-center">
            <li>
              <Link
                smooth
                to="/"
                className="text-white font-medium px-3 py-2 rounded-full hover:bg-white hover:text-[#05568d] hover:px-4 hover:py-1 transition-all duration-200 flex items-center justify-center"
              >
                الرئيسية
              </Link>
            </li>
            <li>
              <Link
                to="/MediaPage"
                className="text-white font-medium px-3 py-2 rounded-full hover:bg-white hover:text-[#05568d] transition-all duration-200 flex items-center justify-center"
              >
                الوسائط
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="/MubahithOne"
                className="text-white font-medium px-3 py-2 rounded-full hover:bg-white hover:text-[#05568d] hover:px-4 hover:py-1 transition-all duration-200 flex items-center justify-center"
              >
                المبحث الأول
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="/MubahithTwo"
                className="text-white font-medium px-3 py-2 rounded-full hover:bg-white hover:text-[#05568d] hover:px-4 hover:py-1 transition-all duration-200 flex items-center justify-center"
              >
                المبحث الثاني
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="/Mubahith3thr"
                className="text-white font-medium px-3 py-2 rounded-full hover:bg-white hover:text-[#05568d] hover:px-4 hover:py-1 transition-all duration-200 flex items-center justify-center"
              >
                المبحث الثالث
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="/MubahithFour"
                className="text-white font-medium px-3 py-2 rounded-full hover:bg-white hover:text-[#05568d] hover:px-4 hover:py-1 transition-all duration-200 flex items-center justify-center"
              >
                المبحث الرابع
              </Link>
            </li>
          </ul>

          {/* Logo - LEFT */}
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (خارج nav) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-br from-black via-gray-900 to-blue-950 min-h-screen transition-transform duration-300 z-[9999] ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center text-white">
          <span className="font-bold text-lg">القائمة</span>
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            ×
          </button>
        </div>

        {/* Logo in Mobile Drawer */}
        <div className="flex justify-center mb-4 md:hidden">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </div>

        <ul className="flex flex-col gap-4 px-6 text-right text-white">
          <Link onClick={() => setMenuOpen(false)} smooth to="/">
            الرئيسية
          </Link>
          {/* /MediaPage */}
          <Link onClick={() => setMenuOpen(false)} smooth to="/MediaPage">
            الوسائط
          </Link>
          <Link onClick={() => setMenuOpen(false)} smooth to="/MubahithOne">
            المبحث الأول
          </Link>
          <Link onClick={() => setMenuOpen(false)} smooth to="/MubahithTwo">
            المبحث الثاني
          </Link>
          <Link onClick={() => setMenuOpen(false)} smooth to="/Mubahith3thr">
            المبحث الثالث
          </Link>
          <Link onClick={() => setMenuOpen(false)} smooth to="/MubahithFour">
            المبحث الرابع
          </Link>
        </ul>
      </div>

      {/* Overlay (خارج nav) */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-[9998]"
        />
      )}
    </>
  );
}

export default Navbar;

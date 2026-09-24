"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Trang chủ", href: "/" },
    { name: "Các dòng xe", href: "#models" },
    { name: "Bảng giá", href: "#pricing" },
    { name: "Khuyến mãi", href: "#promotions" },
    { name: "Liên hệ", href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-black/20 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span
            className={`text-2xl font-black tracking-tighter ${
              isScrolled ? "text-blue-600" : "text-white"
            }`}
          >
            VINFAST
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-semibold text-sm uppercase transition-colors hover:text-blue-500 ${
                isScrolled ? "text-gray-800" : "text-gray-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Hotline & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="tel:0909090909"
            className={`hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full font-bold transition-all shadow-lg ${
              isScrolled
                ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-600/30"
                : "bg-white text-blue-600 hover:bg-gray-100 hover:shadow-white/20"
            }`}
          >
            <Phone size={18} />
            0909.090.909
          </a>
          <button
            className={`md:hidden p-2 ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col py-4 border-t">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-3 font-semibold text-gray-800 hover:bg-gray-50 border-b border-gray-100 last:border-none"
            >
              {link.name}
            </Link>
          ))}
          <div className="px-6 pt-4">
            <a
              href="tel:0909090909"
              className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 text-white rounded-lg font-bold shadow-md"
            >
              <Phone size={18} />
              Hotline: 0909.090.909
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll header visual change (optional)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header
      className={`header-container sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-gradient-to-r from-[#f7eac8] to-[#f3d9a4]"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        {/* Logo / Title */}
        <Link to="/" className="text-2xl font-extrabold text-orange-800 tracking-tight">
          {t("bhavki.title", { defaultValue: "Bhavki" })}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium text-gray-800">
          <Link to="/" className="hover:text-orange-700 transition">
            🏠 {t("menu.home", { defaultValue: "Home" })}
          </Link>
          <Link to="/about" className="hover:text-orange-700 transition">
            🕉️ {t("menu.about", { defaultValue: "About Bhavki" })}
          </Link>
          <Link to="/join" className="hover:text-orange-700 transition">
            🙏 {t("menu.join", { defaultValue: "Join as KarmaYogi" })}
          </Link>
          <Link to="/karmadatas" className="hover:text-orange-700 transition">
            💫 {t("menu.karmadatas", { defaultValue: "For KarmaDātās" })}
          </Link>
          <Link to="/categories" className="hover:text-orange-700 transition">
            🌸 {t("menu.categories", { defaultValue: "Seva Categories" })}
          </Link>
          <Link to="/blog" className="hover:text-orange-700 transition">
            📜 {t("menu.blog", { defaultValue: "Bhavki Blog / Updates" })}
          </Link>
          <Link to="/contact" className="hover:text-orange-700 transition">
            📞 {t("menu.contact", { defaultValue: "Contact / Help Desk" })}
          </Link>
        </div>

        {/* Language Selector */}
        <select
          onChange={handleLanguageChange}
          value={i18n.language}
          className="ml-3 border border-orange-400 bg-white text-orange-700 px-2 py-1 rounded-md text-sm cursor-pointer hover:bg-orange-50"
        >
          <option value="en">English</option>
          <option value="hi">हिंदी </option>
          <option value="mr">मराठी</option>
        </select>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden ml-3 text-orange-800 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200 py-4">
          <div className="flex flex-col items-start px-6 space-y-3 text-gray-800 font-medium">
            <Link to="/" className="w-full" onClick={() => setMenuOpen(false)}>
              🏠 {t("menu.home", { defaultValue: "Home" })}
            </Link>
            <Link to="/about" className="w-full" onClick={() => setMenuOpen(false)}>
              🕉️ {t("menu.about", { defaultValue: "About Bhavki" })}
            </Link>
            <Link to="/join" className="w-full" onClick={() => setMenuOpen(false)}>
              🙏 {t("menu.join", { defaultValue: "Join as KarmaYogi" })}
            </Link>
            <Link to="/karmadatas" className="w-full" onClick={() => setMenuOpen(false)}>
              💫 {t("menu.karmadatas", { defaultValue: "For KarmaDātās" })}
            </Link>
            <Link to="/categories" className="w-full" onClick={() => setMenuOpen(false)}>
              🌸 {t("menu.categories", { defaultValue: "Seva Categories" })}
            </Link>
            <Link to="/blog" className="w-full" onClick={() => setMenuOpen(false)}>
              📜 {t("menu.blog", { defaultValue: "Bhavki Blog / Updates" })}
            </Link>
            <Link to="/contact" className="w-full" onClick={() => setMenuOpen(false)}>
              📞 {t("menu.contact", { defaultValue: "Contact / Help Desk" })}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

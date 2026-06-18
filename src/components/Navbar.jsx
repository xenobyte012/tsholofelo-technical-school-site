import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PenSquare,
  Briefcase,
  Newspaper,
  FileText,
  MapPin,
  Phone,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "ADMISSION", path: "/admission", icon: PenSquare },
    { label: "ACADEMICS", path: "/academics", icon: Briefcase },
    { label: "NEWS", path: "/news", icon: Newspaper },
    { label: "APPLICATION", path: "/application", icon: FileText },
    { label: "LOCATION", path: "/location", icon: MapPin },
    { label: "CONTACT US", path: "/contact", icon: Phone },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer"
          >
            <img
              src="/IMAGES/logo.jpg"
              alt="Tsholofelo Logo"
              className="h-10 w-10 rounded-full object-cover border border-slate-700"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />

            <span className="font-bold text-lg tracking-wide">
              Tsholofelo Technical
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavigation(item.path)}
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-xs font-semibold hover:bg-slate-800 transition-colors"
                  >
                    <Icon size={14} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex  items-center justify-center p-2 rounded-md hover:bg-slate-800 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-16 bg-slate-950 z-50 lg:hidden">
          <div className="flex flex-col h-full">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.path)}
                  className="flex items-center gap-4 px-8 py-6 text-xl text-white hover:bg-slate-800 transition"
                >
                  <Icon size={24} className="text-amber-500" />
                  <span>{item.label}</span>
                </button>
              );
            })}

            <div className="mt-auto p-6 border-t border-slate-800">
              <p className="text-slate-400 text-sm">
                Tsholofelo Technical Secondary School
              </p>

              <p className="text-slate-500 text-xs mt-2">
                Quality Technical Education
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
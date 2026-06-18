import React from "react";
// 1. Imported Link from react-router-dom
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  UserCheck,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { label: "Admission Details", path: "/admission" },
    { label: "Academic Curriculum", path: "/academics" },
    { label: "Latest School News", path: "/news" },
    { label: "Application Forms", path: "/application" },
    { label: "Find Our Campus", path: "/location" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 font-sans border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: School Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/IMAGES/logo.jpg"
                alt="Tsholofelo Logo"
                className="h-12 w-12 rounded-full object-cover border border-slate-700"
                onError={(e) => (e.target.style.display = "none")}
              />
              <div>
                <h3 className="text-white font-bold text-lg leading-tight tracking-wide">
                  Tsholofelo
                </h3>
                <span className="text-xs text-amber-500 font-semibold uppercase tracking-wider">
                  Technical High School
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Maintaining a harmonious environment with well-structured
              governance to promote quality technical education, discipline, and
              positive youth development.
            </p>
          </div>

          {/* Column 2: Quick Links Navigation */}
          <div className="space-y-4">
            <h4 className="text-slate-200 font-bold text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {/* 2. Swapped <a> for <Link> and used 'to' instead of 'href' */}
                  <Link
                    to={link.path}
                    className="flex items-center gap-1.5 hover:text-amber-500 hover:translate-x-1 transition-all duration-200"
                  >
                    <ChevronRight size={14} className="text-slate-600" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Enquiries */}
          <div className="space-y-4">
            <h4 className="text-slate-200 font-bold text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              Get In Touch
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Phone size={16} className="text-amber-500 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-white font-medium">064 984 2708</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail size={16} className="text-amber-500 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a
                    href="mailto:600105439@nwed.gov.za"
                    className="hover:text-amber-500 transition-colors break-all text-white font-medium"
                  >
                    600105439@nwed.gov.za
                  </a>
                  <a
                    href="mailto:tsholofelotechweb@gmail.com"
                    className="hover:text-amber-500 transition-colors break-all text-xs text-slate-500"
                  >
                    tsholofelotechweb@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 border-t border-slate-800/60 pt-2 mt-2">
                <UserCheck
                  size={16}
                  className="text-orange-400 shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-xs text-slate-500">Enquiries:</p>
                  <p className="text-white font-semibold text-xs">
                    Gabaphethe M.S.{" "}
                    <span className="text-slate-400 font-normal">
                      (Principal)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Location & Operating Hours */}
          <div className="space-y-4">
            <h4 className="text-slate-200 font-bold text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              Our Campus
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-amber-500 shrink-0 mt-0.5" />
                <div className="flex flex-col text-slate-300">
                  <span className="font-medium text-white">
                    3432 Bophuthatswana Road
                  </span>
                  <span>Boitekong Extension 2</span>
                  <span>Rustenburg, 0308</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 border-t border-slate-800/60 pt-2">
                <Clock size={16} className="text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300 font-medium text-xs">
                    Hours of Operation:
                  </p>
                  <p className="text-slate-500 text-xs">
                    Mon – Fri: 07:30 — 14:30
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="border-slate-800 my-8" />

        {/* Bottom Bar: Social Links & Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row text-xs">
          {/* Social Platforms */}
          <div className="flex items-center gap-4 text-slate-500">
            <a
              href="https://www.facebook.com/YourPage"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
              title="Facebook"
            >
              <FaFacebook size={20} className="text-[#1877F2]" />
            </a>

            <a
              href="https://www.instagram.com/increrasableme"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
              title="Instagram"
            >
              <FaInstagram size={20} className="text-pink-500" />
            </a>

            <a
              href="https://www.linkedin.com/in/YourProfile"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
              title="LinkedIn"
            >
              <FaLinkedin size={20} className="text-[#0A66C2]" />
            </a>

            <a
              href="https://www.youtube.com/user/YourChannel"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
              title="YouTube"
            >
              <FaYoutube size={20} className="text-red-600" />
            </a>
          </div>

          {/* Copyright Metadata */}
          <p className="text-slate-500 text-center sm:text-right">
            Copyright © 2026 High School Tsholofelo | All Rights Reserved |
            Design by Graphica Designs
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

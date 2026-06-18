import React, { useState } from "react";
import { Navigate , useNavigate} from "react-router-dom";

import Navbar from "../components/Navbar";
import {
  CalendarDays,
  AlertTriangle,
  CheckCircle2,
  FileCheck2,
  Download,
  ChevronDown,
  GraduationCap,
  BookOpen,

} from "lucide-react";

const Admission = () => {
  // Simple state arrays to control active dropdown panels
  const [grade8Open, setGrade8Open] = useState(true);
  const [feesOpen, setFeesOpen] = useState(false);

  const grade8Guidelines = [
    {
      icon: CalendarDays,
      color: "text-orange-500",
      text: "Application Period Begins: Online registrations and manual applications open early May. Please mark your calendars and prepare your file early!",
    },
    {
      icon: AlertTriangle,
      color: "text-amber-600",
      text: "Important Deadline Alert: Please note that the school governance cannot accept any administrative applications submitted past the official closing date.",
    },
    {
      icon: CheckCircle2,
      color: "text-orange-500",
      text: "Required Fields: When completing your registration portal or form documents, ensure all metrics marked with an asterisk (*) are completely filled.",
    },
    {
      icon: FileCheck2,
      color: "text-orange-500",
      text: "Certify Your Documents: Before uploading or handing in your paperwork, verify that your ID, latest report cards, and residential verification letters are fully certified by SAPS or a Commissioner of Oaths.",
    },
  ];

  const subjects = [
    {
      phase: "Languages",
      items: ["Setswana Home Language", "English First Additional Language"],
    },
    {
      phase: "Core Foundations",
      items: [
        "Life Orientation",
        "Natural Sciences",
        "Economic Management Sciences",
      ],
    },
    {
      phase: "Technical & Creative Specialist",
      items: ["Technology Arts", "Creative Arts"],
    },
  ];

  return (
    <div
      id="admission"
      className="min-h-screen bg-stone-50 text-stone-800 font-sans flex flex-col selection:bg-orange-500 selection:text-white"
    >
      {/* Reusable Header Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* Page Hero Banner */}
        <div className="relative w-full h-[320px] bg-stone-950 overflow-hidden flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-30"
              src="/IMAGES/admission.jpg"
              alt="Tsholofelo Technical Admissions Hub"
              onError={(e) => {
                e.target.src = "/IMAGES/school-image.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-stone-950/40 to-stone-950"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <span className="text-xs font-bold tracking-widest text-orange-400 uppercase bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
              Registration Gateway
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-3">
              School{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                Admissions
              </span>
            </h1>
            <p className="text-stone-400 max-w-md mx-auto mt-2 text-sm">
              Secure your place at Boitekong’s premium secondary technical
              institution.
            </p>
          </div>
        </div>

        {/* Content & Interactive Dropdowns */}
        <div className="max-w-4xl mx-auto px-4 py-16 space-y-6">
          {/* Dropdown Card 1: Grade 8 Enrolment */}
          <div className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden transition-all">
            <button
              onClick={() => setGrade8Open(!grade8Open)}
              className="w-full flex items-center justify-between p-6 bg-stone-900 text-white font-bold text-left hover:bg-stone-850 transition-colors focus:outline-none"
            >
              <span className="flex items-center gap-3 text-base md:text-lg">
                <GraduationCap className="text-orange-500 shrink-0" size={22} />
                Enrolment Guide into Grade 8
              </span>
              <ChevronDown
                size={20}
                className={`text-orange-400 transform transition-transform duration-300 ${grade8Open ? "rotate-180" : ""}`}
              />
            </button>

            {grade8Open && (
              <div className="p-6 md:p-8 space-y-6 border-t border-stone-100 animate-fadeIn">
                <div className="bg-amber-50/50 border border-amber-200/60 rounded-xl p-4 flex items-start gap-3">
                  <AlertTriangle
                    className="text-amber-600 shrink-0 mt-0.5"
                    size={18}
                  />
                  <div>
                    <h5 className="font-bold text-amber-900 text-sm uppercase tracking-wide">
                      Important Parent Notice
                    </h5>
                    <p className="text-xs text-amber-800 leading-relaxed mt-0.5">
                      This application cycle must be systematically completed by
                      an authorized biological parent or legal court-appointed
                      guardian.
                    </p>
                  </div>
                </div>

                {/* Grid Lists layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  {grade8Guidelines.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="flex gap-3 bg-stone-50 p-4 rounded-xl border border-stone-100"
                      >
                        <Icon
                          className={`${item.color} shrink-0 mt-0.5`}
                          size={18}
                        />
                        <p className="text-stone-600 leading-relaxed text-xs md:text-sm">
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Call to Action Actions bar */}
                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs md:text-sm">
                  <p className="text-stone-500 font-medium text-center sm:text-left">
                    Ready to proceed? Download the offline forms directly.
                  </p>
                  <a
                    href="/DOCUMENTS/admission-form.pdf"
                    download
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold rounded-xl shadow-md hover:from-orange-600 hover:to-amber-700 transition-all text-xs"
                  >
                    <Download size={14} /> Download Application Form
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Dropdown Card 2: Curriculum Structure & Fees */}
          <div className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden transition-all">
            <button
              onClick={() => setFeesOpen(!feesOpen)}
              className="w-full flex items-center justify-between p-6 bg-stone-900 text-white font-bold text-left hover:bg-stone-850 transition-colors focus:outline-none"
            >
              <span className="flex items-center gap-3 text-base md:text-lg">
                <BookOpen className="text-orange-500 shrink-0" size={22} />
                School Fees & Academic Streams
              </span>
              <ChevronDown
                size={20}
                className={`text-orange-400 transform transition-transform duration-300 ${feesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {feesOpen && (
              <div className="p-6 md:p-8 space-y-6 border-t border-stone-100 animate-fadeIn">
                <div>
                  <h4 className="text-stone-900 font-extrabold text-sm uppercase tracking-wider border-b border-stone-100 pb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>{" "}
                    Registered Curriculum Framework
                  </h4>
                  <p className="text-xs text-stone-500 mt-2">
                    Tsholofelo Technical integrates high-level technological
                    training with national standard curriculum modules.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                    {subjects.map((group, idx) => (
                      <div
                        key={idx}
                        className="bg-stone-50 p-4 rounded-xl border border-stone-100"
                      >
                        <span className="text-[11px] font-black uppercase text-amber-700 tracking-wider block mb-2">
                          {group.phase}
                        </span>
                        <ul className="space-y-1.5 text-xs text-stone-600 font-medium">
                          {group.items.map((sub, sIdx) => (
                            <li
                              key={sIdx}
                              className="flex items-center gap-1.5"
                            >
                              <span className="w-1 h-1 rounded-full bg-stone-400"></span>
                              {sub}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Institutional Financial Block */}
                <div className="pt-4 border-t border-stone-100">
                  <h4 className="text-stone-900 font-extrabold text-sm uppercase tracking-wider pb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>{" "}
                    Administration & Tuitions
                  </h4>
                  <div className="bg-stone-900 text-stone-300 rounded-xl p-5 text-xs md:text-sm space-y-2 mt-2">
                    <p>
                      For verified details on localized fee schedules, annual
                      payment brackets, and specific banking routes for
                      electronic funds transfers (EFT), contact our accounts
                      office directly:
                    </p>
                    <div className="pt-2 font-semibold text-white flex flex-wrap gap-x-6 gap-y-1 text-xs">
                      <span>Tel Desk: 063 881 9869</span>
                      <span>Email: accounts@tsholofelotech.co.za</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

    </div>
  );
};

export default Admission;

import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { FaFacebook } from "react-icons/fa";
import logo from "../img/logo.jpg"

import {

  Users,
  GraduationCap,
  Award,
  School,
} from "lucide-react";


const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      {/* Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-[500px] md:h-[650px] overflow-hidden pb-10">
          <img
            src={logo}
            alt="Tsholofelo Technical Secondary School"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white max-w-5xl">
              Welcome To Tsholofelo Technical Secondary School
            </h1>

            <p className="text-amber-400 text-lg md:text-xl mt-4 uppercase tracking-wider">
              Boitekong, Rustenburg
            </p>

            <p className="max-w-2xl mt-6 text-slate-200 text-lg">
              Empowering learners through quality education, technical skills,
              discipline, and innovation for a brighter future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                Apply Now
              </button>

              <button className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition" >
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-white py-16 shadow-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <Users className="mx-auto text-amber-600 mb-3" size={40} />
                <h3 className="text-3xl font-bold">1000+</h3>
                <p className="text-slate-600">Learners</p>
              </div>

              <div>
                <GraduationCap
                  className="mx-auto text-amber-600 mb-3"
                  size={40}
                />
                <h3 className="text-3xl font-bold">50+</h3>
                <p className="text-slate-600">Teachers</p>
              </div>

              <div>
                <Award className="mx-auto text-amber-600 mb-3" size={40} />
                <h3 className="text-3xl font-bold">97%</h3>
                <p className="text-slate-600">Pass Rate</p>
              </div>

              <div>
                <School className="mx-auto text-amber-600 mb-3" size={40} />
                <h3 className="text-3xl font-bold">5+</h3>
                <p className="text-slate-600">Years Excellence</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="max-w-5xl mx-auto px-4 py-20 space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              <span className="text-amber-800">Our </span>
              <span className="text-amber-600">Vision</span>
            </h2>

            <div className="w-20 h-1 bg-amber-600 mx-auto rounded-full my-4"></div>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Quality education, discipline, parental involvement, extra-mural
              opportunities and the positive development of every learner.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-10 text-center">
            <h2 className="text-3xl font-bold">
              <span className="text-amber-800">Our </span>
              <span className="text-amber-600">Mission</span>
            </h2>

            <div className="w-20 h-1 bg-amber-600 mx-auto rounded-full my-4"></div>

            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              To maintain a harmonious environment with efficient and
              well-structured governance that promotes quality education,
              discipline, parental involvement, extra-mural opportunities and
              the positive development of every learner.
            </p>
          </div>
        </section>

        {/* About School */}
        <section className="bg-white py-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-slate-800">
                About Our School
              </h2>

              <div className="w-20 h-1 bg-amber-600 mx-auto rounded-full mt-4"></div>
            </div>

            <div className="bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-200">
              <p className="text-lg text-slate-600 leading-relaxed">
                Tsholofelo Technical Secondary School is committed to providing
                quality education and technical skills development that prepares
                learners for higher education, employment opportunities and
                responsible citizenship.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mt-6">
                We strive to create an environment where academic excellence,
                discipline, innovation and personal growth are encouraged.
                Through dedicated educators and modern learning opportunities,
                we empower learners to become future leaders and skilled
                professionals.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />

    </div>
  );
};

export default Home;

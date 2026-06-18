import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaHammer,
  FaBolt,
  FaFire,
  FaFootballBall,
  FaChess,
  FaBasketballBall,
} from "react-icons/fa";

const Academics = () => {
  return (
    <>
      <Navbar />

      <main className="bg-slate-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[450px]">
          <img
            src="/IMAGES/school-image.jpg"
            alt="Academics"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl md:text-6xl font-bold">
                Academic Programmes
              </h1>

              <p className="mt-4 text-lg text-slate-200 max-w-2xl mx-auto">
                Preparing learners with academic excellence and practical
                technical skills for the future.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Streams */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold">Technical Specialisations</h2>

              <p className="text-slate-600 mt-3">
                Choose from our specialised technical streams
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Construction */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all">
                <img
                  src="/IMAGES/const-1.jfif"
                  alt="Construction"
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <FaHammer className="text-amber-600 text-4xl mb-4" />

                  <h3 className="text-2xl font-bold">
                    Construction Technology
                  </h3>

                  <p className="text-slate-600 mt-3">
                    Learn practical construction methods, building principles,
                    planning and engineering fundamentals.
                  </p>

                  <button className="mt-6 bg-amber-600 text-white px-5 py-2 rounded-lg hover:bg-amber-700">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Electrical */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all">
                <img
                  src="/IMAGES/electrical-1.jfif"
                  alt="Electrical"
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <FaBolt className="text-yellow-500 text-4xl mb-4" />

                  <h3 className="text-2xl font-bold">Electrical Technology</h3>

                  <p className="text-slate-600 mt-3">
                    Explore electrical systems, power generation, wiring and
                    practical electrical engineering skills.
                  </p>

                  <button className="mt-6 bg-amber-600 text-white px-5 py-2 rounded-lg hover:bg-amber-700">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Welding */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all">
                <img
                  src="/IMAGES/welding-1.jfif"
                  alt="Welding"
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <FaFire className="text-red-500 text-4xl mb-4" />

                  <h3 className="text-2xl font-bold">Welding & Metal Work</h3>

                  <p className="text-slate-600 mt-3">
                    Develop fabrication, welding and metalwork skills required
                    in modern industry.
                  </p>

                  <button className="mt-6 bg-amber-600 text-white px-5 py-2 rounded-lg hover:bg-amber-700">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="bg-white py-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold">Curriculum</h2>
            </div>

            <div className="space-y-5">
              <details className="bg-slate-50 rounded-xl shadow p-5">
                <summary className="cursor-pointer font-bold text-lg">
                  Grades 8 – 9 Curriculum
                </summary>

                <ul className="mt-4 space-y-2 text-slate-600">
                  <li>Setswana Home Language</li>
                  <li>English First Additional Language</li>
                  <li>Life Orientation</li>
                  <li>Social Sciences</li>
                  <li>Natural Sciences</li>
                  <li>Creative Arts</li>
                  <li>Economic Management Sciences</li>
                  <li>Technology</li>
                </ul>
              </details>

              <details className="bg-slate-50 rounded-xl shadow p-5">
                <summary className="cursor-pointer font-bold text-lg">
                  Grades 10 – 12 Curriculum
                </summary>

                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Compulsory Subjects</h4>

                  <ul className="space-y-2 text-slate-600">
                    <li>Life Orientation</li>
                    <li>Mathematics / Technical Mathematics</li>
                    <li>Setswana Home Language</li>
                    <li>English First Additional Language</li>
                    <li>Physical Sciences / Technical Sciences</li>
                  </ul>

                  <h4 className="font-semibold mt-6 mb-2">Technical Streams</h4>

                  <ul className="space-y-2 text-slate-600">
                    <li>Electrical Technology (Power)</li>
                    <li>Civil Technology (Construction)</li>
                    <li>Metal Work (Welding)</li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Sports */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold">Sports & Activities</h2>

              <p className="text-slate-600 mt-3">
                Building teamwork, leadership and healthy lifestyles.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="bg-white shadow rounded-xl p-6 text-center">
                <FaFootballBall className="mx-auto text-green-600 text-3xl mb-3" />
                Football
              </div>

              <div className="bg-white shadow rounded-xl p-6 text-center">
                <FaChess className="mx-auto text-slate-700 text-3xl mb-3" />
                Chess
              </div>

              <div className="bg-white shadow rounded-xl p-6 text-center">
                🏐
                <div className="mt-3">Volleyball</div>
              </div>

              <div className="bg-white shadow rounded-xl p-6 text-center">
                🏀
                <div className="mt-3">Basketball</div>
              </div>

              <div className="bg-white shadow rounded-xl p-6 text-center">
                🏐
                <div className="mt-3">Netball</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-amber-600 py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold text-white">
              Start Your Technical Education Journey
            </h2>

            <p className="text-amber-100 mt-4 text-lg">
              Join Tsholofelo Technical Secondary School and prepare for a
              successful future.
            </p>

            <button className="mt-8 bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100">
              Apply Now
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Academics;

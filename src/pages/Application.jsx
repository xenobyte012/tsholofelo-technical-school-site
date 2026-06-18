import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaFilePdf, FaDownload, FaUserGraduate } from "react-icons/fa";

const Application = () => {

  const handleDownload = () => {
    const link = document.createElement("a");

    link.href = "/documents/grade8-application-form.pdf";
    link.download = "Tsholofelo-Grade8-Application-Form.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-20">
          <div className="max-w-6xl mx-auto px-4 text-center text-white">
            <FaUserGraduate className="mx-auto text-6xl text-amber-500 mb-6" />

            <h1 className="text-5xl font-bold mb-4">Grade 8 Applications</h1>

            <p className="text-slate-300 max-w-2xl mx-auto">
              Download the official Tsholofelo Technical Secondary School
              application form and begin your journey toward quality technical
              education.
            </p>
          </div>
        </section>

        {/* Application Card */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left */}
              <div className="bg-amber-600 p-10 text-white flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">Application Form</h2>

                <p className="leading-relaxed">
                  Download the Grade 8 application form and complete all
                  required information before submission.
                </p>

                <ul className="mt-6 space-y-3">
                  <li>✓ Grade 8 Admissions</li>
                  <li>✓ Official School Form</li>
                  <li>✓ Printable PDF Format</li>
                  <li>✓ Easy Submission Process</li>
                </ul>
              </div>

              {/* Right */}
              <div className="p-10 flex flex-col items-center justify-center">
                <FaFilePdf className="text-red-500 text-8xl mb-6" />

                <h3 className="text-2xl font-bold text-center">
                  Grade 8 Admission Form
                </h3>

                <p className="text-slate-600 text-center mt-3">
                  Click below to download the latest application form.
                </p>

                <button
                  onClick={handleDownload}
                  className="mt-8 flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl hover:bg-slate-800 transition"
                >
                  <FaDownload />
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="max-w-6xl mx-auto px-4 pb-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            Admission Requirements
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold text-lg mb-3">Certified Documents</h3>

              <p className="text-slate-600">
                Submit certified copies of birth certificate and parent IDs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold text-lg mb-3">Latest Report Card</h3>

              <p className="text-slate-600">
                Include the most recent school report when applying.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold text-lg mb-3">Proof of Address</h3>

              <p className="text-slate-600">
                Provide a recent proof of residence document.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold text-white">Need Assistance?</h2>

            <p className="text-slate-300 mt-4">
              Contact our admissions office for help with your application.
            </p>

            <div className="mt-6 space-y-2 text-amber-500 font-semibold">
              <p>063 881 9869</p>
              <p>071 345 8605</p>
              <p>tsholofelotechweb@gmail.com</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Application;

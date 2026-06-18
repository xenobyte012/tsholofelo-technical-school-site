import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { MapPin, Mail, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Navbar />

      <main className="bg-slate-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-20">
          <div className="max-w-6xl mx-auto px-4 text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>

            <p className="text-slate-300 max-w-2xl mx-auto">
              Have questions about admissions, academics, or school activities?
              We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Form + Map */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>

              <p className="text-slate-600 mb-8">
                Send us a message and we'll get back to you as soon as possible.
              </p>

              <form
                action="https://formsubmit.co/tsholofelotechweb@gmail.com"
                method="POST"
                className="space-y-5"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full p-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                />

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  required
                  className="w-full p-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                />

                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <iframe
                title="School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.733492467228!2d27.3162759!3d-25.6126474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebe0d204fc635f9%3A0x3351824e70b1f95f!2sTsholofelo%20Technical%20Secondary%20School!5e0!3m2!1sen!2sza!4v1711722201481!5m2!1sen!2sza"
                className="w-full h-full min-h-[500px]"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Address */}
            <div className="bg-white p-8 rounded-3xl shadow-md text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-amber-100 mx-auto rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-amber-600" size={28} />
              </div>

              <h3 className="text-xl font-bold mb-2">Our Location</h3>

              <p className="text-slate-600">
                3432 Bophuthatswana Street
                <br />
                Boitekong, Rustenburg
                <br />
                0300
              </p>
            </div>

            {/* Email */}
            <div className="bg-white p-8 rounded-3xl shadow-md text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-amber-100 mx-auto rounded-full flex items-center justify-center mb-4">
                <Mail className="text-amber-600" size={28} />
              </div>

              <h3 className="text-xl font-bold mb-2">Email Us</h3>

              <p className="text-slate-600">tsholofelotechweb@gmail.com</p>
            </div>

            {/* Phone */}
            <div className="bg-white p-8 rounded-3xl shadow-md text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-amber-100 mx-auto rounded-full flex items-center justify-center mb-4">
                <Phone className="text-amber-600" size={28} />
              </div>

              <h3 className="text-xl font-bold mb-2">Call Us</h3>

              <p className="text-slate-600">
                063 881 9869
                <br />
                071 345 8605
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;

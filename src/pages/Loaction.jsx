import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { MapPin, Phone, Mail, Navigation } from "lucide-react";

const images = [
  "/IMAGES/school-image.jpg",
  "/IMAGES/school1.jpg",
  "/IMAGES/school2.jpg",
  "/IMAGES/school3.jpg",
];

const Location = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      <main className="bg-slate-50 min-h-screen">
        {/* Hero */}
        <section className="relative h-[350px]">
          <img
            src={images[currentImage]}
            alt="School"
            className="absolute inset-0 h-full w-full object-cover transition-all duration-1000"
          />

          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl font-bold mb-4">Find Our School</h1>

              <p className="text-lg text-slate-200">
                Tsholofelo Technical Secondary School
              </p>
            </div>
          </div>
        </section>

        {/* School Information */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Information */}
            <div>
              <h2 className="text-4xl font-bold mb-8">School Location</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Physical Address</h3>

                    <p className="text-slate-600">
                      3432 Bophuthatswana Street, Boitekong, Rustenburg, 0300
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Contact Numbers</h3>

                    <p className="text-slate-600">063 881 9869</p>

                    <p className="text-slate-600">071 345 8605</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email Address</h3>

                    <p className="text-slate-600">
                      tsholofelotechweb@gmail.com
                    </p>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=3432+Bophuthatswana+Street+Boitekong+Rustenburg"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-amber-600 text-white px-6 py-3 rounded-xl hover:bg-amber-700 transition"
                >
                  <Navigation size={18} />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <iframe
                title="School Location"
                src="https://maps.google.com/maps?q=Boitekong%20Rustenburg&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[450px]"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold">School Gallery</h2>

              <p className="text-slate-600 mt-3">
                Explore our campus and facilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl shadow-md"
                >
                  <img
                    src={image}
                    alt={`School ${index + 1}`}
                    className="w-full h-64 object-cover hover:scale-110 transition duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold text-white">Visit Our Campus</h2>

            <p className="text-slate-300 mt-4">
              We welcome parents and learners to visit our school and learn more
              about our academic and technical programmes.
            </p>

            <a
              href="tel:0638819869"
              className="inline-block mt-8 bg-amber-600 text-white px-8 py-3 rounded-xl hover:bg-amber-700 transition"
            >
              Contact School
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Location;

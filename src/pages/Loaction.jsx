import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import loc_img from "../img/loc.jpg"
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
            src={loc_img}
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

                    <p className="text-slate-600">064 984 2708</p>

                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email Address</h3>

                    <p className="text-slate-600">
                      600105439@nwed.gov.za
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


      </main>

      <Footer />
    </>
  );
};

export default Location;

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CalendarDays, ArrowRight } from "lucide-react";
import news_img from "../img/news.jpg"
const newsData = [
  {
    id: 1,
    title: "Grade 12 Learners Begin Final Exam Preparation",
    date: "18 June 2026",
    image: "/IMAGES/school-image.jpg",
    description:
      "Our Grade 12 learners have started intensive preparation sessions ahead of their final examinations.",
  },
  {
    id: 2,
    title: "New Electrical Workshop Equipment Installed",
    date: "15 June 2026",
    image: "/IMAGES/electrical-1.jfif",
    description:
      "The school has upgraded its Electrical Technology workshop with modern training equipment.",
  },
  {
    id: 3,
    title: "Construction Students Showcase Projects",
    date: "12 June 2026",
    image: "/IMAGES/const-1.jfif",
    description:
      "Students displayed outstanding construction models during the annual technology exhibition.",
  },
  {
    id: 4,
    title: "Sports Day Announced",
    date: "10 June 2026",
    image: "/IMAGES/school-image.jpg",
    description:
      "Preparations are underway for the annual sports day competition.",
  },
  {
    id: 5,
    title: "Welding Competition Winners",
    date: "08 June 2026",
    image: "/IMAGES/welding-1.jfif",
    description:
      "Congratulations to our Welding Technology learners who won regional awards.",
  },
  {
    id: 6,
    title: "Parent Information Meeting",
    date: "05 June 2026",
    image: "/IMAGES/school-image.jpg",
    description:
      "Parents are invited to attend the upcoming academic progress meeting.",
  },
];

const News = () => {
  return (
    <>
      <Navbar />

      <main className="bg-slate-50 min-h-screen">
        {/* Hero */}
        <section className="relative h-[350px]">
          
            <img src={news_img} />

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white px-4">


              <p className="max-w-2xl mx-auto text-slate-200">
                Stay informed about the latest activities, achievements and
                announcements from Tsholofelo Technical Secondary School.
              </p>
            </div>
          </div>
        </section>

        {/* Search */}
        <section className="max-w-7xl mx-auto px-4 py-10">
          <input
            type="text"
            placeholder="Search news..."
            className="w-full p-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </section>

        {/* Featured News */}
        <section className="max-w-7xl mx-auto px-4 pb-16">
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2">
              
                src="/IMAGES/sch

              <div className="p-10 flex flex-col justify-center">
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm w-fit">
                  Featured Story
                </span>

                <h2 className="text-4xl font-bold mt-4">
                  Excellence in Technical Education
                </h2>

                <p className="text-slate-600 mt-4 leading-relaxed">
                  Tsholofelo Technical continues to empower learners through
                  innovative technical programmes, modern workshops and strong
                  academic performance.
                </p>

                <button className="mt-6 flex items-center gap-2 text-amber-600 font-semibold">
                  Read More
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="max-w-7xl mx-auto px-4 pb-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Latest News</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((news) => (
              <article
                key={news.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                


                <div className="p-6">
                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                    <CalendarDays size={16} />
                    {news.date}
                  </div>

                  <h3 className="text-xl font-bold mb-3">{news.title}</h3>

                  <p className="text-slate-600 mb-5">{news.description}</p>

                  <button className="text-amber-600 font-semibold flex items-center gap-2">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* School Announcement */}
        <section className="bg-slate-900 py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold text-white">
              Important School Announcements
            </h2>

            <p className="text-slate-300 mt-4">
              Follow our website regularly for updates on admissions,
              examinations, sports events and school activities.
            </p>

            <button className="mt-8 bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition">
              View Announcements
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default News;

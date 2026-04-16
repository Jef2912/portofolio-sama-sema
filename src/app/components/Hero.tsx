import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

const heroImg = `${import.meta.env.BASE_URL}Desktop - 6.png`;

const stats = [
  { value: "500+", label: "Events Covered" },
  { value: "98%", label: "Happy Clients" },
  { value: "12K+", label: "Photos Taken" },
  { value: "5★", label: "Average Rating" },
];

export function Hero() {
  const [videoVisible, setVideoVisible] = useState(false);

  return (
    <section className="relative min-h-screen bg-[#ffffff] flex items-center overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#f5c97a]/8 blur-[120px]" />
        <div className="absolute -bottom-60 -right-20 w-[700px] h-[700px] rounded-full bg-[#e8804e]/6 blur-[150px]" />
      </div>

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none scale-125"
        style={{
          backgroundImage: `url("${import.meta.env.BASE_URL}Desktop - 6.png")`,
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Content */}
          <div className="w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FFD60A]/30 bg-[#FFD60A]/8 mb-8 mx-auto">
              <span className="w-2 h-2 rounded-full bg-[#FFFFFF] animate-pulse" />
              <span style={{ fontSize: "13px", color: "#000000", fontWeight: 500, letterSpacing: "0.08em" }}>
                NOW BOOKING FOR 2026
              </span>
            </div>

            {/* Heading */}
            <h1
              style={{
                fontSize: "clamp(42px, 6vw, 76px)",
                color: "#000000",
                fontWeight: 600,
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
              }}
            >
              Every hello might lead to a goodbye,{" "}
              <span
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(135deg, #1D4ED8 0%, #FFD60A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <br />
                but the memories?
              </span>
              <br />
              They’re forever.
            </h1>

            {/* Subtext */}
            <p
              style={{ fontSize: "18px", color: "#000000ff", lineHeight: 1.7 }}
              className="mt-6 max-w-2xl mx-auto"
            >
              Buku tahunan premium dengan desain fresh & kekinian. Tim profesional yang siap mewujudkan kenangan angkatanmu jadi karya yang layak dikenang selamanya.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mt-10 justify-center">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-[#FFD60A] to-[#FFD60A] hover:opacity-90 transition-all duration-300 hover:gap-4"
                style={{ fontSize: "15px", color: "#0d0d0d", fontWeight: 600 }}
              >
                Book Your Event
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <button
                onClick={() => setVideoVisible(true)}
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-[#1D4ED8] to-[#1D4ED8] hover:opacity-90 transition-all duration-300 hover:gap-4"
                style={{ fontSize: "15px", color: "#ffffff", fontWeight: 600 }}
              >
                See the Experience
                <Play size={18} fill="#ffffff" className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 pt-14 w-full">
              {stats.map((s, index) => (
                <motion.div 
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  whileHover={{ scale: 1.15, y: -8 }}
                  transition={{ duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.5 }}
                  className="cursor-default hover:text-blue-600 transition-colors"
                >
                  <div
                    style={{
                      fontSize: "28px",
                      color: "#000000",
                      fontWeight: 600,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{ fontSize: "13px", color: "#6a6560", fontWeight: 400 }}
                    className="mt-1"
                  >
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

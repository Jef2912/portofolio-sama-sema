import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";

const heroImg = "Desktop - 6.png";

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
          backgroundImage: `url("Desktop - 6.png")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FFD60A]/30 bg-[#FFD60A]/8 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#FFFFFF] animate-pulse" />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#000000", fontWeight: 500, letterSpacing: "0.08em" }}>
                NOW BOOKING FOR 2026
              </span>
            </div>

            {/* Heading */}
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
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
                but the memories?
              </span>
              <br />
              They’re forever.
            </h1>

            {/* Subtext */}
            <p
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "18px", color: "#9a9488", lineHeight: 1.7 }}
              className="mt-6 max-w-md"
            >
              Buku tahunan premium dengan desain fresh & kekinian. Tim profesional yang siap mewujudkan kenangan angkatanmu jadi karya yang layak dikenang selamanya. 
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-[#FFD60A] to-[#FFD60A] hover:opacity-90 transition-all duration-300 hover:gap-4"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "#0d0d0d", fontWeight: 600 }}
              >
                Book Your Event
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <button
                onClick={() => setVideoVisible(true)}
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-[#FFD60A] hover:border-[#1D4ED8]/40 transition-colors duration-300"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "#000000", fontWeight: 400 }}
              >
                <div className="w-8 h-8 rounded-full bg-[#f5c97a]/15 flex items-center justify-center">
                  <Play size={14} fill="#000000" className="text-[#000000] ml-0.5" />
                </div>
                See the Experience
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 pt-14 border-t border-[#2a2820]">
              {stats.map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "28px",
                      color: "#000000",
                      fontWeight: 600,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#6a6560", fontWeight: 400 }}
                    className="mt-1"
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image collage */}
          <div className="relative lg:h-[600px] h-[400px]">
            {/* Main image */}
            <div className="absolute right-0 top-0 w-[85%] h-[90%] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImg}
                alt="Photo booth event"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/50 via-transparent to-transparent" />
            </div>

            {/* Floating card: polaroid */}
            <div className="absolute left-0 bottom-0 w-44 bg-[#FFD60A] p-3 shadow-2xl rounded-xl rotate-[-6deg]">
              <div className="w-full h-32 bg-gradient-to-br from-[#f5c97a]/30 to-[#e8804e]/30 rounded-md mb-3 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1735925138868-1373cb23ddb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBsYXVnaGluZyUyMHBob3RvJTIwc3RyaXAlMjBwb2xhcm9pZHxlbnwxfHx8fDE3NzI0NjU3NTN8MA&ixlib=rb-4.1.0&q=80&w=400"
                  alt="polaroid"
                  className="w-full h-full object-cover"
                />
              </div>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "12px", color: "#2a2820", fontStyle: "italic" }}>
                UWO GANTENG '25
              </p>
            </div>

            {/* Floating card: instant print badge */}
            <div className="absolute right-4 bottom-8 bg-[#1a1914]/90 backdrop-blur-md border border-[#3a3830] rounded-2xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1D4ED8] to-[#FFD60A] flex items-center justify-center flex-shrink-0">
                  <span style={{ fontSize: "16px" }}>📸</span>
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#f5f0e8", fontWeight: 600 }}>Instant Print</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#6a6560" }}>Ready in 10 seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Camera, Zap, Download, Palette, Users, Star } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Classic Photobox",
    desc: "The timeless booth experience. Full enclosure, professional lighting, and a selection of fun props to spark creativity.",
    tag: "Most Popular",
  },
  {
    icon: Zap,
    title: "Open Air Setup",
    desc: "Sleek, modern, and infinitely flexible. Perfect for large groups and customised branded backdrops.",
    tag: null,
  },
  {
    icon: Download,
    title: "Digital Gallery",
    desc: "Every photo auto-synced to a private online gallery. Share instantly via QR code, link, or social media.",
    tag: null,
  },
  {
    icon: Palette,
    title: "Custom Branding",
    desc: "Have a unique idea? We're open to exploring creative concepts that reflect the spirit of your generation.",
    tag: "Premium",
  },
  {
    icon: Users,
    title: "Professional Team",
    desc: "Responsive, friendly, and ready to collaborate. We work with you, not just as a vendor.",
    tag: null,
  },
  {
    icon: Star,
    title: "Flexibel Packet",
    desc: "From budget packages to complete premium packages, there are packages available to suit the needs of every group.",
    tag: "Premium",
  },
];

export function Services() {
  return (
    //bg inti
    <section id="services" className="min-h-screen w-full py-28 flex flex-col justify-center relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('${import.meta.env.BASE_URL}Desktop - 8.png')` }}>
      {/* Top transition from white Hero */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#ffffff] to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            style={{ fontSize: "12px", color: "#ffffff", fontWeight: 600, letterSpacing: "0.12em" }}
            className="uppercase mb-4"
          >
            What We Offer
          </p>
          <h2
            style={{
              fontSize: "clamp(34px, 4.5vw, 56px)",
              color: "#f5f0e8",
              fontWeight: 600,
              lineHeight: 1.15,
            }}
          >
            Experiences built for{" "}
            <span style={{ fontStyle: "italic", color: "#FFD60A" }}>every occasion</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative p-8 rounded-2xl border border-[#ffffff] bg-[#ffffff] hover:border-[#f5c97a]/30 hover:bg-[#FFD60A] transition-all duration-400 cursor-pointer"
              >
                {/* Tag */}
                {s.tag && (
                  <span
                    className="absolute top-6 right-6 px-3 py-1 rounded-full bg-[#000000]/15 border border-[#9a9488]/30"
                    style={{ fontSize: "11px", color: "#9a9488", fontWeight: 600 }}
                  >
                    {s.tag}
                  </span>
                )}

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#000000]/20 to-[#9a9488]/20 border border-[#000000]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={22} className="text-[#4C4A4A]" />
                </div>

                {/* Title */}
                <h3
                  style={{ fontSize: "22px", color: "#9a9488", fontWeight: 600 }}
                  className="mb-3"
                >
                  {s.title}
                </h3>

                {/* Desc */}
                <p style={{ fontSize: "15px", color: "#6a6560", lineHeight: 1.7 }}>
                  {s.desc}
                </p>

                {/* Hover line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#f5c97a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

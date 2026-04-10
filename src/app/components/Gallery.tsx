import { Tiles } from "@/components/ui/tiles";

const images = [

  {
    src: "POH01595.jpg",
    label: "SamaSema Groups",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "POH01105.jpg",
    label: "SamaSema Groups",
    span: "",
  },
  {
    src: "POH01231.jpg",
    label: "SamaSema Groups",
    span: "",
  },
  {
    src: "POH01416.jpg",
    label: "SamaSema Groups",
    span: "",
  },
  {
    src: "POH01324.jpg",
    label: "SamaSema Groups",
    span: "",
  },
  {
    src: "POH01151.jpg",
    label: "SamaSema Groups",
    span: "",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="min-h-screen w-full py-15 flex flex-col justify-center relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('')" }}>
      {/* Top transition from dark Services */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#0d0d0d] to-transparent pointer-events-none z-0" />

      <div className="absolute inset-0 z-0">
        <Tiles rows={60} cols={40} tileSize="lg" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4">
          <div>
            <p
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#282723ff", fontWeight: 600, letterSpacing: "0.12em" }}
              className="uppercase mb-4"
            >
              Our Gallery
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(34px, 4.5vw, 56px)",
                color: "#2a2820",
                fontWeight: 600,
                lineHeight: 1.15,
              }}
            >
              Moments we've{" "}
              <span style={{ fontStyle: "italic", color: "#ffffff" }}>captured</span>
            </h2>
          </div>
          <a
            href="#contact"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#2a2820", fontWeight: 500 }}
            className="flex items-center gap-2 hover:gap-3 transition-all duration-300 flex-shrink-0"
          >
            View Full Portfolio →
          </a>
        </div>

        {/* Masonry-like grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${img.span}`}
            >
              <img
                src={`${import.meta.env.BASE_URL}${img.src}`}
                alt={img.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/80 via-[#0d0d0d]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                <span
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", color: "#f5f0e8", fontWeight: 500, fontStyle: "italic" }}
                >
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

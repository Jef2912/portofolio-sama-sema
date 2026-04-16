import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);

    // Intersection Observer to highlight active link
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px", // Trigger active state when section takes up the viewport
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const links = [
    "Services",
    "Gallery",
    "How It Works",
    "Pricing",
    "Contact",
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-transparent shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 w-16 h-16 object-contain">
          <img
            src={`${import.meta.env.BASE_URL}logo.svg`}
            alt="Logo"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const sectionId = link.toLowerCase().replace(/\s+/g, "-");
            const isActive = activeSection === sectionId;
            return (
              <li key={link}>
                <a
                  href={`#${sectionId}`}
                  style={{
                    fontSize: "15px",
                    color: isActive ? "#f5c97a" : "#c9c4b8",
                    fontWeight: isActive ? 600 : 400,
                  }}
                  className="hover:text-[#f5c97a] transition-colors duration-300"
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FFD60A] to-[#FFD60A] hover:opacity-90 transition-opacity duration-300"
          style={{
            fontSize: "14px",
            color: "#0d0d0d",
            fontWeight: 600,
          }}
        >
          Book Now
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#f5f0e8]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0d0d0d]/98 backdrop-blur-md px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-4">
            {links.map((link) => {
              const sectionId = link.toLowerCase().replace(/\s+/g, "-");
              const isActive = activeSection === sectionId;
              
              return (
                <li key={link}>
                  <a
                    href={`#${sectionId}`}
                    style={{
                      fontSize: "16px",
                      color: isActive ? "#f5c97a" : "#c9c4b8",
                      fontWeight: isActive ? 600 : 400,
                    }}
                    className="block hover:text-[#f5c97a] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href="#contact"
                className="inline-flex px-5 py-2.5 rounded-full bg-gradient-to-r from-[#f5c97a] to-[#e8804e]"
                style={{
                  fontSize: "14px",
                  color: "#0d0d0d",
                  fontWeight: 600,
                }}
                onClick={() => setMobileOpen(false)}
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
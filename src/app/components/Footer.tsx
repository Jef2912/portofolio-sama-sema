import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#ffffff] border-t border-[#1e1c12]">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", color: "#FFD60A", fontWeight: 600 }}>
                sama <span style={{ color: "#1D4ED8" }}>sema</span>
              </span>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "#6a6560", lineHeight: 1.7, maxWidth: "320px" }}>
             Let’s create and level up your yearbook with Samasema.<br></br>Design by request💯<br></br>📍Based In Lampung
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-[#2a2820] flex items-center justify-center hover:border-[#f5c97a]/40 hover:text-[#f5c97a] transition-all duration-300 text-[#6a6560]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#FFD60A", fontWeight: 600, letterSpacing: "0.1em" }} className="uppercase mb-5">
              Services
            </p>
            <ul className="space-y-3">
              {["Classic Photobox", "Open Air Setup","Custom Branding", "Digital Gallery"].map((item) => (
                <li key={item}>
                  <a href="#services" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#6a6560" }} className="hover:text-[#c9c4b8] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#1D4ED8", fontWeight: 600, letterSpacing: "0.1em" }} className="uppercase mb-5">
              Company
            </p>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#" }, // Remains "#" since there is no obvious "About Us" section in App.tsx
                { label: "Gallery", href: "#gallery" },
                { label: "Pricing", href: "#pricing" },
                { label: "Contact", href: "#contact" },
                { label: "FAQs", href: "#faq" }
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#6a6560" }} className="hover:text-[#c9c4b8] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#1e1c12] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#4a4640" }}>
            © 2026 SamaSema Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#4a4640" }} className="hover:text-[#6a6560] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

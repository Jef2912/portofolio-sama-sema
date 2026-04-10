import { useEffect, useState } from "react";

const WA_NUMBER = "62895338381625";
const WA_MESSAGE = encodeURIComponent(
  "Halo SamaSema! Saya tertarik untuk memesan buku tahunan. Boleh saya tanya lebih lanjut? 😊"
);
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    // Muncul setelah 1.5 detik halaman dimuat
    const showTimer = setTimeout(() => setVisible(true), 1500);

    // Hentikan pulse setelah 6 detik
    const pulseTimer = setTimeout(() => setPulse(false), 7000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(pulseTimer);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes wa-bounce-in {
          0% { transform: scale(0) translateY(20px); opacity: 0; }
          60% { transform: scale(1.15) translateY(-4px); opacity: 1; }
          80% { transform: scale(0.95) translateY(2px); }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes wa-pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2); opacity: 0; }
        }
        @keyframes wa-tooltip-in {
          0% { opacity: 0; transform: translateX(10px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .wa-float-btn {
          animation: wa-bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .wa-pulse-ring {
          animation: wa-pulse-ring 1.5s ease-out infinite;
        }
        .wa-tooltip {
          animation: wa-tooltip-in 0.25s ease forwards;
        }
      `}</style>

      {visible && (
        <div
          style={{
            position: "fixed",
            bottom: "28px",
            right: "28px",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {/* Tooltip saat hover */}
          {hovered && (
            <div
              className="wa-tooltip"
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                padding: "10px 16px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                color: "#1a1a1a",
                whiteSpace: "nowrap",
                lineHeight: 1.5,
                border: "1px solid rgba(37, 211, 102, 0.2)",
              }}
            >
              <p style={{ fontWeight: 600, marginBottom: "2px" }}>💬 Chat SamaSema</p>
              <p style={{ color: "#6a6560", fontWeight: 400 }}>Balas dalam hitungan menit!</p>
            </div>
          )}

          {/* Tombol floating */}
          <div style={{ position: "relative" }}>
            {/* Pulse rings */}
            {pulse && (
              <>
                <span
                  className="wa-pulse-ring"
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background: "rgba(37, 211, 102, 0.35)",
                    pointerEvents: "none",
                  }}
                />
                <span
                  className="wa-pulse-ring"
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background: "rgba(37, 211, 102, 0.2)",
                    animationDelay: "0.5s",
                    pointerEvents: "none",
                  }}
                />
              </>
            )}

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="wa-float-btn"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                boxShadow: hovered
                  ? "0 12px 40px rgba(37, 211, 102, 0.6), 0 0 0 4px rgba(37, 211, 102, 0.2)"
                  : "0 8px 28px rgba(37, 211, 102, 0.45)",
                transform: hovered ? "scale(1.12)" : "scale(1)",
                transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease",
                textDecoration: "none",
                position: "relative",
                zIndex: 1,
              }}
              aria-label="Chat via WhatsApp"
            >
              {/* WhatsApp SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="30"
                height="30"
                fill="#ffffff"
              >
                <path d="M16.003 2.667C8.636 2.667 2.667 8.637 2.667 16c0 2.355.636 4.656 1.843 6.672L2.667 29.333l6.84-1.797A13.29 13.29 0 0 0 16.003 29.333C23.37 29.333 29.333 23.363 29.333 16S23.37 2.667 16.003 2.667zm0 24.267a11 11 0 0 1-5.607-1.532l-.402-.24-4.063 1.068 1.084-3.958-.26-.41A10.956 10.956 0 0 1 5.067 16c0-6.032 4.904-10.933 10.936-10.933S26.933 9.968 26.933 16s-4.898 10.934-10.93 10.934zm5.997-8.188c-.328-.164-1.947-.96-2.25-1.07-.302-.107-.522-.163-.742.163-.22.327-.853 1.07-1.046 1.29-.192.22-.385.246-.714.082-.328-.163-1.383-.51-2.634-1.625-.974-.868-1.632-1.939-1.824-2.267-.192-.328-.02-.504.145-.667.148-.147.328-.384.492-.575.164-.192.22-.328.328-.547.11-.22.055-.41-.027-.575-.083-.163-.742-1.789-1.016-2.45-.268-.644-.54-.557-.742-.567l-.632-.012a1.21 1.21 0 0 0-.878.412c-.302.328-1.153 1.126-1.153 2.746 0 1.62 1.18 3.186 1.344 3.406.165.22 2.322 3.545 5.625 4.972.786.34 1.4.543 1.877.695.79.25 1.508.215 2.076.13.633-.093 1.947-.795 2.222-1.563.274-.768.274-1.424.192-1.563-.08-.136-.3-.22-.63-.384z" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

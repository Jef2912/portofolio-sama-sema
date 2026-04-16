import { motion } from "motion/react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

// Using Unsplash source URLs for realistic avatar images
const testimonials = [
  // ... (omitting lines 7-64 for brevity in this instruction block, but they will be kept in the actual file by targeting exactly the start of the `export function Testimonials`)

  {
    text: "thank u so much yaa kaa! kemarin bener-bener kereen abisss🤩🤩 alhamdulillah dari awal take scene sampai akhir acaraa berjalan dengan lancaar suksess selaaluu samasema tim!🤜🏻🤛🏻🤍🤩.",
    image: "SMA15.png",
    name: "Ahad SMA 15 Bandar Lampung",
    role: "YearBook",
  },
  {
    text: "We hired Flow for our annual product launch. The branded prints and instant digital gallery drove incredible engagement on social media. Will 100% book again.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&q=80",
    name: "Natasha D.",
    role: "Corporate Launch",
  },
  {
    text: "I was skeptical a photobox could be this stylish — but Flow completely changed my mind. The 360 booth had a queue the entire night. Absolutely worth it.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&q=80",
    name: "Marcus T.",
    role: "30th Birthday",
  },
  {
    text: "gua mau ngucapin terimakasih banyakk buat kakak2 team samasema karena udah membantu menyukseskan acaraa kita dari shooting video sampai last ceremony. thank youu bgt kak acaranya berjalan dengan sangat lancar dan we had so much fun!, semoga sukses selaluu samasemates!! 🤩🤩",
    image: "SMA15.png",
    name: "Feroz SMA 15 Bandar Lampung",
    role: "YearBook",
  },
  {
    text: "The photo quality is unmatched. Not those blurry low-res strips you usually see. These are high-definition portraits that our guests actually framed.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
    name: "David L.",
    role: "Event Planner",
  },
  {
    text: "Their setup looked so elegant at our venue. It blended perfectly into the luxury aesthetic rather than sticking out like a sore thumb. Highly recommend.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80",
    name: "Emma S.",
    role: "Bride",
  },
  {
    text: "Our students loved the interactive prompts and digital sharing options. Best vendor we've booked for the summer festival by a mile.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80",
    name: "Michael Chen",
    role: "University Organiser",
  },
  {
    text: "They designed a custom overlay that matched our branding flawlessly. It made the user experience feel incredibly premium and thoughtful.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&q=80",
    name: "Sarah W.",
    role: "Marketing Director",
  },
  {
    text: "pengalaman yg ga bakal kitaorang lupain sih, makasih banyak yaa kakak kakak semuaaa, buat semua effort nya untuk kamii, maaf kalau kami susah di atur dan ga ninggalin kesan baik buat kakak semuaa, sukses selaluu kakak kakak samasema ⭐⭐⭐⭐⭐",
    image: "SMA15.png",
    name: "Agnar SMA 15 Bandar Lampung",
    role: "Yearbook",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
  return (
    <section className="bg-[#FFD60A] relative py-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <FlickeringGrid
          className="absolute inset-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#1D4ED8" // Blue dots
          maxOpacity={0.4}
          flickerChance={0.2}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#FFD60A] blur-[100px] pointer-events-none" />
      </div>

      {/* Top transition from Pricing (Removed to allow seamless blend) */}
      {/* Bottom transition to Contact */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#FFD60A] to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center"
        >
          <p
            style={{ fontSize: "12px", color: "#1D4ED8", fontWeight: 700, letterSpacing: "0.12em" }}
            className="uppercase mb-4"
          >
            Client Stories
          </p>

          <h2
            style={{
              fontSize: "clamp(34px, 4.5vw, 56px)",
              color: "#ffffff",
              fontWeight: 600,
              lineHeight: 1.15,
            }}
          >
            Loved by{" "}
            <span style={{ fontStyle: "italic", color: "#1D4ED8" }}>hundreds</span>
          </h2>
        </motion.div>

        <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,white_25%,white_75%,transparent)] h-[700px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={35} className="w-[350px]" />
          <TestimonialsColumn testimonials={secondColumn} duration={45} className="hidden md:block w-[350px]" />
          <TestimonialsColumn testimonials={thirdColumn} duration={38} className="hidden lg:block w-[350px]" />
        </div>
      </div>
    </section>
  );
}

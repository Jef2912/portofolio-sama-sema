import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { GradientBackground } from "@/components/ui/gradient-background";

const steps = [
  {
    number: "01",
    title: "Get in Touch",
    desc: "Tell us about your event — date, venue, guest count, and vibe. We'll tailor a package just for you.",
  },
  {
    number: "02",
    title: "Pick Your Style",
    desc: "Choose from our range of setups, backdrops, and prop kits. Customise every detail to match your theme.",
  },
  {
    number: "03",
    title: "We Show Up",
    desc: "Our crew arrives early, sets up flawlessly, and runs the booth so you can focus on having fun.",
  },
  {
    number: "04",
    title: "Relive the Moments",
    desc: "Every photo lands in your private digital gallery. Instant prints are handed out on the spot.",
  },
];

export function HowItWorks() {
  const containerRef = useRef<HTMLElement>(null);

  // Track scroll progress along the tall container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start tracking when top of container hits top of viewport
    // End tracking when bottom of container hits bottom of viewport
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} id="how-it-works" className="relative h-[300vh] bg-[#0d0d0d]">
      {/* Sticky container that stays in the viewport */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Animated Background layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <GradientBackground
            className="w-full h-full"
            overlay={true}
            overlayOpacity={0} // Darken the backdrop so text remains visible
            gradients={[
              "linear-gradient(135deg, rgba(234, 179, 50, 1) 0%, rgba(50, 149, 255, 1) 100%)",
              "linear-gradient(135deg, rgba(245, 202, 122, 1) 0%, rgba(100, 180, 255, 1) 100%)",
              "linear-gradient(135deg, rgba(50, 149, 255, 1) 0%, rgba(234, 179, 50, 1) 100%)",
              "linear-gradient(135deg, rgba(234, 179, 50, 1) 0%, rgba(50, 149, 255, 1) 100%)"
            ]}
          />
        </div>

        {/* Bottom transition to Pricing (#0a0a08) */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#ffffff] to-transparent pointer-events-none z-10" />

        {/* Decorative rings layer (above background) */}
        <div className="absolute right-[-200px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#2a2820] opacity-40 pointer-events-none z-0" />
        <div className="absolute right-[-120px] top-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-[#f5c97a]/10 opacity-60 pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <p
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#fff1b5", fontWeight: 600, letterSpacing: "0.12em" }}
              className="uppercase mb-4"
            >
              How It Works
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(34px, 4.5vw, 56px)",
                color: "#f5f0e8",
                fontWeight: 600,
                lineHeight: 1.15,
              }}
            >
              Four simple steps to{" "}
              <span style={{ fontStyle: "italic", color: "#fff1b5" }}>pure magic</span>
            </h2>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Base Connecting line desktop */}
            <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px bg-[#3a3830]" />

            {/* Animated fill Connecting line desktop */}
            <motion.div
              className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-[#f5c97a] to-[#e8804e] origin-left"
              style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            />

            {steps.map((step, i) => (
              <StepItem key={step.number} step={step} index={i} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepItem({ step, index, progress }: { step: any; index: number; progress: any }) {
  // We divide 0 to 1 progress into segments for each node
  // Node 0: starting active at 0 (or slightly negative to ensure it's on)
  // Node 1: active at 0.33
  // Node 2: active at 0.66
  // Node 3: active at 1.0
  const stepTarget = index / 3;

  // Make the start a bit early to give a nice fade
  // If it's the first step, let it start already active (0)
  const stepStart = index === 0 ? 0 : Math.max(0, stepTarget - 0.15);

  // The first node should be fully visible at 0.
  // We map the incoming progress such that between `stepStart` and `stepTarget`, 
  // the value goes from 0 to 1.
  const isActive = useTransform(progress, [stepStart, stepTarget], [index === 0 ? 1 : 0, 1]);

  return (
    <div className="relative text-center group">
      {/* Number bubble */}
      <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full border border-[#3a3830] bg-[#111109] mb-8 mx-auto overflow-hidden">
        {/* Active background glow */}
        <motion.div
          className="absolute inset-0 bg-[#f5c97a]/10"
          style={{ opacity: isActive }}
        />

        {/* Gold ring on active */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-[#f5c97a]/40"
          style={{ opacity: isActive }}
        />

        {/* Base text (inactive state) */}
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "28px",
            fontWeight: 600,
            color: "#6a6560", // Dark gray when inactive
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          {step.number}
        </span>

        {/* Highlighted text (active state) fade-in over base text */}
        <motion.span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "28px",
            fontWeight: 600,
            background: "linear-gradient(135deg, #f5c97a 0%, #e8804e 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            opacity: isActive,
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          {step.number}
        </motion.span>
      </div>

      <h3
        style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", color: "#f5f0e8", fontWeight: 600 }}
        className="mb-3"
      >
        {step.title}
      </h3>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "#6a6560", lineHeight: 1.7 }}>
        {step.desc}
      </p>
    </div>
  );
}

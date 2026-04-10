import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { HowItWorks } from "./components/HowItWorks";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { FAQ1 } from "../components/ui/faq-monochrome";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="bg-[#0d0d0d] min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Contact />
      <FAQ1 />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}


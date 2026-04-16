import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Logos3 } from "@/components/ui/logos3";
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
    <div style={{}} className="bg-[#0d0d0d] min-h-screen">
      <Navbar />
      <Hero />
      <Logos3 />
      <Services />
      <Logos3 />
      <Gallery />
      <Logos3 />
      <HowItWorks />
      <Logos3 />
      <Pricing />
      <Logos3 />
      <Testimonials />
      <Logos3 />
      <Contact />
      <Logos3 />
      <FAQ1 />
      <Logos3 />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}


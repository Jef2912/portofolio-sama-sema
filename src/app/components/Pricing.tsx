import { CreativePricing } from "@/components/ui/creative-pricing";
import type { PricingTier } from "@/components/ui/creative-pricing";
import { Pencil, Star, Sparkles } from "lucide-react";

const sampleTiers: PricingTier[] = [
  {
    name: "Ceria",
    icon: <Pencil className="w-6 h-6" />,
    price: 450000,
    suffix: "/siswa",
    description: "Simple, Fast, And High Quality",
    color: "amber",
    features: [
      "Buku tahunan dengan template desain kekinian",
      "Layout menyatu sempurna dengan konten",
      "Cetak full color, warna tajam dan merata",
      "Proses produksi cepat dan efisien",
      "Pilihan terbaik untuk angkatan dengan budget terencana",
      "File digital arsip siap simpan selamanya",
    ],
  },
  {
    name: "Bahagia",
    icon: <Star className="w-6 h-6" />,
    price: "Rp Custom",
    description: "Exclusive, Impress, and Memorable",
    color: "blue",
    features: [
      "Buku tahunan full custom sesuai karakter angkatan",
      "Desain eksklusif mencerminkan identitas sekolah",
      "Kertas full color kualitas terbaik, warna hidup",
      "Hard cover premium, kokoh dan elegan",
      "Box buku Grade A, tebal, rapi, dan berkesan",
      "Dokumentasi foto acara sekolah profesional",
      "File foto resolusi tinggi, siap cetak dan digital",
    ],
    popular: true,
  },
  {
    name: "Abadi",
    icon: <Sparkles className="w-6 h-6" />,
    price: "Rp Custom",
    description: "All-in Premium, without compromise",
    color: "purple",
    features: [
      "Buku tahunan full custom dengan konsep visual unik",
      "Hard cover finishing eksklusif, mewah di tangan",
      "Box buku custom tebal, kokoh, dan berkarakter",
      "Dokumentasi foto dan video acara sekolah lengkap",
      "Video highlight cinematic acara angkatan",
      "Dukungan sponsorship acara hingga Rp 5.000.000",
      "Tim dokumentasi profesional siap di lapangan",
      "Backup data aman, kenangan tersimpan selamanya",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-gradient-to-b from-[#0d0d0d] via-[#1D4ED8] to-[#FFD60A] py-32 relative overflow-hidden">
      {/* Top Gradient for smooth transition from previous section (Removed) */}

      {/* Subtle background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none -z-0" />

      <div className="relative z-10">
        <CreativePricing tiers={sampleTiers} />
      </div>

      {/* Bottom Gradient for smooth transition to next section (Removed) */}
    </section>
  );
}

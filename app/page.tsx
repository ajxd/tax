// app/page.tsx
import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import ServicesCarousel from "@/components/ServicesCarousel";
import ClientsSection from "@/components/ClientsSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main>
      {/* Hero with video, nav, leaves, etc. */}
      <Hero />

      {/* Static service grid (if you still need it) */}
      <ServiceGrid />

      {/* Two‑at‑a‑time services carousel */}
      <ServicesCarousel />

      {/* Our Clients counters with leaves & dotted background */}
      <ClientsSection />

      {/* Future sections: FeaturePanels, PartnerWithUs, Testimonials, etc. */}
      <FaqSection />

      <Footer />
    </main>
  );
}

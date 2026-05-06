// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SystemDetails from "@/components/SystemDetails";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "CherasRiansAthletes Pro",
  description: "Elevate athlete performance with data. A dynamic, high-performance ecosystem for modern sports management.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SystemDetails />
      <CTA />
      <Footer />
    </main>
  );
}
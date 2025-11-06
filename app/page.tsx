import Header from "./components/Header";
import Hero from "./components/Hero";
import ProofSection from "./components/ProofSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e6e6e6]">
      <Header />
      <Hero />
      <ProofSection />
      <ServicesSection />
      <AboutSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

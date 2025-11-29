import Hero from "@/components/Hero";
import About from "@/components/About";
import AIExpertise from "@/components/AIExpertise";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <AIExpertise />
      <Experience />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;

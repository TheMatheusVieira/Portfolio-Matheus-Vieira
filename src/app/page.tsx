import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Interests } from "@/components/Interests";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Portfolio />
        <Projects />
        <Interests />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

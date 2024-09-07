import Hero from "@/components/portfolio/sections/Hero";
import Skills from "@/components/portfolio/sections/Skills";
import Projects from "@/components/portfolio/sections/Projects";
import Contact from "@/components/portfolio/sections/Contact";
import Starfield from "react-starfield";

export default function PortfolioHome() {
  return (
    <main className="flex w-screen flex-col overflow-x-hidden">
      <Starfield
        starCount={1300}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

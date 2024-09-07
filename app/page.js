import Hero from "@/components/sections/Hero";
import Contact from "@/components/sections/Contact";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Starfield from "react-starfield";
import MailSection from "@/components/sections/MailSection";
import HomeServices from "@/components/sections/HomeServices";

export default function Home() {
  return (
    <main className="flex w-screen flex-col overflow-x-hidden">
      <Starfield
        starCount={1300}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <Header />
      <Hero />
      <MailSection />
      <HomeServices />
      <Footer />
      {/* <Contact /> */}
    </main>
  );
}

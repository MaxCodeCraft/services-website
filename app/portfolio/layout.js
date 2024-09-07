import Header from "@/components/portfolio/header/Header";
import Footer from "@/components/portfolio/footer/Footer";
import "./portfolio.css";

export const metadata = {
  title: "MaxCodeCraft | Maxime Bocquet",
  description:
    "Développeur full stack spécialisé dans la méthode MERN (MongoDB, Express.js, React, Node.js) basé à Nice, France. Expertise en développement web, applications web modernes et solutions logicielles. Disponible pour des projets freelance et collaborations.",
};

export default function PortfolioLayout({ children }) {
  return (
    <>
      <header>
        <Header />
      </header>
      {children}
      <footer>
        <Footer />
      </footer>
    </>
  );
}

import { Offside, Poppins } from "next/font/google";
import "./globals.css";

const offside = Offside({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "MaxCodeCraft | Votre partenaire de création Web sur-mesure local",
  description:
    "Développeur full stack spécialisé dans la méthode MERN (MongoDB, Express.js, React, Node.js) basé à Nice. Expertise en développement web, applications web modernes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={offside.className}>{children}</body>
    </html>
  );
}

import { Offside } from "next/font/google";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./globals.css";

const offside = Offside({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "MaxCodeCraft - Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={offside.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import HeroVector from "../vectors/HeroVector";
import YellowButton from "../buttons/YellowButton";
import TransparentButton from "../buttons/TransparentButton";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex w-full justify-center bg-tardisBlue py-16">
      <div className="shadow-test flex w-11/12 flex-col justify-center rounded-xl bg-spatialGrey/40 md:flex-row lg:w-10/12">
        <div className="flex flex-col justify-center gap-6 p-6 md:w-1/2 lg:gap-12 lg:p-16">
          <h1 className="text-center font-goodtimes text-xl text-gallifreyanGold lg:text-left lg:text-3xl">
            Votre Partenaire Web Local et Sur-Mesure
          </h1>
          <p className="text-white">
            Je suis spécialisé dans la création de sites web personnalisés pour
            les artisans, TPE, et PME de la région. Avec une approche centrée
            sur la proximité, la confiance, et un travail de qualité, je conçois
            des solutions digitales qui reflètent l'unicité de votre entreprise.
            Grâce à la puissance de la stack MERN, je vous offre des sites web
            performants, évolutifs, et adaptés à vos besoins spécifiques.
            Choisissez un service web qui vous ressemble, avec MaxCodeCraft.
          </p>
        </div>
        <div className="flex justify-center md:w-1/2">
          <Image
            src={"/images/am-img.png"}
            width={750}
            height={850}
            className="w-80 object-contain py-16 lg:w-[450px]"
            alt="MaxCodeCraft Logo"
          />
        </div>
      </div>
    </div>
  );
}

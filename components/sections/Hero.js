import HeroVector from "../vectors/HeroVector";
import YellowButton from "../buttons/YellowButton";
import TransparentButton from "../buttons/TransparentButton";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex w-full justify-center bg-tardisBlue py-16">
      <div className="flex w-10/12 flex-col justify-center rounded-xl bg-spatialGrey/40 md:flex-row">
        <div className="flex w-1/2 flex-col justify-center gap-12 px-16">
          <h1 className="font-goodtimes text-3xl text-gallifreyanGold">
            Votre Partenaire Web Local et Sur-Mesure
          </h1>
          <p className="text-xl text-white">
            Je suis spécialisé dans la création de sites web personnalisés pour
            les artisans, TPE, et PME de la région. Avec une approche centrée
            sur la proximité, la confiance, et un travail de qualité, je conçois
            des solutions digitales qui reflètent l'unicité de votre entreprise.
            Grâce à la puissance de la stack MERN, je vous offre des sites web
            performants, évolutifs, et adaptés à vos besoins spécifiques.
            Choisissez un service web qui vous ressemble, avec MaxCodeCraft.
          </p>
        </div>
        <div className="flex w-1/2 justify-center">
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

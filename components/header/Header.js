import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <header className="absolute flex h-28 w-full items-center justify-between bg-spatialGrey/75 px-5">
      <div>
        <Image
          src={"/mcc-logo2.png"}
          width={40}
          height={73}
          className="w-10 object-contain"
          alt="MaxCodeCraft Logo"
        />
      </div>
      <div className="flex items-center justify-center gap-6">
        <Link href={"#"}>
          <p className="font-digitalix text-xs text-white hover:text-gallifreyanGold md:text-base">
            A PROPOS
          </p>
        </Link>
        <Link href={"#skills"}>
          <p className="font-digitalix text-xs text-white hover:text-gallifreyanGold md:text-base">
            COMPETENCES
          </p>
        </Link>
        <Link href={"#projects"}>
          <p className="font-digitalix text-xs text-white hover:text-gallifreyanGold md:text-base">
            PROJETS
          </p>
        </Link>
        <Link href={"#contact"}>
          <p className="font-digitalix text-xs text-white hover:text-gallifreyanGold md:text-base">
            CONTACT
          </p>
        </Link>
      </div>
      <div> </div>
      {/* <div className="flex gap-4">
        <a
          href="https://github.com/MaxCodeCraft/"
          target="blank"
          aria-label="link to my github repositories"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-md border-2 border-white text-white hover:border-gallifreyanGold hover:text-gallifreyanGold">
            <FontAwesomeIcon icon={faGithub} className="w-6" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/maxime-bocquet-8870a0261/"
          target="blank"
          aria-label="link to my linkedin profile page"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-md border-2 border-white text-white hover:border-gallifreyanGold hover:text-gallifreyanGold">
            <FontAwesomeIcon icon={faLinkedin} className="w-6" />
          </div>
        </a>
      </div> */}
    </header>
  );
}

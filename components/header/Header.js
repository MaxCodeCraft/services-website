import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import YellowButton from "../buttons/YellowButton";

export default function Header() {
  return (
    <div className="flex h-20 w-full items-center justify-between bg-tardisBlue px-5 md:h-28 md:px-10 lg:px-16">
      <div className="">
        <Link href={"/"}>
          <Image
            src={"/images/mcc-logo.png"}
            width={877}
            height={168}
            className="w-48 object-contain lg:w-64"
            alt="MaxCodeCraft Logo"
          />
        </Link>
      </div>
      {/* Version Mobile */}
      <div className="dropdown dropdown-end cursor-pointer text-white lg:hidden">
        <FontAwesomeIcon icon={faBars} size="xl" role="button" tabIndex={0} />
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] w-52 rounded-md bg-spatialGrey p-2 shadow-inner"
        >
          <li>
            <Link href={"/about-me"}>
              <p className="font-goodtimes text-white hover:text-gallifreyanGold">
                à PROPOS
              </p>
            </Link>
          </li>
          <li>
            <Link href={"/services"}>
              <p className="font-goodtimes text-white hover:text-gallifreyanGold">
                Services
              </p>
            </Link>
          </li>
          <li>
            <Link href={"/pricing"}>
              <p className="font-goodtimes text-white hover:text-gallifreyanGold">
                Prix
              </p>
            </Link>
          </li>
        </ul>
      </div>
      {/* Version Desktop */}
      <ul className="menu menu-horizontal hidden items-center justify-center gap-12 lg:flex">
        <li>
          <details>
            <summary className="font-goodtimes text-white hover:text-gallifreyanGold md:text-base lg:text-xl">
              Services
            </summary>
            <ul>
              <li className="">
                <Link href={"/services/custom-websites"}>
                  <p className="text-white hover:text-gallifreyanGold md:text-base">
                    Sites personnalisés
                  </p>
                </Link>
              </li>
              <li className="">
                <Link href={"/services/landing-pages"}>
                  <p className="text-white hover:text-gallifreyanGold md:text-base">
                    Landing pages & Microsites
                  </p>
                </Link>
              </li>
              <li className="">
                <Link href={"/services/website-rework"}>
                  <p className="text-white hover:text-gallifreyanGold md:text-base">
                    Refonte Site Web
                  </p>
                </Link>
              </li>
              <li className="">
                <Link href={"/services/web-applications"}>
                  <p className="text-white hover:text-gallifreyanGold md:text-base">
                    Application Web
                  </p>
                </Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <Link href={"/projects"}>
            <p className="font-goodtimes text-white hover:text-gallifreyanGold md:text-base lg:text-xl">
              Réalisations
            </p>
          </Link>
        </li>
        <li>
          <Link href={"/about-me"}>
            <p className="font-goodtimes text-white hover:text-gallifreyanGold md:text-base lg:text-xl">
              à PROPOS
            </p>
          </Link>
        </li>
      </ul>
      <div className="hidden lg:block">
        <YellowButton url={"/contact"} title={"C'est parti !"} />
      </div>
    </div>
  );
}

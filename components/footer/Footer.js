import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex w-screen flex-col items-center justify-center bg-spatialGrey px-4 py-1">
      <div className="flex w-10/12 flex-col items-center gap-4 py-8 lg:flex-row lg:justify-between lg:gap-0">
        <Link href={"/"}>
          <Image
            src={"/images/mcc-logo.png"}
            width={877}
            height={168}
            className="w-48 object-contain md:w-32 lg:w-56"
            alt="MaxCodeCraft Logo"
          />
        </Link>
        <div>
          <Link href={"/contact"}>
            <h5 className="text-center text-white hover:text-gallifreyanGold lg:text-left">
              Contact
            </h5>
          </Link>
          <Link href={"/legal-information"}>
            <h5 className="text-white hover:text-gallifreyanGold">
              Mentions Légales
            </h5>
          </Link>
        </div>
      </div>
      <div>
        <p className="pb-2 pt-4 text-center text-white">
          © 2024 MaxCodeCraft - Tous droits réservés
        </p>
      </div>
    </div>
  );
}

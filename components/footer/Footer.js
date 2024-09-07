import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex w-screen flex-col items-center justify-center bg-spatialGrey px-4 py-1 md:px-0">
      <div className="flex w-10/12 justify-between py-8">
        <Link href={"/"}>
          <Image
            src={"/images/mcc-logo.png"}
            width={877}
            height={168}
            className="w-48 object-contain md:w-32 lg:w-56"
            alt="MaxCodeCraft Logo"
          />
        </Link>
      </div>
      <div>
        <p className="pb-2 pt-4 text-white">
          © 2024 MaxCodeCraft - Tous droits réservés
        </p>
      </div>
    </footer>
  );
}

import Starfield from "react-starfield";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function LegalInformation() {
  return (
    <>
      <Header />
      <div className="flex w-screen justify-center overflow-x-hidden bg-tardisBlue py-16">
        <Starfield
          starCount={1300}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          backgroundColor="black"
        />

        <main className="shadow-test flex w-11/12 flex-col gap-6 rounded-xl bg-spatialGrey/40 p-6 text-white lg:w-10/12 lg:p-16">
          <h1 className="font-goodtimes text-2xl text-gallifreyanGold">
            Mentions Légales
          </h1>
          <ul className="flex flex-col gap-6">
            <li>
              <h2 className="pb-6">1. Informations générales</h2>
              <p>
                Nom de l'entreprise : MaxCodeCraft
                <br /> Forme juridique : Micro-entreprise
                <br /> Adresse du siège social : 75, Chemin des Salles, 06510
                CARROS, France
                <br /> Email :{" "}
                <a href="mailto:contact@maxcodecraft.dev">
                  contact@maxcodecraft.dev
                </a>
                <br /> Numéro SIRET : 824 857 684 00024
                <br />
                Responsable de la publication : Maxime BOCQUET
                <br /> Hébergeur du site : Vercel Inc. <br />
                Adresse de l'hébergeur : 440 N Barranca Avenue #4133, Covina, CA
                91723, USA
              </p>
            </li>
            <li>
              <h2 className="pb-6">2. Propriété intellectuelle</h2>
              <p>
                Le contenu du site MaxCodeCraft, incluant mais non limité aux
                textes, images, graphismes, logos, vidéos, et animations, est la
                propriété exclusive de MaxCodeCraft, sauf mention contraire.
                Toute reproduction, distribution, modification, adaptation,
                retransmission ou publication, même partielle, de ces différents
                éléments est strictement interdite sans l'accord exprès par
                écrit de MaxCodeCraft.
              </p>
            </li>
            <li>
              <h2 className="pb-6">3. Protection des données personnelles</h2>
              <p>
                Conformément à la loi "Informatique et Libertés" du 6 janvier
                1978 modifiée et au Règlement Général sur la Protection des
                Données (RGPD), vous disposez d'un droit d'accès, de
                rectification, de suppression, et d'opposition aux données
                personnelles vous concernant. Pour exercer ce droit, vous pouvez
                nous contacter à l'adresse email suivante :{" "}
                <a href="mailto:contact@maxcodecraft.dev">
                  contact@maxcodecraft.dev
                </a>
                . Les informations collectées via les formulaires du site sont
                destinées exclusivement à un usage interne par MaxCodeCraft. En
                aucun cas, ces données ne seront cédées ou vendues à des tiers.
              </p>
            </li>
            <li>
              <h2 className="pb-6">4. Responsabilité</h2>
              <p>
                MaxCodeCraft s'efforce de fournir sur le site des informations
                aussi précises que possible. Toutefois, nous ne saurions
                garantir l'exactitude, la complétude, et l'actualité des
                informations diffusées. En conséquence, l'utilisateur reconnaît
                utiliser ces informations sous sa responsabilité exclusive.
              </p>
            </li>
            <li>
              <h2 className="pb-6">5. Liens hypertextes</h2>
              <p>
                Le site MaxCodeCraft peut contenir des liens hypertextes vers
                d'autres sites web. MaxCodeCraft n'exerce aucun contrôle sur ces
                sites et décline toute responsabilité quant à leur contenu.
              </p>
            </li>
            <li>
              <h2 className="pb-6">6. Cookies</h2>
              <p>
                Le site MaxCodeCraft utilise des cookies pour améliorer
                l'expérience utilisateur. En naviguant sur le site, vous
                acceptez l'utilisation de ces cookies. Vous pouvez à tout moment
                désactiver les cookies en configurant les préférences de votre
                navigateur.
              </p>
            </li>
            <li>
              <h2 className="pb-6">7. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit
                français. Tout litige en relation avec l'utilisation du site
                MaxCodeCraft est soumis au droit français et relève de la
                compétence exclusive des tribunaux français.
              </p>
            </li>
          </ul>
        </main>
      </div>
      <Footer />
    </>
  );
}

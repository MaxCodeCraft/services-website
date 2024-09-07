import ServiceCard from "../cards/ServiceCard";

export default function HomeServices() {
  return (
    <div className="flex w-full justify-center bg-tardisBlue py-16">
      <div className="flex w-11/12 flex-wrap justify-center gap-6 lg:w-10/12">
        <ServiceCard
          icon={"faScrewdriverWrench"}
          title="Sites personnalisés"
          desc="Je créé vos sites sur mesures, ici pas de templates de Wordpress impersonnels, nous créerons ensemble le site de vos rêves qui vous ressemble !"
          url={"/services/custom-websites"}
          faIcon={"faArrowRight"}
        />
        <ServiceCard
          icon={"faEarthEurope"}
          title="Landing Pages & Microsites"
          desc="Besoin d'une simple page pour une campagne publicitaire, un lancement de produit ? Créons la page qui vous apportera de la conversion !"
          url={"/services/landing-pages"}
          faIcon={"faArrowRight"}
        />
        <ServiceCard
          icon={"faPaintRoller"}
          title="Refonte de Sites Web"
          desc="Votre site est ancien, vous semble morose ou est très lent ? Donnons lui un coup de modernité et de rapidité qui reflètera le dynamisme de votre entreprise !"
          url={"/services/website-rework"}
          faIcon={"faArrowRight"}
        />
        <ServiceCard
          icon={"faToolbox"}
          title="Applications Web"
          desc="Besoin d'un portail client, d'une application web complexe ? Découvrez ce que nous pourrons réaliser ensemble !"
          url={"/services/web-applications"}
          faIcon={"faArrowRight"}
        />
      </div>
    </div>
  );
}

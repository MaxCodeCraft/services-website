import ServiceCard from "../cards/ServiceCard";

export default function HomeServices() {
  return (
    <div className="flex w-full justify-center bg-tardisBlue py-16">
      <div className="flex w-11/12 flex-wrap justify-center gap-6 lg:w-10/12">
        <ServiceCard
          icon={"faScrewdriverWrench"}
          title="Sites personnalisés"
          desc="Je conçois des sites web sur mesure, adaptés à vos besoins spécifiques. Ici, pas de modèles standardisés ou de templates impersonnels. Ensemble, nous créons un site unique qui reflète parfaitement l'identité de votre entreprise et répond à vos objectifs. Chaque détail est pensé pour vous offrir un site qui vous ressemble vraiment."
          url={"/services/custom-websites"}
          faIcon={"faArrowRight"}
        />
        <ServiceCard
          icon={"faEarthEurope"}
          title="Landing Pages & Microsites"
          desc="Vous avez besoin d'une page dédiée pour une campagne publicitaire ou un lancement de produit ? Je conçois des landing pages et microsites efficaces, spécialement pensés pour maximiser vos conversions. Ensemble, nous créerons une page qui capte l'attention de vos visiteurs et transforme leur intérêt en actions concrètes."
          url={"/services/landing-pages"}
          faIcon={"faArrowRight"}
        />
        <ServiceCard
          icon={"faPaintRoller"}
          title="Refonte de Sites Web"
          desc="Votre site web est vieillissant, manque de dynamisme ou souffre de lenteurs ? Il est temps de lui donner un nouveau souffle ! Ensemble, modernisons votre site pour qu'il reflète le dynamisme et la vitalité de votre entreprise, tout en améliorant ses performances pour une navigation plus fluide et rapide."
          url={"/services/website-rework"}
          faIcon={"faArrowRight"}
        />
        <ServiceCard
          icon={"faToolbox"}
          title="Applications Web"
          desc="Vous avez besoin d'un portail client ou d'une application web sur mesure ? Ensemble, explorons les possibilités et créons une solution qui répondra parfaitement à vos besoins les plus complexes. Découvrez tout ce que nous pouvons accomplir pour optimiser vos processus et offrir une expérience utilisateur unique."
          url={"/services/web-applications"}
          faIcon={"faArrowRight"}
        />
      </div>
    </div>
  );
}

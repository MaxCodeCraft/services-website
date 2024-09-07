import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScrewdriverWrench,
  faEarthEurope,
  faPaintRoller,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";
import YellowButton from "../buttons/YellowButton";

export default function ServiceCard(props) {
  let icon;
  switch (props.icon) {
    case "faScrewdriverWrench":
      icon = faScrewdriverWrench;
      break;
    case "faEarthEurope":
      icon = faEarthEurope;
      break;
    case "faPaintRoller":
      icon = faPaintRoller;
      break;
    case "faToolbox":
      icon = faToolbox;
      break;
    default:
      icon = faToolbox;
  }
  return (
    <div className="shadow-test flex w-[600px] flex-col justify-between gap-6 rounded-xl bg-spatialGrey/40 p-6 lg:w-[700px] lg:p-8">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-tardisOrange/10">
        <FontAwesomeIcon icon={icon} size="xl" className="text-tardisOrange" />
      </div>
      <h3 className="font-goodtimes text-xl text-gallifreyanGold lg:text-2xl">
        {props.title}
      </h3>
      <p className="min-h-32 text-white">{props.desc}</p>
      <div className="flex w-full justify-center lg:justify-end">
        <div className="lg:w-1/3">
          <YellowButton url={props.url} title="Découvrir" icon={props.faIcon} />
        </div>
      </div>
    </div>
  );
}

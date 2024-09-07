"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function YellowButton(props) {
  let icon;
  switch (props.icon) {
    case "faRocket":
      icon = faRocket;
      break;
    case "faArrowRight":
      icon = faArrowRight;
      break;
    default:
      icon = faRocket;
  }
  return (
    <Link href={props.url}>
      <motion.div
        className="items-center justify-center rounded bg-orangeToYellow hover:bg-yellowToOrange hover:transition hover:duration-1000"
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <p className="flex items-center justify-center gap-2 px-6 py-[14px] font-goodtimes text-sm text-white">
          {props.title}
          <motion.span
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FontAwesomeIcon icon={icon} size="lg" />
          </motion.span>
        </p>
      </motion.div>
    </Link>
  );
}

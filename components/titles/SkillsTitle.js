"use client";
import { animate, motion } from "framer-motion";

const play = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    duration: 20,
  },
};

export default function SkillsTitle() {
  return (
    <svg
      width="1041"
      height="131"
      viewBox="0 0 1041 131"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        opacity="0.5"
        d="M0 4.88806H617.518L730.824 110.47H1041"
        variants={play}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        stroke="white"
        strokeWidth="3"
      />
      <motion.path
        opacity="0.5"
        d="M56.6533 23.4627H263.437L376.743 128.067H1041"
        variants={play}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        stroke="white"
        strokeWidth="3"
      />
      <motion.path
        opacity="0.5"
        d="M2.83252 25.4179L39.8153 58.6567H257.771"
        variants={play}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        stroke="white"
        strokeWidth="3"
      />
      <rect
        x="407.902"
        y="125.134"
        width="237.943"
        height="5.86567"
        fill="#FF8C00"
      />
      <line
        x1="66.2837"
        y1="38.6045"
        x2="216.981"
        y2="38.6045"
        stroke="white"
      />
      <line
        x1="62.3184"
        y1="40.5149"
        x2="220.947"
        y2="40.5149"
        stroke="white"
        strokeWidth="5"
        strokeLinejoin="round"
        strokeDasharray="1 2"
      />
      <line
        x1="886.284"
        y1="88.6045"
        x2="1036.98"
        y2="88.6045"
        stroke="white"
      />
      <line
        x1="882.318"
        y1="90.5149"
        x2="1040.95"
        y2="90.5149"
        stroke="white"
        strokeWidth="5"
        strokeLinejoin="round"
        strokeDasharray="1 2"
      />
      <rect x="464.555" width="67.9837" height="9.77612" fill="#FF8C00" />
      <rect x="201.118" width="8.49796" height="9.77612" fill="white" />
      <path
        d="M406.296 54.5336H408.64V56.8773H406.296V54.5336ZM408.64 54.5336H410.984V56.8773H408.64V54.5336ZM410.984 54.5336H413.328V56.8773H410.984V54.5336ZM413.328 54.5336H415.671V56.8773H413.328V54.5336ZM415.671 54.5336H418.015V56.8773H415.671V54.5336ZM418.015 54.5336H420.359V56.8773H418.015V54.5336ZM420.359 54.5336H422.703V56.8773H420.359V54.5336ZM422.703 54.5336H425.046V56.8773H422.703V54.5336ZM425.046 54.5336H427.39V56.8773H425.046V54.5336ZM427.39 54.5336H429.734V56.8773H427.39V54.5336ZM406.296 56.8773H408.64V59.2211H406.296V56.8773ZM408.64 56.8773H410.984V59.2211H408.64V56.8773ZM410.984 56.8773H413.328V59.2211H410.984V56.8773ZM413.328 56.8773H415.671V59.2211H413.328V56.8773ZM415.671 56.8773H418.015V59.2211H415.671V56.8773ZM418.015 56.8773H420.359V59.2211H418.015V56.8773ZM420.359 56.8773H422.703V59.2211H420.359V56.8773ZM422.703 56.8773H425.046V59.2211H422.703V56.8773ZM425.046 56.8773H427.39V59.2211H425.046V56.8773ZM427.39 56.8773H429.734V59.2211H427.39V56.8773ZM406.296 59.2211H408.64V61.5648H406.296V59.2211ZM408.64 59.2211H410.984V61.5648H408.64V59.2211ZM415.671 59.2211H418.015V61.5648H415.671V59.2211ZM418.015 59.2211H420.359V61.5648H418.015V59.2211ZM425.046 59.2211H427.39V61.5648H425.046V59.2211ZM427.39 59.2211H429.734V61.5648H427.39V59.2211ZM406.296 61.5648H408.64V63.9086H406.296V61.5648ZM408.64 61.5648H410.984V63.9086H408.64V61.5648ZM415.671 61.5648H418.015V63.9086H415.671V61.5648ZM418.015 61.5648H420.359V63.9086H418.015V61.5648ZM425.046 61.5648H427.39V63.9086H425.046V61.5648ZM427.39 61.5648H429.734V63.9086H427.39V61.5648ZM406.296 63.9086H408.64V66.2523H406.296V63.9086ZM408.64 63.9086H410.984V66.2523H408.64V63.9086ZM415.671 63.9086H418.015V66.2523H415.671V63.9086ZM418.015 63.9086H420.359V66.2523H418.015V63.9086ZM425.046 63.9086H427.39V66.2523H425.046V63.9086ZM427.39 63.9086H429.734V66.2523H427.39V63.9086ZM406.296 66.2523H408.64V68.5961H406.296V66.2523ZM408.64 66.2523H410.984V68.5961H408.64V66.2523ZM415.671 66.2523H418.015V68.5961H415.671V66.2523ZM418.015 66.2523H420.359V68.5961H418.015V66.2523ZM425.046 66.2523H427.39V68.5961H425.046V66.2523ZM427.39 66.2523H429.734V68.5961H427.39V66.2523ZM406.296 68.5961H408.64V70.9398H406.296V68.5961ZM408.64 68.5961H410.984V70.9398H408.64V68.5961ZM425.046 68.5961H427.39V70.9398H425.046V68.5961ZM427.39 68.5961H429.734V70.9398H427.39V68.5961ZM406.296 70.9398H408.64V73.2836H406.296V70.9398ZM408.64 70.9398H410.984V73.2836H408.64V70.9398ZM425.046 70.9398H427.39V73.2836H425.046V70.9398ZM427.39 70.9398H429.734V73.2836H427.39V70.9398ZM406.296 73.2836H408.64V75.6273H406.296V73.2836ZM408.64 73.2836H410.984V75.6273H408.64V73.2836ZM425.046 73.2836H427.39V75.6273H425.046V73.2836ZM427.39 73.2836H429.734V75.6273H427.39V73.2836ZM406.296 75.6273H408.64V77.9711H406.296V75.6273ZM408.64 75.6273H410.984V77.9711H408.64V75.6273ZM425.046 75.6273H427.39V77.9711H425.046V75.6273ZM427.39 75.6273H429.734V77.9711H427.39V75.6273ZM432.687 54.5336H435.031V56.8773H432.687V54.5336ZM435.031 54.5336H437.374V56.8773H435.031V54.5336ZM451.437 54.5336H453.781V56.8773H451.437V54.5336ZM453.781 54.5336H456.124V56.8773H453.781V54.5336ZM432.687 56.8773H435.031V59.2211H432.687V56.8773ZM435.031 56.8773H437.374V59.2211H435.031V56.8773ZM451.437 56.8773H453.781V59.2211H451.437V56.8773ZM453.781 56.8773H456.124V59.2211H453.781V56.8773ZM432.687 59.2211H435.031V61.5648H432.687V59.2211ZM435.031 59.2211H437.374V61.5648H435.031V59.2211ZM451.437 59.2211H453.781V61.5648H451.437V59.2211ZM453.781 59.2211H456.124V61.5648H453.781V59.2211ZM432.687 61.5648H435.031V63.9086H432.687V61.5648ZM435.031 61.5648H437.374V63.9086H435.031V61.5648ZM451.437 61.5648H453.781V63.9086H451.437V61.5648ZM453.781 61.5648H456.124V63.9086H453.781V61.5648ZM432.687 63.9086H435.031V66.2523H432.687V63.9086ZM435.031 63.9086H437.374V66.2523H435.031V63.9086ZM437.374 63.9086H439.718V66.2523H437.374V63.9086ZM439.718 63.9086H442.062V66.2523H439.718V63.9086ZM442.062 63.9086H444.406V66.2523H442.062V63.9086ZM444.406 63.9086H446.749V66.2523H444.406V63.9086ZM446.749 63.9086H449.093V66.2523H446.749V63.9086ZM449.093 63.9086H451.437V66.2523H449.093V63.9086ZM451.437 63.9086H453.781V66.2523H451.437V63.9086ZM453.781 63.9086H456.124V66.2523H453.781V63.9086ZM432.687 66.2523H435.031V68.5961H432.687V66.2523ZM435.031 66.2523H437.374V68.5961H435.031V66.2523ZM437.374 66.2523H439.718V68.5961H437.374V66.2523ZM439.718 66.2523H442.062V68.5961H439.718V66.2523ZM442.062 66.2523H444.406V68.5961H442.062V66.2523ZM444.406 66.2523H446.749V68.5961H444.406V66.2523ZM446.749 66.2523H449.093V68.5961H446.749V66.2523ZM449.093 66.2523H451.437V68.5961H449.093V66.2523ZM451.437 66.2523H453.781V68.5961H451.437V66.2523ZM453.781 66.2523H456.124V68.5961H453.781V66.2523ZM442.062 68.5961H444.406V70.9398H442.062V68.5961ZM444.406 68.5961H446.749V70.9398H444.406V68.5961ZM442.062 70.9398H444.406V73.2836H442.062V70.9398ZM444.406 70.9398H446.749V73.2836H444.406V70.9398ZM442.062 73.2836H444.406V75.6273H442.062V73.2836ZM444.406 73.2836H446.749V75.6273H444.406V73.2836ZM442.062 75.6273H444.406V77.9711H442.062V75.6273ZM444.406 75.6273H446.749V77.9711H444.406V75.6273ZM468.687 54.5336H471.031V56.8773H468.687V54.5336ZM471.031 54.5336H473.374V56.8773H471.031V54.5336ZM473.374 54.5336H475.718V56.8773H473.374V54.5336ZM475.718 54.5336H478.062V56.8773H475.718V54.5336ZM478.062 54.5336H480.406V56.8773H478.062V54.5336ZM480.406 54.5336H482.749V56.8773H480.406V54.5336ZM482.749 54.5336H485.093V56.8773H482.749V54.5336ZM485.093 54.5336H487.437V56.8773H485.093V54.5336ZM487.437 54.5336H489.781V56.8773H487.437V54.5336ZM489.781 54.5336H492.124V56.8773H489.781V54.5336ZM468.687 56.8773H471.031V59.2211H468.687V56.8773ZM471.031 56.8773H473.374V59.2211H471.031V56.8773ZM473.374 56.8773H475.718V59.2211H473.374V56.8773ZM475.718 56.8773H478.062V59.2211H475.718V56.8773ZM478.062 56.8773H480.406V59.2211H478.062V56.8773ZM480.406 56.8773H482.749V59.2211H480.406V56.8773ZM482.749 56.8773H485.093V59.2211H482.749V56.8773ZM485.093 56.8773H487.437V59.2211H485.093V56.8773ZM487.437 56.8773H489.781V59.2211H487.437V56.8773ZM489.781 56.8773H492.124V59.2211H489.781V56.8773ZM468.687 59.2211H471.031V61.5648H468.687V59.2211ZM471.031 59.2211H473.374V61.5648H471.031V59.2211ZM468.687 61.5648H471.031V63.9086H468.687V61.5648ZM471.031 61.5648H473.374V63.9086H471.031V61.5648ZM468.687 63.9086H471.031V66.2523H468.687V63.9086ZM471.031 63.9086H473.374V66.2523H471.031V63.9086ZM473.374 63.9086H475.718V66.2523H473.374V63.9086ZM475.718 63.9086H478.062V66.2523H475.718V63.9086ZM478.062 63.9086H480.406V66.2523H478.062V63.9086ZM480.406 63.9086H482.749V66.2523H480.406V63.9086ZM482.749 63.9086H485.093V66.2523H482.749V63.9086ZM485.093 63.9086H487.437V66.2523H485.093V63.9086ZM487.437 63.9086H489.781V66.2523H487.437V63.9086ZM489.781 63.9086H492.124V66.2523H489.781V63.9086ZM468.687 66.2523H471.031V68.5961H468.687V66.2523ZM471.031 66.2523H473.374V68.5961H471.031V66.2523ZM473.374 66.2523H475.718V68.5961H473.374V66.2523ZM475.718 66.2523H478.062V68.5961H475.718V66.2523ZM478.062 66.2523H480.406V68.5961H478.062V66.2523ZM480.406 66.2523H482.749V68.5961H480.406V66.2523ZM482.749 66.2523H485.093V68.5961H482.749V66.2523ZM485.093 66.2523H487.437V68.5961H485.093V66.2523ZM487.437 66.2523H489.781V68.5961H487.437V66.2523ZM489.781 66.2523H492.124V68.5961H489.781V66.2523ZM487.437 68.5961H489.781V70.9398H487.437V68.5961ZM489.781 68.5961H492.124V70.9398H489.781V68.5961ZM487.437 70.9398H489.781V73.2836H487.437V70.9398ZM489.781 70.9398H492.124V73.2836H489.781V70.9398ZM468.687 73.2836H471.031V75.6273H468.687V73.2836ZM471.031 73.2836H473.374V75.6273H471.031V73.2836ZM473.374 73.2836H475.718V75.6273H473.374V73.2836ZM475.718 73.2836H478.062V75.6273H475.718V73.2836ZM478.062 73.2836H480.406V75.6273H478.062V73.2836ZM480.406 73.2836H482.749V75.6273H480.406V73.2836ZM482.749 73.2836H485.093V75.6273H482.749V73.2836ZM485.093 73.2836H487.437V75.6273H485.093V73.2836ZM487.437 73.2836H489.781V75.6273H487.437V73.2836ZM489.781 73.2836H492.124V75.6273H489.781V73.2836ZM468.687 75.6273H471.031V77.9711H468.687V75.6273ZM471.031 75.6273H473.374V77.9711H471.031V75.6273ZM473.374 75.6273H475.718V77.9711H473.374V75.6273ZM475.718 75.6273H478.062V77.9711H475.718V75.6273ZM478.062 75.6273H480.406V77.9711H478.062V75.6273ZM480.406 75.6273H482.749V77.9711H480.406V75.6273ZM482.749 75.6273H485.093V77.9711H482.749V75.6273ZM485.093 75.6273H487.437V77.9711H485.093V75.6273ZM487.437 75.6273H489.781V77.9711H487.437V75.6273ZM489.781 75.6273H492.124V77.9711H489.781V75.6273ZM495.078 54.5336H497.421V56.8773H495.078V54.5336ZM497.421 54.5336H499.765V56.8773H497.421V54.5336ZM509.14 54.5336H511.484V56.8773H509.14V54.5336ZM511.484 54.5336H513.828V56.8773H511.484V54.5336ZM495.078 56.8773H497.421V59.2211H495.078V56.8773ZM497.421 56.8773H499.765V59.2211H497.421V56.8773ZM509.14 56.8773H511.484V59.2211H509.14V56.8773ZM511.484 56.8773H513.828V59.2211H511.484V56.8773ZM495.078 59.2211H497.421V61.5648H495.078V59.2211ZM497.421 59.2211H499.765V61.5648H497.421V59.2211ZM504.453 59.2211H506.796V61.5648H504.453V59.2211ZM506.796 59.2211H509.14V61.5648H506.796V59.2211ZM495.078 61.5648H497.421V63.9086H495.078V61.5648ZM497.421 61.5648H499.765V63.9086H497.421V61.5648ZM504.453 61.5648H506.796V63.9086H504.453V61.5648ZM506.796 61.5648H509.14V63.9086H506.796V61.5648ZM495.078 63.9086H497.421V66.2523H495.078V63.9086ZM497.421 63.9086H499.765V66.2523H497.421V63.9086ZM499.765 63.9086H502.109V66.2523H499.765V63.9086ZM502.109 63.9086H504.453V66.2523H502.109V63.9086ZM495.078 66.2523H497.421V68.5961H495.078V66.2523ZM497.421 66.2523H499.765V68.5961H497.421V66.2523ZM499.765 66.2523H502.109V68.5961H499.765V66.2523ZM502.109 66.2523H504.453V68.5961H502.109V66.2523ZM495.078 68.5961H497.421V70.9398H495.078V68.5961ZM497.421 68.5961H499.765V70.9398H497.421V68.5961ZM504.453 68.5961H506.796V70.9398H504.453V68.5961ZM506.796 68.5961H509.14V70.9398H506.796V68.5961ZM495.078 70.9398H497.421V73.2836H495.078V70.9398ZM497.421 70.9398H499.765V73.2836H497.421V70.9398ZM504.453 70.9398H506.796V73.2836H504.453V70.9398ZM506.796 70.9398H509.14V73.2836H506.796V70.9398ZM495.078 73.2836H497.421V75.6273H495.078V73.2836ZM497.421 73.2836H499.765V75.6273H497.421V73.2836ZM509.14 73.2836H511.484V75.6273H509.14V73.2836ZM511.484 73.2836H513.828V75.6273H511.484V73.2836ZM495.078 75.6273H497.421V77.9711H495.078V75.6273ZM497.421 75.6273H499.765V77.9711H497.421V75.6273ZM509.14 75.6273H511.484V77.9711H509.14V75.6273ZM511.484 75.6273H513.828V77.9711H511.484V75.6273ZM516.687 54.5336H519.031V56.8773H516.687V54.5336ZM519.031 54.5336H521.374V56.8773H519.031V54.5336ZM516.687 56.8773H519.031V59.2211H516.687V56.8773ZM519.031 56.8773H521.374V59.2211H519.031V56.8773ZM516.687 59.2211H519.031V61.5648H516.687V59.2211ZM519.031 59.2211H521.374V61.5648H519.031V59.2211ZM516.687 61.5648H519.031V63.9086H516.687V61.5648ZM519.031 61.5648H521.374V63.9086H519.031V61.5648ZM516.687 63.9086H519.031V66.2523H516.687V63.9086ZM519.031 63.9086H521.374V66.2523H519.031V63.9086ZM516.687 66.2523H519.031V68.5961H516.687V66.2523ZM519.031 66.2523H521.374V68.5961H519.031V66.2523ZM516.687 68.5961H519.031V70.9398H516.687V68.5961ZM519.031 68.5961H521.374V70.9398H519.031V68.5961ZM516.687 70.9398H519.031V73.2836H516.687V70.9398ZM519.031 70.9398H521.374V73.2836H519.031V70.9398ZM516.687 73.2836H519.031V75.6273H516.687V73.2836ZM519.031 73.2836H521.374V75.6273H519.031V73.2836ZM516.687 75.6273H519.031V77.9711H516.687V75.6273ZM519.031 75.6273H521.374V77.9711H519.031V75.6273ZM523.882 54.5336H526.226V56.8773H523.882V54.5336ZM526.226 54.5336H528.57V56.8773H526.226V54.5336ZM523.882 56.8773H526.226V59.2211H523.882V56.8773ZM526.226 56.8773H528.57V59.2211H526.226V56.8773ZM523.882 59.2211H526.226V61.5648H523.882V59.2211ZM526.226 59.2211H528.57V61.5648H526.226V59.2211ZM523.882 61.5648H526.226V63.9086H523.882V61.5648ZM526.226 61.5648H528.57V63.9086H526.226V61.5648ZM523.882 63.9086H526.226V66.2523H523.882V63.9086ZM526.226 63.9086H528.57V66.2523H526.226V63.9086ZM523.882 66.2523H526.226V68.5961H523.882V66.2523ZM526.226 66.2523H528.57V68.5961H526.226V66.2523ZM523.882 68.5961H526.226V70.9398H523.882V68.5961ZM526.226 68.5961H528.57V70.9398H526.226V68.5961ZM523.882 70.9398H526.226V73.2836H523.882V70.9398ZM526.226 70.9398H528.57V73.2836H526.226V70.9398ZM523.882 73.2836H526.226V75.6273H523.882V73.2836ZM526.226 73.2836H528.57V75.6273H526.226V73.2836ZM528.57 73.2836H530.913V75.6273H528.57V73.2836ZM530.913 73.2836H533.257V75.6273H530.913V73.2836ZM533.257 73.2836H535.601V75.6273H533.257V73.2836ZM535.601 73.2836H537.945V75.6273H535.601V73.2836ZM537.945 73.2836H540.288V75.6273H537.945V73.2836ZM540.288 73.2836H542.632V75.6273H540.288V73.2836ZM542.632 73.2836H544.976V75.6273H542.632V73.2836ZM544.976 73.2836H547.32V75.6273H544.976V73.2836ZM523.882 75.6273H526.226V77.9711H523.882V75.6273ZM526.226 75.6273H528.57V77.9711H526.226V75.6273ZM528.57 75.6273H530.913V77.9711H528.57V75.6273ZM530.913 75.6273H533.257V77.9711H530.913V75.6273ZM533.257 75.6273H535.601V77.9711H533.257V75.6273ZM535.601 75.6273H537.945V77.9711H535.601V75.6273ZM537.945 75.6273H540.288V77.9711H537.945V75.6273ZM540.288 75.6273H542.632V77.9711H540.288V75.6273ZM542.632 75.6273H544.976V77.9711H542.632V75.6273ZM544.976 75.6273H547.32V77.9711H544.976V75.6273ZM550.273 54.5336H552.617V56.8773H550.273V54.5336ZM552.617 54.5336H554.96V56.8773H552.617V54.5336ZM550.273 56.8773H552.617V59.2211H550.273V56.8773ZM552.617 56.8773H554.96V59.2211H552.617V56.8773ZM550.273 59.2211H552.617V61.5648H550.273V59.2211ZM552.617 59.2211H554.96V61.5648H552.617V59.2211ZM550.273 61.5648H552.617V63.9086H550.273V61.5648ZM552.617 61.5648H554.96V63.9086H552.617V61.5648ZM550.273 63.9086H552.617V66.2523H550.273V63.9086ZM552.617 63.9086H554.96V66.2523H552.617V63.9086ZM550.273 66.2523H552.617V68.5961H550.273V66.2523ZM552.617 66.2523H554.96V68.5961H552.617V66.2523ZM550.273 68.5961H552.617V70.9398H550.273V68.5961ZM552.617 68.5961H554.96V70.9398H552.617V68.5961ZM550.273 70.9398H552.617V73.2836H550.273V70.9398ZM552.617 70.9398H554.96V73.2836H552.617V70.9398ZM550.273 73.2836H552.617V75.6273H550.273V73.2836ZM552.617 73.2836H554.96V75.6273H552.617V73.2836ZM554.96 73.2836H557.304V75.6273H554.96V73.2836ZM557.304 73.2836H559.648V75.6273H557.304V73.2836ZM559.648 73.2836H561.992V75.6273H559.648V73.2836ZM561.992 73.2836H564.335V75.6273H561.992V73.2836ZM564.335 73.2836H566.679V75.6273H564.335V73.2836ZM566.679 73.2836H569.023V75.6273H566.679V73.2836ZM569.023 73.2836H571.367V75.6273H569.023V73.2836ZM571.367 73.2836H573.71V75.6273H571.367V73.2836ZM550.273 75.6273H552.617V77.9711H550.273V75.6273ZM552.617 75.6273H554.96V77.9711H552.617V75.6273ZM554.96 75.6273H557.304V77.9711H554.96V75.6273ZM557.304 75.6273H559.648V77.9711H557.304V75.6273ZM559.648 75.6273H561.992V77.9711H559.648V75.6273ZM561.992 75.6273H564.335V77.9711H561.992V75.6273ZM564.335 75.6273H566.679V77.9711H564.335V75.6273ZM566.679 75.6273H569.023V77.9711H566.679V75.6273ZM569.023 75.6273H571.367V77.9711H569.023V75.6273ZM571.367 75.6273H573.71V77.9711H571.367V75.6273ZM576.663 54.5336H579.007V56.8773H576.663V54.5336ZM579.007 54.5336H581.351V56.8773H579.007V54.5336ZM581.351 54.5336H583.695V56.8773H581.351V54.5336ZM583.695 54.5336H586.038V56.8773H583.695V54.5336ZM586.038 54.5336H588.382V56.8773H586.038V54.5336ZM588.382 54.5336H590.726V56.8773H588.382V54.5336ZM590.726 54.5336H593.07V56.8773H590.726V54.5336ZM593.07 54.5336H595.413V56.8773H593.07V54.5336ZM595.413 54.5336H597.757V56.8773H595.413V54.5336ZM597.757 54.5336H600.101V56.8773H597.757V54.5336ZM576.663 56.8773H579.007V59.2211H576.663V56.8773ZM579.007 56.8773H581.351V59.2211H579.007V56.8773ZM581.351 56.8773H583.695V59.2211H581.351V56.8773ZM583.695 56.8773H586.038V59.2211H583.695V56.8773ZM586.038 56.8773H588.382V59.2211H586.038V56.8773ZM588.382 56.8773H590.726V59.2211H588.382V56.8773ZM590.726 56.8773H593.07V59.2211H590.726V56.8773ZM593.07 56.8773H595.413V59.2211H593.07V56.8773ZM595.413 56.8773H597.757V59.2211H595.413V56.8773ZM597.757 56.8773H600.101V59.2211H597.757V56.8773ZM576.663 59.2211H579.007V61.5648H576.663V59.2211ZM579.007 59.2211H581.351V61.5648H579.007V59.2211ZM576.663 61.5648H579.007V63.9086H576.663V61.5648ZM579.007 61.5648H581.351V63.9086H579.007V61.5648ZM576.663 63.9086H579.007V66.2523H576.663V63.9086ZM579.007 63.9086H581.351V66.2523H579.007V63.9086ZM581.351 63.9086H583.695V66.2523H581.351V63.9086ZM583.695 63.9086H586.038V66.2523H583.695V63.9086ZM586.038 63.9086H588.382V66.2523H586.038V63.9086ZM588.382 63.9086H590.726V66.2523H588.382V63.9086ZM590.726 63.9086H593.07V66.2523H590.726V63.9086ZM593.07 63.9086H595.413V66.2523H593.07V63.9086ZM595.413 63.9086H597.757V66.2523H595.413V63.9086ZM597.757 63.9086H600.101V66.2523H597.757V63.9086ZM576.663 66.2523H579.007V68.5961H576.663V66.2523ZM579.007 66.2523H581.351V68.5961H579.007V66.2523ZM581.351 66.2523H583.695V68.5961H581.351V66.2523ZM583.695 66.2523H586.038V68.5961H583.695V66.2523ZM586.038 66.2523H588.382V68.5961H586.038V66.2523ZM588.382 66.2523H590.726V68.5961H588.382V66.2523ZM590.726 66.2523H593.07V68.5961H590.726V66.2523ZM593.07 66.2523H595.413V68.5961H593.07V66.2523ZM595.413 66.2523H597.757V68.5961H595.413V66.2523ZM597.757 66.2523H600.101V68.5961H597.757V66.2523ZM595.413 68.5961H597.757V70.9398H595.413V68.5961ZM597.757 68.5961H600.101V70.9398H597.757V68.5961ZM595.413 70.9398H597.757V73.2836H595.413V70.9398ZM597.757 70.9398H600.101V73.2836H597.757V70.9398ZM576.663 73.2836H579.007V75.6273H576.663V73.2836ZM579.007 73.2836H581.351V75.6273H579.007V73.2836ZM581.351 73.2836H583.695V75.6273H581.351V73.2836ZM583.695 73.2836H586.038V75.6273H583.695V73.2836ZM586.038 73.2836H588.382V75.6273H586.038V73.2836ZM588.382 73.2836H590.726V75.6273H588.382V73.2836ZM590.726 73.2836H593.07V75.6273H590.726V73.2836ZM593.07 73.2836H595.413V75.6273H593.07V73.2836ZM595.413 73.2836H597.757V75.6273H595.413V73.2836ZM597.757 73.2836H600.101V75.6273H597.757V73.2836ZM576.663 75.6273H579.007V77.9711H576.663V75.6273ZM579.007 75.6273H581.351V77.9711H579.007V75.6273ZM581.351 75.6273H583.695V77.9711H581.351V75.6273ZM583.695 75.6273H586.038V77.9711H583.695V75.6273ZM586.038 75.6273H588.382V77.9711H586.038V75.6273ZM588.382 75.6273H590.726V77.9711H588.382V75.6273ZM590.726 75.6273H593.07V77.9711H590.726V75.6273ZM593.07 75.6273H595.413V77.9711H593.07V75.6273ZM595.413 75.6273H597.757V77.9711H595.413V75.6273ZM597.757 75.6273H600.101V77.9711H597.757V75.6273Z"
        fill="#FFD700"
      />
      <line
        opacity="0.5"
        x1="391.354"
        y1="27.3731"
        x2="391.354"
        y2="105.582"
        stroke="#FFD700"
        strokeWidth="3"
        strokeDasharray="4 4"
      />
    </svg>
  );
}

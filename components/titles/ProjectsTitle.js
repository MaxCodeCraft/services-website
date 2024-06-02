"use client";
import { animate, motion } from "framer-motion";

const play = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
  },
};

export default function ProjectsTitle() {
  return (
    <svg
      className="h-auto w-full md:max-w-[60%]"
      viewBox="0 0 1041 131"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        opacity="0.5"
        d="M0 4.88806H699.5L779.5 110.47H1041"
        variants={play}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        stroke="white"
        stroke-width="3"
      />
      <motion.path
        opacity="0.5"
        d="M56.6533 23.4626H263.437L376.743 128.067H1041"
        variants={play}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        stroke="white"
        stroke-width="3"
      />
      <motion.path
        opacity="0.5"
        d="M2.83203 25.418L39.8148 58.6568H257.771"
        variants={play}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        stroke="white"
        stroke-width="3"
      />
      <rect
        x="407.902"
        y="125.134"
        width="237.943"
        height="5.86567"
        fill="#FF8C00"
      />
      <line
        x1="66.2842"
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
        stroke-width="5"
        stroke-linejoin="round"
        stroke-dasharray="1 2"
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
        stroke-width="5"
        stroke-linejoin="round"
        stroke-dasharray="1 2"
      />
      <rect x="464.555" width="67.9837" height="9.77612" fill="#FF8C00" />
      <rect x="201.118" width="8.49796" height="9.77612" fill="white" />
      <g filter="url(#filter0_d_10_651)">
        <path
          d="M415.918 54.5336H418.262V56.8773H415.918V54.5336ZM418.262 54.5336H420.605V56.8773H418.262V54.5336ZM420.605 54.5336H422.949V56.8773H420.605V54.5336ZM422.949 54.5336H425.293V56.8773H422.949V54.5336ZM425.293 54.5336H427.637V56.8773H425.293V54.5336ZM427.637 54.5336H429.98V56.8773H427.637V54.5336ZM429.98 54.5336H432.324V56.8773H429.98V54.5336ZM432.324 54.5336H434.668V56.8773H432.324V54.5336ZM434.668 54.5336H437.012V56.8773H434.668V54.5336ZM437.012 54.5336H439.355V56.8773H437.012V54.5336ZM415.918 56.8773H418.262V59.2211H415.918V56.8773ZM418.262 56.8773H420.605V59.2211H418.262V56.8773ZM420.605 56.8773H422.949V59.2211H420.605V56.8773ZM422.949 56.8773H425.293V59.2211H422.949V56.8773ZM425.293 56.8773H427.637V59.2211H425.293V56.8773ZM427.637 56.8773H429.98V59.2211H427.637V56.8773ZM429.98 56.8773H432.324V59.2211H429.98V56.8773ZM432.324 56.8773H434.668V59.2211H432.324V56.8773ZM434.668 56.8773H437.012V59.2211H434.668V56.8773ZM437.012 56.8773H439.355V59.2211H437.012V56.8773ZM415.918 59.2211H418.262V61.5648H415.918V59.2211ZM418.262 59.2211H420.605V61.5648H418.262V59.2211ZM425.293 59.2211H427.637V61.5648H425.293V59.2211ZM427.637 59.2211H429.98V61.5648H427.637V59.2211ZM434.668 59.2211H437.012V61.5648H434.668V59.2211ZM437.012 59.2211H439.355V61.5648H437.012V59.2211ZM415.918 61.5648H418.262V63.9086H415.918V61.5648ZM418.262 61.5648H420.605V63.9086H418.262V61.5648ZM425.293 61.5648H427.637V63.9086H425.293V61.5648ZM427.637 61.5648H429.98V63.9086H427.637V61.5648ZM434.668 61.5648H437.012V63.9086H434.668V61.5648ZM437.012 61.5648H439.355V63.9086H437.012V61.5648ZM415.918 63.9086H418.262V66.2523H415.918V63.9086ZM418.262 63.9086H420.605V66.2523H418.262V63.9086ZM425.293 63.9086H427.637V66.2523H425.293V63.9086ZM427.637 63.9086H429.98V66.2523H427.637V63.9086ZM434.668 63.9086H437.012V66.2523H434.668V63.9086ZM437.012 63.9086H439.355V66.2523H437.012V63.9086ZM415.918 66.2523H418.262V68.5961H415.918V66.2523ZM418.262 66.2523H420.605V68.5961H418.262V66.2523ZM425.293 66.2523H427.637V68.5961H425.293V66.2523ZM427.637 66.2523H429.98V68.5961H427.637V66.2523ZM434.668 66.2523H437.012V68.5961H434.668V66.2523ZM437.012 66.2523H439.355V68.5961H437.012V66.2523ZM415.918 68.5961H418.262V70.9398H415.918V68.5961ZM418.262 68.5961H420.605V70.9398H418.262V68.5961ZM434.668 68.5961H437.012V70.9398H434.668V68.5961ZM437.012 68.5961H439.355V70.9398H437.012V68.5961ZM415.918 70.9398H418.262V73.2836H415.918V70.9398ZM418.262 70.9398H420.605V73.2836H418.262V70.9398ZM434.668 70.9398H437.012V73.2836H434.668V70.9398ZM437.012 70.9398H439.355V73.2836H437.012V70.9398ZM415.918 73.2836H418.262V75.6273H415.918V73.2836ZM418.262 73.2836H420.605V75.6273H418.262V73.2836ZM434.668 73.2836H437.012V75.6273H434.668V73.2836ZM437.012 73.2836H439.355V75.6273H437.012V73.2836ZM415.918 75.6273H418.262V77.9711H415.918V75.6273ZM418.262 75.6273H420.605V77.9711H418.262V75.6273ZM434.668 75.6273H437.012V77.9711H434.668V75.6273ZM437.012 75.6273H439.355V77.9711H437.012V75.6273ZM442.309 54.5336H444.652V56.8773H442.309V54.5336ZM444.652 54.5336H446.996V56.8773H444.652V54.5336ZM461.059 54.5336H463.402V56.8773H461.059V54.5336ZM463.402 54.5336H465.746V56.8773H463.402V54.5336ZM442.309 56.8773H444.652V59.2211H442.309V56.8773ZM444.652 56.8773H446.996V59.2211H444.652V56.8773ZM461.059 56.8773H463.402V59.2211H461.059V56.8773ZM463.402 56.8773H465.746V59.2211H463.402V56.8773ZM442.309 59.2211H444.652V61.5648H442.309V59.2211ZM444.652 59.2211H446.996V61.5648H444.652V59.2211ZM461.059 59.2211H463.402V61.5648H461.059V59.2211ZM463.402 59.2211H465.746V61.5648H463.402V59.2211ZM442.309 61.5648H444.652V63.9086H442.309V61.5648ZM444.652 61.5648H446.996V63.9086H444.652V61.5648ZM461.059 61.5648H463.402V63.9086H461.059V61.5648ZM463.402 61.5648H465.746V63.9086H463.402V61.5648ZM442.309 63.9086H444.652V66.2523H442.309V63.9086ZM444.652 63.9086H446.996V66.2523H444.652V63.9086ZM446.996 63.9086H449.34V66.2523H446.996V63.9086ZM449.34 63.9086H451.684V66.2523H449.34V63.9086ZM451.684 63.9086H454.027V66.2523H451.684V63.9086ZM454.027 63.9086H456.371V66.2523H454.027V63.9086ZM456.371 63.9086H458.715V66.2523H456.371V63.9086ZM458.715 63.9086H461.059V66.2523H458.715V63.9086ZM461.059 63.9086H463.402V66.2523H461.059V63.9086ZM463.402 63.9086H465.746V66.2523H463.402V63.9086ZM442.309 66.2523H444.652V68.5961H442.309V66.2523ZM444.652 66.2523H446.996V68.5961H444.652V66.2523ZM446.996 66.2523H449.34V68.5961H446.996V66.2523ZM449.34 66.2523H451.684V68.5961H449.34V66.2523ZM451.684 66.2523H454.027V68.5961H451.684V66.2523ZM454.027 66.2523H456.371V68.5961H454.027V66.2523ZM456.371 66.2523H458.715V68.5961H456.371V66.2523ZM458.715 66.2523H461.059V68.5961H458.715V66.2523ZM461.059 66.2523H463.402V68.5961H461.059V66.2523ZM463.402 66.2523H465.746V68.5961H463.402V66.2523ZM451.684 68.5961H454.027V70.9398H451.684V68.5961ZM454.027 68.5961H456.371V70.9398H454.027V68.5961ZM451.684 70.9398H454.027V73.2836H451.684V70.9398ZM454.027 70.9398H456.371V73.2836H454.027V70.9398ZM451.684 73.2836H454.027V75.6273H451.684V73.2836ZM454.027 73.2836H456.371V75.6273H454.027V73.2836ZM451.684 75.6273H454.027V77.9711H451.684V75.6273ZM454.027 75.6273H456.371V77.9711H454.027V75.6273ZM478.309 54.5336H480.652V56.8773H478.309V54.5336ZM480.652 54.5336H482.996V56.8773H480.652V54.5336ZM482.996 54.5336H485.34V56.8773H482.996V54.5336ZM485.34 54.5336H487.684V56.8773H485.34V54.5336ZM487.684 54.5336H490.027V56.8773H487.684V54.5336ZM490.027 54.5336H492.371V56.8773H490.027V54.5336ZM492.371 54.5336H494.715V56.8773H492.371V54.5336ZM494.715 54.5336H497.059V56.8773H494.715V54.5336ZM497.059 54.5336H499.402V56.8773H497.059V54.5336ZM499.402 54.5336H501.746V56.8773H499.402V54.5336ZM478.309 56.8773H480.652V59.2211H478.309V56.8773ZM480.652 56.8773H482.996V59.2211H480.652V56.8773ZM482.996 56.8773H485.34V59.2211H482.996V56.8773ZM485.34 56.8773H487.684V59.2211H485.34V56.8773ZM487.684 56.8773H490.027V59.2211H487.684V56.8773ZM490.027 56.8773H492.371V59.2211H490.027V56.8773ZM492.371 56.8773H494.715V59.2211H492.371V56.8773ZM494.715 56.8773H497.059V59.2211H494.715V56.8773ZM497.059 56.8773H499.402V59.2211H497.059V56.8773ZM499.402 56.8773H501.746V59.2211H499.402V56.8773ZM478.309 59.2211H480.652V61.5648H478.309V59.2211ZM480.652 59.2211H482.996V61.5648H480.652V59.2211ZM497.059 59.2211H499.402V61.5648H497.059V59.2211ZM499.402 59.2211H501.746V61.5648H499.402V59.2211ZM478.309 61.5648H480.652V63.9086H478.309V61.5648ZM480.652 61.5648H482.996V63.9086H480.652V61.5648ZM497.059 61.5648H499.402V63.9086H497.059V61.5648ZM499.402 61.5648H501.746V63.9086H499.402V61.5648ZM478.309 63.9086H480.652V66.2523H478.309V63.9086ZM480.652 63.9086H482.996V66.2523H480.652V63.9086ZM482.996 63.9086H485.34V66.2523H482.996V63.9086ZM485.34 63.9086H487.684V66.2523H485.34V63.9086ZM487.684 63.9086H490.027V66.2523H487.684V63.9086ZM490.027 63.9086H492.371V66.2523H490.027V63.9086ZM492.371 63.9086H494.715V66.2523H492.371V63.9086ZM494.715 63.9086H497.059V66.2523H494.715V63.9086ZM497.059 63.9086H499.402V66.2523H497.059V63.9086ZM499.402 63.9086H501.746V66.2523H499.402V63.9086ZM478.309 66.2523H480.652V68.5961H478.309V66.2523ZM480.652 66.2523H482.996V68.5961H480.652V66.2523ZM482.996 66.2523H485.34V68.5961H482.996V66.2523ZM485.34 66.2523H487.684V68.5961H485.34V66.2523ZM487.684 66.2523H490.027V68.5961H487.684V66.2523ZM490.027 66.2523H492.371V68.5961H490.027V66.2523ZM492.371 66.2523H494.715V68.5961H492.371V66.2523ZM494.715 66.2523H497.059V68.5961H494.715V66.2523ZM497.059 66.2523H499.402V68.5961H497.059V66.2523ZM499.402 66.2523H501.746V68.5961H499.402V66.2523ZM478.309 68.5961H480.652V70.9398H478.309V68.5961ZM480.652 68.5961H482.996V70.9398H480.652V68.5961ZM478.309 70.9398H480.652V73.2836H478.309V70.9398ZM480.652 70.9398H482.996V73.2836H480.652V70.9398ZM478.309 73.2836H480.652V75.6273H478.309V73.2836ZM480.652 73.2836H482.996V75.6273H480.652V73.2836ZM478.309 75.6273H480.652V77.9711H478.309V75.6273ZM480.652 75.6273H482.996V77.9711H480.652V75.6273ZM504.699 54.5336H507.043V56.8773H504.699V54.5336ZM507.043 54.5336H509.387V56.8773H507.043V54.5336ZM509.387 54.5336H511.73V56.8773H509.387V54.5336ZM511.73 54.5336H514.074V56.8773H511.73V54.5336ZM514.074 54.5336H516.418V56.8773H514.074V54.5336ZM516.418 54.5336H518.762V56.8773H516.418V54.5336ZM518.762 54.5336H521.105V56.8773H518.762V54.5336ZM521.105 54.5336H523.449V56.8773H521.105V54.5336ZM523.449 54.5336H525.793V56.8773H523.449V54.5336ZM525.793 54.5336H528.137V56.8773H525.793V54.5336ZM504.699 56.8773H507.043V59.2211H504.699V56.8773ZM507.043 56.8773H509.387V59.2211H507.043V56.8773ZM509.387 56.8773H511.73V59.2211H509.387V56.8773ZM511.73 56.8773H514.074V59.2211H511.73V56.8773ZM514.074 56.8773H516.418V59.2211H514.074V56.8773ZM516.418 56.8773H518.762V59.2211H516.418V56.8773ZM518.762 56.8773H521.105V59.2211H518.762V56.8773ZM521.105 56.8773H523.449V59.2211H521.105V56.8773ZM523.449 56.8773H525.793V59.2211H523.449V56.8773ZM525.793 56.8773H528.137V59.2211H525.793V56.8773ZM504.699 59.2211H507.043V61.5648H504.699V59.2211ZM507.043 59.2211H509.387V61.5648H507.043V59.2211ZM523.449 59.2211H525.793V61.5648H523.449V59.2211ZM525.793 59.2211H528.137V61.5648H525.793V59.2211ZM504.699 61.5648H507.043V63.9086H504.699V61.5648ZM507.043 61.5648H509.387V63.9086H507.043V61.5648ZM523.449 61.5648H525.793V63.9086H523.449V61.5648ZM525.793 61.5648H528.137V63.9086H525.793V61.5648ZM504.699 63.9086H507.043V66.2523H504.699V63.9086ZM507.043 63.9086H509.387V66.2523H507.043V63.9086ZM509.387 63.9086H511.73V66.2523H509.387V63.9086ZM511.73 63.9086H514.074V66.2523H511.73V63.9086ZM514.074 63.9086H516.418V66.2523H514.074V63.9086ZM516.418 63.9086H518.762V66.2523H516.418V63.9086ZM518.762 63.9086H521.105V66.2523H518.762V63.9086ZM521.105 63.9086H523.449V66.2523H521.105V63.9086ZM523.449 63.9086H525.793V66.2523H523.449V63.9086ZM525.793 63.9086H528.137V66.2523H525.793V63.9086ZM504.699 66.2523H507.043V68.5961H504.699V66.2523ZM507.043 66.2523H509.387V68.5961H507.043V66.2523ZM509.387 66.2523H511.73V68.5961H509.387V66.2523ZM511.73 66.2523H514.074V68.5961H511.73V66.2523ZM514.074 66.2523H516.418V68.5961H514.074V66.2523ZM516.418 66.2523H518.762V68.5961H516.418V66.2523ZM518.762 66.2523H521.105V68.5961H518.762V66.2523ZM521.105 66.2523H523.449V68.5961H521.105V66.2523ZM523.449 66.2523H525.793V68.5961H523.449V66.2523ZM525.793 66.2523H528.137V68.5961H525.793V66.2523ZM504.699 68.5961H507.043V70.9398H504.699V68.5961ZM507.043 68.5961H509.387V70.9398H507.043V68.5961ZM509.387 68.5961H511.73V70.9398H509.387V68.5961ZM511.73 68.5961H514.074V70.9398H511.73V68.5961ZM504.699 70.9398H507.043V73.2836H504.699V70.9398ZM507.043 70.9398H509.387V73.2836H507.043V70.9398ZM509.387 70.9398H511.73V73.2836H509.387V70.9398ZM511.73 70.9398H514.074V73.2836H511.73V70.9398ZM504.699 73.2836H507.043V75.6273H504.699V73.2836ZM507.043 73.2836H509.387V75.6273H507.043V73.2836ZM514.074 73.2836H516.418V75.6273H514.074V73.2836ZM516.418 73.2836H518.762V75.6273H516.418V73.2836ZM518.762 73.2836H521.105V75.6273H518.762V73.2836ZM521.105 73.2836H523.449V75.6273H521.105V73.2836ZM504.699 75.6273H507.043V77.9711H504.699V75.6273ZM507.043 75.6273H509.387V77.9711H507.043V75.6273ZM514.074 75.6273H516.418V77.9711H514.074V75.6273ZM516.418 75.6273H518.762V77.9711H516.418V75.6273ZM518.762 75.6273H521.105V77.9711H518.762V75.6273ZM521.105 75.6273H523.449V77.9711H521.105V75.6273ZM531.09 54.5336H533.434V56.8773H531.09V54.5336ZM533.434 54.5336H535.777V56.8773H533.434V54.5336ZM535.777 54.5336H538.121V56.8773H535.777V54.5336ZM538.121 54.5336H540.465V56.8773H538.121V54.5336ZM540.465 54.5336H542.809V56.8773H540.465V54.5336ZM542.809 54.5336H545.152V56.8773H542.809V54.5336ZM545.152 54.5336H547.496V56.8773H545.152V54.5336ZM547.496 54.5336H549.84V56.8773H547.496V54.5336ZM549.84 54.5336H552.184V56.8773H549.84V54.5336ZM552.184 54.5336H554.527V56.8773H552.184V54.5336ZM531.09 56.8773H533.434V59.2211H531.09V56.8773ZM533.434 56.8773H535.777V59.2211H533.434V56.8773ZM535.777 56.8773H538.121V59.2211H535.777V56.8773ZM538.121 56.8773H540.465V59.2211H538.121V56.8773ZM540.465 56.8773H542.809V59.2211H540.465V56.8773ZM542.809 56.8773H545.152V59.2211H542.809V56.8773ZM545.152 56.8773H547.496V59.2211H545.152V56.8773ZM547.496 56.8773H549.84V59.2211H547.496V56.8773ZM549.84 56.8773H552.184V59.2211H549.84V56.8773ZM552.184 56.8773H554.527V59.2211H552.184V56.8773ZM531.09 59.2211H533.434V61.5648H531.09V59.2211ZM533.434 59.2211H535.777V61.5648H533.434V59.2211ZM549.84 59.2211H552.184V61.5648H549.84V59.2211ZM552.184 59.2211H554.527V61.5648H552.184V59.2211ZM531.09 61.5648H533.434V63.9086H531.09V61.5648ZM533.434 61.5648H535.777V63.9086H533.434V61.5648ZM549.84 61.5648H552.184V63.9086H549.84V61.5648ZM552.184 61.5648H554.527V63.9086H552.184V61.5648ZM531.09 63.9086H533.434V66.2523H531.09V63.9086ZM533.434 63.9086H535.777V66.2523H533.434V63.9086ZM549.84 63.9086H552.184V66.2523H549.84V63.9086ZM552.184 63.9086H554.527V66.2523H552.184V63.9086ZM531.09 66.2523H533.434V68.5961H531.09V66.2523ZM533.434 66.2523H535.777V68.5961H533.434V66.2523ZM549.84 66.2523H552.184V68.5961H549.84V66.2523ZM552.184 66.2523H554.527V68.5961H552.184V66.2523ZM531.09 68.5961H533.434V70.9398H531.09V68.5961ZM533.434 68.5961H535.777V70.9398H533.434V68.5961ZM549.84 68.5961H552.184V70.9398H549.84V68.5961ZM552.184 68.5961H554.527V70.9398H552.184V68.5961ZM531.09 70.9398H533.434V73.2836H531.09V70.9398ZM533.434 70.9398H535.777V73.2836H533.434V70.9398ZM549.84 70.9398H552.184V73.2836H549.84V70.9398ZM552.184 70.9398H554.527V73.2836H552.184V70.9398ZM531.09 73.2836H533.434V75.6273H531.09V73.2836ZM533.434 73.2836H535.777V75.6273H533.434V73.2836ZM535.777 73.2836H538.121V75.6273H535.777V73.2836ZM538.121 73.2836H540.465V75.6273H538.121V73.2836ZM540.465 73.2836H542.809V75.6273H540.465V73.2836ZM542.809 73.2836H545.152V75.6273H542.809V73.2836ZM545.152 73.2836H547.496V75.6273H545.152V73.2836ZM547.496 73.2836H549.84V75.6273H547.496V73.2836ZM549.84 73.2836H552.184V75.6273H549.84V73.2836ZM552.184 73.2836H554.527V75.6273H552.184V73.2836ZM531.09 75.6273H533.434V77.9711H531.09V75.6273ZM533.434 75.6273H535.777V77.9711H533.434V75.6273ZM535.777 75.6273H538.121V77.9711H535.777V75.6273ZM538.121 75.6273H540.465V77.9711H538.121V75.6273ZM540.465 75.6273H542.809V77.9711H540.465V75.6273ZM542.809 75.6273H545.152V77.9711H542.809V75.6273ZM545.152 75.6273H547.496V77.9711H545.152V75.6273ZM547.496 75.6273H549.84V77.9711H547.496V75.6273ZM549.84 75.6273H552.184V77.9711H549.84V75.6273ZM552.184 75.6273H554.527V77.9711H552.184V75.6273ZM576.23 54.5336H578.574V56.8773H576.23V54.5336ZM578.574 54.5336H580.918V56.8773H578.574V54.5336ZM576.23 56.8773H578.574V59.2211H576.23V56.8773ZM578.574 56.8773H580.918V59.2211H578.574V56.8773ZM576.23 59.2211H578.574V61.5648H576.23V59.2211ZM578.574 59.2211H580.918V61.5648H578.574V59.2211ZM576.23 61.5648H578.574V63.9086H576.23V61.5648ZM578.574 61.5648H580.918V63.9086H578.574V61.5648ZM576.23 63.9086H578.574V66.2523H576.23V63.9086ZM578.574 63.9086H580.918V66.2523H578.574V63.9086ZM576.23 66.2523H578.574V68.5961H576.23V66.2523ZM578.574 66.2523H580.918V68.5961H578.574V66.2523ZM576.23 68.5961H578.574V70.9398H576.23V68.5961ZM578.574 68.5961H580.918V70.9398H578.574V68.5961ZM576.23 70.9398H578.574V73.2836H576.23V70.9398ZM578.574 70.9398H580.918V73.2836H578.574V70.9398ZM557.48 73.2836H559.824V75.6273H557.48V73.2836ZM559.824 73.2836H562.168V75.6273H559.824V73.2836ZM562.168 73.2836H564.512V75.6273H562.168V73.2836ZM564.512 73.2836H566.855V75.6273H564.512V73.2836ZM566.855 73.2836H569.199V75.6273H566.855V73.2836ZM569.199 73.2836H571.543V75.6273H569.199V73.2836ZM571.543 73.2836H573.887V75.6273H571.543V73.2836ZM573.887 73.2836H576.23V75.6273H573.887V73.2836ZM576.23 73.2836H578.574V75.6273H576.23V73.2836ZM578.574 73.2836H580.918V75.6273H578.574V73.2836ZM557.48 75.6273H559.824V77.9711H557.48V75.6273ZM559.824 75.6273H562.168V77.9711H559.824V75.6273ZM562.168 75.6273H564.512V77.9711H562.168V75.6273ZM564.512 75.6273H566.855V77.9711H564.512V75.6273ZM566.855 75.6273H569.199V77.9711H566.855V75.6273ZM569.199 75.6273H571.543V77.9711H569.199V75.6273ZM571.543 75.6273H573.887V77.9711H571.543V75.6273ZM573.887 75.6273H576.23V77.9711H573.887V75.6273ZM576.23 75.6273H578.574V77.9711H576.23V75.6273ZM578.574 75.6273H580.918V77.9711H578.574V75.6273ZM583.871 54.5336H586.215V56.8773H583.871V54.5336ZM586.215 54.5336H588.559V56.8773H586.215V54.5336ZM588.559 54.5336H590.902V56.8773H588.559V54.5336ZM590.902 54.5336H593.246V56.8773H590.902V54.5336ZM593.246 54.5336H595.59V56.8773H593.246V54.5336ZM595.59 54.5336H597.934V56.8773H595.59V54.5336ZM597.934 54.5336H600.277V56.8773H597.934V54.5336ZM600.277 54.5336H602.621V56.8773H600.277V54.5336ZM602.621 54.5336H604.965V56.8773H602.621V54.5336ZM604.965 54.5336H607.309V56.8773H604.965V54.5336ZM583.871 56.8773H586.215V59.2211H583.871V56.8773ZM586.215 56.8773H588.559V59.2211H586.215V56.8773ZM588.559 56.8773H590.902V59.2211H588.559V56.8773ZM590.902 56.8773H593.246V59.2211H590.902V56.8773ZM593.246 56.8773H595.59V59.2211H593.246V56.8773ZM595.59 56.8773H597.934V59.2211H595.59V56.8773ZM597.934 56.8773H600.277V59.2211H597.934V56.8773ZM600.277 56.8773H602.621V59.2211H600.277V56.8773ZM602.621 56.8773H604.965V59.2211H602.621V56.8773ZM604.965 56.8773H607.309V59.2211H604.965V56.8773ZM583.871 59.2211H586.215V61.5648H583.871V59.2211ZM586.215 59.2211H588.559V61.5648H586.215V59.2211ZM583.871 61.5648H586.215V63.9086H583.871V61.5648ZM586.215 61.5648H588.559V63.9086H586.215V61.5648ZM583.871 63.9086H586.215V66.2523H583.871V63.9086ZM586.215 63.9086H588.559V66.2523H586.215V63.9086ZM588.559 63.9086H590.902V66.2523H588.559V63.9086ZM590.902 63.9086H593.246V66.2523H590.902V63.9086ZM593.246 63.9086H595.59V66.2523H593.246V63.9086ZM595.59 63.9086H597.934V66.2523H595.59V63.9086ZM583.871 66.2523H586.215V68.5961H583.871V66.2523ZM586.215 66.2523H588.559V68.5961H586.215V66.2523ZM588.559 66.2523H590.902V68.5961H588.559V66.2523ZM590.902 66.2523H593.246V68.5961H590.902V66.2523ZM593.246 66.2523H595.59V68.5961H593.246V66.2523ZM595.59 66.2523H597.934V68.5961H595.59V66.2523ZM583.871 68.5961H586.215V70.9398H583.871V68.5961ZM586.215 68.5961H588.559V70.9398H586.215V68.5961ZM583.871 70.9398H586.215V73.2836H583.871V70.9398ZM586.215 70.9398H588.559V73.2836H586.215V70.9398ZM583.871 73.2836H586.215V75.6273H583.871V73.2836ZM586.215 73.2836H588.559V75.6273H586.215V73.2836ZM588.559 73.2836H590.902V75.6273H588.559V73.2836ZM590.902 73.2836H593.246V75.6273H590.902V73.2836ZM593.246 73.2836H595.59V75.6273H593.246V73.2836ZM595.59 73.2836H597.934V75.6273H595.59V73.2836ZM597.934 73.2836H600.277V75.6273H597.934V73.2836ZM600.277 73.2836H602.621V75.6273H600.277V73.2836ZM602.621 73.2836H604.965V75.6273H602.621V73.2836ZM604.965 73.2836H607.309V75.6273H604.965V73.2836ZM583.871 75.6273H586.215V77.9711H583.871V75.6273ZM586.215 75.6273H588.559V77.9711H586.215V75.6273ZM588.559 75.6273H590.902V77.9711H588.559V75.6273ZM590.902 75.6273H593.246V77.9711H590.902V75.6273ZM593.246 75.6273H595.59V77.9711H593.246V75.6273ZM595.59 75.6273H597.934V77.9711H595.59V75.6273ZM597.934 75.6273H600.277V77.9711H597.934V75.6273ZM600.277 75.6273H602.621V77.9711H600.277V75.6273ZM602.621 75.6273H604.965V77.9711H602.621V75.6273ZM604.965 75.6273H607.309V77.9711H604.965V75.6273ZM610.262 54.5336H612.605V56.8773H610.262V54.5336ZM612.605 54.5336H614.949V56.8773H612.605V54.5336ZM614.949 54.5336H617.293V56.8773H614.949V54.5336ZM617.293 54.5336H619.637V56.8773H617.293V54.5336ZM619.637 54.5336H621.98V56.8773H619.637V54.5336ZM621.98 54.5336H624.324V56.8773H621.98V54.5336ZM624.324 54.5336H626.668V56.8773H624.324V54.5336ZM626.668 54.5336H629.012V56.8773H626.668V54.5336ZM629.012 54.5336H631.355V56.8773H629.012V54.5336ZM631.355 54.5336H633.699V56.8773H631.355V54.5336ZM610.262 56.8773H612.605V59.2211H610.262V56.8773ZM612.605 56.8773H614.949V59.2211H612.605V56.8773ZM614.949 56.8773H617.293V59.2211H614.949V56.8773ZM617.293 56.8773H619.637V59.2211H617.293V56.8773ZM619.637 56.8773H621.98V59.2211H619.637V56.8773ZM621.98 56.8773H624.324V59.2211H621.98V56.8773ZM624.324 56.8773H626.668V59.2211H624.324V56.8773ZM626.668 56.8773H629.012V59.2211H626.668V56.8773ZM629.012 56.8773H631.355V59.2211H629.012V56.8773ZM631.355 56.8773H633.699V59.2211H631.355V56.8773ZM610.262 59.2211H612.605V61.5648H610.262V59.2211ZM612.605 59.2211H614.949V61.5648H612.605V59.2211ZM610.262 61.5648H612.605V63.9086H610.262V61.5648ZM612.605 61.5648H614.949V63.9086H612.605V61.5648ZM610.262 63.9086H612.605V66.2523H610.262V63.9086ZM612.605 63.9086H614.949V66.2523H612.605V63.9086ZM610.262 66.2523H612.605V68.5961H610.262V66.2523ZM612.605 66.2523H614.949V68.5961H612.605V66.2523ZM610.262 68.5961H612.605V70.9398H610.262V68.5961ZM612.605 68.5961H614.949V70.9398H612.605V68.5961ZM610.262 70.9398H612.605V73.2836H610.262V70.9398ZM612.605 70.9398H614.949V73.2836H612.605V70.9398ZM610.262 73.2836H612.605V75.6273H610.262V73.2836ZM612.605 73.2836H614.949V75.6273H612.605V73.2836ZM614.949 73.2836H617.293V75.6273H614.949V73.2836ZM617.293 73.2836H619.637V75.6273H617.293V73.2836ZM619.637 73.2836H621.98V75.6273H619.637V73.2836ZM621.98 73.2836H624.324V75.6273H621.98V73.2836ZM624.324 73.2836H626.668V75.6273H624.324V73.2836ZM626.668 73.2836H629.012V75.6273H626.668V73.2836ZM629.012 73.2836H631.355V75.6273H629.012V73.2836ZM631.355 73.2836H633.699V75.6273H631.355V73.2836ZM610.262 75.6273H612.605V77.9711H610.262V75.6273ZM612.605 75.6273H614.949V77.9711H612.605V75.6273ZM614.949 75.6273H617.293V77.9711H614.949V75.6273ZM617.293 75.6273H619.637V77.9711H617.293V75.6273ZM619.637 75.6273H621.98V77.9711H619.637V75.6273ZM621.98 75.6273H624.324V77.9711H621.98V75.6273ZM624.324 75.6273H626.668V77.9711H624.324V75.6273ZM626.668 75.6273H629.012V77.9711H626.668V75.6273ZM629.012 75.6273H631.355V77.9711H629.012V75.6273ZM631.355 75.6273H633.699V77.9711H631.355V75.6273ZM636.652 54.5336H638.996V56.8773H636.652V54.5336ZM638.996 54.5336H641.34V56.8773H638.996V54.5336ZM641.34 54.5336H643.684V56.8773H641.34V54.5336ZM643.684 54.5336H646.027V56.8773H643.684V54.5336ZM646.027 54.5336H648.371V56.8773H646.027V54.5336ZM648.371 54.5336H650.715V56.8773H648.371V54.5336ZM650.715 54.5336H653.059V56.8773H650.715V54.5336ZM653.059 54.5336H655.402V56.8773H653.059V54.5336ZM655.402 54.5336H657.746V56.8773H655.402V54.5336ZM657.746 54.5336H660.09V56.8773H657.746V54.5336ZM636.652 56.8773H638.996V59.2211H636.652V56.8773ZM638.996 56.8773H641.34V59.2211H638.996V56.8773ZM641.34 56.8773H643.684V59.2211H641.34V56.8773ZM643.684 56.8773H646.027V59.2211H643.684V56.8773ZM646.027 56.8773H648.371V59.2211H646.027V56.8773ZM648.371 56.8773H650.715V59.2211H648.371V56.8773ZM650.715 56.8773H653.059V59.2211H650.715V56.8773ZM653.059 56.8773H655.402V59.2211H653.059V56.8773ZM655.402 56.8773H657.746V59.2211H655.402V56.8773ZM657.746 56.8773H660.09V59.2211H657.746V56.8773ZM646.027 59.2211H648.371V61.5648H646.027V59.2211ZM648.371 59.2211H650.715V61.5648H648.371V59.2211ZM646.027 61.5648H648.371V63.9086H646.027V61.5648ZM648.371 61.5648H650.715V63.9086H648.371V61.5648ZM646.027 63.9086H648.371V66.2523H646.027V63.9086ZM648.371 63.9086H650.715V66.2523H648.371V63.9086ZM646.027 66.2523H648.371V68.5961H646.027V66.2523ZM648.371 66.2523H650.715V68.5961H648.371V66.2523ZM646.027 68.5961H648.371V70.9398H646.027V68.5961ZM648.371 68.5961H650.715V70.9398H648.371V68.5961ZM646.027 70.9398H648.371V73.2836H646.027V70.9398ZM648.371 70.9398H650.715V73.2836H648.371V70.9398ZM646.027 73.2836H648.371V75.6273H646.027V73.2836ZM648.371 73.2836H650.715V75.6273H648.371V73.2836ZM646.027 75.6273H648.371V77.9711H646.027V75.6273ZM648.371 75.6273H650.715V77.9711H648.371V75.6273ZM663.043 54.5336H665.387V56.8773H663.043V54.5336ZM665.387 54.5336H667.73V56.8773H665.387V54.5336ZM667.73 54.5336H670.074V56.8773H667.73V54.5336ZM670.074 54.5336H672.418V56.8773H670.074V54.5336ZM672.418 54.5336H674.762V56.8773H672.418V54.5336ZM674.762 54.5336H677.105V56.8773H674.762V54.5336ZM677.105 54.5336H679.449V56.8773H677.105V54.5336ZM679.449 54.5336H681.793V56.8773H679.449V54.5336ZM681.793 54.5336H684.137V56.8773H681.793V54.5336ZM684.137 54.5336H686.48V56.8773H684.137V54.5336ZM663.043 56.8773H665.387V59.2211H663.043V56.8773ZM665.387 56.8773H667.73V59.2211H665.387V56.8773ZM667.73 56.8773H670.074V59.2211H667.73V56.8773ZM670.074 56.8773H672.418V59.2211H670.074V56.8773ZM672.418 56.8773H674.762V59.2211H672.418V56.8773ZM674.762 56.8773H677.105V59.2211H674.762V56.8773ZM677.105 56.8773H679.449V59.2211H677.105V56.8773ZM679.449 56.8773H681.793V59.2211H679.449V56.8773ZM681.793 56.8773H684.137V59.2211H681.793V56.8773ZM684.137 56.8773H686.48V59.2211H684.137V56.8773ZM663.043 59.2211H665.387V61.5648H663.043V59.2211ZM665.387 59.2211H667.73V61.5648H665.387V59.2211ZM663.043 61.5648H665.387V63.9086H663.043V61.5648ZM665.387 61.5648H667.73V63.9086H665.387V61.5648ZM663.043 63.9086H665.387V66.2523H663.043V63.9086ZM665.387 63.9086H667.73V66.2523H665.387V63.9086ZM667.73 63.9086H670.074V66.2523H667.73V63.9086ZM670.074 63.9086H672.418V66.2523H670.074V63.9086ZM672.418 63.9086H674.762V66.2523H672.418V63.9086ZM674.762 63.9086H677.105V66.2523H674.762V63.9086ZM677.105 63.9086H679.449V66.2523H677.105V63.9086ZM679.449 63.9086H681.793V66.2523H679.449V63.9086ZM681.793 63.9086H684.137V66.2523H681.793V63.9086ZM684.137 63.9086H686.48V66.2523H684.137V63.9086ZM663.043 66.2523H665.387V68.5961H663.043V66.2523ZM665.387 66.2523H667.73V68.5961H665.387V66.2523ZM667.73 66.2523H670.074V68.5961H667.73V66.2523ZM670.074 66.2523H672.418V68.5961H670.074V66.2523ZM672.418 66.2523H674.762V68.5961H672.418V66.2523ZM674.762 66.2523H677.105V68.5961H674.762V66.2523ZM677.105 66.2523H679.449V68.5961H677.105V66.2523ZM679.449 66.2523H681.793V68.5961H679.449V66.2523ZM681.793 66.2523H684.137V68.5961H681.793V66.2523ZM684.137 66.2523H686.48V68.5961H684.137V66.2523ZM681.793 68.5961H684.137V70.9398H681.793V68.5961ZM684.137 68.5961H686.48V70.9398H684.137V68.5961ZM681.793 70.9398H684.137V73.2836H681.793V70.9398ZM684.137 70.9398H686.48V73.2836H684.137V70.9398ZM663.043 73.2836H665.387V75.6273H663.043V73.2836ZM665.387 73.2836H667.73V75.6273H665.387V73.2836ZM667.73 73.2836H670.074V75.6273H667.73V73.2836ZM670.074 73.2836H672.418V75.6273H670.074V73.2836ZM672.418 73.2836H674.762V75.6273H672.418V73.2836ZM674.762 73.2836H677.105V75.6273H674.762V73.2836ZM677.105 73.2836H679.449V75.6273H677.105V73.2836ZM679.449 73.2836H681.793V75.6273H679.449V73.2836ZM681.793 73.2836H684.137V75.6273H681.793V73.2836ZM684.137 73.2836H686.48V75.6273H684.137V73.2836ZM663.043 75.6273H665.387V77.9711H663.043V75.6273ZM665.387 75.6273H667.73V77.9711H665.387V75.6273ZM667.73 75.6273H670.074V77.9711H667.73V75.6273ZM670.074 75.6273H672.418V77.9711H670.074V75.6273ZM672.418 75.6273H674.762V77.9711H672.418V75.6273ZM674.762 75.6273H677.105V77.9711H674.762V75.6273ZM677.105 75.6273H679.449V77.9711H677.105V75.6273ZM679.449 75.6273H681.793V77.9711H679.449V75.6273ZM681.793 75.6273H684.137V77.9711H681.793V75.6273ZM684.137 75.6273H686.48V77.9711H684.137V75.6273Z"
          fill="#FFD700"
        />
      </g>
      <line
        opacity="0.5"
        x1="391.354"
        y1="27.3732"
        x2="391.354"
        y2="105.582"
        stroke="#FFD700"
        stroke-width="3"
        stroke-dasharray="4 4"
      />
    </svg>
  );
}

export default function ProjectsTitleBis() {
  return (
    <div className="relative flex h-[189px] w-[720px] flex-col justify-between bg-white/10 p-8">
      <img
        src="/vectors/title-top-vector.svg"
        alt="top title vector"
        className="absolute left-0 top-0 -m-5"
      />
      <h2 className="font-goodtimes text-2xl text-gallifreyanGold">
        My Projects
      </h2>
      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <img
        src="/vectors/title-bottom-vector.svg"
        alt="bottom title vector"
        className="absolute bottom-0 right-0 -mb-11 -mr-6"
      />
    </div>
  );
}

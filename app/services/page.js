import Starfield from "react-starfield";

export default function Services() {
  return (
    <main className="flex w-screen flex-col overflow-x-hidden">
      <Starfield
        starCount={1300}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
    </main>
  );
}

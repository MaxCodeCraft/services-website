export default function MailSection() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-12 bg-tardisOrange py-16">
      <h2 className="text-center font-goodtimes text-xl lg:text-3xl">
        Commençons un projet ensemble !
      </h2>
      <div className="flex w-11/12 gap-4 rounded-lg bg-spatialGrey p-2 md:w-fit">
        <input
          type="mail"
          placeholder="Entrez votre adresse email"
          className="w-2/3 rounded-lg bg-spatialGrey p-4 text-white md:w-96"
        />
        <button className="rounded-xl bg-gallifreyanGold p-4 text-sm">
          Faisons-le !
        </button>
      </div>
    </div>
  );
}

export default function MailSection() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 bg-tardisOrange py-16">
      <h2 className="font-goodtimes text-3xl">
        Commençons un projet ensemble !
      </h2>
      <form action="POST">
        <div className="flex gap-4 rounded-lg bg-spatialGrey p-2">
          <input
            type="mail"
            placeholder="Entrez votre adresse email"
            className="w-96 rounded-lg bg-spatialGrey p-4 text-white"
          />
          <button type="submit" className="rounded-xl bg-gallifreyanGold p-4">
            Faisons-le !
          </button>
        </div>
      </form>
    </div>
  );
}

import Image from "next/image";

export const metadata = {
  title: "Rhino Mining Company | Ecogensus",
  description:
    "Company-owned Rhino deployments across the United States. Something significant is taking shape.",
};

const board = [
  {
    name: "Bjørnulf Østvik",
    title: "Founder, CEO & Chief Scientist",
    image: "/bjornulf-web.jpg",
  },
  {
    name: "Pete Leemputte",
    title: "Former CFO and Treasurer of Keurig Green Mountain, Mead Johnson, and Brunswick Corporation",
    image: "/leemputte.png",
  },
  {
    name: "William Gress",
    title: "CEO of Cadrex Manufacturing. Former President South America and VP of Supply Chain at Brunswick Corporation",
    image: "/gress.png",
  },
];

export default function RhinoMiningPage() {
  return (
    <main className="pt-24 pb-24">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Rhino Mining Company
        </h1>

        <section className="mt-24 flex flex-col items-center text-center">
          <div className="mx-auto max-w-2xl">
            <p className="text-2xl font-semibold text-white">
              Something significant is taking shape.
            </p>
            <p className="mt-6 text-xl text-zinc-400 leading-relaxed">
              Rhino Mining Company is Ecogensus&apos; wholly-owned U.S. operating subsidiary. Details on our deployment strategy, flagship projects, and investment structure will be shared here as milestones are reached.
            </p>
            <p className="mt-12 text-lg text-zinc-500">
              For early inquiries, reach us at{" "}
              <a href="mailto:info@ecogensus.com" className="text-blue-400 hover:text-blue-300 hover:underline">
                info@ecogensus.com
              </a>
            </p>
          </div>
        </section>
      </div>

      {/* The Board */}
      <section className="mt-16 border-t border-white/10 px-6 pt-16 pb-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            The Board
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-16 sm:grid-cols-3">
            {board.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <div className="h-36 w-36 overflow-hidden rounded-full bg-zinc-800">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={288}
                    height={288}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export const metadata = {
  title: "Library & Resources | Ecogensus",
  description:
    "White papers, technical documents, and public-facing resources on constructive thermochemistry and the DOR process.",
};

export default function LibraryPage() {
  return (
    <main className="pt-24 pb-24">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Library & Resources
        </h1>
        <p className="mt-6 text-xl text-zinc-400">
          White papers and public-facing documents. This page grows over time.
        </p>

        <section className="mt-24 space-y-12">
          <article id="paper-1" className="border-l-4 border-blue-500 pl-8">
            <h2 className="text-2xl font-semibold text-white">
              Constructive Thermochemistry: A New Paradigm for Carbonaceous Material Conversion
            </h2>
            <p className="mt-4 text-zinc-400">
              The foundational paper on the DOR process and constructive
              thermochemistry, distinct from combustion, pyrolysis, and
              gasification.
            </p>
            <div className="mt-6">
              <a
                href="/documents/constructive-thermochemistry.pdf"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download PDF
                <span aria-hidden>→</span>
              </a>
            </div>
          </article>

          <p className="text-zinc-500">
            Additional white papers and documents will be added as they are
            published.
          </p>
        </section>
      </div>
    </main>
  );
}

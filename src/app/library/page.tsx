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
          <p className="text-zinc-500">
            Additional white papers and documents will be added as they are
            published.
          </p>
        </section>
      </div>
    </main>
  );
}

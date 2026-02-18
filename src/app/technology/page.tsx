import Link from "next/link";

export const metadata = {
  title: "The Science of Surface Carbon | Ecogensus",
  description:
    "The DOR process, RhinoGrid, Rhino 5000L platform, and products. Constructive thermochemistry, distinct from pyrolysis, gasification, and incineration.",
};

export default function TechnologyPage() {
  return (
    <main className="pt-24 pb-24">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          The Science of Surface Carbon
        </h1>

        {/* The Transformative DOR™ Process */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            The Transformative DOR™ Process
          </h2>
          <div className="mt-8 space-y-6 text-xl text-zinc-300 leading-relaxed">
            <p>
              Dynamic Organic Repolymerization (DOR™) is a patented thermochemical process that operates in a narrow, 170–200°C temperature regime to transform mixed heterogeneous polymers into a new substance called EGS-6™.
            </p>
            <p>
              EGS-6™ is a refined carbon material: the first commercially produced engineered carbon derived from surface polymer sources.
            </p>
            <p>
              This base material is then processed into multiple product streams: enhanced composite lumbers and building materials, polymer powders (bioplastics), and high-grade engineered fuels to substitute coal.
            </p>
            <p>
              The DOR™ process is akin to manufacturing and completely avoids the emissions profile of high-temperature alternatives while producing a consistent, processable base material that can be directed into multiple product streams.
            </p>
            <p>
              The process was discovered by founder Bjørnulf Østvik and represents a new sub-branch of thermochemistry, CONSTRUCTIVE THERMOCHEMISTRY, distinct from destructive processes such as combustion, pyrolysis, and gasification. Since it produces valuable materials, DOR is fundamentally a production process, closer in nature to bioplastics manufacturing or textiles production than to any form of thermal waste treatment.
            </p>
          </div>
        </section>

        {/* RhinoGrid™ and The Rhino 5000L */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            RhinoGrid™ and The Rhino 5000L
          </h2>
          <div className="mt-8 space-y-6 text-xl text-zinc-300 leading-relaxed">
            <p>
              The Rhino is a modular, ISO-container-scale system designed for
              industrial deployment. Each unit processes mixed municipal solid
              waste at throughput specifications suitable for municipal and
              commercial applications. The platform is engineered for
              scalability: multiple Rhinos per site, multiple sites per region.
            </p>
            <p>
              Manufactured to industrial standards, the Rhino 5000L represents
              the commercial embodiment of the DOR process, built for
              reliability, maintainability, and integration into existing waste
              management infrastructure.
            </p>
          </div>
          <div className="mt-12 aspect-video overflow-hidden rounded-lg">
            <video
              src="/rhinofactory.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* Products */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Products
          </h2>
          <div className="mt-12 space-y-8">
            <div className="border-l-4 border-blue-500 pl-8">
              <h3 className="text-xl font-semibold text-white">
                Composite Structural Materials
              </h3>
              <p className="mt-2 text-zinc-400">
                High-density engineered boards, structural lumber profiles, and construction-grade panels produced from EGS-6™. Tunable for load-bearing, insulation, and moisture resistance applications across residential, commercial, and infrastructure use cases.
              </p>
            </div>
            <div className="border-l-4 border-zinc-600 pl-8">
              <h3 className="text-xl font-semibold text-white">
                Polymer Powders
              </h3>
              <p className="mt-2 text-zinc-400">
                Fine-grade polymer powders suitable for injection molding, rotational molding, extrusion, and additive manufacturing (3D printing). A bioplastic-substitute feedstock derived entirely from surface carbon, enabling closed-loop material flows without virgin petrochemical inputs.
              </p>
            </div>
            <div className="border-l-4 border-zinc-600 pl-8">
              <h3 className="text-xl font-semibold text-white">
                EGS-6 Engineered Fuel
              </h3>
              <p className="mt-2 text-zinc-400">
                High-grade solid fuel validated by Uniper, Consol, and other major energy companies. A far cleaner coal substitute engineered to bridge the gap in the energy transition, delivering comparable BTU density with significantly lower emissions, moisture, and variability than conventional solid fuels.
              </p>
            </div>
          </div>
        </section>

        {/* White Paper Link */}
        <section className="mt-24">
          <Link
            href="/library"
            className="inline-flex items-center gap-2 text-lg text-blue-400 hover:text-blue-300 hover:underline"
          >
            Read the foundational paper: <em>Constructive Thermochemistry: A New Paradigm for Carbonaceous Material Conversion</em>
            <span aria-hidden>→</span>
          </Link>
        </section>
      </div>
    </main>
  );
}

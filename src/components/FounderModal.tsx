"use client";

import { useState } from "react";

export function FounderModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-8 inline-flex items-center gap-2 text-lg text-blue-400 hover:text-blue-300 hover:underline"
      >
        About the Founder →
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-white p-8 text-zinc-900 shadow-2xl sm:p-12">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-zinc-400 hover:text-zinc-700"
              aria-label="Close"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
              Bjørnulf Østvik
            </h2>
            <p className="mt-1 text-lg text-zinc-500">
              Founder, CEO & Chief Scientist
            </p>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-zinc-700">
              <p>
                Before founding Ecogensus, Østvik was recruited by Lockheed Martin to architect and launch a new technology ventures division inside the world&apos;s largest defense contractor, building programs in bioenergy, synthetic fuels, mobile power systems and water filtration technologies. His programs included working alongside U.S. Dept of Energy laboratories and an awarded contract from the U.S. Army in mobile power systems.
              </p>
              <p>
                He was a founding Board member and Vice Chairman of the National Energy Systems Technology center led by Sandia National Laboratory. His own firm collaborated with the National Combustion Research center.
              </p>
              <p>
                He also started (and exited) his own specialized civil engineering firm focused on water infrastructure. He consulted for a number of technology firms including in plasma, water filtration substrates, and energy technologies.
              </p>
              <p>
                After advising private equity firms, he was offered an opportunity to raise and manage a large technology and energy asset fund, when the entrepreneurial bug bit again.
              </p>
              <p>
                He decided to build a secret technology demonstration facility in an industrial warehouse outside New York City (later named his X-Lab). There he discovered EGS-6™, a novel polymeric composite derived entirely from discarded carbon-based materials. Then with a small engineering team he assembled, they designed the Rhino™ system platform to deploy rapidly and at scale. The work has produced over 100 granted patents worldwide in materials science, fuel compositions, polymeric composites, machinery designs and distributed processing systems.
              </p>
              <p className="font-semibold text-zinc-900">
                Østvik&apos;s goal is not incremental. It is the creation of an entirely new resource category.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import { EmailCapture } from "@/components/EmailCapture";
import { FounderModal } from "@/components/FounderModal";

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex flex-col justify-center px-6 py-24 sm:px-8 lg:px-12">
        <div className="absolute inset-0">
          <Image
            src="/Picture1.jpg"
            alt=""
            fill
            className="object-cover object-left"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, rgba(5,5,5,0.5) 0%, rgba(5,5,5,0.75) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Advanced Materials
            <br />
            Science & Technology
            <br />
            Platform
          </h1>
          <p className="mt-8 max-w-2xl text-xl text-white/90 sm:text-2xl">
            We are pioneering constructive thermochemistry, a new frontier in materials science.
          </p>
        </div>
      </section>

      {/* Stats banner */}
      <section className="border-y border-white/10 bg-black px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-2xl font-semibold text-white sm:text-3xl">
            The next great natural resource isn&apos;t underground.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
            <div className="text-center sm:text-left">
              <div className="text-5xl font-bold text-white lg:text-6xl">100+</div>
              <div className="mt-2 text-base text-zinc-400">foundational patents issued</div>
              <div className="mt-1 text-base text-zinc-500">Protected in 15 of the G20 markets</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white lg:text-6xl">2B+</div>
              <div className="mt-2 text-base text-zinc-400">tons of untapped carbon annually</div>
              <div className="mt-1 text-base text-zinc-500">New carbon fields. Everywhere</div>
            </div>
            <div className="text-center sm:text-right">
              <div className="text-5xl font-bold text-white lg:text-6xl">10+</div>
              <div className="mt-2 text-base text-zinc-400">years of platform engineering</div>
              <div className="mt-1 text-base text-zinc-500">Built to scale. Built to last</div>
            </div>
          </div>
        </div>
      </section>

      {/* Unlocking New Value */}
      <section className="px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          <div className="flex-1 min-w-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Unlocking New Value
            </h2>
            <div className="mt-8 space-y-6 text-xl leading-relaxed text-zinc-300">
              <p>
                Ecogensus is an industrial technology and materials science company developing solutions for the resource economy. Our patented Dynamic Organic Repolymerization (DOR)™ process enables high-value engineered materials to be produced from untapped carbon sources, even municipal solid waste!
              </p>
              <p className="font-semibold text-white">
                Engineered lumber. Polymer powders. High-grade fuel.
                <br />
                Every output is a market.
              </p>
            </div>
            <Link
              href="/library#paper-1"
              className="mt-8 inline-flex items-center gap-2 text-lg text-blue-400 hover:text-blue-300 hover:underline"
            >
              Read the foundational paper: <em>Constructive Thermochemistry: A New Paradigm for Carbonaceous Material Conversion</em>
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="shrink-0 lg:w-[420px]">
            <div className="aspect-video overflow-hidden rounded-lg bg-zinc-900">
              <video
                src="/what-we-do.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rhino Mining Company */}
      <section className="border-t border-white/10 bg-[#0a0a0a] px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          <div className="shrink-0 lg:w-[420px]">
            <div className="aspect-video overflow-hidden rounded-lg bg-zinc-900">
              <video
                src="/Rhino5000.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Rhino Mining Company
            </h2>
            <div className="mt-8">
              <div className="border-l-4 border-blue-500 pl-8">
                <p className="text-xl leading-relaxed text-zinc-300">
                  Rhino Mining Company is how Ecogensus technology reaches the ground. Modular, decentralized, built to scale, like the shale revolution, but for surface carbon. Sustainable, diverse product streams, with public health and emissions benefits built into every ton.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marsh McLennan quote + RhinoGrid announcement */}
      <section className="border-t border-white/10 px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">
          {/* Left: quote */}
          <div className="flex-1 min-w-0">
            <blockquote className="border-l-4 border-blue-500 pl-8">
              <p className="text-xl leading-relaxed text-zinc-300 italic">
                &ldquo;For nearly ten years, we&apos;ve worked with Ecogensus on evolving approaches to resource-technology risk and resilience. We are proud to see the company&apos;s work advancing a new industrial sector with world-class underwriting and structured performance protection, and we look forward to supporting Ecogensus&apos; growth as it scales.&rdquo;
              </p>
              <footer className="mt-6">
                <p className="text-lg font-semibold text-white">John Mannebach</p>
                <p className="mt-1 text-base text-zinc-400">
                  Principal, Marsh McLennan, the world&apos;s largest insurance broker and risk management firm
                </p>
                <p className="mt-2 text-sm text-zinc-500">
                  Marsh McLennan has structured Ecogensus&apos; enterprise risk and performance-coverage programs
                </p>
              </footer>
            </blockquote>
          </div>

          {/* Right: RhinoGrid press release card */}
          <a
            href="https://www.newswire.com/news/ecogensus-unveils-rhinogrid-tm-a-distributed-machine-network-to-22659155"
            target="_blank"
            rel="noopener noreferrer"
            className="group shrink-0 lg:w-[380px]"
          >
            <div className="rounded-lg border border-white/10 bg-[#0a0a0a] p-8 transition-colors group-hover:border-blue-500/40">
              <p className="text-xs font-medium uppercase tracking-wider text-blue-400">
                Press Release
              </p>
              <h3 className="mt-4 text-xl font-bold leading-tight text-white">
                Ecogensus Unveils RhinoGrid™: a Distributed Machine Network to Harvest Surface Carbon and Produce Tradable Premium Commodities
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Backed by Investment Grade (A-Rated) Performance and Long-Term Cash Flow Protection, Driving Replicable Commercial Finance and Community-Scale Deployment
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-blue-400 group-hover:text-blue-300">
                Read more →
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* The Founder */}
      <section className="border-t border-white/10 bg-[#0a0a0a] px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The Founder
          </h2>
          <div className="mt-16 flex flex-col gap-12 sm:flex-row sm:items-start">
            <div className="h-64 w-56 shrink-0 overflow-hidden rounded-lg">
              <Image
                src="/bjornulf-web.jpg"
                alt="Bjørnulf Østvik"
                width={600}
                height={400}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Bjørnulf Østvik, Founder, CEO & Chief Scientist
              </h3>
              <p className="mt-6 text-xl text-zinc-400 leading-relaxed">
                Raised between New England and a small village on the fjords of northern Norway. Former Lockheed Martin advanced technologies lead. Inventor on 100+ issued patents. Built a secret lab, discovered a new material, and spent a decade turning it into an industrial platform.
              </p>
              <FounderModal />
            </div>
          </div>
        </div>
      </section>

      {/* Global Deployment */}
      <section className="border-t border-white/10 px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1 min-w-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Global Deployment
            </h2>
            <div className="mt-8 space-y-6 text-xl leading-relaxed text-zinc-300">
              <p>
                Licensing, joint ventures, and infrastructure-as-a-service (IaaS) worldwide. One platform, many models.
              </p>
              <p className="font-semibold text-white">
                The platform is global. So is the opportunity.
              </p>
            </div>
          </div>
          <div className="shrink-0 lg:w-[360px]">
            <svg viewBox="0 0 200 200" className="h-full w-full text-blue-500/25">
              <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="0.4" />
              <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.3" />
              <ellipse cx="100" cy="100" rx="80" ry="30" fill="none" stroke="currentColor" strokeWidth="0.4" />
              <ellipse cx="100" cy="100" rx="30" ry="80" fill="none" stroke="currentColor" strokeWidth="0.4" />
              <ellipse cx="100" cy="100" rx="55" ry="80" fill="none" stroke="currentColor" strokeWidth="0.3" transform="rotate(20 100 100)" />
              <ellipse cx="100" cy="100" rx="55" ry="80" fill="none" stroke="currentColor" strokeWidth="0.3" transform="rotate(-20 100 100)" />
              <line x1="15" y1="55" x2="185" y2="55" stroke="currentColor" strokeWidth="0.3" />
              <line x1="15" y1="145" x2="185" y2="145" stroke="currentColor" strokeWidth="0.3" />
              <circle cx="100" cy="100" r="4" fill="#3b82f6" opacity="0.9" />
              <circle cx="55" cy="68" r="3" fill="#3b82f6" opacity="0.6" />
              <circle cx="145" cy="72" r="3" fill="#3b82f6" opacity="0.6" />
              <circle cx="125" cy="135" r="3" fill="#3b82f6" opacity="0.6" />
              <circle cx="72" cy="128" r="3" fill="#3b82f6" opacity="0.6" />
              <circle cx="135" cy="98" r="2.5" fill="#3b82f6" opacity="0.5" />
              <circle cx="65" cy="92" r="2.5" fill="#3b82f6" opacity="0.5" />
              <circle cx="110" cy="60" r="2" fill="#3b82f6" opacity="0.4" />
              <circle cx="85" cy="145" r="2" fill="#3b82f6" opacity="0.4" />
            </svg>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-white/10 bg-[#0a0a0a] px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Contact
          </h2>
          <div className="mt-12">
            <a href="mailto:info@ecogensus.com" className="text-xl text-white hover:underline">
              info@ecogensus.com
            </a>
          </div>

          <div className="mt-16">
            <EmailCapture />
          </div>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-sm font-semibold text-white">ECOGENSUS</span>
            <p className="mt-2 text-sm text-zinc-500">
              Advanced Materials Science & Technology Platform
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
            <Link href="/technology" className="text-sm text-zinc-500 hover:text-white">
              Science of Surface Carbon
            </Link>
            <Link href="/rhino-mining" className="text-sm text-zinc-500 hover:text-white">
              Rhino Mining Company
            </Link>
            <Link href="/library" className="text-sm text-zinc-500 hover:text-white">
              Library & Resources
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Ecogensus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

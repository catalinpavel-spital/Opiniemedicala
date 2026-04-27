import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pagină negăsită | Spitale Străinătate",
  description: "Adresa accesată nu există. Revino la pagina principală sau folosește meniul site-ului.",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <div
      className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 text-center"
      style={{ background: "#ffffff" }}
    >
      <p
        className="text-sm font-semibold uppercase tracking-wider mb-3"
        style={{ color: "var(--primary)" }}
      >
        404
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4 text-balance max-w-lg">
        Pagină negăsită
      </h1>
      <p className="text-base text-[#1a1a2e]/70 max-w-md mb-10 leading-relaxed">
        Ne pare rău — linkul pe care l-ai deschis nu există sau a fost mutat. Poți
        reveni la pagina principală pentru a continua.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:opacity-95"
        style={{ background: "var(--primary)" }}
      >
        Mergi la pagina principală
      </Link>
    </div>
  )
}

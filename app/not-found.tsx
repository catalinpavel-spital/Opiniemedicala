import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pagina non trovata | Medical Opinion",
  description: "La pagina che stai cercando non esiste o non è più disponibile.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 py-16 text-center">
        <p className="text-sm font-semibold tracking-widest text-[var(--primary)]">404</p>
        <h1 className="mt-3 text-3xl font-bold md:text-4xl">Pagina non trovata</h1>
        <p className="mt-4 text-balance text-[var(--text)]/70">
          Il link potrebbe essere errato, oppure la pagina è stata spostata. Torna alla home o contattaci se hai
          bisogno di assistenza.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-8 py-3 font-medium text-white transition-colors hover:bg-[var(--primary-dark)]"
          >
            Torna alla home
          </Link>
          <a
            href="mailto:office@medicalopinion.it"
            className="inline-flex items-center justify-center rounded-full border border-[var(--text)]/15 px-8 py-3 font-medium text-[var(--text)] transition-colors hover:bg-black/5"
          >
            scrivi a office@medicalopinion.it
          </a>
        </div>
        <p className="mt-10 text-sm text-[var(--text)]/50">
          Medical Opinion — seconda opinione medica gratuita
        </p>
      </div>
    </main>
  );
}

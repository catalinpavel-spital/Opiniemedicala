import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termeni și Condiții | Opinie Medicală",
  description: "Termenii și condițiile de utilizare a serviciului Opinie Medicală pentru obținerea unei a doua opinii medicale gratuite.",
};

export default function TermeniPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[var(--primary)] hover:underline mb-8"
        >
          ← Înapoi la pagina principală
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-8">
          Termeni și Condiții
        </h1>

        <div className="prose prose-lg max-w-none text-[var(--text)]/80">
          <p className="text-sm text-[var(--text)]/60 mb-8">
            Ultima actualizare: Ianuarie 2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
              1. Descrierea Serviciului
            </h2>
            <p className="mb-4 leading-relaxed">
              Opinie Medicală oferă un serviciu gratuit de a doua opinie medicală prin intermediul parteneriatelor cu spitale de clasă A din Turcia. Serviciul nostru constă în:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Primirea și transmiterea documentelor medicale către spitalele partenere</li>
              <li>Facilitarea evaluării cazului de către echipe medicale specializate</li>
              <li>Comunicarea rezultatelor și recomandărilor către pacient</li>
              <li>Suport și ghidare în limba română pe tot parcursul procesului</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
              2. Caracter Informativ
            </h2>
            <p className="mb-4 leading-relaxed">
              <strong>Important:</strong> A doua opinie medicală oferită prin serviciul nostru are un caracter strict informativ și nu substituie:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Consultația medicală directă cu un medic</li>
              <li>Diagnosticul medical oficial</li>
              <li>Recomandările medicului curant</li>
              <li>Tratamentul medical prescris</li>
            </ul>
            <p className="mt-4 leading-relaxed">
              Opinia primită trebuie considerată ca o informație suplimentară și discutată întotdeauna cu medicul curant înainte de a lua orice decizie medicală.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
              3. Limitarea Răspunderii
            </h2>
            <p className="mb-4 leading-relaxed">
              Opinie Medicală SRL acționează exclusiv ca intermediar între pacienți și spitalele partenere. Prin urmare:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nu ne asumăm responsabilitatea pentru deciziile medicale luate pe baza opiniei primite</li>
              <li>Nu garantăm exactitatea, completitudinea sau aplicabilitatea opiniei medicale</li>
              <li>Nu suntem responsabili pentru consecințele care rezultă din utilizarea informațiilor primite</li>
              <li>Nu ne asumăm răspunderea pentru întârzieri în primirea opiniei medicale</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
              4. Gratuitatea Serviciului
            </h2>
            <p className="leading-relaxed">
              Serviciul de a doua opinie medicală oferit prin Opinie Medicală este complet gratuit. Nu există costuri ascunse și nu vi se va solicita nicio plată pentru obținerea opiniei medicale. Serviciul nu creează nicio obligație din partea pacientului.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
              5. Obligațiile Utilizatorului
            </h2>
            <p className="mb-4 leading-relaxed">
              Prin utilizarea serviciului nostru, utilizatorul se obligă să:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Furnizeze informații corecte și complete despre identitatea și starea de sănătate</li>
              <li>Transmită documente medicale autentice și relevante</li>
              <li>Utilizeze serviciul doar în scopuri legitime, pentru propria persoană sau ca reprezentant legal</li>
              <li>Nu utilizeze serviciul în mod abuziv sau fraudulos</li>
              <li>Respecte confidențialitatea informațiilor primite</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
              6. Drepturi de Proprietate Intelectuală
            </h2>
            <p className="leading-relaxed">
              Toate elementele site-ului www.opiniemedicala.ro (texte, imagini, grafice, logo, design) sunt protejate de drepturile de proprietate intelectuală și aparțin Opinie Medicală SRL sau partenerilor săi. Reproducerea, distribuirea sau utilizarea acestor materiale fără acordul scris prealabil este interzisă.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
              7. Confidențialitatea Datelor
            </h2>
            <p className="leading-relaxed">
              Prelucrarea datelor personale și a documentelor medicale se face în conformitate cu Politica de Confidențialitate și cu Regulamentul GDPR. Pentru detalii, vă rugăm să consultați{" "}
              <Link href="/gdpr" className="text-[var(--primary)] hover:underline">
                Politica de Confidențialitate
              </Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
              8. Modificarea Termenilor
            </h2>
            <p className="leading-relaxed">
              Opinie Medicală SRL își rezervă dreptul de a modifica acești Termeni și Condiții în orice moment. Modificările vor fi publicate pe această pagină și vor intra în vigoare imediat. Continuarea utilizării serviciului după publicarea modificărilor constituie acceptarea noilor termeni.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
              9. Legea Aplicabilă și Jurisdicția
            </h2>
            <p className="leading-relaxed">
              Acești Termeni și Condiții sunt guvernați de legislația română. Orice litigiu care decurge din utilizarea serviciului va fi soluționat de instanțele competente din România.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
              10. Contact
            </h2>
            <p className="leading-relaxed">
              Pentru orice întrebări sau clarificări privind acești Termeni și Condiții, ne puteți contacta la:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p><strong>Email:</strong> office@opiniemedicala.ro</p>
              <p><strong>Telefon:</strong> +40 738 272 835</p>
              <p><strong>WhatsApp:</strong> +40 738 272 835</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

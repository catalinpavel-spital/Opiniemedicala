import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Cookies | Opinie Medicală",
  description: "Informații despre cookie-urile utilizate pe site-ul Opinie Medicală și modul în care acestea îmbunătățesc experiența utilizatorului.",
};

export default function CookiesPage() {
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
          Politica de Cookies
        </h1>

        <div className="prose prose-lg max-w-none text-[var(--text)]/80">
          <p className="text-sm text-[var(--text)]/60 mb-8">
            Ultima actualizare: Ianuarie 2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
              1. Ce sunt cookie-urile?
            </h2>
            <p className="leading-relaxed">
              Cookie-urile sunt fișiere text de mici dimensiuni care sunt stocate pe dispozitivul dumneavoastră (computer, telefon, tabletă) atunci când vizitați un site web. Acestea permit site-ului să vă recunoască dispozitivul și să rețină anumite informații despre vizita dumneavoastră.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
              2. Tipuri de Cookie-uri Utilizate
            </h2>
            <p className="mb-6 leading-relaxed">
              Site-ul nostru utilizează următoarele categorii de cookie-uri:
            </p>

            <h3 className="text-lg font-medium text-[var(--text)] mb-3">
              2.1 Cookie-uri Necesare
            </h3>
            <p className="mb-4 leading-relaxed">
              Aceste cookie-uri sunt esențiale pentru funcționarea corectă a site-ului și nu pot fi dezactivate.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-[var(--text)]">Nume Cookie</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-[var(--text)]">Scop</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-[var(--text)]">Durată</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">cookie-consent</td>
                    <td className="border border-gray-200 px-4 py-3">Stochează preferința privind cookie-urile</td>
                    <td className="border border-gray-200 px-4 py-3">1 an</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">session_id</td>
                    <td className="border border-gray-200 px-4 py-3">Identifică sesiunea de navigare</td>
                    <td className="border border-gray-200 px-4 py-3">Sesiune</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-medium text-[var(--text)] mb-3">
              2.2 Cookie-uri de Analiză
            </h3>
            <p className="mb-4 leading-relaxed">
              Acestea ne ajută să înțelegem cum este utilizat site-ul și să îmbunătățim experiența utilizatorilor.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-[var(--text)]">Nume Cookie</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-[var(--text)]">Scop</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-[var(--text)]">Durată</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">_ga</td>
                    <td className="border border-gray-200 px-4 py-3">Google Analytics - Distinge utilizatorii unici</td>
                    <td className="border border-gray-200 px-4 py-3">2 ani</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">_ga_*</td>
                    <td className="border border-gray-200 px-4 py-3">Google Analytics - Stochează starea sesiunii</td>
                    <td className="border border-gray-200 px-4 py-3">2 ani</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">_gid</td>
                    <td className="border border-gray-200 px-4 py-3">Google Analytics - Distinge utilizatorii</td>
                    <td className="border border-gray-200 px-4 py-3">24 ore</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-medium text-[var(--text)] mb-3">
              2.3 Cookie-uri Funcționale
            </h3>
            <p className="mb-4 leading-relaxed">
              Acestea permit funcționalități îmbunătățite și personalizare.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-[var(--text)]">Nume Cookie</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-[var(--text)]">Scop</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-[var(--text)]">Durată</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">locale</td>
                    <td className="border border-gray-200 px-4 py-3">Salvează preferința de limbă</td>
                    <td className="border border-gray-200 px-4 py-3">1 an</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">form_data</td>
                    <td className="border border-gray-200 px-4 py-3">Salvează temporar datele formularului</td>
                    <td className="border border-gray-200 px-4 py-3">Sesiune</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
              3. Cum să Gestionați Cookie-urile
            </h2>
            <p className="mb-4 leading-relaxed">
              Puteți controla și șterge cookie-urile în orice moment prin:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Setările browserului dumneavoastră - majoritatea browserelor vă permit să refuzați sau să ștergeți cookie-urile</li>
              <li>Banner-ul de cookie-uri de pe site-ul nostru - puteți alege să acceptați doar cookie-urile necesare</li>
            </ul>
            <p className="mt-4 leading-relaxed">
              <strong>Atenție:</strong> Dezactivarea cookie-urilor necesare poate afecta funcționalitatea site-ului.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
              4. Cookie-uri Terță Parte
            </h2>
            <p className="leading-relaxed">
              Site-ul nostru poate conține link-uri către alte site-uri web sau poate integra servicii terțe (cum ar fi Google Analytics). Aceste servicii terțe pot seta propriile cookie-uri, iar noi nu avem control asupra acestora. Vă recomandăm să consultați politicile de confidențialitate ale acestor servicii.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
              5. Actualizări ale Politicii
            </h2>
            <p className="leading-relaxed">
              Această politică de cookies poate fi actualizată periodic. Orice modificări vor fi publicate pe această pagină, iar data ultimei actualizări va fi modificată corespunzător.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
              6. Contact
            </h2>
            <p className="leading-relaxed">
              Pentru întrebări despre utilizarea cookie-urilor pe site-ul nostru, ne puteți contacta la:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p><strong>Email:</strong> office@opiniemedicala.ro</p>
              <p><strong>Telefon:</strong> +40 738 272 835</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

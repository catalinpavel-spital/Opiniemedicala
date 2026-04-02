import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Confidențialitate GDPR | Opinie Medicală",
  description: "Politica de confidențialitate și protecția datelor personale conform GDPR pentru serviciul Opinie Medicală.",
};

export default function GDPRPage() {
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
          Politica de Confidențialitate GDPR
        </h1>

        <div className="prose prose-lg max-w-none text-[var(--text)]/80">
          <p className="text-sm text-[var(--text)]/60 mb-8">
            Ultima actualizare: Ianuarie 2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
              1. Operatorul de Date
            </h2>
            <p className="mb-4 leading-relaxed">
              <strong>Opinie Medicală SRL</strong> este operatorul de date personale colectate prin intermediul site-ului www.opiniemedicala.ro și al serviciilor conexe.
            </p>
            <p className="leading-relaxed">
              Ne angajăm să protejăm confidențialitatea și securitatea datelor dumneavoastră personale în conformitate cu Regulamentul General privind Protecția Datelor (GDPR) - Regulamentul (UE) 2016/679.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
              2. Datele Colectate
            </h2>
            <p className="mb-4 leading-relaxed">
              În cadrul furnizării serviciilor noastre, colectăm următoarele categorii de date personale:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Date de identificare:</strong> nume, prenume</li>
              <li><strong>Date de contact:</strong> adresă de email, număr de telefon</li>
              <li><strong>Date medicale:</strong> documente medicale, rezultate analize, istoric medical, diagnostic curent, simptome</li>
              <li><strong>Date tehnice:</strong> adresă IP, tip browser, date de navigare (prin cookies)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
              3. Scopul Prelucrării Datelor
            </h2>
            <p className="mb-4 leading-relaxed">
              Datele dumneavoastră personale sunt prelucrate în următoarele scopuri:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Furnizarea serviciului de a doua opinie medicală gratuită</li>
              <li>Transmiterea documentelor medicale către spitalele partenere din Turcia pentru evaluare</li>
              <li>Comunicarea cu dumneavoastră privind rezultatele evaluării și recomandările medicale</li>
              <li>Răspunsul la întrebările și solicitările dumneavoastră</li>
              <li>Îmbunătățirea serviciilor noastre</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
              4. Temeiul Legal al Prelucrării
            </h2>
            <p className="mb-4 leading-relaxed">
              Prelucrăm datele dumneavoastră pe baza următoarelor temeiuri legale:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consimțământul explicit:</strong> pentru prelucrarea datelor medicale și contactarea prin telefon/WhatsApp</li>
              <li><strong>Executarea contractului:</strong> pentru furnizarea serviciului solicitat</li>
              <li><strong>Interesul legitim:</strong> pentru îmbunătățirea serviciilor și comunicări administrative</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
              5. Perioada de Retenție
            </h2>
            <p className="leading-relaxed">
              Datele dumneavoastră personale și documentele medicale vor fi păstrate pentru o perioadă de <strong>2 ani</strong> de la ultima interacțiune cu serviciul nostru. După această perioadă, datele vor fi șterse în mod securizat, cu excepția cazurilor în care legislația aplicabilă impune o perioadă de păstrare mai lungă.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
              6. Drepturile Dumneavoastră
            </h2>
            <p className="mb-4 leading-relaxed">
              În conformitate cu GDPR, aveți următoarele drepturi:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Dreptul de acces:</strong> puteți solicita o copie a datelor personale pe care le deținem despre dumneavoastră</li>
              <li><strong>Dreptul la rectificare:</strong> puteți solicita corectarea datelor incorecte sau incomplete</li>
              <li><strong>Dreptul la ștergere:</strong> puteți solicita ștergerea datelor dumneavoastră personale</li>
              <li><strong>Dreptul la restricționarea prelucrării:</strong> puteți solicita limitarea modului în care folosim datele dumneavoastră</li>
              <li><strong>Dreptul la portabilitatea datelor:</strong> puteți solicita transferul datelor către un alt operator</li>
              <li><strong>Dreptul de opoziție:</strong> puteți obiecta la prelucrarea datelor în anumite circumstanțe</li>
              <li><strong>Dreptul de a retrage consimțământul:</strong> puteți retrage consimțământul în orice moment</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
              7. Transferul Datelor
            </h2>
            <p className="leading-relaxed">
              Documentele dumneavoastră medicale pot fi transferate către spitalele partenere din Turcia în scopul obținerii unei a doua opinii medicale. Acest transfer se realizează cu consimțământul dumneavoastră explicit și cu respectarea măsurilor de securitate adecvate.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
              8. Securitatea Datelor
            </h2>
            <p className="leading-relaxed">
              Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele dumneavoastră împotriva accesului neautorizat, pierderii sau distrugerii. Acestea includ criptarea datelor, controlul accesului și monitorizarea continuă a sistemelor.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
              9. Contact DPO
            </h2>
            <p className="leading-relaxed">
              Pentru orice întrebări sau solicitări legate de protecția datelor personale, ne puteți contacta la:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p><strong>Email:</strong> office@opiniemedicala.ro</p>
              <p><strong>Telefon:</strong> +40 738 272 835</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
              10. Plângeri
            </h2>
            <p className="leading-relaxed">
              Dacă considerați că drepturile dumneavoastră au fost încălcate, aveți dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP) - www.dataprotection.ro.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

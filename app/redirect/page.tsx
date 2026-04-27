import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Reindirizzamento | Medical Opinion",
  description:
    "Endpoint di reindirizzamento interno sicuro (solo percorsi relativi che iniziano con /).",
  robots: { index: false, follow: false },
}

function getFirstString(
  v: string | string[] | undefined
): string | undefined {
  if (v === undefined) return undefined
  return Array.isArray(v) ? v[0] : v
}

/**
 * Reindirizzamento interno sicuro. Esempio: /redirect?to=/termeni-si-conditii
 * Rifiuta valori non sicuri (evita open-redirect).
 */
function safeInternalPath(to: string | undefined): string {
  if (!to) return "/"
  const t = to.trim()
  if (!t.startsWith("/") || t.startsWith("//")) return "/"
  if (/^[a-zA-Z][a-zA-Z+.-]*:/.test(t)) return "/"
  return t
}

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export default async function RedirectPage({ searchParams }: PageProps) {
  const sp = await searchParams
  const to = getFirstString(sp.to)
  const path = safeInternalPath(to)
  redirect(path)
}

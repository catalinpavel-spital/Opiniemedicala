import { NextResponse, type NextRequest } from "next/server";

const DEFAULT_TEXT =
  "Buongiorno! Vorrei richiedere una seconda opinione medica (Medical Opinion).";

// Small allowlist to avoid an open-redirect security hole. Extend as needed.
const REDIRECTS: Record<string, string> = {
  home: "/",
  whatsapp: `https://wa.me/40738272835?text=${encodeURIComponent(DEFAULT_TEXT)}`,
  email: "mailto:office@medicalopinion.it",
};

/**
 * /redirect?dest=...
 *
 * Example:
 * - /redirect?dest=whatsapp
 * - /redirect?dest=email
 * - /redirect?dest=home
 */
export function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const dest = (searchParams.get("dest") ?? "whatsapp").toLowerCase();

  const target = REDIRECTS[dest] ?? REDIRECTS.whatsapp;
  return NextResponse.redirect(target, 307);
}

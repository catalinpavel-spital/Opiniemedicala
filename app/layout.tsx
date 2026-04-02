import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({
  subsets: ["latin"],
  variable: '--font-geist'
});

export const metadata: Metadata = {
  title: 'Spitale Străinătate - A doua opinie medicală gratuită | Turcia',
  description:
    'Obține gratuit o a doua opinie medicală de la specialiști cu experiență din spitale de top din Turcia. Rapid, confidențial, fără obligații. Contact pe WhatsApp.',
  keywords:
    'a doua opinie medicală, opinie medicală, second opinion, diagnostic, confirmare diagnostic, spitale Turcia, consultație online',
  openGraph: {
    title: 'Spitale Străinătate - A doua opinie medicală gratuită | Turcia',
    description:
      'Obține gratuit o a doua opinie medicală de la specialiști cu experiență din spitale de top din Turcia. Rapid, confidențial, fără obligații.',
    url: 'https://www.opiniemedicala.ro',
    siteName: 'Spitale Străinătate',
    locale: 'ro_RO',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.opiniemedicala.ro',
  },
  icons: {
    icon: [{ url: '/logo_png_negru.png', type: 'image/png' }],
    apple: [{ url: '/logo_png_negru.png', type: 'image/png' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro" className={geist.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Opinie Medicală",
              "url": "https://www.opiniemedicala.ro",
              "telephone": "+40738272835",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "RO"
              },
              "description": "Serviciu de a doua opinie medicală gratuită, în parteneriat cu spitale de top din Turcia."
            })
          }}
        />
      </head>
      <body className="font-sans antialiased" style={{ background: "#ffffff", margin: 0, padding: 0 }}>
        <main style={{ background: "#ffffff", minHeight: "100vh" }}>
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}

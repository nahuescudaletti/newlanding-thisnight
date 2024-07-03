import './globals.css'
import type { Metadata } from 'next'
import { Montserrat} from 'next/font/google'

const popinsFont = Montserrat({ weight: ['400', '600', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'This Night',
  description: 'Software de gestión para eventos y discotecas',
  keywords:'boliche, eventos, discotecas, gestión, ticketera, ticket, ticketadora, tarjetas, festival, software, control, boliches, party, productoras'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={popinsFont.className}>{children}</body>
    </html>
  )
}

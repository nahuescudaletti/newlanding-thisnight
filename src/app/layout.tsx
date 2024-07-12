"use client"; // Asegúrate de agregar esto en la primera línea

import SplashScreen from '@/components/SplashScreen/SplashScreen';
import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { useEffect, useState } from 'react';

const montserratFont = Montserrat({ weight: ['400', '600', '700'], subsets: ['latin'] });

const metadata: Metadata = {
  title: 'This Night',
  description: 'Software de gestión para eventos y discotecas',
  keywords: 'boliche, eventos, discotecas, gestión, ticketera, ticket, tickets, ticketadora, tarjetas, festival, software, control, boliches, party, productoras',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <html lang="es">
      <body className={montserratFont.className}>
        {isLoading ? <SplashScreen /> : children}
      </body>
    </html>
  );
}

import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';
import { Analytics } from '@vercel/analytics/next';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'UNO Digital Teknologi — Enterprise Technology Solutions',
  description:
    'PT. Uno Digital Teknologi delivers cloud infrastructure, AI/ML, enterprise integration, and cybersecurity solutions for Indonesian businesses.',
  keywords: 'cloud, AI, enterprise, digital transformation, Indonesia, Jakarta',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'UNO Digital Teknologi',
    description: 'Transforming Business Through Digital Innovation',
    url: 'https://uno-digitek.com',
    siteName: 'UNO Digital Teknologi',
    locale: 'en_ID',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}

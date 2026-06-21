import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'HKK AI Solutions | Harari Kogus Kalik',
  description: 'Investor-facing website for HKK AI Solutions by Harari, Kogus, and Kalik, building autonomous AI agents, SaaS platforms, education, and simulation technologies.',
  metadataBase: new URL('https://hkk-ai-solutions.ran-harari.com'),
  openGraph: {
    title: 'HKK AI Solutions',
    description: 'Building the future of autonomous AI solutions.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}

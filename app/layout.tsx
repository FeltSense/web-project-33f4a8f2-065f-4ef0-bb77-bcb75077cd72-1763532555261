import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RetailHub - Discover Trending Products & Share Ratings',
  description: 'Join thousands of shoppers discovering the best products, sharing ratings, and finding what\'s hot in retail right now.',
  keywords: 'retail, shopping, trending products, ratings, reviews, social shopping',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CartProvider } from './components/checkout/CartContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crownlinks',
  description: 'Crownlinks Academy',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}

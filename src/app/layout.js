import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-472H0PMXB4"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());
        gtag('config', 'G-472H0PMXB4');
      </script>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

import './globals.css'

export const metadata = {
  title: 'Sn3a | صَنْعَة — سوق المنتجات اليدوية',
  description: 'سوق للحرف اليدوية مع دفع آمن (Escrow) وشحن موثوق',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  )
}

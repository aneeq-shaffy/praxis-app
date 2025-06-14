import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PRAXIS - Mentorship Platform',
  description: 'Connect students with company mentors for real work experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-marble-white">{children}</body>
    </html>
  )
}
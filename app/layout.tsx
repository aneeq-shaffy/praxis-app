import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'ΠΡΑΞΙΣ - Modern Mentorship Platform',
  description: 'Connect students with industry mentors for transformative real-world experience',
  keywords: 'mentorship, students, companies, projects, learning, career development',
  authors: [{ name: 'ΠΡΑΞΙΣ Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white text-black antialiased">
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'rgba(255, 255, 255, 0.95)',
              color: '#000000',
              border: '1px solid rgba(192, 192, 192, 0.3)',
              borderRadius: '8px',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
            },
            success: {
              iconTheme: {
                primary: '#000000',
                secondary: '#FFFFFF',
              },
            },
            error: {
              iconTheme: {
                primary: '#DC2626',
                secondary: '#FFFFFF',
              },
            },
          }}
        />
      </body>
    </html>
  )
}
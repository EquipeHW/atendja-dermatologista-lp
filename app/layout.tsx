import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'


export const metadata: Metadata = {
  title: 'AtendJa - Dermatologista em Feira de Santana',
  description: 'Agende sua consulta com dermatologista em Feira de Santana. Atendimento especializado em saúde da pele, cabelos e unhas.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen bg-background antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
         
            <main className="flex-1">{children}</main>
            
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

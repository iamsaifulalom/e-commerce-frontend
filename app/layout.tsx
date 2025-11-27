import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { Toaster } from '@/components/ui/sonner'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
                <Toaster richColors position='top-right'/>
            </body>
        </html>
    )
}

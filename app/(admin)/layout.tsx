import { ReactNode } from 'react'
import "@/app/globals.css"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        {/* top */}
        {/* wellcome message with shr desc */}
        {/* left search icon notification profile pic */}
        <aside>
          {/* logog */}
          {/* meanus */}
          {/* logout */}
        </aside>
        {children}
      </body>
    </html>
  )
}

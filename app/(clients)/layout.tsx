import { ReactNode } from 'react'
import "@/app/globals.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      {children}
    </main>
  )
}

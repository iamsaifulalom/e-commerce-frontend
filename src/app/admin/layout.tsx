import React from 'react'

export default function AdminLayout({children}: {children: React.ReactNode}) {
  return (
    <main>
        <p>Header</p>
        {children}
    </main>
  )
}

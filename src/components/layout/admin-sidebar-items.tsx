"use client";

import { admin } from '@/constants/admin-sidebar-items'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function AdminSidebarHeader() {
  return (
    <div className='p-4 sticky h-16 top-0 left-0 bg-muted border-b'>
      this is reader
    </div>
  )
}

export function AdminSidebarItems() {
  const pathname = usePathname();

  return (
    <div className='px-6 py-2'>

      {/* items groups */}
      {admin.menus.map((menu, idx) => (
        <div key={idx} >
          {menu.sectionTitle && (
            <div className='font-semibold mb-2'>
              {menu.sectionTitle}
            </div>
          )}
          <div className='flex flex-col  gap-1'>
            {/* navigation items (link) */}
            {menu.options.map((option) => (
              <Link href={option.path} key={option.path} className={cn(
                'flex items-center gap-2 py-3 hover:bg-accent transition-all rounded-md px-6 cursor-pointer',
                pathname === option.path ? 'bg-foreground text-background hover:text-background hover:bg-foreground font-medium' : ''
              )}>
                <option.Icon className='w-4 h-4' />
                <span>{option.name}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

"use client";

import { admin } from '@/constants/admin-sidebar-items'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '../ui/button';
import { useSidebar } from './sidebar';

export function AdminSidebarHeader() {
  return (
    <div className='p-4 sticky h-16 top-0 left-0 bg-muted border-b'>
      this is reader
    </div>
  )
}

export function AdminSidebarItems() {
  const pathname = usePathname();
  const { push } = useRouter();
  const { toggleSidebar } = useSidebar()

  const handleRouteClick = (path: string) => {
    push(path);
    toggleSidebar();
  }

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
              <Button onClick={() => handleRouteClick(option.path)} key={option.path}
                variant={pathname === option.path ? "default" : "ghost"}
                size="lg"
                className="flex w-full justify-start">
                <option.Icon className='w-4 h-4' />
                <span>{option.name}</span>
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

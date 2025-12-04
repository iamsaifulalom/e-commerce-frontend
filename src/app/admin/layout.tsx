import AdminHeader from '@/components/layout/admin-header'
import { 
    AdminSidebarHeader,
    AdminSidebarItems 

} from '@/components/layout/admin-sidebar-items'
import { Sidebar, SidebarInset, SidebarProvider } from '@/components/layout/sidebar'
import React from 'react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <Sidebar>
                <AdminSidebarHeader/>
                <AdminSidebarItems />
            </Sidebar>
            <SidebarInset>
                <AdminHeader/>
                <div className='p-4'>{children}</div>
            </SidebarInset>
        </SidebarProvider>
    )
}

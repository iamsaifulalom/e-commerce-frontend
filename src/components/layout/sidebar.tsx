"use client";

import { cn } from '@/lib/utils';
import React from 'react';

type SidebarContextType = {
    isSidebarOpen: boolean,
    toggleSidebar: () => void

}

const SidebarContext = React.createContext<SidebarContextType | null>(null);

export const useSidebar = () => {
    const context = React.useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
}

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {

    const [isSidebarOpen, setisSidebarOpen] = React.useState(false);
    const toggleSidebar = () => setisSidebarOpen(p => !p)

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
            <main className='flex w-full h-screen overflow-hidden'>
                {children}
            </main>
        </SidebarContext.Provider>
    )
}


export const Sidebar = ({ children, className }: { children?: React.ReactNode, className?: string }) => {
    const { isSidebarOpen, toggleSidebar } = useSidebar();

    return (
        <>
            <div onClick={toggleSidebar}
                className={cn(
                    "fixed inset-0 bg-background/20 backdrop-blur-sm z-40 transition-opacity duration-300 xl:hidden",
                    isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            />
            <aside className={cn(
                "bg-muted fixed w-[250px] z-50 flex flex-col h-screen border-r overflow-hidden transition-all duration-300",
                isSidebarOpen ? "translate-x-0" : "-translate-x-full xl:translate-x-0",
                className
            )}>
                {children}
            </aside>
        </>

    )
}

export const SidebarInset = ({ children }: { children?: React.ReactNode }) => {

    return (
        <aside className={cn(
            "flex-1 overflow-y-auto",
            "flex-1 xl:pl-[250px] flex flex-col h-full",
            "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
        )}>
            {children}
        </aside>
    )
}
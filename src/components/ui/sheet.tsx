"use client";

import { cn } from '@/lib/utils';
import React from 'react';


const SheetContext = React.createContext<{
    isSheetOpen: boolean,
    toggleSheet: () => void
} | null>(null);

export const useSheet = () => {
    const context = React.useContext(SheetContext);
    if (!context) {
        throw new Error("useSheet must be used within a SheetProvider");
    }
    return context;
}

export const SheetProvider = ({ children }: { children: React.ReactNode }) => {

    const [isSheetOpen, setIsSheetOpen] = React.useState(true);
    const toggleSheet = () => setIsSheetOpen(p => !p);

    return (
        <SheetContext.Provider value={{ isSheetOpen, toggleSheet }}>
            {children}
        </SheetContext.Provider>
    )
}   


export const Sheet = ({ children, className }: { children?: React.ReactNode, className?: string }) => {
    const { isSheetOpen, toggleSheet } = useSheet();

    return (
        <>
            <div onClick={toggleSheet}
                className={cn(
                    "fixed inset-0 bg-background/20 backdrop-blur-sm min-h-screen z-40 transition-opacity duration-300",
                    isSheetOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            />
            <aside className={cn(
                "bg-muted fixed right-0 w-[300px] z-50 top-0 flex flex-col h-screen border-l overflow-y-auto transition-all duration-300",
                isSheetOpen ? "translate-x-0" : "translate-x-full",
                className
            )}>
                {children}
            </aside>
        </>

    )
}
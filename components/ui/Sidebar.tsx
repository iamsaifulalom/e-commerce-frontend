import React, { createContext, useContext, useState } from "react";
import { cn } from "@/lib/utils";

interface SidebarContextProps {
  open: boolean;
  setOpen: (val: boolean) => void;
}

const SidebarContext = createContext<SidebarContextProps | null>(null);

// Root
export function Sidebar({ children, isOpen = false }: { children: React.ReactNode, isOpen?: boolean }) {
  const [open, setOpen] = useState(isOpen);

  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

// Trigger
export function SidebarTrigger({ children }: { children: React.ReactNode }) {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("SidebarTrigger must be used inside Sidebar");

  return (
    <div onClick={() => ctx.setOpen(true)} className="cursor-pointer">
      {children}
    </div>
  );
}

// Trigger
export function SidebarClose({ children, className }: { children: React.ReactNode, className?: string }) {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("SidebarTrigger must be used inside Sidebar");

  return (
    <div onClick={() => ctx.setOpen(false)} className={cn(
      "cursor-pointer",
      className
    )}
    >
      {children}
    </div>
  );
}

// Overlay
export function SidebarOverlay() {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("SidebarOverlay must be used inside Sidebar");

  return (
    <div
      onClick={() => ctx.setOpen(false)}
      className={cn(
        "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300",
        ctx.open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
    />
  );
}

// Header
export function SidebarHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-4 px-4 border-b bg-background sticky top-0 z-50">
      {children}
    </div>
  );
}

// Footer
export function SidebarFooter({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn(
      "py-4 border-t bg-background sticky bottom-0 z-50",
      className
    )}
    >
      {children}
    </div>
  );
}

// Scroll Body
export function SidebarBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 overflow-y-auto px-4">
      {children}
    </div>
  );
}

// Content
interface SidebarContentProps {
  children: React.ReactNode;
  width?: string;
  className?: string;
}

export function SidebarContent({
  children,
  width = "260px",
  className
}: SidebarContentProps) {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("SidebarContent must be used inside Sidebar");

  return (
    <aside
      className={cn(
        "bg-background fixed text-wrap top-0 right-0 z-50 flex flex-col h-screen border-l overflow-hidden transition-transform duration-300",
        ctx.open ? "translate-x-0" : "translate-x-full",
        className
      )}
      style={{ width }}
    >
      {/* Now header, body, footer work perfectly */}
      {children}
    </aside>
  );
}

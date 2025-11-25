import { ReactNode } from "react";
import "@/app/globals.css";
import AdminSidebar from "@/components/pages/admin/layouts/SideBar";
import AdminHeader from "@/components/pages/admin/layouts/Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    
        <main className="flex h-screen overflow-hidden">

          {/* Sidebar */}
          <AdminSidebar />
          {/* Main content */}
          <div className="flex-1 xl:pl-[260px] flex flex-col h-full p-4 overflow-hidden">
            <AdminHeader />
            <div className="flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {children}
            </div>
          </div>
        </main>
  );
}

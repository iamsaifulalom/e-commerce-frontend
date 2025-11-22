import { ReactNode } from "react";
import "@/app/globals.css";
import AdminSidebar from "@/components/features/admin/components/AdminSidebar";
import AdminHeader from "@/components/features/admin/components/AdminHeader";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html className="">
      <body>
        <main className="flex h-screen overflow-hidden">

          {/* Sidebar */}
          <AdminSidebar />
          {/* Main content */}
          <div className="flex-1 flex flex-col h-full p-4 overflow-hidden">
            <AdminHeader />
            <div className="flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

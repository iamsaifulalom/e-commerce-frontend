"use client";

import { TextAlignStart } from "lucide-react";
import { useSidebar } from "./sidebar"

export default function AdminHeader() {
    const { toggleSidebar } = useSidebar();
    return (
        <div className='w-full h-16 p-6 flex justify-between items-center sticky top-0 left-0 bg-muted'>
            <TextAlignStart onClick={toggleSidebar} className="cursor-pointer xl:hidden"/>
            Admin Header
        </div>
    )
}
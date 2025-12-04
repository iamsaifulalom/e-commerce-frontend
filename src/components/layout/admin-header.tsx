"use client";

import { LogOut, TextAlignStart } from "lucide-react";
import { useSidebar } from "./sidebar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "../ui/dropdown-menu";
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "../ui/avatar";
import { NavUser } from "../ui/NavUser";
import { ModeToggle } from "../ui/mode-toogle";

export default function AdminHeader() {
    const { toggleSidebar } = useSidebar();
    return (
        <div className='w-full h-16 p-6 flex justify-between items-center sticky top-0 left-0 bg-muted'>

            {/* side bar toogle icon */}
            <TextAlignStart onClick={toggleSidebar} className="cursor-pointer xl:hidden" />
            app logi

            <div className="flex gap-3 items-center">
                <ModeToggle />
                <DropdownMenu >
                    <DropdownMenuTrigger>
                        <Avatar className="outline-none">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-52 mr-4">
                        <DropdownMenuItem>
                            <NavUser email="test@gmail.com" name="Saiful alom" avatar="https://github.com/shadcn.png" />
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem variant="destructive">
                          <LogOut/>  Sign out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}
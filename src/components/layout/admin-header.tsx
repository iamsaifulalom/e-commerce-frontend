"use client";

import { TextAlignStart } from "lucide-react";
import { useSidebar } from "./sidebar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "../ui/dropdown-menu";
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "../ui/avatar";
import { NavUser } from "../ui/NavUser";

export default function AdminHeader() {
    const { toggleSidebar } = useSidebar();
    return (
        <div className='w-full h-16 p-6 flex justify-between items-center sticky top-0 left-0 bg-muted'>
            <TextAlignStart onClick={toggleSidebar} className="cursor-pointer xl:hidden" />
            Admin Header

            <DropdownMenu >
                <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-52 mr-4">
                    <DropdownMenuItem>
                        <NavUser email="test@gmail.com" name="Saiful alom" avatar="https://github.com/shadcn.png" />
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem variant="destructive">Sign out</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
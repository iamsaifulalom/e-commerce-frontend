"use client";

import AppLogo from "@/components/ui/AppLogo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BellIcon, ChevronDown, MenuIcon, SearchIcon } from "lucide-react";

export default function AdminHeader() {
  return (
    <header className="w-full flex items-center justify-between py-4 mb-2">
      
      {/* LEFT: Greeting */}
      <div className="hidden lg:block">
        <h1 className="text-2xl font-bold">Welcome back, Zak!</h1>
        <p className="text-sm text-muted-foreground">
          Here&apos;s what&apos;s happening with your store!
        </p>
      </div>

      {/* MOBILE: Hamburger & Logo */}
      <div className="flex items-center gap-4 lg:hidden">
        <MenuIcon className="w-6 h-6" />
        <AppLogo />
      </div>

      {/* RIGHT: Notifications, Search, Profile Dropdown */}
      <div className="flex items-center gap-3">
        <BellIcon className="w-8 h-8 border rounded-full p-1.5 cursor-pointer" />
        <SearchIcon className="w-8 h-8 border rounded-full p-1.5 cursor-pointer" />

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-3 focus:outline-none">
            <Avatar>
              <AvatarFallback>SA</AvatarFallback>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>

            <div className="hidden md:flex items-center gap-1 text-lg font-semibold">
              Saiful Alom <ChevronDown className="mt-0.5" />
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-40" align="start">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Dark Mode</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

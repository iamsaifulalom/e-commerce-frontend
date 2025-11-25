"use client";

import AppLogo from "@/components/ui/AppLogo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { BellIcon, ChevronDown, MenuIcon } from "lucide-react";
import { useSideBarToggle } from "../hooks/useSidebarToggle";

export default function AdminHeader() {
  const { toggle } = useSideBarToggle();

  return (
    <header className="w-full z-50 bg-background flex items-center justify-between py-4 mb-2">

      {/* LEFT: Greeting */}
      <div className="hidden xl:block">
        <h1 className="text-2xl font-bold">Welcome back, Zak!</h1>
        <p className="text-sm text-muted-foreground">
          Here&apos;s what&apos;s happening with your store!
        </p>
      </div>

      {/* MOBILE: Hamburger & Logo */}
      <div className="flex items-center gap-4 xl:hidden">
        <MenuIcon onClick={toggle} className="w-6 z-50 h-6 cursor-pointer" />
        <AppLogo />
      </div>

      {/* RIGHT: Notifications, Search, Profile Dropdown */}
      <div className="flex items-center gap-3">
        <Button className="rounded-full" variant="outline" size="icon">
          <BellIcon />
        </Button>
        <ThemeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-3 focus:outline-none">
            <Avatar>
              <AvatarFallback>SA</AvatarFallback>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>

            <div className="hidden md:flex items-center gap-1 text-sm font-semibold">
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

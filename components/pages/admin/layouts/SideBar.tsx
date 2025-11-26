"use client";

import AppLogo from "@/components/ui/AppLogo";
import { Button } from "@/components/ui/button";
import { adminMenu } from "@/constants/admin-menu";
import { cn } from "@/lib/utils";
import { LogInIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ComponentType, SVGProps } from "react";
import { useSideBarToggle } from "../hooks/useSidebarToggle";

type AdminSidebarProps = {
  className?: string;
};

// -------------------- Menu Item --------------------
type MenuItemProps = {
  name: string;
  path: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>; // fixed type
  active: boolean;
};

const SidebarMenuItem: FC<MenuItemProps> = ({ name, path, Icon, active }) => {
  const { toggle } = useSideBarToggle()

  return (
    <Link href={path}>
      <Button
        onClick={toggle}
        variant={active ? "default" : "ghost"}
        className="flex gap-2 py-6 w-full justify-start"
      >
        <Icon /> {name}
      </Button>
    </Link>
  )
};

// -------------------- Section --------------------
type SidebarSectionProps = {
  sectionTitle: string;
  options: { name: string; path: string; Icon: ComponentType<SVGProps<SVGSVGElement>> }[];
  pathname: string;
};

const SidebarSection: FC<SidebarSectionProps> = ({ sectionTitle, options, pathname }) => (
  <div className="flex flex-col gap-4">
    {sectionTitle && <div className="mt-5 font-semibold">{sectionTitle}</div>}
    <div className="ml-5 flex gap-1 flex-col">
      {options.map((menuItem) => (
        <SidebarMenuItem
          key={menuItem.path}
          name={menuItem.name}
          path={menuItem.path}
          Icon={menuItem.Icon}
          active={pathname === menuItem.path}
        />
      ))}
    </div>
  </div>
);

// -------------------- Footer --------------------
const SidebarFooter: FC = () => {
  const { toggle } = useSideBarToggle()

  const handleSignOut = () => {
    toggle()
  }
  return (
    <div className="flex justify-center items-center py-6 border-t shrink-0">
      <Button onClick={handleSignOut} variant="ghost" className="hover:text-red-500 gap-2 py-6">
        <LogInIcon className="rotate-180" />
        Sign out
      </Button>
    </div>
  )
};

// -------------------- Main Sidebar --------------------
const AdminSidebar: FC<AdminSidebarProps> = ({ className }) => {
  const pathname = usePathname();
  const { isOpen, toggle } = useSideBarToggle()

  return (
    <>
      {/* overlay  */}
      <div
        onClick={toggle}
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 xl:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />
      <aside
        className={cn(
          "bg-background fixed w-[250px] z-50 flex flex-col h-screen border-r overflow-hidden transition-all duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full xl:translate-x-0",
          className
        )}
      >
        {/* Header */}
        <div className="flex justify-center items-center py-10 border-b shrink-0">
          <AppLogo />
        </div>

        {/* Menu Sections */}
        <div className="flex-1 overflow-y-auto p-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {adminMenu.map((menu, i) => (
            <SidebarSection
              key={i}
              sectionTitle={menu.sectionTitle}
              options={menu.options}
              pathname={pathname}
            />
          ))}
        </div>

        {/* Footer */}
        <SidebarFooter />
      </aside>
    </>
  );
};

export default AdminSidebar;

"use client";

import AppLogo from "@/components/ui/AppLogo";
import { Button } from "@/components/ui/button";
import { adminMenu } from "@/constants/admin-menu";
import { cn } from "@/lib/utils";
import { LogInIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ComponentType, SVGProps } from "react";

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

const SidebarMenuItem: FC<MenuItemProps> = ({ name, path, Icon, active }) => (
  <Link href={path}>
    <Button
      variant={active ? "default" : "ghost"}
      className="flex gap-2 py-6 w-full justify-start"
    >
      <Icon /> {name}
    </Button>
  </Link>
);

// -------------------- Section --------------------
type SidebarSectionProps = {
  sectionTitle: string;
  options: { name: string; path: string; Icon: ComponentType<SVGProps<SVGSVGElement>> }[];
  pathname: string;
};

const SidebarSection: FC<SidebarSectionProps> = ({ sectionTitle, options, pathname }) => (
  <div className="flex flex-col gap-4">
    <div className="mt-5 font-semibold">{sectionTitle}</div>
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
const SidebarFooter: FC = () => (
  <div className="flex justify-center items-center py-6 border-t shrink-0">
    <Button variant="ghost" className="hover:text-red-500 gap-2 py-6">
      <LogInIcon className="rotate-180" />
      Sign out
    </Button>
  </div>
);

// -------------------- Main Sidebar --------------------
const AdminSidebar: FC<AdminSidebarProps> = ({ className }) => {
  const pathname = usePathname();

  return (
    <aside className={cn("w-[250px] hidden lg:flex flex-col h-screen border-r", className)}>
      {/* Header */}
      <div className="flex justify-center items-center py-10 border-b shrink-0">
        <AppLogo />
      </div>

      {/* Menu Sections */}
      <div className="flex-1 overflow-y-auto p-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {adminMenu.map((menu) => (
          <SidebarSection
            key={menu.sectionTitle}
            sectionTitle={menu.sectionTitle}
            options={menu.options}
            pathname={pathname}
          />
        ))}
      </div>

      {/* Footer */}
      <SidebarFooter />
    </aside>
  );
};

export default AdminSidebar;

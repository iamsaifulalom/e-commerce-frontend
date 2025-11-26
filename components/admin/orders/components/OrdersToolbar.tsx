// OrdersToolbar.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TableHead, TableRow } from "@/components/ui/table";
import { ImportIcon, ListFilterPlus } from "lucide-react";

export default function OrdersToolbar() {
  return (
    <TableRow>
      <TableHead colSpan={10} className="px-1 py-2">
        <div className="flex w-full gap-6 justify-between">
          <div className="flex gap-2">
            <Input
              className="w-full min-w-52"
              placeholder="Search order..."
              type="search"
            />
            <Button variant="outline">
              <ListFilterPlus />
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <ImportIcon /> Import CSV
            </Button>
            <Button variant="outline">
              <ImportIcon className="rotate-180" /> Export CSV
            </Button>
          </div>
        </div>
      </TableHead>
    </TableRow>
  );
}

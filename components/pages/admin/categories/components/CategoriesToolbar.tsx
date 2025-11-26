// CategoriesToolbar.tsx
"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImportIcon } from "lucide-react";
import CategoryForm from "./CategoryForm";


export default function CategoriesToolbar() {
  return (
    <div className="flex w-full gap-6 justify-between">
      <div className="flex gap-2">
        <Input className="w-full min-w-52" placeholder="Search category..." type="search" />
      </div>
      <div className="flex gap-2">
        <Button variant="outline">
          <ImportIcon /> Import csv
        </Button>
        <Button variant="outline">
          <ImportIcon className="rotate-180" /> Export csv
        </Button>
        <CategoryForm />
      </div>
    </div>
  );
}

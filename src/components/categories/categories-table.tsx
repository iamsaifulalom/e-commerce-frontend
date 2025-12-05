// CategoriesTable.tsx
"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { EyeIcon, EllipsisIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";

// types.ts
export type Category = {
  id: number;
  name: string;
  productsCount: number;
  image?: string;
};




function CategoryRow({
  category,
  isSelected,
  onSelect,
}: {
  category: Category;
  isSelected?: boolean;
  onSelect?: (id: number) => void;
}) {
  return (
    <TableRow>
      <TableCell>
        <Checkbox checked={isSelected} onCheckedChange={() => onSelect?.(category.id)} />
      </TableCell>
      <TableCell>
        {category.image && (
          <Image
            src={category.image}
            alt={category.name}
            width={100}
            height={100}
            className="rounded-full size-10 aspect-square shrink-0 object-cover"
          />
        )}
      </TableCell>
      <TableCell>{category.name}</TableCell>
      <TableCell>{category.productsCount}</TableCell>
      <TableCell className="flex gap-3 justify-end items-center">
        <EyeIcon strokeWidth={1.5} className="cursor-pointer" size={16} />
        <EllipsisIcon strokeWidth={1.5} className="cursor-pointer" size={16} />
      </TableCell>
    </TableRow>
  );
}


export default function CategoriesTable({ categories }: { categories: Category[] }) {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const isAllSelected = selectedIds.length === categories.length;

  const toggleSelectAll = () =>
    setSelectedIds(isAllSelected ? [] : categories.map(c => c.id));

  const toggleSelect = (id: number) =>
    setSelectedIds(selectedIds.includes(id)
      ? selectedIds.filter(cid => cid !== id)
      : [...selectedIds, id]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell colSpan={5}>
            {/* <CategoriesToolbar /> */}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHead>
            <Checkbox checked={isAllSelected} onCheckedChange={toggleSelectAll} />
          </TableHead>
          <TableHead></TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Products</TableHead>
          <TableHead className="text-end">Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {categories.map(category => (
          <CategoryRow
            key={category.id}
            category={category}
            isSelected={selectedIds.includes(category.id)}
            onSelect={toggleSelect}
          />
        ))}
      </TableBody>
    </Table>
  );
}

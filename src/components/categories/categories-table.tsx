// CategoriesTable.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Checkbox } from "../ui/checkbox";
import { EllipsisIcon, Trash2 } from "lucide-react";
import { Spinner } from "../ui/spinner";
import { useDeleteCategory } from "@/hooks/use-category";

// ==============================
// Types
// ==============================
export type Category = {
  id: number;
  name: string;
  productsCount: number;
  image?: string;
};


// ==============================
// Row Component
// ==============================
function CategoryRow({
  category,
  selected,
  onSelect,
  onDelete,
  isDeleting,
}: {
  category: Category;
  selected: boolean;
  onSelect: () => void;
  onDelete: () => void;
  isDeleting: boolean;
}) {
  return (
    <TableRow>
      <TableCell>
        <Checkbox checked={selected} onCheckedChange={onSelect} />
      </TableCell>

      <TableCell>
        {category.image && (
          <Image
            src={category.image}
            alt={category.name}
            width={40}
            height={40}
            className="rounded-full aspect-square object-cover"
          />
        )}
      </TableCell>

      <TableCell>{category.name}</TableCell>
      <TableCell>{category.productsCount || 0}</TableCell>

      <TableCell className="flex justify-end gap-3 items-center">
        <EllipsisIcon className="cursor-pointer" size={16} strokeWidth={1.5} />

        {isDeleting ? (
          <Spinner />
        ) : (
          <Trash2
            onClick={onDelete}
            className="cursor-pointer text-red-500"
            size={16}
            strokeWidth={1.5}
          />
        )}
      </TableCell>
    </TableRow>
  );
}

// ==============================
// Main Table Component
// ==============================
export default function CategoriesTable({
  categories,
  isLoading,
  error,
}: {
  categories: Category[];
  isLoading?: boolean;
  error?: string;
}) {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const allSelected = selectedIds.length === categories.length;

  const { isDeleting, deleteCategory } = useDeleteCategory();

  const toggleSelectAll = () =>
    setSelectedIds(allSelected ? [] : categories.map((c) => c.id));

  const toggleSelect = (id: number) =>
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell colSpan={5}></TableCell>
        </TableRow>

        <TableRow>
          <TableHead>
            <Checkbox checked={allSelected} onCheckedChange={toggleSelectAll} />
          </TableHead>
          <TableHead></TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Products</TableHead>
          <TableHead className="text-end">Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {isLoading && (
          <TableRow>
            <TableCell colSpan={5} className="text-center py-10">
              Loading categories…
            </TableCell>
          </TableRow>
        )}

        {!isLoading && categories.length === 0 && (
          <TableRow>
            <TableCell colSpan={5} className="text-center py-10">
              No categories found.
            </TableCell>
          </TableRow>
        )}

        {!error &&
          !isLoading &&
          categories.map((category) => (
            <CategoryRow
              key={category.id}
              category={category}
              selected={selectedIds.includes(category.id)}
              onSelect={() => toggleSelect(category.id)}
              onDelete={() => deleteCategory(category.id)}
              isDeleting={isDeleting === category.id}
            />
          ))}
      </TableBody>
    </Table>
  );
}

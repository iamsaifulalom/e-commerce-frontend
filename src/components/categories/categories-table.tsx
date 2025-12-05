// CategoriesTable.tsx
"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { EyeIcon, EllipsisIcon, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { useDeleteCategory } from "@/hooks/use-category";
import { Spinner } from "../ui/spinner";

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


export default function CategoriesTable({
  categories,
  isLoading,
  error
}: {
  categories: Category[],
  isLoading?: boolean,
  error?: any
}) {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const isAllSelected = selectedIds.length === categories.length;
  const { isDeleting, deleteCategories } = useDeleteCategory()

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

        {isLoading && (
          <TableRow>
            <TableCell colSpan={5} className="text-center py-10">
              Loading categories...
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

        {!error && !isLoading &&
          categories.map(category => (
            <TableRow key={category.id}>
              <TableCell>
                <Checkbox
                  checked={selectedIds.includes(category.id)}
                  onCheckedChange={() => toggleSelect(category.id)}
                />
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

              <TableCell className="flex gap-3 justify-end items-center">
                <EllipsisIcon
                  strokeWidth={1.5}
                  className="cursor-pointer"
                  size={16}
                />
                {isDeleting === category.id ? <Spinner /> :
                  <Trash2
                    onClick={() => deleteCategories(category.id)}
                    strokeWidth={1.5}
                    className="cursor-pointer text-red-500"
                    size={16}
                  />
                }
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

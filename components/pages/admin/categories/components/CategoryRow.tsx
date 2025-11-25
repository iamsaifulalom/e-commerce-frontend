// CategoryRow.tsx
"use client";

import { TableRow, TableCell } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { EyeIcon, EllipsisIcon } from "lucide-react";
import Image from "next/image";
import { Category } from "../types.categories";

export function CategoryRow({
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
            className="rounded-full size-10 aspect-square object-cover"
          />
        )}
      </TableCell>
      <TableCell>{category.name}</TableCell>
      <TableCell>{category.productsCount}</TableCell>
      <TableCell className="flex gap-3 justify-end">
        <EyeIcon strokeWidth={1.5} className="cursor-pointer" size={16} />
        <EllipsisIcon strokeWidth={1.5} className="cursor-pointer" size={16} />
      </TableCell>
    </TableRow>
  );
}

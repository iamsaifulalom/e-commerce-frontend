// CategoriesTable.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import CategoriesToolbar from "./CategoriesToolbar";
import { CategoryRow } from "./CategoryRow";
import { useState } from "react";
import { Category } from "../types.categories";

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
    <Card>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell colSpan={5}>
                <CategoriesToolbar />
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
      </CardContent>
    </Card>
  );
}

// OrderRow.tsx
"use client";

import { TableRow, TableCell } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { PencilLine, Printer, Trash2 } from "lucide-react";
import Image from "next/image";
import { Order } from "../types.orders";

export function OrderRow({ order }: { order: Order }) {
  return (
    <TableRow>
      {/* Order ID */}
      <TableCell className="font-medium">#{order.id}</TableCell>

      {/* Products */}
      <TableCell className="flex gap-4 items-center">
        <div className="grid w-20 gap-1 grid-cols-2">
          {order.products.slice(0, 3).map(product => (
            <div key={product.name} className="aspect-square">
              <Image
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-full"
                src={product.image}
                alt={product.name}
              />
            </div>
          ))}
          {order.products.length > 3 && (
            <div className="aspect-square font-semibold border rounded-full flex justify-center items-center">
              +{order.products.length - 3}
            </div>
          )}
        </div>
        {order.products.length > 1 ? `${order.products.length} items` : `${order.products.length} item`}
      </TableCell>

      {/* Date */}
      <TableCell>{order.date}</TableCell>

      {/* Customer */}
      <TableCell>{order.customer}</TableCell>

      {/* Sale */}
      <TableCell>${order.sale}</TableCell>

      {/* Status */}
      <TableCell>{order.status}</TableCell>

      {/* Actions */}
      <TableCell className="flex gap-6">
        <PencilLine strokeWidth={1.5} className="hover:text-green-600 cursor-pointer" size={16} />
        <Printer strokeWidth={1.5} className="hover:text-green-600 cursor-pointer" size={16} />

        <Dialog>
          <DialogTrigger>
            <Trash2 strokeWidth={1.5} className="text-red-600 cursor-pointer" size={16} />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-red-500">Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete order from database.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </TableCell>
    </TableRow>
  );
}

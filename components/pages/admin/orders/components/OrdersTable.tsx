// OrdersTable.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableHeader, TableRow, TableCell } from "@/components/ui/table";
import OrdersToolbar from "./OrdersToolbar";
import { OrderRow } from "./OrderRow";
import { Order } from "../types.orders";

export default function OrdersTable({ orders }: { orders: Order[] }) {
    return (
        <Card className="flex w-full flex-col">
            <CardContent className="flex-1">
                <Table>
                    <TableHeader>
                        <OrdersToolbar />
                        <TableRow className="border-t text-muted-foreground hover:bg-input bg-input">
                            <TableCell className="font-medium">Order ID</TableCell>
                            <TableCell className="font-medium">Products</TableCell>
                            <TableCell className="font-medium">Date</TableCell>
                            <TableCell className="font-medium">Customer</TableCell>
                            <TableCell className="font-medium">Sale</TableCell>
                            <TableCell className="font-medium">Status</TableCell>
                            <TableCell className="font-medium">Actions</TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders.map(order => (
                            <OrderRow key={order.id} order={order} />
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}

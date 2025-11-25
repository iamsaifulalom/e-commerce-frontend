"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ProductsToolbar from "./ProductsToolbar";
import { ProductRow } from "./ProductRow";
import { Card, CardContent } from "@/components/ui/card";
import Product from "../type.product";
import { Checkbox } from "@/components/ui/checkbox";

// Table Component
export default function ProductsTable({ products }: { products: Product[] }) {

    return (
        <Card>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableCell colSpan={7}>
                                <ProductsToolbar />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableHead><Checkbox /></TableHead>
                            <TableHead></TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Stock</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead className="text-end">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.map((product) => (
                            <ProductRow key={product.id} product={product} />
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
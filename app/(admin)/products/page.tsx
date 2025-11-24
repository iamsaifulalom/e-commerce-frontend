import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ComboboxDemo } from "../category/components/ComboBox";
import { Button } from "@/components/ui/button";
import { CircleEllipsis, EllipsisIcon, EyeIcon, ImportIcon, PlusIcon, ViewIcon } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { products } from "@/components/features/products/data/products";
import Image from "next/image";

export default function ProductsPage() {
    return (
        <Card>
            <CardContent>
                <div className="flex w-full gap-6 justify-between">
                    <div className="flex gap-2">
                        <Input className="w-full" placeholder="Search product..." type="search" />
                        <ComboboxDemo />
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline">
                            <ImportIcon /> Import csv
                        </Button>
                        <Button variant="outline">
                            <ImportIcon className="rotate-180" /> Export csv
                        </Button>
                        <Button>
                            <PlusIcon /> Add product
                        </Button>
                    </div>
                </div>

                <Table className="mt-5">
                    <TableHeader className="border-t">

                        <TableRow>
                            <TableHead >
                                <Checkbox />
                            </TableHead>
                            <TableHead >
                            </TableHead>
                            <TableHead >
                                Name
                            </TableHead>
                            <TableHead >
                                Category
                            </TableHead>
                            <TableHead >
                                Stock
                            </TableHead>
                            <TableHead >
                                Price
                            </TableHead>

                            <TableHead className="text-end">
                                Action
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell> <Checkbox /></TableCell>
                                <TableCell>
                                    <img
                                        src={product.image}
                                        alt="Product name"
                                        width={100}
                                        height={100}
                                        className="size-10 rounded-sm"
                                    />
                                </TableCell>
                                <TableCell> {product.productName}</TableCell>
                                <TableCell> {product.category}</TableCell>
                                <TableCell> {product.stock}</TableCell>
                                <TableCell> {product.price}</TableCell>
                                <TableCell className="flex gap-3 justify-end">
                                    <EyeIcon strokeWidth={1.5} className="cursor-pointer" size={16} />
                                    <EllipsisIcon strokeWidth={1.5} className="cursor-pointer" size={16} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

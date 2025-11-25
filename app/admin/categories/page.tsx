import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EllipsisIcon, EyeIcon, ImportIcon, PlusIcon } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { products } from "@/components/pages/products/data/products";
import Image from "next/image";

export default function CategoriesPage() {
    return (
        <Card>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                           <TableCell colSpan={5}>
                             <div className="flex w-full gap-6 justify-between">
                                <div className="flex gap-2">
                                    <Input className="w-full min-w-52" placeholder="Search categoy..." type="search" />
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="outline">
                                        <ImportIcon /> Import csv
                                    </Button>
                                    <Button variant="outline">
                                        <ImportIcon className="rotate-180" /> Export csv
                                    </Button>
                                    <Button>
                                        <PlusIcon /> Add category
                                    </Button>
                                </div>
                            </div>
                           </TableCell>
                        </TableRow>

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
                                Products
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
                                    <Image
                                        src={product.image}
                                        alt="Product name"
                                        width={100}
                                        height={100}
                                        className="size-10 rounded-full"
                                    />
                                </TableCell>
                                <TableCell> {product.productName}</TableCell>
                                <TableCell> {product.stock}</TableCell>
                               
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

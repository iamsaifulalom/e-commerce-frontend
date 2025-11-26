import { Checkbox } from "@/components/ui/checkbox";
import { TableCell, TableRow } from "@/components/ui/table";
import { EllipsisIcon, EyeIcon } from "lucide-react";
import Image from "next/image";
import Product from "../type.product";

interface ProductRowProps extends Product {
    checked?: boolean
}

// Single Product Row Component
export function ProductRow({ checked, ...product }: ProductRowProps) {
    return (
        <TableRow key={product.id}>
            <TableCell><Checkbox checked={checked} /></TableCell>
            <TableCell>
                <Image
                    src={product.image}
                    alt={product.productName}
                    width={100}
                    height={100}
                    className="size-10 object-cover rounded-full"
                />
            </TableCell>
            <TableCell>{product.productName}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>{product.stock}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell className="flex gap-3 justify-end">
                <EyeIcon strokeWidth={1.5} className="cursor-pointer" size={16} />
                <EllipsisIcon strokeWidth={1.5} className="cursor-pointer" size={16} />
            </TableCell>
        </TableRow>
    );
}
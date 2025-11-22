import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link"
import { bestSellingProducts } from "../data/products"

export function OrderTable() {

  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold">Top selling products</h1>
      <Table>
        <TableBody>
          <TableRow className="border-t hover:bg-background">
            <TableCell className="font-medium">S/NO</TableCell>
            <TableCell className="font-medium">Product name</TableCell>
            <TableCell className="font-medium">Category</TableCell>
            <TableCell className="font-medium">Stock</TableCell>
            <TableCell className="text-right font-medium">Total sales</TableCell>
          </TableRow>
          {bestSellingProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">
                <Avatar>
                  <AvatarFallback>Img</AvatarFallback>
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </TableCell>
              <TableCell>
                <Link href={`/`} className="hover:underline">
                  {product.productName}
                </Link>
              </TableCell>
              <TableCell><Link href={`/`} className="hover:underline">{product.category}</Link></TableCell>
              <TableCell>
                {product.stock ?
                  <p className="text-green-600">In stock</p> :
                  <p className="text-destructive">Out of stock</p>}
              </TableCell>
              <TableCell className="text-right">{product.totalSales}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export function OrderTable() {

  return (
    <Table>
      <TableBody>
        <TableRow className="border-t hover:bg-background">
          <TableCell className="font-medium">S/NO</TableCell>
          <TableCell>Product name</TableCell>
          <TableCell>Category</TableCell>
          <TableCell>Stock</TableCell>
          <TableCell className="text-center">Total sales</TableCell>
        </TableRow>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">
              <Avatar>
                <AvatarFallback>Img</AvatarFallback>
                <AvatarImage src="https://github.com/shadcn.png"/>
              </Avatar>
            </TableCell>
            <TableCell>
              <Link href={`/`} className="hover:underline">
                Nike Shoes
              </Link>
            </TableCell>
            <TableCell><Link href={`/`} className="hover:underline">{invoice.paymentStatus}</Link></TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-center">10k</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

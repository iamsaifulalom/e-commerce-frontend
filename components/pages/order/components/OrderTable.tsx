import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { orders } from "../data/orders"
import { PencilLine, Printer, Trash2 } from "lucide-react"
import Image from "next/image"

export function OrderTable() {

  return (
    <Card className="flex w-full flex-col">
      <CardHeader>
        <CardTitle>Order status</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <Table>
          <TableBody>
            <TableRow className="border-t text-muted-foreground hover:bg-input bg-input">
              <TableCell className="font-medium">Order ID</TableCell>
              <TableCell className="font-medium">Products</TableCell>
              <TableCell className="font-medium">Date</TableCell>
              <TableCell className="font-medium">Customer</TableCell>
              <TableCell className="font-medium">Sale</TableCell>
              <TableCell className="font-medium">Status</TableCell>
              <TableCell className="font-medium">Actions</TableCell>
            </TableRow>
            {orders.map((order) => (
              <TableRow key={order.id}>
                {/* =============================
              Order ID
              ==================================*/}
                <TableCell className="font-medium">
                  #{order.id}
                </TableCell>
                {/* =============================
               Products
              ==================================*/}
                <TableCell className="flex gap-4 items-center">
                  <div className="grid w-20 gap-1 grid-cols-2">
                    {order.products.slice(0, 3).map((product) => (
                      <div key={product.name} className="aspect-square">
                        <Image
                          width={100}
                          height={100}
                          className="w-full h-full object-cover bg-red-500 rounded-full"
                          src={product.image}
                          alt={product.name}
                        />
                      </div>
                    ))}
                    {order.products.length - 3 > 0 &&
                      <div className="aspect-square font-semibold border rounded-full flex justify-center items-center">
                        +{order.products.length - 3}
                      </div>}
                  </div>
                  {order.products.length > 1 ?
                    `${order.products.length} items` :
                    `${order.products.length} item`
                  }
                </TableCell>

                {/* =============================
              Order date
              ==================================*/}
                <TableCell>{order.date}</TableCell>
                {/* =============================
              Customer
              ==================================*/}
                <TableCell>
                  {order.customer}
                </TableCell>
                <TableCell>${order.sale}</TableCell>
                <TableCell>{order.status}</TableCell>


                <TableCell className="flex gap-6 ">

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
            ))}
          </TableBody>
        </Table>
      </CardContent>

    </Card>
  )
}

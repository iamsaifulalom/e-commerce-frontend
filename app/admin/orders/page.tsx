import OrdersTable from "@/components/pages/admin/orders/components/OrdersTable";

// orders.ts
export const orders = [
  {
    id: "ORD-1001",
    products: [
      { name: "Wireless Headphones", image: "/images/product-1.jpg" },
      { name: "Bluetooth Speaker", image: "/images/product-2.jpg" }
    ],
    date: "12 Jan, 2025",
    customer: "Abdul Karim",
    sale: 200,
    status: "Completed",
  },
  {
    id: "ORD-1002",
    products: [
      { name: "Running Shoes", image: "/images/product-2.jpg" },
      { name: "Smart Watch", image: "/images/product-3.jpg" },
      { name: "Gaming Keyboard", image: "/images/product-4.jpg" }
    ],
    date: "13 Jan, 2025",
    customer: "Sadia Ahmed",
    sale: 320,
    status: "Pending",
  },
  {
    id: "ORD-1003",
    products: [
      { name: "Coffee Maker", image: "/images/product-3.jpg" },
      { name: "Backpack", image: "/images/product-4.jpg" }
    ],
    date: "14 Jan, 2025",
    customer: "Rafiul Islam",
    sale: 150,
    status: "Shipped",
  },
  {
    id: "ORD-1004",
    products: [
      { name: "Smart Watch", image: "/images/product-1.jpg" },
      { name: "Bluetooth Speaker", image: "/images/product-2.jpg" },
      { name: "Water Bottle", image: "/images/product-3.jpg" },
      { name: "Sunglasses", image: "/images/product-4.jpg" }
    ],
    date: "15 Jan, 2025",
    customer: "Nusrat Jahan",
    sale: 400,
    status: "Cancelled",
  },
  {
    id: "ORD-1005",
    products: [
      { name: "Gaming Keyboard", image: "/images/product-4.jpg" },
      { name: "Wireless Headphones", image: "/images/product-1.jpg" },
    ],
    date: "16 Jan, 2025",
    customer: "Tanvir Hasan",
    sale: 180,
    status: "Completed",
  },
  {
    id: "ORD-1006",
    products: [
      { name: "Backpack", image: "/images/product-2.jpg" },
      { name: "Coffee Maker", image: "/images/product-3.jpg" },
      { name: "Water Bottle", image: "/images/product-1.jpg" }
    ],
    date: "17 Jan, 2025",
    customer: "Salma Sultana",
    sale: 250,
    status: "Completed",
  },
  {
    id: "ORD-1007",
    products: [
      { name: "Sunglasses", image: "/images/product-4.jpg" },
      { name: "Running Shoes", image: "/images/product-3.jpg" },
    ],
    date: "18 Jan, 2025",
    customer: "Mahmudul Hasan",
    sale: 140,
    status: "Pending",
  },
  {
    id: "ORD-1008",
    products: [
      { name: "Smart Watch", image: "/images/product-1.jpg" },
      { name: "Wireless Headphones", image: "/images/product-2.jpg" },
      { name: "Bluetooth Speaker", image: "/images/product-3.jpg" }
    ],
    date: "19 Jan, 2025",
    customer: "Lamia Chowdhury",
    sale: 300,
    status: "Shipped",
  },
  {
    id: "ORD-1009",
    products: [
      { name: "Coffee Maker", image: "/images/product-3.jpg" }
    ],
    date: "20 Jan, 2025",
    customer: "Ahsanul Hoque",
    sale: 120,
    status: "Completed",
  },
  {
    id: "ORD-1010",
    products: [
      { name: "Gaming Keyboard", image: "/images/product-4.jpg" },
      { name: "Water Bottle", image: "/images/product-1.jpg" }
    ],
    date: "21 Jan, 2025",
    customer: "Farhan Rahman",
    sale: 200,
    status: "Pending",
  },
];

export default function Orders() {
  return (
    <OrdersTable orders={orders} />)
}

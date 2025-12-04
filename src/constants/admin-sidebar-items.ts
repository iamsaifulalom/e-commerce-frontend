import {
    BoxIcon,
    FolderCodeIcon,
    HomeIcon,
    ReceiptIcon,
    UsersIcon
} from "lucide-react";

const menus = [
    {
        sectionTitle: "Main menus",
        options: [
            { name: "Dashboard", path: "/admin", Icon: HomeIcon },
            { name: "Categories", path: "/admin/categories", Icon: FolderCodeIcon },
            { name: "Products", path: "/admin/products", Icon: BoxIcon },
            { name: "Customers", path: "/admin/customers", Icon: UsersIcon },
            { name: "Orders", path: "/admin/orders", Icon: ReceiptIcon },
        ]
    }
]

export const admin = { menus }
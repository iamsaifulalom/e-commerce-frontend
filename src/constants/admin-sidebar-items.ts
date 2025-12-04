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
            { name: "Home", path: "/admin", Icon: HomeIcon },
            { name: "Products", path: "/admin/products", Icon: BoxIcon },
            { name: "Categories", path: "/admin/categories", Icon: FolderCodeIcon },
            { name: "Customers", path: "/admin/customers", Icon: UsersIcon },
            { name: "Orders", path: "/admin/orders", Icon: ReceiptIcon },
        ]
    }
]

export const admin = { menus }
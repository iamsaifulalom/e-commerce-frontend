import { 
    BoxIcon,
    FolderCodeIcon,
    HomeIcon, 
    ReceiptIcon, 
    UsersIcon 
} from "lucide-react";

export const adminMenu = [
    {
        sectionTitle: "",
        options: [
            { name: "Home", path: "/dashboard", Icon: HomeIcon },
            { name: "Products", path: "/products", Icon: BoxIcon },
            { name: "Categories", path: "/categories", Icon: FolderCodeIcon },
            { name: "Customers", path: "/customers", Icon: UsersIcon },
            { name: "Orders", path: "/orders", Icon: ReceiptIcon },
        ]
    }
]
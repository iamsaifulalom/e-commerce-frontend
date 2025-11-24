import { 
    BoxIcon,
    FolderCodeIcon,
    HomeIcon, 
    MessageCircle, 
    ReceiptIcon, 
    Users, 
    UsersIcon 
} from "lucide-react";

export const adminMenu = [
    {
        sectionTitle: "Admin",
        options: [
            { name: "Home", path: "/dashboard", Icon: HomeIcon },
            { name: "Products", path: "/products", Icon: BoxIcon },
            { name: "Categories", path: "/categories", Icon: FolderCodeIcon },
            { name: "Orders", path: "/orders", Icon: ReceiptIcon },
            { name: "Customers", path: "/customers", Icon: UsersIcon },
        ]
    },
    {
        sectionTitle: "Tools",
        options: [
            { name: "Help", path: "/help", Icon: MessageCircle },
            { name: "Manage user", path: "/manage-user", Icon: Users},
        ]
    }
]
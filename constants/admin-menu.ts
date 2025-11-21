import { HomeIcon, MessageCircle, ReceiptIcon, Users, UsersIcon } from "lucide-react";

export const adminMenu = [
    {
        sectionTitle: "Admin",
        options: [
            { name: "Home", path: "/dashboard", Icon: HomeIcon },
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
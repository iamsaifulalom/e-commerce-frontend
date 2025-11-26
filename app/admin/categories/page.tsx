import CategoriesTable from "@/components/admin/categories/components/CategoriesTable";
import { Category } from "@/components/admin/categories/types.categories";

const categories: Category[] = [
  { id: 1, name: "Electronics", productsCount: 15, image: "/images/product-1.jpg" },
  { id: 2, name: "Footwear", productsCount: 25, image: "/images/product-2.jpg" },
  { id: 3, name: "Kitchen", productsCount: 12, image: "/images/product-3.jpg" },
];

export default function CategoriesPage() {
    return ( <CategoriesTable categories={categories} />)
}

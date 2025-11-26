import { SubmitHandler, useForm } from "react-hook-form";
import { CategoryBody, categorySchema } from "../schema.categories";
import { zodResolver } from "@hookform/resolvers/zod";

export function useCategoryForm() {

    const onSubmit: SubmitHandler<CategoryBody> = (data) => {
        console.log("Form submitted:", data);
        // setDrawerOpen(false);
    };
    const methods = useForm<CategoryBody>({
        resolver: zodResolver(categorySchema),
        defaultValues: {
            name: "",
            slug: "",
            image: "/images/product-1.jpg",
        },
    });

    return { methods, onSubmit }
}
import { SubmitHandler, useForm } from "react-hook-form";
import { CategoryBody, categorySchema } from "../schema.categories";
import { zodResolver } from "@hookform/resolvers/zod";
import shopAPI from "@/config/axios";
import { toast } from "sonner";

export function useCategoryForm() {

    const onSubmit: SubmitHandler<CategoryBody> = async (data) => {
        try {
            console.log("Form submitted:", data);
            const res = await shopAPI.post("/category", data);
            toast.success("Category created")
        } catch (error: any) {
            const errorMessage = error?.response?.data?.message
            toast.error(errorMessage)
        }
    };
    const methods = useForm<CategoryBody>({
        resolver: zodResolver(categorySchema),
        defaultValues: {
            name: "",
            slug: "",
            image: "",
        },
    });

    return { methods, onSubmit }
}
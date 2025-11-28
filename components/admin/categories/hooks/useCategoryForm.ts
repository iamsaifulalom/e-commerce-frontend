import { SubmitHandler, useForm } from "react-hook-form";
import { CategoryBody, categorySchema } from "../schema.categories";
import { zodResolver } from "@hookform/resolvers/zod";
import shopAPI from "@/config/axios";
import { toast } from "sonner";
import { useState } from "react";

export function useCategoryForm() {

    const [isLoading, setIsLoading] = useState(false);

    const methods = useForm<CategoryBody>({
        resolver: zodResolver(categorySchema),
        defaultValues: {
            name: "",
            slug: "",
            image: "",
        },
    });

    const onSubmit: SubmitHandler<CategoryBody> = async (data) => {
        try {
            setIsLoading(true)
            await shopAPI.post("/category", data);
            toast.success("Category created");
            methods.reset()
        } catch (error: any) {
            const errorMessage = error?.response?.data?.message
            toast.error(errorMessage)
        } finally {
            setIsLoading(false)
        }
    };

    return { methods, onSubmit, isLoading }
}
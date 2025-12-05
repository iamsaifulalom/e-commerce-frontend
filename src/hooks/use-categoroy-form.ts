import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState } from "react";
import { AxiosError } from "axios";
import { CategoryBody, categorySchema } from "@/schema/schema.category";
import { ShopAPI } from "@/lib/api";
import { useSheet } from "@/components/ui/sheet";

export function useCategoryForm() {

    const [isLoading, setIsLoading] = useState(false);
   const {toggleSheet}=  useSheet()

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
            await ShopAPI.post("/category", data);
            toast.success("Category created");
            methods.reset()
            toggleSheet();
        } catch (error: unknown) {

            if (error instanceof AxiosError) {
                const errorMessage = error?.response?.data?.message;
                return toast.error(errorMessage || "Something went wrong");
            }
            toast.error("Something went wrong");
        } finally {
            setIsLoading(false)
        }
    };

    return { methods, onSubmit, isLoading }
}
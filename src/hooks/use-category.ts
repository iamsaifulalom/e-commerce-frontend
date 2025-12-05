import useSWR from "swr";
import { ShopAPI } from "@/lib/api";
import { useState } from "react";

const fetcher = (url: string) => ShopAPI.get(url).then(res => res.data.data);

export function useCategories() {
    const { data, error, isLoading, mutate } = useSWR("/category", fetcher);

    return {
        categories: data || [],
        isLoading,
        error,
        mutate,
    };
}

// --- HOOK ---
export function useDeleteCategory() {
    const [isDeleting, setIsDeleting] = useState<number | string | null>("");
    const [error, setError] = useState<string | null>(null);
    const { mutate } = useCategories()

    const deleteCategory = async (id: string | number) => {
        setIsDeleting(id);
        try {
            await ShopAPI.delete(`/category?id=${id}`);
            mutate();

        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err?.message);
            } else {
                setError("Failed to delete category");
            }
        } finally {
            setIsDeleting(null);
        }
    };

    return {
        deleteCategory,
        isDeleting,
        error,
    };
}



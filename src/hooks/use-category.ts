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
import useSWRMutation from "swr/mutation";
import axios from "axios";

// --- API CALLER ---
async function deleteCategoriesRequest(url: string, { arg }: { arg: number[] }) {
    const res = await axios.delete(url, {
        data: { ids: arg }, // axios DELETE needs "data" to send body
    });

    return res.data;
}

// --- HOOK ---
export function useDeleteCategory() {
    const [isDeleting, setIsDeleting] = useState<number | string | null>("");
    const [error, setError] = useState<any>(null);
    const { mutate } = useCategories()

    const deleteCategories = async (id: string | number) => {
        setIsDeleting(id);
        try {
            await ShopAPI.delete(`/category?id=${id}`);
            mutate();

        } catch (err: any) {
            setError(err?.response?.data?.message || "Failed to delete categories");
        } finally {
            setIsDeleting(null);
        }
    };

    return {
        deleteCategories,
        isDeleting,
        error,
    };
}



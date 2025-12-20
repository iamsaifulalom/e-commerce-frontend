"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";
import { SignInBody, signInSchema } from "@/schema/auth";
import { signIn } from "@/lib/api/auth";
import { useDelayedRedirect } from "./use-delayed-redirect";

export function useSignIn() {

    const { triggerRedirect } = useDelayedRedirect();

    const form = useForm<SignInBody>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "hello@saifulalom.com",
            password: "saifulalom2",
        }
    });

    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);

    async function handleSubmit(data: SignInBody) {
        setIsLoading(true);
        setServerError(null);

        try {
            setIsLoading(true)
            const res = await signIn(data)
            toast.success(res.message)
            triggerRedirect("/admin/dashboard", 3000)
        } catch (err: any) {
            const errMessage = err?.response?.data?.message || "Something went wrong!";
            toast.error(errMessage);
        } finally {
            setIsLoading(false)
        }
    }

    return { form, handleSubmit, isLoading, serverError };
}

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";
import { SignInBody, signInSchema } from "@/schema/auth";

export function useSignIn() {
    const form = useForm<SignInBody>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "test@user.com",
            password: "mystrongpassword1234",
        }
    });

    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);

    async function handleSubmit(data: SignInBody) {
        setIsLoading(true);
        setServerError(null);

        try {
            setIsLoading(true)
            // const res = await signUp(data)
            // toast.success(res.message)
        } catch (err: any) {
            const errMessage = err?.response?.data?.message || "Something went wrong!";
            toast.error(errMessage);
        } finally {
            setIsLoading(false)
        }
    }

    return { form, handleSubmit, isLoading, serverError };
}

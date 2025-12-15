"use client";

import {
    signUpDefaultValues,
    SignUpFormValues,
    signUpSchema
} from "@/schema/sign-up-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { signUp } from "@/lib/api/auth";

export function useSignUp() {
    const form = useForm<SignUpFormValues>({
        resolver: zodResolver(signUpSchema),
        defaultValues: signUpDefaultValues
    });

    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);

    async function handleSubmit(data: SignUpFormValues) {
        setIsLoading(true);
        setServerError(null);

        try {
            setIsLoading(true)
            const res = await signUp(data)
            console.log(res)
        } catch (err: any) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }

    return { form, handleSubmit, isLoading, serverError };
}

"use client";

// import { signUpAction } from "@/actions/action.auth";
import {
    signUpDefaultValues,
    SignUpFormValues,
    signUpSchema
} from "@/schema/sign-up-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

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

        // try {
        //     // const res = await signUpAction(data);

        //     console.log(res);
        //     if (!res.success) {
        //         // server returned validation errors
        //         setServerError("Please fix the highlighted errors");
        //     }
        //     if (res.success) {
        //         // success
        //         console.log("User created successfully");
        //         form.reset(); // optional: clear the form
        //     }
        // } catch (err: any) {
        //     console.error(err);
        //     setServerError("Something went wrong. Please try again.");
        // } finally {
        //     setIsLoading(false);
        // }
    }

    return { form, handleSubmit, isLoading, serverError };
}

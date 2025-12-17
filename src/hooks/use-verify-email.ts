"use client"

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ShopAPI from "@/lib/api/axios";
import { useRouter } from "next/navigation";

export function useVerifyEmail() {
    const [isVerifying, setIsVerifying] = useState(false);
    const [isSuccess, setIsSuccess] = useState("")
    const [error, setError] = useState("")
    const router = useRouter();

    const token = useSearchParams().get("token");
    const email = useSearchParams().get("email");

    useEffect(() => {

        if (!token || !email) {
            setError("Invalid or expired link");
            setIsVerifying(false);
            return;
        }

        async function verify() {
            setIsVerifying(true);

            try {
                const res = await ShopAPI.post("/auth/verify", {
                    verify_token: token,
                    email
                });

                if (res.status === 200) {
                    setIsSuccess(res.data?.message)
                    setTimeout(() => {
                        router.push("/admin/dashboard")
                    }, 3 * 1000);

                } else {
                    setError("Verification failed");
                }
            } catch (error: any) {
                const errMessage = error?.response?.data?.message || error.message || "Something went wrong";
                setError(errMessage)
            } finally {
                setIsVerifying(false);
            }
        }

        verify();
    }, [token, email , router]);

    return { isVerifying , isSuccess , error};
}

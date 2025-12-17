"use client";

import { Spinner } from "@/components/ui/spinner";
import { useVerifyEmail } from "@/hooks/use-verify-email";

export default function VerifyEmail() {
    const { isVerifying, isSuccess, error } = useVerifyEmail();

    return (
        <div className="flex flex-col gap-3 justify-center items-center h-screen text-center px-4">
            {isVerifying && (
                <>
                    <Spinner className="size-6" />
                    <p className="text-sm text-muted-foreground">
                        Verifying your email, please wait…
                    </p>
                </>
            )}

            {isSuccess && (
                <p className="text-sm text-green-600 font-medium">
                    Your email has been verified successfully
                </p>
            )}

            {error && (
                <p className="text-sm text-red-600 font-medium">
                    {error}
                </p>
            )}
        </div>
    );
}


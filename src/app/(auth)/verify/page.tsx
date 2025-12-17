import VerifyEmail from "@/components/auth/verify-email";
import { Suspense } from "react";

export default function VerifyPage() {
    return (
        <Suspense fallback={<VerifyLoading />}>
            <VerifyEmail />
        </Suspense>
    );
}

function VerifyLoading() {
    return (
        <div className="flex justify-center items-center h-screen">
            <p className="text-sm text-muted-foreground">
                Preparing verification…
            </p>
        </div>
    );
}

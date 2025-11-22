"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

export default function AuthSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token"); // extract value outside useEffect

  useEffect(() => {
    if (token) {
      localStorage.setItem("authToken", token);

      // Redirect after 500ms for smooth UX
      setTimeout(() => router.push("/"), 500);
    }
  }, [router, token]); // ✅ include only primitive token & router
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="flex flex-col items-center text-center">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />

        <h1 className="text-xl font-semibold text-foreground">
          Signing you in…
        </h1>

        <p className="text-muted-foreground text-sm">
          Please wait while we securely set up your account.
        </p>
      </div>
    </div>
  );
}

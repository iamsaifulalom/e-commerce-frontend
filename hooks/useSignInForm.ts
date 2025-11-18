"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, SignInBody } from "@/schemas/auth.schema";

export const useSignInForm = () => {
  const form = useForm<SignInBody>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: SignInBody) => {
    console.log("Login data:", values);
    // Call API / auth logic here
  };

  return { form, onSubmit };
};

"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, SignUpBody } from "@/schemas/auth.schema";

export const useSignUpForm = () => {
  const form = useForm<SignUpBody>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: SignUpBody) => {
    console.log("sign data:", values);
    // Call API / auth logic here
  };

  return { form, onSubmit };
};

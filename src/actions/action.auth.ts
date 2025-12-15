"use server";

import { ValidateResource } from "@/lib/validate-resources";
import { SignInFormValues, signInSchema } from "@/schema/sign-in-schema";
import { SignUpFormValues, signUpSchema } from "@/schema/sign-up-schema";
import { authService } from "@/services/service.auth";

export async function signUpAction(signUpData: SignUpFormValues) {

  const validated = ValidateResource(signUpSchema, signUpData);
  const result = authService.createUser(validated.data)
  return { success: true, result };
}

export async function signInAction(signInData: SignInFormValues) {

  console.log(signInData)
  // Delay for 10 seconds
  await new Promise(resolve => setTimeout(resolve, 10_000));

  return { success: true };
}

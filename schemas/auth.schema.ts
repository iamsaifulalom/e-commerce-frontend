import { z } from "zod";

export const signUpSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
    email: z.string().email({ message: "Please provide a valid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

export const signInSchema = signUpSchema.omit({ name: true });
export const verifySchema = signUpSchema.omit({ password: true, name: true })
    .extend({ verify_token: z.string("Token is required") });


export type SignUpBody = z.infer<typeof signUpSchema>;
export type VerifyBody = z.infer<typeof verifySchema>;
export type SignInBody = z.infer<typeof signInSchema>;

// src/shema/sign-up-shema.ts
import { z } from "zod";

// password rules (example): min 8 chars, at least one letter and one number
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

export const signUpSchema = z
    .object({
        name: z
            .string()
            .min(2, { message: "Name must be at least 2 characters." })
            .max(100, { message: "Name is too long." })
            .trim(),
        email: z.string().email({ message: "Please enter a valid email address." }),
        isAgree: z.literal(true, { message: "You must agree to the terms and conditions." }),
        password: z
            .string()
            .min(8, { message: "Password must be at least 8 characters." })
            .regex(passwordRegex, {
                message: "Password must contain at least one letter and one number.",
            })
    });

// Type for your form values
export type SignUpFormValues = z.infer<typeof signUpSchema>;

// default safe values (useful to pass to useForm)
export const signUpDefaultValues: SignUpFormValues = {
    name: "",
    email: "",
    password: "",
    isAgree: true,
};

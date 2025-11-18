"use client";
import GoogleIcon from "@/components/icons/GoogleIcon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useGoogleSignIn from "@/hooks/useGoogleSIgnIn";

import { useSignUpForm } from "@/hooks/useSignUpForm";
import Link from "next/link";

export default function SignUpCardForm() {
  const { form, onSubmit } = useSignUpForm();
  const {signIn} = useGoogleSignIn()

  return (
    <div className="flex justify-center items-center w-1/2 min-h-screen">
      <Card className="w-full max-w-sm border-none shadow-none">
        <div>
          <h1 className="text-3xl text-center font-montserrat font-bold">Sign up to Revaro</h1>
          <p className="text-sm text-center mt-1 text-muted-foreground">
            Timeless Design Crafted for Modern Men
          </p>
        </div>

        <CardHeader>
          <Button onClick={signIn} variant="outline">
           <GoogleIcon/> Continue with Google
          </Button>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Jhon doe" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="m@example.com" type="email" {...field} />
                    </FormControl>
                    <FormDescription>We’ll never share your email.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="text-xs flex justify-center text-muted-foreground">
          I have accounts.
          <Link
            className="ml-1 text-foreground hover:underline underline-offset-1"
            href="/sign-in"
          >
            Sign in
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

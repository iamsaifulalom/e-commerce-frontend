"use client"
import LeftSideImage from "@/components/auth/left-side-img";
import SignUpForm from "@/components/auth/sign-up-form";


export default function SignUp() {
  return (
    <div className="flex flex-col md:flex-row items-center md:gap-10 w-full min-h-full">
      <LeftSideImage />
      <SignUpForm />
    </div>
  )
}

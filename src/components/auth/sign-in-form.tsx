"use client"

import { Button } from '../ui/button'
import Link from 'next/link'
import { Form } from '../ui/form'
import { authForms } from '@/forms/forms.auth'
import InputField from '../ui/input-field'
import { Spinner } from '../ui/spinner'
import GoogleIcon from '@/icon/google-icon'
import FieldSeparator from '../ui/field-separator'
import { useSignIn } from '@/hooks/use-sign-in'

export default function SignInForm() {
    const { form, handleSubmit, isLoading } = useSignIn();

    return (
        <>
            <div className='flex flex-col gap-6'>
                <h1 className='text-3xl font-bold'>Sign In</h1>
                <p className='text-[16px] text-muted-foreground'>
                    Don&lsquo;t have an account?
                    <Link href="/sign-up" className='font-bold ml-2 text-green-600'>
                        Sign Up
                    </Link>
                </p>
            </div>
            <Button variant="outline" size="lg" className='w-full'>
                <GoogleIcon />  Sign in with google
            </Button>
            <FieldSeparator text='Or' />
            <Form {...form}>
                <form>
                    <div className='flex flex-col gap-3'>
                        {/* form fields for sign in */}
                        {authForms.signIn.map((item) => (
                            <InputField key={item.name} form={form} {...item} />
                        ))}

                    </div>
                </form>
            </Form>
            <Button
                disabled={isLoading}
                onClick={form.handleSubmit(handleSubmit)}
                className="w-full mt-2 py-2.5 font-bold" size="lg"
            >
                {isLoading ? <Spinner /> : "Sign in"}
            </Button>
        </>
    )
}

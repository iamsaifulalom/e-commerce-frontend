"use client"

import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import Link from 'next/link'
import { useSignUp } from '@/hooks/use-sign-up'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { authForms } from '@/forms/forms.auth'
import InputField from '../ui/input-field'
import { Spinner } from '../ui/spinner'

export default function SignUpForm() {
    const { form, handleSubmit, isLoading } = useSignUp();

    return (
        <>
            <div className='flex flex-col gap-6'>
                <h1 className='text-3xl font-bold'>Sign up</h1>
                <p className='text-[16px] text-muted-foreground'>Already have an account? <Link href="/sign-in" className='font-bold text-green-600'> Sign in</Link></p>
            </div>
            <Form {...form}>
                <form>
                    <div className='flex flex-col gap-3'>
                        {/* form fields for sign up */}
                        {authForms.signUp.map((item) => (
                            <InputField key={item.name} form={form} {...item} />
                        ))}

                        {/* checkbox for terms and conditions */}
                        <FormField
                            control={form.control}
                            name='termsAccepted'
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <span className='gap-3 text-[16px] text-muted-foreground'>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            /> I agree with  <Link href="" className='font-bold text-foreground' >  Privacy Policy </Link> and <Link href="" className='font-bold text-foreground' > Terms of Use</Link>
                                        </span>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </form>
            </Form>
            <Button
                disabled={isLoading}
                onClick={form.handleSubmit(handleSubmit)}
                className="w-full mt-2 py-2.5 font-bold" size="lg"
            >
                {isLoading ? <Spinner /> : "Sign up"}
            </Button>
        </>
    )
}

import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import Link from 'next/link'

export default function SignUpForm() {
    return (
        <div className='p-4 w-full space-y-8'>
            <div className='flex flex-col gap-6'>
                <h1 className='text-3xl font-bold'>Sign up</h1>
                <p className='text-[16px] text-muted-foreground'>Already have an account? <Link href="" className='font-bold text-green-600'> Sign in</Link></p>
            </div>
            <form className="">
                <div className='flex flex-col gap-3'>
                    <Input placeholder="Name" />
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <span className='gap-3 text-[16px] text-muted-foreground'>
                        <Checkbox /> I agree with  <Link href="" className='font-bold text-foreground' >  Privacy Policy </Link> and <Link href="" className='font-bold text-foreground' > Terms of Use</Link>
                    </span>
                </div>
            </form>
            <Button className="w-full mt-2 py-2.5 font-bold" size="lg">
                Sign up
            </Button>
        </div>
    )
}

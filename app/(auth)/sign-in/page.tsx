import SignInCardForm from '@/components/features/auth/SignInCardForm'
import Image from 'next/image'

export default function SignIn() {
  return (
    <div className='flex w-full h-screen overflow-hidden'>
      <Image
        loading='eager'
        alt='Featured images'
        src="/images/sign-in-page.jpg"
        width={300}
        height={300}
        className='w-1/2 h-full object-cover'
      />
      <SignInCardForm />

    </div>
  )
}

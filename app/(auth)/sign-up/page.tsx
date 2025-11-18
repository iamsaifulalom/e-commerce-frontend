import SignUpCardForm from '@/components/features/auth/SignUpCardForm'
import Image from 'next/image'

export default function SignUp() {
  return (
    <div className='flex w-full h-screen overflow-hidden'>
      <SignUpCardForm />
      <Image
        loading='eager'
        alt='Featured images'
        src="/images/sign-in-page.jpg"
        width={300}
        height={300}
        className='w-1/2 h-full object-cover'
      />
    </div>
  )
}

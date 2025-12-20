import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <main
            className="grid grid-cols-1 md:grid-cols-2 md:gap-10 w-full"
        >
            <div className='flex w-full p-4 justify-center items-start bg-cover min-h-75 md:h-screen bg-center bg-[url("/images/sign-up-left.png")]'>
                <Link href="/">
                    <Image
                        src="/images/logo.png"
                        width={120}
                        height={100}
                        alt="Logo"
                    />
                </Link>
            </div>
            <div className='p-4 w-full flex flex-col justify-center space-y-8'>
                {children}
            </div>
        </main>
    )
}

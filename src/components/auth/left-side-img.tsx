import Image from "next/image";
import Link from "next/link";

export default function LeftSideImage() {
    return (
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
    );
}

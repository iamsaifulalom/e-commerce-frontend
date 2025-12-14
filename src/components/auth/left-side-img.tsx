import Image from "next/image";

export default function LeftSideImage() {
    return (
        <div className='flex w-full p-4 justify-center items-start bg-cover min-h-75 md:h-screen bg-center bg-[url("/images/sign-up-left.png")]'>
            <Image
                src="/images/logo.png"
                width={100}
                height={100}
                alt="Logo"
                className="object-contain"
            />
        </div>
    );
}

export default function useGoogleSignIn() {
    async function signIn() {
        window.location.href =`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/google`
    }
    return { signIn }
} 
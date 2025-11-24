'use client';
import AuthForm from '@/app/components/AuthForm';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();

    const handleLogin = (email: string, password: string) => {
        console.log('Logging in:', email, password);
        // TODO: Replace with Supabase login
        router.push('/dashboard');
    };

    return (
        <div className="min-h-screen bg-white px-6 py-16 text-gray-800">
            <h1 className="text-3xl font-extrabold mb-8 text-indigo-500 text-center">Log In to DocStudio</h1>
            <AuthForm onSubmit={handleLogin} buttonLabel="Log In" />
            <p className="text-center mt-4 text-gray-500 text-sm">
                Don't have an account? <a href="/register" className="text-indigo-500 hover:underline">Register</a>
            </p>
        </div>
    );
}
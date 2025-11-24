'use client';
import AuthForm from './components/AuthForm';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
    const router = useRouter();

    const handleRegister = (email: string, password: string) => {
        console.log('Registering:', email, password);
        // TODO: Replace with Supabase register
        router.push('/dashboard');
    };

    return (
        <div className="min-h-screen bg-white px-6 py-16 text-gray-800">
            <h1 className="text-3xl font-extrabold mb-8 text-indigo-500 text-center">Create an Account</h1>
            <AuthForm onSubmit={handleRegister} buttonLabel="Register" />
            <p className="text-center mt-4 text-gray-500 text-sm">
                Already have an account? <a href="/login" className="text-indigo-500 hover:underline">Log in</a>
            </p>
        </div>
    );
}
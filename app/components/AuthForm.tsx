'use client';
import { useState } from 'react';

export default function AuthForm({
                                     onSubmit,
                                     buttonLabel,
                                 }: {
    onSubmit: (email: string, password: string) => void;
    buttonLabel: string;
}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(email, password);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-sm mx-auto">
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
            />
            <button
                type="submit"
                className="w-full px-6 py-3 bg-indigo-500 text-white rounded-full font-bold shadow hover:bg-indigo-600 transition"
            >
                {buttonLabel}
            </button>
        </form>
    );
}
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AppLayout from "@/app/components/AppLayout";

export default function NewDocPage() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ title, content });
        router.push('/dashboard');
    };

    return (
        <AppLayout>
        <div className="min-h-screen bg-white px-6 py-16 text-gray-800">
            <h1 className="text-3xl font-extrabold mb-8 text-indigo-500">New Document</h1>

            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                <input
                    type="text"
                    placeholder="Document Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <textarea
                    placeholder="Write your content here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={10}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                    type="submit"
                    className="px-8 py-3 bg-indigo-500 text-white rounded-full font-bold shadow hover:bg-indigo-600 transition"
                >
                    Save Document
                </button>
            </form>
        </div>
        </AppLayout>
    );
}
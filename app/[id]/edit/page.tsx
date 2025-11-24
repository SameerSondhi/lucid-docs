'use client';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import AppLayout from "./components/AppLayout";

export default function EditDocPage() {
    const params = useParams<{ id: string }>();
    const router = useRouter();
    const [title, setTitle] = useState('Document Title');
    const [content, setContent] = useState('Current document content...');

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Updated:', { title, content });
        router.push(`/dashboard`);
    };

    return (
    <AppLayout>
        <div className="min-h-screen bg-white px-6 py-16 text-gray-800">
            <h1 className="text-3xl font-extrabold mb-8 text-indigo-500">Edit Document: {params.id}</h1>

            <form onSubmit={handleUpdate} className="space-y-6 max-w-2xl mx-auto">
                <input
                    type="text"
                    placeholder="Document Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <textarea
                    placeholder="Document content..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={10}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                    type="submit"
                    className="px-8 py-3 bg-indigo-500 text-white rounded-full font-bold shadow hover:bg-indigo-600 transition"
                >
                    Save Changes
                </button>
            </form>
        </div>
    </AppLayout>
    );
}
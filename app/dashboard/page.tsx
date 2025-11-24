'use client';
import Link from 'next/link';
import AppLayout from "./components/AppLayout";

const dummyDocs = [
    { id: '1', title: 'First Doc', createdAt: '2025-07-06' },
    { id: '2', title: 'Team Guidelines', createdAt: '2025-07-05' },
];

export default function DashboardPage() {
    return (
        <AppLayout>
        <div className="min-h-screen bg-white px-6 py-16 text-gray-800">
            <h1 className="text-3xl font-extrabold mb-8 text-indigo-500">Your Docs</h1>

            <Link
                href="/new"
                className="inline-block mb-8 px-6 py-3 bg-indigo-500 text-white rounded-full font-bold shadow hover:bg-indigo-600 transition"
            >
                + New Document
            </Link>

            <div className="grid gap-6 sm:grid-cols-2">
                {dummyDocs.map((doc) => (
                    <Link
                        key={doc.id}
                        href={`/${doc.id}`}
                        className="block border border-gray-200 rounded-xl p-6 hover:shadow-lg transition bg-white"
                    >
                        <h2 className="text-xl font-bold text-indigo-500 mb-1">{doc.title}</h2>
                        <p className="text-gray-500 text-sm">Created: {doc.createdAt}</p>
                    </Link>
                ))}
            </div>
        </div>
        </AppLayout>
    );
}
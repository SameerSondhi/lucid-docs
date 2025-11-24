'use client';
import Link from 'next/link';

export default function DocCard({ id, title, createdAt }: { id: string; title: string; createdAt: string }) {
    return (
        <Link
            href={`/${id}`}
            className="block border border-gray-200 rounded-xl p-6 hover:shadow-lg transition bg-white"
        >
            <h2 className="text-xl font-bold text-indigo-500 mb-1">{title}</h2>
            <p className="text-gray-500 text-sm">Created: {createdAt}</p>
        </Link>
    );
}
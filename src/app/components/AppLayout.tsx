'use client';
import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
            <Link href="/dashboard" className="text-lg font-bold text-indigo-500">DocStudio</Link>
            <nav className="flex gap-4 text-gray-500">
                <Link href="/dashboard" className="hover:text-indigo-500 transition">Dashboard</Link>
                <Link href="/new" className="hover:text-indigo-500 transition">New</Link>
            </nav>
        </header>
    );
}
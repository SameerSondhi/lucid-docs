'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/app/utils/cn'; // optional utility, or just use string templates

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const navLinks = [
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'New Doc', href: '/new-doc' },
        { name: 'My Docs', href: '/my-docs' },
    ];

    return (
        <div className="flex h-screen bg-gradient-to-br from-white via-sky-50 to-indigo-50 text-gray-800 font-sans">
            {/* Sidebar */}
            <aside className="w-60 bg-white border-r border-gray-200 flex flex-col py-6 shadow-md">
                <div className="flex flex-col items-center mb-8">
                    <Image
                        src="/docstudio-logo.svg" // Replace with your logo
                        alt="DocStudio logo"
                        width={48}
                        height={48}
                    />
                    <h1 className="mt-2 text-xl font-bold text-indigo-500">DocStudio</h1>
                </div>
                <nav className="flex flex-col gap-2 px-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "px-3 py-2 rounded-md font-medium hover:bg-indigo-100 transition",
                                pathname === link.href ? "bg-indigo-50 text-indigo-600" : "text-gray-600"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <div className="mt-auto px-4 pt-8">
                    <Link
                        href="/settings"
                        className="block text-sm text-gray-400 hover:text-indigo-500 transition"
                    >
                        Settings
                    </Link>
                </div>
            </aside>

            {/* Main area */}
            <div className="flex-1 flex flex-col">
                {/* Top bar */}
                <header className="h-14 px-6 flex items-center border-b border-gray-200 bg-white shadow-sm">
                    <h2 className="text-base font-semibold text-indigo-500">Your workspace</h2>
                </header>

                {/* Content area */}
                <main className="flex-1 overflow-y-auto bg-gradient-to-b from-white via-sky-50 to-indigo-50 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
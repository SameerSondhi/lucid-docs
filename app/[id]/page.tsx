'use client';
import { useParams } from 'next/navigation';
import AppLayout from "@/app/components/AppLayout";

export default function ViewDocPage() {
    const params = useParams<{ id: string }>();

    return (
        <AppLayout>
        <div className="min-h-screen bg-white px-6 py-16 text-gray-800">
            <h1 className="text-3xl font-extrabold mb-4 text-indigo-500">Document: {params.id}</h1>
            <p className="text-gray-600 mb-6">
                This is where your document content will appear. Later, you’ll load it dynamically from Supabase.
            </p>
            <div className="border border-gray-300 rounded-lg p-6 bg-gray-50">
                <p className="text-gray-700">[Document content placeholder]</p>
            </div>
        </div>
        </AppLayout>
    );
}
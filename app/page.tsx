import Image from "next/image";

export default function Home() {
  return (
      <div className="bg-white text-gray-900 font-sans">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center px-6 sm:px-20 py-32 bg-gradient-to-br from-sky-100 via-indigo-100 to-purple-50">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            LucidDocs
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-gray-700">
            The ultimate workspace for your documentation, knowledge, and collaborative content — beautifully simple and deeply powerful.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
                href="#features"
                className="bg-indigo-500 text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-indigo-600 transition"
            >
              Try It Free
            </a>
            <a
                href="#features"
                className="border-2 border-indigo-500 text-indigo-500 px-8 py-3 rounded-full font-bold hover:bg-indigo-50 transition"
            >
              Explore Features
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 px-6 sm:px-20 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <h2 className="text-lg font-bold mb-2 text-indigo-500">📄 Unified Docs</h2>
              <p className="text-gray-600">Organize all your docs, notes, specs, and wikis in one powerful workspace.</p>
            </div>
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <h2 className="text-lg font-bold mb-2 text-indigo-500">🔍 Smart Search</h2>
              <p className="text-gray-600">Find what you need in seconds with lightning-fast search and intelligent filters.</p>
            </div>
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <h2 className="text-lg font-bold mb-2 text-indigo-500">🤝 Team Collaboration</h2>
              <p className="text-gray-600">Real-time editing, comments, and version history that empower your team to move fast.</p>
            </div>
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <h2 className="text-lg font-bold mb-2 text-indigo-500">⚡ AI Summaries</h2>
              <p className="text-gray-600">Turn lengthy docs into concise insights with built-in AI-powered summaries.</p>
            </div>
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <h2 className="text-lg font-bold mb-2 text-indigo-500">📈 Knowledge Analytics</h2>
              <p className="text-gray-600">Understand how your docs are used and improve information flow with actionable metrics.</p>
            </div>
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <h2 className="text-lg font-bold mb-2 text-indigo-500">🔒 Secure by Design</h2>
              <p className="text-gray-600">Enterprise-grade security and privacy controls built in from day one.</p>
            </div>
          </div>
        </section>

        {/* Preview Section */}
        <section className="py-24 px-6 sm:px-20 bg-gradient-to-t from-purple-50 to-white text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-indigo-500">Bring Order to Chaos</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-10">
            Whether you're a startup founder, a growing team, or a solo creator, LucidDocs helps you turn scattered documents into a single source of truth.
          </p>
          <Image
              src="/docstudio-preview.png" // Replace with your own preview
              alt="DocStudio preview"
              width={800}
              height={500}
              className="rounded-lg shadow-xl mx-auto"
          />
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 sm:px-20 bg-indigo-500 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Start Your Doc Revolution</h2>
          <p className="max-w-xl mx-auto mb-8">
            Join thousands already using DocStudio to create, manage, and share knowledge with ease.
          </p>
          <a
              href="mailto:sameer.sondhi@outlook.com"
              className="bg-white text-indigo-500 px-10 py-4 rounded-full font-bold shadow-md hover:bg-gray-100 transition"
          >
            Request Access
          </a>
        </section>
      </div>
  );
}
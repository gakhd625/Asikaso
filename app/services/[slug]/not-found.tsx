import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <div className="mb-8">
        <span className="text-6xl">🔍</span>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Sorry, we couldn&apos;t find the service you&apos;re looking for. It may have been moved or
        doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white 
        font-semibold px-6 py-3 rounded-lg transition-colors"
      >
        ← Back to Dashboard
      </Link>
    </div>
  );
}

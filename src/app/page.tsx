import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32 bg-white">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
          Visual Artist
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
          Jane Doe
        </h1>
        <p className="max-w-xl text-lg text-gray-500 mb-10">
          Exploring light, texture, and the quiet moments between — through
          paint, photography, and mixed media.
        </p>
        <div className="flex gap-4">
          <Link
            href="/gallery"
            className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-700 transition-colors"
          >
            View Gallery
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:border-gray-900 hover:text-gray-900 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Featured Works preview */}
      <section className="max-w-6xl mx-auto w-full px-6 py-20">
        <h2 className="text-2xl font-semibold text-gray-900 mb-10 text-center">
          Featured Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm"
            >
              Artwork {n}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/gallery"
            className="text-sm font-medium text-gray-600 underline underline-offset-4 hover:text-gray-900 transition-colors"
          >
            See all works →
          </Link>
        </div>
      </section>
    </div>
  );
}
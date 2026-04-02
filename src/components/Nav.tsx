import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight text-gray-900">
          Jane Doe
        </Link>
        <ul className="flex gap-8 text-sm font-medium text-gray-600">
          <li>
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-gray-900 transition-colors">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-900 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
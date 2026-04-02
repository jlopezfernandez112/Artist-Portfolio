export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Jane Doe. All rights reserved.</p>
        <div className="flex gap-5">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            Instagram
          </a>
          <a
            href="mailto:jane@example.com"
            className="hover:text-gray-900 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
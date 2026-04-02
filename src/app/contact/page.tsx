export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Contact</h1>
      <p className="text-gray-500 mb-12">
        For commissions, exhibition enquiries, or just to say hello.
      </p>

      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-2.5 border border-gray-300 rounded text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-2.5 border border-gray-300 rounded text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            placeholder="What would you like to say?"
            className="w-full px-4 py-2.5 border border-gray-300 rounded text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
          />
        </div>

        <button
          type="submit"
          className="self-start px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-700 transition-colors"
        >
          Send Message
        </button>
      </form>

      <div className="mt-16 pt-10 border-t border-gray-200">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Other ways to reach me
        </h2>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>
            Email:{" "}
            <a href="mailto:jane@example.com" className="text-gray-900 hover:underline">
              jane@example.com
            </a>
          </li>
          <li>
            Instagram:{" "}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:underline"
            >
              @janedoe
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
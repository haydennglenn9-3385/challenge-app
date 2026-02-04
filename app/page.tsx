export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight mb-4">
        Queers & Allies Challenges
      </h1>

      <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
        A community-driven movement challenge platform designed to bring people
        together, build healthy habits, and celebrate progress.
      </p>

      <div className="mt-10 flex gap-4">
        <a
          href="/join"
          className="px-6 py-3 rounded-md bg-black text-white text-sm font-medium hover:bg-gray-900 transition"
        >
          Join a Challenge
        </a>

        <a
          href="/create"
          className="px-6 py-3 rounded-md border border-gray-300 text-sm font-medium hover:bg-gray-50 transition"
        >
          Create a Challenge
        </a>
      </div>
    </div>
  );
}

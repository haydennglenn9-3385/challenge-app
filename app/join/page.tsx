export default function JoinPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-6 py-20 flex flex-col items-center">

      {/* Page Heading */}
      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-center mb-6">
        Join a Challenge
      </h1>

      {/* Subheading */}
      <p className="text-slate-600 text-lg max-w-xl text-center mb-12 leading-relaxed">
        Enter a join code or explore public challenges created by the community.
      </p>

      {/* Join Code Form */}
      <div className="w-full max-w-md space-y-6 mb-20">

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">
            Enter your join code
          </label>
          <input
            placeholder="ABC123"
            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
          />
        </div>

        <button className="w-full px-6 py-3 rounded-full bg-black text-white font-medium text-sm hover:bg-slate-800 transition">
          Join Challenge
        </button>

        <a
          href="#public"
          className="w-full px-6 py-3 rounded-full border border-slate-300 text-slate-700 hover:border-slate-400 hover:text-black transition text-center block"
        >
          Browse public challenges
        </a>
      </div>

      {/* Public Challenges Section */}
      <section id="public" className="w-full max-w-5xl">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">
          Public Challenges
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* Placeholder Card 1 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
            <h3 className="text-lg font-semibold">30‑Day Movement Reset</h3>
            <p className="text-sm text-slate-600">
              A gentle, inclusive challenge focused on daily movement and nervous system safety.
            </p>
            <button className="mt-2 px-4 py-2 rounded-full bg-black text-white text-sm hover:bg-slate-800 transition">
              Join
            </button>
          </div>

          {/* Placeholder Card 2 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
            <h3 className="text-lg font-semibold">Queer Strength Circle</h3>
            <p className="text-sm text-slate-600">
              Build strength with community support — no grind culture, just steady progress.
            </p>
            <button className="mt-2 px-4 py-2 rounded-full bg-black text-white text-sm hover:bg-slate-800 transition">
              Join
            </button>
          </div>

          {/* Placeholder Card 3 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
            <h3 className="text-lg font-semibold">Daily Joyful Movement</h3>
            <p className="text-sm text-slate-600">
              A low‑pressure challenge focused on joyful, accessible movement every day.
            </p>
            <button className="mt-2 px-4 py-2 rounded-full bg-black text-white text-sm hover:bg-slate-800 transition">
              Join
            </button>
          </div>

        </div>
      </section>

    </main>
  );
}

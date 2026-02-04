export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col">

      {/* Main content */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-20 space-y-8">

        {/* Hero Tagline */}
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-600/80">
          Trauma-informed • Queer-centered • Strength-first
        </p>

        {/* Apple-style Hero Heading */}
        <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-center leading-tight">
          Turn movement into{" "}
          <span className="bg-gradient-to-tr from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            community power
          </span>
          .
        </h1>

        {/* Supporting Text */}
        <p className="text-slate-600 text-lg max-w-2xl mx-auto text-center leading-relaxed">
          Run inclusive, low-pressure movement challenges that actually feel good—no shame, no leaderboards of doom,
          just steady wins and collective momentum.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="/create"
            className="px-6 py-3 rounded-full bg-black text-white font-medium text-sm hover:bg-slate-800 transition text-center"
          >
            Start a new challenge
          </a>
          <a
            href="/join"
            className="px-6 py-3 rounded-full border border-slate-300 text-slate-700 hover:border-slate-400 hover:text-black transition text-center"
          >
            Join with a code
          </a>
        </div>

        {/* Feature Cards */}
        <div className="mt-20 grid gap-6 sm:grid-cols-3 max-w-5xl w-full">

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
            <p className="text-xs font-medium text-emerald-600">Flexible structure</p>
            <h2 className="text-lg font-semibold">Teams, solo, or hybrid</h2>
            <p className="text-sm text-slate-600">
              Build challenges that work for your people—pair folks up, create pods, or let them move solo with support.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
            <p className="text-xs font-medium text-emerald-600">Trauma-informed</p>
            <h2 className="text-lg font-semibold">No shame, no grind culture</h2>
            <p className="text-sm text-slate-600">
              Center consent, pacing, and nervous system safety while still giving folks a clear, motivating structure.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
            <p className="text-xs font-medium text-emerald-600">Admin-friendly</p>
            <h2 className="text-lg font-semibold">Simple to run, easy to repeat</h2>
            <p className="text-sm text-slate-600">
              Reuse templates, tweak rules, and keep everything in one place instead of juggling spreadsheets and DMs.
            </p>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200 px-6 py-4 text-xs text-slate-500 flex justify-between">
        <span>© {new Date().getFullYear()} Queers & Allies Fitness</span>
        <span>Built with care, not chaos.</span>
      </footer>

    </main>
  );
}

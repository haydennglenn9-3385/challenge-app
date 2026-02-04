export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      {/* Top bar */}
      <header className="w-full border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400" />
          <span className="font-semibold tracking-tight">Queers & Allies Challenges</span>
        </div>
        <button className="text-sm px-3 py-1.5 rounded-full border border-slate-700 hover:border-emerald-400 hover:text-emerald-300 transition">
          Log in
        </button>
      </header>

      {/* Main content */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* Hero */}
        <div className="max-w-3xl text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/80">
            Trauma-informed • Queer-centered • Strength-first
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Turn movement into{" "}
            <span className="bg-gradient-to-tr from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              community power
            </span>
            .
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Run inclusive, low-pressure movement challenges that actually feel good—no shame, no leaderboards of doom,
            just steady wins and collective momentum.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <button className="px-5 py-2.5 rounded-full bg-emerald-400 text-slate-950 font-medium text-sm hover:bg-emerald-300 transition">
              Start a new challenge
            </button>
            <button className="px-5 py-2.5 rounded-full border border-slate-700 text-sm hover:border-slate-500 transition">
              Join with a code
            </button>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3 max-w-4xl w-full">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 space-y-2">
            <p className="text-xs font-medium text-emerald-300">Flexible structure</p>
            <h2 className="text-sm font-semibold">Teams, solo, or hybrid</h2>
            <p className="text-xs text-slate-300">
              Build challenges that work for your people—pair folks up, create pods, or let them move solo with support.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 space-y-2">
            <p className="text-xs font-medium text-emerald-300">Trauma-informed</p>
            <h2 className="text-sm font-semibold">No shame, no grind culture</h2>
            <p className="text-xs text-slate-300">
              Center consent, pacing, and nervous system safety while still giving folks a clear, motivating structure.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 space-y-2">
            <p className="text-xs font-medium text-emerald-300">Admin-friendly</p>
            <h2 className="text-sm font-semibold">Simple to run, easy to repeat</h2>
            <p className="text-xs text-slate-300">
              Reuse templates, tweak rules, and keep everything in one place instead of juggling spreadsheets and DMs.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-slate-800 px-6 py-4 text-xs text-slate-500 flex justify-between">
        <span>© {new Date().getFullYear()} Queers & Allies Fitness</span>
        <span>Built with care, not chaos.</span>
      </footer>
    </main>
  );
}

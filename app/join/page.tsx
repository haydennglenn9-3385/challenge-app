export default function JoinPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 px-6 py-12 space-y-8">
      <h1 className="text-3xl font-semibold">Join a Challenge</h1>

      <div className="space-y-6 max-w-md">
        <div>
          <h2 className="text-sm font-medium text-emerald-300">Browse public challenges</h2>
          <p className="text-xs text-slate-400">See what’s open to everyone.</p>
          <button className="mt-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition text-sm">
            View public challenges
          </button>
        </div>

        <div>
          <h2 className="text-sm font-medium text-emerald-300">Enter a private code</h2>
          <input
            placeholder="ABC123"
            className="mt-2 w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm"
          />
          <button className="mt-3 px-4 py-2 rounded-lg bg-emerald-400 text-slate-950 font-medium text-sm hover:bg-emerald-300 transition">
            Join challenge
          </button>
        </div>
      </div>
    </main>
  );
}

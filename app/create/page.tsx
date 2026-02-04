export default function CreateChallengePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 px-6 py-12 space-y-8">
      <h1 className="text-3xl font-semibold">Create a Challenge</h1>

      <form className="space-y-6 max-w-md">
        <div>
          <label className="text-sm font-medium">Challenge name</label>
          <input
            className="mt-2 w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm"
            placeholder="30‑Day Movement Challenge"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Description</label>
          <textarea
            className="mt-2 w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm"
            placeholder="What’s this challenge about?"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Visibility</label>
          <select className="mt-2 w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm">
            <option>Public</option>
            <option>Private (code required)</option>
          </select>
        </div>

        <button className="px-4 py-2 rounded-lg bg-emerald-400 text-slate-950 font-medium text-sm hover:bg-emerald-300 transition">
          Continue
        </button>
      </form>
    </main>
  );
}

export default function CreateChallengePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-6 py-20 flex flex-col items-center">

      {/* Page Heading */}
      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-center mb-6">
        Create a Challenge
      </h1>

      {/* Subheading */}
      <p className="text-slate-600 text-lg max-w-xl text-center mb-12 leading-relaxed">
        Set up a new movement challenge for your community. Keep it simple, supportive, and fun.
      </p>

      {/* Form Container */}
      <form className="w-full max-w-xl space-y-8">

        {/* Challenge Name */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">
            Challenge name
          </label>
          <input
            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
            placeholder="30‑Day Movement Challenge"
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">
            Description
          </label>
          <textarea
            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
            placeholder="What’s this challenge about?"
            rows={4}
          />
        </div>

        {/* Visibility */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">
            Visibility
          </label>
          <select
            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
          >
            <option>Public</option>
            <option>Private (code required)</option>
          </select>
        </div>

        {/* Continue Button */}
        <button className="w-full px-6 py-3 rounded-full bg-black text-white font-medium text-sm hover:bg-slate-800 transition">
          Continue
        </button>

      </form>

    </main>
  );
}

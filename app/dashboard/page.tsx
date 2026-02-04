"use client";

import confetti from "canvas-confetti";
import ProgressRing from "@/components/ProgressRing";

export default function DashboardPage() {
  function handleLog() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#34d399", "#06b6d4", "#a855f7", "#f472b6"],
    });

    console.log("Movement logged!");
  }

  return (
    <main className="min-h-screen bg-white text-slate-900 px-6 py-20 flex flex-col items-center">

      {/* Hero Section */}
      <section className="w-full max-w-4xl text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
          Your Challenge Dashboard
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
          Track your progress, celebrate your wins, and stay connected with your community.
        </p>
      </section>

      {/* Progress Ring Section */}
      <section className="w-full max-w-md flex flex-col items-center mb-20">
        <ProgressRing progress={40} color="#34d399" />

        <button
          onClick={handleLog}
          className="mt-8 px-6 py-3 rounded-full bg-black text-white font-medium text-sm hover:bg-slate-800 transition"
        >
          Log today’s movement
        </button>
      </section>

      {/* Cards Section */}
      <section className="w-full max-w-5xl grid gap-8 sm:grid-cols-2">

        {/* Streak Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold">Your Streak</h2>
          <p className="text-slate-600 text-sm">
            Keep showing up — every day counts.
          </p>
          <div className="text-4xl font-bold text-emerald-600">3 days</div>
        </div>

        {/* Challenge Overview */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold">Challenge Overview</h2>
          <p className="text-slate-600 text-sm">
            30‑Day Movement Challenge • Day 4 of 30
          </p>
          <p className="text-slate-600 text-sm">
            A gentle, inclusive challenge focused on daily movement and nervous system safety.
          </p>
        </div>

        {/* Team Progress Placeholder */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 sm:col-span-2">
          <h2 className="text-xl font-semibold">Team Progress</h2>
          <p className="text-slate-600 text-sm mb-4">
            See how your team is doing — support each other and celebrate wins.
          </p>

          <div className="w-full h-32 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-400 text-sm">
            Team Progress Visualization Coming Soon
          </div>
        </div>

      </section>

    </main>
  );
}

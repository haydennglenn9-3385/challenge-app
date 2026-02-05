"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getChallenges,
  getStreak,
  Challenge,
} from "@/lib/storage";

// ---------------------------
// Progress Ring Component
// ---------------------------
function ProgressRing({ progress }: { progress: number }) {
  const radius = 32;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const clamped = Math.max(0, Math.min(1, progress));
  const strokeDashoffset = circumference - clamped * circumference;

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="#e5e5e5"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#22c55e"
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset, transition: "stroke-dashoffset 0.4s ease" }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
}

export default function DashboardPage() {
  const router = useRouter();
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [showSettings, setShowSettings] = useState(false);

  // Require profile
  useEffect(() => {
    const profile = localStorage.getItem("userProfile");
    if (!profile) {
      router.push("/profile");
      return;
    }
  }, [router]);

  // Load challenges
  useEffect(() => {
    const list = getChallenges();
    setChallenges(list);
  }, []);

  const handleOpenChallenge = (id: string) => {
    router.push(`/challenge/${id}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("userProfile");
    window.location.href = "/profile";
  };

  return (
    <div className="max-w-xl mx-auto px-6 py-10">
      {/* Header + Settings Icon */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Your Challenges</h1>

        <button
          onClick={() => setShowSettings(true)}
          className="p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Open settings"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h3m-3 6h3m-3 6h3"
            />
          </svg>
        </button>
      </div>

      {challenges.length === 0 && (
        <p className="text-gray-600">
          You haven't joined or created any challenges yet.
        </p>
      )}

      <div className="flex flex-col gap-4">
        {challenges.map((challenge) => {
          const streak = getStreak(challenge.id);
          const progress =
            challenge.duration > 0 ? streak / challenge.duration : 0;

          return (
            <button
              key={challenge.id}
              onClick={() => handleOpenChallenge(challenge.id)}
              className="w-full flex items-center justify-between border rounded-xl px-4 py-4 text-left hover:bg-gray-50 transition"
            >
              <div>
                <p className="text-lg font-medium">{challenge.title}</p>
                <p className="text-sm text-gray-500">
                  {Math.round(progress * 100)}% complete • {streak}-day streak
                </p>
              </div>

              <ProgressRing progress={progress} />
            </button>
          );
        })}
      </div>

      {/* Settings Sheet */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-end">
          <div className="bg-white w-full max-w-xl rounded-t-2xl p-6 shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Settings</h2>

            <button
              onClick={handleLogout}
              className="w-full text-left py-3 text-red-600 font-medium"
            >
              Log out
            </button>

            <button
              onClick={() => setShowSettings(false)}
              className="w-full text-left py-3 text-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

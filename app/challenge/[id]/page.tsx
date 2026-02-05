"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";
import {
  getChallengeById,
  getStreak,
  getLastCheckIn,
  checkIn,
  Challenge,
} from "@/lib/storage";

// ---------------------------
// Progress Ring Component
// ---------------------------
function ProgressRing({ progress }: { progress: number }) {
  const radius = 40;
  const stroke = 7;
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

export default function ChallengeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // ✅ Unwrap async params (Next.js 14+ requirement)
  const { id } = React.use(params);

  const router = useRouter();
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [streak, setStreak] = useState(0);
  const [lastCheck, setLastCheck] = useState<string | null>(null);

  useEffect(() => {
    const found = getChallengeById(id);

    if (!found) {
      router.push("/dashboard");
      return;
    }

    setChallenge(found);
    setStreak(getStreak(found.id));
    setLastCheck(getLastCheckIn(found.id));
  }, [id, router]);

  const handleCheckIn = () => {
    if (!challenge) return;

    const today = new Date().toDateString();
    if (lastCheck === today) return;

    const newStreak = checkIn(challenge.id);
    setStreak(newStreak);
    setLastCheck(today);

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
    });
  };

  if (!challenge) {
    return (
      <div className="max-w-xl mx-auto px-6 py-10">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  const progress =
    challenge.duration > 0 ? streak / challenge.duration : 0;

  const today = new Date().toDateString();
  const alreadyCheckedIn = lastCheck === today;

  return (
    <div className="max-w-xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold mb-2">{challenge.title}</h1>
      <p className="text-gray-600 mb-6">{challenge.description}</p>

      {/* Progress Ring */}
      <div className="flex justify-center mb-6">
        <ProgressRing progress={progress} />
      </div>

      <p className="text-center text-lg font-medium mb-1">
        {Math.round(progress * 100)}% complete
      </p>
      <p className="text-center text-gray-500 mb-6">
        {streak}-day streak
      </p>

      {/* Daily Task */}
      <div className="mb-6">
        <p className="text-sm text-gray-500">Today's Task</p>
        <p className="text-lg font-medium">{challenge.task}</p>
      </div>

      {/* Duration */}
      <div className="mb-6">
        <p className="text-sm text-gray-500">Duration</p>
        <p className="text-lg font-medium">{challenge.duration} days</p>
      </div>

      {/* Join Code */}
      <div className="mb-8">
        <p className="text-sm text-gray-500">Join Code</p>
        <p className="font-mono tracking-wide text-lg">
          {challenge.joinCode}
        </p>
      </div>

      {/* Check-in Button */}
      <button
        onClick={handleCheckIn}
        disabled={alreadyCheckedIn}
        className={`w-full py-3 rounded-lg font-medium transition ${
          alreadyCheckedIn
            ? "bg-gray-300 text-gray-600"
            : "bg-black text-white hover:bg-gray-900"
        }`}
      >
        {alreadyCheckedIn ? "Checked in today" : "Check In"}
      </button>

      {/* Team Leaderboard */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Team</h2>

        {challenge.team.length === 0 && (
          <p className="text-gray-500">No team members yet.</p>
        )}

        <div className="flex flex-col gap-3">
          {challenge.team.map((member) => (
            <div
              key={member.name}
              className="flex justify-between border rounded-lg px-4 py-3"
            >
              <span className="font-medium">{member.name}</span>
              <span className="text-gray-600">{member.score} pts</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

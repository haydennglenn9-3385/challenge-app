"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getChallenges,
  getStreak,
  Challenge,
} from "@/lib/storage";

// Progress Ring Component
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

  useEffect(() => {
    const profile = localStorage.getItem("userProfile");
    if (!profile) {
      router.push("/profile");
      return;
    }
  }, [router]);

  useEffect(() => {
    const list = getChallenges();
    setChallenges(list);
  }, []);

  const handleOpenChallenge = (id: string) => {
    router.push(`/challenge/${id}`);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Your Challenges</h2>

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
    </div>
  );
}

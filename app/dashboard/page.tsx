"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Challenge = {
  title: string;
  description: string;
  duration: number;
  task: string;
  joinCode: string;
  createdAt: string;
};

type TeamMember = {
  name: string;
  score: number;
};

function ProgressRing({ progress }: { progress: number }) {
  const radius = 40;
  const stroke = 8;
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
        strokeDasharray={circumference + " " + circumference}
        style={{ strokeDashoffset, transition: "stroke-dashoffset 0.4s ease" }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
}

function Confetti({ visible }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-50">
      <div className="text-5xl animate-bounce">🎉</div>
    </div>
  );
}

export default function DashboardPage() {
  const router = useRouter();

  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [streak, setStreak] = useState(0);
  const [checkedInToday, setCheckedInToday] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [team, setTeam] = useState<TeamMember[]>([]);

  // Require profile
  useEffect(() => {
    const profile = localStorage.getItem("userProfile");
    if (!profile) {
      router.push("/profile");
      return;
    }
  }, [router]);

  // Load challenge, streak, team
  useEffect(() => {
    const storedChallenge = localStorage.getItem("currentChallenge");
    if (storedChallenge) {
      setChallenge(JSON.parse(storedChallenge));
    }

    const storedStreak = localStorage.getItem("streak");
    if (storedStreak) {
      setStreak(Number(storedStreak));
    }

    const today = new Date().toDateString();
    const lastCheck = localStorage.getItem("lastCheckIn");
    if (lastCheck === today) {
      setCheckedInToday(true);
    }

    // Mock team data (auto-assign feel)
    setTeam([
      { name: "You", score: 10 },
      { name: "Alex", score: 8 },
      { name: "Sam", score: 6 },
      { name: "Jordan", score: 4 },
    ]);
  }, []);

  const handleCheckIn = () => {
    const today = new Date().toDateString();
    const lastCheck = localStorage.getItem("lastCheckIn");

    if (lastCheck !== today) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      localStorage.setItem("streak", String(newStreak));
      localStorage.setItem("lastCheckIn", today);
      setCheckedInToday(true);

      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1200);
    }
  };

  if (!challenge) {
    return (
      <div className="max-w-xl mx-auto px-6 py-10">
        <p className="text-gray-600">
          No challenge found. Create one first.
        </p>
      </div>
    );
  }

  const progress =
    challenge.duration > 0 ? streak / challenge.duration : 0;

  return (
    <div className="max-w-xl mx-auto px-6 py-10 relative">
      <Confetti visible={showConfetti} />

      {/* Header */}
      <h1 className="text-3xl font-semibold mb-2">{challenge.title}</h1>
      <p className="text-gray-600 mb-4">{challenge.description}</p>

      {/* Join code */}
      <div className="mb-6">
        <p className="text-sm text-gray-500 mb-1">Share this join code</p>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm">
          <span className="font-mono tracking-wide">
            {challenge.joinCode}
          </span>
        </div>
      </div>

      {/* Stats row */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-sm text-gray-500">Duration</p>
          <p className="text-lg font-medium">{challenge.duration} days</p>
        </div>

        <div className="flex flex-col items-center">
          <ProgressRing progress={progress} />
          <p className="text-xs text-gray-500 mt-2">
            {Math.round(progress * 100)}% complete
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Streak</p>
          <p className="text-lg font-medium">{streak} days 🔥</p>
        </div>
      </div>

      {/* Today's Task */}
      <div className="mb-8">
        <p className="text-sm text-gray-500 mb-1">Today's Task</p>
        <p className="text-lg font-medium">{challenge.task}</p>
      </div>

      {/* Check In Button */}
      <button
        onClick={handleCheckIn}
        disabled={checkedInToday}
        className={`w-full py-3 rounded-lg font-medium transition ${
          checkedInToday
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-black text-white hover:bg-gray-900"
        }`}
      >
        {checkedInToday ? "Checked In Today" : "Check In"}
      </button>

      {/* Team Dashboard */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-3">Team Leaderboard</h2>
        <div className="space-y-2">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="flex items-center justify-between border rounded-lg px-4 py-2"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">
                  #{index + 1}
                </span>
                <span className="font-medium">{member.name}</span>
              </div>
              <span className="text-sm font-semibold">
                {member.score} pts
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

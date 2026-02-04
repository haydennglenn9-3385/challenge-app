"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [challenge, setChallenge] = useState<any>(null);
  const [streak, setStreak] = useState(0);
  const [checkedInToday, setCheckedInToday] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("currentChallenge");
    if (stored) {
      setChallenge(JSON.parse(stored));
    }

    const streakValue = localStorage.getItem("streak");
    if (streakValue) setStreak(Number(streakValue));

    const today = new Date().toDateString();
    const lastCheck = localStorage.getItem("lastCheckIn");

    if (lastCheck === today) {
      setCheckedInToday(true);
    }
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
    }
  };

  if (!challenge) {
    return (
      <div className="max-w-xl mx-auto px-6 py-10">
        <p className="text-gray-600">No challenge found. Create one first.</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold mb-2">{challenge.title}</h1>
      <p className="text-gray-600 mb-6">{challenge.description}</p>

      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-sm text-gray-500">Duration</p>
          <p className="text-lg font-medium">{challenge.duration} days</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Streak</p>
          <p className="text-lg font-medium">{streak} days 🔥</p>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-sm text-gray-500 mb-1">Today's Task</p>
        <p className="text-lg font-medium">{challenge.task}</p>
      </div>

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
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getChallengeByJoinCode,
  addChallenge,
  autoAssignTeam,
  Challenge,
} from "@/lib/storage";

export default function JoinCodePage({
  params,
}: {
  params: { code: string };
}) {
  const router = useRouter();
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const found = getChallengeByJoinCode(params.code.toUpperCase());
    setChallenge(found || null);
    setLoading(false);
  }, [params.code]);

  const handleJoin = () => {
    if (!challenge) return;

    // Get user profile
    const profileRaw = localStorage.getItem("userProfile");
    if (!profileRaw) {
      router.push("/profile");
      return;
    }

    const profile = JSON.parse(profileRaw);
    const userName = profile.name || "You";

    // Auto-assign team
    const updated = autoAssignTeam(challenge, userName);

    // Add challenge to user's list
    addChallenge(updated);

    router.push("/dashboard");
  };

  if (loading) {
    return (
      <div className="max-w-xl mx-auto px-6 py-10">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!challenge) {
    return (
      <div className="max-w-xl mx-auto px-6 py-10">
        <p className="text-red-600 font-medium">
          No challenge found with this code.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold mb-2">{challenge.title}</h1>
      <p className="text-gray-600 mb-6">{challenge.description}</p>

      <div className="mb-6">
        <p className="text-sm text-gray-500">Duration</p>
        <p className="text-lg font-medium">{challenge.duration} days</p>
      </div>

      <div className="mb-6">
        <p className="text-sm text-gray-500">Daily Task</p>
        <p className="text-lg font-medium">{challenge.task}</p>
      </div>

      <div className="mb-8">
        <p className="text-sm text-gray-500">Join Code</p>
        <p className="font-mono tracking-wide text-lg">{challenge.joinCode}</p>
      </div>

      <button
        onClick={handleJoin}
        className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition"
      >
        Join Challenge
      </button>
    </div>
  );
}

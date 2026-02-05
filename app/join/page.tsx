"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getChallengeByJoinCode } from "@/lib/storage";

export default function JoinPage() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const formatted = code.trim().toUpperCase();

    if (!formatted) {
      setError("Enter a join code");
      return;
    }

    const challenge = getChallengeByJoinCode(formatted);

    if (!challenge) {
      setError("No challenge found with that code");
      return;
    }

    router.push(`/join/${formatted}`);
  };

  return (
    <div className="max-w-xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold mb-6">Join a Challenge</h1>

      <div className="flex flex-col gap-4">
        <input
          className="w-full border rounded-lg px-4 py-2 uppercase tracking-wide"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
            setError("");
          }}
          placeholder="ENTER CODE"
        />

        {error && (
          <p className="text-red-600 text-sm font-medium">{error}</p>
        )}

        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

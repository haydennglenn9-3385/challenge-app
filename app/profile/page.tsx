"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("userProfile");
    if (stored) {
      const profile = JSON.parse(stored);
      setName(profile.name || "");
      setPronouns(profile.pronouns || "");
      setEmail(profile.email || "");
    }
  }, []);

  const handleSave = () => {
    if (!name.trim()) {
      setError("Name is required");
      return;
    }
    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    const profile = { name, pronouns, email };
    localStorage.setItem("userProfile", JSON.stringify(profile));
    router.push("/dashboard");
  };

  return (
    <div className="max-w-xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold mb-6">Your Profile</h1>

      {error && (
        <div className="mb-4 text-red-600 text-sm font-medium">
          {error}
        </div>
      )}

      <div className="flex flex-col gap-6">
        <div>
          <label className="block text-sm font-medium mb-1">Name *</label>
          <input
            className="w-full border rounded-lg px-4 py-2"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError("");
            }}
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Pronouns (optional)</label>
          <input
            className="w-full border rounded-lg px-4 py-2"
            value={pronouns}
            onChange={(e) => setPronouns(e.target.value)}
            placeholder="they/them"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email *</label>
          <input
            type="email"
            className="w-full border rounded-lg px-4 py-2"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            placeholder="you@example.com"
          />
        </div>

        <button
          onClick={handleSave}
          className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition"
        >
          Save Profile
        </button>
      </div>
    </div>
  );
}

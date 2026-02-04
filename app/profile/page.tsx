"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [avatarColor, setAvatarColor] = useState("#a3a3a3");

  useEffect(() => {
    const stored = localStorage.getItem("userProfile");
    if (stored) {
      const profile = JSON.parse(stored);
      setName(profile.name || "");
      setPronouns(profile.pronouns || "");
      setAvatarColor(profile.avatarColor || "#a3a3a3");
    }
  }, []);

  const handleSave = () => {
    const profile = { name, pronouns, avatarColor };
    localStorage.setItem("userProfile", JSON.stringify(profile));
    router.push("/dashboard");
  };

  return (
    <div className="max-w-xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold mb-6">Your Profile</h1>

      <div className="flex flex-col gap-6">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            className="w-full border rounded-lg px-4 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Pronouns</label>
          <input
            className="w-full border rounded-lg px-4 py-2"
            value={pronouns}
            onChange={(e) => setPronouns(e.target.value)}
            placeholder="they/them"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Avatar Color</label>
          <input
            type="color"
            className="w-16 h-10 p-0 border rounded"
            value={avatarColor}
            onChange={(e) => setAvatarColor(e.target.value)}
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

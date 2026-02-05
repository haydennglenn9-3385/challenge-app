"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const router = useRouter();
  const [name, setName] = useState("");

  useEffect(() => {
    const profile = localStorage.getItem("userProfile");
    if (profile) {
      const parsed = JSON.parse(profile);
      setName(parsed.name || "");
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify({ name }));
    router.push("/dashboard");
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>

      <label className="block text-sm text-gray-600 mb-1">Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 mb-4"
      />

      <button
        onClick={handleSave}
        className="w-full py-3 bg-black text-white rounded-lg font-medium"
      >
        Save
      </button>
    </div>
  );
}

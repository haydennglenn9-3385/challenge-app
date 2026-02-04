"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function generateJoinCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

export default function CreateChallengePage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(7);
  const [task, setTask] = useState("");

  const handleCreate = () => {
    const joinCode = generateJoinCode();

    const challenge = {
      title,
      description,
      duration,
      task,
      joinCode,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("currentChallenge", JSON.stringify(challenge));
    router.push("/dashboard");
  };

  return (
    <div className="max-w-xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold mb-6">Create a Challenge</h1>

      <div className="flex flex-col gap-6">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            className="w-full border rounded-lg px-4 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="30-Day Movement Challenge"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            className="w-full border rounded-lg px-4 py-2"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="A challenge to help you move your body daily."
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Duration (days)</label>
          <input
            type="number"
            className="w-full border rounded-lg px-4 py-2"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Daily Task</label>
          <input
            className="w-full border rounded-lg px-4 py-2"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Walk 20 minutes"
          />
        </div>

        <button
          onClick={handleCreate}
          className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition"
        >
          Create Challenge
        </button>
      </div>
    </div>
  );
}

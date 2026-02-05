"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Import Supabase ONLY on the client
    const { supabase } = await import("@/lib/supabaseClient");

    // 1. Create the user in Supabase Auth
    const { data, error: signupError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signupError) {
      setLoading(false);
      setError(signupError.message);
      return;
    }

    // 2. Create the user profile in the "users" table
    if (data.user) {
      await supabase.from("users").insert({
        id: data.user.id,
        name,
        avatar_url: null,
      });
    }

    setLoading(false);
    router.push("/login");
  };

  return (
    <div className="max-w-md mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold mb-6">Create Account</h1>

      <form onSubmit={handleSignup} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">Password</label>
          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        {/* Error */}
        {error && <p className="text-sm text-red-600">{error}</p>}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-900 transition"
        >
          {loading ? "Creating account..." : "Sign up"}
        </button>
      </form>

      <p className="mt-4 text-sm text-gray-600">
        Already have an account{" "}
        <button
          onClick={() => router.push("/login")}
          className="underline"
        >
          Log in
        </button>
      </p>
    </div>
  );
}

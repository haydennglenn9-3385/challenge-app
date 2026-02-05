"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [showSettings, setShowSettings] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    async function checkSession() {
      const { supabase } = await import("@/lib/supabaseClient");
      const { data } = await supabase.auth.getSession();
      setLoggedIn(!!data.session);
    }
    checkSession();
  }, []);

  const handleLogout = async () => {
    const { supabase } = await import("@/lib/supabaseClient");
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <>
      <header className="flex justify-between items-center px-6 py-4 border-b bg-white">
        <h1
          className="text-xl font-semibold cursor-pointer"
          onClick={() =>
            (window.location.href = loggedIn ? "/dashboard" : "/login")
          }
        >
          Challenge App
        </h1>

        <div className="flex items-center gap-4">
          {loggedIn && (
            <button onClick={() => (window.location.href = "/profile")}>
              <img
                src="/default-avatar.png"
                className="w-8 h-8 rounded-full border"
                alt="Profile"
              />
            </button>
          )}

          {loggedIn && (
            <button
              onClick={() => setShowSettings(true)}
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          )}
        </div>
      </header>

      {showSettings && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-end z-50">
          <div className="bg-white w-full max-w-xl rounded-t-2xl p-6 shadow-xl animate-slide-up">
            <h2 className="text-xl font-semibold mb-4">Settings</h2>

            <button
              onClick={handleLogout}
              className="w-full text-left py-3 text-red-600 font-medium"
            >
              Log out
            </button>

            <button
              onClick={() => setShowSettings(false)}
              className="w-full text-left py-3 text-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

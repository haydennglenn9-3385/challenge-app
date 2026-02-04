export default function NavBar() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur border-b border-slate-200 px-8 py-4 flex items-center justify-between">
      {/* Left side: Logo */}
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400" />
        <span className="font-semibold tracking-tight text-slate-900">
          Queers & Allies
        </span>
      </div>

      {/* Center links */}
      <div className="hidden sm:flex items-center gap-8 text-sm text-slate-700">
        <a href="/" className="hover:text-black transition">Home</a>
        <a href="/join" className="hover:text-black transition">Join</a>
        <a href="/create" className="hover:text-black transition">Create</a>
      </div>

      {/* Right side: Login */}
      <button className="text-sm px-4 py-1.5 rounded-full border border-slate-300 text-slate-700 hover:border-slate-400 hover:text-black transition">
        Log in
      </button>
    </nav>
  );
}

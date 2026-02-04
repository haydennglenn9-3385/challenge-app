export default function NavBar() {
  return (
    <nav className="w-full border-b border-slate-800 px-6 py-4 flex items-center justify-between bg-slate-950/80 backdrop-blur">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400" />
        <span className="font-semibold tracking-tight">Queers & Allies</span>
      </div>

      <div className="flex items-center gap-6 text-sm">
        <a href="/" className="hover:text-emerald-300 transition">Home</a>
        <a href="/join" className="hover:text-emerald-300 transition">Join</a>
        <a href="/create" className="hover:text-emerald-300 transition">Create</a>
      </div>

      <button className="text-sm px-3 py-1.5 rounded-full border border-slate-700 hover:border-emerald-400 hover:text-emerald-300 transition">
        Log in
      </button>
    </nav>
  );
}

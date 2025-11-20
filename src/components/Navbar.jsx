import { Menu, Search, Briefcase, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 backdrop-blur bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-amber-400 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">Magneto AI Jobs</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a className="hover:text-white transition-colors" href="#features">Características</a>
          <a className="hover:text-white transition-colors" href="#jobs">Trabajos</a>
          <a className="hover:text-white transition-colors" href="#faq">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-white/10 text-white hover:bg-white/15 transition-colors">
            <Briefcase className="h-4 w-4" /> Publicar empleo
          </button>
          <button className="inline-flex md:hidden p-2 rounded-lg hover:bg-white/10 text-white">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

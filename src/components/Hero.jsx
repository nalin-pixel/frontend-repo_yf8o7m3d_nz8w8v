import Spline from '@splinetool/react-spline';
import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/95 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs border border-white/15 mb-5">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Nuevo • Agente de IA para búsqueda de empleos
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Encuentra trabajos con un agente de IA que busca por ti
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl">
            Habla con un asistente inteligente que entiende lo que buscas y te recomienda oportunidades relevantes en segundos.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:max-w-xl">
            <div className="flex-1 bg-white/10 border border-white/15 rounded-xl px-3 py-2 flex items-center gap-2">
              <Search className="h-4 w-4 text-slate-200" />
              <input
                className="bg-transparent outline-none text-white placeholder:text-slate-400 flex-1"
                placeholder="Rol, tecnología o empresa (ej. React, Marketing)"
              />
            </div>
            <button className="px-5 py-2.5 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-amber-400 text-white font-medium shadow-lg shadow-indigo-500/20 hover:brightness-110 transition">
              Buscar ahora
            </button>
          </div>

          <p className="mt-4 text-sm text-slate-400">
            Tendencias: Desarrollador Frontend, Analista de Datos, UX/UI
          </p>
        </div>
      </div>
    </section>
  );
}

import { Bot, Sparkles, Clock, Filter } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: Bot,
      title: "Agente inteligente",
      desc: "Describe tu perfil y tus preferencias. El asistente analiza miles de ofertas y aprende de tus gustos.",
    },
    {
      icon: Filter,
      title: "Filtros avanzados",
      desc: "Filtra por cargo, modalidad, salario, ubicación, tecnologías y más. Resultados precisos en segundos.",
    },
    {
      icon: Clock,
      title: "Alertas en tiempo real",
      desc: "Recibe notificaciones cuando aparezcan ofertas que encajen con tu perfil.",
    },
    {
      icon: Sparkles,
      title: "Postulación asistida",
      desc: "Genera cartas de presentación y adapta tu CV con ayuda de IA para cada oferta.",
    },
  ];

  return (
    <section id="features" className="relative py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Todo lo que necesitas para encontrar tu próximo trabajo
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-amber-400 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
              <p className="text-slate-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

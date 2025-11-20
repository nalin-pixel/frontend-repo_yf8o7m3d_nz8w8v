import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import JobSearch from './components/JobSearch'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <JobSearch />
      <footer className="py-10 text-center text-slate-400 border-t border-white/10 bg-slate-950/60">
        Construido con un agente de IA • Inspirado en Magneto
      </footer>
    </div>
  )
}

export default App

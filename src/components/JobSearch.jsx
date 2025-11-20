import { useEffect, useState } from 'react'
import { MapPin, Building2, Wallet, ArrowRight } from 'lucide-react'

export default function JobSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const search = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${baseUrl}/jobs/search?q=${encodeURIComponent(query)}`)
      if (!res.ok) throw new Error('Error al buscar empleos')
      const data = await res.json()
      setResults(data.jobs || [])
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // initial sample fetch
    search()
  }, [])

  return (
    <section id="jobs" className="py-16 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Resultados</h2>
          <div className="flex w-full sm:w-auto gap-2">
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Buscar por rol o tecnología"
              className="flex-1 sm:w-80 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 outline-none"
            />
            <button onClick={search} className="px-4 py-2 rounded-xl bg-indigo-500 text-white hover:bg-indigo-600 transition">Buscar</button>
          </div>
        </div>
        {error && <p className="text-red-400 mb-4">{error}</p>}
        {loading ? (
          <p className="text-slate-300">Buscando empleos...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.map((job, idx) => (
              <article key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <h3 className="text-white font-semibold mb-1">{job.title}</h3>
                <p className="text-slate-300 text-sm mb-3">{job.description}</p>
                <div className="flex flex-wrap gap-3 text-slate-300 text-sm">
                  {job.company && (
                    <span className="inline-flex items-center gap-1"><Building2 className="h-4 w-4" /> {job.company}</span>
                  )}
                  {job.location && (
                    <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {job.location}</span>
                  )}
                  {job.salary && (
                    <span className="inline-flex items-center gap-1"><Wallet className="h-4 w-4" /> {job.salary}</span>
                  )}
                </div>
                {job.url && (
                  <a href={job.url} target="_blank" className="mt-3 inline-flex items-center gap-2 text-indigo-300 hover:text-indigo-200">
                    Ver oferta <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </article>
            ))}
            {!results.length && (
              <div className="text-slate-400">No hay resultados por ahora. Intenta una búsqueda.</div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'

function Kuppi() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
          Case Study
        </p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">KUPPI</h1>
        <p className="max-w-3xl text-lg text-slate-300">
          KUPPI is a loyalty-first cafe experience designed to blend mobile
          ordering, rewards, and playful brand storytelling into a single
          companion app.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-xl font-semibold text-white">My Role</h2>
          <p className="mt-3 text-slate-300">
            Product strategy, UX flows, visual system, and storytelling for the
            case study presentation.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-xl font-semibold text-white">Outcome</h2>
          <p className="mt-3 text-slate-300">
            A cohesive end-to-end experience that highlights how loyalty data
            can personalize coffee moments and build repeat visits.
          </p>
        </div>
      </div>
      <Link
        to="/"
        className="inline-flex items-center text-sm font-semibold text-indigo-300 hover:text-indigo-200"
      >
        ← Back to projects
      </Link>
    </section>
  )
}

export default Kuppi

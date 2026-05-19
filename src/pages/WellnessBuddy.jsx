import { Link } from 'react-router-dom'

function WellnessBuddy() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
          Case Study
        </p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">
          WellnessBuddy
        </h1>
        <p className="max-w-3xl text-lg text-slate-300">
          WellnessBuddy is a habit and wellbeing assistant that helps users
          stay grounded with daily check-ins, gentle reminders, and progress
          insights.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-xl font-semibold text-white">My Role</h2>
          <p className="mt-3 text-slate-300">
            UX research, interaction design, and narrative for the product
            walkthrough.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-xl font-semibold text-white">Outcome</h2>
          <p className="mt-3 text-slate-300">
            A calm interface that balances habit tracking with mindful coaching
            to reduce friction in everyday wellness routines.
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

export default WellnessBuddy

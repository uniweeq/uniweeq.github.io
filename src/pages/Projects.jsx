import { Link } from 'react-router-dom'

const projects = [
  {
    name: 'KUPPI',
    description: 'A cafe loyalty and ordering experience that blends rewards with real-time ordering.',
    to: '/projects/kuppi',
  },
  {
    name: 'WellnessBuddy',
    description: 'A wellness companion that guides users through daily habits and mindful check-ins.',
    to: '/projects/wellness-buddy',
  },
]

function Projects() {
  return (
    <section className="space-y-10">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
          Selected Projects
        </p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">
          Building thoughtful digital experiences.
        </h1>
        <p className="max-w-2xl text-lg text-slate-300">
          I craft product experiences that feel calm, intentional, and helpful.
          Explore two recent case studies that showcase UX strategy, branding,
          and product storytelling.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.name}
            to={project.to}
            className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-indigo-400/60 hover:bg-slate-900"
          >
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-white">
                {project.name}
              </h2>
              <p className="text-slate-300">{project.description}</p>
              <span className="inline-flex items-center text-sm font-semibold text-indigo-300 group-hover:text-indigo-200">
                View case study →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Projects

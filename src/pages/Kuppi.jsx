import { Link } from 'react-router-dom'

const cardClasses = 'rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'
const badgeClasses =
  'rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600'
const statClasses = 'rounded-2xl border border-slate-200 bg-slate-50 p-4'
const highlightRoleClasses =
  'rounded-2xl border border-purple-200 bg-purple-50 p-4 text-slate-900'
const roleClasses = 'rounded-2xl border border-slate-200 bg-slate-50 p-4'
const trailerVideoId = 'kuppi-trailer'

const problemItems = [
  'Cognitive load',
  'Language barriers',
  'Time pressure',
  'Uncertain standards',
]

const roleCards = [
  {
    title: 'Firmware engineer',
    description: 'C++ firmware, FreeRTOS dual-core',
    highlight: true,
  },
  {
    title: 'Dashboard developer',
    description: 'Flask, Supabase, SSE',
    highlight: true,
  },
  {
    title: 'Team project',
    description: '4-person team, SUTD Spring 2026',
    highlight: false,
  },
  {
    title: 'Hardware assembly',
    description: 'ESP32, NFC, TFT, LiPo',
    highlight: false,
  },
]

const flowSteps = [
  'Scan staff card',
  'Tap door NFC',
  '6 zones appear red',
  'Scan zone tag',
  'Complete checklist',
  'Room marked ready',
]

const techStack = [
  {
    title: 'Firmware',
    items: ['C++', 'FreeRTOS', 'ESP-IDF'],
  },
  {
    title: 'Backend',
    items: ['Flask', 'Supabase', 'SSE'],
  },
  {
    title: 'Dashboard',
    items: ['React', 'Tailwind CSS', 'Realtime charts'],
  },
  {
    title: 'Hardware',
    items: ['ESP32', 'NFC', 'TFT', 'LiPo'],
  },
]

const lessons = [
  'Partitioning tasks across FreeRTOS cores keeps sensor IO stable while the UI updates in parallel.',
  'Simple, high-contrast flows reduce errors for non-technical cleanroom staff under pressure.',
  'Prototype constraints forced us to prioritize reliable NFC reads over ambitious enclosure designs.',
]

function Kuppi() {
  return (
    <section className="space-y-8">
      <Link
        to="/projects"
        className="inline-flex items-center text-sm font-semibold text-indigo-300 hover:text-indigo-200"
      >
        ← Back to projects
      </Link>

      <div className={`${cardClasses} space-y-6 text-slate-900`}>
        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${trailerVideoId}`}
            title="KUPPI trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {['IoT', 'Design and Engineering', '2026'].map((item) => (
            <span key={item} className={badgeClasses}>
              {item}
            </span>
          ))}
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-semibold sm:text-5xl">KUPPI</h1>
          <p className="max-w-3xl text-lg text-slate-600">
            A cleanroom readiness system that guides staff through consistent
            sanitization steps while streaming live zone status to a dashboard.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { value: '6', label: 'Zones tracked' },
            { value: '2', label: 'FreeRTOS cores' },
            { value: 'Live', label: 'SSE dashboard' },
          ].map((stat) => (
            <div key={stat.label} className={statClasses}>
              <p className="text-2xl font-semibold">{stat.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={`${cardClasses} space-y-4 text-slate-900`}>
        <h2 className="text-2xl font-semibold">The problem</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {problemItems.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className={`${cardClasses} space-y-4 text-slate-900`}>
        <h2 className="text-2xl font-semibold">My role</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {roleCards.map((role) => (
            <div
              key={role.title}
              className={role.highlight ? highlightRoleClasses : roleClasses}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                {role.title}
              </p>
              <p className="mt-2 text-slate-700">{role.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={`${cardClasses} space-y-4 text-slate-900`}>
        <h2 className="text-2xl font-semibold">How it works</h2>
        <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-700">
          {flowSteps.map((step, index) => (
            <div key={step} className="flex items-center gap-3">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
                {step}
              </span>
              {index < flowSteps.length - 1 && (
                <span className="text-slate-400">→</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={`${cardClasses} space-y-4 text-slate-900`}>
        <h2 className="text-2xl font-semibold">Tech stack</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {techStack.map((group) => (
            <div key={group.title} className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                {group.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${cardClasses} space-y-4 text-slate-900`}>
        <h2 className="text-2xl font-semibold">The build</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <figure className="space-y-2">
            <div className="h-48 overflow-hidden rounded-2xl bg-slate-100">
              <img
                alt="Device UI · NFC zone interaction"
                className="block h-full w-full object-cover"
                decoding="async"
                loading="lazy"
                src="/images/kuppi/kuppi-dashboard.png"
              />
            </div>
            <figcaption className="text-xs font-medium text-slate-500">
              Device UI · NFC zone interaction
            </figcaption>
          </figure>
          <figure className="space-y-2">
            <div className="h-48 overflow-hidden rounded-2xl bg-slate-100">
              <img
                alt="Supervisor dashboard · real-time SSE"
                className="block h-full w-full object-cover"
                decoding="async"
                loading="lazy"
                // src="/images/kuppi/kuppi-dashboard.png"
                src="/images/kuppi/kuppi-device.gif"
              />
            </div>
            <figcaption className="text-xs font-medium text-slate-500">
              Supervisor dashboard · real-time SSE
            </figcaption>
          </figure>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              src: '/images/kuppi/kuppi-hero.jpg',
              label: 'KUPPI in hand',
            },
            {
              src: '/images/kuppi/kuppi-inuse.jpg',
              label: 'Device screen on',
            },
            {
              src: '/images/kuppi/kuppi-cad.jpg',
              label: 'Casing engineering drawing — by teammate',
            },
          ].map((item) => (
            <figure key={item.src} className="space-y-2">
              <div className="h-36 overflow-hidden rounded-2xl bg-slate-100">
                <img
                  alt={item.label}
                  className="block h-full w-full object-cover"
                  decoding="async"
                  loading="lazy"
                  src={item.src}
                />
              </div>
              <figcaption className="text-xs font-medium text-slate-500">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className={`${cardClasses} space-y-4 text-slate-900`}>
        <h2 className="text-2xl font-semibold">What I learned</h2>
        <ol className="space-y-3 text-slate-700">
          {lessons.map((lesson, index) => (
            <li key={lesson} className="flex gap-3">
              <span className="text-sm font-semibold text-slate-500">
                {index + 1}.
              </span>
              <p>{lesson}</p>
            </li>
          ))}
        </ol>
      </div>

      <p className="text-xs text-slate-400">
        Developed with AI-assisted tooling. Architecture and system decisions
        driven by the team.
      </p>
    </section>
  )
}

export default Kuppi

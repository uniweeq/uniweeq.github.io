import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const projects = [
  {
    number: '01',
    title: 'KUPPI',
    tagline: 'Clean rooms, clear minds',
    description:
      'KUPPI is a holistic cleanroom companion that connects IoT air-quality sensors with a calming mobile experience. It turns lab data into actionable nudges, helping teams sustain compliance without sacrificing focus.',
    stats: [
      { value: '18', label: 'IoT nodes installed' },
      { value: '4', label: 'Cleanroom zones' },
      { value: '92%', label: 'Alert response rate' },
    ],
    contributions: [
      'Product strategy',
      'UX flows',
      'Hardware prototyping',
      'Visual system',
    ],
    techStack: ['ESP32', 'TensorFlow Lite', 'React Native', 'Figma'],
    githubUrl: 'https://github.com/uniweeq/kuppi',
    trailerUrl: 'https://youtu.be/kuppi-trailer',
    caseStudyUrl: '/projects/kuppi',
    theme: { bg: '#EEEDFE', text: '#3C3489' },
    visual: {
      kicker: 'Air-quality hub',
      headline: 'Live lab health scores',
      detail: 'Real-time particle tracking',
    },
  },
  {
    number: '02',
    title: 'Wellness Buddy',
    tagline: 'Productivity powered by personality',
    description:
      'Wellness Buddy blends personality science with habit tracking to build routines that stick. The experience adapts tone, check-ins, and coaching prompts to each user archetype.',
    stats: [
      { value: '12', label: 'Personality profiles' },
      { value: '5', label: 'Daily ritual flows' },
      { value: '94%', label: 'Weekly retention' },
    ],
    contributions: [
      'Research synthesis',
      'Interaction design',
      'Content strategy',
      'Prototype testing',
    ],
    techStack: ['React', 'Framer Motion', 'Notion API', 'Illustrator'],
    githubUrl: 'https://github.com/uniweeq/wellness-buddy',
    trailerUrl: 'https://youtu.be/wellness-buddy-trailer',
    caseStudyUrl: '/projects/wellness-buddy',
    theme: { bg: '#FAEEDA', text: '#633806' },
    visual: {
      kicker: 'Mood-aware guidance',
      headline: 'Personalized daily prompts',
      detail: 'Adaptive coaching flows',
    },
  },
]

function Projects() {
  const [visibleSections, setVisibleSections] = useState({})
  const sectionRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index
            setVisibleSections((prev) => ({ ...prev, [index]: true }))
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.25 }
    )

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="space-y-16">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          SELECTED WORK
        </p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">
          Projects
        </h1>
        <p className="max-w-3xl text-lg text-slate-300">
          Hardware and software products built at SUTD — spanning IoT systems,
          computer vision, and personality-driven UX design.
        </p>
      </div>

      <div className="space-y-14">
        {projects.map((project, index) => {
          const isVisible = Boolean(visibleSections[index])
          const isReversed = index % 2 === 1
          const hiddenTranslation = isReversed
            ? 'translate-x-8'
            : '-translate-x-8'
          const animationClasses = isVisible
            ? 'opacity-100 translate-y-0 translate-x-0'
            : `opacity-0 translate-y-6 ${hiddenTranslation}`

          return (
            <div
              key={project.title}
              data-index={index}
              ref={(element) => {
                sectionRefs.current[index] = element
              }}
              className={`grid items-center gap-10 rounded-3xl border border-slate-800/70 bg-slate-900/30 p-8 transition-all duration-700 ease-out lg:grid-cols-2 ${animationClasses}`}
            >
              <div className={isReversed ? 'lg:order-2' : ''}>
                <div
                  className="relative overflow-hidden rounded-2xl p-8 shadow-lg"
                  style={{
                    backgroundColor: project.theme.bg,
                    color: project.theme.text,
                  }}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                    {project.visual.kicker}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold">
                    {project.visual.headline}
                  </h3>
                  <p className="mt-3 text-sm opacity-80">
                    {project.visual.detail}
                  </p>
                  <div className="mt-8 rounded-xl bg-white/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em]">
                    {project.title} system map
                  </div>
                </div>
              </div>

              <div className={isReversed ? 'lg:order-1' : ''}>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                  {project.number}
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white">
                  {project.title}
                </h2>
                <p className="mt-2 text-lg font-medium text-slate-200">
                  {project.tagline}
                </p>
                <p className="mt-4 text-slate-300">{project.description}</p>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {project.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4"
                    >
                      <p className="text-2xl font-semibold text-white">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2 rounded-full border border-slate-800 bg-slate-900/40 px-4 py-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    My contributions
                  </span>
                  {project.contributions.map((item) => (
                    <span
                      key={item}
                      className="rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        backgroundColor: project.theme.bg,
                        color: project.theme.text,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-800 px-3 py-1 text-xs font-semibold text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-semibold">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-300 hover:text-indigo-200"
                  >
                    GitHub →
                  </a>
                  <a
                    href={project.trailerUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-300 hover:text-indigo-200"
                  >
                    Trailer →
                  </a>
                  <Link
                    to={project.caseStudyUrl}
                    className="text-indigo-300 hover:text-indigo-200"
                  >
                    Case study →
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects

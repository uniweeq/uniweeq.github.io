import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { GitBranch, Play, ArrowRight } from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'KUPPI',
    tagline: 'Clean rooms, clear minds',
    description:
      'NFC-driven handheld device guiding hotel housekeeping staff through 6 cleaning zones, with a real-time supervisor dashboard that updates live as each zone is completed.',
    actionCards: [
      { icon: GitBranch, label: 'GitHub', href: 'https://github.com/uniweeq', highlight: false },
      { icon: Play, label: 'Trailer', href: 'https://youtu.be/g1X3Cxpo-Yk?si=IiN1o61aqqZWlFgW', highlight: false },
      { icon: ArrowRight, label: 'Case Study', to: '/projects/kuppi', highlight: true },
    ],
    contributions: [
      'Firmware (C++ / FreeRTOS)',
      'Supervisor dashboard',
      'Flask and Supabase backend',
    ],
    techStack: ['C++', 'Python', 'Flask', 'Arduino', 'FreeRTOS', 'Supabase', 'JavaScript'],
    theme: { bg: '#EEEDFE', text: '#3C3489' },
    videoSrc: '/videos/kuppi-demo.mp4',
  },
  {
    number: '02',
    title: 'Wellness Buddy',
    tagline: 'Productivity powered by personality',
    description:
      'Desk companion device using OpenCV face detection to monitor posture, delivering nudges through four animated personality-driven characters built for SUTD staff working long desk hours.',
    actionCards: [
      { icon: Play, label: 'Trailer', href: 'https://youtu.be/-uXnNBSNkIs', highlight: false },
      { icon: ArrowRight, label: 'Case Study', to: '/projects/wellness-buddy', highlight: true },
    ],
    contributions: [
      'Full team collaboration',
      'Ideation to prototype',
    ],
    techStack: ['Python', 'OpenCV', 'C++', 'Arduino', 'JavaScript'],
    theme: { bg: '#FAEEDA', text: '#633806' },
    videoSrc: '/videos/wellness-demo.mp4',
  },
]

const ANIMATION_TRIGGER_THRESHOLD = 0.25

function Projects() {
  const [visibleSections, setVisibleSections] = useState({})
  const sectionRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.dataset.index, 10)
            setVisibleSections((prev) => ({ ...prev, [index]: true }))
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: ANIMATION_TRIGGER_THRESHOLD }
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
          const isVisible = visibleSections[index]
          const isReversed = index % 2 === 1
          const hiddenTranslation = isReversed
            ? '-translate-x-8'
            : 'translate-x-8'
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
              <div className={`${isReversed ? 'lg:order-2' : ''} h-full min-h-64`}>
                <video
                  src={project.videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full rounded-2xl object-cover shadow-lg"
                  style={{ minHeight: '16rem' }}
                >
                  Your browser does not support the video tag.
                </video>
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

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.actionCards.map((card) => {
                    const Icon = card.icon
                    const shared =
                      'flex flex-col items-center gap-2 rounded-2xl border px-5 py-4 text-xs font-semibold transition-all duration-200 hover:-translate-y-1'
                    const normal =
                      'border-slate-800 bg-slate-900/50 text-slate-300 hover:bg-slate-800/70 hover:text-white'
                    const highlighted =
                      'border-indigo-500 bg-indigo-600 text-white hover:bg-indigo-500'
                    const className = `${shared} ${card.highlight ? highlighted : normal}`
                    return card.to ? (
                      <Link key={card.label} to={card.to} className={className}>
                        <Icon size={18} />
                        {card.label}
                      </Link>
                    ) : (
                      <a
                        key={card.label}
                        href={card.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={className}
                      >
                        <Icon size={18} />
                        {card.label}
                      </a>
                    )
                  })}
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

              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects

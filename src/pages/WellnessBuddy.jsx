import { useState } from 'react'
import { Link } from 'react-router-dom'
import Lightbox from '../components/Lightbox'

const buildImages = [
  { src: '/images/wellness/wellness-cv.jpg', caption: 'OpenCV face detection · posture monitoring' },
  { src: '/images/wellness/wellness-device.jpg', caption: 'Wellness Buddy prototype' },
]

const cardClasses = 'rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'
const badgeClasses =
  'rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600'
const statClasses = 'rounded-2xl border border-slate-200 bg-slate-50 p-4'
const highlightRoleClasses =
  'rounded-2xl border border-rose-200 bg-rose-50 p-4 text-slate-900'
const roleClasses = 'rounded-2xl border border-slate-200 bg-slate-50 p-4'
const trailerVideoId = '-uXnNBSNkIs'

const problemItems = [
  'Desk workers face eye strain after long screen sessions.',
  'Poor posture builds up across extended focus blocks.',
  'Low mood creeps in during repetitive work hours.',
]

const roleCards = [
  {
    title: 'Team collaboration',
    description:
      'Built as a shared team effort across hardware, firmware, and UX. No individual ownership claimed.',
    highlight: true,
  },
]

const flowSteps = [
  'Python OpenCV detects faces and measures viewing distance.',
  'Posture state is computed on the host machine.',
  'Serial data streams the posture state to an ESP32.',
  'The device animates a character and plays audio nudges.',
]

const techStack = [
  {
    title: 'Computer vision',
    items: ['Python', 'OpenCV', 'Haar cascades'],
  },
  {
    title: 'Firmware',
    items: ['C++', 'Arduino', 'ESP32'],
  },
  {
    title: 'Hardware',
    items: ['ILI9341 TFT', 'IR sensor'],
  },
]

function WellnessBuddy() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

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
            src={`https://www.youtube.com/embed/${trailerVideoId}?si=eUaqe2uchSVJwFD9`}
            title="Wellness Buddy trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {['Computer Vision', 'Embedded', 'UX', '2025'].map((item) => (
            <span key={item} className={badgeClasses}>
              {item}
            </span>
          ))}
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-semibold sm:text-5xl">Wellness Buddy</h1>
          <p className="max-w-3xl text-lg text-slate-600">
            Productivity powered by personality.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { value: '4', label: 'Personalities' },
            { value: 'Haar', label: 'Cascade vision' },
            { value: 'Live', label: 'Posture alerts' },
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
        <ol className="space-y-3 text-slate-700">
          {flowSteps.map((step, index) => (
            <li key={step} className="flex gap-3">
              <span className="text-sm font-semibold text-slate-500">
                {index + 1}.
              </span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
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
          {buildImages.map((img, i) => (
            <figure key={img.src} className="space-y-2">
              <button
                type="button"
                className="block h-48 w-full cursor-zoom-in overflow-hidden rounded-2xl bg-slate-100"
                onClick={() => setLightboxIndex(i)}
              >
                <img
                  alt={img.caption}
                  className="h-full w-full object-cover transition-transform duration-200 hover:scale-105"
                  decoding="async"
                  loading="lazy"
                  src={img.src}
                />
              </button>
              <figcaption className="text-xs font-medium text-slate-500">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={buildImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  )
}

export default WellnessBuddy

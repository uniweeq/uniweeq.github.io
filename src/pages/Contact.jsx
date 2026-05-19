function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

function GitHubIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M9 19c-4 1.5-4-2.5-6-3" />
      <path d="M14 20v-3.5c0-1 .1-1.4-.5-2-3.5-.4-7-1.5-7-6.5a5 5 0 0 1 1.4-3.5a4.1 4.1 0 0 1 .1-3.5s1.1-.3 3.5 1.3a11.2 11.2 0 0 1 6 0c2.4-1.6 3.5-1.3 3.5-1.3a4.1 4.1 0 0 1 .1 3.5a5 5 0 0 1 1.4 3.5c0 5-3.5 6.1-7 6.5c-.6 .5-.5 1-.5 2V20" />
    </svg>
  )
}

function LinkedInIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 11v5" />
      <path d="M8 8v.01" />
      <path d="M12 16v-5" />
      <path d="M16 16v-3a2 2 0 0 0-4 0" />
    </svg>
  )
}

const contactItems = [
  {
    label: 'Email',
    value: 'afif.mto@gmail.com',
    href: 'mailto:afif.mto@gmail.com',
    Icon: MailIcon,
  },
  {
    label: 'GitHub',
    value: 'github.com/r5th',
    href: 'https://github.com/r5th',
    Icon: GitHubIcon,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/afif-taha-b505a21b9',
    href: 'https://linkedin.com/in/afif-taha-b505a21b9',
    Icon: LinkedInIcon,
  },
]

const resumeUrl = '/resume.pdf'

function Contact() {
  const cardClassName = 'rounded-3xl border border-slate-800 bg-slate-900/40 p-8'

  return (
    <section className="space-y-10">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
          Contact
        </p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">
          Let&apos;s connect
        </h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className={`${cardClassName} space-y-6`}>
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">Get in touch</h2>
            <p className="text-sm text-slate-300">
              Open to internships, creative tech collaborations, and interesting
              projects. I typically respond within 24 hours.
            </p>
          </div>
          <div className="space-y-4">
            {contactItems.map(({ label, value, href, Icon }) => (
              <div
                key={label}
                className="flex items-start gap-4 rounded-2xl border border-slate-800/80 bg-slate-950/40 p-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/70 text-slate-200">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {label}
                  </p>
                  <a
                    href={href}
                    className="mt-1 inline-block text-sm font-semibold text-slate-100 hover:text-white"
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${cardClassName} flex h-full flex-col gap-6`}>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              Open to opportunities
            </div>
            <p className="text-sm text-slate-300">
              Currently exploring internships and creative tech collaborations
              that blend thoughtful design with hands-on engineering.
            </p>
          </div>
          <a
            href={resumeUrl}
            download
            className="inline-flex w-full items-center justify-center rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact

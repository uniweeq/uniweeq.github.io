function About() {
  const name = 'Afif Bin Mohammad Taha'
  const cardClassName =
    'rounded-2xl border border-slate-800 bg-slate-900/50 p-6'

  return (
    <section className="space-y-12">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
          About
        </p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">
          {name}
        </h1>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="aspect-[3/4] w-full max-w-sm rounded-3xl bg-slate-800/70">
            <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.3em] text-slate-500">
              Photo
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">{name}</h2>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
              Design and AI · SUTD · Singapore
            </p>
          </div>
          <p className="max-w-2xl text-lg text-slate-300">
            I&apos;m Afif, a Design and Artificial Intelligence student at SUTD
            with a background in Infocomm and Security from NYP. I work at the
            intersection of hardware and software — building things that are
            both functional and considered, from embedded IoT systems to
            real-time web dashboards. I&apos;m drawn to projects where engineering
            and design thinking have to coexist, and I&apos;m looking to grow in the
            creative technology space. Outside of school, I spend time on
            fitness and video editing — a mix that keeps me balanced and open to
            picking up new things wherever I find them.
          </p>
        </div>

        <div className="space-y-6">
          <div className={cardClassName}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Skills
            </p>
            <div className="mt-5 space-y-5">
              <div>
                <p className="text-sm font-semibold text-white">
                  Firmware and embedded
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  C++/Arduino, FreeRTOS, ESP32, NFC/RFID
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Backend and data
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Python, Flask, Supabase, PostgreSQL
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Frontend and tools
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  HTML/CSS/JS, OpenCV, GitHub, Figma
                </p>
              </div>
            </div>
          </div>

          <div className={cardClassName}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Education
            </p>
            <div className="mt-5 space-y-4 text-sm text-slate-200">
              <p>
                SUTD BSc Design and Artificial Intelligence with Minor in
                Computer Science and Design (2024-2028)
              </p>
              <p>
                Nanyang Polytechnic Diploma in Infocomm and Security (2018-2022)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={cardClassName}>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          Testimonials
        </p>
        <p className="mt-4 text-sm text-slate-300">
          Testimonials coming soon. If you have worked with me and would like to
          leave a recommendation, feel free to reach out or connect on LinkedIn.
        </p>
      </div>
    </section>
  )
}

export default About

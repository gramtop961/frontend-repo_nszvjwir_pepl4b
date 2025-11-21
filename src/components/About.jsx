export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mb-10 flex items-center gap-3">
        <div className="h-7 w-1.5 rounded-full bg-gradient-to-b from-fuchsia-500 to-indigo-500" />
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">About</h2>
      </div>

      <div className="grid items-start gap-10 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">
          <p>
            I’m a creative developer with a focus on interactive, motion-rich interfaces. My work blends strong engineering practices with a cinematic eye for detail, resulting in products that feel fast, thoughtful, and just a little bit otherworldly.
          </p>
          <p className="mt-4">
            Recent explorations include shader-driven visuals, advanced scroll choreography, and progressive enhancement strategies for high-performance web apps.
          </p>
        </div>

        <ul className="grid gap-3 text-slate-200">
          {["React & Next.js","Framer Motion","Three.js / Spline","FastAPI / Node","Tailwind CSS","Design Systems"].map((skill) => (
            <li key={skill} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <span>{skill}</span>
              <span className="text-xs text-slate-400">Pro</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

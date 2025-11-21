import { Code2, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Nebula UI',
    description: 'A motion-first component library inspired by cosmic trails and soft neon glows.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    url: '#',
    repo: '#',
  },
  {
    title: 'Astra Docs',
    description: 'Developer docs theme with command palette, keyboard shortcuts and dark glass aesthetic.',
    tags: ['Next.js', 'MDX', 'Algolia'],
    url: '#',
    repo: '#',
  },
  {
    title: 'Pulse Studio',
    description: 'Audio-reactive visuals rendered on WebGL with real-time shader editing.',
    tags: ['Three.js', 'WebGL', 'Shaders'],
    url: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="mb-10 flex items-center gap-3">
        <div className="h-7 w-1.5 rounded-full bg-gradient-to-b from-fuchsia-500 to-indigo-500" />
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Featured Projects</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 text-white transition hover:border-fuchsia-400/30 hover:bg-white/10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-300/90">{p.description}</p>
              </div>
              <Code2 className="h-5 w-5 text-fuchsia-300/80" />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-slate-300">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a href={p.url} className="inline-flex items-center gap-1 text-sm text-fuchsia-300 hover:text-fuchsia-200">
                Live <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a href={p.repo} className="inline-flex items-center gap-1 text-sm text-slate-300 hover:text-white">
                Code <Github className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20" style={{ background: 'radial-gradient(circle at 30% 20%, rgba(244,114,182,0.7), transparent 40%), radial-gradient(circle at 70% 60%, rgba(99,102,241,0.6), transparent 35%)' }} />
          </article>
        ))}
      </div>
    </section>
  );
}

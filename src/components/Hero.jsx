import Spline from '@splinetool/react-spline';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950">
      {/* Background glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-indigo-600/20 blur-3xl" />
      </div>

      {/* Spline 3D Scene */}
      <div className="relative h-[70vh] w-full">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay to improve text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/0 to-slate-950/30" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 mx-auto -mt-16 max-w-6xl px-6 pb-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-fuchsia-200/80 backdrop-blur">
              Futuristic • Cyberpunk • Interactive
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              Hi, I’m <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Your Name</span>
            </h1>
            <p className="mt-4 max-w-xl text-slate-300/90">
              I craft immersive web experiences that blend clean code with bold, cinematic design. Let’s build something that feels a little bit from the future.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-5 py-3 text-white shadow-lg shadow-fuchsia-600/25 transition hover:from-fuchsia-500 hover:to-indigo-500">
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-slate-200 backdrop-blur transition hover:bg-white/10">
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </div>
          </div>

          {/* Quick Stats / Tech stack */}
          <div className="grid grid-cols-2 gap-3 md:justify-self-end">
            {[
              { k: 'Experience', v: '5+ yrs' },
              { k: 'Stack', v: 'React • Node • FastAPI' },
              { k: 'Focus', v: '3D • Motion • DX' },
              { k: 'Location', v: 'Remote • Worldwide' },
            ].map((item) => (
              <div key={item.k} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200 backdrop-blur">
                <div className="text-xs uppercase tracking-wide text-slate-400">{item.k}</div>
                <div className="mt-1 text-lg font-medium">{item.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

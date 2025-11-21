import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
      });
      const data = await res.json();
      if (res.ok) setStatus('Message sent!');
      else setStatus(data?.detail || 'Something went wrong');
    } catch (err) {
      setStatus('Unable to send right now');
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mb-10 flex items-center gap-3">
        <div className="h-7 w-1.5 rounded-full bg-gradient-to-b from-fuchsia-500 to-indigo-500" />
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Contact</h2>
      </div>

      <div className="grid items-start gap-10 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">
          <div className="flex items-center gap-3 text-white">
            <Mail className="h-5 w-5 text-fuchsia-300" />
            <span>Let’s talk about your next project.</span>
          </div>
          <p className="mt-3 text-slate-300/90">I’m available for freelance and full-time roles. Share a little about what you’re building and I’ll get back within 24 hours.</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200 backdrop-blur">
          <div className="grid gap-4">
            <input name="name" placeholder="Your name" className="rounded-lg border border-white/10 bg-black/30 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-fuchsia-400" required />
            <input type="email" name="email" placeholder="Email address" className="rounded-lg border border-white/10 bg-black/30 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-fuchsia-400" required />
            <textarea name="message" rows="5" placeholder="Tell me about your idea" className="rounded-lg border border-white/10 bg-black/30 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-fuchsia-400" required />
          </div>
          <div className="mt-5 flex items-center gap-3">
            <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-5 py-3 text-white hover:from-fuchsia-500 hover:to-indigo-500">
              Send <Send className="h-4 w-4" />
            </button>
            <span className="text-sm text-slate-300/80">{status}</span>
          </div>
        </form>
      </div>
    </section>
  );
}

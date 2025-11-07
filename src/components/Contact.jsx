import React from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Let’s build something</h2>
          <p className="mt-2 text-white/70">Have a project, collaboration, or workshop in mind? I’d love to hear from you.</p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = Object.fromEntries(new FormData(form));
            alert(`Thanks ${data.name}! I will get back to you soon.`);
            form.reset();
          }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-white/70">Name</label>
              <input name="name" required className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none ring-0 placeholder:text-white/40" placeholder="Ada Lovelace" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">Email</label>
              <input type="email" name="email" required className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none ring-0 placeholder:text-white/40" placeholder="you@domain.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-1 block text-sm text-white/70">Message</label>
            <textarea name="message" required rows={5} className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none placeholder:text-white/40" placeholder="Tell me about your idea…" />
          </div>
          <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
            <Send size={18} /> Send Message
          </button>
        </form>

        <p className="mt-6 flex items-center justify-center gap-2 text-center text-white/60">
          <Mail size={16} /> Prefer email? hello@yourdomain.dev
        </p>
      </div>
    </section>
  );
};

export default Contact;

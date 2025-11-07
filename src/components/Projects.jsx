import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Narrative 3D Portfolio',
    description: 'A story-driven 3D site with interactive chapters and smooth scroll animations.',
    stack: ['React', 'Spline', 'Framer Motion'],
    links: {
      demo: '#',
      github: '#'
    }
  },
  {
    title: 'Interactive Lessons Platform',
    description: 'Micro-lessons with sandboxes and real-time hints for web fundamentals.',
    stack: ['FastAPI', 'React', 'MongoDB'],
    links: {
      demo: '#',
      github: '#'
    }
  },
  {
    title: 'Realtime Collab Whiteboard',
    description: 'Sketch, code, and prototype together with low-latency presence.',
    stack: ['WebRTC', 'Yjs', 'Tailwind'],
    links: {
      demo: '#',
      github: '#'
    }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(59,130,246,.15),transparent_40%),radial-gradient(circle_at_10%_60%,rgba(244,63,94,.15),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Featured Projects</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              A few experiments and client work that showcase my love for interactivity and craft.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10"
            >
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/80 ring-1 ring-white/10">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.links.demo} className="inline-flex items-center gap-1 text-sm text-white/90 hover:text-white">
                  <ExternalLink size={16} /> Demo
                </a>
                <a href={p.links.github} className="inline-flex items-center gap-1 text-sm text-white/90 hover:text-white">
                  <Github size={16} /> Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

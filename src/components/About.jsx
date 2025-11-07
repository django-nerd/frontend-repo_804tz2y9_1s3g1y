import React from 'react';
import { Code2, GraduationCap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const cards = [
  {
    icon: GraduationCap,
    title: 'Tech Educator',
    text: 'I create approachable lessons that turn complex ideas into playful, hands-on learning.'
  },
  {
    icon: Code2,
    title: 'Full‑Stack Engineer',
    text: 'From scalable APIs to polished UIs, I ship performant web apps with delightful details.'
  },
  {
    icon: Sparkles,
    title: 'Storytelling in 3D',
    text: 'I use narrative and 3D to build memorable experiences that stick with users.'
  }
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(34,197,94,.15),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold md:text-4xl">About</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            I teach coding through stories and build immersive interfaces that make learning fun.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10"
            >
              <Icon className="mb-3" />
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

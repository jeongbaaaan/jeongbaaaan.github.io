import { motion } from "framer-motion";
import { getExperiences } from "../../i18n/data/experience";
import { ui } from "../../i18n/ui";
import type { Locale } from "../../i18n/utils";
import GlassCard from "../ui/GlassCard";

interface Props {
  locale?: Locale;
}

export default function Experience({ locale = "ko" }: Props) {
  const experiences = getExperiences(locale);

  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ opacity: 1 }}
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
            {ui[locale]["experience.subtitle"]}
          </h2>
          <h3 className="mb-12 text-3xl font-bold md:text-4xl font-[family-name:var(--font-heading)]">
            {ui[locale]["experience.title"]}
          </h3>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-secondary)] to-transparent md:left-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              style={{ opacity: 1 }}
              className={`relative mb-12 pl-12 md:w-1/2 md:pl-0 ${
                index % 2 === 0
                  ? "md:pr-12 md:text-right"
                  : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-2.5 top-2 h-3 w-3 rounded-full border-2 border-[var(--color-primary)] bg-[var(--color-bg)] md:top-2 ${
                  index % 2 === 0
                    ? "md:left-auto md:-right-1.5"
                    : "md:-left-1.5"
                }`}
              />

              <GlassCard>
                <p className="mb-1 text-sm text-[var(--color-primary)]">
                  {exp.period}
                </p>
                <h4 className="mb-1 text-xl font-bold">{exp.company}</h4>
                <p className="mb-1 text-sm text-[var(--color-text-secondary)]">
                  {exp.role} — {exp.team}
                </p>
                <p className="mb-3 text-sm font-medium text-[var(--color-accent)]">
                  {exp.project}
                </p>
                <ul
                  className={`space-y-1 text-sm text-[var(--color-text-secondary)] ${
                    index % 2 === 0 ? "md:text-left" : ""
                  }`}
                >
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-primary)]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

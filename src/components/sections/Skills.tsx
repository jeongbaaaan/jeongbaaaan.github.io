import { motion } from "framer-motion";
import { skills } from "../../data/skills";
import { ui } from "../../i18n/ui";
import type { Locale } from "../../i18n/utils";
import GlassCard from "../ui/GlassCard";

interface Props {
  locale?: Locale;
}

export default function Skills({ locale = "ko" }: Props) {
  const sizeClasses = {
    large: "md:col-span-2 md:row-span-2",
    medium: "md:col-span-1 md:row-span-1",
    small: "md:col-span-1 md:row-span-1",
  };

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ opacity: 1 }}
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
            {ui[locale]["skills.subtitle"]}
          </h2>
          <h3 className="mb-12 text-3xl font-bold md:text-4xl font-[family-name:var(--font-heading)]">
            {ui[locale]["skills.title"]}
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[minmax(140px,auto)]">
          {skills.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ opacity: 1 }}
              className={sizeClasses[category.size]}
            >
              <GlassCard className="h-full">
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-2xl">{category.icon}</span>
                  <h4 className="font-semibold">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-white/5 px-3 py-1.5 text-sm text-[var(--color-text-secondary)] transition-colors duration-200 hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

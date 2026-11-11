import { motion } from 'framer-motion'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}) {
  const alignment =
    align === 'center' ? 'mx-auto text-center items-center' : 'items-start text-left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-10 flex max-w-2xl flex-col gap-3 ${alignment}`}
    >
      {eyebrow ? (
        <span
          className={`text-xs font-medium uppercase tracking-[0.22em] ${
            light ? 'text-sand' : 'text-caramel'
          }`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`font-display text-3xl leading-tight sm:text-4xl ${
          light ? 'text-cream' : 'text-espresso'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`text-base leading-relaxed ${
            light ? 'text-cream/75' : 'text-espresso/65'
          }`}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  )
}

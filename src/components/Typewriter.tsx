import { motion } from 'motion/react'

interface TypewriterProps {
  text: string
  className?: string
  delayPerChar?: number
}

export function Typewriter({ text, className, delayPerChar = 0.06 }: TypewriterProps) {
  const letters = Array.from(text)

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">
        {letters.map((letter, index) => (
          <motion.span
            key={`${letter}-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * delayPerChar, duration: 0.01 }}
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
          >
            {letter}
          </motion.span>
        ))}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
          style={{ display: 'inline-block', marginLeft: '2px' }}
        >
          |
        </motion.span>
      </span>
    </span>
  )
}

import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode } from 'react'

interface MotionDivProps {
  children: ReactNode
  motionKey: number
}

const MotionDiv = ({ children, motionKey }: MotionDivProps) => {
  const variations = {
    enter: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '-100vw' }
  }

  return (
    <AnimatePresence initial={false} mode='wait'>
      <motion.div
        variants={variations}
        initial='enter'
        animate='visible'
        exit='exit'
        key={motionKey}
        transition={{ type: 'tween' }}
        >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default MotionDiv

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

export interface ILayoutProps {
  children: ReactNode
}

const Layout = ({ children }: ILayoutProps) => {
  const variations = {
    enter: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -300 }
  }
  return (
    <motion.div
      variants={variations}
      initial='enter'
      animate='visible'
      exit='exit'
      transition={{
        type: 'tween'
      }}>
      {children}
    </motion.div>
  )
}

export default Layout

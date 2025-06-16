'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface TechCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  dark?: boolean
  onClick?: () => void
}

export default function TechCard({ 
  children, 
  className = '', 
  hover = true, 
  dark = false,
  onClick 
}: TechCardProps) {
  const baseClasses = dark ? 'tech-card-dark' : 'tech-card'
  
  return (
    <motion.div
      className={`${baseClasses} ${className} ${onClick ? 'cursor-pointer' : ''}`}
      whileHover={hover ? { y: -8, scale: 1.02 } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}
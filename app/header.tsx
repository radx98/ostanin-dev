'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

const VARIANTS_HEADER = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
  },
}

const TRANSITION_HEADER = {
  duration: 0.3,
}

export function Header() {
  return (
    <motion.header
      className="mb-8 flex items-center justify-between"
      variants={VARIANTS_HEADER}
      initial="hidden"
      animate="visible"
      transition={TRANSITION_HEADER}
    >
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full bg-zinc-200">
          <Image
            src="/av.jpg"
            alt="Boris Ostanin"
            fill
            sizes="48px"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <Link
            href="/"
            className="text-lg font-medium text-black dark:text-white"
          >
            Boris Ostanin
          </Link>
          <p className="text-zinc-600 dark:text-zinc-500">Software Engineer</p>
        </div>
      </div>
    </motion.header>
  )
}

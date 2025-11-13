'use client'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import Image from 'next/image'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'

type ProjectSlideshowProps = {
  images: string[]
  href: string
  title: string
  delay: number
}

export function ProjectSlideshow({ images, href, title, delay }: ProjectSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    // Wait for the delay before starting the slideshow
    const startTimer = setTimeout(() => {
      setHasStarted(true)
    }, delay)

    return () => clearTimeout(startTimer)
  }, [delay])

  useEffect(() => {
    if (!hasStarted || images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [hasStarted, images.length])

  if (images.length === 0) {
    return (
      <div className="aspect-square w-full rounded-xl bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
        <p className="text-zinc-500">No images available</p>
      </div>
    )
  }

  return (
    <MorphingDialog
      disableLayoutAnimation
      transition={{
        duration: 0.2,
        ease: 'easeInOut',
      }}
    >
      <MorphingDialogTrigger className="group relative aspect-square w-full cursor-zoom-in overflow-hidden rounded-xl">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => {
            event.stopPropagation()
          }}
          aria-label={`Open ${title}`}
          className="absolute inset-0 z-10 block"
        >
          <span className="sr-only">{`Open ${title} project`}</span>
        </a>
        <AnimatePresence initial={false}>
          <motion.img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt={`${title} screenshot ${currentIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover bg-zinc-900/5 dark:bg-zinc-50/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />
        </AnimatePresence>
        <button
          type="button"
          className="absolute right-[10px] top-[10px] z-20 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-black/60 p-1 shadow-sm ring-1 ring-white/20 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-80 cursor-zoom-in"
          aria-label={`Zoom ${title} gallery`}
        >
          <Image
            src="/zoom.png"
            alt=""
            width={18}
            height={18}
            className="h-4 w-4 cursor-zoom-in"
            aria-hidden="true"
          />
        </button>
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <span className="inline-flex items-center rounded-full bg-black/60 px-3 py-2 text-sm tracking-[0.05em] font-semibold uppercase text-white opacity-0 ring-1 ring-white/20 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
            OPEN DEMO
          </span>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative flex w-fit max-w-[calc(100vw-4rem)] max-h-[calc(100vh-4rem)] flex-col rounded-2xl bg-zinc-50 p-4 ring-1 ring-zinc-200/50 ring-inset shadow-[0_25px_80px_-35px_rgba(0,0,0,0.4)] dark:bg-zinc-950 dark:ring-zinc-800/50 dark:shadow-none md:p-3">
          <ProjectGallery images={images} title={title} />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="flex flex-col">
      <div className="relative overflow-hidden rounded-xl">
        <div className="flex items-center justify-center">
          <img
            src={images[selectedIndex]}
            alt={`${title} screenshot ${selectedIndex + 1}`}
            className="object-contain"
            style={{
              maxHeight: 'calc(100vh - 14rem)',
              maxWidth: 'calc(100vw - 8rem)',
            }}
          />
        </div>
        <div className="pointer-events-auto absolute bottom-4 left-0 right-0 z-10 flex flex-wrap items-center justify-center gap-2 px-4">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={`relative flex-shrink-0 h-16 w-16 overflow-hidden rounded-lg bg-white/70 shadow-lg ring-1 ring-zinc-900/60 transition backdrop-blur-sm dark:bg-black/40 dark:ring-black/60 ${
                selectedIndex === index
                  ? 'opacity-100'
                  : 'opacity-80 hover:opacity-100'
              }`}
            >
              <img
                src={image}
                alt={`${title} thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

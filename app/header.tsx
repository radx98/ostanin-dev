'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
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
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Software Engineer
          </TextEffect>
        </div>
      </div>
    </header>
  )
}

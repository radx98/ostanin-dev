'use client'
import { motion } from 'motion/react'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { ProjectSlideshow } from './components/ProjectSlideshow'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type Project = {
  name: string
  description: string
  link: string
  about: string
  screenshots: string
  id: string
  images: string[]
  delay: number
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type PersonalClientProps = {
  projects: Project[]
  blogPosts: BlogPost[]
  socialLinks: SocialLink[]
}

export function PersonalClient({ projects, blogPosts, socialLinks }: PersonalClientProps) {
  return (
    <motion.main
      className="space-y-24 mt-8"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">
            NYC-based full-stack JavaScript/TypeScript engineer with a data-analytics backbone. I turn
            ambiguous ideas into shipped software - building responsive React front ends,
            robust Node/Express APIs, and Postgres/Drizzle/Supabase data layers - plus
            pragmatic LLM features when they add user value. Known for rapid iteration,
            clear communication, and ownership from spec to deploy; Git/GitHub-fluent
            and comfortable with real-time, interactive UIs.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Selected Projects</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div key={project.name} className="space-y-2">
              <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                <ProjectSlideshow
                  images={project.images}
                  href={project.link}
                  title={project.name}
                  delay={project.delay}
                />
              </div>
              <div className="px-1">
                <a
                  className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                  href={project.link}
                  target="_blank"
                >
                  {project.name}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                </a>
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  {project.description}
                  {project.about ? (
                    <a
                      href={project.about}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 inline-flex items-center rounded-full bg-zinc-100 border border-zinc-200/50 px-2 py-[1px] text-xs font-medium text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:border-zinc-700/20 dark:text-zinc-100 dark:hover:bg-zinc-700"
                      aria-label={`Learn more about ${project.name}`}
                    >
                      about...
                    </a>
                  ) : null}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Posts</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {blogPosts.map((post) => (
              <a
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </a>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Contact</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          {/* Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a> */}
        </p>
        <div className="flex items-center justify-start space-x-3">
          {socialLinks.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <a
      href={link}
      className="inline-flex shrink-0 items-center rounded-full border border-zinc-200/50 bg-zinc-100 px-2.5 py-1 text-sm font-medium text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:border-zinc-700/20 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

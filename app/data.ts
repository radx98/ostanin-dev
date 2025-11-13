type Project = {
  name: string
  description: string
  link: string
  about: string
  screenshots: string
  id: string
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

export const PROJECTS: Project[] = [
    {
    name: 'Birdseye',
    description:
      "A tool for exploring semantic clusters of user's tweet history (demo data, real product soon)",
    link: 'https://birdseye.ostanin.dev/',
    about: '',
    screenshots: '/projects_media/birdseye',
    id: 'project3',
  },
    {
    name: 'BoarDash',
    description: 'Enemy logic and behaviour for a one-week video game project',
    link: 'https://boar-dash.vercel.app/',
    about: 'https://ostaninth.substack.com/p/boardash',
    screenshots: '/projects_media/boardash',
    id: 'project1',
  },
  // {
  //   name: 'Branching Trail',
  //   description:
  //     'Graph-based brainstorming tool for exploring creative ideas',
  //   link: 'https://bt.ostanin.dev/',
  //   about: 'https://x.com/ostaninth/status/1983294639349129660',
  //   screenshots: '/projects_media/branching_trail',
  //   id: 'project2',
  // },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Branching Trail thread',
    description:
      'Idea and implementation',
    link: 'https://x.com/ostaninth/status/1983294639349129660',
    uid: 'blog-3',
  },
  {
    title: 'BoarDash',
    description: 'We built a game. This is what we called it.',
    link: 'https://ostaninth.substack.com/p/boardash',
    uid: 'blog-1',
  },
  {
    title: 'Feedback Loop',
    description:
      'keeps going',
    link: 'https://ostaninth.substack.com/p/feedback-loop',
    uid: 'blog-2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/radx98',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/boris-ostanin/',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/ostaninth',
  },
  {
    label: 'Substack',
    link: 'https://ostaninth.substack.com/',
  },
]

export const EMAIL = ''

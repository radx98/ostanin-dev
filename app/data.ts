type Project = {
  name: string
  description: string
  link: string
  about: string
  video: string
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
    name: 'Branching Trail',
    description:
      'Graph-based brainstorming tool for exploring creative ideas',
    link: 'https://bt.ostanin.dev/',
    about: 'https://x.com/ostaninth/status/1983294639349129660',
    video:  '/bt_cover.mp4',
    id: 'project1',
  },
  {
    name: 'BoarDash',
    description: 'Enemy logic and behaviour for a one-week video game project',
    link: 'https://boar-dash.vercel.app/',
    about: 'https://ostaninth.substack.com/p/boardash',
    video: '/bd_cover.mp4',
    id: 'project2',
  },
]

// export const WORK_EXPERIENCE: WorkExperience[] = [
//   {
//     company: 'Reglazed Studio',
//     title: 'CEO',
//     start: '2024',
//     end: 'Present',
//     link: 'https://ibelick.com',
//     id: 'work1',
//   },
//   {
//     company: 'Freelance',
//     title: 'Design Engineer',
//     start: '2022',
//     end: '2024',
//     link: 'https://ibelick.com',
//     id: 'work2',
//   },
//   {
//     company: 'Freelance',
//     title: 'Front-end Developer',
//     start: '2017',
//     end: 'Present',
//     link: 'https://ibelick.com',
//     id: 'work3',
//   },
// ]

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

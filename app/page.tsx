import { getProjectImages } from './utils/getProjectImages'
import { PROJECTS, BLOG_POSTS, SOCIAL_LINKS } from './data'
import { PersonalClient } from './PersonalClient'

export default function Personal() {
  // Load images for each project
  const projectsWithImages = PROJECTS.map((project, index) => ({
    ...project,
    images: getProjectImages(project.screenshots),
    delay: index * 500, // 500ms delay between each slideshow start
  }))

  return (
    <PersonalClient
      projects={projectsWithImages}
      blogPosts={BLOG_POSTS}
      socialLinks={SOCIAL_LINKS}
    />
  )
}

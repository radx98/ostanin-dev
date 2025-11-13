import { readdirSync } from 'fs'
import { join } from 'path'

export function getProjectImages(folderPath: string): string[] {
  try {
    // folderPath comes as '/projects_media/birdseye' from data.ts
    // Remove leading slash and join with public directory
    const pathWithoutSlash = folderPath.startsWith('/') ? folderPath.slice(1) : folderPath
    const fullPath = join(process.cwd(), 'public', pathWithoutSlash)
    const files = readdirSync(fullPath)

    // Filter for image files and sort them
    const imageFiles = files
      .filter(file =>
        file.endsWith('.png') ||
        file.endsWith('.jpg') ||
        file.endsWith('.jpeg') ||
        file.endsWith('.gif') ||
        file.endsWith('.webp')
      )
      .sort()

    // Return paths that will be served by Next.js (starting with /)
    // URL-encode the filenames to handle spaces and special characters
    return imageFiles.map(file => `${folderPath}/${encodeURIComponent(file)}`)
  } catch (error) {
    console.error(`Error reading directory ${folderPath}:`, error)
    return []
  }
}

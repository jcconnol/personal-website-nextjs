import fs from "fs"
import { join } from "path"
import matter from "gray-matter"
import { parseISO, format } from "date-fns"

const postsDirectory = join(process.cwd(), "content", "blog")

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const date = format(parseISO(data.date), 'MMMM dd, yyyy')

  return { slug: realSlug, frontmatter: { ...data, date }, content }
}

export function getAllPosts() {
  var slugs = fs.readdirSync(postsDirectory)
  var posts = slugs.map(slug => getPostBySlug(slug))
  posts.sort((a,b) => {
      return new Date(a.frontmatter.date).getTime() -
          new Date(b.frontmatter.date).getTime()
  }).reverse();

  return posts
}

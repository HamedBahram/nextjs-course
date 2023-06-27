import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import {cache} from 'react'

// Rehype plugins
import rehypePrettyCode from 'rehype-pretty-code'
const prettyCodeOptions = {
  theme: 'one-dark-pro',
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }]
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push('highlighted')
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['highlighted', 'word']
  }
}

import Newsletter from '@/app/components/Newsletter'

// Custom components
const components = {
  h1: props => (
    <h1 {...props} className='text-emerald-400'>
      {props.children}
    </h1>
  ),
  Newsletter: Newsletter
}

// Content folder
const rootDirectory = path.join(process.cwd(), 'content')

export const getPostBySlug = cache(async slug => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

  const { content, frontmatter } = await compileMDX({
    source: fileContent,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]]
      }
    }
  })

  return { content, frontmatter, slug: realSlug }
})

export async function getAllPosts() {
  const files = fs.readdirSync(rootDirectory)

  let posts = []
  for (const file of files) {
    const post = await getPostBySlug(file)
    posts.push(post)
  }

  return posts
}

export async function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

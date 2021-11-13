import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '../components/Post'

export default function Home({ posts }) {
  console.log(posts)
  return (
    <div>
      <Head>
        <title>State Blog Page</title>
      </Head>
      <div className='posts'>
        {posts.map((post, index) => (
          <Post post={post}/>
        ))}
      </div>

    </div>
  )
}

export async function getStaticProps() {
  // get files from post dir
  const files = fs.readdirSync(path.join('posts'))

  // get slug from frontmatter from posts
  const posts = files.map(filename => {
    // create slug
    const slug = filename.replace('.md', '')

    // get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      slug,
      frontMatter
    }
  })

  console.log(posts)


  return {
    props: {
      posts: posts
    }
  }
}
import fs from 'fs'
import path from 'path'
import Head from 'next/head'

export default function Home({ posts }) {
  console.log(posts)
  return (
    <div>
      <Head>
        <title>State Blog Page</title>
      </Head>


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
    console.log(markdownWithMeta)

    return {
      slug
    }
  })

  console.log(files)


  return {
    props: {
      posts: 'The Post'
    }
  }
}
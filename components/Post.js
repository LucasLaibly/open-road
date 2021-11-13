import Link from 'next/Link'

export default function Post({ post }) {
    return (
        <div class='card'>
            <img src={post.frontMatter.cover_image} alt="" />
            <div className="post-date">Posted On: {post.frontMatter.date}</div>
            <h3 className="post-title">{post.frontMatter.title}</h3>
            <p>{post.frontMatter.excerpt}</p>
        </div>
    )
}
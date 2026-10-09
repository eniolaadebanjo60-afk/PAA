import { Link, useParams } from 'react-router-dom'
import posts from '../data/posts.js'
import '../styles/media.css'

export default function MediaPost() {
  const { id } = useParams()
  const post = posts.find((item) => item.id === id)

  if (!post) {
    return (
      <div className="media-post-page">
        <section className="not-found-section">
          <div className="section-inner">
            <h2>Post not found</h2>
            <p>We could not find that article.</p>
            <Link to="/media" className="btn-primary">
              Back to all posts
            </Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="media-post-page">
      <section className="page-hero media-post-hero">
        <div className="section-inner">
          <span className="post-hero-meta">
            {post.category} &nbsp;·&nbsp; {post.date} &nbsp;·&nbsp; {post.author}
          </span>
          <h1>{post.title}</h1>
        </div>
      </section>

      <section className="post-section">
        <div className="section-inner post-inner">
          {post.image ? (
            <img className="post-cover" src={post.image} alt={post.alt} />
          ) : (
            <div className="post-cover post-cover-placeholder"></div>
          )}

          {post.body.map((block, index) => {
            if (block.type === 'h2') {
              return <h2 key={index}>{block.text}</h2>
            }
            if (block.type === 'quote') {
              return (
                <blockquote key={index}>
                  <p>{block.text}</p>
                  {block.cite && (
                    <span className="blockquote-cite">— {block.cite}</span>
                  )}
                </blockquote>
              )
            }
            if (block.type === 'list') {
              return (
                <ul key={index}>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )
            }
            return <p key={index}>{block.text}</p>
          })}

          <Link to="/media" className="post-back">
            <i className="fa-solid fa-arrow-left"></i> Back to all posts
          </Link>
        </div>
      </section>
    </div>
  )
}
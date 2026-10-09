import { Link } from 'react-router-dom'

export default function PostCard({ post }) {
  return (
    <article className="post-card">
      <Link to={`/media/${post.id}`} className="post-card-img">
        {post.image ? (
          <img src={post.image} alt={post.alt} />
        ) : (
          <div className="post-img-placeholder"></div>
        )}
      </Link>

      <span className="post-meta">
        {post.category} &nbsp;·&nbsp; {post.date}
      </span>

      <h3 className="post-card-title">
        <Link to={`/media/${post.id}`}>{post.title}</Link>
      </h3>

      <p className="post-excerpt">{post.excerpt}</p>

      <Link to={`/media/${post.id}`} className="btn-yellow">
        Read More <i className="fa-solid fa-arrow-right"></i>
      </Link>
    </article>
  )
}
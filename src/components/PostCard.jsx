import { Link } from 'react-router-dom'

export default function PostCard({ post }) {
  return (
    <Link to={`/media/${post.id}`} className="media-card">
      <div className="media-card-img">
        {post.image ? (
          <img src={post.image} alt={post.alt} />
        ) : (
          <div className="media-card-placeholder"></div>
        )}
      </div>
      <div className="media-card-info">
        <span className="media-card-meta">
          {post.category} · {post.date}
        </span>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <span className="media-card-link">
          Read more <i className="fa-solid fa-arrow-right"></i>
        </span>
      </div>
    </Link>
  )
}
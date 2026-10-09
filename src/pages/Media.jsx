import { useState } from 'react'
import { Link } from 'react-router-dom'
import posts from '../data/posts.js'
import '../styles/media.css'

const categories = ['All Posts', 'Agribusiness', 'Crop Planting', 'Others', 'Poultry']

export default function Media() {
  const [active, setActive] = useState('All Posts')

  const list = posts.filter(
    (post) => active === 'All Posts' || post.category === active
  )

  const [featured, ...rest] = list

  return (
    <div className="media-page">
      <section className="page-hero media-hero">
        <div className="section-inner">
          <h1>Blog/News</h1>
        </div>
      </section>

      <section className="media-section">
        <div className="section-inner">
          <div className="media-tabs">
            {categories.map((category) => (
              <button
                key={category}
                className={category === active ? 'media-tab active' : 'media-tab'}
                onClick={() => setActive(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {list.length ? (
            <div className="media-layout">
              <div className="media-main">
                {featured && (
                  <article className="featured-post">
                    <Link to={`/media/${featured.id}`} className="featured-post-img">
                      {featured.image ? (
                        <img src={featured.image} alt={featured.alt} />
                      ) : (
                        <div className="post-img-placeholder"></div>
                      )}
                    </Link>
                    <span className="post-meta">
                      {featured.category} &nbsp;-&nbsp; {featured.date}
                    </span>
                    <h2 className="featured-post-title">
                      <Link to={`/media/${featured.id}`}>{featured.title}</Link>
                    </h2>
                    <p className="post-excerpt">{featured.excerpt}</p>
                    <Link to={`/media/${featured.id}`} className="btn-yellow">
                      Read More
                    </Link>
                  </article>
                )}

                {rest.length > 0 && (
                  <div className="post-grid">
                    {rest.map((post) => (
                      <article className="post-card" key={post.id}>
                        <Link to={`/media/${post.id}`} className="post-card-img">
                          {post.image ? (
                            <img src={post.image} alt={post.alt} />
                          ) : (
                            <div className="post-img-placeholder"></div>
                          )}
                        </Link>
                        <span className="post-meta">
                          {post.category} &nbsp;-&nbsp; {post.date}
                        </span>
                        <h3 className="post-card-title">
                          <Link to={`/media/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p className="post-excerpt">{post.excerpt}</p>
                        <Link to={`/media/${post.id}`} className="btn-yellow">
                          Read More
                        </Link>
                      </article>
                    ))}
                  </div>
                )}
              </div>

              <aside className="media-sidebar">
                <div className="sidebar-block">
                  <h3 className="sidebar-heading">Popular Posts</h3>
                  <ul className="popular-list">
                    {posts.slice(0, 3).map((post) => (
                      <li key={post.id}>
                        <Link to={`/media/${post.id}`} className="popular-item">
                          <div className="popular-thumb">
                            {post.image ? (
                              <img src={post.image} alt={post.alt} />
                            ) : (
                              <div className="post-img-placeholder"></div>
                            )}
                          </div>
                          <div className="popular-text">
                            <span className="popular-title">{post.title}</span>
                            <span className="popular-date">{post.date}</span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sidebar-block">
                  <h3 className="sidebar-heading">Blog Category</h3>
                  <ul className="category-list">
                    {categories
                      .filter((c) => c !== 'All Posts')
                      .map((cat) => (
                        <li key={cat}>
                          <button
                            className="category-link"
                            onClick={() => setActive(cat)}
                          >
                            {cat}
                          </button>
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="sidebar-block">
                  <h3 className="sidebar-heading">Blog Tag</h3>
                  <div className="tag-cloud">
                    {categories
                      .filter((c) => c !== 'All Posts')
                      .map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                  </div>
                </div>
              </aside>
            </div>
          ) : (
            <p className="media-empty">No posts in this category yet.</p>
          )}
        </div>
      </section>
    </div>
  )
}
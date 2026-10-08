import { useState } from 'react'
import posts from '../data/posts.js'
import PostCard from '../components/PostCard.jsx'
import '../styles/media.css'

const categories = ['All Post', 'Agribusiness', 'Crop Planting', 'Others', 'Poultry']

export default function Media() {
  const [active, setActive] = useState('All Post')

  const list = posts.filter(
    (post) => active === 'All Post' || post.category === active
  )

  return (
    <div className="media-page">
      <section className="page-hero">
        <div className="section-inner">
          <h1>Blog / News</h1>
          <p>News, events and updates from Premier Agribusiness Academy.</p>
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
            <div className="media-grid">
              {list.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="media-empty">No posts in this category yet.</p>
          )}
        </div>
      </section>
    </div>
  )
}
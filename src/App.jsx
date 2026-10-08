import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Programmes from './pages/Programmes'
import Consultancy from './pages/Consultancy'
import Partnership from './pages/Partnership'
import Media from './pages/Media'
import MediaPost from './pages/MediaPost'
import Contact from './pages/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/programmes" element={<Programmes />} />
        <Route path="/consultancy" element={<Consultancy />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/media" element={<Media />} />
        <Route path="/media/:id" element={<MediaPost />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}
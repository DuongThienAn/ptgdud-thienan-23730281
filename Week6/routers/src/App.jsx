import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import NotFound from './components/NotFound'
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function App() {


   return (
    <>
      {/* Bài 1 */}
      {/* <div style={{ marginTop: '40px' }}>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div> */}

      {/* Bài 2 */}
      {/* <div style={{ marginTop: '80px' }}>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div> */}

      {/* Bài 3 */}
      <div style={{ marginTop: '80px' }}>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to="/products">Products</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* Bài 4 */}
      <div style={{ marginTop: '80px' }}>

      </div>

      {/* Bài 5 */}
      <div style={{ marginTop: '80px' }}>

      </div>

      {/* Bài 6 */}
      <div style={{ marginTop: '80px' }}>

      </div>

      {/* Bài 7 */}
      <div style={{ marginTop: '80px' }}>

      </div>
    </>
  )
}

export default App

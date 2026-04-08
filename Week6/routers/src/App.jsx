import { useContext, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { AuthContext } from './components/Bai6/AuthProvider';

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './components/Bai1/Home'
import About from './components/Bai1/About'
import Contact from './components/Bai1/Contact'
import NotFound from './components/Bai2/NotFound'
import ProductList from './components/Bai3/ProductList'
import ProductDetail from './components/Bai3/ProductDetail'
import Dashboard from './components/Bai4/Dashboard'
import Profile from './components/Bai4/Profile'
import Orders from './components/Bai4/Orders'
import Settings from './components/Bai4/Settings'
import Checkout from './components/Bai5/Checkout'
import Login from './components/Bai6/Login'
import ProtectedRoute from './components/Bai6/ProtectedRoute'
import Products2 from './components/Bai7/Products2'
import ProductDetail2 from './components/Bai7/ProductDetail2'
import Cart from './components/Bai7/Cart'
import Checkout2 from './components/Bai7/Checkout2'
import Profile2 from './components/Bai7/Profile2'
import Login2 from './components/Bai7/Login2'
import ProtectedRoute2 from './components/Bai7/ProtectedRoute2'

function App() {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      {/* Bài 1 */}
      {/* <div style={{ marginTop: '40px' }}>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
        </nav>
      </div> */}

      {/* Bài 2 */}
      {/* <div style={{ marginTop: '80px' }}>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
        </nav>
      </div> */}

      {/* Bài 3 */}
      {/* <div style={{ marginTop: '80px' }}>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to="/products">Products</Link>
        </nav>
      </div> */}

      {/* Bài 4 */}
      {/* <div style={{ marginTop: '80px' }}>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to="/dashboard">Dashboard</Link>
        </nav>
      </div> */}

      {/* Bài 5 */}
      {/* <div style={{ marginTop: '80px' }}>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to="/products">Products</Link>
        </nav>
      </div> */}

      {/* Bài 6 */}
      {/* <div style={{ marginTop: '80px' }}>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to="/dashboard">Dashboard</Link>
        </nav>
      </div> */}

      {/* Bài 7 */}
      <div style={{ marginTop: '80px' }}>
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/products2"> Shop</Link> |
          <Link to="/cart"> Cart</Link> |
          {user ? (
            <>
              <Link to="/profile2"> Profile</Link> |
              <button onClick={logout}> Đăng xuất</button>
            </>
          ) : (
            <Link to="/login2"> Login</Link>
          )}
        </nav>
      </div>


      <Routes>
        {/* Bài 1 */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Bài 3: Dynamic Route */}
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        {/* Bài 4: Nested Routes */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>  {/* Bảo vệ route Dashboard bằng ProtectedRoute */}
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Bài 5: Trang Checkout */}
        <Route path="/checkout" element={<Checkout />} />

        {/* Bài 6 */}
        <Route path="/login" element={<Login />} />

        {/* Bài 7 */}
        <Route path="/products2" element={<Products2 />} />
        <Route path="/products2/:id" element={<ProductDetail2 />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout2" element={<Checkout2 />} />
        <Route path="/profile2" element={<ProtectedRoute2><Profile2 /></ProtectedRoute2>} />
        <Route path="/login2" element={<Login2 />} />

        {/* Bài 2: 404 not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App

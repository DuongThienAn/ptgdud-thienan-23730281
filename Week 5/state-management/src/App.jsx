import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StateReducer from './components/Bai1/StateReducer'
import ContextGlobalState from './components/Bai2/ContextGlobalState'
import Layout from './components/Bai2/Layout'
import CartProvider from './components/Bai3/CartProvider'
import ProductList from './components/Bai3/ProductList'
import Cart from './components/Bai3/Cart'

function App() {

  return (
    <>
      {/* Bài 1 */}
      <div style={{ marginTop: '40px' }}>
        <StateReducer></StateReducer>
      </div>

      {/* Bài 2 */}
      <div style={{ marginTop: '80px' }}>
        <ContextGlobalState>
          <Layout />
        </ContextGlobalState>
      </div>

      {/* Bài 3 */}
      <div style={{ marginTop: '80px' }}>
        <CartProvider>
          <div>
            <ProductList />
            <hr />
            <Cart />
          </div>
        </CartProvider>
      </div>

    </>
  )
}

export default App

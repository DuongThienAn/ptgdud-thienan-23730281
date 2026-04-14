import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useRecoilValue } from 'recoil'
import ComA from './components/bai1/ComA'
import ComB from './components/bai1/ComB'
import { counterAtom } from './state/Bai1/CounterAtom'
import { toggleThemeAtom } from './state/Bai2/ToggleTheme'
import ComToggle from './components/bai2/ComToggle'
import { userAtom } from './state/Bai3/UserAtom'
import Profile from './components/Bai3/Profile'
import { todoListAtom } from './state/Bai4/TodoListAtom'
import TodoInput from './components/Bai4/TodoInput'
import TodoList from './components/Bai4/TodoList'
import { cartState } from './state/Bai5/CartStateAtom'
import ProductList from './components/Bai5/ProductList'
import Cart from './components/Bai5/Cart'
import DisplayToast from './components/Bai6/DisplayToast'
import Notification from './components/Bai6/Notification'
import { notifyAtom } from './state/Bai6/NotifyAtom'
import UserList from './components/Bai7/UserList'
import { userListAtom } from './state/Bai7/UserListAtom'
import SearchInput from './components/Bai8/SearchInput'
import { searchResultAtom } from './state/Bai8/SearchResultAtom'
import SearchResult from './state/Bai8/SearchResult'
import { authAtom } from './state/Bai9/AuthAtom'
import UserProfile from './components/Bai9/UserProfile'
import Login from './components/Bai9/Login'
import Navbar from './components/Bai10/NavBar'
import ProductList2 from './components/Bai10/ProductList2'
import { cartAtom } from './state/Bai10/CartContext'

function App() {
  // Bài 1
  const value = useRecoilValue(counterAtom);
  console.log(value);

  // Bài 2
  const theme = useRecoilValue(toggleThemeAtom);
  console.log(theme);

  // Bài 3
  const user = useRecoilValue(userAtom);
  console.log(user);

  // Bài 4
  const todoList = useRecoilValue(todoListAtom);
  console.log(todoList);

  // Bài 5
  const cart = useRecoilValue(cartState);
  console.log(cart);

  // Bài 6
  const notifies = useRecoilValue(notifyAtom);
  console.log(notifies);

  // Bài 7
  const userList = useRecoilValue(userListAtom);
  console.log(userList);

  // Bài 8
  const searchResult = useRecoilValue(searchResultAtom);
  console.log(searchResult);

  // Bài 9
  const auth = useRecoilValue(authAtom);
  console.log(auth);

  // Bài 10
  const cart2 = useRecoilValue(cartAtom);
  console.log(cart2);

  return (
    <>
      <div className={`app-container ${theme}`}>
        {/* Bài 1 */}
        <div style={{ marginTop: '80px' }}>
          {/* <ComA />
          <ComB /> */}
        </div>

        {/* Bài 2 */}
        <div style={{ marginTop: '80px' }}>
          {/* <ComToggle /> */}
        </div>

        {/* Bài 3 */}
        <div style={{ marginTop: '80px' }}>
          {/* <Profile /> */}
        </div>

        {/* Bài 4 */}
        <div style={{ marginTop: '80px' }}>
          {/* <TodoInput />
          <TodoList /> */}
        </div>

        {/* Bài 5 */}
        <div style={{ marginTop: '80px' }}>
          {/* <ProductList />
          <Cart /> */}
        </div>

        {/* Bài 6 */}
        <div style={{ marginTop: '80px' }}>
          {/* <DisplayToast />
          <Notification />  */}
        </div>

        {/* Bài 7 */}
        <div style={{ marginTop: '80px' }}>
          {/* <UserList /> */}
        </div>

        {/* Bài 8 */}
        <div style={{ marginTop: '80px' }}>
          {/* <SearchInput />
          <SearchResult /> */}
        </div>

        {/* Bài 9 */}
        <div style={{ marginTop: '80px' }}>
          {/* {auth.isAuthenticated ? <UserProfile /> : <Login />} */}
        </div>

        {/* Bài 10 */}
        <div style={{ marginTop: '80px' }}>
          <DisplayToast />

          {auth.isAuthenticated ? (
            <div>
              <Navbar />
              <ProductList2 />
            </div>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
              <Login />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App

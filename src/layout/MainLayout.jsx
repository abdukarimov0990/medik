import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CartProvider } from '../data/CartContext';


const MainLayout = () => {
  return (
    <CartProvider>
    <div className='flex flex-col min-h-screen'>
        <Header></Header>
      <main className='grow'>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
    </CartProvider>
  )
}

export default MainLayout

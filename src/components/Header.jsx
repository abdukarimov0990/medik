import React, { useState } from 'react'
import logo from '../img/logo.avif'
import { Link } from 'react-router'
import { FaLocationArrow, FaPhoneAlt } from 'react-icons/fa'
import { CgMail } from 'react-icons/cg'
import { BiSearch } from 'react-icons/bi'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { RxAvatar } from 'react-icons/rx'
import { FaX } from 'react-icons/fa6'
import { useCart } from '../data/CartContext'


const Header = () => {
  const [open, Setopen] = useState(false);
  const { selectedCards, removeFromCart, setSelectedCards } = useCart();

  const onRemove = (id) => {
    removeFromCart(id);
  };

  const onQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
      return;
    }

    setSelectedCards((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <header className="w-full">
      {/* Topbar */}
      <div className="py-4 border-b border-black/10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <Link to="/">
            <img src={logo} alt="logo" className="w-32 md:w-40" />
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm md:text-base">
            <a
              href="tel:+998999999999"
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <FaPhoneAlt size={16} className="text-blue-600" />
              (00) 000 123 456789
            </a>
            <a
              href="mailto:oyatbek09@gmail.com"
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <CgMail size={20} className="text-blue-600" />
              Info@example.com
            </a>
            <span className="hidden sm:block h-[24px] w-[1px] bg-black/10"></span>
            <a
              href="tel:+998999999999"
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <FaLocationArrow size={16} className="text-blue-600" />
              Store location
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="py-4 border-b border-black/10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left Nav */}
          <ul className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 text-base md:text-lg">
            <li className="hover:text-blue-600 transition">
              <Link to="#">Home</Link>
            </li>
            <li className="hover:text-blue-600 transition">
              <Link to="#">Collection</Link>
            </li>
            <li className="text-blue-600 font-semibold">
              <Link to="#">Shop</Link>
            </li>
            <li className="hover:text-blue-600 transition">
              <Link to="#">Biododical</Link>
            </li>
            <li className="hover:text-blue-600 transition">
              <Link to="#">Equipment</Link>
            </li>
            <li className="hover:text-blue-600 transition">
              <Link to="#">Medical Tools</Link>
            </li>
            <li className="hover:text-blue-600 transition">
              <Link to="#">Pages</Link>
            </li>
          </ul>

          {/* Right Icons */}
          <ul className="flex items-center gap-4 text-blue-600">
            <li>
              <BiSearch size={22} />
            </li>
            <li onClick={()=> Setopen(true)}>
              <MdOutlineShoppingBag size={22} />
            </li>
            <li>
              <RxAvatar size={22} />
            </li>
          </ul>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button onClick={() => Setopen(false)}>
            <FaX className="w-6 h-6" />
          </button>
        </div>

        {/* Items */}
        <div className="overflow-y-auto h-[calc(100%-64px)] p-4 space-y-4">
          {selectedCards.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">Cart is empty.</p>
          ) : (
            selectedCards.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 object-contain bg-gray-100 rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-sm">{item.name}</h3>
                  <p className="text-blue-600 text-sm">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onQuantityChange(item.id, item.quantity - 1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaX className="w-5 h-5" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </header>
  )
}

export default Header

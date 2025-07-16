import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from '../img/logoWhite.png'
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-5 px-6 md:px-20">
      <div className="container mb-10 flex justify-between items-center ">
      <Link to="/"><img src={logo} alt="logo" className='w-50' /></Link>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 bg-white w-full text-black rounded-l-md"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-md text-white">
              Subscribe
            </button>
          </div>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="cursor-pointer hover:text-blue-400" />
            <FaInstagram className="cursor-pointer hover:text-pink-400" />
            <FaYoutube className="cursor-pointer hover:text-red-500" />
        </div>

      </div>
      <div className="container grid md:grid-cols-4 grid-cols-1 gap-10 border-b border-gray-700 pb-10">
        <div className="col-span-1">

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1" />
              <span>1203 Town Center Drive FL<br />33458 USA</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>+0000 123 456789</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <a href="mailto:oyatbek09@gmail.com" className="hover:underline">
                oyatbek09@gmail.com
              </a>
            </div>  
          </div>
        </div>

        <div className="col-span-1">
          <h3 className="font-semibold mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
            <li>Search</li>
            <li>Help</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Shipping Details</li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>Contact us</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Refunds & Returns</li>
            <li>Deliveries</li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li>Advanced Search</li>
            <li>Search Terms</li>
            <li>Help & Faq's</li>
            <li>Store Location</li>
            <li>Orders & Returns</li>
          </ul>
        </div>

      </div>

      <div className="flex justify-between items-center mt-6 text-sm flex-col md:flex-row gap-4">
        <p>© 2023 WeDesignTech. All Rights Reserved.</p>
        <div className="flex items-center space-x-4">
          <img src="" alt="visa" className="h-6" />
          <img src="" alt="mastercard" className="h-6" />
          <img src="" alt="amex" className="h-6" />
          <img src="" alt="paypal" className="h-6" />
          <img src="" alt="discover" className="h-6" />
        </div>
      </div>
    </footer>
  );
}

import React, { useState } from 'react';
import { products } from '../data/data';
import { MdOutlineSort } from 'react-icons/md';

const Products = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Filter button for mobile */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setShowMobileFilters(true)}
            className="flex items-center px-4 py-2 rounded-md"
          >
            <MdOutlineSort size={24}/>
            Filter
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-full lg:w-1/4 space-y-6">
            <Filters />
          </aside>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white shadow rounded-xl overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-[300px] object-contain bg-gray-50"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-base font-semibold">{product.name}</h3>
                    <p className="text-blue-600 mt-2 text-sm">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Filter SlideOver */}
        {showMobileFilters && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
            <div className="fixed top-0 left-0 h-full w-3/4 max-w-sm bg-white shadow-lg p-4 overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="text-gray-600 hover:text-black"
                >
                  ✕
                </button>
              </div>
              <Filters />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const Filters = () => (
  <>
    {/* Availability */}
    <div className="rounded-md">
      <button className="w-full text-left px-4 py-3 border-l-4 font-semibold bg-black/5 shadow-sm">
        Availability
      </button>
      <div className="px-4 py-5 flex flex-col gap-2 text-base">
        <label className="flex items-center hover:text-blue-600 transition ease-in-out">
          In stock <span className="text-gray-500 ml-1">(23)</span>
        </label>
        <label className="flex items-center hover:text-blue-600 transition ease-in-out">
          Out of stock <span className="text-gray-500 ml-1">(22)</span>
        </label>
      </div>
    </div>

    {/* Price */}
    <div className="rounded-md">
      <button className="w-full text-left px-4 py-3 border-l-4 font-semibold bg-black/5 shadow-sm">
        Price
      </button>
      <div className="px-4 py-5 text-base space-y-4">
        <p className="text-gray-500">The highest price is $929.00</p>
        <div className="flex items-center gap-2">
          <span className="text-gray-500">$</span>
          <input type="number" className="border rounded-md p-2 w-full" placeholder="0" />
          <input type="number" className="border rounded-md p-2 w-full" placeholder="929.00" />
        </div>
      </div>
    </div>

    {/* Product Type */}
    <div className="rounded-md">
      <button className="w-full text-left px-4 py-3 border-l-4 font-semibold bg-black/5 shadow-sm">
        Product type
      </button>
      <div className="px-4 py-5 flex flex-col gap-2 text-base">
        <label className="flex items-center hover:text-blue-600 transition ease-in-out">
          Accessories <span className="text-gray-500 ml-1">(7)</span>
        </label>
        <label className="flex items-center hover:text-blue-600 transition ease-in-out">
          Medical <span className="text-gray-500 ml-1">(16)</span>
        </label>
      </div>
    </div>

    {/* More Filters */}
    <div className="rounded-md">
      <button className="w-full text-left px-4 py-3 border-l-4 font-semibold bg-black/5 shadow-sm">
        More filters
      </button>
      <div className="px-4 py-5 flex flex-col gap-2 text-base">
        <label className="flex items-center hover:text-blue-600 transition ease-in-out">
          $100 - $200
        </label>
        <label className="flex items-center hover:text-blue-600 transition ease-in-out">
          $200 - $300
        </label>
        <label className="flex items-center hover:text-blue-600 transition ease-in-out">
          $300 - $400
        </label>
        <label className="flex items-center hover:text-blue-600 transition ease-in-out">
          $400+
        </label>
      </div>
    </div>
  </>
);

export default Products;

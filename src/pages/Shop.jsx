import React, { useRef, useState } from 'react';
import { products } from '../data/data';
import { MdOutlineSort } from 'react-icons/md';
import { useOutletContext } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';


const Products = () => {

    const [showMobileFilters, setShowMobileFilters] = useState(false);

    const [visibleCount, setVisibleCount] = useState(8)

    const toggleFavorite = (product) => {
        const isSelected = selectedProducts.some(p => p.name === product.name)
        if (isSelected) {
            setSelectedProducts(selectedProducts.filter(p => p.name !== product.name))
        } else {
            setSelectedProducts([...selectedProducts, product])
        }
    }

    const handleToggle = () => {
        if (visibleCount >= products.length) {
            setVisibleCount(8)
        } else {
            setVisibleCount(prev => prev + 8)
        }
    }

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                {/* Filter button for mobile */}
                <div className="lg:hidden mb-6">
                    <button
                        onClick={() => setShowMobileFilters(true)}
                        className="flex items-center px-4 py-2 rounded-md"
                    >
                        <MdOutlineSort size={24} />
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
                            {products.slice(0, visibleCount).map((product) => (
                                <div key={product.id} className="bg-white shadow rounded-xl overflow-hidden">
                                    <div className="group text-white relative w-full h-[350px]">
                                        <img
                                            src={product.img}
                                            alt={product.name}
                                            className="w-full h-[300px] object-contain bg-gray-50"
                                        />
                                        <div className="w-full absolute opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto pointer-events-none transition-all duration-300 ease-in-out flex">
                                            <button className="px-4 cursor-pointer py-3 text-center bg-blue-500 grow">Buy Quickly</button>
                                            <button className="px-4 cursor-pointer py-3 text-center bg-blue-700 grow">Add to cart</button>
                                        </div>
                                    </div>
                                    <div className="p-4 text-center">
                                        <h3 className="text-base font-semibold">{product.name}</h3>
                                        <p className="text-blue-600 mt-2 text-sm">${product.price.toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {products.length > 8 && (
                    <div className="text-center flex justify-center ml-auto w-3/4 mt-8">
                        <button
                            className="px-6 py-3 bg-blue-600 text-white text-second border border-second rounded-lg hover:opacity-40 transition"
                            onClick={handleToggle}
                        >
                            Load More
                        </button>
                    </div>
                )}

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


const Filters = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
  
    return (
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
              <input
                type="number"
                className="border rounded-md p-2 w-full"
                placeholder="0"
              />
              <input
                type="number"
                className="border rounded-md p-2 w-full"
                placeholder="929.00"
              />
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
  
        {/* Swiper section */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="w-full mt-10"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white shadow rounded-xl overflow-hidden max-w-md mx-auto">
                <div className="group text-white relative w-full h-[350px]">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-[300px] object-contain bg-gray-50"
                  />
                  <div className="w-full absolute bottom-0 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto pointer-events-none transition-all duration-300 ease-in-out flex">
                    <button className="px-4 py-3 text-center bg-blue-500 grow">
                      Buy Quickly
                    </button>
                    <button className="px-4 py-3 text-center bg-blue-700 grow">
                      Add to cart
                    </button>
                  </div>
                </div>
  
                <div className="p-4 text-center">
                  <h3 className="text-base font-semibold">{product.name}</h3>
                  <p className="text-blue-600 mt-2 text-sm">
                    ${product.price.toFixed(2)}
                  </p>
  
                  <div className="flex text-white gap-5 justify-center items-center mt-4">
                    <button
                      ref={prevRef}
                      className="text-sm bg-blue-600  hover:bg-gray-300 px-4 py-2 rounded"
                    >
                      <BiLeftArrow></BiLeftArrow>
                    </button>
                    <button
                      ref={nextRef}
                      className="text-sm bg-blue-600 hover:bg-gray-300 px-4 py-2 rounded"
                    >
                      <BiRightArrow></BiRightArrow>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  };

export default Products;

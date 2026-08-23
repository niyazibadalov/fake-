import React from 'react';
import { Link } from 'react-router-dom';
import { wraithHeroBanners, wraithCategoryTabs, wraithProducts } from '../data/datas';

const HomePage = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-screen text-[#111] w-full">
      
      {/* Dynamic HeroBanner Grid */}
      <section className="w-full py-5 min-h-[calc(100vh-96px)] flex items-center">
        <div 
          className="grid grid-cols-1 md:grid-cols-4 gap-4 h-195 w-full px-6"
          style={{ maxWidth: '1440px', margin: '0 auto' }}
        >
          {wraithHeroBanners?.map((banner) => (
            <Link 
              key={banner.id} 
              to={banner.link} 
              className={`rounded-2xl overflow-hidden bg-black group block relative shadow-md ${banner.gridClass}`}
            >
              {banner.type === "video" ? (
                <video
                  src={banner.media}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-103 transition duration-300 ease-in-out"
                />
              ) : (
                <img 
                  src={banner.media} 
                  alt={banner.title} 
                  className="w-full h-full object-cover group-hover:scale-103 transition duration-300 ease-in-out" 
                />
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* CategoryMenu */}
      <section className="w-full py-12 border-t border-gray-200/50">
        <div 
          className="flex justify-between items-end gap-3 overflow-x-auto px-6"
          style={{ maxWidth: '1440px', margin: '0 auto' }}
        >
          {wraithCategoryTabs?.map((item) => (
            <Link key={item.id} to={item.link} className="flex flex-col items-center flex-1 min-w-24 group cursor-pointer">
              <div className="w-full h-24 flex items-center justify-center bg-transparent">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="max-w-full max-h-full object-contain group-hover:-translate-y-1.5 transition duration-300 ease-in-out" 
                />
              </div>
              <span className="mt-3 text-sm font-black text-black text-center whitespace-nowrap tracking-tight">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Product Cards */}
      <section className="w-full pb-20">
        <div 
          className="px-6"
          style={{ maxWidth: '1440px', margin: '0 auto' }}
        >
          <h2 className="text-3xl font-black mb-8 text-left">Wraith Ürünleri</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
            {wraithProducts?.map((prod) => (
              <Link key={prod.id} to={`/product/${prod.id}`} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between group">
                <div className="w-full h-64 bg-gray-50 rounded-xl overflow-hidden mb-4">
                  <img src={prod.image} alt={prod.name} className="w-full h-full object-contain group-hover:scale-105 transition duration-300" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 font-extrabold tracking-wider">{prod.brand}</span>
                  <h3 className="font-bold text-base text-gray-900 line-clamp-2 my-1.5">{prod.name}</h3>
                  <div className="text-lg font-black mt-2 text-black">{prod.price} TL</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
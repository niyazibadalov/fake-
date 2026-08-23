import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { wraithProducts } from '../data/datas';

const CategoriesPage = () => {
  const { slug } = useParams();

  return (
    <div className="bg-[#f5f5f5] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-black mb-6 capitalize">{slug ? slug.replace('-', ' ') : 'Tüm Kategoriler'}</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {wraithProducts.map((prod) => (
            <Link key={prod.id} to={`/product/${prod.id}`} className="bg-white p-4 rounded-xl shadow-xs border border-gray-100 block">
              <img src={prod.image} alt={prod.name} className="w-full h-48 object-contain mb-3" />
              <h3 className="font-bold text-sm text-gray-900">{prod.name}</h3>
              <div className="text-base font-black mt-2">{prod.price} TL</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
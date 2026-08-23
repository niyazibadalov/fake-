import React from 'react';
import { useParams } from 'react-router-dom';
import { wraithProducts } from '../data/datas';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = wraithProducts.find((p) => p.id === parseInt(id)) || wraithProducts[0];

  return (
    <div className="bg-[#f5f5f5] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-2xl p-8 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full h-100 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center">
            <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-sm font-bold text-purple-600 tracking-wider">{product.brand}</span>
            <h1 className="text-3xl font-black text-gray-900 my-2">{product.name}</h1>
            <p className="text-gray-600 text-sm mb-6">{product.description}</p>
            <div className="text-2xl font-black text-black mb-6">{product.price} TL</div>
            <button className="bg-[#6b21a8] text-white py-3 px-8 rounded-xl font-bold hover:bg-purple-800 transition">
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
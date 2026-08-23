import React from 'react';
import { brands } from '../data/datas';

const BrandsPage = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-black mb-6">Markalarımız</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {brands.map((b) => (
            <div key={b.id} className="bg-white p-6 rounded-xl text-center font-black text-xl border border-gray-100 shadow-xs">
              {b.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsPage;
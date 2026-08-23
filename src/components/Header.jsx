import React from 'react';
import { Link } from 'react-router-dom';
import { categoryMegaMenu, brandMegaMenu } from '../data/datas';

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div 
        className="w-full h-24 flex items-center justify-between px-6"
        style={{ maxWidth: '1440px', margin: '0 auto' }}
      >
        {/* Logo (Böyüdüldü) */}
        <Link to="/" className="flex flex-col items-start shrink-0">
          <div className="text-4xl font-black tracking-tight text-[#ffcc00] flex items-baseline leading-none">
            WRAITH<span className="text-[#6b21a8] text-5xl ml-0.5">.</span>
          </div>
          <div className="w-full h-[6px] bg-[#6b21a8] mt-1 rounded-full"></div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 font-bold text-base">
          <Link to="/" className="hover:text-[#6b21a8] transition-colors py-8">Ana Sayfa</Link>

          {/* Kategoriler Mega Menu */}
          <div className="group py-8">
            <Link to="/kategoriler" className="flex items-center gap-1.5 hover:text-[#6b21a8] transition-colors">
              Kategoriler
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <div className="fixed left-0 top-24 w-full bg-white border-b border-gray-200 shadow-2xl hidden group-hover:block py-10 z-50">
              <div 
                className="grid grid-cols-6 gap-x-8 gap-y-8 px-6"
                style={{ maxWidth: '1440px', margin: '0 auto' }}
              >
                {categoryMegaMenu.map((cat, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <h4 className="font-black text-black text-sm tracking-wide">{cat.title}</h4>
                    <div className="flex flex-col gap-1.5 mt-1">
                      {cat.items.map((subItem, sIdx) => (
                        <Link key={sIdx} to="/kategoriler" className="text-xs text-gray-500 hover:text-black font-semibold transition-colors">
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Markalar Mega Menu */}
          <div className="group py-8">
            <Link to="/markalar" className="flex items-center gap-1.5 hover:text-[#6b21a8] transition-colors">
              Markalar
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <div className="fixed left-0 top-24 w-full bg-white border-b border-gray-200 shadow-2xl hidden group-hover:block py-10 z-50 max-h-[70vh] overflow-y-auto">
              <div 
                className="grid grid-cols-5 gap-8 px-6"
                style={{ maxWidth: '1440px', margin: '0 auto' }}
              >
                {brandMegaMenu.map((column, colIdx) => (
                  <div key={colIdx} className="flex flex-col gap-2">
                    {column.map((brandName, bIdx) => (
                      <Link key={bIdx} to={`/marka/${brandName.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-bold text-gray-800 hover:text-[#6b21a8] transition-colors">
                        {brandName}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link to="/partner" className="hover:text-[#6b21a8] transition-colors py-8">Partner Programı</Link>
          <Link to="/iletisim" className="hover:text-[#6b21a8] transition-colors py-8">İletişim</Link>
        </nav>

        {/* İkonlar (Böyüdüldü: w-6 h-6) */}
        <div className="flex items-center gap-6 text-gray-800 shrink-0">
          <button aria-label="Axtar" className="hover:text-[#6b21a8] transition-colors cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          </button>
          <button aria-label="Profil" className="hover:text-[#6b21a8] transition-colors cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </button>
          <button aria-label="Səbət" className="hover:text-[#6b21a8] transition-colors cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
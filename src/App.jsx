import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import BrandsPage from './pages/BrandsPage';
import PartnerPage from './pages/PartnerPage';
import ContactPage from './pages/ContactPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kategoriler" element={<CategoriesPage />} />
        <Route path="/kategori/:slug" element={<CategoriesPage />} />
        <Route path="/markalar" element={<BrandsPage />} />
        <Route path="/marka/:slug" element={<BrandsPage />} />
        <Route path="/partner" element={<PartnerPage />} />
        <Route path="/iletisim" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
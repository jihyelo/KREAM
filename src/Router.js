import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import HeaderTop from './components/HeaderTop/HeaderTop';
import HeaderMain from './components/HeaderMain/HeaderMain';

import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Bookmark from './pages/Bookmark/Bookmark';
import SizeSelect from './pages/SizeSelect/SizeSelect';
import PurchaseOption from './pages/PurchaseOption/PurchaseOption';
import SellOption from './pages/SellOption/SellOption';
import Payment from './pages/Payment/Payment';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <HeaderTop />
        <HeaderMain />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route
            path="/purchase-size"
            element={<SizeSelect isPurchaseSize={true} />}
          />
          <Route path="/sell-size" element={<SizeSelect />} />
          <Route
            path="/purchase-option/:requestSize"
            element={<PurchaseOption />}
          />
          <Route path="/sell-option/:requestSize" element={<SellOption />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default Router;

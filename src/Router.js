import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import MainRoutes from './MainRoutes';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default Router;

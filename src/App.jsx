import { Suspense, lazy } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';

// lazy loaded components
const HomePage = lazy(() => import('./assets/components/homepage.jsx'));
const Cart = lazy(() => import('./assets/components/cart.jsx'));
const ProductDetails = lazy(() => import('./assets/components/ProductDetails.jsx'));
const NotFound = lazy(() => import('./assets/components/notfound.jsx'));
import Header from './assets/components/header.jsx';

function App() {
  const location = useLocation();

  // If the path doesn't match any of the known paths, hide the header
  const hideHeaderOnPaths = ['*'];

  const shouldHideHeader = location.pathname !== '/' &&
    location.pathname !== '/cart' &&
    !location.pathname.startsWith('/product/');

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {!shouldHideHeader && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;



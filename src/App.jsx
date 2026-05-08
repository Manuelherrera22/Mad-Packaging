import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Cart from './components/Cart';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Catalogo from './pages/Catalogo';
import Industrias from './pages/Industrias';
import Contacto from './pages/Contacto';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CartProvider>
        <div className="app-container">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/empresa" element={<Empresa />} />
              <Route path="/productos" element={<Catalogo />} />
              <Route path="/industrias" element={<Industrias />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
          </main>
          <Footer />
          <Cart />
          <WhatsAppButton />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;

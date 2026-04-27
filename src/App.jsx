import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
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

import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <img src="/mad-logo.svg" alt="MAD Packaging" className="nav-logo-img" />
        </Link>
        
        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link to="/empresa" onClick={() => setIsOpen(false)}>Empresa</Link>
          <Link to="/productos" onClick={() => setIsOpen(false)}>Catálogo</Link>
          <Link to="/industrias" onClick={() => setIsOpen(false)}>Industrias</Link>
          <Link to="/contacto" className="btn btn-primary nav-btn" onClick={() => setIsOpen(false)}>
            Cotizar
          </Link>
        </nav>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}

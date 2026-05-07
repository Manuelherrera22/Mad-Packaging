import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Mail, Phone } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Top Bar for Industrial Vibe */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-info">
            <span><Phone size={12} className="text-accent"/> 5263-3648</span>
            <span><Mail size={12} className="text-accent"/> ventas@madpackaging.com.ar</span>
          </div>
          <div className="top-bar-socials hidden md:flex">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" style={{display: 'flex', alignItems: 'center'}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" style={{display: 'flex', alignItems: 'center'}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" style={{display: 'flex', alignItems: 'center'}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <img src="/mad-logo.svg" alt="MAD Packaging" className="nav-logo-img" />
        </Link>
        
        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link to="/empresa" onClick={() => setIsOpen(false)}>Empresa</Link>
          <Link to="/productos" onClick={() => setIsOpen(false)}>Catálogo</Link>
          <Link to="/contacto" onClick={() => setIsOpen(false)}>Contacto</Link>
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

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Mail, Phone, Linkedin, Instagram, Facebook } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Top Bar for Industrial Vibe */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-info">
            <span><Phone size={12} className="text-accent"/> +54 9 11 1234-5678</span>
            <span><Mail size={12} className="text-accent"/> ventas@madpackaging.com</span>
          </div>
          <div className="top-bar-socials hidden md:flex">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={14} /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={14} /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={14} /></a>
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

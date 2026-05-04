import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Linkedin, Instagram, Facebook } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/mad-logo.svg" alt="MAD Packaging" className="footer-logo-img" />
            </Link>
            <p className="text-muted mt-4">
              Socios estratégicos en soluciones de empaque para la industria. 
              Calidad, resistencia y eficiencia para la protección de sus productos.
            </p>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-heading">Navegación</h4>
            <ul>
              <li><Link to="/empresa">Nuestra Empresa</Link></li>
              <li><Link to="/productos">Catálogo de Productos</Link></li>
              <li><Link to="/industrias">Sectores Industriales</Link></li>
              <li><Link to="/contacto">Contacto y Cotizaciones</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4 className="footer-heading">Contacto</h4>
            <ul className="contact-list">
              <li>
                <MapPin size={20} className="text-accent" />
                <span>Av. Industrial 1234, Parque Industrial, Ciudad.</span>
              </li>
              <li>
                <Phone size={20} className="text-accent" />
                <span>+54 9 11 1234-5678</span>
              </li>
              <li>
                <Mail size={20} className="text-accent" />
                <span>ventas@madpackaging.com</span>
              </li>
            </ul>
          </div>

          <div className="footer-social">
            <h4 className="footer-heading">Seguinos en</h4>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} MAD Packaging Industrial SRL. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

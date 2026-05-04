import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Zap } from 'lucide-react';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-bg-pattern"></div>
        <div className="container hero-content">
          <span className="badge">Soluciones Industriales de Embalaje</span>
          <h1 className="heading-xl text-gradient">Protección óptima para<br/>su cadena de valor</h1>
          <p className="hero-subtitle text-muted">
            Fabricamos y proveemos soluciones integrales en materiales de empaque con los más altos estándares de calidad y eficiencia para el sector logístico e industrial.
          </p>
          <div className="hero-actions">
            <Link to="/productos" className="btn btn-primary">Ver Catálogo</Link>
            <Link to="/contacto" className="btn btn-outline">Solicitar Cotización</Link>
          </div>

          {/* Stats strip */}
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">15+</span>
              <span className="hero-stat-label">Años de experiencia</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-value">500+</span>
              <span className="hero-stat-label">Ton/mes procesadas</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-value">300%</span>
              <span className="hero-stat-label">Rendimiento de film</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section intro-section">
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="badge">Nuestra Propuesta</span>
              <h2 className="heading-lg">Empaque seguro, <br/><span className="text-accent">logística eficiente.</span></h2>
              <p className="text-muted" style={{ marginTop: '1.5rem', fontSize: '1.1rem' }}>
                En MAD Packaging Industrial nos dedicamos a optimizar los procesos de embalaje de nuestros clientes. Proveemos materiales resistentes que aseguran la carga durante el transporte y almacenamiento.
              </p>
              <Link to="/empresa" className="btn btn-outline" style={{ marginTop: '2rem' }}>
                Conocer la Empresa <ArrowRight size={18} />
              </Link>
            </div>
            <div className="features-grid">
              <div className="feature-card card">
                <div className="card-content">
                  <ShieldCheck size={36} className="text-accent" />
                  <h3 style={{ marginTop: '1rem', fontSize: '1.25rem' }}>Calidad Certificada</h3>
                  <p className="text-muted" style={{ fontSize: '0.9rem' }}>Materiales de alta resistencia testeados bajo normas industriales.</p>
                </div>
              </div>
              <div className="feature-card card">
                <div className="card-content">
                  <Truck size={36} className="text-steel" />
                  <h3 style={{ marginTop: '1rem', fontSize: '1.25rem' }}>Entrega Rápida</h3>
                  <p className="text-muted" style={{ fontSize: '0.9rem' }}>Contamos con stock permanente y flota propia para despachos.</p>
                </div>
              </div>
              <div className="feature-card card" style={{ gridColumn: 'span 2' }}>
                <div className="card-content">
                  <Zap size={36} className="text-teal" />
                  <h3 style={{ marginTop: '1rem', fontSize: '1.25rem' }}>Rendimiento Superior</h3>
                  <p className="text-muted" style={{ fontSize: '0.9rem' }}>Nuestros films stretch rinden hasta un 300% asegurando mayor eficiencia y reducción de costos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="section bg-secondary">
        <div className="container text-center">
          <span className="badge">Productos</span>
          <h2 className="heading-lg">Categorías Destacadas</h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '1rem auto 3rem' }}>
            Explora las soluciones de empaque principal que manejamos para cubrir todas sus necesidades operativas.
          </p>

          <div className="grid grid-cols-3">
            {[
              { title: 'Film Stretch', img: '/img/film_stretch.png', url: '/productos' },
              { title: 'Bolsas de Polietileno', img: '/img/bolsas_industriales.png', url: '/productos' },
              { title: 'Cintas Adhesivas', img: '/img/cintas_adhesivas.png', url: '/productos' }
            ].map((cat, i) => (
              <div key={i} className="card text-left">
                <div className="card-img-wrapper" style={{ height: '220px' }}>
                  <img src={cat.img} alt={cat.title} />
                </div>
                <div className="card-content text-center">
                  <h3>{cat.title}</h3>
                  <Link to={cat.url} className="text-accent" style={{ display: 'inline-block', marginTop: '1rem', fontWeight: 700 }}>Ver más →</Link>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: '4rem' }}>
            <Link to="/productos" className="btn btn-primary">Ver todo el catálogo</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2 className="heading-lg">¿Listo para optimizar su embalaje?</h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '1.5rem auto 2.5rem' }}>
            Nuestro equipo de técnicos comerciales le asesorará para elegir el material exacto que su línea de producción o logística requiere.
          </p>
          <Link to="/contacto" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1rem' }}>Solicitar Cotización Ahora</Link>
        </div>
      </section>
    </div>
  );
}

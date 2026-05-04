import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Zap, Timer, PackageOpen } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Home.css';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const filters = ['Todos', 'Film Stretch', 'Polietileno', 'Complementario'];

  const filteredProducts = activeFilter === 'Todos' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  const newProducts = products.filter(p => p.isNew);

  return (
    <div className="home-page animate-fade-in">
      {/* Ultra Modern Hero Section */}
      <section className="hero" style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-overlay" style={{ background: 'linear-gradient(90deg, rgba(3,3,5,1) 0%, rgba(3,3,5,0.8) 50%, rgba(3,3,5,0.4) 100%)' }}></div>
        <div className="hero-bg-pattern"></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
            {/* Left: Clear Copy */}
            <div className="hero-content text-left">
              <span className="badge" style={{ marginBottom: '1.5rem', animation: 'pulse-glow 2s infinite' }}>Calidad Garantizada</span>
              <h1 className="heading-xl" style={{ fontSize: '4rem', lineHeight: '1.1', color: 'white' }}>
                Fabricantes líderes en <span className="text-accent">Film Stretch</span> de alta calidad
              </h1>
              <p className="hero-subtitle text-muted" style={{ maxWidth: '600px', margin: '2rem 0', fontSize: '1.25rem' }}>
                Producimos y proveemos soluciones integrales de embalaje industrial. Optimice sus costos y asegure su mercadería con nuestra tecnología de extrusión multicapa.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#catalogo" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' }); }} style={{ padding: '1rem 2rem' }}>Ver Catálogo</a>
                <Link to="/contacto" className="btn btn-outline" style={{ padding: '1rem 2rem' }}>Contactar Ventas</Link>
              </div>
            </div>

            {/* Right: Direct Product Image */}
            <div className="hero-image-wrapper animate-fade-in" style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '120%', height: '120%', background: 'radial-gradient(circle, rgba(228,71,46,0.2) 0%, transparent 70%)', zIndex: -1 }}></div>
              <img 
                src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800" 
                alt="Rollos de Film Stretch Industrial" 
                style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', transform: 'perspective(1000px) rotateY(-5deg)' }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 48hs Delivery Emphasis Banner */}
      <div className="delivery-banner">
        <Timer size={40} className="text-teal" />
        <span className="delivery-text text-white">ENTREGA INMEDIATA EN <span className="text-teal">48 HORAS</span> PARA ZONAS INDUSTRIALES</span>
        <Truck size={40} className="text-teal" />
      </div>

      {/* Hook Section: Quiénes Somos y Qué Hacemos */}
      <section className="section bg-tertiary" style={{ padding: '5rem 0', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <span className="badge">Nuestra Esencia</span>
              <h2 className="heading-lg" style={{ marginTop: '1rem', lineHeight: '1.2' }}>No somos solo fabricantes.<br/><span className="text-accent">Somos sus socios estratégicos.</span></h2>
              <p className="text-muted" style={{ fontSize: '1.1rem', margin: '1.5rem 0', lineHeight: '1.6' }}>
                En <strong>MAD Packaging Industrial</strong> nos especializamos en entender y resolver los desafíos logísticos más complejos de su empresa. Fabricamos soluciones integrales de empaque que no solo protegen su mercadería, sino que <strong>reducen sus costos operativos</strong> y aumentan la velocidad de sus despachos.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <ShieldCheck className="text-accent" size={24} style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Fabricación de Alto Rendimiento</h4>
                    <p className="text-muted" style={{ fontSize: '0.9rem' }}>Nuestros films de extrusión multicapa garantizan una elongación superior al 300%.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Zap className="text-teal" size={24} style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Asesoría Técnica en Planta</h4>
                    <p className="text-muted" style={{ fontSize: '0.9rem' }}>Auditamos su proceso de empaque para recomendar el micronaje exacto, evitando desperdicios.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hook-cards" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="card" style={{ padding: '2rem', background: 'linear-gradient(145deg, rgba(3,3,5,0.8), rgba(228, 71, 46, 0.05))', border: '1px solid rgba(228, 71, 46, 0.2)' }}>
                <h3 className="text-accent" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>+15 Años</h3>
                <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Liderando el sector del empaque</p>
                <p className="text-muted" style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Trayectoria comprobable abasteciendo a las industrias más exigentes del país.</p>
              </div>
              <div className="card" style={{ padding: '2rem', background: 'linear-gradient(145deg, rgba(3,3,5,0.8), rgba(0, 191, 165, 0.05))', border: '1px solid rgba(0, 191, 165, 0.2)' }}>
                <h3 className="text-teal" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>500 Toneladas</h3>
                <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Capacidad productiva mensual</p>
                <p className="text-muted" style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Stock permanente para garantizar que su línea de producción jamás se detenga.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lanzamientos Novedosos */}
      <section className="section bg-secondary" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <Zap size={32} className="text-accent" />
            <h2 className="heading-lg" style={{ margin: 0 }}>Lanzamientos Novedosos</h2>
          </div>
          <div className="grid grid-cols-3">
            {newProducts.map(p => (
              <ProductCard key={`new-${p.id}`} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Catálogo en Vivo (Zero Friction) */}
      <section className="section" style={{ padding: '2rem 0 6rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge">Catálogo Completo</span>
            <h2 className="heading-lg" style={{ marginTop: '1rem' }}>Compre Sin Fricción</h2>
            <p className="text-muted text-center" style={{ maxWidth: '600px', margin: '1rem auto' }}>
              Filtre, seleccione y cotice directamente desde aquí. Sin pasos extras.
            </p>
          </div>

          <div className="catalog-filters" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {filters.map(filter => (
              <button 
                key={filter}
                className={`btn ${activeFilter === filter ? 'btn-primary' : 'btn-outline'}`}
                style={activeFilter === filter ? {} : { borderRadius: '100px' }}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
                {activeFilter === filter && <span style={{ marginLeft: '0.25rem', opacity: 0.8, fontSize: '0.8rem' }}>({filteredProducts.length})</span>}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3">
            {filteredProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container text-center">
          <PackageOpen size={48} className="text-accent" style={{ margin: '0 auto 1.5rem' }} />
          <h2 className="heading-lg">¿Requiere un volumen mayorista?</h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '1.5rem auto 2.5rem' }}>
            Nuestro equipo de técnicos comerciales le asesorará para elegir el material exacto que su línea de producción o logística requiere.
          </p>
          <Link to="/contacto" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1rem' }}>Contactar Asesor</Link>
        </div>
      </section>
    </div>
  );
}

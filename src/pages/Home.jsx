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
      <section className="hero" style={{ padding: '8rem 0 4rem', position: 'relative' }}>
        <div className="hero-overlay" style={{ background: 'radial-gradient(circle at center, rgba(3,3,5,0) 0%, rgba(3,3,5,1) 100%)' }}></div>
        <div className="hero-bg-pattern"></div>
        <div className="container hero-content text-center">
          <span className="badge" style={{ marginBottom: '1.5rem', animation: 'pulse-glow 2s infinite' }}>Soluciones de Alta Tecnología</span>
          <h1 className="heading-xl text-gradient" style={{ fontSize: '4.5rem', lineHeight: '1.1' }}>
            Protección Absoluta <br/> para su Cadena de Valor
          </h1>
          <p className="hero-subtitle text-muted" style={{ maxWidth: '700px', margin: '2rem auto' }}>
            Descubra el catálogo más innovador en materiales de empaque industrial. Calidad testeada bajo normas internacionales para asegurar su logística sin fricciones.
          </p>
        </div>
      </section>

      {/* 48hs Delivery Emphasis Banner */}
      <div className="delivery-banner">
        <Timer size={40} className="text-teal" />
        <span className="delivery-text text-white">ENTREGA INMEDIATA EN <span className="text-teal">48 HORAS</span> PARA ZONAS INDUSTRIALES</span>
        <Truck size={40} className="text-teal" />
      </div>

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

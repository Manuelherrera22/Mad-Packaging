import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Zap, Timer, PackageOpen } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import ProductQuickView from '../components/ProductQuickView';
import { products, mainCategories } from '../data/products';
import './Home.css';

export default function Home() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const newProducts = products.filter(p => p.isNew);

  const heroSlides = [
    {
      img: '/img/film_stretch_1.jpg',
      title: 'Film Stretch',
      subtitle: 'Máximo rendimiento para paletizado'
    },
    {
      img: '/img/cinta_torre.jpg',
      title: 'Cintas Industriales',
      subtitle: 'Alta adherencia para cierres seguros'
    },
    {
      img: '/img/film_stretch_2.jpg',
      title: 'Insumos Integrales',
      subtitle: 'Todo lo que tu línea logística requiere'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

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
              <h1 className="heading-xl" style={{ fontSize: '3.5rem', lineHeight: '1.1', color: 'white' }}>
                Soluciones completas en <span className="text-accent">embalaje industrial</span>
              </h1>
              <p className="hero-subtitle text-muted" style={{ maxWidth: '600px', margin: '2rem 0', fontSize: '1.2rem', lineHeight: '1.6' }}>
                Stretch film, cintas adhesivas, flejes, esquineros, pluribol, cartón y mucho más. Nos ocupamos de brindarte lo necesario para proteger y trasladar tus productos, garantizando su integridad en cada etapa.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#catalogo" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' }); }} style={{ padding: '1rem 2rem' }}>Ver Catálogo</a>
                <Link to="/contacto" className="btn btn-outline" style={{ padding: '1rem 2rem' }}>Contactar</Link>
              </div>
            </div>

            {/* Right: Automated Carousel */}
            <div className="hero-carousel-wrapper animate-fade-in" style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', height: '450px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
              {heroSlides.map((slide, index) => (
                <div 
                  key={index}
                  style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    opacity: currentSlide === index ? 1 : 0,
                    transition: 'opacity 0.8s ease-in-out',
                    zIndex: currentSlide === index ? 10 : 1
                  }}
                >
                  <img src={slide.img} alt={slide.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  {/* Dark gradient to make text readable */}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '150px', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.5rem' }}>
                    <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'white' }}>{slide.title}</h3>
                    <p style={{ margin: '0.25rem 0 1rem 0', color: 'var(--text-muted)', fontSize: '1rem' }}>{slide.subtitle}</p>
                  </div>
                </div>
              ))}
              
              {/* Carousel Indicators */}
              <div style={{ position: 'absolute', bottom: '20px', left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: '0.5rem', zIndex: 20 }}>
                {heroSlides.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    style={{ 
                      width: currentSlide === index ? '24px' : '8px', 
                      height: '8px', 
                      borderRadius: '4px',
                      background: currentSlide === index ? 'var(--accent-color)' : 'rgba(255,255,255,0.4)',
                      border: 'none',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    aria-label={`Ir a la imagen ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 48hs Delivery Emphasis Banner */}
      <div className="delivery-banner">
        <Timer size={40} className="text-teal" />
        <span className="delivery-text text-white" style={{ fontSize: '1.25rem' }}>Entrega rápida en CABA y GBA. Despachamos al interior. <span className="text-teal">Recibí tu pedido hoy o en un máximo de 48 horas.</span></span>
        <Truck size={40} className="text-teal" />
      </div>

      {/* Hook Section: Quiénes Somos y Qué Hacemos */}
      <section className="section bg-tertiary" style={{ padding: '5rem 0', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <span className="badge">Puntos Clave</span>
              <h2 className="heading-lg" style={{ marginTop: '1rem', lineHeight: '1.2' }}>No vendemos solo productos.<br/><span className="text-accent">Impulsamos la eficiencia de su operación.</span></h2>
              <p className="text-muted" style={{ fontSize: '1.1rem', margin: '1.5rem 0', lineHeight: '1.6' }}>
                En <strong>MAD Packaging</strong> combinamos stock permanente, asesoramiento técnico y soluciones integrales de embalaje para reducir costos, optimizar procesos y asegurar continuidad operativa.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <ShieldCheck className="text-accent" size={24} style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Calidad Garantizada</h4>
                    <p className="text-muted" style={{ fontSize: '0.9rem' }}>Todos nuestros productos cumplen con estándares rigurosos, asegurando durabilidad y rendimiento óptimo.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <ShieldCheck className="text-teal" size={24} style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Garantía de Satisfacción</h4>
                    <p className="text-muted" style={{ fontSize: '0.9rem' }}>Respaldamos cada entrega, asegurándonos de que cada cliente reciba exactamente lo que necesita, sin sorpresas.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hook-cards" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
              <div className="card" style={{ padding: '3.5rem 1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h3 className="text-accent text-neon-pulse" style={{ fontSize: '4.5rem', marginBottom: '1rem', lineHeight: 1 }}>+15 Años</h3>
                <p style={{ fontWeight: '600', fontSize: '1.3rem', color: '#fff' }}>brindando soluciones en embalaje</p>
                <p className="text-muted" style={{ fontSize: '1rem', marginTop: '0.75rem' }}>Trayectoria comprobable abasteciendo a industrias exigentes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuevos Productos */}
      <section className="section bg-secondary" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <Zap size={32} className="text-accent" />
            <h2 className="heading-lg" style={{ margin: 0 }}>Nuevos Productos</h2>
          </div>
          <div className="grid grid-cols-3">
            {newProducts.map(p => (
              <ProductCard key={`new-${p.id}`} product={p} onQuickView={setQuickViewProduct} />
            ))}
          </div>
        </div>
      </section>

      {/* Categorías Principales */}
      <section className="section" style={{ padding: '2rem 0 6rem' }} id="catalogo">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge">Catálogo</span>
            <h2 className="heading-lg" style={{ marginTop: '1rem' }}>Líneas de Productos</h2>
            <p className="text-muted text-center" style={{ maxWidth: '600px', margin: '1rem auto' }}>
              Explore nuestras categorías y encuentre la solución de empaque perfecta para su industria.
            </p>
          </div>

          <div className="grid grid-cols-3">
            {mainCategories.map(cat => (
              <Link to={`/productos?categoria=${encodeURIComponent(cat.name)}`} key={cat.id} className="card text-left" style={{ cursor: 'pointer', textDecoration: 'none' }}>
                <div className="card-img-wrapper">
                  <img src={cat.img} alt={cat.name} loading="lazy" />
                </div>
                <div className="card-content">
                  <h3 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>{cat.name}</h3>
                  <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '40px' }}>
                    {cat.desc}
                  </p>
                  <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                    <span className="text-accent" style={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.85rem' }}>
                      Ver Productos <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
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

      {quickViewProduct && (
        <ProductQuickView product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
      )}
    </div>
  );
}

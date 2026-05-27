import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Zap, Timer, PackageOpen } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import ProductQuickView from '../components/ProductQuickView';
import ArgentinaMap from '../components/ArgentinaMap';
import { products, mainCategories } from '../data/products';
import './Home.css';

export default function Home() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const newProducts = products.filter(p => p.isNew);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const bentoData = [
    {
      title: 'Film Stretch',
      subtitle: 'Máximo rendimiento para paletizado',
      link: '/productos?categoria=Film%20Stretch',
      images: ['/img/film_stretch_1.jpg', '/img/film_stretch_2.jpg', '/img/film_mango.jpg']
    },
    {
      title: 'Cintas Adhesivas',
      subtitle: 'Alta adherencia para cierres seguros',
      link: '/productos?categoria=Cintas%20Adhesivas',
      images: ['/img/cinta_torre.jpg', '/img/cinta_caja.jpg', '/img/cinta_torre.jpg'] // using torra/caja twice to ensure 3 images
    },
    {
      title: 'Protección y seguridad',
      subtitle: 'Todo lo que tu línea logística requiere',
      link: '/productos?categoria=Protección%20y%20Empaque',
      images: ['/img/bolsas_industriales.png', '/img/flejes_hebillas.png', '/img/film_burbujas.png']
    }
  ];

  const heroSlides = [
    {
      img: '/img/film_stretch_1.jpg',
      title: 'Film Stretch',
      subtitle: 'Máximo rendimiento para paletizado'
    },
    {
      img: '/img/cinta_torre.jpg',
      title: 'Cintas Adhesivas',
      subtitle: 'Alta adherencia para cierres seguros'
    },
    {
      img: '/img/film_stretch_2.jpg',
      title: 'Protección y seguridad',
      subtitle: 'Todo lo que tu línea logística requiere'
    }
  ];



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

            {/* Right: Bento Grid of Products */}
            <div className="hero-bento-wrapper animate-fade-in" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '1rem', height: '480px' }}>
              {bentoData.map((bento, index) => {
                const isMain = index === 0;
                return (
                  <Link 
                    to={bento.link} 
                    key={index}
                    className="bento-card"
                    style={{ 
                      gridRow: isMain ? '1 / span 2' : 'auto', 
                      position: 'relative', 
                      borderRadius: '16px', 
                      overflow: 'hidden', 
                      border: '1px solid rgba(255,255,255,0.08)', 
                      background: 'var(--bg-tertiary)',
                      display: 'block'
                    }}
                  >
                    {bento.images.map((img, i) => (
                      <div 
                        key={i}
                        style={{
                          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                          opacity: activeIndex === i ? 1 : 0,
                          transition: 'opacity 0.8s ease-in-out',
                          zIndex: activeIndex === i ? 5 : 1
                        }}
                      >
                        <img src={img} alt={`Imagen ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    ))}
                    
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: isMain ? '2rem' : '1.5rem', paddingBottom: '2.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)', zIndex: 10, pointerEvents: 'none' }}>
                      <h3 style={{ margin: 0, fontSize: isMain ? '1.8rem' : '1.2rem', color: 'white', fontWeight: 800 }}>{bento.title}</h3>
                    </div>

                    {/* Tiny indicators inside each card */}
                    <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', display: 'flex', gap: '6px', zIndex: 10 }}>
                      {bento.images.map((_, i) => (
                        <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: activeIndex === i ? 'var(--accent-color)' : 'rgba(255,255,255,0.4)', transition: 'background-color 0.3s', boxShadow: activeIndex === i ? '0 0 5px var(--accent-color)' : 'none' }} />
                      ))}
                    </div>
                  </Link>
                )
              })}
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
              <h2 className="heading-lg" style={{ marginTop: '1rem', lineHeight: '1.2' }}>No vendemos solo productos<br/><span className="text-accent">Impulsamos la eficiencia de su operación</span></h2>
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
            
            <div className="hook-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
              <div className="card" style={{ padding: '3.5rem 1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h3 className="text-accent text-neon-pulse" style={{ fontSize: '4.5rem', marginBottom: '1rem', lineHeight: 1 }}>+15 Años</h3>
                <p style={{ fontWeight: '600', fontSize: '1.3rem', color: '#fff' }}>brindando soluciones en embalaje</p>
                <p className="text-muted" style={{ fontSize: '1rem', marginTop: '0.75rem' }}>Trayectoria comprobable abasteciendo a industrias exigentes.</p>
              </div>

              <div className="card" style={{ padding: '2rem 1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 1 }}>
                  <ArgentinaMap />
                </div>
                <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', pointerEvents: 'none', background: 'radial-gradient(circle, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 80%)', padding: '1rem' }}>
                  <h3 className="text-white" style={{ fontSize: '2rem', marginBottom: '0.5rem', fontWeight: 800 }}>Cobertura<br/>Nacional</h3>
                  <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.4, color: '#fff' }}>
                    Los productos donde los necesites
                  </p>
                </div>
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
          <div className="grid grid-cols-2" style={{ maxWidth: '800px', margin: '0 auto', gap: '3rem' }}>
            {newProducts.map(p => (
              <ProductCard key={`new-${p.id}`} product={p} />
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
                  <h3 style={{ fontSize: '1.5rem', margin: '0.5rem 0 1.5rem 0' }}>{cat.name}</h3>
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



      {quickViewProduct && (
        <ProductQuickView product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
      )}
    </div>
  );
}

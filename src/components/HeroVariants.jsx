import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroVariants.css';

// Componente de texto exacto al original
const LeftContent = () => (
  <div className="hero-content text-left" style={{ zIndex: 10, position: 'relative' }}>
    <span className="badge" style={{ marginBottom: '1.5rem', animation: 'pulse-glow 2s infinite' }}>CALIDAD GARANTIZADA</span>
    <h1 className="heading-xl" style={{ fontSize: '3.5rem', lineHeight: '1.1', color: 'white' }}>
      Soluciones completas en <span className="text-accent">embalaje industrial</span>
    </h1>
    <p className="hero-subtitle text-muted" style={{ maxWidth: '600px', margin: '2rem 0', fontSize: '1.2rem', lineHeight: '1.6' }}>
      Stretch film, cintas adhesivas, flejes, esquineros, pluribol, cartón y mucho más. Nos ocupamos de brindarte lo necesario para proteger y trasladar tus productos, garantizando su integridad en cada etapa.
    </p>
    <div style={{ display: 'flex', gap: '1rem' }}>
      <a href="#catalogo" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' }); }} style={{ padding: '1rem 2rem' }}>VER CATÁLOGO</a>
      <Link to="/contacto" className="btn btn-outline" style={{ padding: '1rem 2rem' }}>CONTACTAR</Link>
    </div>
  </div>
);

const bentoData = [
  { title: 'Film Stretch', image: '/img/film_stretch_1.jpg', link: '/productos?categoria=Film%20Stretch' },
  { title: 'Cintas Adhesivas', image: '/img/cinta_torre.jpg', link: '/productos?categoria=Cintas%20Adhesivas' },
  { title: 'Protección y seguridad', image: '/img/film_burbujas.png', link: '/productos?categoria=Protección%20y%20Empaque' }
];

export function HeroVariant1() {
  // Propuesta 1: Fondo Oscuro Limpio + Bento Original
  // Mantiene exactamente la estructura que tenían, pero quita la foto del almacén del fondo
  // que es lo que causaba el conflicto visual de "foto sobre foto".
  return (
    <section className="hero" style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden', background: '#08080a', minHeight: '90vh', display: 'flex', alignItems: 'center', marginTop: '80px' }}>
      <div className="hero-bg-pattern"></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
          <LeftContent />
          
          <div className="hero-bento-wrapper animate-fade-in" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '1rem', height: '480px' }}>
            {bentoData.map((bento, index) => {
              const isMain = index === 0;
              return (
                <Link to={bento.link} key={index} className="bento-card" style={{ gridRow: isMain ? '1 / span 2' : 'auto', position: 'relative', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', background: 'var(--bg-tertiary)', display: 'block' }}>
                  <img src={bento.image} alt={bento.title} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: isMain ? '2.5rem 2rem' : '1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)', zIndex: 10 }}>
                    <h3 style={{ margin: 0, fontSize: isMain ? '1.8rem' : '1.2rem', color: 'white', fontWeight: 800, textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>{bento.title}</h3>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HeroVariant2() {
  // Propuesta 2: Tres Columnas Flotantes Elegantes
  // En lugar de una imagen gigante que se ve mal cortada, usamos 3 tarjetas verticales
  // de igual tamaño que le dan un look mucho más moderno y equilibrado tipo Apple/Stripe.
  return (
    <section className="hero" style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden', background: '#0a0a0c', minHeight: '90vh', display: 'flex', alignItems: 'center', marginTop: '80px' }}>
      {/* Sutil resplandor en el fondo */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', background: 'radial-gradient(ellipse, rgba(228, 71, 46, 0.08) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '3rem' }}>
          <LeftContent />
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', height: '450px' }}>
            {bentoData.map((item, index) => (
              <Link to={item.link} key={index} className="v2-card" style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', transform: `translateY(${index === 1 ? '30px' : '0px'})` }}>
                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="v2-img" />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem 1rem', background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)', textAlign: 'center' }}>
                  <h3 style={{ color: 'white', margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HeroVariant3() {
  // Propuesta 3: Fondo Almacén Ultra-Blur + Tarjeta Carrusel Pequeña
  // Conserva el fondo original del almacén pero extremadamente difuminado para dar atmósfera sin molestar.
  // A la derecha, un slider contenido y elegante (no gigante) que muestra los 3 productos rotando.
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % bentoData.length), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center', marginTop: '80px' }}>
      {/* Fondo Original pero con BLUR */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: `url('https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1920')`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(15px) brightness(0.4)', zIndex: 0, transform: 'scale(1.05)' }}></div>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(90deg, rgba(10,10,12,1) 0%, rgba(10,10,12,0.6) 60%, rgba(10,10,12,0.2) 100%)', zIndex: 1 }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
          <LeftContent />
          
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '400px', height: '480px', borderRadius: '24px', overflow: 'hidden', position: 'relative', boxShadow: '0 30px 60px rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.1)' }}>
              {bentoData.map((slide, index) => (
                <div key={index} style={{
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                  opacity: index === current ? 1 : 0, transition: 'opacity 0.8s ease-in-out'
                }}>
                  <img src={slide.image} alt={slide.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)' }}>
                    <h3 style={{ margin: 0, color: 'white', fontSize: '1.8rem', fontWeight: 800 }}>{slide.title}</h3>
                  </div>
                </div>
              ))}
              <div style={{ position: 'absolute', bottom: '20px', right: '20px', display: 'flex', gap: '8px' }}>
                 {bentoData.map((_, idx) => (
                   <span key={idx} style={{ width: '8px', height: '8px', borderRadius: '50%', background: idx === current ? 'var(--accent-color)' : 'rgba(255,255,255,0.3)', transition: 'background 0.3s' }}></span>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

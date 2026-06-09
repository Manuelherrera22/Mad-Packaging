import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Zap, Timer, PackageOpen } from 'lucide-react';
import { supabase } from '../supabaseClient';
import ProductCard from '../components/ProductCard';
import ProductQuickView from '../components/ProductQuickView';
import ArgentinaMap from '../components/ArgentinaMap';
import { HeroVariant1, HeroVariant2, HeroVariant3 } from '../components/HeroVariants';
import './Home.css';

export default function Home() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [heroVariant, setHeroVariant] = useState(1);
  const [products, setProducts] = useState([]);
  const [mainCategories, setMainCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: prods } = await supabase.from('products').select('*');
      const { data: cats } = await supabase.from('categories').select('*');
      if (prods) setProducts(prods);
      if (cats) setMainCategories(cats);
    };
    fetchData();
  }, []);

  const newProducts = products.filter(p => p.is_new);

  return (
    <div className="home-page animate-fade-in">
      {/* Selector temporal para revisión del cliente */}
      <div style={{ position: 'fixed', top: '100px', right: '20px', zIndex: 9999, background: 'rgba(10,10,12,0.85)', padding: '12px', borderRadius: '12px', border: '1px solid var(--accent-color)', display: 'flex', gap: '10px', backdropFilter: 'blur(10px)', boxShadow: '0 10px 25px rgba(0,0,0,0.5)', alignItems: 'center' }}>
        <span style={{color:'white', fontSize:'0.85rem', fontWeight:'600'}}>Propuestas Hero:</span>
        <button onClick={() => setHeroVariant(1)} className={`btn ${heroVariant === 1 ? 'btn-primary' : 'btn-outline'}`} style={{padding: '0.4rem 0.8rem', fontSize:'0.8rem', minHeight: 'auto'}}>1. Dividido</button>
        <button onClick={() => setHeroVariant(2)} className={`btn ${heroVariant === 2 ? 'btn-primary' : 'btn-outline'}`} style={{padding: '0.4rem 0.8rem', fontSize:'0.8rem', minHeight: 'auto'}}>2. Carrusel</button>
        <button onClick={() => setHeroVariant(3)} className={`btn ${heroVariant === 3 ? 'btn-primary' : 'btn-outline'}`} style={{padding: '0.4rem 0.8rem', fontSize:'0.8rem', minHeight: 'auto'}}>3. Minimal</button>
      </div>

      {heroVariant === 1 && <HeroVariant1 />}
      {heroVariant === 2 && <HeroVariant2 />}
      {heroVariant === 3 && <HeroVariant3 />}

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

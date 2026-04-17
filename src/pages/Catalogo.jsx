import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    category: 'Film Stretch',
    title: 'Film Stretch Manual y Automático',
    desc: 'Alta capacidad de elongación, cristalino y resistente al punzado. Ideal para paletizado y consolidación de carga en depósitos.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600'
  },
  {
    id: 2,
    category: 'Polietileno',
    title: 'Bolsas Industriales',
    desc: 'Polietileno de alta y baja densidad. Distintos espesores y medidas a pedido. Uso en el agro, construcción industrial y comercio.',
    img: 'https://images.unsplash.com/photo-1605642878415-dcbd4ddbabe5?q=80&w=600'
  },
  {
    id: 3,
    category: 'Polietileno',
    title: 'Film Termocontraíble',
    desc: 'Empaque secundario que se adapta a la forma del producto mediante la aplicación de calor, brindando inviolabilidad visual.',
    img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600'
  },
  {
    id: 4,
    category: 'Polietileno',
    title: 'Film con Burbujas',
    desc: 'Máxima protección contra impactos para mercadería frágil. Rollos en varios anchos y gramajes.',
    img: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=600'
  },
  {
    id: 5,
    category: 'Complementario',
    title: 'Cintas Adhesivas',
    desc: 'Cintas de embalaje acrílicas y hot melt. Cintas de enmascarar, doble faz y con impresiones personalizadas.',
    img: 'https://images.unsplash.com/photo-1622216091373-c600122e2098?q=80&w=600'
  },
  {
    id: 6,
    category: 'Complementario',
    title: 'Flejes y Hebillas',
    desc: 'Flejes plásticos (PP y PET) orientados a soportar alta tensión. Sistemas de cierre para un enzunchado seguro.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600'
  }
];

export default function Catalogo() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const filters = ['Todos', 'Film Stretch', 'Polietileno', 'Complementario'];

  const filteredProducts = activeFilter === 'Todos' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <div className="animate-fade-in" style={{ paddingTop: '80px', paddingBottom: '4rem' }}>
      <div className="container" style={{ marginTop: '3rem' }}>
        <h1 className="heading-lg text-center">Catálogo de Productos</h1>
        <p className="text-muted text-center" style={{ maxWidth: '600px', margin: '1rem auto 3rem' }}>
          Conozca nuestras soluciones de embalaje diseñadas con ingeniería de materiales para asegurar su línea de producción.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {filters.map(filter => (
            <button 
              key={filter}
              className={`btn ${activeFilter === filter ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3">
          {filteredProducts.map(p => (
            <div key={p.id} className="card text-left">
              <div className="card-img-wrapper" style={{ height: '240px' }}>
                <img src={p.img} alt={p.title} />
              </div>
              <div className="card-content">
                <span className="badge">{p.category}</span>
                <h3 style={{ fontSize: '1.25rem', margin: '0.5rem 0' }}>{p.title}</h3>
                <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '60px' }}>
                  {p.desc}
                </p>
                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Link to="/contacto" className="text-accent" style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    Cotizar <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { ChevronRight, ShoppingCart, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    category: 'Film Stretch',
    title: 'Film Stretch Manual y Automático',
    desc: 'Alta capacidad de elongación, cristalino y resistente al punzado. Ideal para paletizado y consolidación de carga en depósitos.',
    img: '/img/film_stretch.png'
  },
  {
    id: 2,
    category: 'Polietileno',
    title: 'Bolsas Industriales',
    desc: 'Polietileno de alta y baja densidad. Distintos espesores y medidas a pedido. Uso en el agro, construcción industrial y comercio.',
    img: '/img/bolsas_industriales.png'
  },
  {
    id: 3,
    category: 'Polietileno',
    title: 'Film Termocontraíble',
    desc: 'Empaque secundario que se adapta a la forma del producto mediante la aplicación de calor, brindando inviolabilidad visual.',
    img: '/img/film_termocontraible.png'
  },
  {
    id: 4,
    category: 'Polietileno',
    title: 'Film con Burbujas',
    desc: 'Máxima protección contra impactos para mercadería frágil. Rollos en varios anchos y gramajes.',
    img: '/img/film_burbujas.png'
  },
  {
    id: 5,
    category: 'Complementario',
    title: 'Cintas Adhesivas',
    desc: 'Cintas de embalaje acrílicas y hot melt. Cintas de enmascarar, doble faz y con impresiones personalizadas.',
    img: '/img/cintas_adhesivas.png'
  },
  {
    id: 6,
    category: 'Complementario',
    title: 'Flejes y Hebillas',
    desc: 'Flejes plásticos (PP y PET) orientados a soportar alta tensión. Sistemas de cierre para un enzunchado seguro.',
    img: '/img/flejes_hebillas.png'
  }
];

function AddToCartButton({ product }) {
  const { addItem, items } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const inCart = items.find(item => item.id === product.id);

  const handleAdd = () => {
    addItem(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <button
      className={`add-to-cart-btn ${justAdded ? 'added' : ''}`}
      onClick={handleAdd}
    >
      {justAdded ? (
        <>
          <Check size={14} />
          Agregado
        </>
      ) : (
        <>
          <ShoppingCart size={14} />
          {inCart ? `En carrito (${inCart.quantity})` : 'Agregar'}
        </>
      )}
    </button>
  );
}

export default function Catalogo() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const filters = ['Todos', 'Film Stretch', 'Polietileno', 'Complementario'];

  const filteredProducts = activeFilter === 'Todos' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <div className="animate-fade-in" style={{ paddingTop: '80px', paddingBottom: '4rem' }}>
      <div className="container" style={{ marginTop: '3rem' }}>
        <span className="badge" style={{ display: 'block', textAlign: 'center' }}>Productos</span>
        <h1 className="heading-lg text-center text-gradient">Catálogo de Productos</h1>
        <p className="text-muted text-center" style={{ maxWidth: '600px', margin: '1rem auto 3rem' }}>
          Seleccione los productos que le interesen y solicite cotización directamente por WhatsApp.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
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
            <div key={p.id} className="card text-left">
              <div className="card-img-wrapper" style={{ height: '240px' }}>
                <img src={p.img} alt={p.title} loading="lazy" />
              </div>
              <div className="card-content">
                <span className="badge">{p.category}</span>
                <h3 style={{ fontSize: '1.25rem', margin: '0.5rem 0' }}>{p.title}</h3>
                <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '60px' }}>
                  {p.desc}
                </p>
                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Link 
                    to="/contacto" 
                    state={{ prefillMessage: `Hola, me interesa cotizar el producto: ${p.title}. Por favor bríndeme más información.` }}
                    className="text-accent" 
                    style={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.85rem' }}
                  >
                    Cotizar <ChevronRight size={16} />
                  </Link>
                  <AddToCartButton product={p} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { ChevronRight, ShoppingCart, Check, Maximize, Weight, PackageOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addItem, items } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const inCart = items.find(item => item.id === product.id);

  const handleAdd = () => {
    addItem(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <div className="card text-left product-card">
      <div className="card-img-wrapper" style={{ height: '240px', position: 'relative' }}>
        {product.isNew && (
          <span className="badge-new">NUEVO</span>
        )}
        <img src={product.img} alt={product.title} loading="lazy" />
      </div>
      <div className="card-content">
        <span className="badge">{product.subcategory || product.category}</span>
        <h3 style={{ fontSize: '1.25rem', margin: '0.5rem 0' }}>{product.title}</h3>
        <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1rem', minHeight: '40px' }}>
          {product.desc}
        </p>

        {/* Technical Specs */}
        <div className="tech-specs">
          {product.medidas && (
            <div className="spec-item">
              <Maximize size={14} className="text-steel" />
              <span className="spec-text">{product.medidas}</span>
            </div>
          )}
          {product.peso && (
            <div className="spec-item">
              <Weight size={14} className="text-teal" />
              <span className="spec-text">{product.peso}</span>
            </div>
          )}
          {product.cantCaja && (
            <div className="spec-item">
              <PackageOpen size={14} className="text-accent" />
              <span className="spec-text">{product.cantCaja} por caja</span>
            </div>
          )}
        </div>

        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link 
            to="/contacto" 
            state={{ prefillMessage: `Hola, me interesa cotizar el producto: ${product.title} (${product.medidas}). Por favor bríndeme más información.` }}
            className="text-accent" 
            style={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.85rem' }}
          >
            Cotizar <ChevronRight size={16} />
          </Link>
          <button
            className={`add-to-cart-btn ${justAdded ? 'added' : ''}`}
            onClick={handleAdd}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              borderRadius: '100px',
              border: justAdded ? '1px solid var(--teal)' : '1px solid var(--border-color)',
              background: justAdded ? 'rgba(0, 191, 165, 0.1)' : 'transparent',
              color: justAdded ? 'var(--teal)' : 'var(--text-primary)',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
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
        </div>
      </div>
    </div>
  );
}

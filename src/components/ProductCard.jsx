import { useState } from 'react';
import { ChevronRight, ShoppingCart, Check, Maximize, Weight, PackageOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product, onQuickView, onToggleCompare, isCompared }) {
  const { addItem, items } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const inCart = items.find(item => item.id === product.id);

  const handleAdd = () => {
    addItem(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  const isSpecialOrder = product.subcategory === 'Con Mango' || product.isNew;

  return (
    <div className="card text-left product-card" style={{ position: 'relative' }}>
      {/* Compare Checkbox */}
      {onToggleCompare && (
        <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 10, display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,0,0,0.5)', padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-sm)' }}>
          <input 
            type="checkbox" 
            checked={isCompared} 
            onChange={() => onToggleCompare(product)}
            style={{ cursor: 'pointer', width: '16px', height: '16px', accentColor: 'var(--accent-color)' }}
            id={`compare-${product.id}`}
          />
          <label htmlFor={`compare-${product.id}`} style={{ fontSize: '0.75rem', color: 'white', cursor: 'pointer' }}>Comparar</label>
        </div>
      )}

      <div className="card-img-wrapper" style={{ position: 'relative', cursor: 'pointer' }} onClick={() => onQuickView && onQuickView(product)}>
        {product.isNew && (
          <span className="badge-new">NUEVO</span>
        )}
        <img src={product.img} alt={product.title} loading="lazy" />
        <div className="quick-view-overlay" style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: 0, transition: 'opacity 0.3s', color: 'white', fontWeight: 600
        }}>
          Vista Rápida
        </div>
      </div>
      <div className="card-content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <span className="badge">{product.subcategory || product.category}</span>
          <span style={{ fontSize: '0.7rem', fontWeight: 600, color: isSpecialOrder ? '#eab308' : 'var(--teal)' }}>
            {isSpecialOrder ? '• A Pedido' : '• Stock Permanente'}
          </span>
        </div>
        <h3 style={{ fontSize: '1.25rem', margin: '0 0 0.5rem 0', cursor: 'pointer' }} onClick={() => onQuickView && onQuickView(product)} className="hover-text-accent">
          {product.title}
        </h3>
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
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button 
              onClick={() => alert('La descarga de la ficha técnica no está disponible en esta demo.')}
              title="Descargar Ficha Técnica (PDF)"
              style={{ background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-muted)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
              className="hover-bg-secondary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            </button>
            <Link 
              to="/contacto" 
              state={{ prefillMessage: `Hola, me interesa cotizar el producto: ${product.title} (${product.medidas}). Por favor bríndeme más información.` }}
              className="text-accent" 
              style={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.85rem', marginLeft: '0.5rem' }}
            >
              Cotizar <ChevronRight size={16} />
            </Link>
          </div>
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

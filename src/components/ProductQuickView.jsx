import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ShoppingCart, Check, Maximize, Weight, PackageOpen } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function ProductQuickView({ product, onClose }) {
  const { addItem, items } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const inCart = items.find(item => item.id === product.id);

  useEffect(() => {
    // Evitar que el fondo (body) haga scroll cuando el modal está abierto
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
        addItem(product);
    }
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  const isSpecialOrder = product.subcategory === 'Con Mango';

  const modalContent = (
    <div className="modal-backdrop" onClick={onClose} style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 99999,
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'
    }}>
      <div className="modal-content animate-fade-in" onClick={e => e.stopPropagation()} style={{
        background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)',
        width: '100%', maxWidth: '900px', display: 'flex', flexWrap: 'wrap',
        position: 'relative', overflow: 'hidden', maxHeight: '90vh', overflowY: 'auto'
      }}>
        <button onClick={onClose} style={{
          position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,255,255,0.1)',
          border: 'none', color: 'white', borderRadius: '50%', width: '32px', height: '32px',
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10
        }}>
          <X size={18} />
        </button>

        <div style={{ flex: '1 1 400px', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.2)' }}>
          <img src={product.img} alt={product.title} style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }} />
        </div>

        <div style={{ flex: '1 1 400px', padding: '2.5rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
            <span className="badge">{product.category}</span>
            <span className="badge" style={{ background: isSpecialOrder ? 'rgba(234, 179, 8, 0.2)' : 'rgba(0, 191, 165, 0.2)', color: isSpecialOrder ? '#eab308' : 'var(--teal)', border: 'none' }}>
              {isSpecialOrder ? 'A Pedido' : 'En Stock'}
            </span>
          </div>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', lineHeight: 1.2 }}>{product.title}</h2>
          <div className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            {product.highlightDesc && <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{product.highlightDesc}</p>}
            {product.desc && <p style={{ marginBottom: product.features ? '1rem' : 0 }}>{product.desc}</p>}
            {product.features && (
              <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {product.features.map((feat, idx) => (
                  <li key={idx}>{feat}</li>
                ))}
              </ul>
            )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
            {product.medidas && (
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--steel)', marginBottom: '0.25rem' }}>
                  <Maximize size={16} /> <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>MEDIDAS</span>
                </div>
                <div style={{ fontSize: '1.1rem' }}>{product.medidas}</div>
              </div>
            )}
            {product.peso && (
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--teal)', marginBottom: '0.25rem' }}>
                  <Weight size={16} /> <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>PESO</span>
                </div>
                <div style={{ fontSize: '1.1rem' }}>{product.peso}</div>
              </div>
            )}
            {product.cantCaja && (
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-color)', marginBottom: '0.25rem' }}>
                  <PackageOpen size={16} /> <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>PACKAGING</span>
                </div>
                <div style={{ fontSize: '1.1rem' }}>{product.cantCaja} x Caja</div>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)', padding: '0.25rem' }}>
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ width: '36px', height: '36px', border: 'none', background: 'transparent', color: 'white', cursor: 'pointer', fontSize: '1.2rem' }}>-</button>
              <span style={{ width: '40px', textAlign: 'center', fontWeight: 600 }}>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} style={{ width: '36px', height: '36px', border: 'none', background: 'transparent', color: 'white', cursor: 'pointer', fontSize: '1.2rem' }}>+</button>
            </div>
            
            <button
              className={`btn btn-primary ${justAdded ? 'added' : ''}`}
              onClick={handleAdd}
              style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', height: '44px' }}
            >
              {justAdded ? (
                <><Check size={18} /> Agregado</>
              ) : (
                <><ShoppingCart size={18} /> Añadir al Presupuesto</>
              )}
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
            <Link 
              to="/contacto" 
              state={{ prefillMessage: `Hola, necesito cotizar ${quantity} unidad(es) de: ${product.title} (${product.medidas}).` }}
              className="text-accent"
              style={{ fontWeight: 600, fontSize: '0.9rem' }}
            >
              Consulta Directa
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

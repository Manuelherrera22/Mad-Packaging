import { useState } from 'react';
import { X, ShoppingCart, Check, Maximize, Weight, PackageOpen, Download } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function ProductQuickView({ product, onClose }) {
  const { addItem, items } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const inCart = items.find(item => item.id === product.id);

  const handleAdd = () => {
    // Modify addItem to support quantity if possible, or just add multiple times/update
    // Assuming context handles it or we just add one by one, 
    // Wait, the current context might not support bulk add if we pass quantity. 
    // Let's pass the product with a quantity property or add multiple times.
    for (let i = 0; i < quantity; i++) {
        addItem(product);
    }
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  const isSpecialOrder = product.subcategory === 'Con Mango' || product.isNew;

  return (
    <div className="modal-backdrop" onClick={onClose} style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 1000,
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'
    }}>
      <div className="modal-content animate-fade-in" onClick={e => e.stopPropagation()} style={{
        background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)',
        width: '100%', maxWidth: '900px', display: 'flex', flexWrap: 'wrap',
        position: 'relative', overflow: 'hidden'
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
              {isSpecialOrder ? 'A Pedido' : 'Stock Permanente'}
            </span>
          </div>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', lineHeight: 1.2 }}>{product.title}</h2>
          <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>{product.desc}</p>

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

          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
            <button onClick={() => alert('La descarga de la ficha técnica no está disponible en esta demo.')} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.9rem' }}>
              <Download size={16} /> Descargar Especificaciones (PDF)
            </button>
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
}

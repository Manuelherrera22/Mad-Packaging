import { X, ArrowRightLeft, Trash2 } from 'lucide-react';

export default function CompareFloatingBar({ products, onRemove, onClear, onCompare }) {
  if (products.length === 0) return null;

  return (
    <div style={{
      position: 'fixed', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
      background: 'var(--bg-secondary)', border: '1px solid var(--border-color)',
      padding: '1rem', borderRadius: 'var(--radius-lg)', zIndex: 100,
      display: 'flex', alignItems: 'center', gap: '2rem',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
      animation: 'slide-up 0.3s ease-out'
    }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {products.map(p => (
          <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: 'var(--radius-sm)' }}>
            <img src={p.img} alt={p.title} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.title}</span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{p.medidas}</span>
            </div>
            <button onClick={() => onRemove(p.id)} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '0.2rem' }}>
              <X size={14} />
            </button>
          </div>
        ))}
        {products.length < 3 && (
          <div style={{ width: '150px', border: '1px dashed var(--border-color)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            Añadir otro producto
          </div>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderLeft: '1px solid var(--border-color)', paddingLeft: '2rem' }}>
        <button onClick={onClear} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Trash2 size={16} /> <span style={{ fontSize: '0.85rem' }}>Limpiar</span>
        </button>
        <button 
          onClick={onCompare}
          disabled={products.length < 2}
          className="btn btn-primary" 
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: products.length < 2 ? 0.5 : 1, cursor: products.length < 2 ? 'not-allowed' : 'pointer' }}
        >
          <ArrowRightLeft size={16} /> Comparar
        </button>
      </div>
    </div>
  );
}

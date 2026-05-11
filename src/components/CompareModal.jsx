import { X, Check } from 'lucide-react';

export default function CompareModal({ products, onClose }) {
  if (!products || products.length === 0) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 1000,
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'
    }}>
      <div className="modal-content animate-fade-in" onClick={e => e.stopPropagation()} style={{
        background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)',
        width: '100%', maxWidth: '1000px', maxHeight: '90vh', overflowY: 'auto',
        position: 'relative', padding: '2rem'
      }}>
        <button onClick={onClose} style={{
          position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(255,255,255,0.1)',
          border: 'none', color: 'white', borderRadius: '50%', width: '32px', height: '32px',
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10
        }}>
          <X size={18} />
        </button>

        <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ArrowRightLeftIcon /> Comparador de Productos
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: `150px repeat(${products.length}, 1fr)`, gap: '1rem' }}>
          {/* Encabezados - Imágenes y Títulos */}
          <div style={{ fontWeight: 600, color: 'var(--text-muted)', paddingTop: '2rem' }}>Producto</div>
          {products.map(p => (
            <div key={p.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-md)' }}>
              <img src={p.img} alt={p.title} style={{ width: '100px', height: '100px', objectFit: 'contain', marginBottom: '1rem' }} />
              <div style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{p.title}</div>
              <span className="badge" style={{ marginBottom: '1rem' }}>{p.subcategory || p.category}</span>
            </div>
          ))}

          {/* Atributos: Medidas */}
          <div style={{ fontWeight: 600, color: 'var(--text-muted)', padding: '1rem 0', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center' }}>Medidas</div>
          {products.map(p => (
            <div key={`medidas-${p.id}`} style={{ padding: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              {p.medidas || '-'}
            </div>
          ))}

          {/* Atributos: Peso */}
          <div style={{ fontWeight: 600, color: 'var(--text-muted)', padding: '1rem 0', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center' }}>Peso / Rendimiento</div>
          {products.map(p => (
            <div key={`peso-${p.id}`} style={{ padding: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              {p.peso || '-'}
            </div>
          ))}

          {/* Atributos: Cantidad por Caja */}
          <div style={{ fontWeight: 600, color: 'var(--text-muted)', padding: '1rem 0', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center' }}>Packaging (Caja)</div>
          {products.map(p => (
            <div key={`caja-${p.id}`} style={{ padding: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              {p.cantCaja ? `${p.cantCaja} unidades` : '-'}
            </div>
          ))}

          {/* Atributos: Descripción */}
          <div style={{ fontWeight: 600, color: 'var(--text-muted)', padding: '1rem 0', borderTop: '1px solid var(--border-color)' }}>Descripción</div>
          {products.map(p => (
            <div key={`desc-${p.id}`} style={{ padding: '1rem', borderTop: '1px solid var(--border-color)', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              {p.desc}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ArrowRightLeftIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m16 3 4 4-4 4"/>
      <path d="M20 7H4"/>
      <path d="m8 21-4-4 4-4"/>
      <path d="M4 17h16"/>
    </svg>
  )
}

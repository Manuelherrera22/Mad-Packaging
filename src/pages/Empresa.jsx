import { CheckCircle2, Factory, Globe2, Award } from 'lucide-react';

export default function Empresa() {
  return (
    <div className="animate-fade-in" style={{ paddingTop: '80px' }}>
      <header className="section" style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container text-center">
          <span className="badge">Nuestra Empresa</span>
          <h1 className="heading-lg" style={{ marginTop: '1rem' }}>Trayectoria y Solidez<br/>en <span className="text-accent">Packaging Industrial</span></h1>
          <p className="text-muted" style={{ maxWidth: '700px', margin: '1.5rem auto 0', fontSize: '1.1rem' }}>
            Desde hace más de 15 años, aportamos valor a la cadena de suministro de cientos de empresas en la región a través de envolturas y empaques confiables.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <span className="badge">Innovación</span>
              <h2 className="heading-md">Innovación Constante</h2>
              <p className="text-muted" style={{ margin: '1.5rem 0' }}>
                Nacimos con la visión de profesionalizar el sector del empaque industrial. Hoy, nuestras instalaciones albergan tecnología de extrusión de última generación, permitiendo fabricar film tricapa de alto rendimiento y soluciones en polietileno adaptadas a cualquier condición de transporte.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  'Desarrollo de films especiales aditivados',
                  'Asesoría técnica en planta del cliente',
                  'Optimización de espesores para reducir huella de carbono',
                  'Laboratorio propio de ensayos de tensión'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <CheckCircle2 className="text-accent" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=800" 
                alt="Instalaciones" 
                style={{ borderRadius: 'var(--radius-lg)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid var(--border-color)' }} 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
        <div className="container">
          <div className="grid grid-cols-3">
            <div className="card text-center" style={{ padding: '2rem' }}>
              <Factory size={48} className="text-steel" style={{ margin: '0 auto 1.5rem' }} />
              <h3 style={{ marginBottom: '1rem' }}>Capacidad Productiva</h3>
              <p className="text-muted">Más de 500 toneladas mensuales de procesamiento plástico para abastecer alta demanda.</p>
            </div>
            <div className="card text-center" style={{ padding: '2rem' }}>
              <Globe2 size={48} className="text-steel" style={{ margin: '0 auto 1.5rem' }} />
              <h3 style={{ marginBottom: '1rem' }}>Distribución Nacional</h3>
              <p className="text-muted">Flota propia y alianzas logísticas para llegar a cualquier punto del país en tiempo récord.</p>
            </div>
            <div className="card text-center" style={{ padding: '2rem' }}>
              <Award size={48} className="text-teal" style={{ margin: '0 auto 1.5rem' }} />
              <h3 style={{ marginBottom: '1rem' }}>Calidad Garantizada</h3>
              <p className="text-muted">Procesos estandarizados y materias primas vírgenes de primera línea.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

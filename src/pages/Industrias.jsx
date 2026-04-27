import { Plane, ShoppingCart, Utensils, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Industrias() {
  const sectors = [
    {
      icon: <Plane size={32} className="text-steel" />,
      title: 'Logística y Exportación',
      desc: 'Protegemos su carga de consolidación durante largas travesías, reduciendo mermas y evitando daños ambientales durante depósitos y aduanas.'
    },
    {
      icon: <Utensils size={32} className="text-accent" />,
      title: 'Industria Alimenticia',
      desc: 'Materiales autorizados y certificados (como nuestro Film Termocontraíble) para el contacto indirecto, asegurando higiene y trazabilidad del producto.'
    },
    {
      icon: <Construction size={32} className="text-teal" />,
      title: 'Manufactura y Construcción',
      desc: 'Bolsas de alta densidad y films especiales para el resguardo de materiales pesados, perfiles de aluminio y polvos industriales.'
    },
    {
      icon: <ShoppingCart size={32} className="text-steel" />,
      title: 'Retail y E-commerce',
      desc: 'Optimización del packaging de última milla. Cintas con impresión e insumos de protección con burbujas.'
    }
  ];

  return (
    <div className="animate-fade-in" style={{ paddingTop: '80px' }}>
      <section className="section bg-secondary" style={{ borderBottom: '1px solid var(--border-color)', minHeight: '40vh', display: 'flex', alignItems: 'center' }}>
        <div className="container text-center">
          <span className="badge">Sectores</span>
          <h1 className="heading-lg">Soluciones por <span className="text-accent">Industria</span></h1>
          <p className="text-muted" style={{ maxWidth: '650px', margin: '1.5rem auto 0', fontSize: '1.1rem' }}>
            Adaptamos nuestro catálogo de productos para responder a los altos requerimientos de distintos rubros, cada uno con desafíos específicos.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2">
            {sectors.map((sector, i) => (
              <div key={i} className="card" style={{ display: 'flex', padding: '2rem', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '1rem', backgroundColor: 'rgba(0, 112, 167, 0.1)', borderRadius: 'var(--radius-md)', flexShrink: 0 }}>
                  {sector.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{sector.title}</h3>
                  <p className="text-muted">{sector.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2 className="heading-md">¿Necesita un desarrollo a medida?</h2>
          <p className="text-muted" style={{ margin: '1rem auto 2rem' }}>Podemos formular polietileno para exigencias muy particulares de su sector.</p>
          <Link to="/contacto" className="btn btn-primary">Agendar Reunión Técnica</Link>
        </div>
      </section>
    </div>
  );
}

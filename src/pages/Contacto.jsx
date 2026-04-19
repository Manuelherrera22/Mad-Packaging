import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Contacto() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    mensaje: location.state?.prefillMessage || ''
  });

  useEffect(() => {
    if (location.state?.prefillMessage) {
      setFormData(prev => ({ ...prev, mensaje: location.state.prefillMessage }));
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica real de envío, pero en demostración:
    alert('Mensaje enviado. Nos pondremos en contacto a la brevedad.');
    setFormData({ nombre: '', empresa: '', email: '', mensaje: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="animate-fade-in" style={{ paddingTop: '80px', paddingBottom: '4rem' }}>
      <div className="container">
        <h1 className="heading-lg text-center" style={{ marginTop: '2rem' }}>Contacto y Cotizaciones</h1>
        <p className="text-muted text-center" style={{ maxWidth: '600px', margin: '1rem auto 3rem' }}>
          Deje sus datos y los requerimientos de su empresa. Un asesor corporativo analizará su solicitud y preparará una cotización a medida.
        </p>

        <div className="grid grid-cols-2" style={{ gap: '3rem', alignItems: 'flex-start' }}>
          {/* Form */}
          <div className="card" style={{ padding: '2.5rem' }}>
            <h2 className="heading-md" style={{ marginBottom: '1.5rem' }}>Complete el formulario</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label htmlFor="nombre" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Nombre Completo</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'white' }} 
                  />
                </div>
                <div>
                  <label htmlFor="empresa" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Empresa</label>
                  <input 
                    type="text" 
                    id="empresa" 
                    name="empresa" 
                    value={formData.empresa}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'white' }} 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email Corporativo</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'white' }} 
                />
              </div>

              <div>
                <label htmlFor="mensaje" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Detalle sus requerimientos (volumen, material, etc.)</label>
                <textarea 
                  id="mensaje" 
                  name="mensaje" 
                  rows="5" 
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'white', resize: 'vertical' }} 
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '0.5rem' }}>
                Enviar Solicitud
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div>
            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
              <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <MapPin className="text-accent" size={32} style={{ margin: '0 auto 1rem' }} />
                <h4 style={{ marginBottom: '0.5rem' }}>Planta y Oficinas</h4>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>Av. Industrial 1234<br/>Parque Industrial Sur</p>
              </div>
              <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <Phone className="text-accent" size={32} style={{ margin: '0 auto 1rem' }} />
                <h4 style={{ marginBottom: '0.5rem' }}>Ventas Directas</h4>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>+54 9 11 1234-5678<br/>0800-444-PACK</p>
              </div>
              <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <Mail className="text-accent" size={32} style={{ margin: '0 auto 1rem' }} />
                <h4 style={{ marginBottom: '0.5rem' }}>Casilla Electrónica</h4>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>ventas@packaging.com<br/>info@packaging.com</p>
              </div>
              <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <Clock className="text-accent" size={32} style={{ margin: '0 auto 1rem' }} />
                <h4 style={{ marginBottom: '0.5rem' }}>Horarios</h4>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>Lunes a Viernes<br/>8:00 a 17:00 hs</p>
              </div>
            </div>

            {/* Simulated Map */}
            <div style={{ width: '100%', height: '240px', backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800" alt="Mapa de Ubicación" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

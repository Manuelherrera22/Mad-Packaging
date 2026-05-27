import { MapPin, Phone, Mail, Clock, ShoppingBag, ShieldCheck, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function Contacto() {
  const location = useLocation();
  const { items, totalItems } = useCart();
  const [verified, setVerified] = useState(false);
  const [orderText, setOrderText] = useState('');

  useEffect(() => {
    if (location.state?.prefillMessage) {
      setOrderText(location.state.prefillMessage);
    } else if (items.length > 0) {
      let cartMsg = "Hola, solicito cotización para los siguientes productos:\n\n";
      items.forEach(item => {
        cartMsg += `- ${item.quantity}x ${item.title}\n`;
      });
      setOrderText(cartMsg);
    }
  }, [location.state, items]);

  const handleVerify = () => {
    setVerified(true);
  };

  const email = "ventas@madpackaging.com";
  const phone = "5263-3648";
  const waNumber = "5491152633648";

  const getMailtoLink = () => {
    const subject = encodeURIComponent("Solicitud de Cotización Web");
    const body = encodeURIComponent(orderText || "Hola, me gustaría recibir más información sobre sus productos.");
    return `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const getWaLink = () => {
    const text = encodeURIComponent(orderText || "Hola, me gustaría solicitar una cotización.");
    return `https://wa.me/${waNumber}?text=${text}`;
  };

  return (
    <div className="animate-fade-in" style={{ paddingTop: '80px', paddingBottom: '4rem' }}>
      <div className="container">
        <span className="badge" style={{ display: 'block', textAlign: 'center', marginTop: '2rem' }}>Contacto Directo</span>
        <h1 className="heading-lg text-center">Nuestros <span className="text-accent">Canales de Atención</span></h1>
        <p className="text-muted text-center" style={{ maxWidth: '600px', margin: '1rem auto 3rem' }}>
          Para garantizar una atención rápida y sin intermediarios, comuníquese directamente con nuestro equipo de ventas a través de nuestros canales oficiales.
        </p>

        <div className="grid grid-cols-2" style={{ gap: '3rem', alignItems: 'flex-start' }}>
          {/* Canales Directos */}
          <div className="card" style={{ padding: '2.5rem' }}>
            <h2 className="heading-md" style={{ marginBottom: '1.5rem' }}>Información de Contacto</h2>
            
            {items.length > 0 && (
              <div style={{ marginBottom: '2rem', padding: '1rem', background: 'rgba(0, 123, 184, 0.1)', border: '1px solid rgba(0, 123, 184, 0.3)', borderRadius: 'var(--radius-md)' }}>
                <h3 style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <ShoppingBag size={18} className="text-steel" />
                  Cotización Pendiente ({totalItems} productos)
                </h3>
                <p className="text-muted" style={{ fontSize: '0.85rem' }}>
                  Su lista de productos está lista. Al elegir un canal de contacto abajo, el mensaje se generará automáticamente.
                </p>
              </div>
            )}

            <div className="contact-channels animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <a href={getWaLink()} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem', background: 'rgba(37, 211, 102, 0.1)', border: '1px solid #25D366', borderRadius: 'var(--radius-md)', textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s', cursor: 'pointer' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ background: '#25D366', color: 'white', padding: '1rem', borderRadius: '50%' }}>
                  <WhatsAppIcon size={28} />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#25D366' }}>WhatsApp Directo</h3>
                  <p className="text-muted" style={{ margin: '0.25rem 0 0', fontSize: '0.9rem' }}>{phone}</p>
                  <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>→ Enviar mensaje ahora</span>
                </div>
              </a>

              <a href={getMailtoLink()} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem', background: 'rgba(0, 191, 165, 0.1)', border: '1px solid var(--teal)', borderRadius: 'var(--radius-md)', textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s', cursor: 'pointer' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ background: 'var(--teal)', color: 'white', padding: '1rem', borderRadius: '50%' }}>
                  <Mail size={28} />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--teal)' }}>Correo Electrónico</h3>
                  <p className="text-muted" style={{ margin: '0.25rem 0 0', fontSize: '0.9rem' }}>{email}</p>
                  <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>→ Enviar email ahora</span>
                </div>
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ background: 'var(--border-color)', color: 'var(--text-primary)', padding: '1rem', borderRadius: '50%' }}>
                  <Phone size={28} />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Llamada Telefónica</h3>
                  <p className="text-muted" style={{ margin: '0.25rem 0 0', fontSize: '1rem', fontWeight: 'bold' }}>{phone}</p>
                  <p className="text-muted" style={{ margin: '0', fontSize: '0.8rem' }}>Lun a Vie - 8:00 a 17:00 hs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info & Map */}
          <div>
            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
              <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <MapPin className="text-accent" size={32} style={{ margin: '0 auto 1rem' }} />
                <h4 style={{ marginBottom: '0.5rem' }}>Planta y Oficinas</h4>
                <p className="text-muted" style={{ fontSize: '0.85rem' }}>República del Líbano 4144<br/>Villa Lynch, San Martín, Bs.As.</p>
              </div>
              <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <Clock className="text-steel" size={32} style={{ margin: '0 auto 1rem' }} />
                <h4 style={{ marginBottom: '0.5rem' }}>Horarios</h4>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>Lunes a Viernes<br/>8:00 a 17:00 hs</p>
              </div>
            </div>

            {/* Real Map */}
            <div style={{ width: '100%', height: '350px', backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight="0" 
                marginWidth="0" 
                src="https://www.openstreetmap.org/export/embed.html?bbox=-58.535,-34.595,-58.515,-34.580&amp;layer=mapnik&amp;marker=-34.588,-58.526" 
                style={{ border: 'none' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

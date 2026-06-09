import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import AdminDashboard from './AdminDashboard';

export default function Admin() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    setLoading(false);
  };

  if (loading) {
    return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0c' }}><p>Cargando...</p></div>;
  }

  if (!session) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0c', marginTop: '80px' }}>
        <div style={{ background: '#111114', padding: '3rem', borderRadius: '12px', width: '100%', maxWidth: '400px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h2 style={{ marginBottom: '2rem', textAlign: 'center', color: 'white' }}>Acceso Administrativo</h2>
          {error && <div style={{ background: 'rgba(228, 71, 46, 0.1)', color: '#E4472E', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>{error}</div>}
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #333', background: '#000', color: 'white' }}
              required 
            />
            <input 
              type="password" 
              placeholder="Contraseña" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #333', background: '#000', color: 'white' }}
              required 
            />
            <button type="submit" className="btn btn-primary" style={{ padding: '1rem', marginTop: '1rem' }} disabled={loading}>
              {loading ? 'Entrando...' : 'Iniciar Sesión'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <AdminDashboard session={session} />;
}

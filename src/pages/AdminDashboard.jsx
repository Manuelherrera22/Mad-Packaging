import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { LogOut, Edit, Trash2, Plus, Image as ImageIcon } from 'lucide-react';

export default function AdminDashboard({ session }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  
  // Form State
  const [formData, setFormData] = useState({
    id: '', title: '', category: '', subcategory: '', desc: '', medidas: '', highlight_desc: '', img: ''
  });
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const { data: prods } = await supabase.from('products').select('*').order('title');
    const { data: cats } = await supabase.from('categories').select('*');
    if (prods) setProducts(prods);
    if (cats) setCategories(cats);
    setLoading(false);
  };

  const handleSignOut = () => {
    supabase.auth.signOut();
  };

  const openModal = (product = null) => {
    if (product) {
      setEditingProduct(product);
      setFormData(product);
    } else {
      setEditingProduct(null);
      setFormData({
        id: `prod-${Date.now()}`, title: '', category: categories[0]?.name || '', subcategory: '', desc: '', medidas: '', highlight_desc: '', img: ''
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const handleImageUpload = async (e) => {
    try {
      setUploading(true);
      const file = e.target.files[0];
      if (!file) return;

      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage.from('imagenes').upload(filePath, file);
      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from('imagenes').getPublicUrl(filePath);
      setFormData({ ...formData, img: data.publicUrl });
    } catch (error) {
      alert('Error subiendo imagen: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase.from('products').upsert(formData);
      if (error) throw error;
      
      alert('Guardado exitosamente');
      closeModal();
      fetchData();
    } catch (error) {
      alert('Error guardando: ' + error.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Seguro que deseas eliminar este producto?')) return;
    try {
      const { error } = await supabase.from('products').delete().eq('id', id);
      if (error) throw error;
      fetchData();
    } catch (error) {
      alert('Error eliminando: ' + error.message);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0c', color: 'white', paddingTop: '100px', paddingBottom: '4rem' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2>Panel de Administración</h2>
          <button onClick={handleSignOut} className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.5rem 1rem' }}>
            <LogOut size={16} /> Salir
          </button>
        </div>

        <div style={{ background: '#111114', borderRadius: '12px', padding: '2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <h3>Tus Productos ({products.length})</h3>
            <button onClick={() => openModal()} className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.5rem 1rem' }}>
              <Plus size={16} /> Añadir Producto
            </button>
          </div>

          {loading ? (
            <p>Cargando productos...</p>
          ) : (
            <div style={{ display: 'grid', gap: '1rem' }}>
              {products.map(prod => (
                <div key={prod.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#1a1a20', padding: '1rem', borderRadius: '8px', border: '1px solid #333' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <img src={prod.img} alt={prod.title} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' }} />
                    <div>
                      <h4 style={{ margin: 0 }}>{prod.title}</h4>
                      <small style={{ color: '#aaa' }}>{prod.category} {prod.subcategory ? `> ${prod.subcategory}` : ''}</small>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button onClick={() => openModal(prod)} style={{ background: '#333', border: 'none', color: 'white', padding: '0.5rem', borderRadius: '4px', cursor: 'pointer' }}><Edit size={16} /></button>
                    <button onClick={() => handleDelete(prod.id)} style={{ background: '#E4472E', border: 'none', color: 'white', padding: '0.5rem', borderRadius: '4px', cursor: 'pointer' }}><Trash2 size={16} /></button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: '#111114', width: '90%', maxWidth: '600px', maxHeight: '90vh', overflowY: 'auto', borderRadius: '12px', padding: '2rem', border: '1px solid #333' }}>
            <h3>{editingProduct ? 'Editar Producto' : 'Añadir Producto'}</h3>
            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                 {formData.img && <img src={formData.img} alt="preview" style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }} />}
                 <div style={{ flex: 1 }}>
                   <label style={{ display: 'block', marginBottom: '0.5rem', color: '#aaa' }}>Imagen del Producto</label>
                   <input type="file" accept="image/*" onChange={handleImageUpload} disabled={uploading} style={{ color: 'white' }} />
                   {uploading && <small style={{ color: '#E4472E', display: 'block', marginTop: '0.5rem' }}>Subiendo imagen...</small>}
                 </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#aaa' }}>Título</label>
                <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #333', background: '#000', color: 'white' }} />
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#aaa' }}>Categoría</label>
                  <select required value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #333', background: '#000', color: 'white' }}>
                    {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                  </select>
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#aaa' }}>Subcategoría (Opcional)</label>
                  <input type="text" value={formData.subcategory || ''} onChange={e => setFormData({...formData, subcategory: e.target.value})} style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #333', background: '#000', color: 'white' }} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#aaa' }}>Descripción Corta</label>
                <textarea value={formData.desc || ''} onChange={e => setFormData({...formData, desc: e.target.value})} rows="3" style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #333', background: '#000', color: 'white' }}></textarea>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#aaa' }}>Medidas Disponibles</label>
                <input type="text" value={formData.medidas || ''} onChange={e => setFormData({...formData, medidas: e.target.value})} style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #333', background: '#000', color: 'white' }} />
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button type="button" onClick={closeModal} className="btn btn-outline" style={{ flex: 1 }}>Cancelar</button>
                <button type="submit" className="btn btn-primary" style={{ flex: 1 }} disabled={uploading}>Guardar Cambios</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

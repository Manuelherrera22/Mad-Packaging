import { useState, useEffect, useMemo } from 'react';
import { ChevronRight, ShoppingCart, Check, Filter, Search, LayoutGrid, List } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products, mainCategories } from '../data/products';
import ProductCard from '../components/ProductCard';

function AddToCartButton({ product }) {
  const { addItem, items } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const inCart = items.find(item => item.id === product.id);

  const handleAdd = () => {
    addItem(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <button
      className={`add-to-cart-btn ${justAdded ? 'added' : ''}`}
      onClick={handleAdd}
    >
      {justAdded ? (
        <>
          <Check size={14} />
          Agregado
        </>
      ) : (
        <>
          <ShoppingCart size={14} />
          {inCart ? `En carrito (${inCart.quantity})` : 'Agregar'}
        </>
      )}
    </button>
  );
}

export default function Catalogo() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [activeSubcategory, setActiveSubcategory] = useState('Todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' o 'list'

  // Inicializar categoría basada en la URL (ej: /catalogo?categoria=Film%20Stretch)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const catParam = params.get('categoria');
    if (catParam) {
      setActiveCategory(catParam);
    }
  }, [location]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setActiveSubcategory('Todas'); // Reset subcategory when changing main category
  };

  const currentSubcategories = useMemo(() => {
    if (activeCategory === 'Todos') return [];
    const catProducts = products.filter(p => p.category === activeCategory);
    const subs = new Set(catProducts.map(p => p.subcategory).filter(Boolean));
    return Array.from(subs);
  }, [activeCategory]);

  const filteredProducts = useMemo(() => {
    let result = products;
    if (activeCategory !== 'Todos') {
      result = result.filter(p => p.category === activeCategory);
    }
    if (activeSubcategory !== 'Todas') {
      result = result.filter(p => p.subcategory === activeSubcategory);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.desc.toLowerCase().includes(q) || 
        (p.medidas && p.medidas.toLowerCase().includes(q))
      );
    }
    return result;
  }, [activeCategory, activeSubcategory, searchQuery]);

  return (
    <div className="animate-fade-in" style={{ paddingTop: '80px', paddingBottom: '4rem', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <div className="container" style={{ marginTop: '3rem' }}>
        <span className="badge" style={{ display: 'block', textAlign: 'center', margin: '0 auto' }}>Nuestros Productos</span>
        <h1 className="heading-lg text-center text-gradient" style={{ marginBottom: '1rem' }}>Catálogo Técnico</h1>
        <p className="text-muted text-center" style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
          Seleccione la línea de productos para visualizar las especificaciones técnicas. Puede solicitar cotización directa y rápida.
        </p>

        <div className="catalog-layout" style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start' }}>
          
          {/* Sidebar / Filters */}
          <aside style={{ width: '250px', flexShrink: 0, position: 'sticky', top: '100px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>
              <Filter size={18} className="text-accent" />
              <h3 style={{ fontSize: '1.1rem', margin: 0 }}>Categorías</h3>
            </div>
            
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>
                <button
                  className="btn"
                  style={{ 
                    width: '100%', textAlign: 'left', padding: '0.75rem 1rem', 
                    background: activeCategory === 'Todos' ? 'rgba(228, 71, 46, 0.1)' : 'transparent',
                    borderLeft: activeCategory === 'Todos' ? '3px solid var(--accent-color)' : '3px solid transparent',
                    color: activeCategory === 'Todos' ? '#fff' : 'var(--text-muted)'
                  }}
                  onClick={() => handleCategoryChange('Todos')}
                >
                  Ver Todos
                </button>
              </li>
              {mainCategories.map(cat => (
                <li key={cat.id}>
                  <button
                    className="btn"
                    style={{ 
                      width: '100%', textAlign: 'left', padding: '0.75rem 1rem', 
                      background: activeCategory === cat.name ? 'rgba(228, 71, 46, 0.1)' : 'transparent',
                      borderLeft: activeCategory === cat.name ? '3px solid var(--accent-color)' : '3px solid transparent',
                      color: activeCategory === cat.name ? '#fff' : 'var(--text-muted)'
                    }}
                    onClick={() => handleCategoryChange(cat.name)}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Product Grid */}
          <div style={{ flexGrow: 1 }}>
            
            {/* Top Toolbar: Search & View Toggle */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ position: 'relative', flexGrow: 1, maxWidth: '400px' }}>
                <Search size={18} className="text-muted" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                <input 
                  type="text" 
                  placeholder="Buscar productos (ej. Cinta de Papel)..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ 
                    width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', 
                    background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)', 
                    borderRadius: 'var(--radius-md)', color: 'white', outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="text-muted" style={{ fontSize: '0.9rem', marginRight: '0.5rem' }}>Vista:</span>
                <button 
                  onClick={() => setViewMode('grid')}
                  style={{ 
                    padding: '0.5rem', borderRadius: 'var(--radius-sm)',
                    background: viewMode === 'grid' ? 'rgba(255,255,255,0.1)' : 'transparent',
                    color: viewMode === 'grid' ? 'white' : 'var(--text-muted)'
                  }}
                >
                  <LayoutGrid size={20} />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  style={{ 
                    padding: '0.5rem', borderRadius: 'var(--radius-sm)',
                    background: viewMode === 'list' ? 'rgba(255,255,255,0.1)' : 'transparent',
                    color: viewMode === 'list' ? 'white' : 'var(--text-muted)'
                  }}
                >
                  <List size={20} />
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', margin: 0 }}>{activeCategory}</h2>
              <span className="text-muted" style={{ fontSize: '0.9rem' }}>{filteredProducts.length} productos</span>
            </div>

            {/* Subcategory Filters */}
            {currentSubcategories.length > 0 && (
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                <button
                  className={`badge ${activeSubcategory === 'Todas' ? 'active' : ''}`}
                  style={{ 
                    cursor: 'pointer', border: '1px solid var(--accent-color)',
                    background: activeSubcategory === 'Todas' ? 'var(--accent-color)' : 'transparent',
                    color: activeSubcategory === 'Todas' ? '#fff' : 'var(--accent-color)'
                  }}
                  onClick={() => setActiveSubcategory('Todas')}
                >
                  Todas
                </button>
                {currentSubcategories.map(sub => (
                  <button
                    key={sub}
                    className={`badge ${activeSubcategory === sub ? 'active' : ''}`}
                    style={{ 
                      cursor: 'pointer', border: '1px solid var(--accent-color)',
                      background: activeSubcategory === sub ? 'var(--accent-color)' : 'transparent',
                      color: activeSubcategory === sub ? '#fff' : 'var(--accent-color)'
                    }}
                    onClick={() => setActiveSubcategory(sub)}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )}

            {filteredProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '4rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)' }}>
                <p className="text-muted">No se encontraron productos en esta categoría.</p>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid' : 'list-view-container'} style={viewMode === 'grid' ? { gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem' } : {}}>
                {filteredProducts.map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

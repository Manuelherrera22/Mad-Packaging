import { ShoppingCart, X, Minus, Plus, Trash2, MessageCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Cart.css';

export default function Cart() {
  const {
    items,
    isOpen,
    totalItems,
    toggleCart,
    closeCart,
    removeItem,
    updateQuantity,
    clearCart,
    getWhatsAppUrl,
  } = useCart();

  return (
    <>
      {/* Floating Cart Button */}
      <button
        className="cart-float-btn"
        onClick={toggleCart}
        aria-label="Abrir carrito"
      >
        <ShoppingCart size={24} />
        {totalItems > 0 && (
          <span className="cart-badge">{totalItems}</span>
        )}
      </button>

      {/* Overlay */}
      {isOpen && <div className="cart-overlay" onClick={closeCart} />}

      {/* Slide Panel */}
      <aside className={`cart-panel ${isOpen ? 'cart-panel--open' : ''}`}>
        <div className="cart-header">
          <h3>
            <ShoppingBag size={22} />
            Carrito de Cotización
          </h3>
          <button className="cart-close" onClick={closeCart} aria-label="Cerrar carrito">
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <ShoppingCart size={48} strokeWidth={1} />
            <p>Su carrito está vacío</p>
            <span>Agregue productos desde el catálogo para solicitar cotización.</span>
          </div>
        ) : (
          <>
            <ul className="cart-items">
              {items.map(item => (
                <li key={item.id} className="cart-item">
                  <div className="cart-item-img">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="cart-item-info">
                    <span className="cart-item-category">{item.category}</span>
                    <h4 className="cart-item-title">{item.title}</h4>
                    <div className="cart-item-controls">
                      <div className="cart-qty">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Reducir cantidad">
                          <Minus size={14} />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Aumentar cantidad">
                          <Plus size={14} />
                        </button>
                      </div>
                      <button className="cart-item-remove" onClick={() => removeItem(item.id)} aria-label="Eliminar producto">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-footer">
              <div className="cart-summary">
                <span>{items.length} producto{items.length !== 1 ? 's' : ''}</span>
                <span>{totalItems} unidad{totalItems !== 1 ? 'es' : ''} total</span>
              </div>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="cart-checkout-btn"
                onClick={() => {
                  closeCart();
                }}
              >
                <MessageCircle size={20} />
                Solicitar Cotización por WhatsApp
              </a>
              <button className="cart-clear-btn" onClick={clearCart}>
                Vaciar carrito
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

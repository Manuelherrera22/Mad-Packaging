import { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext();

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((product) => {
    setItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((productId) => {
    setItems(prev => prev.filter(item => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId, quantity) => {
    if (quantity <= 0) {
      setItems(prev => prev.filter(item => item.id !== productId));
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const toggleCart = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeCart = useCallback(() => {
    setIsOpen(false);
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  // Build WhatsApp message with cart items
  const getWhatsAppUrl = useCallback(() => {
    const phoneNumber = "5491112345678"; // Replace with real number
    
    let message = "🏭 *Solicitud de Cotización — MAD Packaging Industrial*\n\n";
    message += "Hola, me gustaría recibir cotización para los siguientes productos:\n\n";
    
    items.forEach((item, index) => {
      message += `${index + 1}. *${item.title}*\n`;
      message += `   📦 Cantidad: ${item.quantity} unidad(es)\n`;
      message += `   📋 Categoría: ${item.category}\n\n`;
    });

    message += "---\n";
    message += `📊 Total de productos: ${items.length}\n`;
    message += `📊 Total de unidades: ${totalItems}\n\n`;
    message += "Por favor, envíenme información de precios y disponibilidad.\n";
    message += "¡Gracias!";

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  }, [items, totalItems]);

  return (
    <CartContext.Provider value={{
      items,
      isOpen,
      totalItems,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      toggleCart,
      closeCart,
      getWhatsAppUrl,
    }}>
      {children}
    </CartContext.Provider>
  );
}

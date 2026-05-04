export const products = [
  // --- FILM STRETCH ---
  { id: 'fs-man-10', category: 'Film Stretch', subcategory: 'Manual', title: 'Film Stretch Manual', desc: 'Material Virgen de 10 cm, ideal para paquetes pequeños.', medidas: '10 cm', peso: '0,45 kg', cantCaja: '4', img: '/img/film_stretch.png' },
  { id: 'fs-man-50', category: 'Film Stretch', subcategory: 'Manual', title: 'Film Stretch Manual', desc: 'Material Virgen de 50 cm para paletizado general.', medidas: '50 cm', peso: '4.5 kg / 5 kg', cantCaja: '4', img: '/img/film_stretch.png' },
  { id: 'fs-auto-50', category: 'Film Stretch', subcategory: 'Automático', title: 'Film Stretch Automático', desc: 'Formulado para envolvedoras automáticas, elongación superior.', medidas: '50 cm', peso: '12 kg - 15 kg', cantCaja: '1', img: '/img/film_stretch.png' },
  { id: 'fs-mango-10', category: 'Film Stretch', subcategory: 'Con Mango', title: 'Film Stretch con Mango', desc: 'Material Virgen de 10 cm con buje extendido para fácil aplicación.', medidas: '10 cm', peso: '0,5 kg', cantCaja: '25', img: '/img/film_stretch.png' },
  { id: 'fs-mango-50', category: 'Film Stretch', subcategory: 'Con Mango', title: 'Film Stretch con Mango', desc: 'Material Virgen de 50 cm con buje extendido.', medidas: '50 cm', peso: '2.5 kg - 5 kg', cantCaja: '1 - 6', img: '/img/film_stretch.png' },
  { id: 'fs-coreless-50', category: 'Film Stretch', subcategory: 'Coreless', title: 'Film Stretch Coreless', desc: '100% film, sin cartón. Ecológico y elimina el desperdicio del tubo.', medidas: '50 cm', peso: '4 kg', cantCaja: '4', img: '/img/film_stretch.png', isNew: true },
  
  // --- CINTAS ADHESIVAS ---
  { id: 'ca-emb-48-100', category: 'Cintas Adhesivas', subcategory: 'Embalaje', title: 'Cinta de Embalar Polipropileno', desc: 'Cinta transparente/marrón para cierre de cajas.', medidas: '48mm x 100m', cantCaja: '36', img: '/img/cintas_adhesivas.png' },
  { id: 'ca-emb-48-1000', category: 'Cintas Adhesivas', subcategory: 'Embalaje', title: 'Cinta de Embalar Automática', desc: 'Para máquinas precintadoras.', medidas: '48mm x 1000m', cantCaja: '6', img: '/img/cintas_adhesivas.png' },
  { id: 'ca-fragil-48', category: 'Cintas Adhesivas', subcategory: 'Frágil', title: 'Cinta Adhesiva FRAGIL', desc: 'Cinta pre-impresa indicadora de mercancía frágil.', medidas: '48mm x 100m', cantCaja: '36', img: '/img/cintas_adhesivas.png' },
  { id: 'ca-impres-48', category: 'Cintas Adhesivas', subcategory: 'Impresas', title: 'Cinta Impresa con Logo', desc: 'Fondo cristal/blanco/color con impresión hasta 4 colores.', medidas: '48mm x 100m', cantCaja: '36', img: '/img/cintas_adhesivas.png', isNew: true },
  { id: 'ca-papel-48', category: 'Cintas Adhesivas', subcategory: 'Papel', title: 'Cinta de Papel Multiuso', desc: 'Para enmascarar y usos generales.', medidas: '48mm x 40m', cantCaja: '20', img: '/img/cintas_adhesivas.png' },
  { id: 'ca-papel-alta-48', category: 'Cintas Adhesivas', subcategory: 'Papel', title: 'Cinta de Papel Alta Adherencia', desc: 'Para aplicaciones que requieren mayor fijación.', medidas: '48mm x 50m', cantCaja: '20', img: '/img/cintas_adhesivas.png' },
  { id: 'ca-doble-48', category: 'Cintas Adhesivas', subcategory: 'Doble Faz', title: 'Cinta Doble Faz Papel', desc: 'Para montaje y fijación temporal.', medidas: '48mm x 30m', cantCaja: '20', img: '/img/cintas_adhesivas.png' },
  { id: 'ca-especial-duct', category: 'Cintas Adhesivas', subcategory: 'Especiales', title: 'Cinta Duct Tape (Plata)', desc: 'Para reparaciones, sellado y sujeción fuerte.', medidas: '48mm x 25m', cantCaja: '10', img: '/img/cintas_adhesivas.png' },
  { id: 'ca-especial-anti', category: 'Cintas Adhesivas', subcategory: 'Especiales', title: 'Cinta Antideslizante', desc: 'Para demarcación de zonas peligrosas o escalones.', medidas: '48mm x 50m', cantCaja: '18', img: '/img/cintas_adhesivas.png' },
  
  // --- FLEJES Y HEBILLAS ---
  { id: 'fl-negro', category: 'Flejes', subcategory: 'Plástico', title: 'Fleje Plástico Manual Negro', desc: 'Zuncho negro para asegurar cajas y pallets livianos.', medidas: '13mm, 16mm, 19mm', peso: '10 kg', img: '/img/flejes_hebillas.png' },
  { id: 'fl-blanco', category: 'Flejes', subcategory: 'Plástico', title: 'Fleje Plástico Semi-automático', desc: 'Para máquinas enzunchadoras, color blanco.', medidas: '13mm, 16mm, 19mm', peso: '10 kg', img: '/img/flejes_hebillas.png', isNew: true },
  { id: 'fl-hebillas', category: 'Flejes', subcategory: 'Hebillas', title: 'Hebillas de Alambre Galvanizado', desc: 'Traba segura para flejes manuales.', medidas: '13mm, 16mm, 19mm', peso: '15 kg', img: '/img/flejes_hebillas.png' },

  // --- CARTÓN CORRUGADO ---
  { id: 'cc-rollo-1', category: 'Cartón Corrugado', subcategory: 'Rollos', title: 'Rollo de Cartón Corrugado', desc: 'Protección flexible y acolchada para envíos.', medidas: '1m x 25m', img: '/img/cintas_adhesivas.png' }, // Usando imagen complementaria por ahora
  { id: 'cc-rollo-2', category: 'Cartón Corrugado', subcategory: 'Rollos', title: 'Rollo de Cartón Corrugado Ancho', desc: 'Protección para productos de mayor formato.', medidas: '1.60m x 25m', img: '/img/cintas_adhesivas.png' },
  { id: 'cc-caja-1', category: 'Cartón Corrugado', subcategory: 'Cajas', title: 'Caja de Cartón Simple', desc: 'Ideal para e-commerce y almacenamiento ligero.', medidas: '40x30x20', img: '/img/cintas_adhesivas.png' },
  { id: 'cc-caja-2', category: 'Cartón Corrugado', subcategory: 'Cajas', title: 'Caja de Cartón Doble-Triple', desc: 'Alta resistencia estructural para productos pesados.', medidas: '60x40x40', img: '/img/cintas_adhesivas.png', isNew: true },

  // --- PROTECCIÓN DE PALLETS ---
  { id: 'pp-esquinero', category: 'Protección y Empaque', subcategory: 'Protección', title: 'Esquineros de Cartón', desc: 'Fabricados de tetra pack prensado, impermeables y de alta resistencia.', medidas: 'A pedido', img: '/img/bolsas_industriales.png' },
  { id: 'pp-lamina', category: 'Protección y Empaque', subcategory: 'Protección', title: 'Lámina Cobertora de Pallet', desc: 'Cobertura superior para pallets, protege contra polvo y lluvia.', medidas: '1.5m x 1.5m (60 mic)', cantCaja: '100', img: '/img/bolsas_industriales.png' },
  { id: 'pp-burbuja', category: 'Protección y Empaque', subcategory: 'Burbujas', title: 'Nylon con Burbujas (Pluribol)', desc: 'Máxima protección contra impactos.', medidas: '1m x 50m / 100m', img: '/img/film_burbujas.png' },

  // --- OTROS ---
  { id: 'ot-bolsas', category: 'Otros', subcategory: 'Bolsas', title: 'Bolsas de Arranque', desc: 'Uso general en múltiples medidas.', medidas: '15x20 a 60x90', peso: '0.3 - 1.5 kg', img: '/img/bolsas_industriales.png' },
  { id: 'ot-racionador', category: 'Otros', subcategory: 'Herramientas', title: 'Racionadores de Cinta', desc: 'Línea estándar y reforzada para cintas de embalar.', medidas: '48mm', img: '/img/cintas_adhesivas.png' },
  { id: 'ot-aplicador', category: 'Otros', subcategory: 'Herramientas', title: 'Aplicador de Stretch', desc: 'Dispensador manual de rollo.', medidas: 'Para bujes de 3" x 50cm', img: '/img/film_stretch.png' }
];

export const mainCategories = [
  { id: 'film-stretch', name: 'Film Stretch', desc: 'Manual, Automático, Coreless', img: '/img/film_stretch.png' },
  { id: 'cintas-adhesivas', name: 'Cintas Adhesivas', desc: 'Embalaje, Impresas, Papel, Especiales', img: '/img/cintas_adhesivas.png' },
  { id: 'flejes', name: 'Flejes', desc: 'Plásticos Manuales y Automáticos', img: '/img/flejes_hebillas.png' },
  { id: 'carton-corrugado', name: 'Cartón Corrugado', desc: 'Rollos y Cajas a Medida', img: '/img/bolsas_industriales.png' }, // Usamos imagen disponible
  { id: 'proteccion-empaque', name: 'Protección y Empaque', desc: 'Esquineros, Burbujas, Cobertores', img: '/img/film_burbujas.png' },
  { id: 'otros', name: 'Otros Productos', desc: 'Bolsas, Racionadores, Herramientas', img: '/img/bolsas_industriales.png' }
];

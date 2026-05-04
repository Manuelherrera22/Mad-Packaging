export const products = [
  // --- FILM STRETCH ---
  {
    id: 1,
    category: 'Film Stretch',
    title: 'Film Stretch Manual Estandar',
    desc: 'Alta elongación y resistencia al punzado. Ideal para embalaje manual diario.',
    medidas: '500mm x 4kg',
    micronaje: '23 micrones',
    img: '/img/film_stretch.png',
    isNew: false
  },
  {
    id: 2,
    category: 'Film Stretch',
    title: 'Film Stretch Automático Alto Rendimiento',
    desc: 'Rendimiento hasta 300%. Formulado para máquinas envolvedoras de alta velocidad.',
    medidas: '500mm x 15kg',
    micronaje: '30 micrones',
    img: '/img/film_stretch.png',
    isNew: true
  },
  {
    id: 3,
    category: 'Film Stretch',
    title: 'Film Stretch Coreless (Sin Buje)',
    desc: '100% film, sin cartón. Ecológico y elimina el desperdicio del tubo central.',
    medidas: '500mm x 3.5kg',
    micronaje: '20 micrones',
    img: '/img/film_stretch.png',
    isNew: true
  },
  {
    id: 4,
    category: 'Film Stretch',
    title: 'Film Stretch Negro Opaco',
    desc: 'Oculta el contenido del pallet por seguridad y protege contra rayos UV.',
    medidas: '500mm x 4kg',
    micronaje: '25 micrones',
    img: '/img/film_stretch.png',
    isNew: false
  },
  {
    id: 5,
    category: 'Film Stretch',
    title: 'Film Stretch Macarrón (Corto)',
    desc: 'Ideal para agrupar tubos, perfiles o paquetes pequeños de forma manual.',
    medidas: '100mm x 0.5kg',
    micronaje: '23 micrones',
    img: '/img/film_stretch.png',
    isNew: false
  },

  // --- POLIETILENO ---
  {
    id: 6,
    category: 'Polietileno',
    title: 'Bolsa de Polietileno Baja Densidad',
    desc: 'Transparente y flexible. Uso general en industria y comercio para repuestos.',
    medidas: '40cm x 60cm',
    micronaje: '50 micrones',
    img: '/img/bolsas_industriales.png',
    isNew: false
  },
  {
    id: 7,
    category: 'Polietileno',
    title: 'Bolsa de Polietileno Alta Densidad',
    desc: 'Mayor resistencia a la tracción y menor flexibilidad. Excelente barrera.',
    medidas: '60cm x 90cm',
    micronaje: '30 micrones',
    img: '/img/bolsas_industriales.png',
    isNew: false
  },
  {
    id: 8,
    category: 'Polietileno',
    title: 'Bolsa Consorcio Industrial Pesada',
    desc: 'Negra, para residuos industriales pesados, escombros o descartes.',
    medidas: '90cm x 120cm',
    micronaje: '80 micrones',
    img: '/img/bolsas_industriales.png',
    isNew: false
  },
  {
    id: 9,
    category: 'Polietileno',
    title: 'Bobina Film Termocontraíble PE',
    desc: 'Se adapta al envase mediante calor. Excelente brillo y transparencia para packs.',
    medidas: 'Ancho 600mm',
    micronaje: '60 micrones',
    img: '/img/film_termocontraible.png',
    isNew: true
  },
  {
    id: 10,
    category: 'Polietileno',
    title: 'Bobina Film Tubo Polietileno',
    desc: 'Tubo continuo para sellar y cortar a medida en la línea de empaque.',
    medidas: 'Ancho 300mm',
    micronaje: '40 micrones',
    img: '/img/film_termocontraible.png',
    isNew: false
  },
  {
    id: 11,
    category: 'Polietileno',
    title: 'Lámina Separadora PE (Pallets)',
    desc: 'Evita la fricción y humedad entre pisos de palletizado o maquinaria.',
    medidas: '120cm x 120cm',
    micronaje: '100 micrones',
    img: '/img/bolsas_industriales.png',
    isNew: false
  },

  // --- BURBUJAS ---
  {
    id: 12,
    category: 'Polietileno',
    title: 'Rollo Film con Burbujas Ligero',
    desc: 'Protección estándar para objetos frágiles, muebles y cerámicas.',
    medidas: '1.00m x 50m',
    micronaje: '40 grs/m2',
    img: '/img/film_burbujas.png',
    isNew: false
  },
  {
    id: 13,
    category: 'Polietileno',
    title: 'Rollo Film con Burbujas Pesado',
    desc: 'Mayor gramaje y resistencia al impacto para piezas mecánicas pesadas.',
    medidas: '1.20m x 50m',
    micronaje: '80 grs/m2',
    img: '/img/film_burbujas.png',
    isNew: true
  },
  {
    id: 14,
    category: 'Polietileno',
    title: 'Bolsas de Burbuja con Solapa',
    desc: 'Formatos pre-armados para agilizar el proceso de empaquetado unitario.',
    medidas: '20cm x 30cm',
    micronaje: '50 grs/m2',
    img: '/img/film_burbujas.png',
    isNew: false
  },

  // --- COMPLEMENTARIOS (Cintas / Flejes) ---
  {
    id: 15,
    category: 'Complementario',
    title: 'Cinta Adhesiva Acrílica Transparente',
    desc: 'Excelente adhesión inicial. Uso general en cajas de cartón corrugado.',
    medidas: '48mm x 100m',
    micronaje: '45 micrones',
    img: '/img/cintas_adhesivas.png',
    isNew: false
  },
  {
    id: 16,
    category: 'Complementario',
    title: 'Cinta Adhesiva Hot-Melt Marrón',
    desc: 'Adhesivo de caucho sintético, máxima fuerza para cajas pesadas o frigoríficos.',
    medidas: '48mm x 100m',
    micronaje: '50 micrones',
    img: '/img/cintas_adhesivas.png',
    isNew: true
  },
  {
    id: 17,
    category: 'Complementario',
    title: 'Cinta de Enmascarar (Papel)',
    desc: 'Uso en pintura industrial, horneado y sujeción temporal sin dejar residuos.',
    medidas: '24mm x 50m',
    micronaje: '120 micrones',
    img: '/img/cintas_adhesivas.png',
    isNew: false
  },
  {
    id: 18,
    category: 'Complementario',
    title: 'Fleje Plástico PP (Polipropileno)',
    desc: 'Zuncho negro para asegurar cajas, atados de perfiles y pallets livianos.',
    medidas: '13mm x 0.8mm',
    micronaje: 'N/A',
    img: '/img/flejes_hebillas.png',
    isNew: false
  },
  {
    id: 19,
    category: 'Complementario',
    title: 'Fleje Plástico PET (Poliéster)',
    desc: 'Alta resistencia a la tracción, sustituto ideal del fleje de acero pesado.',
    medidas: '16mm x 0.9mm',
    micronaje: 'N/A',
    img: '/img/flejes_hebillas.png',
    isNew: true
  },
  {
    id: 20,
    category: 'Complementario',
    title: 'Hebillas de Alambre Galvanizado',
    desc: 'Para trabar flejes PP y PET sin herramientas de fricción complejas.',
    medidas: '13mm a 16mm',
    micronaje: 'N/A',
    img: '/img/flejes_hebillas.png',
    isNew: false
  }
];

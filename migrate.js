import { createClient } from '@supabase/supabase-js';
import { products, mainCategories } from './src/data/products.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar variables de entorno manualmente para no depender de Vite aquí
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Faltan credenciales de Supabase en .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function uploadImage(imagePath) {
  if (!imagePath || imagePath.startsWith('http')) return imagePath;

  // imagePath es algo como '/img/scraped/manual-1.jpg'
  // Quitar el primer slash
  const relativePath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  const localFilePath = path.join(__dirname, 'public', relativePath);

  if (!fs.existsSync(localFilePath)) {
    console.warn(`[!] Imagen no encontrada localmente: ${localFilePath}`);
    return imagePath; // devolver ruta original si no existe
  }

  const fileName = path.basename(localFilePath);
  // Para evitar colisiones, la subiremos a la carpeta principal del bucket 'imagenes'
  const fileData = fs.readFileSync(localFilePath);
  
  const { data, error } = await supabase.storage
    .from('imagenes')
    .upload(fileName, fileData, {
      contentType: 'image/jpeg', // Asumimos jpeg/png, supabase adivina bien igual o podemos usar mime-types
      upsert: true
    });

  if (error) {
    console.error(`Error subiendo ${fileName}:`, error.message);
    return imagePath;
  }

  // Obtener la URL pública
  const { data: publicUrlData } = supabase.storage.from('imagenes').getPublicUrl(fileName);
  console.log(`Subida con éxito: ${fileName}`);
  return publicUrlData.publicUrl;
}

async function migrate() {
  console.log('Iniciando migración de datos a Supabase...');

  // 1. Subir Categorías
  console.log('\n--- Migrando Categorías ---');
  for (const cat of mainCategories) {
    const newImgUrl = await uploadImage(cat.img);
    const { error } = await supabase.from('categories').upsert({
      id: cat.id,
      name: cat.name,
      desc: cat.desc,
      img: newImgUrl
    });
    if (error) console.error('Error insertando categoría:', cat.name, error.message);
    else console.log('✅ Categoría migrada:', cat.name);
  }

  // 2. Subir Productos
  console.log('\n--- Migrando Productos ---');
  for (const prod of products) {
    const newImgUrl = await uploadImage(prod.img);
    const { error } = await supabase.from('products').upsert({
      id: prod.id,
      category: prod.category,
      subcategory: prod.subcategory || null,
      title: prod.title,
      desc: prod.desc || null,
      medidas: prod.medidas || null,
      features: prod.features || null,
      cant_caja: prod.cantCaja || null,
      is_new: prod.isNew || false,
      highlight_desc: prod.highlightDesc || null,
      img: newImgUrl
    });
    if (error) console.error('Error insertando producto:', prod.title, error.message);
    else console.log('✅ Producto migrado:', prod.title);
  }

  console.log('\n¡Migración completada con éxito!');
}

migrate();

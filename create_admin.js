import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function createAdminUser() {
  console.log('Creando usuario administrador...');
  
  const { data, error } = await supabase.auth.admin.createUser({
    email: 'admin@madpackaging.com',
    password: 'MadAdmin2026!',
    email_confirm: true
  });

  if (error) {
    if (error.message.includes('already exists')) {
       console.log('✅ El usuario admin@madpackaging.com ya existe.');
    } else {
       console.error('Error creando usuario:', error.message);
    }
  } else {
    console.log('✅ Usuario creado exitosamente:');
    console.log('Email: admin@madpackaging.com');
    console.log('Password: MadAdmin2026!');
  }
}

createAdminUser();

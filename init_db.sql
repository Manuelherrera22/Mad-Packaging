-- ==========================================
-- 1. CREAR TABLAS
-- ==========================================

CREATE TABLE public.categories (
    id text PRIMARY KEY,
    name text NOT NULL,
    "desc" text,
    img text
);

CREATE TABLE public.products (
    id text PRIMARY KEY,
    category text NOT NULL,
    subcategory text,
    title text NOT NULL,
    "desc" text,
    medidas text,
    features jsonb, -- array of strings
    cant_caja text,
    is_new boolean DEFAULT false,
    highlight_desc text,
    img text
);

-- ==========================================
-- 2. SEGURIDAD (RLS) - Permisos
-- ==========================================

-- Habilitar RLS
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Políticas para permitir lectura a todo el mundo (anónimo)
CREATE POLICY "Public profiles are viewable by everyone." ON public.categories FOR SELECT USING (true);
CREATE POLICY "Public products are viewable by everyone." ON public.products FOR SELECT USING (true);

-- Políticas para permitir escritura SOLO a usuarios autenticados (el administrador)
CREATE POLICY "Authed users can insert categories" ON public.categories FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Authed users can update categories" ON public.categories FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Authed users can delete categories" ON public.categories FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Authed users can insert products" ON public.products FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Authed users can update products" ON public.products FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Authed users can delete products" ON public.products FOR DELETE USING (auth.role() = 'authenticated');

-- ==========================================
-- 3. CREAR BUCKET DE ALMACENAMIENTO (STORAGE)
-- ==========================================
INSERT INTO storage.buckets (id, name, public) 
VALUES ('imagenes', 'imagenes', true);

-- Políticas del bucket
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'imagenes');
CREATE POLICY "Auth Insert" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'imagenes' AND auth.role() = 'authenticated');
CREATE POLICY "Auth Update" ON storage.objects FOR UPDATE USING (bucket_id = 'imagenes' AND auth.role() = 'authenticated');
CREATE POLICY "Auth Delete" ON storage.objects FOR DELETE USING (bucket_id = 'imagenes' AND auth.role() = 'authenticated');

# Colegio COLREY - Sitio Web Institucional

Sitio web oficial del Colegio COLREY desarrollado con Astro, Tailwind CSS y optimizado para Vercel.

## 🚀 Despliegue en Vercel

### Opción 1: Despliegue desde GitHub (Recomendado)

1. **Sube el código a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/web-colrey.git
   git push -u origin main
   ```

2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub
   - Haz clic en "Add New Project"
   - Importa el repositorio `web-colrey`
   - Vercel detectará automáticamente la configuración de Astro
   - Haz clic en "Deploy"

3. **Configuración automática:**
   - **Framework Preset:** Astro (detectado automáticamente)
   - **Build Command:** `npm run build` (automático)
   - **Output Directory:** `.vercel/output/static` (automático)
   - **Install Command:** `npm install` (automático)

### Opción 2: Despliegue con Vercel CLI

1. **Instala Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Inicia sesión:**
   ```bash
   vercel login
   ```

3. **Despliega:**
   ```bash
   vercel
   ```

4. **Para producción:**
   ```bash
   vercel --prod
   ```

## 📋 Configuración del Proyecto

### Requisitos Previos
- Node.js 18+ 
- npm o yarn

### Instalación Local

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🛠️ Stack Tecnológico

- **Framework:** Astro 4.x
- **Estilos:** Tailwind CSS 3.x
- **Deployment:** Vercel (Static)
- **TypeScript:** Sí

## 📁 Estructura del Proyecto

```
web-colrey/
├── public/          # Archivos estáticos (imágenes, videos, logo)
├── src/
│   ├── components/  # Componentes Astro reutilizables
│   ├── layouts/     # Layouts base
│   └── pages/       # Páginas del sitio
├── astro.config.mjs # Configuración de Astro
├── tailwind.config.mjs
└── package.json
```

## 🌐 Dominio Personalizado

Si tienes el dominio `colrey.edu.co`:

1. En el dashboard de Vercel, ve a tu proyecto
2. Settings → Domains
3. Agrega `colrey.edu.co`
4. Configura los DNS según las instrucciones de Vercel

## ✅ Checklist Pre-Despliegue

- [x] Build exitoso (`npm run build`)
- [x] Adapter de Vercel configurado
- [x] Todas las rutas funcionando
- [x] Imágenes y assets en `/public`
- [x] Variables de entorno (si aplica)

## 📝 Notas

- El sitio está configurado como **static site** en Vercel
- El adapter `@astrojs/vercel/static` está configurado en `astro.config.mjs`
- El dominio configurado es `https://colrey.edu.co` (puede cambiarse en Vercel)

## 🔧 Troubleshooting

Si hay problemas con el despliegue:

1. Verifica que `npm run build` funcione localmente
2. Revisa los logs en el dashboard de Vercel
3. Asegúrate de que todas las dependencias estén en `package.json`
4. Verifica que los archivos en `/public` estén incluidos en el repositorio

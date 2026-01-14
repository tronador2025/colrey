# Flujo de Trabajo - Modificaciones del Proyecto

## Proceso para Hacer Cambios

### 1. Desarrollo Local
```bash
# Iniciar servidor de desarrollo
npm run dev

# El sitio estará en: http://localhost:4322
```

### 2. Hacer Modificaciones
- Edita los archivos que necesites en `src/`
- Los cambios se reflejan automáticamente en el navegador (hot reload)
- Prueba todo localmente antes de subir

### 3. Verificar que Funciona
```bash
# Build de prueba (opcional)
npm run build

# Si el build es exitoso, puedes continuar
```

### 4. Subir Cambios a GitHub
```bash
# Ver qué archivos cambiaron
git status

# Agregar los archivos modificados
git add .

# O agregar archivos específicos
git add src/pages/contacto.astro

# Hacer commit con mensaje descriptivo
git commit -m "Agregar funcionalidad de consultas"

# Subir a GitHub
git push
```

### 5. Deploy Automático en Vercel
- Vercel detecta automáticamente el push a GitHub
- Hace build automático
- Despliega en producción (1-2 minutos)

## Ejemplo: Agregar Funcionalidad de Consultas

### Paso 1: Crear/Modificar Componente
```bash
# Crear nuevo componente
src/components/ConsultaForm.astro
```

### Paso 2: Integrar en Página
```bash
# Modificar página existente
src/pages/contacto.astro
```

### Paso 3: Probar Localmente
```bash
npm run dev
# Ir a http://localhost:4322/contacto
# Probar el formulario
```

### Paso 4: Commit y Push
```bash
git add src/components/ConsultaForm.astro src/pages/contacto.astro
git commit -m "Agregar formulario de consultas"
git push
```

## Estructura del Proyecto

```
web_colrey/
├── src/
│   ├── components/     # Componentes reutilizables
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── [NuevoComponente].astro  ← Crear aquí
│   ├── pages/         # Páginas del sitio
│   │   ├── index.astro
│   │   ├── contacto.astro
│   │   └── [nueva-pagina].astro  ← Crear aquí
│   └── layouts/       # Layouts base
│       └── BaseLayout.astro
└── public/            # Archivos estáticos
    ├── colrey_logo.png
    └── [nuevas-imagenes].png  ← Subir aquí
```

## Comandos Útiles

### Ver Estado
```bash
git status          # Ver archivos modificados
git log --oneline   # Ver historial de commits
```

### Deshacer Cambios (si algo sale mal)
```bash
# Descartar cambios en un archivo
git restore src/pages/contacto.astro

# Descartar todos los cambios
git restore .
```

### Ver Diferencias
```bash
# Ver qué cambió en un archivo
git diff src/pages/contacto.astro
```

## Notas Importantes

✅ **SÍ puedes modificar todo:**
- Cualquier archivo en `src/`
- Agregar nuevos componentes
- Crear nuevas páginas
- Modificar estilos
- Agregar funcionalidades JavaScript

✅ **El proceso es:**
1. Modificar localmente
2. Probar en `localhost:4322`
3. Commit + Push
4. Vercel despliega automáticamente

❌ **NO modifiques:**
- `.vercel/output/` (se genera automáticamente)
- `node_modules/` (se instala automáticamente)
- `.astro/` (caché de Astro)

## Para Implementar Consultas/Formularios

### Opción 1: Formulario Estático (Sin Backend)
- Usar `mailto:` o enlace a WhatsApp
- Ya implementado en contacto.astro

### Opción 2: Formulario con Backend
- Crear API route en Astro (si usas SSR)
- O usar servicio externo (Formspree, Netlify Forms, etc.)

### Opción 3: Integrar con Servicio
- Google Forms embebido
- Typeform
- Otro servicio de formularios

## Ejemplo Práctico: Agregar Página de Consultas

```bash
# 1. Crear nueva página
src/pages/consultas.astro

# 2. Agregar al menú
src/components/Header.astro

# 3. Probar localmente
npm run dev

# 4. Subir cambios
git add .
git commit -m "Agregar página de consultas"
git push
```

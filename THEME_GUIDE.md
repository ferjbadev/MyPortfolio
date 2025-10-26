# Guía del Sistema de Temas - Dark/Light Mode

## ✅ Implementación Completada

### 1. **ThemeToggle Component**
**Archivo**: `src/app/components/ThemeToggle.tsx`

- ✅ Toggle button flotante (top-right)
- ✅ Iconos animados: Sol (modo claro) / Luna (modo oscuro)
- ✅ Persistencia en localStorage
- ✅ Animación de rotación al cambiar
- ✅ Efectos hover y tap

**Características:**
- Posición: `top-24 right-8` (debajo del navbar)
- Z-index: 50 (siempre visible)
- Guarda preferencia del usuario
- Carga automática al recargar página

---

## 🎨 Sistema de Colores

### Dark Mode (Default)
```css
--background: #0a0a0a
--foreground: #ededed
--card-bg: rgba(0, 0, 0, 0.4)
--border-color: #374151
--scrollbar-track: #1a1a1a
```

**Gradientes:**
- Slate: `from-slate-950 via-gray-900 to-emerald-950`
- Emerald: `from-emerald-950 via-gray-900 to-slate-950`
- Gray: `from-gray-900 via-gray-800 to-gray-900`

### Light Mode
```css
--background: #ffffff
--foreground: #171717
--card-bg: rgba(255, 255, 255, 0.8)
--border-color: #e5e7eb
--scrollbar-track: #f3f4f6
```

**Gradientes:**
- Slate → `#f0f9ff, #e0f2fe, #dbeafe` (azul claro)
- Emerald → `#ecfdf5, #d1fae5, #a7f3d0` (verde claro)
- Gray → `#f3f4f6, #e5e7eb, #f3f4f6` (gris claro)

---

## 🔧 Cómo Funciona

### 1. Toggle de Tema
```typescript
const toggleTheme = () => {
  const newTheme = !isDark
  setIsDark(newTheme)
  
  // Guardar en localStorage
  localStorage.setItem("theme", newTheme ? "dark" : "light")
  
  // Toggle clase en HTML
  document.documentElement.classList.toggle("light", !newTheme)
}
```

### 2. Persistencia
```typescript
useEffect(() => {
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme) {
    setIsDark(savedTheme === "dark")
    document.documentElement.classList.toggle("light", savedTheme === "light")
  }
}, [])
```

### 3. CSS Variables
El sistema usa CSS variables que cambian según la clase `.light` en el elemento `<html>`:

```css
:root {
  /* Dark mode variables */
}

html.light {
  /* Light mode variables */
}
```

---

## 🎯 Estilos Específicos por Modo

### Textos
```css
/* Dark Mode */
.text-white → #ededed
.text-gray-400 → #9ca3af
.text-gray-300 → #d1d5db

/* Light Mode */
.text-white → #171717
.text-gray-400 → #6b7280
.text-gray-300 → #9ca3af
```

### Fondos
```css
/* Dark Mode */
.bg-gray-900 → #111827
.bg-gray-800 → #1f2937
.bg-black/40 → rgba(0, 0, 0, 0.4)

/* Light Mode */
.bg-gray-900 → #f9fafb
.bg-gray-800 → #ffffff
.bg-black/40 → rgba(255, 255, 255, 0.6)
```

### Bordes
```css
/* Dark Mode */
.border-gray-800 → #1f2937
.border-gray-700 → #374151

/* Light Mode */
.border-gray-800 → #e5e7eb
.border-gray-700 → #d1d5db
```

---

## 📱 Componentes Afectados

### Todos los componentes se adaptan automáticamente:
- ✅ Navbar
- ✅ About
- ✅ Experience
- ✅ Skills
- ✅ Projects
- ✅ Contact
- ✅ Footer
- ✅ WhatsAppButton
- ✅ BackToTop
- ✅ ScrollProgress

---

## 🚀 Uso del Toggle

### Posición del Botón
```
┌─────────────────────────────┐
│  Navbar                  [🌙]│ ← ThemeToggle (top-24 right-8)
│                             │
│  Content                    │
│                             │
└─────────────────────────────┘
```

### Estados del Icono
- **Dark Mode Activo**: 🌞 Sol amarillo
- **Light Mode Activo**: 🌙 Luna azul

### Animación
- Rotación de 180° al cambiar
- Duración: 0.3s
- Hover: Scale 1.1
- Tap: Scale 0.9

---

## 🎨 Personalización

### Cambiar Colores del Light Mode
```css
/* En globals.css */
html.light {
  --background: #tu-color-aqui;
  --foreground: #tu-color-aqui;
  /* ... más variables */
}
```

### Cambiar Posición del Toggle
```tsx
// En ThemeToggle.tsx
className="fixed top-24 right-8 ..."
// Cambiar top-24 o right-8 según preferencia
```

### Agregar Más Estilos Específicos
```css
/* En globals.css */
html.light .tu-clase-personalizada {
  /* Estilos para modo claro */
}
```

---

## 💡 Mejores Prácticas

### 1. **Usar CSS Variables**
Preferir variables CSS sobre valores hardcoded:
```css
/* ✅ Bueno */
background: var(--background);

/* ❌ Evitar */
background: #0a0a0a;
```

### 2. **Transiciones Suaves**
```css
body {
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

### 3. **Contraste Adecuado**
- Dark Mode: Texto claro (#ededed) sobre fondo oscuro (#0a0a0a)
- Light Mode: Texto oscuro (#171717) sobre fondo claro (#ffffff)

### 4. **Accesibilidad**
```tsx
aria-label="Toggle theme"
```

---

## 🔍 Testing

### Verificar Implementación
1. Hacer clic en el toggle
2. Verificar que cambia el tema
3. Recargar la página
4. Verificar que mantiene la preferencia

### Inspeccionar en DevTools
```html
<!-- Dark Mode -->
<html lang="en">

<!-- Light Mode -->
<html lang="en" class="light">
```

### localStorage
```javascript
// Ver en Console
localStorage.getItem("theme") // "dark" o "light"
```

---

## 📊 Compatibilidad

### Navegadores Soportados
- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

### Características
- ✅ CSS Variables
- ✅ localStorage API
- ✅ classList.toggle()
- ✅ CSS Gradients
- ✅ Transitions

---

## 🐛 Troubleshooting

### El tema no persiste
**Solución**: Verificar que localStorage esté habilitado en el navegador

### Los colores no cambian
**Solución**: Verificar que la clase `.light` se agregue al elemento `<html>`

### Algunos elementos no cambian
**Solución**: Agregar estilos específicos en `globals.css`:
```css
html.light .tu-elemento {
  /* estilos */
}
```

---

## 🎯 Próximas Mejoras Opcionales

### 1. **Auto-detect System Preference**
```typescript
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
```

### 2. **Smooth Transition Animation**
Agregar animación de transición más elaborada al cambiar tema

### 3. **Más Variantes de Tema**
- Sepia mode
- High contrast mode
- Custom color schemes

### 4. **Keyboard Shortcut**
```typescript
// Ctrl/Cmd + Shift + T para toggle
useEffect(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
      toggleTheme()
    }
  }
  window.addEventListener('keydown', handleKeyPress)
  return () => window.removeEventListener('keydown', handleKeyPress)
}, [])
```

---

## 📝 Notas Importantes

### ⚠️ Lint Warnings
Los warnings de `@tailwind` en `globals.css` son **normales** y pueden ser ignorados. Son parte de la configuración de Tailwind CSS.

### 🎨 Gradientes Personalizados
Los gradientes de fondo se adaptan automáticamente al tema. Los colores verde y azul se mantienen para consistencia de marca.

### 💾 LocalStorage
El tema se guarda en localStorage con la key `"theme"` y valores `"dark"` o `"light"`.

---

**Última actualización**: Octubre 25, 2025
**Versión**: 1.0.0

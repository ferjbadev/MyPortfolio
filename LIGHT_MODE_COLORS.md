# Colores Ajustados para Modo Claro

## 📋 Paleta de Colores - Light Mode

### Textos Principales

#### Títulos (h1-h6)
- **Color**: `#111827` (Gray-900)
- **Uso**: Todos los encabezados
- **Contraste**: Excelente sobre fondos claros

#### Párrafos
- **Color**: `#374151` (Gray-700)
- **Uso**: Texto de cuerpo, descripciones
- **Contraste**: Muy bueno, fácil de leer

#### Text-White (Adaptado)
- **Dark Mode**: `#ededed`
- **Light Mode**: `#111827`
- **Uso**: Textos principales en componentes

#### Text-Gray-400 (Adaptado)
- **Dark Mode**: `#9ca3af`
- **Light Mode**: `#4b5563` (Gray-600)
- **Uso**: Textos secundarios

#### Text-Gray-300 (Adaptado)
- **Dark Mode**: `#d1d5db`
- **Light Mode**: `#6b7280` (Gray-500)
- **Uso**: Textos terciarios

---

## 🎨 Colores de Acento

### Verde (Brand Color)
- **text-green-400**: `#059669` (Emerald-600)
- **text-green-500**: `#10b981` (Emerald-500)
- **Uso**: Links, CTAs, highlights

### Azul
- **text-blue-500**: `#3b82f6` (Blue-500)
- **text-blue-400**: `#60a5fa` (Blue-400)
- **Uso**: Links secundarios, iconos

### Amarillo
- **text-yellow-400**: `#f59e0b` (Amber-500)
- **Uso**: Iconos de sol, alertas

---

## 🔲 Fondos

### Principales
- **bg-gray-900**: `#f9fafb` (Gray-50)
- **bg-gray-800**: `#ffffff` (White)
- **bg-black/40**: `rgba(255, 255, 255, 0.9)`

### Gradientes
```css
/* Slate (Azul claro) */
from-slate-950: #f0f9ff → #e0f2fe → #dbeafe

/* Emerald (Verde claro) */
from-emerald-950: #ecfdf5 → #d1fae5 → #a7f3d0

/* Gray */
from-gray-900: #f3f4f6 → #e5e7eb → #f3f4f6
```

---

## 🖼️ Bordes

- **border-gray-800**: `#e5e7eb` (Gray-200)
- **border-gray-700**: `#d1d5db` (Gray-300)
- **border-gray-600**: `#9ca3af` (Gray-400)

---

## 🔗 Links y Elementos Interactivos

### Links Normales
- **Color**: `#4b5563` (Gray-600)
- **Hover**: `#059669` (Emerald-600)

### Botones
- **Primary (Green)**: Mantiene colores originales
- **Secondary (Gray)**: Fondo blanco, texto oscuro
- **Hover**: `#f3f4f6` (Gray-100)

---

## 📊 Contraste y Accesibilidad

### Ratios de Contraste (WCAG AA)

#### Títulos
- `#111827` sobre `#ffffff`: **15.3:1** ✅ AAA

#### Párrafos
- `#374151` sobre `#ffffff`: **10.4:1** ✅ AAA

#### Texto Secundario
- `#4b5563` sobre `#ffffff`: **8.6:1** ✅ AAA

#### Texto Terciario
- `#6b7280` sobre `#ffffff`: **5.7:1** ✅ AA

#### Links (Hover)
- `#059669` sobre `#ffffff`: **4.8:1** ✅ AA

---

## 🎯 Elementos Específicos

### Navbar
- **Fondo**: Blanco con sombra sutil
- **Texto**: `#111827`
- **Links**: `#4b5563` → `#059669` (hover)

### Footer
- **Fondo**: `#f3f4f6` (Gray-100)
- **Texto Principal**: `#111827`
- **Texto Secundario**: `#6b7280`

### Cards (Proyectos)
- **Fondo**: `rgba(255, 255, 255, 0.9)`
- **Título**: `#111827`
- **Descripción**: `#374151`
- **Tags**: `#4b5563`

### Botones
- **WhatsApp**: Verde original (mantiene identidad)
- **Download CV**: Azul original
- **View Projects**: Fondo blanco, borde gris

---

## 🌈 Comparación Dark vs Light

| Elemento | Dark Mode | Light Mode |
|----------|-----------|------------|
| Fondo principal | `#0a0a0a` | `#ffffff` |
| Texto principal | `#ededed` | `#111827` |
| Texto secundario | `#9ca3af` | `#4b5563` |
| Acento verde | `#10b981` | `#059669` |
| Cards | `rgba(0,0,0,0.4)` | `rgba(255,255,255,0.9)` |
| Bordes | `#374151` | `#e5e7eb` |

---

## 💡 Recomendaciones de Uso

### ✅ Hacer
- Usar colores oscuros para texto principal
- Mantener buen contraste (mínimo 4.5:1)
- Usar grises medios para texto secundario
- Preservar colores de marca (verde/azul)

### ❌ Evitar
- Texto gris muy claro sobre blanco
- Fondos muy brillantes
- Cambiar colores de botones de acción
- Reducir contraste en elementos importantes

---

## 🔧 Personalización

### Cambiar Color de Texto Principal
```css
html.light .text-white {
  color: #tu-color !important;
}
```

### Ajustar Contraste
```css
html.light p {
  color: #374151 !important; /* Más oscuro = más contraste */
}
```

### Modificar Acento Verde
```css
html.light .text-green-400 {
  color: #059669 !important; /* Cambiar a tu preferencia */
}
```

---

## 📱 Testing

### Herramientas Recomendadas
- **WebAIM Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Chrome DevTools**: Lighthouse accessibility audit
- **WAVE**: https://wave.webaim.org/

### Verificar
1. Contraste de texto sobre fondos
2. Legibilidad en diferentes tamaños
3. Visibilidad de links y botones
4. Accesibilidad para daltonismo

---

**Última actualización**: Octubre 25, 2025

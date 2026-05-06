# 🚀 Marcos Giannini Portfolio

Un portfolio interactivo y moderno para desarrolladores frontend, construido con tecnologías de vanguardia. Muestra mis proyectos, habilidades y personalidad con una experiencia visual única y profesional.

---

![Portfolio Demo](./GifPortfolio.gif)

---

<p align="center">
  <a href="https://portfolio-pi-vert-12.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-00C853?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
  &nbsp;
  <img src="https://img.shields.io/badge/Formspree-EA4C89?style=for-the-badge&logo=formspree&logoColor=white" />
</p>

---

## ✨ Features

- 🗂️ **Gestión centralizada de datos** para proyectos y secciones.
- 🧑‍💻 **Personal Branding**: fácil de personalizar y escalar.
- 🎨 Animaciones fluidas con **Framer Motion**.
- 📬 Formulario de contacto integrado con **Formspree**.
- 📱 Diseño **responsive** (móvil y escritorio).

---

## 🗂️ Estructura del proyecto

```
public/
├── GifPortfolio.gif
└── ...otros archivos
src/
├── components/
├── data/
├── pages/
└── styles/
```

---

## 📦 Instalación

```bash
# Clona el repositorio
git clone https://github.com/MarcosGiannini/portfolio.git

# Instala las dependencias
npm install

# Inicia el servidor de desarrollo
npm run dev
```

Luego abre http://localhost:3000 (si el puerto está ocupado, Next usará el siguiente disponible y te lo indicará en la consola).

---

## Scripts útiles

| Script           | Descripción                                      |
|------------------|--------------------------------------------------|
| `npm run dev`    | Inicia el servidor de desarrollo                 |
| `npm run build`  | Compila la aplicación para producción            |
| `npm run start`  | Inicia la aplicación en modo producción          |
| `npm run lint`   | Ejecuta el linter para mantener el código limpio |

---

## ⚙️ Notas de configuración

- **Formspree**: el formulario usa `@formspree/react` con el ID configurado en `src/components/Contact/index.tsx`. Ajusta el ID si migras el endpoint.
- **Email de contacto**: se define en `src/data/portfolioData.ts`.
- Modifica los datos en `src/data/portfolioData.ts` para actualizar tus proyectos y secciones.
- Personaliza los estilos en `src/styles/globals.css` y los componentes en `src/components/`.

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar el portfolio, abre un issue o envía un pull request.

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

---

## 👤 Autor

**Marcos Giannini**  
[GitHub](https://github.com/MarcosGiannini) | [LinkedIn](https://www.linkedin.com/in/marcosgiannini-dev/)

---

## 🕹️ SplashScreen — Propuesta de rediseño del botón START

> Estado: aprobado en ROADMAP (sub-fase 3.1.A). Pendiente de implementación.

El botón START actual es funcional. El objetivo del rediseño es convertir el primer frame del portfolio en algo que genere anticipación — como la pantalla de título de un arcade de los 80.

### Dirección visual

**Referentes de diseño:** pantallas de título de NES/SEGA, intro de Star Wars (campo de estrellas), HUD de Tron, estética VHS glitch, créditos de película americana de los 80.

**Fondo — "Arcade Space"**

Tres capas CSS apiladas:
1. **Starfield**: campo de estrellas estático generado con `box-shadow` en un pseudo-elemento. Sin canvas, sin JS — puro CSS. Densidad baja, puntos de 1–2px. Sutil, no distrae.
2. **Perspective grid**: rejilla convergente hacia el horizonte inferior. `linear-gradient` en perspectiva CSS 3D o SVG inline. Referencia directa a Tron y synthwave. Da profundidad al vacío negro actual.
3. **Scanlines CRT**: `repeating-linear-gradient` semi-transparente. Opacidad 3–5%. La marca de que esto se ve en un tubo de rayos catódicos, no en una pantalla plana.

**Composición vertical centrada**

```
[ MARCOS GIANNINI ]         ← display grande, efecto glitch único al cargar
[ Frontend Engineer ]       ← mono, más pequeño

      ◤────────────◥
      │   START    │        ← el botón
      ◣────────────◢

  PRESS START TO CONTINUE   ← parpadeo, ya existe

                © 2026 MARCOS.DEV   ← esquina inferior, referencia créditos arcade
```

**El botón en detalle**

- **Shape**: rectangular, esquinas 4px. Más físico, menos píldora UI moderna.
- **Corner brackets** (`◤ ◥ ◣ ◢`): los cuatro vértices tienen decoración de HUD sci-fi. CSS puro. Comunican "interfaz técnica de alto nivel" sin ser decorativos vacíos.
- **Glow**: doble capa. Exterior: difuso y amplio (ya existe). Interior: `box-shadow` inset cálido que da sensación de que el botón tiene una fuente de luz propia.
- **Hover — efecto "scan"**: una línea de luz barre el botón de izquierda a derecha en 300ms (`@keyframes`). El sistema te está reconociendo. Luego el glow se dobla en intensidad.
- **Hover — aberración cromática**: `text-shadow` con offset rojo (+2px) y cian (–2px) en el texto START. Referencia VHS/CRT directo. Coste: cero. Impacto visual: máximo.
- **Press**: micro-flash de `brightness(1.5)` en toda la pantalla durante 80ms + `scale(0.97)` en el botón. Retroalimentación física real. Como pulsar un botón de arcade de verdad.

**Accesibilidad y rendimiento**

- Todos los efectos desactivados con `prefers-reduced-motion: reduce` — solo fade.
- Zero dependencias nuevas. Framer Motion ya está instalado para la transición de salida.
- Sin canvas, sin WebGL. CSS + SVG únicamente. Carga instantánea.

---

## Agradecimientos

Gracias a Ailín Nakaganeku (@ailinnakaganeku) por la plantilla original que inspiró este proyecto.

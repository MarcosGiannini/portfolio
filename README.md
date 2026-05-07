# Marcos Giannini Portfolio

Portfolio personal de Marcos Giannini, Frontend Engineer, construido con Next.js,
React, TypeScript y Tailwind CSS.

![Portfolio Demo](./GifPortfolio.gif)

[Live Demo](https://portfolio-pi-vert-12.vercel.app/)

## Estado del proyecto

La fuente de verdad del proyecto es [ROADMAP.md](./ROADMAP.md).

- Ultima sub-fase completada: 2.4 - Badge UI atomico.
- UI atoms: Button y Badge completados; siguiente componente: Card.
- Rama activa: `chore/1.1-app-router-prep`.
- Siguiente paso segun roadmap: crear `src/components/ui/Card.tsx`.
- Sistema UI atomico iniciado con Button y Badge, basado en los tokens definidos en Fase 2.2.

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Formspree

## Scripts

| Script | Descripcion |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Compila la aplicacion para produccion |
| `npm run start` | Inicia la aplicacion en modo produccion |
| `npm run lint` | Ejecuta el linter |

## Instalacion

```bash
npm install
npm run dev
```

Luego abre la URL indicada por Next.js en consola. Normalmente sera
`http://localhost:3000`; si el puerto esta ocupado, Next usara el siguiente
disponible.

## Estructura principal

```text
public/
  CV_MarcosGiannini_Frontend.pdf
  mifoto.jpg
  quickmock.png
  redux-showcase.png

src/
  app/
  components/
    layout/
    sections/
    ui/
  data/
  hooks/
  styles/
  types/
```

## Configuracion

- Los datos editables del portfolio viven en `src/data/portfolioData.ts`.
- Los estilos globales viven en `src/styles/globals.css`.
- Tailwind CSS v4 se configura desde `src/styles/globals.css` con
  `@import "tailwindcss"` y tokens definidos mediante CSS.
- Los componentes UI atomicos viven en `src/components/ui/` y deben consumir
  tokens de `globals.css` sin colores hardcodeados.
- El formulario usa `@formspree/react` con el ID configurado en
  `src/components/sections/Contact/index.tsx`. Se migrara a API Route propia en Fase 4.

## SplashScreen - propuesta de rediseño del boton START

Estado: aprobado en ROADMAP, sub-fase 3.1.A. Pendiente de implementacion.

El boton START actual es funcional. El objetivo del rediseño es convertir el
primer frame del portfolio en una pantalla de titulo estilo arcade de los 80.

### Direccion visual

Referentes: pantallas de titulo de NES/SEGA, intro de Star Wars, HUD de Tron,
estetica VHS glitch y creditos de pelicula americana de los 80.

### Fondo "Arcade Space"

- Starfield generado con CSS, sin canvas ni dependencias.
- Perspective grid convergente hacia el horizonte inferior.
- Scanlines CRT con `repeating-linear-gradient` y opacidad baja.

### Composicion

```text
[ MARCOS GIANNINI ]
[ Frontend Engineer ]

      START

  PRESS START TO CONTINUE

                © 2026 MARCOS.DEV
```

### Boton START

- Rectangular, con esquinas de 4px.
- Decoracion tipo HUD en las esquinas.
- Glow exterior e interior.
- Hover con barrido de luz y aberracion cromatica.
- Press con micro-flash y `scale(0.97)`.
- Respeto de `prefers-reduced-motion`.

## Agradecimientos

Gracias a Ailin Nakaganeku por la plantilla original que inspiro este proyecto.

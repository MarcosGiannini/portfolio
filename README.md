# Portfolio Personal de Marcos Giannini

Portfolio interactivo y responsive construido con Next.js, TypeScript y Tailwind CSS. Incluye animaciones con Framer Motion, scroll spy con IntersectionObserver, optimización de imágenes y un formulario de contacto integrado con Formspree.

## Stack Tecnológico

- React 19 (RC)
- Next.js 15
- TypeScript 5
- Tailwind CSS 3
- Framer Motion 12
- Formspree (SDK @formspree/react)

## Instrucciones de Instalación

1) Clonar el repositorio

```bash
git clone https://github.com/MarcosGiannini/portfolio.git
cd portfolio
```

2) Instalar dependencias

```bash
npm install
```

3) Ejecutar en desarrollo

```bash
npm run dev
```

Luego abre http://localhost:3000 (si el puerto está ocupado, Next usará el siguiente disponible y te lo indicará en la consola).

4) Build y producción (opcional)

```bash
npm run build
npm start
```

## Scripts útiles

- `npm run dev`: Arranca el servidor de desarrollo.
- `npm run build`: Genera el build de producción.
- `npm start`: Inicia el servidor en modo producción.
- `npm run lint`: Linting del proyecto.

## Notas de configuración

- Formspree: el formulario usa `@formspree/react` con el ID configurado en `src/components/Contact/index.tsx`. Ajusta el ID si migras el endpoint.
- Email de contacto: se define en `src/data/portfolioData.ts`.

## Agradecimientos

Gracias a Ailín Nakaganeku por la plantilla original que inspiró este proyecto.

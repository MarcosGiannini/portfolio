# ROADMAP — Portfolio de Marcos Giannini
> Última actualización: 2026-05-05 — sub-fase 0.3 completada (accesibilidad inmediata)
> Estado general: 🔵 Fase 0 aprobada — pendiente de implementación

## CONTEXTO DEL PROYECTO

Portfolio personal de **Marcos Giannini**, Frontend Engineer en el equipo Digital Experience de **NTT DATA**.

Objetivos del portfolio:
1. Comunicar seniority de forma visual y técnicamente ejemplar.
2. Mostrar proyectos reales en producción (Super Teacher, Lenoy Editorial).
3. Generar leads de negocio a través de la sección de Website Packs.
4. Ser memorable, accesible y técnicamente impecable.

Audiencia principal: reclutadores tech, CTOs, potenciales clientes freelance.
Idioma por defecto: **español**. Soporte futuro: inglés, italiano.

---

Este documento es la fuente de verdad del proyecto.
Cada fase debe aprobarse antes de ejecutarse.
Ningún cambio de código se realiza sin haber marcado el paso correspondiente como aprobado en este ROADMAP.

---

## LEYENDA DE ESTADOS

| Símbolo | Significado |
|---|---|
| ⬜ | No iniciado |
| 🔵 | Aprobado, pendiente de implementar |
| 🟡 | En progreso |
| ✅ | Completado |
| ❌ | Bloqueado / descartado |

---

## FASE 0 — ESTABILIZACIÓN (sin migración, sin rediseño)
> **Estado: 🔵 APROBADA — lista para implementar.**
> Objetivo: hacer el proyecto actual honesto, limpio y sin bugs silenciosos.
> Esta fase no introduce nuevas features ni cambia el aspecto visual del portfolio.
> Es el prerequisito obligatorio para cualquier fase siguiente.
> Estimación: 1–2 sesiones de trabajo.

### 0.1 — Limpieza de archivos muertos
> ✅ **Completada — 2026-05-05. Build verificado: OK.**
> Eliminados: `SplashScreen.tsx` (raíz duplicado), `Skills/`, `SkillsNew/`, `TechStack/`, `public/embalses.jpeg`.
> Nota: el conflicto de peers de `@formspree/react` con React RC es preexistente — se resuelve en sub-fase 0.2.
- ✅ Eliminar `src/components/SplashScreen.tsx` (duplicado raíz)
- ✅ Eliminar `src/components/Skills/` (componente huérfano, no importado)
- ✅ Eliminar `src/components/SkillsNew/` (archivo vacío)
- ✅ Eliminar `src/components/TechStack/` (componente placeholder eliminado)
- ✅ Eliminar `public/embalses.jpeg` (imagen sin uso)

#### ✅ VERIFICACIÓN MANUAL — 0.1 (ejemplo de referencia para sub-fases futuras)

> **Cuándo verificar:** inmediatamente después del commit, antes de cerrar la sesión.
> **Comando exacto:** `npm run dev` (ejecutar solo cuando la IA lo indique explícitamente)
> **Dónde abrir:** `http://localhost:3000`
> **Qué debes ver:**
> - La SplashScreen con el botón "START" aparece al cargar
> - Tras pulsar START, se cargan todas las secciones: Hero, About, Projects, Contact
> - No hay errores visibles en pantalla ni mensajes de error de React
> **Qué NO debe pasar:**
> - Pantalla en blanco
> - Error "Module not found" en consola del navegador
> - Cualquier texto que mencione "Skills", "TechStack" o "SkillsNew"
> **Si algo falla:** hacer pantallazo de la consola del navegador y detener la ejecución.

> ⚠️ **PROTOCOLO PERMANENTE:** Este bloque de verificación es **obligatorio en todas las sub-fases futuras**.
> La IA siempre lo redactará con instrucciones exactas antes de cerrar cada sub-fase.

### 0.2 — Correcciones críticas de TypeScript
> ✅ **Completada — 2026-05-05. Build verificado: OK. Cero errores TS/lint.**
- ✅ Actualizar `@types/react` de `^18` a `^19.2.14`
- ✅ Actualizar `react` y `react-dom` de la RC `19.0.0-rc-69d4b800-20241021` a `^19.2.5` (estable)
- ✅ Añadir el campo `repo?: string` al tipo `Project` en `ProjectPortfolio/index.tsx`
- ✅ Eliminar `title?: string` opcional sin uso de `HeroProps` en `Hero/index.tsx`
> Nota: `@formspree/react@3.0.0` sigue requiriendo `--legacy-peer-deps` (no declara soporte a React 19).
> Se eliminará en Fase 4 al migrar al formulario propio con Resend.

#### ✅ VERIFICACIÓN MANUAL — 0.2

> **Cuándo verificar:** inmediatamente, antes de cerrar la sesión.
> **Comando exacto:** `npm run dev`
> **URL a abrir:** `http://localhost:3000`
> **Qué debes ver:**
> - SplashScreen con botón START aparece correctamente.
> - Tras pulsar START, todas las secciones cargan sin errores: Hero, About, Projects, Contact.
> - En la consola del navegador: **cero errores rojos**. Puede haber warnings amarillos de Next.js (son normales).
> - El portfolio se ve visualmente idéntico a antes de esta sub-fase.
> **Qué NO debe pasar:**
> - Pantalla en blanco.
> - Error "invalid hook call" o cualquier mención a versión de React incompatible.
> - Mensajes sobre `title` en Hero (el campo fue eliminado del tipo).
> **Si algo falla:** pantallazo de consola del navegador y parar.

### 0.3 — Correcciones de accesibilidad inmediatas
> ✅ **Completada — 2026-05-05. Build verificado: OK.**
- ✅ Cambiar `lang="en"` a `lang="es"` en `src/pages/_document.tsx`
- ✅ Añadir `aria-label` dinámico + `aria-expanded` + `aria-controls="mobile-menu"` al botón hamburger del Header
- ✅ Añadir `aria-hidden="true"` al icono `<Menu>` del botón hamburger
- ✅ Añadir `id="mobile-menu"` al `<nav>` móvil (destino de `aria-controls`)
- ✅ Corregir jerarquía de headings: `<h1>` en Header (nombre) → `<span>` con misma apariencia

#### ✅ VERIFICACIÓN MANUAL — 0.3

> **Cuándo verificar:** inmediatamente, antes de cerrar la sesión.
> **Comando exacto:** `npm run dev`
> **URL a abrir:** `http://localhost:3000`
> **Qué debes ver:**
> - El portfolio carga y se comporta exactamente igual visualmente.
> - "Marcos Giannini" en el header sigue con el mismo tamaño y estilo (era `<h1>`, ahora `<span>` — mismas clases CSS).
> - El botón hamburger (móvil, < 768px) sigue funcionando: abre y cierra el menú.
> - En DevTools (pestaña Elementos), el `<html>` debe tener `lang="es"` (antes era `lang="en"`).
> **Qué NO debe pasar:**
> - Cambio visual en el header.
> - Menú móvil que no abre o no cierra.
> - Error de consola rojo.
> **Si algo falla:** pantallazo y parar.

### 0.4 — Correcciones de bugs de UX ✅
- ✅ Eliminar `style={{ scrollBehavior: "smooth" }}` en los `<a>` del Header
- ✅ Eliminar `scroll-snap-type: y mandatory` de `globals.css`
- ✅ Eliminar los `console.log` de debug del `IntersectionObserver` en `index.tsx`

> **Commit:** `36bd2e7` — rama `chore/0.4-ux-bug-fixes`
>
> **Verificación manual:**
> - `npm run dev` → `http://localhost:3000`
> - Scroll entre secciones debe ser fluido (sin saltos de snap)
> - Consola del navegador debe estar vacía (sin logs de Observer)
> - Sin cambios visuales
> - **NO debe pasar:** scroll roto, logs en consola, error rojo.

### 0.5 — Contenido actualizado (datos) ✅
- ✅ Añadir proyecto **Super Teacher** a `portfolioData.ts`
- ✅ Añadir proyecto **Lenoy Editorial** a `portfolioData.ts`
- ✅ Actualizar la bio en `AboutMe/index.tsx` con texto canónico aprobado (NTT DATA)
- ✅ Eliminar el proyecto "Mi Portfolio Personal" de la lista de proyectos
- ✅ Corregir textos mezclados ES/EN en `portfolioData.ts` (formulario → español)
- ↪ Añadir categoría `"En producción"` a `skillCategories` → diferido a 0.6 (skillCategories se mueve allí)

> **Commit:** `66db5a8` — rama `chore/0.5-content-update`
>
> **Verificación manual:**
> - `npm run dev` → `http://localhost:3001`
> - Sección Proyectos: Super Teacher y Lenoy Editorial aparecen primero (sin imagen = placeholder)
> - Sección Sobre Mí: bio actualizada con "NTT DATA" y "Super Teacher / Lenoy Editorial"
> - Formulario de contacto: campos en español ("Nombre", "Mensaje", "Enviar mensaje")
> - **NO debe pasar:** error rojo en consola, proyectos duplicados o "Mi Portfolio Personal" visible.

### 0.6 — Preparación de estructura de datos para i18n futuro
> ⚠️ Esta sub-fase NO implementa i18n. Únicamente prepara la estructura de datos
> para que la Fase 6 pueda ejecutarse sin tocar lógica de componentes.
- ⬜ Mover la bio hardcodeada en `AboutMe/index.tsx` a `portfolioData.ts`
- ⬜ Mover `skillCategories` hardcodeado en `AboutMe/index.tsx` a `portfolioData.ts`
- ⬜ Verificar que ningún componente renderiza texto que no venga de `portfolioData.ts` o de props
- ⬜ Asegurarse de que **todos los textos editables** del portfolio tienen un único punto de origen
- ⬜ Añadir comentario en `portfolioData.ts` marcando los campos que serán traducibles en Fase 6

### 0.7 — Mensaje profesional y propuesta de valor
> ✅ **Completada — textos aprobados el 2026-05-05.**
> Los textos siguientes son el contenido canónico del portfolio. Se volcará a `portfolioData.ts` en la sub-fase 0.5.

- ✅ **Frase de propuesta de valor (Hero):**
  > *"Construyo productos digitales reales. Del diseño al deploy."*

- ✅ **Bio aprobada (sección About):**
  > Frontend Engineer en el equipo de Digital Experience de NTT DATA, con más de 8 años construyendo interfaces y productos web. Trabajo en el ciclo completo: desde la arquitectura de componentes hasta el deploy en producción.
  >
  > En paralelo, desarrollo proyectos propios: **Super Teacher**, una plataforma SaaS de aprendizaje con Next.js, Supabase y Stripe, y **Lenoy Editorial**, el sitio web de una editorial independiente. Proyectos reales, con usuarios reales.
  >
  > Me interesa el cruce entre diseño de producto y ingeniería de frontend: código que funciona, que escala y que alguien sabe mantener.

- ✅ **Título principal:** `"Frontend Engineer"` (unificado, sin mezcla de idiomas)
- ✅ **Orden de proyectos:** Super Teacher → Lenoy Editorial → Redux Showcase → Quick Mock
- ✅ Textos pendientes de volcar a `portfolioData.ts` (se ejecuta en sub-fase 0.5)

### 0.8 — Cargar las fuentes correctamente
- ⬜ Implementar `next/font` en `src/pages/_app.tsx` para Inter y Space Grotesk
- ⬜ Asegurarse de que las variables `--font-inter` y `--font-heading` se inyectan en `<body>`
- ⬜ Reemplazar Montserrat por Space Grotesk en `tailwind.config.ts` (nueva tipografía propuesta)

---

## FASE 1 — ARQUITECTURA BASE (App Router)
> **Estado: ⬜ No iniciada. Prerequisito: Fase 0 completada al 100%.**
> Objetivo: migrar de Pages Router a App Router sin cambiar nada visual.
> El portfolio debe verse exactamente igual al finalizar esta fase.
> Estimación: 2–3 sesiones de trabajo.

### 1.1 — Preparación de la migración
- ⬜ Crear la estructura de carpetas `src/app/` en paralelo a `src/pages/`
- ⬜ Crear `src/app/layout.tsx` (root layout: `<html>`, `<body>`, providers)
- ⬜ Crear `src/app/page.tsx` (página principal — equivalente a `pages/index.tsx`)
- ⬜ Crear `src/app/not-found.tsx`

### 1.2 — Migración de componentes a RSC donde corresponda
- ⬜ Identificar qué componentes requieren `"use client"` (los que usan hooks o eventos)
  - Requieren client: `Header`, `SplashScreen`, `ScrollToTop`, `Contact`
  - Pueden ser Server Components: `Hero`, `Footer`, `ProjectPortfolio`, `AboutMe`
- ⬜ Añadir directiva `"use client"` a los componentes que corresponden
- ⬜ Validar que no hay errores de hidratación

### 1.3 — Metadata API
- ⬜ Reemplazar `<Head>` en `index.tsx` por `export const metadata` en `app/page.tsx`
- ⬜ Eliminar el componente `Seo/index.tsx` (reemplazado por Metadata API)
- ⬜ Configurar OG image estática básica en `public/og-image.jpg`

### 1.4 — Eliminar Pages Router
- ⬜ Eliminar `src/pages/` una vez que App Router funciona correctamente
- ⬜ Eliminar la dependencia de `next/head` si ya no se usa
- ⬜ Verificar `next.config.ts` (no requiere cambios para App Router)

### 1.5 — Extracción de lógica a hooks
- ⬜ Crear `src/hooks/useActiveSection.ts` con el `IntersectionObserver` extraído de `index.tsx`
- ⬜ Crear `src/hooks/useReducedMotion.ts` (wrapper de `window.matchMedia`)
- ⬜ Actualizar `Header` y `layout.tsx` para consumir `useActiveSection`

### 1.6 — Reorganización de carpetas (estructura propuesta)
- ⬜ Crear `src/components/sections/` y mover Hero, AboutMe, Projects, Contact
- ⬜ Crear `src/components/layout/` y mover Header, Footer, SplashScreen, ScrollToTop
- ⬜ Crear `src/components/ui/` (vacío por ahora — se puebla en fases siguientes)
- ⬜ Crear `src/types/portfolio.ts` y centralizar los tipos `Project`, `SocialLink`, `SkillCategory`
- ⬜ Actualizar todos los imports tras el movimiento

---

## FASE 2 — SISTEMA DE DISEÑO BASE
> **Estado: ⬜ No iniciada. Prerequisito: Fase 1 completada al 100%.**
> Objetivo: implementar la nueva identidad visual (CRT Brutalism) de forma atómica.
> No se toca contenido. Solo estilos, tokens y componentes ui/.
> Estimación: 3–4 sesiones de trabajo.

### 2.1 — Actualizar Tailwind a v4
- ⬜ Instalar Tailwind CSS v4
- ⬜ Migrar configuración de `tailwind.config.ts` a `@import "tailwindcss"` en CSS
- ⬜ Verificar que las clases custom (pulse-glow, blink) siguen funcionando

### 2.2 — Tokens de color y tipografía
- ⬜ Definir todas las CSS custom properties en `globals.css`:
  - `--bg-base`, `--bg-surface`, `--bg-elevated`
  - `--border`, `--border-accent`
  - `--text-primary`, `--text-secondary`
  - `--accent-cyan`, `--accent-magenta`, `--accent-yellow`, `--accent-green`
- ⬜ Crear variante light mode con las mismas variables en `[data-theme="light"]`
- ⬜ Cargar **Space Grotesk** y **JetBrains Mono** con `next/font`
- ⬜ Mapear fuentes a tokens en `globals.css`

### 2.3 — Dark/Light mode
- ⬜ Instalar `next-themes`
- ⬜ Crear `ThemeProvider` en `app/layout.tsx` con `defaultTheme="dark"`
- ⬜ Crear componente `ThemeToggle` en `components/ui/`
- ⬜ Añadir `ThemeToggle` al `Header`
- ⬜ Verificar contraste WCAG AA en ambos modos

### 2.4 — Componentes UI atómicos
- ⬜ Crear `components/ui/Button.tsx` (variantes: primary, secondary, ghost)
- ⬜ Crear `components/ui/Badge.tsx` (variantes: cyan, magenta, yellow, green)
- ⬜ Crear `components/ui/Card.tsx` (con sombra offset brutalist)
- ⬜ Crear `components/ui/SectionTitle.tsx` (h2 con estilo unificado)

### 2.5 — Efectos visuales CSS
- ⬜ Implementar efecto scanlines CRT (pseudoelemento CSS, pointer-events none)
- ⬜ Implementar grid de fondo para Hero
- ⬜ Definir `@keyframes glitch` para el título del Hero
- ⬜ Verificar que todos los efectos respetan `prefers-reduced-motion`

---

## FASE 3 — REDISEÑO DE SECCIONES
> **Estado: ⬜ No iniciada. Prerequisito: Fase 2 completada al 100%.**
> Objetivo: aplicar el nuevo sistema de diseño a cada sección existente.
> Hacerlo sección por sección para evitar regressions.
> Estimación: 4–5 sesiones de trabajo.

### 3.1 — SplashScreen
- ⬜ Añadir auto-dismiss a los 8 segundos
- ⬜ Añadir botón "Skip" visible con `aria-label`
- ⬜ Añadir nombre `MARCOS GIANNINI` y rol encima del botón START
- ⬜ Respetar `prefers-reduced-motion`: skip automático si está activo
- ⬜ Aplicar nuevos tokens de color

#### 3.1.A — Rediseño del botón START (aprobado para diseño)
> El botón START actual funciona pero no convierte. Flota en un vacío negro con un glow básico.
> El objetivo es que el primer frame del portfolio genere la misma anticipación que
> la pantalla de título de un videojuego de los 80. Que no te den ganas de irse — que
> te den ganas de pulsar.
>
> **Implementación: CSS puro + Framer Motion (ya instalado). Zero dependencias nuevas.**

- ⬜ **Fondo — "Arcade Space"**: tres capas apiladas con `position: absolute`
  - Capa 1: starfield estático con `box-shadow` en pseudo-elemento (100+ puntos blancos de 1–2px). Sin canvas, sin JS. Referencia: intro de Star Wars.
  - Capa 2: perspective grid convergente hacia el horizonte. SVG inline o `background` con `linear-gradient` en perspectiva. Referencia: Tron, synthwave floor.
  - Capa 3: scanlines CRT. `repeating-linear-gradient` con opacidad 3–5%. `pointer-events: none`.

- ⬜ **Contexto narrativo alrededor del botón** (disposición vertical centrada):
  - Arriba: `MARCOS GIANNINI` en tipografía display grande — como el título de un juego. Efecto glitch único al cargar (no en loop).
  - Centro: el botón START rediseñado (ver abajo).
  - Abajo: `PRESS START TO CONTINUE` en JetBrains Mono con parpadeo auténtico (ya existe).
  - Esquina inferior: `© 2026 MARCOS.DEV` en mono pequeño, referencia a la pantalla de créditos arcade.

- ⬜ **El botón START en sí**:
  - Shape: rectangular con esquinas apenas redondeadas (4px). Más "físico", menos pill.
  - Decoración: corchetes de HUD sci-fi en las esquinas (`◤ ◥ ◣ ◢`) en CSS puro. No decorativos — comunican "interfaz técnica".
  - Glow base: ya existe (cyan). Mejorar con doble capa: glow exterior difuso + inner shadow cálido.
  - Hover: efecto "carga" — un `@keyframes` de 300ms barre una línea de luz de izquierda a derecha por el botón. Luego el glow se intensifica. Sensación de que el sistema te está reconociendo.
  - Active/Press: micro-flash de pantalla (`brightness(1.5)` en todo el splash, 80ms) + ligero `scale(0.97)`. Retroalimentación física de que algo ha ocurrido.
  - Aberración cromática en hover: `text-shadow` con offset rojo/cian de 2px en el texto "START". Like VHS.

- ⬜ Verificar que todos los efectos respetan `prefers-reduced-motion` (fallback: solo fade)

### 3.2 — Header
- ⬜ Añadir skip-to-content link (primer elemento del DOM)
- ⬜ Mostrar fondo `--bg-base` con efecto transparencia en scroll (CSS scroll-driven)
- ⬜ Integrar `ThemeToggle`
- ⬜ Integrar Language Switcher (placeholder, sin lógica de i18n todavía)
- ⬜ Corregir comportamiento del menú mobile (cerrar al hacer scroll)
- ⬜ Aplicar nuevos tokens de color y tipografía

### 3.3 — Hero
- ⬜ Aplicar nueva estructura de contenido:
  - Línea 1 mono: `> NTT DATA — DIGITAL EXPERIENCE TEAM`
  - Línea 2 display: `MARCOS GIANNINI` con efecto glitch al cargar
  - Línea 3: `Frontend Engineer`
  - Línea 4: frase de propuesta de valor
  - CTAs: `[ Ver proyectos ]` + `[ Contratar ]`
- ⬜ Eliminar foto del Hero (pasa a About)
- ⬜ Añadir grid CRT de fondo
- ⬜ Añadir scroll indicator animado
- ⬜ Respetar `prefers-reduced-motion`

### 3.4 — About
- ⬜ Añadir "chips" de datos rápidos (9 años, NTT DATA, Open Source)
- ⬜ Actualizar bio con contenido real
- ⬜ Añadir categoría `"En producción"` en skills grid
- ⬜ Diferenciar colores de borde por categoría de skill
- ⬜ Aplicar nuevos tokens de color

### 3.5 — Projects
- ⬜ Reordenar proyectos: Super Teacher → Lenoy → Redux Showcase → Quick Mock
- ⬜ Añadir badge de estado (`EN PRODUCCIÓN`, `EN DESARROLLO`, `OPEN SOURCE`)
- ⬜ Añadir campo `repo` visible en tarjetas (icono GitHub + link)
- ⬜ Corregir animaciones: usar `whileInView` en lugar de `animate` en las tarjetas
- ⬜ Añadir botón "Ver todos en GitHub →" al final de la sección
- ⬜ Aplicar componente `Card` del design system

### 3.6 — Contact
- ⬜ Unificar formulario mobile/desktop (eliminar duplicado)
- ⬜ Añadir campo `tipo_proyecto` (select: Proyecto web / Colaboración / Consulta)
- ⬜ Añadir link a Cal.com para reservar llamada
- ⬜ Aplicar nuevos tokens de color

### 3.7 — Footer
- ⬜ Añadir año dinámico (`new Date().getFullYear()`)
- ⬜ Verificar que no requiere cambios de fondo (ya es sólido y semántico)

---

## FASE 4 — FORMULARIO DE CONTACTO (sin Formspree)
> **Estado: ⬜ No iniciada. Prerequisito: Fase 1 completada (requiere App Router para API Routes).**
> Objetivo: eliminar la dependencia de Formspree y el ID expuesto en código.
> Estimación: 1 sesión de trabajo.

- ⬜ Instalar `resend` (SDK)
- ⬜ Crear `src/app/api/contact/route.ts` (POST handler)
- ⬜ Añadir validación del body con `zod`
- ⬜ Añadir rate limiting básico por IP
- ⬜ Configurar `RESEND_API_KEY` en `.env.local` y en Vercel Environment Variables
- ⬜ Desinstalar `@formspree/react` del proyecto
- ⬜ Actualizar el componente `Contact` para apuntar a la API Route propia
- ⬜ Verificar que la API key nunca llega al cliente

---

## FASE 5 — SECCIÓN WEBSITE PACKS
> **Estado: ⬜ No iniciada. Prerequisito: Fases 1 y 3 completadas.**
> Objetivo: añadir la sección de packs de servicios web.
> Es la feature de mayor impacto para la dimensión de negocio.
> Estimación: 2–3 sesiones de trabajo.

### 5.1 — Datos
- ⬜ Crear `src/types/packs.ts` con tipos `Pack`, `PackFeature`, `PackTier`
- ⬜ Crear `src/data/packs.ts` con los 3 packs + el pack de mantenimiento

### 5.2 — Componentes
- ⬜ Crear `components/sections/Packs.tsx` (sección resumen en página principal)
- ⬜ Crear `components/ui/PackCard.tsx` (tarjeta individual de pack)

### 5.3 — Ruta dedicada
- ⬜ Crear `src/app/packs/page.tsx` con metadata SEO propia
- ⬜ Implementar la vista detallada de los 3 packs
- ⬜ Añadir CTAs de cada pack (formulario contacto / Cal.com)

### 5.4 — Integración en página principal
- ⬜ Añadir sección `<Packs />` en `app/page.tsx` (entre Projects y Contact)
- ⬜ Añadir `"Servicios"` al menú de navegación del Header con link a `#packs`

---

## FASE 6 — INTERNACIONALIZACIÓN (i18n)
> **Estado: ⬜ No iniciada. Prerequisito: Fases 0.6, 1 y 3 completadas.**
> Objetivo: soporte completo para ES, EN, IT.
> Esta fase es la más transversal — requiere que TODO el texto esté centralizado en
> `portfolioData.ts` (preparado en Fase 0.6) antes de empezar.
> Estimación: 3–4 sesiones de trabajo.

### 6.1 — Setup de next-intl
- ⬜ Instalar `next-intl`
- ⬜ Crear `src/lib/i18n/routing.ts` (locales: `['es', 'en', 'it']`, defaultLocale: `'es'`)
- ⬜ Crear `src/lib/i18n/request.ts`
- ⬜ Crear el middleware `src/middleware.ts` para routing por locale
- ⬜ Mover `src/app/` a `src/app/[locale]/`

### 6.2 — Archivos de traducción
- ⬜ Crear `src/locales/es.json` con todos los textos en español
- ⬜ Crear `src/locales/en.json` con todos los textos en inglés
- ⬜ Crear `src/locales/it.json` con todos los textos en italiano
- ⬜ Garantizar que todos los archivos tienen exactamente las mismas claves (sin missing keys)

### 6.3 — Migración de componentes
- ⬜ Reemplazar todos los strings hardcodeados en componentes por `useTranslations()`
- ⬜ Migrar `portfolioData.ts`: separar datos estáticos (URLs, repos) de textos traducibles
- ⬜ Verificar que `packs.ts` también está internacionalizado

### 6.4 — Language Switcher
- ⬜ Activar el Language Switcher del Header (conectar con next-intl `useRouter`)
- ⬜ Verificar que el switcher conserva el scroll position al cambiar de idioma

### 6.5 — SEO multiidioma
- ⬜ Añadir `hreflang` alternates en `generateMetadata` de cada ruta
- ⬜ Actualizar `lang` del `<html>` para que sea dinámico por locale

---

## FASE 7 — ACCESIBILIDAD Y RENDIMIENTO
> **Estado: ⬜ No iniciada. Prerequisito: Fases 3, 4 y 5 completadas.**
> Objetivo: pasar auditoría Lighthouse ≥ 90 en las 4 categorías.
> Estimación: 1–2 sesiones de trabajo.

### 7.1 — Accesibilidad
- ⬜ Auditar con axe DevTools (extensión de navegador)
- ⬜ Verificar navegación completa por teclado (Tab, Enter, Escape)
- ⬜ Verificar con lector de pantalla (NVDA o VoiceOver)
- ⬜ Corregir todos los issues encontrados

### 7.2 — Rendimiento
- ⬜ Añadir `placeholder="blur"` a todas las `<Image>` con `blurDataURL`
- ⬜ Verificar que las fuentes no generan CLS (layout shift)
- ⬜ Auditar bundle size con `@next/bundle-analyzer`
- ⬜ Activar `@vercel/analytics` en `layout.tsx`

### 7.3 — OG Image
- ⬜ Crear `src/app/opengraph-image.tsx` con `@vercel/og`
- ⬜ Verificar que la OG image se muestra correctamente en LinkedIn y Twitter/X

---

## FASE 8 — PRODUCCIÓN Y LANZAMIENTO
> **Estado: ⬜ No iniciada. Prerequisito: Fases 6 y 7 completadas.**
> Objetivo: deploy en producción con dominio propio, todo verificado.
> Estimación: 1 sesión.

- ⬜ Configurar dominio personalizado en Vercel
- ⬜ Configurar variables de entorno en Vercel (RESEND_API_KEY, etc.)
- ⬜ Hacer smoke testing en producción (formulario, todos los links, todas las rutas)
- ⬜ Verificar Lighthouse en producción (no en dev)
- ⬜ Configurar Cal.com con disponibilidad real
- ⬜ Anunciar en LinkedIn con link al portfolio

---

## BACKLOG (futuras iteraciones, no bloqueantes)

- ⬜ Blog técnico (ruta `app/[locale]/blog/`) con MDX
- ⬜ Integración de Stripe para pago directo de packs
- ⬜ Panel de administración básico (gestión de leads desde formulario)
- ⬜ Cursor personalizado en desktop
- ⬜ Animación de "game over" si el usuario intenta salir de la página
- ⬜ Modo "Easter Egg" activable con Konami Code
- ⬜ Integración con la API de GitHub para mostrar actividad reciente en tiempo real
- ⬜ Testimonios / social proof de clientes o compañeros
- ⬜ CV descargable generado dinámicamente con `@react-pdf/renderer`

---

## NOTAS DE PROCESO

- Cada fase se aprueba antes de implementarse.
- Al completar un paso, se marca como ✅ en este documento.
- Si surge un bloqueante, se documenta aquí con ❌ y la razón.
- El ROADMAP se actualiza al inicio y al cierre de cada sesión de trabajo.
- **Ninguna fase posterior puede iniciarse si la anterior tiene pasos ⬜ no decididos.**

### Reglas de verificación humana

- **Marcos ejecuta `npm run dev` ÚNICAMENTE cuando la IA lo indique de forma explícita.**
- La IA es responsable de decidir si la verificación es visual, de consola, o ambas.
- Antes de cerrar cada sub-fase, la IA debe proporcionar:
  1. El comando exacto a ejecutar.
  2. La URL exacta que abrir en el navegador.
  3. Una lista clara de lo que debe verse.
  4. Una lista de lo que NO debe ocurrir.
- La IA se detiene hasta recibir confirmación de Marcos de que la verificación fue exitosa.
- Si Marcos detecta algo inesperado, describe el síntoma y la IA analiza antes de continuar.

---

*Mantenido por: Marcos Giannini + GitHub Copilot*

# ROADMAP — Portfolio de Marcos Giannini
> Última actualización: 2026-05-08 — Packs + funnel optimizado
> Estado general: 🟢 Funnel completo implementado (Hero → Calendly)

## CONTEXTO DEL PROYECTO

Portfolio personal de **Marcos Giannini**, Frontend Engineer en el equipo Digital Experience de **NTT DATA**.

Objetivos del portfolio:
1. Comunicar seniority de forma visual y técnicamente ejemplar.
2. Mostrar proyectos propios reales y en evolución (Super Teacher, Lenoy Editorial, este Portfolio e Ines Game).
3. Generar leads de negocio a través de la sección de Website Packs.
4. Ser memorable, accesible y técnicamente impecable.

Audiencia principal: reclutadores tech, CTOs, potenciales clientes freelance.
Idioma por defecto: **español**. Soporte futuro: inglés, italiano.

### Decisión canónica — Proyectos destacados

La sección Proyectos debe centrarse en proyectos propios con narrativa de producto:

1. **Super Teacher** — SaaS educativo con Next.js, Supabase y Stripe.
2. **Lenoy Editorial** — sitio web para editorial independiente.
3. **Portfolio Marcos Giannini** — este portfolio como producto vivo en evolución constante.
4. **Ines Game** — videojuego 2D en Godot 4, a largo plazo, con visión comercial y posible publicación futura en Steam.

Los proyectos antiguos de showcase o colaboración pueden volver en una vista secundaria futura, pero no son el foco principal de la sección destacada.

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
> **Estado: ✅ COMPLETADA.**
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

### 0.6 — Preparación de estructura de datos para i18n futuro ✅
> ✅ **Completada — 2026-05-06. Build/lint verificados: OK. Verificación manual: OK.**
> Nota: todos los textos editables visibles del portfolio han sido centralizados en `portfolioData.ts` para preparar la Fase 6.
- ✅ Mover la bio hardcodeada en `AboutMe/index.tsx` a `portfolioData.ts`
- ✅ Mover `skillCategories` hardcodeado en `AboutMe/index.tsx` a `portfolioData.ts`
- ✅ Verificar que ningún componente renderiza texto que no venga de `portfolioData.ts` o de props
- ✅ Asegurarse de que **todos los textos editables** del portfolio tienen un único punto de origen
- ✅ Añadir comentario en `portfolioData.ts` marcando los campos que serán traducibles en Fase 6

### 0.7 — Mensaje profesional y propuesta de valor
> ✅ **Completada — textos aprobados el 2026-05-05.**
> Los textos siguientes son el contenido canónico del portfolio. Se volcará a `portfolioData.ts` en la sub-fase 0.5.

- ✅ **Frase de propuesta de valor (Hero):**
  > *"Construyo productos digitales reales. Del diseño al deploy."*

- ✅ **Bio aprobada (sección About):**
  > Frontend Engineer en el equipo de Digital Experience de NTT DATA, con más de 8 años construyendo interfaces y productos web. Trabajo en el ciclo completo: desde la arquitectura de componentes hasta el deploy en producción.
  >
  > En paralelo, desarrollo proyectos propios: **Super Teacher**, una plataforma SaaS de aprendizaje con Next.js, Supabase y Stripe; **Lenoy Editorial**, el sitio web de una editorial independiente; este **portfolio**, que evoluciona como producto vivo; e **Ines Game**, un videojuego 2D en Godot con visión comercial a largo plazo.
  >
  > Me interesa el cruce entre diseño de producto y ingeniería de frontend: código que funciona, que escala y que alguien sabe mantener.

- ✅ **Título principal:** `"Frontend Engineer"` (unificado, sin mezcla de idiomas)
- ✅ **Orden de proyectos:** Super Teacher → Lenoy Editorial → Portfolio Marcos Giannini → Ines Game
- ✅ Textos pendientes de volcar a `portfolioData.ts` (se ejecuta en sub-fase 0.5)

### 0.8 — Cargar las fuentes correctamente ✅
> ✅ **Completada — 2026-05-06. Build/lint verificados: OK. Verificación manual: OK.**
- ✅ Implementar `next/font` en `src/pages/_app.tsx` para Inter y Space Grotesk
- ✅ Asegurarse de que las variables `--font-inter` y `--font-heading` se inyectan en `<body>`
- ✅ Reemplazar Montserrat por Space Grotesk en `tailwind.config.ts` (nueva tipografía propuesta)

---

## FASE 1 — ARQUITECTURA BASE (App Router)
> **Estado: ✅ COMPLETADA. Prerequisito cumplido: Fase 0 completada al 100%.**
> Objetivo: migrar de Pages Router a App Router sin cambiar nada visual.
> El portfolio debe verse exactamente igual al finalizar esta fase.
> Estimación: 2–3 sesiones de trabajo.

### 1.1 — Preparación de la migración ✅
> ✅ **Completada — 2026-05-06. Build/lint verificados: OK. Verificación manual: OK.**
> Rama activa: `chore/1.1-app-router-prep`.
- ✅ Crear la estructura de carpetas `src/app/` en paralelo a `src/pages/`
- ✅ Crear `src/app/layout.tsx` (root layout: `<html>`, `<body>`, providers)
- ✅ Crear `src/app/page.tsx` (página principal — equivalente a `pages/index.tsx`)
- ✅ Crear `src/app/not-found.tsx`
- ✅ Verificación manual aprobada por Marcos: `OK 1.1`

#### ✅ VERIFICACIÓN MANUAL — 1.1

> **Resultado:** OK manual confirmado por Marcos el 2026-05-06.
> **Comando exacto:** `npm run dev`
> **URL a abrir:** la URL indicada por Next.js en consola, normalmente `http://localhost:3000`.
> **Qué se verificó:**
> - La SplashScreen aparece al cargar.
> - Al pulsar START, cargan Header, Hero, About, Projects, Contact, Footer y ScrollToTop.
> - El portfolio se ve visualmente igual que antes de preparar App Router.
> - La navegación por secciones sigue actualizando el estado activo del Header.
> - La consola del navegador no muestra errores rojos.
> **Qué no ocurrió:**
> - Pantalla en blanco.
> - Error de hidratación de React.
> - Error "Module not found".
> - Pérdida de estilos o fuentes.

### 1.2 — Migración de componentes a RSC donde corresponda ✅
> ✅ **Completada — 2026-05-06. Build/lint verificados: OK.**
- ✅ Identificar qué componentes requieren `"use client"` por hooks, eventos, APIs de navegador o `framer-motion`
  - Requieren client: `app/page.tsx`, `Header`, `SplashScreen`, `ScrollToTop`, `Contact`, `Hero`, `ProjectPortfolio`, `AboutMe`
  - Pueden ser Server Components ahora mismo: `Footer`, `not-found`
- ✅ Añadir directiva `"use client"` a los componentes que corresponden
- ✅ Quitar `"use client"` de `app/not-found.tsx`, porque no usa hooks ni eventos de cliente
- ✅ Validar que no hay errores de hidratación en build

#### ✅ VERIFICACIÓN MANUAL — 1.2

> **Cuándo verificar:** inmediatamente, antes de cerrar la sesión.
> **Comando exacto:** `npm run dev`
> **URL a abrir:** la URL indicada por Next.js en consola, normalmente `http://localhost:3000`.
> **Qué debes ver:**
> - La SplashScreen aparece al cargar.
> - Al pulsar START, cargan Header, Hero, About, Projects, Contact, Footer y ScrollToTop.
> - Las animaciones de Hero, About y Projects siguen funcionando igual que antes.
> - El menú mobile abre/cierra correctamente.
> - El formulario de contacto sigue renderizando sus campos.
> - La consola del navegador no muestra errores rojos de hidratación.
> **Qué NO debe pasar:**
> - Pantalla en blanco.
> - Error de hidratación de React.
> - Error sobre hooks usados en Server Components.
> - Pérdida de estilos o animaciones.
> **Si algo falla:** pantallazo de consola del navegador y parar.

### 1.3 — Metadata API ✅
> ✅ **Completada — 2026-05-06. Build/lint verificados: OK.**
- ✅ Reemplazar la responsabilidad de `<Head>`/SEO por `export const metadata` en `app/layout.tsx`
- ✅ Eliminar el componente `Seo/index.tsx` (reemplazado por Metadata API)
- ✅ Configurar metadata básica: title, description, canonical, Open Graph, Twitter card y favicon
- ✅ Configurar OG image estática básica en `public/og-image.jpg`

#### ✅ VERIFICACIÓN MANUAL — 1.3

> **Cuándo verificar:** inmediatamente, antes de cerrar la sesión.
> **Comando exacto:** `npm run dev`
> **URL a abrir:** la URL indicada por Next.js en consola, normalmente `http://localhost:3000`.
> **Qué debes ver:**
> - El portfolio carga igual que antes.
> - La pestaña del navegador muestra `Marcos Giannini | Desarrollador Frontend`.
> - En DevTools > Elements, dentro de `<head>`, aparecen meta tags de description, Open Graph y Twitter.
> - No hay referencias visibles a `John Doe` ni `yourportfolio.com`.
> **Qué NO debe pasar:**
> - Pantalla en blanco.
> - Error `next/head` en App Router.
> - Error de metadata o de ruta `/og-image.jpg`.
> **Si algo falla:** pantallazo de consola del navegador y parar.

### 1.4 — Eliminar Pages Router ✅
> ✅ **Completada — 2026-05-06. Build/lint verificados: OK.**
- ✅ Eliminar `src/pages/` una vez que App Router funciona correctamente
- ✅ Eliminar la API demo `src/pages/api/hello.ts`
- ✅ Eliminar fuentes antiguas de `src/pages/fonts/` (las fuentes activas cargan desde `app/layout.tsx` con `next/font`)
- ✅ Verificar que no quedan usos de `next/head`, `next/app` ni `next/document`
- ✅ Verificar `next.config.ts` (no requiere cambios para App Router)

#### ✅ VERIFICACIÓN MANUAL — 1.4

> **Cuándo verificar:** inmediatamente, antes de cerrar la sesión.
> **Comando exacto:** `npm run dev`
> **URL a abrir:** la URL indicada por Next.js en consola, normalmente `http://localhost:3000`.
> **Qué debes ver:**
> - La SplashScreen aparece al cargar.
> - Al pulsar START, cargan Header, Hero, About, Projects, Contact, Footer y ScrollToTop.
> - La ruta `/` funciona desde App Router.
> - La ruta inexistente, por ejemplo `/no-existe`, muestra la página 404 personalizada.
> - El portfolio mantiene estilos y fuentes.
> **Qué NO debe pasar:**
> - Pantalla en blanco.
> - Error `pages/` o `next/document`.
> - Error de fuentes.
> - Error de hidratación.
> **Si algo falla:** pantallazo de consola del navegador y parar.

### 1.5 — Extracción de lógica a hooks ✅
> ✅ **Completada — 2026-05-06. Build/lint verificados: OK.**
- ✅ Crear `src/hooks/useActiveSection.ts` con el `IntersectionObserver` extraído de `app/page.tsx`
- ✅ Crear `src/hooks/useReducedMotion.ts` (wrapper de `window.matchMedia`)
- ✅ Actualizar `app/page.tsx` para consumir `useActiveSection`
- ✅ Usar `useReducedMotion` en el fade principal tras la SplashScreen
- ✅ Mantener `Header` como componente presentacional que recibe `activeSection` por props
- ✅ No mover lógica a `layout.tsx`, porque el root layout es Server Component y no debe usar hooks de cliente

#### ✅ VERIFICACIÓN MANUAL — 1.5

> **Cuándo verificar:** inmediatamente, antes de cerrar la sesión.
> **Comando exacto:** `npm run dev`
> **URL a abrir:** la URL indicada por Next.js en consola, normalmente `http://localhost:3000`.
> **Qué debes ver:**
> - La SplashScreen aparece al cargar.
> - Al pulsar START, el portfolio carga igual que antes.
> - Al hacer scroll, el item activo del Header cambia entre Inicio, Sobre Mí, Proyectos y Contacto.
> - El menú mobile abre/cierra correctamente.
> - No hay errores rojos en consola.
> **Qué NO debe pasar:**
> - Header sin estado activo.
> - Error de `IntersectionObserver`.
> - Error de `window is not defined`.
> - Pantalla en blanco o error de hidratación.
> **Si algo falla:** pantallazo de consola del navegador y parar.

### 1.6 — Reorganización de carpetas (estructura propuesta) ✅
> ✅ **Completada — 2026-05-07. Build/lint verificados: OK. Verificación manual: OK.**
- ✅ Crear `src/components/sections/` y mover Hero, AboutMe, Projects, Contact
- ✅ Crear `src/components/layout/` y mover Header, Footer, SplashScreen, ScrollToTop
- ✅ Crear `src/components/ui/` (vacío por ahora — se puebla en fases siguientes)
- ✅ Crear `src/types/portfolio.ts` y centralizar los tipos `Project`, `SocialLink`, `SkillCategory`
- ✅ Actualizar todos los imports tras el movimiento

#### ✅ VERIFICACIÓN MANUAL — 1.6

> **Resultado:** OK manual confirmado por Marcos el 2026-05-07.
> **Cuándo verificar:** inmediatamente, antes de marcar la sub-fase como completada.
> **Comando exacto:** `npm run dev`
> **URL a abrir:** la URL indicada por Next.js en consola, normalmente `http://localhost:3000`.
> **Qué debes ver:**
> - La SplashScreen aparece al cargar.
> - Al pulsar START, cargan Header, Hero, About, Projects, Contact, Footer y ScrollToTop.
> - El portfolio se ve visualmente igual que antes de la reorganización.
> - Al hacer scroll, el item activo del Header cambia correctamente.
> - El menú mobile abre y cierra correctamente.
> - La consola del navegador no muestra errores rojos.
> **Qué NO debe pasar:**
> - Pantalla en blanco.
> - Error `Module not found`.
> - Error de hidratación.
> - Pérdida de estilos, fuentes o animaciones.
> **Si algo falla:** pantallazo de consola del navegador y parar.

---

## FASE 2 — SISTEMA DE DISEÑO BASE
> **Estado: 🟡 EN PROGRESO. Prerequisito: Fase 1 completada al 100%.**
> Objetivo: implementar la nueva identidad visual (CRT Brutalism) de forma atómica.
> No se toca contenido. Solo estilos, tokens y componentes ui/.
> Estimación: 3–4 sesiones de trabajo.

### 2.1 — Actualizar Tailwind a v4
> ✅ **Completada — 2026-05-07. Build/lint verificados: OK. Verificación manual: OK tras reinicio/hard refresh.**
- ✅ Instalar Tailwind CSS v4
- ✅ Migrar configuración de `tailwind.config.ts` a `@import "tailwindcss"` en CSS
- ✅ Verificar que las clases custom (pulse-glow, blink) siguen funcionando

#### ✅ VERIFICACIÓN MANUAL — 2.1

> **Resultado:** OK manual confirmado por Marcos el 2026-05-07 tras reiniciar el servidor dev y hacer hard refresh.
> **Comando exacto:** `npm run dev`
> **URL a abrir:** la URL indicada por Next.js en consola, normalmente `http://localhost:3000`.
> **Qué se verificó:**
> - La SplashScreen aparece al cargar.
> - El botón START mantiene su glow animado.
> - El texto `PRESS START TO CONTINUE` sigue parpadeando.
> - Al pulsar START, cargan Header, Hero, About, Projects, Contact, Footer y ScrollToTop.
> - Las fuentes y estilos generales se ven visualmente igual que antes de actualizar Tailwind.
> - La consola del navegador no muestra errores rojos.
> **Qué no ocurrió:**
> - Pantalla sin estilos.
> - Error de CSS, PostCSS o Tailwind en consola.
> - Pérdida de la animación `pulse-glow` o `blink`.
> - Cambio visual evidente en tipografías, layout o colores.

### 2.1.B — Definición de identidad y posicionamiento
> ✅ **Completada — integrada en el pre-flight 2.2 y en los tokens aprobados.**
> Objetivo: alinear diseño, negocio, posicionamiento y narrativa visual antes de definir tokens.
> No modifica código de app.
- ✅ Definir posicionamiento del portfolio como producto de negocio
- ✅ Definir público objetivo y propuesta de valor
- ✅ Definir estructura de packs de servicio (3 niveles)
- ✅ Traducir posicionamiento a dirección visual base

✅ Esta sub-fase quedó resuelta antes de cerrar tokens (2.2).

### Pre-flight 2.2 — Revisión final + plan técnico
> ✅ **Completada — 2026-05-07. No modifica código de app.**
- ✅ Revisar diff pendiente de 2.1: migración Tailwind v4, PostCSS, `globals.css`, `layout.tsx`, docs y eliminación de `tailwind.config.ts`.
- ✅ Confirmar que no hay hallazgos bloqueantes antes de 2.2.
- ✅ Dejar definido el plan técnico de tokens para implementar 2.2 sin decisiones abiertas.

#### Plan técnico aprobado para 2.2

> Objetivo: definir tokens visuales alineados con freelance selectivo, no agencia, captación limitada y estética retrofuturista profesional.
> Restricción: preparar el sistema visual sin rediseñar secciones ni introducir contenido comercial todavía.

- `globals.css` será la fuente de verdad de tokens globales: colores semánticos, fuentes, fondos, bordes y acentos.
- Los tokens se definirán como CSS custom properties en `:root`; la variante light se preparará en `[data-theme="light"]`, aunque el toggle real queda para 2.3.
- `@theme` de Tailwind v4 mapeará los tokens principales para poder usar clases `font-sans`, `font-heading`, `font-mono` y colores tokenizados en fases posteriores.
- `app/layout.tsx` cargará `Inter`, `Space_Grotesk` y `JetBrains_Mono` con `next/font`; no se introducen fuentes externas por CSS manual.
- No se rediseñan secciones ni componentes en 2.2: Header, Hero, About, Projects, Contact, Footer y SplashScreen deben seguir viéndose funcionalmente igual.
- No se instala `next-themes` en 2.2; eso pertenece a 2.3.
- Criterio visual: base oscura CRT Brutalism preparada por tokens, pero sin aplicar todavía el rediseño completo de Fase 3.

#### Tokens base propuestos para 2.2

- Fondos: `--bg-base`, `--bg-surface`, `--bg-elevated`.
- Bordes: `--border`, `--border-accent`.
- Texto: `--text-primary`, `--text-secondary`, `--text-muted`.
- Acentos: `--accent-cyan`, `--accent-magenta`, `--accent-yellow`, `--accent-green`.
- Fuentes: `--font-sans`, `--font-heading`, `--font-mono`.
- Sombras/glow base: `--shadow-brutal`, `--glow-cyan`, `--glow-magenta`.

#### Valores visuales aprobados antes de implementar 2.2

> Decisión: el tema oscuro será el tema visual principal. El tema light se prepara como variante técnica para 2.3, no como rediseño final.

| Token | Dark default | Light variant | Uso previsto |
|---|---:|---:|---|
| `--bg-base` | `#050608` | `#F7F8FA` | Fondo global de la página |
| `--bg-surface` | `#10131A` | `#FFFFFF` | Superficies principales y secciones |
| `--bg-elevated` | `#181B24` | `#EEF1F6` | Cards, formularios y bloques elevados |
| `--border` | `#F8FAFC` | `#07080D` | Bordes brutalistas principales |
| `--border-accent` | `#00E5FF` | `#008EA3` | Bordes interactivos o de énfasis |
| `--text-primary` | `#F8FAFC` | `#08090F` | Texto principal |
| `--text-secondary` | `#B7C0D8` | `#3F4658` | Texto descriptivo |
| `--text-muted` | `#7E879E` | `#6B7280` | Texto auxiliar y metadatos |
| `--accent-cyan` | `#00E5FF` | `#008EA3` | Acción principal, foco, glow CRT |
| `--accent-magenta` | `#FF3DF2` | `#C026D3` | Contrapunto visual, highlights |
| `--accent-yellow` | `#FFE45E` | `#B77900` | Avisos, energía arcade, detalles |
| `--accent-green` | `#45FF8A` | `#15803D` | Estados positivos y confirmaciones |
| `--shadow-brutal` | `6px 6px 0 #000000` | `6px 6px 0 #07080D` | Sombra offset brutalista |
| `--glow-cyan` | `0 0 24px rgba(0, 229, 255, 0.55)` | `0 0 18px rgba(0, 142, 163, 0.28)` | Glow principal |
| `--glow-magenta` | `0 0 24px rgba(255, 61, 242, 0.45)` | `0 0 18px rgba(192, 38, 211, 0.25)` | Glow secundario |

#### Criterio de uso de color

- Cian será el acento primario para acciones, foco y elementos CRT.
- Magenta será acento secundario, usado con moderación para evitar una UI dominada por púrpuras.
- Amarillo queda reservado para energía arcade, avisos y pequeños elementos decorativos.
- Verde queda reservado para estados positivos, nunca como color principal de marca.
- Los fondos oscuros deben apoyarse en contraste fuerte y bordes claros para mantener el lenguaje brutalista.
- En 2.2 solo se crean y mapean tokens; reemplazar clases visuales por tokens se hará de forma gradual en 2.3, 2.4 y Fase 3.

### 2.2 — Tokens de color y tipografía
> ✅ **Completada — tokens definidos en `globals.css` y fuentes configuradas en `layout`.**
- ✅ Definir todas las CSS custom properties en `globals.css`:
  - `--bg-base`, `--bg-surface`, `--bg-elevated`
  - `--border`, `--border-accent`
  - `--text-primary`, `--text-secondary`, `--text-muted`
  - `--accent-cyan`, `--accent-magenta`, `--accent-yellow`, `--accent-green`
  - `--shadow-brutal`, `--glow-cyan`, `--glow-magenta`
- ✅ Crear variante light mode con las mismas variables en `[data-theme="light"]`
- ✅ Cargar **Space Grotesk** y **JetBrains Mono** con `next/font`
- ✅ Mapear fuentes a tokens en `globals.css`
- ✅ Mantener el cambio visual al mínimo: preparar tokens sin rediseñar secciones

### 2.3 — Dark/Light mode
- ⬜ Instalar `next-themes`
- ⬜ Crear `ThemeProvider` en `app/layout.tsx` con `defaultTheme="dark"`
- ⬜ Crear componente `ThemeToggle` en `components/ui/`
- ⬜ Añadir `ThemeToggle` al `Header`
- ⬜ Verificar contraste WCAG AA en ambos modos

### 2.4 — Componentes UI atómicos
- ✅ Crear `components/ui/Button.tsx` (primary, secondary, ghost — tokens OK, accesible, soporta link y button)
- ✅ Crear `components/ui/Badge.tsx` (variantes cyan/magenta/yellow/green, basado en tokens, fondo con color-mix, sin hardcoded colors)
- ⬜ Crear `components/ui/Card.tsx` (con sombra offset brutalist)
- ⬜ Crear `components/ui/SectionTitle.tsx` (h2 con estilo unificado)

> ✅ Button implementado siguiendo sistema de tokens (2.2), con variantes primary/secondary/ghost, tamaños y soporte dual (button/link). Preparado para uso en Hero, Packs y Contact.
> ✅ Badge implementado siguiendo sistema de tokens (2.2), con variantes cyan/magenta/yellow/green y fondo sutil mediante `color-mix`. Preparado para estados de Projects, Packs y futuras etiquetas.

### 2.5 — Efectos visuales CSS
- ⬜ Implementar efecto scanlines CRT (pseudoelemento CSS, pointer-events none)
- ⬜ Implementar grid de fondo para Hero
- ⬜ Definir `@keyframes glitch` para el título del Hero
- ⬜ Verificar que todos los efectos respetan `prefers-reduced-motion`

---

## FASE 3 — REDISEÑO DE SECCIONES
> **Estado: 🟢 Funcionalmente completa (pendiente mejoras visuales no críticas).**
> Objetivo: aplicar el nuevo sistema de diseño a cada sección existente.
> Hacerlo sección por sección para evitar regressions.
> Estimación: 4–5 sesiones de trabajo.
>
> ✅ Funnel de captación completo:
> - Hero con CTA de entrada
> - Projects como validación
> - Packs como decisión económica
> - Contact como punto de acción
> - Calendly como conversión directa

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
- ⬜ Añadir `"Servicios"` al menú de navegación del Header con link a `#packs`
- ⬜ Corregir comportamiento del menú mobile (cerrar al hacer scroll)
- ⬜ Aplicar nuevos tokens de color y tipografía

### 3.3 — Hero
- ⬜ Aplicar nueva estructura de contenido:
  - Línea 1 mono: `> NTT DATA — DIGITAL EXPERIENCE TEAM`
  - Línea 2 display: `MARCOS GIANNINI` con efecto glitch al cargar
  - Línea 3: `Frontend Engineer`
  - Línea 4: frase de propuesta de valor
  - CTAs: `[ Ver proyectos ]` + `[ Iniciar proyecto ]`
- ⬜ Eliminar foto del Hero (pasa a About)
- ⬜ Añadir grid CRT de fondo
- ⬜ Añadir scroll indicator animado
- ⬜ Respetar `prefers-reduced-motion`

### 3.4 — About
> ✅ **Completada — 2026-05-07. Build/lint verificados: OK. Verificación manual: OK Marcos.**
- ✅ Dividir About en bloques claros: intro, bio, datos rápidos y skills
- ✅ Añadir chips de datos rápidos: `8+ años experiencia`, `NTT DATA`, `SaaS builder`, `Freelance selectivo`
- ✅ Mantener bio y skills desde `portfolioData`
- ✅ Mejorar jerarquía visual de bio y skills grid
- ✅ Aplicar tokens existentes con estética CRT / brutalist coherente con Splash y Hero

### 3.5 — Projects
#### 3.5.A — ProjectCard system module style
> ✅ **Completada — 2026-05-07. Build/lint verificados: OK. Verificación manual: OK Marcos.**
- ✅ Añadir línea técnica `> PROJECT / SYSTEM MODULE`
- ✅ Separar header, descripción, stack y acciones con divisiones visuales
- ✅ Convertir stack a formato técnico `/ NEXTJS / TYPESCRIPT / ...`
- ✅ Cambiar acciones a `[ View Project ]` y `[ Open Repo ]`
- ✅ Mantener layout, responsive y datos existentes

#### 3.5.B — Jerarquía de proyectos y roles
> ✅ **Completada — 2026-05-07. Build/lint verificados: OK. Verificación manual: OK Marcos.**
- ✅ Asignar roles por título sin modificar `portfolioData`
- ✅ Renderizar `Ines Game` como proyecto hero destacado arriba
- ✅ Renderizar `Super Teacher` como proyecto primary / production
- ✅ Mantener Lenoy Editorial y Portfolio como support projects
- ✅ Añadir variante `hero | primary | secondary` en `ProjectCard`
- ✅ Mantener responsive y ancla compatible `#projects`

#### 3.5.C — Micro-interacciones orientadas a conversión
> ✅ **Completada — 2026-05-07. Build/lint verificados: OK. Verificación manual: OK Marcos.**
- ✅ Añadir hover sutil en ProjectCard con elevación y glow
- ✅ Añadir refuerzo de color en título por variante
- ✅ Añadir feedback de hover/active en acciones de Projects
- ✅ Mantener interacciones en CSS, sin animaciones JS nuevas
- ✅ Respetar `prefers-reduced-motion` evitando transformaciones

- ⬜ Reordenar proyectos destacados: Super Teacher → Lenoy Editorial → Portfolio Marcos Giannini → Ines Game
- ⬜ Añadir badge de estado (`EN PRODUCCIÓN`, `EN DESARROLLO`, `OPEN SOURCE`)
- ⬜ Añadir campo `repo` visible en tarjetas (icono GitHub + link)
- ⬜ Corregir animaciones: usar `whileInView` en lugar de `animate` en las tarjetas
- ⬜ Añadir botón "Ver todos en GitHub →" al final de la sección
- ⬜ Aplicar componente `Card` del design system
- ⬜ Diseñar una arquitectura visual más memorable para mostrar proyectos futuros: explorar formato retro-moderno tipo TV ochentera, consola arcade, canal selector o gabinete interactivo.
- ⬜ Definir cómo escalar la sección cuando haya más proyectos: destacados visibles, proyectos archivados/secundarios y enlace a GitHub sin saturar la primera pantalla.

### 3.6 — Contact
> ✅ **Completada — 2026-05-07. Build/lint verificados: OK. Verificación manual: OK Marcos.**
- ✅ Unificar formulario mobile/desktop en un único formulario responsive
- ✅ Añadir campo `tipo_proyecto` (Proyecto web / Colaboración / Consulta)
- ✅ Integrar Calendly funcional: `https://calendly.com/marcosgianninidev`
- ✅ Optimizar CTA de conversión a `"Agendar sesión"`
- ✅ Alinear copy a captación profesional
- ✅ Aplicar tokens existentes y estética CRT / brutalist coherente con Hero, About y Projects

### 3.7 — Footer
- ⬜ Añadir año dinámico (`new Date().getFullYear()`)
- ⬜ Verificar que no requiere cambios de fondo (ya es sólido y semántico)

### 3.8 — Packs
> ✅ **Completada — 2026-05-08. Build/lint verificados: OK.**
- ✅ Sección Packs implementada entre Projects y Contact
- ✅ 3 packs definidos: Esencial, Profesional (destacado), Signature
- ✅ Precios orientativos añadidos
- ✅ CTA funcional hacia Contact y Calendly
- ✅ Jerarquía visual clara con pack recomendado destacado

### 3.8.B — Optimización de conversión (Packs)
- 🔵 Mejorar copy de CTA (ej: "Solicitar este pack")
- 🔵 Mejorar mensaje de valor en cada pack
- 🔵 Añadir bloques "Ideal para..."
- 🔵 Añadir mensaje de escasez (capacidad limitada)
- 🔵 Alinear CTA con flujo real (Contact / Calendly)

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
> **Estado: ⬜ No iniciada. Prerequisito: Fases 3 y 4 completadas.**
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
- ⬜ Configurar Calendly con disponibilidad real
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
- Después de cada sub-fase completada:
  - Crear commit con mensaje claro y semántico
  - Si hay cambios de código y documentación, usar commits separados:
    - `feat`/`fix`/`chore` → código
    - `docs` → documentación
- Al cerrar sesión, verificar que los cambios importantes quedan commiteados antes de continuar en otra sesión.
- Nunca cerrar una sesión con cambios sin commit.

### Reglas de verificación humana

- **Marcos ejecuta `npm run dev` ÚNICAMENTE cuando la IA lo indique de forma explícita.**
- La IA es responsable de decidir si la verificación es visual, de consola, o ambas.
- Toda sub-fase que implique cambios visuales o de UI debe incluir un bloque de verificación manual obligatoria.
- La implementación NO se considera completada hasta que:
  - Marcos ejecuta `npm run dev`.
  - Marcos abre la URL indicada.
  - Marcos confirma que el comportamiento visual es correcto.
- Antes de cerrar cada sub-fase, la IA debe proporcionar:
  1. El comando exacto a ejecutar.
  2. La URL exacta que abrir en el navegador.
  3. Una lista clara de lo que debe verse.
  4. Una lista de lo que NO debe ocurrir.
- La IA se detiene hasta recibir confirmación de Marcos de que la verificación fue exitosa.
- Si la verificación manual no se confirma, no se puede avanzar a la siguiente sub-fase.
- Si Marcos detecta algo inesperado, describe el síntoma y la IA analiza antes de continuar.

---

*Mantenido por: Marcos Giannini + GitHub Copilot*

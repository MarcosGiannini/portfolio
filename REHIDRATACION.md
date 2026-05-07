# Protocolo de Rehidratación — Portfolio Marcos Giannini

> Usar al inicio de CADA nueva sesión de chat con GitHub Copilot.
> Copia el bloque de abajo y pégalo como primer mensaje del chat.

---

## Por qué existe este protocolo

Cada sesión de chat con un agente IA es independiente — no recuerda la sesión anterior.
Sin rehidratación, el agente puede proponer arquitecturas erróneas, repetir trabajo ya hecho o peor: deshacer cambios que funcionan.

Este protocolo obliga al agente a leer los documentos canónicos antes de tocar nada.

---

## Bloque a copiar y pegar

```
NUEVA SESIÓN — PORTFOLIO (REHIDRATACIÓN TOTAL DE CONTEXTO)

El chat anterior quedó inválido por límite interno del agente.
El proyecto NO está roto. El estado está documentado.

PROTOCOLO OBLIGATORIO (NO SALTARSE NADA):

PASO 1
Lee COMPLETAMENTE el archivo:
→ AI_WORKFLOW.md
(Reglas permanentes de colaboración: flujo, restricciones, formato de respuesta)

PASO 2
Lee COMPLETAMENTE el archivo:
→ ROADMAP.md
(Fuente de verdad: fases completadas ✅, en progreso 🔵, pendientes ⬜)

PASO 3
Lee el archivo:
→ README.md
(Stack técnico, propuesta de diseño SplashScreen, notas de instalación)

PASO 4
Confirma explícitamente el estado actual SIN ejecutar nada ni tocar código:

Formato de respuesta OBLIGATORIO:

---
✅ He leído AI_WORKFLOW.md
✅ He leído ROADMAP.md
✅ He leído README.md

Estado actual del proyecto:
- Última sub-fase completada: [indicar exactamente, ej: "0.5 — Contenido actualizado"]
- Rama activa: [indicar rama git actual]
- Branch actual vs main: [indicar si hay rama pendiente de merge]

Siguiente paso permitido según ROADMAP:
→ [sub-fase y descripción exacta]

Pregunta pendiente de Marcos para esta sesión:
→ Antes de implementar 2.2, aconsejar sobre estilos, tokens y dirección visual para un rediseño 100% del portfolio con enfoque 80tero, gaming, cine Hollywood años 80 y perspectiva feminista. Revisar primero cómo encaja con Fase 2 y Fase 3 del ROADMAP.

¿Confirmas que empecemos ese paso?
---

REGLAS ABSOLUTAS (extraídas de AI_WORKFLOW.md):
- NO analices el proyecto desde cero.
- NO repropongas arquitectura ya decidida.
- NO toques código todavía.
- Una sub-fase por iteración, con verificación manual obligatoria antes de la siguiente.
- Responder SIEMPRE en castellano.
- Explicar cada cambio como a un Junior Engineer: por qué, cómo y cuándo.
- Siempre que exista una decisión posible, ofrecer 3 opciones concretas para elegir: recomendada, conservadora y ambiciosa/estratégica.
- Cada vez que se actualice REHIDRATACION.md, añadir o reemplazar la sección "Último cierre de sesión" con el último mensaje de cierre escrito por la IA.
- ROADMAP.md + AI_WORKFLOW.md son la fuente de verdad canónica.

Detente tras la confirmación. Espera instrucción de Marcos.
```

---

## Cuándo usarlo

- Al abrir una sesión nueva tras cerrar el navegador / Codespace
- Cuando el agente empieza a proponer cosas que ya están hechas
- Cuando el agente dice "no tengo contexto de lo anterior"
- Al retomar el proyecto después de días sin trabajar en él

---

## Documentos canónicos (leer en este orden)

| Prioridad | Fichero | Contenido |
|-----------|---------|-----------|
| 1 | `AI_WORKFLOW.md` | Reglas de colaboración, flujo de trabajo, restricciones del agente |
| 2 | `ROADMAP.md` | Fases completadas, en progreso, pendientes, bloques de verificación |
| 3 | `README.md` | Stack técnico, propuesta de diseño START button, instalación |

---

## Estado rápido del proyecto (actualizar tras cada sesión)

> **Última actualización:** 2026-05-07
> **Última sub-fase completada:** 2.2 — Tokens de color y tipografía
> **Estado UI atoms:** Button completado en 2.4
> **Rama activa:** `chore/1.1-app-router-prep`
> **Siguiente paso:** Crear `Badge` en `src/components/ui/Badge.tsx`

## Pregunta pendiente para la próxima sesión

Marcos quiere pedir consejo experto antes de implementar 2.2:

> ¿Qué estilos, tokens y dirección visual se recomiendan para este caso específico: portfolio 80tero, gaming, cine Hollywood años 80, perspectiva feminista y rediseño 100% de la web con otro enfoque?

### Cómo encaja con el ROADMAP

- **Fase 2** ya contempla el sistema base: tokens de color/tipografía, dark/light mode, componentes UI y efectos CRT.
- **Fase 3** ya contempla el rediseño por secciones: SplashScreen, Header, Hero, About, Projects, Contact y Footer.
- La dirección 80s/gaming/cine/feminista debe definirse **antes de implementar 2.2** si va a cambiar los tokens base aprobados.
- No implementar 2.2 a ciegas en la próxima sesión: primero revisar si la paleta actual debe ajustarse a esa nueva dirección creativa.

## Último cierre de sesión

> Hecho: tokens 2.2 implementados y `Button` creado en `src/components/ui/Button.tsx`.
>
> El Button usa tokens de `globals.css`, soporta variantes `primary`, `secondary`, `ghost`, tamaños `sm`, `md`, `lg`, y puede renderizar como `button` o link con `href`. Queda preparado para Hero, Packs y Contact.
>
> Verificación realizada: `npm run build` OK y `npm run lint` OK.
>
> Siguiente paso recomendado: crear `Badge` en `src/components/ui/Badge.tsx`. No reabrir decisiones de arquitectura ni negocio.

## CONTEXTO DE NEGOCIO (BLOQUE FIJO)

Este portfolio NO es solo showcase técnico.

Objetivos:
- Marca personal
- Captación de clientes freelance limitada (2–5/año)
- Posicionamiento diferencial (no portfolio genérico)

Restricciones:
- No parecer agencia
- No captación masiva
- Compatible con empleo actual

Cualquier decisión de diseño o desarrollo debe respetar esto.

## 🔁 REHIDRATACIÓN — Próxima sesión

- Estado actual:
  - Tokens implementados
  - Button completado
  - Diseño y arquitectura cerrados

- Siguiente paso:
  → Crear `Badge` en `src/components/ui/Badge.tsx`

- Orden de ejecución confirmado:
  Button → Badge → Card → SectionTitle → Hero → About → Projects → Packs → Contact

- No se deben reabrir decisiones de arquitectura ni negocio
- Continuar en modo ejecución directa

### ✅ Estado de persistencia

Antes de cerrar sesión:
- Verificar que todos los cambios están commiteados
- Hacer push de la rama activa
- NO mergear automáticamente a main
- Dejar un commit claro que defina el estado del proyecto

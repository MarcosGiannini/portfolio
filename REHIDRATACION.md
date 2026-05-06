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

¿Confirmas que empecemos ese paso?
---

REGLAS ABSOLUTAS (extraídas de AI_WORKFLOW.md):
- NO analices el proyecto desde cero.
- NO repropongas arquitectura ya decidida.
- NO toques código todavía.
- Una sub-fase por iteración, con verificación manual obligatoria antes de la siguiente.
- Responder SIEMPRE en castellano.
- Explicar cada cambio como a un Junior Engineer: por qué, cómo y cuándo.
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

> **Última actualización:** 2026-05-06
> **Última sub-fase completada:** 1.4 — Eliminar Pages Router
> **Rama activa:** `chore/1.1-app-router-prep`
> **Siguiente paso:** 1.5 — Extracción de lógica a hooks

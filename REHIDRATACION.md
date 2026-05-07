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
→ No hay pregunta pendiente de diseño. Continuar con el siguiente paso permitido: crear `Card` en `src/components/ui/Card.tsx`.

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
> **Última sub-fase completada:** 2.4 — Badge UI atómico
> **Estado UI atoms:** Tokens ✅ completados · Button ✅ completado · Badge ✅ completado
> **Rama activa:** `chore/1.1-app-router-prep`
> **Siguiente paso:** Crear `Card` en `src/components/ui/Card.tsx`

## Pregunta pendiente para la próxima sesión

No hay pregunta pendiente de diseño antes de continuar. La decisión de tokens de 2.2 ya está implementada y documentada.

### Cómo encaja con el ROADMAP

- **Fase 2** sigue en progreso con el sistema base: tokens, dark/light mode, componentes UI y efectos CRT.
- **2.2** está completada: tokens definidos en `globals.css` y fuentes configuradas en `layout`.
- **2.4** está en curso: `Button` y `Badge` completados; faltan `Card` y `SectionTitle`.
- **Fase 3** no debe empezar hasta completar Fase 2.

## Último cierre de sesión

> Hecho: documentación sincronizada tras crear `Badge` en `src/components/ui/Badge.tsx`.
>
> Estado real: tokens 2.2 completados, `Button` completado y `Badge` completado. El `Badge` soporta variantes `cyan`, `magenta`, `yellow` y `green`, usa tokens de `globals.css`, borde brutalista y fondo sutil con `color-mix`, sin colores hardcodeados.
>
> Verificación realizada para Badge: `npm run build` OK y `npm run lint` OK.
>
> Siguiente paso recomendado: crear `Card` en `src/components/ui/Card.tsx`. No avanzar a Fase 3 ni reabrir decisiones de arquitectura o negocio.

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
  - Tokens ✅ completados
  - Button ✅ completado
  - Badge ✅ completado
  - Diseño y arquitectura cerrados

- Siguiente paso:
  → Crear `Card` en `src/components/ui/Card.tsx`

- Orden de ejecución confirmado:
  Button → Badge → Card → SectionTitle → Hero → About → Projects → Packs → Contact

- No se deben reabrir decisiones de arquitectura ni negocio
- Continuar en modo ejecución directa

### ✅ Estado de persistencia

Antes de cerrar sesión:
- Verificar que todos los cambios están commiteados
- Separar commits si hay código y documentación:
  - `feat` → código
  - `docs` → documentación
- Hacer push de la rama activa
- NO mergear automáticamente a main
- Dejar un commit claro que defina el estado del proyecto

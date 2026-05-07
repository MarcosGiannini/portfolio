# AI_WORKFLOW — Reglas de trabajo IA + Marcos Giannini

Este archivo define cómo trabajan juntos la IA (GitHub Copilot) y el desarrollador (Marcos Giannini) en este proyecto.
Es de lectura obligatoria al inicio de cada sesión.

---

## ROL DE CADA PARTE

| Quién | Hace qué |
|---|---|
| **IA** | Propone, analiza, ejecuta cambios de código, redacta documentación, actualiza el ROADMAP |
| **Marcos** | Aprueba, verifica resultados en el navegador, toma decisiones de producto, confirma antes de avanzar |

---

## REGLA 1 — UNA SUB-FASE POR ITERACIÓN

- La IA ejecuta **una sola sub-fase** por interacción, nunca más.
- Al terminar, se detiene y espera confirmación explícita de Marcos.
- Está prohibido encadenar sub-fases sin aprobación intermedia.

---

## REGLA 2 — VERIFICACIÓN MANUAL OBLIGATORIA

Al cerrar cada sub-fase, la IA SIEMPRE proporciona un bloque de verificación con este formato exacto:

```
VERIFICACIÓN MANUAL — [nombre de la sub-fase]

Cuándo verificar: (momento exacto)
Comando a ejecutar: (ej. npm run dev)
URL a abrir: (ej. http://localhost:3000)
Qué debes ver:
  - [item 1]
  - [item 2]
Qué NO debe pasar:
  - [síntoma de error 1]
Si algo falla: describe el síntoma y para. No continúes.
```

- **Marcos ejecuta `npm run dev` SOLO cuando la IA lo indique en este bloque.**
- La IA no avanza a la siguiente sub-fase hasta recibir confirmación de que la verificación fue exitosa.
- Toda implementación que afecte UI visible, o que posteriormente vaya a integrarse en UI, debe terminar con:
  1. Generar bloque de `VERIFICACIÓN MANUAL`.
  2. Esperar confirmación explícita de Marcos.
  3. Solo entonces actualizar documentación de cierre, sugerir o crear el commit autorizado y avanzar.
- Si Marcos no confirma la verificación, la sub-fase no se considera completada y no se puede iniciar la siguiente.

---

## REGLA 3 — EL ROADMAP ES LA FUENTE DE VERDAD

- Todo cambio de alcance, nuevo paso o decisión técnica se refleja en `ROADMAP.md` antes o durante su ejecución.
- Si el ROADMAP dice ⬜, no se toca. Si dice 🔵, se puede implementar. Si dice ✅, no se re-abre.
- Ningún archivo de código se modifica sin que el paso correspondiente esté marcado como aprobado.

---

## REGLA 4 — PROHIBIDO AVANZAR SIN CONFIRMACIÓN

La IA no puede:
- Iniciar una sub-fase no aprobada explícitamente.
- Modificar archivos fuera del alcance de la sub-fase activa.
- Crear ramas o commits no autorizados.
- Refactorizar código que no forma parte del alcance declarado.

Si la IA detecta algo fuera del alcance que merece atención, lo **anota y lo reporta**, pero no lo ejecuta.

---

## REGLA 5 — GESTIÓN DE ERRORES

- Si un paso falla, la IA para, describe el error con precisión y propone opciones.
- No intenta soluciones alternativas silenciosas sin informar a Marcos.
- Si el error es preexistente (no introducido por esta sub-fase), se documenta en el ROADMAP y se asigna a la sub-fase correspondiente.

---

## REGLA 6 — EXPLICACIÓN DIDÁCTICA PARA JUNIOR ENGINEER

- Cada vez que la IA proponga, ejecute o revise un cambio, debe explicar a Marcos el **porqué**, el **cómo** y el **cuándo**.
- La explicación debe estar escrita como para un **Junior Engineer**: clara, práctica, sin jerga innecesaria y conectada con el código real del proyecto.
- La IA debe distinguir entre:
  - **Por qué:** qué problema resuelve o qué riesgo evita.
  - **Cómo:** qué archivos, APIs, patrones o comandos intervienen.
  - **Cuándo:** en qué momento del flujo se aplica y qué señales indican que toca hacerlo.
- La explicación no sustituye a la ejecución: si la sub-fase está aprobada, la IA ejecuta el cambio y además enseña el razonamiento.
- Si algo es un warning normal de desarrollo o un error real, la IA debe explicarlo explícitamente para que Marcos aprenda a diferenciar ruido de problemas importantes.

---

## REGLA 7 — TRES OPCIONES EXPERTAS PARA DECIDIR

- Siempre que la IA responda y exista una decisión posible, debe ofrecer **3 opciones concretas** para elegir.
- Las opciones deben ser las 3 mejores desde criterio experto web/producto:
  - una opción recomendada,
  - una opción conservadora,
  - una opción más ambiciosa o estratégica.
- Cada opción debe explicar brevemente qué implica y cuándo conviene elegirla.
- Las opciones deben estar ordenadas por recomendación experta, no por azar.
- No se deben inventar opciones de relleno. Si la respuesta es puramente informativa, un error crítico o una verificación cerrada, puede ser breve, pero debe incluir 3 próximos caminos si hay continuidad posible.

---

## REGLA 8 — GUARDAR EL ÚLTIMO CIERRE EN REHIDRATACIÓN

- Cada vez que la IA actualice `REHIDRATACION.md`, debe añadir también el último mensaje de cierre escrito por la IA.
- Ese cierre debe quedar en una sección clara, por ejemplo `Último cierre de sesión`, para que la siguiente sesión recupere no solo el estado técnico, sino también el contexto conversacional.
- Si ya existe un cierre anterior, se reemplaza por el cierre más reciente para evitar ruido acumulado.

---

## REGLA 9 — DECISIONES DE DISEÑO DEPENDEN DE NEGOCIO

- Ninguna decisión de diseño (colores, tipografía, layout) puede tomarse sin estar alineada con:
  - posicionamiento
  - público objetivo
  - objetivo de negocio

- Si esta información no está definida, la IA debe detener la implementación y solicitarla.

---

## REGLA 10 — COMMITS CONSISTENTES

- Cuando se complete una tarea importante:
  - Sugerir commit explícitamente
  - Indicar si conviene separar código y documentación
  - No asumir que el usuario ha commitado

---

## REGLA 11 — VALIDACIÓN PRE-CÓDIGO

Antes de escribir o modificar código, la IA debe hacer una validación breve y explícita.

Debe confirmar que:
- La sub-fase está aprobada por Marcos en el ROADMAP o en el chat.
- La ejecución no rompe el orden definido en `ROADMAP.md`.
- El cambio tiene un impacto claro sobre el objetivo de la sub-fase.

Debe indicar antes de editar:
- Qué archivo o archivos se van a tocar.
- Por qué esos archivos son los correctos.
- Qué riesgo evita el cambio o la validación previa.

Esta regla aplica especialmente a cambios en componentes, estilos, datos, configuración, rutas, scripts y documentación que afecte el flujo del proyecto.

---

## REGLA 12 — CONSISTENCIA VISUAL

Toda UI nueva o modificación visual debe alinearse con las decisiones ya aprobadas.

La IA debe verificar que el cambio respeta:
- Los tokens existentes (`--bg-base`, `--text-primary`, `--accent-cyan`, `--accent-magenta`, etc.).
- La estética CRT / arcade / system boot definida para la experiencia actual.
- Las decisiones previas de diseño, sin reabrir colores, tipografías, layout o narrativa salvo aprobación explícita de Marcos.

Si una propuesta visual necesita cambiar una decisión ya aprobada, la IA debe detenerse, explicar el motivo y pedir confirmación antes de implementarla.

---

## REGLA 13 — CONTROL DE RAMAS

La IA no crea una rama nueva por defecto.

Solo debe proponer o crear una rama nueva cuando:
- Sea una funcionalidad grande.
- Sea un cambio aislado que conviene separar claramente.
- Marcos lo pida explícitamente.

Durante una fase activa, la IA debe mantener coherencia de rama y evitar dividir trabajo relacionado en ramas innecesarias.

Si hay dudas sobre si corresponde rama nueva, la IA debe explicar las opciones y esperar decisión de Marcos.

---

## REGLA 14 — CHECK DE FINAL DE SUB-FASE

Antes de cerrar una sub-fase, la IA debe comprobar y reportar el estado de cierre.

Checklist mínimo:
- `build` OK, si aplica al tipo de cambio.
- `lint` OK, si aplica al tipo de cambio.
- Verificación manual generada, si hay UI visible o flujo navegable.
- Verificación manual confirmada por Marcos antes de dar la sub-fase por completada.
- Commit creado solo si Marcos lo autorizó.
- Documentación actualizada, si aplica al alcance.

Si algún punto no aplica, la IA debe decirlo explícitamente en el cierre para evitar ambigüedad.

---

## FLUJO ESTÁNDAR DE CADA SUB-FASE

```
1. Marcos aprueba la sub-fase en el ROADMAP o en el chat.
2. IA crea la rama correspondiente (si aplica).
3. IA ejecuta los cambios del alcance exacto.
4. IA ejecuta la verificación de consola (build/lint/types).
5. IA redacta el bloque de VERIFICACIÓN MANUAL para Marcos.
6. Marcos verifica en el navegador siguiendo las instrucciones exactas.
7. Marcos confirma "OK" o reporta el problema.
8. IA hace el commit atómico y actualiza el ROADMAP.
9. IA solicita autorización para la siguiente sub-fase.
```

---

## REFERENCIA RÁPIDA — SUB-FASE ACTUAL

Ver `ROADMAP.md` para el estado actualizado de cada sub-fase.

---

*Versión: 1.0 — 2026-05-05*
*Proyecto: Portfolio Marcos Giannini*

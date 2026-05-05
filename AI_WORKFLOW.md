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

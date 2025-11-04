---
title: "Sentencias if y condicionales"
description: "Tomar decisiones en tu código con if/else"
type: "reading"
duration: "30 min"
day: 2
order: 3
nextLesson: "switch-statements"
---

# Sentencias if y condicionales

Ya comparaste valores y los combinaste con operadores lógicos. Ahora usaremos esas comparaciones para controlar el flujo de tu programa. Las declaraciones condicionales deciden qué código se ejecuta según los datos; son la razón por la que las aplicaciones responden de forma diferente a cada persona.

Seguiremos trabajando en `day2-operators.js`, pero si prefieres un inicio limpio, crea `day2-conditionals.js`.

## Paso 1: Sentencia `if` básica

```javascript
const streakDays = 5;

if (streakDays >= 5) {
  console.log("¡Ganaste la insignia Weekend Warrior! 🏅");
}
```

- `if` evalúa la condición entre paréntesis.
- Si la condición es truthy, se ejecuta el bloque entre `{ }`.
- Si es falsy, JavaScript salta el bloque.

## Paso 2: `if` + `else`

```javascript
const sharedProgress = false;

if (sharedProgress) {
  console.log("¡Gracias por compartir tu progreso! 🎉");
} else {
  console.log("¡Comparte tu progreso para inspirar a otros! ✨");
}
```

El bloque `else` captura todo lo que no cumple la condición del `if`.

## Paso 3: Múltiples condiciones con `else if`

Usa `else if` para ramificar la lógica:

```javascript
const xp = 680;

if (xp >= 1000) {
  console.log("¡Subiste de nivel! 🆙");
} else if (xp >= 700) {
  console.log("¡Casi llegas, sigue así!");
} else {
  console.log("¡Gran inicio, cada punto cuenta!");
}
```

- Las condiciones se evalúan de arriba abajo.
- La primera condición verdadera gana; las demás se ignoran.
- Usa `else` para el caso predeterminado.

## Paso 4: Combinar lógica dentro de condiciones

```javascript
const lessonsToday = 2;
const minutesToday = 45;

if (lessonsToday >= 3 && minutesToday >= 60) {
  console.log("¡Campeón de la constancia! 🏆");
} else if (lessonsToday >= 1 || minutesToday >= 30) {
  console.log("Buen ritmo, ¡sigue así!");
} else {
  console.log("Los pasos pequeños cuentan. ¡Prueba una lección rápida!");
}
```

Mezcla operadores aritméticos y lógicos para expresar límites claros. Así funcionan los rastreadores de progreso y sistemas de logros.

## Paso 5: Truthy/Falsy en condicionales

Cualquier expresión puede ir dentro de un `if`. JavaScript la convierte a booleano:

```javascript
const feedback = "";

if (feedback) {
  console.log(`Gracias por tu comentario: ${feedback}`);
} else {
  console.log("Aún no hay comentarios—¡cuéntanos cómo te va!");
}
```

Las cadenas vacías, `0`, `null` y `undefined` son falsy, por lo que se ejecuta el `else`. Esto es útil para validar formularios o respuestas de APIs.

## Paso 6: Operador ternario

Para condicionales rápidos en línea, usa el operador ternario (`condición ? valor si verdadero : valor si falso`):

```javascript
const hasCompletedDay = true;
const message = hasCompletedDay
  ? "¡Genial! Día 2 completado 🙌"
  : "¡Termina el Día 2 para desbloquear nuevas lecciones!";

console.log(message);
```

- Los ternarios devuelven valores y son ideales dentro de plantillas de cadenas o asignaciones.
- Manténlos breves. Si la lógica se complica, vuelve a `if/else`.

## Paso 7: Anidar condicionales (con cuidado)

Puedes anidar `if`, pero evita profundizar demasiado o olvidar el `else`.

```javascript
const plan = "premium";
const storageUsed = 8; // GB

if (plan === "premium") {
  if (storageUsed < 10) {
    console.log("¡Aún tienes bastante almacenamiento!");
  } else {
    console.log("Estás cerca del límite de almacenamiento.");
  }
} else {
  console.log("Sube a premium para desbloquear más almacenamiento.");
}
```

Cuando el anidamiento se vuelva confuso, considera:
- Combinar condiciones con operadores lógicos.
- Extraer la lógica en funciones descriptivas.
- Usar `switch` (la próxima lección).

## Paso 8: Guard clauses para salidas tempranas

Las guard clauses te permiten salir antes cuando no se cumplen condiciones. Son comunes en funciones:

```javascript
function awardBadge(streak) {
  if (streak < 5) {
    console.log("Sigue adelante. La insignia se desbloquea a los 5 días.");
    return;
  }

  console.log("¡Insignia desbloqueada! 🌟");
}

awardBadge(3); // salida temprana
awardBadge(6); // éxito
```

Este patrón mantiene tu código plano y fácil de leer.

## Paso 9: Errores comunes que evitar

- **Faltan llaves:** usa `{ }` incluso en líneas únicas para evitar errores cuando agregues más código después.
- **Asignar en lugar de comparar:** `if (score = 0)` asigna 0 a `score` y evalúa como falsy. Usa `===`.
- **Condiciones superpuestas:** asegúrate de que los rangos en `if/else if` no se crucen accidentalmente.

## Prompts de práctica

1. Construye un mini asesor:
   ```javascript
   const hoursStudied = 4;
   const confidenceLevel = 7; // de 10
   ```
   Imprime distintos mensajes motivadores según la combinación (por ejemplo, muchas horas + alta confianza → "¡Listo para el quiz!").

2. Con `const membership = "gold"; const referrals = 3;`, crea un mensaje:
   - Platinum si `membership` es `"gold"` **y** `referrals` ≥ 5.
   - Regalos extra si `referrals` ≥ 3.
   - En otro caso, agradece su permanencia.

3. Usa un ternario para establecer `const status = isOnline ? "En línea" : "Desconectado";` y añade un emoji.

4. Escribe la función `recommendBreak(minutes)` que sugiera `"Toma un descanso corto"` si `minutes >= 50`, de lo contrario `"¡Sigue adelante!"`.

## Ideas clave

- ✅ Las sentencias `if/else` te permiten bifurcar la lógica según condiciones.
- ✅ Combina operadores aritméticos y lógicos dentro de las condiciones para reglas precisas.
- ✅ Los ternarios son concisos, pero deben permanecer sencillos.
- ✅ Las guard clauses y umbrales claros facilitan la lectura de la lógica.

---

## 🎯 Comprobación rápida

1. ¿Qué sucede si omites las llaves en un `if` y luego agregas una segunda línea?
2. ¿Por qué deberías evitar `==` en condiciones que esperan tipos específicos?
3. ¿Cuándo es mejor usar un ternario en lugar de `if/else`?
4. Escribe una condición que compruebe si `completedLessons >= 5` **y** `feedback` es truthy.

¿Listo para explorar otras estructuras de ramificación? ¡Sigue con `switch`! 🔀

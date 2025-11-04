---
title: "Declaraciones de funciones"
description: "Crear código reutilizable con funciones"
type: "reading"
duration: "20 min"
day: 4
order: 1
nextLesson: "function-parameters"
---

# Declaraciones de funciones

¡Bienvenido al Día 4! Hasta ahora has escrito código que se ejecuta de arriba abajo. Las funciones te permiten agrupar lógica, darle un nombre y reutilizarla cuando la necesites. Piensa en ellas como mini programas que puedes enchufar en flujos más grandes.

## Paso 1: ¿Qué es una función?

Una función es un bloque de código reutilizable que realiza una tarea específica. Una vez definida, puedes llamarla tantas veces como quieras.

```javascript
function greet() {
  console.log("¡Hola, comunidad DevSteps!");
}

greet(); // llamar o “invocar” la función
greet(); // se ejecuta de nuevo
```

- La palabra clave `function` inicia la declaración.
- `greet` es el nombre de la función.
- `{ ... }` contiene el código que se ejecuta cuando llamas a la función.

## Paso 2: ¿Por qué usar funciones?

- **Reutilización**: escribe código una vez y úsalo múltiples veces.
- **Organización**: divide tareas complejas en pasos pequeños y con nombre.
- **Mantenibilidad**: al corregir o mejorar una función, actualizas todos los lugares donde se usa.
- **Trabajo en equipo**: funciones con nombres claros comunican la intención a otros desarrolladores (¡y al futuro tú!).

## Paso 3: Nombrar funciones

Elige verbos descriptivos que expliquen lo que hace la función.

```javascript
function sendMotivationMessage() { ... }
function calculateScore() { ... }
function displayProgressChart() { ... }
```

- Usa camelCase (`calculateScore`).
- Evita nombres genéricos como `doStuff` o `thing`.
- Una buena regla: el nombre debería leerse como un comando.

## Paso 4: Flujo de una función

Cuando llamas a una función:

1. JavaScript salta al cuerpo de la función.
2. Ejecuta cada línea dentro de ella.
3. Regresa a la línea posterior a la llamada.

```javascript
console.log("Start");
greet();          // ejecuta el cuerpo de la función
console.log("End");
```

Salida:
```
Start
¡Hola, comunidad DevSteps!
End
```

## Paso 5: Funciones con lo aprendido hasta el Día 4

Ya conoces variables, condicionales y bucles. Las funciones pueden contener todo eso.

```javascript
function celebrateMilestones(streak) {
  if (streak >= 7) {
    console.log("¡Semana completa! 🎉");
  } else if (streak >= 3) {
    console.log("¡Racha de tres días, sigue así!");
  } else {
    console.log("Cada día cuenta. ¡Lo estás haciendo genial!");
  }
}

celebrateMilestones(2);
celebrateMilestones(4);
celebrateMilestones(7);
```

Una sola función consolida toda la lógica de la racha en un mismo lugar.

## Paso 6: Funciones que devuelven valores (adelanto)

Las funciones pueden devolver un valor usando `return`. Lo veremos a fondo pronto, pero aquí tienes un adelanto:

```javascript
function generateBadgeName(day) {
  return `Day ${day} Trailblazer`;
}

const badge = generateBadgeName(4);
console.log(badge); // "Day 4 Trailblazer"
```

- Sin `return`, una función devuelve `undefined`.
- En cuanto JavaScript encuentra `return`, sale de la función.

## Paso 7: Elevación de funciones (hoisting)

Las declaraciones de funciones se **elevan**, lo que significa que puedes llamarlas antes de que aparezcan en el archivo.

```javascript
announce(); // ¡funciona!

function announce() {
  console.log("Las funciones se elevan.");
}
```

JavaScript mueve las declaraciones de funciones al inicio de su ámbito durante la compilación. Por eso la llamada funciona incluso si la definición viene después. (Más adelante compararemos esto con las expresiones de función).

## Paso 8: Expresiones vs declaraciones (vista previa)

Verás funciones definidas de distintas formas:

```javascript
// Declaración
function logProgress() {
  console.log("Registrando progreso...");
}

// Expresión (no se eleva de la misma manera)
const logProgressExpression = function () {
  console.log("Registrando progreso...");
};
```

Por ahora nos quedamos con las declaraciones porque son simples y se elevan automáticamente. Las expresiones y las funciones flecha llegarán más adelante esta semana.

## Paso 9: Conceptos básicos de alcance (sneak peek)

Las variables declaradas dentro de una función viven en su ámbito local:

```javascript
function assignGoal() {
  const goal = "Terminar el contenido del Día 4";
  console.log(goal);
}

assignGoal();
// console.log(goal); // ReferenceError: goal is not defined
```

Las variables locales se quedan dentro de la función. Este aislamiento evita colisiones de nombres y mantiene tu código modular.

## Prompts de práctica

1. Define `printWelcome()` que registre un mensaje de bienvenida multilínea para el Día 4. Llámala dos veces.
2. Escribe `function logDailyProgress(day, completed)` que muestre `"Day X: Completed"` o `"Day X: Pending"` según el booleano `completed`.
3. Crea `function countDown(start)` que registre números desde `start` hasta 1 usando un bucle.
4. (Adelanto) Escribe `function createCheer(name)` que devuelva una cadena como `"Go, name! You’re crushing it!"`. Registra la cadena devuelta.

## Ideas clave

- ✅ Las declaraciones de funciones definen bloques de código reutilizables con la palabra clave `function`.
- ✅ El hoisting te permite llamar a funciones declaradas antes de su definición en el archivo.
- ✅ Las funciones encapsulan lógica, mejorando la estructura y la legibilidad.
- ✅ `return` devuelve valores y termina la función de inmediato.

---

## 🎯 Comprobación rápida

1. ¿Cuáles son las tres partes principales de una declaración de función?
2. ¿Por qué los nombres de las funciones suelen ser verbos?
3. ¿Qué valor devuelve una función sin sentencia `return`?
4. ¿Cómo afecta el hoisting a las declaraciones de funciones?

¡Buen trabajo! Ahora sigue con los parámetros para que tus funciones acepten entradas dinámicas. 🧠➡️

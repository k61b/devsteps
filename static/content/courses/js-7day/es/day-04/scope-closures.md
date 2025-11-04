---
title: "Ámbito de funciones y closures"
description: "Comprender el alcance de las variables en funciones"
type: "reading"
duration: "30 min"
day: 4
order: 5
nextLesson: "intro-to-arrays"
---

# Ámbito de funciones y closures

El ámbito define dónde existen las variables y quién puede acceder a ellas. Las closures permiten que las funciones recuerden valores de su ámbito exterior incluso después de que este haya terminado de ejecutarse. Juntos, forman el modelo mental que necesitas para escribir código modular y sin errores.

## Paso 1: Tipos de ámbito

- **Ámbito global**: variables accesibles en todas partes.
- **Ámbito de función**: variables declaradas dentro de una función, disponibles solo dentro de ella.
- **Ámbito de bloque**: variables declaradas con `let` o `const` dentro de `{ }` se limitan a ese bloque.

```javascript
const globalMessage = "¡Hola, mundo!";

function shoutMessage() {
  const localMessage = "¡Hola desde adentro!";
  console.log(globalMessage); // accesible
  console.log(localMessage);  // accesible
}

shoutMessage();
// console.log(localMessage); // ReferenceError
```

## Paso 2: Ámbito de bloque con `let` y `const`

`let` y `const` respetan el ámbito de bloque; `var` no.

```javascript
if (true) {
  const blockScoped = "Dentro del bloque";
}

// console.log(blockScoped); // ReferenceError
```

Usa `let`/`const` para mantener las variables confinadas al ámbito más pequeño posible.

## Paso 3: Sombras (shadowing)

Las variables en ámbitos internos pueden tener el mismo nombre que las externas; la interna “sombrea” a la externa.

```javascript
const level = "global";

function showLevel() {
  const level = "función";
  console.log(level); // "función"
}

showLevel();
console.log(level); // "global"
```

Evita sombrear a menos que tengas un motivo sólido: puede confundir a quienes leen el código.

## Paso 4: ¿Qué es una closure?

Una closure se crea cuando una función interna captura variables de su función externa, incluso después de que la función externa haya terminado.

```javascript
function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(`Conteo: ${count}`);
  }

  return increment;
}

const counter = createCounter();
counter(); // Conteo: 1
counter(); // Conteo: 2
```

- `increment` recuerda `count`, aunque `createCounter` ya haya devuelto.
- Cada llamada a `createCounter` crea una nueva closure con su propio `count`.

## Paso 5: Closures con parámetros

```javascript
function createGoalTracker(goal) {
  let progress = 0;

  return function(points) {
    progress += points;
    if (progress >= goal) {
      console.log(`Meta de ${goal} alcanzada. 🎉`);
    } else {
      console.log(`Progreso: ${progress}/${goal}`);
    }
  };
}

const tracker = createGoalTracker(100);
tracker(30); // Progreso: 30/100
tracker(80); // Meta alcanzada
```

- La función interna captura `progress` y `goal`.
- Útil para crear utilidades personalizadas.

## Paso 6: Usos prácticos de las closures

- **Encapsulación**: oculta variables dentro de closures en lugar de depender de datos globales.
- **Funciones fábrica**: generan funciones configuradas con valores específicos.
- **Memoización**: cachea resultados dentro de una closure para evitar recalcular.
- **Manejadores de eventos**: recuerdan el contexto al responder a eventos o callbacks.

## Paso 7: IIFE (Immediately Invoked Function Expression)

Una IIFE se ejecuta de inmediato y puede crear un ámbito aislado.

```javascript
(function () {
  const secret = "oculto";
  console.log("IIFE ejecutada");
})();

// console.log(secret); // ReferenceError
```

Las IIFE eran más comunes antes del ámbito de bloque, pero aún puedes verlas en código legado.

## Paso 8: Errores habituales

- **Filtrar variables sin querer**: olvidar `const`/`let` crea globales.
- **Callbacks dentro de bucles**: todos los callbacks comparten la misma variable a menos que la captures por iteración.

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Muestra 3 tres veces porque var es de ámbito de función

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}
// Muestra 0, 1, 2 porque let es de ámbito de bloque
```

## Paso 9: Prompts de práctica

1. Escribe `function createMultiplier(multiplier)` que devuelva una función que multiplique cualquier entrada por `multiplier`. Prueba con 2 y 5.
2. Implementa `function makeLogger(prefix)` que devuelva una función que registre mensajes con ese prefijo.
3. Usa una IIFE para crear un contador privado que registre `"Counter: 1"`, `"Counter: 2"`, etc., cada vez que llames a la función devuelta.
4. Explica qué permite la closure en el ejemplo `createGoalTracker` y cómo cambiar el argumento inicial modifica el comportamiento.

## Ideas clave

- ✅ El ámbito determina dónde viven las variables y quién puede verlas.
- ✅ Las closures permiten que las funciones internas recuerden variables de su ámbito exterior.
- ✅ Úsalas para encapsulación, fábricas, caching y callbacks asíncronos.
- ✅ Prefiere `let`/`const` para evitar fugas accidentales y errores de ámbito.

---

## 🎯 Comprobación rápida

1. ¿Cuál es la diferencia entre ámbito de función y ámbito de bloque?
2. ¿Cómo hacen posibles las closures a las funciones fábrica?
3. ¿Por qué usar `var` dentro de bucles causa problemas con callbacks asíncronos?
4. ¿Cómo ayudan las IIFE a evitar contaminar el ámbito global?

¡Gran trabajo! Mañana nos adentraremos en los arreglos: el siguiente paso para gestionar colecciones de datos. 📚

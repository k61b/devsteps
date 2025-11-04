---
title: "Variables y tipos de datos"
description: "Aprende sobre let, const, var y los distintos tipos de datos"
type: "reading"
duration: "30 min"
day: 1
order: 4
nextLesson: "day-1-exercises"
---

# Variables y tipos de datos

Las variables te permiten almacenar información, darle un nombre y reutilizarla en tu programa. JavaScript también admite varios tipos de datos que describen qué clase de información estás manipulando. Entender ambos conceptos es esencial antes de construir algo más grande que un simple `console.log`.

## Paso 1: ¿Por qué importan las variables?

Imagina que construyes una app que saluda al usuario. Si escribes `"Hola, Alex!"`, solo funciona para una persona. Las variables te permiten escribir código dinámico:

```javascript
const userName = "Alex";
console.log(`Hola, ${userName}!`);
```

Cambia `userName` y el mensaje se actualiza automáticamente. Las variables también te ayudan a llevar la cuenta de puntajes, valores de configuración o cualquier dato que tu programa necesite recordar.

## Paso 2: Declarar variables (`let`, `const`, `var`)

JavaScript ofrece tres palabras clave para crear variables.

### `const`: la opción predeterminada
```javascript
const pi = 3.14159;
```
- No se puede reasignar.
- Funciona con números, cadenas, arreglos u objetos: la referencia se mantiene constante aunque cambie el contenido de un arreglo u objeto.
- Ayuda a evitar cambios accidentales y comunica intención.

### `let`: úsala cuando la reasignación sea intencional
```javascript
let score = 0;
score = score + 10;
```
- Tiene alcance de bloque (solo existe dentro de las llaves `{ }` más cercanas).
- Permite reasignaciones.
- Ideal para contadores, acumuladores o valores que cambian con el tiempo.

### `var`: palabra clave heredada
```javascript
var legacyValue = 42;
```
- Tiene alcance de función (ignora los bloques).
- Presenta comportamientos de hoisting que pueden generar errores.
- Evita usar `var` en código moderno salvo que trabajes con scripts muy antiguos. Quédate con `const` y `let`.

> Regla general: usa `const` a menos que sepas que el valor cambiará; en ese caso opta por `let`.

## Paso 3: Tipos de datos primitivos

JavaScript tiene siete tipos de datos primitivos. Los primitivos son inmutables y se almacenan por valor.

| Tipo | Ejemplo | Descripción |
| ---- | ------- | ----------- |
| `string` | `"Hola"` o `'Mundo'` | Texto entre comillas. Usa plantillas literales (backticks) para interpolar. |
| `number` | `42`, `3.14`, `-10` | Enteros y decimales. No hay tipos `int` o `float` separados. |
| `boolean` | `true`, `false` | Representan estados verdaderos o falsos. |
| `null` | `null` | Significa “sin valor”. Lo establece el desarrollador. |
| `undefined` | `undefined` | Valor predeterminado de variables no inicializadas. |
| `symbol` | `Symbol('id')` | Identificadores únicos, usados como llaves en objetos avanzados. |
| `bigint` | `123n` | Enteros muy grandes fuera del rango seguro de `number`. |

### Verificar tipos con `typeof`

```javascript
typeof "Hola";        // "string"
typeof 99;            // "number"
typeof true;          // "boolean"
typeof undefined;     // "undefined"
typeof null;          // "object"  (una peculiaridad del lenguaje)
typeof 123n;          // "bigint"
typeof Symbol("id");  // "symbol"
```

> Observa el bug histórico: `typeof null` devuelve `"object"`. Aun así, `null` sigue siendo un primitivo.

## Paso 4: Tipos por referencia (objetos y arreglos)

Además de los primitivos, JavaScript tiene tipos por referencia. Se almacenan por referencia y pueden contener múltiples valores.

### Objetos
```javascript
const learner = {
  name: "Nora",
  progress: 40,
  isActive: true
};
```

- Son pares clave-valor.
- Usa notación de punto (`learner.name`) o corchetes (`learner["name"]`) para acceder a las propiedades.
- Los objetos son la base de la mayoría de estructuras de datos en JavaScript.

### Arreglos
```javascript
const topics = ["Variables", "Tipos de datos", "Funciones"];
```

- Listas ordenadas que comienzan en el índice 0.
- Usa `topics[1]` para acceder al segundo elemento.
- Los arreglos son técnicamente objetos, así que `typeof topics` devuelve `"object"`. Usa `Array.isArray(topics)` para comprobarlo explícitamente.

## Paso 5: Tipado dinámico

JavaScript es de tipado dinámico: las variables pueden almacenar cualquier tipo y cambiar con el tiempo.

```javascript
let value = 10;   // number
value = "diez";   // ahora es cadena
value = true;     // ahora booleano
```

El tipado dinámico brinda flexibilidad, pero es crucial saber qué tipo esperas. Mezclar tipos por accidente es una fuente común de errores.

## Paso 6: Convertir entre tipos

A menudo necesitarás convertir valores, especialmente al leer entradas del usuario (cadenas) y realizar cálculos (números).

- `Number("42")` convierte una cadena a número (devuelve `NaN` si falla).
- `String(10)` convierte un número en cadena.
- `Boolean("")` → `false`, `Boolean("texto")` → `true`.
- `parseInt("101", 10)` convierte a entero en base 10.
- Las plantillas literales convierten automáticamente a cadena: `` `Puntaje: ${score}` ``.

### Cuidado con la coerción implícita

```javascript
"5" + 1;    // "51" (concatenación de cadenas)
"5" - 1;    // 4   (la cadena se convierte a número)
```

JavaScript intenta ayudar convirtiendo tipos automáticamente. A veces es conveniente, otras veces causa sorpresas. Cuando dudes, haz la conversión de forma explícita.

## Paso 7: Practica en la consola

Abre DevTools o ejecuta Node.js y experimenta:

```javascript
const name = "Taylor";
let age = 21;
const hobbies = ["leer", "videojuegos"];

console.log(typeof name);    // "string"
console.log(typeof age);     // "number"
console.log(Array.isArray(hobbies)); // true

age = age + 1;
console.log(`Feliz cumpleaños, ${name}! Ahora tienes ${age}.`);
```

Intenta predecir cada salida antes de ejecutar el código y luego verifica tu comprensión. Cambia los valores y observa cómo responden los tipos.

## Paso 8: Errores comunes y consejos

- **Reasignar una variable `const`**: lanza un `TypeError`. Usa `let` si necesitas reasignar.
- **Olvidar `const`/`let`**: escribir `score = 0;` sin palabra clave crea una variable global sin querer (el modo estricto lo impide).
- **Confundir `null` y `undefined`**: usa `null` cuando limpias un valor intencionalmente; espera `undefined` cuando algo aún no se ha asignado.
- **Comparar tipos distintos**: `==` realiza coerción, mientras que `===` compara valor y tipo. Prefiere `===` para evitar sorpresas.

```javascript
0 == false;   // true  (por coerción)
0 === false;  // false (comparación estricta)
```

## Ideas clave

- ✅ Usa `const` por defecto; cambia a `let` cuando necesites reasignar.
- ✅ JavaScript admite varios tipos primitivos—aprende sus particularidades (`typeof null`).
- ✅ Los objetos y arreglos son tipos por referencia que modelan datos complejos.
- ✅ El tipado dinámico y la coerción son potentes, pero necesitan atención.

---

## 🎯 Comprobación rápida

1. ¿Cuándo deberías elegir `let` en lugar de `const`?
2. ¿Qué devuelve `typeof null` y por qué es sorprendente?
3. ¿Cómo compruebas si un valor es un arreglo?
4. ¿Por qué deberías preferir `===` sobre `==` en las condiciones?
5. Convierte la cadena `"99"` a número y explica qué ocurre si la conversión falla.

Si te sientes seguro con estas respuestas, ¡estás listo para las prácticas del Día 1!

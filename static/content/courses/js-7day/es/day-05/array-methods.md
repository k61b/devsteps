---
title: "Métodos de arreglos"
description: "Push, pop, shift, unshift, slice, splice y más"
type: "reading"
duration: "35 min"
day: 5
order: 2
nextLesson: "objects-properties"
---

# Métodos de arreglos

Los arreglos brillan porque JavaScript incluye muchas utilidades para insertar, eliminar y remodelar datos. Hoy dominarás los métodos básicos que usarás a diario: añadir en cualquiera de los extremos, crear copias con `slice`, editar con `splice` y comprobar valores.

## Paso 1: Mutadores vs no mutadores

- Los **métodos mutadores** cambian el arreglo original (por ejemplo, `push`, `pop`, `splice`).
- Los **métodos no mutadores** devuelven un arreglo o valor nuevo dejando intacto el original (por ejemplo, `slice`, `concat`).

Decide qué comportamiento necesitas antes de llamar a un método: las mutaciones son ideales para actualizaciones rápidas, mientras que las versiones no mutadoras conservan el historial.

## Paso 2: `push` y `pop`

Añade o quita elementos del final.

```javascript
const backlog = ["Setup", "Variables"];

backlog.push("Control Flow"); // devuelve la nueva longitud (3)
const removed = backlog.pop(); // devuelve "Control Flow"

console.log(backlog); // ["Setup", "Variables"]
```

- `push` agrega uno o más valores.
- `pop` elimina un único valor del final.

## Paso 3: `unshift` y `shift`

Manipula el inicio del arreglo.

```javascript
const roadmap = ["Functions", "Objects"];

roadmap.unshift("Arrays"); // ["Arrays", "Functions", "Objects"]
const first = roadmap.shift(); // quita "Arrays"

console.log(roadmap); // ["Functions", "Objects"]
```

- `unshift` agrega al principio.
- `shift` elimina y devuelve el primer elemento.

## Paso 4: `slice`

`slice` copia parte de un arreglo sin modificar el original.

```javascript
const lessons = ["Intro", "Loops", "Functions", "Arrays"];

const fundamentals = lessons.slice(0, 3); // ["Intro", "Loops", "Functions"]
const lastTwo = lessons.slice(-2); // ["Functions", "Arrays"]

console.log(lessons); // permanece igual
```

- El primer parámetro es el índice inicial (incluido).
- El segundo parámetro es el índice final (excluido). Omítelo para ir hasta el final.
- Los índices negativos cuentan desde la derecha.

## Paso 5: `splice`

`splice` edita el arreglo original eliminando, reemplazando o insertando valores.

```javascript
const agenda = ["Welcome", "Basics", "Break", "Project"];

agenda.splice(2, 1, "Q&A"); // elimina 1 elemento en el índice 2 e inserta "Q&A"
console.log(agenda); // ["Welcome", "Basics", "Q&A", "Project"]

agenda.splice(3, 0, "Wrap-up");
console.log(agenda); // ["Welcome", "Basics", "Q&A", "Wrap-up", "Project"]
```

- Primer parámetro: índice inicial.
- Segundo parámetro: cuántos elementos eliminar.
- El resto: valores a insertar.

## Paso 6: Combinar métodos

Mezcla métodos para realizar actualizaciones complejas.

```javascript
const tasks = ["Plan", "Code", "Review", "Deploy"];

tasks.pop(); // elimina "Deploy"
tasks.push("Test", "Deploy"); // agrega dos elementos

const active = tasks.slice(0, 3); // ["Plan", "Code", "Review"]
```

Pensar en pasos pequeños mantiene la lógica clara y fácil de depurar.

## Paso 7: Buscar con `includes` e `indexOf`

Comprueba si un valor existe y dónde se encuentra.

```javascript
const badges = ["Bronze", "Silver", "Gold", "Gold"];

console.log(badges.includes("Silver")); // true
console.log(badges.indexOf("Gold")); // 2
console.log(badges.lastIndexOf("Gold")); // 3
```

- `includes` devuelve un booleano.
- `indexOf`/`lastIndexOf` devuelven el primer/último índice coincidente o `-1`.

## Paso 8: `join` para mostrar información

Convierte arreglos en cadenas, útil para presentarlos o guardarlos.

```javascript
const highlights = ["Arrays", "Objects", "DOM"];

const summary = highlights.join(", ");
console.log(summary); // "Arrays, Objects, DOM"
```

- El separador predeterminado es una coma.
- Pasa cualquier cadena para dar estilo a la salida.

## Paso 9: Prompts de práctica

1. Comienza con `const queue = ["Signup"];`, agrega dos elementos usando `push` y luego elimina el primero con `shift`.
2. Copia los dos últimos elementos de `const stages = ["Research", "Plan", "Build", "Test"];` sin mutar el original.
3. Reemplaza `"Break"` con `"Demo"` en `const schedule = ["Intro", "Break", "Workshop"];` usando `splice`.
4. Verifica si `"Review"` existe en `const checklist = ["Plan", "Code", "Test"];`; agrégalo si falta.
5. Convierte `const mentors = ["Ada", "Grace", "Kayra"];` en la cadena `"Ada | Grace | Kayra"`.

## Ideas clave

- ✅ Los métodos mutadores (`push`, `pop`, `shift`, `unshift`, `splice`) modifican el arreglo original.
- ✅ Los métodos no mutadores como `slice` y `concat` devuelven arreglos nuevos, perfectos para copias seguras.
- ✅ Usa `includes` e `indexOf` para encontrar valores rápidamente.
- ✅ Encadena operaciones pequeñas para lograr lógica legible y mantenible.

---

## 🎯 Comprobación rápida

1. ¿Cuál es la diferencia entre `slice` y `splice`?
2. ¿Cómo insertas un valor al inicio de un arreglo?
3. ¿Cuándo devuelve `indexOf` el valor `-1`?
4. ¿Por qué podrías preferir un método no mutador en determinadas situaciones?

Próxima lección: sube de nivel con objetos, la estructura predilecta de JavaScript para datos etiquetados. 🗂️

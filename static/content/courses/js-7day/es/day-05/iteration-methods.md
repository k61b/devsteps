---
title: "Iteración de arreglos y objetos"
description: "Usar forEach, map, filter y reduce"
type: "reading"
duration: "20 min"
day: 5
order: 4
nextLesson: "day-5-todo-project"
---

# Iteración de arreglos y objetos

Los métodos de iteración procesan cada elemento sin escribir bucles manuales. Hacen que las transformaciones, filtros y agregaciones sean más fáciles de expresar, y son la base de flujos limpios de datos. Hoy conocerás los cuatro esenciales: `forEach`, `map`, `filter` y `reduce`.

## Paso 1: Conoce los métodos

- `forEach` ejecuta un callback por cada elemento—ideal para efectos secundarios como registrar datos.
- `map` transforma cada elemento y devuelve un arreglo nuevo.
- `filter` conserva solo los elementos que aprueban una prueba.
- `reduce` combina los elementos en un único valor (número, objeto, cadena, etc.).

Cada método recibe un callback con `(valor, índice, arreglo)` más argumentos opcionales de contexto.

## Paso 2: `forEach` para efectos secundarios

```javascript
const learners = ["Ada", "Grace", "Kayra"];

learners.forEach((name, index) => {
  console.log(`${index + 1}. ${name}`);
});
```

- Ejecuta el callback para cada elemento.
- Devuelve `undefined`; úsalo cuando no necesites un arreglo nuevo.
- Si necesitas salir antes, cambia a un bucle `for`.

## Paso 3: `map` para transformaciones

```javascript
const scores = [10, 12, 15];

const doubled = scores.map((score) => score * 2);
console.log(doubled); // [20, 24, 30]
```

- Devuelve un arreglo nuevo con la misma longitud.
- No modifica el original.

## Paso 4: `filter` para selecciones

```javascript
const lessons = [
  { title: "Arrays", duration: 20 },
  { title: "Objects", duration: 25 },
  { title: "Iteration", duration: 20 }
];

const longLessons = lessons.filter((lesson) => lesson.duration > 20);
console.log(longLessons);
// [{ title: "Objects", duration: 25 }]
```

- Devuelve un arreglo nuevo con los elementos que retornan `true`.
- La longitud puede ser menor (incluso 0).

## Paso 5: `reduce` para agregaciones

```javascript
const durations = [20, 25, 20];

const total = durations.reduce((sum, minutes) => sum + minutes, 0);
console.log(total); // 65
```

- Recibe un acumulador (`sum`) y el valor actual (`minutes`), más un valor inicial (`0`).
- Úsalo para totales, agrupaciones, construir objetos y mucho más.

## Paso 6: Encadenar métodos

Combina métodos en secuencia.

```javascript
const learners = [
  { name: "Ada", progress: 0.9 },
  { name: "Grace", progress: 0.6 },
  { name: "Kayra", progress: 0.8 }
];

const ahead = learners
  .filter((learner) => learner.progress >= 0.8)
  .map((learner) => learner.name.toUpperCase());

console.log(ahead); // ["ADA", "KAYRA"]
```

- Cada método devuelve un arreglo nuevo, así el siguiente puede seguir refinándolo.

## Paso 7: Iterar objetos

Los objetos no tienen estos métodos, pero puedes convertirlos en arreglos.

```javascript
const stats = { day: 5, completed: 12, remaining: 3 };

Object.entries(stats).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
```

- `Object.keys`, `Object.values` y `Object.entries` devuelven arreglos que puedes iterar.

## Paso 8: Elegir la herramienta adecuada

- Usa `map` si transformas cada elemento.
- Usa `filter` si excluyes algunos elementos.
- Usa `reduce` si combinas todo en un resultado.
- Mantente con `forEach` para efectos secundarios o cuando no necesitas valores de retorno.

## Paso 9: Prompts de práctica

1. Usa `forEach` para registrar `"Lesson: <title>"` por cada elemento en `const lessons = ["Intro", "Arrays", "Objects"];`.
2. Construye un nuevo arreglo de duraciones usando `map` en `const sessions = [15, 20, 30];` que sume 5 minutos de margen a cada una.
3. Filtra `const scores = [45, 72, 88, 95];` para conservar solo los puntajes `>= 70`.
4. Suma cada número en `const progress = [0.1, 0.3, 0.6];` con `reduce`.
5. Convierte `const course = { title: "Arrays", level: "beginner" };` en un arreglo de cadenas `"key: value"` usando `Object.entries` y `map`.

## Ideas clave

- ✅ Los métodos de iteración reducen el código repetitivo y clarifican la intención.
- ✅ `map`, `filter` y `reduce` crean nuevas estructuras sin mutar las originales.
- ✅ `forEach` es ideal para ejecutar efectos secundarios en cada elemento.
- ✅ Convierte objetos a arreglos con `Object.entries` para reutilizar los métodos de arreglos.

---

## 🎯 Comprobación rápida

1. ¿Cuándo preferirías `map` en lugar de `forEach`?
2. ¿Qué valor inicial deberías darle a `reduce` al sumar números?
3. ¿Cómo puedes iterar pares clave/valor en un objeto?
4. ¿Por qué encadenar métodos es tan potente para los flujos de datos?

Siguiente: une arreglos y objetos en un mini proyecto que gestione tareas. ✅

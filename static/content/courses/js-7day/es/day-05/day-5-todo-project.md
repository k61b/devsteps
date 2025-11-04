---
title: "Mini proyecto del Día 5"
description: "Construye un gestor sencillo de tareas"
type: "project"
duration: "20 min"
day: 5
order: 5
nextLesson: "what-is-dom"
---

# Mini proyecto del Día 5: Gestor de tareas

Pon en práctica lo aprendido sobre arreglos y objetos creando un rastreador simple de tareas. Almacenarás tareas en un arreglo de objetos, practicarás métodos de iteración y prepararás los datos para futuras interacciones con el DOM.

## Resumen del proyecto

Modelarás las tareas como objetos y construirás funciones auxiliares que:

- Añadan una nueva tarea
- Alternen el estado de completado
- Filtres las tareas por estado
- Resuman el progreso para mostrarlo

Al terminar tendrás una capa de datos ligera que luego puede alimentar una interfaz de usuario.

## Paso 1: Define la estructura de datos

Crea `todos.js` (o usa un REPL) y comienza con datos iniciales.

```javascript
const todos = [
  { id: 1, title: "Leer la lección de arreglos", completed: true },
  { id: 2, title: "Practicar métodos de arreglos", completed: false },
  { id: 3, title: "Redactar el plan del mini proyecto", completed: false }
];
```

- Cada tarea tiene `id`, `title` y un booleano `completed`.
- Usa identificadores secuenciales o `Date.now()` al añadir elementos nuevos.

## Paso 2: Añadir tareas

Escribe una función que reciba un título y agregue un nuevo objeto al arreglo.

```javascript
function addTodo(list, title) {
  const nextId = list.length ? list[list.length - 1].id + 1 : 1;
  const todo = { id: nextId, title, completed: false };
  list.push(todo);
  return todo;
}

addTodo(todos, "Celebrar el progreso");
```

- Devuelve la nueva tarea para que quien la llame pueda registrarla o probarla.
- Decide si mutarás el arreglo original o devolverás uno nuevo; ambas opciones funcionan si eres consistente.

## Paso 3: Alternar el estado

Busca una tarea por ID y cambia su estado `completed`.

```javascript
function toggleTodo(list, id) {
  const todo = list.find((item) => item.id === id);
  if (!todo) {
    console.warn(`No se encontró la tarea con id ${id}`);
    return;
  }
  todo.completed = !todo.completed;
  return todo;
}

toggleTodo(todos, 2);
```

- Usa `find` o `map`, según tu estilo.
- Controla IDs inexistentes para evitar errores en tiempo de ejecución.

## Paso 4: Filtrar por estado

Crea funciones auxiliares que devuelvan tareas completadas y pendientes.

```javascript
function getCompleted(list) {
  return list.filter((todo) => todo.completed);
}

function getPending(list) {
  return list.filter((todo) => !todo.completed);
}

console.log(getCompleted(todos));
console.log(getPending(todos));
```

- Filtrar devuelve arreglos nuevos, listos para encadenar más operaciones.

## Paso 5: Resumir el progreso

Usa `reduce` para calcular totales y generar un mensaje rápido.

```javascript
function summarizeTodos(list) {
  const summary = list.reduce(
    (acc, todo) => {
      acc.total += 1;
      if (todo.completed) acc.completed += 1;
      return acc;
    },
    { total: 0, completed: 0 }
  );

  const pending = summary.total - summary.completed;
  return `Completadas ${summary.completed}/${summary.total} • Pendientes ${pending}`;
}

console.log(summarizeTodos(todos));
```

- Devuelve tanto los números crudos como una cadena formateada si planeas mostrarla luego.

## Objetivos extra (opcional)

- Ordena las tareas alfabéticamente o por estado.
- Añade una función que elimine una tarea por ID.
- Implementa `searchTodos(list, query)` que devuelva coincidencias usando `filter`.
- Guarda las tareas en `localStorage` (o un archivo JSON) para practicar serialización.

## Entregables

- Un módulo JavaScript con el arreglo de tareas y las funciones auxiliares.
- Registros en consola o pruebas simples que demuestren cada función.
- Notas sobre cómo conectarías esta capa de datos con una futura interfaz basada en el DOM.

Cuando estés listo, avanza al Día 6 para llevar estos datos al navegador con manipulación real del DOM. 🌐

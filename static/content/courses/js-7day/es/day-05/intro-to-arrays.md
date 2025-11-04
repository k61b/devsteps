---
title: "Introducción a los arreglos"
description: "Trabajar con listas de datos"
type: "reading"
duration: "20 min"
day: 5
order: 1
nextLesson: "array-methods"
---

# Introducción a los arreglos

Los arreglos te permiten almacenar listas ordenadas de valores dentro de una sola variable. Son esenciales siempre que necesites gestionar colecciones: nombres de estudiantes, puntajes, tareas pendientes, respuestas de una API y mucho más. Hoy aprenderás a crear, leer y actualizar arreglos para pasar de valores sueltos a estructuras de datos flexibles.

## Paso 1: ¿Por qué importan los arreglos?

- Mantienen juntos valores relacionados en lugar de usar variables separadas.
- Conservan el orden: el primer elemento sigue siendo el primero a menos que cambies el arreglo.
- Ofrecen ayudantes integrados para añadir, eliminar y buscar elementos.

Imagina una tabla de líderes con los mejores estudiantes. Sin arreglos escribirías `const student1 = ...`, `const student2 = ...`, etc. Con arreglos los agrupas: `const students = ["Ada", "Grace", "Kayra"];`.

## Paso 2: Crear arreglos

Usa corchetes `[]` para definir un arreglo.

```javascript
const learners = ["Ada", "Grace", "Kayra"];
const levels = [1, 3, 5, 7];
const mixed = ["Trailblazer", 42, true];
```

- Los valores pueden ser cadenas, números, booleanos, objetos e incluso otros arreglos.
- Un arreglo vacío se escribe `const tasks = [];`.

## Paso 3: Acceder a elementos

Las posiciones (índices) comienzan en 0.

```javascript
const roadmap = ["Setup", "Basics", "Control Flow", "Functions"];

console.log(roadmap[0]); // "Setup"
console.log(roadmap[3]); // "Functions"
```

- Usa la notación con corchetes y el índice para leer un valor.
- Acceder a un índice inexistente devuelve `undefined`.

## Paso 4: Actualizar elementos

Asigna un nuevo valor en un índice específico.

```javascript
const status = ["To Do", "In Progress", "Review"];
status[1] = "Blocked";

console.log(status); // ["To Do", "Blocked", "Review"]
```

- Los arreglos siguen siendo mutables aunque los declares con `const`; `const` impide reasignar la variable completa, no su contenido.

## Paso 5: Añadir y quitar elementos

Los métodos más comunes manipulan el final del arreglo.

```javascript
const todos = ["Read docs", "Write notes"];

todos.push("Review");   // agrega al final
const last = todos.pop(); // quita del final

console.log(todos); // ["Read docs", "Write notes"]
console.log(last);  // "Review"
```

- `push` devuelve la nueva longitud.
- `pop` devuelve el elemento eliminado.
- Más adelante verás métodos para el inicio o el medio del arreglo.

## Paso 6: Verificar longitud y último elemento

Usa la propiedad `.length` para contar elementos.

```javascript
const modules = ["Basics", "DOM", "Async"];

console.log(modules.length);      // 3
console.log(modules[modules.length - 1]); // "Async"
```

- La longitud se actualiza automáticamente al añadir o quitar elementos.
- El último elemento siempre es `array[array.length - 1]`.

## Paso 7: Recorrer arreglos

Los bucles te permiten procesar cada elemento.

```javascript
const scores = [10, 15, 18];

for (let i = 0; i < scores.length; i++) {
  console.log(`Score ${i + 1}: ${scores[i]}`);
}

for (const score of scores) {
  console.log(`Score: ${score}`);
}
```

- El `for` tradicional te da control sobre el índice.
- `for...of` itera directamente sobre los valores.

## Paso 8: Combinar arreglos

Concatena arreglos o expándelos con el operador spread.

```javascript
const frontend = ["HTML", "CSS"];
const backend = ["Node.js", "Databases"];

const fullStack = frontend.concat(backend);
// ["HTML", "CSS", "Node.js", "Databases"]

const extended = [...frontend, "JavaScript"];
// ["HTML", "CSS", "JavaScript"]
```

- `concat` produce un nuevo arreglo sin modificar los originales.
- La sintaxis spread `...array` copia los elementos en un arreglo nuevo.

## Paso 9: Prompts de práctica

1. Crea `const mentors = ["Ada", "Grace", "Kayra"];` y lee la segunda mentora.
2. Empieza con `const tasks = [];`, usa `push` dos veces y luego quita el último elemento con `pop`.
3. Escribe un bucle `for...of` que registre cada elemento en `const badges = ["Bronze", "Silver", "Gold"];`.
4. Combina `const morning = ["Stretch", "Plan"];` y `const evening = ["Reflect", "Read"];` en una sola rutina.

## Ideas clave

- ✅ Los arreglos almacenan colecciones ordenadas en una sola variable.
- ✅ Los índices comienzan en 0; `.length` indica cuántos elementos tienes.
- ✅ `push` y `pop` añaden/eliminan desde el final—perfectos para pilas de trabajo.
- ✅ Los bucles y la sintaxis spread te ayudan a procesar y combinar arreglos rápidamente.

---

## 🎯 Comprobación rápida

1. ¿Por qué los índices de los arreglos comienzan en 0?
2. ¿Qué sucede si accedes a un índice que no existe?
3. ¿En qué se diferencia `push` de reasignar una variable de arreglo?
4. ¿Cuándo preferirías `for...of` en lugar de un `for` clásico?

Siguiente lección: profundiza en los métodos de arreglos para insertar, eliminar y transformar datos. 🧭

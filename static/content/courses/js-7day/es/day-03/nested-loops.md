---
title: "Bucles anidados"
description: "Trabajar con bucles dentro de bucles"
type: "reading"
duration: "20 min"
day: 3
order: 4
nextLesson: "day-3-practice-project"
---

# Bucles anidados

Los bucles anidados son bucles dentro de otros bucles. Permiten trabajar con pares de valores, construir cuadrículas y generar patrones: justo lo que necesitas para muchos desafíos algorítmicos. Como pueden aumentar la complejidad rápidamente, es importante mantenerlos organizados y eficientes.

## Paso 1: Estructura básica

```javascript
for (let outer = 1; outer <= 3; outer++) {
  for (let inner = 1; inner <= 2; inner++) {
    console.log(`Exterior: ${outer}, Interior: ${inner}`);
  }
}
```

- El bucle externo corre primero (`outer` de 1 a 3).
- En cada iteración del bucle externo, el interno se ejecuta por completo.
- En total se ejecuta 3 × 2 = 6 veces.

## Paso 2: Construir una cuadrícula

```javascript
const rows = 3;
const cols = 4;

for (let row = 1; row <= rows; row++) {
  let output = "";
  for (let col = 1; col <= cols; col++) {
    output += `(${row},${col}) `;
  }
  console.log(output);
}
```

Salida:
```
(1,1) (1,2) (1,3) (1,4)
(2,1) (2,2) (2,3) (2,4)
(3,1) (3,2) (3,3) (3,4)
```

Usa bucles anidados cada vez que necesites trabajar con filas y columnas, como tablas de multiplicar o tableros de ajedrez.

## Paso 3: Ejemplo de tabla de multiplicar

```javascript
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row += `${i * j}\t`; // tabulación para espaciar
  }
  console.log(row);
}
```

- El bucle interno multiplica el número de la fila por cada número de la columna.
- El carácter `\t` añade saltos de tabulación para una lectura prolija.

## Paso 4: Bucles anidados con arreglos

### Emparejar estudiantes con mentores

```javascript
const learners = ["Ada", "Grace"];
const mentors = ["Kayra", "Berk", "Tuncer"];

for (let i = 0; i < learners.length; i++) {
  for (let j = 0; j < mentors.length; j++) {
    console.log(`${learners[i]} se empareja con ${mentors[j]}`);
  }
}
```

Produce todas las combinaciones (producto cartesiano) de estudiantes y mentores.

### Comparar arreglos elemento a elemento

```javascript
const answers = ["A", "C", "B", "D"];
const userResponses = ["A", "B", "B", "D"];

let score = 0;

for (let i = 0; i < answers.length; i++) {
  if (answers[i] === userResponses[i]) {
    score++;
  }
}

console.log(`Puntaje: ${score}/${answers.length}`);
```

No siempre necesitarás bucles anidados—en ocasiones basta con uno solo. Elige la herramienta más simple que resuelva el problema.

## Paso 5: Controlar bucles anidados

`break` y `continue` solo afectan al bucle en el que están. Para salir de ambos bucles tienes varias opciones:

### Opción 1: Banderas (flags)
```javascript
let found = false;

for (let row = 0; row < 3 && !found; row++) {
  for (let col = 0; col < 3; col++) {
    if (row === 1 && col === 2) {
      console.log("¡Objetivo encontrado!");
      found = true;
      break;
    }
  }
}
```

### Opción 2: Funciones

Encierra los bucles en una función y usa `return` cuando encuentres lo que buscas:

```javascript
function findTarget(grid, target) {
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === target) {
        return { row, col };
      }
    }
  }
  return null;
}
```

### Opción 3: Etiquetas (avanzado)

JavaScript admite bucles etiquetados, pero son poco comunes y pueden reducir la legibilidad:

```javascript
outerLoop:
for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 3; col++) {
    if (row === 1 && col === 2) {
      break outerLoop;
    }
  }
}
```

Usa etiquetas con cautela y solo cuando sean realmente necesarias.

## Paso 6: Consideraciones de rendimiento

- Los bucles anidados multiplican el trabajo: si ambos corren 100 veces, tendrás 10 000 iteraciones.
- Evita cálculos costosos dentro del bucle interno si es posible.
- Busca maneras de reducir bucles anidados usando salidas tempranas (`break`) o estructuras de datos alternativas (como `Set` o `Map`) cuando sea conveniente.

## Prompts de práctica

1. Muestra un patrón de estrellas:
   ```
   *
   **
   ***
   ****
   ```
2. Dado `const matrix = [[1, 2], [3, 4], [5, 6]];`, imprime cada fila y la suma de sus valores.
3. Empareja cada estudiante con cada tema de proyecto usando dos arreglos.
4. Crea una función que compruebe si hay algún par de números en un arreglo cuya suma sea 10. Usa bucles anidados y devuelve `true` inmediatamente cuando lo encuentres.

## Ideas clave

- ✅ Los bucles anidados iteran sobre combinaciones, cuadrículas y datos en forma de matriz.
- ✅ Cada bucle interno se ejecuta por cada iteración del externo, multiplicando el tiempo de ejecución.
- ✅ El flujo de control (`break`, `continue`, `return`) ayuda a domar los bucles anidados.
- ✅ Recurre a alternativas (banderas, funciones, salidas tempranas) para mantener la legibilidad.

---

## 🎯 Comprobación rápida

1. ¿Cuántas veces se ejecuta un bucle anidado si ambos bucles iteran 10 veces?
2. ¿Cuándo preferirías usar una función con `return` en vez de un `break` etiquetado?
3. ¿Cómo puedes evitar trabajo innecesario dentro de bucles anidados?
4. Crea la salida:
   ```
   1 2 3
   1 2 3
   ```

¡Felicitaciones! Terminaste el módulo de bucles. Ahora te espera el proyecto de práctica del Día 3 para ponerlo todo en acción. 🎉

---
title: "Bucles for"
description: "Entender y usar los bucles for"
type: "reading"
duration: "25 min"
day: 3
order: 1
nextLesson: "while-loops"
---

# Bucles for

¡Bienvenido al Día 3: el día de los bucles! Los bucles permiten repetir tareas sin copiar y pegar líneas. Te ayudan a procesar listas, generar patrones y automatizar trabajo repetitivo. Hoy nos centraremos en el clásico bucle `for`, la navaja suiza de la iteración.

## Paso 1: ¿Por qué importan los bucles?

Piensa en esta tarea repetitiva:

```javascript
console.log("¡Día 1 completado!");
console.log("¡Día 2 completado!");
console.log("¡Día 3 completado!");
console.log("¡Día 4 completado!");
console.log("¡Día 5 completado!");
```

Es manejable para cinco días, ¿pero qué tal 100? Los bucles convierten secuencias repetidas en código conciso y flexible.

## Paso 2: Anatomía de un `for`

```javascript
for (let i = 0; i < 5; i++) {
  console.log(`Iteración ${i}`);
}
```

- **Inicialización (`let i = 0`)**: se ejecuta una vez al inicio.
- **Condición (`i < 5`)**: se evalúa antes de cada vuelta. Si es falsa, el bucle termina.
- **Expresión final (`i++`)**: se ejecuta después de cada iteración.
- **Cuerpo (`console.log...`)**: corre si la condición es verdadera.

`i` es un nombre común para la variable del bucle (de index), pero puedes usar cualquier nombre descriptivo.

## Paso 3: Contar hacia arriba y hacia abajo

### Contar hacia arriba

```javascript
for (let day = 1; day <= 7; day++) {
  console.log(`Día ${day}: ¡Racha de código!`);
}
```

### Contar hacia abajo

```javascript
for (let countdown = 5; countdown >= 1; countdown--) {
  console.log(`Lanzamiento en ${countdown}...`);
}
console.log("¡Despegue! 🚀");
```

Ajusta la inicialización, la condición y el incremento para controlar la dirección y el tamaño del paso.

## Paso 4: Usar arreglos con `for`

Los bucles brillan al iterar sobre arreglos:

```javascript
const lessons = ["Variables", "Operadores", "Condicionales", "Bucles"];

for (let index = 0; index < lessons.length; index++) {
  const lessonName = lessons[index];
  console.log(`Lección ${index + 1}: ${lessonName}`);
}
```

- `lessons.length` mantiene el bucle sincronizado con el tamaño del arreglo.
- Accede a cada elemento con `lessons[index]`.

## Paso 5: Pasos personalizados y saltos

Contar de dos en dos:

```javascript
for (let number = 0; number <= 10; number += 2) {
  console.log(number);
}
```

Saltar elementos:

```javascript
for (let index = 0; index < lessons.length; index += 2) {
  console.log(`Lección intercalada: ${lessons[index]}`);
}
```

## Paso 6: Break y continue (adelanto)

Profundizaremos mañana, pero aquí tienes una muestra:

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // salta el 3
  }
  if (i === 5) {
    break; // detiene el bucle
  }
  console.log(i);
}
```

- `continue` salta a la siguiente iteración.
- `break` sale completamente del bucle.

## Paso 7: Bucles anidados (vista previa)

Puedes colocar bucles dentro de otros para crear tablas o cuadrículas:

```javascript
for (let row = 1; row <= 3; row++) {
  let rowOutput = "";
  for (let col = 1; col <= 3; col++) {
    rowOutput += `(${row},${col}) `;
  }
  console.log(rowOutput);
}
```

Exploraremos los bucles anidados más adelante en el Día 3.

## Paso 8: Errores comunes

- **Bucles infinitos**: olvidar actualizar la variable del bucle crea bucles sin fin. Revisa tu incremento (`i++`).
- **Errores off-by-one**: decide si necesitas `<`, `<=`, `>` o `>=` con cuidado.
- **Reutilizar variables**: mantiene las variables del bucle con `let` para evitar reutilizarlas por accidente.

## Prompts de práctica

1. Imprime los números del 1 al 20, con un mensaje cada vez que el número sea múltiplo de 5.
2. Dado `const playlist = ["Intro", "Fundamentos", "Bucles", "Funciones"];`, registra cada pista con el formato `Pista 1: Intro`.
3. Crea la tabla de multiplicar del número 4 (de `4 x 1` a `4 x 10`).
4. Suma los números en `const scores = [5, 8, 12, 4, 6];` e imprime el total.

## Ideas clave

- ✅ Los bucles `for` repiten tareas siguiendo un patrón predecible.
- ✅ La inicialización, condición y expresión final controlan cuándo empieza, termina y avanza el bucle.
- ✅ Arreglos + bucles permiten procesar colecciones de datos con facilidad.
- ✅ Condiciones cuidadosas previenen bucles infinitos y errores de índice.

---

## 🎯 Comprobación rápida

1. ¿Cuáles son las tres partes del encabezado de un `for` y cuándo se ejecuta cada una?
2. ¿Cómo iteras desde 10 hasta 1?
3. ¿Por qué `lessons.length` es mejor que escribir un número fijo?
4. ¿Qué ocurre si olvidas incrementar la variable del bucle?

¡Excelente trabajo! Ahora vamos a explorar otros tipos de bucles (`while` y `do...while`) para ampliar tu caja de herramientas. ♻️

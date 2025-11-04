---
title: "Bucles while y do-while"
description: "Diferentes tipos de bucles y cuándo usarlos"
type: "reading"
duration: "20 min"
day: 3
order: 2
nextLesson: "loop-control"
---

# Bucles while y do-while

Los bucles `for` brillan cuando sabes exactamente cuántas veces iterar. ¿Pero qué pasa si quieres repetir hasta que ocurra algo? Ahí entran `while` y `do...while`. Repiten mientras una condición sea verdadera: perfectos para esperar la entrada de un usuario, reintentar acciones o procesar datos hasta terminarlos.

## Paso 1: Fundamentos de `while`

```javascript
let streak = 0;

while (streak < 5) {
  streak++;
  console.log(`¡Día de racha ${streak}!`);
}
```

- Comprueba la condición (`streak < 5`) antes de cada iteración.
- Si la condición es falsa al inicio, el bucle no corre.
- Asegúrate de cambiar algo dentro del bucle para que la condición deje de cumplirse; de lo contrario crearás un bucle infinito.

### Casos de uso
- Leer datos hasta llegar al final.
- Esperar a que una bandera (por ejemplo, `isLoaded`) sea verdadera.
- Ejecutar un proceso mientras una cola tenga elementos.

## Paso 2: Traducir `for` a `while`

Casi cualquier `for` se puede reescribir como `while`:

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

Esta flexibilidad es útil cuando necesitas un bucle pero el número de iteraciones no está definido de antemano.

## Paso 3: Bucle `do...while`

`do...while` garantiza que el cuerpo del bucle se ejecute al menos una vez, incluso si la condición comienza siendo falsa.

```javascript
let attempts = 0;

do {
  attempts++;
  console.log(`Intento ${attempts} registrado.`);
} while (attempts < 3);
```

- La condición se verifica después del cuerpo.
- Ideal cuando quieres ejecutar código primero y luego decidir si continúas (por ejemplo, pedir datos al usuario, lanzar un dado, reintentar una petición).

## Paso 4: Elegir entre `while` y `do...while`

| Escenario | Usa |
| -------- | --- |
| Necesitas comprobar la condición antes de ejecutar | `while` |
| El código debe ejecutarse al menos una vez | `do...while` |
| Ya sabes el número de iteraciones | `for` (aunque `while` también funciona) |

Ejemplo: pedir comentarios hasta que el usuario escriba algo

```javascript
let feedback = "";

do {
  feedback = "¡Gran lección!"; // imagina que esto proviene de la entrada del usuario
  console.log("¡Gracias por tu comentario!");
} while (!feedback);
```

## Paso 5: Evitar bucles infinitos

Actualiza siempre las variables dentro del bucle para que la condición sea falsa en algún momento.

```javascript
let energy = 3;

while (energy > 0) {
  console.log("Practicando código...");
  energy--;
}

console.log("¡Hora de un descanso! ☕");
```

- Si olvidas `energy--`, el bucle nunca termina.
- Usa salvaguardas (como `if (energy < 0) break;`) cuando trabajes con datos externos.

## Paso 6: `while` + arreglos

Puedes recorrer arreglos con `while`, especialmente cuando trabajas con colas:

```javascript
const reminders = ["Estírate", "Bebe agua", "Repasa notas"];
let index = 0;

while (index < reminders.length) {
  console.log(`Recordatorio: ${reminders[index]}`);
  index++;
}
```

O consumir elementos hasta que no quede ninguno:

```javascript
const tasks = ["Refactorizar código", "Escribir tests", "Lanzar feature"];

while (tasks.length > 0) {
  const task = tasks.shift(); // elimina el primer elemento
  console.log(`Completado: ${task}`);
}
```

## Paso 7: Ejemplo realista: cuenta regresiva con `do...while`

```javascript
let countdown = 5;

do {
  console.log(`Cuenta regresiva: ${countdown}`);
  countdown--;
} while (countdown > 0);

console.log("¡Despegue!");
```

Aunque `countdown` empezara en 0, verías al menos un registro; a veces eso es justo lo que quieres.

## Paso 8: Prompts de práctica

1. Usa un `while` para simular que ahorras monedas hasta llegar a 200. Empieza con `let savings = 0;` y suma 25 cada vez.
2. Crea un `do...while` que lance un dado (usa `Math.ceil(Math.random() * 6)`) hasta obtener un 6. Cuenta cuántos intentos tomó.
3. Dado `const messages = ["Sigue adelante", "Ya casi", "Celebra el progreso"];`, imprime cada mensaje y elimínalo del arreglo usando `shift()` hasta que quede vacío.
4. Implementa un `while` que duplique un número hasta que supere 1000. Registra cada valor intermedio.

## Ideas clave

- ✅ Los `while` repiten mientras la condición sea verdadera, comprobándola antes de cada vuelta.
- ✅ `do...while` ejecuta el cuerpo primero y luego verifica la condición.
- ✅ Actualiza las variables del bucle para evitar bucles infinitos.
- ✅ Elige el tipo de bucle que mejor se adapte: conteo conocido (`for`), repetición condicional (`while`), ejecución garantizada (`do...while`).

---

## 🎯 Comprobación rápida

1. ¿Cuándo comprueba la condición un bucle `do...while`?
2. ¿Cómo convertirías un bucle `for` en `while`?
3. ¿Por qué `while (true)` puede ser peligroso y cómo evitas bucles infinitos?
4. Describe un escenario donde `do...while` sea más adecuado que `while`.

Siguiente lección: controlar bucles con `break` y `continue` para obtener aún más precisión. 🛑➡️

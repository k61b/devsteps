---
title: "Control de bucles: break y continue"
description: "Controlar el flujo de ejecución de los bucles"
type: "reading"
duration: "15 min"
day: 3
order: 3
nextLesson: "nested-loops"
---

# Control de bucles: break y continue

Los bucles son potentes, pero la lógica del mundo real a menudo requiere omitir ciertas iteraciones o detenerse antes de tiempo. JavaScript te da dos palabras clave para controlar los bucles con precisión: `break` y `continue`. Dominar estas herramientas te ayuda a escribir bucles que reaccionen con elegancia ante condiciones cambiantes.

## Paso 1: La sentencia `break`

`break` sale del bucle inmediatamente, aunque la condición siga siendo verdadera en la siguiente iteración.

```javascript
const goals = [100, 200, 300, 400];
let total = 0;

for (let i = 0; i < goals.length; i++) {
  total += goals[i];
  if (total >= 350) {
    console.log("¡Meta alcanzada! 🎉");
    break;
  }
}

console.log(`Total contado: ${total}`);
```

- Útil cuando encuentras lo que estabas buscando.
- Evita trabajo innecesario una vez que se cumple la condición.

## Paso 2: La sentencia `continue`

`continue` salta el resto del cuerpo del bucle en la iteración actual y pasa a la siguiente vuelta.

```javascript
const streaks = [1, 2, 0, 3, 4];

for (let i = 0; i < streaks.length; i++) {
  if (streaks[i] === 0) {
    continue; // salta rachas interrumpidas
  }
  console.log(`Racha activa: ${streaks[i]} días`);
}
```

- Ideal para ignorar elementos no deseados mientras el bucle continúa.
- Mantiene el código limpio y evita `if` anidados.

## Paso 3: Combinar `break` y `continue`

```javascript
const lessons = ["Variables", "Operadores", "Condicionales", "", "Bucles"];

for (let i = 0; i < lessons.length; i++) {
  const lesson = lessons[i];

  if (!lesson) {
    continue; // salta entradas vacías
  }

  console.log(`Estudiando: ${lesson}`);

  if (lesson === "Condicionales") {
    console.log("Momento para un descanso breve 🧘‍♂️");
    break; // detén el bucle después de esta lección
  }
}
```

- Usa `continue` para filtrar datos y `break` para salir cuando hayas encontrado lo que querías.

## Paso 4: Control de bucles `while`

`break` y `continue` también funcionan dentro de los `while`.

```javascript
let number = 0;

while (number < 10) {
  number++;

  if (number % 2 === 0) {
    continue; // salta números pares
  }

  console.log(`Número impar: ${number}`);

  if (number >= 7) {
    break; // detente cuando llegues al 7 o más
  }
}
```

- Recuerda actualizar tus variables incluso cuando uses `continue`; de lo contrario puedes caer en un bucle infinito.

## Paso 5: Escenario realista: validar entradas

```javascript
const entries = ["Kayra", "", "Berk", null, "Tuncer"];
const validNames = [];

for (let i = 0; i < entries.length; i++) {
  const name = entries[i];

  if (!name) {
    continue; // omite valores vacíos o nulos
  }

  validNames.push(name);

  if (validNames.length === 3) {
    console.log("Ya tenemos suficientes nombres.");
    break;
  }
}

console.log(validNames);
```

- `continue` filtra entradas inválidas.
- `break` detiene el bucle cuando ya recopilaste suficiente información.

## Paso 6: Evita el uso excesivo

- Demasiados `break`/`continue` pueden dificultar la lectura del bucle.
- Prefiere condicionales claros cuando sea posible.
- Evita combinar `break` con bucles muy anidados a menos que sea necesario (verás alternativas en la próxima lección).

## Prompts de práctica

1. Recorre `const scores = [95, 82, 74, 88, 91];` y detente en el primer puntaje inferior a 80, mostrando el índice.
2. Filtra `const tasks = ["code", "", "review", " ", "deploy"];` en un nuevo arreglo que omita cadenas vacías o de solo espacios usando `continue`.
3. Usa un `while` que cuente desde 1, omita múltiplos de 3 y se detenga al llegar a 10.
4. Combina `break` y `continue` para procesar `const expenses = [120, -10, 80, 0, 200];`: salta números inválidos (≤ 0) y detente después de acumular al menos 250.

## Ideas clave

- ✅ `break` sale del bucle en cuanto se cumple una condición.
- ✅ `continue` salta a la siguiente iteración, manteniendo el bucle activo.
- ✅ Úsalos para optimizar bucles y enfocar la lógica.
- ✅ Cuida la legibilidad: demasiados controles pueden complicar el flujo.

---

## 🎯 Comprobación rápida

1. ¿Cuándo usarías `break` en lugar de dejar que el bucle termine solo?
2. ¿Qué ocurre justo después de ejecutar `continue`?
3. ¿Por qué debes actualizar las variables del bucle aunque uses `continue`?
4. ¿Cómo ayuda `break` a evitar cálculos innecesarios?

¡Siguiente parada: bucles anidados para construir cuadrículas, patrones y lógica más compleja! 🧩

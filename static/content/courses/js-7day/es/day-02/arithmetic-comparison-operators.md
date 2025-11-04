---
title: "Operadores aritméticos y de comparación"
description: "Trabajar con operaciones matemáticas y comparaciones"
type: "reading"
duration: "25 min"
day: 2
order: 1
nextLesson: "logical-operators"
---

# Operadores aritméticos y de comparación

¡Bienvenido al Día 2! Hoy aprenderás cómo JavaScript realiza cálculos y compara valores, los cimientos de cualquier aplicación interactiva. Usaremos ejemplos nuevos para que veas cómo las matemáticas y la lógica se combinan para darle vida a funcionalidades reales.

## Paso 1: Prepara un archivo de práctica

Crea `day2-operators.js` dentro de tu carpeta de proyecto y ejecútalo con Node.js o en la consola del navegador mientras experimentas:

```bash
node day2-operators.js
```

Actualiza y vuelve a ejecutar después de cada sección para reforzar los conceptos.

## Paso 2: Operadores aritméticos

Los operadores aritméticos manejan las operaciones básicas. Empecemos con dos números:

```javascript
const level = 3;
const bonusPoints = 120;
```

### Suma (`+`)

```javascript
const totalScore = level + bonusPoints;
console.log(`Puntaje total: ${totalScore}`); // 123
```

- Suma números.
- Cuando se usa con cadenas, concatena (une) valores: `"Hola " + "mundo"`.

### Resta (`-`)

```javascript
const pointsToNextLevel = 200 - totalScore;
console.log(pointsToNextLevel); // 77
```

### Multiplicación (`*`) y división (`/`)

```javascript
const multiplier = 2 * level; // 6
const averagePoints = bonusPoints / level; // 40
```

- La división siempre devuelve un número con decimales. Usa `Math.floor` o `Math.round` si necesitas enteros.

### Resto (`%`)

```javascript
const remainingCoins = 37 % 5; // 2
```

- Devuelve lo que sobra después de dividir.
- Ideal para comprobar si un número es par (`num % 2 === 0`) o para ciclar elementos.

### Exponenciación (`**`)

```javascript
const powerUp = 2 ** level; // 8
```

- Eleva la base (2) a la potencia `level`.
- Equivalente a `Math.pow(2, level)`.

### Incremento/Decremento (`++`, `--`)

```javascript
let streak = 1;
streak++; // streak ahora es 2
streak--; // vuelve a 1
```

- La forma posfija (`streak++`) devuelve el valor actual y luego incrementa.
- La forma prefija (`++streak`) incrementa primero y devuelve el nuevo valor.
- En la mayoría de los casos, `streak += 1` es más claro.

### Asignación compuesta

Los operadores de asignación compuesta combinan aritmética con asignación:

```javascript
let health = 100;
health += 20; // 120
health -= 15; // 105
health *= 2;  // 210
health /= 3;  // 70
```

## Paso 3: Precedencia de operadores y agrupación

JavaScript sigue el orden matemático:

1. Paréntesis
2. Exponenciación
3. Multiplicación/División/Resto
4. Suma/Resta

Cuando tengas dudas, añade paréntesis para dejar clara tu intención:

```javascript
const result = (5 + 3) * 2; // 16, no 11
```

## Paso 4: Operadores de comparación

Las comparaciones devuelven booleanos (`true` o `false`). Úsalos dentro de condicionales o para controlar el flujo de tu programa.

```javascript
const requiredPoints = 100;
const currentPoints = 123;
```

### Mayor/Menor que

```javascript
console.log(currentPoints > requiredPoints);  // true
console.log(currentPoints < requiredPoints);  // false
console.log(currentPoints >= requiredPoints); // true
console.log(currentPoints <= requiredPoints); // false
```

### Igualdad vs igualdad estricta

```javascript
const inputLevel = "3";

console.log(inputLevel == level);  // true (igualdad flexible, convierte tipos)
console.log(inputLevel === level); // false (igualdad estricta)
```

- `==` (doble igual) convierte tipos antes de comparar. Esto puede ocultar errores.
- `===` (triple igual) compara valor y tipo. Prefiérelos en código moderno.
- Lo mismo ocurre con la desigualdad: `!=` vs `!==`.

### Comparación de cadenas

Las cadenas se comparan alfabéticamente según el orden Unicode:

```javascript
console.log("apple" < "banana");  // true
console.log("JavaScript" > "Java"); // true
```

Evita depender de esto en funcionalidades para usuarios sin normalizar mayúsculas/minúsculas o la configuración regional.

## Paso 5: Combinar comparaciones con aritmética

El código real mezcla matemáticas y lógica. Aquí tienes un mini ejemplo que otorga insignias:

```javascript
const completedLessons = 5;
const targetLessons = 4;
const hasSharedProgress = false;

const earnedBadge =
  (completedLessons >= targetLessons && !hasSharedProgress)
    ? "Maestro de la racha"
    : "¡Comparte tu progreso para conseguir una insignia extra!";

console.log(earnedBadge);
```

- `&&` (AND) requiere que ambas condiciones sean verdaderas.
- `!` niega un booleano.
- El operador ternario (`condición ? valorSiVerdadero : valorSiFalso`) elige entre dos resultados.

Profundizaremos en los operadores lógicos enseguida, pero este ejemplo muestra cómo la aritmética alimenta directamente a las comparaciones.

## Paso 6: Consejos para depurar

- Usa `console.log` para inspeccionar valores intermedios antes de comparar.
- Si una comparación te sorprende, registra `typeof valor` para confirmar el tipo de dato.
- Cuidado con la precisión de los decimales: `0.1 + 0.2 === 0.3` devuelve `false`. Usa funciones como `Number.toFixed()` o compara con una tolerancia pequeña para decimales.

## Prompts de práctica

Pon estos en tu archivo de práctica:

1. Calcula el promedio de tres exámenes. Usa paréntesis para controlar el orden.
2. Determina si un número de minutos es divisible por 15. Imprime un mensaje celebratorio si lo es.
3. Con `const xp = 980; const nextLevelXp = 1000;` crea un mensaje que muestre el porcentaje de progreso (`(xp / nextLevelXp) * 100`) y si ya alcanzaste al menos el 90%.
4. Crea una variable `inputAge = "18"` y compárala con el número `18` usando `==` y `===`. Explica la diferencia en comentarios.

## Ideas clave

- ✅ Los operadores aritméticos te permiten calcular totales, diferencias, restos y potencias.
- ✅ Los operadores de comparación devuelven booleanos que impulsan la toma de decisiones.
- ✅ Usa paréntesis para aclarar el orden y evitar errores sutiles.
- ✅ Prefiere la igualdad estricta (`===`) para mantener consistencia de tipos.

---

## 🎯 Comprobación rápida

1. ¿Cuál es la diferencia entre `==` y `===`?
2. ¿Cómo calculas el resto cuando 58 se divide entre 7?
3. ¿Qué operador usarías para aumentar una variable `score` en 5 sin reescribir otra lógica?
4. ¿Cómo te aseguras de que la aritmética se ejecute antes de una comparación?

¿Todo claro? Entonces sigue con los operadores lógicos para subir de nivel tus condicionales.

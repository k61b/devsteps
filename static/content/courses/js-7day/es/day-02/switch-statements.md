---
title: "Sentencias switch"
description: "Otra forma de manejar múltiples condiciones"
type: "reading"
duration: "15 min"
day: 2
order: 4
nextLesson: "day-2-calculator-project"
---

# Sentencias switch

Las cadenas `if/else if` funcionan bien para unas pocas condiciones, pero cuando tienes muchos casos específicos basados en el mismo valor, las sentencias `switch` hacen que el código sea más limpio y legible. Hoy aprenderás a usar `switch`, en qué situaciones brilla y cuándo seguir con `if`.

## Paso 1: Estructura básica

```javascript
const level = "gold";

switch (level) {
  case "bronze":
    console.log("Beneficios de Bronze desbloqueados.");
    break;
  case "silver":
    console.log("Beneficios de Silver desbloqueados. ¡Sigue así!");
    break;
  case "gold":
    console.log("¡Beneficios de Gold desbloqueados! ✨");
    break;
  default:
    console.log("Define tu nivel de membresía para ver beneficios.");
}
```

- `switch` evalúa la expresión una sola vez (`level` en este ejemplo).
- Compara el resultado con cada `case` usando igualdad estricta (`===`).
- Cuando encuentra una coincidencia, ejecuta el código hasta encontrar un `break` o llegar al final del `switch`.
- `default` se ejecuta si no hay coincidencias.

## Paso 2: Recuerda el `break`

Sin `break`, la ejecución continúa en el siguiente caso:

```javascript
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("¡Inicio de semana!");
  case "Tuesday":
    console.log("Mantén el ritmo.");
  default:
    console.log("¡Otra oportunidad para aprender!");
}
```

Salida:
```
¡Inicio de semana!
Mantén el ritmo.
¡Otra oportunidad para aprender!
```

Para evitar caídas accidentales, agrega `break;` al final de cada caso, a menos que quieras que continúe.

## Paso 3: Caída intencional (fall-through)

A veces quieres que varios casos compartan el mismo resultado:

```javascript
const mood = "excited";

switch (mood) {
  case "happy":
  case "excited":
  case "motivated":
    console.log("¡Canaliza esa energía en tu código! 💥");
    break;
  case "tired":
    console.log("Date un descanso y toma agua.");
    break;
  default:
    console.log("Haz un chequeo contigo mismo y sigue aprendiendo.");
}
```

- Agrupa casos sin código entre ellos para que caigan al mismo bloque.

## Paso 4: Usar expresiones en los casos

Los `case` se evalúan una sola vez en tiempo de compilación. Para comprobaciones dinámicas, es mejor usar `if`. Aun así, puedes mezclar lógica dentro del bloque:

```javascript
const points = 87;

switch (true) {
  case points >= 100:
    console.log("¡Nivel elite desbloqueado!");
    break;
  case points >= 80:
    console.log("¡Gran progreso, casi elite!");
    break;
  default:
    console.log("Sigue sumando puntos.");
}
```

- Aquí, `switch (true)` permite que cada `case` evalúe una expresión booleana. Úsalo con moderación; un `if/else if` tradicional suele ser más claro.

## Paso 5: Comparar `if` vs `switch`

Usa `switch` cuando:
- Estás comprobando el mismo valor contra muchas posibilidades.
- Los casos son discretos y descriptivos (cadenas, números, enumeraciones).
- Quieres una lista ordenada de resultados sin repetir `if (...) { ... } else if (...) { ... }`.

Quédate con `if/else` cuando:
- Las condiciones dependen de expresiones o rangos distintos.
- Necesitas lógica compleja en las condiciones.
- Dependes de comparaciones mayor/menor o lógica compuesta (`x > 10 && y < 5`).

Ejemplo de un `switch` conciso:

```javascript
const command = "share";

switch (command) {
  case "start":
    console.log("Lección iniciada.");
    break;
  case "pause":
    console.log("Lección en pausa.");
    break;
  case "share":
    console.log("¡Progreso compartido con tus amigos!");
    break;
  default:
    console.log("Comando desconocido.");
}
```

## Paso 6: Prompts de práctica

1. Crea un `switch` para `const language = "tr";` que imprima un saludo en inglés, turco o español. Usa `default` para idiomas no compatibles.
2. Agrupa varios casos: `const dayType = "weekend";` donde `"saturday"` y `"sunday"` compartan el mismo bloque.
3. Usa `switch(true)` para clasificar `const minutes = 52;` como `"Sesión corta"`, `"Bloque enfocado"` o `"Programador maratón"` según rangos.
4. Compara la legibilidad de tu solución con un `if/else if` equivalente. ¿Cuál prefieres y por qué?

## Ideas clave

- ✅ `switch` es ideal para elegir entre muchas opciones fijas basadas en el mismo valor.
- ✅ Incluye `break` siempre, a menos que quieras caer al siguiente caso.
- ✅ Agrupa casos para manejar resultados compartidos sin duplicar código.
- ✅ `if/else` sigue siendo mejor para rangos y condiciones complejas.

---

## 🎯 Comprobación rápida

1. ¿Qué pasa si olvidas el `break` en un caso de `switch`?
2. ¿Cómo manejas varios casos que comparten el mismo resultado?
3. ¿Cuándo puede ser útil `switch(true)`?
4. Menciona un escenario donde `if/else` sea más apropiado que `switch`.

¡Perfecto! Ahora prepárate para aplicar operadores y condicionales en el proyecto de la calculadora del Día 2. 🧮

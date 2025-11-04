---
title: "Valores de retorno"
description: "Obtener resultados de las funciones"
type: "reading"
duration: "20 min"
day: 4
order: 3
nextLesson: "arrow-functions"
---

# Valores de retorno

Las funciones no solo ejecutan acciones; también pueden producir resultados. Los valores de retorno permiten que una función entregue datos al resto del programa. Dominar los retornos es esencial para encadenar cálculos, componer funciones y construir aplicaciones escalables.

## Paso 1: `return` básico

```javascript
function double(number) {
  return number * 2;
}

const result = double(5);
console.log(result); // 10
```

- `return` envía un valor de vuelta a quien llamó la función.
- El valor retornado puede almacenarse, registrarse o pasarse a otra función.

## Paso 2: Salida temprana

Una vez que una función encuentra `return`, deja de ejecutarse.

```javascript
function describeStreak(days) {
  if (days >= 7) {
    return "¡Racha legendaria!";
  }

  return "Sigue adelante.";
}

console.log(describeStreak(10)); // "¡Racha legendaria!"
console.log(describeStreak(3));  // "Sigue adelante."
```

Aunque haya más código después de `return`, no se ejecutará. Usa esto para simplificar condicionales.

## Paso 3: Múltiples retornos

Puedes devolver desde ramas distintas: la primera sentencia `return` que se encuentre termina la función.

```javascript
function getBadgeColor(level) {
  if (level >= 5) {
    return "gold";
  } else if (level >= 3) {
    return "silver";
  }
  return "bronze";
}
```

- Cada rama devuelve una cadena.
- Asegúrate de que todos los caminos devuelvan algo significativo.

## Paso 4: Devolver tipos complejos

Devuelve objetos o arreglos para agrupar varios datos.

```javascript
function buildLessonSummary(day, topic) {
  return {
    day,
    topic,
    completed: false,
    createdAt: new Date().toISOString()
  };
}

const summary = buildLessonSummary(4, "Valores de retorno");
console.log(summary.topic); // "Valores de retorno"
```

- Retornar objetos mantiene la información agrupada con sentido.
- Devuelve arreglos cuando el orden es importante; objetos cuando importan las etiquetas.

## Paso 5: Devolver funciones (adelanto)

Las funciones pueden devolver otras funciones. Esto es la base de las closures y patrones avanzados.

```javascript
function createCheer(prefix) {
  return function(name) {
    console.log(`${prefix} ${name}!`);
  };
}

const cheer = createCheer("You rock");
cheer("Kayra"); // "You rock Kayra!"
```

Explorarás las closures más adelante, pero entiende que `return` no se limita a valores primitivos.

## Paso 6: Guard clauses con `return`

Las guard clauses comprueban entradas inválidas y salen temprano.

```javascript
function calculateBoost(points) {
  if (points < 0) {
    return "Los puntos no pueden ser negativos.";
  }

  return points * 1.2;
}
```

- Las guard clauses claras facilitan la lectura de las funciones.
- Evitan anidamientos innecesarios.

## Paso 7: `return` vs `console.log`

- `return` entrega datos al llamador.
- `console.log` solo imprime en consola.

```javascript
function getGreeting(name) {
  return `Hola, ${name}!`;
}

const greeting = getGreeting("Elif");
console.log(greeting);
```

Si solo registras dentro de la función, no podrás reutilizar el resultado. Devolver valores te da flexibilidad.

## Paso 8: Retornos implícitos (adelanto)

Las declaraciones de función requieren `return` explícito. Más adelante, con las funciones flecha, verás retornos implícitos:

```javascript
const doubleArrow = (number) => number * 2;
```

Por ahora, mantente con `return` explícitos en las declaraciones.

## Paso 9: Prompts de práctica

1. Escribe `function milesToKilometers(miles)` que devuelva el valor convertido (1 milla ≈ 1.60934 km). Registra el resultado al llamarla con `5`.
2. Crea `function buildProfile(name, points)` que devuelva un objeto con `name`, `points` y `status` (`"pro"` si points ≥ 100, de lo contrario `"newbie"`).
3. Implementa `function chooseMotivation(completed)` que devuelva `"Celebrate your win!"` o `"Set a tiny goal and try again."`.
4. Extiende `function calculateAverage(scores)` para validar la entrada (debe ser un arreglo con longitud > 0) y devolver el promedio. Usa una guard clause para entradas inválidas.

## Ideas clave

- ✅ `return` proporciona datos a quien llama y detiene la ejecución de la función.
- ✅ Todos los caminos del código deberían devolver valores con sentido o indicar explícitamente que no devuelven nada.
- ✅ Devuelve objetos o arreglos para empaquetar información relacionada.
- ✅ Las guard clauses con `return` mantienen las funciones limpias y resilientes.

---

## 🎯 Comprobación rápida

1. ¿Qué le ocurre al código después de una sentencia `return`?
2. ¿Cómo puedes devolver múltiples valores desde una función?
3. ¿Por qué devolver datos es más flexible que registrar dentro de la función?
4. ¿Qué debes hacer si una función recibe entradas inválidas pero debe devolver algo?

Siguiente parada: funciones flecha, la sintaxis moderna para escribir funciones concisas con comportamientos implícitos. ⚡

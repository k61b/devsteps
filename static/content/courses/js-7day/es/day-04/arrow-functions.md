---
title: "Funciones flecha"
description: "Sintaxis moderna ES6 para funciones flecha"
type: "reading"
duration: "25 min"
day: 4
order: 4
nextLesson: "scope-closures"
---

# Funciones flecha

Las funciones flecha, introducidas en ES6, ofrecen una sintaxis concisa para escribir funciones. Brillan en utilidades pequeñas, callbacks y escenarios donde quieres preservar el contexto `this` circundante. Hoy las compararás con las declaraciones tradicionales y aprenderás cuándo usar cada una.

## Paso 1: Sintaxis básica

Expresión de función tradicional:

```javascript
const double = function (number) {
  return number * 2;
};
```

Equivalente con función flecha:

```javascript
const double = (number) => {
  return number * 2;
};
```

- Desaparece la palabra clave `function`.
- Los parámetros van antes de la flecha (`=>`).
- El cuerpo de la función se mantiene igual.

## Paso 2: Retorno implícito

Si el cuerpo de la función es una sola expresión, puedes omitir las llaves y `return`.

```javascript
const double = (number) => number * 2;
```

- La expresión después de la flecha se convierte en el valor retornado.
- Solo funciona con expresiones simples (sin sentencias adicionales).

## Paso 3: Variaciones de parámetros

- Cero parámetros: usa paréntesis vacíos.
  ```javascript
  const getTimestamp = () => Date.now();
  ```
- Un parámetro: los paréntesis son opcionales (pero mantenlos para consistencia).
  ```javascript
  const cheer = (name) => `¡Sigue así, ${name}!`;
  ```
- Varios parámetros: los paréntesis son obligatorios.
  ```javascript
  const sum = (a, b, c) => a + b + c;
  ```

## Paso 4: Funciones flecha como callbacks

Son excelentes como callbacks inline:

```javascript
const learners = ["Ada", "Grace", "Kayra"];

learners.forEach((name, index) => {
  console.log(`${index + 1}. ${name}`);
});
```

- La sintaxis corta mantiene los callbacks legibles.
- Evita tener que nombrar funciones temporales que solo usarás una vez.

## Paso 5: Comportamiento de `this`

Las funciones flecha **no** tienen su propio `this`. Capturan el `this` del ámbito donde fueron creadas.

```javascript
const tracker = {
  total: 0,
  add(points) {
    setTimeout(() => {
      this.total += points;
      console.log(`Total: ${this.total}`);
    }, 100);
  }
};

tracker.add(10);
```

- Dentro de la función flecha, `this` se refiere a `tracker`.
- Las funciones tradicionales tendrían su propio `this` y requerirían `.bind(this)` o guardar `const self = this`.

## Paso 6: Cuándo **no** usar funciones flecha

- Como métodos de objetos que dependen de su propio `this`.
  ```javascript
  const progress = {
    total: 0,
    add(points) {
      this.total += points; // necesita su propio this
    }
  };
  ```
- Como constructores (con `new`). Las funciones flecha no se pueden usar con `new`.
- Cuando necesitas el objeto `arguments` (las funciones flecha no lo tienen).

## Paso 7: Funciones flecha multilínea

Usa llaves y `return` para lógica de varias líneas:

```javascript
const buildSummary = (day, topic) => {
  const status = day >= 4 ? "Advanced" : "Getting started";
  return `${topic} - ${status}`;
};
```

- Una vez que añades llaves, debes `return` el valor manualmente.

## Paso 8: Combinar con parámetros por defecto y rest

Las funciones flecha funcionan con todas las características aprendidas:

```javascript
const assignBadge = (name = "Trailblazer", ...levels) => {
  const highest = Math.max(...levels);
  return `${name} alcanzó el nivel ${highest}`;
};

console.log(assignBadge("Kayra", 2, 3, 4));
```

- Los parámetros por defecto proporcionan valores de respaldo.
- Los parámetros rest agrupan argumentos adicionales en un arreglo.

## Paso 9: Prompts de práctica

1. Convierte `function square(n) { return n * n; }` a una función flecha con retorno implícito.
2. Crea `const buildGreeting = (name, role = "learner") => ...` que devuelva un saludo personalizado.
3. Usa `setTimeout` con una función flecha que registre `"¡Hora de un descanso!"` después de 500 ms.
4. Escribe `const totalProgress = (numbers) => numbers.reduce((sum, value) => sum + value, 0);` y pruébalo con `[5, 10, 15]`.

## Ideas clave

- ✅ Las funciones flecha ofrecen una sintaxis abreviada ideal para funciones pequeñas y callbacks.
- ✅ Los retornos implícitos mantienen expresiones simples y limpias.
- ✅ Las funciones flecha heredan `this` del entorno, útil en muchos escenarios asíncronos.
- ✅ No son ideales para métodos que necesitan su propio `this`, constructores o situaciones donde se requiera `arguments`.

---

## 🎯 Comprobación rápida

1. ¿En qué difieren las funciones flecha de las tradicionales en el manejo de `this`?
2. ¿Cuándo puedes usar retornos implícitos?
3. ¿Por qué las funciones flecha no pueden usarse como constructores?
4. Convierte una función flecha de dos parámetros para que use valores por defecto y retorno implícito.

Próxima lección: comprender el alcance y las closures para gestionar variables entre funciones. 🧠

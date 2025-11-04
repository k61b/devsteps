---
title: "Parámetros y argumentos de funciones"
description: "Pasar datos a las funciones"
type: "reading"
duration: "25 min"
day: 4
order: 2
nextLesson: "return-values"
---

# Parámetros y argumentos de funciones

Las declaraciones de funciones se vuelven realmente poderosas cuando aceptan datos. Los parámetros permiten que tus funciones se comporten de forma dinámica, respondiendo a la información que les pases. Hoy aprenderás a definir parámetros, llamar funciones con argumentos, establecer valores por defecto y manejar múltiples entradas con elegancia.

## Paso 1: Parámetros vs argumentos

- **Parámetros**: los nombres que colocas en la definición de la función.
- **Argumentos**: los valores reales que pasas cuando llamas a la función.

```javascript
function greetLearner(name) {
  console.log(`¡Bienvenido, ${name}!`);
}

greetLearner("Kayra"); // "Kayra" es el argumento
greetLearner("Berk");
```

Aquí `name` es un parámetro. `"Kayra"` y `"Berk"` son argumentos suministrados en cada llamada.

## Paso 2: Múltiples parámetros

Separa los parámetros con comas:

```javascript
function logProgress(day, topic) {
  console.log(`Día ${day}: ¡${topic} dominado!`);
}

logProgress(4, "Funciones");
logProgress(5, "Arreglos");
```

- El orden importa. El primer argumento se asigna al primer parámetro, y así sucesivamente.
- Usa nombres de parámetros descriptivos para mayor claridad.

## Paso 3: Trabajar con distintos tipos

Los parámetros aceptan cualquier tipo de dato: números, cadenas, booleanos, arreglos, objetos e incluso otras funciones.

```javascript
function cheer(name, completed) {
  if (completed) {
    console.log(`👏 ¡Gran trabajo, ${name}!`);
  } else {
    console.log(`⏳ Sigue adelante, ${name}! Estás cerca.`);
  }
}

cheer("Tuncer", true);
cheer("Zeynep", false);
```

- Los booleanos ayudan a que las funciones tomen decisiones limpias.
- Las cadenas y los números se combinan fácilmente con plantillas literales.

## Paso 4: Parámetros con valores por defecto

Proporciona valores alternativos cuando falten argumentos:

```javascript
function assignBadge(name = "Trailblazer", level = 1) {
  console.log(`${name} obtuvo la insignia nivel ${level}!`);
}

assignBadge("Kayra", 4);
assignBadge(); // usa los valores por defecto
```

- Los valores por defecto evitan que aparezca `undefined` en la salida.
- Coloca los parámetros con defecto al final la mayoría de las veces.

## Paso 5: Validar entradas

Protege tus funciones de valores inesperados:

```javascript
function calculateScore(points) {
  if (typeof points !== "number") {
    console.log("Por favor, proporciona un número.");
    return;
  }

  console.log(`Puntaje: ${points * 10}`);
}

calculateScore(8);    // 80
calculateScore("A");  // mensaje de validación
```

- Los retornos tempranos (`return;`) detienen la función si los datos no son válidos.
- Las comprobaciones de entrada son esenciales en aplicaciones reales.

## Paso 6: Parámetros rest (adelanto)

Los parámetros rest agrupan múltiples argumentos en un arreglo:

```javascript
function celebrateAll(...names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`🎉 ¡Felicidades, ${names[i]}!`);
  }
}

celebrateAll("Ayşe", "Mert", "Nilay");
```

- La sintaxis `...names` empaqueta cualquier cantidad de argumentos.
- Profundizaremos en rest/spread en lecciones futuras, pero es útil saber qué es posible.

## Paso 7: Pasar funciones como argumentos (adelanto)

Las funciones son ciudadanos de primera clase en JavaScript. Puedes pasarlas como argumentos para callbacks:

```javascript
function celebrate(name, notifier) {
  notifier(`${name} logró su objetivo.`);
}

function notifyConsole(message) {
  console.log(message);
}

celebrate("Elif", notifyConsole);
```

Aprenderás más sobre callbacks más adelante, pero ten presente que los parámetros también pueden ser otras funciones.

## Paso 8: Simular argumentos con nombre

JavaScript no admite argumentos con nombre de forma nativa, pero puedes pasar objetos:

```javascript
function scheduleSession({ day, topic, duration }) {
  console.log(`Día ${day}: ${topic} durante ${duration} minutos.`);
}

scheduleSession({
  day: 4,
  topic: "Parámetros de funciones",
  duration: 25
});
```

- Usar un objeto hace que el orden sea indiferente.
- También auto documenta qué valor corresponde a cada parámetro.

## Paso 9: Prompts de práctica

1. Escribe `function sendReminder(name, task)` que registre `"Hey name, no olvides task!"`.
2. Agrega parámetros con valores por defecto: si `task` falta, usa `"repasar bucles"`.
3. Crea `function addProgress(progressList, newItem)` que inserte `newItem` en un arreglo y registre la nueva longitud. Valida que `progressList` sea un arreglo.
4. Usa parámetros rest: `function totalPoints(...points)` que sume cualquier cantidad de argumentos numéricos y registre el resultado. Omite entradas inválidas con una validación dentro del bucle.

## Ideas clave

- ✅ Los parámetros definen las entradas esperadas; los argumentos proporcionan los datos reales.
- ✅ Las funciones pueden aceptar múltiples parámetros de cualquier tipo, incluidas otras funciones.
- ✅ Los valores por defecto hacen que las funciones sean más resilientes.
- ✅ La validación y los parámetros rest aumentan la flexibilidad y la seguridad.

---

## 🎯 Comprobación rápida

1. ¿Cuál es la diferencia entre un parámetro y un argumento?
2. ¿Cómo ayudan los parámetros por defecto en el diseño de funciones?
3. ¿Cuándo usarías parámetros rest?
4. ¿Cómo pueden los objetos simular argumentos con nombre?

Siguiente lección: capturar valores de retorno para que tus funciones produzcan datos y alimenten a otras. 🔁

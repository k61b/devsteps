---
title: "Proyecto del Día 2 - Calculadora feliz"
description: "Construye una calculadora usando operadores y condicionales"
type: "project"
duration: "30 min"
day: 2
order: 5
nextLesson: "for-loops"
---

# Desafío del Día 2: Calculadora de números felices

¡Hora de celebrar tus nuevas habilidades con operadores! En este mini proyecto crearás una calculadora alegre que realiza operaciones básicas y responde con mensajes positivos. Practicarás operadores aritméticos, comparaciones, pensamiento lógico y sentencias `if/else`.

## 🎯 Objetivo del proyecto

Crea una función que reciba dos números y una operación (`+`, `-`, `*`, `/`, `%`, `**`) y devuelva el resultado **junto con** un mensaje positivo y fácil de entender.

Ejemplo de salida:

```
➕ ¡Fiesta de sumas!
Resultado: 12
Mensaje: "¡Magia matemática! 7 más 5 es igual a 12. ¡Mantén la racha!"
```

## 📋 Lista de requisitos

1. Aceptar dos números y un símbolo de operación.
2. Manejar suma, resta, multiplicación, división, resto y exponenciación.
3. Evitar divisiones entre cero con un recordatorio amistoso.
4. Devolver el resultado numérico.
5. Registrar un mensaje motivador específico para cada operación.

## 🛠️ Plan paso a paso

### 1. Prepara tu archivo

Crea `happy-calculator.js` y define tus entradas:

```javascript
const num1 = 7;
const num2 = 5;
const operation = "+";
```

### 2. Construye la lógica principal

Encapsula la calculadora en una función reutilizable:

```javascript
function happyCalculator(a, b, op) {
  let result;
  let message;

  if (op === "+") {
    result = a + b;
    message = `¡Magia matemática! ${a} más ${b} es ${result}. ¡Mantén la racha!`;
  }
  // Agrega más ramas para -, *, /, %, **

  return { result, message };
}
```

### 3. Maneja casos especiales

- Si la operación es división y `b` es `0`, devuelve una advertencia amable en lugar de fallar.
- Si el símbolo no está soportado, informa qué símbolos sí lo están.

### 4. Imprime el resultado

```javascript
const output = happyCalculator(num1, num2, operation);

if (output.error) {
  console.log(output.error);
} else {
  console.log(`Operación: ${operation}`);
  console.log(`Resultado: ${output.result}`);
  console.log(`Mensaje: "${output.message}"`);
}
```

## 🌈 Retos extra

1. **Modo emoji:** agrega un emoji único para cada operación (`+` → `➕`, `*` → `✖️`, etc.).
2. **Historial:** guarda cada cálculo en un arreglo y muestra un resumen al final.
3. **Halago aleatorio:** crea un arreglo de cumplidos y elige uno con `Math.random()`.
4. **Validación de entrada:** comprueba que `a` y `b` sean números. Pide al usuario intentarlo de nuevo si no lo son.

## 💡 Consejos

- Usa `switch` si prefieres una forma ordenada de emparejar operaciones.
- `Math.pow(a, b)` es equivalente a `a ** b` si la exponenciación es nueva para ti.
- Las plantillas literales facilitan personalizar el mensaje.
- Empieza simple y añade estilo cuando la lógica base funcione.

## ✅ Solución de ejemplo

Prueba el proyecto primero. Cuando estés listo, compáralo con este enfoque:

<details>
<summary>Ver una posible solución</summary>

```javascript
function happyCalculator(a, b, op) {
  if (typeof a !== "number" || typeof b !== "number") {
    return { error: "Por favor usa solo números. ¡A las calculadoras les encantan los números!" };
  }

  const compliments = [
    "Los números se inclinan ante ti.",
    "¡Estás programando con confianza!",
    "¡Este cálculo desborda alegría!"
  ];
  const compliment = compliments[Math.floor(Math.random() * compliments.length)];

  let result;
  let message;
  let emoji;

  switch (op) {
    case "+":
      result = a + b;
      emoji = "➕";
      message = `${compliment} ${a} más ${b} es ${result}.`;
      break;
    case "-":
      result = a - b;
      emoji = "➖";
      message = `${compliment} ${a} menos ${b} deja ${result}.`;
      break;
    case "*":
      result = a * b;
      emoji = "✖️";
      message = `${compliment} ${a} por ${b} es ${result}. ¡Multiplica la energía!`;
      break;
    case "/":
      if (b === 0) {
        return { error: "¿División por cero? Mejor otro número. 🚫" };
      }
      result = a / b;
      emoji = "➗";
      message = `${compliment} ${a} dividido por ${b} es ${result}.`;
      break;
    case "%":
      result = a % b;
      emoji = "🧮";
      message = `${compliment} El residuo de ${a} % ${b} es ${result}.`;
      break;
    case "**":
      result = a ** b;
      emoji = "⚡";
      message = `${compliment} ${a} elevado a ${b} es ${result}. ¡Electrizante!`;
      break;
    default:
      return {
        error: "Operación no soportada. Prueba con +, -, *, /, % o **."
      };
  }

  return { emoji, result, message };
}

const calculations = [
  happyCalculator(7, 5, "+"),
  happyCalculator(10, 3, "-"),
  happyCalculator(4, 4, "*"),
  happyCalculator(9, 3, "/")
];

calculations.forEach((calc) => {
  if (calc.error) {
    console.log(calc.error);
  } else {
    console.log(`${calc.emoji} Resultado: ${calc.result} — ${calc.message}`);
  }
});
```

</details>

## 🚀 Comparte tus logros

- Publica una captura de tu salida favorita en la comunidad DevSteps.
- Rétate a ti mismo: ¿puedes convertir esto en una herramienta de línea de comandos que acepte entradas del usuario?
- ¡Celébralo! Acabas de combinar aritmética, comparaciones y condicionales en un programa real.

Nos vemos en el Día 3 con el mundo de los bucles. 🔁

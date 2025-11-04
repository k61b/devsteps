---
title: "Ejercicios del Día 1"
description: "Practica lo aprendido con desafíos prácticos"
type: "exercise"
duration: "30 min"
day: 1
order: 5
nextLesson: "arithmetic-comparison-operators"
---

# Práctica del Día 1: Construye tu escuadrón de ánimos

Celebremos lo que has aprendido escribiendo código que te anime. Cada mini desafío refuerza variables, cadenas y tipos de datos mientras produce mensajes motivadores.

> Abre un archivo nuevo llamado `day1-practice.js` dentro de la carpeta del curso. Ejecuta cada sección en Node.js o en la consola del navegador y disfruta de la energía positiva.

## Desafío 1: Mensaje de ánimo personal

Crea un mensaje personalizado usando variables:

```javascript
const firstName = "Jordan";
const favoriteSnack = "galletas con chispas de chocolate";
const energyLevel = 9; // escala del 1 al 10

console.log(
  `¡Hola ${firstName}! Con una energía de ${energyLevel}/10 y un arsenal de ${favoriteSnack}, ¡nada te detiene hoy!`
);
```

**Prueba esto:**
- Cambia los valores y vuelve a ejecutar.
- Convierte `energyLevel` a cadena con `` `Energía: ${String(energyLevel)}` ``.
- Usa `typeof` para confirmar el tipo de cada variable.

## Desafío 2: Generador de cumplidos

Guarda una lista de cumplidos y elige uno para compartir:

```javascript
const compliments = [
  "Tu código está más limpio que la nieve recién caída ❄️",
  "Estás depurando como una persona experta 🕵️‍♀️",
  "Cada línea que escribes enciende alegría ✨"
];

const randomIndex = Math.floor(Math.random() * compliments.length);
const randomCompliment = compliments[randomIndex];

console.log(`Cumplido del momento: ${randomCompliment}`);
```

**Prueba esto:**
- Añade más cumplidos al arreglo.
- Usa `Array.isArray(compliments)` para confirmar que trabajas con un arreglo.
- Cambia `randomIndex` para elegir un cumplido específico (como `0` o `2`) y verifica la salida.

## Desafío 3: Boletín de progreso

Combina booleanos, números y cadenas para crear un mensaje de estado amistoso:

```javascript
const lessonsCompleted = 4;
const practicedToday = true;
const minutesSpent = 95;

const message = practicedToday
  ? `¡Hoy completaste ${lessonsCompleted} lecciones! Tiempo total de enfoque: ${minutesSpent} minutos. 🎉`
  : "Tómate un descanso y vuelve cuando estés listo. ¡Creemos en ti! 💪";

console.log(message);
```

**Prueba esto:**
- Cambia `practicedToday` a `false` y observa el recordatorio motivador.
- Convierte `minutesSpent` a horas usando `(minutesSpent / 60).toFixed(1)`.
- Registra los tipos de cada variable con `typeof`.

## Desafío 4: Mezclador de estado de ánimo con emojis

Usa el tipado dinámico para remezclar tu estado de ánimo como texto y como emoji:

```javascript
let mood = "curioso";
let emoji = "🧠";

console.log(`Chequeo de ánimo: me siento ${mood} ${emoji}`);

// Cambia el mood
mood = 10; // escala del 1 al 10
emoji = ["🚀", "🎯", "🌟"];

console.log(`Nivel de ánimo: ${mood}/10`);
console.log(`Elige un emoji: ${emoji.join(" ")}`);
console.log(`¿emoji es un arreglo? ${Array.isArray(emoji)}`);
```

**Prueba esto:**
- Sustituye `emoji` por una cadena simple y nota cómo se comporta `.join()`.
- Convierte el número `mood` a cadena con `String(mood)`.
- Usa `Boolean("")` o `Boolean("DevSteps")` para ver cómo funcionan los valores truthy/falsy.

## Objetivo extra: muro de gratitud

Crea un objeto para registrar aquello por lo que estás agradecido hoy:

```javascript
const gratitudeWall = {
  wins: ["Terminé las lecciones del Día 1", "Entendí las variables"],
  supporters: ["Comunidad DevSteps", "Mi yo del futuro"],
  mantra: "¡Sigue adelante, futuro dev!"
};

console.log("Muro de gratitud 🧱");
console.log(`Logros: ${gratitudeWall.wins.join(", ")}`);
console.log(`Aliados: ${gratitudeWall.supporters.join(" y ")}`);
console.log(`Mantra: ${gratitudeWall.mantra}`);
```

Añade tus propios elementos a cada arreglo o crea nuevas propiedades como `cancionParaDescansar`. ¡Hazlo tuyo!

---

## 🎯 Resumen rápido

- ✅ Las variables pueden almacenar cualquier cosa: cadenas, números, arreglos u objetos.
- ✅ El azar y las plantillas literales hacen que tus salidas sean más divertidas.
- ✅ Practicar con tipos de datos afianza lo aprendido más rápido que memorizar teoría.

Guarda tu archivo: podrás volver a estos ejercicios cada vez que necesites motivación. ¿Listo para el Día 2? ¡Toca operadores y comparaciones! 🚀

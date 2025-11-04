---
title: "Proyecto de práctica del Día 3 - Aventura de bucles"
description: "Crea paneles y patrones impulsados por bucles para reforzar for, while y bucles anidados"
type: "project"
duration: "40 min"
day: 3
order: 5
nextLesson: "function-declarations"
---

# Proyecto de práctica del Día 3: Aventura de bucles

Ya exploraste los bucles `for`, `while` y los anidados—ahora es momento de usarlos en un proyecto alegre. Construirás un pequeño panel denominado “Loop Adventure” que celebra el progreso, imprime patrones y calcula estadísticas usando solo bucles.

> Crea un archivo llamado `loop-adventure.js` en tu carpeta del curso. Ejecútalo con Node.js (`node loop-adventure.js`) mientras completas cada sección.

## 🎯 Visión general del proyecto

Tu programa producirá tres secciones:

1. **Progress Tracker** – muestra logros diarios con bucles `for`.
2. **Motivation Meter** – calcula estadísticas usando bucles `while`.
3. **Pattern Playground** – dibuja formas animadas con bucles anidados.

Si quieres, adorna la salida con emojis, separadores o colores usando una librería como `chalk` (opcional).

---

## 1) Progress Tracker (bucles for)

- Usa un bucle `for` para registrar cada día de una racha de 7 días.
- Añade un mensaje de celebración cada vez que el número del día sea múltiplo de 3.
- Guarda los mensajes en un arreglo para poder imprimirlos de nuevo más tarde si quieres.

```javascript
console.log("=== Progress Tracker ===");

const streakMessages = [];

for (let day = 1; day <= 7; day++) {
  let message = `Día ${day}: ¡Código completado!`;
  if (day % 3 === 0) {
    message += " 🎉 ¡Día de hito!";
  }
  console.log(message);
  streakMessages.push(message);
}
```

**Extra**: Invierte el arreglo con un bucle e imprime los mensajes del más reciente al más antiguo.

---

## 2) Motivation Meter (while + do-while)

- Comienza con `let motivation = 100;`.
- Usa un `while` para simular sesiones de práctica que reducen la motivación en 17 puntos cada vez.
- Detente cuando la motivación llegue a 0 o menos, registrando cada paso.
- Después del bucle, usa un `do...while` para simular “cargas de energía” que recarguen 25 puntos hasta alcanzar al menos 80.

```javascript
console.log("\n=== Motivation Meter ===");

let motivation = 100;

while (motivation > 0) {
  console.log(`Motivación en ${motivation}. ¡Sigue así!`);
  motivation -= 17;
}

console.log("Motivación agotada. ¡Hora de recargar! ☕");

do {
  motivation += 25;
  console.log(`Carga extra: motivación en ${motivation}`);
} while (motivation < 80);

console.log(`¡Listo para aprender de nuevo con ${motivation} de motivación!`);
```

**Extra**: Lleva la cuenta de cuántas recargas usaste y resúmelo al final.

---

## 3) Pattern Playground (bucles anidados)

Crea dos secciones de patrones:

### A) Escalera de estrellas

Usa bucles anidados para imprimir:
```
★
★★
★★★
★★★★
★★★★★
```

### B) Cuadrícula de progreso

Genera una cuadrícula de 3 × 4 con coordenadas, similar a:
```
(1,1) (1,2) (1,3) (1,4)
(2,1) (2,2) (2,3) (2,4)
(3,1) (3,2) (3,3) (3,4)
```

```javascript
console.log("\n=== Pattern Playground ===");

// Escalera de estrellas
for (let row = 1; row <= 5; row++) {
  let stars = "";
  for (let col = 1; col <= row; col++) {
    stars += "★";
  }
  console.log(stars);
}

console.log("\nMapa de la aventura:");

const rows = 3;
const cols = 4;

for (let r = 1; r <= rows; r++) {
  let line = "";
  for (let c = 1; c <= cols; c++) {
    line += `(${r},${c}) `;
  }
  console.log(line);
}
```

**Extra**: Reemplaza las coordenadas con etiquetas personalizadas o resalta una “casilla tesoro” usando un `if` dentro del bucle anidado.

---

## 🌈 Ideas adicionales

1. **Cumplidos cíclicos**: guarda frases positivas en un arreglo y usa un bucle para imprimir un cumplido aleatorio después de cada sección.
2. **Resumen de estadísticas**: calcula el total de estrellas impresas, días registrados o recargas usadas.
3. **Modo interactivo**: acepta argumentos de línea de comandos (con `process.argv`) para cambiar la longitud de la racha o el tamaño de la cuadrícula.
4. **Toque de color** (opcional): usa una librería como `chalk` para colorear secciones distintas.

---

## ✅ Lista de verificación final

- Los bucles `for` gestionan los días de la racha y el orden inverso.
- `while` y `do...while` manejan los niveles de motivación con salidas seguras.
- Los bucles anidados generan la escalera de estrellas y la cuadrícula.
- Intentaste al menos un objetivo extra (opcional pero recomendado).

Comparte tu salida con la comunidad o con un amigo—¡la energía positiva se contagia! Mañana cambiamos de ritmo para hablar de funciones y empezar a organizar la lógica como profesionales. 💪✨

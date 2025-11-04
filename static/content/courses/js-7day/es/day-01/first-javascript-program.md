---
title: "Tu primer programa en JavaScript"
description: "Escribe y ejecuta tu primer código JavaScript"
type: "reading"
duration: "25 min"
day: 1
order: 3
nextLesson: "variables-and-data-types"
---

# Tu primer programa en JavaScript

¡Hora de escribir código real! En esta lección crearás tu primer programa en JavaScript, lo ejecutarás tanto en el navegador como en Node.js y aprenderás a detectar y corregir errores sencillos.

## Paso 1: Crea una carpeta para el proyecto

Mantener cada mini proyecto en su propia carpeta te ayudará a mantener el orden. Desde la terminal:

```bash
cd devsteps-js
mkdir hello-world
cd hello-world
```

Luego abre la carpeta en VS Code (`code .` en macOS/Linux o desde el Explorador en Windows). Abrir la carpeta completa permite que VS Code entienda la estructura del proyecto, recuerde archivos recientes y ejecute comandos relativos a esa carpeta.

## Paso 2: Crea `app.js`

Dentro de la carpeta agrega un archivo llamado `app.js`. La extensión `.js` indica que el archivo contiene JavaScript. Escribe el siguiente código:

```javascript
// app.js
console.log("¡Bienvenido a JavaScript!");
```

`console.log` es una función integrada que imprime texto o valores. Los desarrolladores la usamos constantemente para entender qué hace el código, revisar el valor de variables o dejar notas temporales al depurar. Verás cómo funciona en los siguientes pasos.

## Paso 3: Ejecuta código en el navegador

Los navegadores ejecutan JavaScript cuando lo incluyes en una página HTML. HTML aporta la estructura y la etiqueta `<script>` le dice al navegador que cargue y ejecute código JavaScript.

- Crea un archivo llamado `index.html` en la misma carpeta.
- Pega este HTML inicial:

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Hola JavaScript</title>
  </head>
  <body>
    <h1>¡Hola desde el navegador!</h1>
    <script src="./app.js"></script>
  </body>
</html>
```

- Abre `index.html` en tu navegador (haz doble clic o usa la extensión Live Server de VS Code).
- Abre DevTools (`Ctrl+Shift+I` / `Cmd+Option+I`) y haz clic en la pestaña **Console**. La consola es como una terminal integrada en el navegador: cada `console.log` aparece aquí y también puedes ejecutar JavaScript de forma interactiva.

Deberías ver `¡Bienvenido a JavaScript!` impreso en la consola. Cada vez que recargues la página el script se ejecutará de nuevo. Si dudas si el código se ejecutó, revisa primero esta consola.

## Paso 4: Ejecuta código con Node.js

El mismo archivo `app.js` puede ejecutarse directamente en Node.js desde la terminal. Node.js permite que JavaScript acceda a tu computadora (archivos, red, etc.) en lugar de al navegador, lo que lo hace ideal para herramientas y código del lado del servidor.

```bash
node app.js
```

Verás el mismo mensaje impreso. Es el mismo lenguaje JavaScript, solo que ejecutándose en un entorno distinto. En Node.js no existen el DOM ni las APIs del navegador, pero sí módulos que interactúan con tu sistema operativo.

> Prueba cambiar el mensaje en `app.js`, guarda el archivo y vuelve a ejecutar `node app.js`. Ver resultados inmediatos te ayudará a desarrollar un ciclo ágil de editar → ejecutar → verificar.

## Paso 5: Añade una variable y lógica básica

Actualiza tu archivo para almacenar datos y tomar decisiones:

```javascript
const learnerName = "Jordan";
const completedLesson = true;

if (completedLesson) {
  console.log(`¡Gran trabajo, ${learnerName}! Estás listo para el siguiente paso.`);
} else {
  console.log(`Hola ${learnerName}, termina la lección antes de continuar.`);
}
```

Fíjate en la plantilla de texto con backticks (`` ` ``), que permite insertar variables con `${ }`.

Ejecuta el archivo de nuevo en el navegador y en Node.js para ver la salida. Cambia `completedLesson` a `false`, o reemplaza `const` con `let` para ver que ambos funcionan (aunque preferimos `const` cuando los valores no cambian).

## Paso 6: Depura errores comunes

¡Los errores ocurren! Entender el mensaje es la forma más rápida de solucionarlos.

### Lee el stack trace
Cuando JavaScript encuentra un error detiene la ejecución y muestra un stack trace. La última línea suele indicar el archivo y número de línea. Haz clic para saltar directamente al problema en VS Code o DevTools.

### Errores frecuentes para principiantes
- **Sin comillas**: `console.log(Bienvenido);` → SyntaxError porque las cadenas necesitan comillas (`"Bienvenido"` o `'Bienvenido'`).
- **Paréntesis o llaves desparejados**: cada `(` necesita `)` y cada `{` necesita `}`. Los editores resaltan las parejas, aprovéchalo.
- **Mayúsculas/minúsculas**: `Console.log` es diferente de `console.log`. JavaScript distingue entre letras mayúsculas y minúsculas.
- **Archivos sin guardar**: si nada cambia, asegúrate de haber guardado el archivo y de ejecutar la ruta correcta (Node mostrará un error si el nombre no existe).
- **Errores en los nombres de archivo**: en la mayoría de sistemas `App.js` no es lo mismo que `app.js`.

Practica leer el error línea por línea. Pronto reconocerás patrones, y ningún desarrollador está libre de typos: ¡corregirlos es parte del trabajo!

## Paso 7: Explora la consola

En DevTools puedes ejecutar JavaScript directamente. Es un espacio seguro para probar ideas antes de guardarlas en tus archivos.

```javascript
2 + 2;
Math.random();
console.log("¡Probando desde DevTools!");
```

También puedes acceder a variables de la página actual (por ejemplo, escribir `learnerName` tras ejecutar el script). Esto resulta muy útil para inspeccionar el estado sin modificar el código.

## Ideas clave

- ✅ JavaScript se ejecuta tanto en navegadores como en Node.js, con diferencias menores de entorno.
- ✅ `console.log` es la forma más rápida de inspeccionar valores y seguir el flujo del programa.
- ✅ Las variables y `if/else` permiten construir lógica incluso en programas pequeños reaccionando a datos.
- ✅ Los errores son normales: lee el stack trace, identifica la línea y corrige un problema a la vez.

---

## 🎯 Comprobación rápida

1. ¿Qué etiqueta HTML carga un archivo JavaScript externo y por qué suele colocarse al final del `body` en demos simples?
2. ¿Cómo ejecutas `app.js` con Node.js y qué diferencias de entorno deberías esperar respecto al navegador?
3. ¿Qué mensaje aparece si `completedLesson` es `false` y cómo podrías modificar la lógica para soportar más de dos resultados?
4. Nombra un error común, interpreta el stack trace y explica cómo lo solucionarías.

¿Listo con estas respuestas? ¡Entonces puedes continuar con variables y tipos de datos!

---

Repasemos las piezas nuevas:

- `const` crea una variable que no puede reasignarse. Úsala cuando la referencia deba permanecer igual.
- `"Jordan"` es una cadena de texto.
- `true` es un valor booleano. JavaScript solo tiene dos booleanos: `true` y `false`.
- La instrucción `if` comprueba una condición. Si es verdadera, ejecuta el primer bloque; de lo contrario, el bloque `else`. Solo se ejecuta una rama.
- Las plantillas literales (texto entre backticks) te permiten insertar variables como `${learnerName}` sin concatenar con `+`.

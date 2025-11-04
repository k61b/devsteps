---
title: "Manejo de eventos"
description: "Responder a las interacciones del usuario"
type: "reading"
duration: "30 min"
day: 6
order: 4
nextLesson: "day-6-gallery-project"
---

# Manejo de eventos

Los eventos conectan las acciones del usuario—clics, pulsaciones de teclas, desplazamientos—con tu lógica en JavaScript. Hoy aprenderás a añadir y quitar listeners, acceder a los datos del evento, controlar la propagación y hacer que tu interfaz sea reactiva.

## Paso 1: Añadir listeners de eventos

```javascript
const button = document.querySelector(".cta");

button.addEventListener("click", () => {
  console.log("¡Botón pulsado!");
});
```

- `addEventListener` recibe el tipo de evento, el callback y opciones opcionales.
- Evita los atributos `onclick` en el HTML; los listeners mantienen separado el marcado y la lógica.

## Paso 2: Usar el objeto evento

```javascript
button.addEventListener("click", (event) => {
  console.log(event.type); // "click"
  console.log(event.target); // elemento que disparó el evento
});
```

- El objeto evento transporta metadatos como coordenadas, códigos de teclas y modificadores.
- Usa `event.target` para acceder al elemento que activó el listener.

## Paso 3: Evitar el comportamiento predeterminado

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Bloqueamos el envío mientras validamos.");
});
```

- `preventDefault()` detiene la acción por defecto del navegador (navegar con un enlace, enviar formularios, etc.).
- Llámalo cuando necesites manejar la lógica manualmente antes de permitir el comportamiento original.

## Paso 4: Propagación de eventos

- Los eventos se propagan desde el objetivo hasta los ancestros (`target → parent → document`).
- También admiten captura (de arriba abajo) si pasas `{ capture: true }`.

```javascript
document.body.addEventListener("click", () => {
  console.log("Se hizo click en el body");
});
```

- Usa la propagación para manejar muchos elementos hijos con un solo listener.

## Paso 5: Patrón de delegación

```javascript
const list = document.querySelector(".task-list");

list.addEventListener("click", (event) => {
  const item = event.target.closest("li");
  if (!item) return;
  item.classList.toggle("done");
});
```

- Escucha en un elemento padre y actúa sobre los hijos que coinciden.
- Ideal para listas dinámicas donde se añaden o eliminan elementos.

## Paso 6: Eliminar listeners

```javascript
function handleClick() {
  console.log("Click registrado una vez");
  button.removeEventListener("click", handleClick);
}

button.addEventListener("click", handleClick);
```

- Usa funciones nombradas para poder quitarlas más tarde.
- Eliminar listeners evita fugas de memoria en componentes que viven mucho tiempo.

## Paso 7: Eventos de teclado y entrada

```javascript
const input = document.querySelector("#search");

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    console.log(`Buscando ${input.value}`);
  }
});
```

- Consulta `event.key`, `event.code` o modificadores (`event.shiftKey`).
- Usa eventos `input` o `change` para reaccionar a actualizaciones de valores.

## Paso 8: Opciones `passive` y `once`

```javascript
window.addEventListener(
  "scroll",
  () => {
    // actualiza la sombra del header
  },
  { passive: true }
);

button.addEventListener(
  "click",
  () => console.log("Solo se dispara una vez"),
  { once: true }
);
```

- `passive: true` indica que el listener no llamará a `preventDefault`; mejora el rendimiento de scroll.
- `once: true` elimina automáticamente el listener tras la primera ejecución.

## Paso 9: Prompts de práctica

1. Añade un listener de clic a un botón que active/desactive la clase `"visible"` en un modal.
2. Usa delegación en `.todo-list` para que al hacer clic en cualquier `<li>` se alterne `"completed"`.
3. Bloquea el envío de un formulario hasta que un input tenga al menos tres caracteres; muestra un mensaje de error.
4. Implementa un manejador `keydown` que cierre un diálogo cuando se pulse `Escape`.
5. Escucha eventos de `scroll` y añade la clase `"scrolled"` al header cuando el desplazamiento supere los 80 px.

## Ideas clave

- ✅ `addEventListener` es la forma estándar de conectar eventos con la lógica.
- ✅ Los objetos evento ofrecen contexto como elementos objetivo y detalles de teclas.
- ✅ La propagación habilita la delegación; detenla con `stopPropagation()` cuando sea necesario.
- ✅ Opciones como `once` y `passive` afinan el rendimiento y el ciclo de vida.

---

## 🎯 Comprobación rápida

1. ¿Por qué se prefiere `addEventListener` frente a atributos de eventos en línea?
2. ¿Cómo reduce la delegación de eventos la cantidad de listeners en una página?
3. ¿Cuándo llamarías a `event.preventDefault()`?
4. ¿Qué hacen las opciones de listener `once` y `passive`?

Próxima lección: aplica todo lo aprendido para construir una galería interactiva. 🖼️

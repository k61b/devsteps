---
title: "¿Qué es el DOM?"
description: "Entender el Document Object Model"
type: "reading"
duration: "15 min"
day: 6
order: 1
nextLesson: "selecting-elements"
---

# ¿Qué es el DOM?

El Document Object Model (DOM) es la interfaz viva entre tu código JavaScript y la página HTML. Representa cada elemento como un nodo en un árbol, permitiéndote inspeccionar y manipular contenido, estructura y estilo en tiempo de ejecución.

## Paso 1: Del HTML al DOM

- El navegador descarga el HTML, lo analiza y construye un árbol de nodos.
- Cada etiqueta se convierte en un nodo de elemento; el texto dentro de las etiquetas se convierte en nodos de texto.
- JavaScript interactúa con este árbol, no con la cadena HTML cruda.

Visualiza un archivo simple:

```html
<body>
  <h1>Hello</h1>
  <p>Welcome to Day 6!</p>
</body>
```

El DOM lo convierte en una estructura jerárquica con `body` en la raíz, seguido de los hijos `h1` y `p`, y nodos de texto dentro de cada elemento.

## Paso 2: Nodos del DOM

- **Nodo document**: punto de entrada (`document` en JavaScript).
- **Nodos de elemento**: elementos HTML como `<div>` o `<button>`.
- **Nodos de texto**: el contenido textual dentro de los elementos.
- **Nodos de atributo**: metadatos como `class` o `id`.

Comprender los tipos de nodos te ayuda a saber qué propiedades y métodos están disponibles.

## Paso 3: Acceder al DOM

Puedes consultar el DOM usando selectores y propiedades:

```javascript
const heading = document.querySelector("h1");
console.log(heading.textContent); // "Hello"
```

- `document` está disponible globalmente en el navegador.
- Diferentes métodos (`querySelector`, `getElementById`, etc.) ofrecen distintas formas de encontrar elementos—lo verás en la próxima lección.

## Paso 4: Vivo vs. estático

- El DOM se actualiza cuando se añade, elimina o modifica HTML o CSS.
- Tus cambios en JavaScript se reflejan inmediatamente en la página renderizada.
- Herramientas como DevTools muestran este árbol vivo; editar nodos ahí modifica la página al instante.

## Paso 5: Relación DOM y JavaScript

- JavaScript lee propiedades (`textContent`, `className`, `style`) para conocer el estado actual.
- Escribe en esas propiedades o llama métodos (`append`, `remove`) para cambiar la página.
- Los listeners de eventos conectan las acciones del usuario con tu código, habilitando la interactividad.

## Paso 6: Errores comunes

- Olvidar que el DOM solo existe en entornos de navegador (Node.js no lo tiene por defecto).
- Ejecutar scripts antes de que el DOM esté listo—envuelve el código en `DOMContentLoaded` o coloca los scripts al final de `<body>`.
- Mezclar manipulación del DOM con renderizado en servidor sin entender la hidratación.

## Paso 7: Prompts de práctica

1. Abre DevTools en cualquier sitio y observa el panel Elements; identifica la estructura del árbol del DOM.
2. En la consola, ejecuta `document.body` y explora sus propiedades.
3. Crea una página HTML pequeña y registra `document.title`, `document.URL` y `document.links.length`.
4. Prueba `document.body.append("Hello DOM");` para ver actualizaciones en vivo.

## Ideas clave

- ✅ El DOM es la representación basada en objetos que el navegador hace de tu HTML.
- ✅ JavaScript usa el árbol del DOM para leer y modificar el contenido de la página.
- ✅ Los tipos de nodos (document, elemento, texto, atributo) determinan las propiedades y métodos disponibles.
- ✅ Entender el DOM es la base para interfaces dinámicas e interactivas.

---

## 🎯 Comprobación rápida

1. ¿Cómo convierte el navegador el HTML en DOM?
2. ¿Cuál es la diferencia entre un nodo de elemento y uno de texto?
3. ¿Por qué tu JavaScript podría fallar si se ejecuta antes de que el DOM esté listo?
4. ¿Cómo puede ayudarte DevTools a entender la estructura del DOM?

Próxima lección: aprende a seleccionar elementos específicos para empezar a manipularlos. 🎯

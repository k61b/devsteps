---
title: "Proyecto interactivo del Día 6"
description: "Crea una galería de fotos interactiva"
type: "project"
duration: "20 min"
day: 6
order: 5
nextLesson: "project-planning"
---

# Proyecto del Día 6: Galería de fotos interactiva

Combina la selección del DOM, la actualización de elementos y el manejo de eventos para construir una galería ligera. Renderizarás miniaturas, mostrarás una imagen destacada y conectarás controles para que las personas puedan explorar la colección.

## Resumen del proyecto

Tu galería debería:

- Mostrar una imagen destacada con título y descripción.
- Renderizar miniaturas clicables a partir de un arreglo de objetos de fotos.
- Permitir navegación con botones o atajos de teclado (`ArrowLeft`/`ArrowRight`).
- Indicar qué miniatura está activa en ese momento.

Como extras, puedes animar transiciones o precargar imágenes para cambios más suaves.

## Paso 1: Planifica los datos

Crea `gallery-data.js` (o inclúyelo en un `<script>`) con fotos de ejemplo.

```javascript
export const photos = [
  {
    id: 1,
    src: "images/mountain.jpg",
    alt: "Sunrise over the mountains",
    title: "Mountain Sunrise",
    description: "Golden hour lighting up the ridge line."
  },
  {
    id: 2,
    src: "images/forest.jpg",
    alt: "Sunlight in a green forest",
    title: "Forest Walk",
    description: "Filtered light through towering pines."
  }
  // añade al menos 4 fotos en total
];
```

- Usa imágenes reales o marcadores de lugar como `https://picsum.photos/`.
- Asegúrate de que cada objeto incluya metadatos suficientes para el área destacada.

## Paso 2: Estructura el HTML

Prepara el marcado donde JavaScript se enganchará.

```html
<section class="gallery">
  <div class="featured">
    <img class="featured-image" alt="" />
    <div class="details">
      <h2 class="featured-title"></h2>
      <p class="featured-description"></p>
    </div>
  </div>

  <div class="controls">
    <button class="prev">Previo</button>
    <button class="next">Siguiente</button>
  </div>

  <ul class="thumbnails"></ul>
</section>
```

- Mantén las clases descriptivas; las usarás en JavaScript.
- Estilízalo con CSS como necesites (layouts flex o grid funcionan bien).

## Paso 3: Renderiza las miniaturas

Selecciona la lista `.thumbnails` y rellénala a partir del arreglo.

```javascript
const thumbnails = document.querySelector(".thumbnails");

function renderThumbnails(items) {
  thumbnails.innerHTML = "";
  items.forEach((photo, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <button class="thumb" data-index="${index}">
        <img src="${photo.src}" alt="${photo.alt}" />
      </button>
    `;
    thumbnails.append(li);
  });
}

renderThumbnails(photos);
```

- Guarda el índice (o ID) en cada botón para localizar la foto con facilidad.
- Añade la clase `"active"` cuando la miniatura coincida con la foto destacada.

## Paso 4: Actualiza el área destacada

Crea una función que reciba un índice y actualice la vista principal.

```javascript
const featuredImage = document.querySelector(".featured-image");
const featuredTitle = document.querySelector(".featured-title");
const featuredDescription = document.querySelector(".featured-description");

let currentIndex = 0;

function showPhoto(index) {
  const photo = photos[index];
  if (!photo) return;

  featuredImage.src = photo.src;
  featuredImage.alt = photo.alt;
  featuredTitle.textContent = photo.title;
  featuredDescription.textContent = photo.description;
  currentIndex = index;
  highlightThumbnail(index);
}
```

- Llama a `showPhoto(0)` tras renderizar para inicializar la galería.
- Implementa `highlightThumbnail` para alternar la clase `"active"`.

## Paso 5: Conecta los controles

### Clics en miniaturas

```javascript
thumbnails.addEventListener("click", (event) => {
  const button = event.target.closest("button.thumb");
  if (!button) return;
  const index = Number(button.dataset.index);
  showPhoto(index);
});
```

### Botones anterior/siguiente

```javascript
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

prevButton.addEventListener("click", () => {
  const nextIndex = (currentIndex - 1 + photos.length) % photos.length;
  showPhoto(nextIndex);
});

nextButton.addEventListener("click", () => {
  const nextIndex = (currentIndex + 1) % photos.length;
  showPhoto(nextIndex);
});
```

### Atajos de teclado (opcional)

```javascript
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") prevButton.click();
  if (event.key === "ArrowRight") nextButton.click();
});
```

- Reutiliza las mismas funciones para que cada interacción dispare la misma lógica de actualización.

## Paso 6: Resaltar la miniatura activa

```javascript
function highlightThumbnail(activeIndex) {
  document
    .querySelectorAll(".thumb")
    .forEach((button, index) => {
      button.classList.toggle("active", index === activeIndex);
    });
}
```

- Combínalo con CSS para indicar qué foto está seleccionada (borde, cambio de opacidad, etc.).

## Objetivos extra (opcional)

- Anima transiciones o desvanecimientos cuando la imagen cambie.
- Añade un contador de leyenda como `"Foto 2 de 6"`.
- Precarga la foto siguiente/anterior para evitar parpadeos.
- Crea un modo auto-reproducción con `setInterval`.

## Entregables

- Un conjunto HTML/CSS/JS (o un único archivo HTML) que implemente la galería interactiva.
- JavaScript que renderice miniaturas, actualice la imagen destacada y maneje la interacción del usuario.
- Notas o comentarios sobre cómo integrarías datos reales de una API en el futuro.

Cuando estés satisfecho, avanza al Día 7 para diseñar y construir el plan del proyecto final. 🚀

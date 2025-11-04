---
title: "Day 6 Interactive Project"
description: "Create an interactive photo gallery"
type: "project"
duration: "20 min"
day: 6
order: 5
nextLesson: "project-planning"
---

# Day 6 Project: Interactive Photo Gallery

Combine DOM selection, element updates, and event handling to build a lightweight gallery. You’ll render a set of thumbnails, display a featured image, and wire up controls so learners can explore the collection.

## Project Overview

Your gallery should:

- Display a featured image with title/description.
- Render clickable thumbnails sourced from an array of photo objects.
- Allow navigation via buttons or keyboard shortcuts (`ArrowLeft`/`ArrowRight`).
- Indicate which thumbnail is currently active.

Stretch ideas include animating transitions or preloading images for smoother swaps.

## Step 1: Plan the Data

Create `gallery-data.js` (or embed inside a script tag) with sample photos.

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
  // add at least 4 photos total
];
```

- Use real images or placeholders from services like `https://picsum.photos/`.
- Ensure each object includes enough metadata for the featured area.

## Step 2: Structure the HTML

Prepare the markup where JavaScript will hook in.

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
    <button class="prev">Previous</button>
    <button class="next">Next</button>
  </div>

  <ul class="thumbnails"></ul>
</section>
```

- Keep classes descriptive—you’ll target them in JavaScript.
- Style with CSS as needed (grid/flex layouts work well).

## Step 3: Render Thumbnails

Select the `.thumbnails` list and populate it based on the photo array.

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

- Store the array index (or ID) on each button for easy lookup.
- Add an `"active"` class when the thumbnail matches the featured photo.

## Step 4: Update the Featured Area

Create a function that accepts an index and updates the main view.

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

- Call `showPhoto(0)` after rendering to initialize the gallery.
- Implement `highlightThumbnail` to toggle `"active"` classes.

## Step 5: Wire Up Controls

### Thumbnail Clicks

```javascript
thumbnails.addEventListener("click", (event) => {
  const button = event.target.closest("button.thumb");
  if (!button) return;
  const index = Number(button.dataset.index);
  showPhoto(index);
});
```

### Previous/Next Buttons

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

### Keyboard Shortcuts (Optional)

```javascript
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") prevButton.click();
  if (event.key === "ArrowRight") nextButton.click();
});
```

- Use modular functions so each interaction path reuses the same update logic.

## Step 6: Highlight Active Thumbnail

```javascript
function highlightThumbnail(activeIndex) {
  document
    .querySelectorAll(".thumb")
    .forEach((button, index) => {
      button.classList.toggle("active", index === activeIndex);
    });
}
```

- Combine with CSS to visually indicate the selected photo (border, opacity change, etc.).

## Stretch Goals (Optional)

- Animate fades or slides when switching images.
- Add a caption counter like `"Photo 2 of 6"`.
- Preload the next/previous image to avoid flicker.
- Support an autoplay mode with `setInterval`.

## Deliverables

- An HTML/CSS/JS trio (or single HTML file) implementing the interactive gallery.
- JavaScript that renders thumbnails, updates the featured image, and handles user input.
- Notes or comments describing how you’d integrate data from a real API in the future.

When you’re satisfied, continue to Day 7 to design and build the final project plan. 🚀

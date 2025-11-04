---
title: "Implementar la lógica en JavaScript"
description: "Dar vida a tu aplicación"
type: "reading"
duration: "45 min"
day: 7
order: 3
nextLesson: "testing-debugging"
---

# Implementar la lógica en JavaScript

Ya planificaste y construiste la interfaz; ahora conecta los puntos con JavaScript. La sesión de hoy reúne todo lo aprendido: estructuras de datos, manipulación del DOM, manejo de eventos y persistencia.

## Paso 1: Inicializa el estado

- Importa o define tu modelo de datos (tareas, objetivos, entradas).
- Establece variables de estado (`const state = { tasks: [], filters: {} }`).
- Inserta datos de ejemplo para que la UI se renderice de inmediato.

```javascript
const state = {
  tasks: [
    { id: crypto.randomUUID(), title: "Escribir outline del proyecto", done: false },
    { id: crypto.randomUUID(), title: "Diseñar componentes UI", done: true }
  ],
  filter: "all"
};
```

## Paso 2: Referencia los hooks del DOM

- Almacena selectores de las secciones que actualizarás con frecuencia.
- Usa constantes descriptivas para evitar llamadas repetitivas a `querySelector`.

```javascript
const taskList = document.querySelector("[data-role='task-list']");
const taskTemplate = document.querySelector("#task-template");
const summary = document.querySelector("[data-role='summary']");
```

## Paso 3: Funciones de renderizado

Crea funciones reutilizables que rendericen partes de la UI según el estado.

```javascript
function renderTasks() {
  taskList.innerHTML = "";

  const filtered = state.tasks.filter((task) => {
    if (state.filter === "completed") return task.done;
    if (state.filter === "active") return !task.done;
    return true;
  });

  filtered.forEach((task) => {
    const li = taskTemplate.content.cloneNode(true);
    const item = li.querySelector(".task");
    item.dataset.id = task.id;
    li.querySelector(".task-title").textContent = task.title;
    li.querySelector(".task-toggle").checked = task.done;
    taskList.append(li);
  });
}
```

- Mantén el renderizado puro: lee del estado, actualiza el DOM, sin efectos secundarios adicionales.

## Paso 4: Vincula manejadores de eventos

- Formularios para crear elementos.
- Eventos de clic/alternar para actualizar el estado.
- Delegación para listas dinámicas.

```javascript
const form = document.querySelector("[data-role='task-form']");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const title = formData.get("title").trim();
  if (!title) return;

  state.tasks.push({
    id: crypto.randomUUID(),
    title,
    done: false
  });

  form.reset();
  sync();
});

taskList.addEventListener("change", (event) => {
  const toggle = event.target.closest(".task-toggle");
  if (!toggle) return;
  const id = toggle.closest(".task").dataset.id;
  const task = state.tasks.find((item) => item.id === id);
  if (!task) return;
  task.done = toggle.checked;
  sync();
});
```

- Canaliza todas las modificaciones a través de una única función `sync()` para mantener las actualizaciones consistentes.

## Paso 5: Datos derivados y resúmenes

Calcula métricas de progreso cada vez que el estado cambia.

```javascript
function renderSummary() {
  const total = state.tasks.length;
  const completed = state.tasks.filter((task) => task.done).length;
  summary.textContent = `Completadas ${completed}/${total}`;
}
```

- Llama al renderizado del resumen dentro de `sync()` junto con otras actualizaciones.

## Paso 6: Persistencia (opcional pero potente)

Usa `localStorage` para guardar y restaurar el estado.

```javascript
const STORAGE_KEY = "momentum-tracker";

function load() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;
  Object.assign(state, JSON.parse(saved));
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function sync() {
  renderTasks();
  renderSummary();
  save();
}

load();
sync();
```

- Controla errores de parseo y esquemas desactualizados.

## Paso 7: Gestiona filtros y vistas

- Añade botones o selects para alternar filtros.
- Actualiza `state.filter` y llama a `sync()` para volver a renderizar.
- Resalta el filtro activo en la UI.

```javascript
document.querySelectorAll("[data-role='filter']").forEach((button) => {
  button.addEventListener("click", () => {
    state.filter = button.dataset.filter;
    document
      .querySelectorAll("[data-role='filter']")
      .forEach((btn) => btn.classList.toggle("active", btn === button));
    sync();
  });
});
```

## Paso 8: Pulir y probar

- Prueba la navegación con teclado (orden de tabulador, Enter/Espacio).
- Valida estados vacíos, entradas extremas, clics rápidos.
- Asegúrate de que el estado persista al recargar si implementaste almacenamiento.
- Corrige cualquier advertencia o error en la consola antes de mostrar el proyecto.

## Paso 9: Prepara la demo

- Prepara un recorrido corto que explique el problema, las funcionalidades principales y las interacciones destacadas.
- Captura screenshots o GIF si no puedes presentar en vivo.
- Anota objetivos extra que abordarías con más tiempo.

## Ideas clave

- ✅ Centraliza el estado y la lógica de renderizado para mantener el código predecible.
- ✅ Reutiliza patrones de selección, renderizado y eventos de los días anteriores.
- ✅ La persistencia eleva el proyecto—`localStorage` es una victoria rápida.
- ✅ Una experiencia pulida requiere probar interacciones y accesibilidad.

---

## 🎯 Comprobación rápida

1. ¿Dónde almacenas el estado de tu app y cómo lo actualizas?
2. ¿Cómo mantiene tu función `sync()` alineados el estado y la UI?
3. ¿Qué estrategia de persistencia elegiste, si alguna?
4. ¿Qué flujos de usuario mostrarás durante la presentación final?

¡Felicidades por llegar al último día! Celebra tu progreso y comparte lo que construiste. 🎉

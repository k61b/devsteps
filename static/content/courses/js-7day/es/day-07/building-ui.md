---
title: "Construir la interfaz de usuario"
description: "Crear la estructura HTML y CSS"
type: "reading"
duration: "30 min"
day: 7
order: 2
nextLesson: "implementing-logic"
---

# Construir la interfaz de usuario

Con tu plan listo, es momento de transformar los bocetos en una interfaz real. El enfoque de hoy es la estructura HTML, el layout y los componentes reutilizables para que la capa de JavaScript de mañana encaje sin problemas.

## Paso 1: Configura el layout base

- Crea el archivo HTML raíz (o componente Svelte) de tu app.
- Incluye hojas de estilo globales, fuentes o librerías de íconos necesarias.
- Define contenedores principales—header, navegación, contenido, footer—según el plan de ayer.

```html
<body>
  <header class="app-header">
    <h1>Momentum Tracker</h1>
    <button class="theme-toggle">🌗</button>
  </header>

  <main class="layout">
    <aside class="sidebar"></aside>
    <section class="content"></section>
  </main>
</body>
```

## Paso 2: Construye las secciones clave

- Rellena placeholders para cada funcionalidad (lista de tareas, panel de estadísticas, notas, etc.).
- Usa elementos semánticos (`section`, `article`, `form`) para mantener la accesibilidad.
- Añade clases descriptivas que coincidan con tu estrategia de CSS.

```html
<section class="task-board" aria-labelledby="tasks-heading">
  <div class="board-header">
    <h2 id="tasks-heading">Tareas de hoy</h2>
    <button class="add-task">+ Nueva tarea</button>
  </div>
  <ul class="task-list"></ul>
</section>
```

## Paso 3: Diseña componentes reutilizables

- Identifica tarjetas, insignias, botones o elementos de lista que se repiten.
- Construye fragmentos HTML mínimos y estilízalos una sola vez.
- Considera usar utilidades (Tailwind) o nomenclatura BEM según tu stack.

```html
<li class="card card--task">
  <header class="card__header">
    <h3 class="card__title">Enviar outline del curso</h3>
    <span class="badge badge--priority">Alta</span>
  </header>
  <p class="card__meta">Vence hoy · 3 subtareas</p>
</li>
```

## Paso 4: Aplica layouts responsivos

- Usa CSS Grid o Flexbox para columnas y alineaciones.
- Define breakpoints para un diseño mobile-first (por ejemplo, una sola columna bajo 768 px).
- Prueba los layouts redimensionando el navegador o con el modo dispositivo de DevTools.

```css
.layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
}

@media (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr;
  }
  .sidebar {
    order: 2;
  }
}
```

## Paso 5: Añade jerarquía visual

- Establece una escala tipográfica (ej.: `h1` ~32px, `h2` ~24px, cuerpo ~16px).
- Define tokens de espaciado para márgenes/padding coherentes.
- Elige una paleta de colores y asegúrate de mantener buen contraste.

Documenta estas decisiones en comentarios o en una sección de design tokens.

## Paso 6: Prepara estados de interacción

- Estiliza los estados hover/focus de botones y enlaces.
- Usa `:focus-visible` para outlines accesibles.
- Incluye estados vacíos y placeholders de carga donde aparecerán datos.

```css
.add-task {
  border: none;
  background: var(--accent);
  color: #fff;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  transition: transform 0.15s ease;
}

.add-task:hover,
.add-task:focus-visible {
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.25);
}
```

## Paso 7: Documenta hooks para JavaScript

- Añade atributos `data-*` o clases que los scripts consultarán (`data-role="task-list"`).
- Mantén la nomenclatura consistente para referenciar elementos fácilmente mañana.
- Opcionalmente, añade comentarios indicando el comportamiento esperado.

```html
<form class="task-form" data-role="task-form">
  <label for="task-title">Nombre de la tarea</label>
  <input id="task-title" name="title" placeholder="Lanzar campaña de email" />
  <button type="submit">Añadir tarea</button>
</form>
```

## Paso 8: QA de la interfaz

- Recorre escenarios críticos (títulos largos, listas vacías, modo oscuro).
- Comprueba alineaciones, espaciados y tipografías en varios dispositivos/navegadores si es posible.
- Valida la semántica HTML y corrige problemas de accesibilidad (labels faltantes, contraste).

## Paso 9: Prepara una checklist de UI

1. El layout base se renderiza sin solaparse en desktop y móvil.
2. Los componentes alinean con el plan y usan clases consistentes.
3. Existen estados de interacción para botones, enlaces y controles de formulario.
4. Los hooks del DOM (`data-role`, ID, clases) están listos para JavaScript.

Marca cada ítem antes de avanzar.

## Ideas clave

- ✅ Traduce tu plan en HTML semántico y CSS consistente antes de añadir lógica.
- ✅ Los componentes reutilizables simplifican el estilo y las futuras interacciones.
- ✅ Diseños responsivos y accesibles ahora evitan retrabajo luego.
- ✅ Selectores claros y data attributes facilitan el trabajo de JavaScript mañana.

---

## 🎯 Comprobación rápida

1. ¿Qué método de layout elegiste (Grid/Flex) y por qué?
2. ¿Cómo señalas los estados vacíos o de carga en la UI?
3. ¿Qué patrones de componentes reutilizables estableciste?
4. ¿Dónde se enganchará tu JavaScript en el DOM mañana?

Próxima lección: da vida a la interfaz con datos dinámicos e interacciones. ⚙️

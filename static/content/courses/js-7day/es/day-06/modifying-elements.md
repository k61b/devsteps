---
title: "Modificar elementos"
description: "Cambiar contenido, estilos y atributos"
type: "reading"
duration: "30 min"
day: 6
order: 3
nextLesson: "event-handling"
---

# Modificar elementos

Una vez que sabes seleccionar elementos del DOM, es hora de actualizar su contenido, atributos y estilos. Hoy manipularás texto, HTML, clases, estilos en línea e incluso crearás nodos nuevos sobre la marcha.

## Paso 1: Actualizar texto

```javascript
const heading = document.querySelector("h1");
heading.textContent = "¡Bienvenido de nuevo!";
```

- `textContent` reemplaza todo el texto dentro del elemento.
- Trata el contenido como texto plano—las etiquetas HTML se escapan.

## Paso 2: Insertar HTML

```javascript
const hero = document.querySelector(".hero");
hero.innerHTML = "<strong>Nuevo mensaje</strong> para las personas que aprenden.";
```

- `innerHTML` analiza la cadena como HTML. Úsalo con cuidado para evitar vulnerabilidades XSS si el contenido proviene de usuarios.
- Prefiere métodos del DOM (`createElement`, `append`) al construir estructuras complejas de forma programática.

## Paso 3: Añadir contenido al inicio o al final

```javascript
const list = document.querySelector(".tasks");

const li = document.createElement("li");
li.textContent = "Repasar métodos de iteración";
list.append(li); // agrega al final

const first = document.createElement("li");
first.textContent = "Revisar notificaciones";
list.prepend(first); // agrega al inicio
```

- `append` y `prepend` aceptan nodos o cadenas.
- `appendChild` es similar pero solo acepta nodos.

## Paso 4: Eliminar elementos

```javascript
const banner = document.querySelector(".banner");
banner.remove();
```

- `remove()` borra el nodo de su padre.
- Como alternativa, usa `parent.removeChild(child)` para compatibilidad con navegadores muy antiguos.

## Paso 5: Trabajar con atributos

```javascript
const link = document.querySelector("a.cta");

link.setAttribute("href", "https://devsteps.io");
link.setAttribute("target", "_blank");

console.log(link.getAttribute("href"));
```

- `setAttribute`, `getAttribute` y `removeAttribute` ofrecen acceso genérico.
- Para atributos comunes, también puedes usar propiedades (`link.href`, `link.id`).

## Paso 6: Gestionar clases

```javascript
const card = document.querySelector(".card");

card.classList.add("highlight");
card.classList.remove("hidden");
card.classList.toggle("active");
card.classList.replace("old", "new");

console.log(card.classList.contains("active"));
```

- `classList` proporciona métodos convenientes para manipular clases.
- `toggle("active", condition)` te permite añadir o quitar según un booleano.

## Paso 7: Estilos en línea

```javascript
const alertBar = document.querySelector(".alert");

alertBar.style.backgroundColor = "#2563eb";
alertBar.style.color = "#fff";
alertBar.style.padding = "12px";
```

- Usa nombres de propiedades en camelCase (por ejemplo, `backgroundColor`).
- Los estilos en línea sobrescriben la hoja de estilos; prefiere clases CSS para mantener una apariencia consistente.

## Paso 8: Propiedades personalizadas de CSS

```javascript
document.documentElement.style.setProperty("--accent", "#f97316");
```

- Define variables CSS globales con `setProperty` sobre `style`.
- Recupéralas con `getComputedStyle(document.documentElement).getPropertyValue("--accent")`.

## Paso 9: Prompts de práctica

1. Sustituye el texto dentro del elemento con ID `status` por `"¡Todo al día!"`.
2. Añade un nuevo `<li>` llamado `"Book review"` a una lista con la clase `.reading-list`.
3. Alterna la clase `"dark-mode"` en `body` cuando se marque un checkbox.
4. Actualiza los atributos `src` y `alt` de una imagen para mostrar una ilustración nueva.
5. Define una propiedad personalizada `--primary` y úsala para resaltar un banner.

## Ideas clave

- ✅ `textContent` para texto seguro, `innerHTML` para fragmentos HTML (con cautela).
- ✅ Crea nodos con `document.createElement` e insértalos con `append`, `prepend` o `appendChild`.
- ✅ Gestiona clases con `classList` y atributos con `setAttribute`/`getAttribute`.
- ✅ Los estilos en línea y las variables CSS te permiten ajustar la presentación dinámicamente.

---

## 🎯 Comprobación rápida

1. ¿Cuándo deberías preferir `textContent` sobre `innerHTML`?
2. ¿En qué se diferencian `append` y `appendChild`?
3. ¿Qué hace `classList.toggle("active")`?
4. ¿Cómo puedes actualizar una variable CSS desde JavaScript?

Siguiente lección: responde a las acciones del usuario conectando listeners de eventos. 🖱️

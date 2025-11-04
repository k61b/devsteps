---
title: "Seleccionar elementos"
description: "querySelector, getElementById y más"
type: "reading"
duration: "25 min"
day: 6
order: 2
nextLesson: "modifying-elements"
---

# Seleccionar elementos

Antes de poder cambiar el DOM, necesitas referencias a los elementos que te interesan. Hoy conocerás los métodos de selección más comunes, cómo los respaldan los selectores CSS y cuándo elegir cada herramienta.

## Paso 1: El objeto `document`

- `document` es tu puerta de entrada al DOM.
- Los métodos de selección devuelven elementos individuales, colecciones o listas vivas.
- Siempre comprueba los resultados `null`: es posible que tu selector no coincida con nada.

## Paso 2: `getElementById`

Es el más rápido cuando conoces el ID único.

```html
<h1 id="title">Dashboard</h1>
```

```javascript
const heading = document.getElementById("title");
console.log(heading); // <h1 id="title">Dashboard</h1>
```

- Devuelve un único elemento o `null`.
- Los IDs deben ser únicos, ideal para anclas de primer nivel.

## Paso 3: `querySelector`

Acepta cualquier selector CSS y devuelve la primera coincidencia.

```javascript
const firstCard = document.querySelector(".card");
const navLink = document.querySelector("nav a.active");
```

- Soporta selectores complejos (descendentes, atributos, pseudo-clases).
- Útil cuando varios elementos comparten clases pero solo necesitas el primero.

## Paso 4: `querySelectorAll`

Devuelve un `NodeList` estático con todas las coincidencias.

```javascript
const buttons = document.querySelectorAll("button.primary");

buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
```

- `NodeList` admite `forEach`, la sintaxis spread e indexado.
- Estático significa que no se actualiza automáticamente si el DOM cambia después.

## Paso 5: Colecciones heredadas

- `getElementsByClassName("card")`
- `getElementsByTagName("li")`

Estas devuelven objetos `HTMLCollection` vivos que se actualizan cuando el DOM cambia. Siguen siendo útiles, pero recuerda que no admiten `forEach` directamente—convierte con `Array.from(...)` si es necesario.

## Paso 6: Recorrer relaciones

Una vez que tienes un elemento, muévete en relación a él.

```javascript
const card = document.querySelector(".card");

const parent = card.parentElement;
const children = card.children;
const firstChild = card.firstElementChild;
const next = card.nextElementSibling;
```

- Usa el recorrido para mantenerte dentro del ámbito y evitar consultar todo el documento repetidamente.

## Paso 7: Protegerte contra `null`

Las selecciones pueden fallar—comprueba antes de usar el resultado.

```javascript
const banner = document.querySelector(".banner");

if (banner) {
  banner.classList.add("visible");
} else {
  console.warn("Banner no encontrado");
}
```

Esto previene errores en tiempo de ejecución cuando los elementos no existen o se cargan de forma condicional.

## Paso 8: Seleccionar dentro de contenedores

Consulta un subárbol específico para limitar las coincidencias.

```javascript
const sidebar = document.querySelector(".sidebar");
const links = sidebar.querySelectorAll("a");
```

- Útil en componentes donde las clases se repiten.
- Mejora el rendimiento en páginas grandes.

## Paso 9: Prompts de práctica

1. Selecciona el elemento con ID `hero` y registra su `textContent`.
2. Usa `querySelectorAll` para obtener todas las casillas dentro de un formulario e imprime cuántas están marcadas.
3. Convierte `document.getElementsByClassName("card")` en un arreglo y elimina la clase `"hidden"` de cada una.
4. Implementa una función `findNavLinks(containerSelector)` que devuelva todos los `<a>` dentro del contenedor elegido.

## Ideas clave

- ✅ `getElementById` es ideal para elementos únicos; `querySelector`/`querySelectorAll` manejan selectores CSS flexibles.
- ✅ `NodeList` de `querySelectorAll` es estático; las colecciones heredadas son vivas.
- ✅ Comprueba `null` antes de usar los elementos seleccionados.
- ✅ Limita las consultas dentro de componentes para mantener eficaz el trabajo con el DOM.

---

## 🎯 Comprobación rápida

1. ¿Cuándo deberías preferir `getElementById` sobre `querySelector`?
2. ¿Cómo iteras sobre los resultados de `querySelectorAll`?
3. ¿Cuál es la diferencia entre un `HTMLCollection` vivo y un `NodeList` estático?
4. ¿Cómo seleccionas solo los enlaces dentro de una barra de navegación específica?

Próxima lección: modifica contenido, atributos y estilos cuando ya tengas los elementos adecuados. 🎨

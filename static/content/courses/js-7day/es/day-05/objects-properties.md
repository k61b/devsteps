---
title: "Objetos y propiedades"
description: "Crear y trabajar con objetos"
type: "reading"
duration: "25 min"
day: 5
order: 3
nextLesson: "iteration-methods"
---

# Objetos y propiedades

Los objetos almacenan datos como pares clave–valor, lo que te permite etiquetar la información en lugar de depender de posiciones. Desde perfiles de usuario hasta respuestas de API, los objetos están en todas partes en JavaScript. Hoy aprenderás a crear objetos, leer y actualizar propiedades y navegar estructuras anidadas.

## Paso 1: ¿Por qué objetos?

- Agrupan datos relacionados con etiquetas legibles (`name`, `level`, `skills`).
- Mezclan distintos tipos de datos en una misma estructura.
- Reflejan entidades del mundo real como estudiantes, cursos o configuraciones.

Los arreglos son perfectos para listas ordenadas; los objetos brillan cuando te importa *qué* representa cada pieza de información.

## Paso 2: Crear objetos

Usa llaves `{}` con pares de propiedades.

```javascript
const learner = {
  name: "Kayra",
  level: 3,
  active: true
};
```

- Las propiedades usan la sintaxis `clave: valor`.
- Las claves suelen ir en minúsculas y ser descriptivas.
- Las cadenas, números, booleanos, arreglos y funciones son valores válidos.

## Paso 3: Leer propiedades

Accede a los datos con notación de punto o corchetes.

```javascript
console.log(learner.name); // "Kayra"
console.log(learner["level"]); // 3
```

- La notación de punto es concisa cuando conoces el nombre.
- Los corchetes aceptan cadenas o variables, útil para claves dinámicas o con espacios.

## Paso 4: Actualizar y añadir

Asigna nuevos valores o crea propiedades sobre la marcha.

```javascript
learner.level = 4; // actualizar
learner.track = "JavaScript"; // añadir propiedad nueva

console.log(learner.track); // "JavaScript"
```

- Los objetos son mutables; `const` impide reasignar la referencia, no sus propiedades.

## Paso 5: Objetos y arreglos anidados

Combina objetos con arreglos para modelar datos más ricos.

```javascript
const course = {
  title: "JavaScript 7 Day Sprint",
  progress: {
    day: 5,
    percent: 62
  },
  milestones: ["Setup", "Functions", "Arrays"]
};

console.log(course.progress.percent); // 62
console.log(course.milestones[1]); // "Functions"
```

- Encadena puntos/corchetes para llegar a niveles profundos.
- Ten cuidado: acceder a rutas inexistentes devuelven `undefined`.

## Paso 6: Nombres de propiedades dinámicos

La notación con corchetes admite variables.

```javascript
const stat = "level";
console.log(learner[stat]); // 4
```

- Perfecto cuando los nombres de propiedad provienen del usuario o de un bucle.

## Paso 7: Eliminar propiedades

Usa la palabra clave `delete` con moderación.

```javascript
delete learner.active;
console.log(learner.active); // undefined
```

- Eliminar propiedades puede evitar datos obsoletos, pero asegura que ningún otro código las necesite.

## Paso 8: Inspeccionar claves y valores

Los ayudantes integrados revelan el contenido del objeto.

```javascript
const keys = Object.keys(learner); // ["name", "level", "track"]
const values = Object.values(learner); // ["Kayra", 4, "JavaScript"]
const entries = Object.entries(learner);
// [["name", "Kayra"], ["level", 4], ["track", "JavaScript"]]
```

- Itera sobre `entries` para obtener clave y valor en un bucle.

## Paso 9: Prompts de práctica

1. Crea `const project = { title: "Todo App", status: "draft" };` y registra `status`.
2. Añade un arreglo `contributors` a `project` y agrega dos nombres.
3. Actualiza `project.status` a `"shipped"` y agrega `completed: true`.
4. Usa `const detail = "title";` para leer el título con notación de corchetes.
5. Recorre `Object.entries(project)` y registra cada par clave/valor.

## Ideas clave

- ✅ Los objetos asignan claves a valores—ideales para datos etiquetados.
- ✅ La notación de punto es rápida; los corchetes permiten acceso dinámico.
- ✅ Combina objetos y arreglos para reflejar formas de datos reales.
- ✅ Usa `Object.keys`, `Object.values` y `Object.entries` para explorar estructuras en tiempo de ejecución.

---

## 🎯 Comprobación rápida

1. ¿Cuándo preferirías la notación con corchetes sobre la notación de punto?
2. ¿Qué ocurre si accedes a una propiedad que no existe?
3. ¿En qué se diferencian los objetos y los arreglos en la forma en que almacenan datos?
4. ¿Por qué podrías evitar borrar propiedades en algunos casos?

Siguiente lección: recorre arreglos y objetos con los métodos de iteración integrados. 🔁

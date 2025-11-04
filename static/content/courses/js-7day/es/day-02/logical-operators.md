---
title: "Operadores lógicos"
description: "Entender los operadores AND, OR y NOT"
type: "reading"
duration: "20 min"
day: 2
order: 2
nextLesson: "if-statements-conditionals"
---

# Operadores lógicos

Ahora que sabes comparar valores, combinemos esas comparaciones usando operadores lógicos. Estos operadores permiten expresar reglas complejas como “si el usuario terminó la lección Y compartió su progreso O alcanzó una racha de 7”. Dominar esta parte desbloquea lógica condicional potente.

Trabajaremos en `day2-operators.js`, ampliando o ejecutando junto a tus prácticas de aritmética.

## Paso 1: Conoce los operadores

JavaScript tiene tres operadores lógicos principales:

| Operador | Símbolo | Ejemplo | Significado |
| -------- | ------- | ------- | ----------- |
| AND | `&&` | `isLoggedIn && hasSubscription` | Solo es `true` si ambos lados son verdaderos |
| OR | `\|\|` | `isAdmin || isModerator` | Es `true` si cualquiera de los lados es verdadero (o ambos) |
| NOT | `!` | `!isBanned` | Invierte `true` ↔ `false` |

Cada operador funciona con valores booleanos, pero JavaScript también puede interpretar otros tipos como truthy o falsy (más adelante hablaremos de esto).

## Paso 2: AND (`&&`)

```javascript
const completedLesson = true;
const sharedProgress = false;

console.log(completedLesson && sharedProgress); // false
console.log(completedLesson && !sharedProgress); // true
```

- AND se detiene temprano (short-circuit) si el lado izquierdo es falso porque la expresión completa ya no puede ser verdadera.
- Útil para verificar varios requisitos antes de ejecutar código.

### Ejemplo real: desbloquear una insignia

```javascript
const lessonsToday = 3;
const streakDays = 7;

const unlockStreakBadge = lessonsToday >= 3 && streakDays >= 7;
console.log(`¿Insignia de racha desbloqueada? ${unlockStreakBadge}`); // true
```

## Paso 3: OR (`||`)

```javascript
const isProMember = false;
const hasPromoCode = "BETA25";

const accessGranted = isProMember || hasPromoCode === "BETA25";
console.log(accessGranted); // true
```

- OR se detiene temprano si el lado izquierdo es verdadero.
- Ideal para lógica de respaldo: “Usa este valor a menos que exista uno mejor”.

### Usar OR para valores predeterminados

```javascript
const userTheme = "";
const theme = userTheme || "light"; // si userTheme es falsy, usa "light"

console.log(`Tema seleccionado: ${theme}`); // "light"
```

## Paso 4: NOT (`!`)

```javascript
const notificationsEnabled = false;
console.log(!notificationsEnabled); // true
```

- Niega un booleano.
- Doble NOT (`!!valor`) convierte valores truthy/falsy a un booleano real.

```javascript
console.log(!!"hola"); // true
console.log(!!0);      // false
```

## Paso 5: Combinar operadores

Puedes encadenar operadores lógicos para describir escenarios complejos. Usa paréntesis para que el orden sea explícito y fácil de leer.

```javascript
const hasCompletedDay2 = true;
const hasSharedOnSocial = false;
const hasReferralCode = true;

const qualifiesForBonus =
  (hasCompletedDay2 && hasSharedOnSocial) || hasReferralCode;

console.log(`¿Bonus desbloqueado? ${qualifiesForBonus}`); // true
```

### Recordatorio de precedencia

1. Paréntesis
2. NOT (`!`)
3. AND (`&&`)
4. OR (`||`)

Añade paréntesis siempre que quieras resaltar u ordenar la evaluación.

## Paso 6: Comportamiento short-circuit

Los operadores lógicos se evalúan de izquierda a derecha y devuelven el valor de la última expresión evaluada, no siempre `true` o `false`.

```javascript
console.log("Hola" && "Mundo"); // "Mundo"
console.log(0 || 42);           // 42
```

- `&&` devuelve el primer valor falsy o el último valor si todos son truthy.
- `||` devuelve el primer valor truthy o el último si todos son falsy.

Este comportamiento permite patrones poderosos:

```javascript
const settings = { language: "en" };
const language = settings.language || "en"; // valor predeterminado

const user = null;
const displayName = user && user.name; // devuelve null sin error
```

## Paso 7: Valores truthy y falsy

JavaScript trata ciertos valores no booleanos como `true` o `false` en expresiones lógicas.

**Falsos:** `false`, `0`, `-0`, `0n`, `""` (cadena vacía), `null`, `undefined`, `NaN`.

Todo lo demás es truthy, incluidas cadenas no vacías, arreglos, objetos y funciones.

```javascript
console.log(Boolean("DevSteps")); // true
console.log(Boolean(""));         // false
console.log(Boolean([]));         // true
console.log(Boolean({}));         // true
```

Entender truthy/falsy ayuda a escribir validaciones y valores predeterminados concisos.

## Prompts de práctica

1. Crea variables: `const hasTicket = true; const isVIP = false; const doorOpen = true;`. Construye una expresión que permita la entrada si la persona tiene ticket y la puerta está abierta, **o** si es VIP.
2. Define `const feedback = "";` Usa `||` para proporcionar el mensaje por defecto `"Sin comentarios aún"`.
3. Escribe una condición que verifique `const remainingTasks = 0;` — si no hay tareas, imprime `"¡Todo listo!"`, de lo contrario `"¡Sigue adelante!"`.
4. Usa `&&` para acceder de forma segura a `const profile = { name: "Mina", social: { twitter: "@mina.codes" } };` e imprime el usuario de Twitter solo si existe.

## Ideas clave

- ✅ `&&`, `||` y `!` te permiten combinar expresiones booleanas en lógica más rica.
- ✅ El short-circuiting permite verificaciones eficientes y acceso seguro a propiedades.
- ✅ Conocer los valores truthy/falsy facilita escribir valores predeterminados concisos, pero asegúrate de saber cuáles son falsy.
- ✅ Los paréntesis aclaran la lógica compleja y previenen errores.

---

## 🎯 Comprobación rápida

1. ¿Qué devuelve `false || "hola"` y por qué?
2. ¿Cómo puede ayudarte `&&` a evitar errores al acceder a propiedades anidadas?
3. ¿Cuándo usarías `!!valor`?
4. Si `points = 0`, ¿por qué `points || 100` devuelve `100`?

Ya estás listo para combinar comparaciones y lógica en condicionales completas. ¡Siguiente parada: declaraciones `if`! 🚦

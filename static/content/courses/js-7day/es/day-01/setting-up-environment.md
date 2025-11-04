---
title: "Configura tu entorno"
description: "Instalar las herramientas necesarias y preparar tu espacio de trabajo"
type: "reading"
duration: "20 min"
day: 1
order: 2
nextLesson: "first-javascript-program"
---

# Configura tu entorno

Antes de escribir una sola línea de JavaScript necesitas un entorno de desarrollo confiable. En esta lección instalarás las herramientas clave que usaremos a lo largo del curso y comprobarás que todo funciona correctamente.

## Paso 1: Elige tu editor de código

Recomendamos **Visual Studio Code (VS Code)** porque es gratuito, ligero y viene con muchas funciones pensadas para principiantes.

1. Descarga VS Code desde [https://code.visualstudio.com](https://code.visualstudio.com) para tu sistema operativo (Windows, macOS o Linux).
2. Instálalo con las opciones predeterminadas.
3. Abre la aplicación e inicia sesión si quieres sincronizar tus ajustes (opcional).

### Extensiones recomendadas para VS Code
- **ESLint**: resalta errores comunes de JavaScript.
- **Prettier**: formatea tu código automáticamente.
- **Code Spell Checker**: ayuda a detectar errores ortográficos en comentarios y cadenas de texto.

> Consejo: instala extensiones haciendo clic en el icono cuadrado de la barra lateral izquierda o presionando `Ctrl+Shift+X` (`Cmd+Shift+X` en macOS).

## Paso 2: Instala Node.js con NVM

Node.js te permite ejecutar JavaScript fuera del navegador y te da acceso al gestor de paquetes `npm`, que usaremos más adelante. En lugar de instalar Node.js directamente, usaremos **NVM (Node Version Manager)** para poder cambiar de versión fácilmente según el proyecto.

### macOS y Linux
1. Instala NVM con el script oficial:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   ```
2. Recarga tu shell para que el comando `nvm` esté disponible:
   ```bash
   source ~/.nvm/nvm.sh
   ```
3. Instala la versión de soporte a largo plazo (LTS) más reciente de Node.js:
   ```bash
   nvm install --lts
   nvm use --lts
   nvm alias default --lts
   ```

### Windows
1. Descarga el archivo `nvm-setup.exe` más reciente desde las [versiones de nvm-windows](https://github.com/coreybutler/nvm-windows/releases).
2. Ejecuta el instalador y acepta los valores predeterminados (instala NVM y un directorio para Node.js).
3. Abre una nueva ventana de PowerShell o Windows Terminal e instala la versión LTS actual:
   ```powershell
   nvm ls available   # opcional: muestra la lista de versiones
   nvm install 20.11.1   # cambia al número LTS más alto que veas en la lista
   nvm use 20.11.1
   nvm alias default 20.11.1
   ```

Después de la instalación, verifica que todo funcione:

```bash
nvm --version
node --version
npm --version
```

Deberías ver números de versión (por ejemplo `0.39.7`, `v20.11.1` y `10.2.4`). Si no aparecen, abre una terminal nueva y ejecuta `nvm use default`.

## Paso 3: Familiarízate con la terminal

La terminal (o línea de comandos) es donde ejecutarás scripts de Node.js y herramientas para desarrolladores.

- **Windows**: usa **PowerShell** o **Windows Terminal**.
- **macOS**: usa la app **Terminal** integrada.
- **Linux**: usa tu emulador de terminal preferido.

Crea una carpeta para mantener organizados tus proyectos de JavaScript:

```bash
mkdir devsteps-js
cd devsteps-js
```

> Consejo: marca esta carpeta como favorita en tu explorador de archivos para abrirla rápidamente desde VS Code.

## Paso 4: Configura VS Code para JavaScript

Dentro de VS Code:

1. Abre tu carpeta de proyectos (`File` > `Open Folder`).
2. Activa **Auto Save** (`File` > `Auto Save`) para no perder avances.
3. Enciende **Format on Save** (`Settings` > busca “format on save” > habilita).
4. Instala las extensiones mencionadas antes si aún no lo hiciste.

Opcional pero útil:
- Elige un tema que te guste (`Ctrl+K Ctrl+T` / `Cmd+K Cmd+T`).
- Ajusta el tamaño y el interlineado de la fuente para leer cómodamente.

## Paso 5: Crea un archivo de prueba

Asegurémonos de que todo funciona de punta a punta:

1. En VS Code, crea un archivo llamado `hello.js`.
2. Añade el siguiente código:

```javascript
console.log("Hola DevSteps!");
```

3. Guarda el archivo.
4. Ejecútalo desde la terminal dentro de VS Code:

```bash
node hello.js
```

Deberías ver `Hola DevSteps!` en la terminal.

## Paso 6: Herramientas de desarrollador del navegador

Los navegadores modernos incluyen potentes herramientas para desarrolladores. Usaremos **Google Chrome**, pero cualquier navegador basado en Chromium funciona de manera similar.

1. Abre Chrome y presiona `Ctrl+Shift+I` (`Cmd+Option+I` en macOS) para abrir DevTools.
2. Haz clic en la pestaña **Console**.
3. Escribe `console.log("¡Listo para programar!");` y presiona Enter. Deberías ver el mensaje impreso en la consola.

## Lista de resolución de problemas

- **“Command not found”** al ejecutar `node` o `npm`: abre una terminal nueva y ejecuta `nvm use default` (o `nvm use --lts`) para activar la versión correcta.
- **Errores de permisos** en macOS/Linux: usa `sudo` solo al instalar software, no al ejecutar tu código.
- **Las extensiones no funcionan**: recarga VS Code (`Ctrl+Shift+P`, escribe `Developer: Reload Window` y presiona Enter).

## Ideas clave

- ✅ VS Code será nuestro editor principal.
- ✅ NVM facilita instalar y cambiar versiones de Node.js; npm viene incluido.
- ✅ La terminal es esencial para ejecutar scripts y herramientas.
- ✅ DevTools del navegador te ayudan a depurar JavaScript en tiempo real.

---

## 🎯 Comprobación rápida

1. ¿Qué comandos de `nvm` debes ejecutar para instalar y activar la versión LTS de Node.js?
2. ¿Cómo ejecutas un archivo JavaScript llamado `script.js` desde la terminal?
3. ¿Qué extensiones de VS Code ayudan a mantener tu JavaScript limpio y legible?
4. ¿Cómo abres la consola del navegador en Chrome?

Si respondiste con seguridad, ¡estás listo para la siguiente lección: escribir tu primer programa en JavaScript!

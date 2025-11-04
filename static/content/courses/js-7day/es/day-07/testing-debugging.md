---
title: "Pruebas y depuración"
description: "Encontrar y corregir errores en tu código"
type: "reading"
duration: "15 min"
day: 7
order: 4
nextLesson: "wrap-up-next-steps"
---

# Pruebas y depuración

Un proyecto pulido no solo está completo en funcionalidades—también es estable y confiable. Hoy pondrás tu app a prueba, detectarás casos límite y construirás un proceso para atrapar bugs antes de que lo hagan las personas usuarias.

## Paso 1: Crea una checklist de pruebas

- Carga la app en una sesión nueva del navegador.
- Recorre cada funcionalidad principal identificada en tu plan.
- Incluye estados vacíos, de error y entradas límite.

Documenta cada paso para reutilizarlo al enviar actualizaciones.

## Paso 2: Escenarios de prueba manual

1. **Crear**: Añade nuevas entradas con títulos cortos y largos.
2. **Alternar/Actualizar**: Marca elementos como completados, edita detalles, deshaz cambios.
3. **Eliminar** (si corresponde): Borra elementos y confirma que desaparecen.
4. **Filtros/Vistas**: Cambia entre filtros, órdenes o pestañas.
5. **Persistencia**: Recarga la página para asegurarte de que el estado se restaure correctamente.

Comprueba tanto en desktop como en breakpoints móviles.

## Paso 3: Supervisión de consola y red

- Abre DevTools (`Cmd+Option+I` / `Ctrl+Shift+I`).
- Observa la **Consola** en busca de errores, advertencias o promesas fallidas.
- Usa la pestaña **Network** para garantizar que los assets cargan rápido y las solicitudes se resuelven.

Resuelve todos los errores de consola antes de dar por terminado el proyecto.

## Paso 4: Técnicas de depuración

- Añade temporalmente `console.log` para inspeccionar estado y flujo de eventos.
- Usa breakpoints en la pestaña **Sources** para avanzar línea a línea.
- Apóyate en los inspectores del DOM para verificar clases, atributos y estilos durante las interacciones.

Elimina los logs temporales tras solucionar el problema para mantener la salida limpia.

## Paso 5: Comprobaciones de accesibilidad

- Navega la app solo con el teclado (Tab, Shift+Tab, Enter, Space).
- Asegúrate de que los indicadores de foco sean visibles y lógicos.
- Ejecuta Lighthouse o Axe para detectar problemas de contraste y ARIA.

Los bugs de accesibilidad son bugs reales—resuélvelos antes del lanzamiento.

## Paso 6: Mejoras rápidas de rendimiento

- Audita el tamaño del bundle (analizador de Vite o Coverage de DevTools).
- Difiri scripts pesados y carga perezosa de imágenes no críticas.
- Minimiza los “layout shifts” definiendo dimensiones y usando flex/grid correctamente.

Incluso pequeños ajustes mejoran la sensación de calidad.

## Paso 7: Red de seguridad para regresiones

- Después de cada arreglo, vuelve a ejecutar la checklist para comprobar que nada más se rompió.
- Marca los escenarios y anota cualquier comportamiento inestable para mejorarlo más adelante.
- Considera mantener un archivo `TESTING.md` para registrar limitaciones conocidas o tareas pendientes.

## Paso 8: Prepara una lista de bugs

- Si encuentras problemas que no puedes arreglar de inmediato, documéntalos claramente:
  - Pasos para reproducir
  - Comportamiento esperado vs. actual
  - Prioridad y posibles soluciones

La transparencia te ayuda a iterar con confianza.

## Paso 9: Celebra la QA terminada

- Cuando la checklist pase, captura un video o GIF corto del producto final.
- Comparte el avance con colegas o mentores para obtener otra perspectiva.
- Reflexiona sobre las técnicas de depuración que te ahorraron tiempo—las volverás a usar.

## Ideas clave

- ✅ Las checklists estructuradas evitan que se te escapen bugs.
- ✅ La profundidad de DevTools—consola, breakpoints, red—es tu caja de herramientas de depuración.
- ✅ Accesibilidad y rendimiento forman parte de la calidad, no son extras.
- ✅ Mantén notas sobre issues conocidos para guiar iteraciones futuras.

---

## 🎯 Comprobación rápida

1. ¿Qué escenarios de prueba descubrieron más problemas?
2. ¿Cómo verificaste que la app funciona sin ratón?
3. ¿Qué paso de depuración resultó más efectivo?
4. ¿Qué tareas de seguimiento documentarás para versiones futuras?

Próxima lección: cierra el sprint y decide hacia dónde avanzar. 🏁

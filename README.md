# Laboratorio frontend

Colección de prácticas de HTML, CSS y JavaScript de etapas anteriores de formación. Permite comparar efectos hover, filtros, animaciones, perspectiva y parallax. En 2026 se separaron los ejemplos en archivos independientes, se corrigieron recursos inexistentes y se documentó su alcance.

**Estado:** demostración estática funcional; 11 ejemplos. No es una aplicación de negocio ni una integración con IA.

[Ver demostración](https://morandisantiago.github.io/proyectos-para-porfolio/) · [Portfolio profesional](https://morandisantiago.github.io/Porfolio/)

## Ejecutar localmente

No requiere dependencias de Node ni compilación. Con Python 3 instalado, desde la raíz:

```sh
python -m http.server 8090 --bind 127.0.0.1
```

Abrir [http://127.0.0.1:8090](http://127.0.0.1:8090). El selector carga un catálogo JSON, por eso se necesita HTTP en lugar de abrir el archivo con `file://`.

Elegir un ejemplo con los botones; usar el puntero, Tab o el desplazamiento dentro de la vista según su descripción. También se puede abrir cada ejemplo en otra pestaña.

## Ejemplos

| Carpeta | Contenido |
| --- | --- |
| [hover](./ejemplos/hover/) | Superposiciones y transiciones de tarjetas |
| [filtros](./ejemplos/filtros/) | Sepia, escala de grises y perspectiva |
| [texto](./ejemplos/texto/) | Secuencia de texto con keyframes |
| [parallax-js](./ejemplos/parallax-js/) | Movimiento de cabecera según el scroll |
| [parallax-css](./ejemplos/parallax-css/) | Capas y secciones con profundidad |
| [wave](./ejemplos/wave/) | Onda al enfocar o pasar por columnas |
| [tarjetas-3d](./ejemplos/tarjetas-3d/) | Portada, título y figura superpuestos |
| [imagen](./ejemplos/imagen/) | Imagen que cambia mediante franjas |
| [social](./ejemplos/social/) | Botones circulares con color y giro |
| [navegacion](./ejemplos/navegacion/) | Subrayados, barras y puntos móviles |
| [lamparas](./ejemplos/lamparas/) | Variante de tarjetas recuperada del portfolio |

## Estructura y cambios de 2026

- [ejemplos.json](./ejemplos.json): títulos y descripciones reales de cada práctica.
- [scripts.js](./scripts.js): selector y carga de la vista previa.
- [ejemplos/](./ejemplos/): cada práctica tiene HTML, CSS y, cuando corresponde, JavaScript propio.
- [assets/](./assets/): composiciones SVG creadas para esta revisión; reemplazan imágenes remotas y rutas rotas.
- [common.css](./common.css) y [common.js](./common.js): foco visible, apoyo responsive, movimiento reducido y enlaces de demostración sin navegación.
- El iframe limita capacidades mediante sandbox; el código de las prácticas no se inserta en la página principal.

Se eliminó el ejemplo vacío y se preservó una variante visual existente en el portfolio. Todos los recursos de ejecución del laboratorio son locales; no necesita APIs, claves, cuentas ni servicios de terceros.

## Autoría y procedencia

Este repositorio conserva ejercicios basados en ejemplos visuales de aprendizaje. No se presentan todos los diseños ni efectos heredados como creaciones originales. Las URLs del código anterior identificaban, por ejemplo, la referencia de [tarjetas de ggayane](https://ggayane.github.io/css-experiments/); para otros ejercicios no se pudo establecer la fuente original con la evidencia disponible.

La revisión organiza, adapta y repara el material existente. Las nuevas composiciones SVG son ilustrativas y no reproducen fotografías ni personajes de las fuentes anteriores. No se añade una licencia general que atribuya derechos sobre material de terceros.

## Validación y límites

Comprobado mediante servidor HTTP y navegador: selección de los 11 ejemplos, carga de recursos, ausencia de errores JavaScript y funcionamiento de efectos representativos. El selector se verifica también a 390 px de ancho.

Los botones y menús dentro de los ejemplos muestran efectos; no representan tiendas, redes sociales ni páginas completas. Algunos efectos necesitan puntero, scroll o un navegador moderno con CSS `:has()` y perspectiva. La selección de ejemplos funciona con teclado; no se afirma accesibilidad integral de todos los efectos heredados.

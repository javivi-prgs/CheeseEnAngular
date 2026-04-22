ARCHIVO DE LOGS DE CheeseEnAngular: Aquí podrás ver todas las modificaciones que se han realizado en el proyecto.

## [2026-04-19 13:21]

**Tarea [1] - Inicialización del Proyecto:** Se instaló Angular CLI v21 globalmente mediante npm. Se creó el proyecto Angular con Standalone Components, sin routing inicial y con estilos en CSS puro, dentro del directorio `CheeseEnAngular/`. Se limpió el `src/app/app.html` eliminando el contenido placeholder por defecto de Angular, dejando solo el `<router-outlet />` como base para los futuros componentes.

## [2026-04-19 13:27]

**Tarea [2] - Instalación de Dependencias:** Se instaló Bootstrap 5.3 via `npm install bootstrap@5.3`. Se configuró el `angular.json` añadiendo `bootstrap.min.css` al array `styles` (antes de `styles.css`) y `bootstrap.bundle.min.js` al array `scripts`, para que Bootstrap esté disponible globalmente en toda la aplicación.

## [2026-04-19 13:28]

**Tarea [3] - Organización de Directorios:** Se creó la estructura modular de carpetas dentro de `src/app/`: `/components` (para los 4 componentes de UI), `/models` (para interfaces TypeScript) y `/services` (para la lógica de negocio y datos). Cada carpeta incluye un `.gitkeep` para que Git las rastree aunque estén vacías.

## [2026-04-19 13:31]

**Tarea [4] - Gestión de Activos:** Se localizó el proyecto original en `Desktop/Lenguaje2aEvaluacion/LenguajeMarcasEvaluacion_2/`. Se copiaron las 6 imágenes de la carpeta `img/` del proyecto original (`logo2.png`, `sofia.png`, `matchsofia.png`, `perfilsofia.png`, `radarsofia.png`, `Estructura Imagen.png`) a la carpeta `public/img/` del proyecto Angular. Se realizó una resincronización de estos archivos tras detectar cambios en el repositorio original.

## [2026-04-19 13:36]

**Tarea [5] - Creación de Modelos:** Se definieron las interfaces de TypeScript en `src/app/models/seccion.model.ts`. Se crearon los modelos `Feature`, `Paso` y `Plan` para tipar correctamente los datos que se migrarán de la web estática, asegurando la integridad de los datos en el flujo de Angular.

## [2026-04-19 13:37]

**Tarea [6] - Generación de Componentes Base:** Se generaron los 4 componentes principales del proyecto usando Angular CLI (`ng g c`): `Header`, `Hero`, `ContentSection` y `Footer`. Se configuraron como Standalone Components dentro de la carpeta `/components`, omitiendo los archivos de pruebas para simplificar la estructura inicial.

## [2026-04-19 13:38]

**Tarea [7] - Configuración de Estilos Globales:** Se integró la fuente 'Outfit' via Google Fonts en `index.html`. Se definió el sistema de diseño en `styles.css` mediante variables CSS para los colores corporativos (amarillo #FFD700 y negro #0a0a0a). Además, se implementaron las clases base para el efecto Scroll-Snap (`.snap-container` y `.snap-section`) para garantizar que la SPA tenga un comportamiento magnético y vertical.

## [2026-04-19 13:39]

**Tarea [8] - Maquetación con Bootstrap y Scroll-Snap:** Se configuró el `app.html` principal con un contenedor de Scroll-Snap (`.snap-container`). Se registraron e integraron todos los componentes base (`Header`, `Hero`, `ContentSection`, `Footer`) dentro de sus respectivas secciones de pantalla completa (`.snap-section`). Se aseguró que la navegación sea fija mientras el contenido desliza magnéticamente.

## [2026-04-19 13:41]

**Tarea [9] y [10] (Migración del Header):** Se refactorizó el Navbar original al `HeaderComponent`. El HTML se limpió y adaptó, actualizando las rutas de las imágenes. El CSS se encapsuló en `header.css` utilizando las variables globales, mejorando la modularidad del proyecto.

## [2026-04-19 13:45]

**Finalización de la Fase 4:** Se completó la migración de los componentes `Hero`, `ContentSection` y `Footer`. El `ContentSection` se transformó en un componente dinámico y reutilizable mediante `@Input`. Se encapsularon todas las animaciones (`drip-sway`, `radar-sweep`, etc.) dentro de sus respectivos componentes. La SPA ya muestra el contenido real de la web original con el efecto Scroll-Snap activo.

## [2026-04-22 14:05]

**Instalación de Frameworks:** Se han instalado todas las dependencias del proyecto mediante `npm install`. Adicionalmente, se han incorporado los frameworks `bootstrap-icons` y `animate.css` para soportar iconos y animaciones avanzadas, configurándolos correctamente en el archivo `angular.json` para su uso global.

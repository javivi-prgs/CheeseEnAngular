📋 Plan de Trabajo: Migración a Angular (CheeseEnAngular)

Fase 1: Configuración del Entorno y EstructuraEsta fase es el "esqueleto" del proyecto. Sin esto, no podemos empezar a programar de forma organizada.

    [1] Inicialización del Proyecto: Crear el proyecto Angular y limpiar el contenido por defecto del app.component.html.
    [2] Instalación de Dependencias: Instalar Bootstrap mediante npm y configurar los scripts/styles en el archivo angular.json.
    [3] Organización de Directorios: Crear la estructura de carpetas en src/app/: /components, /models y /services.
    [4] Gestión de Activos (Public): Trasladar todas las imágenes, iconos y recursos multimedia de la web antigua a la nueva carpeta public/si no hay,creala.

Fase 2: Definición de Modelos y ArquitecturaAquí preparamos la lógica MVC (Modelo-Vista-Controlador).

    [5] Creación de Modelos: Definir las interfaces de TypeScript (ej. Seccion.model.ts) para tipar los textos y datos de la web.
    [6] Generación de Componentes Base: Utilizar el CLI de Angular (ng g c) para crear los 4 pilares:
    HeaderComponent HeroComponent ContentSectionComponent (Componente reutilizable) y FooterComponent.

Fase 3: Implementación del Diseño y UI-UXEn este punto volcamos el diseño visual y los estilos que mencionas (Negro y Amarillo).

    [7] Configuración de Estilos Globales: Definir la tipografía Sans-Serif y los colores base (fondos negros, acentos amarillos) en el archivo styles.css.
    [8] Maquetación con Bootstrap: Implementar el sistema de rejillas para que las secciones sean responsive.Desarrollo del Scroll-Snap: Aplicar las propiedades CSS para que cada sección ocupe el $100vh$ y el scroll sea magnético y fluido.

    Fase 4: Refactorización y ContenidoPasamos el contenido real de la web antigua al nuevo sistema de componentes.

    Migración de Contenido:
    [9] Repartir los textos e imágenes del proyecto original dentro de los nuevos componentes de Angular.
    [10] Encapsulamiento de Estilos: Mover el CSS específico de cada sección a su propio archivo .css de componente para evitar conflictos.


Cada vez que hayas modificado algo quiero que me modifiques el archivo .usoDeIA/logs.md y me pongas en un parrafo de maximo 4 lineas resumidamente que es lo que has modificado, también quiero que me pongas la fecha y la hora de la modificación. 
El log seguirá el siguiente formato:

## [Fecha y hora]

[Descripción de la modificación]
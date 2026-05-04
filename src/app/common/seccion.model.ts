/**
 * Interfaz para las funcionalidades (Features) de la App
 */
export interface Feature {
    id: number;
    titulo: string;
    descripcion: string;
    icono: string;
    imagenUrl?: string;
    claseCSS?: string; // Para alternar el orden (flex-row-reverse)
}

/**
 * Interfaz para los pasos del proceso (¿Cómo funciona?)
 */
export interface Paso {
    numero: number;
    titulo: string;
    descripcion: string;
}

/**
 * Interfaz para los Planes Premium
 */
export interface Plan {
    nombre: string;
    precio: string;
    beneficios: string[];
    recomendado: boolean;
    color: string;
}

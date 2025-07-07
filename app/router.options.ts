import type { RouterConfig } from '@nuxt/schema'
import IconsPage from '~/components/XIcons/index.vue';

export default <RouterConfig>{
    /**
    * Configuración personalizada del enrutador de Nuxt 3.
    * 
    * Este archivo define rutas adicionales fuera de la carpeta `pages/`,
    * lo cual es útil para casos donde se quiere tener un control más
    * explícito o agregar rutas desde módulos o carpetas personalizadas.
    */
    routes: (_routes) => [
        {
            name: 'icons-boilerplate', // Nombre de la ruta (opcional pero útil para navegación programática)
            path: '/xicons', // Ruta a la que se accede desde el navegador
            component: IconsPage, // Componente que se renderiza cuando se accede a esta ruta
        },
        // Incluye todas las rutas generadas automáticamente por Nuxt (carpeta `pages/`)
        ..._routes,
    ],
}
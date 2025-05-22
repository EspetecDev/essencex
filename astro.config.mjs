// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    i18n: {
        locales: ["es", "cat", "en"],
        defaultLocale: "es",
        routing: { 
            prefixDefaultLocale: false
        }
    },
    vite: {
        plugins: [tailwindcss()]
    }
});

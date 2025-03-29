// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    i18n: {
        locales: ["en", "de"], // Locales you want to support
        defaultLocale: "en", // Default locale (fallback)

        routing: {
            prefixDefaultLocale: true, // Ensures that your default locale is prefixed aswell
        },
    },
    integrations: [react()],
    adapter: vercel({ imageService: true }),
});

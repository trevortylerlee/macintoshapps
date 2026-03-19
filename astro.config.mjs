import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://macintoshapps.vercel.app",
  integrations: [sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/apps": "/",
  },
});

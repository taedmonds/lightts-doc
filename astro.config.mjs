// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'LightTs',
            description: 'Official documentation for LightTs, a lightweight Node.js framework.',
            favicon: '/favicon.ico',
            social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/taedmonds/lightts' }
            ],
            sidebar: [
                {
                    label: 'Start Here',
                    items: ['what-is-lightts', 'why-lightts', 'get-started', 'features']
                }
            ],
            plugins: [starlightThemeRapide()]
        })
    ]
});

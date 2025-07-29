// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';

// https://astro.build/config
export default defineConfig({
    site: 'https://lightts.dev',
    integrations: [
        starlight({
            title: 'LightTs',
            logo: {
                src: '/public/logo-text.png',
                replacesTitle: true
            },
            description: 'Official documentation for LightTs, a lightweight Node.js framework.',
            favicon: '/favicon.ico',
            social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/taedmonds/lightts' }
            ],
            sidebar: [
                {
                    label: 'Start Here',
                    items: ['what-is-lightts', 'why-lightts', 'get-started', 'toolkit']
                },
                {
                    label: 'CLI',
                    items: ['cli', 'cli/generate', 'cli/add']
                },
                {
                    label: 'Core',
                    items: ['core', 'core/responses', 'core/errors']
                },
                {
                    label: 'Features',
                    items: [
                        'features/jwt',
                        'features/validation',
                        'features/cors',
                        'features/database'
                    ]
                },
                {
                    label: 'Example',
                    items: ['examples']
                }
            ],
            plugins: [starlightThemeRapide()]
        })
    ]
});

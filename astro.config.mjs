// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
    site: 'https://lightts.dev',
    integrations: [
        partytown(),
        starlight({
            title: 'LightTs',
            logo: {
                dark: '/public/logo-text/dark.png',
                light: '/public/logo-text/light.png',
                replacesTitle: true
            },
            description: 'Official documentation for LightTs, a lightweight Node.js framework.',
            favicon: '/favicon.ico',
            head: [
                {
                    tag: 'script',
                    attrs: {
                        type: 'text/partytown',
                        async: true,
                        src: 'https://www.googletagmanager.com/gtag/js?id=G-T55ML82CKG'
                    }
                },
                {
                    tag: 'script',
                    attrs: {
                        type: 'text/partytown'
                    },
                    content: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-T55ML82CKG');
                   `
                }
            ],
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

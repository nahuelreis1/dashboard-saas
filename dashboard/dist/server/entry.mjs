import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_kA8K93tu.mjs';
import { manifest } from './manifest_bpoL44ZX.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/agent/config.astro.mjs');
const _page2 = () => import('./pages/api/agent/prompt.astro.mjs');
const _page3 = () => import('./pages/api/auth/callback.astro.mjs');
const _page4 = () => import('./pages/api/auth/google.astro.mjs');
const _page5 = () => import('./pages/api/auth/logout.astro.mjs');
const _page6 = () => import('./pages/api/files/list.astro.mjs');
const _page7 = () => import('./pages/api/files/upload.astro.mjs');
const _page8 = () => import('./pages/config.astro.mjs');
const _page9 = () => import('./pages/dashboard.astro.mjs');
const _page10 = () => import('./pages/knowledge.astro.mjs');
const _page11 = () => import('./pages/login.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/api/agent/config.ts", _page1],
    ["src/pages/api/agent/prompt.ts", _page2],
    ["src/pages/api/auth/callback.ts", _page3],
    ["src/pages/api/auth/google.ts", _page4],
    ["src/pages/api/auth/logout.ts", _page5],
    ["src/pages/api/files/list.ts", _page6],
    ["src/pages/api/files/upload.ts", _page7],
    ["src/pages/config.astro", _page8],
    ["src/pages/dashboard.astro", _page9],
    ["src/pages/knowledge.astro", _page10],
    ["src/pages/login.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///app/ideas/dashboard-saas/dashboard/dist/client/",
    "server": "file:///app/ideas/dashboard-saas/dashboard/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro",
    "experimentalStaticHeaders": false
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };

import 'piccolore';
import { o as decodeKey } from './chunks/astro/server_BahSWGGF.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Tsz8fIct.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///app/ideas/dashboard-saas/dashboard/","cacheDir":"file:///app/ideas/dashboard-saas/dashboard/node_modules/.astro/","outDir":"file:///app/ideas/dashboard-saas/dashboard/dist/","srcDir":"file:///app/ideas/dashboard-saas/dashboard/src/","publicDir":"file:///app/ideas/dashboard-saas/dashboard/public/","buildClientDir":"file:///app/ideas/dashboard-saas/dashboard/dist/client/","buildServerDir":"file:///app/ideas/dashboard-saas/dashboard/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/agent/config","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/agent\\/config\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"agent","dynamic":false,"spread":false}],[{"content":"config","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/agent/config.ts","pathname":"/api/agent/config","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/agent/prompt","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/agent\\/prompt\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"agent","dynamic":false,"spread":false}],[{"content":"prompt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/agent/prompt.ts","pathname":"/api/agent/prompt","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/callback","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/callback\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"callback","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/callback.ts","pathname":"/api/auth/callback","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/google","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/google\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"google","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/google.ts","pathname":"/api/auth/google","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/logout","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/logout\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"logout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/logout.ts","pathname":"/api/auth/logout","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/files/list","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/files\\/list\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"files","dynamic":false,"spread":false}],[{"content":"list","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/files/list.ts","pathname":"/api/files/list","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/files/upload","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/files\\/upload\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"files","dynamic":false,"spread":false}],[{"content":"upload","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/files/upload.ts","pathname":"/api/files/upload","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/config.DtpAb3Nw.css"}],"routeData":{"route":"/config","isIndex":false,"type":"page","pattern":"^\\/config\\/?$","segments":[[{"content":"config","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/config.astro","pathname":"/config","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/config.DtpAb3Nw.css"}],"routeData":{"route":"/dashboard","isIndex":false,"type":"page","pattern":"^\\/dashboard\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard.astro","pathname":"/dashboard","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/config.DtpAb3Nw.css"}],"routeData":{"route":"/knowledge","isIndex":false,"type":"page","pattern":"^\\/knowledge\\/?$","segments":[[{"content":"knowledge","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/knowledge.astro","pathname":"/knowledge","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/config.DtpAb3Nw.css"}],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/app/ideas/dashboard-saas/dashboard/src/pages/login.astro",{"propagation":"none","containsHead":true}],["/app/ideas/dashboard-saas/dashboard/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/app/ideas/dashboard-saas/dashboard/src/pages/config.astro",{"propagation":"none","containsHead":true}],["/app/ideas/dashboard-saas/dashboard/src/pages/dashboard.astro",{"propagation":"none","containsHead":true}],["/app/ideas/dashboard-saas/dashboard/src/pages/knowledge.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/agent/config@_@ts":"pages/api/agent/config.astro.mjs","\u0000@astro-page:src/pages/api/agent/prompt@_@ts":"pages/api/agent/prompt.astro.mjs","\u0000@astro-page:src/pages/api/auth/callback@_@ts":"pages/api/auth/callback.astro.mjs","\u0000@astro-page:src/pages/api/auth/google@_@ts":"pages/api/auth/google.astro.mjs","\u0000@astro-page:src/pages/api/auth/logout@_@ts":"pages/api/auth/logout.astro.mjs","\u0000@astro-page:src/pages/api/files/list@_@ts":"pages/api/files/list.astro.mjs","\u0000@astro-page:src/pages/api/files/upload@_@ts":"pages/api/files/upload.astro.mjs","\u0000@astro-page:src/pages/config@_@astro":"pages/config.astro.mjs","\u0000@astro-page:src/pages/dashboard@_@astro":"pages/dashboard.astro.mjs","\u0000@astro-page:src/pages/knowledge@_@astro":"pages/knowledge.astro.mjs","\u0000@astro-page:src/pages/login@_@astro":"pages/login.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_bpoL44ZX.mjs","/app/ideas/dashboard-saas/dashboard/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/app/ideas/dashboard-saas/dashboard/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_B35neNdA.mjs","/app/ideas/dashboard-saas/dashboard/src/components/AgentConfigForm":"_astro/AgentConfigForm.DQRywTJG.js","/app/ideas/dashboard-saas/dashboard/src/components/FileUploader":"_astro/FileUploader.rq9vTXeF.js","@astrojs/react/client.js":"_astro/client.Dc9Vh3na.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/config.DtpAb3Nw.css","/_astro/AgentConfigForm.DQRywTJG.js","/_astro/FileUploader.rq9vTXeF.js","/_astro/client.Dc9Vh3na.js","/_astro/createLucideIcon.DsP3NtnO.js","/_astro/index.DiEladB3.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"771PVLyOQ+DoAuwmvcTaZJTqQgpPG/hfZIrEFIhZcAA=","sessionConfig":{"driver":"fs-lite","options":{"base":"/app/ideas/dashboard-saas/dashboard/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };

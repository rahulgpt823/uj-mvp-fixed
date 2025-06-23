import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { Server } from 'node:http';
import { resolve, dirname, join } from 'node:path';
import nodeCrypto, { randomBytes } from 'node:crypto';
import { parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, getRequestURL, getResponseHeader, getResponseStatus, createError, getCookie, getHeader, parseCookies, setCookie, getQuery as getQuery$1, readBody, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getRouterParam, getResponseStatusText } from 'file://C:/repos/uj-mvp/frontend/node_modules/h3/dist/index.mjs';
import { escapeHtml } from 'file://C:/repos/uj-mvp/frontend/node_modules/@vue/shared/dist/shared.cjs.js';
import { createClient } from 'file://C:/repos/uj-mvp/frontend/node_modules/@supabase/supabase-js/dist/main/index.js';
import { parsePhoneNumber, isValidPhoneNumber } from 'file://C:/repos/uj-mvp/frontend/node_modules/libphonenumber-js/index.js';
import { createServerClient } from 'file://C:/repos/uj-mvp/frontend/node_modules/@supabase/ssr/dist/main/index.js';
import jwt from 'file://C:/repos/uj-mvp/frontend/node_modules/jsonwebtoken/index.js';
import { v2 } from 'file://C:/repos/uj-mvp/frontend/node_modules/cloudinary/cloudinary.js';
import { PrismaClient } from 'file://C:/repos/uj-mvp/frontend/node_modules/@prisma/client/default.js';
import { AsyncLocalStorage } from 'node:async_hooks';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file://C:/repos/uj-mvp/frontend/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withTrailingSlash, joinRelativeURL } from 'file://C:/repos/uj-mvp/frontend/node_modules/ufo/dist/index.mjs';
import { renderToString } from 'file://C:/repos/uj-mvp/frontend/node_modules/vue/server-renderer/index.mjs';
import { klona } from 'file://C:/repos/uj-mvp/frontend/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file://C:/repos/uj-mvp/frontend/node_modules/defu/dist/defu.mjs';
import destr, { destr as destr$1 } from 'file://C:/repos/uj-mvp/frontend/node_modules/destr/dist/index.mjs';
import { snakeCase } from 'file://C:/repos/uj-mvp/frontend/node_modules/scule/dist/index.mjs';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file://C:/repos/uj-mvp/frontend/node_modules/unhead/dist/server.mjs';
import { stringify, uneval } from 'file://C:/repos/uj-mvp/frontend/node_modules/devalue/index.js';
import { isVNode, toValue, isRef } from 'file://C:/repos/uj-mvp/frontend/node_modules/vue/index.mjs';
import { DeprecationsPlugin, PromisesPlugin, TemplateParamsPlugin, AliasSortingPlugin } from 'file://C:/repos/uj-mvp/frontend/node_modules/unhead/dist/plugins.mjs';
import { createHooks } from 'file://C:/repos/uj-mvp/frontend/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file://C:/repos/uj-mvp/frontend/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file://C:/repos/uj-mvp/frontend/node_modules/node-mock-http/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://C:/repos/uj-mvp/frontend/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://C:/repos/uj-mvp/frontend/node_modules/unstorage/drivers/fs.mjs';
import { digest, hash as hash$1 } from 'file://C:/repos/uj-mvp/frontend/node_modules/ohash/dist/index.mjs';
import { getContext } from 'file://C:/repos/uj-mvp/frontend/node_modules/unctx/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file://C:/repos/uj-mvp/frontend/node_modules/radix3/dist/index.mjs';
import { readFile } from 'node:fs/promises';
import consola, { consola as consola$1 } from 'file://C:/repos/uj-mvp/frontend/node_modules/consola/dist/index.mjs';
import { ErrorParser } from 'file://C:/repos/uj-mvp/frontend/node_modules/youch-core/build/index.js';
import { Youch } from 'file://C:/repos/uj-mvp/frontend/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file://C:/repos/uj-mvp/frontend/node_modules/source-map/source-map.js';
import { captureRawStackTrace, parseRawStackTrace } from 'file://C:/repos/uj-mvp/frontend/node_modules/errx/dist/index.js';
import { basename } from 'file://C:/repos/uj-mvp/frontend/node_modules/@nuxt/icon/node_modules/pathe/dist/index.mjs';
import { getIcons } from 'file://C:/repos/uj-mvp/frontend/node_modules/@iconify/utils/lib/index.mjs';
import { collections } from 'file://C:/repos/uj-mvp/frontend/.nuxt/nuxt-icon-server-bundle.mjs';
import { walkResolver } from 'file://C:/repos/uj-mvp/frontend/node_modules/unhead/dist/utils.mjs';

const serverAssets = [{"baseName":"server","dir":"C:/repos/uj-mvp/frontend/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:/repos/uj-mvp/frontend","watchOptions":{"ignored":[null]}}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:/repos/uj-mvp/frontend/server","watchOptions":{"ignored":[null]}}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:/repos/uj-mvp/frontend/.nuxt"}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:/repos/uj-mvp/frontend/.nuxt/cache"}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"C:/repos/uj-mvp/frontend/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {
  "nuxt": {},
  "icon": {
    "provider": "server",
    "class": "",
    "aliases": {},
    "iconifyApiEndpoint": "https://api.iconify.design",
    "localApiEndpoint": "/api/_nuxt_icon",
    "fallbackToApi": true,
    "cssSelectorPrefix": "i-",
    "cssWherePseudo": true,
    "mode": "css",
    "attrs": {
      "aria-hidden": true
    },
    "collections": [
      "academicons",
      "akar-icons",
      "ant-design",
      "arcticons",
      "basil",
      "bi",
      "bitcoin-icons",
      "bpmn",
      "brandico",
      "bx",
      "bxl",
      "bxs",
      "bytesize",
      "carbon",
      "catppuccin",
      "cbi",
      "charm",
      "ci",
      "cib",
      "cif",
      "cil",
      "circle-flags",
      "circum",
      "clarity",
      "codicon",
      "covid",
      "cryptocurrency",
      "cryptocurrency-color",
      "dashicons",
      "devicon",
      "devicon-plain",
      "ei",
      "el",
      "emojione",
      "emojione-monotone",
      "emojione-v1",
      "entypo",
      "entypo-social",
      "eos-icons",
      "ep",
      "et",
      "eva",
      "f7",
      "fa",
      "fa-brands",
      "fa-regular",
      "fa-solid",
      "fa6-brands",
      "fa6-regular",
      "fa6-solid",
      "fad",
      "fe",
      "feather",
      "file-icons",
      "flag",
      "flagpack",
      "flat-color-icons",
      "flat-ui",
      "flowbite",
      "fluent",
      "fluent-emoji",
      "fluent-emoji-flat",
      "fluent-emoji-high-contrast",
      "fluent-mdl2",
      "fontelico",
      "fontisto",
      "formkit",
      "foundation",
      "fxemoji",
      "gala",
      "game-icons",
      "geo",
      "gg",
      "gis",
      "gravity-ui",
      "gridicons",
      "grommet-icons",
      "guidance",
      "healthicons",
      "heroicons",
      "heroicons-outline",
      "heroicons-solid",
      "hugeicons",
      "humbleicons",
      "ic",
      "icomoon-free",
      "icon-park",
      "icon-park-outline",
      "icon-park-solid",
      "icon-park-twotone",
      "iconamoon",
      "iconoir",
      "icons8",
      "il",
      "ion",
      "iwwa",
      "jam",
      "la",
      "lets-icons",
      "line-md",
      "logos",
      "ls",
      "lucide",
      "lucide-lab",
      "mage",
      "majesticons",
      "maki",
      "map",
      "marketeq",
      "material-symbols",
      "material-symbols-light",
      "mdi",
      "mdi-light",
      "medical-icon",
      "memory",
      "meteocons",
      "mi",
      "mingcute",
      "mono-icons",
      "mynaui",
      "nimbus",
      "nonicons",
      "noto",
      "noto-v1",
      "octicon",
      "oi",
      "ooui",
      "openmoji",
      "oui",
      "pajamas",
      "pepicons",
      "pepicons-pencil",
      "pepicons-pop",
      "pepicons-print",
      "ph",
      "pixelarticons",
      "prime",
      "ps",
      "quill",
      "radix-icons",
      "raphael",
      "ri",
      "rivet-icons",
      "si-glyph",
      "simple-icons",
      "simple-line-icons",
      "skill-icons",
      "solar",
      "streamline",
      "streamline-emojis",
      "subway",
      "svg-spinners",
      "system-uicons",
      "tabler",
      "tdesign",
      "teenyicons",
      "token",
      "token-branded",
      "topcoat",
      "twemoji",
      "typcn",
      "uil",
      "uim",
      "uis",
      "uit",
      "uiw",
      "unjs",
      "vaadin",
      "vs",
      "vscode-icons",
      "websymbol",
      "weui",
      "whh",
      "wi",
      "wpf",
      "zmdi",
      "zondicons"
    ],
    "fetchTimeout": 1500
  }
};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "apiUrl": "http://localhost:5000/api",
    "rapidApiKey": "ec0e0cb4d2mshdc516d71ac6f415p110889jsn5b6027013afd",
    "googleMapsApiKey": "AIzaSyAQB-pegFgpxlBT7DfenjGN0C-D1sDlLds",
    "apiBase": "/api",
    "supabaseUrl": "https://bclkkbinnlxxsucnwlfj.supabase.co",
    "supabaseAnonKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjbGtrYmlubmx4eHN1Y253bGZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4NDMwMDQsImV4cCI6MjA2MTQxOTAwNH0._xcYt_-IzQRJOOIwjzD-ESJEd9cJgAgXvb_HF9Rbl2E"
  },
  "databaseUrl": "postgresql://postgres:Qaz123@456wsx@db.bclkkbinnlxxsucnwlfj.supabase.co:5432/postgres",
  "cloudinaryCloudName": "dfsdlj2pm",
  "cloudinaryApiKey": "756973559161555",
  "cloudinaryApiSecret": "Cg5FOgVV9oFDcwlk4ZFt0q-7JmA",
  "jwtSecret": "xyz123",
  "twilioAccountSid": "ACbbeb6ddedfc84ea677161484cc1a2366",
  "twilioAuthToken": "005c24e9df2d824c44eca3ed5b8ac57a",
  "twilioPhoneNumber": "+13155568321",
  "supabaseUrl": "https://bclkkbinnlxxsucnwlfj.supabase.co",
  "supabaseServiceRoleKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjbGtrYmlubmx4eHN1Y253bGZqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTg0MzAwNCwiZXhwIjoyMDYxNDE5MDA0fQ.OH-sqazsVhAMf-pz78M4fKCo_Llbh2JSqe4JTWwtyeY",
  "icon": {
    "serverKnownCssClasses": []
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  {
    return _sharedAppConfig;
  }
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const nitroAsyncContext = getContext("nitro-app", {
  asyncContext: true,
  AsyncLocalStorage: AsyncLocalStorage 
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
  if (event.handled || isJsonRequest(event)) {
    return;
  }
  const defaultRes = await defaultHandler(error, event, { json: true });
  const statusCode = error.statusCode || 500;
  if (statusCode === 404 && defaultRes.status === 302) {
    setResponseHeaders(event, defaultRes.headers);
    setResponseStatus(event, defaultRes.status, defaultRes.statusText);
    return send(event, JSON.stringify(defaultRes.body, null, 2));
  }
  if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) {
    defaultRes.body.stack = defaultRes.body.stack.join("\n");
  }
  const errorObject = defaultRes.body;
  const url = new URL(errorObject.url);
  errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
  errorObject.message ||= "Server Error";
  errorObject.data ||= error.data;
  errorObject.statusMessage ||= error.statusMessage;
  delete defaultRes.headers["content-type"];
  delete defaultRes.headers["content-security-policy"];
  setResponseHeaders(event, defaultRes.headers);
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (event.handled) {
    return;
  }
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
  return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    if (!event.node?.res.headersSent) {
      setResponseHeaders(event, res.headers);
    }
    setResponseStatus(event, res.status, res.statusText);
    return send(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json || !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const parsed = await new ErrorParser().defineSourceLoader(sourceLoader).parse(error);
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
async function sourceLoader(frame) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const rawSourceMap = await readFile(`${frame.fileName}.map`, "utf8").catch(() => {
    });
    if (rawSourceMap) {
      const consumer = await new SourceMapConsumer(rawSourceMap);
      const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
      if (originalPosition.source && originalPosition.line) {
        frame.fileName = resolve(dirname(frame.fileName), originalPosition.source);
        frame.lineNumber = originalPosition.line;
        frame.columnNumber = originalPosition.column || 0;
      }
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const script = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _yLx2lIQwffkL_ZhxDo6HTboEkZlEvl_1PQym6ueZkU = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const rootDir = "C:/repos/uj-mvp/frontend";

const appHead = {"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"description","content":"Urvashi Jewellers - Your trusted jewelry partner"},{"hid":"description","name":"description","content":"Urvashi Jewellers - Your trusted jewelry partner"},{"name":"description","content":"Exquisite jewelry collection by Urvashi Jewellers"}],"link":[{"rel":"icon","type":"image/x-icon","href":"/favicon.ico"},{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap"},{"rel":"stylesheet","href":"https://fonts.googleapis.com/icon?family=Material+Icons"}],"style":[],"script":[{"src":"https://maps.googleapis.com/maps/api/js?key=AIzaSyAQB-pegFgpxlBT7DfenjGN0C-D1sDlLds","defer":true}],"noscript":[],"title":"Urvashi Jewellers"};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appId = "nuxt-app";

const devReducers = {
  VNode: (data) => isVNode(data) ? { type: data.type, props: data.props } : void 0,
  URL: (data) => data instanceof URL ? data.toString() : void 0
};
const asyncContext = getContext("nuxt-dev", { asyncContext: true, AsyncLocalStorage });
const _c9ALFzlTh5P31KtQ1ELG41p6fiwIBu6mtDulhEbe58 = (nitroApp) => {
  const handler = nitroApp.h3App.handler;
  nitroApp.h3App.handler = (event) => {
    return asyncContext.callAsync({ logs: [], event }, () => handler(event));
  };
  onConsoleLog((_log) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    const rawStack = captureRawStackTrace();
    if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
      return;
    }
    const trace = [];
    let filename = "";
    for (const entry of parseRawStackTrace(rawStack)) {
      if (entry.source === globalThis._importMeta_.url) {
        continue;
      }
      if (EXCLUDE_TRACE_RE.test(entry.source)) {
        continue;
      }
      filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
      trace.push({
        ...entry,
        source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
      });
    }
    const log = {
      ..._log,
      // Pass along filename to allow the client to display more info about where log comes from
      filename,
      // Clean up file names in stack trace
      stack: trace
    };
    ctx.logs.push(log);
  });
  nitroApp.hooks.hook("afterResponse", () => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    return nitroApp.hooks.callHook("dev:ssr-logs", { logs: ctx.logs, path: ctx.event.path });
  });
  nitroApp.hooks.hook("render:html", (htmlContext) => {
    const ctx = asyncContext.tryUse();
    if (!ctx) {
      return;
    }
    try {
      const reducers = Object.assign(/* @__PURE__ */ Object.create(null), devReducers, ctx.event.context._payloadReducers);
      htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
    } catch (e) {
      const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
      console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/api/composables/use-nuxt-app#payload.`);
    }
  });
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
  consola$1.addReporter({
    log(logObj) {
      callback(logObj);
    }
  });
  consola$1.wrapConsole();
}

const plugins = [
  _yLx2lIQwffkL_ZhxDo6HTboEkZlEvl_1PQym6ueZkU,
_c9ALFzlTh5P31KtQ1ELG41p6fiwIBu6mtDulhEbe58
];

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

const verifyAuthToken = (event) => {
  const config = useRuntimeConfig();
  const token = getCookie(event, "auth_token");
  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
      message: "Missing authentication token"
    });
  }
  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    return decoded;
  } catch (error) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
      message: "Invalid authentication token"
    });
  }
};

const serverSupabaseClient = (event) => {
  const config = useRuntimeConfig();
  let cookies = {};
  const cookieHeader = getHeader(event, "cookie");
  if (cookieHeader) {
    cookies = parseCookies(event);
  }
  const supabase = createServerClient(
    config.public.supabaseUrl,
    config.public.supabaseAnonKey,
    {
      cookies: {
        get(key) {
          return cookies[key];
        },
        set(key, value, options) {
          setCookie(event, key, value, options);
        },
        remove(key, options) {
          setCookie(event, key, "", { ...options, maxAge: -1 });
        }
      }
    }
  );
  return supabase;
};

async function validateSession(event) {
  try {
    const config = useRuntimeConfig();
    const supabase = createClient(config.public.supabaseUrl, config.supabaseServiceRoleKey);
    const sessionToken = getCookie(event, "session_token");
    if (!sessionToken) {
      return { success: false };
    }
    const { data: session, error: sessionError } = await supabase.from("user_sessions").select("user_id, expires_at, is_active").eq("session_token", sessionToken).eq("is_active", true).single();
    if (sessionError || !session) {
      console.log("\u274C Session validation failed:", {
        sessionError: sessionError == null ? void 0 : sessionError.message,
        hasSession: !!session
      });
      return { success: false };
    }
    const now = /* @__PURE__ */ new Date();
    const expiresAt = new Date(session.expires_at);
    if (expiresAt < now) {
      console.log("\u274C Session expired:", {
        now: now.toISOString(),
        expiresAt: expiresAt.toISOString()
      });
      return { success: false };
    }
    const { data: user, error: userError } = await supabase.from("users").select("id, first_name, last_name, mobile_number, email, is_active, role").eq("id", session.user_id).single();
    if (userError || !user) {
      console.log("\u274C User lookup failed:", userError == null ? void 0 : userError.message);
      return { success: false };
    }
    if (!user.is_active) {
      console.log("\u274C User account is inactive");
      return { success: false };
    }
    return {
      success: true,
      userId: user.id,
      user
    };
  } catch (error) {
    console.error("\u274C Session validation error:", error);
    return { success: false };
  }
}
async function requireAuth(event) {
  const validation = await validateSession(event);
  if (!validation.success || !validation.userId || !validation.user) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized - Authentication required"
    });
  }
  return {
    userId: validation.userId,
    user: validation.user
  };
}

const warnOnceSet = /* @__PURE__ */ new Set();
const DEFAULT_ENDPOINT = "https://api.iconify.design";
const _ks7MPX = defineCachedEventHandler(async (event) => {
  const url = getRequestURL(event);
  if (!url)
    return createError({ status: 400, message: "Invalid icon request" });
  const options = useAppConfig().icon;
  const collectionName = event.context.params?.collection?.replace(/\.json$/, "");
  const collection = collectionName ? await collections[collectionName]?.() : null;
  const apiEndPoint = options.iconifyApiEndpoint || DEFAULT_ENDPOINT;
  const icons = url.searchParams.get("icons")?.split(",");
  if (collection) {
    if (icons?.length) {
      const data = getIcons(
        collection,
        icons
      );
      consola$1.debug(`[Icon] serving ${(icons || []).map((i) => "`" + collectionName + ":" + i + "`").join(",")} from bundled collection`);
      return data;
    }
  } else {
    if (collectionName && !warnOnceSet.has(collectionName) && apiEndPoint === DEFAULT_ENDPOINT) {
      consola$1.warn([
        `[Icon] Collection \`${collectionName}\` is not found locally`,
        `We suggest to install it via \`npm i -D @iconify-json/${collectionName}\` to provide the best end-user experience.`
      ].join("\n"));
      warnOnceSet.add(collectionName);
    }
  }
  if (options.fallbackToApi === true || options.fallbackToApi === "server-only") {
    const apiUrl = new URL("./" + basename(url.pathname) + url.search, apiEndPoint);
    consola$1.debug(`[Icon] fetching ${(icons || []).map((i) => "`" + collectionName + ":" + i + "`").join(",")} from iconify api`);
    if (apiUrl.host !== new URL(apiEndPoint).host) {
      return createError({ status: 400, message: "Invalid icon request" });
    }
    try {
      const data = await $fetch(apiUrl.href);
      return data;
    } catch (e) {
      consola$1.error(e);
      if (e.status === 404)
        return createError({ status: 404 });
      else
        return createError({ status: 500, message: "Failed to fetch fallback icon" });
    }
  }
  return createError({ status: 404 });
}, {
  group: "nuxt",
  name: "icon",
  getKey(event) {
    const collection = event.context.params?.collection?.replace(/\.json$/, "") || "unknown";
    const icons = String(getQuery$1(event).icons || "");
    return `${collection}_${icons.split(",")[0]}_${icons.length}_${hash$1(icons)}`;
  },
  swr: true,
  maxAge: 60 * 60 * 24 * 7
  // 1 week
});

const VueResolver = (_, value) => {
  return isRef(value) ? toValue(value) : value;
};

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

function resolveUnrefHeadInput(input) {
  return walkResolver(input, VueResolver);
}

function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

const unheadOptions = {
  disableDefaults: true,
  disableCapoSorting: false,
  plugins: [DeprecationsPlugin, PromisesPlugin, TemplateParamsPlugin, AliasSortingPlugin],
};

function createSSRContext(event) {
  const ssrContext = {
    url: event.path,
    event,
    runtimeConfig: useRuntimeConfig(event),
    noSSR: event.context.nuxt?.noSSR || (false),
    head: createHead(unheadOptions),
    error: false,
    nuxt: void 0,
    /* NuxtApp */
    payload: {},
    _payloadReducers: /* @__PURE__ */ Object.create(null),
    modules: /* @__PURE__ */ new Set()
  };
  return ssrContext;
}
function setSSRError(ssrContext, error) {
  ssrContext.error = true;
  ssrContext.payload = { error };
  ssrContext.url = error.url;
}

const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const getServerEntry = () => import('file://C:/repos/uj-mvp/frontend/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getClientManifest = () => import('file://C:/repos/uj-mvp/frontend/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => {
    {
      return APP_ROOT_OPEN_TAG + r + APP_ROOT_CLOSE_TAG;
    }
  });
  const options = {
    manifest,
    renderToString: () => spaTemplate,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig(ssrContext.event);
    ssrContext.modules ||= /* @__PURE__ */ new Set();
    ssrContext.payload.serverRendered = false;
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function getRenderer(ssrContext) {
  return ssrContext.noSSR ? getSPARenderer() : getSSRRenderer();
}
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));

async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap && styleMap[mod]) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}

const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
function getServerComponentHTML(body) {
  const match = body.match(ROOT_NODE_REGEX);
  return match?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
    return void 0;
  }
  const response = {};
  for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) {
    response[name] = {
      ...slot,
      fallback: ssrContext.teleports?.[`island-fallback=${name}`]
    };
  }
  return response;
}
function getClientIslandResponse(ssrContext) {
  if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
    return void 0;
  }
  const response = {};
  for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
    const html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
    response[clientUid] = {
      ...component,
      html,
      slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
    };
  }
  return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
  const entries = Object.entries(teleports);
  const slots = {};
  for (const [key, value] of entries) {
    const match = key.match(SSR_CLIENT_SLOT_MARKER);
    if (match) {
      const [, id, slot] = match;
      if (!slot || clientUid !== id) {
        continue;
      }
      slots[slot] = value;
    }
  }
  return slots;
}
function replaceIslandTeleports(ssrContext, html) {
  const { teleports, islandContext } = ssrContext;
  if (islandContext || !teleports) {
    return html;
  }
  for (const key in teleports) {
    const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
    if (matchClientComp) {
      const [, uid, clientId] = matchClientComp;
      if (!uid || !clientId) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
      continue;
    }
    const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
    if (matchSlot) {
      const [, uid, slot] = matchSlot;
      if (!uid || !slot) {
        continue;
      }
      html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
        return full + teleports[key];
      });
    }
  }
  return html;
}

const ISLAND_SUFFIX_RE = /\.json(\?.*)?$/;
const _SxA8c9 = defineEventHandler(async (event) => {
  const nitroApp = useNitroApp();
  setResponseHeaders(event, {
    "content-type": "application/json;charset=utf-8",
    "x-powered-by": "Nuxt"
  });
  const islandContext = await getIslandContext(event);
  const ssrContext = {
    ...createSSRContext(event),
    islandContext,
    noSSR: false,
    url: islandContext.url
  };
  const renderer = await getSSRRenderer();
  const renderResult = await renderer.renderToString(ssrContext).catch(async (error) => {
    await ssrContext.nuxt?.hooks.callHook("app:error", error);
    throw error;
  });
  const inlinedStyles = await renderInlineStyles(ssrContext.modules ?? []);
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult });
  if (inlinedStyles.length) {
    ssrContext.head.push({ style: inlinedStyles });
  }
  {
    const { styles } = getRequestDependencies(ssrContext, renderer.rendererContext);
    const link = [];
    for (const resource of Object.values(styles)) {
      if ("inline" in getQuery(resource.file)) {
        continue;
      }
      if (resource.file.includes("scoped") && !resource.file.includes("pages/")) {
        link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file), crossorigin: "" });
      }
    }
    if (link.length) {
      ssrContext.head.push({ link }, { mode: "server" });
    }
  }
  const islandHead = {};
  for (const entry of ssrContext.head.entries.values()) {
    for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
      const currentValue = islandHead[key];
      if (Array.isArray(currentValue)) {
        currentValue.push(...value);
      }
      islandHead[key] = value;
    }
  }
  islandHead.link ||= [];
  islandHead.style ||= [];
  const islandResponse = {
    id: islandContext.id,
    head: islandHead,
    html: getServerComponentHTML(renderResult.html),
    components: getClientIslandResponse(ssrContext),
    slots: getSlotIslandResponse(ssrContext)
  };
  await nitroApp.hooks.callHook("render:island", islandResponse, { event, islandContext });
  return islandResponse;
});
async function getIslandContext(event) {
  let url = event.path || "";
  const componentParts = url.substring("/__nuxt_island".length + 1).replace(ISLAND_SUFFIX_RE, "").split("_");
  const hashId = componentParts.length > 1 ? componentParts.pop() : void 0;
  const componentName = componentParts.join("_");
  const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
  const ctx = {
    url: "/",
    ...context,
    id: hashId,
    name: componentName,
    props: destr$1(context.props) || {},
    slots: {},
    components: {}
  };
  return ctx;
}

const _lazy_jFVaZF = () => Promise.resolve().then(function () { return index_delete$1; });
const _lazy_2RDcVB = () => Promise.resolve().then(function () { return index_get$7; });
const _lazy_bV9FL4 = () => Promise.resolve().then(function () { return _id__delete$1; });
const _lazy_OSe7Am = () => Promise.resolve().then(function () { return _id__put$1; });
const _lazy_taBOld = () => Promise.resolve().then(function () { return index_get$5; });
const _lazy_xVzCd5 = () => Promise.resolve().then(function () { return index_post$5; });
const _lazy_6V72N7 = () => Promise.resolve().then(function () { return deleteAccount_delete$1; });
const _lazy_fIl2XX = () => Promise.resolve().then(function () { return sendOtp$1; });
const _lazy_LoLEhR = () => Promise.resolve().then(function () { return session_get$1; });
const _lazy_txxdjr = () => Promise.resolve().then(function () { return verifyOtp$1; });
const _lazy_jKxKag = () => Promise.resolve().then(function () { return subcategories$1; });
const _lazy_3yuKYh = () => Promise.resolve().then(function () { return index$3; });
const _lazy_2K0cOA = () => Promise.resolve().then(function () { return products_get$1; });
const _lazy_EP2kpg = () => Promise.resolve().then(function () { return index_get$3; });
const _lazy_pSoVZL = () => Promise.resolve().then(function () { return bulk_post$1; });
const _lazy_MyT_yK = () => Promise.resolve().then(function () { return index_post$3; });
const _lazy_Hb0lav = () => Promise.resolve().then(function () { return _productId__delete$1; });
const _lazy_1CuFt4 = () => Promise.resolve().then(function () { return clear_delete$1; });
const _lazy_SMNOSh = () => Promise.resolve().then(function () { return index_get$1; });
const _lazy_k856aL = () => Promise.resolve().then(function () { return index_post$1; });
const _lazy_Ahp9wP = () => Promise.resolve().then(function () { return _id_$1; });
const _lazy_rQkrtw = () => Promise.resolve().then(function () { return togglePublish$1; });
const _lazy_ANNawE = () => Promise.resolve().then(function () { return images$1; });
const _lazy_ZOkWUz = () => Promise.resolve().then(function () { return index$1; });
const _lazy__ndvis = () => Promise.resolve().then(function () { return supabase$1; });
const _lazy_Ij2dyO = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/api/account', handler: _lazy_jFVaZF, lazy: true, middleware: false, method: "delete" },
  { route: '/api/account', handler: _lazy_2RDcVB, lazy: true, middleware: false, method: "get" },
  { route: '/api/admin/collections/:id', handler: _lazy_bV9FL4, lazy: true, middleware: false, method: "delete" },
  { route: '/api/admin/collections/:id', handler: _lazy_OSe7Am, lazy: true, middleware: false, method: "put" },
  { route: '/api/admin/collections', handler: _lazy_taBOld, lazy: true, middleware: false, method: "get" },
  { route: '/api/admin/collections', handler: _lazy_xVzCd5, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/delete-account', handler: _lazy_6V72N7, lazy: true, middleware: false, method: "delete" },
  { route: '/api/auth/send-otp', handler: _lazy_fIl2XX, lazy: true, middleware: false, method: undefined },
  { route: '/api/auth/session', handler: _lazy_LoLEhR, lazy: true, middleware: false, method: "get" },
  { route: '/api/auth/verify-otp', handler: _lazy_txxdjr, lazy: true, middleware: false, method: undefined },
  { route: '/api/categories/:id/subcategories', handler: _lazy_jKxKag, lazy: true, middleware: false, method: undefined },
  { route: '/api/categories', handler: _lazy_3yuKYh, lazy: true, middleware: false, method: undefined },
  { route: '/api/collections/:slug/products', handler: _lazy_2K0cOA, lazy: true, middleware: false, method: "get" },
  { route: '/api/collections', handler: _lazy_EP2kpg, lazy: true, middleware: false, method: "get" },
  { route: '/api/enquiries/bulk', handler: _lazy_pSoVZL, lazy: true, middleware: false, method: "post" },
  { route: '/api/enquiries', handler: _lazy_MyT_yK, lazy: true, middleware: false, method: "post" },
  { route: '/api/favorites/:productId', handler: _lazy_Hb0lav, lazy: true, middleware: false, method: "delete" },
  { route: '/api/favorites/clear', handler: _lazy_1CuFt4, lazy: true, middleware: false, method: "delete" },
  { route: '/api/favorites', handler: _lazy_SMNOSh, lazy: true, middleware: false, method: "get" },
  { route: '/api/favorites', handler: _lazy_k856aL, lazy: true, middleware: false, method: "post" },
  { route: '/api/products/:id', handler: _lazy_Ahp9wP, lazy: true, middleware: false, method: undefined },
  { route: '/api/products/:id/toggle-publish', handler: _lazy_rQkrtw, lazy: true, middleware: false, method: undefined },
  { route: '/api/products/images', handler: _lazy_ANNawE, lazy: true, middleware: false, method: undefined },
  { route: '/api/products', handler: _lazy_ZOkWUz, lazy: true, middleware: false, method: undefined },
  { route: '/api/products/supabase', handler: _lazy__ndvis, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_Ij2dyO, lazy: true, middleware: false, method: undefined },
  { route: '/api/_nuxt_icon/:collection', handler: _ks7MPX, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: _SxA8c9, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_Ij2dyO, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(nodeHandler, aRequest);
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  {
    const _handler = h3App.handler;
    h3App.handler = (event) => {
      const ctx = { event };
      return nitroAsyncContext.callAsync(ctx, () => _handler(event));
    };
  }
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

if (!globalThis.crypto) {
  globalThis.crypto = nodeCrypto;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server = new Server(toNodeListener(nitroApp.h3App));
let listener;
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join(tmpdir(), socketName);
}
async function shutdown() {
  server.closeAllConnections?.();
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const _messages = { "appName": "Nuxt", "version": "", "statusCode": 500, "statusMessage": "Server error", "description": "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.", "stack": "" };
const template$1 = (messages) => {
  messages = { ..._messages, ...messages };
  return '<!DOCTYPE html><html lang="en"><head><title>' + escapeHtml(messages.statusCode) + " - " + escapeHtml(messages.statusMessage || "Internal Server Error") + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0" name="viewport"><style>.spotlight{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-40vh;filter:blur(30vh);height:60vh;opacity:.8}*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.pointer-events-none{pointer-events:none}.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.z-10{z-index:10}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.h-auto{height:auto}.min-h-screen{min-height:100vh}.flex{display:flex}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.overflow-y-auto{overflow-y:auto}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.bg-black\\/5{background-color:#0000000d}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.text-6xl{font-size:3.75rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:bg-white\\/10{background-color:#ffffff1a}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (min-width:640px){.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}.sm\\:text-8xl{font-size:6rem;line-height:1}}</style><script>!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();<\/script></head><body class="antialiased bg-white dark:bg-black dark:text-white flex flex-col font-sans min-h-screen pt-14 px-10 text-black"><div class="fixed left-0 pointer-events-none right-0 spotlight"></div><h1 class="font-medium mb-6 sm:text-8xl text-6xl">` + escapeHtml(messages.statusCode) + '</h1><p class="font-light leading-tight mb-8 sm:text-2xl text-xl">' + escapeHtml(messages.description) + '</p><div class="bg-black/5 bg-white dark:bg-white/10 flex-1 h-auto overflow-y-auto rounded-t-md"><div class="font-light leading-tight p-8 text-xl z-10">' + escapeHtml(messages.stack) + "</div></div></body></html>";
};

const errorDev = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template$1
});

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template
});

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: styles
});

const index_delete = defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const supabase = createClient(config.public.supabaseUrl, config.supabaseServiceRoleKey);
  const { userId } = verifyAuthToken(event);
  const adminAuthClient = createClient(config.public.supabaseUrl, config.supabaseServiceRoleKey).auth.admin;
  const { error: deleteAuthUserError } = await adminAuthClient.deleteUser(userId);
  if (deleteAuthUserError) {
    console.warn("Could not delete user from auth.users:", deleteAuthUserError.message);
  }
  const { error: deleteProfileError } = await supabase.from("users").delete().eq("id", userId);
  if (deleteProfileError) {
    console.error("Could not delete user profile:", deleteProfileError);
    throw createError({ statusCode: 500, message: "Could not delete user profile." });
  }
  return { success: true };
});

const index_delete$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_delete
});

const index_get$6 = defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const supabase = createClient(config.public.supabaseUrl, config.supabaseServiceRoleKey);
  const { userId } = verifyAuthToken(event);
  const { data: user, error } = await supabase.from("users").select("id, first_name, last_name, email, mobile_number").eq("id", userId).single();
  if (error || !user) {
    console.error("Error fetching account:", error);
    throw createError({
      statusCode: 404,
      statusMessage: "User not found"
    });
  }
  return {
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    mobileNumber: user.mobile_number
  };
});

const index_get$7 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_get$6
});

const supabase$7 = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);
async function verifyAdminAuth$3(event) {
  const validation = await validateSession(event);
  if (!validation.success || !validation.user) {
    throw createError({
      statusCode: 401,
      statusMessage: "Authentication required"
    });
  }
  if (validation.user.role !== "admin") {
    throw createError({
      statusCode: 403,
      statusMessage: "Admin access required"
    });
  }
  return validation.user;
}
const _id__delete = defineEventHandler(async (event) => {
  try {
    await verifyAdminAuth$3(event);
    const collectionId = getRouterParam(event, "id");
    if (!collectionId) {
      throw createError({
        statusCode: 400,
        statusMessage: "Collection ID is required"
      });
    }
    const { data: existingCollection, error: fetchError } = await supabase$7.from("collections").select("id, name").eq("id", collectionId).single();
    if (fetchError || !existingCollection) {
      throw createError({
        statusCode: 404,
        statusMessage: "Collection not found"
      });
    }
    const { error: analyticsError } = await supabase$7.from("collection_analytics").delete().eq("collection_id", collectionId);
    if (analyticsError) {
      console.warn("Failed to delete collection analytics:", analyticsError);
    }
    const { error: deleteError } = await supabase$7.from("collections").delete().eq("id", collectionId);
    if (deleteError) {
      console.error("Database delete error:", deleteError);
      throw createError({
        statusCode: 500,
        statusMessage: "Failed to delete collection"
      });
    }
    return {
      success: true,
      message: `Collection "${existingCollection.name}" deleted successfully`
    };
  } catch (error) {
    console.error("Delete collection error:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || "Failed to delete collection"
    });
  }
});

const _id__delete$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__delete
});

const supabase$6 = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);
async function verifyAdminAuth$2(event) {
  const validation = await validateSession(event);
  if (!validation.success || !validation.user) {
    throw createError({
      statusCode: 401,
      statusMessage: "Authentication required"
    });
  }
  if (validation.user.role !== "admin") {
    throw createError({
      statusCode: 403,
      statusMessage: "Admin access required"
    });
  }
  return validation.user;
}
const _id__put = defineEventHandler(async (event) => {
  try {
    await verifyAdminAuth$2(event);
    const collectionId = getRouterParam(event, "id");
    if (!collectionId) {
      throw createError({
        statusCode: 400,
        statusMessage: "Collection ID is required"
      });
    }
    const body = await readBody(event);
    if (!body.name && body.name !== "") {
      throw createError({
        statusCode: 400,
        statusMessage: "Collection name is required"
      });
    }
    const updateData = {
      updated_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    if (body.name !== void 0) updateData.name = body.name;
    if (body.description !== void 0) updateData.description = body.description;
    if (body.banner_image !== void 0) updateData.banner_image = body.banner_image;
    if (body.banner_alt !== void 0) updateData.banner_alt = body.banner_alt;
    if (body.tag_filters !== void 0) updateData.tag_filters = body.tag_filters;
    if (body.tag_match_mode !== void 0) updateData.tag_match_mode = body.tag_match_mode;
    if (body.min_price !== void 0) updateData.min_price = body.min_price;
    if (body.max_price !== void 0) updateData.max_price = body.max_price;
    if (body.start_date !== void 0) updateData.start_date = body.start_date || null;
    if (body.end_date !== void 0) updateData.end_date = body.end_date || null;
    if (body.is_active !== void 0) updateData.is_active = body.is_active;
    if (body.is_featured !== void 0) updateData.is_featured = body.is_featured;
    if (body.display_order !== void 0) updateData.display_order = body.display_order;
    if (body.name) {
      updateData.slug = body.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    }
    const { data: collection, error: updateError } = await supabase$6.from("collections").update(updateData).eq("id", collectionId).select("*").single();
    if (updateError) {
      console.error("Database update error:", updateError);
      throw createError({
        statusCode: 500,
        statusMessage: "Failed to update collection"
      });
    }
    if (body.tag_filters !== void 0 || body.tag_match_mode !== void 0 || body.min_price !== void 0 || body.max_price !== void 0) {
      try {
        const { error: functionError } = await supabase$6.rpc("update_collection_product_count", {
          collection_id: collectionId
        });
        if (functionError) {
          console.warn("Failed to update product count:", functionError);
        }
      } catch (err) {
        console.warn("Product count update failed:", err);
      }
    }
    return {
      success: true,
      data: {
        collection
      },
      message: "Collection updated successfully"
    };
  } catch (error) {
    console.error("Update collection error:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || "Failed to update collection"
    });
  }
});

const _id__put$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__put
});

const supabase$5 = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);
async function verifyAdminAuth$1(event) {
  const validation = await validateSession(event);
  if (!validation.success || !validation.user) {
    throw createError({
      statusCode: 401,
      statusMessage: "Authentication required"
    });
  }
  if (validation.user.role !== "admin") {
    throw createError({
      statusCode: 403,
      statusMessage: "Admin access required"
    });
  }
  return validation.user;
}
const index_get$4 = defineEventHandler(async (event) => {
  try {
    await verifyAdminAuth$1(event);
    const query = getQuery$1(event);
    const {
      include_inactive = "false",
      include_analytics = "false",
      limit = "50",
      offset = "0"
    } = query;
    let queryBuilder = supabase$5.from("collections").select(`
        id,
        name,
        slug,
        description,
        banner_image,
        banner_alt,
        meta_title,
        meta_description,
        is_active,
        is_featured,
        display_order,
        tag_filters,
        tag_match_mode,
        min_price,
        max_price,
        start_date,
        end_date,
        view_count,
        product_count,
        created_at,
        updated_at
      `);
    if (include_inactive === "false") {
      queryBuilder = queryBuilder.eq("is_active", true);
    }
    queryBuilder = queryBuilder.order("display_order", { ascending: true }).order("created_at", { ascending: false }).range(parseInt(offset), parseInt(offset) + parseInt(limit) - 1);
    const { data: collections, error } = await queryBuilder;
    if (error) {
      throw error;
    }
    let analytics = null;
    if (include_analytics === "true" && collections) {
      const collectionIds = collections.map((c) => c.id);
      if (collectionIds.length > 0) {
        const { data: analyticsData, error: analyticsError } = await supabase$5.from("collection_analytics").select(`
            collection_id,
            date,
            views,
            unique_views,
            product_clicks,
            favorites_added
          `).in("collection_id", collectionIds).gte("date", new Date(Date.now() - 30 * 24 * 60 * 60 * 1e3).toISOString().split("T")[0]).order("date", { ascending: false });
        if (!analyticsError) {
          analytics = analyticsData;
        }
      }
    }
    const { count: totalCount, error: countError } = await supabase$5.from("collections").select("*", { count: "exact", head: true });
    if (countError) {
      console.error("Count error:", countError);
    }
    return {
      success: true,
      data: {
        collections: collections || [],
        analytics,
        pagination: {
          total: totalCount || 0,
          limit: parseInt(limit),
          offset: parseInt(offset),
          has_more: ((collections == null ? void 0 : collections.length) || 0) === parseInt(limit)
        }
      }
    };
  } catch (error) {
    console.error("Admin collections fetch error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: error.message || "Failed to fetch collections"
    });
  }
});

const index_get$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_get$4
});

const supabase$4 = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);
async function verifyAdminAuth(event) {
  const validation = await validateSession(event);
  if (!validation.success || !validation.user) {
    throw createError({
      statusCode: 401,
      statusMessage: "Authentication required"
    });
  }
  if (validation.user.role !== "admin") {
    throw createError({
      statusCode: 403,
      statusMessage: "Admin access required"
    });
  }
  return validation.user;
}
function generateSlug(name) {
  return name.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const index_post$4 = defineEventHandler(async (event) => {
  try {
    await verifyAdminAuth(event);
    const body = await readBody(event);
    const {
      name,
      description,
      banner_image,
      banner_alt,
      meta_title,
      meta_description,
      is_active = true,
      is_featured = false,
      display_order = 0,
      tag_filters = [],
      tag_match_mode = "ANY",
      min_price,
      max_price,
      start_date,
      end_date
    } = body;
    if (!name || !name.trim()) {
      throw new Error("Collection name is required");
    }
    if (!banner_image || !banner_image.trim()) {
      throw new Error("Banner image is required");
    }
    if (!Array.isArray(tag_filters) || tag_filters.length === 0) {
      throw new Error("At least one tag filter is required");
    }
    if (!["ANY", "ALL"].includes(tag_match_mode)) {
      throw new Error("Tag match mode must be either ANY or ALL");
    }
    if (min_price && max_price && parseFloat(min_price) > parseFloat(max_price)) {
      throw new Error("Minimum price cannot be greater than maximum price");
    }
    if (start_date && end_date && new Date(start_date) > new Date(end_date)) {
      throw new Error("Start date cannot be after end date");
    }
    let slug = generateSlug(name);
    let slugCounter = 0;
    let finalSlug = slug;
    while (true) {
      const { data: existingCollection } = await supabase$4.from("collections").select("id").eq("slug", finalSlug).single();
      if (!existingCollection) break;
      slugCounter++;
      finalSlug = `${slug}-${slugCounter}`;
    }
    const { data: existingTags, error: tagsError } = await supabase$4.from("product_tags").select("name").in("name", tag_filters).eq("is_active", true);
    if (tagsError) {
      throw new Error("Failed to verify tag filters");
    }
    const existingTagNames = (existingTags == null ? void 0 : existingTags.map((t) => t.name)) || [];
    const missingTags = tag_filters.filter((tag) => !existingTagNames.includes(tag));
    if (missingTags.length > 0) {
      throw new Error(`The following tags do not exist or are inactive: ${missingTags.join(", ")}`);
    }
    const collectionData = {
      name: name.trim(),
      slug: finalSlug,
      description: (description == null ? void 0 : description.trim()) || null,
      banner_image: banner_image.trim(),
      banner_alt: (banner_alt == null ? void 0 : banner_alt.trim()) || null,
      meta_title: (meta_title == null ? void 0 : meta_title.trim()) || null,
      meta_description: (meta_description == null ? void 0 : meta_description.trim()) || null,
      is_active,
      is_featured,
      display_order: parseInt(display_order) || 0,
      tag_filters,
      tag_match_mode,
      min_price: min_price ? parseFloat(min_price) : null,
      max_price: max_price ? parseFloat(max_price) : null,
      start_date: start_date ? new Date(start_date).toISOString() : null,
      end_date: end_date ? new Date(end_date).toISOString() : null,
      view_count: 0,
      product_count: 0
    };
    const { data: collection, error } = await supabase$4.from("collections").insert(collectionData).select().single();
    if (error) {
      throw error;
    }
    try {
      const { data: productCount } = await supabase$4.rpc("get_collection_product_count", { collection_id: collection.id });
      if (productCount !== null) {
        await supabase$4.from("collections").update({ product_count: productCount }).eq("id", collection.id);
        collection.product_count = productCount;
      }
    } catch (countError) {
      console.error("Failed to calculate initial product count:", countError);
    }
    return {
      success: true,
      data: {
        collection,
        message: "Collection created successfully"
      }
    };
  } catch (error) {
    console.error("Create collection error:", error);
    throw createError({
      statusCode: error.message.includes("Authentication") || error.message.includes("Admin") ? 401 : 400,
      statusMessage: error.message || "Failed to create collection"
    });
  }
});

const index_post$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_post$4
});

const deleteAccount_delete = defineEventHandler(async (event) => {
  try {
    const client = await serverSupabaseClient(event);
    const { data: { user }, error: userError } = await client.auth.getUser();
    if (userError || !user) {
      throw createError({
        statusCode: 401,
        statusMessage: "Unauthorized"
      });
    }
    const userId = user.id;
    const { error: transactionError } = await client.rpc("delete_user_account", {
      user_id: userId
    });
    if (transactionError) {
      console.error("Delete account transaction error:", transactionError);
      await deleteUserDataManually(client, userId);
    }
    const { error: authDeleteError } = await client.auth.admin.deleteUser(userId);
    if (authDeleteError) {
      console.error("Auth delete error:", authDeleteError);
    }
    return {
      success: true,
      message: "Account deleted successfully"
    };
  } catch (error) {
    console.error("Delete account error:", error);
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to delete account"
    });
  }
});
async function deleteUserDataManually(client, userId) {
  try {
    await client.from("user_favorites").delete().eq("user_id", userId);
    await client.from("user_sessions").delete().eq("user_id", userId);
    await client.from("otp_records").delete().eq("user_id", userId);
    await client.from("users").delete().eq("id", userId);
    console.log("User data deleted manually for user:", userId);
  } catch (error) {
    console.error("Manual delete error:", error);
    throw error;
  }
}

const deleteAccount_delete$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: deleteAccount_delete
});

function validatePhoneNumber(phoneNumber, countryCode) {
  try {
    const cleanNumber = phoneNumber.replace(/[^\d+]/g, "");
    const defaultCountry = (countryCode == null ? void 0 : countryCode.replace("+", "")) || "IN";
    if (defaultCountry === "IN" && cleanNumber.length === 10) {
      const fullNumber2 = `+91${cleanNumber}`;
      const parsed2 = parsePhoneNumber(fullNumber2);
      if (parsed2 && isValidPhoneNumber(fullNumber2)) {
        return {
          isValid: true,
          formattedNumber: parsed2.formatInternational(),
          countryCode: "+91",
          nationalNumber: cleanNumber,
          country: "IN"
        };
      }
    }
    const fullNumber = countryCode ? `${countryCode}${cleanNumber}` : cleanNumber;
    const parsed = parsePhoneNumber(fullNumber, defaultCountry);
    if (!parsed) {
      return {
        isValid: false,
        formattedNumber: phoneNumber,
        countryCode: countryCode || "+91",
        nationalNumber: phoneNumber,
        error: "Invalid phone number format"
      };
    }
    const isValid = isValidPhoneNumber(fullNumber, defaultCountry);
    if (!isValid) {
      return {
        isValid: false,
        formattedNumber: phoneNumber,
        countryCode: countryCode || "+91",
        nationalNumber: phoneNumber,
        error: "Invalid phone number"
      };
    }
    return {
      isValid: true,
      formattedNumber: parsed.formatInternational(),
      countryCode: `+${parsed.countryCallingCode}`,
      nationalNumber: parsed.nationalNumber,
      country: parsed.country
    };
  } catch (error) {
    const cleanNumber = phoneNumber.replace(/[^\d]/g, "");
    if (countryCode === "+91" && cleanNumber.length === 10) {
      return {
        isValid: true,
        formattedNumber: `+91 ${cleanNumber}`,
        countryCode: "+91",
        nationalNumber: cleanNumber,
        country: "IN"
      };
    }
    return {
      isValid: false,
      formattedNumber: phoneNumber,
      countryCode: countryCode || "+91",
      nationalNumber: phoneNumber,
      error: "Failed to validate phone number"
    };
  }
}
function generateOTP() {
  return Math.floor(1e5 + Math.random() * 9e5).toString();
}
function isOTPExpired(expiresAt) {
  return /* @__PURE__ */ new Date() > new Date(expiresAt);
}
function getOTPExpiryTime() {
  const now = /* @__PURE__ */ new Date();
  return new Date(now.getTime() + 5 * 60 * 1e3);
}
function validateOTPFormat(otp) {
  return /^\d{6}$/.test(otp);
}
function generateSessionToken() {
  return randomBytes(32).toString("hex");
}
function getSessionExpiryTime() {
  const now = /* @__PURE__ */ new Date();
  return new Date(now.getTime() + 30 * 24 * 60 * 60 * 1e3);
}

const sendOtp = defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);
  const clientIP = getRequestHeader(event, "x-forwarded-for") || getRequestHeader(event, "x-real-ip") || getRequestHeader(event, "cf-connecting-ip") || "unknown";
  const supabaseUrl = config.public.supabaseUrl || process.env.SUPABASE_URL || "";
  const supabaseKey = config.public.supabaseAnonKey || process.env.SUPABASE_ANON_KEY || "";
  if (!supabaseUrl || !supabaseKey) {
    throw createError({
      statusCode: 500,
      statusMessage: "Missing Supabase configuration"
    });
  }
  const supabase = createClient(supabaseUrl, supabaseKey);
  try {
    if (!body.mobileNumber || !body.countryCode) {
      return {
        success: false,
        message: "Mobile number and country code are required"
      };
    }
    const phoneValidation = validatePhoneNumber(body.mobileNumber, body.countryCode);
    if (!phoneValidation.isValid) {
      return {
        success: false,
        message: phoneValidation.error || "Invalid phone number"
      };
    }
    const { nationalNumber, countryCode } = phoneValidation;
    let purpose = body.purpose;
    if (!purpose) {
      const { data: existingUser2 } = await supabase.from("users").select("id").eq("mobile_number", nationalNumber).eq("country_code", countryCode).single();
      if (existingUser2) {
        purpose = "login";
      } else {
        purpose = "registration";
      }
    }
    console.log("\u{1F50D} Send OTP:", {
      mobileNumber: nationalNumber,
      countryCode,
      purpose,
      clientIP
    });
    const rateLimitIdentifier = `${countryCode}${nationalNumber}`;
    const { data: rateLimit } = await supabase.from("rate_limits").select("*").eq("identifier", rateLimitIdentifier).eq("action", "otp_request").single();
    if (rateLimit) {
      const now = /* @__PURE__ */ new Date();
      const windowStart = new Date(rateLimit.window_start);
      const timeDiff = now.getTime() - windowStart.getTime();
      const windowDuration = 60 * 1e3;
      if (rateLimit.blocked_until && new Date(rateLimit.blocked_until) > now) {
        const remainingTime = Math.ceil((new Date(rateLimit.blocked_until).getTime() - now.getTime()) / 1e3);
        return {
          success: false,
          message: `Too many OTP requests. Please try again in ${remainingTime} seconds.`,
          blockedUntil: rateLimit.blocked_until
        };
      }
      if (timeDiff > windowDuration) {
        await supabase.from("rate_limits").update({
          attempts: 1,
          window_start: now.toISOString(),
          blocked_until: null,
          updated_at: now.toISOString()
        }).eq("id", rateLimit.id);
      } else {
        const newAttempts = rateLimit.attempts + 1;
        const maxAttempts = 3;
        if (newAttempts > maxAttempts) {
          const blockedUntil = new Date(now.getTime() + 60 * 1e3);
          await supabase.from("rate_limits").update({
            attempts: newAttempts,
            blocked_until: blockedUntil.toISOString(),
            updated_at: now.toISOString()
          }).eq("id", rateLimit.id);
          return {
            success: false,
            message: "Too many OTP requests. Please try again in 1 minute.",
            blockedUntil: blockedUntil.toISOString()
          };
        } else {
          await supabase.from("rate_limits").update({
            attempts: newAttempts,
            updated_at: now.toISOString()
          }).eq("id", rateLimit.id);
        }
      }
    } else {
      await supabase.from("rate_limits").insert({
        identifier: rateLimitIdentifier,
        action: "otp_request",
        attempts: 1,
        window_start: (/* @__PURE__ */ new Date()).toISOString()
      });
    }
    const { data: existingUser } = await supabase.from("users").select("id, first_name, last_name, is_verified").eq("mobile_number", nationalNumber).eq("country_code", countryCode).single();
    if (purpose === "login" && !existingUser) {
      return {
        success: false,
        message: "User not found. Please register first."
      };
    }
    if (purpose === "registration" && existingUser) {
      return {
        success: false,
        message: "User already exists. Please login instead."
      };
    }
    const otpCode = generateOTP();
    const expiresAt = getOTPExpiryTime();
    const { error: otpError } = await supabase.from("otp_verifications").insert({
      mobile_number: nationalNumber,
      country_code: countryCode,
      otp_code: otpCode,
      expires_at: expiresAt.toISOString()
    });
    if (otpError) {
      console.error("\u274C Failed to store OTP:", otpError);
      throw createError({
        statusCode: 500,
        statusMessage: "Failed to generate OTP"
      });
    }
    console.log(`\u{1F510} OTP for ${countryCode}${nationalNumber}: ${otpCode}`);
    const isDevelopment = true;
    console.log(`\u2705 OTP sent successfully to ${phoneValidation.formattedNumber} (${purpose})`);
    return {
      success: true,
      message: `OTP sent successfully to ${phoneValidation.formattedNumber}`,
      expiresAt: expiresAt.toISOString(),
      purpose,
      ...isDevelopment && { otp: otpCode }
      // Only in development
    };
  } catch (error) {
    console.error("\u274C Send OTP error:", error);
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      statusMessage: "Internal server error"
    });
  }
});

const sendOtp$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: sendOtp
});

const session_get = defineEventHandler(async (event) => {
  try {
    const validation = await validateSession(event);
    if (!validation.success || !validation.user) {
      return {
        success: false,
        user: null,
        sessionToken: null
      };
    }
    const user = validation.user;
    const sessionToken = getCookie(event, "session_token");
    return {
      success: true,
      user: {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        mobileNumber: user.mobile_number,
        role: user.role,
        isActive: user.is_active
      },
      sessionToken
    };
  } catch (error) {
    console.error("Get session error:", error);
    return {
      success: false,
      user: null,
      sessionToken: null
    };
  }
});

const session_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: session_get
});

const verifyOtp = defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);
  const supabaseUrl = config.public.supabaseUrl || process.env.SUPABASE_URL || "";
  const supabaseKey = config.public.supabaseAnonKey || process.env.SUPABASE_ANON_KEY || "";
  if (!supabaseUrl || !supabaseKey) {
    throw createError({
      statusCode: 500,
      statusMessage: "Missing Supabase configuration"
    });
  }
  const supabase = createClient(supabaseUrl, supabaseKey);
  try {
    if (!body.mobileNumber || !body.countryCode || !body.otpCode) {
      return {
        success: false,
        message: "Mobile number, country code, and OTP code are required"
      };
    }
    const phoneValidation = validatePhoneNumber(body.mobileNumber, body.countryCode);
    if (!phoneValidation.isValid) {
      return {
        success: false,
        message: phoneValidation.error || "Invalid phone number"
      };
    }
    if (!validateOTPFormat(body.otpCode)) {
      return {
        success: false,
        message: "Invalid OTP format. Please enter a 6-digit code."
      };
    }
    const { nationalNumber, countryCode } = phoneValidation;
    let purpose = body.purpose;
    if (!purpose) {
      if (body.firstName && body.lastName) {
        purpose = "registration";
      } else {
        purpose = "login";
      }
    }
    console.log("\u{1F50D} OTP Verification:", {
      mobileNumber: nationalNumber,
      countryCode,
      purpose,
      hasFirstName: !!body.firstName,
      hasLastName: !!body.lastName
    });
    const { data: otpRecord, error: otpError } = await supabase.from("otp_verifications").select("*").eq("mobile_number", nationalNumber).eq("country_code", countryCode).eq("otp_code", body.otpCode).eq("is_used", false).order("created_at", { ascending: false }).limit(1).single();
    if (otpError || !otpRecord) {
      console.error("\u274C OTP not found:", otpError);
      return {
        success: false,
        message: "Invalid OTP code. Please check and try again."
      };
    }
    if (isOTPExpired(otpRecord.expires_at)) {
      return {
        success: false,
        message: "OTP has expired. Please request a new one."
      };
    }
    await supabase.from("otp_verifications").update({ is_used: true, used_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", otpRecord.id);
    if (purpose === "registration") {
      if (!body.firstName || !body.lastName) {
        return {
          success: false,
          message: "First name and last name are required for registration"
        };
      }
      const { data: existingUser } = await supabase.from("users").select("id").eq("mobile_number", nationalNumber).eq("country_code", countryCode).single();
      if (existingUser) {
        return {
          success: false,
          message: "User already exists. Please login instead."
        };
      }
      const { data: newUser, error: userError } = await supabase.from("users").insert({
        mobile_number: nationalNumber,
        country_code: countryCode,
        first_name: body.firstName,
        last_name: body.lastName,
        email: body.email || null,
        is_verified: true,
        is_active: true,
        role: "user"
      }).select().single();
      if (userError) {
        console.error("\u274C Failed to create user:", userError);
        return {
          success: false,
          message: "Failed to create user account"
        };
      }
      const sessionToken = generateSessionToken();
      const sessionExpiresAt = getSessionExpiryTime();
      const { error: sessionError } = await supabase.from("user_sessions").insert({
        user_id: newUser.id,
        session_token: sessionToken,
        expires_at: sessionExpiresAt.toISOString(),
        device_info: JSON.stringify({
          userAgent: getRequestHeader(event, "user-agent") || "unknown",
          ip: getRequestHeader(event, "x-forwarded-for") || "unknown"
        })
      });
      if (sessionError) {
        console.error("\u274C Failed to create session:", sessionError);
        return {
          success: false,
          message: "Failed to create user session"
        };
      }
      setCookie(event, "session_token", sessionToken, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 30 * 24 * 60 * 60,
        // 30 days
        path: "/"
      });
      console.log("\u2705 Registration successful for user:", newUser.id);
      return {
        success: true,
        message: "Registration successful!",
        user: {
          id: newUser.id,
          firstName: newUser.first_name,
          lastName: newUser.last_name,
          mobileNumber: newUser.mobile_number,
          countryCode: newUser.country_code,
          email: newUser.email,
          isVerified: newUser.is_verified,
          role: newUser.role
        },
        token: sessionToken,
        expiresAt: sessionExpiresAt.toISOString(),
        isNewUser: true
      };
    } else if (purpose === "login") {
      const { data: existingUser, error: userError } = await supabase.from("users").select("*").eq("mobile_number", nationalNumber).eq("country_code", countryCode).single();
      if (userError || !existingUser) {
        return {
          success: false,
          message: "User not found. Please register first."
        };
      }
      const sessionToken = generateSessionToken();
      const sessionExpiresAt = getSessionExpiryTime();
      const { error: sessionError } = await supabase.from("user_sessions").insert({
        user_id: existingUser.id,
        session_token: sessionToken,
        expires_at: sessionExpiresAt.toISOString(),
        device_info: JSON.stringify({
          userAgent: getRequestHeader(event, "user-agent") || "unknown",
          ip: getRequestHeader(event, "x-forwarded-for") || "unknown"
        })
      });
      if (sessionError) {
        console.error("\u274C Failed to create session:", sessionError);
        return {
          success: false,
          message: "Failed to create user session"
        };
      }
      setCookie(event, "session_token", sessionToken, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 30 * 24 * 60 * 60,
        // 30 days
        path: "/"
      });
      console.log("\u2705 Login successful for user:", existingUser.id);
      return {
        success: true,
        message: "Login successful!",
        user: {
          id: existingUser.id,
          firstName: existingUser.first_name,
          lastName: existingUser.last_name,
          mobileNumber: existingUser.mobile_number,
          countryCode: existingUser.country_code,
          email: existingUser.email,
          isVerified: existingUser.is_verified,
          role: existingUser.role
        },
        token: sessionToken,
        expiresAt: sessionExpiresAt.toISOString(),
        isNewUser: false
      };
    }
    return {
      success: false,
      message: "Invalid purpose specified"
    };
  } catch (error) {
    console.error("\u274C Verify OTP error:", error);
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      statusMessage: "Internal server error"
    });
  }
});

const verifyOtp$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: verifyOtp
});

let prisma;
{
  if (!global.__prisma) {
    global.__prisma = new PrismaClient();
  }
  prisma = global.__prisma;
}

const subcategories = defineEventHandler(async (event) => {
  const method = event.method;
  const categoryId = getRouterParam(event, "id");
  if (!categoryId) {
    throw createError({
      statusCode: 400,
      message: "Category ID is required"
    });
  }
  try {
    switch (method) {
      case "GET":
        const subcategories = await prisma.subcategory.findMany({
          where: {
            categoryId: parseInt(categoryId)
          }
        });
        return subcategories;
      case "POST":
        const body = await readBody(event);
        const { name, description } = body;
        const subcategory = await prisma.subcategory.create({
          data: {
            name,
            description,
            categoryId: parseInt(categoryId)
          }
        });
        return subcategory;
      default:
        throw new Error(`Method ${method} not allowed`);
    }
  } catch (error) {
    console.error("Error handling subcategory request:", error);
    throw createError({
      statusCode: 500,
      message: "Internal server error"
    });
  }
});

const subcategories$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: subcategories
});

const index$2 = defineEventHandler(async (event) => {
  const method = event.method;
  try {
    switch (method) {
      case "GET":
        try {
          const categories = await prisma.category.findMany({
            include: {
              subcategories: true
            }
          });
          return categories;
        } catch (dbError) {
          console.log("Database connection failed, returning mock categories for testing:", dbError);
          return [
            {
              id: "1",
              name: "GOLD_ORNAMENTS",
              description: "Gold jewelry and ornaments",
              subcategories: [
                { id: "1", name: "Rings", categoryId: "1" },
                { id: "2", name: "Necklaces", categoryId: "1" },
                { id: "3", name: "Earrings", categoryId: "1" }
              ]
            },
            {
              id: "2",
              name: "SILVER_ARTICLES",
              description: "Silver articles and items",
              subcategories: [
                { id: "4", name: "Bowls", categoryId: "2" },
                { id: "5", name: "Plates", categoryId: "2" },
                { id: "6", name: "Cups", categoryId: "2" }
              ]
            },
            {
              id: "3",
              name: "SILVER_ORNAMENTS",
              description: "Silver jewelry and ornaments",
              subcategories: [
                { id: "7", name: "Bracelets", categoryId: "3" },
                { id: "8", name: "Anklets", categoryId: "3" },
                { id: "9", name: "Chains", categoryId: "3" }
              ]
            },
            {
              id: "4",
              name: "SILVER_JEWELLERY",
              description: "Silver jewelry collection",
              subcategories: [
                { id: "10", name: "Pendants", categoryId: "4" },
                { id: "11", name: "Rings", categoryId: "4" },
                { id: "12", name: "Earrings", categoryId: "4" }
              ]
            }
          ];
        }
      case "POST":
        const body = await readBody(event);
        const { name, description } = body;
        if (!name) {
          throw createError({
            statusCode: 400,
            message: "Category name is required"
          });
        }
        try {
          const category = await prisma.category.create({
            data: {
              name,
              description
            },
            include: {
              subcategories: true
            }
          });
          return category;
        } catch (dbError) {
          console.log("Database connection failed, but category data is valid:", dbError);
          return {
            success: true,
            message: "Category data received successfully!",
            data: { name, description },
            note: "Database connection not available. Data would be saved when database is connected."
          };
        }
      default:
        throw createError({
          statusCode: 405,
          message: `Method ${method} not allowed`
        });
    }
  } catch (error) {
    console.error("Error handling category request:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Internal server error"
    });
  }
});

const index$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index$2
});

const supabase$3 = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);
const products_get = defineEventHandler(async (event) => {
  try {
    const slug = getRouterParam(event, "slug");
    const query = getQuery$1(event);
    const {
      limit = "20",
      offset = "0",
      sort_by = "created_at",
      sort_order = "desc",
      min_price,
      max_price,
      search
    } = query;
    if (!slug) {
      throw new Error("Collection slug is required");
    }
    const { data: collection, error: collectionError } = await supabase$3.from("collections").select(`
        id,
        name,
        slug,
        description,
        banner_image,
        banner_alt,
        tag_filters,
        tag_match_mode,
        min_price,
        max_price,
        start_date,
        end_date,
        view_count,
        product_count
      `).eq("slug", slug).eq("is_active", true).single();
    if (collectionError || !collection) {
      throw new Error(`Collection '${slug}' not found or inactive`);
    }
    const now = (/* @__PURE__ */ new Date()).toISOString();
    if (collection.start_date && collection.start_date > now) {
      throw new Error("Collection is not yet active");
    }
    if (collection.end_date && collection.end_date < now) {
      throw new Error("Collection has expired");
    }
    let productQuery = `
      SELECT DISTINCT
        p.id,
        p.name,
        p.sku,
        p.description,
        p.price,
        p.sale_price,
        p.stock_quantity,
        p.karat,
        p.weight,
        p.tags,
        p.is_published,
        p.subcategory_id,
        p.created_at,
        p.updated_at,
        -- Get the first product image
        (
          SELECT json_build_object(
            'id', pi.id,
            'url', pi.url,
            'public_id', pi.public_id
          )
          FROM product_images pi 
          WHERE pi.product_id = p.id 
          ORDER BY pi.created_at ASC 
          LIMIT 1
        ) as primary_image,
        -- Get all product tags as array
        COALESCE(
          ARRAY_AGG(DISTINCT pt.name) FILTER (WHERE pt.name IS NOT NULL),
          ARRAY[]::text[]
        ) as product_tags,
        -- Get subcategory info
        (
          SELECT json_build_object(
            'id', s.id,
            'name', s.name,
            'category_id', s.category_id
          )
          FROM subcategories s 
          WHERE s.id = p.subcategory_id
        ) as subcategory
      FROM products p
      LEFT JOIN product_tag_mappings ptm ON p.id::text = ptm.product_id
      LEFT JOIN product_tags pt ON ptm.tag_id = pt.id AND pt.is_active = true
      WHERE p.is_published = true
    `;
    const queryParams = [];
    let paramCount = 0;
    if (collection.tag_filters && collection.tag_filters.length > 0) {
      paramCount++;
      if (collection.tag_match_mode === "ALL") {
        productQuery += ` AND EXISTS (
          SELECT 1 FROM product_tag_mappings ptm2
          JOIN product_tags pt2 ON ptm2.tag_id = pt2.id
          WHERE ptm2.product_id = p.id::text
          AND pt2.name = ANY($${paramCount})
          GROUP BY ptm2.product_id
          HAVING COUNT(DISTINCT pt2.name) >= $${paramCount + 1}
        )`;
        queryParams.push(collection.tag_filters, collection.tag_filters.length);
        paramCount++;
      } else {
        productQuery += ` AND EXISTS (
          SELECT 1 FROM product_tag_mappings ptm2
          JOIN product_tags pt2 ON ptm2.tag_id = pt2.id
          WHERE ptm2.product_id = p.id::text
          AND pt2.name = ANY($${paramCount})
        )`;
        queryParams.push(collection.tag_filters);
      }
    }
    if (collection.min_price) {
      paramCount++;
      productQuery += ` AND p.price >= $${paramCount}`;
      queryParams.push(collection.min_price);
    }
    if (collection.max_price) {
      paramCount++;
      productQuery += ` AND p.price <= $${paramCount}`;
      queryParams.push(collection.max_price);
    }
    if (min_price) {
      paramCount++;
      productQuery += ` AND p.price >= $${paramCount}`;
      queryParams.push(parseFloat(min_price));
    }
    if (max_price) {
      paramCount++;
      productQuery += ` AND p.price <= $${paramCount}`;
      queryParams.push(parseFloat(max_price));
    }
    if (search) {
      paramCount++;
      productQuery += ` AND (
        p.name ILIKE $${paramCount} OR 
        p.description ILIKE $${paramCount} OR
        p.sku ILIKE $${paramCount}
      )`;
      queryParams.push(`%${search}%`);
    }
    productQuery += `
      GROUP BY p.id, p.name, p.sku, p.description, p.price, p.sale_price, 
               p.stock_quantity, p.karat, p.weight, p.tags, p.is_published, 
               p.subcategory_id, p.created_at, p.updated_at
      ORDER BY p.${sort_by} ${sort_order.toUpperCase()}
    `;
    paramCount++;
    productQuery += ` LIMIT $${paramCount}`;
    queryParams.push(parseInt(limit));
    paramCount++;
    productQuery += ` OFFSET $${paramCount}`;
    queryParams.push(parseInt(offset));
    const { data: products, error: productsError } = await supabase$3.rpc("execute_sql", {
      sql: productQuery,
      params: queryParams
    });
    if (productsError) {
      console.error("Products query error:", productsError);
      const { data: fallbackProducts, error: fallbackError } = await supabase$3.from("products").select(`
          *,
          product_images!inner (id, url, public_id),
          subcategories!inner (id, name, category_id)
        `).eq("is_published", true).range(parseInt(offset), parseInt(offset) + parseInt(limit) - 1).order(sort_by, { ascending: sort_order === "asc" });
      if (fallbackError) throw fallbackError;
      return {
        success: true,
        data: {
          collection,
          products: fallbackProducts || [],
          total: (fallbackProducts == null ? void 0 : fallbackProducts.length) || 0,
          has_more: ((fallbackProducts == null ? void 0 : fallbackProducts.length) || 0) === parseInt(limit),
          query_type: "fallback"
        }
      };
    }
    supabase$3.from("collections").update({
      view_count: (collection.view_count || 0) + 1,
      updated_at: (/* @__PURE__ */ new Date()).toISOString()
    }).eq("id", collection.id).then(() => {
    }).catch((err) => console.error("Failed to update view count:", err));
    return {
      success: true,
      data: {
        collection,
        products: products || [],
        total: (products == null ? void 0 : products.length) || 0,
        has_more: ((products == null ? void 0 : products.length) || 0) === parseInt(limit),
        query_type: "optimized",
        filters: {
          tag_filters: collection.tag_filters,
          tag_match_mode: collection.tag_match_mode,
          min_price: collection.min_price,
          max_price: collection.max_price,
          applied_filters: {
            min_price: min_price ? parseFloat(min_price) : null,
            max_price: max_price ? parseFloat(max_price) : null,
            search: search || null
          }
        }
      }
    };
  } catch (error) {
    console.error("Collection products fetch error:", error);
    return {
      success: false,
      error: {
        message: "Failed to fetch collection products",
        details: error.message
      }
    };
  }
});

const products_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: products_get
});

const supabase$2 = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);
const index_get$2 = defineEventHandler(async (event) => {
  try {
    const query = getQuery$1(event);
    const {
      featured_only = "false",
      include_counts = "true",
      limit = "50",
      offset = "0"
    } = query;
    let queryBuilder = supabase$2.from("collections").select(`
        id,
        name,
        slug,
        description,
        banner_image,
        banner_alt,
        meta_title,
        meta_description,
        is_featured,
        display_order,
        tag_filters,
        tag_match_mode,
        min_price,
        max_price,
        start_date,
        end_date,
        view_count,
        product_count,
        created_at,
        updated_at
      `).eq("is_active", true).order("display_order", { ascending: true }).order("created_at", { ascending: false });
    if (featured_only === "true") {
      queryBuilder = queryBuilder.eq("is_featured", true);
    }
    queryBuilder = queryBuilder.range(parseInt(offset), parseInt(offset) + parseInt(limit) - 1);
    const { data: collections, error } = await queryBuilder;
    if (error) {
      throw error;
    }
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const activeCollections = (collections == null ? void 0 : collections.filter((collection) => {
      const startOk = !collection.start_date || collection.start_date <= now;
      const endOk = !collection.end_date || collection.end_date >= now;
      return startOk && endOk;
    })) || [];
    if (include_counts === "true") {
      for (const collection of activeCollections) {
      }
    }
    return {
      success: true,
      data: {
        collections: activeCollections,
        total: activeCollections.length,
        has_more: activeCollections.length === parseInt(limit)
      }
    };
  } catch (error) {
    console.error("Collections fetch error:", error);
    return {
      success: false,
      error: {
        message: "Failed to fetch collections",
        details: error.message
      }
    };
  }
});

const index_get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_get$2
});

const bulk_post = defineEventHandler(async (event) => {
  try {
    const client = await serverSupabaseClient(event);
    const body = await readBody(event);
    const { name, mobile, email, message, productIds } = body;
    if (!name || !mobile || !message || !productIds || !Array.isArray(productIds)) {
      throw createError({
        statusCode: 400,
        statusMessage: "Missing required fields: name, mobile, message, and productIds array"
      });
    }
    const { data: { user }, error: userError } = await client.auth.getUser();
    if (userError || !user) {
      throw createError({
        statusCode: 401,
        statusMessage: "User not authenticated"
      });
    }
    const numericProductIds = productIds.map((id) => parseInt(id));
    const { data: products, error: productsError } = await client.from("products").select("id, name, price, category, images").in("id", numericProductIds);
    if (productsError) {
      console.error("Error fetching products:", productsError);
      throw createError({
        statusCode: 500,
        statusMessage: "Failed to fetch product details"
      });
    }
    const { data: enquiry, error: enquiryError } = await client.from("enquiries").insert({
      user_id: user.id,
      customer_name: name,
      customer_mobile: mobile,
      customer_email: email,
      message,
      enquiry_type: "bulk",
      status: "pending",
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    }).select().single();
    if (enquiryError) {
      console.error("Error creating enquiry:", enquiryError);
      throw createError({
        statusCode: 500,
        statusMessage: "Failed to create enquiry"
      });
    }
    const enquiryItems = products.map((product) => {
      var _a;
      return {
        enquiry_id: enquiry.id,
        product_id: product.id,
        product_name: product.name,
        product_price: product.price,
        product_category: product.category,
        product_image: ((_a = product.images) == null ? void 0 : _a[0]) || null
      };
    });
    const { error: itemsError } = await client.from("enquiry_items").insert(enquiryItems);
    if (itemsError) {
      console.error("Error creating enquiry items:", itemsError);
      await client.from("enquiries").delete().eq("id", enquiry.id);
      throw createError({
        statusCode: 500,
        statusMessage: "Failed to create enquiry items"
      });
    }
    console.log(`\u{1F4E7} Bulk enquiry received from ${name} (${mobile}) for ${productIds.length} items`);
    console.log(`\u{1F4CB} Enquiry ID: ${enquiry.id}`);
    console.log(`\u{1F4E6} Products: ${products.map((p) => p.name).join(", ")}`);
    return {
      success: true,
      message: "Bulk enquiry submitted successfully",
      enquiryId: enquiry.id,
      productCount: productIds.length
    };
  } catch (error) {
    console.error("Bulk enquiry error:", error);
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      statusMessage: error.message || "Failed to submit bulk enquiry"
    });
  }
});

const bulk_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: bulk_post
});

const index_post$2 = defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const { productIds, message } = await readBody(event);
  if (!productIds || !Array.isArray(productIds) || productIds.length === 0) {
    throw createError({ statusCode: 400, message: "Product IDs are required." });
  }
  const supabase = createClient(config.public.supabaseUrl, config.supabaseServiceRoleKey);
  const { userId } = verifyAuthToken(event);
  const { data: enquiry, error: enquiryError } = await supabase.from("enquiries").insert({ user_id: userId, message: message || "" }).select("id").single();
  if (enquiryError) {
    console.error("Error creating enquiry:", enquiryError);
    throw createError({ statusCode: 500, message: "Could not create enquiry." });
  }
  const enquiryItems = productIds.map((productId) => ({
    enquiry_id: enquiry.id,
    product_id: productId
  }));
  const { error: itemsError } = await supabase.from("enquiry_items").insert(enquiryItems);
  if (itemsError) {
    console.error("Error adding enquiry items:", itemsError);
    throw createError({ statusCode: 500, message: "Could not add items to enquiry." });
  }
  return { success: true, enquiryId: enquiry.id };
});

const index_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_post$2
});

const _productId__delete = defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig();
    const supabase = createClient(config.public.supabaseUrl, config.supabaseServiceRoleKey);
    const productId = getRouterParam(event, "productId");
    if (!productId) {
      throw createError({
        statusCode: 400,
        statusMessage: "Product ID is required"
      });
    }
    const { userId } = await requireAuth(event);
    const { error } = await supabase.from("user_favorites").delete().eq("user_id", userId).eq("product_id", productId);
    if (error) {
      console.error("Database error:", error);
      throw createError({
        statusCode: 500,
        statusMessage: "Failed to remove from favorites"
      });
    }
    return {
      success: true,
      message: "Removed from favorites"
    };
  } catch (error) {
    console.error("Remove favorite error:", error);
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      statusMessage: "Internal server error"
    });
  }
});

const _productId__delete$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _productId__delete
});

const clear_delete = defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig();
    const supabase = createClient(config.public.supabaseUrl, config.supabaseServiceRoleKey);
    const { userId } = await requireAuth(event);
    const { error } = await supabase.from("user_favorites").delete().eq("user_id", userId);
    if (error) {
      console.error("Database error:", error);
      throw createError({
        statusCode: 500,
        statusMessage: "Failed to clear favorites"
      });
    }
    return {
      success: true,
      message: "All favorites cleared successfully"
    };
  } catch (error) {
    console.error("Clear favorites error:", error);
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      statusMessage: "Internal server error"
    });
  }
});

const clear_delete$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: clear_delete
});

const index_get = defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig();
    const supabase = createClient(config.public.supabaseUrl, config.supabaseServiceRoleKey);
    const { userId } = await requireAuth(event);
    const { data: favorites, error } = await supabase.from("user_favorites").select(`
                id,
                user_id,
                product_id,
                product_name,
                product_image,
                product_price,
                product_category,
                created_at,
                updated_at
            `).eq("user_id", userId).order("created_at", { ascending: false });
    if (error) {
      console.error("Database error:", error);
      throw createError({
        statusCode: 500,
        statusMessage: "Failed to fetch favorites"
      });
    }
    const transformedFavorites = (favorites == null ? void 0 : favorites.map((fav) => ({
      id: fav.id,
      userId: fav.user_id,
      productId: fav.product_id,
      productName: fav.product_name,
      productImage: fav.product_image,
      productPrice: fav.product_price,
      productCategory: fav.product_category,
      createdAt: fav.created_at,
      updatedAt: fav.updated_at
    }))) || [];
    return {
      success: true,
      data: transformedFavorites
    };
  } catch (error) {
    console.error("Get favorites error:", error);
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      statusMessage: "Internal server error"
    });
  }
});

const index_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_get
});

const index_post = defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig();
    const supabase = createClient(config.public.supabaseUrl, config.supabaseServiceRoleKey);
    const body = await readBody(event);
    const { productId, productName, productImage, productPrice, productCategory } = body;
    const { userId } = await requireAuth(event);
    if (!productId || !productName || !productImage || !productPrice || !productCategory) {
      throw createError({
        statusCode: 400,
        statusMessage: "Missing required fields"
      });
    }
    const { data: existingFavorite, error: checkError } = await supabase.from("user_favorites").select("id").eq("user_id", userId).eq("product_id", productId).single();
    if (checkError && checkError.code !== "PGRST116") {
      console.error("Check existing favorite error:", checkError);
      throw createError({
        statusCode: 500,
        statusMessage: "Failed to check existing favorite"
      });
    }
    if (existingFavorite) {
      return {
        success: true,
        data: existingFavorite,
        message: "Product is already in favorites"
      };
    }
    const { data: newFavorite, error: insertError } = await supabase.from("user_favorites").insert({
      user_id: userId,
      product_id: productId,
      product_name: productName,
      product_image: productImage,
      product_price: productPrice,
      product_category: productCategory
    }).select().single();
    if (insertError) {
      console.error("Insert favorite error:", insertError);
      throw createError({
        statusCode: 500,
        statusMessage: "Failed to add to favorites"
      });
    }
    const transformedFavorite = {
      id: newFavorite.id,
      userId: newFavorite.user_id,
      productId: newFavorite.product_id,
      productName: newFavorite.product_name,
      productImage: newFavorite.product_image,
      productPrice: newFavorite.product_price,
      productCategory: newFavorite.product_category,
      createdAt: newFavorite.created_at,
      updatedAt: newFavorite.updated_at
    };
    return {
      success: true,
      data: transformedFavorite,
      message: "Added to favorites successfully"
    };
  } catch (error) {
    console.error("Add to favorites error:", error);
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      statusMessage: "Internal server error"
    });
  }
});

const index_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_post
});

v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
const _id_ = defineEventHandler(async (event) => {
  const method = event.method;
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({
      statusCode: 400,
      message: "Product ID is required"
    });
  }
  try {
    switch (method) {
      case "GET":
        const product = await prisma.product.findUnique({
          where: { id: parseInt(id) },
          include: {
            images: true,
            subcategory: {
              include: {
                category: true
              }
            }
          }
        });
        if (!product) {
          throw createError({
            statusCode: 404,
            message: "Product not found"
          });
        }
        return product;
      case "PUT":
        const body = await readBody(event);
        const { name, sku, categoryId, subcategoryId, price, stockQuantity, karat, weight, description, tags, images, deletedImages } = body;
        if (deletedImages == null ? void 0 : deletedImages.length) {
          await Promise.all(
            deletedImages.map(async (publicId) => {
              await v2.uploader.destroy(publicId);
            })
          );
        }
        const uploadedImages = await Promise.all(
          (images || []).map(async (image) => {
            const result = await v2.uploader.upload(image, {
              folder: "products"
            });
            return {
              url: result.secure_url,
              publicId: result.public_id
            };
          })
        );
        const updatedProduct = await prisma.product.update({
          where: { id: parseInt(id) },
          data: {
            name,
            sku,
            price,
            stockQuantity,
            karat,
            weight,
            description,
            tags,
            subcategoryId,
            images: {
              deleteMany: {
                publicId: {
                  in: deletedImages || []
                }
              },
              create: uploadedImages
            }
          },
          include: {
            images: true,
            subcategory: {
              include: {
                category: true
              }
            }
          }
        });
        return updatedProduct;
      case "DELETE":
        const productToDelete = await prisma.product.findUnique({
          where: { id: parseInt(id) },
          include: { images: true }
        });
        if (!productToDelete) {
          throw createError({
            statusCode: 404,
            message: "Product not found"
          });
        }
        await Promise.all(
          productToDelete.images.map(async (image) => {
            await v2.uploader.destroy(image.publicId);
          })
        );
        await prisma.product.delete({
          where: { id: parseInt(id) }
        });
        return { message: "Product deleted successfully" };
      default:
        throw new Error(`Method ${method} not allowed`);
    }
  } catch (error) {
    console.error("Error handling product request:", error);
    throw createError({
      statusCode: 500,
      message: "Internal server error"
    });
  }
});

const _id_$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id_
});

const togglePublish = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const config = useRuntimeConfig();
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({
      statusCode: 400,
      message: "Product ID is required"
    });
  }
  const supabaseUrl = config.public.supabaseUrl || process.env.SUPABASE_URL || "";
  const supabaseKey = config.public.supabaseAnonKey || process.env.SUPABASE_ANON_KEY || "";
  if (!supabaseUrl || !supabaseKey) {
    throw createError({
      statusCode: 500,
      message: "Missing Supabase configuration"
    });
  }
  const supabase = createClient(supabaseUrl, supabaseKey);
  try {
    const { data: product, error: fetchError } = await supabase.from("products").select("id, is_published").eq("id", parseInt(id)).single();
    if (fetchError || !product) {
      console.error("Error fetching product:", fetchError);
      throw createError({
        statusCode: 404,
        message: "Product not found"
      });
    }
    const { data: updatedProduct, error: updateError } = await supabase.from("products").update({ is_published: !product.is_published }).eq("id", parseInt(id)).select(`
                *,
                subcategories (
                    id,
                    name,
                    categories (
                        id,
                        name
                    )
                ),
                product_images (
                    id,
                    url,
                    public_id,
                    is_default
                )
            `).single();
    if (updateError) {
      console.error("Error updating product:", updateError);
      throw createError({
        statusCode: 500,
        message: "Failed to update product status"
      });
    }
    const transformedProduct = {
      id: updatedProduct.id,
      name: updatedProduct.name,
      sku: updatedProduct.sku,
      price: updatedProduct.price,
      stockQuantity: updatedProduct.stock_quantity,
      isPublished: updatedProduct.is_published,
      karat: updatedProduct.karat,
      weight: updatedProduct.weight,
      description: updatedProduct.description,
      tags: updatedProduct.tags || [],
      createdAt: updatedProduct.created_at,
      updatedAt: updatedProduct.updated_at,
      subcategory: {
        id: (_a = updatedProduct.subcategories) == null ? void 0 : _a.id,
        name: (_b = updatedProduct.subcategories) == null ? void 0 : _b.name,
        category: {
          id: (_d = (_c = updatedProduct.subcategories) == null ? void 0 : _c.categories) == null ? void 0 : _d.id,
          name: (_f = (_e = updatedProduct.subcategories) == null ? void 0 : _e.categories) == null ? void 0 : _f.name
        }
      },
      images: ((_g = updatedProduct.product_images) == null ? void 0 : _g.map((img) => ({
        url: img.url,
        publicId: img.public_id,
        isDefault: img.is_default
      }))) || []
    };
    return transformedProduct;
  } catch (error) {
    console.error("Error toggling product publish status:", error);
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      message: "Internal server error"
    });
  }
});

const togglePublish$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: togglePublish
});

const images = defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  v2.config({
    cloud_name: config.cloudinaryCloudName,
    api_key: config.cloudinaryApiKey,
    api_secret: config.cloudinaryApiSecret
  });
  const supabaseUrl = config.public.supabaseUrl || process.env.SUPABASE_URL || "";
  const supabaseKey = config.public.supabaseAnonKey || process.env.SUPABASE_ANON_KEY || "";
  if (!supabaseUrl || !supabaseKey) {
    throw createError({
      statusCode: 500,
      message: "Missing Supabase configuration"
    });
  }
  const supabase = createClient(supabaseUrl, supabaseKey);
  const method = event.method;
  if (method !== "POST") {
    throw createError({
      statusCode: 405,
      message: `Method ${method} not allowed`
    });
  }
  try {
    const body = await readBody(event);
    const { productId, images, category, subcategory, productName } = body;
    if (!productId || !images || !Array.isArray(images)) {
      throw createError({
        statusCode: 400,
        message: "Product ID and images array are required"
      });
    }
    const sanitizeName = (name) => name.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");
    const categoryFolder = sanitizeName(category || "uncategorized");
    const subcategoryFolder = sanitizeName(subcategory || "general");
    const firstThreeLetters = (category || "cat").substring(0, 3).toLowerCase();
    const timestamp = Date.now();
    const productFolder = `jewel-${firstThreeLetters}-${timestamp}`;
    const folderPath = `${categoryFolder}/${subcategoryFolder}/${productFolder}`;
    console.log("\u{1F4C1} Uploading images to folder:", folderPath);
    const uploadPromises = images.map(async (imageBase64, index) => {
      try {
        const result = await v2.uploader.upload(imageBase64, {
          folder: folderPath,
          public_id: `image-${index + 1}`,
          resource_type: "image",
          transformation: [
            { width: 1200, height: 1200, crop: "limit" },
            { quality: "auto:good" },
            { fetch_format: "auto" }
          ]
        });
        const { data: imageRecord, error: imageError } = await supabase.from("product_images").insert({
          product_id: productId,
          url: result.secure_url,
          public_id: result.public_id,
          width: result.width,
          height: result.height,
          format: result.format,
          is_default: index === 0
          // First image is default
        }).select().single();
        if (imageError) {
          console.error("Error saving image metadata:", imageError);
        }
        return {
          url: result.secure_url,
          publicId: result.public_id,
          width: result.width,
          height: result.height,
          format: result.format,
          isDefault: index === 0
        };
      } catch (uploadError) {
        console.error("Error uploading image:", uploadError);
        throw uploadError;
      }
    });
    const uploadedImages = await Promise.all(uploadPromises);
    console.log("\u2705 Successfully uploaded", uploadedImages.length, "images");
    return {
      success: true,
      images: uploadedImages,
      folderPath
    };
  } catch (error) {
    console.error("\u274C Image upload error:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Failed to upload images"
    });
  }
});

const images$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: images
});

v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
const index = defineEventHandler(async (event) => {
  const method = event.method;
  try {
    switch (method) {
      case "GET":
        const query = getQuery$1(event);
        try {
          const products = await prisma.product.findMany({
            include: {
              images: true,
              subcategory: {
                include: {
                  category: true
                }
              }
            },
            where: {
              ...query.categoryId && {
                subcategory: {
                  categoryId: query.categoryId
                }
              }
            }
          });
          return products;
        } catch (dbError) {
          console.log("Database connection failed, returning mock data for testing:", dbError);
          return [
            {
              id: 1,
              name: "Sample Gold Ring",
              sku: "GR-001",
              price: 25e3,
              stockQuantity: 5,
              isPublished: true,
              karat: "18K",
              weight: 5.5,
              description: "Beautiful gold ring",
              tags: ["gold", "ring", "jewelry"],
              createdAt: (/* @__PURE__ */ new Date()).toISOString(),
              updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
              subcategoryId: 1,
              images: [],
              subcategory: {
                id: 1,
                name: "RINGS FOR MEN",
                categoryId: 1,
                category: {
                  id: 1,
                  name: "GOLD ORNAMENTS"
                }
              }
            },
            {
              id: 2,
              name: "Silver Necklace",
              sku: "SN-002",
              price: 15e3,
              stockQuantity: 3,
              isPublished: true,
              karat: "22K",
              weight: 8.2,
              description: "Elegant silver necklace",
              tags: ["silver", "necklace", "jewelry"],
              createdAt: (/* @__PURE__ */ new Date()).toISOString(),
              updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
              subcategoryId: 2,
              images: [],
              subcategory: {
                id: 2,
                name: "NECKLACE FOR WOMEN",
                categoryId: 2,
                category: {
                  id: 2,
                  name: "SILVER ORNAMENTS"
                }
              }
            }
          ];
        }
      case "POST":
        const body = await readBody(event);
        const { name, sku, categoryId, subcategoryId, price, stockQuantity, karat, weight, description, tags, images = [] } = body;
        console.log("Product creation request received:");
        console.log("- Name:", name);
        console.log("- SKU:", sku);
        console.log("- Category:", categoryId);
        console.log("- Subcategory:", subcategoryId);
        console.log("- Karat:", karat);
        console.log("- Price:", price);
        console.log("- Stock:", stockQuantity);
        if (images && !Array.isArray(images)) {
          throw createError({
            statusCode: 400,
            message: "Images must be an array"
          });
        }
        try {
          const uploadedImages = images.length > 0 ? await Promise.all(
            images.map(async (image) => {
              try {
                const result = await v2.uploader.upload(image, {
                  folder: "products"
                });
                return {
                  url: result.secure_url,
                  publicId: result.public_id
                };
              } catch (error) {
                console.error("Error uploading image to Cloudinary:", error);
                throw createError({
                  statusCode: 500,
                  message: "Failed to upload image"
                });
              }
            })
          ) : [];
          const product = await prisma.product.create({
            data: {
              name,
              sku,
              price,
              stockQuantity,
              karat,
              weight,
              description,
              tags,
              subcategoryId,
              ...uploadedImages.length > 0 && {
                images: {
                  create: uploadedImages
                }
              }
            },
            include: {
              images: true,
              subcategory: {
                include: {
                  category: true
                }
              }
            }
          });
          return product;
        } catch (dbError) {
          console.log("Database connection failed, but form data is valid:", dbError);
          return {
            success: true,
            message: "Product data received and validated successfully!",
            data: {
              id: Date.now(),
              // Mock ID
              name,
              sku,
              price: Number(price),
              stockQuantity: Number(stockQuantity),
              karat,
              weight: Number(weight),
              description,
              tags,
              categoryId,
              subcategoryId,
              isPublished: false,
              images: []
            },
            note: "Database connection not available. Data would be saved when database is connected.",
            enumsWorking: {
              category: categoryId,
              subcategory: subcategoryId,
              karat
            }
          };
        }
      default:
        throw createError({
          statusCode: 405,
          message: `Method ${method} not allowed`
        });
    }
  } catch (error) {
    console.error("Error handling product request:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Internal server error"
    });
  }
});

const index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index
});

const supabase = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f;
  const config = useRuntimeConfig();
  console.log("\u{1F527} Cloudinary Config Check:");
  console.log("- Cloud Name:", config.cloudinaryCloudName ? `"${config.cloudinaryCloudName}"` : "Missing");
  console.log("- API Key:", config.cloudinaryApiKey ? `"${config.cloudinaryApiKey}"` : "Missing");
  console.log("- API Secret:", config.cloudinaryApiSecret ? "Set" : "Missing");
  console.log("- Environment variables check:");
  console.log("  - CLOUDINARY_CLOUD_NAME:", process.env.CLOUDINARY_CLOUD_NAME ? `"${process.env.CLOUDINARY_CLOUD_NAME}"` : "Missing");
  console.log("  - CLOUDINARY_API_KEY:", process.env.CLOUDINARY_API_KEY ? `"${process.env.CLOUDINARY_API_KEY}"` : "Missing");
  console.log("  - CLOUDINARY_API_SECRET:", process.env.CLOUDINARY_API_SECRET ? "Set" : "Missing");
  v2.config({
    cloud_name: config.cloudinaryCloudName,
    api_key: config.cloudinaryApiKey,
    api_secret: config.cloudinaryApiSecret
  });
  const supabaseUrl = config.public.supabaseUrl || process.env.SUPABASE_URL || "";
  const supabaseKey = config.public.supabaseAnonKey || process.env.SUPABASE_ANON_KEY || "";
  console.log("\u{1F527} Supabase Config Check:");
  console.log("- URL:", supabaseUrl ? "Set" : "Missing");
  console.log("- Key:", supabaseKey ? "Set" : "Missing");
  if (!supabaseUrl || !supabaseKey) {
    console.log("\u274C Missing Supabase configuration");
    throw createError({
      statusCode: 500,
      message: "Missing Supabase configuration"
    });
  }
  const supabase = createClient(supabaseUrl, supabaseKey);
  const method = event.method;
  try {
    switch (method) {
      case "GET":
        console.log("\u{1F50D} Fetching products using Supabase client...");
        try {
          const { data: products, error } = await supabase.from("products").select(`
                            *,
                            subcategories (
                                id,
                                name,
                                categories (
                                    id,
                                    name
                                )
                            ),
                            product_images (
                                id,
                                url,
                                public_id,
                                is_default
                            )
                        `).order("created_at", { ascending: false });
          if (error) {
            console.log("\u274C Supabase query error:", error);
            if (error.message.includes("relation") && error.message.includes("does not exist")) {
              throw createError({
                statusCode: 500,
                message: `Database table missing: ${error.message}. Please run the database setup scripts.`
              });
            }
            if (error.message.includes("authentication")) {
              throw createError({
                statusCode: 401,
                message: `Database authentication failed: ${error.message}. Please check your Supabase credentials.`
              });
            }
            throw createError({
              statusCode: 500,
              message: `Database error: ${error.message}`
            });
          }
          console.log("\u2705 Successfully fetched", (products == null ? void 0 : products.length) || 0, "products");
          const transformedProducts = (products == null ? void 0 : products.map((product) => {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g;
            return {
              id: product.id,
              name: product.name,
              sku: product.sku,
              price: product.price,
              stockQuantity: product.stock_quantity,
              isPublished: product.is_published,
              karat: product.karat,
              weight: product.weight,
              description: product.description,
              tags: product.tags || [],
              createdAt: product.created_at,
              updatedAt: product.updated_at,
              subcategory: {
                id: (_a2 = product.subcategories) == null ? void 0 : _a2.id,
                name: (_b2 = product.subcategories) == null ? void 0 : _b2.name,
                category: {
                  id: (_d2 = (_c2 = product.subcategories) == null ? void 0 : _c2.categories) == null ? void 0 : _d2.id,
                  name: (_f2 = (_e2 = product.subcategories) == null ? void 0 : _e2.categories) == null ? void 0 : _f2.name
                }
              },
              images: ((_g = product.product_images) == null ? void 0 : _g.map((img) => ({
                url: img.url,
                publicId: img.public_id,
                isDefault: img.is_default
              }))) || []
            };
          })) || [];
          return transformedProducts;
        } catch (dbError) {
          console.log("\u274C Database connection failed:", dbError);
          if (dbError.statusCode) {
            throw dbError;
          }
          if (dbError.message.includes("network") || dbError.message.includes("timeout")) {
            throw createError({
              statusCode: 503,
              message: "Database connection timeout. Please check your network connection and try again."
            });
          }
          if (dbError.message.includes("Invalid API key")) {
            throw createError({
              statusCode: 401,
              message: "Invalid Supabase credentials. Please check your SUPABASE_URL and SUPABASE_ANON_KEY environment variables."
            });
          }
          throw createError({
            statusCode: 500,
            message: `Database connection failed: ${dbError.message}. Please check your environment variables and database setup.`
          });
        }
      case "POST":
        console.log("\u{1F4DD} Creating product using Supabase client...");
        const body = await readBody(event);
        const { name, sku, categoryId, subcategoryId, price, stockQuantity, karat, weight, description, tags, images = [] } = body;
        console.log("Product creation request:");
        console.log("- Name:", name);
        console.log("- SKU:", sku);
        console.log("- Category:", categoryId);
        console.log("- Subcategory:", subcategoryId);
        console.log("- Karat:", karat);
        console.log("- Images count:", images.length);
        try {
          const { data: subcategories, error: subError } = await supabase.from("subcategories").select("id, name, categories(id, name)").eq("name", subcategoryId).single();
          if (subError || !subcategories) {
            console.log("\u274C Subcategory not found:", subcategoryId);
            throw createError({
              statusCode: 400,
              message: `Subcategory "${subcategoryId}" not found`
            });
          }
          console.log("\u2705 Found subcategory:", subcategories);
          const { data: newProduct, error: productError } = await supabase.from("products").insert({
            name,
            sku,
            price: Number(price),
            stock_quantity: Number(stockQuantity),
            karat,
            weight: Number(weight),
            description,
            tags,
            subcategory_id: subcategories.id,
            is_published: false
          }).select(`
                            *,
                            subcategories (
                                id,
                                name,
                                categories (
                                    id,
                                    name
                                )
                            )
                        `).single();
          if (productError) {
            console.log("\u274C Product creation error:", productError);
            throw createError({
              statusCode: 500,
              message: `Failed to create product: ${productError.message}`
            });
          }
          console.log("\u2705 Product created successfully:", newProduct);
          let uploadedImages = [];
          if (images && images.length > 0) {
            console.log("\u{1F4F8} Uploading", images.length, "images...");
            const sanitizeName = (name2) => name2.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");
            const categoryFolder = sanitizeName(categoryId || "uncategorized");
            const subcategoryFolder = sanitizeName(subcategoryId || "general");
            const firstThreeLetters = (categoryId || "cat").substring(0, 3).toLowerCase();
            const productFolder = `jewel-${firstThreeLetters}-${newProduct.id}`;
            const folderPath = `${categoryFolder}/${subcategoryFolder}/${productFolder}`;
            console.log("\u{1F4C1} Uploading images to folder:", folderPath);
            const uploadPromises = images.map(async (imageBase64, index) => {
              var _a2;
              try {
                console.log(`\u{1F4E4} Uploading image ${index + 1}/${images.length}...`);
                const result = await v2.uploader.upload(imageBase64, {
                  folder: folderPath,
                  public_id: `image-${index + 1}`,
                  resource_type: "image",
                  timeout: 6e4,
                  // 60 seconds timeout
                  transformation: [
                    { width: 1200, height: 1200, crop: "limit" },
                    { quality: "auto:good" },
                    { fetch_format: "auto" }
                  ]
                });
                console.log(`\u2705 Image ${index + 1} uploaded successfully:`, result.secure_url);
                const { data: imageRecord, error: imageError } = await supabase.from("product_images").insert({
                  product_id: newProduct.id,
                  url: result.secure_url,
                  public_id: result.public_id,
                  width: result.width,
                  height: result.height,
                  format: result.format,
                  is_default: index === 0
                  // First image is default
                }).select().single();
                if (imageError) {
                  console.error("\u274C Error saving image metadata:", imageError);
                }
                return {
                  url: result.secure_url,
                  publicId: result.public_id,
                  isDefault: index === 0
                };
              } catch (uploadError) {
                console.error(`\u274C Error uploading image ${index + 1}:`, uploadError);
                if (uploadError.name === "TimeoutError" || ((_a2 = uploadError.message) == null ? void 0 : _a2.includes("timeout"))) {
                  console.log(`\u{1F504} Retrying image ${index + 1} with reduced quality...`);
                  try {
                    const retryResult = await v2.uploader.upload(imageBase64, {
                      folder: folderPath,
                      public_id: `image-${index + 1}`,
                      resource_type: "image",
                      timeout: 12e4,
                      // 2 minutes timeout for retry
                      transformation: [
                        { width: 800, height: 800, crop: "limit" },
                        { quality: "80" },
                        { fetch_format: "auto" }
                      ]
                    });
                    console.log(`\u2705 Image ${index + 1} uploaded on retry:`, retryResult.secure_url);
                    const { data: imageRecord, error: imageError } = await supabase.from("product_images").insert({
                      product_id: newProduct.id,
                      url: retryResult.secure_url,
                      public_id: retryResult.public_id,
                      width: retryResult.width,
                      height: retryResult.height,
                      format: retryResult.format,
                      is_default: index === 0
                    }).select().single();
                    if (imageError) {
                      console.error("\u274C Error saving retry image metadata:", imageError);
                    }
                    return {
                      url: retryResult.secure_url,
                      publicId: retryResult.public_id,
                      isDefault: index === 0
                    };
                  } catch (retryError) {
                    console.error(`\u274C Retry failed for image ${index + 1}:`, retryError);
                    return null;
                  }
                }
                return null;
              }
            });
            uploadedImages = (await Promise.all(uploadPromises)).filter((img) => img !== null);
            console.log("\u2705 Successfully uploaded", uploadedImages.length, "images");
          }
          const transformedProduct = {
            id: newProduct.id,
            name: newProduct.name,
            sku: newProduct.sku,
            price: newProduct.price,
            stockQuantity: newProduct.stock_quantity,
            isPublished: newProduct.is_published,
            karat: newProduct.karat,
            weight: newProduct.weight,
            description: newProduct.description,
            tags: newProduct.tags || [],
            subcategory: {
              id: (_a = newProduct.subcategories) == null ? void 0 : _a.id,
              name: (_b = newProduct.subcategories) == null ? void 0 : _b.name,
              category: {
                id: (_d = (_c = newProduct.subcategories) == null ? void 0 : _c.categories) == null ? void 0 : _d.id,
                name: (_f = (_e = newProduct.subcategories) == null ? void 0 : _e.categories) == null ? void 0 : _f.name
              }
            },
            images: uploadedImages
          };
          return transformedProduct;
        } catch (dbError) {
          console.log("\u274C Database connection failed during product creation:", dbError);
          if (dbError.statusCode) {
            throw dbError;
          }
          if (dbError.message.includes("network") || dbError.message.includes("timeout")) {
            throw createError({
              statusCode: 503,
              message: "Database connection timeout during product creation. Please check your network connection and try again."
            });
          }
          if (dbError.message.includes("Invalid API key")) {
            throw createError({
              statusCode: 401,
              message: "Invalid Supabase credentials. Please check your SUPABASE_URL and SUPABASE_ANON_KEY environment variables."
            });
          }
          if (dbError.message.includes("relation") && dbError.message.includes("does not exist")) {
            throw createError({
              statusCode: 500,
              message: `Database table missing: ${dbError.message}. Please run the database setup scripts.`
            });
          }
          throw createError({
            statusCode: 500,
            message: `Failed to create product due to database error: ${dbError.message}. Please check your environment variables and database setup.`
          });
        }
      default:
        throw createError({
          statusCode: 405,
          message: `Method ${method} not allowed`
        });
    }
  } catch (error) {
    console.error("\u274C API Error:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Internal server error"
    });
  }
});

const supabase$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: supabase
});

function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    "type": "application/json",
    "innerHTML": contents,
    "data-nuxt-data": appId,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  {
    payload.id = "__NUXT_DATA__";
  }
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  const config = uneval(opts.ssrContext.config);
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderSSRHeadOptions = {"omitLineBreaks":false};

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
if (!("AsyncLocalStorage" in globalThis)) {
  globalThis.AsyncLocalStorage = AsyncLocalStorage;
}
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const ssrContext = createSSRContext(event);
  const headEntryOptions = { mode: "server" };
  ssrContext.head.push(appHead, headEntryOptions);
  if (ssrError) {
    ssrError.statusCode &&= Number.parseInt(ssrError.statusCode);
    setSSRError(ssrContext, ssrError);
  }
  const isRenderingPayload = PAYLOAD_URL_RE.test(ssrContext.url);
  if (isRenderingPayload) {
    const url = ssrContext.url.substring(0, ssrContext.url.lastIndexOf("/")) || "/";
    ssrContext.url = url;
    event._path = event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  if (routeOptions.ssr === false) {
    ssrContext.noSSR = true;
  }
  const renderer = await getRenderer(ssrContext);
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  const inlinedStyles = [];
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response = renderPayloadResponse(ssrContext);
    return response;
  }
  const NO_SCRIPTS = routeOptions.noScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  if (ssrContext._preloadManifest && !NO_SCRIPTS) {
    ssrContext.head.push({
      link: [
        { rel: "preload", as: "fetch", fetchpriority: "low", crossorigin: "anonymous", href: buildAssetsURL(`builds/meta/${ssrContext.runtimeConfig.app.buildId}.json`) }
      ]
    }, { ...headEntryOptions, tagPriority: "low" });
  }
  if (inlinedStyles.length) {
    ssrContext.head.push({ style: inlinedStyles });
  }
  const link = [];
  for (const resource of Object.values(styles)) {
    if ("inline" in getQuery(resource.file)) {
      continue;
    }
    link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file), crossorigin: "" });
  }
  if (link.length) {
    ssrContext.head.push({ link }, headEntryOptions);
  }
  if (!NO_SCRIPTS) {
    ssrContext.head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    ssrContext.head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    ssrContext.head.push({
      script: renderPayloadJsonScript({ ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.noScripts) {
    ssrContext.head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        // if we are rendering script tag payloads that import an async payload
        // we need to ensure this resolves before executing the Nuxt entry
        tagPosition: "head",
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(ssrContext.head, renderSSRHeadOptions);
  const htmlContext = {
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [
      replaceIslandTeleports(ssrContext, _rendered.html) ,
      APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG
    ],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  return {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
});
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  if (chunks.length === 0) {
    return "";
  }
  return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: renderer
});
//# sourceMappingURL=index.mjs.map

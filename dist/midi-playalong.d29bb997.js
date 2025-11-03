// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"7SvX3":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "ae5be248d29bb997";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"kyksZ":[function(require,module,exports,__globalThis) {
// ---------- Imports ----------
var _tone = require("tone");
const OpenSheetMusicDisplay = window.opensheetmusicdisplay.OpenSheetMusicDisplay;
// ---------- Elements ----------
const playBtn = document.getElementById("playBtn");
const stopBtn = document.getElementById("stopBtn");
const status = document.getElementById("status");
const musicDiv = document.getElementById("music");
let osmd;
let synthPiano; // MIDI keyboard
let guitar; // playback
let noteEvents = [];
let bpm = 120;
// ---------- Init ----------
async function init() {
    // --- Instrument setup ---
    synthPiano = new _tone.PolySynth(_tone.Synth, {
        oscillator: {
            type: "triangle"
        },
        envelope: {
            attack: 0.01,
            decay: 0.3,
            sustain: 0.3,
            release: 0.5
        }
    }).toDestination();
    // --- Load local guitar samples (SpeedY pack) ---
    playBtn.disabled = true;
    status.innerText = "\uD83C\uDFB8 Loading local guitar samples...";
    guitar = new _tone.Sampler({
        urls: {
            E2: "8397__speedy__clean_e_str_pluck.wav",
            A2: "8383__speedy__clean_a_str_pluck.wav",
            D3: "8389__speedy__clean_d_str_pluck.wav",
            G3: "8403__speedy__clean_g_str_pluck.wav",
            B3: "8386__speedy__clean_b_str_pluck.wav",
            E4: "8394__speedy__clean_e1st_str_pluck.wav"
        },
        baseUrl: "./src/assets/guit/",
        onload: async ()=>{
            console.log("\u2705 Guitar samples loaded from /src/assets/guit/");
            status.innerText = "\u2705 Local guitar samples loaded. Ready to play!";
            playBtn.disabled = false; // enable play button once all are ready
        }
    }).toDestination();
    // Wait for buffers to finish loading
    await _tone.loaded();
    await connectMIDIKeyboard();
    await loadXMLFile();
}
// ---------- Connect a physical MIDI keyboard ----------
async function connectMIDIKeyboard() {
    if (!navigator.requestMIDIAccess) {
        status.innerText = "\u26A0\uFE0F Web MIDI not supported (use Chrome).";
        return;
    }
    try {
        const access = await navigator.requestMIDIAccess();
        for (let input of access.inputs.values())input.onmidimessage = handleMIDI;
        status.innerText = "\u2705 MIDI keyboard connected.";
    } catch (err) {
        console.error("MIDI access error:", err);
        status.innerText = "\u26A0\uFE0F Couldn't access MIDI devices.";
    }
}
// ---------- Handle keyboard note on/off ----------
function handleMIDI(event) {
    const [cmd, note, vel] = event.data;
    const freq = _tone.Frequency(note, "midi").toFrequency();
    if (cmd === 144 && vel > 0) synthPiano.triggerAttack(freq);
    else if (cmd === 128 || vel === 0) synthPiano.triggerRelease(freq);
}
// ---------- Load & render XML ----------
async function loadXMLFile() {
    try {
        const xmlUrl = new URL(require("f26b2b164c4269fb"));
        const response = await fetch(xmlUrl);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const xmlText = await response.text();
        osmd = new OpenSheetMusicDisplay(musicDiv, {
            autoResize: true
        });
        await osmd.load(xmlText);
        await osmd.render();
        noteEvents = extractNotesFromXML(xmlText);
        status.innerText = `\u{2705} Score loaded \u{2013} Tempo ${bpm} BPM. Ready to play or use keyboard.`;
    } catch (err) {
        console.error("Error loading or rendering MusicXML:", err);
        status.innerText = "\u26A0\uFE0F Could not load or render test.xml";
    }
}
// ---------- Extract note timings directly from MusicXML ----------
function extractNotesFromXML(xmlText) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "application/xml");
    const divisions = parseFloat(xmlDoc.querySelector("divisions")?.textContent || "64");
    const tempoNode = xmlDoc.querySelector("sound[tempo]");
    bpm = tempoNode ? parseFloat(tempoNode.getAttribute("tempo")) : 120;
    const secPerQuarter = 60 / bpm;
    const notes = Array.from(xmlDoc.getElementsByTagName("note")).filter((n)=>n.getElementsByTagName("pitch").length > 0);
    let timeSec = 0;
    const events = [];
    for (const note of notes){
        const step = note.querySelector("step")?.textContent;
        const octave = note.querySelector("octave")?.textContent;
        const durDiv = parseFloat(note.querySelector("duration")?.textContent || "0");
        const durQuarters = durDiv / divisions;
        const durSec = durQuarters * secPerQuarter;
        const midi = pitchToMidi(step, octave);
        events.push({
            time: timeSec,
            midiPitch: midi,
            durSec
        });
        timeSec += durSec;
    }
    return events;
}
// ---------- Pitch conversion ----------
function pitchToMidi(step, octave) {
    const map = {
        C: 0,
        D: 2,
        E: 4,
        F: 5,
        G: 7,
        A: 9,
        B: 11
    };
    return 12 * (parseInt(octave) + 1) + map[step];
}
// ---------- Playback ----------
playBtn.addEventListener("click", async ()=>{
    if (_tone.context.state !== "running") await _tone.start();
    const now = _tone.now();
    status.innerText = `\u{1F3B6} Playing acoustic guitar at ${bpm} BPM...`;
    noteEvents.forEach((ev)=>{
        const freq = _tone.Frequency(ev.midiPitch, "midi").toFrequency();
        guitar.triggerAttackRelease(freq, ev.durSec, now + ev.time);
    });
});
stopBtn.addEventListener("click", ()=>{
    _tone.Transport.stop();
    synthPiano.releaseAll();
    guitar.releaseAll?.(); // just in case future Tone adds it
    guitar.disconnect();
    guitar.toDestination(); // reconnect for next play
    status.innerText = "\u23F9 Stopped.";
});
// ---------- Go ----------
init();

},{"tone":"1Tjk2","f26b2b164c4269fb":"Vno75"}],"1Tjk2":[function(require,module,exports,__globalThis) {
/*! For license information please see Tone.js.LICENSE.txt */ !function(t1, e) {
    module.exports = e();
}("undefined" != typeof self ? self : this, ()=>(()=>{
        var t1 = {
            382: function(t1, e, s1) {
                !function(t1, e, s1, n) {
                    "use strict";
                    var i = function(t1, e, s1) {
                        return {
                            endTime: e,
                            insertTime: s1,
                            type: "exponentialRampToValue",
                            value: t1
                        };
                    }, o = function(t1, e, s1) {
                        return {
                            endTime: e,
                            insertTime: s1,
                            type: "linearRampToValue",
                            value: t1
                        };
                    }, r = function(t1, e) {
                        return {
                            startTime: e,
                            type: "setValue",
                            value: t1
                        };
                    }, a = function(t1, e, s1) {
                        return {
                            duration: s1,
                            startTime: e,
                            type: "setValueCurve",
                            values: t1
                        };
                    }, c = function(t1, e, s1) {
                        var n = s1.startTime, i = s1.target, o = s1.timeConstant;
                        return i + (e - i) * Math.exp((n - t1) / o);
                    }, h = function(t1) {
                        return "exponentialRampToValue" === t1.type;
                    }, l = function(t1) {
                        return "linearRampToValue" === t1.type;
                    }, u = function(t1) {
                        return h(t1) || l(t1);
                    }, p = function(t1) {
                        return "setValue" === t1.type;
                    }, d = function(t1) {
                        return "setValueCurve" === t1.type;
                    }, f = function t1(e, s1, n, i) {
                        var o = e[s1];
                        return void 0 === o ? i : u(o) || p(o) ? o.value : d(o) ? o.values[o.values.length - 1] : c(n, t1(e, s1 - 1, o.startTime, i), o);
                    }, _ = function(t1, e, s1, n, i) {
                        return void 0 === s1 ? [
                            n.insertTime,
                            i
                        ] : u(s1) ? [
                            s1.endTime,
                            s1.value
                        ] : p(s1) ? [
                            s1.startTime,
                            s1.value
                        ] : d(s1) ? [
                            s1.startTime + s1.duration,
                            s1.values[s1.values.length - 1]
                        ] : [
                            s1.startTime,
                            f(t1, e - 1, s1.startTime, i)
                        ];
                    }, m = function(t1) {
                        return "cancelAndHold" === t1.type;
                    }, g = function(t1) {
                        return "cancelScheduledValues" === t1.type;
                    }, v = function(t1) {
                        return m(t1) || g(t1) ? t1.cancelTime : h(t1) || l(t1) ? t1.endTime : t1.startTime;
                    }, y = function(t1, e, s1, n) {
                        var i = n.endTime, o = n.value;
                        return s1 === o ? o : 0 < s1 && 0 < o || s1 < 0 && o < 0 ? s1 * Math.pow(o / s1, (t1 - e) / (i - e)) : 0;
                    }, x = function(t1, e, s1, n) {
                        return s1 + (t1 - e) / (n.endTime - e) * (n.value - s1);
                    }, w = function(t1, e) {
                        var s1 = e.duration, n = e.startTime, i = e.values;
                        return function(t1, e) {
                            var s1 = Math.floor(e), n = Math.ceil(e);
                            return s1 === n ? t1[s1] : (1 - (e - s1)) * t1[s1] + (1 - (n - e)) * t1[n];
                        }(i, (t1 - n) / s1 * (i.length - 1));
                    }, b = function(t1) {
                        return "setTarget" === t1.type;
                    }, T = function() {
                        return n(function t1(e) {
                            s1(this, t1), this._automationEvents = [], this._currenTime = 0, this._defaultValue = e;
                        }, [
                            {
                                key: Symbol.iterator,
                                value: function() {
                                    return this._automationEvents[Symbol.iterator]();
                                }
                            },
                            {
                                key: "add",
                                value: function(t1) {
                                    var e = v(t1);
                                    if (m(t1) || g(t1)) {
                                        var s1 = this._automationEvents.findIndex(function(s1) {
                                            return g(t1) && d(s1) ? s1.startTime + s1.duration >= e : v(s1) >= e;
                                        }), n = this._automationEvents[s1];
                                        if (-1 !== s1 && (this._automationEvents = this._automationEvents.slice(0, s1)), m(t1)) {
                                            var c = this._automationEvents[this._automationEvents.length - 1];
                                            if (void 0 !== n && u(n)) {
                                                if (void 0 !== c && b(c)) throw new Error("The internal list is malformed.");
                                                var p = void 0 === c ? n.insertTime : d(c) ? c.startTime + c.duration : v(c), f = void 0 === c ? this._defaultValue : d(c) ? c.values[c.values.length - 1] : c.value, _ = h(n) ? y(e, p, f, n) : x(e, p, f, n), w = h(n) ? i(_, e, this._currenTime) : o(_, e, this._currenTime);
                                                this._automationEvents.push(w);
                                            }
                                            if (void 0 !== c && b(c) && this._automationEvents.push(r(this.getValue(e), e)), void 0 !== c && d(c) && c.startTime + c.duration > e) {
                                                var T = e - c.startTime, S = (c.values.length - 1) / c.duration, k = Math.max(2, 1 + Math.ceil(T * S)), A = T / (k - 1) * S, C = c.values.slice(0, k);
                                                if (A < 1) for(var D = 1; D < k; D += 1){
                                                    var O = A * D % 1;
                                                    C[D] = c.values[D - 1] * (1 - O) + c.values[D] * O;
                                                }
                                                this._automationEvents[this._automationEvents.length - 1] = a(C, c.startTime, T);
                                            }
                                        }
                                    } else {
                                        var M = this._automationEvents.findIndex(function(t1) {
                                            return v(t1) > e;
                                        }), E = -1 === M ? this._automationEvents[this._automationEvents.length - 1] : this._automationEvents[M - 1];
                                        if (void 0 !== E && d(E) && v(E) + E.duration > e) return !1;
                                        var R = h(t1) ? i(t1.value, t1.endTime, this._currenTime) : l(t1) ? o(t1.value, e, this._currenTime) : t1;
                                        if (-1 === M) this._automationEvents.push(R);
                                        else {
                                            if (d(t1) && e + t1.duration > v(this._automationEvents[M])) return !1;
                                            this._automationEvents.splice(M, 0, R);
                                        }
                                    }
                                    return !0;
                                }
                            },
                            {
                                key: "flush",
                                value: function(t1) {
                                    var e = this._automationEvents.findIndex(function(e) {
                                        return v(e) > t1;
                                    });
                                    if (e > 1) {
                                        var s1 = this._automationEvents.slice(e - 1), n = s1[0];
                                        b(n) && s1.unshift(r(f(this._automationEvents, e - 2, n.startTime, this._defaultValue), n.startTime)), this._automationEvents = s1;
                                    }
                                }
                            },
                            {
                                key: "getValue",
                                value: function(t1) {
                                    if (0 === this._automationEvents.length) return this._defaultValue;
                                    var s1 = this._automationEvents.findIndex(function(e) {
                                        return v(e) > t1;
                                    }), n = this._automationEvents[s1], i = (-1 === s1 ? this._automationEvents.length : s1) - 1, o = this._automationEvents[i];
                                    if (void 0 !== o && b(o) && (void 0 === n || !u(n) || n.insertTime > t1)) return c(t1, f(this._automationEvents, i - 1, o.startTime, this._defaultValue), o);
                                    if (void 0 !== o && p(o) && (void 0 === n || !u(n))) return o.value;
                                    if (void 0 !== o && d(o) && (void 0 === n || !u(n) || o.startTime + o.duration > t1)) return t1 < o.startTime + o.duration ? w(t1, o) : o.values[o.values.length - 1];
                                    if (void 0 !== o && u(o) && (void 0 === n || !u(n))) return o.value;
                                    if (void 0 !== n && h(n)) {
                                        var r = _(this._automationEvents, i, o, n, this._defaultValue), a = e(r, 2), m = a[0], g = a[1];
                                        return y(t1, m, g, n);
                                    }
                                    if (void 0 !== n && l(n)) {
                                        var T = _(this._automationEvents, i, o, n, this._defaultValue), S = e(T, 2), k = S[0], A = S[1];
                                        return x(t1, k, A, n);
                                    }
                                    return this._defaultValue;
                                }
                            }
                        ]);
                    }();
                    t1.AutomationEventList = T, t1.createCancelAndHoldAutomationEvent = function(t1) {
                        return {
                            cancelTime: t1,
                            type: "cancelAndHold"
                        };
                    }, t1.createCancelScheduledValuesAutomationEvent = function(t1) {
                        return {
                            cancelTime: t1,
                            type: "cancelScheduledValues"
                        };
                    }, t1.createExponentialRampToValueAutomationEvent = function(t1, e) {
                        return {
                            endTime: e,
                            type: "exponentialRampToValue",
                            value: t1
                        };
                    }, t1.createLinearRampToValueAutomationEvent = function(t1, e) {
                        return {
                            endTime: e,
                            type: "linearRampToValue",
                            value: t1
                        };
                    }, t1.createSetTargetAutomationEvent = function(t1, e, s1) {
                        return {
                            startTime: e,
                            target: t1,
                            timeConstant: s1,
                            type: "setTarget"
                        };
                    }, t1.createSetValueAutomationEvent = r, t1.createSetValueCurveAutomationEvent = a;
                }(e, s1(424), s1(690), s1(728));
            },
            897: (t1)=>{
                t1.exports = function(t1, e) {
                    (null == e || e > t1.length) && (e = t1.length);
                    for(var s1 = 0, n = new Array(e); s1 < e; s1++)n[s1] = t1[s1];
                    return n;
                }, t1.exports.__esModule = !0, t1.exports.default = t1.exports;
            },
            372: (t1)=>{
                t1.exports = function(t1) {
                    if (Array.isArray(t1)) return t1;
                }, t1.exports.__esModule = !0, t1.exports.default = t1.exports;
            },
            690: (t1)=>{
                t1.exports = function(t1, e) {
                    if (!(t1 instanceof e)) throw new TypeError("Cannot call a class as a function");
                }, t1.exports.__esModule = !0, t1.exports.default = t1.exports;
            },
            728: (t1, e, s1)=>{
                var n = s1(62);
                function i(t1, e) {
                    for(var s1 = 0; s1 < e.length; s1++){
                        var i = e[s1];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t1, n(i.key), i);
                    }
                }
                t1.exports = function(t1, e, s1) {
                    return e && i(t1.prototype, e), s1 && i(t1, s1), Object.defineProperty(t1, "prototype", {
                        writable: !1
                    }), t1;
                }, t1.exports.__esModule = !0, t1.exports.default = t1.exports;
            },
            872: (t1)=>{
                t1.exports = function(t1, e) {
                    var s1 = null == t1 ? null : "undefined" != typeof Symbol && t1[Symbol.iterator] || t1["@@iterator"];
                    if (null != s1) {
                        var n, i, o, r, a = [], c = !0, h = !1;
                        try {
                            if (o = (s1 = s1.call(t1)).next, 0 === e) {
                                if (Object(s1) !== s1) return;
                                c = !1;
                            } else for(; !(c = (n = o.call(s1)).done) && (a.push(n.value), a.length !== e); c = !0);
                        } catch (t1) {
                            h = !0, i = t1;
                        } finally{
                            try {
                                if (!c && null != s1.return && (r = s1.return(), Object(r) !== r)) return;
                            } finally{
                                if (h) throw i;
                            }
                        }
                        return a;
                    }
                }, t1.exports.__esModule = !0, t1.exports.default = t1.exports;
            },
            218: (t1)=>{
                t1.exports = function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }, t1.exports.__esModule = !0, t1.exports.default = t1.exports;
            },
            424: (t1, e, s1)=>{
                var n = s1(372), i = s1(872), o = s1(116), r = s1(218);
                t1.exports = function(t1, e) {
                    return n(t1) || i(t1, e) || o(t1, e) || r();
                }, t1.exports.__esModule = !0, t1.exports.default = t1.exports;
            },
            36: (t1, e, s1)=>{
                var n = s1(698).default;
                t1.exports = function(t1, e) {
                    if ("object" != n(t1) || !t1) return t1;
                    var s1 = t1[Symbol.toPrimitive];
                    if (void 0 !== s1) {
                        var i = s1.call(t1, e || "default");
                        if ("object" != n(i)) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === e ? String : Number)(t1);
                }, t1.exports.__esModule = !0, t1.exports.default = t1.exports;
            },
            62: (t1, e, s1)=>{
                var n = s1(698).default, i = s1(36);
                t1.exports = function(t1) {
                    var e = i(t1, "string");
                    return "symbol" == n(e) ? e : e + "";
                }, t1.exports.__esModule = !0, t1.exports.default = t1.exports;
            },
            698: (t1)=>{
                function e(s1) {
                    return t1.exports = e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t1) {
                        return typeof t1;
                    } : function(t1) {
                        return t1 && "function" == typeof Symbol && t1.constructor === Symbol && t1 !== Symbol.prototype ? "symbol" : typeof t1;
                    }, t1.exports.__esModule = !0, t1.exports.default = t1.exports, e(s1);
                }
                t1.exports = e, t1.exports.__esModule = !0, t1.exports.default = t1.exports;
            },
            116: (t1, e, s1)=>{
                var n = s1(897);
                t1.exports = function(t1, e) {
                    if (t1) {
                        if ("string" == typeof t1) return n(t1, e);
                        var s1 = Object.prototype.toString.call(t1).slice(8, -1);
                        return "Object" === s1 && t1.constructor && (s1 = t1.constructor.name), "Map" === s1 || "Set" === s1 ? Array.from(t1) : "Arguments" === s1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s1) ? n(t1, e) : void 0;
                    }
                }, t1.exports.__esModule = !0, t1.exports.default = t1.exports;
            }
        }, e = {};
        function s1(n) {
            var i = e[n];
            if (void 0 !== i) return i.exports;
            var o = e[n] = {
                exports: {}
            };
            return t1[n].call(o.exports, o, o.exports, s1), o.exports;
        }
        s1.d = (t1, e)=>{
            for(var n in e)s1.o(e, n) && !s1.o(t1, n) && Object.defineProperty(t1, n, {
                enumerable: !0,
                get: e[n]
            });
        }, s1.o = (t1, e)=>Object.prototype.hasOwnProperty.call(t1, e), s1.r = (t1)=>{
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t1, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t1, "__esModule", {
                value: !0
            });
        };
        var n = {};
        return (()=>{
            "use strict";
            s1.r(n), s1.d(n, {
                AMOscillator: ()=>$o,
                AMSynth: ()=>Cr,
                Abs: ()=>pr,
                Add: ()=>nr,
                AmplitudeEnvelope: ()=>Sr,
                Analyser: ()=>Xa,
                AudioToGain: ()=>Xo,
                AutoFilter: ()=>ua,
                AutoPanner: ()=>da,
                AutoWah: ()=>_a,
                BaseContext: ()=>Ci,
                BiquadFilter: ()=>Dr,
                BitCrusher: ()=>ga,
                Buffer: ()=>Dc,
                BufferSource: ()=>Mc,
                Buffers: ()=>Oc,
                Channel: ()=>sc,
                Chebyshev: ()=>ya,
                Chorus: ()=>Sa,
                Clock: ()=>vo,
                Compressor: ()=>cc,
                Context: ()=>Di,
                Convolver: ()=>fc,
                CrossFade: ()=>ca,
                DCMeter: ()=>Ja,
                Delay: ()=>yo,
                Destination: ()=>yc,
                Distortion: ()=>ka,
                Draw: ()=>Sc,
                DuoSynth: ()=>Rr,
                EQ3: ()=>dc,
                Emitter: ()=>Ai,
                Envelope: ()=>xr,
                FFT: ()=>Ha,
                FMOscillator: ()=>Ho,
                FMSynth: ()=>qr,
                FatOscillator: ()=>Ko,
                FeedbackCombFilter: ()=>Br,
                FeedbackDelay: ()=>Ca,
                Filter: ()=>Or,
                Follower: ()=>fa,
                Freeverb: ()=>Ra,
                Frequency: ()=>Ji,
                FrequencyClass: ()=>Yi,
                FrequencyEnvelope: ()=>Mr,
                FrequencyShifter: ()=>Oa,
                Gain: ()=>ho,
                GainToAudio: ()=>dr,
                Gate: ()=>hc,
                GrainPlayer: ()=>ur,
                GreaterThan: ()=>gr,
                GreaterThanZero: ()=>mr,
                IntervalTimeline: ()=>Co,
                JCReverb: ()=>Va,
                LFO: ()=>rr,
                Limiter: ()=>lc,
                Listener: ()=>bc,
                Loop: ()=>$r,
                LowpassCombFilter: ()=>Gr,
                Master: ()=>xc,
                MembraneSynth: ()=>Vr,
                Merge: ()=>wa,
                MetalSynth: ()=>Ir,
                Meter: ()=>$a,
                MidSideCompressor: ()=>uc,
                MidSideMerge: ()=>Ba,
                MidSideSplit: ()=>Wa,
                Midi: ()=>To,
                MidiClass: ()=>bo,
                Mono: ()=>nc,
                MonoSynth: ()=>Er,
                MultibandCompressor: ()=>pc,
                MultibandSplit: ()=>ic,
                Multiply: ()=>Yo,
                Negate: ()=>fr,
                Noise: ()=>Lo,
                NoiseSynth: ()=>Nr,
                Offline: ()=>xo,
                OfflineContext: ()=>qi,
                OmniOscillator: ()=>sr,
                OnePoleFilter: ()=>Ur,
                Oscillator: ()=>Zo,
                PWMOscillator: ()=>tr,
                PanVol: ()=>ec,
                Panner: ()=>pa,
                Panner3D: ()=>rc,
                Param: ()=>no,
                Part: ()=>Hr,
                Pattern: ()=>ra,
                Phaser: ()=>La,
                PingPongDelay: ()=>Pa,
                PitchShift: ()=>ja,
                Player: ()=>hr,
                Players: ()=>lr,
                PluckSynth: ()=>Qr,
                PolySynth: ()=>Zr,
                Pow: ()=>Fo,
                PulseOscillator: ()=>Jo,
                Recorder: ()=>ac,
                Reverb: ()=>za,
                Sampler: ()=>Xr,
                Scale: ()=>ir,
                ScaleExp: ()=>vr,
                Sequence: ()=>aa,
                Signal: ()=>po,
                Solo: ()=>tc,
                Split: ()=>xa,
                StateTimeline: ()=>so,
                StereoWidener: ()=>Ga,
                Subtract: ()=>_r,
                SyncedSignal: ()=>yr,
                Synth: ()=>kr,
                Ticks: ()=>ko,
                TicksClass: ()=>So,
                Time: ()=>Xi,
                TimeClass: ()=>Zi,
                Timeline: ()=>wi,
                ToneAudioBuffer: ()=>Ri,
                ToneAudioBuffers: ()=>wo,
                ToneAudioNode: ()=>io,
                ToneBufferSource: ()=>jo,
                ToneEvent: ()=>Yr,
                ToneOscillatorNode: ()=>Qo,
                Transport: ()=>gc,
                TransportTime: ()=>to,
                TransportTimeClass: ()=>Ki,
                Tremolo: ()=>Qa,
                Unit: ()=>e,
                UserMedia: ()=>Uo,
                Vibrato: ()=>Za,
                Volume: ()=>Oo,
                WaveShaper: ()=>qo,
                Waveform: ()=>Ka,
                Zero: ()=>or,
                connect: ()=>ro,
                connectSeries: ()=>oo,
                connectSignal: ()=>fo,
                context: ()=>Ac,
                dbToGain: ()=>ji,
                debug: ()=>t1,
                defaultArg: ()=>pi,
                disconnect: ()=>ao,
                fanIn: ()=>co,
                ftom: ()=>Bi,
                gainToDb: ()=>Li,
                getContext: ()=>Vi,
                getDestination: ()=>wc,
                getDraw: ()=>kc,
                getListener: ()=>Tc,
                getTransport: ()=>vc,
                immediate: ()=>mc,
                intervalToFrequencyRatio: ()=>zi,
                isArray: ()=>Ln,
                isBoolean: ()=>jn,
                isDefined: ()=>In,
                isFunction: ()=>Vn,
                isNote: ()=>Wn,
                isNumber: ()=>Nn,
                isObject: ()=>Pn,
                isString: ()=>zn,
                isUndef: ()=>Fn,
                loaded: ()=>Cc,
                mtof: ()=>Gi,
                now: ()=>_c,
                optionsFromArguments: ()=>ui,
                setContext: ()=>Ni,
                start: ()=>Pi,
                supported: ()=>qn,
                version: ()=>i
            });
            var t1 = {};
            s1.r(t1), s1.d(t1, {
                assert: ()=>Bn,
                assertContextRunning: ()=>Gn,
                assertRange: ()=>Un,
                assertUsedScheduleTime: ()=>Yn,
                enterScheduledCallback: ()=>Xn,
                log: ()=>Jn,
                setLogger: ()=>Hn,
                warn: ()=>Kn
            });
            var e = {};
            s1.r(e);
            const i = "14.9.17";
            var o = s1(382);
            const r = new WeakSet, a = new WeakMap, c = new WeakMap, h = new WeakMap, l = new WeakMap, u = new WeakMap, p = new WeakMap, d = new WeakMap, f = new WeakMap, _ = new WeakMap, m = {
                construct: ()=>m
            }, g = /^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/, v = (t1, e)=>{
                const s1 = [];
                let n = t1.replace(/^[\s]+/, ""), i = n.match(g);
                for(; null !== i;){
                    const t1 = i[1].slice(1, -1), o = i[0].replace(/([\s]+)?;?$/, "").replace(t1, new URL(t1, e).toString());
                    s1.push(o), n = n.slice(i[0].length).replace(/^[\s]+/, ""), i = n.match(g);
                }
                return [
                    s1.join(";"),
                    n
                ];
            }, y = (t1)=>{
                if (void 0 !== t1 && !Array.isArray(t1)) throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.");
            }, x = (t1)=>{
                if (!((t1)=>{
                    try {
                        new new Proxy(t1, m);
                    } catch  {
                        return !1;
                    }
                    return !0;
                })(t1)) throw new TypeError("The given value for processorCtor should be a constructor.");
                if (null === t1.prototype || "object" != typeof t1.prototype) throw new TypeError("The given value for processorCtor should have a prototype.");
            }, w = (t1, e)=>{
                const s1 = t1.get(e);
                if (void 0 === s1) throw new Error("A value with the given key could not be found.");
                return s1;
            }, b = (t1, e)=>{
                const s1 = Array.from(t1).filter(e);
                if (s1.length > 1) throw Error("More than one element was found.");
                if (0 === s1.length) throw Error("No element was found.");
                const [n] = s1;
                return t1.delete(n), n;
            }, T = (t1, e, s1, n)=>{
                const i = w(t1, e), o = b(i, (t1)=>t1[0] === s1 && t1[1] === n);
                return 0 === i.size && t1.delete(e), o;
            }, S = (t1)=>w(p, t1), k = (t1)=>{
                if (r.has(t1)) throw new Error("The AudioNode is already stored.");
                r.add(t1), S(t1).forEach((t1)=>t1(!0));
            }, A = (t1)=>"port" in t1, C = (t1)=>{
                if (!r.has(t1)) throw new Error("The AudioNode is not stored.");
                r.delete(t1), S(t1).forEach((t1)=>t1(!1));
            }, D = (t1, e)=>{
                !A(t1) && e.every((t1)=>0 === t1.size) && C(t1);
            }, O = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                fftSize: 2048,
                maxDecibels: -30,
                minDecibels: -100,
                smoothingTimeConstant: .8
            }, M = (t1, e)=>t1.context === e, E = (t1)=>{
                try {
                    t1.copyToChannel(new Float32Array(1), 0, -1);
                } catch  {
                    return !1;
                }
                return !0;
            }, R = ()=>new DOMException("", "IndexSizeError"), q = (t1)=>{
                var e;
                t1.getChannelData = (e = t1.getChannelData, (s1)=>{
                    try {
                        return e.call(t1, s1);
                    } catch (t1) {
                        if (12 === t1.code) throw R();
                        throw t1;
                    }
                });
            }, F = {
                numberOfChannels: 1
            }, I = -340282346638528860000000000000000000000, V = -I, N = (t1)=>r.has(t1), P = {
                buffer: null,
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                loop: !1,
                loopEnd: 0,
                loopStart: 0,
                playbackRate: 1
            }, j = (t1)=>w(a, t1), L = (t1)=>w(h, t1), z = (t1, e)=>{
                const { activeInputs: s1 } = j(t1);
                s1.forEach((s1)=>s1.forEach(([s1])=>{
                        e.includes(t1) || z(s1, [
                            ...e,
                            t1
                        ]);
                    }));
                const n = ((t1)=>"playbackRate" in t1)(t1) ? [
                    t1.playbackRate
                ] : A(t1) ? Array.from(t1.parameters.values()) : ((t1)=>"frequency" in t1 && "gain" in t1)(t1) ? [
                    t1.Q,
                    t1.detune,
                    t1.frequency,
                    t1.gain
                ] : ((t1)=>"offset" in t1)(t1) ? [
                    t1.offset
                ] : ((t1)=>!("frequency" in t1) && "gain" in t1)(t1) ? [
                    t1.gain
                ] : ((t1)=>"detune" in t1 && "frequency" in t1)(t1) ? [
                    t1.detune,
                    t1.frequency
                ] : ((t1)=>"pan" in t1)(t1) ? [
                    t1.pan
                ] : [];
                for (const t1 of n){
                    const s1 = L(t1);
                    void 0 !== s1 && s1.activeInputs.forEach(([t1])=>z(t1, e));
                }
                N(t1) && C(t1);
            }, W = (t1)=>{
                z(t1.destination, []);
            }, B = (t1)=>"context" in t1, U = (t1)=>B(t1[0]), G = (t1, e, s1, n)=>{
                for (const e of t1)if (s1(e)) {
                    if (n) return !1;
                    throw Error("The set contains at least one similar element.");
                }
                return t1.add(e), !0;
            }, Q = (t1, e, [s1, n], i)=>{
                G(t1, [
                    e,
                    s1,
                    n
                ], (t1)=>t1[0] === e && t1[1] === s1, i);
            }, Z = (t1, [e, s1, n], i)=>{
                const o = t1.get(e);
                void 0 === o ? t1.set(e, new Set([
                    [
                        s1,
                        n
                    ]
                ])) : G(o, [
                    s1,
                    n
                ], (t1)=>t1[0] === s1, i);
            }, X = (t1)=>"inputs" in t1, Y = (t1, e, s1, n)=>{
                if (X(e)) {
                    const i = e.inputs[n];
                    return t1.connect(i, s1, 0), [
                        i,
                        s1,
                        0
                    ];
                }
                return t1.connect(e, s1, n), [
                    e,
                    s1,
                    n
                ];
            }, $ = (t1, e, s1)=>{
                for (const n of t1)if (n[0] === e && n[1] === s1) return t1.delete(n), n;
                return null;
            }, H = (t1, e)=>{
                if (!S(t1).delete(e)) throw new Error("Missing the expected event listener.");
            }, J = (t1, e, s1)=>{
                const n = w(t1, e), i = b(n, (t1)=>t1[0] === s1);
                return 0 === n.size && t1.delete(e), i;
            }, K = (t1, e, s1, n)=>{
                X(e) ? t1.disconnect(e.inputs[n], s1, 0) : t1.disconnect(e, s1, n);
            }, tt = (t1)=>w(c, t1), et = (t1)=>w(l, t1), st = (t1)=>d.has(t1), nt = (t1)=>!r.has(t1), it = (t1, e)=>new Promise((s1)=>{
                    if (null !== e) s1(!0);
                    else {
                        const e = t1.createScriptProcessor(256, 1, 1), n = t1.createGain(), i = t1.createBuffer(1, 2, 44100), o = i.getChannelData(0);
                        o[0] = 1, o[1] = 1;
                        const r = t1.createBufferSource();
                        r.buffer = i, r.loop = !0, r.connect(e).connect(t1.destination), r.connect(n), r.disconnect(n), e.onaudioprocess = (n)=>{
                            const i = n.inputBuffer.getChannelData(0);
                            Array.prototype.some.call(i, (t1)=>1 === t1) ? s1(!0) : s1(!1), r.stop(), e.onaudioprocess = null, r.disconnect(e), e.disconnect(t1.destination);
                        }, r.start();
                    }
                }), ot = (t1, e)=>{
                const s1 = new Map;
                for (const e of t1)for (const t1 of e){
                    const e = s1.get(t1);
                    s1.set(t1, void 0 === e ? 1 : e + 1);
                }
                s1.forEach((t1, s1)=>e(s1, t1));
            }, rt = (t1)=>"context" in t1, at = (t1)=>{
                const e = new Map;
                t1.connect = ((t1)=>(s1, n = 0, i = 0)=>{
                        const o = rt(s1) ? t1(s1, n, i) : t1(s1, n), r = e.get(s1);
                        return void 0 === r ? e.set(s1, [
                            {
                                input: i,
                                output: n
                            }
                        ]) : r.every((t1)=>t1.input !== i || t1.output !== n) && r.push({
                            input: i,
                            output: n
                        }), o;
                    })(t1.connect.bind(t1)), t1.disconnect = ((s1)=>(n, i, o)=>{
                        if (s1.apply(t1), void 0 === n) e.clear();
                        else if ("number" == typeof n) for (const [t1, s1] of e){
                            const i = s1.filter((t1)=>t1.output !== n);
                            0 === i.length ? e.delete(t1) : e.set(t1, i);
                        }
                        else if (e.has(n)) {
                            if (void 0 === i) e.delete(n);
                            else {
                                const t1 = e.get(n);
                                if (void 0 !== t1) {
                                    const s1 = t1.filter((t1)=>t1.output !== i && (t1.input !== o || void 0 === o));
                                    0 === s1.length ? e.delete(n) : e.set(n, s1);
                                }
                            }
                        }
                        for (const [s1, n] of e)n.forEach((e)=>{
                            rt(s1) ? t1.connect(s1, e.output, e.input) : t1.connect(s1, e.output);
                        });
                    })(t1.disconnect);
            }, ct = (t1, e, s1, n, i)=>{
                const [o, r] = ((t1, e, s1, n)=>{
                    const { activeInputs: i, passiveInputs: o } = j(e), r = $(i[n], t1, s1);
                    return null === r ? [
                        T(o, t1, s1, n)[2],
                        !1
                    ] : [
                        r[2],
                        !0
                    ];
                })(t1, s1, n, i);
                if (null !== o && (H(t1, o), !r || e || st(t1) || K(tt(t1), tt(s1), n, i)), N(s1)) {
                    const { activeInputs: t1 } = j(s1);
                    D(s1, t1);
                }
            }, ht = (t1, e, s1, n)=>{
                const [i, o] = ((t1, e, s1)=>{
                    const { activeInputs: n, passiveInputs: i } = L(e), o = $(n, t1, s1);
                    return null === o ? [
                        J(i, t1, s1)[1],
                        !1
                    ] : [
                        o[2],
                        !0
                    ];
                })(t1, s1, n);
                null !== i && (H(t1, i), !o || e || st(t1) || tt(t1).disconnect(et(s1), n));
            };
            class lt {
                constructor(t1){
                    this._map = new Map(t1);
                }
                get size() {
                    return this._map.size;
                }
                entries() {
                    return this._map.entries();
                }
                forEach(t1, e = null) {
                    return this._map.forEach((s1, n)=>t1.call(e, s1, n, this));
                }
                get(t1) {
                    return this._map.get(t1);
                }
                has(t1) {
                    return this._map.has(t1);
                }
                keys() {
                    return this._map.keys();
                }
                values() {
                    return this._map.values();
                }
            }
            const ut = {
                channelCount: 2,
                channelCountMode: "explicit",
                channelInterpretation: "speakers",
                numberOfInputs: 1,
                numberOfOutputs: 1,
                parameterData: {},
                processorOptions: {}
            };
            function pt(t1, e, s1, n, i) {
                if ("function" == typeof t1.copyFromChannel) 0 === e[s1].byteLength && (e[s1] = new Float32Array(128)), t1.copyFromChannel(e[s1], n, i);
                else {
                    const o = t1.getChannelData(n);
                    if (0 === e[s1].byteLength) e[s1] = o.slice(i, i + 128);
                    else {
                        const t1 = new Float32Array(o.buffer, i * Float32Array.BYTES_PER_ELEMENT, 128);
                        e[s1].set(t1);
                    }
                }
            }
            const dt = (t1, e, s1, n, i)=>{
                "function" == typeof t1.copyToChannel ? 0 !== e[s1].byteLength && t1.copyToChannel(e[s1], n, i) : 0 !== e[s1].byteLength && t1.getChannelData(n).set(e[s1], i);
            }, ft = (t1, e)=>{
                const s1 = [];
                for(let n = 0; n < t1; n += 1){
                    const t1 = [], i = "number" == typeof e ? e : e[n];
                    for(let e = 0; e < i; e += 1)t1.push(new Float32Array(128));
                    s1.push(t1);
                }
                return s1;
            }, _t = async (t1, e, s1, n, i, o, r)=>{
                const a = null === e ? 128 * Math.ceil(t1.context.length / 128) : e.length, c = n.channelCount * n.numberOfInputs, h = i.reduce((t1, e)=>t1 + e, 0), l = 0 === h ? null : s1.createBuffer(h, a, s1.sampleRate);
                if (void 0 === o) throw new Error("Missing the processor constructor.");
                const u = j(t1), p = await ((t1, e)=>{
                    const s1 = w(_, t1), n = tt(e);
                    return w(s1, n);
                })(s1, t1), d = ft(n.numberOfInputs, n.channelCount), f = ft(n.numberOfOutputs, i), m = Array.from(t1.parameters.keys()).reduce((t1, e)=>({
                        ...t1,
                        [e]: new Float32Array(128)
                    }), {});
                for(let h = 0; h < a; h += 128){
                    if (n.numberOfInputs > 0 && null !== e) for(let t1 = 0; t1 < n.numberOfInputs; t1 += 1)for(let s1 = 0; s1 < n.channelCount; s1 += 1)pt(e, d[t1], s1, s1, h);
                    void 0 !== o.parameterDescriptors && null !== e && o.parameterDescriptors.forEach(({ name: t1 }, s1)=>{
                        pt(e, m, t1, c + s1, h);
                    });
                    for(let t1 = 0; t1 < n.numberOfInputs; t1 += 1)for(let e = 0; e < i[t1]; e += 1)0 === f[t1][e].byteLength && (f[t1][e] = new Float32Array(128));
                    try {
                        const t1 = d.map((t1, e)=>0 === u.activeInputs[e].size ? [] : t1), e = r(h / s1.sampleRate, s1.sampleRate, ()=>p.process(t1, f, m));
                        if (null !== l) for(let t1 = 0, e = 0; t1 < n.numberOfOutputs; t1 += 1){
                            for(let s1 = 0; s1 < i[t1]; s1 += 1)dt(l, f[t1], s1, e + s1, h);
                            e += i[t1];
                        }
                        if (!e) break;
                    } catch (e) {
                        t1.dispatchEvent(new ErrorEvent("processorerror", {
                            colno: e.colno,
                            filename: e.filename,
                            lineno: e.lineno,
                            message: e.message
                        }));
                        break;
                    }
                }
                return l;
            }, mt = {
                Q: 1,
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                detune: 0,
                frequency: 350,
                gain: 0,
                type: "lowpass"
            }, gt = {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "speakers",
                numberOfInputs: 6
            }, vt = {
                channelCount: 6,
                channelCountMode: "explicit",
                channelInterpretation: "discrete",
                numberOfOutputs: 6
            }, yt = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                offset: 1
            }, xt = {
                buffer: null,
                channelCount: 2,
                channelCountMode: "clamped-max",
                channelInterpretation: "speakers",
                disableNormalization: !1
            }, wt = (t1)=>{
                const { port1: e, port2: s1 } = new MessageChannel;
                return new Promise((n)=>{
                    const i = ()=>{
                        s1.onmessage = null, e.close(), s1.close(), n();
                    };
                    s1.onmessage = ()=>i();
                    try {
                        e.postMessage(t1, [
                            t1
                        ]);
                    } catch  {} finally{
                        i();
                    }
                });
            }, bt = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                delayTime: 0,
                maxDelayTime: 1
            }, Tt = (t1, e, s1)=>{
                const n = e[s1];
                if (void 0 === n) throw t1();
                return n;
            }, St = {
                attack: .003,
                channelCount: 2,
                channelCountMode: "clamped-max",
                channelInterpretation: "speakers",
                knee: 30,
                ratio: 12,
                release: .25,
                threshold: -24
            }, kt = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                gain: 1
            }, At = ()=>new DOMException("", "InvalidStateError"), Ct = ()=>new DOMException("", "InvalidAccessError"), Dt = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers"
            }, Ot = (t1, e, s1, n, i, o, r, a, c, h, l)=>{
                const u = h.length;
                let p = a;
                for(let a = 0; a < u; a += 1){
                    let u = s1[0] * h[a];
                    for(let e = 1; e < i; e += 1){
                        const n = p - e & c - 1;
                        u += s1[e] * o[n], u -= t1[e] * r[n];
                    }
                    for(let t1 = i; t1 < n; t1 += 1)u += s1[t1] * o[p - t1 & c - 1];
                    for(let s1 = i; s1 < e; s1 += 1)u -= t1[s1] * r[p - s1 & c - 1];
                    o[p] = h[a], r[p] = u, p = p + 1 & c - 1, l[a] = u;
                }
                return p;
            }, Mt = {
                channelCount: 2,
                channelCountMode: "explicit",
                channelInterpretation: "speakers"
            }, Et = (t1)=>{
                const e = new Uint32Array([
                    1179011410,
                    40,
                    1163280727,
                    544501094,
                    16,
                    131073,
                    44100,
                    176400,
                    1048580,
                    1635017060,
                    4,
                    0
                ]);
                try {
                    const s1 = t1.decodeAudioData(e.buffer, ()=>{});
                    return void 0 !== s1 && (s1.catch(()=>{}), !0);
                } catch  {}
                return !1;
            }, Rt = (t1, e, s1)=>{
                const n = e[s1];
                void 0 !== n && n !== t1[s1] && (t1[s1] = n);
            }, qt = (t1, e)=>{
                Rt(t1, e, "channelCount"), Rt(t1, e, "channelCountMode"), Rt(t1, e, "channelInterpretation");
            }, Ft = (t1)=>"function" == typeof t1.getFloatTimeDomainData, It = (t1, e, s1)=>{
                const n = e[s1];
                void 0 !== n && n !== t1[s1].value && (t1[s1].value = n);
            }, Vt = (t1)=>{
                t1.start = ((e)=>(s1 = 0, n = 0, i)=>{
                        if ("number" == typeof i && i < 0 || n < 0 || s1 < 0) throw new RangeError("The parameters can't be negative.");
                        e.call(t1, s1, n, i);
                    })(t1.start);
            }, Nt = (t1)=>{
                var e;
                t1.stop = (e = t1.stop, (s1 = 0)=>{
                    if (s1 < 0) throw new RangeError("The parameter can't be negative.");
                    e.call(t1, s1);
                });
            }, Pt = (t1, e)=>null === t1 ? 512 : Math.max(512, Math.min(16384, Math.pow(2, Math.round(Math.log2(t1 * e))))), jt = (t1, e)=>{
                const s1 = t1.createBiquadFilter();
                return qt(s1, e), It(s1, e, "Q"), It(s1, e, "detune"), It(s1, e, "frequency"), It(s1, e, "gain"), Rt(s1, e, "type"), s1;
            }, Lt = (t1, e)=>{
                const s1 = t1.createChannelSplitter(e.numberOfOutputs);
                return qt(s1, e), ((t1)=>{
                    const e = t1.numberOfOutputs;
                    Object.defineProperty(t1, "channelCount", {
                        get: ()=>e,
                        set: (t1)=>{
                            if (t1 !== e) throw At();
                        }
                    }), Object.defineProperty(t1, "channelCountMode", {
                        get: ()=>"explicit",
                        set: (t1)=>{
                            if ("explicit" !== t1) throw At();
                        }
                    }), Object.defineProperty(t1, "channelInterpretation", {
                        get: ()=>"discrete",
                        set: (t1)=>{
                            if ("discrete" !== t1) throw At();
                        }
                    });
                })(s1), s1;
            }, zt = (t1, e)=>(t1.connect = e.connect.bind(e), t1.disconnect = e.disconnect.bind(e), t1), Wt = (t1, e)=>{
                const s1 = t1.createDelay(e.maxDelayTime);
                return qt(s1, e), It(s1, e, "delayTime"), s1;
            }, Bt = (t1, e)=>{
                const s1 = t1.createGain();
                return qt(s1, e), It(s1, e, "gain"), s1;
            };
            function Ut(t1, e) {
                const s1 = e[0] * e[0] + e[1] * e[1];
                return [
                    (t1[0] * e[0] + t1[1] * e[1]) / s1,
                    (t1[1] * e[0] - t1[0] * e[1]) / s1
                ];
            }
            function Gt(t1, e) {
                let s1 = [
                    0,
                    0
                ];
                for(let o = t1.length - 1; o >= 0; o -= 1)i = e, s1 = [
                    (n = s1)[0] * i[0] - n[1] * i[1],
                    n[0] * i[1] + n[1] * i[0]
                ], s1[0] += t1[o];
                var n, i;
                return s1;
            }
            const Qt = (t1, e, s1, n)=>t1.createScriptProcessor(e, s1, n), Zt = ()=>new DOMException("", "NotSupportedError"), Xt = {
                numberOfChannels: 1
            }, Yt = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                detune: 0,
                frequency: 440,
                periodicWave: void 0,
                type: "sine"
            }, $t = {
                channelCount: 2,
                channelCountMode: "clamped-max",
                channelInterpretation: "speakers",
                coneInnerAngle: 360,
                coneOuterAngle: 360,
                coneOuterGain: 0,
                distanceModel: "inverse",
                maxDistance: 1e4,
                orientationX: 1,
                orientationY: 0,
                orientationZ: 0,
                panningModel: "equalpower",
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                refDistance: 1,
                rolloffFactor: 1
            }, Ht = {
                disableNormalization: !1
            }, Jt = {
                channelCount: 2,
                channelCountMode: "explicit",
                channelInterpretation: "speakers",
                pan: 0
            }, Kt = ()=>new DOMException("", "UnknownError"), te = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                curve: null,
                oversample: "none"
            }, ee = (t1, e, s1)=>void 0 === t1.copyFromChannel ? t1.getChannelData(s1)[0] : (t1.copyFromChannel(e, s1), e[0]), se = (t1)=>{
                if (null === t1) return !1;
                const e = t1.length;
                return e % 2 != 0 ? 0 !== t1[Math.floor(e / 2)] : t1[e / 2 - 1] + t1[e / 2] !== 0;
            }, ne = (t1, e, s1, n)=>{
                let i = t1;
                for(; !i.hasOwnProperty(e);)i = Object.getPrototypeOf(i);
                const { get: o, set: r } = Object.getOwnPropertyDescriptor(i, e);
                Object.defineProperty(t1, e, {
                    get: s1(o),
                    set: n(r)
                });
            }, ie = (t1, e, s1)=>{
                try {
                    t1.setValueAtTime(e, s1);
                } catch (n) {
                    if (9 !== n.code) throw n;
                    ie(t1, e, s1 + 1e-7);
                }
            }, oe = (t1)=>{
                const e = t1.createOscillator();
                try {
                    e.start(-1);
                } catch (t1) {
                    return t1 instanceof RangeError;
                }
                return !1;
            }, re = (t1)=>{
                const e = t1.createBuffer(1, 1, 44100), s1 = t1.createBufferSource();
                s1.buffer = e, s1.start(), s1.stop();
                try {
                    return s1.stop(), !0;
                } catch  {
                    return !1;
                }
            }, ae = (t1)=>{
                const e = t1.createOscillator();
                try {
                    e.stop(-1);
                } catch (t1) {
                    return t1 instanceof RangeError;
                }
                return !1;
            }, ce = ()=>{
                try {
                    new DOMException;
                } catch  {
                    return !1;
                }
                return !0;
            }, he = ()=>new Promise((t1)=>{
                    const e = new ArrayBuffer(0), { port1: s1, port2: n } = new MessageChannel;
                    s1.onmessage = ({ data: e })=>t1(null !== e), n.postMessage(e, [
                        e
                    ]);
                }), le = (t1, e)=>{
                const s1 = e.createGain();
                t1.connect(s1);
                const n = ((e)=>()=>{
                        e.call(t1, s1), t1.removeEventListener("ended", n);
                    })(t1.disconnect);
                t1.addEventListener("ended", n), zt(t1, s1), t1.stop = ((e)=>{
                    let n = !1;
                    return (i = 0)=>{
                        if (n) try {
                            e.call(t1, i);
                        } catch  {
                            s1.gain.setValueAtTime(0, i);
                        }
                        else e.call(t1, i), n = !0;
                    };
                })(t1.stop);
            }, ue = (t1, e)=>(s1)=>{
                    const n = {
                        value: t1
                    };
                    return Object.defineProperties(s1, {
                        currentTarget: n,
                        target: n
                    }), "function" == typeof e ? e.call(t1, s1) : e.handleEvent.call(t1, s1);
                }, pe = ((t1)=>(e, s1, [n, i, o], r)=>{
                    t1(e[i], [
                        s1,
                        n,
                        o
                    ], (t1)=>t1[0] === s1 && t1[1] === n, r);
                })(G), de = ((t1)=>(e, s1, [n, i, o], r)=>{
                    const a = e.get(n);
                    void 0 === a ? e.set(n, new Set([
                        [
                            i,
                            s1,
                            o
                        ]
                    ])) : t1(a, [
                        i,
                        s1,
                        o
                    ], (t1)=>t1[0] === i && t1[1] === s1, r);
                })(G), fe = ((t1)=>(e, s1, n, i)=>t1(e[i], (t1)=>t1[0] === s1 && t1[1] === n))(b), _e = new WeakMap, me = ((t1)=>(e)=>{
                    var s1;
                    return null !== (s1 = t1.get(e)) && void 0 !== s1 ? s1 : 0;
                })(_e), ge = (ve = new Map, ye = new WeakMap, (t1, e)=>{
                const s1 = ye.get(t1);
                if (void 0 !== s1) return s1;
                const n = ve.get(t1);
                if (void 0 !== n) return n;
                try {
                    const s1 = e();
                    return s1 instanceof Promise ? (ve.set(t1, s1), s1.catch(()=>!1).then((e)=>(ve.delete(t1), ye.set(t1, e), e))) : (ye.set(t1, s1), s1);
                } catch  {
                    return ye.set(t1, !1), !1;
                }
            });
            var ve, ye;
            const xe = "undefined" == typeof window ? null : window, we = ((t1, e)=>(s1, n)=>{
                    const i = s1.createAnalyser();
                    if (qt(i, n), !(n.maxDecibels > n.minDecibels)) throw e();
                    return Rt(i, n, "fftSize"), Rt(i, n, "maxDecibels"), Rt(i, n, "minDecibels"), Rt(i, n, "smoothingTimeConstant"), t1(Ft, ()=>Ft(i)) || ((t1)=>{
                        t1.getFloatTimeDomainData = (e)=>{
                            const s1 = new Uint8Array(e.length);
                            t1.getByteTimeDomainData(s1);
                            const n = Math.max(s1.length, t1.fftSize);
                            for(let t1 = 0; t1 < n; t1 += 1)e[t1] = .0078125 * (s1[t1] - 128);
                            return e;
                        };
                    })(i), i;
                })(ge, R), be = ((t1)=>(e)=>{
                    const s1 = t1(e);
                    if (null === s1.renderer) throw new Error("Missing the renderer of the given AudioNode in the audio graph.");
                    return s1.renderer;
                })(j), Te = ((t1, e, s1)=>async (n, i, o)=>{
                    const r = t1(n);
                    await Promise.all(r.activeInputs.map((t1, r)=>Array.from(t1).map(async ([t1, a])=>{
                            const c = e(t1), h = await c.render(t1, i), l = n.context.destination;
                            s1(t1) || n === l && s1(n) || h.connect(o, a, r);
                        })).reduce((t1, e)=>[
                            ...t1,
                            ...e
                        ], []));
                })(j, be, st), Se = ((t1, e, s1)=>()=>{
                    const n = new WeakMap;
                    return {
                        render (i, o) {
                            const r = n.get(o);
                            return void 0 !== r ? Promise.resolve(r) : (async (i, o)=>{
                                let r = e(i);
                                if (!M(r, o)) {
                                    const e = {
                                        channelCount: r.channelCount,
                                        channelCountMode: r.channelCountMode,
                                        channelInterpretation: r.channelInterpretation,
                                        fftSize: r.fftSize,
                                        maxDecibels: r.maxDecibels,
                                        minDecibels: r.minDecibels,
                                        smoothingTimeConstant: r.smoothingTimeConstant
                                    };
                                    r = t1(o, e);
                                }
                                return n.set(o, r), await s1(i, o, r), r;
                            })(i, o);
                        }
                    };
                })(we, tt, Te), ke = (Ae = u, (t1)=>{
                const e = Ae.get(t1);
                if (void 0 === e) throw At();
                return e;
            });
            var Ae;
            const Ce = ((t1)=>null === t1 ? null : t1.hasOwnProperty("OfflineAudioContext") ? t1.OfflineAudioContext : t1.hasOwnProperty("webkitOfflineAudioContext") ? t1.webkitOfflineAudioContext : null)(xe), De = ((t1)=>(e)=>null !== t1 && e instanceof t1)(Ce), Oe = new WeakMap, Me = ((t1)=>class {
                    constructor(t1){
                        this._nativeEventTarget = t1, this._listeners = new WeakMap;
                    }
                    addEventListener(e, s1, n) {
                        if (null !== s1) {
                            let i = this._listeners.get(s1);
                            void 0 === i && (i = t1(this, s1), "function" == typeof s1 && this._listeners.set(s1, i)), this._nativeEventTarget.addEventListener(e, i, n);
                        }
                    }
                    dispatchEvent(t1) {
                        return this._nativeEventTarget.dispatchEvent(t1);
                    }
                    removeEventListener(t1, e, s1) {
                        const n = null === e ? void 0 : this._listeners.get(e);
                        this._nativeEventTarget.removeEventListener(t1, void 0 === n ? null : n, s1);
                    }
                })(ue), Ee = ((t1)=>null === t1 ? null : t1.hasOwnProperty("AudioContext") ? t1.AudioContext : t1.hasOwnProperty("webkitAudioContext") ? t1.webkitAudioContext : null)(xe), Re = ((t1)=>(e)=>null !== t1 && e instanceof t1)(Ee), qe = ((t1)=>(e)=>null !== t1 && "function" == typeof t1.AudioNode && e instanceof t1.AudioNode)(xe), Fe = ((t1)=>(e)=>null !== t1 && "function" == typeof t1.AudioParam && e instanceof t1.AudioParam)(xe), Ie = ((t1)=>null === t1 ? null : t1.hasOwnProperty("AudioWorkletNode") ? t1.AudioWorkletNode : null)(xe), Ve = ((t1, e, s1, n, i, o, r, a, h, l, u, d, f, _, m, g)=>class extends l {
                    constructor(e, n, i, o){
                        super(i), this._context = e, this._nativeAudioNode = i;
                        const r = u(e);
                        d(r) && !0 !== s1(it, ()=>it(r, g)) && at(i), c.set(this, i), p.set(this, new Set), "closed" !== e.state && n && k(this), t1(this, o, i);
                    }
                    get channelCount() {
                        return this._nativeAudioNode.channelCount;
                    }
                    set channelCount(t1) {
                        this._nativeAudioNode.channelCount = t1;
                    }
                    get channelCountMode() {
                        return this._nativeAudioNode.channelCountMode;
                    }
                    set channelCountMode(t1) {
                        this._nativeAudioNode.channelCountMode = t1;
                    }
                    get channelInterpretation() {
                        return this._nativeAudioNode.channelInterpretation;
                    }
                    set channelInterpretation(t1) {
                        this._nativeAudioNode.channelInterpretation = t1;
                    }
                    get context() {
                        return this._context;
                    }
                    get numberOfInputs() {
                        return this._nativeAudioNode.numberOfInputs;
                    }
                    get numberOfOutputs() {
                        return this._nativeAudioNode.numberOfOutputs;
                    }
                    connect(t1, s1 = 0, a = 0) {
                        if (s1 < 0 || s1 >= this._nativeAudioNode.numberOfOutputs) throw i();
                        const c = u(this._context), l = m(c);
                        if (f(t1) || _(t1)) throw o();
                        if (B(t1)) {
                            const i = tt(t1);
                            try {
                                const e = Y(this._nativeAudioNode, i, s1, a), n = nt(this);
                                (l || n) && this._nativeAudioNode.disconnect(...e), "closed" !== this.context.state && !n && nt(t1) && k(t1);
                            } catch (t1) {
                                if (12 === t1.code) throw o();
                                throw t1;
                            }
                            if (e(this, t1, s1, a, l)) {
                                const e = h([
                                    this
                                ], t1);
                                ot(e, n(l));
                            }
                            return t1;
                        }
                        const p = et(t1);
                        if ("playbackRate" === p.name && 1024 === p.maxValue) throw r();
                        try {
                            this._nativeAudioNode.connect(p, s1), (l || nt(this)) && this._nativeAudioNode.disconnect(p, s1);
                        } catch (t1) {
                            if (12 === t1.code) throw o();
                            throw t1;
                        }
                        if (((t1, e, s1, n)=>{
                            const { activeInputs: i, passiveInputs: o } = L(e), { outputs: r } = j(t1), a = S(t1), c = (r)=>{
                                const a = tt(t1), c = et(e);
                                if (r) {
                                    const e = J(o, t1, s1);
                                    Q(i, t1, e, !1), n || st(t1) || a.connect(c, s1);
                                } else {
                                    const e = ((t1, e, s1)=>b(t1, (t1)=>t1[0] === e && t1[1] === s1))(i, t1, s1);
                                    Z(o, e, !1), n || st(t1) || a.disconnect(c, s1);
                                }
                            };
                            return !!G(r, [
                                e,
                                s1
                            ], (t1)=>t1[0] === e && t1[1] === s1, !0) && (a.add(c), N(t1) ? Q(i, t1, [
                                s1,
                                c
                            ], !0) : Z(o, [
                                t1,
                                s1,
                                c
                            ], !0), !0);
                        })(this, t1, s1, l)) {
                            const e = h([
                                this
                            ], t1);
                            ot(e, n(l));
                        }
                    }
                    disconnect(t1, e, s1) {
                        let n;
                        const r = u(this._context), c = m(r);
                        if (void 0 === t1) n = ((t1, e)=>{
                            const s1 = j(t1), n = [];
                            for (const i of s1.outputs)U(i) ? ct(t1, e, ...i) : ht(t1, e, ...i), n.push(i[0]);
                            return s1.outputs.clear(), n;
                        })(this, c);
                        else if ("number" == typeof t1) {
                            if (t1 < 0 || t1 >= this.numberOfOutputs) throw i();
                            n = ((t1, e, s1)=>{
                                const n = j(t1), i = [];
                                for (const o of n.outputs)o[1] === s1 && (U(o) ? ct(t1, e, ...o) : ht(t1, e, ...o), i.push(o[0]), n.outputs.delete(o));
                                return i;
                            })(this, c, t1);
                        } else {
                            if (void 0 !== e && (e < 0 || e >= this.numberOfOutputs)) throw i();
                            if (B(t1) && void 0 !== s1 && (s1 < 0 || s1 >= t1.numberOfInputs)) throw i();
                            if (n = ((t1, e, s1, n, i)=>{
                                const o = j(t1);
                                return Array.from(o.outputs).filter((t1)=>!(t1[0] !== s1 || void 0 !== n && t1[1] !== n || void 0 !== i && t1[2] !== i)).map((s1)=>(U(s1) ? ct(t1, e, ...s1) : ht(t1, e, ...s1), o.outputs.delete(s1), s1[0]));
                            })(this, c, t1, e, s1), 0 === n.length) throw o();
                        }
                        for (const t1 of n){
                            const e = h([
                                this
                            ], t1);
                            ot(e, a);
                        }
                    }
                })((Ne = a, (t1, e, s1)=>{
                const n = [];
                for(let t1 = 0; t1 < s1.numberOfInputs; t1 += 1)n.push(new Set);
                Ne.set(t1, {
                    activeInputs: n,
                    outputs: new Set,
                    passiveInputs: new WeakMap,
                    renderer: e
                });
            }), ((t1, e, s1, n, i, o, r, a, c, h, l, u, p)=>{
                const d = new WeakMap;
                return (f, _, m, g, v)=>{
                    const { activeInputs: y, passiveInputs: x } = o(_), { outputs: w } = o(f), b = a(f), S = (o)=>{
                        const a = c(_), h = c(f);
                        if (o) {
                            const e = T(x, f, m, g);
                            t1(y, f, e, !1), v || u(f) || s1(h, a, m, g), p(_) && k(_);
                        } else {
                            const t1 = n(y, f, m, g);
                            e(x, g, t1, !1), v || u(f) || i(h, a, m, g);
                            const s1 = r(_);
                            if (0 === s1) l(_) && D(_, y);
                            else {
                                const t1 = d.get(_);
                                void 0 !== t1 && clearTimeout(t1), d.set(_, setTimeout(()=>{
                                    l(_) && D(_, y);
                                }, 1e3 * s1));
                            }
                        }
                    };
                    return !!h(w, [
                        _,
                        m,
                        g
                    ], (t1)=>t1[0] === _ && t1[1] === m && t1[2] === g, !0) && (b.add(S), l(f) ? t1(y, f, [
                        m,
                        g,
                        S
                    ], !0) : e(x, g, [
                        f,
                        m,
                        S
                    ], !0), !0);
                };
            })(pe, de, Y, fe, K, j, me, S, tt, G, N, st, nt), ge, ((t1, e, s1, n, i, o)=>(r)=>(a, c)=>{
                        const h = t1.get(a);
                        if (void 0 === h) {
                            if (!r && o(a)) {
                                const t1 = n(a), { outputs: o } = s1(a);
                                for (const s1 of o)if (U(s1)) {
                                    const i = n(s1[0]);
                                    e(t1, i, s1[1], s1[2]);
                                } else {
                                    const e = i(s1[0]);
                                    t1.disconnect(e, s1[1]);
                                }
                            }
                            t1.set(a, c);
                        } else t1.set(a, h + c);
                    })(d, K, j, tt, et, N), R, Ct, Zt, ((t1, e, s1, n, i, o, r, a)=>(c, h)=>{
                    const l = e.get(c);
                    if (void 0 === l) throw new Error("Missing the expected cycle count.");
                    const u = o(c.context), p = a(u);
                    if (l === h) {
                        if (e.delete(c), !p && r(c)) {
                            const e = n(c), { outputs: o } = s1(c);
                            for (const s1 of o)if (U(s1)) {
                                const i = n(s1[0]);
                                t1(e, i, s1[1], s1[2]);
                            } else {
                                const t1 = i(s1[0]);
                                e.connect(t1, s1[1]);
                            }
                        }
                    } else e.set(c, l - h);
                })(Y, d, j, tt, et, ke, N, De), ((t1, e, s1)=>function n(i, o) {
                    const r = B(o) ? o : s1(t1, o);
                    if (((t1)=>"delayTime" in t1)(r)) return [];
                    if (i[0] === r) return [
                        i
                    ];
                    if (i.includes(r)) return [];
                    const { outputs: a } = e(r);
                    return Array.from(a).map((t1)=>n([
                            ...i,
                            r
                        ], t1[0])).reduce((t1, e)=>t1.concat(e), []);
                })(Oe, j, w), Me, ke, Re, qe, Fe, De, Ie);
            var Ne;
            const Pe = ((t1, e, s1, n, i, o)=>class extends t1 {
                    constructor(t1, s1){
                        const r = i(t1), a = {
                            ...O,
                            ...s1
                        }, c = n(r, a);
                        super(t1, !1, c, o(r) ? e() : null), this._nativeAnalyserNode = c;
                    }
                    get fftSize() {
                        return this._nativeAnalyserNode.fftSize;
                    }
                    set fftSize(t1) {
                        this._nativeAnalyserNode.fftSize = t1;
                    }
                    get frequencyBinCount() {
                        return this._nativeAnalyserNode.frequencyBinCount;
                    }
                    get maxDecibels() {
                        return this._nativeAnalyserNode.maxDecibels;
                    }
                    set maxDecibels(t1) {
                        const e = this._nativeAnalyserNode.maxDecibels;
                        if (this._nativeAnalyserNode.maxDecibels = t1, !(t1 > this._nativeAnalyserNode.minDecibels)) throw this._nativeAnalyserNode.maxDecibels = e, s1();
                    }
                    get minDecibels() {
                        return this._nativeAnalyserNode.minDecibels;
                    }
                    set minDecibels(t1) {
                        const e = this._nativeAnalyserNode.minDecibels;
                        if (this._nativeAnalyserNode.minDecibels = t1, !(this._nativeAnalyserNode.maxDecibels > t1)) throw this._nativeAnalyserNode.minDecibels = e, s1();
                    }
                    get smoothingTimeConstant() {
                        return this._nativeAnalyserNode.smoothingTimeConstant;
                    }
                    set smoothingTimeConstant(t1) {
                        this._nativeAnalyserNode.smoothingTimeConstant = t1;
                    }
                    getByteFrequencyData(t1) {
                        this._nativeAnalyserNode.getByteFrequencyData(t1);
                    }
                    getByteTimeDomainData(t1) {
                        this._nativeAnalyserNode.getByteTimeDomainData(t1);
                    }
                    getFloatFrequencyData(t1) {
                        this._nativeAnalyserNode.getFloatFrequencyData(t1);
                    }
                    getFloatTimeDomainData(t1) {
                        this._nativeAnalyserNode.getFloatTimeDomainData(t1);
                    }
                })(Ve, Se, R, we, ke, De), je = new WeakSet, Le = ((t1)=>null === t1 ? null : t1.hasOwnProperty("AudioBuffer") ? t1.AudioBuffer : null)(xe), ze = (We = new Uint32Array(1), (t1)=>(We[0] = t1, We[0]));
            var We;
            const Be = ((t1, e)=>(s1)=>{
                    s1.copyFromChannel = (n, i, o = 0)=>{
                        const r = t1(o), a = t1(i);
                        if (a >= s1.numberOfChannels) throw e();
                        const c = s1.length, h = s1.getChannelData(a), l = n.length;
                        for(let t1 = r < 0 ? -r : 0; t1 + r < c && t1 < l; t1 += 1)n[t1] = h[t1 + r];
                    }, s1.copyToChannel = (n, i, o = 0)=>{
                        const r = t1(o), a = t1(i);
                        if (a >= s1.numberOfChannels) throw e();
                        const c = s1.length, h = s1.getChannelData(a), l = n.length;
                        for(let t1 = r < 0 ? -r : 0; t1 + r < c && t1 < l; t1 += 1)h[t1 + r] = n[t1];
                    };
                })(ze, R), Ue = ((t1)=>(e)=>{
                    e.copyFromChannel = ((s1)=>(n, i, o = 0)=>{
                            const r = t1(o), a = t1(i);
                            if (r < e.length) return s1.call(e, n, a, r);
                        })(e.copyFromChannel), e.copyToChannel = ((s1)=>(n, i, o = 0)=>{
                            const r = t1(o), a = t1(i);
                            if (r < e.length) return s1.call(e, n, a, r);
                        })(e.copyToChannel);
                })(ze), Ge = ((t1, e, s1, n, i, o, r, a)=>{
                let c = null;
                return class h {
                    constructor(h){
                        if (null === i) throw new Error("Missing the native OfflineAudioContext constructor.");
                        const { length: l, numberOfChannels: u, sampleRate: p } = {
                            ...F,
                            ...h
                        };
                        null === c && (c = new i(1, 1, 44100));
                        const d = null !== n && e(o, o) ? new n({
                            length: l,
                            numberOfChannels: u,
                            sampleRate: p
                        }) : c.createBuffer(u, l, p);
                        if (0 === d.numberOfChannels) throw s1();
                        return "function" != typeof d.copyFromChannel ? (r(d), q(d)) : e(E, ()=>E(d)) || a(d), t1.add(d), d;
                    }
                    static [Symbol.hasInstance](e) {
                        return null !== e && "object" == typeof e && Object.getPrototypeOf(e) === h.prototype || t1.has(e);
                    }
                };
            })(je, ge, Zt, Le, Ce, ((t1)=>()=>{
                    if (null === t1) return !1;
                    try {
                        new t1({
                            length: 1,
                            sampleRate: 44100
                        });
                    } catch  {
                        return !1;
                    }
                    return !0;
                })(Le), Be, Ue), Qe = ((t1)=>(e, s1)=>{
                    const n = t1(e, {
                        channelCount: 1,
                        channelCountMode: "explicit",
                        channelInterpretation: "discrete",
                        gain: 0
                    });
                    s1.connect(n).connect(e.destination);
                    const i = ()=>{
                        s1.removeEventListener("ended", i), s1.disconnect(n), n.disconnect();
                    };
                    s1.addEventListener("ended", i);
                })(Bt), Ze = ((t1, e, s1)=>async (n, i, o)=>{
                    const r = e(n);
                    await Promise.all(Array.from(r.activeInputs).map(async ([e, n])=>{
                        const r = t1(e), a = await r.render(e, i);
                        s1(e) || a.connect(o, n);
                    }));
                })(be, L, st), Xe = ((t1)=>(e, s1, n)=>t1(s1, e, n))(Ze), Ye = ((t1, e, s1, n, i, o, r, a, c, h, l)=>(c, u)=>{
                    const p = c.createBufferSource();
                    return qt(p, u), It(p, u, "playbackRate"), Rt(p, u, "buffer"), Rt(p, u, "loop"), Rt(p, u, "loopEnd"), Rt(p, u, "loopStart"), e(s1, ()=>s1(c)) || ((t1)=>{
                        t1.start = ((e)=>{
                            let s1 = !1;
                            return (n = 0, i = 0, o)=>{
                                if (s1) throw At();
                                e.call(t1, n, i, o), s1 = !0;
                            };
                        })(t1.start);
                    })(p), e(n, ()=>n(c)) || ((t1)=>{
                        t1.start = ((e)=>(s1 = 0, n = 0, i)=>{
                                const o = t1.buffer, r = null === o ? n : Math.min(o.duration, n);
                                null !== o && r > o.duration - .5 / t1.context.sampleRate ? e.call(t1, s1, 0, 0) : e.call(t1, s1, r, i);
                            })(t1.start);
                    })(p), e(i, ()=>i(c)) || h(p, c), e(o, ()=>o(c)) || Vt(p), e(r, ()=>r(c)) || l(p, c), e(a, ()=>a(c)) || Nt(p), t1(c, p), p;
                })(Qe, ge, (t1)=>{
                const e = t1.createBufferSource();
                e.start();
                try {
                    e.start();
                } catch  {
                    return !0;
                }
                return !1;
            }, (t1)=>{
                const e = t1.createBufferSource(), s1 = t1.createBuffer(1, 1, 44100);
                e.buffer = s1;
                try {
                    e.start(0, 1);
                } catch  {
                    return !1;
                }
                return !0;
            }, (t1)=>{
                const e = t1.createBufferSource();
                e.start();
                try {
                    e.stop();
                } catch  {
                    return !1;
                }
                return !0;
            }, oe, re, ae, 0, ((t1)=>(e, s1)=>{
                    const n = s1.createBuffer(1, 1, 44100);
                    null === e.buffer && (e.buffer = n), t1(e, "buffer", (t1)=>()=>{
                            const s1 = t1.call(e);
                            return s1 === n ? null : s1;
                        }, (t1)=>(s1)=>t1.call(e, null === s1 ? n : s1));
                })(ne), le), $e = ((t1, e)=>(s1, n, i)=>(t1(n).replay(i), e(n, s1, i)))(((t1)=>(e)=>{
                    const s1 = t1(e);
                    if (null === s1.renderer) throw new Error("Missing the renderer of the given AudioParam in the audio graph.");
                    return s1.renderer;
                })(L), Ze), He = ((t1, e, s1, n, i)=>()=>{
                    const o = new WeakMap;
                    let r = null, a = null;
                    return {
                        set start (t){
                            r = t;
                        },
                        set stop (t){
                            a = t;
                        },
                        render (c, h) {
                            const l = o.get(h);
                            return void 0 !== l ? Promise.resolve(l) : (async (c, h)=>{
                                let l = s1(c);
                                const u = M(l, h);
                                if (!u) {
                                    const t1 = {
                                        buffer: l.buffer,
                                        channelCount: l.channelCount,
                                        channelCountMode: l.channelCountMode,
                                        channelInterpretation: l.channelInterpretation,
                                        loop: l.loop,
                                        loopEnd: l.loopEnd,
                                        loopStart: l.loopStart,
                                        playbackRate: l.playbackRate.value
                                    };
                                    l = e(h, t1), null !== r && l.start(...r), null !== a && l.stop(a);
                                }
                                return o.set(h, l), u ? await t1(h, c.playbackRate, l.playbackRate) : await n(h, c.playbackRate, l.playbackRate), await i(c, h, l), l;
                            })(c, h);
                        }
                    };
                })(Xe, Ye, tt, $e, Te), Je = ((t1, e, s1, n, i, r, a, c, h, l, u, p, d)=>(n, f, _, m = null, g = null)=>{
                    const v = _.value, y = new o.AutomationEventList(v), x = f ? ((t1)=>({
                            replay (e) {
                                for (const s1 of t1)if ("exponentialRampToValue" === s1.type) {
                                    const { endTime: t1, value: n } = s1;
                                    e.exponentialRampToValueAtTime(n, t1);
                                } else if ("linearRampToValue" === s1.type) {
                                    const { endTime: t1, value: n } = s1;
                                    e.linearRampToValueAtTime(n, t1);
                                } else if ("setTarget" === s1.type) {
                                    const { startTime: t1, target: n, timeConstant: i } = s1;
                                    e.setTargetAtTime(n, t1, i);
                                } else if ("setValue" === s1.type) {
                                    const { startTime: t1, value: n } = s1;
                                    e.setValueAtTime(n, t1);
                                } else {
                                    if ("setValueCurve" !== s1.type) throw new Error("Can't apply an unknown automation.");
                                    {
                                        const { duration: t1, startTime: n, values: i } = s1;
                                        e.setValueCurveAtTime(i, n, t1);
                                    }
                                }
                            }
                        }))(y) : null, w = {
                        get defaultValue () {
                            return v;
                        },
                        get maxValue () {
                            return null === m ? _.maxValue : m;
                        },
                        get minValue () {
                            return null === g ? _.minValue : g;
                        },
                        get value () {
                            return _.value;
                        },
                        set value (t){
                            _.value = t, w.setValueAtTime(t, n.context.currentTime);
                        },
                        cancelAndHoldAtTime (t1) {
                            if ("function" == typeof _.cancelAndHoldAtTime) null === x && y.flush(n.context.currentTime), y.add(i(t1)), _.cancelAndHoldAtTime(t1);
                            else {
                                const e = Array.from(y).pop();
                                null === x && y.flush(n.context.currentTime), y.add(i(t1));
                                const s1 = Array.from(y).pop();
                                _.cancelScheduledValues(t1), e !== s1 && void 0 !== s1 && ("exponentialRampToValue" === s1.type ? _.exponentialRampToValueAtTime(s1.value, s1.endTime) : "linearRampToValue" === s1.type ? _.linearRampToValueAtTime(s1.value, s1.endTime) : "setValue" === s1.type ? _.setValueAtTime(s1.value, s1.startTime) : "setValueCurve" === s1.type && _.setValueCurveAtTime(s1.values, s1.startTime, s1.duration));
                            }
                            return w;
                        },
                        cancelScheduledValues: (t1)=>(null === x && y.flush(n.context.currentTime), y.add(r(t1)), _.cancelScheduledValues(t1), w),
                        exponentialRampToValueAtTime (t1, e) {
                            if (0 === t1) throw new RangeError;
                            if (!Number.isFinite(e) || e < 0) throw new RangeError;
                            const s1 = n.context.currentTime;
                            return null === x && y.flush(s1), 0 === Array.from(y).length && (y.add(l(v, s1)), _.setValueAtTime(v, s1)), y.add(a(t1, e)), _.exponentialRampToValueAtTime(t1, e), w;
                        },
                        linearRampToValueAtTime (t1, e) {
                            const s1 = n.context.currentTime;
                            return null === x && y.flush(s1), 0 === Array.from(y).length && (y.add(l(v, s1)), _.setValueAtTime(v, s1)), y.add(c(t1, e)), _.linearRampToValueAtTime(t1, e), w;
                        },
                        setTargetAtTime: (t1, e, s1)=>(null === x && y.flush(n.context.currentTime), y.add(h(t1, e, s1)), _.setTargetAtTime(t1, e, s1), w),
                        setValueAtTime: (t1, e)=>(null === x && y.flush(n.context.currentTime), y.add(l(t1, e)), _.setValueAtTime(t1, e), w),
                        setValueCurveAtTime (t1, e, s1) {
                            const i = t1 instanceof Float32Array ? t1 : new Float32Array(t1);
                            if (null !== p && "webkitAudioContext" === p.name) {
                                const t1 = e + s1, o = n.context.sampleRate, r = Math.ceil(e * o), a = Math.floor(t1 * o), c = a - r, h = new Float32Array(c);
                                for(let t1 = 0; t1 < c; t1 += 1){
                                    const n = (i.length - 1) / s1 * ((r + t1) / o - e), a = Math.floor(n), c = Math.ceil(n);
                                    h[t1] = a === c ? i[a] : (1 - (n - a)) * i[a] + (1 - (c - n)) * i[c];
                                }
                                null === x && y.flush(n.context.currentTime), y.add(u(h, e, s1)), _.setValueCurveAtTime(h, e, s1);
                                const l = a / o;
                                l < t1 && d(w, h[h.length - 1], l), d(w, i[i.length - 1], t1);
                            } else null === x && y.flush(n.context.currentTime), y.add(u(i, e, s1)), _.setValueCurveAtTime(i, e, s1);
                            return w;
                        }
                    };
                    return s1.set(w, _), e.set(w, n), t1(w, x), w;
                })((Ke = h, (t1, e)=>{
                Ke.set(t1, {
                    activeInputs: new Set,
                    passiveInputs: new WeakMap,
                    renderer: e
                });
            }), Oe, l, 0, o.createCancelAndHoldAutomationEvent, o.createCancelScheduledValuesAutomationEvent, o.createExponentialRampToValueAutomationEvent, o.createLinearRampToValueAutomationEvent, o.createSetTargetAutomationEvent, o.createSetValueAutomationEvent, o.createSetValueCurveAutomationEvent, Ee, ie);
            var Ke;
            const ts = ((t1, e, s1, n, i, o, r, a)=>class extends t1 {
                    constructor(t1, n){
                        const a = o(t1), c = {
                            ...P,
                            ...n
                        }, h = i(a, c), l = r(a), u = l ? e() : null;
                        super(t1, !1, h, u), this._audioBufferSourceNodeRenderer = u, this._isBufferNullified = !1, this._isBufferSet = null !== c.buffer, this._nativeAudioBufferSourceNode = h, this._onended = null, this._playbackRate = s1(this, l, h.playbackRate, V, I);
                    }
                    get buffer() {
                        return this._isBufferNullified ? null : this._nativeAudioBufferSourceNode.buffer;
                    }
                    set buffer(t1) {
                        if (this._nativeAudioBufferSourceNode.buffer = t1, null !== t1) {
                            if (this._isBufferSet) throw n();
                            this._isBufferSet = !0;
                        }
                    }
                    get loop() {
                        return this._nativeAudioBufferSourceNode.loop;
                    }
                    set loop(t1) {
                        this._nativeAudioBufferSourceNode.loop = t1;
                    }
                    get loopEnd() {
                        return this._nativeAudioBufferSourceNode.loopEnd;
                    }
                    set loopEnd(t1) {
                        this._nativeAudioBufferSourceNode.loopEnd = t1;
                    }
                    get loopStart() {
                        return this._nativeAudioBufferSourceNode.loopStart;
                    }
                    set loopStart(t1) {
                        this._nativeAudioBufferSourceNode.loopStart = t1;
                    }
                    get onended() {
                        return this._onended;
                    }
                    set onended(t1) {
                        const e = "function" == typeof t1 ? a(this, t1) : null;
                        this._nativeAudioBufferSourceNode.onended = e;
                        const s1 = this._nativeAudioBufferSourceNode.onended;
                        this._onended = null !== s1 && s1 === e ? t1 : s1;
                    }
                    get playbackRate() {
                        return this._playbackRate;
                    }
                    start(t1 = 0, e = 0, s1) {
                        if (this._nativeAudioBufferSourceNode.start(t1, e, s1), null !== this._audioBufferSourceNodeRenderer && (this._audioBufferSourceNodeRenderer.start = void 0 === s1 ? [
                            t1,
                            e
                        ] : [
                            t1,
                            e,
                            s1
                        ]), "closed" !== this.context.state) {
                            k(this);
                            const t1 = ()=>{
                                this._nativeAudioBufferSourceNode.removeEventListener("ended", t1), N(this) && C(this);
                            };
                            this._nativeAudioBufferSourceNode.addEventListener("ended", t1);
                        }
                    }
                    stop(t1 = 0) {
                        this._nativeAudioBufferSourceNode.stop(t1), null !== this._audioBufferSourceNodeRenderer && (this._audioBufferSourceNodeRenderer.stop = t1);
                    }
                })(Ve, He, Je, At, Ye, ke, De, ue), es = ((t1, e, s1, n, i, o, r, a)=>class extends t1 {
                    constructor(t1, e){
                        const s1 = o(t1), n = r(s1), c = i(s1, e, n);
                        super(t1, !1, c, n ? ((t1)=>{
                            const e = new WeakMap;
                            return {
                                render (s1, n) {
                                    const i = e.get(n);
                                    return void 0 !== i ? Promise.resolve(i) : (async (s1, n)=>{
                                        const i = n.destination;
                                        return e.set(n, i), await t1(s1, n, i), i;
                                    })(s1, n);
                                }
                            };
                        })(a) : null), this._isNodeOfNativeOfflineAudioContext = n, this._nativeAudioDestinationNode = c;
                    }
                    get channelCount() {
                        return this._nativeAudioDestinationNode.channelCount;
                    }
                    set channelCount(t1) {
                        if (this._isNodeOfNativeOfflineAudioContext) throw n();
                        if (t1 > this._nativeAudioDestinationNode.maxChannelCount) throw s1();
                        this._nativeAudioDestinationNode.channelCount = t1;
                    }
                    get channelCountMode() {
                        return this._nativeAudioDestinationNode.channelCountMode;
                    }
                    set channelCountMode(t1) {
                        if (this._isNodeOfNativeOfflineAudioContext) throw n();
                        this._nativeAudioDestinationNode.channelCountMode = t1;
                    }
                    get maxChannelCount() {
                        return this._nativeAudioDestinationNode.maxChannelCount;
                    }
                })(Ve, 0, R, At, ((t1, e)=>(s1, n, i)=>{
                    const o = s1.destination;
                    if (o.channelCount !== n) try {
                        o.channelCount = n;
                    } catch  {}
                    i && "explicit" !== o.channelCountMode && (o.channelCountMode = "explicit"), 0 === o.maxChannelCount && Object.defineProperty(o, "maxChannelCount", {
                        value: n
                    });
                    const r = t1(s1, {
                        channelCount: n,
                        channelCountMode: o.channelCountMode,
                        channelInterpretation: o.channelInterpretation,
                        gain: 1
                    });
                    return e(r, "channelCount", (t1)=>()=>t1.call(r), (t1)=>(e)=>{
                            t1.call(r, e);
                            try {
                                o.channelCount = e;
                            } catch (t1) {
                                if (e > o.maxChannelCount) throw t1;
                            }
                        }), e(r, "channelCountMode", (t1)=>()=>t1.call(r), (t1)=>(e)=>{
                            t1.call(r, e), o.channelCountMode = e;
                        }), e(r, "channelInterpretation", (t1)=>()=>t1.call(r), (t1)=>(e)=>{
                            t1.call(r, e), o.channelInterpretation = e;
                        }), Object.defineProperty(r, "maxChannelCount", {
                        get: ()=>o.maxChannelCount
                    }), r.connect(o), r;
                })(Bt, ne), ke, De, Te), ss = ((t1, e, s1, n, i)=>()=>{
                    const o = new WeakMap;
                    return {
                        render (r, a) {
                            const c = o.get(a);
                            return void 0 !== c ? Promise.resolve(c) : (async (r, a)=>{
                                let c = s1(r);
                                const h = M(c, a);
                                if (!h) {
                                    const t1 = {
                                        Q: c.Q.value,
                                        channelCount: c.channelCount,
                                        channelCountMode: c.channelCountMode,
                                        channelInterpretation: c.channelInterpretation,
                                        detune: c.detune.value,
                                        frequency: c.frequency.value,
                                        gain: c.gain.value,
                                        type: c.type
                                    };
                                    c = e(a, t1);
                                }
                                return o.set(a, c), h ? (await t1(a, r.Q, c.Q), await t1(a, r.detune, c.detune), await t1(a, r.frequency, c.frequency), await t1(a, r.gain, c.gain)) : (await n(a, r.Q, c.Q), await n(a, r.detune, c.detune), await n(a, r.frequency, c.frequency), await n(a, r.gain, c.gain)), await i(r, a, c), c;
                            })(r, a);
                        }
                    };
                })(Xe, jt, tt, $e, Te), ns = ((t1)=>(e, s1)=>t1.set(e, s1))(_e), is = ((t1, e, s1, n, i, o, r, a)=>class extends t1 {
                    constructor(t1, n){
                        const c = o(t1), h = {
                            ...mt,
                            ...n
                        }, l = i(c, h), u = r(c);
                        super(t1, !1, l, u ? s1() : null), this._Q = e(this, u, l.Q, V, I), this._detune = e(this, u, l.detune, 1200 * Math.log2(V), -1200 * Math.log2(V)), this._frequency = e(this, u, l.frequency, t1.sampleRate / 2, 0), this._gain = e(this, u, l.gain, 40 * Math.log10(V), I), this._nativeBiquadFilterNode = l, a(this, 1);
                    }
                    get detune() {
                        return this._detune;
                    }
                    get frequency() {
                        return this._frequency;
                    }
                    get gain() {
                        return this._gain;
                    }
                    get Q() {
                        return this._Q;
                    }
                    get type() {
                        return this._nativeBiquadFilterNode.type;
                    }
                    set type(t1) {
                        this._nativeBiquadFilterNode.type = t1;
                    }
                    getFrequencyResponse(t1, e, s1) {
                        try {
                            this._nativeBiquadFilterNode.getFrequencyResponse(t1, e, s1);
                        } catch (t1) {
                            if (11 === t1.code) throw n();
                            throw t1;
                        }
                        if (t1.length !== e.length || e.length !== s1.length) throw n();
                    }
                })(Ve, Je, ss, Ct, jt, ke, De, ns), os = ((t1, e)=>(s1, n, i)=>{
                    const o = new Set;
                    return s1.connect = ((i)=>(r, a = 0, c = 0)=>{
                            const h = 0 === o.size;
                            if (e(r)) return i.call(s1, r, a, c), t1(o, [
                                r,
                                a,
                                c
                            ], (t1)=>t1[0] === r && t1[1] === a && t1[2] === c, !0), h && n(), r;
                            i.call(s1, r, a), t1(o, [
                                r,
                                a
                            ], (t1)=>t1[0] === r && t1[1] === a, !0), h && n();
                        })(s1.connect), s1.disconnect = ((t1)=>(n, r, a)=>{
                            const c = o.size > 0;
                            if (void 0 === n) t1.apply(s1), o.clear();
                            else if ("number" == typeof n) {
                                t1.call(s1, n);
                                for (const t1 of o)t1[1] === n && o.delete(t1);
                            } else {
                                e(n) ? t1.call(s1, n, r, a) : t1.call(s1, n, r);
                                for (const t1 of o)t1[0] !== n || void 0 !== r && t1[1] !== r || void 0 !== a && t1[2] !== a || o.delete(t1);
                            }
                            const h = 0 === o.size;
                            c && h && i();
                        })(s1.disconnect), s1;
                })(G, qe), rs = ((t1, e)=>(s1, n)=>{
                    n.channelCount = 1, n.channelCountMode = "explicit", Object.defineProperty(n, "channelCount", {
                        get: ()=>1,
                        set: ()=>{
                            throw t1();
                        }
                    }), Object.defineProperty(n, "channelCountMode", {
                        get: ()=>"explicit",
                        set: ()=>{
                            throw t1();
                        }
                    });
                    const i = s1.createBufferSource();
                    e(n, ()=>{
                        const t1 = n.numberOfInputs;
                        for(let e = 0; e < t1; e += 1)i.connect(n, 0, e);
                    }, ()=>i.disconnect(n));
                })(At, os), as = ((t1, e)=>(s1, n)=>{
                    const i = s1.createChannelMerger(n.numberOfInputs);
                    return null !== t1 && "webkitAudioContext" === t1.name && e(s1, i), qt(i, n), i;
                })(Ee, rs), cs = ((t1, e, s1)=>()=>{
                    const n = new WeakMap;
                    return {
                        render (i, o) {
                            const r = n.get(o);
                            return void 0 !== r ? Promise.resolve(r) : (async (i, o)=>{
                                let r = e(i);
                                if (!M(r, o)) {
                                    const e = {
                                        channelCount: r.channelCount,
                                        channelCountMode: r.channelCountMode,
                                        channelInterpretation: r.channelInterpretation,
                                        numberOfInputs: r.numberOfInputs
                                    };
                                    r = t1(o, e);
                                }
                                return n.set(o, r), await s1(i, o, r), r;
                            })(i, o);
                        }
                    };
                })(as, tt, Te), hs = ((t1, e, s1, n, i)=>class extends t1 {
                    constructor(t1, o){
                        const r = n(t1), a = {
                            ...gt,
                            ...o
                        };
                        super(t1, !1, s1(r, a), i(r) ? e() : null);
                    }
                })(Ve, cs, as, ke, De), ls = ((t1, e, s1)=>()=>{
                    const n = new WeakMap;
                    return {
                        render (i, o) {
                            const r = n.get(o);
                            return void 0 !== r ? Promise.resolve(r) : (async (i, o)=>{
                                let r = e(i);
                                if (!M(r, o)) {
                                    const e = {
                                        channelCount: r.channelCount,
                                        channelCountMode: r.channelCountMode,
                                        channelInterpretation: r.channelInterpretation,
                                        numberOfOutputs: r.numberOfOutputs
                                    };
                                    r = t1(o, e);
                                }
                                return n.set(o, r), await s1(i, o, r), r;
                            })(i, o);
                        }
                    };
                })(Lt, tt, Te), us = ((t1, e, s1, n, i, o)=>class extends t1 {
                    constructor(t1, o){
                        const r = n(t1), a = ((t1)=>({
                                ...t1,
                                channelCount: t1.numberOfOutputs
                            }))({
                            ...vt,
                            ...o
                        });
                        super(t1, !1, s1(r, a), i(r) ? e() : null);
                    }
                })(Ve, ls, Lt, ke, De), ps = ((t1, e, s1, n)=>(i, { offset: o, ...r })=>{
                    const a = i.createBuffer(1, 2, 44100), c = e(i, {
                        buffer: null,
                        channelCount: 2,
                        channelCountMode: "max",
                        channelInterpretation: "speakers",
                        loop: !1,
                        loopEnd: 0,
                        loopStart: 0,
                        playbackRate: 1
                    }), h = s1(i, {
                        ...r,
                        gain: o
                    }), l = a.getChannelData(0);
                    l[0] = 1, l[1] = 1, c.buffer = a, c.loop = !0;
                    const u = {
                        get bufferSize () {},
                        get channelCount () {
                            return h.channelCount;
                        },
                        set channelCount (t){
                            h.channelCount = t;
                        },
                        get channelCountMode () {
                            return h.channelCountMode;
                        },
                        set channelCountMode (t){
                            h.channelCountMode = t;
                        },
                        get channelInterpretation () {
                            return h.channelInterpretation;
                        },
                        set channelInterpretation (t){
                            h.channelInterpretation = t;
                        },
                        get context () {
                            return h.context;
                        },
                        get inputs () {
                            return [];
                        },
                        get numberOfInputs () {
                            return c.numberOfInputs;
                        },
                        get numberOfOutputs () {
                            return h.numberOfOutputs;
                        },
                        get offset () {
                            return h.gain;
                        },
                        get onended () {
                            return c.onended;
                        },
                        set onended (t){
                            c.onended = t;
                        },
                        addEventListener: (...t1)=>c.addEventListener(t1[0], t1[1], t1[2]),
                        dispatchEvent: (...t1)=>c.dispatchEvent(t1[0]),
                        removeEventListener: (...t1)=>c.removeEventListener(t1[0], t1[1], t1[2]),
                        start (t1 = 0) {
                            c.start.call(c, t1);
                        },
                        stop (t1 = 0) {
                            c.stop.call(c, t1);
                        }
                    };
                    return t1(i, c), n(zt(u, h), ()=>c.connect(h), ()=>c.disconnect(h));
                })(Qe, Ye, Bt, os), ds = ((t1, e, s1, n, i)=>(o, r)=>{
                    if (void 0 === o.createConstantSource) return s1(o, r);
                    const a = o.createConstantSource();
                    return qt(a, r), It(a, r, "offset"), e(n, ()=>n(o)) || Vt(a), e(i, ()=>i(o)) || Nt(a), t1(o, a), a;
                })(Qe, ge, ps, oe, ae), fs = ((t1, e, s1, n, i)=>()=>{
                    const o = new WeakMap;
                    let r = null, a = null;
                    return {
                        set start (t){
                            r = t;
                        },
                        set stop (t){
                            a = t;
                        },
                        render (c, h) {
                            const l = o.get(h);
                            return void 0 !== l ? Promise.resolve(l) : (async (c, h)=>{
                                let l = s1(c);
                                const u = M(l, h);
                                if (!u) {
                                    const t1 = {
                                        channelCount: l.channelCount,
                                        channelCountMode: l.channelCountMode,
                                        channelInterpretation: l.channelInterpretation,
                                        offset: l.offset.value
                                    };
                                    l = e(h, t1), null !== r && l.start(r), null !== a && l.stop(a);
                                }
                                return o.set(h, l), u ? await t1(h, c.offset, l.offset) : await n(h, c.offset, l.offset), await i(c, h, l), l;
                            })(c, h);
                        }
                    };
                })(Xe, ds, tt, $e, Te), _s = ((t1, e, s1, n, i, o, r)=>class extends t1 {
                    constructor(t1, r){
                        const a = i(t1), c = {
                            ...yt,
                            ...r
                        }, h = n(a, c), l = o(a), u = l ? s1() : null;
                        super(t1, !1, h, u), this._constantSourceNodeRenderer = u, this._nativeConstantSourceNode = h, this._offset = e(this, l, h.offset, V, I), this._onended = null;
                    }
                    get offset() {
                        return this._offset;
                    }
                    get onended() {
                        return this._onended;
                    }
                    set onended(t1) {
                        const e = "function" == typeof t1 ? r(this, t1) : null;
                        this._nativeConstantSourceNode.onended = e;
                        const s1 = this._nativeConstantSourceNode.onended;
                        this._onended = null !== s1 && s1 === e ? t1 : s1;
                    }
                    start(t1 = 0) {
                        if (this._nativeConstantSourceNode.start(t1), null !== this._constantSourceNodeRenderer && (this._constantSourceNodeRenderer.start = t1), "closed" !== this.context.state) {
                            k(this);
                            const t1 = ()=>{
                                this._nativeConstantSourceNode.removeEventListener("ended", t1), N(this) && C(this);
                            };
                            this._nativeConstantSourceNode.addEventListener("ended", t1);
                        }
                    }
                    stop(t1 = 0) {
                        this._nativeConstantSourceNode.stop(t1), null !== this._constantSourceNodeRenderer && (this._constantSourceNodeRenderer.stop = t1);
                    }
                })(Ve, Je, fs, ds, ke, De, ue), ms = ((t1, e)=>(s1, n)=>{
                    const i = s1.createConvolver();
                    if (qt(i, n), n.disableNormalization === i.normalize && (i.normalize = !n.disableNormalization), Rt(i, n, "buffer"), n.channelCount > 2) throw t1();
                    if (e(i, "channelCount", (t1)=>()=>t1.call(i), (e)=>(s1)=>{
                            if (s1 > 2) throw t1();
                            return e.call(i, s1);
                        }), "max" === n.channelCountMode) throw t1();
                    return e(i, "channelCountMode", (t1)=>()=>t1.call(i), (e)=>(s1)=>{
                            if ("max" === s1) throw t1();
                            return e.call(i, s1);
                        }), i;
                })(Zt, ne), gs = ((t1, e, s1)=>()=>{
                    const n = new WeakMap;
                    return {
                        render (i, o) {
                            const r = n.get(o);
                            return void 0 !== r ? Promise.resolve(r) : (async (i, o)=>{
                                let r = e(i);
                                if (!M(r, o)) {
                                    const e = {
                                        buffer: r.buffer,
                                        channelCount: r.channelCount,
                                        channelCountMode: r.channelCountMode,
                                        channelInterpretation: r.channelInterpretation,
                                        disableNormalization: !r.normalize
                                    };
                                    r = t1(o, e);
                                }
                                return n.set(o, r), X(r) ? await s1(i, o, r.inputs[0]) : await s1(i, o, r), r;
                            })(i, o);
                        }
                    };
                })(ms, tt, Te), vs = ((t1, e, s1, n, i, o)=>class extends t1 {
                    constructor(t1, r){
                        const a = n(t1), c = {
                            ...xt,
                            ...r
                        }, h = s1(a, c);
                        super(t1, !1, h, i(a) ? e() : null), this._isBufferNullified = !1, this._nativeConvolverNode = h, null !== c.buffer && o(this, c.buffer.duration);
                    }
                    get buffer() {
                        return this._isBufferNullified ? null : this._nativeConvolverNode.buffer;
                    }
                    set buffer(t1) {
                        if (this._nativeConvolverNode.buffer = t1, null === t1 && null !== this._nativeConvolverNode.buffer) {
                            const t1 = this._nativeConvolverNode.context;
                            this._nativeConvolverNode.buffer = t1.createBuffer(1, 1, t1.sampleRate), this._isBufferNullified = !0, o(this, 0);
                        } else this._isBufferNullified = !1, o(this, null === this._nativeConvolverNode.buffer ? 0 : this._nativeConvolverNode.buffer.duration);
                    }
                    get normalize() {
                        return this._nativeConvolverNode.normalize;
                    }
                    set normalize(t1) {
                        this._nativeConvolverNode.normalize = t1;
                    }
                })(Ve, gs, ms, ke, De, ns), ys = ((t1, e, s1, n, i)=>(o)=>{
                    const r = new WeakMap;
                    return {
                        render (a, c) {
                            const h = r.get(c);
                            return void 0 !== h ? Promise.resolve(h) : (async (a, c)=>{
                                let h = s1(a);
                                const l = M(h, c);
                                if (!l) {
                                    const t1 = {
                                        channelCount: h.channelCount,
                                        channelCountMode: h.channelCountMode,
                                        channelInterpretation: h.channelInterpretation,
                                        delayTime: h.delayTime.value,
                                        maxDelayTime: o
                                    };
                                    h = e(c, t1);
                                }
                                return r.set(c, h), l ? await t1(c, a.delayTime, h.delayTime) : await n(c, a.delayTime, h.delayTime), await i(a, c, h), h;
                            })(a, c);
                        }
                    };
                })(Xe, Wt, tt, $e, Te), xs = ((t1, e, s1, n, i, o, r)=>class extends t1 {
                    constructor(t1, a){
                        const c = i(t1), h = {
                            ...bt,
                            ...a
                        }, l = n(c, h), u = o(c);
                        super(t1, !1, l, u ? s1(h.maxDelayTime) : null), this._delayTime = e(this, u, l.delayTime), r(this, h.maxDelayTime);
                    }
                    get delayTime() {
                        return this._delayTime;
                    }
                })(Ve, Je, ys, Wt, ke, De, ns), ws = ((t1)=>(e, s1)=>{
                    const n = e.createDynamicsCompressor();
                    if (qt(n, s1), s1.channelCount > 2) throw t1();
                    if ("max" === s1.channelCountMode) throw t1();
                    return It(n, s1, "attack"), It(n, s1, "knee"), It(n, s1, "ratio"), It(n, s1, "release"), It(n, s1, "threshold"), n;
                })(Zt), bs = ((t1, e, s1, n, i)=>()=>{
                    const o = new WeakMap;
                    return {
                        render (r, a) {
                            const c = o.get(a);
                            return void 0 !== c ? Promise.resolve(c) : (async (r, a)=>{
                                let c = s1(r);
                                const h = M(c, a);
                                if (!h) {
                                    const t1 = {
                                        attack: c.attack.value,
                                        channelCount: c.channelCount,
                                        channelCountMode: c.channelCountMode,
                                        channelInterpretation: c.channelInterpretation,
                                        knee: c.knee.value,
                                        ratio: c.ratio.value,
                                        release: c.release.value,
                                        threshold: c.threshold.value
                                    };
                                    c = e(a, t1);
                                }
                                return o.set(a, c), h ? (await t1(a, r.attack, c.attack), await t1(a, r.knee, c.knee), await t1(a, r.ratio, c.ratio), await t1(a, r.release, c.release), await t1(a, r.threshold, c.threshold)) : (await n(a, r.attack, c.attack), await n(a, r.knee, c.knee), await n(a, r.ratio, c.ratio), await n(a, r.release, c.release), await n(a, r.threshold, c.threshold)), await i(r, a, c), c;
                            })(r, a);
                        }
                    };
                })(Xe, ws, tt, $e, Te), Ts = ((t1, e, s1, n, i, o, r, a)=>class extends t1 {
                    constructor(t1, i){
                        const c = o(t1), h = {
                            ...St,
                            ...i
                        }, l = n(c, h), u = r(c);
                        super(t1, !1, l, u ? s1() : null), this._attack = e(this, u, l.attack), this._knee = e(this, u, l.knee), this._nativeDynamicsCompressorNode = l, this._ratio = e(this, u, l.ratio), this._release = e(this, u, l.release), this._threshold = e(this, u, l.threshold), a(this, .006);
                    }
                    get attack() {
                        return this._attack;
                    }
                    get channelCount() {
                        return this._nativeDynamicsCompressorNode.channelCount;
                    }
                    set channelCount(t1) {
                        const e = this._nativeDynamicsCompressorNode.channelCount;
                        if (this._nativeDynamicsCompressorNode.channelCount = t1, t1 > 2) throw this._nativeDynamicsCompressorNode.channelCount = e, i();
                    }
                    get channelCountMode() {
                        return this._nativeDynamicsCompressorNode.channelCountMode;
                    }
                    set channelCountMode(t1) {
                        const e = this._nativeDynamicsCompressorNode.channelCountMode;
                        if (this._nativeDynamicsCompressorNode.channelCountMode = t1, "max" === t1) throw this._nativeDynamicsCompressorNode.channelCountMode = e, i();
                    }
                    get knee() {
                        return this._knee;
                    }
                    get ratio() {
                        return this._ratio;
                    }
                    get reduction() {
                        return "number" == typeof this._nativeDynamicsCompressorNode.reduction.value ? this._nativeDynamicsCompressorNode.reduction.value : this._nativeDynamicsCompressorNode.reduction;
                    }
                    get release() {
                        return this._release;
                    }
                    get threshold() {
                        return this._threshold;
                    }
                })(Ve, Je, bs, ws, Zt, ke, De, ns), Ss = ((t1, e, s1, n, i)=>()=>{
                    const o = new WeakMap;
                    return {
                        render (r, a) {
                            const c = o.get(a);
                            return void 0 !== c ? Promise.resolve(c) : (async (r, a)=>{
                                let c = s1(r);
                                const h = M(c, a);
                                if (!h) {
                                    const t1 = {
                                        channelCount: c.channelCount,
                                        channelCountMode: c.channelCountMode,
                                        channelInterpretation: c.channelInterpretation,
                                        gain: c.gain.value
                                    };
                                    c = e(a, t1);
                                }
                                return o.set(a, c), h ? await t1(a, r.gain, c.gain) : await n(a, r.gain, c.gain), await i(r, a, c), c;
                            })(r, a);
                        }
                    };
                })(Xe, Bt, tt, $e, Te), ks = ((t1, e, s1, n, i, o)=>class extends t1 {
                    constructor(t1, r){
                        const a = i(t1), c = {
                            ...kt,
                            ...r
                        }, h = n(a, c), l = o(a);
                        super(t1, !1, h, l ? s1() : null), this._gain = e(this, l, h.gain, V, I);
                    }
                    get gain() {
                        return this._gain;
                    }
                })(Ve, Je, Ss, Bt, ke, De), As = ((t1, e, s1, n)=>(i, o, { channelCount: r, channelCountMode: a, channelInterpretation: c, feedback: h, feedforward: l })=>{
                    const u = Pt(o, i.sampleRate), p = h instanceof Float64Array ? h : new Float64Array(h), d = l instanceof Float64Array ? l : new Float64Array(l), f = p.length, _ = d.length, m = Math.min(f, _);
                    if (0 === f || f > 20) throw n();
                    if (0 === p[0]) throw e();
                    if (0 === _ || _ > 20) throw n();
                    if (0 === d[0]) throw e();
                    if (1 !== p[0]) {
                        for(let t1 = 0; t1 < _; t1 += 1)d[t1] /= p[0];
                        for(let t1 = 1; t1 < f; t1 += 1)p[t1] /= p[0];
                    }
                    const g = s1(i, u, r, r);
                    g.channelCount = r, g.channelCountMode = a, g.channelInterpretation = c;
                    const v = [], y = [], x = [];
                    for(let t1 = 0; t1 < r; t1 += 1){
                        v.push(0);
                        const t1 = new Float32Array(32), e = new Float32Array(32);
                        t1.fill(0), e.fill(0), y.push(t1), x.push(e);
                    }
                    g.onaudioprocess = (t1)=>{
                        const e = t1.inputBuffer, s1 = t1.outputBuffer, n = e.numberOfChannels;
                        for(let t1 = 0; t1 < n; t1 += 1){
                            const n = e.getChannelData(t1), i = s1.getChannelData(t1);
                            v[t1] = Ot(p, f, d, _, m, y[t1], x[t1], v[t1], 32, n, i);
                        }
                    };
                    const w = i.sampleRate / 2;
                    return zt({
                        get bufferSize () {
                            return u;
                        },
                        get channelCount () {
                            return g.channelCount;
                        },
                        set channelCount (t){
                            g.channelCount = t;
                        },
                        get channelCountMode () {
                            return g.channelCountMode;
                        },
                        set channelCountMode (t){
                            g.channelCountMode = t;
                        },
                        get channelInterpretation () {
                            return g.channelInterpretation;
                        },
                        set channelInterpretation (t){
                            g.channelInterpretation = t;
                        },
                        get context () {
                            return g.context;
                        },
                        get inputs () {
                            return [
                                g
                            ];
                        },
                        get numberOfInputs () {
                            return g.numberOfInputs;
                        },
                        get numberOfOutputs () {
                            return g.numberOfOutputs;
                        },
                        addEventListener: (...t1)=>g.addEventListener(t1[0], t1[1], t1[2]),
                        dispatchEvent: (...t1)=>g.dispatchEvent(t1[0]),
                        getFrequencyResponse (e, s1, n) {
                            if (e.length !== s1.length || s1.length !== n.length) throw t1();
                            const i = e.length;
                            for(let t1 = 0; t1 < i; t1 += 1){
                                const i = -Math.PI * (e[t1] / w), o = [
                                    Math.cos(i),
                                    Math.sin(i)
                                ], r = Ut(Gt(d, o), Gt(p, o));
                                s1[t1] = Math.sqrt(r[0] * r[0] + r[1] * r[1]), n[t1] = Math.atan2(r[1], r[0]);
                            }
                        },
                        removeEventListener: (...t1)=>g.removeEventListener(t1[0], t1[1], t1[2])
                    }, g);
                })(Ct, At, Qt, Zt), Cs = ((t1, e, s1, n)=>(i)=>t1(Et, ()=>Et(i)) ? Promise.resolve(t1(n, n)).then((t1)=>{
                        if (!t1) {
                            const t1 = s1(i, 512, 0, 1);
                            i.oncomplete = ()=>{
                                t1.onaudioprocess = null, t1.disconnect();
                            }, t1.onaudioprocess = ()=>i.currentTime, t1.connect(i.destination);
                        }
                        return i.startRendering();
                    }) : new Promise((t1)=>{
                        const s1 = e(i, {
                            channelCount: 1,
                            channelCountMode: "explicit",
                            channelInterpretation: "discrete",
                            gain: 0
                        });
                        i.oncomplete = (e)=>{
                            s1.disconnect(), t1(e.renderedBuffer);
                        }, s1.connect(i.destination), i.startRendering();
                    }))(ge, Bt, Qt, ((t1, e)=>()=>{
                    if (null === e) return Promise.resolve(!1);
                    const s1 = new e(1, 1, 44100), n = t1(s1, {
                        channelCount: 1,
                        channelCountMode: "explicit",
                        channelInterpretation: "discrete",
                        gain: 0
                    });
                    return new Promise((t1)=>{
                        s1.oncomplete = ()=>{
                            n.disconnect(), t1(0 !== s1.currentTime);
                        }, s1.startRendering();
                    });
                })(Bt, Ce)), Ds = ((t1, e, s1, n, i)=>(o, r)=>{
                    const a = new WeakMap;
                    let c = null;
                    return {
                        render (h, l) {
                            const u = a.get(l);
                            return void 0 !== u ? Promise.resolve(u) : (async (h, l)=>{
                                let u = null, p = e(h);
                                const d = M(p, l);
                                if (void 0 === l.createIIRFilter ? u = t1(l, {
                                    buffer: null,
                                    channelCount: 2,
                                    channelCountMode: "max",
                                    channelInterpretation: "speakers",
                                    loop: !1,
                                    loopEnd: 0,
                                    loopStart: 0,
                                    playbackRate: 1
                                }) : d || (p = l.createIIRFilter(r, o)), a.set(l, null === u ? p : u), null !== u) {
                                    if (null === c) {
                                        if (null === s1) throw new Error("Missing the native OfflineAudioContext constructor.");
                                        const t1 = new s1(h.context.destination.channelCount, h.context.length, l.sampleRate);
                                        c = (async ()=>(await n(h, t1, t1.destination), ((t1, e, s1, n)=>{
                                                const i = s1 instanceof Float64Array ? s1 : new Float64Array(s1), o = n instanceof Float64Array ? n : new Float64Array(n), r = i.length, a = o.length, c = Math.min(r, a);
                                                if (1 !== i[0]) {
                                                    for(let t1 = 0; t1 < r; t1 += 1)o[t1] /= i[0];
                                                    for(let t1 = 1; t1 < a; t1 += 1)i[t1] /= i[0];
                                                }
                                                const h = new Float32Array(32), l = new Float32Array(32), u = e.createBuffer(t1.numberOfChannels, t1.length, t1.sampleRate), p = t1.numberOfChannels;
                                                for(let e = 0; e < p; e += 1){
                                                    const s1 = t1.getChannelData(e), n = u.getChannelData(e);
                                                    h.fill(0), l.fill(0), Ot(i, r, o, a, c, h, l, 0, 32, s1, n);
                                                }
                                                return u;
                                            })(await i(t1), l, o, r)))();
                                    }
                                    const t1 = await c;
                                    return u.buffer = t1, u.start(0), u;
                                }
                                return await n(h, l, p), p;
                            })(h, l);
                        }
                    };
                })(Ye, tt, Ce, Te, Cs), Os = ((t1)=>(e, s1, n)=>{
                    if (void 0 === e.createIIRFilter) return t1(e, s1, n);
                    const i = e.createIIRFilter(n.feedforward, n.feedback);
                    return qt(i, n), i;
                })(As), Ms = ((t1, e, s1, n, i, o)=>class extends t1 {
                    constructor(t1, r){
                        const a = n(t1), c = i(a), h = {
                            ...Dt,
                            ...r
                        }, l = e(a, c ? null : t1.baseLatency, h);
                        super(t1, !1, l, c ? s1(h.feedback, h.feedforward) : null), ((t1)=>{
                            var e;
                            t1.getFrequencyResponse = (e = t1.getFrequencyResponse, (s1, n, i)=>{
                                if (s1.length !== n.length || n.length !== i.length) throw Ct();
                                return e.call(t1, s1, n, i);
                            });
                        })(l), this._nativeIIRFilterNode = l, o(this, 1);
                    }
                    getFrequencyResponse(t1, e, s1) {
                        return this._nativeIIRFilterNode.getFrequencyResponse(t1, e, s1);
                    }
                })(Ve, Os, Ds, ke, De, ns), Es = ((t1, e, s1, n, i, o, r, a)=>(c, h)=>{
                    const l = h.listener, { forwardX: u, forwardY: p, forwardZ: d, positionX: f, positionY: _, positionZ: m, upX: g, upY: v, upZ: y } = void 0 === l.forwardX ? (()=>{
                        const u = new Float32Array(1), p = e(h, {
                            channelCount: 1,
                            channelCountMode: "explicit",
                            channelInterpretation: "speakers",
                            numberOfInputs: 9
                        }), d = r(h);
                        let f = !1, _ = [
                            0,
                            0,
                            -1,
                            0,
                            1,
                            0
                        ], m = [
                            0,
                            0,
                            0
                        ];
                        const g = ()=>{
                            if (f) return;
                            f = !0;
                            const t1 = n(h, 256, 9, 0);
                            t1.onaudioprocess = ({ inputBuffer: t1 })=>{
                                const e = [
                                    o(t1, u, 0),
                                    o(t1, u, 1),
                                    o(t1, u, 2),
                                    o(t1, u, 3),
                                    o(t1, u, 4),
                                    o(t1, u, 5)
                                ];
                                e.some((t1, e)=>t1 !== _[e]) && (l.setOrientation(...e), _ = e);
                                const s1 = [
                                    o(t1, u, 6),
                                    o(t1, u, 7),
                                    o(t1, u, 8)
                                ];
                                s1.some((t1, e)=>t1 !== m[e]) && (l.setPosition(...s1), m = s1);
                            }, p.connect(t1);
                        }, v = (t1)=>(e)=>{
                                e !== _[t1] && (_[t1] = e, l.setOrientation(..._));
                            }, y = (t1)=>(e)=>{
                                e !== m[t1] && (m[t1] = e, l.setPosition(...m));
                            }, x = (e, n, o)=>{
                            const r = s1(h, {
                                channelCount: 1,
                                channelCountMode: "explicit",
                                channelInterpretation: "discrete",
                                offset: n
                            });
                            r.connect(p, 0, e), r.start(), Object.defineProperty(r.offset, "defaultValue", {
                                get: ()=>n
                            });
                            const l = t1({
                                context: c
                            }, d, r.offset, V, I);
                            var u, f, _, m, v, y, x;
                            return a(l, "value", (t1)=>()=>t1.call(l), (t1)=>(e)=>{
                                    try {
                                        t1.call(l, e);
                                    } catch (t1) {
                                        if (9 !== t1.code) throw t1;
                                    }
                                    g(), d && o(e);
                                }), l.cancelAndHoldAtTime = (u = l.cancelAndHoldAtTime, d ? ()=>{
                                throw i();
                            } : (...t1)=>{
                                const e = u.apply(l, t1);
                                return g(), e;
                            }), l.cancelScheduledValues = (f = l.cancelScheduledValues, d ? ()=>{
                                throw i();
                            } : (...t1)=>{
                                const e = f.apply(l, t1);
                                return g(), e;
                            }), l.exponentialRampToValueAtTime = (_ = l.exponentialRampToValueAtTime, d ? ()=>{
                                throw i();
                            } : (...t1)=>{
                                const e = _.apply(l, t1);
                                return g(), e;
                            }), l.linearRampToValueAtTime = (m = l.linearRampToValueAtTime, d ? ()=>{
                                throw i();
                            } : (...t1)=>{
                                const e = m.apply(l, t1);
                                return g(), e;
                            }), l.setTargetAtTime = (v = l.setTargetAtTime, d ? ()=>{
                                throw i();
                            } : (...t1)=>{
                                const e = v.apply(l, t1);
                                return g(), e;
                            }), l.setValueAtTime = (y = l.setValueAtTime, d ? ()=>{
                                throw i();
                            } : (...t1)=>{
                                const e = y.apply(l, t1);
                                return g(), e;
                            }), l.setValueCurveAtTime = (x = l.setValueCurveAtTime, d ? ()=>{
                                throw i();
                            } : (...t1)=>{
                                const e = x.apply(l, t1);
                                return g(), e;
                            }), l;
                        };
                        return {
                            forwardX: x(0, 0, v(0)),
                            forwardY: x(1, 0, v(1)),
                            forwardZ: x(2, -1, v(2)),
                            positionX: x(6, 0, y(0)),
                            positionY: x(7, 0, y(1)),
                            positionZ: x(8, 0, y(2)),
                            upX: x(3, 0, v(3)),
                            upY: x(4, 1, v(4)),
                            upZ: x(5, 0, v(5))
                        };
                    })() : l;
                    return {
                        get forwardX () {
                            return u;
                        },
                        get forwardY () {
                            return p;
                        },
                        get forwardZ () {
                            return d;
                        },
                        get positionX () {
                            return f;
                        },
                        get positionY () {
                            return _;
                        },
                        get positionZ () {
                            return m;
                        },
                        get upX () {
                            return g;
                        },
                        get upY () {
                            return v;
                        },
                        get upZ () {
                            return y;
                        }
                    };
                })(Je, as, ds, Qt, Zt, ee, De, ne), Rs = new WeakMap, qs = ((t1, e, s1, n, i, o)=>class extends s1 {
                    constructor(s1, o){
                        super(s1), this._nativeContext = s1, u.set(this, s1), n(s1) && i.set(s1, new Set), this._destination = new t1(this, o), this._listener = e(this, s1), this._onstatechange = null;
                    }
                    get currentTime() {
                        return this._nativeContext.currentTime;
                    }
                    get destination() {
                        return this._destination;
                    }
                    get listener() {
                        return this._listener;
                    }
                    get onstatechange() {
                        return this._onstatechange;
                    }
                    set onstatechange(t1) {
                        const e = "function" == typeof t1 ? o(this, t1) : null;
                        this._nativeContext.onstatechange = e;
                        const s1 = this._nativeContext.onstatechange;
                        this._onstatechange = null !== s1 && s1 === e ? t1 : s1;
                    }
                    get sampleRate() {
                        return this._nativeContext.sampleRate;
                    }
                    get state() {
                        return this._nativeContext.state;
                    }
                })(es, Es, Me, De, Rs, ue), Fs = ((t1, e, s1, n, i, o)=>(r, a)=>{
                    const c = r.createOscillator();
                    return qt(c, a), It(c, a, "detune"), It(c, a, "frequency"), void 0 !== a.periodicWave ? c.setPeriodicWave(a.periodicWave) : Rt(c, a, "type"), e(s1, ()=>s1(r)) || Vt(c), e(n, ()=>n(r)) || o(c, r), e(i, ()=>i(r)) || Nt(c), t1(r, c), c;
                })(Qe, ge, oe, re, ae, le), Is = ((t1, e, s1, n, i)=>()=>{
                    const o = new WeakMap;
                    let r = null, a = null, c = null;
                    return {
                        set periodicWave (t){
                            r = t;
                        },
                        set start (t){
                            a = t;
                        },
                        set stop (t){
                            c = t;
                        },
                        render (h, l) {
                            const u = o.get(l);
                            return void 0 !== u ? Promise.resolve(u) : (async (h, l)=>{
                                let u = s1(h);
                                const p = M(u, l);
                                if (!p) {
                                    const t1 = {
                                        channelCount: u.channelCount,
                                        channelCountMode: u.channelCountMode,
                                        channelInterpretation: u.channelInterpretation,
                                        detune: u.detune.value,
                                        frequency: u.frequency.value,
                                        periodicWave: null === r ? void 0 : r,
                                        type: u.type
                                    };
                                    u = e(l, t1), null !== a && u.start(a), null !== c && u.stop(c);
                                }
                                return o.set(l, u), p ? (await t1(l, h.detune, u.detune), await t1(l, h.frequency, u.frequency)) : (await n(l, h.detune, u.detune), await n(l, h.frequency, u.frequency)), await i(h, l, u), u;
                            })(h, l);
                        }
                    };
                })(Xe, Fs, tt, $e, Te), Vs = ((t1, e, s1, n, i, o, r)=>class extends t1 {
                    constructor(t1, r){
                        const a = i(t1), c = {
                            ...Yt,
                            ...r
                        }, h = s1(a, c), l = o(a), u = l ? n() : null, p = t1.sampleRate / 2;
                        super(t1, !1, h, u), this._detune = e(this, l, h.detune, 153600, -153600), this._frequency = e(this, l, h.frequency, p, -p), this._nativeOscillatorNode = h, this._onended = null, this._oscillatorNodeRenderer = u, null !== this._oscillatorNodeRenderer && void 0 !== c.periodicWave && (this._oscillatorNodeRenderer.periodicWave = c.periodicWave);
                    }
                    get detune() {
                        return this._detune;
                    }
                    get frequency() {
                        return this._frequency;
                    }
                    get onended() {
                        return this._onended;
                    }
                    set onended(t1) {
                        const e = "function" == typeof t1 ? r(this, t1) : null;
                        this._nativeOscillatorNode.onended = e;
                        const s1 = this._nativeOscillatorNode.onended;
                        this._onended = null !== s1 && s1 === e ? t1 : s1;
                    }
                    get type() {
                        return this._nativeOscillatorNode.type;
                    }
                    set type(t1) {
                        this._nativeOscillatorNode.type = t1, null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.periodicWave = null);
                    }
                    setPeriodicWave(t1) {
                        this._nativeOscillatorNode.setPeriodicWave(t1), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.periodicWave = t1);
                    }
                    start(t1 = 0) {
                        if (this._nativeOscillatorNode.start(t1), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.start = t1), "closed" !== this.context.state) {
                            k(this);
                            const t1 = ()=>{
                                this._nativeOscillatorNode.removeEventListener("ended", t1), N(this) && C(this);
                            };
                            this._nativeOscillatorNode.addEventListener("ended", t1);
                        }
                    }
                    stop(t1 = 0) {
                        this._nativeOscillatorNode.stop(t1), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.stop = t1);
                    }
                })(Ve, Je, Fs, Is, ke, De, ue), Ns = ((t1)=>(e, s1)=>{
                    const n = t1(e, {
                        buffer: null,
                        channelCount: 2,
                        channelCountMode: "max",
                        channelInterpretation: "speakers",
                        loop: !1,
                        loopEnd: 0,
                        loopStart: 0,
                        playbackRate: 1
                    }), i = e.createBuffer(1, 2, 44100);
                    return n.buffer = i, n.loop = !0, n.connect(s1), n.start(), ()=>{
                        n.stop(), n.disconnect(s1);
                    };
                })(Ye), Ps = ((t1, e, s1, n, i)=>(o, { curve: r, oversample: a, ...c })=>{
                    const h = o.createWaveShaper(), l = o.createWaveShaper();
                    qt(h, c), qt(l, c);
                    const u = s1(o, {
                        ...c,
                        gain: 1
                    }), p = s1(o, {
                        ...c,
                        gain: -1
                    }), d = s1(o, {
                        ...c,
                        gain: 1
                    }), f = s1(o, {
                        ...c,
                        gain: -1
                    });
                    let _ = null, m = !1, g = null;
                    const v = {
                        get bufferSize () {},
                        get channelCount () {
                            return h.channelCount;
                        },
                        set channelCount (t){
                            u.channelCount = t, p.channelCount = t, h.channelCount = t, d.channelCount = t, l.channelCount = t, f.channelCount = t;
                        },
                        get channelCountMode () {
                            return h.channelCountMode;
                        },
                        set channelCountMode (t){
                            u.channelCountMode = t, p.channelCountMode = t, h.channelCountMode = t, d.channelCountMode = t, l.channelCountMode = t, f.channelCountMode = t;
                        },
                        get channelInterpretation () {
                            return h.channelInterpretation;
                        },
                        set channelInterpretation (t){
                            u.channelInterpretation = t, p.channelInterpretation = t, h.channelInterpretation = t, d.channelInterpretation = t, l.channelInterpretation = t, f.channelInterpretation = t;
                        },
                        get context () {
                            return h.context;
                        },
                        get curve () {
                            return g;
                        },
                        set curve (s){
                            if (null !== s && s.length < 2) throw e();
                            if (null === s) h.curve = s, l.curve = s;
                            else {
                                const t1 = s.length, e = new Float32Array(t1 + 2 - t1 % 2), n = new Float32Array(t1 + 2 - t1 % 2);
                                e[0] = s[0], n[0] = -s[t1 - 1];
                                const i = Math.ceil((t1 + 1) / 2), o = (t1 + 1) / 2 - 1;
                                for(let r = 1; r < i; r += 1){
                                    const a = r / i * o, c = Math.floor(a), h = Math.ceil(a);
                                    e[r] = c === h ? s[c] : (1 - (a - c)) * s[c] + (1 - (h - a)) * s[h], n[r] = c === h ? -s[t1 - 1 - c] : -(1 - (a - c)) * s[t1 - 1 - c] - (1 - (h - a)) * s[t1 - 1 - h];
                                }
                                e[i] = t1 % 2 == 1 ? s[i - 1] : (s[i - 2] + s[i - 1]) / 2, h.curve = e, l.curve = n;
                            }
                            g = s, m && (n(g) && null === _ ? _ = t1(o, u) : null !== _ && (_(), _ = null));
                        },
                        get inputs () {
                            return [
                                u
                            ];
                        },
                        get numberOfInputs () {
                            return h.numberOfInputs;
                        },
                        get numberOfOutputs () {
                            return h.numberOfOutputs;
                        },
                        get oversample () {
                            return h.oversample;
                        },
                        set oversample (t){
                            h.oversample = t, l.oversample = t;
                        },
                        addEventListener: (...t1)=>u.addEventListener(t1[0], t1[1], t1[2]),
                        dispatchEvent: (...t1)=>u.dispatchEvent(t1[0]),
                        removeEventListener: (...t1)=>u.removeEventListener(t1[0], t1[1], t1[2])
                    };
                    return null !== r && (v.curve = r instanceof Float32Array ? r : new Float32Array(r)), a !== v.oversample && (v.oversample = a), i(zt(v, d), ()=>{
                        u.connect(h).connect(d), u.connect(p).connect(l).connect(f).connect(d), m = !0, n(g) && (_ = t1(o, u));
                    }, ()=>{
                        u.disconnect(h), h.disconnect(d), u.disconnect(p), p.disconnect(l), l.disconnect(f), f.disconnect(d), m = !1, null !== _ && (_(), _ = null);
                    });
                })(Ns, At, Bt, se, os), js = ((t1, e, s1, n, i, o, r)=>(a, c)=>{
                    const h = a.createWaveShaper();
                    if (null !== o && "webkitAudioContext" === o.name && void 0 === a.createGain().gain.automationRate) return s1(a, c);
                    qt(h, c);
                    const l = null === c.curve || c.curve instanceof Float32Array ? c.curve : new Float32Array(c.curve);
                    if (null !== l && l.length < 2) throw e();
                    Rt(h, {
                        curve: l
                    }, "curve"), Rt(h, c, "oversample");
                    let u = null, p = !1;
                    return r(h, "curve", (t1)=>()=>t1.call(h), (e)=>(s1)=>(e.call(h, s1), p && (n(s1) && null === u ? u = t1(a, h) : n(s1) || null === u || (u(), u = null)), s1)), i(h, ()=>{
                        p = !0, n(h.curve) && (u = t1(a, h));
                    }, ()=>{
                        p = !1, null !== u && (u(), u = null);
                    });
                })(Ns, At, Ps, se, os, Ee, ne), Ls = ((t1, e, s1, n, i, o, r, a, c, h)=>(l, { coneInnerAngle: u, coneOuterAngle: p, coneOuterGain: d, distanceModel: f, maxDistance: _, orientationX: m, orientationY: g, orientationZ: v, panningModel: y, positionX: x, positionY: w, positionZ: b, refDistance: T, rolloffFactor: S, ...k })=>{
                    const A = l.createPanner();
                    if (k.channelCount > 2) throw r();
                    if ("max" === k.channelCountMode) throw r();
                    qt(A, k);
                    const C = {
                        channelCount: 1,
                        channelCountMode: "explicit",
                        channelInterpretation: "discrete"
                    }, D = s1(l, {
                        ...C,
                        channelInterpretation: "speakers",
                        numberOfInputs: 6
                    }), O = n(l, {
                        ...k,
                        gain: 1
                    }), M = n(l, {
                        ...C,
                        gain: 1
                    }), E = n(l, {
                        ...C,
                        gain: 0
                    }), R = n(l, {
                        ...C,
                        gain: 0
                    }), q = n(l, {
                        ...C,
                        gain: 0
                    }), F = n(l, {
                        ...C,
                        gain: 0
                    }), I = n(l, {
                        ...C,
                        gain: 0
                    }), V = i(l, 256, 6, 1), N = o(l, {
                        ...C,
                        curve: new Float32Array([
                            1,
                            1
                        ]),
                        oversample: "none"
                    });
                    let P = [
                        m,
                        g,
                        v
                    ], j = [
                        x,
                        w,
                        b
                    ];
                    const L = new Float32Array(1);
                    V.onaudioprocess = ({ inputBuffer: t1 })=>{
                        const e = [
                            c(t1, L, 0),
                            c(t1, L, 1),
                            c(t1, L, 2)
                        ];
                        e.some((t1, e)=>t1 !== P[e]) && (A.setOrientation(...e), P = e);
                        const s1 = [
                            c(t1, L, 3),
                            c(t1, L, 4),
                            c(t1, L, 5)
                        ];
                        s1.some((t1, e)=>t1 !== j[e]) && (A.setPosition(...s1), j = s1);
                    }, Object.defineProperty(E.gain, "defaultValue", {
                        get: ()=>0
                    }), Object.defineProperty(R.gain, "defaultValue", {
                        get: ()=>0
                    }), Object.defineProperty(q.gain, "defaultValue", {
                        get: ()=>0
                    }), Object.defineProperty(F.gain, "defaultValue", {
                        get: ()=>0
                    }), Object.defineProperty(I.gain, "defaultValue", {
                        get: ()=>0
                    });
                    const z = {
                        get bufferSize () {},
                        get channelCount () {
                            return A.channelCount;
                        },
                        set channelCount (t){
                            if (t > 2) throw r();
                            O.channelCount = t, A.channelCount = t;
                        },
                        get channelCountMode () {
                            return A.channelCountMode;
                        },
                        set channelCountMode (t){
                            if ("max" === t) throw r();
                            O.channelCountMode = t, A.channelCountMode = t;
                        },
                        get channelInterpretation () {
                            return A.channelInterpretation;
                        },
                        set channelInterpretation (t){
                            O.channelInterpretation = t, A.channelInterpretation = t;
                        },
                        get coneInnerAngle () {
                            return A.coneInnerAngle;
                        },
                        set coneInnerAngle (t){
                            A.coneInnerAngle = t;
                        },
                        get coneOuterAngle () {
                            return A.coneOuterAngle;
                        },
                        set coneOuterAngle (t){
                            A.coneOuterAngle = t;
                        },
                        get coneOuterGain () {
                            return A.coneOuterGain;
                        },
                        set coneOuterGain (t){
                            if (t < 0 || t > 1) throw e();
                            A.coneOuterGain = t;
                        },
                        get context () {
                            return A.context;
                        },
                        get distanceModel () {
                            return A.distanceModel;
                        },
                        set distanceModel (t){
                            A.distanceModel = t;
                        },
                        get inputs () {
                            return [
                                O
                            ];
                        },
                        get maxDistance () {
                            return A.maxDistance;
                        },
                        set maxDistance (t){
                            if (t < 0) throw new RangeError;
                            A.maxDistance = t;
                        },
                        get numberOfInputs () {
                            return A.numberOfInputs;
                        },
                        get numberOfOutputs () {
                            return A.numberOfOutputs;
                        },
                        get orientationX () {
                            return M.gain;
                        },
                        get orientationY () {
                            return E.gain;
                        },
                        get orientationZ () {
                            return R.gain;
                        },
                        get panningModel () {
                            return A.panningModel;
                        },
                        set panningModel (t){
                            A.panningModel = t;
                        },
                        get positionX () {
                            return q.gain;
                        },
                        get positionY () {
                            return F.gain;
                        },
                        get positionZ () {
                            return I.gain;
                        },
                        get refDistance () {
                            return A.refDistance;
                        },
                        set refDistance (t){
                            if (t < 0) throw new RangeError;
                            A.refDistance = t;
                        },
                        get rolloffFactor () {
                            return A.rolloffFactor;
                        },
                        set rolloffFactor (t){
                            if (t < 0) throw new RangeError;
                            A.rolloffFactor = t;
                        },
                        addEventListener: (...t1)=>O.addEventListener(t1[0], t1[1], t1[2]),
                        dispatchEvent: (...t1)=>O.dispatchEvent(t1[0]),
                        removeEventListener: (...t1)=>O.removeEventListener(t1[0], t1[1], t1[2])
                    };
                    return u !== z.coneInnerAngle && (z.coneInnerAngle = u), p !== z.coneOuterAngle && (z.coneOuterAngle = p), d !== z.coneOuterGain && (z.coneOuterGain = d), f !== z.distanceModel && (z.distanceModel = f), _ !== z.maxDistance && (z.maxDistance = _), m !== z.orientationX.value && (z.orientationX.value = m), g !== z.orientationY.value && (z.orientationY.value = g), v !== z.orientationZ.value && (z.orientationZ.value = v), y !== z.panningModel && (z.panningModel = y), x !== z.positionX.value && (z.positionX.value = x), w !== z.positionY.value && (z.positionY.value = w), b !== z.positionZ.value && (z.positionZ.value = b), T !== z.refDistance && (z.refDistance = T), S !== z.rolloffFactor && (z.rolloffFactor = S), 1 === P[0] && 0 === P[1] && 0 === P[2] || A.setOrientation(...P), 0 === j[0] && 0 === j[1] && 0 === j[2] || A.setPosition(...j), h(zt(z, A), ()=>{
                        O.connect(A), t1(O, N, 0, 0), N.connect(M).connect(D, 0, 0), N.connect(E).connect(D, 0, 1), N.connect(R).connect(D, 0, 2), N.connect(q).connect(D, 0, 3), N.connect(F).connect(D, 0, 4), N.connect(I).connect(D, 0, 5), D.connect(V).connect(l.destination);
                    }, ()=>{
                        O.disconnect(A), a(O, N, 0, 0), N.disconnect(M), M.disconnect(D), N.disconnect(E), E.disconnect(D), N.disconnect(R), R.disconnect(D), N.disconnect(q), q.disconnect(D), N.disconnect(F), F.disconnect(D), N.disconnect(I), I.disconnect(D), D.disconnect(V), V.disconnect(l.destination);
                    });
                })(Y, At, as, Bt, Qt, js, Zt, K, ee, os), zs = ((t1)=>(e, s1)=>{
                    const n = e.createPanner();
                    return void 0 === n.orientationX ? t1(e, s1) : (qt(n, s1), It(n, s1, "orientationX"), It(n, s1, "orientationY"), It(n, s1, "orientationZ"), It(n, s1, "positionX"), It(n, s1, "positionY"), It(n, s1, "positionZ"), Rt(n, s1, "coneInnerAngle"), Rt(n, s1, "coneOuterAngle"), Rt(n, s1, "coneOuterGain"), Rt(n, s1, "distanceModel"), Rt(n, s1, "maxDistance"), Rt(n, s1, "panningModel"), Rt(n, s1, "refDistance"), Rt(n, s1, "rolloffFactor"), n);
                })(Ls), Ws = ((t1, e, s1, n, i, o, r, a, c, h)=>()=>{
                    const l = new WeakMap;
                    let u = null;
                    return {
                        render (p, d) {
                            const f = l.get(d);
                            return void 0 !== f ? Promise.resolve(f) : (async (p, d)=>{
                                let f = null, _ = o(p);
                                const m = {
                                    channelCount: _.channelCount,
                                    channelCountMode: _.channelCountMode,
                                    channelInterpretation: _.channelInterpretation
                                }, g = {
                                    ...m,
                                    coneInnerAngle: _.coneInnerAngle,
                                    coneOuterAngle: _.coneOuterAngle,
                                    coneOuterGain: _.coneOuterGain,
                                    distanceModel: _.distanceModel,
                                    maxDistance: _.maxDistance,
                                    panningModel: _.panningModel,
                                    refDistance: _.refDistance,
                                    rolloffFactor: _.rolloffFactor
                                }, v = M(_, d);
                                if ("bufferSize" in _) f = n(d, {
                                    ...m,
                                    gain: 1
                                });
                                else if (!v) {
                                    const t1 = {
                                        ...g,
                                        orientationX: _.orientationX.value,
                                        orientationY: _.orientationY.value,
                                        orientationZ: _.orientationZ.value,
                                        positionX: _.positionX.value,
                                        positionY: _.positionY.value,
                                        positionZ: _.positionZ.value
                                    };
                                    _ = i(d, t1);
                                }
                                if (l.set(d, null === f ? _ : f), null !== f) {
                                    if (null === u) {
                                        if (null === r) throw new Error("Missing the native OfflineAudioContext constructor.");
                                        const t1 = new r(6, p.context.length, d.sampleRate), n = e(t1, {
                                            channelCount: 1,
                                            channelCountMode: "explicit",
                                            channelInterpretation: "speakers",
                                            numberOfInputs: 6
                                        });
                                        n.connect(t1.destination), u = (async ()=>{
                                            const e = await Promise.all([
                                                p.orientationX,
                                                p.orientationY,
                                                p.orientationZ,
                                                p.positionX,
                                                p.positionY,
                                                p.positionZ
                                            ].map(async (e, n)=>{
                                                const i = s1(t1, {
                                                    channelCount: 1,
                                                    channelCountMode: "explicit",
                                                    channelInterpretation: "discrete",
                                                    offset: 0 === n ? 1 : 0
                                                });
                                                return await a(t1, e, i.offset), i;
                                            }));
                                            for(let t1 = 0; t1 < 6; t1 += 1)e[t1].connect(n, 0, t1), e[t1].start(0);
                                            return h(t1);
                                        })();
                                    }
                                    const t1 = await u, o = n(d, {
                                        ...m,
                                        gain: 1
                                    });
                                    await c(p, d, o);
                                    const l = [];
                                    for(let e = 0; e < t1.numberOfChannels; e += 1)l.push(t1.getChannelData(e));
                                    let _ = [
                                        l[0][0],
                                        l[1][0],
                                        l[2][0]
                                    ], v = [
                                        l[3][0],
                                        l[4][0],
                                        l[5][0]
                                    ], y = n(d, {
                                        ...m,
                                        gain: 1
                                    }), x = i(d, {
                                        ...g,
                                        orientationX: _[0],
                                        orientationY: _[1],
                                        orientationZ: _[2],
                                        positionX: v[0],
                                        positionY: v[1],
                                        positionZ: v[2]
                                    });
                                    o.connect(y).connect(x.inputs[0]), x.connect(f);
                                    for(let e = 128; e < t1.length; e += 128){
                                        const t1 = [
                                            l[0][e],
                                            l[1][e],
                                            l[2][e]
                                        ], s1 = [
                                            l[3][e],
                                            l[4][e],
                                            l[5][e]
                                        ];
                                        if (t1.some((t1, e)=>t1 !== _[e]) || s1.some((t1, e)=>t1 !== v[e])) {
                                            _ = t1, v = s1;
                                            const r = e / d.sampleRate;
                                            y.gain.setValueAtTime(0, r), y = n(d, {
                                                ...m,
                                                gain: 0
                                            }), x = i(d, {
                                                ...g,
                                                orientationX: _[0],
                                                orientationY: _[1],
                                                orientationZ: _[2],
                                                positionX: v[0],
                                                positionY: v[1],
                                                positionZ: v[2]
                                            }), y.gain.setValueAtTime(1, r), o.connect(y).connect(x.inputs[0]), x.connect(f);
                                        }
                                    }
                                    return f;
                                }
                                return v ? (await t1(d, p.orientationX, _.orientationX), await t1(d, p.orientationY, _.orientationY), await t1(d, p.orientationZ, _.orientationZ), await t1(d, p.positionX, _.positionX), await t1(d, p.positionY, _.positionY), await t1(d, p.positionZ, _.positionZ)) : (await a(d, p.orientationX, _.orientationX), await a(d, p.orientationY, _.orientationY), await a(d, p.orientationZ, _.orientationZ), await a(d, p.positionX, _.positionX), await a(d, p.positionY, _.positionY), await a(d, p.positionZ, _.positionZ)), X(_) ? await c(p, d, _.inputs[0]) : await c(p, d, _), _;
                            })(p, d);
                        }
                    };
                })(Xe, as, ds, Bt, zs, tt, Ce, $e, Te, Cs), Bs = ((t1, e, s1, n, i, o, r)=>class extends t1 {
                    constructor(t1, a){
                        const c = i(t1), h = {
                            ...$t,
                            ...a
                        }, l = s1(c, h), u = o(c);
                        super(t1, !1, l, u ? n() : null), this._nativePannerNode = l, this._orientationX = e(this, u, l.orientationX, V, I), this._orientationY = e(this, u, l.orientationY, V, I), this._orientationZ = e(this, u, l.orientationZ, V, I), this._positionX = e(this, u, l.positionX, V, I), this._positionY = e(this, u, l.positionY, V, I), this._positionZ = e(this, u, l.positionZ, V, I), r(this, 1);
                    }
                    get coneInnerAngle() {
                        return this._nativePannerNode.coneInnerAngle;
                    }
                    set coneInnerAngle(t1) {
                        this._nativePannerNode.coneInnerAngle = t1;
                    }
                    get coneOuterAngle() {
                        return this._nativePannerNode.coneOuterAngle;
                    }
                    set coneOuterAngle(t1) {
                        this._nativePannerNode.coneOuterAngle = t1;
                    }
                    get coneOuterGain() {
                        return this._nativePannerNode.coneOuterGain;
                    }
                    set coneOuterGain(t1) {
                        this._nativePannerNode.coneOuterGain = t1;
                    }
                    get distanceModel() {
                        return this._nativePannerNode.distanceModel;
                    }
                    set distanceModel(t1) {
                        this._nativePannerNode.distanceModel = t1;
                    }
                    get maxDistance() {
                        return this._nativePannerNode.maxDistance;
                    }
                    set maxDistance(t1) {
                        this._nativePannerNode.maxDistance = t1;
                    }
                    get orientationX() {
                        return this._orientationX;
                    }
                    get orientationY() {
                        return this._orientationY;
                    }
                    get orientationZ() {
                        return this._orientationZ;
                    }
                    get panningModel() {
                        return this._nativePannerNode.panningModel;
                    }
                    set panningModel(t1) {
                        this._nativePannerNode.panningModel = t1;
                    }
                    get positionX() {
                        return this._positionX;
                    }
                    get positionY() {
                        return this._positionY;
                    }
                    get positionZ() {
                        return this._positionZ;
                    }
                    get refDistance() {
                        return this._nativePannerNode.refDistance;
                    }
                    set refDistance(t1) {
                        this._nativePannerNode.refDistance = t1;
                    }
                    get rolloffFactor() {
                        return this._nativePannerNode.rolloffFactor;
                    }
                    set rolloffFactor(t1) {
                        this._nativePannerNode.rolloffFactor = t1;
                    }
                })(Ve, Je, zs, Ws, ke, De, ns), Us = ((t1)=>(e, { disableNormalization: s1, imag: n, real: i })=>{
                    const o = n instanceof Float32Array ? n : new Float32Array(n), r = i instanceof Float32Array ? i : new Float32Array(i), a = e.createPeriodicWave(r, o, {
                        disableNormalization: s1
                    });
                    if (Array.from(n).length < 2) throw t1();
                    return a;
                })(R), Gs = ((t1, e, s1, n)=>class n {
                    constructor(n, i){
                        const o = e(n), r = ((t1)=>{
                            const { imag: e, real: s1 } = t1;
                            return void 0 === e ? void 0 === s1 ? {
                                ...t1,
                                imag: [
                                    0,
                                    0
                                ],
                                real: [
                                    0,
                                    0
                                ]
                            } : {
                                ...t1,
                                imag: Array.from(s1, ()=>0),
                                real: s1
                            } : void 0 === s1 ? {
                                ...t1,
                                imag: e,
                                real: Array.from(e, ()=>0)
                            } : {
                                ...t1,
                                imag: e,
                                real: s1
                            };
                        })({
                            ...Ht,
                            ...i
                        }), a = t1(o, r);
                        return s1.add(a), a;
                    }
                    static [Symbol.hasInstance](t1) {
                        return null !== t1 && "object" == typeof t1 && Object.getPrototypeOf(t1) === n.prototype || s1.has(t1);
                    }
                })(Us, ke, new WeakSet), Qs = ((t1, e, s1, n, i, o)=>{
                const r = 16385, a = new Float32Array([
                    1,
                    1
                ]), c = Math.PI / 2, h = {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "discrete"
                }, l = {
                    ...h,
                    oversample: "none"
                }, u = (t1, o, u, p, d)=>{
                    if (1 === o) return ((t1, e, i, o)=>{
                        const u = new Float32Array(r), p = new Float32Array(r);
                        for(let t1 = 0; t1 < r; t1 += 1){
                            const e = t1 / 16384 * c;
                            u[t1] = Math.cos(e), p[t1] = Math.sin(e);
                        }
                        const d = s1(t1, {
                            ...h,
                            gain: 0
                        }), f = n(t1, {
                            ...l,
                            curve: u
                        }), _ = n(t1, {
                            ...l,
                            curve: a
                        }), m = s1(t1, {
                            ...h,
                            gain: 0
                        }), g = n(t1, {
                            ...l,
                            curve: p
                        });
                        return {
                            connectGraph () {
                                e.connect(d), e.connect(void 0 === _.inputs ? _ : _.inputs[0]), e.connect(m), _.connect(i), i.connect(void 0 === f.inputs ? f : f.inputs[0]), i.connect(void 0 === g.inputs ? g : g.inputs[0]), f.connect(d.gain), g.connect(m.gain), d.connect(o, 0, 0), m.connect(o, 0, 1);
                            },
                            disconnectGraph () {
                                e.disconnect(d), e.disconnect(void 0 === _.inputs ? _ : _.inputs[0]), e.disconnect(m), _.disconnect(i), i.disconnect(void 0 === f.inputs ? f : f.inputs[0]), i.disconnect(void 0 === g.inputs ? g : g.inputs[0]), f.disconnect(d.gain), g.disconnect(m.gain), d.disconnect(o, 0, 0), m.disconnect(o, 0, 1);
                            }
                        };
                    })(t1, u, p, d);
                    if (2 === o) return ((t1, i, o, u)=>{
                        const p = new Float32Array(r), d = new Float32Array(r), f = new Float32Array(r), _ = new Float32Array(r), m = Math.floor(8192.5);
                        for(let t1 = 0; t1 < r; t1 += 1)if (t1 > m) {
                            const e = (t1 - m) / (16384 - m) * c;
                            p[t1] = Math.cos(e), d[t1] = Math.sin(e), f[t1] = 0, _[t1] = 1;
                        } else {
                            const e = t1 / (16384 - m) * c;
                            p[t1] = 1, d[t1] = 0, f[t1] = Math.cos(e), _[t1] = Math.sin(e);
                        }
                        const g = e(t1, {
                            channelCount: 2,
                            channelCountMode: "explicit",
                            channelInterpretation: "discrete",
                            numberOfOutputs: 2
                        }), v = s1(t1, {
                            ...h,
                            gain: 0
                        }), y = n(t1, {
                            ...l,
                            curve: p
                        }), x = s1(t1, {
                            ...h,
                            gain: 0
                        }), w = n(t1, {
                            ...l,
                            curve: d
                        }), b = n(t1, {
                            ...l,
                            curve: a
                        }), T = s1(t1, {
                            ...h,
                            gain: 0
                        }), S = n(t1, {
                            ...l,
                            curve: f
                        }), k = s1(t1, {
                            ...h,
                            gain: 0
                        }), A = n(t1, {
                            ...l,
                            curve: _
                        });
                        return {
                            connectGraph () {
                                i.connect(g), i.connect(void 0 === b.inputs ? b : b.inputs[0]), g.connect(v, 0), g.connect(x, 0), g.connect(T, 1), g.connect(k, 1), b.connect(o), o.connect(void 0 === y.inputs ? y : y.inputs[0]), o.connect(void 0 === w.inputs ? w : w.inputs[0]), o.connect(void 0 === S.inputs ? S : S.inputs[0]), o.connect(void 0 === A.inputs ? A : A.inputs[0]), y.connect(v.gain), w.connect(x.gain), S.connect(T.gain), A.connect(k.gain), v.connect(u, 0, 0), T.connect(u, 0, 0), x.connect(u, 0, 1), k.connect(u, 0, 1);
                            },
                            disconnectGraph () {
                                i.disconnect(g), i.disconnect(void 0 === b.inputs ? b : b.inputs[0]), g.disconnect(v, 0), g.disconnect(x, 0), g.disconnect(T, 1), g.disconnect(k, 1), b.disconnect(o), o.disconnect(void 0 === y.inputs ? y : y.inputs[0]), o.disconnect(void 0 === w.inputs ? w : w.inputs[0]), o.disconnect(void 0 === S.inputs ? S : S.inputs[0]), o.disconnect(void 0 === A.inputs ? A : A.inputs[0]), y.disconnect(v.gain), w.disconnect(x.gain), S.disconnect(T.gain), A.disconnect(k.gain), v.disconnect(u, 0, 0), T.disconnect(u, 0, 0), x.disconnect(u, 0, 1), k.disconnect(u, 0, 1);
                            }
                        };
                    })(t1, u, p, d);
                    throw i();
                };
                return (e, { channelCount: n, channelCountMode: r, pan: a, ...c })=>{
                    if ("max" === r) throw i();
                    const h = t1(e, {
                        ...c,
                        channelCount: 1,
                        channelCountMode: r,
                        numberOfInputs: 2
                    }), l = s1(e, {
                        ...c,
                        channelCount: n,
                        channelCountMode: r,
                        gain: 1
                    }), p = s1(e, {
                        channelCount: 1,
                        channelCountMode: "explicit",
                        channelInterpretation: "discrete",
                        gain: a
                    });
                    let { connectGraph: d, disconnectGraph: f } = u(e, n, l, p, h);
                    Object.defineProperty(p.gain, "defaultValue", {
                        get: ()=>0
                    }), Object.defineProperty(p.gain, "maxValue", {
                        get: ()=>1
                    }), Object.defineProperty(p.gain, "minValue", {
                        get: ()=>-1
                    });
                    const _ = {
                        get bufferSize () {},
                        get channelCount () {
                            return l.channelCount;
                        },
                        set channelCount (t){
                            l.channelCount !== t && (m && f(), { connectGraph: d, disconnectGraph: f } = u(e, t, l, p, h), m && d()), l.channelCount = t;
                        },
                        get channelCountMode () {
                            return l.channelCountMode;
                        },
                        set channelCountMode (t){
                            if ("clamped-max" === t || "max" === t) throw i();
                            l.channelCountMode = t;
                        },
                        get channelInterpretation () {
                            return l.channelInterpretation;
                        },
                        set channelInterpretation (t){
                            l.channelInterpretation = t;
                        },
                        get context () {
                            return l.context;
                        },
                        get inputs () {
                            return [
                                l
                            ];
                        },
                        get numberOfInputs () {
                            return l.numberOfInputs;
                        },
                        get numberOfOutputs () {
                            return l.numberOfOutputs;
                        },
                        get pan () {
                            return p.gain;
                        },
                        addEventListener: (...t1)=>l.addEventListener(t1[0], t1[1], t1[2]),
                        dispatchEvent: (...t1)=>l.dispatchEvent(t1[0]),
                        removeEventListener: (...t1)=>l.removeEventListener(t1[0], t1[1], t1[2])
                    };
                    let m = !1;
                    return o(zt(_, h), ()=>{
                        d(), m = !0;
                    }, ()=>{
                        f(), m = !1;
                    });
                };
            })(as, Lt, Bt, js, Zt, os), Zs = ((t1, e)=>(s1, n)=>{
                    const i = n.channelCountMode;
                    if ("clamped-max" === i) throw e();
                    if (void 0 === s1.createStereoPanner) return t1(s1, n);
                    const o = s1.createStereoPanner();
                    return qt(o, n), It(o, n, "pan"), Object.defineProperty(o, "channelCountMode", {
                        get: ()=>i,
                        set: (t1)=>{
                            if (t1 !== i) throw e();
                        }
                    }), o;
                })(Qs, Zt), Xs = ((t1, e, s1, n, i)=>()=>{
                    const o = new WeakMap;
                    return {
                        render (r, a) {
                            const c = o.get(a);
                            return void 0 !== c ? Promise.resolve(c) : (async (r, a)=>{
                                let c = s1(r);
                                const h = M(c, a);
                                if (!h) {
                                    const t1 = {
                                        channelCount: c.channelCount,
                                        channelCountMode: c.channelCountMode,
                                        channelInterpretation: c.channelInterpretation,
                                        pan: c.pan.value
                                    };
                                    c = e(a, t1);
                                }
                                return o.set(a, c), h ? await t1(a, r.pan, c.pan) : await n(a, r.pan, c.pan), X(c) ? await i(r, a, c.inputs[0]) : await i(r, a, c), c;
                            })(r, a);
                        }
                    };
                })(Xe, Zs, tt, $e, Te), Ys = ((t1, e, s1, n, i, o)=>class extends t1 {
                    constructor(t1, r){
                        const a = i(t1), c = {
                            ...Jt,
                            ...r
                        }, h = s1(a, c), l = o(a);
                        super(t1, !1, h, l ? n() : null), this._pan = e(this, l, h.pan);
                    }
                    get pan() {
                        return this._pan;
                    }
                })(Ve, Je, Zs, Xs, ke, De), $s = ((t1, e, s1)=>()=>{
                    const n = new WeakMap;
                    return {
                        render (i, o) {
                            const r = n.get(o);
                            return void 0 !== r ? Promise.resolve(r) : (async (i, o)=>{
                                let r = e(i);
                                if (!M(r, o)) {
                                    const e = {
                                        channelCount: r.channelCount,
                                        channelCountMode: r.channelCountMode,
                                        channelInterpretation: r.channelInterpretation,
                                        curve: r.curve,
                                        oversample: r.oversample
                                    };
                                    r = t1(o, e);
                                }
                                return n.set(o, r), X(r) ? await s1(i, o, r.inputs[0]) : await s1(i, o, r), r;
                            })(i, o);
                        }
                    };
                })(js, tt, Te), Hs = ((t1, e, s1, n, i, o, r)=>class extends t1 {
                    constructor(t1, e){
                        const a = i(t1), c = {
                            ...te,
                            ...e
                        }, h = s1(a, c);
                        super(t1, !0, h, o(a) ? n() : null), this._isCurveNullified = !1, this._nativeWaveShaperNode = h, r(this, 1);
                    }
                    get curve() {
                        return this._isCurveNullified ? null : this._nativeWaveShaperNode.curve;
                    }
                    set curve(t1) {
                        if (null === t1) this._isCurveNullified = !0, this._nativeWaveShaperNode.curve = new Float32Array([
                            0,
                            0
                        ]);
                        else {
                            if (t1.length < 2) throw e();
                            this._isCurveNullified = !1, this._nativeWaveShaperNode.curve = t1;
                        }
                    }
                    get oversample() {
                        return this._nativeWaveShaperNode.oversample;
                    }
                    set oversample(t1) {
                        this._nativeWaveShaperNode.oversample = t1;
                    }
                })(Ve, At, js, $s, ke, De, ns), Js = ((t1)=>null !== t1 && t1.isSecureContext)(xe), Ks = ((t1)=>(e, s1, n)=>{
                    Object.defineProperties(t1, {
                        currentFrame: {
                            configurable: !0,
                            get: ()=>Math.round(e * s1)
                        },
                        currentTime: {
                            configurable: !0,
                            get: ()=>e
                        }
                    });
                    try {
                        return n();
                    } finally{
                        null !== t1 && (delete t1.currentFrame, delete t1.currentTime);
                    }
                })(xe), tn = new WeakMap, en = ((t1, e)=>(s1)=>{
                    let n = t1.get(s1);
                    if (void 0 !== n) return n;
                    if (null === e) throw new Error("Missing the native OfflineAudioContext constructor.");
                    return n = new e(1, 1, 44100), t1.set(s1, n), n;
                })(tn, Ce), sn = Js ? ((t1, e, s1, n, i, o, r, a, c, h, l, u, p)=>{
                let d = 0;
                return (_, m, g = {
                    credentials: "omit"
                })=>{
                    const w = l.get(_);
                    if (void 0 !== w && w.has(m)) return Promise.resolve();
                    const b = h.get(_);
                    if (void 0 !== b) {
                        const t1 = b.get(m);
                        if (void 0 !== t1) return t1;
                    }
                    const T = o(_), S = void 0 === T.audioWorklet ? i(m).then(([t1, e])=>{
                        const [n, i] = v(t1, e);
                        return s1(`${n};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${i}\n})})(window,'_AWGS')`);
                    }).then(()=>{
                        const t1 = p._AWGS.pop();
                        if (void 0 === t1) throw new SyntaxError;
                        n(T.currentTime, T.sampleRate, ()=>t1(class {
                            }, void 0, (t1, s1)=>{
                                if ("" === t1.trim()) throw e();
                                const n = f.get(T);
                                if (void 0 !== n) {
                                    if (n.has(t1)) throw e();
                                    x(s1), y(s1.parameterDescriptors), n.set(t1, s1);
                                } else x(s1), y(s1.parameterDescriptors), f.set(T, new Map([
                                    [
                                        t1,
                                        s1
                                    ]
                                ]));
                            }, T.sampleRate, void 0, void 0));
                    }) : Promise.all([
                        i(m),
                        Promise.resolve(t1(u, u))
                    ]).then(([[t1, e], s1])=>{
                        const n = d + 1;
                        d = n;
                        const [i, o] = v(t1, e), h = new Blob([
                            `${i};((AudioWorkletProcessor,registerProcessor)=>{${o}\n})(${s1 ? "AudioWorkletProcessor" : "class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${s1 ? "" : "__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${s1 ? "" : "i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${n}',class extends AudioWorkletProcessor{process(){return !1}})`
                        ], {
                            type: "application/javascript; charset=utf-8"
                        }), l = URL.createObjectURL(h);
                        return T.audioWorklet.addModule(l, g).then(()=>{
                            if (a(T)) return T;
                            const t1 = r(T);
                            return t1.audioWorklet.addModule(l, g).then(()=>t1);
                        }).then((t1)=>{
                            if (null === c) throw new SyntaxError;
                            try {
                                new c(t1, `__sac${n}`);
                            } catch  {
                                throw new SyntaxError;
                            }
                        }).finally(()=>URL.revokeObjectURL(l));
                    });
                    return void 0 === b ? h.set(_, new Map([
                        [
                            m,
                            S
                        ]
                    ])) : b.set(m, S), S.then(()=>{
                        const t1 = l.get(_);
                        void 0 === t1 ? l.set(_, new Set([
                            m
                        ])) : t1.add(m);
                    }).finally(()=>{
                        const t1 = h.get(_);
                        void 0 !== t1 && t1.delete(m);
                    }), S;
                };
            })(ge, Zt, ((t1)=>(e)=>new Promise((s1, n)=>{
                        if (null === t1) return void n(new SyntaxError);
                        const i = t1.document.head;
                        if (null === i) n(new SyntaxError);
                        else {
                            const o = t1.document.createElement("script"), r = new Blob([
                                e
                            ], {
                                type: "application/javascript"
                            }), a = URL.createObjectURL(r), c = t1.onerror, h = ()=>{
                                t1.onerror = c, URL.revokeObjectURL(a);
                            };
                            t1.onerror = (e, s1, i, o, r)=>s1 === a || s1 === t1.location.href && 1 === i && 1 === o ? (h(), n(r), !1) : null !== c ? c(e, s1, i, o, r) : void 0, o.onerror = ()=>{
                                h(), n(new SyntaxError);
                            }, o.onload = ()=>{
                                h(), s1();
                            }, o.src = a, o.type = "module", i.appendChild(o);
                        }
                    }))(xe), Ks, async (t1)=>{
                try {
                    const e = await fetch(t1);
                    if (e.ok) return [
                        await e.text(),
                        e.url
                    ];
                } catch  {}
                throw new DOMException("", "AbortError");
            }, ke, en, De, Ie, new WeakMap, new WeakMap, ((t1, e)=>async ()=>{
                    if (null === t1) return !0;
                    if (null === e) return !1;
                    const s1 = new Blob([
                        'class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'
                    ], {
                        type: "application/javascript; charset=utf-8"
                    }), n = new e(1, 128, 44100), i = URL.createObjectURL(s1);
                    let o = !1, r = !1;
                    try {
                        await n.audioWorklet.addModule(i);
                        const e = new t1(n, "a", {
                            numberOfOutputs: 0
                        }), s1 = n.createOscillator();
                        e.port.onmessage = ()=>o = !0, e.onprocessorerror = ()=>r = !0, s1.connect(e), s1.start(0), await n.startRendering(), await new Promise((t1)=>setTimeout(t1));
                    } catch  {} finally{
                        URL.revokeObjectURL(i);
                    }
                    return o && !r;
                })(Ie, Ce), xe) : void 0, nn = ((t1, e)=>(s1)=>t1(s1) || e(s1))(Re, De), on = ((t1, e, s1, n, i, o, r, a, c, h, l)=>(s1, n)=>{
                    const u = r(s1) ? s1 : o(s1);
                    if (i.has(n)) {
                        const t1 = new DOMException("", "DataCloneError");
                        return Promise.reject(t1);
                    }
                    try {
                        i.add(n);
                    } catch  {}
                    return e(c, ()=>c(u)) ? u.decodeAudioData(n).then((s1)=>(wt(n).catch(()=>{}), e(a, ()=>a(s1)) || l(s1), t1.add(s1), s1)) : new Promise((e, s1)=>{
                        const i = async ()=>{
                            try {
                                await wt(n);
                            } catch  {}
                        }, o = (t1)=>{
                            s1(t1), i();
                        };
                        try {
                            u.decodeAudioData(n, (s1)=>{
                                "function" != typeof s1.copyFromChannel && (h(s1), q(s1)), t1.add(s1), i().then(()=>e(s1));
                            }, (t1)=>{
                                o(null === t1 ? new DOMException("", "EncodingError") : t1);
                            });
                        } catch (t1) {
                            o(t1);
                        }
                    });
                })(je, ge, 0, 0, new WeakSet, ke, nn, E, Et, Be, Ue), rn = ((t1, e, s1, n, i, o, r, a, c, h, l, u, p, d, f, _, m, g, v, y)=>class extends f {
                    constructor(e, s1){
                        super(e, s1), this._nativeContext = e, this._audioWorklet = void 0 === t1 ? void 0 : {
                            addModule: (e, s1)=>t1(this, e, s1)
                        };
                    }
                    get audioWorklet() {
                        return this._audioWorklet;
                    }
                    createAnalyser() {
                        return new e(this);
                    }
                    createBiquadFilter() {
                        return new i(this);
                    }
                    createBuffer(t1, e, n) {
                        return new s1({
                            length: e,
                            numberOfChannels: t1,
                            sampleRate: n
                        });
                    }
                    createBufferSource() {
                        return new n(this);
                    }
                    createChannelMerger(t1 = 6) {
                        return new o(this, {
                            numberOfInputs: t1
                        });
                    }
                    createChannelSplitter(t1 = 6) {
                        return new r(this, {
                            numberOfOutputs: t1
                        });
                    }
                    createConstantSource() {
                        return new a(this);
                    }
                    createConvolver() {
                        return new c(this);
                    }
                    createDelay(t1 = 1) {
                        return new l(this, {
                            maxDelayTime: t1
                        });
                    }
                    createDynamicsCompressor() {
                        return new u(this);
                    }
                    createGain() {
                        return new p(this);
                    }
                    createIIRFilter(t1, e) {
                        return new d(this, {
                            feedback: e,
                            feedforward: t1
                        });
                    }
                    createOscillator() {
                        return new _(this);
                    }
                    createPanner() {
                        return new m(this);
                    }
                    createPeriodicWave(t1, e, s1 = {
                        disableNormalization: !1
                    }) {
                        return new g(this, {
                            ...s1,
                            imag: e,
                            real: t1
                        });
                    }
                    createStereoPanner() {
                        return new v(this);
                    }
                    createWaveShaper() {
                        return new y(this);
                    }
                    decodeAudioData(t1, e, s1) {
                        return h(this._nativeContext, t1).then((t1)=>("function" == typeof e && e(t1), t1), (t1)=>{
                            throw "function" == typeof s1 && s1(t1), t1;
                        });
                    }
                })(sn, Pe, Ge, ts, is, hs, us, _s, vs, on, xs, Ts, ks, Ms, qs, Vs, Bs, Gs, Ys, Hs), an = ((t1, e, s1, n)=>class extends t1 {
                    constructor(t1, e){
                        const i = s1(t1), o = ((t1, e)=>t1.createMediaElementSource(e.mediaElement))(i, e);
                        if (n(i)) throw TypeError();
                        super(t1, !0, o, null), this._nativeMediaElementAudioSourceNode = o;
                    }
                    get mediaElement() {
                        return this._nativeMediaElementAudioSourceNode.mediaElement;
                    }
                })(Ve, 0, ke, De), cn = ((t1, e, s1, n)=>class extends t1 {
                    constructor(t1, e){
                        const i = s1(t1);
                        if (n(i)) throw new TypeError;
                        const o = ((t1, e)=>{
                            const s1 = t1.createMediaStreamDestination();
                            return qt(s1, e), 1 === s1.numberOfOutputs && Object.defineProperty(s1, "numberOfOutputs", {
                                get: ()=>0
                            }), s1;
                        })(i, {
                            ...Mt,
                            ...e
                        });
                        super(t1, !1, o, null), this._nativeMediaStreamAudioDestinationNode = o;
                    }
                    get stream() {
                        return this._nativeMediaStreamAudioDestinationNode.stream;
                    }
                })(Ve, 0, ke, De), hn = ((t1, e, s1, n)=>class extends t1 {
                    constructor(t1, e){
                        const i = s1(t1), o = ((t1, { mediaStream: e })=>{
                            const s1 = e.getAudioTracks();
                            s1.sort((t1, e)=>t1.id < e.id ? -1 : t1.id > e.id ? 1 : 0);
                            const n = s1.slice(0, 1), i = t1.createMediaStreamSource(new MediaStream(n));
                            return Object.defineProperty(i, "mediaStream", {
                                value: e
                            }), i;
                        })(i, e);
                        if (n(i)) throw new TypeError;
                        super(t1, !0, o, null), this._nativeMediaStreamAudioSourceNode = o;
                    }
                    get mediaStream() {
                        return this._nativeMediaStreamAudioSourceNode.mediaStream;
                    }
                })(Ve, 0, ke, De), ln = ((t1, e)=>(s1, { mediaStreamTrack: n })=>{
                    if ("function" == typeof s1.createMediaStreamTrackSource) return s1.createMediaStreamTrackSource(n);
                    const i = new MediaStream([
                        n
                    ]), o = s1.createMediaStreamSource(i);
                    if ("audio" !== n.kind) throw t1();
                    if (e(s1)) throw new TypeError;
                    return o;
                })(At, De), un = ((t1, e, s1)=>class extends t1 {
                    constructor(t1, n){
                        const i = s1(t1);
                        super(t1, !0, e(i, n), null);
                    }
                })(Ve, ln, ke), pn = ((t1, e, s1, n, i, o, r, a, c)=>class extends t1 {
                    constructor(t1 = {}){
                        if (null === c) throw new Error("Missing the native AudioContext constructor.");
                        let e;
                        try {
                            e = new c(t1);
                        } catch (t1) {
                            if (12 === t1.code && "sampleRate is not in range" === t1.message) throw s1();
                            throw t1;
                        }
                        if (null === e) throw n();
                        if (!((t1)=>void 0 === t1 || "number" == typeof t1 || "string" == typeof t1 && ("balanced" === t1 || "interactive" === t1 || "playback" === t1))(t1.latencyHint)) throw new TypeError(`The provided value '${t1.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);
                        if (void 0 !== t1.sampleRate && e.sampleRate !== t1.sampleRate) throw s1();
                        super(e, 2);
                        const { latencyHint: i } = t1, { sampleRate: o } = e;
                        if (this._baseLatency = "number" == typeof e.baseLatency ? e.baseLatency : "balanced" === i ? 512 / o : "interactive" === i || void 0 === i ? 256 / o : "playback" === i ? 1024 / o : 128 * Math.max(2, Math.min(128, Math.round(i * o / 128))) / o, this._nativeAudioContext = e, "webkitAudioContext" === c.name ? (this._nativeGainNode = e.createGain(), this._nativeOscillatorNode = e.createOscillator(), this._nativeGainNode.gain.value = 1e-37, this._nativeOscillatorNode.connect(this._nativeGainNode).connect(e.destination), this._nativeOscillatorNode.start()) : (this._nativeGainNode = null, this._nativeOscillatorNode = null), this._state = null, "running" === e.state) {
                            this._state = "suspended";
                            const t1 = ()=>{
                                "suspended" === this._state && (this._state = null), e.removeEventListener("statechange", t1);
                            };
                            e.addEventListener("statechange", t1);
                        }
                    }
                    get baseLatency() {
                        return this._baseLatency;
                    }
                    get state() {
                        return null !== this._state ? this._state : this._nativeAudioContext.state;
                    }
                    close() {
                        return "closed" === this.state ? this._nativeAudioContext.close().then(()=>{
                            throw e();
                        }) : ("suspended" === this._state && (this._state = null), this._nativeAudioContext.close().then(()=>{
                            null !== this._nativeGainNode && null !== this._nativeOscillatorNode && (this._nativeOscillatorNode.stop(), this._nativeGainNode.disconnect(), this._nativeOscillatorNode.disconnect()), W(this);
                        }));
                    }
                    createMediaElementSource(t1) {
                        return new i(this, {
                            mediaElement: t1
                        });
                    }
                    createMediaStreamDestination() {
                        return new o(this);
                    }
                    createMediaStreamSource(t1) {
                        return new r(this, {
                            mediaStream: t1
                        });
                    }
                    createMediaStreamTrackSource(t1) {
                        return new a(this, {
                            mediaStreamTrack: t1
                        });
                    }
                    resume() {
                        return "suspended" === this._state ? new Promise((t1, e)=>{
                            const s1 = ()=>{
                                this._nativeAudioContext.removeEventListener("statechange", s1), "running" === this._nativeAudioContext.state ? t1() : this.resume().then(t1, e);
                            };
                            this._nativeAudioContext.addEventListener("statechange", s1);
                        }) : this._nativeAudioContext.resume().catch((t1)=>{
                            if (void 0 === t1 || 15 === t1.code) throw e();
                            throw t1;
                        });
                    }
                    suspend() {
                        return this._nativeAudioContext.suspend().catch((t1)=>{
                            if (void 0 === t1) throw e();
                            throw t1;
                        });
                    }
                })(rn, At, Zt, Kt, an, cn, hn, un, Ee), dn = ((t1)=>(e)=>{
                    const s1 = t1.get(e);
                    if (void 0 === s1) throw new Error("The context has no set of AudioWorkletNodes.");
                    return s1;
                })(Rs), fn = ((t1)=>(e, s1)=>{
                    t1(e).add(s1);
                })(dn), _n = ((t1)=>(e, s1, n = 0, i = 0)=>{
                    const o = e[n];
                    if (void 0 === o) throw t1();
                    return rt(s1) ? o.connect(s1, 0, i) : o.connect(s1, 0);
                })(R), mn = ((t1)=>(e, s1)=>{
                    t1(e).delete(s1);
                })(dn), gn = ((t1)=>(e, s1, n, i = 0)=>void 0 === s1 ? e.forEach((t1)=>t1.disconnect()) : "number" == typeof s1 ? Tt(t1, e, s1).disconnect() : rt(s1) ? void 0 === n ? e.forEach((t1)=>t1.disconnect(s1)) : void 0 === i ? Tt(t1, e, n).disconnect(s1, 0) : Tt(t1, e, n).disconnect(s1, 0, i) : void 0 === n ? e.forEach((t1)=>t1.disconnect(s1)) : Tt(t1, e, n).disconnect(s1, 0))(R), vn = new WeakMap, yn = ((t1, e)=>(s1)=>e(t1, s1))(vn, w), xn = ((t1, e, s1, n, i, o, r, a, c, h, l, u, p)=>(d, f, m, g)=>{
                    if (0 === g.numberOfInputs && 0 === g.numberOfOutputs) throw c();
                    const v = Array.isArray(g.outputChannelCount) ? g.outputChannelCount : Array.from(g.outputChannelCount);
                    if (v.some((t1)=>t1 < 1)) throw c();
                    if (v.length !== g.numberOfOutputs) throw e();
                    if ("explicit" !== g.channelCountMode) throw c();
                    const y = g.channelCount * g.numberOfInputs, x = v.reduce((t1, e)=>t1 + e, 0), w = void 0 === m.parameterDescriptors ? 0 : m.parameterDescriptors.length;
                    if (y + w > 6 || x > 6) throw c();
                    const b = new MessageChannel, T = [], S = [];
                    for(let t1 = 0; t1 < g.numberOfInputs; t1 += 1)T.push(r(d, {
                        channelCount: g.channelCount,
                        channelCountMode: g.channelCountMode,
                        channelInterpretation: g.channelInterpretation,
                        gain: 1
                    })), S.push(i(d, {
                        channelCount: g.channelCount,
                        channelCountMode: "explicit",
                        channelInterpretation: "discrete",
                        numberOfOutputs: g.channelCount
                    }));
                    const k = [];
                    if (void 0 !== m.parameterDescriptors) for (const { defaultValue: t1, maxValue: e, minValue: s1, name: n } of m.parameterDescriptors){
                        const i = o(d, {
                            channelCount: 1,
                            channelCountMode: "explicit",
                            channelInterpretation: "discrete",
                            offset: void 0 !== g.parameterData[n] ? g.parameterData[n] : void 0 === t1 ? 0 : t1
                        });
                        Object.defineProperties(i.offset, {
                            defaultValue: {
                                get: ()=>void 0 === t1 ? 0 : t1
                            },
                            maxValue: {
                                get: ()=>void 0 === e ? V : e
                            },
                            minValue: {
                                get: ()=>void 0 === s1 ? I : s1
                            }
                        }), k.push(i);
                    }
                    const A = n(d, {
                        channelCount: 1,
                        channelCountMode: "explicit",
                        channelInterpretation: "speakers",
                        numberOfInputs: Math.max(1, y + w)
                    }), C = Pt(f, d.sampleRate), D = a(d, C, y + w, Math.max(1, x)), O = i(d, {
                        channelCount: Math.max(1, x),
                        channelCountMode: "explicit",
                        channelInterpretation: "discrete",
                        numberOfOutputs: Math.max(1, x)
                    }), M = [];
                    for(let t1 = 0; t1 < g.numberOfOutputs; t1 += 1)M.push(n(d, {
                        channelCount: 1,
                        channelCountMode: "explicit",
                        channelInterpretation: "speakers",
                        numberOfInputs: v[t1]
                    }));
                    for(let t1 = 0; t1 < g.numberOfInputs; t1 += 1){
                        T[t1].connect(S[t1]);
                        for(let e = 0; e < g.channelCount; e += 1)S[t1].connect(A, e, t1 * g.channelCount + e);
                    }
                    const E = new lt(void 0 === m.parameterDescriptors ? [] : m.parameterDescriptors.map(({ name: t1 }, e)=>{
                        const s1 = k[e];
                        return s1.connect(A, 0, y + e), s1.start(0), [
                            t1,
                            s1.offset
                        ];
                    }));
                    A.connect(D);
                    let R = g.channelInterpretation, q = null;
                    const F = 0 === g.numberOfOutputs ? [
                        D
                    ] : M, N = {
                        get bufferSize () {
                            return C;
                        },
                        get channelCount () {
                            return g.channelCount;
                        },
                        set channelCount (t){
                            throw s1();
                        },
                        get channelCountMode () {
                            return g.channelCountMode;
                        },
                        set channelCountMode (t){
                            throw s1();
                        },
                        get channelInterpretation () {
                            return R;
                        },
                        set channelInterpretation (t){
                            for (const e of T)e.channelInterpretation = t;
                            R = t;
                        },
                        get context () {
                            return D.context;
                        },
                        get inputs () {
                            return T;
                        },
                        get numberOfInputs () {
                            return g.numberOfInputs;
                        },
                        get numberOfOutputs () {
                            return g.numberOfOutputs;
                        },
                        get onprocessorerror () {
                            return q;
                        },
                        set onprocessorerror (t){
                            "function" == typeof q && N.removeEventListener("processorerror", q), q = "function" == typeof t ? t : null, "function" == typeof q && N.addEventListener("processorerror", q);
                        },
                        get parameters () {
                            return E;
                        },
                        get port () {
                            return b.port2;
                        },
                        addEventListener: (...t1)=>D.addEventListener(t1[0], t1[1], t1[2]),
                        connect: t1.bind(null, F),
                        disconnect: h.bind(null, F),
                        dispatchEvent: (...t1)=>D.dispatchEvent(t1[0]),
                        removeEventListener: (...t1)=>D.removeEventListener(t1[0], t1[1], t1[2])
                    }, P = new Map;
                    var j, L;
                    b.port1.addEventListener = (j = b.port1.addEventListener, (...t1)=>{
                        if ("message" === t1[0]) {
                            const e = "function" == typeof t1[1] ? t1[1] : "object" == typeof t1[1] && null !== t1[1] && "function" == typeof t1[1].handleEvent ? t1[1].handleEvent : null;
                            if (null !== e) {
                                const s1 = P.get(t1[1]);
                                void 0 !== s1 ? t1[1] = s1 : (t1[1] = (t1)=>{
                                    l(d.currentTime, d.sampleRate, ()=>e(t1));
                                }, P.set(e, t1[1]));
                            }
                        }
                        return j.call(b.port1, t1[0], t1[1], t1[2]);
                    }), b.port1.removeEventListener = (L = b.port1.removeEventListener, (...t1)=>{
                        if ("message" === t1[0]) {
                            const e = P.get(t1[1]);
                            void 0 !== e && (P.delete(t1[1]), t1[1] = e);
                        }
                        return L.call(b.port1, t1[0], t1[1], t1[2]);
                    });
                    let z = null;
                    Object.defineProperty(b.port1, "onmessage", {
                        get: ()=>z,
                        set: (t1)=>{
                            "function" == typeof z && b.port1.removeEventListener("message", z), z = "function" == typeof t1 ? t1 : null, "function" == typeof z && (b.port1.addEventListener("message", z), b.port1.start());
                        }
                    }), m.prototype.port = b.port1;
                    let W = null;
                    const B = ((t1, e, s1, n)=>{
                        let i = _.get(t1);
                        void 0 === i && (i = new WeakMap, _.set(t1, i));
                        const o = (async (t1, e)=>{
                            const s1 = await ((t1)=>new Promise((e, s1)=>{
                                    const { port1: n, port2: i } = new MessageChannel;
                                    n.onmessage = ({ data: t1 })=>{
                                        n.close(), i.close(), e(t1);
                                    }, n.onmessageerror = ({ data: t1 })=>{
                                        n.close(), i.close(), s1(t1);
                                    }, i.postMessage(t1);
                                }))(e);
                            return new t1(s1);
                        })(s1, n);
                        return i.set(e, o), o;
                    })(d, N, m, g);
                    B.then((t1)=>W = t1);
                    const U = ft(g.numberOfInputs, g.channelCount), G = ft(g.numberOfOutputs, v), Q = void 0 === m.parameterDescriptors ? [] : m.parameterDescriptors.reduce((t1, { name: e })=>({
                            ...t1,
                            [e]: new Float32Array(128)
                        }), {});
                    let Z = !0;
                    const X = ()=>{
                        g.numberOfOutputs > 0 && D.disconnect(O);
                        for(let t1 = 0, e = 0; t1 < g.numberOfOutputs; t1 += 1){
                            const s1 = M[t1];
                            for(let n = 0; n < v[t1]; n += 1)O.disconnect(s1, e + n, n);
                            e += v[t1];
                        }
                    }, Y = new Map;
                    D.onaudioprocess = ({ inputBuffer: t1, outputBuffer: e })=>{
                        if (null !== W) {
                            const s1 = u(N);
                            for(let n = 0; n < C; n += 128){
                                for(let e = 0; e < g.numberOfInputs; e += 1)for(let s1 = 0; s1 < g.channelCount; s1 += 1)pt(t1, U[e], s1, s1, n);
                                void 0 !== m.parameterDescriptors && m.parameterDescriptors.forEach(({ name: e }, s1)=>{
                                    pt(t1, Q, e, y + s1, n);
                                });
                                for(let t1 = 0; t1 < g.numberOfInputs; t1 += 1)for(let e = 0; e < v[t1]; e += 1)0 === G[t1][e].byteLength && (G[t1][e] = new Float32Array(128));
                                try {
                                    const t1 = U.map((t1, e)=>{
                                        if (s1[e].size > 0) return Y.set(e, C / 128), t1;
                                        const n = Y.get(e);
                                        return void 0 === n ? [] : (t1.every((t1)=>t1.every((t1)=>0 === t1)) && (1 === n ? Y.delete(e) : Y.set(e, n - 1)), t1);
                                    }), i = l(d.currentTime + n / d.sampleRate, d.sampleRate, ()=>W.process(t1, G, Q));
                                    Z = i;
                                    for(let t1 = 0, s1 = 0; t1 < g.numberOfOutputs; t1 += 1){
                                        for(let i = 0; i < v[t1]; i += 1)dt(e, G[t1], i, s1 + i, n);
                                        s1 += v[t1];
                                    }
                                } catch (t1) {
                                    Z = !1, N.dispatchEvent(new ErrorEvent("processorerror", {
                                        colno: t1.colno,
                                        filename: t1.filename,
                                        lineno: t1.lineno,
                                        message: t1.message
                                    }));
                                }
                                if (!Z) {
                                    for(let t1 = 0; t1 < g.numberOfInputs; t1 += 1){
                                        T[t1].disconnect(S[t1]);
                                        for(let e = 0; e < g.channelCount; e += 1)S[n].disconnect(A, e, t1 * g.channelCount + e);
                                    }
                                    if (void 0 !== m.parameterDescriptors) {
                                        const t1 = m.parameterDescriptors.length;
                                        for(let e = 0; e < t1; e += 1){
                                            const t1 = k[e];
                                            t1.disconnect(A, 0, y + e), t1.stop();
                                        }
                                    }
                                    A.disconnect(D), D.onaudioprocess = null, $ ? X() : K();
                                    break;
                                }
                            }
                        }
                    };
                    let $ = !1;
                    const H = r(d, {
                        channelCount: 1,
                        channelCountMode: "explicit",
                        channelInterpretation: "discrete",
                        gain: 0
                    }), J = ()=>D.connect(H).connect(d.destination), K = ()=>{
                        D.disconnect(H), H.disconnect();
                    };
                    return J(), p(N, ()=>{
                        if (Z) {
                            K(), g.numberOfOutputs > 0 && D.connect(O);
                            for(let t1 = 0, e = 0; t1 < g.numberOfOutputs; t1 += 1){
                                const s1 = M[t1];
                                for(let n = 0; n < v[t1]; n += 1)O.connect(s1, e + n, n);
                                e += v[t1];
                            }
                        }
                        $ = !0;
                    }, ()=>{
                        Z && (J(), X()), $ = !1;
                    });
                })(_n, R, At, as, Lt, ds, Bt, Qt, Zt, gn, Ks, yn, os), wn = ((t1, e, s1, n, i)=>(o, r, a, c, h, l)=>{
                    if (null !== a) try {
                        const e = new a(o, c, l), n = new Map;
                        let r = null;
                        if (Object.defineProperties(e, {
                            channelCount: {
                                get: ()=>l.channelCount,
                                set: ()=>{
                                    throw t1();
                                }
                            },
                            channelCountMode: {
                                get: ()=>"explicit",
                                set: ()=>{
                                    throw t1();
                                }
                            },
                            onprocessorerror: {
                                get: ()=>r,
                                set: (t1)=>{
                                    "function" == typeof r && e.removeEventListener("processorerror", r), r = "function" == typeof t1 ? t1 : null, "function" == typeof r && e.addEventListener("processorerror", r);
                                }
                            }
                        }), e.addEventListener = (p = e.addEventListener, (...t1)=>{
                            if ("processorerror" === t1[0]) {
                                const e = "function" == typeof t1[1] ? t1[1] : "object" == typeof t1[1] && null !== t1[1] && "function" == typeof t1[1].handleEvent ? t1[1].handleEvent : null;
                                if (null !== e) {
                                    const s1 = n.get(t1[1]);
                                    void 0 !== s1 ? t1[1] = s1 : (t1[1] = (s1)=>{
                                        "error" === s1.type ? (Object.defineProperties(s1, {
                                            type: {
                                                value: "processorerror"
                                            }
                                        }), e(s1)) : e(new ErrorEvent(t1[0], {
                                            ...s1
                                        }));
                                    }, n.set(e, t1[1]));
                                }
                            }
                            return p.call(e, "error", t1[1], t1[2]), p.call(e, ...t1);
                        }), e.removeEventListener = (u = e.removeEventListener, (...t1)=>{
                            if ("processorerror" === t1[0]) {
                                const e = n.get(t1[1]);
                                void 0 !== e && (n.delete(t1[1]), t1[1] = e);
                            }
                            return u.call(e, "error", t1[1], t1[2]), u.call(e, t1[0], t1[1], t1[2]);
                        }), 0 !== l.numberOfOutputs) {
                            const t1 = s1(o, {
                                channelCount: 1,
                                channelCountMode: "explicit",
                                channelInterpretation: "discrete",
                                gain: 0
                            });
                            return e.connect(t1).connect(o.destination), i(e, ()=>t1.disconnect(), ()=>t1.connect(o.destination));
                        }
                        return e;
                    } catch (t1) {
                        if (11 === t1.code) throw n();
                        throw t1;
                    }
                    var u, p;
                    if (void 0 === h) throw n();
                    return ((t1)=>{
                        const { port1: e } = new MessageChannel;
                        try {
                            e.postMessage(t1);
                        } finally{
                            e.close();
                        }
                    })(l), e(o, r, h, l);
                })(At, xn, Bt, Zt, os), bn = ((t1, e, s1, n, i, o, r, a, c, h, l, u, p, d, f, _)=>(m, g, v)=>{
                    const y = new WeakMap;
                    let x = null;
                    return {
                        render (w, b) {
                            a(b, w);
                            const T = y.get(b);
                            return void 0 !== T ? Promise.resolve(T) : (async (a, w)=>{
                                let b = l(a), T = null;
                                const S = M(b, w), k = Array.isArray(g.outputChannelCount) ? g.outputChannelCount : Array.from(g.outputChannelCount);
                                if (null === u) {
                                    const t1 = k.reduce((t1, e)=>t1 + e, 0), s1 = i(w, {
                                        channelCount: Math.max(1, t1),
                                        channelCountMode: "explicit",
                                        channelInterpretation: "discrete",
                                        numberOfOutputs: Math.max(1, t1)
                                    }), o = [];
                                    for(let t1 = 0; t1 < a.numberOfOutputs; t1 += 1)o.push(n(w, {
                                        channelCount: 1,
                                        channelCountMode: "explicit",
                                        channelInterpretation: "speakers",
                                        numberOfInputs: k[t1]
                                    }));
                                    const h = r(w, {
                                        channelCount: g.channelCount,
                                        channelCountMode: g.channelCountMode,
                                        channelInterpretation: g.channelInterpretation,
                                        gain: 1
                                    });
                                    h.connect = e.bind(null, o), h.disconnect = c.bind(null, o), T = [
                                        s1,
                                        o,
                                        h
                                    ];
                                } else S || (b = new u(w, m));
                                if (y.set(w, null === T ? b : T[2]), null !== T) {
                                    if (null === x) {
                                        if (void 0 === v) throw new Error("Missing the processor constructor.");
                                        if (null === p) throw new Error("Missing the native OfflineAudioContext constructor.");
                                        const t1 = a.channelCount * a.numberOfInputs, e = void 0 === v.parameterDescriptors ? 0 : v.parameterDescriptors.length, s1 = t1 + e, c = async ()=>{
                                            const c = new p(s1, 128 * Math.ceil(a.context.length / 128), w.sampleRate), h = [], l = [];
                                            for(let t1 = 0; t1 < g.numberOfInputs; t1 += 1)h.push(r(c, {
                                                channelCount: g.channelCount,
                                                channelCountMode: g.channelCountMode,
                                                channelInterpretation: g.channelInterpretation,
                                                gain: 1
                                            })), l.push(i(c, {
                                                channelCount: g.channelCount,
                                                channelCountMode: "explicit",
                                                channelInterpretation: "discrete",
                                                numberOfOutputs: g.channelCount
                                            }));
                                            const u = await Promise.all(Array.from(a.parameters.values()).map(async (t1)=>{
                                                const e = o(c, {
                                                    channelCount: 1,
                                                    channelCountMode: "explicit",
                                                    channelInterpretation: "discrete",
                                                    offset: t1.value
                                                });
                                                return await d(c, t1, e.offset), e;
                                            })), m = n(c, {
                                                channelCount: 1,
                                                channelCountMode: "explicit",
                                                channelInterpretation: "speakers",
                                                numberOfInputs: Math.max(1, t1 + e)
                                            });
                                            for(let t1 = 0; t1 < g.numberOfInputs; t1 += 1){
                                                h[t1].connect(l[t1]);
                                                for(let e = 0; e < g.channelCount; e += 1)l[t1].connect(m, e, t1 * g.channelCount + e);
                                            }
                                            for (const [e, s1] of u.entries())s1.connect(m, 0, t1 + e), s1.start(0);
                                            return m.connect(c.destination), await Promise.all(h.map((t1)=>f(a, c, t1))), _(c);
                                        };
                                        x = _t(a, 0 === s1 ? null : await c(), w, g, k, v, h);
                                    }
                                    const t1 = await x, e = s1(w, {
                                        buffer: null,
                                        channelCount: 2,
                                        channelCountMode: "max",
                                        channelInterpretation: "speakers",
                                        loop: !1,
                                        loopEnd: 0,
                                        loopStart: 0,
                                        playbackRate: 1
                                    }), [c, l, u] = T;
                                    null !== t1 && (e.buffer = t1, e.start(0)), e.connect(c);
                                    for(let t1 = 0, e = 0; t1 < a.numberOfOutputs; t1 += 1){
                                        const s1 = l[t1];
                                        for(let n = 0; n < k[t1]; n += 1)c.connect(s1, e + n, n);
                                        e += k[t1];
                                    }
                                    return u;
                                }
                                if (S) for (const [e, s1] of a.parameters.entries())await t1(w, s1, b.parameters.get(e));
                                else for (const [t1, e] of a.parameters.entries())await d(w, e, b.parameters.get(t1));
                                return await f(a, w, b), b;
                            })(w, b);
                        }
                    };
                })(Xe, _n, Ye, as, Lt, ds, Bt, mn, gn, Ks, tt, Ie, Ce, $e, Te, Cs), Tn = ((t1)=>(e)=>t1.get(e))(tn), Sn = ((t1)=>(e, s1)=>{
                    t1.set(e, s1);
                })(vn), kn = Js ? ((t1, e, s1, n, i, o, r, a, c, h, l, u, p, d)=>class extends e {
                    constructor(e, l, p){
                        var d;
                        const _ = a(e), m = c(_), g = ((t1)=>({
                                ...t1,
                                outputChannelCount: void 0 !== t1.outputChannelCount ? t1.outputChannelCount : 1 === t1.numberOfInputs && 1 === t1.numberOfOutputs ? [
                                    t1.channelCount
                                ] : Array.from({
                                    length: t1.numberOfOutputs
                                }, ()=>1)
                            }))({
                            ...ut,
                            ...p
                        });
                        ((t1)=>{
                            const { port1: e, port2: s1 } = new MessageChannel;
                            try {
                                e.postMessage(t1);
                            } finally{
                                e.close(), s1.close();
                            }
                        })(g);
                        const v = f.get(_), y = null == v ? void 0 : v.get(l), x = m || "closed" !== _.state ? _ : null !== (d = r(_)) && void 0 !== d ? d : _, w = i(x, m ? null : e.baseLatency, h, l, y, g);
                        super(e, !0, w, m ? n(l, g, y) : null);
                        const b = [];
                        w.parameters.forEach((t1, e)=>{
                            const n = s1(this, m, t1);
                            b.push([
                                e,
                                n
                            ]);
                        }), this._nativeAudioWorkletNode = w, this._onprocessorerror = null, this._parameters = new lt(b), m && t1(_, this);
                        const { activeInputs: T } = o(this);
                        u(w, T);
                    }
                    get onprocessorerror() {
                        return this._onprocessorerror;
                    }
                    set onprocessorerror(t1) {
                        const e = "function" == typeof t1 ? d(this, t1) : null;
                        this._nativeAudioWorkletNode.onprocessorerror = e;
                        const s1 = this._nativeAudioWorkletNode.onprocessorerror;
                        this._onprocessorerror = null !== s1 && s1 === e ? t1 : s1;
                    }
                    get parameters() {
                        return null === this._parameters ? this._nativeAudioWorkletNode.parameters : this._parameters;
                    }
                    get port() {
                        return this._nativeAudioWorkletNode.port;
                    }
                })(fn, Ve, Je, bn, wn, j, Tn, ke, De, Ie, 0, Sn, 0, ue) : void 0, An = ((t1, e)=>(s1, n, i)=>{
                    if (null === e) throw new Error("Missing the native OfflineAudioContext constructor.");
                    try {
                        return new e(s1, n, i);
                    } catch (e) {
                        if ("SyntaxError" === e.name) throw t1();
                        throw e;
                    }
                })(Zt, Ce), Cn = ((t1, e, s1, n, i, o, r, a)=>(c, h)=>s1(c).render(c, h).then(()=>Promise.all(Array.from(n(h)).map((t1)=>s1(t1).render(t1, h)))).then(()=>i(h)).then((s1)=>("function" != typeof s1.copyFromChannel ? (r(s1), q(s1)) : e(o, ()=>o(s1)) || a(s1), t1.add(s1), s1)))(je, ge, be, dn, Cs, E, Be, Ue), Dn = ((t1, e, s1, n, i)=>class extends t1 {
                    constructor(t1, s1, i){
                        let o;
                        if ("number" == typeof t1 && void 0 !== s1 && void 0 !== i) o = {
                            length: s1,
                            numberOfChannels: t1,
                            sampleRate: i
                        };
                        else {
                            if ("object" != typeof t1) throw new Error("The given parameters are not valid.");
                            o = t1;
                        }
                        const { length: r, numberOfChannels: a, sampleRate: c } = {
                            ...Xt,
                            ...o
                        }, h = n(a, r, c);
                        e(Et, ()=>Et(h)) || h.addEventListener("statechange", (()=>{
                            let t1 = 0;
                            const e = (s1)=>{
                                "running" === this._state && (t1 > 0 ? (h.removeEventListener("statechange", e), s1.stopImmediatePropagation(), this._waitForThePromiseToSettle(s1)) : t1 += 1);
                            };
                            return e;
                        })()), super(h, a), this._length = r, this._nativeOfflineAudioContext = h, this._state = null;
                    }
                    get length() {
                        return void 0 === this._nativeOfflineAudioContext.length ? this._length : this._nativeOfflineAudioContext.length;
                    }
                    get state() {
                        return null === this._state ? this._nativeOfflineAudioContext.state : this._state;
                    }
                    startRendering() {
                        return "running" === this._state ? Promise.reject(s1()) : (this._state = "running", i(this.destination, this._nativeOfflineAudioContext).finally(()=>{
                            this._state = null, W(this);
                        }));
                    }
                    _waitForThePromiseToSettle(t1) {
                        null === this._state ? this._nativeOfflineAudioContext.dispatchEvent(t1) : setTimeout(()=>this._waitForThePromiseToSettle(t1));
                    }
                })(rn, ge, At, An, Cn), On = ((t1, e)=>(s1)=>{
                    const n = t1.get(s1);
                    return e(n) || e(s1);
                })(u, Re), Mn = ((t1, e)=>(s1)=>t1.has(s1) || e(s1))(c, qe), En = ((t1, e)=>(s1)=>t1.has(s1) || e(s1))(l, Fe), Rn = ((t1, e)=>(s1)=>{
                    const n = t1.get(s1);
                    return e(n) || e(s1);
                })(u, De), qn = ()=>(async (t1, e, s1, n, i, o, r, a, c, h, l, u, p, d, f, _)=>!!(t1(e, e) && t1(s1, s1) && t1(i, i) && t1(o, o) && t1(a, a) && t1(c, c) && t1(h, h) && t1(l, l) && t1(u, u) && t1(p, p) && t1(d, d)) && (await Promise.all([
                        t1(n, n),
                        t1(r, r),
                        t1(f, f),
                        t1(_, _)
                    ])).every((t1)=>t1))(ge, ((t1)=>()=>{
                        if (null === t1) return !1;
                        const e = new t1(1, 1, 44100).createBuffer(1, 1, 44100);
                        if (void 0 === e.copyToChannel) return !0;
                        const s1 = new Float32Array(2);
                        try {
                            e.copyFromChannel(s1, 0, 0);
                        } catch  {
                            return !1;
                        }
                        return !0;
                    })(Ce), ((t1)=>()=>{
                        if (null === t1) return !1;
                        if (void 0 !== t1.prototype && void 0 !== t1.prototype.close) return !0;
                        const e = new t1, s1 = void 0 !== e.close;
                        try {
                            e.close();
                        } catch  {}
                        return s1;
                    })(Ee), ((t1)=>()=>{
                        if (null === t1) return Promise.resolve(!1);
                        const e = new t1(1, 1, 44100);
                        return new Promise((t1)=>{
                            let s1 = !0;
                            const n = (n)=>{
                                s1 && (s1 = !1, e.startRendering(), t1(n instanceof TypeError));
                            };
                            let i;
                            try {
                                i = e.decodeAudioData(null, ()=>{}, n);
                            } catch (t1) {
                                n(t1);
                            }
                            void 0 !== i && i.catch(n);
                        });
                    })(Ce), ((t1)=>()=>{
                        if (null === t1) return !1;
                        let e;
                        try {
                            e = new t1({
                                latencyHint: "balanced"
                            });
                        } catch  {
                            return !1;
                        }
                        return e.close(), !0;
                    })(Ee), ((t1)=>()=>{
                        if (null === t1) return !1;
                        const e = new t1(1, 1, 44100).createGain(), s1 = e.connect(e) === e;
                        return e.disconnect(e), s1;
                    })(Ce), ((t1, e)=>async ()=>{
                        if (null === t1) return !0;
                        if (null === e) return !1;
                        const s1 = new Blob([
                            'let c,p;class A extends AudioWorkletProcessor{constructor(){super();this.port.onmessage=(e)=>{p=e.data;p.onmessage=()=>{p.postMessage(c);p.close()};this.port.postMessage(0)}}process(){c=1}}registerProcessor("a",A)'
                        ], {
                            type: "application/javascript; charset=utf-8"
                        }), n = new MessageChannel, i = new e(1, 128, 44100), o = URL.createObjectURL(s1);
                        let r = !1;
                        try {
                            await i.audioWorklet.addModule(o);
                            const e = new t1(i, "a", {
                                numberOfOutputs: 0
                            }), s1 = i.createOscillator();
                            await new Promise((t1)=>{
                                e.port.onmessage = ()=>t1(), e.port.postMessage(n.port2, [
                                    n.port2
                                ]);
                            }), e.port.onmessage = ()=>r = !0, s1.connect(e), s1.start(0), await i.startRendering(), r = await new Promise((t1)=>{
                                n.port1.onmessage = ({ data: e })=>t1(1 === e), n.port1.postMessage(0);
                            });
                        } catch  {} finally{
                            n.port1.close(), URL.revokeObjectURL(o);
                        }
                        return r;
                    })(Ie, Ce), ((t1)=>()=>{
                        if (null === t1) return !1;
                        const e = new t1(1, 1, 44100).createChannelMerger();
                        if ("max" === e.channelCountMode) return !0;
                        try {
                            e.channelCount = 2;
                        } catch  {
                            return !0;
                        }
                        return !1;
                    })(Ce), ((t1)=>()=>{
                        if (null === t1) return !1;
                        const e = new t1(1, 1, 44100);
                        return void 0 === e.createConstantSource || e.createConstantSource().offset.maxValue !== Number.POSITIVE_INFINITY;
                    })(Ce), ((t1)=>()=>{
                        if (null === t1) return !1;
                        const e = new t1(1, 1, 44100), s1 = e.createConvolver();
                        s1.buffer = e.createBuffer(1, 1, e.sampleRate);
                        try {
                            s1.buffer = e.createBuffer(1, 1, e.sampleRate);
                        } catch  {
                            return !1;
                        }
                        return !0;
                    })(Ce), ((t1)=>()=>{
                        if (null === t1) return !1;
                        const e = new t1(1, 1, 44100).createConvolver();
                        try {
                            e.channelCount = 1;
                        } catch  {
                            return !1;
                        }
                        return !0;
                    })(Ce), ce, ((t1)=>()=>null !== t1 && t1.hasOwnProperty("isSecureContext"))(xe), ((t1)=>()=>{
                        if (null === t1) return !1;
                        const e = new t1;
                        try {
                            return e.createMediaStreamSource(new MediaStream), !1;
                        } catch (t1) {
                            return !0;
                        } finally{
                            e.close();
                        }
                    })(Ee), ((t1)=>()=>{
                        if (null === t1) return Promise.resolve(!1);
                        const e = new t1(1, 1, 44100);
                        if (void 0 === e.createStereoPanner) return Promise.resolve(!0);
                        if (void 0 === e.createConstantSource) return Promise.resolve(!0);
                        const s1 = e.createConstantSource(), n = e.createStereoPanner();
                        return s1.channelCount = 1, s1.offset.value = 1, n.channelCount = 1, s1.start(), s1.connect(n).connect(e.destination), e.startRendering().then((t1)=>1 !== t1.getChannelData(0)[0]);
                    })(Ce), he);
            function Fn(t1) {
                return void 0 === t1;
            }
            function In(t1) {
                return void 0 !== t1;
            }
            function Vn(t1) {
                return "function" == typeof t1;
            }
            function Nn(t1) {
                return "number" == typeof t1;
            }
            function Pn(t1) {
                return "[object Object]" === Object.prototype.toString.call(t1) && t1.constructor === Object;
            }
            function jn(t1) {
                return "boolean" == typeof t1;
            }
            function Ln(t1) {
                return Array.isArray(t1);
            }
            function zn(t1) {
                return "string" == typeof t1;
            }
            function Wn(t1) {
                return zn(t1) && /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(t1);
            }
            function Bn(t1, e) {
                if (!t1) throw new Error(e);
            }
            function Un(t1, e, s1 = 1 / 0) {
                if (!(e <= t1 && t1 <= s1)) throw new RangeError(`Value must be within [${e}, ${s1}], got: ${t1}`);
            }
            function Gn(t1) {
                t1.isOffline || "running" === t1.state || Kn('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.');
            }
            let Qn = !1, Zn = !1;
            function Xn(t1) {
                Qn = t1;
            }
            function Yn(t1) {
                Fn(t1) && Qn && !Zn && (Zn = !0, Kn("Events scheduled inside of scheduled callbacks should use the passed in scheduling time. See https://github.com/Tonejs/Tone.js/wiki/Accurate-Timing"));
            }
            let $n = console;
            function Hn(t1) {
                $n = t1;
            }
            function Jn(...t1) {
                $n.log(...t1);
            }
            function Kn(...t1) {
                $n.warn(...t1);
            }
            const ti = "object" == typeof self ? self : null, ei = ti && (ti.hasOwnProperty("AudioContext") || ti.hasOwnProperty("webkitAudioContext"));
            function si(t1, e, s1, n) {
                var i, o = arguments.length, r = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, s1) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t1, e, s1, n);
                else for(var a = t1.length - 1; a >= 0; a--)(i = t1[a]) && (r = (o < 3 ? i(r) : o > 3 ? i(e, s1, r) : i(e, s1)) || r);
                return o > 3 && r && Object.defineProperty(e, s1, r), r;
            }
            function ni(t1, e, s1, n) {
                return new (s1 || (s1 = Promise))(function(i, o) {
                    function r(t1) {
                        try {
                            c(n.next(t1));
                        } catch (t1) {
                            o(t1);
                        }
                    }
                    function a(t1) {
                        try {
                            c(n.throw(t1));
                        } catch (t1) {
                            o(t1);
                        }
                    }
                    function c(t1) {
                        var e;
                        t1.done ? i(t1.value) : (e = t1.value, e instanceof s1 ? e : new s1(function(t1) {
                            t1(e);
                        })).then(r, a);
                    }
                    c((n = n.apply(t1, e || [])).next());
                });
            }
            Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError;
            class ii {
                constructor(t1, e, s1, n){
                    this._callback = t1, this._type = e, this._minimumUpdateInterval = Math.max(128 / (n || 44100), .001), this.updateInterval = s1, this._createClock();
                }
                _createWorker() {
                    const t1 = new Blob([
                        `\n\t\t\t// the initial timeout time\n\t\t\tlet timeoutTime =  ${(1e3 * this._updateInterval).toFixed(1)};\n\t\t\t// onmessage callback\n\t\t\tself.onmessage = function(msg){\n\t\t\t\ttimeoutTime = parseInt(msg.data);\n\t\t\t};\n\t\t\t// the tick function which posts a message\n\t\t\t// and schedules a new tick\n\t\t\tfunction tick(){\n\t\t\t\tsetTimeout(tick, timeoutTime);\n\t\t\t\tself.postMessage('tick');\n\t\t\t}\n\t\t\t// call tick initially\n\t\t\ttick();\n\t\t\t`
                    ], {
                        type: "text/javascript"
                    }), e = URL.createObjectURL(t1), s1 = new Worker(e);
                    s1.onmessage = this._callback.bind(this), this._worker = s1;
                }
                _createTimeout() {
                    this._timeout = setTimeout(()=>{
                        this._createTimeout(), this._callback();
                    }, 1e3 * this._updateInterval);
                }
                _createClock() {
                    if ("worker" === this._type) try {
                        this._createWorker();
                    } catch (t1) {
                        this._type = "timeout", this._createClock();
                    }
                    else "timeout" === this._type && this._createTimeout();
                }
                _disposeClock() {
                    this._timeout && clearTimeout(this._timeout), this._worker && (this._worker.terminate(), this._worker.onmessage = null);
                }
                get updateInterval() {
                    return this._updateInterval;
                }
                set updateInterval(t1) {
                    var e;
                    this._updateInterval = Math.max(t1, this._minimumUpdateInterval), "worker" === this._type && (null === (e = this._worker) || void 0 === e || e.postMessage(1e3 * this._updateInterval));
                }
                get type() {
                    return this._type;
                }
                set type(t1) {
                    this._disposeClock(), this._type = t1, this._createClock();
                }
                dispose() {
                    this._disposeClock();
                }
            }
            function oi(t1) {
                return En(t1);
            }
            function ri(t1) {
                return Mn(t1);
            }
            function ai(t1) {
                return Rn(t1);
            }
            function ci(t1) {
                return On(t1);
            }
            function hi(t1, e) {
                return "value" === t1 || oi(e) || ri(e) || function(t1) {
                    return t1 instanceof Ge;
                }(e);
            }
            function li(t1, ...e) {
                if (!e.length) return t1;
                const s1 = e.shift();
                if (Pn(t1) && Pn(s1)) for(const e in s1)hi(e, s1[e]) ? t1[e] = s1[e] : Pn(s1[e]) ? (t1[e] || Object.assign(t1, {
                    [e]: {}
                }), li(t1[e], s1[e])) : Object.assign(t1, {
                    [e]: s1[e]
                });
                return li(t1, ...e);
            }
            function ui(t1, e, s1 = [], n) {
                const i = {}, o = Array.from(e);
                if (Pn(o[0]) && n && !Reflect.has(o[0], n) && (Object.keys(o[0]).some((e)=>Reflect.has(t1, e)) || (li(i, {
                    [n]: o[0]
                }), s1.splice(s1.indexOf(n), 1), o.shift())), 1 === o.length && Pn(o[0])) li(i, o[0]);
                else for(let t1 = 0; t1 < s1.length; t1++)In(o[t1]) && (i[s1[t1]] = o[t1]);
                return li(t1, i);
            }
            function pi(t1, e) {
                return Fn(t1) ? e : t1;
            }
            function di(t1, e) {
                return e.forEach((e)=>{
                    Reflect.has(t1, e) && delete t1[e];
                }), t1;
            }
            class fi {
                constructor(){
                    this.debug = !1, this._wasDisposed = !1;
                }
                static getDefaults() {
                    return {};
                }
                log(...t1) {
                    (this.debug || ti && this.toString() === ti.TONE_DEBUG_CLASS) && Jn(this, ...t1);
                }
                dispose() {
                    return this._wasDisposed = !0, this;
                }
                get disposed() {
                    return this._wasDisposed;
                }
                toString() {
                    return this.name;
                }
            }
            fi.version = i;
            const _i = 1e-6;
            function mi(t1, e) {
                return t1 > e + _i;
            }
            function gi(t1, e) {
                return mi(t1, e) || yi(t1, e);
            }
            function vi(t1, e) {
                return t1 + _i < e;
            }
            function yi(t1, e) {
                return Math.abs(t1 - e) < _i;
            }
            function xi(t1, e, s1) {
                return Math.max(Math.min(t1, s1), e);
            }
            class wi extends fi {
                constructor(){
                    super(), this.name = "Timeline", this._timeline = [];
                    const t1 = ui(wi.getDefaults(), arguments, [
                        "memory"
                    ]);
                    this.memory = t1.memory, this.increasing = t1.increasing;
                }
                static getDefaults() {
                    return {
                        memory: 1 / 0,
                        increasing: !1
                    };
                }
                get length() {
                    return this._timeline.length;
                }
                add(t1) {
                    if (Bn(Reflect.has(t1, "time"), "Timeline: events must have a time attribute"), t1.time = t1.time.valueOf(), this.increasing && this.length) {
                        const e = this._timeline[this.length - 1];
                        Bn(gi(t1.time, e.time), "The time must be greater than or equal to the last scheduled time"), this._timeline.push(t1);
                    } else {
                        const e = this._search(t1.time);
                        this._timeline.splice(e + 1, 0, t1);
                    }
                    if (this.length > this.memory) {
                        const t1 = this.length - this.memory;
                        this._timeline.splice(0, t1);
                    }
                    return this;
                }
                remove(t1) {
                    const e = this._timeline.indexOf(t1);
                    return -1 !== e && this._timeline.splice(e, 1), this;
                }
                get(t1, e = "time") {
                    const s1 = this._search(t1, e);
                    return -1 !== s1 ? this._timeline[s1] : null;
                }
                peek() {
                    return this._timeline[0];
                }
                shift() {
                    return this._timeline.shift();
                }
                getAfter(t1, e = "time") {
                    const s1 = this._search(t1, e);
                    return s1 + 1 < this._timeline.length ? this._timeline[s1 + 1] : null;
                }
                getBefore(t1) {
                    const e = this._timeline.length;
                    if (e > 0 && this._timeline[e - 1].time < t1) return this._timeline[e - 1];
                    const s1 = this._search(t1);
                    return s1 - 1 >= 0 ? this._timeline[s1 - 1] : null;
                }
                cancel(t1) {
                    if (this._timeline.length > 1) {
                        let e = this._search(t1);
                        if (e >= 0) {
                            if (yi(this._timeline[e].time, t1)) {
                                for(let s1 = e; s1 >= 0 && yi(this._timeline[s1].time, t1); s1--)e = s1;
                                this._timeline = this._timeline.slice(0, e);
                            } else this._timeline = this._timeline.slice(0, e + 1);
                        } else this._timeline = [];
                    } else 1 === this._timeline.length && gi(this._timeline[0].time, t1) && (this._timeline = []);
                    return this;
                }
                cancelBefore(t1) {
                    const e = this._search(t1);
                    return e >= 0 && (this._timeline = this._timeline.slice(e + 1)), this;
                }
                previousEvent(t1) {
                    const e = this._timeline.indexOf(t1);
                    return e > 0 ? this._timeline[e - 1] : null;
                }
                _search(t1, e = "time") {
                    if (0 === this._timeline.length) return -1;
                    let s1 = 0;
                    const n = this._timeline.length;
                    let i = n;
                    if (n > 0 && this._timeline[n - 1][e] <= t1) return n - 1;
                    for(; s1 < i;){
                        let n = Math.floor(s1 + (i - s1) / 2);
                        const o = this._timeline[n], r = this._timeline[n + 1];
                        if (yi(o[e], t1)) {
                            for(let s1 = n; s1 < this._timeline.length && yi(this._timeline[s1][e], t1); s1++)n = s1;
                            return n;
                        }
                        if (vi(o[e], t1) && mi(r[e], t1)) return n;
                        mi(o[e], t1) ? i = n : s1 = n + 1;
                    }
                    return -1;
                }
                _iterate(t1, e = 0, s1 = this._timeline.length - 1) {
                    this._timeline.slice(e, s1 + 1).forEach(t1);
                }
                forEach(t1) {
                    return this._iterate(t1), this;
                }
                forEachBefore(t1, e) {
                    const s1 = this._search(t1);
                    return -1 !== s1 && this._iterate(e, 0, s1), this;
                }
                forEachAfter(t1, e) {
                    const s1 = this._search(t1);
                    return this._iterate(e, s1 + 1), this;
                }
                forEachBetween(t1, e, s1) {
                    let n = this._search(t1), i = this._search(e);
                    return -1 !== n && -1 !== i ? (this._timeline[n].time !== t1 && (n += 1), this._timeline[i].time === e && (i -= 1), this._iterate(s1, n, i)) : -1 === n && this._iterate(s1, 0, i), this;
                }
                forEachFrom(t1, e) {
                    let s1 = this._search(t1);
                    for(; s1 >= 0 && this._timeline[s1].time >= t1;)s1--;
                    return this._iterate(e, s1 + 1), this;
                }
                forEachAtTime(t1, e) {
                    const s1 = this._search(t1);
                    if (-1 !== s1 && yi(this._timeline[s1].time, t1)) {
                        let n = s1;
                        for(let e = s1; e >= 0 && yi(this._timeline[e].time, t1); e--)n = e;
                        this._iterate((t1)=>{
                            e(t1);
                        }, n, s1);
                    }
                    return this;
                }
                dispose() {
                    return super.dispose(), this._timeline = [], this;
                }
            }
            const bi = [];
            function Ti(t1) {
                bi.push(t1);
            }
            const Si = [];
            function ki(t1) {
                Si.push(t1);
            }
            class Ai extends fi {
                constructor(){
                    super(...arguments), this.name = "Emitter";
                }
                on(t1, e) {
                    return t1.split(/\W+/).forEach((t1)=>{
                        Fn(this._events) && (this._events = {}), this._events.hasOwnProperty(t1) || (this._events[t1] = []), this._events[t1].push(e);
                    }), this;
                }
                once(t1, e) {
                    const s1 = (...n)=>{
                        e(...n), this.off(t1, s1);
                    };
                    return this.on(t1, s1), this;
                }
                off(t1, e) {
                    return t1.split(/\W+/).forEach((t1)=>{
                        if (Fn(this._events) && (this._events = {}), this._events.hasOwnProperty(t1)) {
                            if (Fn(e)) this._events[t1] = [];
                            else {
                                const s1 = this._events[t1];
                                for(let t1 = s1.length - 1; t1 >= 0; t1--)s1[t1] === e && s1.splice(t1, 1);
                            }
                        }
                    }), this;
                }
                emit(t1, ...e) {
                    if (this._events && this._events.hasOwnProperty(t1)) {
                        const s1 = this._events[t1].slice(0);
                        for(let t1 = 0, n = s1.length; t1 < n; t1++)s1[t1].apply(this, e);
                    }
                    return this;
                }
                static mixin(t1) {
                    [
                        "on",
                        "once",
                        "off",
                        "emit"
                    ].forEach((e)=>{
                        const s1 = Object.getOwnPropertyDescriptor(Ai.prototype, e);
                        Object.defineProperty(t1.prototype, e, s1);
                    });
                }
                dispose() {
                    return super.dispose(), this._events = void 0, this;
                }
            }
            class Ci extends Ai {
                constructor(){
                    super(...arguments), this.isOffline = !1;
                }
                toJSON() {
                    return {};
                }
            }
            class Di extends Ci {
                constructor(){
                    var t1, e;
                    super(), this.name = "Context", this._constants = new Map, this._timeouts = new wi, this._timeoutIds = 0, this._initialized = !1, this._closeStarted = !1, this.isOffline = !1, this._workletPromise = null;
                    const s1 = ui(Di.getDefaults(), arguments, [
                        "context"
                    ]);
                    s1.context ? (this._context = s1.context, this._latencyHint = (null === (t1 = arguments[0]) || void 0 === t1 ? void 0 : t1.latencyHint) || "") : (this._context = function(t1) {
                        return new pn(t1);
                    }({
                        latencyHint: s1.latencyHint
                    }), this._latencyHint = s1.latencyHint), this._ticker = new ii(this.emit.bind(this, "tick"), s1.clockSource, s1.updateInterval, this._context.sampleRate), this.on("tick", this._timeoutLoop.bind(this)), this._context.onstatechange = ()=>{
                        this.emit("statechange", this.state);
                    }, this[(null === (e = arguments[0]) || void 0 === e ? void 0 : e.hasOwnProperty("updateInterval")) ? "_lookAhead" : "lookAhead"] = s1.lookAhead;
                }
                static getDefaults() {
                    return {
                        clockSource: "worker",
                        latencyHint: "interactive",
                        lookAhead: .1,
                        updateInterval: .05
                    };
                }
                initialize() {
                    var t1;
                    return this._initialized || (t1 = this, bi.forEach((e)=>e(t1)), this._initialized = !0), this;
                }
                createAnalyser() {
                    return this._context.createAnalyser();
                }
                createOscillator() {
                    return this._context.createOscillator();
                }
                createBufferSource() {
                    return this._context.createBufferSource();
                }
                createBiquadFilter() {
                    return this._context.createBiquadFilter();
                }
                createBuffer(t1, e, s1) {
                    return this._context.createBuffer(t1, e, s1);
                }
                createChannelMerger(t1) {
                    return this._context.createChannelMerger(t1);
                }
                createChannelSplitter(t1) {
                    return this._context.createChannelSplitter(t1);
                }
                createConstantSource() {
                    return this._context.createConstantSource();
                }
                createConvolver() {
                    return this._context.createConvolver();
                }
                createDelay(t1) {
                    return this._context.createDelay(t1);
                }
                createDynamicsCompressor() {
                    return this._context.createDynamicsCompressor();
                }
                createGain() {
                    return this._context.createGain();
                }
                createIIRFilter(t1, e) {
                    return this._context.createIIRFilter(t1, e);
                }
                createPanner() {
                    return this._context.createPanner();
                }
                createPeriodicWave(t1, e, s1) {
                    return this._context.createPeriodicWave(t1, e, s1);
                }
                createStereoPanner() {
                    return this._context.createStereoPanner();
                }
                createWaveShaper() {
                    return this._context.createWaveShaper();
                }
                createMediaStreamSource(t1) {
                    return Bn(ci(this._context), "Not available if OfflineAudioContext"), this._context.createMediaStreamSource(t1);
                }
                createMediaElementSource(t1) {
                    return Bn(ci(this._context), "Not available if OfflineAudioContext"), this._context.createMediaElementSource(t1);
                }
                createMediaStreamDestination() {
                    return Bn(ci(this._context), "Not available if OfflineAudioContext"), this._context.createMediaStreamDestination();
                }
                decodeAudioData(t1) {
                    return this._context.decodeAudioData(t1);
                }
                get currentTime() {
                    return this._context.currentTime;
                }
                get state() {
                    return this._context.state;
                }
                get sampleRate() {
                    return this._context.sampleRate;
                }
                get listener() {
                    return this.initialize(), this._listener;
                }
                set listener(t1) {
                    Bn(!this._initialized, "The listener cannot be set after initialization."), this._listener = t1;
                }
                get transport() {
                    return this.initialize(), this._transport;
                }
                set transport(t1) {
                    Bn(!this._initialized, "The transport cannot be set after initialization."), this._transport = t1;
                }
                get draw() {
                    return this.initialize(), this._draw;
                }
                set draw(t1) {
                    Bn(!this._initialized, "Draw cannot be set after initialization."), this._draw = t1;
                }
                get destination() {
                    return this.initialize(), this._destination;
                }
                set destination(t1) {
                    Bn(!this._initialized, "The destination cannot be set after initialization."), this._destination = t1;
                }
                createAudioWorkletNode(t1, e) {
                    return function(t1, e, s1) {
                        return Bn(In(kn), "This node only works in a secure context (https or localhost)"), new kn(t1, e, s1);
                    }(this.rawContext, t1, e);
                }
                addAudioWorkletModule(t1) {
                    return ni(this, void 0, void 0, function*() {
                        Bn(In(this.rawContext.audioWorklet), "AudioWorkletNode is only available in a secure context (https or localhost)"), this._workletPromise || (this._workletPromise = this.rawContext.audioWorklet.addModule(t1)), yield this._workletPromise;
                    });
                }
                workletsAreReady() {
                    return ni(this, void 0, void 0, function*() {
                        (yield this._workletPromise) ? this._workletPromise : Promise.resolve();
                    });
                }
                get updateInterval() {
                    return this._ticker.updateInterval;
                }
                set updateInterval(t1) {
                    this._ticker.updateInterval = t1;
                }
                get clockSource() {
                    return this._ticker.type;
                }
                set clockSource(t1) {
                    this._ticker.type = t1;
                }
                get lookAhead() {
                    return this._lookAhead;
                }
                set lookAhead(t1) {
                    this._lookAhead = t1, this.updateInterval = t1 ? t1 / 2 : .01;
                }
                get latencyHint() {
                    return this._latencyHint;
                }
                get rawContext() {
                    return this._context;
                }
                now() {
                    return this._context.currentTime + this._lookAhead;
                }
                immediate() {
                    return this._context.currentTime;
                }
                resume() {
                    return ci(this._context) ? this._context.resume() : Promise.resolve();
                }
                close() {
                    return ni(this, void 0, void 0, function*() {
                        var t1;
                        ci(this._context) && "closed" !== this.state && !this._closeStarted && (this._closeStarted = !0, yield this._context.close()), this._initialized && (t1 = this, Si.forEach((e)=>e(t1)));
                    });
                }
                getConstant(t1) {
                    if (this._constants.has(t1)) return this._constants.get(t1);
                    {
                        const e = this._context.createBuffer(1, 128, this._context.sampleRate), s1 = e.getChannelData(0);
                        for(let e = 0; e < s1.length; e++)s1[e] = t1;
                        const n = this._context.createBufferSource();
                        return n.channelCount = 1, n.channelCountMode = "explicit", n.buffer = e, n.loop = !0, n.start(0), this._constants.set(t1, n), n;
                    }
                }
                dispose() {
                    return super.dispose(), this._ticker.dispose(), this._timeouts.dispose(), Object.keys(this._constants).map((t1)=>this._constants[t1].disconnect()), this.close(), this;
                }
                _timeoutLoop() {
                    const t1 = this.now();
                    let e = this._timeouts.peek();
                    for(; this._timeouts.length && e && e.time <= t1;)e.callback(), this._timeouts.shift(), e = this._timeouts.peek();
                }
                setTimeout(t1, e) {
                    this._timeoutIds++;
                    const s1 = this.now();
                    return this._timeouts.add({
                        callback: t1,
                        id: this._timeoutIds,
                        time: s1 + e
                    }), this._timeoutIds;
                }
                clearTimeout(t1) {
                    return this._timeouts.forEach((e)=>{
                        e.id === t1 && this._timeouts.remove(e);
                    }), this;
                }
                clearInterval(t1) {
                    return this.clearTimeout(t1);
                }
                setInterval(t1, e) {
                    const s1 = ++this._timeoutIds, n = ()=>{
                        const i = this.now();
                        this._timeouts.add({
                            callback: ()=>{
                                t1(), n();
                            },
                            id: s1,
                            time: i + e
                        });
                    };
                    return n(), s1;
                }
            }
            function Oi(t1, e) {
                Ln(e) ? e.forEach((e)=>Oi(t1, e)) : Object.defineProperty(t1, e, {
                    enumerable: !0,
                    writable: !1
                });
            }
            function Mi(t1, e) {
                Ln(e) ? e.forEach((e)=>Mi(t1, e)) : Object.defineProperty(t1, e, {
                    writable: !0
                });
            }
            const Ei = ()=>{};
            class Ri extends fi {
                constructor(){
                    super(), this.name = "ToneAudioBuffer", this.onload = Ei;
                    const t1 = ui(Ri.getDefaults(), arguments, [
                        "url",
                        "onload",
                        "onerror"
                    ]);
                    this.reverse = t1.reverse, this.onload = t1.onload, zn(t1.url) ? this.load(t1.url).catch(t1.onerror) : t1.url && this.set(t1.url);
                }
                static getDefaults() {
                    return {
                        onerror: Ei,
                        onload: Ei,
                        reverse: !1
                    };
                }
                get sampleRate() {
                    return this._buffer ? this._buffer.sampleRate : Vi().sampleRate;
                }
                set(t1) {
                    return t1 instanceof Ri ? t1.loaded ? this._buffer = t1.get() : t1.onload = ()=>{
                        this.set(t1), this.onload(this);
                    } : this._buffer = t1, this._reversed && this._reverse(), this;
                }
                get() {
                    return this._buffer;
                }
                load(t1) {
                    return ni(this, void 0, void 0, function*() {
                        const e = Ri.load(t1).then((t1)=>{
                            this.set(t1), this.onload(this);
                        });
                        Ri.downloads.push(e);
                        try {
                            yield e;
                        } finally{
                            const t1 = Ri.downloads.indexOf(e);
                            Ri.downloads.splice(t1, 1);
                        }
                        return this;
                    });
                }
                dispose() {
                    return super.dispose(), this._buffer = void 0, this;
                }
                fromArray(t1) {
                    const e = Ln(t1) && t1[0].length > 0, s1 = e ? t1.length : 1, n = e ? t1[0].length : t1.length, i = Vi(), o = i.createBuffer(s1, n, i.sampleRate), r = e || 1 !== s1 ? t1 : [
                        t1
                    ];
                    for(let t1 = 0; t1 < s1; t1++)o.copyToChannel(r[t1], t1);
                    return this._buffer = o, this;
                }
                toMono(t1) {
                    if (Nn(t1)) this.fromArray(this.toArray(t1));
                    else {
                        let t1 = new Float32Array(this.length);
                        const e = this.numberOfChannels;
                        for(let s1 = 0; s1 < e; s1++){
                            const e = this.toArray(s1);
                            for(let s1 = 0; s1 < e.length; s1++)t1[s1] += e[s1];
                        }
                        t1 = t1.map((t1)=>t1 / e), this.fromArray(t1);
                    }
                    return this;
                }
                toArray(t1) {
                    if (Nn(t1)) return this.getChannelData(t1);
                    if (1 === this.numberOfChannels) return this.toArray(0);
                    {
                        const t1 = [];
                        for(let e = 0; e < this.numberOfChannels; e++)t1[e] = this.getChannelData(e);
                        return t1;
                    }
                }
                getChannelData(t1) {
                    return this._buffer ? this._buffer.getChannelData(t1) : new Float32Array(0);
                }
                slice(t1, e = this.duration) {
                    Bn(this.loaded, "Buffer is not loaded");
                    const s1 = Math.floor(t1 * this.sampleRate), n = Math.floor(e * this.sampleRate);
                    Bn(s1 < n, "The start time must be less than the end time");
                    const i = n - s1, o = Vi().createBuffer(this.numberOfChannels, i, this.sampleRate);
                    for(let t1 = 0; t1 < this.numberOfChannels; t1++)o.copyToChannel(this.getChannelData(t1).subarray(s1, n), t1);
                    return new Ri(o);
                }
                _reverse() {
                    if (this.loaded) for(let t1 = 0; t1 < this.numberOfChannels; t1++)this.getChannelData(t1).reverse();
                    return this;
                }
                get loaded() {
                    return this.length > 0;
                }
                get duration() {
                    return this._buffer ? this._buffer.duration : 0;
                }
                get length() {
                    return this._buffer ? this._buffer.length : 0;
                }
                get numberOfChannels() {
                    return this._buffer ? this._buffer.numberOfChannels : 0;
                }
                get reverse() {
                    return this._reversed;
                }
                set reverse(t1) {
                    this._reversed !== t1 && (this._reversed = t1, this._reverse());
                }
                static fromArray(t1) {
                    return (new Ri).fromArray(t1);
                }
                static fromUrl(t1) {
                    return ni(this, void 0, void 0, function*() {
                        const e = new Ri;
                        return yield e.load(t1);
                    });
                }
                static load(t1) {
                    return ni(this, void 0, void 0, function*() {
                        const e = t1.match(/\[([^\]\[]+\|.+)\]$/);
                        if (e) {
                            const s1 = e[1].split("|");
                            let n = s1[0];
                            for (const t1 of s1)if (Ri.supportsType(t1)) {
                                n = t1;
                                break;
                            }
                            t1 = t1.replace(e[0], n);
                        }
                        const s1 = "" === Ri.baseUrl || Ri.baseUrl.endsWith("/") ? Ri.baseUrl : Ri.baseUrl + "/", n = document.createElement("a");
                        n.href = s1 + t1, n.pathname = (n.pathname + n.hash).split("/").map(encodeURIComponent).join("/");
                        const i = yield fetch(n.href);
                        if (!i.ok) throw new Error(`could not load url: ${t1}`);
                        const o = yield i.arrayBuffer();
                        return yield Vi().decodeAudioData(o);
                    });
                }
                static supportsType(t1) {
                    const e = t1.split("."), s1 = e[e.length - 1];
                    return "" !== document.createElement("audio").canPlayType("audio/" + s1);
                }
                static loaded() {
                    return ni(this, void 0, void 0, function*() {
                        for(yield Promise.resolve(); Ri.downloads.length;)yield Ri.downloads[0];
                    });
                }
            }
            Ri.baseUrl = "", Ri.downloads = [];
            class qi extends Di {
                constructor(){
                    var t1, e, s1;
                    super({
                        clockSource: "offline",
                        context: ai(arguments[0]) ? arguments[0] : (t1 = arguments[0], e = arguments[1] * arguments[2], s1 = arguments[2], new Dn(t1, e, s1)),
                        lookAhead: 0,
                        updateInterval: ai(arguments[0]) ? 128 / arguments[0].sampleRate : 128 / arguments[2]
                    }), this.name = "OfflineContext", this._currentTime = 0, this.isOffline = !0, this._duration = ai(arguments[0]) ? arguments[0].length / arguments[0].sampleRate : arguments[1];
                }
                now() {
                    return this._currentTime;
                }
                get currentTime() {
                    return this._currentTime;
                }
                _renderClock(t1) {
                    return ni(this, void 0, void 0, function*() {
                        let e = 0;
                        for(; this._duration - this._currentTime >= 0;){
                            this.emit("tick"), this._currentTime += 128 / this.sampleRate, e++;
                            const s1 = Math.floor(this.sampleRate / 128);
                            t1 && e % s1 == 0 && (yield new Promise((t1)=>setTimeout(t1, 1)));
                        }
                    });
                }
                render(t1 = !0) {
                    return ni(this, void 0, void 0, function*() {
                        yield this.workletsAreReady(), yield this._renderClock(t1);
                        const e = yield this._context.startRendering();
                        return new Ri(e);
                    });
                }
                close() {
                    return Promise.resolve();
                }
            }
            const Fi = new class extends Ci {
                constructor(){
                    super(...arguments), this.lookAhead = 0, this.latencyHint = 0, this.isOffline = !1;
                }
                createAnalyser() {
                    return {};
                }
                createOscillator() {
                    return {};
                }
                createBufferSource() {
                    return {};
                }
                createBiquadFilter() {
                    return {};
                }
                createBuffer(t1, e, s1) {
                    return {};
                }
                createChannelMerger(t1) {
                    return {};
                }
                createChannelSplitter(t1) {
                    return {};
                }
                createConstantSource() {
                    return {};
                }
                createConvolver() {
                    return {};
                }
                createDelay(t1) {
                    return {};
                }
                createDynamicsCompressor() {
                    return {};
                }
                createGain() {
                    return {};
                }
                createIIRFilter(t1, e) {
                    return {};
                }
                createPanner() {
                    return {};
                }
                createPeriodicWave(t1, e, s1) {
                    return {};
                }
                createStereoPanner() {
                    return {};
                }
                createWaveShaper() {
                    return {};
                }
                createMediaStreamSource(t1) {
                    return {};
                }
                createMediaElementSource(t1) {
                    return {};
                }
                createMediaStreamDestination() {
                    return {};
                }
                decodeAudioData(t1) {
                    return Promise.resolve({});
                }
                createAudioWorkletNode(t1, e) {
                    return {};
                }
                get rawContext() {
                    return {};
                }
                addAudioWorkletModule(t1) {
                    return ni(this, void 0, void 0, function*() {
                        return Promise.resolve();
                    });
                }
                resume() {
                    return Promise.resolve();
                }
                setTimeout(t1, e) {
                    return 0;
                }
                clearTimeout(t1) {
                    return this;
                }
                setInterval(t1, e) {
                    return 0;
                }
                clearInterval(t1) {
                    return this;
                }
                getConstant(t1) {
                    return {};
                }
                get currentTime() {
                    return 0;
                }
                get state() {
                    return {};
                }
                get sampleRate() {
                    return 0;
                }
                get listener() {
                    return {};
                }
                get transport() {
                    return {};
                }
                get draw() {
                    return {};
                }
                set draw(t1) {}
                get destination() {
                    return {};
                }
                set destination(t1) {}
                now() {
                    return 0;
                }
                immediate() {
                    return 0;
                }
            };
            let Ii = Fi;
            function Vi() {
                return Ii === Fi && ei && Ni(new Di), Ii;
            }
            function Ni(t1, e = !1) {
                e && Ii.dispose(), Ii = ci(t1) ? new Di(t1) : ai(t1) ? new qi(t1) : t1;
            }
            function Pi() {
                return Ii.resume();
            }
            if (ti && !ti.TONE_SILENCE_LOGGING) {
                let t1 = "v";
                "dev" === i && (t1 = "");
                const e = ` * Tone.js ${t1}${i} * `;
                console.log(`%c${e}`, "background: #000; color: #fff");
            }
            function ji(t1) {
                return Math.pow(10, t1 / 20);
            }
            function Li(t1) {
                return Math.log(t1) / Math.LN10 * 20;
            }
            function zi(t1) {
                return Math.pow(2, t1 / 12);
            }
            let Wi = 440;
            function Bi(t1) {
                return Math.round(Ui(t1));
            }
            function Ui(t1) {
                return 69 + 12 * Math.log2(t1 / Wi);
            }
            function Gi(t1) {
                return Wi * Math.pow(2, (t1 - 69) / 12);
            }
            class Qi extends fi {
                constructor(t1, e, s1){
                    super(), this.defaultUnits = "s", this._val = e, this._units = s1, this.context = t1, this._expressions = this._getExpressions();
                }
                _getExpressions() {
                    return {
                        hz: {
                            method: (t1)=>this._frequencyToUnits(parseFloat(t1)),
                            regexp: /^(\d+(?:\.\d+)?)hz$/i
                        },
                        i: {
                            method: (t1)=>this._ticksToUnits(parseInt(t1, 10)),
                            regexp: /^(\d+)i$/i
                        },
                        m: {
                            method: (t1)=>this._beatsToUnits(parseInt(t1, 10) * this._getTimeSignature()),
                            regexp: /^(\d+)m$/i
                        },
                        n: {
                            method: (t1, e)=>{
                                const s1 = parseInt(t1, 10), n = "." === e ? 1.5 : 1;
                                return 1 === s1 ? this._beatsToUnits(this._getTimeSignature()) * n : this._beatsToUnits(4 / s1) * n;
                            },
                            regexp: /^(\d+)n(\.?)$/i
                        },
                        number: {
                            method: (t1)=>this._expressions[this.defaultUnits].method.call(this, t1),
                            regexp: /^(\d+(?:\.\d+)?)$/
                        },
                        s: {
                            method: (t1)=>this._secondsToUnits(parseFloat(t1)),
                            regexp: /^(\d+(?:\.\d+)?)s$/
                        },
                        samples: {
                            method: (t1)=>parseInt(t1, 10) / this.context.sampleRate,
                            regexp: /^(\d+)samples$/
                        },
                        t: {
                            method: (t1)=>{
                                const e = parseInt(t1, 10);
                                return this._beatsToUnits(8 / (3 * Math.floor(e)));
                            },
                            regexp: /^(\d+)t$/i
                        },
                        tr: {
                            method: (t1, e, s1)=>{
                                let n = 0;
                                return t1 && "0" !== t1 && (n += this._beatsToUnits(this._getTimeSignature() * parseFloat(t1))), e && "0" !== e && (n += this._beatsToUnits(parseFloat(e))), s1 && "0" !== s1 && (n += this._beatsToUnits(parseFloat(s1) / 4)), n;
                            },
                            regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/
                        }
                    };
                }
                valueOf() {
                    if (this._val instanceof Qi && this.fromType(this._val), Fn(this._val)) return this._noArg();
                    if (zn(this._val) && Fn(this._units)) {
                        for(const t1 in this._expressions)if (this._expressions[t1].regexp.test(this._val.trim())) {
                            this._units = t1;
                            break;
                        }
                    } else if (Pn(this._val)) {
                        let t1 = 0;
                        for(const e in this._val)if (In(this._val[e])) {
                            const s1 = this._val[e];
                            t1 += new this.constructor(this.context, e).valueOf() * s1;
                        }
                        return t1;
                    }
                    if (In(this._units)) {
                        const t1 = this._expressions[this._units], e = this._val.toString().trim().match(t1.regexp);
                        return e ? t1.method.apply(this, e.slice(1)) : t1.method.call(this, this._val);
                    }
                    return zn(this._val) ? parseFloat(this._val) : this._val;
                }
                _frequencyToUnits(t1) {
                    return 1 / t1;
                }
                _beatsToUnits(t1) {
                    return 60 / this._getBpm() * t1;
                }
                _secondsToUnits(t1) {
                    return t1;
                }
                _ticksToUnits(t1) {
                    return t1 * this._beatsToUnits(1) / this._getPPQ();
                }
                _noArg() {
                    return this._now();
                }
                _getBpm() {
                    return this.context.transport.bpm.value;
                }
                _getTimeSignature() {
                    return this.context.transport.timeSignature;
                }
                _getPPQ() {
                    return this.context.transport.PPQ;
                }
                fromType(t1) {
                    switch(this._units = void 0, this.defaultUnits){
                        case "s":
                            this._val = t1.toSeconds();
                            break;
                        case "i":
                            this._val = t1.toTicks();
                            break;
                        case "hz":
                            this._val = t1.toFrequency();
                            break;
                        case "midi":
                            this._val = t1.toMidi();
                    }
                    return this;
                }
                toFrequency() {
                    return 1 / this.toSeconds();
                }
                toSamples() {
                    return this.toSeconds() * this.context.sampleRate;
                }
                toMilliseconds() {
                    return 1e3 * this.toSeconds();
                }
            }
            class Zi extends Qi {
                constructor(){
                    super(...arguments), this.name = "TimeClass";
                }
                _getExpressions() {
                    return Object.assign(super._getExpressions(), {
                        now: {
                            method: (t1)=>this._now() + new this.constructor(this.context, t1).valueOf(),
                            regexp: /^\+(.+)/
                        },
                        quantize: {
                            method: (t1)=>{
                                const e = new Zi(this.context, t1).valueOf();
                                return this._secondsToUnits(this.context.transport.nextSubdivision(e));
                            },
                            regexp: /^@(.+)/
                        }
                    });
                }
                quantize(t1, e = 1) {
                    const s1 = new this.constructor(this.context, t1).valueOf(), n = this.valueOf();
                    return n + (Math.round(n / s1) * s1 - n) * e;
                }
                toNotation() {
                    const t1 = this.toSeconds(), e = [
                        "1m"
                    ];
                    for(let t1 = 1; t1 < 9; t1++){
                        const s1 = Math.pow(2, t1);
                        e.push(s1 + "n."), e.push(s1 + "n"), e.push(s1 + "t");
                    }
                    e.push("0");
                    let s1 = e[0], n = new Zi(this.context, e[0]).toSeconds();
                    return e.forEach((e)=>{
                        const i = new Zi(this.context, e).toSeconds();
                        Math.abs(i - t1) < Math.abs(n - t1) && (s1 = e, n = i);
                    }), s1;
                }
                toBarsBeatsSixteenths() {
                    const t1 = this._beatsToUnits(1);
                    let e = this.valueOf() / t1;
                    e = parseFloat(e.toFixed(4));
                    const s1 = Math.floor(e / this._getTimeSignature());
                    let n = e % 1 * 4;
                    e = Math.floor(e) % this._getTimeSignature();
                    const i = n.toString();
                    return i.length > 3 && (n = parseFloat(parseFloat(i).toFixed(3))), [
                        s1,
                        e,
                        n
                    ].join(":");
                }
                toTicks() {
                    const t1 = this._beatsToUnits(1);
                    return this.valueOf() / t1 * this._getPPQ();
                }
                toSeconds() {
                    return this.valueOf();
                }
                toMidi() {
                    return Bi(this.toFrequency());
                }
                _now() {
                    return this.context.now();
                }
            }
            function Xi(t1, e) {
                return new Zi(Vi(), t1, e);
            }
            class Yi extends Zi {
                constructor(){
                    super(...arguments), this.name = "Frequency", this.defaultUnits = "hz";
                }
                static get A4() {
                    return Wi;
                }
                static set A4(t1) {
                    !function(t1) {
                        Wi = t1;
                    }(t1);
                }
                _getExpressions() {
                    return Object.assign({}, super._getExpressions(), {
                        midi: {
                            regexp: /^(\d+(?:\.\d+)?midi)/,
                            method (t1) {
                                return "midi" === this.defaultUnits ? t1 : Yi.mtof(t1);
                            }
                        },
                        note: {
                            regexp: /^([a-g]{1}(?:b|#|##|x|bb|###|#x|x#|bbb)?)(-?[0-9]+)/i,
                            method (t1, e) {
                                const s1 = $i[t1.toLowerCase()] + 12 * (parseInt(e, 10) + 1);
                                return "midi" === this.defaultUnits ? s1 : Yi.mtof(s1);
                            }
                        },
                        tr: {
                            regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
                            method (t1, e, s1) {
                                let n = 1;
                                return t1 && "0" !== t1 && (n *= this._beatsToUnits(this._getTimeSignature() * parseFloat(t1))), e && "0" !== e && (n *= this._beatsToUnits(parseFloat(e))), s1 && "0" !== s1 && (n *= this._beatsToUnits(parseFloat(s1) / 4)), n;
                            }
                        }
                    });
                }
                transpose(t1) {
                    return new Yi(this.context, this.valueOf() * zi(t1));
                }
                harmonize(t1) {
                    return t1.map((t1)=>this.transpose(t1));
                }
                toMidi() {
                    return Bi(this.valueOf());
                }
                toNote() {
                    const t1 = this.toFrequency(), e = Math.log2(t1 / Yi.A4);
                    let s1 = Math.round(12 * e) + 57;
                    const n = Math.floor(s1 / 12);
                    return n < 0 && (s1 += -12 * n), Hi[s1 % 12] + n.toString();
                }
                toSeconds() {
                    return 1 / super.toSeconds();
                }
                toTicks() {
                    const t1 = this._beatsToUnits(1), e = this.valueOf() / t1;
                    return Math.floor(e * this._getPPQ());
                }
                _noArg() {
                    return 0;
                }
                _frequencyToUnits(t1) {
                    return t1;
                }
                _ticksToUnits(t1) {
                    return 1 / (60 * t1 / (this._getBpm() * this._getPPQ()));
                }
                _beatsToUnits(t1) {
                    return 1 / super._beatsToUnits(t1);
                }
                _secondsToUnits(t1) {
                    return 1 / t1;
                }
                static mtof(t1) {
                    return Gi(t1);
                }
                static ftom(t1) {
                    return Bi(t1);
                }
            }
            const $i = {
                cbbb: -3,
                cbb: -2,
                cb: -1,
                c: 0,
                "c#": 1,
                cx: 2,
                "c##": 2,
                "c###": 3,
                "cx#": 3,
                "c#x": 3,
                dbbb: -1,
                dbb: 0,
                db: 1,
                d: 2,
                "d#": 3,
                dx: 4,
                "d##": 4,
                "d###": 5,
                "dx#": 5,
                "d#x": 5,
                ebbb: 1,
                ebb: 2,
                eb: 3,
                e: 4,
                "e#": 5,
                ex: 6,
                "e##": 6,
                "e###": 7,
                "ex#": 7,
                "e#x": 7,
                fbbb: 2,
                fbb: 3,
                fb: 4,
                f: 5,
                "f#": 6,
                fx: 7,
                "f##": 7,
                "f###": 8,
                "fx#": 8,
                "f#x": 8,
                gbbb: 4,
                gbb: 5,
                gb: 6,
                g: 7,
                "g#": 8,
                gx: 9,
                "g##": 9,
                "g###": 10,
                "gx#": 10,
                "g#x": 10,
                abbb: 6,
                abb: 7,
                ab: 8,
                a: 9,
                "a#": 10,
                ax: 11,
                "a##": 11,
                "a###": 12,
                "ax#": 12,
                "a#x": 12,
                bbbb: 8,
                bbb: 9,
                bb: 10,
                b: 11,
                "b#": 12,
                bx: 13,
                "b##": 13,
                "b###": 14,
                "bx#": 14,
                "b#x": 14
            }, Hi = [
                "C",
                "C#",
                "D",
                "D#",
                "E",
                "F",
                "F#",
                "G",
                "G#",
                "A",
                "A#",
                "B"
            ];
            function Ji(t1, e) {
                return new Yi(Vi(), t1, e);
            }
            class Ki extends Zi {
                constructor(){
                    super(...arguments), this.name = "TransportTime";
                }
                _now() {
                    return this.context.transport.seconds;
                }
            }
            function to(t1, e) {
                return new Ki(Vi(), t1, e);
            }
            class eo extends fi {
                constructor(){
                    super();
                    const t1 = ui(eo.getDefaults(), arguments, [
                        "context"
                    ]);
                    this.defaultContext ? this.context = this.defaultContext : this.context = t1.context;
                }
                static getDefaults() {
                    return {
                        context: Vi()
                    };
                }
                now() {
                    return this.context.currentTime + this.context.lookAhead;
                }
                immediate() {
                    return this.context.currentTime;
                }
                get sampleTime() {
                    return 1 / this.context.sampleRate;
                }
                get blockTime() {
                    return 128 / this.context.sampleRate;
                }
                toSeconds(t1) {
                    return Yn(t1), new Zi(this.context, t1).toSeconds();
                }
                toFrequency(t1) {
                    return new Yi(this.context, t1).toFrequency();
                }
                toTicks(t1) {
                    return new Ki(this.context, t1).toTicks();
                }
                _getPartialProperties(t1) {
                    const e = this.get();
                    return Object.keys(e).forEach((s1)=>{
                        Fn(t1[s1]) && delete e[s1];
                    }), e;
                }
                get() {
                    const t1 = this.constructor.getDefaults();
                    return Object.keys(t1).forEach((e)=>{
                        if (Reflect.has(this, e)) {
                            const s1 = this[e];
                            In(s1) && In(s1.value) && In(s1.setValueAtTime) ? t1[e] = s1.value : s1 instanceof eo ? t1[e] = s1._getPartialProperties(t1[e]) : Ln(s1) || Nn(s1) || zn(s1) || jn(s1) ? t1[e] = s1 : delete t1[e];
                        }
                    }), t1;
                }
                set(t1) {
                    return Object.keys(t1).forEach((e)=>{
                        Reflect.has(this, e) && In(this[e]) && (this[e] && In(this[e].value) && In(this[e].setValueAtTime) ? this[e].value !== t1[e] && (this[e].value = t1[e]) : this[e] instanceof eo ? this[e].set(t1[e]) : this[e] = t1[e]);
                    }), this;
                }
            }
            class so extends wi {
                constructor(t1 = "stopped"){
                    super(), this.name = "StateTimeline", this._initial = t1, this.setStateAtTime(this._initial, 0);
                }
                getValueAtTime(t1) {
                    const e = this.get(t1);
                    return null !== e ? e.state : this._initial;
                }
                setStateAtTime(t1, e, s1) {
                    return Un(e, 0), this.add(Object.assign({}, s1, {
                        state: t1,
                        time: e
                    })), this;
                }
                getLastState(t1, e) {
                    for(let s1 = this._search(e); s1 >= 0; s1--){
                        const e = this._timeline[s1];
                        if (e.state === t1) return e;
                    }
                }
                getNextState(t1, e) {
                    const s1 = this._search(e);
                    if (-1 !== s1) for(let e = s1; e < this._timeline.length; e++){
                        const s1 = this._timeline[e];
                        if (s1.state === t1) return s1;
                    }
                }
            }
            class no extends eo {
                constructor(){
                    super(ui(no.getDefaults(), arguments, [
                        "param",
                        "units",
                        "convert"
                    ])), this.name = "Param", this.overridden = !1, this._minOutput = 1e-7;
                    const t1 = ui(no.getDefaults(), arguments, [
                        "param",
                        "units",
                        "convert"
                    ]);
                    for(Bn(In(t1.param) && (oi(t1.param) || t1.param instanceof no), "param must be an AudioParam"); !oi(t1.param);)t1.param = t1.param._param;
                    this._swappable = !!In(t1.swappable) && t1.swappable, this._swappable ? (this.input = this.context.createGain(), this._param = t1.param, this.input.connect(this._param)) : this._param = this.input = t1.param, this._events = new wi(1e3), this._initialValue = this._param.defaultValue, this.units = t1.units, this.convert = t1.convert, this._minValue = t1.minValue, this._maxValue = t1.maxValue, In(t1.value) && t1.value !== this._toType(this._initialValue) && this.setValueAtTime(t1.value, 0);
                }
                static getDefaults() {
                    return Object.assign(eo.getDefaults(), {
                        convert: !0,
                        units: "number"
                    });
                }
                get value() {
                    const t1 = this.now();
                    return this.getValueAtTime(t1);
                }
                set value(t1) {
                    this.cancelScheduledValues(this.now()), this.setValueAtTime(t1, this.now());
                }
                get minValue() {
                    return In(this._minValue) ? this._minValue : "time" === this.units || "frequency" === this.units || "normalRange" === this.units || "positive" === this.units || "transportTime" === this.units || "ticks" === this.units || "bpm" === this.units || "hertz" === this.units || "samples" === this.units ? 0 : "audioRange" === this.units ? -1 : "decibels" === this.units ? -1 / 0 : this._param.minValue;
                }
                get maxValue() {
                    return In(this._maxValue) ? this._maxValue : "normalRange" === this.units || "audioRange" === this.units ? 1 : this._param.maxValue;
                }
                _is(t1, e) {
                    return this.units === e;
                }
                _assertRange(t1) {
                    return In(this.maxValue) && In(this.minValue) && Un(t1, this._fromType(this.minValue), this._fromType(this.maxValue)), t1;
                }
                _fromType(t1) {
                    return this.convert && !this.overridden ? this._is(t1, "time") ? this.toSeconds(t1) : this._is(t1, "decibels") ? ji(t1) : this._is(t1, "frequency") ? this.toFrequency(t1) : t1 : this.overridden ? 0 : t1;
                }
                _toType(t1) {
                    return this.convert && "decibels" === this.units ? Li(t1) : t1;
                }
                setValueAtTime(t1, e) {
                    const s1 = this.toSeconds(e), n = this._fromType(t1);
                    return Bn(isFinite(n) && isFinite(s1), `Invalid argument(s) to setValueAtTime: ${JSON.stringify(t1)}, ${JSON.stringify(e)}`), this._assertRange(n), this.log(this.units, "setValueAtTime", t1, s1), this._events.add({
                        time: s1,
                        type: "setValueAtTime",
                        value: n
                    }), this._param.setValueAtTime(n, s1), this;
                }
                getValueAtTime(t1) {
                    const e = Math.max(this.toSeconds(t1), 0), s1 = this._events.getAfter(e), n = this._events.get(e);
                    let i = this._initialValue;
                    if (null === n) i = this._initialValue;
                    else if ("setTargetAtTime" !== n.type || null !== s1 && "setValueAtTime" !== s1.type) {
                        if (null === s1) i = n.value;
                        else if ("linearRampToValueAtTime" === s1.type || "exponentialRampToValueAtTime" === s1.type) {
                            let t1 = n.value;
                            if ("setTargetAtTime" === n.type) {
                                const e = this._events.getBefore(n.time);
                                t1 = null === e ? this._initialValue : e.value;
                            }
                            i = "linearRampToValueAtTime" === s1.type ? this._linearInterpolate(n.time, t1, s1.time, s1.value, e) : this._exponentialInterpolate(n.time, t1, s1.time, s1.value, e);
                        } else i = n.value;
                    } else {
                        const t1 = this._events.getBefore(n.time);
                        let s1;
                        s1 = null === t1 ? this._initialValue : t1.value, "setTargetAtTime" === n.type && (i = this._exponentialApproach(n.time, s1, n.value, n.constant, e));
                    }
                    return this._toType(i);
                }
                setRampPoint(t1) {
                    t1 = this.toSeconds(t1);
                    let e = this.getValueAtTime(t1);
                    return this.cancelAndHoldAtTime(t1), 0 === this._fromType(e) && (e = this._toType(this._minOutput)), this.setValueAtTime(e, t1), this;
                }
                linearRampToValueAtTime(t1, e) {
                    const s1 = this._fromType(t1), n = this.toSeconds(e);
                    return Bn(isFinite(s1) && isFinite(n), `Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(t1)}, ${JSON.stringify(e)}`), this._assertRange(s1), this._events.add({
                        time: n,
                        type: "linearRampToValueAtTime",
                        value: s1
                    }), this.log(this.units, "linearRampToValueAtTime", t1, n), this._param.linearRampToValueAtTime(s1, n), this;
                }
                exponentialRampToValueAtTime(t1, e) {
                    let s1 = this._fromType(t1);
                    s1 = yi(s1, 0) ? this._minOutput : s1, this._assertRange(s1);
                    const n = this.toSeconds(e);
                    return Bn(isFinite(s1) && isFinite(n), `Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(t1)}, ${JSON.stringify(e)}`), this._events.add({
                        time: n,
                        type: "exponentialRampToValueAtTime",
                        value: s1
                    }), this.log(this.units, "exponentialRampToValueAtTime", t1, n), this._param.exponentialRampToValueAtTime(s1, n), this;
                }
                exponentialRampTo(t1, e, s1) {
                    return s1 = this.toSeconds(s1), this.setRampPoint(s1), this.exponentialRampToValueAtTime(t1, s1 + this.toSeconds(e)), this;
                }
                linearRampTo(t1, e, s1) {
                    return s1 = this.toSeconds(s1), this.setRampPoint(s1), this.linearRampToValueAtTime(t1, s1 + this.toSeconds(e)), this;
                }
                targetRampTo(t1, e, s1) {
                    return s1 = this.toSeconds(s1), this.setRampPoint(s1), this.exponentialApproachValueAtTime(t1, s1, e), this;
                }
                exponentialApproachValueAtTime(t1, e, s1) {
                    e = this.toSeconds(e), s1 = this.toSeconds(s1);
                    const n = Math.log(s1 + 1) / Math.log(200);
                    return this.setTargetAtTime(t1, e, n), this.cancelAndHoldAtTime(e + .9 * s1), this.linearRampToValueAtTime(t1, e + s1), this;
                }
                setTargetAtTime(t1, e, s1) {
                    const n = this._fromType(t1);
                    Bn(isFinite(s1) && s1 > 0, "timeConstant must be a number greater than 0");
                    const i = this.toSeconds(e);
                    return this._assertRange(n), Bn(isFinite(n) && isFinite(i), `Invalid argument(s) to setTargetAtTime: ${JSON.stringify(t1)}, ${JSON.stringify(e)}`), this._events.add({
                        constant: s1,
                        time: i,
                        type: "setTargetAtTime",
                        value: n
                    }), this.log(this.units, "setTargetAtTime", t1, i, s1), this._param.setTargetAtTime(n, i, s1), this;
                }
                setValueCurveAtTime(t1, e, s1, n = 1) {
                    s1 = this.toSeconds(s1), e = this.toSeconds(e);
                    const i = this._fromType(t1[0]) * n;
                    this.setValueAtTime(this._toType(i), e);
                    const o = s1 / (t1.length - 1);
                    for(let s1 = 1; s1 < t1.length; s1++){
                        const i = this._fromType(t1[s1]) * n;
                        this.linearRampToValueAtTime(this._toType(i), e + s1 * o);
                    }
                    return this;
                }
                cancelScheduledValues(t1) {
                    const e = this.toSeconds(t1);
                    return Bn(isFinite(e), `Invalid argument to cancelScheduledValues: ${JSON.stringify(t1)}`), this._events.cancel(e), this._param.cancelScheduledValues(e), this.log(this.units, "cancelScheduledValues", e), this;
                }
                cancelAndHoldAtTime(t1) {
                    const e = this.toSeconds(t1), s1 = this._fromType(this.getValueAtTime(e));
                    Bn(isFinite(e), `Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(t1)}`), this.log(this.units, "cancelAndHoldAtTime", e, "value=" + s1);
                    const n = this._events.get(e), i = this._events.getAfter(e);
                    return n && yi(n.time, e) ? i ? (this._param.cancelScheduledValues(i.time), this._events.cancel(i.time)) : (this._param.cancelAndHoldAtTime(e), this._events.cancel(e + this.sampleTime)) : i && (this._param.cancelScheduledValues(i.time), this._events.cancel(i.time), "linearRampToValueAtTime" === i.type ? this.linearRampToValueAtTime(this._toType(s1), e) : "exponentialRampToValueAtTime" === i.type && this.exponentialRampToValueAtTime(this._toType(s1), e)), this._events.add({
                        time: e,
                        type: "setValueAtTime",
                        value: s1
                    }), this._param.setValueAtTime(s1, e), this;
                }
                rampTo(t1, e = .1, s1) {
                    return "frequency" === this.units || "bpm" === this.units || "decibels" === this.units ? this.exponentialRampTo(t1, e, s1) : this.linearRampTo(t1, e, s1), this;
                }
                apply(t1) {
                    const e = this.context.currentTime;
                    t1.setValueAtTime(this.getValueAtTime(e), e);
                    const s1 = this._events.get(e);
                    if (s1 && "setTargetAtTime" === s1.type) {
                        const n = this._events.getAfter(s1.time), i = n ? n.time : e + 2, o = (i - e) / 10;
                        for(let s1 = e; s1 < i; s1 += o)t1.linearRampToValueAtTime(this.getValueAtTime(s1), s1);
                    }
                    return this._events.forEachAfter(this.context.currentTime, (e)=>{
                        "cancelScheduledValues" === e.type ? t1.cancelScheduledValues(e.time) : "setTargetAtTime" === e.type ? t1.setTargetAtTime(e.value, e.time, e.constant) : t1[e.type](e.value, e.time);
                    }), this;
                }
                setParam(t1) {
                    Bn(this._swappable, "The Param must be assigned as 'swappable' in the constructor");
                    const e = this.input;
                    return e.disconnect(this._param), this.apply(t1), this._param = t1, e.connect(this._param), this;
                }
                dispose() {
                    return super.dispose(), this._events.dispose(), this;
                }
                get defaultValue() {
                    return this._toType(this._param.defaultValue);
                }
                _exponentialApproach(t1, e, s1, n, i) {
                    return s1 + (e - s1) * Math.exp(-(i - t1) / n);
                }
                _linearInterpolate(t1, e, s1, n, i) {
                    return e + (i - t1) / (s1 - t1) * (n - e);
                }
                _exponentialInterpolate(t1, e, s1, n, i) {
                    return e * Math.pow(n / e, (i - t1) / (s1 - t1));
                }
            }
            class io extends eo {
                constructor(){
                    super(...arguments), this._internalChannels = [];
                }
                get numberOfInputs() {
                    return In(this.input) ? oi(this.input) || this.input instanceof no ? 1 : this.input.numberOfInputs : 0;
                }
                get numberOfOutputs() {
                    return In(this.output) ? this.output.numberOfOutputs : 0;
                }
                _isAudioNode(t1) {
                    return In(t1) && (t1 instanceof io || ri(t1));
                }
                _getInternalNodes() {
                    const t1 = this._internalChannels.slice(0);
                    return this._isAudioNode(this.input) && t1.push(this.input), this._isAudioNode(this.output) && this.input !== this.output && t1.push(this.output), t1;
                }
                _setChannelProperties(t1) {
                    this._getInternalNodes().forEach((e)=>{
                        e.channelCount = t1.channelCount, e.channelCountMode = t1.channelCountMode, e.channelInterpretation = t1.channelInterpretation;
                    });
                }
                _getChannelProperties() {
                    const t1 = this._getInternalNodes();
                    Bn(t1.length > 0, "ToneAudioNode does not have any internal nodes");
                    const e = t1[0];
                    return {
                        channelCount: e.channelCount,
                        channelCountMode: e.channelCountMode,
                        channelInterpretation: e.channelInterpretation
                    };
                }
                get channelCount() {
                    return this._getChannelProperties().channelCount;
                }
                set channelCount(t1) {
                    const e = this._getChannelProperties();
                    this._setChannelProperties(Object.assign(e, {
                        channelCount: t1
                    }));
                }
                get channelCountMode() {
                    return this._getChannelProperties().channelCountMode;
                }
                set channelCountMode(t1) {
                    const e = this._getChannelProperties();
                    this._setChannelProperties(Object.assign(e, {
                        channelCountMode: t1
                    }));
                }
                get channelInterpretation() {
                    return this._getChannelProperties().channelInterpretation;
                }
                set channelInterpretation(t1) {
                    const e = this._getChannelProperties();
                    this._setChannelProperties(Object.assign(e, {
                        channelInterpretation: t1
                    }));
                }
                connect(t1, e = 0, s1 = 0) {
                    return ro(this, t1, e, s1), this;
                }
                toDestination() {
                    return this.connect(this.context.destination), this;
                }
                toMaster() {
                    return Kn("toMaster() has been renamed toDestination()"), this.toDestination();
                }
                disconnect(t1, e = 0, s1 = 0) {
                    return ao(this, t1, e, s1), this;
                }
                chain(...t1) {
                    return oo(this, ...t1), this;
                }
                fan(...t1) {
                    return t1.forEach((t1)=>this.connect(t1)), this;
                }
                dispose() {
                    return super.dispose(), In(this.input) && (this.input instanceof io ? this.input.dispose() : ri(this.input) && this.input.disconnect()), In(this.output) && (this.output instanceof io ? this.output.dispose() : ri(this.output) && this.output.disconnect()), this._internalChannels = [], this;
                }
            }
            function oo(...t1) {
                const e = t1.shift();
                t1.reduce((t1, e)=>(t1 instanceof io ? t1.connect(e) : ri(t1) && ro(t1, e), e), e);
            }
            function ro(t1, e, s1 = 0, n = 0) {
                for(Bn(In(t1), "Cannot connect from undefined node"), Bn(In(e), "Cannot connect to undefined node"), (e instanceof io || ri(e)) && Bn(e.numberOfInputs > 0, "Cannot connect to node with no inputs"), Bn(t1.numberOfOutputs > 0, "Cannot connect from node with no outputs"); e instanceof io || e instanceof no;)In(e.input) && (e = e.input);
                for(; t1 instanceof io;)In(t1.output) && (t1 = t1.output);
                oi(e) ? t1.connect(e, s1) : t1.connect(e, s1, n);
            }
            function ao(t1, e, s1 = 0, n = 0) {
                if (In(e)) for(; e instanceof io;)e = e.input;
                for(; !ri(t1);)In(t1.output) && (t1 = t1.output);
                oi(e) ? t1.disconnect(e, s1) : ri(e) ? t1.disconnect(e, s1, n) : t1.disconnect();
            }
            function co(...t1) {
                const e = t1.pop();
                In(e) && t1.forEach((t1)=>ro(t1, e));
            }
            class ho extends io {
                constructor(){
                    super(ui(ho.getDefaults(), arguments, [
                        "gain",
                        "units"
                    ])), this.name = "Gain", this._gainNode = this.context.createGain(), this.input = this._gainNode, this.output = this._gainNode;
                    const t1 = ui(ho.getDefaults(), arguments, [
                        "gain",
                        "units"
                    ]);
                    this.gain = new no({
                        context: this.context,
                        convert: t1.convert,
                        param: this._gainNode.gain,
                        units: t1.units,
                        value: t1.gain,
                        minValue: t1.minValue,
                        maxValue: t1.maxValue
                    }), Oi(this, "gain");
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        convert: !0,
                        gain: 1,
                        units: "gain"
                    });
                }
                dispose() {
                    return super.dispose(), this._gainNode.disconnect(), this.gain.dispose(), this;
                }
            }
            class lo extends io {
                constructor(t1){
                    super(t1), this.onended = Ei, this._startTime = -1, this._stopTime = -1, this._timeout = -1, this.output = new ho({
                        context: this.context,
                        gain: 0
                    }), this._gainNode = this.output, this.getStateAtTime = function(t1) {
                        const e = this.toSeconds(t1);
                        return -1 !== this._startTime && e >= this._startTime && (-1 === this._stopTime || e <= this._stopTime) ? "started" : "stopped";
                    }, this._fadeIn = t1.fadeIn, this._fadeOut = t1.fadeOut, this._curve = t1.curve, this.onended = t1.onended;
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        curve: "linear",
                        fadeIn: 0,
                        fadeOut: 0,
                        onended: Ei
                    });
                }
                _startGain(t1, e = 1) {
                    Bn(-1 === this._startTime, "Source cannot be started more than once");
                    const s1 = this.toSeconds(this._fadeIn);
                    return this._startTime = t1 + s1, this._startTime = Math.max(this._startTime, this.context.currentTime), s1 > 0 ? (this._gainNode.gain.setValueAtTime(0, t1), "linear" === this._curve ? this._gainNode.gain.linearRampToValueAtTime(e, t1 + s1) : this._gainNode.gain.exponentialApproachValueAtTime(e, t1, s1)) : this._gainNode.gain.setValueAtTime(e, t1), this;
                }
                stop(t1) {
                    return this.log("stop", t1), this._stopGain(this.toSeconds(t1)), this;
                }
                _stopGain(t1) {
                    Bn(-1 !== this._startTime, "'start' must be called before 'stop'"), this.cancelStop();
                    const e = this.toSeconds(this._fadeOut);
                    return this._stopTime = this.toSeconds(t1) + e, this._stopTime = Math.max(this._stopTime, this.now()), e > 0 ? "linear" === this._curve ? this._gainNode.gain.linearRampTo(0, e, t1) : this._gainNode.gain.targetRampTo(0, e, t1) : (this._gainNode.gain.cancelAndHoldAtTime(t1), this._gainNode.gain.setValueAtTime(0, t1)), this.context.clearTimeout(this._timeout), this._timeout = this.context.setTimeout(()=>{
                        const t1 = "exponential" === this._curve ? 2 * e : 0;
                        this._stopSource(this.now() + t1), this._onended();
                    }, this._stopTime - this.context.currentTime), this;
                }
                _onended() {
                    if (this.onended !== Ei && (this.onended(this), this.onended = Ei, !this.context.isOffline)) {
                        const t1 = ()=>this.dispose();
                        void 0 !== window.requestIdleCallback ? window.requestIdleCallback(t1) : setTimeout(t1, 1e3);
                    }
                }
                get state() {
                    return this.getStateAtTime(this.now());
                }
                cancelStop() {
                    return this.log("cancelStop"), Bn(-1 !== this._startTime, "Source is not started"), this._gainNode.gain.cancelScheduledValues(this._startTime + this.sampleTime), this.context.clearTimeout(this._timeout), this._stopTime = -1, this;
                }
                dispose() {
                    return super.dispose(), this._gainNode.dispose(), this.onended = Ei, this;
                }
            }
            class uo extends lo {
                constructor(){
                    super(ui(uo.getDefaults(), arguments, [
                        "offset"
                    ])), this.name = "ToneConstantSource", this._source = this.context.createConstantSource();
                    const t1 = ui(uo.getDefaults(), arguments, [
                        "offset"
                    ]);
                    ro(this._source, this._gainNode), this.offset = new no({
                        context: this.context,
                        convert: t1.convert,
                        param: this._source.offset,
                        units: t1.units,
                        value: t1.offset,
                        minValue: t1.minValue,
                        maxValue: t1.maxValue
                    });
                }
                static getDefaults() {
                    return Object.assign(lo.getDefaults(), {
                        convert: !0,
                        offset: 1,
                        units: "number"
                    });
                }
                start(t1) {
                    const e = this.toSeconds(t1);
                    return this.log("start", e), this._startGain(e), this._source.start(e), this;
                }
                _stopSource(t1) {
                    this._source.stop(t1);
                }
                dispose() {
                    return super.dispose(), "started" === this.state && this.stop(), this._source.disconnect(), this.offset.dispose(), this;
                }
            }
            class po extends io {
                constructor(){
                    super(ui(po.getDefaults(), arguments, [
                        "value",
                        "units"
                    ])), this.name = "Signal", this.override = !0;
                    const t1 = ui(po.getDefaults(), arguments, [
                        "value",
                        "units"
                    ]);
                    this.output = this._constantSource = new uo({
                        context: this.context,
                        convert: t1.convert,
                        offset: t1.value,
                        units: t1.units,
                        minValue: t1.minValue,
                        maxValue: t1.maxValue
                    }), this._constantSource.start(0), this.input = this._param = this._constantSource.offset;
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        convert: !0,
                        units: "number",
                        value: 0
                    });
                }
                connect(t1, e = 0, s1 = 0) {
                    return fo(this, t1, e, s1), this;
                }
                dispose() {
                    return super.dispose(), this._param.dispose(), this._constantSource.dispose(), this;
                }
                setValueAtTime(t1, e) {
                    return this._param.setValueAtTime(t1, e), this;
                }
                getValueAtTime(t1) {
                    return this._param.getValueAtTime(t1);
                }
                setRampPoint(t1) {
                    return this._param.setRampPoint(t1), this;
                }
                linearRampToValueAtTime(t1, e) {
                    return this._param.linearRampToValueAtTime(t1, e), this;
                }
                exponentialRampToValueAtTime(t1, e) {
                    return this._param.exponentialRampToValueAtTime(t1, e), this;
                }
                exponentialRampTo(t1, e, s1) {
                    return this._param.exponentialRampTo(t1, e, s1), this;
                }
                linearRampTo(t1, e, s1) {
                    return this._param.linearRampTo(t1, e, s1), this;
                }
                targetRampTo(t1, e, s1) {
                    return this._param.targetRampTo(t1, e, s1), this;
                }
                exponentialApproachValueAtTime(t1, e, s1) {
                    return this._param.exponentialApproachValueAtTime(t1, e, s1), this;
                }
                setTargetAtTime(t1, e, s1) {
                    return this._param.setTargetAtTime(t1, e, s1), this;
                }
                setValueCurveAtTime(t1, e, s1, n) {
                    return this._param.setValueCurveAtTime(t1, e, s1, n), this;
                }
                cancelScheduledValues(t1) {
                    return this._param.cancelScheduledValues(t1), this;
                }
                cancelAndHoldAtTime(t1) {
                    return this._param.cancelAndHoldAtTime(t1), this;
                }
                rampTo(t1, e, s1) {
                    return this._param.rampTo(t1, e, s1), this;
                }
                get value() {
                    return this._param.value;
                }
                set value(t1) {
                    this._param.value = t1;
                }
                get convert() {
                    return this._param.convert;
                }
                set convert(t1) {
                    this._param.convert = t1;
                }
                get units() {
                    return this._param.units;
                }
                get overridden() {
                    return this._param.overridden;
                }
                set overridden(t1) {
                    this._param.overridden = t1;
                }
                get maxValue() {
                    return this._param.maxValue;
                }
                get minValue() {
                    return this._param.minValue;
                }
                apply(t1) {
                    return this._param.apply(t1), this;
                }
            }
            function fo(t1, e, s1, n) {
                (e instanceof no || oi(e) || e instanceof po && e.override) && (e.cancelScheduledValues(0), e.setValueAtTime(0, 0), e instanceof po && (e.overridden = !0)), ro(t1, e, s1, n);
            }
            class _o extends no {
                constructor(){
                    super(ui(_o.getDefaults(), arguments, [
                        "value"
                    ])), this.name = "TickParam", this._events = new wi(1 / 0), this._multiplier = 1;
                    const t1 = ui(_o.getDefaults(), arguments, [
                        "value"
                    ]);
                    this._multiplier = t1.multiplier, this._events.cancel(0), this._events.add({
                        ticks: 0,
                        time: 0,
                        type: "setValueAtTime",
                        value: this._fromType(t1.value)
                    }), this.setValueAtTime(t1.value, 0);
                }
                static getDefaults() {
                    return Object.assign(no.getDefaults(), {
                        multiplier: 1,
                        units: "hertz",
                        value: 1
                    });
                }
                setTargetAtTime(t1, e, s1) {
                    e = this.toSeconds(e), this.setRampPoint(e);
                    const n = this._fromType(t1), i = this._events.get(e), o = Math.round(Math.max(1 / s1, 1));
                    for(let t1 = 0; t1 <= o; t1++){
                        const o = s1 * t1 + e, r = this._exponentialApproach(i.time, i.value, n, s1, o);
                        this.linearRampToValueAtTime(this._toType(r), o);
                    }
                    return this;
                }
                setValueAtTime(t1, e) {
                    const s1 = this.toSeconds(e);
                    super.setValueAtTime(t1, e);
                    const n = this._events.get(s1), i = this._events.previousEvent(n), o = this._getTicksUntilEvent(i, s1);
                    return n.ticks = Math.max(o, 0), this;
                }
                linearRampToValueAtTime(t1, e) {
                    const s1 = this.toSeconds(e);
                    super.linearRampToValueAtTime(t1, e);
                    const n = this._events.get(s1), i = this._events.previousEvent(n), o = this._getTicksUntilEvent(i, s1);
                    return n.ticks = Math.max(o, 0), this;
                }
                exponentialRampToValueAtTime(t1, e) {
                    e = this.toSeconds(e);
                    const s1 = this._fromType(t1), n = this._events.get(e), i = Math.round(Math.max(10 * (e - n.time), 1)), o = (e - n.time) / i;
                    for(let t1 = 0; t1 <= i; t1++){
                        const i = o * t1 + n.time, r = this._exponentialInterpolate(n.time, n.value, e, s1, i);
                        this.linearRampToValueAtTime(this._toType(r), i);
                    }
                    return this;
                }
                _getTicksUntilEvent(t1, e) {
                    if (null === t1) t1 = {
                        ticks: 0,
                        time: 0,
                        type: "setValueAtTime",
                        value: 0
                    };
                    else if (Fn(t1.ticks)) {
                        const e = this._events.previousEvent(t1);
                        t1.ticks = this._getTicksUntilEvent(e, t1.time);
                    }
                    const s1 = this._fromType(this.getValueAtTime(t1.time));
                    let n = this._fromType(this.getValueAtTime(e));
                    const i = this._events.get(e);
                    return i && i.time === e && "setValueAtTime" === i.type && (n = this._fromType(this.getValueAtTime(e - this.sampleTime))), .5 * (e - t1.time) * (s1 + n) + t1.ticks;
                }
                getTicksAtTime(t1) {
                    const e = this.toSeconds(t1), s1 = this._events.get(e);
                    return Math.max(this._getTicksUntilEvent(s1, e), 0);
                }
                getDurationOfTicks(t1, e) {
                    const s1 = this.toSeconds(e), n = this.getTicksAtTime(e);
                    return this.getTimeOfTick(n + t1) - s1;
                }
                getTimeOfTick(t1) {
                    const e = this._events.get(t1, "ticks"), s1 = this._events.getAfter(t1, "ticks");
                    if (e && e.ticks === t1) return e.time;
                    if (e && s1 && "linearRampToValueAtTime" === s1.type && e.value !== s1.value) {
                        const n = this._fromType(this.getValueAtTime(e.time)), i = (this._fromType(this.getValueAtTime(s1.time)) - n) / (s1.time - e.time), o = Math.sqrt(Math.pow(n, 2) - 2 * i * (e.ticks - t1)), r = (-n + o) / i, a = (-n - o) / i;
                        return (r > 0 ? r : a) + e.time;
                    }
                    return e ? 0 === e.value ? 1 / 0 : e.time + (t1 - e.ticks) / e.value : t1 / this._initialValue;
                }
                ticksToTime(t1, e) {
                    return this.getDurationOfTicks(t1, e);
                }
                timeToTicks(t1, e) {
                    const s1 = this.toSeconds(e), n = this.toSeconds(t1), i = this.getTicksAtTime(s1);
                    return this.getTicksAtTime(s1 + n) - i;
                }
                _fromType(t1) {
                    return "bpm" === this.units && this.multiplier ? 1 / (60 / t1 / this.multiplier) : super._fromType(t1);
                }
                _toType(t1) {
                    return "bpm" === this.units && this.multiplier ? t1 / this.multiplier * 60 : super._toType(t1);
                }
                get multiplier() {
                    return this._multiplier;
                }
                set multiplier(t1) {
                    const e = this.value;
                    this._multiplier = t1, this.cancelScheduledValues(0), this.setValueAtTime(e, 0);
                }
            }
            class mo extends po {
                constructor(){
                    super(ui(mo.getDefaults(), arguments, [
                        "value"
                    ])), this.name = "TickSignal";
                    const t1 = ui(mo.getDefaults(), arguments, [
                        "value"
                    ]);
                    this.input = this._param = new _o({
                        context: this.context,
                        convert: t1.convert,
                        multiplier: t1.multiplier,
                        param: this._constantSource.offset,
                        units: t1.units,
                        value: t1.value
                    });
                }
                static getDefaults() {
                    return Object.assign(po.getDefaults(), {
                        multiplier: 1,
                        units: "hertz",
                        value: 1
                    });
                }
                ticksToTime(t1, e) {
                    return this._param.ticksToTime(t1, e);
                }
                timeToTicks(t1, e) {
                    return this._param.timeToTicks(t1, e);
                }
                getTimeOfTick(t1) {
                    return this._param.getTimeOfTick(t1);
                }
                getDurationOfTicks(t1, e) {
                    return this._param.getDurationOfTicks(t1, e);
                }
                getTicksAtTime(t1) {
                    return this._param.getTicksAtTime(t1);
                }
                get multiplier() {
                    return this._param.multiplier;
                }
                set multiplier(t1) {
                    this._param.multiplier = t1;
                }
                dispose() {
                    return super.dispose(), this._param.dispose(), this;
                }
            }
            class go extends eo {
                constructor(){
                    super(ui(go.getDefaults(), arguments, [
                        "frequency"
                    ])), this.name = "TickSource", this._state = new so, this._tickOffset = new wi, this._ticksAtTime = new wi, this._secondsAtTime = new wi;
                    const t1 = ui(go.getDefaults(), arguments, [
                        "frequency"
                    ]);
                    this.frequency = new mo({
                        context: this.context,
                        units: t1.units,
                        value: t1.frequency
                    }), Oi(this, "frequency"), this._state.setStateAtTime("stopped", 0), this.setTicksAtTime(0, 0);
                }
                static getDefaults() {
                    return Object.assign({
                        frequency: 1,
                        units: "hertz"
                    }, eo.getDefaults());
                }
                get state() {
                    return this.getStateAtTime(this.now());
                }
                start(t1, e) {
                    const s1 = this.toSeconds(t1);
                    return "started" !== this._state.getValueAtTime(s1) && (this._state.setStateAtTime("started", s1), In(e) && this.setTicksAtTime(e, s1), this._ticksAtTime.cancel(s1), this._secondsAtTime.cancel(s1)), this;
                }
                stop(t1) {
                    const e = this.toSeconds(t1);
                    if ("stopped" === this._state.getValueAtTime(e)) {
                        const t1 = this._state.get(e);
                        t1 && t1.time > 0 && (this._tickOffset.cancel(t1.time), this._state.cancel(t1.time));
                    }
                    return this._state.cancel(e), this._state.setStateAtTime("stopped", e), this.setTicksAtTime(0, e), this._ticksAtTime.cancel(e), this._secondsAtTime.cancel(e), this;
                }
                pause(t1) {
                    const e = this.toSeconds(t1);
                    return "started" === this._state.getValueAtTime(e) && (this._state.setStateAtTime("paused", e), this._ticksAtTime.cancel(e), this._secondsAtTime.cancel(e)), this;
                }
                cancel(t1) {
                    return t1 = this.toSeconds(t1), this._state.cancel(t1), this._tickOffset.cancel(t1), this._ticksAtTime.cancel(t1), this._secondsAtTime.cancel(t1), this;
                }
                getTicksAtTime(t1) {
                    const e = this.toSeconds(t1), s1 = this._state.getLastState("stopped", e), n = this._ticksAtTime.get(e), i = {
                        state: "paused",
                        time: e
                    };
                    this._state.add(i);
                    let o = n || s1, r = n ? n.ticks : 0, a = null;
                    return this._state.forEachBetween(o.time, e + this.sampleTime, (t1)=>{
                        let e = o.time;
                        const s1 = this._tickOffset.get(t1.time);
                        s1 && s1.time >= o.time && (r = s1.ticks, e = s1.time), "started" === o.state && "started" !== t1.state && (r += this.frequency.getTicksAtTime(t1.time) - this.frequency.getTicksAtTime(e), t1.time !== i.time && (a = {
                            state: t1.state,
                            time: t1.time,
                            ticks: r
                        })), o = t1;
                    }), this._state.remove(i), a && this._ticksAtTime.add(a), r;
                }
                get ticks() {
                    return this.getTicksAtTime(this.now());
                }
                set ticks(t1) {
                    this.setTicksAtTime(t1, this.now());
                }
                get seconds() {
                    return this.getSecondsAtTime(this.now());
                }
                set seconds(t1) {
                    const e = this.now(), s1 = this.frequency.timeToTicks(t1, e);
                    this.setTicksAtTime(s1, e);
                }
                getSecondsAtTime(t1) {
                    t1 = this.toSeconds(t1);
                    const e = this._state.getLastState("stopped", t1), s1 = {
                        state: "paused",
                        time: t1
                    };
                    this._state.add(s1);
                    const n = this._secondsAtTime.get(t1);
                    let i = n || e, o = n ? n.seconds : 0, r = null;
                    return this._state.forEachBetween(i.time, t1 + this.sampleTime, (t1)=>{
                        let e = i.time;
                        const n = this._tickOffset.get(t1.time);
                        n && n.time >= i.time && (o = n.seconds, e = n.time), "started" === i.state && "started" !== t1.state && (o += t1.time - e, t1.time !== s1.time && (r = {
                            state: t1.state,
                            time: t1.time,
                            seconds: o
                        })), i = t1;
                    }), this._state.remove(s1), r && this._secondsAtTime.add(r), o;
                }
                setTicksAtTime(t1, e) {
                    return e = this.toSeconds(e), this._tickOffset.cancel(e), this._tickOffset.add({
                        seconds: this.frequency.getDurationOfTicks(t1, e),
                        ticks: t1,
                        time: e
                    }), this._ticksAtTime.cancel(e), this._secondsAtTime.cancel(e), this;
                }
                getStateAtTime(t1) {
                    return t1 = this.toSeconds(t1), this._state.getValueAtTime(t1);
                }
                getTimeOfTick(t1, e = this.now()) {
                    const s1 = this._tickOffset.get(e), n = this._state.get(e), i = Math.max(s1.time, n.time), o = this.frequency.getTicksAtTime(i) + t1 - s1.ticks;
                    return this.frequency.getTimeOfTick(o);
                }
                forEachTickBetween(t1, e, s1) {
                    let n = this._state.get(t1);
                    this._state.forEachBetween(t1, e, (e)=>{
                        n && "started" === n.state && "started" !== e.state && this.forEachTickBetween(Math.max(n.time, t1), e.time - this.sampleTime, s1), n = e;
                    });
                    let i = null;
                    if (n && "started" === n.state) {
                        const o = Math.max(n.time, t1), r = this.frequency.getTicksAtTime(o), a = r - this.frequency.getTicksAtTime(n.time);
                        let c = Math.ceil(a) - a;
                        c = yi(c, 1) ? 0 : c;
                        let h = this.frequency.getTimeOfTick(r + c);
                        for(; h < e;){
                            try {
                                s1(h, Math.round(this.getTicksAtTime(h)));
                            } catch (t1) {
                                i = t1;
                                break;
                            }
                            h += this.frequency.getDurationOfTicks(1, h);
                        }
                    }
                    if (i) throw i;
                    return this;
                }
                dispose() {
                    return super.dispose(), this._state.dispose(), this._tickOffset.dispose(), this._ticksAtTime.dispose(), this._secondsAtTime.dispose(), this.frequency.dispose(), this;
                }
            }
            class vo extends eo {
                constructor(){
                    super(ui(vo.getDefaults(), arguments, [
                        "callback",
                        "frequency"
                    ])), this.name = "Clock", this.callback = Ei, this._lastUpdate = 0, this._state = new so("stopped"), this._boundLoop = this._loop.bind(this);
                    const t1 = ui(vo.getDefaults(), arguments, [
                        "callback",
                        "frequency"
                    ]);
                    this.callback = t1.callback, this._tickSource = new go({
                        context: this.context,
                        frequency: t1.frequency,
                        units: t1.units
                    }), this._lastUpdate = 0, this.frequency = this._tickSource.frequency, Oi(this, "frequency"), this._state.setStateAtTime("stopped", 0), this.context.on("tick", this._boundLoop);
                }
                static getDefaults() {
                    return Object.assign(eo.getDefaults(), {
                        callback: Ei,
                        frequency: 1,
                        units: "hertz"
                    });
                }
                get state() {
                    return this._state.getValueAtTime(this.now());
                }
                start(t1, e) {
                    Gn(this.context);
                    const s1 = this.toSeconds(t1);
                    return this.log("start", s1), "started" !== this._state.getValueAtTime(s1) && (this._state.setStateAtTime("started", s1), this._tickSource.start(s1, e), s1 < this._lastUpdate && this.emit("start", s1, e)), this;
                }
                stop(t1) {
                    const e = this.toSeconds(t1);
                    return this.log("stop", e), this._state.cancel(e), this._state.setStateAtTime("stopped", e), this._tickSource.stop(e), e < this._lastUpdate && this.emit("stop", e), this;
                }
                pause(t1) {
                    const e = this.toSeconds(t1);
                    return "started" === this._state.getValueAtTime(e) && (this._state.setStateAtTime("paused", e), this._tickSource.pause(e), e < this._lastUpdate && this.emit("pause", e)), this;
                }
                get ticks() {
                    return Math.ceil(this.getTicksAtTime(this.now()));
                }
                set ticks(t1) {
                    this._tickSource.ticks = t1;
                }
                get seconds() {
                    return this._tickSource.seconds;
                }
                set seconds(t1) {
                    this._tickSource.seconds = t1;
                }
                getSecondsAtTime(t1) {
                    return this._tickSource.getSecondsAtTime(t1);
                }
                setTicksAtTime(t1, e) {
                    return this._tickSource.setTicksAtTime(t1, e), this;
                }
                getTimeOfTick(t1, e = this.now()) {
                    return this._tickSource.getTimeOfTick(t1, e);
                }
                getTicksAtTime(t1) {
                    return this._tickSource.getTicksAtTime(t1);
                }
                nextTickTime(t1, e) {
                    const s1 = this.toSeconds(e), n = this.getTicksAtTime(s1);
                    return this._tickSource.getTimeOfTick(n + t1, s1);
                }
                _loop() {
                    const t1 = this._lastUpdate, e = this.now();
                    this._lastUpdate = e, this.log("loop", t1, e), t1 !== e && (this._state.forEachBetween(t1, e, (t1)=>{
                        switch(t1.state){
                            case "started":
                                const e = this._tickSource.getTicksAtTime(t1.time);
                                this.emit("start", t1.time, e);
                                break;
                            case "stopped":
                                0 !== t1.time && this.emit("stop", t1.time);
                                break;
                            case "paused":
                                this.emit("pause", t1.time);
                        }
                    }), this._tickSource.forEachTickBetween(t1, e, (t1, e)=>{
                        this.callback(t1, e);
                    }));
                }
                getStateAtTime(t1) {
                    const e = this.toSeconds(t1);
                    return this._state.getValueAtTime(e);
                }
                dispose() {
                    return super.dispose(), this.context.off("tick", this._boundLoop), this._tickSource.dispose(), this._state.dispose(), this;
                }
            }
            Ai.mixin(vo);
            class yo extends io {
                constructor(){
                    super(ui(yo.getDefaults(), arguments, [
                        "delayTime",
                        "maxDelay"
                    ])), this.name = "Delay";
                    const t1 = ui(yo.getDefaults(), arguments, [
                        "delayTime",
                        "maxDelay"
                    ]), e = this.toSeconds(t1.maxDelay);
                    this._maxDelay = Math.max(e, this.toSeconds(t1.delayTime)), this._delayNode = this.input = this.output = this.context.createDelay(e), this.delayTime = new no({
                        context: this.context,
                        param: this._delayNode.delayTime,
                        units: "time",
                        value: t1.delayTime,
                        minValue: 0,
                        maxValue: this.maxDelay
                    }), Oi(this, "delayTime");
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        delayTime: 0,
                        maxDelay: 1
                    });
                }
                get maxDelay() {
                    return this._maxDelay;
                }
                dispose() {
                    return super.dispose(), this._delayNode.disconnect(), this.delayTime.dispose(), this;
                }
            }
            function xo(t1, e, s1 = 2, n = Vi().sampleRate) {
                return ni(this, void 0, void 0, function*() {
                    const i = Vi(), o = new qi(s1, e, n);
                    Ni(o), yield t1(o);
                    const r = o.render();
                    Ni(i);
                    const a = yield r;
                    return new Ri(a);
                });
            }
            class wo extends fi {
                constructor(){
                    super(), this.name = "ToneAudioBuffers", this._buffers = new Map, this._loadingCount = 0;
                    const t1 = ui(wo.getDefaults(), arguments, [
                        "urls",
                        "onload",
                        "baseUrl"
                    ], "urls");
                    this.baseUrl = t1.baseUrl, Object.keys(t1.urls).forEach((e)=>{
                        this._loadingCount++;
                        const s1 = t1.urls[e];
                        this.add(e, s1, this._bufferLoaded.bind(this, t1.onload), t1.onerror);
                    });
                }
                static getDefaults() {
                    return {
                        baseUrl: "",
                        onerror: Ei,
                        onload: Ei,
                        urls: {}
                    };
                }
                has(t1) {
                    return this._buffers.has(t1.toString());
                }
                get(t1) {
                    return Bn(this.has(t1), `ToneAudioBuffers has no buffer named: ${t1}`), this._buffers.get(t1.toString());
                }
                _bufferLoaded(t1) {
                    this._loadingCount--, 0 === this._loadingCount && t1 && t1();
                }
                get loaded() {
                    return Array.from(this._buffers).every(([t1, e])=>e.loaded);
                }
                add(t1, e, s1 = Ei, n = Ei) {
                    return zn(e) ? (this.baseUrl && "data:audio/" === e.trim().substring(0, 11).toLowerCase() && (this.baseUrl = ""), this._buffers.set(t1.toString(), new Ri(this.baseUrl + e, s1, n))) : this._buffers.set(t1.toString(), new Ri(e, s1, n)), this;
                }
                dispose() {
                    return super.dispose(), this._buffers.forEach((t1)=>t1.dispose()), this._buffers.clear(), this;
                }
            }
            class bo extends Yi {
                constructor(){
                    super(...arguments), this.name = "MidiClass", this.defaultUnits = "midi";
                }
                _frequencyToUnits(t1) {
                    return Bi(super._frequencyToUnits(t1));
                }
                _ticksToUnits(t1) {
                    return Bi(super._ticksToUnits(t1));
                }
                _beatsToUnits(t1) {
                    return Bi(super._beatsToUnits(t1));
                }
                _secondsToUnits(t1) {
                    return Bi(super._secondsToUnits(t1));
                }
                toMidi() {
                    return this.valueOf();
                }
                toFrequency() {
                    return Gi(this.toMidi());
                }
                transpose(t1) {
                    return new bo(this.context, this.toMidi() + t1);
                }
            }
            function To(t1, e) {
                return new bo(Vi(), t1, e);
            }
            class So extends Ki {
                constructor(){
                    super(...arguments), this.name = "Ticks", this.defaultUnits = "i";
                }
                _now() {
                    return this.context.transport.ticks;
                }
                _beatsToUnits(t1) {
                    return this._getPPQ() * t1;
                }
                _secondsToUnits(t1) {
                    return Math.floor(t1 / (60 / this._getBpm()) * this._getPPQ());
                }
                _ticksToUnits(t1) {
                    return t1;
                }
                toTicks() {
                    return this.valueOf();
                }
                toSeconds() {
                    return this.valueOf() / this._getPPQ() * (60 / this._getBpm());
                }
            }
            function ko(t1, e) {
                return new So(Vi(), t1, e);
            }
            class Ao extends eo {
                constructor(){
                    super(...arguments), this.name = "Draw", this.expiration = .25, this.anticipation = .008, this._events = new wi, this._boundDrawLoop = this._drawLoop.bind(this), this._animationFrame = -1;
                }
                schedule(t1, e) {
                    return this._events.add({
                        callback: t1,
                        time: this.toSeconds(e)
                    }), 1 === this._events.length && (this._animationFrame = requestAnimationFrame(this._boundDrawLoop)), this;
                }
                cancel(t1) {
                    return this._events.cancel(this.toSeconds(t1)), this;
                }
                _drawLoop() {
                    const t1 = this.context.currentTime;
                    for(; this._events.length && this._events.peek().time - this.anticipation <= t1;){
                        const e = this._events.shift();
                        e && t1 - e.time <= this.expiration && e.callback();
                    }
                    this._events.length > 0 && (this._animationFrame = requestAnimationFrame(this._boundDrawLoop));
                }
                dispose() {
                    return super.dispose(), this._events.dispose(), cancelAnimationFrame(this._animationFrame), this;
                }
            }
            Ti((t1)=>{
                t1.draw = new Ao({
                    context: t1
                });
            }), ki((t1)=>{
                t1.draw.dispose();
            });
            class Co extends fi {
                constructor(){
                    super(...arguments), this.name = "IntervalTimeline", this._root = null, this._length = 0;
                }
                add(t1) {
                    Bn(In(t1.time), "Events must have a time property"), Bn(In(t1.duration), "Events must have a duration parameter"), t1.time = t1.time.valueOf();
                    let e = new Do(t1.time, t1.time + t1.duration, t1);
                    for(null === this._root ? this._root = e : this._root.insert(e), this._length++; null !== e;)e.updateHeight(), e.updateMax(), this._rebalance(e), e = e.parent;
                    return this;
                }
                remove(t1) {
                    if (null !== this._root) {
                        const e = [];
                        this._root.search(t1.time, e);
                        for (const s1 of e)if (s1.event === t1) {
                            this._removeNode(s1), this._length--;
                            break;
                        }
                    }
                    return this;
                }
                get length() {
                    return this._length;
                }
                cancel(t1) {
                    return this.forEachFrom(t1, (t1)=>this.remove(t1)), this;
                }
                _setRoot(t1) {
                    this._root = t1, null !== this._root && (this._root.parent = null);
                }
                _replaceNodeInParent(t1, e) {
                    null !== t1.parent ? (t1.isLeftChild() ? t1.parent.left = e : t1.parent.right = e, this._rebalance(t1.parent)) : this._setRoot(e);
                }
                _removeNode(t1) {
                    if (null === t1.left && null === t1.right) this._replaceNodeInParent(t1, null);
                    else if (null === t1.right) this._replaceNodeInParent(t1, t1.left);
                    else if (null === t1.left) this._replaceNodeInParent(t1, t1.right);
                    else {
                        let e, s1 = null;
                        if (t1.getBalance() > 0) {
                            if (null === t1.left.right) e = t1.left, e.right = t1.right, s1 = e;
                            else {
                                for(e = t1.left.right; null !== e.right;)e = e.right;
                                e.parent && (e.parent.right = e.left, s1 = e.parent, e.left = t1.left, e.right = t1.right);
                            }
                        } else if (null === t1.right.left) e = t1.right, e.left = t1.left, s1 = e;
                        else {
                            for(e = t1.right.left; null !== e.left;)e = e.left;
                            e.parent && (e.parent.left = e.right, s1 = e.parent, e.left = t1.left, e.right = t1.right);
                        }
                        null !== t1.parent ? t1.isLeftChild() ? t1.parent.left = e : t1.parent.right = e : this._setRoot(e), s1 && this._rebalance(s1);
                    }
                    t1.dispose();
                }
                _rotateLeft(t1) {
                    const e = t1.parent, s1 = t1.isLeftChild(), n = t1.right;
                    n && (t1.right = n.left, n.left = t1), null !== e ? s1 ? e.left = n : e.right = n : this._setRoot(n);
                }
                _rotateRight(t1) {
                    const e = t1.parent, s1 = t1.isLeftChild(), n = t1.left;
                    n && (t1.left = n.right, n.right = t1), null !== e ? s1 ? e.left = n : e.right = n : this._setRoot(n);
                }
                _rebalance(t1) {
                    const e = t1.getBalance();
                    e > 1 && t1.left ? t1.left.getBalance() < 0 ? this._rotateLeft(t1.left) : this._rotateRight(t1) : e < -1 && t1.right && (t1.right.getBalance() > 0 ? this._rotateRight(t1.right) : this._rotateLeft(t1));
                }
                get(t1) {
                    if (null !== this._root) {
                        const e = [];
                        if (this._root.search(t1, e), e.length > 0) {
                            let t1 = e[0];
                            for(let s1 = 1; s1 < e.length; s1++)e[s1].low > t1.low && (t1 = e[s1]);
                            return t1.event;
                        }
                    }
                    return null;
                }
                forEach(t1) {
                    if (null !== this._root) {
                        const e = [];
                        this._root.traverse((t1)=>e.push(t1)), e.forEach((e)=>{
                            e.event && t1(e.event);
                        });
                    }
                    return this;
                }
                forEachAtTime(t1, e) {
                    if (null !== this._root) {
                        const s1 = [];
                        this._root.search(t1, s1), s1.forEach((t1)=>{
                            t1.event && e(t1.event);
                        });
                    }
                    return this;
                }
                forEachFrom(t1, e) {
                    if (null !== this._root) {
                        const s1 = [];
                        this._root.searchAfter(t1, s1), s1.forEach((t1)=>{
                            t1.event && e(t1.event);
                        });
                    }
                    return this;
                }
                dispose() {
                    return super.dispose(), null !== this._root && this._root.traverse((t1)=>t1.dispose()), this._root = null, this;
                }
            }
            class Do {
                constructor(t1, e, s1){
                    this._left = null, this._right = null, this.parent = null, this.height = 0, this.event = s1, this.low = t1, this.high = e, this.max = this.high;
                }
                insert(t1) {
                    t1.low <= this.low ? null === this.left ? this.left = t1 : this.left.insert(t1) : null === this.right ? this.right = t1 : this.right.insert(t1);
                }
                search(t1, e) {
                    t1 > this.max || (null !== this.left && this.left.search(t1, e), this.low <= t1 && this.high > t1 && e.push(this), this.low > t1 || null !== this.right && this.right.search(t1, e));
                }
                searchAfter(t1, e) {
                    this.low >= t1 && (e.push(this), null !== this.left && this.left.searchAfter(t1, e)), null !== this.right && this.right.searchAfter(t1, e);
                }
                traverse(t1) {
                    t1(this), null !== this.left && this.left.traverse(t1), null !== this.right && this.right.traverse(t1);
                }
                updateHeight() {
                    null !== this.left && null !== this.right ? this.height = Math.max(this.left.height, this.right.height) + 1 : null !== this.right ? this.height = this.right.height + 1 : null !== this.left ? this.height = this.left.height + 1 : this.height = 0;
                }
                updateMax() {
                    this.max = this.high, null !== this.left && (this.max = Math.max(this.max, this.left.max)), null !== this.right && (this.max = Math.max(this.max, this.right.max));
                }
                getBalance() {
                    let t1 = 0;
                    return null !== this.left && null !== this.right ? t1 = this.left.height - this.right.height : null !== this.left ? t1 = this.left.height + 1 : null !== this.right && (t1 = -(this.right.height + 1)), t1;
                }
                isLeftChild() {
                    return null !== this.parent && this.parent.left === this;
                }
                get left() {
                    return this._left;
                }
                set left(t1) {
                    this._left = t1, null !== t1 && (t1.parent = this), this.updateHeight(), this.updateMax();
                }
                get right() {
                    return this._right;
                }
                set right(t1) {
                    this._right = t1, null !== t1 && (t1.parent = this), this.updateHeight(), this.updateMax();
                }
                dispose() {
                    this.parent = null, this._left = null, this._right = null, this.event = null;
                }
            }
            class Oo extends io {
                constructor(){
                    super(ui(Oo.getDefaults(), arguments, [
                        "volume"
                    ])), this.name = "Volume";
                    const t1 = ui(Oo.getDefaults(), arguments, [
                        "volume"
                    ]);
                    this.input = this.output = new ho({
                        context: this.context,
                        gain: t1.volume,
                        units: "decibels"
                    }), this.volume = this.output.gain, Oi(this, "volume"), this._unmutedVolume = t1.volume, this.mute = t1.mute;
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        mute: !1,
                        volume: 0
                    });
                }
                get mute() {
                    return this.volume.value === -1 / 0;
                }
                set mute(t1) {
                    !this.mute && t1 ? (this._unmutedVolume = this.volume.value, this.volume.value = -1 / 0) : this.mute && !t1 && (this.volume.value = this._unmutedVolume);
                }
                dispose() {
                    return super.dispose(), this.input.dispose(), this.volume.dispose(), this;
                }
            }
            class Mo extends io {
                constructor(){
                    super(ui(Mo.getDefaults(), arguments)), this.name = "Destination", this.input = new Oo({
                        context: this.context
                    }), this.output = new ho({
                        context: this.context
                    }), this.volume = this.input.volume;
                    const t1 = ui(Mo.getDefaults(), arguments);
                    oo(this.input, this.output, this.context.rawContext.destination), this.mute = t1.mute, this._internalChannels = [
                        this.input,
                        this.context.rawContext.destination,
                        this.output
                    ];
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        mute: !1,
                        volume: 0
                    });
                }
                get mute() {
                    return this.input.mute;
                }
                set mute(t1) {
                    this.input.mute = t1;
                }
                chain(...t1) {
                    return this.input.disconnect(), t1.unshift(this.input), t1.push(this.output), oo(...t1), this;
                }
                get maxChannelCount() {
                    return this.context.rawContext.destination.maxChannelCount;
                }
                dispose() {
                    return super.dispose(), this.volume.dispose(), this;
                }
            }
            Ti((t1)=>{
                t1.destination = new Mo({
                    context: t1
                });
            }), ki((t1)=>{
                t1.destination.dispose();
            });
            class Eo extends fi {
                constructor(t1){
                    super(), this.name = "TimelineValue", this._timeline = new wi({
                        memory: 10
                    }), this._initialValue = t1;
                }
                set(t1, e) {
                    return this._timeline.add({
                        value: t1,
                        time: e
                    }), this;
                }
                get(t1) {
                    const e = this._timeline.get(t1);
                    return e ? e.value : this._initialValue;
                }
            }
            class Ro extends io {
                constructor(){
                    super(Object.assign(ui(Ro.getDefaults(), arguments, [
                        "context"
                    ])));
                }
                connect(t1, e = 0, s1 = 0) {
                    return fo(this, t1, e, s1), this;
                }
            }
            class qo extends Ro {
                constructor(){
                    super(Object.assign(ui(qo.getDefaults(), arguments, [
                        "mapping",
                        "length"
                    ]))), this.name = "WaveShaper", this._shaper = this.context.createWaveShaper(), this.input = this._shaper, this.output = this._shaper;
                    const t1 = ui(qo.getDefaults(), arguments, [
                        "mapping",
                        "length"
                    ]);
                    Ln(t1.mapping) || t1.mapping instanceof Float32Array ? this.curve = Float32Array.from(t1.mapping) : Vn(t1.mapping) && this.setMap(t1.mapping, t1.length);
                }
                static getDefaults() {
                    return Object.assign(po.getDefaults(), {
                        length: 1024
                    });
                }
                setMap(t1, e = 1024) {
                    const s1 = new Float32Array(e);
                    for(let n = 0, i = e; n < i; n++){
                        const e = n / (i - 1) * 2 - 1;
                        s1[n] = t1(e, n);
                    }
                    return this.curve = s1, this;
                }
                get curve() {
                    return this._shaper.curve;
                }
                set curve(t1) {
                    this._shaper.curve = t1;
                }
                get oversample() {
                    return this._shaper.oversample;
                }
                set oversample(t1) {
                    Bn([
                        "none",
                        "2x",
                        "4x"
                    ].some((e)=>e.includes(t1)), "oversampling must be either 'none', '2x', or '4x'"), this._shaper.oversample = t1;
                }
                dispose() {
                    return super.dispose(), this._shaper.disconnect(), this;
                }
            }
            class Fo extends Ro {
                constructor(){
                    super(Object.assign(ui(Fo.getDefaults(), arguments, [
                        "value"
                    ]))), this.name = "Pow";
                    const t1 = ui(Fo.getDefaults(), arguments, [
                        "value"
                    ]);
                    this._exponentScaler = this.input = this.output = new qo({
                        context: this.context,
                        mapping: this._expFunc(t1.value),
                        length: 8192
                    }), this._exponent = t1.value;
                }
                static getDefaults() {
                    return Object.assign(Ro.getDefaults(), {
                        value: 1
                    });
                }
                _expFunc(t1) {
                    return (e)=>Math.pow(Math.abs(e), t1);
                }
                get value() {
                    return this._exponent;
                }
                set value(t1) {
                    this._exponent = t1, this._exponentScaler.setMap(this._expFunc(this._exponent));
                }
                dispose() {
                    return super.dispose(), this._exponentScaler.dispose(), this;
                }
            }
            class Io {
                constructor(t1, e){
                    this.id = Io._eventId++, this._remainderTime = 0;
                    const s1 = Object.assign(Io.getDefaults(), e);
                    this.transport = t1, this.callback = s1.callback, this._once = s1.once, this.time = Math.floor(s1.time), this._remainderTime = s1.time - this.time;
                }
                static getDefaults() {
                    return {
                        callback: Ei,
                        once: !1,
                        time: 0
                    };
                }
                get floatTime() {
                    return this.time + this._remainderTime;
                }
                invoke(t1) {
                    if (this.callback) {
                        const e = this.transport.bpm.getDurationOfTicks(1, t1);
                        this.callback(t1 + this._remainderTime * e), this._once && this.transport.clear(this.id);
                    }
                }
                dispose() {
                    return this.callback = void 0, this;
                }
            }
            Io._eventId = 0;
            class Vo extends Io {
                constructor(t1, e){
                    super(t1, e), this._currentId = -1, this._nextId = -1, this._nextTick = this.time, this._boundRestart = this._restart.bind(this);
                    const s1 = Object.assign(Vo.getDefaults(), e);
                    this.duration = s1.duration, this._interval = s1.interval, this._nextTick = s1.time, this.transport.on("start", this._boundRestart), this.transport.on("loopStart", this._boundRestart), this.transport.on("ticks", this._boundRestart), this.context = this.transport.context, this._restart();
                }
                static getDefaults() {
                    return Object.assign({}, Io.getDefaults(), {
                        duration: 1 / 0,
                        interval: 1,
                        once: !1
                    });
                }
                invoke(t1) {
                    this._createEvents(t1), super.invoke(t1);
                }
                _createEvent() {
                    return vi(this._nextTick, this.floatTime + this.duration) ? this.transport.scheduleOnce(this.invoke.bind(this), new So(this.context, this._nextTick).toSeconds()) : -1;
                }
                _createEvents(t1) {
                    vi(this._nextTick + this._interval, this.floatTime + this.duration) && (this._nextTick += this._interval, this._currentId = this._nextId, this._nextId = this.transport.scheduleOnce(this.invoke.bind(this), new So(this.context, this._nextTick).toSeconds()));
                }
                _restart(t1) {
                    this.transport.clear(this._currentId), this.transport.clear(this._nextId), this._nextTick = this.floatTime;
                    const e = this.transport.getTicksAtTime(t1);
                    mi(e, this.time) && (this._nextTick = this.floatTime + Math.ceil((e - this.floatTime) / this._interval) * this._interval), this._currentId = this._createEvent(), this._nextTick += this._interval, this._nextId = this._createEvent();
                }
                dispose() {
                    return super.dispose(), this.transport.clear(this._currentId), this.transport.clear(this._nextId), this.transport.off("start", this._boundRestart), this.transport.off("loopStart", this._boundRestart), this.transport.off("ticks", this._boundRestart), this;
                }
            }
            class No extends eo {
                constructor(){
                    super(ui(No.getDefaults(), arguments)), this.name = "Transport", this._loop = new Eo(!1), this._loopStart = 0, this._loopEnd = 0, this._scheduledEvents = {}, this._timeline = new wi, this._repeatedEvents = new Co, this._syncedSignals = [], this._swingAmount = 0;
                    const t1 = ui(No.getDefaults(), arguments);
                    this._ppq = t1.ppq, this._clock = new vo({
                        callback: this._processTick.bind(this),
                        context: this.context,
                        frequency: 0,
                        units: "bpm"
                    }), this._bindClockEvents(), this.bpm = this._clock.frequency, this._clock.frequency.multiplier = t1.ppq, this.bpm.setValueAtTime(t1.bpm, 0), Oi(this, "bpm"), this._timeSignature = t1.timeSignature, this._swingTicks = t1.ppq / 2;
                }
                static getDefaults() {
                    return Object.assign(eo.getDefaults(), {
                        bpm: 120,
                        loopEnd: "4m",
                        loopStart: 0,
                        ppq: 192,
                        swing: 0,
                        swingSubdivision: "8n",
                        timeSignature: 4
                    });
                }
                _processTick(t1, e) {
                    if (this._loop.get(t1) && e >= this._loopEnd && (this.emit("loopEnd", t1), this._clock.setTicksAtTime(this._loopStart, t1), e = this._loopStart, this.emit("loopStart", t1, this._clock.getSecondsAtTime(t1)), this.emit("loop", t1)), this._swingAmount > 0 && e % this._ppq != 0 && e % (2 * this._swingTicks) != 0) {
                        const s1 = e % (2 * this._swingTicks) / (2 * this._swingTicks), n = Math.sin(s1 * Math.PI) * this._swingAmount;
                        t1 += new So(this.context, 2 * this._swingTicks / 3).toSeconds() * n;
                    }
                    Xn(!0), this._timeline.forEachAtTime(e, (e)=>e.invoke(t1)), Xn(!1);
                }
                schedule(t1, e) {
                    const s1 = new Io(this, {
                        callback: t1,
                        time: new Ki(this.context, e).toTicks()
                    });
                    return this._addEvent(s1, this._timeline);
                }
                scheduleRepeat(t1, e, s1, n = 1 / 0) {
                    const i = new Vo(this, {
                        callback: t1,
                        duration: new Zi(this.context, n).toTicks(),
                        interval: new Zi(this.context, e).toTicks(),
                        time: new Ki(this.context, s1).toTicks()
                    });
                    return this._addEvent(i, this._repeatedEvents);
                }
                scheduleOnce(t1, e) {
                    const s1 = new Io(this, {
                        callback: t1,
                        once: !0,
                        time: new Ki(this.context, e).toTicks()
                    });
                    return this._addEvent(s1, this._timeline);
                }
                clear(t1) {
                    if (this._scheduledEvents.hasOwnProperty(t1)) {
                        const e = this._scheduledEvents[t1.toString()];
                        e.timeline.remove(e.event), e.event.dispose(), delete this._scheduledEvents[t1.toString()];
                    }
                    return this;
                }
                _addEvent(t1, e) {
                    return this._scheduledEvents[t1.id.toString()] = {
                        event: t1,
                        timeline: e
                    }, e.add(t1), t1.id;
                }
                cancel(t1 = 0) {
                    const e = this.toTicks(t1);
                    return this._timeline.forEachFrom(e, (t1)=>this.clear(t1.id)), this._repeatedEvents.forEachFrom(e, (t1)=>this.clear(t1.id)), this;
                }
                _bindClockEvents() {
                    this._clock.on("start", (t1, e)=>{
                        e = new So(this.context, e).toSeconds(), this.emit("start", t1, e);
                    }), this._clock.on("stop", (t1)=>{
                        this.emit("stop", t1);
                    }), this._clock.on("pause", (t1)=>{
                        this.emit("pause", t1);
                    });
                }
                get state() {
                    return this._clock.getStateAtTime(this.now());
                }
                start(t1, e) {
                    let s1;
                    return this.context.resume(), In(e) && (s1 = this.toTicks(e)), this._clock.start(t1, s1), this;
                }
                stop(t1) {
                    return this._clock.stop(t1), this;
                }
                pause(t1) {
                    return this._clock.pause(t1), this;
                }
                toggle(t1) {
                    return t1 = this.toSeconds(t1), "started" !== this._clock.getStateAtTime(t1) ? this.start(t1) : this.stop(t1), this;
                }
                get timeSignature() {
                    return this._timeSignature;
                }
                set timeSignature(t1) {
                    Ln(t1) && (t1 = t1[0] / t1[1] * 4), this._timeSignature = t1;
                }
                get loopStart() {
                    return new Zi(this.context, this._loopStart, "i").toSeconds();
                }
                set loopStart(t1) {
                    this._loopStart = this.toTicks(t1);
                }
                get loopEnd() {
                    return new Zi(this.context, this._loopEnd, "i").toSeconds();
                }
                set loopEnd(t1) {
                    this._loopEnd = this.toTicks(t1);
                }
                get loop() {
                    return this._loop.get(this.now());
                }
                set loop(t1) {
                    this._loop.set(t1, this.now());
                }
                setLoopPoints(t1, e) {
                    return this.loopStart = t1, this.loopEnd = e, this;
                }
                get swing() {
                    return this._swingAmount;
                }
                set swing(t1) {
                    this._swingAmount = t1;
                }
                get swingSubdivision() {
                    return new So(this.context, this._swingTicks).toNotation();
                }
                set swingSubdivision(t1) {
                    this._swingTicks = this.toTicks(t1);
                }
                get position() {
                    const t1 = this.now(), e = this._clock.getTicksAtTime(t1);
                    return new So(this.context, e).toBarsBeatsSixteenths();
                }
                set position(t1) {
                    const e = this.toTicks(t1);
                    this.ticks = e;
                }
                get seconds() {
                    return this._clock.seconds;
                }
                set seconds(t1) {
                    const e = this.now(), s1 = this._clock.frequency.timeToTicks(t1, e);
                    this.ticks = s1;
                }
                get progress() {
                    if (this.loop) {
                        const t1 = this.now();
                        return (this._clock.getTicksAtTime(t1) - this._loopStart) / (this._loopEnd - this._loopStart);
                    }
                    return 0;
                }
                get ticks() {
                    return this._clock.ticks;
                }
                set ticks(t1) {
                    if (this._clock.ticks !== t1) {
                        const e = this.now();
                        if ("started" === this.state) {
                            const s1 = this._clock.getTicksAtTime(e), n = e + this._clock.frequency.getDurationOfTicks(Math.ceil(s1) - s1, e);
                            this.emit("stop", n), this._clock.setTicksAtTime(t1, n), this.emit("start", n, this._clock.getSecondsAtTime(n));
                        } else this.emit("ticks", e), this._clock.setTicksAtTime(t1, e);
                    }
                }
                getTicksAtTime(t1) {
                    return this._clock.getTicksAtTime(t1);
                }
                getSecondsAtTime(t1) {
                    return this._clock.getSecondsAtTime(t1);
                }
                get PPQ() {
                    return this._clock.frequency.multiplier;
                }
                set PPQ(t1) {
                    this._clock.frequency.multiplier = t1;
                }
                nextSubdivision(t1) {
                    if (t1 = this.toTicks(t1), "started" !== this.state) return 0;
                    {
                        const e = this.now(), s1 = t1 - this.getTicksAtTime(e) % t1;
                        return this._clock.nextTickTime(s1, e);
                    }
                }
                syncSignal(t1, e) {
                    const s1 = this.now();
                    let n = this.bpm, i = 1 / (60 / n.getValueAtTime(s1) / this.PPQ), o = [];
                    if ("time" === t1.units) {
                        const t1 = 1 / 64 / i, e = new ho(t1), s1 = new Fo(-1), r = new ho(t1);
                        n.chain(e, s1, r), n = r, i = 1 / i, o = [
                            e,
                            s1,
                            r
                        ];
                    }
                    e || (e = 0 !== t1.getValueAtTime(s1) ? t1.getValueAtTime(s1) / i : 0);
                    const r = new ho(e);
                    return n.connect(r), r.connect(t1._param), o.push(r), this._syncedSignals.push({
                        initial: t1.value,
                        nodes: o,
                        signal: t1
                    }), t1.value = 0, this;
                }
                unsyncSignal(t1) {
                    for(let e = this._syncedSignals.length - 1; e >= 0; e--){
                        const s1 = this._syncedSignals[e];
                        s1.signal === t1 && (s1.nodes.forEach((t1)=>t1.dispose()), s1.signal.value = s1.initial, this._syncedSignals.splice(e, 1));
                    }
                    return this;
                }
                dispose() {
                    return super.dispose(), this._clock.dispose(), Mi(this, "bpm"), this._timeline.dispose(), this._repeatedEvents.dispose(), this;
                }
            }
            Ai.mixin(No), Ti((t1)=>{
                t1.transport = new No({
                    context: t1
                });
            }), ki((t1)=>{
                t1.transport.dispose();
            });
            class Po extends io {
                constructor(t1){
                    super(t1), this.input = void 0, this._state = new so("stopped"), this._synced = !1, this._scheduled = [], this._syncedStart = Ei, this._syncedStop = Ei, this._state.memory = 100, this._state.increasing = !0, this._volume = this.output = new Oo({
                        context: this.context,
                        mute: t1.mute,
                        volume: t1.volume
                    }), this.volume = this._volume.volume, Oi(this, "volume"), this.onstop = t1.onstop;
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        mute: !1,
                        onstop: Ei,
                        volume: 0
                    });
                }
                get state() {
                    return this._synced ? "started" === this.context.transport.state ? this._state.getValueAtTime(this.context.transport.seconds) : "stopped" : this._state.getValueAtTime(this.now());
                }
                get mute() {
                    return this._volume.mute;
                }
                set mute(t1) {
                    this._volume.mute = t1;
                }
                _clampToCurrentTime(t1) {
                    return this._synced ? t1 : Math.max(t1, this.context.currentTime);
                }
                start(t1, e, s1) {
                    let n = Fn(t1) && this._synced ? this.context.transport.seconds : this.toSeconds(t1);
                    if (n = this._clampToCurrentTime(n), this._synced || "started" !== this._state.getValueAtTime(n)) {
                        if (this.log("start", n), this._state.setStateAtTime("started", n), this._synced) {
                            const t1 = this._state.get(n);
                            t1 && (t1.offset = this.toSeconds(pi(e, 0)), t1.duration = s1 ? this.toSeconds(s1) : void 0);
                            const i = this.context.transport.schedule((t1)=>{
                                this._start(t1, e, s1);
                            }, n);
                            this._scheduled.push(i), "started" === this.context.transport.state && this.context.transport.getSecondsAtTime(this.immediate()) > n && this._syncedStart(this.now(), this.context.transport.seconds);
                        } else Gn(this.context), this._start(n, e, s1);
                    } else Bn(mi(n, this._state.get(n).time), "Start time must be strictly greater than previous start time"), this._state.cancel(n), this._state.setStateAtTime("started", n), this.log("restart", n), this.restart(n, e, s1);
                    return this;
                }
                stop(t1) {
                    let e = Fn(t1) && this._synced ? this.context.transport.seconds : this.toSeconds(t1);
                    if (e = this._clampToCurrentTime(e), "started" === this._state.getValueAtTime(e) || In(this._state.getNextState("started", e))) {
                        if (this.log("stop", e), this._synced) {
                            const t1 = this.context.transport.schedule(this._stop.bind(this), e);
                            this._scheduled.push(t1);
                        } else this._stop(e);
                        this._state.cancel(e), this._state.setStateAtTime("stopped", e);
                    }
                    return this;
                }
                restart(t1, e, s1) {
                    return t1 = this.toSeconds(t1), "started" === this._state.getValueAtTime(t1) && (this._state.cancel(t1), this._restart(t1, e, s1)), this;
                }
                sync() {
                    return this._synced || (this._synced = !0, this._syncedStart = (t1, e)=>{
                        if (mi(e, 0)) {
                            const s1 = this._state.get(e);
                            if (s1 && "started" === s1.state && s1.time !== e) {
                                const n = e - this.toSeconds(s1.time);
                                let i;
                                s1.duration && (i = this.toSeconds(s1.duration) - n), this._start(t1, this.toSeconds(s1.offset) + n, i);
                            }
                        }
                    }, this._syncedStop = (t1)=>{
                        const e = this.context.transport.getSecondsAtTime(Math.max(t1 - this.sampleTime, 0));
                        "started" === this._state.getValueAtTime(e) && this._stop(t1);
                    }, this.context.transport.on("start", this._syncedStart), this.context.transport.on("loopStart", this._syncedStart), this.context.transport.on("stop", this._syncedStop), this.context.transport.on("pause", this._syncedStop), this.context.transport.on("loopEnd", this._syncedStop)), this;
                }
                unsync() {
                    return this._synced && (this.context.transport.off("stop", this._syncedStop), this.context.transport.off("pause", this._syncedStop), this.context.transport.off("loopEnd", this._syncedStop), this.context.transport.off("start", this._syncedStart), this.context.transport.off("loopStart", this._syncedStart)), this._synced = !1, this._scheduled.forEach((t1)=>this.context.transport.clear(t1)), this._scheduled = [], this._state.cancel(0), this._stop(0), this;
                }
                dispose() {
                    return super.dispose(), this.onstop = Ei, this.unsync(), this._volume.dispose(), this._state.dispose(), this;
                }
            }
            class jo extends lo {
                constructor(){
                    super(ui(jo.getDefaults(), arguments, [
                        "url",
                        "onload"
                    ])), this.name = "ToneBufferSource", this._source = this.context.createBufferSource(), this._internalChannels = [
                        this._source
                    ], this._sourceStarted = !1, this._sourceStopped = !1;
                    const t1 = ui(jo.getDefaults(), arguments, [
                        "url",
                        "onload"
                    ]);
                    ro(this._source, this._gainNode), this._source.onended = ()=>this._stopSource(), this.playbackRate = new no({
                        context: this.context,
                        param: this._source.playbackRate,
                        units: "positive",
                        value: t1.playbackRate
                    }), this.loop = t1.loop, this.loopStart = t1.loopStart, this.loopEnd = t1.loopEnd, this._buffer = new Ri(t1.url, t1.onload, t1.onerror), this._internalChannels.push(this._source);
                }
                static getDefaults() {
                    return Object.assign(lo.getDefaults(), {
                        url: new Ri,
                        loop: !1,
                        loopEnd: 0,
                        loopStart: 0,
                        onload: Ei,
                        onerror: Ei,
                        playbackRate: 1
                    });
                }
                get fadeIn() {
                    return this._fadeIn;
                }
                set fadeIn(t1) {
                    this._fadeIn = t1;
                }
                get fadeOut() {
                    return this._fadeOut;
                }
                set fadeOut(t1) {
                    this._fadeOut = t1;
                }
                get curve() {
                    return this._curve;
                }
                set curve(t1) {
                    this._curve = t1;
                }
                start(t1, e, s1, n = 1) {
                    Bn(this.buffer.loaded, "buffer is either not set or not loaded");
                    const i = this.toSeconds(t1);
                    this._startGain(i, n), e = this.loop ? pi(e, this.loopStart) : pi(e, 0);
                    let o = Math.max(this.toSeconds(e), 0);
                    if (this.loop) {
                        const t1 = this.toSeconds(this.loopEnd) || this.buffer.duration, e = this.toSeconds(this.loopStart), s1 = t1 - e;
                        gi(o, t1) && (o = (o - e) % s1 + e), yi(o, this.buffer.duration) && (o = 0);
                    }
                    if (this._source.buffer = this.buffer.get(), this._source.loopEnd = this.toSeconds(this.loopEnd) || this.buffer.duration, vi(o, this.buffer.duration) && (this._sourceStarted = !0, this._source.start(i, o)), In(s1)) {
                        let t1 = this.toSeconds(s1);
                        t1 = Math.max(t1, 0), this.stop(i + t1);
                    }
                    return this;
                }
                _stopSource(t1) {
                    !this._sourceStopped && this._sourceStarted && (this._sourceStopped = !0, this._source.stop(this.toSeconds(t1)), this._onended());
                }
                get loopStart() {
                    return this._source.loopStart;
                }
                set loopStart(t1) {
                    this._source.loopStart = this.toSeconds(t1);
                }
                get loopEnd() {
                    return this._source.loopEnd;
                }
                set loopEnd(t1) {
                    this._source.loopEnd = this.toSeconds(t1);
                }
                get buffer() {
                    return this._buffer;
                }
                set buffer(t1) {
                    this._buffer.set(t1);
                }
                get loop() {
                    return this._source.loop;
                }
                set loop(t1) {
                    this._source.loop = t1, this._sourceStarted && this.cancelStop();
                }
                dispose() {
                    return super.dispose(), this._source.onended = null, this._source.disconnect(), this._buffer.dispose(), this.playbackRate.dispose(), this;
                }
            }
            class Lo extends Po {
                constructor(){
                    super(ui(Lo.getDefaults(), arguments, [
                        "type"
                    ])), this.name = "Noise", this._source = null;
                    const t1 = ui(Lo.getDefaults(), arguments, [
                        "type"
                    ]);
                    this._playbackRate = t1.playbackRate, this.type = t1.type, this._fadeIn = t1.fadeIn, this._fadeOut = t1.fadeOut;
                }
                static getDefaults() {
                    return Object.assign(Po.getDefaults(), {
                        fadeIn: 0,
                        fadeOut: 0,
                        playbackRate: 1,
                        type: "white"
                    });
                }
                get type() {
                    return this._type;
                }
                set type(t1) {
                    if (Bn(t1 in Bo, "Noise: invalid type: " + t1), this._type !== t1 && (this._type = t1, "started" === this.state)) {
                        const t1 = this.now();
                        this._stop(t1), this._start(t1);
                    }
                }
                get playbackRate() {
                    return this._playbackRate;
                }
                set playbackRate(t1) {
                    this._playbackRate = t1, this._source && (this._source.playbackRate.value = t1);
                }
                _start(t1) {
                    const e = Bo[this._type];
                    this._source = new jo({
                        url: e,
                        context: this.context,
                        fadeIn: this._fadeIn,
                        fadeOut: this._fadeOut,
                        loop: !0,
                        onended: ()=>this.onstop(this),
                        playbackRate: this._playbackRate
                    }).connect(this.output), this._source.start(this.toSeconds(t1), Math.random() * (e.duration - .001));
                }
                _stop(t1) {
                    this._source && (this._source.stop(this.toSeconds(t1)), this._source = null);
                }
                get fadeIn() {
                    return this._fadeIn;
                }
                set fadeIn(t1) {
                    this._fadeIn = t1, this._source && (this._source.fadeIn = this._fadeIn);
                }
                get fadeOut() {
                    return this._fadeOut;
                }
                set fadeOut(t1) {
                    this._fadeOut = t1, this._source && (this._source.fadeOut = this._fadeOut);
                }
                _restart(t1) {
                    this._stop(t1), this._start(t1);
                }
                dispose() {
                    return super.dispose(), this._source && this._source.disconnect(), this;
                }
            }
            const zo = 220500, Wo = {
                brown: null,
                pink: null,
                white: null
            }, Bo = {
                get brown () {
                    if (!Wo.brown) {
                        const t1 = [];
                        for(let e = 0; e < 2; e++){
                            const s1 = new Float32Array(zo);
                            t1[e] = s1;
                            let n = 0;
                            for(let t1 = 0; t1 < zo; t1++){
                                const e = 2 * Math.random() - 1;
                                s1[t1] = (n + .02 * e) / 1.02, n = s1[t1], s1[t1] *= 3.5;
                            }
                        }
                        Wo.brown = (new Ri).fromArray(t1);
                    }
                    return Wo.brown;
                },
                get pink () {
                    if (!Wo.pink) {
                        const t1 = [];
                        for(let e = 0; e < 2; e++){
                            const s1 = new Float32Array(zo);
                            let n, i, o, r, a, c, h;
                            t1[e] = s1, n = i = o = r = a = c = h = 0;
                            for(let t1 = 0; t1 < zo; t1++){
                                const e = 2 * Math.random() - 1;
                                n = .99886 * n + .0555179 * e, i = .99332 * i + .0750759 * e, o = .969 * o + .153852 * e, r = .8665 * r + .3104856 * e, a = .55 * a + .5329522 * e, c = -0.7616 * c - .016898 * e, s1[t1] = n + i + o + r + a + c + h + .5362 * e, s1[t1] *= .11, h = .115926 * e;
                            }
                        }
                        Wo.pink = (new Ri).fromArray(t1);
                    }
                    return Wo.pink;
                },
                get white () {
                    if (!Wo.white) {
                        const t1 = [];
                        for(let e = 0; e < 2; e++){
                            const s1 = new Float32Array(zo);
                            t1[e] = s1;
                            for(let t1 = 0; t1 < zo; t1++)s1[t1] = 2 * Math.random() - 1;
                        }
                        Wo.white = (new Ri).fromArray(t1);
                    }
                    return Wo.white;
                }
            };
            class Uo extends io {
                constructor(){
                    super(ui(Uo.getDefaults(), arguments, [
                        "volume"
                    ])), this.name = "UserMedia";
                    const t1 = ui(Uo.getDefaults(), arguments, [
                        "volume"
                    ]);
                    this._volume = this.output = new Oo({
                        context: this.context,
                        volume: t1.volume
                    }), this.volume = this._volume.volume, Oi(this, "volume"), this.mute = t1.mute;
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        mute: !1,
                        volume: 0
                    });
                }
                open(t1) {
                    return ni(this, void 0, void 0, function*() {
                        Bn(Uo.supported, "UserMedia is not supported"), "started" === this.state && this.close();
                        const e = yield Uo.enumerateDevices();
                        Nn(t1) ? this._device = e[t1] : (this._device = e.find((e)=>e.label === t1 || e.deviceId === t1), !this._device && e.length > 0 && (this._device = e[0]), Bn(In(this._device), `No matching device ${t1}`));
                        const s1 = {
                            audio: {
                                echoCancellation: !1,
                                sampleRate: this.context.sampleRate,
                                noiseSuppression: !1,
                                mozNoiseSuppression: !1
                            }
                        };
                        this._device && (s1.audio.deviceId = this._device.deviceId);
                        const n = yield navigator.mediaDevices.getUserMedia(s1);
                        if (!this._stream) {
                            this._stream = n;
                            const t1 = this.context.createMediaStreamSource(n);
                            ro(t1, this.output), this._mediaStream = t1;
                        }
                        return this;
                    });
                }
                close() {
                    return this._stream && this._mediaStream && (this._stream.getAudioTracks().forEach((t1)=>{
                        t1.stop();
                    }), this._stream = void 0, this._mediaStream.disconnect(), this._mediaStream = void 0), this._device = void 0, this;
                }
                static enumerateDevices() {
                    return ni(this, void 0, void 0, function*() {
                        return (yield navigator.mediaDevices.enumerateDevices()).filter((t1)=>"audioinput" === t1.kind);
                    });
                }
                get state() {
                    return this._stream && this._stream.active ? "started" : "stopped";
                }
                get deviceId() {
                    return this._device ? this._device.deviceId : void 0;
                }
                get groupId() {
                    return this._device ? this._device.groupId : void 0;
                }
                get label() {
                    return this._device ? this._device.label : void 0;
                }
                get mute() {
                    return this._volume.mute;
                }
                set mute(t1) {
                    this._volume.mute = t1;
                }
                dispose() {
                    return super.dispose(), this.close(), this._volume.dispose(), this.volume.dispose(), this;
                }
                static get supported() {
                    return In(navigator.mediaDevices) && In(navigator.mediaDevices.getUserMedia);
                }
            }
            function Go(t1, e) {
                return ni(this, void 0, void 0, function*() {
                    const s1 = e / t1.context.sampleRate, n = new qi(1, s1, t1.context.sampleRate);
                    return new t1.constructor(Object.assign(t1.get(), {
                        frequency: 2 / s1,
                        detune: 0,
                        context: n
                    })).toDestination().start(0), (yield n.render()).getChannelData(0);
                });
            }
            class Qo extends lo {
                constructor(){
                    super(ui(Qo.getDefaults(), arguments, [
                        "frequency",
                        "type"
                    ])), this.name = "ToneOscillatorNode", this._oscillator = this.context.createOscillator(), this._internalChannels = [
                        this._oscillator
                    ];
                    const t1 = ui(Qo.getDefaults(), arguments, [
                        "frequency",
                        "type"
                    ]);
                    ro(this._oscillator, this._gainNode), this.type = t1.type, this.frequency = new no({
                        context: this.context,
                        param: this._oscillator.frequency,
                        units: "frequency",
                        value: t1.frequency
                    }), this.detune = new no({
                        context: this.context,
                        param: this._oscillator.detune,
                        units: "cents",
                        value: t1.detune
                    }), Oi(this, [
                        "frequency",
                        "detune"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(lo.getDefaults(), {
                        detune: 0,
                        frequency: 440,
                        type: "sine"
                    });
                }
                start(t1) {
                    const e = this.toSeconds(t1);
                    return this.log("start", e), this._startGain(e), this._oscillator.start(e), this;
                }
                _stopSource(t1) {
                    this._oscillator.stop(t1);
                }
                setPeriodicWave(t1) {
                    return this._oscillator.setPeriodicWave(t1), this;
                }
                get type() {
                    return this._oscillator.type;
                }
                set type(t1) {
                    this._oscillator.type = t1;
                }
                dispose() {
                    return super.dispose(), "started" === this.state && this.stop(), this._oscillator.disconnect(), this.frequency.dispose(), this.detune.dispose(), this;
                }
            }
            class Zo extends Po {
                constructor(){
                    super(ui(Zo.getDefaults(), arguments, [
                        "frequency",
                        "type"
                    ])), this.name = "Oscillator", this._oscillator = null;
                    const t1 = ui(Zo.getDefaults(), arguments, [
                        "frequency",
                        "type"
                    ]);
                    this.frequency = new po({
                        context: this.context,
                        units: "frequency",
                        value: t1.frequency
                    }), Oi(this, "frequency"), this.detune = new po({
                        context: this.context,
                        units: "cents",
                        value: t1.detune
                    }), Oi(this, "detune"), this._partials = t1.partials, this._partialCount = t1.partialCount, this._type = t1.type, t1.partialCount && "custom" !== t1.type && (this._type = this.baseType + t1.partialCount.toString()), this.phase = t1.phase;
                }
                static getDefaults() {
                    return Object.assign(Po.getDefaults(), {
                        detune: 0,
                        frequency: 440,
                        partialCount: 0,
                        partials: [],
                        phase: 0,
                        type: "sine"
                    });
                }
                _start(t1) {
                    const e = this.toSeconds(t1), s1 = new Qo({
                        context: this.context,
                        onended: ()=>this.onstop(this)
                    });
                    this._oscillator = s1, this._wave ? this._oscillator.setPeriodicWave(this._wave) : this._oscillator.type = this._type, this._oscillator.connect(this.output), this.frequency.connect(this._oscillator.frequency), this.detune.connect(this._oscillator.detune), this._oscillator.start(e);
                }
                _stop(t1) {
                    const e = this.toSeconds(t1);
                    this._oscillator && this._oscillator.stop(e);
                }
                _restart(t1) {
                    const e = this.toSeconds(t1);
                    return this.log("restart", e), this._oscillator && this._oscillator.cancelStop(), this._state.cancel(e), this;
                }
                syncFrequency() {
                    return this.context.transport.syncSignal(this.frequency), this;
                }
                unsyncFrequency() {
                    return this.context.transport.unsyncSignal(this.frequency), this;
                }
                _getCachedPeriodicWave() {
                    if ("custom" === this._type) return Zo._periodicWaveCache.find((t1)=>{
                        var e, s1;
                        return t1.phase === this._phase && (e = t1.partials, s1 = this._partials, e.length === s1.length && e.every((t1, e)=>s1[e] === t1));
                    });
                    {
                        const t1 = Zo._periodicWaveCache.find((t1)=>t1.type === this._type && t1.phase === this._phase);
                        return this._partialCount = t1 ? t1.partialCount : this._partialCount, t1;
                    }
                }
                get type() {
                    return this._type;
                }
                set type(t1) {
                    this._type = t1;
                    const e = -1 !== [
                        "sine",
                        "square",
                        "sawtooth",
                        "triangle"
                    ].indexOf(t1);
                    if (0 === this._phase && e) this._wave = void 0, this._partialCount = 0, null !== this._oscillator && (this._oscillator.type = t1);
                    else {
                        const e = this._getCachedPeriodicWave();
                        if (In(e)) {
                            const { partials: t1, wave: s1 } = e;
                            this._wave = s1, this._partials = t1, null !== this._oscillator && this._oscillator.setPeriodicWave(this._wave);
                        } else {
                            const [e, s1] = this._getRealImaginary(t1, this._phase), n = this.context.createPeriodicWave(e, s1);
                            this._wave = n, null !== this._oscillator && this._oscillator.setPeriodicWave(this._wave), Zo._periodicWaveCache.push({
                                imag: s1,
                                partialCount: this._partialCount,
                                partials: this._partials,
                                phase: this._phase,
                                real: e,
                                type: this._type,
                                wave: this._wave
                            }), Zo._periodicWaveCache.length > 100 && Zo._periodicWaveCache.shift();
                        }
                    }
                }
                get baseType() {
                    return this._type.replace(this.partialCount.toString(), "");
                }
                set baseType(t1) {
                    this.partialCount && "custom" !== this._type && "custom" !== t1 ? this.type = t1 + this.partialCount : this.type = t1;
                }
                get partialCount() {
                    return this._partialCount;
                }
                set partialCount(t1) {
                    Un(t1, 0);
                    let e = this._type;
                    const s1 = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);
                    if (s1 && (e = s1[1]), "custom" !== this._type) this.type = 0 === t1 ? e : e + t1.toString();
                    else {
                        const e = new Float32Array(t1);
                        this._partials.forEach((t1, s1)=>e[s1] = t1), this._partials = Array.from(e), this.type = this._type;
                    }
                }
                _getRealImaginary(t1, e) {
                    let s1 = 2048;
                    const n = new Float32Array(s1), i = new Float32Array(s1);
                    let o = 1;
                    if ("custom" === t1) {
                        if (o = this._partials.length + 1, this._partialCount = this._partials.length, s1 = o, 0 === this._partials.length) return [
                            n,
                            i
                        ];
                    } else {
                        const e = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(t1);
                        e ? (o = parseInt(e[2], 10) + 1, this._partialCount = parseInt(e[2], 10), t1 = e[1], o = Math.max(o, 2), s1 = o) : this._partialCount = 0, this._partials = [];
                    }
                    for(let r = 1; r < s1; ++r){
                        const s1 = 2 / (r * Math.PI);
                        let a;
                        switch(t1){
                            case "sine":
                                a = r <= o ? 1 : 0, this._partials[r - 1] = a;
                                break;
                            case "square":
                                a = 1 & r ? 2 * s1 : 0, this._partials[r - 1] = a;
                                break;
                            case "sawtooth":
                                a = s1 * (1 & r ? 1 : -1), this._partials[r - 1] = a;
                                break;
                            case "triangle":
                                a = 1 & r ? s1 * s1 * 2 * (r - 1 >> 1 & 1 ? -1 : 1) : 0, this._partials[r - 1] = a;
                                break;
                            case "custom":
                                a = this._partials[r - 1];
                                break;
                            default:
                                throw new TypeError("Oscillator: invalid type: " + t1);
                        }
                        0 !== a ? (n[r] = -a * Math.sin(e * r), i[r] = a * Math.cos(e * r)) : (n[r] = 0, i[r] = 0);
                    }
                    return [
                        n,
                        i
                    ];
                }
                _inverseFFT(t1, e, s1) {
                    let n = 0;
                    const i = t1.length;
                    for(let o = 0; o < i; o++)n += t1[o] * Math.cos(o * s1) + e[o] * Math.sin(o * s1);
                    return n;
                }
                getInitialValue() {
                    const [t1, e] = this._getRealImaginary(this._type, 0);
                    let s1 = 0;
                    const n = 2 * Math.PI;
                    for(let i = 0; i < 32; i++)s1 = Math.max(this._inverseFFT(t1, e, i / 32 * n), s1);
                    return xi(-this._inverseFFT(t1, e, this._phase) / s1, -1, 1);
                }
                get partials() {
                    return this._partials.slice(0, this.partialCount);
                }
                set partials(t1) {
                    this._partials = t1, this._partialCount = this._partials.length, t1.length && (this.type = "custom");
                }
                get phase() {
                    return this._phase * (180 / Math.PI);
                }
                set phase(t1) {
                    this._phase = t1 * Math.PI / 180, this.type = this._type;
                }
                asArray(t1 = 1024) {
                    return ni(this, void 0, void 0, function*() {
                        return Go(this, t1);
                    });
                }
                dispose() {
                    return super.dispose(), null !== this._oscillator && this._oscillator.dispose(), this._wave = void 0, this.frequency.dispose(), this.detune.dispose(), this;
                }
            }
            Zo._periodicWaveCache = [];
            class Xo extends Ro {
                constructor(){
                    super(...arguments), this.name = "AudioToGain", this._norm = new qo({
                        context: this.context,
                        mapping: (t1)=>(t1 + 1) / 2
                    }), this.input = this._norm, this.output = this._norm;
                }
                dispose() {
                    return super.dispose(), this._norm.dispose(), this;
                }
            }
            class Yo extends po {
                constructor(){
                    super(Object.assign(ui(Yo.getDefaults(), arguments, [
                        "value"
                    ]))), this.name = "Multiply", this.override = !1;
                    const t1 = ui(Yo.getDefaults(), arguments, [
                        "value"
                    ]);
                    this._mult = this.input = this.output = new ho({
                        context: this.context,
                        minValue: t1.minValue,
                        maxValue: t1.maxValue
                    }), this.factor = this._param = this._mult.gain, this.factor.setValueAtTime(t1.value, 0);
                }
                static getDefaults() {
                    return Object.assign(po.getDefaults(), {
                        value: 0
                    });
                }
                dispose() {
                    return super.dispose(), this._mult.dispose(), this;
                }
            }
            class $o extends Po {
                constructor(){
                    super(ui($o.getDefaults(), arguments, [
                        "frequency",
                        "type",
                        "modulationType"
                    ])), this.name = "AMOscillator", this._modulationScale = new Xo({
                        context: this.context
                    }), this._modulationNode = new ho({
                        context: this.context
                    });
                    const t1 = ui($o.getDefaults(), arguments, [
                        "frequency",
                        "type",
                        "modulationType"
                    ]);
                    this._carrier = new Zo({
                        context: this.context,
                        detune: t1.detune,
                        frequency: t1.frequency,
                        onstop: ()=>this.onstop(this),
                        phase: t1.phase,
                        type: t1.type
                    }), this.frequency = this._carrier.frequency, this.detune = this._carrier.detune, this._modulator = new Zo({
                        context: this.context,
                        phase: t1.phase,
                        type: t1.modulationType
                    }), this.harmonicity = new Yo({
                        context: this.context,
                        units: "positive",
                        value: t1.harmonicity
                    }), this.frequency.chain(this.harmonicity, this._modulator.frequency), this._modulator.chain(this._modulationScale, this._modulationNode.gain), this._carrier.chain(this._modulationNode, this.output), Oi(this, [
                        "frequency",
                        "detune",
                        "harmonicity"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(Zo.getDefaults(), {
                        harmonicity: 1,
                        modulationType: "square"
                    });
                }
                _start(t1) {
                    this._modulator.start(t1), this._carrier.start(t1);
                }
                _stop(t1) {
                    this._modulator.stop(t1), this._carrier.stop(t1);
                }
                _restart(t1) {
                    this._modulator.restart(t1), this._carrier.restart(t1);
                }
                get type() {
                    return this._carrier.type;
                }
                set type(t1) {
                    this._carrier.type = t1;
                }
                get baseType() {
                    return this._carrier.baseType;
                }
                set baseType(t1) {
                    this._carrier.baseType = t1;
                }
                get partialCount() {
                    return this._carrier.partialCount;
                }
                set partialCount(t1) {
                    this._carrier.partialCount = t1;
                }
                get modulationType() {
                    return this._modulator.type;
                }
                set modulationType(t1) {
                    this._modulator.type = t1;
                }
                get phase() {
                    return this._carrier.phase;
                }
                set phase(t1) {
                    this._carrier.phase = t1, this._modulator.phase = t1;
                }
                get partials() {
                    return this._carrier.partials;
                }
                set partials(t1) {
                    this._carrier.partials = t1;
                }
                asArray(t1 = 1024) {
                    return ni(this, void 0, void 0, function*() {
                        return Go(this, t1);
                    });
                }
                dispose() {
                    return super.dispose(), this.frequency.dispose(), this.detune.dispose(), this.harmonicity.dispose(), this._carrier.dispose(), this._modulator.dispose(), this._modulationNode.dispose(), this._modulationScale.dispose(), this;
                }
            }
            class Ho extends Po {
                constructor(){
                    super(ui(Ho.getDefaults(), arguments, [
                        "frequency",
                        "type",
                        "modulationType"
                    ])), this.name = "FMOscillator", this._modulationNode = new ho({
                        context: this.context,
                        gain: 0
                    });
                    const t1 = ui(Ho.getDefaults(), arguments, [
                        "frequency",
                        "type",
                        "modulationType"
                    ]);
                    this._carrier = new Zo({
                        context: this.context,
                        detune: t1.detune,
                        frequency: 0,
                        onstop: ()=>this.onstop(this),
                        phase: t1.phase,
                        type: t1.type
                    }), this.detune = this._carrier.detune, this.frequency = new po({
                        context: this.context,
                        units: "frequency",
                        value: t1.frequency
                    }), this._modulator = new Zo({
                        context: this.context,
                        phase: t1.phase,
                        type: t1.modulationType
                    }), this.harmonicity = new Yo({
                        context: this.context,
                        units: "positive",
                        value: t1.harmonicity
                    }), this.modulationIndex = new Yo({
                        context: this.context,
                        units: "positive",
                        value: t1.modulationIndex
                    }), this.frequency.connect(this._carrier.frequency), this.frequency.chain(this.harmonicity, this._modulator.frequency), this.frequency.chain(this.modulationIndex, this._modulationNode), this._modulator.connect(this._modulationNode.gain), this._modulationNode.connect(this._carrier.frequency), this._carrier.connect(this.output), this.detune.connect(this._modulator.detune), Oi(this, [
                        "modulationIndex",
                        "frequency",
                        "detune",
                        "harmonicity"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(Zo.getDefaults(), {
                        harmonicity: 1,
                        modulationIndex: 2,
                        modulationType: "square"
                    });
                }
                _start(t1) {
                    this._modulator.start(t1), this._carrier.start(t1);
                }
                _stop(t1) {
                    this._modulator.stop(t1), this._carrier.stop(t1);
                }
                _restart(t1) {
                    return this._modulator.restart(t1), this._carrier.restart(t1), this;
                }
                get type() {
                    return this._carrier.type;
                }
                set type(t1) {
                    this._carrier.type = t1;
                }
                get baseType() {
                    return this._carrier.baseType;
                }
                set baseType(t1) {
                    this._carrier.baseType = t1;
                }
                get partialCount() {
                    return this._carrier.partialCount;
                }
                set partialCount(t1) {
                    this._carrier.partialCount = t1;
                }
                get modulationType() {
                    return this._modulator.type;
                }
                set modulationType(t1) {
                    this._modulator.type = t1;
                }
                get phase() {
                    return this._carrier.phase;
                }
                set phase(t1) {
                    this._carrier.phase = t1, this._modulator.phase = t1;
                }
                get partials() {
                    return this._carrier.partials;
                }
                set partials(t1) {
                    this._carrier.partials = t1;
                }
                asArray(t1 = 1024) {
                    return ni(this, void 0, void 0, function*() {
                        return Go(this, t1);
                    });
                }
                dispose() {
                    return super.dispose(), this.frequency.dispose(), this.harmonicity.dispose(), this._carrier.dispose(), this._modulator.dispose(), this._modulationNode.dispose(), this.modulationIndex.dispose(), this;
                }
            }
            class Jo extends Po {
                constructor(){
                    super(ui(Jo.getDefaults(), arguments, [
                        "frequency",
                        "width"
                    ])), this.name = "PulseOscillator", this._widthGate = new ho({
                        context: this.context,
                        gain: 0
                    }), this._thresh = new qo({
                        context: this.context,
                        mapping: (t1)=>t1 <= 0 ? -1 : 1
                    });
                    const t1 = ui(Jo.getDefaults(), arguments, [
                        "frequency",
                        "width"
                    ]);
                    this.width = new po({
                        context: this.context,
                        units: "audioRange",
                        value: t1.width
                    }), this._triangle = new Zo({
                        context: this.context,
                        detune: t1.detune,
                        frequency: t1.frequency,
                        onstop: ()=>this.onstop(this),
                        phase: t1.phase,
                        type: "triangle"
                    }), this.frequency = this._triangle.frequency, this.detune = this._triangle.detune, this._triangle.chain(this._thresh, this.output), this.width.chain(this._widthGate, this._thresh), Oi(this, [
                        "width",
                        "frequency",
                        "detune"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(Po.getDefaults(), {
                        detune: 0,
                        frequency: 440,
                        phase: 0,
                        type: "pulse",
                        width: .2
                    });
                }
                _start(t1) {
                    t1 = this.toSeconds(t1), this._triangle.start(t1), this._widthGate.gain.setValueAtTime(1, t1);
                }
                _stop(t1) {
                    t1 = this.toSeconds(t1), this._triangle.stop(t1), this._widthGate.gain.cancelScheduledValues(t1), this._widthGate.gain.setValueAtTime(0, t1);
                }
                _restart(t1) {
                    this._triangle.restart(t1), this._widthGate.gain.cancelScheduledValues(t1), this._widthGate.gain.setValueAtTime(1, t1);
                }
                get phase() {
                    return this._triangle.phase;
                }
                set phase(t1) {
                    this._triangle.phase = t1;
                }
                get type() {
                    return "pulse";
                }
                get baseType() {
                    return "pulse";
                }
                get partials() {
                    return [];
                }
                get partialCount() {
                    return 0;
                }
                set carrierType(t1) {
                    this._triangle.type = t1;
                }
                asArray(t1 = 1024) {
                    return ni(this, void 0, void 0, function*() {
                        return Go(this, t1);
                    });
                }
                dispose() {
                    return super.dispose(), this._triangle.dispose(), this.width.dispose(), this._widthGate.dispose(), this._thresh.dispose(), this;
                }
            }
            class Ko extends Po {
                constructor(){
                    super(ui(Ko.getDefaults(), arguments, [
                        "frequency",
                        "type",
                        "spread"
                    ])), this.name = "FatOscillator", this._oscillators = [];
                    const t1 = ui(Ko.getDefaults(), arguments, [
                        "frequency",
                        "type",
                        "spread"
                    ]);
                    this.frequency = new po({
                        context: this.context,
                        units: "frequency",
                        value: t1.frequency
                    }), this.detune = new po({
                        context: this.context,
                        units: "cents",
                        value: t1.detune
                    }), this._spread = t1.spread, this._type = t1.type, this._phase = t1.phase, this._partials = t1.partials, this._partialCount = t1.partialCount, this.count = t1.count, Oi(this, [
                        "frequency",
                        "detune"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(Zo.getDefaults(), {
                        count: 3,
                        spread: 20,
                        type: "sawtooth"
                    });
                }
                _start(t1) {
                    t1 = this.toSeconds(t1), this._forEach((e)=>e.start(t1));
                }
                _stop(t1) {
                    t1 = this.toSeconds(t1), this._forEach((e)=>e.stop(t1));
                }
                _restart(t1) {
                    this._forEach((e)=>e.restart(t1));
                }
                _forEach(t1) {
                    for(let e = 0; e < this._oscillators.length; e++)t1(this._oscillators[e], e);
                }
                get type() {
                    return this._type;
                }
                set type(t1) {
                    this._type = t1, this._forEach((e)=>e.type = t1);
                }
                get spread() {
                    return this._spread;
                }
                set spread(t1) {
                    if (this._spread = t1, this._oscillators.length > 1) {
                        const e = -t1 / 2, s1 = t1 / (this._oscillators.length - 1);
                        this._forEach((t1, n)=>t1.detune.value = e + s1 * n);
                    }
                }
                get count() {
                    return this._oscillators.length;
                }
                set count(t1) {
                    if (Un(t1, 1), this._oscillators.length !== t1) {
                        this._forEach((t1)=>t1.dispose()), this._oscillators = [];
                        for(let e = 0; e < t1; e++){
                            const s1 = new Zo({
                                context: this.context,
                                volume: -6 - 1.1 * t1,
                                type: this._type,
                                phase: this._phase + e / t1 * 360,
                                partialCount: this._partialCount,
                                onstop: 0 === e ? ()=>this.onstop(this) : Ei
                            });
                            "custom" === this.type && (s1.partials = this._partials), this.frequency.connect(s1.frequency), this.detune.connect(s1.detune), s1.detune.overridden = !1, s1.connect(this.output), this._oscillators[e] = s1;
                        }
                        this.spread = this._spread, "started" === this.state && this._forEach((t1)=>t1.start());
                    }
                }
                get phase() {
                    return this._phase;
                }
                set phase(t1) {
                    this._phase = t1, this._forEach((t1, e)=>t1.phase = this._phase + e / this.count * 360);
                }
                get baseType() {
                    return this._oscillators[0].baseType;
                }
                set baseType(t1) {
                    this._forEach((e)=>e.baseType = t1), this._type = this._oscillators[0].type;
                }
                get partials() {
                    return this._oscillators[0].partials;
                }
                set partials(t1) {
                    this._partials = t1, this._partialCount = this._partials.length, t1.length && (this._type = "custom", this._forEach((e)=>e.partials = t1));
                }
                get partialCount() {
                    return this._oscillators[0].partialCount;
                }
                set partialCount(t1) {
                    this._partialCount = t1, this._forEach((e)=>e.partialCount = t1), this._type = this._oscillators[0].type;
                }
                asArray(t1 = 1024) {
                    return ni(this, void 0, void 0, function*() {
                        return Go(this, t1);
                    });
                }
                dispose() {
                    return super.dispose(), this.frequency.dispose(), this.detune.dispose(), this._forEach((t1)=>t1.dispose()), this;
                }
            }
            class tr extends Po {
                constructor(){
                    super(ui(tr.getDefaults(), arguments, [
                        "frequency",
                        "modulationFrequency"
                    ])), this.name = "PWMOscillator", this.sourceType = "pwm", this._scale = new Yo({
                        context: this.context,
                        value: 2
                    });
                    const t1 = ui(tr.getDefaults(), arguments, [
                        "frequency",
                        "modulationFrequency"
                    ]);
                    this._pulse = new Jo({
                        context: this.context,
                        frequency: t1.modulationFrequency
                    }), this._pulse.carrierType = "sine", this.modulationFrequency = this._pulse.frequency, this._modulator = new Zo({
                        context: this.context,
                        detune: t1.detune,
                        frequency: t1.frequency,
                        onstop: ()=>this.onstop(this),
                        phase: t1.phase
                    }), this.frequency = this._modulator.frequency, this.detune = this._modulator.detune, this._modulator.chain(this._scale, this._pulse.width), this._pulse.connect(this.output), Oi(this, [
                        "modulationFrequency",
                        "frequency",
                        "detune"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(Po.getDefaults(), {
                        detune: 0,
                        frequency: 440,
                        modulationFrequency: .4,
                        phase: 0,
                        type: "pwm"
                    });
                }
                _start(t1) {
                    t1 = this.toSeconds(t1), this._modulator.start(t1), this._pulse.start(t1);
                }
                _stop(t1) {
                    t1 = this.toSeconds(t1), this._modulator.stop(t1), this._pulse.stop(t1);
                }
                _restart(t1) {
                    this._modulator.restart(t1), this._pulse.restart(t1);
                }
                get type() {
                    return "pwm";
                }
                get baseType() {
                    return "pwm";
                }
                get partials() {
                    return [];
                }
                get partialCount() {
                    return 0;
                }
                get phase() {
                    return this._modulator.phase;
                }
                set phase(t1) {
                    this._modulator.phase = t1;
                }
                asArray(t1 = 1024) {
                    return ni(this, void 0, void 0, function*() {
                        return Go(this, t1);
                    });
                }
                dispose() {
                    return super.dispose(), this._pulse.dispose(), this._scale.dispose(), this._modulator.dispose(), this;
                }
            }
            const er = {
                am: $o,
                fat: Ko,
                fm: Ho,
                oscillator: Zo,
                pulse: Jo,
                pwm: tr
            };
            class sr extends Po {
                constructor(){
                    super(ui(sr.getDefaults(), arguments, [
                        "frequency",
                        "type"
                    ])), this.name = "OmniOscillator";
                    const t1 = ui(sr.getDefaults(), arguments, [
                        "frequency",
                        "type"
                    ]);
                    this.frequency = new po({
                        context: this.context,
                        units: "frequency",
                        value: t1.frequency
                    }), this.detune = new po({
                        context: this.context,
                        units: "cents",
                        value: t1.detune
                    }), Oi(this, [
                        "frequency",
                        "detune"
                    ]), this.set(t1);
                }
                static getDefaults() {
                    return Object.assign(Zo.getDefaults(), Ho.getDefaults(), $o.getDefaults(), Ko.getDefaults(), Jo.getDefaults(), tr.getDefaults());
                }
                _start(t1) {
                    this._oscillator.start(t1);
                }
                _stop(t1) {
                    this._oscillator.stop(t1);
                }
                _restart(t1) {
                    return this._oscillator.restart(t1), this;
                }
                get type() {
                    let t1 = "";
                    return [
                        "am",
                        "fm",
                        "fat"
                    ].some((t1)=>this._sourceType === t1) && (t1 = this._sourceType), t1 + this._oscillator.type;
                }
                set type(t1) {
                    "fm" === t1.substr(0, 2) ? (this._createNewOscillator("fm"), this._oscillator = this._oscillator, this._oscillator.type = t1.substr(2)) : "am" === t1.substr(0, 2) ? (this._createNewOscillator("am"), this._oscillator = this._oscillator, this._oscillator.type = t1.substr(2)) : "fat" === t1.substr(0, 3) ? (this._createNewOscillator("fat"), this._oscillator = this._oscillator, this._oscillator.type = t1.substr(3)) : "pwm" === t1 ? (this._createNewOscillator("pwm"), this._oscillator = this._oscillator) : "pulse" === t1 ? this._createNewOscillator("pulse") : (this._createNewOscillator("oscillator"), this._oscillator = this._oscillator, this._oscillator.type = t1);
                }
                get partials() {
                    return this._oscillator.partials;
                }
                set partials(t1) {
                    this._getOscType(this._oscillator, "pulse") || this._getOscType(this._oscillator, "pwm") || (this._oscillator.partials = t1);
                }
                get partialCount() {
                    return this._oscillator.partialCount;
                }
                set partialCount(t1) {
                    this._getOscType(this._oscillator, "pulse") || this._getOscType(this._oscillator, "pwm") || (this._oscillator.partialCount = t1);
                }
                set(t1) {
                    return Reflect.has(t1, "type") && t1.type && (this.type = t1.type), super.set(t1), this;
                }
                _createNewOscillator(t1) {
                    if (t1 !== this._sourceType) {
                        this._sourceType = t1;
                        const e = er[t1], s1 = this.now();
                        if (this._oscillator) {
                            const t1 = this._oscillator;
                            t1.stop(s1), this.context.setTimeout(()=>t1.dispose(), this.blockTime);
                        }
                        this._oscillator = new e({
                            context: this.context
                        }), this.frequency.connect(this._oscillator.frequency), this.detune.connect(this._oscillator.detune), this._oscillator.connect(this.output), this._oscillator.onstop = ()=>this.onstop(this), "started" === this.state && this._oscillator.start(s1);
                    }
                }
                get phase() {
                    return this._oscillator.phase;
                }
                set phase(t1) {
                    this._oscillator.phase = t1;
                }
                get sourceType() {
                    return this._sourceType;
                }
                set sourceType(t1) {
                    let e = "sine";
                    "pwm" !== this._oscillator.type && "pulse" !== this._oscillator.type && (e = this._oscillator.type), "fm" === t1 ? this.type = "fm" + e : "am" === t1 ? this.type = "am" + e : "fat" === t1 ? this.type = "fat" + e : "oscillator" === t1 ? this.type = e : "pulse" === t1 ? this.type = "pulse" : "pwm" === t1 && (this.type = "pwm");
                }
                _getOscType(t1, e) {
                    return t1 instanceof er[e];
                }
                get baseType() {
                    return this._oscillator.baseType;
                }
                set baseType(t1) {
                    this._getOscType(this._oscillator, "pulse") || this._getOscType(this._oscillator, "pwm") || "pulse" === t1 || "pwm" === t1 || (this._oscillator.baseType = t1);
                }
                get width() {
                    return this._getOscType(this._oscillator, "pulse") ? this._oscillator.width : void 0;
                }
                get count() {
                    return this._getOscType(this._oscillator, "fat") ? this._oscillator.count : void 0;
                }
                set count(t1) {
                    this._getOscType(this._oscillator, "fat") && Nn(t1) && (this._oscillator.count = t1);
                }
                get spread() {
                    return this._getOscType(this._oscillator, "fat") ? this._oscillator.spread : void 0;
                }
                set spread(t1) {
                    this._getOscType(this._oscillator, "fat") && Nn(t1) && (this._oscillator.spread = t1);
                }
                get modulationType() {
                    return this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am") ? this._oscillator.modulationType : void 0;
                }
                set modulationType(t1) {
                    (this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am")) && zn(t1) && (this._oscillator.modulationType = t1);
                }
                get modulationIndex() {
                    return this._getOscType(this._oscillator, "fm") ? this._oscillator.modulationIndex : void 0;
                }
                get harmonicity() {
                    return this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am") ? this._oscillator.harmonicity : void 0;
                }
                get modulationFrequency() {
                    return this._getOscType(this._oscillator, "pwm") ? this._oscillator.modulationFrequency : void 0;
                }
                asArray(t1 = 1024) {
                    return ni(this, void 0, void 0, function*() {
                        return Go(this, t1);
                    });
                }
                dispose() {
                    return super.dispose(), this.detune.dispose(), this.frequency.dispose(), this._oscillator.dispose(), this;
                }
            }
            class nr extends po {
                constructor(){
                    super(Object.assign(ui(nr.getDefaults(), arguments, [
                        "value"
                    ]))), this.override = !1, this.name = "Add", this._sum = new ho({
                        context: this.context
                    }), this.input = this._sum, this.output = this._sum, this.addend = this._param, oo(this._constantSource, this._sum);
                }
                static getDefaults() {
                    return Object.assign(po.getDefaults(), {
                        value: 0
                    });
                }
                dispose() {
                    return super.dispose(), this._sum.dispose(), this;
                }
            }
            class ir extends Ro {
                constructor(){
                    super(Object.assign(ui(ir.getDefaults(), arguments, [
                        "min",
                        "max"
                    ]))), this.name = "Scale";
                    const t1 = ui(ir.getDefaults(), arguments, [
                        "min",
                        "max"
                    ]);
                    this._mult = this.input = new Yo({
                        context: this.context,
                        value: t1.max - t1.min
                    }), this._add = this.output = new nr({
                        context: this.context,
                        value: t1.min
                    }), this._min = t1.min, this._max = t1.max, this.input.connect(this.output);
                }
                static getDefaults() {
                    return Object.assign(Ro.getDefaults(), {
                        max: 1,
                        min: 0
                    });
                }
                get min() {
                    return this._min;
                }
                set min(t1) {
                    this._min = t1, this._setRange();
                }
                get max() {
                    return this._max;
                }
                set max(t1) {
                    this._max = t1, this._setRange();
                }
                _setRange() {
                    this._add.value = this._min, this._mult.value = this._max - this._min;
                }
                dispose() {
                    return super.dispose(), this._add.dispose(), this._mult.dispose(), this;
                }
            }
            class or extends Ro {
                constructor(){
                    super(Object.assign(ui(or.getDefaults(), arguments))), this.name = "Zero", this._gain = new ho({
                        context: this.context
                    }), this.output = this._gain, this.input = void 0, ro(this.context.getConstant(0), this._gain);
                }
                dispose() {
                    return super.dispose(), ao(this.context.getConstant(0), this._gain), this;
                }
            }
            class rr extends io {
                constructor(){
                    super(ui(rr.getDefaults(), arguments, [
                        "frequency",
                        "min",
                        "max"
                    ])), this.name = "LFO", this._stoppedValue = 0, this._units = "number", this.convert = !0, this._fromType = no.prototype._fromType, this._toType = no.prototype._toType, this._is = no.prototype._is, this._clampValue = no.prototype._clampValue;
                    const t1 = ui(rr.getDefaults(), arguments, [
                        "frequency",
                        "min",
                        "max"
                    ]);
                    this._oscillator = new Zo(t1), this.frequency = this._oscillator.frequency, this._amplitudeGain = new ho({
                        context: this.context,
                        gain: t1.amplitude,
                        units: "normalRange"
                    }), this.amplitude = this._amplitudeGain.gain, this._stoppedSignal = new po({
                        context: this.context,
                        units: "audioRange",
                        value: 0
                    }), this._zeros = new or({
                        context: this.context
                    }), this._a2g = new Xo({
                        context: this.context
                    }), this._scaler = this.output = new ir({
                        context: this.context,
                        max: t1.max,
                        min: t1.min
                    }), this.units = t1.units, this.min = t1.min, this.max = t1.max, this._oscillator.chain(this._amplitudeGain, this._a2g, this._scaler), this._zeros.connect(this._a2g), this._stoppedSignal.connect(this._a2g), Oi(this, [
                        "amplitude",
                        "frequency"
                    ]), this.phase = t1.phase;
                }
                static getDefaults() {
                    return Object.assign(Zo.getDefaults(), {
                        amplitude: 1,
                        frequency: "4n",
                        max: 1,
                        min: 0,
                        type: "sine",
                        units: "number"
                    });
                }
                start(t1) {
                    return t1 = this.toSeconds(t1), this._stoppedSignal.setValueAtTime(0, t1), this._oscillator.start(t1), this;
                }
                stop(t1) {
                    return t1 = this.toSeconds(t1), this._stoppedSignal.setValueAtTime(this._stoppedValue, t1), this._oscillator.stop(t1), this;
                }
                sync() {
                    return this._oscillator.sync(), this._oscillator.syncFrequency(), this;
                }
                unsync() {
                    return this._oscillator.unsync(), this._oscillator.unsyncFrequency(), this;
                }
                _setStoppedValue() {
                    this._stoppedValue = this._oscillator.getInitialValue(), this._stoppedSignal.value = this._stoppedValue;
                }
                get min() {
                    return this._toType(this._scaler.min);
                }
                set min(t1) {
                    t1 = this._fromType(t1), this._scaler.min = t1;
                }
                get max() {
                    return this._toType(this._scaler.max);
                }
                set max(t1) {
                    t1 = this._fromType(t1), this._scaler.max = t1;
                }
                get type() {
                    return this._oscillator.type;
                }
                set type(t1) {
                    this._oscillator.type = t1, this._setStoppedValue();
                }
                get partials() {
                    return this._oscillator.partials;
                }
                set partials(t1) {
                    this._oscillator.partials = t1, this._setStoppedValue();
                }
                get phase() {
                    return this._oscillator.phase;
                }
                set phase(t1) {
                    this._oscillator.phase = t1, this._setStoppedValue();
                }
                get units() {
                    return this._units;
                }
                set units(t1) {
                    const e = this.min, s1 = this.max;
                    this._units = t1, this.min = e, this.max = s1;
                }
                get state() {
                    return this._oscillator.state;
                }
                connect(t1, e, s1) {
                    return (t1 instanceof no || t1 instanceof po) && (this.convert = t1.convert, this.units = t1.units), fo(this, t1, e, s1), this;
                }
                dispose() {
                    return super.dispose(), this._oscillator.dispose(), this._stoppedSignal.dispose(), this._zeros.dispose(), this._scaler.dispose(), this._a2g.dispose(), this._amplitudeGain.dispose(), this.amplitude.dispose(), this;
                }
            }
            function ar(t1, e = 1 / 0) {
                const s1 = new WeakMap;
                return function(n, i) {
                    Reflect.defineProperty(n, i, {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            return s1.get(this);
                        },
                        set: function(n) {
                            Un(n, t1, e), s1.set(this, n);
                        }
                    });
                };
            }
            function cr(t1, e = 1 / 0) {
                const s1 = new WeakMap;
                return function(n, i) {
                    Reflect.defineProperty(n, i, {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            return s1.get(this);
                        },
                        set: function(n) {
                            Un(this.toSeconds(n), t1, e), s1.set(this, n);
                        }
                    });
                };
            }
            class hr extends Po {
                constructor(){
                    super(ui(hr.getDefaults(), arguments, [
                        "url",
                        "onload"
                    ])), this.name = "Player", this._activeSources = new Set;
                    const t1 = ui(hr.getDefaults(), arguments, [
                        "url",
                        "onload"
                    ]);
                    this._buffer = new Ri({
                        onload: this._onload.bind(this, t1.onload),
                        onerror: t1.onerror,
                        reverse: t1.reverse,
                        url: t1.url
                    }), this.autostart = t1.autostart, this._loop = t1.loop, this._loopStart = t1.loopStart, this._loopEnd = t1.loopEnd, this._playbackRate = t1.playbackRate, this.fadeIn = t1.fadeIn, this.fadeOut = t1.fadeOut;
                }
                static getDefaults() {
                    return Object.assign(Po.getDefaults(), {
                        autostart: !1,
                        fadeIn: 0,
                        fadeOut: 0,
                        loop: !1,
                        loopEnd: 0,
                        loopStart: 0,
                        onload: Ei,
                        onerror: Ei,
                        playbackRate: 1,
                        reverse: !1
                    });
                }
                load(t1) {
                    return ni(this, void 0, void 0, function*() {
                        return yield this._buffer.load(t1), this._onload(), this;
                    });
                }
                _onload(t1 = Ei) {
                    t1(), this.autostart && this.start();
                }
                _onSourceEnd(t1) {
                    this.onstop(this), this._activeSources.delete(t1), 0 !== this._activeSources.size || this._synced || "started" !== this._state.getValueAtTime(this.now()) || (this._state.cancel(this.now()), this._state.setStateAtTime("stopped", this.now()));
                }
                start(t1, e, s1) {
                    return super.start(t1, e, s1), this;
                }
                _start(t1, e, s1) {
                    e = this._loop ? pi(e, this._loopStart) : pi(e, 0);
                    const n = this.toSeconds(e), i = s1;
                    s1 = pi(s1, Math.max(this._buffer.duration - n, 0));
                    let o = this.toSeconds(s1);
                    o /= this._playbackRate, t1 = this.toSeconds(t1);
                    const r = new jo({
                        url: this._buffer,
                        context: this.context,
                        fadeIn: this.fadeIn,
                        fadeOut: this.fadeOut,
                        loop: this._loop,
                        loopEnd: this._loopEnd,
                        loopStart: this._loopStart,
                        onended: this._onSourceEnd.bind(this),
                        playbackRate: this._playbackRate
                    }).connect(this.output);
                    this._loop || this._synced || (this._state.cancel(t1 + o), this._state.setStateAtTime("stopped", t1 + o, {
                        implicitEnd: !0
                    })), this._activeSources.add(r), this._loop && Fn(i) ? r.start(t1, n) : r.start(t1, n, o - this.toSeconds(this.fadeOut));
                }
                _stop(t1) {
                    const e = this.toSeconds(t1);
                    this._activeSources.forEach((t1)=>t1.stop(e));
                }
                restart(t1, e, s1) {
                    return super.restart(t1, e, s1), this;
                }
                _restart(t1, e, s1) {
                    var n;
                    null === (n = [
                        ...this._activeSources
                    ].pop()) || void 0 === n || n.stop(t1), this._start(t1, e, s1);
                }
                seek(t1, e) {
                    const s1 = this.toSeconds(e);
                    if ("started" === this._state.getValueAtTime(s1)) {
                        const e = this.toSeconds(t1);
                        this._stop(s1), this._start(s1, e);
                    }
                    return this;
                }
                setLoopPoints(t1, e) {
                    return this.loopStart = t1, this.loopEnd = e, this;
                }
                get loopStart() {
                    return this._loopStart;
                }
                set loopStart(t1) {
                    this._loopStart = t1, this.buffer.loaded && Un(this.toSeconds(t1), 0, this.buffer.duration), this._activeSources.forEach((e)=>{
                        e.loopStart = t1;
                    });
                }
                get loopEnd() {
                    return this._loopEnd;
                }
                set loopEnd(t1) {
                    this._loopEnd = t1, this.buffer.loaded && Un(this.toSeconds(t1), 0, this.buffer.duration), this._activeSources.forEach((e)=>{
                        e.loopEnd = t1;
                    });
                }
                get buffer() {
                    return this._buffer;
                }
                set buffer(t1) {
                    this._buffer.set(t1);
                }
                get loop() {
                    return this._loop;
                }
                set loop(t1) {
                    if (this._loop !== t1 && (this._loop = t1, this._activeSources.forEach((e)=>{
                        e.loop = t1;
                    }), t1)) {
                        const t1 = this._state.getNextState("stopped", this.now());
                        t1 && this._state.cancel(t1.time);
                    }
                }
                get playbackRate() {
                    return this._playbackRate;
                }
                set playbackRate(t1) {
                    this._playbackRate = t1;
                    const e = this.now(), s1 = this._state.getNextState("stopped", e);
                    s1 && s1.implicitEnd && (this._state.cancel(s1.time), this._activeSources.forEach((t1)=>t1.cancelStop())), this._activeSources.forEach((s1)=>{
                        s1.playbackRate.setValueAtTime(t1, e);
                    });
                }
                get reverse() {
                    return this._buffer.reverse;
                }
                set reverse(t1) {
                    this._buffer.reverse = t1;
                }
                get loaded() {
                    return this._buffer.loaded;
                }
                dispose() {
                    return super.dispose(), this._activeSources.forEach((t1)=>t1.dispose()), this._activeSources.clear(), this._buffer.dispose(), this;
                }
            }
            si([
                cr(0)
            ], hr.prototype, "fadeIn", void 0), si([
                cr(0)
            ], hr.prototype, "fadeOut", void 0);
            class lr extends io {
                constructor(){
                    super(ui(lr.getDefaults(), arguments, [
                        "urls",
                        "onload"
                    ], "urls")), this.name = "Players", this.input = void 0, this._players = new Map;
                    const t1 = ui(lr.getDefaults(), arguments, [
                        "urls",
                        "onload"
                    ], "urls");
                    this._volume = this.output = new Oo({
                        context: this.context,
                        volume: t1.volume
                    }), this.volume = this._volume.volume, Oi(this, "volume"), this._buffers = new wo({
                        urls: t1.urls,
                        onload: t1.onload,
                        baseUrl: t1.baseUrl,
                        onerror: t1.onerror
                    }), this.mute = t1.mute, this._fadeIn = t1.fadeIn, this._fadeOut = t1.fadeOut;
                }
                static getDefaults() {
                    return Object.assign(Po.getDefaults(), {
                        baseUrl: "",
                        fadeIn: 0,
                        fadeOut: 0,
                        mute: !1,
                        onload: Ei,
                        onerror: Ei,
                        urls: {},
                        volume: 0
                    });
                }
                get mute() {
                    return this._volume.mute;
                }
                set mute(t1) {
                    this._volume.mute = t1;
                }
                get fadeIn() {
                    return this._fadeIn;
                }
                set fadeIn(t1) {
                    this._fadeIn = t1, this._players.forEach((e)=>{
                        e.fadeIn = t1;
                    });
                }
                get fadeOut() {
                    return this._fadeOut;
                }
                set fadeOut(t1) {
                    this._fadeOut = t1, this._players.forEach((e)=>{
                        e.fadeOut = t1;
                    });
                }
                get state() {
                    return Array.from(this._players).some(([t1, e])=>"started" === e.state) ? "started" : "stopped";
                }
                has(t1) {
                    return this._buffers.has(t1);
                }
                player(t1) {
                    if (Bn(this.has(t1), `No Player with the name ${t1} exists on this object`), !this._players.has(t1)) {
                        const e = new hr({
                            context: this.context,
                            fadeIn: this._fadeIn,
                            fadeOut: this._fadeOut,
                            url: this._buffers.get(t1)
                        }).connect(this.output);
                        this._players.set(t1, e);
                    }
                    return this._players.get(t1);
                }
                get loaded() {
                    return this._buffers.loaded;
                }
                add(t1, e, s1) {
                    return Bn(!this._buffers.has(t1), "A buffer with that name already exists on this object"), this._buffers.add(t1, e, s1), this;
                }
                stopAll(t1) {
                    return this._players.forEach((e)=>e.stop(t1)), this;
                }
                dispose() {
                    return super.dispose(), this._volume.dispose(), this.volume.dispose(), this._players.forEach((t1)=>t1.dispose()), this._buffers.dispose(), this;
                }
            }
            class ur extends Po {
                constructor(){
                    super(ui(ur.getDefaults(), arguments, [
                        "url",
                        "onload"
                    ])), this.name = "GrainPlayer", this._loopStart = 0, this._loopEnd = 0, this._activeSources = [];
                    const t1 = ui(ur.getDefaults(), arguments, [
                        "url",
                        "onload"
                    ]);
                    this.buffer = new Ri({
                        onload: t1.onload,
                        onerror: t1.onerror,
                        reverse: t1.reverse,
                        url: t1.url
                    }), this._clock = new vo({
                        context: this.context,
                        callback: this._tick.bind(this),
                        frequency: 1 / t1.grainSize
                    }), this._playbackRate = t1.playbackRate, this._grainSize = t1.grainSize, this._overlap = t1.overlap, this.detune = t1.detune, this.overlap = t1.overlap, this.loop = t1.loop, this.playbackRate = t1.playbackRate, this.grainSize = t1.grainSize, this.loopStart = t1.loopStart, this.loopEnd = t1.loopEnd, this.reverse = t1.reverse, this._clock.on("stop", this._onstop.bind(this));
                }
                static getDefaults() {
                    return Object.assign(Po.getDefaults(), {
                        onload: Ei,
                        onerror: Ei,
                        overlap: .1,
                        grainSize: .2,
                        playbackRate: 1,
                        detune: 0,
                        loop: !1,
                        loopStart: 0,
                        loopEnd: 0,
                        reverse: !1
                    });
                }
                _start(t1, e, s1) {
                    e = pi(e, 0), e = this.toSeconds(e), t1 = this.toSeconds(t1);
                    const n = 1 / this._clock.frequency.getValueAtTime(t1);
                    this._clock.start(t1, e / n), s1 && this.stop(t1 + this.toSeconds(s1));
                }
                restart(t1, e, s1) {
                    return super.restart(t1, e, s1), this;
                }
                _restart(t1, e, s1) {
                    this._stop(t1), this._start(t1, e, s1);
                }
                _stop(t1) {
                    this._clock.stop(t1);
                }
                _onstop(t1) {
                    this._activeSources.forEach((e)=>{
                        e.fadeOut = 0, e.stop(t1);
                    }), this.onstop(this);
                }
                _tick(t1) {
                    const e = this._clock.getTicksAtTime(t1), s1 = e * this._grainSize;
                    if (this.log("offset", s1), !this.loop && s1 > this.buffer.duration) return void this.stop(t1);
                    const n = s1 < this._overlap ? 0 : this._overlap, i = new jo({
                        context: this.context,
                        url: this.buffer,
                        fadeIn: n,
                        fadeOut: this._overlap,
                        loop: this.loop,
                        loopStart: this._loopStart,
                        loopEnd: this._loopEnd,
                        playbackRate: zi(this.detune / 100)
                    }).connect(this.output);
                    i.start(t1, this._grainSize * e), i.stop(t1 + this._grainSize / this.playbackRate), this._activeSources.push(i), i.onended = ()=>{
                        const t1 = this._activeSources.indexOf(i);
                        -1 !== t1 && this._activeSources.splice(t1, 1);
                    };
                }
                get playbackRate() {
                    return this._playbackRate;
                }
                set playbackRate(t1) {
                    Un(t1, .001), this._playbackRate = t1, this.grainSize = this._grainSize;
                }
                get loopStart() {
                    return this._loopStart;
                }
                set loopStart(t1) {
                    this.buffer.loaded && Un(this.toSeconds(t1), 0, this.buffer.duration), this._loopStart = this.toSeconds(t1);
                }
                get loopEnd() {
                    return this._loopEnd;
                }
                set loopEnd(t1) {
                    this.buffer.loaded && Un(this.toSeconds(t1), 0, this.buffer.duration), this._loopEnd = this.toSeconds(t1);
                }
                get reverse() {
                    return this.buffer.reverse;
                }
                set reverse(t1) {
                    this.buffer.reverse = t1;
                }
                get grainSize() {
                    return this._grainSize;
                }
                set grainSize(t1) {
                    this._grainSize = this.toSeconds(t1), this._clock.frequency.setValueAtTime(this._playbackRate / this._grainSize, this.now());
                }
                get overlap() {
                    return this._overlap;
                }
                set overlap(t1) {
                    const e = this.toSeconds(t1);
                    Un(e, 0), this._overlap = e;
                }
                get loaded() {
                    return this.buffer.loaded;
                }
                dispose() {
                    return super.dispose(), this.buffer.dispose(), this._clock.dispose(), this._activeSources.forEach((t1)=>t1.dispose()), this;
                }
            }
            class pr extends Ro {
                constructor(){
                    super(...arguments), this.name = "Abs", this._abs = new qo({
                        context: this.context,
                        mapping: (t1)=>Math.abs(t1) < .001 ? 0 : Math.abs(t1)
                    }), this.input = this._abs, this.output = this._abs;
                }
                dispose() {
                    return super.dispose(), this._abs.dispose(), this;
                }
            }
            class dr extends Ro {
                constructor(){
                    super(...arguments), this.name = "GainToAudio", this._norm = new qo({
                        context: this.context,
                        mapping: (t1)=>2 * Math.abs(t1) - 1
                    }), this.input = this._norm, this.output = this._norm;
                }
                dispose() {
                    return super.dispose(), this._norm.dispose(), this;
                }
            }
            class fr extends Ro {
                constructor(){
                    super(...arguments), this.name = "Negate", this._multiply = new Yo({
                        context: this.context,
                        value: -1
                    }), this.input = this._multiply, this.output = this._multiply;
                }
                dispose() {
                    return super.dispose(), this._multiply.dispose(), this;
                }
            }
            class _r extends po {
                constructor(){
                    super(Object.assign(ui(_r.getDefaults(), arguments, [
                        "value"
                    ]))), this.override = !1, this.name = "Subtract", this._sum = new ho({
                        context: this.context
                    }), this.input = this._sum, this.output = this._sum, this._neg = new fr({
                        context: this.context
                    }), this.subtrahend = this._param, oo(this._constantSource, this._neg, this._sum);
                }
                static getDefaults() {
                    return Object.assign(po.getDefaults(), {
                        value: 0
                    });
                }
                dispose() {
                    return super.dispose(), this._neg.dispose(), this._sum.dispose(), this;
                }
            }
            class mr extends Ro {
                constructor(){
                    super(Object.assign(ui(mr.getDefaults(), arguments))), this.name = "GreaterThanZero", this._thresh = this.output = new qo({
                        context: this.context,
                        length: 127,
                        mapping: (t1)=>t1 <= 0 ? 0 : 1
                    }), this._scale = this.input = new Yo({
                        context: this.context,
                        value: 1e4
                    }), this._scale.connect(this._thresh);
                }
                dispose() {
                    return super.dispose(), this._scale.dispose(), this._thresh.dispose(), this;
                }
            }
            class gr extends po {
                constructor(){
                    super(Object.assign(ui(gr.getDefaults(), arguments, [
                        "value"
                    ]))), this.name = "GreaterThan", this.override = !1;
                    const t1 = ui(gr.getDefaults(), arguments, [
                        "value"
                    ]);
                    this._subtract = this.input = new _r({
                        context: this.context,
                        value: t1.value
                    }), this._gtz = this.output = new mr({
                        context: this.context
                    }), this.comparator = this._param = this._subtract.subtrahend, Oi(this, "comparator"), this._subtract.connect(this._gtz);
                }
                static getDefaults() {
                    return Object.assign(po.getDefaults(), {
                        value: 0
                    });
                }
                dispose() {
                    return super.dispose(), this._gtz.dispose(), this._subtract.dispose(), this.comparator.dispose(), this;
                }
            }
            class vr extends ir {
                constructor(){
                    super(Object.assign(ui(vr.getDefaults(), arguments, [
                        "min",
                        "max",
                        "exponent"
                    ]))), this.name = "ScaleExp";
                    const t1 = ui(vr.getDefaults(), arguments, [
                        "min",
                        "max",
                        "exponent"
                    ]);
                    this.input = this._exp = new Fo({
                        context: this.context,
                        value: t1.exponent
                    }), this._exp.connect(this._mult);
                }
                static getDefaults() {
                    return Object.assign(ir.getDefaults(), {
                        exponent: 1
                    });
                }
                get exponent() {
                    return this._exp.value;
                }
                set exponent(t1) {
                    this._exp.value = t1;
                }
                dispose() {
                    return super.dispose(), this._exp.dispose(), this;
                }
            }
            class yr extends po {
                constructor(){
                    super(ui(po.getDefaults(), arguments, [
                        "value",
                        "units"
                    ])), this.name = "SyncedSignal", this.override = !1;
                    const t1 = ui(po.getDefaults(), arguments, [
                        "value",
                        "units"
                    ]);
                    this._lastVal = t1.value, this._synced = this.context.transport.scheduleRepeat(this._onTick.bind(this), "1i"), this._syncedCallback = this._anchorValue.bind(this), this.context.transport.on("start", this._syncedCallback), this.context.transport.on("pause", this._syncedCallback), this.context.transport.on("stop", this._syncedCallback), this._constantSource.disconnect(), this._constantSource.stop(0), this._constantSource = this.output = new uo({
                        context: this.context,
                        offset: t1.value,
                        units: t1.units
                    }).start(0), this.setValueAtTime(t1.value, 0);
                }
                _onTick(t1) {
                    const e = super.getValueAtTime(this.context.transport.seconds);
                    this._lastVal !== e && (this._lastVal = e, this._constantSource.offset.setValueAtTime(e, t1));
                }
                _anchorValue(t1) {
                    const e = super.getValueAtTime(this.context.transport.seconds);
                    this._lastVal = e, this._constantSource.offset.cancelAndHoldAtTime(t1), this._constantSource.offset.setValueAtTime(e, t1);
                }
                getValueAtTime(t1) {
                    const e = new Ki(this.context, t1).toSeconds();
                    return super.getValueAtTime(e);
                }
                setValueAtTime(t1, e) {
                    const s1 = new Ki(this.context, e).toSeconds();
                    return super.setValueAtTime(t1, s1), this;
                }
                linearRampToValueAtTime(t1, e) {
                    const s1 = new Ki(this.context, e).toSeconds();
                    return super.linearRampToValueAtTime(t1, s1), this;
                }
                exponentialRampToValueAtTime(t1, e) {
                    const s1 = new Ki(this.context, e).toSeconds();
                    return super.exponentialRampToValueAtTime(t1, s1), this;
                }
                setTargetAtTime(t1, e, s1) {
                    const n = new Ki(this.context, e).toSeconds();
                    return super.setTargetAtTime(t1, n, s1), this;
                }
                cancelScheduledValues(t1) {
                    const e = new Ki(this.context, t1).toSeconds();
                    return super.cancelScheduledValues(e), this;
                }
                setValueCurveAtTime(t1, e, s1, n) {
                    const i = new Ki(this.context, e).toSeconds();
                    return s1 = this.toSeconds(s1), super.setValueCurveAtTime(t1, i, s1, n), this;
                }
                cancelAndHoldAtTime(t1) {
                    const e = new Ki(this.context, t1).toSeconds();
                    return super.cancelAndHoldAtTime(e), this;
                }
                setRampPoint(t1) {
                    const e = new Ki(this.context, t1).toSeconds();
                    return super.setRampPoint(e), this;
                }
                exponentialRampTo(t1, e, s1) {
                    const n = new Ki(this.context, s1).toSeconds();
                    return super.exponentialRampTo(t1, e, n), this;
                }
                linearRampTo(t1, e, s1) {
                    const n = new Ki(this.context, s1).toSeconds();
                    return super.linearRampTo(t1, e, n), this;
                }
                targetRampTo(t1, e, s1) {
                    const n = new Ki(this.context, s1).toSeconds();
                    return super.targetRampTo(t1, e, n), this;
                }
                dispose() {
                    return super.dispose(), this.context.transport.clear(this._synced), this.context.transport.off("start", this._syncedCallback), this.context.transport.off("pause", this._syncedCallback), this.context.transport.off("stop", this._syncedCallback), this._constantSource.dispose(), this;
                }
            }
            class xr extends io {
                constructor(){
                    super(ui(xr.getDefaults(), arguments, [
                        "attack",
                        "decay",
                        "sustain",
                        "release"
                    ])), this.name = "Envelope", this._sig = new po({
                        context: this.context,
                        value: 0
                    }), this.output = this._sig, this.input = void 0;
                    const t1 = ui(xr.getDefaults(), arguments, [
                        "attack",
                        "decay",
                        "sustain",
                        "release"
                    ]);
                    this.attack = t1.attack, this.decay = t1.decay, this.sustain = t1.sustain, this.release = t1.release, this.attackCurve = t1.attackCurve, this.releaseCurve = t1.releaseCurve, this.decayCurve = t1.decayCurve;
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        attack: .01,
                        attackCurve: "linear",
                        decay: .1,
                        decayCurve: "exponential",
                        release: 1,
                        releaseCurve: "exponential",
                        sustain: .5
                    });
                }
                get value() {
                    return this.getValueAtTime(this.now());
                }
                _getCurve(t1, e) {
                    if (zn(t1)) return t1;
                    {
                        let s1;
                        for(s1 in wr)if (wr[s1][e] === t1) return s1;
                        return t1;
                    }
                }
                _setCurve(t1, e, s1) {
                    if (zn(s1) && Reflect.has(wr, s1)) {
                        const n = wr[s1];
                        Pn(n) ? "_decayCurve" !== t1 && (this[t1] = n[e]) : this[t1] = n;
                    } else {
                        if (!Ln(s1) || "_decayCurve" === t1) throw new Error("Envelope: invalid curve: " + s1);
                        this[t1] = s1;
                    }
                }
                get attackCurve() {
                    return this._getCurve(this._attackCurve, "In");
                }
                set attackCurve(t1) {
                    this._setCurve("_attackCurve", "In", t1);
                }
                get releaseCurve() {
                    return this._getCurve(this._releaseCurve, "Out");
                }
                set releaseCurve(t1) {
                    this._setCurve("_releaseCurve", "Out", t1);
                }
                get decayCurve() {
                    return this._getCurve(this._decayCurve, "Out");
                }
                set decayCurve(t1) {
                    this._setCurve("_decayCurve", "Out", t1);
                }
                triggerAttack(t1, e = 1) {
                    this.log("triggerAttack", t1, e), t1 = this.toSeconds(t1);
                    let s1 = this.toSeconds(this.attack);
                    const n = this.toSeconds(this.decay), i = this.getValueAtTime(t1);
                    if (i > 0 && (s1 = (1 - i) / (1 / s1)), s1 < this.sampleTime) this._sig.cancelScheduledValues(t1), this._sig.setValueAtTime(e, t1);
                    else if ("linear" === this._attackCurve) this._sig.linearRampTo(e, s1, t1);
                    else if ("exponential" === this._attackCurve) this._sig.targetRampTo(e, s1, t1);
                    else {
                        this._sig.cancelAndHoldAtTime(t1);
                        let n = this._attackCurve;
                        for(let t1 = 1; t1 < n.length; t1++)if (n[t1 - 1] <= i && i <= n[t1]) {
                            n = this._attackCurve.slice(t1), n[0] = i;
                            break;
                        }
                        this._sig.setValueCurveAtTime(n, t1, s1, e);
                    }
                    if (n && this.sustain < 1) {
                        const i = e * this.sustain, o = t1 + s1;
                        this.log("decay", o), "linear" === this._decayCurve ? this._sig.linearRampToValueAtTime(i, n + o) : this._sig.exponentialApproachValueAtTime(i, o, n);
                    }
                    return this;
                }
                triggerRelease(t1) {
                    this.log("triggerRelease", t1), t1 = this.toSeconds(t1);
                    const e = this.getValueAtTime(t1);
                    if (e > 0) {
                        const s1 = this.toSeconds(this.release);
                        s1 < this.sampleTime ? this._sig.setValueAtTime(0, t1) : "linear" === this._releaseCurve ? this._sig.linearRampTo(0, s1, t1) : "exponential" === this._releaseCurve ? this._sig.targetRampTo(0, s1, t1) : (Bn(Ln(this._releaseCurve), "releaseCurve must be either 'linear', 'exponential' or an array"), this._sig.cancelAndHoldAtTime(t1), this._sig.setValueCurveAtTime(this._releaseCurve, t1, s1, e));
                    }
                    return this;
                }
                getValueAtTime(t1) {
                    return this._sig.getValueAtTime(t1);
                }
                triggerAttackRelease(t1, e, s1 = 1) {
                    return e = this.toSeconds(e), this.triggerAttack(e, s1), this.triggerRelease(e + this.toSeconds(t1)), this;
                }
                cancel(t1) {
                    return this._sig.cancelScheduledValues(this.toSeconds(t1)), this;
                }
                connect(t1, e = 0, s1 = 0) {
                    return fo(this, t1, e, s1), this;
                }
                asArray(t1 = 1024) {
                    return ni(this, void 0, void 0, function*() {
                        const e = t1 / this.context.sampleRate, s1 = new qi(1, e, this.context.sampleRate), n = this.toSeconds(this.attack) + this.toSeconds(this.decay), i = n + this.toSeconds(this.release), o = .1 * i, r = i + o, a = new this.constructor(Object.assign(this.get(), {
                            attack: e * this.toSeconds(this.attack) / r,
                            decay: e * this.toSeconds(this.decay) / r,
                            release: e * this.toSeconds(this.release) / r,
                            context: s1
                        }));
                        return a._sig.toDestination(), a.triggerAttackRelease(e * (n + o) / r, 0), (yield s1.render()).getChannelData(0);
                    });
                }
                dispose() {
                    return super.dispose(), this._sig.dispose(), this;
                }
            }
            si([
                cr(0)
            ], xr.prototype, "attack", void 0), si([
                cr(0)
            ], xr.prototype, "decay", void 0), si([
                ar(0, 1)
            ], xr.prototype, "sustain", void 0), si([
                cr(0)
            ], xr.prototype, "release", void 0);
            const wr = (()=>{
                const t1 = 128;
                let e, s1;
                const n = [];
                for(e = 0; e < t1; e++)n[e] = Math.sin(e / 127 * (Math.PI / 2));
                const i = [];
                for(e = 0; e < 127; e++){
                    s1 = e / 127;
                    const t1 = Math.sin(s1 * (2 * Math.PI) * 6.4 - Math.PI / 2) + 1;
                    i[e] = t1 / 10 + .83 * s1;
                }
                i[127] = 1;
                const o = [];
                for(e = 0; e < t1; e++)o[e] = Math.ceil(e / 127 * 5) / 5;
                const r = [];
                for(e = 0; e < t1; e++)s1 = e / 127, r[e] = .5 * (1 - Math.cos(Math.PI * s1));
                const a = [];
                for(e = 0; e < t1; e++){
                    s1 = e / 127;
                    const t1 = 4 * Math.pow(s1, 3) + .2, n = Math.cos(t1 * Math.PI * 2 * s1);
                    a[e] = Math.abs(n * (1 - s1));
                }
                function c(t1) {
                    const e = new Array(t1.length);
                    for(let s1 = 0; s1 < t1.length; s1++)e[s1] = 1 - t1[s1];
                    return e;
                }
                var h;
                return {
                    bounce: {
                        In: c(a),
                        Out: a
                    },
                    cosine: {
                        In: n,
                        Out: (h = n, h.slice(0).reverse())
                    },
                    exponential: "exponential",
                    linear: "linear",
                    ripple: {
                        In: i,
                        Out: c(i)
                    },
                    sine: {
                        In: r,
                        Out: c(r)
                    },
                    step: {
                        In: o,
                        Out: c(o)
                    }
                };
            })();
            class br extends io {
                constructor(){
                    super(ui(br.getDefaults(), arguments)), this._scheduledEvents = [], this._synced = !1, this._original_triggerAttack = this.triggerAttack, this._original_triggerRelease = this.triggerRelease, this._syncedRelease = (t1)=>this._original_triggerRelease(t1);
                    const t1 = ui(br.getDefaults(), arguments);
                    this._volume = this.output = new Oo({
                        context: this.context,
                        volume: t1.volume
                    }), this.volume = this._volume.volume, Oi(this, "volume");
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        volume: 0
                    });
                }
                sync() {
                    return this._syncState() && (this._syncMethod("triggerAttack", 1), this._syncMethod("triggerRelease", 0), this.context.transport.on("stop", this._syncedRelease), this.context.transport.on("pause", this._syncedRelease), this.context.transport.on("loopEnd", this._syncedRelease)), this;
                }
                _syncState() {
                    let t1 = !1;
                    return this._synced || (this._synced = !0, t1 = !0), t1;
                }
                _syncMethod(t1, e) {
                    const s1 = this["_original_" + t1] = this[t1];
                    this[t1] = (...t1)=>{
                        const n = t1[e], i = this.context.transport.schedule((n)=>{
                            t1[e] = n, s1.apply(this, t1);
                        }, n);
                        this._scheduledEvents.push(i);
                    };
                }
                unsync() {
                    return this._scheduledEvents.forEach((t1)=>this.context.transport.clear(t1)), this._scheduledEvents = [], this._synced && (this._synced = !1, this.triggerAttack = this._original_triggerAttack, this.triggerRelease = this._original_triggerRelease, this.context.transport.off("stop", this._syncedRelease), this.context.transport.off("pause", this._syncedRelease), this.context.transport.off("loopEnd", this._syncedRelease)), this;
                }
                triggerAttackRelease(t1, e, s1, n) {
                    const i = this.toSeconds(s1), o = this.toSeconds(e);
                    return this.triggerAttack(t1, i, n), this.triggerRelease(i + o), this;
                }
                dispose() {
                    return super.dispose(), this._volume.dispose(), this.unsync(), this._scheduledEvents = [], this;
                }
            }
            class Tr extends br {
                constructor(){
                    super(ui(Tr.getDefaults(), arguments));
                    const t1 = ui(Tr.getDefaults(), arguments);
                    this.portamento = t1.portamento, this.onsilence = t1.onsilence;
                }
                static getDefaults() {
                    return Object.assign(br.getDefaults(), {
                        detune: 0,
                        onsilence: Ei,
                        portamento: 0
                    });
                }
                triggerAttack(t1, e, s1 = 1) {
                    this.log("triggerAttack", t1, e, s1);
                    const n = this.toSeconds(e);
                    return this._triggerEnvelopeAttack(n, s1), this.setNote(t1, n), this;
                }
                triggerRelease(t1) {
                    this.log("triggerRelease", t1);
                    const e = this.toSeconds(t1);
                    return this._triggerEnvelopeRelease(e), this;
                }
                setNote(t1, e) {
                    const s1 = this.toSeconds(e), n = t1 instanceof Yi ? t1.toFrequency() : t1;
                    if (this.portamento > 0 && this.getLevelAtTime(s1) > .05) {
                        const t1 = this.toSeconds(this.portamento);
                        this.frequency.exponentialRampTo(n, t1, s1);
                    } else this.frequency.setValueAtTime(n, s1);
                    return this;
                }
            }
            si([
                cr(0)
            ], Tr.prototype, "portamento", void 0);
            class Sr extends xr {
                constructor(){
                    super(ui(Sr.getDefaults(), arguments, [
                        "attack",
                        "decay",
                        "sustain",
                        "release"
                    ])), this.name = "AmplitudeEnvelope", this._gainNode = new ho({
                        context: this.context,
                        gain: 0
                    }), this.output = this._gainNode, this.input = this._gainNode, this._sig.connect(this._gainNode.gain), this.output = this._gainNode, this.input = this._gainNode;
                }
                dispose() {
                    return super.dispose(), this._gainNode.dispose(), this;
                }
            }
            class kr extends Tr {
                constructor(){
                    super(ui(kr.getDefaults(), arguments)), this.name = "Synth";
                    const t1 = ui(kr.getDefaults(), arguments);
                    this.oscillator = new sr(Object.assign({
                        context: this.context,
                        detune: t1.detune,
                        onstop: ()=>this.onsilence(this)
                    }, t1.oscillator)), this.frequency = this.oscillator.frequency, this.detune = this.oscillator.detune, this.envelope = new Sr(Object.assign({
                        context: this.context
                    }, t1.envelope)), this.oscillator.chain(this.envelope, this.output), Oi(this, [
                        "oscillator",
                        "frequency",
                        "detune",
                        "envelope"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(Tr.getDefaults(), {
                        envelope: Object.assign(di(xr.getDefaults(), Object.keys(io.getDefaults())), {
                            attack: .005,
                            decay: .1,
                            release: 1,
                            sustain: .3
                        }),
                        oscillator: Object.assign(di(sr.getDefaults(), [
                            ...Object.keys(Po.getDefaults()),
                            "frequency",
                            "detune"
                        ]), {
                            type: "triangle"
                        })
                    });
                }
                _triggerEnvelopeAttack(t1, e) {
                    if (this.envelope.triggerAttack(t1, e), this.oscillator.start(t1), 0 === this.envelope.sustain) {
                        const e = this.toSeconds(this.envelope.attack), s1 = this.toSeconds(this.envelope.decay);
                        this.oscillator.stop(t1 + e + s1);
                    }
                }
                _triggerEnvelopeRelease(t1) {
                    this.envelope.triggerRelease(t1), this.oscillator.stop(t1 + this.toSeconds(this.envelope.release));
                }
                getLevelAtTime(t1) {
                    return t1 = this.toSeconds(t1), this.envelope.getValueAtTime(t1);
                }
                dispose() {
                    return super.dispose(), this.oscillator.dispose(), this.envelope.dispose(), this;
                }
            }
            class Ar extends Tr {
                constructor(){
                    super(ui(Ar.getDefaults(), arguments)), this.name = "ModulationSynth";
                    const t1 = ui(Ar.getDefaults(), arguments);
                    this._carrier = new kr({
                        context: this.context,
                        oscillator: t1.oscillator,
                        envelope: t1.envelope,
                        onsilence: ()=>this.onsilence(this),
                        volume: -10
                    }), this._modulator = new kr({
                        context: this.context,
                        oscillator: t1.modulation,
                        envelope: t1.modulationEnvelope,
                        volume: -10
                    }), this.oscillator = this._carrier.oscillator, this.envelope = this._carrier.envelope, this.modulation = this._modulator.oscillator, this.modulationEnvelope = this._modulator.envelope, this.frequency = new po({
                        context: this.context,
                        units: "frequency"
                    }), this.detune = new po({
                        context: this.context,
                        value: t1.detune,
                        units: "cents"
                    }), this.harmonicity = new Yo({
                        context: this.context,
                        value: t1.harmonicity,
                        minValue: 0
                    }), this._modulationNode = new ho({
                        context: this.context,
                        gain: 0
                    }), Oi(this, [
                        "frequency",
                        "harmonicity",
                        "oscillator",
                        "envelope",
                        "modulation",
                        "modulationEnvelope",
                        "detune"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(Tr.getDefaults(), {
                        harmonicity: 3,
                        oscillator: Object.assign(di(sr.getDefaults(), [
                            ...Object.keys(Po.getDefaults()),
                            "frequency",
                            "detune"
                        ]), {
                            type: "sine"
                        }),
                        envelope: Object.assign(di(xr.getDefaults(), Object.keys(io.getDefaults())), {
                            attack: .01,
                            decay: .01,
                            sustain: 1,
                            release: .5
                        }),
                        modulation: Object.assign(di(sr.getDefaults(), [
                            ...Object.keys(Po.getDefaults()),
                            "frequency",
                            "detune"
                        ]), {
                            type: "square"
                        }),
                        modulationEnvelope: Object.assign(di(xr.getDefaults(), Object.keys(io.getDefaults())), {
                            attack: .5,
                            decay: 0,
                            sustain: 1,
                            release: .5
                        })
                    });
                }
                _triggerEnvelopeAttack(t1, e) {
                    this._carrier._triggerEnvelopeAttack(t1, e), this._modulator._triggerEnvelopeAttack(t1, e);
                }
                _triggerEnvelopeRelease(t1) {
                    return this._carrier._triggerEnvelopeRelease(t1), this._modulator._triggerEnvelopeRelease(t1), this;
                }
                getLevelAtTime(t1) {
                    return t1 = this.toSeconds(t1), this.envelope.getValueAtTime(t1);
                }
                dispose() {
                    return super.dispose(), this._carrier.dispose(), this._modulator.dispose(), this.frequency.dispose(), this.detune.dispose(), this.harmonicity.dispose(), this._modulationNode.dispose(), this;
                }
            }
            class Cr extends Ar {
                constructor(){
                    super(ui(Cr.getDefaults(), arguments)), this.name = "AMSynth", this._modulationScale = new Xo({
                        context: this.context
                    }), this.frequency.connect(this._carrier.frequency), this.frequency.chain(this.harmonicity, this._modulator.frequency), this.detune.fan(this._carrier.detune, this._modulator.detune), this._modulator.chain(this._modulationScale, this._modulationNode.gain), this._carrier.chain(this._modulationNode, this.output);
                }
                dispose() {
                    return super.dispose(), this._modulationScale.dispose(), this;
                }
            }
            class Dr extends io {
                constructor(){
                    super(ui(Dr.getDefaults(), arguments, [
                        "frequency",
                        "type"
                    ])), this.name = "BiquadFilter";
                    const t1 = ui(Dr.getDefaults(), arguments, [
                        "frequency",
                        "type"
                    ]);
                    this._filter = this.context.createBiquadFilter(), this.input = this.output = this._filter, this.Q = new no({
                        context: this.context,
                        units: "number",
                        value: t1.Q,
                        param: this._filter.Q
                    }), this.frequency = new no({
                        context: this.context,
                        units: "frequency",
                        value: t1.frequency,
                        param: this._filter.frequency
                    }), this.detune = new no({
                        context: this.context,
                        units: "cents",
                        value: t1.detune,
                        param: this._filter.detune
                    }), this.gain = new no({
                        context: this.context,
                        units: "decibels",
                        convert: !1,
                        value: t1.gain,
                        param: this._filter.gain
                    }), this.type = t1.type;
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        Q: 1,
                        type: "lowpass",
                        frequency: 350,
                        detune: 0,
                        gain: 0
                    });
                }
                get type() {
                    return this._filter.type;
                }
                set type(t1) {
                    Bn(-1 !== [
                        "lowpass",
                        "highpass",
                        "bandpass",
                        "lowshelf",
                        "highshelf",
                        "notch",
                        "allpass",
                        "peaking"
                    ].indexOf(t1), `Invalid filter type: ${t1}`), this._filter.type = t1;
                }
                getFrequencyResponse(t1 = 128) {
                    const e = new Float32Array(t1);
                    for(let s1 = 0; s1 < t1; s1++){
                        const n = 19980 * Math.pow(s1 / t1, 2) + 20;
                        e[s1] = n;
                    }
                    const s1 = new Float32Array(t1), n = new Float32Array(t1), i = this.context.createBiquadFilter();
                    return i.type = this.type, i.Q.value = this.Q.value, i.frequency.value = this.frequency.value, i.gain.value = this.gain.value, i.getFrequencyResponse(e, s1, n), s1;
                }
                dispose() {
                    return super.dispose(), this._filter.disconnect(), this.Q.dispose(), this.frequency.dispose(), this.gain.dispose(), this.detune.dispose(), this;
                }
            }
            class Or extends io {
                constructor(){
                    super(ui(Or.getDefaults(), arguments, [
                        "frequency",
                        "type",
                        "rolloff"
                    ])), this.name = "Filter", this.input = new ho({
                        context: this.context
                    }), this.output = new ho({
                        context: this.context
                    }), this._filters = [];
                    const t1 = ui(Or.getDefaults(), arguments, [
                        "frequency",
                        "type",
                        "rolloff"
                    ]);
                    this._filters = [], this.Q = new po({
                        context: this.context,
                        units: "positive",
                        value: t1.Q
                    }), this.frequency = new po({
                        context: this.context,
                        units: "frequency",
                        value: t1.frequency
                    }), this.detune = new po({
                        context: this.context,
                        units: "cents",
                        value: t1.detune
                    }), this.gain = new po({
                        context: this.context,
                        units: "decibels",
                        convert: !1,
                        value: t1.gain
                    }), this._type = t1.type, this.rolloff = t1.rolloff, Oi(this, [
                        "detune",
                        "frequency",
                        "gain",
                        "Q"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        Q: 1,
                        detune: 0,
                        frequency: 350,
                        gain: 0,
                        rolloff: -12,
                        type: "lowpass"
                    });
                }
                get type() {
                    return this._type;
                }
                set type(t1) {
                    Bn(-1 !== [
                        "lowpass",
                        "highpass",
                        "bandpass",
                        "lowshelf",
                        "highshelf",
                        "notch",
                        "allpass",
                        "peaking"
                    ].indexOf(t1), `Invalid filter type: ${t1}`), this._type = t1, this._filters.forEach((e)=>e.type = t1);
                }
                get rolloff() {
                    return this._rolloff;
                }
                set rolloff(t1) {
                    const e = Nn(t1) ? t1 : parseInt(t1, 10), s1 = [
                        -12,
                        -24,
                        -48,
                        -96
                    ];
                    let n = s1.indexOf(e);
                    Bn(-1 !== n, `rolloff can only be ${s1.join(", ")}`), n += 1, this._rolloff = e, this.input.disconnect(), this._filters.forEach((t1)=>t1.disconnect()), this._filters = new Array(n);
                    for(let t1 = 0; t1 < n; t1++){
                        const e = new Dr({
                            context: this.context
                        });
                        e.type = this._type, this.frequency.connect(e.frequency), this.detune.connect(e.detune), this.Q.connect(e.Q), this.gain.connect(e.gain), this._filters[t1] = e;
                    }
                    this._internalChannels = this._filters, oo(this.input, ...this._internalChannels, this.output);
                }
                getFrequencyResponse(t1 = 128) {
                    const e = new Dr({
                        frequency: this.frequency.value,
                        gain: this.gain.value,
                        Q: this.Q.value,
                        type: this._type,
                        detune: this.detune.value
                    }), s1 = new Float32Array(t1).map(()=>1);
                    return this._filters.forEach(()=>{
                        e.getFrequencyResponse(t1).forEach((t1, e)=>s1[e] *= t1);
                    }), e.dispose(), s1;
                }
                dispose() {
                    return super.dispose(), this._filters.forEach((t1)=>{
                        t1.dispose();
                    }), Mi(this, [
                        "detune",
                        "frequency",
                        "gain",
                        "Q"
                    ]), this.frequency.dispose(), this.Q.dispose(), this.detune.dispose(), this.gain.dispose(), this;
                }
            }
            class Mr extends xr {
                constructor(){
                    super(ui(Mr.getDefaults(), arguments, [
                        "attack",
                        "decay",
                        "sustain",
                        "release"
                    ])), this.name = "FrequencyEnvelope";
                    const t1 = ui(Mr.getDefaults(), arguments, [
                        "attack",
                        "decay",
                        "sustain",
                        "release"
                    ]);
                    this._octaves = t1.octaves, this._baseFrequency = this.toFrequency(t1.baseFrequency), this._exponent = this.input = new Fo({
                        context: this.context,
                        value: t1.exponent
                    }), this._scale = this.output = new ir({
                        context: this.context,
                        min: this._baseFrequency,
                        max: this._baseFrequency * Math.pow(2, this._octaves)
                    }), this._sig.chain(this._exponent, this._scale);
                }
                static getDefaults() {
                    return Object.assign(xr.getDefaults(), {
                        baseFrequency: 200,
                        exponent: 1,
                        octaves: 4
                    });
                }
                get baseFrequency() {
                    return this._baseFrequency;
                }
                set baseFrequency(t1) {
                    const e = this.toFrequency(t1);
                    Un(e, 0), this._baseFrequency = e, this._scale.min = this._baseFrequency, this.octaves = this._octaves;
                }
                get octaves() {
                    return this._octaves;
                }
                set octaves(t1) {
                    this._octaves = t1, this._scale.max = this._baseFrequency * Math.pow(2, t1);
                }
                get exponent() {
                    return this._exponent.value;
                }
                set exponent(t1) {
                    this._exponent.value = t1;
                }
                dispose() {
                    return super.dispose(), this._exponent.dispose(), this._scale.dispose(), this;
                }
            }
            class Er extends Tr {
                constructor(){
                    super(ui(Er.getDefaults(), arguments)), this.name = "MonoSynth";
                    const t1 = ui(Er.getDefaults(), arguments);
                    this.oscillator = new sr(Object.assign(t1.oscillator, {
                        context: this.context,
                        detune: t1.detune,
                        onstop: ()=>this.onsilence(this)
                    })), this.frequency = this.oscillator.frequency, this.detune = this.oscillator.detune, this.filter = new Or(Object.assign(t1.filter, {
                        context: this.context
                    })), this.filterEnvelope = new Mr(Object.assign(t1.filterEnvelope, {
                        context: this.context
                    })), this.envelope = new Sr(Object.assign(t1.envelope, {
                        context: this.context
                    })), this.oscillator.chain(this.filter, this.envelope, this.output), this.filterEnvelope.connect(this.filter.frequency), Oi(this, [
                        "oscillator",
                        "frequency",
                        "detune",
                        "filter",
                        "filterEnvelope",
                        "envelope"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(Tr.getDefaults(), {
                        envelope: Object.assign(di(xr.getDefaults(), Object.keys(io.getDefaults())), {
                            attack: .005,
                            decay: .1,
                            release: 1,
                            sustain: .9
                        }),
                        filter: Object.assign(di(Or.getDefaults(), Object.keys(io.getDefaults())), {
                            Q: 1,
                            rolloff: -12,
                            type: "lowpass"
                        }),
                        filterEnvelope: Object.assign(di(Mr.getDefaults(), Object.keys(io.getDefaults())), {
                            attack: .6,
                            baseFrequency: 200,
                            decay: .2,
                            exponent: 2,
                            octaves: 3,
                            release: 2,
                            sustain: .5
                        }),
                        oscillator: Object.assign(di(sr.getDefaults(), Object.keys(Po.getDefaults())), {
                            type: "sawtooth"
                        })
                    });
                }
                _triggerEnvelopeAttack(t1, e = 1) {
                    if (this.envelope.triggerAttack(t1, e), this.filterEnvelope.triggerAttack(t1), this.oscillator.start(t1), 0 === this.envelope.sustain) {
                        const e = this.toSeconds(this.envelope.attack), s1 = this.toSeconds(this.envelope.decay);
                        this.oscillator.stop(t1 + e + s1);
                    }
                }
                _triggerEnvelopeRelease(t1) {
                    this.envelope.triggerRelease(t1), this.filterEnvelope.triggerRelease(t1), this.oscillator.stop(t1 + this.toSeconds(this.envelope.release));
                }
                getLevelAtTime(t1) {
                    return t1 = this.toSeconds(t1), this.envelope.getValueAtTime(t1);
                }
                dispose() {
                    return super.dispose(), this.oscillator.dispose(), this.envelope.dispose(), this.filterEnvelope.dispose(), this.filter.dispose(), this;
                }
            }
            class Rr extends Tr {
                constructor(){
                    super(ui(Rr.getDefaults(), arguments)), this.name = "DuoSynth";
                    const t1 = ui(Rr.getDefaults(), arguments);
                    this.voice0 = new Er(Object.assign(t1.voice0, {
                        context: this.context,
                        onsilence: ()=>this.onsilence(this)
                    })), this.voice1 = new Er(Object.assign(t1.voice1, {
                        context: this.context
                    })), this.harmonicity = new Yo({
                        context: this.context,
                        units: "positive",
                        value: t1.harmonicity
                    }), this._vibrato = new rr({
                        frequency: t1.vibratoRate,
                        context: this.context,
                        min: -50,
                        max: 50
                    }), this._vibrato.start(), this.vibratoRate = this._vibrato.frequency, this._vibratoGain = new ho({
                        context: this.context,
                        units: "normalRange",
                        gain: t1.vibratoAmount
                    }), this.vibratoAmount = this._vibratoGain.gain, this.frequency = new po({
                        context: this.context,
                        units: "frequency",
                        value: 440
                    }), this.detune = new po({
                        context: this.context,
                        units: "cents",
                        value: t1.detune
                    }), this.frequency.connect(this.voice0.frequency), this.frequency.chain(this.harmonicity, this.voice1.frequency), this._vibrato.connect(this._vibratoGain), this._vibratoGain.fan(this.voice0.detune, this.voice1.detune), this.detune.fan(this.voice0.detune, this.voice1.detune), this.voice0.connect(this.output), this.voice1.connect(this.output), Oi(this, [
                        "voice0",
                        "voice1",
                        "frequency",
                        "vibratoAmount",
                        "vibratoRate"
                    ]);
                }
                getLevelAtTime(t1) {
                    return t1 = this.toSeconds(t1), this.voice0.envelope.getValueAtTime(t1) + this.voice1.envelope.getValueAtTime(t1);
                }
                static getDefaults() {
                    return li(Tr.getDefaults(), {
                        vibratoAmount: .5,
                        vibratoRate: 5,
                        harmonicity: 1.5,
                        voice0: li(di(Er.getDefaults(), Object.keys(Tr.getDefaults())), {
                            filterEnvelope: {
                                attack: .01,
                                decay: 0,
                                sustain: 1,
                                release: .5
                            },
                            envelope: {
                                attack: .01,
                                decay: 0,
                                sustain: 1,
                                release: .5
                            }
                        }),
                        voice1: li(di(Er.getDefaults(), Object.keys(Tr.getDefaults())), {
                            filterEnvelope: {
                                attack: .01,
                                decay: 0,
                                sustain: 1,
                                release: .5
                            },
                            envelope: {
                                attack: .01,
                                decay: 0,
                                sustain: 1,
                                release: .5
                            }
                        })
                    });
                }
                _triggerEnvelopeAttack(t1, e) {
                    this.voice0._triggerEnvelopeAttack(t1, e), this.voice1._triggerEnvelopeAttack(t1, e);
                }
                _triggerEnvelopeRelease(t1) {
                    return this.voice0._triggerEnvelopeRelease(t1), this.voice1._triggerEnvelopeRelease(t1), this;
                }
                dispose() {
                    return super.dispose(), this.voice0.dispose(), this.voice1.dispose(), this.frequency.dispose(), this.detune.dispose(), this._vibrato.dispose(), this.vibratoRate.dispose(), this._vibratoGain.dispose(), this.harmonicity.dispose(), this;
                }
            }
            class qr extends Ar {
                constructor(){
                    super(ui(qr.getDefaults(), arguments)), this.name = "FMSynth";
                    const t1 = ui(qr.getDefaults(), arguments);
                    this.modulationIndex = new Yo({
                        context: this.context,
                        value: t1.modulationIndex
                    }), this.frequency.connect(this._carrier.frequency), this.frequency.chain(this.harmonicity, this._modulator.frequency), this.frequency.chain(this.modulationIndex, this._modulationNode), this.detune.fan(this._carrier.detune, this._modulator.detune), this._modulator.connect(this._modulationNode.gain), this._modulationNode.connect(this._carrier.frequency), this._carrier.connect(this.output);
                }
                static getDefaults() {
                    return Object.assign(Ar.getDefaults(), {
                        modulationIndex: 10
                    });
                }
                dispose() {
                    return super.dispose(), this.modulationIndex.dispose(), this;
                }
            }
            const Fr = [
                1,
                1.483,
                1.932,
                2.546,
                2.63,
                3.897
            ];
            class Ir extends Tr {
                constructor(){
                    super(ui(Ir.getDefaults(), arguments)), this.name = "MetalSynth", this._oscillators = [], this._freqMultipliers = [];
                    const t1 = ui(Ir.getDefaults(), arguments);
                    this.detune = new po({
                        context: this.context,
                        units: "cents",
                        value: t1.detune
                    }), this.frequency = new po({
                        context: this.context,
                        units: "frequency"
                    }), this._amplitude = new ho({
                        context: this.context,
                        gain: 0
                    }).connect(this.output), this._highpass = new Or({
                        Q: 0,
                        context: this.context,
                        type: "highpass"
                    }).connect(this._amplitude);
                    for(let e = 0; e < Fr.length; e++){
                        const s1 = new Ho({
                            context: this.context,
                            harmonicity: t1.harmonicity,
                            modulationIndex: t1.modulationIndex,
                            modulationType: "square",
                            onstop: 0 === e ? ()=>this.onsilence(this) : Ei,
                            type: "square"
                        });
                        s1.connect(this._highpass), this._oscillators[e] = s1;
                        const n = new Yo({
                            context: this.context,
                            value: Fr[e]
                        });
                        this._freqMultipliers[e] = n, this.frequency.chain(n, s1.frequency), this.detune.connect(s1.detune);
                    }
                    this._filterFreqScaler = new ir({
                        context: this.context,
                        max: 7e3,
                        min: this.toFrequency(t1.resonance)
                    }), this.envelope = new xr({
                        attack: t1.envelope.attack,
                        attackCurve: "linear",
                        context: this.context,
                        decay: t1.envelope.decay,
                        release: t1.envelope.release,
                        sustain: 0
                    }), this.envelope.chain(this._filterFreqScaler, this._highpass.frequency), this.envelope.connect(this._amplitude.gain), this._octaves = t1.octaves, this.octaves = t1.octaves;
                }
                static getDefaults() {
                    return li(Tr.getDefaults(), {
                        envelope: Object.assign(di(xr.getDefaults(), Object.keys(io.getDefaults())), {
                            attack: .001,
                            decay: 1.4,
                            release: .2
                        }),
                        harmonicity: 5.1,
                        modulationIndex: 32,
                        octaves: 1.5,
                        resonance: 4e3
                    });
                }
                _triggerEnvelopeAttack(t1, e = 1) {
                    return this.envelope.triggerAttack(t1, e), this._oscillators.forEach((e)=>e.start(t1)), 0 === this.envelope.sustain && this._oscillators.forEach((e)=>{
                        e.stop(t1 + this.toSeconds(this.envelope.attack) + this.toSeconds(this.envelope.decay));
                    }), this;
                }
                _triggerEnvelopeRelease(t1) {
                    return this.envelope.triggerRelease(t1), this._oscillators.forEach((e)=>e.stop(t1 + this.toSeconds(this.envelope.release))), this;
                }
                getLevelAtTime(t1) {
                    return t1 = this.toSeconds(t1), this.envelope.getValueAtTime(t1);
                }
                get modulationIndex() {
                    return this._oscillators[0].modulationIndex.value;
                }
                set modulationIndex(t1) {
                    this._oscillators.forEach((e)=>e.modulationIndex.value = t1);
                }
                get harmonicity() {
                    return this._oscillators[0].harmonicity.value;
                }
                set harmonicity(t1) {
                    this._oscillators.forEach((e)=>e.harmonicity.value = t1);
                }
                get resonance() {
                    return this._filterFreqScaler.min;
                }
                set resonance(t1) {
                    this._filterFreqScaler.min = this.toFrequency(t1), this.octaves = this._octaves;
                }
                get octaves() {
                    return this._octaves;
                }
                set octaves(t1) {
                    this._octaves = t1, this._filterFreqScaler.max = this._filterFreqScaler.min * Math.pow(2, t1);
                }
                dispose() {
                    return super.dispose(), this._oscillators.forEach((t1)=>t1.dispose()), this._freqMultipliers.forEach((t1)=>t1.dispose()), this.frequency.dispose(), this.detune.dispose(), this._filterFreqScaler.dispose(), this._amplitude.dispose(), this.envelope.dispose(), this._highpass.dispose(), this;
                }
            }
            class Vr extends kr {
                constructor(){
                    super(ui(Vr.getDefaults(), arguments)), this.name = "MembraneSynth", this.portamento = 0;
                    const t1 = ui(Vr.getDefaults(), arguments);
                    this.pitchDecay = t1.pitchDecay, this.octaves = t1.octaves, Oi(this, [
                        "oscillator",
                        "envelope"
                    ]);
                }
                static getDefaults() {
                    return li(Tr.getDefaults(), kr.getDefaults(), {
                        envelope: {
                            attack: .001,
                            attackCurve: "exponential",
                            decay: .4,
                            release: 1.4,
                            sustain: .01
                        },
                        octaves: 10,
                        oscillator: {
                            type: "sine"
                        },
                        pitchDecay: .05
                    });
                }
                setNote(t1, e) {
                    const s1 = this.toSeconds(e), n = this.toFrequency(t1 instanceof Yi ? t1.toFrequency() : t1), i = n * this.octaves;
                    return this.oscillator.frequency.setValueAtTime(i, s1), this.oscillator.frequency.exponentialRampToValueAtTime(n, s1 + this.toSeconds(this.pitchDecay)), this;
                }
                dispose() {
                    return super.dispose(), this;
                }
            }
            si([
                ar(0)
            ], Vr.prototype, "octaves", void 0), si([
                cr(0)
            ], Vr.prototype, "pitchDecay", void 0);
            class Nr extends br {
                constructor(){
                    super(ui(Nr.getDefaults(), arguments)), this.name = "NoiseSynth";
                    const t1 = ui(Nr.getDefaults(), arguments);
                    this.noise = new Lo(Object.assign({
                        context: this.context
                    }, t1.noise)), this.envelope = new Sr(Object.assign({
                        context: this.context
                    }, t1.envelope)), this.noise.chain(this.envelope, this.output);
                }
                static getDefaults() {
                    return Object.assign(br.getDefaults(), {
                        envelope: Object.assign(di(xr.getDefaults(), Object.keys(io.getDefaults())), {
                            decay: .1,
                            sustain: 0
                        }),
                        noise: Object.assign(di(Lo.getDefaults(), Object.keys(Po.getDefaults())), {
                            type: "white"
                        })
                    });
                }
                triggerAttack(t1, e = 1) {
                    return t1 = this.toSeconds(t1), this.envelope.triggerAttack(t1, e), this.noise.start(t1), 0 === this.envelope.sustain && this.noise.stop(t1 + this.toSeconds(this.envelope.attack) + this.toSeconds(this.envelope.decay)), this;
                }
                triggerRelease(t1) {
                    return t1 = this.toSeconds(t1), this.envelope.triggerRelease(t1), this.noise.stop(t1 + this.toSeconds(this.envelope.release)), this;
                }
                sync() {
                    return this._syncState() && (this._syncMethod("triggerAttack", 0), this._syncMethod("triggerRelease", 0)), this;
                }
                triggerAttackRelease(t1, e, s1 = 1) {
                    return e = this.toSeconds(e), t1 = this.toSeconds(t1), this.triggerAttack(e, s1), this.triggerRelease(e + t1), this;
                }
                dispose() {
                    return super.dispose(), this.noise.dispose(), this.envelope.dispose(), this;
                }
            }
            const Pr = new Set;
            function jr(t1) {
                Pr.add(t1);
            }
            function Lr(t1, e) {
                const s1 = `registerProcessor("${t1}", ${e})`;
                Pr.add(s1);
            }
            class zr extends io {
                constructor(t1){
                    super(t1), this.name = "ToneAudioWorklet", this.workletOptions = {}, this.onprocessorerror = Ei;
                    const e = URL.createObjectURL(new Blob([
                        Array.from(Pr).join("\n")
                    ], {
                        type: "text/javascript"
                    })), s1 = this._audioWorkletName();
                    this._dummyGain = this.context.createGain(), this._dummyParam = this._dummyGain.gain, this.context.addAudioWorkletModule(e).then(()=>{
                        this.disposed || (this._worklet = this.context.createAudioWorkletNode(s1, this.workletOptions), this._worklet.onprocessorerror = this.onprocessorerror.bind(this), this.onReady(this._worklet));
                    });
                }
                dispose() {
                    return super.dispose(), this._dummyGain.disconnect(), this._worklet && (this._worklet.port.postMessage("dispose"), this._worklet.disconnect()), this;
                }
            }
            jr('\n\t/**\n\t * The base AudioWorkletProcessor for use in Tone.js. Works with the {@link ToneAudioWorklet}. \n\t */\n\tclass ToneAudioWorkletProcessor extends AudioWorkletProcessor {\n\n\t\tconstructor(options) {\n\t\t\t\n\t\t\tsuper(options);\n\t\t\t/**\n\t\t\t * If the processor was disposed or not. Keep alive until it\'s disposed.\n\t\t\t */\n\t\t\tthis.disposed = false;\n\t\t   \t/** \n\t\t\t * The number of samples in the processing block\n\t\t\t */\n\t\t\tthis.blockSize = 128;\n\t\t\t/**\n\t\t\t * the sample rate\n\t\t\t */\n\t\t\tthis.sampleRate = sampleRate;\n\n\t\t\tthis.port.onmessage = (event) => {\n\t\t\t\t// when it receives a dispose \n\t\t\t\tif (event.data === "dispose") {\n\t\t\t\t\tthis.disposed = true;\n\t\t\t\t}\n\t\t\t};\n\t\t}\n\t}\n'), jr("\n\t/**\n\t * Abstract class for a single input/output processor. \n\t * has a 'generate' function which processes one sample at a time\n\t */\n\tclass SingleIOProcessor extends ToneAudioWorkletProcessor {\n\n\t\tconstructor(options) {\n\t\t\tsuper(Object.assign(options, {\n\t\t\t\tnumberOfInputs: 1,\n\t\t\t\tnumberOfOutputs: 1\n\t\t\t}));\n\t\t\t/**\n\t\t\t * Holds the name of the parameter and a single value of that\n\t\t\t * parameter at the current sample\n\t\t\t * @type { [name: string]: number }\n\t\t\t */\n\t\t\tthis.params = {}\n\t\t}\n\n\t\t/**\n\t\t * Generate an output sample from the input sample and parameters\n\t\t * @abstract\n\t\t * @param input number\n\t\t * @param channel number\n\t\t * @param parameters { [name: string]: number }\n\t\t * @returns number\n\t\t */\n\t\tgenerate(){}\n\n\t\t/**\n\t\t * Update the private params object with the \n\t\t * values of the parameters at the given index\n\t\t * @param parameters { [name: string]: Float32Array },\n\t\t * @param index number\n\t\t */\n\t\tupdateParams(parameters, index) {\n\t\t\tfor (const paramName in parameters) {\n\t\t\t\tconst param = parameters[paramName];\n\t\t\t\tif (param.length > 1) {\n\t\t\t\t\tthis.params[paramName] = parameters[paramName][index];\n\t\t\t\t} else {\n\t\t\t\t\tthis.params[paramName] = parameters[paramName][0];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t/**\n\t\t * Process a single frame of the audio\n\t\t * @param inputs Float32Array[][]\n\t\t * @param outputs Float32Array[][]\n\t\t */\n\t\tprocess(inputs, outputs, parameters) {\n\t\t\tconst input = inputs[0];\n\t\t\tconst output = outputs[0];\n\t\t\t// get the parameter values\n\t\t\tconst channelCount = Math.max(input && input.length || 0, output.length);\n\t\t\tfor (let sample = 0; sample < this.blockSize; sample++) {\n\t\t\t\tthis.updateParams(parameters, sample);\n\t\t\t\tfor (let channel = 0; channel < channelCount; channel++) {\n\t\t\t\t\tconst inputSample = input && input.length ? input[channel][sample] : 0;\n\t\t\t\t\toutput[channel][sample] = this.generate(inputSample, channel, this.params);\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn !this.disposed;\n\t\t}\n\t};\n"), jr("\n\t/**\n\t * A multichannel buffer for use within an AudioWorkletProcessor as a delay line\n\t */\n\tclass DelayLine {\n\t\t\n\t\tconstructor(size, channels) {\n\t\t\tthis.buffer = [];\n\t\t\tthis.writeHead = []\n\t\t\tthis.size = size;\n\n\t\t\t// create the empty channels\n\t\t\tfor (let i = 0; i < channels; i++) {\n\t\t\t\tthis.buffer[i] = new Float32Array(this.size);\n\t\t\t\tthis.writeHead[i] = 0;\n\t\t\t}\n\t\t}\n\n\t\t/**\n\t\t * Push a value onto the end\n\t\t * @param channel number\n\t\t * @param value number\n\t\t */\n\t\tpush(channel, value) {\n\t\t\tthis.writeHead[channel] += 1;\n\t\t\tif (this.writeHead[channel] > this.size) {\n\t\t\t\tthis.writeHead[channel] = 0;\n\t\t\t}\n\t\t\tthis.buffer[channel][this.writeHead[channel]] = value;\n\t\t}\n\n\t\t/**\n\t\t * Get the recorded value of the channel given the delay\n\t\t * @param channel number\n\t\t * @param delay number delay samples\n\t\t */\n\t\tget(channel, delay) {\n\t\t\tlet readHead = this.writeHead[channel] - Math.floor(delay);\n\t\t\tif (readHead < 0) {\n\t\t\t\treadHead += this.size;\n\t\t\t}\n\t\t\treturn this.buffer[channel][readHead];\n\t\t}\n\t}\n");
            const Wr = "feedback-comb-filter";
            Lr(Wr, '\n\tclass FeedbackCombFilterWorklet extends SingleIOProcessor {\n\n\t\tconstructor(options) {\n\t\t\tsuper(options);\n\t\t\tthis.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);\n\t\t}\n\n\t\tstatic get parameterDescriptors() {\n\t\t\treturn [{\n\t\t\t\tname: "delayTime",\n\t\t\t\tdefaultValue: 0.1,\n\t\t\t\tminValue: 0,\n\t\t\t\tmaxValue: 1,\n\t\t\t\tautomationRate: "k-rate"\n\t\t\t}, {\n\t\t\t\tname: "feedback",\n\t\t\t\tdefaultValue: 0.5,\n\t\t\t\tminValue: 0,\n\t\t\t\tmaxValue: 0.9999,\n\t\t\t\tautomationRate: "k-rate"\n\t\t\t}];\n\t\t}\n\n\t\tgenerate(input, channel, parameters) {\n\t\t\tconst delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);\n\t\t\tthis.delayLine.push(channel, input + delayedSample * parameters.feedback);\n\t\t\treturn delayedSample;\n\t\t}\n\t}\n');
            class Br extends zr {
                constructor(){
                    super(ui(Br.getDefaults(), arguments, [
                        "delayTime",
                        "resonance"
                    ])), this.name = "FeedbackCombFilter";
                    const t1 = ui(Br.getDefaults(), arguments, [
                        "delayTime",
                        "resonance"
                    ]);
                    this.input = new ho({
                        context: this.context
                    }), this.output = new ho({
                        context: this.context
                    }), this.delayTime = new no({
                        context: this.context,
                        value: t1.delayTime,
                        units: "time",
                        minValue: 0,
                        maxValue: 1,
                        param: this._dummyParam,
                        swappable: !0
                    }), this.resonance = new no({
                        context: this.context,
                        value: t1.resonance,
                        units: "normalRange",
                        param: this._dummyParam,
                        swappable: !0
                    }), Oi(this, [
                        "resonance",
                        "delayTime"
                    ]);
                }
                _audioWorkletName() {
                    return Wr;
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        delayTime: .1,
                        resonance: .5
                    });
                }
                onReady(t1) {
                    oo(this.input, t1, this.output);
                    const e = t1.parameters.get("delayTime");
                    this.delayTime.setParam(e);
                    const s1 = t1.parameters.get("feedback");
                    this.resonance.setParam(s1);
                }
                dispose() {
                    return super.dispose(), this.input.dispose(), this.output.dispose(), this.delayTime.dispose(), this.resonance.dispose(), this;
                }
            }
            class Ur extends io {
                constructor(){
                    super(ui(Ur.getDefaults(), arguments, [
                        "frequency",
                        "type"
                    ])), this.name = "OnePoleFilter";
                    const t1 = ui(Ur.getDefaults(), arguments, [
                        "frequency",
                        "type"
                    ]);
                    this._frequency = t1.frequency, this._type = t1.type, this.input = new ho({
                        context: this.context
                    }), this.output = new ho({
                        context: this.context
                    }), this._createFilter();
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        frequency: 880,
                        type: "lowpass"
                    });
                }
                _createFilter() {
                    const t1 = this._filter, e = this.toFrequency(this._frequency), s1 = 1 / (2 * Math.PI * e);
                    if ("lowpass" === this._type) {
                        const t1 = 1 / (s1 * this.context.sampleRate), e = t1 - 1;
                        this._filter = this.context.createIIRFilter([
                            t1,
                            0
                        ], [
                            1,
                            e
                        ]);
                    } else {
                        const t1 = 1 / (s1 * this.context.sampleRate) - 1;
                        this._filter = this.context.createIIRFilter([
                            1,
                            -1
                        ], [
                            1,
                            t1
                        ]);
                    }
                    this.input.chain(this._filter, this.output), t1 && this.context.setTimeout(()=>{
                        this.disposed || (this.input.disconnect(t1), t1.disconnect());
                    }, this.blockTime);
                }
                get frequency() {
                    return this._frequency;
                }
                set frequency(t1) {
                    this._frequency = t1, this._createFilter();
                }
                get type() {
                    return this._type;
                }
                set type(t1) {
                    this._type = t1, this._createFilter();
                }
                getFrequencyResponse(t1 = 128) {
                    const e = new Float32Array(t1);
                    for(let s1 = 0; s1 < t1; s1++){
                        const n = 19980 * Math.pow(s1 / t1, 2) + 20;
                        e[s1] = n;
                    }
                    const s1 = new Float32Array(t1), n = new Float32Array(t1);
                    return this._filter.getFrequencyResponse(e, s1, n), s1;
                }
                dispose() {
                    return super.dispose(), this.input.dispose(), this.output.dispose(), this._filter.disconnect(), this;
                }
            }
            class Gr extends io {
                constructor(){
                    super(ui(Gr.getDefaults(), arguments, [
                        "delayTime",
                        "resonance",
                        "dampening"
                    ])), this.name = "LowpassCombFilter";
                    const t1 = ui(Gr.getDefaults(), arguments, [
                        "delayTime",
                        "resonance",
                        "dampening"
                    ]);
                    this._combFilter = this.output = new Br({
                        context: this.context,
                        delayTime: t1.delayTime,
                        resonance: t1.resonance
                    }), this.delayTime = this._combFilter.delayTime, this.resonance = this._combFilter.resonance, this._lowpass = this.input = new Ur({
                        context: this.context,
                        frequency: t1.dampening,
                        type: "lowpass"
                    }), this._lowpass.connect(this._combFilter);
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        dampening: 3e3,
                        delayTime: .1,
                        resonance: .5
                    });
                }
                get dampening() {
                    return this._lowpass.frequency;
                }
                set dampening(t1) {
                    this._lowpass.frequency = t1;
                }
                dispose() {
                    return super.dispose(), this._combFilter.dispose(), this._lowpass.dispose(), this;
                }
            }
            class Qr extends br {
                constructor(){
                    super(ui(Qr.getDefaults(), arguments)), this.name = "PluckSynth";
                    const t1 = ui(Qr.getDefaults(), arguments);
                    this._noise = new Lo({
                        context: this.context,
                        type: "pink"
                    }), this.attackNoise = t1.attackNoise, this._lfcf = new Gr({
                        context: this.context,
                        dampening: t1.dampening,
                        resonance: t1.resonance
                    }), this.resonance = t1.resonance, this.release = t1.release, this._noise.connect(this._lfcf), this._lfcf.connect(this.output);
                }
                static getDefaults() {
                    return li(br.getDefaults(), {
                        attackNoise: 1,
                        dampening: 4e3,
                        resonance: .7,
                        release: 1
                    });
                }
                get dampening() {
                    return this._lfcf.dampening;
                }
                set dampening(t1) {
                    this._lfcf.dampening = t1;
                }
                triggerAttack(t1, e) {
                    const s1 = this.toFrequency(t1);
                    e = this.toSeconds(e);
                    const n = 1 / s1;
                    return this._lfcf.delayTime.setValueAtTime(n, e), this._noise.start(e), this._noise.stop(e + n * this.attackNoise), this._lfcf.resonance.cancelScheduledValues(e), this._lfcf.resonance.setValueAtTime(this.resonance, e), this;
                }
                triggerRelease(t1) {
                    return this._lfcf.resonance.linearRampTo(0, this.release, t1), this;
                }
                dispose() {
                    return super.dispose(), this._noise.dispose(), this._lfcf.dispose(), this;
                }
            }
            class Zr extends br {
                constructor(){
                    super(ui(Zr.getDefaults(), arguments, [
                        "voice",
                        "options"
                    ])), this.name = "PolySynth", this._availableVoices = [], this._activeVoices = [], this._voices = [], this._gcTimeout = -1, this._averageActiveVoices = 0, this._syncedRelease = (t1)=>this.releaseAll(t1);
                    const t1 = ui(Zr.getDefaults(), arguments, [
                        "voice",
                        "options"
                    ]);
                    Bn(!Nn(t1.voice), "DEPRECATED: The polyphony count is no longer the first argument.");
                    const e = t1.voice.getDefaults();
                    this.options = Object.assign(e, t1.options), this.voice = t1.voice, this.maxPolyphony = t1.maxPolyphony, this._dummyVoice = this._getNextAvailableVoice();
                    const s1 = this._voices.indexOf(this._dummyVoice);
                    this._voices.splice(s1, 1), this._gcTimeout = this.context.setInterval(this._collectGarbage.bind(this), 1);
                }
                static getDefaults() {
                    return Object.assign(br.getDefaults(), {
                        maxPolyphony: 32,
                        options: {},
                        voice: kr
                    });
                }
                get activeVoices() {
                    return this._activeVoices.length;
                }
                _makeVoiceAvailable(t1) {
                    this._availableVoices.push(t1);
                    const e = this._activeVoices.findIndex((e)=>e.voice === t1);
                    this._activeVoices.splice(e, 1);
                }
                _getNextAvailableVoice() {
                    if (this._availableVoices.length) return this._availableVoices.shift();
                    if (this._voices.length < this.maxPolyphony) {
                        const t1 = new this.voice(Object.assign(this.options, {
                            context: this.context,
                            onsilence: this._makeVoiceAvailable.bind(this)
                        }));
                        return Bn(t1 instanceof Tr, "Voice must extend Monophonic class"), t1.connect(this.output), this._voices.push(t1), t1;
                    }
                    Kn("Max polyphony exceeded. Note dropped.");
                }
                _collectGarbage() {
                    if (this._averageActiveVoices = Math.max(.95 * this._averageActiveVoices, this.activeVoices), this._availableVoices.length && this._voices.length > Math.ceil(this._averageActiveVoices + 1)) {
                        const t1 = this._availableVoices.shift(), e = this._voices.indexOf(t1);
                        this._voices.splice(e, 1), this.context.isOffline || t1.dispose();
                    }
                }
                _triggerAttack(t1, e, s1) {
                    t1.forEach((t1)=>{
                        const n = new bo(this.context, t1).toMidi(), i = this._getNextAvailableVoice();
                        i && (i.triggerAttack(t1, e, s1), this._activeVoices.push({
                            midi: n,
                            voice: i,
                            released: !1
                        }), this.log("triggerAttack", t1, e));
                    });
                }
                _triggerRelease(t1, e) {
                    t1.forEach((t1)=>{
                        const s1 = new bo(this.context, t1).toMidi(), n = this._activeVoices.find(({ midi: t1, released: e })=>t1 === s1 && !e);
                        n && (n.voice.triggerRelease(e), n.released = !0, this.log("triggerRelease", t1, e));
                    });
                }
                _scheduleEvent(t1, e, s1, n) {
                    Bn(!this.disposed, "Synth was already disposed"), s1 <= this.now() ? "attack" === t1 ? this._triggerAttack(e, s1, n) : this._triggerRelease(e, s1) : this.context.setTimeout(()=>{
                        this.disposed || this._scheduleEvent(t1, e, s1, n);
                    }, s1 - this.now());
                }
                triggerAttack(t1, e, s1) {
                    Array.isArray(t1) || (t1 = [
                        t1
                    ]);
                    const n = this.toSeconds(e);
                    return this._scheduleEvent("attack", t1, n, s1), this;
                }
                triggerRelease(t1, e) {
                    Array.isArray(t1) || (t1 = [
                        t1
                    ]);
                    const s1 = this.toSeconds(e);
                    return this._scheduleEvent("release", t1, s1), this;
                }
                triggerAttackRelease(t1, e, s1, n) {
                    const i = this.toSeconds(s1);
                    if (this.triggerAttack(t1, i, n), Ln(e)) {
                        Bn(Ln(t1), "If the duration is an array, the notes must also be an array");
                        for(let s1 = 0; s1 < t1.length; s1++){
                            const n = e[Math.min(s1, e.length - 1)], o = this.toSeconds(n);
                            Bn(o > 0, "The duration must be greater than 0"), this.triggerRelease(t1[s1], i + o);
                        }
                    } else {
                        const s1 = this.toSeconds(e);
                        Bn(s1 > 0, "The duration must be greater than 0"), this.triggerRelease(t1, i + s1);
                    }
                    return this;
                }
                sync() {
                    return this._syncState() && (this._syncMethod("triggerAttack", 1), this._syncMethod("triggerRelease", 1), this.context.transport.on("stop", this._syncedRelease), this.context.transport.on("pause", this._syncedRelease), this.context.transport.on("loopEnd", this._syncedRelease)), this;
                }
                set(t1) {
                    const e = di(t1, [
                        "onsilence",
                        "context"
                    ]);
                    return this.options = li(this.options, e), this._voices.forEach((t1)=>t1.set(e)), this._dummyVoice.set(e), this;
                }
                get() {
                    return this._dummyVoice.get();
                }
                releaseAll(t1) {
                    const e = this.toSeconds(t1);
                    return this._activeVoices.forEach(({ voice: t1 })=>{
                        t1.triggerRelease(e);
                    }), this;
                }
                dispose() {
                    return super.dispose(), this._dummyVoice.dispose(), this._voices.forEach((t1)=>t1.dispose()), this._activeVoices = [], this._availableVoices = [], this.context.clearInterval(this._gcTimeout), this;
                }
            }
            class Xr extends br {
                constructor(){
                    super(ui(Xr.getDefaults(), arguments, [
                        "urls",
                        "onload",
                        "baseUrl"
                    ], "urls")), this.name = "Sampler", this._activeSources = new Map;
                    const t1 = ui(Xr.getDefaults(), arguments, [
                        "urls",
                        "onload",
                        "baseUrl"
                    ], "urls"), e = {};
                    Object.keys(t1.urls).forEach((s1)=>{
                        const n = parseInt(s1, 10);
                        if (Bn(Wn(s1) || Nn(n) && isFinite(n), `url key is neither a note or midi pitch: ${s1}`), Wn(s1)) {
                            const n = new Yi(this.context, s1).toMidi();
                            e[n] = t1.urls[s1];
                        } else Nn(n) && isFinite(n) && (e[n] = t1.urls[n]);
                    }), this._buffers = new wo({
                        urls: e,
                        onload: t1.onload,
                        baseUrl: t1.baseUrl,
                        onerror: t1.onerror
                    }), this.attack = t1.attack, this.release = t1.release, this.curve = t1.curve, this._buffers.loaded && Promise.resolve().then(t1.onload);
                }
                static getDefaults() {
                    return Object.assign(br.getDefaults(), {
                        attack: 0,
                        baseUrl: "",
                        curve: "exponential",
                        onload: Ei,
                        onerror: Ei,
                        release: .1,
                        urls: {}
                    });
                }
                _findClosest(t1) {
                    let e = 0;
                    for(; e < 96;){
                        if (this._buffers.has(t1 + e)) return -e;
                        if (this._buffers.has(t1 - e)) return e;
                        e++;
                    }
                    throw new Error(`No available buffers for note: ${t1}`);
                }
                triggerAttack(t1, e, s1 = 1) {
                    return this.log("triggerAttack", t1, e, s1), Array.isArray(t1) || (t1 = [
                        t1
                    ]), t1.forEach((t1)=>{
                        const n = Ui(new Yi(this.context, t1).toFrequency()), i = Math.round(n), o = n - i, r = this._findClosest(i), a = i - r, c = this._buffers.get(a), h = zi(r + o), l = new jo({
                            url: c,
                            context: this.context,
                            curve: this.curve,
                            fadeIn: this.attack,
                            fadeOut: this.release,
                            playbackRate: h
                        }).connect(this.output);
                        l.start(e, 0, c.duration / h, s1), Ln(this._activeSources.get(i)) || this._activeSources.set(i, []), this._activeSources.get(i).push(l), l.onended = ()=>{
                            if (this._activeSources && this._activeSources.has(i)) {
                                const t1 = this._activeSources.get(i), e = t1.indexOf(l);
                                -1 !== e && t1.splice(e, 1);
                            }
                        };
                    }), this;
                }
                triggerRelease(t1, e) {
                    return this.log("triggerRelease", t1, e), Array.isArray(t1) || (t1 = [
                        t1
                    ]), t1.forEach((t1)=>{
                        const s1 = new Yi(this.context, t1).toMidi();
                        if (this._activeSources.has(s1) && this._activeSources.get(s1).length) {
                            const t1 = this._activeSources.get(s1);
                            e = this.toSeconds(e), t1.forEach((t1)=>{
                                t1.stop(e);
                            }), this._activeSources.set(s1, []);
                        }
                    }), this;
                }
                releaseAll(t1) {
                    const e = this.toSeconds(t1);
                    return this._activeSources.forEach((t1)=>{
                        for(; t1.length;)t1.shift().stop(e);
                    }), this;
                }
                sync() {
                    return this._syncState() && (this._syncMethod("triggerAttack", 1), this._syncMethod("triggerRelease", 1)), this;
                }
                triggerAttackRelease(t1, e, s1, n = 1) {
                    const i = this.toSeconds(s1);
                    return this.triggerAttack(t1, i, n), Ln(e) ? (Bn(Ln(t1), "notes must be an array when duration is array"), t1.forEach((t1, s1)=>{
                        const n = e[Math.min(s1, e.length - 1)];
                        this.triggerRelease(t1, i + this.toSeconds(n));
                    })) : this.triggerRelease(t1, i + this.toSeconds(e)), this;
                }
                add(t1, e, s1) {
                    if (Bn(Wn(t1) || isFinite(t1), `note must be a pitch or midi: ${t1}`), Wn(t1)) {
                        const n = new Yi(this.context, t1).toMidi();
                        this._buffers.add(n, e, s1);
                    } else this._buffers.add(t1, e, s1);
                    return this;
                }
                get loaded() {
                    return this._buffers.loaded;
                }
                dispose() {
                    return super.dispose(), this._buffers.dispose(), this._activeSources.forEach((t1)=>{
                        t1.forEach((t1)=>t1.dispose());
                    }), this._activeSources.clear(), this;
                }
            }
            si([
                cr(0)
            ], Xr.prototype, "attack", void 0), si([
                cr(0)
            ], Xr.prototype, "release", void 0);
            class Yr extends eo {
                constructor(){
                    super(ui(Yr.getDefaults(), arguments, [
                        "callback",
                        "value"
                    ])), this.name = "ToneEvent", this._state = new so("stopped"), this._startOffset = 0;
                    const t1 = ui(Yr.getDefaults(), arguments, [
                        "callback",
                        "value"
                    ]);
                    this._loop = t1.loop, this.callback = t1.callback, this.value = t1.value, this._loopStart = this.toTicks(t1.loopStart), this._loopEnd = this.toTicks(t1.loopEnd), this._playbackRate = t1.playbackRate, this._probability = t1.probability, this._humanize = t1.humanize, this.mute = t1.mute, this._playbackRate = t1.playbackRate, this._state.increasing = !0, this._rescheduleEvents();
                }
                static getDefaults() {
                    return Object.assign(eo.getDefaults(), {
                        callback: Ei,
                        humanize: !1,
                        loop: !1,
                        loopEnd: "1m",
                        loopStart: 0,
                        mute: !1,
                        playbackRate: 1,
                        probability: 1,
                        value: null
                    });
                }
                _rescheduleEvents(t1 = -1) {
                    this._state.forEachFrom(t1, (t1)=>{
                        let e;
                        if ("started" === t1.state) {
                            -1 !== t1.id && this.context.transport.clear(t1.id);
                            const s1 = t1.time + Math.round(this.startOffset / this._playbackRate);
                            if (!0 === this._loop || Nn(this._loop) && this._loop > 1) {
                                e = 1 / 0, Nn(this._loop) && (e = this._loop * this._getLoopDuration());
                                const n = this._state.getAfter(s1);
                                null !== n && (e = Math.min(e, n.time - s1)), e !== 1 / 0 && (e = new So(this.context, e));
                                const i = new So(this.context, this._getLoopDuration());
                                t1.id = this.context.transport.scheduleRepeat(this._tick.bind(this), i, new So(this.context, s1), e);
                            } else t1.id = this.context.transport.schedule(this._tick.bind(this), new So(this.context, s1));
                        }
                    });
                }
                get state() {
                    return this._state.getValueAtTime(this.context.transport.ticks);
                }
                get startOffset() {
                    return this._startOffset;
                }
                set startOffset(t1) {
                    this._startOffset = t1;
                }
                get probability() {
                    return this._probability;
                }
                set probability(t1) {
                    this._probability = t1;
                }
                get humanize() {
                    return this._humanize;
                }
                set humanize(t1) {
                    this._humanize = t1;
                }
                start(t1) {
                    const e = this.toTicks(t1);
                    return "stopped" === this._state.getValueAtTime(e) && (this._state.add({
                        id: -1,
                        state: "started",
                        time: e
                    }), this._rescheduleEvents(e)), this;
                }
                stop(t1) {
                    this.cancel(t1);
                    const e = this.toTicks(t1);
                    if ("started" === this._state.getValueAtTime(e)) {
                        this._state.setStateAtTime("stopped", e, {
                            id: -1
                        });
                        const t1 = this._state.getBefore(e);
                        let s1 = e;
                        null !== t1 && (s1 = t1.time), this._rescheduleEvents(s1);
                    }
                    return this;
                }
                cancel(t1) {
                    t1 = pi(t1, -1 / 0);
                    const e = this.toTicks(t1);
                    return this._state.forEachFrom(e, (t1)=>{
                        this.context.transport.clear(t1.id);
                    }), this._state.cancel(e), this;
                }
                _tick(t1) {
                    const e = this.context.transport.getTicksAtTime(t1);
                    if (!this.mute && "started" === this._state.getValueAtTime(e)) {
                        if (this.probability < 1 && Math.random() > this.probability) return;
                        if (this.humanize) {
                            let e = .02;
                            jn(this.humanize) || (e = this.toSeconds(this.humanize)), t1 += (2 * Math.random() - 1) * e;
                        }
                        this.callback(t1, this.value);
                    }
                }
                _getLoopDuration() {
                    return (this._loopEnd - this._loopStart) / this._playbackRate;
                }
                get loop() {
                    return this._loop;
                }
                set loop(t1) {
                    this._loop = t1, this._rescheduleEvents();
                }
                get playbackRate() {
                    return this._playbackRate;
                }
                set playbackRate(t1) {
                    this._playbackRate = t1, this._rescheduleEvents();
                }
                get loopEnd() {
                    return new So(this.context, this._loopEnd).toSeconds();
                }
                set loopEnd(t1) {
                    this._loopEnd = this.toTicks(t1), this._loop && this._rescheduleEvents();
                }
                get loopStart() {
                    return new So(this.context, this._loopStart).toSeconds();
                }
                set loopStart(t1) {
                    this._loopStart = this.toTicks(t1), this._loop && this._rescheduleEvents();
                }
                get progress() {
                    if (this._loop) {
                        const t1 = this.context.transport.ticks, e = this._state.get(t1);
                        if (null !== e && "started" === e.state) {
                            const s1 = this._getLoopDuration();
                            return (t1 - e.time) % s1 / s1;
                        }
                        return 0;
                    }
                    return 0;
                }
                dispose() {
                    return super.dispose(), this.cancel(), this._state.dispose(), this;
                }
            }
            class $r extends eo {
                constructor(){
                    super(ui($r.getDefaults(), arguments, [
                        "callback",
                        "interval"
                    ])), this.name = "Loop";
                    const t1 = ui($r.getDefaults(), arguments, [
                        "callback",
                        "interval"
                    ]);
                    this._event = new Yr({
                        context: this.context,
                        callback: this._tick.bind(this),
                        loop: !0,
                        loopEnd: t1.interval,
                        playbackRate: t1.playbackRate,
                        probability: t1.probability,
                        humanize: t1.humanize
                    }), this.callback = t1.callback, this.iterations = t1.iterations;
                }
                static getDefaults() {
                    return Object.assign(eo.getDefaults(), {
                        interval: "4n",
                        callback: Ei,
                        playbackRate: 1,
                        iterations: 1 / 0,
                        probability: 1,
                        mute: !1,
                        humanize: !1
                    });
                }
                start(t1) {
                    return this._event.start(t1), this;
                }
                stop(t1) {
                    return this._event.stop(t1), this;
                }
                cancel(t1) {
                    return this._event.cancel(t1), this;
                }
                _tick(t1) {
                    this.callback(t1);
                }
                get state() {
                    return this._event.state;
                }
                get progress() {
                    return this._event.progress;
                }
                get interval() {
                    return this._event.loopEnd;
                }
                set interval(t1) {
                    this._event.loopEnd = t1;
                }
                get playbackRate() {
                    return this._event.playbackRate;
                }
                set playbackRate(t1) {
                    this._event.playbackRate = t1;
                }
                get humanize() {
                    return this._event.humanize;
                }
                set humanize(t1) {
                    this._event.humanize = t1;
                }
                get probability() {
                    return this._event.probability;
                }
                set probability(t1) {
                    this._event.probability = t1;
                }
                get mute() {
                    return this._event.mute;
                }
                set mute(t1) {
                    this._event.mute = t1;
                }
                get iterations() {
                    return !0 === this._event.loop ? 1 / 0 : this._event.loop;
                }
                set iterations(t1) {
                    this._event.loop = t1 === 1 / 0 || t1;
                }
                dispose() {
                    return super.dispose(), this._event.dispose(), this;
                }
            }
            class Hr extends Yr {
                constructor(){
                    super(ui(Hr.getDefaults(), arguments, [
                        "callback",
                        "events"
                    ])), this.name = "Part", this._state = new so("stopped"), this._events = new Set;
                    const t1 = ui(Hr.getDefaults(), arguments, [
                        "callback",
                        "events"
                    ]);
                    this._state.increasing = !0, t1.events.forEach((t1)=>{
                        Ln(t1) ? this.add(t1[0], t1[1]) : this.add(t1);
                    });
                }
                static getDefaults() {
                    return Object.assign(Yr.getDefaults(), {
                        events: []
                    });
                }
                start(t1, e) {
                    const s1 = this.toTicks(t1);
                    if ("started" !== this._state.getValueAtTime(s1)) {
                        e = pi(e, this._loop ? this._loopStart : 0), e = this._loop ? pi(e, this._loopStart) : pi(e, 0);
                        const t1 = this.toTicks(e);
                        this._state.add({
                            id: -1,
                            offset: t1,
                            state: "started",
                            time: s1
                        }), this._forEach((e)=>{
                            this._startNote(e, s1, t1);
                        });
                    }
                    return this;
                }
                _startNote(t1, e, s1) {
                    e -= s1, this._loop ? t1.startOffset >= this._loopStart && t1.startOffset < this._loopEnd ? (t1.startOffset < s1 && (e += this._getLoopDuration()), t1.start(new So(this.context, e))) : t1.startOffset < this._loopStart && t1.startOffset >= s1 && (t1.loop = !1, t1.start(new So(this.context, e))) : t1.startOffset >= s1 && t1.start(new So(this.context, e));
                }
                get startOffset() {
                    return this._startOffset;
                }
                set startOffset(t1) {
                    this._startOffset = t1, this._forEach((t1)=>{
                        t1.startOffset += this._startOffset;
                    });
                }
                stop(t1) {
                    const e = this.toTicks(t1);
                    return this._state.cancel(e), this._state.setStateAtTime("stopped", e), this._forEach((e)=>{
                        e.stop(t1);
                    }), this;
                }
                at(t1, e) {
                    const s1 = new Ki(this.context, t1).toTicks(), n = new So(this.context, 1).toSeconds(), i = this._events.values();
                    let o = i.next();
                    for(; !o.done;){
                        const t1 = o.value;
                        if (Math.abs(s1 - t1.startOffset) < n) return In(e) && (t1.value = e), t1;
                        o = i.next();
                    }
                    return In(e) ? (this.add(t1, e), this.at(t1)) : null;
                }
                add(t1, e) {
                    t1 instanceof Object && Reflect.has(t1, "time") && (t1 = (e = t1).time);
                    const s1 = this.toTicks(t1);
                    let n;
                    return e instanceof Yr ? (n = e, n.callback = this._tick.bind(this)) : n = new Yr({
                        callback: this._tick.bind(this),
                        context: this.context,
                        value: e
                    }), n.startOffset = s1, n.set({
                        humanize: this.humanize,
                        loop: this.loop,
                        loopEnd: this.loopEnd,
                        loopStart: this.loopStart,
                        playbackRate: this.playbackRate,
                        probability: this.probability
                    }), this._events.add(n), this._restartEvent(n), this;
                }
                _restartEvent(t1) {
                    this._state.forEach((e)=>{
                        "started" === e.state ? this._startNote(t1, e.time, e.offset) : t1.stop(new So(this.context, e.time));
                    });
                }
                remove(t1, e) {
                    return Pn(t1) && t1.hasOwnProperty("time") && (t1 = (e = t1).time), t1 = this.toTicks(t1), this._events.forEach((s1)=>{
                        s1.startOffset === t1 && (Fn(e) || In(e) && s1.value === e) && (this._events.delete(s1), s1.dispose());
                    }), this;
                }
                clear() {
                    return this._forEach((t1)=>t1.dispose()), this._events.clear(), this;
                }
                cancel(t1) {
                    return this._forEach((e)=>e.cancel(t1)), this._state.cancel(this.toTicks(t1)), this;
                }
                _forEach(t1) {
                    return this._events && this._events.forEach((e)=>{
                        e instanceof Hr ? e._forEach(t1) : t1(e);
                    }), this;
                }
                _setAll(t1, e) {
                    this._forEach((s1)=>{
                        s1[t1] = e;
                    });
                }
                _tick(t1, e) {
                    this.mute || this.callback(t1, e);
                }
                _testLoopBoundries(t1) {
                    this._loop && (t1.startOffset < this._loopStart || t1.startOffset >= this._loopEnd) ? t1.cancel(0) : "stopped" === t1.state && this._restartEvent(t1);
                }
                get probability() {
                    return this._probability;
                }
                set probability(t1) {
                    this._probability = t1, this._setAll("probability", t1);
                }
                get humanize() {
                    return this._humanize;
                }
                set humanize(t1) {
                    this._humanize = t1, this._setAll("humanize", t1);
                }
                get loop() {
                    return this._loop;
                }
                set loop(t1) {
                    this._loop = t1, this._forEach((e)=>{
                        e.loopStart = this.loopStart, e.loopEnd = this.loopEnd, e.loop = t1, this._testLoopBoundries(e);
                    });
                }
                get loopEnd() {
                    return new So(this.context, this._loopEnd).toSeconds();
                }
                set loopEnd(t1) {
                    this._loopEnd = this.toTicks(t1), this._loop && this._forEach((e)=>{
                        e.loopEnd = t1, this._testLoopBoundries(e);
                    });
                }
                get loopStart() {
                    return new So(this.context, this._loopStart).toSeconds();
                }
                set loopStart(t1) {
                    this._loopStart = this.toTicks(t1), this._loop && this._forEach((t1)=>{
                        t1.loopStart = this.loopStart, this._testLoopBoundries(t1);
                    });
                }
                get playbackRate() {
                    return this._playbackRate;
                }
                set playbackRate(t1) {
                    this._playbackRate = t1, this._setAll("playbackRate", t1);
                }
                get length() {
                    return this._events.size;
                }
                dispose() {
                    return super.dispose(), this.clear(), this;
                }
            }
            function* Jr(t1) {
                let e = 0;
                for(; e < t1;)e = xi(e, 0, t1 - 1), yield e, e++;
            }
            function* Kr(t1) {
                let e = t1 - 1;
                for(; e >= 0;)e = xi(e, 0, t1 - 1), yield e, e--;
            }
            function* ta(t1, e) {
                for(;;)yield* e(t1);
            }
            function* ea(t1, e) {
                let s1 = e ? 0 : t1 - 1;
                for(;;)s1 = xi(s1, 0, t1 - 1), yield s1, e ? (s1++, s1 >= t1 - 1 && (e = !1)) : (s1--, s1 <= 0 && (e = !0));
            }
            function* sa(t1) {
                let e = 0, s1 = 0;
                for(; e < t1;)e = xi(e, 0, t1 - 1), yield e, s1++, e += s1 % 2 ? 2 : -1;
            }
            function* na(t1) {
                let e = t1 - 1, s1 = 0;
                for(; e >= 0;)e = xi(e, 0, t1 - 1), yield e, s1++, e += s1 % 2 ? -2 : 1;
            }
            function* ia(t1) {
                const e = [];
                for(let s1 = 0; s1 < t1; s1++)e.push(s1);
                for(; e.length > 0;){
                    const s1 = xi(e.splice(Math.floor(e.length * Math.random()), 1)[0], 0, t1 - 1);
                    yield s1;
                }
            }
            function* oa(t1, e = "up", s1 = 0) {
                switch(Bn(t1 >= 1, "The number of values must be at least one"), e){
                    case "up":
                        yield* ta(t1, Jr);
                    case "down":
                        yield* ta(t1, Kr);
                    case "upDown":
                        yield* ea(t1, !0);
                    case "downUp":
                        yield* ea(t1, !1);
                    case "alternateUp":
                        yield* ta(t1, sa);
                    case "alternateDown":
                        yield* ta(t1, na);
                    case "random":
                        yield* function*(t1) {
                            for(;;){
                                const e = Math.floor(Math.random() * t1);
                                yield e;
                            }
                        }(t1);
                    case "randomOnce":
                        yield* ta(t1, ia);
                    case "randomWalk":
                        yield* function*(t1) {
                            let e = Math.floor(Math.random() * t1);
                            for(;;)0 === e ? e++ : e === t1 - 1 || Math.random() < .5 ? e-- : e++, yield e;
                        }(t1);
                }
            }
            class ra extends $r {
                constructor(){
                    super(ui(ra.getDefaults(), arguments, [
                        "callback",
                        "values",
                        "pattern"
                    ])), this.name = "Pattern";
                    const t1 = ui(ra.getDefaults(), arguments, [
                        "callback",
                        "values",
                        "pattern"
                    ]);
                    this.callback = t1.callback, this._values = t1.values, this._pattern = oa(t1.values.length, t1.pattern), this._type = t1.pattern;
                }
                static getDefaults() {
                    return Object.assign($r.getDefaults(), {
                        pattern: "up",
                        values: [],
                        callback: Ei
                    });
                }
                _tick(t1) {
                    const e = this._pattern.next();
                    this._index = e.value, this._value = this._values[e.value], this.callback(t1, this._value);
                }
                get values() {
                    return this._values;
                }
                set values(t1) {
                    this._values = t1, this.pattern = this._type;
                }
                get value() {
                    return this._value;
                }
                get index() {
                    return this._index;
                }
                get pattern() {
                    return this._type;
                }
                set pattern(t1) {
                    this._type = t1, this._pattern = oa(this._values.length, this._type);
                }
            }
            class aa extends Yr {
                constructor(){
                    super(ui(aa.getDefaults(), arguments, [
                        "callback",
                        "events",
                        "subdivision"
                    ])), this.name = "Sequence", this._part = new Hr({
                        callback: this._seqCallback.bind(this),
                        context: this.context
                    }), this._events = [], this._eventsArray = [];
                    const t1 = ui(aa.getDefaults(), arguments, [
                        "callback",
                        "events",
                        "subdivision"
                    ]);
                    this._subdivision = this.toTicks(t1.subdivision), this.events = t1.events, this.loop = t1.loop, this.loopStart = t1.loopStart, this.loopEnd = t1.loopEnd, this.playbackRate = t1.playbackRate, this.probability = t1.probability, this.humanize = t1.humanize, this.mute = t1.mute, this.playbackRate = t1.playbackRate;
                }
                static getDefaults() {
                    return Object.assign(di(Yr.getDefaults(), [
                        "value"
                    ]), {
                        events: [],
                        loop: !0,
                        loopEnd: 0,
                        loopStart: 0,
                        subdivision: "8n"
                    });
                }
                _seqCallback(t1, e) {
                    null === e || this.mute || this.callback(t1, e);
                }
                get events() {
                    return this._events;
                }
                set events(t1) {
                    this.clear(), this._eventsArray = t1, this._events = this._createSequence(this._eventsArray), this._eventsUpdated();
                }
                start(t1, e) {
                    return this._part.start(t1, e ? this._indexTime(e) : e), this;
                }
                stop(t1) {
                    return this._part.stop(t1), this;
                }
                get subdivision() {
                    return new So(this.context, this._subdivision).toSeconds();
                }
                _createSequence(t1) {
                    return new Proxy(t1, {
                        get: (t1, e)=>t1[e],
                        set: (t1, e, s1)=>(zn(e) && isFinite(parseInt(e, 10)) && Ln(s1) ? t1[e] = this._createSequence(s1) : t1[e] = s1, this._eventsUpdated(), !0)
                    });
                }
                _eventsUpdated() {
                    this._part.clear(), this._rescheduleSequence(this._eventsArray, this._subdivision, this.startOffset), this.loopEnd = this.loopEnd;
                }
                _rescheduleSequence(t1, e, s1) {
                    t1.forEach((t1, n)=>{
                        const i = n * e + s1;
                        if (Ln(t1)) this._rescheduleSequence(t1, e / t1.length, i);
                        else {
                            const e = new So(this.context, i, "i").toSeconds();
                            this._part.add(e, t1);
                        }
                    });
                }
                _indexTime(t1) {
                    return new So(this.context, t1 * this._subdivision + this.startOffset).toSeconds();
                }
                clear() {
                    return this._part.clear(), this;
                }
                dispose() {
                    return super.dispose(), this._part.dispose(), this;
                }
                get loop() {
                    return this._part.loop;
                }
                set loop(t1) {
                    this._part.loop = t1;
                }
                get loopStart() {
                    return this._loopStart;
                }
                set loopStart(t1) {
                    this._loopStart = t1, this._part.loopStart = this._indexTime(t1);
                }
                get loopEnd() {
                    return this._loopEnd;
                }
                set loopEnd(t1) {
                    this._loopEnd = t1, this._part.loopEnd = 0 === t1 ? this._indexTime(this._eventsArray.length) : this._indexTime(t1);
                }
                get startOffset() {
                    return this._part.startOffset;
                }
                set startOffset(t1) {
                    this._part.startOffset = t1;
                }
                get playbackRate() {
                    return this._part.playbackRate;
                }
                set playbackRate(t1) {
                    this._part.playbackRate = t1;
                }
                get probability() {
                    return this._part.probability;
                }
                set probability(t1) {
                    this._part.probability = t1;
                }
                get progress() {
                    return this._part.progress;
                }
                get humanize() {
                    return this._part.humanize;
                }
                set humanize(t1) {
                    this._part.humanize = t1;
                }
                get length() {
                    return this._part.length;
                }
            }
            class ca extends io {
                constructor(){
                    super(Object.assign(ui(ca.getDefaults(), arguments, [
                        "fade"
                    ]))), this.name = "CrossFade", this._panner = this.context.createStereoPanner(), this._split = this.context.createChannelSplitter(2), this._g2a = new dr({
                        context: this.context
                    }), this.a = new ho({
                        context: this.context,
                        gain: 0
                    }), this.b = new ho({
                        context: this.context,
                        gain: 0
                    }), this.output = new ho({
                        context: this.context
                    }), this._internalChannels = [
                        this.a,
                        this.b
                    ];
                    const t1 = ui(ca.getDefaults(), arguments, [
                        "fade"
                    ]);
                    this.fade = new po({
                        context: this.context,
                        units: "normalRange",
                        value: t1.fade
                    }), Oi(this, "fade"), this.context.getConstant(1).connect(this._panner), this._panner.connect(this._split), this._panner.channelCount = 1, this._panner.channelCountMode = "explicit", ro(this._split, this.a.gain, 0), ro(this._split, this.b.gain, 1), this.fade.chain(this._g2a, this._panner.pan), this.a.connect(this.output), this.b.connect(this.output);
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        fade: .5
                    });
                }
                dispose() {
                    return super.dispose(), this.a.dispose(), this.b.dispose(), this.output.dispose(), this.fade.dispose(), this._g2a.dispose(), this._panner.disconnect(), this._split.disconnect(), this;
                }
            }
            class ha extends io {
                constructor(t1){
                    super(t1), this.name = "Effect", this._dryWet = new ca({
                        context: this.context
                    }), this.wet = this._dryWet.fade, this.effectSend = new ho({
                        context: this.context
                    }), this.effectReturn = new ho({
                        context: this.context
                    }), this.input = new ho({
                        context: this.context
                    }), this.output = this._dryWet, this.input.fan(this._dryWet.a, this.effectSend), this.effectReturn.connect(this._dryWet.b), this.wet.setValueAtTime(t1.wet, 0), this._internalChannels = [
                        this.effectReturn,
                        this.effectSend
                    ], Oi(this, "wet");
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        wet: 1
                    });
                }
                connectEffect(t1) {
                    return this._internalChannels.push(t1), this.effectSend.chain(t1, this.effectReturn), this;
                }
                dispose() {
                    return super.dispose(), this._dryWet.dispose(), this.effectSend.dispose(), this.effectReturn.dispose(), this.wet.dispose(), this;
                }
            }
            class la extends ha {
                constructor(t1){
                    super(t1), this.name = "LFOEffect", this._lfo = new rr({
                        context: this.context,
                        frequency: t1.frequency,
                        amplitude: t1.depth
                    }), this.depth = this._lfo.amplitude, this.frequency = this._lfo.frequency, this.type = t1.type, Oi(this, [
                        "frequency",
                        "depth"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(ha.getDefaults(), {
                        frequency: 1,
                        type: "sine",
                        depth: 1
                    });
                }
                start(t1) {
                    return this._lfo.start(t1), this;
                }
                stop(t1) {
                    return this._lfo.stop(t1), this;
                }
                sync() {
                    return this._lfo.sync(), this;
                }
                unsync() {
                    return this._lfo.unsync(), this;
                }
                get type() {
                    return this._lfo.type;
                }
                set type(t1) {
                    this._lfo.type = t1;
                }
                dispose() {
                    return super.dispose(), this._lfo.dispose(), this.frequency.dispose(), this.depth.dispose(), this;
                }
            }
            class ua extends la {
                constructor(){
                    super(ui(ua.getDefaults(), arguments, [
                        "frequency",
                        "baseFrequency",
                        "octaves"
                    ])), this.name = "AutoFilter";
                    const t1 = ui(ua.getDefaults(), arguments, [
                        "frequency",
                        "baseFrequency",
                        "octaves"
                    ]);
                    this.filter = new Or(Object.assign(t1.filter, {
                        context: this.context
                    })), this.connectEffect(this.filter), this._lfo.connect(this.filter.frequency), this.octaves = t1.octaves, this.baseFrequency = t1.baseFrequency;
                }
                static getDefaults() {
                    return Object.assign(la.getDefaults(), {
                        baseFrequency: 200,
                        octaves: 2.6,
                        filter: {
                            type: "lowpass",
                            rolloff: -12,
                            Q: 1
                        }
                    });
                }
                get baseFrequency() {
                    return this._lfo.min;
                }
                set baseFrequency(t1) {
                    this._lfo.min = this.toFrequency(t1), this.octaves = this._octaves;
                }
                get octaves() {
                    return this._octaves;
                }
                set octaves(t1) {
                    this._octaves = t1, this._lfo.max = this._lfo.min * Math.pow(2, t1);
                }
                dispose() {
                    return super.dispose(), this.filter.dispose(), this;
                }
            }
            class pa extends io {
                constructor(){
                    super(Object.assign(ui(pa.getDefaults(), arguments, [
                        "pan"
                    ]))), this.name = "Panner", this._panner = this.context.createStereoPanner(), this.input = this._panner, this.output = this._panner;
                    const t1 = ui(pa.getDefaults(), arguments, [
                        "pan"
                    ]);
                    this.pan = new no({
                        context: this.context,
                        param: this._panner.pan,
                        value: t1.pan,
                        minValue: -1,
                        maxValue: 1
                    }), this._panner.channelCount = t1.channelCount, this._panner.channelCountMode = "explicit", Oi(this, "pan");
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        pan: 0,
                        channelCount: 1
                    });
                }
                dispose() {
                    return super.dispose(), this._panner.disconnect(), this.pan.dispose(), this;
                }
            }
            class da extends la {
                constructor(){
                    super(ui(da.getDefaults(), arguments, [
                        "frequency"
                    ])), this.name = "AutoPanner";
                    const t1 = ui(da.getDefaults(), arguments, [
                        "frequency"
                    ]);
                    this._panner = new pa({
                        context: this.context,
                        channelCount: t1.channelCount
                    }), this.connectEffect(this._panner), this._lfo.connect(this._panner.pan), this._lfo.min = -1, this._lfo.max = 1;
                }
                static getDefaults() {
                    return Object.assign(la.getDefaults(), {
                        channelCount: 1
                    });
                }
                dispose() {
                    return super.dispose(), this._panner.dispose(), this;
                }
            }
            class fa extends io {
                constructor(){
                    super(ui(fa.getDefaults(), arguments, [
                        "smoothing"
                    ])), this.name = "Follower";
                    const t1 = ui(fa.getDefaults(), arguments, [
                        "smoothing"
                    ]);
                    this._abs = this.input = new pr({
                        context: this.context
                    }), this._lowpass = this.output = new Ur({
                        context: this.context,
                        frequency: 1 / this.toSeconds(t1.smoothing),
                        type: "lowpass"
                    }), this._abs.connect(this._lowpass), this._smoothing = t1.smoothing;
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        smoothing: .05
                    });
                }
                get smoothing() {
                    return this._smoothing;
                }
                set smoothing(t1) {
                    this._smoothing = t1, this._lowpass.frequency = 1 / this.toSeconds(this.smoothing);
                }
                dispose() {
                    return super.dispose(), this._abs.dispose(), this._lowpass.dispose(), this;
                }
            }
            class _a extends ha {
                constructor(){
                    super(ui(_a.getDefaults(), arguments, [
                        "baseFrequency",
                        "octaves",
                        "sensitivity"
                    ])), this.name = "AutoWah";
                    const t1 = ui(_a.getDefaults(), arguments, [
                        "baseFrequency",
                        "octaves",
                        "sensitivity"
                    ]);
                    this._follower = new fa({
                        context: this.context,
                        smoothing: t1.follower
                    }), this._sweepRange = new vr({
                        context: this.context,
                        min: 0,
                        max: 1,
                        exponent: .5
                    }), this._baseFrequency = this.toFrequency(t1.baseFrequency), this._octaves = t1.octaves, this._inputBoost = new ho({
                        context: this.context
                    }), this._bandpass = new Or({
                        context: this.context,
                        rolloff: -48,
                        frequency: 0,
                        Q: t1.Q
                    }), this._peaking = new Or({
                        context: this.context,
                        type: "peaking"
                    }), this._peaking.gain.value = t1.gain, this.gain = this._peaking.gain, this.Q = this._bandpass.Q, this.effectSend.chain(this._inputBoost, this._follower, this._sweepRange), this._sweepRange.connect(this._bandpass.frequency), this._sweepRange.connect(this._peaking.frequency), this.effectSend.chain(this._bandpass, this._peaking, this.effectReturn), this._setSweepRange(), this.sensitivity = t1.sensitivity, Oi(this, [
                        "gain",
                        "Q"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(ha.getDefaults(), {
                        baseFrequency: 100,
                        octaves: 6,
                        sensitivity: 0,
                        Q: 2,
                        gain: 2,
                        follower: .2
                    });
                }
                get octaves() {
                    return this._octaves;
                }
                set octaves(t1) {
                    this._octaves = t1, this._setSweepRange();
                }
                get follower() {
                    return this._follower.smoothing;
                }
                set follower(t1) {
                    this._follower.smoothing = t1;
                }
                get baseFrequency() {
                    return this._baseFrequency;
                }
                set baseFrequency(t1) {
                    this._baseFrequency = this.toFrequency(t1), this._setSweepRange();
                }
                get sensitivity() {
                    return Li(1 / this._inputBoost.gain.value);
                }
                set sensitivity(t1) {
                    this._inputBoost.gain.value = 1 / ji(t1);
                }
                _setSweepRange() {
                    this._sweepRange.min = this._baseFrequency, this._sweepRange.max = Math.min(this._baseFrequency * Math.pow(2, this._octaves), this.context.sampleRate / 2);
                }
                dispose() {
                    return super.dispose(), this._follower.dispose(), this._sweepRange.dispose(), this._bandpass.dispose(), this._peaking.dispose(), this._inputBoost.dispose(), this;
                }
            }
            const ma = "bit-crusher";
            Lr(ma, "\n\tclass BitCrusherWorklet extends SingleIOProcessor {\n\n\t\tstatic get parameterDescriptors() {\n\t\t\treturn [{\n\t\t\t\tname: \"bits\",\n\t\t\t\tdefaultValue: 12,\n\t\t\t\tminValue: 1,\n\t\t\t\tmaxValue: 16,\n\t\t\t\tautomationRate: 'k-rate'\n\t\t\t}];\n\t\t}\n\n\t\tgenerate(input, _channel, parameters) {\n\t\t\tconst step = Math.pow(0.5, parameters.bits - 1);\n\t\t\tconst val = step * Math.floor(input / step + 0.5);\n\t\t\treturn val;\n\t\t}\n\t}\n");
            class ga extends ha {
                constructor(){
                    super(ui(ga.getDefaults(), arguments, [
                        "bits"
                    ])), this.name = "BitCrusher";
                    const t1 = ui(ga.getDefaults(), arguments, [
                        "bits"
                    ]);
                    this._bitCrusherWorklet = new va({
                        context: this.context,
                        bits: t1.bits
                    }), this.connectEffect(this._bitCrusherWorklet), this.bits = this._bitCrusherWorklet.bits;
                }
                static getDefaults() {
                    return Object.assign(ha.getDefaults(), {
                        bits: 4
                    });
                }
                dispose() {
                    return super.dispose(), this._bitCrusherWorklet.dispose(), this;
                }
            }
            class va extends zr {
                constructor(){
                    super(ui(va.getDefaults(), arguments)), this.name = "BitCrusherWorklet";
                    const t1 = ui(va.getDefaults(), arguments);
                    this.input = new ho({
                        context: this.context
                    }), this.output = new ho({
                        context: this.context
                    }), this.bits = new no({
                        context: this.context,
                        value: t1.bits,
                        units: "positive",
                        minValue: 1,
                        maxValue: 16,
                        param: this._dummyParam,
                        swappable: !0
                    });
                }
                static getDefaults() {
                    return Object.assign(zr.getDefaults(), {
                        bits: 12
                    });
                }
                _audioWorkletName() {
                    return ma;
                }
                onReady(t1) {
                    oo(this.input, t1, this.output);
                    const e = t1.parameters.get("bits");
                    this.bits.setParam(e);
                }
                dispose() {
                    return super.dispose(), this.input.dispose(), this.output.dispose(), this.bits.dispose(), this;
                }
            }
            class ya extends ha {
                constructor(){
                    super(ui(ya.getDefaults(), arguments, [
                        "order"
                    ])), this.name = "Chebyshev";
                    const t1 = ui(ya.getDefaults(), arguments, [
                        "order"
                    ]);
                    this._shaper = new qo({
                        context: this.context,
                        length: 4096
                    }), this._order = t1.order, this.connectEffect(this._shaper), this.order = t1.order, this.oversample = t1.oversample;
                }
                static getDefaults() {
                    return Object.assign(ha.getDefaults(), {
                        order: 1,
                        oversample: "none"
                    });
                }
                _getCoefficient(t1, e, s1) {
                    return s1.has(e) || (0 === e ? s1.set(e, 0) : 1 === e ? s1.set(e, t1) : s1.set(e, 2 * t1 * this._getCoefficient(t1, e - 1, s1) - this._getCoefficient(t1, e - 2, s1))), s1.get(e);
                }
                get order() {
                    return this._order;
                }
                set order(t1) {
                    Bn(Number.isInteger(t1), "'order' must be an integer"), this._order = t1, this._shaper.setMap((e)=>this._getCoefficient(e, t1, new Map));
                }
                get oversample() {
                    return this._shaper.oversample;
                }
                set oversample(t1) {
                    this._shaper.oversample = t1;
                }
                dispose() {
                    return super.dispose(), this._shaper.dispose(), this;
                }
            }
            class xa extends io {
                constructor(){
                    super(ui(xa.getDefaults(), arguments, [
                        "channels"
                    ])), this.name = "Split";
                    const t1 = ui(xa.getDefaults(), arguments, [
                        "channels"
                    ]);
                    this._splitter = this.input = this.output = this.context.createChannelSplitter(t1.channels), this._internalChannels = [
                        this._splitter
                    ];
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        channels: 2
                    });
                }
                dispose() {
                    return super.dispose(), this._splitter.disconnect(), this;
                }
            }
            class wa extends io {
                constructor(){
                    super(ui(wa.getDefaults(), arguments, [
                        "channels"
                    ])), this.name = "Merge";
                    const t1 = ui(wa.getDefaults(), arguments, [
                        "channels"
                    ]);
                    this._merger = this.output = this.input = this.context.createChannelMerger(t1.channels);
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        channels: 2
                    });
                }
                dispose() {
                    return super.dispose(), this._merger.disconnect(), this;
                }
            }
            class ba extends io {
                constructor(t1){
                    super(t1), this.name = "StereoEffect", this.input = new ho({
                        context: this.context
                    }), this.input.channelCount = 2, this.input.channelCountMode = "explicit", this._dryWet = this.output = new ca({
                        context: this.context,
                        fade: t1.wet
                    }), this.wet = this._dryWet.fade, this._split = new xa({
                        context: this.context,
                        channels: 2
                    }), this._merge = new wa({
                        context: this.context,
                        channels: 2
                    }), this.input.connect(this._split), this.input.connect(this._dryWet.a), this._merge.connect(this._dryWet.b), Oi(this, [
                        "wet"
                    ]);
                }
                connectEffectLeft(...t1) {
                    this._split.connect(t1[0], 0, 0), oo(...t1), ro(t1[t1.length - 1], this._merge, 0, 0);
                }
                connectEffectRight(...t1) {
                    this._split.connect(t1[0], 1, 0), oo(...t1), ro(t1[t1.length - 1], this._merge, 0, 1);
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        wet: 1
                    });
                }
                dispose() {
                    return super.dispose(), this._dryWet.dispose(), this._split.dispose(), this._merge.dispose(), this;
                }
            }
            class Ta extends ba {
                constructor(t1){
                    super(t1), this.feedback = new po({
                        context: this.context,
                        value: t1.feedback,
                        units: "normalRange"
                    }), this._feedbackL = new ho({
                        context: this.context
                    }), this._feedbackR = new ho({
                        context: this.context
                    }), this._feedbackSplit = new xa({
                        context: this.context,
                        channels: 2
                    }), this._feedbackMerge = new wa({
                        context: this.context,
                        channels: 2
                    }), this._merge.connect(this._feedbackSplit), this._feedbackMerge.connect(this._split), this._feedbackSplit.connect(this._feedbackL, 0, 0), this._feedbackL.connect(this._feedbackMerge, 0, 0), this._feedbackSplit.connect(this._feedbackR, 1, 0), this._feedbackR.connect(this._feedbackMerge, 0, 1), this.feedback.fan(this._feedbackL.gain, this._feedbackR.gain), Oi(this, [
                        "feedback"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(ba.getDefaults(), {
                        feedback: .5
                    });
                }
                dispose() {
                    return super.dispose(), this.feedback.dispose(), this._feedbackL.dispose(), this._feedbackR.dispose(), this._feedbackSplit.dispose(), this._feedbackMerge.dispose(), this;
                }
            }
            class Sa extends Ta {
                constructor(){
                    super(ui(Sa.getDefaults(), arguments, [
                        "frequency",
                        "delayTime",
                        "depth"
                    ])), this.name = "Chorus";
                    const t1 = ui(Sa.getDefaults(), arguments, [
                        "frequency",
                        "delayTime",
                        "depth"
                    ]);
                    this._depth = t1.depth, this._delayTime = t1.delayTime / 1e3, this._lfoL = new rr({
                        context: this.context,
                        frequency: t1.frequency,
                        min: 0,
                        max: 1
                    }), this._lfoR = new rr({
                        context: this.context,
                        frequency: t1.frequency,
                        min: 0,
                        max: 1,
                        phase: 180
                    }), this._delayNodeL = new yo({
                        context: this.context
                    }), this._delayNodeR = new yo({
                        context: this.context
                    }), this.frequency = this._lfoL.frequency, Oi(this, [
                        "frequency"
                    ]), this._lfoL.frequency.connect(this._lfoR.frequency), this.connectEffectLeft(this._delayNodeL), this.connectEffectRight(this._delayNodeR), this._lfoL.connect(this._delayNodeL.delayTime), this._lfoR.connect(this._delayNodeR.delayTime), this.depth = this._depth, this.type = t1.type, this.spread = t1.spread;
                }
                static getDefaults() {
                    return Object.assign(Ta.getDefaults(), {
                        frequency: 1.5,
                        delayTime: 3.5,
                        depth: .7,
                        type: "sine",
                        spread: 180,
                        feedback: 0,
                        wet: .5
                    });
                }
                get depth() {
                    return this._depth;
                }
                set depth(t1) {
                    this._depth = t1;
                    const e = this._delayTime * t1;
                    this._lfoL.min = Math.max(this._delayTime - e, 0), this._lfoL.max = this._delayTime + e, this._lfoR.min = Math.max(this._delayTime - e, 0), this._lfoR.max = this._delayTime + e;
                }
                get delayTime() {
                    return 1e3 * this._delayTime;
                }
                set delayTime(t1) {
                    this._delayTime = t1 / 1e3, this.depth = this._depth;
                }
                get type() {
                    return this._lfoL.type;
                }
                set type(t1) {
                    this._lfoL.type = t1, this._lfoR.type = t1;
                }
                get spread() {
                    return this._lfoR.phase - this._lfoL.phase;
                }
                set spread(t1) {
                    this._lfoL.phase = 90 - t1 / 2, this._lfoR.phase = t1 / 2 + 90;
                }
                start(t1) {
                    return this._lfoL.start(t1), this._lfoR.start(t1), this;
                }
                stop(t1) {
                    return this._lfoL.stop(t1), this._lfoR.stop(t1), this;
                }
                sync() {
                    return this._lfoL.sync(), this._lfoR.sync(), this;
                }
                unsync() {
                    return this._lfoL.unsync(), this._lfoR.unsync(), this;
                }
                dispose() {
                    return super.dispose(), this._lfoL.dispose(), this._lfoR.dispose(), this._delayNodeL.dispose(), this._delayNodeR.dispose(), this.frequency.dispose(), this;
                }
            }
            class ka extends ha {
                constructor(){
                    super(ui(ka.getDefaults(), arguments, [
                        "distortion"
                    ])), this.name = "Distortion";
                    const t1 = ui(ka.getDefaults(), arguments, [
                        "distortion"
                    ]);
                    this._shaper = new qo({
                        context: this.context,
                        length: 4096
                    }), this._distortion = t1.distortion, this.connectEffect(this._shaper), this.distortion = t1.distortion, this.oversample = t1.oversample;
                }
                static getDefaults() {
                    return Object.assign(ha.getDefaults(), {
                        distortion: .4,
                        oversample: "none"
                    });
                }
                get distortion() {
                    return this._distortion;
                }
                set distortion(t1) {
                    this._distortion = t1;
                    const e = 100 * t1, s1 = Math.PI / 180;
                    this._shaper.setMap((t1)=>Math.abs(t1) < .001 ? 0 : (3 + e) * t1 * 20 * s1 / (Math.PI + e * Math.abs(t1)));
                }
                get oversample() {
                    return this._shaper.oversample;
                }
                set oversample(t1) {
                    this._shaper.oversample = t1;
                }
                dispose() {
                    return super.dispose(), this._shaper.dispose(), this;
                }
            }
            class Aa extends ha {
                constructor(t1){
                    super(t1), this.name = "FeedbackEffect", this._feedbackGain = new ho({
                        context: this.context,
                        gain: t1.feedback,
                        units: "normalRange"
                    }), this.feedback = this._feedbackGain.gain, Oi(this, "feedback"), this.effectReturn.chain(this._feedbackGain, this.effectSend);
                }
                static getDefaults() {
                    return Object.assign(ha.getDefaults(), {
                        feedback: .125
                    });
                }
                dispose() {
                    return super.dispose(), this._feedbackGain.dispose(), this.feedback.dispose(), this;
                }
            }
            class Ca extends Aa {
                constructor(){
                    super(ui(Ca.getDefaults(), arguments, [
                        "delayTime",
                        "feedback"
                    ])), this.name = "FeedbackDelay";
                    const t1 = ui(Ca.getDefaults(), arguments, [
                        "delayTime",
                        "feedback"
                    ]);
                    this._delayNode = new yo({
                        context: this.context,
                        delayTime: t1.delayTime,
                        maxDelay: t1.maxDelay
                    }), this.delayTime = this._delayNode.delayTime, this.connectEffect(this._delayNode), Oi(this, "delayTime");
                }
                static getDefaults() {
                    return Object.assign(Aa.getDefaults(), {
                        delayTime: .25,
                        maxDelay: 1
                    });
                }
                dispose() {
                    return super.dispose(), this._delayNode.dispose(), this.delayTime.dispose(), this;
                }
            }
            class Da extends io {
                constructor(t1){
                    super(t1), this.name = "PhaseShiftAllpass", this.input = new ho({
                        context: this.context
                    }), this.output = new ho({
                        context: this.context
                    }), this.offset90 = new ho({
                        context: this.context
                    }), this._bank0 = this._createAllPassFilterBank([
                        .6923878,
                        .9360654322959,
                        .988229522686,
                        .9987488452737
                    ]), this._bank1 = this._createAllPassFilterBank([
                        .4021921162426,
                        .856171088242,
                        .9722909545651,
                        .9952884791278
                    ]), this._oneSampleDelay = this.context.createIIRFilter([
                        0,
                        1
                    ], [
                        1,
                        0
                    ]), oo(this.input, ...this._bank0, this._oneSampleDelay, this.output), oo(this.input, ...this._bank1, this.offset90);
                }
                _createAllPassFilterBank(t1) {
                    return t1.map((t1)=>{
                        const e = [
                            [
                                t1 * t1,
                                0,
                                -1
                            ],
                            [
                                1,
                                0,
                                -t1 * t1
                            ]
                        ];
                        return this.context.createIIRFilter(e[0], e[1]);
                    });
                }
                dispose() {
                    return super.dispose(), this.input.dispose(), this.output.dispose(), this.offset90.dispose(), this._bank0.forEach((t1)=>t1.disconnect()), this._bank1.forEach((t1)=>t1.disconnect()), this._oneSampleDelay.disconnect(), this;
                }
            }
            class Oa extends ha {
                constructor(){
                    super(ui(Oa.getDefaults(), arguments, [
                        "frequency"
                    ])), this.name = "FrequencyShifter";
                    const t1 = ui(Oa.getDefaults(), arguments, [
                        "frequency"
                    ]);
                    this.frequency = new po({
                        context: this.context,
                        units: "frequency",
                        value: t1.frequency,
                        minValue: -this.context.sampleRate / 2,
                        maxValue: this.context.sampleRate / 2
                    }), this._sine = new Qo({
                        context: this.context,
                        type: "sine"
                    }), this._cosine = new Zo({
                        context: this.context,
                        phase: -90,
                        type: "sine"
                    }), this._sineMultiply = new Yo({
                        context: this.context
                    }), this._cosineMultiply = new Yo({
                        context: this.context
                    }), this._negate = new fr({
                        context: this.context
                    }), this._add = new nr({
                        context: this.context
                    }), this._phaseShifter = new Da({
                        context: this.context
                    }), this.effectSend.connect(this._phaseShifter), this.frequency.fan(this._sine.frequency, this._cosine.frequency), this._phaseShifter.offset90.connect(this._cosineMultiply), this._cosine.connect(this._cosineMultiply.factor), this._phaseShifter.connect(this._sineMultiply), this._sine.connect(this._sineMultiply.factor), this._sineMultiply.connect(this._negate), this._cosineMultiply.connect(this._add), this._negate.connect(this._add.addend), this._add.connect(this.effectReturn);
                    const e = this.immediate();
                    this._sine.start(e), this._cosine.start(e);
                }
                static getDefaults() {
                    return Object.assign(ha.getDefaults(), {
                        frequency: 0
                    });
                }
                dispose() {
                    return super.dispose(), this.frequency.dispose(), this._add.dispose(), this._cosine.dispose(), this._cosineMultiply.dispose(), this._negate.dispose(), this._phaseShifter.dispose(), this._sine.dispose(), this._sineMultiply.dispose(), this;
                }
            }
            const Ma = [
                1557 / 44100,
                1617 / 44100,
                1491 / 44100,
                1422 / 44100,
                1277 / 44100,
                1356 / 44100,
                1188 / 44100,
                1116 / 44100
            ], Ea = [
                225,
                556,
                441,
                341
            ];
            class Ra extends ba {
                constructor(){
                    super(ui(Ra.getDefaults(), arguments, [
                        "roomSize",
                        "dampening"
                    ])), this.name = "Freeverb", this._combFilters = [], this._allpassFiltersL = [], this._allpassFiltersR = [];
                    const t1 = ui(Ra.getDefaults(), arguments, [
                        "roomSize",
                        "dampening"
                    ]);
                    this.roomSize = new po({
                        context: this.context,
                        value: t1.roomSize,
                        units: "normalRange"
                    }), this._allpassFiltersL = Ea.map((t1)=>{
                        const e = this.context.createBiquadFilter();
                        return e.type = "allpass", e.frequency.value = t1, e;
                    }), this._allpassFiltersR = Ea.map((t1)=>{
                        const e = this.context.createBiquadFilter();
                        return e.type = "allpass", e.frequency.value = t1, e;
                    }), this._combFilters = Ma.map((e, s1)=>{
                        const n = new Gr({
                            context: this.context,
                            dampening: t1.dampening,
                            delayTime: e
                        });
                        return s1 < Ma.length / 2 ? this.connectEffectLeft(n, ...this._allpassFiltersL) : this.connectEffectRight(n, ...this._allpassFiltersR), this.roomSize.connect(n.resonance), n;
                    }), Oi(this, [
                        "roomSize"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(ba.getDefaults(), {
                        roomSize: .7,
                        dampening: 3e3
                    });
                }
                get dampening() {
                    return this._combFilters[0].dampening;
                }
                set dampening(t1) {
                    this._combFilters.forEach((e)=>e.dampening = t1);
                }
                dispose() {
                    return super.dispose(), this._allpassFiltersL.forEach((t1)=>t1.disconnect()), this._allpassFiltersR.forEach((t1)=>t1.disconnect()), this._combFilters.forEach((t1)=>t1.dispose()), this.roomSize.dispose(), this;
                }
            }
            const qa = [
                .06748,
                .06404,
                .08212,
                .09004
            ], Fa = [
                .773,
                .802,
                .753,
                .733
            ], Ia = [
                347,
                113,
                37
            ];
            class Va extends ba {
                constructor(){
                    super(ui(Va.getDefaults(), arguments, [
                        "roomSize"
                    ])), this.name = "JCReverb", this._allpassFilters = [], this._feedbackCombFilters = [];
                    const t1 = ui(Va.getDefaults(), arguments, [
                        "roomSize"
                    ]);
                    this.roomSize = new po({
                        context: this.context,
                        value: t1.roomSize,
                        units: "normalRange"
                    }), this._scaleRoomSize = new ir({
                        context: this.context,
                        min: -0.733,
                        max: .197
                    }), this._allpassFilters = Ia.map((t1)=>{
                        const e = this.context.createBiquadFilter();
                        return e.type = "allpass", e.frequency.value = t1, e;
                    }), this._feedbackCombFilters = qa.map((t1, e)=>{
                        const s1 = new Br({
                            context: this.context,
                            delayTime: t1
                        });
                        return this._scaleRoomSize.connect(s1.resonance), s1.resonance.value = Fa[e], e < qa.length / 2 ? this.connectEffectLeft(...this._allpassFilters, s1) : this.connectEffectRight(...this._allpassFilters, s1), s1;
                    }), this.roomSize.connect(this._scaleRoomSize), Oi(this, [
                        "roomSize"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(ba.getDefaults(), {
                        roomSize: .5
                    });
                }
                dispose() {
                    return super.dispose(), this._allpassFilters.forEach((t1)=>t1.disconnect()), this._feedbackCombFilters.forEach((t1)=>t1.dispose()), this.roomSize.dispose(), this._scaleRoomSize.dispose(), this;
                }
            }
            class Na extends Ta {
                constructor(t1){
                    super(t1), this._feedbackL.disconnect(), this._feedbackL.connect(this._feedbackMerge, 0, 1), this._feedbackR.disconnect(), this._feedbackR.connect(this._feedbackMerge, 0, 0), Oi(this, [
                        "feedback"
                    ]);
                }
            }
            class Pa extends Na {
                constructor(){
                    super(ui(Pa.getDefaults(), arguments, [
                        "delayTime",
                        "feedback"
                    ])), this.name = "PingPongDelay";
                    const t1 = ui(Pa.getDefaults(), arguments, [
                        "delayTime",
                        "feedback"
                    ]);
                    this._leftDelay = new yo({
                        context: this.context,
                        maxDelay: t1.maxDelay
                    }), this._rightDelay = new yo({
                        context: this.context,
                        maxDelay: t1.maxDelay
                    }), this._rightPreDelay = new yo({
                        context: this.context,
                        maxDelay: t1.maxDelay
                    }), this.delayTime = new po({
                        context: this.context,
                        units: "time",
                        value: t1.delayTime
                    }), this.connectEffectLeft(this._leftDelay), this.connectEffectRight(this._rightPreDelay, this._rightDelay), this.delayTime.fan(this._leftDelay.delayTime, this._rightDelay.delayTime, this._rightPreDelay.delayTime), this._feedbackL.disconnect(), this._feedbackL.connect(this._rightDelay), Oi(this, [
                        "delayTime"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(Na.getDefaults(), {
                        delayTime: .25,
                        maxDelay: 1
                    });
                }
                dispose() {
                    return super.dispose(), this._leftDelay.dispose(), this._rightDelay.dispose(), this._rightPreDelay.dispose(), this.delayTime.dispose(), this;
                }
            }
            class ja extends Aa {
                constructor(){
                    super(ui(ja.getDefaults(), arguments, [
                        "pitch"
                    ])), this.name = "PitchShift";
                    const t1 = ui(ja.getDefaults(), arguments, [
                        "pitch"
                    ]);
                    this._frequency = new po({
                        context: this.context
                    }), this._delayA = new yo({
                        maxDelay: 1,
                        context: this.context
                    }), this._lfoA = new rr({
                        context: this.context,
                        min: 0,
                        max: .1,
                        type: "sawtooth"
                    }).connect(this._delayA.delayTime), this._delayB = new yo({
                        maxDelay: 1,
                        context: this.context
                    }), this._lfoB = new rr({
                        context: this.context,
                        min: 0,
                        max: .1,
                        type: "sawtooth",
                        phase: 180
                    }).connect(this._delayB.delayTime), this._crossFade = new ca({
                        context: this.context
                    }), this._crossFadeLFO = new rr({
                        context: this.context,
                        min: 0,
                        max: 1,
                        type: "triangle",
                        phase: 90
                    }).connect(this._crossFade.fade), this._feedbackDelay = new yo({
                        delayTime: t1.delayTime,
                        context: this.context
                    }), this.delayTime = this._feedbackDelay.delayTime, Oi(this, "delayTime"), this._pitch = t1.pitch, this._windowSize = t1.windowSize, this._delayA.connect(this._crossFade.a), this._delayB.connect(this._crossFade.b), this._frequency.fan(this._lfoA.frequency, this._lfoB.frequency, this._crossFadeLFO.frequency), this.effectSend.fan(this._delayA, this._delayB), this._crossFade.chain(this._feedbackDelay, this.effectReturn);
                    const e = this.now();
                    this._lfoA.start(e), this._lfoB.start(e), this._crossFadeLFO.start(e), this.windowSize = this._windowSize;
                }
                static getDefaults() {
                    return Object.assign(Aa.getDefaults(), {
                        pitch: 0,
                        windowSize: .1,
                        delayTime: 0,
                        feedback: 0
                    });
                }
                get pitch() {
                    return this._pitch;
                }
                set pitch(t1) {
                    this._pitch = t1;
                    let e = 0;
                    t1 < 0 ? (this._lfoA.min = 0, this._lfoA.max = this._windowSize, this._lfoB.min = 0, this._lfoB.max = this._windowSize, e = zi(t1 - 1) + 1) : (this._lfoA.min = this._windowSize, this._lfoA.max = 0, this._lfoB.min = this._windowSize, this._lfoB.max = 0, e = zi(t1) - 1), this._frequency.value = e * (1.2 / this._windowSize);
                }
                get windowSize() {
                    return this._windowSize;
                }
                set windowSize(t1) {
                    this._windowSize = this.toSeconds(t1), this.pitch = this._pitch;
                }
                dispose() {
                    return super.dispose(), this._frequency.dispose(), this._delayA.dispose(), this._delayB.dispose(), this._lfoA.dispose(), this._lfoB.dispose(), this._crossFade.dispose(), this._crossFadeLFO.dispose(), this._feedbackDelay.dispose(), this;
                }
            }
            class La extends ba {
                constructor(){
                    super(ui(La.getDefaults(), arguments, [
                        "frequency",
                        "octaves",
                        "baseFrequency"
                    ])), this.name = "Phaser";
                    const t1 = ui(La.getDefaults(), arguments, [
                        "frequency",
                        "octaves",
                        "baseFrequency"
                    ]);
                    this._lfoL = new rr({
                        context: this.context,
                        frequency: t1.frequency,
                        min: 0,
                        max: 1
                    }), this._lfoR = new rr({
                        context: this.context,
                        frequency: t1.frequency,
                        min: 0,
                        max: 1,
                        phase: 180
                    }), this._baseFrequency = this.toFrequency(t1.baseFrequency), this._octaves = t1.octaves, this.Q = new po({
                        context: this.context,
                        value: t1.Q,
                        units: "positive"
                    }), this._filtersL = this._makeFilters(t1.stages, this._lfoL), this._filtersR = this._makeFilters(t1.stages, this._lfoR), this.frequency = this._lfoL.frequency, this.frequency.value = t1.frequency, this.connectEffectLeft(...this._filtersL), this.connectEffectRight(...this._filtersR), this._lfoL.frequency.connect(this._lfoR.frequency), this.baseFrequency = t1.baseFrequency, this.octaves = t1.octaves, this._lfoL.start(), this._lfoR.start(), Oi(this, [
                        "frequency",
                        "Q"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(ba.getDefaults(), {
                        frequency: .5,
                        octaves: 3,
                        stages: 10,
                        Q: 10,
                        baseFrequency: 350
                    });
                }
                _makeFilters(t1, e) {
                    const s1 = [];
                    for(let n = 0; n < t1; n++){
                        const t1 = this.context.createBiquadFilter();
                        t1.type = "allpass", this.Q.connect(t1.Q), e.connect(t1.frequency), s1.push(t1);
                    }
                    return s1;
                }
                get octaves() {
                    return this._octaves;
                }
                set octaves(t1) {
                    this._octaves = t1;
                    const e = this._baseFrequency * Math.pow(2, t1);
                    this._lfoL.max = e, this._lfoR.max = e;
                }
                get baseFrequency() {
                    return this._baseFrequency;
                }
                set baseFrequency(t1) {
                    this._baseFrequency = this.toFrequency(t1), this._lfoL.min = this._baseFrequency, this._lfoR.min = this._baseFrequency, this.octaves = this._octaves;
                }
                dispose() {
                    return super.dispose(), this.Q.dispose(), this._lfoL.dispose(), this._lfoR.dispose(), this._filtersL.forEach((t1)=>t1.disconnect()), this._filtersR.forEach((t1)=>t1.disconnect()), this.frequency.dispose(), this;
                }
            }
            class za extends ha {
                constructor(){
                    super(ui(za.getDefaults(), arguments, [
                        "decay"
                    ])), this.name = "Reverb", this._convolver = this.context.createConvolver(), this.ready = Promise.resolve();
                    const t1 = ui(za.getDefaults(), arguments, [
                        "decay"
                    ]);
                    this._decay = t1.decay, this._preDelay = t1.preDelay, this.generate(), this.connectEffect(this._convolver);
                }
                static getDefaults() {
                    return Object.assign(ha.getDefaults(), {
                        decay: 1.5,
                        preDelay: .01
                    });
                }
                get decay() {
                    return this._decay;
                }
                set decay(t1) {
                    Un(t1 = this.toSeconds(t1), .001), this._decay = t1, this.generate();
                }
                get preDelay() {
                    return this._preDelay;
                }
                set preDelay(t1) {
                    Un(t1 = this.toSeconds(t1), 0), this._preDelay = t1, this.generate();
                }
                generate() {
                    return ni(this, void 0, void 0, function*() {
                        const t1 = this.ready, e = new qi(2, this._decay + this._preDelay, this.context.sampleRate), s1 = new Lo({
                            context: e
                        }), n = new Lo({
                            context: e
                        }), i = new wa({
                            context: e
                        });
                        s1.connect(i, 0, 0), n.connect(i, 0, 1);
                        const o = new ho({
                            context: e
                        }).toDestination();
                        i.connect(o), s1.start(0), n.start(0), o.gain.setValueAtTime(0, 0), o.gain.setValueAtTime(1, this._preDelay), o.gain.exponentialApproachValueAtTime(0, this._preDelay, this.decay);
                        const r = e.render();
                        return this.ready = r.then(Ei), yield t1, this._convolver.buffer = (yield r).get(), this;
                    });
                }
                dispose() {
                    return super.dispose(), this._convolver.disconnect(), this;
                }
            }
            class Wa extends io {
                constructor(){
                    super(ui(Wa.getDefaults(), arguments)), this.name = "MidSideSplit", this._split = this.input = new xa({
                        channels: 2,
                        context: this.context
                    }), this._midAdd = new nr({
                        context: this.context
                    }), this.mid = new Yo({
                        context: this.context,
                        value: Math.SQRT1_2
                    }), this._sideSubtract = new _r({
                        context: this.context
                    }), this.side = new Yo({
                        context: this.context,
                        value: Math.SQRT1_2
                    }), this._split.connect(this._midAdd, 0), this._split.connect(this._midAdd.addend, 1), this._split.connect(this._sideSubtract, 0), this._split.connect(this._sideSubtract.subtrahend, 1), this._midAdd.connect(this.mid), this._sideSubtract.connect(this.side);
                }
                dispose() {
                    return super.dispose(), this.mid.dispose(), this.side.dispose(), this._midAdd.dispose(), this._sideSubtract.dispose(), this._split.dispose(), this;
                }
            }
            class Ba extends io {
                constructor(){
                    super(ui(Ba.getDefaults(), arguments)), this.name = "MidSideMerge", this.mid = new ho({
                        context: this.context
                    }), this.side = new ho({
                        context: this.context
                    }), this._left = new nr({
                        context: this.context
                    }), this._leftMult = new Yo({
                        context: this.context,
                        value: Math.SQRT1_2
                    }), this._right = new _r({
                        context: this.context
                    }), this._rightMult = new Yo({
                        context: this.context,
                        value: Math.SQRT1_2
                    }), this._merge = this.output = new wa({
                        context: this.context
                    }), this.mid.fan(this._left), this.side.connect(this._left.addend), this.mid.connect(this._right), this.side.connect(this._right.subtrahend), this._left.connect(this._leftMult), this._right.connect(this._rightMult), this._leftMult.connect(this._merge, 0, 0), this._rightMult.connect(this._merge, 0, 1);
                }
                dispose() {
                    return super.dispose(), this.mid.dispose(), this.side.dispose(), this._leftMult.dispose(), this._rightMult.dispose(), this._left.dispose(), this._right.dispose(), this;
                }
            }
            class Ua extends ha {
                constructor(t1){
                    super(t1), this.name = "MidSideEffect", this._midSideMerge = new Ba({
                        context: this.context
                    }), this._midSideSplit = new Wa({
                        context: this.context
                    }), this._midSend = this._midSideSplit.mid, this._sideSend = this._midSideSplit.side, this._midReturn = this._midSideMerge.mid, this._sideReturn = this._midSideMerge.side, this.effectSend.connect(this._midSideSplit), this._midSideMerge.connect(this.effectReturn);
                }
                connectEffectMid(...t1) {
                    this._midSend.chain(...t1, this._midReturn);
                }
                connectEffectSide(...t1) {
                    this._sideSend.chain(...t1, this._sideReturn);
                }
                dispose() {
                    return super.dispose(), this._midSideSplit.dispose(), this._midSideMerge.dispose(), this._midSend.dispose(), this._sideSend.dispose(), this._midReturn.dispose(), this._sideReturn.dispose(), this;
                }
            }
            class Ga extends Ua {
                constructor(){
                    super(ui(Ga.getDefaults(), arguments, [
                        "width"
                    ])), this.name = "StereoWidener";
                    const t1 = ui(Ga.getDefaults(), arguments, [
                        "width"
                    ]);
                    this.width = new po({
                        context: this.context,
                        value: t1.width,
                        units: "normalRange"
                    }), Oi(this, [
                        "width"
                    ]), this._twoTimesWidthMid = new Yo({
                        context: this.context,
                        value: 2
                    }), this._twoTimesWidthSide = new Yo({
                        context: this.context,
                        value: 2
                    }), this._midMult = new Yo({
                        context: this.context
                    }), this._twoTimesWidthMid.connect(this._midMult.factor), this.connectEffectMid(this._midMult), this._oneMinusWidth = new _r({
                        context: this.context
                    }), this._oneMinusWidth.connect(this._twoTimesWidthMid), ro(this.context.getConstant(1), this._oneMinusWidth), this.width.connect(this._oneMinusWidth.subtrahend), this._sideMult = new Yo({
                        context: this.context
                    }), this.width.connect(this._twoTimesWidthSide), this._twoTimesWidthSide.connect(this._sideMult.factor), this.connectEffectSide(this._sideMult);
                }
                static getDefaults() {
                    return Object.assign(Ua.getDefaults(), {
                        width: .5
                    });
                }
                dispose() {
                    return super.dispose(), this.width.dispose(), this._midMult.dispose(), this._sideMult.dispose(), this._twoTimesWidthMid.dispose(), this._twoTimesWidthSide.dispose(), this._oneMinusWidth.dispose(), this;
                }
            }
            class Qa extends ba {
                constructor(){
                    super(ui(Qa.getDefaults(), arguments, [
                        "frequency",
                        "depth"
                    ])), this.name = "Tremolo";
                    const t1 = ui(Qa.getDefaults(), arguments, [
                        "frequency",
                        "depth"
                    ]);
                    this._lfoL = new rr({
                        context: this.context,
                        type: t1.type,
                        min: 1,
                        max: 0
                    }), this._lfoR = new rr({
                        context: this.context,
                        type: t1.type,
                        min: 1,
                        max: 0
                    }), this._amplitudeL = new ho({
                        context: this.context
                    }), this._amplitudeR = new ho({
                        context: this.context
                    }), this.frequency = new po({
                        context: this.context,
                        value: t1.frequency,
                        units: "frequency"
                    }), this.depth = new po({
                        context: this.context,
                        value: t1.depth,
                        units: "normalRange"
                    }), Oi(this, [
                        "frequency",
                        "depth"
                    ]), this.connectEffectLeft(this._amplitudeL), this.connectEffectRight(this._amplitudeR), this._lfoL.connect(this._amplitudeL.gain), this._lfoR.connect(this._amplitudeR.gain), this.frequency.fan(this._lfoL.frequency, this._lfoR.frequency), this.depth.fan(this._lfoR.amplitude, this._lfoL.amplitude), this.spread = t1.spread;
                }
                static getDefaults() {
                    return Object.assign(ba.getDefaults(), {
                        frequency: 10,
                        type: "sine",
                        depth: .5,
                        spread: 180
                    });
                }
                start(t1) {
                    return this._lfoL.start(t1), this._lfoR.start(t1), this;
                }
                stop(t1) {
                    return this._lfoL.stop(t1), this._lfoR.stop(t1), this;
                }
                sync() {
                    return this._lfoL.sync(), this._lfoR.sync(), this.context.transport.syncSignal(this.frequency), this;
                }
                unsync() {
                    return this._lfoL.unsync(), this._lfoR.unsync(), this.context.transport.unsyncSignal(this.frequency), this;
                }
                get type() {
                    return this._lfoL.type;
                }
                set type(t1) {
                    this._lfoL.type = t1, this._lfoR.type = t1;
                }
                get spread() {
                    return this._lfoR.phase - this._lfoL.phase;
                }
                set spread(t1) {
                    this._lfoL.phase = 90 - t1 / 2, this._lfoR.phase = t1 / 2 + 90;
                }
                dispose() {
                    return super.dispose(), this._lfoL.dispose(), this._lfoR.dispose(), this._amplitudeL.dispose(), this._amplitudeR.dispose(), this.frequency.dispose(), this.depth.dispose(), this;
                }
            }
            class Za extends ha {
                constructor(){
                    super(ui(Za.getDefaults(), arguments, [
                        "frequency",
                        "depth"
                    ])), this.name = "Vibrato";
                    const t1 = ui(Za.getDefaults(), arguments, [
                        "frequency",
                        "depth"
                    ]);
                    this._delayNode = new yo({
                        context: this.context,
                        delayTime: 0,
                        maxDelay: t1.maxDelay
                    }), this._lfo = new rr({
                        context: this.context,
                        type: t1.type,
                        min: 0,
                        max: t1.maxDelay,
                        frequency: t1.frequency,
                        phase: -90
                    }).start().connect(this._delayNode.delayTime), this.frequency = this._lfo.frequency, this.depth = this._lfo.amplitude, this.depth.value = t1.depth, Oi(this, [
                        "frequency",
                        "depth"
                    ]), this.effectSend.chain(this._delayNode, this.effectReturn);
                }
                static getDefaults() {
                    return Object.assign(ha.getDefaults(), {
                        maxDelay: .005,
                        frequency: 5,
                        depth: .1,
                        type: "sine"
                    });
                }
                get type() {
                    return this._lfo.type;
                }
                set type(t1) {
                    this._lfo.type = t1;
                }
                dispose() {
                    return super.dispose(), this._delayNode.dispose(), this._lfo.dispose(), this.frequency.dispose(), this.depth.dispose(), this;
                }
            }
            class Xa extends io {
                constructor(){
                    super(ui(Xa.getDefaults(), arguments, [
                        "type",
                        "size"
                    ])), this.name = "Analyser", this._analysers = [], this._buffers = [];
                    const t1 = ui(Xa.getDefaults(), arguments, [
                        "type",
                        "size"
                    ]);
                    this.input = this.output = this._gain = new ho({
                        context: this.context
                    }), this._split = new xa({
                        context: this.context,
                        channels: t1.channels
                    }), this.input.connect(this._split), Un(t1.channels, 1);
                    for(let e = 0; e < t1.channels; e++)this._analysers[e] = this.context.createAnalyser(), this._split.connect(this._analysers[e], e, 0);
                    this.size = t1.size, this.type = t1.type, this.smoothing = t1.smoothing;
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        size: 1024,
                        smoothing: .8,
                        type: "fft",
                        channels: 1
                    });
                }
                getValue() {
                    return this._analysers.forEach((t1, e)=>{
                        const s1 = this._buffers[e];
                        "fft" === this._type ? t1.getFloatFrequencyData(s1) : "waveform" === this._type && t1.getFloatTimeDomainData(s1);
                    }), 1 === this.channels ? this._buffers[0] : this._buffers;
                }
                get size() {
                    return this._analysers[0].frequencyBinCount;
                }
                set size(t1) {
                    this._analysers.forEach((e, s1)=>{
                        e.fftSize = 2 * t1, this._buffers[s1] = new Float32Array(t1);
                    });
                }
                get channels() {
                    return this._analysers.length;
                }
                get type() {
                    return this._type;
                }
                set type(t1) {
                    Bn("waveform" === t1 || "fft" === t1, `Analyser: invalid type: ${t1}`), this._type = t1;
                }
                get smoothing() {
                    return this._analysers[0].smoothingTimeConstant;
                }
                set smoothing(t1) {
                    this._analysers.forEach((e)=>e.smoothingTimeConstant = t1);
                }
                dispose() {
                    return super.dispose(), this._analysers.forEach((t1)=>t1.disconnect()), this._split.dispose(), this._gain.dispose(), this;
                }
            }
            class Ya extends io {
                constructor(){
                    super(ui(Ya.getDefaults(), arguments)), this.name = "MeterBase", this.input = this.output = this._analyser = new Xa({
                        context: this.context,
                        size: 256,
                        type: "waveform"
                    });
                }
                dispose() {
                    return super.dispose(), this._analyser.dispose(), this;
                }
            }
            class $a extends Ya {
                constructor(){
                    super(ui($a.getDefaults(), arguments, [
                        "smoothing"
                    ])), this.name = "Meter";
                    const t1 = ui($a.getDefaults(), arguments, [
                        "smoothing"
                    ]);
                    this.input = this.output = this._analyser = new Xa({
                        context: this.context,
                        size: 256,
                        type: "waveform",
                        channels: t1.channelCount
                    }), this.smoothing = t1.smoothing, this.normalRange = t1.normalRange, this._rms = new Array(t1.channelCount), this._rms.fill(0);
                }
                static getDefaults() {
                    return Object.assign(Ya.getDefaults(), {
                        smoothing: .8,
                        normalRange: !1,
                        channelCount: 1
                    });
                }
                getLevel() {
                    return Kn("'getLevel' has been changed to 'getValue'"), this.getValue();
                }
                getValue() {
                    const t1 = this._analyser.getValue(), e = (1 === this.channels ? [
                        t1
                    ] : t1).map((t1, e)=>{
                        const s1 = t1.reduce((t1, e)=>t1 + e * e, 0), n = Math.sqrt(s1 / t1.length);
                        return this._rms[e] = Math.max(n, this._rms[e] * this.smoothing), this.normalRange ? this._rms[e] : Li(this._rms[e]);
                    });
                    return 1 === this.channels ? e[0] : e;
                }
                get channels() {
                    return this._analyser.channels;
                }
                dispose() {
                    return super.dispose(), this._analyser.dispose(), this;
                }
            }
            class Ha extends Ya {
                constructor(){
                    super(ui(Ha.getDefaults(), arguments, [
                        "size"
                    ])), this.name = "FFT";
                    const t1 = ui(Ha.getDefaults(), arguments, [
                        "size"
                    ]);
                    this.normalRange = t1.normalRange, this._analyser.type = "fft", this.size = t1.size;
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        normalRange: !1,
                        size: 1024,
                        smoothing: .8
                    });
                }
                getValue() {
                    return this._analyser.getValue().map((t1)=>this.normalRange ? ji(t1) : t1);
                }
                get size() {
                    return this._analyser.size;
                }
                set size(t1) {
                    this._analyser.size = t1;
                }
                get smoothing() {
                    return this._analyser.smoothing;
                }
                set smoothing(t1) {
                    this._analyser.smoothing = t1;
                }
                getFrequencyOfIndex(t1) {
                    return Bn(0 <= t1 && t1 < this.size, `index must be greater than or equal to 0 and less than ${this.size}`), t1 * this.context.sampleRate / (2 * this.size);
                }
            }
            class Ja extends Ya {
                constructor(){
                    super(ui(Ja.getDefaults(), arguments)), this.name = "DCMeter", this._analyser.type = "waveform", this._analyser.size = 256;
                }
                getValue() {
                    return this._analyser.getValue()[0];
                }
            }
            class Ka extends Ya {
                constructor(){
                    super(ui(Ka.getDefaults(), arguments, [
                        "size"
                    ])), this.name = "Waveform";
                    const t1 = ui(Ka.getDefaults(), arguments, [
                        "size"
                    ]);
                    this._analyser.type = "waveform", this.size = t1.size;
                }
                static getDefaults() {
                    return Object.assign(Ya.getDefaults(), {
                        size: 1024
                    });
                }
                getValue() {
                    return this._analyser.getValue();
                }
                get size() {
                    return this._analyser.size;
                }
                set size(t1) {
                    this._analyser.size = t1;
                }
            }
            class tc extends io {
                constructor(){
                    super(ui(tc.getDefaults(), arguments, [
                        "solo"
                    ])), this.name = "Solo";
                    const t1 = ui(tc.getDefaults(), arguments, [
                        "solo"
                    ]);
                    this.input = this.output = new ho({
                        context: this.context
                    }), tc._allSolos.has(this.context) || tc._allSolos.set(this.context, new Set), tc._allSolos.get(this.context).add(this), this.solo = t1.solo;
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        solo: !1
                    });
                }
                get solo() {
                    return this._isSoloed();
                }
                set solo(t1) {
                    t1 ? this._addSolo() : this._removeSolo(), tc._allSolos.get(this.context).forEach((t1)=>t1._updateSolo());
                }
                get muted() {
                    return 0 === this.input.gain.value;
                }
                _addSolo() {
                    tc._soloed.has(this.context) || tc._soloed.set(this.context, new Set), tc._soloed.get(this.context).add(this);
                }
                _removeSolo() {
                    tc._soloed.has(this.context) && tc._soloed.get(this.context).delete(this);
                }
                _isSoloed() {
                    return tc._soloed.has(this.context) && tc._soloed.get(this.context).has(this);
                }
                _noSolos() {
                    return !tc._soloed.has(this.context) || tc._soloed.has(this.context) && 0 === tc._soloed.get(this.context).size;
                }
                _updateSolo() {
                    this._isSoloed() || this._noSolos() ? this.input.gain.value = 1 : this.input.gain.value = 0;
                }
                dispose() {
                    return super.dispose(), tc._allSolos.get(this.context).delete(this), this._removeSolo(), this;
                }
            }
            tc._allSolos = new Map, tc._soloed = new Map;
            class ec extends io {
                constructor(){
                    super(ui(ec.getDefaults(), arguments, [
                        "pan",
                        "volume"
                    ])), this.name = "PanVol";
                    const t1 = ui(ec.getDefaults(), arguments, [
                        "pan",
                        "volume"
                    ]);
                    this._panner = this.input = new pa({
                        context: this.context,
                        pan: t1.pan,
                        channelCount: t1.channelCount
                    }), this.pan = this._panner.pan, this._volume = this.output = new Oo({
                        context: this.context,
                        volume: t1.volume
                    }), this.volume = this._volume.volume, this._panner.connect(this._volume), this.mute = t1.mute, Oi(this, [
                        "pan",
                        "volume"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        mute: !1,
                        pan: 0,
                        volume: 0,
                        channelCount: 1
                    });
                }
                get mute() {
                    return this._volume.mute;
                }
                set mute(t1) {
                    this._volume.mute = t1;
                }
                dispose() {
                    return super.dispose(), this._panner.dispose(), this.pan.dispose(), this._volume.dispose(), this.volume.dispose(), this;
                }
            }
            class sc extends io {
                constructor(){
                    super(ui(sc.getDefaults(), arguments, [
                        "volume",
                        "pan"
                    ])), this.name = "Channel";
                    const t1 = ui(sc.getDefaults(), arguments, [
                        "volume",
                        "pan"
                    ]);
                    this._solo = this.input = new tc({
                        solo: t1.solo,
                        context: this.context
                    }), this._panVol = this.output = new ec({
                        context: this.context,
                        pan: t1.pan,
                        volume: t1.volume,
                        mute: t1.mute,
                        channelCount: t1.channelCount
                    }), this.pan = this._panVol.pan, this.volume = this._panVol.volume, this._solo.connect(this._panVol), Oi(this, [
                        "pan",
                        "volume"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        pan: 0,
                        volume: 0,
                        mute: !1,
                        solo: !1,
                        channelCount: 1
                    });
                }
                get solo() {
                    return this._solo.solo;
                }
                set solo(t1) {
                    this._solo.solo = t1;
                }
                get muted() {
                    return this._solo.muted || this.mute;
                }
                get mute() {
                    return this._panVol.mute;
                }
                set mute(t1) {
                    this._panVol.mute = t1;
                }
                _getBus(t1) {
                    return sc.buses.has(t1) || sc.buses.set(t1, new ho({
                        context: this.context
                    })), sc.buses.get(t1);
                }
                send(t1, e = 0) {
                    const s1 = this._getBus(t1), n = new ho({
                        context: this.context,
                        units: "decibels",
                        gain: e
                    });
                    return this.connect(n), n.connect(s1), n;
                }
                receive(t1) {
                    return this._getBus(t1).connect(this), this;
                }
                dispose() {
                    return super.dispose(), this._panVol.dispose(), this.pan.dispose(), this.volume.dispose(), this._solo.dispose(), this;
                }
            }
            sc.buses = new Map;
            class nc extends io {
                constructor(){
                    super(ui(nc.getDefaults(), arguments)), this.name = "Mono", this.input = new ho({
                        context: this.context
                    }), this._merge = this.output = new wa({
                        channels: 2,
                        context: this.context
                    }), this.input.connect(this._merge, 0, 0), this.input.connect(this._merge, 0, 1);
                }
                dispose() {
                    return super.dispose(), this._merge.dispose(), this.input.dispose(), this;
                }
            }
            class ic extends io {
                constructor(){
                    super(ui(ic.getDefaults(), arguments, [
                        "lowFrequency",
                        "highFrequency"
                    ])), this.name = "MultibandSplit", this.input = new ho({
                        context: this.context
                    }), this.output = void 0, this.low = new Or({
                        context: this.context,
                        frequency: 0,
                        type: "lowpass"
                    }), this._lowMidFilter = new Or({
                        context: this.context,
                        frequency: 0,
                        type: "highpass"
                    }), this.mid = new Or({
                        context: this.context,
                        frequency: 0,
                        type: "lowpass"
                    }), this.high = new Or({
                        context: this.context,
                        frequency: 0,
                        type: "highpass"
                    }), this._internalChannels = [
                        this.low,
                        this.mid,
                        this.high
                    ];
                    const t1 = ui(ic.getDefaults(), arguments, [
                        "lowFrequency",
                        "highFrequency"
                    ]);
                    this.lowFrequency = new po({
                        context: this.context,
                        units: "frequency",
                        value: t1.lowFrequency
                    }), this.highFrequency = new po({
                        context: this.context,
                        units: "frequency",
                        value: t1.highFrequency
                    }), this.Q = new po({
                        context: this.context,
                        units: "positive",
                        value: t1.Q
                    }), this.input.fan(this.low, this.high), this.input.chain(this._lowMidFilter, this.mid), this.lowFrequency.fan(this.low.frequency, this._lowMidFilter.frequency), this.highFrequency.fan(this.mid.frequency, this.high.frequency), this.Q.connect(this.low.Q), this.Q.connect(this._lowMidFilter.Q), this.Q.connect(this.mid.Q), this.Q.connect(this.high.Q), Oi(this, [
                        "high",
                        "mid",
                        "low",
                        "highFrequency",
                        "lowFrequency"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        Q: 1,
                        highFrequency: 2500,
                        lowFrequency: 400
                    });
                }
                dispose() {
                    return super.dispose(), Mi(this, [
                        "high",
                        "mid",
                        "low",
                        "highFrequency",
                        "lowFrequency"
                    ]), this.low.dispose(), this._lowMidFilter.dispose(), this.mid.dispose(), this.high.dispose(), this.lowFrequency.dispose(), this.highFrequency.dispose(), this.Q.dispose(), this;
                }
            }
            class oc extends io {
                constructor(){
                    super(...arguments), this.name = "Listener", this.positionX = new no({
                        context: this.context,
                        param: this.context.rawContext.listener.positionX
                    }), this.positionY = new no({
                        context: this.context,
                        param: this.context.rawContext.listener.positionY
                    }), this.positionZ = new no({
                        context: this.context,
                        param: this.context.rawContext.listener.positionZ
                    }), this.forwardX = new no({
                        context: this.context,
                        param: this.context.rawContext.listener.forwardX
                    }), this.forwardY = new no({
                        context: this.context,
                        param: this.context.rawContext.listener.forwardY
                    }), this.forwardZ = new no({
                        context: this.context,
                        param: this.context.rawContext.listener.forwardZ
                    }), this.upX = new no({
                        context: this.context,
                        param: this.context.rawContext.listener.upX
                    }), this.upY = new no({
                        context: this.context,
                        param: this.context.rawContext.listener.upY
                    }), this.upZ = new no({
                        context: this.context,
                        param: this.context.rawContext.listener.upZ
                    });
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        positionX: 0,
                        positionY: 0,
                        positionZ: 0,
                        forwardX: 0,
                        forwardY: 0,
                        forwardZ: -1,
                        upX: 0,
                        upY: 1,
                        upZ: 0
                    });
                }
                dispose() {
                    return super.dispose(), this.positionX.dispose(), this.positionY.dispose(), this.positionZ.dispose(), this.forwardX.dispose(), this.forwardY.dispose(), this.forwardZ.dispose(), this.upX.dispose(), this.upY.dispose(), this.upZ.dispose(), this;
                }
            }
            Ti((t1)=>{
                t1.listener = new oc({
                    context: t1
                });
            }), ki((t1)=>{
                t1.listener.dispose();
            });
            class rc extends io {
                constructor(){
                    super(ui(rc.getDefaults(), arguments, [
                        "positionX",
                        "positionY",
                        "positionZ"
                    ])), this.name = "Panner3D";
                    const t1 = ui(rc.getDefaults(), arguments, [
                        "positionX",
                        "positionY",
                        "positionZ"
                    ]);
                    this._panner = this.input = this.output = this.context.createPanner(), this.panningModel = t1.panningModel, this.maxDistance = t1.maxDistance, this.distanceModel = t1.distanceModel, this.coneOuterGain = t1.coneOuterGain, this.coneOuterAngle = t1.coneOuterAngle, this.coneInnerAngle = t1.coneInnerAngle, this.refDistance = t1.refDistance, this.rolloffFactor = t1.rolloffFactor, this.positionX = new no({
                        context: this.context,
                        param: this._panner.positionX,
                        value: t1.positionX
                    }), this.positionY = new no({
                        context: this.context,
                        param: this._panner.positionY,
                        value: t1.positionY
                    }), this.positionZ = new no({
                        context: this.context,
                        param: this._panner.positionZ,
                        value: t1.positionZ
                    }), this.orientationX = new no({
                        context: this.context,
                        param: this._panner.orientationX,
                        value: t1.orientationX
                    }), this.orientationY = new no({
                        context: this.context,
                        param: this._panner.orientationY,
                        value: t1.orientationY
                    }), this.orientationZ = new no({
                        context: this.context,
                        param: this._panner.orientationZ,
                        value: t1.orientationZ
                    });
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        coneInnerAngle: 360,
                        coneOuterAngle: 360,
                        coneOuterGain: 0,
                        distanceModel: "inverse",
                        maxDistance: 1e4,
                        orientationX: 0,
                        orientationY: 0,
                        orientationZ: 0,
                        panningModel: "equalpower",
                        positionX: 0,
                        positionY: 0,
                        positionZ: 0,
                        refDistance: 1,
                        rolloffFactor: 1
                    });
                }
                setPosition(t1, e, s1) {
                    return this.positionX.value = t1, this.positionY.value = e, this.positionZ.value = s1, this;
                }
                setOrientation(t1, e, s1) {
                    return this.orientationX.value = t1, this.orientationY.value = e, this.orientationZ.value = s1, this;
                }
                get panningModel() {
                    return this._panner.panningModel;
                }
                set panningModel(t1) {
                    this._panner.panningModel = t1;
                }
                get refDistance() {
                    return this._panner.refDistance;
                }
                set refDistance(t1) {
                    this._panner.refDistance = t1;
                }
                get rolloffFactor() {
                    return this._panner.rolloffFactor;
                }
                set rolloffFactor(t1) {
                    this._panner.rolloffFactor = t1;
                }
                get distanceModel() {
                    return this._panner.distanceModel;
                }
                set distanceModel(t1) {
                    this._panner.distanceModel = t1;
                }
                get coneInnerAngle() {
                    return this._panner.coneInnerAngle;
                }
                set coneInnerAngle(t1) {
                    this._panner.coneInnerAngle = t1;
                }
                get coneOuterAngle() {
                    return this._panner.coneOuterAngle;
                }
                set coneOuterAngle(t1) {
                    this._panner.coneOuterAngle = t1;
                }
                get coneOuterGain() {
                    return this._panner.coneOuterGain;
                }
                set coneOuterGain(t1) {
                    this._panner.coneOuterGain = t1;
                }
                get maxDistance() {
                    return this._panner.maxDistance;
                }
                set maxDistance(t1) {
                    this._panner.maxDistance = t1;
                }
                dispose() {
                    return super.dispose(), this._panner.disconnect(), this.orientationX.dispose(), this.orientationY.dispose(), this.orientationZ.dispose(), this.positionX.dispose(), this.positionY.dispose(), this.positionZ.dispose(), this;
                }
            }
            class ac extends io {
                constructor(){
                    super(ui(ac.getDefaults(), arguments)), this.name = "Recorder";
                    const t1 = ui(ac.getDefaults(), arguments);
                    this.input = new ho({
                        context: this.context
                    }), Bn(ac.supported, "Media Recorder API is not available"), this._stream = this.context.createMediaStreamDestination(), this.input.connect(this._stream), this._recorder = new MediaRecorder(this._stream.stream, {
                        mimeType: t1.mimeType
                    });
                }
                static getDefaults() {
                    return io.getDefaults();
                }
                get mimeType() {
                    return this._recorder.mimeType;
                }
                static get supported() {
                    return null !== ti && Reflect.has(ti, "MediaRecorder");
                }
                get state() {
                    return "inactive" === this._recorder.state ? "stopped" : "paused" === this._recorder.state ? "paused" : "started";
                }
                start() {
                    return ni(this, void 0, void 0, function*() {
                        Bn("started" !== this.state, "Recorder is already started");
                        const t1 = new Promise((t1)=>{
                            const e = ()=>{
                                this._recorder.removeEventListener("start", e, !1), t1();
                            };
                            this._recorder.addEventListener("start", e, !1);
                        });
                        return this._recorder.start(), yield t1;
                    });
                }
                stop() {
                    return ni(this, void 0, void 0, function*() {
                        Bn("stopped" !== this.state, "Recorder is not started");
                        const t1 = new Promise((t1)=>{
                            const e = (s1)=>{
                                this._recorder.removeEventListener("dataavailable", e, !1), t1(s1.data);
                            };
                            this._recorder.addEventListener("dataavailable", e, !1);
                        });
                        return this._recorder.stop(), yield t1;
                    });
                }
                pause() {
                    return Bn("started" === this.state, "Recorder must be started"), this._recorder.pause(), this;
                }
                dispose() {
                    return super.dispose(), this.input.dispose(), this._stream.disconnect(), this;
                }
            }
            class cc extends io {
                constructor(){
                    super(ui(cc.getDefaults(), arguments, [
                        "threshold",
                        "ratio"
                    ])), this.name = "Compressor", this._compressor = this.context.createDynamicsCompressor(), this.input = this._compressor, this.output = this._compressor;
                    const t1 = ui(cc.getDefaults(), arguments, [
                        "threshold",
                        "ratio"
                    ]);
                    this.threshold = new no({
                        minValue: this._compressor.threshold.minValue,
                        maxValue: this._compressor.threshold.maxValue,
                        context: this.context,
                        convert: !1,
                        param: this._compressor.threshold,
                        units: "decibels",
                        value: t1.threshold
                    }), this.attack = new no({
                        minValue: this._compressor.attack.minValue,
                        maxValue: this._compressor.attack.maxValue,
                        context: this.context,
                        param: this._compressor.attack,
                        units: "time",
                        value: t1.attack
                    }), this.release = new no({
                        minValue: this._compressor.release.minValue,
                        maxValue: this._compressor.release.maxValue,
                        context: this.context,
                        param: this._compressor.release,
                        units: "time",
                        value: t1.release
                    }), this.knee = new no({
                        minValue: this._compressor.knee.minValue,
                        maxValue: this._compressor.knee.maxValue,
                        context: this.context,
                        convert: !1,
                        param: this._compressor.knee,
                        units: "decibels",
                        value: t1.knee
                    }), this.ratio = new no({
                        minValue: this._compressor.ratio.minValue,
                        maxValue: this._compressor.ratio.maxValue,
                        context: this.context,
                        convert: !1,
                        param: this._compressor.ratio,
                        units: "positive",
                        value: t1.ratio
                    }), Oi(this, [
                        "knee",
                        "release",
                        "attack",
                        "ratio",
                        "threshold"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        attack: .003,
                        knee: 30,
                        ratio: 12,
                        release: .25,
                        threshold: -24
                    });
                }
                get reduction() {
                    return this._compressor.reduction;
                }
                dispose() {
                    return super.dispose(), this._compressor.disconnect(), this.attack.dispose(), this.release.dispose(), this.threshold.dispose(), this.ratio.dispose(), this.knee.dispose(), this;
                }
            }
            class hc extends io {
                constructor(){
                    super(Object.assign(ui(hc.getDefaults(), arguments, [
                        "threshold",
                        "smoothing"
                    ]))), this.name = "Gate";
                    const t1 = ui(hc.getDefaults(), arguments, [
                        "threshold",
                        "smoothing"
                    ]);
                    this._follower = new fa({
                        context: this.context,
                        smoothing: t1.smoothing
                    }), this._gt = new gr({
                        context: this.context,
                        value: ji(t1.threshold)
                    }), this.input = new ho({
                        context: this.context
                    }), this._gate = this.output = new ho({
                        context: this.context
                    }), this.input.connect(this._gate), this.input.chain(this._follower, this._gt, this._gate.gain);
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        smoothing: .1,
                        threshold: -40
                    });
                }
                get threshold() {
                    return Li(this._gt.value);
                }
                set threshold(t1) {
                    this._gt.value = ji(t1);
                }
                get smoothing() {
                    return this._follower.smoothing;
                }
                set smoothing(t1) {
                    this._follower.smoothing = t1;
                }
                dispose() {
                    return super.dispose(), this.input.dispose(), this._follower.dispose(), this._gt.dispose(), this._gate.dispose(), this;
                }
            }
            class lc extends io {
                constructor(){
                    super(Object.assign(ui(lc.getDefaults(), arguments, [
                        "threshold"
                    ]))), this.name = "Limiter";
                    const t1 = ui(lc.getDefaults(), arguments, [
                        "threshold"
                    ]);
                    this._compressor = this.input = this.output = new cc({
                        context: this.context,
                        ratio: 20,
                        attack: .003,
                        release: .01,
                        threshold: t1.threshold
                    }), this.threshold = this._compressor.threshold, Oi(this, "threshold");
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        threshold: -12
                    });
                }
                get reduction() {
                    return this._compressor.reduction;
                }
                dispose() {
                    return super.dispose(), this._compressor.dispose(), this.threshold.dispose(), this;
                }
            }
            class uc extends io {
                constructor(){
                    super(Object.assign(ui(uc.getDefaults(), arguments))), this.name = "MidSideCompressor";
                    const t1 = ui(uc.getDefaults(), arguments);
                    this._midSideSplit = this.input = new Wa({
                        context: this.context
                    }), this._midSideMerge = this.output = new Ba({
                        context: this.context
                    }), this.mid = new cc(Object.assign(t1.mid, {
                        context: this.context
                    })), this.side = new cc(Object.assign(t1.side, {
                        context: this.context
                    })), this._midSideSplit.mid.chain(this.mid, this._midSideMerge.mid), this._midSideSplit.side.chain(this.side, this._midSideMerge.side), Oi(this, [
                        "mid",
                        "side"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        mid: {
                            ratio: 3,
                            threshold: -24,
                            release: .03,
                            attack: .02,
                            knee: 16
                        },
                        side: {
                            ratio: 6,
                            threshold: -30,
                            release: .25,
                            attack: .03,
                            knee: 10
                        }
                    });
                }
                dispose() {
                    return super.dispose(), this.mid.dispose(), this.side.dispose(), this._midSideSplit.dispose(), this._midSideMerge.dispose(), this;
                }
            }
            class pc extends io {
                constructor(){
                    super(Object.assign(ui(pc.getDefaults(), arguments))), this.name = "MultibandCompressor";
                    const t1 = ui(pc.getDefaults(), arguments);
                    this._splitter = this.input = new ic({
                        context: this.context,
                        lowFrequency: t1.lowFrequency,
                        highFrequency: t1.highFrequency
                    }), this.lowFrequency = this._splitter.lowFrequency, this.highFrequency = this._splitter.highFrequency, this.output = new ho({
                        context: this.context
                    }), this.low = new cc(Object.assign(t1.low, {
                        context: this.context
                    })), this.mid = new cc(Object.assign(t1.mid, {
                        context: this.context
                    })), this.high = new cc(Object.assign(t1.high, {
                        context: this.context
                    })), this._splitter.low.chain(this.low, this.output), this._splitter.mid.chain(this.mid, this.output), this._splitter.high.chain(this.high, this.output), Oi(this, [
                        "high",
                        "mid",
                        "low",
                        "highFrequency",
                        "lowFrequency"
                    ]);
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        lowFrequency: 250,
                        highFrequency: 2e3,
                        low: {
                            ratio: 6,
                            threshold: -30,
                            release: .25,
                            attack: .03,
                            knee: 10
                        },
                        mid: {
                            ratio: 3,
                            threshold: -24,
                            release: .03,
                            attack: .02,
                            knee: 16
                        },
                        high: {
                            ratio: 3,
                            threshold: -24,
                            release: .03,
                            attack: .02,
                            knee: 16
                        }
                    });
                }
                dispose() {
                    return super.dispose(), this._splitter.dispose(), this.low.dispose(), this.mid.dispose(), this.high.dispose(), this.output.dispose(), this;
                }
            }
            class dc extends io {
                constructor(){
                    super(ui(dc.getDefaults(), arguments, [
                        "low",
                        "mid",
                        "high"
                    ])), this.name = "EQ3", this.output = new ho({
                        context: this.context
                    }), this._internalChannels = [];
                    const t1 = ui(dc.getDefaults(), arguments, [
                        "low",
                        "mid",
                        "high"
                    ]);
                    this.input = this._multibandSplit = new ic({
                        context: this.context,
                        highFrequency: t1.highFrequency,
                        lowFrequency: t1.lowFrequency
                    }), this._lowGain = new ho({
                        context: this.context,
                        gain: t1.low,
                        units: "decibels"
                    }), this._midGain = new ho({
                        context: this.context,
                        gain: t1.mid,
                        units: "decibels"
                    }), this._highGain = new ho({
                        context: this.context,
                        gain: t1.high,
                        units: "decibels"
                    }), this.low = this._lowGain.gain, this.mid = this._midGain.gain, this.high = this._highGain.gain, this.Q = this._multibandSplit.Q, this.lowFrequency = this._multibandSplit.lowFrequency, this.highFrequency = this._multibandSplit.highFrequency, this._multibandSplit.low.chain(this._lowGain, this.output), this._multibandSplit.mid.chain(this._midGain, this.output), this._multibandSplit.high.chain(this._highGain, this.output), Oi(this, [
                        "low",
                        "mid",
                        "high",
                        "lowFrequency",
                        "highFrequency"
                    ]), this._internalChannels = [
                        this._multibandSplit
                    ];
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        high: 0,
                        highFrequency: 2500,
                        low: 0,
                        lowFrequency: 400,
                        mid: 0
                    });
                }
                dispose() {
                    return super.dispose(), Mi(this, [
                        "low",
                        "mid",
                        "high",
                        "lowFrequency",
                        "highFrequency"
                    ]), this._multibandSplit.dispose(), this.lowFrequency.dispose(), this.highFrequency.dispose(), this._lowGain.dispose(), this._midGain.dispose(), this._highGain.dispose(), this.low.dispose(), this.mid.dispose(), this.high.dispose(), this.Q.dispose(), this;
                }
            }
            class fc extends io {
                constructor(){
                    super(ui(fc.getDefaults(), arguments, [
                        "url",
                        "onload"
                    ])), this.name = "Convolver", this._convolver = this.context.createConvolver();
                    const t1 = ui(fc.getDefaults(), arguments, [
                        "url",
                        "onload"
                    ]);
                    this._buffer = new Ri(t1.url, (e)=>{
                        this.buffer = e, t1.onload();
                    }), this.input = new ho({
                        context: this.context
                    }), this.output = new ho({
                        context: this.context
                    }), this._buffer.loaded && (this.buffer = this._buffer), this.normalize = t1.normalize, this.input.chain(this._convolver, this.output);
                }
                static getDefaults() {
                    return Object.assign(io.getDefaults(), {
                        normalize: !0,
                        onload: Ei
                    });
                }
                load(t1) {
                    return ni(this, void 0, void 0, function*() {
                        this.buffer = yield this._buffer.load(t1);
                    });
                }
                get buffer() {
                    return this._buffer.length ? this._buffer : null;
                }
                set buffer(t1) {
                    t1 && this._buffer.set(t1), this._convolver.buffer && (this.input.disconnect(), this._convolver.disconnect(), this._convolver = this.context.createConvolver(), this.input.chain(this._convolver, this.output));
                    const e = this._buffer.get();
                    this._convolver.buffer = e || null;
                }
                get normalize() {
                    return this._convolver.normalize;
                }
                set normalize(t1) {
                    this._convolver.normalize = t1;
                }
                dispose() {
                    return super.dispose(), this._buffer.dispose(), this._convolver.disconnect(), this;
                }
            }
            function _c() {
                return Vi().now();
            }
            function mc() {
                return Vi().immediate();
            }
            const gc = Vi().transport;
            function vc() {
                return Vi().transport;
            }
            const yc = Vi().destination, xc = Vi().destination;
            function wc() {
                return Vi().destination;
            }
            const bc = Vi().listener;
            function Tc() {
                return Vi().listener;
            }
            const Sc = Vi().draw;
            function kc() {
                return Vi().draw;
            }
            const Ac = Vi();
            function Cc() {
                return Ri.loaded();
            }
            const Dc = Ri, Oc = wo, Mc = jo;
        })(), n;
    })());

},{}],"Vno75":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("test.93a83962.xml") + "?" + Date.now();

},{}]},["7SvX3","kyksZ"], "kyksZ", "parcelRequirec30f", {}, "./", "/")

//# sourceMappingURL=midi-playalong.d29bb997.js.map

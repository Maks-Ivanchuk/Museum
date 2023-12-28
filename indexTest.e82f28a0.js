// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
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
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

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

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2VSSk":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "207a8fdfe82f28a0";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
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
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
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
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"dV6cC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _galery1Jpg = require("../img/content/gallery/galery1.jpg");
var _galery1JpgDefault = parcelHelpers.interopDefault(_galery1Jpg);
var _galery2Jpg = require("../img/content/gallery/galery2.jpg");
var _galery2JpgDefault = parcelHelpers.interopDefault(_galery2Jpg);
var _galery3Jpg = require("../img/content/gallery/galery3.jpg");
var _galery3JpgDefault = parcelHelpers.interopDefault(_galery3Jpg);
var _galery4Jpg = require("../img/content/gallery/galery4.jpg");
var _galery4JpgDefault = parcelHelpers.interopDefault(_galery4Jpg);
var _galery5Jpg = require("../img/content/gallery/galery5.jpg");
var _galery5JpgDefault = parcelHelpers.interopDefault(_galery5Jpg);
var _galery6Jpg = require("../img/content/gallery/galery6.jpg");
var _galery6JpgDefault = parcelHelpers.interopDefault(_galery6Jpg);
var _galery7Jpg = require("../img/content/gallery/galery7.jpg");
var _galery7JpgDefault = parcelHelpers.interopDefault(_galery7Jpg);
var _galery8Jpg = require("../img/content/gallery/galery8.jpg");
var _galery8JpgDefault = parcelHelpers.interopDefault(_galery8Jpg);
var _galery9Jpg = require("../img/content/gallery/galery9.jpg");
var _galery9JpgDefault = parcelHelpers.interopDefault(_galery9Jpg);
var _galery10Jpg = require("../img/content/gallery/galery10.jpg");
var _galery10JpgDefault = parcelHelpers.interopDefault(_galery10Jpg);
var _galery11Jpg = require("../img/content/gallery/galery11.jpg");
var _galery11JpgDefault = parcelHelpers.interopDefault(_galery11Jpg);
var _galery12Jpg = require("../img/content/gallery/galery12.jpg");
var _galery12JpgDefault = parcelHelpers.interopDefault(_galery12Jpg);
var _galery13Jpg = require("../img/content/gallery/galery13.jpg");
var _galery13JpgDefault = parcelHelpers.interopDefault(_galery13Jpg);
var _galery14Jpg = require("../img/content/gallery/galery14.jpg");
var _galery14JpgDefault = parcelHelpers.interopDefault(_galery14Jpg);
var _galery15Jpg = require("../img/content/gallery/galery15.jpg");
var _galery15JpgDefault = parcelHelpers.interopDefault(_galery15Jpg);
document.addEventListener("DOMContentLoaded", ()=>{
    const burgerMenuBtn = document.querySelector(".header__bg-menu");
    const headerNav = document.querySelector(".header__nav");
    const headerWrapper = document.querySelector(".header__wrapper");
    const body = document.querySelector("body");
    const overlay = document.querySelector("#overlay");
    const btnSubmit = document.querySelector(".purchase-info__btn");
    const maxWidth = 1024;
    const navLinks = document.querySelectorAll(".header__nav-link");
    function openCloseModalWindow() {
        const modalWindowBtns = document.querySelectorAll(".modal-window-btn");
        const modalWindow = document.querySelector(".modal-window");
        const closeModalWindow = document.querySelector(".modal-window__btn-close");
        const modalWindowIframe = document.querySelector(".modal-window__iframe");
        modalWindowBtns.forEach((modalWindowBtn)=>{
            modalWindowBtn.addEventListener("click", (event)=>{
                event.preventDefault();
                const targetSrc = modalWindowBtn.getAttribute("href");
                modalWindowIframe.innerHTML = `
                  <iframe
                  src=${targetSrc}
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade">
                     Sorry, your browser does not support this content.
                  </iframe>
               `;
                modalWindow.classList.add("modal-window--open");
                overlayOpenClose("open");
                bodyBlockUnBlock("block");
            });
        });
        closeModalWindow.addEventListener("click", function() {
            if (modalWindow.classList.contains("modal-window--open")) {
                modalWindow.classList.remove("modal-window--open");
                modalWindowIframe.innerHTML = "";
                overlayOpenClose("close");
                bodyBlockUnBlock("unblock");
            } else return;
        });
    }
    function сloseBurgerMenuMaxWidth() {
        let curentWindowsWidth = document.documentElement.clientWidth;
        if (curentWindowsWidth > maxWidth) {
            if (headerNav.classList.contains("header__nav--open")) {
                headerNav.classList.remove("header__nav--open");
                burgerMenuBtn.classList.remove("header__bg-menu--open");
                bodyBlockUnBlock("unblock");
                overlayOpenClose("close");
            }
        }
    }
    function openCloseBurgerMenuBtn() {
        const modalWindow = document.querySelector(".modal-window");
        if (modalWindow.classList.contains("modal-window--open")) return;
        if (!headerNav.classList.contains("header__nav--open")) {
            headerNav.classList.add("header__nav--open");
            burgerMenuBtn.classList.add("header__bg-menu--open");
            bodyBlockUnBlock("block");
            overlayOpenClose("open");
        } else if (headerNav.classList.contains("header__nav--open")) {
            headerNav.classList.remove("header__nav--open");
            burgerMenuBtn.classList.remove("header__bg-menu--open");
            bodyBlockUnBlock("unblock");
            overlayOpenClose("close");
        }
    }
    function clickOverlay() {
        const modalWindow = document.querySelector(".modal-window");
        if (modalWindow.classList.contains("modal-window--open")) return;
        if (overlay.classList.contains("overlay--open")) {
            overlayOpenClose("close");
            if (headerNav.classList.contains("header__nav--open")) headerNav.classList.remove("header__nav--open");
            if (burgerMenuBtn.classList.contains("header__bg-menu--open")) burgerMenuBtn.classList.remove("header__bg-menu--open");
            if (body.classList.contains("body--block")) bodyBlockUnBlock("unblock");
        } else return;
    }
    function clickNavItemScrollToSection() {
        const modalWindow = document.querySelector(".modal-window");
        const modalWindowIframe = document.querySelector(".modal-window__iframe");
        let heightHeader = "";
        let anchorTagretOffsetTop = "";
        let anchorTagretScroll = "";
        navLinks.forEach((navLink)=>{
            navLink.addEventListener("click", (event)=>{
                event.preventDefault();
                if (modalWindow.classList.contains("modal-window--open")) {
                    modalWindow.classList.remove("modal-window--open");
                    modalWindowIframe.innerHTML = "";
                    overlayOpenClose("close");
                    bodyBlockUnBlock("unblock");
                }
                heightHeader = headerWrapper.offsetHeight;
                anchorTagretOffsetTop = document.querySelector(event.target.getAttribute("href")).offsetTop;
                anchorTagretScroll = anchorTagretOffsetTop - heightHeader;
                window.scrollTo({
                    top: anchorTagretScroll,
                    behavior: "smooth"
                });
                window.addEventListener("resize", function() {
                    heightHeader = headerWrapper.offsetHeight;
                    anchorTagretOffsetTop = document.querySelector(event.target.getAttribute("href")).offsetTop;
                    anchorTagretScroll = anchorTagretOffsetTop - heightHeader;
                    window.scrollTo({
                        top: anchorTagretScroll,
                        behavior: "instant"
                    });
                });
                if (!headerNav.classList.contains("header__nav--open")) return;
                else if (headerNav.classList.contains("header__nav--open")) {
                    headerNav.classList.remove("header__nav--open");
                    burgerMenuBtn.classList.remove("header__bg-menu--open");
                    bodyBlockUnBlock("unblock");
                    overlayOpenClose("close");
                }
            });
        });
    }
    overlay.addEventListener("click", clickOverlay);
    burgerMenuBtn.addEventListener("click", openCloseBurgerMenuBtn);
    window.addEventListener("resize", сloseBurgerMenuMaxWidth);
    openCloseModalWindow();
    clickNavItemScrollToSection();
    //slider
    $(".slider__slick").slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
    });
    //slider video
    $(".video__slider").slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: ".video__slider-nav",
        infinite: true,
        speed: 300
    });
    $(".video__slider-nav").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".video__slider",
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        speed: 300,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    arrows: false
                }
            }
        ]
    });
    //galery
    function addRandomImgGalery() {
        function shuffleArray(array) {
            for(let i = array.length - 1; i > 0; i--){
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [
                    array[j],
                    array[i]
                ];
            }
        }
        let galeryImgAddress = [
            (0, _galery1JpgDefault.default),
            (0, _galery2JpgDefault.default),
            (0, _galery3JpgDefault.default),
            (0, _galery4JpgDefault.default),
            (0, _galery5JpgDefault.default),
            (0, _galery6JpgDefault.default),
            (0, _galery7JpgDefault.default),
            (0, _galery8JpgDefault.default),
            (0, _galery9JpgDefault.default),
            (0, _galery10JpgDefault.default),
            (0, _galery11JpgDefault.default),
            (0, _galery12JpgDefault.default),
            (0, _galery13JpgDefault.default),
            (0, _galery14JpgDefault.default),
            (0, _galery15JpgDefault.default)
        ];
        shuffleArray(galeryImgAddress);
        const galleryInnerContent = document.querySelector(".gallery__inner-content");
        for(let i = 0; i < galeryImgAddress.length; i++){
            const img = document.createElement("img");
            img.classList.add("gallery__img");
            img.src = galeryImgAddress[i];
            img.alt = `galery${i + 1}`;
            galleryInnerContent.append(img);
        }
    }
    addRandomImgGalery();
    //buy ticket
    function quantityTickets() {
        const amountFormButtons = document.querySelectorAll("button[data-quantity-ticket]");
        const priseBasicTickets = document.querySelectorAll(".price-basic");
        const priseSeniorTickets = document.querySelectorAll(".price-senior");
        const costBasicTicket = 17;
        const costSeniorTicket = 10;
        let currentNumTicketsBasic = 0;
        let currentNumTicketsSenior = 0;
        priseBasicTickets.forEach((priseBasicTicket)=>{
            priseBasicTicket.innerHTML = `${costBasicTicket} €`;
        });
        priseSeniorTickets.forEach((priseSeniorTicket)=>{
            priseSeniorTicket.innerHTML = `${costSeniorTicket} €`;
        });
        amountFormButtons.forEach((amountFormButton)=>{
            amountFormButton.addEventListener("click", (event)=>{
                const target = event.target;
                const typeBtn = target.dataset.quantityTicket;
                const currentTicketsInput = target.closest(".form-btn-wrapper").querySelector("input");
                if (currentTicketsInput.id === "amount-basic" || currentTicketsInput.id === "entry-ticket-basic") {
                    if (typeBtn === "minus" && currentNumTicketsBasic !== 0) currentNumTicketsBasic -= 1;
                    else if (typeBtn === "plus") currentNumTicketsBasic += 1;
                    else return;
                    document.querySelector("#amount-basic").value = currentNumTicketsBasic;
                    document.querySelector("#entry-ticket-basic").value = currentNumTicketsBasic;
                    document.querySelector("#number-tickets-basic").innerHTML = currentNumTicketsBasic;
                // currentTicketsInput.value = currentNumTicketsBasic;
                } else if (currentTicketsInput.id === "amount-senior" || currentTicketsInput.id === "entry-ticket-senior") {
                    if (typeBtn === "minus" && currentNumTicketsSenior !== 0) currentNumTicketsSenior -= 1;
                    else if (typeBtn === "plus") currentNumTicketsSenior += 1;
                    else return;
                    document.querySelector("#amount-senior").value = currentNumTicketsSenior;
                    document.querySelector("#entry-ticket-senior").value = currentNumTicketsSenior;
                    document.querySelector("#number-tickets-senior").innerHTML = currentNumTicketsSenior;
                // currentTicketsInput.value = currentNumTicketsSenior;
                } else return;
                totalCostTicket();
            });
        });
        function totalCostTicket() {
            const totalAmountTickets = document.querySelector(".total");
            const totalSumBuyModal = document.querySelector(".total-sum__total");
            const totalСostBasic = document.querySelector(".total-basic-cost");
            const totalСostSenoir = document.querySelector(".total-senior-cost");
            let totalBasic = currentNumTicketsBasic * costBasicTicket;
            let totalSenior = currentNumTicketsSenior * costSeniorTicket;
            let total = currentNumTicketsBasic * costBasicTicket + currentNumTicketsSenior * costSeniorTicket;
            totalСostBasic.innerHTML = `${totalBasic} €`;
            totalСostSenoir.innerHTML = `${totalSenior} €`;
            totalAmountTickets.innerHTML = total;
            totalSumBuyModal.innerHTML = `${total} €`;
        }
        function modalWbuyTicket() {
            const buyTicketNowBtn = document.querySelector(".tickets__amount-btn");
            const modalWBuyTicket = document.querySelector(".tickets-m-w");
            const closeBtnModalWBuyTicket = document.querySelector(".tickets-m-w__btn-close");
            buyTicketNowBtn.addEventListener("click", function(event) {
                event.preventDefault();
                if (modalWBuyTicket.closest(".tickets-m-w--open")) return;
                else if (modalWBuyTicket.closest(".tickets-m-w")) {
                    modalWBuyTicket.classList.add("tickets-m-w--open");
                    bodyBlockUnBlock("block");
                }
            });
            closeBtnModalWBuyTicket.addEventListener("click", function() {
                if (!modalWBuyTicket.closest(".tickets-m-w--open")) return;
                else if (modalWBuyTicket.closest(".tickets-m-w")) {
                    modalWBuyTicket.classList.remove("tickets-m-w--open");
                    bodyBlockUnBlock("unblock");
                }
            });
        }
        function selectTicketsInfo() {
            const selectDate = document.querySelector(".user-info__date");
            const finalDate = document.querySelector(".purchase-info__date");
            const selectTime = document.querySelector(".user-info__time");
            const finalTime = document.querySelector(".purchase-info__time");
            const selectorType = document.querySelector(".user-info__ticket-type");
            const purchaseselectorType = document.querySelector(".purchase-info__type");
            const inputTypeTickets = document.querySelectorAll(".tickets__type-input");
            selectDate.addEventListener("change", ()=>{
                finalDate.value = selectDate.value;
            });
            selectTime.addEventListener("change", ()=>{
                finalTime.value = selectTime.value;
            });
            inputTypeTickets.forEach((inputTypeTicket)=>{
                inputTypeTicket.addEventListener("change", ()=>{
                    selectorType.value = inputTypeTicket.value;
                    purchaseselectorType.value = inputTypeTicket.value;
                });
            });
            selectorType.addEventListener("change", ()=>{
                purchaseselectorType.value = selectorType.value;
                inputTypeTickets.forEach((inputTypeTicket)=>{
                    if (selectorType.value === inputTypeTicket.value) inputTypeTicket.checked = true;
                });
            });
        }
        modalWbuyTicket();
        selectTicketsInfo();
    }
    function bodyBlockUnBlock(action) {
        if (action === "block") {
            if (!body.classList.contains("body--block")) body.classList.add("body--block");
        } else if (action === "unblock") {
            if (body.classList.contains("body--block")) body.classList.remove("body--block");
        } else console.error('Invalid action. Use in function bodyBlockUnBlock "open" or "close".');
    }
    function overlayOpenClose(action) {
        if (action === "open") {
            if (!overlay.classList.contains("overlay--open")) overlay.classList.add("overlay--open");
        } else if (action === "close") {
            if (overlay.classList.contains("overlay--open")) overlay.classList.remove("overlay--open");
        } else console.error('Invalid action. Use in function overlayOpenClose "open" or "close".');
    }
    let orderId = 0;
    let dataTickets = {};
    function submitFormBuyTickets(event) {
        const userInfoForm = document.querySelector(".user-info__form");
        const purchaseInfoForm = document.querySelector(".purchase-info__card-form");
        event.preventDefault();
        const date = userInfoForm.elements["tickets-date"].value;
        const time = userInfoForm.elements["tickets-time"].value;
        const userName = userInfoForm.elements["user-name"].value;
        const email = userInfoForm.elements["user-email"].value;
        const phone = userInfoForm.elements["user-phone"].value;
        const ticketType = userInfoForm.elements["ticket-type"].value;
        const numberTiketsBasic = document.querySelector("#entry-ticket-basic").value;
        const numberTiketsSenior = document.querySelector("#entry-ticket-senior").value;
        const totalSumOrder = document.querySelector(".total-sum__total").textContent.slice(0, -2);
        const cardNum = purchaseInfoForm.elements["card-num"].value;
        const cardMonth = purchaseInfoForm.elements["card-month"].value;
        const cardYear = purchaseInfoForm.elements["card-year"].value;
        const cardHolderName = purchaseInfoForm.elements["cardholder-name"].value;
        const cardCvv = purchaseInfoForm.elements["card-cvv"].value;
        orderId += 1;
        let orderName = `order#${orderId}`;
        dataTickets[orderName] = {
            date: date,
            time: time,
            name: userName,
            email: email,
            phone: phone,
            typeExhibition: ticketType,
            numberTiketsBasic: numberTiketsBasic,
            numberTiketsSenior: numberTiketsSenior,
            totalSumOrder: totalSumOrder,
            cardNum: cardNum,
            cardMonth: cardMonth,
            cardYear: cardYear,
            cardHolderName: cardHolderName,
            cardCvv: cardCvv
        };
        console.log(dataTickets);
    }
    quantityTickets();
    console.log(btnSubmit);
    btnSubmit.addEventListener("click", submitFormBuyTickets);
/////////you tube//////////
///////////////////////////
});

},{"../img/content/gallery/galery1.jpg":"iYa8R","../img/content/gallery/galery2.jpg":"feCBs","../img/content/gallery/galery3.jpg":"fFPb5","../img/content/gallery/galery4.jpg":"4VcsT","../img/content/gallery/galery5.jpg":"bW7yj","../img/content/gallery/galery6.jpg":"30gp8","../img/content/gallery/galery7.jpg":"fKFR4","../img/content/gallery/galery8.jpg":"g0vvZ","../img/content/gallery/galery9.jpg":"czEqw","../img/content/gallery/galery10.jpg":"jKH2W","../img/content/gallery/galery11.jpg":"8wodO","../img/content/gallery/galery12.jpg":"aNrol","../img/content/gallery/galery13.jpg":"alQuo","../img/content/gallery/galery14.jpg":"fEJzX","../img/content/gallery/galery15.jpg":"dg7GJ","@parcel/transformer-js/src/esmodule-helpers.js":"3ObZ9"}],"iYa8R":[function(require,module,exports) {
module.exports = require("36494fe8da3829e2").getBundleURL("2MSMO") + "galery1.29993cf9.jpg" + "?" + Date.now();

},{"36494fe8da3829e2":"jSTtO"}],"jSTtO":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"feCBs":[function(require,module,exports) {
module.exports = require("36a7b94f1646c6e3").getBundleURL("2MSMO") + "galery2.161e1823.jpg" + "?" + Date.now();

},{"36a7b94f1646c6e3":"jSTtO"}],"fFPb5":[function(require,module,exports) {
module.exports = require("67371f4d3a2fafed").getBundleURL("2MSMO") + "galery3.f7ff1c12.jpg" + "?" + Date.now();

},{"67371f4d3a2fafed":"jSTtO"}],"4VcsT":[function(require,module,exports) {
module.exports = require("8c83c4c3659de836").getBundleURL("2MSMO") + "galery4.4d9ab229.jpg" + "?" + Date.now();

},{"8c83c4c3659de836":"jSTtO"}],"bW7yj":[function(require,module,exports) {
module.exports = require("a52385e34313ead3").getBundleURL("2MSMO") + "galery5.920f0e9f.jpg" + "?" + Date.now();

},{"a52385e34313ead3":"jSTtO"}],"30gp8":[function(require,module,exports) {
module.exports = require("a5e58f530a8ec35e").getBundleURL("2MSMO") + "galery6.02550361.jpg" + "?" + Date.now();

},{"a5e58f530a8ec35e":"jSTtO"}],"fKFR4":[function(require,module,exports) {
module.exports = require("93d6aa8582e67e86").getBundleURL("2MSMO") + "galery7.814cb341.jpg" + "?" + Date.now();

},{"93d6aa8582e67e86":"jSTtO"}],"g0vvZ":[function(require,module,exports) {
module.exports = require("ae1960449061f027").getBundleURL("2MSMO") + "galery8.dfbc4d5e.jpg" + "?" + Date.now();

},{"ae1960449061f027":"jSTtO"}],"czEqw":[function(require,module,exports) {
module.exports = require("bf6fd1b6a3246930").getBundleURL("2MSMO") + "galery9.044f9ce3.jpg" + "?" + Date.now();

},{"bf6fd1b6a3246930":"jSTtO"}],"jKH2W":[function(require,module,exports) {
module.exports = require("66dde9b12eab68dd").getBundleURL("2MSMO") + "galery10.c29aca77.jpg" + "?" + Date.now();

},{"66dde9b12eab68dd":"jSTtO"}],"8wodO":[function(require,module,exports) {
module.exports = require("1c07517db45182c").getBundleURL("2MSMO") + "galery11.38dda2bc.jpg" + "?" + Date.now();

},{"1c07517db45182c":"jSTtO"}],"aNrol":[function(require,module,exports) {
module.exports = require("35ba2187ad3d847b").getBundleURL("2MSMO") + "galery12.761f82d1.jpg" + "?" + Date.now();

},{"35ba2187ad3d847b":"jSTtO"}],"alQuo":[function(require,module,exports) {
module.exports = require("840a88492daddf6c").getBundleURL("2MSMO") + "galery13.dbd1ef1b.jpg" + "?" + Date.now();

},{"840a88492daddf6c":"jSTtO"}],"fEJzX":[function(require,module,exports) {
module.exports = require("e82ab6b79be85572").getBundleURL("2MSMO") + "galery14.02f1da15.jpg" + "?" + Date.now();

},{"e82ab6b79be85572":"jSTtO"}],"dg7GJ":[function(require,module,exports) {
module.exports = require("6a43122563365350").getBundleURL("2MSMO") + "galery15.39d872d3.jpg" + "?" + Date.now();

},{"6a43122563365350":"jSTtO"}],"3ObZ9":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["2VSSk","dV6cC"], "dV6cC", "parcelRequire6ae1")

//# sourceMappingURL=indexTest.e82f28a0.js.map

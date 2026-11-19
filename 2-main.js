(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e3) {
      throw err = [e3], e3;
    }
  };
  var __commonJS = (cb2, mod) => function __require() {
    try {
      return mod || (0, cb2[__getOwnPropNames(cb2)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e3) {
      throw mod = 0, e3;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to2, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to2, key) && key !== except)
          __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to2;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // ../../skills/platform/files/render/page-kit/kit.js
  var kit_exports = {};
  __export(kit_exports, {
    Files: () => G5,
    React: () => EM,
    ReactDom: () => SM,
    ReactDomClient: () => CM,
    ReactJsxRuntime: () => RM,
    ReactRouterDom: () => U4
  });
  function Ky(e3, t) {
    return t + e3.replace(/\\/g, "/");
  }
  function ju(e3) {
    return typeof e3 == "object" && e3 != null && "pathname" in e3 && "search" in e3 && "hash" in e3 && "state" in e3 && "key" in e3;
  }
  function Wu(e3 = {}) {
    let { initialEntries: t = ["/"], initialIndex: r, v5Compat: n = false } = e3, a;
    a = t.map((p, v) => c(p, typeof p == "string" ? null : p.state, v === 0 ? "default" : void 0, typeof p == "string" ? void 0 : p.mask));
    let i = s(r ?? a.length - 1), o = "POP", l = null;
    function s(p) {
      return Math.min(Math.max(p, 0), a.length - 1);
    }
    function u() {
      return a[i];
    }
    function c(p, v = null, y, g) {
      let m = vn(a ? u().pathname : "/", p, v, y, g);
      return ke(m.pathname.charAt(0) === "/", `relative pathnames are not supported in memory history: ${JSON.stringify(p)}`), m;
    }
    function d(p) {
      return typeof p == "string" ? p : je(p);
    }
    return { get index() {
      return i;
    }, get action() {
      return o;
    }, get location() {
      return u();
    }, createHref: d, createURL(p) {
      return new URL(d(p), "http://localhost");
    }, encodeLocation(p) {
      let v = typeof p == "string" ? St(p) : p;
      return { pathname: v.pathname || "", search: v.search || "", hash: v.hash || "" };
    }, push(p, v) {
      o = "PUSH";
      let y = ju(p) ? p : c(p, v);
      i += 1, a.splice(i, a.length, y), n && l && l({ action: o, location: y, delta: 1 });
    }, replace(p, v) {
      o = "REPLACE";
      let y = ju(p) ? p : c(p, v);
      a[i] = y, n && l && l({ action: o, location: y, delta: 0 });
    }, go(p) {
      o = "POP";
      let v = s(i + p), y = a[v];
      i = v, l && l({ action: o, location: y, delta: p });
    }, listen(p) {
      return l = p, () => {
        l = null;
      };
    } };
  }
  function Gi(e3 = {}) {
    function t(n, a) {
      let i = a.state?.masked, { pathname: o, search: l, hash: s } = i || n.location;
      return vn("", { pathname: o, search: l, hash: s }, a.state && a.state.usr || null, a.state && a.state.key || "default", i ? { pathname: n.location.pathname, search: n.location.search, hash: n.location.hash } : void 0);
    }
    function r(n, a) {
      return typeof a == "string" ? a : je(a);
    }
    return Xy(t, r, null, e3);
  }
  function Yu(e3 = {}) {
    function t(a, i) {
      let { pathname: o = "/", search: l = "", hash: s = "" } = St(a.location.hash.substring(1));
      return !o.startsWith("/") && !o.startsWith(".") && (o = "/" + o), vn("", { pathname: o, search: l, hash: s }, i.state && i.state.usr || null, i.state && i.state.key || "default");
    }
    function r(a, i) {
      let o = a.document.querySelector("base"), l = "";
      if (o && o.getAttribute("href")) {
        let s = a.location.href, u = s.indexOf("#");
        l = u === -1 ? s : s.slice(0, u);
      }
      return l + "#" + (typeof i == "string" ? i : je(i));
    }
    function n(a, i) {
      ke(a.pathname.charAt(0) === "/", `relative pathnames are not supported in hash history.push(${JSON.stringify(i)})`);
    }
    return Xy(t, r, n, e3);
  }
  function q(e3, t) {
    if (e3 === false || e3 === null || typeof e3 > "u") throw new Error(t);
  }
  function ke(e3, t) {
    if (!e3) {
      typeof console < "u" && console.warn(t);
      try {
        throw new Error(t);
      } catch {
      }
    }
  }
  function Bk() {
    return Math.random().toString(36).substring(2, 10);
  }
  function py(e3, t) {
    return { usr: e3.state, key: e3.key, idx: t, masked: e3.mask ? { pathname: e3.pathname, search: e3.search, hash: e3.hash } : void 0 };
  }
  function vn(e3, t, r = null, n, a) {
    return { pathname: typeof e3 == "string" ? e3 : e3.pathname, search: "", hash: "", ...typeof t == "string" ? St(t) : t, state: r, key: t && t.key || n || Bk(), mask: a };
  }
  function je({ pathname: e3 = "/", search: t = "", hash: r = "" }) {
    return t && t !== "?" && (e3 += t.charAt(0) === "?" ? t : "?" + t), r && r !== "#" && (e3 += r.charAt(0) === "#" ? r : "#" + r), e3;
  }
  function St(e3) {
    let t = {};
    if (e3) {
      let r = e3.indexOf("#");
      r >= 0 && (t.hash = e3.substring(r), e3 = e3.substring(0, r));
      let n = e3.indexOf("?");
      n >= 0 && (t.search = e3.substring(n), e3 = e3.substring(0, n)), e3 && (t.pathname = e3);
    }
    return t;
  }
  function Xy(e3, t, r, n = {}) {
    let { window: a = document.defaultView, v5Compat: i = false } = n, o = a.history, l = "POP", s = null, u = c();
    u == null && (u = 0, o.replaceState({ ...o.state, idx: u }, ""));
    function c() {
      return (o.state || { idx: null }).idx;
    }
    function d() {
      l = "POP";
      let g = c(), m = g == null ? null : g - u;
      u = g, s && s({ action: l, location: y.location, delta: m });
    }
    function f(g, m) {
      l = "PUSH";
      let h = ju(g) ? g : vn(y.location, g, m);
      r && r(h, g), u = c() + 1;
      let w = py(h, u), b = y.createHref(h.mask || h);
      try {
        o.pushState(w, "", b);
      } catch (E) {
        if (E instanceof DOMException && E.name === "DataCloneError") throw E;
        a.location.assign(b);
      }
      i && s && s({ action: l, location: y.location, delta: 1 });
    }
    function p(g, m) {
      l = "REPLACE";
      let h = ju(g) ? g : vn(y.location, g, m);
      r && r(h, g), u = c();
      let w = py(h, u), b = y.createHref(h.mask || h);
      o.replaceState(w, "", b), i && s && s({ action: l, location: y.location, delta: 0 });
    }
    function v(g) {
      return Qy(a, g);
    }
    let y = { get action() {
      return l;
    }, get location() {
      return e3(a, o);
    }, listen(g) {
      if (s) throw new Error("A history only accepts one active listener");
      return a.addEventListener(hy, d), s = g, () => {
        a.removeEventListener(hy, d), s = null;
      };
    }, createHref(g) {
      return t(a, g);
    }, createURL: v, encodeLocation(g) {
      let m = v(g);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    }, push: f, replace: p, go(g) {
      return o.go(g);
    } };
    return y;
  }
  function Qy(e3, t, r = false) {
    let n = "http://localhost";
    e3 && (n = e3.location.origin !== "null" ? e3.location.origin : e3.location.href), q(n, "No window.location.(origin|href) available to create URL");
    let a = typeof t == "string" ? t : je(t);
    return a = a.replace(/ $/, "%20"), !r && xl.test(a) && (a = n + a), new URL(a, n);
  }
  function qu(e3) {
    return { defaultValue: e3 };
  }
  function Wk(e3) {
    return Vk.has(e3);
  }
  function qk(e3) {
    return Yk.has(e3);
  }
  function Gk(e3) {
    return e3.index === true;
  }
  function yn(e3, t, r = [], n = {}, a = false) {
    return e3.map((i, o) => {
      let l = [...r, String(o)], s = typeof i.id == "string" ? i.id : l.join("-");
      if (q(i.index !== true || !i.children, "Cannot specify children on an index route"), q(a || !n[s], `Found a route id collision on id "${s}".  Route id's must be globally unique within Data Router usages`), Gk(i)) {
        let u = { ...i, id: s };
        return n[s] = my(u, t(u)), u;
      } else {
        let u = { ...i, id: s, children: void 0 };
        return n[s] = my(u, t(u)), i.children && (u.children = yn(i.children, t, l, n, a)), u;
      }
    });
  }
  function my(e3, t) {
    return Object.assign(e3, { ...t, ...typeof t.lazy == "object" && t.lazy != null ? { lazy: { ...e3.lazy, ...t.lazy } } : {} });
  }
  function Ki(e3, t, r = "/") {
    return Et(e3, t, r, false);
  }
  function Et(e3, t, r, n, a) {
    let i = typeof t == "string" ? St(t) : t, o = Xe(i.pathname || "/", r);
    if (o == null) return null;
    let l = a ?? pl(e3), s = null, u = nw(o);
    for (let c = 0; s == null && c < l.length; ++c) s = aE(l[c], u, n);
    return s;
  }
  function Zy(e3, t) {
    let { route: r, pathname: n, params: a } = e3;
    return { id: r.id, pathname: n, params: a, data: t[r.id], loaderData: t[r.id], handle: r.handle };
  }
  function pl(e3) {
    let t = Jy(e3);
    return Kk(t), t;
  }
  function Jy(e3, t = [], r = [], n = "", a = false) {
    let i = (o, l, s = a, u) => {
      let c = { relativePath: u === void 0 ? o.path || "" : u, caseSensitive: o.caseSensitive === true, childrenIndex: l, route: o };
      if (c.relativePath.startsWith("/")) {
        if (!c.relativePath.startsWith(n) && s) return;
        q(c.relativePath.startsWith(n), `Absolute route path "${c.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), c.relativePath = c.relativePath.slice(n.length);
      }
      let d = er([n, c.relativePath]), f = r.concat(c);
      o.children && o.children.length > 0 && (q(o.index !== true, `Index routes must not have child routes. Please remove all child routes from route path "${d}".`), Jy(o.children, t, f, d, s)), !(o.path == null && !o.index) && t.push({ path: d, score: rE(d, o.index), routesMeta: f.map((p, v) => {
        let [y, g] = ip(p.relativePath, p.caseSensitive, v === f.length - 1);
        return { ...p, matcher: y, compiledParams: g };
      }) });
    };
    return e3.forEach((o, l) => {
      if (o.path === "" || !o.path?.includes("?")) i(o, l);
      else for (let s of ew(o.path)) i(o, l, true, s);
    }), t;
  }
  function ew(e3) {
    let t = e3.split("/");
    if (t.length === 0) return [];
    let [r, ...n] = t, a = r.endsWith("?"), i = r.replace(/\?$/, "");
    if (n.length === 0) return a ? [i, ""] : [i];
    let o = ew(n.join("/")), l = [];
    return l.push(...o.map((s) => s === "" ? i : [i, s].join("/"))), a && l.push(...o), l.map((s) => e3.startsWith("/") && s === "" ? "/" : s);
  }
  function Kk(e3) {
    e3.sort((t, r) => t.score !== r.score ? r.score - t.score : nE(t.routesMeta.map((n) => n.childrenIndex), r.routesMeta.map((n) => n.childrenIndex)));
  }
  function rE(e3, t) {
    let r = e3.split("/"), n = r.length;
    return r.some(gy) && (n += tE), t && (n += Zk), r.filter((a) => !gy(a)).reduce((a, i) => a + (Xk.test(i) ? Qk : i === "" ? Jk : eE), n);
  }
  function nE(e3, t) {
    return e3.length === t.length && e3.slice(0, -1).every((n, a) => n === t[a]) ? e3[e3.length - 1] - t[t.length - 1] : 0;
  }
  function aE(e3, t, r = false) {
    let { routesMeta: n } = e3, a = {}, i = "/", o = [];
    for (let l = 0; l < n.length; ++l) {
      let s = n[l], u = l === n.length - 1, c = i === "/" ? t : t.slice(i.length) || "/", d = { path: s.relativePath, caseSensitive: s.caseSensitive, end: u }, f = s.matcher && s.compiledParams ? rw(d, c, s.matcher, s.compiledParams) : Oa(d, c), p = s.route;
      if (!f && u && r && !n[n.length - 1].route.index && (f = Oa({ path: s.relativePath, caseSensitive: s.caseSensitive, end: false }, c)), !f) return null;
      Object.assign(a, f.params), o.push({ params: a, pathname: er([i, f.pathname]), pathnameBase: oE(er([i, f.pathnameBase])), route: p }), f.pathnameBase !== "/" && (i = er([i, f.pathnameBase]));
    }
    return o;
  }
  function tw(e3, t = {}) {
    let r = e3;
    r.endsWith("*") && r !== "*" && !r.endsWith("/*") && (ke(false, `Route path "${r}" will be treated as if it were "${r.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/, "/*")}".`), r = r.replace(/\*$/, "/*"));
    let n = r.startsWith("/") ? "/" : "", a = (o) => o == null ? "" : typeof o == "string" ? o : String(o), i = r.split(/\/+/).map((o, l, s) => {
      if (l === s.length - 1 && o === "*") return a(t["*"]);
      let c = o.match(/^:([\w-]+)(\??)(.*)/);
      if (c) {
        let [, d, f, p] = c, v = t[d];
        return q(f === "?" || v != null, `Missing ":${d}" param`), encodeURIComponent(a(v)) + p;
      }
      return o.replace(/\?$/g, "");
    }).filter((o) => !!o);
    return n + i.join("/");
  }
  function Oa(e3, t) {
    typeof e3 == "string" && (e3 = { path: e3, caseSensitive: false, end: true });
    let [r, n] = ip(e3.path, e3.caseSensitive, e3.end);
    return rw(e3, t, r, n);
  }
  function rw(e3, t, r, n) {
    let a = t.match(r);
    if (!a) return null;
    let i = a[0], o = Bi(i, 1), l = a.slice(1);
    return { params: n.reduce((u, { paramName: c, isOptional: d }, f) => {
      if (c === "*") {
        let v = l[f] || "";
        o = Bi(i.slice(0, i.length - v.length), 1);
      }
      let p = l[f];
      return d && !p ? u[c] = void 0 : u[c] = (p || "").replace(/%2F/g, "/"), u;
    }, {}), pathname: i, pathnameBase: o, pattern: e3 };
  }
  function ip(e3, t = false, r = true) {
    ke(e3 === "*" || !e3.endsWith("*") || e3.endsWith("/*"), `Route path "${e3}" will be treated as if it were "${e3.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e3.replace(/\*$/, "/*")}".`);
    let n = [], a = "^" + e3.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, l, s, u, c) => {
      if (n.push({ paramName: l, isOptional: s != null }), s) {
        let d = c.charAt(u + o.length);
        return d && d !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return e3.endsWith("*") ? (n.push({ paramName: "*" }), a += e3 === "*" || e3 === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? a += "\\/*$" : e3 !== "" && e3 !== "/" && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), n];
  }
  function nw(e3) {
    try {
      return e3.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
    } catch (t) {
      return ke(false, `The URL path "${e3}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`), e3;
    }
  }
  function Xe(e3, t) {
    if (t === "/") return e3;
    if (!e3.toLowerCase().startsWith(t.toLowerCase())) return null;
    let r = t.endsWith("/") ? t.length - 1 : t.length, n = e3.charAt(r);
    return n && n !== "/" ? null : e3.slice(r) || "/";
  }
  function iE({ basename: e3, pathname: t }) {
    return t === "/" ? e3 : er([e3, t]);
  }
  function Gu(e3, t = "/") {
    let { pathname: r, search: n = "", hash: a = "" } = typeof e3 == "string" ? St(e3) : e3, i;
    return r ? (r = lp(r), r.startsWith("/") || r.startsWith("\\") ? i = vy(r.substring(1), "/") : i = vy(r, t)) : i = t, { pathname: i, search: lE(n), hash: sE(a) };
  }
  function vy(e3, t) {
    let r = Bi(t).split("/");
    return e3.split("/").forEach((a) => {
      a === ".." ? r.length > 1 && r.pop() : a !== "." && r.push(a);
    }), r.length > 1 ? r.join("/") : "/";
  }
  function zh(e3, t, r, n) {
    return `Cannot include a '${e3}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function aw(e3) {
    return e3.filter((t, r) => r === 0 || t.route.path && t.route.path.length > 0);
  }
  function Ku(e3) {
    let t = aw(e3);
    return t.map((r, n) => n === t.length - 1 ? r.pathname : r.pathnameBase);
  }
  function bl(e3, t, r, n = false) {
    let a;
    typeof e3 == "string" ? a = St(e3) : (a = { ...e3 }, q(!a.pathname || !a.pathname.includes("?"), zh("?", "pathname", "search", a)), q(!a.pathname || !a.pathname.includes("#"), zh("#", "pathname", "hash", a)), q(!a.search || !a.search.includes("#"), zh("#", "search", "hash", a)));
    let i = e3 === "" || a.pathname === "", o = i ? "/" : a.pathname, l;
    if (o == null) l = r;
    else {
      let d = t.length - 1;
      if (!n && o.startsWith("..")) {
        let f = o.split("/");
        for (; f[0] === ".."; ) f.shift(), d -= 1;
        a.pathname = f.join("/");
      }
      l = d >= 0 ? t[d] : "/";
    }
    let s = Gu(a, l), u = o && o !== "/" && o.endsWith("/"), c = (i || o === ".") && r.endsWith("/");
    return !s.pathname.endsWith("/") && (u || c) && (s.pathname += "/"), s;
  }
  function Bi(e3, t = 0) {
    let r = e3.length;
    for (; r > t && e3.charCodeAt(r - 1) === 47; ) r--;
    return r === e3.length ? e3 : e3.slice(0, r);
  }
  function sp(e3, t) {
    return new uE(e3, typeof t == "number" ? { status: t } : t);
  }
  function Ue(e3) {
    return e3 != null && typeof e3.status == "number" && typeof e3.statusText == "string" && typeof e3.internal == "boolean" && "data" in e3;
  }
  function mn(e3) {
    let t = e3.map((r) => r.route.path).filter(Boolean);
    return er(t) || "/";
  }
  function ow(e3, t) {
    let r = e3;
    if (typeof r != "string" || !wl.test(r)) return { absoluteURL: void 0, isExternal: false, to: r };
    let n = r, a = false;
    if (iw) try {
      let i = new URL(window.location.href), o = xl.test(r) ? new URL(Ky(r, i.protocol)) : new URL(r), l = Xe(o.pathname, t);
      o.origin === i.origin && l != null ? r = l + o.search + o.hash : a = true;
    } catch {
      ke(false, `<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
    }
    return { absoluteURL: n, isExternal: a, to: r };
  }
  function lw(e3, t) {
    let r = { lazy: [], "lazy.loader": [], "lazy.action": [], "lazy.middleware": [], middleware: [], loader: [], action: [] };
    e3.forEach((a) => a({ id: t.id, index: t.index, path: t.path, instrument(i) {
      let o = Object.keys(r);
      for (let l of o) i[l] && r[l].push(i[l]);
    } }));
    let n = {};
    if (typeof t.lazy == "function" && r.lazy.length > 0) {
      let a = $a(r.lazy, t.lazy, () => {
      });
      a && (n.lazy = a);
    }
    if (typeof t.lazy == "object") {
      let a = t.lazy;
      ["middleware", "loader", "action"].forEach((i) => {
        let o = a[i], l = r[`lazy.${i}`];
        if (typeof o == "function" && l.length > 0) {
          let s = $a(l, o, () => {
          });
          s && (n.lazy = Object.assign(n.lazy || {}, { [i]: s }));
        }
      });
    }
    return ["loader", "action"].forEach((a) => {
      let i = t[a];
      if (typeof i == "function" && r[a].length > 0) {
        let o = i[ea] ?? i, l = $a(r[a], o, (...s) => yy(s[0]));
        l && (a === "loader" && o.hydrate === true && (l.hydrate = true), l[ea] = o, n[a] = l);
      }
    }), t.middleware && t.middleware.length > 0 && r.middleware.length > 0 && (n.middleware = t.middleware.map((a) => {
      let i = a[ea] ?? a, o = $a(r.middleware, i, (...l) => yy(l[0]));
      return o ? (o[ea] = i, o) : a;
    })), n;
  }
  function cE(e3, t) {
    let r = { navigate: [], fetch: [] };
    if (t.forEach((n) => n({ instrument(a) {
      let i = Object.keys(a);
      for (let o of i) a[o] && r[o].push(a[o]);
    } })), r.navigate.length > 0) {
      let n = e3.navigate[ea] ?? e3.navigate, a = $a(r.navigate, n, (...i) => {
        let [o, l] = i;
        return { to: typeof o == "number" || typeof o == "string" ? o : o ? je(o) : ".", ...wy(e3, l ?? {}) };
      });
      a && (a[ea] = n, e3.navigate = a);
    }
    if (r.fetch.length > 0) {
      let n = e3.fetch[ea] ?? e3.fetch, a = $a(r.fetch, n, (...i) => {
        let [o, , l, s] = i;
        return { href: l ?? ".", fetcherKey: o, ...wy(e3, s ?? {}) };
      });
      a && (a[ea] = n, e3.fetch = a);
    }
    return e3;
  }
  function sw(e3, t) {
    let r = { request: [] };
    t.forEach((a) => a({ instrument(i) {
      let o = Object.keys(i);
      for (let l of o) i[l] && r[l].push(i[l]);
    } }));
    let n = e3;
    return r.request.length > 0 && (n = $a(r.request, e3, (...a) => {
      let [i, o] = a;
      return { request: cw(i), context: o != null ? dw(o) : o };
    })), n;
  }
  function $a(e3, t, r) {
    return e3.length === 0 ? null : async (...n) => {
      let a = await uw(e3, r(...n), () => t(...n), e3.length - 1);
      if (a.type === "error") throw a.value;
      return a.value;
    };
  }
  async function uw(e3, t, r, n) {
    let a = e3[n], i;
    if (a) {
      let o, l = async () => (o ? console.error("You cannot call instrumented handlers more than once") : o = uw(e3, t, r, n - 1), i = await o, q(i, "Expected a result"), i.type === "error" && i.value instanceof Error ? { status: "error", error: i.value } : { status: "success", error: void 0 });
      try {
        await a(l, t);
      } catch (s) {
        console.error("An instrumentation function threw an error:", s);
      }
      o || await l(), await o;
    } else try {
      i = { type: "success", value: await r() };
    } catch (o) {
      i = { type: "error", value: o };
    }
    return i || { type: "error", value: new Error("No result assigned in instrumentation chain.") };
  }
  function yy(e3) {
    let { request: t, context: r, params: n, pattern: a } = e3;
    return { request: cw(t), params: { ...n }, pattern: a, context: dw(r) };
  }
  function wy(e3, t) {
    return { currentUrl: je(e3.state.location), ..."formMethod" in t ? { formMethod: t.formMethod } : {}, ..."formEncType" in t ? { formEncType: t.formEncType } : {}, ..."formData" in t ? { formData: t.formData } : {}, ..."body" in t ? { body: t.body } : {} };
  }
  function cw(e3) {
    return { method: e3.method, url: e3.url, headers: { get: (...t) => e3.headers.get(...t) } };
  }
  function dw(e3) {
    if (fE(e3)) {
      let t = { ...e3 };
      return Object.freeze(t), t;
    } else return { get: (t) => e3.get(t) };
  }
  function fE(e3) {
    if (e3 === null || typeof e3 != "object") return false;
    let t = Object.getPrototypeOf(e3);
    return t === Object.prototype || t === null || Object.getOwnPropertyNames(t).sort().join("\0") === dE;
  }
  function cp(e3) {
    if (e3.createURL) return e3.createURL("/");
    try {
      return new URL(e3.createHref("/"), xy);
    } catch {
      return xy;
    }
  }
  function Oh(e3, t) {
    return e3.origin === t.origin && (e3.origin !== "null" || e3.protocol === t.protocol && e3.host === t.host);
  }
  function hE(e3, t) {
    if (e3.startsWith("//")) return true;
    let r = t.protocol.toLowerCase();
    return e3.toLowerCase().startsWith(r) ? t.host === "" || e3.slice(r.length).startsWith("//") : false;
  }
  function za(e3, t, r, n) {
    let a = null;
    try {
      a = e3 == null ? null : new URL(e3, r);
    } catch {
    }
    let i = new URL(t, r), o = a != null && !Oh(a, r), l = !Oh(i, r);
    if (n === "reject") {
      if (o || l) throw new Error("External navigation is not allowed");
    } else if (l && (a == null || !hE(e3, a) || !Oh(a, i))) throw new Error("External navigation is not allowed");
  }
  function ja(e3) {
    let t = e3.window ? e3.window : typeof window < "u" ? window : void 0, r = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u";
    q(e3.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let n = e3.hydrationRouteProperties || [], a = e3.mapRouteProperties || pw, i = a;
    if (e3.instrumentations) {
      let k = e3.instrumentations;
      i = (S) => ({ ...a(S), ...lw(k.map((L) => L.route).filter(Boolean), S) });
    }
    let o = {}, l = new yE(yn(e3.routes, i, void 0, o)), s = e3.basename || "/";
    s.startsWith("/") || (s = `/${s}`);
    let u = e3.dataStrategy || RE, c = { ...e3.future }, d = null, f = /* @__PURE__ */ new Set(), p = null, v = null, y = null, g = null, m = e3.hydrationData != null, h = Et(l.activeRoutes, e3.history.location, s, false, l.branches), w = false, b = null, E, N;
    if (h == null && !e3.patchRoutesOnNavigation) {
      let k = Ke(404, { pathname: e3.history.location.pathname }), { matches: S, route: L } = Oi(l.activeRoutes);
      E = true, N = !E, h = S, b = { [L.id]: k };
    } else if (h && !e3.hydrationData && rs(h, l.activeRoutes, e3.history.location.pathname).active && (h = null), h) if (h.some((k) => k.route.lazy)) E = false, N = !E;
    else if (!h.some((k) => hp(k.route))) E = true, N = !E;
    else {
      let k = e3.hydrationData ? e3.hydrationData.loaderData : null, S = e3.hydrationData ? e3.hydrationData.errors : null, L = h;
      if (S) {
        let F = h.findIndex(($) => S[$.route.id] !== void 0);
        L = L.slice(0, F + 1);
      }
      N = false, E = true, L.forEach((F) => {
        let $ = vw(F.route, k, S);
        N = N || $.renderFallback, E = E && !$.shouldLoad;
      });
    }
    else {
      E = false, N = !E, h = [];
      let k = rs(null, l.activeRoutes, e3.history.location.pathname);
      k.active && k.matches && (w = true, h = k.matches);
    }
    let M, x = { historyAction: e3.history.action, location: e3.history.location, matches: h, initialized: E, renderFallback: N, navigation: Ii, restoreScrollPosition: e3.hydrationData != null ? false : null, preventScrollReset: false, revalidation: "idle", loaderData: e3.hydrationData && e3.hydrationData.loaderData || {}, actionData: e3.hydrationData && e3.hydrationData.actionData || null, errors: e3.hydrationData && e3.hydrationData.errors || b, fetchers: /* @__PURE__ */ new Map(), blockers: /* @__PURE__ */ new Map() }, C = "POP", D = null, T = false, P, _ = false, O = /* @__PURE__ */ new Map(), te = null, X = false, ie = false, Le = /* @__PURE__ */ new Set(), oe = /* @__PURE__ */ new Map(), Ve = 0, Pe = -1, yr = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Set(), rr = /* @__PURE__ */ new Map(), nr = /* @__PURE__ */ new Map(), qt = /* @__PURE__ */ new Set(), ga = /* @__PURE__ */ new Map(), es, po = null;
    function K5() {
      if (d = e3.history.listen(({ action: k, location: S, delta: L }) => {
        if (es) {
          es(), es = void 0;
          return;
        }
        ke(ga.size === 0 || L != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
        let F = Rm({ currentLocation: x.location, nextLocation: S, historyAction: k });
        if (F && L != null) {
          let $ = new Promise((Q) => {
            es = Q;
          });
          e3.history.go(L * -1), ts(F, { state: "blocked", location: S, proceed() {
            ts(F, { state: "proceeding", proceed: void 0, reset: void 0, location: S }), $.then(() => e3.history.go(L));
          }, reset() {
            let Q = new Map(x.blockers);
            Q.set(F, pn), vt({ blockers: Q });
          } }), D?.resolve(), D = null;
          return;
        }
        return va(k, S);
      }), r) {
        PE(t, O);
        let k = () => _E(t, O);
        t.addEventListener("pagehide", k), te = () => t.removeEventListener("pagehide", k);
      }
      return x.initialized || va("POP", x.location, { initialHydration: true }), M;
    }
    function X5() {
      d && d(), te && te(), f.clear(), P && P.abort(), x.fetchers.forEach((k, S) => fd(x.fetchers, S)), x.blockers.forEach((k, S) => Em(S));
    }
    function Q5(k) {
      if (f.add(k), p) {
        let { newErrors: S } = p;
        p = null, k(x, { deletedFetchers: [], newErrors: S, viewTransitionOpts: void 0, flushSync: false });
      }
      return () => f.delete(k);
    }
    function vt(k, S = {}) {
      k.matches && (k.matches = k.matches.map(($) => {
        let Q = o[$.route.id], Y = $.route;
        return Y.element !== Q.element || Y.errorElement !== Q.errorElement || Y.hydrateFallbackElement !== Q.hydrateFallbackElement ? { ...$, route: Q } : $;
      })), x = { ...x, ...k };
      let L = [], F = [];
      x.fetchers.forEach(($, Q) => {
        $.state === "idle" && (qt.has(Q) ? L.push(Q) : F.push(Q));
      }), qt.forEach(($) => {
        !x.fetchers.has($) && !oe.has($) && L.push($);
      }), f.size === 0 && (p = { newErrors: k.errors ?? null }), [...f].forEach(($) => $(x, { deletedFetchers: L, newErrors: k.errors ?? null, viewTransitionOpts: S.viewTransitionOpts, flushSync: S.flushSync === true })), L.forEach(($) => fd(x.fetchers, $)), F.forEach(($) => x.fetchers.delete($));
    }
    function ni(k, S, { flushSync: L } = {}) {
      let F = x.actionData != null && x.navigation.formMethod != null && Ye(x.navigation.formMethod) && x.navigation.state === "loading" && k.state?._isRedirect !== true, $;
      S.actionData ? Object.keys(S.actionData).length > 0 ? $ = S.actionData : $ = null : F ? $ = x.actionData : $ = null;
      let Q = S.loaderData ? Ty(x.loaderData, S.loaderData, S.matches || [], S.errors) : x.loaderData, Y = x.blockers;
      Y.size > 0 && (Y = new Map(Y), Y.forEach((J, le) => Y.set(le, pn)));
      let Z = X ? false : Cm(k, S.matches || x.matches), W = T === true || x.navigation.formMethod != null && Ye(x.navigation.formMethod) && k.state?._isRedirect !== true;
      l.commitHmrRoutes(), X || C === "POP" || (C === "PUSH" ? e3.history.push(k, k.state) : C === "REPLACE" && e3.history.replace(k, k.state));
      let re;
      if (C === "POP") {
        let J = O.get(x.location.pathname);
        J && J.has(k.pathname) ? re = { currentLocation: x.location, nextLocation: k } : O.has(k.pathname) && (re = { currentLocation: k, nextLocation: x.location });
      } else if (_) {
        let J = O.get(x.location.pathname);
        J ? J.add(k.pathname) : (J = /* @__PURE__ */ new Set([k.pathname]), O.set(x.location.pathname, J)), re = { currentLocation: x.location, nextLocation: k };
      }
      vt({ ...S, actionData: $, loaderData: Q, historyAction: C, location: k, initialized: true, renderFallback: false, navigation: Ii, revalidation: "idle", restoreScrollPosition: Z, preventScrollReset: W, blockers: Y }, { viewTransitionOpts: re, flushSync: L === true }), C = "POP", T = false, _ = false, X = false, ie = false, D?.resolve(), D = null, po?.resolve(), po = null;
    }
    async function vm(k, S) {
      if (D?.resolve(), D = null, typeof k == "number") {
        D || (D = $y());
        let be = D.promise;
        return e3.history.go(k), be;
      }
      let L = Wh(x.location, x.matches, s, k, S?.fromRouteId, S?.relative), { path: F, submission: $, error: Q } = Ey(false, L, S), Y;
      if (S?.mask) {
        let be = typeof S.mask == "string" ? St(S.mask) : { ...x.location.mask, ...S.mask };
        if (Y = { pathname: be.pathname ?? "", search: be.search ?? "", hash: be.hash ?? "" }, xl.test(Y.pathname)) throw new Error("External navigation is not allowed");
        Y.pathname.startsWith("\\") && (Y.pathname = Y.pathname.replace(/^\\+/, "/")), za(typeof S.mask == "string" ? S.mask : je(S.mask), je(Y), e3.history.createURL("/"), "reject");
      }
      let Z = x.location, W = vn(Z, F, S && S.state, void 0, Y);
      W = { ...W, ...e3.history.encodeLocation(W) }, za(k == null ? e3.history.createHref(x.location) : typeof k == "string" ? k : je(k), e3.history.createHref(W.mask || W), e3.history.createURL("/"), "reject");
      let re = S && S.replace != null ? S.replace : void 0, J = "PUSH";
      re === true ? J = "REPLACE" : re === false || $ != null && Ye($.formMethod) && $.formAction === x.location.pathname + x.location.search && (J = "REPLACE");
      let le = S && "preventScrollReset" in S ? S.preventScrollReset === true : void 0, ae = (S && S.flushSync) === true, me = Rm({ currentLocation: Z, nextLocation: W, historyAction: J });
      if (me) {
        ts(me, { state: "blocked", location: W, proceed() {
          ts(me, { state: "proceeding", proceed: void 0, reset: void 0, location: W }), vm(k, S);
        }, reset() {
          let be = new Map(x.blockers);
          be.set(me, pn), vt({ blockers: be });
        } });
        return;
      }
      await va(J, W, { submission: $, pendingError: Q, preventScrollReset: le, replace: S && S.replace, enableViewTransition: S && S.viewTransition, flushSync: ae, callSiteDefaultShouldRevalidate: S && S.defaultShouldRevalidate });
    }
    function Z5() {
      po || (po = $y()), dd(), vt({ revalidation: "loading" });
      let k = po.promise;
      return x.navigation.state === "submitting" ? k : x.navigation.state === "idle" ? (va(x.historyAction, x.location, { startUninterruptedRevalidation: true }), k) : (va(C || x.historyAction, x.navigation.location, { overrideNavigation: x.navigation, enableViewTransition: _ === true }), k);
    }
    async function va(k, S, L) {
      P && P.abort(), P = null, C = k, X = (L && L.startUninterruptedRevalidation) === true, c3(x.location, x.matches), T = (L && L.preventScrollReset) === true, _ = (L && L.enableViewTransition) === true;
      let F = l.activeRoutes, $ = L?.initialHydration && x.matches && x.matches.length > 0 && !w ? x.matches : Et(F, S, s, false, l.branches), Q = (L && L.flushSync) === true;
      if ($ && x.initialized && !ie && DE(x.location, S) && !(L && L.submission && Ye(L.submission.formMethod))) {
        ni(S, { matches: $ }, { flushSync: Q });
        return;
      }
      let Y = rs($, F, S.pathname);
      if (Y.active && Y.matches && ($ = Y.matches), !$) {
        let { error: ve, notFoundMatches: ge, route: Ot } = hd(S.pathname);
        ni(S, { matches: ge, loaderData: {}, errors: { [Ot.id]: ve } }, { flushSync: Q });
        return;
      }
      let Z = L && L.overrideNavigation ? { ...L.overrideNavigation, matches: $, historyAction: k } : void 0;
      P = new AbortController();
      let W = zi(e3.history, S, P.signal, L && L.submission), re = e3.getContext ? await e3.getContext() : new mr(), J;
      if (L && L.pendingError) J = [pr($).route.id, { type: "error", error: L.pendingError }];
      else if (L && L.submission && Ye(L.submission.formMethod)) {
        let ve = await J5(W, S, L.submission, $, k, re, Y.active, L && L.initialHydration === true, { replace: L.replace, flushSync: Q });
        if (ve.shortCircuited) return;
        if (ve.pendingActionResult) {
          let [ge, Ot] = ve.pendingActionResult;
          if (at(Ot) && Ue(Ot.error) && Ot.error.status === 404) {
            P = null, ni(S, { matches: ve.matches, loaderData: {}, errors: { [ge]: Ot.error } });
            return;
          }
        }
        $ = ve.matches || $, J = ve.pendingActionResult, Z = Ih(S, $, k, L.submission), Q = false, Y.active = false, W = zi(e3.history, W.url, W.signal);
      }
      let { shortCircuited: le, matches: ae, loaderData: me, errors: be, workingFetchers: Ze } = await e32(W, S, $, k, re, Y.active, Z, L && L.submission, L && L.fetcherSubmission, L && L.replace, L && L.initialHydration === true, Q, J, L && L.callSiteDefaultShouldRevalidate);
      le || (P = null, ni(S, { matches: ae || $, ...Ay(J), loaderData: me, errors: be, ...Ze ? { fetchers: Ze } : {} }));
    }
    async function J5(k, S, L, F, $, Q, Y, Z, W = {}) {
      dd();
      let re = ME(S, F, $, L);
      if (vt({ navigation: re }, { flushSync: W.flushSync === true }), Y) {
        let ae = await ns(F, S.pathname, k.signal);
        if (ae.type === "aborted") return { shortCircuited: true };
        if (ae.type === "error") {
          if (ae.partialMatches.length === 0) {
            let { matches: be, route: Ze } = Oi(l.activeRoutes);
            return { matches: be, pendingActionResult: [Ze.id, { type: "error", error: ae.error }] };
          }
          let me = pr(ae.partialMatches).route.id;
          return { matches: ae.partialMatches, pendingActionResult: [me, { type: "error", error: ae.error }] };
        } else if (ae.matches) F = ae.matches;
        else {
          let { notFoundMatches: me, error: be, route: Ze } = hd(S.pathname);
          return { matches: me, pendingActionResult: [Ze.id, { type: "error", error: be }] };
        }
      }
      let J, le = ji(F, S);
      if (!le.route.action && !le.route.lazy) J = { type: "error", error: Ke(405, { method: k.method, pathname: S.pathname, routeId: le.route.id }) };
      else {
        let ae = ra(i, o, k, S, F, le, Z ? [] : n, Q), me = await mo(k, S, ae, Q, null);
        if (J = me[le.route.id], !J) {
          for (let be of F) if (me[be.route.id]) {
            J = me[be.route.id];
            break;
          }
        }
        if (k.signal.aborted) return { shortCircuited: true };
      }
      if (ta(J)) {
        let ae;
        return W && W.replace != null ? ae = W.replace : ae = Ly(J.response.headers.get("Location"), new URL(k.url), s, e3.history) === x.location.pathname + x.location.search, await ya(k, J, true, { submission: L, replace: ae }), { shortCircuited: true };
      }
      if (at(J)) {
        let ae = pr(F, le.route.id);
        return (W && W.replace) !== true && (C = "PUSH"), { matches: F, pendingActionResult: [ae.route.id, J, le.route.id] };
      }
      return { matches: F, pendingActionResult: [le.route.id, J] };
    }
    async function e32(k, S, L, F, $, Q, Y, Z, W, re, J, le, ae, me) {
      let be = Y || Ih(S, L, F, Z), Ze = Z || W || Fy(be), ve = !X && !J;
      if (Q) {
        if (ve) {
          let jt = ym(ae);
          vt({ navigation: be, ...jt !== void 0 ? { actionData: jt } : {} }, { flushSync: le });
        }
        let de = await ns(L, S.pathname, k.signal);
        if (de.type === "aborted") return { shortCircuited: true };
        if (de.type === "error") {
          if (de.partialMatches.length === 0) {
            let { matches: Fr, route: rn } = Oi(l.activeRoutes);
            return { matches: Fr, loaderData: {}, errors: { [rn.id]: de.error } };
          }
          let jt = pr(de.partialMatches).route.id;
          return { matches: de.partialMatches, loaderData: {}, errors: { [jt]: de.error } };
        } else if (de.matches) L = de.matches;
        else {
          let { error: jt, notFoundMatches: Fr, route: rn } = hd(S.pathname);
          return { matches: Fr, loaderData: {}, errors: { [rn.id]: jt } };
        }
      }
      let ge = l.activeRoutes, { dsMatches: Ot, revalidatingFetchers: It } = Ry(k, $, i, o, e3.history, x, L, Ze, S, J ? [] : n, J === true, ie, Le, qt, rr, gt, ge, s, e3.patchRoutesOnNavigation != null, l.branches, ae, me);
      if (Pe = ++Ve, !e3.dataStrategy && !Ot.some((de) => de.shouldLoad) && !Ot.some((de) => de.route.middleware && de.route.middleware.length > 0) && It.length === 0) {
        let de = new Map(x.fetchers), jt = bm(de);
        return ni(S, { matches: L, loaderData: {}, errors: ae && at(ae[1]) ? { [ae[0]]: ae[1].error } : null, ...Ay(ae), ...jt ? { fetchers: de } : {} }, { flushSync: le }), { shortCircuited: true };
      }
      if (ve) {
        let de = {};
        if (!Q) {
          de.navigation = be;
          let jt = ym(ae);
          jt !== void 0 && (de.actionData = jt);
        }
        It.length > 0 && (de.fetchers = t3(It)), vt(de, { flushSync: le });
      }
      It.forEach((de) => {
        tn(de.key), de.controller && oe.set(de.key, de.controller);
      });
      let go = () => It.forEach((de) => tn(de.key));
      P && P.signal.addEventListener("abort", go);
      let { loaderResults: Nn, fetcherResults: ai } = await wm(Ot, It, k, S, $);
      if (k.signal.aborted) return { shortCircuited: true };
      P && P.signal.removeEventListener("abort", go), It.forEach((de) => oe.delete(de.key));
      let Mn = Lu(Nn);
      if (Mn) return await ya(k, Mn.result, true, { replace: re }), { shortCircuited: true };
      if (Mn = Lu(ai), Mn) return gt.add(Mn.key), await ya(k, Mn.result, true, { replace: re }), { shortCircuited: true };
      let Ar = new Map(x.fetchers), { loaderData: pd, errors: Ln } = _y(x, L, Nn, ae, It, ai, Ar);
      J && x.errors && (Ln = { ...x.errors, ...Ln });
      let as = bm(Ar), is = km(Pe, Ar), os = as || is || It.length > 0;
      return { matches: L, loaderData: pd, errors: Ln, ...os ? { workingFetchers: Ar } : {} };
    }
    function ym(k) {
      if (k && !at(k[1])) return { [k[0]]: k[1].data };
      if (x.actionData) return Object.keys(x.actionData).length === 0 ? null : x.actionData;
    }
    function t3(k) {
      let S = new Map(x.fetchers);
      return k.forEach((L) => {
        let F = S.get(L.key), $ = cl(void 0, F ? F.data : void 0);
        S.set(L.key, $);
      }), S;
    }
    async function r3(k, S, L, F) {
      tn(k);
      let $ = (F && F.flushSync) === true, Q = l.activeRoutes, Y = Wh(x.location, x.matches, s, L, S, F?.relative), Z = Et(Q, Y, s, false, l.branches), W = rs(Z, Q, Y);
      if (W.active && W.matches && (Z = W.matches), !Z) {
        en(k, S, Ke(404, { pathname: Y }), { flushSync: $ });
        return;
      }
      let { path: re, submission: J, error: le } = Ey(true, Y, F);
      if (le) {
        en(k, S, le, { flushSync: $ });
        return;
      }
      let ae = e3.getContext ? await e3.getContext() : new mr(), me = (F && F.preventScrollReset) === true;
      if (J && Ye(J.formMethod)) {
        await n3(k, S, re, Z, ae, W.active, $, me, J, F && F.defaultShouldRevalidate);
        return;
      }
      rr.set(k, { routeId: S, path: re }), await a3(k, S, re, Z, ae, W.active, $, me, J);
    }
    async function n3(k, S, L, F, $, Q, Y, Z, W, re) {
      dd(), rr.delete(k);
      let J = x.fetchers.get(k);
      Jr(k, LE(W, J), { flushSync: Y });
      let le = new AbortController(), ae = zi(e3.history, L, le.signal, W);
      if (Q) {
        let _e = await ns(F, new URL(ae.url).pathname, ae.signal, k);
        if (_e.type === "aborted") return;
        if (_e.type === "error") {
          en(k, S, _e.error, { flushSync: Y });
          return;
        } else if (_e.matches) F = _e.matches;
        else {
          en(k, S, Ke(404, { pathname: L }), { flushSync: Y });
          return;
        }
      }
      let me = ji(F, L);
      if (!me.route.action && !me.route.lazy) {
        let _e = Ke(405, { method: W.formMethod, pathname: L, routeId: S });
        en(k, S, _e, { flushSync: Y });
        return;
      }
      oe.set(k, le);
      let be = Ve, Ze = ra(i, o, ae, L, F, me, n, $), ve = await mo(ae, L, Ze, $, k), ge = ve[me.route.id];
      if (!ge) {
        for (let _e of Ze) if (ve[_e.route.id]) {
          ge = ve[_e.route.id];
          break;
        }
      }
      if (ae.signal.aborted) {
        oe.get(k) === le && oe.delete(k);
        return;
      }
      if (qt.has(k)) {
        if (ta(ge) || at(ge)) {
          Jr(k, Br(void 0));
          return;
        }
      } else {
        if (ta(ge)) if (oe.delete(k), Pe > be) {
          Jr(k, Br(void 0));
          return;
        } else return gt.add(k), Jr(k, cl(W)), ya(ae, ge, false, { fetcherSubmission: W, preventScrollReset: Z });
        if (at(ge)) {
          en(k, S, ge.error);
          return;
        }
      }
      let Ot = x.navigation.location || x.location, It = zi(e3.history, Ot, le.signal), go = l.activeRoutes, Nn = x.navigation.state !== "idle" ? Et(go, x.navigation.location, s, false, l.branches) : x.matches;
      q(Nn, "Didn't find any matches after fetcher action");
      let ai = ++Ve;
      yr.set(k, ai);
      let { dsMatches: Mn, revalidatingFetchers: Ar } = Ry(It, $, i, o, e3.history, x, Nn, W, Ot, n, false, ie, Le, qt, rr, gt, go, s, e3.patchRoutesOnNavigation != null, l.branches, [me.route.id, ge], re), pd = cl(W, ge.data), Ln = new Map(x.fetchers);
      Ln.set(k, pd), Ar.filter((_e) => _e.key !== k).forEach((_e) => {
        let wa = _e.key, Mm = Ln.get(wa), h3 = cl(void 0, Mm ? Mm.data : void 0);
        Ln.set(wa, h3), tn(wa), _e.controller && oe.set(wa, _e.controller);
      }), vt({ fetchers: Ln });
      let as = () => Ar.forEach((_e) => tn(_e.key));
      le.signal.addEventListener("abort", as);
      let { loaderResults: is, fetcherResults: os } = await wm(Mn, Ar, It, Ot, $);
      if (le.signal.aborted) return;
      le.signal.removeEventListener("abort", as), yr.delete(k), oe.delete(k), Ar.forEach((_e) => oe.delete(_e.key));
      let de = x.fetchers.has(k), jt = (_e) => {
        if (!de) return _e;
        let wa = new Map(_e.fetchers);
        return wa.set(k, Br(ge.data)), { ..._e, fetchers: wa };
      }, Fr = Lu(is);
      if (Fr) return x = jt(x), ya(It, Fr.result, false, { preventScrollReset: Z });
      if (Fr = Lu(os), Fr) return gt.add(Fr.key), x = jt(x), ya(It, Fr.result, false, { preventScrollReset: Z });
      let rn = new Map(x.fetchers);
      de && rn.set(k, Br(ge.data));
      let { loaderData: Nm, errors: md } = _y(x, Nn, is, void 0, Ar, os, rn);
      km(ai, rn), x.navigation.state === "loading" && ai > Pe ? (q(C, "Expected pending action"), P && P.abort(), ni(x.navigation.location, { matches: Nn, loaderData: Nm, errors: md, fetchers: rn })) : (vt({ errors: md, loaderData: Ty(x.loaderData, Nm, Nn, md), fetchers: rn }), ie = false);
    }
    async function a3(k, S, L, F, $, Q, Y, Z, W) {
      let re = x.fetchers.get(k);
      Jr(k, cl(W, re ? re.data : void 0), { flushSync: Y });
      let J = new AbortController(), le = zi(e3.history, L, J.signal);
      if (Q) {
        let ge = await ns(F, new URL(le.url).pathname, le.signal, k);
        if (ge.type === "aborted") return;
        if (ge.type === "error") {
          en(k, S, ge.error, { flushSync: Y });
          return;
        } else if (ge.matches) F = ge.matches;
        else {
          en(k, S, Ke(404, { pathname: L }), { flushSync: Y });
          return;
        }
      }
      let ae = ji(F, L);
      oe.set(k, J);
      let me = Ve, be = ra(i, o, le, L, F, ae, n, $), Ze = await mo(le, L, be, $, k), ve = Ze[ae.route.id];
      if (!ve) {
        for (let ge of F) if (Ze[ge.route.id]) {
          ve = Ze[ge.route.id];
          break;
        }
      }
      if (oe.get(k) === J && oe.delete(k), !le.signal.aborted) {
        if (qt.has(k)) {
          Jr(k, Br(void 0));
          return;
        }
        if (ta(ve)) if (Pe > me) {
          Jr(k, Br(void 0));
          return;
        } else {
          gt.add(k), await ya(le, ve, false, { preventScrollReset: Z });
          return;
        }
        if (at(ve)) {
          en(k, S, ve.error);
          return;
        }
        Jr(k, Br(ve.data));
      }
    }
    async function ya(k, S, L, { submission: F, fetcherSubmission: $, preventScrollReset: Q, replace: Y } = {}) {
      L || (D?.resolve(), D = null), S.response.headers.has("X-Remix-Revalidate") && (ie = true);
      let Z = S.response.headers.get("Location");
      q(Z, "Expected a Location header on the redirect Response");
      let W = Z, re = new URL(k.url);
      Z = Ly(Z, re, s, e3.history), za(W, Z, re, "allow-explicit");
      let J = vn(x.location, Z, { _isRedirect: true });
      if (r) {
        let ve = false;
        if (S.response.headers.has("X-Remix-Reload-Document")) ve = true;
        else if (op(Z)) {
          let ge = Qy(t, Z, true);
          ve = ge.origin !== t.location.origin || Xe(ge.pathname, s) == null;
        }
        if (ve) {
          Y ? t.location.replace(Z) : t.location.assign(Z);
          return;
        }
      }
      P = null;
      let le = Y === true || S.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH", { formMethod: ae, formAction: me, formEncType: be } = x.navigation;
      !F && !$ && ae && me && be && (F = Fy(x.navigation));
      let Ze = F || $;
      if (vE.has(S.response.status) && Ze && Ye(Ze.formMethod)) await va(le, J, { submission: { ...Ze, formAction: Z }, preventScrollReset: Q || T, enableViewTransition: L ? _ : void 0 });
      else {
        let ve = Ih(J, [], le, F);
        await va(le, J, { overrideNavigation: ve, fetcherSubmission: $, preventScrollReset: Q || T, enableViewTransition: L ? _ : void 0 });
      }
    }
    async function mo(k, S, L, F, $) {
      let Q, Y = {};
      try {
        Q = await Ew(u, k, S, L, $, F, false);
      } catch (Z) {
        return L.filter((W) => W.shouldLoad).forEach((W) => {
          Y[W.route.id] = { type: "error", error: Z };
        }), Y;
      }
      if (k.signal.aborted) return Y;
      if (!Ye(k.method)) for (let Z of L) {
        if (Q[Z.route.id]?.type === "error") break;
        !Q.hasOwnProperty(Z.route.id) && !x.loaderData.hasOwnProperty(Z.route.id) && (!x.errors || !x.errors.hasOwnProperty(Z.route.id)) && Z.shouldCallHandler() && (Q[Z.route.id] = { type: "error", result: new Error(`No result returned from dataStrategy for route ${Z.route.id}`) });
      }
      for (let [Z, W] of Object.entries(Q)) if (Pw(W)) {
        let re = W.result;
        Y[Z] = { type: "redirect", response: Cw(re, k, Z, L, s) };
      } else Y[Z] = await Sw(W);
      return Y;
    }
    async function wm(k, S, L, F, $) {
      let Q = mo(L, F, k, $, null), Y = Promise.all(S.map(async (re) => {
        if (re.matches && re.match && re.request && re.controller) {
          let le = (await mo(re.request, re.path, re.matches, $, re.key))[re.match.route.id];
          return { [re.key]: le };
        } else return Promise.resolve({ [re.key]: { type: "error", error: Ke(404, { pathname: re.path }) } });
      })), Z = await Q, W = (await Y).reduce((re, J) => Object.assign(re, J), {});
      return { loaderResults: Z, fetcherResults: W };
    }
    function dd() {
      ie = true, rr.forEach((k, S) => {
        oe.has(S) && Le.add(S), tn(S);
      });
    }
    function Jr(k, S, L = {}) {
      let F = new Map(x.fetchers);
      F.set(k, S), vt({ fetchers: F }, { flushSync: (L && L.flushSync) === true });
    }
    function en(k, S, L, F = {}) {
      let $ = pr(x.matches, S), Q = new Map(x.fetchers);
      fd(Q, k), vt({ errors: { [$.route.id]: L }, fetchers: Q }, { flushSync: (F && F.flushSync) === true });
    }
    function i3(k) {
      return nr.set(k, (nr.get(k) || 0) + 1), qt.has(k) && qt.delete(k), x.fetchers.get(k) || kl;
    }
    function o3(k, S) {
      tn(k, S?.reason), Jr(k, Br(null));
    }
    function fd(k, S) {
      let L = x.fetchers.get(S);
      oe.has(S) && !(L && L.state === "loading" && yr.has(S)) && tn(S), rr.delete(S), yr.delete(S), gt.delete(S), qt.delete(S), Le.delete(S), k.delete(S);
    }
    function l3(k) {
      let S = (nr.get(k) || 0) - 1;
      S <= 0 ? (nr.delete(k), qt.add(k)) : nr.set(k, S), vt({ fetchers: new Map(x.fetchers) });
    }
    function tn(k, S) {
      let L = oe.get(k);
      L && (L.abort(S), oe.delete(k));
    }
    function xm(k, S) {
      for (let L of k) {
        let F = S.get(L);
        q(F, `Expected fetcher: ${L}`);
        let $ = Br(F.data);
        S.set(L, $);
      }
    }
    function bm(k) {
      let S = [], L = false;
      for (let F of gt) {
        let $ = k.get(F);
        q($, `Expected fetcher: ${F}`), $.state === "loading" && (gt.delete(F), S.push(F), L = true);
      }
      return xm(S, k), L;
    }
    function km(k, S) {
      let L = [];
      for (let [F, $] of yr) if ($ < k) {
        let Q = S.get(F);
        q(Q, `Expected fetcher: ${F}`), Q.state === "loading" && (tn(F), yr.delete(F), L.push(F));
      }
      return xm(L, S), L.length > 0;
    }
    function s3(k, S) {
      let L = x.blockers.get(k) || pn;
      return ga.get(k) !== S && ga.set(k, S), L;
    }
    function Em(k) {
      x.blockers.delete(k), ga.delete(k);
    }
    function ts(k, S) {
      let L = x.blockers.get(k) || pn;
      q(L.state === "unblocked" && S.state === "blocked" || L.state === "blocked" && S.state === "blocked" || L.state === "blocked" && S.state === "proceeding" || L.state === "blocked" && S.state === "unblocked" || L.state === "proceeding" && S.state === "unblocked", `Invalid blocker state transition: ${L.state} -> ${S.state}`);
      let F = new Map(x.blockers);
      F.set(k, S), vt({ blockers: F });
    }
    function Rm({ currentLocation: k, nextLocation: S, historyAction: L }) {
      if (ga.size === 0) return;
      ga.size > 1 && ke(false, "A router only supports one blocker at a time");
      let F = Array.from(ga.entries()), [$, Q] = F[F.length - 1], Y = x.blockers.get($);
      if (!(Y && Y.state === "proceeding") && Q({ currentLocation: k, nextLocation: S, historyAction: L })) return $;
    }
    function hd(k) {
      let S = Ke(404, { pathname: k }), L = l.activeRoutes, { matches: F, route: $ } = Oi(L);
      return { notFoundMatches: F, route: $, error: S };
    }
    function u3(k, S, L) {
      if (v = k, g = S, y = L || null, !m && x.navigation === Ii) {
        m = true;
        let F = Cm(x.location, x.matches);
        F != null && vt({ restoreScrollPosition: F });
      }
      return () => {
        v = null, g = null, y = null;
      };
    }
    function Sm(k, S) {
      return y && y(k, S.map((F) => Zy(F, x.loaderData))) || k.key;
    }
    function c3(k, S) {
      if (v && g) {
        let L = Sm(k, S);
        v[L] = g();
      }
    }
    function Cm(k, S) {
      if (v) {
        let L = Sm(k, S), F = v[L];
        if (typeof F == "number") return F;
      }
      return null;
    }
    function rs(k, S, L) {
      if (e3.patchRoutesOnNavigation) {
        let F = l.branches;
        if (k) {
          if (Object.keys(k[0].params).length > 0) return { active: true, matches: Et(S, L, s, true, F) };
        } else return { active: true, matches: Et(S, L, s, true, F) || [] };
      }
      return { active: false, matches: null };
    }
    async function ns(k, S, L, F) {
      if (!e3.patchRoutesOnNavigation) return { type: "success", matches: k };
      let $ = k;
      for (; ; ) {
        let Q = o;
        try {
          await e3.patchRoutesOnNavigation({ signal: L, path: S, matches: $, fetcherKey: F, patch: (re, J) => {
            L.aborted || Sy(re, J, l, Q, i, false);
          } });
        } catch (re) {
          return { type: "error", error: re, partialMatches: $ };
        }
        if (L.aborted) return { type: "aborted" };
        let Y = l.branches, Z = Et(l.activeRoutes, S, s, false, Y), W = null;
        if (Z) {
          if (Object.keys(Z[0].params).length === 0) return { type: "success", matches: Z };
          if (W = Et(l.activeRoutes, S, s, true, Y), !(W && $.length < W.length && Dm($, W.slice(0, $.length)))) return { type: "success", matches: Z };
        }
        if (W || (W = Et(l.activeRoutes, S, s, true, Y)), !W || Dm($, W)) return { type: "success", matches: null };
        $ = W;
      }
    }
    function Dm(k, S) {
      return k.length === S.length && k.every((L, F) => L.route.id === S[F].route.id);
    }
    function d3(k) {
      o = {}, l.setHmrRoutes(yn(k, i, void 0, o));
    }
    function f3(k, S, L = false) {
      Sy(k, S, l, o, i, L), l.hasHMRRoutes || vt({});
    }
    return M = { get basename() {
      return s;
    }, get future() {
      return c;
    }, get state() {
      return x;
    }, get routes() {
      return l.stableRoutes;
    }, get branches() {
      return l.branches;
    }, get manifest() {
      return o;
    }, get window() {
      return t;
    }, initialize: K5, subscribe: Q5, enableScrollRestoration: u3, navigate: vm, fetch: r3, revalidate: Z5, createHref: (k) => e3.history.createHref(k), createURL: (k) => e3.history.createURL(k), encodeLocation: (k) => e3.history.encodeLocation(k), getFetcher: i3, resetFetcher: o3, deleteFetcher: l3, dispose: X5, getBlocker: s3, deleteBlocker: Em, patchRoutes: f3, _internalFetchControllers: oe, _internalSetRoutes: d3, _internalSetStateDoNotUseOrYouWillBreakYourApp(k) {
      vt(k);
    } }, e3.instrumentations && (M = cE(M, e3.instrumentations.map((k) => k.router).filter(Boolean))), M;
  }
  function dp(e3, t) {
    q(e3.length > 0, "You must provide a non-empty routes array to createStaticHandler");
    let r = {}, n = (t ? t.basename : null) || "/", a = t?.mapRouteProperties || pw, i = a, o = { ...t?.future };
    if (t?.instrumentations) {
      let y = t.instrumentations;
      i = (g) => ({ ...a(g), ...lw(y.map((m) => m.route).filter(Boolean), g) });
    }
    let l = yn(e3, i, void 0, r), s = pl(l);
    async function u(y, { requestContext: g, filterMatchesToLoad: m, skipLoaderErrorBubbling: h, skipRevalidation: w, dataStrategy: b, generateMiddlewareResponse: E, normalizePath: N } = {}) {
      let M = N || ky, x = y.method, C = vn("", M(y), null, "default"), D = Et(l, C, n, false, s);
      if (g = g ?? new mr(), !Kh(x) && x !== "HEAD") {
        let P = Ke(405, { method: x }), { matches: _, route: O } = Oi(l), te = { basename: n, location: C, matches: _, loaderData: {}, actionData: null, errors: { [O.id]: P }, statusCode: P.status, loaderHeaders: {}, actionHeaders: {} };
        return E ? E(() => Promise.resolve(te)) : te;
      } else if (!D) {
        let P = Ke(404, { pathname: C.pathname }), { matches: _, route: O } = Oi(l), te = { basename: n, location: C, matches: _, loaderData: {}, actionData: null, errors: { [O.id]: P }, statusCode: P.status, loaderHeaders: {}, actionHeaders: {} };
        return E ? E(() => Promise.resolve(te)) : te;
      }
      if (E) {
        q(g instanceof mr, "When using middleware in `staticHandler.query()`, any provided `requestContext` must be an instance of `RouterContextProvider`");
        try {
          await Ny(D, r, i);
          let P, _ = await My({ request: y, url: Uu(y, C), pattern: mn(D), matches: D, params: D[0].params, context: g }, async () => await E(async (te, X = {}) => {
            let ie = await d(te, C, D, g, b || null, h === true, null, "filterMatchesToLoad" in X ? X.filterMatchesToLoad ?? null : m ?? null, w === true);
            return Ae(ie) ? ie : (P = { location: C, basename: n, ...ie }, P);
          }), async (O, te) => {
            if (Vi(O)) return O;
            if (Ae(O)) try {
              O = new it(O.status, O.statusText, await Rw(O));
            } catch (X) {
              O = X;
            }
            if (gn(O) && (O = Mw(O)), P) {
              te in P.loaderData && (P.loaderData[te] = void 0);
              let X = fp(l, P, O, h ? te : pr(D, te).route.id);
              return E(() => Promise.resolve(X));
            } else {
              let X = h ? te : pr(D, D.find((Le) => Le.route.id === te || Le.route.loader)?.route.id || te).route.id, ie = { matches: D, location: C, basename: n, loaderData: {}, actionData: null, errors: { [X]: O }, statusCode: Ue(O) ? O.status : 500, actionHeaders: {}, loaderHeaders: {} };
              return E(() => Promise.resolve(ie));
            }
          });
          return q(Ae(_), "Expected a response in query()"), _;
        } catch (P) {
          if (Ae(P)) return P;
          throw P;
        }
      }
      let T = await d(y, C, D, g, b || null, h === true, null, m || null, w === true);
      return Ae(T) ? T : { location: C, basename: n, ...T };
    }
    async function c(y, { routeId: g, requestContext: m, dataStrategy: h, generateMiddlewareResponse: w, normalizePath: b } = {}) {
      let E = b || ky, N = y.method, M = vn("", E(y), null, "default"), x = Et(l, M, n, false, s);
      if (m = m ?? new mr(), !Kh(N) && N !== "HEAD" && N !== "OPTIONS") throw Ke(405, { method: N });
      if (!x) throw Ke(404, { pathname: M.pathname });
      let C = g ? x.find((P) => P.route.id === g) : ji(x, M);
      if (g && !C) throw Ke(403, { pathname: M.pathname, routeId: g });
      if (!C) throw Ke(404, { pathname: M.pathname });
      if (w) return q(m instanceof mr, "When using middleware in `staticHandler.queryRoute()`, any provided `requestContext` must be an instance of `RouterContextProvider`"), await Ny(x, r, i), await My({ request: y, url: Uu(y, M), pattern: mn(x), matches: x, params: x[0].params, context: m }, async () => await w(async (O) => {
        let te = await d(O, M, x, m, h || null, false, C, null, false), X = T(te);
        return Ae(X) ? X : typeof X == "string" ? new Response(X) : Response.json(X);
      }), (_) => {
        if (gn(_)) return Promise.resolve(Gh(_));
        if (Ae(_)) return Promise.resolve(_);
        throw _;
      });
      let D = await d(y, M, x, m, h || null, false, C, null, false);
      return T(D);
      function T(P) {
        if (Ae(P)) return P;
        let _ = P.errors ? Object.values(P.errors)[0] : void 0;
        if (_ !== void 0) throw _;
        if (P.actionData) return Object.values(P.actionData)[0];
        if (P.loaderData) return Object.values(P.loaderData)[0];
      }
    }
    async function d(y, g, m, h, w, b, E, N, M) {
      q(y.signal, "query()/queryRoute() requests must contain an AbortController signal");
      try {
        if (Ye(y.method)) return await f(y, g, m, E || ji(m, g), h, w, b, E != null, N, M);
        let x = await p(y, g, m, h, w, b, E, N);
        return Ae(x) ? x : { ...x, actionData: null, actionHeaders: {} };
      } catch (x) {
        if (Lw(x) && Ae(x.result)) {
          if (x.type === "error") throw x.result;
          return x.result;
        }
        if (Vi(x)) return x;
        throw x;
      }
    }
    async function f(y, g, m, h, w, b, E, N, M, x) {
      let C;
      if (!h.route.action && !h.route.lazy) {
        let P = Ke(405, { method: y.method, pathname: new URL(y.url).pathname, routeId: h.route.id });
        if (N) throw P;
        C = { type: "error", error: P };
      } else {
        let P = ra(i, r, y, g, m, h, [], w);
        C = (await v(y, g, P, N, w, b))[h.route.id], y.signal.aborted && by(y, N);
      }
      if (ta(C)) throw new Response(null, { status: C.response.status, headers: { Location: C.response.headers.get("Location") } });
      if (N) {
        if (at(C)) throw C.error;
        return { matches: [h], loaderData: {}, actionData: { [h.route.id]: C.data }, errors: null, statusCode: 200, loaderHeaders: {}, actionHeaders: {} };
      }
      if (x) if (at(C)) {
        let P = E ? h : pr(m, h.route.id);
        return { statusCode: Ue(C.error) ? C.error.status : C.statusCode != null ? C.statusCode : 500, actionData: null, actionHeaders: { ...C.headers ? { [h.route.id]: C.headers } : {} }, matches: m, loaderData: {}, errors: { [P.route.id]: C.error }, loaderHeaders: {} };
      } else return { actionData: { [h.route.id]: C.data }, actionHeaders: C.headers ? { [h.route.id]: C.headers } : {}, matches: m, loaderData: {}, errors: null, statusCode: C.statusCode || 200, loaderHeaders: {} };
      let D = new Request(y.url, { headers: y.headers, redirect: y.redirect, signal: y.signal });
      if (at(C)) {
        let P = E ? h : pr(m, h.route.id);
        return { ...await p(D, g, m, w, b, E, null, M, [P.route.id, C]), statusCode: Ue(C.error) ? C.error.status : C.statusCode != null ? C.statusCode : 500, actionData: null, actionHeaders: { ...C.headers ? { [h.route.id]: C.headers } : {} } };
      }
      return { ...await p(D, g, m, w, b, E, null, M), actionData: { [h.route.id]: C.data }, ...C.statusCode ? { statusCode: C.statusCode } : {}, actionHeaders: C.headers ? { [h.route.id]: C.headers } : {} };
    }
    async function p(y, g, m, h, w, b, E, N, M) {
      let x = E != null;
      if (x && !E?.route.loader && !E?.route.lazy) throw Ke(400, { method: y.method, pathname: new URL(y.url).pathname, routeId: E?.route.id });
      let C;
      if (E) C = ra(i, r, y, g, m, E, [], h);
      else {
        let P = M && at(M[1]) ? m.findIndex((O) => O.route.id === M[0]) - 1 : void 0, _ = mn(m);
        C = m.map((O, te) => P != null && te > P ? gl(i, r, y, g, _, O, [], h, false) : gl(i, r, y, g, _, O, [], h, (O.route.loader || O.route.lazy) != null && (!N || N(O))));
      }
      if (!w && !C.some((P) => P.shouldLoad)) return { matches: m, loaderData: {}, errors: M && at(M[1]) ? { [M[0]]: M[1].error } : null, statusCode: 200, loaderHeaders: {} };
      let D = await v(y, g, C, x, h, w);
      return y.signal.aborted && by(y, x), { ...Dw(m, D, M, true, b), matches: m };
    }
    async function v(y, g, m, h, w, b) {
      let E = await Ew(b || Yh, y, g, m, null, w, true), N = {};
      return await Promise.all(m.map(async (M) => {
        if (!(M.route.id in E)) return;
        let x = E[M.route.id];
        if (Pw(x)) {
          let C = x.result;
          throw Cw(C, y, M.route.id, m, n);
        }
        if (h) {
          if (Ae(x.result)) throw x;
          if (gn(x.result)) throw Gh(x.result);
        }
        N[M.route.id] = await Sw(x);
      })), N;
    }
    return { dataRoutes: l, _internalRouteBranches: s, query: u, queryRoute: c };
  }
  function fp(e3, t, r, n) {
    let a = n || t._deepestRenderedBoundaryId || e3[0].id;
    return { ...t, statusCode: Ue(r) ? r.status : 500, errors: { [a]: r } };
  }
  function by(e3, t) {
    if (e3.signal.reason !== void 0) throw e3.signal.reason;
    let r = t ? "queryRoute" : "query";
    throw new Error(`${r}() call aborted without an \`AbortSignal.reason\`: ${e3.method} ${e3.url}`);
  }
  function wE(e3) {
    return e3 != null && ("formData" in e3 && e3.formData != null || "body" in e3 && e3.body !== void 0);
  }
  function ky(e3) {
    let t = new URL(e3.url);
    return { pathname: t.pathname, search: t.search, hash: t.hash };
  }
  function Wh(e3, t, r, n, a, i) {
    let o, l;
    if (a) {
      o = [];
      for (let u of t) if (o.push(u), u.route.id === a) {
        l = u;
        break;
      }
    } else o = t, l = t[t.length - 1];
    let s = bl(n || ".", Ku(o), Xe(e3.pathname, r) || e3.pathname, i === "path");
    if (n == null && (s.search = e3.search, s.hash = e3.hash), (n == null || n === "" || n === ".") && l) {
      let u = mp(s.search);
      if (l.route.index && !u) s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index";
      else if (!l.route.index && u) {
        let c = new URLSearchParams(s.search), d = c.getAll("index");
        c.delete("index"), d.filter((p) => p).forEach((p) => c.append("index", p));
        let f = c.toString();
        s.search = f ? `?${f}` : "";
      }
    }
    return r !== "/" && (s.pathname = iE({ basename: r, pathname: s.pathname })), je(s);
  }
  function Ey(e3, t, r) {
    if (!r || !wE(r)) return { path: t };
    if (r.formMethod && !Kh(r.formMethod)) return { path: t, error: Ke(405, { method: r.formMethod }) };
    let n = () => ({ path: t, error: Ke(400, { type: "invalid-body" }) }), i = (r.formMethod || "get").toUpperCase(), o = Nw(t);
    if (r.body !== void 0) {
      if (r.formEncType === "text/plain") {
        if (!Ye(i)) return n();
        let d = typeof r.body == "string" ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce((f, [p, v]) => `${f}${p}=${v}
`, "") : String(r.body);
        return { path: t, submission: { formMethod: i, formAction: o, formEncType: r.formEncType, formData: void 0, json: void 0, text: d } };
      } else if (r.formEncType === "application/json") {
        if (!Ye(i)) return n();
        try {
          let d = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
          return { path: t, submission: { formMethod: i, formAction: o, formEncType: r.formEncType, formData: void 0, json: d, text: void 0 } };
        } catch {
          return n();
        }
      }
    }
    q(typeof FormData == "function", "FormData is not available in this environment");
    let l, s;
    if (r.formData) l = qh(r.formData), s = r.formData;
    else if (r.body instanceof FormData) l = qh(r.body), s = r.body;
    else if (r.body instanceof URLSearchParams) l = r.body, s = Py(l);
    else if (r.body == null) l = new URLSearchParams(), s = new FormData();
    else try {
      l = new URLSearchParams(r.body), s = Py(l);
    } catch {
      return n();
    }
    let u = { formMethod: i, formAction: o, formEncType: r && r.formEncType || "application/x-www-form-urlencoded", formData: s, json: void 0, text: void 0 };
    if (Ye(u.formMethod)) return { path: t, submission: u };
    let c = St(t);
    return e3 && c.search && mp(c.search) && l.append("index", ""), c.search = `?${l}`, { path: je(c), submission: u };
  }
  function Ry(e3, t, r, n, a, i, o, l, s, u, c, d, f, p, v, y, g, m, h, w, b, E) {
    let N = b ? at(b[1]) ? b[1].error : b[1].data : void 0, M = a.createURL(i.location), x = a.createURL(s), C;
    if (c && i.errors) {
      let X = Object.keys(i.errors)[0];
      C = o.findIndex((ie) => ie.route.id === X);
    } else if (b && at(b[1])) {
      let X = b[0];
      C = o.findIndex((ie) => ie.route.id === X) - 1;
    }
    let D = b ? b[1].statusCode : void 0, T = D && D >= 400, P = { currentUrl: M, currentParams: i.matches[0]?.params || {}, nextUrl: x, nextParams: o[0].params, ...l, actionResult: N, actionStatus: D }, _ = mn(o), O = o.map((X, ie) => {
      let { route: Le } = X, oe = null;
      if (C != null && ie > C) oe = false;
      else if (Le.lazy) oe = true;
      else if (!hp(Le)) oe = false;
      else if (c) {
        let { shouldLoad: gt } = vw(Le, i.loaderData, i.errors);
        oe = gt;
      } else xE(i.loaderData, i.matches[ie], X) && (oe = true);
      if (oe !== null) return gl(r, n, e3, s, _, X, u, t, oe);
      let Ve = false;
      typeof E == "boolean" ? Ve = E : T ? Ve = false : (d || M.pathname + M.search === x.pathname + x.search || M.search !== x.search || bE(i.matches[ie], X)) && (Ve = true);
      let Pe = { ...P, defaultShouldRevalidate: Ve }, yr = ml(X, Pe);
      return gl(r, n, e3, s, _, X, u, t, yr, Pe, E);
    }), te = [];
    return v.forEach((X, ie) => {
      if (c || !o.some((nr) => nr.route.id === X.routeId) || p.has(ie)) return;
      let Le = i.fetchers.get(ie), oe = Le && Le.state !== "idle" && Le.data === void 0, Ve = Et(g, X.path, m ?? "/", false, w);
      if (!Ve) {
        if (h && oe) return;
        te.push({ key: ie, routeId: X.routeId, path: X.path, matches: null, match: null, request: null, controller: null });
        return;
      }
      if (y.has(ie)) return;
      let Pe = ji(Ve, X.path), yr = new AbortController(), gt = zi(a, X.path, yr.signal), rr = null;
      if (f.has(ie)) f.delete(ie), rr = ra(r, n, gt, X.path, Ve, Pe, u, t);
      else if (oe) d && (rr = ra(r, n, gt, X.path, Ve, Pe, u, t));
      else {
        let nr;
        typeof E == "boolean" ? nr = E : T ? nr = false : nr = d;
        let qt = { ...P, defaultShouldRevalidate: nr };
        ml(Pe, qt) && (rr = ra(r, n, gt, X.path, Ve, Pe, u, t, qt));
      }
      rr && te.push({ key: ie, routeId: X.routeId, path: X.path, matches: rr, match: Pe, request: gt, controller: yr });
    }), { dsMatches: O, revalidatingFetchers: te };
  }
  function hp(e3) {
    return e3.loader != null || e3.middleware != null && e3.middleware.length > 0;
  }
  function vw(e3, t, r) {
    if (e3.lazy) return { shouldLoad: true, renderFallback: true };
    if (!hp(e3)) return { shouldLoad: false, renderFallback: false };
    let n = t != null && e3.id in t, a = r != null && r[e3.id] !== void 0;
    if (!n && a) return { shouldLoad: false, renderFallback: false };
    if (typeof e3.loader == "function" && e3.loader.hydrate === true) return { shouldLoad: true, renderFallback: !n };
    let i = !n && !a;
    return { shouldLoad: i, renderFallback: i };
  }
  function xE(e3, t, r) {
    let n = !t || r.route.id !== t.route.id, a = !e3.hasOwnProperty(r.route.id);
    return n || a;
  }
  function bE(e3, t) {
    let r = e3.route.path;
    return e3.pathname !== t.pathname || r != null && r.endsWith("*") && e3.params["*"] !== t.params["*"];
  }
  function ml(e3, t) {
    if (e3.route.shouldRevalidate) {
      let r = e3.route.shouldRevalidate(t);
      if (typeof r == "boolean") return r;
    }
    return t.defaultShouldRevalidate;
  }
  function Sy(e3, t, r, n, a, i) {
    let o;
    if (e3) {
      let u = n[e3];
      q(u, `No route found to patch children into: routeId = ${e3}`), u.children || (u.children = []), o = u.children;
    } else o = r.activeRoutes;
    let l = [], s = [];
    if (t.forEach((u) => {
      let c = o.find((d) => yw(u, d));
      c ? s.push({ existingRoute: c, newRoute: u }) : l.push(u);
    }), l.length > 0) {
      let u = yn(l, a, [e3 || "_", "patch", String(o?.length || "0")], n);
      o.push(...u);
    }
    if (i && s.length > 0) for (let u = 0; u < s.length; u++) {
      let { existingRoute: c, newRoute: d } = s[u], f = c, [p] = yn([d], a, [], {}, true);
      Object.assign(f, { element: p.element ? p.element : f.element, errorElement: p.errorElement ? p.errorElement : f.errorElement, hydrateFallbackElement: p.hydrateFallbackElement ? p.hydrateFallbackElement : f.hydrateFallbackElement });
    }
    r.hasHMRRoutes || r.setRoutes([...r.activeRoutes]);
  }
  function yw(e3, t) {
    return "id" in e3 && "id" in t && e3.id === t.id ? true : e3.index === t.index && e3.path === t.path && e3.caseSensitive === t.caseSensitive ? (!e3.children || e3.children.length === 0) && (!t.children || t.children.length === 0) ? true : e3.children?.every((r, n) => t.children?.some((a) => yw(r, a))) ?? false : false;
  }
  function kE(e3, t, r, n, a) {
    let i = r[e3.id];
    if (q(i, "No route found in manifest"), !e3.lazy) return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
    if (typeof e3.lazy == "function") {
      let c = Dy.get(i);
      if (c) return { lazyRoutePromise: c, lazyHandlerPromise: c };
      let d = (async () => {
        q(typeof e3.lazy == "function", "No lazy route function found");
        let f = await e3.lazy(), p = {};
        for (let v in f) {
          let y = f[v];
          if (y === void 0) continue;
          let g = qk(v), h = i[v] !== void 0 && v !== "hasErrorBoundary";
          g ? ke(!g, "Route property " + v + " is not a supported property to be returned from a lazy route function. This property will be ignored.") : h ? ke(!h, `Route "${i.id}" has a static property "${v}" defined but its lazy function is also returning a value for this property. The lazy route property "${v}" will be ignored.`) : p[v] = y;
        }
        Object.assign(i, p), Object.assign(i, { ...n(i), lazy: void 0 });
      })();
      return Dy.set(i, d), d.catch(() => {
      }), { lazyRoutePromise: d, lazyHandlerPromise: d };
    }
    let o = Object.keys(e3.lazy), l = [], s;
    for (let c of o) {
      if (a && a.includes(c)) continue;
      let d = pp({ key: c, route: e3, manifest: r, mapRouteProperties: n });
      d && (l.push(d), c === t && (s = d));
    }
    let u = l.length > 0 ? Promise.all(l).then(() => {
    }) : void 0;
    return u?.catch(() => {
    }), s?.catch(() => {
    }), { lazyRoutePromise: u, lazyHandlerPromise: s };
  }
  function EE(e3) {
    return e3 !== void 0;
  }
  function Ny(e3, t, r) {
    let n = e3.map(({ route: a }) => {
      if (!(typeof a.lazy != "object" || !a.lazy.middleware)) return pp({ key: "middleware", route: a, manifest: t, mapRouteProperties: r });
    }).filter(EE);
    return n.length > 0 ? Promise.all(n) : void 0;
  }
  async function Yh(e3) {
    let t = e3.matches.filter((a) => a.shouldLoad), r = {};
    return (await Promise.all(t.map((a) => a.resolve()))).forEach((a, i) => {
      r[t[i].route.id] = a;
    }), r;
  }
  async function RE(e3) {
    return e3.matches.some((t) => t.route.middleware) ? ww(e3, () => Yh(e3)) : Yh(e3);
  }
  function My(e3, t, r) {
    return xw(e3, t, n, Ae, r);
    function n(a) {
      return gn(a) ? Gh(a) : a;
    }
  }
  function ww(e3, t) {
    return xw(e3, t, (n) => {
      if (Vi(n)) throw n;
      return n;
    }, NE, r);
    function r(n, a, i) {
      if (i) return Promise.resolve(Object.assign(i.value, { [a]: { type: "error", result: n } }));
      {
        let { matches: o } = e3, l = Math.min(Math.max(o.findIndex((u) => u.route.id === a), 0), Math.max(o.findIndex((u) => u.shouldCallHandler()), 0)), s = pr(o, o[l].route.id).route.id;
        return Promise.resolve({ [s]: { type: "error", result: n } });
      }
    }
  }
  async function xw(e3, t, r, n, a) {
    let { matches: i, ...o } = e3, l = i.flatMap((u) => u.route.middleware ? u.route.middleware.map((c) => [u.route.id, c]) : []);
    return await bw(o, l, t, r, n, a);
  }
  async function bw(e3, t, r, n, a, i, o = 0) {
    let { request: l } = e3;
    if (l.signal.aborted) throw l.signal.reason ?? new Error(`Request aborted: ${l.method} ${l.url}`);
    let s = t[o];
    if (!s) return await r();
    let [u, c] = s, d, f = async () => {
      if (d) throw new Error("You may only call `next()` once per middleware");
      try {
        return d = { value: await bw(e3, t, r, n, a, i, o + 1) }, d.value;
      } catch (p) {
        return d = { value: await i(p, u, d) }, d.value;
      }
    };
    try {
      let p = await c(e3, f), v = p != null ? n(p) : void 0;
      return a(v) ? v : d ? v ?? d.value : (d = { value: await f() }, d.value);
    } catch (p) {
      return await i(p, u, d);
    }
  }
  function kw(e3, t, r, n, a) {
    let i = pp({ key: "middleware", route: n.route, manifest: t, mapRouteProperties: e3 }), o = kE(n.route, Ye(r.method) ? "action" : "loader", t, e3, a);
    return { middleware: i, route: o.lazyRoutePromise, handler: o.lazyHandlerPromise };
  }
  function gl(e3, t, r, n, a, i, o, l, s, u = null, c) {
    let d = false, f = kw(e3, t, r, i, o);
    return { ...i, _lazyPromises: f, shouldLoad: s, shouldRevalidateArgs: u, shouldCallHandler(p) {
      return d = true, u ? typeof c == "boolean" ? ml(i, { ...u, defaultShouldRevalidate: c }) : typeof p == "boolean" ? ml(i, { ...u, defaultShouldRevalidate: p }) : ml(i, u) : s;
    }, resolve(p) {
      let { lazy: v, loader: y, middleware: g } = i.route, m = d || s || p && !Ye(r.method) && (v || y), h = g && g.length > 0 && !y && !v;
      return m && (Ye(r.method) || !h) ? SE({ request: r, path: n, pattern: a, match: i, lazyHandlerPromise: f?.handler, lazyRoutePromise: f?.route, handlerOverride: p, scopedContext: l }) : Promise.resolve({ type: "data", result: void 0 });
    } };
  }
  function ra(e3, t, r, n, a, i, o, l, s = null) {
    return a.map((u) => u.route.id !== i.route.id ? { ...u, shouldLoad: false, shouldRevalidateArgs: s, shouldCallHandler: () => false, _lazyPromises: kw(e3, t, r, u, o), resolve: () => Promise.resolve({ type: "data", result: void 0 }) } : gl(e3, t, r, n, mn(a), u, o, l, true, s));
  }
  async function Ew(e3, t, r, n, a, i, o) {
    n.some((c) => c._lazyPromises?.middleware) && await Promise.all(n.map((c) => c._lazyPromises?.middleware));
    let l = { request: t, url: Uu(t, r), pattern: mn(n), params: n[0].params, context: i, matches: n }, u = await e3({ ...l, fetcherKey: a, runClientMiddleware: o ? () => {
      throw new Error("You cannot call `runClientMiddleware()` from a static handler `dataStrategy`. Middleware is run outside of `dataStrategy` during SSR in order to bubble up the Response.  You can enable middleware via the `respond` API in `query`/`queryRoute`");
    } : (c) => {
      let d = l;
      return ww(d, () => c({ ...d, fetcherKey: a, runClientMiddleware: () => {
        throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler");
      } }));
    } });
    try {
      await Promise.all(n.flatMap((c) => [c._lazyPromises?.handler, c._lazyPromises?.route]));
    } catch {
    }
    return u;
  }
  async function SE({ request: e3, path: t, pattern: r, match: n, lazyHandlerPromise: a, lazyRoutePromise: i, handlerOverride: o, scopedContext: l }) {
    let s, u, c = Ye(e3.method), d = c ? "action" : "loader", f = (p) => {
      let v, y = new Promise((h, w) => v = w);
      u = () => v(), e3.signal.addEventListener("abort", u);
      let g = (h) => typeof p != "function" ? Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${d}" [routeId: ${n.route.id}]`)) : p({ request: e3, url: Uu(e3, t), pattern: r, params: n.params, context: l }, ...h !== void 0 ? [h] : []), m = (async () => {
        try {
          return { type: "data", result: await (o ? o((w) => g(w)) : g()) };
        } catch (h) {
          return { type: "error", result: h };
        }
      })();
      return Promise.race([m, y]);
    };
    try {
      let p = c ? n.route.action : n.route.loader;
      if (a || i) if (p) {
        let v, [y] = await Promise.all([f(p).catch((g) => {
          v = g;
        }), a, i]);
        if (v !== void 0) throw v;
        s = y;
      } else {
        await a;
        let v = c ? n.route.action : n.route.loader;
        if (v) [s] = await Promise.all([f(v), i]);
        else if (d === "action") {
          let y = new URL(e3.url), g = y.pathname + y.search;
          throw Ke(405, { method: e3.method, pathname: g, routeId: n.route.id });
        } else return { type: "data", result: void 0 };
      }
      else if (p) s = await f(p);
      else {
        let v = new URL(e3.url), y = v.pathname + v.search;
        throw Ke(404, { pathname: y });
      }
    } catch (p) {
      return { type: "error", result: p };
    } finally {
      u && e3.signal.removeEventListener("abort", u);
    }
    return s;
  }
  async function Rw(e3) {
    let t = e3.headers.get("Content-Type");
    return t && /\bapplication\/json\b/.test(t) ? e3.body == null ? null : e3.json() : e3.text();
  }
  async function Sw(e3) {
    let { result: t, type: r } = e3;
    if (Ae(t)) {
      let n;
      try {
        n = await Rw(t);
      } catch (a) {
        return { type: "error", error: a };
      }
      return r === "error" ? { type: "error", error: new it(t.status, t.statusText, n), statusCode: t.status, headers: t.headers } : { type: "data", data: n, statusCode: t.status, headers: t.headers };
    }
    return r === "error" ? gn(t) ? t.data instanceof Error ? { type: "error", error: t.data, statusCode: t.init?.status, headers: t.init?.headers ? new Headers(t.init.headers) : void 0 } : { type: "error", error: Mw(t), statusCode: Ue(t) ? t.status : void 0, headers: t.init?.headers ? new Headers(t.init.headers) : void 0 } : { type: "error", error: t, statusCode: Ue(t) ? t.status : void 0 } : gn(t) ? { type: "data", data: t.data, statusCode: t.init?.status, headers: t.init?.headers ? new Headers(t.init.headers) : void 0 } : { type: "data", data: t };
  }
  function Cw(e3, t, r, n, a) {
    let i = e3.headers.get("Location");
    if (q(i, "Redirects returned/thrown from loaders/actions must have a Location header"), !op(i)) {
      let o = n.slice(0, n.findIndex((l) => l.route.id === r) + 1);
      i = Wh(new URL(t.url), o, a, i), e3.headers.set("Location", i);
    }
    return e3;
  }
  function gr(e3) {
    try {
      return CE.includes(new URL(e3).protocol);
    } catch {
      return false;
    }
  }
  function Ly(e3, t, r, n) {
    if (op(e3)) {
      let a = e3, i = xl.test(a) ? new URL(Ky(a, t.protocol)) : new URL(a);
      if (gr(i.toString())) throw new Error("Invalid redirect location");
      let o = Xe(i.pathname, r) != null;
      if (i.origin === t.origin && o) return lp(i.pathname) + i.search + i.hash;
    }
    try {
      let a = n.createURL(e3);
      if (gr(a.toString())) throw new Error("Invalid redirect location");
    } catch {
    }
    return e3;
  }
  function zi(e3, t, r, n) {
    let a = e3.createURL(Nw(t)).toString(), i = { signal: r };
    if (n && Ye(n.formMethod)) {
      let { formMethod: o, formEncType: l } = n;
      i.method = o.toUpperCase(), l === "application/json" ? (i.headers = new Headers({ "Content-Type": l }), i.body = JSON.stringify(n.json)) : l === "text/plain" ? i.body = n.text : l === "application/x-www-form-urlencoded" && n.formData ? i.body = qh(n.formData) : i.body = n.formData;
    }
    return new Request(a, i);
  }
  function Uu(e3, t) {
    let r = new URL(e3.url), n = typeof t == "string" ? St(t) : t;
    if (r.pathname = n.pathname || "/", n.search) {
      let a = new URLSearchParams(n.search), i = a.getAll("index");
      a.delete("index");
      for (let o of i.filter(Boolean)) a.append("index", o);
      r.search = a.size ? `?${a.toString()}` : "";
    } else r.search = "";
    return r.hash = n.hash || "", r;
  }
  function qh(e3) {
    let t = new URLSearchParams();
    for (let [r, n] of e3.entries()) t.append(r, typeof n == "string" ? n : n.name);
    return t;
  }
  function Py(e3) {
    let t = new FormData();
    for (let [r, n] of e3.entries()) t.append(r, n);
    return t;
  }
  function Dw(e3, t, r, n = false, a = false) {
    let i = {}, o = null, l, s = false, u = {}, c = r && at(r[1]) ? r[1].error : void 0;
    return e3.forEach((d) => {
      if (!(d.route.id in t)) return;
      let f = d.route.id, p = t[f];
      if (q(!ta(p), "Cannot handle redirect results in processLoaderData"), at(p)) {
        let v = p.error;
        if (c !== void 0 && (v = c, c = void 0), o = o || {}, a) o[f] = v;
        else {
          let y = pr(e3, f);
          o[y.route.id] == null && (o[y.route.id] = v);
        }
        n || (i[f] = gw), s || (s = true, l = Ue(p.error) ? p.error.status : 500), p.headers && (u[f] = p.headers);
      } else i[f] = p.data, p.statusCode && p.statusCode !== 200 && !s && (l = p.statusCode), p.headers && (u[f] = p.headers);
    }), c !== void 0 && r && (o = { [r[0]]: c }, r[2] && (i[r[2]] = void 0)), { loaderData: i, errors: o, statusCode: l || 200, loaderHeaders: u };
  }
  function _y(e3, t, r, n, a, i, o) {
    let { loaderData: l, errors: s } = Dw(t, r, n);
    return a.filter((u) => !u.matches || u.matches.some((c) => c.shouldLoad)).forEach((u) => {
      let { key: c, match: d, controller: f } = u;
      if (f && f.signal.aborted) return;
      let p = i[c];
      if (q(p, "Did not find corresponding fetcher result"), at(p)) {
        let v = pr(e3.matches, d?.route.id);
        s && s[v.route.id] || (s = { ...s, [v.route.id]: p.error }), o.delete(c);
      } else if (ta(p)) q(false, "Unhandled fetcher revalidation redirect");
      else {
        let v = Br(p.data);
        o.set(c, v);
      }
    }), { loaderData: l, errors: s };
  }
  function Ty(e3, t, r, n) {
    let a = Object.entries(t).filter(([, i]) => i !== gw).reduce((i, [o, l]) => (i[o] = l, i), {});
    for (let i of r) {
      let o = i.route.id;
      if (!t.hasOwnProperty(o) && e3.hasOwnProperty(o) && i.route.loader && (a[o] = e3[o]), n && n.hasOwnProperty(o)) break;
    }
    return a;
  }
  function Ay(e3) {
    return e3 ? at(e3[1]) ? { actionData: {} } : { actionData: { [e3[0]]: e3[1].data } } : {};
  }
  function pr(e3, t) {
    return (t ? e3.slice(0, e3.findIndex((n) => n.route.id === t) + 1) : [...e3]).reverse().find((n) => n.route.hasErrorBoundary === true) || e3[0];
  }
  function Oi(e3) {
    let t = e3.length === 1 ? e3[0] : e3.find((r) => r.index || !r.path || r.path === "/") || { id: "__shim-error-route__" };
    return { matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }], route: t };
  }
  function Ke(e3, { pathname: t, routeId: r, method: n, type: a, message: i } = {}) {
    let o = "Unknown Server Error", l = "Unknown @remix-run/router error";
    return e3 === 400 ? (o = "Bad Request", n && t && r ? l = `You made a ${n} request to "${t}" but did not provide a \`loader\` for route "${r}", so there is no way to handle the request.` : a === "invalid-body" && (l = "Unable to encode submission body")) : e3 === 403 ? (o = "Forbidden", l = `Route "${r}" does not match URL "${t}"`) : e3 === 404 ? (o = "Not Found", l = `No route matches URL "${t}"`) : e3 === 405 && (o = "Method Not Allowed", n && t && r ? l = `You made a ${n.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${r}", so there is no way to handle the request.` : n && (l = `Invalid request method "${n.toUpperCase()}"`)), new it(e3 || 500, o, new Error(l), true);
  }
  function Lu(e3) {
    let t = Object.entries(e3);
    for (let r = t.length - 1; r >= 0; r--) {
      let [n, a] = t[r];
      if (ta(a)) return { key: n, result: a };
    }
  }
  function Nw(e3) {
    let t = typeof e3 == "string" ? St(e3) : e3;
    return je({ ...t, hash: "" });
  }
  function DE(e3, t) {
    return e3.pathname !== t.pathname || e3.search !== t.search ? false : e3.hash === "" ? t.hash !== "" : e3.hash === t.hash ? true : t.hash !== "";
  }
  function Gh(e3) {
    return Response.json(e3.data, e3.init ?? void 0);
  }
  function Mw(e3) {
    return new it(e3.init?.status ?? 500, e3.init?.statusText ?? "Internal Server Error", e3.data);
  }
  function NE(e3) {
    return e3 != null && typeof e3 == "object" && Object.entries(e3).every(([t, r]) => typeof t == "string" && Lw(r));
  }
  function Lw(e3) {
    return e3 != null && typeof e3 == "object" && "type" in e3 && "result" in e3 && (e3.type === "data" || e3.type === "error");
  }
  function Pw(e3) {
    return Ae(e3.result) && hw.has(e3.result.status);
  }
  function at(e3) {
    return e3.type === "error";
  }
  function ta(e3) {
    return (e3 && e3.type) === "redirect";
  }
  function gn(e3) {
    return typeof e3 == "object" && e3 != null && "type" in e3 && "data" in e3 && "init" in e3 && e3.type === "DataWithResponseInit";
  }
  function Ae(e3) {
    return e3 != null && typeof e3.status == "number" && typeof e3.statusText == "string" && typeof e3.headers == "object" && typeof e3.body < "u";
  }
  function El(e3) {
    return hw.has(e3);
  }
  function Vi(e3) {
    return Ae(e3) && El(e3.status) && e3.headers.has("Location");
  }
  function Kh(e3) {
    return gE.has(e3.toUpperCase());
  }
  function Ye(e3) {
    return pE.has(e3.toUpperCase());
  }
  function mp(e3) {
    return new URLSearchParams(e3).getAll("index").some((t) => t === "");
  }
  function ji(e3, t) {
    let r = typeof t == "string" ? St(t).search : t.search;
    if (e3[e3.length - 1].route.index && mp(r || "")) return e3[e3.length - 1];
    let n = aw(e3);
    return n[n.length - 1];
  }
  function Fy(e3) {
    let { formMethod: t, formAction: r, formEncType: n, text: a, formData: i, json: o } = e3;
    if (!(!t || !r || !n)) {
      if (a != null) return { formMethod: t, formAction: r, formEncType: n, formData: void 0, json: void 0, text: a };
      if (i != null) return { formMethod: t, formAction: r, formEncType: n, formData: i, json: void 0, text: void 0 };
      if (o !== void 0) return { formMethod: t, formAction: r, formEncType: n, formData: void 0, json: o, text: void 0 };
    }
  }
  function Ih(e3, t, r, n) {
    return n ? { state: "loading", location: e3, matches: t, historyAction: r, formMethod: n.formMethod, formAction: n.formAction, formEncType: n.formEncType, formData: n.formData, json: n.json, text: n.text } : { state: "loading", location: e3, matches: t, historyAction: r, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 };
  }
  function ME(e3, t, r, n) {
    return { state: "submitting", location: e3, matches: t, historyAction: r, formMethod: n.formMethod, formAction: n.formAction, formEncType: n.formEncType, formData: n.formData, json: n.json, text: n.text };
  }
  function cl(e3, t) {
    return e3 ? { state: "loading", formMethod: e3.formMethod, formAction: e3.formAction, formEncType: e3.formEncType, formData: e3.formData, json: e3.json, text: e3.text, data: t } : { state: "loading", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: t };
  }
  function LE(e3, t) {
    return { state: "submitting", formMethod: e3.formMethod, formAction: e3.formAction, formEncType: e3.formEncType, formData: e3.formData, json: e3.json, text: e3.text, data: t ? t.data : void 0 };
  }
  function Br(e3) {
    return { state: "idle", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: e3 };
  }
  function PE(e3, t) {
    try {
      let r = e3.sessionStorage.getItem(mw);
      if (r) {
        let n = JSON.parse(r);
        for (let [a, i] of Object.entries(n || {})) i && Array.isArray(i) && t.set(a, new Set(i || []));
      }
    } catch {
    }
  }
  function _E(e3, t) {
    if (t.size > 0) {
      let r = {};
      for (let [n, a] of t) r[n] = [...a];
      try {
        e3.sessionStorage.setItem(mw, JSON.stringify(r));
      } catch (n) {
        ke(false, `Failed to save applied view transitions in sessionStorage (${n}).`);
      }
    }
  }
  function $y() {
    let e3, t, r = new Promise((n, a) => {
      e3 = async (i) => {
        n(i);
        try {
          await r;
        } catch {
        }
      }, t = async (i) => {
        a(i);
        try {
          await r;
        } catch {
        }
      };
    });
    return { promise: r, resolve: e3, reject: t };
  }
  function gp() {
    return $t.useContext(Rl);
  }
  function Zu(e3) {
    if (e3.startsWith(`${Tw}:${TE}:{`)) try {
      let t = JSON.parse(e3.slice(28));
      if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.location == "string" && typeof t.reloadDocument == "boolean" && typeof t.replace == "boolean") return t;
    } catch {
    }
  }
  function Ju(e3) {
    if (e3.startsWith(`${Tw}:${AE}:{`)) try {
      let t = JSON.parse(e3.slice(40));
      if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string") return new it(t.status, t.statusText, t.data);
    } catch {
    }
  }
  function yp(e3, { relative: t } = {}) {
    q(xn(), "useHref() may be used only in the context of a <Router> component.");
    let { basename: r, navigator: n } = H.useContext(ht), { hash: a, pathname: i, search: o } = Ua(e3, { relative: t }), l = i;
    return r !== "/" && (l = i === "/" ? r : er([r, i])), n.createHref({ pathname: l, search: o, hash: a });
  }
  function xn() {
    return H.useContext(na) != null;
  }
  function qe() {
    return q(xn(), "useLocation() may be used only in the context of a <Router> component."), H.useContext(na).location;
  }
  function Aw() {
    return H.useContext(na).navigationType;
  }
  function Fw(e3) {
    q(xn(), "useMatch() may be used only in the context of a <Router> component.");
    let { pathname: t } = qe();
    return H.useMemo(() => Oa(e3, nw(t)), [t, e3]);
  }
  function zw(e3) {
    H.useContext(ht).static || H.useLayoutEffect(e3);
  }
  function bn() {
    let { isDataRoute: e3 } = H.useContext(zt);
    return e3 ? BE() : FE();
  }
  function FE() {
    q(xn(), "useNavigate() may be used only in the context of a <Router> component.");
    let e3 = H.useContext(Mr), { basename: t, navigator: r } = H.useContext(ht), { matches: n } = H.useContext(zt), { pathname: a } = qe(), i = JSON.stringify(Ku(n)), o = H.useRef(false);
    return zw(() => {
      o.current = true;
    }), H.useCallback((s, u = {}) => {
      if (ke(o.current, $w), !o.current) return;
      if (typeof s == "number") {
        r.go(s);
        return;
      }
      let c = bl(s, JSON.parse(i), a, u.relative === "path");
      e3 == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : er([t, c.pathname])), za(typeof s == "string" ? s : je(s), r.createHref(c), cp(r), "reject"), (u.replace ? r.replace : r.push)(c, u.state, u);
    }, [t, r, i, a, e3]);
  }
  function Iw() {
    return H.useContext(Ow);
  }
  function wp(e3) {
    let t = H.useContext(zt).outlet;
    return H.useMemo(() => t && H.createElement(Ow.Provider, { value: e3 }, t), [t, e3]);
  }
  function Sl() {
    let { matches: e3 } = H.useContext(zt);
    return e3[e3.length - 1]?.params ?? {};
  }
  function Ua(e3, { relative: t } = {}) {
    let { matches: r } = H.useContext(zt), { pathname: n } = qe(), a = JSON.stringify(Ku(r));
    return H.useMemo(() => bl(e3, JSON.parse(a), n, t === "path"), [e3, a, n, t]);
  }
  function xp(e3, t) {
    return jw(e3, t);
  }
  function jw(e3, t, r) {
    q(xn(), "useRoutes() may be used only in the context of a <Router> component.");
    let { navigator: n } = H.useContext(ht), { matches: a } = H.useContext(zt), i = a[a.length - 1], o = i ? i.params : {}, l = i ? i.pathname : "/", s = i ? i.pathnameBase : "/", u = i && i.route;
    if (Vr) {
      let g = u && u.path || "";
      Yw(l, !u || g.endsWith("*") || g.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g === "/" ? "*" : `${g}/*`}">.`);
    }
    let c = qe(), d;
    if (t) {
      let g = typeof t == "string" ? St(t) : t;
      q(s === "/" || g.pathname?.startsWith(s), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${s}" but pathname "${g.pathname}" was given in the \`location\` prop.`), d = g;
    } else d = c;
    let f = d.pathname || "/", p = f;
    if (s !== "/") {
      let g = s.replace(/^\//, "").split("/");
      p = "/" + f.replace(/^\//, "").split("/").slice(g.length).join("/");
    }
    let v = r && r.state.matches.length ? r.state.matches.map((g) => Object.assign(g, { route: r.manifest[g.route.id] || g.route })) : Ki(e3, { pathname: p });
    Vr && (ke(u || v != null, `No routes matched location "${d.pathname}${d.search}${d.hash}" `), ke(v == null || v[v.length - 1].route.element !== void 0 || v[v.length - 1].route.Component !== void 0 || v[v.length - 1].route.lazy !== void 0, `Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`));
    let y = Hw(v && v.map((g) => Object.assign({}, g, { params: Object.assign({}, o, g.params), pathname: er([s, n.encodeLocation ? n.encodeLocation(g.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : g.pathname]), pathnameBase: g.pathnameBase === "/" ? s : er([s, n.encodeLocation ? n.encodeLocation(g.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : g.pathnameBase]) })), a, r);
    return t && y ? H.createElement(na.Provider, { value: { location: { pathname: "/", search: "", hash: "", state: null, key: "default", mask: void 0, ...d }, navigationType: "POP" } }, y) : y;
  }
  function $E() {
    let e3 = Ha(), t = Ue(e3) ? `${e3.status} ${e3.statusText}` : e3 instanceof Error ? e3.message : JSON.stringify(e3), r = e3 instanceof Error ? e3.stack : null, n = "rgba(200,200,200, 0.5)", a = { padding: "0.5rem", backgroundColor: n }, i = { padding: "2px 4px", backgroundColor: n }, o = null;
    return Vr && (console.error("Error handled by React Router default ErrorBoundary:", e3), o = H.createElement(H.Fragment, null, H.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), H.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", H.createElement("code", { style: i }, "ErrorBoundary"), " or", " ", H.createElement("code", { style: i }, "errorElement"), " prop on your route."))), H.createElement(H.Fragment, null, H.createElement("h2", null, "Unexpected Application Error!"), H.createElement("h3", { style: { fontStyle: "italic" } }, t), r ? H.createElement("pre", { style: a }, r) : null, o);
  }
  function OE({ children: e3, error: t }) {
    let { basename: r, navigator: n } = H.useContext(ht);
    if (typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
      let a = Zu(t.digest);
      if (a) {
        let i = jh.get(t);
        if (i) throw i;
        let o = ow(a.location, r), l = o.absoluteURL || o.to;
        if (za(a.location, l, cp(n), "allow-explicit"), gr(l)) throw new Error("Invalid redirect location");
        if (iw && !jh.get(t)) if (o.isExternal || a.reloadDocument) window.location.href = l;
        else {
          let s = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(o.to, { replace: a.replace }));
          throw jh.set(t, s), s;
        }
        return H.createElement("meta", { httpEquiv: "refresh", content: `0;url=${l}` });
      }
    }
    return e3;
  }
  function IE({ routeContext: e3, match: t, children: r }) {
    let n = H.useContext(Mr);
    return n && n.static && n.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (n.staticContext._deepestRenderedBoundaryId = t.route.id), H.createElement(zt.Provider, { value: e3 }, r);
  }
  function Hw(e3, t = [], r) {
    let n = r?.state;
    if (e3 == null) {
      if (!n) return null;
      if (n.errors) e3 = n.matches;
      else if (t.length === 0 && !n.initialized && n.matches.length > 0) e3 = n.matches;
      else return null;
    }
    let a = e3, i = n?.errors;
    if (i != null) {
      let c = a.findIndex((d) => d.route.id && i?.[d.route.id] !== void 0);
      q(c >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`), a = a.slice(0, Math.min(a.length, c + 1));
    }
    let o = false, l = -1;
    if (r && n) {
      o = n.renderFallback;
      for (let c = 0; c < a.length; c++) {
        let d = a[c];
        if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (l = c), d.route.id) {
          let { loaderData: f, errors: p } = n, v = d.route.loader && !f.hasOwnProperty(d.route.id) && (!p || p[d.route.id] === void 0);
          if (d.route.lazy || v) {
            r.isStatic && (o = true), l >= 0 ? a = a.slice(0, l + 1) : a = [a[0]];
            break;
          }
        }
      }
    }
    let s = r?.onError, u = n && s ? (c, d) => {
      s(c, { location: n.location, params: n.matches?.[0]?.params ?? {}, pattern: mn(n.matches), errorInfo: d });
    } : void 0;
    return a.reduceRight((c, d, f) => {
      let p, v = false, y = null, g = null;
      n && (p = i && d.route.id ? i[d.route.id] : void 0, y = d.route.errorElement || zE, o && (l < 0 && f === 0 ? (Yw("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration"), v = true, g = null) : l === f && (v = true, g = d.route.hydrateFallbackElement || null)));
      let m = t.concat(a.slice(0, f + 1)), h = () => {
        let w;
        return p ? w = y : v ? w = g : d.route.Component ? w = H.createElement(d.route.Component, null) : d.route.element ? w = d.route.element : w = c, H.createElement(IE, { match: d, routeContext: { outlet: c, matches: m, isDataRoute: n != null }, children: w });
      };
      return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0) ? H.createElement(Uw, { location: n.location, revalidation: n.revalidation, component: y, error: p, children: h(), routeContext: { outlet: null, matches: m, isDataRoute: true }, onError: u }) : h();
    }, null);
  }
  function bp(e3) {
    return `${e3} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function kp(e3) {
    let t = H.useContext(Mr);
    return q(t, bp(e3)), t;
  }
  function Yr(e3) {
    let t = H.useContext(Wr);
    return q(t, bp(e3)), t;
  }
  function jE(e3) {
    let t = H.useContext(zt);
    return q(t, bp(e3)), t;
  }
  function Zi(e3) {
    let t = jE(e3), r = t.matches[t.matches.length - 1];
    return q(r.route.id, `${e3} can only be used on routes that contain a unique "id"`), r.route.id;
  }
  function UE() {
    return Zi("useRouteId");
  }
  function Ep() {
    let e3 = Yr("useNavigation");
    return H.useMemo(() => {
      let { matches: t, historyAction: r, ...n } = e3.navigation;
      return n;
    }, [e3.navigation]);
  }
  function Bw() {
    let e3 = kp("useRevalidator"), t = Yr("useRevalidator"), r = H.useCallback(async () => {
      await e3.router.revalidate();
    }, [e3.router]);
    return H.useMemo(() => ({ revalidate: r, state: t.revalidation }), [r, t.revalidation]);
  }
  function Cl() {
    let { matches: e3, loaderData: t } = Yr("useMatches");
    return H.useMemo(() => e3.map((r) => Zy(r, t)), [e3, t]);
  }
  function Dl() {
    let e3 = Yr("useLoaderData"), t = Zi("useLoaderData");
    return e3.loaderData[t];
  }
  function Vw(e3) {
    return Yr("useRouteLoaderData").loaderData[e3];
  }
  function Nl() {
    let e3 = Yr("useActionData"), t = Zi("useLoaderData");
    return e3.actionData ? e3.actionData[t] : void 0;
  }
  function Ha() {
    let e3 = H.useContext(vp), t = Yr("useRouteError"), r = Zi("useRouteError");
    return e3 !== void 0 ? e3 : t.errors?.[r];
  }
  function Rp() {
    return H.useContext(Wi)?._data;
  }
  function Ww() {
    return H.useContext(Wi)?._error;
  }
  function Sp(e3) {
    let { router: t, basename: r } = kp("useBlocker"), n = Yr("useBlocker"), [a, i] = H.useState(""), o = H.useCallback((l) => {
      if (typeof e3 != "function") return !!e3;
      if (r === "/") return e3(l);
      let { currentLocation: s, nextLocation: u, historyAction: c } = l;
      return e3({ currentLocation: { ...s, pathname: Xe(s.pathname, r) || s.pathname }, nextLocation: { ...u, pathname: Xe(u.pathname, r) || u.pathname }, historyAction: c });
    }, [r, e3]);
    return H.useEffect(() => {
      let l = String(++HE);
      return i(l), () => t.deleteBlocker(l);
    }, [t]), H.useEffect(() => {
      a !== "" && t.getBlocker(a, o);
    }, [t, a, o]), a && n.blockers.has(a) ? n.blockers.get(a) : pn;
  }
  function BE() {
    let { router: e3 } = kp("useNavigate"), t = Zi("useNavigate"), r = H.useRef(false);
    return zw(() => {
      r.current = true;
    }), H.useCallback(async (a, i = {}) => {
      ke(r.current, $w), r.current && (typeof a == "number" ? await e3.navigate(a) : await e3.navigate(a, { fromRouteId: t, ...i }));
    }, [e3, t]);
  }
  function Yw(e3, t, r) {
    !t && !zy[e3] && (zy[e3] = true, ke(false, r));
  }
  function qw(...e3) {
    let t = Zi("useRoute"), r = e3[0] ?? t, n = Yr("useRoute"), a = n.matches.find(({ route: i }) => i.id === r);
    if (a !== void 0) return { handle: a.route.handle, loaderData: n.loaderData[r], actionData: n.actionData?.[r] };
  }
  function Oy(e3) {
    return { id: e3.route.id, pathname: e3.pathname, params: e3.params, handle: e3.route.handle };
  }
  function Gw() {
    let { location: e3, historyAction: t, matches: r, navigation: n } = Yr("unstable_useRouterState"), a = H.useMemo(() => ({ type: t, location: e3, searchParams: new URLSearchParams(e3.search), params: r[r.length - 1]?.params ?? {}, matches: r.map((o) => Oy(o)) }), [e3, r, t]), i = H.useMemo(() => {
      if (n.state === "idle") return null;
      let o = { type: n.historyAction, location: n.location, searchParams: new URLSearchParams(n.location.search), params: n.matches[n.matches.length - 1]?.params ?? {}, matches: n.matches.map((l) => Oy(l)) };
      return n.state === "loading" ? { ...o, state: "loading", formMethod: n.formMethod, formAction: n.formAction, formEncType: n.formEncType, formData: n.formData, json: n.json, text: n.text } : { ...o, state: "submitting", formMethod: n.formMethod, formAction: n.formAction, formEncType: n.formEncType, formData: n.formData, json: n.json, text: n.text };
    }, [n]);
    return H.useMemo(() => ({ active: a, pending: i }), [a, i]);
  }
  function Yi(e3, t) {
    !e3 && !Iy[t] && (Iy[t] = true, console.warn(t));
  }
  function YE(e3) {
    return jy ? jy(e3) : [e3, WE];
  }
  function kn(e3) {
    let t = { hasErrorBoundary: e3.hasErrorBoundary || e3.ErrorBoundary != null || e3.errorElement != null };
    return e3.Component && (Vr && e3.element && ke(false, "You should not include both `Component` and `element` on your route - `Component` will be used."), Object.assign(t, { element: B.createElement(e3.Component), Component: void 0 })), e3.HydrateFallback && (Vr && e3.hydrateFallbackElement && ke(false, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."), Object.assign(t, { hydrateFallbackElement: B.createElement(e3.HydrateFallback), HydrateFallback: void 0 })), e3.ErrorBoundary && (Vr && e3.errorElement && ke(false, "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."), Object.assign(t, { errorElement: B.createElement(e3.ErrorBoundary), ErrorBoundary: void 0 })), t;
  }
  function ec(e3, t) {
    return ja({ basename: t?.basename, getContext: t?.getContext, future: t?.future, history: Wu({ initialEntries: t?.initialEntries, initialIndex: t?.initialIndex }), hydrationData: t?.hydrationData, routes: e3, hydrationRouteProperties: Ba, mapRouteProperties: kn, dataStrategy: t?.dataStrategy, patchRoutesOnNavigation: t?.patchRoutesOnNavigation, instrumentations: t?.instrumentations }).initialize();
  }
  function Ml({ router: e3, flushSync: t, onError: r, useTransitions: n }) {
    n = gp() || n;
    let [i, o] = B.useState(e3.state), [l, s] = YE(i), [u, c] = B.useState(), [d, f] = B.useState({ isTransitioning: false }), [p, v] = B.useState(), [y, g] = B.useState(), [m, h] = B.useState(), w = B.useRef(/* @__PURE__ */ new Map()), b = B.useCallback((x, { deletedFetchers: C, newErrors: D, flushSync: T, viewTransitionOpts: P }) => {
      D && r && Object.values(D).forEach((O) => r(O, { location: x.location, params: x.matches[0]?.params ?? {}, pattern: mn(x.matches) })), x.fetchers.forEach((O, te) => {
        O.data !== void 0 && w.current.set(te, O.data);
      }), C.forEach((O) => w.current.delete(O)), Yi(T === false || t != null, 'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');
      let _ = e3.window != null && e3.window.document != null && typeof e3.window.document.startViewTransition == "function";
      if (Yi(P == null || _, "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."), !P || !_) {
        t && T ? t(() => o(x)) : n === false ? o(x) : B.startTransition(() => {
          n === true && s((O) => Uy(O, x)), o(x);
        });
        return;
      }
      if (t && T) {
        t(() => {
          y && (p?.resolve(), y.skipTransition()), f({ isTransitioning: true, flushSync: true, currentLocation: P.currentLocation, nextLocation: P.nextLocation });
        });
        let O = e3.window.document.startViewTransition(() => {
          t(() => o(x));
        });
        O.finished.finally(() => {
          t(() => {
            v(void 0), g(void 0), c(void 0), f({ isTransitioning: false });
          });
        }), t(() => g(O));
        return;
      }
      y ? (p?.resolve(), y.skipTransition(), h({ state: x, currentLocation: P.currentLocation, nextLocation: P.nextLocation })) : (c(x), f({ isTransitioning: true, flushSync: false, currentLocation: P.currentLocation, nextLocation: P.nextLocation }));
    }, [e3.window, t, y, p, n, s, r]);
    B.useLayoutEffect(() => e3.subscribe(b), [e3, b]), B.useEffect(() => {
      d.isTransitioning && !d.flushSync && v(new qE());
    }, [d]), B.useEffect(() => {
      if (p && u && e3.window) {
        let x = u, C = p.promise, D = e3.window.document.startViewTransition(async () => {
          n === false ? o(x) : B.startTransition(() => {
            n === true && s((T) => Uy(T, x)), o(x);
          }), await C;
        });
        D.finished.finally(() => {
          v(void 0), g(void 0), c(void 0), f({ isTransitioning: false });
        }), g(D);
      }
    }, [u, p, e3.window, n, s]), B.useEffect(() => {
      p && u && l.location.key === u.location.key && p.resolve();
    }, [p, y, l.location, u]), B.useEffect(() => {
      !d.isTransitioning && m && (c(m.state), f({ isTransitioning: true, flushSync: false, currentLocation: m.currentLocation, nextLocation: m.nextLocation }), h(void 0));
    }, [d.isTransitioning, m]);
    let E = B.useMemo(() => ({ createHref: e3.createHref, createURL: e3.createURL, encodeLocation: e3.encodeLocation, go: (x) => e3.navigate(x), push: (x, C, D) => e3.navigate(x, { state: C, preventScrollReset: D?.preventScrollReset }), replace: (x, C, D) => e3.navigate(x, { replace: true, state: C, preventScrollReset: D?.preventScrollReset }) }), [e3]), N = e3.basename || "/", M = B.useMemo(() => ({ router: e3, navigator: E, static: false, basename: N, onError: r }), [e3, E, N, r]);
    return B.createElement(B.Fragment, null, B.createElement(Mr.Provider, { value: M }, B.createElement(Wr.Provider, { value: l }, B.createElement(Qi.Provider, { value: w.current }, B.createElement(Xi.Provider, { value: d }, B.createElement(En, { basename: N, location: l.location, navigationType: l.historyAction, navigator: E, useTransitions: n }, B.createElement(GE, { routes: e3.routes, manifest: e3.manifest, future: e3.future, state: l, isStatic: false, onError: r })))))), null);
  }
  function Uy(e3, t) {
    return { ...e3, navigation: t.navigation.state !== "idle" ? t.navigation : e3.navigation, revalidation: t.revalidation !== "idle" ? t.revalidation : e3.revalidation, actionData: t.navigation.state !== "submitting" ? t.actionData : e3.actionData, fetchers: t.fetchers };
  }
  function Kw({ routes: e3, manifest: t, future: r, state: n, isStatic: a, onError: i }) {
    return jw(e3, void 0, { manifest: t, state: n, isStatic: a, onError: i, future: r });
  }
  function tc({ basename: e3, children: t, initialEntries: r, initialIndex: n, useTransitions: a }) {
    let i = B.useRef();
    i.current == null && (i.current = Wu({ initialEntries: r, initialIndex: n, v5Compat: true }));
    let o = i.current, [l, s] = B.useState({ action: o.action, location: o.location }), u = B.useCallback((c) => {
      a === false ? s(c) : B.startTransition(() => s(c));
    }, [a]);
    return B.useLayoutEffect(() => o.listen(u), [o, u]), B.createElement(En, { basename: e3, children: t, location: l.location, navigationType: l.action, navigator: o, useTransitions: a });
  }
  function Xw({ to: e3, replace: t, state: r, relative: n }) {
    q(xn(), "<Navigate> may be used only in the context of a <Router> component.");
    let { static: a, navigator: i } = B.useContext(ht);
    ke(!a, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
    let { matches: o } = B.useContext(zt), { pathname: l } = qe(), s = bn(), u = bl(e3, Ku(o), l, n === "path");
    za(typeof e3 == "string" ? e3 : je(e3), i.createHref(u), cp(i), "reject");
    let c = JSON.stringify(u);
    return B.useEffect(() => {
      s(JSON.parse(c), { replace: t, state: r, relative: n });
    }, [s, c, n, t, r]), null;
  }
  function rc(e3) {
    return wp(e3.context);
  }
  function Ll(e3) {
    q(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
  }
  function En({ basename: e3 = "/", children: t = null, location: r, navigationType: n = "POP", navigator: a, static: i = false, useTransitions: o }) {
    q(!xn(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let l = e3.replace(/^\/*/, "/"), s = B.useMemo(() => ({ basename: l, navigator: a, static: i, useTransitions: o, future: {} }), [l, a, i, o]);
    typeof r == "string" && (r = St(r));
    let { pathname: u = "/", search: c = "", hash: d = "", state: f = null, key: p = "default", mask: v } = r, y = B.useMemo(() => {
      let g = Xe(u, l);
      return g == null ? null : { location: { pathname: g, search: c, hash: d, state: f, key: p, mask: v }, navigationType: n };
    }, [l, u, c, d, f, p, n, v]);
    return ke(y != null, `<Router basename="${l}"> is not able to match the URL "${u}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`), y == null ? null : B.createElement(ht.Provider, { value: s }, B.createElement(na.Provider, { children: t, value: y }));
  }
  function nc({ children: e3, location: t }) {
    return xp(qi(e3), t);
  }
  function Qw({ children: e3, errorElement: t, resolve: r }) {
    let n = B.useContext(Mr), a = B.useContext(Wr), i = B.useCallback((o, l) => {
      n && n.onError && a && n.onError(o, { location: a.location, params: a.matches[0]?.params || {}, pattern: mn(a.matches), errorInfo: l });
    }, [n, a]);
    return B.createElement(KE, { resolve: r, errorElement: t, onError: i }, B.createElement(XE, null, e3));
  }
  function XE({ children: e3 }) {
    let t = Rp(), r = typeof e3 == "function" ? e3(t) : e3;
    return B.createElement(B.Fragment, null, r);
  }
  function qi(e3, t = []) {
    let r = [];
    return B.Children.forEach(e3, (n, a) => {
      if (!B.isValidElement(n)) return;
      let i = [...t, a];
      if (n.type === B.Fragment) {
        r.push.apply(r, qi(n.props.children, i));
        return;
      }
      q(n.type === Ll, `[${typeof n.type == "string" ? n.type : n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), q(!n.props.index || !n.props.children, "An index route cannot have child routes.");
      let o = { id: n.props.id || i.join("-"), caseSensitive: n.props.caseSensitive, element: n.props.element, Component: n.props.Component, index: n.props.index, path: n.props.path, middleware: n.props.middleware, loader: n.props.loader, action: n.props.action, hydrateFallbackElement: n.props.hydrateFallbackElement, HydrateFallback: n.props.HydrateFallback, errorElement: n.props.errorElement, ErrorBoundary: n.props.ErrorBoundary, hasErrorBoundary: n.props.hasErrorBoundary === true || n.props.ErrorBoundary != null || n.props.errorElement != null, shouldRevalidate: n.props.shouldRevalidate, handle: n.props.handle, lazy: n.props.lazy };
      n.props.children && (o.children = qi(n.props.children, i)), r.push(o);
    }), r;
  }
  function Jw(e3) {
    return Hw(e3);
  }
  function e2() {
    return { params: Sl(), loaderData: Dl(), actionData: Nl(), matches: Cl() };
  }
  function t2({ children: e3 }) {
    let t = e2();
    return B.cloneElement(e3, t);
  }
  function ac(e3) {
    return function() {
      let r = e2();
      return B.createElement(e3, r);
    };
  }
  function r2() {
    return { params: Sl(), loaderData: Dl(), actionData: Nl() };
  }
  function n2({ children: e3 }) {
    let t = r2();
    return B.cloneElement(e3, t);
  }
  function ic(e3) {
    return function() {
      let r = r2();
      return B.createElement(e3, r);
    };
  }
  function a2() {
    return { params: Sl(), loaderData: Dl(), actionData: Nl(), error: Ha() };
  }
  function i2({ children: e3 }) {
    let t = a2();
    return B.cloneElement(e3, t);
  }
  function oc(e3) {
    return function() {
      let r = a2();
      return B.createElement(e3, r);
    };
  }
  function lc(e3) {
    return typeof HTMLElement < "u" && e3 instanceof HTMLElement;
  }
  function QE(e3) {
    return lc(e3) && e3.tagName.toLowerCase() === "button";
  }
  function ZE(e3) {
    return lc(e3) && e3.tagName.toLowerCase() === "form";
  }
  function JE(e3) {
    return lc(e3) && e3.tagName.toLowerCase() === "input";
  }
  function eR(e3) {
    return !!(e3.metaKey || e3.altKey || e3.ctrlKey || e3.shiftKey);
  }
  function tR(e3, t) {
    return e3.button === 0 && (!t || t === "_self") && !eR(e3);
  }
  function vl(e3 = "") {
    return new URLSearchParams(typeof e3 == "string" || Array.isArray(e3) || e3 instanceof URLSearchParams ? e3 : Object.keys(e3).reduce((t, r) => {
      let n = e3[r];
      return t.concat(Array.isArray(n) ? n.map((a) => [r, a]) : [[r, n]]);
    }, []));
  }
  function rR(e3, t) {
    let r = vl(e3);
    return t && t.forEach((n, a) => {
      r.has(a) || t.getAll(a).forEach((i) => {
        r.append(a, i);
      });
    }), r;
  }
  function nR() {
    if (Pu === null) try {
      new FormData(document.createElement("form"), 0), Pu = false;
    } catch {
      Pu = true;
    }
    return Pu;
  }
  function Uh(e3) {
    return e3 != null && !aR.has(e3) ? (ke(false, `"${e3}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${zu}"`), null) : e3;
  }
  function iR(e3, t) {
    let r, n, a, i, o;
    if (ZE(e3)) {
      let l = e3.getAttribute("action");
      n = l ? Xe(l, t) : null, r = e3.getAttribute("method") || $u, a = Uh(e3.getAttribute("enctype")) || zu, i = new FormData(e3);
    } else if (QE(e3) || JE(e3) && (e3.type === "submit" || e3.type === "image")) {
      let l = e3.form;
      if (l == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
      let s = e3.getAttribute("formaction") || l.getAttribute("action");
      if (n = s ? Xe(s, t) : null, r = e3.getAttribute("formmethod") || l.getAttribute("method") || $u, a = Uh(e3.getAttribute("formenctype")) || Uh(l.getAttribute("enctype")) || zu, i = new FormData(l, e3), !nR()) {
        let { name: u, type: c, value: d } = e3;
        if (c === "image") {
          let f = u ? `${u}.` : "";
          i.append(`${f}x`, "0"), i.append(`${f}y`, "0");
        } else u && i.append(u, d);
      }
    } else {
      if (lc(e3)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
      r = $u, n = null, a = zu, o = e3;
    }
    return i && a === "text/plain" && (o = i, i = void 0), { action: n, method: r.toLowerCase(), encType: a, formData: i, body: o };
  }
  function oR() {
    let e3 = new TextDecoder(), t = "";
    return new TransformStream({ transform(r, n) {
      let a = e3.decode(r, { stream: true }), i = (t + a).split(`
`);
      t = i.pop() || "";
      for (let o of i) n.enqueue(o);
    }, flush(r) {
      t && r.enqueue(t);
    } });
  }
  async function Bh(e3) {
    let { indices: t } = this, r = t.get(e3);
    if (r) return [r];
    if (e3 === void 0) return Lp;
    if (e3 === null) return Hu;
    if (Number.isNaN(e3)) return Cp;
    if (e3 === Number.POSITIVE_INFINITY) return Mp;
    if (e3 === Number.NEGATIVE_INFINITY) return Dp;
    if (e3 === 0 && 1 / e3 < 0) return Np;
    let n = this.index++;
    t.set(e3, n);
    let a = [[e3, n]];
    return await uR.call(this, a), n;
  }
  async function uR(e3) {
    let { deferred: t, indices: r, plugins: n, postPlugins: a } = this, i = this.stringified, o = Hh(), l = (u) => {
      let c = r.get(u);
      if (c) return [c];
      if (u === void 0) return Lp;
      if (u === null) return Hu;
      if (Number.isNaN(u)) return Cp;
      if (u === Number.POSITIVE_INFINITY) return Mp;
      if (u === Number.NEGATIVE_INFINITY) return Dp;
      if (u === 0 && 1 / u < 0) return Np;
      let d = this.index++;
      return r.set(u, d), e3.push([u, d]), d;
    }, s = 0;
    for (; e3.length > 0; ) {
      let u = Hh();
      ++s % 6e3 === 0 && u - o >= lR && (await sR(), o = Hh());
      let [c, d] = e3.pop(), f = (v) => Object.keys(v).map((y) => `"_${l(y)}":${l(v[y])}`).join(","), p = null;
      switch (typeof c) {
        case "boolean":
        case "number":
        case "string":
          i[d] = JSON.stringify(c);
          break;
        case "bigint":
          i[d] = `["${l2}","${c}"]`;
          break;
        case "symbol": {
          let v = Symbol.keyFor(c);
          v ? i[d] = `["${d2}",${JSON.stringify(v)}]` : p = new Error("Cannot encode symbol unless created with Symbol.for()");
          break;
        }
        case "object": {
          if (!c) {
            i[d] = `${Hu}`;
            break;
          }
          let v = Array.isArray(c), y = false;
          if (!v && n) for (let g of n) {
            let m = g(c);
            if (Array.isArray(m)) {
              y = true;
              let [h, ...w] = m;
              i[d] = `[${JSON.stringify(h)}`, w.length > 0 && (i[d] += `,${w.map((b) => l(b)).join(",")}`), i[d] += "]";
              break;
            }
          }
          if (!y) {
            let g = v ? "[" : "{";
            if (v) {
              for (let m = 0; m < c.length; m++) g += (m ? "," : "") + (m in c ? l(c[m]) : o2);
              i[d] = `${g}]`;
            } else if (c instanceof Date) {
              let m = c.getTime();
              i[d] = `["${s2}",${Number.isNaN(m) ? JSON.stringify("invalid") : m}]`;
            } else c instanceof URL ? i[d] = `["${f2}",${JSON.stringify(c.href)}]` : c instanceof RegExp ? i[d] = `["${c2}",${JSON.stringify(c.source)},${JSON.stringify(c.flags)}]` : c instanceof Set ? c.size > 0 ? i[d] = `["${Qh}",${[...c].map((m) => l(m)).join(",")}]` : i[d] = `["${Qh}"]` : c instanceof Map ? c.size > 0 ? i[d] = `["${Xh}",${[...c].flatMap(([m, h]) => [l(m), l(h)]).join(",")}]` : i[d] = `["${Xh}"]` : c instanceof Promise ? (i[d] = `["${Hi}",${d}]`, t[d] = c) : c instanceof Error ? (i[d] = `["${Ui}",${JSON.stringify(c.message)}`, c.name !== "Error" && (i[d] += `,${JSON.stringify(c.name)}`), i[d] += "]") : Object.getPrototypeOf(c) === null ? i[d] = `["${u2}",{${f(c)}}]` : dR(c) ? i[d] = `{${f(c)}}` : p = new Error("Cannot encode object with prototype");
          }
          break;
        }
        default: {
          let v = Array.isArray(c), y = false;
          if (!v && n) for (let g of n) {
            let m = g(c);
            if (Array.isArray(m)) {
              y = true;
              let [h, ...w] = m;
              i[d] = `[${JSON.stringify(h)}`, w.length > 0 && (i[d] += `,${w.map((b) => l(b)).join(",")}`), i[d] += "]";
              break;
            }
          }
          y || (p = new Error("Cannot encode function or unexpected type"));
        }
      }
      if (p) {
        let v = false;
        if (a) for (let y of a) {
          let g = y(c);
          if (Array.isArray(g)) {
            v = true;
            let [m, ...h] = g;
            i[d] = `[${JSON.stringify(m)}`, h.length > 0 && (i[d] += `,${h.map((w) => l(w)).join(",")}`), i[d] += "]";
            break;
          }
        }
        if (!v) throw p;
      }
    }
  }
  function dR(e3) {
    let t = Object.getPrototypeOf(e3);
    return t === Object.prototype || t === null || Object.getOwnPropertyNames(t).sort().join("\0") === cR;
  }
  function Jh(e3) {
    let { hydrated: t, values: r } = this;
    if (typeof e3 == "number") return Hy.call(this, e3);
    if (!Array.isArray(e3) || !e3.length) throw new SyntaxError();
    let n = r.length;
    for (let a of e3) r.push(a);
    return t.length = r.length, Hy.call(this, n);
  }
  function Hy(e3) {
    let { hydrated: t, values: r, deferred: n, plugins: a } = this, i, o = [[e3, (s) => {
      i = s;
    }]], l = [];
    for (; o.length > 0; ) {
      let [s, u] = o.pop();
      switch (s) {
        case Lp:
          u(void 0);
          continue;
        case Hu:
          u(null);
          continue;
        case Cp:
          u(NaN);
          continue;
        case Mp:
          u(1 / 0);
          continue;
        case Dp:
          u(-1 / 0);
          continue;
        case Np:
          u(-0);
          continue;
      }
      if (t[s]) {
        u(t[s]);
        continue;
      }
      let c = r[s];
      if (!c || typeof c != "object") {
        t[s] = c, u(c);
        continue;
      }
      if (Array.isArray(c)) if (typeof c[0] == "string") {
        let [d, f, p] = c;
        switch (d) {
          case s2:
            u(t[s] = new Date(f));
            continue;
          case f2:
            u(t[s] = new URL(f));
            continue;
          case l2:
            u(t[s] = BigInt(f));
            continue;
          case c2:
            u(t[s] = new RegExp(f, p));
            continue;
          case d2:
            u(t[s] = Symbol.for(f));
            continue;
          case Qh:
            let v = /* @__PURE__ */ new Set();
            t[s] = v;
            for (let b = c.length - 1; b > 0; b--) o.push([c[b], (E) => {
              v.add(E);
            }]);
            u(v);
            continue;
          case Xh:
            let y = /* @__PURE__ */ new Map();
            t[s] = y;
            for (let b = c.length - 2; b > 0; b -= 2) {
              let E = [];
              o.push([c[b + 1], (N) => {
                E[1] = N;
              }]), o.push([c[b], (N) => {
                E[0] = N;
              }]), l.push(() => {
                y.set(E[0], E[1]);
              });
            }
            u(y);
            continue;
          case u2:
            let g = /* @__PURE__ */ Object.create(null);
            t[s] = g;
            for (let b of Object.keys(f).reverse()) {
              let E = [];
              o.push([f[b], (N) => {
                E[1] = N;
              }]), o.push([Number(b.slice(1)), (N) => {
                E[0] = N;
              }]), l.push(() => {
                g[E[0]] = E[1];
              });
            }
            u(g);
            continue;
          case Hi:
            if (t[f]) u(t[s] = t[f]);
            else {
              let b = new h2();
              n[f] = b, u(t[s] = b.promise);
            }
            continue;
          case Ui:
            let [, m, h] = c, w = h && _u && up.includes(h) && h in _u && typeof _u[h] == "function" ? new _u[h](m) : new Error(m);
            t[s] = w, u(w);
            continue;
          case Zh:
            u(t[s] = t[f]);
            continue;
          default:
            if (Array.isArray(a)) {
              let b = [], E = c.slice(1);
              for (let N = 0; N < E.length; N++) {
                let M = E[N];
                o.push([M, (x) => {
                  b[N] = x;
                }]);
              }
              l.push(() => {
                for (let N of a) {
                  let M = N(c[0], ...b);
                  if (M) {
                    u(t[s] = M.value);
                    return;
                  }
                }
                throw new SyntaxError();
              });
              continue;
            }
            throw new SyntaxError();
        }
      } else {
        let d = [];
        t[s] = d;
        for (let f = 0; f < c.length; f++) {
          let p = c[f];
          p !== o2 && o.push([p, (v) => {
            d[f] = v;
          }]);
        }
        u(d);
        continue;
      }
      else {
        let d = {};
        t[s] = d;
        for (let f of Object.keys(c).reverse()) {
          let p = [];
          o.push([c[f], (v) => {
            p[1] = v;
          }]), o.push([Number(f.slice(1)), (v) => {
            p[0] = v;
          }]), l.push(() => {
            d[p[0]] = p[1];
          });
        }
        u(d);
        continue;
      }
    }
    for (; l.length > 0; ) l.pop()();
    return i;
  }
  async function fR(e3, t) {
    let { plugins: r } = t ?? {}, n = new h2(), a = e3.pipeThrough(oR()).getReader(), i = { values: [], hydrated: [], deferred: {}, plugins: r }, o = await hR.call(i, a), l = n.promise;
    return o.done ? n.resolve() : l = pR.call(i, a).then(n.resolve).catch((s) => {
      for (let u of Object.values(i.deferred)) u.reject(s);
      n.reject(s);
    }), { done: l.then(() => a.closed), value: o.value };
  }
  async function hR(e3) {
    let t = await e3.read();
    if (!t.value) throw new SyntaxError();
    let r;
    try {
      r = JSON.parse(t.value);
    } catch {
      throw new SyntaxError();
    }
    return { done: t.done, value: Jh.call(this, r) };
  }
  async function pR(e3) {
    let t = await e3.read();
    for (; !t.done; ) {
      if (!t.value) continue;
      let r = t.value;
      switch (r[0]) {
        case Hi: {
          let n = r.indexOf(":"), a = Number(r.slice(1, n)), i = this.deferred[a];
          if (!i) throw new Error(`Deferred ID ${a} not found in stream`);
          let o = r.slice(n + 1), l;
          try {
            l = JSON.parse(o);
          } catch {
            throw new SyntaxError();
          }
          let s = Jh.call(this, l);
          i.resolve(s);
          break;
        }
        case Ui: {
          let n = r.indexOf(":"), a = Number(r.slice(1, n)), i = this.deferred[a];
          if (!i) throw new Error(`Deferred ID ${a} not found in stream`);
          let o = r.slice(n + 1), l;
          try {
            l = JSON.parse(o);
          } catch {
            throw new SyntaxError();
          }
          let s = Jh.call(this, l);
          i.reject(s);
          break;
        }
        default:
          throw new SyntaxError();
      }
      t = await e3.read();
    }
  }
  function p2(e3, t) {
    let { onComplete: r, plugins: n, postPlugins: a, signal: i } = t ?? {}, o = { deferred: {}, index: 0, indices: /* @__PURE__ */ new Map(), stringified: [], plugins: n, postPlugins: a, signal: i }, l = new TextEncoder(), s = 0;
    return new ReadableStream({ async start(c) {
      let d = await Bh.call(o, e3);
      if (Array.isArray(d)) throw new Error("This should never happen");
      d < 0 ? c.enqueue(l.encode(`${d}
`)) : (c.enqueue(l.encode(`[${o.stringified.join(",")}]
`)), s = o.stringified.length - 1);
      let f = /* @__PURE__ */ new WeakSet(), p = Promise.resolve();
      if (Object.keys(o.deferred).length) {
        let v, y = new Promise((g, m) => {
          if (v = g, i) {
            let h = () => m(i.reason || new Error("Signal was aborted."));
            i.aborted ? h() : i.addEventListener("abort", (w) => {
              h();
            });
          }
        });
        for (; Object.keys(o.deferred).length > 0; ) {
          for (let [g, m] of Object.entries(o.deferred)) f.has(m) || f.add(o.deferred[Number(g)] = Promise.race([y, m]).then((h) => (p = p.then(async () => {
            let w = await Bh.call(o, h);
            if (Array.isArray(w)) c.enqueue(l.encode(`${Hi}${g}:[["${Zh}",${w[0]}]]
`)), o.index++, s++;
            else if (w < 0) c.enqueue(l.encode(`${Hi}${g}:${w}
`));
            else {
              let b = o.stringified.slice(s + 1).join(",");
              c.enqueue(l.encode(`${Hi}${g}:[${b}]
`)), s = o.stringified.length - 1;
            }
          }), p), (h) => (p = p.then(async () => {
            (!h || typeof h != "object" || !(h instanceof Error)) && (h = new Error("An unknown error occurred"));
            let w = await Bh.call(o, h);
            if (Array.isArray(w)) c.enqueue(l.encode(`${Ui}${g}:[["${Zh}",${w[0]}]]
`)), o.index++, s++;
            else if (w < 0) c.enqueue(l.encode(`${Ui}${g}:${w}
`));
            else {
              let b = o.stringified.slice(s + 1).join(",");
              c.enqueue(l.encode(`${Ui}${g}:[${b}]
`)), s = o.stringified.length - 1;
            }
          }), p)).finally(() => {
            delete o.deferred[Number(g)];
          }));
          await Promise.race(Object.values(o.deferred));
        }
        v();
      }
      await Promise.all(Object.values(o.deferred)), await p, c.close(), r?.();
    } });
  }
  async function m2(e3) {
    let t = { signal: e3.signal };
    if (e3.method !== "GET") {
      t.method = e3.method;
      let r = e3.headers.get("Content-Type");
      r && /\bapplication\/json\b/.test(r) ? (t.headers = { "Content-Type": r }, t.body = JSON.stringify(await e3.json())) : r && /\btext\/plain\b/.test(r) ? (t.headers = { "Content-Type": r }, t.body = await e3.text()) : r && /\bapplication\/x-www-form-urlencoded\b/.test(r) ? t.body = new URLSearchParams(await e3.text()) : t.body = await e3.formData();
    }
    return t;
  }
  function wn(e3) {
    return e3.replace(gR, (t) => mR[t]);
  }
  function Rt(e3, t) {
    if (e3 === false || e3 === null || typeof e3 > "u") throw new Error(t);
  }
  function _p({ context: e3, identifier: t, reader: r, textDecoder: n, nonce: a }) {
    if (!e3.renderMeta || !e3.renderMeta.didRenderScripts) return null;
    e3.renderMeta.streamCache || (e3.renderMeta.streamCache = {});
    let { streamCache: i } = e3.renderMeta, o = i[t];
    if (o || (o = i[t] = r.read().then((c) => {
      i[t].result = { done: c.done, value: n.decode(c.value, { stream: true }) };
    }).catch((c) => {
      i[t].error = c;
    })), o.error) throw o.error;
    if (o.result === void 0) throw o;
    let { done: l, value: s } = o.result, u = s ? hr.createElement("script", { nonce: a, dangerouslySetInnerHTML: { __html: `window.__reactRouterContext.streamController.enqueue(${wn(JSON.stringify(s))});` } }) : null;
    return l ? hr.createElement(hr.Fragment, null, u, hr.createElement("script", { nonce: a, dangerouslySetInnerHTML: { __html: "window.__reactRouterContext.streamController.close();" } })) : hr.createElement(hr.Fragment, null, u, hr.createElement(hr.Suspense, null, hr.createElement(_p, { context: e3, identifier: t + 1, reader: r, textDecoder: n, nonce: a })));
  }
  function uc(e3, t, r, n, a, i) {
    let o = v2(e3, (l) => {
      let s = t.routes[l.route.id];
      return Rt(s, "Route not found in manifest"), { hasLoader: s.hasLoader, hasClientLoader: s.hasClientLoader };
    }, kR, n, a, i);
    return async (l) => l.runClientMiddleware(o);
  }
  function v2(e3, t, r, n, a, i, o = () => true) {
    return async (l) => {
      let { request: s, matches: u, fetcherKey: c } = l, d = e3();
      if (s.method !== "GET") return vR(l, r, a, i);
      let f = u.some((p) => {
        let { hasLoader: v, hasClientLoader: y } = t(p);
        return p.shouldCallHandler() && v && !y;
      });
      return !n && !f ? yR(l, t, r, a, i) : c ? bR(l, r, a, i) : wR(l, d, t, r, n, a, i, o);
    };
  }
  async function vR(e3, t, r, n) {
    let a = e3.matches.find((l) => l.shouldCallHandler());
    Rt(a, "No action match found");
    let i, o = await a.resolve(async (l) => await l(async () => {
      let { data: u, status: c } = await t(e3, r, n, [a.route.id]);
      return i = c, yl(u, a.route.id);
    }));
    return Ae(o.result) || Ue(o.result) || gn(o.result) ? { [a.route.id]: o } : { [a.route.id]: { type: o.type, result: sp(o.result, i) } };
  }
  async function yR(e3, t, r, n, a) {
    let i = e3.matches.filter((l) => l.shouldCallHandler()), o = {};
    return await Promise.all(i.map((l) => l.resolve(async (s) => {
      try {
        let { hasClientLoader: u } = t(l), c = l.route.id, d = u ? await s(async () => {
          let { data: f } = await r(e3, n, a, [c]);
          return yl(f, c);
        }) : await s();
        o[l.route.id] = { type: "data", result: d };
      } catch (u) {
        o[l.route.id] = { type: "error", result: u };
      }
    }))), o;
  }
  async function wR(e3, t, r, n, a, i, o, l = () => true) {
    let s = /* @__PURE__ */ new Set(), u = false, c = e3.matches.map(() => By()), d = By(), f = {}, p = Promise.all(e3.matches.map(async (y, g) => y.resolve(async (m) => {
      c[g].resolve();
      let h = y.route.id, { hasLoader: w, hasClientLoader: b } = r(y), E = !y.shouldRevalidateArgs || y.shouldRevalidateArgs.actionStatus == null || y.shouldRevalidateArgs.actionStatus < 400;
      if (!y.shouldCallHandler(E)) {
        u || (u = y.shouldRevalidateArgs != null && w);
        return;
      }
      if (l(y) && b) {
        w && (u = true);
        try {
          let M = await m(async () => {
            let { data: x } = await n(e3, i, o, [h]);
            return yl(x, h);
          });
          f[h] = { type: "data", result: M };
        } catch (M) {
          f[h] = { type: "error", result: M };
        }
        return;
      }
      w && s.add(h);
      try {
        let M = await m(async () => {
          let x = await d.promise;
          return yl(x, h);
        });
        f[h] = { type: "data", result: M };
      } catch (M) {
        f[h] = { type: "error", result: M };
      }
    })));
    if (await Promise.all(c.map((y) => y.promise)), (!t.state.initialized && t.state.navigation.state === "idle" || s.size === 0) && !window.__reactRouterHdrActive) d.resolve({ routes: {} });
    else {
      let y = a && u && s.size > 0 ? [...s.keys()] : void 0;
      try {
        let g = await n(e3, i, o, y);
        d.resolve(g.data);
      } catch (g) {
        d.reject(g);
      }
    }
    return await p, await xR(d.promise, e3.matches, s, f), f;
  }
  async function xR(e3, t, r, n) {
    try {
      let a, i = await e3;
      if ("routes" in i) {
        for (let o of t) if (o.route.id in i.routes) {
          let l = i.routes[o.route.id];
          if ("error" in l) {
            a = l.error, n[o.route.id]?.result == null && (n[o.route.id] = { type: "error", result: a });
            break;
          }
        }
      }
      a !== void 0 && Array.from(r.values()).forEach((o) => {
        n[o].result instanceof g2 && (n[o].result = a);
      });
    } catch {
    }
  }
  async function bR(e3, t, r, n) {
    let a = e3.matches.find((l) => l.shouldCallHandler());
    Rt(a, "No fetcher match found");
    let i = a.route.id, o = await a.resolve(async (l) => l(async () => {
      let { data: s } = await t(e3, r, n, [i]);
      return yl(s, i);
    }));
    return { [a.route.id]: o };
  }
  function y2(e3) {
    let t = e3.searchParams.getAll("index");
    e3.searchParams.delete("index");
    let r = [];
    for (let n of t) n && r.push(n);
    for (let n of r) e3.searchParams.append("index", n);
    return e3;
  }
  function cc(e3, t, r, n) {
    let a = typeof e3 == "string" ? new URL(e3, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e3;
    return r ? a.pathname.endsWith("/") ? a.pathname = `${a.pathname}_.${n}` : a.pathname = `${a.pathname}.${n}` : a.pathname === "/" ? a.pathname = `_root.${n}` : t && Xe(a.pathname, t) === "/" ? a.pathname = `${Bi(t)}/_root.${n}` : a.pathname = `${Bi(a.pathname)}.${n}`, a;
  }
  async function kR(e3, t, r, n) {
    let { request: a } = e3, i = cc(a.url, t, r, "data");
    a.method === "GET" && (i = y2(i), n && i.searchParams.set("_routes", n.join(",")));
    let o = await fetch(i, await m2(a));
    if (o.status >= 400 && !o.headers.has("X-Remix-Response")) throw new it(o.status, o.statusText, await o.text());
    if (o.status === 204 && o.headers.has("X-Remix-Redirect")) return { status: sc, data: { redirect: { redirect: o.headers.get("X-Remix-Redirect"), status: Number(o.headers.get("X-Remix-Status") || "302"), revalidate: o.headers.get("X-Remix-Revalidate") === "true", reload: o.headers.get("X-Remix-Reload-Document") === "true", replace: o.headers.get("X-Remix-Replace") === "true" } } };
    if (Pp.has(o.status)) {
      let l = {};
      return n && a.method !== "GET" && (l[n[0]] = { data: void 0 }), { status: o.status, data: { routes: l } };
    }
    Rt(o.body, "No response body to decode");
    try {
      let l = await Va(o.body, window), s;
      if (a.method === "GET") {
        let u = l.value;
        Nr in u ? s = { redirect: u[Nr] } : s = { routes: u };
      } else {
        let u = l.value, c = n?.[0];
        Rt(c, "No routeId found for single fetch call decoding"), "redirect" in u ? s = { redirect: u } : s = { routes: { [c]: u } };
      }
      return { status: o.status, data: s };
    } catch {
      throw new Error("Unable to decode turbo-stream response");
    }
  }
  function Va(e3, t) {
    return fR(e3, { plugins: [(r, ...n) => {
      if (r === "SanitizedError") {
        let [a, i, o] = n, l = Error;
        a && up.includes(a) && a in t && typeof t[a] == "function" && (l = t[a]);
        let s = new l(i);
        return s.stack = o, { value: s };
      }
      if (r === "ErrorResponse") {
        let [a, i, o] = n;
        return { value: new it(i, o, a) };
      }
      if (r === "SingleFetchRedirect") return { value: { [Nr]: n[0] } };
      if (r === "SingleFetchClassInstance") return { value: n[0] };
      if (r === "SingleFetchFallback") return { value: void 0 };
    }] });
  }
  function yl(e3, t) {
    if ("redirect" in e3) {
      let { redirect: n, revalidate: a, reload: i, replace: o, status: l } = e3.redirect;
      throw Ia(n, { status: l, headers: { ...a ? { "X-Remix-Revalidate": "yes" } : null, ...i ? { "X-Remix-Reload-Document": "yes" } : null, ...o ? { "X-Remix-Replace": "yes" } : null } });
    }
    let r = e3.routes[t];
    if (r == null) throw new g2(`No result found for routeId "${t}"`);
    if ("error" in r) throw r.error;
    if ("data" in r) return r.data;
    throw new Error(`Invalid response found for routeId "${t}"`);
  }
  function By() {
    let e3, t, r = new Promise((n, a) => {
      e3 = async (i) => {
        n(i);
        try {
          await r;
        } catch {
        }
      }, t = async (i) => {
        a(i);
        try {
          await r;
        } catch {
        }
      };
    });
    return { promise: r, resolve: e3, reject: t };
  }
  async function w2(e3, t) {
    if (e3.id in t) return t[e3.id];
    try {
      let r = await import(e3.module);
      return t[e3.id] = r, r;
    } catch (r) {
      if (console.error(`Error loading route module \`${e3.module}\`, reloading page...`), console.error(r), window.__reactRouterContext && window.__reactRouterContext.isSpaMode && import_meta.hot) throw r;
      return window.location.reload(), new Promise(() => {
      });
    }
  }
  function ER(e3, t, r) {
    let n = e3.map((i) => {
      let o = t[i.route.id], l = r.routes[i.route.id];
      return [l && l.css ? l.css.map((s) => ({ rel: "stylesheet", href: s })) : [], o?.links?.() || []];
    }).flat(2), a = Ap(e3, r);
    return E2(n, a);
  }
  function x2(e3) {
    return e3.css ? e3.css.map((t) => ({ rel: "stylesheet", href: t })) : [];
  }
  async function RR(e3) {
    if (!e3.css) return;
    let t = x2(e3);
    await Promise.all(t.map(k2));
  }
  async function b2(e3, t) {
    if (!e3.css && !t.links || !MR()) return;
    let r = [];
    if (e3.css && r.push(...x2(e3)), t.links && r.push(...t.links()), r.length === 0) return;
    let n = [];
    for (let a of r) !Tp(a) && a.rel === "stylesheet" && n.push({ ...a, rel: "preload", as: "style" });
    await Promise.all(n.map(k2));
  }
  async function k2(e3) {
    return new Promise((t) => {
      if (e3.media && !window.matchMedia(e3.media).matches || document.querySelector(`link[rel="stylesheet"][href="${e3.href}"]`)) return t();
      let r = document.createElement("link");
      Object.assign(r, e3);
      function n() {
        document.head.contains(r) && document.head.removeChild(r);
      }
      r.onload = () => {
        n(), t();
      }, r.onerror = () => {
        n(), t();
      }, document.head.appendChild(r);
    });
  }
  function Tp(e3) {
    return e3 != null && typeof e3.page == "string";
  }
  function SR(e3) {
    return e3 == null ? false : e3.href == null ? e3.rel === "preload" && typeof e3.imageSrcSet == "string" && typeof e3.imageSizes == "string" : typeof e3.rel == "string" && typeof e3.href == "string";
  }
  async function CR(e3, t, r) {
    let n = await Promise.all(e3.map(async (a) => {
      let i = t.routes[a.route.id];
      if (i) {
        let o = await w2(i, r);
        return o.links ? o.links() : [];
      }
      return [];
    }));
    return E2(n.flat(1).filter(SR).filter((a) => a.rel === "stylesheet" || a.rel === "preload").map((a) => a.rel === "stylesheet" ? { ...a, rel: "prefetch", as: "style" } : { ...a, rel: "prefetch" }));
  }
  function Vy(e3, t, r, n, a, i) {
    let o = (s, u) => r[u] ? s.route.id !== r[u].route.id : true, l = (s, u) => r[u].pathname !== s.pathname || r[u].route.path?.endsWith("*") && r[u].params["*"] !== s.params["*"];
    return i === "assets" ? t.filter((s, u) => o(s, u) || l(s, u)) : i === "data" ? t.filter((s, u) => {
      let c = n.routes[s.route.id];
      if (!c || !c.hasLoader) return false;
      if (o(s, u) || l(s, u)) return true;
      if (s.route.shouldRevalidate) {
        let d = s.route.shouldRevalidate({ currentUrl: new URL(a.pathname + a.search + a.hash, window.origin), currentParams: r[0]?.params || {}, nextUrl: new URL(e3, window.origin), nextParams: s.params, defaultShouldRevalidate: true });
        if (typeof d == "boolean") return d;
      }
      return true;
    }) : [];
  }
  function Ap(e3, t, { includeHydrateFallback: r } = {}) {
    return DR(e3.map((n) => {
      let a = t.routes[n.route.id];
      if (!a) return [];
      let i = [a.module];
      return a.clientActionModule && (i = i.concat(a.clientActionModule)), a.clientLoaderModule && (i = i.concat(a.clientLoaderModule)), r && a.hydrateFallbackModule && (i = i.concat(a.hydrateFallbackModule)), a.imports && (i = i.concat(a.imports)), i;
    }).flat(1));
  }
  function DR(e3) {
    return [...new Set(e3)];
  }
  function NR(e3) {
    let t = {}, r = Object.keys(e3).sort();
    for (let n of r) t[n] = e3[n];
    return t;
  }
  function E2(e3, t) {
    let r = /* @__PURE__ */ new Set(), n = new Set(t);
    return e3.reduce((a, i) => {
      if (t && !Tp(i) && i.as === "script" && i.href && n.has(i.href)) return a;
      let l = JSON.stringify(NR(i));
      return r.has(l) || (r.add(l), a.push({ key: l, link: i })), a;
    }, []);
  }
  function MR() {
    if (Tu !== void 0) return Tu;
    let e3 = document.createElement("link");
    return Tu = e3.relList.supports("preload"), e3 = null, Tu;
  }
  function LR() {
    let { nonce: e3 } = qr();
    return ep.createElement(tp, { title: "Loading...", renderScripts: true }, Vr ? ep.createElement("script", { nonce: e3, dangerouslySetInnerHTML: { __html: `
              console.log(
                "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this " +
                "when your app is loading JS modules and/or running \`clientLoader\` " +
                "functions. Check out https://reactrouter.com/start/framework/route-module#hydratefallback " +
                "for more information."
              );
            ` } }) : null);
  }
  function Fp(e3) {
    let t = {};
    return Object.values(e3).forEach((r) => {
      if (r) {
        let n = r.parentId || "";
        t[n] || (t[n] = []), t[n].push(r);
      }
    }), t;
  }
  function S2(e3, t, r) {
    let n = C2(t), a = t.HydrateFallback && (!r || e3.id === "root") ? t.HydrateFallback : e3.id === "root" ? LR : void 0, i = t.ErrorBoundary ? t.ErrorBoundary : e3.id === "root" ? () => Jn.createElement(_2, { error: Ha() }) : void 0;
    return e3.id === "root" && t.Layout ? { ...n ? { element: Jn.createElement(t.Layout, null, Jn.createElement(n, null)) } : { Component: n }, ...i ? { errorElement: Jn.createElement(t.Layout, null, Jn.createElement(i, null)) } : { ErrorBoundary: i }, ...a ? { hydrateFallbackElement: Jn.createElement(t.Layout, null, Jn.createElement(a, null)) } : { HydrateFallback: a } } : { Component: n, ErrorBoundary: i, HydrateFallback: a };
  }
  function $p(e3, t, r, n, a = "", i = Fp(e3), o = Promise.resolve({ Component: () => null })) {
    return (i[a] || []).map((l) => {
      let s = t[l.id];
      Rt(s, "No `routeModule` available to create server routes");
      let u = { ...S2(l, s, n), caseSensitive: l.caseSensitive, id: l.id, index: l.index, path: l.path, handle: s.handle, lazy: n ? () => o : void 0, loader: l.hasLoader || l.hasClientLoader ? () => null : void 0 }, c = $p(e3, t, r, n, l.id, i, o);
      return c.length > 0 && (u.children = c), u;
    });
  }
  function dc(e3, t, r, n, a, i) {
    return Wa(t, r, n, a, i, "", Fp(t), e3);
  }
  function Au(e3, t) {
    if (e3 === "loader" && !t.hasLoader || e3 === "action" && !t.hasAction) {
      let n = `You are trying to call ${e3 === "action" ? "serverAction()" : "serverLoader()"} on a route that does not have a server ${e3} (routeId: "${t.id}")`;
      throw console.error(n), new it(400, "Bad Request", new Error(n), true);
    }
  }
  function Ou(e3, t) {
    let r = e3 === "clientAction" ? "a" : "an", n = `Route "${t}" does not have ${r} ${e3}, but you are trying to submit to it. To fix this, please add ${r} \`${e3}\` function to the route`;
    throw console.error(n), new it(405, "Method Not Allowed", new Error(n), true);
  }
  function Wa(e3, t, r, n, a, i = "", o = Fp(e3), l) {
    return (o[i] || []).map((s) => {
      let u = t[s.id];
      function c(h) {
        return Rt(typeof h == "function", "No single fetch function available for route handler"), h();
      }
      function d(h) {
        return s.hasLoader ? c(h) : Promise.resolve(null);
      }
      function f(h) {
        if (!s.hasAction) throw Ou("action", s.id);
        return c(h);
      }
      function p(h) {
        import(h);
      }
      function v(h) {
        h.clientActionModule && p(h.clientActionModule), h.clientLoaderModule && p(h.clientLoaderModule);
      }
      async function y(h) {
        let w = t[s.id], b = w ? b2(s, w) : Promise.resolve();
        try {
          return h();
        } finally {
          await b;
        }
      }
      let g = { id: s.id, index: s.index, path: s.path };
      if (u) {
        Object.assign(g, { ...g, ...S2(s, u, a), middleware: u.clientMiddleware, handle: u.handle, shouldRevalidate: Wy(g.path, u, s, n, l) });
        let h = r && r.loaderData && s.id in r.loaderData, w = h ? r?.loaderData?.[s.id] : void 0, b = r && r.errors && s.id in r.errors, E = b ? r?.errors?.[s.id] : void 0, N = l == null && (u.clientLoader?.hydrate === true || !s.hasLoader);
        g.loader = async ({ request: M, params: x, context: C, pattern: D, url: T }, P) => {
          let _ = N;
          return N = false, await y(async () => (Rt(u, "No `routeModule` available for critical-route loader"), u.clientLoader ? u.clientLoader({ request: M, params: x, context: C, pattern: D, url: T, async serverLoader() {
            if (Au("loader", s), _) {
              if (h) return w;
              if (b) throw E;
            }
            return d(P);
          } }) : d(P)));
        }, g.loader.hydrate = aa(s.id, u.clientLoader, s.hasLoader, a), g.action = ({ request: M, params: x, context: C, pattern: D, url: T }, P) => y(async () => {
          if (Rt(u, "No `routeModule` available for critical-route action"), !u.clientAction) {
            if (a) throw Ou("clientAction", s.id);
            return f(P);
          }
          return u.clientAction({ request: M, params: x, context: C, pattern: D, url: T, async serverAction() {
            return Au("action", s), f(P);
          } });
        });
      } else {
        s.hasClientLoader || (g.loader = (b, E) => y(() => d(E))), s.hasClientAction || (g.action = (b, E) => y(() => {
          if (a) throw Ou("clientAction", s.id);
          return f(E);
        }));
        let h;
        async function w() {
          return h ? await h : (h = (async () => {
            (s.clientLoaderModule || s.clientActionModule) && await new Promise((E) => setTimeout(E, 0));
            let b = _R(s, t);
            return v(s), await b;
          })(), await h);
        }
        g.lazy = { loader: s.hasClientLoader ? async () => {
          let { clientLoader: b } = s.clientLoaderModule ? await import(s.clientLoaderModule) : await w();
          return Rt(b, "No `clientLoader` export found"), (E, N) => b({ ...E, async serverLoader() {
            return Au("loader", s), d(N);
          } });
        } : void 0, action: s.hasClientAction ? async () => {
          let b = s.clientActionModule ? import(s.clientActionModule) : w();
          v(s);
          let { clientAction: E } = await b;
          return Rt(E, "No `clientAction` export found"), (N, M) => E({ ...N, async serverAction() {
            return Au("action", s), f(M);
          } });
        } : void 0, middleware: s.hasClientMiddleware ? async () => {
          let { clientMiddleware: b } = s.clientMiddlewareModule ? await import(s.clientMiddlewareModule) : await w();
          return Rt(b, "No `clientMiddleware` export found"), b;
        } : void 0, shouldRevalidate: async () => {
          let b = await w();
          return Wy(g.path, b, s, n, l);
        }, handle: async () => (await w()).handle, Component: async () => (await w()).Component, ErrorBoundary: s.hasErrorBoundary ? async () => (await w()).ErrorBoundary : void 0 };
      }
      let m = Wa(e3, t, r, n, a, s.id, o, l);
      return m.length > 0 && (g.children = m), g;
    });
  }
  function Wy(e3, t, r, n, a) {
    if (a) return PR(r.id, t.shouldRevalidate, a);
    if (!n && r.hasLoader && !r.hasClientLoader) {
      let i = e3 ? ip(e3)[1].map((l) => l.paramName) : [], o = (l) => i.some((s) => l.currentParams[s] !== l.nextParams[s]);
      if (t.shouldRevalidate) {
        let l = t.shouldRevalidate;
        return (s) => l({ ...s, defaultShouldRevalidate: o(s) });
      } else return (l) => o(l);
    }
    return t.shouldRevalidate;
  }
  function PR(e3, t, r) {
    let n = false;
    return (a) => n ? t ? t(a) : a.defaultShouldRevalidate : (n = true, r.has(e3));
  }
  async function _R(e3, t) {
    let r = w2(e3, t), n = RR(e3), a = await r;
    return await Promise.all([n, b2(e3, a)]), { Component: C2(a), ErrorBoundary: a.ErrorBoundary, clientMiddleware: a.clientMiddleware, clientAction: a.clientAction, clientLoader: a.clientLoader, handle: a.handle, links: a.links, meta: a.meta, shouldRevalidate: a.shouldRevalidate };
  }
  function C2(e3) {
    if (e3.default == null) return;
    if (!(typeof e3.default == "object" && Object.keys(e3.default).length === 0)) return e3.default;
  }
  function aa(e3, t, r, n) {
    return n && e3 !== "root" || t != null && (t.hydrate === true || r !== true);
  }
  function D2(e3) {
    let t = /* @__PURE__ */ new Set();
    return e3.forEach((r) => {
      r.startsWith("/") || (r = `/${r}`);
      for (let n = 1; n < r.length; n++) r[n] === "/" && t.add(r.slice(0, n));
      t.add(r);
    }), Array.from(t);
  }
  function zp(e3, t) {
    return e3.mode === "lazy" && t === true;
  }
  function AR({ sri: e3, ...t }, r) {
    let n = new Set(r.state.matches.map((l) => l.route.id)), a = r.state.location.pathname.split("/").filter(Boolean), i = ["/"];
    for (a.pop(); a.length > 0; ) i.push(`/${a.join("/")}`), a.pop();
    i.forEach((l) => {
      let s = Et(r.routes, l, r.basename || "/", false, r.branches);
      s && s.forEach((u) => n.add(u.route.id));
    });
    let o = [...n].reduce((l, s) => Object.assign(l, { [s]: t.routes[s] }), {});
    return { ...t, routes: o, sri: e3 ? true : void 0 };
  }
  function hc(e3, t, r, n, a, i, o) {
    if (zp(a, n)) return async ({ path: l, patch: s, signal: u, fetcherKey: c }) => {
      if (Bu.has(l)) return;
      let { state: d } = e3();
      await N2([l], c ? window.location.href : je(d.navigation.location || d.location), t, r, n, i, o, a.manifestPath, s, u);
    };
  }
  function pc(e3, t, r, n, a, i) {
    R2.useEffect(() => {
      if (!zp(a, n) || window.navigator?.connection?.saveData === true) return;
      function o(c) {
        let d = c.tagName === "FORM" ? c.getAttribute("action") : c.getAttribute("href");
        if (!d) return;
        let f = c.tagName === "A" ? c.pathname : new URL(d, window.location.origin).pathname;
        Bu.has(f) || Iu.add(f);
      }
      async function l() {
        document.querySelectorAll("a[data-discover], form[data-discover]").forEach(o);
        let c = Array.from(Iu.keys()).filter((d) => Bu.has(d) ? (Iu.delete(d), false) : true);
        if (c.length !== 0) try {
          await N2(c, null, t, r, n, i, e3.basename, a.manifestPath, e3.patchRoutes);
        } catch (d) {
          console.error("Failed to fetch manifest patches", d);
        }
      }
      let s = $R(l, 100);
      l();
      let u = new MutationObserver(() => s());
      return u.observe(document.documentElement, { subtree: true, childList: true, attributes: true, attributeFilter: ["data-discover", "href", "action"] }), () => u.disconnect();
    }, [n, i, t, r, e3, a]);
  }
  function Op(e3, t) {
    let r = e3 || "/__manifest";
    return t == null ? r : er([t, r]);
  }
  async function N2(e3, t, r, n, a, i, o, l, s, u) {
    e3 = D2(e3);
    let c = new URLSearchParams();
    c.set("paths", e3.sort().join(",")), c.set("version", r.version);
    let d = new URL(Op(l, o), window.location.origin);
    if (d.search = c.toString(), d.toString().length > fc) {
      Iu.clear();
      return;
    }
    let f;
    try {
      let g = await fetch(d, { signal: u });
      if (g.ok) {
        if (g.status === 204 && g.headers.has("X-Remix-Reload-Document")) {
          if (!t) {
            console.warn("Detected a manifest version mismatch during eager route discovery. The next navigation/fetch to an undiscovered route will result in a new document navigation to sync up with the latest manifest.");
            return;
          }
          try {
            if (sessionStorage.getItem(Vh) === r.version) {
              console.error("Unable to discover routes due to manifest version mismatch.");
              return;
            }
            sessionStorage.setItem(Vh, r.version);
          } catch {
          }
          window.location.href = t, console.warn("Detected manifest version mismatch, reloading..."), await new Promise(() => {
          });
        } else if (g.status >= 400) throw new Error(await g.text());
      } else throw new Error(`${g.status} ${g.statusText}`);
      try {
        sessionStorage.removeItem(Vh);
      } catch {
      }
      f = await g.json();
    } catch (g) {
      if (u?.aborted) return;
      throw g;
    }
    let p = new Set(Object.keys(r.routes)), v = Object.values(f).reduce((g, m) => (m && !p.has(m.id) && (g[m.id] = m), g), {});
    Object.assign(r.routes, v), e3.forEach((g) => FR(g, Bu));
    let y = /* @__PURE__ */ new Set();
    Object.values(v).forEach((g) => {
      g && (!g.parentId || !v[g.parentId]) && y.add(g.parentId);
    }), y.forEach((g) => s(g || null, Wa(v, n, null, a, i, g)));
  }
  function FR(e3, t) {
    if (t.size >= TR) {
      let r = t.values().next().value;
      t.delete(r);
    }
    t.add(e3);
  }
  function $R(e3, t) {
    let r;
    return (...n) => {
      window.clearTimeout(r), r = window.setTimeout(() => e3(...n), t);
    };
  }
  function mc() {
    let e3 = G.useContext(Mr);
    return Rt(e3, "You must render this element inside a <DataRouterContext.Provider> element"), e3;
  }
  function gc() {
    let e3 = G.useContext(Wr);
    return Rt(e3, "You must render this element inside a <DataRouterStateContext.Provider> element"), e3;
  }
  function qr() {
    let e3 = G.useContext(vr);
    return Rt(e3, "You must render this element inside a <HydratedRouter> element"), e3;
  }
  function zR(e3, t) {
    let r = G.useContext(vr), [n, a] = G.useState(false), [i, o] = G.useState(false), { onFocus: l, onBlur: s, onMouseEnter: u, onMouseLeave: c, onTouchStart: d } = t, f = G.useRef(null);
    G.useEffect(() => {
      if (e3 === "render" && o(true), e3 === "viewport") {
        let y = (m) => {
          m.forEach((h) => {
            o(h.isIntersecting);
          });
        }, g = new IntersectionObserver(y, { threshold: 0.5 });
        return f.current && g.observe(f.current), () => {
          g.disconnect();
        };
      }
    }, [e3]), G.useEffect(() => {
      if (n) {
        let y = setTimeout(() => {
          o(true);
        }, 100);
        return () => {
          clearTimeout(y);
        };
      }
    }, [n]);
    let p = () => {
      a(true);
    }, v = () => {
      a(false), o(false);
    };
    return r ? e3 !== "intent" ? [i, f, {}] : [i, f, { onFocus: dl(l, p), onBlur: dl(s, v), onMouseEnter: dl(u, p), onMouseLeave: dl(c, v), onTouchStart: dl(d, p) }] : [false, f, {}];
  }
  function dl(e3, t) {
    return (r) => {
      e3 && e3(r), r.defaultPrevented || t(r);
    };
  }
  function Ip(e3, t, r) {
    if (r && !Vu) return [e3[0]];
    if (t) {
      let n = e3.findIndex((a) => t[a.route.id] !== void 0);
      return e3.slice(0, n + 1);
    }
    return e3;
  }
  function M2({ nonce: e3, crossOrigin: t }) {
    let { isSpaMode: r, manifest: n, routeModules: a, criticalCss: i, nonce: o } = qr(), { errors: l, matches: s } = gc(), u = Ip(s, l, r), c = G.useMemo(() => ER(u, a, n), [u, a, n]);
    return e3 == null && o && (e3 = o), G.createElement(G.Fragment, null, typeof i == "string" ? G.createElement("style", { [Yy]: "", nonce: e3, dangerouslySetInnerHTML: { __html: i } }) : null, typeof i == "object" ? G.createElement("link", { [Yy]: "", rel: "stylesheet", href: i.href, nonce: e3, crossOrigin: t }) : null, c.map(({ key: d, link: f }) => Tp(f) ? G.createElement(vc, { key: d, nonce: e3, ...f, crossOrigin: f.crossOrigin ?? t }) : G.createElement("link", { key: d, nonce: e3, ...f, crossOrigin: f.crossOrigin ?? t })));
  }
  function vc({ page: e3, ...t }) {
    let r = gp(), { nonce: n } = qr(), { router: a } = mc(), i = G.useMemo(() => Ki(a.routes, e3, a.basename), [a.routes, e3, a.basename]);
    return i ? (t.nonce == null && n && (t = { ...t, nonce: n }), r ? G.createElement(IR, { page: e3, matches: i, ...t }) : G.createElement(jR, { page: e3, matches: i, ...t })) : null;
  }
  function OR(e3) {
    let { manifest: t, routeModules: r } = qr(), [n, a] = G.useState([]);
    return G.useEffect(() => {
      let i = false;
      return CR(e3, t, r).then((o) => {
        i || a(o);
      }), () => {
        i = true;
      };
    }, [e3, t, r]), n;
  }
  function IR({ page: e3, matches: t, ...r }) {
    let n = qe(), { future: a } = qr(), { basename: i } = mc(), o = G.useMemo(() => {
      if (e3 === n.pathname + n.search + n.hash) return [];
      let l = cc(e3, i, a.v8_trailingSlashAwareDataRequests, "rsc"), s = false, u = [];
      for (let c of t) typeof c.route.shouldRevalidate == "function" ? s = true : u.push(c.route.id);
      return s && u.length > 0 && l.searchParams.set("_routes", u.join(",")), [l.pathname + l.search];
    }, [i, a.v8_trailingSlashAwareDataRequests, e3, n, t]);
    return G.createElement(G.Fragment, null, o.map((l) => G.createElement("link", { key: l, rel: "prefetch", as: "fetch", href: l, ...r })));
  }
  function jR({ page: e3, matches: t, ...r }) {
    let n = qe(), { future: a, manifest: i, routeModules: o } = qr(), { basename: l } = mc(), { loaderData: s, matches: u } = gc(), c = G.useMemo(() => Vy(e3, t, u, i, n, "data"), [e3, t, u, i, n]), d = G.useMemo(() => Vy(e3, t, u, i, n, "assets"), [e3, t, u, i, n]), f = G.useMemo(() => {
      if (e3 === n.pathname + n.search + n.hash) return [];
      let y = /* @__PURE__ */ new Set(), g = false;
      if (t.forEach((h) => {
        let w = i.routes[h.route.id];
        !w || !w.hasLoader || (!c.some((b) => b.route.id === h.route.id) && h.route.id in s && o[h.route.id]?.shouldRevalidate || w.hasClientLoader ? g = true : y.add(h.route.id));
      }), y.size === 0) return [];
      let m = cc(e3, l, a.v8_trailingSlashAwareDataRequests, "data");
      return g && y.size > 0 && m.searchParams.set("_routes", t.filter((h) => y.has(h.route.id)).map((h) => h.route.id).join(",")), [m.pathname + m.search];
    }, [l, a.v8_trailingSlashAwareDataRequests, s, n, i, c, t, e3, o]), p = G.useMemo(() => Ap(d, i), [d, i]), v = OR(d);
    return G.createElement(G.Fragment, null, f.map((y) => G.createElement("link", { key: y, rel: "prefetch", as: "fetch", href: y, ...r })), p.map((y) => G.createElement("link", { key: y, rel: "modulepreload", href: y, ...r })), v.map(({ key: y, link: g }) => G.createElement("link", { key: y, nonce: r.nonce, ...g, crossOrigin: g.crossOrigin ?? r.crossOrigin })));
  }
  function L2() {
    let { isSpaMode: e3, routeModules: t } = qr(), { errors: r, matches: n, loaderData: a } = gc(), i = qe(), o = Ip(n, r, e3), l = null;
    r && (l = r[o[o.length - 1].route.id]);
    let s = [], u = null, c = [];
    for (let d = 0; d < o.length; d++) {
      let f = o[d], p = f.route.id, v = a[p], y = f.params, g = t[p], m = [], h = { id: p, data: v, loaderData: v, meta: [], params: f.params, pathname: f.pathname, handle: f.route.handle, error: l };
      if (c[d] = h, g?.meta ? m = typeof g.meta == "function" ? g.meta({ data: v, loaderData: v, params: y, location: i, matches: c, error: l }) : Array.isArray(g.meta) ? [...g.meta] : g.meta : u && (m = [...u]), m = m || [], !Array.isArray(m)) throw new Error("The route at " + f.route.path + ` returns an invalid value. All route meta functions must return an array of meta objects.

To reference the meta function API, see https://reactrouter.com/start/framework/route-module#meta`);
      h.meta = m, c[d] = h, s = [...m], u = s;
    }
    return G.createElement(G.Fragment, null, s.flat().map((d) => {
      if (!d) return null;
      if ("tagName" in d) {
        let { tagName: f, ...p } = d;
        return UR(f) ? G.createElement(f, { key: JSON.stringify(p), ...p }) : (console.warn(`A meta object uses an invalid tagName: ${f}. Expected either 'link' or 'meta'`), null);
      }
      if ("title" in d) return G.createElement("title", { key: "title" }, String(d.title));
      if ("charset" in d && (d.charSet ?? (d.charSet = d.charset), delete d.charset), "charSet" in d && d.charSet != null) return typeof d.charSet == "string" ? G.createElement("meta", { key: "charSet", charSet: d.charSet }) : null;
      if ("script:ld+json" in d) try {
        let f = JSON.stringify(d["script:ld+json"]);
        return G.createElement("script", { key: `script:ld+json:${f}`, type: "application/ld+json", dangerouslySetInnerHTML: { __html: wn(f) } });
      } catch {
        return null;
      }
      return G.createElement("meta", { key: JSON.stringify(d), ...d });
    }));
  }
  function UR(e3) {
    return typeof e3 == "string" && /^(meta|link)$/.test(e3);
  }
  function P2() {
    Vu = true;
  }
  function jp(e3) {
    let { manifest: t, serverHandoffString: r, isSpaMode: n, renderMeta: a, routeDiscovery: i, ssr: o, nonce: l } = qr(), { router: s, static: u, staticContext: c } = mc(), { matches: d } = gc(), f = gp(), p = zp(i, o);
    e3.nonce == null && l && (e3 = { ...e3, nonce: l }), a && (a.didRenderScripts = true);
    let v = Ip(d, null, n);
    G.useEffect(() => {
      P2();
    }, []);
    let y = G.useMemo(() => {
      if (f) return null;
      let w = c ? `window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());` : " ", b = u ? `${t.hmr?.runtime ? `import ${JSON.stringify(t.hmr.runtime)};` : ""}${p ? "" : `import ${JSON.stringify(t.url)}`};
${v.map((E, N) => {
        let M = `route${N}`, x = t.routes[E.route.id];
        Rt(x, `Route ${E.route.id} not found in manifest`);
        let { clientActionModule: C, clientLoaderModule: D, clientMiddlewareModule: T, hydrateFallbackModule: P, module: _ } = x, O = [...C ? [{ module: C, varName: `${M}_clientAction` }] : [], ...D ? [{ module: D, varName: `${M}_clientLoader` }] : [], ...T ? [{ module: T, varName: `${M}_clientMiddleware` }] : [], ...P ? [{ module: P, varName: `${M}_HydrateFallback` }] : [], { module: _, varName: `${M}_main` }];
        if (O.length === 1) return `import * as ${M} from ${JSON.stringify(_)};`;
        let te = O.map((ie) => `import * as ${ie.varName} from "${ie.module}";`).join(`
`), X = `const ${M} = {${O.map((ie) => `...${ie.varName}`).join(",")}};`;
        return [te, X].join(`
`);
      }).join(`
`)}
  ${p ? `window.__reactRouterManifest = ${JSON.stringify(AR(t, s), null, 2)};` : ""}
  window.__reactRouterRouteModules = {${v.map((E, N) => `${JSON.stringify(E.route.id)}:route${N}`).join(",")}};

import(${JSON.stringify(t.entry.module)});` : " ";
      return G.createElement(G.Fragment, null, G.createElement("script", { ...e3, suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: w }, type: void 0 }), G.createElement("script", { ...e3, suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: b }, type: "module", async: true }));
    }, []), g = Vu || f ? [] : [...new Set(t.entry.imports.concat(Ap(v, t, { includeHydrateFallback: true })))], m = typeof t.sri == "object" ? t.sri : {};
    return Yi(!f, "The <Scripts /> element is a no-op when using RSC and can be safely removed."), Vu || f ? null : G.createElement(G.Fragment, null, typeof t.sri == "object" ? G.createElement("script", { ...e3, "rr-importmap": "", type: "importmap", suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: JSON.stringify({ integrity: m }) } }) : null, p ? null : G.createElement("link", { rel: "modulepreload", href: t.url, crossOrigin: e3.crossOrigin, integrity: m[t.url], nonce: e3.nonce, suppressHydrationWarning: true }), G.createElement("link", { rel: "modulepreload", href: t.entry.module, crossOrigin: e3.crossOrigin, integrity: m[t.entry.module], nonce: e3.nonce, suppressHydrationWarning: true }), g.map((h) => G.createElement("link", { key: h, rel: "modulepreload", href: h, crossOrigin: e3.crossOrigin, integrity: m[h], nonce: e3.nonce, suppressHydrationWarning: true })), y);
  }
  function HR(...e3) {
    return (t) => {
      e3.forEach((r) => {
        typeof r == "function" ? r(t) : r != null && (r.current = t);
      });
    };
  }
  function _2({ error: e3, isOutsideRemixApp: t }) {
    let { nonce: r } = qr();
    console.error(e3);
    let n = nt.createElement("script", { nonce: r, dangerouslySetInnerHTML: { __html: `
        console.log(
          "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."
        );
      ` } });
    if (Ue(e3)) return nt.createElement(tp, { title: "Unhandled Thrown Response!" }, nt.createElement("h1", { style: { fontSize: "24px" } }, e3.status, " ", e3.statusText), Vr ? n : null);
    let a;
    if (e3 instanceof Error) a = e3;
    else {
      let i = e3 == null ? "Unknown Error" : typeof e3 == "object" && "toString" in e3 ? e3.toString() : JSON.stringify(e3);
      a = new Error(i);
    }
    return nt.createElement(tp, { title: "Application Error!", isOutsideRemixApp: t }, nt.createElement("h1", { style: { fontSize: "24px" } }, "Application Error"), nt.createElement("pre", { style: { padding: "2rem", background: "hsla(10, 50%, 50%, 0.1)", color: "red", overflow: "auto" } }, a.stack), n);
  }
  function tp({ title: e3, renderScripts: t, isOutsideRemixApp: r, children: n }) {
    let { routeModules: a } = qr();
    return a.root?.Layout && !r ? n : nt.createElement("html", { lang: "en" }, nt.createElement("head", null, nt.createElement("meta", { charSet: "utf-8" }), nt.createElement("meta", { name: "viewport", content: "width=device-width,initial-scale=1,viewport-fit=cover" }), nt.createElement("title", null, e3)), nt.createElement("body", null, nt.createElement("main", { style: { fontFamily: "system-ui, sans-serif", padding: "2rem" } }, n, t ? nt.createElement(jp, null) : null)));
  }
  function T2(e3, t) {
    return ja({ basename: t?.basename, getContext: t?.getContext, future: t?.future, history: Gi({ window: t?.window }), hydrationData: t?.hydrationData || F2(), routes: e3, mapRouteProperties: kn, hydrationRouteProperties: Ba, dataStrategy: t?.dataStrategy, patchRoutesOnNavigation: t?.patchRoutesOnNavigation, window: t?.window, instrumentations: t?.instrumentations }).initialize();
  }
  function A2(e3, t) {
    return ja({ basename: t?.basename, getContext: t?.getContext, future: t?.future, history: Yu({ window: t?.window }), hydrationData: t?.hydrationData || F2(), routes: e3, mapRouteProperties: kn, hydrationRouteProperties: Ba, dataStrategy: t?.dataStrategy, patchRoutesOnNavigation: t?.patchRoutesOnNavigation, window: t?.window, instrumentations: t?.instrumentations }).initialize();
  }
  function F2() {
    let e3 = window?.__staticRouterHydrationData;
    return e3 && e3.errors && (e3 = { ...e3, errors: VR(e3.errors) }), e3;
  }
  function VR(e3) {
    if (!e3) return null;
    let t = Object.entries(e3), r = {};
    for (let [n, a] of t) if (a && a.__type === "RouteErrorResponse") r[n] = new it(a.status, a.statusText, a.data, a.internal === true);
    else if (a && a.__type === "Error") {
      if (typeof a.__subType == "string" && up.includes(a.__subType)) {
        let i = window[a.__subType];
        if (typeof i == "function") try {
          let o = new i(a.message);
          o.stack = "", r[n] = o;
        } catch {
        }
      }
      if (r[n] == null) {
        let i = new Error(a.message);
        i.stack = "", r[n] = i;
      }
    } else r[n] = a;
    return r;
  }
  function $2({ basename: e3, children: t, useTransitions: r, window: n }) {
    let a = I.useRef();
    a.current == null && (a.current = Gi({ window: n, v5Compat: true }));
    let i = a.current, [o, l] = I.useState({ action: i.action, location: i.location }), s = I.useCallback((u) => {
      r === false ? l(u) : I.startTransition(() => l(u));
    }, [r]);
    return I.useLayoutEffect(() => i.listen(s), [i, s]), I.createElement(En, { basename: e3, children: t, location: o.location, navigationType: o.action, navigator: i, useTransitions: r });
  }
  function z2({ basename: e3, children: t, useTransitions: r, window: n }) {
    let a = I.useRef();
    a.current == null && (a.current = Yu({ window: n, v5Compat: true }));
    let i = a.current, [o, l] = I.useState({ action: i.action, location: i.location }), s = I.useCallback((u) => {
      r === false ? l(u) : I.startTransition(() => l(u));
    }, [r]);
    return I.useLayoutEffect(() => i.listen(s), [i, s]), I.createElement(En, { basename: e3, children: t, location: o.location, navigationType: o.action, navigator: i, useTransitions: r });
  }
  function Up({ basename: e3, children: t, history: r, useTransitions: n }) {
    let [a, i] = I.useState({ action: r.action, location: r.location }), o = I.useCallback((l) => {
      n === false ? i(l) : I.startTransition(() => i(l));
    }, [n]);
    return I.useLayoutEffect(() => r.listen(o), [r, o]), I.createElement(En, { basename: e3, children: t, location: a.location, navigationType: a.action, navigator: r, useTransitions: n });
  }
  function Hp({ getKey: e3, storageKey: t, ...r }) {
    let n = I.useContext(vr), { basename: a } = I.useContext(ht), i = qe(), o = Cl();
    Yp({ getKey: e3, storageKey: t });
    let l = I.useMemo(() => {
      if (!n || !e3) return null;
      let u = np(i, o, a, e3);
      return u !== i.key ? u : null;
    }, []);
    if (!n || n.isSpaMode) return null;
    let s = ((u, c) => {
      if (!window.history.state || !window.history.state.key) {
        let d = Math.random().toString(32).slice(2);
        window.history.replaceState({ key: d }, "");
      }
      try {
        let f = JSON.parse(sessionStorage.getItem(u) || "{}")[c || window.history.state.key];
        typeof f == "number" && window.scrollTo(0, f);
      } catch (d) {
        console.error(d), sessionStorage.removeItem(u);
      }
    }).toString();
    return r.nonce == null && n?.nonce && (r.nonce = n.nonce), I.createElement("script", { ...r, suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: `(${s})(${wn(JSON.stringify(t || rp))}, ${wn(JSON.stringify(l))})` } });
  }
  function O2(e3) {
    return `${e3} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function wc(e3) {
    let t = I.useContext(Mr);
    return q(t, O2(e3)), t;
  }
  function Bp(e3) {
    let t = I.useContext(Wr);
    return q(t, O2(e3)), t;
  }
  function Vp(e3, { target: t, replace: r, mask: n, state: a, preventScrollReset: i, relative: o, viewTransition: l, defaultShouldRevalidate: s, useTransitions: u } = {}) {
    let c = bn(), d = qe(), f = Ua(e3, { relative: o });
    return I.useCallback((p) => {
      if (tR(p, t)) {
        p.preventDefault();
        let v = r !== void 0 ? r : je(d) === je(f), y = () => c(e3, { replace: v, mask: n, state: a, preventScrollReset: i, relative: o, viewTransition: l, defaultShouldRevalidate: s });
        u ? I.startTransition(() => y()) : y();
      }
    }, [d, c, f, r, n, a, t, e3, i, o, l, s, u]);
  }
  function I2(e3) {
    ke(typeof URLSearchParams < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");
    let t = I.useRef(vl(e3)), r = I.useRef(false), n = qe(), a = I.useMemo(() => rR(n.search, r.current ? null : t.current), [n.search]), i = bn(), o = I.useCallback((l, s) => {
      let u = vl(typeof l == "function" ? l(new URLSearchParams(a)) : l);
      r.current = true, i("?" + u, s);
    }, [i, a]);
    return [a, o];
  }
  function xc() {
    let { router: e3 } = wc("useSubmit"), { basename: t } = I.useContext(ht), r = UE(), n = e3.fetch, a = e3.navigate;
    return I.useCallback(async (i, o = {}) => {
      let { action: l, method: s, encType: u, formData: c, body: d } = iR(i, t);
      if (o.navigate === false) {
        let f = o.fetcherKey || YR();
        await n(f, r, o.action || l, { defaultShouldRevalidate: o.defaultShouldRevalidate, preventScrollReset: o.preventScrollReset, formData: c, body: d, formMethod: o.method || s, formEncType: o.encType || u, flushSync: o.flushSync });
      } else await a(o.action || l, { defaultShouldRevalidate: o.defaultShouldRevalidate, preventScrollReset: o.preventScrollReset, formData: c, body: d, formMethod: o.method || s, formEncType: o.encType || u, replace: o.replace, state: o.state, fromRouteId: r, flushSync: o.flushSync, viewTransition: o.viewTransition });
    }, [n, a, t, r]);
  }
  function Wp(e3, { relative: t } = {}) {
    let { basename: r } = I.useContext(ht), n = I.useContext(zt);
    q(n, "useFormAction must be used inside a RouteContext");
    let [a] = n.matches.slice(-1), i = { ...Ua(e3 || ".", { relative: t }) }, o = qe();
    if (e3 == null) {
      i.search = o.search;
      let l = new URLSearchParams(i.search), s = l.getAll("index");
      if (s.some((c) => c === "")) {
        l.delete("index"), s.filter((d) => d).forEach((d) => l.append("index", d));
        let c = l.toString();
        i.search = c ? `?${c}` : "";
      }
    }
    return (!e3 || e3 === ".") && a.route.index && (i.search = i.search ? i.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (i.pathname = i.pathname === "/" ? r : er([r, i.pathname])), je(i);
  }
  function j2({ key: e3 } = {}) {
    let { router: t } = wc("useFetcher"), r = Bp("useFetcher"), n = I.useContext(Qi), a = I.useContext(zt), i = a.matches[a.matches.length - 1]?.route.id;
    q(n, "useFetcher must be used inside a FetchersContext"), q(a, "useFetcher must be used inside a RouteContext"), q(i != null, 'useFetcher can only be used on routes that contain a unique "id"');
    let o = I.useId(), [l, s] = I.useState(e3 || o);
    e3 && e3 !== l && s(e3);
    let { deleteFetcher: u, getFetcher: c, resetFetcher: d, fetch: f } = t;
    I.useEffect(() => (c(l), () => u(l)), [u, c, l]);
    let p = I.useCallback(async (E, N) => {
      q(i, "No routeId available for fetcher.load()"), await f(l, i, E, N);
    }, [l, i, f]), v = xc(), y = I.useCallback(async (E, N) => {
      await v(E, { ...N, navigate: false, fetcherKey: l });
    }, [l, v]), g = I.useCallback((E) => d(l, E), [d, l]), m = I.useMemo(() => {
      let E = I.forwardRef((N, M) => I.createElement(yc, { ...N, navigate: false, fetcherKey: l, ref: M }));
      return E.displayName = "fetcher.Form", E;
    }, [l]), h = r.fetchers.get(l) || kl, w = n.get(l);
    return I.useMemo(() => ({ Form: m, submit: y, load: p, reset: g, ...h, data: w }), [m, y, p, g, h, w]);
  }
  function U2() {
    let e3 = Bp("useFetchers");
    return I.useMemo(() => Array.from(e3.fetchers.entries()).map(([t, r]) => ({ ...r, key: t })), [e3.fetchers]);
  }
  function np(e3, t, r, n) {
    let a = null;
    return n && (r !== "/" ? a = n({ ...e3, pathname: Xe(e3.pathname, r) || e3.pathname }, t) : a = n(e3, t)), a == null && (a = e3.key), a;
  }
  function Yp({ getKey: e3, storageKey: t } = {}) {
    let { router: r } = wc("useScrollRestoration"), { restoreScrollPosition: n, preventScrollReset: a } = Bp("useScrollRestoration"), { basename: i } = I.useContext(ht), o = qe(), l = Cl(), s = Ep();
    I.useEffect(() => (window.history.scrollRestoration = "manual", () => {
      window.history.scrollRestoration = "auto";
    }), []), qR(I.useCallback(() => {
      if (s.state === "idle") {
        let u = np(o, l, i, e3);
        Fu[u] = window.scrollY;
      }
      try {
        sessionStorage.setItem(t || rp, JSON.stringify(Fu));
      } catch (u) {
        ke(false, `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${u}).`);
      }
      window.history.scrollRestoration = "auto";
    }, [s.state, e3, i, o, l, t])), typeof document < "u" && (I.useLayoutEffect(() => {
      try {
        let u = sessionStorage.getItem(t || rp);
        u && (Fu = JSON.parse(u));
      } catch {
      }
    }, [t]), I.useLayoutEffect(() => {
      let u = r?.enableScrollRestoration(Fu, () => window.scrollY, e3 ? (c, d) => np(c, d, i, e3) : void 0);
      return () => u && u();
    }, [r, i, e3]), I.useLayoutEffect(() => {
      if (n !== false) {
        if (typeof n == "number") {
          window.scrollTo(0, n);
          return;
        }
        try {
          if (o.hash) {
            let u = document.getElementById(decodeURIComponent(o.hash.slice(1)));
            if (u) {
              u.scrollIntoView();
              return;
            }
          }
        } catch {
          ke(false, `"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`);
        }
        a !== true && window.scrollTo(0, 0);
      }
    }, [o, n, a]));
  }
  function H2(e3, t) {
    let { capture: r } = t || {};
    I.useEffect(() => {
      let n = r != null ? { capture: r } : void 0;
      return window.addEventListener("beforeunload", e3, n), () => {
        window.removeEventListener("beforeunload", e3, n);
      };
    }, [e3, r]);
  }
  function qR(e3, t) {
    let { capture: r } = t || {};
    I.useEffect(() => {
      let n = r != null ? { capture: r } : void 0;
      return window.addEventListener("pagehide", e3, n), () => {
        window.removeEventListener("pagehide", e3, n);
      };
    }, [e3, r]);
  }
  function B2({ when: e3, message: t }) {
    let r = Sp(e3);
    I.useEffect(() => {
      r.state === "blocked" && (window.confirm(t) ? setTimeout(r.proceed, 0) : r.reset());
    }, [r, t]), I.useEffect(() => {
      r.state === "blocked" && !e3 && r.reset();
    }, [r, e3]);
  }
  function qp(e3, { relative: t } = {}) {
    let r = I.useContext(Xi);
    q(r != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let { basename: n } = wc("useViewTransitionState"), a = Ua(e3, { relative: t });
    if (!r.isTransitioning) return false;
    let i = Xe(r.currentLocation.pathname, n) || r.currentLocation.pathname, o = Xe(r.nextLocation.pathname, n) || r.nextLocation.pathname;
    return Oa(a.pathname, o) != null || Oa(a.pathname, i) != null;
  }
  function V2({ basename: e3, children: t, location: r = "/" }) {
    typeof r == "string" && (r = St(r));
    let n = "POP", a = { pathname: r.pathname || "/", search: r.search || "", hash: r.hash || "", state: r.state != null ? r.state : null, key: r.key || "default", mask: void 0 }, i = W2();
    return fr.createElement(En, { basename: e3, children: t, location: a, navigationType: n, navigator: i, static: true, useTransitions: false });
  }
  function _l({ context: e3, router: t, hydrate: r = true, nonce: n }) {
    q(t && e3, "You must provide `router` and `context` to <StaticRouterProvider>");
    let a = { router: t, navigator: W2(), static: true, staticContext: e3, basename: e3.basename || "/" }, i = /* @__PURE__ */ new Map(), o = "";
    if (r !== false) {
      let s = { loaderData: e3.loaderData, actionData: e3.actionData, errors: GR(e3.errors) };
      o = `window.__staticRouterHydrationData = JSON.parse(${wn(JSON.stringify(JSON.stringify(s)))});`;
    }
    let { state: l } = a.router;
    return fr.createElement(fr.Fragment, null, fr.createElement(Mr.Provider, { value: a }, fr.createElement(Wr.Provider, { value: l }, fr.createElement(Qi.Provider, { value: i }, fr.createElement(Xi.Provider, { value: { isTransitioning: false } }, fr.createElement(En, { basename: a.basename, location: l.location, navigationType: l.historyAction, navigator: a.navigator, static: a.static, useTransitions: false }, fr.createElement(Kw, { manifest: t.manifest, routes: t.routes, future: t.future, state: l, isStatic: true })))))), o ? fr.createElement("script", { suppressHydrationWarning: true, nonce: n, dangerouslySetInnerHTML: { __html: o } }) : null);
  }
  function GR(e3) {
    if (!e3) return null;
    let t = Object.entries(e3), r = {};
    for (let [n, a] of t) Ue(a) ? r[n] = { ...a, __type: "RouteErrorResponse" } : a instanceof Error ? r[n] = { message: a.message, __type: "Error", ...a.name !== "Error" ? { __subType: a.name } : {} } : r[n] = a;
    return r;
  }
  function W2() {
    return { createHref: q2, encodeLocation: G2, push(e3) {
      throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(e3)})\` somewhere in your app.`);
    }, replace(e3) {
      throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(e3)}, { replace: true })\` somewhere in your app.`);
    }, go(e3) {
      throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${e3})\` somewhere in your app.`);
    }, back() {
      throw new Error("You cannot use navigator.back() on the server because it is a stateless environment.");
    }, forward() {
      throw new Error("You cannot use navigator.forward() on the server because it is a stateless environment.");
    } };
  }
  function Y2(e3, t) {
    return dp(e3, { ...t, mapRouteProperties: kn });
  }
  function Tl(e3, t, r = {}) {
    let n = {}, a = yn(e3, kn, void 0, n), i = t.matches.map((l) => {
      let s = n[l.route.id] || l.route;
      return { ...l, route: s };
    }), o = (l) => `You cannot use router.${l}() on the server because it is a stateless environment`;
    return { get basename() {
      return t.basename;
    }, get future() {
      return { v8_middleware: false, v8_passThroughRequests: false, v8_trailingSlashAwareDataRequests: false, ...r?.future };
    }, get state() {
      return { historyAction: "POP", location: t.location, matches: i, loaderData: t.loaderData, actionData: t.actionData, errors: t.errors, initialized: true, renderFallback: false, navigation: Ii, restoreScrollPosition: null, preventScrollReset: false, revalidation: "idle", fetchers: /* @__PURE__ */ new Map(), blockers: /* @__PURE__ */ new Map() };
    }, get routes() {
      return a;
    }, get branches() {
      return r.branches;
    }, get manifest() {
      return n;
    }, get window() {
    }, initialize() {
      throw o("initialize");
    }, subscribe() {
      throw o("subscribe");
    }, enableScrollRestoration() {
      throw o("enableScrollRestoration");
    }, navigate() {
      throw o("navigate");
    }, fetch() {
      throw o("fetch");
    }, revalidate() {
      throw o("revalidate");
    }, createHref: q2, encodeLocation: G2, getFetcher() {
      return kl;
    }, deleteFetcher() {
      throw o("deleteFetcher");
    }, resetFetcher() {
      throw o("resetFetcher");
    }, dispose() {
      throw o("dispose");
    }, getBlocker() {
      return pn;
    }, deleteBlocker() {
      throw o("deleteBlocker");
    }, patchRoutes() {
      throw o("patchRoutes");
    }, _internalFetchControllers: /* @__PURE__ */ new Map(), _internalSetRoutes() {
      throw o("_internalSetRoutes");
    }, _internalSetStateDoNotUseOrYouWillBreakYourApp() {
      throw o("_internalSetStateDoNotUseOrYouWillBreakYourApp");
    } };
  }
  function q2(e3) {
    return typeof e3 == "string" ? e3 : je(e3);
  }
  function G2(e3) {
    let t = typeof e3 == "string" ? e3 : je(e3);
    t = t.replace(/ $/, "%20");
    let r = wl.test(t) ? new URL(t) : new URL(t, "http://localhost");
    return { pathname: r.pathname, search: r.search, hash: r.hash };
  }
  function h4({ context: e3, url: t, nonce: r }) {
    typeof t == "string" && (t = new URL(t));
    let { manifest: n, routeModules: a, criticalCss: i, serverHandoffString: o } = e3, l = $p(n.routes, a, e3.future, e3.isSpaMode);
    e3.staticHandlerContext.loaderData = { ...e3.staticHandlerContext.loaderData };
    for (let u of e3.staticHandlerContext.matches) {
      let c = u.route.id, d = a[c], f = e3.manifest.routes[c];
      d && f && aa(c, d.clientLoader, f.hasLoader, e3.isSpaMode) && (d.HydrateFallback || !f.hasLoader) && delete e3.staticHandlerContext.loaderData[c];
    }
    let s = Tl(l, e3.staticHandlerContext, { branches: e3.branches });
    return Lr.createElement(Lr.Fragment, null, Lr.createElement(vr.Provider, { value: { manifest: n, routeModules: a, criticalCss: i, serverHandoffString: o, future: e3.future, ssr: e3.ssr, isSpaMode: e3.isSpaMode, routeDiscovery: e3.routeDiscovery, nonce: r, serializeError: e3.serializeError, renderMeta: e3.renderMeta } }, Lr.createElement(Ji, { location: s.state.location }, Lr.createElement(_l, { router: s, context: e3.staticHandlerContext, hydrate: false }))), e3.serverHandoffStream ? Lr.createElement(Lr.Suspense, null, Lr.createElement(_p, { context: e3, identifier: 0, reader: e3.serverHandoffStream.getReader(), textDecoder: new TextDecoder(), nonce: r })) : null);
  }
  function p4(e3, t) {
    return function({ initialEntries: n, initialIndex: a, hydrationData: i, future: o }) {
      let l = ro.useRef(), s = ro.useRef();
      if (l.current == null) {
        s.current = { future: { v8_passThroughRequests: o?.v8_passThroughRequests === true, v8_middleware: o?.v8_middleware === true, v8_trailingSlashAwareDataRequests: o?.v8_trailingSlashAwareDataRequests === true }, manifest: { routes: {}, entry: { imports: [], module: "" }, url: "", version: "" }, routeModules: {}, ssr: false, isSpaMode: false, routeDiscovery: { mode: "lazy", manifestPath: "/__manifest" } };
        let u = m4(yn(e3, (c) => c), t !== void 0 ? t : o?.v8_middleware ? new mr() : {}, s.current.manifest, s.current.routeModules);
        l.current = ec(u, { initialEntries: n, initialIndex: a, hydrationData: i });
      }
      return ro.createElement(vr.Provider, { value: s.current }, ro.createElement(Ml, { router: l.current }));
    };
  }
  function m4(e3, t, r, n, a) {
    return e3.map((i) => {
      if (!i.id) throw new Error("Expected a route.id in react-router processRoutes() function");
      let o = { id: i.id, path: i.path, index: i.index, Component: i.Component ? ac(i.Component) : void 0, HydrateFallback: i.HydrateFallback ? ic(i.HydrateFallback) : void 0, ErrorBoundary: i.ErrorBoundary ? oc(i.ErrorBoundary) : void 0, action: i.action ? (s) => i.action({ ...s, context: t }) : void 0, loader: i.loader ? (s) => i.loader({ ...s, context: t }) : void 0, middleware: i.middleware ? i.middleware.map((s) => (...u) => s({ ...u[0], context: t }, u[1])) : void 0, handle: i.handle, shouldRevalidate: i.shouldRevalidate }, l = { id: i.id, path: i.path, index: i.index, parentId: a, hasAction: i.action != null, hasLoader: i.loader != null, hasClientAction: false, hasClientLoader: false, hasClientMiddleware: false, hasErrorBoundary: i.ErrorBoundary != null, module: "build/stub-path-to-module.js", clientActionModule: void 0, clientLoaderModule: void 0, clientMiddlewareModule: void 0, hydrateFallbackModule: void 0 };
      return r.routes[o.id] = l, n[i.id] = { default: o.Component || rc, ErrorBoundary: o.ErrorBoundary || void 0, handle: i.handle, links: i.links, meta: i.meta, shouldRevalidate: i.shouldRevalidate }, i.children && (o.children = m4(i.children, t, r, n, o.id)), o;
    });
  }
  function lS(e3) {
    let t = new Uint8Array(e3.length);
    for (let r = 0; r < e3.length; r++) t[r] = e3.charCodeAt(r);
    return t;
  }
  async function sS(e3, t) {
    let r = cS(e3);
    return t.length > 0 && (r = await iS(r, t[0])), r;
  }
  async function uS(e3, t) {
    if (t.length > 0) {
      for (let r of t) {
        let n = await oS(e3, r);
        if (n !== false) return r4(n);
      }
      return null;
    }
    return r4(e3);
  }
  function cS(e3) {
    return btoa(fS(encodeURIComponent(JSON.stringify(e3))));
  }
  function r4(e3) {
    try {
      return JSON.parse(decodeURIComponent(dS(atob(e3))));
    } catch {
      return {};
    }
  }
  function dS(e3) {
    let t = e3.toString(), r = "", n = 0, a, i;
    for (; n < t.length; ) a = t.charAt(n++), /[\w*+\-./@]/.exec(a) ? r += a : (i = a.charCodeAt(0), i < 256 ? r += "%" + n4(i, 2) : r += "%u" + n4(i, 4).toUpperCase());
    return r;
  }
  function n4(e3, t) {
    let r = e3.toString(16);
    for (; r.length < t; ) r = "0" + r;
    return r;
  }
  function fS(e3) {
    let t = e3.toString(), r = "", n = 0, a, i;
    for (; n < t.length; ) {
      if (a = t.charAt(n++), a === "%") {
        if (t.charAt(n) === "u") {
          if (i = t.slice(n + 1, n + 5), /^[\da-f]{4}$/i.exec(i)) {
            r += String.fromCharCode(parseInt(i, 16)), n += 5;
            continue;
          }
        } else if (i = t.slice(n, n + 2), /^[\da-f]{2}$/i.exec(i)) {
          r += String.fromCharCode(parseInt(i, 16)), n += 2;
          continue;
        }
      }
      r += a;
    }
    return r;
  }
  function hS(e3, t) {
    Yi(!t, `The "${e3}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`);
  }
  function pS(e3) {
    return Object.keys(e3).reduce((t, r) => {
      let n = e3[r];
      return n && (t[r] = n.module), t;
    }, {});
  }
  function mS(e3) {
    return e3 === "development" || e3 === "production" || e3 === "test";
  }
  function l0(e3, t) {
    if (e3 instanceof Error && t !== "development") {
      let r = new Error("Unexpected Server Error");
      return r.stack = void 0, r;
    }
    return e3;
  }
  function Ec(e3, t) {
    return Object.entries(e3).reduce((r, [n, a]) => Object.assign(r, { [n]: l0(a, t) }), {});
  }
  function v4(e3, t) {
    let r = l0(e3, t);
    return { message: r.message, stack: r.stack };
  }
  function Fl(e3, t) {
    if (e3 === false || e3 === null || typeof e3 > "u") throw console.error("The following error is a bug in React Router; please open an issue! https://github.com/remix-run/react-router/issues/new/choose"), new Error(t);
  }
  function y4(e3, t, r, n, a) {
    let i = Et(t, n, a ?? "/", false, r);
    return i ? i.map((o) => {
      let l = e3[o.route.id];
      return Fl(l, `Route with id "${o.route.id}" not found in manifest.`), { params: o.params, pathname: o.pathname, route: l };
    }) : null;
  }
  async function a4(e3, t, r) {
    let n = await e3({ request: r.v8_passThroughRequests ? t.request : vS(gS(t.request)), url: t.url, params: t.params, context: t.context, pattern: t.pattern });
    if (gn(n) && n.init && n.init.status && El(n.init.status)) throw new Response(null, n.init);
    return n;
  }
  function gS(e3) {
    let t = new URL(e3.url), r = t.searchParams.getAll("index");
    t.searchParams.delete("index");
    let n = [];
    for (let i of r) i && n.push(i);
    for (let i of n) t.searchParams.append("index", i);
    let a = { method: e3.method, body: e3.body, headers: e3.headers, signal: e3.signal };
    return a.body && (a.duplex = "half"), new Request(t.href, a);
  }
  function vS(e3) {
    let t = new URL(e3.url);
    t.searchParams.delete("_routes");
    let r = { method: e3.method, body: e3.body, headers: e3.headers, signal: e3.signal };
    return r.body && (r.duplex = "half"), new Request(t.href, r);
  }
  function x4(e3) {
    globalThis[w4] = e3;
  }
  function e0() {
    return globalThis[w4];
  }
  function b4(e3, t) {
    if (typeof process < "u") try {
      if (process.env.hasOwnProperty("IS_RR_BUILD_REQUEST") && process.env.IS_RR_BUILD_REQUEST === "yes") return e3.headers.get(t);
    } catch {
    }
    return null;
  }
  function yS(e3) {
    let t = {};
    return Object.values(e3).forEach((r) => {
      if (r) {
        let n = r.parentId || "";
        t[n] || (t[n] = []), t[n].push(r);
      }
    }), t;
  }
  function k4(e3, t, r = "", n = yS(e3)) {
    return (n[r] || []).map((a) => {
      let i = { hasErrorBoundary: a.id === "root" || a.module.ErrorBoundary != null, id: a.id, path: a.path, middleware: a.module.middleware, loader: a.module.loader ? async (o) => {
        let l = b4(o.request, "X-React-Router-Prerender-Data");
        if (l != null) {
          let u = l && decodeURI(l);
          Fl(u, "Missing prerendered data for route");
          let c = new TextEncoder().encode(u), d = new ReadableStream({ start(v) {
            v.enqueue(c), v.close();
          } }), p = (await Va(d, global)).value;
          if (p && Nr in p) {
            let v = p[Nr], y = { status: v.status };
            throw v.reload ? Xu(v.redirect, y) : v.replace ? Qu(v.redirect, y) : Ia(v.redirect, y);
          } else {
            Fl(p && a.id in p, "Unable to decode prerendered data");
            let v = p[a.id];
            return Fl("data" in v, "Unable to process prerendered data"), v.data;
          }
        }
        return await a4(a.module.loader, o, t);
      } : void 0, action: a.module.action ? (o) => a4(a.module.action, o, t) : void 0, handle: a.module.handle };
      return a.index ? { index: true, ...i } : { caseSensitive: a.caseSensitive, children: k4(e3, t, a.id, n), ...i };
    });
  }
  function i4(e3) {
    return wn(JSON.stringify(e3));
  }
  function s0(e3, t) {
    return wS(e3, (r) => {
      let n = t.routes[r.route.id];
      return Fl(n, `Route with id "${r.route.id}" not found in build`), n.module.headers;
    });
  }
  function wS(e3, t, r) {
    let n = e3.errors ? e3.matches.findIndex((l) => e3.errors[l.route.id]) : -1, a = n >= 0 ? e3.matches.slice(0, n + 1) : e3.matches, i;
    if (n >= 0) {
      let { actionHeaders: l, actionData: s, loaderHeaders: u, loaderData: c } = e3;
      e3.matches.slice(n).some((d) => {
        let f = d.route.id;
        return l[f] && (!s || !s.hasOwnProperty(f)) ? i = l[f] : u[f] && !c.hasOwnProperty(f) && (i = u[f]), i != null;
      });
    }
    let o = new Headers(r);
    return a.reduce((l, s, u) => {
      let { id: c } = s.route, d = e3.loaderHeaders[c] || new Headers(), f = e3.actionHeaders[c] || new Headers(), p = i != null && u === a.length - 1, v = p && i !== d && i !== f, y = t(s);
      if (y == null) {
        let m = new Headers(l);
        return v && Ya(i, m), Ya(f, m), Ya(d, m), m;
      }
      let g = new Headers(typeof y == "function" ? y({ loaderHeaders: d, parentHeaders: l, actionHeaders: f, errorHeaders: p ? i : void 0 }) : y);
      return v && Ya(i, g), Ya(f, g), Ya(d, g), Ya(l, g), g;
    }, new Headers(o));
  }
  function Ya(e3, t) {
    let r = e3.get("Set-Cookie");
    if (r) {
      let n = (0, E4.splitCookiesString)(r), a = new Set(t.getSetCookie());
      n.forEach((i) => {
        a.has(i) || t.append("Set-Cookie", i);
      });
    }
  }
  function R4(e3, t) {
    let r = e3.headers.get("origin"), n = null, a = null;
    try {
      typeof r == "string" && r !== "null" ? (a = new URL(r), n = a.host) : n = r;
    } catch {
      throw new Error("`origin` header is not a valid URL. Aborting the action.");
    }
    let i = new URL(e3.url), o = a ? a.origin === i.origin : n === i.host;
    if (n && !o && !bS(n, t)) throw new Error("The `request.url` origin does not match `origin` header from a forwarded action request. Aborting the action.");
  }
  function xS(e3, t) {
    let r = e3.split("."), n = t.split(".");
    if (n.length < 1 || r.length < n.length) return false;
    for (; n.length; ) {
      let a = n.pop(), i = r.pop();
      switch (a) {
        case "":
          return false;
        case "*": {
          if (i) continue;
          return false;
        }
        case "**":
          return n.length > 0 ? false : i !== void 0;
        case void 0:
        default:
          if (i !== a) return false;
      }
    }
    return r.length === 0;
  }
  function bS(e3, t = []) {
    return t.some((r) => r && (r === e3 || xS(e3, r)));
  }
  function zl(e3, t, r) {
    t = t || "/";
    let n = new URL(e3.url), a = n.pathname;
    r?.v8_trailingSlashAwareDataRequests ? a.endsWith("/_.data") ? a = a.replace(/_\.data$/, "") : a = a.replace(/\.data$/, "") : (Xe(a, t) === "/_root.data" ? a = t : a.endsWith(".data") && (a = a.replace(/\.data$/, "")), Xe(a, t) !== "/" && a.endsWith("/") && (a = a.slice(0, -1)));
    let i = new URLSearchParams(n.search);
    i.delete("_routes");
    let o = i.toString();
    return o && (o = `?${o}`), { pathname: a, search: o, hash: "" };
  }
  async function kS(e3, t, r, n, a, i, o) {
    try {
      try {
        R4(n, Array.isArray(e3.allowedActionOrigins) ? e3.allowedActionOrigins : []);
      } catch {
        return s(new Error("Bad Request"), 400);
      }
      let c = e3.future.v8_passThroughRequests ? n : new Request(a, { method: n.method, body: n.body, headers: n.headers, signal: n.signal, ...n.body ? { duplex: "half" } : void 0 }), d = await r.query(c, { requestContext: i, skipLoaderErrorBubbling: true, skipRevalidation: true, generateMiddlewareResponse: e3.future.v8_middleware ? async (f) => {
        try {
          let p = await f(c);
          return l(p);
        } catch (p) {
          return s(p);
        }
      } : void 0, normalizePath: (f) => zl(f, e3.basename, e3.future) });
      return l(d);
    } catch (c) {
      return s(c);
    }
    function l(c) {
      return Ae(c) ? c : u(c);
    }
    function s(c, d = 500) {
      return o(c), $l(n, e3, t, { result: { error: c }, headers: new Headers(), status: d });
    }
    function u(c) {
      let d = s0(c, e3);
      if (El(c.statusCode) && d.has("Location")) return new Response(null, { status: c.statusCode, headers: d });
      c.errors && (Object.values(c.errors).forEach((p) => {
        (!Ue(p) || p.error) && o(p);
      }), c.errors = Ec(c.errors, t));
      let f;
      return c.errors ? f = { error: Object.values(c.errors)[0] } : f = { data: Object.values(c.actionData || {})[0] }, $l(n, e3, t, { result: f, headers: d, status: c.statusCode });
    }
  }
  async function ES(e3, t, r, n, a, i, o) {
    let l = new URL(n.url).searchParams.get("_routes"), s = l ? new Set(l.split(",")) : null;
    try {
      let f = e3.future.v8_passThroughRequests ? n : new Request(a, { headers: n.headers, signal: n.signal }), p = await r.query(f, { requestContext: i, filterMatchesToLoad: (v) => !s || s.has(v.route.id), skipLoaderErrorBubbling: true, generateMiddlewareResponse: e3.future.v8_middleware ? async (v) => {
        try {
          let y = await v(f);
          return u(y);
        } catch (y) {
          return c(y);
        }
      } : void 0, normalizePath: (v) => zl(v, e3.basename, e3.future) });
      return u(p);
    } catch (f) {
      return c(f);
    }
    function u(f) {
      return Ae(f) ? f : d(f);
    }
    function c(f) {
      return o(f), $l(n, e3, t, { result: { error: f }, headers: new Headers(), status: 500 });
    }
    function d(f) {
      let p = s0(f, e3);
      if (El(f.statusCode) && p.has("Location")) return new Response(null, { status: f.statusCode, headers: p });
      f.errors && (Object.values(f.errors).forEach((g) => {
        (!Ue(g) || g.error) && o(g);
      }), f.errors = Ec(f.errors, t));
      let v = {}, y = new Set(f.matches.filter((g) => s ? s.has(g.route.id) : g.route.loader != null).map((g) => g.route.id));
      if (f.errors) for (let [g, m] of Object.entries(f.errors)) v[g] = { error: m };
      for (let [g, m] of Object.entries(f.loaderData)) !(g in v) && y.has(g) && (v[g] = { data: m });
      return $l(n, e3, t, { result: v, headers: p, status: f.statusCode });
    }
  }
  function $l(e3, t, r, { result: n, headers: a, status: i }) {
    let o = new Headers(a);
    return o.set("X-Remix-Response", "yes"), S4.has(i) ? new Response(null, { status: i, headers: o }) : (o.set("Content-Type", "text/x-script"), o.delete("Content-Length"), new Response(n0(n, e3.signal, t.entry.module.streamTimeout, r), { status: i || 200, headers: o }));
  }
  function o4(e3, t, r, n) {
    let a = RS(e3.status, e3.headers, r.basename), i = new Headers(e3.headers);
    return i.delete("Location"), i.set("Content-Type", "text/x-script"), $l(t, r, n, { result: t.method === "GET" ? { [Nr]: a } : a, headers: i, status: sc });
  }
  function RS(e3, t, r) {
    let n = t.get("Location");
    return r && (n = Xe(n, r) || n), { redirect: n, status: e3, revalidate: t.has("X-Remix-Revalidate") || t.has("Set-Cookie"), reload: t.has("X-Remix-Reload-Document"), replace: t.has("X-Remix-Replace") };
  }
  function n0(e3, t, r, n) {
    let a = new AbortController(), i = setTimeout(() => {
      a.abort(new Error("Server Timeout")), l();
    }, typeof r == "number" ? r : 4950), o = () => {
      a.abort(t.reason), l();
    };
    t.addEventListener("abort", o);
    let l = () => {
      clearTimeout(i), t.removeEventListener("abort", o);
    };
    return p2(e3, { signal: a.signal, onComplete: l, plugins: [(s) => {
      if (s instanceof Error) {
        let { name: u, message: c, stack: d } = n === "production" ? l0(s, n) : s;
        return ["SanitizedError", u, c, d];
      }
      if (s instanceof it) {
        let { data: u, status: c, statusText: d } = s;
        return ["ErrorResponse", u, c, d];
      }
      if (s && typeof s == "object" && Nr in s) return ["SingleFetchRedirect", s[Nr]];
    }], postPlugins: [(s) => {
      if (s && typeof s == "object") return ["SingleFetchClassInstance", Object.fromEntries(Object.entries(s))];
    }, () => ["SingleFetchFallback"]] });
  }
  function l4(e3, t) {
    let r = k4(e3.routes, e3.future), n = mS(t) ? t : "production", a = dp(r, { basename: e3.basename, instrumentations: e3.entry.module.instrumentations, future: e3.future }), i = e3.entry.module.handleError || ((l, { request: s }) => {
      n !== "test" && !s.signal.aborted && console.error(Ue(l) && l.error ? l.error : l);
    }), o = async (l, s) => {
      let u = {}, c, d = (h) => {
        t === "development" && e0()?.processRequestError?.(h), i(h, { context: c, params: u, request: l });
      };
      if (e3.future.v8_middleware) {
        if (s && !(s instanceof mr)) {
          let h = new Error("Invalid `context` value provided to `handleRequest`. When middleware is enabled you must return an instance of `RouterContextProvider` from your `getLoadContext` function.");
          return d(h), Rc(h, n);
        }
        c = s || new mr();
      } else c = s || {};
      let f = new URL(l.url), p = zl(l, e3.basename, e3.future).pathname, v = b4(l, "X-React-Router-SPA-Mode") === "yes";
      if (!e3.ssr) {
        let h = decodeURI(p);
        if (e3.basename && e3.basename !== "/") {
          let w = Xe(h, e3.basename);
          if (w == null) return i(new it(404, "Not Found", `Refusing to prerender the \`${h}\` path because it does not start with the basename \`${e3.basename}\``), { context: c, params: u, request: l }), new Response("Not Found", { status: 404, statusText: "Not Found" });
          h = w;
        }
        if (e3.prerender.length === 0) v = true;
        else if (!e3.prerender.includes(h.replace(/\/$/, "")) && !e3.prerender.includes(h.replace(/[^/]$/, "/"))) {
          if (f.pathname.endsWith(".data")) return i(new it(404, "Not Found", `Refusing to SSR the path \`${h}\` because \`ssr:false\` is set and the path is not included in the \`prerender\` config, so in production the path will be a 404.`), { context: c, params: u, request: l }), new Response("Not Found", { status: 404, statusText: "Not Found" });
          v = true;
        }
      }
      let y = Op(e3.routeDiscovery.manifestPath, e3.basename);
      if (e3.routeDiscovery.mode === "lazy" && f.pathname === y) try {
        return await SS(e3, a.dataRoutes, a._internalRouteBranches, f);
      } catch (h) {
        return d(h), new Response("Unknown Server Error", { status: 500 });
      }
      let g = y4(e3.routes, a.dataRoutes, a._internalRouteBranches, p, e3.basename);
      g && g.length > 0 && Object.assign(u, g[0].params);
      let m;
      if (f.pathname.endsWith(".data")) m = await CS(n, e3, a, l, p, c, d), Vi(m) && (m = o4(m, l, e3, n)), e3.entry.module.handleDataRequest && (m = await e3.entry.module.handleDataRequest(m, { context: c, params: g ? g[0].params : {}, request: l }), Vi(m) && (m = o4(m, l, e3, n)));
      else if (!v && g && g[g.length - 1].route.module.default == null && g[g.length - 1].route.module.ErrorBoundary == null) m = await NS(n, e3, a, g.slice(-1)[0].route.id, l, c, d);
      else {
        let { pathname: h } = f, w;
        e3.unstable_getCriticalCss ? w = await e3.unstable_getCriticalCss({ pathname: h }) : t === "development" && e0()?.getCriticalCss && (w = await e0()?.getCriticalCss?.(h)), m = await DS(n, e3, a, l, c, d, v, w);
      }
      return l.method === "HEAD" ? new Response(null, { headers: m.headers, status: m.status, statusText: m.statusText }) : m;
    };
    return e3.entry.module.instrumentations && (o = sw(o, e3.entry.module.instrumentations.map((l) => l.handler).filter(Boolean))), { serverMode: n, staticHandler: a, errorHandler: i, requestHandler: o };
  }
  async function SS(e3, t, r, n) {
    if (n.toString().length > fc) return new Response(null, { statusText: "Bad Request", status: 400 });
    if (e3.assets.version !== n.searchParams.get("version")) return new Response(null, { status: 204, headers: { "X-Remix-Reload-Document": "true" } });
    let a = {};
    if (n.searchParams.has("paths")) {
      let i = n.searchParams.get("paths") || "", o = new Set(i.split(",").filter(Boolean));
      for (let l of o) {
        l.startsWith("/") || (l = `/${l}`);
        let s = y4(e3.routes, t, r, l, e3.basename);
        if (s) for (let u of s) {
          let c = u.route.id, d = e3.assets.routes[c];
          d && (a[c] = d);
        }
      }
      return Response.json(a, { headers: { "Cache-Control": "public, max-age=31536000, immutable" } });
    }
    return new Response("Invalid Request", { status: 400 });
  }
  async function CS(e3, t, r, n, a, i, o) {
    let l = new URL(n.url);
    return l.pathname = a, Ye(n.method) ? await kS(t, e3, r, n, l, i, o) : await ES(t, e3, r, n, l, i, o);
  }
  async function DS(e3, t, r, n, a, i, o, l) {
    try {
      if (Ye(n.method)) try {
        R4(n, Array.isArray(t.allowedActionOrigins) ? t.allowedActionOrigins : []);
      } catch (c) {
        return i(c), new Response("Bad Request", { status: 400 });
      }
      let u = await r.query(n, { requestContext: a, generateMiddlewareResponse: t.future.v8_middleware ? async (c) => {
        try {
          let d = await c(n);
          return Ae(d) || (d = await s(d, o)), d;
        } catch (d) {
          return i(d), new Response(null, { status: 500 });
        }
      } : void 0, normalizePath: (c) => zl(c, t.basename, t.future) });
      return Ae(u) || (u = await s(u, o)), u;
    } catch (u) {
      return i(u), new Response(null, { status: 500 });
    }
    async function s(u, c) {
      let d = s0(u, t);
      if (S4.has(u.statusCode)) return new Response(null, { status: u.statusCode, headers: d });
      u.errors && (Object.values(u.errors).forEach((g) => {
        (!Ue(g) || g.error) && i(g);
      }), u.errors = Ec(u.errors, e3));
      let f = { loaderData: u.loaderData, actionData: u.actionData, errors: u.errors }, p = { basename: t.basename, future: t.future, routeDiscovery: t.routeDiscovery, ssr: t.ssr, isSpaMode: c }, v = { manifest: t.assets, branches: r._internalRouteBranches, routeModules: pS(t.routes), staticHandlerContext: u, criticalCss: l, serverHandoffString: i4({ ...p, criticalCss: l }), serverHandoffStream: n0(f, n.signal, t.entry.module.streamTimeout, e3), renderMeta: {}, future: t.future, ssr: t.ssr, routeDiscovery: t.routeDiscovery, isSpaMode: c, serializeError: (g) => v4(g, e3) }, y = t.entry.module.default;
      try {
        return await y(n, u.statusCode, d, v, a);
      } catch (g) {
        i(g);
        let m = g;
        if (Ae(g)) try {
          let w = await LS(g);
          m = new it(g.status, g.statusText, w);
        } catch {
        }
        u = fp(r.dataRoutes, u, m), u.errors && (u.errors = Ec(u.errors, e3));
        let h = { loaderData: u.loaderData, actionData: u.actionData, errors: u.errors };
        v = { ...v, staticHandlerContext: u, serverHandoffString: i4(p), serverHandoffStream: n0(h, n.signal, t.entry.module.streamTimeout, e3), renderMeta: {} };
        try {
          return await y(n, u.statusCode, d, v, a);
        } catch (w) {
          return i(w), Rc(w, e3);
        }
      }
    }
  }
  async function NS(e3, t, r, n, a, i, o) {
    try {
      let u = await r.queryRoute(a, { routeId: n, requestContext: i, generateMiddlewareResponse: t.future.v8_middleware ? async (c) => {
        try {
          let d = await c(a);
          return l(d);
        } catch (d) {
          return s(d);
        }
      } : void 0, normalizePath: (c) => zl(c, t.basename, t.future) });
      return l(u);
    } catch (u) {
      return s(u);
    }
    function l(u) {
      return Ae(u) ? u : typeof u == "string" ? new Response(u) : Response.json(u);
    }
    function s(u) {
      if (Ae(u)) return u;
      if (Ue(u)) return o(u), MS(u, e3);
      if (u instanceof Error && u.message === "Expected a response from queryRoute") {
        let c = new Error("Expected a Response to be returned from resource route handler");
        return o(c), Rc(c, e3);
      }
      return o(u), Rc(u, e3);
    }
  }
  function MS(e3, t) {
    return Response.json(v4(e3.error || new Error("Unexpected Server Error"), t), { status: e3.status, statusText: e3.statusText });
  }
  function Rc(e3, t) {
    let r = "Unexpected Server Error";
    return t !== "production" && (r += `

${String(e3)}`), new Response(r, { status: 500, headers: { "Content-Type": "text/plain" } });
  }
  function LS(e3) {
    let t = e3.headers.get("Content-Type");
    return t && /\bapplication\/json\b/.test(t) ? e3.body == null ? null : e3.json() : e3.text();
  }
  function t0(e3) {
    return `__flash_${e3}__`;
  }
  function u0({ cookie: e3, createData: t, readData: r, updateData: n, deleteData: a }) {
    let i = Dc(e3) ? e3 : Cc(e3?.name || "__session", e3);
    return N4(i), { async getSession(o, l) {
      let s = o && await i.parse(o, l), u = s && await r(s);
      return Nc(u || {}, s || "");
    }, async commitSession(o, l) {
      let { id: s, data: u } = o, c = l?.maxAge != null ? new Date(Date.now() + l.maxAge * 1e3) : l?.expires != null ? l.expires : i.expires;
      return s ? await n(s, u, c) : s = await t(u, c), i.serialize(s, l);
    }, async destroySession(o, l) {
      return await a(o.id), i.serialize("", { ...l, maxAge: void 0, expires: /* @__PURE__ */ new Date(0) });
    } };
  }
  function N4(e3) {
    Yi(e3.isSigned, `The "${e3.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://reactrouter.com/explanation/sessions-and-cookies#signing-cookies for more information.`);
  }
  function M4({ cookie: e3 } = {}) {
    let t = Dc(e3) ? e3 : Cc(e3?.name || "__session", e3);
    return N4(t), { async getSession(r, n) {
      return Nc(r && await t.parse(r, n) || {});
    }, async commitSession(r, n) {
      let a = await t.serialize(r.data, n);
      if (a.length > 4096) throw new Error("Cookie length will exceed browser maximum. Length: " + a.length);
      return a;
    }, async destroySession(r, n) {
      return t.serialize("", { ...n, maxAge: void 0, expires: /* @__PURE__ */ new Date(0) });
    } };
  }
  function L4({ cookie: e3 } = {}) {
    let t = /* @__PURE__ */ new Map();
    return u0({ cookie: e3, async createData(r, n) {
      let a = Math.random().toString(36).substring(2, 10);
      return t.set(a, { data: r, expires: n }), a;
    }, async readData(r) {
      if (t.has(r)) {
        let { data: n, expires: a } = t.get(r);
        if (!a || a > /* @__PURE__ */ new Date()) return n;
        a && t.delete(r);
      }
      return null;
    }, async updateData(r, n, a) {
      t.set(r, { data: n, expires: a });
    }, async deleteData(r) {
      t.delete(r);
    } });
  }
  function P4(e3, ...t) {
    let r = t[0], n = PS(e3).replace(/\/:([\w-]+)(\?)?/g, (a, i, o) => {
      let l = o === void 0, s = r?.[i];
      if (l && s === void 0) throw new Error(`Path '${e3}' requires param '${i}' but it was not provided`);
      return s === void 0 ? "" : "/" + s;
    });
    if (e3.endsWith("*")) {
      let a = r?.["*"];
      a !== void 0 && (n += "/" + a);
    }
    return n || "/";
  }
  function PS(e3) {
    let t = e3.length - 1, r = e3[t];
    if (r !== "*" && r !== "/") return e3;
    for (t--; t >= 0 && e3[t] === "/"; t--) ;
    return e3.slice(0, t + 1);
  }
  function u4(e3) {
    let t = new TextDecoder(), r, n = new Promise((s) => r = s), a = false, i = [], o = null;
    function l(s) {
      for (let u of i) {
        let c = t.decode(u, { stream: true });
        c.endsWith(s4) && (c = c.slice(0, -s4.length)), s.enqueue(a0.encode(c));
      }
      i.length = 0, o = null;
    }
    return new TransformStream({ transform(s, u) {
      i.push(s), !o && (o = setTimeout(async () => {
        l(u), a || (a = true, _S(e3, u).catch((c) => u.error(c)).then(r));
      }, 0));
    }, async flush(s) {
      await n, o && (clearTimeout(o), l(s)), s.enqueue(a0.encode("</body></html>"));
    } });
  }
  async function _S(e3, t) {
    let r = new TextDecoder("utf-8", { fatal: true }), n = e3.getReader();
    try {
      let i;
      for (; (i = await n.read()) && !i.done; ) {
        let o = i.value;
        try {
          r0(JSON.stringify(r.decode(o, { stream: true })), t);
        } catch {
          let s = JSON.stringify(btoa(String.fromCodePoint(...o)));
          r0(`Uint8Array.from(atob(${s}), m => m.codePointAt(0))`, t);
        }
      }
    } finally {
      n.releaseLock();
    }
    let a = r.decode();
    a.length && r0(JSON.stringify(a), t);
  }
  function r0(e3, t) {
    t.enqueue(a0.encode(`<script>${TS(`(self.__FLIGHT_DATA||=[]).push(${e3})`)}<\/script>`));
  }
  function TS(e3) {
    return e3.replace(/<!--/g, "<\\!--").replace(/<\/(script)/gi, "</\\$1");
  }
  function c4({ renderAppShell: e3, title: t, children: r }) {
    return e3 ? pt.default.createElement("html", { lang: "en" }, pt.default.createElement("head", null, pt.default.createElement("meta", { charSet: "utf-8" }), pt.default.createElement("meta", { name: "viewport", content: "width=device-width,initial-scale=1,viewport-fit=cover" }), pt.default.createElement("title", null, t)), pt.default.createElement("body", null, pt.default.createElement("main", { style: { fontFamily: "system-ui, sans-serif", padding: "2rem" } }, r))) : r;
  }
  function T4({ error: e3, renderAppShell: t }) {
    console.error(e3);
    let r = pt.default.createElement("script", { dangerouslySetInnerHTML: { __html: `
        console.log(
          "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."
        );
      ` } });
    if (Ue(e3)) return pt.default.createElement(c4, { renderAppShell: t, title: "Unhandled Thrown Response!" }, pt.default.createElement("h1", { style: { fontSize: "24px" } }, e3.status, " ", e3.statusText), Vr ? r : null);
    let n;
    if (e3 instanceof Error) n = e3;
    else {
      let a = e3 == null ? "Unknown Error" : typeof e3 == "object" && "toString" in e3 ? e3.toString() : JSON.stringify(e3);
      n = new Error(a);
    }
    return pt.default.createElement(c4, { renderAppShell: t, title: "Application Error!" }, pt.default.createElement("h1", { style: { fontSize: "24px" } }, "Application Error"), pt.default.createElement("pre", { style: { padding: "2rem", background: "hsla(10, 50%, 50%, 0.1)", color: "red", overflow: "auto" } }, n.stack), r);
  }
  function A4({ hasRootLayout: e3 }) {
    let t = Ha();
    if (e3 === void 0) throw new Error("Missing 'hasRootLayout' prop");
    return pt.default.createElement(T4, { renderAppShell: !e3, error: t });
  }
  function AS(e3) {
    let t = {};
    for (let r of e3.matches) F4(t, r);
    return t;
  }
  function F4(e3, t) {
    t = Array.isArray(t) ? t : [t];
    for (let r of t) e3[r.id] = { links: r.links, meta: r.meta, default: FS };
  }
  function zS(e3) {
    if (f4) return f4(e3);
    throw new Error("React Router v7 requires React 19+ for RSC features.");
  }
  async function $4({ request: e3, serverResponse: t, createFromReadableStream: r, renderHTML: n, hydrate: a = true }) {
    let i = new URL(e3.url);
    if (OS(i) || IS(i) || e3.headers.has("rsc-action-id") || t.headers.get("React-Router-Resource") === "true") return t;
    if (!t.body) throw new Error("Missing body in server response");
    let s = t.clone(), u = null;
    a && (u = t.clone());
    let c = t.body, d, f = [], p = () => d ? new ReadableStream({ start(h) {
      d.forEach((w) => h.enqueue(w)), f.push(h);
    } }) : (d = [], c.pipeThrough(new TransformStream({ transform(h, w) {
      d.push(h), w.enqueue(h), f.forEach((b) => b.enqueue(h));
    }, flush() {
      f.forEach((h) => h.close()), f = [];
    } }))), v = null, y = () => {
      let h = Promise.resolve(r(p()));
      return Object.defineProperties(h, { _deepestRenderedBoundaryId: { get() {
        return v;
      }, set(w) {
        v = w;
      } }, formState: { get() {
        return h.then((w) => w.type === "render" ? w.formState : void 0);
      } } });
    }, g, m;
    try {
      if (!s.body) throw new Error("Failed to clone server response");
      let h = await r(s.body);
      if (t.status === sc && h.type === "redirect") {
        if (gr(h.location)) throw new Error("Invalid redirect location");
        let D = new Headers(t.headers);
        return D.delete("Content-Encoding"), D.delete("Content-Length"), D.delete("Content-Type"), D.delete("X-Remix-Response"), D.set("Location", h.location), new Response(u?.body || "", { headers: D, status: h.status, statusText: t.statusText });
      }
      let w = new Headers(), b = t.status, E = t.statusText, N = await n(y, { onError(D) {
        if (typeof D == "object" && D && "digest" in D && typeof D.digest == "string") {
          if (g = Zu(D.digest), g) return D.digest;
          let T = Ju(D.digest);
          if (T) return m = T, b = T.status, E = T.statusText, D.digest;
        }
      }, onHeaders(D) {
        for (let [T, P] of D) w.append(T, P);
      } }), M = new Headers(w);
      for (let [D, T] of t.headers) M.append(D, T);
      if (M.set("Content-Type", "text/html; charset=utf-8"), g) {
        if (gr(g.location)) throw new Error("Invalid redirect location");
        return M.set("Location", g.location), new Response(N, { status: g.status, headers: M });
      }
      let x = new TransformStream({ flush(D) {
        if (g) {
          if (gr(g.location)) return;
          D.enqueue(new TextEncoder().encode(`<meta http-equiv="refresh" content="0;url=${wn(g.location)}"/>`));
        }
      } });
      if (!a) return new Response(N.pipeThrough(x), { status: b, statusText: E, headers: M });
      if (!u?.body) throw new Error("Failed to clone server response");
      let C = N.pipeThrough(u4(u.body)).pipeThrough(x);
      return new Response(C, { status: b, statusText: E, headers: M });
    } catch (h) {
      if (h instanceof Response) return h;
      if (g) {
        if (gr(g.location)) throw new Error("Invalid redirect location");
        return new Response(`Redirect: ${g.location}`, { status: g.status, headers: { Location: g.location } });
      }
      try {
        let w = m ?? h, [b, E] = Ue(w) ? [w.status, w.statusText] : [500, ""], N, M = new Headers(), x = await n(() => {
          let _ = Promise.resolve(r(p())).then((O) => Object.assign(O, { status: b, errors: v ? { [v]: w } : {} }));
          return Object.defineProperties(_, { _deepestRenderedBoundaryId: { get() {
            return v;
          }, set(O) {
            v = O;
          } }, formState: { get() {
            return _.then((O) => O.type === "render" ? O.formState : void 0);
          } } });
        }, { onError(P) {
          if (typeof P == "object" && P && "digest" in P && typeof P.digest == "string") {
            if (N = Zu(P.digest), N) return P.digest;
            let _ = Ju(P.digest);
            if (_) return b = _.status, E = _.statusText, P.digest;
          }
        }, onHeaders(P) {
          for (let [_, O] of P) M.append(_, O);
        } }), C = new Headers(M);
        for (let [P, _] of t.headers) C.append(P, _);
        if (C.set("Content-Type", "text/html; charset=utf-8"), N) {
          if (gr(N.location)) throw new Error("Invalid redirect location");
          return C.set("Location", N.location), new Response(x, { status: N.status, headers: C });
        }
        let D = new TransformStream({ flush(P) {
          if (N) {
            if (gr(N.location)) return;
            P.enqueue(new TextEncoder().encode(`<meta http-equiv="refresh" content="0;url=${wn(N.location)}"/>`));
          }
        } });
        if (!a) return new Response(x.pipeThrough(D), { status: b, statusText: E, headers: C });
        if (!u?.body) throw new Error("Failed to clone server response");
        let T = x.pipeThrough(u4(u.body)).pipeThrough(D);
        return new Response(T, { status: b, statusText: E, headers: C });
      } catch {
      }
      throw h;
    }
  }
  function z4({ getPayload: e3 }) {
    let t = e3(), r = zS(t);
    if (r.type === "redirect") throw gr(r.location) ? new Error("Invalid redirect location") : new Response(null, { status: r.status, headers: { Location: r.location } });
    if (r.type !== "render") return null;
    let n = { ...r.loaderData };
    for (let l of r.matches) aa(l.id, l.clientLoader, l.hasLoader, false) && (l.hydrateFallbackElement || !l.hasLoader) && delete n[l.id];
    let a = { get _deepestRenderedBoundaryId() {
      return t._deepestRenderedBoundaryId ?? null;
    }, set _deepestRenderedBoundaryId(l) {
      t._deepestRenderedBoundaryId = l;
    }, actionData: r.actionData, actionHeaders: {}, basename: r.basename, errors: r.errors, loaderData: n, loaderHeaders: {}, location: r.location, statusCode: 200, matches: r.matches.map((l) => ({ params: l.params, pathname: l.pathname, pathnameBase: l.pathnameBase, route: { id: l.id, action: l.hasAction || !!l.clientAction, handle: l.handle, hasErrorBoundary: l.hasErrorBoundary, loader: l.hasLoader || !!l.clientLoader, index: l.index, path: l.path, shouldRevalidate: l.shouldRevalidate } })) }, i = Tl(r.matches.reduceRight((l, s) => {
      let u = { id: s.id, action: s.hasAction || !!s.clientAction, element: s.element, errorElement: s.errorElement, handle: s.handle, hasErrorBoundary: !!s.errorElement, hydrateFallbackElement: s.hydrateFallbackElement, index: s.index, loader: s.hasLoader || !!s.clientLoader, path: s.path, shouldRevalidate: s.shouldRevalidate };
      return l.length > 0 && (u.children = l), [u];
    }, []), a), o = { future: { v8_middleware: false, v8_trailingSlashAwareDataRequests: true, v8_passThroughRequests: true }, isSpaMode: false, ssr: true, criticalCss: "", manifest: { routes: {}, version: "1", url: "", entry: { module: "", imports: [] } }, routeDiscovery: r.routeDiscovery.mode === "initial" ? { mode: "initial", manifestPath: d4 } : { mode: "lazy", manifestPath: r.routeDiscovery.manifestPath || d4 }, routeModules: AS(r) };
    return to.createElement(Rl.Provider, { value: true }, to.createElement(_4, { location: r.location }, to.createElement(vr.Provider, { value: o }, to.createElement(_l, { context: a, router: i, hydrate: false, nonce: r.nonce }))));
  }
  function OS(e3) {
    return e3.pathname.endsWith(".rsc");
  }
  function IS(e3) {
    return e3.pathname.endsWith(".manifest");
  }
  function Mc({ state: e3, routes: t, getRouteInfo: r, location: n, basename: a, isSpaMode: i }) {
    let o = { ...e3, loaderData: { ...e3.loaderData } }, l = Ki(t, n, a);
    if (l) for (let s of l) {
      let u = s.route.id, c = r(u);
      aa(u, c.clientLoader, c.hasLoader, i) && (c.hasHydrateFallback || !c.hasLoader) ? delete o.loaderData[u] : c.hasLoader || (o.loaderData[u] = null);
    }
    return o;
  }
  function c0(e3) {
    return O4.createElement(Ml, { flushSync: I4.flushSync, ...e3 });
  }
  function jS() {
    if (!K && window.__reactRouterContext && window.__reactRouterManifest && window.__reactRouterRouteModules) {
      if (window.__reactRouterManifest.sri === true) {
        let e3 = document.querySelector("script[rr-importmap]");
        if (e3?.textContent) try {
          window.__reactRouterManifest.sri = JSON.parse(e3.textContent).integrity;
        } catch (t) {
          console.error("Failed to parse import map", t);
        }
      }
      K = { context: window.__reactRouterContext, manifest: window.__reactRouterManifest, routeModules: window.__reactRouterRouteModules, stateDecodingPromise: void 0, router: void 0, routerInitialized: false };
    }
  }
  function US({ getContext: e3, instrumentations: t }) {
    if (jS(), !K) throw new Error("You must be using the SSR features of React Router in order to skip passing a `router` prop to `<RouterProvider>`");
    let r = K;
    if (!K.stateDecodingPromise) {
      let o = K.context.stream;
      q(o, "No stream found for single fetch decoding"), K.context.stream = void 0, K.stateDecodingPromise = Va(o, window).then((l) => {
        K.context.state = l.value, r.stateDecodingPromise.value = true;
      }).catch((l) => {
        r.stateDecodingPromise.error = l;
      });
    }
    if (K.stateDecodingPromise.error) throw K.stateDecodingPromise.error;
    if (!K.stateDecodingPromise.value) throw K.stateDecodingPromise;
    let n = Wa(K.manifest.routes, K.routeModules, K.context.state, K.context.ssr, K.context.isSpaMode), a;
    if (K.context.isSpaMode) {
      let { loaderData: o } = K.context.state;
      K.manifest.routes.root?.hasLoader && o && "root" in o && (a = { loaderData: { root: o.root } });
    } else a = Mc({ state: K.context.state, routes: n, getRouteInfo: (o) => ({ clientLoader: K.routeModules[o]?.clientLoader, hasLoader: K.manifest.routes[o]?.hasLoader === true, hasHydrateFallback: K.routeModules[o]?.HydrateFallback != null }), location: window.location, basename: window.__reactRouterContext?.basename, isSpaMode: K.context.isSpaMode });
    window.history.state && window.history.state.masked && window.history.replaceState({ ...window.history.state, masked: void 0 }, "");
    let i = ja({ routes: n, history: Gi(), basename: K.context.basename, getContext: e3, hydrationData: a, hydrationRouteProperties: Ba, instrumentations: t, mapRouteProperties: kn, future: { v8_passThroughRequests: K.context.future.v8_passThroughRequests }, dataStrategy: uc(() => i, K.manifest, K.routeModules, K.context.ssr, K.context.basename, K.context.future.v8_trailingSlashAwareDataRequests), patchRoutesOnNavigation: hc(() => i, K.manifest, K.routeModules, K.context.ssr, K.context.routeDiscovery, K.context.isSpaMode, K.context.basename) });
    return K.router = i, i.state.initialized && (K.routerInitialized = true, i.initialize()), i.createRoutesForHMR = dc, window.__reactRouterDataRouter = i, i;
  }
  function j4(e3) {
    Ol || (Ol = US({ getContext: e3.getContext, instrumentations: e3.instrumentations }));
    let [t, r] = ot.useState(void 0);
    ot.useEffect(() => {
    }, []), ot.useEffect(() => {
    }, [t]);
    let [n, a] = ot.useState(Ol.state.location);
    return ot.useLayoutEffect(() => {
      K && K.router && !K.routerInitialized && (K.routerInitialized = true, K.router.initialize());
    }, []), ot.useLayoutEffect(() => {
      if (K && K.router) return K.router.subscribe((i) => {
        i.location !== n && a(i.location);
      });
    }, [n]), q(K, "ssrInfo unavailable for HydratedRouter"), pc(Ol, K.manifest, K.routeModules, K.context.ssr, K.context.routeDiscovery, K.context.isSpaMode), ot.createElement(ot.Fragment, null, ot.createElement(vr.Provider, { value: { manifest: K.manifest, routeModules: K.routeModules, future: K.context.future, criticalCss: t, ssr: K.context.ssr, isSpaMode: K.context.isSpaMode, routeDiscovery: K.context.routeDiscovery } }, ot.createElement(Ji, { location: n }, ot.createElement(c0, { router: Ol, useTransitions: e3.useTransitions, onError: e3.onError }))), ot.createElement(ot.Fragment, null));
  }
  function K4(e3) {
    var t, r, n = "";
    if (typeof e3 == "string" || typeof e3 == "number") n += e3;
    else if (typeof e3 == "object") if (Array.isArray(e3)) {
      var a = e3.length;
      for (t = 0; t < a; t++) e3[t] && (r = K4(e3[t])) && (n && (n += " "), n += r);
    } else for (r in e3) e3[r] && (n && (n += " "), n += r);
    return n;
  }
  function X4() {
    for (var e3, t, r = 0, n = "", a = arguments.length; r < a; r++) (e3 = arguments[r]) && (t = K4(e3)) && (n && (n += " "), n += t);
    return n;
  }
  function eC() {
    let e3 = 0, t, r, n = "";
    for (; e3 < arguments.length; ) (t = arguments[e3++]) && (r = Z4(t)) && (n && (n += " "), n += r);
    return n;
  }
  function V4(e3, ...t) {
    let r, n, a, i = o;
    function o(s) {
      let u = t.reduce((c, d) => d(c), e3());
      return r = QS(u), n = r.cache.get, a = r.cache.set, i = l, l(s);
    }
    function l(s) {
      let u = n(s);
      if (u) return u;
      let c = JS(s, r);
      return a(s, c), c;
    }
    return function() {
      return i(eC.apply(null, arguments));
    };
  }
  function p0(...e3) {
    return RC(X4(e3));
  }
  function Y4(e3, t) {
    if (typeof e3 == "function") return e3(t);
    e3 != null && (e3.current = t);
  }
  function SC(...e3) {
    return (t) => {
      let r = false, n = e3.map((a) => {
        let i = Y4(a, t);
        return !r && typeof i == "function" && (r = true), i;
      });
      if (r) return () => {
        for (let a = 0; a < n.length; a++) {
          let i = n[a];
          typeof i == "function" ? i() : Y4(e3[a], null);
        }
      };
    };
  }
  function DC(e3) {
    return typeof e3 == "object" && e3 !== null && "then" in e3;
  }
  function tx(e3) {
    return e3 != null && typeof e3 == "object" && "$$typeof" in e3 && e3.$$typeof === CC && "_payload" in e3 && DC(e3._payload);
  }
  function NC(e3) {
    let t = MC(e3), r = Qe.forwardRef((n, a) => {
      let { children: i, ...o } = n;
      tx(i) && typeof Lc == "function" && (i = Lc(i._payload));
      let l = Qe.Children.toArray(i), s = l.find(PC);
      if (s) {
        let u = s.props.children, c = l.map((d) => d === s ? Qe.Children.count(u) > 1 ? Qe.Children.only(null) : Qe.isValidElement(u) ? u.props.children : null : d);
        return (0, h0.jsx)(t, { ...o, ref: a, children: Qe.isValidElement(u) ? Qe.cloneElement(u, void 0, c) : null });
      }
      return (0, h0.jsx)(t, { ...o, ref: a, children: i });
    });
    return r.displayName = `${e3}.Slot`, r;
  }
  function MC(e3) {
    let t = Qe.forwardRef((r, n) => {
      let { children: a, ...i } = r;
      if (tx(a) && typeof Lc == "function" && (a = Lc(a._payload)), Qe.isValidElement(a)) {
        let o = TC(a), l = _C(i, a.props);
        return a.type !== Qe.Fragment && (l.ref = n ? SC(n, o) : o), Qe.cloneElement(a, l);
      }
      return Qe.Children.count(a) > 1 ? Qe.Children.only(null) : null;
    });
    return t.displayName = `${e3}.SlotClone`, t;
  }
  function PC(e3) {
    return Qe.isValidElement(e3) && typeof e3.type == "function" && "__radixId" in e3.type && e3.type.__radixId === LC;
  }
  function _C(e3, t) {
    let r = { ...t };
    for (let n in t) {
      let a = e3[n], i = t[n];
      /^on[A-Z]/.test(n) ? a && i ? r[n] = (...o) => {
        let l = i(...o);
        return a(...o), l;
      } : a && (r[n] = a) : n === "style" ? r[n] = { ...a, ...i } : n === "className" && (r[n] = [a, i].filter(Boolean).join(" "));
    }
    return { ...e3, ...r };
  }
  function TC(e3) {
    let t = Object.getOwnPropertyDescriptor(e3.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
    return r ? e3.ref : (t = Object.getOwnPropertyDescriptor(e3, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e3.props.ref : e3.props.ref || e3.ref);
  }
  function zC({ variant: e3 = "primary", fullWidth: t = false, large: r = false, className: n }) {
    return p0("m-px box-border inline-flex h-[var(--ds-control-compact)] cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap border font-text text-sizeBody font-medium leading-none transition-[background-color,border-color,color,transform] [transition-duration:120ms] [[data-app-motion]_&]:motion-safe:enabled:active:scale-[0.98]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-foreground4", "disabled:cursor-default disabled:border-transparent disabled:bg-ds-muted disabled:text-ds-foreground4 disabled:shadow-none", r ? "h-[var(--ds-control)] rounded-[var(--ds-radius)] px-3.5" : "rounded-[var(--ds-radius-compact)] px-2.5", t && "flex w-[calc(100%-2px)]", $C[e3], n);
  }
  function Gx(e3) {
    return t8.get((e3 ?? "").toLowerCase().split("-")[0]) ?? Gc;
  }
  function Kx(e3) {
    return r8.has((e3 ?? "").toLowerCase().split("-")[0]) ? "rtl" : "auto";
  }
  function xe() {
    return (0, Kl.useContext)(Kc);
  }
  function q0(e3) {
    let t = (0, Kl.useContext)(Kc);
    return e3 ? Gx(e3) : t;
  }
  function Xx() {
    let [e3, t] = (0, He.useState)({ ready: false, isOwnerUser: false });
    return (0, He.useEffect)(() => {
      let r = false, n = zc();
      if (!n?.request) {
        t({ ready: true, isOwnerUser: false });
        return;
      }
      return n.request("context", null).then((a) => {
        r || t({ ready: true, isOwnerUser: a.isOwnerUser === true });
      }), () => {
        r = true;
      };
    }, []), e3;
  }
  function n8(e3, t) {
    let r = xe(), [n, a] = (0, He.useState)({ scope: { key: e3, initialValue: t }, value: t, status: "loading", ready: false });
    n.scope.key !== e3 && a({ scope: { key: e3, initialValue: t }, value: t, status: "loading", ready: false });
    let { scope: i, value: o, status: l, ready: s } = n, u = (0, He.useRef)(null), c = (0, He.useCallback)((p) => {
      a((v) => v.scope === i ? { ...v, ...p } : v);
    }, [i]);
    (0, He.useEffect)(() => {
      let p = { scope: i, value: i.initialValue, hydrated: false, sequence: 0 };
      u.current = p;
      let v = zc(), y = (g) => {
        if (u.current !== p) return;
        let m = i.initialValue;
        try {
          typeof g.value == "string" && (m = JSON.parse(g.value));
        } catch {
          g = { status: "invalid" };
        }
        p.value = m, p.hydrated = g.status === "saved" || g.status === "memory", c({ value: m, status: g.status ?? "memory", ready: true });
      };
      return v?.request ? v.request("local.read", { key: i.key }).then(y) : y({ status: "memory" }), () => {
        u.current === p && (u.current = null);
      };
    }, [i, c]);
    let d = (0, He.useCallback)((p) => {
      let v = u.current;
      if (!s || v?.scope !== i) return;
      let y = typeof p == "function" ? p(v.value) : p;
      v.value = y;
      let g = ++v.sequence, m;
      try {
        if (m = JSON.stringify(y), m === void 0) throw new Error("Invalid local state");
      } catch {
        c({ value: y, status: "invalid" });
        return;
      }
      let h = zc();
      if (!h?.request || !v.hydrated) {
        c({ value: y, status: "memory" });
        return;
      }
      c({ value: y, status: "saving" }), h.request("local.write", { key: i.key, value: m }).then((w) => {
        u.current === v && v.sequence === g && c({ status: w.status ?? "unknown" });
      });
    }, [i, s, c]), f = l === "loading" ? r.loadingState : l === "saving" ? r.savingState : l === "saved" ? r.savedState : r.unsavedState;
    return [o, d, { ready: s, status: l, message: f }];
  }
  function Qx() {
    let e3 = xe(), [t, r] = (0, He.useState)("idle"), [n, a] = (0, He.useState)(0), i = (0, He.useRef)(null), o = (0, He.useRef)(null), l = (0, He.useRef)(0), s = (0, He.useRef)(true);
    (0, He.useEffect)(() => (s.current = true, () => {
      s.current = false;
    }), []), (0, He.useEffect)(() => {
      if (n <= 0) return;
      let p = setTimeout(() => a(Math.max(0, l.current - Date.now())), Math.min(1e3, n));
      return () => clearTimeout(p);
    }, [n]);
    let u = (0, He.useCallback)((p) => {
      if (o.current) return o.current;
      if (Date.now() < l.current) return Promise.resolve({ status: "rate_limited", retryAfterMs: l.current - Date.now() });
      let v = zc();
      if (!v?.request) return i.current = null, r("unavailable"), Promise.resolve({ status: "unavailable" });
      r("sending");
      let y = v.request("wake", p).then((g) => {
        if (!s.current) return g;
        let m = g.status ?? "unknown";
        r(m);
        let h = g.retryAfterMs ?? 0;
        return l.current = Date.now() + h, a(h), (m === "accepted" || m === "forbidden" || m === "invalid" || m === "conflict" || m === "canceled" || m === "unavailable") && (i.current = null), g;
      }).finally(() => {
        o.current = null;
      });
      return o.current = y, y;
    }, []), c = (0, He.useCallback)((p) => {
      if (o.current) return o.current;
      if (i.current) return Promise.resolve({ status: "retry_required" });
      let v;
      try {
        if (v = JSON.stringify(p.content), v === void 0 || new TextEncoder().encode(v).length > 16 * 1024) throw new Error("Invalid wake content");
      } catch {
        return r("invalid"), Promise.resolve({ status: "invalid" });
      }
      let y = { operationId: crypto.randomUUID(), content: v };
      return i.current = y, u(y);
    }, [u]), d = (0, He.useCallback)(() => i.current ? u(i.current) : Promise.resolve({ status: "idle" }), [u]), f = t === "idle" ? "" : t === "sending" ? e3.sending : t === "accepted" ? e3.wakeAccepted : t === "rate_limited" ? n > 0 ? e3.wakeWait(Math.ceil(n / 1e3)) : e3.wakeRetryNow : t === "unknown" ? e3.wakeUnconfirmed : t === "forbidden" ? e3.wakeForbidden : t === "canceled" ? e3.wakeCanceled : t === "invalid" || t === "conflict" ? e3.wakeFailed : e3.wakeUnavailable;
    return { wakeAgent: c, retry: d, busy: t === "sending", status: t, message: f, retryAfterMs: n, canRetry: t === "unknown" || t === "rate_limited" };
  }
  function o8() {
    return { values: {}, nodes: { [a8]: { type: i8, props: {}, children: [] } } };
  }
  function l8(e3, t) {
    return Object.keys(e3.nodes).find((r) => e3.nodes[r].children.includes(t));
  }
  function eb(e3, t) {
    let r = e3[t];
    delete e3[t];
    for (let n of r.children) eb(e3, n);
  }
  function s8(e3, t) {
    if (t.op === "set") return { ...e3, values: { ...e3.values, [t.key]: t.value } };
    if (t.op === "add") {
      if (e3.nodes[t.id]) return e3;
      let a = { ...e3.nodes, [t.id]: { type: t.type, props: t.props ?? {}, children: [] } };
      if (!t.parent) return { ...e3, nodes: a };
      let i = e3.nodes[t.parent], o = t.after ? i.children.indexOf(t.after) + 1 : i.children.length;
      return a[t.parent] = { ...i, children: [...i.children.slice(0, o), t.id, ...i.children.slice(o)] }, { ...e3, nodes: a };
    }
    if (t.op === "update") {
      let a = { ...e3.nodes[t.id].props };
      for (let [i, o] of Object.entries(t.props)) o === null ? delete a[i] : a[i] = o;
      return { ...e3, nodes: { ...e3.nodes, [t.id]: { ...e3.nodes[t.id], props: a } } };
    }
    if (!e3.nodes[t.id]) return e3;
    let r = { ...e3.nodes }, n = l8(e3, t.id);
    return n && (r[n] = { ...r[n], children: r[n].children.filter((a) => a !== t.id) }), eb(r, t.id), { ...e3, nodes: r };
  }
  function Fc(e3, t) {
    return e3 == null || t == null ? NaN : e3 < t ? -1 : e3 > t ? 1 : e3 >= t ? 0 : NaN;
  }
  function u8(e3, t) {
    return e3 == null || t == null ? NaN : t < e3 ? -1 : t > e3 ? 1 : t >= e3 ? 0 : NaN;
  }
  function rb(e3) {
    let t, r, n;
    e3.length !== 2 ? (t = Fc, r = (l, s) => Fc(e3(l), s), n = (l, s) => e3(l) - s) : (t = e3 === Fc || e3 === u8 ? e3 : c8, r = e3, n = e3);
    function a(l, s, u = 0, c = l.length) {
      if (u < c) {
        if (t(s, s) !== 0) return c;
        do {
          let d = u + c >>> 1;
          r(l[d], s) < 0 ? u = d + 1 : c = d;
        } while (u < c);
      }
      return u;
    }
    function i(l, s, u = 0, c = l.length) {
      if (u < c) {
        if (t(s, s) !== 0) return c;
        do {
          let d = u + c >>> 1;
          r(l[d], s) <= 0 ? u = d + 1 : c = d;
        } while (u < c);
      }
      return u;
    }
    function o(l, s, u = 0, c = l.length) {
      let d = a(l, s, u, c - 1);
      return d > u && n(l[d - 1], s) > -n(l[d], s) ? d - 1 : d;
    }
    return { left: a, center: o, right: i };
  }
  function c8() {
    return 0;
  }
  function d8(e3) {
    return e3 === null ? NaN : +e3;
  }
  function ox({ _intern: e3, _key: t }, r) {
    let n = t(r);
    return e3.has(n) ? e3.get(n) : r;
  }
  function p8({ _intern: e3, _key: t }, r) {
    let n = t(r);
    return e3.has(n) ? e3.get(n) : (e3.set(n, r), r);
  }
  function m8({ _intern: e3, _key: t }, r) {
    let n = t(r);
    return e3.has(n) && (r = e3.get(n), e3.delete(n)), r;
  }
  function g8(e3) {
    return e3 !== null && typeof e3 == "object" ? e3.valueOf() : e3;
  }
  function v8(e3, t, r) {
    var n, a = -1, i, o, l;
    if (t = +t, e3 = +e3, r = +r, e3 === t && r > 0) return [e3];
    if ((n = t < e3) && (i = e3, e3 = t, t = i), (l = ab(e3, t, r)) === 0 || !isFinite(l)) return [];
    if (l > 0) {
      let s = Math.round(e3 / l), u = Math.round(t / l);
      for (s * l < e3 && ++s, u * l > t && --u, o = new Array(i = u - s + 1); ++a < i; ) o[a] = (s + a) * l;
    } else {
      l = -l;
      let s = Math.round(e3 * l), u = Math.round(t * l);
      for (s / l < e3 && ++s, u / l > t && --u, o = new Array(i = u - s + 1); ++a < i; ) o[a] = (s + a) / l;
    }
    return n && o.reverse(), o;
  }
  function ab(e3, t, r) {
    var n = (t - e3) / Math.max(0, r), a = Math.floor(Math.log(n) / Math.LN10), i = n / Math.pow(10, a);
    return a >= 0 ? (i >= L0 ? 10 : i >= P0 ? 5 : i >= _0 ? 2 : 1) * Math.pow(10, a) : -Math.pow(10, -a) / (i >= L0 ? 10 : i >= P0 ? 5 : i >= _0 ? 2 : 1);
  }
  function y8(e3, t, r) {
    var n = Math.abs(t - e3) / Math.max(0, r), a = Math.pow(10, Math.floor(Math.log(n) / Math.LN10)), i = n / a;
    return i >= L0 ? a *= 10 : i >= P0 ? a *= 5 : i >= _0 && (a *= 2), t < e3 ? -a : a;
  }
  function w8(e3, t, r) {
    e3 = +e3, t = +t, r = (a = arguments.length) < 2 ? (t = e3, e3 = 0, 1) : a < 3 ? 1 : +r;
    for (var n = -1, a = Math.max(0, Math.ceil((t - e3) / r)) | 0, i = new Array(a); ++n < a; ) i[n] = e3 + n * r;
    return i;
  }
  function G0(e3, t) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        this.range(e3);
        break;
      default:
        this.range(t).domain(e3);
        break;
    }
    return this;
  }
  function ib() {
    var e3 = new ix(), t = [], r = [], n = lx;
    function a(i) {
      let o = e3.get(i);
      if (o === void 0) {
        if (n !== lx) return n;
        e3.set(i, o = t.push(i) - 1);
      }
      return r[o % r.length];
    }
    return a.domain = function(i) {
      if (!arguments.length) return t.slice();
      t = [], e3 = new ix();
      for (let o of i) e3.has(o) || e3.set(o, t.push(o) - 1);
      return a;
    }, a.range = function(i) {
      return arguments.length ? (r = Array.from(i), a) : r.slice();
    }, a.unknown = function(i) {
      return arguments.length ? (n = i, a) : n;
    }, a.copy = function() {
      return ib(t, r).unknown(n);
    }, G0.apply(a, arguments), a;
  }
  function ob() {
    var e3 = ib().unknown(void 0), t = e3.domain, r = e3.range, n = 0, a = 1, i, o, l = false, s = 0, u = 0, c = 0.5;
    delete e3.unknown;
    function d() {
      var f = t().length, p = a < n, v = p ? a : n, y = p ? n : a;
      i = (y - v) / Math.max(1, f - s + u * 2), l && (i = Math.floor(i)), v += (y - v - i * (f - s)) * c, o = i * (1 - s), l && (v = Math.round(v), o = Math.round(o));
      var g = w8(f).map(function(m) {
        return v + i * m;
      });
      return r(p ? g.reverse() : g);
    }
    return e3.domain = function(f) {
      return arguments.length ? (t(f), d()) : t();
    }, e3.range = function(f) {
      return arguments.length ? ([n, a] = f, n = +n, a = +a, d()) : [n, a];
    }, e3.rangeRound = function(f) {
      return [n, a] = f, n = +n, a = +a, l = true, d();
    }, e3.bandwidth = function() {
      return o;
    }, e3.step = function() {
      return i;
    }, e3.round = function(f) {
      return arguments.length ? (l = !!f, d()) : l;
    }, e3.padding = function(f) {
      return arguments.length ? (s = Math.min(1, u = +f), d()) : s;
    }, e3.paddingInner = function(f) {
      return arguments.length ? (s = Math.min(1, f), d()) : s;
    }, e3.paddingOuter = function(f) {
      return arguments.length ? (u = +f, d()) : u;
    }, e3.align = function(f) {
      return arguments.length ? (c = Math.max(0, Math.min(1, f)), d()) : c;
    }, e3.copy = function() {
      return ob(t(), [n, a]).round(l).paddingInner(s).paddingOuter(u).align(c);
    }, G0.apply(d(), arguments);
  }
  function fo(e3, t, r) {
    e3.prototype = t.prototype = r, r.constructor = e3;
  }
  function Xl(e3, t) {
    var r = Object.create(e3.prototype);
    for (var n in t) r[n] = t[n];
    return r;
  }
  function pa() {
  }
  function ux() {
    return this.rgb().formatHex();
  }
  function D8() {
    return this.rgb().formatHex8();
  }
  function N8() {
    return lb(this).formatHsl();
  }
  function cx() {
    return this.rgb().formatRgb();
  }
  function Yl(e3) {
    var t, r;
    return e3 = (e3 + "").trim().toLowerCase(), (t = x8.exec(e3)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? dx(t) : r === 3 ? new st(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Pc(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Pc(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = b8.exec(e3)) ? new st(t[1], t[2], t[3], 1) : (t = k8.exec(e3)) ? new st(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = E8.exec(e3)) ? Pc(t[1], t[2], t[3], t[4]) : (t = R8.exec(e3)) ? Pc(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = S8.exec(e3)) ? px(t[1], t[2] / 100, t[3] / 100, 1) : (t = C8.exec(e3)) ? px(t[1], t[2] / 100, t[3] / 100, t[4]) : sx.hasOwnProperty(e3) ? dx(sx[e3]) : e3 === "transparent" ? new st(NaN, NaN, NaN, 0) : null;
  }
  function dx(e3) {
    return new st(e3 >> 16 & 255, e3 >> 8 & 255, e3 & 255, 1);
  }
  function Pc(e3, t, r, n) {
    return n <= 0 && (e3 = t = r = NaN), new st(e3, t, r, n);
  }
  function K0(e3) {
    return e3 instanceof pa || (e3 = Yl(e3)), e3 ? (e3 = e3.rgb(), new st(e3.r, e3.g, e3.b, e3.opacity)) : new st();
  }
  function Oc(e3, t, r, n) {
    return arguments.length === 1 ? K0(e3) : new st(e3, t, r, n ?? 1);
  }
  function st(e3, t, r, n) {
    this.r = +e3, this.g = +t, this.b = +r, this.opacity = +n;
  }
  function fx() {
    return `#${Ga(this.r)}${Ga(this.g)}${Ga(this.b)}`;
  }
  function M8() {
    return `#${Ga(this.r)}${Ga(this.g)}${Ga(this.b)}${Ga((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function hx() {
    let e3 = Ic(this.opacity);
    return `${e3 === 1 ? "rgb(" : "rgba("}${Ka(this.r)}, ${Ka(this.g)}, ${Ka(this.b)}${e3 === 1 ? ")" : `, ${e3})`}`;
  }
  function Ic(e3) {
    return isNaN(e3) ? 1 : Math.max(0, Math.min(1, e3));
  }
  function Ka(e3) {
    return Math.max(0, Math.min(255, Math.round(e3) || 0));
  }
  function Ga(e3) {
    return e3 = Ka(e3), (e3 < 16 ? "0" : "") + e3.toString(16);
  }
  function px(e3, t, r, n) {
    return n <= 0 ? e3 = t = r = NaN : r <= 0 || r >= 1 ? e3 = t = NaN : t <= 0 && (e3 = NaN), new _r(e3, t, r, n);
  }
  function lb(e3) {
    if (e3 instanceof _r) return new _r(e3.h, e3.s, e3.l, e3.opacity);
    if (e3 instanceof pa || (e3 = Yl(e3)), !e3) return new _r();
    if (e3 instanceof _r) return e3;
    e3 = e3.rgb();
    var t = e3.r / 255, r = e3.g / 255, n = e3.b / 255, a = Math.min(t, r, n), i = Math.max(t, r, n), o = NaN, l = i - a, s = (i + a) / 2;
    return l ? (t === i ? o = (r - n) / l + (r < n) * 6 : r === i ? o = (n - t) / l + 2 : o = (t - r) / l + 4, l /= s < 0.5 ? i + a : 2 - i - a, o *= 60) : l = s > 0 && s < 1 ? 0 : o, new _r(o, l, s, e3.opacity);
  }
  function T0(e3, t, r, n) {
    return arguments.length === 1 ? lb(e3) : new _r(e3, t, r, n ?? 1);
  }
  function _r(e3, t, r, n) {
    this.h = +e3, this.s = +t, this.l = +r, this.opacity = +n;
  }
  function mx(e3) {
    return e3 = (e3 || 0) % 360, e3 < 0 ? e3 + 360 : e3;
  }
  function _c(e3) {
    return Math.max(0, Math.min(1, e3 || 0));
  }
  function x0(e3, t, r) {
    return (e3 < 60 ? t + (r - t) * e3 / 60 : e3 < 180 ? r : e3 < 240 ? t + (r - t) * (240 - e3) / 60 : t) * 255;
  }
  function mb(e3) {
    if (e3 instanceof Xr) return new Xr(e3.l, e3.a, e3.b, e3.opacity);
    if (e3 instanceof Sn) return gb(e3);
    e3 instanceof st || (e3 = K0(e3));
    var t = R0(e3.r), r = R0(e3.g), n = R0(e3.b), a = b0((0.2225045 * t + 0.7168786 * r + 0.0606169 * n) / db), i, o;
    return t === r && r === n ? i = o = a : (i = b0((0.4360747 * t + 0.3850649 * r + 0.1430804 * n) / cb), o = b0((0.0139322 * t + 0.0971045 * r + 0.7141733 * n) / fb)), new Xr(116 * a - 16, 500 * (i - a), 200 * (a - o), e3.opacity);
  }
  function A0(e3, t, r, n) {
    return arguments.length === 1 ? mb(e3) : new Xr(e3, t, r, n ?? 1);
  }
  function Xr(e3, t, r, n) {
    this.l = +e3, this.a = +t, this.b = +r, this.opacity = +n;
  }
  function b0(e3) {
    return e3 > L8 ? Math.pow(e3, 1 / 3) : e3 / pb + hb;
  }
  function k0(e3) {
    return e3 > so ? e3 * e3 * e3 : pb * (e3 - hb);
  }
  function E0(e3) {
    return 255 * (e3 <= 31308e-7 ? 12.92 * e3 : 1.055 * Math.pow(e3, 1 / 2.4) - 0.055);
  }
  function R0(e3) {
    return (e3 /= 255) <= 0.04045 ? e3 / 12.92 : Math.pow((e3 + 0.055) / 1.055, 2.4);
  }
  function P8(e3) {
    if (e3 instanceof Sn) return new Sn(e3.h, e3.c, e3.l, e3.opacity);
    if (e3 instanceof Xr || (e3 = mb(e3)), e3.a === 0 && e3.b === 0) return new Sn(NaN, 0 < e3.l && e3.l < 100 ? 0 : NaN, e3.l, e3.opacity);
    var t = Math.atan2(e3.b, e3.a) * ub;
    return new Sn(t < 0 ? t + 360 : t, Math.sqrt(e3.a * e3.a + e3.b * e3.b), e3.l, e3.opacity);
  }
  function F0(e3, t, r, n) {
    return arguments.length === 1 ? P8(e3) : new Sn(e3, t, r, n ?? 1);
  }
  function Sn(e3, t, r, n) {
    this.h = +e3, this.c = +t, this.l = +r, this.opacity = +n;
  }
  function gb(e3) {
    if (isNaN(e3.h)) return new Xr(e3.l, 0, 0, e3.opacity);
    var t = e3.h * sb;
    return new Xr(e3.l, Math.cos(t) * e3.c, Math.sin(t) * e3.c, e3.opacity);
  }
  function _8(e3) {
    if (e3 instanceof Xa) return new Xa(e3.h, e3.s, e3.l, e3.opacity);
    e3 instanceof st || (e3 = K0(e3));
    var t = e3.r / 255, r = e3.g / 255, n = e3.b / 255, a = (yx * n + gx * t - vx * r) / (yx + gx - vx), i = n - a, o = (ql * (r - a) - Q0 * i) / Qc, l = Math.sqrt(o * o + i * i) / (ql * a * (1 - a)), s = l ? Math.atan2(o, i) * ub - 120 : NaN;
    return new Xa(s < 0 ? s + 360 : s, l, a, e3.opacity);
  }
  function $0(e3, t, r, n) {
    return arguments.length === 1 ? _8(e3) : new Xa(e3, t, r, n ?? 1);
  }
  function Xa(e3, t, r, n) {
    this.h = +e3, this.s = +t, this.l = +r, this.opacity = +n;
  }
  function yb(e3, t, r, n, a) {
    var i = e3 * e3, o = i * e3;
    return ((1 - 3 * e3 + 3 * i - o) * t + (4 - 6 * i + 3 * o) * r + (1 + 3 * e3 + 3 * i - 3 * o) * n + o * a) / 6;
  }
  function T8(e3) {
    var t = e3.length - 1;
    return function(r) {
      var n = r <= 0 ? r = 0 : r >= 1 ? (r = 1, t - 1) : Math.floor(r * t), a = e3[n], i = e3[n + 1], o = n > 0 ? e3[n - 1] : 2 * a - i, l = n < t - 1 ? e3[n + 2] : 2 * i - a;
      return yb((r - n / t) * t, o, a, i, l);
    };
  }
  function A8(e3) {
    var t = e3.length;
    return function(r) {
      var n = Math.floor(((r %= 1) < 0 ? ++r : r) * t), a = e3[(n + t - 1) % t], i = e3[n % t], o = e3[(n + 1) % t], l = e3[(n + 2) % t];
      return yb((r - n / t) * t, a, i, o, l);
    };
  }
  function wb(e3, t) {
    return function(r) {
      return e3 + r * t;
    };
  }
  function F8(e3, t, r) {
    return e3 = Math.pow(e3, r), t = Math.pow(t, r) - e3, r = 1 / r, function(n) {
      return Math.pow(e3 + n * t, r);
    };
  }
  function Z0(e3, t) {
    var r = t - e3;
    return r ? wb(e3, r > 180 || r < -180 ? r - 360 * Math.round(r / 360) : r) : Zc(isNaN(e3) ? t : e3);
  }
  function $8(e3) {
    return (e3 = +e3) == 1 ? ut : function(t, r) {
      return r - t ? F8(t, r, e3) : Zc(isNaN(t) ? r : t);
    };
  }
  function ut(e3, t) {
    var r = t - e3;
    return r ? wb(e3, r) : Zc(isNaN(e3) ? t : e3);
  }
  function xb(e3) {
    return function(t) {
      var r = t.length, n = new Array(r), a = new Array(r), i = new Array(r), o, l;
      for (o = 0; o < r; ++o) l = Oc(t[o]), n[o] = l.r || 0, a[o] = l.g || 0, i[o] = l.b || 0;
      return n = e3(n), a = e3(a), i = e3(i), l.opacity = 1, function(s) {
        return l.r = n(s), l.g = a(s), l.b = i(s), l + "";
      };
    };
  }
  function z8(e3, t) {
    t || (t = []);
    var r = e3 ? Math.min(t.length, e3.length) : 0, n = t.slice(), a;
    return function(i) {
      for (a = 0; a < r; ++a) n[a] = e3[a] * (1 - i) + t[a] * i;
      return n;
    };
  }
  function O8(e3) {
    return ArrayBuffer.isView(e3) && !(e3 instanceof DataView);
  }
  function I8(e3, t) {
    var r = t ? t.length : 0, n = e3 ? Math.min(r, e3.length) : 0, a = new Array(n), i = new Array(r), o;
    for (o = 0; o < n; ++o) a[o] = J0(e3[o], t[o]);
    for (; o < r; ++o) i[o] = t[o];
    return function(l) {
      for (o = 0; o < n; ++o) i[o] = a[o](l);
      return i;
    };
  }
  function j8(e3, t) {
    var r = /* @__PURE__ */ new Date();
    return e3 = +e3, t = +t, function(n) {
      return r.setTime(e3 * (1 - n) + t * n), r;
    };
  }
  function Uc(e3, t) {
    return e3 = +e3, t = +t, function(r) {
      return e3 * (1 - r) + t * r;
    };
  }
  function U8(e3, t) {
    var r = {}, n = {}, a;
    (e3 === null || typeof e3 != "object") && (e3 = {}), (t === null || typeof t != "object") && (t = {});
    for (a in t) a in e3 ? r[a] = J0(e3[a], t[a]) : n[a] = t[a];
    return function(i) {
      for (a in r) n[a] = r[a](i);
      return n;
    };
  }
  function H8(e3) {
    return function() {
      return e3;
    };
  }
  function B8(e3) {
    return function(t) {
      return e3(t) + "";
    };
  }
  function V8(e3, t) {
    var r = O0.lastIndex = S0.lastIndex = 0, n, a, i, o = -1, l = [], s = [];
    for (e3 = e3 + "", t = t + ""; (n = O0.exec(e3)) && (a = S0.exec(t)); ) (i = a.index) > r && (i = t.slice(r, i), l[o] ? l[o] += i : l[++o] = i), (n = n[0]) === (a = a[0]) ? l[o] ? l[o] += a : l[++o] = a : (l[++o] = null, s.push({ i: o, x: Uc(n, a) })), r = S0.lastIndex;
    return r < t.length && (i = t.slice(r), l[o] ? l[o] += i : l[++o] = i), l.length < 2 ? s[0] ? B8(s[0].x) : H8(t) : (t = s.length, function(u) {
      for (var c = 0, d; c < t; ++c) l[(d = s[c]).i] = d.x(u);
      return l.join("");
    });
  }
  function J0(e3, t) {
    var r = typeof t, n;
    return t == null || r === "boolean" ? Zc(t) : (r === "number" ? Uc : r === "string" ? (n = Yl(t)) ? (t = n, z0) : V8 : t instanceof Yl ? z0 : t instanceof Date ? j8 : O8(t) ? z8 : Array.isArray(t) ? I8 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? U8 : Uc)(e3, t);
  }
  function bb(e3, t) {
    return e3 = +e3, t = +t, function(r) {
      return Math.round(e3 * (1 - r) + t * r);
    };
  }
  function kb(e3) {
    return function(t, r) {
      var n = e3((t = T0(t)).h, (r = T0(r)).h), a = ut(t.s, r.s), i = ut(t.l, r.l), o = ut(t.opacity, r.opacity);
      return function(l) {
        return t.h = n(l), t.s = a(l), t.l = i(l), t.opacity = o(l), t + "";
      };
    };
  }
  function q8(e3, t) {
    var r = ut((e3 = A0(e3)).l, (t = A0(t)).l), n = ut(e3.a, t.a), a = ut(e3.b, t.b), i = ut(e3.opacity, t.opacity);
    return function(o) {
      return e3.l = r(o), e3.a = n(o), e3.b = a(o), e3.opacity = i(o), e3 + "";
    };
  }
  function Eb(e3) {
    return function(t, r) {
      var n = e3((t = F0(t)).h, (r = F0(r)).h), a = ut(t.c, r.c), i = ut(t.l, r.l), o = ut(t.opacity, r.opacity);
      return function(l) {
        return t.h = n(l), t.c = a(l), t.l = i(l), t.opacity = o(l), t + "";
      };
    };
  }
  function Rb(e3) {
    return (function t(r) {
      r = +r;
      function n(a, i) {
        var o = e3((a = $0(a)).h, (i = $0(i)).h), l = ut(a.s, i.s), s = ut(a.l, i.l), u = ut(a.opacity, i.opacity);
        return function(c) {
          return a.h = o(c), a.s = l(c), a.l = s(Math.pow(c, r)), a.opacity = u(c), a + "";
        };
      }
      return n.gamma = t, n;
    })(1);
  }
  function Z8(e3) {
    return function() {
      return e3;
    };
  }
  function J8(e3) {
    return +e3;
  }
  function oo(e3) {
    return e3;
  }
  function I0(e3, t) {
    return (t -= e3 = +e3) ? function(r) {
      return (r - e3) / t;
    } : Z8(isNaN(t) ? NaN : 0.5);
  }
  function e7(e3, t) {
    var r;
    return e3 > t && (r = e3, e3 = t, t = r), function(n) {
      return Math.max(e3, Math.min(t, n));
    };
  }
  function t7(e3, t, r) {
    var n = e3[0], a = e3[1], i = t[0], o = t[1];
    return a < n ? (n = I0(a, n), i = r(o, i)) : (n = I0(n, a), i = r(i, o)), function(l) {
      return i(n(l));
    };
  }
  function r7(e3, t, r) {
    var n = Math.min(e3.length, t.length) - 1, a = new Array(n), i = new Array(n), o = -1;
    for (e3[n] < e3[0] && (e3 = e3.slice().reverse(), t = t.slice().reverse()); ++o < n; ) a[o] = I0(e3[o], e3[o + 1]), i[o] = r(t[o], t[o + 1]);
    return function(l) {
      var s = h8(e3, l, 1, n) - 1;
      return i[s](a[s](l));
    };
  }
  function n7(e3, t) {
    return t.domain(e3.domain()).range(e3.range()).interpolate(e3.interpolate()).clamp(e3.clamp()).unknown(e3.unknown());
  }
  function a7() {
    var e3 = wx, t = wx, r = J0, n, a, i, o = oo, l, s, u;
    function c() {
      var f = Math.min(e3.length, t.length);
      return o !== oo && (o = e7(e3[0], e3[f - 1])), l = f > 2 ? r7 : t7, s = u = null, d;
    }
    function d(f) {
      return f == null || isNaN(f = +f) ? i : (s || (s = l(e3.map(n), t, r)))(n(o(f)));
    }
    return d.invert = function(f) {
      return o(a((u || (u = l(t, e3.map(n), Uc)))(f)));
    }, d.domain = function(f) {
      return arguments.length ? (e3 = Array.from(f, J8), c()) : e3.slice();
    }, d.range = function(f) {
      return arguments.length ? (t = Array.from(f), c()) : t.slice();
    }, d.rangeRound = function(f) {
      return t = Array.from(f), r = bb, c();
    }, d.clamp = function(f) {
      return arguments.length ? (o = f ? true : oo, c()) : o !== oo;
    }, d.interpolate = function(f) {
      return arguments.length ? (r = f, c()) : r;
    }, d.unknown = function(f) {
      return arguments.length ? (i = f, d) : i;
    }, function(f, p) {
      return n = f, a = p, c();
    };
  }
  function i7() {
    return a7()(oo, oo);
  }
  function o7(e3) {
    return Math.abs(e3 = Math.round(e3)) >= 1e21 ? e3.toLocaleString("en").replace(/,/g, "") : e3.toString(10);
  }
  function Hc(e3, t) {
    if ((r = (e3 = t ? e3.toExponential(t - 1) : e3.toExponential()).indexOf("e")) < 0) return null;
    var r, n = e3.slice(0, r);
    return [n.length > 1 ? n[0] + n.slice(2) : n, +e3.slice(r + 1)];
  }
  function co(e3) {
    return e3 = Hc(Math.abs(e3)), e3 ? e3[1] : NaN;
  }
  function l7(e3, t) {
    return function(r, n) {
      for (var a = r.length, i = [], o = 0, l = e3[0], s = 0; a > 0 && l > 0 && (s + l + 1 > n && (l = Math.max(1, n - s)), i.push(r.substring(a -= l, a + l)), !((s += l + 1) > n)); ) l = e3[o = (o + 1) % e3.length];
      return i.reverse().join(t);
    };
  }
  function s7(e3) {
    return function(t) {
      return t.replace(/[0-9]/g, function(r) {
        return e3[+r];
      });
    };
  }
  function Bc(e3) {
    if (!(t = u7.exec(e3))) throw new Error("invalid format: " + e3);
    var t;
    return new em({ fill: t[1], align: t[2], sign: t[3], symbol: t[4], zero: t[5], width: t[6], comma: t[7], precision: t[8] && t[8].slice(1), trim: t[9], type: t[10] });
  }
  function em(e3) {
    this.fill = e3.fill === void 0 ? " " : e3.fill + "", this.align = e3.align === void 0 ? ">" : e3.align + "", this.sign = e3.sign === void 0 ? "-" : e3.sign + "", this.symbol = e3.symbol === void 0 ? "" : e3.symbol + "", this.zero = !!e3.zero, this.width = e3.width === void 0 ? void 0 : +e3.width, this.comma = !!e3.comma, this.precision = e3.precision === void 0 ? void 0 : +e3.precision, this.trim = !!e3.trim, this.type = e3.type === void 0 ? "" : e3.type + "";
  }
  function c7(e3) {
    e: for (var t = e3.length, r = 1, n = -1, a; r < t; ++r) switch (e3[r]) {
      case ".":
        n = a = r;
        break;
      case "0":
        n === 0 && (n = r), a = r;
        break;
      default:
        if (!+e3[r]) break e;
        n > 0 && (n = 0);
        break;
    }
    return n > 0 ? e3.slice(0, n) + e3.slice(a + 1) : e3;
  }
  function d7(e3, t) {
    var r = Hc(e3, t);
    if (!r) return e3 + "";
    var n = r[0], a = r[1], i = a - (Sb = Math.max(-8, Math.min(8, Math.floor(a / 3))) * 3) + 1, o = n.length;
    return i === o ? n : i > o ? n + new Array(i - o + 1).join("0") : i > 0 ? n.slice(0, i) + "." + n.slice(i) : "0." + new Array(1 - i).join("0") + Hc(e3, Math.max(0, t + i - 1))[0];
  }
  function xx(e3, t) {
    var r = Hc(e3, t);
    if (!r) return e3 + "";
    var n = r[0], a = r[1];
    return a < 0 ? "0." + new Array(-a).join("0") + n : n.length > a + 1 ? n.slice(0, a + 1) + "." + n.slice(a + 1) : n + new Array(a - n.length + 2).join("0");
  }
  function kx(e3) {
    return e3;
  }
  function f7(e3) {
    var t = e3.grouping === void 0 || e3.thousands === void 0 ? kx : l7(Ex.call(e3.grouping, Number), e3.thousands + ""), r = e3.currency === void 0 ? "" : e3.currency[0] + "", n = e3.currency === void 0 ? "" : e3.currency[1] + "", a = e3.decimal === void 0 ? "." : e3.decimal + "", i = e3.numerals === void 0 ? kx : s7(Ex.call(e3.numerals, String)), o = e3.percent === void 0 ? "%" : e3.percent + "", l = e3.minus === void 0 ? "\u2212" : e3.minus + "", s = e3.nan === void 0 ? "NaN" : e3.nan + "";
    function u(d) {
      d = Bc(d);
      var f = d.fill, p = d.align, v = d.sign, y = d.symbol, g = d.zero, m = d.width, h = d.comma, w = d.precision, b = d.trim, E = d.type;
      E === "n" ? (h = true, E = "g") : bx[E] || (w === void 0 && (w = 12), b = true, E = "g"), (g || f === "0" && p === "=") && (g = true, f = "0", p = "=");
      var N = y === "$" ? r : y === "#" && /[boxX]/.test(E) ? "0" + E.toLowerCase() : "", M = y === "$" ? n : /[%p]/.test(E) ? o : "", x = bx[E], C = /[defgprs%]/.test(E);
      w = w === void 0 ? 6 : /[gprs]/.test(E) ? Math.max(1, Math.min(21, w)) : Math.max(0, Math.min(20, w));
      function D(T) {
        var P = N, _ = M, O, te, X;
        if (E === "c") _ = x(T) + _, T = "";
        else {
          T = +T;
          var ie = T < 0 || 1 / T < 0;
          if (T = isNaN(T) ? s : x(Math.abs(T), w), b && (T = c7(T)), ie && +T == 0 && v !== "+" && (ie = false), P = (ie ? v === "(" ? v : l : v === "-" || v === "(" ? "" : v) + P, _ = (E === "s" ? Rx[8 + Sb / 3] : "") + _ + (ie && v === "(" ? ")" : ""), C) {
            for (O = -1, te = T.length; ++O < te; ) if (X = T.charCodeAt(O), 48 > X || X > 57) {
              _ = (X === 46 ? a + T.slice(O + 1) : T.slice(O)) + _, T = T.slice(0, O);
              break;
            }
          }
        }
        h && !g && (T = t(T, 1 / 0));
        var Le = P.length + T.length + _.length, oe = Le < m ? new Array(m - Le + 1).join(f) : "";
        switch (h && g && (T = t(oe + T, oe.length ? m - _.length : 1 / 0), oe = ""), p) {
          case "<":
            T = P + T + _ + oe;
            break;
          case "=":
            T = P + oe + T + _;
            break;
          case "^":
            T = oe.slice(0, Le = oe.length >> 1) + P + T + _ + oe.slice(Le);
            break;
          default:
            T = oe + P + T + _;
            break;
        }
        return i(T);
      }
      return D.toString = function() {
        return d + "";
      }, D;
    }
    function c(d, f) {
      var p = u((d = Bc(d), d.type = "f", d)), v = Math.max(-8, Math.min(8, Math.floor(co(f) / 3))) * 3, y = Math.pow(10, -v), g = Rx[8 + v / 3];
      return function(m) {
        return p(y * m) + g;
      };
    }
    return { format: u, formatPrefix: c };
  }
  function h7(e3) {
    return Tc = f7(e3), Cb = Tc.format, Db = Tc.formatPrefix, Tc;
  }
  function p7(e3) {
    return Math.max(0, -co(Math.abs(e3)));
  }
  function m7(e3, t) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(co(t) / 3))) * 3 - co(Math.abs(e3)));
  }
  function g7(e3, t) {
    return e3 = Math.abs(e3), t = Math.abs(t) - e3, Math.max(0, co(t) - co(e3)) + 1;
  }
  function v7(e3, t, r, n) {
    var a = y8(e3, t, r), i;
    switch (n = Bc(n ?? ",f"), n.type) {
      case "s": {
        var o = Math.max(Math.abs(e3), Math.abs(t));
        return n.precision == null && !isNaN(i = m7(a, o)) && (n.precision = i), Db(n, o);
      }
      case "":
      case "e":
      case "g":
      case "p":
      case "r": {
        n.precision == null && !isNaN(i = g7(a, Math.max(Math.abs(e3), Math.abs(t)))) && (n.precision = i - (n.type === "e"));
        break;
      }
      case "f":
      case "%": {
        n.precision == null && !isNaN(i = p7(a)) && (n.precision = i - (n.type === "%") * 2);
        break;
      }
    }
    return Cb(n);
  }
  function y7(e3) {
    var t = e3.domain;
    return e3.ticks = function(r) {
      var n = t();
      return v8(n[0], n[n.length - 1], r ?? 10);
    }, e3.tickFormat = function(r, n) {
      var a = t();
      return v7(a[0], a[a.length - 1], r ?? 10, n);
    }, e3.nice = function(r) {
      r == null && (r = 10);
      var n = t(), a = 0, i = n.length - 1, o = n[a], l = n[i], s, u, c = 10;
      for (l < o && (u = o, o = l, l = u, u = a, a = i, i = u); c-- > 0; ) {
        if (u = ab(o, l, r), u === s) return n[a] = o, n[i] = l, t(n);
        if (u > 0) o = Math.floor(o / u) * u, l = Math.ceil(l / u) * u;
        else if (u < 0) o = Math.ceil(o * u) / u, l = Math.floor(l * u) / u;
        else break;
        s = u;
      }
      return e3;
    }, e3;
  }
  function Nb() {
    var e3 = i7();
    return e3.copy = function() {
      return n7(e3, Nb());
    }, G0.apply(e3, arguments), y7(e3);
  }
  function mt(e3, t, r, n) {
    function a(i) {
      return e3(i = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+i)), i;
    }
    return a.floor = (i) => (e3(i = /* @__PURE__ */ new Date(+i)), i), a.ceil = (i) => (e3(i = new Date(i - 1)), t(i, 1), e3(i), i), a.round = (i) => {
      let o = a(i), l = a.ceil(i);
      return i - o < l - i ? o : l;
    }, a.offset = (i, o) => (t(i = /* @__PURE__ */ new Date(+i), o == null ? 1 : Math.floor(o)), i), a.range = (i, o, l) => {
      let s = [];
      if (i = a.ceil(i), l = l == null ? 1 : Math.floor(l), !(i < o) || !(l > 0)) return s;
      let u;
      do
        s.push(u = /* @__PURE__ */ new Date(+i)), t(i, l), e3(i);
      while (u < i && i < o);
      return s;
    }, a.filter = (i) => mt((o) => {
      if (o >= o) for (; e3(o), !i(o); ) o.setTime(o - 1);
    }, (o, l) => {
      if (o >= o) if (l < 0) for (; ++l <= 0; ) for (; t(o, -1), !i(o); ) ;
      else for (; --l >= 0; ) for (; t(o, 1), !i(o); ) ;
    }), r && (a.count = (i, o) => (C0.setTime(+i), D0.setTime(+o), e3(C0), e3(D0), Math.floor(r(C0, D0))), a.every = (i) => (i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? a.filter(n ? (o) => n(o) % i === 0 : (o) => a.count(0, o) % i === 0) : a)), a;
  }
  function ei(e3) {
    return mt((t) => {
      t.setDate(t.getDate() - (t.getDay() + 7 - e3) % 7), t.setHours(0, 0, 0, 0);
    }, (t, r) => {
      t.setDate(t.getDate() + r * 7);
    }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) / 6048e5);
  }
  function ti(e3) {
    return mt((t) => {
      t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e3) % 7), t.setUTCHours(0, 0, 0, 0);
    }, (t, r) => {
      t.setUTCDate(t.getUTCDate() + r * 7);
    }, (t, r) => (r - t) / 6048e5);
  }
  function _7(e3, t) {
    t.domain && ("nice" in e3 || "quantiles" in e3 || "padding" in e3, e3.domain(t.domain));
  }
  function T7(e3, t) {
    t.range && ("padding" in e3, e3.range(t.range));
  }
  function A7(e3, t) {
    "align" in e3 && "align" in t && typeof t.align < "u" && e3.align(t.align);
  }
  function F7(e3, t) {
    "base" in e3 && "base" in t && typeof t.base < "u" && e3.base(t.base);
  }
  function $7(e3, t) {
    "clamp" in e3 && "clamp" in t && typeof t.clamp < "u" && e3.clamp(t.clamp);
  }
  function z7(e3, t) {
    "constant" in e3 && "constant" in t && typeof t.constant < "u" && e3.constant(t.constant);
  }
  function O7(e3, t) {
    "exponent" in e3 && "exponent" in t && typeof t.exponent < "u" && e3.exponent(t.exponent);
  }
  function I7(e3) {
    switch (e3) {
      case "lab":
      case "hcl":
      case "hcl-long":
      case "hsl":
      case "hsl-long":
      case "cubehelix":
      case "cubehelix-long":
      case "rgb":
        return Sx[e3];
      default:
    }
    var t = e3.type, r = e3.gamma, n = Sx[t];
    return typeof r > "u" ? n : n.gamma(r);
  }
  function j7(e3, t) {
    if ("interpolate" in t && "interpolate" in e3 && typeof t.interpolate < "u") {
      var r = I7(t.interpolate);
      e3.interpolate(r);
    }
  }
  function B7(e3) {
    var t = e3.tickFormat(1, H7)(U7);
    return t === "2020-02-02 03:04";
  }
  function V7(e3, t) {
    if ("nice" in t && typeof t.nice < "u" && "nice" in e3) {
      var r = t.nice;
      if (typeof r == "boolean") r && e3.nice();
      else if (typeof r == "number") e3.nice(r);
      else {
        var n = e3, a = B7(n);
        if (typeof r == "string") n.nice(a ? Dx[r] : Cx[r]);
        else {
          var i = r.interval, o = r.step, l = (a ? Dx[i] : Cx[i]).every(o);
          l != null && n.nice(l);
        }
      }
    }
  }
  function W7(e3, t) {
    "padding" in e3 && "padding" in t && typeof t.padding < "u" && e3.padding(t.padding), "paddingInner" in e3 && "paddingInner" in t && typeof t.paddingInner < "u" && e3.paddingInner(t.paddingInner), "paddingOuter" in e3 && "paddingOuter" in t && typeof t.paddingOuter < "u" && e3.paddingOuter(t.paddingOuter);
  }
  function Y7(e3, t) {
    if (t.reverse) {
      var r = e3.range().slice().reverse();
      "padding" in e3, e3.range(r);
    }
  }
  function q7(e3, t) {
    "round" in t && typeof t.round < "u" && (t.round && "interpolate" in t && typeof t.interpolate < "u" ? console.warn("[visx/scale/applyRound] ignoring round: scale config contains round and interpolate. only applying interpolate. config:", t) : "round" in e3 ? e3.round(t.round) : "interpolate" in e3 && t.round && e3.interpolate(bb));
  }
  function G7(e3, t) {
    "unknown" in e3 && "unknown" in t && typeof t.unknown < "u" && e3.unknown(t.unknown);
  }
  function K7(e3, t) {
    if ("zero" in t && t.zero === true) {
      var r = e3.domain(), n = r[0], a = r[1], i = a < n, o = i ? [a, n] : [n, a], l = o[0], s = o[1], u = [Math.min(0, l), Math.max(0, s)];
      e3.domain(i ? u.reverse() : u);
    }
  }
  function Ib() {
    for (var e3 = arguments.length, t = new Array(e3), r = 0; r < e3; r++) t[r] = arguments[r];
    var n = new Set(t), a = X7.filter(function(i) {
      return n.has(i);
    });
    return function(i, o) {
      return typeof o < "u" && a.forEach(function(l) {
        Q7[l](i, o);
      }), i;
    };
  }
  function J7(e3) {
    return Z7(ob(), e3);
  }
  function Vc(e3) {
    return eD(Nb(), e3);
  }
  function H0() {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
  }
  function jb() {
    return new H0();
  }
  function Ac(e3) {
    return function() {
      return e3;
    };
  }
  function Ub(e3) {
    this._context = e3;
  }
  function nD(e3) {
    return new Ub(e3);
  }
  function aD(e3) {
    return e3[0];
  }
  function iD(e3) {
    return e3[1];
  }
  function oD() {
    var e3 = aD, t = iD, r = Ac(true), n = null, a = nD, i = null;
    function o(l) {
      var s, u = l.length, c, d = false, f;
      for (n == null && (i = a(f = rD())), s = 0; s <= u; ++s) !(s < u && r(c = l[s], s, l)) === d && ((d = !d) ? i.lineStart() : i.lineEnd()), d && i.point(+e3(c, s, l), +t(c, s, l));
      if (f) return i = null, f + "" || null;
    }
    return o.x = function(l) {
      return arguments.length ? (e3 = typeof l == "function" ? l : Ac(+l), o) : e3;
    }, o.y = function(l) {
      return arguments.length ? (t = typeof l == "function" ? l : Ac(+l), o) : t;
    }, o.defined = function(l) {
      return arguments.length ? (r = typeof l == "function" ? l : Ac(!!l), o) : r;
    }, o.curve = function(l) {
      return arguments.length ? (a = l, n != null && (i = a(n)), o) : a;
    }, o.context = function(l) {
      return arguments.length ? (l == null ? n = i = null : i = a(n = l), o) : n;
    }, o;
  }
  function Nx(e3, t) {
    e3(t);
  }
  function lD(e3) {
    var t = e3 === void 0 ? {} : e3, r = t.x, n = t.y, a = t.defined, i = t.curve, o = oD();
    return r && Nx(o.x, r), n && Nx(o.y, n), a && o.defined(a), i && o.curve(i), o;
  }
  function B0() {
    return B0 = Object.assign ? Object.assign.bind() : function(e3) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e3[n] = r[n]);
      }
      return e3;
    }, B0.apply(this, arguments);
  }
  function cD(e3, t) {
    if (e3 == null) return {};
    var r = {}, n = Object.keys(e3), a, i;
    for (i = 0; i < n.length; i++) a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e3[a]);
    return r;
  }
  function dD(e3) {
    var t = e3.children, r = e3.data, n = r === void 0 ? [] : r, a = e3.x, i = e3.y, o = e3.fill, l = o === void 0 ? "transparent" : o, s = e3.className, u = e3.curve, c = e3.innerRef, d = e3.defined, f = d === void 0 ? function() {
      return true;
    } : d, p = cD(e3, uD), v = lD({ x: a, y: i, defined: f, curve: u });
    return t ? $c.default.createElement($c.default.Fragment, null, t({ path: v })) : $c.default.createElement("path", B0({ ref: c, className: (0, sD.default)("visx-linepath", s), d: v(n) || "", fill: l, strokeLinecap: "round" }, p));
  }
  function V0() {
    return V0 = Object.assign ? Object.assign.bind() : function(e3) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e3[n] = r[n]);
      }
      return e3;
    }, V0.apply(this, arguments);
  }
  function pD(e3, t) {
    if (e3 == null) return {};
    var r = {}, n = Object.keys(e3), a, i;
    for (i = 0; i < n.length; i++) a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e3[a]);
    return r;
  }
  function Mx(e3) {
    var t = e3.className, r = e3.innerRef, n = pD(e3, hD);
    return Hb.default.createElement("rect", V0({ ref: r, className: (0, fD.default)("visx-bar", t) }, n));
  }
  function Be(e3) {
    let t = (0, Ql.useContext)(Jc);
    return t === null ? {} : Vb(t, { mark: e3 });
  }
  function Bb() {
    return (0, Ql.useContext)(Jc) === null ? {} : { "data-live-mark-text": "" };
  }
  function Vb(e3, t = {}) {
    return t.mark ? { "data-live-id": e3, "data-live-mark": t.mark } : { "data-live-id": e3 };
  }
  function vD(e3 = "photo") {
    let t = ed.Children.toArray(qb[gD.includes(e3) ? e3 : "photo"].props.children);
    return (0, R.jsx)("svg", { className: "file-placeholder-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.25", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", style: { "--file-strokes": t.length }, children: t.map((r, n) => (0, ed.cloneElement)(r, { pathLength: 1, style: { "--file-stroke": n } })) });
  }
  function Dn({ variant: e3 = "secondary", compact: t = false, pill: r = false, selected: n, unavailable: a = false, states: i, state: o, className: l, children: s, ...u }) {
    let c = ["file-button", t && "is-compact", r && "is-pill", a && "is-unavailable", l].filter(Boolean).join(" "), d = i && o !== void 0 ? { states: i, state: o } : null, f = d?.states[d.state];
    return (0, he.jsx)("button", { type: "button", ...u, className: c, "data-variant": e3, "data-state": d?.state, "aria-pressed": n, disabled: a || u.disabled || f?.variant === "disabled", children: d ? (0, he.jsx)(CD, { ...d }) : s });
  }
  function rd({ label: e3, className: t, ...r }) {
    let n = xe();
    return (0, he.jsx)(Dn, { variant: "ghost", ...r, className: ["file-close", t].filter(Boolean).join(" "), "aria-label": e3 ?? n.close, children: mD });
  }
  function kD(e3, t) {
    let r = document.createElement("textarea");
    r.value = e3, r.setAttribute("readonly", ""), r.style.cssText = "position:fixed;inset-block-start:0;opacity:0;pointer-events:none;font-size:16px";
    let n = document.activeElement;
    (t.closest("dialog") ?? document.body).append(r), r.focus({ preventScroll: true }), r.select(), r.setSelectionRange(0, r.value.length);
    let a = document.activeElement === r && r.selectionStart === 0 && r.selectionEnd === r.value.length, i;
    try {
      i = a && document.execCommand("copy");
    } catch {
      i = false;
    }
    return r.remove(), n?.focus({ preventScroll: true }), i ? Promise.resolve() : Promise.race([Promise.resolve().then(() => navigator.clipboard.writeText(e3)), new Promise((o, l) => setTimeout(l, bD))]);
  }
  function ED({ text: e3, label: t, variant: r = "secondary", compact: n = true }) {
    let a = xe(), [i, o] = (0, Lt.useState)("idle");
    (0, Lt.useEffect)(() => {
      if (i === "idle") return;
      let s = setTimeout(() => o("idle"), xD);
      return () => clearTimeout(s);
    }, [i]);
    let l = { idle: { icon: (0, he.jsx)(yD, { size: 16 }), label: t ?? a.copy }, copied: { icon: (0, he.jsx)(Kb, { size: 16 }), label: a.copied }, failed: { label: a.copyFailed } };
    return (0, he.jsxs)(he.Fragment, { children: [(0, he.jsx)(Dn, { variant: r, compact: n, states: l, state: i, onClick: (s) => {
      kD(e3, s.currentTarget).then(() => o("copied"), () => o("failed"));
    } }), (0, he.jsx)("span", { className: "file-visually-hidden", role: "status", children: i === "idle" ? "" : l[i].label })] });
  }
  function Lx({ state: e3, className: t, hidden: r = false, faceRef: n }) {
    return (0, he.jsxs)("span", { ref: n, className: t, "aria-hidden": r || void 0, children: [e3.icon, (0, he.jsx)("span", { className: "file-button-label", children: e3.label }), e3.shortLabel && (0, he.jsx)("span", { className: "file-button-label is-short", children: e3.shortLabel })] });
  }
  function CD({ states: e3, state: t }) {
    let r = (0, Lt.useRef)(null), n = (0, Lt.useRef)(null), a = (0, Lt.useRef)(null), [i, o] = (0, Lt.useState)(null);
    return SD(() => {
      let l = n.current.offsetWidth, s = a.current;
      if (a.current = { state: t, width: l }, !s || s.state === t) return;
      let u = r.current;
      u.style.width = `${s.width}px`, u.offsetWidth, u.style.width = `${l}px`, o(s.state);
      let c = setTimeout(() => {
        u.style.width = "", o(null);
      }, RD);
      return () => clearTimeout(c);
    }, [t]), (0, he.jsxs)("span", { ref: r, className: "file-button-slot", children: [i !== null && (0, he.jsx)(Lx, { state: e3[i], className: "file-button-face is-leaving", hidden: true }, `leaving-${i}`), (0, he.jsx)(Lx, { state: e3[t], className: i !== null ? "file-button-face is-entering" : "file-button-face", faceRef: n }, t)] });
  }
  function Xb({ href: e3, variant: t = "secondary", compact: r = false, pill: n = false, children: a }) {
    let i = t5(e3), o = Be(), l = ["file-button", r && "is-compact", n && "is-pill"].filter(Boolean).join(" ");
    if (!i) return (0, he.jsx)("span", { ...o, className: l, "data-variant": t, children: a });
    let s = /^(?:https?:|mailto:|tel:|\/\/)/i.test(i);
    return (0, he.jsxs)("a", { ...o, className: l, "data-variant": t, href: i, target: s ? "_blank" : void 0, rel: "noopener noreferrer", children: [(0, he.jsx)("span", { children: a }), s && (0, he.jsx)(Gb, { size: 16 })] });
  }
  function DD({ label: e3, options: t, value: r, onChange: n }) {
    let a = Lt.default.useId();
    return (0, he.jsxs)("div", { className: "file-control", role: "group", "aria-labelledby": a, children: [(0, he.jsx)("span", { id: a, className: "file-control-label", children: e3 }), (0, he.jsx)("div", { className: "file-choice-row", children: t.map((i) => (0, he.jsx)(Dn, { compact: true, selected: i.value === r, unavailable: i.unavailable, onClick: () => n(i.value), children: i.label }, i.value)) })] });
  }
  function ND({ label: e3, value: t, onChange: r, ...n }) {
    let a = Lt.default.useId();
    return (0, he.jsxs)("div", { className: "file-control", children: [(0, he.jsx)("label", { htmlFor: a, className: "file-control-label", children: e3 }), (0, he.jsx)("input", { id: a, className: "file-field", type: "text", value: t, onChange: (i) => r(i.target.value), ...n })] });
  }
  function MD({ label: e3, min: t, max: r, step: n = 1, value: a, onChange: i, describe: o }) {
    let l = Lt.default.useId(), s = `${((a - t) / (r - t || 1) * 100).toFixed(1)}%`;
    return (0, he.jsxs)("div", { className: "file-control", children: [(0, he.jsxs)("div", { className: "file-control-head", children: [(0, he.jsx)("label", { htmlFor: l, className: "file-control-label", children: e3 }), (0, he.jsx)("span", { children: o(a) })] }), (0, he.jsx)("input", { id: l, className: "file-slider", type: "range", min: t, max: r, step: n, value: a, onChange: (u) => i(Number(u.target.value)), style: { "--file-slider-fill": s } })] });
  }
  function im(e3, t) {
    return (0, nd.useEffect)(() => {
      if (!t) return;
      let r = e3.current, n = r.ownerDocument.activeElement, a = !n.matches(":focus-visible"), i = [];
      for (let o = r.parentElement; o; o = o.parentElement) {
        let l = r.ownerDocument.defaultView.getComputedStyle(o);
        o !== r.ownerDocument.scrollingElement && !["auto", "scroll"].includes(l.overflowY) || (i.push({ element: o, overflow: o.style.getPropertyValue("overflow-y"), priority: o.style.getPropertyPriority("overflow-y"), gutter: o.style.getPropertyValue("scrollbar-gutter"), gutterPriority: o.style.getPropertyPriority("scrollbar-gutter") }), (o === r.ownerDocument.documentElement ? r.ownerDocument.defaultView.innerWidth - o.clientWidth : o.offsetWidth - o.clientWidth - parseFloat(l.borderLeftWidth) - parseFloat(l.borderRightWidth)) > 0 && !l.scrollbarGutter.includes("stable") && o.style.setProperty("scrollbar-gutter", "stable", "important"), o.style.setProperty("overflow-y", "hidden", "important"));
      }
      return r.showModal(), r.focus({ preventScroll: true }), () => {
        r.close();
        for (let { element: o, overflow: l, priority: s, gutter: u, gutterPriority: c } of i) o.style.setProperty("overflow-y", l, s), o.style.setProperty("scrollbar-gutter", u, c);
        n.isConnected && (a && (n.setAttribute("data-quiet-focus", ""), n.addEventListener("blur", () => n.removeAttribute("data-quiet-focus"), { once: true })), n.focus({ preventScroll: true }));
      };
    }, [e3, t]), (0, nd.useCallback)((r) => {
      let n = e3.current;
      n.hasAttribute("data-leaving") || (n.setAttribute("data-leaving", ""), Promise.allSettled(n.getAnimations().map((a) => a.finished)).then(r));
    }, [e3]);
  }
  function LD(e3, t, r) {
    let n = Qb(t.scale), a = n === 1 ? Bl : { scale: n, x: Px(t.x, e3.offsetWidth * (n - 1) / 2), y: Px(t.y, e3.offsetHeight * (n - 1) / 2) };
    return e3.style.transition = r ? "transform 200ms ease-out" : "none", e3.style.transform = `translate(${a.x}px, ${a.y}px) scale(${a.scale})`, a;
  }
  function N0(e3, t, r, n) {
    let a = e3.parentElement.getBoundingClientRect(), i = { x: a.left + e3.offsetLeft + e3.offsetWidth / 2, y: a.top + e3.offsetTop + e3.offsetHeight / 2 }, o = Qb(t), l = o / n.scale;
    return { scale: o, x: n.x + (r.x - i.x - n.x) * (1 - l), y: n.y + (r.y - i.y - n.y) * (1 - l) };
  }
  function ad({ photos: e3, start: t, title: r, detail: n, onClose: a }) {
    let i = xe(), o = (0, Nt.useRef)(null), l = (0, Nt.useRef)(null), s = (0, Nt.useRef)(Bl), u = (0, Nt.useRef)(/* @__PURE__ */ new Map()), c = (0, Nt.useRef)(null), d = (0, Nt.useRef)(null), [f, p] = (0, Nt.useState)(t), [v, y] = (0, Nt.useState)(false), g = im(o, true), m = () => g(a), h = (0, Nt.useCallback)((C, D) => {
      s.current = LD(l.current, C, D), y(s.current.scale > 1);
    }, []);
    (0, Nt.useEffect)(() => {
      let C = o.current, D = (T) => {
        T.preventDefault(), T.ctrlKey ? h(N0(l.current, s.current.scale * Math.exp(-T.deltaY * 0.01), { x: T.clientX, y: T.clientY }, s.current), false) : s.current.scale > 1 && h({ ...s.current, x: s.current.x - T.deltaX, y: s.current.y - T.deltaY }, false);
      };
      return C.addEventListener("wheel", D, { passive: false }), () => C.removeEventListener("wheel", D);
    }, [h]), (0, Nt.useEffect)(() => {
      let C = o.current, D = C.ownerDocument.activeElement;
      v && D !== C && C.contains(D) && C.focus({ preventScroll: true });
    }, [v]), (0, Nt.useEffect)(() => {
      let C = o.current, D = C.ownerDocument.activeElement;
      (!D || !C.contains(D) || D.matches(":disabled")) && C.focus({ preventScroll: true });
    }, [f]);
    let w = (C) => {
      let D = Math.min(e3.length - 1, Math.max(0, f + C));
      D !== f && (s.current = Bl, y(false), p(D));
    }, b = (C) => {
      let D = C.target;
      if (D.closest("button")) return;
      let T = D.closest(".file-viewer-stage") ? d.current : "outside";
      d.current = null, !(T === null || T === "handled") && (s.current.scale > 1 ? h(Bl, true) : T === "outside" && m());
    }, E = (C) => {
      if (C.target.closest("button")) return;
      C.preventDefault(), d.current = null;
      try {
        C.currentTarget.setPointerCapture(C.pointerId);
      } catch {
      }
      u.current.set(C.pointerId, { x: C.clientX, y: C.clientY });
      let [D, T] = [...u.current.values()];
      u.current.size === 1 ? c.current = { type: s.current.scale > 1 ? "pan" : "swipe", start: D, origin: s.current, time: Date.now(), onPhoto: C.target === l.current } : u.current.size === 2 && (c.current = { type: "pinch", distance: _x(D, T), middle: Tx(D, T), origin: s.current });
    }, N = (C) => {
      let D = c.current;
      if (!D || !u.current.has(C.pointerId)) return;
      u.current.set(C.pointerId, { x: C.clientX, y: C.clientY });
      let [T, P] = [...u.current.values()];
      if (D.type === "pinch" && P) {
        let _ = Tx(T, P);
        h(N0(l.current, D.origin.scale * _x(T, P) / D.distance, _, { scale: D.origin.scale, x: D.origin.x + _.x - D.middle.x, y: D.origin.y + _.y - D.middle.y }), false);
      } else D.type === "pan" && h({ scale: s.current.scale, x: D.origin.x + C.clientX - D.start.x, y: D.origin.y + C.clientY - D.start.y }, false);
    }, M = (C) => {
      if (!u.current.delete(C.pointerId)) return;
      let D = c.current, [T] = [...u.current.values()];
      if (T) {
        D?.type === "pinch" && (c.current = { type: "pan", start: T, origin: s.current, time: Date.now(), onPhoto: true, afterPinch: true });
        return;
      }
      if (c.current = null, !D) return;
      if (D.type === "pinch" || D.afterPinch) {
        s.current.scale < 1.05 && h(Bl, true);
        return;
      }
      let P = { x: C.clientX - D.start.x, y: C.clientY - D.start.y }, _ = Date.now();
      if (Math.hypot(P.x, P.y) < 10 && _ - D.time < 300) {
        D.onPhoto && s.current.scale === 1 ? (d.current = "handled", h(N0(l.current, 4, { x: C.clientX, y: C.clientY }, s.current), true)) : d.current = D.onPhoto ? "photo" : "outside";
        return;
      }
      D.type === "swipe" && Math.abs(P.x) > 40 && Math.abs(P.x) > Math.abs(P.y) && w(P.x < 0 ? 1 : -1);
    }, x = e3[f];
    return (0, tr.jsxs)("dialog", { ref: o, className: "file-viewer", "data-zoomed": v || void 0, "aria-label": i.photosOf(r), tabIndex: -1, onClick: b, onCancel: (C) => {
      C.preventDefault(), C.stopPropagation(), m();
    }, onKeyDown: (C) => {
      C.key === "Escape" ? (C.preventDefault(), C.stopPropagation(), m()) : (C.key === "ArrowRight" || C.key === "ArrowLeft") && (C.preventDefault(), w(C.key === "ArrowRight" ? 1 : -1));
    }, children: [(0, tr.jsx)("div", { className: "file-viewer-bar", children: (0, tr.jsx)(rd, { className: "file-viewer-button", onClick: m }) }), (0, tr.jsx)("div", { className: "file-viewer-stage", onPointerDown: E, onPointerMove: N, onPointerUp: M, onPointerCancel: M, onDragStart: (C) => C.preventDefault(), children: (0, tr.jsx)("img", { ref: l, src: x.src, alt: x.alt, draggable: false }, x.src) }), (0, tr.jsxs)("div", { className: "file-viewer-footer", children: [e3.length > 1 && (0, tr.jsxs)("div", { className: "file-viewer-steps", children: [(0, tr.jsx)(Dn, { variant: "ghost", className: "file-viewer-button", "aria-label": i.previousPhoto, disabled: f === 0, onClick: () => w(-1), children: Wb }), (0, tr.jsx)("span", { className: "file-viewer-count", "aria-live": "polite", children: i.photoCount(f + 1, e3.length) }), (0, tr.jsx)(Dn, { variant: "ghost", className: "file-viewer-button", "aria-label": i.nextPhoto, disabled: f === e3.length - 1, onClick: () => w(1), children: Yb })] }), (0, tr.jsxs)("span", { className: "file-viewer-title", children: [r, n && ` \xB7 ${n}`] })] })] });
  }
  function Zb({ atStart: e3, atEnd: t, onPrevious: r, onNext: n }) {
    let a = xe();
    return (0, fa.jsxs)("div", { className: "file-strip-arrows", children: [(0, fa.jsx)("button", { type: "button", className: "file-strip-arrow", "aria-label": a.previousPhoto, disabled: e3, onClick: r, children: Wb }), (0, fa.jsx)("button", { type: "button", className: "file-strip-arrow", "aria-label": a.nextPhoto, disabled: t, onClick: n, children: Yb })] });
  }
  function PD(e3) {
    let [t, r] = (0, ri.useState)(null), n = (0, ri.useRef)(null);
    (0, ri.useEffect)(() => {
      let i = e3.current, o = i.ownerDocument.defaultView, l = () => {
        n.current = null;
      }, s = () => {
        n.current !== null && Math.abs(i.scrollLeft - n.current) < 2 && l();
        let u = i.scrollWidth - i.clientWidth;
        r(u < 2 ? null : { atStart: i.scrollLeft < 2, atEnd: i.scrollLeft > u - 2 });
      };
      s(), i.addEventListener("scroll", s, { passive: true });
      for (let u of W0) i.addEventListener(u, l, { passive: true });
      return i.addEventListener("load", s, true), o.addEventListener("resize", s), () => {
        i.removeEventListener("scroll", s);
        for (let u of W0) i.removeEventListener(u, l);
        i.removeEventListener("load", s, true), o.removeEventListener("resize", s);
      };
    }, [e3]);
    let a = (i) => {
      let o = e3.current, l = [...o.children], s = l.map((f) => f.offsetLeft - l[0].offsetLeft), u = n.current ?? o.scrollLeft, c = i > 0 ? s.find((f) => f > u + 2) : [...s].reverse().find((f) => f < u - 2), d = Math.min(o.scrollWidth - o.clientWidth, Math.max(0, c ?? (i > 0 ? o.scrollWidth : 0)));
      n.current = d, o.scrollTo({ left: d, behavior: "smooth" });
    };
    return t && { ...t, onPrevious: () => a(-1), onNext: () => a(1) };
  }
  function Jb({ bleed: e3, className: t, children: r, ...n }) {
    let a = (0, ri.useRef)(null), i = PD(a);
    return (0, fa.jsxs)("div", { className: "file-strip", "data-bleed": e3 || void 0, children: [(0, fa.jsx)("div", { ref: a, ...n, className: [t, e3 && "file-bleed"].filter(Boolean).join(" "), children: r }), i && (0, fa.jsx)(Zb, { ...i })] });
  }
  function id() {
    let e3 = (0, Y0.useRef)(null), t = (0, Y0.useRef)(false), r = (n) => {
      e3.current?.pointerId === n.pointerId && (e3.current = null, delete n.currentTarget.dataset.dragging, n.currentTarget.hasPointerCapture(n.pointerId) && n.currentTarget.releasePointerCapture(n.pointerId));
    };
    return { "data-drag-scroll": "", onPointerEnter: (n) => {
      n.currentTarget.toggleAttribute("data-can-drag", n.pointerType === "mouse" && n.currentTarget.scrollWidth > n.currentTarget.clientWidth);
    }, onPointerDown: (n) => {
      t.current = false, !(n.pointerType !== "mouse" || n.button !== 0 || n.currentTarget.scrollWidth <= n.currentTarget.clientWidth) && n.target.closest("[data-drag-scroll], dialog") === n.currentTarget && (e3.current = { pointerId: n.pointerId, startX: n.clientX, scrollLeft: n.currentTarget.scrollLeft, active: false });
    }, onPointerMove: (n) => {
      let a = e3.current;
      if (!a || a.pointerId !== n.pointerId) return;
      let i = n.clientX - a.startX;
      !a.active && Math.abs(i) < 5 || (a.active || (a.active = true, t.current = true, n.currentTarget.dataset.dragging = "", n.currentTarget.setPointerCapture(n.pointerId)), n.preventDefault(), n.currentTarget.scrollLeft = a.scrollLeft - i);
    }, onPointerUp: r, onPointerCancel: r, onLostPointerCapture: r, onPointerLeave: () => {
      e3.current?.active || (e3.current = null);
    }, onDragStart: (n) => n.preventDefault(), onClickCapture: (n) => {
      !t.current || n.detail === 0 || (t.current = false, n.preventDefault(), n.stopPropagation());
    } };
  }
  function Zr(e3) {
    return { objectFit: e3.fit, objectPosition: e3.position, backgroundColor: e3.background };
  }
  function e5({ icon: e3 }) {
    return (0, U.jsx)("span", { className: "file-placeholder", "aria-hidden": "true", children: vD(e3) });
  }
  function _D({ children: e3, className: t }) {
    return (0, U.jsx)("div", { className: t ? `file-ground ${t}` : "file-ground", children: e3 });
  }
  function TD({ children: e3, width: t = "fluid", className: r, ...n }) {
    return (0, U.jsx)(Kc.Provider, { value: q0(n.lang), children: (0, U.jsx)("main", { dir: Kx(n.lang), ...n, className: r ? `file-card ${r}` : "file-card", "data-width": t, children: e3 }) });
  }
  function t5(e3) {
    if (/^[#./]/.test(e3)) return e3;
    try {
      return AD.includes(new URL(e3).protocol) ? e3 : void 0;
    } catch {
      return;
    }
  }
  function r5({ title: e3, fact: t, factKnown: r = false, intro: n }) {
    return (0, U.jsxs)("header", { ...Be(), className: "file-header", children: [(0, U.jsx)("h1", { className: "file-title", children: e3 }), t && (0, U.jsx)("p", { className: r ? "file-fact is-known" : "file-fact", children: t }), n && (0, U.jsx)("p", { className: "file-intro", children: n })] });
  }
  function n5({ label: e3, heading: t = false, children: r }) {
    let n = ma.default.useId();
    return (0, U.jsxs)("section", { ...Be("loop"), className: "file-group", "aria-labelledby": n, children: [typeof t == "string" ? (0, U.jsxs)("hgroup", { className: "file-group-head", children: [(0, U.jsx)("p", { className: "file-group-label", children: e3 }), (0, U.jsx)("h2", { id: n, className: "file-group-heading", children: t })] }) : (0, U.jsx)("h2", { id: n, className: t ? "file-group-heading" : "file-group-label", children: e3 }), r] });
  }
  function i5({ numbered: e3 = false, children: t }) {
    let r = Be();
    return e3 ? (0, U.jsx)(a5.Provider, { value: true, children: (0, U.jsx)("ol", { ...r, className: "file-rows is-numbered", children: t }) }) : (0, U.jsx)("div", { ...r, className: "file-rows", children: t });
  }
  function o5({ number: e3, thumbnail: t, name: r, detail: n, value: a, valueKnown: i = false, checked: o }) {
    let l = (0, ma.useContext)(a5);
    return (0, U.jsxs)(l ? "li" : "div", { ...Be("stroke"), className: "file-row", style: l && e3 !== void 0 ? { counterSet: `file-row ${e3}` } : void 0, children: [e3 !== void 0 ? (0, U.jsx)("span", { className: "file-row-slot is-number", children: e3 }) : l && (0, U.jsx)("span", { className: "file-row-slot is-number is-counted" }), o !== void 0 && (0, U.jsx)("span", { className: "file-row-check", role: "checkbox", "aria-checked": o, "aria-readonly": "true", "aria-label": r }), t && (0, U.jsxs)("span", { className: "file-row-slot", children: [(0, U.jsx)(e5, { icon: t.icon }), t.src && (0, U.jsx)("img", { src: t.src, alt: t.alt, style: Zr(t), loading: "lazy" })] }), (0, U.jsxs)("div", { className: "file-row-body", children: [(0, U.jsxs)("div", { className: "file-row-main", children: [(0, U.jsx)("span", { ...Bb(), className: "file-strong", children: r }), n && (0, U.jsx)("span", { className: "file-row-detail", children: n })] }), a && (0, U.jsx)("bdi", { className: i ? "file-row-value file-known" : "file-row-value", children: a })] })] });
  }
  function od({ items: e3 }) {
    return (0, U.jsx)("dl", { ...Be(), className: "file-facts", children: e3.map((t) => (0, U.jsxs)("div", { children: [(0, U.jsx)("dt", { children: t.label }), (0, U.jsx)("dd", { children: (0, U.jsx)("bdi", { children: t.value }) })] }, t.label)) });
  }
  function l5({ children: e3 }) {
    return (0, U.jsx)("div", { ...Be(), className: "file-text", children: e3 });
  }
  function s5({ children: e3, sub: t }) {
    return (0, U.jsxs)("div", { ...Be("stroke"), className: "file-heading", children: [(0, U.jsx)("span", { ...Bb(), className: "file-strong", children: e3 }), t && (0, U.jsx)("span", { className: "file-secondary", children: t })] });
  }
  function u5({ children: e3 }) {
    return (0, U.jsx)("p", { ...Be("stroke"), className: "file-p", children: e3 });
  }
  function c5({ items: e3 }) {
    return (0, U.jsx)("ul", { ...Be(), className: "file-bullets", children: e3.map((t, r) => (0, U.jsx)("li", { children: t }, r)) });
  }
  function d5({ children: e3 }) {
    return (0, U.jsx)("p", { ...Be("stroke"), className: "file-key file-bar", children: e3 });
  }
  function f5({ src: e3, alt: t, caption: r, fit: n = "contain", width: a, height: i }) {
    let o = n === "contain" && a && i ? { width: `min(${a}px, 100%, var(--file-photo-max-height) * ${a / i})` } : void 0;
    return (0, U.jsxs)("figure", { ...Be("loop"), className: "file-figure", "data-fit": n, children: [(0, U.jsx)("img", { src: e3, alt: t, width: a, height: i, style: o, loading: "lazy" }), (0, U.jsx)("figcaption", { children: r })] });
  }
  function h5({ children: e3 }) {
    return (0, U.jsx)("p", { ...Be("stroke"), className: "file-caption", children: e3 });
  }
  function p5() {
    return (0, U.jsx)("hr", { ...Be(), className: "file-rule" });
  }
  function om({ href: e3, children: t }) {
    let r = t5(e3);
    return r ? (0, U.jsx)("a", { className: "file-link", href: r, target: /^(?:https?:|mailto:|tel:|\/\/)/i.test(r) ? "_blank" : void 0, rel: "noopener noreferrer", children: t }) : (0, U.jsx)("span", { className: "file-link", children: t });
  }
  function m5({ title: e3, children: t, tone: r = "note" }) {
    return (0, U.jsxs)("aside", { ...Be(), className: "file-callout file-bar", "data-tone": r, children: [(0, U.jsx)("span", { className: "file-strong", children: e3 }), (0, U.jsx)("span", { children: t })] });
  }
  function g5({ items: e3 }) {
    return (0, U.jsx)("ol", { ...Be(), className: "file-steps", children: e3.map((t, r) => (0, U.jsxs)("li", { children: [(0, U.jsx)("span", { className: "file-step-n", children: r + 1 }), (0, U.jsx)("span", { children: t })] }, r)) });
  }
  function v5({ caption: e3, options: t, rows: r }) {
    let n = xe(), a = Be("loop"), i = (o, l) => ({ order: o * (r.length + 1) + l });
    return (0, U.jsx)("div", { ...a, className: "file-table-scroll", role: "region", "aria-label": e3, tabIndex: 0, children: (0, U.jsxs)("table", { className: "file-table is-options is-stacking", style: { "--file-table-columns": t.length + 1 }, children: [(0, U.jsx)("caption", { className: "file-visually-hidden", children: e3 }), (0, U.jsx)("thead", { children: (0, U.jsxs)("tr", { children: [(0, U.jsx)("th", { scope: "col", className: "file-table-corner", children: (0, U.jsx)("span", { className: "file-visually-hidden", children: n.attribute }) }), t.map((o, l) => (0, U.jsxs)("th", { scope: "col", style: i(l, 0), children: [(0, U.jsx)("span", { className: "file-strong", children: o.name }), (0, U.jsx)("span", { className: "file-secondary", children: o.number })] }, o.number))] }) }), (0, U.jsx)("tbody", { children: r.map((o, l) => (0, U.jsxs)("tr", { children: [(0, U.jsx)("th", { scope: "row", children: o.label }), o.values.map((s, u) => (0, U.jsxs)("td", { className: o.best === u ? "is-best" : void 0, style: i(u, l + 1), children: [(0, U.jsx)("span", { className: "file-cell-label", children: o.label }), (0, U.jsx)("bdi", { children: s })] }, u))] }, o.label)) })] }) });
  }
  function lm({ items: e3, label: t, title: r = t, layout: n = "grid", bleed: a = n === "strip" && e3.length > 1 }) {
    let i = xe(), o = id(), l = Be(), [s, u] = (0, ma.useState)(null), c = e3.map((f, p) => (0, U.jsx)("button", { type: "button", className: "file-photo-zoom", "aria-label": i.fullScreen(f.alt), onClick: () => u(p), children: (0, U.jsx)("img", { src: f.src, alt: f.alt, style: Zr(f), loading: "lazy" }) }, f.src)), d = e3.length === 1 ? " is-single" : "";
    return (0, U.jsxs)(U.Fragment, { children: [n === "strip" && e3.length > 1 ? (0, U.jsx)(Jb, { ...o, ...l, bleed: a, className: "file-photos", "data-layout": "strip", role: "region", "aria-label": t, tabIndex: 0, children: c }) : (0, U.jsx)("div", { ...n === "strip" ? o : {}, ...l, className: `file-photos${d}${n === "strip" && a ? " file-bleed" : ""}`, "data-layout": n, role: "region", "aria-label": t, children: c }), s !== null && (0, U.jsx)(ad, { photos: e3, start: s, title: r, onClose: () => u(null) })] });
  }
  function y5({ children: e3 }) {
    return (0, U.jsx)("footer", { ...Be(), className: "file-closing", children: e3 });
  }
  function w5({ caption: e3, columns: t, rows: r, sort: n, onSort: a, empty: i }) {
    let o = xe();
    return (0, ue.jsx)("div", { className: "file-table-scroll", role: "region", "aria-label": e3, tabIndex: 0, children: (0, ue.jsxs)("table", { className: "file-table file-data-table", children: [(0, ue.jsx)("caption", { children: e3 }), (0, ue.jsx)("thead", { children: (0, ue.jsx)("tr", { children: t.map((l) => (0, ue.jsx)("th", { scope: "col", "data-numeric": l.numeric || void 0, "aria-sort": l.sortable ? n?.key === l.key ? n.direction : "none" : void 0, children: l.sortable && a ? (0, ue.jsxs)("button", { type: "button", onClick: () => a(l.key), children: [l.label, n?.key === l.key && (0, ue.jsxs)("span", { "aria-hidden": "true", children: [" ", n.direction === "ascending" ? "\u2191" : "\u2193"] })] }) : l.label }, l.key)) }) }), (0, ue.jsxs)("tbody", { children: [r.map((l) => (0, ue.jsx)("tr", { children: t.map((s, u) => u === 0 ? (0, ue.jsx)("th", { scope: "row", children: l.cells[s.key] }, s.key) : (0, ue.jsx)("td", { "data-numeric": s.numeric || void 0, children: l.cells[s.key] }, s.key)) }, l.id)), r.length === 0 && (0, ue.jsx)("tr", { children: (0, ue.jsx)("td", { colSpan: t.length, children: i ?? o.noMatches }) })] })] }) });
  }
  function $D({ caption: e3, items: t, rows: r, selected: n, onSelect: a, onOpen: i, openLabel: o }) {
    let l = xe(), s = (0, Cn.useRef)(null), u = (0, Cn.useRef)(/* @__PURE__ */ new Map()), c = (0, Cn.useRef)(), d = (0, Cn.useRef)(), f = id();
    function p(g) {
      window.clearTimeout(d.current.timer), d.current.timer = window.setTimeout(v, g);
    }
    function v() {
      let g = d.current?.id;
      d.current = void 0, g !== void 0 && y();
    }
    (0, Cn.useLayoutEffect)(() => {
      if (n === void 0) {
        d.current && (d.current.id = void 0);
        return;
      }
      if (n === c.current) return;
      c.current = void 0;
      let g = u.current.get(n).offsetLeft - u.current.get(t[0].id).offsetLeft, m = s.current.scrollLeft !== g && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.clearTimeout(d.current?.timer), d.current = void 0, m && (d.current = { id: n, timer: 0 }, p(900)), s.current.scrollTo({ left: g, behavior: m ? "smooth" : "instant" });
    }, [n]), (0, Cn.useEffect)(() => () => window.clearTimeout(d.current?.timer), []);
    function y() {
      if (!a || t.length < 2) return;
      let g = s.current, m = u.current.get(t[0].id), h = u.current.get(t[1].id), w = g.scrollWidth > g.clientWidth && g.scrollLeft >= g.scrollWidth - g.clientWidth - 1 ? t[t.length - 1] : t[Math.min(t.length - 1, Math.max(0, Math.round(g.scrollLeft / (h.offsetLeft - m.offsetLeft))))];
      if (d.current) {
        d.current.id !== void 0 && w.id === d.current.id ? (window.clearTimeout(d.current.timer), d.current = void 0) : p(150);
        return;
      }
      w.id !== n && (c.current = w.id, a(w.id));
    }
    return (0, ue.jsx)("div", { ...f, ref: s, className: "file-compare", role: "region", "aria-label": e3, tabIndex: 0, style: { gridTemplateRows: `auto repeat(${r.length}, auto)` }, onScroll: y, children: t.map((g, m) => {
      let h = (0, ue.jsxs)(ue.Fragment, { children: [(0, ue.jsxs)("span", { className: "file-compare-photo", children: [g.photo ? (0, ue.jsx)("img", { src: g.photo.src, alt: g.photo.alt, style: Zr(g.photo), draggable: false }) : (0, ue.jsx)("span", { className: "file-compare-photo-name", "aria-hidden": "true", children: g.title }), (0, ue.jsxs)("span", { className: "file-compare-tags", children: [(0, ue.jsx)("b", { className: "file-pill", children: g.number }), (g.tag || g.starred) && (0, ue.jsxs)("span", { className: "file-badge", children: [g.starred && FD, g.starred && !g.tag && (0, ue.jsx)("span", { className: "file-visually-hidden", children: l.recommended }), g.tag] })] })] }), (0, ue.jsx)("strong", { className: "file-hover-underline", children: g.title }), i && o && (0, ue.jsxs)("span", { className: "file-compare-open", children: [(0, ue.jsx)("span", { className: "file-hover-underline", children: o }), (0, ue.jsx)("svg", { "aria-hidden": "true", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.25", strokeLinecap: "round", strokeLinejoin: "round", children: (0, ue.jsx)("path", { d: "M10 16L13.6464 12.3536C13.8417 12.1583 13.8417 11.8417 13.6464 11.6464L10 8" }) })] })] });
      return (0, ue.jsxs)("article", { ref: (w) => {
        w ? u.current.set(g.id, w) : u.current.delete(g.id);
      }, className: `file-compare-column${g.id === n ? " is-selected" : ""}`, "aria-label": g.title, children: [i ? (0, ue.jsx)("button", { type: "button", className: "file-compare-head", "aria-label": l.view(g.title), onClick: () => i(g.id), children: h }) : (0, ue.jsx)("div", { className: "file-compare-head", children: h }), (0, ue.jsx)("dl", { children: r.map((w) => (0, ue.jsxs)("div", { className: `file-compare-cell${w.best === m ? " is-best" : ""}`, children: [(0, ue.jsx)("dt", { className: w.quiet ? "file-visually-hidden" : "file-cell-label", children: w.label }), (0, ue.jsx)("dd", { children: w.values[m] })] }, w.label)) })] }, g.id);
    }) });
  }
  function sm() {
    let [e3, t] = (0, ca.useState)(null), [r, n] = (0, ca.useState)(ID);
    return (0, ca.useLayoutEffect)(() => {
      if (!e3) return;
      let a = () => {
        let o = Math.round(e3.getBoundingClientRect().width);
        o > 0 && n(o);
      };
      a();
      let i = new ResizeObserver(a);
      return i.observe(e3), () => i.disconnect();
    }, [e3]), [t, r];
  }
  function ha({ label: e3, summary: t }) {
    return (0, A.jsxs)("div", { className: "file-chart-head", children: [(0, A.jsx)("span", { children: e3 }), t && (0, A.jsx)("span", { children: t })] });
  }
  function um(e3, t) {
    if (e3.some((i) => !Number.isFinite(i))) throw new RangeError("Chart values must be finite; use null for missing line observations.");
    let r = Math.min(...e3), n = Math.max(...e3);
    if (t) {
      if (!t.every(Number.isFinite) || t[0] >= t[1] || t[0] > r || t[1] < n) throw new RangeError("Chart bounds must be finite, ascending and contain every value.");
      return t;
    }
    let a = r === n ? Math.max(Math.abs(r) * 0.15, 1) : (n - r) * 0.15;
    return [r - a, n + a];
  }
  function jD(e3) {
    let t = Math.floor(30 / e3.length);
    return e3.length <= 5 && e3.every((r) => Ax(r.label) <= t * 2 && r.label.split(/\s+/).every((n) => Ax(n) <= t));
  }
  function b5({ label: e3, data: t, format: r = x5, max: n, orientation: a = jD(t) ? "columns" : "bars" }) {
    let i = xe(), o = Be(), [l, s] = sm();
    if (t.length === 0) return (0, A.jsxs)("div", { ...o, className: "file-chart", children: [(0, A.jsx)(ha, { label: e3 }), (0, A.jsx)("p", { children: i.noData })] });
    let u = [0, ...t.map((m) => m.value)], c = Math.min(...u), d = Math.max(...u), f = c === d ? 1 : (d - c) * 0.15, p = [c < 0 ? c - f : 0, d > 0 ? d + f : c < 0 ? 0 : 1], v = um(u, n === void 0 ? p : [c, n]), y = Vc({ domain: v, range: a === "bars" ? [0, 250] : [120, 0] }), g = J7({ domain: t.map((m, h) => h), range: [0, s], paddingInner: 0.35, paddingOuter: 0.35 / 2 });
    return (0, A.jsxs)("div", { ...o, className: "file-chart file-drawn-chart", children: [(0, A.jsx)(ha, { label: e3 }), a === "bars" ? c < 0 ? (0, A.jsx)("div", { className: "file-signed-bars", children: t.map((m, h) => (0, A.jsxs)("div", { children: [(0, A.jsx)("span", { children: m.label }), (0, A.jsxs)("svg", { viewBox: "0 -2 250 24", preserveAspectRatio: "none", "aria-hidden": "true", children: [(0, A.jsx)("line", { x1: y(0), x2: y(0), y1: -2, y2: 22, stroke: "var(--ds-ink-2)", vectorEffect: "non-scaling-stroke" }), (0, A.jsx)(Mx, { x: Math.min(y(0), y(m.value)), y: 2, width: Math.abs(y(m.value) - y(0)), height: 16, fill: m.highlight ? Qa : Gl(h), stroke: "var(--ds-ink-2)", vectorEffect: "non-scaling-stroke" })] }), (0, A.jsx)("strong", { children: (0, A.jsx)("bdi", { children: m.valueLabel ?? r(m.value) }) })] }, h)) }) : (0, A.jsx)("div", { className: "file-filled-bars", children: t.map((m, h) => (0, A.jsxs)("div", { className: "file-filled-bar", children: [(0, A.jsx)("span", { className: "file-filled-bar-fill", style: { width: m.value > 0 ? `max(8px, ${m.value / (n ?? d) * 100}%)` : 0, background: Qa } }), m.icon && (0, A.jsx)("span", { className: "file-filled-bar-icon", "aria-hidden": "true", children: m.icon }), (0, A.jsx)("span", { className: "file-filled-bar-label", children: m.label }), (0, A.jsxs)("span", { className: "file-filled-bar-value", children: [(0, A.jsx)("bdi", { children: m.valueLabel ?? r(m.value) }), m.note && (0, A.jsxs)("span", { className: "file-filled-bar-note", children: [" ", (0, A.jsx)("bdi", { children: m.note })] })] })] }, h)) }) : (0, A.jsxs)(A.Fragment, { children: [(0, A.jsxs)("svg", { ref: l, viewBox: `0 -20 ${s} 160`, role: "img", "aria-label": `${e3}: ${t.map((m) => `${m.label} ${m.valueLabel ?? r(m.value)}`).join(", ")}`, children: [y.ticks(3).map((m) => (0, A.jsx)("line", { x1: 0, x2: s, y1: y(m), y2: y(m), stroke: m === 0 ? "var(--ds-ink-2)" : "var(--ds-hairline)" }, m)), t.map((m, h) => (0, A.jsxs)("g", { children: [(0, A.jsx)(Mx, { x: g(h), y: Math.min(y(0), y(m.value)), width: g.bandwidth(), height: Math.abs(y(m.value) - y(0)), fill: m.highlight ? Qa : Gl(h), stroke: "var(--ds-ink-2)" }), (0, A.jsx)("text", { x: g(h) + g.bandwidth() / 2, y: y(m.value) + (m.value < 0 ? 16 : -6), textAnchor: "middle", fill: "var(--ds-ink-2)", fontSize: 13, children: m.valueLabel ?? r(m.value) })] }, h))] }), (0, A.jsx)("div", { className: "file-bar-labels", children: t.map((m, h) => (0, A.jsx)("span", { children: m.label }, h)) })] })] });
  }
  function UD({ label: e3, summary: t, headline: r, xName: n, data: a, points: i, range: o, target: l, xLabels: s = [], format: u = x5 }) {
    let c = xe(), [d, f] = (0, ca.useState)(null), p = (0, ca.useRef)(false), [v, y] = sm(), g = a ?? i.map((_, O) => ({ x: O, value: _, label: c.observationNumber(O + 1) }));
    if (g.some((_, O) => !Number.isFinite(_.x) || O > 0 && _.x <= g[O - 1].x)) throw new RangeError("Line coordinates must be finite and strictly increasing.");
    let m = g.filter((_) => _.value !== null), h = m.map((_) => _.value);
    if (l && h.push(l.value), h.some((_) => !Number.isFinite(_))) throw new RangeError("Line values must be finite; use null for missing observations.");
    if (m.length === 0) return (0, A.jsxs)("div", { className: "file-chart", children: [(0, A.jsx)(ha, { label: e3, summary: t }), (0, A.jsx)("p", { children: c.noData })] });
    let w = um(h, o), b = a === void 0 && o ? (o[1] - o[0]) * 0.15 : 0, E = Vc({ domain: [w[0] - b, w[1] + b], range: [120, 0] }), N = g[0].x, M = g[g.length - 1].x, x = Vc({ domain: N === M ? [N - 1, M + 1] : [N, M], range: [8, y - 8] }), C = m.find((_) => _.x === d), D = C ?? m[m.length - 1], T = (_) => {
      let O = _.currentTarget.getBoundingClientRect(), te = (_.clientX - O.left) / O.width * y;
      f(m.reduce((X, ie) => Math.abs(x(ie.x) - te) < Math.abs(x(X.x) - te) ? ie : X).x);
    }, P = (_) => `${_.label}: ${_.value === null ? c.noObservation : _.valueLabel ?? u(_.value)}`;
    return (0, A.jsxs)("div", { className: "file-chart file-drawn-chart", children: [r ? (0, A.jsx)("div", { className: "file-chart-head is-headline", "aria-live": "polite", children: (0, A.jsx)("span", { children: r(D) }) }) : (0, A.jsx)(ha, { label: e3, summary: t }), (0, A.jsxs)("svg", { ref: v, className: "file-line-plot", viewBox: `0 -15 ${y} 150`, "aria-label": e3, role: "group", onPointerDown: (_) => {
      _.currentTarget.setPointerCapture(_.pointerId), p.current = true, T(_);
    }, onPointerMove: (_) => {
      (p.current || _.pointerType === "mouse") && T(_);
    }, onPointerUp: (_) => {
      p.current = false, _.pointerType !== "mouse" && f(null);
    }, onPointerCancel: () => {
      p.current = false, f(null);
    }, onPointerLeave: (_) => {
      _.pointerType === "mouse" && !p.current && f(null);
    }, children: [l && (0, A.jsxs)(A.Fragment, { children: [(0, A.jsx)("line", { x1: 0, x2: y, y1: E(l.value), y2: E(l.value), stroke: "var(--ds-ink-2)", strokeDasharray: "4 3" }), (0, A.jsx)("text", { x: 4, y: E(l.value) - 7, fill: "var(--ds-ink-2)", stroke: "var(--ds-white)", strokeWidth: 3, paintOrder: "stroke", fontSize: 13, children: l.label })] }), C && (0, A.jsx)("line", { x1: x(C.x), x2: x(C.x), y1: 0, y2: 120, stroke: "var(--ds-ink-3)", strokeDasharray: "4 3", "aria-hidden": "true" }), (0, A.jsx)(dD, { data: g, defined: (_) => _.value !== null, x: (_) => x(_.x), y: (_) => E(_.value), stroke: Qa, strokeWidth: 2, strokeLinejoin: "round", strokeLinecap: "round" }), m.map((_) => (0, A.jsx)("g", { tabIndex: 0, role: "img", "aria-label": P(_), onFocus: () => f(_.x), onBlur: () => f(null), children: (0, A.jsx)("circle", { cx: x(_.x), cy: E(_.value), r: 12, fill: "transparent" }) }, _.x)), C && (0, A.jsx)("circle", { cx: x(C.x), cy: E(C.value), r: 6, fill: Qa, stroke: "var(--ds-white)", strokeWidth: 2, "aria-hidden": "true" })] }), (0, A.jsx)("div", { className: "file-chart-axis", children: (s.length ? s : [g[0].label, ...g.length > 1 ? [g[g.length - 1].label] : []]).map((_, O) => (0, A.jsx)("span", { children: _ }, O)) }), !r && (0, A.jsxs)("p", { className: "file-chart-readout", "aria-live": "polite", children: [(0, A.jsx)("span", { className: "file-chart-readout-point", children: P(D) }), l && (0, A.jsxs)("span", { children: [" \xB7 ", l.label, ": ", u(l.value), " (dashed)"] })] }), (0, A.jsxs)("details", { children: [(0, A.jsx)("summary", { children: c.chartData }), (0, A.jsx)(w5, { caption: e3, columns: [{ key: "label", label: n ?? c.observation }, { key: "value", label: c.value, numeric: true }], rows: g.map((_) => ({ id: String(_.x), cells: { label: _.label, value: _.value === null ? c.noObservation : _.valueLabel ?? u(_.value) } })) })] })] });
  }
  function HD(e3, t, r, n, a) {
    let i = (l) => e3.length === 1 ? t / 2 : l / (e3.length - 1) * t, o = Vc({ domain: um(e3, n < a ? [n, a] : void 0), range: [r, 0] });
    return { x: i, y: o, d: e3.map((l, s) => `${s ? "L" : "M"}${i(s).toFixed(1)} ${o(l).toFixed(1)}`).join(" ") };
  }
  function BD({ label: e3, series: t }) {
    let r = xe(), n = 110, a = 28;
    return (0, A.jsxs)("div", { className: "file-chart", children: [(0, A.jsx)(ha, { label: e3 }), (0, A.jsx)("div", { className: "file-sparklines", children: t.map((i, o) => {
      if (i.values.length === 0) return (0, A.jsxs)("div", { className: "file-sparkline", children: [(0, A.jsx)("span", { children: i.name }), (0, A.jsx)("span", { children: r.noData }), (0, A.jsx)("bdi", { className: "file-sparkline-delta", children: i.delta })] }, i.name);
      let { d: l, x: s, y: u } = HD(i.values, n, a, Math.min(...i.values), Math.max(...i.values)), c = i.highlight ? Qa : Gl(o);
      return (0, A.jsxs)("div", { className: i.highlight ? "file-sparkline is-highlight" : "file-sparkline", children: [(0, A.jsx)("span", { className: "file-sparkline-name", children: i.name }), (0, A.jsxs)("svg", { viewBox: `0 -2 ${n} ${a + 4}`, "aria-hidden": "true", children: [(0, A.jsx)("path", { d: l, fill: "none", stroke: c, strokeWidth: 1.5, strokeLinejoin: "round", strokeLinecap: "round" }), (0, A.jsx)("circle", { cx: s(i.values.length - 1), cy: u(i.values[i.values.length - 1]), r: 3, fill: c })] }), (0, A.jsx)("bdi", { className: "file-sparkline-delta", children: i.delta })] }, i.name);
    }) })] });
  }
  function VD({ label: e3, legend: t, rows: r, range: n, scaleLabels: a }) {
    let i = xe(), [o, l] = n, s = (u) => `${((u - o) / (l - o || 1) * 100).toFixed(1)}%`;
    return (0, A.jsxs)("div", { className: "file-chart", children: [(0, A.jsx)(ha, { label: e3, summary: t ?? i.rangeLegend }), (0, A.jsx)("div", { className: "file-ranges", children: r.map((u, c) => (0, A.jsxs)("div", { className: u.highlight ? "file-range is-highlight" : "file-range", style: OD(c), children: [(0, A.jsx)("span", { className: "file-range-label", title: u.label, children: u.label }), (0, A.jsxs)("div", { className: "file-range-track", children: [(0, A.jsx)("div", { className: "file-range-line" }), (0, A.jsx)("div", { className: "file-range-band", style: { left: s(u.low), width: `calc(${s(u.high)} - ${s(u.low)})` } }), (0, A.jsx)("div", { className: "file-range-now", style: { left: s(u.now) } })] })] }, u.label)) }), (0, A.jsxs)("div", { className: "file-range-scale", children: [(0, A.jsx)("span", {}), (0, A.jsx)("div", { className: "file-chart-axis", children: a.map((u, c) => (0, A.jsx)("span", { children: u }, c)) })] })] });
  }
  function WD({ label: e3, legend: t, parts: r }) {
    let n = (a) => Wc[a % Wc.length];
    return (0, A.jsxs)("div", { className: "file-chart", children: [(0, A.jsx)(ha, { label: e3, summary: t }), (0, A.jsx)("div", { className: "file-stack-bar", role: "img", "aria-label": r.map((a) => `${a.label} ${a.share}%`).join(", "), children: r.map((a, i) => (0, A.jsx)("div", { style: { width: `${a.share}%`, background: n(i) } }, a.label)) }), (0, A.jsx)("div", { className: "file-stack-parts", children: r.map((a, i) => (0, A.jsxs)("div", { className: "file-stack-part", children: [(0, A.jsx)("span", { className: "file-stack-swatch", style: { background: n(i) } }), (0, A.jsx)("span", { children: a.label }), (0, A.jsxs)("bdi", { className: "file-stack-share", children: [a.share, "%"] })] }, a.label)) })] });
  }
  function YD({ label: e3, summary: t, points: r, xRange: n, yRange: a, axisLabels: i }) {
    let [o, l] = sm(), s = l - 8, u = 140, c = (f) => (f - n[0]) / (n[1] - n[0] || 1) * s, d = (f) => u - (f - a[0]) / (a[1] - a[0] || 1) * u;
    return (0, A.jsxs)("div", { className: "file-chart", children: [(0, A.jsx)(ha, { label: e3, summary: t }), (0, A.jsxs)("svg", { ref: o, viewBox: `-4 -8 ${s + 8} ${u + 12}`, role: "img", "aria-label": e3, children: [zD.map((f) => (0, A.jsx)("line", { x1: 0, x2: s, y1: f * u, y2: f * u, stroke: "var(--ds-hairline)", strokeWidth: 1 }, f)), r.map((f, p) => (0, A.jsxs)("g", { children: [(0, A.jsx)("circle", { cx: c(f.x), cy: d(f.y), r: f.highlight ? 6 : 5, fill: f.highlight ? Qa : Gl(p), stroke: "var(--ds-white)", strokeWidth: 1.5 }), f.label && (0, A.jsx)("text", { x: c(f.x) + 10, y: d(f.y) + 4, fontSize: 13, fontFamily: "var(--file-font-text)", fontWeight: f.highlight ? 600 : 350, style: { letterSpacing: "calc(-0.01em * var(--file-tracking))" }, fill: f.highlight ? "var(--ds-teal)" : "var(--ds-ink-2)", children: f.label })] }, p))] }), (0, A.jsx)("div", { className: "file-chart-axis", children: i.map((f, p) => (0, A.jsx)("span", { children: f }, p)) })] });
  }
  function k5({ children: e3 }) {
    return (0, Fe.jsx)("div", { ...Be(), className: "file-photo-cards", children: e3 });
  }
  function E5({ name: e3, detail: t, icon: r, photo: n, checked: a = false, open: i, onOpenChange: o, children: l }) {
    let [s, u] = (0, ho.useState)(false), c = ho.Children.count(l) > 0, d = (p) => {
      u(p), o?.(p);
    }, f = (0, Fe.jsxs)(Fe.Fragment, { children: [(0, Fe.jsxs)("span", { className: "file-photo-card-photo", children: [(0, Fe.jsx)(e5, { icon: r }), n?.src && (0, Fe.jsx)("img", { src: n.src, alt: n.alt, style: Zr(n), loading: "lazy" }), a && (0, Fe.jsx)("span", { className: "file-row-check file-photo-card-check", role: "checkbox", "aria-checked": true, "aria-readonly": "true", "aria-label": e3 })] }), (0, Fe.jsxs)("span", { className: "file-photo-card-text", children: [(0, Fe.jsx)("span", { className: "file-strong", children: e3 }), t && (0, Fe.jsx)("span", { className: "file-row-detail", children: t })] })] });
    return (0, Fe.jsxs)("div", { ...Be("loop"), className: "file-photo-card", children: [c ? (0, Fe.jsx)("button", { type: "button", className: "file-photo-card-open", "aria-haspopup": "dialog", onClick: () => d(true), children: f }) : f, c && (i ?? s) && (0, Fe.jsx)(R5, { name: e3, detail: t, photo: n, onClose: () => d(false), children: l })] });
  }
  function R5({ name: e3, detail: t, photo: r, onClose: n, children: a }) {
    let i = (0, ho.useRef)(null), o = im(i, true), l = () => o(n);
    return (0, Fe.jsxs)("dialog", { ref: i, className: "file-drawer", "aria-label": e3, tabIndex: -1, onCancel: (s) => {
      s.preventDefault(), l();
    }, onClick: (s) => {
      if (s.target !== s.currentTarget) return;
      let u = s.currentTarget.getBoundingClientRect();
      (s.clientX < u.left || s.clientX > u.right || s.clientY < u.top || s.clientY > u.bottom) && l();
    }, children: [(0, Fe.jsx)("div", { className: "file-drawer-header", children: (0, Fe.jsx)(rd, { onClick: l }) }), r?.src && (0, Fe.jsx)("img", { className: "file-drawer-photo", src: r.src, alt: r.alt, style: Zr(r) }), (0, Fe.jsxs)("hgroup", { className: "file-drawer-title", children: [(0, Fe.jsx)("h2", { className: "file-group-heading", children: e3 }), t && (0, Fe.jsx)("p", { className: "file-secondary", children: t })] }), (0, Fe.jsx)("div", { className: "file-drawer-body", children: a })] });
  }
  function KD(e3) {
    let t = [];
    for (let r of e3.filter((n) => n.width > 0 && n.height > 0).sort((n, a) => n.top - a.top || n.left - a.left)) {
      let n = r.top + r.height / 2, a = t.find((l) => n > l.top && n < l.top + l.height);
      if (!a) {
        t.push({ ...r });
        continue;
      }
      let i = Math.max(a.left + a.width, r.left + r.width), o = Math.max(a.top + a.height, r.top + r.height);
      a.left = Math.min(a.left, r.left), a.top = Math.min(a.top, r.top), a.width = i - a.left, a.height = o - a.top, a.size = Math.max(a.size, r.size);
    }
    return t;
  }
  function XD(e3, t, r) {
    if (r.length === 0) return "loop";
    if (e3 === "stroke" || e3 === "loop") return e3;
    let n = r[r.length - 1];
    return r.length <= 3 && t.height <= n.top + n.height - r[0].top + 48 ? "stroke" : "loop";
  }
  function QD(e3) {
    let t = Math.round(Math.max(160, Math.min(550, 1400 / e3)));
    return Array.from({ length: e3 }, (r, n) => ({ ms: t, wait: Math.round(n * t * 0.9) }));
  }
  function ZD(e3, t, r, n, a, i) {
    let o = r - e3 - 2 * a, l = n - t - 2 * a, s = Math.PI / 2 * a, u = (d, f, p, v) => {
      let y = p + v / s * (Math.PI / 2);
      return [d + a * Math.cos(y), f + a * Math.sin(y), Math.cos(y), Math.sin(y)];
    }, c = i;
    return c < o ? [e3 + a + c, t, 0, -1] : (c -= o, c < s ? u(r - a, t + a, -Math.PI / 2, c) : (c -= s, c < l ? [r, t + a + c, 1, 0] : (c -= l, c < s ? u(r - a, n - a, 0, c) : (c -= s, c < o ? [r - a - c, n, 0, 1] : (c -= o, c < s ? u(e3 + a, n - a, Math.PI / 2, c) : (c -= s, c < l ? [e3, n - a - c, -1, 0] : u(e3 + a, t + a, Math.PI, c - l)))))));
  }
  function JD(e3, t) {
    let r = 7 + e3 + 3, n = 7 + t + 3, a = Math.min(18, (r - 4) / 4, (n - 4) / 4), i = r - 4 - 2 * a, o = 2 * (i + n - 4 - 2 * a) + 2 * Math.PI * a, l = i * 0.22, s = i * 0.42, u = Math.round(Math.max(24, Math.min(160, (o + s) / 8))), c = [];
    for (let f = 0; f <= u; f++) {
      let p = (o + s) * f / u, [v, y, g, m] = ZD(4, 4, r, n, a, (l + p) % o), h = (p < o ? -1 + 4.7 * (p / o) : 3.7 + 3.2 * ((p - o) / s)) + 0.7 * Math.sin(p / 23 + e3) + 0.4 * Math.sin(p / 9 + t);
      c.push([v + g * h, y + m * h]);
    }
    let d = `M${Yt(c[0][0])} ${Yt(c[0][1])}`;
    for (let f = 0; f < c.length - 1; f++) {
      let p = c[Math.max(0, f - 1)], v = c[f], y = c[f + 1], g = c[Math.min(c.length - 1, f + 2)];
      d += `C${Yt(v[0] + (y[0] - p[0]) / 6)} ${Yt(v[1] + (y[1] - p[1]) / 6)} ${Yt(y[0] - (g[0] - v[0]) / 6)} ${Yt(y[1] - (g[1] - v[1]) / 6)} ${Yt(y[0])} ${Yt(y[1])}`;
    }
    return d;
  }
  function e9(e3, t) {
    return Math.round(Math.max(600, Math.min(1100, 400 + (e3 + t) * 0.96)));
  }
  function t9(e3) {
    for (let t of e3.querySelectorAll("[data-live-mark-text]")) if (t.closest("[data-live-id]") === e3) return t;
    return e3;
  }
  function r9(e3) {
    let t = [], r = e3.closest("dialog"), n = document.createTreeWalker(e3, NodeFilter.SHOW_TEXT), a = document.createRange();
    for (let i = n.nextNode(); i; i = n.nextNode()) {
      let o = i.parentElement;
      if (o.closest(".file-visually-hidden") || o.closest("dialog") !== r) continue;
      let l = parseFloat(getComputedStyle(o).fontSize);
      a.selectNodeContents(i);
      for (let s of a.getClientRects()) t.push({ left: s.left, top: s.top, width: s.width, height: s.height, size: l });
    }
    return t;
  }
  function zx(e3) {
    for (let r of e3.children) if (r.hasAttribute("data-live-marks")) return r;
    let t = document.createElement("div");
    return t.setAttribute("data-live-marks", ""), t.setAttribute("aria-hidden", "true"), e3.appendChild(t);
  }
  function Ox(e3, t, r, n, a, i, o) {
    let l = document.createElementNS(Fx, "svg");
    l.setAttribute("data-live-drawn", e3), l.setAttribute("data-live-for", t), l.setAttribute("viewBox", n), l.setAttribute("preserveAspectRatio", "none"), l.style.cssText = `left:${Yt(r.left)}px;top:${Yt(r.top)}px;width:${Yt(r.width)}px;height:${Yt(r.height)}px;--file-live-mark-ms:${i}ms;--file-live-mark-wait:${o}ms`;
    let s = document.createElementNS(Fx, "path");
    return s.setAttribute("d", a), e3 === "loop" && s.setAttribute("pathLength", "1"), l.appendChild(s), l;
  }
  function n9(e3, t) {
    let r = () => {
      a.disconnect(), clearTimeout(i);
    }, n = () => {
      r(), t();
    }, a = new IntersectionObserver((o) => o.some((l) => l.intersectionRatio >= 0.5) && n(), { threshold: 0.5 }), i = setTimeout(n, 700);
    return a.observe(e3), r;
  }
  function f9(e3, t) {
    let r = e3.getBoundingClientRect(), n = e3.querySelector(".file-drawer-header")?.getBoundingClientRect().bottom ?? r.top, a = r.bottom - (parseFloat(getComputedStyle(e3).scrollPaddingBottom) || 0), i = t.getBoundingClientRect(), o = a - n - i.height, l = o > 2 * jx ? o / 2 : jx, s = matchMedia("(prefers-reduced-motion: reduce)").matches;
    e3.scrollTo({ top: e3.scrollTop + i.top - n - l, behavior: s ? "auto" : "smooth" });
  }
  function Zl(e3, t) {
    return Qr.start(), (0, S5.useSyncExternalStore)(Qr.subscribe, e3, () => t);
  }
  function D5() {
    return Zl(Qr.getOpen, null);
  }
  function N5(e3) {
    return Zl(() => Qr.getData().nodes[e3], void 0);
  }
  function p9(e3, t) {
    let r = Zl(() => Qr.getData().values[e3], void 0);
    return r === void 0 ? t : r;
  }
  function m9(e3) {
    return Zl(() => Qr.items(e3), C5);
  }
  function g9(e3) {
    return Zl(() => Qr.item(e3), void 0);
  }
  function sa(e3) {
    return typeof e3 == "string" ? e3 : "";
  }
  function v9({ props: e3, children: t }) {
    let r = (0, tb.useContext)(Jc), n = D5() === r;
    return (0, Ee.jsx)(E5, { ...e3, open: n, onOpenChange: (a) => Qr.setOpen(a ? r : null), children: t });
  }
  function M5(e3, t) {
    let r = `${e3}:${t}`;
    Ux.has(r) || (Ux.add(r), console.warn(`Live node "${e3}" ${t}`));
  }
  function P5({ id: e3 }) {
    return (0, Vl.jsx)(L5, { id: e3 });
  }
  function x9(e3) {
    let t = N5(e3)?.children ?? [], r = D5() === e3;
    return (0, _5.useEffect)(() => Qr.holdDetail(e3), [e3]), { open: r, onOpenChange: (n) => Qr.setOpen(n ? e3 : null), children: t.map((n) => (0, T5.jsx)(P5, { id: n }, n)) };
  }
  function b9(e3) {
    return (0, A5.jsx)("div", { ...e3, "data-live-reveal": "" });
  }
  function F5({ height: e3 = 16, title: t = "Instinct" }) {
    return (0, Pr.jsxs)("svg", { className: "file-wordmark", width: e3 / 57 * 243, height: e3, viewBox: "0 0 243 57", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", role: "img", "aria-label": t, children: [(0, Pr.jsx)("path", { d: "M135.548 55.2V55.28H122.828V55.2C123.468 54.1867 123.948 53.2533 124.268 52.4C124.588 51.5467 124.801 50.5067 124.908 49.28C125.015 48.0533 125.068 46.4267 125.068 44.4V28.88C125.068 26.3733 124.828 24.3733 124.348 22.88C123.921 21.3867 123.308 20.2667 122.508 19.52V19.36L133.148 15.92H133.308V44.4C133.308 46.4267 133.361 48.0533 133.468 49.28C133.575 50.5067 133.788 51.5467 134.108 52.4C134.428 53.2533 134.908 54.1867 135.548 55.2ZM129.228 10C127.895 10 126.721 9.52 125.708 8.56C124.695 7.54667 124.188 6.34667 124.188 4.96C124.188 3.62667 124.695 2.48 125.708 1.52C126.721 0.506667 127.895 0 129.228 0C130.508 0 131.655 0.506667 132.668 1.52C133.681 2.48 134.188 3.62667 134.188 4.96C134.188 6.34667 133.681 7.54667 132.668 8.56C131.655 9.52 130.508 10 129.228 10Z" }), (0, Pr.jsx)("path", { d: "M154.07 55.2V55.28H141.35V55.2C142.043 54.1867 142.523 53.2533 142.79 52.4C143.11 51.5467 143.323 50.5067 143.43 49.28C143.537 48.0533 143.59 46.4267 143.59 44.4V28.88C143.59 26.3733 143.35 24.3733 142.87 22.88C142.443 21.3867 141.83 20.2667 141.03 19.52V19.36L151.67 15.92H151.83V22.56C153.803 20.8533 155.91 19.3333 158.15 18C160.39 16.6133 162.95 15.92 165.83 15.92C169.243 15.92 171.883 17.0133 173.75 19.2C175.617 21.3333 176.55 24.56 176.55 28.88V44.4C176.55 46.4267 176.603 48.0533 176.71 49.28C176.817 50.5067 177.03 51.5467 177.35 52.4C177.67 53.2533 178.15 54.1867 178.79 55.2V55.28H166.15V55.2C166.79 54.1867 167.27 53.2533 167.59 52.4C167.91 51.5467 168.123 50.5067 168.23 49.28C168.337 48.0533 168.39 46.4267 168.39 44.4V29.68C168.39 27.12 167.777 25.12 166.55 23.68C165.377 22.24 163.377 21.52 160.55 21.52C158.79 21.52 157.19 21.7867 155.75 22.32C154.363 22.8 153.057 23.3867 151.83 24.08V44.4C151.83 46.4267 151.883 48.0533 151.99 49.28C152.097 50.5067 152.31 51.5467 152.63 52.4C152.95 53.2533 153.43 54.1867 154.07 55.2Z" }), (0, Pr.jsx)("path", { d: "M200.799 56.24C197.119 56.1867 193.919 55.36 191.199 53.76C188.532 52.1067 186.505 49.8667 185.119 47.04C183.732 44.2133 183.039 41.0133 183.039 37.44C183.039 33.6533 183.812 30.1333 185.359 26.88C186.959 23.6267 189.199 21.0133 192.079 19.04C195.012 17.0133 198.479 16 202.479 16C205.945 16 208.772 16.7467 210.959 18.24C211.898 18.8813 212.678 19.7019 213.171 20.3999C211.194 24.405 208.033 26.336 208.033 26.336C208.033 26.336 207.718 25.1566 207.519 24.56C207.039 23.0667 206.265 21.8133 205.199 20.8C204.132 19.7867 202.639 19.28 200.719 19.28C198.479 19.28 196.559 19.9733 194.959 21.36C193.359 22.6933 192.132 24.4533 191.279 26.64C190.479 28.8267 190.079 31.2 190.079 33.76C190.079 36.9067 190.665 39.6533 191.839 42C193.012 44.2933 194.639 46.08 196.719 47.36C198.799 48.64 201.172 49.28 203.839 49.28C206.239 49.28 208.372 48.7733 210.239 47.76C212.159 46.7467 213.785 45.3867 215.119 43.68C214.532 47.68 212.932 50.7733 210.319 52.96C207.705 55.1467 204.532 56.24 200.799 56.24Z" }), (0, Pr.jsx)("path", { d: "M240.864 20.4H231.264V46.16C231.264 46.8 231.371 47.4933 231.584 48.24C231.798 48.9333 232.331 49.5467 233.184 50.08C234.038 50.56 235.371 50.8 237.184 50.8C238.358 50.8 239.398 50.6933 240.304 50.48C241.211 50.2133 242.038 49.8667 242.784 49.44C242.144 51.6267 240.918 53.3067 239.104 54.48C237.291 55.6533 235.104 56.24 232.544 56.24C229.611 56.24 227.291 55.44 225.584 53.84C223.878 52.24 223.024 50 223.024 47.12V20.4H218.464V19.68L231.104 8.56H231.264V16.88H242.864L240.864 20.4Z" }), (0, Pr.jsx)("path", { d: "M33.4355 55.2V55.28H20.7155V55.2C21.4088 54.1867 21.8888 53.2533 22.1555 52.4C22.4755 51.5467 22.6888 50.5067 22.7955 49.28C22.9022 48.0533 22.9555 46.4267 22.9555 44.4V28.88C22.9555 26.3733 22.7155 24.3733 22.2355 22.88C21.8088 21.3867 21.1955 20.2667 20.3955 19.52V19.36L31.0355 15.92H31.1955V22.56C33.1688 20.8533 35.2755 19.3333 37.5155 18C39.7555 16.6133 42.3155 15.92 45.1955 15.92C48.6088 15.92 51.2488 17.0133 53.1155 19.2C54.9822 21.3333 55.9155 24.56 55.9155 28.88V44.4C55.9155 46.4267 55.9688 48.0533 56.0755 49.28C56.1822 50.5067 56.3955 51.5467 56.7155 52.4C57.0355 53.2533 57.5155 54.1867 58.1555 55.2V55.28H45.5155V55.2C46.1555 54.1867 46.6355 53.2533 46.9555 52.4C47.2755 51.5467 47.4888 50.5067 47.5955 49.28C47.7022 48.0533 47.7555 46.4267 47.7555 44.4V29.68C47.7555 27.12 47.1422 25.12 45.9155 23.68C44.7422 22.24 42.7422 21.52 39.9155 21.52C38.1555 21.52 36.5555 21.7867 35.1155 22.32C33.7288 22.8 32.4222 23.3867 31.1955 24.08V44.4C31.1955 46.4267 31.2488 48.0533 31.3555 49.28C31.4622 50.5067 31.6755 51.5467 31.9955 52.4C32.3155 53.2533 32.7955 54.1867 33.4355 55.2Z" }), (0, Pr.jsx)("path", { d: "M74.2943 56.16C72.0543 56.16 70.0543 55.8667 68.2943 55.28C66.5343 54.7467 65.1476 54.16 64.1343 53.52L63.7343 45.92L63.8943 45.84C65.5476 47.9733 67.3609 49.6533 69.3343 50.88C71.3076 52.1067 73.3876 52.72 75.5743 52.72C77.5476 52.72 79.0409 52.2133 80.0543 51.2C81.0676 50.1333 81.5743 48.72 81.5743 46.96C81.5743 45.0933 81.0143 43.7067 79.8943 42.8C78.8276 41.84 77.0409 40.64 74.5343 39.2C72.5609 38.0267 70.8543 36.9333 69.4143 35.92C67.9743 34.8533 66.8809 33.68 66.1343 32.4C65.3876 31.12 65.0143 29.52 65.0143 27.6C65.0143 24.0267 66.2676 21.2 68.7743 19.12C71.2809 16.9867 74.7743 15.92 79.2543 15.92C80.8543 15.92 82.3209 16.08 83.6543 16.4C85.0409 16.72 86.3209 17.0667 87.4943 17.44L87.5743 24.8H87.4143C85.9209 23.04 84.3743 21.6533 82.7743 20.64C81.1743 19.6267 79.4409 19.12 77.5743 19.12C75.9209 19.12 74.5876 19.5733 73.5743 20.48C72.5609 21.3333 72.0543 22.56 72.0543 24.16C72.0543 25.76 72.6143 27.04 73.7343 28C74.8543 28.9067 76.6143 30 79.0143 31.28C81.4143 32.6133 83.3343 33.84 84.7743 34.96C86.2143 36.08 87.2809 37.3067 87.9743 38.64C88.6676 39.92 89.0143 41.4667 89.0143 43.28C89.0143 47.3867 87.6276 50.56 84.8543 52.8C82.0809 55.04 78.5609 56.16 74.2943 56.16Z" }), (0, Pr.jsx)("path", { d: "M115.464 20.4H105.864V46.16C105.864 46.8 105.971 47.4933 106.184 48.24C106.398 48.9333 106.931 49.5467 107.784 50.08C108.638 50.56 109.971 50.8 111.784 50.8C112.958 50.8 113.998 50.6933 114.904 50.48C115.811 50.2133 116.638 49.8667 117.384 49.44C116.744 51.6267 115.518 53.3067 113.704 54.48C111.891 55.6533 109.704 56.24 107.144 56.24C104.211 56.24 101.891 55.44 100.184 53.84C98.4776 52.24 97.6243 50 97.6243 47.12V20.4H93.0643V19.68L105.704 8.56H105.864V16.88H117.464L115.464 20.4Z" }), (0, Pr.jsx)("path", { d: "M13.5 55.205V55.28H0V55.205C0.85 53.905 1.475 52.705 1.875 51.605C2.275 50.505 2.55 49.205 2.7 47.705C2.85 46.155 2.925 44.08 2.925 41.48V16.58C2.925 13.98 2.85 11.93 2.7 10.43C2.55 8.88 2.275 7.555 1.875 6.455C1.475 5.305 0.85 4.105 0 2.855V2.78H13.5V2.855C12.7 4.105 12.1 5.305 11.7 6.455C11.3 7.555 11.025 8.88 10.875 10.43C10.725 11.93 10.65 13.98 10.65 16.58V41.48C10.65 44.03 10.725 46.08 10.875 47.63C11.025 49.18 11.3 50.505 11.7 51.605C12.1 52.705 12.7 53.905 13.5 55.205Z" })] });
  }
  function $5({ ratio: e3 = "portrait", footer: t, lang: r, dir: n = Kx(r), children: a, className: i }) {
    return (0, ua.jsx)(Kc.Provider, { value: q0(r), children: (0, ua.jsxs)("div", { className: ["file-image", i].filter(Boolean).join(" "), "data-ratio": e3, lang: r, dir: n, children: [(0, ua.jsx)("div", { className: "file-image-body", children: a }), (0, ua.jsxs)("div", { className: "file-image-footer", children: [(0, ua.jsx)("span", { children: t }), (0, ua.jsx)(F5, { height: 14 })] })] }) });
  }
  function cm(e3, t) {
    let r = xe(), n = Xx(), a = Qx(), i = (0, Ja.useRef)(false), [o, l] = (0, Ja.useState)(null), [s, u] = (0, Ja.useState)([]), c = t.photos[0], d = { type: "shopping.action", action: k9, product: { number: e3.number, title: e3.title, brand: e3.brand ?? null, meta: e3.meta ?? null, price: t.price ?? null, merchant: t.merchant ?? null, selection: t.selection ?? null, variant: t.variant ? { title: t.options.map((h) => t.chosen[h.name]).join(" / "), price: t.variant.price ?? null, listPrice: t.variant.listPrice ?? null, available: t.variant.available ?? null } : null, photo: c ? { src: c.src.startsWith("data:") ? null : c.src, alt: c.alt } : null } }, f = JSON.stringify(d), p = o === f, v = s.includes(f), y = p && ["forbidden", "invalid", "conflict", "unavailable"].includes(a.status), g = async () => {
      if (!(i.current || a.canRetry || v || y)) {
        i.current = true, l(f);
        try {
          (await a.wakeAgent({ content: d })).status === "accepted" && u((h) => [...h, f]);
        } finally {
          i.current = false;
        }
      }
    }, m = async () => {
      (await a.retry()).status === "accepted" && o && u((h) => [...h, o]);
    };
    return { available: n.isOwnerUser && e3.merchant !== void 0, soldOut: t.variant?.available === false, sent: v, sending: p && a.busy, disabled: a.busy || a.canRetry || a.retryAfterMs > 0 || v || y, send: g, canRetry: a.canRetry, retryDisabled: a.busy || a.retryAfterMs > 0, retry: m, message: o && !["sending", "accepted"].includes(a.status) ? `${r.buy}: ${a.message}` : "" };
  }
  function E9() {
    return (0, Mt.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: (0, Mt.jsx)("path", { d: "M20.5 12C20.5 9.76676 19.686 8.06004 18.2871 6.89355C16.8661 5.70886 14.7409 5 12 5C9.25912 5 7.13392 5.70886 5.71288 6.89355C4.31396 8.06004 3.49999 9.76677 3.49999 12C3.49999 12.4778 3.67754 13.2204 3.91698 13.9678C4.14619 14.6832 4.39417 15.2886 4.45995 15.4463C4.47153 15.474 4.45918 15.4447 4.47753 15.4883L4.51269 15.5781L4.55273 15.6973C4.71413 16.2258 4.88032 17.3955 4.10253 18.9609C4.45806 18.9447 4.80995 18.8667 5.14062 18.752C5.48117 18.6338 5.77064 18.4882 5.9746 18.3721C6.07544 18.3146 6.15337 18.2661 6.20312 18.2334C6.22792 18.2171 6.2459 18.2042 6.25585 18.1973C6.25889 18.1952 6.26114 18.1935 6.26269 18.1924C6.57078 17.9671 6.98047 17.9376 7.31835 18.1152C8.64944 18.8149 10.295 19 12 19C14.7409 19 16.8661 18.2911 18.2871 17.1064C19.686 15.94 20.5 14.2332 20.5 12ZM22.5 12C22.5 14.7665 21.4668 17.06 19.5674 18.6436C17.6898 20.2087 15.0646 21 12 21C10.3808 21 8.55858 20.8483 6.91699 20.1357C6.63773 20.2919 6.25326 20.4829 5.79589 20.6416C4.84476 20.9715 3.45924 21.2047 2.07226 20.5479C1.80018 20.419 1.59992 20.1742 1.52831 19.8818C1.45679 19.5894 1.52128 19.28 1.70312 19.04C2.39144 18.1322 2.60883 17.4279 2.66894 16.9775C2.72939 16.5244 2.63731 16.2736 2.63476 16.2666L2.63378 16.2646C2.63187 16.2601 2.63059 16.2546 2.62695 16.2461C2.62373 16.2386 2.61901 16.2282 2.61425 16.2168L2.61327 16.2158C2.53665 16.0321 2.2661 15.369 2.01269 14.5781C1.76944 13.8189 1.49999 12.8165 1.49999 12C1.49999 9.23347 2.5332 6.93995 4.43261 5.35645C6.31017 3.79128 8.93544 3 12 3C15.0646 3 17.6898 3.79129 19.5674 5.35645C21.4668 6.93996 22.5 9.23348 22.5 12Z" }) });
  }
  function R9(e3) {
    return { idle: { icon: (0, Mt.jsx)(E9, {}), label: e3.buy, shortLabel: e3.buyShort, variant: "active" }, sending: { icon: (0, Mt.jsx)(wD, { className: "file-spin", size: 16 }), label: e3.sending, variant: "disabled" }, sent: { icon: (0, Mt.jsx)(Kb, { size: 16 }), label: e3.sentToInstinct, shortLabel: e3.sent, variant: "disabled" } };
  }
  function Yc({ state: e3 }) {
    let t = xe(), r = (0, Ja.useMemo)(() => R9(t), [t]);
    return e3.available ? (0, Mt.jsxs)("div", { className: "file-product-actions", children: [e3.soldOut ? (0, Mt.jsx)(Dn, { className: "file-product-action", pill: true, "data-kind": "checkout", disabled: true, children: t.soldOut }) : (0, Mt.jsx)(Dn, { className: "file-product-action", variant: "primary", pill: true, "data-kind": "checkout", "data-sent": e3.sent, disabled: e3.disabled, onClick: () => {
      e3.send();
    }, states: r, state: e3.sending ? "sending" : e3.sent ? "sent" : "idle" }), e3.message && (0, Mt.jsxs)("p", { className: "file-caption", role: "status", children: [e3.message, e3.canRetry && (0, Mt.jsxs)(Mt.Fragment, { children: [" ", (0, Mt.jsx)("button", { type: "button", disabled: e3.retryDisabled, onClick: () => {
      e3.retry();
    }, children: t.retry })] })] }), (0, Mt.jsx)("p", { className: "file-visually-hidden", role: "status", children: e3.sent ? t.sentToInstinct : "" })] }) : null;
  }
  function z5(e3, t = Gx(void 0)) {
    return e3.badge ?? (e3.pick ? t.myPick : void 0);
  }
  function O5({ selection: e3 }) {
    let t = xe();
    return e3.options.length === 0 ? null : (0, lt.jsxs)("div", { className: "file-variants", children: [e3.options.map((r) => {
      let n = e3.chosen[r.name], a = Object.entries(e3.chosen).filter(([i]) => i !== r.name).map(([, i]) => i).join(", ");
      return (0, lt.jsxs)("fieldset", { className: "file-variant", children: [(0, lt.jsx)("legend", { className: "file-visually-hidden", children: r.name }), (0, lt.jsxs)("span", { className: "file-variant-label", "aria-hidden": "true", children: [r.name, n ? (0, lt.jsx)("b", { children: n }) : (0, lt.jsx)("em", { children: t.choose(r.name) })] }), r === e3.swatches ? (0, lt.jsx)("div", { className: "file-swatches", children: r.values.map(({ value: i, swatch: o }) => {
        let l = e3.soldOut(r.name, i);
        return (0, lt.jsx)("button", { type: "button", className: l ? "file-swatch is-out" : "file-swatch", style: { background: o }, "aria-pressed": i === n, "aria-label": l ? t.valueSoldOut(i, a) : i, title: i, onClick: () => e3.choose(r.name, i) }, i);
      }) }) : (0, lt.jsx)("div", { className: "file-sizes", children: r.values.map(({ value: i }) => {
        let o = e3.soldOut(r.name, i);
        return (0, lt.jsx)(Dn, { className: "file-size", selected: i === n, unavailable: o, "aria-label": o ? t.valueSoldOut(i, "") : void 0, onClick: () => e3.choose(r.name, i), children: i }, i);
      }) })] }, r.name);
    }), e3.stock && (0, lt.jsx)("p", { className: e3.stock.tone ? `file-stock ${e3.stock.tone}` : "file-stock", "aria-live": "polite", children: e3.stock.text })] });
  }
  function dm({ view: e3, limit: t, label: r = false, choose: n }) {
    let a = e3.swatches;
    if (!a || a.values.length < 2) return null;
    let i = a.values.slice(0, t), o = a.values.length - i.length;
    return (0, lt.jsxs)("div", { className: "file-dots", role: n ? "group" : "img", "aria-label": n ? a.name : `${a.name}: ${a.values.map(({ value: l }) => l).join(", ")}`, children: [i.map(({ value: l, swatch: s }) => {
      let u = l === e3.swatch ? "file-dot is-current" : "file-dot";
      return n ? (0, lt.jsx)("button", { type: "button", className: u, style: { background: s }, "aria-pressed": l === e3.swatch, "aria-label": l, title: l, onClick: () => n(a.name, l) }, l) : (0, lt.jsx)("span", { className: u, style: { background: s } }, l);
    }), o > 0 && (0, lt.jsxs)("span", { className: "file-dots-more", children: ["+", o] }), r && e3.swatch && (0, lt.jsx)("span", { className: "file-dots-label", children: e3.swatch })] });
  }
  function j5(e3, t = String) {
    let r = e3.filter((n) => n !== void 0);
    return r.length > 0 && r.every((n) => t(n) === t(r[0])) ? r[0] : void 0;
  }
  function C9({ options: e3, swatches: t, chosen: r, unresolved: n, variants: a, variant: i }, o) {
    if (!a.some((c) => c.available !== void 0 || c.low !== void 0)) return;
    if (n.length > 0) return { text: o.chooseToCheckStock(n[0]) };
    if (!i) return;
    let l = e3.map((c) => r[c.name]), s = e3.filter((c) => c !== t).map((c) => r[c.name]), u = (s.length > 0 ? s : l).join(", ");
    if (i.available === false) return { tone: "is-out", text: o.soldOutIn(l.join(", ")) };
    if (i.low !== void 0) return { tone: "is-low", text: o.onlyLeftIn(i.low, u) };
    if (i.available) return { tone: "is-in", text: o.inStockIn(u) };
  }
  function U5(e3, t, r) {
    let n = e3.options ?? [], a = n.length > 0 ? e3.variants ?? [] : [], i = e3.selection, o = n.find((b) => b.values.length > 0 && b.values.every((E) => E.swatch)), l = n.length === 0 ? i?.options ?? {} : Object.fromEntries(n.flatMap((b) => {
      let E = t[b.name] ?? i?.options[b.name] ?? (b.values.length === 1 ? b.values[0].value : void 0);
      return E !== void 0 && b.values.some((N) => N.value === E) ? [[b.name, E]] : [];
    })), s = n.length === 0 ? i?.unresolvedOptions ?? [] : n.filter((b) => l[b.name] === void 0).map((b) => b.name), u = a.filter((b) => Hx(b, l)), c = n.length > 0 && s.length === 0 ? u[0] : void 0, d = o ? l[o.name] : void 0, f = Bx(u) ?? (o && d !== void 0 ? Bx(a.filter((b) => b.options[o.name] === d)) : void 0) ?? e3.photos, p = u.filter((b) => b.price !== void 0), v = p.length > 0 && p.every((b) => b.price === p[0].price) ? p[0].price : void 0, y = v !== void 0 && p.every((b) => b.listPrice === p[0].listPrice) ? p[0].listPrice : void 0, g = (b, E) => a.filter((N) => Hx(N, { ...l, [b]: E })), m = Object.entries(t).every(([b, E]) => i?.options[b] === E), h = c?.id ?? (m ? i?.variantId : void 0), w = Object.fromEntries(Object.entries(i?.options ?? {}).filter(([b]) => !n.some((E) => E.name === b)));
    return { options: n, swatches: o, swatch: d, chosen: l, unresolved: s, variant: c, photos: f, price: v ?? e3.price, listPrice: y, merchant: e3.merchant && { name: e3.merchant.name, url: j5(u.map((b) => b.url)) ?? e3.merchant.url }, stock: C9({ options: n, swatches: o, chosen: l, unresolved: s, variants: a, variant: c }, r), soldOut: (b, E) => {
      let N = g(b, E);
      return N.length > 0 && N.every((M) => M.available === false);
    }, offered: (b, E) => a.length === 0 || g(b, E).length > 0, selection: n.length === 0 ? i : { ...i?.productId !== void 0 && { productId: i.productId }, ...h !== void 0 && { variantId: h }, options: { ...w, ...l }, unresolvedOptions: s, ...i?.quantity !== void 0 && { quantity: i.quantity } } };
  }
  function H5(e3) {
    let t = xe(), [r, n] = (0, I5.useState)({});
    return e3.map((a) => ({ ...U5(a, r[a.number] ?? {}, t), choose: (i, o) => n((l) => ({ ...l, [a.number]: { ...l[a.number], [i]: o } })) }));
  }
  function sd(e3) {
    return H5([e3])[0];
  }
  function qc(e3) {
    return e3.options.find((t) => t !== e3.swatches);
  }
  function B5(e3, t) {
    let r = qc(e3);
    if (!r) return;
    let n = r.values.map((o) => o.value).filter((o) => e3.offered(r.name, o)), a = n.filter((o) => !e3.soldOut(r.name, o)), i = n.filter((o) => e3.soldOut(r.name, o));
    if (n.length !== 0) return a.length === 0 ? t.soldOut : i.length === 0 ? Vx(a) : a.length === 1 ? t.inStock(a[0]) : `${Vx(a)} \xB7 ${t.valuesSoldOut(i)}`;
  }
  function ud({ product: e3 }) {
    let t = z5(e3, xe());
    return (0, ne.jsxs)("span", { className: "file-tags", children: [(0, ne.jsx)("span", { className: e3.pick ? "file-pill is-pick" : "file-pill", children: e3.number }), t && (0, ne.jsx)("span", { className: "file-badge", children: t })] });
  }
  function D9({ product: e3, photo: t }) {
    let r = xe();
    return (0, ne.jsxs)("span", { className: "file-product-photo", children: [t ? (0, ne.jsx)("img", { src: t.src, alt: t.alt, style: Zr(t), loading: "lazy" }) : (0, ne.jsx)("span", { className: "file-product-empty", children: r.noPhoto }), (0, ne.jsx)(ud, { product: e3 })] });
  }
  function fm({ price: e3, listPrice: t }) {
    let r = xe();
    return (0, ne.jsxs)(ne.Fragment, { children: [(0, ne.jsx)("bdi", { children: e3 }), t && (0, ne.jsxs)("s", { className: "file-price-was", children: [(0, ne.jsx)("span", { className: "file-visually-hidden", children: r.was }), (0, ne.jsx)("bdi", { children: t })] })] });
  }
  function V5({ photos: e3, label: t, onOpen: r }) {
    let n = xe(), a = id(), i = e3.map((o, l) => (0, ne.jsx)("button", { type: "button", className: "file-product-zoom", "aria-label": n.fullScreen(o.alt), onClick: () => r(l), children: (0, ne.jsx)("img", { src: o.src, alt: o.alt, style: Zr(o), loading: "lazy" }) }, o.src));
    return e3.length > 1 ? (0, ne.jsx)(Jb, { ...a, bleed: true, className: "file-photos", "data-layout": "strip", role: "region", "aria-label": t, tabIndex: 0, children: i }) : (0, ne.jsx)("div", { ...a, className: "file-photos is-single", "data-layout": "strip", role: "region", "aria-label": t, children: i });
  }
  function hm({ product: e3, view: t, source: r = false }) {
    let n = xe(), a = r && t.merchant ? (0, ne.jsx)("span", { className: "file-product-source", children: (0, ne.jsxs)(om, { href: t.merchant.url, children: [n.viewAt(t.merchant.name), (0, ne.jsx)(Gb, { size: 14 })] }) }) : null;
    return (0, ne.jsxs)("div", { className: "file-product-copy", children: [(0, ne.jsxs)("div", { className: "file-product-line", children: [(0, ne.jsx)("span", { className: "file-product-name file-hover-underline", children: e3.title }), t.price && (0, ne.jsx)("span", { className: "file-product-price", children: (0, ne.jsx)(fm, { price: t.price, listPrice: t.listPrice }) })] }), (e3.brand || e3.meta) && (0, ne.jsx)("span", { className: "file-product-brand", children: [e3.brand, e3.meta].filter(Boolean).join(" \xB7 ") }), e3.note ? (0, ne.jsxs)("p", { className: "file-product-note", children: [e3.note, a] }) : a && (0, ne.jsx)("p", { className: "file-product-note", children: a })] });
  }
  function W5({ product: e3, selection: t, action: r }) {
    let n = xe(), [a, i] = (0, Jl.useState)(null), o = t.photos;
    return (0, ne.jsxs)("div", { className: "file-product-detail", children: [(0, ne.jsxs)("div", { className: "file-product-gallery", children: [o.length > 0 ? (0, ne.jsx)(V5, { photos: o, label: n.photosOf(e3.title), onOpen: i }, o[0].src) : (0, ne.jsx)("span", { className: "file-product-empty", children: n.noPhoto }), (0, ne.jsx)(ud, { product: e3 })] }), (0, ne.jsxs)("div", { className: "file-product-info", children: [(0, ne.jsx)(hm, { product: e3, view: t, source: true }), (0, ne.jsx)(O5, { selection: t }), e3.details && e3.details.length > 0 && (0, ne.jsx)(od, { items: e3.details }), e3.merchant && (r === void 0 ? (0, ne.jsx)(N9, { product: e3, selection: t }) : r)] }), a !== null && (0, ne.jsx)(ad, { photos: o, start: a, title: e3.title, detail: t.swatch, onClose: () => i(null) })] });
  }
  function N9({ product: e3, selection: t }) {
    let r = cm(e3, t);
    return (0, ne.jsx)(Yc, { state: r });
  }
  function M9({ product: e3, action: t }) {
    let r = sd(e3);
    return (0, ne.jsx)(W5, { product: e3, selection: r, action: t });
  }
  function pm({ product: e3, selection: t, onClose: r, action: n }) {
    let [a, i] = (0, Jl.useState)(true), o = (0, Jl.useRef)(null), l = im(o, a), s = () => l(() => {
      i(false), r?.();
    });
    return a ? (0, ne.jsxs)("dialog", { ref: o, className: "file-product-modal", "aria-label": e3.title, onCancel: (u) => {
      u.preventDefault(), s();
    }, onClick: (u) => {
      if (u.target !== u.currentTarget) return;
      let c = u.currentTarget.getBoundingClientRect();
      (u.clientX < c.left || u.clientX > c.right || u.clientY < c.top || u.clientY > c.bottom) && s();
    }, children: [(0, ne.jsx)("div", { className: "file-product-modal-header", children: (0, ne.jsx)(rd, { onClick: s }) }), (0, ne.jsx)(W5, { product: e3, selection: t, action: n })] }) : null;
  }
  function L9({ product: e3, onClose: t, action: r }) {
    let n = sd(e3);
    return (0, ne.jsx)(pm, { product: e3, selection: n, onClose: t, action: r });
  }
  function P9({ product: e3, expandable: t = true, defaultOpen: r = false, kind: n }) {
    let a = xe(), [i, o] = (0, ld.useState)(r), l = sd(e3), s = cm(e3, l), u = (0, fe.jsxs)(fe.Fragment, { children: [(0, fe.jsx)(D9, { product: e3, photo: l.photos[0] }), (0, fe.jsx)(hm, { product: { ...e3, note: void 0 }, view: l })] });
    return (0, fe.jsxs)("article", { className: `file-product is-${n}`, children: [t ? (0, fe.jsx)("button", { type: "button", className: "file-product-toggle", "aria-haspopup": "dialog", "aria-label": a.view(e3.title), onClick: () => o(true), children: u }) : (0, fe.jsx)("div", { className: "file-product-preview", children: u }), (0, fe.jsx)(dm, { view: l, limit: 5, choose: t ? l.choose : void 0 }), t && (0, fe.jsx)(Yc, { state: s }), t && i && (0, fe.jsx)(pm, { product: e3, selection: l, action: (0, fe.jsx)(Yc, { state: s }), onClose: () => o(false) })] });
  }
  function _9({ product: e3 }) {
    let t = sd(e3), r = cm(e3, t), [n, a] = (0, ld.useState)(null), i = t.photos;
    return (0, fe.jsxs)("article", { className: "file-product is-card", children: [(0, fe.jsx)(T9, { product: e3, photos: i, onOpen: a }, i[0]?.src), (0, fe.jsxs)("div", { className: "file-product-info", children: [(0, fe.jsx)(hm, { product: e3, view: t, source: true }), (0, fe.jsx)(O5, { selection: t }), e3.details && e3.details.length > 0 && (0, fe.jsx)(od, { items: e3.details }), (0, fe.jsx)(Yc, { state: r })] }), n !== null && (0, fe.jsx)(ad, { photos: i, start: n, title: e3.title, detail: t.swatch, onClose: () => a(null) })] });
  }
  function T9({ product: e3, photos: t, onOpen: r }) {
    let n = xe(), [a, i] = (0, ld.useState)(0), o = a === 0 ? t : [t[a], ...t.filter((l, s) => s !== a)];
    return (0, fe.jsxs)("div", { className: "file-product-media", children: [t.length > 0 ? (0, fe.jsx)(V5, { photos: o, label: n.photosOf(e3.title), onOpen: (l) => r(t.indexOf(o[l])) }) : (0, fe.jsx)("span", { className: "file-product-empty", children: n.noPhoto }), (0, fe.jsx)(ud, { product: e3 }), t.length > 1 && (0, fe.jsx)("div", { className: "file-product-thumbs", children: t.map((l, s) => (0, fe.jsx)("button", { type: "button", className: "file-product-thumb", "aria-label": l.alt, "aria-pressed": s === a, onClick: () => i(s), children: (0, fe.jsx)("img", { src: l.src, alt: "", style: Zr(l), loading: "lazy" }) }, l.src)) })] });
  }
  function mm(e3) {
    return (0, fe.jsx)(P9, { ...e3, kind: "tile" });
  }
  function A9({ products: e3, expandable: t = true, children: r }) {
    if (e3 === void 0 && r === void 0) throw new Error("ProductGrid needs products={[...]}, an array of products, or ProductTile children.");
    return (0, fe.jsxs)("div", { className: "file-product-grid", children: [e3?.map((n) => (0, fe.jsx)(mm, { product: n, expandable: t }, n.number)), r || null] });
  }
  function F9({ products: e3, label: t, bleed: r = true }) {
    let n = id();
    return (0, fe.jsx)("div", { ...n, className: r ? "file-product-carousel file-bleed" : "file-product-carousel", role: "region", "aria-label": t, tabIndex: 0, children: e3.map((a) => (0, fe.jsx)(mm, { product: a }, a.number)) });
  }
  function $9(e3, t) {
    let r = qc(e3), n = r ? e3.chosen[r.name] : void 0;
    return !r || !n ? B5(e3, t) : e3.soldOut(r.name, n) ? t.valuesSoldOut([n]) : e3.variant?.available ? t.inStock(n) : n;
  }
  function z9({ ratio: e3 = "portrait", number: t, pick: r = false, title: n, brand: a, price: i, photo: o, options: l, variants: s, selection: u, footer: c, lang: d, dir: f }) {
    let p = q0(d), v = U5({ price: i, photos: o ? [o] : [], options: l, variants: s, selection: u }, {}, p), y = o ?? v.photos[0], g = $9(v, p);
    return (0, Ct.jsxs)($5, { ratio: e3, footer: c, lang: d, dir: f, className: "file-product-image", children: [(0, Ct.jsxs)("div", { className: "file-product-image-photo", children: [y ? (0, Ct.jsx)("img", { src: y.src, alt: y.alt, style: { ...Zr(y), objectFit: "cover" } }) : (0, Ct.jsx)("span", { className: "file-product-empty", children: p.noPhoto }), t !== void 0 && (0, Ct.jsx)("span", { className: r ? "file-product-image-tag is-pick" : "file-product-image-tag", children: t })] }), (0, Ct.jsxs)("div", { className: "file-product-image-copy", children: [a && (0, Ct.jsx)("span", { className: "file-product-brand", children: a }), (0, Ct.jsxs)("div", { className: "file-product-line", children: [(0, Ct.jsx)("span", { className: "file-product-name file-hover-underline", children: n }), v.price && (0, Ct.jsx)("span", { className: "file-product-price", children: (0, Ct.jsx)(fm, { price: v.price, listPrice: v.listPrice }) })] }), (v.swatches || g) && (0, Ct.jsxs)("div", { className: "file-product-image-variant", children: [(0, Ct.jsx)(dm, { view: v, limit: 6, label: true }), g && (0, Ct.jsx)("span", { className: "file-product-image-size", children: g })] })] })] });
  }
  function O9(e3, t) {
    let r = e3.values.map(({ value: n }) => n);
    return `${r.length} \xB7 ${r.slice(0, 3).join(", ")}${r.length > 3 ? t.andMore(r.length - 3) : ""}`;
  }
  function I9({ caption: e3, products: t, rows: r }) {
    let n = xe(), [a, i] = (0, Y5.useState)(null), o = H5(t), l = t.findIndex((p) => p.number === a), s = o.some((p) => p.price), u = o.find((p) => p.swatches)?.swatches, c = o.map(qc).find((p) => p !== void 0), d = [...s ? [{ key: "price", cells: o.map((p) => ({ label: n.price, value: p.price ? (0, Re.jsx)(fm, { price: p.price, listPrice: p.listPrice }) : "\u2014", className: "file-product-price", quiet: true })) }] : [], ...u ? [{ key: "colors", cells: o.map((p) => ({ label: n.plural((p.swatches ?? u).name), value: p.swatches ? O9(p.swatches, n) : "\u2014" })) }] : [], ...c ? [{ key: "sizes", cells: o.map((p) => {
      let v = qc(p), y = n.plural((v ?? c).name);
      return { label: v && p.swatch ? n.optionIn(y, p.swatch) : y, value: (v && B5(p, n)) ?? "\u2014" };
    }) }] : [], ...r.map((p) => ({ key: `row:${p.label}`, cells: p.values.map((v, y) => ({ label: p.label, value: (0, Re.jsx)("bdi", { children: v }), className: p.best === y ? "is-best" : void 0 })) }))], f = (p, v) => ({ order: p * (d.length + 1) + v });
    return (0, Re.jsxs)(Re.Fragment, { children: [(0, Re.jsx)("div", { className: "file-table-scroll", role: "region", "aria-label": e3, tabIndex: 0, children: (0, Re.jsxs)("table", { className: "file-table is-products is-stacking", style: { "--file-table-columns": t.length }, children: [(0, Re.jsx)("caption", { className: "file-visually-hidden", children: e3 }), (0, Re.jsx)("thead", { children: (0, Re.jsx)("tr", { children: t.map((p, v) => {
      let y = o[v].photos[0];
      return (0, Re.jsxs)("th", { scope: "col", style: f(v, 0), children: [(0, Re.jsx)("button", { type: "button", className: "file-product-toggle", "aria-haspopup": "dialog", "aria-label": n.view(p.title), onClick: () => i(p.number), children: (0, Re.jsxs)("span", { className: "file-product-head", children: [(0, Re.jsxs)("span", { className: "file-product-head-photo", children: [y ? (0, Re.jsx)("img", { src: y.src, alt: y.alt, style: Zr(y), loading: "lazy" }) : (0, Re.jsx)("span", { className: "file-product-empty", children: n.noPhoto }), (0, Re.jsx)(ud, { product: p })] }), (0, Re.jsx)("span", { className: "file-product-name file-hover-underline", children: p.title }), (p.brand || p.meta) && (0, Re.jsx)("span", { className: "file-product-brand", children: [p.brand, p.meta].filter(Boolean).join(" \xB7 ") })] }) }), (0, Re.jsx)(dm, { view: o[v], limit: 6, label: true, choose: o[v].choose })] }, p.number);
    }) }) }), (0, Re.jsx)("tbody", { children: d.map((p, v) => (0, Re.jsx)("tr", { children: p.cells.map((y, g) => (0, Re.jsxs)("td", { className: y.className, style: f(g, v + 1), children: [(0, Re.jsx)("span", { className: y.quiet ? "file-visually-hidden" : "file-cell-label", children: y.label }), y.value] }, g)) }, p.key)) })] }) }), l >= 0 && (0, Re.jsx)(pm, { product: t[l], selection: o[l], onClose: () => i(null) })] });
  }
  function j9({ children: e3 }) {
    return (0, Dt.jsx)("div", { className: "file-recommendations", children: e3 });
  }
  function U9({ number: e3, title: t, eyebrow: r, recommended: n = false, photos: a = [], photoCredit: i, links: o, children: l }) {
    let s = xe(), u = q5.default.useId();
    return (0, Dt.jsxs)("section", { className: "file-recommendation", "data-recommended": n, "aria-labelledby": u, children: [(0, Dt.jsxs)("header", { className: "file-recommendation-header", children: [(0, Dt.jsxs)("div", { className: "file-recommendation-meta", children: [(0, Dt.jsx)("span", { className: "file-recommendation-number", children: e3 }), r && (0, Dt.jsx)("p", { className: "file-recommendation-eyebrow", children: r }), n && (0, Dt.jsx)("span", { className: "file-recommendation-badge", children: s.recommended })] }), (0, Dt.jsx)("h2", { id: u, className: "file-recommendation-title", children: t })] }), a.length > 0 && (0, Dt.jsxs)("figure", { className: "file-recommendation-photos", children: [(0, Dt.jsx)(lm, { items: a, label: s.photosOf(t), layout: "strip", bleed: false }), i && (0, Dt.jsx)("figcaption", { className: "file-caption", children: i })] }), (0, Dt.jsx)("div", { className: "file-recommendation-content", children: l }), o && o.length > 0 && (0, Dt.jsx)("footer", { className: "file-recommendation-links", children: o.map((c) => (0, Dt.jsx)(om, { href: c.href, children: c.label }, c.href)) })] });
  }
  function H9() {
    let e3 = qe(), t = bn();
    return (0, gm.useEffect)(() => {
      window.instinctFile.route(e3.pathname + e3.search + e3.hash);
    }, [e3]), (0, gm.useEffect)(() => {
      let r = (n) => t(n.detail, { replace: true });
      return window.addEventListener("instinct-route", r), () => window.removeEventListener("instinct-route", r);
    }, [t]), null;
  }
  function B9({ children: e3 }) {
    return (0, cd.jsxs)(tc, { initialEntries: [window.instinctFile.initialRoute], children: [(0, cd.jsx)(H9, {}), e3] });
  }
  var import_meta, p3, gd, m3, g3, v3, y3, wr, Lm, w3, j, Hm, ee, Wm, we, rg, ag, sy, ul, fy, J2, t4, EM, RM, SM, CM, U4, $t, H, B, hr, nt, G, R2, Jn, ep, I, fr, qy, Gy, dr, fl, Hr, wl, xl, ap, hy, hl, mr, Vk, Yk, Xk, Qk, Zk, Jk, eE, tE, gy, op, lp, er, oE, lE, sE, uE, Ia, Xu, Qu, up, it, iw, ea, dE, xy, fw, pE, mE, gE, hw, vE, Ii, kl, pn, pw, mw, gw, Fa, Fi, Zn, $i, yE, Cy, pp, Dy, CE, Mr, Wr, Rl, Xi, Qi, Wi, _w, ht, na, zt, vp, Vr, Tw, TE, AE, $w, Ow, zE, Uw, jh, HE, zy, Iy, VE, jy, WE, Ba, qE, GE, KE, Zw, $u, zu, Pu, aR, o2, Cp, Dp, Np, Hu, Mp, Lp, l2, s2, Ui, Xh, u2, Hi, c2, Qh, d2, f2, Zh, h2, lR, Hh, sR, cR, _u, mR, gR, Nr, g2, sc, Pp, Tu, Iu, TR, Bu, fc, Vh, vr, Yy, Vu, Ji, BR, eo, Pl, yc, WR, YR, rp, Fu, Lr, ro, Sc, E4, to, pt, i0, iS, oS, g4, Cc, Dc, o0, w4, S4, C4, Nc, D4, a0, s4, _4, FS, d4, $S, f4, O4, I4, ot, no, HS, K, Ol, xN, G5, gm, Qe, PN, h0, rx, nx, v0, Hl, BS, Q4, H4, VS, WS, f0, B4, YS, qS, GS, KS, XS, QS, ZS, JS, Z4, Me, J4, tC, rC, nC, aC, iC, oC, lC, Rn, oa, ao, d0, Il, sC, se, la, uC, cC, dC, fC, hC, pC, jl, io, mC, ex, gC, vC, W4, yC, Ul, wC, xC, bC, kC, EC, RC, CC, Lc, m0, LC, q4, G4, AC, FC, g0, $C, y0, w0, He, Kl, Xc, tb, ca, $c, Hb, Ql, Cn, ma, ed, R, Nt, Lt, he, nd, tr, ri, fa, Y0, U, ue, A, ho, Fe, S5, Ee, Vl, _5, T5, A5, Pr, ua, ld, Ja, Mt, Jl, lt, I5, ne, fe, Ct, Y5, Re, q5, Dt, OC, Wx, IC, jC, UC, HC, BC, VC, Yx, qx, Tr, Pt, Gc, WC, YC, qC, GC, KC, XC, QC, ZC, JC, ax, e8, t8, r8, Kc, zc, a8, i8, Zx, Jx, nb, f8, AN, FN, h8, ix, L0, P0, _0, lx, Za, uo, lo, Wl, Kr, x8, b8, k8, E8, R8, S8, C8, sx, sb, ub, jc, cb, db, fb, hb, so, pb, L8, vb, X0, Q0, Qc, ql, gx, vx, yx, Zc, z0, $N, zN, O0, S0, W8, Y8, G8, K8, X8, Q8, wx, u7, Sb, bx, Ex, Rx, Tc, Cb, Db, C0, D0, tm, ON, Mb, IN, Lb, jN, Pb, UN, _b, HN, Tb, BN, Ab, VN, w7, WN, Fb, x7, b7, k7, E7, R7, S7, YN, qN, GN, KN, XN, QN, ZN, $b, C7, D7, N7, M7, L7, P7, JN, eM, tM, rM, nM, aM, iM, zb, oM, Ob, lM, rm, sM, nm, uM, Sx, U7, H7, Cx, Dx, X7, Q7, Z7, eD, j0, U0, qa, tD, rD, sD, uD, fD, hD, Jc, da, am, mD, Wb, Yb, qb, gD, td, Gb, Kb, yD, wD, xD, bD, RD, SD, Bl, Qb, Px, _x, Tx, W0, AD, a5, FD, zD, x5, Qa, Wc, Gl, OD, ID, Ax, qD, GD, Fx, $x, Yt, a9, i9, o9, l9, s9, u9, c9, M0, Ix, C5, d9, jx, h9, Qr, y9, Ux, w9, L5, k9, Hx, S9, Bx, Vx, cd;
  var init_kit = __esm({
    "../../skills/platform/files/render/page-kit/kit.js"() {
      import_meta = {};
      p3 = Object.create;
      gd = Object.defineProperty;
      m3 = Object.getOwnPropertyDescriptor;
      g3 = Object.getOwnPropertyNames;
      v3 = Object.getPrototypeOf;
      y3 = Object.prototype.hasOwnProperty;
      wr = (e3, t) => () => (t || e3((t = { exports: {} }).exports, t), t.exports);
      Lm = (e3, t) => {
        for (var r in t) gd(e3, r, { get: t[r], enumerable: true });
      };
      w3 = (e3, t, r, n) => {
        if (t && typeof t == "object" || typeof t == "function") for (let a of g3(t)) !y3.call(e3, a) && a !== r && gd(e3, a, { get: () => t[a], enumerable: !(n = m3(t, a)) || n.enumerable });
        return e3;
      };
      j = (e3, t, r) => (r = e3 != null ? p3(v3(e3)) : {}, w3(t || !e3 || !e3.__esModule ? gd(r, "default", { value: e3, enumerable: true }) : r, e3));
      Hm = wr((ce) => {
        "use strict";
        var vo = /* @__PURE__ */ Symbol.for("react.element"), x3 = /* @__PURE__ */ Symbol.for("react.portal"), b3 = /* @__PURE__ */ Symbol.for("react.fragment"), k3 = /* @__PURE__ */ Symbol.for("react.strict_mode"), E3 = /* @__PURE__ */ Symbol.for("react.profiler"), R3 = /* @__PURE__ */ Symbol.for("react.provider"), S3 = /* @__PURE__ */ Symbol.for("react.context"), C3 = /* @__PURE__ */ Symbol.for("react.forward_ref"), D3 = /* @__PURE__ */ Symbol.for("react.suspense"), N3 = /* @__PURE__ */ Symbol.for("react.memo"), M3 = /* @__PURE__ */ Symbol.for("react.lazy"), Pm = Symbol.iterator;
        function L3(e3) {
          return e3 === null || typeof e3 != "object" ? null : (e3 = Pm && e3[Pm] || e3["@@iterator"], typeof e3 == "function" ? e3 : null);
        }
        var Am = { isMounted: function() {
          return false;
        }, enqueueForceUpdate: function() {
        }, enqueueReplaceState: function() {
        }, enqueueSetState: function() {
        } }, Fm = Object.assign, $m = {};
        function ii(e3, t, r) {
          this.props = e3, this.context = t, this.refs = $m, this.updater = r || Am;
        }
        ii.prototype.isReactComponent = {};
        ii.prototype.setState = function(e3, t) {
          if (typeof e3 != "object" && typeof e3 != "function" && e3 != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          this.updater.enqueueSetState(this, e3, t, "setState");
        };
        ii.prototype.forceUpdate = function(e3) {
          this.updater.enqueueForceUpdate(this, e3, "forceUpdate");
        };
        function zm() {
        }
        zm.prototype = ii.prototype;
        function yd(e3, t, r) {
          this.props = e3, this.context = t, this.refs = $m, this.updater = r || Am;
        }
        var wd = yd.prototype = new zm();
        wd.constructor = yd;
        Fm(wd, ii.prototype);
        wd.isPureReactComponent = true;
        var _m = Array.isArray, Om = Object.prototype.hasOwnProperty, xd = { current: null }, Im = { key: true, ref: true, __self: true, __source: true };
        function jm(e3, t, r) {
          var n, a = {}, i = null, o = null;
          if (t != null) for (n in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) Om.call(t, n) && !Im.hasOwnProperty(n) && (a[n] = t[n]);
          var l = arguments.length - 2;
          if (l === 1) a.children = r;
          else if (1 < l) {
            for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
            a.children = s;
          }
          if (e3 && e3.defaultProps) for (n in l = e3.defaultProps, l) a[n] === void 0 && (a[n] = l[n]);
          return { $$typeof: vo, type: e3, key: i, ref: o, props: a, _owner: xd.current };
        }
        function P3(e3, t) {
          return { $$typeof: vo, type: e3.type, key: t, ref: e3.ref, props: e3.props, _owner: e3._owner };
        }
        function bd(e3) {
          return typeof e3 == "object" && e3 !== null && e3.$$typeof === vo;
        }
        function _3(e3) {
          var t = { "=": "=0", ":": "=2" };
          return "$" + e3.replace(/[=:]/g, function(r) {
            return t[r];
          });
        }
        var Tm = /\/+/g;
        function vd(e3, t) {
          return typeof e3 == "object" && e3 !== null && e3.key != null ? _3("" + e3.key) : t.toString(36);
        }
        function ss(e3, t, r, n, a) {
          var i = typeof e3;
          (i === "undefined" || i === "boolean") && (e3 = null);
          var o = false;
          if (e3 === null) o = true;
          else switch (i) {
            case "string":
            case "number":
              o = true;
              break;
            case "object":
              switch (e3.$$typeof) {
                case vo:
                case x3:
                  o = true;
              }
          }
          if (o) return o = e3, a = a(o), e3 = n === "" ? "." + vd(o, 0) : n, _m(a) ? (r = "", e3 != null && (r = e3.replace(Tm, "$&/") + "/"), ss(a, t, r, "", function(u) {
            return u;
          })) : a != null && (bd(a) && (a = P3(a, r + (!a.key || o && o.key === a.key ? "" : ("" + a.key).replace(Tm, "$&/") + "/") + e3)), t.push(a)), 1;
          if (o = 0, n = n === "" ? "." : n + ":", _m(e3)) for (var l = 0; l < e3.length; l++) {
            i = e3[l];
            var s = n + vd(i, l);
            o += ss(i, t, r, s, a);
          }
          else if (s = L3(e3), typeof s == "function") for (e3 = s.call(e3), l = 0; !(i = e3.next()).done; ) i = i.value, s = n + vd(i, l++), o += ss(i, t, r, s, a);
          else if (i === "object") throw t = String(e3), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e3).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
          return o;
        }
        function ls(e3, t, r) {
          if (e3 == null) return e3;
          var n = [], a = 0;
          return ss(e3, n, "", "", function(i) {
            return t.call(r, i, a++);
          }), n;
        }
        function T3(e3) {
          if (e3._status === -1) {
            var t = e3._result;
            t = t(), t.then(function(r) {
              (e3._status === 0 || e3._status === -1) && (e3._status = 1, e3._result = r);
            }, function(r) {
              (e3._status === 0 || e3._status === -1) && (e3._status = 2, e3._result = r);
            }), e3._status === -1 && (e3._status = 0, e3._result = t);
          }
          if (e3._status === 1) return e3._result.default;
          throw e3._result;
        }
        var _t = { current: null }, us = { transition: null }, A3 = { ReactCurrentDispatcher: _t, ReactCurrentBatchConfig: us, ReactCurrentOwner: xd };
        function Um() {
          throw Error("act(...) is not supported in production builds of React.");
        }
        ce.Children = { map: ls, forEach: function(e3, t, r) {
          ls(e3, function() {
            t.apply(this, arguments);
          }, r);
        }, count: function(e3) {
          var t = 0;
          return ls(e3, function() {
            t++;
          }), t;
        }, toArray: function(e3) {
          return ls(e3, function(t) {
            return t;
          }) || [];
        }, only: function(e3) {
          if (!bd(e3)) throw Error("React.Children.only expected to receive a single React element child.");
          return e3;
        } };
        ce.Component = ii;
        ce.Fragment = b3;
        ce.Profiler = E3;
        ce.PureComponent = yd;
        ce.StrictMode = k3;
        ce.Suspense = D3;
        ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A3;
        ce.act = Um;
        ce.cloneElement = function(e3, t, r) {
          if (e3 == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e3 + ".");
          var n = Fm({}, e3.props), a = e3.key, i = e3.ref, o = e3._owner;
          if (t != null) {
            if (t.ref !== void 0 && (i = t.ref, o = xd.current), t.key !== void 0 && (a = "" + t.key), e3.type && e3.type.defaultProps) var l = e3.type.defaultProps;
            for (s in t) Om.call(t, s) && !Im.hasOwnProperty(s) && (n[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
          }
          var s = arguments.length - 2;
          if (s === 1) n.children = r;
          else if (1 < s) {
            l = Array(s);
            for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
            n.children = l;
          }
          return { $$typeof: vo, type: e3.type, key: a, ref: i, props: n, _owner: o };
        };
        ce.createContext = function(e3) {
          return e3 = { $$typeof: S3, _currentValue: e3, _currentValue2: e3, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e3.Provider = { $$typeof: R3, _context: e3 }, e3.Consumer = e3;
        };
        ce.createElement = jm;
        ce.createFactory = function(e3) {
          var t = jm.bind(null, e3);
          return t.type = e3, t;
        };
        ce.createRef = function() {
          return { current: null };
        };
        ce.forwardRef = function(e3) {
          return { $$typeof: C3, render: e3 };
        };
        ce.isValidElement = bd;
        ce.lazy = function(e3) {
          return { $$typeof: M3, _payload: { _status: -1, _result: e3 }, _init: T3 };
        };
        ce.memo = function(e3, t) {
          return { $$typeof: N3, type: e3, compare: t === void 0 ? null : t };
        };
        ce.startTransition = function(e3) {
          var t = us.transition;
          us.transition = {};
          try {
            e3();
          } finally {
            us.transition = t;
          }
        };
        ce.unstable_act = Um;
        ce.useCallback = function(e3, t) {
          return _t.current.useCallback(e3, t);
        };
        ce.useContext = function(e3) {
          return _t.current.useContext(e3);
        };
        ce.useDebugValue = function() {
        };
        ce.useDeferredValue = function(e3) {
          return _t.current.useDeferredValue(e3);
        };
        ce.useEffect = function(e3, t) {
          return _t.current.useEffect(e3, t);
        };
        ce.useId = function() {
          return _t.current.useId();
        };
        ce.useImperativeHandle = function(e3, t, r) {
          return _t.current.useImperativeHandle(e3, t, r);
        };
        ce.useInsertionEffect = function(e3, t) {
          return _t.current.useInsertionEffect(e3, t);
        };
        ce.useLayoutEffect = function(e3, t) {
          return _t.current.useLayoutEffect(e3, t);
        };
        ce.useMemo = function(e3, t) {
          return _t.current.useMemo(e3, t);
        };
        ce.useReducer = function(e3, t, r) {
          return _t.current.useReducer(e3, t, r);
        };
        ce.useRef = function(e3) {
          return _t.current.useRef(e3);
        };
        ce.useState = function(e3) {
          return _t.current.useState(e3);
        };
        ce.useSyncExternalStore = function(e3, t, r) {
          return _t.current.useSyncExternalStore(e3, t, r);
        };
        ce.useTransition = function() {
          return _t.current.useTransition();
        };
        ce.version = "18.3.1";
      });
      ee = wr((Y9, Bm) => {
        "use strict";
        Bm.exports = Hm();
      });
      Wm = wr((cs) => {
        "use strict";
        var F3 = ee(), $3 = /* @__PURE__ */ Symbol.for("react.element"), z3 = /* @__PURE__ */ Symbol.for("react.fragment"), O3 = Object.prototype.hasOwnProperty, I3 = F3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, j3 = { key: true, ref: true, __self: true, __source: true };
        function Vm(e3, t, r) {
          var n, a = {}, i = null, o = null;
          r !== void 0 && (i = "" + r), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
          for (n in t) O3.call(t, n) && !j3.hasOwnProperty(n) && (a[n] = t[n]);
          if (e3 && e3.defaultProps) for (n in t = e3.defaultProps, t) a[n] === void 0 && (a[n] = t[n]);
          return { $$typeof: $3, type: e3, key: i, ref: o, props: a, _owner: I3.current };
        }
        cs.Fragment = z3;
        cs.jsx = Vm;
        cs.jsxs = Vm;
      });
      we = wr((G9, Ym) => {
        "use strict";
        Ym.exports = Wm();
      });
      rg = wr((Se) => {
        "use strict";
        function Sd(e3, t) {
          var r = e3.length;
          e3.push(t);
          e: for (; 0 < r; ) {
            var n = r - 1 >>> 1, a = e3[n];
            if (0 < ds(a, t)) e3[n] = t, e3[r] = a, r = n;
            else break e;
          }
        }
        function xr(e3) {
          return e3.length === 0 ? null : e3[0];
        }
        function hs(e3) {
          if (e3.length === 0) return null;
          var t = e3[0], r = e3.pop();
          if (r !== t) {
            e3[0] = r;
            e: for (var n = 0, a = e3.length, i = a >>> 1; n < i; ) {
              var o = 2 * (n + 1) - 1, l = e3[o], s = o + 1, u = e3[s];
              if (0 > ds(l, r)) s < a && 0 > ds(u, l) ? (e3[n] = u, e3[s] = r, n = s) : (e3[n] = l, e3[o] = r, n = o);
              else if (s < a && 0 > ds(u, r)) e3[n] = u, e3[s] = r, n = s;
              else break e;
            }
          }
          return t;
        }
        function ds(e3, t) {
          var r = e3.sortIndex - t.sortIndex;
          return r !== 0 ? r : e3.id - t.id;
        }
        typeof performance == "object" && typeof performance.now == "function" ? (qm = performance, Se.unstable_now = function() {
          return qm.now();
        }) : (kd = Date, Gm = kd.now(), Se.unstable_now = function() {
          return kd.now() - Gm;
        });
        var qm, kd, Gm, $r = [], Pn = [], U3 = 1, ar = null, yt = 3, ps = false, xa = false, wo = false, Qm = typeof setTimeout == "function" ? setTimeout : null, Zm = typeof clearTimeout == "function" ? clearTimeout : null, Km = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function Cd(e3) {
          for (var t = xr(Pn); t !== null; ) {
            if (t.callback === null) hs(Pn);
            else if (t.startTime <= e3) hs(Pn), t.sortIndex = t.expirationTime, Sd($r, t);
            else break;
            t = xr(Pn);
          }
        }
        function Dd(e3) {
          if (wo = false, Cd(e3), !xa) if (xr($r) !== null) xa = true, Md(Nd);
          else {
            var t = xr(Pn);
            t !== null && Ld(Dd, t.startTime - e3);
          }
        }
        function Nd(e3, t) {
          xa = false, wo && (wo = false, Zm(xo), xo = -1), ps = true;
          var r = yt;
          try {
            for (Cd(t), ar = xr($r); ar !== null && (!(ar.expirationTime > t) || e3 && !tg()); ) {
              var n = ar.callback;
              if (typeof n == "function") {
                ar.callback = null, yt = ar.priorityLevel;
                var a = n(ar.expirationTime <= t);
                t = Se.unstable_now(), typeof a == "function" ? ar.callback = a : ar === xr($r) && hs($r), Cd(t);
              } else hs($r);
              ar = xr($r);
            }
            if (ar !== null) var i = true;
            else {
              var o = xr(Pn);
              o !== null && Ld(Dd, o.startTime - t), i = false;
            }
            return i;
          } finally {
            ar = null, yt = r, ps = false;
          }
        }
        var ms = false, fs = null, xo = -1, Jm = 5, eg = -1;
        function tg() {
          return !(Se.unstable_now() - eg < Jm);
        }
        function Ed() {
          if (fs !== null) {
            var e3 = Se.unstable_now();
            eg = e3;
            var t = true;
            try {
              t = fs(true, e3);
            } finally {
              t ? yo() : (ms = false, fs = null);
            }
          } else ms = false;
        }
        var yo;
        typeof Km == "function" ? yo = function() {
          Km(Ed);
        } : typeof MessageChannel < "u" ? (Rd = new MessageChannel(), Xm = Rd.port2, Rd.port1.onmessage = Ed, yo = function() {
          Xm.postMessage(null);
        }) : yo = function() {
          Qm(Ed, 0);
        };
        var Rd, Xm;
        function Md(e3) {
          fs = e3, ms || (ms = true, yo());
        }
        function Ld(e3, t) {
          xo = Qm(function() {
            e3(Se.unstable_now());
          }, t);
        }
        Se.unstable_IdlePriority = 5;
        Se.unstable_ImmediatePriority = 1;
        Se.unstable_LowPriority = 4;
        Se.unstable_NormalPriority = 3;
        Se.unstable_Profiling = null;
        Se.unstable_UserBlockingPriority = 2;
        Se.unstable_cancelCallback = function(e3) {
          e3.callback = null;
        };
        Se.unstable_continueExecution = function() {
          xa || ps || (xa = true, Md(Nd));
        };
        Se.unstable_forceFrameRate = function(e3) {
          0 > e3 || 125 < e3 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Jm = 0 < e3 ? Math.floor(1e3 / e3) : 5;
        };
        Se.unstable_getCurrentPriorityLevel = function() {
          return yt;
        };
        Se.unstable_getFirstCallbackNode = function() {
          return xr($r);
        };
        Se.unstable_next = function(e3) {
          switch (yt) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = yt;
          }
          var r = yt;
          yt = t;
          try {
            return e3();
          } finally {
            yt = r;
          }
        };
        Se.unstable_pauseExecution = function() {
        };
        Se.unstable_requestPaint = function() {
        };
        Se.unstable_runWithPriority = function(e3, t) {
          switch (e3) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e3 = 3;
          }
          var r = yt;
          yt = e3;
          try {
            return t();
          } finally {
            yt = r;
          }
        };
        Se.unstable_scheduleCallback = function(e3, t, r) {
          var n = Se.unstable_now();
          switch (typeof r == "object" && r !== null ? (r = r.delay, r = typeof r == "number" && 0 < r ? n + r : n) : r = n, e3) {
            case 1:
              var a = -1;
              break;
            case 2:
              a = 250;
              break;
            case 5:
              a = 1073741823;
              break;
            case 4:
              a = 1e4;
              break;
            default:
              a = 5e3;
          }
          return a = r + a, e3 = { id: U3++, callback: t, priorityLevel: e3, startTime: r, expirationTime: a, sortIndex: -1 }, r > n ? (e3.sortIndex = r, Sd(Pn, e3), xr($r) === null && e3 === xr(Pn) && (wo ? (Zm(xo), xo = -1) : wo = true, Ld(Dd, r - n))) : (e3.sortIndex = a, Sd($r, e3), xa || ps || (xa = true, Md(Nd))), e3;
        };
        Se.unstable_shouldYield = tg;
        Se.unstable_wrapCallback = function(e3) {
          var t = yt;
          return function() {
            var r = yt;
            yt = t;
            try {
              return e3.apply(this, arguments);
            } finally {
              yt = r;
            }
          };
        };
      });
      ag = wr((X9, ng) => {
        "use strict";
        ng.exports = rg();
      });
      sy = wr((Jt) => {
        "use strict";
        var H3 = ee(), Qt = ag();
        function z(e3) {
          for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e3, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
          return "Minified React error #" + e3 + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        var dv = /* @__PURE__ */ new Set(), Ho = {};
        function Ta(e3, t) {
          Ci(e3, t), Ci(e3 + "Capture", t);
        }
        function Ci(e3, t) {
          for (Ho[e3] = t, e3 = 0; e3 < t.length; e3++) dv.add(t[e3]);
        }
        var un = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Jd = Object.prototype.hasOwnProperty, B3 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ig = {}, og = {};
        function V3(e3) {
          return Jd.call(og, e3) ? true : Jd.call(ig, e3) ? false : B3.test(e3) ? og[e3] = true : (ig[e3] = true, false);
        }
        function W3(e3, t, r, n) {
          if (r !== null && r.type === 0) return false;
          switch (typeof t) {
            case "function":
            case "symbol":
              return true;
            case "boolean":
              return n ? false : r !== null ? !r.acceptsBooleans : (e3 = e3.toLowerCase().slice(0, 5), e3 !== "data-" && e3 !== "aria-");
            default:
              return false;
          }
        }
        function Y3(e3, t, r, n) {
          if (t === null || typeof t > "u" || W3(e3, t, r, n)) return true;
          if (n) return false;
          if (r !== null) switch (r.type) {
            case 3:
              return !t;
            case 4:
              return t === false;
            case 5:
              return isNaN(t);
            case 6:
              return isNaN(t) || 1 > t;
          }
          return false;
        }
        function Ft(e3, t, r, n, a, i, o) {
          this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = a, this.mustUseProperty = r, this.propertyName = e3, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
        }
        var ft = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e3) {
          ft[e3] = new Ft(e3, 0, false, e3, null, false, false);
        });
        [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e3) {
          var t = e3[0];
          ft[t] = new Ft(t, 1, false, e3[1], null, false, false);
        });
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e3) {
          ft[e3] = new Ft(e3, 2, false, e3.toLowerCase(), null, false, false);
        });
        ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e3) {
          ft[e3] = new Ft(e3, 2, false, e3, null, false, false);
        });
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e3) {
          ft[e3] = new Ft(e3, 3, false, e3.toLowerCase(), null, false, false);
        });
        ["checked", "multiple", "muted", "selected"].forEach(function(e3) {
          ft[e3] = new Ft(e3, 3, true, e3, null, false, false);
        });
        ["capture", "download"].forEach(function(e3) {
          ft[e3] = new Ft(e3, 4, false, e3, null, false, false);
        });
        ["cols", "rows", "size", "span"].forEach(function(e3) {
          ft[e3] = new Ft(e3, 6, false, e3, null, false, false);
        });
        ["rowSpan", "start"].forEach(function(e3) {
          ft[e3] = new Ft(e3, 5, false, e3.toLowerCase(), null, false, false);
        });
        var Yf = /[\-:]([a-z])/g;
        function qf(e3) {
          return e3[1].toUpperCase();
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e3) {
          var t = e3.replace(Yf, qf);
          ft[t] = new Ft(t, 1, false, e3, null, false, false);
        });
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e3) {
          var t = e3.replace(Yf, qf);
          ft[t] = new Ft(t, 1, false, e3, "http://www.w3.org/1999/xlink", false, false);
        });
        ["xml:base", "xml:lang", "xml:space"].forEach(function(e3) {
          var t = e3.replace(Yf, qf);
          ft[t] = new Ft(t, 1, false, e3, "http://www.w3.org/XML/1998/namespace", false, false);
        });
        ["tabIndex", "crossOrigin"].forEach(function(e3) {
          ft[e3] = new Ft(e3, 1, false, e3.toLowerCase(), null, false, false);
        });
        ft.xlinkHref = new Ft("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
        ["src", "href", "action", "formAction"].forEach(function(e3) {
          ft[e3] = new Ft(e3, 1, false, e3.toLowerCase(), null, true, true);
        });
        function Gf(e3, t, r, n) {
          var a = ft.hasOwnProperty(t) ? ft[t] : null;
          (a !== null ? a.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Y3(t, r, a, n) && (r = null), n || a === null ? V3(t) && (r === null ? e3.removeAttribute(t) : e3.setAttribute(t, "" + r)) : a.mustUseProperty ? e3[a.propertyName] = r === null ? a.type === 3 ? false : "" : r : (t = a.attributeName, n = a.attributeNamespace, r === null ? e3.removeAttribute(t) : (a = a.type, r = a === 3 || a === 4 && r === true ? "" : "" + r, n ? e3.setAttributeNS(n, t, r) : e3.setAttribute(t, r))));
        }
        var hn = H3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, gs = /* @__PURE__ */ Symbol.for("react.element"), si = /* @__PURE__ */ Symbol.for("react.portal"), ui = /* @__PURE__ */ Symbol.for("react.fragment"), Kf = /* @__PURE__ */ Symbol.for("react.strict_mode"), ef = /* @__PURE__ */ Symbol.for("react.profiler"), fv = /* @__PURE__ */ Symbol.for("react.provider"), hv = /* @__PURE__ */ Symbol.for("react.context"), Xf = /* @__PURE__ */ Symbol.for("react.forward_ref"), tf = /* @__PURE__ */ Symbol.for("react.suspense"), rf = /* @__PURE__ */ Symbol.for("react.suspense_list"), Qf = /* @__PURE__ */ Symbol.for("react.memo"), Tn = /* @__PURE__ */ Symbol.for("react.lazy"), pv = /* @__PURE__ */ Symbol.for("react.offscreen"), lg = Symbol.iterator;
        function bo(e3) {
          return e3 === null || typeof e3 != "object" ? null : (e3 = lg && e3[lg] || e3["@@iterator"], typeof e3 == "function" ? e3 : null);
        }
        var Oe = Object.assign, Pd;
        function Mo(e3) {
          if (Pd === void 0) try {
            throw Error();
          } catch (r) {
            var t = r.stack.trim().match(/\n( *(at )?)/);
            Pd = t && t[1] || "";
          }
          return `
` + Pd + e3;
        }
        var _d = false;
        function Td(e3, t) {
          if (!e3 || _d) return "";
          _d = true;
          var r = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t) if (t = function() {
              throw Error();
            }, Object.defineProperty(t.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(t, []);
              } catch (u) {
                var n = u;
              }
              Reflect.construct(e3, [], t);
            } else {
              try {
                t.call();
              } catch (u) {
                n = u;
              }
              e3.call(t.prototype);
            }
            else {
              try {
                throw Error();
              } catch (u) {
                n = u;
              }
              e3();
            }
          } catch (u) {
            if (u && n && typeof u.stack == "string") {
              for (var a = u.stack.split(`
`), i = n.stack.split(`
`), o = a.length - 1, l = i.length - 1; 1 <= o && 0 <= l && a[o] !== i[l]; ) l--;
              for (; 1 <= o && 0 <= l; o--, l--) if (a[o] !== i[l]) {
                if (o !== 1 || l !== 1) do
                  if (o--, l--, 0 > l || a[o] !== i[l]) {
                    var s = `
` + a[o].replace(" at new ", " at ");
                    return e3.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e3.displayName)), s;
                  }
                while (1 <= o && 0 <= l);
                break;
              }
            }
          } finally {
            _d = false, Error.prepareStackTrace = r;
          }
          return (e3 = e3 ? e3.displayName || e3.name : "") ? Mo(e3) : "";
        }
        function q3(e3) {
          switch (e3.tag) {
            case 5:
              return Mo(e3.type);
            case 16:
              return Mo("Lazy");
            case 13:
              return Mo("Suspense");
            case 19:
              return Mo("SuspenseList");
            case 0:
            case 2:
            case 15:
              return e3 = Td(e3.type, false), e3;
            case 11:
              return e3 = Td(e3.type.render, false), e3;
            case 1:
              return e3 = Td(e3.type, true), e3;
            default:
              return "";
          }
        }
        function nf(e3) {
          if (e3 == null) return null;
          if (typeof e3 == "function") return e3.displayName || e3.name || null;
          if (typeof e3 == "string") return e3;
          switch (e3) {
            case ui:
              return "Fragment";
            case si:
              return "Portal";
            case ef:
              return "Profiler";
            case Kf:
              return "StrictMode";
            case tf:
              return "Suspense";
            case rf:
              return "SuspenseList";
          }
          if (typeof e3 == "object") switch (e3.$$typeof) {
            case hv:
              return (e3.displayName || "Context") + ".Consumer";
            case fv:
              return (e3._context.displayName || "Context") + ".Provider";
            case Xf:
              var t = e3.render;
              return e3 = e3.displayName, e3 || (e3 = t.displayName || t.name || "", e3 = e3 !== "" ? "ForwardRef(" + e3 + ")" : "ForwardRef"), e3;
            case Qf:
              return t = e3.displayName || null, t !== null ? t : nf(e3.type) || "Memo";
            case Tn:
              t = e3._payload, e3 = e3._init;
              try {
                return nf(e3(t));
              } catch {
              }
          }
          return null;
        }
        function G3(e3) {
          var t = e3.type;
          switch (e3.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return e3 = t.render, e3 = e3.displayName || e3.name || "", t.displayName || (e3 !== "" ? "ForwardRef(" + e3 + ")" : "ForwardRef");
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return nf(t);
            case 8:
              return t === Kf ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if (typeof t == "function") return t.displayName || t.name || null;
              if (typeof t == "string") return t;
          }
          return null;
        }
        function qn(e3) {
          switch (typeof e3) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
              return e3;
            case "object":
              return e3;
            default:
              return "";
          }
        }
        function mv(e3) {
          var t = e3.type;
          return (e3 = e3.nodeName) && e3.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
        }
        function K3(e3) {
          var t = mv(e3) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e3.constructor.prototype, t), n = "" + e3[t];
          if (!e3.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
            var a = r.get, i = r.set;
            return Object.defineProperty(e3, t, { configurable: true, get: function() {
              return a.call(this);
            }, set: function(o) {
              n = "" + o, i.call(this, o);
            } }), Object.defineProperty(e3, t, { enumerable: r.enumerable }), { getValue: function() {
              return n;
            }, setValue: function(o) {
              n = "" + o;
            }, stopTracking: function() {
              e3._valueTracker = null, delete e3[t];
            } };
          }
        }
        function vs(e3) {
          e3._valueTracker || (e3._valueTracker = K3(e3));
        }
        function gv(e3) {
          if (!e3) return false;
          var t = e3._valueTracker;
          if (!t) return true;
          var r = t.getValue(), n = "";
          return e3 && (n = mv(e3) ? e3.checked ? "true" : "false" : e3.value), e3 = n, e3 !== r ? (t.setValue(e3), true) : false;
        }
        function Ws(e3) {
          if (e3 = e3 || (typeof document < "u" ? document : void 0), typeof e3 > "u") return null;
          try {
            return e3.activeElement || e3.body;
          } catch {
            return e3.body;
          }
        }
        function af(e3, t) {
          var r = t.checked;
          return Oe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e3._wrapperState.initialChecked });
        }
        function sg(e3, t) {
          var r = t.defaultValue == null ? "" : t.defaultValue, n = t.checked != null ? t.checked : t.defaultChecked;
          r = qn(t.value != null ? t.value : r), e3._wrapperState = { initialChecked: n, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
        }
        function vv(e3, t) {
          t = t.checked, t != null && Gf(e3, "checked", t, false);
        }
        function of(e3, t) {
          vv(e3, t);
          var r = qn(t.value), n = t.type;
          if (r != null) n === "number" ? (r === 0 && e3.value === "" || e3.value != r) && (e3.value = "" + r) : e3.value !== "" + r && (e3.value = "" + r);
          else if (n === "submit" || n === "reset") {
            e3.removeAttribute("value");
            return;
          }
          t.hasOwnProperty("value") ? lf(e3, t.type, r) : t.hasOwnProperty("defaultValue") && lf(e3, t.type, qn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e3.defaultChecked = !!t.defaultChecked);
        }
        function ug(e3, t, r) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var n = t.type;
            if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e3._wrapperState.initialValue, r || t === e3.value || (e3.value = t), e3.defaultValue = t;
          }
          r = e3.name, r !== "" && (e3.name = ""), e3.defaultChecked = !!e3._wrapperState.initialChecked, r !== "" && (e3.name = r);
        }
        function lf(e3, t, r) {
          (t !== "number" || Ws(e3.ownerDocument) !== e3) && (r == null ? e3.defaultValue = "" + e3._wrapperState.initialValue : e3.defaultValue !== "" + r && (e3.defaultValue = "" + r));
        }
        var Lo = Array.isArray;
        function xi(e3, t, r, n) {
          if (e3 = e3.options, t) {
            t = {};
            for (var a = 0; a < r.length; a++) t["$" + r[a]] = true;
            for (r = 0; r < e3.length; r++) a = t.hasOwnProperty("$" + e3[r].value), e3[r].selected !== a && (e3[r].selected = a), a && n && (e3[r].defaultSelected = true);
          } else {
            for (r = "" + qn(r), t = null, a = 0; a < e3.length; a++) {
              if (e3[a].value === r) {
                e3[a].selected = true, n && (e3[a].defaultSelected = true);
                return;
              }
              t !== null || e3[a].disabled || (t = e3[a]);
            }
            t !== null && (t.selected = true);
          }
        }
        function sf(e3, t) {
          if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
          return Oe({}, t, { value: void 0, defaultValue: void 0, children: "" + e3._wrapperState.initialValue });
        }
        function cg(e3, t) {
          var r = t.value;
          if (r == null) {
            if (r = t.children, t = t.defaultValue, r != null) {
              if (t != null) throw Error(z(92));
              if (Lo(r)) {
                if (1 < r.length) throw Error(z(93));
                r = r[0];
              }
              t = r;
            }
            t == null && (t = ""), r = t;
          }
          e3._wrapperState = { initialValue: qn(r) };
        }
        function yv(e3, t) {
          var r = qn(t.value), n = qn(t.defaultValue);
          r != null && (r = "" + r, r !== e3.value && (e3.value = r), t.defaultValue == null && e3.defaultValue !== r && (e3.defaultValue = r)), n != null && (e3.defaultValue = "" + n);
        }
        function dg(e3) {
          var t = e3.textContent;
          t === e3._wrapperState.initialValue && t !== "" && t !== null && (e3.value = t);
        }
        function wv(e3) {
          switch (e3) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function uf(e3, t) {
          return e3 == null || e3 === "http://www.w3.org/1999/xhtml" ? wv(t) : e3 === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e3;
        }
        var ys, xv = (function(e3) {
          return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, a) {
            MSApp.execUnsafeLocalFunction(function() {
              return e3(t, r, n, a);
            });
          } : e3;
        })(function(e3, t) {
          if (e3.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e3) e3.innerHTML = t;
          else {
            for (ys = ys || document.createElement("div"), ys.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ys.firstChild; e3.firstChild; ) e3.removeChild(e3.firstChild);
            for (; t.firstChild; ) e3.appendChild(t.firstChild);
          }
        });
        function Bo(e3, t) {
          if (t) {
            var r = e3.firstChild;
            if (r && r === e3.lastChild && r.nodeType === 3) {
              r.nodeValue = t;
              return;
            }
          }
          e3.textContent = t;
        }
        var To = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, X3 = ["Webkit", "ms", "Moz", "O"];
        Object.keys(To).forEach(function(e3) {
          X3.forEach(function(t) {
            t = t + e3.charAt(0).toUpperCase() + e3.substring(1), To[t] = To[e3];
          });
        });
        function bv(e3, t, r) {
          return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || To.hasOwnProperty(e3) && To[e3] ? ("" + t).trim() : t + "px";
        }
        function kv(e3, t) {
          e3 = e3.style;
          for (var r in t) if (t.hasOwnProperty(r)) {
            var n = r.indexOf("--") === 0, a = bv(r, t[r], n);
            r === "float" && (r = "cssFloat"), n ? e3.setProperty(r, a) : e3[r] = a;
          }
        }
        var Q3 = Oe({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
        function cf(e3, t) {
          if (t) {
            if (Q3[e3] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(z(137, e3));
            if (t.dangerouslySetInnerHTML != null) {
              if (t.children != null) throw Error(z(60));
              if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(z(61));
            }
            if (t.style != null && typeof t.style != "object") throw Error(z(62));
          }
        }
        function df(e3, t) {
          if (e3.indexOf("-") === -1) return typeof t.is == "string";
          switch (e3) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return false;
            default:
              return true;
          }
        }
        var ff = null;
        function Zf(e3) {
          return e3 = e3.target || e3.srcElement || window, e3.correspondingUseElement && (e3 = e3.correspondingUseElement), e3.nodeType === 3 ? e3.parentNode : e3;
        }
        var hf = null, bi = null, ki = null;
        function fg(e3) {
          if (e3 = ll(e3)) {
            if (typeof hf != "function") throw Error(z(280));
            var t = e3.stateNode;
            t && (t = wu(t), hf(e3.stateNode, e3.type, t));
          }
        }
        function Ev(e3) {
          bi ? ki ? ki.push(e3) : ki = [e3] : bi = e3;
        }
        function Rv() {
          if (bi) {
            var e3 = bi, t = ki;
            if (ki = bi = null, fg(e3), t) for (e3 = 0; e3 < t.length; e3++) fg(t[e3]);
          }
        }
        function Sv(e3, t) {
          return e3(t);
        }
        function Cv() {
        }
        var Ad = false;
        function Dv(e3, t, r) {
          if (Ad) return e3(t, r);
          Ad = true;
          try {
            return Sv(e3, t, r);
          } finally {
            Ad = false, (bi !== null || ki !== null) && (Cv(), Rv());
          }
        }
        function Vo(e3, t) {
          var r = e3.stateNode;
          if (r === null) return null;
          var n = wu(r);
          if (n === null) return null;
          r = n[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (n = !n.disabled) || (e3 = e3.type, n = !(e3 === "button" || e3 === "input" || e3 === "select" || e3 === "textarea")), e3 = !n;
              break e;
            default:
              e3 = false;
          }
          if (e3) return null;
          if (r && typeof r != "function") throw Error(z(231, t, typeof r));
          return r;
        }
        var pf = false;
        if (un) try {
          oi = {}, Object.defineProperty(oi, "passive", { get: function() {
            pf = true;
          } }), window.addEventListener("test", oi, oi), window.removeEventListener("test", oi, oi);
        } catch {
          pf = false;
        }
        var oi;
        function Z3(e3, t, r, n, a, i, o, l, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(r, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var Ao = false, Ys = null, qs = false, mf = null, J3 = { onError: function(e3) {
          Ao = true, Ys = e3;
        } };
        function e6(e3, t, r, n, a, i, o, l, s) {
          Ao = false, Ys = null, Z3.apply(J3, arguments);
        }
        function t6(e3, t, r, n, a, i, o, l, s) {
          if (e6.apply(this, arguments), Ao) {
            if (Ao) {
              var u = Ys;
              Ao = false, Ys = null;
            } else throw Error(z(198));
            qs || (qs = true, mf = u);
          }
        }
        function Aa(e3) {
          var t = e3, r = e3;
          if (e3.alternate) for (; t.return; ) t = t.return;
          else {
            e3 = t;
            do
              t = e3, (t.flags & 4098) !== 0 && (r = t.return), e3 = t.return;
            while (e3);
          }
          return t.tag === 3 ? r : null;
        }
        function Nv(e3) {
          if (e3.tag === 13) {
            var t = e3.memoizedState;
            if (t === null && (e3 = e3.alternate, e3 !== null && (t = e3.memoizedState)), t !== null) return t.dehydrated;
          }
          return null;
        }
        function hg(e3) {
          if (Aa(e3) !== e3) throw Error(z(188));
        }
        function r6(e3) {
          var t = e3.alternate;
          if (!t) {
            if (t = Aa(e3), t === null) throw Error(z(188));
            return t !== e3 ? null : e3;
          }
          for (var r = e3, n = t; ; ) {
            var a = r.return;
            if (a === null) break;
            var i = a.alternate;
            if (i === null) {
              if (n = a.return, n !== null) {
                r = n;
                continue;
              }
              break;
            }
            if (a.child === i.child) {
              for (i = a.child; i; ) {
                if (i === r) return hg(a), e3;
                if (i === n) return hg(a), t;
                i = i.sibling;
              }
              throw Error(z(188));
            }
            if (r.return !== n.return) r = a, n = i;
            else {
              for (var o = false, l = a.child; l; ) {
                if (l === r) {
                  o = true, r = a, n = i;
                  break;
                }
                if (l === n) {
                  o = true, n = a, r = i;
                  break;
                }
                l = l.sibling;
              }
              if (!o) {
                for (l = i.child; l; ) {
                  if (l === r) {
                    o = true, r = i, n = a;
                    break;
                  }
                  if (l === n) {
                    o = true, n = i, r = a;
                    break;
                  }
                  l = l.sibling;
                }
                if (!o) throw Error(z(189));
              }
            }
            if (r.alternate !== n) throw Error(z(190));
          }
          if (r.tag !== 3) throw Error(z(188));
          return r.stateNode.current === r ? e3 : t;
        }
        function Mv(e3) {
          return e3 = r6(e3), e3 !== null ? Lv(e3) : null;
        }
        function Lv(e3) {
          if (e3.tag === 5 || e3.tag === 6) return e3;
          for (e3 = e3.child; e3 !== null; ) {
            var t = Lv(e3);
            if (t !== null) return t;
            e3 = e3.sibling;
          }
          return null;
        }
        var Pv = Qt.unstable_scheduleCallback, pg = Qt.unstable_cancelCallback, n6 = Qt.unstable_shouldYield, a6 = Qt.unstable_requestPaint, We = Qt.unstable_now, i6 = Qt.unstable_getCurrentPriorityLevel, Jf = Qt.unstable_ImmediatePriority, _v = Qt.unstable_UserBlockingPriority, Gs = Qt.unstable_NormalPriority, o6 = Qt.unstable_LowPriority, Tv = Qt.unstable_IdlePriority, mu = null, jr = null;
        function l6(e3) {
          if (jr && typeof jr.onCommitFiberRoot == "function") try {
            jr.onCommitFiberRoot(mu, e3, void 0, (e3.current.flags & 128) === 128);
          } catch {
          }
        }
        var Sr = Math.clz32 ? Math.clz32 : c6, s6 = Math.log, u6 = Math.LN2;
        function c6(e3) {
          return e3 >>>= 0, e3 === 0 ? 32 : 31 - (s6(e3) / u6 | 0) | 0;
        }
        var ws = 64, xs = 4194304;
        function Po(e3) {
          switch (e3 & -e3) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return e3 & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return e3 & 130023424;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e3;
          }
        }
        function Ks(e3, t) {
          var r = e3.pendingLanes;
          if (r === 0) return 0;
          var n = 0, a = e3.suspendedLanes, i = e3.pingedLanes, o = r & 268435455;
          if (o !== 0) {
            var l = o & ~a;
            l !== 0 ? n = Po(l) : (i &= o, i !== 0 && (n = Po(i)));
          } else o = r & ~a, o !== 0 ? n = Po(o) : i !== 0 && (n = Po(i));
          if (n === 0) return 0;
          if (t !== 0 && t !== n && (t & a) === 0 && (a = n & -n, i = t & -t, a >= i || a === 16 && (i & 4194240) !== 0)) return t;
          if ((n & 4) !== 0 && (n |= r & 16), t = e3.entangledLanes, t !== 0) for (e3 = e3.entanglements, t &= n; 0 < t; ) r = 31 - Sr(t), a = 1 << r, n |= e3[r], t &= ~a;
          return n;
        }
        function d6(e3, t) {
          switch (e3) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
              return -1;
            default:
              return -1;
          }
        }
        function f6(e3, t) {
          for (var r = e3.suspendedLanes, n = e3.pingedLanes, a = e3.expirationTimes, i = e3.pendingLanes; 0 < i; ) {
            var o = 31 - Sr(i), l = 1 << o, s = a[o];
            s === -1 ? ((l & r) === 0 || (l & n) !== 0) && (a[o] = d6(l, t)) : s <= t && (e3.expiredLanes |= l), i &= ~l;
          }
        }
        function gf(e3) {
          return e3 = e3.pendingLanes & -1073741825, e3 !== 0 ? e3 : e3 & 1073741824 ? 1073741824 : 0;
        }
        function Av() {
          var e3 = ws;
          return ws <<= 1, (ws & 4194240) === 0 && (ws = 64), e3;
        }
        function Fd(e3) {
          for (var t = [], r = 0; 31 > r; r++) t.push(e3);
          return t;
        }
        function il(e3, t, r) {
          e3.pendingLanes |= t, t !== 536870912 && (e3.suspendedLanes = 0, e3.pingedLanes = 0), e3 = e3.eventTimes, t = 31 - Sr(t), e3[t] = r;
        }
        function h6(e3, t) {
          var r = e3.pendingLanes & ~t;
          e3.pendingLanes = t, e3.suspendedLanes = 0, e3.pingedLanes = 0, e3.expiredLanes &= t, e3.mutableReadLanes &= t, e3.entangledLanes &= t, t = e3.entanglements;
          var n = e3.eventTimes;
          for (e3 = e3.expirationTimes; 0 < r; ) {
            var a = 31 - Sr(r), i = 1 << a;
            t[a] = 0, n[a] = -1, e3[a] = -1, r &= ~i;
          }
        }
        function eh(e3, t) {
          var r = e3.entangledLanes |= t;
          for (e3 = e3.entanglements; r; ) {
            var n = 31 - Sr(r), a = 1 << n;
            a & t | e3[n] & t && (e3[n] |= t), r &= ~a;
          }
        }
        var ye = 0;
        function Fv(e3) {
          return e3 &= -e3, 1 < e3 ? 4 < e3 ? (e3 & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
        }
        var $v, th, zv, Ov, Iv, vf = false, bs = [], In = null, jn = null, Un = null, Wo = /* @__PURE__ */ new Map(), Yo = /* @__PURE__ */ new Map(), Fn = [], p6 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
        function mg(e3, t) {
          switch (e3) {
            case "focusin":
            case "focusout":
              In = null;
              break;
            case "dragenter":
            case "dragleave":
              jn = null;
              break;
            case "mouseover":
            case "mouseout":
              Un = null;
              break;
            case "pointerover":
            case "pointerout":
              Wo.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Yo.delete(t.pointerId);
          }
        }
        function ko(e3, t, r, n, a, i) {
          return e3 === null || e3.nativeEvent !== i ? (e3 = { blockedOn: t, domEventName: r, eventSystemFlags: n, nativeEvent: i, targetContainers: [a] }, t !== null && (t = ll(t), t !== null && th(t)), e3) : (e3.eventSystemFlags |= n, t = e3.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e3);
        }
        function m6(e3, t, r, n, a) {
          switch (t) {
            case "focusin":
              return In = ko(In, e3, t, r, n, a), true;
            case "dragenter":
              return jn = ko(jn, e3, t, r, n, a), true;
            case "mouseover":
              return Un = ko(Un, e3, t, r, n, a), true;
            case "pointerover":
              var i = a.pointerId;
              return Wo.set(i, ko(Wo.get(i) || null, e3, t, r, n, a)), true;
            case "gotpointercapture":
              return i = a.pointerId, Yo.set(i, ko(Yo.get(i) || null, e3, t, r, n, a)), true;
          }
          return false;
        }
        function jv(e3) {
          var t = Ea(e3.target);
          if (t !== null) {
            var r = Aa(t);
            if (r !== null) {
              if (t = r.tag, t === 13) {
                if (t = Nv(r), t !== null) {
                  e3.blockedOn = t, Iv(e3.priority, function() {
                    zv(r);
                  });
                  return;
                }
              } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
                e3.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
                return;
              }
            }
          }
          e3.blockedOn = null;
        }
        function Fs(e3) {
          if (e3.blockedOn !== null) return false;
          for (var t = e3.targetContainers; 0 < t.length; ) {
            var r = yf(e3.domEventName, e3.eventSystemFlags, t[0], e3.nativeEvent);
            if (r === null) {
              r = e3.nativeEvent;
              var n = new r.constructor(r.type, r);
              ff = n, r.target.dispatchEvent(n), ff = null;
            } else return t = ll(r), t !== null && th(t), e3.blockedOn = r, false;
            t.shift();
          }
          return true;
        }
        function gg(e3, t, r) {
          Fs(e3) && r.delete(t);
        }
        function g6() {
          vf = false, In !== null && Fs(In) && (In = null), jn !== null && Fs(jn) && (jn = null), Un !== null && Fs(Un) && (Un = null), Wo.forEach(gg), Yo.forEach(gg);
        }
        function Eo(e3, t) {
          e3.blockedOn === t && (e3.blockedOn = null, vf || (vf = true, Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority, g6)));
        }
        function qo(e3) {
          function t(a) {
            return Eo(a, e3);
          }
          if (0 < bs.length) {
            Eo(bs[0], e3);
            for (var r = 1; r < bs.length; r++) {
              var n = bs[r];
              n.blockedOn === e3 && (n.blockedOn = null);
            }
          }
          for (In !== null && Eo(In, e3), jn !== null && Eo(jn, e3), Un !== null && Eo(Un, e3), Wo.forEach(t), Yo.forEach(t), r = 0; r < Fn.length; r++) n = Fn[r], n.blockedOn === e3 && (n.blockedOn = null);
          for (; 0 < Fn.length && (r = Fn[0], r.blockedOn === null); ) jv(r), r.blockedOn === null && Fn.shift();
        }
        var Ei = hn.ReactCurrentBatchConfig, Xs = true;
        function v6(e3, t, r, n) {
          var a = ye, i = Ei.transition;
          Ei.transition = null;
          try {
            ye = 1, rh(e3, t, r, n);
          } finally {
            ye = a, Ei.transition = i;
          }
        }
        function y6(e3, t, r, n) {
          var a = ye, i = Ei.transition;
          Ei.transition = null;
          try {
            ye = 4, rh(e3, t, r, n);
          } finally {
            ye = a, Ei.transition = i;
          }
        }
        function rh(e3, t, r, n) {
          if (Xs) {
            var a = yf(e3, t, r, n);
            if (a === null) Hd(e3, t, n, Qs, r), mg(e3, n);
            else if (m6(a, e3, t, r, n)) n.stopPropagation();
            else if (mg(e3, n), t & 4 && -1 < p6.indexOf(e3)) {
              for (; a !== null; ) {
                var i = ll(a);
                if (i !== null && $v(i), i = yf(e3, t, r, n), i === null && Hd(e3, t, n, Qs, r), i === a) break;
                a = i;
              }
              a !== null && n.stopPropagation();
            } else Hd(e3, t, n, null, r);
          }
        }
        var Qs = null;
        function yf(e3, t, r, n) {
          if (Qs = null, e3 = Zf(n), e3 = Ea(e3), e3 !== null) if (t = Aa(e3), t === null) e3 = null;
          else if (r = t.tag, r === 13) {
            if (e3 = Nv(t), e3 !== null) return e3;
            e3 = null;
          } else if (r === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e3 = null;
          } else t !== e3 && (e3 = null);
          return Qs = e3, null;
        }
        function Uv(e3) {
          switch (e3) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (i6()) {
                case Jf:
                  return 1;
                case _v:
                  return 4;
                case Gs:
                case o6:
                  return 16;
                case Tv:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var zn = null, nh = null, $s = null;
        function Hv() {
          if ($s) return $s;
          var e3, t = nh, r = t.length, n, a = "value" in zn ? zn.value : zn.textContent, i = a.length;
          for (e3 = 0; e3 < r && t[e3] === a[e3]; e3++) ;
          var o = r - e3;
          for (n = 1; n <= o && t[r - n] === a[i - n]; n++) ;
          return $s = a.slice(e3, 1 < n ? 1 - n : void 0);
        }
        function zs(e3) {
          var t = e3.keyCode;
          return "charCode" in e3 ? (e3 = e3.charCode, e3 === 0 && t === 13 && (e3 = 13)) : e3 = t, e3 === 10 && (e3 = 13), 32 <= e3 || e3 === 13 ? e3 : 0;
        }
        function ks() {
          return true;
        }
        function vg() {
          return false;
        }
        function Zt(e3) {
          function t(r, n, a, i, o) {
            this._reactName = r, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = o, this.currentTarget = null;
            for (var l in e3) e3.hasOwnProperty(l) && (r = e3[l], this[l] = r ? r(i) : i[l]);
            return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === false) ? ks : vg, this.isPropagationStopped = vg, this;
          }
          return Oe(t.prototype, { preventDefault: function() {
            this.defaultPrevented = true;
            var r = this.nativeEvent;
            r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = false), this.isDefaultPrevented = ks);
          }, stopPropagation: function() {
            var r = this.nativeEvent;
            r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = true), this.isPropagationStopped = ks);
          }, persist: function() {
          }, isPersistent: ks }), t;
        }
        var Ti = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e3) {
          return e3.timeStamp || Date.now();
        }, defaultPrevented: 0, isTrusted: 0 }, ah = Zt(Ti), ol = Oe({}, Ti, { view: 0, detail: 0 }), w6 = Zt(ol), $d, zd, Ro, gu = Oe({}, ol, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ih, button: 0, buttons: 0, relatedTarget: function(e3) {
          return e3.relatedTarget === void 0 ? e3.fromElement === e3.srcElement ? e3.toElement : e3.fromElement : e3.relatedTarget;
        }, movementX: function(e3) {
          return "movementX" in e3 ? e3.movementX : (e3 !== Ro && (Ro && e3.type === "mousemove" ? ($d = e3.screenX - Ro.screenX, zd = e3.screenY - Ro.screenY) : zd = $d = 0, Ro = e3), $d);
        }, movementY: function(e3) {
          return "movementY" in e3 ? e3.movementY : zd;
        } }), yg = Zt(gu), x6 = Oe({}, gu, { dataTransfer: 0 }), b6 = Zt(x6), k6 = Oe({}, ol, { relatedTarget: 0 }), Od = Zt(k6), E6 = Oe({}, Ti, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), R6 = Zt(E6), S6 = Oe({}, Ti, { clipboardData: function(e3) {
          return "clipboardData" in e3 ? e3.clipboardData : window.clipboardData;
        } }), C6 = Zt(S6), D6 = Oe({}, Ti, { data: 0 }), wg = Zt(D6), N6 = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, M6 = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, L6 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
        function P6(e3) {
          var t = this.nativeEvent;
          return t.getModifierState ? t.getModifierState(e3) : (e3 = L6[e3]) ? !!t[e3] : false;
        }
        function ih() {
          return P6;
        }
        var _6 = Oe({}, ol, { key: function(e3) {
          if (e3.key) {
            var t = N6[e3.key] || e3.key;
            if (t !== "Unidentified") return t;
          }
          return e3.type === "keypress" ? (e3 = zs(e3), e3 === 13 ? "Enter" : String.fromCharCode(e3)) : e3.type === "keydown" || e3.type === "keyup" ? M6[e3.keyCode] || "Unidentified" : "";
        }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ih, charCode: function(e3) {
          return e3.type === "keypress" ? zs(e3) : 0;
        }, keyCode: function(e3) {
          return e3.type === "keydown" || e3.type === "keyup" ? e3.keyCode : 0;
        }, which: function(e3) {
          return e3.type === "keypress" ? zs(e3) : e3.type === "keydown" || e3.type === "keyup" ? e3.keyCode : 0;
        } }), T6 = Zt(_6), A6 = Oe({}, gu, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), xg = Zt(A6), F6 = Oe({}, ol, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ih }), $6 = Zt(F6), z6 = Oe({}, Ti, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), O6 = Zt(z6), I6 = Oe({}, gu, { deltaX: function(e3) {
          return "deltaX" in e3 ? e3.deltaX : "wheelDeltaX" in e3 ? -e3.wheelDeltaX : 0;
        }, deltaY: function(e3) {
          return "deltaY" in e3 ? e3.deltaY : "wheelDeltaY" in e3 ? -e3.wheelDeltaY : "wheelDelta" in e3 ? -e3.wheelDelta : 0;
        }, deltaZ: 0, deltaMode: 0 }), j6 = Zt(I6), U6 = [9, 13, 27, 32], oh = un && "CompositionEvent" in window, Fo = null;
        un && "documentMode" in document && (Fo = document.documentMode);
        var H6 = un && "TextEvent" in window && !Fo, Bv = un && (!oh || Fo && 8 < Fo && 11 >= Fo), bg = " ", kg = false;
        function Vv(e3, t) {
          switch (e3) {
            case "keyup":
              return U6.indexOf(t.keyCode) !== -1;
            case "keydown":
              return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
              return true;
            default:
              return false;
          }
        }
        function Wv(e3) {
          return e3 = e3.detail, typeof e3 == "object" && "data" in e3 ? e3.data : null;
        }
        var ci = false;
        function B6(e3, t) {
          switch (e3) {
            case "compositionend":
              return Wv(t);
            case "keypress":
              return t.which !== 32 ? null : (kg = true, bg);
            case "textInput":
              return e3 = t.data, e3 === bg && kg ? null : e3;
            default:
              return null;
          }
        }
        function V6(e3, t) {
          if (ci) return e3 === "compositionend" || !oh && Vv(e3, t) ? (e3 = Hv(), $s = nh = zn = null, ci = false, e3) : null;
          switch (e3) {
            case "paste":
              return null;
            case "keypress":
              if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
              }
              return null;
            case "compositionend":
              return Bv && t.locale !== "ko" ? null : t.data;
            default:
              return null;
          }
        }
        var W6 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
        function Eg(e3) {
          var t = e3 && e3.nodeName && e3.nodeName.toLowerCase();
          return t === "input" ? !!W6[e3.type] : t === "textarea";
        }
        function Yv(e3, t, r, n) {
          Ev(n), t = Zs(t, "onChange"), 0 < t.length && (r = new ah("onChange", "change", null, r, n), e3.push({ event: r, listeners: t }));
        }
        var $o = null, Go = null;
        function Y6(e3) {
          n1(e3, 0);
        }
        function vu(e3) {
          var t = hi(e3);
          if (gv(t)) return e3;
        }
        function q6(e3, t) {
          if (e3 === "change") return t;
        }
        var qv = false;
        un && (un ? (Rs = "oninput" in document, Rs || (Id = document.createElement("div"), Id.setAttribute("oninput", "return;"), Rs = typeof Id.oninput == "function"), Es = Rs) : Es = false, qv = Es && (!document.documentMode || 9 < document.documentMode));
        var Es, Rs, Id;
        function Rg() {
          $o && ($o.detachEvent("onpropertychange", Gv), Go = $o = null);
        }
        function Gv(e3) {
          if (e3.propertyName === "value" && vu(Go)) {
            var t = [];
            Yv(t, Go, e3, Zf(e3)), Dv(Y6, t);
          }
        }
        function G6(e3, t, r) {
          e3 === "focusin" ? (Rg(), $o = t, Go = r, $o.attachEvent("onpropertychange", Gv)) : e3 === "focusout" && Rg();
        }
        function K6(e3) {
          if (e3 === "selectionchange" || e3 === "keyup" || e3 === "keydown") return vu(Go);
        }
        function X6(e3, t) {
          if (e3 === "click") return vu(t);
        }
        function Q6(e3, t) {
          if (e3 === "input" || e3 === "change") return vu(t);
        }
        function Z6(e3, t) {
          return e3 === t && (e3 !== 0 || 1 / e3 === 1 / t) || e3 !== e3 && t !== t;
        }
        var Dr = typeof Object.is == "function" ? Object.is : Z6;
        function Ko(e3, t) {
          if (Dr(e3, t)) return true;
          if (typeof e3 != "object" || e3 === null || typeof t != "object" || t === null) return false;
          var r = Object.keys(e3), n = Object.keys(t);
          if (r.length !== n.length) return false;
          for (n = 0; n < r.length; n++) {
            var a = r[n];
            if (!Jd.call(t, a) || !Dr(e3[a], t[a])) return false;
          }
          return true;
        }
        function Sg(e3) {
          for (; e3 && e3.firstChild; ) e3 = e3.firstChild;
          return e3;
        }
        function Cg(e3, t) {
          var r = Sg(e3);
          e3 = 0;
          for (var n; r; ) {
            if (r.nodeType === 3) {
              if (n = e3 + r.textContent.length, e3 <= t && n >= t) return { node: r, offset: t - e3 };
              e3 = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = Sg(r);
          }
        }
        function Kv(e3, t) {
          return e3 && t ? e3 === t ? true : e3 && e3.nodeType === 3 ? false : t && t.nodeType === 3 ? Kv(e3, t.parentNode) : "contains" in e3 ? e3.contains(t) : e3.compareDocumentPosition ? !!(e3.compareDocumentPosition(t) & 16) : false : false;
        }
        function Xv() {
          for (var e3 = window, t = Ws(); t instanceof e3.HTMLIFrameElement; ) {
            try {
              var r = typeof t.contentWindow.location.href == "string";
            } catch {
              r = false;
            }
            if (r) e3 = t.contentWindow;
            else break;
            t = Ws(e3.document);
          }
          return t;
        }
        function lh(e3) {
          var t = e3 && e3.nodeName && e3.nodeName.toLowerCase();
          return t && (t === "input" && (e3.type === "text" || e3.type === "search" || e3.type === "tel" || e3.type === "url" || e3.type === "password") || t === "textarea" || e3.contentEditable === "true");
        }
        function J6(e3) {
          var t = Xv(), r = e3.focusedElem, n = e3.selectionRange;
          if (t !== r && r && r.ownerDocument && Kv(r.ownerDocument.documentElement, r)) {
            if (n !== null && lh(r)) {
              if (t = n.start, e3 = n.end, e3 === void 0 && (e3 = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e3, r.value.length);
              else if (e3 = (t = r.ownerDocument || document) && t.defaultView || window, e3.getSelection) {
                e3 = e3.getSelection();
                var a = r.textContent.length, i = Math.min(n.start, a);
                n = n.end === void 0 ? i : Math.min(n.end, a), !e3.extend && i > n && (a = n, n = i, i = a), a = Cg(r, i);
                var o = Cg(r, n);
                a && o && (e3.rangeCount !== 1 || e3.anchorNode !== a.node || e3.anchorOffset !== a.offset || e3.focusNode !== o.node || e3.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e3.removeAllRanges(), i > n ? (e3.addRange(t), e3.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e3.addRange(t)));
              }
            }
            for (t = [], e3 = r; e3 = e3.parentNode; ) e3.nodeType === 1 && t.push({ element: e3, left: e3.scrollLeft, top: e3.scrollTop });
            for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++) e3 = t[r], e3.element.scrollLeft = e3.left, e3.element.scrollTop = e3.top;
          }
        }
        var ek = un && "documentMode" in document && 11 >= document.documentMode, di = null, wf = null, zo = null, xf = false;
        function Dg(e3, t, r) {
          var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
          xf || di == null || di !== Ws(n) || (n = di, "selectionStart" in n && lh(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), zo && Ko(zo, n) || (zo = n, n = Zs(wf, "onSelect"), 0 < n.length && (t = new ah("onSelect", "select", null, t, r), e3.push({ event: t, listeners: n }), t.target = di)));
        }
        function Ss(e3, t) {
          var r = {};
          return r[e3.toLowerCase()] = t.toLowerCase(), r["Webkit" + e3] = "webkit" + t, r["Moz" + e3] = "moz" + t, r;
        }
        var fi = { animationend: Ss("Animation", "AnimationEnd"), animationiteration: Ss("Animation", "AnimationIteration"), animationstart: Ss("Animation", "AnimationStart"), transitionend: Ss("Transition", "TransitionEnd") }, jd = {}, Qv = {};
        un && (Qv = document.createElement("div").style, "AnimationEvent" in window || (delete fi.animationend.animation, delete fi.animationiteration.animation, delete fi.animationstart.animation), "TransitionEvent" in window || delete fi.transitionend.transition);
        function yu(e3) {
          if (jd[e3]) return jd[e3];
          if (!fi[e3]) return e3;
          var t = fi[e3], r;
          for (r in t) if (t.hasOwnProperty(r) && r in Qv) return jd[e3] = t[r];
          return e3;
        }
        var Zv = yu("animationend"), Jv = yu("animationiteration"), e1 = yu("animationstart"), t1 = yu("transitionend"), r1 = /* @__PURE__ */ new Map(), Ng = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        function Kn(e3, t) {
          r1.set(e3, t), Ta(t, [e3]);
        }
        for (Cs = 0; Cs < Ng.length; Cs++) Ds = Ng[Cs], Mg = Ds.toLowerCase(), Lg = Ds[0].toUpperCase() + Ds.slice(1), Kn(Mg, "on" + Lg);
        var Ds, Mg, Lg, Cs;
        Kn(Zv, "onAnimationEnd");
        Kn(Jv, "onAnimationIteration");
        Kn(e1, "onAnimationStart");
        Kn("dblclick", "onDoubleClick");
        Kn("focusin", "onFocus");
        Kn("focusout", "onBlur");
        Kn(t1, "onTransitionEnd");
        Ci("onMouseEnter", ["mouseout", "mouseover"]);
        Ci("onMouseLeave", ["mouseout", "mouseover"]);
        Ci("onPointerEnter", ["pointerout", "pointerover"]);
        Ci("onPointerLeave", ["pointerout", "pointerover"]);
        Ta("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
        Ta("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
        Ta("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
        Ta("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
        Ta("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
        Ta("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var _o = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), tk = new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));
        function Pg(e3, t, r) {
          var n = e3.type || "unknown-event";
          e3.currentTarget = r, t6(n, t, void 0, e3), e3.currentTarget = null;
        }
        function n1(e3, t) {
          t = (t & 4) !== 0;
          for (var r = 0; r < e3.length; r++) {
            var n = e3[r], a = n.event;
            n = n.listeners;
            e: {
              var i = void 0;
              if (t) for (var o = n.length - 1; 0 <= o; o--) {
                var l = n[o], s = l.instance, u = l.currentTarget;
                if (l = l.listener, s !== i && a.isPropagationStopped()) break e;
                Pg(a, l, u), i = s;
              }
              else for (o = 0; o < n.length; o++) {
                if (l = n[o], s = l.instance, u = l.currentTarget, l = l.listener, s !== i && a.isPropagationStopped()) break e;
                Pg(a, l, u), i = s;
              }
            }
          }
          if (qs) throw e3 = mf, qs = false, mf = null, e3;
        }
        function De(e3, t) {
          var r = t[Sf];
          r === void 0 && (r = t[Sf] = /* @__PURE__ */ new Set());
          var n = e3 + "__bubble";
          r.has(n) || (a1(t, e3, 2, false), r.add(n));
        }
        function Ud(e3, t, r) {
          var n = 0;
          t && (n |= 4), a1(r, e3, n, t);
        }
        var Ns = "_reactListening" + Math.random().toString(36).slice(2);
        function Xo(e3) {
          if (!e3[Ns]) {
            e3[Ns] = true, dv.forEach(function(r) {
              r !== "selectionchange" && (tk.has(r) || Ud(r, false, e3), Ud(r, true, e3));
            });
            var t = e3.nodeType === 9 ? e3 : e3.ownerDocument;
            t === null || t[Ns] || (t[Ns] = true, Ud("selectionchange", false, t));
          }
        }
        function a1(e3, t, r, n) {
          switch (Uv(t)) {
            case 1:
              var a = v6;
              break;
            case 4:
              a = y6;
              break;
            default:
              a = rh;
          }
          r = a.bind(null, t, r, e3), a = void 0, !pf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = true), n ? a !== void 0 ? e3.addEventListener(t, r, { capture: true, passive: a }) : e3.addEventListener(t, r, true) : a !== void 0 ? e3.addEventListener(t, r, { passive: a }) : e3.addEventListener(t, r, false);
        }
        function Hd(e3, t, r, n, a) {
          var i = n;
          if ((t & 1) === 0 && (t & 2) === 0 && n !== null) e: for (; ; ) {
            if (n === null) return;
            var o = n.tag;
            if (o === 3 || o === 4) {
              var l = n.stateNode.containerInfo;
              if (l === a || l.nodeType === 8 && l.parentNode === a) break;
              if (o === 4) for (o = n.return; o !== null; ) {
                var s = o.tag;
                if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === a || s.nodeType === 8 && s.parentNode === a)) return;
                o = o.return;
              }
              for (; l !== null; ) {
                if (o = Ea(l), o === null) return;
                if (s = o.tag, s === 5 || s === 6) {
                  n = i = o;
                  continue e;
                }
                l = l.parentNode;
              }
            }
            n = n.return;
          }
          Dv(function() {
            var u = i, c = Zf(r), d = [];
            e: {
              var f = r1.get(e3);
              if (f !== void 0) {
                var p = ah, v = e3;
                switch (e3) {
                  case "keypress":
                    if (zs(r) === 0) break e;
                  case "keydown":
                  case "keyup":
                    p = T6;
                    break;
                  case "focusin":
                    v = "focus", p = Od;
                    break;
                  case "focusout":
                    v = "blur", p = Od;
                    break;
                  case "beforeblur":
                  case "afterblur":
                    p = Od;
                    break;
                  case "click":
                    if (r.button === 2) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    p = yg;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    p = b6;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    p = $6;
                    break;
                  case Zv:
                  case Jv:
                  case e1:
                    p = R6;
                    break;
                  case t1:
                    p = O6;
                    break;
                  case "scroll":
                    p = w6;
                    break;
                  case "wheel":
                    p = j6;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    p = C6;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    p = xg;
                }
                var y = (t & 4) !== 0, g = !y && e3 === "scroll", m = y ? f !== null ? f + "Capture" : null : f;
                y = [];
                for (var h = u, w; h !== null; ) {
                  w = h;
                  var b = w.stateNode;
                  if (w.tag === 5 && b !== null && (w = b, m !== null && (b = Vo(h, m), b != null && y.push(Qo(h, b, w)))), g) break;
                  h = h.return;
                }
                0 < y.length && (f = new p(f, v, null, r, c), d.push({ event: f, listeners: y }));
              }
            }
            if ((t & 7) === 0) {
              e: {
                if (f = e3 === "mouseover" || e3 === "pointerover", p = e3 === "mouseout" || e3 === "pointerout", f && r !== ff && (v = r.relatedTarget || r.fromElement) && (Ea(v) || v[cn])) break e;
                if ((p || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, p ? (v = r.relatedTarget || r.toElement, p = u, v = v ? Ea(v) : null, v !== null && (g = Aa(v), v !== g || v.tag !== 5 && v.tag !== 6) && (v = null)) : (p = null, v = u), p !== v)) {
                  if (y = yg, b = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e3 === "pointerout" || e3 === "pointerover") && (y = xg, b = "onPointerLeave", m = "onPointerEnter", h = "pointer"), g = p == null ? f : hi(p), w = v == null ? f : hi(v), f = new y(b, h + "leave", p, r, c), f.target = g, f.relatedTarget = w, b = null, Ea(c) === u && (y = new y(m, h + "enter", v, r, c), y.target = w, y.relatedTarget = g, b = y), g = b, p && v) t: {
                    for (y = p, m = v, h = 0, w = y; w; w = li(w)) h++;
                    for (w = 0, b = m; b; b = li(b)) w++;
                    for (; 0 < h - w; ) y = li(y), h--;
                    for (; 0 < w - h; ) m = li(m), w--;
                    for (; h--; ) {
                      if (y === m || m !== null && y === m.alternate) break t;
                      y = li(y), m = li(m);
                    }
                    y = null;
                  }
                  else y = null;
                  p !== null && _g(d, f, p, y, false), v !== null && g !== null && _g(d, g, v, y, true);
                }
              }
              e: {
                if (f = u ? hi(u) : window, p = f.nodeName && f.nodeName.toLowerCase(), p === "select" || p === "input" && f.type === "file") var E = q6;
                else if (Eg(f)) if (qv) E = Q6;
                else {
                  E = K6;
                  var N = G6;
                }
                else (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (E = X6);
                if (E && (E = E(e3, u))) {
                  Yv(d, E, r, c);
                  break e;
                }
                N && N(e3, f, u), e3 === "focusout" && (N = f._wrapperState) && N.controlled && f.type === "number" && lf(f, "number", f.value);
              }
              switch (N = u ? hi(u) : window, e3) {
                case "focusin":
                  (Eg(N) || N.contentEditable === "true") && (di = N, wf = u, zo = null);
                  break;
                case "focusout":
                  zo = wf = di = null;
                  break;
                case "mousedown":
                  xf = true;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  xf = false, Dg(d, r, c);
                  break;
                case "selectionchange":
                  if (ek) break;
                case "keydown":
                case "keyup":
                  Dg(d, r, c);
              }
              var M;
              if (oh) e: {
                switch (e3) {
                  case "compositionstart":
                    var x = "onCompositionStart";
                    break e;
                  case "compositionend":
                    x = "onCompositionEnd";
                    break e;
                  case "compositionupdate":
                    x = "onCompositionUpdate";
                    break e;
                }
                x = void 0;
              }
              else ci ? Vv(e3, r) && (x = "onCompositionEnd") : e3 === "keydown" && r.keyCode === 229 && (x = "onCompositionStart");
              x && (Bv && r.locale !== "ko" && (ci || x !== "onCompositionStart" ? x === "onCompositionEnd" && ci && (M = Hv()) : (zn = c, nh = "value" in zn ? zn.value : zn.textContent, ci = true)), N = Zs(u, x), 0 < N.length && (x = new wg(x, e3, null, r, c), d.push({ event: x, listeners: N }), M ? x.data = M : (M = Wv(r), M !== null && (x.data = M)))), (M = H6 ? B6(e3, r) : V6(e3, r)) && (u = Zs(u, "onBeforeInput"), 0 < u.length && (c = new wg("onBeforeInput", "beforeinput", null, r, c), d.push({ event: c, listeners: u }), c.data = M));
            }
            n1(d, t);
          });
        }
        function Qo(e3, t, r) {
          return { instance: e3, listener: t, currentTarget: r };
        }
        function Zs(e3, t) {
          for (var r = t + "Capture", n = []; e3 !== null; ) {
            var a = e3, i = a.stateNode;
            a.tag === 5 && i !== null && (a = i, i = Vo(e3, r), i != null && n.unshift(Qo(e3, i, a)), i = Vo(e3, t), i != null && n.push(Qo(e3, i, a))), e3 = e3.return;
          }
          return n;
        }
        function li(e3) {
          if (e3 === null) return null;
          do
            e3 = e3.return;
          while (e3 && e3.tag !== 5);
          return e3 || null;
        }
        function _g(e3, t, r, n, a) {
          for (var i = t._reactName, o = []; r !== null && r !== n; ) {
            var l = r, s = l.alternate, u = l.stateNode;
            if (s !== null && s === n) break;
            l.tag === 5 && u !== null && (l = u, a ? (s = Vo(r, i), s != null && o.unshift(Qo(r, s, l))) : a || (s = Vo(r, i), s != null && o.push(Qo(r, s, l)))), r = r.return;
          }
          o.length !== 0 && e3.push({ event: t, listeners: o });
        }
        var rk = /\r\n?/g, nk = /\u0000|\uFFFD/g;
        function Tg(e3) {
          return (typeof e3 == "string" ? e3 : "" + e3).replace(rk, `
`).replace(nk, "");
        }
        function Ms(e3, t, r) {
          if (t = Tg(t), Tg(e3) !== t && r) throw Error(z(425));
        }
        function Js() {
        }
        var bf = null, kf = null;
        function Ef(e3, t) {
          return e3 === "textarea" || e3 === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
        }
        var Rf = typeof setTimeout == "function" ? setTimeout : void 0, ak = typeof clearTimeout == "function" ? clearTimeout : void 0, Ag = typeof Promise == "function" ? Promise : void 0, ik = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ag < "u" ? function(e3) {
          return Ag.resolve(null).then(e3).catch(ok);
        } : Rf;
        function ok(e3) {
          setTimeout(function() {
            throw e3;
          });
        }
        function Bd(e3, t) {
          var r = t, n = 0;
          do {
            var a = r.nextSibling;
            if (e3.removeChild(r), a && a.nodeType === 8) if (r = a.data, r === "/$") {
              if (n === 0) {
                e3.removeChild(a), qo(t);
                return;
              }
              n--;
            } else r !== "$" && r !== "$?" && r !== "$!" || n++;
            r = a;
          } while (r);
          qo(t);
        }
        function Hn(e3) {
          for (; e3 != null; e3 = e3.nextSibling) {
            var t = e3.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
              if (t = e3.data, t === "$" || t === "$!" || t === "$?") break;
              if (t === "/$") return null;
            }
          }
          return e3;
        }
        function Fg(e3) {
          e3 = e3.previousSibling;
          for (var t = 0; e3; ) {
            if (e3.nodeType === 8) {
              var r = e3.data;
              if (r === "$" || r === "$!" || r === "$?") {
                if (t === 0) return e3;
                t--;
              } else r === "/$" && t++;
            }
            e3 = e3.previousSibling;
          }
          return null;
        }
        var Ai = Math.random().toString(36).slice(2), Ir = "__reactFiber$" + Ai, Zo = "__reactProps$" + Ai, cn = "__reactContainer$" + Ai, Sf = "__reactEvents$" + Ai, lk = "__reactListeners$" + Ai, sk = "__reactHandles$" + Ai;
        function Ea(e3) {
          var t = e3[Ir];
          if (t) return t;
          for (var r = e3.parentNode; r; ) {
            if (t = r[cn] || r[Ir]) {
              if (r = t.alternate, t.child !== null || r !== null && r.child !== null) for (e3 = Fg(e3); e3 !== null; ) {
                if (r = e3[Ir]) return r;
                e3 = Fg(e3);
              }
              return t;
            }
            e3 = r, r = e3.parentNode;
          }
          return null;
        }
        function ll(e3) {
          return e3 = e3[Ir] || e3[cn], !e3 || e3.tag !== 5 && e3.tag !== 6 && e3.tag !== 13 && e3.tag !== 3 ? null : e3;
        }
        function hi(e3) {
          if (e3.tag === 5 || e3.tag === 6) return e3.stateNode;
          throw Error(z(33));
        }
        function wu(e3) {
          return e3[Zo] || null;
        }
        var Cf = [], pi = -1;
        function Xn(e3) {
          return { current: e3 };
        }
        function Ne(e3) {
          0 > pi || (e3.current = Cf[pi], Cf[pi] = null, pi--);
        }
        function Ce(e3, t) {
          pi++, Cf[pi] = e3.current, e3.current = t;
        }
        var Gn = {}, kt = Xn(Gn), Bt = Xn(false), Na = Gn;
        function Di(e3, t) {
          var r = e3.type.contextTypes;
          if (!r) return Gn;
          var n = e3.stateNode;
          if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
          var a = {}, i;
          for (i in r) a[i] = t[i];
          return n && (e3 = e3.stateNode, e3.__reactInternalMemoizedUnmaskedChildContext = t, e3.__reactInternalMemoizedMaskedChildContext = a), a;
        }
        function Vt(e3) {
          return e3 = e3.childContextTypes, e3 != null;
        }
        function eu() {
          Ne(Bt), Ne(kt);
        }
        function $g(e3, t, r) {
          if (kt.current !== Gn) throw Error(z(168));
          Ce(kt, t), Ce(Bt, r);
        }
        function i1(e3, t, r) {
          var n = e3.stateNode;
          if (t = t.childContextTypes, typeof n.getChildContext != "function") return r;
          n = n.getChildContext();
          for (var a in n) if (!(a in t)) throw Error(z(108, G3(e3) || "Unknown", a));
          return Oe({}, r, n);
        }
        function tu(e3) {
          return e3 = (e3 = e3.stateNode) && e3.__reactInternalMemoizedMergedChildContext || Gn, Na = kt.current, Ce(kt, e3), Ce(Bt, Bt.current), true;
        }
        function zg(e3, t, r) {
          var n = e3.stateNode;
          if (!n) throw Error(z(169));
          r ? (e3 = i1(e3, t, Na), n.__reactInternalMemoizedMergedChildContext = e3, Ne(Bt), Ne(kt), Ce(kt, e3)) : Ne(Bt), Ce(Bt, r);
        }
        var an = null, xu = false, Vd = false;
        function o1(e3) {
          an === null ? an = [e3] : an.push(e3);
        }
        function uk(e3) {
          xu = true, o1(e3);
        }
        function Qn() {
          if (!Vd && an !== null) {
            Vd = true;
            var e3 = 0, t = ye;
            try {
              var r = an;
              for (ye = 1; e3 < r.length; e3++) {
                var n = r[e3];
                do
                  n = n(true);
                while (n !== null);
              }
              an = null, xu = false;
            } catch (a) {
              throw an !== null && (an = an.slice(e3 + 1)), Pv(Jf, Qn), a;
            } finally {
              ye = t, Vd = false;
            }
          }
          return null;
        }
        var mi = [], gi = 0, ru = null, nu = 0, ir = [], or = 0, Ma = null, on = 1, ln = "";
        function ba(e3, t) {
          mi[gi++] = nu, mi[gi++] = ru, ru = e3, nu = t;
        }
        function l1(e3, t, r) {
          ir[or++] = on, ir[or++] = ln, ir[or++] = Ma, Ma = e3;
          var n = on;
          e3 = ln;
          var a = 32 - Sr(n) - 1;
          n &= ~(1 << a), r += 1;
          var i = 32 - Sr(t) + a;
          if (30 < i) {
            var o = a - a % 5;
            i = (n & (1 << o) - 1).toString(32), n >>= o, a -= o, on = 1 << 32 - Sr(t) + a | r << a | n, ln = i + e3;
          } else on = 1 << i | r << a | n, ln = e3;
        }
        function sh(e3) {
          e3.return !== null && (ba(e3, 1), l1(e3, 1, 0));
        }
        function uh(e3) {
          for (; e3 === ru; ) ru = mi[--gi], mi[gi] = null, nu = mi[--gi], mi[gi] = null;
          for (; e3 === Ma; ) Ma = ir[--or], ir[or] = null, ln = ir[--or], ir[or] = null, on = ir[--or], ir[or] = null;
        }
        var Xt = null, Kt = null, Te = false, Rr = null;
        function s1(e3, t) {
          var r = lr(5, null, null, 0);
          r.elementType = "DELETED", r.stateNode = t, r.return = e3, t = e3.deletions, t === null ? (e3.deletions = [r], e3.flags |= 16) : t.push(r);
        }
        function Og(e3, t) {
          switch (e3.tag) {
            case 5:
              var r = e3.type;
              return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e3.stateNode = t, Xt = e3, Kt = Hn(t.firstChild), true) : false;
            case 6:
              return t = e3.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e3.stateNode = t, Xt = e3, Kt = null, true) : false;
            case 13:
              return t = t.nodeType !== 8 ? null : t, t !== null ? (r = Ma !== null ? { id: on, overflow: ln } : null, e3.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = lr(18, null, null, 0), r.stateNode = t, r.return = e3, e3.child = r, Xt = e3, Kt = null, true) : false;
            default:
              return false;
          }
        }
        function Df(e3) {
          return (e3.mode & 1) !== 0 && (e3.flags & 128) === 0;
        }
        function Nf(e3) {
          if (Te) {
            var t = Kt;
            if (t) {
              var r = t;
              if (!Og(e3, t)) {
                if (Df(e3)) throw Error(z(418));
                t = Hn(r.nextSibling);
                var n = Xt;
                t && Og(e3, t) ? s1(n, r) : (e3.flags = e3.flags & -4097 | 2, Te = false, Xt = e3);
              }
            } else {
              if (Df(e3)) throw Error(z(418));
              e3.flags = e3.flags & -4097 | 2, Te = false, Xt = e3;
            }
          }
        }
        function Ig(e3) {
          for (e3 = e3.return; e3 !== null && e3.tag !== 5 && e3.tag !== 3 && e3.tag !== 13; ) e3 = e3.return;
          Xt = e3;
        }
        function Ls(e3) {
          if (e3 !== Xt) return false;
          if (!Te) return Ig(e3), Te = true, false;
          var t;
          if ((t = e3.tag !== 3) && !(t = e3.tag !== 5) && (t = e3.type, t = t !== "head" && t !== "body" && !Ef(e3.type, e3.memoizedProps)), t && (t = Kt)) {
            if (Df(e3)) throw u1(), Error(z(418));
            for (; t; ) s1(e3, t), t = Hn(t.nextSibling);
          }
          if (Ig(e3), e3.tag === 13) {
            if (e3 = e3.memoizedState, e3 = e3 !== null ? e3.dehydrated : null, !e3) throw Error(z(317));
            e: {
              for (e3 = e3.nextSibling, t = 0; e3; ) {
                if (e3.nodeType === 8) {
                  var r = e3.data;
                  if (r === "/$") {
                    if (t === 0) {
                      Kt = Hn(e3.nextSibling);
                      break e;
                    }
                    t--;
                  } else r !== "$" && r !== "$!" && r !== "$?" || t++;
                }
                e3 = e3.nextSibling;
              }
              Kt = null;
            }
          } else Kt = Xt ? Hn(e3.stateNode.nextSibling) : null;
          return true;
        }
        function u1() {
          for (var e3 = Kt; e3; ) e3 = Hn(e3.nextSibling);
        }
        function Ni() {
          Kt = Xt = null, Te = false;
        }
        function ch(e3) {
          Rr === null ? Rr = [e3] : Rr.push(e3);
        }
        var ck = hn.ReactCurrentBatchConfig;
        function So(e3, t, r) {
          if (e3 = r.ref, e3 !== null && typeof e3 != "function" && typeof e3 != "object") {
            if (r._owner) {
              if (r = r._owner, r) {
                if (r.tag !== 1) throw Error(z(309));
                var n = r.stateNode;
              }
              if (!n) throw Error(z(147, e3));
              var a = n, i = "" + e3;
              return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
                var l = a.refs;
                o === null ? delete l[i] : l[i] = o;
              }, t._stringRef = i, t);
            }
            if (typeof e3 != "string") throw Error(z(284));
            if (!r._owner) throw Error(z(290, e3));
          }
          return e3;
        }
        function Ps(e3, t) {
          throw e3 = Object.prototype.toString.call(t), Error(z(31, e3 === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e3));
        }
        function jg(e3) {
          var t = e3._init;
          return t(e3._payload);
        }
        function c1(e3) {
          function t(m, h) {
            if (e3) {
              var w = m.deletions;
              w === null ? (m.deletions = [h], m.flags |= 16) : w.push(h);
            }
          }
          function r(m, h) {
            if (!e3) return null;
            for (; h !== null; ) t(m, h), h = h.sibling;
            return null;
          }
          function n(m, h) {
            for (m = /* @__PURE__ */ new Map(); h !== null; ) h.key !== null ? m.set(h.key, h) : m.set(h.index, h), h = h.sibling;
            return m;
          }
          function a(m, h) {
            return m = Yn(m, h), m.index = 0, m.sibling = null, m;
          }
          function i(m, h, w) {
            return m.index = w, e3 ? (w = m.alternate, w !== null ? (w = w.index, w < h ? (m.flags |= 2, h) : w) : (m.flags |= 2, h)) : (m.flags |= 1048576, h);
          }
          function o(m) {
            return e3 && m.alternate === null && (m.flags |= 2), m;
          }
          function l(m, h, w, b) {
            return h === null || h.tag !== 6 ? (h = Qd(w, m.mode, b), h.return = m, h) : (h = a(h, w), h.return = m, h);
          }
          function s(m, h, w, b) {
            var E = w.type;
            return E === ui ? c(m, h, w.props.children, b, w.key) : h !== null && (h.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Tn && jg(E) === h.type) ? (b = a(h, w.props), b.ref = So(m, h, w), b.return = m, b) : (b = Vs(w.type, w.key, w.props, null, m.mode, b), b.ref = So(m, h, w), b.return = m, b);
          }
          function u(m, h, w, b) {
            return h === null || h.tag !== 4 || h.stateNode.containerInfo !== w.containerInfo || h.stateNode.implementation !== w.implementation ? (h = Zd(w, m.mode, b), h.return = m, h) : (h = a(h, w.children || []), h.return = m, h);
          }
          function c(m, h, w, b, E) {
            return h === null || h.tag !== 7 ? (h = Da(w, m.mode, b, E), h.return = m, h) : (h = a(h, w), h.return = m, h);
          }
          function d(m, h, w) {
            if (typeof h == "string" && h !== "" || typeof h == "number") return h = Qd("" + h, m.mode, w), h.return = m, h;
            if (typeof h == "object" && h !== null) {
              switch (h.$$typeof) {
                case gs:
                  return w = Vs(h.type, h.key, h.props, null, m.mode, w), w.ref = So(m, null, h), w.return = m, w;
                case si:
                  return h = Zd(h, m.mode, w), h.return = m, h;
                case Tn:
                  var b = h._init;
                  return d(m, b(h._payload), w);
              }
              if (Lo(h) || bo(h)) return h = Da(h, m.mode, w, null), h.return = m, h;
              Ps(m, h);
            }
            return null;
          }
          function f(m, h, w, b) {
            var E = h !== null ? h.key : null;
            if (typeof w == "string" && w !== "" || typeof w == "number") return E !== null ? null : l(m, h, "" + w, b);
            if (typeof w == "object" && w !== null) {
              switch (w.$$typeof) {
                case gs:
                  return w.key === E ? s(m, h, w, b) : null;
                case si:
                  return w.key === E ? u(m, h, w, b) : null;
                case Tn:
                  return E = w._init, f(m, h, E(w._payload), b);
              }
              if (Lo(w) || bo(w)) return E !== null ? null : c(m, h, w, b, null);
              Ps(m, w);
            }
            return null;
          }
          function p(m, h, w, b, E) {
            if (typeof b == "string" && b !== "" || typeof b == "number") return m = m.get(w) || null, l(h, m, "" + b, E);
            if (typeof b == "object" && b !== null) {
              switch (b.$$typeof) {
                case gs:
                  return m = m.get(b.key === null ? w : b.key) || null, s(h, m, b, E);
                case si:
                  return m = m.get(b.key === null ? w : b.key) || null, u(h, m, b, E);
                case Tn:
                  var N = b._init;
                  return p(m, h, w, N(b._payload), E);
              }
              if (Lo(b) || bo(b)) return m = m.get(w) || null, c(h, m, b, E, null);
              Ps(h, b);
            }
            return null;
          }
          function v(m, h, w, b) {
            for (var E = null, N = null, M = h, x = h = 0, C = null; M !== null && x < w.length; x++) {
              M.index > x ? (C = M, M = null) : C = M.sibling;
              var D = f(m, M, w[x], b);
              if (D === null) {
                M === null && (M = C);
                break;
              }
              e3 && M && D.alternate === null && t(m, M), h = i(D, h, x), N === null ? E = D : N.sibling = D, N = D, M = C;
            }
            if (x === w.length) return r(m, M), Te && ba(m, x), E;
            if (M === null) {
              for (; x < w.length; x++) M = d(m, w[x], b), M !== null && (h = i(M, h, x), N === null ? E = M : N.sibling = M, N = M);
              return Te && ba(m, x), E;
            }
            for (M = n(m, M); x < w.length; x++) C = p(M, m, x, w[x], b), C !== null && (e3 && C.alternate !== null && M.delete(C.key === null ? x : C.key), h = i(C, h, x), N === null ? E = C : N.sibling = C, N = C);
            return e3 && M.forEach(function(T) {
              return t(m, T);
            }), Te && ba(m, x), E;
          }
          function y(m, h, w, b) {
            var E = bo(w);
            if (typeof E != "function") throw Error(z(150));
            if (w = E.call(w), w == null) throw Error(z(151));
            for (var N = E = null, M = h, x = h = 0, C = null, D = w.next(); M !== null && !D.done; x++, D = w.next()) {
              M.index > x ? (C = M, M = null) : C = M.sibling;
              var T = f(m, M, D.value, b);
              if (T === null) {
                M === null && (M = C);
                break;
              }
              e3 && M && T.alternate === null && t(m, M), h = i(T, h, x), N === null ? E = T : N.sibling = T, N = T, M = C;
            }
            if (D.done) return r(m, M), Te && ba(m, x), E;
            if (M === null) {
              for (; !D.done; x++, D = w.next()) D = d(m, D.value, b), D !== null && (h = i(D, h, x), N === null ? E = D : N.sibling = D, N = D);
              return Te && ba(m, x), E;
            }
            for (M = n(m, M); !D.done; x++, D = w.next()) D = p(M, m, x, D.value, b), D !== null && (e3 && D.alternate !== null && M.delete(D.key === null ? x : D.key), h = i(D, h, x), N === null ? E = D : N.sibling = D, N = D);
            return e3 && M.forEach(function(P) {
              return t(m, P);
            }), Te && ba(m, x), E;
          }
          function g(m, h, w, b) {
            if (typeof w == "object" && w !== null && w.type === ui && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
              switch (w.$$typeof) {
                case gs:
                  e: {
                    for (var E = w.key, N = h; N !== null; ) {
                      if (N.key === E) {
                        if (E = w.type, E === ui) {
                          if (N.tag === 7) {
                            r(m, N.sibling), h = a(N, w.props.children), h.return = m, m = h;
                            break e;
                          }
                        } else if (N.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Tn && jg(E) === N.type) {
                          r(m, N.sibling), h = a(N, w.props), h.ref = So(m, N, w), h.return = m, m = h;
                          break e;
                        }
                        r(m, N);
                        break;
                      } else t(m, N);
                      N = N.sibling;
                    }
                    w.type === ui ? (h = Da(w.props.children, m.mode, b, w.key), h.return = m, m = h) : (b = Vs(w.type, w.key, w.props, null, m.mode, b), b.ref = So(m, h, w), b.return = m, m = b);
                  }
                  return o(m);
                case si:
                  e: {
                    for (N = w.key; h !== null; ) {
                      if (h.key === N) if (h.tag === 4 && h.stateNode.containerInfo === w.containerInfo && h.stateNode.implementation === w.implementation) {
                        r(m, h.sibling), h = a(h, w.children || []), h.return = m, m = h;
                        break e;
                      } else {
                        r(m, h);
                        break;
                      }
                      else t(m, h);
                      h = h.sibling;
                    }
                    h = Zd(w, m.mode, b), h.return = m, m = h;
                  }
                  return o(m);
                case Tn:
                  return N = w._init, g(m, h, N(w._payload), b);
              }
              if (Lo(w)) return v(m, h, w, b);
              if (bo(w)) return y(m, h, w, b);
              Ps(m, w);
            }
            return typeof w == "string" && w !== "" || typeof w == "number" ? (w = "" + w, h !== null && h.tag === 6 ? (r(m, h.sibling), h = a(h, w), h.return = m, m = h) : (r(m, h), h = Qd(w, m.mode, b), h.return = m, m = h), o(m)) : r(m, h);
          }
          return g;
        }
        var Mi = c1(true), d1 = c1(false), au = Xn(null), iu = null, vi = null, dh = null;
        function fh() {
          dh = vi = iu = null;
        }
        function hh(e3) {
          var t = au.current;
          Ne(au), e3._currentValue = t;
        }
        function Mf(e3, t, r) {
          for (; e3 !== null; ) {
            var n = e3.alternate;
            if ((e3.childLanes & t) !== t ? (e3.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e3 === r) break;
            e3 = e3.return;
          }
        }
        function Ri(e3, t) {
          iu = e3, dh = vi = null, e3 = e3.dependencies, e3 !== null && e3.firstContext !== null && ((e3.lanes & t) !== 0 && (Ht = true), e3.firstContext = null);
        }
        function ur(e3) {
          var t = e3._currentValue;
          if (dh !== e3) if (e3 = { context: e3, memoizedValue: t, next: null }, vi === null) {
            if (iu === null) throw Error(z(308));
            vi = e3, iu.dependencies = { lanes: 0, firstContext: e3 };
          } else vi = vi.next = e3;
          return t;
        }
        var Ra = null;
        function ph(e3) {
          Ra === null ? Ra = [e3] : Ra.push(e3);
        }
        function f1(e3, t, r, n) {
          var a = t.interleaved;
          return a === null ? (r.next = r, ph(t)) : (r.next = a.next, a.next = r), t.interleaved = r, dn(e3, n);
        }
        function dn(e3, t) {
          e3.lanes |= t;
          var r = e3.alternate;
          for (r !== null && (r.lanes |= t), r = e3, e3 = e3.return; e3 !== null; ) e3.childLanes |= t, r = e3.alternate, r !== null && (r.childLanes |= t), r = e3, e3 = e3.return;
          return r.tag === 3 ? r.stateNode : null;
        }
        var An = false;
        function mh(e3) {
          e3.updateQueue = { baseState: e3.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
        }
        function h1(e3, t) {
          e3 = e3.updateQueue, t.updateQueue === e3 && (t.updateQueue = { baseState: e3.baseState, firstBaseUpdate: e3.firstBaseUpdate, lastBaseUpdate: e3.lastBaseUpdate, shared: e3.shared, effects: e3.effects });
        }
        function sn(e3, t) {
          return { eventTime: e3, lane: t, tag: 0, payload: null, callback: null, next: null };
        }
        function Bn(e3, t, r) {
          var n = e3.updateQueue;
          if (n === null) return null;
          if (n = n.shared, (pe & 2) !== 0) {
            var a = n.pending;
            return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, dn(e3, r);
          }
          return a = n.interleaved, a === null ? (t.next = t, ph(n)) : (t.next = a.next, a.next = t), n.interleaved = t, dn(e3, r);
        }
        function Os(e3, t, r) {
          if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
            var n = t.lanes;
            n &= e3.pendingLanes, r |= n, t.lanes = r, eh(e3, r);
          }
        }
        function Ug(e3, t) {
          var r = e3.updateQueue, n = e3.alternate;
          if (n !== null && (n = n.updateQueue, r === n)) {
            var a = null, i = null;
            if (r = r.firstBaseUpdate, r !== null) {
              do {
                var o = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
                i === null ? a = i = o : i = i.next = o, r = r.next;
              } while (r !== null);
              i === null ? a = i = t : i = i.next = t;
            } else a = i = t;
            r = { baseState: n.baseState, firstBaseUpdate: a, lastBaseUpdate: i, shared: n.shared, effects: n.effects }, e3.updateQueue = r;
            return;
          }
          e3 = r.lastBaseUpdate, e3 === null ? r.firstBaseUpdate = t : e3.next = t, r.lastBaseUpdate = t;
        }
        function ou(e3, t, r, n) {
          var a = e3.updateQueue;
          An = false;
          var i = a.firstBaseUpdate, o = a.lastBaseUpdate, l = a.shared.pending;
          if (l !== null) {
            a.shared.pending = null;
            var s = l, u = s.next;
            s.next = null, o === null ? i = u : o.next = u, o = s;
            var c = e3.alternate;
            c !== null && (c = c.updateQueue, l = c.lastBaseUpdate, l !== o && (l === null ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = s));
          }
          if (i !== null) {
            var d = a.baseState;
            o = 0, c = u = s = null, l = i;
            do {
              var f = l.lane, p = l.eventTime;
              if ((n & f) === f) {
                c !== null && (c = c.next = { eventTime: p, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null });
                e: {
                  var v = e3, y = l;
                  switch (f = t, p = r, y.tag) {
                    case 1:
                      if (v = y.payload, typeof v == "function") {
                        d = v.call(p, d, f);
                        break e;
                      }
                      d = v;
                      break e;
                    case 3:
                      v.flags = v.flags & -65537 | 128;
                    case 0:
                      if (v = y.payload, f = typeof v == "function" ? v.call(p, d, f) : v, f == null) break e;
                      d = Oe({}, d, f);
                      break e;
                    case 2:
                      An = true;
                  }
                }
                l.callback !== null && l.lane !== 0 && (e3.flags |= 64, f = a.effects, f === null ? a.effects = [l] : f.push(l));
              } else p = { eventTime: p, lane: f, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, c === null ? (u = c = p, s = d) : c = c.next = p, o |= f;
              if (l = l.next, l === null) {
                if (l = a.shared.pending, l === null) break;
                f = l, l = f.next, f.next = null, a.lastBaseUpdate = f, a.shared.pending = null;
              }
            } while (true);
            if (c === null && (s = d), a.baseState = s, a.firstBaseUpdate = u, a.lastBaseUpdate = c, t = a.shared.interleaved, t !== null) {
              a = t;
              do
                o |= a.lane, a = a.next;
              while (a !== t);
            } else i === null && (a.shared.lanes = 0);
            Pa |= o, e3.lanes = o, e3.memoizedState = d;
          }
        }
        function Hg(e3, t, r) {
          if (e3 = t.effects, t.effects = null, e3 !== null) for (t = 0; t < e3.length; t++) {
            var n = e3[t], a = n.callback;
            if (a !== null) {
              if (n.callback = null, n = r, typeof a != "function") throw Error(z(191, a));
              a.call(n);
            }
          }
        }
        var sl = {}, Ur = Xn(sl), Jo = Xn(sl), el = Xn(sl);
        function Sa(e3) {
          if (e3 === sl) throw Error(z(174));
          return e3;
        }
        function gh(e3, t) {
          switch (Ce(el, t), Ce(Jo, e3), Ce(Ur, sl), e3 = t.nodeType, e3) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : uf(null, "");
              break;
            default:
              e3 = e3 === 8 ? t.parentNode : t, t = e3.namespaceURI || null, e3 = e3.tagName, t = uf(t, e3);
          }
          Ne(Ur), Ce(Ur, t);
        }
        function Li() {
          Ne(Ur), Ne(Jo), Ne(el);
        }
        function p1(e3) {
          Sa(el.current);
          var t = Sa(Ur.current), r = uf(t, e3.type);
          t !== r && (Ce(Jo, e3), Ce(Ur, r));
        }
        function vh(e3) {
          Jo.current === e3 && (Ne(Ur), Ne(Jo));
        }
        var $e = Xn(0);
        function lu(e3) {
          for (var t = e3; t !== null; ) {
            if (t.tag === 13) {
              var r = t.memoizedState;
              if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return t;
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
              if ((t.flags & 128) !== 0) return t;
            } else if (t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e3) break;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e3) return null;
              t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
          }
          return null;
        }
        var Wd = [];
        function yh() {
          for (var e3 = 0; e3 < Wd.length; e3++) Wd[e3]._workInProgressVersionPrimary = null;
          Wd.length = 0;
        }
        var Is = hn.ReactCurrentDispatcher, Yd = hn.ReactCurrentBatchConfig, La = 0, ze = null, Je = null, tt = null, su = false, Oo = false, tl = 0, dk = 0;
        function wt() {
          throw Error(z(321));
        }
        function wh(e3, t) {
          if (t === null) return false;
          for (var r = 0; r < t.length && r < e3.length; r++) if (!Dr(e3[r], t[r])) return false;
          return true;
        }
        function xh(e3, t, r, n, a, i) {
          if (La = i, ze = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Is.current = e3 === null || e3.memoizedState === null ? mk : gk, e3 = r(n, a), Oo) {
            i = 0;
            do {
              if (Oo = false, tl = 0, 25 <= i) throw Error(z(301));
              i += 1, tt = Je = null, t.updateQueue = null, Is.current = vk, e3 = r(n, a);
            } while (Oo);
          }
          if (Is.current = uu, t = Je !== null && Je.next !== null, La = 0, tt = Je = ze = null, su = false, t) throw Error(z(300));
          return e3;
        }
        function bh() {
          var e3 = tl !== 0;
          return tl = 0, e3;
        }
        function Or() {
          var e3 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
          return tt === null ? ze.memoizedState = tt = e3 : tt = tt.next = e3, tt;
        }
        function cr() {
          if (Je === null) {
            var e3 = ze.alternate;
            e3 = e3 !== null ? e3.memoizedState : null;
          } else e3 = Je.next;
          var t = tt === null ? ze.memoizedState : tt.next;
          if (t !== null) tt = t, Je = e3;
          else {
            if (e3 === null) throw Error(z(310));
            Je = e3, e3 = { memoizedState: Je.memoizedState, baseState: Je.baseState, baseQueue: Je.baseQueue, queue: Je.queue, next: null }, tt === null ? ze.memoizedState = tt = e3 : tt = tt.next = e3;
          }
          return tt;
        }
        function rl(e3, t) {
          return typeof t == "function" ? t(e3) : t;
        }
        function qd(e3) {
          var t = cr(), r = t.queue;
          if (r === null) throw Error(z(311));
          r.lastRenderedReducer = e3;
          var n = Je, a = n.baseQueue, i = r.pending;
          if (i !== null) {
            if (a !== null) {
              var o = a.next;
              a.next = i.next, i.next = o;
            }
            n.baseQueue = a = i, r.pending = null;
          }
          if (a !== null) {
            i = a.next, n = n.baseState;
            var l = o = null, s = null, u = i;
            do {
              var c = u.lane;
              if ((La & c) === c) s !== null && (s = s.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), n = u.hasEagerState ? u.eagerState : e3(n, u.action);
              else {
                var d = { lane: c, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
                s === null ? (l = s = d, o = n) : s = s.next = d, ze.lanes |= c, Pa |= c;
              }
              u = u.next;
            } while (u !== null && u !== i);
            s === null ? o = n : s.next = l, Dr(n, t.memoizedState) || (Ht = true), t.memoizedState = n, t.baseState = o, t.baseQueue = s, r.lastRenderedState = n;
          }
          if (e3 = r.interleaved, e3 !== null) {
            a = e3;
            do
              i = a.lane, ze.lanes |= i, Pa |= i, a = a.next;
            while (a !== e3);
          } else a === null && (r.lanes = 0);
          return [t.memoizedState, r.dispatch];
        }
        function Gd(e3) {
          var t = cr(), r = t.queue;
          if (r === null) throw Error(z(311));
          r.lastRenderedReducer = e3;
          var n = r.dispatch, a = r.pending, i = t.memoizedState;
          if (a !== null) {
            r.pending = null;
            var o = a = a.next;
            do
              i = e3(i, o.action), o = o.next;
            while (o !== a);
            Dr(i, t.memoizedState) || (Ht = true), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), r.lastRenderedState = i;
          }
          return [i, n];
        }
        function m1() {
        }
        function g1(e3, t) {
          var r = ze, n = cr(), a = t(), i = !Dr(n.memoizedState, a);
          if (i && (n.memoizedState = a, Ht = true), n = n.queue, kh(w1.bind(null, r, n, e3), [e3]), n.getSnapshot !== t || i || tt !== null && tt.memoizedState.tag & 1) {
            if (r.flags |= 2048, nl(9, y1.bind(null, r, n, a, t), void 0, null), rt === null) throw Error(z(349));
            (La & 30) !== 0 || v1(r, t, a);
          }
          return a;
        }
        function v1(e3, t, r) {
          e3.flags |= 16384, e3 = { getSnapshot: t, value: r }, t = ze.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ze.updateQueue = t, t.stores = [e3]) : (r = t.stores, r === null ? t.stores = [e3] : r.push(e3));
        }
        function y1(e3, t, r, n) {
          t.value = r, t.getSnapshot = n, x1(t) && b1(e3);
        }
        function w1(e3, t, r) {
          return r(function() {
            x1(t) && b1(e3);
          });
        }
        function x1(e3) {
          var t = e3.getSnapshot;
          e3 = e3.value;
          try {
            var r = t();
            return !Dr(e3, r);
          } catch {
            return true;
          }
        }
        function b1(e3) {
          var t = dn(e3, 1);
          t !== null && Cr(t, e3, 1, -1);
        }
        function Bg2(e3) {
          var t = Or();
          return typeof e3 == "function" && (e3 = e3()), t.memoizedState = t.baseState = e3, e3 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: rl, lastRenderedState: e3 }, t.queue = e3, e3 = e3.dispatch = pk.bind(null, ze, e3), [t.memoizedState, e3];
        }
        function nl(e3, t, r, n) {
          return e3 = { tag: e3, create: t, destroy: r, deps: n, next: null }, t = ze.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ze.updateQueue = t, t.lastEffect = e3.next = e3) : (r = t.lastEffect, r === null ? t.lastEffect = e3.next = e3 : (n = r.next, r.next = e3, e3.next = n, t.lastEffect = e3)), e3;
        }
        function k1() {
          return cr().memoizedState;
        }
        function js(e3, t, r, n) {
          var a = Or();
          ze.flags |= e3, a.memoizedState = nl(1 | t, r, void 0, n === void 0 ? null : n);
        }
        function bu(e3, t, r, n) {
          var a = cr();
          n = n === void 0 ? null : n;
          var i = void 0;
          if (Je !== null) {
            var o = Je.memoizedState;
            if (i = o.destroy, n !== null && wh(n, o.deps)) {
              a.memoizedState = nl(t, r, i, n);
              return;
            }
          }
          ze.flags |= e3, a.memoizedState = nl(1 | t, r, i, n);
        }
        function Vg(e3, t) {
          return js(8390656, 8, e3, t);
        }
        function kh(e3, t) {
          return bu(2048, 8, e3, t);
        }
        function E1(e3, t) {
          return bu(4, 2, e3, t);
        }
        function R1(e3, t) {
          return bu(4, 4, e3, t);
        }
        function S1(e3, t) {
          if (typeof t == "function") return e3 = e3(), t(e3), function() {
            t(null);
          };
          if (t != null) return e3 = e3(), t.current = e3, function() {
            t.current = null;
          };
        }
        function C1(e3, t, r) {
          return r = r != null ? r.concat([e3]) : null, bu(4, 4, S1.bind(null, t, e3), r);
        }
        function Eh() {
        }
        function D1(e3, t) {
          var r = cr();
          t = t === void 0 ? null : t;
          var n = r.memoizedState;
          return n !== null && t !== null && wh(t, n[1]) ? n[0] : (r.memoizedState = [e3, t], e3);
        }
        function N1(e3, t) {
          var r = cr();
          t = t === void 0 ? null : t;
          var n = r.memoizedState;
          return n !== null && t !== null && wh(t, n[1]) ? n[0] : (e3 = e3(), r.memoizedState = [e3, t], e3);
        }
        function M1(e3, t, r) {
          return (La & 21) === 0 ? (e3.baseState && (e3.baseState = false, Ht = true), e3.memoizedState = r) : (Dr(r, t) || (r = Av(), ze.lanes |= r, Pa |= r, e3.baseState = true), t);
        }
        function fk(e3, t) {
          var r = ye;
          ye = r !== 0 && 4 > r ? r : 4, e3(true);
          var n = Yd.transition;
          Yd.transition = {};
          try {
            e3(false), t();
          } finally {
            ye = r, Yd.transition = n;
          }
        }
        function L1() {
          return cr().memoizedState;
        }
        function hk(e3, t, r) {
          var n = Wn(e3);
          if (r = { lane: n, action: r, hasEagerState: false, eagerState: null, next: null }, P1(e3)) _1(t, r);
          else if (r = f1(e3, t, r, n), r !== null) {
            var a = At();
            Cr(r, e3, n, a), T1(r, t, n);
          }
        }
        function pk(e3, t, r) {
          var n = Wn(e3), a = { lane: n, action: r, hasEagerState: false, eagerState: null, next: null };
          if (P1(e3)) _1(t, a);
          else {
            var i = e3.alternate;
            if (e3.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
              var o = t.lastRenderedState, l = i(o, r);
              if (a.hasEagerState = true, a.eagerState = l, Dr(l, o)) {
                var s = t.interleaved;
                s === null ? (a.next = a, ph(t)) : (a.next = s.next, s.next = a), t.interleaved = a;
                return;
              }
            } catch {
            }
            r = f1(e3, t, a, n), r !== null && (a = At(), Cr(r, e3, n, a), T1(r, t, n));
          }
        }
        function P1(e3) {
          var t = e3.alternate;
          return e3 === ze || t !== null && t === ze;
        }
        function _1(e3, t) {
          Oo = su = true;
          var r = e3.pending;
          r === null ? t.next = t : (t.next = r.next, r.next = t), e3.pending = t;
        }
        function T1(e3, t, r) {
          if ((r & 4194240) !== 0) {
            var n = t.lanes;
            n &= e3.pendingLanes, r |= n, t.lanes = r, eh(e3, r);
          }
        }
        var uu = { readContext: ur, useCallback: wt, useContext: wt, useEffect: wt, useImperativeHandle: wt, useInsertionEffect: wt, useLayoutEffect: wt, useMemo: wt, useReducer: wt, useRef: wt, useState: wt, useDebugValue: wt, useDeferredValue: wt, useTransition: wt, useMutableSource: wt, useSyncExternalStore: wt, useId: wt, unstable_isNewReconciler: false }, mk = { readContext: ur, useCallback: function(e3, t) {
          return Or().memoizedState = [e3, t === void 0 ? null : t], e3;
        }, useContext: ur, useEffect: Vg, useImperativeHandle: function(e3, t, r) {
          return r = r != null ? r.concat([e3]) : null, js(4194308, 4, S1.bind(null, t, e3), r);
        }, useLayoutEffect: function(e3, t) {
          return js(4194308, 4, e3, t);
        }, useInsertionEffect: function(e3, t) {
          return js(4, 2, e3, t);
        }, useMemo: function(e3, t) {
          var r = Or();
          return t = t === void 0 ? null : t, e3 = e3(), r.memoizedState = [e3, t], e3;
        }, useReducer: function(e3, t, r) {
          var n = Or();
          return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e3 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e3, lastRenderedState: t }, n.queue = e3, e3 = e3.dispatch = hk.bind(null, ze, e3), [n.memoizedState, e3];
        }, useRef: function(e3) {
          var t = Or();
          return e3 = { current: e3 }, t.memoizedState = e3;
        }, useState: Bg2, useDebugValue: Eh, useDeferredValue: function(e3) {
          return Or().memoizedState = e3;
        }, useTransition: function() {
          var e3 = Bg2(false), t = e3[0];
          return e3 = fk.bind(null, e3[1]), Or().memoizedState = e3, [t, e3];
        }, useMutableSource: function() {
        }, useSyncExternalStore: function(e3, t, r) {
          var n = ze, a = Or();
          if (Te) {
            if (r === void 0) throw Error(z(407));
            r = r();
          } else {
            if (r = t(), rt === null) throw Error(z(349));
            (La & 30) !== 0 || v1(n, t, r);
          }
          a.memoizedState = r;
          var i = { value: r, getSnapshot: t };
          return a.queue = i, Vg(w1.bind(null, n, i, e3), [e3]), n.flags |= 2048, nl(9, y1.bind(null, n, i, r, t), void 0, null), r;
        }, useId: function() {
          var e3 = Or(), t = rt.identifierPrefix;
          if (Te) {
            var r = ln, n = on;
            r = (n & ~(1 << 32 - Sr(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = tl++, 0 < r && (t += "H" + r.toString(32)), t += ":";
          } else r = dk++, t = ":" + t + "r" + r.toString(32) + ":";
          return e3.memoizedState = t;
        }, unstable_isNewReconciler: false }, gk = { readContext: ur, useCallback: D1, useContext: ur, useEffect: kh, useImperativeHandle: C1, useInsertionEffect: E1, useLayoutEffect: R1, useMemo: N1, useReducer: qd, useRef: k1, useState: function() {
          return qd(rl);
        }, useDebugValue: Eh, useDeferredValue: function(e3) {
          var t = cr();
          return M1(t, Je.memoizedState, e3);
        }, useTransition: function() {
          var e3 = qd(rl)[0], t = cr().memoizedState;
          return [e3, t];
        }, useMutableSource: m1, useSyncExternalStore: g1, useId: L1, unstable_isNewReconciler: false }, vk = { readContext: ur, useCallback: D1, useContext: ur, useEffect: kh, useImperativeHandle: C1, useInsertionEffect: E1, useLayoutEffect: R1, useMemo: N1, useReducer: Gd, useRef: k1, useState: function() {
          return Gd(rl);
        }, useDebugValue: Eh, useDeferredValue: function(e3) {
          var t = cr();
          return Je === null ? t.memoizedState = e3 : M1(t, Je.memoizedState, e3);
        }, useTransition: function() {
          var e3 = Gd(rl)[0], t = cr().memoizedState;
          return [e3, t];
        }, useMutableSource: m1, useSyncExternalStore: g1, useId: L1, unstable_isNewReconciler: false };
        function kr(e3, t) {
          if (e3 && e3.defaultProps) {
            t = Oe({}, t), e3 = e3.defaultProps;
            for (var r in e3) t[r] === void 0 && (t[r] = e3[r]);
            return t;
          }
          return t;
        }
        function Lf(e3, t, r, n) {
          t = e3.memoizedState, r = r(n, t), r = r == null ? t : Oe({}, t, r), e3.memoizedState = r, e3.lanes === 0 && (e3.updateQueue.baseState = r);
        }
        var ku = { isMounted: function(e3) {
          return (e3 = e3._reactInternals) ? Aa(e3) === e3 : false;
        }, enqueueSetState: function(e3, t, r) {
          e3 = e3._reactInternals;
          var n = At(), a = Wn(e3), i = sn(n, a);
          i.payload = t, r != null && (i.callback = r), t = Bn(e3, i, a), t !== null && (Cr(t, e3, a, n), Os(t, e3, a));
        }, enqueueReplaceState: function(e3, t, r) {
          e3 = e3._reactInternals;
          var n = At(), a = Wn(e3), i = sn(n, a);
          i.tag = 1, i.payload = t, r != null && (i.callback = r), t = Bn(e3, i, a), t !== null && (Cr(t, e3, a, n), Os(t, e3, a));
        }, enqueueForceUpdate: function(e3, t) {
          e3 = e3._reactInternals;
          var r = At(), n = Wn(e3), a = sn(r, n);
          a.tag = 2, t != null && (a.callback = t), t = Bn(e3, a, n), t !== null && (Cr(t, e3, n, r), Os(t, e3, n));
        } };
        function Wg(e3, t, r, n, a, i, o) {
          return e3 = e3.stateNode, typeof e3.shouldComponentUpdate == "function" ? e3.shouldComponentUpdate(n, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Ko(r, n) || !Ko(a, i) : true;
        }
        function A1(e3, t, r) {
          var n = false, a = Gn, i = t.contextType;
          return typeof i == "object" && i !== null ? i = ur(i) : (a = Vt(t) ? Na : kt.current, n = t.contextTypes, i = (n = n != null) ? Di(e3, a) : Gn), t = new t(r, i), e3.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ku, e3.stateNode = t, t._reactInternals = e3, n && (e3 = e3.stateNode, e3.__reactInternalMemoizedUnmaskedChildContext = a, e3.__reactInternalMemoizedMaskedChildContext = i), t;
        }
        function Yg(e3, t, r, n) {
          e3 = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e3 && ku.enqueueReplaceState(t, t.state, null);
        }
        function Pf(e3, t, r, n) {
          var a = e3.stateNode;
          a.props = r, a.state = e3.memoizedState, a.refs = {}, mh(e3);
          var i = t.contextType;
          typeof i == "object" && i !== null ? a.context = ur(i) : (i = Vt(t) ? Na : kt.current, a.context = Di(e3, i)), a.state = e3.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Lf(e3, t, i, r), a.state = e3.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && ku.enqueueReplaceState(a, a.state, null), ou(e3, r, a, n), a.state = e3.memoizedState), typeof a.componentDidMount == "function" && (e3.flags |= 4194308);
        }
        function Pi(e3, t) {
          try {
            var r = "", n = t;
            do
              r += q3(n), n = n.return;
            while (n);
            var a = r;
          } catch (i) {
            a = `
Error generating stack: ` + i.message + `
` + i.stack;
          }
          return { value: e3, source: t, stack: a, digest: null };
        }
        function Kd(e3, t, r) {
          return { value: e3, source: null, stack: r ?? null, digest: t ?? null };
        }
        function _f(e3, t) {
          try {
            console.error(t.value);
          } catch (r) {
            setTimeout(function() {
              throw r;
            });
          }
        }
        var yk = typeof WeakMap == "function" ? WeakMap : Map;
        function F1(e3, t, r) {
          r = sn(-1, r), r.tag = 3, r.payload = { element: null };
          var n = t.value;
          return r.callback = function() {
            du || (du = true, Hf = n), _f(e3, t);
          }, r;
        }
        function $1(e3, t, r) {
          r = sn(-1, r), r.tag = 3;
          var n = e3.type.getDerivedStateFromError;
          if (typeof n == "function") {
            var a = t.value;
            r.payload = function() {
              return n(a);
            }, r.callback = function() {
              _f(e3, t);
            };
          }
          var i = e3.stateNode;
          return i !== null && typeof i.componentDidCatch == "function" && (r.callback = function() {
            _f(e3, t), typeof n != "function" && (Vn === null ? Vn = /* @__PURE__ */ new Set([this]) : Vn.add(this));
            var o = t.stack;
            this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
          }), r;
        }
        function qg(e3, t, r) {
          var n = e3.pingCache;
          if (n === null) {
            n = e3.pingCache = new yk();
            var a = /* @__PURE__ */ new Set();
            n.set(t, a);
          } else a = n.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(t, a));
          a.has(r) || (a.add(r), e3 = _k.bind(null, e3, t, r), t.then(e3, e3));
        }
        function Gg(e3) {
          do {
            var t;
            if ((t = e3.tag === 13) && (t = e3.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e3;
            e3 = e3.return;
          } while (e3 !== null);
          return null;
        }
        function Kg(e3, t, r, n, a) {
          return (e3.mode & 1) === 0 ? (e3 === t ? e3.flags |= 65536 : (e3.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = sn(-1, 1), t.tag = 2, Bn(r, t, 1))), r.lanes |= 1), e3) : (e3.flags |= 65536, e3.lanes = a, e3);
        }
        var wk = hn.ReactCurrentOwner, Ht = false;
        function Tt(e3, t, r, n) {
          t.child = e3 === null ? d1(t, null, r, n) : Mi(t, e3.child, r, n);
        }
        function Xg(e3, t, r, n, a) {
          r = r.render;
          var i = t.ref;
          return Ri(t, a), n = xh(e3, t, r, n, i, a), r = bh(), e3 !== null && !Ht ? (t.updateQueue = e3.updateQueue, t.flags &= -2053, e3.lanes &= ~a, fn(e3, t, a)) : (Te && r && sh(t), t.flags |= 1, Tt(e3, t, n, a), t.child);
        }
        function Qg(e3, t, r, n, a) {
          if (e3 === null) {
            var i = r.type;
            return typeof i == "function" && !Ph(i) && i.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = i, z1(e3, t, i, n, a)) : (e3 = Vs(r.type, null, n, t, t.mode, a), e3.ref = t.ref, e3.return = t, t.child = e3);
          }
          if (i = e3.child, (e3.lanes & a) === 0) {
            var o = i.memoizedProps;
            if (r = r.compare, r = r !== null ? r : Ko, r(o, n) && e3.ref === t.ref) return fn(e3, t, a);
          }
          return t.flags |= 1, e3 = Yn(i, n), e3.ref = t.ref, e3.return = t, t.child = e3;
        }
        function z1(e3, t, r, n, a) {
          if (e3 !== null) {
            var i = e3.memoizedProps;
            if (Ko(i, n) && e3.ref === t.ref) if (Ht = false, t.pendingProps = n = i, (e3.lanes & a) !== 0) (e3.flags & 131072) !== 0 && (Ht = true);
            else return t.lanes = e3.lanes, fn(e3, t, a);
          }
          return Tf(e3, t, r, n, a);
        }
        function O1(e3, t, r) {
          var n = t.pendingProps, a = n.children, i = e3 !== null ? e3.memoizedState : null;
          if (n.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ce(wi, Gt), Gt |= r;
          else {
            if ((r & 1073741824) === 0) return e3 = i !== null ? i.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e3, cachePool: null, transitions: null }, t.updateQueue = null, Ce(wi, Gt), Gt |= e3, null;
            t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = i !== null ? i.baseLanes : r, Ce(wi, Gt), Gt |= n;
          }
          else i !== null ? (n = i.baseLanes | r, t.memoizedState = null) : n = r, Ce(wi, Gt), Gt |= n;
          return Tt(e3, t, a, r), t.child;
        }
        function I1(e3, t) {
          var r = t.ref;
          (e3 === null && r !== null || e3 !== null && e3.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
        }
        function Tf(e3, t, r, n, a) {
          var i = Vt(r) ? Na : kt.current;
          return i = Di(t, i), Ri(t, a), r = xh(e3, t, r, n, i, a), n = bh(), e3 !== null && !Ht ? (t.updateQueue = e3.updateQueue, t.flags &= -2053, e3.lanes &= ~a, fn(e3, t, a)) : (Te && n && sh(t), t.flags |= 1, Tt(e3, t, r, a), t.child);
        }
        function Zg(e3, t, r, n, a) {
          if (Vt(r)) {
            var i = true;
            tu(t);
          } else i = false;
          if (Ri(t, a), t.stateNode === null) Us(e3, t), A1(t, r, n), Pf(t, r, n, a), n = true;
          else if (e3 === null) {
            var o = t.stateNode, l = t.memoizedProps;
            o.props = l;
            var s = o.context, u = r.contextType;
            typeof u == "object" && u !== null ? u = ur(u) : (u = Vt(r) ? Na : kt.current, u = Di(t, u));
            var c = r.getDerivedStateFromProps, d = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
            d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== n || s !== u) && Yg(t, o, n, u), An = false;
            var f = t.memoizedState;
            o.state = f, ou(t, n, o, a), s = t.memoizedState, l !== n || f !== s || Bt.current || An ? (typeof c == "function" && (Lf(t, r, c, n), s = t.memoizedState), (l = An || Wg(t, r, l, n, f, s, u)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = s), o.props = n, o.state = s, o.context = u, n = l) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), n = false);
          } else {
            o = t.stateNode, h1(e3, t), l = t.memoizedProps, u = t.type === t.elementType ? l : kr(t.type, l), o.props = u, d = t.pendingProps, f = o.context, s = r.contextType, typeof s == "object" && s !== null ? s = ur(s) : (s = Vt(r) ? Na : kt.current, s = Di(t, s));
            var p = r.getDerivedStateFromProps;
            (c = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== d || f !== s) && Yg(t, o, n, s), An = false, f = t.memoizedState, o.state = f, ou(t, n, o, a);
            var v = t.memoizedState;
            l !== d || f !== v || Bt.current || An ? (typeof p == "function" && (Lf(t, r, p, n), v = t.memoizedState), (u = An || Wg(t, r, u, n, f, v, s) || false) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(n, v, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(n, v, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || l === e3.memoizedProps && f === e3.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e3.memoizedProps && f === e3.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = v), o.props = n, o.state = v, o.context = s, n = u) : (typeof o.componentDidUpdate != "function" || l === e3.memoizedProps && f === e3.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e3.memoizedProps && f === e3.memoizedState || (t.flags |= 1024), n = false);
          }
          return Af(e3, t, r, n, i, a);
        }
        function Af(e3, t, r, n, a, i) {
          I1(e3, t);
          var o = (t.flags & 128) !== 0;
          if (!n && !o) return a && zg(t, r, false), fn(e3, t, i);
          n = t.stateNode, wk.current = t;
          var l = o && typeof r.getDerivedStateFromError != "function" ? null : n.render();
          return t.flags |= 1, e3 !== null && o ? (t.child = Mi(t, e3.child, null, i), t.child = Mi(t, null, l, i)) : Tt(e3, t, l, i), t.memoizedState = n.state, a && zg(t, r, true), t.child;
        }
        function j1(e3) {
          var t = e3.stateNode;
          t.pendingContext ? $g(e3, t.pendingContext, t.pendingContext !== t.context) : t.context && $g(e3, t.context, false), gh(e3, t.containerInfo);
        }
        function Jg(e3, t, r, n, a) {
          return Ni(), ch(a), t.flags |= 256, Tt(e3, t, r, n), t.child;
        }
        var Ff = { dehydrated: null, treeContext: null, retryLane: 0 };
        function $f(e3) {
          return { baseLanes: e3, cachePool: null, transitions: null };
        }
        function U1(e3, t, r) {
          var n = t.pendingProps, a = $e.current, i = false, o = (t.flags & 128) !== 0, l;
          if ((l = o) || (l = e3 !== null && e3.memoizedState === null ? false : (a & 2) !== 0), l ? (i = true, t.flags &= -129) : (e3 === null || e3.memoizedState !== null) && (a |= 1), Ce($e, a & 1), e3 === null) return Nf(t), e3 = t.memoizedState, e3 !== null && (e3 = e3.dehydrated, e3 !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e3.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (o = n.children, e3 = n.fallback, i ? (n = t.mode, i = t.child, o = { mode: "hidden", children: o }, (n & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Su(o, n, 0, null), e3 = Da(e3, n, r, null), i.return = t, e3.return = t, i.sibling = e3, t.child = i, t.child.memoizedState = $f(r), t.memoizedState = Ff, e3) : Rh(t, o));
          if (a = e3.memoizedState, a !== null && (l = a.dehydrated, l !== null)) return xk(e3, t, o, n, l, a, r);
          if (i) {
            i = n.fallback, o = t.mode, a = e3.child, l = a.sibling;
            var s = { mode: "hidden", children: n.children };
            return (o & 1) === 0 && t.child !== a ? (n = t.child, n.childLanes = 0, n.pendingProps = s, t.deletions = null) : (n = Yn(a, s), n.subtreeFlags = a.subtreeFlags & 14680064), l !== null ? i = Yn(l, i) : (i = Da(i, o, r, null), i.flags |= 2), i.return = t, n.return = t, n.sibling = i, t.child = n, n = i, i = t.child, o = e3.child.memoizedState, o = o === null ? $f(r) : { baseLanes: o.baseLanes | r, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e3.childLanes & ~r, t.memoizedState = Ff, n;
          }
          return i = e3.child, e3 = i.sibling, n = Yn(i, { mode: "visible", children: n.children }), (t.mode & 1) === 0 && (n.lanes = r), n.return = t, n.sibling = null, e3 !== null && (r = t.deletions, r === null ? (t.deletions = [e3], t.flags |= 16) : r.push(e3)), t.child = n, t.memoizedState = null, n;
        }
        function Rh(e3, t) {
          return t = Su({ mode: "visible", children: t }, e3.mode, 0, null), t.return = e3, e3.child = t;
        }
        function _s(e3, t, r, n) {
          return n !== null && ch(n), Mi(t, e3.child, null, r), e3 = Rh(t, t.pendingProps.children), e3.flags |= 2, t.memoizedState = null, e3;
        }
        function xk(e3, t, r, n, a, i, o) {
          if (r) return t.flags & 256 ? (t.flags &= -257, n = Kd(Error(z(422))), _s(e3, t, o, n)) : t.memoizedState !== null ? (t.child = e3.child, t.flags |= 128, null) : (i = n.fallback, a = t.mode, n = Su({ mode: "visible", children: n.children }, a, 0, null), i = Da(i, a, o, null), i.flags |= 2, n.return = t, i.return = t, n.sibling = i, t.child = n, (t.mode & 1) !== 0 && Mi(t, e3.child, null, o), t.child.memoizedState = $f(o), t.memoizedState = Ff, i);
          if ((t.mode & 1) === 0) return _s(e3, t, o, null);
          if (a.data === "$!") {
            if (n = a.nextSibling && a.nextSibling.dataset, n) var l = n.dgst;
            return n = l, i = Error(z(419)), n = Kd(i, n, void 0), _s(e3, t, o, n);
          }
          if (l = (o & e3.childLanes) !== 0, Ht || l) {
            if (n = rt, n !== null) {
              switch (o & -o) {
                case 4:
                  a = 2;
                  break;
                case 16:
                  a = 8;
                  break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                  a = 32;
                  break;
                case 536870912:
                  a = 268435456;
                  break;
                default:
                  a = 0;
              }
              a = (a & (n.suspendedLanes | o)) !== 0 ? 0 : a, a !== 0 && a !== i.retryLane && (i.retryLane = a, dn(e3, a), Cr(n, e3, a, -1));
            }
            return Lh(), n = Kd(Error(z(421))), _s(e3, t, o, n);
          }
          return a.data === "$?" ? (t.flags |= 128, t.child = e3.child, t = Tk.bind(null, e3), a._reactRetry = t, null) : (e3 = i.treeContext, Kt = Hn(a.nextSibling), Xt = t, Te = true, Rr = null, e3 !== null && (ir[or++] = on, ir[or++] = ln, ir[or++] = Ma, on = e3.id, ln = e3.overflow, Ma = t), t = Rh(t, n.children), t.flags |= 4096, t);
        }
        function ev(e3, t, r) {
          e3.lanes |= t;
          var n = e3.alternate;
          n !== null && (n.lanes |= t), Mf(e3.return, t, r);
        }
        function Xd(e3, t, r, n, a) {
          var i = e3.memoizedState;
          i === null ? e3.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: a } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = n, i.tail = r, i.tailMode = a);
        }
        function H1(e3, t, r) {
          var n = t.pendingProps, a = n.revealOrder, i = n.tail;
          if (Tt(e3, t, n.children, r), n = $e.current, (n & 2) !== 0) n = n & 1 | 2, t.flags |= 128;
          else {
            if (e3 !== null && (e3.flags & 128) !== 0) e: for (e3 = t.child; e3 !== null; ) {
              if (e3.tag === 13) e3.memoizedState !== null && ev(e3, r, t);
              else if (e3.tag === 19) ev(e3, r, t);
              else if (e3.child !== null) {
                e3.child.return = e3, e3 = e3.child;
                continue;
              }
              if (e3 === t) break e;
              for (; e3.sibling === null; ) {
                if (e3.return === null || e3.return === t) break e;
                e3 = e3.return;
              }
              e3.sibling.return = e3.return, e3 = e3.sibling;
            }
            n &= 1;
          }
          if (Ce($e, n), (t.mode & 1) === 0) t.memoizedState = null;
          else switch (a) {
            case "forwards":
              for (r = t.child, a = null; r !== null; ) e3 = r.alternate, e3 !== null && lu(e3) === null && (a = r), r = r.sibling;
              r = a, r === null ? (a = t.child, t.child = null) : (a = r.sibling, r.sibling = null), Xd(t, false, a, r, i);
              break;
            case "backwards":
              for (r = null, a = t.child, t.child = null; a !== null; ) {
                if (e3 = a.alternate, e3 !== null && lu(e3) === null) {
                  t.child = a;
                  break;
                }
                e3 = a.sibling, a.sibling = r, r = a, a = e3;
              }
              Xd(t, true, r, null, i);
              break;
            case "together":
              Xd(t, false, null, null, void 0);
              break;
            default:
              t.memoizedState = null;
          }
          return t.child;
        }
        function Us(e3, t) {
          (t.mode & 1) === 0 && e3 !== null && (e3.alternate = null, t.alternate = null, t.flags |= 2);
        }
        function fn(e3, t, r) {
          if (e3 !== null && (t.dependencies = e3.dependencies), Pa |= t.lanes, (r & t.childLanes) === 0) return null;
          if (e3 !== null && t.child !== e3.child) throw Error(z(153));
          if (t.child !== null) {
            for (e3 = t.child, r = Yn(e3, e3.pendingProps), t.child = r, r.return = t; e3.sibling !== null; ) e3 = e3.sibling, r = r.sibling = Yn(e3, e3.pendingProps), r.return = t;
            r.sibling = null;
          }
          return t.child;
        }
        function bk(e3, t, r) {
          switch (t.tag) {
            case 3:
              j1(t), Ni();
              break;
            case 5:
              p1(t);
              break;
            case 1:
              Vt(t.type) && tu(t);
              break;
            case 4:
              gh(t, t.stateNode.containerInfo);
              break;
            case 10:
              var n = t.type._context, a = t.memoizedProps.value;
              Ce(au, n._currentValue), n._currentValue = a;
              break;
            case 13:
              if (n = t.memoizedState, n !== null) return n.dehydrated !== null ? (Ce($e, $e.current & 1), t.flags |= 128, null) : (r & t.child.childLanes) !== 0 ? U1(e3, t, r) : (Ce($e, $e.current & 1), e3 = fn(e3, t, r), e3 !== null ? e3.sibling : null);
              Ce($e, $e.current & 1);
              break;
            case 19:
              if (n = (r & t.childLanes) !== 0, (e3.flags & 128) !== 0) {
                if (n) return H1(e3, t, r);
                t.flags |= 128;
              }
              if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Ce($e, $e.current), n) break;
              return null;
            case 22:
            case 23:
              return t.lanes = 0, O1(e3, t, r);
          }
          return fn(e3, t, r);
        }
        var B1, zf, V1, W1;
        B1 = function(e3, t) {
          for (var r = t.child; r !== null; ) {
            if (r.tag === 5 || r.tag === 6) e3.appendChild(r.stateNode);
            else if (r.tag !== 4 && r.child !== null) {
              r.child.return = r, r = r.child;
              continue;
            }
            if (r === t) break;
            for (; r.sibling === null; ) {
              if (r.return === null || r.return === t) return;
              r = r.return;
            }
            r.sibling.return = r.return, r = r.sibling;
          }
        };
        zf = function() {
        };
        V1 = function(e3, t, r, n) {
          var a = e3.memoizedProps;
          if (a !== n) {
            e3 = t.stateNode, Sa(Ur.current);
            var i = null;
            switch (r) {
              case "input":
                a = af(e3, a), n = af(e3, n), i = [];
                break;
              case "select":
                a = Oe({}, a, { value: void 0 }), n = Oe({}, n, { value: void 0 }), i = [];
                break;
              case "textarea":
                a = sf(e3, a), n = sf(e3, n), i = [];
                break;
              default:
                typeof a.onClick != "function" && typeof n.onClick == "function" && (e3.onclick = Js);
            }
            cf(r, n);
            var o;
            r = null;
            for (u in a) if (!n.hasOwnProperty(u) && a.hasOwnProperty(u) && a[u] != null) if (u === "style") {
              var l = a[u];
              for (o in l) l.hasOwnProperty(o) && (r || (r = {}), r[o] = "");
            } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ho.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
            for (u in n) {
              var s = n[u];
              if (l = a?.[u], n.hasOwnProperty(u) && s !== l && (s != null || l != null)) if (u === "style") if (l) {
                for (o in l) !l.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (r || (r = {}), r[o] = "");
                for (o in s) s.hasOwnProperty(o) && l[o] !== s[o] && (r || (r = {}), r[o] = s[o]);
              } else r || (i || (i = []), i.push(u, r)), r = s;
              else u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, l = l ? l.__html : void 0, s != null && l !== s && (i = i || []).push(u, s)) : u === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(u, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ho.hasOwnProperty(u) ? (s != null && u === "onScroll" && De("scroll", e3), i || l === s || (i = [])) : (i = i || []).push(u, s));
            }
            r && (i = i || []).push("style", r);
            var u = i;
            (t.updateQueue = u) && (t.flags |= 4);
          }
        };
        W1 = function(e3, t, r, n) {
          r !== n && (t.flags |= 4);
        };
        function Co(e3, t) {
          if (!Te) switch (e3.tailMode) {
            case "hidden":
              t = e3.tail;
              for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
              r === null ? e3.tail = null : r.sibling = null;
              break;
            case "collapsed":
              r = e3.tail;
              for (var n = null; r !== null; ) r.alternate !== null && (n = r), r = r.sibling;
              n === null ? t || e3.tail === null ? e3.tail = null : e3.tail.sibling = null : n.sibling = null;
          }
        }
        function xt(e3) {
          var t = e3.alternate !== null && e3.alternate.child === e3.child, r = 0, n = 0;
          if (t) for (var a = e3.child; a !== null; ) r |= a.lanes | a.childLanes, n |= a.subtreeFlags & 14680064, n |= a.flags & 14680064, a.return = e3, a = a.sibling;
          else for (a = e3.child; a !== null; ) r |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = e3, a = a.sibling;
          return e3.subtreeFlags |= n, e3.childLanes = r, t;
        }
        function kk(e3, t, r) {
          var n = t.pendingProps;
          switch (uh(t), t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return xt(t), null;
            case 1:
              return Vt(t.type) && eu(), xt(t), null;
            case 3:
              return n = t.stateNode, Li(), Ne(Bt), Ne(kt), yh(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e3 === null || e3.child === null) && (Ls(t) ? t.flags |= 4 : e3 === null || e3.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Rr !== null && (Wf(Rr), Rr = null))), zf(e3, t), xt(t), null;
            case 5:
              vh(t);
              var a = Sa(el.current);
              if (r = t.type, e3 !== null && t.stateNode != null) V1(e3, t, r, n, a), e3.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
              else {
                if (!n) {
                  if (t.stateNode === null) throw Error(z(166));
                  return xt(t), null;
                }
                if (e3 = Sa(Ur.current), Ls(t)) {
                  n = t.stateNode, r = t.type;
                  var i = t.memoizedProps;
                  switch (n[Ir] = t, n[Zo] = i, e3 = (t.mode & 1) !== 0, r) {
                    case "dialog":
                      De("cancel", n), De("close", n);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      De("load", n);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < _o.length; a++) De(_o[a], n);
                      break;
                    case "source":
                      De("error", n);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      De("error", n), De("load", n);
                      break;
                    case "details":
                      De("toggle", n);
                      break;
                    case "input":
                      sg(n, i), De("invalid", n);
                      break;
                    case "select":
                      n._wrapperState = { wasMultiple: !!i.multiple }, De("invalid", n);
                      break;
                    case "textarea":
                      cg(n, i), De("invalid", n);
                  }
                  cf(r, i), a = null;
                  for (var o in i) if (i.hasOwnProperty(o)) {
                    var l = i[o];
                    o === "children" ? typeof l == "string" ? n.textContent !== l && (i.suppressHydrationWarning !== true && Ms(n.textContent, l, e3), a = ["children", l]) : typeof l == "number" && n.textContent !== "" + l && (i.suppressHydrationWarning !== true && Ms(n.textContent, l, e3), a = ["children", "" + l]) : Ho.hasOwnProperty(o) && l != null && o === "onScroll" && De("scroll", n);
                  }
                  switch (r) {
                    case "input":
                      vs(n), ug(n, i, true);
                      break;
                    case "textarea":
                      vs(n), dg(n);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      typeof i.onClick == "function" && (n.onclick = Js);
                  }
                  n = a, t.updateQueue = n, n !== null && (t.flags |= 4);
                } else {
                  o = a.nodeType === 9 ? a : a.ownerDocument, e3 === "http://www.w3.org/1999/xhtml" && (e3 = wv(r)), e3 === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e3 = o.createElement("div"), e3.innerHTML = "<script><\/script>", e3 = e3.removeChild(e3.firstChild)) : typeof n.is == "string" ? e3 = o.createElement(r, { is: n.is }) : (e3 = o.createElement(r), r === "select" && (o = e3, n.multiple ? o.multiple = true : n.size && (o.size = n.size))) : e3 = o.createElementNS(e3, r), e3[Ir] = t, e3[Zo] = n, B1(e3, t, false, false), t.stateNode = e3;
                  e: {
                    switch (o = df(r, n), r) {
                      case "dialog":
                        De("cancel", e3), De("close", e3), a = n;
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        De("load", e3), a = n;
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < _o.length; a++) De(_o[a], e3);
                        a = n;
                        break;
                      case "source":
                        De("error", e3), a = n;
                        break;
                      case "img":
                      case "image":
                      case "link":
                        De("error", e3), De("load", e3), a = n;
                        break;
                      case "details":
                        De("toggle", e3), a = n;
                        break;
                      case "input":
                        sg(e3, n), a = af(e3, n), De("invalid", e3);
                        break;
                      case "option":
                        a = n;
                        break;
                      case "select":
                        e3._wrapperState = { wasMultiple: !!n.multiple }, a = Oe({}, n, { value: void 0 }), De("invalid", e3);
                        break;
                      case "textarea":
                        cg(e3, n), a = sf(e3, n), De("invalid", e3);
                        break;
                      default:
                        a = n;
                    }
                    cf(r, a), l = a;
                    for (i in l) if (l.hasOwnProperty(i)) {
                      var s = l[i];
                      i === "style" ? kv(e3, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && xv(e3, s)) : i === "children" ? typeof s == "string" ? (r !== "textarea" || s !== "") && Bo(e3, s) : typeof s == "number" && Bo(e3, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ho.hasOwnProperty(i) ? s != null && i === "onScroll" && De("scroll", e3) : s != null && Gf(e3, i, s, o));
                    }
                    switch (r) {
                      case "input":
                        vs(e3), ug(e3, n, false);
                        break;
                      case "textarea":
                        vs(e3), dg(e3);
                        break;
                      case "option":
                        n.value != null && e3.setAttribute("value", "" + qn(n.value));
                        break;
                      case "select":
                        e3.multiple = !!n.multiple, i = n.value, i != null ? xi(e3, !!n.multiple, i, false) : n.defaultValue != null && xi(e3, !!n.multiple, n.defaultValue, true);
                        break;
                      default:
                        typeof a.onClick == "function" && (e3.onclick = Js);
                    }
                    switch (r) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        n = !!n.autoFocus;
                        break e;
                      case "img":
                        n = true;
                        break e;
                      default:
                        n = false;
                    }
                  }
                  n && (t.flags |= 4);
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
              }
              return xt(t), null;
            case 6:
              if (e3 && t.stateNode != null) W1(e3, t, e3.memoizedProps, n);
              else {
                if (typeof n != "string" && t.stateNode === null) throw Error(z(166));
                if (r = Sa(el.current), Sa(Ur.current), Ls(t)) {
                  if (n = t.stateNode, r = t.memoizedProps, n[Ir] = t, (i = n.nodeValue !== r) && (e3 = Xt, e3 !== null)) switch (e3.tag) {
                    case 3:
                      Ms(n.nodeValue, r, (e3.mode & 1) !== 0);
                      break;
                    case 5:
                      e3.memoizedProps.suppressHydrationWarning !== true && Ms(n.nodeValue, r, (e3.mode & 1) !== 0);
                  }
                  i && (t.flags |= 4);
                } else n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[Ir] = t, t.stateNode = n;
              }
              return xt(t), null;
            case 13:
              if (Ne($e), n = t.memoizedState, e3 === null || e3.memoizedState !== null && e3.memoizedState.dehydrated !== null) {
                if (Te && Kt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) u1(), Ni(), t.flags |= 98560, i = false;
                else if (i = Ls(t), n !== null && n.dehydrated !== null) {
                  if (e3 === null) {
                    if (!i) throw Error(z(318));
                    if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(z(317));
                    i[Ir] = t;
                  } else Ni(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                  xt(t), i = false;
                } else Rr !== null && (Wf(Rr), Rr = null), i = true;
                if (!i) return t.flags & 65536 ? t : null;
              }
              return (t.flags & 128) !== 0 ? (t.lanes = r, t) : (n = n !== null, n !== (e3 !== null && e3.memoizedState !== null) && n && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e3 === null || ($e.current & 1) !== 0 ? et === 0 && (et = 3) : Lh())), t.updateQueue !== null && (t.flags |= 4), xt(t), null);
            case 4:
              return Li(), zf(e3, t), e3 === null && Xo(t.stateNode.containerInfo), xt(t), null;
            case 10:
              return hh(t.type._context), xt(t), null;
            case 17:
              return Vt(t.type) && eu(), xt(t), null;
            case 19:
              if (Ne($e), i = t.memoizedState, i === null) return xt(t), null;
              if (n = (t.flags & 128) !== 0, o = i.rendering, o === null) if (n) Co(i, false);
              else {
                if (et !== 0 || e3 !== null && (e3.flags & 128) !== 0) for (e3 = t.child; e3 !== null; ) {
                  if (o = lu(e3), o !== null) {
                    for (t.flags |= 128, Co(i, false), n = o.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null; ) i = r, e3 = n, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e3, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e3 = o.dependencies, i.dependencies = e3 === null ? null : { lanes: e3.lanes, firstContext: e3.firstContext }), r = r.sibling;
                    return Ce($e, $e.current & 1 | 2), t.child;
                  }
                  e3 = e3.sibling;
                }
                i.tail !== null && We() > _i && (t.flags |= 128, n = true, Co(i, false), t.lanes = 4194304);
              }
              else {
                if (!n) if (e3 = lu(o), e3 !== null) {
                  if (t.flags |= 128, n = true, r = e3.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), Co(i, true), i.tail === null && i.tailMode === "hidden" && !o.alternate && !Te) return xt(t), null;
                } else 2 * We() - i.renderingStartTime > _i && r !== 1073741824 && (t.flags |= 128, n = true, Co(i, false), t.lanes = 4194304);
                i.isBackwards ? (o.sibling = t.child, t.child = o) : (r = i.last, r !== null ? r.sibling = o : t.child = o, i.last = o);
              }
              return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = We(), t.sibling = null, r = $e.current, Ce($e, n ? r & 1 | 2 : r & 1), t) : (xt(t), null);
            case 22:
            case 23:
              return Mh(), n = t.memoizedState !== null, e3 !== null && e3.memoizedState !== null !== n && (t.flags |= 8192), n && (t.mode & 1) !== 0 ? (Gt & 1073741824) !== 0 && (xt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xt(t), null;
            case 24:
              return null;
            case 25:
              return null;
          }
          throw Error(z(156, t.tag));
        }
        function Ek(e3, t) {
          switch (uh(t), t.tag) {
            case 1:
              return Vt(t.type) && eu(), e3 = t.flags, e3 & 65536 ? (t.flags = e3 & -65537 | 128, t) : null;
            case 3:
              return Li(), Ne(Bt), Ne(kt), yh(), e3 = t.flags, (e3 & 65536) !== 0 && (e3 & 128) === 0 ? (t.flags = e3 & -65537 | 128, t) : null;
            case 5:
              return vh(t), null;
            case 13:
              if (Ne($e), e3 = t.memoizedState, e3 !== null && e3.dehydrated !== null) {
                if (t.alternate === null) throw Error(z(340));
                Ni();
              }
              return e3 = t.flags, e3 & 65536 ? (t.flags = e3 & -65537 | 128, t) : null;
            case 19:
              return Ne($e), null;
            case 4:
              return Li(), null;
            case 10:
              return hh(t.type._context), null;
            case 22:
            case 23:
              return Mh(), null;
            case 24:
              return null;
            default:
              return null;
          }
        }
        var Ts = false, bt = false, Rk = typeof WeakSet == "function" ? WeakSet : Set, V = null;
        function yi(e3, t) {
          var r = e3.ref;
          if (r !== null) if (typeof r == "function") try {
            r(null);
          } catch (n) {
            Ie(e3, t, n);
          }
          else r.current = null;
        }
        function Of(e3, t, r) {
          try {
            r();
          } catch (n) {
            Ie(e3, t, n);
          }
        }
        var tv = false;
        function Sk(e3, t) {
          if (bf = Xs, e3 = Xv(), lh(e3)) {
            if ("selectionStart" in e3) var r = { start: e3.selectionStart, end: e3.selectionEnd };
            else e: {
              r = (r = e3.ownerDocument) && r.defaultView || window;
              var n = r.getSelection && r.getSelection();
              if (n && n.rangeCount !== 0) {
                r = n.anchorNode;
                var a = n.anchorOffset, i = n.focusNode;
                n = n.focusOffset;
                try {
                  r.nodeType, i.nodeType;
                } catch {
                  r = null;
                  break e;
                }
                var o = 0, l = -1, s = -1, u = 0, c = 0, d = e3, f = null;
                t: for (; ; ) {
                  for (var p; d !== r || a !== 0 && d.nodeType !== 3 || (l = o + a), d !== i || n !== 0 && d.nodeType !== 3 || (s = o + n), d.nodeType === 3 && (o += d.nodeValue.length), (p = d.firstChild) !== null; ) f = d, d = p;
                  for (; ; ) {
                    if (d === e3) break t;
                    if (f === r && ++u === a && (l = o), f === i && ++c === n && (s = o), (p = d.nextSibling) !== null) break;
                    d = f, f = d.parentNode;
                  }
                  d = p;
                }
                r = l === -1 || s === -1 ? null : { start: l, end: s };
              } else r = null;
            }
            r = r || { start: 0, end: 0 };
          } else r = null;
          for (kf = { focusedElem: e3, selectionRange: r }, Xs = false, V = t; V !== null; ) if (t = V, e3 = t.child, (t.subtreeFlags & 1028) !== 0 && e3 !== null) e3.return = t, V = e3;
          else for (; V !== null; ) {
            t = V;
            try {
              var v = t.alternate;
              if ((t.flags & 1024) !== 0) switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (v !== null) {
                    var y = v.memoizedProps, g = v.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? y : kr(t.type, y), g);
                    m.__reactInternalSnapshotBeforeUpdate = h;
                  }
                  break;
                case 3:
                  var w = t.stateNode.containerInfo;
                  w.nodeType === 1 ? w.textContent = "" : w.nodeType === 9 && w.documentElement && w.removeChild(w.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(z(163));
              }
            } catch (b) {
              Ie(t, t.return, b);
            }
            if (e3 = t.sibling, e3 !== null) {
              e3.return = t.return, V = e3;
              break;
            }
            V = t.return;
          }
          return v = tv, tv = false, v;
        }
        function Io(e3, t, r) {
          var n = t.updateQueue;
          if (n = n !== null ? n.lastEffect : null, n !== null) {
            var a = n = n.next;
            do {
              if ((a.tag & e3) === e3) {
                var i = a.destroy;
                a.destroy = void 0, i !== void 0 && Of(t, r, i);
              }
              a = a.next;
            } while (a !== n);
          }
        }
        function Eu(e3, t) {
          if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
            var r = t = t.next;
            do {
              if ((r.tag & e3) === e3) {
                var n = r.create;
                r.destroy = n();
              }
              r = r.next;
            } while (r !== t);
          }
        }
        function If(e3) {
          var t = e3.ref;
          if (t !== null) {
            var r = e3.stateNode;
            switch (e3.tag) {
              case 5:
                e3 = r;
                break;
              default:
                e3 = r;
            }
            typeof t == "function" ? t(e3) : t.current = e3;
          }
        }
        function Y1(e3) {
          var t = e3.alternate;
          t !== null && (e3.alternate = null, Y1(t)), e3.child = null, e3.deletions = null, e3.sibling = null, e3.tag === 5 && (t = e3.stateNode, t !== null && (delete t[Ir], delete t[Zo], delete t[Sf], delete t[lk], delete t[sk])), e3.stateNode = null, e3.return = null, e3.dependencies = null, e3.memoizedProps = null, e3.memoizedState = null, e3.pendingProps = null, e3.stateNode = null, e3.updateQueue = null;
        }
        function q1(e3) {
          return e3.tag === 5 || e3.tag === 3 || e3.tag === 4;
        }
        function rv(e3) {
          e: for (; ; ) {
            for (; e3.sibling === null; ) {
              if (e3.return === null || q1(e3.return)) return null;
              e3 = e3.return;
            }
            for (e3.sibling.return = e3.return, e3 = e3.sibling; e3.tag !== 5 && e3.tag !== 6 && e3.tag !== 18; ) {
              if (e3.flags & 2 || e3.child === null || e3.tag === 4) continue e;
              e3.child.return = e3, e3 = e3.child;
            }
            if (!(e3.flags & 2)) return e3.stateNode;
          }
        }
        function jf(e3, t, r) {
          var n = e3.tag;
          if (n === 5 || n === 6) e3 = e3.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e3, t) : r.insertBefore(e3, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e3, r)) : (t = r, t.appendChild(e3)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = Js));
          else if (n !== 4 && (e3 = e3.child, e3 !== null)) for (jf(e3, t, r), e3 = e3.sibling; e3 !== null; ) jf(e3, t, r), e3 = e3.sibling;
        }
        function Uf(e3, t, r) {
          var n = e3.tag;
          if (n === 5 || n === 6) e3 = e3.stateNode, t ? r.insertBefore(e3, t) : r.appendChild(e3);
          else if (n !== 4 && (e3 = e3.child, e3 !== null)) for (Uf(e3, t, r), e3 = e3.sibling; e3 !== null; ) Uf(e3, t, r), e3 = e3.sibling;
        }
        var ct = null, Er = false;
        function _n(e3, t, r) {
          for (r = r.child; r !== null; ) G1(e3, t, r), r = r.sibling;
        }
        function G1(e3, t, r) {
          if (jr && typeof jr.onCommitFiberUnmount == "function") try {
            jr.onCommitFiberUnmount(mu, r);
          } catch {
          }
          switch (r.tag) {
            case 5:
              bt || yi(r, t);
            case 6:
              var n = ct, a = Er;
              ct = null, _n(e3, t, r), ct = n, Er = a, ct !== null && (Er ? (e3 = ct, r = r.stateNode, e3.nodeType === 8 ? e3.parentNode.removeChild(r) : e3.removeChild(r)) : ct.removeChild(r.stateNode));
              break;
            case 18:
              ct !== null && (Er ? (e3 = ct, r = r.stateNode, e3.nodeType === 8 ? Bd(e3.parentNode, r) : e3.nodeType === 1 && Bd(e3, r), qo(e3)) : Bd(ct, r.stateNode));
              break;
            case 4:
              n = ct, a = Er, ct = r.stateNode.containerInfo, Er = true, _n(e3, t, r), ct = n, Er = a;
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (!bt && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
                a = n = n.next;
                do {
                  var i = a, o = i.destroy;
                  i = i.tag, o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && Of(r, t, o), a = a.next;
                } while (a !== n);
              }
              _n(e3, t, r);
              break;
            case 1:
              if (!bt && (yi(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function")) try {
                n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount();
              } catch (l) {
                Ie(r, t, l);
              }
              _n(e3, t, r);
              break;
            case 21:
              _n(e3, t, r);
              break;
            case 22:
              r.mode & 1 ? (bt = (n = bt) || r.memoizedState !== null, _n(e3, t, r), bt = n) : _n(e3, t, r);
              break;
            default:
              _n(e3, t, r);
          }
        }
        function nv(e3) {
          var t = e3.updateQueue;
          if (t !== null) {
            e3.updateQueue = null;
            var r = e3.stateNode;
            r === null && (r = e3.stateNode = new Rk()), t.forEach(function(n) {
              var a = Ak.bind(null, e3, n);
              r.has(n) || (r.add(n), n.then(a, a));
            });
          }
        }
        function br(e3, t) {
          var r = t.deletions;
          if (r !== null) for (var n = 0; n < r.length; n++) {
            var a = r[n];
            try {
              var i = e3, o = t, l = o;
              e: for (; l !== null; ) {
                switch (l.tag) {
                  case 5:
                    ct = l.stateNode, Er = false;
                    break e;
                  case 3:
                    ct = l.stateNode.containerInfo, Er = true;
                    break e;
                  case 4:
                    ct = l.stateNode.containerInfo, Er = true;
                    break e;
                }
                l = l.return;
              }
              if (ct === null) throw Error(z(160));
              G1(i, o, a), ct = null, Er = false;
              var s = a.alternate;
              s !== null && (s.return = null), a.return = null;
            } catch (u) {
              Ie(a, t, u);
            }
          }
          if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) K1(t, e3), t = t.sibling;
        }
        function K1(e3, t) {
          var r = e3.alternate, n = e3.flags;
          switch (e3.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if (br(t, e3), zr(e3), n & 4) {
                try {
                  Io(3, e3, e3.return), Eu(3, e3);
                } catch (y) {
                  Ie(e3, e3.return, y);
                }
                try {
                  Io(5, e3, e3.return);
                } catch (y) {
                  Ie(e3, e3.return, y);
                }
              }
              break;
            case 1:
              br(t, e3), zr(e3), n & 512 && r !== null && yi(r, r.return);
              break;
            case 5:
              if (br(t, e3), zr(e3), n & 512 && r !== null && yi(r, r.return), e3.flags & 32) {
                var a = e3.stateNode;
                try {
                  Bo(a, "");
                } catch (y) {
                  Ie(e3, e3.return, y);
                }
              }
              if (n & 4 && (a = e3.stateNode, a != null)) {
                var i = e3.memoizedProps, o = r !== null ? r.memoizedProps : i, l = e3.type, s = e3.updateQueue;
                if (e3.updateQueue = null, s !== null) try {
                  l === "input" && i.type === "radio" && i.name != null && vv(a, i), df(l, o);
                  var u = df(l, i);
                  for (o = 0; o < s.length; o += 2) {
                    var c = s[o], d = s[o + 1];
                    c === "style" ? kv(a, d) : c === "dangerouslySetInnerHTML" ? xv(a, d) : c === "children" ? Bo(a, d) : Gf(a, c, d, u);
                  }
                  switch (l) {
                    case "input":
                      of(a, i);
                      break;
                    case "textarea":
                      yv(a, i);
                      break;
                    case "select":
                      var f = a._wrapperState.wasMultiple;
                      a._wrapperState.wasMultiple = !!i.multiple;
                      var p = i.value;
                      p != null ? xi(a, !!i.multiple, p, false) : f !== !!i.multiple && (i.defaultValue != null ? xi(a, !!i.multiple, i.defaultValue, true) : xi(a, !!i.multiple, i.multiple ? [] : "", false));
                  }
                  a[Zo] = i;
                } catch (y) {
                  Ie(e3, e3.return, y);
                }
              }
              break;
            case 6:
              if (br(t, e3), zr(e3), n & 4) {
                if (e3.stateNode === null) throw Error(z(162));
                a = e3.stateNode, i = e3.memoizedProps;
                try {
                  a.nodeValue = i;
                } catch (y) {
                  Ie(e3, e3.return, y);
                }
              }
              break;
            case 3:
              if (br(t, e3), zr(e3), n & 4 && r !== null && r.memoizedState.isDehydrated) try {
                qo(t.containerInfo);
              } catch (y) {
                Ie(e3, e3.return, y);
              }
              break;
            case 4:
              br(t, e3), zr(e3);
              break;
            case 13:
              br(t, e3), zr(e3), a = e3.child, a.flags & 8192 && (i = a.memoizedState !== null, a.stateNode.isHidden = i, !i || a.alternate !== null && a.alternate.memoizedState !== null || (Dh = We())), n & 4 && nv(e3);
              break;
            case 22:
              if (c = r !== null && r.memoizedState !== null, e3.mode & 1 ? (bt = (u = bt) || c, br(t, e3), bt = u) : br(t, e3), zr(e3), n & 8192) {
                if (u = e3.memoizedState !== null, (e3.stateNode.isHidden = u) && !c && (e3.mode & 1) !== 0) for (V = e3, c = e3.child; c !== null; ) {
                  for (d = V = c; V !== null; ) {
                    switch (f = V, p = f.child, f.tag) {
                      case 0:
                      case 11:
                      case 14:
                      case 15:
                        Io(4, f, f.return);
                        break;
                      case 1:
                        yi(f, f.return);
                        var v = f.stateNode;
                        if (typeof v.componentWillUnmount == "function") {
                          n = f, r = f.return;
                          try {
                            t = n, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                          } catch (y) {
                            Ie(n, r, y);
                          }
                        }
                        break;
                      case 5:
                        yi(f, f.return);
                        break;
                      case 22:
                        if (f.memoizedState !== null) {
                          iv(d);
                          continue;
                        }
                    }
                    p !== null ? (p.return = f, V = p) : iv(d);
                  }
                  c = c.sibling;
                }
                e: for (c = null, d = e3; ; ) {
                  if (d.tag === 5) {
                    if (c === null) {
                      c = d;
                      try {
                        a = d.stateNode, u ? (i = a.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = d.stateNode, s = d.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, l.style.display = bv("display", o));
                      } catch (y) {
                        Ie(e3, e3.return, y);
                      }
                    }
                  } else if (d.tag === 6) {
                    if (c === null) try {
                      d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                    } catch (y) {
                      Ie(e3, e3.return, y);
                    }
                  } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e3) && d.child !== null) {
                    d.child.return = d, d = d.child;
                    continue;
                  }
                  if (d === e3) break e;
                  for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e3) break e;
                    c === d && (c = null), d = d.return;
                  }
                  c === d && (c = null), d.sibling.return = d.return, d = d.sibling;
                }
              }
              break;
            case 19:
              br(t, e3), zr(e3), n & 4 && nv(e3);
              break;
            case 21:
              break;
            default:
              br(t, e3), zr(e3);
          }
        }
        function zr(e3) {
          var t = e3.flags;
          if (t & 2) {
            try {
              e: {
                for (var r = e3.return; r !== null; ) {
                  if (q1(r)) {
                    var n = r;
                    break e;
                  }
                  r = r.return;
                }
                throw Error(z(160));
              }
              switch (n.tag) {
                case 5:
                  var a = n.stateNode;
                  n.flags & 32 && (Bo(a, ""), n.flags &= -33);
                  var i = rv(e3);
                  Uf(e3, i, a);
                  break;
                case 3:
                case 4:
                  var o = n.stateNode.containerInfo, l = rv(e3);
                  jf(e3, l, o);
                  break;
                default:
                  throw Error(z(161));
              }
            } catch (s) {
              Ie(e3, e3.return, s);
            }
            e3.flags &= -3;
          }
          t & 4096 && (e3.flags &= -4097);
        }
        function Ck(e3, t, r) {
          V = e3, X1(e3, t, r);
        }
        function X1(e3, t, r) {
          for (var n = (e3.mode & 1) !== 0; V !== null; ) {
            var a = V, i = a.child;
            if (a.tag === 22 && n) {
              var o = a.memoizedState !== null || Ts;
              if (!o) {
                var l = a.alternate, s = l !== null && l.memoizedState !== null || bt;
                l = Ts;
                var u = bt;
                if (Ts = o, (bt = s) && !u) for (V = a; V !== null; ) o = V, s = o.child, o.tag === 22 && o.memoizedState !== null ? ov(a) : s !== null ? (s.return = o, V = s) : ov(a);
                for (; i !== null; ) V = i, X1(i, t, r), i = i.sibling;
                V = a, Ts = l, bt = u;
              }
              av(e3, t, r);
            } else (a.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = a, V = i) : av(e3, t, r);
          }
        }
        function av(e3) {
          for (; V !== null; ) {
            var t = V;
            if ((t.flags & 8772) !== 0) {
              var r = t.alternate;
              try {
                if ((t.flags & 8772) !== 0) switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                    bt || Eu(5, t);
                    break;
                  case 1:
                    var n = t.stateNode;
                    if (t.flags & 4 && !bt) if (r === null) n.componentDidMount();
                    else {
                      var a = t.elementType === t.type ? r.memoizedProps : kr(t.type, r.memoizedProps);
                      n.componentDidUpdate(a, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
                    }
                    var i = t.updateQueue;
                    i !== null && Hg(t, i, n);
                    break;
                  case 3:
                    var o = t.updateQueue;
                    if (o !== null) {
                      if (r = null, t.child !== null) switch (t.child.tag) {
                        case 5:
                          r = t.child.stateNode;
                          break;
                        case 1:
                          r = t.child.stateNode;
                      }
                      Hg(t, o, r);
                    }
                    break;
                  case 5:
                    var l = t.stateNode;
                    if (r === null && t.flags & 4) {
                      r = l;
                      var s = t.memoizedProps;
                      switch (t.type) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                          s.autoFocus && r.focus();
                          break;
                        case "img":
                          s.src && (r.src = s.src);
                      }
                    }
                    break;
                  case 6:
                    break;
                  case 4:
                    break;
                  case 12:
                    break;
                  case 13:
                    if (t.memoizedState === null) {
                      var u = t.alternate;
                      if (u !== null) {
                        var c = u.memoizedState;
                        if (c !== null) {
                          var d = c.dehydrated;
                          d !== null && qo(d);
                        }
                      }
                    }
                    break;
                  case 19:
                  case 17:
                  case 21:
                  case 22:
                  case 23:
                  case 25:
                    break;
                  default:
                    throw Error(z(163));
                }
                bt || t.flags & 512 && If(t);
              } catch (f) {
                Ie(t, t.return, f);
              }
            }
            if (t === e3) {
              V = null;
              break;
            }
            if (r = t.sibling, r !== null) {
              r.return = t.return, V = r;
              break;
            }
            V = t.return;
          }
        }
        function iv(e3) {
          for (; V !== null; ) {
            var t = V;
            if (t === e3) {
              V = null;
              break;
            }
            var r = t.sibling;
            if (r !== null) {
              r.return = t.return, V = r;
              break;
            }
            V = t.return;
          }
        }
        function ov(e3) {
          for (; V !== null; ) {
            var t = V;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var r = t.return;
                  try {
                    Eu(4, t);
                  } catch (s) {
                    Ie(t, r, s);
                  }
                  break;
                case 1:
                  var n = t.stateNode;
                  if (typeof n.componentDidMount == "function") {
                    var a = t.return;
                    try {
                      n.componentDidMount();
                    } catch (s) {
                      Ie(t, a, s);
                    }
                  }
                  var i = t.return;
                  try {
                    If(t);
                  } catch (s) {
                    Ie(t, i, s);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    If(t);
                  } catch (s) {
                    Ie(t, o, s);
                  }
              }
            } catch (s) {
              Ie(t, t.return, s);
            }
            if (t === e3) {
              V = null;
              break;
            }
            var l = t.sibling;
            if (l !== null) {
              l.return = t.return, V = l;
              break;
            }
            V = t.return;
          }
        }
        var Dk = Math.ceil, cu = hn.ReactCurrentDispatcher, Sh = hn.ReactCurrentOwner, sr = hn.ReactCurrentBatchConfig, pe = 0, rt = null, Ge = null, dt = 0, Gt = 0, wi = Xn(0), et = 0, al = null, Pa = 0, Ru = 0, Ch = 0, jo = null, Ut = null, Dh = 0, _i = 1 / 0, nn = null, du = false, Hf = null, Vn = null, As = false, On = null, fu = 0, Uo = 0, Bf = null, Hs = -1, Bs = 0;
        function At() {
          return (pe & 6) !== 0 ? We() : Hs !== -1 ? Hs : Hs = We();
        }
        function Wn(e3) {
          return (e3.mode & 1) === 0 ? 1 : (pe & 2) !== 0 && dt !== 0 ? dt & -dt : ck.transition !== null ? (Bs === 0 && (Bs = Av()), Bs) : (e3 = ye, e3 !== 0 || (e3 = window.event, e3 = e3 === void 0 ? 16 : Uv(e3.type)), e3);
        }
        function Cr(e3, t, r, n) {
          if (50 < Uo) throw Uo = 0, Bf = null, Error(z(185));
          il(e3, r, n), ((pe & 2) === 0 || e3 !== rt) && (e3 === rt && ((pe & 2) === 0 && (Ru |= r), et === 4 && $n(e3, dt)), Wt(e3, n), r === 1 && pe === 0 && (t.mode & 1) === 0 && (_i = We() + 500, xu && Qn()));
        }
        function Wt(e3, t) {
          var r = e3.callbackNode;
          f6(e3, t);
          var n = Ks(e3, e3 === rt ? dt : 0);
          if (n === 0) r !== null && pg(r), e3.callbackNode = null, e3.callbackPriority = 0;
          else if (t = n & -n, e3.callbackPriority !== t) {
            if (r != null && pg(r), t === 1) e3.tag === 0 ? uk(lv.bind(null, e3)) : o1(lv.bind(null, e3)), ik(function() {
              (pe & 6) === 0 && Qn();
            }), r = null;
            else {
              switch (Fv(n)) {
                case 1:
                  r = Jf;
                  break;
                case 4:
                  r = _v;
                  break;
                case 16:
                  r = Gs;
                  break;
                case 536870912:
                  r = Tv;
                  break;
                default:
                  r = Gs;
              }
              r = ay(r, Q1.bind(null, e3));
            }
            e3.callbackPriority = t, e3.callbackNode = r;
          }
        }
        function Q1(e3, t) {
          if (Hs = -1, Bs = 0, (pe & 6) !== 0) throw Error(z(327));
          var r = e3.callbackNode;
          if (Si() && e3.callbackNode !== r) return null;
          var n = Ks(e3, e3 === rt ? dt : 0);
          if (n === 0) return null;
          if ((n & 30) !== 0 || (n & e3.expiredLanes) !== 0 || t) t = hu(e3, n);
          else {
            t = n;
            var a = pe;
            pe |= 2;
            var i = J1();
            (rt !== e3 || dt !== t) && (nn = null, _i = We() + 500, Ca(e3, t));
            do
              try {
                Lk();
                break;
              } catch (l) {
                Z1(e3, l);
              }
            while (true);
            fh(), cu.current = i, pe = a, Ge !== null ? t = 0 : (rt = null, dt = 0, t = et);
          }
          if (t !== 0) {
            if (t === 2 && (a = gf(e3), a !== 0 && (n = a, t = Vf(e3, a))), t === 1) throw r = al, Ca(e3, 0), $n(e3, n), Wt(e3, We()), r;
            if (t === 6) $n(e3, n);
            else {
              if (a = e3.current.alternate, (n & 30) === 0 && !Nk(a) && (t = hu(e3, n), t === 2 && (i = gf(e3), i !== 0 && (n = i, t = Vf(e3, i))), t === 1)) throw r = al, Ca(e3, 0), $n(e3, n), Wt(e3, We()), r;
              switch (e3.finishedWork = a, e3.finishedLanes = n, t) {
                case 0:
                case 1:
                  throw Error(z(345));
                case 2:
                  ka(e3, Ut, nn);
                  break;
                case 3:
                  if ($n(e3, n), (n & 130023424) === n && (t = Dh + 500 - We(), 10 < t)) {
                    if (Ks(e3, 0) !== 0) break;
                    if (a = e3.suspendedLanes, (a & n) !== n) {
                      At(), e3.pingedLanes |= e3.suspendedLanes & a;
                      break;
                    }
                    e3.timeoutHandle = Rf(ka.bind(null, e3, Ut, nn), t);
                    break;
                  }
                  ka(e3, Ut, nn);
                  break;
                case 4:
                  if ($n(e3, n), (n & 4194240) === n) break;
                  for (t = e3.eventTimes, a = -1; 0 < n; ) {
                    var o = 31 - Sr(n);
                    i = 1 << o, o = t[o], o > a && (a = o), n &= ~i;
                  }
                  if (n = a, n = We() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Dk(n / 1960)) - n, 10 < n) {
                    e3.timeoutHandle = Rf(ka.bind(null, e3, Ut, nn), n);
                    break;
                  }
                  ka(e3, Ut, nn);
                  break;
                case 5:
                  ka(e3, Ut, nn);
                  break;
                default:
                  throw Error(z(329));
              }
            }
          }
          return Wt(e3, We()), e3.callbackNode === r ? Q1.bind(null, e3) : null;
        }
        function Vf(e3, t) {
          var r = jo;
          return e3.current.memoizedState.isDehydrated && (Ca(e3, t).flags |= 256), e3 = hu(e3, t), e3 !== 2 && (t = Ut, Ut = r, t !== null && Wf(t)), e3;
        }
        function Wf(e3) {
          Ut === null ? Ut = e3 : Ut.push.apply(Ut, e3);
        }
        function Nk(e3) {
          for (var t = e3; ; ) {
            if (t.flags & 16384) {
              var r = t.updateQueue;
              if (r !== null && (r = r.stores, r !== null)) for (var n = 0; n < r.length; n++) {
                var a = r[n], i = a.getSnapshot;
                a = a.value;
                try {
                  if (!Dr(i(), a)) return false;
                } catch {
                  return false;
                }
              }
            }
            if (r = t.child, t.subtreeFlags & 16384 && r !== null) r.return = t, t = r;
            else {
              if (t === e3) break;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e3) return true;
                t = t.return;
              }
              t.sibling.return = t.return, t = t.sibling;
            }
          }
          return true;
        }
        function $n(e3, t) {
          for (t &= ~Ch, t &= ~Ru, e3.suspendedLanes |= t, e3.pingedLanes &= ~t, e3 = e3.expirationTimes; 0 < t; ) {
            var r = 31 - Sr(t), n = 1 << r;
            e3[r] = -1, t &= ~n;
          }
        }
        function lv(e3) {
          if ((pe & 6) !== 0) throw Error(z(327));
          Si();
          var t = Ks(e3, 0);
          if ((t & 1) === 0) return Wt(e3, We()), null;
          var r = hu(e3, t);
          if (e3.tag !== 0 && r === 2) {
            var n = gf(e3);
            n !== 0 && (t = n, r = Vf(e3, n));
          }
          if (r === 1) throw r = al, Ca(e3, 0), $n(e3, t), Wt(e3, We()), r;
          if (r === 6) throw Error(z(345));
          return e3.finishedWork = e3.current.alternate, e3.finishedLanes = t, ka(e3, Ut, nn), Wt(e3, We()), null;
        }
        function Nh(e3, t) {
          var r = pe;
          pe |= 1;
          try {
            return e3(t);
          } finally {
            pe = r, pe === 0 && (_i = We() + 500, xu && Qn());
          }
        }
        function _a(e3) {
          On !== null && On.tag === 0 && (pe & 6) === 0 && Si();
          var t = pe;
          pe |= 1;
          var r = sr.transition, n = ye;
          try {
            if (sr.transition = null, ye = 1, e3) return e3();
          } finally {
            ye = n, sr.transition = r, pe = t, (pe & 6) === 0 && Qn();
          }
        }
        function Mh() {
          Gt = wi.current, Ne(wi);
        }
        function Ca(e3, t) {
          e3.finishedWork = null, e3.finishedLanes = 0;
          var r = e3.timeoutHandle;
          if (r !== -1 && (e3.timeoutHandle = -1, ak(r)), Ge !== null) for (r = Ge.return; r !== null; ) {
            var n = r;
            switch (uh(n), n.tag) {
              case 1:
                n = n.type.childContextTypes, n != null && eu();
                break;
              case 3:
                Li(), Ne(Bt), Ne(kt), yh();
                break;
              case 5:
                vh(n);
                break;
              case 4:
                Li();
                break;
              case 13:
                Ne($e);
                break;
              case 19:
                Ne($e);
                break;
              case 10:
                hh(n.type._context);
                break;
              case 22:
              case 23:
                Mh();
            }
            r = r.return;
          }
          if (rt = e3, Ge = e3 = Yn(e3.current, null), dt = Gt = t, et = 0, al = null, Ch = Ru = Pa = 0, Ut = jo = null, Ra !== null) {
            for (t = 0; t < Ra.length; t++) if (r = Ra[t], n = r.interleaved, n !== null) {
              r.interleaved = null;
              var a = n.next, i = r.pending;
              if (i !== null) {
                var o = i.next;
                i.next = a, n.next = o;
              }
              r.pending = n;
            }
            Ra = null;
          }
          return e3;
        }
        function Z1(e3, t) {
          do {
            var r = Ge;
            try {
              if (fh(), Is.current = uu, su) {
                for (var n = ze.memoizedState; n !== null; ) {
                  var a = n.queue;
                  a !== null && (a.pending = null), n = n.next;
                }
                su = false;
              }
              if (La = 0, tt = Je = ze = null, Oo = false, tl = 0, Sh.current = null, r === null || r.return === null) {
                et = 1, al = t, Ge = null;
                break;
              }
              e: {
                var i = e3, o = r.return, l = r, s = t;
                if (t = dt, l.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
                  var u = s, c = l, d = c.tag;
                  if ((c.mode & 1) === 0 && (d === 0 || d === 11 || d === 15)) {
                    var f = c.alternate;
                    f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
                  }
                  var p = Gg(o);
                  if (p !== null) {
                    p.flags &= -257, Kg(p, o, l, i, t), p.mode & 1 && qg(i, u, t), t = p, s = u;
                    var v = t.updateQueue;
                    if (v === null) {
                      var y = /* @__PURE__ */ new Set();
                      y.add(s), t.updateQueue = y;
                    } else v.add(s);
                    break e;
                  } else {
                    if ((t & 1) === 0) {
                      qg(i, u, t), Lh();
                      break e;
                    }
                    s = Error(z(426));
                  }
                } else if (Te && l.mode & 1) {
                  var g = Gg(o);
                  if (g !== null) {
                    (g.flags & 65536) === 0 && (g.flags |= 256), Kg(g, o, l, i, t), ch(Pi(s, l));
                    break e;
                  }
                }
                i = s = Pi(s, l), et !== 4 && (et = 2), jo === null ? jo = [i] : jo.push(i), i = o;
                do {
                  switch (i.tag) {
                    case 3:
                      i.flags |= 65536, t &= -t, i.lanes |= t;
                      var m = F1(i, s, t);
                      Ug(i, m);
                      break e;
                    case 1:
                      l = s;
                      var h = i.type, w = i.stateNode;
                      if ((i.flags & 128) === 0 && (typeof h.getDerivedStateFromError == "function" || w !== null && typeof w.componentDidCatch == "function" && (Vn === null || !Vn.has(w)))) {
                        i.flags |= 65536, t &= -t, i.lanes |= t;
                        var b = $1(i, l, t);
                        Ug(i, b);
                        break e;
                      }
                  }
                  i = i.return;
                } while (i !== null);
              }
              ty(r);
            } catch (E) {
              t = E, Ge === r && r !== null && (Ge = r = r.return);
              continue;
            }
            break;
          } while (true);
        }
        function J1() {
          var e3 = cu.current;
          return cu.current = uu, e3 === null ? uu : e3;
        }
        function Lh() {
          (et === 0 || et === 3 || et === 2) && (et = 4), rt === null || (Pa & 268435455) === 0 && (Ru & 268435455) === 0 || $n(rt, dt);
        }
        function hu(e3, t) {
          var r = pe;
          pe |= 2;
          var n = J1();
          (rt !== e3 || dt !== t) && (nn = null, Ca(e3, t));
          do
            try {
              Mk();
              break;
            } catch (a) {
              Z1(e3, a);
            }
          while (true);
          if (fh(), pe = r, cu.current = n, Ge !== null) throw Error(z(261));
          return rt = null, dt = 0, et;
        }
        function Mk() {
          for (; Ge !== null; ) ey(Ge);
        }
        function Lk() {
          for (; Ge !== null && !n6(); ) ey(Ge);
        }
        function ey(e3) {
          var t = ny(e3.alternate, e3, Gt);
          e3.memoizedProps = e3.pendingProps, t === null ? ty(e3) : Ge = t, Sh.current = null;
        }
        function ty(e3) {
          var t = e3;
          do {
            var r = t.alternate;
            if (e3 = t.return, (t.flags & 32768) === 0) {
              if (r = kk(r, t, Gt), r !== null) {
                Ge = r;
                return;
              }
            } else {
              if (r = Ek(r, t), r !== null) {
                r.flags &= 32767, Ge = r;
                return;
              }
              if (e3 !== null) e3.flags |= 32768, e3.subtreeFlags = 0, e3.deletions = null;
              else {
                et = 6, Ge = null;
                return;
              }
            }
            if (t = t.sibling, t !== null) {
              Ge = t;
              return;
            }
            Ge = t = e3;
          } while (t !== null);
          et === 0 && (et = 5);
        }
        function ka(e3, t, r) {
          var n = ye, a = sr.transition;
          try {
            sr.transition = null, ye = 1, Pk(e3, t, r, n);
          } finally {
            sr.transition = a, ye = n;
          }
          return null;
        }
        function Pk(e3, t, r, n) {
          do
            Si();
          while (On !== null);
          if ((pe & 6) !== 0) throw Error(z(327));
          r = e3.finishedWork;
          var a = e3.finishedLanes;
          if (r === null) return null;
          if (e3.finishedWork = null, e3.finishedLanes = 0, r === e3.current) throw Error(z(177));
          e3.callbackNode = null, e3.callbackPriority = 0;
          var i = r.lanes | r.childLanes;
          if (h6(e3, i), e3 === rt && (Ge = rt = null, dt = 0), (r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0 || As || (As = true, ay(Gs, function() {
            return Si(), null;
          })), i = (r.flags & 15990) !== 0, (r.subtreeFlags & 15990) !== 0 || i) {
            i = sr.transition, sr.transition = null;
            var o = ye;
            ye = 1;
            var l = pe;
            pe |= 4, Sh.current = null, Sk(e3, r), K1(r, e3), J6(kf), Xs = !!bf, kf = bf = null, e3.current = r, Ck(r, e3, a), a6(), pe = l, ye = o, sr.transition = i;
          } else e3.current = r;
          if (As && (As = false, On = e3, fu = a), i = e3.pendingLanes, i === 0 && (Vn = null), l6(r.stateNode, n), Wt(e3, We()), t !== null) for (n = e3.onRecoverableError, r = 0; r < t.length; r++) a = t[r], n(a.value, { componentStack: a.stack, digest: a.digest });
          if (du) throw du = false, e3 = Hf, Hf = null, e3;
          return (fu & 1) !== 0 && e3.tag !== 0 && Si(), i = e3.pendingLanes, (i & 1) !== 0 ? e3 === Bf ? Uo++ : (Uo = 0, Bf = e3) : Uo = 0, Qn(), null;
        }
        function Si() {
          if (On !== null) {
            var e3 = Fv(fu), t = sr.transition, r = ye;
            try {
              if (sr.transition = null, ye = 16 > e3 ? 16 : e3, On === null) var n = false;
              else {
                if (e3 = On, On = null, fu = 0, (pe & 6) !== 0) throw Error(z(331));
                var a = pe;
                for (pe |= 4, V = e3.current; V !== null; ) {
                  var i = V, o = i.child;
                  if ((V.flags & 16) !== 0) {
                    var l = i.deletions;
                    if (l !== null) {
                      for (var s = 0; s < l.length; s++) {
                        var u = l[s];
                        for (V = u; V !== null; ) {
                          var c = V;
                          switch (c.tag) {
                            case 0:
                            case 11:
                            case 15:
                              Io(8, c, i);
                          }
                          var d = c.child;
                          if (d !== null) d.return = c, V = d;
                          else for (; V !== null; ) {
                            c = V;
                            var f = c.sibling, p = c.return;
                            if (Y1(c), c === u) {
                              V = null;
                              break;
                            }
                            if (f !== null) {
                              f.return = p, V = f;
                              break;
                            }
                            V = p;
                          }
                        }
                      }
                      var v = i.alternate;
                      if (v !== null) {
                        var y = v.child;
                        if (y !== null) {
                          v.child = null;
                          do {
                            var g = y.sibling;
                            y.sibling = null, y = g;
                          } while (y !== null);
                        }
                      }
                      V = i;
                    }
                  }
                  if ((i.subtreeFlags & 2064) !== 0 && o !== null) o.return = i, V = o;
                  else e: for (; V !== null; ) {
                    if (i = V, (i.flags & 2048) !== 0) switch (i.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Io(9, i, i.return);
                    }
                    var m = i.sibling;
                    if (m !== null) {
                      m.return = i.return, V = m;
                      break e;
                    }
                    V = i.return;
                  }
                }
                var h = e3.current;
                for (V = h; V !== null; ) {
                  o = V;
                  var w = o.child;
                  if ((o.subtreeFlags & 2064) !== 0 && w !== null) w.return = o, V = w;
                  else e: for (o = h; V !== null; ) {
                    if (l = V, (l.flags & 2048) !== 0) try {
                      switch (l.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Eu(9, l);
                      }
                    } catch (E) {
                      Ie(l, l.return, E);
                    }
                    if (l === o) {
                      V = null;
                      break e;
                    }
                    var b = l.sibling;
                    if (b !== null) {
                      b.return = l.return, V = b;
                      break e;
                    }
                    V = l.return;
                  }
                }
                if (pe = a, Qn(), jr && typeof jr.onPostCommitFiberRoot == "function") try {
                  jr.onPostCommitFiberRoot(mu, e3);
                } catch {
                }
                n = true;
              }
              return n;
            } finally {
              ye = r, sr.transition = t;
            }
          }
          return false;
        }
        function sv(e3, t, r) {
          t = Pi(r, t), t = F1(e3, t, 1), e3 = Bn(e3, t, 1), t = At(), e3 !== null && (il(e3, 1, t), Wt(e3, t));
        }
        function Ie(e3, t, r) {
          if (e3.tag === 3) sv(e3, e3, r);
          else for (; t !== null; ) {
            if (t.tag === 3) {
              sv(t, e3, r);
              break;
            } else if (t.tag === 1) {
              var n = t.stateNode;
              if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Vn === null || !Vn.has(n))) {
                e3 = Pi(r, e3), e3 = $1(t, e3, 1), t = Bn(t, e3, 1), e3 = At(), t !== null && (il(t, 1, e3), Wt(t, e3));
                break;
              }
            }
            t = t.return;
          }
        }
        function _k(e3, t, r) {
          var n = e3.pingCache;
          n !== null && n.delete(t), t = At(), e3.pingedLanes |= e3.suspendedLanes & r, rt === e3 && (dt & r) === r && (et === 4 || et === 3 && (dt & 130023424) === dt && 500 > We() - Dh ? Ca(e3, 0) : Ch |= r), Wt(e3, t);
        }
        function ry(e3, t) {
          t === 0 && ((e3.mode & 1) === 0 ? t = 1 : (t = xs, xs <<= 1, (xs & 130023424) === 0 && (xs = 4194304)));
          var r = At();
          e3 = dn(e3, t), e3 !== null && (il(e3, t, r), Wt(e3, r));
        }
        function Tk(e3) {
          var t = e3.memoizedState, r = 0;
          t !== null && (r = t.retryLane), ry(e3, r);
        }
        function Ak(e3, t) {
          var r = 0;
          switch (e3.tag) {
            case 13:
              var n = e3.stateNode, a = e3.memoizedState;
              a !== null && (r = a.retryLane);
              break;
            case 19:
              n = e3.stateNode;
              break;
            default:
              throw Error(z(314));
          }
          n !== null && n.delete(t), ry(e3, r);
        }
        var ny;
        ny = function(e3, t, r) {
          if (e3 !== null) if (e3.memoizedProps !== t.pendingProps || Bt.current) Ht = true;
          else {
            if ((e3.lanes & r) === 0 && (t.flags & 128) === 0) return Ht = false, bk(e3, t, r);
            Ht = (e3.flags & 131072) !== 0;
          }
          else Ht = false, Te && (t.flags & 1048576) !== 0 && l1(t, nu, t.index);
          switch (t.lanes = 0, t.tag) {
            case 2:
              var n = t.type;
              Us(e3, t), e3 = t.pendingProps;
              var a = Di(t, kt.current);
              Ri(t, r), a = xh(null, t, n, e3, a, r);
              var i = bh();
              return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Vt(n) ? (i = true, tu(t)) : i = false, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, mh(t), a.updater = ku, t.stateNode = a, a._reactInternals = t, Pf(t, n, e3, r), t = Af(null, t, n, true, i, r)) : (t.tag = 0, Te && i && sh(t), Tt(null, t, a, r), t = t.child), t;
            case 16:
              n = t.elementType;
              e: {
                switch (Us(e3, t), e3 = t.pendingProps, a = n._init, n = a(n._payload), t.type = n, a = t.tag = $k(n), e3 = kr(n, e3), a) {
                  case 0:
                    t = Tf(null, t, n, e3, r);
                    break e;
                  case 1:
                    t = Zg(null, t, n, e3, r);
                    break e;
                  case 11:
                    t = Xg(null, t, n, e3, r);
                    break e;
                  case 14:
                    t = Qg(null, t, n, kr(n.type, e3), r);
                    break e;
                }
                throw Error(z(306, n, ""));
              }
              return t;
            case 0:
              return n = t.type, a = t.pendingProps, a = t.elementType === n ? a : kr(n, a), Tf(e3, t, n, a, r);
            case 1:
              return n = t.type, a = t.pendingProps, a = t.elementType === n ? a : kr(n, a), Zg(e3, t, n, a, r);
            case 3:
              e: {
                if (j1(t), e3 === null) throw Error(z(387));
                n = t.pendingProps, i = t.memoizedState, a = i.element, h1(e3, t), ou(t, n, null, r);
                var o = t.memoizedState;
                if (n = o.element, i.isDehydrated) if (i = { element: n, isDehydrated: false, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                  a = Pi(Error(z(423)), t), t = Jg(e3, t, n, r, a);
                  break e;
                } else if (n !== a) {
                  a = Pi(Error(z(424)), t), t = Jg(e3, t, n, r, a);
                  break e;
                } else for (Kt = Hn(t.stateNode.containerInfo.firstChild), Xt = t, Te = true, Rr = null, r = d1(t, null, n, r), t.child = r; r; ) r.flags = r.flags & -3 | 4096, r = r.sibling;
                else {
                  if (Ni(), n === a) {
                    t = fn(e3, t, r);
                    break e;
                  }
                  Tt(e3, t, n, r);
                }
                t = t.child;
              }
              return t;
            case 5:
              return p1(t), e3 === null && Nf(t), n = t.type, a = t.pendingProps, i = e3 !== null ? e3.memoizedProps : null, o = a.children, Ef(n, a) ? o = null : i !== null && Ef(n, i) && (t.flags |= 32), I1(e3, t), Tt(e3, t, o, r), t.child;
            case 6:
              return e3 === null && Nf(t), null;
            case 13:
              return U1(e3, t, r);
            case 4:
              return gh(t, t.stateNode.containerInfo), n = t.pendingProps, e3 === null ? t.child = Mi(t, null, n, r) : Tt(e3, t, n, r), t.child;
            case 11:
              return n = t.type, a = t.pendingProps, a = t.elementType === n ? a : kr(n, a), Xg(e3, t, n, a, r);
            case 7:
              return Tt(e3, t, t.pendingProps, r), t.child;
            case 8:
              return Tt(e3, t, t.pendingProps.children, r), t.child;
            case 12:
              return Tt(e3, t, t.pendingProps.children, r), t.child;
            case 10:
              e: {
                if (n = t.type._context, a = t.pendingProps, i = t.memoizedProps, o = a.value, Ce(au, n._currentValue), n._currentValue = o, i !== null) if (Dr(i.value, o)) {
                  if (i.children === a.children && !Bt.current) {
                    t = fn(e3, t, r);
                    break e;
                  }
                } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                  var l = i.dependencies;
                  if (l !== null) {
                    o = i.child;
                    for (var s = l.firstContext; s !== null; ) {
                      if (s.context === n) {
                        if (i.tag === 1) {
                          s = sn(-1, r & -r), s.tag = 2;
                          var u = i.updateQueue;
                          if (u !== null) {
                            u = u.shared;
                            var c = u.pending;
                            c === null ? s.next = s : (s.next = c.next, c.next = s), u.pending = s;
                          }
                        }
                        i.lanes |= r, s = i.alternate, s !== null && (s.lanes |= r), Mf(i.return, r, t), l.lanes |= r;
                        break;
                      }
                      s = s.next;
                    }
                  } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
                  else if (i.tag === 18) {
                    if (o = i.return, o === null) throw Error(z(341));
                    o.lanes |= r, l = o.alternate, l !== null && (l.lanes |= r), Mf(o, r, t), o = i.sibling;
                  } else o = i.child;
                  if (o !== null) o.return = i;
                  else for (o = i; o !== null; ) {
                    if (o === t) {
                      o = null;
                      break;
                    }
                    if (i = o.sibling, i !== null) {
                      i.return = o.return, o = i;
                      break;
                    }
                    o = o.return;
                  }
                  i = o;
                }
                Tt(e3, t, a.children, r), t = t.child;
              }
              return t;
            case 9:
              return a = t.type, n = t.pendingProps.children, Ri(t, r), a = ur(a), n = n(a), t.flags |= 1, Tt(e3, t, n, r), t.child;
            case 14:
              return n = t.type, a = kr(n, t.pendingProps), a = kr(n.type, a), Qg(e3, t, n, a, r);
            case 15:
              return z1(e3, t, t.type, t.pendingProps, r);
            case 17:
              return n = t.type, a = t.pendingProps, a = t.elementType === n ? a : kr(n, a), Us(e3, t), t.tag = 1, Vt(n) ? (e3 = true, tu(t)) : e3 = false, Ri(t, r), A1(t, n, a), Pf(t, n, a, r), Af(null, t, n, true, e3, r);
            case 19:
              return H1(e3, t, r);
            case 22:
              return O1(e3, t, r);
          }
          throw Error(z(156, t.tag));
        };
        function ay(e3, t) {
          return Pv(e3, t);
        }
        function Fk(e3, t, r, n) {
          this.tag = e3, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function lr(e3, t, r, n) {
          return new Fk(e3, t, r, n);
        }
        function Ph(e3) {
          return e3 = e3.prototype, !(!e3 || !e3.isReactComponent);
        }
        function $k(e3) {
          if (typeof e3 == "function") return Ph(e3) ? 1 : 0;
          if (e3 != null) {
            if (e3 = e3.$$typeof, e3 === Xf) return 11;
            if (e3 === Qf) return 14;
          }
          return 2;
        }
        function Yn(e3, t) {
          var r = e3.alternate;
          return r === null ? (r = lr(e3.tag, t, e3.key, e3.mode), r.elementType = e3.elementType, r.type = e3.type, r.stateNode = e3.stateNode, r.alternate = e3, e3.alternate = r) : (r.pendingProps = t, r.type = e3.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e3.flags & 14680064, r.childLanes = e3.childLanes, r.lanes = e3.lanes, r.child = e3.child, r.memoizedProps = e3.memoizedProps, r.memoizedState = e3.memoizedState, r.updateQueue = e3.updateQueue, t = e3.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e3.sibling, r.index = e3.index, r.ref = e3.ref, r;
        }
        function Vs(e3, t, r, n, a, i) {
          var o = 2;
          if (n = e3, typeof e3 == "function") Ph(e3) && (o = 1);
          else if (typeof e3 == "string") o = 5;
          else e: switch (e3) {
            case ui:
              return Da(r.children, a, i, t);
            case Kf:
              o = 8, a |= 8;
              break;
            case ef:
              return e3 = lr(12, r, t, a | 2), e3.elementType = ef, e3.lanes = i, e3;
            case tf:
              return e3 = lr(13, r, t, a), e3.elementType = tf, e3.lanes = i, e3;
            case rf:
              return e3 = lr(19, r, t, a), e3.elementType = rf, e3.lanes = i, e3;
            case pv:
              return Su(r, a, i, t);
            default:
              if (typeof e3 == "object" && e3 !== null) switch (e3.$$typeof) {
                case fv:
                  o = 10;
                  break e;
                case hv:
                  o = 9;
                  break e;
                case Xf:
                  o = 11;
                  break e;
                case Qf:
                  o = 14;
                  break e;
                case Tn:
                  o = 16, n = null;
                  break e;
              }
              throw Error(z(130, e3 == null ? e3 : typeof e3, ""));
          }
          return t = lr(o, r, t, a), t.elementType = e3, t.type = n, t.lanes = i, t;
        }
        function Da(e3, t, r, n) {
          return e3 = lr(7, e3, n, t), e3.lanes = r, e3;
        }
        function Su(e3, t, r, n) {
          return e3 = lr(22, e3, n, t), e3.elementType = pv, e3.lanes = r, e3.stateNode = { isHidden: false }, e3;
        }
        function Qd(e3, t, r) {
          return e3 = lr(6, e3, null, t), e3.lanes = r, e3;
        }
        function Zd(e3, t, r) {
          return t = lr(4, e3.children !== null ? e3.children : [], e3.key, t), t.lanes = r, t.stateNode = { containerInfo: e3.containerInfo, pendingChildren: null, implementation: e3.implementation }, t;
        }
        function zk(e3, t, r, n, a) {
          this.tag = t, this.containerInfo = e3, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Fd(0), this.expirationTimes = Fd(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fd(0), this.identifierPrefix = n, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
        }
        function _h(e3, t, r, n, a, i, o, l, s) {
          return e3 = new zk(e3, t, r, l, s), t === 1 ? (t = 1, i === true && (t |= 8)) : t = 0, i = lr(3, null, null, t), e3.current = i, i.stateNode = e3, i.memoizedState = { element: n, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, mh(i), e3;
        }
        function Ok(e3, t, r) {
          var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
          return { $$typeof: si, key: n == null ? null : "" + n, children: e3, containerInfo: t, implementation: r };
        }
        function iy(e3) {
          if (!e3) return Gn;
          e3 = e3._reactInternals;
          e: {
            if (Aa(e3) !== e3 || e3.tag !== 1) throw Error(z(170));
            var t = e3;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Vt(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (t !== null);
            throw Error(z(171));
          }
          if (e3.tag === 1) {
            var r = e3.type;
            if (Vt(r)) return i1(e3, r, t);
          }
          return t;
        }
        function oy(e3, t, r, n, a, i, o, l, s) {
          return e3 = _h(r, n, true, e3, a, i, o, l, s), e3.context = iy(null), r = e3.current, n = At(), a = Wn(r), i = sn(n, a), i.callback = t ?? null, Bn(r, i, a), e3.current.lanes = a, il(e3, a, n), Wt(e3, n), e3;
        }
        function Cu(e3, t, r, n) {
          var a = t.current, i = At(), o = Wn(a);
          return r = iy(r), t.context === null ? t.context = r : t.pendingContext = r, t = sn(i, o), t.payload = { element: e3 }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e3 = Bn(a, t, o), e3 !== null && (Cr(e3, a, o, i), Os(e3, a, o)), o;
        }
        function pu(e3) {
          if (e3 = e3.current, !e3.child) return null;
          switch (e3.child.tag) {
            case 5:
              return e3.child.stateNode;
            default:
              return e3.child.stateNode;
          }
        }
        function uv(e3, t) {
          if (e3 = e3.memoizedState, e3 !== null && e3.dehydrated !== null) {
            var r = e3.retryLane;
            e3.retryLane = r !== 0 && r < t ? r : t;
          }
        }
        function Th(e3, t) {
          uv(e3, t), (e3 = e3.alternate) && uv(e3, t);
        }
        function Ik() {
          return null;
        }
        var ly = typeof reportError == "function" ? reportError : function(e3) {
          console.error(e3);
        };
        function Ah(e3) {
          this._internalRoot = e3;
        }
        Du.prototype.render = Ah.prototype.render = function(e3) {
          var t = this._internalRoot;
          if (t === null) throw Error(z(409));
          Cu(e3, t, null, null);
        };
        Du.prototype.unmount = Ah.prototype.unmount = function() {
          var e3 = this._internalRoot;
          if (e3 !== null) {
            this._internalRoot = null;
            var t = e3.containerInfo;
            _a(function() {
              Cu(null, e3, null, null);
            }), t[cn] = null;
          }
        };
        function Du(e3) {
          this._internalRoot = e3;
        }
        Du.prototype.unstable_scheduleHydration = function(e3) {
          if (e3) {
            var t = Ov();
            e3 = { blockedOn: null, target: e3, priority: t };
            for (var r = 0; r < Fn.length && t !== 0 && t < Fn[r].priority; r++) ;
            Fn.splice(r, 0, e3), r === 0 && jv(e3);
          }
        };
        function Fh(e3) {
          return !(!e3 || e3.nodeType !== 1 && e3.nodeType !== 9 && e3.nodeType !== 11);
        }
        function Nu(e3) {
          return !(!e3 || e3.nodeType !== 1 && e3.nodeType !== 9 && e3.nodeType !== 11 && (e3.nodeType !== 8 || e3.nodeValue !== " react-mount-point-unstable "));
        }
        function cv() {
        }
        function jk(e3, t, r, n, a) {
          if (a) {
            if (typeof n == "function") {
              var i = n;
              n = function() {
                var u = pu(o);
                i.call(u);
              };
            }
            var o = oy(t, n, e3, 0, null, false, false, "", cv);
            return e3._reactRootContainer = o, e3[cn] = o.current, Xo(e3.nodeType === 8 ? e3.parentNode : e3), _a(), o;
          }
          for (; a = e3.lastChild; ) e3.removeChild(a);
          if (typeof n == "function") {
            var l = n;
            n = function() {
              var u = pu(s);
              l.call(u);
            };
          }
          var s = _h(e3, 0, false, null, null, false, false, "", cv);
          return e3._reactRootContainer = s, e3[cn] = s.current, Xo(e3.nodeType === 8 ? e3.parentNode : e3), _a(function() {
            Cu(t, s, r, n);
          }), s;
        }
        function Mu(e3, t, r, n, a) {
          var i = r._reactRootContainer;
          if (i) {
            var o = i;
            if (typeof a == "function") {
              var l = a;
              a = function() {
                var s = pu(o);
                l.call(s);
              };
            }
            Cu(t, o, e3, a);
          } else o = jk(r, t, e3, a, n);
          return pu(o);
        }
        $v = function(e3) {
          switch (e3.tag) {
            case 3:
              var t = e3.stateNode;
              if (t.current.memoizedState.isDehydrated) {
                var r = Po(t.pendingLanes);
                r !== 0 && (eh(t, r | 1), Wt(t, We()), (pe & 6) === 0 && (_i = We() + 500, Qn()));
              }
              break;
            case 13:
              _a(function() {
                var n = dn(e3, 1);
                if (n !== null) {
                  var a = At();
                  Cr(n, e3, 1, a);
                }
              }), Th(e3, 1);
          }
        };
        th = function(e3) {
          if (e3.tag === 13) {
            var t = dn(e3, 134217728);
            if (t !== null) {
              var r = At();
              Cr(t, e3, 134217728, r);
            }
            Th(e3, 134217728);
          }
        };
        zv = function(e3) {
          if (e3.tag === 13) {
            var t = Wn(e3), r = dn(e3, t);
            if (r !== null) {
              var n = At();
              Cr(r, e3, t, n);
            }
            Th(e3, t);
          }
        };
        Ov = function() {
          return ye;
        };
        Iv = function(e3, t) {
          var r = ye;
          try {
            return ye = e3, t();
          } finally {
            ye = r;
          }
        };
        hf = function(e3, t, r) {
          switch (t) {
            case "input":
              if (of(e3, r), t = r.name, r.type === "radio" && t != null) {
                for (r = e3; r.parentNode; ) r = r.parentNode;
                for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
                  var n = r[t];
                  if (n !== e3 && n.form === e3.form) {
                    var a = wu(n);
                    if (!a) throw Error(z(90));
                    gv(n), of(n, a);
                  }
                }
              }
              break;
            case "textarea":
              yv(e3, r);
              break;
            case "select":
              t = r.value, t != null && xi(e3, !!r.multiple, t, false);
          }
        };
        Sv = Nh;
        Cv = _a;
        var Uk = { usingClientEntryPoint: false, Events: [ll, hi, wu, Ev, Rv, Nh] }, Do = { findFiberByHostInstance: Ea, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Hk = { bundleType: Do.bundleType, version: Do.version, rendererPackageName: Do.rendererPackageName, rendererConfig: Do.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: hn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e3) {
          return e3 = Mv(e3), e3 === null ? null : e3.stateNode;
        }, findFiberByHostInstance: Do.findFiberByHostInstance || Ik, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (No = __REACT_DEVTOOLS_GLOBAL_HOOK__, !No.isDisabled && No.supportsFiber)) try {
          mu = No.inject(Hk), jr = No;
        } catch {
        }
        var No;
        Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uk;
        Jt.createPortal = function(e3, t) {
          var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
          if (!Fh(t)) throw Error(z(200));
          return Ok(e3, t, null, r);
        };
        Jt.createRoot = function(e3, t) {
          if (!Fh(e3)) throw Error(z(299));
          var r = false, n = "", a = ly;
          return t != null && (t.unstable_strictMode === true && (r = true), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = _h(e3, 1, false, null, null, r, false, n, a), e3[cn] = t.current, Xo(e3.nodeType === 8 ? e3.parentNode : e3), new Ah(t);
        };
        Jt.findDOMNode = function(e3) {
          if (e3 == null) return null;
          if (e3.nodeType === 1) return e3;
          var t = e3._reactInternals;
          if (t === void 0) throw typeof e3.render == "function" ? Error(z(188)) : (e3 = Object.keys(e3).join(","), Error(z(268, e3)));
          return e3 = Mv(t), e3 = e3 === null ? null : e3.stateNode, e3;
        };
        Jt.flushSync = function(e3) {
          return _a(e3);
        };
        Jt.hydrate = function(e3, t, r) {
          if (!Nu(t)) throw Error(z(200));
          return Mu(null, e3, t, true, r);
        };
        Jt.hydrateRoot = function(e3, t, r) {
          if (!Fh(e3)) throw Error(z(405));
          var n = r != null && r.hydratedSources || null, a = false, i = "", o = ly;
          if (r != null && (r.unstable_strictMode === true && (a = true), r.identifierPrefix !== void 0 && (i = r.identifierPrefix), r.onRecoverableError !== void 0 && (o = r.onRecoverableError)), t = oy(t, null, e3, 1, r ?? null, a, false, i, o), e3[cn] = t.current, Xo(e3), n) for (e3 = 0; e3 < n.length; e3++) r = n[e3], a = r._getVersion, a = a(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, a] : t.mutableSourceEagerHydrationData.push(r, a);
          return new Du(t);
        };
        Jt.render = function(e3, t, r) {
          if (!Nu(t)) throw Error(z(200));
          return Mu(null, e3, t, false, r);
        };
        Jt.unmountComponentAtNode = function(e3) {
          if (!Nu(e3)) throw Error(z(40));
          return e3._reactRootContainer ? (_a(function() {
            Mu(null, null, e3, false, function() {
              e3._reactRootContainer = null, e3[cn] = null;
            });
          }), true) : false;
        };
        Jt.unstable_batchedUpdates = Nh;
        Jt.unstable_renderSubtreeIntoContainer = function(e3, t, r, n) {
          if (!Nu(r)) throw Error(z(200));
          if (e3 == null || e3._reactInternals === void 0) throw Error(z(38));
          return Mu(e3, t, r, false, n);
        };
        Jt.version = "18.3.1-next-f1338f8080-20240426";
      });
      ul = wr((Z9, cy) => {
        "use strict";
        function uy() {
          if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uy);
          } catch (e3) {
            console.error(e3);
          }
        }
        uy(), cy.exports = sy();
      });
      fy = wr(($h) => {
        "use strict";
        var dy = ul();
        $h.createRoot = dy.createRoot, $h.hydrateRoot = dy.hydrateRoot;
        var J9;
      });
      J2 = wr((Gr) => {
        "use strict";
        Object.defineProperty(Gr, "__esModule", { value: true });
        Gr.parseCookie = Q2;
        Gr.parse = Q2;
        Gr.stringifyCookie = eS;
        Gr.stringifySetCookie = bc;
        Gr.serialize = bc;
        Gr.parseSetCookie = tS;
        Gr.stringifySetCookie = bc;
        Gr.serialize = bc;
        var K2 = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, X2 = /^[\u0021-\u003A\u003C-\u007E]*$/, KR = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, XR = /^[\u0020-\u003A\u003D-\u007E]*$/, QR = /^-?\d+$/, ZR = Object.prototype.toString, JR = (() => {
          let e3 = function() {
          };
          return e3.prototype = /* @__PURE__ */ Object.create(null), e3;
        })();
        function Q2(e3, t) {
          let r = new JR(), n = e3.length;
          if (n < 2) return r;
          let a = t?.decode || Z2, i = 0;
          do {
            let o = Kp(e3, i, n);
            if (o === -1) break;
            let l = Gp(e3, i, n);
            if (o > l) {
              i = e3.lastIndexOf(";", o - 1) + 1;
              continue;
            }
            let s = ia(e3, i, o);
            r[s] === void 0 && (r[s] = a(ia(e3, o + 1, l))), i = l + 1;
          } while (i < n);
          return r;
        }
        function eS(e3, t) {
          let r = t?.encode || encodeURIComponent, n = [];
          for (let a of Object.keys(e3)) {
            let i = e3[a];
            if (i === void 0) continue;
            if (!K2.test(a)) throw new TypeError(`cookie name is invalid: ${a}`);
            let o = r(i);
            if (!X2.test(o)) throw new TypeError(`cookie val is invalid: ${i}`);
            n.push(`${a}=${o}`);
          }
          return n.join("; ");
        }
        function bc(e3, t, r) {
          let n = typeof e3 == "object" ? e3 : { ...r, name: e3, value: String(t) }, i = (typeof t == "object" ? t : r)?.encode || encodeURIComponent;
          if (!K2.test(n.name)) throw new TypeError(`argument name is invalid: ${n.name}`);
          let o = n.value ? i(n.value) : "";
          if (!X2.test(o)) throw new TypeError(`argument val is invalid: ${n.value}`);
          let l = n.name + "=" + o;
          if (n.maxAge !== void 0) {
            if (!Number.isInteger(n.maxAge)) throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);
            l += "; Max-Age=" + n.maxAge;
          }
          if (n.domain) {
            if (!KR.test(n.domain)) throw new TypeError(`option domain is invalid: ${n.domain}`);
            l += "; Domain=" + n.domain;
          }
          if (n.path) {
            if (!XR.test(n.path)) throw new TypeError(`option path is invalid: ${n.path}`);
            l += "; Path=" + n.path;
          }
          if (n.expires) {
            if (!rS(n.expires) || !Number.isFinite(n.expires.valueOf())) throw new TypeError(`option expires is invalid: ${n.expires}`);
            l += "; Expires=" + n.expires.toUTCString();
          }
          if (n.httpOnly && (l += "; HttpOnly"), n.secure && (l += "; Secure"), n.partitioned && (l += "; Partitioned"), n.priority) switch (typeof n.priority == "string" ? n.priority.toLowerCase() : void 0) {
            case "low":
              l += "; Priority=Low";
              break;
            case "medium":
              l += "; Priority=Medium";
              break;
            case "high":
              l += "; Priority=High";
              break;
            default:
              throw new TypeError(`option priority is invalid: ${n.priority}`);
          }
          if (n.sameSite) switch (typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite) {
            case true:
            case "strict":
              l += "; SameSite=Strict";
              break;
            case "lax":
              l += "; SameSite=Lax";
              break;
            case "none":
              l += "; SameSite=None";
              break;
            default:
              throw new TypeError(`option sameSite is invalid: ${n.sameSite}`);
          }
          return l;
        }
        function tS(e3, t) {
          let r = t?.decode || Z2, n = e3.length, a = Gp(e3, 0, n), i = Kp(e3, 0, a), o = i === -1 ? { name: "", value: r(ia(e3, 0, a)) } : { name: ia(e3, 0, i), value: r(ia(e3, i + 1, a)) }, l = a + 1;
          for (; l < n; ) {
            let s = Gp(e3, l, n), u = Kp(e3, l, s), c = u === -1 ? ia(e3, l, s) : ia(e3, l, u), d = u === -1 ? void 0 : ia(e3, u + 1, s);
            switch (c.toLowerCase()) {
              case "httponly":
                o.httpOnly = true;
                break;
              case "secure":
                o.secure = true;
                break;
              case "partitioned":
                o.partitioned = true;
                break;
              case "domain":
                o.domain = d;
                break;
              case "path":
                o.path = d;
                break;
              case "max-age":
                d && QR.test(d) && (o.maxAge = Number(d));
                break;
              case "expires":
                if (!d) break;
                let f = new Date(d);
                Number.isFinite(f.valueOf()) && (o.expires = f);
                break;
              case "priority":
                if (!d) break;
                let p = d.toLowerCase();
                (p === "low" || p === "medium" || p === "high") && (o.priority = p);
                break;
              case "samesite":
                if (!d) break;
                let v = d.toLowerCase();
                (v === "lax" || v === "strict" || v === "none") && (o.sameSite = v);
                break;
            }
            l = s + 1;
          }
          return o;
        }
        function Gp(e3, t, r) {
          let n = e3.indexOf(";", t);
          return n === -1 ? r : n;
        }
        function Kp(e3, t, r) {
          let n = e3.indexOf("=", t);
          return n < r ? n : -1;
        }
        function ia(e3, t, r) {
          let n = t, a = r;
          do {
            let i = e3.charCodeAt(n);
            if (i !== 32 && i !== 9) break;
          } while (++n < a);
          for (; a > n; ) {
            let i = e3.charCodeAt(a - 1);
            if (i !== 32 && i !== 9) break;
            a--;
          }
          return e3.slice(n, a);
        }
        function Z2(e3) {
          if (e3.indexOf("%") === -1) return e3;
          try {
            return decodeURIComponent(e3);
          } catch {
            return e3;
          }
        }
        function rS(e3) {
          return ZR.call(e3) === "[object Date]";
        }
      });
      t4 = wr((hN, Al) => {
        "use strict";
        var kc = { decodeValues: true, map: false, silent: false };
        function Xp(e3) {
          return typeof e3 != "string" || e3 in {};
        }
        function Qp() {
          return /* @__PURE__ */ Object.create(null);
        }
        function Zp(e3) {
          return typeof e3 == "string" && !!e3.trim();
        }
        function Jp(e3, t) {
          var r = e3.split(";").filter(Zp), n = r.shift(), a = nS(n), i = a.name, o = a.value;
          if (t = t ? Object.assign({}, kc, t) : kc, Xp(i)) return null;
          try {
            o = t.decodeValues ? decodeURIComponent(o) : o;
          } catch (s) {
            console.error("set-cookie-parser: failed to decode cookie value. Set options.decodeValues=false to disable decoding.", s);
          }
          var l = Qp();
          return l.name = i, l.value = o, r.forEach(function(s) {
            var u = s.split("="), c = u.shift().trimLeft().toLowerCase();
            if (!Xp(c)) {
              var d = u.join("=");
              if (c === "expires") l.expires = new Date(d);
              else if (c === "max-age") {
                var f = parseInt(d, 10);
                Number.isNaN(f) || (l.maxAge = f);
              } else c === "secure" ? l.secure = true : c === "httponly" ? l.httpOnly = true : c === "samesite" ? l.sameSite = d : c === "partitioned" ? l.partitioned = true : c && (l[c] = d);
            }
          }), l;
        }
        function nS(e3) {
          var t = "", r = "", n = e3.split("=");
          return n.length > 1 ? (t = n.shift(), r = n.join("=")) : r = e3, { name: t, value: r };
        }
        function e4(e3, t) {
          if (t = t ? Object.assign({}, kc, t) : kc, !e3) return t.map ? Qp() : [];
          if (e3.headers) if (typeof e3.headers.getSetCookie == "function") e3 = e3.headers.getSetCookie();
          else if (e3.headers["set-cookie"]) e3 = e3.headers["set-cookie"];
          else {
            var r = e3.headers[Object.keys(e3.headers).find(function(a) {
              return a.toLowerCase() === "set-cookie";
            })];
            !r && e3.headers.cookie && !t.silent && console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."), e3 = r;
          }
          if (Array.isArray(e3) || (e3 = [e3]), t.map) {
            var n = Qp();
            return e3.filter(Zp).reduce(function(a, i) {
              var o = Jp(i, t);
              return o && !Xp(o.name) && (a[o.name] = o), a;
            }, n);
          } else return e3.filter(Zp).map(function(a) {
            return Jp(a, t);
          }).filter(Boolean);
        }
        function aS(e3) {
          if (Array.isArray(e3)) return e3;
          if (typeof e3 != "string") return [];
          var t = [], r = 0, n, a, i, o, l;
          function s() {
            for (; r < e3.length && /\s/.test(e3.charAt(r)); ) r += 1;
            return r < e3.length;
          }
          function u() {
            return a = e3.charAt(r), a !== "=" && a !== ";" && a !== ",";
          }
          for (; r < e3.length; ) {
            for (n = r, l = false; s(); ) if (a = e3.charAt(r), a === ",") {
              for (i = r, r += 1, s(), o = r; r < e3.length && u(); ) r += 1;
              r < e3.length && e3.charAt(r) === "=" ? (l = true, r = o, t.push(e3.substring(n, i)), n = r) : r = i + 1;
            } else r += 1;
            (!l || r >= e3.length) && t.push(e3.substring(n, e3.length));
          }
          return t;
        }
        Al.exports = e4;
        Al.exports.parse = e4;
        Al.exports.parseString = Jp;
        Al.exports.splitCookiesString = aS;
      });
      EM = j(ee());
      RM = j(we());
      SM = j(ul());
      CM = j(fy());
      U4 = {};
      Lm(U4, { Await: () => Qw, BrowserRouter: () => $2, Form: () => yc, HashRouter: () => z2, HydratedRouter: () => j4, IDLE_BLOCKER: () => pn, IDLE_FETCHER: () => kl, IDLE_NAVIGATION: () => Ii, Link: () => eo, Links: () => M2, MemoryRouter: () => tc, Meta: () => L2, NavLink: () => Pl, Navigate: () => Xw, NavigationType: () => ap, Outlet: () => rc, PrefetchPageLinks: () => vc, Route: () => Ll, Router: () => En, RouterContextProvider: () => mr, RouterProvider: () => c0, Routes: () => nc, Scripts: () => jp, ScrollRestoration: () => Hp, ServerRouter: () => h4, StaticRouter: () => V2, StaticRouterProvider: () => _l, UNSAFE_AwaitContextProvider: () => _w, UNSAFE_DataRouterContext: () => Mr, UNSAFE_DataRouterStateContext: () => Wr, UNSAFE_ErrorResponseImpl: () => it, UNSAFE_FetchersContext: () => Qi, UNSAFE_FrameworkContext: () => vr, UNSAFE_LocationContext: () => na, UNSAFE_NavigationContext: () => ht, UNSAFE_RSCDefaultRootErrorBoundary: () => A4, UNSAFE_RemixErrorBoundary: () => Ji, UNSAFE_RouteContext: () => zt, UNSAFE_ServerMode: () => o0, UNSAFE_SingleFetchRedirectSymbol: () => Nr, UNSAFE_ViewTransitionContext: () => Xi, UNSAFE_WithComponentProps: () => t2, UNSAFE_WithErrorBoundaryProps: () => i2, UNSAFE_WithHydrateFallbackProps: () => n2, UNSAFE_createBrowserHistory: () => Gi, UNSAFE_createClientRoutes: () => Wa, UNSAFE_createClientRoutesWithHMRRevalidationOptOut: () => dc, UNSAFE_createHashHistory: () => Yu, UNSAFE_createMemoryHistory: () => Wu, UNSAFE_createRouter: () => ja, UNSAFE_decodeViaTurboStream: () => Va, UNSAFE_getHydrationData: () => Mc, UNSAFE_getPatchRoutesOnNavigationFunction: () => hc, UNSAFE_getTurboStreamSingleFetchDataStrategy: () => uc, UNSAFE_hydrationRouteProperties: () => Ba, UNSAFE_invariant: () => q, UNSAFE_mapRouteProperties: () => kn, UNSAFE_shouldHydrateRouteLoader: () => aa, UNSAFE_useFogOFWarDiscovery: () => pc, UNSAFE_useScrollRestoration: () => Yp, UNSAFE_withComponentProps: () => ac, UNSAFE_withErrorBoundaryProps: () => oc, UNSAFE_withHydrateFallbackProps: () => ic, createBrowserRouter: () => T2, createContext: () => qu, createCookie: () => Cc, createCookieSessionStorage: () => M4, createHashRouter: () => A2, createMemoryRouter: () => ec, createMemorySessionStorage: () => L4, createPath: () => je, createRequestHandler: () => C4, createRoutesFromChildren: () => qi, createRoutesFromElements: () => Zw, createRoutesStub: () => p4, createSearchParams: () => vl, createSession: () => Nc, createSessionStorage: () => u0, createStaticHandler: () => Y2, createStaticRouter: () => Tl, data: () => sp, generatePath: () => tw, href: () => P4, isCookie: () => Dc, isRouteErrorResponse: () => Ue, isSession: () => D4, matchPath: () => Oa, matchRoutes: () => Ki, parsePath: () => St, redirect: () => Ia, redirectDocument: () => Xu, renderMatches: () => Jw, replace: () => Qu, resolvePath: () => Gu, unstable_HistoryRouter: () => Up, unstable_RSCStaticRouter: () => z4, unstable_routeRSCServerRequest: () => $4, unstable_setDevServerHooks: () => x4, unstable_usePrompt: () => B2, unstable_useRoute: () => qw, unstable_useRouterState: () => Gw, useActionData: () => Nl, useAsyncError: () => Ww, useAsyncValue: () => Rp, useBeforeUnload: () => H2, useBlocker: () => Sp, useFetcher: () => j2, useFetchers: () => U2, useFormAction: () => Wp, useHref: () => yp, useInRouterContext: () => xn, useLinkClickHandler: () => Vp, useLoaderData: () => Dl, useLocation: () => qe, useMatch: () => Fw, useMatches: () => Cl, useNavigate: () => bn, useNavigation: () => Ep, useNavigationType: () => Aw, useOutlet: () => wp, useOutletContext: () => Iw, useParams: () => Sl, useResolvedPath: () => Ua, useRevalidator: () => Bw, useRouteError: () => Ha, useRouteLoaderData: () => Vw, useRoutes: () => xp, useSearchParams: () => I2, useSubmit: () => xc, useViewTransitionState: () => qp });
      $t = j(ee(), 1);
      H = j(ee(), 1);
      B = j(ee(), 1);
      hr = j(ee(), 1);
      nt = j(ee(), 1);
      G = j(ee(), 1);
      R2 = j(ee(), 1);
      Jn = j(ee(), 1);
      ep = j(ee(), 1);
      I = j(ee(), 1);
      fr = j(ee(), 1);
      qy = (e3) => {
        throw TypeError(e3);
      };
      Gy = (e3, t, r) => t.has(e3) || qy("Cannot " + r);
      dr = (e3, t, r) => (Gy(e3, t, "read from private field"), r ? r.call(e3) : t.get(e3));
      fl = (e3, t, r) => t.has(e3) ? qy("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e3) : t.set(e3, r);
      Hr = (e3, t, r, n) => (Gy(e3, t, "write to private field"), n ? n.call(e3, r) : t.set(e3, r), r);
      wl = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i;
      xl = /^[\\/]{2}/;
      ap = ((e3) => (e3.Pop = "POP", e3.Push = "PUSH", e3.Replace = "REPLACE", e3))(ap || {});
      hy = "popstate";
      mr = class {
        constructor(e3) {
          if (fl(this, hl, /* @__PURE__ */ new Map()), e3) for (let [t, r] of e3) this.set(t, r);
        }
        get(e3) {
          if (dr(this, hl).has(e3)) return dr(this, hl).get(e3);
          if (e3.defaultValue !== void 0) return e3.defaultValue;
          throw new Error("No value found for context");
        }
        set(e3, t) {
          dr(this, hl).set(e3, t);
        }
      };
      hl = /* @__PURE__ */ new WeakMap();
      Vk = /* @__PURE__ */ new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
      Yk = /* @__PURE__ */ new Set(["lazy", "caseSensitive", "path", "id", "index", "middleware", "children"]);
      Xk = /^:[\w-]+$/;
      Qk = 3;
      Zk = 2;
      Jk = 1;
      eE = 10;
      tE = -2;
      gy = (e3) => e3 === "*";
      op = (e3) => wl.test(e3);
      lp = (e3) => e3.replace(/[\\/]{2,}/g, "/");
      er = (e3) => lp(e3.join("/"));
      oE = (e3) => Bi(e3).replace(/^\/*/, "/");
      lE = (e3) => !e3 || e3 === "?" ? "" : e3.startsWith("?") ? e3 : "?" + e3;
      sE = (e3) => !e3 || e3 === "#" ? "" : e3.startsWith("#") ? e3 : "#" + e3;
      uE = class {
        constructor(e3, t) {
          this.type = "DataWithResponseInit", this.data = e3, this.init = t || null;
        }
      };
      Ia = (e3, t = 302) => {
        let r = t;
        typeof r == "number" ? r = { status: r } : typeof r.status > "u" && (r.status = 302);
        let n = new Headers(r.headers);
        return n.set("Location", e3), new Response(null, { ...r, headers: n });
      };
      Xu = (e3, t) => {
        let r = Ia(e3, t);
        return r.headers.set("X-Remix-Reload-Document", "true"), r;
      };
      Qu = (e3, t) => {
        let r = Ia(e3, t);
        return r.headers.set("X-Remix-Replace", "true"), r;
      };
      up = ["EvalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"];
      it = class {
        constructor(e3, t, r, n = false) {
          this.status = e3, this.statusText = t || "", this.internal = n, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r;
        }
      };
      iw = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
      ea = /* @__PURE__ */ Symbol("Uninstrumented");
      dE = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
      xy = new URL("http://localhost");
      fw = ["POST", "PUT", "PATCH", "DELETE"];
      pE = new Set(fw);
      mE = ["GET", ...fw];
      gE = new Set(mE);
      hw = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
      vE = /* @__PURE__ */ new Set([307, 308]);
      Ii = { state: "idle", location: void 0, matches: void 0, historyAction: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 };
      kl = { state: "idle", data: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 };
      pn = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 };
      pw = (e3) => ({ hasErrorBoundary: !!e3.hasErrorBoundary });
      mw = "remix-router-transitions";
      gw = /* @__PURE__ */ Symbol("ResetLoaderData");
      yE = class {
        constructor(e3) {
          fl(this, Fa), fl(this, Fi), fl(this, Zn), fl(this, $i), Hr(this, Fa, e3), Hr(this, Fi, pl(e3));
        }
        get stableRoutes() {
          return dr(this, Fa);
        }
        get activeRoutes() {
          return dr(this, Zn) ?? dr(this, Fa);
        }
        get branches() {
          return dr(this, $i) ?? dr(this, Fi);
        }
        get hasHMRRoutes() {
          return dr(this, Zn) != null;
        }
        setRoutes(e3) {
          Hr(this, Fa, e3), Hr(this, Fi, pl(e3));
        }
        setHmrRoutes(e3) {
          Hr(this, Zn, e3), Hr(this, $i, pl(e3));
        }
        commitHmrRoutes() {
          dr(this, Zn) && (Hr(this, Fa, dr(this, Zn)), Hr(this, Fi, dr(this, $i)), Hr(this, Zn, void 0), Hr(this, $i, void 0));
        }
      };
      Fa = /* @__PURE__ */ new WeakMap();
      Fi = /* @__PURE__ */ new WeakMap();
      Zn = /* @__PURE__ */ new WeakMap();
      $i = /* @__PURE__ */ new WeakMap();
      Cy = /* @__PURE__ */ new WeakMap();
      pp = ({ key: e3, route: t, manifest: r, mapRouteProperties: n }) => {
        let a = r[t.id];
        if (q(a, "No route found in manifest"), !a.lazy || typeof a.lazy != "object") return;
        let i = a.lazy[e3];
        if (!i) return;
        let o = Cy.get(a);
        o || (o = {}, Cy.set(a, o));
        let l = o[e3];
        if (l) return l;
        let s = (async () => {
          let u = Wk(e3), d = a[e3] !== void 0 && e3 !== "hasErrorBoundary";
          if (u) ke(!u, "Route property " + e3 + " is not a supported lazy route property. This property will be ignored."), o[e3] = Promise.resolve();
          else if (d) ke(false, `Route "${a.id}" has a static property "${e3}" defined. The lazy property will be ignored.`);
          else {
            let f = await i();
            f != null && (Object.assign(a, { [e3]: f }), Object.assign(a, n(a)));
          }
          typeof a.lazy == "object" && (a.lazy[e3] = void 0, Object.values(a.lazy).every((f) => f === void 0) && (a.lazy = void 0));
        })();
        return o[e3] = s, s;
      };
      Dy = /* @__PURE__ */ new WeakMap();
      CE = ["about:", "blob:", "chrome:", "chrome-untrusted:", "content:", "data:", "devtools:", "file:", "filesystem:", "javascript:"];
      Mr = $t.createContext(null);
      Mr.displayName = "DataRouter";
      Wr = $t.createContext(null);
      Wr.displayName = "DataRouterState";
      Rl = $t.createContext(false);
      Xi = $t.createContext({ isTransitioning: false });
      Xi.displayName = "ViewTransition";
      Qi = $t.createContext(/* @__PURE__ */ new Map());
      Qi.displayName = "Fetchers";
      Wi = $t.createContext(null);
      Wi.displayName = "Await";
      _w = (e3) => $t.createElement(Wi.Provider, e3);
      ht = $t.createContext(null);
      ht.displayName = "Navigation";
      na = $t.createContext(null);
      na.displayName = "Location";
      zt = $t.createContext({ outlet: null, matches: [], isDataRoute: false });
      zt.displayName = "Route";
      vp = $t.createContext(null);
      vp.displayName = "RouteError";
      Vr = true;
      Tw = "REACT_ROUTER_ERROR";
      TE = "REDIRECT";
      AE = "ROUTE_ERROR_RESPONSE";
      $w = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
      Ow = H.createContext(null);
      zE = H.createElement($E, null);
      Uw = class extends H.Component {
        constructor(e3) {
          super(e3), this.state = { location: e3.location, revalidation: e3.revalidation, error: e3.error };
        }
        static getDerivedStateFromError(e3) {
          return { error: e3 };
        }
        static getDerivedStateFromProps(e3, t) {
          return t.location !== e3.location || t.revalidation !== "idle" && e3.revalidation === "idle" ? { error: e3.error, location: e3.location, revalidation: e3.revalidation } : { error: e3.error !== void 0 ? e3.error : t.error, location: t.location, revalidation: e3.revalidation || t.revalidation };
        }
        componentDidCatch(e3, t) {
          this.props.onError ? this.props.onError(e3, t) : console.error("React Router caught the following error during render", e3);
        }
        render() {
          let e3 = this.state.error;
          if (this.context && typeof e3 == "object" && e3 && "digest" in e3 && typeof e3.digest == "string") {
            let r = Ju(e3.digest);
            r && (e3 = r);
          }
          let t = e3 !== void 0 ? H.createElement(zt.Provider, { value: this.props.routeContext }, H.createElement(vp.Provider, { value: e3, children: this.props.component })) : this.props.children;
          return this.context ? H.createElement(OE, { error: e3 }, t) : t;
        }
      };
      Uw.contextType = Rl;
      jh = /* @__PURE__ */ new WeakMap();
      HE = 0;
      zy = {};
      Iy = {};
      VE = "useOptimistic";
      jy = B[VE];
      WE = () => {
      };
      Ba = ["HydrateFallback", "hydrateFallbackElement"];
      qE = class {
        constructor() {
          this.status = "pending", this.promise = new Promise((e3, t) => {
            this.resolve = (r) => {
              this.status === "pending" && (this.status = "resolved", e3(r));
            }, this.reject = (r) => {
              this.status === "pending" && (this.status = "rejected", t(r));
            };
          });
        }
      };
      GE = B.memo(Kw);
      KE = class extends B.Component {
        constructor(e3) {
          super(e3), this.state = { error: null };
        }
        static getDerivedStateFromError(e3) {
          return { error: e3 };
        }
        componentDidCatch(e3, t) {
          this.props.onError ? this.props.onError(e3, t) : console.error("<Await> caught the following error during render", e3, t);
        }
        render() {
          let { children: e3, errorElement: t, resolve: r } = this.props, n = null, a = 0;
          if (!(r instanceof Promise)) a = 1, n = Promise.resolve(), Object.defineProperty(n, "_tracked", { get: () => true }), Object.defineProperty(n, "_data", { get: () => r });
          else if (this.state.error) {
            a = 2;
            let i = this.state.error;
            n = Promise.reject().catch(() => {
            }), Object.defineProperty(n, "_tracked", { get: () => true }), Object.defineProperty(n, "_error", { get: () => i });
          } else r._tracked ? (n = r, a = "_error" in n ? 2 : "_data" in n ? 1 : 0) : (a = 0, Object.defineProperty(r, "_tracked", { get: () => true }), n = r.then((i) => Object.defineProperty(r, "_data", { get: () => i }), (i) => {
            this.props.onError?.(i), Object.defineProperty(r, "_error", { get: () => i });
          }));
          if (a === 2 && !t) throw n._error;
          if (a === 2) return B.createElement(Wi.Provider, { value: n, children: t });
          if (a === 1) return B.createElement(Wi.Provider, { value: n, children: e3 });
          throw n;
        }
      };
      Zw = qi;
      $u = "get";
      zu = "application/x-www-form-urlencoded";
      Pu = null;
      aR = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
      o2 = -1;
      Cp = -2;
      Dp = -3;
      Np = -4;
      Hu = -5;
      Mp = -6;
      Lp = -7;
      l2 = "B";
      s2 = "D";
      Ui = "E";
      Xh = "M";
      u2 = "N";
      Hi = "P";
      c2 = "R";
      Qh = "S";
      d2 = "Y";
      f2 = "U";
      Zh = "Z";
      h2 = class {
        constructor() {
          this.promise = new Promise((e3, t) => {
            this.resolve = e3, this.reject = t;
          });
        }
      };
      lR = 1;
      Hh = () => Date.now();
      sR = () => new Promise((e3) => setTimeout(e3, 0));
      cR = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
      _u = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : void 0;
      mR = { "&": "\\u0026", ">": "\\u003e", "<": "\\u003c", "\u2028": "\\u2028", "\u2029": "\\u2029" };
      gR = /[&><\u2028\u2029]/g;
      Nr = /* @__PURE__ */ Symbol("SingleFetchRedirect");
      g2 = class extends Error {
      };
      sc = 202;
      Pp = /* @__PURE__ */ new Set([100, 101, 204, 205]);
      Iu = /* @__PURE__ */ new Set();
      TR = 1e3;
      Bu = /* @__PURE__ */ new Set();
      fc = 7680;
      Vh = "react-router-manifest-version";
      vr = G.createContext(void 0);
      vr.displayName = "FrameworkContext";
      Yy = "data-react-router-critical-css";
      Vu = false;
      Ji = class extends nt.Component {
        constructor(e3) {
          super(e3), this.state = { error: e3.error || null, location: e3.location };
        }
        static getDerivedStateFromError(e3) {
          return { error: e3 };
        }
        static getDerivedStateFromProps(e3, t) {
          return t.location !== e3.location ? { error: e3.error || null, location: e3.location } : { error: e3.error || t.error, location: t.location };
        }
        render() {
          return this.state.error ? nt.createElement(_2, { error: this.state.error, isOutsideRemixApp: true }) : this.props.children;
        }
      };
      BR = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
      try {
        BR && (window.__reactRouterVersion = "7.18.3");
      } catch {
      }
      Up.displayName = "unstable_HistoryRouter";
      eo = I.forwardRef(function({ onClick: t, discover: r = "render", prefetch: n = "none", relative: a, reloadDocument: i, replace: o, mask: l, state: s, target: u, to: c, preventScrollReset: d, viewTransition: f, defaultShouldRevalidate: p, ...v }, y) {
        let { basename: g, navigator: m, useTransitions: h } = I.useContext(ht), w = typeof c == "string" && wl.test(c), b = ow(c, g);
        c = b.to;
        let E = yp(c, { relative: a }), N = qe(), M = null;
        if (l) {
          let te = bl(l, [], N.mask ? N.mask.pathname : "/", true);
          g !== "/" && (te.pathname = te.pathname === "/" ? g : er([g, te.pathname])), M = m.createHref(te);
        }
        let [x, C, D] = zR(n, v), T = Vp(c, { replace: o, mask: l, state: s, target: u, preventScrollReset: d, relative: a, viewTransition: f, defaultShouldRevalidate: p, useTransitions: h });
        function P(te) {
          t && t(te), te.defaultPrevented || T(te);
        }
        let _ = !(b.isExternal || i), O = I.createElement("a", { ...v, ...D, href: (_ ? M : void 0) || b.absoluteURL || E, onClick: _ ? P : t, ref: HR(y, C), target: u, "data-discover": !w && r === "render" ? "true" : void 0 });
        return x && !w ? I.createElement(I.Fragment, null, O, I.createElement(vc, { page: E })) : O;
      });
      eo.displayName = "Link";
      Pl = I.forwardRef(function({ "aria-current": t = "page", caseSensitive: r = false, className: n = "", end: a = false, style: i, to: o, viewTransition: l, children: s, ...u }, c) {
        let d = Ua(o, { relative: u.relative }), f = qe(), p = I.useContext(Wr), { navigator: v, basename: y } = I.useContext(ht), g = p != null && qp(d) && l === true, m = v.encodeLocation ? v.encodeLocation(d).pathname : d.pathname, h = f.pathname, w = p && p.navigation && p.navigation.location ? p.navigation.location.pathname : null;
        r || (h = h.toLowerCase(), w = w ? w.toLowerCase() : null, m = m.toLowerCase()), w && y && (w = Xe(w, y) || w);
        let b = m !== "/" && m.endsWith("/") ? m.length - 1 : m.length, E = h === m || !a && h.startsWith(m) && h.charAt(b) === "/", N = w != null && (w === m || !a && w.startsWith(m) && w.charAt(m.length) === "/"), M = { isActive: E, isPending: N, isTransitioning: g }, x = E ? t : void 0, C;
        typeof n == "function" ? C = n(M) : C = [n, E ? "active" : null, N ? "pending" : null, g ? "transitioning" : null].filter(Boolean).join(" ");
        let D = typeof i == "function" ? i(M) : i;
        return I.createElement(eo, { ...u, "aria-current": x, className: C, ref: c, style: D, to: o, viewTransition: l }, typeof s == "function" ? s(M) : s);
      });
      Pl.displayName = "NavLink";
      yc = I.forwardRef(({ discover: e3 = "render", fetcherKey: t, navigate: r, reloadDocument: n, replace: a, state: i, method: o = $u, action: l, onSubmit: s, relative: u, preventScrollReset: c, viewTransition: d, defaultShouldRevalidate: f, ...p }, v) => {
        let { useTransitions: y } = I.useContext(ht), g = xc(), m = Wp(l, { relative: u }), h = o.toLowerCase() === "get" ? "get" : "post", w = typeof l == "string" && wl.test(l);
        return I.createElement("form", { ref: v, method: h, action: m, onSubmit: n ? s : (E) => {
          if (s && s(E), E.defaultPrevented) return;
          E.preventDefault();
          let N = E.nativeEvent.submitter, M = N?.getAttribute("formmethod") || o, x = () => g(N || E.currentTarget, { fetcherKey: t, method: M, navigate: r, replace: a, state: i, relative: u, preventScrollReset: c, viewTransition: d, defaultShouldRevalidate: f });
          y && r !== false ? I.startTransition(() => x()) : x();
        }, ...p, "data-discover": !w && e3 === "render" ? "true" : void 0 });
      });
      yc.displayName = "Form";
      Hp.displayName = "ScrollRestoration";
      WR = 0;
      YR = () => `__${String(++WR)}__`;
      rp = "react-router-scroll-positions";
      Fu = {};
      Lr = j(ee(), 1);
      ro = j(ee(), 1);
      Sc = j(J2(), 1);
      E4 = j(t4(), 1);
      to = j(ee(), 1);
      pt = j(ee(), 1);
      i0 = new TextEncoder();
      iS = async (e3, t) => {
        let r = i0.encode(e3), n = await g4(t, ["sign"]), a = await crypto.subtle.sign("HMAC", n, r), i = btoa(String.fromCharCode(...new Uint8Array(a))).replace(/=+$/, "");
        return e3 + "." + i;
      };
      oS = async (e3, t) => {
        let r = e3.lastIndexOf("."), n = e3.slice(0, r), a = e3.slice(r + 1), i = i0.encode(n), o = await g4(t, ["verify"]);
        try {
          let l = lS(atob(a));
          return await crypto.subtle.verify("HMAC", o, l, i) ? n : false;
        } catch {
          return false;
        }
      };
      g4 = async (e3, t) => crypto.subtle.importKey("raw", i0.encode(e3), { name: "HMAC", hash: "SHA-256" }, false, t);
      Cc = (e3, t = {}) => {
        let { secrets: r = [], ...n } = { path: "/", sameSite: "lax", ...t };
        return hS(e3, n.expires), { get name() {
          return e3;
        }, get isSigned() {
          return r.length > 0;
        }, get expires() {
          return typeof n.maxAge < "u" ? new Date(Date.now() + n.maxAge * 1e3) : n.expires;
        }, async parse(a, i) {
          if (!a) return null;
          let o = (0, Sc.parse)(a, { ...n, ...i });
          if (e3 in o) {
            let l = o[e3];
            return typeof l == "string" && l !== "" ? await uS(l, r) : "";
          } else return null;
        }, async serialize(a, i) {
          return (0, Sc.serialize)(e3, a === "" ? "" : await sS(a, r), { ...n, ...i });
        } };
      };
      Dc = (e3) => e3 != null && typeof e3.name == "string" && typeof e3.isSigned == "boolean" && typeof e3.parse == "function" && typeof e3.serialize == "function";
      o0 = ((e3) => (e3.Development = "development", e3.Production = "production", e3.Test = "test", e3))(o0 || {});
      w4 = "__reactRouterDevServerHooks";
      S4 = /* @__PURE__ */ new Set([...Pp, 304]);
      C4 = (e3, t) => {
        let r, n, a, i, o;
        return async function(s, u) {
          if (r = typeof e3 == "function" ? await e3() : e3, typeof e3 == "function") {
            let c = l4(r, t);
            n = c.serverMode, a = c.staticHandler, i = c.errorHandler, o = c.requestHandler;
          } else if (!n || !a || !i || !o) {
            let c = l4(r, t);
            n = c.serverMode, a = c.staticHandler, i = c.errorHandler, o = c.requestHandler;
          }
          return o(s, u);
        };
      };
      Nc = (e3 = {}, t = "") => {
        let r = new Map(Object.entries(e3));
        return { get id() {
          return t;
        }, get data() {
          return Object.fromEntries(r);
        }, has(n) {
          return r.has(n) || r.has(t0(n));
        }, get(n) {
          if (r.has(n)) return r.get(n);
          let a = t0(n);
          if (r.has(a)) {
            let i = r.get(a);
            return r.delete(a), i;
          }
        }, set(n, a) {
          r.set(n, a);
        }, flash(n, a) {
          r.set(t0(n), a);
        }, unset(n) {
          r.delete(n);
        } };
      };
      D4 = (e3) => e3 != null && typeof e3.id == "string" && typeof e3.data < "u" && typeof e3.has == "function" && typeof e3.get == "function" && typeof e3.set == "function" && typeof e3.flash == "function" && typeof e3.unset == "function";
      a0 = new TextEncoder();
      s4 = "</body></html>";
      _4 = class extends pt.default.Component {
        constructor(e3) {
          super(e3), this.state = { error: null, location: e3.location };
        }
        static getDerivedStateFromError(e3) {
          return { error: e3 };
        }
        static getDerivedStateFromProps(e3, t) {
          return t.location !== e3.location ? { error: null, location: e3.location } : { error: t.error, location: t.location };
        }
        render() {
          return this.state.error ? pt.default.createElement(T4, { error: this.state.error, renderAppShell: true }) : this.props.children;
        }
      };
      FS = () => null;
      d4 = "/__manifest";
      $S = "use";
      f4 = to[$S];
      O4 = j(ee(), 1);
      I4 = j(ul(), 1);
      ot = j(ee(), 1);
      no = j(ee(), 1);
      HS = j(ul(), 1);
      K = null;
      Ol = null;
      xN = qu();
      G5 = {};
      Lm(G5, { BarChart: () => b5, Bullets: () => c5, Button: () => g0, ButtonLink: () => Xb, Callout: () => m5, Caption: () => h5, ChoiceRow: () => DD, CloseButton: () => rd, Closing: () => y5, CompareColumns: () => $D, CopyButton: () => ED, DataTable: () => w5, DotChart: () => YD, Drawer: () => R5, DsButton: () => y0, DsIconButton: () => w0, Facts: () => od, Figure: () => f5, FileButton: () => Dn, FileCard: () => TD, FileGround: () => _D, FileRouter: () => B9, Group: () => n5, Header: () => r5, Heading: () => s5, ImageFrame: () => $5, KeySentence: () => d5, LineChart: () => UD, Link: () => eo, LiveRegion: () => P5, NavLink: () => Pl, NumberedList: () => g5, Paragraph: () => u5, PhotoCard: () => E5, PhotoCards: () => k5, PhotoViewer: () => ad, Photos: () => lm, ProductCard: () => _9, ProductCarousel: () => F9, ProductDetail: () => M9, ProductGrid: () => A9, ProductImage: () => z9, ProductModal: () => L9, ProductTable: () => I9, ProductTile: () => mm, RangeChart: () => VD, RecommendationCard: () => U9, RecommendationGrid: () => j9, Reveal: () => b9, Route: () => Ll, Routes: () => nc, Row: () => o5, Rows: () => i5, Rule: () => p5, Slider: () => MD, Sparklines: () => BD, StackedBar: () => WD, StripArrows: () => Zb, Table: () => v5, Text: () => l5, TextField: () => ND, TextLink: () => om, Wordmark: () => F5, liveTarget: () => Vb, productBadge: () => z5, stripTakeoverEvents: () => W0, useFileContext: () => Xx, useLiveDetail: () => x9, useLiveItem: () => g9, useLiveItems: () => m9, useLiveValue: () => p9, useLocalState: () => n8, useLocation: () => qe, useNavigate: () => bn, useWakeAgent: () => Qx });
      gm = j(ee(), 1);
      Qe = j(ee(), 1);
      PN = j(ee(), 1);
      h0 = j(we(), 1);
      rx = j(ee(), 1);
      nx = j(we(), 1);
      v0 = j(ee(), 1);
      Hl = j(we(), 1);
      BS = (e3) => {
        let t = WS(e3), { conflictingClassGroups: r, conflictingClassGroupModifiers: n } = e3;
        return { getClassGroupId: (a) => {
          let i = a.split("-");
          return i[0] === "" && i.length !== 1 && i.shift(), Q4(i, t) || VS(a);
        }, getConflictingClassGroupIds: (a, i) => {
          let o = r[a] || [];
          return i && n[a] ? [...o, ...n[a]] : o;
        } };
      };
      Q4 = (e3, t) => {
        if (e3.length === 0) return t.classGroupId;
        let r = e3[0], n = t.nextPart.get(r), a = n ? Q4(e3.slice(1), n) : void 0;
        if (a) return a;
        if (t.validators.length === 0) return;
        let i = e3.join("-");
        return t.validators.find(({ validator: o }) => o(i))?.classGroupId;
      };
      H4 = /^\[(.+)\]$/;
      VS = (e3) => {
        if (H4.test(e3)) {
          let t = H4.exec(e3)[1], r = t?.substring(0, t.indexOf(":"));
          if (r) return "arbitrary.." + r;
        }
      };
      WS = (e3) => {
        let { theme: t, prefix: r } = e3, n = { nextPart: /* @__PURE__ */ new Map(), validators: [] };
        return qS(Object.entries(e3.classGroups), r).forEach(([a, i]) => {
          f0(i, n, a, t);
        }), n;
      };
      f0 = (e3, t, r, n) => {
        e3.forEach((a) => {
          if (typeof a == "string") {
            let i = a === "" ? t : B4(t, a);
            i.classGroupId = r;
            return;
          }
          if (typeof a == "function") {
            if (YS(a)) {
              f0(a(n), t, r, n);
              return;
            }
            t.validators.push({ validator: a, classGroupId: r });
            return;
          }
          Object.entries(a).forEach(([i, o]) => {
            f0(o, B4(t, i), r, n);
          });
        });
      };
      B4 = (e3, t) => {
        let r = e3;
        return t.split("-").forEach((n) => {
          r.nextPart.has(n) || r.nextPart.set(n, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), r = r.nextPart.get(n);
        }), r;
      };
      YS = (e3) => e3.isThemeGetter;
      qS = (e3, t) => t ? e3.map(([r, n]) => {
        let a = n.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([o, l]) => [t + o, l])) : i);
        return [r, a];
      }) : e3;
      GS = (e3) => {
        if (e3 < 1) return { get: () => {
        }, set: () => {
        } };
        let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), a = (i, o) => {
          r.set(i, o), t++, t > e3 && (t = 0, n = r, r = /* @__PURE__ */ new Map());
        };
        return { get(i) {
          let o = r.get(i);
          if (o !== void 0) return o;
          if ((o = n.get(i)) !== void 0) return a(i, o), o;
        }, set(i, o) {
          r.has(i) ? r.set(i, o) : a(i, o);
        } };
      };
      KS = (e3) => {
        let { separator: t, experimentalParseClassName: r } = e3, n = t.length === 1, a = t[0], i = t.length, o = (l) => {
          let s = [], u = 0, c = 0, d;
          for (let g = 0; g < l.length; g++) {
            let m = l[g];
            if (u === 0) {
              if (m === a && (n || l.slice(g, g + i) === t)) {
                s.push(l.slice(c, g)), c = g + i;
                continue;
              }
              if (m === "/") {
                d = g;
                continue;
              }
            }
            m === "[" ? u++ : m === "]" && u--;
          }
          let f = s.length === 0 ? l : l.substring(c), p = f.startsWith("!"), v = p ? f.substring(1) : f, y = d && d > c ? d - c : void 0;
          return { modifiers: s, hasImportantModifier: p, baseClassName: v, maybePostfixModifierPosition: y };
        };
        return r ? (l) => r({ className: l, parseClassName: o }) : o;
      };
      XS = (e3) => {
        if (e3.length <= 1) return e3;
        let t = [], r = [];
        return e3.forEach((n) => {
          n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
        }), t.push(...r.sort()), t;
      };
      QS = (e3) => ({ cache: GS(e3.cacheSize), parseClassName: KS(e3), ...BS(e3) });
      ZS = /\s+/;
      JS = (e3, t) => {
        let { parseClassName: r, getClassGroupId: n, getConflictingClassGroupIds: a } = t, i = [], o = e3.trim().split(ZS), l = "";
        for (let s = o.length - 1; s >= 0; s -= 1) {
          let u = o[s], { modifiers: c, hasImportantModifier: d, baseClassName: f, maybePostfixModifierPosition: p } = r(u), v = !!p, y = n(v ? f.substring(0, p) : f);
          if (!y) {
            if (!v) {
              l = u + (l.length > 0 ? " " + l : l);
              continue;
            }
            if (y = n(f), !y) {
              l = u + (l.length > 0 ? " " + l : l);
              continue;
            }
            v = false;
          }
          let g = XS(c).join(":"), m = d ? g + "!" : g, h = m + y;
          if (i.includes(h)) continue;
          i.push(h);
          let w = a(y, v);
          for (let b = 0; b < w.length; ++b) {
            let E = w[b];
            i.push(m + E);
          }
          l = u + (l.length > 0 ? " " + l : l);
        }
        return l;
      };
      Z4 = (e3) => {
        if (typeof e3 == "string") return e3;
        let t, r = "";
        for (let n = 0; n < e3.length; n++) e3[n] && (t = Z4(e3[n])) && (r && (r += " "), r += t);
        return r;
      };
      Me = (e3) => {
        let t = (r) => r[e3] || [];
        return t.isThemeGetter = true, t;
      };
      J4 = /^\[(?:([a-z-]+):)?(.+)\]$/i;
      tC = /^\d+\/\d+$/;
      rC = /* @__PURE__ */ new Set(["px", "full", "screen"]);
      nC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
      aC = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
      iC = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
      oC = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
      lC = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
      Rn = (e3) => ao(e3) || rC.has(e3) || tC.test(e3);
      oa = (e3) => io(e3, "length", mC);
      ao = (e3) => !!e3 && !Number.isNaN(Number(e3));
      d0 = (e3) => io(e3, "number", ao);
      Il = (e3) => !!e3 && Number.isInteger(Number(e3));
      sC = (e3) => e3.endsWith("%") && ao(e3.slice(0, -1));
      se = (e3) => J4.test(e3);
      la = (e3) => nC.test(e3);
      uC = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
      cC = (e3) => io(e3, uC, ex);
      dC = (e3) => io(e3, "position", ex);
      fC = /* @__PURE__ */ new Set(["image", "url"]);
      hC = (e3) => io(e3, fC, vC);
      pC = (e3) => io(e3, "", gC);
      jl = () => true;
      io = (e3, t, r) => {
        let n = J4.exec(e3);
        return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : false;
      };
      mC = (e3) => aC.test(e3) && !iC.test(e3);
      ex = () => false;
      gC = (e3) => oC.test(e3);
      vC = (e3) => lC.test(e3);
      W4 = () => {
        let e3 = Me("colors"), t = Me("spacing"), r = Me("blur"), n = Me("brightness"), a = Me("borderColor"), i = Me("borderRadius"), o = Me("borderSpacing"), l = Me("borderWidth"), s = Me("contrast"), u = Me("grayscale"), c = Me("hueRotate"), d = Me("invert"), f = Me("gap"), p = Me("gradientColorStops"), v = Me("gradientColorStopPositions"), y = Me("inset"), g = Me("margin"), m = Me("opacity"), h = Me("padding"), w = Me("saturate"), b = Me("scale"), E = Me("sepia"), N = Me("skew"), M = Me("space"), x = Me("translate"), C = () => ["auto", "contain", "none"], D = () => ["auto", "hidden", "clip", "visible", "scroll"], T = () => ["auto", se, t], P = () => [se, t], _ = () => ["", Rn, oa], O = () => ["auto", ao, se], te = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], X = () => ["solid", "dashed", "dotted", "double", "none"], ie = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Le = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], oe = () => ["", "0", se], Ve = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Pe = () => [ao, se];
        return { cacheSize: 500, separator: ":", theme: { colors: [jl], spacing: [Rn, oa], blur: ["none", "", la, se], brightness: Pe(), borderColor: [e3], borderRadius: ["none", "", "full", la, se], borderSpacing: P(), borderWidth: _(), contrast: Pe(), grayscale: oe(), hueRotate: Pe(), invert: oe(), gap: P(), gradientColorStops: [e3], gradientColorStopPositions: [sC, oa], inset: T(), margin: T(), opacity: Pe(), padding: P(), saturate: Pe(), scale: Pe(), sepia: oe(), skew: Pe(), space: P(), translate: P() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", se] }], container: ["container"], columns: [{ columns: [la] }], "break-after": [{ "break-after": Ve() }], "break-before": [{ "break-before": Ve() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none", "start", "end"] }], clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [...te(), se] }], overflow: [{ overflow: D() }], "overflow-x": [{ "overflow-x": D() }], "overflow-y": [{ "overflow-y": D() }], overscroll: [{ overscroll: C() }], "overscroll-x": [{ "overscroll-x": C() }], "overscroll-y": [{ "overscroll-y": C() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [y] }], "inset-x": [{ "inset-x": [y] }], "inset-y": [{ "inset-y": [y] }], start: [{ start: [y] }], end: [{ end: [y] }], top: [{ top: [y] }], right: [{ right: [y] }], bottom: [{ bottom: [y] }], left: [{ left: [y] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", Il, se] }], basis: [{ basis: T() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", se] }], grow: [{ grow: oe() }], shrink: [{ shrink: oe() }], order: [{ order: ["first", "last", "none", Il, se] }], "grid-cols": [{ "grid-cols": [jl] }], "col-start-end": [{ col: ["auto", { span: ["full", Il, se] }, se] }], "col-start": [{ "col-start": O() }], "col-end": [{ "col-end": O() }], "grid-rows": [{ "grid-rows": [jl] }], "row-start-end": [{ row: ["auto", { span: [Il, se] }, se] }], "row-start": [{ "row-start": O() }], "row-end": [{ "row-end": O() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", se] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", se] }], gap: [{ gap: [f] }], "gap-x": [{ "gap-x": [f] }], "gap-y": [{ "gap-y": [f] }], "justify-content": [{ justify: ["normal", ...Le()] }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal", ...Le(), "baseline"] }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [...Le(), "baseline"] }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [h] }], px: [{ px: [h] }], py: [{ py: [h] }], ps: [{ ps: [h] }], pe: [{ pe: [h] }], pt: [{ pt: [h] }], pr: [{ pr: [h] }], pb: [{ pb: [h] }], pl: [{ pl: [h] }], m: [{ m: [g] }], mx: [{ mx: [g] }], my: [{ my: [g] }], ms: [{ ms: [g] }], me: [{ me: [g] }], mt: [{ mt: [g] }], mr: [{ mr: [g] }], mb: [{ mb: [g] }], ml: [{ ml: [g] }], "space-x": [{ "space-x": [M] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [M] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", se, t] }], "min-w": [{ "min-w": [se, t, "min", "max", "fit"] }], "max-w": [{ "max-w": [se, t, "none", "full", "min", "max", "fit", "prose", { screen: [la] }, la] }], h: [{ h: [se, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }], "min-h": [{ "min-h": [se, t, "min", "max", "fit", "svh", "lvh", "dvh"] }], "max-h": [{ "max-h": [se, t, "min", "max", "fit", "svh", "lvh", "dvh"] }], size: [{ size: [se, t, "auto", "min", "max", "fit"] }], "font-size": [{ text: ["base", la, oa] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", d0] }], "font-family": [{ font: [jl] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractions"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", se] }], "line-clamp": [{ "line-clamp": ["none", ao, d0] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Rn, se] }], "list-image": [{ "list-image": ["none", se] }], "list-style-type": [{ list: ["none", "disc", "decimal", se] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [e3] }], "placeholder-opacity": [{ "placeholder-opacity": [m] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [e3] }], "text-opacity": [{ "text-opacity": [m] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [...X(), "wavy"] }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", Rn, oa] }], "underline-offset": [{ "underline-offset": ["auto", Rn, se] }], "text-decoration-color": [{ decoration: [e3] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }], indent: [{ indent: P() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", se] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", se] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [m] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [...te(), dC] }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", cC] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, hC] }], "bg-color": [{ bg: [e3] }], "gradient-from-pos": [{ from: [v] }], "gradient-via-pos": [{ via: [v] }], "gradient-to-pos": [{ to: [v] }], "gradient-from": [{ from: [p] }], "gradient-via": [{ via: [p] }], "gradient-to": [{ to: [p] }], rounded: [{ rounded: [i] }], "rounded-s": [{ "rounded-s": [i] }], "rounded-e": [{ "rounded-e": [i] }], "rounded-t": [{ "rounded-t": [i] }], "rounded-r": [{ "rounded-r": [i] }], "rounded-b": [{ "rounded-b": [i] }], "rounded-l": [{ "rounded-l": [i] }], "rounded-ss": [{ "rounded-ss": [i] }], "rounded-se": [{ "rounded-se": [i] }], "rounded-ee": [{ "rounded-ee": [i] }], "rounded-es": [{ "rounded-es": [i] }], "rounded-tl": [{ "rounded-tl": [i] }], "rounded-tr": [{ "rounded-tr": [i] }], "rounded-br": [{ "rounded-br": [i] }], "rounded-bl": [{ "rounded-bl": [i] }], "border-w": [{ border: [l] }], "border-w-x": [{ "border-x": [l] }], "border-w-y": [{ "border-y": [l] }], "border-w-s": [{ "border-s": [l] }], "border-w-e": [{ "border-e": [l] }], "border-w-t": [{ "border-t": [l] }], "border-w-r": [{ "border-r": [l] }], "border-w-b": [{ "border-b": [l] }], "border-w-l": [{ "border-l": [l] }], "border-opacity": [{ "border-opacity": [m] }], "border-style": [{ border: [...X(), "hidden"] }], "divide-x": [{ "divide-x": [l] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [l] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [m] }], "divide-style": [{ divide: X() }], "border-color": [{ border: [a] }], "border-color-x": [{ "border-x": [a] }], "border-color-y": [{ "border-y": [a] }], "border-color-s": [{ "border-s": [a] }], "border-color-e": [{ "border-e": [a] }], "border-color-t": [{ "border-t": [a] }], "border-color-r": [{ "border-r": [a] }], "border-color-b": [{ "border-b": [a] }], "border-color-l": [{ "border-l": [a] }], "divide-color": [{ divide: [a] }], "outline-style": [{ outline: ["", ...X()] }], "outline-offset": [{ "outline-offset": [Rn, se] }], "outline-w": [{ outline: [Rn, oa] }], "outline-color": [{ outline: [e3] }], "ring-w": [{ ring: _() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [e3] }], "ring-opacity": [{ "ring-opacity": [m] }], "ring-offset-w": [{ "ring-offset": [Rn, oa] }], "ring-offset-color": [{ "ring-offset": [e3] }], shadow: [{ shadow: ["", "inner", "none", la, pC] }], "shadow-color": [{ shadow: [jl] }], opacity: [{ opacity: [m] }], "mix-blend": [{ "mix-blend": [...ie(), "plus-lighter", "plus-darker"] }], "bg-blend": [{ "bg-blend": ie() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [r] }], brightness: [{ brightness: [n] }], contrast: [{ contrast: [s] }], "drop-shadow": [{ "drop-shadow": ["", "none", la, se] }], grayscale: [{ grayscale: [u] }], "hue-rotate": [{ "hue-rotate": [c] }], invert: [{ invert: [d] }], saturate: [{ saturate: [w] }], sepia: [{ sepia: [E] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [r] }], "backdrop-brightness": [{ "backdrop-brightness": [n] }], "backdrop-contrast": [{ "backdrop-contrast": [s] }], "backdrop-grayscale": [{ "backdrop-grayscale": [u] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }], "backdrop-invert": [{ "backdrop-invert": [d] }], "backdrop-opacity": [{ "backdrop-opacity": [m] }], "backdrop-saturate": [{ "backdrop-saturate": [w] }], "backdrop-sepia": [{ "backdrop-sepia": [E] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [o] }], "border-spacing-x": [{ "border-spacing-x": [o] }], "border-spacing-y": [{ "border-spacing-y": [o] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", se] }], duration: [{ duration: Pe() }], ease: [{ ease: ["linear", "in", "out", "in-out", se] }], delay: [{ delay: Pe() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", se] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [b] }], "scale-x": [{ "scale-x": [b] }], "scale-y": [{ "scale-y": [b] }], rotate: [{ rotate: [Il, se] }], "translate-x": [{ "translate-x": [x] }], "translate-y": [{ "translate-y": [x] }], "skew-x": [{ "skew-x": [N] }], "skew-y": [{ "skew-y": [N] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", se] }], accent: [{ accent: ["auto", e3] }], appearance: [{ appearance: ["none", "auto"] }], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", se] }], "caret-color": [{ caret: [e3] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": P() }], "scroll-mx": [{ "scroll-mx": P() }], "scroll-my": [{ "scroll-my": P() }], "scroll-ms": [{ "scroll-ms": P() }], "scroll-me": [{ "scroll-me": P() }], "scroll-mt": [{ "scroll-mt": P() }], "scroll-mr": [{ "scroll-mr": P() }], "scroll-mb": [{ "scroll-mb": P() }], "scroll-ml": [{ "scroll-ml": P() }], "scroll-p": [{ "scroll-p": P() }], "scroll-px": [{ "scroll-px": P() }], "scroll-py": [{ "scroll-py": P() }], "scroll-ps": [{ "scroll-ps": P() }], "scroll-pe": [{ "scroll-pe": P() }], "scroll-pt": [{ "scroll-pt": P() }], "scroll-pr": [{ "scroll-pr": P() }], "scroll-pb": [{ "scroll-pb": P() }], "scroll-pl": [{ "scroll-pl": P() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "manipulation"] }], "touch-x": [{ "touch-pan": ["x", "left", "right"] }], "touch-y": [{ "touch-pan": ["y", "up", "down"] }], "touch-pz": ["touch-pinch-zoom"], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", se] }], fill: [{ fill: [e3, "none"] }], "stroke-w": [{ stroke: [Rn, oa, d0] }], stroke: [{ stroke: [e3, "none"] }], sr: ["sr-only", "not-sr-only"], "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], size: ["w", "h"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], "line-clamp": ["display", "overflow"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
      };
      yC = (e3, { cacheSize: t, prefix: r, separator: n, experimentalParseClassName: a, extend: i = {}, override: o = {} }) => {
        Ul(e3, "cacheSize", t), Ul(e3, "prefix", r), Ul(e3, "separator", n), Ul(e3, "experimentalParseClassName", a);
        for (let l in o) wC(e3[l], o[l]);
        for (let l in i) xC(e3[l], i[l]);
        return e3;
      };
      Ul = (e3, t, r) => {
        r !== void 0 && (e3[t] = r);
      };
      wC = (e3, t) => {
        if (t) for (let r in t) Ul(e3, r, t[r]);
      };
      xC = (e3, t) => {
        if (t) for (let r in t) {
          let n = t[r];
          n !== void 0 && (e3[r] = (e3[r] || []).concat(n));
        }
      };
      bC = (e3, ...t) => typeof e3 == "function" ? V4(W4, e3, ...t) : V4(() => yC(W4(), e3), ...t);
      kC = { size4xl: "2.1125rem", size3xl: "1.75625rem", size2xl: "1.40625rem", sizeXl: "1.175rem", sizeLg: "1.0625rem", sizeBody: "0.875rem", sizeSm: "0.75rem", sizeXs: "0.6875rem", sizeMono: "0.875rem" };
      EC = { leading4xl: "2.625rem", leading3xl: "2.5rem", leading2xl: "2.25rem", leadingXl: "2rem", leadingLg: "1.75rem", leadingBody: "1.5rem", leadingSm: "1.125rem", leadingXs: "1rem", leadingMono: "1.5rem" };
      RC = bC({ extend: { classGroups: { "font-size": [{ text: Object.keys(kC) }], leading: [{ leading: Object.keys(EC) }] } } });
      CC = /* @__PURE__ */ Symbol.for("react.lazy");
      Lc = Qe[" use ".trim().toString()];
      m0 = NC("Slot");
      LC = /* @__PURE__ */ Symbol("radix.slottable");
      q4 = (e3) => typeof e3 == "boolean" ? `${e3}` : e3 === 0 ? "0" : e3;
      G4 = X4;
      AC = (e3, t) => (r) => {
        var n;
        if (t?.variants == null) return G4(e3, r?.class, r?.className);
        let { variants: a, defaultVariants: i } = t, o = Object.keys(a).map((u) => {
          let c = r?.[u], d = i?.[u];
          if (c === null) return null;
          let f = q4(c) || q4(d);
          return a[u][f];
        }), l = r && Object.entries(r).reduce((u, c) => {
          let [d, f] = c;
          return f === void 0 || (u[d] = f), u;
        }, {}), s = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, c) => {
          let { class: d, className: f, ...p } = c;
          return Object.entries(p).every((v) => {
            let [y, g] = v;
            return Array.isArray(g) ? g.includes({ ...i, ...l }[y]) : { ...i, ...l }[y] === g;
          }) ? [...u, d, f] : u;
        }, []);
        return G4(e3, o, s, r?.class, r?.className);
      };
      FC = AC("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", { variants: { variant: { default: "border border-border bg-card text-card-foreground shadow-sm hover:bg-muted", primary: "bg-foreground text-background hover:bg-foreground/90", destructive: "bg-red-600 text-white hover:bg-red-700", outline: "border border-border bg-transparent text-textSecondary hover:bg-muted hover:text-textPrimary", secondary: "bg-secondary text-textPrimary hover:bg-secondary/80", ghost: "text-textSecondary hover:bg-muted hover:text-textPrimary", link: "text-textSecondary underline-offset-4 hover:underline hover:text-textPrimary", danger: "bg-destructive/10 text-destructive hover:bg-destructive/20", destructiveOutline: "border border-destructive/40 bg-card text-destructive shadow-sm hover:bg-destructive/5" }, size: { default: "h-10 px-4 py-2 rounded-full", sm: "h-8 px-3 text-xs rounded-full", lg: "h-11 px-6 rounded-full", icon: "h-9 w-9 rounded-lg", control: "h-8 px-4 rounded font-normal", controlIcon: "h-8 w-8 rounded" } }, defaultVariants: { variant: "default", size: "default" } });
      g0 = (0, rx.forwardRef)(({ className: e3, variant: t, size: r, asChild: n = false, ...a }, i) => (0, nx.jsx)(n ? m0 : "button", { className: p0(FC({ variant: t, size: r, className: e3 })), ref: i, ...a }));
      g0.displayName = "Button";
      $C = { primary: "border-ds-foreground1 bg-ds-foreground1 text-ds-onPrimary", secondary: "border-transparent bg-ds-background1 text-ds-foreground1 shadow-[0_0_0_1px_var(--ds-hairline)] disabled:bg-ds-background2 disabled:shadow-[0_0_0_1px_var(--ds-hairline)]", ghost: "border-transparent bg-transparent font-semibold text-ds-foreground1 underline [text-underline-position:from-font] disabled:bg-transparent disabled:font-medium", destructive: "border-transparent bg-ds-dangerWash text-ds-danger", success: "border-transparent bg-ds-successWash text-ds-success" };
      y0 = (0, v0.forwardRef)(({ variant: e3, fullWidth: t, large: r, className: n, asChild: a = false, iconBefore: i, iconAfter: o, type: l = "button", children: s, ...u }, c) => {
        let d = zC({ variant: e3, fullWidth: t, large: r, className: n });
        return a ? (0, Hl.jsx)(m0, { ref: c, className: d, ...u, children: s }) : (0, Hl.jsxs)("button", { ref: c, type: l, className: d, ...u, children: [i, s, o] });
      });
      y0.displayName = "DsButton";
      w0 = (0, v0.forwardRef)(({ label: e3, className: t, asChild: r = false, type: n = "button", ...a }, i) => (0, Hl.jsx)(r ? m0 : "button", { ref: i, type: r ? void 0 : n, "aria-label": e3, title: e3, className: p0("inline-flex h-8 w-8 flex-none cursor-pointer items-center justify-center rounded-[var(--ds-radius-compact)] border-0 bg-transparent p-2 leading-none text-ds-ink transition-[background-color,color,transform] [transition-duration:120ms] [[data-app-motion]_&]:motion-safe:enabled:active:scale-[0.94] hover:bg-ds-hover active:bg-ds-hoverStrong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-ink4 disabled:cursor-default disabled:bg-transparent disabled:text-ds-ink4 [&_svg]:h-4 [&_svg]:w-4", t), ...a }));
      w0.displayName = "DsIconButton";
      He = j(ee(), 1);
      Kl = j(ee(), 1);
      Xc = j(ee(), 1);
      tb = j(ee(), 1);
      ca = j(ee(), 1);
      $c = j(ee(), 1);
      Hb = j(ee(), 1);
      Ql = j(ee(), 1);
      Cn = j(ee(), 1);
      ma = j(ee(), 1);
      ed = j(ee(), 1);
      R = j(we(), 1);
      Nt = j(ee(), 1);
      Lt = j(ee(), 1);
      he = j(we(), 1);
      nd = j(ee(), 1);
      tr = j(we(), 1);
      ri = j(ee(), 1);
      fa = j(we(), 1);
      Y0 = j(ee(), 1);
      U = j(we(), 1);
      ue = j(we(), 1);
      A = j(we(), 1);
      ho = j(ee(), 1);
      Fe = j(we(), 1);
      S5 = j(ee(), 1);
      Ee = j(we(), 1);
      Vl = j(we(), 1);
      _5 = j(ee(), 1);
      T5 = j(we(), 1);
      A5 = j(we(), 1);
      Pr = j(we(), 1);
      ua = j(we(), 1);
      ld = j(ee(), 1);
      Ja = j(ee(), 1);
      Mt = j(we(), 1);
      Jl = j(ee(), 1);
      lt = j(we(), 1);
      I5 = j(ee(), 1);
      ne = j(we(), 1);
      fe = j(we(), 1);
      Ct = j(we(), 1);
      Y5 = j(ee(), 1);
      Re = j(we(), 1);
      q5 = j(ee(), 1);
      Dt = j(we(), 1);
      OC = Object.create;
      Wx = Object.defineProperty;
      IC = Object.getOwnPropertyDescriptor;
      jC = Object.getOwnPropertyNames;
      UC = Object.getPrototypeOf;
      HC = Object.prototype.hasOwnProperty;
      BC = (e3, t) => () => (t || e3((t = { exports: {} }).exports, t), t.exports);
      VC = (e3, t, r, n) => {
        if (t && typeof t == "object" || typeof t == "function") for (let a of jC(t)) !HC.call(e3, a) && a !== r && Wx(e3, a, { get: () => t[a], enumerable: !(n = IC(t, a)) || n.enumerable });
        return e3;
      };
      Yx = (e3, t, r) => (r = e3 != null ? OC(UC(e3)) : {}, VC(t || !e3 || !e3.__esModule ? Wx(r, "default", { value: e3, enumerable: true }) : r, e3));
      qx = BC((e3, t) => {
        (function() {
          "use strict";
          var r = {}.hasOwnProperty;
          function n() {
            for (var o = "", l = 0; l < arguments.length; l++) {
              var s = arguments[l];
              s && (o = i(o, a(s)));
            }
            return o;
          }
          function a(o) {
            if (typeof o == "string" || typeof o == "number") return o;
            if (typeof o != "object") return "";
            if (Array.isArray(o)) return n.apply(null, o);
            if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) return o.toString();
            var l = "";
            for (var s in o) r.call(o, s) && o[s] && (l = i(l, s));
            return l;
          }
          function i(o, l) {
            return l ? o ? o + " " + l : o + l : o;
          }
          typeof t < "u" && t.exports ? (n.default = n, t.exports = n) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
            return n;
          }) : window.classNames = n;
        })();
      });
      Tr = (e3) => e3;
      Pt = (e3) => e3.toLocaleLowerCase();
      Gc = { myPick: "My pick", recommended: "Recommended", rangeLegend: "low \xB7 now \xB7 high", noPhoto: "No photo supplied", noData: "No data to display.", noMatches: "No matching items.", chartData: "View chart data", observation: "Observation", observationNumber: (e3) => `Observation ${e3}`, value: "Value", noObservation: "No observation", attribute: "Attribute", price: "Price", was: ", was ", close: "Close", previousPhoto: "Previous photo", nextPhoto: "Next photo", photoCount: (e3, t) => `${e3} of ${t}`, photosOf: (e3) => `Photos of ${e3}`, fullScreen: (e3) => `${e3}, full screen`, view: (e3) => `View ${e3}`, viewAt: (e3) => `View at ${e3}`, buy: "Let\u2019s buy this", buyShort: "Buy this", sending: "Sending\u2026", sentToInstinct: "Sent to Instinct", sent: "Sent", soldOut: "Sold out", retry: "Retry", copy: "Copy", copied: "Copied", copyFailed: "Copy blocked", choose: (e3) => `Choose ${/^[aeiou]/i.test(e3) ? "an" : "a"} ${Pt(e3)}`, chooseToCheckStock: (e3) => `${Gc.choose(e3)} to check stock`, soldOutIn: (e3) => `Sold out in ${e3}`, onlyLeftIn: (e3, t) => `Only ${e3} left in ${t}`, inStockIn: (e3) => `In stock in ${e3}`, inStock: (e3) => `${e3} in stock`, valuesSoldOut: (e3) => `${e3.join(", ")} sold out`, valueSoldOut: (e3, t) => `${e3}, sold out${t ? ` in ${t}` : ""}`, plural: (e3) => /(s|sh|ch|x|z)$/i.test(e3) ? `${e3}es` : /[^aeiou]y$/i.test(e3) ? `${e3.slice(0, -1)}ies` : `${e3}s`, optionIn: (e3, t) => `${e3} in ${t}`, andMore: (e3) => ` and ${e3} more`, loadingState: "Loading saved state\u2026", savingState: "Saving\u2026", savedState: "Saved on this device", unsavedState: "Not saved. Changes last only while this File is open.", wakeAccepted: "Sent to your agent", wakeWait: (e3) => `Please wait ${e3} seconds, then retry.`, wakeRetryNow: "You can retry now.", wakeUnconfirmed: "Delivery not confirmed. Retry to check without sending twice.", wakeForbidden: "Sign in as the File owner to send this to your agent.", wakeCanceled: "This request was canceled. You can send a new request.", wakeFailed: "This request could not be sent.", wakeUnavailable: "Agent actions are unavailable here." };
      WC = { myPick: "Mi elecci\xF3n", recommended: "Recomendado", rangeLegend: "m\xEDn. \xB7 actual \xB7 m\xE1x.", noPhoto: "Sin foto", noData: "No hay datos que mostrar.", noMatches: "No hay resultados.", chartData: "Ver los datos del gr\xE1fico", observation: "Observaci\xF3n", observationNumber: (e3) => `Observaci\xF3n ${e3}`, value: "Valor", noObservation: "Sin observaci\xF3n", attribute: "Atributo", price: "Precio", was: ", antes ", close: "Cerrar", previousPhoto: "Foto anterior", nextPhoto: "Foto siguiente", photoCount: (e3, t) => `${e3} de ${t}`, photosOf: (e3) => `Fotos de ${e3}`, fullScreen: (e3) => `${e3}, pantalla completa`, view: (e3) => `Ver ${e3}`, viewAt: (e3) => `Ver en ${e3}`, buy: "Vamos a comprarlo", buyShort: "Comprar", sending: "Enviando\u2026", sentToInstinct: "Enviado a Instinct", sent: "Enviado", soldOut: "Agotado", retry: "Reintentar", copy: "Copiar", copied: "Copiado", copyFailed: "No se pudo copiar", choose: (e3) => `Elige ${Pt(e3)}`, chooseToCheckStock: (e3) => `Elige ${Pt(e3)} para ver la disponibilidad`, soldOutIn: (e3) => `Agotado en ${e3}`, onlyLeftIn: (e3, t) => `Solo quedan ${e3} en ${t}`, inStockIn: (e3) => `Disponible en ${e3}`, inStock: (e3) => `${e3} disponible`, valuesSoldOut: (e3) => `${e3.join(", ")} ${e3.length > 1 ? "agotados" : "agotado"}`, valueSoldOut: (e3, t) => `${e3}, agotado${t ? ` en ${t}` : ""}`, plural: Tr, optionIn: (e3, t) => `${e3} en ${t}`, andMore: (e3) => ` y ${e3} m\xE1s`, loadingState: "Cargando lo guardado\u2026", savingState: "Guardando\u2026", savedState: "Guardado en este dispositivo", unsavedState: "Sin guardar. Los cambios duran solo mientras este File est\xE9 abierto.", wakeAccepted: "Enviado a tu agente", wakeWait: (e3) => `Espera ${e3} segundos y vuelve a intentarlo.`, wakeRetryNow: "Ya puedes reintentarlo.", wakeUnconfirmed: "Entrega sin confirmar. Reintenta para comprobarlo sin enviarlo dos veces.", wakeForbidden: "Inicia sesi\xF3n como due\xF1o del File para envi\xE1rselo a tu agente.", wakeCanceled: "Se cancel\xF3 esta solicitud. Puedes enviar una nueva.", wakeFailed: "No se pudo enviar esta solicitud.", wakeUnavailable: "Las acciones del agente no est\xE1n disponibles aqu\xED." };
      YC = { myPick: "Mon choix", recommended: "Recommand\xE9", rangeLegend: "min \xB7 actuel \xB7 max", noPhoto: "Pas de photo", noData: "Aucune donn\xE9e \xE0 afficher.", noMatches: "Aucun r\xE9sultat.", chartData: "Voir les donn\xE9es du graphique", observation: "Observation", observationNumber: (e3) => `Observation ${e3}`, value: "Valeur", noObservation: "Aucune observation", attribute: "Attribut", price: "Prix", was: ", au lieu de ", close: "Fermer", previousPhoto: "Photo pr\xE9c\xE9dente", nextPhoto: "Photo suivante", photoCount: (e3, t) => `${e3} sur ${t}`, photosOf: (e3) => `Photos de ${e3}`, fullScreen: (e3) => `${e3}, plein \xE9cran`, view: (e3) => `Voir ${e3}`, viewAt: (e3) => `Voir chez ${e3}`, buy: "On l\u2019ach\xE8te", buyShort: "Acheter", sending: "Envoi\u2026", sentToInstinct: "Envoy\xE9 \xE0 Instinct", sent: "Envoy\xE9", soldOut: "\xC9puis\xE9", retry: "R\xE9essayer", copy: "Copier", copied: "Copi\xE9", copyFailed: "Copie impossible", choose: (e3) => `${e3} \xE0 choisir`, chooseToCheckStock: (e3) => `Choisissez ${Pt(e3)} pour voir le stock`, soldOutIn: (e3) => `\xC9puis\xE9 en ${e3}`, onlyLeftIn: (e3, t) => `Plus que ${e3} en ${t}`, inStockIn: (e3) => `En stock en ${e3}`, inStock: (e3) => `${e3} en stock`, valuesSoldOut: (e3) => `${e3.join(", ")} ${e3.length > 1 ? "\xE9puis\xE9s" : "\xE9puis\xE9"}`, valueSoldOut: (e3, t) => `${e3}, \xE9puis\xE9${t ? ` en ${t}` : ""}`, plural: Tr, optionIn: (e3, t) => `${e3} en ${t}`, andMore: (e3) => ` et ${e3} de plus`, loadingState: "Chargement de l\u2019\xE9tat enregistr\xE9\u2026", savingState: "Enregistrement\u2026", savedState: "Enregistr\xE9 sur cet appareil", unsavedState: "Non enregistr\xE9. Les modifications durent tant que ce File reste ouvert.", wakeAccepted: "Envoy\xE9 \xE0 votre agent", wakeWait: (e3) => `Attendez ${e3} secondes, puis r\xE9essayez.`, wakeRetryNow: "Vous pouvez r\xE9essayer.", wakeUnconfirmed: "Envoi non confirm\xE9. R\xE9essayez pour v\xE9rifier sans envoyer deux fois.", wakeForbidden: "Connectez-vous en tant que propri\xE9taire du File pour l\u2019envoyer \xE0 votre agent.", wakeCanceled: "Cette demande a \xE9t\xE9 annul\xE9e. Vous pouvez en envoyer une nouvelle.", wakeFailed: "Cette demande n\u2019a pas pu \xEAtre envoy\xE9e.", wakeUnavailable: "Les actions de l\u2019agent ne sont pas disponibles ici." };
      qC = { myPick: "Meine Wahl", recommended: "Empfohlen", rangeLegend: "min. \xB7 aktuell \xB7 max.", noPhoto: "Kein Foto", noData: "Keine Daten vorhanden.", noMatches: "Keine Treffer.", chartData: "Diagrammdaten anzeigen", observation: "Messpunkt", observationNumber: (e3) => `Messpunkt ${e3}`, value: "Wert", noObservation: "Kein Messwert", attribute: "Merkmal", price: "Preis", was: ", vorher ", close: "Schlie\xDFen", previousPhoto: "Vorheriges Foto", nextPhoto: "N\xE4chstes Foto", photoCount: (e3, t) => `${e3} von ${t}`, photosOf: (e3) => `Fotos von ${e3}`, fullScreen: (e3) => `${e3}, Vollbild`, view: (e3) => `${e3} ansehen`, viewAt: (e3) => `Bei ${e3} ansehen`, buy: "Lass es uns kaufen", buyShort: "Kaufen", sending: "Wird gesendet\u2026", sentToInstinct: "An Instinct gesendet", sent: "Gesendet", soldOut: "Ausverkauft", retry: "Erneut versuchen", copy: "Kopieren", copied: "Kopiert", copyFailed: "Kopieren blockiert", choose: (e3) => `${e3} w\xE4hlen`, chooseToCheckStock: (e3) => `${e3} w\xE4hlen, um den Bestand zu sehen`, soldOutIn: (e3) => `Ausverkauft in ${e3}`, onlyLeftIn: (e3, t) => `Nur noch ${e3} in ${t}`, inStockIn: (e3) => `Verf\xFCgbar in ${e3}`, inStock: (e3) => `${e3} verf\xFCgbar`, valuesSoldOut: (e3) => `${e3.join(", ")} ausverkauft`, valueSoldOut: (e3, t) => `${e3}, ausverkauft${t ? ` in ${t}` : ""}`, plural: Tr, optionIn: (e3, t) => `${e3} in ${t}`, andMore: (e3) => ` und ${e3} weitere`, loadingState: "Gespeicherter Stand wird geladen\u2026", savingState: "Wird gespeichert\u2026", savedState: "Auf diesem Ger\xE4t gespeichert", unsavedState: "Nicht gespeichert. \xC4nderungen bleiben nur, solange dieses File offen ist.", wakeAccepted: "An deinen Agenten gesendet", wakeWait: (e3) => `Bitte warte ${e3} Sekunden und versuche es dann erneut.`, wakeRetryNow: "Du kannst es jetzt erneut versuchen.", wakeUnconfirmed: "Zustellung nicht best\xE4tigt. Versuche es erneut, um ohne doppeltes Senden nachzusehen.", wakeForbidden: "Melde dich als Besitzer dieses Files an, um es an deinen Agenten zu senden.", wakeCanceled: "Diese Anfrage wurde abgebrochen. Du kannst eine neue senden.", wakeFailed: "Diese Anfrage konnte nicht gesendet werden.", wakeUnavailable: "Agentenaktionen sind hier nicht verf\xFCgbar." };
      GC = { myPick: "La mia scelta", recommended: "Consigliato", rangeLegend: "min \xB7 attuale \xB7 max", noPhoto: "Nessuna foto", noData: "Nessun dato da mostrare.", noMatches: "Nessun risultato.", chartData: "Vedi i dati del grafico", observation: "Osservazione", observationNumber: (e3) => `Osservazione ${e3}`, value: "Valore", noObservation: "Nessuna osservazione", attribute: "Attributo", price: "Prezzo", was: ", prima ", close: "Chiudi", previousPhoto: "Foto precedente", nextPhoto: "Foto successiva", photoCount: (e3, t) => `${e3} di ${t}`, photosOf: (e3) => `Foto di ${e3}`, fullScreen: (e3) => `${e3}, schermo intero`, view: (e3) => `Vedi ${e3}`, viewAt: (e3) => `Vedi su ${e3}`, buy: "Compriamolo", buyShort: "Compra", sending: "Invio\u2026", sentToInstinct: "Inviato a Instinct", sent: "Inviato", soldOut: "Esaurito", retry: "Riprova", copy: "Copia", copied: "Copiato", copyFailed: "Copia bloccata", choose: (e3) => `Scegli ${Pt(e3)}`, chooseToCheckStock: (e3) => `Scegli ${Pt(e3)} per vedere la disponibilit\xE0`, soldOutIn: (e3) => `Esaurito in ${e3}`, onlyLeftIn: (e3, t) => `Solo ${e3} rimasti in ${t}`, inStockIn: (e3) => `Disponibile in ${e3}`, inStock: (e3) => `${e3} disponibile`, valuesSoldOut: (e3) => `${e3.join(", ")} ${e3.length > 1 ? "esauriti" : "esaurito"}`, valueSoldOut: (e3, t) => `${e3}, esaurito${t ? ` in ${t}` : ""}`, plural: Tr, optionIn: (e3, t) => `${e3} in ${t}`, andMore: (e3) => ` e altri ${e3}`, loadingState: "Caricamento dello stato salvato\u2026", savingState: "Salvataggio\u2026", savedState: "Salvato su questo dispositivo", unsavedState: "Non salvato. Le modifiche durano solo finch\xE9 questo File resta aperto.", wakeAccepted: "Inviato al tuo agente", wakeWait: (e3) => `Aspetta ${e3} secondi, poi riprova.`, wakeRetryNow: "Ora puoi riprovare.", wakeUnconfirmed: "Consegna non confermata. Riprova per controllare senza inviare due volte.", wakeForbidden: "Accedi come proprietario del File per inviarlo al tuo agente.", wakeCanceled: "Questa richiesta \xE8 stata annullata. Puoi inviarne una nuova.", wakeFailed: "Non \xE8 stato possibile inviare questa richiesta.", wakeUnavailable: "Le azioni dell\u2019agente non sono disponibili qui." };
      KC = { myPick: "Minha escolha", recommended: "Recomendado", rangeLegend: "m\xEDn. \xB7 atual \xB7 m\xE1x.", noPhoto: "Sem foto", noData: "N\xE3o h\xE1 dados para mostrar.", noMatches: "Nenhum resultado.", chartData: "Ver os dados do gr\xE1fico", observation: "Observa\xE7\xE3o", observationNumber: (e3) => `Observa\xE7\xE3o ${e3}`, value: "Valor", noObservation: "Sem observa\xE7\xE3o", attribute: "Atributo", price: "Pre\xE7o", was: ", antes ", close: "Fechar", previousPhoto: "Foto anterior", nextPhoto: "Pr\xF3xima foto", photoCount: (e3, t) => `${e3} de ${t}`, photosOf: (e3) => `Fotos de ${e3}`, fullScreen: (e3) => `${e3}, tela cheia`, view: (e3) => `Ver ${e3}`, viewAt: (e3) => `Ver em ${e3}`, buy: "Vamos comprar", buyShort: "Comprar", sending: "Enviando\u2026", sentToInstinct: "Enviado ao Instinct", sent: "Enviado", soldOut: "Esgotado", retry: "Tentar de novo", copy: "Copiar", copied: "Copiado", copyFailed: "C\xF3pia bloqueada", choose: (e3) => `Selecione ${Pt(e3)}`, chooseToCheckStock: (e3) => `Selecione ${Pt(e3)} para ver o estoque`, soldOutIn: (e3) => `Esgotado em ${e3}`, onlyLeftIn: (e3, t) => `S\xF3 restam ${e3} em ${t}`, inStockIn: (e3) => `Dispon\xEDvel em ${e3}`, inStock: (e3) => `${e3} dispon\xEDvel`, valuesSoldOut: (e3) => `${e3.join(", ")} ${e3.length > 1 ? "esgotados" : "esgotado"}`, valueSoldOut: (e3, t) => `${e3}, esgotado${t ? ` em ${t}` : ""}`, plural: Tr, optionIn: (e3, t) => `${e3} em ${t}`, andMore: (e3) => ` e mais ${e3}`, loadingState: "Carregando o que foi salvo\u2026", savingState: "Salvando\u2026", savedState: "Salvo neste dispositivo", unsavedState: "N\xE3o salvo. As altera\xE7\xF5es duram s\xF3 enquanto este File estiver aberto.", wakeAccepted: "Enviado ao seu agente", wakeWait: (e3) => `Aguarde ${e3} segundos e tente de novo.`, wakeRetryNow: "Voc\xEA j\xE1 pode tentar de novo.", wakeUnconfirmed: "Entrega n\xE3o confirmada. Tente de novo para verificar sem enviar duas vezes.", wakeForbidden: "Entre como dono do File para enviar isto ao seu agente.", wakeCanceled: "Esta solicita\xE7\xE3o foi cancelada. Voc\xEA pode enviar uma nova.", wakeFailed: "N\xE3o foi poss\xEDvel enviar esta solicita\xE7\xE3o.", wakeUnavailable: "As a\xE7\xF5es do agente n\xE3o est\xE3o dispon\xEDveis aqui." };
      XC = { myPick: "La meva tria", recommended: "Recomanat", rangeLegend: "m\xEDn. \xB7 actual \xB7 m\xE0x.", noPhoto: "Sense foto", noData: "No hi ha dades per mostrar.", noMatches: "Cap resultat.", chartData: "Mostra les dades del gr\xE0fic", observation: "Observaci\xF3", observationNumber: (e3) => `Observaci\xF3 ${e3}`, value: "Valor", noObservation: "Sense observaci\xF3", attribute: "Atribut", price: "Preu", was: ", abans ", close: "Tanca", previousPhoto: "Foto anterior", nextPhoto: "Foto seg\xFCent", photoCount: (e3, t) => `${e3} de ${t}`, photosOf: (e3) => `Fotos de ${e3}`, fullScreen: (e3) => `${e3}, pantalla completa`, view: (e3) => `Mostra ${e3}`, viewAt: (e3) => `Mostra a ${e3}`, buy: "Comprem-ho", buyShort: "Compra", sending: "S\u2019est\xE0 enviant\u2026", sentToInstinct: "Enviat a Instinct", sent: "Enviat", soldOut: "Esgotat", retry: "Torna-ho a provar", copy: "Copia", copied: "Copiat", copyFailed: "No s\u2019ha pogut copiar", choose: (e3) => `Tria ${Pt(e3)}`, chooseToCheckStock: (e3) => `Tria ${Pt(e3)} per veure la disponibilitat`, soldOutIn: (e3) => `Esgotat en ${e3}`, onlyLeftIn: (e3, t) => `Nom\xE9s en queden ${e3} en ${t}`, inStockIn: (e3) => `Disponible en ${e3}`, inStock: (e3) => `${e3} disponible`, valuesSoldOut: (e3) => `${e3.join(", ")} ${e3.length > 1 ? "esgotats" : "esgotat"}`, valueSoldOut: (e3, t) => `${e3}, esgotat${t ? ` en ${t}` : ""}`, plural: Tr, optionIn: (e3, t) => `${e3} en ${t}`, andMore: (e3) => ` i ${e3} m\xE9s`, loadingState: "S\u2019est\xE0 carregant l\u2019estat desat\u2026", savingState: "S\u2019est\xE0 desant\u2026", savedState: "Desat en aquest dispositiu", unsavedState: "No desat. Els canvis nom\xE9s duren mentre aquest File estigui obert.", wakeAccepted: "Enviat al teu agent", wakeWait: (e3) => `Espera ${e3} segons i torna-ho a provar.`, wakeRetryNow: "Ja ho pots tornar a provar.", wakeUnconfirmed: "Lliurament no confirmat. Torna-ho a provar per comprovar-ho sense enviar-ho dues vegades.", wakeForbidden: "Inicia la sessi\xF3 com a propietari del File per enviar-ho al teu agent.", wakeCanceled: "S\u2019ha cancel\xB7lat aquesta sol\xB7licitud. Pots enviar-ne una de nova.", wakeFailed: "No s\u2019ha pogut enviar aquesta sol\xB7licitud.", wakeUnavailable: "Les accions de l\u2019agent no estan disponibles aqu\xED." };
      QC = { myPick: "Mijn keuze", recommended: "Aanbevolen", rangeLegend: "laag \xB7 nu \xB7 hoog", noPhoto: "Geen foto", noData: "Geen gegevens om te tonen.", noMatches: "Geen resultaten.", chartData: "Grafiekgegevens bekijken", observation: "Meting", observationNumber: (e3) => `Meting ${e3}`, value: "Waarde", noObservation: "Geen meting", attribute: "Kenmerk", price: "Prijs", was: ", was ", close: "Sluiten", previousPhoto: "Vorige foto", nextPhoto: "Volgende foto", photoCount: (e3, t) => `${e3} van ${t}`, photosOf: (e3) => `Foto\u2019s van ${e3}`, fullScreen: (e3) => `${e3}, volledig scherm`, view: (e3) => `${e3} bekijken`, viewAt: (e3) => `Bekijken bij ${e3}`, buy: "Laten we dit kopen", buyShort: "Kopen", sending: "Versturen\u2026", sentToInstinct: "Naar Instinct gestuurd", sent: "Verstuurd", soldOut: "Uitverkocht", retry: "Opnieuw", copy: "Kopi\xEBren", copied: "Gekopieerd", copyFailed: "Kopi\xEBren geblokkeerd", choose: (e3) => `Kies ${Pt(e3)}`, chooseToCheckStock: (e3) => `Kies ${Pt(e3)} om de voorraad te zien`, soldOutIn: (e3) => `Uitverkocht in ${e3}`, onlyLeftIn: (e3, t) => `Nog maar ${e3} in ${t}`, inStockIn: (e3) => `Op voorraad in ${e3}`, inStock: (e3) => `${e3} op voorraad`, valuesSoldOut: (e3) => `${e3.join(", ")} uitverkocht`, valueSoldOut: (e3, t) => `${e3}, uitverkocht${t ? ` in ${t}` : ""}`, plural: Tr, optionIn: (e3, t) => `${e3} in ${t}`, andMore: (e3) => ` en nog ${e3}`, loadingState: "Opgeslagen stand laden\u2026", savingState: "Opslaan\u2026", savedState: "Opgeslagen op dit apparaat", unsavedState: "Niet opgeslagen. Wijzigingen blijven alleen zolang dit File open is.", wakeAccepted: "Naar je agent gestuurd", wakeWait: (e3) => `Wacht ${e3} seconden en probeer het dan opnieuw.`, wakeRetryNow: "Je kunt het nu opnieuw proberen.", wakeUnconfirmed: "Bezorging niet bevestigd. Probeer opnieuw om te controleren zonder dubbel te versturen.", wakeForbidden: "Log in als eigenaar van dit File om dit naar je agent te sturen.", wakeCanceled: "Dit verzoek is geannuleerd. Je kunt een nieuw verzoek sturen.", wakeFailed: "Dit verzoek kon niet worden verstuurd.", wakeUnavailable: "Agentacties zijn hier niet beschikbaar." };
      ZC = { myPick: "Alegerea mea", recommended: "Recomandat", rangeLegend: "min. \xB7 acum \xB7 max.", noPhoto: "F\u0103r\u0103 fotografie", noData: "Nu exist\u0103 date de afi\u0219at.", noMatches: "Niciun rezultat.", chartData: "Vezi datele graficului", observation: "Observa\u021Bie", observationNumber: (e3) => `Observa\u021Bia ${e3}`, value: "Valoare", noObservation: "F\u0103r\u0103 observa\u021Bie", attribute: "Atribut", price: "Pre\u021B", was: ", \xEEnainte ", close: "\xCEnchide", previousPhoto: "Fotografia anterioar\u0103", nextPhoto: "Fotografia urm\u0103toare", photoCount: (e3, t) => `${e3} din ${t}`, photosOf: (e3) => `Fotografii cu ${e3}`, fullScreen: (e3) => `${e3}, ecran complet`, view: (e3) => `Vezi ${e3}`, viewAt: (e3) => `Vezi la ${e3}`, buy: "Hai s\u0103-l cump\u0103r\u0103m", buyShort: "Cump\u0103r\u0103", sending: "Se trimite\u2026", sentToInstinct: "Trimis la Instinct", sent: "Trimis", soldOut: "Epuizat", retry: "Re\xEEncearc\u0103", copy: "Copiaz\u0103", copied: "Copiat", copyFailed: "Copiere blocat\u0103", choose: (e3) => `Alege ${Pt(e3)}`, chooseToCheckStock: (e3) => `Alege ${Pt(e3)} ca s\u0103 vezi stocul`, soldOutIn: (e3) => `Epuizat \xEEn ${e3}`, onlyLeftIn: (e3, t) => `Doar ${e3} r\u0103mase \xEEn ${t}`, inStockIn: (e3) => `\xCEn stoc \xEEn ${e3}`, inStock: (e3) => `${e3} \xEEn stoc`, valuesSoldOut: (e3) => `${e3.join(", ")} ${e3.length > 1 ? "epuizate" : "epuizat"}`, valueSoldOut: (e3, t) => `${e3}, epuizat${t ? ` \xEEn ${t}` : ""}`, plural: Tr, optionIn: (e3, t) => `${e3} \xEEn ${t}`, andMore: (e3) => ` \u0219i \xEEnc\u0103 ${e3}`, loadingState: "Se \xEEncarc\u0103 starea salvat\u0103\u2026", savingState: "Se salveaz\u0103\u2026", savedState: "Salvat pe acest dispozitiv", unsavedState: "Nesalvat. Modific\u0103rile r\u0103m\xE2n doar c\xE2t timp acest File e deschis.", wakeAccepted: "Trimis agentului t\u0103u", wakeWait: (e3) => `A\u0219teapt\u0103 ${e3} secunde, apoi re\xEEncearc\u0103.`, wakeRetryNow: "Po\u021Bi re\xEEncerca acum.", wakeUnconfirmed: "Livrare neconfirmat\u0103. Re\xEEncearc\u0103 pentru a verifica f\u0103r\u0103 a trimite de dou\u0103 ori.", wakeForbidden: "Conecteaz\u0103-te ca proprietar al File-ului ca s\u0103-l trimi\u021Bi agentului t\u0103u.", wakeCanceled: "Cererea a fost anulat\u0103. Po\u021Bi trimite una nou\u0103.", wakeFailed: "Cererea nu a putut fi trimis\u0103.", wakeUnavailable: "Ac\u021Biunile agentului nu sunt disponibile aici." };
      JC = { myPick: "\u041C\u043E\u0439 \u0432\u044B\u0431\u043E\u0440", recommended: "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u044E", rangeLegend: "\u043C\u0438\u043D. \xB7 \u0441\u0435\u0439\u0447\u0430\u0441 \xB7 \u043C\u0430\u043A\u0441.", noPhoto: "\u041D\u0435\u0442 \u0444\u043E\u0442\u043E", noData: "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445.", noMatches: "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E.", chartData: "\u0414\u0430\u043D\u043D\u044B\u0435 \u0433\u0440\u0430\u0444\u0438\u043A\u0430", observation: "\u041D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435", observationNumber: (e3) => `\u041D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435 ${e3}`, value: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435", noObservation: "\u041D\u0435\u0442 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F", attribute: "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440", price: "\u0426\u0435\u043D\u0430", was: ", \u0431\u044B\u043B\u043E ", close: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C", previousPhoto: "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0435 \u0444\u043E\u0442\u043E", nextPhoto: "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u0444\u043E\u0442\u043E", photoCount: (e3, t) => `${e3} \u0438\u0437 ${t}`, photosOf: (e3) => `\u0424\u043E\u0442\u043E: ${e3}`, fullScreen: (e3) => `${e3}, \u043D\u0430 \u0432\u0435\u0441\u044C \u044D\u043A\u0440\u0430\u043D`, view: (e3) => `\u041E\u0442\u043A\u0440\u044B\u0442\u044C ${e3}`, viewAt: (e3) => `\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043D\u0430 ${e3}`, buy: "\u0414\u0430\u0432\u0430\u0439 \u043A\u0443\u043F\u0438\u043C", buyShort: "\u041A\u0443\u043F\u0438\u0442\u044C", sending: "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430\u2026", sentToInstinct: "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u0432 Instinct", sent: "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E", soldOut: "\u041D\u0435\u0442 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438", retry: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C", copy: "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C", copied: "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E", copyFailed: "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043E", choose: (e3) => `\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 ${Pt(e3)}`, chooseToCheckStock: (e3) => `\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 ${Pt(e3)}, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043D\u0430\u043B\u0438\u0447\u0438\u0435`, soldOutIn: (e3) => `\u041D\u0435\u0442 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438: ${e3}`, onlyLeftIn: (e3, t) => `\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C ${e3}: ${t}`, inStockIn: (e3) => `\u0412 \u043D\u0430\u043B\u0438\u0447\u0438\u0438: ${e3}`, inStock: (e3) => `${e3} \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438`, valuesSoldOut: (e3) => `${e3.join(", ")} \u043D\u0435\u0442 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438`, valueSoldOut: (e3, t) => `${e3}, \u043D\u0435\u0442 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438${t ? ` (${t})` : ""}`, plural: Tr, optionIn: (e3, t) => `${e3}: ${t}`, andMore: (e3) => ` \u0438 \u0435\u0449\u0451 ${e3}`, loadingState: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D\u043D\u043E\u0433\u043E\u2026", savingState: "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u2026", savedState: "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E \u043D\u0430 \u044D\u0442\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435", unsavedState: "\u041D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E. \u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0442, \u043F\u043E\u043A\u0430 \u044D\u0442\u043E\u0442 File \u043E\u0442\u043A\u0440\u044B\u0442.", wakeAccepted: "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0430\u0433\u0435\u043D\u0442\u0443", wakeWait: (e3) => `\u041F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435 ${e3} \u0441 \u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435.`, wakeRetryNow: "\u041C\u043E\u0436\u043D\u043E \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C.", wakeUnconfirmed: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043D\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0430. \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0431\u0435\u0437 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E\u0439 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438.", wakeForbidden: "\u0412\u043E\u0439\u0434\u0438\u0442\u0435 \u043A\u0430\u043A \u0432\u043B\u0430\u0434\u0435\u043B\u0435\u0446 File, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u044D\u0442\u043E \u0430\u0433\u0435\u043D\u0442\u0443.", wakeCanceled: "\u0417\u0430\u043F\u0440\u043E\u0441 \u043E\u0442\u043C\u0435\u043D\u0451\u043D. \u041C\u043E\u0436\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439.", wakeFailed: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441.", wakeUnavailable: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0430\u0433\u0435\u043D\u0442\u0430 \u0437\u0434\u0435\u0441\u044C \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B." };
      ax = { myPick: "\u05D4\u05D1\u05D7\u05D9\u05E8\u05D4 \u05E9\u05DC\u05D9", recommended: "\u05DE\u05D5\u05DE\u05DC\u05E5", rangeLegend: "\u05DE\u05D9\u05E0\u05D9\u05DE\u05D5\u05DD \xB7 \u05E2\u05DB\u05E9\u05D9\u05D5 \xB7 \u05DE\u05E7\u05E1\u05D9\u05DE\u05D5\u05DD", noPhoto: "\u05D0\u05D9\u05DF \u05EA\u05DE\u05D5\u05E0\u05D4", noData: "\u05D0\u05D9\u05DF \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05DC\u05D4\u05E6\u05D2\u05D4.", noMatches: "\u05D0\u05D9\u05DF \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA.", chartData: "\u05D4\u05E6\u05D2\u05EA \u05E0\u05EA\u05D5\u05E0\u05D9 \u05D4\u05EA\u05E8\u05E9\u05D9\u05DD", observation: "\u05DE\u05D3\u05D9\u05D3\u05D4", observationNumber: (e3) => `\u05DE\u05D3\u05D9\u05D3\u05D4 ${e3}`, value: "\u05E2\u05E8\u05DA", noObservation: "\u05D0\u05D9\u05DF \u05DE\u05D3\u05D9\u05D3\u05D4", attribute: "\u05DE\u05D0\u05E4\u05D9\u05D9\u05DF", price: "\u05DE\u05D7\u05D9\u05E8", was: ", \u05D1\u05DE\u05E7\u05D5\u05DD ", close: "\u05E1\u05D2\u05D9\u05E8\u05D4", previousPhoto: "\u05D4\u05EA\u05DE\u05D5\u05E0\u05D4 \u05D4\u05E7\u05D5\u05D3\u05DE\u05EA", nextPhoto: "\u05D4\u05EA\u05DE\u05D5\u05E0\u05D4 \u05D4\u05D1\u05D0\u05D4", photoCount: (e3, t) => `${e3} \u05DE\u05EA\u05D5\u05DA ${t}`, photosOf: (e3) => `\u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC ${e3}`, fullScreen: (e3) => `${e3}, \u05DE\u05E1\u05DA \u05DE\u05DC\u05D0`, view: (e3) => `\u05D4\u05E6\u05D2\u05EA ${e3}`, viewAt: (e3) => `\u05DC\u05E6\u05E4\u05D9\u05D9\u05D4 \u05D1-${e3}`, buy: "\u05D1\u05D5\u05D0\u05D5 \u05E0\u05E7\u05E0\u05D4 \u05D0\u05EA \u05D6\u05D4", buyShort: "\u05DC\u05E7\u05E0\u05D5\u05EA", sending: "\u05E9\u05D5\u05DC\u05D7\u2026", sentToInstinct: "\u05E0\u05E9\u05DC\u05D7 \u05DC-Instinct", sent: "\u05E0\u05E9\u05DC\u05D7", soldOut: "\u05D0\u05D6\u05DC \u05DE\u05D4\u05DE\u05DC\u05D0\u05D9", retry: "\u05DC\u05E0\u05E1\u05D5\u05EA \u05E9\u05D5\u05D1", copy: "\u05D4\u05E2\u05EA\u05E7\u05D4", copied: "\u05D4\u05D5\u05E2\u05EA\u05E7", copyFailed: "\u05D4\u05D4\u05E2\u05EA\u05E7\u05D4 \u05E0\u05D7\u05E1\u05DE\u05D4", choose: (e3) => `\u05D1\u05D7\u05E8\u05D5 ${e3}`, chooseToCheckStock: (e3) => `\u05D1\u05D7\u05E8\u05D5 ${e3} \u05DB\u05D3\u05D9 \u05DC\u05D1\u05D3\u05D5\u05E7 \u05DE\u05DC\u05D0\u05D9`, soldOutIn: (e3) => `\u05D0\u05D6\u05DC \u05DE\u05D4\u05DE\u05DC\u05D0\u05D9 \u05D1-${e3}`, onlyLeftIn: (e3, t) => `\u05E0\u05E9\u05D0\u05E8\u05D5 \u05E8\u05E7 ${e3} \u05D1-${t}`, inStockIn: (e3) => `\u05D1\u05DE\u05DC\u05D0\u05D9 \u05D1-${e3}`, inStock: (e3) => `${e3} \u05D1\u05DE\u05DC\u05D0\u05D9`, valuesSoldOut: (e3) => `${e3.join(", ")} ${e3.length > 1 ? "\u05D0\u05D6\u05DC\u05D5" : "\u05D0\u05D6\u05DC"}`, valueSoldOut: (e3, t) => `${e3}, \u05D0\u05D6\u05DC \u05DE\u05D4\u05DE\u05DC\u05D0\u05D9${t ? ` \u05D1-${t}` : ""}`, plural: Tr, optionIn: (e3, t) => `${e3} \u05D1-${t}`, andMore: (e3) => ` \u05D5\u05E2\u05D5\u05D3 ${e3}`, loadingState: "\u05D8\u05D5\u05E2\u05DF \u05D0\u05EA \u05DE\u05D4 \u05E9\u05E0\u05E9\u05DE\u05E8\u2026", savingState: "\u05E9\u05D5\u05DE\u05E8\u2026", savedState: "\u05E0\u05E9\u05DE\u05E8 \u05D1\u05DE\u05DB\u05E9\u05D9\u05E8 \u05D4\u05D6\u05D4", unsavedState: "\u05DC\u05D0 \u05E0\u05E9\u05DE\u05E8. \u05D4\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05E0\u05E9\u05D0\u05E8\u05D9\u05DD \u05E8\u05E7 \u05DB\u05DC \u05E2\u05D5\u05D3 \u05D4-File \u05E4\u05EA\u05D5\u05D7.", wakeAccepted: "\u05E0\u05E9\u05DC\u05D7 \u05DC\u05E1\u05D5\u05DB\u05DF \u05E9\u05DC\u05DA", wakeWait: (e3) => `\u05D9\u05E9 \u05DC\u05D4\u05DE\u05EA\u05D9\u05DF ${e3} \u05E9\u05E0\u05D9\u05D5\u05EA \u05D5\u05DC\u05E0\u05E1\u05D5\u05EA \u05E9\u05D5\u05D1.`, wakeRetryNow: "\u05D0\u05E4\u05E9\u05E8 \u05DC\u05E0\u05E1\u05D5\u05EA \u05E9\u05D5\u05D1 \u05E2\u05DB\u05E9\u05D9\u05D5.", wakeUnconfirmed: "\u05D4\u05DE\u05E1\u05D9\u05E8\u05D4 \u05DC\u05D0 \u05D0\u05D5\u05E9\u05E8\u05D4. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05E0\u05E1\u05D5\u05EA \u05E9\u05D5\u05D1 \u05DB\u05D3\u05D9 \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D1\u05DC\u05D9 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05E4\u05E2\u05DE\u05D9\u05D9\u05DD.", wakeForbidden: "\u05D9\u05E9 \u05DC\u05D4\u05EA\u05D7\u05D1\u05E8 \u05DB\u05D1\u05E2\u05DC\u05D9\u05DD \u05E9\u05DC \u05D4-File \u05DB\u05D3\u05D9 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05D0\u05EA \u05D6\u05D4 \u05DC\u05E1\u05D5\u05DB\u05DF \u05E9\u05DC\u05DA.", wakeCanceled: "\u05D4\u05D1\u05E7\u05E9\u05D4 \u05D1\u05D5\u05D8\u05DC\u05D4. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05D1\u05E7\u05E9\u05D4 \u05D7\u05D3\u05E9\u05D4.", wakeFailed: "\u05DC\u05D0 \u05D4\u05E6\u05DC\u05D7\u05E0\u05D5 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05D0\u05EA \u05D4\u05D1\u05E7\u05E9\u05D4.", wakeUnavailable: "\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA \u05D4\u05E1\u05D5\u05DB\u05DF \u05DC\u05D0 \u05D6\u05DE\u05D9\u05E0\u05D5\u05EA \u05DB\u05D0\u05DF." };
      e8 = { myPick: "\u0627\u062E\u062A\u064A\u0627\u0631\u064A", recommended: "\u0645\u0648\u0635\u0649 \u0628\u0647", rangeLegend: "\u0627\u0644\u0623\u062F\u0646\u0649 \xB7 \u0627\u0644\u062D\u0627\u0644\u064A \xB7 \u0627\u0644\u0623\u0639\u0644\u0649", noPhoto: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0635\u0648\u0631\u0629", noData: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0644\u0639\u0631\u0636\u0647\u0627.", noMatches: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0646\u062A\u0627\u0626\u062C.", chartData: "\u0639\u0631\u0636 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0631\u0633\u0645", observation: "\u0642\u064A\u0627\u0633", observationNumber: (e3) => `\u0627\u0644\u0642\u064A\u0627\u0633 ${e3}`, value: "\u0627\u0644\u0642\u064A\u0645\u0629", noObservation: "\u0644\u0627 \u064A\u0648\u062C\u062F \u0642\u064A\u0627\u0633", attribute: "\u0627\u0644\u062E\u0627\u0635\u064A\u0629", price: "\u0627\u0644\u0633\u0639\u0631", was: "\u060C \u0628\u062F\u0644\u064B\u0627 \u0645\u0646 ", close: "\u0625\u063A\u0644\u0627\u0642", previousPhoto: "\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629", nextPhoto: "\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629", photoCount: (e3, t) => `${e3} \u0645\u0646 ${t}`, photosOf: (e3) => `\u0635\u0648\u0631 ${e3}`, fullScreen: (e3) => `${e3}\u060C \u0645\u0644\u0621 \u0627\u0644\u0634\u0627\u0634\u0629`, view: (e3) => `\u0639\u0631\u0636 ${e3}`, viewAt: (e3) => `\u0639\u0631\u0636 \u0644\u062F\u0649 ${e3}`, buy: "\u0644\u0646\u0634\u062A\u0631\u0650 \u0647\u0630\u0627", buyShort: "\u0634\u0631\u0627\u0621", sending: "\u062C\u0627\u0631\u064D \u0627\u0644\u0625\u0631\u0633\u0627\u0644\u2026", sentToInstinct: "\u0623\u064F\u0631\u0633\u0644 \u0625\u0644\u0649 Instinct", sent: "\u0623\u064F\u0631\u0633\u0644", soldOut: "\u0646\u0641\u062F", retry: "\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629", copy: "\u0646\u0633\u062E", copied: "\u062A\u0645 \u0627\u0644\u0646\u0633\u062E", copyFailed: "\u062A\u0639\u0630\u0651\u0631 \u0627\u0644\u0646\u0633\u062E", choose: (e3) => `\u0627\u062E\u062A\u0631 ${e3}`, chooseToCheckStock: (e3) => `\u0627\u062E\u062A\u0631 ${e3} \u0644\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u062A\u0648\u0641\u0631`, soldOutIn: (e3) => `\u0646\u0641\u062F \u0641\u064A ${e3}`, onlyLeftIn: (e3, t) => `\u0628\u0642\u064A ${e3} \u0641\u0642\u0637 \u0641\u064A ${t}`, inStockIn: (e3) => `\u0645\u062A\u0648\u0641\u0631 \u0641\u064A ${e3}`, inStock: (e3) => `${e3} \u0645\u062A\u0648\u0641\u0631`, valuesSoldOut: (e3) => `${e3.join(", ")} ${e3.length > 1 ? "\u0646\u0641\u062F\u062A" : "\u0646\u0641\u062F"}`, valueSoldOut: (e3, t) => `${e3}\u060C \u0646\u0641\u062F${t ? ` \u0641\u064A ${t}` : ""}`, plural: Tr, optionIn: (e3, t) => `${e3} \u0641\u064A ${t}`, andMore: (e3) => ` \u0648${e3} \u0623\u062E\u0631\u0649`, loadingState: "\u062C\u0627\u0631\u064D \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u062D\u0641\u0648\u0638\u0629\u2026", savingState: "\u062C\u0627\u0631\u064D \u0627\u0644\u062D\u0641\u0638\u2026", savedState: "\u0645\u062D\u0641\u0648\u0638 \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u062C\u0647\u0627\u0632", unsavedState: "\u063A\u064A\u0631 \u0645\u062D\u0641\u0648\u0638. \u062A\u0628\u0642\u0649 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A \u0645\u0627 \u062F\u0627\u0645 \u0647\u0630\u0627 \u0627\u0644\u0640 File \u0645\u0641\u062A\u0648\u062D\u064B\u0627 \u0641\u0642\u0637.", wakeAccepted: "\u0623\u064F\u0631\u0633\u0644 \u0625\u0644\u0649 \u0648\u0643\u064A\u0644\u0643", wakeWait: (e3) => `\u0627\u0646\u062A\u0638\u0631 ${e3} \u062B\u0627\u0646\u064A\u0629\u060C \u062B\u0645 \u0623\u0639\u062F \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629.`, wakeRetryNow: "\u064A\u0645\u0643\u0646\u0643 \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0627\u0644\u0622\u0646.", wakeUnconfirmed: "\u0644\u0645 \u064A\u062A\u0623\u0643\u062F \u0627\u0644\u062A\u0633\u0644\u064A\u0645. \u0623\u0639\u062F \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0644\u0644\u062A\u062D\u0642\u0642 \u062F\u0648\u0646 \u0627\u0644\u0625\u0631\u0633\u0627\u0644 \u0645\u0631\u062A\u064A\u0646.", wakeForbidden: "\u0633\u062C\u0651\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0628\u0635\u0641\u062A\u0643 \u0645\u0627\u0644\u0643 \u0627\u0644\u0640 File \u0644\u0625\u0631\u0633\u0627\u0644 \u0647\u0630\u0627 \u0625\u0644\u0649 \u0648\u0643\u064A\u0644\u0643.", wakeCanceled: "\u0623\u064F\u0644\u063A\u064A \u0647\u0630\u0627 \u0627\u0644\u0637\u0644\u0628. \u064A\u0645\u0643\u0646\u0643 \u0625\u0631\u0633\u0627\u0644 \u0637\u0644\u0628 \u062C\u062F\u064A\u062F.", wakeFailed: "\u062A\u0639\u0630\u0651\u0631 \u0625\u0631\u0633\u0627\u0644 \u0647\u0630\u0627 \u0627\u0644\u0637\u0644\u0628.", wakeUnavailable: "\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0648\u0643\u064A\u0644 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D\u0629 \u0647\u0646\u0627." };
      t8 = new Map(Object.entries({ en: Gc, es: WC, fr: YC, de: qC, it: GC, pt: KC, ca: XC, nl: QC, ro: ZC, ru: JC, he: ax, iw: ax, ar: e8 }));
      r8 = /* @__PURE__ */ new Set(["he", "iw", "ar", "fa", "ur"]);
      Kc = (0, Kl.createContext)(Gc);
      zc = () => window.instinctFile;
      a8 = "root";
      i8 = "Region";
      Zx = "Collection";
      Jx = "Item";
      nb = rb(Fc);
      f8 = nb.right;
      AN = nb.left;
      FN = rb(d8).center;
      h8 = f8;
      ix = class extends Map {
        constructor(e3, t = g8) {
          if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: t } }), e3 != null) for (let [r, n] of e3) this.set(r, n);
        }
        get(e3) {
          return super.get(ox(this, e3));
        }
        has(e3) {
          return super.has(ox(this, e3));
        }
        set(e3, t) {
          return super.set(p8(this, e3), t);
        }
        delete(e3) {
          return super.delete(m8(this, e3));
        }
      };
      L0 = Math.sqrt(50);
      P0 = Math.sqrt(10);
      _0 = Math.sqrt(2);
      lx = /* @__PURE__ */ Symbol("implicit");
      Za = 0.7;
      uo = 1 / Za;
      lo = "\\s*([+-]?\\d+)\\s*";
      Wl = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
      Kr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
      x8 = /^#([0-9a-f]{3,8})$/;
      b8 = new RegExp(`^rgb\\(${lo},${lo},${lo}\\)$`);
      k8 = new RegExp(`^rgb\\(${Kr},${Kr},${Kr}\\)$`);
      E8 = new RegExp(`^rgba\\(${lo},${lo},${lo},${Wl}\\)$`);
      R8 = new RegExp(`^rgba\\(${Kr},${Kr},${Kr},${Wl}\\)$`);
      S8 = new RegExp(`^hsl\\(${Wl},${Kr},${Kr}\\)$`);
      C8 = new RegExp(`^hsla\\(${Wl},${Kr},${Kr},${Wl}\\)$`);
      sx = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
      fo(pa, Yl, { copy(e3) {
        return Object.assign(new this.constructor(), this, e3);
      }, displayable() {
        return this.rgb().displayable();
      }, hex: ux, formatHex: ux, formatHex8: D8, formatHsl: N8, formatRgb: cx, toString: cx });
      fo(st, Oc, Xl(pa, { brighter(e3) {
        return e3 = e3 == null ? uo : Math.pow(uo, e3), new st(this.r * e3, this.g * e3, this.b * e3, this.opacity);
      }, darker(e3) {
        return e3 = e3 == null ? Za : Math.pow(Za, e3), new st(this.r * e3, this.g * e3, this.b * e3, this.opacity);
      }, rgb() {
        return this;
      }, clamp() {
        return new st(Ka(this.r), Ka(this.g), Ka(this.b), Ic(this.opacity));
      }, displayable() {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
      }, hex: fx, formatHex: fx, formatHex8: M8, formatRgb: hx, toString: hx }));
      fo(_r, T0, Xl(pa, { brighter(e3) {
        return e3 = e3 == null ? uo : Math.pow(uo, e3), new _r(this.h, this.s, this.l * e3, this.opacity);
      }, darker(e3) {
        return e3 = e3 == null ? Za : Math.pow(Za, e3), new _r(this.h, this.s, this.l * e3, this.opacity);
      }, rgb() {
        var e3 = this.h % 360 + (this.h < 0) * 360, t = isNaN(e3) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, a = 2 * r - n;
        return new st(x0(e3 >= 240 ? e3 - 240 : e3 + 120, a, n), x0(e3, a, n), x0(e3 < 120 ? e3 + 240 : e3 - 120, a, n), this.opacity);
      }, clamp() {
        return new _r(mx(this.h), _c(this.s), _c(this.l), Ic(this.opacity));
      }, displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
      }, formatHsl() {
        let e3 = Ic(this.opacity);
        return `${e3 === 1 ? "hsl(" : "hsla("}${mx(this.h)}, ${_c(this.s) * 100}%, ${_c(this.l) * 100}%${e3 === 1 ? ")" : `, ${e3})`}`;
      } }));
      sb = Math.PI / 180;
      ub = 180 / Math.PI;
      jc = 18;
      cb = 0.96422;
      db = 1;
      fb = 0.82521;
      hb = 4 / 29;
      so = 6 / 29;
      pb = 3 * so * so;
      L8 = so * so * so;
      fo(Xr, A0, Xl(pa, { brighter(e3) {
        return new Xr(this.l + jc * (e3 ?? 1), this.a, this.b, this.opacity);
      }, darker(e3) {
        return new Xr(this.l - jc * (e3 ?? 1), this.a, this.b, this.opacity);
      }, rgb() {
        var e3 = (this.l + 16) / 116, t = isNaN(this.a) ? e3 : e3 + this.a / 500, r = isNaN(this.b) ? e3 : e3 - this.b / 200;
        return t = cb * k0(t), e3 = db * k0(e3), r = fb * k0(r), new st(E0(3.1338561 * t - 1.6168667 * e3 - 0.4906146 * r), E0(-0.9787684 * t + 1.9161415 * e3 + 0.033454 * r), E0(0.0719453 * t - 0.2289914 * e3 + 1.4052427 * r), this.opacity);
      } }));
      fo(Sn, F0, Xl(pa, { brighter(e3) {
        return new Sn(this.h, this.c, this.l + jc * (e3 ?? 1), this.opacity);
      }, darker(e3) {
        return new Sn(this.h, this.c, this.l - jc * (e3 ?? 1), this.opacity);
      }, rgb() {
        return gb(this).rgb();
      } }));
      vb = -0.14861;
      X0 = 1.78277;
      Q0 = -0.29227;
      Qc = -0.90649;
      ql = 1.97294;
      gx = ql * Qc;
      vx = ql * X0;
      yx = X0 * Q0 - Qc * vb;
      fo(Xa, $0, Xl(pa, { brighter(e3) {
        return e3 = e3 == null ? uo : Math.pow(uo, e3), new Xa(this.h, this.s, this.l * e3, this.opacity);
      }, darker(e3) {
        return e3 = e3 == null ? Za : Math.pow(Za, e3), new Xa(this.h, this.s, this.l * e3, this.opacity);
      }, rgb() {
        var e3 = isNaN(this.h) ? 0 : (this.h + 120) * sb, t = +this.l, r = isNaN(this.s) ? 0 : this.s * t * (1 - t), n = Math.cos(e3), a = Math.sin(e3);
        return new st(255 * (t + r * (vb * n + X0 * a)), 255 * (t + r * (Q0 * n + Qc * a)), 255 * (t + r * (ql * n)), this.opacity);
      } }));
      Zc = (e3) => () => e3;
      z0 = (function e(t) {
        var r = $8(t);
        function n(a, i) {
          var o = r((a = Oc(a)).r, (i = Oc(i)).r), l = r(a.g, i.g), s = r(a.b, i.b), u = ut(a.opacity, i.opacity);
          return function(c) {
            return a.r = o(c), a.g = l(c), a.b = s(c), a.opacity = u(c), a + "";
          };
        }
        return n.gamma = e, n;
      })(1);
      $N = xb(T8);
      zN = xb(A8);
      O0 = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
      S0 = new RegExp(O0.source, "g");
      W8 = kb(Z0);
      Y8 = kb(ut);
      G8 = Eb(Z0);
      K8 = Eb(ut);
      X8 = Rb(Z0);
      Q8 = Rb(ut);
      wx = [0, 1];
      u7 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      Bc.prototype = em.prototype;
      em.prototype.toString = function() {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
      };
      bx = { "%": (e3, t) => (e3 * 100).toFixed(t), b: (e3) => Math.round(e3).toString(2), c: (e3) => e3 + "", d: o7, e: (e3, t) => e3.toExponential(t), f: (e3, t) => e3.toFixed(t), g: (e3, t) => e3.toPrecision(t), o: (e3) => Math.round(e3).toString(8), p: (e3, t) => xx(e3 * 100, t), r: xx, s: d7, X: (e3) => Math.round(e3).toString(16).toUpperCase(), x: (e3) => Math.round(e3).toString(16) };
      Ex = Array.prototype.map;
      Rx = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
      h7({ thousands: ",", grouping: [3], currency: ["$", ""] });
      C0 = /* @__PURE__ */ new Date();
      D0 = /* @__PURE__ */ new Date();
      tm = mt((e3) => {
        e3.setTime(e3 - e3.getMilliseconds());
      }, (e3, t) => {
        e3.setTime(+e3 + t * 1e3);
      }, (e3, t) => (t - e3) / 1e3, (e3) => e3.getUTCSeconds());
      ON = tm.range;
      Mb = mt((e3) => {
        e3.setTime(e3 - e3.getMilliseconds() - e3.getSeconds() * 1e3);
      }, (e3, t) => {
        e3.setTime(+e3 + t * 6e4);
      }, (e3, t) => (t - e3) / 6e4, (e3) => e3.getMinutes());
      IN = Mb.range;
      Lb = mt((e3) => {
        e3.setUTCSeconds(0, 0);
      }, (e3, t) => {
        e3.setTime(+e3 + t * 6e4);
      }, (e3, t) => (t - e3) / 6e4, (e3) => e3.getUTCMinutes());
      jN = Lb.range;
      Pb = mt((e3) => {
        e3.setTime(e3 - e3.getMilliseconds() - e3.getSeconds() * 1e3 - e3.getMinutes() * 6e4);
      }, (e3, t) => {
        e3.setTime(+e3 + t * 36e5);
      }, (e3, t) => (t - e3) / 36e5, (e3) => e3.getHours());
      UN = Pb.range;
      _b = mt((e3) => {
        e3.setUTCMinutes(0, 0, 0);
      }, (e3, t) => {
        e3.setTime(+e3 + t * 36e5);
      }, (e3, t) => (t - e3) / 36e5, (e3) => e3.getUTCHours());
      HN = _b.range;
      Tb = mt((e3) => e3.setHours(0, 0, 0, 0), (e3, t) => e3.setDate(e3.getDate() + t), (e3, t) => (t - e3 - (t.getTimezoneOffset() - e3.getTimezoneOffset()) * 6e4) / 864e5, (e3) => e3.getDate() - 1);
      BN = Tb.range;
      Ab = mt((e3) => {
        e3.setUTCHours(0, 0, 0, 0);
      }, (e3, t) => {
        e3.setUTCDate(e3.getUTCDate() + t);
      }, (e3, t) => (t - e3) / 864e5, (e3) => e3.getUTCDate() - 1);
      VN = Ab.range;
      w7 = mt((e3) => {
        e3.setUTCHours(0, 0, 0, 0);
      }, (e3, t) => {
        e3.setUTCDate(e3.getUTCDate() + t);
      }, (e3, t) => (t - e3) / 864e5, (e3) => Math.floor(e3 / 864e5));
      WN = w7.range;
      Fb = ei(0);
      x7 = ei(1);
      b7 = ei(2);
      k7 = ei(3);
      E7 = ei(4);
      R7 = ei(5);
      S7 = ei(6);
      YN = Fb.range;
      qN = x7.range;
      GN = b7.range;
      KN = k7.range;
      XN = E7.range;
      QN = R7.range;
      ZN = S7.range;
      $b = ti(0);
      C7 = ti(1);
      D7 = ti(2);
      N7 = ti(3);
      M7 = ti(4);
      L7 = ti(5);
      P7 = ti(6);
      JN = $b.range;
      eM = C7.range;
      tM = D7.range;
      rM = N7.range;
      nM = M7.range;
      aM = L7.range;
      iM = P7.range;
      zb = mt((e3) => {
        e3.setDate(1), e3.setHours(0, 0, 0, 0);
      }, (e3, t) => {
        e3.setMonth(e3.getMonth() + t);
      }, (e3, t) => t.getMonth() - e3.getMonth() + (t.getFullYear() - e3.getFullYear()) * 12, (e3) => e3.getMonth());
      oM = zb.range;
      Ob = mt((e3) => {
        e3.setUTCDate(1), e3.setUTCHours(0, 0, 0, 0);
      }, (e3, t) => {
        e3.setUTCMonth(e3.getUTCMonth() + t);
      }, (e3, t) => t.getUTCMonth() - e3.getUTCMonth() + (t.getUTCFullYear() - e3.getUTCFullYear()) * 12, (e3) => e3.getUTCMonth());
      lM = Ob.range;
      rm = mt((e3) => {
        e3.setMonth(0, 1), e3.setHours(0, 0, 0, 0);
      }, (e3, t) => {
        e3.setFullYear(e3.getFullYear() + t);
      }, (e3, t) => t.getFullYear() - e3.getFullYear(), (e3) => e3.getFullYear());
      rm.every = (e3) => !isFinite(e3 = Math.floor(e3)) || !(e3 > 0) ? null : mt((t) => {
        t.setFullYear(Math.floor(t.getFullYear() / e3) * e3), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
      }, (t, r) => {
        t.setFullYear(t.getFullYear() + r * e3);
      });
      sM = rm.range;
      nm = mt((e3) => {
        e3.setUTCMonth(0, 1), e3.setUTCHours(0, 0, 0, 0);
      }, (e3, t) => {
        e3.setUTCFullYear(e3.getUTCFullYear() + t);
      }, (e3, t) => t.getUTCFullYear() - e3.getUTCFullYear(), (e3) => e3.getUTCFullYear());
      nm.every = (e3) => !isFinite(e3 = Math.floor(e3)) || !(e3 > 0) ? null : mt((t) => {
        t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e3) * e3), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
      }, (t, r) => {
        t.setUTCFullYear(t.getUTCFullYear() + r * e3);
      });
      uM = nm.range;
      Sx = { lab: q8, hcl: G8, "hcl-long": K8, hsl: W8, "hsl-long": Y8, cubehelix: X8, "cubehelix-long": Q8, rgb: z0 };
      U7 = new Date(Date.UTC(2020, 1, 2, 3, 4, 5));
      H7 = "%Y-%m-%d %H:%M";
      Cx = { day: Tb, hour: Pb, minute: Mb, month: zb, second: tm, week: Fb, year: rm };
      Dx = { day: Ab, hour: _b, minute: Lb, month: Ob, second: tm, week: $b, year: nm };
      X7 = ["domain", "nice", "zero", "interpolate", "round", "range", "reverse", "align", "base", "clamp", "constant", "exponent", "padding", "unknown"];
      Q7 = { domain: _7, nice: V7, zero: K7, interpolate: j7, round: q7, align: A7, base: F7, clamp: $7, constant: z7, exponent: O7, padding: W7, range: T7, reverse: Y7, unknown: G7 };
      Z7 = Ib("domain", "range", "reverse", "align", "padding", "round");
      eD = Ib("domain", "range", "reverse", "clamp", "interpolate", "nice", "round", "zero");
      j0 = Math.PI;
      U0 = 2 * j0;
      qa = 1e-6;
      tD = U0 - qa;
      H0.prototype = jb.prototype = { constructor: H0, moveTo: function(e3, t) {
        this._ += "M" + (this._x0 = this._x1 = +e3) + "," + (this._y0 = this._y1 = +t);
      }, closePath: function() {
        this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
      }, lineTo: function(e3, t) {
        this._ += "L" + (this._x1 = +e3) + "," + (this._y1 = +t);
      }, quadraticCurveTo: function(e3, t, r, n) {
        this._ += "Q" + +e3 + "," + +t + "," + (this._x1 = +r) + "," + (this._y1 = +n);
      }, bezierCurveTo: function(e3, t, r, n, a, i) {
        this._ += "C" + +e3 + "," + +t + "," + +r + "," + +n + "," + (this._x1 = +a) + "," + (this._y1 = +i);
      }, arcTo: function(e3, t, r, n, a) {
        e3 = +e3, t = +t, r = +r, n = +n, a = +a;
        var i = this._x1, o = this._y1, l = r - e3, s = n - t, u = i - e3, c = o - t, d = u * u + c * c;
        if (a < 0) throw new Error("negative radius: " + a);
        if (this._x1 === null) this._ += "M" + (this._x1 = e3) + "," + (this._y1 = t);
        else if (d > qa) if (!(Math.abs(c * l - s * u) > qa) || !a) this._ += "L" + (this._x1 = e3) + "," + (this._y1 = t);
        else {
          var f = r - i, p = n - o, v = l * l + s * s, y = f * f + p * p, g = Math.sqrt(v), m = Math.sqrt(d), h = a * Math.tan((j0 - Math.acos((v + d - y) / (2 * g * m))) / 2), w = h / m, b = h / g;
          Math.abs(w - 1) > qa && (this._ += "L" + (e3 + w * u) + "," + (t + w * c)), this._ += "A" + a + "," + a + ",0,0," + +(c * f > u * p) + "," + (this._x1 = e3 + b * l) + "," + (this._y1 = t + b * s);
        }
      }, arc: function(e3, t, r, n, a, i) {
        e3 = +e3, t = +t, r = +r, i = !!i;
        var o = r * Math.cos(n), l = r * Math.sin(n), s = e3 + o, u = t + l, c = 1 ^ i, d = i ? n - a : a - n;
        if (r < 0) throw new Error("negative radius: " + r);
        this._x1 === null ? this._ += "M" + s + "," + u : (Math.abs(this._x1 - s) > qa || Math.abs(this._y1 - u) > qa) && (this._ += "L" + s + "," + u), r && (d < 0 && (d = d % U0 + U0), d > tD ? this._ += "A" + r + "," + r + ",0,1," + c + "," + (e3 - o) + "," + (t - l) + "A" + r + "," + r + ",0,1," + c + "," + (this._x1 = s) + "," + (this._y1 = u) : d > qa && (this._ += "A" + r + "," + r + ",0," + +(d >= j0) + "," + c + "," + (this._x1 = e3 + r * Math.cos(a)) + "," + (this._y1 = t + r * Math.sin(a))));
      }, rect: function(e3, t, r, n) {
        this._ += "M" + (this._x0 = this._x1 = +e3) + "," + (this._y0 = this._y1 = +t) + "h" + +r + "v" + +n + "h" + -r + "Z";
      }, toString: function() {
        return this._;
      } };
      rD = jb;
      Ub.prototype = { areaStart: function() {
        this._line = 0;
      }, areaEnd: function() {
        this._line = NaN;
      }, lineStart: function() {
        this._point = 0;
      }, lineEnd: function() {
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function(e3, t) {
        switch (e3 = +e3, t = +t, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(e3, t) : this._context.moveTo(e3, t);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(e3, t);
            break;
        }
      } };
      sD = Yx(qx());
      uD = ["children", "data", "x", "y", "fill", "className", "curve", "innerRef", "defined"];
      fD = Yx(qx());
      hD = ["className", "innerRef"];
      Jc = (0, Ql.createContext)(null);
      da = (e3, t = {}) => (0, R.jsx)("path", { d: e3, vectorEffect: "non-scaling-stroke", ...t });
      am = (e3) => (0, R.jsx)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", "aria-hidden": "true", children: e3 });
      mD = am(da("M6.25 6.25L17.75 17.75M17.75 6.25L6.25 17.75", { strokeLinecap: "round" }));
      Wb = am(da("M15.0002 20L8.4144 13.4142C7.63335 12.6332 7.63335 11.3669 8.4144 10.5858L15.0002 4", { strokeLinecap: "round", strokeLinejoin: "round" }));
      Yb = am(da("M9 4L15.5858 10.5858C16.3668 11.3668 16.3668 12.6331 15.5858 13.4142L9 20", { strokeLinecap: "round", strokeLinejoin: "round" }));
      qb = { photo: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }), (0, R.jsx)("circle", { cx: "9", cy: "9", r: "2" }), (0, R.jsx)("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })] }), food: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" }), (0, R.jsx)("path", { d: "M7 2v20" }), (0, R.jsx)("path", { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" })] }), poultry: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23" }), (0, R.jsx)("path", { d: "m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59" })] }), meat: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3" }), (0, R.jsx)("path", { d: "m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" }), (0, R.jsx)("circle", { cx: "12.5", cy: "8.5", r: "2.5" })] }), fish: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" }), (0, R.jsx)("path", { d: "M18 12v.5" }), (0, R.jsx)("path", { d: "M16 17.93a9.77 9.77 0 0 1 0-11.86" }), (0, R.jsx)("path", { d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" }), (0, R.jsx)("path", { d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" }), (0, R.jsx)("path", { d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" })] }), salad: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M7 21h10" }), (0, R.jsx)("path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }), (0, R.jsx)("path", { d: "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1" }), (0, R.jsx)("path", { d: "m13 12 4-4" }), (0, R.jsx)("path", { d: "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" })] }), bowl: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }), (0, R.jsx)("path", { d: "M7 21h10" }), (0, R.jsx)("path", { d: "M19.5 12 22 6" }), (0, R.jsx)("path", { d: "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62" }), (0, R.jsx)("path", { d: "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62" }), (0, R.jsx)("path", { d: "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62" })] }), bread: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97 11 11 0 0 1 .132-6.487" }), (0, R.jsx)("path", { d: "M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352 11 11 0 0 0-6.486.132" }), (0, R.jsx)("path", { d: "M18 5a4 3 0 0 1 4 3 2 2 0 0 1-2 2 10 10 0 0 0-5.139 1.42" }), (0, R.jsx)("path", { d: "M5 18a3 4 0 0 0 3 4 2 2 0 0 0 2-2 10 10 0 0 1 1.42-5.14" }), (0, R.jsx)("path", { d: "M8.709 2.554a10 10 0 0 0-6.155 6.155 1.5 1.5 0 0 0 .676 1.626l9.807 5.42a2 2 0 0 0 2.718-2.718l-5.42-9.807a1.5 1.5 0 0 0-1.626-.676" })] }), pizza: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "m12 14-1 1" }), (0, R.jsx)("path", { d: "m13.75 18.25-1.25 1.42" }), (0, R.jsx)("path", { d: "M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12" }), (0, R.jsx)("path", { d: "M18.8 9.3a1 1 0 0 0 2.1 7.7" }), (0, R.jsx)("path", { d: "M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z" })] }), sandwich: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777" }), (0, R.jsx)("path", { d: "M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25" }), (0, R.jsx)("path", { d: "M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9" }), (0, R.jsx)("path", { d: "m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" }), (0, R.jsx)("rect", { width: "20", height: "4", x: "2", y: "11", rx: "1" })] }), dessert: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M16 13H3" }), (0, R.jsx)("path", { d: "M16 17H3" }), (0, R.jsx)("path", { d: "m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6" }), (0, R.jsx)("circle", { cx: "9", cy: "7", r: "2" })] }), fruit: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M12 6.528V3a1 1 0 0 1 1-1h0" }), (0, R.jsx)("path", { d: "M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21" })] }), vegetable: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46" }), (0, R.jsx)("path", { d: "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z" }), (0, R.jsx)("path", { d: "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z" })] }), drink: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8" }), (0, R.jsx)("path", { d: "M5 8h14" }), (0, R.jsx)("path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" }), (0, R.jsx)("path", { d: "m12 8 1-6h2" })] }), coffee: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M10 2v2" }), (0, R.jsx)("path", { d: "M14 2v2" }), (0, R.jsx)("path", { d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" }), (0, R.jsx)("path", { d: "M6 2v2" })] }), wine: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M8 22h8" }), (0, R.jsx)("path", { d: "M7 10h10" }), (0, R.jsx)("path", { d: "M12 15v7" }), (0, R.jsx)("path", { d: "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" })] }), cocktail: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M8 22h8" }), (0, R.jsx)("path", { d: "M12 11v11" }), (0, R.jsx)("path", { d: "m19 3-7 8-7-8Z" })] }), place: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }), (0, R.jsx)("circle", { cx: "12", cy: "10", r: "3" })] }), hotel: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" }), (0, R.jsx)("path", { d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" }), (0, R.jsx)("path", { d: "M12 4v6" }), (0, R.jsx)("path", { d: "M2 18h20" })] }), home: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }), (0, R.jsx)("path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })] }), building: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M10 12h4" }), (0, R.jsx)("path", { d: "M10 8h4" }), (0, R.jsx)("path", { d: "M14 21v-3a2 2 0 0 0-4 0v3" }), (0, R.jsx)("path", { d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" }), (0, R.jsx)("path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" })] }), flight: (0, R.jsx)(R.Fragment, { children: (0, R.jsx)("path", { d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" }) }), car: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" }), (0, R.jsx)("circle", { cx: "7", cy: "17", r: "2" }), (0, R.jsx)("path", { d: "M9 17h6" }), (0, R.jsx)("circle", { cx: "17", cy: "17", r: "2" })] }), nature: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" }), (0, R.jsx)("path", { d: "M7 16v6" }), (0, R.jsx)("path", { d: "M13 19v3" }), (0, R.jsx)("path", { d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" })] }), product: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M16 10a4 4 0 0 1-8 0" }), (0, R.jsx)("path", { d: "M3.103 6.034h17.794" }), (0, R.jsx)("path", { d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" })] }), clothing: (0, R.jsx)(R.Fragment, { children: (0, R.jsx)("path", { d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" }) }), device: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2" }), (0, R.jsx)("path", { d: "M12 18h.01" })] }), furniture: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" }), (0, R.jsx)("path", { d: "M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" }), (0, R.jsx)("path", { d: "M4 18v2" }), (0, R.jsx)("path", { d: "M20 18v2" }), (0, R.jsx)("path", { d: "M12 4v9" })] }), gift: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M12 7v14" }), (0, R.jsx)("path", { d: "M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" }), (0, R.jsx)("path", { d: "M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5" }), (0, R.jsx)("rect", { x: "3", y: "7", width: "18", height: "4", rx: "1" })] }), book: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M12 7v14" }), (0, R.jsx)("path", { d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" })] }), person: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("circle", { cx: "12", cy: "8", r: "5" }), (0, R.jsx)("path", { d: "M20 21a8 8 0 0 0-16 0" })] }), pet: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("circle", { cx: "11", cy: "4", r: "2" }), (0, R.jsx)("circle", { cx: "18", cy: "8", r: "2" }), (0, R.jsx)("circle", { cx: "20", cy: "16", r: "2" }), (0, R.jsx)("path", { d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" })] }), music: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M9 18V5l12-2v13" }), (0, R.jsx)("circle", { cx: "6", cy: "18", r: "3" }), (0, R.jsx)("circle", { cx: "18", cy: "16", r: "3" })] }), event: (0, R.jsxs)(R.Fragment, { children: [(0, R.jsx)("path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }), (0, R.jsx)("path", { d: "M13 5v2" }), (0, R.jsx)("path", { d: "M13 17v2" }), (0, R.jsx)("path", { d: "M13 11v2" })] }) };
      gD = Object.keys(qb);
      td = (e3) => function({ size: t = 16, className: r }) {
        return (0, R.jsx)("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", className: r, "aria-hidden": "true", children: e3 });
      };
      Gb = td(da("M18.25 15.25V5.75M18.25 5.75H8.75M18.25 5.75L6 18", { strokeLinecap: "round", strokeLinejoin: "round" }));
      Kb = td(da("M4.75 12.7768L10 19.25L19.25 4.75", { strokeLinecap: "round" }));
      yD = td(da("M15.25 8.75V4C15.25 3.30964 14.6904 2.75 14 2.75H4C3.30964 2.75 2.75 3.30964 2.75 4V14C2.75 14.6904 3.30964 15.25 4 15.25H8.75M10 8.75H20C20.6904 8.75 21.25 9.30964 21.25 10V20C21.25 20.6904 20.6904 21.25 20 21.25H10C9.30964 21.25 8.75 20.6904 8.75 20V10C8.75 9.30964 9.30964 8.75 10 8.75Z", { strokeLinecap: "round", strokeLinejoin: "round" }));
      wD = td((0, R.jsxs)(R.Fragment, { children: [da("M12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12", { strokeOpacity: 0.3 }), da("M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25", { strokeLinecap: "round" })] }));
      xD = 2e3;
      bD = 1500;
      RD = 320;
      SD = typeof window > "u" ? Lt.useEffect : Lt.useLayoutEffect;
      Bl = { scale: 1, x: 0, y: 0 };
      Qb = (e3) => Math.min(4, Math.max(1, e3));
      Px = (e3, t) => Math.min(t, Math.max(-t, e3));
      _x = (e3, t) => Math.hypot(e3.x - t.x, e3.y - t.y);
      Tx = (e3, t) => ({ x: (e3.x + t.x) / 2, y: (e3.y + t.y) / 2 });
      W0 = ["pointerdown", "wheel", "touchstart"];
      AD = ["https:", "http:", "mailto:", "tel:"];
      a5 = (0, ma.createContext)(false);
      FD = (0, ue.jsx)("svg", { "aria-hidden": "true", width: "14", height: "14", viewBox: "0 0 24 24", fill: "currentColor", children: (0, ue.jsx)("path", { d: "M11.5497 2.03292C11.7307 1.65569 12.2693 1.65569 12.4503 2.03292L15.0189 7.38732C15.0918 7.53919 15.2367 7.64404 15.4041 7.66599L21.3154 8.44106C21.732 8.49569 21.8986 9.0078 21.5935 9.29588L17.2708 13.3775C17.1479 13.4935 17.0924 13.6637 17.1232 13.8297L18.2087 19.6603C18.2853 20.0717 17.8494 20.388 17.4803 20.1888L12.2376 17.3585C12.0894 17.2785 11.9106 17.2785 11.7624 17.3585L6.51969 20.1888C6.15063 20.388 5.71473 20.0717 5.79132 19.6603L6.87675 13.8297C6.90764 13.6637 6.8521 13.4935 6.7292 13.3775L2.40651 9.29588C2.10142 9.0078 2.26803 8.49569 2.68463 8.44106L8.5959 7.66599C8.7633 7.64404 8.90823 7.53919 8.98108 7.38732L11.5497 2.03292Z" }) });
      zD = [0, 0.5, 1];
      x5 = (e3) => String(e3);
      Qa = "var(--ds-teal)";
      Wc = ["var(--ds-ink-2)", "var(--ds-ink-3)", "var(--ds-ink-4)"];
      Gl = (e3) => Wc[e3 % Wc.length];
      OD = (e3) => ({ "--file-series": Gl(e3) });
      ID = 350;
      Ax = (e3) => [...e3].reduce((t, r) => t + (r >= "\u2E80" ? 2 : 1), 0);
      qD = "M0.42 3.09L1.61 2.89L0.48 2.69L1.62 2.43L0.99 2.17L1.97 2.13L1.43 1.9L2.46 1.86L2.15 1.73L2.75 1.64L2.37 1.39L3.35 0.96L2.98 0.79L8.51 0.11L26.87 0.15L26.4 0.56L27.63 0.18L31.8 0.62L38.9 0.13L45.68 0.81L47.76 0.4L55.48 0.77L56.29 1.18L55.58 1.23L58.14 1.65L59.81 1.57L60.9 0.86L60.75 1.02L60.99 1.16L60.77 1.29L60.96 1.36L60.12 1.53L61 1.98L60.66 2.11L60.78 2.4L60.62 2.54L60.91 2.62L60.59 2.74L60.77 2.86L60.64 3.13L60.21 3.27L60.83 4.03L60.31 4.49L60.77 4.95L60.3 5.23L60.56 5.37L60.37 5.65L60.88 5.7L60.33 5.9L60.73 6.04L60.24 6.22L60.41 6.56L53.72 6.69L51.56 7.12L53.3 7.17L53.68 7.37L52.95 7.49L43.88 7.49L43.34 7.17L44.31 7.17L44.04 6.91L36.19 6.62L21.85 7.21L21.55 6.53L20.27 6.65L21.36 6.91L19.71 7.23L16.12 7.16L16.75 7.45L16.16 7.64L16.78 7.65L15.91 7.79L6.54 7.78L2.19 7.22L2.59 6.92L1.52 6.51L1.67 6.34L1.46 6.11L1.89 6.11L1.25 5.8L1.75 5.46L1.07 5.17L1.42 5.03L1.18 4.66L1.6 4.6L0.78 4.06L1.65 3.81L0.57 3.8L1.45 3.75L1.26 3.62L1.67 3.27L1.31 3.25L1.96 3.02L0.68 3.51ZM4.51 7.91L5.27 7.67ZM11.88 7.73L12.5 7.71ZM18.52 7.52L19.25 7.58ZM48.59 7.44L49.2 7.51ZM56.71 7.35L57.69 7.39ZM46.44 7.35L47.22 7.29ZM42.12 7.21L42.92 7.23ZM40.43 7.11L41.23 7.11ZM44.47 7.25L44.94 7.28ZM19.76 7.21L20.66 7.19ZM54.52 7.24L55.14 7.2ZM46.78 7.12L49.14 7.11ZM25.38 7L25.99 7.05ZM40.06 7.06L40.64 6.92ZM17.92 6.98L18.45 6.98ZM31.56 6.87L32.37 6.87ZM51.56 6.74L53.26 6.67ZM59.1 6.78L59.62 6.72ZM21.76 6.42L22.95 6.75ZM16.15 6.52L16.67 6.42ZM17.54 6.49L18.05 6.51ZM0.81 3.97L1.43 3.86ZM58.65 2.16L59.99 2.16ZM0 2.15L0.9 2.03ZM57.21 1.79L57.78 2.15L58.45 1.72ZM0.39 1.96L0.96 1.94ZM59.2 1.89L60.35 1.77ZM55.93 1.38L57.07 1.33ZM59.1 1.38L59.57 1.39ZM57.17 1.29L58.35 1.28ZM59.18 1.23L59.86 1.17ZM55.19 1.1L55.75 1.02ZM53.92 1.05L54.38 1.08ZM2.03 0.84L2.99 0.9ZM59.36 1.02L59.87 1.09ZM56.26 0.83L56.73 0.76ZM46.89 0.54L47.4 0.59ZM48.54 0.56L51.82 0.61ZM28.76 0.57L29.23 0.53ZM30.84 0.35L32.27 0.45ZM32.23 0.33L33.89 0.31ZM39.33 0.17L40.33 0.19Z";
      GD = "0 0 61 8";
      Fx = "http://www.w3.org/2000/svg";
      $x = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
      Yt = (e3) => Math.round(e3 * 10) / 10;
      a9 = class {
        drawn = /* @__PURE__ */ new Map();
        point(e3, t, r) {
          let n = this.drawn.get(e3);
          if (n?.id === t && n.element === r) {
            n.nodes.length > 0 && this.stay(e3, n);
            return;
          }
          n && this.release(n, 200);
          let a = { id: t, element: r, nodes: [], drawMs: 0, stop: () => {
          } };
          this.drawn.set(e3, a), a.stop = n9(r, () => this.draw(e3, a));
        }
        check() {
          for (let [e3, t] of this.drawn) {
            if (!t.place) continue;
            let r = t.element.isConnected ? this.place(t.element) : void 0;
            r && Math.abs(r.left - t.place.left) < 1 && Math.abs(r.top - t.place.top) < 1 && Math.abs(r.width - t.place.width) < 1 && Math.abs(r.height - t.place.height) < 1 || (this.drawn.delete(e3), this.release(t, 200));
          }
        }
        area(e3) {
          return e3.closest("dialog") ?? document.body;
        }
        within(e3, t) {
          let r = zx(this.area(e3)).getBoundingClientRect();
          return { left: t.left - r.left, top: t.top - r.top, width: t.width, height: t.height };
        }
        place(e3) {
          return this.within(e3, e3.getBoundingClientRect());
        }
        draw(e3, t) {
          if (!t.element.isConnected) {
            this.drawn.delete(e3);
            return;
          }
          let r = zx(this.area(t.element)), n = this.place(t.element), a = KD(r9(t9(t.element)));
          if (XD(t.element.getAttribute("data-live-mark"), n, a) === "stroke") {
            let i = QD(a.length);
            if (a.forEach((o, l) => {
              let s = this.within(t.element, o), u = { left: s.left - 0.18 * o.size, top: s.top + s.height - (0.13 + 0.42) * o.size, width: s.width + 2 * 0.18 * o.size, height: 0.42 * o.size };
              t.nodes.push(Ox("stroke", t.id, u, GD, qD, i[l].ms, i[l].wait));
            }), t.drawMs = i[i.length - 1].wait + i[i.length - 1].ms, getComputedStyle(t.element).direction === "rtl") for (let o of t.nodes) o.setAttribute("data-rtl", "");
          } else {
            let i = Math.max(n.left, 10), o = Math.min(n.left + n.width, this.area(t.element).clientWidth - 10) - i, l = { left: i - 7, top: n.top - 7, width: o + 14, height: n.height + 14 };
            t.drawMs = e9(o, n.height), t.nodes.push(Ox("loop", t.id, l, `0 0 ${Yt(l.width)} ${Yt(l.height)}`, JD(o, n.height), t.drawMs, 0));
          }
          $x() && (t.drawMs = 0), t.place = n;
          for (let i of t.nodes) r.appendChild(i);
          r.getBoundingClientRect();
          for (let i of t.nodes) i.setAttribute("data-phase", "shown");
          this.stay(e3, t);
        }
        stay(e3, t) {
          clearTimeout(t.hold), t.hold = setTimeout(() => {
            this.drawn.get(e3) === t && this.drawn.delete(e3), this.release(t, 400);
          }, t.drawMs + 1100);
        }
        release(e3, t) {
          e3.stop(), clearTimeout(e3.hold);
          for (let r of e3.nodes) {
            if ($x()) {
              r.remove();
              continue;
            }
            r.style.setProperty("--file-live-mark-fade", `${t}ms`), r.setAttribute("data-phase", "leaving"), setTimeout(() => r.remove(), t);
          }
        }
      };
      i9 = 30;
      o9 = 360;
      l9 = 200;
      s9 = 2e3;
      u9 = 280;
      c9 = "cubic-bezier(0.2, 0.7, 0.2, 1)";
      M0 = () => [...document.querySelectorAll("[data-live-id]")];
      Ix = () => [...document.querySelectorAll("[data-live-reveal]")];
      C5 = [];
      d9 = /* @__PURE__ */ new Set(["PhotoCard"]);
      jx = 16;
      h9 = class {
        constructor(e3) {
          this.runtime = e3;
        }
        data = o8();
        seq = null;
        reading = false;
        pending = [];
        started = false;
        listeners = /* @__PURE__ */ new Set();
        marks = new a9();
        open = null;
        details = /* @__PURE__ */ new Set();
        entering = /* @__PURE__ */ new Map();
        gliding = /* @__PURE__ */ new WeakMap();
        enterSlot = 0;
        itemOf = /* @__PURE__ */ new WeakMap();
        lists = /* @__PURE__ */ new Map();
        subscribe = (e3) => (this.listeners.add(e3), () => {
          this.listeners.delete(e3);
        });
        getData = () => this.data;
        getOpen = () => this.open;
        setOpen(e3) {
          this.open !== e3 && (this.open = e3, this.emit());
        }
        holdDetail(e3) {
          return this.details.add(e3), () => {
            this.details.delete(e3);
          };
        }
        drawerOf(e3) {
          let t = this.data.nodes;
          for (let r = e3; r !== void 0; r = Object.keys(t).find((n) => t[n].children.includes(r))) {
            let n = t[r];
            if (n && n.children.length > 0 && (d9.has(n.type) || this.details.has(r))) return r;
          }
          return null;
        }
        start() {
          if (this.started || typeof window > "u") return;
          this.started = true;
          let e3 = this.runtime()?.live;
          e3?.subscribe((r) => this.receive(r));
          let t = this.read();
          t && e3?.hold?.(t);
        }
        item(e3) {
          let t = this.data.nodes[e3];
          if (t?.type !== Jx) return;
          let r = this.itemOf.get(t);
          return r || (r = { ...t.props, id: e3 }, this.itemOf.set(t, r)), r;
        }
        items(e3) {
          let t = this.data.nodes[e3];
          if (t?.type !== Zx) return C5;
          let r = t.children.map((i) => this.data.nodes[i]), n = this.lists.get(e3);
          if (n?.collection === t && r.every((i, o) => i === n.nodes[o])) return n.items;
          let a = t.children.map((i) => this.item(i));
          return this.lists.set(e3, { collection: t, nodes: r, items: a }), a;
        }
        emit() {
          for (let e3 of [...this.listeners]) e3();
        }
        read() {
          let e3 = this.runtime();
          if (!(this.reading || !e3?.request)) return this.reading = true, e3.request("live.read", null).then((t) => {
            this.reading = false, t.status === "ok" && typeof t.seq == "number" && typeof t.data == "string" && (this.seq === null || t.seq > this.seq) ? this.load(t.seq, JSON.parse(t.data)) : this.drain();
          }, () => {
            this.reading = false, this.drain();
          });
        }
        load(e3, t) {
          this.data = t, this.seq = e3, this.drain();
        }
        drain() {
          let e3 = this.pending;
          this.pending = [];
          for (let t of e3) this.apply(t);
          this.emit();
        }
        inStep(e3) {
          return this.seq !== null && e3.seq === this.seq + 1;
        }
        apply(e3) {
          this.inStep(e3) && (this.data = s8(this.data, e3.op), this.seq = e3.seq);
        }
        receive(e3) {
          if (e3.kind === "resync") this.read();
          else if (e3.kind === "op") {
            if (this.seq !== null && e3.seq <= this.seq) return;
            if (this.reading || !this.inStep(e3)) {
              this.pending.push(e3), this.read();
              return;
            }
            let t = this.data.nodes, r = new Map(M0().map((a) => [a, a.getBoundingClientRect()])), n = new Set(Ix());
            this.apply(e3), e3.op.op === "add" && !(e3.op.id in t) && this.entering.set(e3.op.id, this.nextEnter()), this.emit(), requestAnimationFrame(() => this.settle(r, n));
          } else this.setOpen(this.drawerOf(e3.id)), this.focus(e3, i9);
        }
        nextEnter() {
          let e3 = performance.now();
          return this.enterSlot = Math.min(Math.max(e3, this.enterSlot + l9), e3 + s9), this.enterSlot - e3;
        }
        settle(e3, t) {
          let r = M0();
          for (let o of r) this.gliding.get(o)?.cancel();
          let n = Ix().filter((o) => !t.has(o));
          for (let o of n) {
            let l = r.find((s) => o.contains(s) && this.entering.has(s.getAttribute("data-live-id")));
            this.enter(o, l ? this.entering.get(l.getAttribute("data-live-id")) : this.nextEnter());
          }
          let a = new Map(r.map((o) => [o, o.getBoundingClientRect()])), i = /* @__PURE__ */ new Map();
          for (let o of r) {
            let l = e3.get(o), s = this.entering.get(o.getAttribute("data-live-id"));
            if (!l) {
              s !== void 0 && !n.some((v) => v.contains(o)) && this.enter(o, s);
              continue;
            }
            let u = a.get(o), c = { x: l.left - u.left, y: l.top - u.top };
            i.set(o, c);
            let d = o.parentElement?.closest("[data-live-id]"), f = (d && i.get(d)) ?? { x: 0, y: 0 }, p = { x: c.x - f.x, y: c.y - f.y };
            Math.abs(p.x) < 1 && Math.abs(p.y) < 1 || matchMedia("(prefers-reduced-motion: reduce)").matches || this.gliding.set(o, o.animate([{ transform: `translate(${p.x}px, ${p.y}px)` }, { transform: "none" }], { duration: u9, easing: c9 }));
          }
          this.entering.clear(), this.marks.check();
        }
        enter(e3, t) {
          e3.style.setProperty("--file-live-enter-delay", `${Math.round(t)}ms`), e3.setAttribute("data-live-enter", ""), setTimeout(() => this.endEnter(e3), t + o9);
        }
        endEnter(e3) {
          e3.removeAttribute("data-live-enter"), e3.style.removeProperty("--file-live-enter-delay");
        }
        focus(e3, t) {
          let r = M0().find((a) => a.getAttribute("data-live-id") === e3.id);
          if (!r) {
            t > 0 && requestAnimationFrame(() => this.focus(e3, t - 1));
            return;
          }
          if (this.open === e3.id) return;
          let n = r.closest("dialog");
          n ? f9(n, r) : this.runtime()?.live?.reveal(e3.request, r);
          for (let a = r; a; a = a.parentElement?.closest("[data-live-id]")) this.endEnter(a), this.gliding.get(a)?.cancel();
          this.marks.point(e3.actor, e3.id, r);
        }
      };
      Qr = new h9(() => window.instinctFile);
      y9 = { Region: (e3, t) => (0, Ee.jsx)(Ee.Fragment, { children: t }), Group: (e3, t) => (0, Ee.jsx)(n5, { ...e3, children: t }), Rows: (e3, t) => (0, Ee.jsx)(i5, { ...e3, children: t }), PhotoCards: (e3, t) => (0, Ee.jsx)(k5, { children: t }), Text: (e3, t) => (0, Ee.jsx)(l5, { children: t }), Header: (e3) => (0, Ee.jsx)(r5, { ...e3 }), Row: (e3) => (0, Ee.jsx)(o5, { ...e3 }), PhotoCard: (e3, t) => (0, Ee.jsx)(v9, { props: e3, children: t }), Facts: (e3) => (0, Ee.jsx)(od, { ...e3 }), Heading: (e3) => (0, Ee.jsx)(s5, { sub: typeof e3.sub == "string" ? e3.sub : void 0, children: sa(e3.text) }), Paragraph: (e3) => (0, Ee.jsx)(u5, { children: sa(e3.text) }), Bullets: (e3) => (0, Ee.jsx)(c5, { ...e3 }), KeySentence: (e3) => (0, Ee.jsx)(d5, { children: sa(e3.text) }), Callout: (e3) => (0, Ee.jsx)(m5, { title: sa(e3.title), tone: e3.tone, children: sa(e3.text) }), NumberedList: (e3) => (0, Ee.jsx)(g5, { ...e3 }), Table: (e3) => (0, Ee.jsx)(v5, { ...e3 }), Caption: (e3) => (0, Ee.jsx)(h5, { children: sa(e3.text) }), Rule: () => (0, Ee.jsx)(p5, {}), Closing: (e3) => (0, Ee.jsx)(y5, { children: sa(e3.text) }), Figure: (e3) => (0, Ee.jsx)(f5, { ...e3 }), Photos: (e3) => (0, Ee.jsx)(lm, { ...e3 }), BarChart: (e3) => (0, Ee.jsx)(b5, { ...e3 }), ButtonLink: (e3) => (0, Ee.jsx)(Xb, { ...e3, children: sa(e3.label) }) };
      Ux = /* @__PURE__ */ new Set();
      w9 = class extends Xc.Component {
        state = { failed: false };
        static getDerivedStateFromError() {
          return { failed: true };
        }
        componentDidCatch(e3) {
          M5(this.props.id, `could not render as ${this.props.node.type}: ${e3.message}`);
        }
        componentDidUpdate(e3) {
          this.state.failed && e3.node !== this.props.node && this.setState({ failed: false });
        }
        render() {
          return this.state.failed ? null : this.props.children;
        }
      };
      L5 = (0, Xc.memo)(function({ id: e3 }) {
        let t = N5(e3);
        if (!t || t.type === Zx || t.type === Jx) return null;
        let r = y9[t.type];
        if (!r) return M5(e3, `has unknown type "${t.type}"; this File's kit cannot render it`), null;
        let n = t.children.map((a) => (0, Vl.jsx)(L5, { id: a }, a));
        return (0, Vl.jsx)(w9, { id: e3, node: t, children: (0, Vl.jsx)(Jc.Provider, { value: e3, children: r(t.props, n) }) });
      });
      k9 = { label: "Let\u2019s buy this", request: "I want this product. Check the current offer and prepare checkout for the selected variant. Resolve only essential missing choices in our conversation.", kind: "checkout" };
      Hx = (e3, t) => Object.entries(t).every(([r, n]) => e3.options[r] === n);
      S9 = (e3) => e3.map((t) => t.src).join(" ");
      Bx = (e3) => j5(e3.map((t) => t.photos?.length ? t.photos : void 0), S9);
      Vx = (e3) => e3.length > 1 ? `${e3[0]}\u2013${e3[e3.length - 1]}` : e3[0];
      cd = j(we(), 1);
    }
  });

  // page-kit:react-dom/client
  var require_client = __commonJS({
    "page-kit:react-dom/client"(exports, module) {
      module.exports = (init_kit(), __toCommonJS(kit_exports)).ReactDomClient;
    }
  });

  // page-kit:react
  var require_react = __commonJS({
    "page-kit:react"(exports, module) {
      module.exports = (init_kit(), __toCommonJS(kit_exports)).React;
    }
  });

  // page-kit:react/jsx-runtime
  var require_jsx_runtime = __commonJS({
    "page-kit:react/jsx-runtime"(exports, module) {
      module.exports = (init_kit(), __toCommonJS(kit_exports)).ReactJsxRuntime;
    }
  });

  // src/main.tsx
  var import_client = __toESM(require_client());

  // page-kit:@instinct/files
  var { BarChart, Bullets, Button, ButtonLink, Callout, Caption, ChoiceRow, CloseButton, Closing, CompareColumns, CopyButton, DataTable, DotChart, Drawer, DsButton, DsIconButton, Facts, Figure, FileButton, FileCard, FileGround, FileRouter, Group, Header, Heading, ImageFrame, KeySentence, LineChart, Link, LiveRegion, NavLink, NumberedList, Paragraph, PhotoCard, PhotoCards, PhotoViewer, Photos, ProductCard, ProductCarousel, ProductDetail, ProductGrid, ProductImage, ProductModal, ProductTable, ProductTile, RangeChart, RecommendationCard, RecommendationGrid, Reveal, Route, Routes, Row, Rows, Rule, Slider, Sparklines, StackedBar, StripArrows, Table, Text, TextField, TextLink, Wordmark, liveTarget, productBadge, stripTakeoverEvents, useFileContext, useLiveDetail, useLiveItem, useLiveItems, useLiveValue, useLocalState, useLocation, useNavigate, useWakeAgent } = (init_kit(), __toCommonJS(kit_exports)).Files;

  // src/App.tsx
  var import_react = __toESM(require_react());

  // instinct-url:/downloads/fleet-site/src/logo.svg
  var logo_default = "./favicon.svg";

  // src/App.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime());
  var icons = {
    calendar: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "6", y: "9", width: "36", height: "33", rx: "5" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 19h36M16 4v10M32 4v10" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 29l6 6 12-12" })
    ] }),
    wrench: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M30 8a9 9 0 0 0-11.6 11.6L8 30a6 6 0 0 0 8.5 8.5l10.4-10.4A9 9 0 0 0 38.5 16.5L31 24l-6-6 7.5-7.5A9 9 0 0 0 30 8z" }) }),
    tag: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 6h18l18 18-18 18L6 24V6z" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "15", cy: "15", r: "3.5" })
    ] }),
    chart: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 42h36" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "10", y: "22", width: "7", height: "20", rx: "2" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "21", y: "12", width: "7", height: "30", rx: "2" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "32", y: "27", width: "7", height: "15", rx: "2" })
    ] }),
    clock: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "24", cy: "24", r: "18", stroke: "currentColor" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 13v11l8 5" })
    ] }),
    car: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 96 48", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 32l6-12a6 6 0 0 1 5.4-3.3h18l12-8a6 6 0 0 1 3.3-1h8a6 6 0 0 1 5.4 3.3L76 22l9 4a6 6 0 0 1 3 5.3V34" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "26", cy: "36", r: "7" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "70", cy: "36", r: "7" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M33 36h30M10 34h9M77 35h9M44 17l-4 6" })
    ] }),
    fuel: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 40V12a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v28" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 40h28" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13 15h10v10H13z" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M28 20h4a4 4 0 0 1 4 4v8a3 3 0 0 0 6 0V18l-5-5" })
    ] })
  };
  var services = [
    { icon: icons.calendar, name: "\u05DE\u05E2\u05E7\u05D1 \u05DE\u05D5\u05E2\u05D3\u05D9\u05DD \u05DE\u05DC\u05D0", detail: "\u05D8\u05D9\u05E4\u05D5\u05DC\u05D9\u05DD, \u05D8\u05E1\u05D8 \u05D5\u05D1\u05D9\u05D8\u05D5\u05D7 \u05DC\u05DB\u05DC \u05E8\u05DB\u05D1 \u05D1\u05D7\u05D1\u05E8\u05D4, \u05E2\u05DD \u05EA\u05D6\u05DB\u05D5\u05E8\u05EA \u05DC\u05E4\u05E0\u05D9 \u05DB\u05DC \u05DE\u05D5\u05E2\u05D3. \u05D0\u05E3 \u05E8\u05DB\u05D1 \u05DC\u05D0 \u05D9\u05D5\u05E8\u05D3 \u05DE\u05D4\u05DB\u05D1\u05D9\u05E9 \u05D1\u05D2\u05DC\u05DC \u05E0\u05D9\u05D9\u05E8\u05EA.", cls: "g1" },
    { icon: icons.wrench, name: "\u05EA\u05D9\u05D0\u05D5\u05DD \u05DE\u05D5\u05DC \u05E1\u05E4\u05E7\u05D9\u05DD", detail: "\u05DE\u05D5\u05E1\u05DB\u05D9\u05DD, \u05D1\u05D9\u05D8\u05D5\u05D7, \u05E6\u05DE\u05D9\u05D2\u05D9\u05DD \u05D5\u05DC\u05D9\u05E1\u05D9\u05E0\u05D2. \u05E4\u05EA\u05D9\u05D7\u05EA \u05D4\u05D6\u05DE\u05E0\u05D5\u05EA, \u05EA\u05D9\u05D0\u05D5\u05DD \u05EA\u05D5\u05E8\u05D9\u05DD \u05D5\u05D1\u05E7\u05E8\u05D4 \u05E9\u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05D1\u05D5\u05E6\u05E2\u05D4.", cls: "g2" },
    { icon: icons.tag, name: "\u05DE\u05D9\u05E7\u05D5\u05D7 \u05DE\u05D5\u05DC \u05E1\u05E4\u05E7\u05D9\u05DD", detail: "\u05D1\u05D3\u05D9\u05E7\u05EA \u05D4\u05E6\u05E2\u05D5\u05EA \u05DE\u05D7\u05D9\u05E8 \u05DE\u05D5\u05DC \u05D4\u05DE\u05D5\u05E1\u05DB\u05D9\u05DD \u05D5\u05D4\u05E1\u05E4\u05E7\u05D9\u05DD \u05DC\u05E4\u05E0\u05D9 \u05D1\u05D9\u05E6\u05D5\u05E2 \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4.", cls: "g3" },
    { icon: icons.chart, name: "\u05D3\u05D5\u05D7 \u05D7\u05D5\u05D3\u05E9\u05D9 \u05DE\u05E1\u05D5\u05D3\u05E8", detail: "\u05DB\u05DC \u05E4\u05E2\u05D5\u05DC\u05D4 \u05D5\u05D4\u05D5\u05E6\u05D0\u05D4, \u05DE\u05E1\u05D5\u05D3\u05E8\u05D9\u05DD \u05DC\u05E4\u05D9 \u05D7\u05D1\u05E8\u05D4, \u05E8\u05DB\u05D1 \u05D5\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4. \u05D9\u05D5\u05D3\u05E2\u05D9\u05DD \u05D1\u05D3\u05D9\u05D5\u05E7 \u05DE\u05D4 \u05E7\u05D5\u05E8\u05D4 \u05D1\u05E6\u05D9.", cls: "g4" },
    { icon: icons.clock, name: "\u05D6\u05DE\u05D9\u05E0\u05D5\u05EA \u05DE\u05D5\u05E1\u05DB\u05DE\u05EA", detail: "\u05E9\u05E2\u05D5\u05EA \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05D1\u05E8\u05D5\u05E8\u05D5\u05EA \u05D5\u05DE\u05E2\u05E0\u05D4 \u05DE\u05E1\u05D5\u05D3\u05E8, \u05DB\u05E4\u05D9 \u05E9\u05DE\u05D5\u05E1\u05DB\u05DD \u05DE\u05E8\u05D0\u05E9 \u05D1\u05D9\u05E0\u05D9\u05E0\u05D5.", cls: "g5" },
    { icon: icons.fuel, name: "\u05DE\u05E2\u05E7\u05D1 \u05D3\u05DC\u05E7 \u05D5\u05DB\u05E8\u05D8\u05D9\u05E1\u05D9 \u05EA\u05D3\u05DC\u05D5\u05E7", detail: "\u05E8\u05D9\u05DB\u05D5\u05D6 \u05DB\u05E8\u05D8\u05D9\u05E1\u05D9 \u05D4\u05D3\u05DC\u05E7 \u05D5\u05E6\u05E8\u05D9\u05DB\u05EA \u05D4\u05D3\u05DC\u05E7 \u05E9\u05DC \u05DB\u05DC \u05E8\u05DB\u05D1 \u05D1\u05E6\u05D9, \u05D5\u05D3\u05D9\u05D5\u05D5\u05D7 \u05D7\u05D5\u05D3\u05E9\u05D9 \u05DE\u05E1\u05D5\u05D3\u05E8.", cls: "g6" }
  ];
  var steps = [
    "\u05E9\u05D9\u05D7\u05EA \u05D4\u05D9\u05DB\u05E8\u05D5\u05EA \u05E7\u05E6\u05E8\u05D4 \u05E2\u05DC \u05D4\u05E6\u05D9 \u05D5\u05D4\u05E6\u05E8\u05DB\u05D9\u05DD \u05E9\u05DC \u05D4\u05D7\u05D1\u05E8\u05D4 \u05E9\u05DC\u05DA.",
    "\u05D0\u05EA\u05D4 \u05DE\u05E2\u05D1\u05D9\u05E8 \u05D0\u05EA \u05E4\u05E8\u05D8\u05D9 \u05D4\u05E8\u05DB\u05D1\u05D9\u05DD \u05D5\u05D4\u05E1\u05E4\u05E7\u05D9\u05DD \u05D4\u05E7\u05D9\u05D9\u05DE\u05D9\u05DD.",
    "\u05D0\u05E0\u05D9 \u05DE\u05E0\u05D4\u05DC \u05D5\u05DE\u05EA\u05D0\u05DD \u05DE\u05D5\u05DC \u05D4\u05E1\u05E4\u05E7\u05D9\u05DD, \u05D5\u05D0\u05EA\u05D4 \u05DE\u05E7\u05D1\u05DC \u05E2\u05D3\u05DB\u05D5\u05DF \u05E9\u05D5\u05D8\u05E3 \u05E2\u05DC \u05DE\u05D4 \u05E9\u05E7\u05D5\u05E8\u05D4.",
    "\u05D1\u05E1\u05D5\u05E3 \u05DB\u05DC \u05D7\u05D5\u05D3\u05E9 \u05DE\u05D2\u05D9\u05E2 \u05D3\u05D5\u05D7 \u05DE\u05E1\u05D5\u05D3\u05E8: \u05DE\u05D4 \u05D1\u05D5\u05E6\u05E2 \u05D5\u05DB\u05DE\u05D4 \u05E2\u05DC\u05D4."
  ];
  var why = [
    { name: "\u05D0\u05D9\u05E9 \u05E7\u05E9\u05E8 \u05D0\u05D7\u05D3", detail: "\u05DB\u05DC \u05E0\u05D5\u05E9\u05D0 \u05E8\u05DB\u05D1 \u05D1\u05D7\u05D1\u05E8\u05D4 \u05DE\u05D2\u05D9\u05E2 \u05D0\u05DC\u05D9\u05D9, \u05DC\u05D0 \u05D0\u05DC\u05D9\u05DA. \u05E4\u05D7\u05D5\u05EA \u05D8\u05DC\u05E4\u05D5\u05E0\u05D9\u05DD, \u05E4\u05D7\u05D5\u05EA \u05E8\u05E2\u05E9." },
    { name: "\u05D1\u05DC\u05D9 \u05EA\u05D9\u05D5\u05D5\u05DA \u05D1\u05DB\u05E1\u05E3", detail: "\u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05DC\u05E1\u05E4\u05E7\u05D9\u05DD \u05D9\u05E9\u05D9\u05E8 \u05DE\u05D4\u05D7\u05D1\u05E8\u05D4 \u05D0\u05DC\u05D9\u05D4\u05DD. \u05D0\u05E0\u05D9 \u05DE\u05E0\u05D4\u05DC \u05D5\u05DE\u05EA\u05D0\u05DD \u05D1\u05DC\u05D1\u05D3." },
    { name: "\u05E9\u05E7\u05D9\u05E4\u05D5\u05EA \u05DE\u05DC\u05D0\u05D4", detail: "\u05D3\u05D5\u05D7 \u05D7\u05D5\u05D3\u05E9\u05D9 \u05DE\u05E1\u05D5\u05D3\u05E8 \u05DC\u05E4\u05D9 \u05E8\u05DB\u05D1 \u05D5\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4, \u05D5\u05E2\u05D3\u05DB\u05D5\u05E0\u05D9\u05DD \u05E9\u05D5\u05D8\u05E4\u05D9\u05DD \u05DC\u05D0\u05D5\u05E8\u05DA \u05DB\u05DC \u05D4\u05D7\u05D5\u05D3\u05E9." },
    { name: "\u05DE\u05D9\u05E7\u05D5\u05D7 \u05DE\u05D5\u05DC \u05E1\u05E4\u05E7\u05D9\u05DD", detail: "\u05D1\u05D3\u05D9\u05E7\u05EA \u05D4\u05E6\u05E2\u05D5\u05EA \u05DE\u05D7\u05D9\u05E8 \u05DE\u05D5\u05DC \u05D4\u05DE\u05D5\u05E1\u05DB\u05D9\u05DD \u05D5\u05D4\u05E1\u05E4\u05E7\u05D9\u05DD, \u05DC\u05E4\u05E0\u05D9 \u05E9\u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05D9\u05D5\u05E6\u05D0\u05EA \u05DC\u05E4\u05D5\u05E2\u05DC." }
  ];
  var faq = [
    { q: "\u05DB\u05DE\u05D4 \u05D6\u05D4 \u05E2\u05D5\u05DC\u05D4?", a: "\u05D4\u05EA\u05DE\u05D7\u05D5\u05E8 \u05DE\u05D5\u05EA\u05D0\u05DD \u05DC\u05D2\u05D5\u05D3\u05DC \u05D4\u05E6\u05D9 \u05D5\u05DC\u05E1\u05D5\u05D2 \u05D4\u05E8\u05DB\u05D1\u05D9\u05DD \u05D5\u05E0\u05E7\u05D1\u05E2 \u05D9\u05D7\u05D3 \u05D1\u05E9\u05D9\u05D7\u05EA \u05D4\u05D4\u05D9\u05DB\u05E8\u05D5\u05EA. \u05D1\u05DC\u05D9 \u05D4\u05EA\u05D7\u05D9\u05D9\u05D1\u05D5\u05EA \u05D5\u05D1\u05DC\u05D9 \u05D4\u05E4\u05EA\u05E2\u05D5\u05EA." },
    { q: "\u05DE\u05D9 \u05DE\u05E9\u05DC\u05DD \u05DC\u05DE\u05D5\u05E1\u05DA?", a: "\u05D0\u05EA\u05D4, \u05D9\u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05E1\u05E4\u05E7. \u05D0\u05E0\u05D9 \u05DC\u05D0 \u05DE\u05EA\u05D5\u05D5\u05DA \u05D1\u05DB\u05E1\u05E3, \u05DC\u05D0 \u05DE\u05D5\u05DB\u05E8 \u05D8\u05D9\u05E4\u05D5\u05DC\u05D9\u05DD \u05D5\u05DC\u05D0 \u05DE\u05D7\u05D9\u05D9\u05D1 \u05DB\u05E8\u05D8\u05D9\u05E1\u05D9\u05DD." },
    { q: "\u05DE\u05D4 \u05E7\u05D5\u05E8\u05D4 \u05DB\u05E9\u05D9\u05E9 \u05EA\u05E7\u05DC\u05D4 \u05D3\u05D7\u05D5\u05E4\u05D4?", a: "\u05D0\u05E0\u05D9 \u05DE\u05EA\u05D0\u05DD \u05DE\u05D5\u05DC \u05D4\u05E1\u05E4\u05E7 \u05D5\u05DE\u05E2\u05D3\u05DB\u05DF \u05D0\u05D5\u05EA\u05DA, \u05D1\u05DE\u05E1\u05D2\u05E8\u05EA \u05E9\u05E2\u05D5\u05EA \u05D4\u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05E9\u05E0\u05E1\u05DB\u05DD \u05DE\u05E8\u05D0\u05E9. \u05D0\u05D9\u05DF \u05D4\u05D1\u05D8\u05D7\u05EA \u05D7\u05D9\u05E8\u05D5\u05DD 24/7." },
    { q: "\u05D0\u05D9\u05DA \u05D9\u05D5\u05D3\u05E2\u05D9\u05DD \u05DE\u05D4 \u05D1\u05D5\u05E6\u05E2?", a: "\u05D1\u05E1\u05D5\u05E3 \u05DB\u05DC \u05D7\u05D5\u05D3\u05E9 \u05DE\u05D2\u05D9\u05E2 \u05D3\u05D5\u05D7 \u05DE\u05E1\u05D5\u05D3\u05E8: \u05E4\u05E2\u05D5\u05DC\u05D5\u05EA \u05D5\u05D4\u05D5\u05E6\u05D0\u05D5\u05EA, \u05DC\u05E4\u05D9 \u05D7\u05D1\u05E8\u05D4, \u05E8\u05DB\u05D1 \u05D5\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4." },
    { q: "\u05DC\u05D0\u05D9\u05D6\u05D5 \u05D7\u05D1\u05E8\u05D4 \u05D6\u05D4 \u05DE\u05EA\u05D0\u05D9\u05DD?", a: "\u05D7\u05D1\u05E8\u05D5\u05EA \u05E7\u05D8\u05E0\u05D5\u05EA \u05D5\u05D1\u05D9\u05E0\u05D5\u05E0\u05D9\u05D5\u05EA \u05E2\u05DD \u05DE\u05E1\u05E4\u05E8 \u05E8\u05DB\u05D1\u05D9\u05DD, \u05D1\u05DC\u05D9\u05E1\u05D9\u05E0\u05D2 \u05D0\u05D5 \u05D1\u05D1\u05E2\u05DC\u05D5\u05EA \u05E4\u05E8\u05D8\u05D9\u05EA." },
    { q: "\u05DE\u05D4 \u05E2\u05DD \u05D3\u05DC\u05E7?", a: "\u05D0\u05E0\u05D9 \u05E2\u05D5\u05E7\u05D1 \u05D0\u05D7\u05E8 \u05DB\u05E8\u05D8\u05D9\u05E1\u05D9 \u05D4\u05D3\u05DC\u05E7 \u05D5\u05D4\u05E6\u05E8\u05D9\u05DB\u05D4 \u05D1\u05DB\u05DC \u05E8\u05DB\u05D1, \u05D5\u05D4\u05DB\u05D5\u05DC \u05DE\u05E1\u05D5\u05DB\u05DD \u05D1\u05D3\u05D5\u05D7 \u05D4\u05D7\u05D5\u05D3\u05E9\u05D9." }
  ];
  function ContactForm() {
    const [state, setState] = import_react.default.useState("idle");
    const onSubmit = async (e3) => {
      e3.preventDefault();
      const f = e3.target;
      setState("sending");
      try {
        const data = Object.fromEntries(new FormData(f).entries());
        const r = await fetch("https://formspree.io/f/xrpqljdk", { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify({ ...data, _subject: "\u05E4\u05E0\u05D9\u05D9\u05D4 \u05D7\u05D3\u05E9\u05D4 \u05DE\u05D0\u05EA\u05E8 \u05E6\u05D9 \u05D1\u05E9\u05DC\u05D9\u05D8\u05D4" }) });
        if (r.ok) {
          setState("sent");
          f.reset();
        } else setState("error");
      } catch {
        setState("error");
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", { className: "cform", onSubmit, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { name: "name", required: true, placeholder: "\u05E9\u05DD \u05DE\u05DC\u05D0", autoComplete: "name" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { name: "phone", required: true, type: "tel", placeholder: "\u05D8\u05DC\u05E4\u05D5\u05DF \u05DC\u05D7\u05D6\u05E8\u05D4 \u05D0\u05DC\u05D9\u05DA", autoComplete: "tel" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { name: "company", placeholder: "\u05D7\u05D1\u05E8\u05D4 (\u05DC\u05D0 \u05D7\u05D5\u05D1\u05D4)", autoComplete: "organization" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", { name: "message", required: true, rows: 3, placeholder: "\u05DB\u05DE\u05D4 \u05DE\u05D9\u05DC\u05D9\u05DD \u05E2\u05DC \u05D4\u05E6\u05D9 \u05E9\u05DC\u05DA" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "btn send", type: "submit", disabled: state === "sending", children: state === "sending" ? "\u05E9\u05D5\u05DC\u05D7\u2026" : "\u05E9\u05DC\u05D9\u05D7\u05EA \u05E4\u05E8\u05D8\u05D9\u05DD" }),
      state === "sent" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "form-ok", children: "\u05D4\u05E4\u05E8\u05D8\u05D9\u05DD \u05E0\u05E9\u05DC\u05D7\u05D5. \u05D0\u05E8\u05D9\u05D4 \u05D9\u05D7\u05D6\u05D5\u05E8 \u05D0\u05DC\u05D9\u05DA \u05D1\u05D4\u05E7\u05D3\u05DD." }),
      state === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "form-err", children: "\u05D4\u05E9\u05DC\u05D9\u05D7\u05D4 \u05E0\u05DB\u05E9\u05DC\u05D4. \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D1\u05E2\u05D5\u05D3 \u05E8\u05D2\u05E2." })
    ] });
  }
  var sections = [["home", "\u05D1\u05D9\u05EA"], ["services", "\u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD"], ["process", "\u05D0\u05D9\u05DA \u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD"], ["why", "\u05DC\u05DE\u05D4 \u05D0\u05E0\u05D9"], ["faq", "\u05E9\u05D0\u05DC\u05D5\u05EA"], ["contact", "\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8"]];
  function scrollTo(id2) {
    const el = document.getElementById(id2);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    try {
      history.replaceState(null, "", "#" + id2);
    } catch {
    }
  }
  function Nav({ active }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", { className: "nav", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "brand", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { className: "logo", src: logo_default, alt: "" }),
        "\u05E6\u05D9 \u05D1\u05E9\u05DC\u05D9\u05D8\u05D4"
      ] }),
      sections.map(([id2, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: "#" + id2, className: active === id2 ? "active" : "", onClick: (e3) => {
        e3.preventDefault();
        scrollTo(id2);
      }, children: label }, id2))
    ] });
  }
  function Bg() {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "bgfx", "aria-hidden": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "glow g1" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "glow g2" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "bubble p1" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "bubble p2" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "bubble p3" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "bubble p4" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "bubble p5" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "bubble p6" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "lane l1" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "lane l2" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "lane l3" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "lane l4" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "carz c1", children: icons.car }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "carz c2", children: icons.car }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "carz c3", children: icons.car }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "carz c4", children: icons.car })
    ] });
  }
  function App() {
    const [active, setActive] = import_react.default.useState("home");
    import_react.default.useEffect(() => {
      const update = () => {
        const y = window.scrollY + 140;
        let cur = "home";
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 8) {
          cur = sections[sections.length - 1][0];
        } else for (const [id2] of sections) {
          const el = document.getElementById(id2);
          if (el && el.offsetTop <= y) cur = id2;
        }
        setActive(cur);
      };
      update();
      const h = location.hash.slice(1);
      if (h && sections.some(([id2]) => id2 === h)) {
        setTimeout(() => {
          const el = document.getElementById(h);
          if (el) {
            el.scrollIntoView({ block: "start" });
            update();
          }
        }, 80);
      }
      window.addEventListener("scroll", update, { passive: true });
      window.addEventListener("resize", update);
      return () => {
        window.removeEventListener("scroll", update);
        window.removeEventListener("resize", update);
      };
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { dir: "rtl", className: "page", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bg, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FileCard, { lang: "he", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { active }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { id: "home", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { title: "\u05E6\u05D9 \u05D1\u05E9\u05DC\u05D9\u05D8\u05D4 | \u05E0\u05D9\u05D4\u05D5\u05DC \u05E6\u05D9 \u05E8\u05DB\u05D1 \u05DC\u05E2\u05E1\u05E7\u05D9\u05DD", fact: "\u05D0\u05E8\u05D9\u05D4 \u05D0\u05E0\u05D2\u05DC \xB7 \u05E9\u05E7\u05D8 \u05E0\u05E4\u05E9\u05D9 \u05DC\u05D1\u05E2\u05DC\u05D9 \u05D7\u05D1\u05E8\u05D5\u05EA", intro: "\u05E0\u05D9\u05D4\u05D5\u05DC \u05D5\u05EA\u05D9\u05D0\u05D5\u05DD \u05DE\u05DC\u05D0 \u05E9\u05DC \u05E2\u05E0\u05D9\u05D9\u05E0\u05D9 \u05D4\u05E8\u05DB\u05D1 \u05D1\u05D7\u05D1\u05E8\u05D4 \u05E9\u05DC\u05DA: \u05DE\u05E2\u05E7\u05D1 \u05DE\u05D5\u05E2\u05D3\u05D9\u05DD, \u05E2\u05D1\u05D5\u05D3\u05D4 \u05DE\u05D5\u05DC \u05E1\u05E4\u05E7\u05D9\u05DD, \u05D1\u05E7\u05E8\u05EA \u05DE\u05D7\u05D9\u05E8\u05D9\u05DD \u05D5\u05D3\u05D5\u05D7 \u05D7\u05D5\u05D3\u05E9\u05D9 \u05DE\u05E1\u05D5\u05D3\u05E8." }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "hero", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "blob b1" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "blob b2" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "blob b3" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-car", children: icons.car }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
              "\u05D4\u05E6\u05D9 \u05E9\u05DC\u05DA \u05D1\u05D9\u05D3\u05D9\u05D9\u05DD \u05D8\u05D5\u05D1\u05D5\u05EA.",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
              "\u05D4\u05E8\u05D0\u05E9 \u05E9\u05DC\u05DA \u05E4\u05E0\u05D5\u05D9 \u05DC\u05E2\u05E1\u05E7."
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "\u05DE\u05E2\u05E7\u05D1 \u05DE\u05D5\u05E2\u05D3\u05D9\u05DD, \u05EA\u05D9\u05D0\u05D5\u05DD \u05DE\u05D5\u05DC \u05E1\u05E4\u05E7\u05D9\u05DD \u05D5\u05D1\u05E7\u05E8\u05EA \u05DE\u05D7\u05D9\u05E8\u05D9\u05DD, \u05D5\u05D3\u05D5\u05D7 \u05D7\u05D5\u05D3\u05E9\u05D9 \u05D0\u05D7\u05D3 \u05DE\u05E1\u05D5\u05D3\u05E8." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Group, { label: "\u05D0\u05D5\u05D3\u05D5\u05EA", heading: "\u05DE\u05D9 \u05DE\u05E0\u05D4\u05DC \u05D0\u05EA \u05D4\u05E6\u05D9 \u05E9\u05DC\u05DA", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text", children: "\u05D0\u05E0\u05D9 \u05D0\u05E8\u05D9\u05D4, \u05D5\u05D0\u05E0\u05D9 \u05DE\u05E0\u05D4\u05DC \u05D0\u05EA \u05DB\u05DC \u05DE\u05D4 \u05E9\u05E7\u05E9\u05D5\u05E8 \u05DC\u05E8\u05DB\u05D1\u05D9\u05DD \u05E9\u05DC \u05D4\u05D7\u05D1\u05E8\u05D4 \u05E9\u05DC\u05DA: \u05DE\u05E2\u05E7\u05D1 \u05D0\u05D7\u05E8 \u05D8\u05D9\u05E4\u05D5\u05DC\u05D9\u05DD, \u05D8\u05E1\u05D8\u05D9\u05DD \u05D5\u05D1\u05D9\u05D8\u05D5\u05D7\u05D9\u05DD, \u05EA\u05D9\u05D0\u05D5\u05DD \u05DE\u05D5\u05DC \u05DE\u05D5\u05E1\u05DB\u05D9\u05DD \u05D5\u05E1\u05E4\u05E7\u05D9\u05DD, \u05D1\u05D3\u05D9\u05E7\u05EA \u05D4\u05E6\u05E2\u05D5\u05EA \u05DE\u05D7\u05D9\u05E8 \u05D5\u05D3\u05D5\u05D7 \u05D7\u05D5\u05D3\u05E9\u05D9 \u05DE\u05E1\u05D5\u05D3\u05E8. \u05D1\u05DE\u05E7\u05D5\u05DD \u05E9\u05DB\u05DC \u05E0\u05D5\u05E9\u05D0 \u05E8\u05DB\u05D1 \u05D9\u05D2\u05D9\u05E2 \u05D0\u05DC\u05D9\u05DA, \u05D4\u05D5\u05D0 \u05DE\u05D2\u05D9\u05E2 \u05D0\u05DC\u05D9\u05D9, \u05D5\u05D0\u05EA\u05D4 \u05DE\u05EA\u05E4\u05E0\u05D4 \u05DC\u05E0\u05D4\u05DC \u05D0\u05EA \u05D4\u05E2\u05E1\u05E7." }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Closing, { children: "\u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05DE\u05D5\u05EA\u05D0\u05DD \u05DC\u05DB\u05DC \u05D7\u05D1\u05E8\u05D4 \u05DC\u05E4\u05D9 \u05D2\u05D5\u05D3\u05DC \u05D4\u05E6\u05D9 \u05D5\u05D4\u05E6\u05E8\u05DB\u05D9\u05DD \u05E9\u05DC\u05D4." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { id: "services", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Group, { label: "\u05D4\u05E9\u05D9\u05E8\u05D5\u05EA", heading: "\u05DE\u05D4 \u05D0\u05EA\u05D4 \u05DE\u05E7\u05D1\u05DC", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cards", children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { className: `card ${s.cls}`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ic", children: s.icon }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: s.name }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: s.detail })
        ] }, s.name)) }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { id: "process", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Group, { label: "\u05D4\u05EA\u05D4\u05DC\u05D9\u05DA", heading: "\u05D0\u05D9\u05DA \u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cards steps", children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { className: "card step", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "num", children: i + 1 }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: s })
          ] }, i)) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, { title: "\u05D1\u05DC\u05D9 \u05EA\u05D9\u05D5\u05D5\u05DA \u05D1\u05DB\u05E1\u05E3", children: "\u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05DC\u05E1\u05E4\u05E7\u05D9\u05DD \u05D9\u05E9\u05D9\u05E8 \u05DE\u05D4\u05D7\u05D1\u05E8\u05D4 \u05D0\u05DC\u05D9\u05D4\u05DD. \u05D0\u05E0\u05D9 \u05DE\u05E0\u05D4\u05DC \u05D5\u05DE\u05EA\u05D0\u05DD \u05D1\u05DC\u05D1\u05D3, \u05DC\u05D0 \u05DE\u05D5\u05DB\u05E8 \u05D8\u05D9\u05E4\u05D5\u05DC\u05D9\u05DD \u05D5\u05DC\u05D0 \u05DE\u05D7\u05D9\u05D9\u05D1 \u05DB\u05E8\u05D8\u05D9\u05E1\u05D9\u05DD." })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { id: "why", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Group, { label: "\u05DC\u05DE\u05D4 \u05D0\u05E0\u05D9", heading: "\u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05D0\u05D9\u05EA\u05D9 \u05D1\u05E9\u05E7\u05D8", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cards why", children: why.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", { className: "card step why-card", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: w.name }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: w.detail })
        ] }) }, w.name)) }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { id: "faq", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Group, { label: "\u05E9\u05D0\u05DC\u05D5\u05EA \u05E0\u05E4\u05D5\u05E6\u05D5\u05EA", heading: "\u05E9\u05D0\u05DC\u05D5\u05EA \u05E9\u05E9\u05D5\u05D0\u05DC\u05D9\u05DD \u05D0\u05D5\u05EA\u05D9", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "faq-list", children: faq.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", { className: "faq", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", { children: f.q }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: f.a })
        ] }, f.q)) }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { id: "contact", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Group, { label: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8", heading: "\u05D3\u05D1\u05E8\u05D5 \u05D0\u05D9\u05EA\u05D9", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "hero contact", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "blob b1" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "blob b3" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "\u05E0\u05D3\u05D1\u05E8 \u05E2\u05DC \u05D4\u05E6\u05D9 \u05E9\u05DC\u05DA?" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "\u05E9\u05D9\u05D7\u05EA \u05D4\u05D9\u05DB\u05E8\u05D5\u05EA \u05E7\u05E6\u05E8\u05D4, \u05D1\u05DC\u05D9 \u05D4\u05EA\u05D7\u05D9\u05D9\u05D1\u05D5\u05EA. \u05DE\u05E9\u05D0\u05D9\u05E8\u05D9\u05DD \u05E4\u05E8\u05D8\u05D9\u05DD \u05D1\u05D8\u05D5\u05E4\u05E1 \u05D5\u05D0\u05E8\u05D9\u05D4 \u05D7\u05D5\u05D6\u05E8 \u05D0\u05DC\u05D9\u05DA, \u05D0\u05D5 \u05DE\u05EA\u05E7\u05E9\u05E8\u05D9\u05DD \u05D9\u05E9\u05D9\u05E8\u05D5\u05EA:" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {}),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ctas", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { className: "btn tel", href: "tel:+972507822702", dir: "ltr", children: "050-7822702" }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Caption, { children: "\u05D0\u05E8\u05D9\u05D4 \u05D0\u05E0\u05D2\u05DC \xB7 \u05E0\u05D9\u05D4\u05D5\u05DC \u05D5\u05EA\u05D9\u05D0\u05D5\u05DD \u05E6\u05D9 \u05E8\u05DB\u05D1 \u05DC\u05D7\u05D1\u05E8\u05D5\u05EA \u05E7\u05D8\u05E0\u05D5\u05EA \u05D5\u05D1\u05D9\u05E0\u05D5\u05E0\u05D9\u05D5\u05EA." })
        ] }) })
      ] })
    ] });
  }

  // src/main.tsx
  var import_jsx_runtime2 = __toESM(require_jsx_runtime());
  (0, import_client.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FileRouter, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(App, {}) }));
})();
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-router/dist/development/chunk-BV7QT456.mjs:
react-router/dist/development/chunk-HT4INDD5.mjs:
react-router/dist/development/dom-export.mjs:
react-router/dist/development/index.mjs:
  (**
   * react-router v7.18.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router-dom/dist/index.mjs:
  (**
   * react-router-dom v7.18.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/

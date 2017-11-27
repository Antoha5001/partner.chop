if (function (t, e) {
		"use strict";
		"object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
			if (!t.document) throw new Error("jQuery requires a window with a document");
			return e(t)
		} : e(t)
	}("undefined" != typeof window ? window : this, function (t, e) {
		"use strict";

		function n(t, e) {
			var n = (e = e || Z).createElement("script");
			n.text = t, e.head.appendChild(n).parentNode.removeChild(n)
		}

		function i(t) {
			var e = !!t && "length" in t && t.length, n = ht.type(t);
			return "function" !== n && !ht.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
		}

		function o(t, e, n) {
			if (ht.isFunction(e)) return ht.grep(t, function (t, i) {
				return !!e.call(t, i, t) !== n
			});
			if (e.nodeType) return ht.grep(t, function (t) {
				return t === e !== n
			});
			if ("string" == typeof e) {
				if (xt.test(e)) return ht.filter(e, t, n);
				e = ht.filter(e, t)
			}
			return ht.grep(t, function (t) {
				return it.call(e, t) > -1 !== n && 1 === t.nodeType
			})
		}

		function s(t, e) {
			for (; (t = t[e]) && 1 !== t.nodeType;) ;
			return t
		}

		function r(t) {
			var e = {};
			return ht.each(t.match(St) || [], function (t, n) {
				e[n] = !0
			}), e
		}

		function a(t) {
			return t
		}

		function l(t) {
			throw t
		}

		function c(t, e, n) {
			var i;
			try {
				t && ht.isFunction(i = t.promise) ? i.call(t).done(e).fail(n) : t && ht.isFunction(i = t.then) ? i.call(t, e, n) : e.call(void 0, t)
			} catch (t) {
				n.call(void 0, t)
			}
		}

		function u() {
			Z.removeEventListener("DOMContentLoaded", u), t.removeEventListener("load", u), ht.ready()
		}

		function h() {
			this.expando = ht.expando + h.uid++
		}

		function d(t, e, n) {
			var i;
			if (void 0 === n && 1 === t.nodeType) if (i = "data-" + e.replace(Pt, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
				try {
					n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : $t.test(n) ? JSON.parse(n) : n)
				} catch (t) {
				}
				Ot.set(t, e, n)
			} else n = void 0;
			return n
		}

		function p(t, e, n, i) {
			var o, s = 1, r = 20, a = i ? function () {
					return i.cur()
				} : function () {
					return ht.css(t, e, "")
				}, l = a(), c = n && n[3] || (ht.cssNumber[e] ? "" : "px"),
				u = (ht.cssNumber[e] || "px" !== c && +l) && Mt.exec(ht.css(t, e));
			if (u && u[3] !== c) {
				c = c || u[3], n = n || [], u = +l || 1;
				do {
					s = s || ".5", u /= s, ht.style(t, e, u + c)
				} while (s !== (s = a() / l) && 1 !== s && --r)
			}
			return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
		}

		function f(t) {
			var e, n = t.ownerDocument, i = t.nodeName, o = Ft[i];
			return o || (e = n.body.appendChild(n.createElement(i)), o = ht.css(e, "display"), e.parentNode.removeChild(e), "none" === o && (o = "block"), Ft[i] = o, o)
		}

		function m(t, e) {
			for (var n, i, o = [], s = 0, r = t.length; s < r; s++) (i = t[s]).style && (n = i.style.display, e ? ("none" === n && (o[s] = Dt.get(i, "display") || null, o[s] || (i.style.display = "")), "" === i.style.display && Rt(i) && (o[s] = f(i))) : "none" !== n && (o[s] = "none", Dt.set(i, "display", n)));
			for (s = 0; s < r; s++) null != o[s] && (t[s].style.display = o[s]);
			return t
		}

		function g(t, e) {
			var n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
			return void 0 === e || e && ht.nodeName(t, e) ? ht.merge([t], n) : n
		}

		function v(t, e) {
			for (var n = 0, i = t.length; n < i; n++) Dt.set(t[n], "globalEval", !e || Dt.get(e[n], "globalEval"))
		}

		function y(t, e, n, i, o) {
			for (var s, r, a, l, c, u, h = e.createDocumentFragment(), d = [], p = 0, f = t.length; p < f; p++) if ((s = t[p]) || 0 === s) if ("object" === ht.type(s)) ht.merge(d, s.nodeType ? [s] : s); else if (Ut.test(s)) {
				for (r = r || h.appendChild(e.createElement("div")), a = (zt.exec(s) || ["", ""])[1].toLowerCase(), l = Bt[a] || Bt._default, r.innerHTML = l[1] + ht.htmlPrefilter(s) + l[2], u = l[0]; u--;) r = r.lastChild;
				ht.merge(d, r.childNodes), (r = h.firstChild).textContent = ""
			} else d.push(e.createTextNode(s));
			for (h.textContent = "", p = 0; s = d[p++];) if (i && ht.inArray(s, i) > -1) o && o.push(s); else if (c = ht.contains(s.ownerDocument, s), r = g(h.appendChild(s), "script"), c && v(r), n) for (u = 0; s = r[u++];) qt.test(s.type || "") && n.push(s);
			return h
		}

		function b() {
			return !0
		}

		function w() {
			return !1
		}

		function x() {
			try {
				return Z.activeElement
			} catch (t) {
			}
		}

		function _(t, e, n, i, o, s) {
			var r, a;
			if ("object" == typeof e) {
				"string" != typeof n && (i = i || n, n = void 0);
				for (a in e) _(t, a, n, i, e[a], s);
				return t
			}
			if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = w; else if (!o) return t;
			return 1 === s && (r = o, o = function (t) {
				return ht().off(t), r.apply(this, arguments)
			}, o.guid = r.guid || (r.guid = ht.guid++)), t.each(function () {
				ht.event.add(this, e, o, i, n)
			})
		}

		function C(t, e) {
			return ht.nodeName(t, "table") && ht.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t : t
		}

		function T(t) {
			return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
		}

		function E(t) {
			var e = Jt.exec(t.type);
			return e ? t.type = e[1] : t.removeAttribute("type"), t
		}

		function S(t, e) {
			var n, i, o, s, r, a, l, c;
			if (1 === e.nodeType) {
				if (Dt.hasData(t) && (s = Dt.access(t), r = Dt.set(e, s), c = s.events)) {
					delete r.handle, r.events = {};
					for (o in c) for (n = 0, i = c[o].length; n < i; n++) ht.event.add(e, o, c[o][n])
				}
				Ot.hasData(t) && (a = Ot.access(t), l = ht.extend({}, a), Ot.set(e, l))
			}
		}

		function k(t, e) {
			var n = e.nodeName.toLowerCase();
			"input" === n && Wt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
		}

		function A(t, e, i, o) {
			e = et.apply([], e);
			var s, r, a, l, c, u, h = 0, d = t.length, p = d - 1, f = e[0], m = ht.isFunction(f);
			if (m || d > 1 && "string" == typeof f && !ct.checkClone && Zt.test(f)) return t.each(function (n) {
				var s = t.eq(n);
				m && (e[0] = f.call(this, n, s.html())), A(s, e, i, o)
			});
			if (d && (s = y(e, t[0].ownerDocument, !1, t, o), r = s.firstChild, 1 === s.childNodes.length && (s = r), r || o)) {
				for (l = (a = ht.map(g(s, "script"), T)).length; h < d; h++) c = s, h !== p && (c = ht.clone(c, !0, !0), l && ht.merge(a, g(c, "script"))), i.call(t[h], c, h);
				if (l) for (u = a[a.length - 1].ownerDocument, ht.map(a, E), h = 0; h < l; h++) c = a[h], qt.test(c.type || "") && !Dt.access(c, "globalEval") && ht.contains(u, c) && (c.src ? ht._evalUrl && ht._evalUrl(c.src) : n(c.textContent.replace(te, ""), u))
			}
			return t
		}

		function I(t, e, n) {
			for (var i, o = e ? ht.filter(e, t) : t, s = 0; null != (i = o[s]); s++) n || 1 !== i.nodeType || ht.cleanData(g(i)), i.parentNode && (n && ht.contains(i.ownerDocument, i) && v(g(i, "script")), i.parentNode.removeChild(i));
			return t
		}

		function N(t, e, n) {
			var i, o, s, r, a = t.style;
			return (n = n || ie(t)) && ("" !== (r = n.getPropertyValue(e) || n[e]) || ht.contains(t.ownerDocument, t) || (r = ht.style(t, e)), !ct.pixelMarginRight() && ne.test(r) && ee.test(e) && (i = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = n.width, a.width = i, a.minWidth = o, a.maxWidth = s)), void 0 !== r ? r + "" : r
		}

		function D(t, e) {
			return {
				get: function () {
					return t() ? void delete this.get : (this.get = e).apply(this, arguments)
				}
			}
		}

		function O(t) {
			if (t in le) return t;
			for (var e = t[0].toUpperCase() + t.slice(1), n = ae.length; n--;) if ((t = ae[n] + e) in le) return t
		}

		function $(t, e, n) {
			var i = Mt.exec(e);
			return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
		}

		function P(t, e, n, i, o) {
			for (var s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; s < 4; s += 2) "margin" === n && (r += ht.css(t, n + jt[s], !0, o)), i ? ("content" === n && (r -= ht.css(t, "padding" + jt[s], !0, o)), "margin" !== n && (r -= ht.css(t, "border" + jt[s] + "Width", !0, o))) : (r += ht.css(t, "padding" + jt[s], !0, o), "padding" !== n && (r += ht.css(t, "border" + jt[s] + "Width", !0, o)));
			return r
		}

		function L(t, e, n) {
			var i, o = !0, s = ie(t), r = "border-box" === ht.css(t, "boxSizing", !1, s);
			if (t.getClientRects().length && (i = t.getBoundingClientRect()[e]), i <= 0 || null == i) {
				if (((i = N(t, e, s)) < 0 || null == i) && (i = t.style[e]), ne.test(i)) return i;
				o = r && (ct.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
			}
			return i + P(t, e, n || (r ? "border" : "content"), o, s) + "px"
		}

		function M(t, e, n, i, o) {
			return new M.prototype.init(t, e, n, i, o)
		}

		function j() {
			ue && (t.requestAnimationFrame(j), ht.fx.tick())
		}

		function R() {
			return t.setTimeout(function () {
				ce = void 0
			}), ce = ht.now()
		}

		function H(t, e) {
			var n, i = 0, o = {height: t};
			for (e = e ? 1 : 0; i < 4; i += 2 - e) n = jt[i], o["margin" + n] = o["padding" + n] = t;
			return e && (o.opacity = o.width = t), o
		}

		function F(t, e, n) {
			for (var i, o = (z.tweeners[e] || []).concat(z.tweeners["*"]), s = 0, r = o.length; s < r; s++) if (i = o[s].call(n, e, t)) return i
		}

		function W(t, e) {
			var n, i, o, s, r;
			for (n in t) if (i = ht.camelCase(n), o = e[i], s = t[n], ht.isArray(s) && (o = s[1], s = t[n] = s[0]), n !== i && (t[i] = s, delete t[n]), (r = ht.cssHooks[i]) && "expand" in r) {
				s = r.expand(s), delete t[i];
				for (n in s) n in t || (t[n] = s[n], e[n] = o)
			} else e[i] = o
		}

		function z(t, e, n) {
			var i, o, s = 0, r = z.prefilters.length, a = ht.Deferred().always(function () {
				delete l.elem
			}), l = function () {
				if (o) return !1;
				for (var e = ce || R(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), s = 0, r = c.tweens.length; s < r; s++) c.tweens[s].run(i);
				return a.notifyWith(t, [c, i, n]), i < 1 && r ? n : (a.resolveWith(t, [c]), !1)
			}, c = a.promise({
				elem: t,
				props: ht.extend({}, e),
				opts: ht.extend(!0, {specialEasing: {}, easing: ht.easing._default}, n),
				originalProperties: e,
				originalOptions: n,
				startTime: ce || R(),
				duration: n.duration,
				tweens: [],
				createTween: function (e, n) {
					var i = ht.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
					return c.tweens.push(i), i
				},
				stop: function (e) {
					var n = 0, i = e ? c.tweens.length : 0;
					if (o) return this;
					for (o = !0; n < i; n++) c.tweens[n].run(1);
					return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
				}
			}), u = c.props;
			for (W(u, c.opts.specialEasing); s < r; s++) if (i = z.prefilters[s].call(c, t, u, c.opts)) return ht.isFunction(i.stop) && (ht._queueHooks(c.elem, c.opts.queue).stop = ht.proxy(i.stop, i)), i;
			return ht.map(u, F, c), ht.isFunction(c.opts.start) && c.opts.start.call(t, c), ht.fx.timer(ht.extend(l, {
				elem: t,
				anim: c,
				queue: c.opts.queue
			})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
		}

		function q(t) {
			return t.getAttribute && t.getAttribute("class") || ""
		}

		function B(t, e, n, i) {
			var o;
			if (ht.isArray(e)) ht.each(e, function (e, o) {
				n || Te.test(t) ? i(t, o) : B(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i)
			}); else if (n || "object" !== ht.type(e)) i(t, e); else for (o in e) B(t + "[" + o + "]", e[o], n, i)
		}

		function U(t) {
			return function (e, n) {
				"string" != typeof e && (n = e, e = "*");
				var i, o = 0, s = e.toLowerCase().match(St) || [];
				if (ht.isFunction(n)) for (; i = s[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
			}
		}

		function V(t, e, n, i) {
			function o(a) {
				var l;
				return s[a] = !0, ht.each(t[a] || [], function (t, a) {
					var c = a(e, n, i);
					return "string" != typeof c || r || s[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
				}), l
			}

			var s = {}, r = t === Me;
			return o(e.dataTypes[0]) || !s["*"] && o("*")
		}

		function X(t, e) {
			var n, i, o = ht.ajaxSettings.flatOptions || {};
			for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
			return i && ht.extend(!0, t, i), t
		}

		function Y(t, e, n) {
			for (var i, o, s, r, a = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
			if (i) for (o in a) if (a[o] && a[o].test(i)) {
				l.unshift(o);
				break
			}
			if (l[0] in n) s = l[0]; else {
				for (o in n) {
					if (!l[0] || t.converters[o + " " + l[0]]) {
						s = o;
						break
					}
					r || (r = o)
				}
				s = s || r
			}
			if (s) return s !== l[0] && l.unshift(s), n[s]
		}

		function G(t, e, n, i) {
			var o, s, r, a, l, c = {}, u = t.dataTypes.slice();
			if (u[1]) for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
			for (s = u.shift(); s;) if (t.responseFields[s] && (n[t.responseFields[s]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = u.shift()) if ("*" === s) s = l; else if ("*" !== l && l !== s) {
				if (!(r = c[l + " " + s] || c["* " + s])) for (o in c) if ((a = o.split(" "))[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
					!0 === r ? r = c[o] : !0 !== c[o] && (s = a[0], u.unshift(a[1]));
					break
				}
				if (!0 !== r) if (r && t.throws) e = r(e); else try {
					e = r(e)
				} catch (t) {
					return {state: "parsererror", error: r ? t : "No conversion from " + l + " to " + s}
				}
			}
			return {state: "success", data: e}
		}

		function Q(t) {
			return ht.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
		}

		var K = [], Z = t.document, J = Object.getPrototypeOf, tt = K.slice, et = K.concat, nt = K.push, it = K.indexOf,
			ot = {}, st = ot.toString, rt = ot.hasOwnProperty, at = rt.toString, lt = at.call(Object), ct = {},
			ut = "3.1.0", ht = function (t, e) {
				return new ht.fn.init(t, e)
			}, dt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, pt = /^-ms-/, ft = /-([a-z])/g, mt = function (t, e) {
				return e.toUpperCase()
			};
		ht.fn = ht.prototype = {
			jquery: ut, constructor: ht, length: 0, toArray: function () {
				return tt.call(this)
			}, get: function (t) {
				return null != t ? t < 0 ? this[t + this.length] : this[t] : tt.call(this)
			}, pushStack: function (t) {
				var e = ht.merge(this.constructor(), t);
				return e.prevObject = this, e
			}, each: function (t) {
				return ht.each(this, t)
			}, map: function (t) {
				return this.pushStack(ht.map(this, function (e, n) {
					return t.call(e, n, e)
				}))
			}, slice: function () {
				return this.pushStack(tt.apply(this, arguments))
			}, first: function () {
				return this.eq(0)
			}, last: function () {
				return this.eq(-1)
			}, eq: function (t) {
				var e = this.length, n = +t + (t < 0 ? e : 0);
				return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
			}, end: function () {
				return this.prevObject || this.constructor()
			}, push: nt, sort: K.sort, splice: K.splice
		}, ht.extend = ht.fn.extend = function () {
			var t, e, n, i, o, s, r = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
			for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || ht.isFunction(r) || (r = {}), a === l && (r = this, a--); a < l; a++) if (null != (t = arguments[a])) for (e in t) n = r[e], i = t[e], r !== i && (c && i && (ht.isPlainObject(i) || (o = ht.isArray(i))) ? (o ? (o = !1, s = n && ht.isArray(n) ? n : []) : s = n && ht.isPlainObject(n) ? n : {}, r[e] = ht.extend(c, s, i)) : void 0 !== i && (r[e] = i));
			return r
		}, ht.extend({
			expando: "jQuery" + (ut + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
				throw new Error(t)
			}, noop: function () {
			}, isFunction: function (t) {
				return "function" === ht.type(t)
			}, isArray: Array.isArray, isWindow: function (t) {
				return null != t && t === t.window
			}, isNumeric: function (t) {
				var e = ht.type(t);
				return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
			}, isPlainObject: function (t) {
				var e, n;
				return !(!t || "[object Object]" !== st.call(t) || (e = J(t)) && ("function" != typeof(n = rt.call(e, "constructor") && e.constructor) || at.call(n) !== lt))
			}, isEmptyObject: function (t) {
				var e;
				for (e in t) return !1;
				return !0
			}, type: function (t) {
				return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? ot[st.call(t)] || "object" : typeof t
			}, globalEval: function (t) {
				n(t)
			}, camelCase: function (t) {
				return t.replace(pt, "ms-").replace(ft, mt)
			}, nodeName: function (t, e) {
				return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
			}, each: function (t, e) {
				var n, o = 0;
				if (i(t)) for (n = t.length; o < n && !1 !== e.call(t[o], o, t[o]); o++) ; else for (o in t) if (!1 === e.call(t[o], o, t[o])) break;
				return t
			}, trim: function (t) {
				return null == t ? "" : (t + "").replace(dt, "")
			}, makeArray: function (t, e) {
				var n = e || [];
				return null != t && (i(Object(t)) ? ht.merge(n, "string" == typeof t ? [t] : t) : nt.call(n, t)), n
			}, inArray: function (t, e, n) {
				return null == e ? -1 : it.call(e, t, n)
			}, merge: function (t, e) {
				for (var n = +e.length, i = 0, o = t.length; i < n; i++) t[o++] = e[i];
				return t.length = o, t
			}, grep: function (t, e, n) {
				for (var i = [], o = 0, s = t.length, r = !n; o < s; o++) !e(t[o], o) !== r && i.push(t[o]);
				return i
			}, map: function (t, e, n) {
				var o, s, r = 0, a = [];
				if (i(t)) for (o = t.length; r < o; r++) null != (s = e(t[r], r, n)) && a.push(s); else for (r in t) null != (s = e(t[r], r, n)) && a.push(s);
				return et.apply([], a)
			}, guid: 1, proxy: function (t, e) {
				var n, i, o;
				if ("string" == typeof e && (n = t[e], e = t, t = n), ht.isFunction(t)) return i = tt.call(arguments, 2), o = function () {
					return t.apply(e || this, i.concat(tt.call(arguments)))
				}, o.guid = t.guid = t.guid || ht.guid++, o
			}, now: Date.now, support: ct
		}), "function" == typeof Symbol && (ht.fn[Symbol.iterator] = K[Symbol.iterator]), ht.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
			ot["[object " + e + "]"] = e.toLowerCase()
		});
		var gt = function (t) {
			function e(t, e, n, i) {
				var o, s, r, a, l, u, d, p = e && e.ownerDocument, f = e ? e.nodeType : 9;
				if (n = n || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) return n;
				if (!i && ((e ? e.ownerDocument || e : H) !== D && N(e), e = e || D, $)) {
					if (11 !== f && (l = mt.exec(t))) if (o = l[1]) {
						if (9 === f) {
							if (!(r = e.getElementById(o))) return n;
							if (r.id === o) return n.push(r), n
						} else if (p && (r = p.getElementById(o)) && j(e, r) && r.id === o) return n.push(r), n
					} else {
						if (l[2]) return Q.apply(n, e.getElementsByTagName(t)), n;
						if ((o = l[3]) && w.getElementsByClassName && e.getElementsByClassName) return Q.apply(n, e.getElementsByClassName(o)), n
					}
					if (w.qsa && !B[t + " "] && (!P || !P.test(t))) {
						if (1 !== f) p = e, d = t; else if ("object" !== e.nodeName.toLowerCase()) {
							for ((a = e.getAttribute("id")) ? a = a.replace(bt, wt) : e.setAttribute("id", a = R), s = (u = T(t)).length; s--;) u[s] = "#" + a + " " + h(u[s]);
							d = u.join(","), p = gt.test(t) && c(e.parentNode) || e
						}
						if (d) try {
							return Q.apply(n, p.querySelectorAll(d)), n
						} catch (t) {
						} finally {
							a === R && e.removeAttribute("id")
						}
					}
				}
				return S(t.replace(st, "$1"), e, n, i)
			}

			function n() {
				function t(n, i) {
					return e.push(n + " ") > x.cacheLength && delete t[e.shift()], t[n + " "] = i
				}

				var e = [];
				return t
			}

			function i(t) {
				return t[R] = !0, t
			}

			function o(t) {
				var e = D.createElement("fieldset");
				try {
					return !!t(e)
				} catch (t) {
					return !1
				} finally {
					e.parentNode && e.parentNode.removeChild(e), e = null
				}
			}

			function s(t, e) {
				for (var n = t.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = e
			}

			function r(t, e) {
				var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
				if (i) return i;
				if (n) for (; n = n.nextSibling;) if (n === e) return -1;
				return t ? 1 : -1
			}

			function a(t) {
				return function (e) {
					return "label" in e && e.disabled === t || "form" in e && e.disabled === t || "form" in e && !1 === e.disabled && (e.isDisabled === t || e.isDisabled !== !t && ("label" in e || !_t(e)) !== t)
				}
			}

			function l(t) {
				return i(function (e) {
					return e = +e, i(function (n, i) {
						for (var o, s = t([], n.length, e), r = s.length; r--;) n[o = s[r]] && (n[o] = !(i[o] = n[o]))
					})
				})
			}

			function c(t) {
				return t && void 0 !== t.getElementsByTagName && t
			}

			function u() {
			}

			function h(t) {
				for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
				return i
			}

			function d(t, e, n) {
				var i = e.dir, o = e.next, s = o || i, r = n && "parentNode" === s, a = W++;
				return e.first ? function (e, n, o) {
					for (; e = e[i];) if (1 === e.nodeType || r) return t(e, n, o)
				} : function (e, n, l) {
					var c, u, h, d = [F, a];
					if (l) {
						for (; e = e[i];) if ((1 === e.nodeType || r) && t(e, n, l)) return !0
					} else for (; e = e[i];) if (1 === e.nodeType || r) if (h = e[R] || (e[R] = {}), u = h[e.uniqueID] || (h[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[i] || e; else {
						if ((c = u[s]) && c[0] === F && c[1] === a) return d[2] = c[2];
						if (u[s] = d, d[2] = t(e, n, l)) return !0
					}
				}
			}

			function p(t) {
				return t.length > 1 ? function (e, n, i) {
					for (var o = t.length; o--;) if (!t[o](e, n, i)) return !1;
					return !0
				} : t[0]
			}

			function f(t, n, i) {
				for (var o = 0, s = n.length; o < s; o++) e(t, n[o], i);
				return i
			}

			function m(t, e, n, i, o) {
				for (var s, r = [], a = 0, l = t.length, c = null != e; a < l; a++) (s = t[a]) && (n && !n(s, i, o) || (r.push(s), c && e.push(a)));
				return r
			}

			function g(t, e, n, o, s, r) {
				return o && !o[R] && (o = g(o)), s && !s[R] && (s = g(s, r)), i(function (i, r, a, l) {
					var c, u, h, d = [], p = [], g = r.length, v = i || f(e || "*", a.nodeType ? [a] : a, []),
						y = !t || !i && e ? v : m(v, d, t, a, l), b = n ? s || (i ? t : g || o) ? [] : r : y;
					if (n && n(y, b, a, l), o) for (c = m(b, p), o(c, [], a, l), u = c.length; u--;) (h = c[u]) && (b[p[u]] = !(y[p[u]] = h));
					if (i) {
						if (s || t) {
							if (s) {
								for (c = [], u = b.length; u--;) (h = b[u]) && c.push(y[u] = h);
								s(null, b = [], c, l)
							}
							for (u = b.length; u--;) (h = b[u]) && (c = s ? Z(i, h) : d[u]) > -1 && (i[c] = !(r[c] = h))
						}
					} else b = m(b === r ? b.splice(g, b.length) : b), s ? s(null, r, b, l) : Q.apply(r, b)
				})
			}

			function v(t) {
				for (var e, n, i, o = t.length, s = x.relative[t[0].type], r = s || x.relative[" "], a = s ? 1 : 0, l = d(function (t) {
					return t === e
				}, r, !0), c = d(function (t) {
					return Z(e, t) > -1
				}, r, !0), u = [function (t, n, i) {
					var o = !s && (i || n !== k) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
					return e = null, o
				}]; a < o; a++) if (n = x.relative[t[a].type]) u = [d(p(u), n)]; else {
					if ((n = x.filter[t[a].type].apply(null, t[a].matches))[R]) {
						for (i = ++a; i < o && !x.relative[t[i].type]; i++) ;
						return g(a > 1 && p(u), a > 1 && h(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(st, "$1"), n, a < i && v(t.slice(a, i)), i < o && v(t = t.slice(i)), i < o && h(t))
					}
					u.push(n)
				}
				return p(u)
			}

			function y(t, n) {
				var o = n.length > 0, s = t.length > 0, r = function (i, r, a, l, c) {
					var u, h, d, p = 0, f = "0", g = i && [], v = [], y = k, b = i || s && x.find.TAG("*", c),
						w = F += null == y ? 1 : Math.random() || .1, _ = b.length;
					for (c && (k = r === D || r || c); f !== _ && null != (u = b[f]); f++) {
						if (s && u) {
							for (h = 0, r || u.ownerDocument === D || (N(u), a = !$); d = t[h++];) if (d(u, r || D, a)) {
								l.push(u);
								break
							}
							c && (F = w)
						}
						o && ((u = !d && u) && p--, i && g.push(u))
					}
					if (p += f, o && f !== p) {
						for (h = 0; d = n[h++];) d(g, v, r, a);
						if (i) {
							if (p > 0) for (; f--;) g[f] || v[f] || (v[f] = Y.call(l));
							v = m(v)
						}
						Q.apply(l, v), c && !i && v.length > 0 && p + n.length > 1 && e.uniqueSort(l)
					}
					return c && (F = w, k = y), g
				};
				return o ? i(r) : r
			}

			var b, w, x, _, C, T, E, S, k, A, I, N, D, O, $, P, L, M, j, R = "sizzle" + 1 * new Date, H = t.document,
				F = 0, W = 0, z = n(), q = n(), B = n(), U = function (t, e) {
					return t === e && (I = !0), 0
				}, V = {}.hasOwnProperty, X = [], Y = X.pop, G = X.push, Q = X.push, K = X.slice, Z = function (t, e) {
					for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
					return -1
				},
				J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				tt = "[\\x20\\t\\r\\n\\f]", et = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
				nt = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]",
				it = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + nt + ")*)|.*)\\)|)",
				ot = new RegExp(tt + "+", "g"),
				st = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
				rt = new RegExp("^" + tt + "*," + tt + "*"),
				at = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
				lt = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"), ct = new RegExp(it),
				ut = new RegExp("^" + et + "$"), ht = {
					ID: new RegExp("^#(" + et + ")"),
					CLASS: new RegExp("^\\.(" + et + ")"),
					TAG: new RegExp("^(" + et + "|[*])"),
					ATTR: new RegExp("^" + nt),
					PSEUDO: new RegExp("^" + it),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + J + ")$", "i"),
					needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
				}, dt = /^(?:input|select|textarea|button)$/i, pt = /^h\d$/i, ft = /^[^{]+\{\s*\[native \w/,
				mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, gt = /[+~]/,
				vt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"), yt = function (t, e, n) {
					var i = "0x" + e - 65536;
					return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
				}, bt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, wt = function (t, e) {
					return e ? "\0" === t ? "\ufffd" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
				}, xt = function () {
					N()
				}, _t = d(function (t) {
					return !0 === t.disabled
				}, {dir: "parentNode", next: "legend"});
			try {
				Q.apply(X = K.call(H.childNodes), H.childNodes), X[H.childNodes.length].nodeType
			} catch (t) {
				Q = {
					apply: X.length ? function (t, e) {
						G.apply(t, K.call(e))
					} : function (t, e) {
						for (var n = t.length, i = 0; t[n++] = e[i++];) ;
						t.length = n - 1
					}
				}
			}
			w = e.support = {}, C = e.isXML = function (t) {
				var e = t && (t.ownerDocument || t).documentElement;
				return !!e && "HTML" !== e.nodeName
			}, N = e.setDocument = function (t) {
				var e, n, i = t ? t.ownerDocument || t : H;
				return i !== D && 9 === i.nodeType && i.documentElement ? (D = i, O = D.documentElement, $ = !C(D), H !== D && (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xt, !1) : n.attachEvent && n.attachEvent("onunload", xt)), w.attributes = o(function (t) {
					return t.className = "i", !t.getAttribute("className")
				}), w.getElementsByTagName = o(function (t) {
					return t.appendChild(D.createComment("")), !t.getElementsByTagName("*").length
				}), w.getElementsByClassName = ft.test(D.getElementsByClassName), w.getById = o(function (t) {
					return O.appendChild(t).id = R, !D.getElementsByName || !D.getElementsByName(R).length
				}), w.getById ? (x.find.ID = function (t, e) {
					if (void 0 !== e.getElementById && $) {
						var n = e.getElementById(t);
						return n ? [n] : []
					}
				}, x.filter.ID = function (t) {
					var e = t.replace(vt, yt);
					return function (t) {
						return t.getAttribute("id") === e
					}
				}) : (delete x.find.ID, x.filter.ID = function (t) {
					var e = t.replace(vt, yt);
					return function (t) {
						var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
						return n && n.value === e
					}
				}), x.find.TAG = w.getElementsByTagName ? function (t, e) {
					return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
				} : function (t, e) {
					var n, i = [], o = 0, s = e.getElementsByTagName(t);
					if ("*" === t) {
						for (; n = s[o++];) 1 === n.nodeType && i.push(n);
						return i
					}
					return s
				}, x.find.CLASS = w.getElementsByClassName && function (t, e) {
					if (void 0 !== e.getElementsByClassName && $) return e.getElementsByClassName(t)
				}, L = [], P = [], (w.qsa = ft.test(D.querySelectorAll)) && (o(function (t) {
					O.appendChild(t).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || P.push("\\[" + tt + "*(?:value|" + J + ")"), t.querySelectorAll("[id~=" + R + "-]").length || P.push("~="), t.querySelectorAll(":checked").length || P.push(":checked"), t.querySelectorAll("a#" + R + "+*").length || P.push(".#.+[+~]")
				}), o(function (t) {
					t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
					var e = D.createElement("input");
					e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && P.push("name" + tt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && P.push(":enabled", ":disabled"), O.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && P.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), P.push(",.*:")
				})), (w.matchesSelector = ft.test(M = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && o(function (t) {
					w.disconnectedMatch = M.call(t, "*"), M.call(t, "[s!='']:x"), L.push("!=", it)
				}), P = P.length && new RegExp(P.join("|")), L = L.length && new RegExp(L.join("|")), e = ft.test(O.compareDocumentPosition), j = e || ft.test(O.contains) ? function (t, e) {
					var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
					return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
				} : function (t, e) {
					if (e) for (; e = e.parentNode;) if (e === t) return !0;
					return !1
				}, U = e ? function (t, e) {
					if (t === e) return I = !0, 0;
					var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
					return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === D || t.ownerDocument === H && j(H, t) ? -1 : e === D || e.ownerDocument === H && j(H, e) ? 1 : A ? Z(A, t) - Z(A, e) : 0 : 4 & n ? -1 : 1)
				} : function (t, e) {
					if (t === e) return I = !0, 0;
					var n, i = 0, o = t.parentNode, s = e.parentNode, a = [t], l = [e];
					if (!o || !s) return t === D ? -1 : e === D ? 1 : o ? -1 : s ? 1 : A ? Z(A, t) - Z(A, e) : 0;
					if (o === s) return r(t, e);
					for (n = t; n = n.parentNode;) a.unshift(n);
					for (n = e; n = n.parentNode;) l.unshift(n);
					for (; a[i] === l[i];) i++;
					return i ? r(a[i], l[i]) : a[i] === H ? -1 : l[i] === H ? 1 : 0
				}, D) : D
			}, e.matches = function (t, n) {
				return e(t, null, null, n)
			}, e.matchesSelector = function (t, n) {
				if ((t.ownerDocument || t) !== D && N(t), n = n.replace(lt, "='$1']"), w.matchesSelector && $ && !B[n + " "] && (!L || !L.test(n)) && (!P || !P.test(n))) try {
					var i = M.call(t, n);
					if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
				} catch (t) {
				}
				return e(n, D, null, [t]).length > 0
			}, e.contains = function (t, e) {
				return (t.ownerDocument || t) !== D && N(t), j(t, e)
			}, e.attr = function (t, e) {
				(t.ownerDocument || t) !== D && N(t);
				var n = x.attrHandle[e.toLowerCase()],
					i = n && V.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !$) : void 0;
				return void 0 !== i ? i : w.attributes || !$ ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
			}, e.escape = function (t) {
				return (t + "").replace(bt, wt)
			}, e.error = function (t) {
				throw new Error("Syntax error, unrecognized expression: " + t)
			}, e.uniqueSort = function (t) {
				var e, n = [], i = 0, o = 0;
				if (I = !w.detectDuplicates, A = !w.sortStable && t.slice(0), t.sort(U), I) {
					for (; e = t[o++];) e === t[o] && (i = n.push(o));
					for (; i--;) t.splice(n[i], 1)
				}
				return A = null, t
			}, _ = e.getText = function (t) {
				var e, n = "", i = 0, o = t.nodeType;
				if (o) {
					if (1 === o || 9 === o || 11 === o) {
						if ("string" == typeof t.textContent) return t.textContent;
						for (t = t.firstChild; t; t = t.nextSibling) n += _(t)
					} else if (3 === o || 4 === o) return t.nodeValue
				} else for (; e = t[i++];) n += _(e);
				return n
			}, (x = e.selectors = {
				cacheLength: 50,
				createPseudo: i,
				match: ht,
				attrHandle: {},
				find: {},
				relative: {
					">": {dir: "parentNode", first: !0},
					" ": {dir: "parentNode"},
					"+": {dir: "previousSibling", first: !0},
					"~": {dir: "previousSibling"}
				},
				preFilter: {
					ATTR: function (t) {
						return t[1] = t[1].replace(vt, yt), t[3] = (t[3] || t[4] || t[5] || "").replace(vt, yt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
					}, CHILD: function (t) {
						return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
					}, PSEUDO: function (t) {
						var e, n = !t[6] && t[2];
						return ht.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ct.test(n) && (e = T(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
					}
				},
				filter: {
					TAG: function (t) {
						var e = t.replace(vt, yt).toLowerCase();
						return "*" === t ? function () {
							return !0
						} : function (t) {
							return t.nodeName && t.nodeName.toLowerCase() === e
						}
					}, CLASS: function (t) {
						var e = z[t + " "];
						return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && z(t, function (t) {
							return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
						})
					}, ATTR: function (t, n, i) {
						return function (o) {
							var s = e.attr(o, t);
							return null == s ? "!=" === n : !n || (s += "", "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s.replace(ot, " ") + " ").indexOf(i) > -1 : "|=" === n && (s === i || s.slice(0, i.length + 1) === i + "-"))
						}
					}, CHILD: function (t, e, n, i, o) {
						var s = "nth" !== t.slice(0, 3), r = "last" !== t.slice(-4), a = "of-type" === e;
						return 1 === i && 0 === o ? function (t) {
							return !!t.parentNode
						} : function (e, n, l) {
							var c, u, h, d, p, f, m = s !== r ? "nextSibling" : "previousSibling", g = e.parentNode,
								v = a && e.nodeName.toLowerCase(), y = !l && !a, b = !1;
							if (g) {
								if (s) {
									for (; m;) {
										for (d = e; d = d[m];) if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
										f = m = "only" === t && !f && "nextSibling"
									}
									return !0
								}
								if (f = [r ? g.firstChild : g.lastChild], r && y) {
									for (b = (p = (c = (u = (h = (d = g)[R] || (d[R] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === F && c[1]) && c[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (b = p = 0) || f.pop();) if (1 === d.nodeType && ++b && d === e) {
										u[t] = [F, p, b];
										break
									}
								} else if (y && (d = e, h = d[R] || (d[R] = {}), u = h[d.uniqueID] || (h[d.uniqueID] = {}), c = u[t] || [], p = c[0] === F && c[1], b = p), !1 === b) for (; (d = ++p && d && d[m] || (b = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && (h = d[R] || (d[R] = {}), u = h[d.uniqueID] || (h[d.uniqueID] = {}), u[t] = [F, b]), d !== e));) ;
								return (b -= o) === i || b % i == 0 && b / i >= 0
							}
						}
					}, PSEUDO: function (t, n) {
						var o, s = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
						return s[R] ? s(n) : s.length > 1 ? (o = [t, t, "", n], x.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
							for (var i, o = s(t, n), r = o.length; r--;) i = Z(t, o[r]), t[i] = !(e[i] = o[r])
						}) : function (t) {
							return s(t, 0, o)
						}) : s
					}
				},
				pseudos: {
					not: i(function (t) {
						var e = [], n = [], o = E(t.replace(st, "$1"));
						return o[R] ? i(function (t, e, n, i) {
							for (var s, r = o(t, null, i, []), a = t.length; a--;) (s = r[a]) && (t[a] = !(e[a] = s))
						}) : function (t, i, s) {
							return e[0] = t, o(e, null, s, n), e[0] = null, !n.pop()
						}
					}), has: i(function (t) {
						return function (n) {
							return e(t, n).length > 0
						}
					}), contains: i(function (t) {
						return t = t.replace(vt, yt), function (e) {
							return (e.textContent || e.innerText || _(e)).indexOf(t) > -1
						}
					}), lang: i(function (t) {
						return ut.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(vt, yt).toLowerCase(), function (e) {
							var n;
							do {
								if (n = $ ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
							} while ((e = e.parentNode) && 1 === e.nodeType);
							return !1
						}
					}), target: function (e) {
						var n = t.location && t.location.hash;
						return n && n.slice(1) === e.id
					}, root: function (t) {
						return t === O
					}, focus: function (t) {
						return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
					}, enabled: a(!1), disabled: a(!0), checked: function (t) {
						var e = t.nodeName.toLowerCase();
						return "input" === e && !!t.checked || "option" === e && !!t.selected
					}, selected: function (t) {
						return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
					}, empty: function (t) {
						for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
						return !0
					}, parent: function (t) {
						return !x.pseudos.empty(t)
					}, header: function (t) {
						return pt.test(t.nodeName)
					}, input: function (t) {
						return dt.test(t.nodeName)
					}, button: function (t) {
						var e = t.nodeName.toLowerCase();
						return "input" === e && "button" === t.type || "button" === e
					}, text: function (t) {
						var e;
						return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
					}, first: l(function () {
						return [0]
					}), last: l(function (t, e) {
						return [e - 1]
					}), eq: l(function (t, e, n) {
						return [n < 0 ? n + e : n]
					}), even: l(function (t, e) {
						for (var n = 0; n < e; n += 2) t.push(n);
						return t
					}), odd: l(function (t, e) {
						for (var n = 1; n < e; n += 2) t.push(n);
						return t
					}), lt: l(function (t, e, n) {
						for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
						return t
					}), gt: l(function (t, e, n) {
						for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
						return t
					})
				}
			}).pseudos.nth = x.pseudos.eq;
			for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) x.pseudos[b] = function (t) {
				return function (e) {
					return "input" === e.nodeName.toLowerCase() && e.type === t
				}
			}(b);
			for (b in{submit: !0, reset: !0}) x.pseudos[b] = function (t) {
				return function (e) {
					var n = e.nodeName.toLowerCase();
					return ("input" === n || "button" === n) && e.type === t
				}
			}(b);
			return u.prototype = x.filters = x.pseudos, x.setFilters = new u, T = e.tokenize = function (t, n) {
				var i, o, s, r, a, l, c, u = q[t + " "];
				if (u) return n ? 0 : u.slice(0);
				for (a = t, l = [], c = x.preFilter; a;) {
					i && !(o = rt.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(s = [])), i = !1, (o = at.exec(a)) && (i = o.shift(), s.push({
						value: i,
						type: o[0].replace(st, " ")
					}), a = a.slice(i.length));
					for (r in x.filter) !(o = ht[r].exec(a)) || c[r] && !(o = c[r](o)) || (i = o.shift(), s.push({
						value: i,
						type: r,
						matches: o
					}), a = a.slice(i.length));
					if (!i) break
				}
				return n ? a.length : a ? e.error(t) : q(t, l).slice(0)
			}, E = e.compile = function (t, e) {
				var n, i = [], o = [], s = B[t + " "];
				if (!s) {
					for (e || (e = T(t)), n = e.length; n--;) (s = v(e[n]))[R] ? i.push(s) : o.push(s);
					(s = B(t, y(o, i))).selector = t
				}
				return s
			}, S = e.select = function (t, e, n, i) {
				var o, s, r, a, l, u = "function" == typeof t && t, d = !i && T(t = u.selector || t);
				if (n = n || [], 1 === d.length) {
					if ((s = d[0] = d[0].slice(0)).length > 2 && "ID" === (r = s[0]).type && w.getById && 9 === e.nodeType && $ && x.relative[s[1].type]) {
						if (!(e = (x.find.ID(r.matches[0].replace(vt, yt), e) || [])[0])) return n;
						u && (e = e.parentNode), t = t.slice(s.shift().value.length)
					}
					for (o = ht.needsContext.test(t) ? 0 : s.length; o-- && (r = s[o], !x.relative[a = r.type]);) if ((l = x.find[a]) && (i = l(r.matches[0].replace(vt, yt), gt.test(s[0].type) && c(e.parentNode) || e))) {
						if (s.splice(o, 1), !(t = i.length && h(s))) return Q.apply(n, i), n;
						break
					}
				}
				return (u || E(t, d))(i, e, !$, n, !e || gt.test(t) && c(e.parentNode) || e), n
			}, w.sortStable = R.split("").sort(U).join("") === R, w.detectDuplicates = !!I, N(), w.sortDetached = o(function (t) {
				return 1 & t.compareDocumentPosition(D.createElement("fieldset"))
			}), o(function (t) {
				return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
			}) || s("type|href|height|width", function (t, e, n) {
				if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
			}), w.attributes && o(function (t) {
				return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
			}) || s("value", function (t, e, n) {
				if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
			}), o(function (t) {
				return null == t.getAttribute("disabled")
			}) || s(J, function (t, e, n) {
				var i;
				if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
			}), e
		}(t);
		ht.find = gt, ht.expr = gt.selectors, ht.expr[":"] = ht.expr.pseudos, ht.uniqueSort = ht.unique = gt.uniqueSort, ht.text = gt.getText, ht.isXMLDoc = gt.isXML, ht.contains = gt.contains, ht.escapeSelector = gt.escape;
		var vt = function (t, e, n) {
				for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
					if (o && ht(t).is(n)) break;
					i.push(t)
				}
				return i
			}, yt = function (t, e) {
				for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
				return n
			}, bt = ht.expr.match.needsContext, wt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
			xt = /^.[^:#\[\.,]*$/;
		ht.filter = function (t, e, n) {
			var i = e[0];
			return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ht.find.matchesSelector(i, t) ? [i] : [] : ht.find.matches(t, ht.grep(e, function (t) {
				return 1 === t.nodeType
			}))
		}, ht.fn.extend({
			find: function (t) {
				var e, n, i = this.length, o = this;
				if ("string" != typeof t) return this.pushStack(ht(t).filter(function () {
					for (e = 0; e < i; e++) if (ht.contains(o[e], this)) return !0
				}));
				for (n = this.pushStack([]), e = 0; e < i; e++) ht.find(t, o[e], n);
				return i > 1 ? ht.uniqueSort(n) : n
			}, filter: function (t) {
				return this.pushStack(o(this, t || [], !1))
			}, not: function (t) {
				return this.pushStack(o(this, t || [], !0))
			}, is: function (t) {
				return !!o(this, "string" == typeof t && bt.test(t) ? ht(t) : t || [], !1).length
			}
		});
		var _t, Ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
		(ht.fn.init = function (t, e, n) {
			var i, o;
			if (!t) return this;
			if (n = n || _t, "string" == typeof t) {
				if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : Ct.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
				if (i[1]) {
					if (e = e instanceof ht ? e[0] : e, ht.merge(this, ht.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : Z, !0)), wt.test(i[1]) && ht.isPlainObject(e)) for (i in e) ht.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
					return this
				}
				return (o = Z.getElementById(i[2])) && (this[0] = o, this.length = 1), this
			}
			return t.nodeType ? (this[0] = t, this.length = 1, this) : ht.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(ht) : ht.makeArray(t, this)
		}).prototype = ht.fn, _t = ht(Z);
		var Tt = /^(?:parents|prev(?:Until|All))/, Et = {children: !0, contents: !0, next: !0, prev: !0};
		ht.fn.extend({
			has: function (t) {
				var e = ht(t, this), n = e.length;
				return this.filter(function () {
					for (var t = 0; t < n; t++) if (ht.contains(this, e[t])) return !0
				})
			}, closest: function (t, e) {
				var n, i = 0, o = this.length, s = [], r = "string" != typeof t && ht(t);
				if (!bt.test(t)) for (; i < o; i++) for (n = this[i]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && ht.find.matchesSelector(n, t))) {
					s.push(n);
					break
				}
				return this.pushStack(s.length > 1 ? ht.uniqueSort(s) : s)
			}, index: function (t) {
				return t ? "string" == typeof t ? it.call(ht(t), this[0]) : it.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			}, add: function (t, e) {
				return this.pushStack(ht.uniqueSort(ht.merge(this.get(), ht(t, e))))
			}, addBack: function (t) {
				return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
			}
		}), ht.each({
			parent: function (t) {
				var e = t.parentNode;
				return e && 11 !== e.nodeType ? e : null
			}, parents: function (t) {
				return vt(t, "parentNode")
			}, parentsUntil: function (t, e, n) {
				return vt(t, "parentNode", n)
			}, next: function (t) {
				return s(t, "nextSibling")
			}, prev: function (t) {
				return s(t, "previousSibling")
			}, nextAll: function (t) {
				return vt(t, "nextSibling")
			}, prevAll: function (t) {
				return vt(t, "previousSibling")
			}, nextUntil: function (t, e, n) {
				return vt(t, "nextSibling", n)
			}, prevUntil: function (t, e, n) {
				return vt(t, "previousSibling", n)
			}, siblings: function (t) {
				return yt((t.parentNode || {}).firstChild, t)
			}, children: function (t) {
				return yt(t.firstChild)
			}, contents: function (t) {
				return t.contentDocument || ht.merge([], t.childNodes)
			}
		}, function (t, e) {
			ht.fn[t] = function (n, i) {
				var o = ht.map(this, e, n);
				return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = ht.filter(i, o)), this.length > 1 && (Et[t] || ht.uniqueSort(o), Tt.test(t) && o.reverse()), this.pushStack(o)
			}
		});
		var St = /\S+/g;
		ht.Callbacks = function (t) {
			t = "string" == typeof t ? r(t) : ht.extend({}, t);
			var e, n, i, o, s = [], a = [], l = -1, c = function () {
				for (o = t.once, i = e = !0; a.length; l = -1) for (n = a.shift(); ++l < s.length;) !1 === s[l].apply(n[0], n[1]) && t.stopOnFalse && (l = s.length, n = !1);
				t.memory || (n = !1), e = !1, o && (s = n ? [] : "")
			}, u = {
				add: function () {
					return s && (n && !e && (l = s.length - 1, a.push(n)), function e(n) {
						ht.each(n, function (n, i) {
							ht.isFunction(i) ? t.unique && u.has(i) || s.push(i) : i && i.length && "string" !== ht.type(i) && e(i)
						})
					}(arguments), n && !e && c()), this
				}, remove: function () {
					return ht.each(arguments, function (t, e) {
						for (var n; (n = ht.inArray(e, s, n)) > -1;) s.splice(n, 1), n <= l && l--
					}), this
				}, has: function (t) {
					return t ? ht.inArray(t, s) > -1 : s.length > 0
				}, empty: function () {
					return s && (s = []), this
				}, disable: function () {
					return o = a = [], s = n = "", this
				}, disabled: function () {
					return !s
				}, lock: function () {
					return o = a = [], n || e || (s = n = ""), this
				}, locked: function () {
					return !!o
				}, fireWith: function (t, n) {
					return o || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || c()), this
				}, fire: function () {
					return u.fireWith(this, arguments), this
				}, fired: function () {
					return !!i
				}
			};
			return u
		}, ht.extend({
			Deferred: function (e) {
				var n = [["notify", "progress", ht.Callbacks("memory"), ht.Callbacks("memory"), 2], ["resolve", "done", ht.Callbacks("once memory"), ht.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ht.Callbacks("once memory"), ht.Callbacks("once memory"), 1, "rejected"]],
					i = "pending", o = {
						state: function () {
							return i
						}, always: function () {
							return s.done(arguments).fail(arguments), this
						}, catch: function (t) {
							return o.then(null, t)
						}, pipe: function () {
							var t = arguments;
							return ht.Deferred(function (e) {
								ht.each(n, function (n, i) {
									var o = ht.isFunction(t[i[4]]) && t[i[4]];
									s[i[1]](function () {
										var t = o && o.apply(this, arguments);
										t && ht.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, o ? [t] : arguments)
									})
								}), t = null
							}).promise()
						}, then: function (e, i, o) {
							function s(e, n, i, o) {
								return function () {
									var c = this, u = arguments, h = function () {
										var t, h;
										if (!(e < r)) {
											if ((t = i.apply(c, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
											h = t && ("object" == typeof t || "function" == typeof t) && t.then, ht.isFunction(h) ? o ? h.call(t, s(r, n, a, o), s(r, n, l, o)) : (r++, h.call(t, s(r, n, a, o), s(r, n, l, o), s(r, n, a, n.notifyWith))) : (i !== a && (c = void 0, u = [t]), (o || n.resolveWith)(c, u))
										}
									}, d = o ? h : function () {
										try {
											h()
										} catch (t) {
											ht.Deferred.exceptionHook && ht.Deferred.exceptionHook(t, d.stackTrace), e + 1 >= r && (i !== l && (c = void 0, u = [t]), n.rejectWith(c, u))
										}
									};
									e ? d() : (ht.Deferred.getStackHook && (d.stackTrace = ht.Deferred.getStackHook()), t.setTimeout(d))
								}
							}

							var r = 0;
							return ht.Deferred(function (t) {
								n[0][3].add(s(0, t, ht.isFunction(o) ? o : a, t.notifyWith)), n[1][3].add(s(0, t, ht.isFunction(e) ? e : a)), n[2][3].add(s(0, t, ht.isFunction(i) ? i : l))
							}).promise()
						}, promise: function (t) {
							return null != t ? ht.extend(t, o) : o
						}
					}, s = {};
				return ht.each(n, function (t, e) {
					var r = e[2], a = e[5];
					o[e[1]] = r.add, a && r.add(function () {
						i = a
					}, n[3 - t][2].disable, n[0][2].lock), r.add(e[3].fire), s[e[0]] = function () {
						return s[e[0] + "With"](this === s ? void 0 : this, arguments), this
					}, s[e[0] + "With"] = r.fireWith
				}), o.promise(s), e && e.call(s, s), s
			}, when: function (t) {
				var e = arguments.length, n = e, i = Array(n), o = tt.call(arguments), s = ht.Deferred(),
					r = function (t) {
						return function (n) {
							i[t] = this, o[t] = arguments.length > 1 ? tt.call(arguments) : n, --e || s.resolveWith(i, o)
						}
					};
				if (e <= 1 && (c(t, s.done(r(n)).resolve, s.reject), "pending" === s.state() || ht.isFunction(o[n] && o[n].then))) return s.then();
				for (; n--;) c(o[n], r(n), s.reject);
				return s.promise()
			}
		});
		var kt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
		ht.Deferred.exceptionHook = function (e, n) {
			t.console && t.console.warn && e && kt.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
		}, ht.readyException = function (e) {
			t.setTimeout(function () {
				throw e
			})
		};
		var At = ht.Deferred();
		ht.fn.ready = function (t) {
			return At.then(t).catch(function (t) {
				ht.readyException(t)
			}), this
		}, ht.extend({
			isReady: !1, readyWait: 1, holdReady: function (t) {
				t ? ht.readyWait++ : ht.ready(!0)
			}, ready: function (t) {
				(!0 === t ? --ht.readyWait : ht.isReady) || (ht.isReady = !0, !0 !== t && --ht.readyWait > 0 || At.resolveWith(Z, [ht]))
			}
		}), ht.ready.then = At.then, "complete" === Z.readyState || "loading" !== Z.readyState && !Z.documentElement.doScroll ? t.setTimeout(ht.ready) : (Z.addEventListener("DOMContentLoaded", u), t.addEventListener("load", u));
		var It = function (t, e, n, i, o, s, r) {
			var a = 0, l = t.length, c = null == n;
			if ("object" === ht.type(n)) {
				o = !0;
				for (a in n) It(t, e, a, n[a], !0, s, r)
			} else if (void 0 !== i && (o = !0, ht.isFunction(i) || (r = !0), c && (r ? (e.call(t, i), e = null) : (c = e, e = function (t, e, n) {
					return c.call(ht(t), n)
				})), e)) for (; a < l; a++) e(t[a], n, r ? i : i.call(t[a], a, e(t[a], n)));
			return o ? t : c ? e.call(t) : l ? e(t[0], n) : s
		}, Nt = function (t) {
			return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
		};
		h.uid = 1, h.prototype = {
			cache: function (t) {
				var e = t[this.expando];
				return e || (e = {}, Nt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
					value: e,
					configurable: !0
				}))), e
			}, set: function (t, e, n) {
				var i, o = this.cache(t);
				if ("string" == typeof e) o[ht.camelCase(e)] = n; else for (i in e) o[ht.camelCase(i)] = e[i];
				return o
			}, get: function (t, e) {
				return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][ht.camelCase(e)]
			}, access: function (t, e, n) {
				return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
			}, remove: function (t, e) {
				var n, i = t[this.expando];
				if (void 0 !== i) {
					if (void 0 !== e) {
						ht.isArray(e) ? e = e.map(ht.camelCase) : (e = ht.camelCase(e), e = e in i ? [e] : e.match(St) || []), n = e.length;
						for (; n--;) delete i[e[n]]
					}
					(void 0 === e || ht.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
				}
			}, hasData: function (t) {
				var e = t[this.expando];
				return void 0 !== e && !ht.isEmptyObject(e)
			}
		};
		var Dt = new h, Ot = new h, $t = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Pt = /[A-Z]/g;
		ht.extend({
			hasData: function (t) {
				return Ot.hasData(t) || Dt.hasData(t)
			}, data: function (t, e, n) {
				return Ot.access(t, e, n)
			}, removeData: function (t, e) {
				Ot.remove(t, e)
			}, _data: function (t, e, n) {
				return Dt.access(t, e, n)
			}, _removeData: function (t, e) {
				Dt.remove(t, e)
			}
		}), ht.fn.extend({
			data: function (t, e) {
				var n, i, o, s = this[0], r = s && s.attributes;
				if (void 0 === t) {
					if (this.length && (o = Ot.get(s), 1 === s.nodeType && !Dt.get(s, "hasDataAttrs"))) {
						for (n = r.length; n--;) r[n] && 0 === (i = r[n].name).indexOf("data-") && (i = ht.camelCase(i.slice(5)), d(s, i, o[i]));
						Dt.set(s, "hasDataAttrs", !0)
					}
					return o
				}
				return "object" == typeof t ? this.each(function () {
					Ot.set(this, t)
				}) : It(this, function (e) {
					var n;
					if (s && void 0 === e) {
						if (void 0 !== (n = Ot.get(s, t))) return n;
						if (void 0 !== (n = d(s, t))) return n
					} else this.each(function () {
						Ot.set(this, t, e)
					})
				}, null, e, arguments.length > 1, null, !0)
			}, removeData: function (t) {
				return this.each(function () {
					Ot.remove(this, t)
				})
			}
		}), ht.extend({
			queue: function (t, e, n) {
				var i;
				if (t) return e = (e || "fx") + "queue", i = Dt.get(t, e), n && (!i || ht.isArray(n) ? i = Dt.access(t, e, ht.makeArray(n)) : i.push(n)), i || []
			}, dequeue: function (t, e) {
				e = e || "fx";
				var n = ht.queue(t, e), i = n.length, o = n.shift(), s = ht._queueHooks(t, e);
				"inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete s.stop, o.call(t, function () {
					ht.dequeue(t, e)
				}, s)), !i && s && s.empty.fire()
			}, _queueHooks: function (t, e) {
				var n = e + "queueHooks";
				return Dt.get(t, n) || Dt.access(t, n, {
					empty: ht.Callbacks("once memory").add(function () {
						Dt.remove(t, [e + "queue", n])
					})
				})
			}
		}), ht.fn.extend({
			queue: function (t, e) {
				var n = 2;
				return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ht.queue(this[0], t) : void 0 === e ? this : this.each(function () {
					var n = ht.queue(this, t, e);
					ht._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ht.dequeue(this, t)
				})
			}, dequeue: function (t) {
				return this.each(function () {
					ht.dequeue(this, t)
				})
			}, clearQueue: function (t) {
				return this.queue(t || "fx", [])
			}, promise: function (t, e) {
				var n, i = 1, o = ht.Deferred(), s = this, r = this.length, a = function () {
					--i || o.resolveWith(s, [s])
				};
				for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;) (n = Dt.get(s[r], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
				return a(), o.promise(e)
			}
		});
		var Lt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			Mt = new RegExp("^(?:([+-])=|)(" + Lt + ")([a-z%]*)$", "i"), jt = ["Top", "Right", "Bottom", "Left"],
			Rt = function (t, e) {
				return "none" === (t = e || t).style.display || "" === t.style.display && ht.contains(t.ownerDocument, t) && "none" === ht.css(t, "display")
			}, Ht = function (t, e, n, i) {
				var o, s, r = {};
				for (s in e) r[s] = t.style[s], t.style[s] = e[s];
				o = n.apply(t, i || []);
				for (s in e) t.style[s] = r[s];
				return o
			}, Ft = {};
		ht.fn.extend({
			show: function () {
				return m(this, !0)
			}, hide: function () {
				return m(this)
			}, toggle: function (t) {
				return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
					Rt(this) ? ht(this).show() : ht(this).hide()
				})
			}
		});
		var Wt = /^(?:checkbox|radio)$/i, zt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, qt = /^$|\/(?:java|ecma)script/i,
			Bt = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				thead: [1, "<table>", "</table>"],
				col: [2, "<table><colgroup>", "</colgroup></table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: [0, "", ""]
			};
		Bt.optgroup = Bt.option, Bt.tbody = Bt.tfoot = Bt.colgroup = Bt.caption = Bt.thead, Bt.th = Bt.td;
		var Ut = /<|&#?\w+;/;
		!function () {
			var t = Z.createDocumentFragment().appendChild(Z.createElement("div")), e = Z.createElement("input");
			e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), ct.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ct.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
		}();
		var Vt = Z.documentElement, Xt = /^key/, Yt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
			Gt = /^([^.]*)(?:\.(.+)|)/;
		ht.event = {
			global: {}, add: function (t, e, n, i, o) {
				var s, r, a, l, c, u, h, d, p, f, m, g = Dt.get(t);
				if (g) for (n.handler && (s = n, n = s.handler, o = s.selector), o && ht.find.matchesSelector(Vt, o), n.guid || (n.guid = ht.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function (e) {
					return void 0 !== ht && ht.event.triggered !== e.type ? ht.event.dispatch.apply(t, arguments) : void 0
				}), c = (e = (e || "").match(St) || [""]).length; c--;) a = Gt.exec(e[c]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p && (h = ht.event.special[p] || {}, p = (o ? h.delegateType : h.bindType) || p, h = ht.event.special[p] || {}, u = ht.extend({
					type: p,
					origType: m,
					data: i,
					handler: n,
					guid: n.guid,
					selector: o,
					needsContext: o && ht.expr.match.needsContext.test(o),
					namespace: f.join(".")
				}, s), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, h.setup && !1 !== h.setup.call(t, i, f, r) || t.addEventListener && t.addEventListener(p, r)), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, u) : d.push(u), ht.event.global[p] = !0)
			}, remove: function (t, e, n, i, o) {
				var s, r, a, l, c, u, h, d, p, f, m, g = Dt.hasData(t) && Dt.get(t);
				if (g && (l = g.events)) {
					for (c = (e = (e || "").match(St) || [""]).length; c--;) if (a = Gt.exec(e[c]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
						for (h = ht.event.special[p] || {}, d = l[p = (i ? h.delegateType : h.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = d.length; s--;) u = d[s], !o && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(s, 1), u.selector && d.delegateCount--, h.remove && h.remove.call(t, u));
						r && !d.length && (h.teardown && !1 !== h.teardown.call(t, f, g.handle) || ht.removeEvent(t, p, g.handle), delete l[p])
					} else for (p in l) ht.event.remove(t, p + e[c], n, i, !0);
					ht.isEmptyObject(l) && Dt.remove(t, "handle events")
				}
			}, dispatch: function (t) {
				var e, n, i, o, s, r, a = ht.event.fix(t), l = new Array(arguments.length),
					c = (Dt.get(this, "events") || {})[a.type] || [], u = ht.event.special[a.type] || {};
				for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
				if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
					for (r = ht.event.handlers.call(this, a, c), e = 0; (o = r[e++]) && !a.isPropagationStopped();) for (a.currentTarget = o.elem, n = 0; (s = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, void 0 !== (i = ((ht.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
					return u.postDispatch && u.postDispatch.call(this, a), a.result
				}
			}, handlers: function (t, e) {
				var n, i, o, s, r = [], a = e.delegateCount, l = t.target;
				if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
					for (i = [], n = 0; n < a; n++) s = e[n], o = s.selector + " ", void 0 === i[o] && (i[o] = s.needsContext ? ht(o, this).index(l) > -1 : ht.find(o, this, null, [l]).length), i[o] && i.push(s);
					i.length && r.push({elem: l, handlers: i})
				}
				return a < e.length && r.push({elem: this, handlers: e.slice(a)}), r
			}, addProp: function (t, e) {
				Object.defineProperty(ht.Event.prototype, t, {
					enumerable: !0,
					configurable: !0,
					get: ht.isFunction(e) ? function () {
						if (this.originalEvent) return e(this.originalEvent)
					} : function () {
						if (this.originalEvent) return this.originalEvent[t]
					},
					set: function (e) {
						Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
					}
				})
			}, fix: function (t) {
				return t[ht.expando] ? t : new ht.Event(t)
			}, special: {
				load: {noBubble: !0}, focus: {
					trigger: function () {
						if (this !== x() && this.focus) return this.focus(), !1
					}, delegateType: "focusin"
				}, blur: {
					trigger: function () {
						if (this === x() && this.blur) return this.blur(), !1
					}, delegateType: "focusout"
				}, click: {
					trigger: function () {
						if ("checkbox" === this.type && this.click && ht.nodeName(this, "input")) return this.click(), !1
					}, _default: function (t) {
						return ht.nodeName(t.target, "a")
					}
				}, beforeunload: {
					postDispatch: function (t) {
						void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
					}
				}
			}
		}, ht.removeEvent = function (t, e, n) {
			t.removeEventListener && t.removeEventListener(e, n)
		}, ht.Event = function (t, e) {
			return this instanceof ht.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? b : w, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && ht.extend(this, e), this.timeStamp = t && t.timeStamp || ht.now(), void(this[ht.expando] = !0)) : new ht.Event(t, e)
		}, ht.Event.prototype = {
			constructor: ht.Event,
			isDefaultPrevented: w,
			isPropagationStopped: w,
			isImmediatePropagationStopped: w,
			isSimulated: !1,
			preventDefault: function () {
				var t = this.originalEvent;
				this.isDefaultPrevented = b, t && !this.isSimulated && t.preventDefault()
			},
			stopPropagation: function () {
				var t = this.originalEvent;
				this.isPropagationStopped = b, t && !this.isSimulated && t.stopPropagation()
			},
			stopImmediatePropagation: function () {
				var t = this.originalEvent;
				this.isImmediatePropagationStopped = b, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
			}
		}, ht.each({
			altKey: !0,
			bubbles: !0,
			cancelable: !0,
			changedTouches: !0,
			ctrlKey: !0,
			detail: !0,
			eventPhase: !0,
			metaKey: !0,
			pageX: !0,
			pageY: !0,
			shiftKey: !0,
			view: !0,
			char: !0,
			charCode: !0,
			key: !0,
			keyCode: !0,
			button: !0,
			buttons: !0,
			clientX: !0,
			clientY: !0,
			offsetX: !0,
			offsetY: !0,
			pointerId: !0,
			pointerType: !0,
			screenX: !0,
			screenY: !0,
			targetTouches: !0,
			toElement: !0,
			touches: !0,
			which: function (t) {
				var e = t.button;
				return null == t.which && Xt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Yt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
			}
		}, ht.event.addProp), ht.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function (t, e) {
			ht.event.special[t] = {
				delegateType: e, bindType: e, handle: function (t) {
					var n, i = this, o = t.relatedTarget, s = t.handleObj;
					return o && (o === i || ht.contains(i, o)) || (t.type = s.origType, n = s.handler.apply(this, arguments), t.type = e), n
				}
			}
		}), ht.fn.extend({
			on: function (t, e, n, i) {
				return _(this, t, e, n, i)
			}, one: function (t, e, n, i) {
				return _(this, t, e, n, i, 1)
			}, off: function (t, e, n) {
				var i, o;
				if (t && t.preventDefault && t.handleObj) return i = t.handleObj, ht(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
				if ("object" == typeof t) {
					for (o in t) this.off(o, e, t[o]);
					return this
				}
				return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = w), this.each(function () {
					ht.event.remove(this, t, n, e)
				})
			}
		});
		var Qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
			Kt = /<script|<style|<link/i, Zt = /checked\s*(?:[^=]|=\s*.checked.)/i, Jt = /^true\/(.*)/,
			te = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
		ht.extend({
			htmlPrefilter: function (t) {
				return t.replace(Qt, "<$1></$2>")
			}, clone: function (t, e, n) {
				var i, o, s, r, a = t.cloneNode(!0), l = ht.contains(t.ownerDocument, t);
				if (!(ct.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ht.isXMLDoc(t))) for (r = g(a), s = g(t), i = 0, o = s.length; i < o; i++) k(s[i], r[i]);
				if (e) if (n) for (s = s || g(t), r = r || g(a), i = 0, o = s.length; i < o; i++) S(s[i], r[i]); else S(t, a);
				return (r = g(a, "script")).length > 0 && v(r, !l && g(t, "script")), a
			}, cleanData: function (t) {
				for (var e, n, i, o = ht.event.special, s = 0; void 0 !== (n = t[s]); s++) if (Nt(n)) {
					if (e = n[Dt.expando]) {
						if (e.events) for (i in e.events) o[i] ? ht.event.remove(n, i) : ht.removeEvent(n, i, e.handle);
						n[Dt.expando] = void 0
					}
					n[Ot.expando] && (n[Ot.expando] = void 0)
				}
			}
		}), ht.fn.extend({
			detach: function (t) {
				return I(this, t, !0)
			}, remove: function (t) {
				return I(this, t)
			}, text: function (t) {
				return It(this, function (t) {
					return void 0 === t ? ht.text(this) : this.empty().each(function () {
						1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
					})
				}, null, t, arguments.length)
			}, append: function () {
				return A(this, arguments, function (t) {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || C(this, t).appendChild(t)
				})
			}, prepend: function () {
				return A(this, arguments, function (t) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var e = C(this, t);
						e.insertBefore(t, e.firstChild)
					}
				})
			}, before: function () {
				return A(this, arguments, function (t) {
					this.parentNode && this.parentNode.insertBefore(t, this)
				})
			}, after: function () {
				return A(this, arguments, function (t) {
					this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
				})
			}, empty: function () {
				for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (ht.cleanData(g(t, !1)), t.textContent = "");
				return this
			}, clone: function (t, e) {
				return t = null != t && t, e = null == e ? t : e, this.map(function () {
					return ht.clone(this, t, e)
				})
			}, html: function (t) {
				return It(this, function (t) {
					var e = this[0] || {}, n = 0, i = this.length;
					if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
					if ("string" == typeof t && !Kt.test(t) && !Bt[(zt.exec(t) || ["", ""])[1].toLowerCase()]) {
						t = ht.htmlPrefilter(t);
						try {
							for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (ht.cleanData(g(e, !1)), e.innerHTML = t);
							e = 0
						} catch (t) {
						}
					}
					e && this.empty().append(t)
				}, null, t, arguments.length)
			}, replaceWith: function () {
				var t = [];
				return A(this, arguments, function (e) {
					var n = this.parentNode;
					ht.inArray(this, t) < 0 && (ht.cleanData(g(this)), n && n.replaceChild(e, this))
				}, t)
			}
		}), ht.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function (t, e) {
			ht.fn[t] = function (t) {
				for (var n, i = [], o = ht(t), s = o.length - 1, r = 0; r <= s; r++) n = r === s ? this : this.clone(!0), ht(o[r])[e](n), nt.apply(i, n.get());
				return this.pushStack(i)
			}
		});
		var ee = /^margin/, ne = new RegExp("^(" + Lt + ")(?!px)[a-z%]+$", "i"), ie = function (e) {
			var n = e.ownerDocument.defaultView;
			return n && n.opener || (n = t), n.getComputedStyle(e)
		};
		!function () {
			function e() {
				if (a) {
					a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Vt.appendChild(r);
					var e = t.getComputedStyle(a);
					n = "1%" !== e.top, s = "2px" === e.marginLeft, i = "4px" === e.width, a.style.marginRight = "50%", o = "4px" === e.marginRight, Vt.removeChild(r), a = null
				}
			}

			var n, i, o, s, r = Z.createElement("div"), a = Z.createElement("div");
			a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ct.clearCloneStyle = "content-box" === a.style.backgroundClip, r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", r.appendChild(a), ht.extend(ct, {
				pixelPosition: function () {
					return e(), n
				}, boxSizingReliable: function () {
					return e(), i
				}, pixelMarginRight: function () {
					return e(), o
				}, reliableMarginLeft: function () {
					return e(), s
				}
			}))
		}();
		var oe = /^(none|table(?!-c[ea]).+)/, se = {position: "absolute", visibility: "hidden", display: "block"},
			re = {letterSpacing: "0", fontWeight: "400"}, ae = ["Webkit", "Moz", "ms"],
			le = Z.createElement("div").style;
		ht.extend({
			cssHooks: {
				opacity: {
					get: function (t, e) {
						if (e) {
							var n = N(t, "opacity");
							return "" === n ? "1" : n
						}
					}
				}
			},
			cssNumber: {
				animationIterationCount: !0,
				columnCount: !0,
				fillOpacity: !0,
				flexGrow: !0,
				flexShrink: !0,
				fontWeight: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps: {float: "cssFloat"},
			style: function (t, e, n, i) {
				if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
					var o, s, r, a = ht.camelCase(e), l = t.style;
					return e = ht.cssProps[a] || (ht.cssProps[a] = O(a) || a), r = ht.cssHooks[e] || ht.cssHooks[a], void 0 === n ? r && "get" in r && void 0 !== (o = r.get(t, !1, i)) ? o : l[e] : ("string" === (s = typeof n) && (o = Mt.exec(n)) && o[1] && (n = p(t, e, o), s = "number"), void(null != n && n === n && ("number" === s && (n += o && o[3] || (ht.cssNumber[a] ? "" : "px")), ct.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), r && "set" in r && void 0 === (n = r.set(t, n, i)) || (l[e] = n))))
				}
			},
			css: function (t, e, n, i) {
				var o, s, r, a = ht.camelCase(e);
				return e = ht.cssProps[a] || (ht.cssProps[a] = O(a) || a), (r = ht.cssHooks[e] || ht.cssHooks[a]) && "get" in r && (o = r.get(t, !0, n)), void 0 === o && (o = N(t, e, i)), "normal" === o && e in re && (o = re[e]), "" === n || n ? (s = parseFloat(o), !0 === n || isFinite(s) ? s || 0 : o) : o
			}
		}), ht.each(["height", "width"], function (t, e) {
			ht.cssHooks[e] = {
				get: function (t, n, i) {
					if (n) return !oe.test(ht.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? L(t, e, i) : Ht(t, se, function () {
						return L(t, e, i)
					})
				}, set: function (t, n, i) {
					var o, s = i && ie(t), r = i && P(t, e, i, "border-box" === ht.css(t, "boxSizing", !1, s), s);
					return r && (o = Mt.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = ht.css(t, e)), $(0, n, r)
				}
			}
		}), ht.cssHooks.marginLeft = D(ct.reliableMarginLeft, function (t, e) {
			if (e) return (parseFloat(N(t, "marginLeft")) || t.getBoundingClientRect().left - Ht(t, {marginLeft: 0}, function () {
				return t.getBoundingClientRect().left
			})) + "px"
		}), ht.each({margin: "", padding: "", border: "Width"}, function (t, e) {
			ht.cssHooks[t + e] = {
				expand: function (n) {
					for (var i = 0, o = {}, s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[t + jt[i] + e] = s[i] || s[i - 2] || s[0];
					return o
				}
			}, ee.test(t) || (ht.cssHooks[t + e].set = $)
		}), ht.fn.extend({
			css: function (t, e) {
				return It(this, function (t, e, n) {
					var i, o, s = {}, r = 0;
					if (ht.isArray(e)) {
						for (i = ie(t), o = e.length; r < o; r++) s[e[r]] = ht.css(t, e[r], !1, i);
						return s
					}
					return void 0 !== n ? ht.style(t, e, n) : ht.css(t, e)
				}, t, e, arguments.length > 1)
			}
		}), ht.Tween = M, M.prototype = {
			constructor: M, init: function (t, e, n, i, o, s) {
				this.elem = t, this.prop = n, this.easing = o || ht.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = s || (ht.cssNumber[n] ? "" : "px")
			}, cur: function () {
				var t = M.propHooks[this.prop];
				return t && t.get ? t.get(this) : M.propHooks._default.get(this)
			}, run: function (t) {
				var e, n = M.propHooks[this.prop];
				return this.options.duration ? this.pos = e = ht.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this
			}
		}, M.prototype.init.prototype = M.prototype, M.propHooks = {
			_default: {
				get: function (t) {
					var e;
					return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ht.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
				}, set: function (t) {
					ht.fx.step[t.prop] ? ht.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ht.cssProps[t.prop]] && !ht.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ht.style(t.elem, t.prop, t.now + t.unit)
				}
			}
		}, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
			set: function (t) {
				t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
			}
		}, ht.easing = {
			linear: function (t) {
				return t
			}, swing: function (t) {
				return .5 - Math.cos(t * Math.PI) / 2
			}, _default: "swing"
		}, ht.fx = M.prototype.init, ht.fx.step = {};
		var ce, ue, he = /^(?:toggle|show|hide)$/, de = /queueHooks$/;
		ht.Animation = ht.extend(z, {
			tweeners: {
				"*": [function (t, e) {
					var n = this.createTween(t, e);
					return p(n.elem, t, Mt.exec(e), n), n
				}]
			}, tweener: function (t, e) {
				ht.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(St);
				for (var n, i = 0, o = t.length; i < o; i++) n = t[i], z.tweeners[n] = z.tweeners[n] || [], z.tweeners[n].unshift(e)
			}, prefilters: [function (t, e, n) {
				var i, o, s, r, a, l, c, u, h = "width" in e || "height" in e, d = this, p = {}, f = t.style,
					g = t.nodeType && Rt(t), v = Dt.get(t, "fxshow");
				n.queue || (null == (r = ht._queueHooks(t, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function () {
					r.unqueued || a()
				}), r.unqueued++, d.always(function () {
					d.always(function () {
						r.unqueued--, ht.queue(t, "fx").length || r.empty.fire()
					})
				}));
				for (i in e) if (o = e[i], he.test(o)) {
					if (delete e[i], s = s || "toggle" === o, o === (g ? "hide" : "show")) {
						if ("show" !== o || !v || void 0 === v[i]) continue;
						g = !0
					}
					p[i] = v && v[i] || ht.style(t, i)
				}
				if ((l = !ht.isEmptyObject(e)) || !ht.isEmptyObject(p)) {
					h && 1 === t.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = v && v.display) && (c = Dt.get(t, "display")), "none" === (u = ht.css(t, "display")) && (c ? u = c : (m([t], !0), c = t.style.display || c, u = ht.css(t, "display"), m([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === ht.css(t, "float") && (l || (d.done(function () {
						f.display = c
					}), null == c && (u = f.display, c = "none" === u ? "" : u)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", d.always(function () {
						f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
					})), l = !1;
					for (i in p) l || (v ? "hidden" in v && (g = v.hidden) : v = Dt.access(t, "fxshow", {display: c}), s && (v.hidden = !g), g && m([t], !0), d.done(function () {
						g || m([t]), Dt.remove(t, "fxshow");
						for (i in p) ht.style(t, i, p[i])
					})), l = F(g ? v[i] : 0, i, d), i in v || (v[i] = l.start, g && (l.end = l.start, l.start = 0))
				}
			}], prefilter: function (t, e) {
				e ? z.prefilters.unshift(t) : z.prefilters.push(t)
			}
		}), ht.speed = function (t, e, n) {
			var i = t && "object" == typeof t ? ht.extend({}, t) : {
				complete: n || !n && e || ht.isFunction(t) && t,
				duration: t,
				easing: n && e || e && !ht.isFunction(e) && e
			};
			return ht.fx.off || Z.hidden ? i.duration = 0 : i.duration = "number" == typeof i.duration ? i.duration : i.duration in ht.fx.speeds ? ht.fx.speeds[i.duration] : ht.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
				ht.isFunction(i.old) && i.old.call(this), i.queue && ht.dequeue(this, i.queue)
			}, i
		}, ht.fn.extend({
			fadeTo: function (t, e, n, i) {
				return this.filter(Rt).css("opacity", 0).show().end().animate({opacity: e}, t, n, i)
			}, animate: function (t, e, n, i) {
				var o = ht.isEmptyObject(t), s = ht.speed(e, n, i), r = function () {
					var e = z(this, ht.extend({}, t), s);
					(o || Dt.get(this, "finish")) && e.stop(!0)
				};
				return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
			}, stop: function (t, e, n) {
				var i = function (t) {
					var e = t.stop;
					delete t.stop, e(n)
				};
				return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
					var e = !0, o = null != t && t + "queueHooks", s = ht.timers, r = Dt.get(this);
					if (o) r[o] && r[o].stop && i(r[o]); else for (o in r) r[o] && r[o].stop && de.test(o) && i(r[o]);
					for (o = s.length; o--;) s[o].elem !== this || null != t && s[o].queue !== t || (s[o].anim.stop(n), e = !1, s.splice(o, 1));
					!e && n || ht.dequeue(this, t)
				})
			}, finish: function (t) {
				return !1 !== t && (t = t || "fx"), this.each(function () {
					var e, n = Dt.get(this), i = n[t + "queue"], o = n[t + "queueHooks"], s = ht.timers,
						r = i ? i.length : 0;
					for (n.finish = !0, ht.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
					for (e = 0; e < r; e++) i[e] && i[e].finish && i[e].finish.call(this);
					delete n.finish
				})
			}
		}), ht.each(["toggle", "show", "hide"], function (t, e) {
			var n = ht.fn[e];
			ht.fn[e] = function (t, i, o) {
				return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(H(e, !0), t, i, o)
			}
		}), ht.each({
			slideDown: H("show"),
			slideUp: H("hide"),
			slideToggle: H("toggle"),
			fadeIn: {opacity: "show"},
			fadeOut: {opacity: "hide"},
			fadeToggle: {opacity: "toggle"}
		}, function (t, e) {
			ht.fn[t] = function (t, n, i) {
				return this.animate(e, t, n, i)
			}
		}), ht.timers = [], ht.fx.tick = function () {
			var t, e = 0, n = ht.timers;
			for (ce = ht.now(); e < n.length; e++) (t = n[e])() || n[e] !== t || n.splice(e--, 1);
			n.length || ht.fx.stop(), ce = void 0
		}, ht.fx.timer = function (t) {
			ht.timers.push(t), t() ? ht.fx.start() : ht.timers.pop()
		}, ht.fx.interval = 13, ht.fx.start = function () {
			ue || (ue = t.requestAnimationFrame ? t.requestAnimationFrame(j) : t.setInterval(ht.fx.tick, ht.fx.interval))
		}, ht.fx.stop = function () {
			t.cancelAnimationFrame ? t.cancelAnimationFrame(ue) : t.clearInterval(ue), ue = null
		}, ht.fx.speeds = {slow: 600, fast: 200, _default: 400}, ht.fn.delay = function (e, n) {
			return e = ht.fx ? ht.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function (n, i) {
				var o = t.setTimeout(n, e);
				i.stop = function () {
					t.clearTimeout(o)
				}
			})
		}, function () {
			var t = Z.createElement("input"), e = Z.createElement("select").appendChild(Z.createElement("option"));
			t.type = "checkbox", ct.checkOn = "" !== t.value, ct.optSelected = e.selected, (t = Z.createElement("input")).value = "t", t.type = "radio", ct.radioValue = "t" === t.value
		}();
		var pe, fe = ht.expr.attrHandle;
		ht.fn.extend({
			attr: function (t, e) {
				return It(this, ht.attr, t, e, arguments.length > 1)
			}, removeAttr: function (t) {
				return this.each(function () {
					ht.removeAttr(this, t)
				})
			}
		}), ht.extend({
			attr: function (t, e, n) {
				var i, o, s = t.nodeType;
				if (3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? ht.prop(t, e, n) : (1 === s && ht.isXMLDoc(t) || (o = ht.attrHooks[e.toLowerCase()] || (ht.expr.match.bool.test(e) ? pe : void 0)), void 0 !== n ? null === n ? void ht.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : null == (i = ht.find.attr(t, e)) ? void 0 : i)
			}, attrHooks: {
				type: {
					set: function (t, e) {
						if (!ct.radioValue && "radio" === e && ht.nodeName(t, "input")) {
							var n = t.value;
							return t.setAttribute("type", e), n && (t.value = n), e
						}
					}
				}
			}, removeAttr: function (t, e) {
				var n, i = 0, o = e && e.match(St);
				if (o && 1 === t.nodeType) for (; n = o[i++];) t.removeAttribute(n)
			}
		}), pe = {
			set: function (t, e, n) {
				return !1 === e ? ht.removeAttr(t, n) : t.setAttribute(n, n), n
			}
		}, ht.each(ht.expr.match.bool.source.match(/\w+/g), function (t, e) {
			var n = fe[e] || ht.find.attr;
			fe[e] = function (t, e, i) {
				var o, s, r = e.toLowerCase();
				return i || (s = fe[r], fe[r] = o, o = null != n(t, e, i) ? r : null, fe[r] = s), o
			}
		});
		var me = /^(?:input|select|textarea|button)$/i, ge = /^(?:a|area)$/i;
		ht.fn.extend({
			prop: function (t, e) {
				return It(this, ht.prop, t, e, arguments.length > 1)
			}, removeProp: function (t) {
				return this.each(function () {
					delete this[ht.propFix[t] || t]
				})
			}
		}), ht.extend({
			prop: function (t, e, n) {
				var i, o, s = t.nodeType;
				if (3 !== s && 8 !== s && 2 !== s) return 1 === s && ht.isXMLDoc(t) || (e = ht.propFix[e] || e, o = ht.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
			}, propHooks: {
				tabIndex: {
					get: function (t) {
						var e = ht.find.attr(t, "tabindex");
						return e ? parseInt(e, 10) : me.test(t.nodeName) || ge.test(t.nodeName) && t.href ? 0 : -1
					}
				}
			}, propFix: {for: "htmlFor", class: "className"}
		}), ct.optSelected || (ht.propHooks.selected = {
			get: function (t) {
				var e = t.parentNode;
				return e && e.parentNode && e.parentNode.selectedIndex, null
			}, set: function (t) {
				var e = t.parentNode;
				e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
			}
		}), ht.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
			ht.propFix[this.toLowerCase()] = this
		});
		var ve = /[\t\r\n\f]/g;
		ht.fn.extend({
			addClass: function (t) {
				var e, n, i, o, s, r, a, l = 0;
				if (ht.isFunction(t)) return this.each(function (e) {
					ht(this).addClass(t.call(this, e, q(this)))
				});
				if ("string" == typeof t && t) for (e = t.match(St) || []; n = this[l++];) if (o = q(n), i = 1 === n.nodeType && (" " + o + " ").replace(ve, " ")) {
					for (r = 0; s = e[r++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
					o !== (a = ht.trim(i)) && n.setAttribute("class", a)
				}
				return this
			}, removeClass: function (t) {
				var e, n, i, o, s, r, a, l = 0;
				if (ht.isFunction(t)) return this.each(function (e) {
					ht(this).removeClass(t.call(this, e, q(this)))
				});
				if (!arguments.length) return this.attr("class", "");
				if ("string" == typeof t && t) for (e = t.match(St) || []; n = this[l++];) if (o = q(n), i = 1 === n.nodeType && (" " + o + " ").replace(ve, " ")) {
					for (r = 0; s = e[r++];) for (; i.indexOf(" " + s + " ") > -1;) i = i.replace(" " + s + " ", " ");
					o !== (a = ht.trim(i)) && n.setAttribute("class", a)
				}
				return this
			}, toggleClass: function (t, e) {
				var n = typeof t;
				return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ht.isFunction(t) ? this.each(function (n) {
					ht(this).toggleClass(t.call(this, n, q(this), e), e)
				}) : this.each(function () {
					var e, i, o, s;
					if ("string" === n) for (i = 0, o = ht(this), s = t.match(St) || []; e = s[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e); else void 0 !== t && "boolean" !== n || ((e = q(this)) && Dt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Dt.get(this, "__className__") || ""))
				})
			}, hasClass: function (t) {
				var e, n, i = 0;
				for (e = " " + t + " "; n = this[i++];) if (1 === n.nodeType && (" " + q(n) + " ").replace(ve, " ").indexOf(e) > -1) return !0;
				return !1
			}
		});
		var ye = /\r/g, be = /[\x20\t\r\n\f]+/g;
		ht.fn.extend({
			val: function (t) {
				var e, n, i, o = this[0];
				return arguments.length ? (i = ht.isFunction(t), this.each(function (n) {
					var o;
					1 === this.nodeType && (null == (o = i ? t.call(this, n, ht(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : ht.isArray(o) && (o = ht.map(o, function (t) {
						return null == t ? "" : t + ""
					})), (e = ht.valHooks[this.type] || ht.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
				})) : o ? (e = ht.valHooks[o.type] || ht.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(ye, "") : null == n ? "" : n : void 0
			}
		}), ht.extend({
			valHooks: {
				option: {
					get: function (t) {
						var e = ht.find.attr(t, "value");
						return null != e ? e : ht.trim(ht.text(t)).replace(be, " ")
					}
				}, select: {
					get: function (t) {
						for (var e, n, i = t.options, o = t.selectedIndex, s = "select-one" === t.type, r = s ? null : [], a = s ? o + 1 : i.length, l = o < 0 ? a : s ? o : 0; l < a; l++) if (((n = i[l]).selected || l === o) && !n.disabled && (!n.parentNode.disabled || !ht.nodeName(n.parentNode, "optgroup"))) {
							if (e = ht(n).val(), s) return e;
							r.push(e)
						}
						return r
					}, set: function (t, e) {
						for (var n, i, o = t.options, s = ht.makeArray(e), r = o.length; r--;) i = o[r], (i.selected = ht.inArray(ht.valHooks.option.get(i), s) > -1) && (n = !0);
						return n || (t.selectedIndex = -1), s
					}
				}
			}
		}), ht.each(["radio", "checkbox"], function () {
			ht.valHooks[this] = {
				set: function (t, e) {
					if (ht.isArray(e)) return t.checked = ht.inArray(ht(t).val(), e) > -1
				}
			}, ct.checkOn || (ht.valHooks[this].get = function (t) {
				return null === t.getAttribute("value") ? "on" : t.value
			})
		});
		var we = /^(?:focusinfocus|focusoutblur)$/;
		ht.extend(ht.event, {
			trigger: function (e, n, i, o) {
				var s, r, a, l, c, u, h, d = [i || Z], p = rt.call(e, "type") ? e.type : e,
					f = rt.call(e, "namespace") ? e.namespace.split(".") : [];
				if (r = a = i = i || Z, 3 !== i.nodeType && 8 !== i.nodeType && !we.test(p + ht.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), p = f.shift(), f.sort()), c = p.indexOf(":") < 0 && "on" + p, e = e[ht.expando] ? e : new ht.Event(p, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : ht.makeArray(n, [e]), h = ht.event.special[p] || {}, o || !h.trigger || !1 !== h.trigger.apply(i, n))) {
					if (!o && !h.noBubble && !ht.isWindow(i)) {
						for (l = h.delegateType || p, we.test(l + p) || (r = r.parentNode); r; r = r.parentNode) d.push(r), a = r;
						a === (i.ownerDocument || Z) && d.push(a.defaultView || a.parentWindow || t)
					}
					for (s = 0; (r = d[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? l : h.bindType || p, (u = (Dt.get(r, "events") || {})[e.type] && Dt.get(r, "handle")) && u.apply(r, n), (u = c && r[c]) && u.apply && Nt(r) && (e.result = u.apply(r, n), !1 === e.result && e.preventDefault());
					return e.type = p, o || e.isDefaultPrevented() || h._default && !1 !== h._default.apply(d.pop(), n) || !Nt(i) || c && ht.isFunction(i[p]) && !ht.isWindow(i) && ((a = i[c]) && (i[c] = null), ht.event.triggered = p, i[p](), ht.event.triggered = void 0, a && (i[c] = a)), e.result
				}
			}, simulate: function (t, e, n) {
				var i = ht.extend(new ht.Event, n, {type: t, isSimulated: !0});
				ht.event.trigger(i, null, e)
			}
		}), ht.fn.extend({
			trigger: function (t, e) {
				return this.each(function () {
					ht.event.trigger(t, e, this)
				})
			}, triggerHandler: function (t, e) {
				var n = this[0];
				if (n) return ht.event.trigger(t, e, n, !0)
			}
		}), ht.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
			ht.fn[e] = function (t, n) {
				return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
			}
		}), ht.fn.extend({
			hover: function (t, e) {
				return this.mouseenter(t).mouseleave(e || t)
			}
		}), ct.focusin = "onfocusin" in t, ct.focusin || ht.each({focus: "focusin", blur: "focusout"}, function (t, e) {
			var n = function (t) {
				ht.event.simulate(e, t.target, ht.event.fix(t))
			};
			ht.event.special[e] = {
				setup: function () {
					var i = this.ownerDocument || this, o = Dt.access(i, e);
					o || i.addEventListener(t, n, !0), Dt.access(i, e, (o || 0) + 1)
				}, teardown: function () {
					var i = this.ownerDocument || this, o = Dt.access(i, e) - 1;
					o ? Dt.access(i, e, o) : (i.removeEventListener(t, n, !0), Dt.remove(i, e))
				}
			}
		});
		var xe = t.location, _e = ht.now(), Ce = /\?/;
		ht.parseXML = function (e) {
			var n;
			if (!e || "string" != typeof e) return null;
			try {
				n = (new t.DOMParser).parseFromString(e, "text/xml")
			} catch (t) {
				n = void 0
			}
			return n && !n.getElementsByTagName("parsererror").length || ht.error("Invalid XML: " + e), n
		};
		var Te = /\[\]$/, Ee = /\r?\n/g, Se = /^(?:submit|button|image|reset|file)$/i,
			ke = /^(?:input|select|textarea|keygen)/i;
		ht.param = function (t, e) {
			var n, i = [], o = function (t, e) {
				var n = ht.isFunction(e) ? e() : e;
				i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
			};
			if (ht.isArray(t) || t.jquery && !ht.isPlainObject(t)) ht.each(t, function () {
				o(this.name, this.value)
			}); else for (n in t) B(n, t[n], e, o);
			return i.join("&")
		}, ht.fn.extend({
			serialize: function () {
				return ht.param(this.serializeArray())
			}, serializeArray: function () {
				return this.map(function () {
					var t = ht.prop(this, "elements");
					return t ? ht.makeArray(t) : this
				}).filter(function () {
					var t = this.type;
					return this.name && !ht(this).is(":disabled") && ke.test(this.nodeName) && !Se.test(t) && (this.checked || !Wt.test(t))
				}).map(function (t, e) {
					var n = ht(this).val();
					return null == n ? null : ht.isArray(n) ? ht.map(n, function (t) {
						return {name: e.name, value: t.replace(Ee, "\r\n")}
					}) : {name: e.name, value: n.replace(Ee, "\r\n")}
				}).get()
			}
		});
		var Ae = /%20/g, Ie = /#.*$/, Ne = /([?&])_=[^&]*/, De = /^(.*?):[ \t]*([^\r\n]*)$/gm,
			Oe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, $e = /^(?:GET|HEAD)$/, Pe = /^\/\//,
			Le = {}, Me = {}, je = "*/".concat("*"), Re = Z.createElement("a");
		Re.href = xe.href, ht.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: xe.href,
				type: "GET",
				isLocal: Oe.test(xe.protocol),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": je,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
				contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
				responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
				converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": ht.parseXML},
				flatOptions: {url: !0, context: !0}
			},
			ajaxSetup: function (t, e) {
				return e ? X(X(t, ht.ajaxSettings), e) : X(ht.ajaxSettings, t)
			},
			ajaxPrefilter: U(Le),
			ajaxTransport: U(Me),
			ajax: function (e, n) {
				function i(e, n, i, a) {
					var c, d, p, w, x, _ = n;
					u || (u = !0, l && t.clearTimeout(l), o = void 0, r = a || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, i && (w = Y(f, C, i)), w = G(f, w, C, c), c ? (f.ifModified && ((x = C.getResponseHeader("Last-Modified")) && (ht.lastModified[s] = x), (x = C.getResponseHeader("etag")) && (ht.etag[s] = x)), 204 === e || "HEAD" === f.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = w.state, d = w.data, p = w.error, c = !p)) : (p = _, !e && _ || (_ = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (n || _) + "", c ? v.resolveWith(m, [d, _, C]) : v.rejectWith(m, [C, _, p]), C.statusCode(b), b = void 0, h && g.trigger(c ? "ajaxSuccess" : "ajaxError", [C, f, c ? d : p]), y.fireWith(m, [C, _]), h && (g.trigger("ajaxComplete", [C, f]), --ht.active || ht.event.trigger("ajaxStop")))
				}

				"object" == typeof e && (n = e, e = void 0), n = n || {};
				var o, s, r, a, l, c, u, h, d, p, f = ht.ajaxSetup({}, n), m = f.context || f,
					g = f.context && (m.nodeType || m.jquery) ? ht(m) : ht.event, v = ht.Deferred(),
					y = ht.Callbacks("once memory"), b = f.statusCode || {}, w = {}, x = {}, _ = "canceled", C = {
						readyState: 0, getResponseHeader: function (t) {
							var e;
							if (u) {
								if (!a) for (a = {}; e = De.exec(r);) a[e[1].toLowerCase()] = e[2];
								e = a[t.toLowerCase()]
							}
							return null == e ? null : e
						}, getAllResponseHeaders: function () {
							return u ? r : null
						}, setRequestHeader: function (t, e) {
							return null == u && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, w[t] = e), this
						}, overrideMimeType: function (t) {
							return null == u && (f.mimeType = t), this
						}, statusCode: function (t) {
							var e;
							if (t) if (u) C.always(t[C.status]); else for (e in t) b[e] = [b[e], t[e]];
							return this
						}, abort: function (t) {
							var e = t || _;
							return o && o.abort(e), i(0, e), this
						}
					};
				if (v.promise(C), f.url = ((e || f.url || xe.href) + "").replace(Pe, xe.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(St) || [""], null == f.crossDomain) {
					c = Z.createElement("a");
					try {
						c.href = f.url, c.href = c.href, f.crossDomain = Re.protocol + "//" + Re.host != c.protocol + "//" + c.host
					} catch (t) {
						f.crossDomain = !0
					}
				}
				if (f.data && f.processData && "string" != typeof f.data && (f.data = ht.param(f.data, f.traditional)), V(Le, f, n, C), u) return C;
				(h = ht.event && f.global) && 0 == ht.active++ && ht.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !$e.test(f.type), s = f.url.replace(Ie, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Ae, "+")) : (p = f.url.slice(s.length), f.data && (s += (Ce.test(s) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (s = s.replace(Ne, ""), p = (Ce.test(s) ? "&" : "?") + "_=" + _e++ + p), f.url = s + p), f.ifModified && (ht.lastModified[s] && C.setRequestHeader("If-Modified-Since", ht.lastModified[s]), ht.etag[s] && C.setRequestHeader("If-None-Match", ht.etag[s])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + je + "; q=0.01" : "") : f.accepts["*"]);
				for (d in f.headers) C.setRequestHeader(d, f.headers[d]);
				if (f.beforeSend && (!1 === f.beforeSend.call(m, C, f) || u)) return C.abort();
				if (_ = "abort", y.add(f.complete), C.done(f.success), C.fail(f.error), o = V(Me, f, n, C)) {
					if (C.readyState = 1, h && g.trigger("ajaxSend", [C, f]), u) return C;
					f.async && f.timeout > 0 && (l = t.setTimeout(function () {
						C.abort("timeout")
					}, f.timeout));
					try {
						u = !1, o.send(w, i)
					} catch (t) {
						if (u) throw t;
						i(-1, t)
					}
				} else i(-1, "No Transport");
				return C
			},
			getJSON: function (t, e, n) {
				return ht.get(t, e, n, "json")
			},
			getScript: function (t, e) {
				return ht.get(t, void 0, e, "script")
			}
		}), ht.each(["get", "post"], function (t, e) {
			ht[e] = function (t, n, i, o) {
				return ht.isFunction(n) && (o = o || i, i = n, n = void 0), ht.ajax(ht.extend({
					url: t,
					type: e,
					dataType: o,
					data: n,
					success: i
				}, ht.isPlainObject(t) && t))
			}
		}), ht._evalUrl = function (t) {
			return ht.ajax({url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
		}, ht.fn.extend({
			wrapAll: function (t) {
				var e;
				return this[0] && (ht.isFunction(t) && (t = t.call(this[0])), e = ht(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
					for (var t = this; t.firstElementChild;) t = t.firstElementChild;
					return t
				}).append(this)), this
			}, wrapInner: function (t) {
				return ht.isFunction(t) ? this.each(function (e) {
					ht(this).wrapInner(t.call(this, e))
				}) : this.each(function () {
					var e = ht(this), n = e.contents();
					n.length ? n.wrapAll(t) : e.append(t)
				})
			}, wrap: function (t) {
				var e = ht.isFunction(t);
				return this.each(function (n) {
					ht(this).wrapAll(e ? t.call(this, n) : t)
				})
			}, unwrap: function (t) {
				return this.parent(t).not("body").each(function () {
					ht(this).replaceWith(this.childNodes)
				}), this
			}
		}), ht.expr.pseudos.hidden = function (t) {
			return !ht.expr.pseudos.visible(t)
		}, ht.expr.pseudos.visible = function (t) {
			return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
		}, ht.ajaxSettings.xhr = function () {
			try {
				return new t.XMLHttpRequest
			} catch (t) {
			}
		};
		var He = {0: 200, 1223: 204}, Fe = ht.ajaxSettings.xhr();
		ct.cors = !!Fe && "withCredentials" in Fe, ct.ajax = Fe = !!Fe, ht.ajaxTransport(function (e) {
			var n, i;
			if (ct.cors || Fe && !e.crossDomain) return {
				send: function (o, s) {
					var r, a = e.xhr();
					if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (r in e.xhrFields) a[r] = e.xhrFields[r];
					e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
					for (r in o) a.setRequestHeader(r, o[r]);
					n = function (t) {
						return function () {
							n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(He[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
						}
					}, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
						4 === a.readyState && t.setTimeout(function () {
							n && i()
						})
					}, n = n("abort");
					try {
						a.send(e.hasContent && e.data || null)
					} catch (t) {
						if (n) throw t
					}
				}, abort: function () {
					n && n()
				}
			}
		}), ht.ajaxPrefilter(function (t) {
			t.crossDomain && (t.contents.script = !1)
		}), ht.ajaxSetup({
			accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
			contents: {script: /\b(?:java|ecma)script\b/},
			converters: {
				"text script": function (t) {
					return ht.globalEval(t), t
				}
			}
		}), ht.ajaxPrefilter("script", function (t) {
			void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
		}), ht.ajaxTransport("script", function (t) {
			if (t.crossDomain) {
				var e, n;
				return {
					send: function (i, o) {
						e = ht("<script>").prop({
							charset: t.scriptCharset,
							src: t.url
						}).on("load error", n = function (t) {
							e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type)
						}), Z.head.appendChild(e[0])
					}, abort: function () {
						n && n()
					}
				}
			}
		});
		var We = [], ze = /(=)\?(?=&|$)|\?\?/;
		ht.ajaxSetup({
			jsonp: "callback", jsonpCallback: function () {
				var t = We.pop() || ht.expando + "_" + _e++;
				return this[t] = !0, t
			}
		}), ht.ajaxPrefilter("json jsonp", function (e, n, i) {
			var o, s, r,
				a = !1 !== e.jsonp && (ze.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && ze.test(e.data) && "data");
			if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = ht.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(ze, "$1" + o) : !1 !== e.jsonp && (e.url += (Ce.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
				return r || ht.error(o + " was not called"), r[0]
			}, e.dataTypes[0] = "json", s = t[o], t[o] = function () {
				r = arguments
			}, i.always(function () {
				void 0 === s ? ht(t).removeProp(o) : t[o] = s, e[o] && (e.jsonpCallback = n.jsonpCallback, We.push(o)), r && ht.isFunction(s) && s(r[0]), r = s = void 0
			}), "script"
		}), ct.createHTMLDocument = function () {
			var t = Z.implementation.createHTMLDocument("").body;
			return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
		}(), ht.parseHTML = function (t, e, n) {
			if ("string" != typeof t) return [];
			"boolean" == typeof e && (n = e, e = !1);
			var i, o, s;
			return e || (ct.createHTMLDocument ? (e = Z.implementation.createHTMLDocument(""), i = e.createElement("base"), i.href = Z.location.href, e.head.appendChild(i)) : e = Z), o = wt.exec(t), s = !n && [], o ? [e.createElement(o[1])] : (o = y([t], e, s), s && s.length && ht(s).remove(), ht.merge([], o.childNodes))
		}, ht.fn.load = function (t, e, n) {
			var i, o, s, r = this, a = t.indexOf(" ");
			return a > -1 && (i = ht.trim(t.slice(a)), t = t.slice(0, a)), ht.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), r.length > 0 && ht.ajax({
				url: t,
				type: o || "GET",
				dataType: "html",
				data: e
			}).done(function (t) {
				s = arguments, r.html(i ? ht("<div>").append(ht.parseHTML(t)).find(i) : t)
			}).always(n && function (t, e) {
				r.each(function () {
					n.apply(this, s || [t.responseText, e, t])
				})
			}), this
		}, ht.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
			ht.fn[e] = function (t) {
				return this.on(e, t)
			}
		}), ht.expr.pseudos.animated = function (t) {
			return ht.grep(ht.timers, function (e) {
				return t === e.elem
			}).length
		}, ht.offset = {
			setOffset: function (t, e, n) {
				var i, o, s, r, a, l, c = ht.css(t, "position"), u = ht(t), h = {};
				"static" === c && (t.style.position = "relative"), a = u.offset(), s = ht.css(t, "top"), l = ht.css(t, "left"), ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1 ? (i = u.position(), r = i.top, o = i.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), ht.isFunction(e) && (e = e.call(t, n, ht.extend({}, a))), null != e.top && (h.top = e.top - a.top + r), null != e.left && (h.left = e.left - a.left + o), "using" in e ? e.using.call(t, h) : u.css(h)
			}
		}, ht.fn.extend({
			offset: function (t) {
				if (arguments.length) return void 0 === t ? this : this.each(function (e) {
					ht.offset.setOffset(this, t, e)
				});
				var e, n, i, o, s = this[0];
				return s ? s.getClientRects().length ? (i = s.getBoundingClientRect()).width || i.height ? (o = s.ownerDocument, n = Q(o), e = o.documentElement, {
					top: i.top + n.pageYOffset - e.clientTop,
					left: i.left + n.pageXOffset - e.clientLeft
				}) : i : {top: 0, left: 0} : void 0
			}, position: function () {
				if (this[0]) {
					var t, e, n = this[0], i = {top: 0, left: 0};
					return "fixed" === ht.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ht.nodeName(t[0], "html") || (i = t.offset()), i = {
						top: i.top + ht.css(t[0], "borderTopWidth", !0),
						left: i.left + ht.css(t[0], "borderLeftWidth", !0)
					}), {
						top: e.top - i.top - ht.css(n, "marginTop", !0),
						left: e.left - i.left - ht.css(n, "marginLeft", !0)
					}
				}
			}, offsetParent: function () {
				return this.map(function () {
					for (var t = this.offsetParent; t && "static" === ht.css(t, "position");) t = t.offsetParent;
					return t || Vt
				})
			}
		}), ht.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
			var n = "pageYOffset" === e;
			ht.fn[t] = function (i) {
				return It(this, function (t, i, o) {
					var s = Q(t);
					return void 0 === o ? s ? s[e] : t[i] : void(s ? s.scrollTo(n ? s.pageXOffset : o, n ? o : s.pageYOffset) : t[i] = o)
				}, t, i, arguments.length)
			}
		}), ht.each(["top", "left"], function (t, e) {
			ht.cssHooks[e] = D(ct.pixelPosition, function (t, n) {
				if (n) return n = N(t, e), ne.test(n) ? ht(t).position()[e] + "px" : n
			})
		}), ht.each({Height: "height", Width: "width"}, function (t, e) {
			ht.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, i) {
				ht.fn[i] = function (o, s) {
					var r = arguments.length && (n || "boolean" != typeof o),
						a = n || (!0 === o || !0 === s ? "margin" : "border");
					return It(this, function (e, n, o) {
						var s;
						return ht.isWindow(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === o ? ht.css(e, n, a) : ht.style(e, n, o, a)
					}, e, r ? o : void 0, r)
				}
			})
		}), ht.fn.extend({
			bind: function (t, e, n) {
				return this.on(t, null, e, n)
			}, unbind: function (t, e) {
				return this.off(t, null, e)
			}, delegate: function (t, e, n, i) {
				return this.on(e, t, n, i)
			}, undelegate: function (t, e, n) {
				return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
			}
		}), ht.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
			return ht
		});
		var qe = t.jQuery, Be = t.$;
		return ht.noConflict = function (e) {
			return t.$ === ht && (t.$ = Be), e && t.jQuery === ht && (t.jQuery = qe), ht
		}, e || (t.jQuery = t.$ = ht), ht
	}), function (t, e) {
		"function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.Tether = e()
	}(this, function (t, e, n) {
		"use strict";

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function o(t) {
			var e = t.getBoundingClientRect(), n = {};
			for (var i in e) n[i] = e[i];
			if (t.ownerDocument !== document) {
				var s = t.ownerDocument.defaultView.frameElement;
				if (s) {
					var r = o(s);
					n.top += r.top, n.bottom += r.top, n.left += r.left, n.right += r.left
				}
			}
			return n
		}

		function s(t) {
			var e = (getComputedStyle(t) || {}).position, n = [];
			if ("fixed" === e) return [t];
			for (var i = t; (i = i.parentNode) && i && 1 === i.nodeType;) {
				var o = void 0;
				try {
					o = getComputedStyle(i)
				} catch (t) {
				}
				if (void 0 === o || null === o) return n.push(i), n;
				var s = o, r = s.overflow, a = s.overflowX, l = s.overflowY;
				/(auto|scroll)/.test(r + l + a) && ("absolute" !== e || ["relative", "absolute", "fixed"].indexOf(o.position) >= 0) && n.push(i)
			}
			return n.push(t.ownerDocument.body), t.ownerDocument !== document && n.push(t.ownerDocument.defaultView), n
		}

		function r() {
			E && document.body.removeChild(E), E = null
		}

		function a(t) {
			var e = void 0;
			t === document ? (e = document, t = document.documentElement) : e = t.ownerDocument;
			var n = e.documentElement, i = o(t), s = A();
			return i.top -= s.top, i.left -= s.left, void 0 === i.width && (i.width = document.body.scrollWidth - i.left - i.right), void 0 === i.height && (i.height = document.body.scrollHeight - i.top - i.bottom), i.top = i.top - n.clientTop, i.left = i.left - n.clientLeft, i.right = e.body.clientWidth - i.width - i.left, i.bottom = e.body.clientHeight - i.height - i.top, i
		}

		function l(t) {
			return t.offsetParent || document.documentElement
		}

		function c() {
			var t = document.createElement("div");
			t.style.width = "100%", t.style.height = "200px";
			var e = document.createElement("div");
			u(e.style, {
				position: "absolute",
				top: 0,
				left: 0,
				pointerEvents: "none",
				visibility: "hidden",
				width: "200px",
				height: "150px",
				overflow: "hidden"
			}), e.appendChild(t), document.body.appendChild(e);
			var n = t.offsetWidth;
			e.style.overflow = "scroll";
			var i = t.offsetWidth;
			n === i && (i = e.clientWidth), document.body.removeChild(e);
			var o = n - i;
			return {width: o, height: o}
		}

		function u() {
			var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], e = [];
			return Array.prototype.push.apply(e, arguments), e.slice(1).forEach(function (e) {
				if (e) for (var n in e) ({}).hasOwnProperty.call(e, n) && (t[n] = e[n])
			}), t
		}

		function h(t, e) {
			if (void 0 !== t.classList) e.split(" ").forEach(function (e) {
				e.trim() && t.classList.remove(e)
			}); else {
				var n = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"), i = f(t).replace(n, " ");
				m(t, i)
			}
		}

		function d(t, e) {
			if (void 0 !== t.classList) e.split(" ").forEach(function (e) {
				e.trim() && t.classList.add(e)
			}); else {
				h(t, e);
				var n = f(t) + " " + e;
				m(t, n)
			}
		}

		function p(t, e) {
			if (void 0 !== t.classList) return t.classList.contains(e);
			var n = f(t);
			return new RegExp("(^| )" + e + "( |$)", "gi").test(n)
		}

		function f(t) {
			return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString ? t.className.baseVal : t.className
		}

		function m(t, e) {
			t.setAttribute("class", e)
		}

		function g(t, e, n) {
			n.forEach(function (n) {
				-1 === e.indexOf(n) && p(t, n) && h(t, n)
			}), e.forEach(function (e) {
				p(t, e) || d(t, e)
			})
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function v(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}

		function y(t, e) {
			var n = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
			return t + n >= e && e >= t - n
		}

		function b() {
			return "undefined" != typeof performance && void 0 !== performance.now ? performance.now() : +new Date
		}

		function w() {
			for (var t = {top: 0, left: 0}, e = arguments.length, n = Array(e), i = 0; e > i; i++) n[i] = arguments[i];
			return n.forEach(function (e) {
				var n = e.top, i = e.left;
				"string" == typeof n && (n = parseFloat(n, 10)), "string" == typeof i && (i = parseFloat(i, 10)), t.top += n, t.left += i
			}), t
		}

		function x(t, e) {
			return "string" == typeof t.left && -1 !== t.left.indexOf("%") && (t.left = parseFloat(t.left, 10) / 100 * e.width), "string" == typeof t.top && -1 !== t.top.indexOf("%") && (t.top = parseFloat(t.top, 10) / 100 * e.height), t
		}

		function _(t, e) {
			return "scrollParent" === e ? e = t.scrollParents[0] : "window" === e && (e = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), e === document && (e = e.documentElement), void 0 !== e.nodeType && function () {
				var t = e, n = a(e), i = n, o = getComputedStyle(e);
				if (e = [i.left, i.top, n.width + i.left, n.height + i.top], t.ownerDocument !== document) {
					var s = t.ownerDocument.defaultView;
					e[0] += s.pageXOffset, e[1] += s.pageYOffset, e[2] += s.pageXOffset, e[3] += s.pageYOffset
				}
				Y.forEach(function (t, n) {
					"Top" === (t = t[0].toUpperCase() + t.substr(1)) || "Left" === t ? e[n] += parseFloat(o["border" + t + "Width"]) : e[n] -= parseFloat(o["border" + t + "Width"])
				})
			}(), e
		}

		var C = function () {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}

			return function (e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(), T = void 0;
		void 0 === T && (T = {modules: []});
		var E = null, S = function () {
			var t = 0;
			return function () {
				return ++t
			}
		}(), k = {}, A = function () {
			var t = E;
			t || ((t = document.createElement("div")).setAttribute("data-tether-id", S()), u(t.style, {
				top: 0,
				left: 0,
				position: "absolute"
			}), document.body.appendChild(t), E = t);
			var e = t.getAttribute("data-tether-id");
			return void 0 === k[e] && (k[e] = o(t), N(function () {
				delete k[e]
			})), k[e]
		}, I = [], N = function (t) {
			I.push(t)
		}, D = function () {
			for (var t = void 0; t = I.pop();) t()
		}, O = function () {
			function t() {
				i(this, t)
			}

			return C(t, [{
				key: "on", value: function (t, e, n) {
					var i = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
					void 0 === this.bindings && (this.bindings = {}), void 0 === this.bindings[t] && (this.bindings[t] = []), this.bindings[t].push({
						handler: e,
						ctx: n,
						once: i
					})
				}
			}, {
				key: "once", value: function (t, e, n) {
					this.on(t, e, n, !0)
				}
			}, {
				key: "off", value: function (t, e) {
					if (void 0 !== this.bindings && void 0 !== this.bindings[t]) if (void 0 === e) delete this.bindings[t]; else for (var n = 0; n < this.bindings[t].length;) this.bindings[t][n].handler === e ? this.bindings[t].splice(n, 1) : ++n
				}
			}, {
				key: "trigger", value: function (t) {
					if (void 0 !== this.bindings && this.bindings[t]) {
						for (var e = 0, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; n > o; o++) i[o - 1] = arguments[o];
						for (; e < this.bindings[t].length;) {
							var s = this.bindings[t][e], r = s.handler, a = s.ctx, l = s.once, c = a;
							void 0 === c && (c = this), r.apply(c, i), l ? this.bindings[t].splice(e, 1) : ++e
						}
					}
				}
			}]), t
		}();
		T.Utils = {
			getActualBoundingClientRect: o,
			getScrollParents: s,
			getBounds: a,
			getOffsetParent: l,
			extend: u,
			addClass: d,
			removeClass: h,
			hasClass: p,
			updateClasses: g,
			defer: N,
			flush: D,
			uniqueId: S,
			Evented: O,
			getScrollBarSize: c,
			removeUtilElements: r
		};
		var $ = function () {
			function t(t, e) {
				var n = [], i = !0, o = !1, s = void 0;
				try {
					for (var r, a = t[Symbol.iterator](); !(i = (r = a.next()).done) && (n.push(r.value), !e || n.length !== e); i = !0) ;
				} catch (t) {
					o = !0, s = t
				} finally {
					try {
						!i && a.return && a.return()
					} finally {
						if (o) throw s
					}
				}
				return n
			}

			return function (e, n) {
				if (Array.isArray(e)) return e;
				if (Symbol.iterator in Object(e)) return t(e, n);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		}(), C = function () {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}

			return function (e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(), P = function (t, e, n) {
			for (var i = !0; i;) {
				var o = t, s = e, r = n;
				i = !1, null === o && (o = Function.prototype);
				var a = Object.getOwnPropertyDescriptor(o, s);
				if (void 0 !== a) {
					if ("value" in a) return a.value;
					var l = a.get;
					if (void 0 === l) return;
					return l.call(r)
				}
				var c = Object.getPrototypeOf(o);
				if (null === c) return;
				t = c, e = s, n = r, i = !0, a = c = void 0
			}
		};
		if (void 0 === T) throw new Error("https://www.delta.ru/You must include the utils.js file before tether.js");
		var L = T.Utils, s = L.getScrollParents, a = L.getBounds, l = L.getOffsetParent, u = L.extend, d = L.addClass,
			h = L.removeClass, g = L.updateClasses, N = L.defer, D = L.flush, c = L.getScrollBarSize,
			r = L.removeUtilElements, M = function () {
				if ("undefined" == typeof document) return "";
				for (var t = document.createElement("div"), e = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"], n = 0; n < e.length; ++n) {
					var i = e[n];
					if (void 0 !== t.style[i]) return i
				}
			}(), j = [], R = function () {
				j.forEach(function (t) {
					t.position(!1)
				}), D()
			};
		!function () {
			var t = null, e = null, n = null, i = function i() {
				return void 0 !== e && e > 16 ? (e = Math.min(e - 16, 250), void(n = setTimeout(i, 250))) : void(void 0 !== t && b() - t < 10 || (null != n && (clearTimeout(n), n = null), t = b(), R(), e = b() - t))
			};
			"undefined" != typeof window && void 0 !== window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function (t) {
				window.addEventListener(t, i)
			})
		}();
		var H = {center: "center", left: "right", right: "left"}, F = {middle: "middle", top: "bottom", bottom: "top"},
			W = {top: 0, left: 0, middle: "50%", center: "50%", bottom: "100%", right: "100%"}, z = function (t, e) {
				var n = t.left, i = t.top;
				return "auto" === n && (n = H[e.left]), "auto" === i && (i = F[e.top]), {left: n, top: i}
			}, q = function (t) {
				var e = t.left, n = t.top;
				return void 0 !== W[t.left] && (e = W[t.left]), void 0 !== W[t.top] && (n = W[t.top]), {left: e, top: n}
			}, B = function (t) {
				var e = t.split(" "), n = $(e, 2);
				return {top: n[0], left: n[1]}
			}, U = B, V = function (t) {
				function e(t) {
					var n = this;
					i(this, e), P(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.position = this.position.bind(this), j.push(this), this.history = [], this.setOptions(t, !1), T.modules.forEach(function (t) {
						void 0 !== t.initialize && t.initialize.call(n)
					}), this.position()
				}

				return v(e, O), C(e, [{
					key: "getClass", value: function () {
						var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
							e = this.options.classes;
						return void 0 !== e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t
					}
				}, {
					key: "setOptions", value: function (t) {
						var e = this, n = arguments.length <= 1 || void 0 === arguments[1] || arguments[1],
							i = {offset: "0 0", targetOffset: "0 0", targetAttachment: "auto auto", classPrefix: "tether"};
						this.options = u(i, t);
						var o = this.options, r = o.element, a = o.target, l = o.targetModifier;
						if (this.element = r, this.target = a, this.targetModifier = l, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function (t) {
								if (void 0 === e[t]) throw new Error("Tether Error: Both element and target must be defined");
								void 0 !== e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
							}), d(this.element, this.getClass("element")), !1 !== this.options.addTargetClasses && d(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
						this.targetAttachment = U(this.options.targetAttachment), this.attachment = U(this.options.attachment), this.offset = B(this.options.offset), this.targetOffset = B(this.options.targetOffset), void 0 !== this.scrollParents && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = s(this.target), !1 !== this.options.enabled && this.enable(n)
					}
				}, {
					key: "getTargetBounds", value: function () {
						if (void 0 === this.targetModifier) return a(this.target);
						if ("visible" === this.targetModifier) return this.target === document.body ? {
							top: pageYOffset,
							left: pageXOffset,
							height: innerHeight,
							width: innerWidth
						} : ((s = {
							height: (t = a(this.target)).height,
							width: t.width,
							top: t.top,
							left: t.left
						}).height = Math.min(s.height, t.height - (pageYOffset - t.top)), s.height = Math.min(s.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), s.height = Math.min(innerHeight, s.height), s.height -= 2, s.width = Math.min(s.width, t.width - (pageXOffset - t.left)), s.width = Math.min(s.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), s.width = Math.min(innerWidth, s.width), s.width -= 2, s.top < pageYOffset && (s.top = pageYOffset), s.left < pageXOffset && (s.left = pageXOffset), s);
						if ("scroll-handle" === this.targetModifier) {
							var t = void 0, e = this.target;
							e === document.body ? (e = document.documentElement, t = {
								left: pageXOffset,
								top: pageYOffset,
								height: innerHeight,
								width: innerWidth
							}) : t = a(e);
							var n = getComputedStyle(e), i = 0;
							(e.scrollWidth > e.clientWidth || [n.overflow, n.overflowX].indexOf("scroll") >= 0 || this.target !== document.body) && (i = 15);
							var o = t.height - parseFloat(n.borderTopWidth) - parseFloat(n.borderBottomWidth) - i, s = {
								width: 15,
								height: .975 * o * (o / e.scrollHeight),
								left: t.left + t.width - parseFloat(n.borderLeftWidth) - 15
							}, r = 0;
							408 > o && this.target === document.body && (r = -11e-5 * Math.pow(o, 2) - .00727 * o + 22.58), this.target !== document.body && (s.height = Math.max(s.height, 24));
							var l = this.target.scrollTop / (e.scrollHeight - o);
							return s.top = l * (o - s.height - r) + t.top + parseFloat(n.borderTopWidth), this.target === document.body && (s.height = Math.max(s.height, 24)), s
						}
					}
				}, {
					key: "clearCache", value: function () {
						this._cache = {}
					}
				}, {
					key: "cache", value: function (t, e) {
						return void 0 === this._cache && (this._cache = {}), void 0 === this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t]
					}
				}, {
					key: "enable", value: function () {
						var t = this, e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
						!1 !== this.options.addTargetClasses && d(this.target, this.getClass("enabled")), d(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParents.forEach(function (e) {
							e !== t.target.ownerDocument && e.addEventListener("scroll", t.position)
						}), e && this.position()
					}
				}, {
					key: "disable", value: function () {
						var t = this;
						h(this.target, this.getClass("enabled")), h(this.element, this.getClass("enabled")), this.enabled = !1, void 0 !== this.scrollParents && this.scrollParents.forEach(function (e) {
							e.removeEventListener("scroll", t.position)
						})
					}
				}, {
					key: "destroy", value: function () {
						var t = this;
						this.disable(), j.forEach(function (e, n) {
							e === t && j.splice(n, 1)
						}), 0 === j.length && r()
					}
				}, {
					key: "updateAttachClasses", value: function (t, e) {
						var n = this;
						t = t || this.attachment, e = e || this.targetAttachment;
						var i = ["left", "top", "bottom", "right", "middle", "center"];
						void 0 !== this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), void 0 === this._addAttachClasses && (this._addAttachClasses = []);
						var o = this._addAttachClasses;
						t.top && o.push(this.getClass("element-attached") + "-" + t.top), t.left && o.push(this.getClass("element-attached") + "-" + t.left), e.top && o.push(this.getClass("target-attached") + "-" + e.top), e.left && o.push(this.getClass("target-attached") + "-" + e.left);
						var s = [];
						i.forEach(function (t) {
							s.push(n.getClass("element-attached") + "-" + t), s.push(n.getClass("target-attached") + "-" + t)
						}), N(function () {
							void 0 !== n._addAttachClasses && (g(n.element, n._addAttachClasses, s), !1 !== n.options.addTargetClasses && g(n.target, n._addAttachClasses, s), delete n._addAttachClasses)
						})
					}
				}, {
					key: "position", value: function () {
						var t = this, e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
						if (this.enabled) {
							this.clearCache();
							var n = z(this.targetAttachment, this.attachment);
							this.updateAttachClasses(this.attachment, n);
							var i = this.cache("element-bounds", function () {
								return a(t.element)
							}), o = i.width, s = i.height;
							if (0 === o && 0 === s && void 0 !== this.lastSize) {
								var r = this.lastSize;
								o = r.width, s = r.height
							} else this.lastSize = {width: o, height: s};
							var u = this.cache("target-bounds", function () {
									return t.getTargetBounds()
								}), h = u, d = x(q(this.attachment), {width: o, height: s}), p = x(q(n), h),
								f = x(this.offset, {width: o, height: s}), m = x(this.targetOffset, h);
							d = w(d, f), p = w(p, m);
							for (var g = u.left + p.left - d.left, v = u.top + p.top - d.top, y = 0; y < T.modules.length; ++y) {
								var b = T.modules[y].position.call(this, {
									left: g,
									top: v,
									targetAttachment: n,
									targetPos: u,
									elementPos: i,
									offset: d,
									targetOffset: p,
									manualOffset: f,
									manualTargetOffset: m,
									scrollbarSize: S,
									attachment: this.attachment
								});
								if (!1 === b) return !1;
								void 0 !== b && "object" == typeof b && (v = b.top, g = b.left)
							}
							var _ = {
								page: {top: v, left: g},
								viewport: {
									top: v - pageYOffset,
									bottom: pageYOffset - v - s + innerHeight,
									left: g - pageXOffset,
									right: pageXOffset - g - o + innerWidth
								}
							}, C = this.target.ownerDocument, E = C.defaultView, S = void 0;
							return C.body.scrollWidth > E.innerWidth && (S = this.cache("scrollbar-size", c), _.viewport.bottom -= S.height), C.body.scrollHeight > E.innerHeight && (S = this.cache("scrollbar-size", c), _.viewport.right -= S.width), (-1 === ["", "static"].indexOf(C.body.style.position) || -1 === ["", "static"].indexOf(C.body.parentElement.style.position)) && (_.page.bottom = C.body.scrollHeight - v - s, _.page.right = C.body.scrollWidth - g - o), void 0 !== this.options.optimizations && !1 !== this.options.optimizations.moveElement && void 0 === this.targetModifier && function () {
								var e = t.cache("target-offsetparent", function () {
									return l(t.target)
								}), n = t.cache("target-offsetparent-bounds", function () {
									return a(e)
								}), i = getComputedStyle(e), o = n, s = {};
								if (["Top", "Left", "Bottom", "Right"].forEach(function (t) {
										s[t.toLowerCase()] = parseFloat(i["border" + t + "Width"])
									}), n.right = C.body.scrollWidth - n.left - o.width + s.right, n.bottom = C.body.scrollHeight - n.top - o.height + s.bottom, _.page.top >= n.top + s.top && _.page.bottom >= n.bottom && _.page.left >= n.left + s.left && _.page.right >= n.right) {
									var r = e.scrollTop, c = e.scrollLeft;
									_.offset = {
										top: _.page.top - n.top + r - s.top,
										left: _.page.left - n.left + c - s.left
									}
								}
							}(), this.move(_), this.history.unshift(_), this.history.length > 3 && this.history.pop(), e && D(), !0
						}
					}
				}, {
					key: "move", value: function (t) {
						var e = this;
						if (void 0 !== this.element.parentNode) {
							var n = {};
							for (var i in t) {
								n[i] = {};
								for (var o in t[i]) {
									for (var s = !1, r = 0; r < this.history.length; ++r) {
										var a = this.history[r];
										if (void 0 !== a[i] && !y(a[i][o], t[i][o])) {
											s = !0;
											break
										}
									}
									s || (n[i][o] = !0)
								}
							}
							var c = {top: "", left: "", right: "", bottom: ""}, h = function (t, n) {
								if (!1 !== (void 0 !== e.options.optimizations ? e.options.optimizations.gpu : null)) {
									var i = void 0, o = void 0;
									t.top ? (c.top = 0, i = n.top) : (c.bottom = 0, i = -n.bottom), t.left ? (c.left = 0, o = n.left) : (c.right = 0, o = -n.right), c[M] = "translateX(" + Math.round(o) + "px) translateY(" + Math.round(i) + "px)", "msTransform" !== M && (c[M] += " translateZ(0)")
								} else t.top ? c.top = n.top + "px" : c.bottom = n.bottom + "px", t.left ? c.left = n.left + "px" : c.right = n.right + "px"
							}, d = !1;
							if ((n.page.top || n.page.bottom) && (n.page.left || n.page.right) ? (c.position = "absolute", h(n.page, t.page)) : (n.viewport.top || n.viewport.bottom) && (n.viewport.left || n.viewport.right) ? (c.position = "fixed", h(n.viewport, t.viewport)) : void 0 !== n.offset && n.offset.top && n.offset.left ? function () {
									c.position = "absolute";
									var i = e.cache("target-offsetparent", function () {
										return l(e.target)
									});
									l(e.element) !== i && N(function () {
										e.element.parentNode.removeChild(e.element), i.appendChild(e.element)
									}), h(n.offset, t.offset), d = !0
								}() : (c.position = "absolute", h({top: !0, left: !0}, t.page)), !d) {
								for (var p = !0, f = this.element.parentNode; f && 1 === f.nodeType && "BODY" !== f.tagName;) {
									if ("static" !== getComputedStyle(f).position) {
										p = !1;
										break
									}
									f = f.parentNode
								}
								p || (this.element.parentNode.removeChild(this.element), this.element.ownerDocument.body.appendChild(this.element))
							}
							var m = {}, g = !1;
							for (var o in c) {
								var v = c[o];
								this.element.style[o] !== v && (g = !0, m[o] = v)
							}
							g && N(function () {
								u(e.element.style, m)
							})
						}
					}
				}]), e
			}();
		V.modules = [], T.position = R;
		var X = u(V, T), $ = function () {
				function t(t, e) {
					var n = [], i = !0, o = !1, s = void 0;
					try {
						for (var r, a = t[Symbol.iterator](); !(i = (r = a.next()).done) && (n.push(r.value), !e || n.length !== e); i = !0) ;
					} catch (t) {
						o = !0, s = t
					} finally {
						try {
							!i && a.return && a.return()
						} finally {
							if (o) throw s
						}
					}
					return n
				}

				return function (e, n) {
					if (Array.isArray(e)) return e;
					if (Symbol.iterator in Object(e)) return t(e, n);
					throw new TypeError("Invalid attempt to destructure non-iterable instance")
				}
			}(), a = (L = T.Utils).getBounds, u = L.extend, g = L.updateClasses, N = L.defer,
			Y = ["left", "top", "right", "bottom"];
		T.modules.push({
			position: function (t) {
				var e = this, n = t.top, i = t.left, o = t.targetAttachment;
				if (!this.options.constraints) return !0;
				var s = this.cache("element-bounds", function () {
					return a(e.element)
				}), r = s.height, l = s.width;
				if (0 === l && 0 === r && void 0 !== this.lastSize) {
					var c = this.lastSize;
					l = c.width, r = c.height
				}
				var h = this.cache("target-bounds", function () {
					return e.getTargetBounds()
				}), d = h.height, p = h.width, f = [this.getClass("pinned"), this.getClass("out-of-bounds")];
				this.options.constraints.forEach(function (t) {
					var e = t.outOfBoundsClass, n = t.pinnedClass;
					e && f.push(e), n && f.push(n)
				}), f.forEach(function (t) {
					["left", "top", "right", "bottom"].forEach(function (e) {
						f.push(t + "-" + e)
					})
				});
				var m = [], v = u({}, o), y = u({}, this.attachment);
				return this.options.constraints.forEach(function (t) {
					var s = t.to, a = t.attachment, c = t.pin;
					void 0 === a && (a = "");
					var u = void 0, h = void 0;
					if (a.indexOf(" ") >= 0) {
						var f = a.split(" "), g = $(f, 2);
						h = g[0], u = g[1]
					} else u = h = a;
					var b = _(e, s);
					("target" === h || "both" === h) && (n < b[1] && "top" === v.top && (n += d, v.top = "bottom"), n + r > b[3] && "bottom" === v.top && (n -= d, v.top = "top")), "together" === h && ("top" === v.top && ("bottom" === y.top && n < b[1] ? (n += d, v.top = "bottom", n += r, y.top = "top") : "top" === y.top && n + r > b[3] && n - (r - d) >= b[1] && (n -= r - d, v.top = "bottom", y.top = "bottom")), "bottom" === v.top && ("top" === y.top && n + r > b[3] ? (n -= d, v.top = "top", n -= r, y.top = "bottom") : "bottom" === y.top && n < b[1] && n + (2 * r - d) <= b[3] && (n += r - d, v.top = "top", y.top = "top")), "middle" === v.top && (n + r > b[3] && "top" === y.top ? (n -= r, y.top = "bottom") : n < b[1] && "bottom" === y.top && (n += r, y.top = "top"))), ("target" === u || "both" === u) && (i < b[0] && "left" === v.left && (i += p, v.left = "right"), i + l > b[2] && "right" === v.left && (i -= p, v.left = "left")), "together" === u && (i < b[0] && "left" === v.left ? "right" === y.left ? (i += p, v.left = "right", i += l, y.left = "left") : "left" === y.left && (i += p, v.left = "right", i -= l, y.left = "right") : i + l > b[2] && "right" === v.left ? "left" === y.left ? (i -= p, v.left = "left", i -= l, y.left = "right") : "right" === y.left && (i -= p, v.left = "left", i += l, y.left = "left") : "center" === v.left && (i + l > b[2] && "left" === y.left ? (i -= l, y.left = "right") : i < b[0] && "right" === y.left && (i += l, y.left = "left"))), ("element" === h || "both" === h) && (n < b[1] && "bottom" === y.top && (n += r, y.top = "top"), n + r > b[3] && "top" === y.top && (n -= r, y.top = "bottom")), ("element" === u || "both" === u) && (i < b[0] && ("right" === y.left ? (i += l, y.left = "left") : "center" === y.left && (i += l / 2, y.left = "left")), i + l > b[2] && ("left" === y.left ? (i -= l, y.left = "right") : "center" === y.left && (i -= l / 2, y.left = "right"))), "string" == typeof c ? c = c.split(",").map(function (t) {
						return t.trim()
					}) : !0 === c && (c = ["top", "left", "right", "bottom"]), c = c || [];
					var w = [], x = [];
					n < b[1] && (c.indexOf("top") >= 0 ? (n = b[1], w.push("top")) : x.push("top")), n + r > b[3] && (c.indexOf("bottom") >= 0 ? (n = b[3] - r, w.push("bottom")) : x.push("bottom")), i < b[0] && (c.indexOf("left") >= 0 ? (i = b[0], w.push("left")) : x.push("left")), i + l > b[2] && (c.indexOf("right") >= 0 ? (i = b[2] - l, w.push("right")) : x.push("right")), w.length && function () {
						var t = void 0;
						t = void 0 !== e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"), m.push(t), w.forEach(function (e) {
							m.push(t + "-" + e)
						})
					}(), x.length && function () {
						var t = void 0;
						t = void 0 !== e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"), m.push(t), x.forEach(function (e) {
							m.push(t + "-" + e)
						})
					}(), (w.indexOf("left") >= 0 || w.indexOf("right") >= 0) && (y.left = v.left = !1), (w.indexOf("top") >= 0 || w.indexOf("bottom") >= 0) && (y.top = v.top = !1), (v.top !== o.top || v.left !== o.left || y.top !== e.attachment.top || y.left !== e.attachment.left) && (e.updateAttachClasses(y, v), e.trigger("update", {
						attachment: y,
						targetAttachment: v
					}))
				}), N(function () {
					!1 !== e.options.addTargetClasses && g(e.target, m, f), g(e.element, m, f)
				}), {top: n, left: i}
			}
		});
		var a = (L = T.Utils).getBounds, g = L.updateClasses, N = L.defer;
		T.modules.push({
			position: function (t) {
				var e = this, n = t.top, i = t.left, o = this.cache("element-bounds", function () {
					return a(e.element)
				}), s = o.height, r = o.width, l = this.getTargetBounds(), c = n + s, u = i + r, h = [];
				n <= l.bottom && c >= l.top && ["left", "right"].forEach(function (t) {
					var e = l[t];
					(e === i || e === u) && h.push(t)
				}), i <= l.right && u >= l.left && ["top", "bottom"].forEach(function (t) {
					var e = l[t];
					(e === n || e === c) && h.push(t)
				});
				var d = [], p = [], f = ["left", "top", "right", "bottom"];
				return d.push(this.getClass("abutted")), f.forEach(function (t) {
					d.push(e.getClass("abutted") + "-" + t)
				}), h.length && p.push(this.getClass("abutted")), h.forEach(function (t) {
					p.push(e.getClass("abutted") + "-" + t)
				}), N(function () {
					!1 !== e.options.addTargetClasses && g(e.target, p, d), g(e.element, p, d)
				}), !0
			}
		});
		$ = function () {
			function t(t, e) {
				var n = [], i = !0, o = !1, s = void 0;
				try {
					for (var r, a = t[Symbol.iterator](); !(i = (r = a.next()).done) && (n.push(r.value), !e || n.length !== e); i = !0) ;
				} catch (t) {
					o = !0, s = t
				} finally {
					try {
						!i && a.return && a.return()
					} finally {
						if (o) throw s
					}
				}
				return n
			}

			return function (e, n) {
				if (Array.isArray(e)) return e;
				if (Symbol.iterator in Object(e)) return t(e, n);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		}();
		return T.modules.push({
			position: function (t) {
				var e = t.top, n = t.left;
				if (this.options.shift) {
					var i = this.options.shift;
					"function" == typeof this.options.shift && (i = this.options.shift.call(this, {top: e, left: n}));
					var o = void 0, s = void 0;
					if ("string" == typeof i) {
						(i = i.split(" "))[1] = i[1] || i[0];
						var r = $(i, 2);
						o = r[0], s = r[1], o = parseFloat(o, 10), s = parseFloat(s, 10)
					} else o = i.top, s = i.left;
					return e += o, n += s, {top: e, left: n}
				}
			}
		}), X
	}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
	var e = jQuery.fn.jquery.split(" ")[0].split(".");
	if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
}(), function (t) {
	"use strict";

	function e(t, e) {
		if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
		t.prototype = Object.create(e && e.prototype, {
			constructor: {
				value: t,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
	}

	function n(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	var i = function (t, e, n) {
		for (var i = !0; i;) {
			var o = t, s = e, r = n;
			i = !1, null === o && (o = Function.prototype);
			var a = Object.getOwnPropertyDescriptor(o, s);
			if (void 0 !== a) {
				if ("value" in a) return a.value;
				var l = a.get;
				if (void 0 === l) return;
				return l.call(r)
			}
			var c = Object.getPrototypeOf(o);
			if (null === c) return;
			t = c, e = s, n = r, i = !0, a = c = void 0
		}
	}, o = function () {
		function t(t, e) {
			for (var n = 0; n < e.length; n++) {
				var i = e[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
			}
		}

		return function (e, n, i) {
			return n && t(e.prototype, n), i && t(e, i), e
		}
	}(), s = function (t) {
		function e(t) {
			return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
		}

		function n(t) {
			return (t[0] || t).nodeType
		}

		function i() {
			return {
				bindType: r.end, delegateType: r.end, handle: function (e) {
					if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
				}
			}
		}

		function o() {
			if (window.QUnit) return !1;
			var t = document.createElement("bootstrap");
			for (var e in a) if (void 0 !== t.style[e]) return {end: a[e]};
			return !1
		}

		function s(e) {
			var n = this, i = !1;
			return t(this).one(l.TRANSITION_END, function () {
				i = !0
			}), setTimeout(function () {
				i || l.triggerTransitionEnd(n)
			}, e), this
		}

		var r = !1, a = {
			WebkitTransition: "webkitTransitionEnd",
			MozTransition: "transitionend",
			OTransition: "oTransitionEnd otransitionend",
			transition: "transitionend"
		}, l = {
			TRANSITION_END: "bsTransitionEnd", getUID: function (t) {
				do {
					t += ~~(1e6 * Math.random())
				} while (document.getElementById(t));
				return t
			}, getSelectorFromElement: function (t) {
				var e = t.getAttribute("data-target");
				return e || (e = t.getAttribute("href") || "", e = /^#[a-z]/i.test(e) ? e : null), e
			}, reflow: function (t) {
				new Function("bs", "return bs")(t.offsetHeight)
			}, triggerTransitionEnd: function (e) {
				t(e).trigger(r.end)
			}, supportsTransitionEnd: function () {
				return Boolean(r)
			}, typeCheckConfig: function (t, i, o) {
				for (var s in o) if (o.hasOwnProperty(s)) {
					var r = o[s], a = i[s], l = void 0;
					if (l = a && n(a) ? "element" : e(a), !new RegExp(r).test(l)) throw new Error(t.toUpperCase() + ': Option "' + s + '" provided type "' + l + '" but expected type "' + r + '".')
				}
			}
		};
		return r = o(), t.fn.emulateTransitionEnd = s, l.supportsTransitionEnd() && (t.event.special[l.TRANSITION_END] = i()), l
	}(jQuery), r = (function (t) {
		var e = "alert", i = "bs.alert", r = "." + i, a = t.fn[e], l = {DISMISS: '[data-dismiss="alert"]'},
			c = {CLOSE: "close" + r, CLOSED: "closed" + r, CLICK_DATA_API: "click" + r + ".data-api"},
			u = {ALERT: "alert", FADE: "fade", IN: "in"}, h = function () {
				function e(t) {
					n(this, e), this._element = t
				}

				return o(e, [{
					key: "close", value: function (t) {
						t = t || this._element;
						var e = this._getRootElement(t);
						this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
					}
				}, {
					key: "dispose", value: function () {
						t.removeData(this._element, i), this._element = null
					}
				}, {
					key: "_getRootElement", value: function (e) {
						var n = s.getSelectorFromElement(e), i = !1;
						return n && (i = t(n)[0]), i || (i = t(e).closest("." + u.ALERT)[0]), i
					}
				}, {
					key: "_triggerCloseEvent", value: function (e) {
						var n = t.Event(c.CLOSE);
						return t(e).trigger(n), n
					}
				}, {
					key: "_removeElement", value: function (e) {
						return t(e).removeClass(u.IN), s.supportsTransitionEnd() && t(e).hasClass(u.FADE) ? void t(e).one(s.TRANSITION_END, t.proxy(this._destroyElement, this, e)).emulateTransitionEnd(150) : void this._destroyElement(e)
					}
				}, {
					key: "_destroyElement", value: function (e) {
						t(e).detach().trigger(c.CLOSED).remove()
					}
				}], [{
					key: "_jQueryInterface", value: function (n) {
						return this.each(function () {
							var o = t(this), s = o.data(i);
							s || (s = new e(this), o.data(i, s)), "close" === n && s[n](this)
						})
					}
				}, {
					key: "_handleDismiss", value: function (t) {
						return function (e) {
							e && e.preventDefault(), t.close(this)
						}
					}
				}, {
					key: "VERSION", get: function () {
						return "4.0.0-alpha.3"
					}
				}]), e
			}();
		t(document).on(c.CLICK_DATA_API, l.DISMISS, h._handleDismiss(new h)), t.fn[e] = h._jQueryInterface, t.fn[e].Constructor = h, t.fn[e].noConflict = function () {
			return t.fn[e] = a, h._jQueryInterface
		}
	}(jQuery), function (t) {
		var e = "button", i = "bs.button", s = "." + i, r = ".data-api", a = t.fn[e],
			l = {ACTIVE: "active", BUTTON: "btn", FOCUS: "focus"}, c = {
				DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
				DATA_TOGGLE: '[data-toggle="buttons"]',
				INPUT: "input",
				ACTIVE: ".active",
				BUTTON: ".btn"
			}, u = {CLICK_DATA_API: "click" + s + r, FOCUS_BLUR_DATA_API: "focus" + s + r + " blur" + s + r},
			h = function () {
				function e(t) {
					n(this, e), this._element = t
				}

				return o(e, [{
					key: "toggle", value: function () {
						var e = !0, n = t(this._element).closest(c.DATA_TOGGLE)[0];
						if (n) {
							var i = t(this._element).find(c.INPUT)[0];
							if (i) {
								if ("radio" === i.type) if (i.checked && t(this._element).hasClass(l.ACTIVE)) e = !1; else {
									var o = t(n).find(c.ACTIVE)[0];
									o && t(o).removeClass(l.ACTIVE)
								}
								e && (i.checked = !t(this._element).hasClass(l.ACTIVE), t(this._element).trigger("change")), i.focus()
							}
						} else this._element.setAttribute("aria-pressed", !t(this._element).hasClass(l.ACTIVE));
						e && t(this._element).toggleClass(l.ACTIVE)
					}
				}, {
					key: "dispose", value: function () {
						t.removeData(this._element, i), this._element = null
					}
				}], [{
					key: "_jQueryInterface", value: function (n) {
						return this.each(function () {
							var o = t(this).data(i);
							o || (o = new e(this), t(this).data(i, o)), "toggle" === n && o[n]()
						})
					}
				}, {
					key: "VERSION", get: function () {
						return "4.0.0-alpha.3"
					}
				}]), e
			}();
		t(document).on(u.CLICK_DATA_API, c.DATA_TOGGLE_CARROT, function (e) {
			e.preventDefault();
			var n = e.target;
			t(n).hasClass(l.BUTTON) || (n = t(n).closest(c.BUTTON)), h._jQueryInterface.call(t(n), "toggle")
		}).on(u.FOCUS_BLUR_DATA_API, c.DATA_TOGGLE_CARROT, function (e) {
			var n = t(e.target).closest(c.BUTTON)[0];
			t(n).toggleClass(l.FOCUS, /^focus(in)?$/.test(e.type))
		}), t.fn[e] = h._jQueryInterface, t.fn[e].Constructor = h, t.fn[e].noConflict = function () {
			return t.fn[e] = a, h._jQueryInterface
		}
	}(jQuery), function (t) {
		var e = "carousel", i = "bs.carousel", r = "." + i, a = ".data-api", l = t.fn[e],
			c = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0}, u = {
				interval: "(number|boolean)",
				keyboard: "boolean",
				slide: "(boolean|string)",
				pause: "(string|boolean)",
				wrap: "boolean"
			}, h = {NEXT: "next", PREVIOUS: "prev"}, d = {
				SLIDE: "slide" + r,
				SLID: "slid" + r,
				KEYDOWN: "keydown" + r,
				MOUSEENTER: "mouseenter" + r,
				MOUSELEAVE: "mouseleave" + r,
				LOAD_DATA_API: "load" + r + a,
				CLICK_DATA_API: "click" + r + a
			}, p = {
				CAROUSEL: "carousel",
				ACTIVE: "active",
				SLIDE: "slide",
				RIGHT: "right",
				LEFT: "left",
				ITEM: "carousel-item"
			}, f = {
				ACTIVE: ".active",
				ACTIVE_ITEM: ".active.carousel-item",
				ITEM: ".carousel-item",
				NEXT_PREV: ".next, .prev",
				INDICATORS: ".carousel-indicators",
				DATA_SLIDE: "[data-slide], [data-slide-to]",
				DATA_RIDE: '[data-ride="carousel"]'
			}, m = function () {
				function a(e, i) {
					n(this, a), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(i), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(f.INDICATORS)[0], this._addEventListeners()
				}

				return o(a, [{
					key: "next", value: function () {
						this._isSliding || this._slide(h.NEXT)
					}
				}, {
					key: "nextWhenVisible", value: function () {
						document.hidden || this.next()
					}
				}, {
					key: "prev", value: function () {
						this._isSliding || this._slide(h.PREVIOUS)
					}
				}, {
					key: "pause", value: function (e) {
						e || (this._isPaused = !0), t(this._element).find(f.NEXT_PREV)[0] && s.supportsTransitionEnd() && (s.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
					}
				}, {
					key: "cycle", value: function (e) {
						e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval(t.proxy(document.visibilityState ? this.nextWhenVisible : this.next, this), this._config.interval))
					}
				}, {
					key: "to", value: function (e) {
						var n = this;
						this._activeElement = t(this._element).find(f.ACTIVE_ITEM)[0];
						var i = this._getItemIndex(this._activeElement);
						if (!(e > this._items.length - 1 || e < 0)) {
							if (this._isSliding) return void t(this._element).one(d.SLID, function () {
								return n.to(e)
							});
							if (i === e) return this.pause(), void this.cycle();
							var o = e > i ? h.NEXT : h.PREVIOUS;
							this._slide(o, this._items[e])
						}
					}
				}, {
					key: "dispose", value: function () {
						t(this._element).off(r), t.removeData(this._element, i), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
					}
				}, {
					key: "_getConfig", value: function (n) {
						return n = t.extend({}, c, n), s.typeCheckConfig(e, n, u), n
					}
				}, {
					key: "_addEventListeners", value: function () {
						this._config.keyboard && t(this._element).on(d.KEYDOWN, t.proxy(this._keydown, this)), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || t(this._element).on(d.MOUSEENTER, t.proxy(this.pause, this)).on(d.MOUSELEAVE, t.proxy(this.cycle, this))
					}
				}, {
					key: "_keydown", value: function (t) {
						if (t.preventDefault(), !/input|textarea/i.test(t.target.tagName)) switch (t.which) {
							case 37:
								this.prev();
								break;
							case 39:
								this.next();
								break;
							default:
								return
						}
					}
				}, {
					key: "_getItemIndex", value: function (e) {
						return this._items = t.makeArray(t(e).parent().find(f.ITEM)), this._items.indexOf(e)
					}
				}, {
					key: "_getItemByDirection", value: function (t, e) {
						var n = t === h.NEXT, i = t === h.PREVIOUS, o = this._getItemIndex(e), s = this._items.length - 1;
						if ((i && 0 === o || n && o === s) && !this._config.wrap) return e;
						var r = (o + (t === h.PREVIOUS ? -1 : 1)) % this._items.length;
						return -1 === r ? this._items[this._items.length - 1] : this._items[r]
					}
				}, {
					key: "_triggerSlideEvent", value: function (e, n) {
						var i = t.Event(d.SLIDE, {relatedTarget: e, direction: n});
						return t(this._element).trigger(i), i
					}
				}, {
					key: "_setActiveIndicatorElement", value: function (e) {
						if (this._indicatorsElement) {
							t(this._indicatorsElement).find(f.ACTIVE).removeClass(p.ACTIVE);
							var n = this._indicatorsElement.children[this._getItemIndex(e)];
							n && t(n).addClass(p.ACTIVE)
						}
					}
				}, {
					key: "_slide", value: function (e, n) {
						var i = this, o = t(this._element).find(f.ACTIVE_ITEM)[0],
							r = n || o && this._getItemByDirection(e, o), a = Boolean(this._interval),
							l = e === h.NEXT ? p.LEFT : p.RIGHT;
						if (r && t(r).hasClass(p.ACTIVE)) this._isSliding = !1; else if (!this._triggerSlideEvent(r, l).isDefaultPrevented() && o && r) {
							this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(r);
							var c = t.Event(d.SLID, {relatedTarget: r, direction: l});
							s.supportsTransitionEnd() && t(this._element).hasClass(p.SLIDE) ? (t(r).addClass(e), s.reflow(r), t(o).addClass(l), t(r).addClass(l), t(o).one(s.TRANSITION_END, function () {
								t(r).removeClass(l).removeClass(e), t(r).addClass(p.ACTIVE), t(o).removeClass(p.ACTIVE).removeClass(e).removeClass(l), i._isSliding = !1, setTimeout(function () {
									return t(i._element).trigger(c)
								}, 0)
							}).emulateTransitionEnd(600)) : (t(o).removeClass(p.ACTIVE), t(r).addClass(p.ACTIVE), this._isSliding = !1, t(this._element).trigger(c)), a && this.cycle()
						}
					}
				}], [{
					key: "_jQueryInterface", value: function (e) {
						return this.each(function () {
							var n = t(this).data(i), o = t.extend({}, c, t(this).data());
							"object" == typeof e && t.extend(o, e);
							var s = "string" == typeof e ? e : o.slide;
							if (n || (n = new a(this, o), t(this).data(i, n)), "number" == typeof e) n.to(e); else if ("string" == typeof s) {
								if (void 0 === n[s]) throw new Error('No method named "' + s + '"');
								n[s]()
							} else o.interval && (n.pause(), n.cycle())
						})
					}
				}, {
					key: "_dataApiClickHandler", value: function (e) {
						var n = s.getSelectorFromElement(this);
						if (n) {
							var o = t(n)[0];
							if (o && t(o).hasClass(p.CAROUSEL)) {
								var r = t.extend({}, t(o).data(), t(this).data()), l = this.getAttribute("data-slide-to");
								l && (r.interval = !1), a._jQueryInterface.call(t(o), r), l && t(o).data(i).to(l), e.preventDefault()
							}
						}
					}
				}, {
					key: "VERSION", get: function () {
						return "4.0.0-alpha.3"
					}
				}, {
					key: "Default", get: function () {
						return c
					}
				}]), a
			}();
		t(document).on(d.CLICK_DATA_API, f.DATA_SLIDE, m._dataApiClickHandler), t(window).on(d.LOAD_DATA_API, function () {
			t(f.DATA_RIDE).each(function () {
				var e = t(this);
				m._jQueryInterface.call(e, e.data())
			})
		}), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () {
			return t.fn[e] = l, m._jQueryInterface
		}
	}(jQuery), function (t) {
		var e = "collapse", i = "bs.collapse", r = "." + i, a = t.fn[e], l = {toggle: !0, parent: ""},
			c = {toggle: "boolean", parent: "string"}, u = {
				SHOW: "show" + r,
				SHOWN: "shown" + r,
				HIDE: "hide" + r,
				HIDDEN: "hidden" + r,
				CLICK_DATA_API: "click" + r + ".data-api"
			}, h = {IN: "in", COLLAPSE: "collapse", COLLAPSING: "collapsing", COLLAPSED: "collapsed"},
			d = {WIDTH: "width", HEIGHT: "height"},
			p = {ACTIVES: ".panel > .in, .panel > .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]'},
			f = function () {
				function r(e, i) {
					n(this, r), this._isTransitioning = !1, this._element = e, this._config = this._getConfig(i), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
				}

				return o(r, [{
					key: "toggle", value: function () {
						t(this._element).hasClass(h.IN) ? this.hide() : this.show()
					}
				}, {
					key: "show", value: function () {
						var e = this;
						if (!this._isTransitioning && !t(this._element).hasClass(h.IN)) {
							var n = void 0, o = void 0;
							if (this._parent && ((n = t.makeArray(t(p.ACTIVES))).length || (n = null)), !(n && (o = t(n).data(i)) && o._isTransitioning)) {
								var a = t.Event(u.SHOW);
								if (t(this._element).trigger(a), !a.isDefaultPrevented()) {
									n && (r._jQueryInterface.call(t(n), "hide"), o || t(n).data(i, null));
									var l = this._getDimension();
									t(this._element).removeClass(h.COLLAPSE).addClass(h.COLLAPSING), this._element.style[l] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && t(this._triggerArray).removeClass(h.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
									var c = function () {
										t(e._element).removeClass(h.COLLAPSING).addClass(h.COLLAPSE).addClass(h.IN), e._element.style[l] = "", e.setTransitioning(!1), t(e._element).trigger(u.SHOWN)
									};
									if (!s.supportsTransitionEnd()) return void c();
									var d = "scroll" + (l[0].toUpperCase() + l.slice(1));
									t(this._element).one(s.TRANSITION_END, c).emulateTransitionEnd(600), this._element.style[l] = this._element[d] + "px"
								}
							}
						}
					}
				}, {
					key: "hide", value: function () {
						var e = this;
						if (!this._isTransitioning && t(this._element).hasClass(h.IN)) {
							var n = t.Event(u.HIDE);
							if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
								var i = this._getDimension(), o = i === d.WIDTH ? "offsetWidth" : "offsetHeight";
								this._element.style[i] = this._element[o] + "px", s.reflow(this._element), t(this._element).addClass(h.COLLAPSING).removeClass(h.COLLAPSE).removeClass(h.IN), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && t(this._triggerArray).addClass(h.COLLAPSED).attr("aria-expanded", !1), this.setTransitioning(!0);
								var r = function () {
									e.setTransitioning(!1), t(e._element).removeClass(h.COLLAPSING).addClass(h.COLLAPSE).trigger(u.HIDDEN)
								};
								return this._element.style[i] = 0, s.supportsTransitionEnd() ? void t(this._element).one(s.TRANSITION_END, r).emulateTransitionEnd(600) : void r()
							}
						}
					}
				}, {
					key: "setTransitioning", value: function (t) {
						this._isTransitioning = t
					}
				}, {
					key: "dispose", value: function () {
						t.removeData(this._element, i), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
					}
				}, {
					key: "_getConfig", value: function (n) {
						return n = t.extend({}, l, n), n.toggle = Boolean(n.toggle), s.typeCheckConfig(e, n, c), n
					}
				}, {
					key: "_getDimension", value: function () {
						return t(this._element).hasClass(d.WIDTH) ? d.WIDTH : d.HEIGHT
					}
				}, {
					key: "_getParent", value: function () {
						var e = this, n = t(this._config.parent)[0],
							i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
						return t(n).find(i).each(function (t, n) {
							e._addAriaAndCollapsedClass(r._getTargetFromElement(n), [n])
						}), n
					}
				}, {
					key: "_addAriaAndCollapsedClass", value: function (e, n) {
						if (e) {
							var i = t(e).hasClass(h.IN);
							e.setAttribute("aria-expanded", i), n.length && t(n).toggleClass(h.COLLAPSED, !i).attr("aria-expanded", i)
						}
					}
				}], [{
					key: "_getTargetFromElement", value: function (e) {
						var n = s.getSelectorFromElement(e);
						return n ? t(n)[0] : null
					}
				}, {
					key: "_jQueryInterface", value: function (e) {
						return this.each(function () {
							var n = t(this), o = n.data(i), s = t.extend({}, l, n.data(), "object" == typeof e && e);
							if (!o && s.toggle && /show|hide/.test(e) && (s.toggle = !1), o || (o = new r(this, s), n.data(i, o)), "string" == typeof e) {
								if (void 0 === o[e]) throw new Error('No method named "' + e + '"');
								o[e]()
							}
						})
					}
				}, {
					key: "VERSION", get: function () {
						return "4.0.0-alpha.3"
					}
				}, {
					key: "Default", get: function () {
						return l
					}
				}]), r
			}();
		t(document).on(u.CLICK_DATA_API, p.DATA_TOGGLE, function (e) {
			e.preventDefault();
			var n = f._getTargetFromElement(this), o = t(n).data(i) ? "toggle" : t(this).data();
			f._jQueryInterface.call(t(n), o)
		}), t.fn[e] = f._jQueryInterface, t.fn[e].Constructor = f, t.fn[e].noConflict = function () {
			return t.fn[e] = a, f._jQueryInterface
		}
	}(jQuery), function (t) {
		var e = "dropdown", i = "bs.dropdown", r = "." + i, a = ".data-api", l = t.fn[e], c = {
			HIDE: "hide" + r,
			HIDDEN: "hidden" + r,
			SHOW: "show" + r,
			SHOWN: "shown" + r,
			CLICK: "click" + r,
			CLICK_DATA_API: "click" + r + a,
			KEYDOWN_DATA_API: "keydown" + r + a
		}, u = {BACKDROP: "dropdown-backdrop", DISABLED: "disabled", OPEN: "open"}, h = {
			BACKDROP: ".dropdown-backdrop",
			DATA_TOGGLE: '[data-toggle="dropdown"]',
			FORM_CHILD: ".dropdown form",
			ROLE_MENU: '[role="menu"]',
			ROLE_LISTBOX: '[role="listbox"]',
			NAVBAR_NAV: ".navbar-nav",
			VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
		}, d = function () {
			function e(t) {
				n(this, e), this._element = t, this._addEventListeners()
			}

			return o(e, [{
				key: "toggle", value: function () {
					if (this.disabled || t(this).hasClass(u.DISABLED)) return !1;
					var n = e._getParentFromElement(this), i = t(n).hasClass(u.OPEN);
					if (e._clearMenus(), i) return !1;
					if ("ontouchstart" in document.documentElement && !t(n).closest(h.NAVBAR_NAV).length) {
						var o = document.createElement("div");
						o.className = u.BACKDROP, t(o).insertBefore(this), t(o).on("click", e._clearMenus)
					}
					var s = {relatedTarget: this}, r = t.Event(c.SHOW, s);
					return t(n).trigger(r), !r.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", "true"), t(n).toggleClass(u.OPEN), t(n).trigger(t.Event(c.SHOWN, s)), !1)
				}
			}, {
				key: "dispose", value: function () {
					t.removeData(this._element, i), t(this._element).off(r), this._element = null
				}
			}, {
				key: "_addEventListeners", value: function () {
					t(this._element).on(c.CLICK, this.toggle)
				}
			}], [{
				key: "_jQueryInterface", value: function (n) {
					return this.each(function () {
						var o = t(this).data(i);
						if (o || t(this).data(i, o = new e(this)), "string" == typeof n) {
							if (void 0 === o[n]) throw new Error('No method named "' + n + '"');
							o[n].call(this)
						}
					})
				}
			}, {
				key: "_clearMenus", value: function (n) {
					if (!n || 3 !== n.which) {
						var i = t(h.BACKDROP)[0];
						i && i.parentNode.removeChild(i);
						for (var o = t.makeArray(t(h.DATA_TOGGLE)), s = 0; s < o.length; s++) {
							var r = e._getParentFromElement(o[s]), a = {relatedTarget: o[s]};
							if (t(r).hasClass(u.OPEN) && !(n && "click" === n.type && /input|textarea/i.test(n.target.tagName) && t.contains(r, n.target))) {
								var l = t.Event(c.HIDE, a);
								t(r).trigger(l), l.isDefaultPrevented() || (o[s].setAttribute("aria-expanded", "false"), t(r).removeClass(u.OPEN).trigger(t.Event(c.HIDDEN, a)))
							}
						}
					}
				}
			}, {
				key: "_getParentFromElement", value: function (e) {
					var n = void 0, i = s.getSelectorFromElement(e);
					return i && (n = t(i)[0]), n || e.parentNode
				}
			}, {
				key: "_dataApiKeydownHandler", value: function (n) {
					if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass(u.DISABLED))) {
						var i = e._getParentFromElement(this), o = t(i).hasClass(u.OPEN);
						if (!o && 27 !== n.which || o && 27 === n.which) {
							if (27 === n.which) {
								var s = t(i).find(h.DATA_TOGGLE)[0];
								t(s).trigger("focus")
							}
							return void t(this).trigger("click")
						}
						var r = t.makeArray(t(h.VISIBLE_ITEMS));
						if ((r = r.filter(function (t) {
								return t.offsetWidth || t.offsetHeight
							})).length) {
							var a = r.indexOf(n.target);
							38 === n.which && a > 0 && a--, 40 === n.which && a < r.length - 1 && a++, a < 0 && (a = 0), r[a].focus()
						}
					}
				}
			}, {
				key: "VERSION", get: function () {
					return "4.0.0-alpha.3"
				}
			}]), e
		}();
		t(document).on(c.KEYDOWN_DATA_API, h.DATA_TOGGLE, d._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, h.ROLE_MENU, d._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, h.ROLE_LISTBOX, d._dataApiKeydownHandler).on(c.CLICK_DATA_API, d._clearMenus).on(c.CLICK_DATA_API, h.DATA_TOGGLE, d.prototype.toggle).on(c.CLICK_DATA_API, h.FORM_CHILD, function (t) {
			t.stopPropagation()
		}), t.fn[e] = d._jQueryInterface, t.fn[e].Constructor = d, t.fn[e].noConflict = function () {
			return t.fn[e] = l, d._jQueryInterface
		}
	}(jQuery), function (t) {
		var e = "modal", i = "bs.modal", r = "." + i, a = t.fn[e],
			l = {backdrop: !0, keyboard: !0, focus: !0, show: !0},
			c = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean"}, u = {
				HIDE: "hide" + r,
				HIDDEN: "hidden" + r,
				SHOW: "show" + r,
				SHOWN: "shown" + r,
				FOCUSIN: "focusin" + r,
				RESIZE: "resize" + r,
				CLICK_DISMISS: "click.dismiss" + r,
				KEYDOWN_DISMISS: "keydown.dismiss" + r,
				MOUSEUP_DISMISS: "mouseup.dismiss" + r,
				MOUSEDOWN_DISMISS: "mousedown.dismiss" + r,
				CLICK_DATA_API: "click" + r + ".data-api"
			}, h = {
				SCROLLBAR_MEASURER: "modal-scrollbar-measure",
				BACKDROP: "modal-backdrop",
				OPEN: "modal-open",
				FADE: "fade",
				IN: "in"
			}, d = {
				DIALOG: ".modal-dialog",
				DATA_TOGGLE: '[data-toggle="modal"]',
				DATA_DISMISS: '[data-dismiss="modal"]',
				FIXED_CONTENT: ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"
			}, p = function () {
				function a(e, i) {
					n(this, a), this._config = this._getConfig(i), this._element = e, this._dialog = t(e).find(d.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
				}

				return o(a, [{
					key: "toggle", value: function (t) {
						return this._isShown ? this.hide() : this.show(t)
					}
				}, {
					key: "show", value: function (e) {
						var n = this, i = t.Event(u.SHOW, {relatedTarget: e});
						t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), t(document.body).addClass(h.OPEN), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(u.CLICK_DISMISS, d.DATA_DISMISS, t.proxy(this.hide, this)), t(this._dialog).on(u.MOUSEDOWN_DISMISS, function () {
							t(n._element).one(u.MOUSEUP_DISMISS, function (e) {
								t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
							})
						}), this._showBackdrop(t.proxy(this._showElement, this, e)))
					}
				}, {
					key: "hide", value: function (e) {
						e && e.preventDefault();
						var n = t.Event(u.HIDE);
						t(this._element).trigger(n), this._isShown && !n.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), t(document).off(u.FOCUSIN), t(this._element).removeClass(h.IN), t(this._element).off(u.CLICK_DISMISS), t(this._dialog).off(u.MOUSEDOWN_DISMISS), s.supportsTransitionEnd() && t(this._element).hasClass(h.FADE) ? t(this._element).one(s.TRANSITION_END, t.proxy(this._hideModal, this)).emulateTransitionEnd(300) : this._hideModal())
					}
				}, {
					key: "dispose", value: function () {
						t.removeData(this._element, i), t(window).off(r), t(document).off(r), t(this._element).off(r), t(this._backdrop).off(r), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null
					}
				}, {
					key: "_getConfig", value: function (n) {
						return n = t.extend({}, l, n), s.typeCheckConfig(e, n, c), n
					}
				}, {
					key: "_showElement", value: function (e) {
						var n = this, i = s.supportsTransitionEnd() && t(this._element).hasClass(h.FADE);
						this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && s.reflow(this._element), t(this._element).addClass(h.IN), this._config.focus && this._enforceFocus();
						var o = t.Event(u.SHOWN, {relatedTarget: e}), r = function () {
							n._config.focus && n._element.focus(), t(n._element).trigger(o)
						};
						i ? t(this._dialog).one(s.TRANSITION_END, r).emulateTransitionEnd(300) : r()
					}
				}, {
					key: "_enforceFocus", value: function () {
						var e = this;
						t(document).off(u.FOCUSIN).on(u.FOCUSIN, function (n) {
							document === n.target || e._element === n.target || t(e._element).has(n.target).length || e._element.focus()
						})
					}
				}, {
					key: "_setEscapeEvent", value: function () {
						var e = this;
						this._isShown && this._config.keyboard ? t(this._element).on(u.KEYDOWN_DISMISS, function (t) {
							27 === t.which && e.hide()
						}) : this._isShown || t(this._element).off(u.KEYDOWN_DISMISS)
					}
				}, {
					key: "_setResizeEvent", value: function () {
						this._isShown ? t(window).on(u.RESIZE, t.proxy(this._handleUpdate, this)) : t(window).off(u.RESIZE)
					}
				}, {
					key: "_hideModal", value: function () {
						var e = this;
						this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._showBackdrop(function () {
							t(document.body).removeClass(h.OPEN), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(u.HIDDEN)
						})
					}
				}, {
					key: "_removeBackdrop", value: function () {
						this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
					}
				}, {
					key: "_showBackdrop", value: function (e) {
						var n = this, i = t(this._element).hasClass(h.FADE) ? h.FADE : "";
						if (this._isShown && this._config.backdrop) {
							var o = s.supportsTransitionEnd() && i;
							if (this._backdrop = document.createElement("div"), this._backdrop.className = h.BACKDROP, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(u.CLICK_DISMISS, function (t) {
									return n._ignoreBackdropClick ? void(n._ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide()))
								}), o && s.reflow(this._backdrop), t(this._backdrop).addClass(h.IN), !e) return;
							if (!o) return void e();
							t(this._backdrop).one(s.TRANSITION_END, e).emulateTransitionEnd(150)
						} else if (!this._isShown && this._backdrop) {
							t(this._backdrop).removeClass(h.IN);
							var r = function () {
								n._removeBackdrop(), e && e()
							};
							s.supportsTransitionEnd() && t(this._element).hasClass(h.FADE) ? t(this._backdrop).one(s.TRANSITION_END, r).emulateTransitionEnd(150) : r()
						} else e && e()
					}
				}, {
					key: "_handleUpdate", value: function () {
						this._adjustDialog()
					}
				}, {
					key: "_adjustDialog", value: function () {
						var t = this._element.scrollHeight > document.documentElement.clientHeight;
						!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
					}
				}, {
					key: "_resetAdjustments", value: function () {
						this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
					}
				}, {
					key: "_checkScrollbar", value: function () {
						this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
					}
				}, {
					key: "_setScrollbar", value: function () {
						var e = parseInt(t(d.FIXED_CONTENT).css("padding-right") || 0, 10);
						this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = e + this._scrollbarWidth + "px")
					}
				}, {
					key: "_resetScrollbar", value: function () {
						document.body.style.paddingRight = this._originalBodyPadding
					}
				}, {
					key: "_getScrollbarWidth", value: function () {
						var t = document.createElement("div");
						t.className = h.SCROLLBAR_MEASURER, document.body.appendChild(t);
						var e = t.offsetWidth - t.clientWidth;
						return document.body.removeChild(t), e
					}
				}], [{
					key: "_jQueryInterface", value: function (e, n) {
						return this.each(function () {
							var o = t(this).data(i), s = t.extend({}, a.Default, t(this).data(), "object" == typeof e && e);
							if (o || (o = new a(this, s), t(this).data(i, o)), "string" == typeof e) {
								if (void 0 === o[e]) throw new Error('No method named "' + e + '"');
								o[e](n)
							} else s.show && o.show(n)
						})
					}
				}, {
					key: "VERSION", get: function () {
						return "4.0.0-alpha.3"
					}
				}, {
					key: "Default", get: function () {
						return l
					}
				}]), a
			}();
		t(document).on(u.CLICK_DATA_API, d.DATA_TOGGLE, function (e) {
			var n = this, o = void 0, r = s.getSelectorFromElement(this);
			r && (o = t(r)[0]);
			var a = t(o).data(i) ? "toggle" : t.extend({}, t(o).data(), t(this).data());
			"A" === this.tagName && e.preventDefault();
			var l = t(o).one(u.SHOW, function (e) {
				e.isDefaultPrevented() || l.one(u.HIDDEN, function () {
					t(n).is(":visible") && n.focus()
				})
			});
			p._jQueryInterface.call(t(o), a, this)
		}), t.fn[e] = p._jQueryInterface, t.fn[e].Constructor = p, t.fn[e].noConflict = function () {
			return t.fn[e] = a, p._jQueryInterface
		}
	}(jQuery), function (t) {
		var e = "scrollspy", i = "bs.scrollspy", r = "." + i, a = t.fn[e], l = {offset: 10, method: "auto", target: ""},
			c = {offset: "number", method: "string", target: "(string|element)"},
			u = {ACTIVATE: "activate" + r, SCROLL: "scroll" + r, LOAD_DATA_API: "load" + r + ".data-api"}, h = {
				DROPDOWN_ITEM: "dropdown-item",
				DROPDOWN_MENU: "dropdown-menu",
				NAV_LINK: "nav-link",
				NAV: "nav",
				ACTIVE: "active"
			}, d = {
				DATA_SPY: '[data-spy="scroll"]',
				ACTIVE: ".active",
				LIST_ITEM: ".list-item",
				LI: "li",
				LI_DROPDOWN: "li.dropdown",
				NAV_LINKS: ".nav-link",
				DROPDOWN: ".dropdown",
				DROPDOWN_ITEMS: ".dropdown-item",
				DROPDOWN_TOGGLE: ".dropdown-toggle"
			}, p = {OFFSET: "offset", POSITION: "position"}, f = function () {
				function a(e, i) {
					n(this, a), this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(i), this._selector = this._config.target + " " + d.NAV_LINKS + "," + this._config.target + " " + d.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(u.SCROLL, t.proxy(this._process, this)), this.refresh(), this._process()
				}

				return o(a, [{
					key: "refresh", value: function () {
						var e = this, n = this._scrollElement !== this._scrollElement.window ? p.POSITION : p.OFFSET,
							i = "auto" === this._config.method ? n : this._config.method,
							o = i === p.POSITION ? this._getScrollTop() : 0;
						this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function (e) {
							var n = void 0, r = s.getSelectorFromElement(e);
							return r && (n = t(r)[0]), n && (n.offsetWidth || n.offsetHeight) ? [t(n)[i]().top + o, r] : null
						}).filter(function (t) {
							return t
						}).sort(function (t, e) {
							return t[0] - e[0]
						}).forEach(function (t) {
							e._offsets.push(t[0]), e._targets.push(t[1])
						})
					}
				}, {
					key: "dispose", value: function () {
						t.removeData(this._element, i), t(this._scrollElement).off(r), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
					}
				}, {
					key: "_getConfig", value: function (n) {
						if ("string" != typeof(n = t.extend({}, l, n)).target) {
							var i = t(n.target).attr("id");
							i || (i = s.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i
						}
						return s.typeCheckConfig(e, n, c), n
					}
				}, {
					key: "_getScrollTop", value: function () {
						return this._scrollElement === window ? this._scrollElement.scrollY : this._scrollElement.scrollTop
					}
				}, {
					key: "_getScrollHeight", value: function () {
						return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
					}
				}, {
					key: "_process", value: function () {
						var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(),
							n = this._config.offset + e - this._scrollElement.offsetHeight;
						if (this._scrollHeight !== e && this.refresh(), t >= n) {
							var i = this._targets[this._targets.length - 1];
							this._activeTarget !== i && this._activate(i)
						}
						if (this._activeTarget && t < this._offsets[0]) return this._activeTarget = null, void this._clear();
						for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
					}
				}, {
					key: "_activate", value: function (e) {
						this._activeTarget = e, this._clear();
						var n = this._selector.split(",");
						n = n.map(function (t) {
							return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
						});
						var i = t(n.join(","));
						i.hasClass(h.DROPDOWN_ITEM) ? (i.closest(d.DROPDOWN).find(d.DROPDOWN_TOGGLE).addClass(h.ACTIVE), i.addClass(h.ACTIVE)) : i.parents(d.LI).find(d.NAV_LINKS).addClass(h.ACTIVE), t(this._scrollElement).trigger(u.ACTIVATE, {relatedTarget: e})
					}
				}, {
					key: "_clear", value: function () {
						t(this._selector).filter(d.ACTIVE).removeClass(h.ACTIVE)
					}
				}], [{
					key: "_jQueryInterface", value: function (e) {
						return this.each(function () {
							var n = t(this).data(i), o = "object" == typeof e && e || null;
							if (n || (n = new a(this, o), t(this).data(i, n)), "string" == typeof e) {
								if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
								n[e]()
							}
						})
					}
				}, {
					key: "VERSION", get: function () {
						return "4.0.0-alpha.3"
					}
				}, {
					key: "Default", get: function () {
						return l
					}
				}]), a
			}();
		t(window).on(u.LOAD_DATA_API, function () {
			for (var e = t.makeArray(t(d.DATA_SPY)), n = e.length; n--;) {
				var i = t(e[n]);
				f._jQueryInterface.call(i, i.data())
			}
		}), t.fn[e] = f._jQueryInterface, t.fn[e].Constructor = f, t.fn[e].noConflict = function () {
			return t.fn[e] = a, f._jQueryInterface
		}
	}(jQuery), function (t) {
		var e = "tab", i = "bs.tab", r = "." + i, a = t.fn[e], l = {
			HIDE: "hide" + r,
			HIDDEN: "hidden" + r,
			SHOW: "show" + r,
			SHOWN: "shown" + r,
			CLICK_DATA_API: "click" + r + ".data-api"
		}, c = {DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active", FADE: "fade", IN: "in"}, u = {
			A: "a",
			LI: "li",
			DROPDOWN: ".dropdown",
			UL: "ul:not(.dropdown-menu)",
			FADE_CHILD: "> .nav-item .fade, > .fade",
			ACTIVE: ".active",
			ACTIVE_CHILD: "> .nav-item > .active, > .active",
			DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
			DROPDOWN_TOGGLE: ".dropdown-toggle",
			DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
		}, h = function () {
			function e(t) {
				n(this, e), this._element = t
			}

			return o(e, [{
				key: "show", value: function () {
					var e = this;
					if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !t(this._element).hasClass(c.ACTIVE)) {
						var n = void 0, i = void 0, o = t(this._element).closest(u.UL)[0],
							r = s.getSelectorFromElement(this._element);
						o && (i = t.makeArray(t(o).find(u.ACTIVE)), i = i[i.length - 1]);
						var a = t.Event(l.HIDE, {relatedTarget: this._element}),
							h = t.Event(l.SHOW, {relatedTarget: i});
						if (i && t(i).trigger(a), t(this._element).trigger(h), !h.isDefaultPrevented() && !a.isDefaultPrevented()) {
							r && (n = t(r)[0]), this._activate(this._element, o);
							var d = function () {
								var n = t.Event(l.HIDDEN, {relatedTarget: e._element}),
									o = t.Event(l.SHOWN, {relatedTarget: i});
								t(i).trigger(n), t(e._element).trigger(o)
							};
							n ? this._activate(n, n.parentNode, d) : d()
						}
					}
				}
			}, {
				key: "dispose", value: function () {
					t.removeClass(this._element, i), this._element = null
				}
			}, {
				key: "_activate", value: function (e, n, i) {
					var o = t(n).find(u.ACTIVE_CHILD)[0],
						r = i && s.supportsTransitionEnd() && (o && t(o).hasClass(c.FADE) || Boolean(t(n).find(u.FADE_CHILD)[0])),
						a = t.proxy(this._transitionComplete, this, e, o, r, i);
					o && r ? t(o).one(s.TRANSITION_END, a).emulateTransitionEnd(150) : a(), o && t(o).removeClass(c.IN)
				}
			}, {
				key: "_transitionComplete", value: function (e, n, i, o) {
					if (n) {
						t(n).removeClass(c.ACTIVE);
						var r = t(n).find(u.DROPDOWN_ACTIVE_CHILD)[0];
						r && t(r).removeClass(c.ACTIVE), n.setAttribute("aria-expanded", !1)
					}
					if (t(e).addClass(c.ACTIVE), e.setAttribute("aria-expanded", !0), i ? (s.reflow(e), t(e).addClass(c.IN)) : t(e).removeClass(c.FADE), e.parentNode && t(e.parentNode).hasClass(c.DROPDOWN_MENU)) {
						var a = t(e).closest(u.DROPDOWN)[0];
						a && t(a).find(u.DROPDOWN_TOGGLE).addClass(c.ACTIVE), e.setAttribute("aria-expanded", !0)
					}
					o && o()
				}
			}], [{
				key: "_jQueryInterface", value: function (n) {
					return this.each(function () {
						var o = t(this), s = o.data(i);
						if (s || (s = s = new e(this), o.data(i, s)), "string" == typeof n) {
							if (void 0 === s[n]) throw new Error('No method named "' + n + '"');
							s[n]()
						}
					})
				}
			}, {
				key: "VERSION", get: function () {
					return "4.0.0-alpha.3"
				}
			}]), e
		}();
		t(document).on(l.CLICK_DATA_API, u.DATA_TOGGLE, function (e) {
			e.preventDefault(), h._jQueryInterface.call(t(this), "show")
		}), t.fn[e] = h._jQueryInterface, t.fn[e].Constructor = h, t.fn[e].noConflict = function () {
			return t.fn[e] = a, h._jQueryInterface
		}
	}(jQuery), function (t) {
		if (void 0 === window.Tether) throw new Error("Bootstrap tooltips require Tether (http://github.hubspot.com/tether/)");
		var e = "tooltip", i = "bs.tooltip", r = "." + i, a = t.fn[e], l = {
				animation: !0,
				template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
				trigger: "hover focus",
				title: "",
				delay: 0,
				html: !1,
				selector: !1,
				placement: "top",
				offset: "0 0",
				constraints: []
			}, c = {
				animation: "boolean",
				template: "string",
				title: "(string|element|function)",
				trigger: "string",
				delay: "(number|object)",
				html: "boolean",
				selector: "(string|boolean)",
				placement: "(string|function)",
				offset: "string",
				constraints: "array"
			}, u = {TOP: "bottom center", RIGHT: "middle left", BOTTOM: "top center", LEFT: "middle right"},
			h = {IN: "in", OUT: "out"}, d = {
				HIDE: "hide" + r,
				HIDDEN: "hidden" + r,
				SHOW: "show" + r,
				SHOWN: "shown" + r,
				INSERTED: "inserted" + r,
				CLICK: "click" + r,
				FOCUSIN: "focusin" + r,
				FOCUSOUT: "focusout" + r,
				MOUSEENTER: "mouseenter" + r,
				MOUSELEAVE: "mouseleave" + r
			}, p = {FADE: "fade", IN: "in"}, f = {TOOLTIP: ".tooltip", TOOLTIP_INNER: ".tooltip-inner"},
			m = {element: !1, enabled: !1}, g = {HOVER: "hover", FOCUS: "focus", CLICK: "click", MANUAL: "manual"},
			v = function () {
				function a(t, e) {
					n(this, a), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._tether = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
				}

				return o(a, [{
					key: "enable", value: function () {
						this._isEnabled = !0
					}
				}, {
					key: "disable", value: function () {
						this._isEnabled = !1
					}
				}, {
					key: "toggleEnabled", value: function () {
						this._isEnabled = !this._isEnabled
					}
				}, {
					key: "toggle", value: function (e) {
						if (e) {
							var n = this.constructor.DATA_KEY, i = t(e.currentTarget).data(n);
							i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
						} else {
							if (t(this.getTipElement()).hasClass(p.IN)) return void this._leave(null, this);
							this._enter(null, this)
						}
					}
				}, {
					key: "dispose", value: function () {
						clearTimeout(this._timeout), this.cleanupTether(), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null
					}
				}, {
					key: "show", value: function () {
						var e = this, n = t.Event(this.constructor.Event.SHOW);
						if (this.isWithContent() && this._isEnabled) {
							t(this.element).trigger(n);
							var i = t.contains(this.element.ownerDocument.documentElement, this.element);
							if (n.isDefaultPrevented() || !i) return;
							var o = this.getTipElement(), r = s.getUID(this.constructor.NAME);
							o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && t(o).addClass(p.FADE);
							var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
								c = this._getAttachment(l);
							t(o).data(this.constructor.DATA_KEY, this).appendTo(document.body), t(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({
								attachment: c,
								element: o,
								target: this.element,
								classes: m,
								classPrefix: "bs-tether",
								offset: this.config.offset,
								constraints: this.config.constraints,
								addTargetClasses: !1
							}), s.reflow(o), this._tether.position(), t(o).addClass(p.IN);
							var u = function () {
								var n = e._hoverState;
								e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === h.OUT && e._leave(null, e)
							};
							if (s.supportsTransitionEnd() && t(this.tip).hasClass(p.FADE)) return void t(this.tip).one(s.TRANSITION_END, u).emulateTransitionEnd(a._TRANSITION_DURATION);
							u()
						}
					}
				}, {
					key: "hide", value: function (e) {
						var n = this, i = this.getTipElement(), o = t.Event(this.constructor.Event.HIDE),
							r = function () {
								n._hoverState !== h.IN && i.parentNode && i.parentNode.removeChild(i), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), n.cleanupTether(), e && e()
							};
						t(this.element).trigger(o), o.isDefaultPrevented() || (t(i).removeClass(p.IN), s.supportsTransitionEnd() && t(this.tip).hasClass(p.FADE) ? t(i).one(s.TRANSITION_END, r).emulateTransitionEnd(150) : r(), this._hoverState = "")
					}
				}, {
					key: "isWithContent", value: function () {
						return Boolean(this.getTitle())
					}
				}, {
					key: "getTipElement", value: function () {
						return this.tip = this.tip || t(this.config.template)[0]
					}
				}, {
					key: "setContent", value: function () {
						var e = t(this.getTipElement());
						this.setElementContent(e.find(f.TOOLTIP_INNER), this.getTitle()), e.removeClass(p.FADE).removeClass(p.IN), this.cleanupTether()
					}
				}, {
					key: "setElementContent", value: function (e, n) {
						var i = this.config.html;
						"object" == typeof n && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n)
					}
				}, {
					key: "getTitle", value: function () {
						var t = this.element.getAttribute("data-original-title");
						return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
					}
				}, {
					key: "cleanupTether", value: function () {
						this._tether && this._tether.destroy()
					}
				}, {
					key: "_getAttachment", value: function (t) {
						return u[t.toUpperCase()]
					}
				}, {
					key: "_setListeners", value: function () {
						var e = this;
						this.config.trigger.split(" ").forEach(function (n) {
							if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, t.proxy(e.toggle, e)); else if (n !== g.MANUAL) {
								var i = n === g.HOVER ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
									o = n === g.HOVER ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
								t(e.element).on(i, e.config.selector, t.proxy(e._enter, e)).on(o, e.config.selector, t.proxy(e._leave, e))
							}
						}), this.config.selector ? this.config = t.extend({}, this.config, {
							trigger: "manual",
							selector: ""
						}) : this._fixTitle()
					}
				}, {
					key: "_fixTitle", value: function () {
						var t = typeof this.element.getAttribute("data-original-title");
						(this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
					}
				}, {
					key: "_enter", value: function (e, n) {
						var i = this.constructor.DATA_KEY;
						return (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? g.FOCUS : g.HOVER] = !0), t(n.getTipElement()).hasClass(p.IN) || n._hoverState === h.IN ? void(n._hoverState = h.IN) : (clearTimeout(n._timeout), n._hoverState = h.IN, n.config.delay && n.config.delay.show ? void(n._timeout = setTimeout(function () {
							n._hoverState === h.IN && n.show()
						}, n.config.delay.show)) : void n.show())
					}
				}, {
					key: "_leave", value: function (e, n) {
						var i = this.constructor.DATA_KEY;
						if ((n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? g.FOCUS : g.HOVER] = !1), !n._isWithActiveTrigger()) return clearTimeout(n._timeout), n._hoverState = h.OUT, n.config.delay && n.config.delay.hide ? void(n._timeout = setTimeout(function () {
							n._hoverState === h.OUT && n.hide()
						}, n.config.delay.hide)) : void n.hide()
					}
				}, {
					key: "_isWithActiveTrigger", value: function () {
						for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
						return !1
					}
				}, {
					key: "_getConfig", value: function (n) {
						return (n = t.extend({}, this.constructor.Default, t(this.element).data(), n)).delay && "number" == typeof n.delay && (n.delay = {
							show: n.delay,
							hide: n.delay
						}), s.typeCheckConfig(e, n, this.constructor.DefaultType), n
					}
				}, {
					key: "_getDelegateConfig", value: function () {
						var t = {};
						if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
						return t
					}
				}], [{
					key: "_jQueryInterface", value: function (e) {
						return this.each(function () {
							var n = t(this).data(i), o = "object" == typeof e ? e : null;
							if ((n || !/destroy|hide/.test(e)) && (n || (n = new a(this, o), t(this).data(i, n)), "string" == typeof e)) {
								if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
								n[e]()
							}
						})
					}
				}, {
					key: "VERSION", get: function () {
						return "4.0.0-alpha.3"
					}
				}, {
					key: "Default", get: function () {
						return l
					}
				}, {
					key: "NAME", get: function () {
						return e
					}
				}, {
					key: "DATA_KEY", get: function () {
						return i
					}
				}, {
					key: "Event", get: function () {
						return d
					}
				}, {
					key: "EVENT_KEY", get: function () {
						return r
					}
				}, {
					key: "DefaultType", get: function () {
						return c
					}
				}]), a
			}();
		return t.fn[e] = v._jQueryInterface, t.fn[e].Constructor = v, t.fn[e].noConflict = function () {
			return t.fn[e] = a, v._jQueryInterface
		}, v
	}(jQuery));
	!function (t) {
		var s = "popover", a = "bs.popover", l = "." + a, c = t.fn[s], u = t.extend({}, r.Default, {
				placement: "right",
				trigger: "click",
				content: "",
				template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
			}), h = t.extend({}, r.DefaultType, {content: "(string|element|function)"}), d = {FADE: "fade", IN: "in"},
			p = {TITLE: ".popover-title", CONTENT: ".popover-content", ARROW: ".popover-arrow"}, f = {
				HIDE: "hide" + l,
				HIDDEN: "hidden" + l,
				SHOW: "show" + l,
				SHOWN: "shown" + l,
				INSERTED: "inserted" + l,
				CLICK: "click" + l,
				FOCUSIN: "focusin" + l,
				FOCUSOUT: "focusout" + l,
				MOUSEENTER: "mouseenter" + l,
				MOUSELEAVE: "mouseleave" + l
			}, m = function (r) {
				function c() {
					n(this, c), i(Object.getPrototypeOf(c.prototype), "constructor", this).apply(this, arguments)
				}

				return e(c, r), o(c, [{
					key: "isWithContent", value: function () {
						return this.getTitle() || this._getContent()
					}
				}, {
					key: "getTipElement", value: function () {
						return this.tip = this.tip || t(this.config.template)[0]
					}
				}, {
					key: "setContent", value: function () {
						var e = t(this.getTipElement());
						this.setElementContent(e.find(p.TITLE), this.getTitle()), this.setElementContent(e.find(p.CONTENT), this._getContent()), e.removeClass(d.FADE).removeClass(d.IN), this.cleanupTether()
					}
				}, {
					key: "_getContent", value: function () {
						return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
					}
				}], [{
					key: "_jQueryInterface", value: function (e) {
						return this.each(function () {
							var n = t(this).data(a), i = "object" == typeof e ? e : null;
							if ((n || !/destroy|hide/.test(e)) && (n || (n = new c(this, i), t(this).data(a, n)), "string" == typeof e)) {
								if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
								n[e]()
							}
						})
					}
				}, {
					key: "VERSION", get: function () {
						return "4.0.0-alpha.3"
					}
				}, {
					key: "Default", get: function () {
						return u
					}
				}, {
					key: "NAME", get: function () {
						return s
					}
				}, {
					key: "DATA_KEY", get: function () {
						return a
					}
				}, {
					key: "Event", get: function () {
						return f
					}
				}, {
					key: "EVENT_KEY", get: function () {
						return l
					}
				}, {
					key: "DefaultType", get: function () {
						return h
					}
				}]), c
			}(r);
		t.fn[s] = m._jQueryInterface, t.fn[s].Constructor = m, t.fn[s].noConflict = function () {
			return t.fn[s] = c, m._jQueryInterface
		}
	}(jQuery)
}(jQuery), function (t, e) {
	"function" == typeof define && define.amd ? define(["jquery"], function (t) {
		return e(t)
	}) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(0, function (t) {
	!function (t) {
		"use strict";

		function e(e) {
			var n = [{re: /[\xC0-\xC6]/g, ch: "A"}, {re: /[\xE0-\xE6]/g, ch: "a"}, {
				re: /[\xC8-\xCB]/g,
				ch: "E"
			}, {re: /[\xE8-\xEB]/g, ch: "e"}, {re: /[\xCC-\xCF]/g, ch: "I"}, {
				re: /[\xEC-\xEF]/g,
				ch: "i"
			}, {re: /[\xD2-\xD6]/g, ch: "O"}, {re: /[\xF2-\xF6]/g, ch: "o"}, {
				re: /[\xD9-\xDC]/g,
				ch: "U"
			}, {re: /[\xF9-\xFC]/g, ch: "u"}, {re: /[\xC7-\xE7]/g, ch: "c"}, {re: /[\xD1]/g, ch: "N"}, {
				re: /[\xF1]/g,
				ch: "n"
			}];
			return t.each(n, function () {
				e = e.replace(this.re, this.ch)
			}), e
		}

		function n(t) {
			var e = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;"},
				n = "(?:" + Object.keys(e).join("|") + ")", i = new RegExp(n), o = new RegExp(n, "g"),
				s = null == t ? "" : "" + t;
			return i.test(s) ? s.replace(o, function (t) {
				return e[t]
			}) : s
		}

		function i(e, n) {
			var i = arguments, s = e, r = n;
			[].shift.apply(i);
			var a, l = this.each(function () {
				var e = t(this);
				if (e.is("select")) {
					var n = e.data("selectpicker"), l = "object" == typeof s && s;
					if (n) {
						if (l) for (var c in l) l.hasOwnProperty(c) && (n.options[c] = l[c])
					} else {
						var u = t.extend({}, o.DEFAULTS, t.fn.selectpicker.defaults || {}, e.data(), l);
						u.template = t.extend({}, o.DEFAULTS.template, t.fn.selectpicker.defaults ? t.fn.selectpicker.defaults.template : {}, e.data().template, l.template), e.data("selectpicker", n = new o(this, u, r))
					}
					"string" == typeof s && (a = n[s] instanceof Function ? n[s].apply(n, i) : n.options[s])
				}
			});
			return void 0 !== a ? a : l
		}

		String.prototype.includes || function () {
			var t = {}.toString, e = function () {
				try {
					var t = {}, e = Object.defineProperty, n = e(t, t, t) && e
				} catch (t) {
				}
				return n
			}(), n = "".indexOf, i = function (e) {
				if (null == this) throw new TypeError;
				var i = String(this);
				if (e && "[object RegExp]" == t.call(e)) throw new TypeError;
				var o = i.length, s = String(e), r = s.length, a = arguments.length > 1 ? arguments[1] : void 0,
					l = a ? Number(a) : 0;
				return l != l && (l = 0), !(r + Math.min(Math.max(l, 0), o) > o) && -1 != n.call(i, s, l)
			};
			e ? e(String.prototype, "includes", {
				value: i,
				configurable: !0,
				writable: !0
			}) : String.prototype.includes = i
		}(), String.prototype.startsWith || function () {
			var t = function () {
				try {
					var t = {}, e = Object.defineProperty, n = e(t, t, t) && e
				} catch (t) {
				}
				return n
			}(), e = {}.toString, n = function (t) {
				if (null == this) throw new TypeError;
				var n = String(this);
				if (t && "[object RegExp]" == e.call(t)) throw new TypeError;
				var i = n.length, o = String(t), s = o.length, r = arguments.length > 1 ? arguments[1] : void 0,
					a = r ? Number(r) : 0;
				a != a && (a = 0);
				var l = Math.min(Math.max(a, 0), i);
				if (s + l > i) return !1;
				for (var c = -1; ++c < s;) if (n.charCodeAt(l + c) != o.charCodeAt(c)) return !1;
				return !0
			};
			t ? t(String.prototype, "startsWith", {
				value: n,
				configurable: !0,
				writable: !0
			}) : String.prototype.startsWith = n
		}(), Object.keys || (Object.keys = function (t, e, n) {
			n = [];
			for (e in t) n.hasOwnProperty.call(t, e) && n.push(e);
			return n
		}), t.fn.triggerNative = function (t) {
			var e, n = this[0];
			n.dispatchEvent ? ("function" == typeof Event ? e = new Event(t, {bubbles: !0}) : (e = document.createEvent("Event")).initEvent(t, !0, !1), n.dispatchEvent(e)) : (n.fireEvent && (e = document.createEventObject(), e.eventType = t, n.fireEvent("on" + t, e)), this.trigger(t))
		}, t.expr[":"].icontains = function (e, n, i) {
			var o = t(e);
			return (o.data("tokens") || o.text()).toUpperCase().includes(i[3].toUpperCase())
		}, t.expr[":"].ibegins = function (e, n, i) {
			var o = t(e);
			return (o.data("tokens") || o.text()).toUpperCase().startsWith(i[3].toUpperCase())
		}, t.expr[":"].aicontains = function (e, n, i) {
			var o = t(e);
			return (o.data("tokens") || o.data("normalizedText") || o.text()).toUpperCase().includes(i[3].toUpperCase())
		}, t.expr[":"].aibegins = function (e, n, i) {
			var o = t(e);
			return (o.data("tokens") || o.data("normalizedText") || o.text()).toUpperCase().startsWith(i[3].toUpperCase())
		};
		var o = function (e, n, i) {
			i && (i.stopPropagation(), i.preventDefault()), this.$element = t(e), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = n, null === this.options.title && (this.options.title = this.$element.attr("title")), this.val = o.prototype.val, this.render = o.prototype.render, this.refresh = o.prototype.refresh, this.setStyle = o.prototype.setStyle, this.selectAll = o.prototype.selectAll, this.deselectAll = o.prototype.deselectAll, this.destroy = o.prototype.destroy, this.remove = o.prototype.remove, this.show = o.prototype.show, this.hide = o.prototype.hide, this.init()
		};
		o.VERSION = "1.10.0", o.DEFAULTS = {
			noneSelectedText: "Nothing selected",
			noneResultsText: "No results matched {0}",
			countSelectedText: function (t, e) {
				return 1 == t ? "{0} item selected" : "{0} items selected"
			},
			maxOptionsText: function (t, e) {
				return [1 == t ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == e ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
			},
			selectAllText: "Select All",
			deselectAllText: "Deselect All",
			doneButton: !1,
			doneButtonText: "Close",
			multipleSeparator: ", ",
			styleBase: "btn",
			style: "btn-default",
			size: "auto",
			title: null,
			selectedTextFormat: "values",
			width: !1,
			container: !1,
			hideDisabled: !1,
			showSubtext: !1,
			showIcon: !0,
			showContent: !0,
			dropupAuto: !0,
			header: !1,
			liveSearch: !1,
			liveSearchPlaceholder: null,
			liveSearchNormalize: !1,
			liveSearchStyle: "contains",
			actionsBox: !1,
			iconBase: "glyphicon",
			tickIcon: "glyphicon-ok",
			showTick: !1,
			template: {caret: '<span class="caret"></span>'},
			maxOptions: !1,
			mobile: !1,
			selectOnTab: !1,
			dropdownAlignRight: !1
		}, o.prototype = {
			constructor: o, init: function () {
				var e = this, n = this.$element.attr("id");
				this.$element.addClass("bs-select-hidden"), this.liObj = {}, this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement).appendTo(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.$element.removeClass("bs-select-hidden"), this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right"), void 0 !== n && (this.$button.attr("data-id", n), t('label[for="' + n + '"]').click(function (t) {
					t.preventDefault(), e.$button.focus()
				})), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
					"hide.bs.dropdown": function (t) {
						e.$element.trigger("hide.bs.select", t)
					}, "hidden.bs.dropdown": function (t) {
						e.$element.trigger("hidden.bs.select", t)
					}, "show.bs.dropdown": function (t) {
						e.$element.trigger("show.bs.select", t)
					}, "shown.bs.dropdown": function (t) {
						e.$element.trigger("shown.bs.select", t)
					}
				}), e.$element[0].hasAttribute("required") && this.$element.on("invalid", function () {
					e.$button.addClass("bs-invalid").focus(), e.$element.on({
						"focus.bs.select": function () {
							e.$button.focus(), e.$element.off("focus.bs.select")
						}, "shown.bs.select": function () {
							e.$element.val(e.$element.val()).off("shown.bs.select")
						}, "rendered.bs.select": function () {
							this.validity.valid && e.$button.removeClass("bs-invalid"), e.$element.off("rendered.bs.select")
						}
					})
				}), setTimeout(function () {
					e.$element.trigger("loaded.bs.select")
				})
			}, createDropdown: function () {
				var e = this.multiple || this.options.showTick ? " show-tick" : "",
					i = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
					o = this.autofocus ? " autofocus" : "",
					s = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
					r = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + n(this.options.liveSearchPlaceholder) + '"') + "></div>" : "",
					a = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
					l = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : "",
					c = '<div class="btn-group bootstrap-select' + e + i + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + o + '><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">' + this.options.template.caret + '</span></button><div class="dropdown-menu open">' + s + r + a + '<ul class="dropdown-menu inner" role="menu"></ul>' + l + "</div></div>";
				return t(c)
			}, createView: function () {
				var t = this.createDropdown(), e = this.createLi();
				return t.find("ul")[0].innerHTML = e, t
			}, reloadLi: function () {
				this.destroyLi();
				var t = this.createLi();
				this.$menuInner[0].innerHTML = t
			}, destroyLi: function () {
				this.$menu.find("li").remove()
			}, createLi: function () {
				var i = this, o = [], s = 0, r = document.createElement("option"), a = -1, l = function (t, e, n, i) {
					return "<li" + (void 0 !== n & "" !== n ? ' class="' + n + '"' : "") + (void 0 !== e & null !== e ? ' data-original-index="' + e + '"' : "") + (void 0 !== i & null !== i ? 'data-optgroup="' + i + '"' : "") + ">" + t + "</li>"
				}, c = function (t, o, s, r) {
					return '<a tabindex="0"' + (void 0 !== o ? ' class="' + o + '"' : "") + (void 0 !== s ? ' style="' + s + '"' : "") + (i.options.liveSearchNormalize ? ' data-normalized-text="' + e(n(t)) + '"' : "") + (void 0 !== r || null !== r ? ' data-tokens="' + r + '"' : "") + ">" + t + '<span class="' + i.options.iconBase + " " + i.options.tickIcon + ' check-mark"></span></a>'
				};
				if (this.options.title && !this.multiple && (a--, !this.$element.find(".bs-title-option").length)) {
					var u = this.$element[0];
					r.className = "bs-title-option", r.appendChild(document.createTextNode(this.options.title)), r.value = "", u.insertBefore(r, u.firstChild), void 0 === t(u.options[u.selectedIndex]).attr("selected") && (r.selected = !0)
				}
				return this.$element.find("option").each(function (e) {
					var n = t(this);
					if (a++, !n.hasClass("bs-title-option")) {
						var r = this.className || "", u = this.style.cssText,
							h = n.data("content") ? n.data("content") : n.html(),
							d = n.data("tokens") ? n.data("tokens") : null,
							p = void 0 !== n.data("subtext") ? '<small class="text-muted">' + n.data("subtext") + "</small>" : "",
							f = void 0 !== n.data("icon") ? '<span class="' + i.options.iconBase + " " + n.data("icon") + '"></span> ' : "",
							m = "OPTGROUP" === this.parentNode.tagName,
							g = this.disabled || m && this.parentNode.disabled;
						if ("" !== f && g && (f = "<span>" + f + "</span>"), i.options.hideDisabled && g && !m) return void a--;
						if (n.data("content") || (h = f + '<span class="text">' + h + p + "</span>"), m && !0 !== n.data("divider")) {
							var v = " " + this.parentNode.className || "";
							if (0 === n.index()) {
								s += 1;
								var y = this.parentNode.label,
									b = void 0 !== n.parent().data("subtext") ? '<small class="text-muted">' + n.parent().data("subtext") + "</small>" : "";
								y = (n.parent().data("icon") ? '<span class="' + i.options.iconBase + " " + n.parent().data("icon") + '"></span> ' : "") + '<span class="text">' + y + b + "</span>", 0 !== e && o.length > 0 && (a++, o.push(l("", null, "divider", s + "div"))), a++, o.push(l(y, null, "dropdown-header" + v, s))
							}
							if (i.options.hideDisabled && g) return void a--;
							o.push(l(c(h, "opt " + r + v, u, d), e, "", s))
						} else !0 === n.data("divider") ? o.push(l("", e, "divider")) : !0 === n.data("hidden") ? o.push(l(c(h, r, u, d), e, "hidden is-hidden")) : (this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName && (a++, o.push(l("", null, "divider", s + "div"))), o.push(l(c(h, r, u, d), e)));
						i.liObj[e] = a
					}
				}), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), o.join("")
			}, findLis: function () {
				return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis
			}, render: function (e) {
				var n, i = this;
				!1 !== e && this.$element.find("option").each(function (t) {
					var e = i.findLis().eq(i.liObj[t]);
					i.setDisabled(t, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, e), i.setSelected(t, this.selected, e)
				}), this.tabIndex();
				var o = this.$element.find("option").map(function () {
					if (this.selected) {
						if (i.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled)) return;
						var e, n = t(this),
							o = n.data("icon") && i.options.showIcon ? '<i class="' + i.options.iconBase + " " + n.data("icon") + '"></i> ' : "";
						return e = i.options.showSubtext && n.data("subtext") && !i.multiple ? ' <small class="text-muted">' + n.data("subtext") + "</small>" : "", void 0 !== n.attr("title") ? n.attr("title") : n.data("content") && i.options.showContent ? n.data("content") : o + n.html() + e
					}
				}).toArray(), s = this.multiple ? o.join(this.options.multipleSeparator) : o[0];
				if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
					var r = this.options.selectedTextFormat.split(">");
					if (r.length > 1 && o.length > r[1] || 1 == r.length && o.length >= 2) {
						n = this.options.hideDisabled ? ", [disabled]" : "";
						var a = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + n).length;
						s = ("function" == typeof this.options.countSelectedText ? this.options.countSelectedText(o.length, a) : this.options.countSelectedText).replace("{0}", o.length.toString()).replace("{1}", a.toString())
					}
				}
				void 0 == this.options.title && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (s = this.options.title), s || (s = void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", t.trim(s.replace(/<[^>]*>?/g, ""))), this.$button.children(".filter-option").html(s), this.$element.trigger("rendered.bs.select")
			}, setStyle: function (t, e) {
				this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
				var n = t || this.options.style;
				"add" == e ? this.$button.addClass(n) : "remove" == e ? this.$button.removeClass(n) : (this.$button.removeClass(this.options.style), this.$button.addClass(n))
			}, liHeight: function (e) {
				if (e || !1 !== this.options.size && !this.sizeInfo) {
					var n = document.createElement("div"), i = document.createElement("div"),
						o = document.createElement("ul"), s = document.createElement("li"),
						r = document.createElement("li"), a = document.createElement("a"),
						l = document.createElement("span"),
						c = this.options.header && this.$menu.find(".popover-title").length > 0 ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
						u = this.options.liveSearch ? document.createElement("div") : null,
						h = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
						d = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
					if (l.className = "text", n.className = this.$menu[0].parentNode.className + " open", i.className = "dropdown-menu open", o.className = "dropdown-menu inner", s.className = "divider", l.appendChild(document.createTextNode("Inner text")), a.appendChild(l), r.appendChild(a), o.appendChild(r), o.appendChild(s), c && i.appendChild(c), u) {
						var p = document.createElement("span");
						u.className = "bs-searchbox", p.className = "form-control", u.appendChild(p), i.appendChild(u)
					}
					h && i.appendChild(h), i.appendChild(o), d && i.appendChild(d), n.appendChild(i), document.body.appendChild(n);
					var f = a.offsetHeight, m = c ? c.offsetHeight : 0, g = u ? u.offsetHeight : 0,
						v = h ? h.offsetHeight : 0, y = d ? d.offsetHeight : 0, b = t(s).outerHeight(!0),
						w = "function" == typeof getComputedStyle && getComputedStyle(i), x = w ? null : t(i),
						_ = parseInt(w ? w.paddingTop : x.css("paddingTop")) + parseInt(w ? w.paddingBottom : x.css("paddingBottom")) + parseInt(w ? w.borderTopWidth : x.css("borderTopWidth")) + parseInt(w ? w.borderBottomWidth : x.css("borderBottomWidth")),
						C = _ + parseInt(w ? w.marginTop : x.css("marginTop")) + parseInt(w ? w.marginBottom : x.css("marginBottom")) + 2;
					document.body.removeChild(n), this.sizeInfo = {
						liHeight: f,
						headerHeight: m,
						searchHeight: g,
						actionsHeight: v,
						doneButtonHeight: y,
						dividerHeight: b,
						menuPadding: _,
						menuExtras: C
					}
				}
			}, setSize: function () {
				if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), !1 !== this.options.size) {
					var e, n, i, o, s = this, r = this.$menu, a = this.$menuInner, l = t(window),
						c = this.$newElement[0].offsetHeight, u = this.sizeInfo.liHeight,
						h = this.sizeInfo.headerHeight, d = this.sizeInfo.searchHeight, p = this.sizeInfo.actionsHeight,
						f = this.sizeInfo.doneButtonHeight, m = this.sizeInfo.dividerHeight,
						g = this.sizeInfo.menuPadding, v = this.sizeInfo.menuExtras,
						y = this.options.hideDisabled ? ".disabled" : "", b = function () {
							i = s.$newElement.offset().top - l.scrollTop(), o = l.height() - i - c
						};
					if (b(), "auto" === this.options.size) {
						var w = function () {
							var l, c = function (e, n) {
									return function (i) {
										return n ? i.classList ? i.classList.contains(e) : t(i).hasClass(e) : !(i.classList ? i.classList.contains(e) : t(i).hasClass(e))
									}
								}, m = s.$menuInner[0].getElementsByTagName("li"),
								y = Array.prototype.filter ? Array.prototype.filter.call(m, c("hidden", !1)) : s.$lis.not(".hidden"),
								w = Array.prototype.filter ? Array.prototype.filter.call(y, c("dropdown-header", !0)) : y.filter(".dropdown-header");
							b(), e = o - v, s.options.container ? (r.data("height") || r.data("height", r.height()), n = r.data("height")) : n = r.height(), s.options.dropupAuto && s.$newElement.toggleClass("dropup", i > o && n > e - v), s.$newElement.hasClass("dropup") && (e = i - v), l = y.length + w.length > 3 ? 3 * u + v - 2 : 0, r.css({
								"max-height": e + "px",
								overflow: "hidden",
								"min-height": l + h + d + p + f + "px"
							}), a.css({
								"max-height": e - h - d - p - f - g + "px",
								"overflow-y": "auto",
								"min-height": Math.max(l - g, 0) + "px"
							})
						};
						w(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", w), l.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", w)
					} else if (this.options.size && "auto" != this.options.size && this.$lis.not(y).length > this.options.size) {
						var x = this.$lis.not(".divider").not(y).children().slice(0, this.options.size).last().parent().index(),
							_ = this.$lis.slice(0, x + 1).filter(".divider").length;
						e = u * this.options.size + _ * m + g, s.options.container ? (r.data("height") || r.data("height", r.height()), n = r.data("height")) : n = r.height(), s.options.dropupAuto && this.$newElement.toggleClass("dropup", i > o && n > e - v), r.css({
							"max-height": e + h + d + p + f + "px",
							overflow: "hidden",
							"min-height": ""
						}), a.css({"max-height": e - g + "px", "overflow-y": "auto", "min-height": ""})
					}
				}
			}, setWidth: function () {
				if ("auto" === this.options.width) {
					this.$menu.css("min-width", "0");
					var t = this.$menu.parent().clone().appendTo("body"),
						e = this.options.container ? this.$newElement.clone().appendTo("body") : t,
						n = t.children(".dropdown-menu").outerWidth(),
						i = e.css("width", "auto").children("button").outerWidth();
					t.remove(), e.remove(), this.$newElement.css("width", Math.max(n, i) + "px")
				} else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
				this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
			}, selectPosition: function () {
				this.$bsContainer = t('<div class="bs-container" />');
				var e, n, i = this, o = function (t) {
					i.$bsContainer.addClass(t.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", t.hasClass("dropup")), e = t.offset(), n = t.hasClass("dropup") ? 0 : t[0].offsetHeight, i.$bsContainer.css({
						top: e.top + n,
						left: e.left,
						width: t[0].offsetWidth
					})
				};
				this.$button.on("click", function () {
					var e = t(this);
					i.isDisabled() || (o(i.$newElement), i.$bsContainer.appendTo(i.options.container).toggleClass("open", !e.hasClass("open")).append(i.$menu))
				}), t(window).on("resize scroll", function () {
					o(i.$newElement)
				}), this.$element.on("hide.bs.select", function () {
					i.$menu.data("height", i.$menu.height()), i.$bsContainer.detach()
				})
			}, setSelected: function (t, e, n) {
				n || (n = this.findLis().eq(this.liObj[t])), n.toggleClass("selected", e)
			}, setDisabled: function (t, e, n) {
				n || (n = this.findLis().eq(this.liObj[t])), e ? n.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1) : n.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0)
			}, isDisabled: function () {
				return this.$element[0].disabled
			}, checkDisabled: function () {
				var t = this;
				this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled")), -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.click(function () {
					return !t.isDisabled()
				})
			}, tabIndex: function () {
				this.$element.data("tabindex") !== this.$element.attr("tabindex") && -98 !== this.$element.attr("tabindex") && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98)
			}, clickListener: function () {
				var e = this, n = t(document);
				this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function (t) {
					t.stopPropagation()
				}), n.data("spaceSelect", !1), this.$button.on("keyup", function (t) {
					/(32)/.test(t.keyCode.toString(10)) && n.data("spaceSelect") && (t.preventDefault(), n.data("spaceSelect", !1))
				}), this.$button.on("click", function () {
					e.setSize()
				}), this.$element.on("shown.bs.select", function () {
					if (e.options.liveSearch || e.multiple) {
						if (!e.multiple) {
							var t = e.liObj[e.$element[0].selectedIndex];
							if ("number" != typeof t || !1 === e.options.size) return;
							var n = e.$lis.eq(t)[0].offsetTop - e.$menuInner[0].offsetTop;
							n = n - e.$menuInner[0].offsetHeight / 2 + e.sizeInfo.liHeight / 2, e.$menuInner[0].scrollTop = n
						}
					} else e.$menuInner.find(".selected a").focus()
				}), this.$menuInner.on("click", "li a", function (n) {
					var i = t(this), o = i.parent().data("originalIndex"), s = e.$element.val(),
						r = e.$element.prop("selectedIndex");
					if (e.multiple && n.stopPropagation(), n.preventDefault(), !e.isDisabled() && !i.parent().hasClass("disabled")) {
						var a = e.$element.find("option"), l = a.eq(o), c = l.prop("selected"),
							u = l.parent("optgroup"), h = e.options.maxOptions, d = u.data("maxOptions") || !1;
						if (e.multiple) {
							if (l.prop("selected", !c), e.setSelected(o, !c), i.blur(), !1 !== h || !1 !== d) {
								var p = h < a.filter(":selected").length, f = d < u.find("option:selected").length;
								if (h && p || d && f) if (h && 1 == h) a.prop("selected", !1), l.prop("selected", !0), e.$menuInner.find(".selected").removeClass("selected"), e.setSelected(o, !0); else if (d && 1 == d) {
									u.find("option:selected").prop("selected", !1), l.prop("selected", !0);
									var m = i.parent().data("optgroup");
									e.$menuInner.find('[data-optgroup="' + m + '"]').removeClass("selected"), e.setSelected(o, !0)
								} else {
									var g = "function" == typeof e.options.maxOptionsText ? e.options.maxOptionsText(h, d) : e.options.maxOptionsText,
										v = g[0].replace("{n}", h), y = g[1].replace("{n}", d),
										b = t('<div class="notify"></div>');
									g[2] && (v = v.replace("{var}", g[2][h > 1 ? 0 : 1]), y = y.replace("{var}", g[2][d > 1 ? 0 : 1])), l.prop("selected", !1), e.$menu.append(b), h && p && (b.append(t("<div>" + v + "</div>")), e.$element.trigger("maxReached.bs.select")), d && f && (b.append(t("<div>" + y + "</div>")), e.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function () {
										e.setSelected(o, !1)
									}, 10), b.delay(750).fadeOut(300, function () {
										t(this).remove()
									})
								}
							}
						} else a.prop("selected", !1), l.prop("selected", !0), e.$menuInner.find(".selected").removeClass("selected"), e.setSelected(o, !0);
						e.multiple ? e.options.liveSearch && e.$searchbox.focus() : e.$button.focus(), (s != e.$element.val() && e.multiple || r != e.$element.prop("selectedIndex") && !e.multiple) && e.$element.trigger("changed.bs.select", [o, l.prop("selected"), c]).triggerNative("change")
					}
				}), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function (n) {
					n.currentTarget == this && (n.preventDefault(), n.stopPropagation(), e.options.liveSearch && !t(n.target).hasClass("close") ? e.$searchbox.focus() : e.$button.focus())
				}), this.$menuInner.on("click", ".divider, .dropdown-header", function (t) {
					t.preventDefault(), t.stopPropagation(), e.options.liveSearch ? e.$searchbox.focus() : e.$button.focus()
				}), this.$menu.on("click", ".popover-title .close", function () {
					e.$button.click()
				}), this.$searchbox.on("click", function (t) {
					t.stopPropagation()
				}), this.$menu.on("click", ".actions-btn", function (n) {
					e.options.liveSearch ? e.$searchbox.focus() : e.$button.focus(), n.preventDefault(), n.stopPropagation(), t(this).hasClass("bs-select-all") ? e.selectAll() : e.deselectAll()
				}), this.$element.change(function () {
					e.render(!1)
				})
			}, liveSearchListener: function () {
				var i = this, o = t('<li class="no-results"></li>');
				this.$button.on("click.dropdown.data-api touchstart.dropdown.data-api", function () {
					i.$menuInner.find(".active").removeClass("active"), i.$searchbox.val() && (i.$searchbox.val(""), i.$lis.not(".is-hidden").removeClass("hidden"), o.parent().length && o.remove()), i.multiple || i.$menuInner.find(".selected").addClass("active"), setTimeout(function () {
						i.$searchbox.focus()
					}, 10)
				}), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function (t) {
					t.stopPropagation()
				}), this.$searchbox.on("input propertychange", function () {
					if (i.$searchbox.val()) {
						var s = i.$lis.not(".is-hidden").removeClass("hidden").children("a");
						(s = i.options.liveSearchNormalize ? s.not(":a" + i._searchStyle() + '("' + e(i.$searchbox.val()) + '")') : s.not(":" + i._searchStyle() + '("' + i.$searchbox.val() + '")')).parent().addClass("hidden"), i.$lis.filter(".dropdown-header").each(function () {
							var e = t(this), n = e.data("optgroup");
							0 === i.$lis.filter("[data-optgroup=" + n + "]").not(e).not(".hidden").length && (e.addClass("hidden"), i.$lis.filter("[data-optgroup=" + n + "div]").addClass("hidden"))
						});
						var r = i.$lis.not(".hidden");
						r.each(function (e) {
							var n = t(this);
							n.hasClass("divider") && (n.index() === r.first().index() || n.index() === r.last().index() || r.eq(e + 1).hasClass("divider")) && n.addClass("hidden")
						}), i.$lis.not(".hidden, .no-results").length ? o.parent().length && o.remove() : (o.parent().length && o.remove(), o.html(i.options.noneResultsText.replace("{0}", '"' + n(i.$searchbox.val()) + '"')).show(), i.$menuInner.append(o))
					} else i.$lis.not(".is-hidden").removeClass("hidden"), o.parent().length && o.remove();
					i.$lis.filter(".active").removeClass("active"), i.$searchbox.val() && i.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(), t(this).focus()
				})
			}, _searchStyle: function () {
				return {begins: "ibegins", startsWith: "ibegins"}[this.options.liveSearchStyle] || "icontains"
			}, val: function (t) {
				return void 0 !== t ? (this.$element.val(t), this.render(), this.$element) : this.$element.val()
			}, changeAll: function (e) {
				void 0 === e && (e = !0), this.findLis();
				for (var n = this.$element.find("option"), i = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").toggleClass("selected", e), o = i.length, s = [], r = 0; o > r; r++) {
					var a = i[r].getAttribute("data-original-index");
					s[s.length] = n.eq(a)[0]
				}
				t(s).prop("selected", e), this.render(!1), this.$element.trigger("changed.bs.select").triggerNative("change")
			}, selectAll: function () {
				return this.changeAll(!0)
			}, deselectAll: function () {
				return this.changeAll(!1)
			}, toggle: function (t) {
				(t = t || window.event) && t.stopPropagation(), this.$button.trigger("click")
			}, keydown: function (n) {
				var i, o, s, r, a, l, c, u, h, d = t(this), p = d.is("input") ? d.parent().parent() : d.parent(),
					f = p.data("this"), m = ":not(.disabled, .hidden, .dropdown-header, .divider)", g = {
						32: " ",
						48: "0",
						49: "1",
						50: "2",
						51: "3",
						52: "4",
						53: "5",
						54: "6",
						55: "7",
						56: "8",
						57: "9",
						59: ";",
						65: "a",
						66: "b",
						67: "c",
						68: "d",
						69: "e",
						70: "f",
						71: "g",
						72: "h",
						73: "i",
						74: "j",
						75: "k",
						76: "l",
						77: "m",
						78: "n",
						79: "o",
						80: "p",
						81: "q",
						82: "r",
						83: "s",
						84: "t",
						85: "u",
						86: "v",
						87: "w",
						88: "x",
						89: "y",
						90: "z",
						96: "0",
						97: "1",
						98: "2",
						99: "3",
						100: "4",
						101: "5",
						102: "6",
						103: "7",
						104: "8",
						105: "9"
					};
				if (f.options.liveSearch && (p = d.parent().parent()), f.options.container && (p = f.$menu), i = t("[role=menu] li", p), !(h = f.$newElement.hasClass("open")) && (n.keyCode >= 48 && n.keyCode <= 57 || n.keyCode >= 96 && n.keyCode <= 105 || n.keyCode >= 65 && n.keyCode <= 90) && (f.options.container ? f.$button.trigger("click") : (f.setSize(), f.$menu.parent().addClass("open"), h = !0), f.$searchbox.focus()), f.options.liveSearch && (/(^9$|27)/.test(n.keyCode.toString(10)) && h && 0 === f.$menu.find(".active").length && (n.preventDefault(), f.$menu.parent().removeClass("open"), f.options.container && f.$newElement.removeClass("open"), f.$button.focus()), i = t("[role=menu] li" + m, p), d.val() || /(38|40)/.test(n.keyCode.toString(10)) || 0 === i.filter(".active").length && (i = f.$menuInner.find("li"), i = f.options.liveSearchNormalize ? i.filter(":a" + f._searchStyle() + "(" + e(g[n.keyCode]) + ")") : i.filter(":" + f._searchStyle() + "(" + g[n.keyCode] + ")"))), i.length) {
					if (/(38|40)/.test(n.keyCode.toString(10))) o = i.index(i.find("a").filter(":focus").parent()), r = i.filter(m).first().index(), a = i.filter(m).last().index(), s = i.eq(o).nextAll(m).eq(0).index(), l = i.eq(o).prevAll(m).eq(0).index(), c = i.eq(s).prevAll(m).eq(0).index(), f.options.liveSearch && (i.each(function (e) {
						t(this).hasClass("disabled") || t(this).data("index", e)
					}), o = i.index(i.filter(".active")), r = i.first().data("index"), a = i.last().data("index"), s = i.eq(o).nextAll().eq(0).data("index"), l = i.eq(o).prevAll().eq(0).data("index"), c = i.eq(s).prevAll().eq(0).data("index")), u = d.data("prevIndex"), 38 == n.keyCode ? (f.options.liveSearch && o--, o != c && o > l && (o = l), r > o && (o = r), o == u && (o = a)) : 40 == n.keyCode && (f.options.liveSearch && o++, -1 == o && (o = 0), o != c && s > o && (o = s), o > a && (o = a), o == u && (o = r)), d.data("prevIndex", o), f.options.liveSearch ? (n.preventDefault(), d.hasClass("dropdown-toggle") || (i.removeClass("active").eq(o).addClass("active").children("a").focus(), d.focus())) : i.eq(o).children("a").focus(); else if (!d.is("input")) {
						var v, y = [];
						i.each(function () {
							t(this).hasClass("disabled") || t.trim(t(this).children("a").text().toLowerCase()).substring(0, 1) == g[n.keyCode] && y.push(t(this).index())
						}), v = t(document).data("keycount"), v++, t(document).data("keycount", v), t.trim(t(":focus").text().toLowerCase()).substring(0, 1) != g[n.keyCode] ? (v = 1, t(document).data("keycount", v)) : v >= y.length && (t(document).data("keycount", 0), v > y.length && (v = 1)), i.eq(y[v - 1]).children("a").focus()
					}
					if ((/(13|32)/.test(n.keyCode.toString(10)) || /(^9$)/.test(n.keyCode.toString(10)) && f.options.selectOnTab) && h) {
						if (/(32)/.test(n.keyCode.toString(10)) || n.preventDefault(), f.options.liveSearch) /(32)/.test(n.keyCode.toString(10)) || (f.$menuInner.find(".active a").click(), d.focus()); else {
							var b = t(":focus");
							b.click(), b.focus(), n.preventDefault(), t(document).data("spaceSelect", !0)
						}
						t(document).data("keycount", 0)
					}
					(/(^9$|27)/.test(n.keyCode.toString(10)) && h && (f.multiple || f.options.liveSearch) || /(27)/.test(n.keyCode.toString(10)) && !h) && (f.$menu.parent().removeClass("open"), f.options.container && f.$newElement.removeClass("open"), f.$button.focus())
				}
			}, mobile: function () {
				this.$element.addClass("mobile-device")
			}, refresh: function () {
				this.$lis = null, this.liObj = {}, this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(!0), this.setStyle(), this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), this.$element.trigger("refreshed.bs.select")
			}, hide: function () {
				this.$newElement.hide()
			}, show: function () {
				this.$newElement.show()
			}, remove: function () {
				this.$newElement.remove(), this.$element.remove()
			}, destroy: function () {
				this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")
			}
		};
		var s = t.fn.selectpicker;
		t.fn.selectpicker = i, t.fn.selectpicker.Constructor = o, t.fn.selectpicker.noConflict = function () {
			return t.fn.selectpicker = s, this
		}, t(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', o.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', function (t) {
			t.stopPropagation()
		}), t(window).on("load.bs.select.data-api", function () {
			t(".selectpicker").each(function () {
				var e = t(this);
				i.call(e, e.data())
			})
		})
	}(t)
}), function (t) {
	var e = function (t) {
		return t.split("").reverse().join("")
	}, n = {
		numberStep: function (e, n) {
			var i = Math.floor(e);
			t(n.elem).text(i)
		}
	}, i = function (t) {
		var e = t.elem;
		e.nodeType && e.parentNode && ((e = e._animateNumberSetter) || (e = n.numberStep), e(t.now, t))
	};
	t.Tween && t.Tween.propHooks ? t.Tween.propHooks.number = {set: i} : t.fx.step.number = i, t.animateNumber = {
		numberStepFactories: {
			append: function (e) {
				return function (n, i) {
					var o = Math.floor(n);
					t(i.elem).prop("number", n).text(o + e)
				}
			}, separator: function (n, i, o) {
				return n = n || " ", i = i || 3, o = o || "", function (s, r) {
					var a = Math.floor(s).toString(), l = t(r.elem);
					if (a.length > i) {
						for (var c, u, h, d = a, p = i, f = d.split("").reverse(), a = [], m = 0, g = Math.ceil(d.length / p); m < g; m++) {
							for (c = "", h = 0; h < p && (u = m * p + h) !== d.length; h++) c += f[u];
							a.push(c)
						}
						d = a.length - 1, p = e(a[d]), a[d] = e(parseInt(p, 10).toString()), a = a.join(n), a = e(a)
					}
					l.prop("number", s).text(a + o)
				}
			}
		}
	}, t.fn.animateNumber = function () {
		for (var e = arguments[0], i = t.extend({}, n, e), o = t(this), s = [i], r = 1, a = arguments.length; r < a; r++) s.push(arguments[r]);
		if (e.numberStep) {
			var l = this.each(function () {
				this._animateNumberSetter = e.numberStep
			}), c = i.complete;
			i.complete = function () {
				l.each(function () {
					delete this._animateNumberSetter
				}), c && c.apply(this, arguments)
			}
		}
		return o.animate.apply(o, s)
	}
}(jQuery), function (t, e, n, i) {
	function o(e, n) {
		this.settings = null, this.options = t.extend({}, o.Defaults, n), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {start: null, current: null},
			direction: null
		}, this._states = {
			current: {},
			tags: {initializing: ["busy"], animating: ["busy"], dragging: ["interacting"]}
		}, t.each(["onResize", "onThrottledResize"], t.proxy(function (e, n) {
			this._handlers[n] = t.proxy(this[n], this)
		}, this)), t.each(o.Plugins, t.proxy(function (t, e) {
			this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
		}, this)), t.each(o.Workers, t.proxy(function (e, n) {
			this._pipe.push({filter: n.filter, run: t.proxy(n.run, this)})
		}, this)), this.setup(), this.initialize()
	}

	o.Defaults = {
		items: 3,
		loop: !1,
		center: !1,
		rewind: !1,
		mouseDrag: !0,
		touchDrag: !0,
		pullDrag: !0,
		freeDrag: !1,
		margin: 0,
		stagePadding: 0,
		merge: !1,
		mergeFit: !0,
		autoWidth: !1,
		startPosition: 0,
		rtl: !1,
		smartSpeed: 250,
		fluidSpeed: !1,
		dragEndSpeed: !1,
		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: e,
		fallbackEasing: "swing",
		info: !1,
		nestedItemSelector: !1,
		itemElement: "div",
		stageElement: "div",
		refreshClass: "owl-refresh",
		loadedClass: "owl-loaded",
		loadingClass: "owl-loading",
		rtlClass: "owl-rtl",
		responsiveClass: "owl-responsive",
		dragClass: "owl-drag",
		itemClass: "owl-item",
		stageClass: "owl-stage",
		stageOuterClass: "owl-stage-outer",
		grabClass: "owl-grab"
	}, o.Width = {Default: "default", Inner: "inner", Outer: "outer"}, o.Type = {
		Event: "event",
		State: "state"
	}, o.Plugins = {}, o.Workers = [{
		filter: ["width", "settings"], run: function () {
			this._width = this.$element.width()
		}
	}, {
		filter: ["width", "items", "settings"], run: function (t) {
			t.current = this._items && this._items[this.relative(this._current)]
		}
	}, {
		filter: ["items", "settings"], run: function () {
			this.$stage.children(".cloned").remove()
		}
	}, {
		filter: ["width", "items", "settings"], run: function (t) {
			var e = this.settings.margin || "", n = !this.settings.autoWidth, i = this.settings.rtl,
				o = {width: "auto", "margin-left": i ? e : "", "margin-right": i ? "" : e};
			!n && this.$stage.children().css(o), t.css = o
		}
	}, {
		filter: ["width", "items", "settings"], run: function (t) {
			var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, n = null,
				i = this._items.length, o = !this.settings.autoWidth, s = [];
			for (t.items = {
				merge: !1,
				width: e
			}; i--;) n = this._mergers[i], n = this.settings.mergeFit && Math.min(n, this.settings.items) || n, t.items.merge = n > 1 || t.items.merge, s[i] = o ? e * n : this._items[i].width();
			this._widths = s
		}
	}, {
		filter: ["items", "settings"], run: function () {
			var e = [], n = this._items, i = this.settings, o = Math.max(2 * i.items, 4),
				s = 2 * Math.ceil(n.length / 2), r = i.loop && n.length ? i.rewind ? o : Math.max(o, s) : 0, a = "",
				l = "";
			for (r /= 2; r--;) e.push(this.normalize(e.length / 2, !0)), a += n[e[e.length - 1]][0].outerHTML, e.push(this.normalize(n.length - 1 - (e.length - 1) / 2, !0)), l = n[e[e.length - 1]][0].outerHTML + l;
			this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
		}
	}, {
		filter: ["width", "items", "settings"], run: function () {
			for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, n = -1, i = 0, o = 0, s = []; ++n < e;) i = s[n - 1] || 0, o = this._widths[this.relative(n)] + this.settings.margin, s.push(i + o * t);
			this._coordinates = s
		}
	}, {
		filter: ["width", "items", "settings"], run: function () {
			var t = this.settings.stagePadding, e = this._coordinates, n = {
				width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
				"padding-left": t || "",
				"padding-right": t || ""
			};
			this.$stage.css(n)
		}
	}, {
		filter: ["width", "items", "settings"], run: function (t) {
			var e = this._coordinates.length, n = !this.settings.autoWidth, i = this.$stage.children();
			if (n && t.items.merge) for (; e--;) t.css.width = this._widths[this.relative(e)], i.eq(e).css(t.css); else n && (t.css.width = t.items.width, i.css(t.css))
		}
	}, {
		filter: ["items"], run: function () {
			this._coordinates.length < 1 && this.$stage.removeAttr("style")
		}
	}, {
		filter: ["width", "items", "settings"], run: function (t) {
			t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
		}
	}, {
		filter: ["position"], run: function () {
			this.animate(this.coordinates(this._current))
		}
	}, {
		filter: ["width", "position", "items", "settings"], run: function () {
			var t, e, n, i, o = this.settings.rtl ? 1 : -1, s = 2 * this.settings.stagePadding,
				r = this.coordinates(this.current()) + s, a = r + this.width() * o, l = [];
			for (n = 0, i = this._coordinates.length; i > n; n++) t = this._coordinates[n - 1] || 0, e = Math.abs(this._coordinates[n]) + s * o, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(n);
			this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
		}
	}], o.prototype.initialize = function () {
		if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
			var e, n, o;
			e = this.$element.find("img"), n = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : i, o = this.$element.children(n).width(), e.length && 0 >= o && this.preloadAutoWidthImages(e)
		}
		this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
	}, o.prototype.setup = function () {
		var e = this.viewport(), n = this.options.responsive, i = -1, o = null;
		n ? (t.each(n, function (t) {
			e >= t && t > i && (i = Number(t))
		}), "function" == typeof(o = t.extend({}, this.options, n[i])).stagePadding && (o.stagePadding = o.stagePadding()), delete o.responsive, o.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : o = t.extend({}, this.options), this.trigger("change", {
			property: {
				name: "settings",
				value: o
			}
		}), this._breakpoint = i, this.settings = o, this.invalidate("settings"), this.trigger("changed", {
			property: {
				name: "settings",
				value: this.settings
			}
		})
	}, o.prototype.optionsLogic = function () {
		this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
	}, o.prototype.prepare = function (e) {
		var n = this.trigger("prepare", {content: e});
		return n.data || (n.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {content: n.data}), n.data
	}, o.prototype.update = function () {
		for (var e = 0, n = this._pipe.length, i = t.proxy(function (t) {
			return this[t]
		}, this._invalidated), o = {}; n > e;) (this._invalidated.all || t.grep(this._pipe[e].filter, i).length > 0) && this._pipe[e].run(o), e++;
		this._invalidated = {}, !this.is("valid") && this.enter("valid")
	}, o.prototype.width = function (t) {
		switch (t = t || o.Width.Default) {
			case o.Width.Inner:
			case o.Width.Outer:
				return this._width;
			default:
				return this._width - 2 * this.settings.stagePadding + this.settings.margin
		}
	}, o.prototype.refresh = function () {
		this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
	}, o.prototype.onThrottledResize = function () {
		e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
	}, o.prototype.onResize = function () {
		return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
	}, o.prototype.registerEventHandlers = function () {
		t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
			return !1
		})), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
	}, o.prototype.onDragStart = function (e) {
		var i = null;
		3 !== e.which && (t.support.transform ? (i = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), i = {
			x: i[16 === i.length ? 12 : 4],
			y: i[16 === i.length ? 13 : 5]
		}) : (i = this.$stage.position(), i = {
			x: this.settings.rtl ? i.left + this.$stage.width() - this.width() + this.settings.margin : i.left,
			y: i.top
		}), this.is("animating") && (t.support.transform ? this.animate(i.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = i, this._drag.stage.current = i, this._drag.pointer = this.pointer(e), t(n).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(n).one("mousemove.owl.core touchmove.owl.core", t.proxy(function (e) {
			var i = this.difference(this._drag.pointer, this.pointer(e));
			t(n).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(i.x) < Math.abs(i.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
		}, this)))
	}, o.prototype.onDragMove = function (t) {
		var e = null, n = null, i = null, o = this.difference(this._drag.pointer, this.pointer(t)),
			s = this.difference(this._drag.stage.start, o);
		this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), n = this.coordinates(this.maximum() + 1) - e, s.x = ((s.x - e) % n + n) % n + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), i = this.settings.pullDrag ? -1 * o.x / 5 : 0, s.x = Math.max(Math.min(s.x, e + i), n + i)), this._drag.stage.current = s, this.animate(s.x))
	}, o.prototype.onDragEnd = function (e) {
		var i = this.difference(this._drag.pointer, this.pointer(e)), o = this._drag.stage.current,
			s = i.x > 0 ^ this.settings.rtl ? "left" : "right";
		t(n).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== i.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(o.x, 0 !== i.x ? s : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = s, (Math.abs(i.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
			return !1
		})), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
	}, o.prototype.closest = function (e, n) {
		var i = -1, o = this.width(), s = this.coordinates();
		return this.settings.freeDrag || t.each(s, t.proxy(function (t, r) {
			return "left" === n && e > r - 30 && r + 30 > e ? i = t : "right" === n && e > r - o - 30 && r - o + 30 > e ? i = t + 1 : this.op(e, "<", r) && this.op(e, ">", s[t + 1] || r - o) && (i = "left" === n ? t + 1 : t), -1 === i
		}, this)), this.settings.loop || (this.op(e, ">", s[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", s[this.maximum()]) && (i = e = this.maximum())), i
	}, o.prototype.animate = function (e) {
		var n = this.speed() > 0;
		this.is("animating") && this.onTransitionEnd(), n && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
			transform: "translate3d(" + e + "px,0px,0px)",
			transition: this.speed() / 1e3 + "s"
		}) : n ? this.$stage.animate({left: e + "px"}, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({left: e + "px"})
	}, o.prototype.is = function (t) {
		return this._states.current[t] && this._states.current[t] > 0
	}, o.prototype.current = function (t) {
		if (t === i) return this._current;
		if (0 === this._items.length) return i;
		if (t = this.normalize(t), this._current !== t) {
			var e = this.trigger("change", {property: {name: "position", value: t}});
			e.data !== i && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
				property: {
					name: "position",
					value: this._current
				}
			})
		}
		return this._current
	}, o.prototype.invalidate = function (e) {
		return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function (t, e) {
			return e
		})
	}, o.prototype.reset = function (t) {
		(t = this.normalize(t)) !== i && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
	}, o.prototype.normalize = function (t, e) {
		var n = this._items.length, o = e ? 0 : this._clones.length;
		return !this.isNumeric(t) || 1 > n ? t = i : (0 > t || t >= n + o) && (t = ((t - o / 2) % n + n) % n + o / 2), t
	}, o.prototype.relative = function (t) {
		return t -= this._clones.length / 2, this.normalize(t, !0)
	}, o.prototype.maximum = function (t) {
		var e, n, i, o = this.settings, s = this._coordinates.length;
		if (o.loop) s = this._clones.length / 2 + this._items.length - 1; else if (o.autoWidth || o.merge) {
			for (e = this._items.length, n = this._items[--e].width(), i = this.$element.width(); e-- && !((n += this._items[e].width() + this.settings.margin) > i);) ;
			s = e + 1
		} else s = o.center ? this._items.length - 1 : this._items.length - o.items;
		return t && (s -= this._clones.length / 2), Math.max(s, 0)
	}, o.prototype.minimum = function (t) {
		return t ? 0 : this._clones.length / 2
	}, o.prototype.items = function (t) {
		return t === i ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
	}, o.prototype.mergers = function (t) {
		return t === i ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
	}, o.prototype.clones = function (e) {
		var n = this._clones.length / 2, o = n + this._items.length, s = function (t) {
			return t % 2 == 0 ? o + t / 2 : n - (t + 1) / 2
		};
		return e === i ? t.map(this._clones, function (t, e) {
			return s(e)
		}) : t.map(this._clones, function (t, n) {
			return t === e ? s(n) : null
		})
	}, o.prototype.speed = function (t) {
		return t !== i && (this._speed = t), this._speed
	}, o.prototype.coordinates = function (e) {
		var n, o = 1, s = e - 1;
		return e === i ? t.map(this._coordinates, t.proxy(function (t, e) {
			return this.coordinates(e)
		}, this)) : (this.settings.center ? (this.settings.rtl && (o = -1, s = e + 1), n = this._coordinates[e], n += (this.width() - n + (this._coordinates[s] || 0)) / 2 * o) : n = this._coordinates[s] || 0, n = Math.ceil(n))
	}, o.prototype.duration = function (t, e, n) {
		return 0 === n ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(n || this.settings.smartSpeed)
	}, o.prototype.to = function (t, e) {
		var n = this.current(), i = null, o = t - this.relative(n), s = (o > 0) - (0 > o), r = this._items.length,
			a = this.minimum(), l = this.maximum();
		this.settings.loop ? (!this.settings.rewind && Math.abs(o) > r / 2 && (o += -1 * s * r), t = n + o, (i = ((t - a) % r + r) % r + a) !== t && l >= i - o && i - o > 0 && (n = i - o, t = i, this.reset(n))) : this.settings.rewind ? (l += 1, t = (t % l + l) % l) : t = Math.max(a, Math.min(l, t)), this.speed(this.duration(n, t, e)), this.current(t), this.$element.is(":visible") && this.update()
	}, o.prototype.next = function (t) {
		t = t || !1, this.to(this.relative(this.current()) + 1, t)
	}, o.prototype.prev = function (t) {
		t = t || !1, this.to(this.relative(this.current()) - 1, t)
	}, o.prototype.onTransitionEnd = function (t) {
		return (t === i || (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) === this.$stage.get(0))) && (this.leave("animating"), void this.trigger("translated"))
	}, o.prototype.viewport = function () {
		var i;
		if (this.options.responsiveBaseElement !== e) i = t(this.options.responsiveBaseElement).width(); else if (e.innerWidth) i = e.innerWidth; else {
			if (!n.documentElement || !n.documentElement.clientWidth) throw"Can not detect viewport width.";
			i = n.documentElement.clientWidth
		}
		return i
	}, o.prototype.replace = function (e) {
		this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function () {
			return 1 === this.nodeType
		}).each(t.proxy(function (t, e) {
			e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
		}, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
	}, o.prototype.add = function (e, n) {
		var o = this.relative(this._current);
		n = n === i ? this._items.length : this.normalize(n, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
			content: e,
			position: n
		}), e = this.prepare(e), 0 === this._items.length || n === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[n - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[n].before(e), this._items.splice(n, 0, e), this._mergers.splice(n, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[o] && this.reset(this._items[o].index()), this.invalidate("items"), this.trigger("added", {
			content: e,
			position: n
		})
	}, o.prototype.remove = function (t) {
		(t = this.normalize(t, !0)) !== i && (this.trigger("remove", {
			content: this._items[t],
			position: t
		}), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
			content: null,
			position: t
		}))
	}, o.prototype.preloadAutoWidthImages = function (e) {
		e.each(t.proxy(function (e, n) {
			this.enter("pre-loading"), n = t(n), t(new Image).one("load", t.proxy(function (t) {
				n.attr("src", t.target.src), n.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
			}, this)).attr("src", n.attr("src") || n.attr("data-src") || n.attr("data-src-retina"))
		}, this))
	}, o.prototype.destroy = function () {
		this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(n).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize));
		for (var i in this._plugins) this._plugins[i].destroy();
		this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
	}, o.prototype.op = function (t, e, n) {
		var i = this.settings.rtl;
		switch (e) {
			case"<":
				return i ? t > n : n > t;
			case">":
				return i ? n > t : t > n;
			case">=":
				return i ? n >= t : t >= n;
			case"<=":
				return i ? t >= n : n >= t
		}
	}, o.prototype.on = function (t, e, n, i) {
		t.addEventListener ? t.addEventListener(e, n, i) : t.attachEvent && t.attachEvent("on" + e, n)
	}, o.prototype.off = function (t, e, n, i) {
		t.removeEventListener ? t.removeEventListener(e, n, i) : t.detachEvent && t.detachEvent("on" + e, n)
	}, o.prototype.trigger = function (e, n, i, s, r) {
		var a = {item: {count: this._items.length, index: this.current()}},
			l = t.camelCase(t.grep(["on", e, i], function (t) {
				return t
			}).join("-").toLowerCase()),
			c = t.Event([e, "owl", i || "carousel"].join(".").toLowerCase(), t.extend({relatedTarget: this}, a, n));
		return this._supress[e] || (t.each(this._plugins, function (t, e) {
			e.onTrigger && e.onTrigger(c)
		}), this.register({
			type: o.Type.Event,
			name: e
		}), this.$element.trigger(c), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)), c
	}, o.prototype.enter = function (e) {
		t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
			this._states.current[e] === i && (this._states.current[e] = 0), this._states.current[e]++
		}, this))
	}, o.prototype.leave = function (e) {
		t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
			this._states.current[e]--
		}, this))
	}, o.prototype.register = function (e) {
		if (e.type === o.Type.Event) {
			if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
				var n = t.event.special[e.name]._default;
				t.event.special[e.name]._default = function (t) {
					return !n || !n.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : n.apply(this, arguments)
				}, t.event.special[e.name].owl = !0
			}
		} else e.type === o.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function (n, i) {
			return t.inArray(n, this._states.tags[e.name]) === i
		}, this)))
	}, o.prototype.suppress = function (e) {
		t.each(e, t.proxy(function (t, e) {
			this._supress[e] = !0
		}, this))
	}, o.prototype.release = function (e) {
		t.each(e, t.proxy(function (t, e) {
			delete this._supress[e]
		}, this))
	}, o.prototype.pointer = function (t) {
		var n = {x: null, y: null};
		return t = t.originalEvent || t || e.event, (t = t.touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (n.x = t.pageX, n.y = t.pageY) : (n.x = t.clientX, n.y = t.clientY), n
	}, o.prototype.isNumeric = function (t) {
		return !isNaN(parseFloat(t))
	}, o.prototype.difference = function (t, e) {
		return {x: t.x - e.x, y: t.y - e.y}
	}, t.fn.owlCarousel = function (e) {
		var n = Array.prototype.slice.call(arguments, 1);
		return this.each(function () {
			var i = t(this), s = i.data("owl.carousel");
			s || (s = new o(this, "object" == typeof e && e), i.data("owl.carousel", s), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (e, n) {
				s.register({
					type: o.Type.Event,
					name: n
				}), s.$element.on(n + ".owl.carousel.core", t.proxy(function (t) {
					t.namespace && t.relatedTarget !== this && (this.suppress([n]), s[n].apply(this, [].slice.call(arguments, 1)), this.release([n]))
				}, s))
			})), "string" == typeof e && "_" !== e.charAt(0) && s[e].apply(s, n)
		})
	}, t.fn.owlCarousel.Constructor = o
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
	var o = function (e) {
		this._core = e, this._interval = null, this._visible = null, this._handlers = {
			"initialized.owl.carousel": t.proxy(function (t) {
				t.namespace && this._core.settings.autoRefresh && this.watch()
			}, this)
		}, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	o.Defaults = {autoRefresh: !0, autoRefreshInterval: 500}, o.prototype.watch = function () {
		this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
	}, o.prototype.refresh = function () {
		this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
	}, o.prototype.destroy = function () {
		var t, n;
		e.clearInterval(this._interval);
		for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
		for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = o
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
	var o = function (e) {
		this._core = e, this._loaded = [], this._handlers = {
			"initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function (e) {
				if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) for (var n = this._core.settings, i = n.center && Math.ceil(n.items / 2) || n.items, o = n.center && -1 * i || 0, s = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + o, r = this._core.clones().length, a = t.proxy(function (t, e) {
					this.load(e)
				}, this); o++ < i;) this.load(r / 2 + this._core.relative(s)), r && t.each(this._core.clones(this._core.relative(s)), a), s++
			}, this)
		}, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	o.Defaults = {lazyLoad: !1}, o.prototype.load = function (n) {
		var i = this._core.$stage.children().eq(n), o = i && i.find(".owl-lazy");
		!o || t.inArray(i.get(0), this._loaded) > -1 || (o.each(t.proxy(function (n, i) {
			var o, s = t(i), r = e.devicePixelRatio > 1 && s.attr("data-src-retina") || s.attr("data-src");
			this._core.trigger("load", {
				element: s,
				url: r
			}, "lazy"), s.is("img") ? s.one("load.owl.lazy", t.proxy(function () {
				s.css("opacity", 1), this._core.trigger("loaded", {element: s, url: r}, "lazy")
			}, this)).attr("src", r) : (o = new Image, o.onload = t.proxy(function () {
				s.css({"background-image": "url(" + r + ")", opacity: "1"}), this._core.trigger("loaded", {
					element: s,
					url: r
				}, "lazy")
			}, this), o.src = r)
		}, this)), this._loaded.push(i.get(0)))
	}, o.prototype.destroy = function () {
		var t, e;
		for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
		for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.Lazy = o
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
	var o = function (e) {
		this._core = e, this._handlers = {
			"initialized.owl.carousel refreshed.owl.carousel": t.proxy(function (t) {
				t.namespace && this._core.settings.autoHeight && this.update()
			}, this), "changed.owl.carousel": t.proxy(function (t) {
				t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
			}, this), "loaded.owl.lazy": t.proxy(function (t) {
				t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
			}, this)
		}, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	o.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, o.prototype.update = function () {
		var e = this._core._current, n = e + this._core.settings.items,
			i = this._core.$stage.children().toArray().slice(e, n), o = [], s = 0;
		t.each(i, function (e, n) {
			o.push(t(n).height())
		}), s = Math.max.apply(null, o), this._core.$stage.parent().height(s).addClass(this._core.settings.autoHeightClass)
	}, o.prototype.destroy = function () {
		var t, e;
		for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
		for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = o
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
	var o = function (e) {
		this._core = e, this._videos = {}, this._playing = null, this._handlers = {
			"initialized.owl.carousel": t.proxy(function (t) {
				t.namespace && this._core.register({type: "state", name: "playing", tags: ["interacting"]})
			}, this), "resize.owl.carousel": t.proxy(function (t) {
				t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
			}, this), "refreshed.owl.carousel": t.proxy(function (t) {
				t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
			}, this), "changed.owl.carousel": t.proxy(function (t) {
				t.namespace && "position" === t.property.name && this._playing && this.stop()
			}, this), "prepared.owl.carousel": t.proxy(function (e) {
				if (e.namespace) {
					var n = t(e.content).find(".owl-video");
					n.length && (n.css("display", "none"), this.fetch(n, t(e.content)))
				}
			}, this)
		}, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function (t) {
			this.play(t)
		}, this))
	};
	o.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, o.prototype.fetch = function (t, e) {
		var n = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
			i = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
			o = t.attr("data-width") || this._core.settings.videoWidth,
			s = t.attr("data-height") || this._core.settings.videoHeight, r = t.attr("href");
		if (!r) throw new Error("Missing video URL.");
		if ((i = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) n = "youtube"; else if (i[3].indexOf("vimeo") > -1) n = "vimeo"; else {
			if (!(i[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
			n = "vzaar"
		}
		i = i[6], this._videos[r] = {
			type: n,
			id: i,
			width: o,
			height: s
		}, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
	}, o.prototype.thumbnail = function (e, n) {
		var i, o, s, r = n.width && n.height ? 'style="width:' + n.width + "px;height:" + n.height + 'px;"' : "",
			a = e.find("img"), l = "src", c = "", u = this._core.settings, h = function (t) {
				o = '<div class="owl-video-play-icon"></div>', i = u.lazyLoad ? '<div class="owl-video-tn ' + c + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(i), e.after(o)
			};
		return e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (l = "data-src", c = "owl-lazy"), a.length ? (h(a.attr(l)), a.remove(), !1) : void("youtube" === n.type ? (s = "//img.youtube.com/vi/" + n.id + "/hqdefault.jpg", h(s)) : "vimeo" === n.type ? t.ajax({
			type: "GET",
			url: "//vimeo.com/api/v2/video/" + n.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function (t) {
				s = t[0].thumbnail_large, h(s)
			}
		}) : "vzaar" === n.type && t.ajax({
			type: "GET",
			url: "//vzaar.com/api/videos/" + n.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function (t) {
				s = t.framegrab_url, h(s)
			}
		}))
	}, o.prototype.stop = function () {
		this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
	}, o.prototype.play = function (e) {
		var n, i = t(e.target).closest("." + this._core.settings.itemClass), o = this._videos[i.attr("data-video")],
			s = o.width || "100%", r = o.height || this._core.$stage.height();
		this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), i = this._core.items(this._core.relative(i.index())), this._core.reset(i.index()), "youtube" === o.type ? n = '<iframe width="' + s + '" height="' + r + '" src="//www.youtube.com/embed/' + o.id + "?autoplay=1&v=" + o.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === o.type ? n = '<iframe src="//player.vimeo.com/video/' + o.id + '?autoplay=1" width="' + s + '" height="' + r + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === o.type && (n = '<iframe frameborder="0"height="' + r + '"width="' + s + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + o.id + '/player?autoplay=true"></iframe>'), t('<div class="owl-video-frame">' + n + "</div>").insertAfter(i.find(".owl-video")), this._playing = i.addClass("owl-video-playing"))
	}, o.prototype.isInFullScreen = function () {
		var e = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement;
		return e && t(e).parent().hasClass("owl-video-frame")
	}, o.prototype.destroy = function () {
		var t, e;
		this._core.$element.off("click.owl.video");
		for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
		for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.Video = o
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
	var o = function (e) {
		this.core = e, this.core.options = t.extend({}, o.Defaults, this.core.options), this.swapping = !0, this.previous = i, this.next = i, this.handlers = {
			"change.owl.carousel": t.proxy(function (t) {
				t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
			}, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function (t) {
				t.namespace && (this.swapping = "translated" == t.type)
			}, this), "translate.owl.carousel": t.proxy(function (t) {
				t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
			}, this)
		}, this.core.$element.on(this.handlers)
	};
	o.Defaults = {animateOut: !1, animateIn: !1}, o.prototype.swap = function () {
		if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
			this.core.speed(0);
			var e, n = t.proxy(this.clear, this), i = this.core.$stage.children().eq(this.previous),
				o = this.core.$stage.children().eq(this.next), s = this.core.settings.animateIn,
				r = this.core.settings.animateOut;
			this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(t.support.animation.end, n).css({left: e + "px"}).addClass("animated owl-animated-out").addClass(r)), s && o.one(t.support.animation.end, n).addClass("animated owl-animated-in").addClass(s))
		}
	}, o.prototype.clear = function (e) {
		t(e.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
	}, o.prototype.destroy = function () {
		var t, e;
		for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
		for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.Animate = o
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
	var o = function (e) {
		this._core = e, this._timeout = null, this._paused = !1, this._handlers = {
			"changed.owl.carousel": t.proxy(function (t) {
				t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
			}, this), "initialized.owl.carousel": t.proxy(function (t) {
				t.namespace && this._core.settings.autoplay && this.play()
			}, this), "play.owl.autoplay": t.proxy(function (t, e, n) {
				t.namespace && this.play(e, n)
			}, this), "stop.owl.autoplay": t.proxy(function (t) {
				t.namespace && this.stop()
			}, this), "mouseover.owl.autoplay": t.proxy(function () {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			}, this), "mouseleave.owl.autoplay": t.proxy(function () {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
			}, this), "touchstart.owl.core": t.proxy(function () {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			}, this), "touchend.owl.core": t.proxy(function () {
				this._core.settings.autoplayHoverPause && this.play()
			}, this)
		}, this._core.$element.on(this._handlers), this._core.options = t.extend({}, o.Defaults, this._core.options)
	};
	o.Defaults = {
		autoplay: !1,
		autoplayTimeout: 5e3,
		autoplayHoverPause: !1,
		autoplaySpeed: !1
	}, o.prototype.play = function (t, e) {
		this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
	}, o.prototype._getNextTimeout = function (i, o) {
		return this._timeout && e.clearTimeout(this._timeout), e.setTimeout(t.proxy(function () {
			this._paused || this._core.is("busy") || this._core.is("interacting") || n.hidden || this._core.next(o || this._core.settings.autoplaySpeed)
		}, this), i || this._core.settings.autoplayTimeout)
	}, o.prototype._setAutoPlayInterval = function () {
		this._timeout = this._getNextTimeout()
	}, o.prototype.stop = function () {
		this._core.is("rotating") && (e.clearTimeout(this._timeout), this._core.leave("rotating"))
	}, o.prototype.pause = function () {
		this._core.is("rotating") && (this._paused = !0)
	}, o.prototype.destroy = function () {
		var t, e;
		this.stop();
		for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
		for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.autoplay = o
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
	"use strict";
	var o = function (e) {
		this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		}, this._handlers = {
			"prepared.owl.carousel": t.proxy(function (e) {
				e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
			}, this), "added.owl.carousel": t.proxy(function (t) {
				t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
			}, this), "remove.owl.carousel": t.proxy(function (t) {
				t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
			}, this), "changed.owl.carousel": t.proxy(function (t) {
				t.namespace && "position" == t.property.name && this.draw()
			}, this), "initialized.owl.carousel": t.proxy(function (t) {
				t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
			}, this), "refreshed.owl.carousel": t.proxy(function (t) {
				t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
			}, this)
		}, this._core.options = t.extend({}, o.Defaults, this._core.options), this.$element.on(this._handlers)
	};
	o.Defaults = {
		nav: !1,
		navText: ["prev", "next"],
		navSpeed: !1,
		navElement: "div",
		navContainer: !1,
		navContainerClass: "owl-nav",
		navClass: ["owl-prev", "owl-next"],
		slideBy: 1,
		dotClass: "owl-dot",
		dotsClass: "owl-dots",
		dots: !0,
		dotsEach: !1,
		dotsData: !1,
		dotsSpeed: !1,
		dotsContainer: !1
	}, o.prototype.initialize = function () {
		var e, n = this._core.settings;
		this._controls.$relative = (n.navContainer ? t(n.navContainer) : t("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + n.navElement + ">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function (t) {
			this.prev(n.navSpeed)
		}, this)), this._controls.$next = t("<" + n.navElement + ">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function (t) {
			this.next(n.navSpeed)
		}, this)), n.dotsData || (this._templates = [t("<div>").addClass(n.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (n.dotsContainer ? t(n.dotsContainer) : t("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", t.proxy(function (e) {
			var i = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
			e.preventDefault(), this.to(i, n.dotsSpeed)
		}, this));
		for (e in this._overrides) this._core[e] = t.proxy(this[e], this)
	}, o.prototype.destroy = function () {
		var t, e, n, i;
		for (t in this._handlers) this.$element.off(t, this._handlers[t]);
		for (e in this._controls) this._controls[e].remove();
		for (i in this.overides) this._core[i] = this._overrides[i];
		for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
	}, o.prototype.update = function () {
		var t, e, n = this._core.clones().length / 2, i = n + this._core.items().length, o = this._core.maximum(!0),
			s = this._core.settings, r = s.center || s.autoWidth || s.dotsData ? 1 : s.dotsEach || s.items;
		if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy) for (this._pages = [], t = n, e = 0, 0; i > t; t++) {
			if (e >= r || 0 === e) {
				if (this._pages.push({start: Math.min(o, t - n), end: t - n + r - 1}), Math.min(o, t - n) === o) break;
				e = 0, 0
			}
			e += this._core.mergers(this._core.relative(t))
		}
	}, o.prototype.draw = function () {
		var e, n = this._core.settings, i = this._core.items().length <= n.items,
			o = this._core.relative(this._core.current()), s = n.loop || n.rewind;
		this._controls.$relative.toggleClass("disabled", !n.nav || i), n.nav && (this._controls.$previous.toggleClass("disabled", !s && o <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !s && o >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !n.dots || i), n.dots && (e = this._pages.length - this._controls.$absolute.children().length, n.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : 0 > e && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
	}, o.prototype.onTrigger = function (e) {
		var n = this._core.settings;
		e.page = {
			index: t.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: n && (n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items)
		}
	}, o.prototype.current = function () {
		var e = this._core.relative(this._core.current());
		return t.grep(this._pages, t.proxy(function (t, n) {
			return t.start <= e && t.end >= e
		}, this)).pop()
	}, o.prototype.getPosition = function (e) {
		var n, i, o = this._core.settings;
		return "page" == o.slideBy ? (n = t.inArray(this.current(), this._pages), i = this._pages.length, e ? ++n : --n, n = this._pages[(n % i + i) % i].start) : (n = this._core.relative(this._core.current()), i = this._core.items().length, e ? n += o.slideBy : n -= o.slideBy), n
	}, o.prototype.next = function (e) {
		t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
	}, o.prototype.prev = function (e) {
		t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
	}, o.prototype.to = function (e, n, i) {
		var o;
		!i && this._pages.length ? (o = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % o + o) % o].start, n)) : t.proxy(this._overrides.to, this._core)(e, n)
	}, t.fn.owlCarousel.Constructor.Plugins.Navigation = o
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
	"use strict";
	var o = function (n) {
		this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
			"initialized.owl.carousel": t.proxy(function (n) {
				n.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
			}, this), "prepared.owl.carousel": t.proxy(function (e) {
				if (e.namespace) {
					var n = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
					if (!n) return;
					this._hashes[n] = e.content
				}
			}, this), "changed.owl.carousel": t.proxy(function (n) {
				if (n.namespace && "position" === n.property.name) {
					var i = this._core.items(this._core.relative(this._core.current())),
						o = t.map(this._hashes, function (t, e) {
							return t === i ? e : null
						}).join();
					if (!o || e.location.hash.slice(1) === o) return;
					e.location.hash = o
				}
			}, this)
		}, this._core.options = t.extend({}, o.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function (t) {
			var n = e.location.hash.substring(1), i = this._core.$stage.children(),
				o = this._hashes[n] && i.index(this._hashes[n]);
			void 0 !== o && o !== this._core.current() && this._core.to(this._core.relative(o), !1, !0)
		}, this))
	};
	o.Defaults = {URLhashListener: !1}, o.prototype.destroy = function () {
		var n, i;
		t(e).off("hashchange.owl.navigation");
		for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
		for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.Hash = o
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
	function o(e, n) {
		var o = !1, s = e.charAt(0).toUpperCase() + e.slice(1);
		return t.each((e + " " + a.join(s + " ") + s).split(" "), function (t, e) {
			return r[e] !== i ? (o = !n || e, !1) : void 0
		}), o
	}

	function s(t) {
		return o(t, !0)
	}

	var r = t("<support>").get(0).style, a = "Webkit Moz O ms".split(" "), l = {
		transition: {
			end: {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd",
				transition: "transitionend"
			}
		},
		animation: {
			end: {
				WebkitAnimation: "webkitAnimationEnd",
				MozAnimation: "animationend",
				OAnimation: "oAnimationEnd",
				animation: "animationend"
			}
		}
	}, c = {
		csstransforms: function () {
			return !!o("transform")
		}, csstransforms3d: function () {
			return !!o("perspective")
		}, csstransitions: function () {
			return !!o("transition")
		}, cssanimations: function () {
			return !!o("animation")
		}
	};
	c.csstransitions() && (t.support.transition = new String(s("transition")), t.support.transition.end = l.transition.end[t.support.transition]), c.cssanimations() && (t.support.animation = new String(s("animation")), t.support.animation.end = l.animation.end[t.support.animation]), c.csstransforms() && (t.support.transform = new String(s("transform")), t.support.transform3d = c.csstransforms3d())
}(window.Zepto || window.jQuery, window, document), function (t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (t) {
	t.extend(t.fn, {
		validate: function (e) {
			if (this.length) {
				var n = t.data(this[0], "validator");
				return n || (this.attr("novalidate", "novalidate"), n = new t.validator(e, this[0]), t.data(this[0], "validator", n), n.settings.onsubmit && (this.on("click.validate", ":submit", function (e) {
					n.settings.submitHandler && (n.submitButton = e.target), t(this).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== t(this).attr("formnovalidate") && (n.cancelSubmit = !0)
				}), this.on("submit.validate", function (e) {
					function i() {
						var i, o;
						return !n.settings.submitHandler || (n.submitButton && (i = t("<input type='hidden'/>").attr("name", n.submitButton.name).val(t(n.submitButton).val()).appendTo(n.currentForm)), o = n.settings.submitHandler.call(n, n.currentForm, e), n.submitButton && i.remove(), void 0 !== o && o)
					}

					return n.settings.debug && e.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1)
				})), n)
			}
			e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
		}, valid: function () {
			var e, n, i;
			return t(this[0]).is("form") ? e = this.validate().form() : (i = [], e = !0, n = t(this[0].form).validate(), this.each(function () {
				(e = n.element(this) && e) || (i = i.concat(n.errorList))
			}), n.errorList = i), e
		}, rules: function (e, n) {
			var i, o, s, r, a, l, c = this[0];
			if (null != c && null != c.form) {
				if (e) switch (i = t.data(c.form, "validator").settings, o = i.rules, s = t.validator.staticRules(c), e) {
					case"add":
						t.extend(s, t.validator.normalizeRule(n)), delete s.messages, o[c.name] = s, n.messages && (i.messages[c.name] = t.extend(i.messages[c.name], n.messages));
						break;
					case"remove":
						return n ? (l = {}, t.each(n.split(/\s/), function (e, n) {
							l[n] = s[n], delete s[n], "required" === n && t(c).removeAttr("aria-required")
						}), l) : (delete o[c.name], s)
				}
				return (r = t.validator.normalizeRules(t.extend({}, t.validator.classRules(c), t.validator.attributeRules(c), t.validator.dataRules(c), t.validator.staticRules(c)), c)).required && (a = r.required, delete r.required, r = t.extend({required: a}, r), t(c).attr("aria-required", "true")), r.remote && (a = r.remote, delete r.remote, r = t.extend(r, {remote: a})), r
			}
		}
	}), t.extend(t.expr[":"], {
		blank: function (e) {
			return !t.trim("" + t(e).val())
		}, filled: function (e) {
			var n = t(e).val();
			return null !== n && !!t.trim("" + n)
		}, unchecked: function (e) {
			return !t(e).prop("checked")
		}
	}), t.validator = function (e, n) {
		this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = n, this.init()
	}, t.validator.format = function (e, n) {
		return 1 === arguments.length ? function () {
			var n = t.makeArray(arguments);
			return n.unshift(e), t.validator.format.apply(this, n)
		} : void 0 === n ? e : (arguments.length > 2 && n.constructor !== Array && (n = t.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), t.each(n, function (t, n) {
			e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function () {
				return n
			})
		}), e)
	}, t.extend(t.validator, {
		defaults: {
			messages: {},
			groups: {},
			rules: {},
			errorClass: "error",
			pendingClass: "pending",
			validClass: "valid",
			errorElement: "label",
			focusCleanup: !1,
			focusInvalid: !0,
			errorContainer: t([]),
			errorLabelContainer: t([]),
			onsubmit: !0,
			ignore: ":hidden",
			ignoreTitle: !1,
			onfocusin: function (t) {
				this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
			},
			onfocusout: function (t) {
				this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
			},
			onkeyup: function (e, n) {
				var i = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
				9 === n.which && "" === this.elementValue(e) || -1 !== t.inArray(n.keyCode, i) || (e.name in this.submitted || e.name in this.invalid) && this.element(e)
			},
			onclick: function (t) {
				t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
			},
			highlight: function (e, n, i) {
				"radio" === e.type ? this.findByName(e.name).addClass(n).removeClass(i) : t(e).addClass(n).removeClass(i)
			},
			unhighlight: function (e, n, i) {
				"radio" === e.type ? this.findByName(e.name).removeClass(n).addClass(i) : t(e).removeClass(n).addClass(i)
			}
		},
		setDefaults: function (e) {
			t.extend(t.validator.defaults, e)
		},
		messages: {
			required: "This field is required.",
			remote: "Please fix this field.",
			email: "Please enter a valid email address.",
			url: "Please enter a valid URL.",
			date: "Please enter a valid date.",
			dateISO: "Please enter a valid date (ISO).",
			number: "Please enter a valid number.",
			digits: "Please enter only digits.",
			equalTo: "Please enter the same value again.",
			maxlength: t.validator.format("Please enter no more than {0} characters."),
			minlength: t.validator.format("Please enter at least {0} characters."),
			rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
			range: t.validator.format("Please enter a value between {0} and {1}."),
			max: t.validator.format("Please enter a value less than or equal to {0}."),
			min: t.validator.format("Please enter a value greater than or equal to {0}."),
			step: t.validator.format("Please enter a multiple of {0}.")
		},
		autoCreateRanges: !1,
		prototype: {
			init: function () {
				function e(e) {
					!this.form && this.hasAttribute("contenteditable") && (this.form = t(this).closest("form")[0]);
					var n = t.data(this.form, "validator"), i = "on" + e.type.replace(/^validate/, ""), o = n.settings;
					o[i] && !t(this).is(o.ignore) && o[i].call(n, this, e)
				}

				this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
				var n, i = this.groups = {};
				t.each(this.settings.groups, function (e, n) {
					"string" == typeof n && (n = n.split(/\s/)), t.each(n, function (t, n) {
						i[n] = e
					})
				}), n = this.settings.rules, t.each(n, function (e, i) {
					n[e] = t.validator.normalizeRule(i)
				}), t(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e), this.settings.invalidHandler && t(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), t(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
			}, form: function () {
				return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
			}, checkForm: function () {
				this.prepareForm();
				for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
				return this.valid()
			}, element: function (e) {
				var n, i, o = this.clean(e), s = this.validationTargetFor(o), r = this, a = !0;
				return void 0 === s ? delete this.invalid[o.name] : (this.prepareElement(s), this.currentElements = t(s), (i = this.groups[s.name]) && t.each(this.groups, function (t, e) {
					e === i && t !== s.name && (o = r.validationTargetFor(r.clean(r.findByName(t)))) && o.name in r.invalid && (r.currentElements.push(o), a = r.check(o) && a)
				}), n = !1 !== this.check(s), a = a && n, this.invalid[s.name] = !n, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), t(e).attr("aria-invalid", !n)), a
			}, showErrors: function (e) {
				if (e) {
					var n = this;
					t.extend(this.errorMap, e), this.errorList = t.map(this.errorMap, function (t, e) {
						return {message: t, element: n.findByName(e)[0]}
					}), this.successList = t.grep(this.successList, function (t) {
						return !(t.name in e)
					})
				}
				this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
			}, resetForm: function () {
				t.fn.resetForm && t(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
				var e = this.elements().removeData("previousValue").removeAttr("aria-invalid");
				this.resetElements(e)
			}, resetElements: function (t) {
				var e;
				if (this.settings.unhighlight) for (e = 0; t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""), this.findByName(t[e].name).removeClass(this.settings.validClass); else t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
			}, numberOfInvalids: function () {
				return this.objectLength(this.invalid)
			}, objectLength: function (t) {
				var e, n = 0;
				for (e in t) t[e] && n++;
				return n
			}, hideErrors: function () {
				this.hideThese(this.toHide)
			}, hideThese: function (t) {
				t.not(this.containers).text(""), this.addWrapper(t).hide()
			}, valid: function () {
				return 0 === this.size()
			}, size: function () {
				return this.errorList.length
			}, focusInvalid: function () {
				if (this.settings.focusInvalid) try {
					t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
				} catch (t) {
				}
			}, findLastActive: function () {
				var e = this.lastActive;
				return e && 1 === t.grep(this.errorList, function (t) {
					return t.element.name === e.name
				}).length && e
			}, elements: function () {
				var e = this, n = {};
				return t(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
					var i = this.name || t(this).attr("name");
					return !i && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = t(this).closest("form")[0]), !(i in n || !e.objectLength(t(this).rules())) && (n[i] = !0, !0)
				})
			}, clean: function (e) {
				return t(e)[0]
			}, errors: function () {
				var e = this.settings.errorClass.split(" ").join(".");
				return t(this.settings.errorElement + "." + e, this.errorContext)
			}, resetInternals: function () {
				this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([])
			}, reset: function () {
				this.resetInternals(), this.currentElements = t([])
			}, prepareForm: function () {
				this.reset(), this.toHide = this.errors().add(this.containers)
			}, prepareElement: function (t) {
				this.reset(), this.toHide = this.errorsFor(t)
			}, elementValue: function (e) {
				var n, i, o = t(e), s = e.type;
				return "radio" === s || "checkbox" === s ? this.findByName(e.name).filter(":checked").val() : "number" === s && void 0 !== e.validity ? e.validity.badInput ? "NaN" : o.val() : (n = e.hasAttribute("contenteditable") ? o.text() : o.val(), "file" === s ? "C:\\fakepath\\" === n.substr(0, 12) ? n.substr(12) : (i = n.lastIndexOf("index.html")) >= 0 ? n.substr(i + 1) : (i = n.lastIndexOf("\\")) >= 0 ? n.substr(i + 1) : n : "string" == typeof n ? n.replace(/\r/g, "") : n)
			}, check: function (e) {
				e = this.validationTargetFor(this.clean(e));
				var n, i, o, s = t(e).rules(), r = t.map(s, function (t, e) {
					return e
				}).length, a = !1, l = this.elementValue(e);
				if ("function" == typeof s.normalizer) {
					if ("string" != typeof(l = s.normalizer.call(e, l))) throw new TypeError("The normalizer should return a string value.");
					delete s.normalizer
				}
				for (i in s) {
					o = {method: i, parameters: s[i]};
					try {
						if ("dependency-mismatch" === (n = t.validator.methods[i].call(this, l, e, o.parameters)) && 1 === r) {
							a = !0;
							continue
						}
						if (a = !1, "pending" === n) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
						if (!n) return this.formatAndAdd(e, o), !1
					} catch (t) {
						throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + o.method + "' method.", t), t instanceof TypeError && (t.message += ".  Exception occurred when checking element " + e.id + ", check the '" + o.method + "' method."), t
					}
				}
				if (!a) return this.objectLength(s) && this.successList.push(e), !0
			}, customDataMessage: function (e, n) {
				return t(e).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || t(e).data("msg")
			}, customMessage: function (t, e) {
				var n = this.settings.messages[t];
				return n && (n.constructor === String ? n : n[e])
			}, findDefined: function () {
				for (var t = 0; t < arguments.length; t++) if (void 0 !== arguments[t]) return arguments[t]
			}, defaultMessage: function (e, n) {
				"string" == typeof n && (n = {method: n});
				var i = this.findDefined(this.customMessage(e.name, n.method), this.customDataMessage(e, n.method), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[n.method], "<strong>Warning: No message defined for " + e.name + "</strong>"),
					o = /\$?\{(\d+)\}/g;
				return "function" == typeof i ? i = i.call(this, n.parameters, e) : o.test(i) && (i = t.validator.format(i.replace(o, "{$1}"), n.parameters)), i
			}, formatAndAdd: function (t, e) {
				var n = this.defaultMessage(t, e);
				this.errorList.push({
					message: n,
					element: t,
					method: e.method
				}), this.errorMap[t.name] = n, this.submitted[t.name] = n
			}, addWrapper: function (t) {
				return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
			}, defaultShowErrors: function () {
				var t, e, n;
				for (t = 0; this.errorList[t]; t++) n = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
				if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
				if (this.settings.unhighlight) for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
				this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
			}, validElements: function () {
				return this.currentElements.not(this.invalidElements())
			}, invalidElements: function () {
				return t(this.errorList).map(function () {
					return this.element
				})
			}, showLabel: function (e, n) {
				var i, o, s, r, a = this.errorsFor(e), l = this.idOrName(e), c = t(e).attr("aria-describedby");
				a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(n)) : (i = a = t("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(n || ""), this.settings.wrapper && (i = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, t(e)) : i.insertAfter(e), a.is("label") ? a.attr("for", l) : 0 === a.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (s = a.attr("id"), c ? c.match(new RegExp("\\b" + this.escapeCssMeta(s) + "\\b")) || (c += " " + s) : c = s, t(e).attr("aria-describedby", c), (o = this.groups[e.name]) && (r = this, t.each(r.groups, function (e, n) {
					n === o && t("[name='" + r.escapeCssMeta(e) + "']", r.currentForm).attr("aria-describedby", a.attr("id"))
				})))), !n && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, e)), this.toShow = this.toShow.add(a)
			}, errorsFor: function (e) {
				var n = this.escapeCssMeta(this.idOrName(e)), i = t(e).attr("aria-describedby"),
					o = "label[for='" + n + "'], label[for='" + n + "'] *";
				return i && (o = o + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")), this.errors().filter(o)
			}, escapeCssMeta: function (t) {
				return t.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
			}, idOrName: function (t) {
				return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
			}, validationTargetFor: function (e) {
				return this.checkable(e) && (e = this.findByName(e.name)), t(e).not(this.settings.ignore)[0]
			}, checkable: function (t) {
				return /radio|checkbox/i.test(t.type)
			}, findByName: function (e) {
				return t(this.currentForm).find("[name='" + this.escapeCssMeta(e) + "']")
			}, getLength: function (e, n) {
				switch (n.nodeName.toLowerCase()) {
					case"select":
						return t("option:selected", n).length;
					case"input":
						if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
				}
				return e.length
			}, depend: function (t, e) {
				return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
			}, dependTypes: {
				boolean: function (t) {
					return t
				}, string: function (e, n) {
					return !!t(e, n.form).length
				}, function: function (t, e) {
					return t(e)
				}
			}, optional: function (e) {
				var n = this.elementValue(e);
				return !t.validator.methods.required.call(this, n, e) && "dependency-mismatch"
			}, startRequest: function (e) {
				this.pending[e.name] || (this.pendingRequest++, t(e).addClass(this.settings.pendingClass), this.pending[e.name] = !0)
			}, stopRequest: function (e, n) {
				this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], t(e).removeClass(this.settings.pendingClass), n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
			}, previousValue: function (e, n) {
				return n = "string" == typeof n && n || "remote", t.data(e, "previousValue") || t.data(e, "previousValue", {
					old: null,
					valid: !0,
					message: this.defaultMessage(e, {method: n})
				})
			}, destroy: function () {
				this.resetForm(), t(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
			}
		},
		classRuleSettings: {
			required: {required: !0},
			email: {email: !0},
			url: {url: !0},
			date: {date: !0},
			dateISO: {dateISO: !0},
			number: {number: !0},
			digits: {digits: !0},
			creditcard: {creditcard: !0}
		},
		addClassRules: function (e, n) {
			e.constructor === String ? this.classRuleSettings[e] = n : t.extend(this.classRuleSettings, e)
		},
		classRules: function (e) {
			var n = {}, i = t(e).attr("class");
			return i && t.each(i.split(" "), function () {
				this in t.validator.classRuleSettings && t.extend(n, t.validator.classRuleSettings[this])
			}), n
		},
		normalizeAttributeRule: function (t, e, n, i) {
			/min|max|step/.test(n) && (null === e || /number|range|text/.test(e)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? t[n] = i : e === n && "range" !== e && (t[n] = !0)
		},
		attributeRules: function (e) {
			var n, i, o = {}, s = t(e), r = e.getAttribute("type");
			for (n in t.validator.methods) "required" === n ? ("" === (i = e.getAttribute(n)) && (i = !0), i = !!i) : i = s.attr(n), this.normalizeAttributeRule(o, r, n, i);
			return o.maxlength && /-1|2147483647|524288/.test(o.maxlength) && delete o.maxlength, o
		},
		dataRules: function (e) {
			var n, i, o = {}, s = t(e), r = e.getAttribute("type");
			for (n in t.validator.methods) i = s.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()), this.normalizeAttributeRule(o, r, n, i);
			return o
		},
		staticRules: function (e) {
			var n = {}, i = t.data(e.form, "validator");
			return i.settings.rules && (n = t.validator.normalizeRule(i.settings.rules[e.name]) || {}), n
		},
		normalizeRules: function (e, n) {
			return t.each(e, function (i, o) {
				if (!1 !== o) {
					if (o.param || o.depends) {
						var s = !0;
						switch (typeof o.depends) {
							case"string":
								s = !!t(o.depends, n.form).length;
								break;
							case"function":
								s = o.depends.call(n, n)
						}
						s ? e[i] = void 0 === o.param || o.param : (t.data(n.form, "validator").resetElements(t(n)), delete e[i])
					}
				} else delete e[i]
			}), t.each(e, function (i, o) {
				e[i] = t.isFunction(o) && "normalizer" !== i ? o(n) : o
			}), t.each(["minlength", "maxlength"], function () {
				e[this] && (e[this] = Number(e[this]))
			}), t.each(["rangelength", "range"], function () {
				var n;
				e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (n = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/), e[this] = [Number(n[0]), Number(n[1])]))
			}), t.validator.autoCreateRanges && (null != e.min && null != e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), null != e.minlength && null != e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
		},
		normalizeRule: function (e) {
			if ("string" == typeof e) {
				var n = {};
				t.each(e.split(/\s/), function () {
					n[this] = !0
				}), e = n
			}
			return e
		},
		addMethod: function (e, n, i) {
			t.validator.methods[e] = n, t.validator.messages[e] = void 0 !== i ? i : t.validator.messages[e], n.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
		},
		methods: {
			required: function (e, n, i) {
				if (!this.depend(i, n)) return "dependency-mismatch";
				if ("select" === n.nodeName.toLowerCase()) {
					var o = t(n).val();
					return o && o.length > 0
				}
				return this.checkable(n) ? this.getLength(e, n) > 0 : e.length > 0
			}, email: function (t, e) {
				return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
			}, url: function (t, e) {
				return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(t)
			}, date: function (t, e) {
				return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
			}, dateISO: function (t, e) {
				return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
			}, number: function (t, e) {
				return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
			}, digits: function (t, e) {
				return this.optional(e) || /^\d+$/.test(t)
			}, minlength: function (e, n, i) {
				var o = t.isArray(e) ? e.length : this.getLength(e, n);
				return this.optional(n) || o >= i
			}, maxlength: function (e, n, i) {
				var o = t.isArray(e) ? e.length : this.getLength(e, n);
				return this.optional(n) || o <= i
			}, rangelength: function (e, n, i) {
				var o = t.isArray(e) ? e.length : this.getLength(e, n);
				return this.optional(n) || o >= i[0] && o <= i[1]
			}, min: function (t, e, n) {
				return this.optional(e) || t >= n
			}, max: function (t, e, n) {
				return this.optional(e) || t <= n
			}, range: function (t, e, n) {
				return this.optional(e) || t >= n[0] && t <= n[1]
			}, step: function (e, n, i) {
				var o, s = t(n).attr("type"), r = "Step attribute on input type " + s + " is not supported.",
					a = ["text", "number", "range"], l = new RegExp("\\b" + s + "\\b"), c = function (t) {
						var e = ("" + t).match(/(?:\.(\d+))?$/);
						return e && e[1] ? e[1].length : 0
					}, u = function (t) {
						return Math.round(t * Math.pow(10, o))
					}, h = !0;
				if (s && !l.test(a.join())) throw new Error(r);
				return o = c(i), (c(e) > o || u(e) % u(i) != 0) && (h = !1), this.optional(n) || h
			}, equalTo: function (e, n, i) {
				var o = t(i);
				return this.settings.onfocusout && o.not(".validate-equalTo-blur").length && o.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
					t(n).valid()
				}), e === o.val()
			}, remote: function (e, n, i, o) {
				if (this.optional(n)) return "dependency-mismatch";
				o = "string" == typeof o && o || "remote";
				var s, r, a, l = this.previousValue(n, o);
				return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), l.originalMessage = l.originalMessage || this.settings.messages[n.name][o], this.settings.messages[n.name][o] = l.message, i = "string" == typeof i && {url: i} || i, a = t.param(t.extend({data: e}, i.data)), l.old === a ? l.valid : (l.old = a, s = this, this.startRequest(n), r = {}, r[n.name] = e, t.ajax(t.extend(!0, {
					mode: "abort",
					port: "validate" + n.name,
					dataType: "json",
					data: r,
					context: s.currentForm,
					success: function (t) {
						var i, r, a, c = !0 === t || "true" === t;
						s.settings.messages[n.name][o] = l.originalMessage, c ? (a = s.formSubmitted, s.resetInternals(), s.toHide = s.errorsFor(n), s.formSubmitted = a, s.successList.push(n), s.invalid[n.name] = !1, s.showErrors()) : (i = {}, r = t || s.defaultMessage(n, {
							method: o,
							parameters: e
						}), i[n.name] = l.message = r, s.invalid[n.name] = !0, s.showErrors(i)), l.valid = c, s.stopRequest(n, c)
					}
				}, i)), "pending")
			}
		}
	});
	var e, n = {};
	t.ajaxPrefilter ? t.ajaxPrefilter(function (t, e, i) {
		var o = t.port;
		"abort" === t.mode && (n[o] && n[o].abort(), n[o] = i)
	}) : (e = t.ajax, t.ajax = function (i) {
		var o = ("mode" in i ? i : t.ajaxSettings).mode, s = ("port" in i ? i : t.ajaxSettings).port;
		return "abort" === o ? (n[s] && n[s].abort(), n[s] = e.apply(this, arguments), n[s]) : e.apply(this, arguments)
	})
}), $.extend($.validator.messages, {
	required: "\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c.",
	remote: "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435.",
	email: "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b.",
	url: "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 URL.",
	date: "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0443\u044e \u0434\u0430\u0442\u0443.",
	dateISO: "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0443\u044e \u0434\u0430\u0442\u0443 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 ISO.",
	number: "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e.",
	digits: "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u043e\u0434\u0438\u0442\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0446\u0438\u0444\u0440\u044b.",
	creditcard: "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u043a\u0440\u0435\u0434\u0438\u0442\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u044b.",
	equalTo: "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0430\u043a\u043e\u0435 \u0436\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.",
	extension: "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b \u0441 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u043c \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435\u043c.",
	maxlength: $.validator.format("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 {0} \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432."),
	minlength: $.validator.format("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0435 \u043c\u0435\u043d\u044c\u0448\u0435 {0} \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432."),
	rangelength: $.validator.format("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u0438\u043d\u043e\u0439 \u043e\u0442 {0} \u0434\u043e {1} \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432."),
	range: $.validator.format("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e \u043e\u0442 {0} \u0434\u043e {1}."),
	max: $.validator.format("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e, \u043c\u0435\u043d\u044c\u0448\u0435\u0435 \u0438\u043b\u0438 \u0440\u0430\u0432\u043d\u043e\u0435\xa0{0}."),
	min: $.validator.format("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e, \u0431\u043e\u043b\u044c\u0448\u0435\u0435 \u0438\u043b\u0438 \u0440\u0430\u0432\u043d\u043e\u0435 {0}.")
});
var $jscomp = {
	scope: {}, findInternal: function (t, e, n) {
		t instanceof String && (t = String(t));
		for (var i = t.length, o = 0; o < i; o++) {
			var s = t[o];
			if (e.call(n, s, o, t)) return {i: o, v: s}
		}
		return {i: -1, v: void 0}
	}
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function (t, e, n) {
	if (n.get || n.set) throw new TypeError("ES3 does not support getters and setters.");
	t != Array.prototype && t != Object.prototype && (t[e] = n.value)
}, $jscomp.getGlobal = function (t) {
	return "undefined" != typeof window && window === t ? t : "undefined" != typeof global && null != global ? global : t
}, $jscomp.global = $jscomp.getGlobal(this), $jscomp.polyfill = function (t, e, n, i) {
	if (e) {
		for (n = $jscomp.global, t = t.split("."), i = 0; i < t.length - 1; i++) {
			var o = t[i];
			o in n || (n[o] = {}), n = n[o]
		}
		(e = e(i = n[t = t[t.length - 1]])) != i && null != e && $jscomp.defineProperty(n, t, {
			configurable: !0,
			writable: !0,
			value: e
		})
	}
}, $jscomp.polyfill("Array.prototype.find", function (t) {
	return t || function (t, e) {
		return $jscomp.findInternal(this, t, e).v
	}
}, "es6-impl", "es3"), function (t, e, n) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(e || n)
}(function (t) {
	var e = function (e, n, i) {
		var o = {
			invalid: [], getCaret: function () {
				try {
					var t, n = 0, i = e.get(0), s = document.selection, r = i.selectionStart;
					return s && -1 === navigator.appVersion.indexOf("MSIE 10") ? ((t = s.createRange()).moveStart("character", -o.val().length), n = t.text.length) : (r || "0" === r) && (n = r), n
				} catch (t) {
				}
			}, setCaret: function (t) {
				try {
					if (e.is(":focus")) {
						var n, i = e.get(0);
						i.setSelectionRange ? i.setSelectionRange(t, t) : ((n = i.createTextRange()).collapse(!0), n.moveEnd("character", t), n.moveStart("character", t), n.select())
					}
				} catch (t) {
				}
			}, events: function () {
				e.on("keydown.mask", function (t) {
					e.data("mask-keycode", t.keyCode || t.which), e.data("mask-previus-value", e.val())
				}).on(t.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", o.behaviour).on("paste.mask drop.mask", function () {
					setTimeout(function () {
						e.keydown().keyup()
					}, 100)
				}).on("change.mask", function () {
					e.data("changed", !0)
				}).on("blur.mask", function () {
					a === o.val() || e.data("changed") || e.trigger("change"), e.data("changed", !1)
				}).on("blur.mask", function () {
					a = o.val()
				}).on("focus.mask", function (e) {
					!0 === i.selectOnFocus && t(e.target).select()
				}).on("focusout.mask", function () {
					i.clearIfNotMatch && !s.test(o.val()) && o.val("")
				})
			}, getRegexMask: function () {
				for (var t, e, i, o, s = [], a = 0; a < n.length; a++) (t = r.translation[n.charAt(a)]) ? (e = t.pattern.toString().replace(/.{1}$|^.{1}/g, ""), i = t.optional, (t = t.recursive) ? (s.push(n.charAt(a)), o = {
					digit: n.charAt(a),
					pattern: e
				}) : s.push(i || t ? e + "?" : e)) : s.push(n.charAt(a).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
				return s = s.join(""), o && (s = s.replace(new RegExp("(" + o.digit + "(.*" + o.digit + ")?)"), "($1)?").replace(new RegExp(o.digit, "g"), o.pattern)), new RegExp(s)
			}, destroyEvents: function () {
				e.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))
			}, val: function (t) {
				var n = e.is("input") ? "val" : "text";
				return 0 < arguments.length ? (e[n]() !== t && e[n](t), n = e) : n = e[n](), n
			}, calculateCaretPosition: function (t, n) {
				var i = n.length, o = e.data("mask-previus-value"), s = o.length;
				return 8 === e.data("mask-keycode") && o !== n ? t -= n.slice(0, t).length - o.slice(0, t).length : o !== n && (t = t >= s ? i : t + (n.slice(0, t).length - o.slice(0, t).length)), t
			}, behaviour: function (n) {
				n = n || window.event, o.invalid = [];
				i = e.data("mask-keycode");
				if (-1 === t.inArray(i, r.byPassKeys)) {
					var i = o.getMasked(), s = o.getCaret();
					return setTimeout(function (t, e) {
						o.setCaret(o.calculateCaretPosition(t, e))
					}, 10, s, i), o.val(i), o.setCaret(s), o.callbacks(n)
				}
			}, getMasked: function (t, e) {
				var s, a, l = [], c = void 0 === e ? o.val() : e + "", u = 0, h = n.length, d = 0, p = c.length, f = 1,
					m = "push", g = -1;
				i.reverse ? (m = "unshift", f = -1, s = 0, u = h - 1, d = p - 1, a = function () {
					return -1 < u && -1 < d
				}) : (s = h - 1, a = function () {
					return u < h && d < p
				});
				for (var v; a();) {
					var y = n.charAt(u), b = c.charAt(d), w = r.translation[y];
					w ? (b.match(w.pattern) ? (l[m](b), w.recursive && (-1 === g ? g = u : u === s && (u = g - f), s === g && (u -= f)), u += f) : b === v ? v = void 0 : w.optional ? (u += f, d -= f) : w.fallback ? (l[m](w.fallback), u += f, d -= f) : o.invalid.push({
						p: d,
						v: b,
						e: w.pattern
					}), d += f) : (t || l[m](y), b === y ? d += f : v = y, u += f)
				}
				return c = n.charAt(s), h !== p + 1 || r.translation[c] || l.push(c), l.join("")
			}, callbacks: function (t) {
				var s = o.val(), r = s !== a, l = [s, t, e, i], c = function (t, e, n) {
					"function" == typeof i[t] && e && i[t].apply(this, n)
				};
				c("onChange", !0 === r, l), c("onKeyPress", !0 === r, l), c("onComplete", s.length === n.length, l), c("onInvalid", 0 < o.invalid.length, [s, t, e, o.invalid, i])
			}
		};
		e = t(e);
		var s, r = this, a = o.val();
		n = "function" == typeof n ? n(o.val(), void 0, e, i) : n, r.mask = n, r.options = i, r.remove = function () {
			var t = o.getCaret();
			return o.destroyEvents(), o.val(r.getCleanVal()), o.setCaret(t), e
		}, r.getCleanVal = function () {
			return o.getMasked(!0)
		}, r.getMaskedVal = function (t) {
			return o.getMasked(!1, t)
		}, r.init = function (a) {
			if (a = a || !1, i = i || {}, r.clearIfNotMatch = t.jMaskGlobals.clearIfNotMatch, r.byPassKeys = t.jMaskGlobals.byPassKeys, r.translation = t.extend({}, t.jMaskGlobals.translation, i.translation), r = t.extend(!0, {}, r, i), s = o.getRegexMask(), a) o.events(), o.val(o.getMasked()); else {
				i.placeholder && e.attr("placeholder", i.placeholder), e.data("mask") && e.attr("autocomplete", "off"), a = 0;
				for (var l = !0; a < n.length; a++) {
					var c = r.translation[n.charAt(a)];
					if (c && c.recursive) {
						l = !1;
						break
					}
				}
				l && e.attr("maxlength", n.length), o.destroyEvents(), o.events(), a = o.getCaret(), o.val(o.getMasked()), o.setCaret(a)
			}
		}, r.init(!e.is("input"))
	};
	t.maskWatchers = {};
	var n = function () {
		var n = t(this), o = {}, s = n.attr("data-mask");
		if (n.attr("data-mask-reverse") && (o.reverse = !0), n.attr("data-mask-clearifnotmatch") && (o.clearIfNotMatch = !0), "true" === n.attr("data-mask-selectonfocus") && (o.selectOnFocus = !0), i(n, s, o)) return n.data("mask", new e(this, s, o))
	}, i = function (e, n, i) {
		i = i || {};
		var o = t(e).data("mask"), s = JSON.stringify;
		e = t(e).val() || t(e).text();
		try {
			return "function" == typeof n && (n = n(e)), "object" != typeof o || s(o.options) !== s(i) || o.mask !== n
		} catch (t) {
		}
	}, o = function (t) {
		var e, n = document.createElement("div");
		return t = "on" + t, (e = t in n) || (n.setAttribute(t, "return;"), e = "function" == typeof n[t]), e
	};
	t.fn.mask = function (n, o) {
		o = o || {};
		var s = this.selector, r = (a = t.jMaskGlobals).watchInterval, a = o.watchInputs || a.watchInputs,
			l = function () {
				if (i(this, n, o)) return t(this).data("mask", new e(this, n, o))
			};
		return t(this).each(l), s && "" !== s && a && (clearInterval(t.maskWatchers[s]), t.maskWatchers[s] = setInterval(function () {
			t(document).find(s).each(l)
		}, r)), this
	}, t.fn.masked = function (t) {
		return this.data("mask").getMaskedVal(t)
	}, t.fn.unmask = function () {
		return clearInterval(t.maskWatchers[this.selector]), delete t.maskWatchers[this.selector], this.each(function () {
			var e = t(this).data("mask");
			e && e.remove().removeData("mask")
		})
	}, t.fn.cleanVal = function () {
		return this.data("mask").getCleanVal()
	}, t.applyDataMask = function (e) {
		((e = e || t.jMaskGlobals.maskElements) instanceof t ? e : t(e)).filter(t.jMaskGlobals.dataMaskAttr).each(n)
	}, o = {
		maskElements: "input,td,span,div",
		dataMaskAttr: "*[data-mask]",
		dataMask: !0,
		watchInterval: 300,
		watchInputs: !0,
		useInput: !/Chrome\/28/.test(window.navigator.userAgent) && o("input"),
		watchDataMask: !1,
		byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
		translation: {
			0: {pattern: /\d/},
			9: {pattern: /\d/, optional: !0},
			"#": {pattern: /\d/, recursive: !0},
			A: {pattern: /[a-zA-Z0-9]/},
			S: {pattern: /[a-zA-Z]/}
		}
	}, t.jMaskGlobals = t.jMaskGlobals || {}, (o = t.jMaskGlobals = t.extend(!0, {}, o, t.jMaskGlobals)).dataMask && t.applyDataMask(), setInterval(function () {
		t.jMaskGlobals.watchDataMask && t.applyDataMask()
	}, o.watchInterval)
}, window.jQuery, window.Zepto), function (t) {
	if ("object" == typeof exports && "undefined" != typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
		var e;
		"undefined" != typeof window ? e = window : "undefined" != typeof global ? e = global : "undefined" != typeof self && (e = self), e.Slideout = t()
	}
}(function () {
	return function t(e, n, i) {
		function o(r, a) {
			if (!n[r]) {
				if (!e[r]) {
					var l = "function" == typeof require && require;
					if (!a && l) return l(r, !0);
					if (s) return s(r, !0);
					var c = new Error("Cannot find module '" + r + "'");
					throw c.code = "MODULE_NOT_FOUND", c
				}
				var u = n[r] = {exports: {}};
				e[r][0].call(u.exports, function (t) {
					var n = e[r][1][t];
					return o(n || t)
				}, u, u.exports, t, e, n, i)
			}
			return n[r].exports
		}

		for (var s = "function" == typeof require && require, r = 0; r < i.length; r++) o(i[r]);
		return o
	}({
		1: [function (t, e, n) {
			"use strict";

			function i(t, e) {
				for (var n in e) e[n] && (t[n] = e[n]);
				return t
			}

			function o(t) {
				t = t || {}, this._startOffsetX = 0, this._currentOffsetX = 0, this._opening = !1, this._moved = !1, this._opened = !1, this._preventOpen = !1, this._touch = void 0 === t.touch || t.touch && !0, this.panel = t.panel, this.menu = t.menu, -1 === this.panel.className.search("slideout-panel") && (this.panel.className += " slideout-panel"), -1 === this.menu.className.search("slideout-menu") && (this.menu.className += " slideout-menu"), this._fx = t.fx || "ease", this._duration = parseInt(t.duration, 10) || 300, this._tolerance = parseInt(t.tolerance, 10) || 70, this._padding = this._translateTo = parseInt(t.padding, 10) || 256, this._orientation = "right" === t.side ? -1 : 1, this._translateTo *= this._orientation, this._touch && this._initTouchEvents()
			}

			var s, r = t("decouple"), a = t("emitter"), l = !1, c = window.document, u = c.documentElement,
				h = window.navigator.msPointerEnabled, d = {
					start: h ? "MSPointerDown" : "touchstart",
					move: h ? "MSPointerMove" : "touchmove",
					end: h ? "MSPointerUp" : "touchend"
				}, p = function () {
					var t = /^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/, e = c.getElementsByTagName("script")[0].style;
					for (var n in e) if (t.test(n)) return "-" + n.match(t)[0].toLowerCase() + "-";
					return "WebkitOpacity" in e ? "-webkit-" : "KhtmlOpacity" in e ? "-khtml-" : ""
				}();
			!function (t, e) {
				t.prototype = i(t.prototype || {}, e.prototype)
			}(o, a), o.prototype.open = function () {
				var t = this;
				return this.emit("beforeopen"), -1 === u.className.search("slideout-open") && (u.className += " slideout-open"), this._setTransition(), this._translateXTo(this._translateTo), this._opened = !0, setTimeout(function () {
					t.panel.style.transition = t.panel.style["-webkit-transition"] = "", t.emit("open")
				}, this._duration + 50), this
			}, o.prototype.close = function () {
				var t = this;
				return this.isOpen() || this._opening ? (this.emit("beforeclose"), this._setTransition(), this._translateXTo(0), this._opened = !1, setTimeout(function () {
					u.className = u.className.replace(/ slideout-open/, ""), t.panel.style.transition = t.panel.style["-webkit-transition"] = t.panel.style[p + "transform"] = t.panel.style.transform = "", t.emit("close")
				}, this._duration + 50), this) : this
			}, o.prototype.toggle = function () {
				return this.isOpen() ? this.close() : this.open()
			}, o.prototype.isOpen = function () {
				return this._opened
			}, o.prototype._translateXTo = function (t) {
				return this._currentOffsetX = t, this.panel.style[p + "transform"] = this.panel.style.transform = "translateX(" + t + "px)", this
			}, o.prototype._setTransition = function () {
				return this.panel.style[p + "transition"] = this.panel.style.transition = p + "transform " + this._duration + "ms " + this._fx, this
			}, o.prototype._initTouchEvents = function () {
				var t = this;
				return this._onScrollFn = r(c, "scroll", function () {
					t._moved || (clearTimeout(s), l = !0, s = setTimeout(function () {
						l = !1
					}, 250))
				}), this._preventMove = function (e) {
					t._moved && e.preventDefault()
				}, c.addEventListener(d.move, this._preventMove), this._resetTouchFn = function (e) {
					void 0 !== e.touches && (t._moved = !1, t._opening = !1, t._startOffsetX = e.touches[0].pageX, t._preventOpen = !t._touch || !t.isOpen() && 0 !== t.menu.clientWidth)
				}, this.panel.addEventListener(d.start, this._resetTouchFn), this._onTouchCancelFn = function () {
					t._moved = !1, t._opening = !1
				}, this.panel.addEventListener("touchcancel", this._onTouchCancelFn), this._onTouchEndFn = function () {
					t._moved && (t._opening && Math.abs(t._currentOffsetX) > t._tolerance ? t.open() : t.close()), t._moved = !1
				}, this.panel.addEventListener(d.end, this._onTouchEndFn), this._onTouchMoveFn = function (e) {
					if (!l && !t._preventOpen && void 0 !== e.touches) {
						var n = e.touches[0].clientX - t._startOffsetX, i = t._currentOffsetX = n;
						if (!(Math.abs(i) > t._padding) && Math.abs(n) > 20) {
							t._opening = !0;
							var o = n * t._orientation;
							if (t._opened && o > 0 || !t._opened && o < 0) return;
							o <= 0 && (i = n + t._padding * t._orientation, t._opening = !1), t._moved || -1 !== u.className.search("slideout-open") || (u.className += " slideout-open"), t.panel.style[p + "transform"] = t.panel.style.transform = "translateX(" + i + "px)", t.emit("translate", i), t._moved = !0
						}
					}
				}, this.panel.addEventListener(d.move, this._onTouchMoveFn), this
			}, o.prototype.enableTouch = function () {
				return this._touch = !0, this
			}, o.prototype.disableTouch = function () {
				return this._touch = !1, this
			}, o.prototype.destroy = function () {
				return this.close(), c.removeEventListener(d.move, this._preventMove), this.panel.removeEventListener(d.start, this._resetTouchFn), this.panel.removeEventListener("touchcancel", this._onTouchCancelFn), this.panel.removeEventListener(d.end, this._onTouchEndFn), this.panel.removeEventListener(d.move, this._onTouchMoveFn), c.removeEventListener("scroll", this._onScrollFn), this.open = this.close = function () {
				}, this
			}, e.exports = o
		}, {decouple: 2, emitter: 3}], 2: [function (t, e, n) {
			"use strict";
			var i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (t) {
				window.setTimeout(t, 1e3 / 60)
			};
			e.exports = function (t, e, n) {
				function o(t) {
					a = t, s()
				}

				function s() {
					l || (i(r), l = !0)
				}

				function r() {
					n.call(t, a), l = !1
				}

				var a, l = !1;
				return t.addEventListener(e, o, !1), o
			}
		}, {}], 3: [function (t, e, n) {
			"use strict";
			var i = function (t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			};
			n.__esModule = !0;
			var o = function () {
				function t() {
					i(this, t)
				}

				return t.prototype.on = function (t, e) {
					return this._eventCollection = this._eventCollection || {}, this._eventCollection[t] = this._eventCollection[t] || [], this._eventCollection[t].push(e), this
				}, t.prototype.once = function (t, e) {
					function n() {
						i.off(t, n), e.apply(this, arguments)
					}

					var i = this;
					return n.listener = e, this.on(t, n), this
				}, t.prototype.off = function (t, e) {
					var n = void 0;
					return this._eventCollection && (n = this._eventCollection[t]) ? (n.forEach(function (t, i) {
						t !== e && t.listener !== e || n.splice(i, 1)
					}), 0 === n.length && delete this._eventCollection[t], this) : this
				}, t.prototype.emit = function (t) {
					for (var e = this, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
					var s = void 0;
					return this._eventCollection && (s = this._eventCollection[t]) ? ((s = s.slice(0)).forEach(function (t) {
						return t.apply(e, i)
					}), this) : this
				}, t
			}();
			n.default = o, e.exports = n.default
		}, {}]
	}, {}, [1])(1)
}), function (t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
}(function (t) {
	function e(e) {
		var r = e || window.event, a = l.call(arguments, 1), c = 0, h = 0, d = 0, p = 0, f = 0, m = 0;
		if (e = t.event.fix(r), e.type = "mousewheel", "detail" in r && (d = -1 * r.detail), "wheelDelta" in r && (d = r.wheelDelta), "wheelDeltaY" in r && (d = r.wheelDeltaY), "wheelDeltaX" in r && (h = -1 * r.wheelDeltaX), "axis" in r && r.axis === r.HORIZONTAL_AXIS && (h = -1 * d, d = 0), c = 0 === d ? h : d, "deltaY" in r && (d = -1 * r.deltaY, c = d), "deltaX" in r && (h = r.deltaX, 0 === d && (c = -1 * h)), 0 !== d || 0 !== h) {
			if (1 === r.deltaMode) {
				var g = t.data(this, "mousewheel-line-height");
				c *= g, d *= g, h *= g
			} else if (2 === r.deltaMode) {
				var v = t.data(this, "mousewheel-page-height");
				c *= v, d *= v, h *= v
			}
			if (p = Math.max(Math.abs(d), Math.abs(h)), (!s || s > p) && (s = p, i(r, p) && (s /= 40)), i(r, p) && (c /= 40, h /= 40, d /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / s), h = Math[h >= 1 ? "floor" : "ceil"](h / s), d = Math[d >= 1 ? "floor" : "ceil"](d / s), u.settings.normalizeOffset && this.getBoundingClientRect) {
				var y = this.getBoundingClientRect();
				f = e.clientX - y.left, m = e.clientY - y.top
			}
			return e.deltaX = h, e.deltaY = d, e.deltaFactor = s, e.offsetX = f, e.offsetY = m, e.deltaMode = 0, a.unshift(e, c, h, d), o && clearTimeout(o), o = setTimeout(n, 200), (t.event.dispatch || t.event.handle).apply(this, a)
		}
	}

	function n() {
		s = null
	}

	function i(t, e) {
		return u.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
	}

	var o, s, r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
		a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
		l = Array.prototype.slice;
	if (t.event.fixHooks) for (var c = r.length; c;) t.event.fixHooks[r[--c]] = t.event.mouseHooks;
	var u = t.event.special.mousewheel = {
		version: "3.1.12", setup: function () {
			if (this.addEventListener) for (var n = a.length; n;) this.addEventListener(a[--n], e, !1); else this.onmousewheel = e;
			t.data(this, "mousewheel-line-height", u.getLineHeight(this)), t.data(this, "mousewheel-page-height", u.getPageHeight(this))
		}, teardown: function () {
			if (this.removeEventListener) for (var n = a.length; n;) this.removeEventListener(a[--n], e, !1); else this.onmousewheel = null;
			t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
		}, getLineHeight: function (e) {
			var n = t(e), i = n["offsetParent" in t.fn ? "offsetParent" : "parent"]();
			return i.length || (i = t("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
		}, getPageHeight: function (e) {
			return t(e).height()
		}, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
	};
	t.fn.extend({
		mousewheel: function (t) {
			return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
		}, unmousewheel: function (t) {
			return this.unbind("mousewheel", t)
		}
	})
}), function (t) {
	"function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], t) : t("undefined" != typeof module && module.exports ? require("jquery") : jQuery)
}(function (t) {
	"use strict";

	function e(e) {
		return !e || void 0 !== e.allowPageScroll || void 0 === e.swipe && void 0 === e.swipeStatus || (e.allowPageScroll = c), void 0 !== e.click && void 0 === e.tap && (e.tap = e.click), e || (e = {}), e = t.extend({}, t.fn.swipe.defaults, e), this.each(function () {
			var i = t(this), o = i.data(k);
			o || (o = new n(this, e), i.data(k, o))
		})
	}

	function n(e, n) {
		function A(e) {
			if (!(ct() || t(e.target).closest(n.excludedElements, Ut).length > 0)) {
				var i = e.originalEvent ? e.originalEvent : e;
				if (!i.pointerType || "mouse" != i.pointerType || 0 != n.fallbackToMouseEvents) {
					var o, s = i.touches, r = s ? s[0] : i;
					return Vt = w, s ? Xt = s.length : !1 !== n.preventDefaultEvents && e.preventDefault(), Lt = 0, Mt = null, jt = null, qt = null, Rt = 0, Ht = 0, Ft = 0, Wt = 1, zt = 0, Bt = gt(), at(), ht(0, r), !s || Xt === n.fingers || n.fingers === y || q() ? (Gt = Et(), 2 == Xt && (ht(1, s[1]), Ht = Ft = bt(Yt[0].start, Yt[1].start)), (n.swipeStatus || n.pinchStatus) && (o = L(i, Vt))) : o = !1, !1 === o ? (Vt = C, L(i, Vt), o) : (n.hold && (ee = setTimeout(t.proxy(function () {
						Ut.trigger("hold", [i.target]), n.hold && (o = n.hold.call(Ut, i, i.target))
					}, this), n.longTapThreshold)), ut(!0), null)
				}
			}
		}

		function I(t) {
			var e = t.originalEvent ? t.originalEvent : t;
			if (Vt !== _ && Vt !== C && !lt()) {
				var i, o = e.touches, s = dt(o ? o[0] : e);
				if (Qt = Et(), o && (Xt = o.length), n.hold && clearTimeout(ee), Vt = x, 2 == Xt && (0 == Ht ? (ht(1, o[1]), Ht = Ft = bt(Yt[0].start, Yt[1].start)) : (dt(o[1]), Ft = bt(Yt[0].end, Yt[1].end), qt = xt(Yt[0].end, Yt[1].end)), Wt = wt(Ht, Ft), zt = Math.abs(Ht - Ft)), Xt === n.fingers || n.fingers === y || !o || q()) {
					if (Mt = Tt(s.start, s.end), jt = Tt(s.last, s.end), W(t, jt), Lt = _t(s.start, s.end), Rt = yt(), ft(Mt, Lt), i = L(e, Vt), !n.triggerOnTouchEnd || n.triggerOnTouchLeave) {
						var r = !0;
						if (n.triggerOnTouchLeave) {
							var a = St(this);
							r = kt(s.end, a)
						}
						!n.triggerOnTouchEnd && r ? Vt = P(x) : n.triggerOnTouchLeave && !r && (Vt = P(_)), Vt != C && Vt != _ || L(e, Vt)
					}
				} else Vt = C, L(e, Vt);
				!1 === i && (Vt = C, L(e, Vt))
			}
		}

		function N(t) {
			var e = t.originalEvent ? t.originalEvent : t, i = e.touches;
			if (i) {
				if (i.length && !lt()) return rt(e), !0;
				if (i.length && lt()) return !0
			}
			return lt() && (Xt = Zt), Qt = Et(), Rt = yt(), R() || !j() ? (Vt = C, L(e, Vt)) : n.triggerOnTouchEnd || !1 === n.triggerOnTouchEnd && Vt === x ? (!1 !== n.preventDefaultEvents && t.preventDefault(), Vt = _, L(e, Vt)) : !n.triggerOnTouchEnd && Q() ? (Vt = _, M(e, Vt, p)) : Vt === x && (Vt = C, L(e, Vt)), ut(!1), null
		}

		function D() {
			Xt = 0, Qt = 0, Gt = 0, Ht = 0, Ft = 0, Wt = 1, at(), ut(!1)
		}

		function O(t) {
			var e = t.originalEvent ? t.originalEvent : t;
			n.triggerOnTouchLeave && (Vt = P(_), L(e, Vt))
		}

		function $() {
			Ut.unbind(Nt, A), Ut.unbind(Pt, D), Ut.unbind(Dt, I), Ut.unbind(Ot, N), $t && Ut.unbind($t, O), ut(!1)
		}

		function P(t) {
			var e = t, i = F(), o = j(), s = R();
			return !i || s ? e = C : !o || t != x || n.triggerOnTouchEnd && !n.triggerOnTouchLeave ? !o && t == _ && n.triggerOnTouchLeave && (e = C) : e = _, e
		}

		function L(t, e) {
			var n, i = t.touches;
			return (X() || V()) && (n = M(t, e, h)), (B() || q()) && !1 !== n && (n = M(t, e, d)), ot() && !1 !== n ? n = M(t, e, f) : st() && !1 !== n ? n = M(t, e, m) : it() && !1 !== n && (n = M(t, e, p)), e === C && D(t), e === _ && (i ? i.length || D(t) : D(t)), n
		}

		function M(e, c, u) {
			var g;
			if (u == h) {
				if (Ut.trigger("swipeStatus", [c, Mt || null, Lt || 0, Rt || 0, Xt, Yt, jt]), n.swipeStatus && !1 === (g = n.swipeStatus.call(Ut, e, c, Mt || null, Lt || 0, Rt || 0, Xt, Yt, jt))) return !1;
				if (c == _ && U()) {
					if (clearTimeout(te), clearTimeout(ee), Ut.trigger("swipe", [Mt, Lt, Rt, Xt, Yt, jt]), n.swipe && !1 === (g = n.swipe.call(Ut, e, Mt, Lt, Rt, Xt, Yt, jt))) return !1;
					switch (Mt) {
						case i:
							Ut.trigger("swipeLeft", [Mt, Lt, Rt, Xt, Yt, jt]), n.swipeLeft && (g = n.swipeLeft.call(Ut, e, Mt, Lt, Rt, Xt, Yt, jt));
							break;
						case o:
							Ut.trigger("swipeRight", [Mt, Lt, Rt, Xt, Yt, jt]), n.swipeRight && (g = n.swipeRight.call(Ut, e, Mt, Lt, Rt, Xt, Yt, jt));
							break;
						case s:
							Ut.trigger("swipeUp", [Mt, Lt, Rt, Xt, Yt, jt]), n.swipeUp && (g = n.swipeUp.call(Ut, e, Mt, Lt, Rt, Xt, Yt, jt));
							break;
						case r:
							Ut.trigger("swipeDown", [Mt, Lt, Rt, Xt, Yt, jt]), n.swipeDown && (g = n.swipeDown.call(Ut, e, Mt, Lt, Rt, Xt, Yt, jt))
					}
				}
			}
			if (u == d) {
				if (Ut.trigger("pinchStatus", [c, qt || null, zt || 0, Rt || 0, Xt, Wt, Yt]), n.pinchStatus && !1 === (g = n.pinchStatus.call(Ut, e, c, qt || null, zt || 0, Rt || 0, Xt, Wt, Yt))) return !1;
				if (c == _ && z()) switch (qt) {
					case a:
						Ut.trigger("pinchIn", [qt || null, zt || 0, Rt || 0, Xt, Wt, Yt]), n.pinchIn && (g = n.pinchIn.call(Ut, e, qt || null, zt || 0, Rt || 0, Xt, Wt, Yt));
						break;
					case l:
						Ut.trigger("pinchOut", [qt || null, zt || 0, Rt || 0, Xt, Wt, Yt]), n.pinchOut && (g = n.pinchOut.call(Ut, e, qt || null, zt || 0, Rt || 0, Xt, Wt, Yt))
				}
			}
			return u == p ? c !== C && c !== _ || (clearTimeout(te), clearTimeout(ee), K() && !tt() ? (Jt = Et(), te = setTimeout(t.proxy(function () {
				Jt = null, Ut.trigger("tap", [e.target]), n.tap && (g = n.tap.call(Ut, e, e.target))
			}, this), n.doubleTapThreshold)) : (Jt = null, Ut.trigger("tap", [e.target]), n.tap && (g = n.tap.call(Ut, e, e.target)))) : u == f ? c !== C && c !== _ || (clearTimeout(te), clearTimeout(ee), Jt = null, Ut.trigger("doubletap", [e.target]), n.doubleTap && (g = n.doubleTap.call(Ut, e, e.target))) : u == m && (c !== C && c !== _ || (clearTimeout(te), Jt = null, Ut.trigger("longtap", [e.target]), n.longTap && (g = n.longTap.call(Ut, e, e.target)))), g
		}

		function j() {
			var t = !0;
			return null !== n.threshold && (t = Lt >= n.threshold), t
		}

		function R() {
			var t = !1;
			return null !== n.cancelThreshold && null !== Mt && (t = mt(Mt) - Lt >= n.cancelThreshold), t
		}

		function H() {
			return null === n.pinchThreshold || zt >= n.pinchThreshold
		}

		function F() {
			return !n.maxTimeThreshold || !(Rt >= n.maxTimeThreshold)
		}

		function W(t, e) {
			if (!1 !== n.preventDefaultEvents) if (n.allowPageScroll === c) t.preventDefault(); else {
				var a = n.allowPageScroll === u;
				switch (e) {
					case i:
						(n.swipeLeft && a || !a && n.allowPageScroll != g) && t.preventDefault();
						break;
					case o:
						(n.swipeRight && a || !a && n.allowPageScroll != g) && t.preventDefault();
						break;
					case s:
						(n.swipeUp && a || !a && n.allowPageScroll != v) && t.preventDefault();
						break;
					case r:
						(n.swipeDown && a || !a && n.allowPageScroll != v) && t.preventDefault()
				}
			}
		}

		function z() {
			var t = Y(), e = G(), n = H();
			return t && e && n
		}

		function q() {
			return !!(n.pinchStatus || n.pinchIn || n.pinchOut)
		}

		function B() {
			return !(!z() || !q())
		}

		function U() {
			var t = F(), e = j(), n = Y(), i = G();
			return !R() && i && n && e && t
		}

		function V() {
			return !!(n.swipe || n.swipeStatus || n.swipeLeft || n.swipeRight || n.swipeUp || n.swipeDown)
		}

		function X() {
			return !(!U() || !V())
		}

		function Y() {
			return Xt === n.fingers || n.fingers === y || !T
		}

		function G() {
			return 0 !== Yt[0].end.x
		}

		function Q() {
			return !!n.tap
		}

		function K() {
			return !!n.doubleTap
		}

		function Z() {
			return !!n.longTap
		}

		function J() {
			if (null == Jt) return !1;
			var t = Et();
			return K() && t - Jt <= n.doubleTapThreshold
		}

		function tt() {
			return J()
		}

		function et() {
			return (1 === Xt || !T) && (isNaN(Lt) || Lt < n.threshold)
		}

		function nt() {
			return Rt > n.longTapThreshold && b > Lt
		}

		function it() {
			return !(!et() || !Q())
		}

		function ot() {
			return !(!J() || !K())
		}

		function st() {
			return !(!nt() || !Z())
		}

		function rt(t) {
			Kt = Et(), Zt = t.touches.length + 1
		}

		function at() {
			Kt = 0, Zt = 0
		}

		function lt() {
			var t = !1;
			return Kt && Et() - Kt <= n.fingerReleaseThreshold && (t = !0), t
		}

		function ct() {
			return !(!0 !== Ut.data(k + "_intouch"))
		}

		function ut(t) {
			Ut && (!0 === t ? (Ut.bind(Dt, I), Ut.bind(Ot, N), $t && Ut.bind($t, O)) : (Ut.unbind(Dt, I, !1), Ut.unbind(Ot, N, !1), $t && Ut.unbind($t, O, !1)), Ut.data(k + "_intouch", !0 === t))
		}

		function ht(t, e) {
			var n = {start: {x: 0, y: 0}, last: {x: 0, y: 0}, end: {x: 0, y: 0}};
			return n.start.x = n.last.x = n.end.x = e.pageX || e.clientX, n.start.y = n.last.y = n.end.y = e.pageY || e.clientY, Yt[t] = n, n
		}

		function dt(t) {
			var e = void 0 !== t.identifier ? t.identifier : 0, n = pt(e);
			return null === n && (n = ht(e, t)), n.last.x = n.end.x, n.last.y = n.end.y, n.end.x = t.pageX || t.clientX, n.end.y = t.pageY || t.clientY, n
		}

		function pt(t) {
			return Yt[t] || null
		}

		function ft(t, e) {
			t != c && (e = Math.max(e, mt(t)), Bt[t].distance = e)
		}

		function mt(t) {
			return Bt[t] ? Bt[t].distance : void 0
		}

		function gt() {
			var t = {};
			return t[i] = vt(i), t[o] = vt(o), t[s] = vt(s), t[r] = vt(r), t
		}

		function vt(t) {
			return {direction: t, distance: 0}
		}

		function yt() {
			return Qt - Gt
		}

		function bt(t, e) {
			var n = Math.abs(t.x - e.x), i = Math.abs(t.y - e.y);
			return Math.round(Math.sqrt(n * n + i * i))
		}

		function wt(t, e) {
			return (e / t * 1).toFixed(2)
		}

		function xt() {
			return 1 > Wt ? l : a
		}

		function _t(t, e) {
			return Math.round(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)))
		}

		function Ct(t, e) {
			var n = t.x - e.x, i = e.y - t.y, o = Math.atan2(i, n), s = Math.round(180 * o / Math.PI);
			return 0 > s && (s = 360 - Math.abs(s)), s
		}

		function Tt(t, e) {
			if (At(t, e)) return c;
			var n = Ct(t, e);
			return 45 >= n && n >= 0 ? i : 360 >= n && n >= 315 ? i : n >= 135 && 225 >= n ? o : n > 45 && 135 > n ? r : s
		}

		function Et() {
			return (new Date).getTime()
		}

		function St(e) {
			var n = (e = t(e)).offset();
			return {left: n.left, right: n.left + e.outerWidth(), top: n.top, bottom: n.top + e.outerHeight()}
		}

		function kt(t, e) {
			return t.x > e.left && t.x < e.right && t.y > e.top && t.y < e.bottom
		}

		function At(t, e) {
			return t.x == e.x && t.y == e.y
		}

		var n = t.extend({}, n), It = T || S || !n.fallbackToMouseEvents,
			Nt = It ? S ? E ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
			Dt = It ? S ? E ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
			Ot = It ? S ? E ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
			$t = It ? S ? "mouseleave" : null : "mouseleave",
			Pt = S ? E ? "MSPointerCancel" : "pointercancel" : "touchcancel", Lt = 0, Mt = null, jt = null, Rt = 0,
			Ht = 0, Ft = 0, Wt = 1, zt = 0, qt = 0, Bt = null, Ut = t(e), Vt = "start", Xt = 0, Yt = {}, Gt = 0, Qt = 0,
			Kt = 0, Zt = 0, Jt = 0, te = null, ee = null;
		try {
			Ut.bind(Nt, A), Ut.bind(Pt, D)
		} catch (e) {
			t.error("events not supported " + Nt + "," + Pt + " on jQuery.swipe")
		}
		this.enable = function () {
			return this.disable(), Ut.bind(Nt, A), Ut.bind(Pt, D), Ut
		}, this.disable = function () {
			return $(), Ut
		}, this.destroy = function () {
			$(), Ut.data(k, null), Ut = null
		}, this.option = function (e, i) {
			if ("object" == typeof e) n = t.extend(n, e); else if (void 0 !== n[e]) {
				if (void 0 === i) return n[e];
				n[e] = i
			} else {
				if (!e) return n;
				t.error("Option " + e + " does not exist on jQuery.swipe.options")
			}
			return null
		}
	}

	var i = "left", o = "right", s = "up", r = "down", a = "in", l = "out", c = "none", u = "auto", h = "swipe",
		d = "pinch", p = "tap", f = "doubletap", m = "longtap", g = "horizontal", v = "vertical", y = "all", b = 10,
		w = "start", x = "move", _ = "end", C = "cancel", T = "ontouchstart" in window,
		E = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !T,
		S = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !T, k = "TouchSwipe", A = {
			fingers: 1,
			threshold: 75,
			cancelThreshold: null,
			pinchThreshold: 20,
			maxTimeThreshold: null,
			fingerReleaseThreshold: 250,
			longTapThreshold: 500,
			doubleTapThreshold: 200,
			swipe: null,
			swipeLeft: null,
			swipeRight: null,
			swipeUp: null,
			swipeDown: null,
			swipeStatus: null,
			pinchIn: null,
			pinchOut: null,
			pinchStatus: null,
			click: null,
			tap: null,
			doubleTap: null,
			longTap: null,
			hold: null,
			triggerOnTouchEnd: !0,
			triggerOnTouchLeave: !1,
			allowPageScroll: "auto",
			fallbackToMouseEvents: !0,
			excludedElements: ".noSwipe",
			preventDefaultEvents: !0
		};
	t.fn.swipe = function (n) {
		var i = t(this), o = i.data(k);
		if (o && "string" == typeof n) {
			if (o[n]) return o[n].apply(o, Array.prototype.slice.call(arguments, 1));
			t.error("Method " + n + " does not exist on jQuery.swipe")
		} else if (o && "object" == typeof n) o.option.apply(o, arguments); else if (!(o || "object" != typeof n && n)) return e.apply(this, arguments);
		return i
	}, t.fn.swipe.version = "1.6.18", t.fn.swipe.defaults = A, t.fn.swipe.phases = {
		PHASE_START: w,
		PHASE_MOVE: x,
		PHASE_END: _,
		PHASE_CANCEL: C
	}, t.fn.swipe.directions = {LEFT: i, RIGHT: o, UP: s, DOWN: r, IN: a, OUT: l}, t.fn.swipe.pageScroll = {
		NONE: c,
		HORIZONTAL: g,
		VERTICAL: v,
		AUTO: u
	}, t.fn.swipe.fingers = {ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5, ALL: y}
}), function (t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).SmartBanner = t()
}(function () {
	return function t(e, n, i) {
		function o(r, a) {
			if (!n[r]) {
				if (!e[r]) {
					var l = "function" == typeof require && require;
					if (!a && l) return l(r, !0);
					if (s) return s(r, !0);
					throw l = Error("Cannot find module '" + r + "'"), l.code = "MODULE_NOT_FOUND", l
				}
				l = n[r] = {exports: {}}, e[r][0].call(l.exports, function (t) {
					var n = e[r][1][t];
					return o(n || t)
				}, l, l.exports, t, e, n, i)
			}
			return n[r].exports
		}

		for (var s = "function" == typeof require && require, r = 0; r < i.length; r++) o(i[r]);
		return o
	}({
		1: [function (t, e, n) {
			var i = t("xtend/mutable"), o = t("component-query"), s = t("get-doc"), r = s && s.documentElement,
				a = t("cookie-cutter"), l = t("ua-parser-js"),
				c = (navigator.language || navigator.userLanguage || navigator.browserLanguage).slice(-2) || "us", u = {
					ios: {
						appMeta: "apple-itunes-app",
						iconRels: ["apple-touch-icon-precomposed", "apple-touch-icon"],
						getStoreLink: function () {
							return "https://itunes.apple.com/" + this.options.appStoreLanguage + "/app/id" + this.appId
						}
					},
					android: {
						appMeta: "google-play-app",
						iconRels: ["android-touch-icon", "apple-touch-icon-precomposed", "apple-touch-icon"],
						getStoreLink: function () {
							return "http://play.google.com/store/apps/details?id=" + this.appId
						}
					},
					windows: {
						appMeta: "msApplication-ID",
						iconRels: ["windows-touch-icon", "apple-touch-icon-precomposed", "apple-touch-icon"],
						getStoreLink: function () {
							return "http://www.windowsphone.com/s?appid=" + this.appId
						}
					}
				};
			(t = function (t) {
				var e = l(navigator.userAgent);
				this.options = i({}, {
					daysHidden: 15,
					daysReminder: 90,
					appStoreLanguage: c,
					button: "OPEN",
					store: {ios: "On the App Store", android: "In Google Play", windows: "In the Windows Store"},
					price: {ios: "FREE", android: "FREE", windows: "FREE"},
					theme: "",
					icon: "",
					force: ""
				}, t || {}), this.options.force ? this.type = this.options.force : "Windows Phone" === e.os.name || "Windows Mobile" === e.os.name ? this.type = "windows" : "iOS" === e.os.name ? this.type = "ios" : "Android" === e.os.name && (this.type = "android"), !this.type || "ios" === this.type && "Mobile Safari" === e.browser.name && 6 <= parseInt(e.os.version) || navigator.standalone || a.get("smartbanner-closed") || a.get("smartbanner-installed") || (i(this, u[this.type]), this.parseAppId() && (this.create(), this.show()))
			}).prototype = {
				constructor: t, create: function () {
					var t, e = this.getStoreLink(),
						n = this.options.price[this.type] + " - " + this.options.store[this.type];
					if (this.options.icon) t = this.options.icon; else for (var i = 0; i < this.iconRels.length; i++) {
						var r = o('link[rel="' + this.iconRels[i] + '"]');
						if (r) {
							t = r.getAttribute("href");
							break
						}
					}
					var a = s.createElement("div");
					a.className = "smartbanner smartbanner-" + (this.options.theme || this.type), a.innerHTML = '<div class="smartbanner-container"><a href="javascript:void(0);" class="smartbanner-close">&times;</a><span class="smartbanner-icon" style="background-image: url(' + t + ')"></span><div class="smartbanner-info"><div class="smartbanner-title">' + this.options.title + "</div><div>" + this.options.author + "</div><span>" + n + '</span></div><a href="' + e + '" class="smartbanner-button"><span class="smartbanner-button-text">' + this.options.button + "</span></a></div>", s.body ? s.body.appendChild(a) : s && s.addEventListener("DOMContentLoaded", function () {
						s.body.appendChild(a)
					}), o(".smartbanner-button", a).addEventListener("click", this.install.bind(this), !1), o(".smartbanner-close", a).addEventListener("click", this.close.bind(this), !1)
				}, hide: function () {
					r.classList.remove("smartbanner-show")
				}, show: function () {
					r.classList.add("smartbanner-show")
				}, close: function () {
					this.hide(), a.set("smartbanner-closed", "true", {
						path: "/",
						expires: new Date(+new Date + 864e5 * this.options.daysHidden)
					})
				}, install: function () {
					this.hide(), a.set("smartbanner-installed", "true", {
						path: "/",
						expires: new Date(+new Date + 864e5 * this.options.daysReminder)
					})
				}, parseAppId: function () {
					var t = o('meta[name="' + this.appMeta + '"]');
					if (t) return this.appId = "windows" === this.type ? t.getAttribute("content") : /app-id=([^\s,]+)/.exec(t.getAttribute("content"))[1]
				}
			}, e.exports = t
		}, {"component-query": 2, "cookie-cutter": 3, "get-doc": 4, "ua-parser-js": 6, "xtend/mutable": 7}],
		2: [function (t, e, n) {
			function i(t, e) {
				return e.querySelector(t)
			}

			(n = e.exports = function (t, e) {
				return e = e || document, i(t, e)
			}).all = function (t, e) {
				return (e = e || document).querySelectorAll(t)
			}, n.engine = function (t) {
				if (!t.one) throw Error(".one callback required");
				if (!t.all) throw Error(".all callback required");
				return i = t.one, n.all = t.all, n
			}
		}, {}],
		3: [function (t, e, n) {
			n = e.exports = function (t) {
				return t || (t = {}), "string" == typeof t && (t = {cookie: t}), void 0 === t.cookie && (t.cookie = ""), {
					get: function (e) {
						for (var n = t.cookie.split(/;\s*/), i = 0; i < n.length; i++) {
							var o = n[i].split("=");
							if (unescape(o[0]) === e) return unescape(o[1])
						}
					}, set: function (e, n, i) {
						return i || (i = {}), e = escape(e) + "=" + escape(n), i.expires && (e += "; expires=" + i.expires), i.path && (e += "; path=" + escape(i.path)), t.cookie = e
					}
				}
			}, "undefined" != typeof document && (t = n(document), n.get = t.get, n.set = t.set)
		}, {}],
		4: [function (t, e, n) {
			t = t("has-dom"), e.exports = t() ? document : null
		}, {"has-dom": 5}],
		5: [function (t, e, n) {
			e.exports = function () {
				return "undefined" != typeof window && "undefined" != typeof document && "function" == typeof document.createElement
			}
		}, {}],
		6: [function (t, e, n) {
			!function (t, i) {
				var o = {
					extend: function (t, e) {
						for (var n in e) -1 !== "browser cpu device engine os".indexOf(n) && 0 == e[n].length % 2 && (t[n] = e[n].concat(t[n]));
						return t
					}, has: function (t, e) {
						return "string" == typeof t && -1 !== e.toLowerCase().indexOf(t.toLowerCase())
					}, lowerize: function (t) {
						return t.toLowerCase()
					}, major: function (t) {
						return "string" == typeof t ? t.split(".")[0] : i
					}
				}, s = function () {
					for (var t, e, n, o, s, r, a, l = 0, c = arguments; l < c.length && !r;) {
						var u = c[l], h = c[l + 1];
						if (void 0 === t) for (o in t = {}, h) h.hasOwnProperty(o) && ("object" == typeof(s = h[o]) ? t[s[0]] = i : t[s] = i);
						for (e = n = 0; e < u.length && !r;) if (r = u[e++].exec(this.getUA())) for (o = 0; o < h.length; o++) a = r[++n], "object" == typeof(s = h[o]) && 0 < s.length ? 2 == s.length ? t[s[0]] = "function" == typeof s[1] ? s[1].call(this, a) : s[1] : 3 == s.length ? t[s[0]] = "function" != typeof s[1] || s[1].exec && s[1].test ? a ? a.replace(s[1], s[2]) : i : a ? s[1].call(this, a, s[2]) : i : 4 == s.length && (t[s[0]] = a ? s[3].call(this, a.replace(s[1], s[2])) : i) : t[s] = a || i;
						l += 2
					}
					return t
				}, r = function (t, e) {
					for (var n in e) if ("object" == typeof e[n] && 0 < e[n].length) {
						for (var s = 0; s < e[n].length; s++) if (o.has(e[n][s], t)) return "?" === n ? i : n
					} else if (o.has(e[n], t)) return "?" === n ? i : n;
					return t
				}, a = {
					ME: "4.90",
					"NT 3.11": "NT3.51",
					"NT 4.0": "NT4.0",
					2e3: "NT 5.0",
					XP: ["NT 5.1", "NT 5.2"],
					Vista: "NT 6.0",
					7: "NT 6.1",
					8: "NT 6.2",
					8.1: "NT 6.3",
					10: ["NT 6.4", "NT 10.0"],
					RT: "ARM"
				}, l = {
					browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], ["name", "version"], [/\s(opr)\/([\w\.]+)/i], [["name", "Opera"], "version"], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i], ["name", "version"], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [["name", "IE"], "version"], [/(edge)\/((\d+)?[\w\.]+)/i], ["name", "version"], [/(yabrowser)\/([\w\.]+)/i], [["name", "Yandex"], "version"], [/(comodo_dragon)\/([\w\.]+)/i], [["name", /_/g, " "], "version"], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i], ["name", "version"], [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /JUC.+(ucweb)[\/\s]?([\w\.]+)/i], [["name", "UCBrowser"], "version"], [/(dolfin)\/([\w\.]+)/i], [["name", "Dolphin"], "version"], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [["name", "Chrome"], "version"], [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i], ["version", ["name", "MIUI Browser"]], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i], ["version", ["name", "Android Browser"]], [/FBAV\/([\w\.]+);/i], ["version", ["name", "Facebook"]], [/fxios\/([\w\.-]+)/i], ["version", ["name", "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], ["version", ["name", "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], ["version", "name"], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], ["name", ["version", r, {
						"1.0": "/8",
						1.2: "/1",
						1.3: "/3",
						"2.0": "/412",
						"2.0.2": "/416",
						"2.0.3": "/417",
						"2.0.4": "/419",
						"?": "/"
					}]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], ["name", "version"], [/(navigator|netscape)\/([\w\.-]+)/i], [["name", "Netscape"], "version"], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], ["name", "version"]],
					cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [["architecture", "amd64"]], [/(ia32(?=;))/i], [["architecture", o.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [["architecture", /ower/, "", o.lowerize]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [["architecture", o.lowerize]]],
					device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], ["model", "vendor", ["type", "tablet"]], [/applecoremedia\/[\w\.]+ \((ipad)/], ["model", ["vendor", "Apple"], ["type", "tablet"]], [/(apple\s{0,1}tv)/i], [["model", "Apple TV"], ["vendor", "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], ["vendor", "model", ["type", "tablet"]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i], ["model", ["vendor", "Amazon"], ["type", "tablet"]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i], [["model", r, {"Fire Phone": ["SD", "KF"]}], ["vendor", "Amazon"], ["type", "mobile"]], [/\((ip[honed|\s\w*]+);.+(apple)/i], ["model", "vendor", ["type", "mobile"]], [/\((ip[honed|\s\w*]+);/i], ["model", ["vendor", "Apple"], ["type", "mobile"]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], ["vendor", "model", ["type", "mobile"]], [/\(bb10;\s(\w+)/i], ["model", ["vendor", "BlackBerry"], ["type", "mobile"]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i], ["model", ["vendor", "Asus"], ["type", "tablet"]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [["vendor", "Sony"], ["model", "Xperia Tablet"], ["type", "tablet"]], [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i], [["vendor", "Sony"], ["model", "Xperia Phone"], ["type", "mobile"]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], ["vendor", "model", ["type", "console"]], [/android.+;\s(shield)\sbuild/i], ["model", ["vendor", "Nvidia"], ["type", "console"]], [/(playstation\s[34portablevi]+)/i], ["model", ["vendor", "Sony"], ["type", "console"]], [/(sprint\s(\w+))/i], [["vendor", r, {
						HTC: "APA",
						Sprint: "Sprint"
					}], ["model", r, {"Evo Shift 4G": "7373KT"}], ["type", "mobile"]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], ["vendor", "model", ["type", "tablet"]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i], ["vendor", ["model", /_/g, " "], ["type", "mobile"]], [/(nexus\s9)/i], ["model", ["vendor", "HTC"], ["type", "tablet"]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], ["model", ["vendor", "Microsoft"], ["type", "console"]], [/(kin\.[onetw]{3})/i], [["model", /\./g, " "], ["vendor", "Microsoft"], ["type", "mobile"]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s[6])/i], ["model", ["vendor", "Motorola"], ["type", "mobile"]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], ["model", ["vendor", "Motorola"], ["type", "tablet"]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [["vendor", "Samsung"], "model", ["type", "tablet"]], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [["vendor", "Samsung"], "model", ["type", "mobile"]], [/(samsung);smarttv/i], ["vendor", "model", ["type", "smarttv"]], [/\(dtv[\);].+(aquos)/i], ["model", ["vendor", "Sharp"], ["type", "smarttv"]], [/sie-(\w+)*/i], ["model", ["vendor", "Siemens"], ["type", "mobile"]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [["vendor", "Nokia"], "model", ["type", "mobile"]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], ["model", ["vendor", "Acer"], ["type", "tablet"]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [["vendor", "LG"], "model", ["type", "tablet"]], [/(lg) netcast\.tv/i], ["vendor", "model", ["type", "smarttv"]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i], ["model", ["vendor", "LG"], ["type", "mobile"]], [/android.+(ideatab[a-z0-9\-\s]+)/i], ["model", ["vendor", "Lenovo"], ["type", "tablet"]], [/linux;.+((jolla));/i], ["vendor", "model", ["type", "mobile"]], [/((pebble))app\/[\d\.]+\s/i], ["vendor", "model", ["type", "wearable"]], [/android.+;\s(glass)\s\d/i], ["model", ["vendor", "Google"], ["type", "wearable"]], [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i], [["model", /_/g, " "], ["vendor", "Xiaomi"], ["type", "mobile"]], [/\s(tablet)[;\/\s]/i, /\s(mobile)[;\/\s]/i], [["type", o.lowerize], "vendor", "model"]],
					engine: [[/windows.+\sedge\/([\w\.]+)/i], ["version", ["name", "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], ["name", "version"], [/rv\:([\w\.]+).*(gecko)/i], ["version", "name"]],
					os: [[/microsoft\s(windows)\s(vista|xp)/i], ["name", "version"], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], ["name", ["version", r, a]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [["name", "Windows"], ["version", r, a]], [/\((bb)(10);/i], [["name", "BlackBerry"], "version"], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i], ["name", "version"], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [["name", "Symbian"], "version"], [/\((series40);/i], ["name"], [/mozilla.+\(mobile;.+gecko.+firefox/i], [["name", "Firefox OS"], "version"], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], ["name", "version"], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [["name", "Chromium OS"], "version"], [/(sunos)\s?([\w\.]+\d)*/i], [["name", "Solaris"], "version"], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], ["name", "version"], [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i], [["name", "iOS"], ["version", /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i], [["name", "Mac OS"], ["version", /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i], ["name", "version"]]
				}, c = function (e, n) {
					if (!(this instanceof c)) return new c(e, n).getResult();
					var i = e || (t && t.navigator && t.navigator.userAgent ? t.navigator.userAgent : ""),
						r = n ? o.extend(l, n) : l;
					return this.getBrowser = function () {
						var t = s.apply(this, r.browser);
						return t.major = o.major(t.version), t
					}, this.getCPU = function () {
						return s.apply(this, r.cpu)
					}, this.getDevice = function () {
						return s.apply(this, r.device)
					}, this.getEngine = function () {
						return s.apply(this, r.engine)
					}, this.getOS = function () {
						return s.apply(this, r.os)
					}, this.getResult = function () {
						return {
							ua: this.getUA(),
							browser: this.getBrowser(),
							engine: this.getEngine(),
							os: this.getOS(),
							device: this.getDevice(),
							cpu: this.getCPU()
						}
					}, this.getUA = function () {
						return i
					}, this.setUA = function (t) {
						return i = t, this
					}, this.setUA(i), this
				};
				c.VERSION = "0.7.10", c.BROWSER = {
					NAME: "name",
					MAJOR: "major",
					VERSION: "version"
				}, c.CPU = {ARCHITECTURE: "architecture"}, c.DEVICE = {
					MODEL: "model",
					VENDOR: "vendor",
					TYPE: "type",
					CONSOLE: "console",
					MOBILE: "mobile",
					SMARTTV: "smarttv",
					TABLET: "tablet",
					WEARABLE: "wearable",
					EMBEDDED: "embedded"
				}, c.ENGINE = {NAME: "name", VERSION: "version"}, c.OS = {
					NAME: "name",
					VERSION: "version"
				}, void 0 !== n ? (void 0 !== e && e.exports && (n = e.exports = c), n.UAParser = c) : t.UAParser = c;
				var u = t.jQuery || t.Zepto;
				if (void 0 !== u) {
					var h = new c;
					u.ua = h.getResult(), u.ua.get = function () {
						return h.getUA()
					}, u.ua.set = function (t) {
						h.setUA(t), t = h.getResult();
						for (var e in t) u.ua[e] = t[e]
					}
				}
			}("object" == typeof window ? window : this)
		}, {}],
		7: [function (t, e, n) {
			e.exports = function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var n, i = arguments[e];
					for (n in i) i.hasOwnProperty(n) && (t[n] = i[n])
				}
				return t
			}
		}, {}]
	}, {}, [1])(1)
}), function (t) {
	var e = !1;
	if ("function" == typeof define && define.amd && (define(t), e = !0), "object" == typeof exports && (module.exports = t(), e = !0), !e) {
		var n = window.Cookies, i = window.Cookies = t();
		i.noConflict = function () {
			return window.Cookies = n, i
		}
	}
}(function () {
	function t() {
		for (var t = 0, e = {}; t < arguments.length; t++) {
			var n = arguments[t];
			for (var i in n) e[i] = n[i]
		}
		return e
	}

	function e(n) {
		function i(e, o, s) {
			var r;
			if ("undefined" != typeof document) {
				if (arguments.length > 1) {
					if ("number" == typeof(s = t({path: "/"}, i.defaults, s)).expires) {
						var a = new Date;
						a.setMilliseconds(a.getMilliseconds() + 864e5 * s.expires), s.expires = a
					}
					try {
						r = JSON.stringify(o), /^[\{\[]/.test(r) && (o = r)
					} catch (t) {
					}
					return o = n.write ? n.write(o, e) : encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)), e = e.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), e = e.replace(/[\(\)]/g, escape), document.cookie = [e, "=", o, s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("")
				}
				e || (r = {});
				for (var l = document.cookie ? document.cookie.split("; ") : [], c = /(%[0-9A-Z]{2})+/g, u = 0; u < l.length; u++) {
					var h = l[u].split("="), d = h.slice(1).join("=");
					'"' === d.charAt(0) && (d = d.slice(1, -1));
					try {
						var p = h[0].replace(c, decodeURIComponent);
						if (d = n.read ? n.read(d, p) : n(d, p) || d.replace(c, decodeURIComponent), this.json) try {
							d = JSON.parse(d)
						} catch (t) {
						}
						if (e === p) {
							r = d;
							break
						}
						e || (r[p] = d)
					} catch (t) {
					}
				}
				return r
			}
		}

		return i.set = i, i.get = function (t) {
			return i.call(i, t)
		}, i.getJSON = function () {
			return i.apply({json: !0}, [].slice.call(arguments))
		}, i.defaults = {}, i.remove = function (e, n) {
			i(e, "", t(n, {expires: -1}))
		}, i.withConverter = e, i
	}

	return e(function () {
	})
}), function (t, e, n, i) {
	"use strict";

	function o(t) {
		var e = t.currentTarget, i = t.data ? t.data.options : {}, o = t.data ? t.data.items : [], s = "", r = 0;
		t.preventDefault(), t.stopPropagation(), n(e).attr("data-fancybox") && (s = n(e).data("fancybox")), s ? (o = o.length ? o.filter('[data-fancybox="' + s + '"]') : n("[data-fancybox=" + s + "]"), r = o.index(e)) : o = [e], n.fancybox.open(o, i, r)
	}

	if (!n) return i;
	var s = {
		speed: 330,
		loop: !0,
		opacity: "auto",
		margin: [44, 0],
		gutter: 30,
		infobar: !0,
		buttons: !0,
		slideShow: !0,
		fullScreen: !0,
		thumbs: !0,
		closeBtn: !0,
		smallBtn: "auto",
		image: {preload: "auto", protect: !1},
		ajax: {settings: {data: {fancybox: !0}}},
		iframe: {
			tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
			preload: !0,
			scrolling: "no",
			css: {}
		},
		baseClass: "",
		slideClass: "",
		baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-controls"><div class="fancybox-infobar"><button data-fancybox-previous class="fancybox-button fancybox-button--left" title="Previous"></button><div class="fancybox-infobar__body"><span class="js-fancybox-index"></span>&nbsp;/&nbsp;<span class="js-fancybox-count"></span></div><button data-fancybox-next class="fancybox-button fancybox-button--right" title="Next"></button></div><div class="fancybox-buttons"><button data-fancybox-close class="fancybox-button fancybox-button--close" title="Close (Esc)"></button></div></div><div class="fancybox-slider-wrap"><div class="fancybox-slider"></div></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div>',
		spinnerTpl: '<div class="fancybox-loading"></div>',
		errorTpl: '<div class="fancybox-error"><p>The requested content cannot be loaded. <br /> Please try again later.<p></div>',
		closeTpl: '<button data-fancybox-close class="fancybox-close-small">\xd7</button>',
		parentEl: "body",
		touch: !0,
		keyboard: !0,
		focus: !0,
		closeClickOutside: !0,
		beforeLoad: n.noop,
		afterLoad: n.noop,
		beforeMove: n.noop,
		afterMove: n.noop,
		onComplete: n.noop,
		onInit: n.noop,
		beforeClose: n.noop,
		afterClose: n.noop,
		onActivate: n.noop,
		onDeactivate: n.noop
	}, r = n(t), a = n(e), l = 0, c = function (t) {
		return t && t.hasOwnProperty && t instanceof n
	}, u = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (e) {
		t.setTimeout(e, 1e3 / 60)
	}, h = function (i) {
		var o;
		return "function" == typeof n && i instanceof n && (i = i[0]), (o = i.getBoundingClientRect()).bottom > 0 && o.right > 0 && o.left < (t.innerWidth || e.documentElement.clientWidth) && o.top < (t.innerHeight || e.documentElement.clientHeight)
	}, d = function (t, i, o) {
		var r = this;
		r.opts = n.extend(!0, {index: o}, s, i || {}), r.id = r.opts.id || ++l, r.group = [], r.currIndex = parseInt(r.opts.index, 10) || 0, r.prevIndex = null, r.prevPos = null, r.currPos = 0, r.firstRun = null, r.createGroup(t), r.group.length && (r.$lastFocus = n(e.activeElement).blur(), r.slides = {}, r.init(t))
	};
	n.extend(d.prototype, {
		init: function () {
			var t, e, i = this;
			i.scrollTop = r.scrollTop(), i.scrollLeft = r.scrollLeft(), n.fancybox.isTouch || n("html").hasClass("fancybox-enabled") || (t = n("body").width(), n("html").addClass("fancybox-enabled"), (t = n("body").width() - t) > 1 && n('<style id="fancybox-noscroll" type="text/css">').html(".compensate-for-scrollbar, .fancybox-enabled body { margin-right: " + t + "px; }").appendTo("head")), e = n(i.opts.baseTpl).attr("id", "fancybox-container-" + i.id).data("FancyBox", i).addClass(i.opts.baseClass).hide().prependTo(i.opts.parentEl), i.$refs = {
				container: e,
				bg: e.find(".fancybox-bg"),
				controls: e.find(".fancybox-controls"),
				buttons: e.find(".fancybox-buttons"),
				slider_wrap: e.find(".fancybox-slider-wrap"),
				slider: e.find(".fancybox-slider"),
				caption: e.find(".fancybox-caption")
			}, i.trigger("onInit"), i.activate(), i.current || i.jumpTo(i.currIndex)
		}, createGroup: function (t) {
			var e = this, o = n.makeArray(t);
			n.each(o, function (t, o) {
				var s, r, a, l, c = {}, u = {}, h = [];
				n.isPlainObject(o) ? (c = o, u = o.opts || {}) : "object" === n.type(o) && n(o).length ? (s = n(o), h = s.data(), u = "options" in h ? h.options : {}, u = "object" === n.type(u) ? u : {}, c.type = "type" in h ? h.type : u.type, c.src = "src" in h ? h.src : u.src || s.attr("href"), u.width = "width" in h ? h.width : u.width, u.height = "height" in h ? h.height : u.height, u.thumb = "thumb" in h ? h.thumb : u.thumb, u.selector = "selector" in h ? h.selector : u.selector, "srcset" in h && (u.image = {srcset: h.srcset}), u.$orig = s) : c = {
					type: "html",
					content: o + ""
				}, c.opts = n.extend(!0, {}, e.opts, u), r = c.type, a = c.src || "", r || (c.content ? r = "html" : a.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? r = "image" : a.match(/\.(pdf)((\?|#).*)?$/i) ? r = "pdf" : "#" === a.charAt(0) && (r = "inline"), c.type = r), c.index = e.group.length, c.opts.$orig && !c.opts.$orig.length && delete c.opts.$orig, !c.opts.$thumb && c.opts.$orig && (c.opts.$thumb = c.opts.$orig.find("img:first")), c.opts.$thumb && !c.opts.$thumb.length && delete c.opts.$thumb, "function" === n.type(c.opts.caption) ? c.opts.caption = c.opts.caption.apply(o, [e, c]) : "caption" in h ? c.opts.caption = h.caption : u.$orig && (c.opts.caption = s.attr("title")), c.opts.caption = c.opts.caption === i ? "" : c.opts.caption + "", "ajax" === r && (l = a.split(/\s+/, 2)).length > 1 && (c.src = l.shift(), c.opts.selector = l.shift()), "auto" == c.opts.smallBtn && (n.inArray(r, ["html", "inline", "ajax"]) > -1 ? (c.opts.buttons = !1, c.opts.smallBtn = !0) : c.opts.smallBtn = !1), "pdf" === r && (c.type = "iframe", c.opts.closeBtn = !0, c.opts.smallBtn = !1, c.opts.iframe.preload = !1), c.opts.modal && n.extend(!0, c.opts, {
					infobar: 0,
					buttons: 0,
					keyboard: 0,
					slideShow: 0,
					fullScreen: 0,
					closeClickOutside: 0
				}), e.group.push(c)
			})
		}, addEvents: function () {
			var i = this, o = function () {
				r.scrollTop(i.scrollTop).scrollLeft(i.scrollLeft), i.$refs.slider_wrap.show(), i.update()
			};
			i.removeEvents(), i.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (t) {
				t.stopPropagation(), t.preventDefault(), i.close(t)
			}).on("click.fb-previous", "[data-fancybox-previous]", function (t) {
				t.stopPropagation(), t.preventDefault(), i.previous()
			}).on("click.fb-next", "[data-fancybox-next]", function (t) {
				t.stopPropagation(), t.preventDefault(), i.next()
			}), n(t).on("orientationchange.fb resize.fb", function (t) {
				u(function () {
					t && t.originalEvent && "orientationchange" == t.originalEvent.type ? (i.$refs.slider_wrap.hide(), u(o)) : o()
				})
			}), a.on("focusin.fb", function (t) {
				var e = n.fancybox ? n.fancybox.getInstance() : null;
				!e || n(t.target).hasClass("fancybox-container") || n.contains(e.$refs.container[0], t.target) || (t.stopPropagation(), e.focus(), r.scrollTop(i.scrollTop).scrollLeft(i.scrollLeft))
			}), n(e).on("keydown.fb", function (t) {
				var e = i.current, o = t.keyCode || t.which;
				if (e && e.opts.keyboard && !n(t.target).is("input") && !n(t.target).is("textarea")) {
					if (8 === o || 27 === o) return t.preventDefault(), void i.close(t);
					switch (o) {
						case 37:
						case 38:
							t.preventDefault(), i.previous();
							break;
						case 39:
						case 40:
							t.preventDefault(), i.next();
							break;
						case 80:
						case 32:
							t.preventDefault(), i.SlideShow && (t.preventDefault(), i.SlideShow.toggle());
							break;
						case 70:
							i.FullScreen && (t.preventDefault(), i.FullScreen.toggle());
							break;
						case 71:
							i.Thumbs && (t.preventDefault(), i.Thumbs.toggle())
					}
				}
			})
		}, removeEvents: function () {
			r.off("scroll.fb resize.fb orientationchange.fb"), a.off("keydown.fb focusin.fb click.fb-close"), this.$refs.container.off("click.fb-close click.fb-previous click.fb-next")
		}, previous: function (t) {
			this.jumpTo(this.currIndex - 1, t)
		}, next: function (t) {
			this.jumpTo(this.currIndex + 1, t)
		}, jumpTo: function (t, e) {
			var n, o, s, r, a = this;
			if (n = a.firstRun = null === a.firstRun, o = s = t = parseInt(t, 10), r = !!a.current && a.current.opts.loop, !a.isAnimating && (o != a.currIndex || n)) {
				if (a.group.length > 1 && r) o %= a.group.length, o = o < 0 ? a.group.length + o : o, 2 == a.group.length ? s = t - a.currIndex + a.currPos : (s = o - a.currIndex + a.currPos, Math.abs(a.currPos - (s + a.group.length)) < Math.abs(a.currPos - s) ? s += a.group.length : Math.abs(a.currPos - (s - a.group.length)) < Math.abs(a.currPos - s) && (s -= a.group.length)); else if (!a.group[o]) return void a.update(!1, !1, e);
				a.current && (a.current.$slide.removeClass("fancybox-slide--current fancybox-slide--complete"), a.updateSlide(a.current, !0)), a.prevIndex = a.currIndex, a.prevPos = a.currPos, a.currIndex = o, a.currPos = s, a.current = a.createSlide(s), a.group.length > 1 && ((a.opts.loop || s - 1 >= 0) && a.createSlide(s - 1), (a.opts.loop || s + 1 < a.group.length) && a.createSlide(s + 1)), a.current.isMoved = !1, a.current.isComplete = !1, e = parseInt(e === i ? 1.5 * a.current.opts.speed : e, 10), a.trigger("beforeMove"), a.updateControls(), n && (a.current.$slide.addClass("fancybox-slide--current"), a.$refs.container.show(), u(function () {
					a.$refs.bg.css("transition-duration", a.current.opts.speed + "ms"), a.$refs.container.addClass("fancybox-container--ready")
				})), a.update(!0, !1, n ? 0 : e, function () {
					a.afterMove()
				}), a.loadSlide(a.current), n && a.current.$ghost || a.preload()
			}
		}, createSlide: function (t) {
			var e, i, o, s = this;
			if (i = t % s.group.length, i = i < 0 ? s.group.length + i : i, !s.slides[t] && s.group[i]) {
				if (s.opts.loop && s.group.length > 2) for (var r in s.slides) if (s.slides[r].index === i) return o = s.slides[r], o.pos = t, s.slides[t] = o, delete s.slides[r], s.updateSlide(o), o;
				e = n('<div class="fancybox-slide"></div>').appendTo(s.$refs.slider), s.slides[t] = n.extend(!0, {}, s.group[i], {
					pos: t,
					$slide: e,
					isMoved: !1,
					isLoaded: !1
				})
			}
			return s.slides[t]
		}, zoomInOut: function (t, e, i) {
			var o, s, r, a = this, l = a.current, c = l.$placeholder, d = l.opts.opacity, p = l.opts.$thumb,
				f = p ? p.offset() : 0, m = l.$slide.offset();
			return !(!(c && l.isMoved && f && h(p)) || "In" === t && !a.firstRun || (n.fancybox.stop(c), a.isAnimating = !0, o = {
				top: f.top - m.top + parseFloat(p.css("border-top-width") || 0),
				left: f.left - m.left + parseFloat(p.css("border-left-width") || 0),
				width: p.width(),
				height: p.height(),
				scaleX: 1,
				scaleY: 1
			}, "auto" == d && (d = Math.abs(l.width / l.height - o.width / o.height) > .1), "In" === t ? (s = o, r = a.getFitPos(l), r.scaleX = r.width / s.width, r.scaleY = r.height / s.height, d && (s.opacity = .1, r.opacity = 1)) : (s = n.fancybox.getTranslate(c), r = o, l.$ghost && (l.$ghost.show(), l.$image && l.$image.remove()), s.scaleX = s.width / r.width, s.scaleY = s.height / r.height, s.width = r.width, s.height = r.height, d && (r.opacity = 0)), a.updateCursor(r.width, r.height), delete r.width, delete r.height, n.fancybox.setTranslate(c, s), c.show(), a.trigger("beforeZoom" + t), u(function () {
				c.css("transition", "all " + e + "ms"), n.fancybox.setTranslate(c, r), setTimeout(function () {
					u(function () {
						var e;
						c.css("transition", "none"), (e = n.fancybox.getTranslate(c)).scaleX = 1, e.scaleY = 1, n.fancybox.setTranslate(c, e), a.trigger("afterZoom" + t), i.apply(a), a.isAnimating = !1
					})
				}, e)
			}), 0))
		}, canPan: function () {
			var t = this, e = t.current, n = e.$placeholder, i = !1;
			return n && (i = t.getFitPos(e), i = Math.abs(n.width() - i.width) > 1 || Math.abs(n.height() - i.height) > 1), i
		}, isScaledDown: function () {
			var t = this.current, e = t.$placeholder, i = !1;
			return e && (i = n.fancybox.getTranslate(e), i = i.width < t.width || i.height < t.height), i
		}, scaleToActual: function (t, e, o) {
			var s, r, a, l, c, u = this, h = u.current, d = h.$placeholder, p = parseInt(h.$slide.width(), 10),
				f = parseInt(h.$slide.height(), 10), m = h.width, g = h.height;
			d && (u.isAnimating = !0, t = t === i ? .5 * p : t, e = e === i ? .5 * f : e, s = n.fancybox.getTranslate(d), l = m / s.width, c = g / s.height, r = .5 * p - .5 * m, a = .5 * f - .5 * g, m > p && ((r = s.left * l - (t * l - t)) > 0 && (r = 0), r < p - m && (r = p - m)), g > f && ((a = s.top * c - (e * c - e)) > 0 && (a = 0), a < f - g && (a = f - g)), u.updateCursor(m, g), n.fancybox.animate(d, null, {
				top: a,
				left: r,
				scaleX: l,
				scaleY: c
			}, o || h.opts.speed, function () {
				u.isAnimating = !1
			}))
		}, scaleToFit: function (t) {
			var e, i = this, o = i.current, s = o.$placeholder;
			s && (i.isAnimating = !0, e = i.getFitPos(o), i.updateCursor(e.width, e.height), n.fancybox.animate(s, null, {
				top: e.top,
				left: e.left,
				scaleX: e.width / s.width(),
				scaleY: e.height / s.height()
			}, t || o.opts.speed, function () {
				i.isAnimating = !1
			}))
		}, getFitPos: function (t) {
			var e, i, o, s, a, l, c, u = t.$placeholder || t.$content, h = t.width, d = t.height, p = t.opts.margin;
			return !(!u || !u.length || !h && !d) && ("number" === n.type(p) && (p = [p, p]), 2 == p.length && (p = [p[0], p[1], p[0], p[1]]), r.width() < 800 && (p = [0, 0, 0, 0]), e = parseInt(t.$slide.width(), 10) - (p[1] + p[3]), i = parseInt(t.$slide.height(), 10) - (p[0] + p[2]), o = Math.min(1, e / h, i / d), l = Math.floor(o * h), c = Math.floor(o * d), s = Math.floor(.5 * (i - c)) + p[0], a = Math.floor(.5 * (e - l)) + p[3], {
				top: s,
				left: a,
				width: l,
				height: c
			})
		}, update: function (t, e, i, o) {
			var s = this,
				r = s.current.pos * Math.floor(s.current.$slide.width()) * -1 - s.current.pos * s.current.opts.gutter;
			!0 !== s.isAnimating && (i = parseInt(i, 10) || 0, n.fancybox.stop(s.$refs.slider), !1 === t ? s.updateSlide(s.current, e) : n.each(s.slides, function (t, n) {
				s.updateSlide(n, e)
			}), i ? n.fancybox.animate(s.$refs.slider, null, {top: 0, left: r}, i, function () {
				s.current.isMoved = !0, "function" === n.type(o) && o.apply(s)
			}) : (n.fancybox.setTranslate(s.$refs.slider, {
				top: 0,
				left: r
			}), s.current.isMoved = !0, "function" === n.type(o) && o.apply(s)))
		}, updateSlide: function (t, e) {
			var i, o = this, s = t.$placeholder;
			(t = t || o.current) && !o.isClosing && ((i = t.pos * Math.floor(t.$slide.width()) + t.pos * t.opts.gutter) !== t.leftPos && (n.fancybox.setTranslate(t.$slide, {
				top: 0,
				left: i
			}), t.leftPos = i), !1 !== e && s && (n.fancybox.setTranslate(s, o.getFitPos(t)), t.pos === o.currPos && o.updateCursor()), t.$slide.trigger("refresh"), o.trigger("onUpdate", t))
		}, updateCursor: function (t, e) {
			var n = this,
				o = n.$refs.container.removeClass("fancybox-controls--canzoomIn fancybox-controls--canzoomOut fancybox-controls--canGrab");
			!n.isClosing && n.opts.touch && ((t !== i && e !== i ? t < n.current.width && e < n.current.height : n.isScaledDown()) ? o.addClass("fancybox-controls--canzoomIn") : n.group.length < 2 ? o.addClass("fancybox-controls--canzoomOut") : o.addClass("fancybox-controls--canGrab"))
		}, loadSlide: function (t) {
			var e, i, o, s = this;
			if (t && !t.isLoaded && !t.isLoading) {
				switch (t.isLoading = !0, s.trigger("beforeLoad", t), e = t.type, (i = t.$slide).off("refresh").trigger("onReset").addClass("fancybox-slide--" + (e || "unknown")).addClass(t.opts.slideClass), e) {
					case"image":
						s.setImage(t);
						break;
					case"iframe":
						s.setIframe(t);
						break;
					case"html":
						s.setContent(t, t.content);
						break;
					case"inline":
						n(t.src).length ? s.setContent(t, n(t.src)) : s.setError(t);
						break;
					case"ajax":
						s.showLoading(t), o = n.ajax(n.extend({}, t.opts.ajax.settings, {
							url: t.src,
							success: function (e, n) {
								"success" === n && s.setContent(t, e)
							},
							error: function (e, n) {
								e && "abort" !== n && s.setError(t)
							}
						})), i.one("onReset", function () {
							o.abort()
						});
						break;
					default:
						s.setError(t)
				}
				return !0
			}
		}, setImage: function (e) {
			var i, o, s, r, a = this, l = e.opts.image.srcset;
			if (!e.isLoaded || e.hasError) {
				if (l) {
					s = t.devicePixelRatio || 1, r = t.innerWidth * s, (o = l.split(",").map(function (t) {
						var e = {};
						return t.trim().split(/\s+/).forEach(function (t, n) {
							var i = parseInt(t.substring(0, t.length - 1), 10);
							return 0 === n ? e.url = t : void(i && (e.value = i, e.postfix = t[t.length - 1]))
						}), e
					})).sort(function (t, e) {
						return t.value - e.value
					});
					for (var c = 0; c < o.length; c++) {
						var u = o[c];
						if ("w" === u.postfix && u.value >= r || "x" === u.postfix && u.value >= s) {
							i = u;
							break
						}
					}
					!i && o.length && (i = o[o.length - 1]), i && (e.src = i.url, e.width && e.height && "w" == i.postfix && (e.height = e.width / e.height * i.value, e.width = i.value))
				}
				e.$placeholder = n('<div class="fancybox-placeholder"></div>').hide().appendTo(e.$slide), !1 !== e.opts.preload && e.opts.width && e.opts.height && (e.opts.thumb || e.opts.$thumb) ? (e.width = e.opts.width, e.height = e.opts.height, e.$ghost = n("<img />").one("load error", function () {
					a.isClosing || (n("<img/>")[0].src = e.src, a.revealImage(e, function () {
						a.setBigImage(e), a.firstRun && e.index === a.currIndex && a.preload()
					}))
				}).addClass("fancybox-image").appendTo(e.$placeholder).attr("src", e.opts.thumb || e.opts.$thumb.attr("src"))) : a.setBigImage(e)
			} else a.afterLoad(e)
		}, setBigImage: function (t) {
			var e = this, i = n("<img />");
			t.$image = i.one("error", function () {
				e.setError(t)
			}).one("load", function () {
				clearTimeout(t.timouts), t.timouts = null, e.isClosing || (t.width = this.naturalWidth, t.height = this.naturalHeight, t.opts.image.srcset && i.attr("sizes", "100vw").attr("srcset", t.opts.image.srcset), e.afterLoad(t), t.$ghost && (t.timouts = setTimeout(function () {
					t.$ghost.hide()
				}, 350)))
			}).addClass("fancybox-image").attr("src", t.src).appendTo(t.$placeholder), i[0].complete ? i.trigger("load") : i[0].error ? i.trigger("error") : t.timouts = setTimeout(function () {
				i[0].complete || t.hasError || e.showLoading(t)
			}, 150), t.opts.image.protect && n('<div class="fancybox-spaceball"></div>').appendTo(t.$placeholder).on("contextmenu.fb", function (t) {
				return 2 == t.button && t.preventDefault(), !0
			})
		}, revealImage: function (t, e) {
			var i = this;
			return e = e || n.noop, "image" !== t.type || t.hasError || !0 === t.isRevealed ? void e.apply(i) : (t.isRevealed = !0, void(t.pos === i.currPos && i.zoomInOut("In", t.opts.speed, e) || (t.$ghost && !t.isLoaded && i.updateSlide(t, !0), t.pos === i.currPos ? n.fancybox.animate(t.$placeholder, {opacity: 0}, {opacity: 1}, 300, e) : t.$placeholder.show(), e.apply(i))))
		}, setIframe: function (t) {
			var e, o = this, s = t.opts.iframe, r = t.$slide;
			t.$content = n('<div class="fancybox-content"></div>').css(s.css).appendTo(r), e = n(s.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", n.fancybox.isTouch ? "auto" : s.scrolling).appendTo(t.$content), s.preload ? (t.$content.addClass("fancybox-tmp"), o.showLoading(t), e.on("load.fb error.fb", function (e) {
				this.isReady = 1, t.$slide.trigger("refresh"), o.afterLoad(t)
			}), r.on("refresh.fb", function () {
				var n, o, r, a, l = t.$content;
				if (1 === e[0].isReady) {
					try {
						n = e.contents().find("body")
					} catch (t) {
					}
					n && n.length && (s.css.width === i || s.css.height === i) && (o = e[0].contentWindow.document.documentElement.scrollWidth, r = Math.ceil(n.outerWidth(!0) + (l.width() - o)), a = Math.ceil(n.outerHeight(!0)), l.css({
						width: s.css.width === i ? r + (l.outerWidth() - l.innerWidth()) : s.css.width,
						height: s.css.height === i ? a + (l.outerHeight() - l.innerHeight()) : s.css.height
					})), l.removeClass("fancybox-tmp")
				}
			})) : this.afterLoad(t), e.attr("src", t.src), t.opts.smallBtn && t.$content.prepend(t.opts.closeTpl), r.one("onReset", function () {
				try {
					n(this).find("iframe").hide().attr("src", "//about:blank")
				} catch (t) {
				}
				n(this).empty(), t.isLoaded = !1
			})
		}, setContent: function (t, e) {
			var i = this;
			i.isClosing || (i.hideLoading(t), t.$slide.empty(), c(e) && e.parent().length ? (e.data("placeholder") && e.parents(".fancybox-slide").trigger("onReset"), e.data({placeholder: n("<div></div>").hide().insertAfter(e)}).css("display", "inline-block")) : ("string" === n.type(e) && 3 === (e = n("<div>").append(e).contents())[0].nodeType && (e = n("<div>").html(e)), t.opts.selector && (e = n("<div>").html(e).find(t.opts.selector))), t.$slide.one("onReset", function () {
				var i = c(e) ? e.data("placeholder") : 0;
				i && (e.hide().replaceAll(i), e.data("placeholder", null)), t.hasError || (n(this).empty(), t.isLoaded = !1)
			}), t.$content = n(e).appendTo(t.$slide), !0 === t.opts.smallBtn && t.$content.find(".fancybox-close-small").remove().end().eq(0).append(t.opts.closeTpl), this.afterLoad(t))
		}, setError: function (t) {
			t.hasError = !0, this.setContent(t, t.opts.errorTpl)
		}, showLoading: function (t) {
			var e = this;
			(t = t || e.current) && !t.$spinner && (t.$spinner = n(e.opts.spinnerTpl).appendTo(t.$slide))
		}, hideLoading: function (t) {
			var e = this;
			(t = t || e.current) && t.$spinner && (t.$spinner.remove(), delete t.$spinner)
		}, afterMove: function () {
			var t = this, e = t.current, i = {};
			e && (e.$slide.siblings().trigger("onReset"), n.each(t.slides, function (e, n) {
				n.pos >= t.currPos - 1 && n.pos <= t.currPos + 1 ? i[n.pos] = n : n && n.$slide.remove()
			}), t.slides = i, t.trigger("afterMove"), e.isLoaded && t.complete())
		}, afterLoad: function (t) {
			var e = this;
			e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), t.$ghost || e.updateSlide(t, !0), t.index === e.currIndex && t.isMoved ? e.complete() : t.$ghost || e.revealImage(t))
		}, complete: function () {
			var t = this, e = t.current;
			t.revealImage(e, function () {
				e.isComplete = !0, e.$slide.addClass("fancybox-slide--complete"), t.updateCursor(), t.trigger("onComplete"), e.opts.focus && "image" !== e.type && "iframe" !== e.type && t.focus()
			})
		}, preload: function () {
			var t, e, n = this;
			n.group.length < 2 || (t = n.slides[n.currPos + 1], e = n.slides[n.currPos - 1], t && "image" === t.type && n.loadSlide(t), e && "image" === e.type && n.loadSlide(e))
		}, focus: function () {
			var t, e = this.current;
			(t = e && e.isComplete ? e.$slide.find('button,:input,[tabindex],a:not(".disabled")').filter(":visible:first") : null) && t.length || (t = this.$refs.container), t.focus(), this.$refs.slider_wrap.scrollLeft(0), e && e.$slide.scrollTop(0)
		}, activate: function () {
			var t = this;
			n(".fancybox-container").each(function () {
				var e = n(this).data("FancyBox");
				e && e.uid !== t.uid && !e.isClosing && e.trigger("onDeactivate")
			}), t.current && (t.$refs.container.index() > 0 && t.$refs.container.prependTo(e.body), t.updateControls()), t.trigger("onActivate"), t.addEvents()
		}, close: function (t) {
			var e = this, i = e.current, o = i.opts.speed, s = n.proxy(function () {
				e.cleanUp(t)
			}, this);
			return !e.isAnimating && !e.isClosing && void(!1 !== e.trigger("beforeClose", t) && (e.isClosing = !0, i.timouts && clearTimeout(i.timouts), !0 !== t && n.fancybox.stop(e.$refs.slider), e.$refs.container.removeClass("fancybox-container--active").addClass("fancybox-container--closing"), i.$slide.removeClass("fancybox-slide--complete").siblings().remove(), i.isMoved || i.$slide.css("overflow", "visible"), e.removeEvents(), e.hideLoading(i), e.hideControls(), e.updateCursor(), e.$refs.bg.css("transition-duration", o + "ms"), this.$refs.container.removeClass("fancybox-container--ready"), !0 === t ? setTimeout(s, o) : e.zoomInOut("Out", o, s) || n.fancybox.animate(e.$refs.container, null, {opacity: 0}, o, "easeInSine", s)))
		}, cleanUp: function (t) {
			var e, i = this;
			i.$refs.slider.children().trigger("onReset"), i.$refs.container.empty().remove(), i.trigger("afterClose", t), i.current = null, (e = n.fancybox.getInstance()) ? e.activate() : (n("html").removeClass("fancybox-enabled"), n("#fancybox-noscroll").remove()), i.$lastFocus && i.$lastFocus.focus()
		}, trigger: function (t, e) {
			var i, o = Array.prototype.slice.call(arguments, 1), s = this, r = e && e.opts ? e : s.current;
			return r ? o.unshift(r) : r = s, o.unshift(s), n.isFunction(r.opts[t]) && (i = r.opts[t].apply(r, o)), !1 === i ? i : void s.$refs.container.trigger(t + ".fb", o)
		}, toggleControls: function (t) {
			this.isHiddenControls ? this.updateControls(t) : this.hideControls()
		}, hideControls: function () {
			this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-controls"), this.$refs.container.removeClass("fancybox-show-caption")
		}, updateControls: function (t) {
			var e = this, i = e.$refs.container, o = e.$refs.caption, s = e.current, r = s.index, a = s.opts,
				l = a.caption;
			this.isHiddenControls && !0 !== t || (this.isHiddenControls = !1, e.$refs.container.addClass("fancybox-show-controls"), i.toggleClass("fancybox-show-infobar", !!a.infobar && e.group.length > 1).toggleClass("fancybox-show-buttons", !!a.buttons).toggleClass("fancybox-is-modal", !!a.modal), n(".fancybox-button--left", i).toggleClass("fancybox-button--disabled", !a.loop && r <= 0), n(".fancybox-button--right", i).toggleClass("fancybox-button--disabled", !a.loop && r >= e.group.length - 1), n(".fancybox-button--play", i).toggle(!!(a.slideShow && e.group.length > 1)), n(".fancybox-button--close", i).toggle(!!a.closeBtn), n(".js-fancybox-count", i).html(e.group.length), n(".js-fancybox-index", i).html(r + 1), s.$slide.trigger("refresh"), o && o.empty(), l && l.length ? (o.html(l), this.$refs.container.addClass("fancybox-show-caption "), e.$caption = o) : this.$refs.container.removeClass("fancybox-show-caption"))
		}
	}), n.fancybox = {
		version: "3.0.39",
		defaults: s,
		getInstance: function (t) {
			var e = n('.fancybox-container:not(".fancybox-container--closing"):first').data("FancyBox"),
				i = Array.prototype.slice.call(arguments, 1);
			return e instanceof d && ("string" === n.type(t) ? e[t].apply(e, i) : "function" === n.type(t) && t.apply(e, i), e)
		},
		open: function (t, e, n) {
			return new d(t, e, n)
		},
		close: function (t) {
			var e = this.getInstance();
			e && (e.close(), !0 === t && this.close())
		},
		isTouch: e.createTouch !== i && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
		use3d: function () {
			var n = e.createElement("div");
			return t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode <= 11)
		}(),
		getTranslate: function (t) {
			var e, n;
			return !(!t || !t.length) && (e = t.get(0).getBoundingClientRect(), (n = t.eq(0).css("transform")) && -1 !== n.indexOf("matrix") ? (n = n.split("(")[1], n = n.split(")")[0], n = n.split(",")) : n = [], n.length ? (n = n.length > 10 ? [n[13], n[12], n[0], n[5]] : [n[5], n[4], n[0], n[3]], n = n.map(parseFloat)) : n = [0, 0, 1, 1], {
				top: n[0],
				left: n[1],
				scaleX: n[2],
				scaleY: n[3],
				opacity: parseFloat(t.css("opacity")),
				width: e.width,
				height: e.height
			})
		},
		setTranslate: function (t, e) {
			var n = "", o = {};
			if (t && e) return e.left === i && e.top === i || (n = (e.left === i ? t.position().top : e.left) + "px, " + (e.top === i ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), e.scaleX !== i && e.scaleY !== i && (n = (n.length ? n + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"), n.length && (o.transform = n), e.opacity !== i && (o.opacity = e.opacity), e.width !== i && (o.width = e.width), e.height !== i && (o.height = e.height), t.css(o)
		},
		easing: {
			easeOutCubic: function (t, e, n, i) {
				return n * ((t = t / i - 1) * t * t + 1) + e
			}, easeInCubic: function (t, e, n, i) {
				return n * (t /= i) * t * t + e
			}, easeOutSine: function (t, e, n, i) {
				return n * Math.sin(t / i * (Math.PI / 2)) + e
			}, easeInSine: function (t, e, n, i) {
				return -n * Math.cos(t / i * (Math.PI / 2)) + n + e
			}
		},
		stop: function (t) {
			t.removeData("animateID")
		},
		animate: function (t, e, o, s, r, a) {
			var l, c, h, d = this, p = null, f = 0, m = function () {
				o.scaleX !== i && o.scaleY !== i && e && e.width !== i && e.height !== i && (o.width = e.width * o.scaleX, o.height = e.height * o.scaleY, o.scaleX = 1, o.scaleY = 1), d.setTranslate(t, o), a()
			}, g = function (n) {
				if (l = [], c = 0, t.length && t.data("animateID") === h) {
					if (n = n || Date.now(), p && (c = n - p), p = n, (f += c) >= s) return void m();
					for (var a in o) o.hasOwnProperty(a) && e[a] !== i && (e[a] == o[a] ? l[a] = o[a] : l[a] = d.easing[r](f, e[a], o[a] - e[a], s));
					d.setTranslate(t, l), u(g)
				}
			};
			d.animateID = h = d.animateID === i ? 1 : d.animateID + 1, t.data("animateID", h), a === i && "function" == n.type(r) && (a = r, r = i), r || (r = "easeOutCubic"), a = a || n.noop, e ? this.setTranslate(t, e) : e = this.getTranslate(t), s ? (t.show(), u(g)) : m()
		}
	}, n.fn.fancybox = function (t) {
		return this.off("click.fb-start").on("click.fb-start", {items: this, options: t || {}}, o), this
	}, n(e).on("click.fb-start", "[data-fancybox]", o)
}(window, document, window.jQuery), function (t) {
	"use strict";
	var e = function (e, n, i) {
		if (e) return i = i || "", "object" === t.type(i) && (i = t.param(i, !0)), t.each(n, function (t, n) {
			e = e.replace("$" + t, n || "")
		}), i.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + i), e
	}, n = {
		youtube: {
			matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
			params: {autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1},
			paramPlace: 8,
			type: "iframe",
			url: "//www.youtube.com/embed/$4",
			thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
		},
		vimeo: {
			matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
			params: {autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1, api: 1},
			paramPlace: 3,
			type: "iframe",
			url: "//player.vimeo.com/video/$2"
		},
		metacafe: {
			matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
			type: "iframe",
			url: "//www.metacafe.com/embed/$1/?ap=1"
		},
		dailymotion: {
			matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
			params: {additionalInfos: 0, autoStart: 1},
			type: "iframe",
			url: "//www.dailymotion.com/embed/video/$1"
		},
		vine: {matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/, type: "iframe", url: "//vine.co/v/$1/embed/simple"},
		instagram: {
			matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
			type: "image",
			url: "//$1/p/$2/media/?size=l"
		},
		google_maps: {
			matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
			type: "iframe",
			url: function (t) {
				return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12]) + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
			}
		}
	};
	t(document).on("onInit.fb", function (i, o) {
		t.each(o.group, function (i, o) {
			var s, r, a, l, c, u, h = o.src || "", d = !1;
			o.type || (t.each(n, function (n, i) {
				if (r = h.match(i.matcher), c = {}, u = n, r) {
					if (d = i.type, i.paramPlace && r[i.paramPlace]) {
						"?" == (l = r[i.paramPlace])[0] && (l = l.substring(1)), l = l.split("&");
						for (var p = 0; p < l.length; ++p) {
							var f = l[p].split("=", 2);
							2 == f.length && (c[f[0]] = decodeURIComponent(f[1].replace(/\+/g, " ")))
						}
					}
					return a = t.extend(!0, {}, i.params, o.opts[n], c), h = "function" === t.type(i.url) ? i.url.call(this, r, a, o) : e(i.url, r, a), s = "function" === t.type(i.thumb) ? i.thumb.call(this, r, a, o) : e(i.thumb, r), "vimeo" === u && (h = h.replace("&%23", "#")), !1
				}
			}), d ? (o.src = h, o.type = d, o.opts.thumb || o.opts.$thumb && o.opts.$thumb.length || (o.opts.thumb = s), "iframe" === d && (t.extend(!0, o.opts, {
				iframe: {
					preload: !1,
					scrolling: "no"
				}, smallBtn: !1, closeBtn: !0, fullScreen: !1, slideShow: !1
			}), o.opts.slideClass += " fancybox-slide--video")) : o.type = "iframe")
		})
	})
}(window.jQuery), function (t, e, n) {
	"use strict";
	var i = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (e) {
		t.setTimeout(e, 1e3 / 60)
	}, o = function (e) {
		var n = [];
		e = (e = e.originalEvent || e || t.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
		for (var i in e) e[i].pageX ? n.push({x: e[i].pageX, y: e[i].pageY}) : e[i].clientX && n.push({
			x: e[i].clientX,
			y: e[i].clientY
		});
		return n
	}, s = function (t, e, n) {
		return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
	}, r = function (t) {
		return t.is("a") || t.is("button") || t.is("input") || t.is("select") || t.is("textarea") || n.isFunction(t.get(0).onclick)
	}, a = function (e) {
		var n = t.getComputedStyle(e)["overflow-y"], i = t.getComputedStyle(e)["overflow-x"],
			o = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
			s = ("scroll" === i || "auto" === i) && e.scrollWidth > e.clientWidth;
		return o || s
	}, l = function (t) {
		for (var e = !1; !(e = a(t.get(0))) && ((t = t.parent()).length && !t.hasClass("fancybox-slider") && !t.is("body"));) ;
		return e
	}, c = function (t) {
		var e = this;
		e.instance = t, e.$wrap = t.$refs.slider_wrap, e.$slider = t.$refs.slider, e.$container = t.$refs.container, e.destroy(), e.$wrap.on("touchstart.fb mousedown.fb", n.proxy(e, "ontouchstart"))
	};
	c.prototype.destroy = function () {
		this.$wrap.off("touchstart.fb mousedown.fb touchmove.fb mousemove.fb touchend.fb touchcancel.fb mouseup.fb mouseleave.fb")
	}, c.prototype.ontouchstart = function (e) {
		var i = this, a = n(e.target), c = i.instance.current, u = c.$content || c.$placeholder;
		return i.startPoints = o(e), i.$target = a, i.$content = u, i.canvasWidth = Math.round(c.$slide[0].clientWidth), i.canvasHeight = Math.round(c.$slide[0].clientHeight), i.startEvent = e, e.originalEvent.clientX > i.canvasWidth || (c.opts.touch ? void(r(a) || r(a.parent()) || l(a) && !a.hasClass("fancybox-slide") || e.originalEvent && 2 == e.originalEvent.button || (e.stopPropagation(), e.preventDefault(), !c || i.instance.isAnimating || i.instance.isClosing || !i.startPoints || i.startPoints.length > 1 && !c.isMoved || (i.$wrap.off("touchmove.fb mousemove.fb", n.proxy(i, "ontouchmove")), i.$wrap.off("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb", n.proxy(i, "ontouchend")), i.$wrap.on("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb", n.proxy(i, "ontouchend")), i.$wrap.on("touchmove.fb mousemove.fb", n.proxy(i, "ontouchmove")), i.startTime = (new Date).getTime(), i.distanceX = i.distanceY = i.distance = 0, i.canTap = !1, i.isPanning = !1, i.isSwiping = !1, i.isZooming = !1, i.sliderStartPos = n.fancybox.getTranslate(i.$slider), i.contentStartPos = n.fancybox.getTranslate(i.$content), i.contentLastPos = null, 1 !== i.startPoints.length || i.isZooming || (i.canTap = c.isMoved, "image" === c.type && (i.contentStartPos.width > i.canvasWidth + 1 || i.contentStartPos.height > i.canvasHeight + 1) ? (n.fancybox.stop(i.$content), i.isPanning = !0) : (n.fancybox.stop(i.$slider), i.isSwiping = !0), i.$container.addClass("fancybox-controls--isGrabbing")), 2 === i.startPoints.length && c.isMoved && !c.hasError && "image" === c.type && (c.isLoaded || c.$ghost) && (i.isZooming = !0, i.isSwiping = !1, i.isPanning = !1, n.fancybox.stop(i.$content), i.centerPointStartX = .5 * (i.startPoints[0].x + i.startPoints[1].x) - n(t).scrollLeft(), i.centerPointStartY = .5 * (i.startPoints[0].y + i.startPoints[1].y) - n(t).scrollTop(), i.percentageOfImageAtPinchPointX = (i.centerPointStartX - i.contentStartPos.left) / i.contentStartPos.width, i.percentageOfImageAtPinchPointY = (i.centerPointStartY - i.contentStartPos.top) / i.contentStartPos.height, i.startDistanceBetweenFingers = s(i.startPoints[0], i.startPoints[1]))))) : (i.endPoints = i.startPoints, i.ontap()))
	}, c.prototype.ontouchmove = function (t) {
		var e = this;
		t.preventDefault(), e.newPoints = o(t), e.newPoints && e.newPoints.length && (e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"), e.distance = s(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe() : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))
	}, c.prototype.onSwipe = function () {
		var e, o = this, s = o.isSwiping, r = o.sliderStartPos.left;
		!0 === s ? Math.abs(o.distance) > 10 && (o.instance.group.length < 2 ? o.isSwiping = "y" : !o.instance.current.isMoved || !1 === o.instance.opts.touch.vertical || "auto" === o.instance.opts.touch.vertical && n(t).width() > 800 ? o.isSwiping = "x" : (e = Math.abs(180 * Math.atan2(o.distanceY, o.distanceX) / Math.PI), o.isSwiping = e > 45 && e < 135 ? "y" : "x"), o.canTap = !1, o.instance.current.isMoved = !1, o.startPoints = o.newPoints) : ("x" == s && (!o.instance.current.opts.loop && 0 === o.instance.current.index && o.distanceX > 0 ? r += Math.pow(o.distanceX, .8) : !o.instance.current.opts.loop && o.instance.current.index === o.instance.group.length - 1 && o.distanceX < 0 ? r -= Math.pow(-o.distanceX, .8) : r += o.distanceX), o.sliderLastPos = {
			top: "x" == s ? 0 : o.sliderStartPos.top + o.distanceY,
			left: r
		}, i(function () {
			n.fancybox.setTranslate(o.$slider, o.sliderLastPos)
		}))
	}, c.prototype.onPan = function () {
		var t, e, o, s = this;
		s.canTap = !1, t = s.contentStartPos.width > s.canvasWidth ? s.contentStartPos.left + s.distanceX : s.contentStartPos.left, e = s.contentStartPos.top + s.distanceY, (o = s.limitMovement(t, e, s.contentStartPos.width, s.contentStartPos.height)).scaleX = s.contentStartPos.scaleX, o.scaleY = s.contentStartPos.scaleY, s.contentLastPos = o, i(function () {
			n.fancybox.setTranslate(s.$content, s.contentLastPos)
		})
	}, c.prototype.limitMovement = function (t, e, n, i) {
		var o, s, r, a, l = this, c = l.canvasWidth, u = l.canvasHeight, h = l.contentStartPos.left,
			d = l.contentStartPos.top, p = l.distanceX, f = l.distanceY;
		return o = Math.max(0, .5 * c - .5 * n), s = Math.max(0, .5 * u - .5 * i), r = Math.min(c - n, .5 * c - .5 * n), a = Math.min(u - i, .5 * u - .5 * i), n > c && (p > 0 && t > o && (t = o - 1 + Math.pow(-o + h + p, .8) || 0), p < 0 && t < r && (t = r + 1 - Math.pow(r - h - p, .8) || 0)), i > u && (f > 0 && e > s && (e = s - 1 + Math.pow(-s + d + f, .8) || 0), f < 0 && e < a && (e = a + 1 - Math.pow(a - d - f, .8) || 0)), {
			top: e,
			left: t
		}
	}, c.prototype.limitPosition = function (t, e, n, i) {
		var o = this, s = o.canvasWidth, r = o.canvasHeight;
		return n > s ? (t = t > 0 ? 0 : t, t = t < s - n ? s - n : t) : t = Math.max(0, s / 2 - n / 2), i > r ? (e = e > 0 ? 0 : e, e = e < r - i ? r - i : e) : e = Math.max(0, r / 2 - i / 2), {
			top: e,
			left: t
		}
	}, c.prototype.onZoom = function () {
		var e = this, o = e.contentStartPos.width, r = e.contentStartPos.height, a = e.contentStartPos.left,
			l = e.contentStartPos.top, c = s(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
			u = Math.floor(o * c), h = Math.floor(r * c), d = (o - u) * e.percentageOfImageAtPinchPointX,
			p = (r - h) * e.percentageOfImageAtPinchPointY,
			f = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
			m = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(), g = f - e.centerPointStartX, v = {
				top: l + (p + (m - e.centerPointStartY)),
				left: a + (d + g),
				scaleX: e.contentStartPos.scaleX * c,
				scaleY: e.contentStartPos.scaleY * c
			};
		e.canTap = !1, e.newWidth = u, e.newHeight = h, e.contentLastPos = v, i(function () {
			n.fancybox.setTranslate(e.$content, e.contentLastPos)
		})
	}, c.prototype.ontouchend = function (t) {
		var e = this, i = e.instance.current, s = Math.max((new Date).getTime() - e.startTime, 1), r = e.isSwiping,
			a = e.isPanning, l = e.isZooming;
		return e.endPoints = o(t), e.$container.removeClass("fancybox-controls--isGrabbing"), e.$wrap.off("touchmove.fb mousemove.fb", n.proxy(this, "ontouchmove")), e.$wrap.off("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb", n.proxy(this, "ontouchend")), e.isSwiping = !1, e.isPanning = !1, e.isZooming = !1, e.canTap ? e.ontap() : (e.velocityX = e.distanceX / s * .5, e.velocityY = e.distanceY / s * .5, e.speed = i.opts.speed || 330, e.speedX = Math.max(.75 * e.speed, Math.min(1.5 * e.speed, 1 / Math.abs(e.velocityX) * e.speed)), e.speedY = Math.max(.75 * e.speed, Math.min(1.5 * e.speed, 1 / Math.abs(e.velocityY) * e.speed)), void(a ? e.endPanning() : l ? e.endZooming() : e.endSwiping(r)))
	}, c.prototype.endSwiping = function (t) {
		var e = this;
		"y" == t && Math.abs(e.distanceY) > 50 ? (n.fancybox.animate(e.$slider, null, {
			top: e.sliderStartPos.top + e.distanceY + 150 * e.velocityY,
			left: e.sliderStartPos.left,
			opacity: 0
		}, e.speedY), e.instance.close(!0)) : "x" == t && e.distanceX > 50 ? e.instance.previous(e.speedX) : "x" == t && e.distanceX < -50 ? e.instance.next(e.speedX) : e.instance.update(!1, !0, 150)
	}, c.prototype.endPanning = function () {
		var t, e, i, o = this;
		o.contentLastPos && (t = o.contentLastPos.left + o.velocityX * o.speed * 2, e = o.contentLastPos.top + o.velocityY * o.speed * 2, i = o.limitPosition(t, e, o.contentStartPos.width, o.contentStartPos.height), i.width = o.contentStartPos.width, i.height = o.contentStartPos.height, n.fancybox.animate(o.$content, null, i, o.speed, "easeOutSine"))
	}, c.prototype.endZooming = function () {
		var t, e, i, o, s = this, r = s.instance.current, a = s.newWidth, l = s.newHeight;
		s.contentLastPos && (t = s.contentLastPos.left, e = s.contentLastPos.top, o = {
			top: e,
			left: t,
			width: a,
			height: l,
			scaleX: 1,
			scaleY: 1
		}, n.fancybox.setTranslate(s.$content, o), a < s.canvasWidth && l < s.canvasHeight ? s.instance.scaleToFit(150) : a > r.width || l > r.height ? s.instance.scaleToActual(s.centerPointStartX, s.centerPointStartY, 150) : (i = s.limitPosition(t, e, a, l), n.fancybox.animate(s.$content, null, i, s.speed, "easeOutSine")))
	}, c.prototype.ontap = function () {
		var t = this, e = t.instance, i = e.current, o = t.endPoints[0].x, s = t.endPoints[0].y;
		if (o -= t.$wrap.offset().left, s -= t.$wrap.offset().top, e.SlideShow && e.SlideShow.isActive && e.SlideShow.stop(), !n.fancybox.isTouch) return i.opts.closeClickOutside && t.$target.is(".fancybox-slide") ? void e.close(t.startEvent) : void("image" == i.type && i.isMoved && (e.canPan() ? e.scaleToFit() : e.isScaledDown() ? e.scaleToActual(o, s) : e.group.length < 2 && e.close(t.startEvent)));
		if (t.tapped) {
			if (clearTimeout(t.tapped), t.tapped = null, Math.abs(o - t.x) > 50 || Math.abs(s - t.y) > 50 || !i.isMoved) return this;
			"image" == i.type && (i.isLoaded || i.$ghost) && (e.canPan() ? e.scaleToFit() : e.isScaledDown() && e.scaleToActual(o, s))
		} else t.x = o, t.y = s, t.tapped = setTimeout(function () {
			t.tapped = null, e.toggleControls(!0)
		}, 300);
		return this
	}, n(e).on("onActivate.fb", function (t, e) {
		e.Guestures || (e.Guestures = new c(e))
	}), n(e).on("beforeClose.fb", function (t, e) {
		e.Guestures && e.Guestures.destroy()
	})
}(window, document, window.jQuery), function (t, e) {
	"use strict";
	var n = function (t) {
		this.instance = t, this.init()
	};
	e.extend(n.prototype, {
		timer: null, isActive: !1, $button: null, speed: 3e3, init: function () {
			var t = this;
			t.$button = e('<button data-fancybox-play class="fancybox-button fancybox-button--play" title="Slideshow (P)"></button>').appendTo(t.instance.$refs.buttons), t.instance.$refs.container.on("click", "[data-fancybox-play]", function () {
				t.toggle()
			})
		}, set: function () {
			var t = this;
			t.instance && t.instance.current && (t.instance.current.opts.loop || t.instance.currIndex < t.instance.group.length - 1) ? t.timer = setTimeout(function () {
				t.instance.next()
			}, t.instance.current.opts.slideShow.speed || t.speed) : t.stop()
		}, clear: function () {
			var t = this;
			clearTimeout(t.timer), t.timer = null
		}, start: function () {
			var t = this;
			t.stop(), t.instance && t.instance.current && (t.instance.current.opts.loop || t.instance.currIndex < t.instance.group.length - 1) && (t.instance.$refs.container.on({
				"beforeLoad.fb.player": e.proxy(t, "clear"),
				"onComplete.fb.player": e.proxy(t, "set")
			}), t.isActive = !0, t.instance.current.isComplete && t.set(), t.instance.$refs.container.trigger("onPlayStart"), t.$button.addClass("fancybox-button--pause"))
		}, stop: function () {
			var t = this;
			t.clear(), t.instance.$refs.container.trigger("onPlayEnd").off(".player"), t.$button.removeClass("fancybox-button--pause"), t.isActive = !1
		}, toggle: function () {
			var t = this;
			t.isActive ? t.stop() : t.start()
		}
	}), e(t).on("onInit.fb", function (t, e) {
		e.opts.slideShow && !e.SlideShow && e.group.length > 1 && (e.SlideShow = new n(e))
	}), e(t).on("beforeClose.fb onDeactivate.fb", function (t, e) {
		e.SlideShow && e.SlideShow.stop()
	})
}(document, window.jQuery), function (t, e) {
	"use strict";
	var n = function (t) {
		this.instance = t, this.init()
	};
	e.extend(n.prototype, {
		$button: null, init: function () {
			var n = this;
			n.isAvailable() && (n.$button = e('<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="Full screen (F)"></button>').appendTo(n.instance.$refs.buttons), n.instance.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
				t.stopPropagation(), t.preventDefault(), n.toggle()
			}), e(t).on("onUpdate.fb", function (t, e) {
				n.$button.toggle(!!e.current.opts.fullScreen), n.$button.toggleClass("fancybox-button-shrink", n.isActivated())
			}), e(t).on("afterClose.fb", function () {
				n.exit()
			}))
		}, isAvailable: function () {
			var t = this.instance.$refs.container.get(0);
			return !!(t.requestFullscreen || t.msRequestFullscreen || t.mozRequestFullScreen || t.webkitRequestFullscreen)
		}, isActivated: function () {
			return !!(t.fullscreenElement || t.mozFullScreenElement || t.webkitFullscreenElement || t.msFullscreenElement)
		}, launch: function () {
			var t = this.instance.$refs.container.get(0);
			t && !this.instance.isClosing && (t.requestFullscreen ? t.requestFullscreen() : t.msRequestFullscreen ? t.msRequestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen && t.webkitRequestFullscreen(t.ALLOW_KEYBOARD_INPUT))
		}, exit: function () {
			t.exitFullscreen ? t.exitFullscreen() : t.msExitFullscreen ? t.msExitFullscreen() : t.mozCancelFullScreen ? t.mozCancelFullScreen() : t.webkitExitFullscreen && t.webkitExitFullscreen()
		}, toggle: function () {
			this.isActivated() ? this.exit() : this.isAvailable() && this.launch()
		}
	}), e(t).on("onInit.fb", function (t, e) {
		e.opts.fullScreen && !e.FullScreen && (e.FullScreen = new n(e))
	})
}(document, window.jQuery), function (t, e) {
	"use strict";
	var n = function (t) {
		this.instance = t, this.init()
	};
	e.extend(n.prototype, {
		$button: null, $grid: null, $list: null, isVisible: !1, init: function () {
			var t = this;
			t.$button = e('<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="Thumbnails (G)"></button>').appendTo(this.instance.$refs.buttons).on("touchend click", function (e) {
				e.stopPropagation(), e.preventDefault(), t.toggle()
			})
		}, create: function () {
			var t, n, i = this.instance;
			this.$grid = e('<div class="fancybox-thumbs"></div>').appendTo(i.$refs.container), t = "<ul>", e.each(i.group, function (e, i) {
				(n = i.opts.thumb || (i.opts.$thumb ? i.opts.$thumb.attr("src") : null)) || "image" !== i.type || (n = i.src), n && n.length && (t += '<li data-index="' + e + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + n + '" /></li>')
			}), t += "</ul>", this.$list = e(t).appendTo(this.$grid).on("click touchstart", "li", function () {
				i.jumpTo(e(this).data("index"))
			}), this.$list.find("img").hide().one("load", function () {
				var t, n, i, o, s = e(this).parent().removeClass("fancybox-thumbs-loading"), r = s.outerWidth(),
					a = s.outerHeight();
				t = this.naturalWidth || this.width, o = (n = this.naturalHeight || this.height) / a, (i = t / r) >= 1 && o >= 1 && (i > o ? (t /= o, n = a) : (t = r, n /= i)), e(this).css({
					width: Math.floor(t),
					height: Math.floor(n),
					"margin-top": Math.min(0, Math.floor(.3 * a - .3 * n)),
					"margin-left": Math.min(0, Math.floor(.5 * r - .5 * t))
				}).show()
			}).each(function () {
				this.src = e(this).data("src")
			})
		}, focus: function () {
			this.instance.current && this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active").focus()
		}, close: function () {
			this.$grid.hide()
		}, update: function () {
			this.instance.$refs.container.toggleClass("fancybox-container--thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.$grid.show(), this.focus()) : this.$grid && this.$grid.hide(), this.instance.update()
		}, hide: function () {
			this.isVisible = !1, this.update()
		}, show: function () {
			this.isVisible = !0, this.update()
		}, toggle: function () {
			this.isVisible ? this.hide() : this.show()
		}
	}), e(t).on("onInit.fb", function (t, e) {
		var i = e.group[0], o = e.group[1];
		e.opts.thumbs && !e.Thumbs && e.group.length > 1 && ("image" == i.type || i.opts.thumb || i.opts.$thumb) && ("image" == o.type || o.opts.thumb || o.opts.$thumb) && (e.Thumbs = new n(e))
	}), e(t).on("beforeMove.fb", function (t, e, n) {
		var i = e.Thumbs;
		i && (n.modal ? (i.$button.hide(), i.hide()) : (!0 === e.opts.thumbs.showOnStart && e.firstRun && i.show(), i.$button.show(), i.isVisible && i.focus()))
	}), e(t).on("beforeClose.fb", function (t, e) {
		e.Thumbs && e.Thumbs.isVisible && !1 !== e.opts.thumbs.hideOnClosing && e.Thumbs.close(), e.Thumbs = null
	})
}(document, window.jQuery), function (t) {
	var e = !0;
	t.flexslider = function (e, n) {
		var i = t(e);
		i.vars = t.extend({}, t.flexslider.defaults, n);
		var o, s = i.vars.namespace, r = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
			a = ("ontouchstart" in window || r || window.DocumentTouch && document instanceof DocumentTouch) && i.vars.touch,
			l = "click touchend MSPointerUp keyup", c = "", u = "vertical" === i.vars.direction, h = i.vars.reverse,
			d = i.vars.itemWidth > 0, p = "fade" === i.vars.animation, f = "" !== i.vars.asNavFor, m = {};
		t.data(e, "flexslider", i), m = {
			init: function () {
				i.animating = !1, i.currentSlide = parseInt(i.vars.startAt ? i.vars.startAt : 0, 10), isNaN(i.currentSlide) && (i.currentSlide = 0), i.animatingTo = i.currentSlide, i.atEnd = 0 === i.currentSlide || i.currentSlide === i.last, i.containerSelector = i.vars.selector.substr(0, i.vars.selector.search(" ")), i.slides = t(i.vars.selector, i), i.container = t(i.containerSelector, i), i.count = i.slides.length, i.syncExists = t(i.vars.sync).length > 0, "slide" === i.vars.animation && (i.vars.animation = "swing"), i.prop = u ? "top" : "marginLeft", i.args = {}, i.manualPause = !1, i.stopped = !1, i.started = !1, i.startTimeout = null, i.transitions = !i.vars.video && !p && i.vars.useCSS && function () {
					var t = document.createElement("div"),
						e = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
					for (var n in e) if (void 0 !== t.style[e[n]]) return i.pfx = e[n].replace("Perspective", "").toLowerCase(), i.prop = "-" + i.pfx + "-transform", !0;
					return !1
				}(), i.ensureAnimationEnd = "", "" !== i.vars.controlsContainer && (i.controlsContainer = t(i.vars.controlsContainer).length > 0 && t(i.vars.controlsContainer)), "" !== i.vars.manualControls && (i.manualControls = t(i.vars.manualControls).length > 0 && t(i.vars.manualControls)), "" !== i.vars.customDirectionNav && (i.customDirectionNav = 2 === t(i.vars.customDirectionNav).length && t(i.vars.customDirectionNav)), i.vars.randomize && (i.slides.sort(function () {
					return Math.round(Math.random()) - .5
				}), i.container.empty().append(i.slides)), i.doMath(), i.setup("init"), i.vars.controlNav && m.controlNav.setup(), i.vars.directionNav && m.directionNav.setup(), i.vars.keyboard && (1 === t(i.containerSelector).length || i.vars.multipleKeyboard) && t(document).bind("keyup", function (t) {
					var e = t.keyCode;
					if (!i.animating && (39 === e || 37 === e)) {
						var n = 39 === e ? i.getTarget("next") : 37 === e && i.getTarget("prev");
						i.flexAnimate(n, i.vars.pauseOnAction)
					}
				}), i.vars.mousewheel && i.bind("mousewheel", function (t, e, n, o) {
					t.preventDefault();
					var s = e < 0 ? i.getTarget("next") : i.getTarget("prev");
					i.flexAnimate(s, i.vars.pauseOnAction)
				}), i.vars.pausePlay && m.pausePlay.setup(), i.vars.slideshow && i.vars.pauseInvisible && m.pauseInvisible.init(), i.vars.slideshow && (i.vars.pauseOnHover && i.hover(function () {
					i.manualPlay || i.manualPause || i.pause()
				}, function () {
					i.manualPause || i.manualPlay || i.stopped || i.play()
				}), i.vars.pauseInvisible && m.pauseInvisible.isHidden() || (i.vars.initDelay > 0 ? i.startTimeout = setTimeout(i.play, i.vars.initDelay) : i.play())), f && m.asNav.setup(), a && i.vars.touch && m.touch(), (!p || p && i.vars.smoothHeight) && t(window).bind("resize orientationchange focus", m.resize), i.find("img").attr("draggable", "false"), setTimeout(function () {
					i.vars.start(i)
				}, 200)
			}, asNav: {
				setup: function () {
					i.asNav = !0, i.animatingTo = Math.floor(i.currentSlide / i.move), i.currentItem = i.currentSlide, i.slides.removeClass(s + "active-slide").eq(i.currentItem).addClass(s + "active-slide"), r ? (e._slider = i, i.slides.each(function () {
						var e = this;
						e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", function (t) {
							t.preventDefault(), t.currentTarget._gesture && t.currentTarget._gesture.addPointer(t.pointerId)
						}, !1), e.addEventListener("MSGestureTap", function (e) {
							e.preventDefault();
							var n = t(this), o = n.index();
							t(i.vars.asNavFor).data("flexslider").animating || n.hasClass("active") || (i.direction = i.currentItem < o ? "next" : "prev", i.flexAnimate(o, i.vars.pauseOnAction, !1, !0, !0))
						})
					})) : i.slides.on(l, function (e) {
						e.preventDefault();
						var n = t(this), o = n.index();
						n.offset().left - t(i).scrollLeft() <= 0 && n.hasClass(s + "active-slide") ? i.flexAnimate(i.getTarget("prev"), !0) : t(i.vars.asNavFor).data("flexslider").animating || n.hasClass(s + "active-slide") || (i.direction = i.currentItem < o ? "next" : "prev", i.flexAnimate(o, i.vars.pauseOnAction, !1, !0, !0))
					})
				}
			}, controlNav: {
				setup: function () {
					i.manualControls ? m.controlNav.setupManual() : m.controlNav.setupPaging()
				}, setupPaging: function () {
					var e, n, o = "thumbnails" === i.vars.controlNav ? "control-thumbs" : "control-paging", r = 1;
					if (i.controlNavScaffold = t('<ol class="' + s + "control-nav " + s + o + '"></ol>'), i.pagingCount > 1) for (var a = 0; a < i.pagingCount; a++) {
						void 0 === (n = i.slides.eq(a)).attr("data-thumb-alt") && n.attr("data-thumb-alt", "");
						var u = "" !== n.attr("data-thumb-alt") ? u = ' alt="' + n.attr("data-thumb-alt") + '"' : "";
						if (e = "thumbnails" === i.vars.controlNav ? '<img src="' + n.attr("data-thumb") + '"' + u + "/>" : '<a href="#">' + r + "</a>", "thumbnails" === i.vars.controlNav && !0 === i.vars.thumbCaptions) {
							var h = n.attr("data-thumbcaption");
							"" !== h && void 0 !== h && (e += '<span class="' + s + 'caption">' + h + "</span>")
						}
						i.controlNavScaffold.append("<li>" + e + "</li>"), r++
					}
					i.controlsContainer ? t(i.controlsContainer).append(i.controlNavScaffold) : i.append(i.controlNavScaffold), m.controlNav.set(), m.controlNav.active(), i.controlNavScaffold.delegate("a, img", l, function (e) {
						if (e.preventDefault(), "" === c || c === e.type) {
							var n = t(this), o = i.controlNav.index(n);
							n.hasClass(s + "active") || (i.direction = o > i.currentSlide ? "next" : "prev", i.flexAnimate(o, i.vars.pauseOnAction))
						}
						"" === c && (c = e.type), m.setToClearWatchedEvent()
					})
				}, setupManual: function () {
					i.controlNav = i.manualControls, m.controlNav.active(), i.controlNav.bind(l, function (e) {
						if (e.preventDefault(), "" === c || c === e.type) {
							var n = t(this), o = i.controlNav.index(n);
							n.hasClass(s + "active") || (o > i.currentSlide ? i.direction = "next" : i.direction = "prev", i.flexAnimate(o, i.vars.pauseOnAction))
						}
						"" === c && (c = e.type), m.setToClearWatchedEvent()
					})
				}, set: function () {
					var e = "thumbnails" === i.vars.controlNav ? "img" : "a";
					i.controlNav = t("." + s + "control-nav li " + e, i.controlsContainer ? i.controlsContainer : i)
				}, active: function () {
					i.controlNav.removeClass(s + "active").eq(i.animatingTo).addClass(s + "active")
				}, update: function (e, n) {
					i.pagingCount > 1 && "add" === e ? i.controlNavScaffold.append(t('<li><a href="#">' + i.count + "</a></li>")) : 1 === i.pagingCount ? i.controlNavScaffold.find("li").remove() : i.controlNav.eq(n).closest("li").remove(), m.controlNav.set(), i.pagingCount > 1 && i.pagingCount !== i.controlNav.length ? i.update(n, e) : m.controlNav.active()
				}
			}, directionNav: {
				setup: function () {
					var e = t('<ul class="' + s + 'direction-nav"><li class="' + s + 'nav-prev"><a class="' + s + 'prev" href="#">' + i.vars.prevText + '</a></li><li class="' + s + 'nav-next"><a class="' + s + 'next" href="#">' + i.vars.nextText + "</a></li></ul>");
					i.customDirectionNav ? i.directionNav = i.customDirectionNav : i.controlsContainer ? (t(i.controlsContainer).append(e), i.directionNav = t("." + s + "direction-nav li a", i.controlsContainer)) : (i.append(e), i.directionNav = t("." + s + "direction-nav li a", i)), m.directionNav.update(), i.directionNav.bind(l, function (e) {
						e.preventDefault();
						var n;
						"" !== c && c !== e.type || (n = t(this).hasClass(s + "next") ? i.getTarget("next") : i.getTarget("prev"), i.flexAnimate(n, i.vars.pauseOnAction)), "" === c && (c = e.type), m.setToClearWatchedEvent()
					})
				}, update: function () {
					var t = s + "disabled";
					1 === i.pagingCount ? i.directionNav.addClass(t).attr("tabindex", "-1") : i.vars.animationLoop ? i.directionNav.removeClass(t).removeAttr("tabindex") : 0 === i.animatingTo ? i.directionNav.removeClass(t).filter("." + s + "prev").addClass(t).attr("tabindex", "-1") : i.animatingTo === i.last ? i.directionNav.removeClass(t).filter("." + s + "next").addClass(t).attr("tabindex", "-1") : i.directionNav.removeClass(t).removeAttr("tabindex")
				}
			}, pausePlay: {
				setup: function () {
					var e = t('<div class="' + s + 'pauseplay"><a href="#"></a></div>');
					i.controlsContainer ? (i.controlsContainer.append(e), i.pausePlay = t("." + s + "pauseplay a", i.controlsContainer)) : (i.append(e), i.pausePlay = t("." + s + "pauseplay a", i)), m.pausePlay.update(i.vars.slideshow ? s + "pause" : s + "play"), i.pausePlay.bind(l, function (e) {
						e.preventDefault(), "" !== c && c !== e.type || (t(this).hasClass(s + "pause") ? (i.manualPause = !0, i.manualPlay = !1, i.pause()) : (i.manualPause = !1, i.manualPlay = !0, i.play())), "" === c && (c = e.type), m.setToClearWatchedEvent()
					})
				}, update: function (t) {
					"play" === t ? i.pausePlay.removeClass(s + "pause").addClass(s + "play").html(i.vars.playText) : i.pausePlay.removeClass(s + "play").addClass(s + "pause").html(i.vars.pauseText)
				}
			}, touch: function () {
				var t, n, o, s, a, l, c, f, m, g = !1, v = 0, y = 0, b = 0;
				r ? (e.style.msTouchAction = "none", e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", function (t) {
					t.stopPropagation(), i.animating ? t.preventDefault() : (i.pause(), e._gesture.addPointer(t.pointerId), b = 0, s = u ? i.h : i.w, l = Number(new Date), o = d && h && i.animatingTo === i.last ? 0 : d && h ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo : d && i.currentSlide === i.last ? i.limit : d ? (i.itemW + i.vars.itemMargin) * i.move * i.currentSlide : h ? (i.last - i.currentSlide + i.cloneOffset) * s : (i.currentSlide + i.cloneOffset) * s)
				}, !1), e._slider = i, e.addEventListener("MSGestureChange", function (t) {
					t.stopPropagation();
					var n = t.target._slider;
					if (n) {
						var i = -t.translationX, r = -t.translationY;
						a = b += u ? r : i, g = u ? Math.abs(b) < Math.abs(-i) : Math.abs(b) < Math.abs(-r), t.detail !== t.MSGESTURE_FLAG_INERTIA ? (!g || Number(new Date) - l > 500) && (t.preventDefault(), !p && n.transitions && (n.vars.animationLoop || (a = b / (0 === n.currentSlide && b < 0 || n.currentSlide === n.last && b > 0 ? Math.abs(b) / s + 2 : 1)), n.setProps(o + a, "setTouch"))) : setImmediate(function () {
							e._gesture.stop()
						})
					}
				}, !1), e.addEventListener("MSGestureEnd", function (e) {
					e.stopPropagation();
					var i = e.target._slider;
					if (i) {
						if (i.animatingTo === i.currentSlide && !g && null !== a) {
							var r = h ? -a : a, c = r > 0 ? i.getTarget("next") : i.getTarget("prev");
							i.canAdvance(c) && (Number(new Date) - l < 550 && Math.abs(r) > 50 || Math.abs(r) > s / 2) ? i.flexAnimate(c, i.vars.pauseOnAction) : p || i.flexAnimate(i.currentSlide, i.vars.pauseOnAction, !0)
						}
						t = null, n = null, a = null, o = null, b = 0
					}
				}, !1)) : (c = function (r) {
					i.animating ? r.preventDefault() : (window.navigator.msPointerEnabled || 1 === r.touches.length) && (s = u ? i.h : i.w, l = Number(new Date), v = r.touches[0].pageX, y = r.touches[0].pageY, o = d && h && i.animatingTo === i.last ? 0 : d && h ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo : d && i.currentSlide === i.last ? i.limit : d ? (i.itemW + i.vars.itemMargin) * i.move * i.currentSlide : h ? (i.last - i.currentSlide + i.cloneOffset) * s : (i.currentSlide + i.cloneOffset) * s, t = u ? y : v, n = u ? v : y, e.addEventListener("touchmove", f, !1), e.addEventListener("touchend", m, !1))
				}, f = function (e) {
					v = e.touches[0].pageX, y = e.touches[0].pageY, a = u ? t - y : t - v;
					(!(g = u ? Math.abs(a) < Math.abs(v - n) : Math.abs(a) < Math.abs(y - n)) || Number(new Date) - l > 500) && (e.preventDefault(), !p && i.transitions && (i.vars.animationLoop || (a /= 0 === i.currentSlide && a < 0 || i.currentSlide === i.last && a > 0 ? Math.abs(a) / s + 2 : 1), i.setProps(o + a, "setTouch")))
				}, m = function (r) {
					if (e.removeEventListener("touchmove", f, !1), i.animatingTo === i.currentSlide && !g && null !== a) {
						var c = h ? -a : a, u = c > 0 ? i.getTarget("next") : i.getTarget("prev");
						i.canAdvance(u) && (Number(new Date) - l < 550 && Math.abs(c) > 50 || Math.abs(c) > s / 2) ? i.flexAnimate(u, i.vars.pauseOnAction) : p || i.flexAnimate(i.currentSlide, i.vars.pauseOnAction, !0)
					}
					e.removeEventListener("touchend", m, !1), t = null, n = null, a = null, o = null
				}, e.addEventListener("touchstart", c, !1))
			}, resize: function () {
				!i.animating && i.is(":visible") && (d || i.doMath(), p ? m.smoothHeight() : d ? (i.slides.width(i.computedW), i.update(i.pagingCount), i.setProps()) : u ? (i.viewport.height(i.h), i.setProps(i.h, "setTotal")) : (i.vars.smoothHeight && m.smoothHeight(), i.newSlides.width(i.computedW), i.setProps(i.computedW, "setTotal")))
			}, smoothHeight: function (t) {
				if (!u || p) {
					var e = p ? i : i.viewport;
					t ? e.animate({height: i.slides.eq(i.animatingTo).innerHeight()}, t) : e.innerHeight(i.slides.eq(i.animatingTo).innerHeight())
				}
			}, sync: function (e) {
				var n = t(i.vars.sync).data("flexslider"), o = i.animatingTo;
				switch (e) {
					case"animate":
						n.flexAnimate(o, i.vars.pauseOnAction, !1, !0);
						break;
					case"play":
						n.playing || n.asNav || n.play();
						break;
					case"pause":
						n.pause()
				}
			}, uniqueID: function (e) {
				return e.filter("[id]").add(e.find("[id]")).each(function () {
					var e = t(this);
					e.attr("id", e.attr("id") + "_clone")
				}), e
			}, pauseInvisible: {
				visProp: null, init: function () {
					var t = m.pauseInvisible.getHiddenProp();
					if (t) {
						var e = t.replace(/[H|h]idden/, "") + "visibilitychange";
						document.addEventListener(e, function () {
							m.pauseInvisible.isHidden() ? i.startTimeout ? clearTimeout(i.startTimeout) : i.pause() : i.started ? i.play() : i.vars.initDelay > 0 ? setTimeout(i.play, i.vars.initDelay) : i.play()
						})
					}
				}, isHidden: function () {
					var t = m.pauseInvisible.getHiddenProp();
					return !!t && document[t]
				}, getHiddenProp: function () {
					var t = ["webkit", "moz", "ms", "o"];
					if ("hidden" in document) return "hidden";
					for (var e = 0; e < t.length; e++) if (t[e] + "Hidden" in document) return t[e] + "Hidden";
					return null
				}
			}, setToClearWatchedEvent: function () {
				clearTimeout(o), o = setTimeout(function () {
					c = ""
				}, 3e3)
			}
		}, i.flexAnimate = function (e, n, o, r, l) {
			if (i.vars.animationLoop || e === i.currentSlide || (i.direction = e > i.currentSlide ? "next" : "prev"), f && 1 === i.pagingCount && (i.direction = i.currentItem < e ? "next" : "prev"), !i.animating && (i.canAdvance(e, l) || o) && i.is(":visible")) {
				if (f && r) {
					var c = t(i.vars.asNavFor).data("flexslider");
					if (i.atEnd = 0 === e || e === i.count - 1, c.flexAnimate(e, !0, !1, !0, l), i.direction = i.currentItem < e ? "next" : "prev", c.direction = i.direction, Math.ceil((e + 1) / i.visible) - 1 === i.currentSlide || 0 === e) return i.currentItem = e, i.slides.removeClass(s + "active-slide").eq(e).addClass(s + "active-slide"), !1;
					i.currentItem = e, i.slides.removeClass(s + "active-slide").eq(e).addClass(s + "active-slide"), e = Math.floor(e / i.visible)
				}
				if (i.animating = !0, i.animatingTo = e, n && i.pause(), i.vars.before(i), i.syncExists && !l && m.sync("animate"), i.vars.controlNav && m.controlNav.active(), d || i.slides.removeClass(s + "active-slide").eq(e).addClass(s + "active-slide"), i.atEnd = 0 === e || e === i.last, i.vars.directionNav && m.directionNav.update(), e === i.last && (i.vars.end(i), i.vars.animationLoop || i.pause()), p) a ? (i.slides.eq(i.currentSlide).css({
					opacity: 0,
					zIndex: 1
				}), i.slides.eq(e).css({
					opacity: 1,
					zIndex: 2
				}), i.wrapup(b)) : (i.slides.eq(i.currentSlide).css({zIndex: 1}).animate({opacity: 0}, i.vars.animationSpeed, i.vars.easing), i.slides.eq(e).css({zIndex: 2}).animate({opacity: 1}, i.vars.animationSpeed, i.vars.easing, i.wrapup)); else {
					var g, v, y, b = u ? i.slides.filter(":first").height() : i.computedW;
					d ? (g = i.vars.itemMargin, v = (y = (i.itemW + g) * i.move * i.animatingTo) > i.limit && 1 !== i.visible ? i.limit : y) : v = 0 === i.currentSlide && e === i.count - 1 && i.vars.animationLoop && "next" !== i.direction ? h ? (i.count + i.cloneOffset) * b : 0 : i.currentSlide === i.last && 0 === e && i.vars.animationLoop && "prev" !== i.direction ? h ? 0 : (i.count + 1) * b : h ? (i.count - 1 - e + i.cloneOffset) * b : (e + i.cloneOffset) * b, i.setProps(v, "", i.vars.animationSpeed), i.transitions ? (i.vars.animationLoop && i.atEnd || (i.animating = !1, i.currentSlide = i.animatingTo), i.container.unbind("webkitTransitionEnd transitionend"), i.container.bind("webkitTransitionEnd transitionend", function () {
						clearTimeout(i.ensureAnimationEnd), i.wrapup(b)
					}), clearTimeout(i.ensureAnimationEnd), i.ensureAnimationEnd = setTimeout(function () {
						i.wrapup(b)
					}, i.vars.animationSpeed + 100)) : i.container.animate(i.args, i.vars.animationSpeed, i.vars.easing, function () {
						i.wrapup(b)
					})
				}
				i.vars.smoothHeight && m.smoothHeight(i.vars.animationSpeed)
			}
		}, i.wrapup = function (t) {
			p || d || (0 === i.currentSlide && i.animatingTo === i.last && i.vars.animationLoop ? i.setProps(t, "jumpEnd") : i.currentSlide === i.last && 0 === i.animatingTo && i.vars.animationLoop && i.setProps(t, "jumpStart")), i.animating = !1, i.currentSlide = i.animatingTo, i.vars.after(i)
		}, i.animateSlides = function () {
			i.animating || i.flexAnimate(i.getTarget("next"))
		}, i.pause = function () {
			clearInterval(i.animatedSlides), i.animatedSlides = null, i.playing = !1, i.vars.pausePlay && m.pausePlay.update("play"), i.syncExists && m.sync("pause")
		}, i.play = function () {
			i.playing && clearInterval(i.animatedSlides), i.animatedSlides = i.animatedSlides || setInterval(i.animateSlides, i.vars.slideshowSpeed), i.started = i.playing = !0, i.vars.pausePlay && m.pausePlay.update("pause"), i.syncExists && m.sync("play")
		}, i.stop = function () {
			i.pause(), i.stopped = !0
		}, i.canAdvance = function (t, e) {
			var n = f ? i.pagingCount - 1 : i.last;
			return !!e || (!(!f || i.currentItem !== i.count - 1 || 0 !== t || "prev" !== i.direction) || (!f || 0 !== i.currentItem || t !== i.pagingCount - 1 || "next" === i.direction) && (!(t === i.currentSlide && !f) && (!!i.vars.animationLoop || (!i.atEnd || 0 !== i.currentSlide || t !== n || "next" === i.direction) && (!i.atEnd || i.currentSlide !== n || 0 !== t || "next" !== i.direction))))
		}, i.getTarget = function (t) {
			return i.direction = t, "next" === t ? i.currentSlide === i.last ? 0 : i.currentSlide + 1 : 0 === i.currentSlide ? i.last : i.currentSlide - 1
		}, i.setProps = function (t, e, n) {
			var o = function () {
				var n = t || (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo;
				return -1 * function () {
					if (d) return "setTouch" === e ? t : h && i.animatingTo === i.last ? 0 : h ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo : i.animatingTo === i.last ? i.limit : n;
					switch (e) {
						case"setTotal":
							return h ? (i.count - 1 - i.currentSlide + i.cloneOffset) * t : (i.currentSlide + i.cloneOffset) * t;
						case"setTouch":
							return t;
						case"jumpEnd":
							return h ? t : i.count * t;
						case"jumpStart":
							return h ? i.count * t : t;
						default:
							return t
					}
				}() + "px"
			}();
			i.transitions && (o = u ? "translate3d(0," + o + ",0)" : "translate3d(" + o + ",0,0)", n = void 0 !== n ? n / 1e3 + "s" : "0s", i.container.css("-" + i.pfx + "-transition-duration", n), i.container.css("transition-duration", n)), i.args[i.prop] = o, (i.transitions || void 0 === n) && i.container.css(i.args), i.container.css("transform", o)
		}, i.setup = function (e) {
			if (p) i.slides.css({
				width: "100%",
				float: "left",
				marginRight: "-100%",
				position: "relative"
			}), "init" === e && (a ? i.slides.css({
				opacity: 0,
				display: "block",
				webkitTransition: "opacity " + i.vars.animationSpeed / 1e3 + "s ease",
				zIndex: 1
			}).eq(i.currentSlide).css({opacity: 1, zIndex: 2}) : 0 == i.vars.fadeFirstSlide ? i.slides.css({
				opacity: 0,
				display: "block",
				zIndex: 1
			}).eq(i.currentSlide).css({zIndex: 2}).css({opacity: 1}) : i.slides.css({
				opacity: 0,
				display: "block",
				zIndex: 1
			}).eq(i.currentSlide).css({zIndex: 2}).animate({opacity: 1}, i.vars.animationSpeed, i.vars.easing)), i.vars.smoothHeight && m.smoothHeight(); else {
				var n, o;
				"init" === e && (i.viewport = t('<div class="' + s + 'viewport"></div>').css({
					overflow: "hidden",
					position: "relative"
				}).appendTo(i).append(i.container), i.cloneCount = 0, i.cloneOffset = 0, h && (o = t.makeArray(i.slides).reverse(), i.slides = t(o), i.container.empty().append(i.slides))), i.vars.animationLoop && !d && (i.cloneCount = 2, i.cloneOffset = 1, "init" !== e && i.container.find(".clone").remove(), i.container.append(m.uniqueID(i.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(m.uniqueID(i.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), i.newSlides = t(i.vars.selector, i), n = h ? i.count - 1 - i.currentSlide + i.cloneOffset : i.currentSlide + i.cloneOffset, u && !d ? (i.container.height(200 * (i.count + i.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function () {
					i.newSlides.css({display: "block"}), i.doMath(), i.viewport.height(i.h), i.setProps(n * i.h, "init")
				}, "init" === e ? 100 : 0)) : (i.container.width(200 * (i.count + i.cloneCount) + "%"), i.setProps(n * i.computedW, "init"), setTimeout(function () {
					i.doMath(), i.newSlides.css({
						width: i.computedW,
						marginRight: i.computedM,
						float: "left",
						display: "block"
					}), i.vars.smoothHeight && m.smoothHeight()
				}, "init" === e ? 100 : 0))
			}
			d || i.slides.removeClass(s + "active-slide").eq(i.currentSlide).addClass(s + "active-slide"), i.vars.init(i)
		}, i.doMath = function () {
			var t = i.slides.first(), e = i.vars.itemMargin, n = i.vars.minItems, o = i.vars.maxItems;
			i.w = void 0 === i.viewport ? i.width() : i.viewport.width(), i.h = t.height(), i.boxPadding = t.outerWidth() - t.width(), d ? (i.itemT = i.vars.itemWidth + e, i.itemM = e, i.minW = n ? n * i.itemT : i.w, i.maxW = o ? o * i.itemT - e : i.w, i.itemW = i.minW > i.w ? (i.w - e * (n - 1)) / n : i.maxW < i.w ? (i.w - e * (o - 1)) / o : i.vars.itemWidth > i.w ? i.w : i.vars.itemWidth, i.visible = Math.floor(i.w / i.itemW), i.move = i.vars.move > 0 && i.vars.move < i.visible ? i.vars.move : i.visible, i.pagingCount = Math.ceil((i.count - i.visible) / i.move + 1), i.last = i.pagingCount - 1, i.limit = 1 === i.pagingCount ? 0 : i.vars.itemWidth > i.w ? i.itemW * (i.count - 1) + e * (i.count - 1) : (i.itemW + e) * i.count - i.w - e) : (i.itemW = i.w, i.itemM = e, i.pagingCount = i.count, i.last = i.count - 1), i.computedW = i.itemW - i.boxPadding, i.computedM = i.itemM
		}, i.update = function (t, e) {
			i.doMath(), d || (t < i.currentSlide ? i.currentSlide += 1 : t <= i.currentSlide && 0 !== t && (i.currentSlide -= 1), i.animatingTo = i.currentSlide), i.vars.controlNav && !i.manualControls && ("add" === e && !d || i.pagingCount > i.controlNav.length ? m.controlNav.update("add") : ("remove" === e && !d || i.pagingCount < i.controlNav.length) && (d && i.currentSlide > i.last && (i.currentSlide -= 1, i.animatingTo -= 1), m.controlNav.update("remove", i.last))), i.vars.directionNav && m.directionNav.update()
		}, i.addSlide = function (e, n) {
			var o = t(e);
			i.count += 1, i.last = i.count - 1, u && h ? void 0 !== n ? i.slides.eq(i.count - n).after(o) : i.container.prepend(o) : void 0 !== n ? i.slides.eq(n).before(o) : i.container.append(o), i.update(n, "add"), i.slides = t(i.vars.selector + ":not(.clone)", i), i.setup(), i.vars.added(i)
		}, i.removeSlide = function (e) {
			var n = isNaN(e) ? i.slides.index(t(e)) : e;
			i.count -= 1, i.last = i.count - 1, isNaN(e) ? t(e, i.slides).remove() : u && h ? i.slides.eq(i.last).remove() : i.slides.eq(e).remove(), i.doMath(), i.update(n, "remove"), i.slides = t(i.vars.selector + ":not(.clone)", i), i.setup(), i.vars.removed(i)
		}, m.init()
	}, t(window).blur(function (t) {
		e = !1
	}).focus(function (t) {
		e = !0
	}), t.flexslider.defaults = {
		namespace: "flex-",
		selector: ".slides > li",
		animation: "fade",
		easing: "swing",
		direction: "horizontal",
		reverse: !1,
		animationLoop: !0,
		smoothHeight: !1,
		startAt: 0,
		slideshow: !0,
		slideshowSpeed: 7e3,
		animationSpeed: 600,
		initDelay: 0,
		randomize: !1,
		fadeFirstSlide: !0,
		thumbCaptions: !1,
		pauseOnAction: !0,
		pauseOnHover: !1,
		pauseInvisible: !0,
		useCSS: !0,
		touch: !0,
		video: !1,
		controlNav: !0,
		directionNav: !0,
		prevText: "Previous",
		nextText: "Next",
		keyboard: !0,
		multipleKeyboard: !1,
		mousewheel: !1,
		pausePlay: !1,
		pauseText: "Pause",
		playText: "Play",
		controlsContainer: "",
		manualControls: "",
		customDirectionNav: "",
		sync: "",
		asNavFor: "",
		itemWidth: 0,
		itemMargin: 0,
		minItems: 1,
		maxItems: 0,
		move: 0,
		allowOneSlide: !0,
		start: function () {
		},
		before: function () {
		},
		after: function () {
		},
		end: function () {
		},
		added: function () {
		},
		removed: function () {
		},
		init: function () {
		}
	}, t.fn.flexslider = function (e) {
		if (void 0 === e && (e = {}), "object" == typeof e) return this.each(function () {
			var n = t(this), i = e.selector ? e.selector : ".slides > li", o = n.find(i);
			1 === o.length && !1 === e.allowOneSlide || 0 === o.length ? (o.fadeIn(400), e.start && e.start(n)) : void 0 === n.data("flexslider") && new t.flexslider(this, e)
		});
		var n = t(this).data("flexslider");
		switch (e) {
			case"play":
				n.play();
				break;
			case"pause":
				n.pause();
				break;
			case"stop":
				n.stop();
				break;
			case"next":
				n.flexAnimate(n.getTarget("next"), !0);
				break;
			case"prev":
			case"previous":
				n.flexAnimate(n.getTarget("prev"), !0);
				break;
			default:
				"number" == typeof e && n.flexAnimate(e, !0)
		}
	}
}(jQuery), function (t, e, n, i) {
	"use strict";
	var o = function (e) {
		this.owl = e, this._thumbcontent = [], this._identifier = 0, this.owl_currentitem = this.owl.options.startPosition, this.$element = this.owl.$element, this._handlers = {
			"prepared.owl.carousel": t.proxy(function (e) {
				if (!e.namespace || !this.owl.options.thumbs || this.owl.options.thumbImage || this.owl.options.thumbsPrerendered || this.owl.options.thumbImage) {
					if (e.namespace && this.owl.options.thumbs && this.owl.options.thumbImage) {
						var n = t(e.content).find("img");
						this._thumbcontent.push(n)
					}
				} else void 0 !== t(e.content).find("[data-thumb]").attr("data-thumb") && this._thumbcontent.push(t(e.content).find("[data-thumb]").attr("data-thumb"))
			}, this), "initialized.owl.carousel": t.proxy(function (t) {
				t.namespace && this.owl.options.thumbs && (this.render(), this.listen(), this._identifier = this.owl.$element.data("slider-id"), this.setActive())
			}, this), "changed.owl.carousel": t.proxy(function (t) {
				t.namespace && "position" === t.property.name && this.owl.options.thumbs && (this._identifier = this.owl.$element.data("slider-id"), this.setActive())
			}, this)
		}, this.owl.options = t.extend({}, o.Defaults, this.owl.options), this.owl.$element.on(this._handlers)
	};
	o.Defaults = {
		thumbs: !0,
		thumbImage: !1,
		thumbContainerClass: "owl-thumbs",
		thumbItemClass: "owl-thumb-item",
		moveThumbsInside: !1
	}, o.prototype.listen = function () {
		var e = this.owl.options;
		e.thumbsPrerendered && (this._thumbcontent._thumbcontainer = t("." + e.thumbContainerClass)), t(this._thumbcontent._thumbcontainer).on("click", this._thumbcontent._thumbcontainer.children(), t.proxy(function (n) {
			this._identifier = t(n.target).closest("." + e.thumbContainerClass).data("slider-id");
			var i = t(n.target).parent().is(this._thumbcontent._thumbcontainer) ? t(n.target).index() : t(n.target).closest("." + e.thumbItemClass).index();
			e.thumbsPrerendered ? t("[data-slider-id=" + this._identifier + "]").trigger("to.owl.carousel", [i, e.dotsSpeed, !0]) : this.owl.to(i, e.dotsSpeed), n.preventDefault()
		}, this))
	}, o.prototype.render = function () {
		var e = this.owl.options;
		e.thumbsPrerendered ? (this._thumbcontent._thumbcontainer = t("." + e.thumbContainerClass), e.moveThumbsInside && this._thumbcontent._thumbcontainer.appendTo(this.$element)) : this._thumbcontent._thumbcontainer = t("<div>").addClass(e.thumbContainerClass).appendTo(this.$element);
		var n;
		if (e.thumbImage) for (n = 0; n < this._thumbcontent.length; ++n) this._thumbcontent._thumbcontainer.append("<button class=" + e.thumbItemClass + '><img src="' + this._thumbcontent[n].attr("src") + '" alt="' + this._thumbcontent[n].attr("alt") + '" /></button>'); else for (n = 0; n < this._thumbcontent.length; ++n) this._thumbcontent._thumbcontainer.append("<button class=" + e.thumbItemClass + ">" + this._thumbcontent[n] + "</button>")
	}, o.prototype.setActive = function () {
		this.owl_currentitem = this.owl._current - this.owl._clones.length / 2, this.owl_currentitem === this.owl._items.length && (this.owl_currentitem = 0);
		var e = this.owl.options,
			n = e.thumbsPrerendered ? t("." + e.thumbContainerClass + '[data-slider-id="' + this._identifier + '"]') : this._thumbcontent._thumbcontainer;
		n.children().filter(".active").removeClass("active"), n.children().eq(this.owl_currentitem).addClass("active")
	}, o.prototype.destroy = function () {
		var t, e;
		for (t in this._handlers) this.owl.$element.off(t, this._handlers[t]);
		for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.Thumbs = o
}(window.Zepto || window.jQuery, window, document), function (t) {
	"function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : window.noUiSlider = t()
}(function () {
	"use strict";

	function t(t) {
		return "object" == typeof t && "function" == typeof t.to && "function" == typeof t.from
	}

	function e(t) {
		t.parentElement.removeChild(t)
	}

	function n(t) {
		t.preventDefault()
	}

	function i(t) {
		return t.filter(function (t) {
			return !this[t] && (this[t] = !0)
		}, {})
	}

	function o(t, e) {
		return Math.round(t / e) * e
	}

	function s(t, e) {
		var n = t.getBoundingClientRect(), i = t.ownerDocument, o = i.documentElement, s = f(i);
		return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (s.x = 0), e ? n.top + s.y - o.clientTop : n.left + s.x - o.clientLeft
	}

	function r(t) {
		return "number" == typeof t && !isNaN(t) && isFinite(t)
	}

	function a(t, e, n) {
		n > 0 && (h(t, e), setTimeout(function () {
			d(t, e)
		}, n))
	}

	function l(t) {
		return Math.max(Math.min(t, 100), 0)
	}

	function c(t) {
		return Array.isArray(t) ? t : [t]
	}

	function u(t) {
		var e = (t = String(t)).split(".");
		return e.length > 1 ? e[1].length : 0
	}

	function h(t, e) {
		t.classList ? t.classList.add(e) : t.className += " " + e
	}

	function d(t, e) {
		t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ")
	}

	function p(t, e) {
		return t.classList ? t.classList.contains(e) : new RegExp("\\b" + e + "\\b").test(t.className)
	}

	function f(t) {
		var e = void 0 !== window.pageXOffset, n = "CSS1Compat" === (t.compatMode || "");
		return {
			x: e ? window.pageXOffset : n ? t.documentElement.scrollLeft : t.body.scrollLeft,
			y: e ? window.pageYOffset : n ? t.documentElement.scrollTop : t.body.scrollTop
		}
	}

	function m() {
		return window.navigator.pointerEnabled ? {
			start: "pointerdown",
			move: "pointermove",
			end: "pointerup"
		} : window.navigator.msPointerEnabled ? {
			start: "MSPointerDown",
			move: "MSPointerMove",
			end: "MSPointerUp"
		} : {start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend"}
	}

	function g() {
		var t = !1;
		try {
			var e = Object.defineProperty({}, "passive", {
				get: function () {
					t = !0
				}
			});
			window.addEventListener("test", null, e)
		} catch (t) {
		}
		return t
	}

	function v() {
		return window.CSS && CSS.supports && CSS.supports("touch-action", "none")
	}

	function y(t, e) {
		return 100 / (e - t)
	}

	function b(t, e) {
		return 100 * e / (t[1] - t[0])
	}

	function w(t, e) {
		return b(t, t[0] < 0 ? e + Math.abs(t[0]) : e - t[0])
	}

	function x(t, e) {
		return e * (t[1] - t[0]) / 100 + t[0]
	}

	function _(t, e) {
		for (var n = 1; t >= e[n];) n += 1;
		return n
	}

	function C(t, e, n) {
		if (n >= t.slice(-1)[0]) return 100;
		var i, o, s, r, a = _(n, t);
		return i = t[a - 1], o = t[a], s = e[a - 1], r = e[a], s + w([i, o], n) / y(s, r)
	}

	function T(t, e, n) {
		if (n >= 100) return t.slice(-1)[0];
		var i, o, s, r, a = _(n, e);
		return i = t[a - 1], o = t[a], s = e[a - 1], r = e[a], x([i, o], (n - s) * y(s, r))
	}

	function E(t, e, n, i) {
		if (100 === i) return i;
		var s, r, a = _(i, t);
		return n ? (s = t[a - 1], r = t[a], i - s > (r - s) / 2 ? r : s) : e[a - 1] ? t[a - 1] + o(i - t[a - 1], e[a - 1]) : i
	}

	function S(t, e, n) {
		var i;
		if ("number" == typeof e && (e = [e]), "[object Array]" !== Object.prototype.toString.call(e)) throw new Error("noUiSlider (" + K + "): 'range' contains invalid value.");
		if (i = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t), !r(i) || !r(e[0])) throw new Error("noUiSlider (" + K + "): 'range' value isn't numeric.");
		n.xPct.push(i), n.xVal.push(e[0]), i ? n.xSteps.push(!isNaN(e[1]) && e[1]) : isNaN(e[1]) || (n.xSteps[0] = e[1]), n.xHighestCompleteStep.push(0)
	}

	function k(t, e, n) {
		if (!e) return !0;
		n.xSteps[t] = b([n.xVal[t], n.xVal[t + 1]], e) / y(n.xPct[t], n.xPct[t + 1]);
		var i = (n.xVal[t + 1] - n.xVal[t]) / n.xNumSteps[t], o = Math.ceil(Number(i.toFixed(3)) - 1),
			s = n.xVal[t] + n.xNumSteps[t] * o;
		n.xHighestCompleteStep[t] = s
	}

	function A(t, e, n) {
		this.xPct = [], this.xVal = [], this.xSteps = [n || !1], this.xNumSteps = [!1], this.xHighestCompleteStep = [], this.snap = e;
		var i, o = [];
		for (i in t) t.hasOwnProperty(i) && o.push([t[i], i]);
		for (o.sort(o.length && "object" == typeof o[0][0] ? function (t, e) {
			return t[0][0] - e[0][0]
		} : function (t, e) {
			return t[0] - e[0]
		}), i = 0; i < o.length; i++) S(o[i][1], o[i][0], this);
		for (this.xNumSteps = this.xSteps.slice(0), i = 0; i < this.xNumSteps.length; i++) k(i, this.xNumSteps[i], this)
	}

	function I(e) {
		if (t(e)) return !0;
		throw new Error("noUiSlider (" + K + "): 'format' requires 'to' and 'from' methods.")
	}

	function N(t, e) {
		if (!r(e)) throw new Error("noUiSlider (" + K + "): 'step' is not numeric.");
		t.singleStep = e
	}

	function D(t, e) {
		if ("object" != typeof e || Array.isArray(e)) throw new Error("noUiSlider (" + K + "): 'range' is not an object.");
		if (void 0 === e.min || void 0 === e.max) throw new Error("noUiSlider (" + K + "): Missing 'min' or 'max' in 'range'.");
		if (e.min === e.max) throw new Error("noUiSlider (" + K + "): 'range' 'min' and 'max' cannot be equal.");
		t.spectrum = new A(e, t.snap, t.singleStep)
	}

	function O(t, e) {
		if (e = c(e), !Array.isArray(e) || !e.length) throw new Error("noUiSlider (" + K + "): 'start' option is incorrect.");
		t.handles = e.length, t.start = e
	}

	function $(t, e) {
		if (t.snap = e, "boolean" != typeof e) throw new Error("noUiSlider (" + K + "): 'snap' option must be a boolean.")
	}

	function P(t, e) {
		if (t.animate = e, "boolean" != typeof e) throw new Error("noUiSlider (" + K + "): 'animate' option must be a boolean.")
	}

	function L(t, e) {
		if (t.animationDuration = e, "number" != typeof e) throw new Error("noUiSlider (" + K + "): 'animationDuration' option must be a number.")
	}

	function M(t, e) {
		var n, i = [!1];
		if ("lower" === e ? e = [!0, !1] : "upper" === e && (e = [!1, !0]), !0 === e || !1 === e) {
			for (n = 1; n < t.handles; n++) i.push(e);
			i.push(!1)
		} else {
			if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1) throw new Error("noUiSlider (" + K + "): 'connect' option doesn't match handle count.");
			i = e
		}
		t.connect = i
	}

	function j(t, e) {
		switch (e) {
			case"horizontal":
				t.ort = 0;
				break;
			case"vertical":
				t.ort = 1;
				break;
			default:
				throw new Error("noUiSlider (" + K + "): 'orientation' option is invalid.")
		}
	}

	function R(t, e) {
		if (!r(e)) throw new Error("noUiSlider (" + K + "): 'margin' option must be numeric.");
		if (0 !== e && (t.margin = t.spectrum.getMargin(e), !t.margin)) throw new Error("noUiSlider (" + K + "): 'margin' option is only supported on linear sliders.")
	}

	function H(t, e) {
		if (!r(e)) throw new Error("noUiSlider (" + K + "): 'limit' option must be numeric.");
		if (t.limit = t.spectrum.getMargin(e), !t.limit || t.handles < 2) throw new Error("noUiSlider (" + K + "): 'limit' option is only supported on linear sliders with 2 or more handles.")
	}

	function F(t, e) {
		if (!r(e)) throw new Error("noUiSlider (" + K + "): 'padding' option must be numeric.");
		if (0 !== e) {
			if (t.padding = t.spectrum.getMargin(e), !t.padding) throw new Error("noUiSlider (" + K + "): 'padding' option is only supported on linear sliders.");
			if (t.padding < 0) throw new Error("noUiSlider (" + K + "): 'padding' option must be a positive number.");
			if (t.padding >= 50) throw new Error("noUiSlider (" + K + "): 'padding' option must be less than half the range.")
		}
	}

	function W(t, e) {
		switch (e) {
			case"ltr":
				t.dir = 0;
				break;
			case"rtl":
				t.dir = 1;
				break;
			default:
				throw new Error("noUiSlider (" + K + "): 'direction' option was not recognized.")
		}
	}

	function z(t, e) {
		if ("string" != typeof e) throw new Error("noUiSlider (" + K + "): 'behaviour' must be a string containing options.");
		var n = e.indexOf("tap") >= 0, i = e.indexOf("drag") >= 0, o = e.indexOf("fixed") >= 0,
			s = e.indexOf("snap") >= 0, r = e.indexOf("hover") >= 0;
		if (o) {
			if (2 !== t.handles) throw new Error("noUiSlider (" + K + "): 'fixed' behaviour must be used with 2 handles");
			R(t, t.start[1] - t.start[0])
		}
		t.events = {tap: n || s, drag: i, fixed: o, snap: s, hover: r}
	}

	function q(t, e) {
		if (!1 !== e) if (!0 === e) {
			t.tooltips = [];
			for (var n = 0; n < t.handles; n++) t.tooltips.push(!0)
		} else {
			if (t.tooltips = c(e), t.tooltips.length !== t.handles) throw new Error("noUiSlider (" + K + "): must pass a formatter for all handles.");
			t.tooltips.forEach(function (t) {
				if ("boolean" != typeof t && ("object" != typeof t || "function" != typeof t.to)) throw new Error("noUiSlider (" + K + "): 'tooltips' must be passed a formatter or 'false'.")
			})
		}
	}

	function B(t, e) {
		t.ariaFormat = e, I(e)
	}

	function U(t, e) {
		t.format = e, I(e)
	}

	function V(t, e) {
		if (void 0 !== e && "string" != typeof e && !1 !== e) throw new Error("noUiSlider (" + K + "): 'cssPrefix' must be a string or `false`.");
		t.cssPrefix = e
	}

	function X(t, e) {
		if (void 0 !== e && "object" != typeof e) throw new Error("noUiSlider (" + K + "): 'cssClasses' must be an object.");
		if ("string" == typeof t.cssPrefix) {
			t.cssClasses = {};
			for (var n in e) e.hasOwnProperty(n) && (t.cssClasses[n] = t.cssPrefix + e[n])
		} else t.cssClasses = e
	}

	function Y(t, e) {
		if (!0 !== e && !1 !== e) throw new Error("noUiSlider (" + K + "): 'useRequestAnimationFrame' option should be true (default) or false.");
		t.useRequestAnimationFrame = e
	}

	function G(t) {
		var e = {margin: 0, limit: 0, padding: 0, animate: !0, animationDuration: 300, ariaFormat: Z, format: Z}, n = {
			step: {r: !1, t: N},
			start: {r: !0, t: O},
			connect: {r: !0, t: M},
			direction: {r: !0, t: W},
			snap: {r: !1, t: $},
			animate: {r: !1, t: P},
			animationDuration: {r: !1, t: L},
			range: {r: !0, t: D},
			orientation: {r: !1, t: j},
			margin: {r: !1, t: R},
			limit: {r: !1, t: H},
			padding: {r: !1, t: F},
			behaviour: {r: !0, t: z},
			ariaFormat: {r: !1, t: B},
			format: {r: !1, t: U},
			tooltips: {r: !1, t: q},
			cssPrefix: {r: !1, t: V},
			cssClasses: {r: !1, t: X},
			useRequestAnimationFrame: {r: !1, t: Y}
		}, i = {
			connect: !1,
			direction: "ltr",
			behaviour: "tap",
			orientation: "horizontal",
			cssPrefix: "noUi-",
			cssClasses: {
				target: "target",
				base: "base",
				origin: "origin",
				handle: "handle",
				handleLower: "handle-lower",
				handleUpper: "handle-upper",
				horizontal: "horizontal",
				vertical: "vertical",
				background: "background",
				connect: "connect",
				ltr: "ltr",
				rtl: "rtl",
				draggable: "draggable",
				drag: "state-drag",
				tap: "state-tap",
				active: "active",
				tooltip: "tooltip",
				pips: "pips",
				pipsHorizontal: "pips-horizontal",
				pipsVertical: "pips-vertical",
				marker: "marker",
				markerHorizontal: "marker-horizontal",
				markerVertical: "marker-vertical",
				markerNormal: "marker-normal",
				markerLarge: "marker-large",
				markerSub: "marker-sub",
				value: "value",
				valueHorizontal: "value-horizontal",
				valueVertical: "value-vertical",
				valueNormal: "value-normal",
				valueLarge: "value-large",
				valueSub: "value-sub"
			},
			useRequestAnimationFrame: !0
		};
		t.format && !t.ariaFormat && (t.ariaFormat = t.format), Object.keys(n).forEach(function (o) {
			if (void 0 === t[o] && void 0 === i[o]) {
				if (n[o].r) throw new Error("noUiSlider (" + K + "): '" + o + "' is required.");
				return !0
			}
			n[o].t(e, void 0 === t[o] ? i[o] : t[o])
		}), e.pips = t.pips;
		var o = [["left", "top"], ["right", "bottom"]];
		return e.style = o[e.dir][e.ort], e.styleOposite = o[e.dir ? 0 : 1][e.ort], e
	}

	function Q(t, o, r) {
		function u(t, e) {
			var n = dt.createElement("div");
			return e && h(n, e), t.appendChild(n), n
		}

		function y(t, e) {
			var n = u(t, o.cssClasses.origin), i = u(n, o.cssClasses.handle);
			return i.setAttribute("data-handle", e), i.setAttribute("tabindex", "0"), i.setAttribute("role", "slider"), i.setAttribute("aria-orientation", o.ort ? "vertical" : "horizontal"), 0 === e ? h(i, o.cssClasses.handleLower) : e === o.handles - 1 && h(i, o.cssClasses.handleUpper), n
		}

		function b(t, e) {
			return !!e && u(t, o.cssClasses.connect)
		}

		function w(t, e) {
			return !!o.tooltips[e] && u(t.firstChild, o.cssClasses.tooltip)
		}

		function x(t, e, n) {
			if ("range" === t || "steps" === t) return lt.xVal;
			if ("count" === t) {
				if (!e) throw new Error("noUiSlider (" + K + "): 'values' required for mode 'count'.");
				var i, o = 100 / (e - 1), s = 0;
				for (e = []; (i = s++ * o) <= 100;) e.push(i);
				t = "positions"
			}
			return "positions" === t ? e.map(function (t) {
				return lt.fromStepping(n ? lt.getStep(t) : t)
			}) : "values" === t ? n ? e.map(function (t) {
				return lt.fromStepping(lt.getStep(lt.toStepping(t)))
			}) : e : void 0
		}

		function _(t, e, n) {
			function o(t, e) {
				return (t + e).toFixed(7) / 1
			}

			var s = {}, r = lt.xVal[0], a = lt.xVal[lt.xVal.length - 1], l = !1, c = !1, u = 0;
			return (n = i(n.slice().sort(function (t, e) {
				return t - e
			})))[0] !== r && (n.unshift(r), l = !0), n[n.length - 1] !== a && (n.push(a), c = !0), n.forEach(function (i, r) {
				var a, h, d, p, f, m, g, v, y, b, w = i, x = n[r + 1];
				if ("steps" === e && (a = lt.xNumSteps[r]), a || (a = x - w), !1 !== w && void 0 !== x) for (a = Math.max(a, 1e-7), h = w; x >= h; h = o(h, a)) {
					for (v = (f = (p = lt.toStepping(h)) - u) / t, b = f / (y = Math.round(v)), d = 1; y >= d; d += 1) m = u + d * b, s[m.toFixed(5)] = ["x", 0];
					g = n.indexOf(h) > -1 ? 1 : "steps" === e ? 2 : 0, !r && l && (g = 0), h === x && c || (s[p.toFixed(5)] = [h, g]), u = p
				}
			}), s
		}

		function C(t, e, n) {
			function i(t, e) {
				var n = e === o.cssClasses.value, i = n ? c : d, s = n ? a : l;
				return e + " " + i[o.ort] + " " + s[t]
			}

			function s(t, s) {
				s[1] = s[1] && e ? e(s[0], s[1]) : s[1];
				var a = u(r, !1);
				a.className = i(s[1], o.cssClasses.marker), a.style[o.style] = t + "%", s[1] && (a = u(r, !1), a.className = i(s[1], o.cssClasses.value), a.style[o.style] = t + "%", a.innerText = n.to(s[0]))
			}

			var r = dt.createElement("div"),
				a = [o.cssClasses.valueNormal, o.cssClasses.valueLarge, o.cssClasses.valueSub],
				l = [o.cssClasses.markerNormal, o.cssClasses.markerLarge, o.cssClasses.markerSub],
				c = [o.cssClasses.valueHorizontal, o.cssClasses.valueVertical],
				d = [o.cssClasses.markerHorizontal, o.cssClasses.markerVertical];
			return h(r, o.cssClasses.pips), h(r, 0 === o.ort ? o.cssClasses.pipsHorizontal : o.cssClasses.pipsVertical), Object.keys(t).forEach(function (e) {
				s(e, t[e])
			}), r
		}

		function T() {
			et && (e(et), et = null)
		}

		function E(t) {
			T();
			var e = t.mode, n = t.density || 1, i = t.filter || !1, o = _(n, e, x(e, t.values || !1, t.stepped || !1)),
				s = t.format || {to: Math.round};
			return et = ot.appendChild(C(o, i, s))
		}

		function S() {
			var t = Q.getBoundingClientRect(), e = "offset" + ["Width", "Height"][o.ort];
			return 0 === o.ort ? t.width || Q[e] : t.height || Q[e]
		}

		function k(t, e, n, i) {
			var s = function (e) {
				return !ot.hasAttribute("disabled") && (!p(ot, o.cssClasses.tap) && (!!(e = A(e, i.pageOffset)) && (!(t === nt.start && void 0 !== e.buttons && e.buttons > 1) && ((!i.hover || !e.buttons) && (it || e.preventDefault(), e.calcPoint = e.points[o.ort], void n(e, i))))))
			}, r = [];
			return t.split(" ").forEach(function (t) {
				e.addEventListener(t, s, !!it && {passive: !0}), r.push([t, s])
			}), r
		}

		function A(t, e) {
			var n, i, o = 0 === t.type.indexOf("touch"), s = 0 === t.type.indexOf("mouse"),
				r = 0 === t.type.indexOf("pointer");
			if (0 === t.type.indexOf("MSPointer") && (r = !0), o) {
				if (t.touches.length > 1) return !1;
				n = t.changedTouches[0].pageX, i = t.changedTouches[0].pageY
			}
			return e = e || f(dt), (s || r) && (n = t.clientX + e.x, i = t.clientY + e.y), t.pageOffset = e, t.points = [n, i], t.cursor = s || r, t
		}

		function I(t) {
			var e = 100 * (t - s(Q, o.ort)) / S();
			return o.dir ? 100 - e : e
		}

		function N(t) {
			var e = 100, n = !1;
			return Z.forEach(function (i, o) {
				if (!i.hasAttribute("disabled")) {
					var s = Math.abs(st[o] - t);
					e > s && (n = o, e = s)
				}
			}), n
		}

		function D(t, e, n, i) {
			var o = n.slice(), s = [!t, t], r = [t, !t];
			i = i.slice(), t && i.reverse(), i.length > 1 ? i.forEach(function (t, n) {
				var i = H(o, t, o[t] + e, s[n], r[n], !1);
				!1 === i ? e = 0 : (e = i - o[t], o[t] = i)
			}) : s = r = [!0];
			var a = !1;
			i.forEach(function (t, i) {
				a = q(t, n[t] + e, s[i], r[i]) || a
			}), a && i.forEach(function (t) {
				O("update", t), O("slide", t)
			})
		}

		function O(t, e, n) {
			Object.keys(ut).forEach(function (i) {
				var s = i.split(".")[0];
				t === s && ut[i].forEach(function (t) {
					t.call(tt, ct.map(o.format.to), e, ct.slice(), n || !1, st.slice())
				})
			})
		}

		function $(t, e) {
			"mouseout" === t.type && "HTML" === t.target.nodeName && null === t.relatedTarget && L(t, e)
		}

		function P(t, e) {
			if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === t.buttons && 0 !== e.buttonsProperty) return L(t, e);
			var n = (o.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint);
			D(n > 0, 100 * n / e.baseSize, e.locations, e.handleNumbers)
		}

		function L(t, e) {
			at && (d(at, o.cssClasses.active), at = !1), t.cursor && (ft.style.cursor = "", ft.removeEventListener("selectstart", n)), ht.forEach(function (t) {
				pt.removeEventListener(t[0], t[1])
			}), d(ot, o.cssClasses.drag), z(), e.handleNumbers.forEach(function (t) {
				O("change", t), O("set", t), O("end", t)
			})
		}

		function M(t, e) {
			if (1 === e.handleNumbers.length) {
				var i = Z[e.handleNumbers[0]];
				if (i.hasAttribute("disabled")) return !1;
				h(at = i.children[0], o.cssClasses.active)
			}
			t.stopPropagation();
			var s = k(nt.move, pt, P, {
					startCalcPoint: t.calcPoint,
					baseSize: S(),
					pageOffset: t.pageOffset,
					handleNumbers: e.handleNumbers,
					buttonsProperty: t.buttons,
					locations: st.slice()
				}), r = k(nt.end, pt, L, {handleNumbers: e.handleNumbers}),
				a = k("mouseout", pt, $, {handleNumbers: e.handleNumbers});
			ht = s.concat(r, a), t.cursor && (ft.style.cursor = getComputedStyle(t.target).cursor, Z.length > 1 && h(ot, o.cssClasses.drag), ft.addEventListener("selectstart", n, !1)), e.handleNumbers.forEach(function (t) {
				O("start", t)
			})
		}

		function j(t) {
			t.stopPropagation();
			var e = I(t.calcPoint), n = N(e);
			return !1 !== n && (o.events.snap || a(ot, o.cssClasses.tap, o.animationDuration), q(n, e, !0, !0), z(), O("slide", n, !0), O("update", n, !0), O("change", n, !0), O("set", n, !0), void(o.events.snap && M(t, {handleNumbers: [n]})))
		}

		function R(t) {
			var e = I(t.calcPoint), n = lt.getStep(e), i = lt.fromStepping(n);
			Object.keys(ut).forEach(function (t) {
				"hover" === t.split(".")[0] && ut[t].forEach(function (t) {
					t.call(tt, i)
				})
			})
		}

		function H(t, e, n, i, s, r) {
			return Z.length > 1 && (i && e > 0 && (n = Math.max(n, t[e - 1] + o.margin)), s && e < Z.length - 1 && (n = Math.min(n, t[e + 1] - o.margin))), Z.length > 1 && o.limit && (i && e > 0 && (n = Math.min(n, t[e - 1] + o.limit)), s && e < Z.length - 1 && (n = Math.max(n, t[e + 1] - o.limit))), o.padding && (0 === e && (n = Math.max(n, o.padding)), e === Z.length - 1 && (n = Math.min(n, 100 - o.padding))), n = lt.getStep(n), !((n = l(n)) === t[e] && !r) && n
		}

		function F(t) {
			return t + "%"
		}

		function W(t, e) {
			st[t] = e, ct[t] = lt.fromStepping(e);
			var n = function () {
				Z[t].style[o.style] = F(e), B(t), B(t + 1)
			};
			window.requestAnimationFrame && o.useRequestAnimationFrame ? window.requestAnimationFrame(n) : n()
		}

		function z() {
			rt.forEach(function (t) {
				var e = st[t] > 50 ? -1 : 1, n = 3 + (Z.length + e * t);
				Z[t].childNodes[0].style.zIndex = n
			})
		}

		function q(t, e, n, i) {
			return !1 !== (e = H(st, t, e, n, i, !1)) && (W(t, e), !0)
		}

		function B(t) {
			if (J[t]) {
				var e = 0, n = 100;
				0 !== t && (e = st[t - 1]), t !== J.length - 1 && (n = st[t]), J[t].style[o.style] = F(e), J[t].style[o.styleOposite] = F(100 - n)
			}
		}

		function U(t, e) {
			null !== t && !1 !== t && ("number" == typeof t && (t = String(t)), !1 === (t = o.format.from(t)) || isNaN(t) || q(e, lt.toStepping(t), !1, !1))
		}

		function V(t, e) {
			var n = c(t), i = void 0 === st[0];
			e = void 0 === e || !!e, n.forEach(U), o.animate && !i && a(ot, o.cssClasses.tap, o.animationDuration), rt.forEach(function (t) {
				q(t, st[t], !0, !1)
			}), z(), rt.forEach(function (t) {
				O("update", t), null !== n[t] && e && O("set", t)
			})
		}

		function X() {
			var t = ct.map(o.format.to);
			return 1 === t.length ? t[0] : t
		}

		function Y(t, e) {
			ut[t] = ut[t] || [], ut[t].push(e), "update" === t.split(".")[0] && Z.forEach(function (t, e) {
				O("update", e)
			})
		}

		var Q, Z, J, tt, et, nt = m(), it = v() && g(), ot = t, st = [], rt = [], at = !1, lt = o.spectrum, ct = [],
			ut = {}, ht = null, dt = t.ownerDocument, pt = dt.documentElement, ft = dt.body;
		if (ot.noUiSlider) throw new Error("noUiSlider (" + K + "): Slider was already initialized.");
		return function (t) {
			h(t, o.cssClasses.target), 0 === o.dir ? h(t, o.cssClasses.ltr) : h(t, o.cssClasses.rtl), 0 === o.ort ? h(t, o.cssClasses.horizontal) : h(t, o.cssClasses.vertical), Q = u(t, o.cssClasses.base)
		}(ot), function (t, e) {
			Z = [], (J = []).push(b(e, t[0]));
			for (var n = 0; n < o.handles; n++) Z.push(y(e, n)), rt[n] = n, J.push(b(e, t[n + 1]))
		}(o.connect, Q), tt = {
			destroy: function () {
				for (var t in o.cssClasses) o.cssClasses.hasOwnProperty(t) && d(ot, o.cssClasses[t]);
				for (; ot.firstChild;) ot.removeChild(ot.firstChild);
				delete ot.noUiSlider
			}, steps: function () {
				return st.map(function (t, e) {
					var n = lt.getNearbySteps(t), i = ct[e], o = n.thisStep.step, s = null;
					!1 !== o && i + o > n.stepAfter.startValue && (o = n.stepAfter.startValue - i), s = i > n.thisStep.startValue ? n.thisStep.step : !1 !== n.stepBefore.step && i - n.stepBefore.highestStep, 100 === t ? o = null : 0 === t && (s = null);
					var r = lt.countStepDecimals();
					return null !== o && !1 !== o && (o = Number(o.toFixed(r))), null !== s && !1 !== s && (s = Number(s.toFixed(r))), [s, o]
				})
			}, on: Y, off: function (t) {
				var e = t && t.split(".")[0], n = e && t.substring(e.length);
				Object.keys(ut).forEach(function (t) {
					var i = t.split(".")[0], o = t.substring(i.length);
					e && e !== i || n && n !== o || delete ut[t]
				})
			}, get: X, set: V, reset: function (t) {
				V(o.start, t)
			}, __moveHandles: function (t, e, n) {
				D(t, e, st, n)
			}, options: r, updateOptions: function (t, e) {
				var n = X(), i = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format"];
				i.forEach(function (e) {
					void 0 !== t[e] && (r[e] = t[e])
				});
				var s = G(r);
				i.forEach(function (e) {
					void 0 !== t[e] && (o[e] = s[e])
				}), lt = s.spectrum, o.margin = s.margin, o.limit = s.limit, o.padding = s.padding, o.pips && E(o.pips), st = [], V(t.start || n, e)
			}, target: ot, removePips: T, pips: E
		}, function (t) {
			t.fixed || Z.forEach(function (t, e) {
				k(nt.start, t.children[0], M, {handleNumbers: [e]})
			}), t.tap && k(nt.start, Q, j, {}), t.hover && k(nt.move, Q, R, {hover: !0}), t.drag && J.forEach(function (e, n) {
				if (!1 !== e && 0 !== n && n !== J.length - 1) {
					var i = Z[n - 1], s = Z[n], r = [e];
					h(e, o.cssClasses.draggable), t.fixed && (r.push(i.children[0]), r.push(s.children[0])), r.forEach(function (t) {
						k(nt.start, t, M, {handles: [i, s], handleNumbers: [n - 1, n]})
					})
				}
			})
		}(o.events), V(o.start), o.pips && E(o.pips), o.tooltips && function () {
			var t = Z.map(w);
			Y("update", function (e, n, i) {
				if (t[n]) {
					var s = e[n];
					!0 !== o.tooltips[n] && (s = o.tooltips[n].to(i[n])), t[n].innerHTML = s
				}
			})
		}(), Y("update", function (t, e, n, i, s) {
			rt.forEach(function (t) {
				var e = Z[t], i = H(st, t, 0, !0, !0, !0), r = H(st, t, 100, !0, !0, !0), a = s[t],
					l = o.ariaFormat.to(n[t]);
				e.children[0].setAttribute("aria-valuemin", i.toFixed(1)), e.children[0].setAttribute("aria-valuemax", r.toFixed(1)), e.children[0].setAttribute("aria-valuenow", a.toFixed(1)), e.children[0].setAttribute("aria-valuetext", l)
			})
		}), tt
	}

	var K = "10.0.0";
	A.prototype.getMargin = function (t) {
		var e = this.xNumSteps[0];
		if (e && t / e % 1 != 0) throw new Error("noUiSlider (" + K + "): 'limit', 'margin' and 'padding' must be divisible by step.");
		return 2 === this.xPct.length && b(this.xVal, t)
	}, A.prototype.toStepping = function (t) {
		return t = C(this.xVal, this.xPct, t)
	}, A.prototype.fromStepping = function (t) {
		return T(this.xVal, this.xPct, t)
	}, A.prototype.getStep = function (t) {
		return t = E(this.xPct, this.xSteps, this.snap, t)
	}, A.prototype.getNearbySteps = function (t) {
		var e = _(t, this.xPct);
		return {
			stepBefore: {
				startValue: this.xVal[e - 2],
				step: this.xNumSteps[e - 2],
				highestStep: this.xHighestCompleteStep[e - 2]
			},
			thisStep: {
				startValue: this.xVal[e - 1],
				step: this.xNumSteps[e - 1],
				highestStep: this.xHighestCompleteStep[e - 1]
			},
			stepAfter: {
				startValue: this.xVal[e - 0],
				step: this.xNumSteps[e - 0],
				highestStep: this.xHighestCompleteStep[e - 0]
			}
		}
	}, A.prototype.countStepDecimals = function () {
		var t = this.xNumSteps.map(u);
		return Math.max.apply(null, t)
	}, A.prototype.convert = function (t) {
		return this.getStep(this.toStepping(t))
	};
	var Z = {
		to: function (t) {
			return void 0 !== t && t.toFixed(2)
		}, from: Number
	};
	return {
		version: K, create: function (t, e) {
			if (!t || !t.nodeName) throw new Error("noUiSlider (" + K + "): create requires a single element, got: " + t);
			var n = Q(t, G(e, t), e);
			return t.noUiSlider = n, n
		}
	}
}), function (t, e, n, i) {
	function o(e, n) {
		var s = this;
		"object" == typeof n && (delete n.refresh, delete n.render, t.extend(this, n)), this.$element = t(e), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src"));
		var r = (this.position + "").toLowerCase().match(/\S+/g) || [];
		if (r.length < 1 && r.push("center"), 1 == r.length && r.push(r[0]), "top" != r[0] && "bottom" != r[0] && "left" != r[1] && "right" != r[1] || (r = [r[1], r[0]]), this.positionX != i && (r[0] = this.positionX.toLowerCase()), this.positionY != i && (r[1] = this.positionY.toLowerCase()), s.positionX = r[0], s.positionY = r[1], "left" != this.positionX && "right" != this.positionX && (isNaN(parseInt(this.positionX)) ? this.positionX = "center" : this.positionX = parseInt(this.positionX)), "top" != this.positionY && "bottom" != this.positionY && (isNaN(parseInt(this.positionY)) ? this.positionY = "center" : this.positionY = parseInt(this.positionY)), this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) return this.imageSrc && this.iosFix && !this.$element.is("img") && this.$element.css({
			backgroundImage: "url(" + this.imageSrc + ")",
			backgroundSize: "cover",
			backgroundPosition: this.position
		}), this;
		if (navigator.userAgent.match(/(Android)/)) return this.imageSrc && this.androidFix && !this.$element.is("img") && this.$element.css({
			backgroundImage: "url(" + this.imageSrc + ")",
			backgroundSize: "cover",
			backgroundPosition: this.position
		}), this;
		this.$mirror = t("<div />").prependTo(this.mirrorContainer);
		var a = this.$element.find(">.parallax-slider"), l = !1;
		0 == a.length ? this.$slider = t("<img />").prependTo(this.$mirror) : (this.$slider = a.prependTo(this.$mirror), l = !0), this.$mirror.addClass("parallax-mirror").css({
			visibility: "hidden",
			zIndex: this.zIndex,
			position: "fixed",
			top: 0,
			left: 0,
			overflow: "hidden"
		}), this.$slider.addClass("parallax-slider").one("load", function () {
			s.naturalHeight && s.naturalWidth || (s.naturalHeight = this.naturalHeight || this.height || 1, s.naturalWidth = this.naturalWidth || this.width || 1), s.aspectRatio = s.naturalWidth / s.naturalHeight, o.isSetup || o.setup(), o.sliders.push(s), o.isFresh = !1, o.requestRender()
		}), l || (this.$slider[0].src = this.imageSrc), (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || a.length > 0) && this.$slider.trigger("load")
	}

	!function () {
		for (var t = 0, n = ["ms", "moz", "webkit", "o"], i = 0; i < n.length && !e.requestAnimationFrame; ++i) e.requestAnimationFrame = e[n[i] + "RequestAnimationFrame"], e.cancelAnimationFrame = e[n[i] + "CancelAnimationFrame"] || e[n[i] + "CancelRequestAnimationFrame"];
		e.requestAnimationFrame || (e.requestAnimationFrame = function (n) {
			var i = (new Date).getTime(), o = Math.max(0, 16 - (i - t)), s = e.setTimeout(function () {
				n(i + o)
			}, o);
			return t = i + o, s
		}), e.cancelAnimationFrame || (e.cancelAnimationFrame = function (t) {
			clearTimeout(t)
		})
	}(), t.extend(o.prototype, {
		speed: .2,
		bleed: 0,
		zIndex: -100,
		iosFix: !0,
		androidFix: !0,
		position: "center",
		overScrollFix: !1,
		mirrorContainer: "body",
		refresh: function () {
			this.boxWidth = this.$element.outerWidth(), this.boxHeight = this.$element.outerHeight() + 2 * this.bleed, this.boxOffsetTop = this.$element.offset().top - this.bleed, this.boxOffsetLeft = this.$element.offset().left, this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
			var t = o.winHeight, e = o.docHeight, n = Math.min(this.boxOffsetTop, e - t),
				i = Math.max(this.boxOffsetTop + this.boxHeight - t, 0),
				s = this.boxHeight + (n - i) * (1 - this.speed) | 0, r = (this.boxOffsetTop - n) * (1 - this.speed) | 0;
			if (s * this.aspectRatio >= this.boxWidth) {
				this.imageWidth = s * this.aspectRatio | 0, this.imageHeight = s, this.offsetBaseTop = r;
				a = this.imageWidth - this.boxWidth;
				"left" == this.positionX ? this.offsetLeft = 0 : "right" == this.positionX ? this.offsetLeft = -a : isNaN(this.positionX) ? this.offsetLeft = -a / 2 | 0 : this.offsetLeft = Math.max(this.positionX, -a)
			} else {
				this.imageWidth = this.boxWidth, this.imageHeight = this.boxWidth / this.aspectRatio | 0, this.offsetLeft = 0;
				var a = this.imageHeight - s;
				"top" == this.positionY ? this.offsetBaseTop = r : "bottom" == this.positionY ? this.offsetBaseTop = r - a : isNaN(this.positionY) ? this.offsetBaseTop = r - a / 2 | 0 : this.offsetBaseTop = r + Math.max(this.positionY, -a)
			}
		},
		render: function () {
			var t = o.scrollTop, e = o.scrollLeft, n = this.overScrollFix ? o.overScroll : 0, i = t + o.winHeight;
			this.boxOffsetBottom > t && this.boxOffsetTop <= i ? (this.visibility = "visible", this.mirrorTop = this.boxOffsetTop - t, this.mirrorLeft = this.boxOffsetLeft - e, this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)) : this.visibility = "hidden", this.$mirror.css({
				transform: "translate3d(0px, 0px, 0px)",
				visibility: this.visibility,
				top: this.mirrorTop - n,
				left: this.mirrorLeft,
				height: this.boxHeight,
				width: this.boxWidth
			}), this.$slider.css({
				transform: "translate3d(0px, 0px, 0px)",
				position: "absolute",
				top: this.offsetTop,
				left: this.offsetLeft,
				height: this.imageHeight,
				width: this.imageWidth,
				maxWidth: "none"
			})
		}
	}), t.extend(o, {
		scrollTop: 0,
		scrollLeft: 0,
		winHeight: 0,
		winWidth: 0,
		docHeight: 1 << 30,
		docWidth: 1 << 30,
		sliders: [],
		isReady: !1,
		isFresh: !1,
		isBusy: !1,
		setup: function () {
			if (!this.isReady) {
				var i = t(n), s = t(e), r = function () {
					o.winHeight = s.height(), o.winWidth = s.width(), o.docHeight = i.height(), o.docWidth = i.width()
				}, a = function () {
					var t = s.scrollTop(), e = o.docHeight - o.winHeight, n = o.docWidth - o.winWidth;
					o.scrollTop = Math.max(0, Math.min(e, t)), o.scrollLeft = Math.max(0, Math.min(n, s.scrollLeft())), o.overScroll = Math.max(t - e, Math.min(t, 0))
				};
				s.on("resize.px.parallax load.px.parallax", function () {
					r(), o.isFresh = !1, o.requestRender()
				}).on("scroll.px.parallax load.px.parallax", function () {
					a(), o.requestRender()
				}), r(), a(), this.isReady = !0
			}
		},
		configure: function (e) {
			"object" == typeof e && (delete e.refresh, delete e.render, t.extend(this.prototype, e))
		},
		refresh: function () {
			t.each(this.sliders, function () {
				this.refresh()
			}), this.isFresh = !0
		},
		render: function () {
			this.isFresh || this.refresh(), t.each(this.sliders, function () {
				this.render()
			})
		},
		requestRender: function () {
			var t = this;
			this.isBusy || (this.isBusy = !0, e.requestAnimationFrame(function () {
				t.render(), t.isBusy = !1
			}))
		},
		destroy: function (n) {
			var i, s = t(n).data("px.parallax");
			for (s.$mirror.remove(), i = 0; i < this.sliders.length; i += 1) this.sliders[i] == s && this.sliders.splice(i, 1);
			t(n).data("px.parallax", !1), 0 === this.sliders.length && (t(e).off("scroll.px.parallax resize.px.parallax load.px.parallax"), this.isReady = !1, o.isSetup = !1)
		}
	});
	var s = t.fn.parallax;
	t.fn.parallax = function (i) {
		return this.each(function () {
			var s = t(this), r = "object" == typeof i && i;
			this == e || this == n || s.is("body") ? o.configure(r) : s.data("px.parallax") ? "object" == typeof i && t.extend(s.data("px.parallax"), r) : (r = t.extend({}, s.data(), r), s.data("px.parallax", new o(this, r))), "string" == typeof i && ("destroy" == i ? o.destroy(this) : o[i]())
		})
	}, t.fn.parallax.Constructor = o, t.fn.parallax.noConflict = function () {
		return t.fn.parallax = s, this
	}, t(n).on("ready.px.parallax.data-api", function () {
		t('[data-parallax="scroll"]').parallax()
	})
}(jQuery, window, document), function (t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (t) {
	var e = Array.prototype.slice, n = Array.prototype.splice, i = {
		topSpacing: 0,
		bottomSpacing: 0,
		className: "is-sticky",
		wrapperClassName: "sticky-wrapper",
		center: !1,
		getWidthFrom: "",
		widthFromWrapper: !0,
		responsiveWidth: !1,
		zIndex: "auto"
	}, o = t(window), s = t(document), r = [], a = o.height(), l = function () {
		for (var e = o.scrollTop(), n = s.height(), i = n - a, l = e > i ? i - e : 0, c = 0, u = r.length; c < u; c++) {
			var h = r[c], d = h.stickyWrapper.offset().top - h.topSpacing - l;
			if (h.stickyWrapper.css("height", h.stickyElement.outerHeight()), e <= d) null !== h.currentTop && (h.stickyElement.css({
				width: "",
				position: "",
				top: "",
				"z-index": ""
			}), h.stickyElement.parent().removeClass(h.className), h.stickyElement.trigger("sticky-end", [h]), h.currentTop = null); else {
				var p = n - h.stickyElement.outerHeight() - h.topSpacing - h.bottomSpacing - e - l;
				if (p < 0 ? p += h.topSpacing : p = h.topSpacing, h.currentTop !== p) {
					var f;
					h.getWidthFrom ? f = t(h.getWidthFrom).width() || null : h.widthFromWrapper && (f = h.stickyWrapper.width()), null == f && (f = h.stickyElement.width()), h.stickyElement.css("width", f).css("position", "fixed").css("top", p).css("z-index", h.zIndex), h.stickyElement.parent().addClass(h.className), null === h.currentTop ? h.stickyElement.trigger("sticky-start", [h]) : h.stickyElement.trigger("sticky-update", [h]), h.currentTop === h.topSpacing && h.currentTop > p || null === h.currentTop && p < h.topSpacing ? h.stickyElement.trigger("sticky-bottom-reached", [h]) : null !== h.currentTop && p === h.topSpacing && h.currentTop < p && h.stickyElement.trigger("sticky-bottom-unreached", [h]), h.currentTop = p
				}
				var m = h.stickyWrapper.parent();
				h.stickyElement.offset().top + h.stickyElement.outerHeight() >= m.offset().top + m.outerHeight() && h.stickyElement.offset().top <= h.topSpacing ? h.stickyElement.css("position", "absolute").css("top", "").css("bottom", 0).css("z-index", "") : h.stickyElement.css("position", "fixed").css("top", p).css("bottom", "").css("z-index", h.zIndex)
			}
		}
	}, c = function () {
		a = o.height();
		for (var e = 0, n = r.length; e < n; e++) {
			var i = r[e], s = null;
			i.getWidthFrom ? i.responsiveWidth && (s = t(i.getWidthFrom).width()) : i.widthFromWrapper && (s = i.stickyWrapper.width()), null != s && i.stickyElement.css("width", s)
		}
	}, u = {
		init: function (e) {
			return this.each(function () {
				var n = t.extend({}, i, e), o = t(this), s = o.attr("id"),
					a = s ? s + "-" + i.wrapperClassName : i.wrapperClassName,
					l = t("<div></div>").attr("id", a).addClass(n.wrapperClassName);
				o.wrapAll(function () {
					if (0 == t(this).parent("#" + a).length) return l
				});
				var c = o.parent();
				n.center && c.css({
					width: o.outerWidth(),
					marginLeft: "auto",
					marginRight: "auto"
				}), "right" === o.css("float") && o.css({float: "none"}).parent().css({float: "right"}), n.stickyElement = o, n.stickyWrapper = c, n.currentTop = null, r.push(n), u.setWrapperHeight(this), u.setupChangeListeners(this)
			})
		}, setWrapperHeight: function (e) {
			var n = t(e), i = n.parent();
			i && i.css("height", n.outerHeight())
		}, setupChangeListeners: function (t) {
			window.MutationObserver ? new window.MutationObserver(function (e) {
				(e[0].addedNodes.length || e[0].removedNodes.length) && u.setWrapperHeight(t)
			}).observe(t, {
				subtree: !0,
				childList: !0
			}) : window.addEventListener ? (t.addEventListener("DOMNodeInserted", function () {
				u.setWrapperHeight(t)
			}, !1), t.addEventListener("DOMNodeRemoved", function () {
				u.setWrapperHeight(t)
			}, !1)) : window.attachEvent && (t.attachEvent("onDOMNodeInserted", function () {
				u.setWrapperHeight(t)
			}), t.attachEvent("onDOMNodeRemoved", function () {
				u.setWrapperHeight(t)
			}))
		}, update: l, unstick: function (e) {
			return this.each(function () {
				for (var e = this, i = t(e), o = -1, s = r.length; s-- > 0;) r[s].stickyElement.get(0) === e && (n.call(r, s, 1), o = s);
				-1 !== o && (i.unwrap(), i.css({width: "", position: "", top: "", float: "", "z-index": ""}))
			})
		}
	};
	window.addEventListener ? (window.addEventListener("scroll", l, !1), window.addEventListener("resize", c, !1)) : window.attachEvent && (window.attachEvent("onscroll", l), window.attachEvent("onresize", c)), t.fn.sticky = function (n) {
		return u[n] ? u[n].apply(this, e.call(arguments, 1)) : "object" != typeof n && n ? void t.error("Method " + n + " does not exist on jQuery.sticky") : u.init.apply(this, arguments)
	}, t.fn.unstick = function (n) {
		return u[n] ? u[n].apply(this, e.call(arguments, 1)) : "object" != typeof n && n ? void t.error("Method " + n + " does not exist on jQuery.sticky") : u.unstick.apply(this, arguments)
	}, t(function () {
		setTimeout(l, 0)
	})
});
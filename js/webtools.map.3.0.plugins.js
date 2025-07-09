/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).leaflet = {})
}(this, function(t) {
    "use strict";
    function l(t) {
        for (var e, i, n = 1, o = arguments.length; n < o; n++)
            for (e in i = arguments[n])
                t[e] = i[e];
        return t
    }
    var R = Object.create || function(t) {
        return N.prototype = t,
        new N
    }
    ;
    function N() {}
    function a(t, e) {
        var i, n = Array.prototype.slice;
        return t.bind ? t.bind.apply(t, n.call(arguments, 1)) : (i = n.call(arguments, 2),
        function() {
            return t.apply(e, i.length ? i.concat(n.call(arguments)) : arguments)
        }
        )
    }
    var D = 0;
    function h(t) {
        return "_leaflet_id"in t || (t._leaflet_id = ++D),
        t._leaflet_id
    }
    function j(t, e, i) {
        var n, o, s = function() {
            n = !1,
            o && (r.apply(i, o),
            o = !1)
        }, r = function() {
            n ? o = arguments : (t.apply(i, arguments),
            setTimeout(s, e),
            n = !0)
        };
        return r
    }
    function H(t, e, i) {
        var n = e[1]
          , e = e[0]
          , o = n - e;
        return t === n && i ? t : ((t - e) % o + o) % o + e
    }
    function u() {
        return !1
    }
    function i(t, e) {
        return !1 === e ? t : (e = Math.pow(10, void 0 === e ? 6 : e),
        Math.round(t * e) / e)
    }
    function W(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
    }
    function F(t) {
        return W(t).split(/\s+/)
    }
    function c(t, e) {
        for (var i in Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? R(t.options) : {}),
        e)
            t.options[i] = e[i];
        return t.options
    }
    function U(t, e, i) {
        var n, o = [];
        for (n in t)
            o.push(encodeURIComponent(i ? n.toUpperCase() : n) + "=" + encodeURIComponent(t[n]));
        return (e && -1 !== e.indexOf("?") ? "&" : "?") + o.join("&")
    }
    var V = /\{ *([\w_ -]+) *\}/g;
    function q(t, i) {
        return t.replace(V, function(t, e) {
            e = i[e];
            if (void 0 === e)
                throw new Error("No value provided for variable " + t);
            return e = "function" == typeof e ? e(i) : e
        })
    }
    var d = Array.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
    ;
    function G(t, e) {
        for (var i = 0; i < t.length; i++)
            if (t[i] === e)
                return i;
        return -1
    }
    var K = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    function Y(t) {
        return window["webkit" + t] || window["moz" + t] || window["ms" + t]
    }
    var X = 0;
    function J(t) {
        var e = +new Date
          , i = Math.max(0, 16 - (e - X));
        return X = e + i,
        window.setTimeout(t, i)
    }
    var $ = window.requestAnimationFrame || Y("RequestAnimationFrame") || J
      , Q = window.cancelAnimationFrame || Y("CancelAnimationFrame") || Y("CancelRequestAnimationFrame") || function(t) {
        window.clearTimeout(t)
    }
    ;
    function x(t, e, i) {
        if (!i || $ !== J)
            return $.call(window, a(t, e));
        t.call(e)
    }
    function r(t) {
        t && Q.call(window, t)
    }
    var tt = {
        __proto__: null,
        extend: l,
        create: R,
        bind: a,
        get lastId() {
            return D
        },
        stamp: h,
        throttle: j,
        wrapNum: H,
        falseFn: u,
        formatNum: i,
        trim: W,
        splitWords: F,
        setOptions: c,
        getParamString: U,
        template: q,
        isArray: d,
        indexOf: G,
        emptyImageUrl: K,
        requestFn: $,
        cancelFn: Q,
        requestAnimFrame: x,
        cancelAnimFrame: r
    };
    function et() {}
    et.extend = function(t) {
        function e() {
            c(this),
            this.initialize && this.initialize.apply(this, arguments),
            this.callInitHooks()
        }
        var i, n = e.__super__ = this.prototype, o = R(n);
        for (i in (o.constructor = e).prototype = o,
        this)
            Object.prototype.hasOwnProperty.call(this, i) && "prototype" !== i && "__super__" !== i && (e[i] = this[i]);
        if (t.statics && l(e, t.statics),
        t.includes) {
            var s = t.includes;
            if ("undefined" != typeof L && L && L.Mixin) {
                s = d(s) ? s : [s];
                for (var r = 0; r < s.length; r++)
                    s[r] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack)
            }
            l.apply(null, [o].concat(t.includes))
        }
        return l(o, t),
        delete o.statics,
        delete o.includes,
        o.options && (o.options = n.options ? R(n.options) : {},
        l(o.options, t.options)),
        o._initHooks = [],
        o.callInitHooks = function() {
            if (!this._initHooksCalled) {
                n.callInitHooks && n.callInitHooks.call(this),
                this._initHooksCalled = !0;
                for (var t = 0, e = o._initHooks.length; t < e; t++)
                    o._initHooks[t].call(this)
            }
        }
        ,
        e
    }
    ,
    et.include = function(t) {
        var e = this.prototype.options;
        return l(this.prototype, t),
        t.options && (this.prototype.options = e,
        this.mergeOptions(t.options)),
        this
    }
    ,
    et.mergeOptions = function(t) {
        return l(this.prototype.options, t),
        this
    }
    ,
    et.addInitHook = function(t) {
        var e = Array.prototype.slice.call(arguments, 1)
          , i = "function" == typeof t ? t : function() {
            this[t].apply(this, e)
        }
        ;
        return this.prototype._initHooks = this.prototype._initHooks || [],
        this.prototype._initHooks.push(i),
        this
    }
    ;
    var e = {
        on: function(t, e, i) {
            if ("object" == typeof t)
                for (var n in t)
                    this._on(n, t[n], e);
            else
                for (var o = 0, s = (t = F(t)).length; o < s; o++)
                    this._on(t[o], e, i);
            return this
        },
        off: function(t, e, i) {
            if (arguments.length)
                if ("object" == typeof t)
                    for (var n in t)
                        this._off(n, t[n], e);
                else {
                    t = F(t);
                    for (var o = 1 === arguments.length, s = 0, r = t.length; s < r; s++)
                        o ? this._off(t[s]) : this._off(t[s], e, i)
                }
            else
                delete this._events;
            return this
        },
        _on: function(t, e, i, n) {
            "function" != typeof e ? console.warn("wrong listener type: " + typeof e) : !1 === this._listens(t, e, i) && (e = {
                fn: e,
                ctx: i = i === this ? void 0 : i
            },
            n && (e.once = !0),
            this._events = this._events || {},
            this._events[t] = this._events[t] || [],
            this._events[t].push(e))
        },
        _off: function(t, e, i) {
            var n, o, s;
            if (this._events && (n = this._events[t]))
                if (1 === arguments.length) {
                    if (this._firingCount)
                        for (o = 0,
                        s = n.length; o < s; o++)
                            n[o].fn = u;
                    delete this._events[t]
                } else
                    "function" != typeof e ? console.warn("wrong listener type: " + typeof e) : !1 !== (e = this._listens(t, e, i)) && (i = n[e],
                    this._firingCount && (i.fn = u,
                    this._events[t] = n = n.slice()),
                    n.splice(e, 1))
        },
        fire: function(t, e, i) {
            if (this.listens(t, i)) {
                var n = l({}, e, {
                    type: t,
                    target: this,
                    sourceTarget: e && e.sourceTarget || this
                });
                if (this._events) {
                    var o = this._events[t];
                    if (o) {
                        this._firingCount = this._firingCount + 1 || 1;
                        for (var s = 0, r = o.length; s < r; s++) {
                            var a = o[s]
                              , h = a.fn;
                            a.once && this.off(t, h, a.ctx),
                            h.call(a.ctx || this, n)
                        }
                        this._firingCount--
                    }
                }
                i && this._propagateEvent(n)
            }
            return this
        },
        listens: function(t, e, i, n) {
            "string" != typeof t && console.warn('"string" type argument expected');
            var o = e
              , s = ("function" != typeof e && (n = !!e,
            i = o = void 0),
            this._events && this._events[t]);
            if (s && s.length && !1 !== this._listens(t, o, i))
                return !0;
            if (n)
                for (var r in this._eventParents)
                    if (this._eventParents[r].listens(t, e, i, n))
                        return !0;
            return !1
        },
        _listens: function(t, e, i) {
            if (this._events) {
                var n = this._events[t] || [];
                if (!e)
                    return !!n.length;
                i === this && (i = void 0);
                for (var o = 0, s = n.length; o < s; o++)
                    if (n[o].fn === e && n[o].ctx === i)
                        return o
            }
            return !1
        },
        once: function(t, e, i) {
            if ("object" == typeof t)
                for (var n in t)
                    this._on(n, t[n], e, !0);
            else
                for (var o = 0, s = (t = F(t)).length; o < s; o++)
                    this._on(t[o], e, i, !0);
            return this
        },
        addEventParent: function(t) {
            return this._eventParents = this._eventParents || {},
            this._eventParents[h(t)] = t,
            this
        },
        removeEventParent: function(t) {
            return this._eventParents && delete this._eventParents[h(t)],
            this
        },
        _propagateEvent: function(t) {
            for (var e in this._eventParents)
                this._eventParents[e].fire(t.type, l({
                    layer: t.target,
                    propagatedFrom: t.target
                }, t), !0)
        }
    }
      , it = (e.addEventListener = e.on,
    e.removeEventListener = e.clearAllEventListeners = e.off,
    e.addOneTimeEventListener = e.once,
    e.fireEvent = e.fire,
    e.hasEventListeners = e.listens,
    et.extend(e));
    function p(t, e, i) {
        this.x = i ? Math.round(t) : t,
        this.y = i ? Math.round(e) : e
    }
    var nt = Math.trunc || function(t) {
        return 0 < t ? Math.floor(t) : Math.ceil(t)
    }
    ;
    function m(t, e, i) {
        return t instanceof p ? t : d(t) ? new p(t[0],t[1]) : null == t ? t : "object" == typeof t && "x"in t && "y"in t ? new p(t.x,t.y) : new p(t,e,i)
    }
    function f(t, e) {
        if (t)
            for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
                this.extend(i[n])
    }
    function _(t, e) {
        return !t || t instanceof f ? t : new f(t,e)
    }
    function s(t, e) {
        if (t)
            for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
                this.extend(i[n])
    }
    function g(t, e) {
        return t instanceof s ? t : new s(t,e)
    }
    function v(t, e, i) {
        if (isNaN(t) || isNaN(e))
            throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
        this.lat = +t,
        this.lng = +e,
        void 0 !== i && (this.alt = +i)
    }
    function w(t, e, i) {
        return t instanceof v ? t : d(t) && "object" != typeof t[0] ? 3 === t.length ? new v(t[0],t[1],t[2]) : 2 === t.length ? new v(t[0],t[1]) : null : null == t ? t : "object" == typeof t && "lat"in t ? new v(t.lat,"lng"in t ? t.lng : t.lon,t.alt) : void 0 === e ? null : new v(t,e,i)
    }
    p.prototype = {
        clone: function() {
            return new p(this.x,this.y)
        },
        add: function(t) {
            return this.clone()._add(m(t))
        },
        _add: function(t) {
            return this.x += t.x,
            this.y += t.y,
            this
        },
        subtract: function(t) {
            return this.clone()._subtract(m(t))
        },
        _subtract: function(t) {
            return this.x -= t.x,
            this.y -= t.y,
            this
        },
        divideBy: function(t) {
            return this.clone()._divideBy(t)
        },
        _divideBy: function(t) {
            return this.x /= t,
            this.y /= t,
            this
        },
        multiplyBy: function(t) {
            return this.clone()._multiplyBy(t)
        },
        _multiplyBy: function(t) {
            return this.x *= t,
            this.y *= t,
            this
        },
        scaleBy: function(t) {
            return new p(this.x * t.x,this.y * t.y)
        },
        unscaleBy: function(t) {
            return new p(this.x / t.x,this.y / t.y)
        },
        round: function() {
            return this.clone()._round()
        },
        _round: function() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this
        },
        floor: function() {
            return this.clone()._floor()
        },
        _floor: function() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this
        },
        ceil: function() {
            return this.clone()._ceil()
        },
        _ceil: function() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this
        },
        trunc: function() {
            return this.clone()._trunc()
        },
        _trunc: function() {
            return this.x = nt(this.x),
            this.y = nt(this.y),
            this
        },
        distanceTo: function(t) {
            var e = (t = m(t)).x - this.x
              , t = t.y - this.y;
            return Math.sqrt(e * e + t * t)
        },
        equals: function(t) {
            return (t = m(t)).x === this.x && t.y === this.y
        },
        contains: function(t) {
            return t = m(t),
            Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
        },
        toString: function() {
            return "Point(" + i(this.x) + ", " + i(this.y) + ")"
        }
    },
    f.prototype = {
        extend: function(t) {
            var e, i;
            if (t) {
                if (t instanceof p || "number" == typeof t[0] || "x"in t)
                    e = i = m(t);
                else if (e = (t = _(t)).min,
                i = t.max,
                !e || !i)
                    return this;
                this.min || this.max ? (this.min.x = Math.min(e.x, this.min.x),
                this.max.x = Math.max(i.x, this.max.x),
                this.min.y = Math.min(e.y, this.min.y),
                this.max.y = Math.max(i.y, this.max.y)) : (this.min = e.clone(),
                this.max = i.clone())
            }
            return this
        },
        getCenter: function(t) {
            return m((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
        },
        getBottomLeft: function() {
            return m(this.min.x, this.max.y)
        },
        getTopRight: function() {
            return m(this.max.x, this.min.y)
        },
        getTopLeft: function() {
            return this.min
        },
        getBottomRight: function() {
            return this.max
        },
        getSize: function() {
            return this.max.subtract(this.min)
        },
        contains: function(t) {
            var e, i;
            return (t = ("number" == typeof t[0] || t instanceof p ? m : _)(t))instanceof f ? (e = t.min,
            i = t.max) : e = i = t,
            e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
        },
        intersects: function(t) {
            t = _(t);
            var e = this.min
              , i = this.max
              , n = t.min
              , t = t.max
              , o = t.x >= e.x && n.x <= i.x
              , t = t.y >= e.y && n.y <= i.y;
            return o && t
        },
        overlaps: function(t) {
            t = _(t);
            var e = this.min
              , i = this.max
              , n = t.min
              , t = t.max
              , o = t.x > e.x && n.x < i.x
              , t = t.y > e.y && n.y < i.y;
            return o && t
        },
        isValid: function() {
            return !(!this.min || !this.max)
        },
        pad: function(t) {
            var e = this.min
              , i = this.max
              , n = Math.abs(e.x - i.x) * t
              , t = Math.abs(e.y - i.y) * t;
            return _(m(e.x - n, e.y - t), m(i.x + n, i.y + t))
        },
        equals: function(t) {
            return !!t && (t = _(t),
            this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight()))
        }
    },
    s.prototype = {
        extend: function(t) {
            var e, i, n = this._southWest, o = this._northEast;
            if (t instanceof v)
                i = e = t;
            else {
                if (!(t instanceof s))
                    return t ? this.extend(w(t) || g(t)) : this;
                if (e = t._southWest,
                i = t._northEast,
                !e || !i)
                    return this
            }
            return n || o ? (n.lat = Math.min(e.lat, n.lat),
            n.lng = Math.min(e.lng, n.lng),
            o.lat = Math.max(i.lat, o.lat),
            o.lng = Math.max(i.lng, o.lng)) : (this._southWest = new v(e.lat,e.lng),
            this._northEast = new v(i.lat,i.lng)),
            this
        },
        pad: function(t) {
            var e = this._southWest
              , i = this._northEast
              , n = Math.abs(e.lat - i.lat) * t
              , t = Math.abs(e.lng - i.lng) * t;
            return new s(new v(e.lat - n,e.lng - t),new v(i.lat + n,i.lng + t))
        },
        getCenter: function() {
            return new v((this._southWest.lat + this._northEast.lat) / 2,(this._southWest.lng + this._northEast.lng) / 2)
        },
        getSouthWest: function() {
            return this._southWest
        },
        getNorthEast: function() {
            return this._northEast
        },
        getNorthWest: function() {
            return new v(this.getNorth(),this.getWest())
        },
        getSouthEast: function() {
            return new v(this.getSouth(),this.getEast())
        },
        getWest: function() {
            return this._southWest.lng
        },
        getSouth: function() {
            return this._southWest.lat
        },
        getEast: function() {
            return this._northEast.lng
        },
        getNorth: function() {
            return this._northEast.lat
        },
        contains: function(t) {
            t = ("number" == typeof t[0] || t instanceof v || "lat"in t ? w : g)(t);
            var e, i, n = this._southWest, o = this._northEast;
            return t instanceof s ? (e = t.getSouthWest(),
            i = t.getNorthEast()) : e = i = t,
            e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng
        },
        intersects: function(t) {
            t = g(t);
            var e = this._southWest
              , i = this._northEast
              , n = t.getSouthWest()
              , t = t.getNorthEast()
              , o = t.lat >= e.lat && n.lat <= i.lat
              , t = t.lng >= e.lng && n.lng <= i.lng;
            return o && t
        },
        overlaps: function(t) {
            t = g(t);
            var e = this._southWest
              , i = this._northEast
              , n = t.getSouthWest()
              , t = t.getNorthEast()
              , o = t.lat > e.lat && n.lat < i.lat
              , t = t.lng > e.lng && n.lng < i.lng;
            return o && t
        },
        toBBoxString: function() {
            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
        },
        equals: function(t, e) {
            return !!t && (t = g(t),
            this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e))
        },
        isValid: function() {
            return !(!this._southWest || !this._northEast)
        }
    };
    var ot = {
        latLngToPoint: function(t, e) {
            t = this.projection.project(t),
            e = this.scale(e);
            return this.transformation._transform(t, e)
        },
        pointToLatLng: function(t, e) {
            e = this.scale(e),
            t = this.transformation.untransform(t, e);
            return this.projection.unproject(t)
        },
        project: function(t) {
            return this.projection.project(t)
        },
        unproject: function(t) {
            return this.projection.unproject(t)
        },
        scale: function(t) {
            return 256 * Math.pow(2, t)
        },
        zoom: function(t) {
            return Math.log(t / 256) / Math.LN2
        },
        getProjectedBounds: function(t) {
            var e;
            return this.infinite ? null : (e = this.projection.bounds,
            t = this.scale(t),
            new f(this.transformation.transform(e.min, t),this.transformation.transform(e.max, t)))
        },
        infinite: !(v.prototype = {
            equals: function(t, e) {
                return !!t && (t = w(t),
                Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === e ? 1e-9 : e))
            },
            toString: function(t) {
                return "LatLng(" + i(this.lat, t) + ", " + i(this.lng, t) + ")"
            },
            distanceTo: function(t) {
                return st.distance(this, w(t))
            },
            wrap: function() {
                return st.wrapLatLng(this)
            },
            toBounds: function(t) {
                var t = 180 * t / 40075017
                  , e = t / Math.cos(Math.PI / 180 * this.lat);
                return g([this.lat - t, this.lng - e], [this.lat + t, this.lng + e])
            },
            clone: function() {
                return new v(this.lat,this.lng,this.alt)
            }
        }),
        wrapLatLng: function(t) {
            var e = this.wrapLng ? H(t.lng, this.wrapLng, !0) : t.lng;
            return new v(this.wrapLat ? H(t.lat, this.wrapLat, !0) : t.lat,e,t.alt)
        },
        wrapLatLngBounds: function(t) {
            var e = t.getCenter()
              , i = this.wrapLatLng(e)
              , n = e.lat - i.lat
              , e = e.lng - i.lng;
            return 0 == n && 0 == e ? t : (i = t.getSouthWest(),
            t = t.getNorthEast(),
            new s(new v(i.lat - n,i.lng - e),new v(t.lat - n,t.lng - e)))
        }
    }
      , st = l({}, ot, {
        wrapLng: [-180, 180],
        R: 6371e3,
        distance: function(t, e) {
            var i = Math.PI / 180
              , n = t.lat * i
              , o = e.lat * i
              , s = Math.sin((e.lat - t.lat) * i / 2)
              , e = Math.sin((e.lng - t.lng) * i / 2)
              , t = s * s + Math.cos(n) * Math.cos(o) * e * e
              , i = 2 * Math.atan2(Math.sqrt(t), Math.sqrt(1 - t));
            return this.R * i
        }
    })
      , rt = 6378137
      , rt = {
        R: rt,
        MAX_LATITUDE: 85.0511287798,
        project: function(t) {
            var e = Math.PI / 180
              , i = this.MAX_LATITUDE
              , i = Math.max(Math.min(i, t.lat), -i)
              , i = Math.sin(i * e);
            return new p(this.R * t.lng * e,this.R * Math.log((1 + i) / (1 - i)) / 2)
        },
        unproject: function(t) {
            var e = 180 / Math.PI;
            return new v((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e,t.x * e / this.R)
        },
        bounds: new f([-(rt = rt * Math.PI), -rt],[rt, rt])
    };
    function at(t, e, i, n) {
        d(t) ? (this._a = t[0],
        this._b = t[1],
        this._c = t[2],
        this._d = t[3]) : (this._a = t,
        this._b = e,
        this._c = i,
        this._d = n)
    }
    function ht(t, e, i, n) {
        return new at(t,e,i,n)
    }
    at.prototype = {
        transform: function(t, e) {
            return this._transform(t.clone(), e)
        },
        _transform: function(t, e) {
            return t.x = (e = e || 1) * (this._a * t.x + this._b),
            t.y = e * (this._c * t.y + this._d),
            t
        },
        untransform: function(t, e) {
            return new p((t.x / (e = e || 1) - this._b) / this._a,(t.y / e - this._d) / this._c)
        }
    };
    var lt = l({}, st, {
        code: "EPSG:3857",
        projection: rt,
        transformation: ht(lt = .5 / (Math.PI * rt.R), .5, -lt, .5)
    })
      , ut = l({}, lt, {
        code: "EPSG:900913"
    });
    function ct(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t)
    }
    function dt(t, e) {
        for (var i, n, o, s, r = "", a = 0, h = t.length; a < h; a++) {
            for (i = 0,
            n = (o = t[a]).length; i < n; i++)
                r += (i ? "L" : "M") + (s = o[i]).x + " " + s.y;
            r += e ? b.svg ? "z" : "x" : ""
        }
        return r || "M0 0"
    }
    var _t = document.documentElement.style
      , pt = "ActiveXObject"in window
      , mt = pt && !document.addEventListener
      , n = "msLaunchUri"in navigator && !("documentMode"in document)
      , ft = y("webkit")
      , gt = y("android")
      , vt = y("android 2") || y("android 3")
      , yt = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10)
      , yt = gt && y("Google") && yt < 537 && !("AudioNode"in window)
      , xt = !!window.opera
      , wt = !n && y("chrome")
      , bt = y("gecko") && !ft && !xt && !pt
      , Pt = !wt && y("safari")
      , Lt = y("phantom")
      , o = "OTransition"in _t
      , Tt = 0 === navigator.platform.indexOf("Win")
      , Mt = pt && "transition"in _t
      , zt = "WebKitCSSMatrix"in window && "m11"in new window.WebKitCSSMatrix && !vt
      , _t = "MozPerspective"in _t
      , Ct = !window.L_DISABLE_3D && (Mt || zt || _t) && !o && !Lt
      , Zt = "undefined" != typeof orientation || y("mobile")
      , St = Zt && ft
      , Et = Zt && zt
      , kt = !window.PointerEvent && window.MSPointerEvent
      , Ot = !(!window.PointerEvent && !kt)
      , At = "ontouchstart"in window || !!window.TouchEvent
      , Bt = !window.L_NO_TOUCH && (At || Ot)
      , It = Zt && xt
      , Rt = Zt && bt
      , Nt = 1 < (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI)
      , Dt = function() {
        var t = !1;
        try {
            var e = Object.defineProperty({}, "passive", {
                get: function() {
                    t = !0
                }
            });
            window.addEventListener("testPassiveEventSupport", u, e),
            window.removeEventListener("testPassiveEventSupport", u, e)
        } catch (t) {}
        return t
    }()
      , jt = !!document.createElement("canvas").getContext
      , Ht = !(!document.createElementNS || !ct("svg").createSVGRect)
      , Wt = !!Ht && ((Wt = document.createElement("div")).innerHTML = "<svg/>",
    "http://www.w3.org/2000/svg" === (Wt.firstChild && Wt.firstChild.namespaceURI));
    function y(t) {
        return 0 <= navigator.userAgent.toLowerCase().indexOf(t)
    }
    var b = {
        ie: pt,
        ielt9: mt,
        edge: n,
        webkit: ft,
        android: gt,
        android23: vt,
        androidStock: yt,
        opera: xt,
        chrome: wt,
        gecko: bt,
        safari: Pt,
        phantom: Lt,
        opera12: o,
        win: Tt,
        ie3d: Mt,
        webkit3d: zt,
        gecko3d: _t,
        any3d: Ct,
        mobile: Zt,
        mobileWebkit: St,
        mobileWebkit3d: Et,
        msPointer: kt,
        pointer: Ot,
        touch: Bt,
        touchNative: At,
        mobileOpera: It,
        mobileGecko: Rt,
        retina: Nt,
        passiveEvents: Dt,
        canvas: jt,
        svg: Ht,
        vml: !Ht && function() {
            try {
                var t = document.createElement("div")
                  , e = (t.innerHTML = '<v:shape adj="1"/>',
                t.firstChild);
                return e.style.behavior = "url(#default#VML)",
                e && "object" == typeof e.adj
            } catch (t) {
                return !1
            }
        }(),
        inlineSvg: Wt,
        mac: 0 === navigator.platform.indexOf("Mac"),
        linux: 0 === navigator.platform.indexOf("Linux")
    }
      , Ft = b.msPointer ? "MSPointerDown" : "pointerdown"
      , Ut = b.msPointer ? "MSPointerMove" : "pointermove"
      , Vt = b.msPointer ? "MSPointerUp" : "pointerup"
      , qt = b.msPointer ? "MSPointerCancel" : "pointercancel"
      , Gt = {
        touchstart: Ft,
        touchmove: Ut,
        touchend: Vt,
        touchcancel: qt
    }
      , Kt = {
        touchstart: function(t, e) {
            e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && O(e);
            ee(t, e)
        },
        touchmove: ee,
        touchend: ee,
        touchcancel: ee
    }
      , Yt = {}
      , Xt = !1;
    function Jt(t, e, i) {
        return "touchstart" !== e || Xt || (document.addEventListener(Ft, $t, !0),
        document.addEventListener(Ut, Qt, !0),
        document.addEventListener(Vt, te, !0),
        document.addEventListener(qt, te, !0),
        Xt = !0),
        Kt[e] ? (i = Kt[e].bind(this, i),
        t.addEventListener(Gt[e], i, !1),
        i) : (console.warn("wrong event specified:", e),
        u)
    }
    function $t(t) {
        Yt[t.pointerId] = t
    }
    function Qt(t) {
        Yt[t.pointerId] && (Yt[t.pointerId] = t)
    }
    function te(t) {
        delete Yt[t.pointerId]
    }
    function ee(t, e) {
        if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
            for (var i in e.touches = [],
            Yt)
                e.touches.push(Yt[i]);
            e.changedTouches = [e],
            t(e)
        }
    }
    var ie = 200;
    function ne(t, i) {
        t.addEventListener("dblclick", i);
        var n, o = 0;
        function e(t) {
            var e;
            1 !== t.detail ? n = t.detail : "mouse" === t.pointerType || t.sourceCapabilities && !t.sourceCapabilities.firesTouchEvents || ((e = Ne(t)).some(function(t) {
                return t instanceof HTMLLabelElement && t.attributes.for
            }) && !e.some(function(t) {
                return t instanceof HTMLInputElement || t instanceof HTMLSelectElement
            }) || ((e = Date.now()) - o <= ie ? 2 === ++n && i(function(t) {
                var e, i, n = {};
                for (i in t)
                    e = t[i],
                    n[i] = e && e.bind ? e.bind(t) : e;
                return (t = n).type = "dblclick",
                n.detail = 2,
                n.isTrusted = !1,
                n._simulated = !0,
                n
            }(t)) : n = 1,
            o = e))
        }
        return t.addEventListener("click", e),
        {
            dblclick: i,
            simDblclick: e
        }
    }
    var oe, se, re, ae, he, le, ue = we(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), ce = we(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), de = "webkitTransition" === ce || "OTransition" === ce ? ce + "End" : "transitionend";
    function _e(t) {
        return "string" == typeof t ? document.getElementById(t) : t
    }
    function pe(t, e) {
        var i = t.style[e] || t.currentStyle && t.currentStyle[e];
        return "auto" === (i = i && "auto" !== i || !document.defaultView ? i : (t = document.defaultView.getComputedStyle(t, null)) ? t[e] : null) ? null : i
    }
    function P(t, e, i) {
        t = document.createElement(t);
        return t.className = e || "",
        i && i.appendChild(t),
        t
    }
    function T(t) {
        var e = t.parentNode;
        e && e.removeChild(t)
    }
    function me(t) {
        for (; t.firstChild; )
            t.removeChild(t.firstChild)
    }
    function fe(t) {
        var e = t.parentNode;
        e && e.lastChild !== t && e.appendChild(t)
    }
    function ge(t) {
        var e = t.parentNode;
        e && e.firstChild !== t && e.insertBefore(t, e.firstChild)
    }
    function ve(t, e) {
        return void 0 !== t.classList ? t.classList.contains(e) : 0 < (t = xe(t)).length && new RegExp("(^|\\s)" + e + "(\\s|$)").test(t)
    }
    function M(t, e) {
        var i;
        if (void 0 !== t.classList)
            for (var n = F(e), o = 0, s = n.length; o < s; o++)
                t.classList.add(n[o]);
        else
            ve(t, e) || ye(t, ((i = xe(t)) ? i + " " : "") + e)
    }
    function z(t, e) {
        void 0 !== t.classList ? t.classList.remove(e) : ye(t, W((" " + xe(t) + " ").replace(" " + e + " ", " ")))
    }
    function ye(t, e) {
        void 0 === t.className.baseVal ? t.className = e : t.className.baseVal = e
    }
    function xe(t) {
        return void 0 === (t = t.correspondingElement ? t.correspondingElement : t).className.baseVal ? t.className : t.className.baseVal
    }
    function C(t, e) {
        if ("opacity"in t.style)
            t.style.opacity = e;
        else if ("filter"in t.style) {
            var i = !1
              , n = "DXImageTransform.Microsoft.Alpha";
            try {
                i = t.filters.item(n)
            } catch (t) {
                if (1 === e)
                    return
            }
            e = Math.round(100 * e),
            i ? (i.Enabled = 100 !== e,
            i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")"
        }
    }
    function we(t) {
        for (var e = document.documentElement.style, i = 0; i < t.length; i++)
            if (t[i]in e)
                return t[i];
        return !1
    }
    function be(t, e, i) {
        e = e || new p(0,0);
        t.style[ue] = (b.ie3d ? "translate(" + e.x + "px," + e.y + "px)" : "translate3d(" + e.x + "px," + e.y + "px,0)") + (i ? " scale(" + i + ")" : "")
    }
    function Z(t, e) {
        t._leaflet_pos = e,
        b.any3d ? be(t, e) : (t.style.left = e.x + "px",
        t.style.top = e.y + "px")
    }
    function Pe(t) {
        return t._leaflet_pos || new p(0,0)
    }
    function Le() {
        S(window, "dragstart", O)
    }
    function Te() {
        k(window, "dragstart", O)
    }
    function Me(t) {
        for (; -1 === t.tabIndex; )
            t = t.parentNode;
        t.style && (ze(),
        le = (he = t).style.outlineStyle,
        t.style.outlineStyle = "none",
        S(window, "keydown", ze))
    }
    function ze() {
        he && (he.style.outlineStyle = le,
        le = he = void 0,
        k(window, "keydown", ze))
    }
    function Ce(t) {
        for (; !((t = t.parentNode).offsetWidth && t.offsetHeight || t === document.body); )
            ;
        return t
    }
    function Ze(t) {
        var e = t.getBoundingClientRect();
        return {
            x: e.width / t.offsetWidth || 1,
            y: e.height / t.offsetHeight || 1,
            boundingClientRect: e
        }
    }
    ae = "onselectstart"in document ? (re = function() {
        S(window, "selectstart", O)
    }
    ,
    function() {
        k(window, "selectstart", O)
    }
    ) : (se = we(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]),
    re = function() {
        var t;
        se && (t = document.documentElement.style,
        oe = t[se],
        t[se] = "none")
    }
    ,
    function() {
        se && (document.documentElement.style[se] = oe,
        oe = void 0)
    }
    );
    pt = {
        __proto__: null,
        TRANSFORM: ue,
        TRANSITION: ce,
        TRANSITION_END: de,
        get: _e,
        getStyle: pe,
        create: P,
        remove: T,
        empty: me,
        toFront: fe,
        toBack: ge,
        hasClass: ve,
        addClass: M,
        removeClass: z,
        setClass: ye,
        getClass: xe,
        setOpacity: C,
        testProp: we,
        setTransform: be,
        setPosition: Z,
        getPosition: Pe,
        get disableTextSelection() {
            return re
        },
        get enableTextSelection() {
            return ae
        },
        disableImageDrag: Le,
        enableImageDrag: Te,
        preventOutline: Me,
        restoreOutline: ze,
        getSizedParentNode: Ce,
        getScale: Ze
    };
    function S(t, e, i, n) {
        if (e && "object" == typeof e)
            for (var o in e)
                ke(t, o, e[o], i);
        else
            for (var s = 0, r = (e = F(e)).length; s < r; s++)
                ke(t, e[s], i, n);
        return this
    }
    var E = "_leaflet_events";
    function k(t, e, i, n) {
        if (1 === arguments.length)
            Se(t),
            delete t[E];
        else if (e && "object" == typeof e)
            for (var o in e)
                Oe(t, o, e[o], i);
        else if (e = F(e),
        2 === arguments.length)
            Se(t, function(t) {
                return -1 !== G(e, t)
            });
        else
            for (var s = 0, r = e.length; s < r; s++)
                Oe(t, e[s], i, n);
        return this
    }
    function Se(t, e) {
        for (var i in t[E]) {
            var n = i.split(/\d/)[0];
            e && !e(n) || Oe(t, n, null, null, i)
        }
    }
    var Ee = {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        wheel: !("onwheel"in window) && "mousewheel"
    };
    function ke(e, t, i, n) {
        var o, s, r = t + h(i) + (n ? "_" + h(n) : "");
        e[E] && e[E][r] || (s = o = function(t) {
            return i.call(n || e, t || window.event)
        }
        ,
        !b.touchNative && b.pointer && 0 === t.indexOf("touch") ? o = Jt(e, t, o) : b.touch && "dblclick" === t ? o = ne(e, o) : "addEventListener"in e ? "touchstart" === t || "touchmove" === t || "wheel" === t || "mousewheel" === t ? e.addEventListener(Ee[t] || t, o, !!b.passiveEvents && {
            passive: !1
        }) : "mouseenter" === t || "mouseleave" === t ? e.addEventListener(Ee[t], o = function(t) {
            t = t || window.event,
            We(e, t) && s(t)
        }
        , !1) : e.addEventListener(t, s, !1) : e.attachEvent("on" + t, o),
        e[E] = e[E] || {},
        e[E][r] = o)
    }
    function Oe(t, e, i, n, o) {
        o = o || e + h(i) + (n ? "_" + h(n) : "");
        var s, r, i = t[E] && t[E][o];
        i && (!b.touchNative && b.pointer && 0 === e.indexOf("touch") ? (n = t,
        r = i,
        Gt[s = e] ? n.removeEventListener(Gt[s], r, !1) : console.warn("wrong event specified:", s)) : b.touch && "dblclick" === e ? (n = i,
        (r = t).removeEventListener("dblclick", n.dblclick),
        r.removeEventListener("click", n.simDblclick)) : "removeEventListener"in t ? t.removeEventListener(Ee[e] || e, i, !1) : t.detachEvent("on" + e, i),
        t[E][o] = null)
    }
    function Ae(t) {
        return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0,
        this
    }
    function Be(t) {
        return ke(t, "wheel", Ae),
        this
    }
    function Ie(t) {
        return S(t, "mousedown touchstart dblclick contextmenu", Ae),
        t._leaflet_disable_click = !0,
        this
    }
    function O(t) {
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
        this
    }
    function Re(t) {
        return O(t),
        Ae(t),
        this
    }
    function Ne(t) {
        if (t.composedPath)
            return t.composedPath();
        for (var e = [], i = t.target; i; )
            e.push(i),
            i = i.parentNode;
        return e
    }
    function De(t, e) {
        var i, n;
        return e ? (n = (i = Ze(e)).boundingClientRect,
        new p((t.clientX - n.left) / i.x - e.clientLeft,(t.clientY - n.top) / i.y - e.clientTop)) : new p(t.clientX,t.clientY)
    }
    var je = b.linux && b.chrome ? window.devicePixelRatio : b.mac ? 3 * window.devicePixelRatio : 0 < window.devicePixelRatio ? 2 * window.devicePixelRatio : 1;
    function He(t) {
        return b.edge ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / je : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
    }
    function We(t, e) {
        var i = e.relatedTarget;
        if (!i)
            return !0;
        try {
            for (; i && i !== t; )
                i = i.parentNode
        } catch (t) {
            return !1
        }
        return i !== t
    }
    var mt = {
        __proto__: null,
        on: S,
        off: k,
        stopPropagation: Ae,
        disableScrollPropagation: Be,
        disableClickPropagation: Ie,
        preventDefault: O,
        stop: Re,
        getPropagationPath: Ne,
        getMousePosition: De,
        getWheelDelta: He,
        isExternalTarget: We,
        addListener: S,
        removeListener: k
    }
      , Fe = it.extend({
        run: function(t, e, i, n) {
            this.stop(),
            this._el = t,
            this._inProgress = !0,
            this._duration = i || .25,
            this._easeOutPower = 1 / Math.max(n || .5, .2),
            this._startPos = Pe(t),
            this._offset = e.subtract(this._startPos),
            this._startTime = +new Date,
            this.fire("start"),
            this._animate()
        },
        stop: function() {
            this._inProgress && (this._step(!0),
            this._complete())
        },
        _animate: function() {
            this._animId = x(this._animate, this),
            this._step()
        },
        _step: function(t) {
            var e = +new Date - this._startTime
              , i = 1e3 * this._duration;
            e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1),
            this._complete())
        },
        _runFrame: function(t, e) {
            t = this._startPos.add(this._offset.multiplyBy(t));
            e && t._round(),
            Z(this._el, t),
            this.fire("step")
        },
        _complete: function() {
            r(this._animId),
            this._inProgress = !1,
            this.fire("end")
        },
        _easeOut: function(t) {
            return 1 - Math.pow(1 - t, this._easeOutPower)
        }
    })
      , A = it.extend({
        options: {
            crs: lt,
            center: void 0,
            zoom: void 0,
            minZoom: void 0,
            maxZoom: void 0,
            layers: [],
            maxBounds: void 0,
            renderer: void 0,
            zoomAnimation: !0,
            zoomAnimationThreshold: 4,
            fadeAnimation: !0,
            markerZoomAnimation: !0,
            transform3DLimit: 8388608,
            zoomSnap: 1,
            zoomDelta: 1,
            trackResize: !0
        },
        initialize: function(t, e) {
            e = c(this, e),
            this._handlers = [],
            this._layers = {},
            this._zoomBoundLayers = {},
            this._sizeChanged = !0,
            this._initContainer(t),
            this._initLayout(),
            this._onResize = a(this._onResize, this),
            this._initEvents(),
            e.maxBounds && this.setMaxBounds(e.maxBounds),
            void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)),
            e.center && void 0 !== e.zoom && this.setView(w(e.center), e.zoom, {
                reset: !0
            }),
            this.callInitHooks(),
            this._zoomAnimated = ce && b.any3d && !b.mobileOpera && this.options.zoomAnimation,
            this._zoomAnimated && (this._createAnimProxy(),
            S(this._proxy, de, this._catchTransitionEnd, this)),
            this._addLayers(this.options.layers)
        },
        setView: function(t, e, i) {
            if ((e = void 0 === e ? this._zoom : this._limitZoom(e),
            t = this._limitCenter(w(t), e, this.options.maxBounds),
            i = i || {},
            this._stop(),
            this._loaded && !i.reset && !0 !== i) && (void 0 !== i.animate && (i.zoom = l({
                animate: i.animate
            }, i.zoom),
            i.pan = l({
                animate: i.animate,
                duration: i.duration
            }, i.pan)),
            this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan)))
                return clearTimeout(this._sizeTimer),
                this;
            return this._resetView(t, e, i.pan && i.pan.noMoveStart),
            this
        },
        setZoom: function(t, e) {
            return this._loaded ? this.setView(this.getCenter(), t, {
                zoom: e
            }) : (this._zoom = t,
            this)
        },
        zoomIn: function(t, e) {
            return t = t || (b.any3d ? this.options.zoomDelta : 1),
            this.setZoom(this._zoom + t, e)
        },
        zoomOut: function(t, e) {
            return t = t || (b.any3d ? this.options.zoomDelta : 1),
            this.setZoom(this._zoom - t, e)
        },
        setZoomAround: function(t, e, i) {
            var n = this.getZoomScale(e)
              , o = this.getSize().divideBy(2)
              , t = (t instanceof p ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n)
              , n = this.containerPointToLatLng(o.add(t));
            return this.setView(n, e, {
                zoom: i
            })
        },
        _getBoundsCenterZoom: function(t, e) {
            e = e || {},
            t = t.getBounds ? t.getBounds() : g(t);
            var i = m(e.paddingTopLeft || e.padding || [0, 0])
              , n = m(e.paddingBottomRight || e.padding || [0, 0])
              , o = this.getBoundsZoom(t, !1, i.add(n));
            return (o = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, o) : o) === 1 / 0 ? {
                center: t.getCenter(),
                zoom: o
            } : (e = n.subtract(i).divideBy(2),
            n = this.project(t.getSouthWest(), o),
            i = this.project(t.getNorthEast(), o),
            {
                center: this.unproject(n.add(i).divideBy(2).add(e), o),
                zoom: o
            })
        },
        fitBounds: function(t, e) {
            if ((t = g(t)).isValid())
                return t = this._getBoundsCenterZoom(t, e),
                this.setView(t.center, t.zoom, e);
            throw new Error("Bounds are not valid.")
        },
        fitWorld: function(t) {
            return this.fitBounds([[-90, -180], [90, 180]], t)
        },
        panTo: function(t, e) {
            return this.setView(t, this._zoom, {
                pan: e
            })
        },
        panBy: function(t, e) {
            var i;
            return e = e || {},
            (t = m(t).round()).x || t.y ? (!0 === e.animate || this.getSize().contains(t) ? (this._panAnim || (this._panAnim = new Fe,
            this._panAnim.on({
                step: this._onPanTransitionStep,
                end: this._onPanTransitionEnd
            }, this)),
            e.noMoveStart || this.fire("movestart"),
            !1 !== e.animate ? (M(this._mapPane, "leaflet-pan-anim"),
            i = this._getMapPanePos().subtract(t).round(),
            this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)) : (this._rawPanBy(t),
            this.fire("move").fire("moveend"))) : this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()),
            this) : this.fire("moveend")
        },
        flyTo: function(n, o, t) {
            if (!1 === (t = t || {}).animate || !b.any3d)
                return this.setView(n, o, t);
            this._stop();
            var s = this.project(this.getCenter())
              , r = this.project(n)
              , e = this.getSize()
              , a = this._zoom
              , h = (n = w(n),
            o = void 0 === o ? a : o,
            Math.max(e.x, e.y))
              , i = h * this.getZoomScale(a, o)
              , l = r.distanceTo(s) || 1
              , u = 1.42
              , c = u * u;
            function d(t) {
                t = (i * i - h * h + (t ? -1 : 1) * c * c * l * l) / (2 * (t ? i : h) * c * l),
                t = Math.sqrt(t * t + 1) - t;
                return t < 1e-9 ? -18 : Math.log(t)
            }
            function _(t) {
                return (Math.exp(t) - Math.exp(-t)) / 2
            }
            function p(t) {
                return (Math.exp(t) + Math.exp(-t)) / 2
            }
            var m = d(0);
            function f(t) {
                return h * (p(m) * (_(t = m + u * t) / p(t)) - _(m)) / c
            }
            var g = Date.now()
              , v = (d(1) - m) / u
              , y = t.duration ? 1e3 * t.duration : 1e3 * v * .8;
            return this._moveStart(!0, t.noMoveStart),
            function t() {
                var e = (Date.now() - g) / y
                  , i = (1 - Math.pow(1 - e, 1.5)) * v;
                e <= 1 ? (this._flyToFrame = x(t, this),
                this._move(this.unproject(s.add(r.subtract(s).multiplyBy(f(i) / l)), a), this.getScaleZoom(h / (e = i,
                h * (p(m) / p(m + u * e))), a), {
                    flyTo: !0
                })) : this._move(n, o)._moveEnd(!0)
            }
            .call(this),
            this
        },
        flyToBounds: function(t, e) {
            t = this._getBoundsCenterZoom(t, e);
            return this.flyTo(t.center, t.zoom, e)
        },
        setMaxBounds: function(t) {
            return t = g(t),
            this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds),
            t.isValid() ? (this.options.maxBounds = t,
            this._loaded && this._panInsideMaxBounds(),
            this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null,
            this)
        },
        setMinZoom: function(t) {
            var e = this.options.minZoom;
            return this.options.minZoom = t,
            this._loaded && e !== t && (this.fire("zoomlevelschange"),
            this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
        },
        setMaxZoom: function(t) {
            var e = this.options.maxZoom;
            return this.options.maxZoom = t,
            this._loaded && e !== t && (this.fire("zoomlevelschange"),
            this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
        },
        panInsideBounds: function(t, e) {
            this._enforcingBounds = !0;
            var i = this.getCenter()
              , t = this._limitCenter(i, this._zoom, g(t));
            return i.equals(t) || this.panTo(t, e),
            this._enforcingBounds = !1,
            this
        },
        panInside: function(t, e) {
            var i = m((e = e || {}).paddingTopLeft || e.padding || [0, 0])
              , n = m(e.paddingBottomRight || e.padding || [0, 0])
              , o = this.project(this.getCenter())
              , t = this.project(t)
              , s = this.getPixelBounds()
              , i = _([s.min.add(i), s.max.subtract(n)])
              , s = i.getSize();
            return i.contains(t) || (this._enforcingBounds = !0,
            n = t.subtract(i.getCenter()),
            i = i.extend(t).getSize().subtract(s),
            o.x += n.x < 0 ? -i.x : i.x,
            o.y += n.y < 0 ? -i.y : i.y,
            this.panTo(this.unproject(o), e),
            this._enforcingBounds = !1),
            this
        },
        invalidateSize: function(t) {
            if (!this._loaded)
                return this;
            t = l({
                animate: !1,
                pan: !0
            }, !0 === t ? {
                animate: !0
            } : t);
            var e = this.getSize()
              , i = (this._sizeChanged = !0,
            this._lastCenter = null,
            this.getSize())
              , n = e.divideBy(2).round()
              , o = i.divideBy(2).round()
              , n = n.subtract(o);
            return n.x || n.y ? (t.animate && t.pan ? this.panBy(n) : (t.pan && this._rawPanBy(n),
            this.fire("move"),
            t.debounceMoveend ? (clearTimeout(this._sizeTimer),
            this._sizeTimer = setTimeout(a(this.fire, this, "moveend"), 200)) : this.fire("moveend")),
            this.fire("resize", {
                oldSize: e,
                newSize: i
            })) : this
        },
        stop: function() {
            return this.setZoom(this._limitZoom(this._zoom)),
            this.options.zoomSnap || this.fire("viewreset"),
            this._stop()
        },
        locate: function(t) {
            var e, i;
            return t = this._locateOptions = l({
                timeout: 1e4,
                watch: !1
            }, t),
            "geolocation"in navigator ? (e = a(this._handleGeolocationResponse, this),
            i = a(this._handleGeolocationError, this),
            t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t)) : this._handleGeolocationError({
                code: 0,
                message: "Geolocation not supported."
            }),
            this
        },
        stopLocate: function() {
            return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId),
            this._locateOptions && (this._locateOptions.setView = !1),
            this
        },
        _handleGeolocationError: function(t) {
            var e;
            this._container._leaflet_id && (e = t.code,
            t = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout"),
            this._locateOptions.setView && !this._loaded && this.fitWorld(),
            this.fire("locationerror", {
                code: e,
                message: "Geolocation error: " + t + "."
            }))
        },
        _handleGeolocationResponse: function(t) {
            if (this._container._leaflet_id) {
                var e, i, n = new v(t.coords.latitude,t.coords.longitude), o = n.toBounds(2 * t.coords.accuracy), s = this._locateOptions, r = (s.setView && (e = this.getBoundsZoom(o),
                this.setView(n, s.maxZoom ? Math.min(e, s.maxZoom) : e)),
                {
                    latlng: n,
                    bounds: o,
                    timestamp: t.timestamp
                });
                for (i in t.coords)
                    "number" == typeof t.coords[i] && (r[i] = t.coords[i]);
                this.fire("locationfound", r)
            }
        },
        addHandler: function(t, e) {
            return e && (e = this[t] = new e(this),
            this._handlers.push(e),
            this.options[t] && e.enable()),
            this
        },
        remove: function() {
            if (this._initEvents(!0),
            this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds),
            this._containerId !== this._container._leaflet_id)
                throw new Error("Map container is being reused by another instance");
            try {
                delete this._container._leaflet_id,
                delete this._containerId
            } catch (t) {
                this._container._leaflet_id = void 0,
                this._containerId = void 0
            }
            for (var t in void 0 !== this._locationWatchId && this.stopLocate(),
            this._stop(),
            T(this._mapPane),
            this._clearControlPos && this._clearControlPos(),
            this._resizeRequest && (r(this._resizeRequest),
            this._resizeRequest = null),
            this._clearHandlers(),
            this._loaded && this.fire("unload"),
            this._layers)
                this._layers[t].remove();
            for (t in this._panes)
                T(this._panes[t]);
            return this._layers = [],
            this._panes = [],
            delete this._mapPane,
            delete this._renderer,
            this
        },
        createPane: function(t, e) {
            e = P("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), e || this._mapPane);
            return t && (this._panes[t] = e),
            e
        },
        getCenter: function() {
            return this._checkIfLoaded(),
            this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint())
        },
        getZoom: function() {
            return this._zoom
        },
        getBounds: function() {
            var t = this.getPixelBounds();
            return new s(this.unproject(t.getBottomLeft()),this.unproject(t.getTopRight()))
        },
        getMinZoom: function() {
            return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
        },
        getMaxZoom: function() {
            return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
        },
        getBoundsZoom: function(t, e, i) {
            t = g(t),
            i = m(i || [0, 0]);
            var n = this.getZoom() || 0
              , o = this.getMinZoom()
              , s = this.getMaxZoom()
              , r = t.getNorthWest()
              , t = t.getSouthEast()
              , i = this.getSize().subtract(i)
              , t = _(this.project(t, n), this.project(r, n)).getSize()
              , r = b.any3d ? this.options.zoomSnap : 1
              , a = i.x / t.x
              , i = i.y / t.y
              , t = e ? Math.max(a, i) : Math.min(a, i)
              , n = this.getScaleZoom(t, n);
            return r && (n = Math.round(n / (r / 100)) * (r / 100),
            n = e ? Math.ceil(n / r) * r : Math.floor(n / r) * r),
            Math.max(o, Math.min(s, n))
        },
        getSize: function() {
            return this._size && !this._sizeChanged || (this._size = new p(this._container.clientWidth || 0,this._container.clientHeight || 0),
            this._sizeChanged = !1),
            this._size.clone()
        },
        getPixelBounds: function(t, e) {
            t = this._getTopLeftPoint(t, e);
            return new f(t,t.add(this.getSize()))
        },
        getPixelOrigin: function() {
            return this._checkIfLoaded(),
            this._pixelOrigin
        },
        getPixelWorldBounds: function(t) {
            return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
        },
        getPane: function(t) {
            return "string" == typeof t ? this._panes[t] : t
        },
        getPanes: function() {
            return this._panes
        },
        getContainer: function() {
            return this._container
        },
        getZoomScale: function(t, e) {
            var i = this.options.crs;
            return e = void 0 === e ? this._zoom : e,
            i.scale(t) / i.scale(e)
        },
        getScaleZoom: function(t, e) {
            var i = this.options.crs
              , t = (e = void 0 === e ? this._zoom : e,
            i.zoom(t * i.scale(e)));
            return isNaN(t) ? 1 / 0 : t
        },
        project: function(t, e) {
            return e = void 0 === e ? this._zoom : e,
            this.options.crs.latLngToPoint(w(t), e)
        },
        unproject: function(t, e) {
            return e = void 0 === e ? this._zoom : e,
            this.options.crs.pointToLatLng(m(t), e)
        },
        layerPointToLatLng: function(t) {
            t = m(t).add(this.getPixelOrigin());
            return this.unproject(t)
        },
        latLngToLayerPoint: function(t) {
            return this.project(w(t))._round()._subtract(this.getPixelOrigin())
        },
        wrapLatLng: function(t) {
            return this.options.crs.wrapLatLng(w(t))
        },
        wrapLatLngBounds: function(t) {
            return this.options.crs.wrapLatLngBounds(g(t))
        },
        distance: function(t, e) {
            return this.options.crs.distance(w(t), w(e))
        },
        containerPointToLayerPoint: function(t) {
            return m(t).subtract(this._getMapPanePos())
        },
        layerPointToContainerPoint: function(t) {
            return m(t).add(this._getMapPanePos())
        },
        containerPointToLatLng: function(t) {
            t = this.containerPointToLayerPoint(m(t));
            return this.layerPointToLatLng(t)
        },
        latLngToContainerPoint: function(t) {
            return this.layerPointToContainerPoint(this.latLngToLayerPoint(w(t)))
        },
        mouseEventToContainerPoint: function(t) {
            return De(t, this._container)
        },
        mouseEventToLayerPoint: function(t) {
            return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
        },
        mouseEventToLatLng: function(t) {
            return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
        },
        _initContainer: function(t) {
            t = this._container = _e(t);
            if (!t)
                throw new Error("Map container not found.");
            if (t._leaflet_id)
                throw new Error("Map container is already initialized.");
            S(t, "scroll", this._onScroll, this),
            this._containerId = h(t)
        },
        _initLayout: function() {
            var t = this._container
              , e = (this._fadeAnimated = this.options.fadeAnimation && b.any3d,
            M(t, "leaflet-container" + (b.touch ? " leaflet-touch" : "") + (b.retina ? " leaflet-retina" : "") + (b.ielt9 ? " leaflet-oldie" : "") + (b.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : "")),
            pe(t, "position"));
            "absolute" !== e && "relative" !== e && "fixed" !== e && "sticky" !== e && (t.style.position = "relative"),
            this._initPanes(),
            this._initControlPos && this._initControlPos()
        },
        _initPanes: function() {
            var t = this._panes = {};
            this._paneRenderers = {},
            this._mapPane = this.createPane("mapPane", this._container),
            Z(this._mapPane, new p(0,0)),
            this.createPane("tilePane"),
            this.createPane("overlayPane"),
            this.createPane("shadowPane"),
            this.createPane("markerPane"),
            this.createPane("tooltipPane"),
            this.createPane("popupPane"),
            this.options.markerZoomAnimation || (M(t.markerPane, "leaflet-zoom-hide"),
            M(t.shadowPane, "leaflet-zoom-hide"))
        },
        _resetView: function(t, e, i) {
            Z(this._mapPane, new p(0,0));
            var n = !this._loaded
              , o = (this._loaded = !0,
            e = this._limitZoom(e),
            this.fire("viewprereset"),
            this._zoom !== e);
            this._moveStart(o, i)._move(t, e)._moveEnd(o),
            this.fire("viewreset"),
            n && this.fire("load")
        },
        _moveStart: function(t, e) {
            return t && this.fire("zoomstart"),
            e || this.fire("movestart"),
            this
        },
        _move: function(t, e, i, n) {
            void 0 === e && (e = this._zoom);
            var o = this._zoom !== e;
            return this._zoom = e,
            this._lastCenter = t,
            this._pixelOrigin = this._getNewPixelOrigin(t),
            n ? i && i.pinch && this.fire("zoom", i) : ((o || i && i.pinch) && this.fire("zoom", i),
            this.fire("move", i)),
            this
        },
        _moveEnd: function(t) {
            return t && this.fire("zoomend"),
            this.fire("moveend")
        },
        _stop: function() {
            return r(this._flyToFrame),
            this._panAnim && this._panAnim.stop(),
            this
        },
        _rawPanBy: function(t) {
            Z(this._mapPane, this._getMapPanePos().subtract(t))
        },
        _getZoomSpan: function() {
            return this.getMaxZoom() - this.getMinZoom()
        },
        _panInsideMaxBounds: function() {
            this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
        },
        _checkIfLoaded: function() {
            if (!this._loaded)
                throw new Error("Set map center and zoom first.")
        },
        _initEvents: function(t) {
            this._targets = {};
            var e = t ? k : S;
            e((this._targets[h(this._container)] = this)._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this),
            this.options.trackResize && e(window, "resize", this._onResize, this),
            b.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
        },
        _onResize: function() {
            r(this._resizeRequest),
            this._resizeRequest = x(function() {
                this.invalidateSize({
                    debounceMoveend: !0
                })
            }, this)
        },
        _onScroll: function() {
            this._container.scrollTop = 0,
            this._container.scrollLeft = 0
        },
        _onMoveEnd: function() {
            var t = this._getMapPanePos();
            Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
        },
        _findEventTargets: function(t, e) {
            for (var i, n = [], o = "mouseout" === e || "mouseover" === e, s = t.target || t.srcElement, r = !1; s; ) {
                if ((i = this._targets[h(s)]) && ("click" === e || "preclick" === e) && this._draggableMoved(i)) {
                    r = !0;
                    break
                }
                if (i && i.listens(e, !0)) {
                    if (o && !We(s, t))
                        break;
                    if (n.push(i),
                    o)
                        break
                }
                if (s === this._container)
                    break;
                s = s.parentNode
            }
            return n = n.length || r || o || !this.listens(e, !0) ? n : [this]
        },
        _isClickDisabled: function(t) {
            for (; t && t !== this._container; ) {
                if (t._leaflet_disable_click)
                    return !0;
                t = t.parentNode
            }
        },
        _handleDOMEvent: function(t) {
            var e, i = t.target || t.srcElement;
            !this._loaded || i._leaflet_disable_events || "click" === t.type && this._isClickDisabled(i) || ("mousedown" === (e = t.type) && Me(i),
            this._fireDOMEvent(t, e))
        },
        _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
        _fireDOMEvent: function(t, e, i) {
            "click" === t.type && ((a = l({}, t)).type = "preclick",
            this._fireDOMEvent(a, a.type, i));
            var n = this._findEventTargets(t, e);
            if (i) {
                for (var o = [], s = 0; s < i.length; s++)
                    i[s].listens(e, !0) && o.push(i[s]);
                n = o.concat(n)
            }
            if (n.length) {
                "contextmenu" === e && O(t);
                var r, a = n[0], h = {
                    originalEvent: t
                };
                for ("keypress" !== t.type && "keydown" !== t.type && "keyup" !== t.type && (r = a.getLatLng && (!a._radius || a._radius <= 10),
                h.containerPoint = r ? this.latLngToContainerPoint(a.getLatLng()) : this.mouseEventToContainerPoint(t),
                h.layerPoint = this.containerPointToLayerPoint(h.containerPoint),
                h.latlng = r ? a.getLatLng() : this.layerPointToLatLng(h.layerPoint)),
                s = 0; s < n.length; s++)
                    if (n[s].fire(e, h, !0),
                    h.originalEvent._stopped || !1 === n[s].options.bubblingMouseEvents && -1 !== G(this._mouseEvents, e))
                        return
            }
        },
        _draggableMoved: function(t) {
            return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
        },
        _clearHandlers: function() {
            for (var t = 0, e = this._handlers.length; t < e; t++)
                this._handlers[t].disable()
        },
        whenReady: function(t, e) {
            return this._loaded ? t.call(e || this, {
                target: this
            }) : this.on("load", t, e),
            this
        },
        _getMapPanePos: function() {
            return Pe(this._mapPane) || new p(0,0)
        },
        _moved: function() {
            var t = this._getMapPanePos();
            return t && !t.equals([0, 0])
        },
        _getTopLeftPoint: function(t, e) {
            return (t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(this._getMapPanePos())
        },
        _getNewPixelOrigin: function(t, e) {
            var i = this.getSize()._divideBy(2);
            return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round()
        },
        _latLngToNewLayerPoint: function(t, e, i) {
            i = this._getNewPixelOrigin(i, e);
            return this.project(t, e)._subtract(i)
        },
        _latLngBoundsToNewLayerBounds: function(t, e, i) {
            i = this._getNewPixelOrigin(i, e);
            return _([this.project(t.getSouthWest(), e)._subtract(i), this.project(t.getNorthWest(), e)._subtract(i), this.project(t.getSouthEast(), e)._subtract(i), this.project(t.getNorthEast(), e)._subtract(i)])
        },
        _getCenterLayerPoint: function() {
            return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
        },
        _getCenterOffset: function(t) {
            return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
        },
        _limitCenter: function(t, e, i) {
            var n, o;
            return !i || (n = this.project(t, e),
            o = this.getSize().divideBy(2),
            o = new f(n.subtract(o),n.add(o)),
            o = this._getBoundsOffset(o, i, e),
            Math.abs(o.x) <= 1 && Math.abs(o.y) <= 1) ? t : this.unproject(n.add(o), e)
        },
        _limitOffset: function(t, e) {
            var i;
            return e ? (i = new f((i = this.getPixelBounds()).min.add(t),i.max.add(t)),
            t.add(this._getBoundsOffset(i, e))) : t
        },
        _getBoundsOffset: function(t, e, i) {
            e = _(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i)),
            i = e.min.subtract(t.min),
            e = e.max.subtract(t.max);
            return new p(this._rebound(i.x, -e.x),this._rebound(i.y, -e.y))
        },
        _rebound: function(t, e) {
            return 0 < t + e ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
        },
        _limitZoom: function(t) {
            var e = this.getMinZoom()
              , i = this.getMaxZoom()
              , n = b.any3d ? this.options.zoomSnap : 1;
            return n && (t = Math.round(t / n) * n),
            Math.max(e, Math.min(i, t))
        },
        _onPanTransitionStep: function() {
            this.fire("move")
        },
        _onPanTransitionEnd: function() {
            z(this._mapPane, "leaflet-pan-anim"),
            this.fire("moveend")
        },
        _tryAnimatedPan: function(t, e) {
            t = this._getCenterOffset(t)._trunc();
            return !(!0 !== (e && e.animate) && !this.getSize().contains(t)) && (this.panBy(t, e),
            !0)
        },
        _createAnimProxy: function() {
            var t = this._proxy = P("div", "leaflet-proxy leaflet-zoom-animated");
            this._panes.mapPane.appendChild(t),
            this.on("zoomanim", function(t) {
                var e = ue
                  , i = this._proxy.style[e];
                be(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)),
                i === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd()
            }, this),
            this.on("load moveend", this._animMoveEnd, this),
            this._on("unload", this._destroyAnimProxy, this)
        },
        _destroyAnimProxy: function() {
            T(this._proxy),
            this.off("load moveend", this._animMoveEnd, this),
            delete this._proxy
        },
        _animMoveEnd: function() {
            var t = this.getCenter()
              , e = this.getZoom();
            be(this._proxy, this.project(t, e), this.getZoomScale(e, 1))
        },
        _catchTransitionEnd: function(t) {
            this._animatingZoom && 0 <= t.propertyName.indexOf("transform") && this._onZoomTransitionEnd()
        },
        _nothingToAnimate: function() {
            return !this._container.getElementsByClassName("leaflet-zoom-animated").length
        },
        _tryAnimatedZoom: function(t, e, i) {
            if (!this._animatingZoom) {
                if (i = i || {},
                !this._zoomAnimated || !1 === i.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
                    return !1;
                var n = this.getZoomScale(e)
                  , n = this._getCenterOffset(t)._divideBy(1 - 1 / n);
                if (!0 !== i.animate && !this.getSize().contains(n))
                    return !1;
                x(function() {
                    this._moveStart(!0, i.noMoveStart || !1)._animateZoom(t, e, !0)
                }, this)
            }
            return !0
        },
        _animateZoom: function(t, e, i, n) {
            this._mapPane && (i && (this._animatingZoom = !0,
            this._animateToCenter = t,
            this._animateToZoom = e,
            M(this._mapPane, "leaflet-zoom-anim")),
            this.fire("zoomanim", {
                center: t,
                zoom: e,
                noUpdate: n
            }),
            this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom),
            this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
            setTimeout(a(this._onZoomTransitionEnd, this), 250))
        },
        _onZoomTransitionEnd: function() {
            this._animatingZoom && (this._mapPane && z(this._mapPane, "leaflet-zoom-anim"),
            this._animatingZoom = !1,
            this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
            this._tempFireZoomEvent && this.fire("zoom"),
            delete this._tempFireZoomEvent,
            this.fire("move"),
            this._moveEnd(!0))
        }
    });
    function Ue(t) {
        return new B(t)
    }
    var B = et.extend({
        options: {
            position: "topright"
        },
        initialize: function(t) {
            c(this, t)
        },
        getPosition: function() {
            return this.options.position
        },
        setPosition: function(t) {
            var e = this._map;
            return e && e.removeControl(this),
            this.options.position = t,
            e && e.addControl(this),
            this
        },
        getContainer: function() {
            return this._container
        },
        addTo: function(t) {
            this.remove(),
            this._map = t;
            var e = this._container = this.onAdd(t)
              , i = this.getPosition()
              , t = t._controlCorners[i];
            return M(e, "leaflet-control"),
            -1 !== i.indexOf("bottom") ? t.insertBefore(e, t.firstChild) : t.appendChild(e),
            this._map.on("unload", this.remove, this),
            this
        },
        remove: function() {
            return this._map && (T(this._container),
            this.onRemove && this.onRemove(this._map),
            this._map.off("unload", this.remove, this),
            this._map = null),
            this
        },
        _refocusOnMap: function(t) {
            this._map && t && 0 < t.screenX && 0 < t.screenY && this._map.getContainer().focus()
        }
    })
      , Ve = (A.include({
        addControl: function(t) {
            return t.addTo(this),
            this
        },
        removeControl: function(t) {
            return t.remove(),
            this
        },
        _initControlPos: function() {
            var i = this._controlCorners = {}
              , n = "leaflet-"
              , o = this._controlContainer = P("div", n + "control-container", this._container);
            function t(t, e) {
                i[t + e] = P("div", n + t + " " + n + e, o)
            }
            t("top", "left"),
            t("top", "right"),
            t("bottom", "left"),
            t("bottom", "right")
        },
        _clearControlPos: function() {
            for (var t in this._controlCorners)
                T(this._controlCorners[t]);
            T(this._controlContainer),
            delete this._controlCorners,
            delete this._controlContainer
        }
    }),
    B.extend({
        options: {
            collapsed: !0,
            position: "topright",
            autoZIndex: !0,
            hideSingleBase: !1,
            sortLayers: !1,
            sortFunction: function(t, e, i, n) {
                return i < n ? -1 : n < i ? 1 : 0
            }
        },
        initialize: function(t, e, i) {
            for (var n in c(this, i),
            this._layerControlInputs = [],
            this._layers = [],
            this._lastZIndex = 0,
            this._handlingClick = !1,
            this._preventClick = !1,
            t)
                this._addLayer(t[n], n);
            for (n in e)
                this._addLayer(e[n], n, !0)
        },
        onAdd: function(t) {
            this._initLayout(),
            this._update(),
            (this._map = t).on("zoomend", this._checkDisabledLayers, this);
            for (var e = 0; e < this._layers.length; e++)
                this._layers[e].layer.on("add remove", this._onLayerChange, this);
            return this._container
        },
        addTo: function(t) {
            return B.prototype.addTo.call(this, t),
            this._expandIfNotCollapsed()
        },
        onRemove: function() {
            this._map.off("zoomend", this._checkDisabledLayers, this);
            for (var t = 0; t < this._layers.length; t++)
                this._layers[t].layer.off("add remove", this._onLayerChange, this)
        },
        addBaseLayer: function(t, e) {
            return this._addLayer(t, e),
            this._map ? this._update() : this
        },
        addOverlay: function(t, e) {
            return this._addLayer(t, e, !0),
            this._map ? this._update() : this
        },
        removeLayer: function(t) {
            t.off("add remove", this._onLayerChange, this);
            t = this._getLayer(h(t));
            return t && this._layers.splice(this._layers.indexOf(t), 1),
            this._map ? this._update() : this
        },
        expand: function() {
            M(this._container, "leaflet-control-layers-expanded"),
            this._section.style.height = null;
            var t = this._map.getSize().y - (this._container.offsetTop + 50);
            return t < this._section.clientHeight ? (M(this._section, "leaflet-control-layers-scrollbar"),
            this._section.style.height = t + "px") : z(this._section, "leaflet-control-layers-scrollbar"),
            this._checkDisabledLayers(),
            this
        },
        collapse: function() {
            return z(this._container, "leaflet-control-layers-expanded"),
            this
        },
        _initLayout: function() {
            var t = "leaflet-control-layers"
              , e = this._container = P("div", t)
              , i = this.options.collapsed
              , n = (e.setAttribute("aria-haspopup", !0),
            Ie(e),
            Be(e),
            this._section = P("section", t + "-list"))
              , o = (i && (this._map.on("click", this.collapse, this),
            S(e, {
                mouseenter: this._expandSafely,
                mouseleave: this.collapse
            }, this)),
            this._layersLink = P("a", t + "-toggle", e));
            o.href = "#",
            o.title = "Layers",
            o.setAttribute("role", "button"),
            S(o, {
                keydown: function(t) {
                    13 === t.keyCode && this._expandSafely()
                },
                click: function(t) {
                    O(t),
                    this._expandSafely()
                }
            }, this),
            i || this.expand(),
            this._baseLayersList = P("div", t + "-base", n),
            this._separator = P("div", t + "-separator", n),
            this._overlaysList = P("div", t + "-overlays", n),
            e.appendChild(n)
        },
        _getLayer: function(t) {
            for (var e = 0; e < this._layers.length; e++)
                if (this._layers[e] && h(this._layers[e].layer) === t)
                    return this._layers[e]
        },
        _addLayer: function(t, e, i) {
            this._map && t.on("add remove", this._onLayerChange, this),
            this._layers.push({
                layer: t,
                name: e,
                overlay: i
            }),
            this.options.sortLayers && this._layers.sort(a(function(t, e) {
                return this.options.sortFunction(t.layer, e.layer, t.name, e.name)
            }, this)),
            this.options.autoZIndex && t.setZIndex && (this._lastZIndex++,
            t.setZIndex(this._lastZIndex)),
            this._expandIfNotCollapsed()
        },
        _update: function() {
            if (this._container) {
                me(this._baseLayersList),
                me(this._overlaysList),
                this._layerControlInputs = [];
                for (var t, e, i, n = 0, o = 0; o < this._layers.length; o++)
                    i = this._layers[o],
                    this._addItem(i),
                    e = e || i.overlay,
                    t = t || !i.overlay,
                    n += i.overlay ? 0 : 1;
                this.options.hideSingleBase && (this._baseLayersList.style.display = (t = t && 1 < n) ? "" : "none"),
                this._separator.style.display = e && t ? "" : "none"
            }
            return this
        },
        _onLayerChange: function(t) {
            this._handlingClick || this._update();
            var e = this._getLayer(h(t.target))
              , t = e.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
            t && this._map.fire(t, e)
        },
        _createRadioElement: function(t, e) {
            t = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>",
            e = document.createElement("div");
            return e.innerHTML = t,
            e.firstChild
        },
        _addItem: function(t) {
            var e, i = document.createElement("label"), n = this._map.hasLayer(t.layer), n = (t.overlay ? ((e = document.createElement("input")).type = "checkbox",
            e.className = "leaflet-control-layers-selector",
            e.defaultChecked = n) : e = this._createRadioElement("leaflet-base-layers_" + h(this), n),
            this._layerControlInputs.push(e),
            e.layerId = h(t.layer),
            S(e, "click", this._onInputClick, this),
            document.createElement("span")), o = (n.innerHTML = " " + t.name,
            document.createElement("span"));
            return i.appendChild(o),
            o.appendChild(e),
            o.appendChild(n),
            (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(i),
            this._checkDisabledLayers(),
            i
        },
        _onInputClick: function() {
            if (!this._preventClick) {
                var t, e, i = this._layerControlInputs, n = [], o = [];
                this._handlingClick = !0;
                for (var s = i.length - 1; 0 <= s; s--)
                    t = i[s],
                    e = this._getLayer(t.layerId).layer,
                    t.checked ? n.push(e) : t.checked || o.push(e);
                for (s = 0; s < o.length; s++)
                    this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
                for (s = 0; s < n.length; s++)
                    this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
                this._handlingClick = !1,
                this._refocusOnMap()
            }
        },
        _checkDisabledLayers: function() {
            for (var t, e, i = this._layerControlInputs, n = this._map.getZoom(), o = i.length - 1; 0 <= o; o--)
                t = i[o],
                e = this._getLayer(t.layerId).layer,
                t.disabled = void 0 !== e.options.minZoom && n < e.options.minZoom || void 0 !== e.options.maxZoom && n > e.options.maxZoom
        },
        _expandIfNotCollapsed: function() {
            return this._map && !this.options.collapsed && this.expand(),
            this
        },
        _expandSafely: function() {
            var t = this._section
              , e = (this._preventClick = !0,
            S(t, "click", O),
            this.expand(),
            this);
            setTimeout(function() {
                k(t, "click", O),
                e._preventClick = !1
            })
        }
    }))
      , qe = B.extend({
        options: {
            position: "topleft",
            zoomInText: '<span aria-hidden="true">+</span>',
            zoomInTitle: "Zoom in",
            zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
            zoomOutTitle: "Zoom out"
        },
        onAdd: function(t) {
            var e = "leaflet-control-zoom"
              , i = P("div", e + " leaflet-bar")
              , n = this.options;
            return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, e + "-in", i, this._zoomIn),
            this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, e + "-out", i, this._zoomOut),
            this._updateDisabled(),
            t.on("zoomend zoomlevelschange", this._updateDisabled, this),
            i
        },
        onRemove: function(t) {
            t.off("zoomend zoomlevelschange", this._updateDisabled, this)
        },
        disable: function() {
            return this._disabled = !0,
            this._updateDisabled(),
            this
        },
        enable: function() {
            return this._disabled = !1,
            this._updateDisabled(),
            this
        },
        _zoomIn: function(t) {
            !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
        },
        _zoomOut: function(t) {
            !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
        },
        _createButton: function(t, e, i, n, o) {
            i = P("a", i, n);
            return i.innerHTML = t,
            i.href = "#",
            i.title = e,
            i.setAttribute("role", "button"),
            i.setAttribute("aria-label", e),
            Ie(i),
            S(i, "click", Re),
            S(i, "click", o, this),
            S(i, "click", this._refocusOnMap, this),
            i
        },
        _updateDisabled: function() {
            var t = this._map
              , e = "leaflet-disabled";
            z(this._zoomInButton, e),
            z(this._zoomOutButton, e),
            this._zoomInButton.setAttribute("aria-disabled", "false"),
            this._zoomOutButton.setAttribute("aria-disabled", "false"),
            !this._disabled && t._zoom !== t.getMinZoom() || (M(this._zoomOutButton, e),
            this._zoomOutButton.setAttribute("aria-disabled", "true")),
            !this._disabled && t._zoom !== t.getMaxZoom() || (M(this._zoomInButton, e),
            this._zoomInButton.setAttribute("aria-disabled", "true"))
        }
    })
      , Ge = (A.mergeOptions({
        zoomControl: !0
    }),
    A.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new qe,
        this.addControl(this.zoomControl))
    }),
    B.extend({
        options: {
            position: "bottomleft",
            maxWidth: 100,
            metric: !0,
            imperial: !0
        },
        onAdd: function(t) {
            var e = "leaflet-control-scale"
              , i = P("div", e)
              , n = this.options;
            return this._addScales(n, e + "-line", i),
            t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this),
            t.whenReady(this._update, this),
            i
        },
        onRemove: function(t) {
            t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
        },
        _addScales: function(t, e, i) {
            t.metric && (this._mScale = P("div", e, i)),
            t.imperial && (this._iScale = P("div", e, i))
        },
        _update: function() {
            var t = this._map
              , e = t.getSize().y / 2
              , t = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
            this._updateScales(t)
        },
        _updateScales: function(t) {
            this.options.metric && t && this._updateMetric(t),
            this.options.imperial && t && this._updateImperial(t)
        },
        _updateMetric: function(t) {
            var e = this._getRoundNum(t);
            this._updateScale(this._mScale, e < 1e3 ? e + " m" : e / 1e3 + " km", e / t)
        },
        _updateImperial: function(t) {
            var e, i, t = 3.2808399 * t;
            5280 < t ? (i = this._getRoundNum(e = t / 5280),
            this._updateScale(this._iScale, i + " mi", i / e)) : (i = this._getRoundNum(t),
            this._updateScale(this._iScale, i + " ft", i / t))
        },
        _updateScale: function(t, e, i) {
            t.style.width = Math.round(this.options.maxWidth * i) + "px",
            t.innerHTML = e
        },
        _getRoundNum: function(t) {
            var e = Math.pow(10, (Math.floor(t) + "").length - 1)
              , t = t / e;
            return e * (t = 10 <= t ? 10 : 5 <= t ? 5 : 3 <= t ? 3 : 2 <= t ? 2 : 1)
        }
    }))
      , Ke = B.extend({
        options: {
            position: "bottomright",
            prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (b.inlineSvg ? '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> ' : "") + "Leaflet</a>"
        },
        initialize: function(t) {
            c(this, t),
            this._attributions = {}
        },
        onAdd: function(t) {
            for (var e in (t.attributionControl = this)._container = P("div", "leaflet-control-attribution"),
            Ie(this._container),
            t._layers)
                t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
            return this._update(),
            t.on("layeradd", this._addAttribution, this),
            this._container
        },
        onRemove: function(t) {
            t.off("layeradd", this._addAttribution, this)
        },
        _addAttribution: function(t) {
            t.layer.getAttribution && (this.addAttribution(t.layer.getAttribution()),
            t.layer.once("remove", function() {
                this.removeAttribution(t.layer.getAttribution())
            }, this))
        },
        setPrefix: function(t) {
            return this.options.prefix = t,
            this._update(),
            this
        },
        addAttribution: function(t) {
            return t && (this._attributions[t] || (this._attributions[t] = 0),
            this._attributions[t]++,
            this._update()),
            this
        },
        removeAttribution: function(t) {
            return t && this._attributions[t] && (this._attributions[t]--,
            this._update()),
            this
        },
        _update: function() {
            if (this._map) {
                var t, e = [];
                for (t in this._attributions)
                    this._attributions[t] && e.push(t);
                var i = [];
                this.options.prefix && i.push(this.options.prefix),
                e.length && i.push(e.join(", ")),
                this._container.innerHTML = i.join(' <span aria-hidden="true">|</span> ')
            }
        }
    })
      , n = (A.mergeOptions({
        attributionControl: !0
    }),
    A.addInitHook(function() {
        this.options.attributionControl && (new Ke).addTo(this)
    }),
    B.Layers = Ve,
    B.Zoom = qe,
    B.Scale = Ge,
    B.Attribution = Ke,
    Ue.layers = function(t, e, i) {
        return new Ve(t,e,i)
    }
    ,
    Ue.zoom = function(t) {
        return new qe(t)
    }
    ,
    Ue.scale = function(t) {
        return new Ge(t)
    }
    ,
    Ue.attribution = function(t) {
        return new Ke(t)
    }
    ,
    et.extend({
        initialize: function(t) {
            this._map = t
        },
        enable: function() {
            return this._enabled || (this._enabled = !0,
            this.addHooks()),
            this
        },
        disable: function() {
            return this._enabled && (this._enabled = !1,
            this.removeHooks()),
            this
        },
        enabled: function() {
            return !!this._enabled
        }
    }))
      , ft = (n.addTo = function(t, e) {
        return t.addHandler(e, this),
        this
    }
    ,
    {
        Events: e
    })
      , Ye = b.touch ? "touchstart mousedown" : "mousedown"
      , Xe = it.extend({
        options: {
            clickTolerance: 3
        },
        initialize: function(t, e, i, n) {
            c(this, n),
            this._element = t,
            this._dragStartTarget = e || t,
            this._preventOutline = i
        },
        enable: function() {
            this._enabled || (S(this._dragStartTarget, Ye, this._onDown, this),
            this._enabled = !0)
        },
        disable: function() {
            this._enabled && (Xe._dragging === this && this.finishDrag(!0),
            k(this._dragStartTarget, Ye, this._onDown, this),
            this._enabled = !1,
            this._moved = !1)
        },
        _onDown: function(t) {
            var e, i;
            this._enabled && (this._moved = !1,
            ve(this._element, "leaflet-zoom-anim") || (t.touches && 1 !== t.touches.length ? Xe._dragging === this && this.finishDrag() : Xe._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || ((Xe._dragging = this)._preventOutline && Me(this._element),
            Le(),
            re(),
            this._moving || (this.fire("down"),
            i = t.touches ? t.touches[0] : t,
            e = Ce(this._element),
            this._startPoint = new p(i.clientX,i.clientY),
            this._startPos = Pe(this._element),
            this._parentScale = Ze(e),
            i = "mousedown" === t.type,
            S(document, i ? "mousemove" : "touchmove", this._onMove, this),
            S(document, i ? "mouseup" : "touchend touchcancel", this._onUp, this)))))
        },
        _onMove: function(t) {
            var e;
            this._enabled && (t.touches && 1 < t.touches.length ? this._moved = !0 : !(e = new p((e = t.touches && 1 === t.touches.length ? t.touches[0] : t).clientX,e.clientY)._subtract(this._startPoint)).x && !e.y || Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance || (e.x /= this._parentScale.x,
            e.y /= this._parentScale.y,
            O(t),
            this._moved || (this.fire("dragstart"),
            this._moved = !0,
            M(document.body, "leaflet-dragging"),
            this._lastTarget = t.target || t.srcElement,
            window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement),
            M(this._lastTarget, "leaflet-drag-target")),
            this._newPos = this._startPos.add(e),
            this._moving = !0,
            this._lastEvent = t,
            this._updatePosition()))
        },
        _updatePosition: function() {
            var t = {
                originalEvent: this._lastEvent
            };
            this.fire("predrag", t),
            Z(this._element, this._newPos),
            this.fire("drag", t)
        },
        _onUp: function() {
            this._enabled && this.finishDrag()
        },
        finishDrag: function(t) {
            z(document.body, "leaflet-dragging"),
            this._lastTarget && (z(this._lastTarget, "leaflet-drag-target"),
            this._lastTarget = null),
            k(document, "mousemove touchmove", this._onMove, this),
            k(document, "mouseup touchend touchcancel", this._onUp, this),
            Te(),
            ae();
            var e = this._moved && this._moving;
            this._moving = !1,
            Xe._dragging = !1,
            e && this.fire("dragend", {
                noInertia: t,
                distance: this._newPos.distanceTo(this._startPos)
            })
        }
    });
    function Je(t, e, i) {
        for (var n, o, s, r, a, h, l, u = [1, 4, 2, 8], c = 0, d = t.length; c < d; c++)
            t[c]._code = si(t[c], e);
        for (s = 0; s < 4; s++) {
            for (h = u[s],
            n = [],
            c = 0,
            o = (d = t.length) - 1; c < d; o = c++)
                r = t[c],
                a = t[o],
                r._code & h ? a._code & h || ((l = oi(a, r, h, e, i))._code = si(l, e),
                n.push(l)) : (a._code & h && ((l = oi(a, r, h, e, i))._code = si(l, e),
                n.push(l)),
                n.push(r));
            t = n
        }
        return t
    }
    function $e(t, e) {
        var i, n, o, s, r, a, h;
        if (!t || 0 === t.length)
            throw new Error("latlngs not passed");
        I(t) || (console.warn("latlngs are not flat! Only the first ring will be used"),
        t = t[0]);
        for (var l = w([0, 0]), u = g(t), c = (u.getNorthWest().distanceTo(u.getSouthWest()) * u.getNorthEast().distanceTo(u.getNorthWest()) < 1700 && (l = Qe(t)),
        t.length), d = [], _ = 0; _ < c; _++) {
            var p = w(t[_]);
            d.push(e.project(w([p.lat - l.lat, p.lng - l.lng])))
        }
        for (_ = r = a = h = 0,
        i = c - 1; _ < c; i = _++)
            n = d[_],
            o = d[i],
            s = n.y * o.x - o.y * n.x,
            a += (n.x + o.x) * s,
            h += (n.y + o.y) * s,
            r += 3 * s;
        u = 0 === r ? d[0] : [a / r, h / r],
        u = e.unproject(m(u));
        return w([u.lat + l.lat, u.lng + l.lng])
    }
    function Qe(t) {
        for (var e = 0, i = 0, n = 0, o = 0; o < t.length; o++) {
            var s = w(t[o]);
            e += s.lat,
            i += s.lng,
            n++
        }
        return w([e / n, i / n])
    }
    var ti, gt = {
        __proto__: null,
        clipPolygon: Je,
        polygonCenter: $e,
        centroid: Qe
    };
    function ei(t, e) {
        if (e && t.length) {
            var i = t = function(t, e) {
                for (var i = [t[0]], n = 1, o = 0, s = t.length; n < s; n++)
                    (function(t, e) {
                        var i = e.x - t.x
                          , e = e.y - t.y;
                        return i * i + e * e
                    }
                    )(t[n], t[o]) > e && (i.push(t[n]),
                    o = n);
                o < s - 1 && i.push(t[s - 1]);
                return i
            }(t, e = e * e)
              , n = i.length
              , o = new (typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(n);
            o[0] = o[n - 1] = 1,
            function t(e, i, n, o, s) {
                var r, a, h, l = 0;
                for (a = o + 1; a <= s - 1; a++)
                    h = ri(e[a], e[o], e[s], !0),
                    l < h && (r = a,
                    l = h);
                n < l && (i[r] = 1,
                t(e, i, n, o, r),
                t(e, i, n, r, s))
            }(i, o, e, 0, n - 1);
            var s, r = [];
            for (s = 0; s < n; s++)
                o[s] && r.push(i[s]);
            return r
        }
        return t.slice()
    }
    function ii(t, e, i) {
        return Math.sqrt(ri(t, e, i, !0))
    }
    function ni(t, e, i, n, o) {
        var s, r, a, h = n ? ti : si(t, i), l = si(e, i);
        for (ti = l; ; ) {
            if (!(h | l))
                return [t, e];
            if (h & l)
                return !1;
            a = si(r = oi(t, e, s = h || l, i, o), i),
            s === h ? (t = r,
            h = a) : (e = r,
            l = a)
        }
    }
    function oi(t, e, i, n, o) {
        var s, r, a = e.x - t.x, e = e.y - t.y, h = n.min, n = n.max;
        return 8 & i ? (s = t.x + a * (n.y - t.y) / e,
        r = n.y) : 4 & i ? (s = t.x + a * (h.y - t.y) / e,
        r = h.y) : 2 & i ? (s = n.x,
        r = t.y + e * (n.x - t.x) / a) : 1 & i && (s = h.x,
        r = t.y + e * (h.x - t.x) / a),
        new p(s,r,o)
    }
    function si(t, e) {
        var i = 0;
        return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2),
        t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8),
        i
    }
    function ri(t, e, i, n) {
        var o = e.x
          , e = e.y
          , s = i.x - o
          , r = i.y - e
          , a = s * s + r * r;
        return 0 < a && (1 < (a = ((t.x - o) * s + (t.y - e) * r) / a) ? (o = i.x,
        e = i.y) : 0 < a && (o += s * a,
        e += r * a)),
        s = t.x - o,
        r = t.y - e,
        n ? s * s + r * r : new p(o,e)
    }
    function I(t) {
        return !d(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
    }
    function ai(t) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),
        I(t)
    }
    function hi(t, e) {
        var i, n, o, s, r, a;
        if (!t || 0 === t.length)
            throw new Error("latlngs not passed");
        I(t) || (console.warn("latlngs are not flat! Only the first ring will be used"),
        t = t[0]);
        for (var h = w([0, 0]), l = g(t), u = (l.getNorthWest().distanceTo(l.getSouthWest()) * l.getNorthEast().distanceTo(l.getNorthWest()) < 1700 && (h = Qe(t)),
        t.length), c = [], d = 0; d < u; d++) {
            var _ = w(t[d]);
            c.push(e.project(w([_.lat - h.lat, _.lng - h.lng])))
        }
        for (i = d = 0; d < u - 1; d++)
            i += c[d].distanceTo(c[d + 1]) / 2;
        if (0 === i)
            a = c[0];
        else
            for (n = d = 0; d < u - 1; d++)
                if (o = c[d],
                s = c[d + 1],
                i < (n += r = o.distanceTo(s))) {
                    a = [s.x - (r = (n - i) / r) * (s.x - o.x), s.y - r * (s.y - o.y)];
                    break
                }
        l = e.unproject(m(a));
        return w([l.lat + h.lat, l.lng + h.lng])
    }
    var vt = {
        __proto__: null,
        simplify: ei,
        pointToSegmentDistance: ii,
        closestPointOnSegment: function(t, e, i) {
            return ri(t, e, i)
        },
        clipSegment: ni,
        _getEdgeIntersection: oi,
        _getBitCode: si,
        _sqClosestPointOnSegment: ri,
        isFlat: I,
        _flat: ai,
        polylineCenter: hi
    }
      , yt = {
        project: function(t) {
            return new p(t.lng,t.lat)
        },
        unproject: function(t) {
            return new v(t.y,t.x)
        },
        bounds: new f([-180, -90],[180, 90])
    }
      , xt = {
        R: 6378137,
        R_MINOR: 6356752.314245179,
        bounds: new f([-20037508.34279, -15496570.73972],[20037508.34279, 18764656.23138]),
        project: function(t) {
            var e = Math.PI / 180
              , i = this.R
              , n = t.lat * e
              , o = this.R_MINOR / i
              , o = Math.sqrt(1 - o * o)
              , s = o * Math.sin(n)
              , s = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - s) / (1 + s), o / 2)
              , n = -i * Math.log(Math.max(s, 1e-10));
            return new p(t.lng * e * i,n)
        },
        unproject: function(t) {
            for (var e, i = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), r = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), h = 0, l = .1; h < 15 && 1e-7 < Math.abs(l); h++)
                e = s * Math.sin(a),
                e = Math.pow((1 - e) / (1 + e), s / 2),
                a += l = Math.PI / 2 - 2 * Math.atan(r * e) - a;
            return new v(a * i,t.x * i / n)
        }
    }
      , wt = {
        __proto__: null,
        LonLat: yt,
        Mercator: xt,
        SphericalMercator: rt
    }
      , Pt = l({}, st, {
        code: "EPSG:3395",
        projection: xt,
        transformation: ht(bt = .5 / (Math.PI * xt.R), .5, -bt, .5)
    })
      , li = l({}, st, {
        code: "EPSG:4326",
        projection: yt,
        transformation: ht(1 / 180, 1, -1 / 180, .5)
    })
      , Lt = l({}, ot, {
        projection: yt,
        transformation: ht(1, 0, -1, 0),
        scale: function(t) {
            return Math.pow(2, t)
        },
        zoom: function(t) {
            return Math.log(t) / Math.LN2
        },
        distance: function(t, e) {
            var i = e.lng - t.lng
              , e = e.lat - t.lat;
            return Math.sqrt(i * i + e * e)
        },
        infinite: !0
    })
      , o = (ot.Earth = st,
    ot.EPSG3395 = Pt,
    ot.EPSG3857 = lt,
    ot.EPSG900913 = ut,
    ot.EPSG4326 = li,
    ot.Simple = Lt,
    it.extend({
        options: {
            pane: "overlayPane",
            attribution: null,
            bubblingMouseEvents: !0
        },
        addTo: function(t) {
            return t.addLayer(this),
            this
        },
        remove: function() {
            return this.removeFrom(this._map || this._mapToAdd)
        },
        removeFrom: function(t) {
            return t && t.removeLayer(this),
            this
        },
        getPane: function(t) {
            return this._map.getPane(t ? this.options[t] || t : this.options.pane)
        },
        addInteractiveTarget: function(t) {
            return this._map._targets[h(t)] = this
        },
        removeInteractiveTarget: function(t) {
            return delete this._map._targets[h(t)],
            this
        },
        getAttribution: function() {
            return this.options.attribution
        },
        _layerAdd: function(t) {
            var e, i = t.target;
            i.hasLayer(this) && (this._map = i,
            this._zoomAnimated = i._zoomAnimated,
            this.getEvents && (e = this.getEvents(),
            i.on(e, this),
            this.once("remove", function() {
                i.off(e, this)
            }, this)),
            this.onAdd(i),
            this.fire("add"),
            i.fire("layeradd", {
                layer: this
            }))
        }
    }))
      , ui = (A.include({
        addLayer: function(t) {
            var e;
            if (t._layerAdd)
                return e = h(t),
                this._layers[e] || ((this._layers[e] = t)._mapToAdd = this,
                t.beforeAdd && t.beforeAdd(this),
                this.whenReady(t._layerAdd, t)),
                this;
            throw new Error("The provided object is not a Layer.")
        },
        removeLayer: function(t) {
            var e = h(t);
            return this._layers[e] && (this._loaded && t.onRemove(this),
            delete this._layers[e],
            this._loaded && (this.fire("layerremove", {
                layer: t
            }),
            t.fire("remove")),
            t._map = t._mapToAdd = null),
            this
        },
        hasLayer: function(t) {
            return h(t)in this._layers
        },
        eachLayer: function(t, e) {
            for (var i in this._layers)
                t.call(e, this._layers[i]);
            return this
        },
        _addLayers: function(t) {
            for (var e = 0, i = (t = t ? d(t) ? t : [t] : []).length; e < i; e++)
                this.addLayer(t[e])
        },
        _addZoomLimit: function(t) {
            isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[h(t)] = t,
            this._updateZoomLevels())
        },
        _removeZoomLimit: function(t) {
            t = h(t);
            this._zoomBoundLayers[t] && (delete this._zoomBoundLayers[t],
            this._updateZoomLevels())
        },
        _updateZoomLevels: function() {
            var t, e = 1 / 0, i = -1 / 0, n = this._getZoomSpan();
            for (t in this._zoomBoundLayers)
                var o = this._zoomBoundLayers[t].options
                  , e = void 0 === o.minZoom ? e : Math.min(e, o.minZoom)
                  , i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom);
            this._layersMaxZoom = i === -1 / 0 ? void 0 : i,
            this._layersMinZoom = e === 1 / 0 ? void 0 : e,
            n !== this._getZoomSpan() && this.fire("zoomlevelschange"),
            void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom),
            void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
        }
    }),
    o.extend({
        initialize: function(t, e) {
            var i, n;
            if (c(this, e),
            this._layers = {},
            t)
                for (i = 0,
                n = t.length; i < n; i++)
                    this.addLayer(t[i])
        },
        addLayer: function(t) {
            var e = this.getLayerId(t);
            return this._layers[e] = t,
            this._map && this._map.addLayer(t),
            this
        },
        removeLayer: function(t) {
            t = t in this._layers ? t : this.getLayerId(t);
            return this._map && this._layers[t] && this._map.removeLayer(this._layers[t]),
            delete this._layers[t],
            this
        },
        hasLayer: function(t) {
            return ("number" == typeof t ? t : this.getLayerId(t))in this._layers
        },
        clearLayers: function() {
            return this.eachLayer(this.removeLayer, this)
        },
        invoke: function(t) {
            var e, i, n = Array.prototype.slice.call(arguments, 1);
            for (e in this._layers)
                (i = this._layers[e])[t] && i[t].apply(i, n);
            return this
        },
        onAdd: function(t) {
            this.eachLayer(t.addLayer, t)
        },
        onRemove: function(t) {
            this.eachLayer(t.removeLayer, t)
        },
        eachLayer: function(t, e) {
            for (var i in this._layers)
                t.call(e, this._layers[i]);
            return this
        },
        getLayer: function(t) {
            return this._layers[t]
        },
        getLayers: function() {
            var t = [];
            return this.eachLayer(t.push, t),
            t
        },
        setZIndex: function(t) {
            return this.invoke("setZIndex", t)
        },
        getLayerId: h
    }))
      , ci = ui.extend({
        addLayer: function(t) {
            return this.hasLayer(t) ? this : (t.addEventParent(this),
            ui.prototype.addLayer.call(this, t),
            this.fire("layeradd", {
                layer: t
            }))
        },
        removeLayer: function(t) {
            return this.hasLayer(t) ? ((t = t in this._layers ? this._layers[t] : t).removeEventParent(this),
            ui.prototype.removeLayer.call(this, t),
            this.fire("layerremove", {
                layer: t
            })) : this
        },
        setStyle: function(t) {
            return this.invoke("setStyle", t)
        },
        bringToFront: function() {
            return this.invoke("bringToFront")
        },
        bringToBack: function() {
            return this.invoke("bringToBack")
        },
        getBounds: function() {
            var t, e = new s;
            for (t in this._layers) {
                var i = this._layers[t];
                e.extend(i.getBounds ? i.getBounds() : i.getLatLng())
            }
            return e
        }
    })
      , di = et.extend({
        options: {
            popupAnchor: [0, 0],
            tooltipAnchor: [0, 0],
            crossOrigin: !1
        },
        initialize: function(t) {
            c(this, t)
        },
        createIcon: function(t) {
            return this._createIcon("icon", t)
        },
        createShadow: function(t) {
            return this._createIcon("shadow", t)
        },
        _createIcon: function(t, e) {
            var i = this._getIconUrl(t);
            if (i)
                return i = this._createImg(i, e && "IMG" === e.tagName ? e : null),
                this._setIconStyles(i, t),
                !this.options.crossOrigin && "" !== this.options.crossOrigin || (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
                i;
            if ("icon" === t)
                throw new Error("iconUrl not set in Icon options (see the docs).");
            return null
        },
        _setIconStyles: function(t, e) {
            var i = this.options
              , n = i[e + "Size"]
              , n = m(n = "number" == typeof n ? [n, n] : n)
              , o = m("shadow" === e && i.shadowAnchor || i.iconAnchor || n && n.divideBy(2, !0));
            t.className = "leaflet-marker-" + e + " " + (i.className || ""),
            o && (t.style.marginLeft = -o.x + "px",
            t.style.marginTop = -o.y + "px"),
            n && (t.style.width = n.x + "px",
            t.style.height = n.y + "px")
        },
        _createImg: function(t, e) {
            return (e = e || document.createElement("img")).src = t,
            e
        },
        _getIconUrl: function(t) {
            return b.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
        }
    });
    var _i = di.extend({
        options: {
            iconUrl: "marker-icon.png",
            iconRetinaUrl: "marker-icon-2x.png",
            shadowUrl: "marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowSize: [41, 41]
        },
        _getIconUrl: function(t) {
            return "string" != typeof _i.imagePath && (_i.imagePath = this._detectIconPath()),
            (this.options.imagePath || _i.imagePath) + di.prototype._getIconUrl.call(this, t)
        },
        _stripUrl: function(t) {
            function e(t, e, i) {
                return (e = e.exec(t)) && e[i]
            }
            return (t = e(t, /^url\((['"])?(.+)\1\)$/, 2)) && e(t, /^(.*)marker-icon\.png$/, 1)
        },
        _detectIconPath: function() {
            var t = P("div", "leaflet-default-icon-path", document.body)
              , e = pe(t, "background-image") || pe(t, "backgroundImage");
            return document.body.removeChild(t),
            (e = this._stripUrl(e)) ? e : (t = document.querySelector('link[href$="leaflet.css"]')) ? t.href.substring(0, t.href.length - "leaflet.css".length - 1) : ""
        }
    })
      , pi = n.extend({
        initialize: function(t) {
            this._marker = t
        },
        addHooks: function() {
            var t = this._marker._icon;
            this._draggable || (this._draggable = new Xe(t,t,!0)),
            this._draggable.on({
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd
            }, this).enable(),
            M(t, "leaflet-marker-draggable")
        },
        removeHooks: function() {
            this._draggable.off({
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd
            }, this).disable(),
            this._marker._icon && z(this._marker._icon, "leaflet-marker-draggable")
        },
        moved: function() {
            return this._draggable && this._draggable._moved
        },
        _adjustPan: function(t) {
            var e = this._marker
              , i = e._map
              , n = this._marker.options.autoPanSpeed
              , o = this._marker.options.autoPanPadding
              , s = Pe(e._icon)
              , r = i.getPixelBounds()
              , a = i.getPixelOrigin()
              , a = _(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o));
            a.contains(s) || (o = m((Math.max(a.max.x, s.x) - a.max.x) / (r.max.x - a.max.x) - (Math.min(a.min.x, s.x) - a.min.x) / (r.min.x - a.min.x), (Math.max(a.max.y, s.y) - a.max.y) / (r.max.y - a.max.y) - (Math.min(a.min.y, s.y) - a.min.y) / (r.min.y - a.min.y)).multiplyBy(n),
            i.panBy(o, {
                animate: !1
            }),
            this._draggable._newPos._add(o),
            this._draggable._startPos._add(o),
            Z(e._icon, this._draggable._newPos),
            this._onDrag(t),
            this._panRequest = x(this._adjustPan.bind(this, t)))
        },
        _onDragStart: function() {
            this._oldLatLng = this._marker.getLatLng(),
            this._marker.closePopup && this._marker.closePopup(),
            this._marker.fire("movestart").fire("dragstart")
        },
        _onPreDrag: function(t) {
            this._marker.options.autoPan && (r(this._panRequest),
            this._panRequest = x(this._adjustPan.bind(this, t)))
        },
        _onDrag: function(t) {
            var e = this._marker
              , i = e._shadow
              , n = Pe(e._icon)
              , o = e._map.layerPointToLatLng(n);
            i && Z(i, n),
            e._latlng = o,
            t.latlng = o,
            t.oldLatLng = this._oldLatLng,
            e.fire("move", t).fire("drag", t)
        },
        _onDragEnd: function(t) {
            r(this._panRequest),
            delete this._oldLatLng,
            this._marker.fire("moveend").fire("dragend", t)
        }
    })
      , mi = o.extend({
        options: {
            icon: new _i,
            interactive: !0,
            keyboard: !0,
            title: "",
            alt: "Marker",
            zIndexOffset: 0,
            opacity: 1,
            riseOnHover: !1,
            riseOffset: 250,
            pane: "markerPane",
            shadowPane: "shadowPane",
            bubblingMouseEvents: !1,
            autoPanOnFocus: !0,
            draggable: !1,
            autoPan: !1,
            autoPanPadding: [50, 50],
            autoPanSpeed: 10
        },
        initialize: function(t, e) {
            c(this, e),
            this._latlng = w(t)
        },
        onAdd: function(t) {
            this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation,
            this._zoomAnimated && t.on("zoomanim", this._animateZoom, this),
            this._initIcon(),
            this.update()
        },
        onRemove: function(t) {
            this.dragging && this.dragging.enabled() && (this.options.draggable = !0,
            this.dragging.removeHooks()),
            delete this.dragging,
            this._zoomAnimated && t.off("zoomanim", this._animateZoom, this),
            this._removeIcon(),
            this._removeShadow()
        },
        getEvents: function() {
            return {
                zoom: this.update,
                viewreset: this.update
            }
        },
        getLatLng: function() {
            return this._latlng
        },
        setLatLng: function(t) {
            var e = this._latlng;
            return this._latlng = w(t),
            this.update(),
            this.fire("move", {
                oldLatLng: e,
                latlng: this._latlng
            })
        },
        setZIndexOffset: function(t) {
            return this.options.zIndexOffset = t,
            this.update()
        },
        getIcon: function() {
            return this.options.icon
        },
        setIcon: function(t) {
            return this.options.icon = t,
            this._map && (this._initIcon(),
            this.update()),
            this._popup && this.bindPopup(this._popup, this._popup.options),
            this
        },
        getElement: function() {
            return this._icon
        },
        update: function() {
            var t;
            return this._icon && this._map && (t = this._map.latLngToLayerPoint(this._latlng).round(),
            this._setPos(t)),
            this
        },
        _initIcon: function() {
            var t = this.options
              , e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide")
              , i = t.icon.createIcon(this._icon)
              , n = !1
              , i = (i !== this._icon && (this._icon && this._removeIcon(),
            n = !0,
            t.title && (i.title = t.title),
            "IMG" === i.tagName && (i.alt = t.alt || "")),
            M(i, e),
            t.keyboard && (i.tabIndex = "0",
            i.setAttribute("role", "button")),
            this._icon = i,
            t.riseOnHover && this.on({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
            }),
            this.options.autoPanOnFocus && S(i, "focus", this._panOnFocus, this),
            t.icon.createShadow(this._shadow))
              , o = !1;
            i !== this._shadow && (this._removeShadow(),
            o = !0),
            i && (M(i, e),
            i.alt = ""),
            this._shadow = i,
            t.opacity < 1 && this._updateOpacity(),
            n && this.getPane().appendChild(this._icon),
            this._initInteraction(),
            i && o && this.getPane(t.shadowPane).appendChild(this._shadow)
        },
        _removeIcon: function() {
            this.options.riseOnHover && this.off({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
            }),
            this.options.autoPanOnFocus && k(this._icon, "focus", this._panOnFocus, this),
            T(this._icon),
            this.removeInteractiveTarget(this._icon),
            this._icon = null
        },
        _removeShadow: function() {
            this._shadow && T(this._shadow),
            this._shadow = null
        },
        _setPos: function(t) {
            this._icon && Z(this._icon, t),
            this._shadow && Z(this._shadow, t),
            this._zIndex = t.y + this.options.zIndexOffset,
            this._resetZIndex()
        },
        _updateZIndex: function(t) {
            this._icon && (this._icon.style.zIndex = this._zIndex + t)
        },
        _animateZoom: function(t) {
            t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
            this._setPos(t)
        },
        _initInteraction: function() {
            var t;
            this.options.interactive && (M(this._icon, "leaflet-interactive"),
            this.addInteractiveTarget(this._icon),
            pi && (t = this.options.draggable,
            this.dragging && (t = this.dragging.enabled(),
            this.dragging.disable()),
            this.dragging = new pi(this),
            t && this.dragging.enable()))
        },
        setOpacity: function(t) {
            return this.options.opacity = t,
            this._map && this._updateOpacity(),
            this
        },
        _updateOpacity: function() {
            var t = this.options.opacity;
            this._icon && C(this._icon, t),
            this._shadow && C(this._shadow, t)
        },
        _bringToFront: function() {
            this._updateZIndex(this.options.riseOffset)
        },
        _resetZIndex: function() {
            this._updateZIndex(0)
        },
        _panOnFocus: function() {
            var t, e, i = this._map;
            i && (t = (e = this.options.icon.options).iconSize ? m(e.iconSize) : m(0, 0),
            e = e.iconAnchor ? m(e.iconAnchor) : m(0, 0),
            i.panInside(this._latlng, {
                paddingTopLeft: e,
                paddingBottomRight: t.subtract(e)
            }))
        },
        _getPopupAnchor: function() {
            return this.options.icon.options.popupAnchor
        },
        _getTooltipAnchor: function() {
            return this.options.icon.options.tooltipAnchor
        }
    });
    var fi = o.extend({
        options: {
            stroke: !0,
            color: "#3388ff",
            weight: 3,
            opacity: 1,
            lineCap: "round",
            lineJoin: "round",
            dashArray: null,
            dashOffset: null,
            fill: !1,
            fillColor: null,
            fillOpacity: .2,
            fillRule: "evenodd",
            interactive: !0,
            bubblingMouseEvents: !0
        },
        beforeAdd: function(t) {
            this._renderer = t.getRenderer(this)
        },
        onAdd: function() {
            this._renderer._initPath(this),
            this._reset(),
            this._renderer._addPath(this)
        },
        onRemove: function() {
            this._renderer._removePath(this)
        },
        redraw: function() {
            return this._map && this._renderer._updatePath(this),
            this
        },
        setStyle: function(t) {
            return c(this, t),
            this._renderer && (this._renderer._updateStyle(this),
            this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()),
            this
        },
        bringToFront: function() {
            return this._renderer && this._renderer._bringToFront(this),
            this
        },
        bringToBack: function() {
            return this._renderer && this._renderer._bringToBack(this),
            this
        },
        getElement: function() {
            return this._path
        },
        _reset: function() {
            this._project(),
            this._update()
        },
        _clickTolerance: function() {
            return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0)
        }
    })
      , gi = fi.extend({
        options: {
            fill: !0,
            radius: 10
        },
        initialize: function(t, e) {
            c(this, e),
            this._latlng = w(t),
            this._radius = this.options.radius
        },
        setLatLng: function(t) {
            var e = this._latlng;
            return this._latlng = w(t),
            this.redraw(),
            this.fire("move", {
                oldLatLng: e,
                latlng: this._latlng
            })
        },
        getLatLng: function() {
            return this._latlng
        },
        setRadius: function(t) {
            return this.options.radius = this._radius = t,
            this.redraw()
        },
        getRadius: function() {
            return this._radius
        },
        setStyle: function(t) {
            var e = t && t.radius || this._radius;
            return fi.prototype.setStyle.call(this, t),
            this.setRadius(e),
            this
        },
        _project: function() {
            this._point = this._map.latLngToLayerPoint(this._latlng),
            this._updateBounds()
        },
        _updateBounds: function() {
            var t = this._radius
              , e = this._radiusY || t
              , i = this._clickTolerance()
              , t = [t + i, e + i];
            this._pxBounds = new f(this._point.subtract(t),this._point.add(t))
        },
        _update: function() {
            this._map && this._updatePath()
        },
        _updatePath: function() {
            this._renderer._updateCircle(this)
        },
        _empty: function() {
            return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
        },
        _containsPoint: function(t) {
            return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
        }
    });
    var vi = gi.extend({
        initialize: function(t, e, i) {
            if (c(this, e = "number" == typeof e ? l({}, i, {
                radius: e
            }) : e),
            this._latlng = w(t),
            isNaN(this.options.radius))
                throw new Error("Circle radius cannot be NaN");
            this._mRadius = this.options.radius
        },
        setRadius: function(t) {
            return this._mRadius = t,
            this.redraw()
        },
        getRadius: function() {
            return this._mRadius
        },
        getBounds: function() {
            var t = [this._radius, this._radiusY || this._radius];
            return new s(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))
        },
        setStyle: fi.prototype.setStyle,
        _project: function() {
            var t, e, i, n, o, s = this._latlng.lng, r = this._latlng.lat, a = this._map, h = a.options.crs;
            h.distance === st.distance ? (n = Math.PI / 180,
            o = this._mRadius / st.R / n,
            t = a.project([r + o, s]),
            e = a.project([r - o, s]),
            e = t.add(e).divideBy(2),
            i = a.unproject(e).lat,
            n = Math.acos((Math.cos(o * n) - Math.sin(r * n) * Math.sin(i * n)) / (Math.cos(r * n) * Math.cos(i * n))) / n,
            !isNaN(n) && 0 !== n || (n = o / Math.cos(Math.PI / 180 * r)),
            this._point = e.subtract(a.getPixelOrigin()),
            this._radius = isNaN(n) ? 0 : e.x - a.project([i, s - n]).x,
            this._radiusY = e.y - t.y) : (o = h.unproject(h.project(this._latlng).subtract([this._mRadius, 0])),
            this._point = a.latLngToLayerPoint(this._latlng),
            this._radius = this._point.x - a.latLngToLayerPoint(o).x),
            this._updateBounds()
        }
    });
    var yi = fi.extend({
        options: {
            smoothFactor: 1,
            noClip: !1
        },
        initialize: function(t, e) {
            c(this, e),
            this._setLatLngs(t)
        },
        getLatLngs: function() {
            return this._latlngs
        },
        setLatLngs: function(t) {
            return this._setLatLngs(t),
            this.redraw()
        },
        isEmpty: function() {
            return !this._latlngs.length
        },
        closestLayerPoint: function(t) {
            for (var e = 1 / 0, i = null, n = ri, o = 0, s = this._parts.length; o < s; o++)
                for (var r = this._parts[o], a = 1, h = r.length; a < h; a++) {
                    var l, u, c = n(t, l = r[a - 1], u = r[a], !0);
                    c < e && (e = c,
                    i = n(t, l, u))
                }
            return i && (i.distance = Math.sqrt(e)),
            i
        },
        getCenter: function() {
            if (this._map)
                return hi(this._defaultShape(), this._map.options.crs);
            throw new Error("Must add layer to map before using getCenter()")
        },
        getBounds: function() {
            return this._bounds
        },
        addLatLng: function(t, e) {
            return e = e || this._defaultShape(),
            t = w(t),
            e.push(t),
            this._bounds.extend(t),
            this.redraw()
        },
        _setLatLngs: function(t) {
            this._bounds = new s,
            this._latlngs = this._convertLatLngs(t)
        },
        _defaultShape: function() {
            return I(this._latlngs) ? this._latlngs : this._latlngs[0]
        },
        _convertLatLngs: function(t) {
            for (var e = [], i = I(t), n = 0, o = t.length; n < o; n++)
                i ? (e[n] = w(t[n]),
                this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
            return e
        },
        _project: function() {
            var t = new f;
            this._rings = [],
            this._projectLatlngs(this._latlngs, this._rings, t),
            this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t,
            this._updateBounds())
        },
        _updateBounds: function() {
            var t = this._clickTolerance()
              , t = new p(t,t);
            this._rawPxBounds && (this._pxBounds = new f([this._rawPxBounds.min.subtract(t), this._rawPxBounds.max.add(t)]))
        },
        _projectLatlngs: function(t, e, i) {
            var n, o, s = t[0]instanceof v, r = t.length;
            if (s) {
                for (o = [],
                n = 0; n < r; n++)
                    o[n] = this._map.latLngToLayerPoint(t[n]),
                    i.extend(o[n]);
                e.push(o)
            } else
                for (n = 0; n < r; n++)
                    this._projectLatlngs(t[n], e, i)
        },
        _clipPoints: function() {
            var t = this._renderer._bounds;
            if (this._parts = [],
            this._pxBounds && this._pxBounds.intersects(t))
                if (this.options.noClip)
                    this._parts = this._rings;
                else
                    for (var e, i, n, o, s = this._parts, r = 0, a = 0, h = this._rings.length; r < h; r++)
                        for (e = 0,
                        i = (o = this._rings[r]).length; e < i - 1; e++)
                            (n = ni(o[e], o[e + 1], t, e, !0)) && (s[a] = s[a] || [],
                            s[a].push(n[0]),
                            n[1] === o[e + 1] && e !== i - 2 || (s[a].push(n[1]),
                            a++))
        },
        _simplifyPoints: function() {
            for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++)
                t[i] = ei(t[i], e)
        },
        _update: function() {
            this._map && (this._clipPoints(),
            this._simplifyPoints(),
            this._updatePath())
        },
        _updatePath: function() {
            this._renderer._updatePoly(this)
        },
        _containsPoint: function(t, e) {
            var i, n, o, s, r, a, h = this._clickTolerance();
            if (this._pxBounds && this._pxBounds.contains(t))
                for (i = 0,
                s = this._parts.length; i < s; i++)
                    for (n = 0,
                    o = (r = (a = this._parts[i]).length) - 1; n < r; o = n++)
                        if ((e || 0 !== n) && ii(t, a[o], a[n]) <= h)
                            return !0;
            return !1
        }
    });
    yi._flat = ai;
    var xi = yi.extend({
        options: {
            fill: !0
        },
        isEmpty: function() {
            return !this._latlngs.length || !this._latlngs[0].length
        },
        getCenter: function() {
            if (this._map)
                return $e(this._defaultShape(), this._map.options.crs);
            throw new Error("Must add layer to map before using getCenter()")
        },
        _convertLatLngs: function(t) {
            var t = yi.prototype._convertLatLngs.call(this, t)
              , e = t.length;
            return 2 <= e && t[0]instanceof v && t[0].equals(t[e - 1]) && t.pop(),
            t
        },
        _setLatLngs: function(t) {
            yi.prototype._setLatLngs.call(this, t),
            I(this._latlngs) && (this._latlngs = [this._latlngs])
        },
        _defaultShape: function() {
            return (I(this._latlngs[0]) ? this._latlngs : this._latlngs[0])[0]
        },
        _clipPoints: function() {
            var t = this._renderer._bounds
              , e = this.options.weight
              , e = new p(e,e)
              , t = new f(t.min.subtract(e),t.max.add(e));
            if (this._parts = [],
            this._pxBounds && this._pxBounds.intersects(t))
                if (this.options.noClip)
                    this._parts = this._rings;
                else
                    for (var i, n = 0, o = this._rings.length; n < o; n++)
                        (i = Je(this._rings[n], t, !0)).length && this._parts.push(i)
        },
        _updatePath: function() {
            this._renderer._updatePoly(this, !0)
        },
        _containsPoint: function(t) {
            var e, i, n, o, s, r, a, h, l = !1;
            if (!this._pxBounds || !this._pxBounds.contains(t))
                return !1;
            for (o = 0,
            a = this._parts.length; o < a; o++)
                for (s = 0,
                r = (h = (e = this._parts[o]).length) - 1; s < h; r = s++)
                    i = e[s],
                    n = e[r],
                    i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (l = !l);
            return l || yi.prototype._containsPoint.call(this, t, !0)
        }
    });
    var wi = ci.extend({
        initialize: function(t, e) {
            c(this, e),
            this._layers = {},
            t && this.addData(t)
        },
        addData: function(t) {
            var e, i, n, o = d(t) ? t : t.features;
            if (o) {
                for (e = 0,
                i = o.length; e < i; e++)
                    ((n = o[e]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
                return this
            }
            var s, r = this.options;
            return (!r.filter || r.filter(t)) && (s = bi(t, r)) ? (s.feature = Zi(t),
            s.defaultOptions = s.options,
            this.resetStyle(s),
            r.onEachFeature && r.onEachFeature(t, s),
            this.addLayer(s)) : this
        },
        resetStyle: function(t) {
            return void 0 === t ? this.eachLayer(this.resetStyle, this) : (t.options = l({}, t.defaultOptions),
            this._setLayerStyle(t, this.options.style),
            this)
        },
        setStyle: function(e) {
            return this.eachLayer(function(t) {
                this._setLayerStyle(t, e)
            }, this)
        },
        _setLayerStyle: function(t, e) {
            t.setStyle && ("function" == typeof e && (e = e(t.feature)),
            t.setStyle(e))
        }
    });
    function bi(t, e) {
        var i, n, o, s, r = "Feature" === t.type ? t.geometry : t, a = r ? r.coordinates : null, h = [], l = e && e.pointToLayer, u = e && e.coordsToLatLng || Li;
        if (!a && !r)
            return null;
        switch (r.type) {
        case "Point":
            return Pi(l, t, i = u(a), e);
        case "MultiPoint":
            for (o = 0,
            s = a.length; o < s; o++)
                i = u(a[o]),
                h.push(Pi(l, t, i, e));
            return new ci(h);
        case "LineString":
        case "MultiLineString":
            return n = Ti(a, "LineString" === r.type ? 0 : 1, u),
            new yi(n,e);
        case "Polygon":
        case "MultiPolygon":
            return n = Ti(a, "Polygon" === r.type ? 1 : 2, u),
            new xi(n,e);
        case "GeometryCollection":
            for (o = 0,
            s = r.geometries.length; o < s; o++) {
                var c = bi({
                    geometry: r.geometries[o],
                    type: "Feature",
                    properties: t.properties
                }, e);
                c && h.push(c)
            }
            return new ci(h);
        case "FeatureCollection":
            for (o = 0,
            s = r.features.length; o < s; o++) {
                var d = bi(r.features[o], e);
                d && h.push(d)
            }
            return new ci(h);
        default:
            throw new Error("Invalid GeoJSON object.")
        }
    }
    function Pi(t, e, i, n) {
        return t ? t(e, i) : new mi(i,n && n.markersInheritOptions && n)
    }
    function Li(t) {
        return new v(t[1],t[0],t[2])
    }
    function Ti(t, e, i) {
        for (var n, o = [], s = 0, r = t.length; s < r; s++)
            n = e ? Ti(t[s], e - 1, i) : (i || Li)(t[s]),
            o.push(n);
        return o
    }
    function Mi(t, e) {
        return void 0 !== (t = w(t)).alt ? [i(t.lng, e), i(t.lat, e), i(t.alt, e)] : [i(t.lng, e), i(t.lat, e)]
    }
    function zi(t, e, i, n) {
        for (var o = [], s = 0, r = t.length; s < r; s++)
            o.push(e ? zi(t[s], I(t[s]) ? 0 : e - 1, i, n) : Mi(t[s], n));
        return !e && i && 0 < o.length && o.push(o[0].slice()),
        o
    }
    function Ci(t, e) {
        return t.feature ? l({}, t.feature, {
            geometry: e
        }) : Zi(e)
    }
    function Zi(t) {
        return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
            type: "Feature",
            properties: {},
            geometry: t
        }
    }
    Tt = {
        toGeoJSON: function(t) {
            return Ci(this, {
                type: "Point",
                coordinates: Mi(this.getLatLng(), t)
            })
        }
    };
    function Si(t, e) {
        return new wi(t,e)
    }
    mi.include(Tt),
    vi.include(Tt),
    gi.include(Tt),
    yi.include({
        toGeoJSON: function(t) {
            var e = !I(this._latlngs);
            return Ci(this, {
                type: (e ? "Multi" : "") + "LineString",
                coordinates: zi(this._latlngs, e ? 1 : 0, !1, t)
            })
        }
    }),
    xi.include({
        toGeoJSON: function(t) {
            var e = !I(this._latlngs)
              , i = e && !I(this._latlngs[0])
              , t = zi(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
            return Ci(this, {
                type: (i ? "Multi" : "") + "Polygon",
                coordinates: t = e ? t : [t]
            })
        }
    }),
    ui.include({
        toMultiPoint: function(e) {
            var i = [];
            return this.eachLayer(function(t) {
                i.push(t.toGeoJSON(e).geometry.coordinates)
            }),
            Ci(this, {
                type: "MultiPoint",
                coordinates: i
            })
        },
        toGeoJSON: function(e) {
            var i, n, t = this.feature && this.feature.geometry && this.feature.geometry.type;
            return "MultiPoint" === t ? this.toMultiPoint(e) : (i = "GeometryCollection" === t,
            n = [],
            this.eachLayer(function(t) {
                t.toGeoJSON && (t = t.toGeoJSON(e),
                i ? n.push(t.geometry) : "FeatureCollection" === (t = Zi(t)).type ? n.push.apply(n, t.features) : n.push(t))
            }),
            i ? Ci(this, {
                geometries: n,
                type: "GeometryCollection"
            }) : {
                type: "FeatureCollection",
                features: n
            })
        }
    });
    var Mt = Si
      , Ei = o.extend({
        options: {
            opacity: 1,
            alt: "",
            interactive: !1,
            crossOrigin: !1,
            errorOverlayUrl: "",
            zIndex: 1,
            className: ""
        },
        initialize: function(t, e, i) {
            this._url = t,
            this._bounds = g(e),
            c(this, i)
        },
        onAdd: function() {
            this._image || (this._initImage(),
            this.options.opacity < 1 && this._updateOpacity()),
            this.options.interactive && (M(this._image, "leaflet-interactive"),
            this.addInteractiveTarget(this._image)),
            this.getPane().appendChild(this._image),
            this._reset()
        },
        onRemove: function() {
            T(this._image),
            this.options.interactive && this.removeInteractiveTarget(this._image)
        },
        setOpacity: function(t) {
            return this.options.opacity = t,
            this._image && this._updateOpacity(),
            this
        },
        setStyle: function(t) {
            return t.opacity && this.setOpacity(t.opacity),
            this
        },
        bringToFront: function() {
            return this._map && fe(this._image),
            this
        },
        bringToBack: function() {
            return this._map && ge(this._image),
            this
        },
        setUrl: function(t) {
            return this._url = t,
            this._image && (this._image.src = t),
            this
        },
        setBounds: function(t) {
            return this._bounds = g(t),
            this._map && this._reset(),
            this
        },
        getEvents: function() {
            var t = {
                zoom: this._reset,
                viewreset: this._reset
            };
            return this._zoomAnimated && (t.zoomanim = this._animateZoom),
            t
        },
        setZIndex: function(t) {
            return this.options.zIndex = t,
            this._updateZIndex(),
            this
        },
        getBounds: function() {
            return this._bounds
        },
        getElement: function() {
            return this._image
        },
        _initImage: function() {
            var t = "IMG" === this._url.tagName
              , e = this._image = t ? this._url : P("img");
            M(e, "leaflet-image-layer"),
            this._zoomAnimated && M(e, "leaflet-zoom-animated"),
            this.options.className && M(e, this.options.className),
            e.onselectstart = u,
            e.onmousemove = u,
            e.onload = a(this.fire, this, "load"),
            e.onerror = a(this._overlayOnError, this, "error"),
            !this.options.crossOrigin && "" !== this.options.crossOrigin || (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
            this.options.zIndex && this._updateZIndex(),
            t ? this._url = e.src : (e.src = this._url,
            e.alt = this.options.alt)
        },
        _animateZoom: function(t) {
            var e = this._map.getZoomScale(t.zoom)
              , t = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
            be(this._image, t, e)
        },
        _reset: function() {
            var t = this._image
              , e = new f(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast()))
              , i = e.getSize();
            Z(t, e.min),
            t.style.width = i.x + "px",
            t.style.height = i.y + "px"
        },
        _updateOpacity: function() {
            C(this._image, this.options.opacity)
        },
        _updateZIndex: function() {
            this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
        },
        _overlayOnError: function() {
            this.fire("error");
            var t = this.options.errorOverlayUrl;
            t && this._url !== t && (this._url = t,
            this._image.src = t)
        },
        getCenter: function() {
            return this._bounds.getCenter()
        }
    })
      , ki = Ei.extend({
        options: {
            autoplay: !0,
            loop: !0,
            keepAspectRatio: !0,
            muted: !1,
            playsInline: !0
        },
        _initImage: function() {
            var t = "VIDEO" === this._url.tagName
              , e = this._image = t ? this._url : P("video");
            if (M(e, "leaflet-image-layer"),
            this._zoomAnimated && M(e, "leaflet-zoom-animated"),
            this.options.className && M(e, this.options.className),
            e.onselectstart = u,
            e.onmousemove = u,
            e.onloadeddata = a(this.fire, this, "load"),
            t) {
                for (var i = e.getElementsByTagName("source"), n = [], o = 0; o < i.length; o++)
                    n.push(i[o].src);
                this._url = 0 < i.length ? n : [e.src]
            } else {
                d(this._url) || (this._url = [this._url]),
                !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"),
                e.autoplay = !!this.options.autoplay,
                e.loop = !!this.options.loop,
                e.muted = !!this.options.muted,
                e.playsInline = !!this.options.playsInline;
                for (var s = 0; s < this._url.length; s++) {
                    var r = P("source");
                    r.src = this._url[s],
                    e.appendChild(r)
                }
            }
        }
    });
    var Oi = Ei.extend({
        _initImage: function() {
            var t = this._image = this._url;
            M(t, "leaflet-image-layer"),
            this._zoomAnimated && M(t, "leaflet-zoom-animated"),
            this.options.className && M(t, this.options.className),
            t.onselectstart = u,
            t.onmousemove = u
        }
    });
    var Ai = o.extend({
        options: {
            interactive: !1,
            offset: [0, 0],
            className: "",
            pane: void 0,
            content: ""
        },
        initialize: function(t, e) {
            t && (t instanceof v || d(t)) ? (this._latlng = w(t),
            c(this, e)) : (c(this, t),
            this._source = e),
            this.options.content && (this._content = this.options.content)
        },
        openOn: function(t) {
            return (t = arguments.length ? t : this._source._map).hasLayer(this) || t.addLayer(this),
            this
        },
        close: function() {
            return this._map && this._map.removeLayer(this),
            this
        },
        toggle: function(t) {
            return this._map ? this.close() : (arguments.length ? this._source = t : t = this._source,
            this._prepareOpen(),
            this.openOn(t._map)),
            this
        },
        onAdd: function(t) {
            this._zoomAnimated = t._zoomAnimated,
            this._container || this._initLayout(),
            t._fadeAnimated && C(this._container, 0),
            clearTimeout(this._removeTimeout),
            this.getPane().appendChild(this._container),
            this.update(),
            t._fadeAnimated && C(this._container, 1),
            this.bringToFront(),
            this.options.interactive && (M(this._container, "leaflet-interactive"),
            this.addInteractiveTarget(this._container))
        },
        onRemove: function(t) {
            t._fadeAnimated ? (C(this._container, 0),
            this._removeTimeout = setTimeout(a(T, void 0, this._container), 200)) : T(this._container),
            this.options.interactive && (z(this._container, "leaflet-interactive"),
            this.removeInteractiveTarget(this._container))
        },
        getLatLng: function() {
            return this._latlng
        },
        setLatLng: function(t) {
            return this._latlng = w(t),
            this._map && (this._updatePosition(),
            this._adjustPan()),
            this
        },
        getContent: function() {
            return this._content
        },
        setContent: function(t) {
            return this._content = t,
            this.update(),
            this
        },
        getElement: function() {
            return this._container
        },
        update: function() {
            this._map && (this._container.style.visibility = "hidden",
            this._updateContent(),
            this._updateLayout(),
            this._updatePosition(),
            this._container.style.visibility = "",
            this._adjustPan())
        },
        getEvents: function() {
            var t = {
                zoom: this._updatePosition,
                viewreset: this._updatePosition
            };
            return this._zoomAnimated && (t.zoomanim = this._animateZoom),
            t
        },
        isOpen: function() {
            return !!this._map && this._map.hasLayer(this)
        },
        bringToFront: function() {
            return this._map && fe(this._container),
            this
        },
        bringToBack: function() {
            return this._map && ge(this._container),
            this
        },
        _prepareOpen: function(t) {
            if (!(i = this._source)._map)
                return !1;
            if (i instanceof ci) {
                var e, i = null, n = this._source._layers;
                for (e in n)
                    if (n[e]._map) {
                        i = n[e];
                        break
                    }
                if (!i)
                    return !1;
                this._source = i
            }
            if (!t)
                if (i.getCenter)
                    t = i.getCenter();
                else if (i.getLatLng)
                    t = i.getLatLng();
                else {
                    if (!i.getBounds)
                        throw new Error("Unable to get source layer LatLng.");
                    t = i.getBounds().getCenter()
                }
            return this.setLatLng(t),
            this._map && this.update(),
            !0
        },
        _updateContent: function() {
            if (this._content) {
                var t = this._contentNode
                  , e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                if ("string" == typeof e)
                    t.innerHTML = e;
                else {
                    for (; t.hasChildNodes(); )
                        t.removeChild(t.firstChild);
                    t.appendChild(e)
                }
                this.fire("contentupdate")
            }
        },
        _updatePosition: function() {
            var t, e, i;
            this._map && (e = this._map.latLngToLayerPoint(this._latlng),
            t = m(this.options.offset),
            i = this._getAnchor(),
            this._zoomAnimated ? Z(this._container, e.add(i)) : t = t.add(e).add(i),
            e = this._containerBottom = -t.y,
            i = this._containerLeft = -Math.round(this._containerWidth / 2) + t.x,
            this._container.style.bottom = e + "px",
            this._container.style.left = i + "px")
        },
        _getAnchor: function() {
            return [0, 0]
        }
    })
      , Bi = (A.include({
        _initOverlay: function(t, e, i, n) {
            var o = e;
            return o instanceof t || (o = new t(n).setContent(e)),
            i && o.setLatLng(i),
            o
        }
    }),
    o.include({
        _initOverlay: function(t, e, i, n) {
            var o = i;
            return o instanceof t ? (c(o, n),
            o._source = this) : (o = e && !n ? e : new t(n,this)).setContent(i),
            o
        }
    }),
    Ai.extend({
        options: {
            pane: "popupPane",
            offset: [0, 7],
            maxWidth: 300,
            minWidth: 50,
            maxHeight: null,
            autoPan: !0,
            autoPanPaddingTopLeft: null,
            autoPanPaddingBottomRight: null,
            autoPanPadding: [5, 5],
            keepInView: !1,
            closeButton: !0,
            autoClose: !0,
            closeOnEscapeKey: !0,
            className: ""
        },
        openOn: function(t) {
            return !(t = arguments.length ? t : this._source._map).hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup),
            t._popup = this,
            Ai.prototype.openOn.call(this, t)
        },
        onAdd: function(t) {
            Ai.prototype.onAdd.call(this, t),
            t.fire("popupopen", {
                popup: this
            }),
            this._source && (this._source.fire("popupopen", {
                popup: this
            }, !0),
            this._source instanceof fi || this._source.on("preclick", Ae))
        },
        onRemove: function(t) {
            Ai.prototype.onRemove.call(this, t),
            t.fire("popupclose", {
                popup: this
            }),
            this._source && (this._source.fire("popupclose", {
                popup: this
            }, !0),
            this._source instanceof fi || this._source.off("preclick", Ae))
        },
        getEvents: function() {
            var t = Ai.prototype.getEvents.call(this);
            return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close),
            this.options.keepInView && (t.moveend = this._adjustPan),
            t
        },
        _initLayout: function() {
            var t = "leaflet-popup"
              , e = this._container = P("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated")
              , i = this._wrapper = P("div", t + "-content-wrapper", e);
            this._contentNode = P("div", t + "-content", i),
            Ie(e),
            Be(this._contentNode),
            S(e, "contextmenu", Ae),
            this._tipContainer = P("div", t + "-tip-container", e),
            this._tip = P("div", t + "-tip", this._tipContainer),
            this.options.closeButton && ((i = this._closeButton = P("a", t + "-close-button", e)).setAttribute("role", "button"),
            i.setAttribute("aria-label", "Close popup"),
            i.href = "#close",
            i.innerHTML = '<span aria-hidden="true">&#215;</span>',
            S(i, "click", function(t) {
                O(t),
                this.close()
            }, this))
        },
        _updateLayout: function() {
            var t = this._contentNode
              , e = t.style
              , i = (e.width = "",
            e.whiteSpace = "nowrap",
            t.offsetWidth)
              , i = Math.min(i, this.options.maxWidth)
              , i = (i = Math.max(i, this.options.minWidth),
            e.width = i + 1 + "px",
            e.whiteSpace = "",
            e.height = "",
            t.offsetHeight)
              , n = this.options.maxHeight
              , o = "leaflet-popup-scrolled";
            (n && n < i ? (e.height = n + "px",
            M) : z)(t, o),
            this._containerWidth = this._container.offsetWidth
        },
        _animateZoom: function(t) {
            var t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center)
              , e = this._getAnchor();
            Z(this._container, t.add(e))
        },
        _adjustPan: function() {
            var t, e, i, n, o, s, r, a;
            this.options.autoPan && (this._map._panAnim && this._map._panAnim.stop(),
            this._autopanning ? this._autopanning = !1 : (t = this._map,
            e = parseInt(pe(this._container, "marginBottom"), 10) || 0,
            e = this._container.offsetHeight + e,
            a = this._containerWidth,
            (i = new p(this._containerLeft,-e - this._containerBottom))._add(Pe(this._container)),
            i = t.layerPointToContainerPoint(i),
            o = m(this.options.autoPanPadding),
            n = m(this.options.autoPanPaddingTopLeft || o),
            o = m(this.options.autoPanPaddingBottomRight || o),
            s = t.getSize(),
            r = 0,
            i.x + a + o.x > s.x && (r = i.x + a - s.x + o.x),
            i.x - r - n.x < (a = 0) && (r = i.x - n.x),
            i.y + e + o.y > s.y && (a = i.y + e - s.y + o.y),
            i.y - a - n.y < 0 && (a = i.y - n.y),
            (r || a) && (this.options.keepInView && (this._autopanning = !0),
            t.fire("autopanstart").panBy([r, a]))))
        },
        _getAnchor: function() {
            return m(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
        }
    }))
      , Ii = (A.mergeOptions({
        closePopupOnClick: !0
    }),
    A.include({
        openPopup: function(t, e, i) {
            return this._initOverlay(Bi, t, e, i).openOn(this),
            this
        },
        closePopup: function(t) {
            return (t = arguments.length ? t : this._popup) && t.close(),
            this
        }
    }),
    o.include({
        bindPopup: function(t, e) {
            return this._popup = this._initOverlay(Bi, this._popup, t, e),
            this._popupHandlersAdded || (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
            }),
            this._popupHandlersAdded = !0),
            this
        },
        unbindPopup: function() {
            return this._popup && (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
            }),
            this._popupHandlersAdded = !1,
            this._popup = null),
            this
        },
        openPopup: function(t) {
            return this._popup && (this instanceof ci || (this._popup._source = this),
            this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)),
            this
        },
        closePopup: function() {
            return this._popup && this._popup.close(),
            this
        },
        togglePopup: function() {
            return this._popup && this._popup.toggle(this),
            this
        },
        isPopupOpen: function() {
            return !!this._popup && this._popup.isOpen()
        },
        setPopupContent: function(t) {
            return this._popup && this._popup.setContent(t),
            this
        },
        getPopup: function() {
            return this._popup
        },
        _openPopup: function(t) {
            var e;
            this._popup && this._map && (Re(t),
            e = t.layer || t.target,
            this._popup._source !== e || e instanceof fi ? (this._popup._source = e,
            this.openPopup(t.latlng)) : this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t.latlng))
        },
        _movePopup: function(t) {
            this._popup.setLatLng(t.latlng)
        },
        _onKeyPress: function(t) {
            13 === t.originalEvent.keyCode && this._openPopup(t)
        }
    }),
    Ai.extend({
        options: {
            pane: "tooltipPane",
            offset: [0, 0],
            direction: "auto",
            permanent: !1,
            sticky: !1,
            opacity: .9
        },
        onAdd: function(t) {
            Ai.prototype.onAdd.call(this, t),
            this.setOpacity(this.options.opacity),
            t.fire("tooltipopen", {
                tooltip: this
            }),
            this._source && (this.addEventParent(this._source),
            this._source.fire("tooltipopen", {
                tooltip: this
            }, !0))
        },
        onRemove: function(t) {
            Ai.prototype.onRemove.call(this, t),
            t.fire("tooltipclose", {
                tooltip: this
            }),
            this._source && (this.removeEventParent(this._source),
            this._source.fire("tooltipclose", {
                tooltip: this
            }, !0))
        },
        getEvents: function() {
            var t = Ai.prototype.getEvents.call(this);
            return this.options.permanent || (t.preclick = this.close),
            t
        },
        _initLayout: function() {
            var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
            this._contentNode = this._container = P("div", t),
            this._container.setAttribute("role", "tooltip"),
            this._container.setAttribute("id", "leaflet-tooltip-" + h(this))
        },
        _updateLayout: function() {},
        _adjustPan: function() {},
        _setPosition: function(t) {
            var e, i = this._map, n = this._container, o = i.latLngToContainerPoint(i.getCenter()), i = i.layerPointToContainerPoint(t), s = this.options.direction, r = n.offsetWidth, a = n.offsetHeight, h = m(this.options.offset), l = this._getAnchor(), i = "top" === s ? (e = r / 2,
            a) : "bottom" === s ? (e = r / 2,
            0) : (e = "center" === s ? r / 2 : "right" === s ? 0 : "left" === s ? r : i.x < o.x ? (s = "right",
            0) : (s = "left",
            r + 2 * (h.x + l.x)),
            a / 2);
            t = t.subtract(m(e, i, !0)).add(h).add(l),
            z(n, "leaflet-tooltip-right"),
            z(n, "leaflet-tooltip-left"),
            z(n, "leaflet-tooltip-top"),
            z(n, "leaflet-tooltip-bottom"),
            M(n, "leaflet-tooltip-" + s),
            Z(n, t)
        },
        _updatePosition: function() {
            var t = this._map.latLngToLayerPoint(this._latlng);
            this._setPosition(t)
        },
        setOpacity: function(t) {
            this.options.opacity = t,
            this._container && C(this._container, t)
        },
        _animateZoom: function(t) {
            t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
            this._setPosition(t)
        },
        _getAnchor: function() {
            return m(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
        }
    }))
      , Ri = (A.include({
        openTooltip: function(t, e, i) {
            return this._initOverlay(Ii, t, e, i).openOn(this),
            this
        },
        closeTooltip: function(t) {
            return t.close(),
            this
        }
    }),
    o.include({
        bindTooltip: function(t, e) {
            return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(),
            this._tooltip = this._initOverlay(Ii, this._tooltip, t, e),
            this._initTooltipInteractions(),
            this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(),
            this
        },
        unbindTooltip: function() {
            return this._tooltip && (this._initTooltipInteractions(!0),
            this.closeTooltip(),
            this._tooltip = null),
            this
        },
        _initTooltipInteractions: function(t) {
            var e, i;
            !t && this._tooltipHandlersAdded || (e = t ? "off" : "on",
            i = {
                remove: this.closeTooltip,
                move: this._moveTooltip
            },
            this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip,
            i.mouseout = this.closeTooltip,
            i.click = this._openTooltip,
            this._map ? this._addFocusListeners() : i.add = this._addFocusListeners),
            this._tooltip.options.sticky && (i.mousemove = this._moveTooltip),
            this[e](i),
            this._tooltipHandlersAdded = !t)
        },
        openTooltip: function(t) {
            return this._tooltip && (this instanceof ci || (this._tooltip._source = this),
            this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map),
            this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))),
            this
        },
        closeTooltip: function() {
            if (this._tooltip)
                return this._tooltip.close()
        },
        toggleTooltip: function() {
            return this._tooltip && this._tooltip.toggle(this),
            this
        },
        isTooltipOpen: function() {
            return this._tooltip.isOpen()
        },
        setTooltipContent: function(t) {
            return this._tooltip && this._tooltip.setContent(t),
            this
        },
        getTooltip: function() {
            return this._tooltip
        },
        _addFocusListeners: function() {
            this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this)
        },
        _addFocusListenersOnLayer: function(t) {
            var e = "function" == typeof t.getElement && t.getElement();
            e && (S(e, "focus", function() {
                this._tooltip._source = t,
                this.openTooltip()
            }, this),
            S(e, "blur", this.closeTooltip, this))
        },
        _setAriaDescribedByOnLayer: function(t) {
            t = "function" == typeof t.getElement && t.getElement();
            t && t.setAttribute("aria-describedby", this._tooltip._container.id)
        },
        _openTooltip: function(t) {
            var e;
            this._tooltip && this._map && (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag ? (this._openOnceFlag = !0,
            (e = this)._map.once("moveend", function() {
                e._openOnceFlag = !1,
                e._openTooltip(t)
            })) : (this._tooltip._source = t.layer || t.target,
            this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0)))
        },
        _moveTooltip: function(t) {
            var e = t.latlng;
            this._tooltip.options.sticky && t.originalEvent && (t = this._map.mouseEventToContainerPoint(t.originalEvent),
            t = this._map.containerPointToLayerPoint(t),
            e = this._map.layerPointToLatLng(t)),
            this._tooltip.setLatLng(e)
        }
    }),
    di.extend({
        options: {
            iconSize: [12, 12],
            html: !1,
            bgPos: null,
            className: "leaflet-div-icon"
        },
        createIcon: function(t) {
            var t = t && "DIV" === t.tagName ? t : document.createElement("div")
              , e = this.options;
            return e.html instanceof Element ? (me(t),
            t.appendChild(e.html)) : t.innerHTML = !1 !== e.html ? e.html : "",
            e.bgPos && (e = m(e.bgPos),
            t.style.backgroundPosition = -e.x + "px " + -e.y + "px"),
            this._setIconStyles(t, "icon"),
            t
        },
        createShadow: function() {
            return null
        }
    }));
    di.Default = _i;
    var Ni = o.extend({
        options: {
            tileSize: 256,
            opacity: 1,
            updateWhenIdle: b.mobile,
            updateWhenZooming: !0,
            updateInterval: 200,
            zIndex: 1,
            bounds: null,
            minZoom: 0,
            maxZoom: void 0,
            maxNativeZoom: void 0,
            minNativeZoom: void 0,
            noWrap: !1,
            pane: "tilePane",
            className: "",
            keepBuffer: 2
        },
        initialize: function(t) {
            c(this, t)
        },
        onAdd: function() {
            this._initContainer(),
            this._levels = {},
            this._tiles = {},
            this._resetView()
        },
        beforeAdd: function(t) {
            t._addZoomLimit(this)
        },
        onRemove: function(t) {
            this._removeAllTiles(),
            T(this._container),
            t._removeZoomLimit(this),
            this._container = null,
            this._tileZoom = void 0
        },
        bringToFront: function() {
            return this._map && (fe(this._container),
            this._setAutoZIndex(Math.max)),
            this
        },
        bringToBack: function() {
            return this._map && (ge(this._container),
            this._setAutoZIndex(Math.min)),
            this
        },
        getContainer: function() {
            return this._container
        },
        setOpacity: function(t) {
            return this.options.opacity = t,
            this._updateOpacity(),
            this
        },
        setZIndex: function(t) {
            return this.options.zIndex = t,
            this._updateZIndex(),
            this
        },
        isLoading: function() {
            return this._loading
        },
        redraw: function() {
            var t;
            return this._map && (this._removeAllTiles(),
            (t = this._clampZoom(this._map.getZoom())) !== this._tileZoom && (this._tileZoom = t,
            this._updateLevels()),
            this._update()),
            this
        },
        getEvents: function() {
            var t = {
                viewprereset: this._invalidateAll,
                viewreset: this._resetView,
                zoom: this._resetView,
                moveend: this._onMoveEnd
            };
            return this.options.updateWhenIdle || (this._onMove || (this._onMove = j(this._onMoveEnd, this.options.updateInterval, this)),
            t.move = this._onMove),
            this._zoomAnimated && (t.zoomanim = this._animateZoom),
            t
        },
        createTile: function() {
            return document.createElement("div")
        },
        getTileSize: function() {
            var t = this.options.tileSize;
            return t instanceof p ? t : new p(t,t)
        },
        _updateZIndex: function() {
            this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
        },
        _setAutoZIndex: function(t) {
            for (var e, i = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = i.length; o < s; o++)
                e = i[o].style.zIndex,
                i[o] !== this._container && e && (n = t(n, +e));
            isFinite(n) && (this.options.zIndex = n + t(-1, 1),
            this._updateZIndex())
        },
        _updateOpacity: function() {
            if (this._map && !b.ielt9) {
                C(this._container, this.options.opacity);
                var t, e = +new Date, i = !1, n = !1;
                for (t in this._tiles) {
                    var o, s = this._tiles[t];
                    s.current && s.loaded && (o = Math.min(1, (e - s.loaded) / 200),
                    C(s.el, o),
                    o < 1 ? i = !0 : (s.active ? n = !0 : this._onOpaqueTile(s),
                    s.active = !0))
                }
                n && !this._noPrune && this._pruneTiles(),
                i && (r(this._fadeFrame),
                this._fadeFrame = x(this._updateOpacity, this))
            }
        },
        _onOpaqueTile: u,
        _initContainer: function() {
            this._container || (this._container = P("div", "leaflet-layer " + (this.options.className || "")),
            this._updateZIndex(),
            this.options.opacity < 1 && this._updateOpacity(),
            this.getPane().appendChild(this._container))
        },
        _updateLevels: function() {
            var t = this._tileZoom
              , e = this.options.maxZoom;
            if (void 0 !== t) {
                for (var i in this._levels)
                    i = Number(i),
                    this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i),
                    this._onUpdateLevel(i)) : (T(this._levels[i].el),
                    this._removeTilesAtZoom(i),
                    this._onRemoveLevel(i),
                    delete this._levels[i]);
                var n = this._levels[t]
                  , o = this._map;
                return n || ((n = this._levels[t] = {}).el = P("div", "leaflet-tile-container leaflet-zoom-animated", this._container),
                n.el.style.zIndex = e,
                n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(),
                n.zoom = t,
                this._setZoomTransform(n, o.getCenter(), o.getZoom()),
                u(n.el.offsetWidth),
                this._onCreateLevel(n)),
                this._level = n
            }
        },
        _onUpdateLevel: u,
        _onRemoveLevel: u,
        _onCreateLevel: u,
        _pruneTiles: function() {
            if (this._map) {
                var t, e, i, n = this._map.getZoom();
                if (n > this.options.maxZoom || n < this.options.minZoom)
                    this._removeAllTiles();
                else {
                    for (t in this._tiles)
                        (i = this._tiles[t]).retain = i.current;
                    for (t in this._tiles)
                        (i = this._tiles[t]).current && !i.active && (e = i.coords,
                        this._retainParent(e.x, e.y, e.z, e.z - 5) || this._retainChildren(e.x, e.y, e.z, e.z + 2));
                    for (t in this._tiles)
                        this._tiles[t].retain || this._removeTile(t)
                }
            }
        },
        _removeTilesAtZoom: function(t) {
            for (var e in this._tiles)
                this._tiles[e].coords.z === t && this._removeTile(e)
        },
        _removeAllTiles: function() {
            for (var t in this._tiles)
                this._removeTile(t)
        },
        _invalidateAll: function() {
            for (var t in this._levels)
                T(this._levels[t].el),
                this._onRemoveLevel(Number(t)),
                delete this._levels[t];
            this._removeAllTiles(),
            this._tileZoom = void 0
        },
        _retainParent: function(t, e, i, n) {
            var t = Math.floor(t / 2)
              , e = Math.floor(e / 2)
              , i = i - 1
              , o = new p(+t,+e)
              , o = (o.z = i,
            this._tileCoordsToKey(o))
              , o = this._tiles[o];
            return o && o.active ? o.retain = !0 : (o && o.loaded && (o.retain = !0),
            n < i && this._retainParent(t, e, i, n))
        },
        _retainChildren: function(t, e, i, n) {
            for (var o = 2 * t; o < 2 * t + 2; o++)
                for (var s = 2 * e; s < 2 * e + 2; s++) {
                    var r = new p(o,s)
                      , r = (r.z = i + 1,
                    this._tileCoordsToKey(r))
                      , r = this._tiles[r];
                    r && r.active ? r.retain = !0 : (r && r.loaded && (r.retain = !0),
                    i + 1 < n && this._retainChildren(o, s, i + 1, n))
                }
        },
        _resetView: function(t) {
            t = t && (t.pinch || t.flyTo);
            this._setView(this._map.getCenter(), this._map.getZoom(), t, t)
        },
        _animateZoom: function(t) {
            this._setView(t.center, t.zoom, !0, t.noUpdate)
        },
        _clampZoom: function(t) {
            var e = this.options;
            return void 0 !== e.minNativeZoom && t < e.minNativeZoom ? e.minNativeZoom : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t ? e.maxNativeZoom : t
        },
        _setView: function(t, e, i, n) {
            var o = Math.round(e)
              , o = void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom ? void 0 : this._clampZoom(o)
              , s = this.options.updateWhenZooming && o !== this._tileZoom;
            n && !s || (this._tileZoom = o,
            this._abortLoading && this._abortLoading(),
            this._updateLevels(),
            this._resetGrid(),
            void 0 !== o && this._update(t),
            i || this._pruneTiles(),
            this._noPrune = !!i),
            this._setZoomTransforms(t, e)
        },
        _setZoomTransforms: function(t, e) {
            for (var i in this._levels)
                this._setZoomTransform(this._levels[i], t, e)
        },
        _setZoomTransform: function(t, e, i) {
            var n = this._map.getZoomScale(i, t.zoom)
              , e = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
            b.any3d ? be(t.el, e, n) : Z(t.el, e)
        },
        _resetGrid: function() {
            var t = this._map
              , e = t.options.crs
              , i = this._tileSize = this.getTileSize()
              , n = this._tileZoom
              , o = this._map.getPixelWorldBounds(this._tileZoom);
            o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
            this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x), Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)],
            this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x), Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)]
        },
        _onMoveEnd: function() {
            this._map && !this._map._animatingZoom && this._update()
        },
        _getTiledPixelBounds: function(t) {
            var e = this._map
              , i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom()
              , i = e.getZoomScale(i, this._tileZoom)
              , t = e.project(t, this._tileZoom).floor()
              , e = e.getSize().divideBy(2 * i);
            return new f(t.subtract(e),t.add(e))
        },
        _update: function(t) {
            var e = this._map;
            if (e) {
                var i = this._clampZoom(e.getZoom());
                if (void 0 === t && (t = e.getCenter()),
                void 0 !== this._tileZoom) {
                    var n, e = this._getTiledPixelBounds(t), o = this._pxBoundsToTileRange(e), s = o.getCenter(), r = [], e = this.options.keepBuffer, a = new f(o.getBottomLeft().subtract([e, -e]),o.getTopRight().add([e, -e]));
                    if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y)))
                        throw new Error("Attempted to load an infinite number of tiles");
                    for (n in this._tiles) {
                        var h = this._tiles[n].coords;
                        h.z === this._tileZoom && a.contains(new p(h.x,h.y)) || (this._tiles[n].current = !1)
                    }
                    if (1 < Math.abs(i - this._tileZoom))
                        this._setView(t, i);
                    else {
                        for (var l = o.min.y; l <= o.max.y; l++)
                            for (var u = o.min.x; u <= o.max.x; u++) {
                                var c, d = new p(u,l);
                                d.z = this._tileZoom,
                                this._isValidTile(d) && ((c = this._tiles[this._tileCoordsToKey(d)]) ? c.current = !0 : r.push(d))
                            }
                        if (r.sort(function(t, e) {
                            return t.distanceTo(s) - e.distanceTo(s)
                        }),
                        0 !== r.length) {
                            this._loading || (this._loading = !0,
                            this.fire("loading"));
                            for (var _ = document.createDocumentFragment(), u = 0; u < r.length; u++)
                                this._addTile(r[u], _);
                            this._level.el.appendChild(_)
                        }
                    }
                }
            }
        },
        _isValidTile: function(t) {
            var e = this._map.options.crs;
            if (!e.infinite) {
                var i = this._globalTileRange;
                if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y))
                    return !1
            }
            return !this.options.bounds || (e = this._tileCoordsToBounds(t),
            g(this.options.bounds).overlaps(e))
        },
        _keyToBounds: function(t) {
            return this._tileCoordsToBounds(this._keyToTileCoords(t))
        },
        _tileCoordsToNwSe: function(t) {
            var e = this._map
              , i = this.getTileSize()
              , n = t.scaleBy(i)
              , i = n.add(i);
            return [e.unproject(n, t.z), e.unproject(i, t.z)]
        },
        _tileCoordsToBounds: function(t) {
            t = this._tileCoordsToNwSe(t),
            t = new s(t[0],t[1]);
            return t = this.options.noWrap ? t : this._map.wrapLatLngBounds(t)
        },
        _tileCoordsToKey: function(t) {
            return t.x + ":" + t.y + ":" + t.z
        },
        _keyToTileCoords: function(t) {
            var t = t.split(":")
              , e = new p(+t[0],+t[1]);
            return e.z = +t[2],
            e
        },
        _removeTile: function(t) {
            var e = this._tiles[t];
            e && (T(e.el),
            delete this._tiles[t],
            this.fire("tileunload", {
                tile: e.el,
                coords: this._keyToTileCoords(t)
            }))
        },
        _initTile: function(t) {
            M(t, "leaflet-tile");
            var e = this.getTileSize();
            t.style.width = e.x + "px",
            t.style.height = e.y + "px",
            t.onselectstart = u,
            t.onmousemove = u,
            b.ielt9 && this.options.opacity < 1 && C(t, this.options.opacity)
        },
        _addTile: function(t, e) {
            var i = this._getTilePos(t)
              , n = this._tileCoordsToKey(t)
              , o = this.createTile(this._wrapCoords(t), a(this._tileReady, this, t));
            this._initTile(o),
            this.createTile.length < 2 && x(a(this._tileReady, this, t, null, o)),
            Z(o, i),
            this._tiles[n] = {
                el: o,
                coords: t,
                current: !0
            },
            e.appendChild(o),
            this.fire("tileloadstart", {
                tile: o,
                coords: t
            })
        },
        _tileReady: function(t, e, i) {
            e && this.fire("tileerror", {
                error: e,
                tile: i,
                coords: t
            });
            var n = this._tileCoordsToKey(t);
            (i = this._tiles[n]) && (i.loaded = +new Date,
            this._map._fadeAnimated ? (C(i.el, 0),
            r(this._fadeFrame),
            this._fadeFrame = x(this._updateOpacity, this)) : (i.active = !0,
            this._pruneTiles()),
            e || (M(i.el, "leaflet-tile-loaded"),
            this.fire("tileload", {
                tile: i.el,
                coords: t
            })),
            this._noTilesToLoad() && (this._loading = !1,
            this.fire("load"),
            b.ielt9 || !this._map._fadeAnimated ? x(this._pruneTiles, this) : setTimeout(a(this._pruneTiles, this), 250)))
        },
        _getTilePos: function(t) {
            return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
        },
        _wrapCoords: function(t) {
            var e = new p(this._wrapX ? H(t.x, this._wrapX) : t.x,this._wrapY ? H(t.y, this._wrapY) : t.y);
            return e.z = t.z,
            e
        },
        _pxBoundsToTileRange: function(t) {
            var e = this.getTileSize();
            return new f(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1, 1]))
        },
        _noTilesToLoad: function() {
            for (var t in this._tiles)
                if (!this._tiles[t].loaded)
                    return !1;
            return !0
        }
    });
    var Di = Ni.extend({
        options: {
            minZoom: 0,
            maxZoom: 18,
            subdomains: "abc",
            errorTileUrl: "",
            zoomOffset: 0,
            tms: !1,
            zoomReverse: !1,
            detectRetina: !1,
            crossOrigin: !1,
            referrerPolicy: !1
        },
        initialize: function(t, e) {
            this._url = t,
            (e = c(this, e)).detectRetina && b.retina && 0 < e.maxZoom ? (e.tileSize = Math.floor(e.tileSize / 2),
            e.zoomReverse ? (e.zoomOffset--,
            e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)) : (e.zoomOffset++,
            e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1)),
            e.minZoom = Math.max(0, e.minZoom)) : e.zoomReverse ? e.minZoom = Math.min(e.maxZoom, e.minZoom) : e.maxZoom = Math.max(e.minZoom, e.maxZoom),
            "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")),
            this.on("tileunload", this._onTileRemove)
        },
        setUrl: function(t, e) {
            return this._url === t && void 0 === e && (e = !0),
            this._url = t,
            e || this.redraw(),
            this
        },
        createTile: function(t, e) {
            var i = document.createElement("img");
            return S(i, "load", a(this._tileOnLoad, this, e, i)),
            S(i, "error", a(this._tileOnError, this, e, i)),
            !this.options.crossOrigin && "" !== this.options.crossOrigin || (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
            "string" == typeof this.options.referrerPolicy && (i.referrerPolicy = this.options.referrerPolicy),
            i.alt = "",
            i.src = this.getTileUrl(t),
            i
        },
        getTileUrl: function(t) {
            var e = {
                r: b.retina ? "@2x" : "",
                s: this._getSubdomain(t),
                x: t.x,
                y: t.y,
                z: this._getZoomForUrl()
            };
            return this._map && !this._map.options.crs.infinite && (t = this._globalTileRange.max.y - t.y,
            this.options.tms && (e.y = t),
            e["-y"] = t),
            q(this._url, l(e, this.options))
        },
        _tileOnLoad: function(t, e) {
            b.ielt9 ? setTimeout(a(t, this, null, e), 0) : t(null, e)
        },
        _tileOnError: function(t, e, i) {
            var n = this.options.errorTileUrl;
            n && e.getAttribute("src") !== n && (e.src = n),
            t(i, e)
        },
        _onTileRemove: function(t) {
            t.tile.onload = null
        },
        _getZoomForUrl: function() {
            var t = this._tileZoom
              , e = this.options.maxZoom;
            return (t = this.options.zoomReverse ? e - t : t) + this.options.zoomOffset
        },
        _getSubdomain: function(t) {
            t = Math.abs(t.x + t.y) % this.options.subdomains.length;
            return this.options.subdomains[t]
        },
        _abortLoading: function() {
            var t, e, i;
            for (t in this._tiles)
                this._tiles[t].coords.z !== this._tileZoom && ((i = this._tiles[t].el).onload = u,
                i.onerror = u,
                i.complete || (i.src = K,
                e = this._tiles[t].coords,
                T(i),
                delete this._tiles[t],
                this.fire("tileabort", {
                    tile: i,
                    coords: e
                })))
        },
        _removeTile: function(t) {
            var e = this._tiles[t];
            if (e)
                return e.el.setAttribute("src", K),
                Ni.prototype._removeTile.call(this, t)
        },
        _tileReady: function(t, e, i) {
            if (this._map && (!i || i.getAttribute("src") !== K))
                return Ni.prototype._tileReady.call(this, t, e, i)
        }
    });
    function ji(t, e) {
        return new Di(t,e)
    }
    var Hi = Di.extend({
        defaultWmsParams: {
            service: "WMS",
            request: "GetMap",
            layers: "",
            styles: "",
            format: "image/jpeg",
            transparent: !1,
            version: "1.1.1"
        },
        options: {
            crs: null,
            uppercase: !1
        },
        initialize: function(t, e) {
            this._url = t;
            var i, n = l({}, this.defaultWmsParams);
            for (i in e)
                i in this.options || (n[i] = e[i]);
            var t = (e = c(this, e)).detectRetina && b.retina ? 2 : 1
              , o = this.getTileSize();
            n.width = o.x * t,
            n.height = o.y * t,
            this.wmsParams = n
        },
        onAdd: function(t) {
            this._crs = this.options.crs || t.options.crs,
            this._wmsVersion = parseFloat(this.wmsParams.version);
            var e = 1.3 <= this._wmsVersion ? "crs" : "srs";
            this.wmsParams[e] = this._crs.code,
            Di.prototype.onAdd.call(this, t)
        },
        getTileUrl: function(t) {
            var e = this._tileCoordsToNwSe(t)
              , i = this._crs
              , i = _(i.project(e[0]), i.project(e[1]))
              , e = i.min
              , i = i.max
              , e = (1.3 <= this._wmsVersion && this._crs === li ? [e.y, e.x, i.y, i.x] : [e.x, e.y, i.x, i.y]).join(",")
              , i = Di.prototype.getTileUrl.call(this, t);
            return i + U(this.wmsParams, i, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + e
        },
        setParams: function(t, e) {
            return l(this.wmsParams, t),
            e || this.redraw(),
            this
        }
    });
    Di.WMS = Hi,
    ji.wms = function(t, e) {
        return new Hi(t,e)
    }
    ;
    var Wi = o.extend({
        options: {
            padding: .1
        },
        initialize: function(t) {
            c(this, t),
            h(this),
            this._layers = this._layers || {}
        },
        onAdd: function() {
            this._container || (this._initContainer(),
            M(this._container, "leaflet-zoom-animated")),
            this.getPane().appendChild(this._container),
            this._update(),
            this.on("update", this._updatePaths, this)
        },
        onRemove: function() {
            this.off("update", this._updatePaths, this),
            this._destroyContainer()
        },
        getEvents: function() {
            var t = {
                viewreset: this._reset,
                zoom: this._onZoom,
                moveend: this._update,
                zoomend: this._onZoomEnd
            };
            return this._zoomAnimated && (t.zoomanim = this._onAnimZoom),
            t
        },
        _onAnimZoom: function(t) {
            this._updateTransform(t.center, t.zoom)
        },
        _onZoom: function() {
            this._updateTransform(this._map.getCenter(), this._map.getZoom())
        },
        _updateTransform: function(t, e) {
            var i = this._map.getZoomScale(e, this._zoom)
              , n = this._map.getSize().multiplyBy(.5 + this.options.padding)
              , o = this._map.project(this._center, e)
              , n = n.multiplyBy(-i).add(o).subtract(this._map._getNewPixelOrigin(t, e));
            b.any3d ? be(this._container, n, i) : Z(this._container, n)
        },
        _reset: function() {
            for (var t in this._update(),
            this._updateTransform(this._center, this._zoom),
            this._layers)
                this._layers[t]._reset()
        },
        _onZoomEnd: function() {
            for (var t in this._layers)
                this._layers[t]._project()
        },
        _updatePaths: function() {
            for (var t in this._layers)
                this._layers[t]._update()
        },
        _update: function() {
            var t = this.options.padding
              , e = this._map.getSize()
              , i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
            this._bounds = new f(i,i.add(e.multiplyBy(1 + 2 * t)).round()),
            this._center = this._map.getCenter(),
            this._zoom = this._map.getZoom()
        }
    })
      , Fi = Wi.extend({
        options: {
            tolerance: 0
        },
        getEvents: function() {
            var t = Wi.prototype.getEvents.call(this);
            return t.viewprereset = this._onViewPreReset,
            t
        },
        _onViewPreReset: function() {
            this._postponeUpdatePaths = !0
        },
        onAdd: function() {
            Wi.prototype.onAdd.call(this),
            this._draw()
        },
        _initContainer: function() {
            var t = this._container = document.createElement("canvas");
            S(t, "mousemove", this._onMouseMove, this),
            S(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this),
            S(t, "mouseout", this._handleMouseOut, this),
            t._leaflet_disable_events = !0,
            this._ctx = t.getContext("2d")
        },
        _destroyContainer: function() {
            r(this._redrawRequest),
            delete this._ctx,
            T(this._container),
            k(this._container),
            delete this._container
        },
        _updatePaths: function() {
            if (!this._postponeUpdatePaths) {
                for (var t in this._redrawBounds = null,
                this._layers)
                    this._layers[t]._update();
                this._redraw()
            }
        },
        _update: function() {
            var t, e, i, n;
            this._map._animatingZoom && this._bounds || (Wi.prototype._update.call(this),
            t = this._bounds,
            e = this._container,
            i = t.getSize(),
            n = b.retina ? 2 : 1,
            Z(e, t.min),
            e.width = n * i.x,
            e.height = n * i.y,
            e.style.width = i.x + "px",
            e.style.height = i.y + "px",
            b.retina && this._ctx.scale(2, 2),
            this._ctx.translate(-t.min.x, -t.min.y),
            this.fire("update"))
        },
        _reset: function() {
            Wi.prototype._reset.call(this),
            this._postponeUpdatePaths && (this._postponeUpdatePaths = !1,
            this._updatePaths())
        },
        _initPath: function(t) {
            this._updateDashArray(t);
            t = (this._layers[h(t)] = t)._order = {
                layer: t,
                prev: this._drawLast,
                next: null
            };
            this._drawLast && (this._drawLast.next = t),
            this._drawLast = t,
            this._drawFirst = this._drawFirst || this._drawLast
        },
        _addPath: function(t) {
            this._requestRedraw(t)
        },
        _removePath: function(t) {
            var e = t._order
              , i = e.next
              , e = e.prev;
            i ? i.prev = e : this._drawLast = e,
            e ? e.next = i : this._drawFirst = i,
            delete t._order,
            delete this._layers[h(t)],
            this._requestRedraw(t)
        },
        _updatePath: function(t) {
            this._extendRedrawBounds(t),
            t._project(),
            t._update(),
            this._requestRedraw(t)
        },
        _updateStyle: function(t) {
            this._updateDashArray(t),
            this._requestRedraw(t)
        },
        _updateDashArray: function(t) {
            if ("string" == typeof t.options.dashArray) {
                for (var e, i = t.options.dashArray.split(/[, ]+/), n = [], o = 0; o < i.length; o++) {
                    if (e = Number(i[o]),
                    isNaN(e))
                        return;
                    n.push(e)
                }
                t.options._dashArray = n
            } else
                t.options._dashArray = t.options.dashArray
        },
        _requestRedraw: function(t) {
            this._map && (this._extendRedrawBounds(t),
            this._redrawRequest = this._redrawRequest || x(this._redraw, this))
        },
        _extendRedrawBounds: function(t) {
            var e;
            t._pxBounds && (e = (t.options.weight || 0) + 1,
            this._redrawBounds = this._redrawBounds || new f,
            this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])),
            this._redrawBounds.extend(t._pxBounds.max.add([e, e])))
        },
        _redraw: function() {
            this._redrawRequest = null,
            this._redrawBounds && (this._redrawBounds.min._floor(),
            this._redrawBounds.max._ceil()),
            this._clear(),
            this._draw(),
            this._redrawBounds = null
        },
        _clear: function() {
            var t, e = this._redrawBounds;
            e ? (t = e.getSize(),
            this._ctx.clearRect(e.min.x, e.min.y, t.x, t.y)) : (this._ctx.save(),
            this._ctx.setTransform(1, 0, 0, 1, 0, 0),
            this._ctx.clearRect(0, 0, this._container.width, this._container.height),
            this._ctx.restore())
        },
        _draw: function() {
            var t, e, i = this._redrawBounds;
            this._ctx.save(),
            i && (e = i.getSize(),
            this._ctx.beginPath(),
            this._ctx.rect(i.min.x, i.min.y, e.x, e.y),
            this._ctx.clip()),
            this._drawing = !0;
            for (var n = this._drawFirst; n; n = n.next)
                t = n.layer,
                (!i || t._pxBounds && t._pxBounds.intersects(i)) && t._updatePath();
            this._drawing = !1,
            this._ctx.restore()
        },
        _updatePoly: function(t, e) {
            if (this._drawing) {
                var i, n, o, s, r = t._parts, a = r.length, h = this._ctx;
                if (a) {
                    for (h.beginPath(),
                    i = 0; i < a; i++) {
                        for (n = 0,
                        o = r[i].length; n < o; n++)
                            s = r[i][n],
                            h[n ? "lineTo" : "moveTo"](s.x, s.y);
                        e && h.closePath()
                    }
                    this._fillStroke(h, t)
                }
            }
        },
        _updateCircle: function(t) {
            var e, i, n, o;
            this._drawing && !t._empty() && (e = t._point,
            i = this._ctx,
            n = Math.max(Math.round(t._radius), 1),
            1 != (o = (Math.max(Math.round(t._radiusY), 1) || n) / n) && (i.save(),
            i.scale(1, o)),
            i.beginPath(),
            i.arc(e.x, e.y / o, n, 0, 2 * Math.PI, !1),
            1 != o && i.restore(),
            this._fillStroke(i, t))
        },
        _fillStroke: function(t, e) {
            var i = e.options;
            i.fill && (t.globalAlpha = i.fillOpacity,
            t.fillStyle = i.fillColor || i.color,
            t.fill(i.fillRule || "evenodd")),
            i.stroke && 0 !== i.weight && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []),
            t.globalAlpha = i.opacity,
            t.lineWidth = i.weight,
            t.strokeStyle = i.color,
            t.lineCap = i.lineCap,
            t.lineJoin = i.lineJoin,
            t.stroke())
        },
        _onClick: function(t) {
            for (var e, i, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)
                (e = o.layer).options.interactive && e._containsPoint(n) && (("click" === t.type || "preclick" === t.type) && this._map._draggableMoved(e) || (i = e));
            this._fireEvent(!!i && [i], t)
        },
        _onMouseMove: function(t) {
            var e;
            !this._map || this._map.dragging.moving() || this._map._animatingZoom || (e = this._map.mouseEventToLayerPoint(t),
            this._handleMouseHover(t, e))
        },
        _handleMouseOut: function(t) {
            var e = this._hoveredLayer;
            e && (z(this._container, "leaflet-interactive"),
            this._fireEvent([e], t, "mouseout"),
            this._hoveredLayer = null,
            this._mouseHoverThrottled = !1)
        },
        _handleMouseHover: function(t, e) {
            if (!this._mouseHoverThrottled) {
                for (var i, n, o = this._drawFirst; o; o = o.next)
                    (i = o.layer).options.interactive && i._containsPoint(e) && (n = i);
                n !== this._hoveredLayer && (this._handleMouseOut(t),
                n && (M(this._container, "leaflet-interactive"),
                this._fireEvent([n], t, "mouseover"),
                this._hoveredLayer = n)),
                this._fireEvent(!!this._hoveredLayer && [this._hoveredLayer], t),
                this._mouseHoverThrottled = !0,
                setTimeout(a(function() {
                    this._mouseHoverThrottled = !1
                }, this), 32)
            }
        },
        _fireEvent: function(t, e, i) {
            this._map._fireDOMEvent(e, i || e.type, t)
        },
        _bringToFront: function(t) {
            var e, i, n = t._order;
            n && (e = n.next,
            i = n.prev,
            e && ((e.prev = i) ? i.next = e : e && (this._drawFirst = e),
            n.prev = this._drawLast,
            (this._drawLast.next = n).next = null,
            this._drawLast = n,
            this._requestRedraw(t)))
        },
        _bringToBack: function(t) {
            var e, i, n = t._order;
            n && (e = n.next,
            (i = n.prev) && ((i.next = e) ? e.prev = i : i && (this._drawLast = i),
            n.prev = null,
            n.next = this._drawFirst,
            this._drawFirst.prev = n,
            this._drawFirst = n,
            this._requestRedraw(t)))
        }
    });
    function Ui(t) {
        return b.canvas ? new Fi(t) : null
    }
    var Vi = function() {
        try {
            return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
            function(t) {
                return document.createElement("<lvml:" + t + ' class="lvml">')
            }
        } catch (t) {}
        return function(t) {
            return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
        }
    }()
      , zt = {
        _initContainer: function() {
            this._container = P("div", "leaflet-vml-container")
        },
        _update: function() {
            this._map._animatingZoom || (Wi.prototype._update.call(this),
            this.fire("update"))
        },
        _initPath: function(t) {
            var e = t._container = Vi("shape");
            M(e, "leaflet-vml-shape " + (this.options.className || "")),
            e.coordsize = "1 1",
            t._path = Vi("path"),
            e.appendChild(t._path),
            this._updateStyle(t),
            this._layers[h(t)] = t
        },
        _addPath: function(t) {
            var e = t._container;
            this._container.appendChild(e),
            t.options.interactive && t.addInteractiveTarget(e)
        },
        _removePath: function(t) {
            var e = t._container;
            T(e),
            t.removeInteractiveTarget(e),
            delete this._layers[h(t)]
        },
        _updateStyle: function(t) {
            var e = t._stroke
              , i = t._fill
              , n = t.options
              , o = t._container;
            o.stroked = !!n.stroke,
            o.filled = !!n.fill,
            n.stroke ? (e = e || (t._stroke = Vi("stroke")),
            o.appendChild(e),
            e.weight = n.weight + "px",
            e.color = n.color,
            e.opacity = n.opacity,
            n.dashArray ? e.dashStyle = d(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "",
            e.endcap = n.lineCap.replace("butt", "flat"),
            e.joinstyle = n.lineJoin) : e && (o.removeChild(e),
            t._stroke = null),
            n.fill ? (i = i || (t._fill = Vi("fill")),
            o.appendChild(i),
            i.color = n.fillColor || n.color,
            i.opacity = n.fillOpacity) : i && (o.removeChild(i),
            t._fill = null)
        },
        _updateCircle: function(t) {
            var e = t._point.round()
              , i = Math.round(t._radius)
              , n = Math.round(t._radiusY || i);
            this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0,23592600")
        },
        _setPath: function(t, e) {
            t._path.v = e
        },
        _bringToFront: function(t) {
            fe(t._container)
        },
        _bringToBack: function(t) {
            ge(t._container)
        }
    }
      , qi = b.vml ? Vi : ct
      , Gi = Wi.extend({
        _initContainer: function() {
            this._container = qi("svg"),
            this._container.setAttribute("pointer-events", "none"),
            this._rootGroup = qi("g"),
            this._container.appendChild(this._rootGroup)
        },
        _destroyContainer: function() {
            T(this._container),
            k(this._container),
            delete this._container,
            delete this._rootGroup,
            delete this._svgSize
        },
        _update: function() {
            var t, e, i;
            this._map._animatingZoom && this._bounds || (Wi.prototype._update.call(this),
            e = (t = this._bounds).getSize(),
            i = this._container,
            this._svgSize && this._svgSize.equals(e) || (this._svgSize = e,
            i.setAttribute("width", e.x),
            i.setAttribute("height", e.y)),
            Z(i, t.min),
            i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")),
            this.fire("update"))
        },
        _initPath: function(t) {
            var e = t._path = qi("path");
            t.options.className && M(e, t.options.className),
            t.options.interactive && M(e, "leaflet-interactive"),
            this._updateStyle(t),
            this._layers[h(t)] = t
        },
        _addPath: function(t) {
            this._rootGroup || this._initContainer(),
            this._rootGroup.appendChild(t._path),
            t.addInteractiveTarget(t._path)
        },
        _removePath: function(t) {
            T(t._path),
            t.removeInteractiveTarget(t._path),
            delete this._layers[h(t)]
        },
        _updatePath: function(t) {
            t._project(),
            t._update()
        },
        _updateStyle: function(t) {
            var e = t._path
              , t = t.options;
            e && (t.stroke ? (e.setAttribute("stroke", t.color),
            e.setAttribute("stroke-opacity", t.opacity),
            e.setAttribute("stroke-width", t.weight),
            e.setAttribute("stroke-linecap", t.lineCap),
            e.setAttribute("stroke-linejoin", t.lineJoin),
            t.dashArray ? e.setAttribute("stroke-dasharray", t.dashArray) : e.removeAttribute("stroke-dasharray"),
            t.dashOffset ? e.setAttribute("stroke-dashoffset", t.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"),
            t.fill ? (e.setAttribute("fill", t.fillColor || t.color),
            e.setAttribute("fill-opacity", t.fillOpacity),
            e.setAttribute("fill-rule", t.fillRule || "evenodd")) : e.setAttribute("fill", "none"))
        },
        _updatePoly: function(t, e) {
            this._setPath(t, dt(t._parts, e))
        },
        _updateCircle: function(t) {
            var e = t._point
              , i = Math.max(Math.round(t._radius), 1)
              , n = "a" + i + "," + (Math.max(Math.round(t._radiusY), 1) || i) + " 0 1,0 "
              , e = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + n + 2 * i + ",0 " + n + 2 * -i + ",0 ";
            this._setPath(t, e)
        },
        _setPath: function(t, e) {
            t._path.setAttribute("d", e)
        },
        _bringToFront: function(t) {
            fe(t._path)
        },
        _bringToBack: function(t) {
            ge(t._path)
        }
    });
    function Ki(t) {
        return b.svg || b.vml ? new Gi(t) : null
    }
    b.vml && Gi.include(zt),
    A.include({
        getRenderer: function(t) {
            t = (t = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer) || (this._renderer = this._createRenderer());
            return this.hasLayer(t) || this.addLayer(t),
            t
        },
        _getPaneRenderer: function(t) {
            var e;
            return "overlayPane" !== t && void 0 !== t && (void 0 === (e = this._paneRenderers[t]) && (e = this._createRenderer({
                pane: t
            }),
            this._paneRenderers[t] = e),
            e)
        },
        _createRenderer: function(t) {
            return this.options.preferCanvas && Ui(t) || Ki(t)
        }
    });
    var Yi = xi.extend({
        initialize: function(t, e) {
            xi.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
        },
        setBounds: function(t) {
            return this.setLatLngs(this._boundsToLatLngs(t))
        },
        _boundsToLatLngs: function(t) {
            return [(t = g(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
        }
    });
    Gi.create = qi,
    Gi.pointsToPath = dt,
    wi.geometryToLayer = bi,
    wi.coordsToLatLng = Li,
    wi.coordsToLatLngs = Ti,
    wi.latLngToCoords = Mi,
    wi.latLngsToCoords = zi,
    wi.getFeature = Ci,
    wi.asFeature = Zi,
    A.mergeOptions({
        boxZoom: !0
    });
    var _t = n.extend({
        initialize: function(t) {
            this._map = t,
            this._container = t._container,
            this._pane = t._panes.overlayPane,
            this._resetStateTimeout = 0,
            t.on("unload", this._destroy, this)
        },
        addHooks: function() {
            S(this._container, "mousedown", this._onMouseDown, this)
        },
        removeHooks: function() {
            k(this._container, "mousedown", this._onMouseDown, this)
        },
        moved: function() {
            return this._moved
        },
        _destroy: function() {
            T(this._pane),
            delete this._pane
        },
        _resetState: function() {
            this._resetStateTimeout = 0,
            this._moved = !1
        },
        _clearDeferredResetState: function() {
            0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout),
            this._resetStateTimeout = 0)
        },
        _onMouseDown: function(t) {
            if (!t.shiftKey || 1 !== t.which && 1 !== t.button)
                return !1;
            this._clearDeferredResetState(),
            this._resetState(),
            re(),
            Le(),
            this._startPoint = this._map.mouseEventToContainerPoint(t),
            S(document, {
                contextmenu: Re,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this)
        },
        _onMouseMove: function(t) {
            this._moved || (this._moved = !0,
            this._box = P("div", "leaflet-zoom-box", this._container),
            M(this._container, "leaflet-crosshair"),
            this._map.fire("boxzoomstart")),
            this._point = this._map.mouseEventToContainerPoint(t);
            var t = new f(this._point,this._startPoint)
              , e = t.getSize();
            Z(this._box, t.min),
            this._box.style.width = e.x + "px",
            this._box.style.height = e.y + "px"
        },
        _finish: function() {
            this._moved && (T(this._box),
            z(this._container, "leaflet-crosshair")),
            ae(),
            Te(),
            k(document, {
                contextmenu: Re,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this)
        },
        _onMouseUp: function(t) {
            1 !== t.which && 1 !== t.button || (this._finish(),
            this._moved && (this._clearDeferredResetState(),
            this._resetStateTimeout = setTimeout(a(this._resetState, this), 0),
            t = new s(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point)),
            this._map.fitBounds(t).fire("boxzoomend", {
                boxZoomBounds: t
            })))
        },
        _onKeyDown: function(t) {
            27 === t.keyCode && (this._finish(),
            this._clearDeferredResetState(),
            this._resetState())
        }
    })
      , Ct = (A.addInitHook("addHandler", "boxZoom", _t),
    A.mergeOptions({
        doubleClickZoom: !0
    }),
    n.extend({
        addHooks: function() {
            this._map.on("dblclick", this._onDoubleClick, this)
        },
        removeHooks: function() {
            this._map.off("dblclick", this._onDoubleClick, this)
        },
        _onDoubleClick: function(t) {
            var e = this._map
              , i = e.getZoom()
              , n = e.options.zoomDelta
              , i = t.originalEvent.shiftKey ? i - n : i + n;
            "center" === e.options.doubleClickZoom ? e.setZoom(i) : e.setZoomAround(t.containerPoint, i)
        }
    }))
      , Zt = (A.addInitHook("addHandler", "doubleClickZoom", Ct),
    A.mergeOptions({
        dragging: !0,
        inertia: !0,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: .2,
        worldCopyJump: !1,
        maxBoundsViscosity: 0
    }),
    n.extend({
        addHooks: function() {
            var t;
            this._draggable || (t = this._map,
            this._draggable = new Xe(t._mapPane,t._container),
            this._draggable.on({
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd
            }, this),
            this._draggable.on("predrag", this._onPreDragLimit, this),
            t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this),
            t.on("zoomend", this._onZoomEnd, this),
            t.whenReady(this._onZoomEnd, this))),
            M(this._map._container, "leaflet-grab leaflet-touch-drag"),
            this._draggable.enable(),
            this._positions = [],
            this._times = []
        },
        removeHooks: function() {
            z(this._map._container, "leaflet-grab"),
            z(this._map._container, "leaflet-touch-drag"),
            this._draggable.disable()
        },
        moved: function() {
            return this._draggable && this._draggable._moved
        },
        moving: function() {
            return this._draggable && this._draggable._moving
        },
        _onDragStart: function() {
            var t, e = this._map;
            e._stop(),
            this._map.options.maxBounds && this._map.options.maxBoundsViscosity ? (t = g(this._map.options.maxBounds),
            this._offsetLimit = _(this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(t.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),
            this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))) : this._offsetLimit = null,
            e.fire("movestart").fire("dragstart"),
            e.options.inertia && (this._positions = [],
            this._times = [])
        },
        _onDrag: function(t) {
            var e, i;
            this._map.options.inertia && (e = this._lastTime = +new Date,
            i = this._lastPos = this._draggable._absPos || this._draggable._newPos,
            this._positions.push(i),
            this._times.push(e),
            this._prunePositions(e)),
            this._map.fire("move", t).fire("drag", t)
        },
        _prunePositions: function(t) {
            for (; 1 < this._positions.length && 50 < t - this._times[0]; )
                this._positions.shift(),
                this._times.shift()
        },
        _onZoomEnd: function() {
            var t = this._map.getSize().divideBy(2)
              , e = this._map.latLngToLayerPoint([0, 0]);
            this._initialWorldOffset = e.subtract(t).x,
            this._worldWidth = this._map.getPixelWorldBounds().getSize().x
        },
        _viscousLimit: function(t, e) {
            return t - (t - e) * this._viscosity
        },
        _onPreDragLimit: function() {
            var t, e;
            this._viscosity && this._offsetLimit && (t = this._draggable._newPos.subtract(this._draggable._startPos),
            e = this._offsetLimit,
            t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)),
            t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)),
            t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)),
            t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)),
            this._draggable._newPos = this._draggable._startPos.add(t))
        },
        _onPreDragWrap: function() {
            var t = this._worldWidth
              , e = Math.round(t / 2)
              , i = this._initialWorldOffset
              , n = this._draggable._newPos.x
              , o = (n - e + i) % t + e - i
              , n = (n + e + i) % t - e - i
              , t = Math.abs(o + i) < Math.abs(n + i) ? o : n;
            this._draggable._absPos = this._draggable._newPos.clone(),
            this._draggable._newPos.x = t
        },
        _onDragEnd: function(t) {
            var e, i, n, o, s = this._map, r = s.options, a = !r.inertia || t.noInertia || this._times.length < 2;
            s.fire("dragend", t),
            !a && (this._prunePositions(+new Date),
            t = this._lastPos.subtract(this._positions[0]),
            a = (this._lastTime - this._times[0]) / 1e3,
            e = r.easeLinearity,
            a = (t = t.multiplyBy(e / a)).distanceTo([0, 0]),
            i = Math.min(r.inertiaMaxSpeed, a),
            t = t.multiplyBy(i / a),
            n = i / (r.inertiaDeceleration * e),
            (o = t.multiplyBy(-n / 2).round()).x || o.y) ? (o = s._limitOffset(o, s.options.maxBounds),
            x(function() {
                s.panBy(o, {
                    duration: n,
                    easeLinearity: e,
                    noMoveStart: !0,
                    animate: !0
                })
            })) : s.fire("moveend")
        }
    }))
      , St = (A.addInitHook("addHandler", "dragging", Zt),
    A.mergeOptions({
        keyboard: !0,
        keyboardPanDelta: 80
    }),
    n.extend({
        keyCodes: {
            left: [37],
            right: [39],
            down: [40],
            up: [38],
            zoomIn: [187, 107, 61, 171],
            zoomOut: [189, 109, 54, 173]
        },
        initialize: function(t) {
            this._map = t,
            this._setPanDelta(t.options.keyboardPanDelta),
            this._setZoomDelta(t.options.zoomDelta)
        },
        addHooks: function() {
            var t = this._map._container;
            t.tabIndex <= 0 && (t.tabIndex = "0"),
            S(t, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this),
            this._map.on({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this)
        },
        removeHooks: function() {
            this._removeHooks(),
            k(this._map._container, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this),
            this._map.off({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this)
        },
        _onMouseDown: function() {
            var t, e, i;
            this._focused || (i = document.body,
            t = document.documentElement,
            e = i.scrollTop || t.scrollTop,
            i = i.scrollLeft || t.scrollLeft,
            this._map._container.focus(),
            window.scrollTo(i, e))
        },
        _onFocus: function() {
            this._focused = !0,
            this._map.fire("focus")
        },
        _onBlur: function() {
            this._focused = !1,
            this._map.fire("blur")
        },
        _setPanDelta: function(t) {
            for (var e = this._panKeys = {}, i = this.keyCodes, n = 0, o = i.left.length; n < o; n++)
                e[i.left[n]] = [-1 * t, 0];
            for (n = 0,
            o = i.right.length; n < o; n++)
                e[i.right[n]] = [t, 0];
            for (n = 0,
            o = i.down.length; n < o; n++)
                e[i.down[n]] = [0, t];
            for (n = 0,
            o = i.up.length; n < o; n++)
                e[i.up[n]] = [0, -1 * t]
        },
        _setZoomDelta: function(t) {
            for (var e = this._zoomKeys = {}, i = this.keyCodes, n = 0, o = i.zoomIn.length; n < o; n++)
                e[i.zoomIn[n]] = t;
            for (n = 0,
            o = i.zoomOut.length; n < o; n++)
                e[i.zoomOut[n]] = -t
        },
        _addHooks: function() {
            S(document, "keydown", this._onKeyDown, this)
        },
        _removeHooks: function() {
            k(document, "keydown", this._onKeyDown, this)
        },
        _onKeyDown: function(t) {
            if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                var e, i, n = t.keyCode, o = this._map;
                if (n in this._panKeys)
                    o._panAnim && o._panAnim._inProgress || (i = this._panKeys[n],
                    t.shiftKey && (i = m(i).multiplyBy(3)),
                    o.options.maxBounds && (i = o._limitOffset(m(i), o.options.maxBounds)),
                    o.options.worldCopyJump ? (e = o.wrapLatLng(o.unproject(o.project(o.getCenter()).add(i))),
                    o.panTo(e)) : o.panBy(i));
                else if (n in this._zoomKeys)
                    o.setZoom(o.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[n]);
                else {
                    if (27 !== n || !o._popup || !o._popup.options.closeOnEscapeKey)
                        return;
                    o.closePopup()
                }
                Re(t)
            }
        }
    }))
      , Et = (A.addInitHook("addHandler", "keyboard", St),
    A.mergeOptions({
        scrollWheelZoom: !0,
        wheelDebounceTime: 40,
        wheelPxPerZoomLevel: 60
    }),
    n.extend({
        addHooks: function() {
            S(this._map._container, "wheel", this._onWheelScroll, this),
            this._delta = 0
        },
        removeHooks: function() {
            k(this._map._container, "wheel", this._onWheelScroll, this)
        },
        _onWheelScroll: function(t) {
            var e = He(t)
              , i = this._map.options.wheelDebounceTime
              , e = (this._delta += e,
            this._lastMousePos = this._map.mouseEventToContainerPoint(t),
            this._startTime || (this._startTime = +new Date),
            Math.max(i - (+new Date - this._startTime), 0));
            clearTimeout(this._timer),
            this._timer = setTimeout(a(this._performZoom, this), e),
            Re(t)
        },
        _performZoom: function() {
            var t = this._map
              , e = t.getZoom()
              , i = this._map.options.zoomSnap || 0
              , n = (t._stop(),
            this._delta / (4 * this._map.options.wheelPxPerZoomLevel))
              , n = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2
              , i = i ? Math.ceil(n / i) * i : n
              , n = t._limitZoom(e + (0 < this._delta ? i : -i)) - e;
            this._delta = 0,
            this._startTime = null,
            n && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + n) : t.setZoomAround(this._lastMousePos, e + n))
        }
    }))
      , kt = (A.addInitHook("addHandler", "scrollWheelZoom", Et),
    A.mergeOptions({
        tapHold: b.touchNative && b.safari && b.mobile,
        tapTolerance: 15
    }),
    n.extend({
        addHooks: function() {
            S(this._map._container, "touchstart", this._onDown, this)
        },
        removeHooks: function() {
            k(this._map._container, "touchstart", this._onDown, this)
        },
        _onDown: function(t) {
            var e;
            clearTimeout(this._holdTimeout),
            1 === t.touches.length && (e = t.touches[0],
            this._startPos = this._newPos = new p(e.clientX,e.clientY),
            this._holdTimeout = setTimeout(a(function() {
                this._cancel(),
                this._isTapValid() && (S(document, "touchend", O),
                S(document, "touchend touchcancel", this._cancelClickPrevent),
                this._simulateEvent("contextmenu", e))
            }, this), 600),
            S(document, "touchend touchcancel contextmenu", this._cancel, this),
            S(document, "touchmove", this._onMove, this))
        },
        _cancelClickPrevent: function t() {
            k(document, "touchend", O),
            k(document, "touchend touchcancel", t)
        },
        _cancel: function() {
            clearTimeout(this._holdTimeout),
            k(document, "touchend touchcancel contextmenu", this._cancel, this),
            k(document, "touchmove", this._onMove, this)
        },
        _onMove: function(t) {
            t = t.touches[0];
            this._newPos = new p(t.clientX,t.clientY)
        },
        _isTapValid: function() {
            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
        },
        _simulateEvent: function(t, e) {
            t = new MouseEvent(t,{
                bubbles: !0,
                cancelable: !0,
                view: window,
                screenX: e.screenX,
                screenY: e.screenY,
                clientX: e.clientX,
                clientY: e.clientY
            });
            t._simulated = !0,
            e.target.dispatchEvent(t)
        }
    }))
      , Ot = (A.addInitHook("addHandler", "tapHold", kt),
    A.mergeOptions({
        touchZoom: b.touch,
        bounceAtZoomLimits: !0
    }),
    n.extend({
        addHooks: function() {
            M(this._map._container, "leaflet-touch-zoom"),
            S(this._map._container, "touchstart", this._onTouchStart, this)
        },
        removeHooks: function() {
            z(this._map._container, "leaflet-touch-zoom"),
            k(this._map._container, "touchstart", this._onTouchStart, this)
        },
        _onTouchStart: function(t) {
            var e, i, n = this._map;
            !t.touches || 2 !== t.touches.length || n._animatingZoom || this._zooming || (e = n.mouseEventToContainerPoint(t.touches[0]),
            i = n.mouseEventToContainerPoint(t.touches[1]),
            this._centerPoint = n.getSize()._divideBy(2),
            this._startLatLng = n.containerPointToLatLng(this._centerPoint),
            "center" !== n.options.touchZoom && (this._pinchStartLatLng = n.containerPointToLatLng(e.add(i)._divideBy(2))),
            this._startDist = e.distanceTo(i),
            this._startZoom = n.getZoom(),
            this._moved = !1,
            this._zooming = !0,
            n._stop(),
            S(document, "touchmove", this._onTouchMove, this),
            S(document, "touchend touchcancel", this._onTouchEnd, this),
            O(t))
        },
        _onTouchMove: function(t) {
            if (t.touches && 2 === t.touches.length && this._zooming) {
                var e = this._map
                  , i = e.mouseEventToContainerPoint(t.touches[0])
                  , n = e.mouseEventToContainerPoint(t.touches[1])
                  , o = i.distanceTo(n) / this._startDist;
                if (this._zoom = e.getScaleZoom(o, this._startZoom),
                !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && o < 1 || this._zoom > e.getMaxZoom() && 1 < o) && (this._zoom = e._limitZoom(this._zoom)),
                "center" === e.options.touchZoom) {
                    if (this._center = this._startLatLng,
                    1 == o)
                        return
                } else {
                    i = i._add(n)._divideBy(2)._subtract(this._centerPoint);
                    if (1 == o && 0 === i.x && 0 === i.y)
                        return;
                    this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(i), this._zoom)
                }
                this._moved || (e._moveStart(!0, !1),
                this._moved = !0),
                r(this._animRequest);
                n = a(e._move, e, this._center, this._zoom, {
                    pinch: !0,
                    round: !1
                }, void 0);
                this._animRequest = x(n, this, !0),
                O(t)
            }
        },
        _onTouchEnd: function() {
            this._moved && this._zooming ? (this._zooming = !1,
            r(this._animRequest),
            k(document, "touchmove", this._onTouchMove, this),
            k(document, "touchend touchcancel", this._onTouchEnd, this),
            this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1
        }
    }))
      , Xi = (A.addInitHook("addHandler", "touchZoom", Ot),
    A.BoxZoom = _t,
    A.DoubleClickZoom = Ct,
    A.Drag = Zt,
    A.Keyboard = St,
    A.ScrollWheelZoom = Et,
    A.TapHold = kt,
    A.TouchZoom = Ot,
    t.Bounds = f,
    t.Browser = b,
    t.CRS = ot,
    t.Canvas = Fi,
    t.Circle = vi,
    t.CircleMarker = gi,
    t.Class = et,
    t.Control = B,
    t.DivIcon = Ri,
    t.DivOverlay = Ai,
    t.DomEvent = mt,
    t.DomUtil = pt,
    t.Draggable = Xe,
    t.Evented = it,
    t.FeatureGroup = ci,
    t.GeoJSON = wi,
    t.GridLayer = Ni,
    t.Handler = n,
    t.Icon = di,
    t.ImageOverlay = Ei,
    t.LatLng = v,
    t.LatLngBounds = s,
    t.Layer = o,
    t.LayerGroup = ui,
    t.LineUtil = vt,
    t.Map = A,
    t.Marker = mi,
    t.Mixin = ft,
    t.Path = fi,
    t.Point = p,
    t.PolyUtil = gt,
    t.Polygon = xi,
    t.Polyline = yi,
    t.Popup = Bi,
    t.PosAnimation = Fe,
    t.Projection = wt,
    t.Rectangle = Yi,
    t.Renderer = Wi,
    t.SVG = Gi,
    t.SVGOverlay = Oi,
    t.TileLayer = Di,
    t.Tooltip = Ii,
    t.Transformation = at,
    t.Util = tt,
    t.VideoOverlay = ki,
    t.bind = a,
    t.bounds = _,
    t.canvas = Ui,
    t.circle = function(t, e, i) {
        return new vi(t,e,i)
    }
    ,
    t.circleMarker = function(t, e) {
        return new gi(t,e)
    }
    ,
    t.control = Ue,
    t.divIcon = function(t) {
        return new Ri(t)
    }
    ,
    t.extend = l,
    t.featureGroup = function(t, e) {
        return new ci(t,e)
    }
    ,
    t.geoJSON = Si,
    t.geoJson = Mt,
    t.gridLayer = function(t) {
        return new Ni(t)
    }
    ,
    t.icon = function(t) {
        return new di(t)
    }
    ,
    t.imageOverlay = function(t, e, i) {
        return new Ei(t,e,i)
    }
    ,
    t.latLng = w,
    t.latLngBounds = g,
    t.layerGroup = function(t, e) {
        return new ui(t,e)
    }
    ,
    t.map = function(t, e) {
        return new A(t,e)
    }
    ,
    t.marker = function(t, e) {
        return new mi(t,e)
    }
    ,
    t.point = m,
    t.polygon = function(t, e) {
        return new xi(t,e)
    }
    ,
    t.polyline = function(t, e) {
        return new yi(t,e)
    }
    ,
    t.popup = function(t, e) {
        return new Bi(t,e)
    }
    ,
    t.rectangle = function(t, e) {
        return new Yi(t,e)
    }
    ,
    t.setOptions = c,
    t.stamp = h,
    t.svg = Ki,
    t.svgOverlay = function(t, e, i) {
        return new Oi(t,e,i)
    }
    ,
    t.tileLayer = ji,
    t.tooltip = function(t, e) {
        return new Ii(t,e)
    }
    ,
    t.transformation = ht,
    t.version = "1.9.4",
    t.videoOverlay = function(t, e, i) {
        return new ki(t,e,i)
    }
    ,
    window.L);
    t.noConflict = function() {
        return window.L = Xi,
        this
    }
    ,
    window.L = t
});
L.Map.addInitHook(function() {
    var map = this;
    map._current = {
        events: {
            keyboard: !1
        },
        marker: {
            selectedIcon: !1,
            selected: !1
        },
        popup: !1,
        tooltip: !1,
        layer: {
            selected: !1
        }
    };
    L.Popup.prototype.options.autoPanPadding = [30, 30];
    map.on({
        tooltipopen: function(e) {
            if (map._current.events.keyboard) {
                var currentLayer = map._current.layer.selected;
                if (currentLayer) {
                    currentLayer.fire("mouseout")
                }
            }
        },
        popupopen: function(e) {
            var content = e.popup._container.querySelector("div div");
            if (content && e.popup._source) {
                content.setAttribute("role", "dialog");
                content.setAttribute("tabindex", "0");
                content.focus()
            }
        },
        keyup: function(e) {
            if (map._current.events.keyboard && e.originalEvent.key === 'Escape') {
                map.closePopup()
            }
        }
    });
    $wt.map.extend({
        shortcutToCountriesList: function(list, asArray) {
            var countriesList = [{
                "level": !1,
                "countries": []
            }, {
                "level": 0,
                "countries": []
            }, {
                "level": 1,
                "countries": []
            }, {
                "level": 2,
                "countries": []
            }, {
                "level": 3,
                "countries": []
            }];
            var toCountries = function() {
                var newList = [];
                list = list.map(name => name.toUpperCase());
                var alreadyExist = function(item, arr) {
                    var inList = !1;
                    ["", "-", "*0", "*1", "*2", "*3"].reverse().forEach(function(wildcards) {
                        if ((arr || list).indexOf(item + wildcards) > -1) {
                            inList = !0
                        }
                    });
                    return inList
                };
                [].forEach.call(list, function(item) {
                    var isShortCut = /(EU28|EU27|ALL)/i.test(item);
                    var cntr = item.toUpperCase();
                    var cntr_id = cntr.slice(0, 2);
                    var nuts_id = (cntr_id !== cntr && !/(\*|\-)/i.test(item));
                    if (isShortCut) {
                        var shortCut = cntr.split("*")[0].split("-")[0].toLowerCase();
                        var isNuts = cntr.indexOf("*") > -1;
                        var isMinus = cntr.indexOf("-") > -1;
                        var useWildCard = (isNuts) ? "*" + cntr.split("*")[1] : (isMinus) ? "-" : "";
                        if ($wt.map.data[shortCut]) {
                            $wt.map.data[shortCut].forEach(function(item) {
                                if (!alreadyExist(item)) {
                                    if (shortCut) {
                                        var wildCard = (useWildCard && $wt.map.data.eu28.indexOf(item) > -1) ? useWildCard : '';
                                        if (wildCard === '-') {
                                            wildCard = ["FR", "ES", "PT"].indexOf(item) > -1 ? '-' : ''
                                        }
                                        newList.push(item + wildCard)
                                    } else {
                                        newList.push(item + useWildCard)
                                    }
                                }
                            })
                        }
                    } else if (nuts_id) {
                        if (!alreadyExist(cntr_id, newList)) {
                            newList.push(cntr_id + "*" + (cntr.length - 2))
                        }
                    } else {
                        newList.push(cntr)
                    }
                });
                newList.forEach(function(cntr) {
                    let useWildCard = cntr.slice(2, cntr.length);
                    let toRec = (useWildCard === "-") ? cntr : cntr.replace(useWildCard, "");
                    let nutsLevel = cntr.split("*")[1] || !1;
                    let level = (nutsLevel === !1) ? 0 : Number(nutsLevel) + 1;
                    let exist = !1;
                    if (useWildCard !== "-" && useWildCard.includes('-')) {
                        level = 0;
                        toRec = cntr;
                        exist = alreadyExist(toRec.slice(0, 2), list)
                    }
                    if (!exist && countriesList[level].countries.indexOf(toRec) === -1) {
                        countriesList[level].countries.push(toRec)
                    }
                });
                return newList
            };
            if (typeof list === "string") {
                list = [list]
            }
            if (typeof list[0] === "string") {
                toCountries()
            } else if (typeof list[0] === "object") {
                return list
            } else if (typeof list === 'object' && !Array.isArray(list)) {
                list = Object.keys(list);
                toCountries()
            }
            if (asArray) {
                return toCountries().map(function(cntr) {
                    return (cntr.indexOf("-") > -1) ? cntr : cntr.slice(0, 2)
                })
            }
            return countriesList
        },
        buildFeatureGroup: function(params) {
            var mainLayer = L.featureGroup();
            mainLayer.extend = function(obj) {
                for (var i in obj) {
                    if (!obj.hasOwnProperty(i)) {
                        continue
                    }
                    this[i] = obj[i]
                }
            }
            ;
            mainLayer.popup = function(fnc, options) {
                this.params.events.click = {
                    type: "popup",
                    content: fnc,
                    options: $wt.mergeParams({}, options)
                };
                return this
            }
            ;
            mainLayer.tooltip = function(fnc, options) {
                this.params.events.tooltip = {
                    content: fnc,
                    options: $wt.mergeParams({}, options || {})
                };
                return this
            }
            ;
            mainLayer.info = function(fnc, options) {
                this.params.events.click = {
                    type: "info",
                    content: fnc,
                    options: $wt.mergeParams({
                        center: !0
                    }, options || {})
                };
                return this
            }
            ;
            mainLayer.click = function(fnc) {
                this.params.events.click = fnc;
                return this
            }
            ;
            mainLayer.border = function(fnc) {
                this.params.country.border = fnc;
                return this
            }
            ;
            mainLayer.ranges = function(fnc) {
                this.params.ranges = $wt.mergeParams(this.params.ranges, fnc);
                return this
            }
            ;
            mainLayer.legend = function(fnc, options) {
                this.params.legend = $wt.mergeParams(this.params.legend || {}, options || {});
                this.params.legend.template = fnc;
                return this
            }
            ;
            mainLayer.params = params;
            return mainLayer
        },
        getData: function(params, fnc) {
            if (params.dataset.result) {
                $wt.map.alignData(params.dataset.result, params, fnc)
            } else {
                $wt.map.getDataset(params.dataset, function(result) {
                    $wt.map.alignData(result, params, fnc);
                    params.dataset.result = result
                })
            }
        },
        getDataset: function(data, callback) {
            if (typeof data !== "object") {
                console.log("WTERROR: The data was not correctly formatted. Must be object.");
                return
            }
            if (typeof data.source === "object") {
                (data.format === "lasko") ? callback($wt.map.processLasko(data.source)[0]) : callback(data.source)
            } else if (/(csv|json|xlsx?|ods|jsonstat)/i.test(data.format)) {
                var convertOpt = $wt.mergeParams({
                    to: "lasko",
                    categories: 'geo',
                    series: 'unit',
                    sheets: !1
                }, data.options);
                $wt.getFile({
                    url: data.source,
                    type: data.format,
                    options: convertOpt,
                    success: function(response) {
                        if (data.format === "csv") {
                            response = $wt.map.processCsv(response, data.options)
                        } else if (data.format === "json") {
                            response = $wt.map.processJson(response)
                        } else if (/(xlsx?|ods)/i.test(data.format)) {
                            response = response.lasko
                        }
                        callback(response)
                    },
                    error: function() {
                        console.error("WTERROR: The request failed on url:" + data.source)
                    }
                })
            } else {
                console.error("WTERROR: Unknown format.")
            }
        },
        alignData: function(data, params, callback) {
            var finalValue = data;
            if (data.sheets && params.dataset.result) {
                finalValue = data.sheets[params.dataset.options.sheets_index || 0].series
            } else if (data.sheets) {
                var sortCallback = function(item1, item2) {
                    if (params.dataset.options.sheets_order === "asc") {
                        return ((item1.label > item2.label) ? 1 : -1)
                    } else if (params.dataset.options.sheets_order === "desc") {
                        return ((item1.label < item2.label) ? 1 : -1)
                    } else {
                        return 0
                    }
                };
                data.sheets.sort(sortCallback);
                data.sheets.forEach(function(itm) {
                    var newData = {};
                    var dataSeries = itm.series[0].data;
                    var seriesLength = itm.series.length;
                    for (var i = 0; i < dataSeries.length; i++) {
                        var key = data.categories[i].id || data.categories[i].label;
                        newData[key] = seriesLength === 1 ? dataSeries[i].value : {
                            value: dataSeries[i].value,
                            text: itm.series[1]?.data[i]?.value || null
                        }
                    }
                    itm.series = newData
                });
                finalValue = data.sheets[params.dataset.options.sheets_index || 0].series
            }
            var tempDataValue = [];
            for (var x in finalValue) {
                var dataVal = finalValue[x];
                var isObject = (dataVal && typeof dataVal === 'object');
                var value = isObject ? dataVal.value : dataVal;
                if (!$wt.map.notSimpleConvertibleNumber(value)) {
                    tempDataValue.push(Number(value))
                }
            }
            var dataValue = tempDataValue.sort(function(a, b) {
                return a - b
            });
            var rangeStyles = {};
            if (params.ranges) {
                for (var i = 0; i < params.ranges.length; i++) {
                    var range = params.ranges[i];
                    var stop = range.stop;
                    var rangeStyle = $wt.map.getRangeStyle(range, params);
                    if (stop !== undefined && rangeStyle) {
                        rangeStyles[stop] = rangeStyle
                    }
                }
            }
            var max = dataValue[dataValue.length - 1];
            var min = dataValue[0];
            callback({
                title: data.label || !1,
                series: data.sheets || !1,
                style: rangeStyles,
                ranges: params.ranges || !1,
                values: finalValue,
                total: dataValue.length,
                max: (max <= 100) ? max : Math.ceil(max),
                min: (min < 100) ? min : Math.floor(min)
            })
        },
        getRangeStyle: function(range, params) {
            return $wt.mergeParams({
                fillColor: range.color || null
            }, params.styles[range.style] || range.style || {})
        },
        processLasko: function(data) {
            var result = {};
            var results = [];
            if (data.sheets) {
                for (var index = 0; index < data.sheets.length; index++) {
                    if (data.sheets[index] && data.sheets[index].series) {
                        for (var j = 0; j < data.sheets[index].series.length; j++) {
                            var datas = data.sheets[index].series[j].data.slice(0);
                            for (var d = 0; d < datas.length; d++) {
                                var key = datas[d].id;
                                if (datas[d].value === 0) {
                                    result[key] = 0
                                } else {
                                    result[key] = $wt.map.toNumber(datas[d].value)
                                }
                            }
                        }
                        results[index] = result;
                        result = {}
                    }
                }
            }
            return results
        },
        processCsv: function(strData, options) {
            var dataValues = {};
            var rawData = $wt.parse.csv(strData, options);
            for (var i = 0; i < rawData.length; i++) {
                var key = rawData[i][0];
                var value = rawData[i][1];
                var text = rawData[i][2];
                value = $wt.map.notSimpleConvertibleNumber(value) ? null : Number(value);
                dataValues[key] = (text) ? {
                    value: value,
                    text: text
                } : value
            }
            return dataValues
        },
        processJson: function(json) {
            var values = {};
            for (var x in json) {
                values[x] = (json[x].value) ? json[x].value : json[x]
            }
            return values
        },
        getRegionData: function(id, data) {
            var regionData = null;
            ["", "-", "*0", "*1", "*2", "*3"].forEach(function(test) {
                var dataVal = data.values[id + test];
                var isObject = (dataVal && typeof dataVal === 'object');
                dataVal = {
                    value: isObject ? dataVal.value : dataVal,
                    text: isObject ? dataVal.text : null
                };
                if (!$wt.map.notSimpleConvertibleNumber(dataVal.value)) {
                    regionData = dataVal
                }
            });
            return regionData
        },
        getFeatureData: function(feature, data) {
            var props = feature.properties;
            if (!props) {
                return null
            }
            var nutsData = $wt.map.getRegionData(props.NUTS_ID, data);
            if (!nutsData) {
                return $wt.map.getRegionData(props.CNTR_ID, data)
            }
            return nutsData
        },
        toNumber: function(value) {
            if (value === "false" || value === "null" || (!value && value !== 0)) {
                return "no data"
            }
            if (isNaN(Number(value))) {
                console.error("WTERROR: Incorrect value : " + value + ".");
                return !1
            }
            return parseFloat(value)
        },
        notSimpleConvertibleNumber: function(nr) {
            return isNaN(Number(nr)) || isNaN(parseFloat(nr))
        },
        createChoroSelect: function(data, params) {
            var select = "";
            if (data.series) {
                if (data.series.length > 1) {
                    for (var i = 0; i < data.series.length; i++) {
                        var toSelected = (i === (params.dataset.options.sheets_index || 0)) ? ' selected="selected" ' : '';
                        select += '<option ' + toSelected + ' value="' + i + '">' + data.series[i].label + '</option>'
                    }
                    select = "<p><select class='wtSelector'>" + select + "</select></p>"
                }
            }
            return select
        },
        tooltipConversion: function(params, defaultParams) {
            if (params.events && params.events.tooltip) {
                delete params.tooltip
            } else if (params.tooltip) {
                var xhtml = params.tooltip.template || defaultParams.events.tooltip.content;
                var template = window[xhtml] || xhtml;
                var asFunction = typeof template === "function";
                params.events = $wt.mergeParams(params.events || {}, {
                    tooltip: {
                        content: xhtml,
                        options: params.tooltip.settings || {
                            direction: "top",
                            sticky: !0
                        }
                    }
                });
                if (asFunction) {
                    params.events.tooltip.content = template
                }
            }
            return params
        },
        layersEventsManager: function(layer, options) {
            var properties = layer.feature.properties;
            var contentReplace = function(content, properties) {
                var propertiesCopy = JSON.parse(JSON.stringify(properties));
                propertiesCopy.lang = propertiesCopy.LANG = document.lang;
                propertiesCopy.debug = JSON.stringify(propertiesCopy, "\n", 2);
                return $wt.template(content, propertiesCopy)
            };
            if (options.tooltip) {
                var tipType = typeof options.tooltip;
                var tipContent = options.tooltip.content || options.tooltip;
                var tipOptions = options.tooltip.options || {};
                var tipContentAsFunction = typeof options.tooltip.content === 'function';
                if (Array.isArray(tipContent)) {
                    tipContent = String($wt.map.rules(properties, tipContent))
                }
                if (tipContentAsFunction) {
                    layer.bindTooltip(contentReplace(options.tooltip.content({
                        properties: properties
                    }), properties), $wt.mergeParams({
                        direction: "top",
                        sticky: !0
                    }, tipOptions))
                } else if (tipType === 'string') {
                    layer.bindTooltip(contentReplace(tipContent, properties), {
                        direction: "top",
                        sticky: !0
                    })
                } else if (tipType === 'object') {
                    layer.bindTooltip(contentReplace(tipContent, properties), $wt.mergeParams({
                        direction: "top",
                        sticky: !0
                    }, tipOptions))
                } else if (tipType === 'function') {
                    options.tooltip(layer)
                }
            }
            if (options.click) {
                var clickType = typeof options.click;
                var clickContent = options.click.content || options.click;
                var clickOptions = options.click.options || {};
                if (Array.isArray(clickContent)) {
                    clickContent = String($wt.map.rules(properties, clickContent))
                }
                if (typeof options.click.content === 'function') {
                    clickContent = clickContent({
                        properties: properties
                    }, layer)
                }
                if (clickType === 'string') {
                    layer._clickAsLink = contentReplace(clickContent, properties);
                    layer.on("click", function() {
                        window.location.href = contentReplace(clickContent, properties)
                    })
                } else if (clickType === 'function') {
                    layer._clickAsFunction = !0;
                    layer.on("click", function() {
                        options.click(layer, options)
                    })
                } else if (clickType === 'object') {
                    if (options.click.type === 'link') {
                        layer._clickAsLink = contentReplace(clickContent, properties);
                        layer.on("click", function() {
                            window.location.href = contentReplace(clickContent, properties)
                        })
                    } else if (options.click.type === 'popup') {
                        layer._clickAsPopup = !0;
                        layer.bindPopup(contentReplace(clickContent, properties), clickOptions)
                    } else if (clickContent !== '') {
                        layer._clickAsInfoPanel = !0;
                        const showInfo = (e) => {
                            let eventName = (layer.feature.geometry.type === "Point") ? "markerClick" : "layerClick";
                            map.fire(eventName, layer);
                            var currentZoom = layer._map.getZoom();
                            var currentCenter = layer._map.getCenter();
                            var srcLayer = e.target;
                            if (srcLayer._tooltip) {
                                if (!srcLayer._tooltip.options.permanent) {
                                    srcLayer.closeTooltip()
                                }
                            }
                            layer._map.info.show(contentReplace(clickContent, properties), {
                                layer: layer
                            });
                            if (clickOptions.center) {
                                if (!layer._map.ui.classList.contains('smartphone')) {
                                    layer._map.activeArea({
                                        right: layer._map.ui.info.offsetWidth + 20
                                    })
                                }
                                if (srcLayer._latlng) {
                                    layer._map.panTo(srcLayer._latlng)
                                } else {
                                    let prop = srcLayer?.feature?.properties || {};
                                    let bounds = srcLayer.getBounds();
                                    [{
                                        id: "FR",
                                        bounds: "FR1"
                                    }, {
                                        id: "ES",
                                        bounds: "ES1"
                                    }, {
                                        id: "PT",
                                        bounds: "PT1"
                                    }].forEach(cntr => {
                                        if (cntr.id === prop.CNTR_ID && !prop.NUTS_ID) {
                                            let B = $wt.map.data.bounds[cntr.bounds];
                                            bounds = [[B[0], B[1]], [B[2], B[3]]]
                                        }
                                    }
                                    );
                                    layer._map.fitBounds(bounds)
                                }
                                layer._map.once("closeInfo", function() {
                                    if (layer._map) {
                                        setTimeout( () => layer._map.setView(currentCenter, currentZoom), 0)
                                    }
                                });
                                layer._map.activeArea({
                                    right: 0
                                })
                            }
                            if (clickOptions.selected) {
                                if (srcLayer.getIcon) {
                                    srcLayer.setOpacity(0);
                                    var isFunctionIcon = typeof clickOptions.selected === 'function';
                                    layer._map._current.marker.selectedIcon = L.marker(srcLayer._latlng, {
                                        zIndexOffset: 9999,
                                        interactive: !1,
                                        icon: (isFunctionIcon) ? clickOptions.selected() : layer._map.icon(clickOptions.selected.marker || clickOptions.selected)
                                    }).addTo(layer._map);
                                    layer._map._current.marker.selected = srcLayer
                                } else {
                                    if (layer._map._current.layer.selected) {
                                        layer._map._current.layer.selected.setStyle(layer._map._current.layer.selected.originalStyle)
                                    }
                                    let options = JSON.parse(JSON.stringify(srcLayer.options));
                                    srcLayer.originalStyle = {
                                        fillColor: options.fillColor,
                                        fillOpacity: options.fillOpacity,
                                        labelColor: options.labelColor,
                                        weight: options.weight,
                                        color: options.color,
                                        opacity: options.opacity,
                                        dashArray: options.dashArray,
                                        dashOffset: options.dashOffset
                                    };
                                    layer._map._current.layer.selected = srcLayer;
                                    srcLayer.setStyle(clickOptions.selected)
                                }
                            }
                        }
                        ;
                        layer.on('click', showInfo);
                        layer.on('keydown', (e) => {
                            if (e.originalEvent.code === "Space") {
                                e.originalEvent.preventDefault();
                                showInfo(e)
                            }
                        }
                        )
                    }
                }
                if (layer._events && layer._events.click && layer._events.click.length) {
                    layer.on("keypress", function(e) {
                        if (e.originalEvent.key === 'Enter') {
                            if (layer._latlng) {
                                layer._map._current.marker.selected = layer
                            }
                            layer._map._current.events.keyboard = !0;
                            layer.fire("click")
                        }
                    })
                }
            }
        },
        getMobileMapUrl: function(lat, long) {
            if ($wt.isIOS()) {
                return 'maps://?q=' + lat + ',' + long + '&ll='
            }
            return 'https://maps.google.com/maps?daddr=' + lat + ',' + long + '&ll='
        },
        rules: function(feature, conditions) {
            var value = !1;
            var stringToCondition = function(str) {
                var normalize = function(strg, asNumber) {
                    strg = String(strg).trim();
                    if ((strg.charAt(0) === "'" && strg.charAt(strg.length - 1) === "'") || (strg.charAt(0) === '"' && strg.charAt(strg.length - 1) === '"')) {
                        strg = strg.substr(1, strg.length - 2)
                    }
                    return asNumber ? Number(strg) : strg
                };
                var statement = !1;
                var isUpperOrEqual = str.split(">=");
                var isUpper = (isUpperOrEqual.length === 2) ? isUpperOrEqual : str.split(">");
                var isLowerOrEqual = str.split("<=");
                var isLower = (isLowerOrEqual.length === 2) ? isLowerOrEqual : str.split("<");
                var contains = str.split("*=");
                var notContains = str.split("!*");
                var notEqual = str.split("!==");
                notEqual = (notEqual.length === 2) ? notEqual : str.split("!=");
                var equal = str.split("===");
                equal = (equal.length === 2) ? equal : str.split("==");
                if (isUpperOrEqual.length === 2) {
                    return normalize(isUpperOrEqual[0], 1) >= normalize(isUpperOrEqual[1], 1)
                } else if (isUpper.length === 2) {
                    return normalize(isUpper[0], 1) > normalize(isUpper[1], 1)
                } else if (isLowerOrEqual.length === 2) {
                    return normalize(isLowerOrEqual[0], 1) <= normalize(isLowerOrEqual[1], 1)
                } else if (isLower.length === 2) {
                    return normalize(isLower[0], 1) < normalize(isLower[1], 1)
                } else if (notEqual.length === 2) {
                    return normalize(notEqual[0]) !== normalize(notEqual[1])
                } else if (contains.length === 2) {
                    return normalize(contains[0]).indexOf(normalize(contains[1]).replace(/'/ig, '')) > -1
                } else if (notContains.length === 2) {
                    return normalize(notContains[0]).indexOf(normalize(notContains[1]).replace(/'/ig, '')) < 0
                } else if (equal.length === 2) {
                    return normalize(equal[0]) === normalize(equal[1])
                }
                return statement
            };
            for (var i = 0; i < conditions.length; i++) {
                var collection = [];
                var condition = conditions[i];
                var conditionToString = $wt.template(condition.rules || "", feature);
                var statement = stringToCondition(conditionToString);
                var isAnd = conditionToString.split("&&");
                var isOr = conditionToString.split("||");
                if (isAnd.length > 1) {
                    isAnd.map(function(a) {
                        collection.push(stringToCondition(a))
                    });
                    statement = isAnd.length === collection.filter(function(v) {
                        return v
                    }).length
                }
                if (isOr.length > 1) {
                    isOr.map(function(a) {
                        collection.push(stringToCondition(a))
                    });
                    statement = collection.indexOf(!0) > -1
                }
                if (statement || !conditionToString) {
                    value = condition.value;
                    break
                }
            }
            return value
        },
        rulesToFunction: function(array) {
            return function(feat) {
                return $wt.map.rules((feat || {}).properties, array)
            }
        }
    })
});
$wt.map.data = {
    eu28: ["DE", "EL", "FR", "PL", "UK", "SI", "BE", "BG", "CZ", "DK", "EE", "IE", "ES", "HR", "IT", "CY", "LV", "LT", "LU", "HU", "MT", "NL", "AT", "PT", "RO", "SK", "FI", "SE"],
    eu27: ["DE", "EL", "FR", "PL", "SI", "BE", "BG", "CZ", "DK", "EE", "IE", "ES", "HR", "IT", "CY", "LV", "LT", "LU", "HU", "MT", "NL", "AT", "PT", "RO", "SK", "FI", "SE"],
    all: ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CP", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "EL", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GD", "GE", "GG", "GH", "GL", "GM", "GN", "GQ", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TZ", "UA", "UG", "UK", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "ZA", "ZM", "ZW"],
    euArea: {
        "type": "Feature",
        "properties": {
            "name": "European routing polygon"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[-5.863332, 81.43475], [-6.704456, 74.78623], [-34.49296, 62.80744], [-30.83753, 30.81659], [-15.764107, 29.735139], [-9.611205, 35.98587], [-5.653329, 35.89458], [-5.401044, 35.93719], [-5.377002, 35.87962], [-5.345073, 35.86568], [-5.261097, 35.76039], [-5.001727, 35.73424], [-3.105293, 35.432621], [-2.922474, 35.472141], [-2.914235, 35.353502], [-2.946335, 35.324656], [-2.963845, 35.316812], [-2.970368, 35.300843], [-2.972428, 35.28543], [-2.951485, 35.263288], [-2.929856, 35.269174], [-2.912861, 35.287112], [-2.159529, 35.779803], [3.541102, 37.75981], [11.60037, 37.85861], [11.59562, 35.53805], [13.0029, 34], [33.2715, 33.99719], [34.76975, 34.85431], [35.26666, 35.62579], [36.23694, 35.80641], [36.76862, 36.1953], [36.75406, 36.57056], [39.64272, 36.64706], [40.84017, 37.09256], [41.28895, 37.02624], [42.39857, 37.05453], [43.27242, 37.24267], [44.32863, 36.9149], [44.99693, 37.19937], [44.51902, 38.64945], [44.18354, 39.27688], [44.87971, 39.64022], [44.50794, 40.07579], [43.9816, 40.16476], [43.75998, 41.03971], [44.85145, 41.06895], [44.99714, 41.26553], [45.03948, 41.2894], [45.13693, 41.34945], [45.1819, 41.40194], [45.25686, 41.43192], [45.31682, 41.44691], [45.37179, 41.41506], [45.44924, 41.40569], [45.60915, 41.34194], [45.6941, 41.34007], [45.6841, 41.29128], [45.72658, 41.23493], [45.88399, 41.17854], [46.00642, 41.16161], [46.11135, 41.16161], [46.1963, 41.17478], [46.28875, 41.16726], [46.33622, 41.1221], [46.3762, 41.08068], [46.44616, 41.06373], [46.49363, 41.04677], [46.65354, 41.09198], [46.67852, 41.16349], [46.75348, 41.29315], [46.63605, 41.40007], [46.44366, 41.46563], [46.34622, 41.53861], [46.35871, 41.59656], [46.28625, 41.63765], [46.24128, 41.65259], [46.21879, 41.70484], [46.25877, 41.74587], [46.31873, 41.76078], [46.38869, 41.81853], [46.42367, 41.8632], [46.43616, 41.91156], [46.42117, 41.94874], [46.33872, 41.96546], [46.26626, 42.01931], [46.18131, 42.03045], [46.10386, 42.04344], [45.98893, 42.06014], [45.92396, 42.10093], [45.8665, 42.13244], [45.80154, 42.138], [45.72658, 42.17875], [45.65912, 42.21392], [45.65412, 42.25831], [45.71659, 42.26941], [45.77405, 42.2842], [45.78654, 42.3267], [45.76656, 42.36363], [45.78155, 42.42083], [45.80154, 42.46693], [45.79154, 42.49825], [45.70159, 42.51299], [45.61664, 42.54429], [45.56917, 42.55533], [45.44924, 42.55902], [45.36179, 42.55717], [45.32931, 42.59213], [45.24186, 42.67669], [45.16941, 42.71892], [45.07696, 42.74462], [44.99722, 42.75437], [45, 75], [39.67188, 81.47299], [-5.863332, 81.43475]]]
        }
    },
    bounds: {
        "AD": [42.433, 1.414, 42.652, 1.786],
        "AE": [22.628, 51.591, 26.069, 56.381],
        "AF": [29.377, 60.476, 38.484, 74.89],
        "AG": [16.998, -61.903, 17.729, -61.68],
        "AI": [18.16, -63.173, 18.276, -62.969],
        "AL": [39.648, 19.282, 42.657, 21.057],
        "AM": [38.841, 43.454, 41.305, 46.578],
        "AO": [-18.039, 11.671, -4.388, 24.086],
        "AQ": [-89.9, -180, -60.529, 180],
        "AR": [-55.059, -73.583, -21.788, -53.596],
        "AS": [-14.365, -170.844, -14.213, -169.423],
        "AT": [46.372, 9.531, 49.012, 17.161],
        "AU": [-43.632, 112.921, -9.23, 153.618],
        "AW": [12.415, -70.063, 12.62, -69.868],
        "AZ": [38.396, 44.768, 41.914, 50.401],
        "BA": [42.556, 15.729, 45.273, 19.622],
        "BB": [13.045, -59.65, 13.335, -59.42],
        "BD": [20.748, 88.028, 26.629, 92.681],
        "BE": [49.497, 2.546, 51.502, 6.405],
        "BF": [9.401, -5.519, 15.081, 2.405],
        "BG": [41.235, 22.357, 44.216, 28.607],
        "BH": [25.542, 50.455, 26.232, 50.818],
        "BI": [-4.469, 29.002, -2.313, 30.846],
        "BJ": [6.235, 0.775, 12.406, 3.851],
        "BL": [17.878, -62.872, 17.927, -62.796],
        "BM": [32.247, -64.896, 32.36, -64.675],
        "BN": [4.003, 114.071, 5.047, 115.364],
        "BO": [-22.916, -69.614, -9.681, -57.458],
        "BQ": [12.025, -68.415, 12.312, -68.196],
        "BR": [-33.751, -73.986, 5.264, -34.79],
        "BS": [20.912, -78.995, 26.917, -72.728],
        "BT": [26.708, 88.76, 28.245, 92.125],
        "BV": [-54.451, 3.297, -54.398, 3.432],
        "BW": [-26.876, 19.999, -17.779, 29.361],
        "BY": [51.263, 23.178, 56.17, 32.74],
        "BZ": [15.893, -89.223, 18.496, -87.778],
        "CA": [41.708, -141, 83.103, -52.636],
        "CC": [-12.207, 96.82, -12.135, 96.863],
        "CD": [-13.456, 12.195, 5.391, 31.312],
        "CF": [2.221, 14.42, 10.999, 27.455],
        "CG": [-4.999, 11.201, 3.702, 18.647],
        "CH": [45.823, 5.956, 47.808, 10.492],
        "CI": [4.362, -8.599, 10.736, -2.493],
        "CK": [-21.953, -159.831, -21.199, -157.876],
        "CL": [-55.98, -109.455, -17.499, -66.416],
        "CM": [1.653, 8.499, 13.078, 16.192],
        "CN": [18.171, 73.559, 53.558, 134.779],
        "CO": [-4.23, -79.031, 12.463, -66.87],
        "CP": [10.287, -109.234, 10.319, -109.2],
        "CR": [8.035, -85.919, 11.217, -82.565],
        "CU": [19.826, -84.951, 23.264, -74.138],
        "CV": [14.811, -25.359, 17.197, -22.669],
        "CW": [12.034, -69.156, 12.393, -68.737],
        "CX": [-10.567, 105.556, -10.416, 105.713],
        "CY": [34.563, 32.27, 35.695, 34.588],
        "CZ": [48.562, 12.091, 51.055, 18.852],
        "DE": [47.27, 5.866, 55.058, 15.037],
        "DJ": [10.925, 41.771, 12.71, 43.416],
        "DK": [54.559, 8.077, 57.746, 15.158],
        "DM": [15.208, -61.48, 15.637, -61.245],
        "DO": [17.543, -72.003, 19.931, -68.325],
        "DZ": [18.963, -8.667, 37.08, 11.999],
        "EC": [-4.999, -91.662, 1.416, -75.185],
        "EE": [57.509, 21.829, 59.666, 28.21],
        "EG": [22, 24.698, 31.667, 35.773],
        "EH": [20.772, -17.104, 27.667, -8.667],
        "EL": [34.93, 19.641, 41.749, 28.247],
        "ER": [12.353, 36.439, 18.005, 43.126],
        "ET": [3.401, 33, 14.892, 47.986],
        "FI": [59.824, 19.514, 70.092, 31.587],
        "FK": [-52.382, -61.347, -51.234, -57.714],
        "FM": [5.261, 138.056, 9.59, 163.03],
        "FO": [61.41, -7.463, 62.38, -6.409],
        "GA": [-3.992, 8.701, 2.322, 14.502],
        "GD": [12.002, -61.798, 12.235, -61.605],
        "GE": [41.055, 40.01, 43.578, 46.737],
        "GG": [49.43, -2.682, 49.512, -2.509],
        "GH": [4.745, -3.256, 11.165, 1.2],
        "GI": [36.109, -5.36, 36.153, -5.339],
        "GL": [59.779, -73.029, 83.628, -11.482],
        "GM": [13.068, -16.806, 13.805, -13.809],
        "GN": [7.194, -15.073, 12.676, -7.641],
        "GQ": [0.921, 8.417, 3.788, 11.335],
        "GS": [-59.072, -38.021, -53.986, -26.229],
        "GT": [13.738, -92.241, 17.815, -88.223],
        "GU": [13.246, 144.619, 13.648, 144.956],
        "GW": [10.967, -16.707, 12.681, -13.632],
        "GY": [1.175, -61.396, 8.558, -56.477],
        "HK": [22.193, 113.838, 22.564, 114.398],
        "HM": [-53.216, 73.252, -52.962, 73.878],
        "HN": [12.982, -89.353, 16.51, -83.158],
        "HR": [42.407, 13.49, 46.551, 19.447],
        "HT": [18.022, -74.476, 20.089, -71.613],
        "HU": [45.737, 16.114, 48.585, 22.896],
        "ID": [-10.943, 95.009, 5.904, 141.019],
        "IE": [51.449, -10.472, 55.376, -5.999],
        "IL": [29.493, 34.269, 33.288, 35.685],
        "IM": [54.063, -4.794, 54.414, -4.309],
        "IN": [6.756, 68.436, 33.171, 97.166],
        "IO": [-7.441, 72.354, -7.258, 72.431],
        "IQ": [29.061, 38.793, 37.384, 48.575],
        "IR": [25.064, 44.036, 39.779, 63.317],
        "IS": [63.401, -24.532, 66.537, -13.495],
        "IT": [36.649, 6.63, 47.082, 18.52],
        "JE": [49.172, -2.26, 49.258, -2.028],
        "JM": [17.71, -78.366, 18.521, -76.184],
        "JO": [29.184, 34.957, 33.375, 39.301],
        "JP": [24.249, 123.663, 45.523, 145.821],
        "KE": [-4.67, 33.913, 4.62, 41.91],
        "KG": [39.173, 69.277, 43.236, 80.283],
        "KH": [10.405, 102.344, 14.687, 107.631],
        "KM": [-12.39, 43.229, -11.366, 44.534],
        "KN": [17.106, -62.862, 17.417, -62.545],
        "KP": [37.673, 124.316, 43.012, 130.675],
        "KR": [33.191, 124.608, 38.615, 130.923],
        "KS": [41.858, 20.025, 43.272, 21.79],
        "KW": [28.521, 46.553, 30.104, 48.433],
        "KY": [19.263, -81.42, 19.388, -81.087],
        "KZ": [40.591, 46.499, 55.432, 87.313],
        "LA": [13.914, 100.085, 22.5, 107.706],
        "LB": [33.055, 35.115, 34.683, 36.596],
        "LC": [13.729, -61.079, 14.108, -60.879],
        "LI": [47.049, 9.476, 47.271, 9.636],
        "LK": [5.934, 79.655, 9.835, 81.879],
        "LR": [4.362, -11.497, 8.549, -7.365],
        "LS": [-30.66, 27.029, -28.574, 29.466],
        "LT": [53.897, 20.954, 56.441, 26.836],
        "LU": [49.451, 5.74, 50.183, 6.521],
        "LV": [55.678, 20.971, 58.081, 28.242],
        "LY": [19.5, 9.39, 33.165, 25.147],
        "MA": [27.662, -13.173, 35.914, -0.999],
        "MC": [43.726, 7.413, 43.751, 7.439],
        "MD": [45.467, 26.616, 48.486, 30.163],
        "ME": [41.85, 18.434, 43.558, 20.353],
        "MG": [-25.605, 43.22, -11.952, 50.481],
        "MH": [5.589, 168.084, 7.304, 168.825],
        "MK": [40.856, 20.455, 42.367, 23.032],
        "ML": [10.161, -12.239, 25, 4.243],
        "MM": [9.838, 92.173, 28.546, 101.169],
        "MN": [41.586, 87.747, 52.152, 119.932],
        "MO": [22.111, 113.532, 22.214, 113.591],
        "MP": [14.116, 145.122, 18.811, 145.831],
        "MR": [14.716, -17.066, 27.313, -4.833],
        "MS": [16.676, -62.236, 16.821, -62.144],
        "MT": [35.808, 14.185, 36.074, 14.572],
        "MU": [-20.525, 57.322, -19.668, 63.502],
        "MV": [1.869, 73.525, 1.943, 73.553],
        "MW": [-17.129, 32.674, -9.369, 35.932],
        "MX": [14.533, -118.454, 32.717, -86.737],
        "MY": [0.855, 99.645, 7.359, 119.267],
        "MZ": [-26.863, 30.217, -10.478, 40.837],
        "NA": [-28.969, 11.737, -16.973, 25.263],
        "NC": [-22.675, 163.622, -19.622, 168.134],
        "NE": [11.697, 0.168, 23.513, 15.996],
        "NF": [-29.056, 167.92, -28.996, 167.993],
        "NG": [4.269, 2.676, 13.901, 14.676],
        "NI": [10.708, -87.69, 15.026, -82.738],
        "NL": [50.754, 3.367, 53.467, 7.218],
        "NO": [57.98, 4.752, 71.174, 31.061],
        "NP": [26.355, 80.059, 30.45, 88.196],
        "NR": [-0.554, 166.911, -0.504, 166.959],
        "NU": [-19.155, -169.952, -18.955, -169.774],
        "OM": [16.654, 52, 26.383, 59.837],
        "PA": [7.206, -83.053, 9.638, -77.164],
        "PE": [-18.35, -81.326, -0.013, -68.678],
        "PF": [-27.65, -151.546, -7.953, -138.613],
        "PG": [-11.658, 140.846, -1.32, 155.964],
        "PH": [4.644, 116.948, 20.839, 126.602],
        "PK": [24.003, 60.873, 36.906, 75.381],
        "PL": [49.002, 14.128, 54.831, 24.146],
        "PM": [46.783, -56.402, 47.144, -56.238],
        "PN": [-24.423, -128.357, -24.332, -128.298],
        "PR": [17.927, -67.946, 18.512, -65.244],
        "PS": [31.221, 34.22, 32.552, 35.57],
        "PW": [7.347, 134.463, 7.731, 134.647],
        "PY": [-27.588, -62.645, -19.287, -54.26],
        "QA": [24.471, 50.763, 26.144, 51.637],
        "RO": [43.627, 20.264, 48.26, 29.713],
        "RS": [41.864, 18.847, 46.188, 23.006],
        "RW": [-2.84, 28.862, -1.052, 30.9],
        "SA": [16.38, 34.504, 32.154, 55.667],
        "SB": [-11.88, 155.519, -6.597, 166.991],
        "SC": [-9.727, 46.209, -4.292, 55.791],
        "SD": [8.638, 21.815, 22.225, 38.58],
        "SE": [55.337, 11.114, 69.06, 24.155],
        "SG": [1.259, 103.639, 1.471, 104.006],
        "SH": [-40.364, -14.42, -7.89, -5.639],
        "SI": [45.425, 13.375, 46.873, 16.597],
        "SJ": [70.828, -9.083, 80.509, 33.287],
        "SK": [47.739, 16.833, 49.614, 22.567],
        "SL": [6.923, -13.303, 10, -10.273],
        "SM": [43.899, 12.405, 43.991, 12.513],
        "SN": [12.307, -17.529, 16.693, -11.346],
        "SO": [-1.656, 40.996, 11.988, 51.415],
        "SR": [1.831, -58.046, 6, -53.98],
        "SS": [3.487, 24.151, 12.236, 35.948],
        "ST": [0.022, 6.463, 1.691, 7.462],
        "SV": [13.15, -90.129, 14.443, -87.708],
        "SX": [18.005, -63.094, 18.064, -63.019],
        "SY": [32.316, 35.621, 37.291, 42.385],
        "SZ": [-27.317, 30.794, -25.72, 32.137],
        "TC": [21.491, -72.482, 21.963, -71.467],
        "TD": [7.441, 13.479, 23.439, 24],
        "TF": [-49.733, 50.166, -37.8, 77.597],
        "TG": [6.112, -0.146, 11.139, 1.807],
        "TH": [5.615, 97.344, 20.465, 105.636],
        "TJ": [36.68, 67.392, 41.041, 75.137],
        "TK": [-8.575, -172.503, -8.533, -172.466],
        "TL": [-9.503, 124.045, -8.128, 127.301],
        "TM": [35.129, 52.432, 42.796, 66.684],
        "TN": [30.242, 7.522, 37.338, 11.598],
        "TO": [-21.45, -175.68, -15.566, -173.905],
        "TR": [35.82, 25.665, 42.099, 44.821],
        "TT": [10.047, -61.928, 11.345, -60.519],
        "TV": [-7.254, 177.138, -7.185, 177.165],
        "TW": [18.171, 73.559, 53.558, 134.779],
        "TZ": [-11.761, 29.341, -0.993, 40.446],
        "UA": [44.388, 22.137, 52.375, 40.224],
        "UG": [-1.481, 29.574, 4.214, 35.036],
        "UK": [49.963, -8.178, 60.834, 1.756],
        "UM": [6.2, -162.897, 6.607, -162.295],
        "UY": [-34.981, -58.437, -30.082, -53.081],
        "UZ": [37.18, 56, 45.577, 73.132],
        "VA": [41.901, 12.447, 41.907, 12.458],
        "VC": [12.448, -61.487, 13.383, -61.115],
        "VE": [0.65, -73.374, 12.199, -59.806],
        "VG": [18.383, -64.715, 18.743, -64.271],
        "VI": [17.686, -65.048, 18.383, -64.565],
        "VN": [8.561, 102.144, 23.393, 109.453],
        "VU": [-20.252, 166.542, -13.073, 169.9],
        "WF": [-14.308, -178.177, -13.219, -176.162],
        "WS": [-14.048, -172.803, -13.44, -171.424],
        "XA": [16.826, 112.328, 16.841, 112.349],
        "XB": [11.049, 114.278, 11.056, 114.29],
        "XC": [33.379, 77.924, 35.985, 80.343],
        "XD": [26.858, 91.563, 29.451, 97.411],
        "XE": [30.583, 78.428, 33.188, 80.255],
        "XF": [22.003, 34.087, 23.146, 36.893],
        "XG": [4.62, 34.378, 5.022, 35.509],
        "XH": [32.263, 72.513, 37.085, 79.299],
        "XI": [43.462, 145.41, 45.555, 148.893],
        "XK": [41.858, 20.025, 43.272, 21.79],
        "XL": [18.39, -75.028, 18.41, -75.001],
        "XM": [15.11, 117.713, 15.216, 117.848],
        "XN": [25.735, 123.458, 25.752, 123.493],
        "XO": [-22.395, 40.33, -22.338, 40.399],
        "XU": [9.343, 27.814, 10.143, 28.977],
        "XV": [21.725, 33.183, 22.003, 34.087],
        "YE": [12.129, 42.533, 19, 54.531],
        "ZA": [-46.981, 16.454, -22.127, 38.004],
        "ZM": [-18.079, 21.999, -8.192, 33.706],
        "ZW": [-22.418, 25.237, -15.61, 33.055],
        "ES1": [36.007, -9.298, 43.789, 3.322],
        "ES2": [27.641, -18.171, 29.349, -13.37],
        "ES3": [35.274, -2.97, 35.318, -2.927],
        "ES4": [35.873, -5.382, 35.913, -5.343],
        "ES5": [39.262, 2.337, 40.091, 4.312],
        "FR1": [42.333, -4.792, 51.089, 8.233],
        "FR2": [2.12, -54.59, 5.745, -51.63],
        "FR3": [41.368, 8.554, 43, 9.559],
        "FR4": [-21.387, 55.217, -20.882, 55.837],
        "FR5": [-13, 45.043, -12.669, 45.237],
        "FR6": [14.381, -63.105, 18.146, -60.793],
        "KI1": [1.719, 172.909, 1.954, 173.046],
        "KI2": [-4.105, -157.632, 2.087, -154.841],
        "PT1": [36.962, -9.501, 42.154, -6.189],
        "PT2": [36.915, -31.278, 39.538, -25.005],
        "PT3": [32.625, -17.268, 33.112, -16.287],
        "RU1": [41.197, 27.333, 77.734, 180],
        "RU2": [64.246, -180, 68.98, -169.659],
        "RU3": [70.861, -180, 71.589, -177.457],
        "RU4": [77.842, 44.121, 82.07, 108.809],
        "RU5": [54.32, 19.635, 55.298, 22.882],
        "US1": [25.136, -124.733, 49.389, -66.981],
        "US2": [54.808, -168.124, 71.328, -131.847],
        "US3": [51.083, -179.451, 54.927, -157.588],
        "US4": [18.885, -160.258, 22.259, -154.775],
        "US5": [51.317, 172.441, 53.028, 179.846],
        "US6": [54.664, -133.83, 56.714, -129.985],
        "US7": [56.499, -173.167, 63.802, -168.64],
        "FJ1": [-18.266, -180.005, -16.436, -178.726],
        "FJ2": [-19.228, 177.001, -12.469, 180.033],
        "NZ1": [-52.67, 165.85, -34.38, 178.594],
        "NZ2": [-44.362, -176.905, -43.688, -176.151]
    },
    outers: {
        "ES": {
            "ES70": {
                label: "canary_islands",
                zoom: 4,
                toZoom: 7,
                coord: [28.500, -15.732],
                width: 100
            }
        },
        "FR": {
            "FR91": {
                nuts: "FRY1",
                label: "guadeloupe",
                zoom: 7,
                toZoom: 9,
                coord: [16.160, -61.5],
                width: 100
            },
            "FR92": {
                nuts: "FRY2",
                label: "martinique",
                zoom: 7,
                toZoom: 9,
                coord: [14.66, -61],
                width: 80
            },
            "FR93": {
                nuts: "FRY3",
                label: "guyana",
                zoom: 4,
                toZoom: 6,
                coord: [4, -53.4],
                width: 60
            },
            "FR94": {
                nuts: "FRY4",
                label: "reunion",
                zoom: 6,
                toZoom: 9,
                coord: [-21.143, 55.529],
                width: 70
            },
            "FR95": {
                nuts: "FRY5",
                label: "mayotte",
                zoom: 7,
                toZoom: 10,
                coord: [-12.831, 45.1593],
                width: 70
            }
        },
        "LU": {
            "LU": {
                zoom: 5,
                toZoom: 8,
                label: "Luxembourg",
                coord: [49.7883, 6.10839],
                width: 80
            }
        },
        "MT": {
            "MT0": {
                label: "Malta",
                zoom: 7,
                toZoom: 10,
                coord: [35.9335, 14.3797],
                width: 60
            }
        },
        "PT": {
            "PT20": {
                label: "azores",
                zoom: 4,
                toZoom: 7,
                coord: [38.3, -26.982],
                width: 70
            },
            "PT30": {
                label: "madeira",
                zoom: 6,
                toZoom: 9,
                coord: [32.750, -17],
                width: 70
            }
        },
        "AD": {
            "AD": {
                zoom: 7,
                toZoom: 9,
                label: "Andorra",
                coord: [42.5449, 1.57],
                width: 60
            }
        },
        "LI": {
            "LI": {
                zoom: 7,
                toZoom: 9,
                label: "Lichtenstein",
                coord: [47.17, 9.55],
                width: 80
            }
        },
        "VA": {
            "VA": {
                zoom: 10,
                label: "Vatican city",
                coord: [41.9034, 12.4533],
                width: 80
            }
        }
    },
    background: {
        positron: {
            title: "Positron",
            url: $wt.map.tiles + "/OSMPositronComposite{language}/{projection}/{z}/{x}/{y}.png",
            options: {
                type: 'tiles',
                maxZoom: {
                    '3857': 18,
                    '4326': 18
                },
                attribution: "<a class='wt-link' href='//openstreetmap.org/copyright'>Â© OpenStreetMap</a>",
                noWrap: !1,
                bounds: [[-90, -180], [90, 180]]
            }
        },
        positron_background: {
            title: "Positron - background",
            url: $wt.map.tiles + "/OSMPositronBackground/{projection}/{z}/{x}/{y}.png",
            options: {
                type: 'tiles',
                maxZoom: {
                    '3857': 18,
                    '4326': 18
                },
                attribution: "<a class='wt-link' href='//openstreetmap.org/copyright'>Â© OpenStreetMap</a>",
                noWrap: !1,
                bounds: [[-90, -180], [90, 180]]
            }
        },
        positron_label: {
            title: "Positron - labels",
            url: $wt.map.tiles + "/OSMPositronLabels{language}/{projection}/{z}/{x}/{y}.png",
            options: {
                type: 'labels',
                maxZoom: {
                    '3857': 18,
                    '4326': 18
                },
                attribution: "<a class='wt-link' href='//openstreetmap.org/copyright'>Â© OpenStreetMap</a>",
                noWrap: !1,
                bounds: [[-90, -180], [90, 180]]
            }
        },
        osmec: {
            title: "Open Street Map EU version",
            url: $wt.map.tiles + "/OSMCartoComposite{language}/{projection}/{z}/{x}/{y}.png",
            options: {
                type: 'tiles',
                maxZoom: {
                    '3857': 18,
                    '4326': 18
                },
                attribution: "<a class='wt-link' href='//openstreetmap.org/copyright'>Â© OpenStreetMap contributors</a>",
                noWrap: !1,
                bounds: [[-90, -180], [90, 180]]
            }
        },
        osmec_background: {
            title: "Open Street Map EU version - background",
            url: $wt.map.tiles + "/OSMCartoBackground/{projection}/{z}/{x}/{y}.png",
            options: {
                type: 'tiles',
                maxZoom: {
                    '3857': 18,
                    '4326': 18
                },
                attribution: "<a class='wt-link' href='//openstreetmap.org/copyright'>Â© OpenStreetMap contributors</a>",
                noWrap: !1,
                bounds: [[-90, -180], [90, 180]]
            }
        },
        osmec_labels: {
            title: "Open Street Map EU version - labels",
            url: $wt.map.tiles + "/OSMCartoLabels{language}/{projection}/{z}/{x}/{y}.png",
            options: {
                type: 'labels',
                maxZoom: {
                    '3857': 18,
                    '4326': 18
                },
                attribution: "<a class='wt-link' href='//openstreetmap.org/copyright'>Â© OpenStreetMap contributors</a>",
                noWrap: !1,
                bounds: [[-90, -180], [90, 180]]
            }
        },
        osmec2: {
            title: "Open Street Map EU version style 2",
            url: $wt.map.tiles + "/OSMCartoV4Composite{language}/{projection}/{z}/{x}/{y}.png",
            options: {
                type: 'tiles',
                maxZoom: {
                    '3857': 18,
                    '4326': 18
                },
                attribution: "<a class='wt-link' href='//openstreetmap.org/copyright'>Â© OpenStreetMap</a>",
                noWrap: !1,
                bounds: [[-90, -180], [90, 180]]
            }
        },
        osmec2_background: {
            title: "Open Street Map EU version style 2 - background",
            url: $wt.map.tiles + "/OSMCartoV4Background/{projection}/{z}/{x}/{y}.png",
            options: {
                type: 'tiles',
                maxZoom: {
                    '3857': 18,
                    '4326': 18
                },
                attribution: "<a class='wt-link' href='//openstreetmap.org/copyright'>Â© OpenStreetMap</a>",
                noWrap: !1,
                bounds: [[-90, -180], [90, 180]]
            }
        },
        osmec2_label: {
            title: "Open Street Map EU version style 2 - labels",
            url: $wt.map.tiles + "/OSMCartoV4Labels{language}/{projection}/{z}/{x}/{y}.png",
            options: {
                type: 'labels',
                maxZoom: {
                    '3857': 18,
                    '4326': 18
                },
                attribution: "<a class='wt-link' href='//openstreetmap.org/copyright'>Â© OpenStreetMap</a>",
                noWrap: !1,
                bounds: [[-90, -180], [90, 180]]
            }
        },
        graybg: {
            title: "Country Background Services",
            url: $wt.map.tiles + "/CountriesEU28EFTACC/{projection}/{z}/{x}/{y}.png",
            options: {
                type: 'tiles',
                maxZoom: {
                    '3857': 12,
                    '4326': 10
                },
                attribution: "Â© Eurogeographics",
                noWrap: !1,
                bounds: [[-90, -180], [90, 180]]
            }
        },
        graybg_eu28: {
            title: "EU28 Country Background Services",
            url: $wt.map.tiles + "/CountriesEU28/{projection}/{z}/{x}/{y}.png",
            options: {
                type: 'tiles',
                maxZoom: {
                    '3857': 8,
                    '4326': 8
                },
                attribution: "Â© Eurogeographics",
                noWrap: !0,
                bounds: [[-90, -180], [90, 180]]
            }
        },
        graybg_eu27: {
            title: "EU27 Country Background Services",
            url: $wt.map.tiles + "/CountriesEU28/{projection}/{z}/{x}/{y}.png",
            options: {
                type: 'tiles',
                maxZoom: {
                    '3857': 8,
                    '4326': 8
                },
                attribution: "Â© Eurogeographics",
                noWrap: !0,
                bounds: [[-90, -180], [90, 180]]
            }
        },
        coast: {
            title: "Continental Outlines",
            url: $wt.map.tiles + "/Continents/{projection}/{z}/{x}/{y}.png",
            options: {
                type: 'tiles',
                maxZoom: {
                    '3857': 12,
                    '4326': 10
                },
                attribution: "",
                noWrap: !1,
                bounds: [[-90, -180], [90, 180]]
            }
        },
        gray: {
            title: "Gray Shaded Relief of Earth",
            url: $wt.map.tiles + "/GreyEarth/{projection}/{z}/{x}/{y}.png",
            options: {
                type: 'tiles',
                maxZoom: {
                    '3857': 6,
                    '4326': 5
                },
                attribution: "Â© Natural Earth",
                noWrap: !1,
                bounds: [[-90, -180], [90, 180]]
            }
        },
        hypso: {
            title: "Climate Shaded Relief of Earth",
            url: $wt.map.tiles + "/Hypsometric/{projection}/{z}/{x}/{y}.png",
            options: {
                type: 'tiles',
                maxZoom: {
                    '3857': 6,
                    '4326': 5
                },
                attribution: "Â© Natural Earth",
                noWrap: !1,
                bounds: [[-90, -180], [90, 180]]
            }
        },
        natural: {
            title: "Landcover Shaded Relief of Earth",
            url: $wt.map.tiles + "/NaturalEarth/{projection}/{z}/{x}/{y}.png",
            options: {
                type: 'tiles',
                maxZoom: {
                    '3857': 6,
                    '4326': 5
                },
                attribution: "Â© Natural Earth",
                noWrap: !1,
                bounds: [[-90, -180], [90, 180]]
            }
        },
        bmarble: {
            title: "Blue Marble Mosaic of the Earth",
            url: $wt.map.tiles + "/BlueMarble/{projection}/{z}/{x}/{y}.png",
            options: {
                type: 'tiles',
                maxZoom: {
                    '3857': 9,
                    '4326': 8
                },
                attribution: "Â© NASAâ€™s Earth Observatory",
                noWrap: !1,
                bounds: [[-90, -180], [90, 180]]
            }
        },
        countryboundaries_world: {
            title: "Boundaries of all countries",
            url: $wt.map.tiles + "/CountriesWorld/{projection}/{z}/{x}/{y}.png",
            options: {
                type: 'tiles',
                maxZoom: {
                    '3857': 12,
                    '4326': 10
                },
                attribution: "Â© Eurogeographics Â© OSM",
                noWrap: !1,
                bounds: [[-90, -180], [90, 180]]
            }
        },
        roadswater_europe: {
            title: "Cities, roads, rivers, lakes. Density depends on zoom",
            url: $wt.map.tiles + "/CitiesRoadsRiversLakes/{projection}/{z}/{x}/{y}.png",
            options: {
                type: 'overlayers',
                maxZoom: {
                    '3857': 11,
                    '4326': 11
                },
                attribution: "Â© Eurogeographics",
                noWrap: !1,
                bounds: [[-90, -180], [90, 180]]
            }
        },
        countrynames_europe: {
            title: "European country names",
            url: $wt.map.tiles + "/CountryNamesEU28EFTACC/{projection}/{z}/{x}/{y}.png",
            options: {
                type: 'labels',
                maxZoom: {
                    '3857': 11,
                    '4326': 11
                },
                attribution: "Â© Eurogeographics",
                noWrap: !1,
                bounds: [[-90, -180], [90, 180]]
            }
        },
        citynames_europe: {
            title: "City names of european country",
            url: $wt.map.tiles + "/CityNamesEurope/{projection}/{z}/{x}/{y}.png",
            options: {
                type: 'labels',
                maxZoom: {
                    '3857': 11,
                    '4326': 11
                },
                attribution: "Â© Eurogeographics",
                noWrap: !1,
                bounds: [[-90, -180], [90, 180]]
            }
        },
        blossom: {
            title: "Blossom",
            url: $wt.map.tiles + "/OSMBlossomComposite{language}/{projection}/{z}/{x}/{y}.png",
            options: {
                type: 'tiles',
                maxZoom: {
                    '3857': 18,
                    '4326': 18
                },
                attribution: "<a class='wt-link' href='//openstreetmap.org/copyright'>Â© OpenStreetMap</a>",
                noWrap: !1,
                bounds: [[-90, -180], [90, 180]]
            }
        },
        blossom_background: {
            title: "Blossom - background",
            url: $wt.map.tiles + "/OSMBlossomBackground/{projection}/{z}/{x}/{y}.png",
            options: {
                type: 'tiles',
                maxZoom: {
                    '3857': 18,
                    '4326': 18
                },
                attribution: "<a class='wt-link' href='//openstreetmap.org/copyright'>Â© OpenStreetMap</a>",
                noWrap: !1,
                bounds: [[-90, -180], [90, 180]]
            }
        },
        blossom_label: {
            title: "Blossom - labels",
            url: $wt.map.tiles + "/OSMBlossomLabels{language}/{projection}/{z}/{x}/{y}.png",
            options: {
                type: 'labels',
                maxZoom: {
                    '3857': 18,
                    '4326': 18
                },
                attribution: "<a class='wt-link' href='//openstreetmap.org/copyright'>Â© OpenStreetMap</a>",
                noWrap: !1,
                bounds: [[-90, -180], [90, 180]]
            }
        },
        bright: {
            title: "Bright",
            url: $wt.map.tiles + "/OSMBrightComposite{language}/{projection}/{z}/{x}/{y}.png",
            options: {
                type: 'tiles',
                maxZoom: {
                    '3857': 18,
                    '4326': 18
                },
                attribution: "<a class='wt-link' href='//openstreetmap.org/copyright'>Â© OpenStreetMap</a>",
                noWrap: !1,
                bounds: [[-90, -180], [90, 180]]
            }
        },
        bright_background: {
            title: "Bright - background",
            url: $wt.map.tiles + "/OSMBrightBackground/{projection}/{z}/{x}/{y}.png",
            options: {
                type: 'tiles',
                maxZoom: {
                    '3857': 18,
                    '4326': 18
                },
                attribution: "<a class='wt-link' href='//openstreetmap.org/copyright'>Â© OpenStreetMap</a>",
                noWrap: !1,
                bounds: [[-90, -180], [90, 180]]
            }
        },
        bright_label: {
            title: "Bright - labels",
            url: $wt.map.tiles + "/OSMBrightLabels{language}/{projection}/{z}/{x}/{y}.png",
            options: {
                type: 'labels',
                maxZoom: {
                    '3857': 18,
                    '4326': 18
                },
                attribution: "<a class='wt-link' href='//openstreetmap.org/copyright'>Â© OpenStreetMap</a>",
                noWrap: !1,
                bounds: [[-90, -180], [90, 180]]
            }
        },
        hdm: {
            title: "HDM",
            url: $wt.map.tiles + "/OSMCartoHDMComposite{language}/{projection}/{z}/{x}/{y}.png",
            options: {
                type: 'tiles',
                maxZoom: {
                    '3857': 18,
                    '4326': 18
                },
                attribution: "<a class='wt-link' href='//openstreetmap.org/copyright'>Â© OpenStreetMap</a>",
                noWrap: !1,
                bounds: [[-90, -180], [90, 180]]
            }
        },
        hdm_background: {
            title: "HDM - background",
            url: $wt.map.tiles + "/OSMCartoHDMBackground/{projection}/{z}/{x}/{y}.png",
            options: {
                type: 'tiles',
                maxZoom: {
                    '3857': 18,
                    '4326': 18
                },
                attribution: "<a class='wt-link' href='//openstreetmap.org/copyright'>Â© OpenStreetMap</a>",
                noWrap: !1,
                bounds: [[-90, -180], [90, 180]]
            }
        },
        hdm_label: {
            title: "HDM - labels",
            url: $wt.map.tiles + "/OSMCartoHDMLabels{language}/{projection}/{z}/{x}/{y}.png",
            options: {
                type: 'labels',
                maxZoom: {
                    '3857': 18,
                    '4326': 18
                },
                attribution: "<a class='wt-link' href='//openstreetmap.org/copyright'>Â© OpenStreetMap</a>",
                noWrap: !1,
                bounds: [[-90, -180], [90, 180]]
            }
        }
    },
    labels: {
        "AD": {
            l: "Andorra",
            c: [42.546212, 1.600286]
        },
        "AE": {
            l: "United Arab Emirates",
            c: [24.53, 52.49]
        },
        "AF": {
            l: "Afghanistan",
            c: [34.52, 66.01]
        },
        "AG": {
            l: "Antigua and Barbuda",
            c: [17.080501, -61.789423]
        },
        "AI": {
            l: "Anguilla",
            c: [18.210013, -63.072130]
        },
        "AL": {
            l: "Albania",
            p: "left",
            c: [41.071015, 20.169747]
        },
        "AM": {
            l: "Armenia",
            c: [40.76, 44.08]
        },
        "AN": {
            l: "Netherlands Antilles",
            c: [12.142252, -68.945576]
        },
        "AO": {
            l: "Angola",
            p: "left",
            c: [-12.734911, 17.907223]
        },
        "AQ": {
            l: "Antarctica",
            c: [-80.724251, 0.000000]
        },
        "AR": {
            l: "Argentina",
            c: [-37.37, -68.29]
        },
        "AS": {
            l: "American Samoa",
            c: [-14.293331, -170.702385]
        },
        "AT": {
            l: "Austria",
            c: [47.451856, 13.345388]
        },
        "AU": {
            l: "Australia",
            c: [-26.4390743, 133.281323]
        },
        "AW": {
            l: "Aruba",
            c: [12.499303, -69.964001]
        },
        "AZ": {
            l: "Azerbaijan",
            c: [40.399857, 47.698690]
        },
        "BA": {
            l: "Bosnia and Herzegovina",
            c: [44.641641, 16.476182]
        },
        "BB": {
            l: "Barbados",
            c: [13.136483, -59.534649]
        },
        "BD": {
            l: "Bangladesh",
            c: [23.911855, 90.350998]
        },
        "BE": {
            l: "Belgium",
            p: "center",
            c: [50.712408, 4.476941]
        },
        "BF": {
            l: "Burkina Faso",
            p: "center",
            c: [12.800035, -1.556761]
        },
        "BG": {
            l: "Bulgaria",
            p: "center",
            c: [42.464545, 25.482322]
        },
        "BH": {
            l: "Bahrain",
            c: [26.042631, 50.548613]
        },
        "BI": {
            l: "Burundi",
            c: [-3.512922, 29.920395]
        },
        "BJ": {
            l: "Benin",
            p: "center",
            c: [10.6, 1.54]
        },
        "BM": {
            l: "Bermuda",
            p: "center",
            c: [32.279828, -64.785473]
        },
        "BN": {
            l: "Brunei Darussalam",
            c: [4.009026, 114.614049]
        },
        "BO": {
            l: "Bolivia",
            p: "center",
            c: [-17.276044, -63.549429]
        },
        "BR": {
            l: "Brazil",
            p: "center",
            c: [-8.58, -51.24]
        },
        "BT": {
            l: "Bhutan",
            c: [27.474721, 90.442238]
        },
        "BV": {
            l: "Bouvet Island",
            c: [-54.431739, 3.411738]
        },
        "BW": {
            l: "Botswana",
            c: [-21.885243, 24.680158]
        },
        "BY": {
            l: "Belarus",
            c: [53.28, 25.75]
        },
        "BZ": {
            l: "Belize",
            p: "center",
            c: [17.210905, -88.652836]
        },
        "CA": {
            l: "Canada",
            c: [61.02, -107.75]
        },
        "CC": {
            l: "Cocos (Keeling) Islands",
            c: [-12.178974, 96.844231]
        },
        "CD": {
            l: "Democratic Republic of the Congo",
            p: "center",
            c: [-2.86, 23.51]
        },
        "CF": {
            l: "Central African Republic",
            c: [6.997428, 20.941759]
        },
        "CG": {
            l: "Congo (Brazzaville)",
            c: [-1.334604, 14.927424]
        },
        "CH": {
            l: "Switzerland",
            p: "center",
            c: [46.825969, 8.224051]
        },
        "CI": {
            l: "C&ocirc;te d'Ivoire",
            p: "center",
            c: [7.766235, -5.547100]
        },
        "CL": {
            l: "Chile",
            p: "left",
            c: [-31.88, -71.19]
        },
        "CM": {
            l: "Cameroon",
            p: "left",
            c: [3.91, 12.74]
        },
        "CN": {
            l: "China",
            c: [32.320240, 104.169482]
        },
        "CO": {
            l: "Colombia",
            p: "left",
            c: [3.365166, -72.958530]
        },
        "CR": {
            l: "Costa Rica",
            c: [9.479045, -84.253307]
        },
        "CU": {
            l: "Cuba",
            p: "center",
            c: [22.100304, -79.544601]
        },
        "CX": {
            l: "Christmas Island",
            c: [-10.492947, 105.629269]
        },
        "CY": {
            l: "Cyprus",
            p: "center",
            c: [35.048258, 33.428682]
        },
        "CZ": {
            l: "Czechia",
            p: "center",
            c: [49.871095, 15.474998]
        },
        "DE": {
            l: "Germany",
            p: "center",
            c: [51.451572, 9.854074]
        },
        "DJ": {
            l: "Djibouti",
            c: [11.265559, 42.595211]
        },
        "DK": {
            l: "Denmark",
            p: "center",
            c: [55.847388, 9.516828]
        },
        "DM": {
            l: "Dominica",
            c: [15.394660, -61.364130]
        },
        "DO": {
            l: "Dominican Republic",
            c: [18.929523, -70.161743]
        },
        "DZ": {
            l: "Algeria",
            c: [28.555743, 1.652841]
        },
        "EC": {
            l: "Ecuador",
            p: "left",
            c: [-1.179933, -78.095795]
        },
        "EE": {
            l: "Estonia",
            p: "center",
            c: [58.723725, 25.806997]
        },
        "EG": {
            l: "Egypt",
            p: "center",
            c: [26.648129, 30.246479]
        },
        "EH": {
            l: "Western Sahara",
            p: "left",
            c: [25.381102, -12.886729]
        },
        "ER": {
            l: "Eritrea",
            c: [15.54, 37.35]
        },
        "ES": {
            l: "Spain",
            p: "center",
            c: [40.068952, -2.988296]
        },
        "ET": {
            l: "Ethiopia",
            c: [9.226587, 40.493059]
        },
        "FI": {
            l: "Finland",
            p: "center",
            c: [62.336196, 25.167564]
        },
        "FJ": {
            l: "Fiji",
            c: [-17.830981, 177.973381]
        },
        "FK": {
            l: "Falkland Islands (Malvinas)",
            c: [-52.014991, -58.721048]
        },
        "FM": {
            l: "Federated States of Micronesia",
            c: [6.872111, 158.223137]
        },
        "FR": {
            l: "France",
            p: "center",
            c: [47.273641, 2.218567]
        },
        "GA": {
            l: "Gabon",
            p: "left",
            c: [-1.71, 10.11]
        },
        "GD": {
            l: "Grenada",
            c: [12.006696, -61.698942]
        },
        "GE": {
            l: "Georgia",
            p: "left",
            c: [42.047071, 43.365799]
        },
        "GG": {
            l: "Guernsey",
            c: [49.454897, -2.595800]
        },
        "GH": {
            l: "Ghana",
            p: "center",
            c: [8.93, -1.23]
        },
        "GI": {
            l: "Gibraltar",
            c: [36.135809, -5.352833]
        },
        "GL": {
            l: "Greenland",
            c: [77.5, -42.71]
        },
        "GM": {
            l: "Gambia",
            p: "left",
            c: [13.566612, -15.311434]
        },
        "GN": {
            l: "Guinea",
            c: [11.002634, -11.283845]
        },
        "GQ": {
            l: "Equatorial Guinea",
            p: "left",
            c: [1.585783, 10.341294]
        },
        "EL": {
            l: "Greece",
            p: "center",
            c: [39.264526, 22.121999]
        },
        "GS": {
            l: "South Georgia and the South Sandwich Islands",
            c: [-54.207367, -36.906628]
        },
        "GT": {
            l: "Guatemala",
            p: "center",
            c: [15.798070, -90.232346]
        },
        "GU": {
            l: "Guam",
            c: [13.456334, 144.786613]
        },
        "GW": {
            l: "Guinea-Bissau",
            p: "left",
            c: [11.357795, -15.172582]
        },
        "GY": {
            l: "Guyana",
            c: [7.32, -59.41]
        },
        "HK": {
            l: "Hong Kong",
            c: [22.442483, 114.152221]
        },
        "HM": {
            l: "Heard Island and McDonald Islands",
            c: [-53.103401, 73.556225]
        },
        "HN": {
            l: "Honduras",
            c: [15.71, -86.253098]
        },
        "HR": {
            l: "Croatia",
            p: "left",
            c: [45.52, 16.52]
        },
        "HT": {
            l: "Haiti",
            c: [18.321572, -73.047256]
        },
        "HU": {
            l: "Hungary",
            p: "center",
            c: [47.124932, 19.505190]
        },
        "IE": {
            l: "Ireland",
            c: [53.608627, -9.039122]
        },
        "IL": {
            l: "Israel",
            c: [30.451821, 34.968707]
        },
        "IM": {
            l: "Isle of Man",
            c: [54.229110, -4.555113]
        },
        "IN": {
            l: "India",
            p: "center",
            c: [22.27, 78.84]
        },
        "IO": {
            l: "British Indian Ocean Territory",
            c: [-7.431772, 72.422489]
        },
        "IQ": {
            l: "Iraq",
            c: [33.592960, 43.684204]
        },
        "IR": {
            l: "Iran",
            c: [31.781067, 53.674751]
        },
        "IS": {
            l: "Iceland",
            p: "center",
            c: [64.790777, -18.813530]
        },
        "IT": {
            l: "Italy",
            p: "center",
            c: [42.793509, 12.573787]
        },
        "JE": {
            l: "Jersey",
            c: [49.229244, -2.141057]
        },
        "JM": {
            l: "Jamaica",
            p: "center",
            c: [18.118645, -77.273479]
        },
        "JO": {
            l: "Jordan",
            p: "center",
            c: [30.652236, 37.130589]
        },
        "JP": {
            l: "Japan",
            c: [35.350846, 136.469032]
        },
        "KE": {
            l: "Kenya",
            p: "center",
            c: [0.014633, 37.903969]
        },
        "KG": {
            l: "Kyrgyzstan",
            p: "center",
            c: [41.670312, 74.779899]
        },
        "KH": {
            l: "Cambodia",
            c: [12.517175, 104.983860]
        },
        "KI": {
            l: "Kiribati",
            c: [1.893153, -157.663055]
        },
        "KM": {
            l: "Comoros",
            c: [-11.612900, 43.359976]
        },
        "KN": {
            l: "Saint Kitts and Nevis",
            c: [17.335632, -62.746368]
        },
        "KP": {
            l: "Democratic People's Republic of Korea",
            c: [40.35, 125.6]
        },
        "KR": {
            l: "Republic of Korea",
            c: [36.624914, 127.850220]
        },
        "KW": {
            l: "Kuwait",
            c: [29.531469, 47.494528]
        },
        "KY": {
            l: "Cayman Islands",
            p: "center",
            c: [19.315161, -81.262047]
        },
        "KZ": {
            l: "Kazakhstan",
            c: [48.005457, 66.902257]
        },
        "LA": {
            l: "Lao PDR",
            c: [18.803711, 103.895042]
        },
        "LB": {
            l: "Lebanon",
            p: "left",
            c: [33.942798, 35.869817]
        },
        "LC": {
            l: "Saint Lucia",
            c: [13.882687, -60.974176]
        },
        "LI": {
            l: "Liechtenstein",
            c: [47.137731, 9.554136]
        },
        "LK": {
            l: "Sri Lanka",
            c: [7.663577, 80.785755]
        },
        "LR": {
            l: "Liberia",
            p: "center",
            c: [6.345426, -9.428598]
        },
        "LS": {
            l: "Lesotho",
            c: [-29.69, 27.73]
        },
        "LT": {
            l: "Lithuania",
            p: "center",
            c: [55.543911, 23.942214]
        },
        "LU": {
            l: "Luxemburg",
            c: [49.752865, 6.133351]
        },
        "LV": {
            l: "Latvia",
            p: "center",
            c: [57.144537, 24.606126]
        },
        "LY": {
            l: "Libya",
            c: [26.979474, 17.268820]
        },
        "MA": {
            l: "Morocco",
            p: "left",
            c: [31.749754, -7.080164]
        },
        "MC": {
            l: "Monaco",
            c: [43.731056, 7.424479]
        },
        "MD": {
            l: "Moldova",
            c: [46.848699, 28.392618]
        },
        "ME": {
            l: "Montenegro",
            p: "left",
            c: [42.398732, 19.393241]
        },
        "MG": {
            l: "Madagascar",
            p: "center",
            c: [-20.173248, 46.854328]
        },
        "MK": {
            l: "Republic of North Macedonia",
            c: [41.595501, 21.743243]
        },
        "ML": {
            l: "Mali",
            c: [18.954937, -3.998821]
        },
        "MM": {
            l: "Myanmar",
            p: "left",
            c: [16.930476, 96.678747]
        },
        "MN": {
            l: "Mongolia",
            c: [46.005858, 103.835776]
        },
        "MR": {
            l: "Mauritania",
            p: "left",
            c: [20.584700, -10.947097]
        },
        "MS": {
            l: "Montserrat",
            c: [16.744752, -62.194502]
        },
        "MT": {
            l: "Malta",
            c: [35.883816, 14.447624]
        },
        "MU": {
            l: "Mauritius",
            c: [-20.261343, 57.551741]
        },
        "MV": {
            l: "Maldives",
            p: "center",
            c: [4.13, 73.56]
        },
        "MW": {
            l: "Malawi",
            c: [-13.33, 33.16]
        },
        "MX": {
            l: "Mexico",
            p: "center",
            c: [23.866098, -101.930061]
        },
        "MY": {
            l: "Malaysia",
            p: "center",
            c: [2.33, 112.76]
        },
        "MZ": {
            l: "Mozambique",
            c: [-22.55, 32.3]
        },
        "NA": {
            l: "Namibia",
            p: "left",
            c: [-23.190118, 18.486166]
        },
        "NC": {
            l: "New Caledonia",
            c: [-21.417425, 165.506737]
        },
        "NE": {
            l: "Niger",
            c: [17.262904, 8.080946]
        },
        "NF": {
            l: "Norfolk Island",
            c: [-29.025284, 168.049789]
        },
        "NG": {
            l: "Nigeria",
            p: "center",
            c: [8.948073, 8.674252]
        },
        "NI": {
            l: "Nicaragua",
            c: [12.621321, -85.424057]
        },
        "NL": {
            l: "Netherlands",
            p: "left",
            c: [52.068429, 6.330293]
        },
        "NO": {
            l: "Norway",
            p: "left",
            c: [60.607487, 8.804793]
        },
        "NP": {
            l: "Nepal",
            p: "center",
            c: [28.377289, 84.127804]
        },
        "NR": {
            l: "Nauru",
            c: [-0.529585, 166.922142]
        },
        "NU": {
            l: "Niue",
            c: [-19.050124, -169.863091]
        },
        "NZ": {
            l: "New Zealand",
            c: [-44.505545, 170.366623]
        },
        "OM": {
            l: "Oman",
            c: [19.35, 55.72]
        },
        "PA": {
            l: "Panama",
            p: "center",
            c: [8.49, -80.38]
        },
        "PE": {
            l: "Peru",
            p: "left",
            c: [-7.795546, -75.002365]
        },
        "PG": {
            l: "Papua New Guinea",
            c: [-6.756244, 145.859314]
        },
        "PK": {
            l: "Pakistan",
            c: [28.73, 66.01]
        },
        "PL": {
            l: "Poland",
            p: "center",
            c: [52.378408, 19.134334]
        },
        "PM": {
            l: "Saint Pierre and Miquelon",
            c: [46.858127, -56.336824]
        },
        "PN": {
            l: "Pitcairn",
            c: [-24.362156, -128.316376]
        },
        "PR": {
            l: "Puerto Rico",
            p: "center",
            c: [18.228412, -66.428890]
        },
        "PS": {
            l: "Palestinian Territory, Occupied",
            c: [31.565038, 35.228220]
        },
        "PT": {
            l: "Portugal",
            p: "left",
            c: [39.423966, -7.844941]
        },
        "PW": {
            l: "Palau",
            c: [7.480643, 134.563889]
        },
        "PY": {
            l: "Paraguay",
            c: [-22.94, -61.13]
        },
        "QA": {
            l: "Qatar",
            c: [25.346129, 51.196939]
        },
        "RO": {
            l: "Romania",
            p: "center",
            c: [45.728117, 24.988627]
        },
        "RS": {
            l: "Serbia",
            p: "center",
            c: [43.766217, 20.926449]
        },
        "KS": {
            l: "Kosovo*",
            p: "center",
            c: [42.569264, 20.808105]
        },
        "RW": {
            l: "Rwanda",
            c: [-2.061275, 29.876376]
        },
        "SA": {
            l: "Saudi Arabia",
            p: "center",
            c: [23.302881, 45.120351]
        },
        "SD": {
            l: "Sudan",
            p: "center",
            c: [12.974570, 30.209492]
        },
        "SE": {
            l: "Sweden",
            p: "center",
            c: [59.062697, 14.634344]
        },
        "SG": {
            l: "Singapore",
            c: [1.365788, 103.822876]
        },
        "SI": {
            l: "Slovenia",
            p: "center",
            c: [46.050954, 14.586138]
        },
        "SJ": {
            l: "Svalbard and Jan Mayen Islands",
            c: [76.859136, 16.096959]
        },
        "SK": {
            l: "Slovakia",
            p: "center",
            c: [48.801532, 19.700049]
        },
        "SL": {
            l: "Sierra Leone",
            p: "left",
            c: [8.560284, -11.795934]
        },
        "SM": {
            l: "San Marino",
            c: [43.933599, 12.459727]
        },
        "SN": {
            l: "Senegal",
            p: "left",
            c: [15.52, -14.19]
        },
        "SO": {
            l: "Somalia",
            c: [4.400311, 46.200832]
        },
        "SR": {
            l: "Suriname",
            p: "center",
            c: [4.04, -55.99]
        },
        "SS": {
            l: "South Sudan",
            p: "center",
            c: [7.2099, 30.0585]
        },
        "ST": {
            l: "Sao Tome and Principe",
            p: "left",
            c: [0.247583, 6.619353]
        },
        "SV": {
            l: "El Salvador",
            p: "center",
            c: [13.749611, -88.918789]
        },
        "SY": {
            l: "Syrian Arab Republic",
            c: [35.96, 36.96]
        },
        "SZ": {
            l: "Eswatini",
            c: [-26.523595, 31.465684]
        },
        "TD": {
            l: "Chad",
            p: "center",
            c: [15.200293, 18.738068]
        },
        "TF": {
            l: "French Southern Territories",
            c: [-49.606858, 69.648491]
        },
        "TG": {
            l: "Togo",
            p: "center",
            c: [8.73, 1.05]
        },
        "TH": {
            l: "Thailand",
            c: [15.71, 99.54]
        },
        "TJ": {
            l: "Tajikistan",
            c: [38.82, 70]
        },
        "TK": {
            l: "Tokelau",
            c: [-9.192961, -171.853912]
        },
        "TL": {
            l: "Timor-Leste",
            c: [-8.757930, 126.116924]
        },
        "TM": {
            l: "Turkmenistan",
            p: "left",
            c: [39.23, 59.63]
        },
        "TN": {
            l: "Tunisia",
            c: [33.796607, 9.561549]
        },
        "TR": {
            l: "TÃ¼rkiye",
            p: "center",
            c: [39.128664, 35.439795]
        },
        "TT": {
            l: "Trinidad and Tobago",
            c: [10.420798, -61.417133]
        },
        "TV": {
            l: "Tuvalu",
            c: [-7.478603, 178.678452]
        },
        "TW": {
            l: "Taiwan",
            c: [23.751454, 120.953183]
        },
        "TZ": {
            l: "United Republic of Tanzania",
            c: [-6.413502, 34.885195]
        },
        "UA": {
            l: "Ukraine",
            p: "center",
            c: [49.350797, 31.182740]
        },
        "UG": {
            l: "Uganda",
            p: "center",
            c: [1.347100, 32.304650]
        },
        "UK": {
            l: "United Kingdom",
            p: "center",
            c: [52.773808, -1.732612]
        },
        "UM": {
            l: "United States Minor Outlying Islands",
            c: [6.478542, -162.561394]
        },
        "US": {
            l: "United States of America",
            p: "center",
            c: [39.77, -100.46]
        },
        "UY": {
            l: "Uruguay",
            p: "center",
            c: [-32.895153, -55.758327]
        },
        "UZ": {
            l: "Uzbekistan",
            p: "center",
            c: [41.214111, 64.565969]
        },
        "VC": {
            l: "Saint Vincent and Grenadines",
            p: "left",
            c: [13.243565, -61.196320]
        },
        "VE": {
            l: "Venezuela",
            c: [8.02, -70.31]
        },
        "VI": {
            l: "Virgin Islands, US",
            c: [17.740486, -64.736294]
        },
        "VN": {
            l: "Viet Nam",
            c: [10.106801, 105.804436]
        },
        "WS": {
            l: "Samoa",
            c: [-13.627023, -172.482437]
        },
        "XC": {
            l: "Aksai Chin (Disputed Territory)",
            c: [34.970190, 79.133766]
        },
        "XD": {
            l: "Arunachal Pradesh",
            c: [28.416225, 94.485949]
        },
        "XF": {
            l: "Hala'Ib Triangle (Disputed Territory)",
            c: [22.514518, 35.488611]
        },
        "XG": {
            l: "Ilemi Triangle (Disputed Territory)",
            c: [4.752479, 34.943615]
        },
        "XH": {
            l: "Jammu Kashmir (Disputed Territory)",
            c: [32.699213, 75.910062]
        },
        "XI": {
            l: "Kuril Islands (Disputed Territory)",
            c: [45.096674, 147.877754]
        },
        "XJ": {
            l: "Liancourt Rock (Disputed Territory)",
            c: [37.242999, 131.870354]
        },
        "XK": {
            l: "Kosovo*",
            p: "center",
            c: [42.569264, 20.808105]
        },
        "XL": {
            l: "Navassa Island (Disputed Territory)",
            c: [18.408649, -75.014114]
        },
        "XO": {
            l: "Fr Territory (Juan de Nova, Glorioso, Europa, Tromelin, Bassas Da India)",
            c: [-22.358672, 40.356247]
        },
        "YE": {
            l: "Yemen",
            c: [15.856168, 47.851362]
        },
        "YT": {
            l: "Mayotte",
            c: [-12.965217, 45.136776]
        },
        "ZA": {
            l: "South Africa",
            c: [-32.77, 18.98]
        },
        "ZM": {
            l: "Zambia",
            p: "center",
            c: [-14.596892, 27.852537]
        },
        "ZW": {
            l: "Zimbabwe",
            c: [-19.39, 26.76]
        },
        "RU": {
            l: "Russia",
            c: [63.882461, 103.658728]
        },
        "BS": {
            l: "Bahamas",
            p: "center",
            c: [24.254338, -76.611199]
        },
        "CK": {
            l: "Cook Islands",
            c: [-19.211441, -158.978210]
        },
        "CV": {
            l: "Cabo Verde",
            p: "left",
            c: [15.941233, -23.980244]
        },
        "FO": {
            l: "Faroe Islands",
            c: [62.068101, -6.892328]
        },
        "ID": {
            l: "Indonesia",
            c: [-2.226076, 117.277418]
        },
        "MH": {
            l: "Marshall Islands",
            c: [7.833452, 169.598453]
        },
        "MO": {
            l: "æ¾³é–€-Macau",
            c: [22.162656, 113.557201]
        },
        "MP": {
            l: "Northern Mariana Islands-Notte MariÃ¥nas-Northern Mariana Islands",
            c: [15.774550, 145.604227]
        },
        "PF": {
            l: "French Polynesia",
            c: [-15.422801, -145.248614]
        },
        "PH": {
            l: "Philippines",
            c: [11.734691, 122.867106]
        },
        "SB": {
            l: "Solomon Islands",
            c: [-8.899535, 159.600800]
        },
        "SC": {
            l: "Seychelles",
            c: [-6.693755, 51.835766]
        },
        "SH": {
            l: "Saint Helena, Ascension and Tristan Da Cunha",
            c: [-25.452897, -10.427469]
        },
        "TC": {
            l: "Turks and Caicos Islands",
            c: [21.750061, -71.856153]
        },
        "TO": {
            l: "Tonna",
            c: [-19.858992, -174.847166]
        },
        "VA": {
            l: "Vatican",
            c: [41.903074, 12.456119]
        },
        "VG": {
            l: "Virgin Islands, British",
            c: [18.511488, -64.515780]
        },
        "VU": {
            l: "Vanuatu",
            c: [-16.195911, 167.703057]
        },
        "WF": {
            l: "Territory of the Wallis and Futuna Islands",
            c: [-13.829207, -177.194355]
        },
        "XA": {
            l: "Paracel Islands (Disputed Territory)",
            c: [16.368120, 111.875769]
        },
        "XB": {
            l: "Spratly Islands (Disputed Territory)",
            c: [10.611653, 115.130209]
        },
        "XE": {
            l: "China/India (Disputed Territory)",
            c: [32.651673, 79.372438]
        },
        "XM": {
            l: "Scarborough Reef (Disputed Territory)",
            c: [15.111462, 117.764204]
        },
        "XN": {
            l: "Senkaku Islands (Disputed Territory)",
            c: [25.770933, 123.541477]
        }
    },
    kosovo: {
        "01": {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [[21.586957, 42.262801], [21.590036, 42.266887], [21.583357, 42.276816], [21.583289, 42.283482], [21.563142, 42.298367], [21.564129, 42.310474], [21.559256, 42.314438], [21.541383, 42.309602], [21.537687, 42.314433], [21.537687, 42.31859], [21.525015, 42.32733], [21.52598, 42.342507], [21.534439, 42.358165], [21.532947, 42.366153], [21.537687, 42.370579], [21.541027, 42.372229], [21.551676, 42.363156], [21.56081, 42.367436], [21.571561, 42.363645], [21.578601, 42.36787], [21.575086, 42.375203], [21.577748, 42.378013], [21.595002, 42.383179], [21.605876, 42.375821], [21.616207, 42.376232], [21.620348, 42.378396], [21.629485, 42.393058], [21.636141, 42.398568], [21.636497, 42.403008], [21.645155, 42.409854], [21.645155, 42.414375], [21.637965, 42.421129], [21.636994, 42.429653], [21.623781, 42.451792], [21.629485, 42.459519], [21.656604, 42.475597], [21.659467, 42.48421], [21.670963, 42.484953], [21.668241, 42.492507], [21.676574, 42.497999], [21.690278, 42.502783], [21.692915, 42.505913], [21.692821, 42.51529], [21.707075, 42.513845], [21.709179, 42.515159], [21.707568, 42.521873], [21.69743, 42.530869], [21.6946, 42.538211], [21.697412, 42.539966], [21.70737, 42.549151], [21.727629, 42.547411], [21.739732, 42.552468], [21.747951, 42.559833], [21.745466, 42.564341], [21.747115, 42.580301], [21.734568, 42.601434], [21.742973, 42.608048], [21.751345, 42.608643], [21.757142, 42.619612], [21.753402, 42.629243], [21.759108, 42.636507], [21.77004, 42.634497], [21.776315, 42.639022], [21.780108, 42.646179], [21.789877, 42.651211], [21.778803, 42.663519], [21.772212, 42.667423], [21.770637, 42.677693], [21.759168, 42.684991], [21.753419, 42.70093], [21.736228, 42.694653], [21.725967, 42.694972], [21.715901, 42.690504], [21.707081, 42.690332], [21.703322, 42.692719], [21.689404, 42.691358], [21.674301, 42.68668], [21.669142, 42.672174], [21.660082, 42.666417], [21.645071, 42.679433], [21.638059, 42.697074], [21.629485, 42.699925], [21.618372, 42.69586], [21.604494, 42.69875], [21.596673, 42.703679], [21.587903, 42.704143], [21.587205, 42.707358], [21.593342, 42.718598], [21.591945, 42.725718], [21.571567, 42.728347], [21.559208, 42.736887], [21.552424, 42.731521], [21.54286, 42.728749], [21.539277, 42.723566], [21.527002, 42.725615], [21.500956, 42.735117], [21.479122, 42.747201], [21.474441, 42.745705], [21.467116, 42.737071], [21.45313, 42.744457], [21.449942, 42.749023], [21.445419, 42.748542], [21.397401, 42.744193], [21.390186, 42.749166], [21.389208, 42.758222], [21.40715, 42.76752], [21.410314, 42.773894], [21.40896, 42.786988], [21.412526, 42.790933], [21.407601, 42.793549], [21.406915, 42.796581], [21.411011, 42.80535], [21.42272, 42.807125], [21.417703, 42.826539], [21.423893, 42.832832], [21.424144, 42.846512], [21.436613, 42.852326], [21.435126, 42.872259], [21.402363, 42.873928], [21.388095, 42.867388], [21.377595, 42.872288], [21.364139, 42.871707], [21.351758, 42.880266], [21.350375, 42.886936], [21.341165, 42.899004], [21.330907, 42.901947], [21.305515, 42.904769], [21.299544, 42.902032], [21.290416, 42.901767], [21.280911, 42.89566], [21.273073, 42.896861], [21.269102, 42.910178], [21.246379, 42.933806], [21.235311, 42.953158], [21.242904, 42.98087], [21.23428, 43.010034], [21.23265, 43.01151], [21.223483, 43.019808], [21.204185, 43.023736], [21.196303, 43.020574], [21.192103, 43.01151], [21.189856, 43.00666], [21.182031, 43.003062], [21.176822, 43.000667], [21.170651, 43.002888], [21.165786, 43.01151], [21.164523, 43.013747], [21.166112, 43.026027], [21.156682, 43.030383], [21.153307, 43.038585], [21.15231, 43.059942], [21.141137, 43.080066], [21.14853, 43.092147], [21.137516, 43.112031], [21.112728, 43.112564], [21.103296, 43.118521], [21.089365, 43.133927], [21.079481, 43.128509], [21.075975, 43.11618], [21.052859, 43.108596], [21.024605, 43.129053], [20.997697, 43.137356], [20.973904, 43.134131], [20.969052, 43.130527], [20.966974, 43.12441], [20.951976, 43.127366], [20.941651, 43.133608], [20.933679, 43.134947], [20.928978, 43.143489], [20.923574, 43.146066], [20.908413, 43.148856], [20.903591, 43.152493], [20.900174, 43.15491], [20.888307, 43.156824], [20.880346, 43.166847], [20.864778, 43.164836], [20.858662, 43.171637], [20.853965, 43.174334], [20.838936, 43.173364], [20.832053, 43.178771], [20.835401, 43.183533], [20.854211, 43.188731], [20.843233, 43.199045], [20.843075, 43.205771], [20.862677, 43.20709], [20.886795, 43.203357], [20.888186, 43.205298], [20.88032, 43.211264], [20.879357, 43.221479], [20.875025, 43.228144], [20.860883, 43.239227], [20.851824, 43.250566], [20.838097, 43.256604], [20.835629, 43.260885], [20.831093, 43.262279], [20.819759, 43.27245], [20.811524, 43.272978], [20.80395, 43.270579], [20.790348, 43.263298], [20.784622, 43.254241], [20.77478, 43.253748], [20.76886, 43.247638], [20.761897, 43.244501], [20.727639, 43.247946], [20.708649, 43.227161], [20.691471, 43.220027], [20.686217, 43.213562], [20.673883, 43.209453], [20.652539, 43.210298], [20.639828, 43.206904], [20.632159, 43.209051], [20.614845, 43.204533], [20.60052, 43.20989], [20.593854, 43.20507], [20.610264, 43.190178], [20.613483, 43.181404], [20.608451, 43.175925], [20.610352, 43.171637], [20.627834, 43.164203], [20.640328, 43.162225], [20.65751, 43.153376], [20.661199, 43.14441], [20.658293, 43.138274], [20.671746, 43.131664], [20.674267, 43.127004], [20.684678, 43.122758], [20.692294, 43.109293], [20.692421, 43.1057], [20.688261, 43.101923], [20.692874, 43.09257], [20.687305, 43.084165], [20.676915, 43.079348], [20.66182, 43.077656], [20.657016, 43.073779], [20.659616, 43.068529], [20.66876, 43.064615], [20.670142, 43.058341], [20.666387, 43.05008], [20.67093, 43.045391], [20.669337, 43.03519], [20.652538, 43.033195], [20.65057, 43.023039], [20.642518, 43.022734], [20.637726, 43.016444], [20.63869, 43.01151], [20.639502, 43.007352], [20.630317, 43.008562], [20.617991, 43.003381], [20.617394, 43.01151], [20.616651, 43.016014], [20.612928, 43.016794], [20.59206, 43.016318], [20.581469, 43.01151], [20.580911, 43.00259], [20.569404, 42.997386], [20.564193, 42.984292], [20.5533, 42.977057], [20.553962, 42.969633], [20.546718, 42.962058], [20.54118, 42.963607], [20.533878, 42.974746], [20.514669, 42.970754], [20.51311, 42.965876], [20.498066, 42.954745], [20.494446, 42.943106], [20.485689, 42.933063], [20.487288, 42.928449], [20.499307, 42.91821], [20.506114, 42.905236], [20.519451, 42.898251], [20.522231, 42.893043], [20.533878, 42.889864], [20.53829, 42.883158], [20.533878, 42.881159], [20.516391, 42.878375], [20.50573, 42.872931], [20.485399, 42.866896], [20.476624, 42.859238], [20.462843, 42.852349], [20.439756, 42.833664], [20.429688, 42.835257], [20.417151, 42.844692], [20.40959, 42.846769], [20.381703, 42.842113], [20.364374, 42.833055], [20.355614, 42.832325], [20.352939, 42.833365], [20.345918, 42.832954]]
            }
        },
        "03": {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [[21.586947, 42.262817], [21.584956, 42.278642], [21.560981, 42.311063], [21.543007, 42.311976], [21.52713, 42.327852], [21.534825, 42.365021], [21.571873, 42.365661], [21.586761, 42.380539], [21.621572, 42.381584], [21.642882, 42.412171], [21.627548, 42.455767], [21.705306, 42.516571], [21.70081, 42.543226], [21.745557, 42.560117], [21.739198, 42.593442], [21.737789, 42.600831], [21.752725, 42.612491], [21.756998, 42.632185], [21.786381, 42.652204], [21.753409, 42.700946], [21.680306, 42.68762], [21.659993, 42.66903], [21.636128, 42.696249], [21.593218, 42.703296], [21.590351, 42.723626], [21.562262, 42.733933], [21.532885, 42.724931], [21.481838, 42.744658], [21.395505, 42.746654], [21.391201, 42.756654], [21.398829, 42.763454], [21.408139, 42.771754], [21.408404, 42.797425], [21.420426, 42.809617], [21.435116, 42.872275], [21.36441, 42.873055], [21.340481, 42.897203], [21.323949, 42.901801], [21.275341, 42.898182], [21.237729, 42.950037], [21.241648, 42.982511], [21.232294, 43.010887], [21.204433, 43.022469], [21.185206, 43.005023], [21.172344, 43.005868], [21.154502, 43.037323], [21.145325, 43.086942], [21.137029, 43.109787], [21.110294, 43.114747], [21.089016, 43.1313], [21.05316, 43.110525], [21.004712, 43.135112], [20.960009, 43.126052], [20.923564, 43.146082], [20.83927, 43.176506], [20.850601, 43.189888], [20.845557, 43.204], [20.87768, 43.205977], [20.879606, 43.21622], [20.855663, 43.246293], [20.819749, 43.272466], [20.76106, 43.245877], [20.728162, 43.246107], [20.678556, 43.211289], [20.597478, 43.205793], [20.614312, 43.171014], [20.652748, 43.155303], [20.661913, 43.136984], [20.685966, 43.119548], [20.689124, 43.086942], [20.662289, 43.074239], [20.6673, 43.037988], [20.636375, 43.009136], [20.588343, 43.014143], [20.559926, 42.979236], [20.549168, 42.966021], [20.525435, 42.972879], [20.500955, 42.957016], [20.489086, 42.930681], [20.533519, 42.882878], [20.485368, 42.866379], [20.439812, 42.835537], [20.405754, 42.845659], [20.366189, 42.836464], [20.352929, 42.833381]]
            }
        },
        "10": {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [[21.586947, 42.262817], [21.562469, 42.343031], [21.650897, 42.469504], [21.688451, 42.502164], [21.709976, 42.53788], [21.778299, 42.651251], [21.753409, 42.700946], [21.660045, 42.682761], [21.571683, 42.729422], [21.40954, 42.748653], [21.435116, 42.872275], [21.268346, 42.908487], [21.227984, 43.005622], [21.169535, 43.016508], [21.117668, 43.119844], [20.923564, 43.146082], [20.873832, 43.174019], [20.819749, 43.272466], [20.6184, 43.192628], [20.652983, 43.151467], [20.682368, 43.116493], [20.658907, 43.028731], [20.505977, 42.956209], [20.512095, 42.887127], [20.468779, 42.853222], [20.352929, 42.833381]]
            }
        }
    }
};
L.Browser.touch = (('ontouchstart'in window) || (navigator.msMaxTouchPoints > 0));
L.Icon.Default.imagePath = $wt.root + "/services/map/3.0/images/";
var originalInitTile = L.GridLayer.prototype._initTile;
L.GridLayer.include({
    _initTile: function(tile) {
        originalInitTile.call(this, tile);
        var tileSize = this.getTileSize();
        tile.style.width = tileSize.x + 1 + 'px';
        tile.style.height = tileSize.y + 1 + 'px'
    }
});
L.Map.addInitHook(function() {
    var map = this;
    if (map.zoomControl) {
        map.zoomControl.remove()
    }
    map.id = $wt.id();
    map.getID = function() {
        return map.id
    }
    ;
    map.getUEC = function(name, fallback) {
        var ref = map._container.params;
        if (ref && name) {
            ref = ref[name]
        }
        return ref || fallback
    }
    ;
    map.getPath = () => {
        let wcloud = map.getUEC("wcloud")?.root;
        if (wcloud) {
            return wcloud
        }
        let custom = map.getUEC("_custom");
        if (Array.isArray(custom) && custom.length) {
            return $wt.absolute(custom.pop()).split("/").slice(0, -1).join('/') + '/'
        }
        return $wt.absolute(custom || "./")
    }
    ;
    map.activeArea = function(config) {
        var activeArea = map.ui.map.querySelector(".wt-map-viewport");
        if (activeArea) {
            activeArea.setAttribute("style", ["top: " + (config.top || 0) + "px", "right: " + (config.right || 0) + "px", "bottom: " + (config.bottom || 0) + "px", "left: " + (config.left || 0) + "px"].join(';'));
            map.fire("activeAreaChange", {
                dom: activeArea,
                config: config
            })
        }
    }
    ;
    map.ui = map._container.ui || !1;
    if (map.ui) {
        map.ui.id = "map_" + map.id
    }
    var options = map.options;
    if (options.height && map.ui) {
        var H = options.height;
        H = (!isNaN(H)) ? H + "px" : H;
        map.ui.map.style.minHeight = H;
        map.ui.style.minHeight = H
    }
    if (options.width && map.ui) {
        var W = options.width;
        W = (!isNaN(W)) ? W + "px" : W;
        map.ui.style.width = W
    }
    if ((options.width || options.height) && map.ui) {
        map.invalidateSize()
    }
    if (map.ui) {
        map.ui.control = map.ui.map.querySelector(".leaflet-control-container");
        $wt.after(map.ui.control, map.ui.map)
    }
    let skipLink = document.createElement("a");
    skipLink.id = "backMap_" + map.id;
    skipLink.href = "#skipMap_" + map.id;
    skipLink.className = "wt-unselected wt-offprint wt-map--skip";
    skipLink.innerHTML = "Skip map";
    $wt.before(skipLink, map.ui);
    let jump = document.createElement("a");
    jump.id = "skipMap_" + map.id;
    jump.href = "#backMap_" + map.id;
    jump.className = "wt-offscreen wt-map--skip-target";
    jump.innerHTML = "Back to previous map.";
    $wt.after(jump, map.ui)
});
L.Map.addInitHook(function() {
    const isProjectable = (tiles, epsg) => {
        if (typeof tiles === "string") {
            tiles = tiles.split(',')
        }
        for (var key in tiles) {
            if (projAvailable[tiles[key]] && (projAvailable[tiles[key]].indexOf(parseInt(epsg)) === -1)) {
                return !1
            }
        }
        return !0
    }
    ;
    let map = this;
    let params = map._container.params;
    let proj = parseInt((params?.map?.epsg) ? params.map.epsg : map.options.epsg || 3857);
    let projAvailable = {
        osmec: [3857, 4326],
        osmec_background: [3857, 4326],
        osmec_labels: [3857, 4326],
        graybg: [3857, 4326],
        graybg_eu28: [3857, 4326],
        graybg_eu27: [3857, 4326],
        coast: [3857, 4326],
        gray: [3857, 4326],
        hypso: [3857, 4326],
        natural: [3857, 4326],
        bmarble: [3857, 4326],
        countryboundaries_world: [3857, 4326],
        roadswater_europe: [3857, 4326],
        countrynames_europe: [3857, 4326],
        citynames_europe: [3857, 4326],
        blossom: [3857, 4326],
        blossom_background: [3857, 4326],
        blossom_label: [3857, 4326],
        positron: [3857, 4326],
        positron_background: [3857, 4326],
        positron_label: [3857, 4326],
        osmec2: [3857, 4326],
        osmec2_background: [3857, 4326],
        osmec2_label: [3857, 4326],
        bright: [3857, 4326],
        bright_background: [3857, 4326],
        bright_label: [3857, 4326],
        hdm: [3857, 4326],
        hdm_background: [3857, 4326],
        hdm_label: [3857, 4326]
    };
    let isBackgroundProjectable = (isProjectable(map.options.background, proj) || !map.options.background);
    if (isBackgroundProjectable && [3857, 4326].indexOf(proj) >= 0) {
        map.proj = map.epsg = proj;
        if (proj === 4326) {
            map.options.maxZoom = 18;
            map.options.crs = L.CRS.EPSG4326
        }
    } else {
        console.log("WTWARNING: Only epsg 3857 and 4326 are available for now.", proj)
    }
});
!function(t, o) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = o() : "function" == typeof define && define.amd ? define(o) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Supercluster = o()
}(this, (function() {
    "use strict";
    function t(e, n, r, i, s, a) {
        if (!(s - i <= r)) {
            var p = i + s >> 1;
            o(e, n, p, i, s, a % 2),
            t(e, n, r, i, p - 1, a + 1),
            t(e, n, r, p + 1, s, a + 1)
        }
    }
    function o(t, n, r, i, s, a) {
        for (; s > i; ) {
            if (s - i > 600) {
                var p = s - i + 1
                  , h = r - i + 1
                  , u = Math.log(p)
                  , f = .5 * Math.exp(2 * u / 3)
                  , d = .5 * Math.sqrt(u * f * (p - f) / p) * (h - p / 2 < 0 ? -1 : 1);
                o(t, n, r, Math.max(i, Math.floor(r - h * f / p + d)), Math.min(s, Math.floor(r + (p - h) * f / p + d)), a)
            }
            var l = n[2 * r + a]
              , m = i
              , c = s;
            for (e(t, n, i, r),
            n[2 * s + a] > l && e(t, n, i, s); m < c; ) {
                for (e(t, n, m, c),
                m++,
                c--; n[2 * m + a] < l; )
                    m++;
                for (; n[2 * c + a] > l; )
                    c--
            }
            n[2 * i + a] === l ? e(t, n, i, c) : e(t, n, ++c, s),
            c <= r && (i = c + 1),
            r <= c && (s = c - 1)
        }
    }
    function e(t, o, e, r) {
        n(t, e, r),
        n(o, 2 * e, 2 * r),
        n(o, 2 * e + 1, 2 * r + 1)
    }
    function n(t, o, e) {
        var n = t[o];
        t[o] = t[e],
        t[e] = n
    }
    function r(t, o, e, n) {
        var r = t - e
          , i = o - n;
        return r * r + i * i
    }
    var i = function(t) {
        return t[0]
    }
      , s = function(t) {
        return t[1]
    }
      , a = function(o, e, n, r, a) {
        void 0 === e && (e = i),
        void 0 === n && (n = s),
        void 0 === r && (r = 64),
        void 0 === a && (a = Float64Array),
        this.nodeSize = r,
        this.points = o;
        for (var p = o.length < 65536 ? Uint16Array : Uint32Array, h = this.ids = new p(o.length), u = this.coords = new a(2 * o.length), f = 0; f < o.length; f++)
            h[f] = f,
            u[2 * f] = e(o[f]),
            u[2 * f + 1] = n(o[f]);
        t(h, u, r, 0, h.length - 1, 0)
    };
    a.prototype.range = function(t, o, e, n) {
        return function(t, o, e, n, r, i, s) {
            for (var a, p, h = [0, t.length - 1, 0], u = []; h.length; ) {
                var f = h.pop()
                  , d = h.pop()
                  , l = h.pop();
                if (d - l <= s)
                    for (var m = l; m <= d; m++)
                        a = o[2 * m],
                        p = o[2 * m + 1],
                        a >= e && a <= r && p >= n && p <= i && u.push(t[m]);
                else {
                    var c = Math.floor((l + d) / 2);
                    a = o[2 * c],
                    p = o[2 * c + 1],
                    a >= e && a <= r && p >= n && p <= i && u.push(t[c]);
                    var v = (f + 1) % 2;
                    (0 === f ? e <= a : n <= p) && (h.push(l),
                    h.push(c - 1),
                    h.push(v)),
                    (0 === f ? r >= a : i >= p) && (h.push(c + 1),
                    h.push(d),
                    h.push(v))
                }
            }
            return u
        }(this.ids, this.coords, t, o, e, n, this.nodeSize)
    }
    ,
    a.prototype.within = function(t, o, e) {
        return function(t, o, e, n, i, s) {
            for (var a = [0, t.length - 1, 0], p = [], h = i * i; a.length; ) {
                var u = a.pop()
                  , f = a.pop()
                  , d = a.pop();
                if (f - d <= s)
                    for (var l = d; l <= f; l++)
                        r(o[2 * l], o[2 * l + 1], e, n) <= h && p.push(t[l]);
                else {
                    var m = Math.floor((d + f) / 2)
                      , c = o[2 * m]
                      , v = o[2 * m + 1];
                    r(c, v, e, n) <= h && p.push(t[m]);
                    var g = (u + 1) % 2;
                    (0 === u ? e - i <= c : n - i <= v) && (a.push(d),
                    a.push(m - 1),
                    a.push(g)),
                    (0 === u ? e + i >= c : n + i >= v) && (a.push(m + 1),
                    a.push(f),
                    a.push(g))
                }
            }
            return p
        }(this.ids, this.coords, t, o, e, this.nodeSize)
    }
    ;
    var p, h = {
        minZoom: 0,
        maxZoom: 16,
        minPoints: 2,
        radius: 40,
        extent: 512,
        nodeSize: 64,
        log: !1,
        generateId: !1,
        reduce: null,
        map: function(t) {
            return t
        }
    }, u = Math.fround || (p = new Float32Array(1),
    function(t) {
        return p[0] = +t,
        p[0]
    }
    ), f = function(t) {
        this.options = y(Object.create(h), t),
        this.trees = new Array(this.options.maxZoom + 1)
    };
    function d(t, o, e, n, r) {
        return {
            x: u(t),
            y: u(o),
            zoom: 1 / 0,
            id: e,
            parentId: -1,
            numPoints: n,
            properties: r
        }
    }
    function l(t, o) {
        var e = t.geometry.coordinates
          , n = e[0]
          , r = e[1];
        return {
            x: u(v(n)),
            y: u(g(r)),
            zoom: 1 / 0,
            index: o,
            parentId: -1
        }
    }
    function m(t) {
        return {
            type: "Feature",
            id: t.id,
            properties: c(t),
            geometry: {
                type: "Point",
                coordinates: [(n = t.x,
                360 * (n - .5)), (o = t.y,
                e = (180 - 360 * o) * Math.PI / 180,
                360 * Math.atan(Math.exp(e)) / Math.PI - 90)]
            }
        };
        var o, e, n
    }
    function c(t) {
        var o = t.numPoints
          , e = o >= 1e4 ? Math.round(o / 1e3) + "k" : o >= 1e3 ? Math.round(o / 100) / 10 + "k" : o;
        return y(y({}, t.properties), {
            cluster: !0,
            cluster_id: t.id,
            point_count: o,
            point_count_abbreviated: e
        })
    }
    function v(t) {
        return t / 360 + .5
    }
    function g(t) {
        var o = Math.sin(t * Math.PI / 180)
          , e = .5 - .25 * Math.log((1 + o) / (1 - o)) / Math.PI;
        return e < 0 ? 0 : e > 1 ? 1 : e
    }
    function y(t, o) {
        for (var e in o)
            t[e] = o[e];
        return t
    }
    function x(t) {
        return t.x
    }
    function M(t) {
        return t.y
    }
    return f.prototype.load = function(t) {
        var o = this.options
          , e = o.log
          , n = o.minZoom
          , r = o.maxZoom
          , i = o.nodeSize;
        e && console.time("total time");
        var s = "prepare " + t.length + " points";
        e && console.time(s),
        this.points = t;
        for (var p = [], h = 0; h < t.length; h++)
            t[h].geometry && p.push(l(t[h], h));
        this.trees[r + 1] = new a(p,x,M,i,Float32Array),
        e && console.timeEnd(s);
        for (var u = r; u >= n; u--) {
            var f = +Date.now();
            p = this._cluster(p, u),
            this.trees[u] = new a(p,x,M,i,Float32Array),
            e && console.log("z%d: %d clusters in %dms", u, p.length, +Date.now() - f)
        }
        return e && console.timeEnd("total time"),
        this
    }
    ,
    f.prototype.getClusters = function(t, o) {
        var e = ((t[0] + 180) % 360 + 360) % 360 - 180
          , n = Math.max(-90, Math.min(90, t[1]))
          , r = 180 === t[2] ? 180 : ((t[2] + 180) % 360 + 360) % 360 - 180
          , i = Math.max(-90, Math.min(90, t[3]));
        if (t[2] - t[0] >= 360)
            e = -180,
            r = 180;
        else if (e > r) {
            var s = this.getClusters([e, n, 180, i], o)
              , a = this.getClusters([-180, n, r, i], o);
            return s.concat(a)
        }
        for (var p = this.trees[this._limitZoom(o)], h = [], u = 0, f = p.range(v(e), g(i), v(r), g(n)); u < f.length; u += 1) {
            var d = f[u]
              , l = p.points[d];
            h.push(l.numPoints ? m(l) : this.points[l.index])
        }
        return h
    }
    ,
    f.prototype.getChildren = function(t) {
        var o = this._getOriginId(t)
          , e = this._getOriginZoom(t)
          , n = "No cluster with the specified id."
          , r = this.trees[e];
        if (!r)
            throw new Error(n);
        var i = r.points[o];
        if (!i)
            throw new Error(n);
        for (var s = this.options.radius / (this.options.extent * Math.pow(2, e - 1)), a = [], p = 0, h = r.within(i.x, i.y, s); p < h.length; p += 1) {
            var u = h[p]
              , f = r.points[u];
            f.parentId === t && a.push(f.numPoints ? m(f) : this.points[f.index])
        }
        if (0 === a.length)
            throw new Error(n);
        return a
    }
    ,
    f.prototype.getLeaves = function(t, o, e) {
        o = o || 10,
        e = e || 0;
        var n = [];
        return this._appendLeaves(n, t, o, e, 0),
        n
    }
    ,
    f.prototype.getTile = function(t, o, e) {
        var n = this.trees[this._limitZoom(t)]
          , r = Math.pow(2, t)
          , i = this.options
          , s = i.extent
          , a = i.radius / s
          , p = (e - a) / r
          , h = (e + 1 + a) / r
          , u = {
            features: []
        };
        return this._addTileFeatures(n.range((o - a) / r, p, (o + 1 + a) / r, h), n.points, o, e, r, u),
        0 === o && this._addTileFeatures(n.range(1 - a / r, p, 1, h), n.points, r, e, r, u),
        o === r - 1 && this._addTileFeatures(n.range(0, p, a / r, h), n.points, -1, e, r, u),
        u.features.length ? u : null
    }
    ,
    f.prototype.getClusterExpansionZoom = function(t) {
        for (var o = this._getOriginZoom(t) - 1; o <= this.options.maxZoom; ) {
            var e = this.getChildren(t);
            if (o++,
            1 !== e.length)
                break;
            t = e[0].properties.cluster_id
        }
        return o
    }
    ,
    f.prototype._appendLeaves = function(t, o, e, n, r) {
        for (var i = 0, s = this.getChildren(o); i < s.length; i += 1) {
            var a = s[i]
              , p = a.properties;
            if (p && p.cluster ? r + p.point_count <= n ? r += p.point_count : r = this._appendLeaves(t, p.cluster_id, e, n, r) : r < n ? r++ : t.push(a),
            t.length === e)
                break
        }
        return r
    }
    ,
    f.prototype._addTileFeatures = function(t, o, e, n, r, i) {
        for (var s = 0, a = t; s < a.length; s += 1) {
            var p = o[a[s]]
              , h = p.numPoints
              , u = void 0
              , f = void 0
              , d = void 0;
            if (h)
                u = c(p),
                f = p.x,
                d = p.y;
            else {
                var l = this.points[p.index];
                u = l.properties,
                f = v(l.geometry.coordinates[0]),
                d = g(l.geometry.coordinates[1])
            }
            var m = {
                type: 1,
                geometry: [[Math.round(this.options.extent * (f * r - e)), Math.round(this.options.extent * (d * r - n))]],
                tags: u
            }
              , y = void 0;
            h ? y = p.id : this.options.generateId ? y = p.index : this.points[p.index].id && (y = this.points[p.index].id),
            void 0 !== y && (m.id = y),
            i.features.push(m)
        }
    }
    ,
    f.prototype._limitZoom = function(t) {
        return Math.max(this.options.minZoom, Math.min(+t, this.options.maxZoom + 1))
    }
    ,
    f.prototype._cluster = function(t, o) {
        for (var e = [], n = this.options, r = n.radius, i = n.extent, s = n.reduce, a = n.minPoints, p = r / (i * Math.pow(2, o)), h = 0; h < t.length; h++) {
            var u = t[h];
            if (!(u.zoom <= o)) {
                u.zoom = o;
                for (var f = this.trees[o + 1], l = f.within(u.x, u.y, p), m = u.numPoints || 1, c = m, v = 0, g = l; v < g.length; v += 1) {
                    var y = g[v]
                      , x = f.points[y];
                    x.zoom > o && (c += x.numPoints || 1)
                }
                if (c > m && c >= a) {
                    for (var M = u.x * m, _ = u.y * m, w = s && m > 1 ? this._map(u, !0) : null, P = (h << 5) + (o + 1) + this.points.length, z = 0, Z = l; z < Z.length; z += 1) {
                        var I = Z[z]
                          , F = f.points[I];
                        if (!(F.zoom <= o)) {
                            F.zoom = o;
                            var b = F.numPoints || 1;
                            M += F.x * b,
                            _ += F.y * b,
                            F.parentId = P,
                            s && (w || (w = this._map(u, !0)),
                            s(w, this._map(F)))
                        }
                    }
                    u.parentId = P,
                    e.push(d(M / c, _ / c, P, c, w))
                } else if (e.push(u),
                c > 1)
                    for (var A = 0, C = l; A < C.length; A += 1) {
                        var T = C[A]
                          , E = f.points[T];
                        E.zoom <= o || (E.zoom = o,
                        e.push(E))
                    }
            }
        }
        return e
    }
    ,
    f.prototype._getOriginId = function(t) {
        return t - this.points.length >> 5
    }
    ,
    f.prototype._getOriginZoom = function(t) {
        return (t - this.points.length) % 32
    }
    ,
    f.prototype._map = function(t, o) {
        if (t.numPoints)
            return o ? y({}, t.properties) : t.properties;
        var e = this.points[t.index].properties
          , n = this.options.map(e);
        return o && n === e ? y({}, n) : n
    }
    ,
    f
}
));
!function(t) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Pbf = t()
    }
}(function() {
    return function n(o, h, a) {
        function u(i, t) {
            if (!h[i]) {
                if (!o[i]) {
                    var e = "function" == typeof require && require;
                    if (!t && e)
                        return e(i, !0);
                    if (f)
                        return f(i, !0);
                    var r = new Error("Cannot find module '" + i + "'");
                    throw r.code = "MODULE_NOT_FOUND",
                    r
                }
                var s = h[i] = {
                    exports: {}
                };
                o[i][0].call(s.exports, function(t) {
                    return u(o[i][1][t] || t)
                }, s, s.exports, n, o, h, a)
            }
            return h[i].exports
        }
        for (var f = "function" == typeof require && require, t = 0; t < a.length; t++)
            u(a[t]);
        return u
    }({
        1: [function(t, i, e) {
            "use strict";
            i.exports = s;
            var r = t("ieee754");
            function s(t) {
                this.buf = ArrayBuffer.isView && ArrayBuffer.isView(t) ? t : new Uint8Array(t || 0),
                this.pos = 0,
                this.type = 0,
                this.length = this.buf.length
            }
            s.Varint = 0,
            s.Fixed64 = 1,
            s.Bytes = 2,
            s.Fixed32 = 5;
            var n = 4294967296
              , o = 1 / n
              , h = "undefined" == typeof TextDecoder ? null : new TextDecoder("utf8");
            function a(t) {
                return t.type === s.Bytes ? t.readVarint() + t.pos : t.pos + 1
            }
            function u(t, i, e) {
                return e ? 4294967296 * i + (t >>> 0) : 4294967296 * (i >>> 0) + (t >>> 0)
            }
            function f(t, i, e) {
                var r = i <= 16383 ? 1 : i <= 2097151 ? 2 : i <= 268435455 ? 3 : Math.floor(Math.log(i) / (7 * Math.LN2));
                e.realloc(r);
                for (var s = e.pos - 1; t <= s; s--)
                    e.buf[s + r] = e.buf[s]
            }
            function d(t, i) {
                for (var e = 0; e < t.length; e++)
                    i.writeVarint(t[e])
            }
            function p(t, i) {
                for (var e = 0; e < t.length; e++)
                    i.writeSVarint(t[e])
            }
            function l(t, i) {
                for (var e = 0; e < t.length; e++)
                    i.writeFloat(t[e])
            }
            function c(t, i) {
                for (var e = 0; e < t.length; e++)
                    i.writeDouble(t[e])
            }
            function w(t, i) {
                for (var e = 0; e < t.length; e++)
                    i.writeBoolean(t[e])
            }
            function F(t, i) {
                for (var e = 0; e < t.length; e++)
                    i.writeFixed32(t[e])
            }
            function b(t, i) {
                for (var e = 0; e < t.length; e++)
                    i.writeSFixed32(t[e])
            }
            function g(t, i) {
                for (var e = 0; e < t.length; e++)
                    i.writeFixed64(t[e])
            }
            function x(t, i) {
                for (var e = 0; e < t.length; e++)
                    i.writeSFixed64(t[e])
            }
            function v(t, i) {
                return (t[i] | t[i + 1] << 8 | t[i + 2] << 16) + 16777216 * t[i + 3]
            }
            function y(t, i, e) {
                t[e] = i,
                t[e + 1] = i >>> 8,
                t[e + 2] = i >>> 16,
                t[e + 3] = i >>> 24
            }
            function V(t, i) {
                return (t[i] | t[i + 1] << 8 | t[i + 2] << 16) + (t[i + 3] << 24)
            }
            s.prototype = {
                destroy: function() {
                    this.buf = null
                },
                readFields: function(t, i, e) {
                    for (e = e || this.length; this.pos < e; ) {
                        var r = this.readVarint()
                          , s = r >> 3
                          , n = this.pos;
                        this.type = 7 & r,
                        t(s, i, this),
                        this.pos === n && this.skip(r)
                    }
                    return i
                },
                readMessage: function(t, i) {
                    return this.readFields(t, i, this.readVarint() + this.pos)
                },
                readFixed32: function() {
                    var t = v(this.buf, this.pos);
                    return this.pos += 4,
                    t
                },
                readSFixed32: function() {
                    var t = V(this.buf, this.pos);
                    return this.pos += 4,
                    t
                },
                readFixed64: function() {
                    var t = v(this.buf, this.pos) + v(this.buf, this.pos + 4) * n;
                    return this.pos += 8,
                    t
                },
                readSFixed64: function() {
                    var t = v(this.buf, this.pos) + V(this.buf, this.pos + 4) * n;
                    return this.pos += 8,
                    t
                },
                readFloat: function() {
                    var t = r.read(this.buf, this.pos, !0, 23, 4);
                    return this.pos += 4,
                    t
                },
                readDouble: function() {
                    var t = r.read(this.buf, this.pos, !0, 52, 8);
                    return this.pos += 8,
                    t
                },
                readVarint: function(t) {
                    var i, e, r = this.buf;
                    return i = 127 & (e = r[this.pos++]),
                    e < 128 ? i : (i |= (127 & (e = r[this.pos++])) << 7,
                    e < 128 ? i : (i |= (127 & (e = r[this.pos++])) << 14,
                    e < 128 ? i : (i |= (127 & (e = r[this.pos++])) << 21,
                    e < 128 ? i : function(t, i, e) {
                        var r, s, n = e.buf;
                        if (s = n[e.pos++],
                        r = (112 & s) >> 4,
                        s < 128)
                            return u(t, r, i);
                        if (s = n[e.pos++],
                        r |= (127 & s) << 3,
                        s < 128)
                            return u(t, r, i);
                        if (s = n[e.pos++],
                        r |= (127 & s) << 10,
                        s < 128)
                            return u(t, r, i);
                        if (s = n[e.pos++],
                        r |= (127 & s) << 17,
                        s < 128)
                            return u(t, r, i);
                        if (s = n[e.pos++],
                        r |= (127 & s) << 24,
                        s < 128)
                            return u(t, r, i);
                        if (s = n[e.pos++],
                        r |= (1 & s) << 31,
                        s < 128)
                            return u(t, r, i);
                        throw new Error("Expected varint not more than 10 bytes")
                    }(i |= (15 & (e = r[this.pos])) << 28, t, this))))
                },
                readVarint64: function() {
                    return this.readVarint(!0)
                },
                readSVarint: function() {
                    var t = this.readVarint();
                    return t % 2 == 1 ? (t + 1) / -2 : t / 2
                },
                readBoolean: function() {
                    return Boolean(this.readVarint())
                },
                readString: function() {
                    var t = this.readVarint() + this.pos
                      , i = this.pos;
                    return 12 <= (this.pos = t) - i && h ? function(t, i, e) {
                        return h.decode(t.subarray(i, e))
                    }(this.buf, i, t) : function(t, i, e) {
                        var r = ""
                          , s = i;
                        for (; s < e; ) {
                            var n, o, h, a = t[s], u = null, f = 239 < a ? 4 : 223 < a ? 3 : 191 < a ? 2 : 1;
                            if (e < s + f)
                                break;
                            1 === f ? a < 128 && (u = a) : 2 === f ? 128 == (192 & (n = t[s + 1])) && (u = (31 & a) << 6 | 63 & n) <= 127 && (u = null) : 3 === f ? (n = t[s + 1],
                            o = t[s + 2],
                            128 == (192 & n) && 128 == (192 & o) && ((u = (15 & a) << 12 | (63 & n) << 6 | 63 & o) <= 2047 || 55296 <= u && u <= 57343) && (u = null)) : 4 === f && (n = t[s + 1],
                            o = t[s + 2],
                            h = t[s + 3],
                            128 == (192 & n) && 128 == (192 & o) && 128 == (192 & h) && ((u = (15 & a) << 18 | (63 & n) << 12 | (63 & o) << 6 | 63 & h) <= 65535 || 1114112 <= u) && (u = null)),
                            null === u ? (u = 65533,
                            f = 1) : 65535 < u && (u -= 65536,
                            r += String.fromCharCode(u >>> 10 & 1023 | 55296),
                            u = 56320 | 1023 & u),
                            r += String.fromCharCode(u),
                            s += f
                        }
                        return r
                    }(this.buf, i, t)
                },
                readBytes: function() {
                    var t = this.readVarint() + this.pos
                      , i = this.buf.subarray(this.pos, t);
                    return this.pos = t,
                    i
                },
                readPackedVarint: function(t, i) {
                    if (this.type !== s.Bytes)
                        return t.push(this.readVarint(i));
                    var e = a(this);
                    for (t = t || []; this.pos < e; )
                        t.push(this.readVarint(i));
                    return t
                },
                readPackedSVarint: function(t) {
                    if (this.type !== s.Bytes)
                        return t.push(this.readSVarint());
                    var i = a(this);
                    for (t = t || []; this.pos < i; )
                        t.push(this.readSVarint());
                    return t
                },
                readPackedBoolean: function(t) {
                    if (this.type !== s.Bytes)
                        return t.push(this.readBoolean());
                    var i = a(this);
                    for (t = t || []; this.pos < i; )
                        t.push(this.readBoolean());
                    return t
                },
                readPackedFloat: function(t) {
                    if (this.type !== s.Bytes)
                        return t.push(this.readFloat());
                    var i = a(this);
                    for (t = t || []; this.pos < i; )
                        t.push(this.readFloat());
                    return t
                },
                readPackedDouble: function(t) {
                    if (this.type !== s.Bytes)
                        return t.push(this.readDouble());
                    var i = a(this);
                    for (t = t || []; this.pos < i; )
                        t.push(this.readDouble());
                    return t
                },
                readPackedFixed32: function(t) {
                    if (this.type !== s.Bytes)
                        return t.push(this.readFixed32());
                    var i = a(this);
                    for (t = t || []; this.pos < i; )
                        t.push(this.readFixed32());
                    return t
                },
                readPackedSFixed32: function(t) {
                    if (this.type !== s.Bytes)
                        return t.push(this.readSFixed32());
                    var i = a(this);
                    for (t = t || []; this.pos < i; )
                        t.push(this.readSFixed32());
                    return t
                },
                readPackedFixed64: function(t) {
                    if (this.type !== s.Bytes)
                        return t.push(this.readFixed64());
                    var i = a(this);
                    for (t = t || []; this.pos < i; )
                        t.push(this.readFixed64());
                    return t
                },
                readPackedSFixed64: function(t) {
                    if (this.type !== s.Bytes)
                        return t.push(this.readSFixed64());
                    var i = a(this);
                    for (t = t || []; this.pos < i; )
                        t.push(this.readSFixed64());
                    return t
                },
                skip: function(t) {
                    var i = 7 & t;
                    if (i === s.Varint)
                        for (; 127 < this.buf[this.pos++]; )
                            ;
                    else if (i === s.Bytes)
                        this.pos = this.readVarint() + this.pos;
                    else if (i === s.Fixed32)
                        this.pos += 4;
                    else {
                        if (i !== s.Fixed64)
                            throw new Error("Unimplemented type: " + i);
                        this.pos += 8
                    }
                },
                writeTag: function(t, i) {
                    this.writeVarint(t << 3 | i)
                },
                realloc: function(t) {
                    for (var i = this.length || 16; i < this.pos + t; )
                        i *= 2;
                    if (i !== this.length) {
                        var e = new Uint8Array(i);
                        e.set(this.buf),
                        this.buf = e,
                        this.length = i
                    }
                },
                finish: function() {
                    return this.length = this.pos,
                    this.pos = 0,
                    this.buf.subarray(0, this.length)
                },
                writeFixed32: function(t) {
                    this.realloc(4),
                    y(this.buf, t, this.pos),
                    this.pos += 4
                },
                writeSFixed32: function(t) {
                    this.realloc(4),
                    y(this.buf, t, this.pos),
                    this.pos += 4
                },
                writeFixed64: function(t) {
                    this.realloc(8),
                    y(this.buf, -1 & t, this.pos),
                    y(this.buf, Math.floor(t * o), this.pos + 4),
                    this.pos += 8
                },
                writeSFixed64: function(t) {
                    this.realloc(8),
                    y(this.buf, -1 & t, this.pos),
                    y(this.buf, Math.floor(t * o), this.pos + 4),
                    this.pos += 8
                },
                writeVarint: function(t) {
                    268435455 < (t = +t || 0) || t < 0 ? function(t, i) {
                        var e, r;
                        0 <= t ? (e = t % 4294967296 | 0,
                        r = t / 4294967296 | 0) : (r = ~(-t / 4294967296),
                        4294967295 ^ (e = ~(-t % 4294967296)) ? e = e + 1 | 0 : r = r + 1 | (e = 0));
                        if (0x10000000000000000 <= t || t < -0x10000000000000000)
                            throw new Error("Given varint doesn't fit into 10 bytes");
                        i.realloc(10),
                        function(t, i, e) {
                            e.buf[e.pos++] = 127 & t | 128,
                            t >>>= 7,
                            e.buf[e.pos++] = 127 & t | 128,
                            t >>>= 7,
                            e.buf[e.pos++] = 127 & t | 128,
                            t >>>= 7,
                            e.buf[e.pos++] = 127 & t | 128,
                            t >>>= 7,
                            e.buf[e.pos] = 127 & t
                        }(e, 0, i),
                        function(t, i) {
                            var e = (7 & t) << 4;
                            if (i.buf[i.pos++] |= e | ((t >>>= 3) ? 128 : 0),
                            !t)
                                return;
                            if (i.buf[i.pos++] = 127 & t | ((t >>>= 7) ? 128 : 0),
                            !t)
                                return;
                            if (i.buf[i.pos++] = 127 & t | ((t >>>= 7) ? 128 : 0),
                            !t)
                                return;
                            if (i.buf[i.pos++] = 127 & t | ((t >>>= 7) ? 128 : 0),
                            !t)
                                return;
                            if (i.buf[i.pos++] = 127 & t | ((t >>>= 7) ? 128 : 0),
                            !t)
                                return;
                            i.buf[i.pos++] = 127 & t
                        }(r, i)
                    }(t, this) : (this.realloc(4),
                    this.buf[this.pos++] = 127 & t | (127 < t ? 128 : 0),
                    t <= 127 || (this.buf[this.pos++] = 127 & (t >>>= 7) | (127 < t ? 128 : 0),
                    t <= 127 || (this.buf[this.pos++] = 127 & (t >>>= 7) | (127 < t ? 128 : 0),
                    t <= 127 || (this.buf[this.pos++] = t >>> 7 & 127))))
                },
                writeSVarint: function(t) {
                    this.writeVarint(t < 0 ? 2 * -t - 1 : 2 * t)
                },
                writeBoolean: function(t) {
                    this.writeVarint(Boolean(t))
                },
                writeString: function(t) {
                    t = String(t),
                    this.realloc(4 * t.length),
                    this.pos++;
                    var i = this.pos;
                    this.pos = function(t, i, e) {
                        for (var r, s, n = 0; n < i.length; n++) {
                            if (55295 < (r = i.charCodeAt(n)) && r < 57344) {
                                if (!s) {
                                    56319 < r || n + 1 === i.length ? (t[e++] = 239,
                                    t[e++] = 191,
                                    t[e++] = 189) : s = r;
                                    continue
                                }
                                if (r < 56320) {
                                    t[e++] = 239,
                                    t[e++] = 191,
                                    t[e++] = 189,
                                    s = r;
                                    continue
                                }
                                r = s - 55296 << 10 | r - 56320 | 65536,
                                s = null
                            } else
                                s && (t[e++] = 239,
                                t[e++] = 191,
                                t[e++] = 189,
                                s = null);
                            r < 128 ? t[e++] = r : (r < 2048 ? t[e++] = r >> 6 | 192 : (r < 65536 ? t[e++] = r >> 12 | 224 : (t[e++] = r >> 18 | 240,
                            t[e++] = r >> 12 & 63 | 128),
                            t[e++] = r >> 6 & 63 | 128),
                            t[e++] = 63 & r | 128)
                        }
                        return e
                    }(this.buf, t, this.pos);
                    var e = this.pos - i;
                    128 <= e && f(i, e, this),
                    this.pos = i - 1,
                    this.writeVarint(e),
                    this.pos += e
                },
                writeFloat: function(t) {
                    this.realloc(4),
                    r.write(this.buf, t, this.pos, !0, 23, 4),
                    this.pos += 4
                },
                writeDouble: function(t) {
                    this.realloc(8),
                    r.write(this.buf, t, this.pos, !0, 52, 8),
                    this.pos += 8
                },
                writeBytes: function(t) {
                    var i = t.length;
                    this.writeVarint(i),
                    this.realloc(i);
                    for (var e = 0; e < i; e++)
                        this.buf[this.pos++] = t[e]
                },
                writeRawMessage: function(t, i) {
                    this.pos++;
                    var e = this.pos;
                    t(i, this);
                    var r = this.pos - e;
                    128 <= r && f(e, r, this),
                    this.pos = e - 1,
                    this.writeVarint(r),
                    this.pos += r
                },
                writeMessage: function(t, i, e) {
                    this.writeTag(t, s.Bytes),
                    this.writeRawMessage(i, e)
                },
                writePackedVarint: function(t, i) {
                    i.length && this.writeMessage(t, d, i)
                },
                writePackedSVarint: function(t, i) {
                    i.length && this.writeMessage(t, p, i)
                },
                writePackedBoolean: function(t, i) {
                    i.length && this.writeMessage(t, w, i)
                },
                writePackedFloat: function(t, i) {
                    i.length && this.writeMessage(t, l, i)
                },
                writePackedDouble: function(t, i) {
                    i.length && this.writeMessage(t, c, i)
                },
                writePackedFixed32: function(t, i) {
                    i.length && this.writeMessage(t, F, i)
                },
                writePackedSFixed32: function(t, i) {
                    i.length && this.writeMessage(t, b, i)
                },
                writePackedFixed64: function(t, i) {
                    i.length && this.writeMessage(t, g, i)
                },
                writePackedSFixed64: function(t, i) {
                    i.length && this.writeMessage(t, x, i)
                },
                writeBytesField: function(t, i) {
                    this.writeTag(t, s.Bytes),
                    this.writeBytes(i)
                },
                writeFixed32Field: function(t, i) {
                    this.writeTag(t, s.Fixed32),
                    this.writeFixed32(i)
                },
                writeSFixed32Field: function(t, i) {
                    this.writeTag(t, s.Fixed32),
                    this.writeSFixed32(i)
                },
                writeFixed64Field: function(t, i) {
                    this.writeTag(t, s.Fixed64),
                    this.writeFixed64(i)
                },
                writeSFixed64Field: function(t, i) {
                    this.writeTag(t, s.Fixed64),
                    this.writeSFixed64(i)
                },
                writeVarintField: function(t, i) {
                    this.writeTag(t, s.Varint),
                    this.writeVarint(i)
                },
                writeSVarintField: function(t, i) {
                    this.writeTag(t, s.Varint),
                    this.writeSVarint(i)
                },
                writeStringField: function(t, i) {
                    this.writeTag(t, s.Bytes),
                    this.writeString(i)
                },
                writeFloatField: function(t, i) {
                    this.writeTag(t, s.Fixed32),
                    this.writeFloat(i)
                },
                writeDoubleField: function(t, i) {
                    this.writeTag(t, s.Fixed64),
                    this.writeDouble(i)
                },
                writeBooleanField: function(t, i) {
                    this.writeVarintField(t, Boolean(i))
                }
            }
        }
        , {
            ieee754: 2
        }],
        2: [function(t, i, e) {
            e.read = function(t, i, e, r, s) {
                var n, o, h = 8 * s - r - 1, a = (1 << h) - 1, u = a >> 1, f = -7, d = e ? s - 1 : 0, p = e ? -1 : 1, l = t[i + d];
                for (d += p,
                n = l & (1 << -f) - 1,
                l >>= -f,
                f += h; 0 < f; n = 256 * n + t[i + d],
                d += p,
                f -= 8)
                    ;
                for (o = n & (1 << -f) - 1,
                n >>= -f,
                f += r; 0 < f; o = 256 * o + t[i + d],
                d += p,
                f -= 8)
                    ;
                if (0 === n)
                    n = 1 - u;
                else {
                    if (n === a)
                        return o ? NaN : 1 / 0 * (l ? -1 : 1);
                    o += Math.pow(2, r),
                    n -= u
                }
                return (l ? -1 : 1) * o * Math.pow(2, n - r)
            }
            ,
            e.write = function(t, i, e, r, s, n) {
                var o, h, a, u = 8 * n - s - 1, f = (1 << u) - 1, d = f >> 1, p = 23 === s ? Math.pow(2, -24) - Math.pow(2, -77) : 0, l = r ? 0 : n - 1, c = r ? 1 : -1, w = i < 0 || 0 === i && 1 / i < 0 ? 1 : 0;
                for (i = Math.abs(i),
                isNaN(i) || i === 1 / 0 ? (h = isNaN(i) ? 1 : 0,
                o = f) : (o = Math.floor(Math.log(i) / Math.LN2),
                i * (a = Math.pow(2, -o)) < 1 && (o--,
                a *= 2),
                2 <= (i += 1 <= o + d ? p / a : p * Math.pow(2, 1 - d)) * a && (o++,
                a /= 2),
                f <= o + d ? (h = 0,
                o = f) : 1 <= o + d ? (h = (i * a - 1) * Math.pow(2, s),
                o += d) : (h = i * Math.pow(2, d - 1) * Math.pow(2, s),
                o = 0)); 8 <= s; t[e + l] = 255 & h,
                l += c,
                h /= 256,
                s -= 8)
                    ;
                for (o = o << s | h,
                u += s; 0 < u; t[e + l] = 255 & o,
                l += c,
                o /= 256,
                u -= 8)
                    ;
                t[e + l - c] |= 128 * w
            }
        }
        , {}]
    }, {}, [1])(1)
});
!function(e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).geobuf = e()
}(function() {
    return function o(a, u, f) {
        function l(t, e) {
            if (!u[t]) {
                if (!a[t]) {
                    var r = "function" == typeof require && require;
                    if (!e && r)
                        return r(t, !0);
                    if (s)
                        return s(t, !0);
                    var n = new Error("Cannot find module '" + t + "'");
                    throw n.code = "MODULE_NOT_FOUND",
                    n
                }
                var i = u[t] = {
                    exports: {}
                };
                a[t][0].call(i.exports, function(e) {
                    return l(a[t][1][e] || e)
                }, i, i.exports, o, a, u, f)
            }
            return u[t].exports
        }
        for (var s = "function" == typeof require && require, e = 0; e < f.length; e++)
            l(f[e]);
        return l
    }({
        1: [function(e, t, r) {
            "use strict";
            var o, a, u, l, s;
            t.exports = function(e) {
                l = 2,
                s = Math.pow(10, 6),
                u = null,
                o = [],
                a = [];
                var t = e.readFields(n, {});
                return o = null,
                t
            }
            ;
            var f = ["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon", "GeometryCollection"];
            function n(e, t, r) {
                var n, i;
                1 === e ? o.push(r.readString()) : 2 === e ? l = r.readVarint() : 3 === e ? s = Math.pow(10, r.readVarint()) : 4 === e ? (n = r,
                (i = t).type = "FeatureCollection",
                i.features = [],
                n.readMessage(c, i)) : 5 === e ? d(r, t) : 6 === e && p(r, t)
            }
            function d(e, t) {
                t.type = "Feature";
                var r = e.readMessage(i, t);
                return "geometry"in r || (r.geometry = null),
                r
            }
            function p(e, t) {
                return t.type = "Point",
                e.readMessage(g, t)
            }
            function c(e, t, r) {
                1 === e ? t.features.push(d(r, {})) : 13 === e ? a.push(y(r)) : 15 === e && h(r, t)
            }
            function i(e, t, r) {
                1 === e ? t.geometry = p(r, {}) : 11 === e ? t.id = r.readString() : 12 === e ? t.id = r.readSVarint() : 13 === e ? a.push(y(r)) : 14 === e ? t.properties = h(r, {}) : 15 === e && h(r, t)
            }
            function g(e, t, r) {
                var n, i, o;
                1 === e ? t.type = f[r.readVarint()] : 2 === e ? u = r.readPackedVarint() : 3 === e ? (i = r,
                "Point" === (o = (n = t).type) ? n.coordinates = function(e) {
                    var t = e.readVarint() + e.pos
                      , r = [];
                    for (; e.pos < t; )
                        r.push(e.readSVarint() / s);
                    return r
                }(i) : "MultiPoint" === o || "LineString" === o ? n.coordinates = M(i) : "MultiLineString" === o ? n.coordinates = w(i) : "Polygon" === o ? n.coordinates = w(i, !0) : "MultiPolygon" === o && (n.coordinates = function(e) {
                    var t = e.readVarint() + e.pos;
                    if (!u)
                        return [[v(e, t, null, !0)]];
                    for (var r = [], n = 1, i = 0; i < u[0]; i++) {
                        for (var o = [], a = 0; a < u[n]; a++)
                            o.push(v(e, t, u[n + 1 + a], !0));
                        n += u[n] + 1,
                        r.push(o)
                    }
                    return u = null,
                    r
                }(i))) : 4 === e ? (t.geometries = t.geometries || [],
                t.geometries.push(p(r, {}))) : 13 === e ? a.push(y(r)) : 15 === e && h(r, t)
            }
            function y(e) {
                for (var t = e.readVarint() + e.pos, r = null; e.pos < t; ) {
                    var n = e.readVarint() >> 3;
                    1 == n ? r = e.readString() : 2 == n ? r = e.readDouble() : 3 == n ? r = e.readVarint() : 4 == n ? r = -e.readVarint() : 5 == n ? r = e.readBoolean() : 6 == n && (r = JSON.parse(e.readString()))
                }
                return r
            }
            function h(e, t) {
                for (var r = e.readVarint() + e.pos; e.pos < r; )
                    t[o[e.readVarint()]] = a[e.readVarint()];
                return a = [],
                t
            }
            function v(e, t, r, n) {
                for (var i, o = 0, a = [], u = [], f = 0; f < l; f++)
                    u[f] = 0;
                for (; r ? o < r : e.pos < t; ) {
                    for (i = [],
                    f = 0; f < l; f++)
                        u[f] += e.readSVarint(),
                        i[f] = u[f] / s;
                    a.push(i),
                    o++
                }
                return n && a.push(a[0]),
                a
            }
            function M(e) {
                return v(e, e.readVarint() + e.pos)
            }
            function w(e, t) {
                var r = e.readVarint() + e.pos;
                if (!u)
                    return [v(e, r, null, t)];
                for (var n = [], i = 0; i < u.length; i++)
                    n.push(v(e, r, u[i], t));
                return u = null,
                n
            }
        }
        , {}],
        2: [function(e, t, r) {
            "use strict";
            t.exports = function(e, t) {
                a = {},
                o = [],
                f = i = 0,
                l = 1,
                function e(t) {
                    var r, n;
                    if ("FeatureCollection" === t.type)
                        for (r = 0; r < t.features.length; r++)
                            e(t.features[r]);
                    else if ("Feature" === t.type)
                        for (n in null !== t.geometry && e(t.geometry),
                        t.properties)
                            g(n);
                    else if ("Point" === t.type)
                        c(t.coordinates);
                    else if ("MultiPoint" === t.type)
                        p(t.coordinates);
                    else if ("GeometryCollection" === t.type)
                        for (r = 0; r < t.geometries.length; r++)
                            e(t.geometries[r]);
                    else if ("LineString" === t.type)
                        p(t.coordinates);
                    else if ("Polygon" === t.type || "MultiLineString" === t.type)
                        d(t.coordinates);
                    else if ("MultiPolygon" === t.type)
                        for (r = 0; r < t.coordinates.length; r++)
                            d(t.coordinates[r]);
                    for (n in t)
                        S(n, t.type) || g(n)
                }(e),
                l = Math.min(l, u);
                for (var r = Math.ceil(Math.log(l) / Math.LN10), n = 0; n < o.length; n++)
                    t.writeStringField(1, o[n]);
                2 !== f && t.writeVarintField(2, f);
                6 !== r && t.writeVarintField(3, r);
                "FeatureCollection" === e.type ? t.writeMessage(4, y, e) : "Feature" === e.type ? t.writeMessage(5, h, e) : t.writeMessage(6, v, e);
                return a = null,
                t.finish()
            }
            ;
            var a, i, o, f, l, u = 1e6, s = {
                Point: 0,
                MultiPoint: 1,
                LineString: 2,
                MultiLineString: 3,
                Polygon: 4,
                MultiPolygon: 5,
                GeometryCollection: 6
            };
            function d(e) {
                for (var t = 0; t < e.length; t++)
                    p(e[t])
            }
            function p(e) {
                for (var t = 0; t < e.length; t++)
                    c(e[t])
            }
            function c(e) {
                f = Math.max(f, e.length);
                for (var t = 0; t < e.length; t++)
                    for (; Math.round(e[t] * l) / l !== e[t] && l < u; )
                        l *= 10
            }
            function g(e) {
                void 0 === a[e] && (o.push(e),
                a[e] = i++)
            }
            function y(e, t) {
                for (var r = 0; r < e.features.length; r++)
                    t.writeMessage(1, h, e.features[r]);
                M(e, t, !0)
            }
            function h(e, t) {
                null !== e.geometry && t.writeMessage(1, v, e.geometry),
                void 0 !== e.id && ("number" == typeof e.id && e.id % 1 == 0 ? t.writeSVarintField(12, e.id) : t.writeStringField(11, e.id)),
                e.properties && M(e.properties, t),
                M(e, t, !0)
            }
            function v(e, t) {
                t.writeVarintField(1, s[e.type]);
                var r = e.coordinates;
                if ("Point" === e.type)
                    !function(e, t) {
                        for (var r = [], n = 0; n < f; n++)
                            r.push(Math.round(e[n] * l));
                        t.writePackedSVarint(3, r)
                    }(r, t);
                else if ("MultiPoint" === e.type)
                    V(r, t);
                else if ("LineString" === e.type)
                    V(r, t);
                else if ("MultiLineString" === e.type)
                    m(r, t);
                else if ("Polygon" === e.type)
                    m(r, t, !0);
                else if ("MultiPolygon" === e.type)
                    !function(e, t) {
                        var r, n, i = e.length;
                        if (1 !== i || 1 !== e[0].length) {
                            var o = [i];
                            for (r = 0; r < i; r++)
                                for (o.push(e[r].length),
                                n = 0; n < e[r].length; n++)
                                    o.push(e[r][n].length - 1);
                            t.writePackedVarint(2, o)
                        }
                        var a = [];
                        for (r = 0; r < i; r++)
                            for (n = 0; n < e[r].length; n++)
                                P(a, e[r][n], !0);
                        t.writePackedSVarint(3, a)
                    }(r, t);
                else if ("GeometryCollection" === e.type)
                    for (var n = 0; n < e.geometries.length; n++)
                        t.writeMessage(4, v, e.geometries[n]);
                M(e, t, !0)
            }
            function M(e, t, r) {
                var n = []
                  , i = 0;
                for (var o in e)
                    r && S(o, e.type) || (t.writeMessage(13, w, e[o]),
                    n.push(a[o]),
                    n.push(i++));
                t.writePackedVarint(r ? 15 : 14, n)
            }
            function w(e, t) {
                var r;
                null !== e && ("string" == (r = typeof e) ? t.writeStringField(1, e) : "boolean" == r ? t.writeBooleanField(5, e) : "object" == r ? t.writeStringField(6, JSON.stringify(e)) : "number" == r && (e % 1 != 0 ? t.writeDoubleField(2, e) : 0 <= e ? t.writeVarintField(3, e) : t.writeVarintField(4, -e)))
            }
            function V(e, t) {
                var r = [];
                P(r, e),
                t.writePackedSVarint(3, r)
            }
            function m(e, t, r) {
                var n = e.length;
                if (1 !== n) {
                    for (var i = [], o = 0; o < n; o++)
                        i.push(e[o].length - (r ? 1 : 0));
                    t.writePackedVarint(2, i)
                }
                var a = [];
                for (o = 0; o < n; o++)
                    P(a, e[o], r);
                t.writePackedSVarint(3, a)
            }
            function P(e, t, r) {
                for (var n, i = t.length - (r ? 1 : 0), o = new Array(f), a = 0; a < f; a++)
                    o[a] = 0;
                for (n = 0; n < i; n++)
                    for (a = 0; a < f; a++) {
                        var u = Math.round(t[n][a] * l) - o[a];
                        e.push(u),
                        o[a] += u
                    }
            }
            function S(e, t) {
                if ("type" === e)
                    return 1;
                if ("FeatureCollection" === t) {
                    if ("features" === e)
                        return 1
                } else if ("Feature" === t) {
                    if ("id" === e || "properties" === e || "geometry" === e)
                        return 1
                } else if ("GeometryCollection" === t) {
                    if ("geometries" === e)
                        return 1
                } else if ("coordinates" === e)
                    return 1
            }
        }
        , {}],
        3: [function(e, t, r) {
            "use strict";
            r.encode = e("./encode"),
            r.decode = e("./decode")
        }
        , {
            "./decode": 1,
            "./encode": 2
        }]
    }, {}, [3])(3)
});
(function(previousMethods) {
    if (typeof previousMethods === 'undefined') {
        previousMethods = {
            getCenter: L.Map.prototype.getCenter,
            setView: L.Map.prototype.setView,
            flyTo: L.Map.prototype.flyTo,
            setZoomAround: L.Map.prototype.setZoomAround,
            getBoundsZoom: L.Map.prototype.getBoundsZoom,
            PopupAdjustPan: L.Popup.prototype._adjustPan,
            RendererUpdate: L.Renderer.prototype._update
        }
    }
    L.Map.include({
        getBounds: function() {
            if (this._viewport) {
                return this.getViewportLatLngBounds()
            } else {
                var bounds = this.getPixelBounds()
                  , sw = this.unproject(bounds.getBottomLeft())
                  , ne = this.unproject(bounds.getTopRight());
                return new L.LatLngBounds(sw,ne)
            }
        },
        getViewport: function() {
            return this._viewport
        },
        getViewportBounds: function() {
            var vp = this._viewport
              , topleft = L.point(vp.offsetLeft, vp.offsetTop)
              , vpsize = L.point(vp.clientWidth, vp.clientHeight);
            if (vpsize.x === 0 || vpsize.y === 0) {
                vp = this.getContainer();
                if (vp) {
                    topleft = L.point(0, 0);
                    vpsize = L.point(vp.clientWidth, vp.clientHeight)
                }
            }
            return L.bounds(topleft, topleft.add(vpsize))
        },
        getViewportLatLngBounds: function() {
            var bounds = this.getViewportBounds();
            return L.latLngBounds(this.containerPointToLatLng(bounds.min), this.containerPointToLatLng(bounds.max))
        },
        getOffset: function() {
            var mCenter = this.getSize().divideBy(2)
              , vCenter = this.getViewportBounds().getCenter();
            return mCenter.subtract(vCenter)
        },
        getCenter: function(withoutViewport) {
            var center = previousMethods.getCenter.call(this);
            if (this.getViewport() && !withoutViewport) {
                var zoom = this.getZoom()
                  , point = this.project(center, zoom);
                point = point.subtract(this.getOffset());
                center = this.unproject(point, zoom)
            }
            return center
        },
        setView: function(center, zoom, options) {
            center = L.latLng(center);
            zoom = zoom === undefined ? this._zoom : this._limitZoom(zoom);
            if (this.getViewport()) {
                var point = this.project(center, this._limitZoom(zoom));
                point = point.add(this.getOffset());
                center = this.unproject(point, this._limitZoom(zoom))
            }
            return previousMethods.setView.call(this, center, zoom, options)
        },
        flyTo: function(targetCenter, targetZoom, options) {
            targetCenter = L.latLng(targetCenter);
            targetZoom = targetZoom === undefined ? startZoom : targetZoom;
            if (this.getViewport()) {
                var point = this.project(targetCenter, this._limitZoom(targetZoom));
                point = point.add(this.getOffset());
                targetCenter = this.unproject(point, this._limitZoom(targetZoom))
            }
            options = options || {};
            if (options.animate === !1 || !L.Browser.any3d) {
                return this.setView(targetCenter, targetZoom, options)
            }
            this._stop();
            var from = this.project(previousMethods.getCenter.call(this))
              , to = this.project(targetCenter)
              , size = this.getSize()
              , startZoom = this._zoom;
            var w0 = Math.max(size.x, size.y)
              , w1 = w0 * this.getZoomScale(startZoom, targetZoom)
              , u1 = (to.distanceTo(from)) || 1
              , rho = 1.42
              , rho2 = rho * rho;
            function r(i) {
                var s1 = i ? -1 : 1
                  , s2 = i ? w1 : w0
                  , t1 = w1 * w1 - w0 * w0 + s1 * rho2 * rho2 * u1 * u1
                  , b1 = 2 * s2 * rho2 * u1
                  , b = t1 / b1
                  , sq = Math.sqrt(b * b + 1) - b;
                var log = sq < 0.000000001 ? -18 : Math.log(sq);
                return log
            }
            function sinh(n) {
                return (Math.exp(n) - Math.exp(-n)) / 2
            }
            function cosh(n) {
                return (Math.exp(n) + Math.exp(-n)) / 2
            }
            function tanh(n) {
                return sinh(n) / cosh(n)
            }
            var r0 = r(0);
            function w(s) {
                return w0 * (cosh(r0) / cosh(r0 + rho * s))
            }
            function u(s) {
                return w0 * (cosh(r0) * tanh(r0 + rho * s) - sinh(r0)) / rho2
            }
            function easeOut(t) {
                return 1 - Math.pow(1 - t, 1.5)
            }
            var start = Date.now()
              , S = (r(1) - r0) / rho
              , duration = options.duration ? 1000 * options.duration : 1000 * S * 0.8;
            function frame() {
                var t = (Date.now() - start) / duration
                  , s = easeOut(t) * S;
                if (t <= 1) {
                    this._flyToFrame = L.Util.requestAnimFrame(frame, this);
                    this._move(this.unproject(from.add(to.subtract(from).multiplyBy(u(s) / u1)), startZoom), this.getScaleZoom(w0 / w(s), startZoom), {
                        flyTo: !0
                    })
                } else {
                    this._move(targetCenter, targetZoom)._moveEnd(!0)
                }
            }
            this._moveStart(!0, options.noMoveStart);
            frame.call(this);
            return this
        },
        setZoomAround: function(latlng, zoom, options) {
            var vp = this.getViewport();
            if (vp) {
                var scale = this.getZoomScale(zoom)
                  , viewHalf = this.getViewportBounds().getCenter()
                  , containerPoint = latlng instanceof L.Point ? latlng : this.latLngToContainerPoint(latlng)
                  , centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale)
                  , newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));
                return this.setView(newCenter, zoom, {
                    zoom: options
                })
            } else {
                return previousMethods.setZoomAround.call(this, latlng, zoom, options)
            }
        },
        getBoundsZoom: function(bounds, inside, padding) {
            bounds = L.latLngBounds(bounds);
            padding = L.point(padding || [0, 0]);
            var zoom = this.getZoom() || 0
              , min = this.getMinZoom()
              , max = this.getMaxZoom()
              , nw = bounds.getNorthWest()
              , se = bounds.getSouthEast()
              , vp = this.getViewport()
              , size = (vp ? L.point(vp.clientWidth, vp.clientHeight) : this.getSize()).subtract(padding)
              , boundsSize = this.project(se, zoom).subtract(this.project(nw, zoom))
              , snap = L.Browser.any3d ? this.options.zoomSnap : 1
              , scalex = size.x / boundsSize.x
              , scaley = size.y / boundsSize.y
              , scale = inside ? Math.max(scalex, scaley) : Math.min(scalex, scaley);
            zoom = this.getScaleZoom(scale, zoom);
            if (snap) {
                zoom = Math.round(zoom / (snap / 100)) * (snap / 100);
                zoom = inside ? Math.ceil(zoom / snap) * snap : Math.floor(zoom / snap) * snap
            }
            return Math.max(min, Math.min(max, zoom))
        },
        setActiveArea: function(css, keepCenter, animate) {
            var center;
            if (keepCenter && this._zoom) {
                center = this.getCenter()
            }
            if (!this._viewport) {
                var container = this.getContainer();
                this._viewport = L.DomUtil.create('div', '');
                container.insertBefore(this._viewport, container.firstChild)
            }
            if (typeof css === 'string') {
                this._viewport.className = css
            } else {
                L.extend(this._viewport.style, css)
            }
            if (center) {
                this.setView(center, this.getZoom(), {
                    animate: !!animate
                })
            }
            return this
        }
    });
    L.Renderer.include({
        _onZoom: function() {
            this._updateTransform(this._map.getCenter(!0), this._map.getZoom())
        },
        _update: function() {
            previousMethods.RendererUpdate.call(this);
            this._center = this._map.getCenter(!0)
        }
    });
    L.GridLayer.include({
        _updateLevels: function() {
            var zoom = this._tileZoom
              , maxZoom = this.options.maxZoom;
            if (zoom === undefined) {
                return undefined
            }
            for (var z in this._levels) {
                z = Number(z);
                if (this._levels[z].el.children.length || z === zoom) {
                    this._levels[z].el.style.zIndex = maxZoom - Math.abs(zoom - z);
                    this._onUpdateLevel(z)
                } else {
                    L.DomUtil.remove(this._levels[z].el);
                    this._removeTilesAtZoom(z);
                    this._onRemoveLevel(z);
                    delete this._levels[z]
                }
            }
            var level = this._levels[zoom]
              , map = this._map;
            if (!level) {
                level = this._levels[zoom] = {};
                level.el = L.DomUtil.create('div', 'leaflet-tile-container leaflet-zoom-animated', this._container);
                level.el.style.zIndex = maxZoom;
                level.origin = map.project(map.unproject(map.getPixelOrigin()), zoom).round();
                level.zoom = zoom;
                this._setZoomTransform(level, map.getCenter(!0), map.getZoom());
                L.Util.falseFn(level.el.offsetWidth);
                this._onCreateLevel(level)
            }
            this._level = level;
            return level
        },
        _resetView: function(e) {
            var animating = e && (e.pinch || e.flyTo);
            this._setView(this._map.getCenter(!0), this._map.getZoom(), animating, animating)
        },
        _update: function(center) {
            var map = this._map;
            if (!map) {
                return
            }
            var zoom = this._clampZoom(map.getZoom());
            if (center === undefined) {
                center = map.getCenter(!0)
            }
            if (this._tileZoom === undefined) {
                return
            }
            var pixelBounds = this._getTiledPixelBounds(center)
              , tileRange = this._pxBoundsToTileRange(pixelBounds)
              , tileCenter = tileRange.getCenter()
              , queue = []
              , margin = this.options.keepBuffer
              , noPruneRange = new L.Bounds(tileRange.getBottomLeft().subtract([margin, -margin]),tileRange.getTopRight().add([margin, -margin]));
            if (!(isFinite(tileRange.min.x) && isFinite(tileRange.min.y) && isFinite(tileRange.max.x) && isFinite(tileRange.max.y))) {
                throw new Error('Attempted to load an infinite number of tiles')
            }
            for (var key in this._tiles) {
                var c = this._tiles[key].coords;
                if (c.z !== this._tileZoom || !noPruneRange.contains(new L.Point(c.x,c.y))) {
                    this._tiles[key].current = !1
                }
            }
            if (Math.abs(zoom - this._tileZoom) > 1) {
                this._setView(center, zoom);
                return
            }
            for (var j = tileRange.min.y; j <= tileRange.max.y; j++) {
                for (var i = tileRange.min.x; i <= tileRange.max.x; i++) {
                    var coords = new L.Point(i,j);
                    coords.z = this._tileZoom;
                    if (!this._isValidTile(coords)) {
                        continue
                    }
                    var tile = this._tiles[this._tileCoordsToKey(coords)];
                    if (tile) {
                        tile.current = !0
                    } else {
                        queue.push(coords)
                    }
                }
            }
            queue.sort(function(a, b) {
                return a.distanceTo(tileCenter) - b.distanceTo(tileCenter)
            });
            if (queue.length !== 0) {
                if (!this._loading) {
                    this._loading = !0;
                    this.fire('loading')
                }
                var fragment = document.createDocumentFragment();
                for (i = 0; i < queue.length; i++) {
                    this._addTile(queue[i], fragment)
                }
                this._level.el.appendChild(fragment)
            }
        }
    });
    L.Popup.include({
        _adjustPan: function() {
            if (!this._map._viewport) {
                previousMethods.PopupAdjustPan.call(this)
            } else {
                if (!this.options.autoPan) {
                    return
                }
                if (this._map._panAnim) {
                    this._map._panAnim.stop()
                }
                var map = this._map
                  , vp = map._viewport
                  , containerHeight = this._container.offsetHeight
                  , containerWidth = this._containerWidth
                  , vpTopleft = L.point(vp.offsetLeft, vp.offsetTop)
                  , layerPos = new L.Point(this._containerLeft - vpTopleft.x,-containerHeight - this._containerBottom - vpTopleft.y);
                layerPos._add(L.DomUtil.getPosition(this._container));
                var containerPos = map.layerPointToContainerPoint(layerPos)
                  , padding = L.point(this.options.autoPanPadding)
                  , paddingTL = L.point(this.options.autoPanPaddingTopLeft || padding)
                  , paddingBR = L.point(this.options.autoPanPaddingBottomRight || padding)
                  , size = L.point(vp.clientWidth, vp.clientHeight)
                  , dx = 0
                  , dy = 0;
                if (containerPos.x + containerWidth + paddingBR.x > size.x) {
                    dx = containerPos.x + containerWidth - size.x + paddingBR.x
                }
                if (containerPos.x - dx - paddingTL.x < 0) {
                    dx = containerPos.x - paddingTL.x
                }
                if (containerPos.y + containerHeight + paddingBR.y > size.y) {
                    dy = containerPos.y + containerHeight - size.y + paddingBR.y
                }
                if (containerPos.y - dy - paddingTL.y < 0) {
                    dy = containerPos.y - paddingTL.y
                }
                if (dx || dy) {
                    map.fire('autopanstart').panBy([dx, dy])
                }
            }
        }
    })
}
)(window.leafletActiveAreaPreviousMethods);
L.Map.addInitHook(function() {
    var map = this
      , options = map.options
      , _visible = !0
      , _buttons = [];
    var init = function() {
        map.menu.add({
            name: "home",
            tooltip: $wt.label("map", "reset", map.getUEC("lang", null)),
            class: "home",
            click: function() {
                var zoom = parseFloat(options.zoom);
                map.setView(options.center, zoom)
            }
        })
    };
    var uec = function(config) {
        if (!_visible) {
            return
        }
        config = config.uec || config;
        if (config.uec === !1) {
            map.menu.hide()
        } else if (typeof config === 'object') {
            for (var x in config) {
                if (config[x] === !1) {
                    map.menu.hide(x)
                } else if (typeof config[x] === 'object') {
                    map.menu.update(x, config[x])
                } else if (typeof config[x] === 'function' && _buttons[x]) {
                    _buttons[x].onclick = config[x]
                } else if (typeof config[x] === 'string') {
                    map.menu.update(x, config[x])
                }
            }
        }
    };
    map.menu = {
        add: function(config) {
            if (!map.ui) {
                return
            }
            if (!config.name) {
                console.log("WTINFO: button [name] params is mandatory");
                return
            }
            if (map.ui.menu[config.name]) {
                console.log("WTINFO: button [" + config.name + "] already exist.");
                return
            }
            var button = document.createElement("button");
            button.className = "wt-btn " + (config.class || "");
            button.innerHTML = (config.tooltip) ? '<b></b><span>' + config.tooltip + '</span>' : ' ';
            button.params = config;
            button.name = config.name;
            button.id = "wt-button-" + config.name;
            button.isClick = !1;
            button.havePanel = config.panel;
            button.setAttribute("aria-label", config.tooltip);
            button.setAttribute("type", "button");
            map.ui.menu[config.name] = button;
            _buttons[config.name] = button;
            if (config.after && map.ui.menu[config.after]) {
                $wt.after(button, map.ui.menu[config.after])
            } else if (config.before && map.ui.menu[config.before]) {
                $wt.before(button, map.ui.menu[config.before])
            } else {
                map.ui.menu.appendChild(button)
            }
            map.fire("menuAdd", button);
            $wt.on(button, "mouseover", function() {
                this.isClick = !0
            });
            $wt.on(button, "mouseout", function() {
                this.isClick = !1
            });
            button.onclick = function() {
                map.currentFocusElement = !1;
                map.fire("menuClick", button);
                if (typeof config.click === "function") {
                    config.click(button)
                }
                if (button.isClick) {
                    button.blur()
                }
            }
            ;
            return button
        },
        remove: function(name) {
            if (map.ui.menu[name]) {
                $wt.remove(map.ui.menu[name]);
                delete map.ui.menu[name]
            }
        },
        hide: function(name) {
            if (name) {
                if (map.ui.menu[name]) {
                    map.ui.menu[name].style.display = "none"
                }
                return
            }
            map.ui.classList.add("wt-hide-menu");
            _visible = !1;
            map.fire("resize")
        },
        show: function(name) {
            if (name) {
                if (map.ui.menu[name]) {
                    map.ui.menu[name].removeAttribute("style")
                }
                return
            }
            map.ui.classList.remove("wt-hide-menu");
            _visible = !0;
            map.fire("resize")
        },
        update: function(name, config) {
            for (var x in _buttons) {
                var link = _buttons[x];
                if (x === name) {
                    for (var key in config) {
                        if (key === 'tooltip') {
                            link.innerHTML = '<b></b><span>' + config[key] + '</span>'
                        } else if (key === 'click' && typeof config[key] === 'function') {
                            var originalClick = link.onclick;
                            link.onclick = function() {
                                if (config[key]() && typeof originalClick === 'function') {
                                    originalClick()
                                }
                            }
                        } else if (key === 'class') {
                            link.className = config[key]
                        } else if (key === 'mode') {
                            link.value = config[key]
                        }
                    }
                    if (typeof config === 'string') {
                        link.value = config
                    }
                }
            }
        }
    };
    map.on({
        init: init,
        menuUEC: uec
    })
});
L.Map.addInitHook(function() {
    let map = this;
    let isEnable = !1;
    let isHover = !1;
    let timer;
    let isFullscreen = !1;
    let isCTRL = !1;
    const hover = () => {
        clearTimeout(timer);
        isHover = !0
    }
    ;
    const out = () => {
        isHover = !1;
        timer = setTimeout( () => {
            map.ui.mousewheel.style.display = "none"
        }
        , 2000)
    }
    ;
    const wheel = () => {
        if (!isFullscreen && isHover && !isCTRL) {
            map.ui.mousewheel.style.display = "block"
        }
    }
    ;
    const enable = (e) => {
        if (e.keyCode === 17 && isHover) {
            map.ui.mousewheel.style.display = "none";
            map.scrollWheelZoom.enable();
            isCTRL = !0
        }
    }
    ;
    const disable = (e) => {
        if (e.keyCode === 17 && isHover) {
            map.scrollWheelZoom.disable()
        }
        isCTRL = !1
    }
    ;
    const check = () => {
        setTimeout( () => {
            isFullscreen = map.ui.className.indexOf("wt-map-fullscreen") > -1;
            if (isFullscreen) {
                map.ui.mousewheel.style.display = "none";
                map.scrollWheelZoom.enable()
            } else {
                map.scrollWheelZoom.disable()
            }
        }
        , 100)
    }
    ;
    const mousewheel = (onOff) => {
        if (!map.ui) {
            return
        }
        let action = (onOff) ? 'addEventListener' : 'removeEventListener';
        let viewport = map.ui.map;
        if (onOff) {
            if (!map.ui.mousewheel) {
                map.ui.mousewheel = document.createElement("div");
                map.ui.mousewheel.className = "wt-mask-mouse";
                map.ui.mousewheel.innerHTML = "<p>" + $wt.label("map", "mousewheel", map.getUEC("lang", null)) + "</p>";
                $wt.after(map.ui.mousewheel, map.ui.map)
            }
            check()
        } else if (map.ui.mousewheel) {
            $wt.remove(map.ui.mousewheel);
            delete map.ui.mousewheel;
            setTimeout( () => map.scrollWheelZoom.enable(), 100)
        }
        viewport[action]("mouseover", hover, {
            passive: !0
        });
        viewport[action]("mousemove", hover, {
            passive: !0
        });
        viewport[action]("mousewheel", wheel, {
            passive: !0
        });
        viewport[action]("DOMMouseScroll", wheel, {
            passive: !0
        });
        viewport[action]("mouseout", out, {
            passive: !0
        });
        window[action]("keydown", enable, {
            passive: !0
        });
        window[action]("keyup", disable, {
            passive: !0
        });
        window[action]("click", check, {
            passive: !0
        })
    }
    ;
    const uec = (config) => {
        isEnable = config.uec;
        mousewheel(config.uec)
    }
    ;
    map.mousewheel = {
        enable: () => mousewheel(!0),
        disable: () => mousewheel(!1)
    };
    map.on({
        mousewheelUEC: uec,
        showInfo: () => {
            if (isEnable) {
                mousewheel(!1)
            }
        }
        ,
        closeInfo: () => {
            if (isEnable) {
                mousewheel(!0)
            }
        }
    })
});
L.Map.addInitHook(function() {
    let map = this;
    let isEnable = !1;
    let isBlock = !1;
    let current = 0;
    const touchstart = (e) => {
        let touches = e.touches;
        let isFullscreen = map.ui.fullScreen;
        if (touches.length !== 2 && !isFullscreen) {
            map.dragging.disable();
            map.ui.touch.style.display = "table-cell";
            current = Math.round(e.touches[0].pageY);
            isBlock = !0
        } else {
            map.dragging.enable();
            map.ui.touch.removeAttribute("style");
            isBlock = !1
        }
    }
    ;
    const touchend = () => {
        map.dragging.enable();
        map.ui.touch.removeAttribute("style")
    }
    ;
    const touchmove = (e) => {
        if (isBlock) {
            let top = window.pageYOffset || document.documentElement.scrollTop;
            let position = Math.round(e.touches[0].pageY);
            clearTimeout(map.ui.touch.timer);
            map.ui.touch.timer = setTimeout( () => {
                current = position
            }
            , 100);
            let max = Math.max(position, current);
            let min = Math.min(position, current);
            let direction = (current > position) ? 'up' : 'down';
            if (direction === 'up') {
                window.scrollTo(0, top + (max - min))
            } else {
                window.scrollTo(0, top - (max - min))
            }
        }
    }
    ;
    const touch = (onOff) => {
        if (!map.ui) {
            return
        }
        let addOrRemove = (onOff) ? 'addEventListener' : 'removeEventListener';
        let viewport = map.ui.map;
        if (onOff) {
            if (!map.ui.touch) {
                map.ui.touch = document.createElement("div");
                map.ui.touch.className = "wt-mask-touch";
                map.ui.touch.innerHTML = "<p>" + $wt.label("map", "touchscreen", map.getUEC("lang", null)) + "</p>";
                $wt.after(map.ui.touch, map.ui.map)
            }
        } else if (map.ui.touch) {
            map.dragging.enable();
            $wt.remove(map.ui.touch);
            delete map.ui.touch
        }
        viewport[addOrRemove]("touchstart", touchstart, {
            passive: !0
        });
        viewport[addOrRemove]("touchend", touchend, {
            passive: !0
        });
        viewport[addOrRemove]("touchmove", touchmove)
    }
    ;
    const uec = (config) => {
        isEnable = config.uec;
        touch(config.uec)
    }
    ;
    map.touch = {
        enable: () => touch(!0),
        disable: () => touch(!1)
    };
    map.on({
        touchUEC: uec,
        showInfo: () => {
            if (isEnable) {
                touch(!1)
            }
        }
        ,
        closeInfo: () => {
            if (isEnable) {
                touch(!0)
            }
        }
    })
});
L.Map.addInitHook(function() {
    var map = this;
    var lang = map.getUEC("lang", null);
    var zoom = function(onoff) {
        if (!map.ui) {
            return
        }
        if (onoff) {
            map.menu.show("zoomin");
            map.menu.show("zoomout");
            map.dragging.enable();
            map.touchZoom.enable();
            map.doubleClickZoom.enable();
            map.scrollWheelZoom.enable();
            map.keyboard.enable();
            map.fire("zoomon")
        } else {
            map.menu.hide("zoomin");
            map.menu.hide("zoomout");
            map.dragging.disable();
            map.touchZoom.disable();
            map.doubleClickZoom.disable();
            map.scrollWheelZoom.disable();
            map.keyboard.disable();
            map.fire("zoomoff")
        }
    };
    var init = function() {
        map.menu.add({
            name: "zoomin",
            tooltip: $wt.label("map", "zoomin", lang),
            after: "home",
            class: "zoomin",
            click: function() {
                map.invalidateSize();
                map.zoomIn()
            }
        });
        map.menu.add({
            name: "zoomout",
            tooltip: $wt.label("map", "zoomout", lang),
            after: "zoomin",
            class: "zoomout",
            click: function() {
                map.invalidateSize();
                map.zoomOut()
            }
        })
    };
    var uec = function(config) {
        zoom(config.uec)
    };
    map.zoom = {
        enable: function() {
            zoom(!0)
        },
        disable: function() {
            zoom(!1)
        }
    };
    map.on({
        init: init,
        zoomUEC: uec
    })
});
L.Map.addInitHook(function() {
    let map = this;
    let open = !1;
    let lang = map.getUEC("lang", document.lang);
    let label_exit_fullscreen = $wt.label("map", "exit_fullscreen", lang);
    let label_fullscreen = $wt.label("map", "fullscreen", lang);
    const exitHandler = () => {
        if (open) {
            fullscreen(!1)
        }
        map.fire('fullscreenchange')
    }
    ;
    const fullscreen = onOff => {
        if (!map.ui) {
            return
        }
        if (!open || onOff) {
            if (map.ui.menu.fullscreen) {
                map.ui.menu.fullscreen.setAttribute("aria-label", label_exit_fullscreen + ".");
                map.ui.menu.fullscreen.innerHTML = "<b></b><span>" + label_exit_fullscreen + "</span>"
            }
            let elm = map.ui.content;
            let switchTo = elm.requestFullScreen || elm.webkitRequestFullScreen || elm.mozRequestFullScreen || elm.msRequestFullScreen;
            if (switchTo) {
                switchTo.call(elm)
            }
            map.ui.classList.add('wt-map-fullscreen');
            map.ui.style.zIndex = $wt.zindex();
            map.ui.scrollTo(0, 0);
            map.fire("fullscreen", !0);
            map.invalidateSize();
            document.addEventListener('fullscreenchange', exitHandler, !1);
            document.addEventListener('mozfullscreenchange', exitHandler, !1);
            document.addEventListener('MSFullscreenChange', exitHandler, !1);
            document.addEventListener('webkitfullscreenchange', exitHandler, !1);
            setTimeout( () => {
                open = !0
            }
            , 500)
        } else {
            let cancelFullscreen = document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || document.exitFullscreen;
            let isFullScreen = document.mozFullScreen || document.webkitIsFullScreen;
            if (cancelFullscreen && isFullScreen) {
                cancelFullscreen.call(document)
            }
            open = !1;
            if (map.ui.menu.fullscreen) {
                map.ui.menu.fullscreen.setAttribute("aria-label", label_fullscreen + ".");
                map.ui.menu.fullscreen.innerHTML = "<b></b><span>" + label_fullscreen + "</span>"
            }
            map.ui.classList.remove('wt-map-fullscreen');
            map.ui.removeAttribute("style");
            map.fire("fullscreen", !1);
            document.removeEventListener('fullscreenchange', exitHandler, !1);
            document.removeEventListener('mozfullscreenchange', exitHandler, !1);
            document.removeEventListener('MSFullscreenChange', exitHandler, !1);
            document.removeEventListener('webkitfullscreenchange', exitHandler, !1)
        }
    }
    ;
    const uec = config => {
        if (config.uec) {
            fullscreen(!0)
        }
    }
    ;
    const init = () => {
        map.menu.add({
            name: "fullscreen",
            tooltip: $wt.label("map", "fullscreen", map.getUEC("lang", null)),
            class: "fullscreen",
            after: "zoomout",
            click: () => fullscreen(!open)
        })
    }
    ;
    map.fullscreen = fullscreen;
    map.on({
        init: init,
        fullscreenUEC: uec
    })
});
L.Map.addInitHook(function() {
    var map = this;
    var inputChange = function(dom) {
        var source = (dom && dom.tagName === 'INPUT') ? dom : this;
        var type = source.type;
        var layer = source.layer;
        var container = source.parentNode.parentNode;
        var inputs = container.querySelectorAll("input");
        var checked = source.checked;
        if (type === 'radio') {
            for (var i = 0, l = inputs.length; i < l; i++) {
                if (inputs[i].layer) {
                    map.removeLayer(inputs[i].layer)
                }
            }
        }
        if (!layer) {
            layer = buildLayer(source.params)
        }
        if (checked) {
            if (layer._layers && Object.keys(layer._layers).length === 0) {
                layer.addTo(map)
            } else {
                map.addLayer(layer)
            }
        } else if (layer && type === 'checkbox') {
            map.removeLayer(layer)
        }
        source.layer = layer;
        if (typeof source.params.click === 'function') {
            source.params.click(source)
        }
        map.fire("fieldChanged", source)
    };
    var buildLayer = function(params) {
        if (params.layer) {
            return params.layer
        }
        var layer = new L.geoJSON();
        for (var x in params) {
            var data = params[x];
            if (Array.isArray(data)) {
                data.forEach(function(src) {
                    if (map[x] && typeof map[x] === 'function') {
                        map[x](src.data, src.options).addTo(layer)
                    }
                })
            }
        }
        return layer
    };
    var form = function(config) {
        if (!Array.isArray(config)) {
            return document.createElement("div")
        }
        var panel = document.createElement("div");
        for (var i in config) {
            var list = config[i];
            if (list.checkbox) {
                if (Array.isArray(list.checkbox)) {
                    list.fields = [];
                    list.checkbox.forEach(function(row) {
                        if (row.label) {
                            list.fields.push({
                                tag: "input",
                                attributes: {
                                    type: "checkbox",
                                    name: "_checkbox_" + $wt.id(),
                                    checked: row.checked || !1,
                                    class: row.class || ''
                                },
                                options: {
                                    label: row.label,
                                    legend: row.legend || !1,
                                    class: 'wt-field-separate'
                                },
                                events: {
                                    init: function() {
                                        this.params = row;
                                        if (this.checked) {
                                            inputChange(this)
                                        }
                                    },
                                    change: inputChange
                                }
                            })
                        }
                    })
                }
                delete list.checkbox
            } else if (list.radio) {
                if (Array.isArray(list.radio)) {
                    list.fields = [];
                    var unique_name = "_radio_" + $wt.id();
                    list.radio.forEach(function(row) {
                        if (row.label) {
                            list.fields.push({
                                tag: "input",
                                attributes: {
                                    type: "radio",
                                    name: unique_name,
                                    checked: row.checked || !1,
                                    class: row.class || ''
                                },
                                options: {
                                    label: row.label,
                                    legend: row.legend || !1,
                                    class: 'wt-field-separate'
                                },
                                events: {
                                    init: function() {
                                        this.params = row;
                                        if (this.checked) {
                                            inputChange(this)
                                        }
                                    },
                                    change: inputChange
                                }
                            })
                        }
                    })
                }
                delete list.radio
            } else if (list.xhtml) {
                list.fields = [{
                    tag: "div",
                    attributes: {
                        class: list.class || !1
                    },
                    data: list.xhtml
                }];
                delete list.xhtml
            }
        }
        $wt.forms(panel, {
            class: "wt-form wt-map-form",
            groups: config
        });
        return panel
    };
    map.on({
        buildForm: function(params) {
            if (params.fields) {
                var fieldsForm = new form(params.fields);
                if (fieldsForm && params.ready) {
                    params.ready(fieldsForm)
                }
            }
        }
    });
    map.forms = $wt.forms
});
L.Map.addInitHook(function() {
    let map = this;
    let UEC = map.getUEC();
    let lang = UEC?.lang || null;
    let init = function() {
        map.menu.add({
            name: "print",
            tooltip: $wt.label("map", "print", lang),
            class: "print",
            click: () => {
                setTimeout( () => map.print(map.ui.parentNode, UEC?.sidebar?.print || {}), 350)
            }
        })
    };
    map.print = (dom=map.ui.parentNode, options={}) => {
        let tooltip = map.ui.menu.print.querySelectorAll('*');
        tooltip.forEach(elm => elm.style.visibility = "hidden");
        setTimeout(map.loading.show, 250);
        $wt.print(dom, options).then( () => tooltip.forEach(elm => elm.removeAttribute('style'))).catch(console.error);
        setTimeout(map.loading.hide, 500)
    }
    ;
    map.on("init", init)
});
L.Map.addInitHook(function() {
    var map = this;
    var lang = map.getUEC("lang", null);
    var params = {};
    var placeholder = function(str) {
        return $wt.template(str, {
            lang: document.lang
        })
    };
    var validate = function(files) {
        return files.reduce(function(file, option) {
            if (typeof option === "string") {
                file.push({
                    url: placeholder(option),
                    name: placeholder(option.split('/').pop())
                })
            } else if (typeof option === "object" && option.url && option.name) {
                option.url = placeholder(option.url);
                option.name = placeholder(option.name);
                file.push(option)
            } else {
                console.log("WTERROR: download - 'url' or 'name' property for one of the file is missing.")
            }
            return file
        }, [])
    };
    var uec = function(cfg) {
        if (!cfg.download || cfg.download?.length === 0) {
            return
        }
        map.download.add(cfg.download)
    };
    map.download = {
        add: function(cfg) {
            if (!cfg.files) {
                cfg = {
                    files: (Array.isArray(cfg)) ? cfg : [cfg]
                }
            }
            cfg.files = (typeof cfg.files === "string") ? [cfg.files] : cfg.files;
            params = $wt.mergeParams({
                files: [],
                class: "download",
                tooltip: !1,
                click: !1
            }, cfg);
            var translate = (params.files.length > 1) ? "download_data_files" : "download_data_file";
            params.tooltip = params.tooltip || $wt.label("map", translate, lang);
            map.menu.add({
                name: "download",
                tooltip: params.tooltip,
                class: params.class,
                panel: !1,
                click: function() {
                    if (typeof params.click === "function") {
                        return params.click(params.files)
                    }
                    var files = validate(params.files);
                    if (files.length === 1) {
                        window.open(files[0].url)
                    } else {
                        map.download.show(files)
                    }
                }
            })
        },
        show: function(filesArray=[]) {
            var files = filesArray.filter(function(entry) {
                return entry.name && entry.url
            }).map(function(entry) {
                return $wt.template('<li><a href="{url}">{name}</a></li>', entry)
            });
            if (files.length === 0) {
                console.log("WTERROR: Your list of files is empty.");
                return
            }
            var content = $wt.template('<h3>{title}</h3><ul>{content}</ul>', {
                title: $wt.label("map", "download_data_files", lang),
                content: files.join('')
            });
            map.info.show(content, {
                class: "wt-download-content"
            })
        },
        hide: function() {
            map.info.close()
        }
    };
    map.on({
        menuUEC: uec
    })
});
L.Map.addInitHook(function() {
    var map = this
      , options = this.options
      , fromUser = !1
      , timer = !1;
    if (options.ui === !1) {
        return
    }
    if (map.ui) {
        map.ui.loading = document.createElement("div");
        map.ui.loading.className = "wt-map-loading";
        map.ui.appendChild(map.ui.loading)
    }
    map.loading = {
        show: function() {
            fromUser = !0;
            clearTimeout(timer);
            if (map.ui) {
                map.ui.loading.style.display = "block"
            }
        },
        hide: function() {
            clearTimeout(timer);
            timer = setTimeout(function() {
                if (map.ui) {
                    map.ui.loading.style.display = "none"
                }
                fromUser = !1
            }, 500)
        },
        _add: function(e) {
            if (!e.layer || !e.layer.on) {
                return
            }
            e.layer.on({
                loading: map.loading._show,
                load: map.loading._hide
            })
        },
        _show: function() {
            clearTimeout(timer);
            if (map.ui) {
                map.ui.loading.style.display = "block"
            }
        },
        _hide: function() {
            clearTimeout(timer);
            if (!fromUser && map.ui) {
                map.ui.loading.style.display = "none"
            }
        }
    };
    map.on({
        hideLoading: map.loading._hide,
        showLoading: map.loading._show,
        layeradd: map.loading._add
    })
});
L.Map.addInitHook(function() {
    var map = this;
    var icons = {
        marker: function(params) {
            var text = "";
            if (params.text) {
                text = '<circle stroke-width="0.3" stroke-opacity="0.5" stroke="#666" cx="12" cy="8" r="6.5" fill="#fff" />' + '<text x="12" y="8" font-weight="bold" font-family="Verdana, Arial" font-size="6px" fill="#444" text-anchor="middle" ' + 'dy="2px">' + params.text + '</text>'
            }
            var size = params.size || 30;
            var w = size;
            var h = size * 1.35;
            return L.divIcon($wt.mergeParams({
                className: 'wt-marker wt-marker-shadow',
                html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 -0.2 18 24" aria-hidden="true">' + '<path fill="' + params.color + '" stroke-width="0.3" stroke-opacity="0.5" stroke="#666" d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>' + '<circle stroke-width="0.3" stroke-opacity="0.5" stroke="#666" cx="12" cy="8" r="3.5" fill="#fff" />' + text + '</svg>',
                iconSize: [w, h],
                iconAnchor: [w / 2, h],
                popupAnchor: [0, 0 - h],
                tooltipAnchor: [0, 0 - h]
            }, params))
        },
        slim: function(params) {
            var text = "";
            if (params.text) {
                text = '<circle stroke-width="0.3" stroke-opacity="0.5" stroke="#444" cx="12" cy="8" r="6.5" fill="#fff" />' + '<text x="12" y="8" font-weight="bold" font-family="Verdana, Arial" font-size="6px" fill="#444" text-anchor="middle" ' + 'dy="2px">' + params.text + '</text>'
            }
            var size = params.size || 30;
            var w = size;
            var h = size * 1.35;
            return L.divIcon($wt.mergeParams({
                className: 'wt-marker wt-marker-shadow',
                html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 -0.2 18 24" aria-hidden="true">' + '<path fill="' + params.color + '" stroke-width="0.3" stroke-opacity="0.5" stroke="#444" ' + 'd="M12 0c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.342-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>' + '<circle stroke-width="0.6" stroke-opacity="0.5" stroke="#444" cx="12" cy="8" r="3.5" fill="#fff" />' + text + '</svg>',
                iconSize: [w, h],
                iconAnchor: [w / 2, h],
                popupAnchor: [0, 0 - (h / 2)],
                tooltipAnchor: [0, 0 - h]
            }, params))
        },
        info: function(params) {
            var text = "";
            if (params.text) {
                text = '<circle cx="12" cy="10" r="7.5" fill="#fff" />' + '<text x="12" y="8" font-weight="bold" font-family="Verdana, Arial" font-size="6px" fill="#444" text-anchor="middle" ' + 'dy="4px">' + params.text + '</text>'
            }
            var size = params.size || 60;
            var w = size;
            var h = size;
            return L.divIcon({
                className: "wt-marker wt-marker-shadow-2",
                html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.125 24 24" aria-hidden="true">' + '<circle cx="12" cy="10" r="9" fill="#fff" />' + '<path fill="' + params.color + '" stroke-width="0.25" stroke-opacity="0.5" stroke="#444" ' + 'd="M12 0c-5.522 0-10 4.395-10 9.815 0 5.505 4.375 9.268 10 14.185 5.625-4.917 10-8.68 10-14.185 0-5.42-4.478-9.815-10-9.815zm0 18c-4.419 0-8-3.582-8-8s3.581-8 8-8 8 3.582 8 8-3.581 8-8 8zm-2.039-4.994c.564-1.792.93-2.343 1.118-2.887.273-.788-.212-1.138-1.739.209l-.34-.64c1.743-1.901 5.334-2.331 4.113.614-.764 1.839-.606 1.484-.918 2.442-.455 1.396.693.83 1.818-.211.154.251.203.332.357.62-2.499 2.382-5.271 2.592-4.409-.147zm4.039-5.986c-.531.454-1.32.444-1.761-.022s-.367-1.21.164-1.664c.532-.454 1.319-.443 1.761.022.44.465.367 1.21-.164 1.664z"/>' + text + '</svg>',
                iconSize: [size, size],
                iconAnchor: [w / 2, h],
                popupAnchor: [0, 0 - (h / 2)],
                tooltipAnchor: [0, 0 - h]
            })
        },
        cluster: function(params) {
            var size = params.size || 70;
            var w = size;
            var h = size;
            return L.divIcon($wt.mergeParams({
                className: "wt-marker wt-cluster-shadow",
                html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">' + '<circle stroke="#666" stroke-width="0.125" cx="50%" cy="50%" r="49%" fill="' + params.color + '" />' + '<circle stroke="#666" stroke-width="0.125" cx="50%" cy="50%" r="36%" fill="#fff" />' + '<text x="50%" y="50%" font-family="Verdana, Arial" font-size="6px" fill="#444" text-anchor="middle" ' + 'dy="2px">' + params.text + '</text>' + '</svg>',
                iconSize: [size, size],
                iconAnchor: [w / 2, h / 2],
                popupAnchor: [0, h / 2],
                tooltipAnchor: [0, h / 2]
            }, params))
        },
        point: function(params) {
            var radius = params.size || 15;
            var center = [radius / 2, radius / 2];
            return L.divIcon($wt.mergeParams({
                className: "wt-marker wt-point",
                html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">' + '<circle stroke="#444" stroke-width="0.25" cx="50%" cy="50%" r="48.5%" fill="' + params.color + '" />' + '</svg>',
                iconSize: [radius, radius],
                iconAnchor: center,
                popupAnchor: center,
                tooltipAnchor: center
            }, params))
        },
        pie: function(params) {
            var totalValue = 0;
            var radius = 5;
            var circleLength = Math.PI * (radius * 2);
            var spaceLeft = circleLength;
            for (var i = 0; i < params.data.length; i++) {
                totalValue += params.data[i].total
            }
            var xhtml = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" ' + 'style="border-radius: 50%;" stroke-width="10" fill="none" aria-hidden="true">';
            for (var c = 0; c < params.data.length; c++) {
                xhtml += '<circle cx="10" cy="10" r="4.9" fill="transparent" stroke-width="10" ' + ' stroke="' + params.data[c].color + '" stroke-dasharray="' + spaceLeft + ' 31.4" />';
                spaceLeft -= ((params.data[c].total / totalValue) * circleLength).toFixed(1)
            }
            if (params.text || totalValue) {
                xhtml += "<circle cy='50%' cx='50%' r='7' fill='#fff' fill-opacity='1' " + "stroke-opacity='0.5' stroke='#666' stroke-width='0.125' />";
                xhtml += '<text x="50%" y="50%" font-family="Verdana, Arial" font-size="4.5px" fill="#444" text-anchor="middle" ' + 'dy="1.5px">' + (params.text || totalValue) + '</text>'
            }
            xhtml += "<circle cy='50%' cx='50%' r='49%' fill='none' stroke='#666' stroke-opacity='0.5' stroke-width='0.125' />";
            var size = params.size || 70;
            var w = size;
            var h = size;
            return L.divIcon($wt.mergeParams({
                className: "wt-animate-fadin wt-marker wt-cluster-shadow",
                html: xhtml,
                iconSize: [size, size],
                iconAnchor: [w / 2, h / 2],
                popupAnchor: [0, h / 2],
                tooltipAnchor: [0, h / 2]
            }, params))
        }
    };
    map.icon = function(config) {
        var cfg = config || {};
        var params = $wt.mergeParams({
            color: "dodgerblue",
            icon: cfg.type || cfg.icon || "marker",
            text: ''
        }, cfg);
        return (icons[params.icon]) ? icons[params.icon](params) : icons.marker(params)
    }
});
L.Map.addInitHook(function() {
    var map = this;
    map.legend = function(params) {
        params = $wt.mergeParams({
            content: "",
            position: "bottomleft",
            class: ""
        }, (params || {}));
        var legend = L.control({
            position: params.position
        });
        legend.onAdd = function() {
            var div = L.DomUtil.create('div', params.class);
            div.innerHTML = params.content;
            return div
        }
        ;
        return legend
    }
});
L.Map.addInitHook(function() {
    var map = this
      , params = {}
      , id = "info_" + map.id;
    if (map.ui) {
        map.ui.info = document.createElement("div");
        map.ui.info.className = "wt-map-info";
        map.ui.info.setAttribute("role", "dialog");
        map.ui.info.setAttribute("hidden", !0);
        map.ui.info.id = id;
        map.ui.content.appendChild(map.ui.info);
        map.ui.info.content = document.createElement("div");
        map.ui.info.content.className = "wt-map-info-content";
        map.ui.info.appendChild(map.ui.info.content);
        map.ui.info.close = document.createElement("a");
        map.ui.info.close.innerHTML = "<span>Close</span>";
        map.ui.info.close.href = "#" + id;
        map.ui.info.close.className = "wt-map-info-close";
        map.ui.info.close.setAttribute("tabindex", "-1");
        map.ui.info.appendChild(map.ui.info.close);
        var close = function(event) {
            event.preventDefault();
            map.ui.info.open = !1;
            map.info.close()
        };
        $wt.on(map.ui.info.close, "click", close);
        $wt.on(map.ui.info.close, "keydown", function(event) {
            if (event.keyCode === 13) {
                close(event)
            }
        });
        var isKeyboard = !1;
        $wt.on(window, "keyup", function(e) {
            if (e.keyCode === 13) {
                isKeyboard = !0
            } else if (e.keyCode === 27 && map.ui.info.open) {
                map.info.close()
            }
        })
    }
    var resize = function() {
        if (map.ui && map.ui.info.open) {
            map.ui.classList.remove('smartphone');
            var targetContainer = map.ui.info.classList.contains('wt-info-modal') ? map.ui.info.content : map.ui.info;
            if (map.ui.offsetWidth < (targetContainer.offsetWidth + 150)) {
                map.ui.classList.add('smartphone')
            }
        }
    };
    map.info = {
        show: function(content, options) {
            map.currentFocusElement = options?.layer?._icon || document.activeElement;
            map.ui.info.className = 'wt-map-info';
            map.ui.map.removeAttribute("tabindex");
            map.ui.info.removeAttribute("hidden");
            params = options = $wt.mergeParams({
                aria: "Press ESC to close this panel.",
                class: !1,
                mode: !1,
                position: !1
            }, options || {});
            if (options.aria) {
                map.ui.info.setAttribute("aria-label", options.aria)
            }
            if (options.position) {
                map.ui.info.classList.add("wt-info-" + options.position)
            }
            if (options.mode === 'modal') {
                map.ui.info.className = "wt-map-info wt-info-modal"
            }
            if (options.class) {
                map.ui.info.classList.add(options.class)
            }
            map.ui.info.content.innerHTML = content;
            map.ui.info.open = !0;
            map.ui.classList.add('wt-map-info-show');
            setTimeout( () => map.ui.classList.add('wt-map-info-show-animate'), 0);
            if (options.mode !== 'modal') {
                map.fire("showInfo", options.layer || {})
            }
            map.fire("resize");
            map.ui.info.setAttribute("tabIndex", "0");
            map.ui.info.close.removeAttribute("tabindex");
            map.ui.info.content.scrollTo(0, 0);
            map.ui.content.scrollTo(0, 0);
            setTimeout(function() {
                $wt.aria.trap(map.ui.info);
                map.ui.content.scrollTo(0, 0);
                map.ui.info.focus()
            }, 500)
        },
        close: function() {
            map.ui.info.setAttribute("hidden", !0);
            map.ui.map.setAttribute("tabindex", 0);
            map.ui.info.open = !1;
            map.ui.info.close.setAttribute("tabindex", "-1");
            map.ui.classList.remove('wt-map-info-show');
            map.ui.classList.remove('wt-map-info-show-animate');
            map.ui.info.content.innerHTML = "";
            map.ui.info.removeAttribute("tabindex");
            map.fire("resize");
            map.fire("closeInfo");
            setTimeout( () => {
                if (map.currentFocusElement) {
                    map.currentFocusElement.focus();
                    map.currentFocusElement = !1
                }
            }
            , 50)
        }
    };
    map.on({
        resize: resize,
        showPanel: map.info.close
    })
});
L.Map.addInitHook(function() {
    let map = this;
    let open = !1;
    let currentPanel = !1;
    if (map.ui) {
        $wt.on(window, "keyup", e => {
            if (e.keyCode === 27) {
                map.panels.close()
            }
        }
        );
        map.ui.panels = {}
    }
    const click = button => {
        if (button.params && button.params.panel) {
            for (let x in map.ui.menu) {
                if (map.ui.menu[x]instanceof Element) {
                    map.ui.menu[x].classList.remove('selected')
                }
            }
            if (button.className.indexOf("selected") !== -1) {
                map.panels.close();
                map.ui.menu[button.name].setAttribute("aria-expanded", !1)
            } else {
                button.classList.add('selected');
                map.panels.show(button.name);
                map.ui.menu[button.name].setAttribute("aria-expanded", !0)
            }
        }
    }
    ;
    var add = function(button) {
        if (button.params && button.params.panel) {
            map.panels.add({
                name: button.name,
                class: button.params.panel.class || "wtpanel-" + button.name,
                collapse: !(button.params.panel.collapse === !1),
                content: button.params.panel.content,
                sticky: button.params.panel.sticky
            })
        }
    };
    var resize = function() {
        if (open) {
            var action = (map.ui.map.offsetWidth < 150) ? 'add' : 'remove';
            map.ui.classList[action]('smartphone')
        }
    };
    map.panels = {
        content: [],
        add: (config) => {
            if (!map.ui) {
                return
            }
            let name = config.name;
            let content = config.content;
            let id = "panel_" + name;
            if (!name) {
                console.log("WTINFO: map.panels.add [name] parameter is missing!");
                return
            }
            if (!map.ui.panels[name]) {
                map.ui.panels[name] = document.createElement("div");
                map.ui.panels[name].className = "wtpanel-content " + (config.class || '');
                map.ui.panels[name].params = config;
                map.ui.panels[name].id = id;
                map.ui.panels[name].sticky = config.sticky;
                map.ui.panels[name].innerHTML = `
          <div class="wtpanel-content-header"></div>
          <div class="wtpanel-content-body"></div>
          <div class="wtpanel-content-footer"></div>
        `;
                map.panels.content[name] = map.ui.panels[name];
                map.ui.panels[name].header = map.ui.panels[name].querySelector(".wtpanel-content-header");
                map.ui.panels[name].body = map.ui.panels[name].querySelector(".wtpanel-content-body");
                map.ui.panels[name].footer = map.ui.panels[name].querySelector(".wtpanel-content-footer");
                if (map.ui.menu[name] && content) {
                    map.ui.panels[name].setAttribute("hidden", !0);
                    map.ui.panels[name].setAttribute("tabindex", 0);
                    map.ui.panels[name].setAttribute("aria-labelledby", map.ui.menu[name].id);
                    map.ui.menu[name].setAttribute("aria-expanded", !1);
                    map.ui.menu[name].setAttribute("aria-controls", id);
                    $wt.after(map.ui.panels[name], map.ui.menu[name]);
                    let label = (map.ui.menu[name].getAttribute('aria-label') || '').replace(/(\.|undefined)/g, ' ');
                    map.ui.panels[name].header.innerHTML = `
            <div class="wtpanel-content-header--default">
              <b>${label}</b>
              <button type="button" class="wt-btn-close" title="Close">
                <span class="wt-icon--arrow-left wt-icon--m wt-icon--rotate-180"></span>
              </button>
            </div>
          `;
                    map.ui.panels[name].header.querySelector('button').onclick = map.panels.close
                } else {
                    map.ui.menu.appendChild(map.ui.panels[name])
                }
                map.panels.update(name, content)
            }
            if (config.collapse === !1 && map.ui.map.offsetWidth > 550) {
                setTimeout( () => map.panels.show(config.name), 340)
            }
            return map.ui.panels[name]
        }
        ,
        show: function(name) {
            if (!map.ui) {
                return
            }
            open = !0;
            var panel = map.ui.panels[name]
              , button = map.ui.menu[name];
            if (!panel) {
                console.log("WTINFO: map.panels.show, this panel [" + name + "] doesn't exist");
                return
            }
            for (var x in map.ui.menu) {
                if (map.ui.menu[x]instanceof Element) {
                    if (map.ui.menu[x].getAttribute("aria-expanded")) {
                        map.ui.menu[x].setAttribute("aria-expanded", (map.ui.menu[x] === button));
                        map.ui.menu[x].classList.remove('selected')
                    }
                }
            }
            if (button) {
                button.classList.add('selected')
            }
            map.ui.classList.add("wt-map-show-panel");
            for (var x in map.ui.panels) {
                if (map.ui.panels[x]) {
                    map.ui.panels[x].setAttribute("hidden", !0);
                    if (panel === map.ui.panels[x]) {
                        map.ui.panels[x].removeAttribute("hidden")
                    }
                }
            }
            map.fire("resize");
            map.fire("showPanel", {
                name: name
            });
            map.invalidateSize()
        },
        close: function() {
            if (!map.ui) {
                return
            }
            for (var x in map.ui.menu) {
                if (map.ui.menu[x]instanceof Element) {
                    map.ui.menu[x].classList.remove('selected');
                    if (map.ui.menu[x].getAttribute("aria-expanded")) {
                        map.ui.menu[x].setAttribute("aria-expanded", !1)
                    }
                }
            }
            for (var x in map.ui.panels) {
                if (map.ui.panels[x]) {
                    map.ui.panels[x].setAttribute("hidden", !0)
                }
            }
            if (map.ui) {
                map.ui.classList.remove('wt-map-show-panel')
            }
            open = !1;
            map.fire("resize");
            map.fire("closePanel");
            map.invalidateSize()
        },
        update: function(name, content) {
            if (!map.ui) {
                return
            }
            let cnt = map.panels.content[name];
            let menu = map.ui.menu[name];
            let label = '';
            if (menu) {
                label = menu.getAttribute('aria-label') || ''
            }
            if (cnt) {
                let targetContent = map.ui.panels[name].body;
                if (Array.isArray(content)) {
                    map.fire("buildForm", {
                        fields: content,
                        ready: function(dom) {
                            targetContent.appendChild(dom)
                        }
                    })
                } else if (typeof content === "string") {
                    targetContent.innerHTML = content
                } else if (content instanceof Element) {
                    targetContent.appendChild(content)
                }
            }
            $wt.aria(map.ui.panels[name])
        },
        remove: function(name) {
            if (!map.ui) {
                return
            }
            var P = map.ui.panels[name]
              , M = map.ui.menu[name];
            $wt.remove(P);
            $wt.remove(M);
            delete map.ui.panels[name];
            delete map.ui.menu[name];
            map.panels.close()
        }
    };
    map.on({
        showInfo: map.panels.close,
        closeInfo: () => {
            Object.values(map.ui.panels).filter(panel => panel.sticky && panel.getAttribute('hidden')).map(panel => {
                setTimeout( () => map.panels.show(panel.params.name), 0)
            }
            )
        }
        ,
        menuClick: click,
        menuAdd: add,
        resize: resize
    })
});
L.Map.addInitHook(function() {
    var map = this
      , _statusAtStart = !0
      , _statements = {}
      , _insets = Object.keys($wt.map.data.outers)
      , _queue = []
      , _family = []
      , _minimap = []
      , _running = !1
      , _config = {}
      , _country_name = {};
    if (map.ui) {
        map.ui.region = document.createElement("div");
        map.ui.region.className = "wt-map-region";
        map.ui.content.appendChild(map.ui.region);
        map.ui.region.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            map.ui.region.scrollLeft += evt.deltaY
        }
        )
    }
    var countriesList = function(countries) {
        return $wt.map.shortcutToCountriesList(countries, !0).filter(function(item) {
            return item.indexOf("-") === -1 && _insets.indexOf(item.slice(0, 2)) > -1
        })
    };
    var toggleRegion = function() {
        if (!L.DomUtil.hasClass(map.ui, 'wt-map-region-visible')) {
            map.insets.show();
            map.ui.menu.region.setAttribute("aria-expanded", !0);
            map.ui.region.removeAttribute("hidden");
            _statusAtStart = !1
        } else {
            map.insets.close();
            map.ui.menu.region.setAttribute("aria-expanded", !1);
            map.ui.region.setAttribute("hidden", !0);
            _statusAtStart = !0
        }
    };
    var synchronizeColor = function(layer) {
        var group = _family[layer.feature.properties.CNTR_ID];
        for (var cntr_id in group) {
            if (group[cntr_id].config.synchro) {
                group[cntr_id].countries.eachLayer(function(lay) {
                    layer.options.color = "#444";
                    layer.options.opacity = 0.5;
                    layer.options.weight = 1;
                    lay.setStyle(layer.options)
                })
            }
        }
    };
    var add = function(config) {
        var countries = config.countries;
        var options = config.options;
        if (!options.insets || (options.smart && !config.force)) {
            return
        }
        _config = $wt.mergeParams(_config, options);
        var request = countriesList(countries);
        if (request.length) {
            map.fire("countriesRequest", {
                countries: request,
                level: 0,
                scale: "03",
                year: 2021,
                callback: function(json) {
                    process(json, config)
                }
            })
        }
    };
    const restore = () => {
        if (_statusAtStart) {
            return map.insets.close()
        }
        map.insets.show()
    }
    ;
    var remove = function(config) {
        var options = config.options;
        if (!options.insets || (options.smart && !config.force)) {
            return
        }
        var countries = countriesList(config.countries);
        countries.forEach(function(cntr_id) {
            if (_family[cntr_id]) {
                _family[cntr_id].forEach(function(minimap) {
                    if (_minimap[minimap.id]) {
                        $wt.remove(_minimap[minimap.id]._container.parentNode);
                        delete _minimap[minimap.id]
                    }
                })
            }
        });
        if (map.ui.region.querySelectorAll('.wt-insets').length === 0 && map.ui.menu.region) {
            map.ui.menu.region.style.display = "none"
        }
    };
    var process = function(json, config) {
        json = Array.isArray(json) ? json[0] : json;
        for (var X in json.features) {
            var CNTR_ID = json.features[X].properties.CNTR_ID;
            for (var Z in $wt.map.data.outers[CNTR_ID]) {
                var CFG = $wt.map.data.outers[CNTR_ID][Z];
                map.insets.add({
                    PARENT: (config || {}).layer,
                    geojson: json.features[X],
                    country: Z,
                    CNTR_ID: CNTR_ID,
                    zoom: CFG.zoom,
                    toZoom: CFG.toZoom,
                    coords: CFG.coord,
                    style: $wt.mergeParams((_config.style || {}), {
                        weight: 1,
                        opacity: 0.5
                    }),
                    synchro: _config.synchro,
                    title: CFG.label,
                    width: CFG.width || 120,
                    click: function(feature) {
                        var useDefault = !0;
                        if (_config.click) {
                            var userClick = window[_config.click] || _config.click;
                            if (typeof userClick === "function") {
                                useDefault = userClick(feature)
                            }
                        }
                        if (useDefault) {
                            map.setView(this.coords, this.toZoom || this.zoom)
                        }
                    }
                })
            }
        }
    };
    var render = function() {
        var params = _queue[0];
        if (!params) {
            _statusAtStart = !!(_config.collapse || _config.insets?.collapse);
            _statements = {
                zoom: map.getZoom(),
                center: map.getCenter()
            };
            if (_statusAtStart) {
                return map.insets.close()
            }
            return map.insets.show()
        }
        var color = !1;
        var action = function(layer, mode, CNTR_ID) {
            if (!layer) {
                return
            }
            var check = function(layz) {
                if (layz.feature && layz.feature.properties.CNTR_ID === CNTR_ID) {
                    if (mode) {
                        layz.fire(mode);
                        if ((_config.label || {}).mode === 'hover' || _config.label === !0 || layz._tooltip) {
                            layz.closeTooltip()
                        }
                    }
                    if (!layz.options.isBorder) {
                        color = layz.options
                    }
                }
            };
            if (layer.eachLayer) {
                layer.eachLayer(function(lay) {
                    if (lay.eachLayer) {
                        action(lay, mode, CNTR_ID)
                    }
                    check(lay)
                })
            } else {
                check(layer)
            }
        };
        action(params.PARENT, !1, params.country.slice(0, 2));
        var next = function() {
            _running = !1;
            _queue = _queue.slice(1, _queue.length);
            render()
        };
        if (_minimap[params.country]) {
            if (color) {
                _minimap[params.country].countries.eachLayer(function(lay) {
                    color.weight = 1;
                    color.color = "#444";
                    lay.setStyle(color)
                })
            }
            next();
            return
        }
        _running = !0;
        var inset = document.createElement("div");
        inset.innerHTML = '<div class="wt-insets-map" aria-hidden="true"></div>' + '<button class="wt-insets-mask"><span class="wt-insets-label">-</span></button>';
        inset.className = "wt-insets";
        inset.map = inset.querySelector(".wt-insets-map");
        inset.label = inset.querySelector(".wt-insets-label");
        inset.mask = inset.querySelector(".wt-insets-mask");
        map.ui.region.appendChild(inset);
        if (params.width) {
            inset.style.minWidth = params.width + "px"
        }
        var minimap = _minimap[params.country] = new L.map(inset.map,{
            isInset: !0,
            center: [47, 12],
            zoom: 1,
            width: params.width || 120,
            height: params.height || 100,
            attributionControl: !1,
            dragging: !1,
            zoomAnimation: !1,
            touchZoom: !1,
            scrollWheelZoom: !1,
            doubleClickZoom: !1,
            background: !1
        });
        minimap._ui = inset;
        minimap._container.removeAttribute('tabindex');
        minimap.id = params.country;
        minimap._ui.classList.add("_" + params.country);
        minimap._ui.classList.add("unselected");
        params.synchro = !!!params.synchro;
        params.onEachFeature = function(feature, layer) {
            if (color) {
                var style = $wt.mergeParams(color, {
                    weight: 1,
                    color: "#444",
                    opacity: 0.5
                });
                layer.setStyle(style)
            }
            if (typeof params.click === "function") {
                layer.on({
                    click: function() {
                        params.click(layer.feature)
                    }
                })
            }
            if (feature.properties.CNTR_NAME) {
                _country_name[feature.properties.CNTR_ID] = feature.properties.CNTR_NAME
            }
            if (!params.title) {
                $wt.remove(minimap._ui.label)
            } else {
                let label = $wt.label("map", params.title, map.getUEC("lang") || document.lang);
                if (label === 'UNKNOWN LABEL') {
                    label = _country_name[params.CNTR_ID]
                }
                if (!label) {
                    label = params.title
                }
                minimap._ui.label.innerHTML = label;
                inset.mask.setAttribute("aria-label", "Jump to " + label + ".")
            }
            $wt.defer(function() {
                minimap.fitBounds(minimap.countries.getBounds(), !1);
                if (params.zoom) {
                    minimap.setZoom(params.zoom)
                }
                if (params.coords) {
                    minimap.setView(params.coords)
                }
                next()
            }, 50)
        }
        ;
        if (params.geojson && !params.PARENT) {
            minimap.countries = L.geoJSON(params.geojson, params).addTo(minimap)
        } else {
            minimap.countries = map.countries([params.country], params).addTo(minimap)
        }
        minimap.config = params;
        var ID = params.CNTR_ID || params.country;
        if (!_family[ID]) {
            _family[ID] = []
        }
        _family[ID].push(minimap);
        var MASK = minimap._ui.mask;
        MASK.CNTR_ID = ID;
        MASK.PARENT = params.PARENT;
        MASK.onmouseover = function() {
            action(this.PARENT, "mouseover", this.CNTR_ID)
        }
        ;
        MASK.onmouseout = function() {
            action(this.PARENT, "mouseout", this.CNTR_ID)
        }
        ;
        $wt.on(MASK, "click", function() {
            for (var X in minimap.countries._layers) {
                minimap.countries._layers[X].fire("click");
                break
            }
        })
    };
    const refresh = () => {
        if (!_statements.center) {
            _statements = {
                zoom: map.getZoom(),
                center: map.getCenter()
            }
        }
        map.setView(_statements.center, _statements.zoom)
    }
    ;
    map.insets = {
        add: function(config) {
            if (!map.ui.menu.region) {
                map.menu.add({
                    name: "region",
                    class: "region",
                    click: toggleRegion
                });
                map.ui.menu.region.setAttribute("aria-expanded", !1);
                map.ui.menu.region.setAttribute("aria-label", "Show outer most region")
            }
            map.ui.menu.region.removeAttribute("style");
            _queue.push(config);
            $wt.defer(render, 500)
        },
        show: function(id) {
            map.ui.classList.add('wt-map-region-visible');
            map.setActiveArea({
                bottom: "104px"
            });
            refresh();
            setTimeout( () => {
                Object.keys(_minimap).map(key => {
                    _minimap[key].invalidateSize()
                }
                )
            }
            , 0)
        },
        hide: function() {
            map.insets.close()
        },
        close: function() {
            map.ui.classList.remove('wt-map-region-visible');
            map.setActiveArea({
                bottom: 0
            });
            refresh()
        },
        remove: function(id) {
            if (_minimap[id]) {
                $wt.remove(_minimap[id]._container.parentNode);
                delete _minimap[id]
            }
            if (map.ui.region.querySelectorAll('.wt-insets').length === 0) {
                map.ui.menu.region.style.display = "none"
            }
        },
        style: function(id, options) {
            _minimap[id].eachLayer(function(lay) {
                if (lay.setStyle) {
                    lay.setStyle(options)
                }
            })
        }
    };
    map.on({
        moveend: () => {
            _statements = {
                zoom: map.getZoom(),
                center: map.getCenter()
            }
        }
        ,
        showInfo: map.insets.close,
        showPanel: map.insets.close,
        closePanel: restore,
        closeInfo: restore,
        insetsAdd: add,
        insetsRemove: remove,
        hoverCountries: synchronizeColor,
        outCountries: synchronizeColor
    })
});
L.Map.addInitHook(function() {
    var map = this;
    var backgrounds = $wt.map.data.background;
    var cache = [];
    map.createPane('overlayersPane');
    map.getPane('overlayersPane').style.zIndex = 250;
    map.getPane("overlayersPane").setAttribute("aria-hidden", !0);
    map.createPane('labelsPane');
    map.getPane('labelsPane').style.zIndex = 550;
    map.getPane("labelsPane").setAttribute("aria-hidden", !0);
    map.getPane("tilePane").setAttribute("aria-hidden", !0);
    var tileLayer = function(tiles, options) {
        var language = map.getUEC("lang", $wt.lang('zz'));
        var name = (tiles === !1) ? !1 : (tiles || "osmec");
        if (name.indexOf(':') !== -1) {
            var tileConf = name.split(':');
            name = tileConf[0];
            language = tileConf[1]
        }
        var config = backgrounds[name];
        if (!config) {
            if (name) {
                console.log("WTERROR: Unknown layer '" + name + "'. Please use supported backgrounds.")
            }
            return new L.featureGroup()
        }
        options = $wt.mergeParams(config.options, options || map.options || {});
        options.name = name;
        var url = config.url;
        if (["bg", "es", "cs", "da", "de", "et", "el", "en", "fr", "ga", "hr", "it", "lv", "lt", "hu", "mt", "nl", "pl", "pt", "ro", "sk", "sl", "fi", "sv"].indexOf(language) !== -1) {
            url = url.replace("{language}", language.toUpperCase())
        } else {
            url = url.replace("{language}", "")
        }
        url = url.replace("{projection}", "EPSG" + (map.proj || '3857'));
        if (config.options.type === 'overlayers') {
            options.pane = "overlayersPane"
        } else if (config.options.type === 'labels') {
            options.pane = "labelsPane"
        }
        if (typeof config.options.maxZoom === 'object') {
            options.maxZoom = config.options.maxZoom[options.epsg ? options.epsg : '3857']
        }
        options.noWrap = !0;
        var layer = new L.tileLayer(url,options);
        layer.on({
            add: function(e) {
                var opt = e.target.options;
                if (opt.type === 'tiles') {
                    if (map.currentTiles && map.currentTiles !== layer) {
                        map.removeLayer(map.currentTiles)
                    }
                    map.currentTiles = layer
                }
            }
        });
        cache[options.name] = layer;
        return layer
    };
    map.background = function(tiles, options) {
        if (!tiles) {
            return cache
        }
        if (Array.isArray(tiles)) {
            var group = new L.featureGroup();
            for (var i = 0; i < tiles.length; i++) {
                tileLayer(tiles[i], options).addTo(group)
            }
            return group
        } else {
            return tileLayer(tiles, options)
        }
    }
    ;
    map.background.remove = function(name) {
        if (!name) {
            for (var key in cache) {
                map.removeLayer(cache[key]);
                delete cache[key]
            }
        } else if (Array.isArray(name)) {
            name.forEach(function(item) {
                if (cache[item]) {
                    map.removeLayer(cache[item]);
                    delete cache[item]
                }
            })
        } else if (typeof name === 'string' && cache[name]) {
            map.removeLayer(cache[name]);
            delete cache[name]
        }
    }
});
L.Map.addInitHook(function() {
    var map = this;
    var lang = map.getUEC("lang", null);
    var eu = $wt.label("map", "c", lang);
    var fao = $wt.label("map", "b", lang);
    var both = $wt.label("map", "a", lang);
    var footer = !1;
    if (map.ui) {
        map.ui.footer = document.createElement("div");
        map.ui.footer.className = "wtfooter";
        map.ui.appendChild(map.ui.footer);
        map.ui.attribution = document.createElement("div");
        map.ui.attribution.className = "wt-map-attribution unselected";
        map.ui.footer.appendChild(map.ui.attribution)
    }
    var cache = [];
    var content = "";
    var update = function(params) {
        if (!params && !map.ui.attribution) {
            return
        }
        if (params.uec && !footer) {
            footer = params.uec.target
        }
        if (params.content) {
            content = params.content
        }
        if (params.remove) {
            cache = cache.filter(function(cntr) {
                return params.remove.indexOf(cntr) === -1
            })
        }
        if (params.countries) {
            params.countries.forEach(function(cntr) {
                if (cache.indexOf(cntr) === -1) {
                    cache.push(cntr)
                }
            })
        }
        map.ui.attribution.innerHTML = ['<a class="wt-link" title="A JS library of EU" href="https://webtools.europa.eu/documentation">Webtools</a>', '<a class="wt-link" title="GISCO is responsible for meeting the European Commission\'s geographical information"  href="https://ec.europa.eu/eurostat/web/gisco/overview">Â© EC-GISCO</a>', content.replace(" " + both, "").replace(" " + eu, "").replace(" " + fao, "")].join(" + ");
        var isEU = isFAO = [];
        cache.forEach(function(name) {
            if ($wt.map.data.eu27.indexOf(name.slice(0, 2)) > -1) {
                isEU.push(name)
            } else {
                isFAO.push(name)
            }
        });
        if (isEU.length && isFAO.length) {
            map.ui.attribution.innerHTML += " " + both
        } else if (isEU.length) {
            map.ui.attribution.innerHTML += " " + eu
        } else if (isFAO.length) {
            map.ui.attribution.innerHTML += " " + fao
        }
        [].forEach.call(map.ui.attribution.querySelectorAll("svg"), function(elm) {
            $wt.remove(elm)
        });
        if (footer) {
            var links = map.ui.attribution.querySelectorAll('a');
            for (var i in links) {
                if (links.hasOwnProperty(i)) {
                    links[i].setAttribute('target', footer)
                }
            }
        }
    };
    map.on({
        attributionUpdate: update,
        footerUEC: update
    })
});
L.Control.Attribution.include({
    _originalUpdate: L.Control.Attribution.prototype._update,
    _update: function() {
        var self = this
          , map = self._map;
        L.Control.Attribution.prototype._originalUpdate.call(self);
        map.fire("attributionUpdate", {
            content: self._container.innerHTML
        });
        self._container.innerHTML = " "
    }
});
L.Map.addInitHook(function() {
    var map = this;
    map.more = {
        add: function(config) {
            map.menu.add({
                name: "more",
                tooltip: config.tooltip || $wt.label("map", "more", map.getUEC("lang", null)),
                class: config.class || "more",
                click: config.click,
                panel: {
                    collapse: config.collapse,
                    content: config.content || ' '
                }
            })
        }
    }
});
L.Map.addInitHook(function() {
    var map = this;
    map.layers = {
        add: function(config) {
            if (config && Array.isArray(config.content) && config.content.length > 0) {
                map.menu.add({
                    name: "layers",
                    tooltip: config.tooltip || $wt.label("map", "layers", map.getUEC("lang", null)),
                    class: config.class || "layer",
                    after: config.after || "home",
                    click: config.click || !1,
                    panel: {
                        collapse: config.collapse,
                        content: config.content || ' '
                    }
                })
            }
        }
    }
});
L.Map.addInitHook(function() {
    let map = this;
    let lang = map.getUEC("lang", null);
    let routingService = "https://gisco-services.ec.europa.eu/route/v1";
    let geocodingService = "https://gisco-services.ec.europa.eu/api/";
    let reverseGeocodingService = "https://gisco-services.ec.europa.eu/reverse/";
    let euAreaGeojson = L.geoJSON($wt.map.data.euArea);
    let dependencies = [$wt.root + '/libs/leaflet-control-geocoder/Control.Geocoder.min.js', $wt.root + '/libs/leaflet-routing-machine-webtools/webtools.routing.js?t=e22da071', $wt.root + '/libs/leaflet-pip/leaflet-pip.min.js'];
    function Routing() {
        let config = {
            profile: "car",
            start: {
                coordinates: [null, null],
                icon: {
                    type: "slim",
                    size: 30,
                    color: "green"
                }
            },
            dest: {
                coordinates: [null, null],
                icon: {
                    type: "slim",
                    size: 30,
                    color: "red"
                }
            },
            via: {
                coordinates: [null, null],
                icon: {
                    type: "slim",
                    size: 30,
                    color: "gold"
                }
            },
            straightline: !1,
            routes: !0,
            selected: !1,
            contextmenu: !0,
            fitSelectedRoutes: !0,
            cancel: {
                label: $wt.label("map", "cancelNavigation", lang),
                emit: !1
            },
            tooltip: $wt.label("map", "routing", lang),
            position: "print",
            class: "routing",
            description: $wt.label("map", "routing_hint", lang)
        };
        let ready = !1;
        let traced = !1;
        let reCalcRoute = !1;
        let routingControl = null;
        let line = null;
        let lineOptions = {
            color: "#384C81",
            stroke: !0,
            opacity: 0.6,
            dashArray: "5, 10"
        };
        let hideRouting = {
            styles: [{
                opacity: 0
            }, {
                opacity: 0
            }, {
                opacity: 0
            }],
            missingRouteStyles: [{
                opacity: 0
            }, {
                opacity: 0
            }, {
                opacity: 0
            }]
        };
        let defaultRoutingStyle = {
            styles: [{
                color: "black",
                opacity: 0.15,
                weight: 9
            }, {
                color: "white",
                opacity: 0.8,
                weight: 6
            }, {
                color: "blue",
                opacity: 0.5,
                weight: 2
            }]
        };
        const fieldSearchInit = (field, wp) => {
            map.fire('initRoutingFieldLocationSearch', {
                field: field,
                params: config,
                select: row => {
                    field.value = `${row.name || row.city} ${row.postcode || ''} ${row.city || row.name}`;
                    row.center = {
                        lat: row.coordinates[1],
                        lng: row.coordinates[0]
                    };
                    wp.name = field.value;
                    wp.latLng = row.center;
                    routingControl.spliceWaypoints(Number(field.getAttribute('data-index')), 1, wp)
                }
            })
        }
        ;
        const isNumber = nr => typeof nr === 'number';
        const loadDependenciesAndInit = function() {
            if (traced) {
                return
            }
            traced = !0;
            if (map._container.params?.contact?.address) {
                let address = map._container.params.contact.address;
                let selector = document.querySelectorAll(address.include);
                if ((Array.isArray(address) && address.length > 1) || selector.length > 1) {
                    return this.remove()
                }
                config.dest.coordinates = findCmapMarker()
            }
            bindContextMenu();
            if (window.L.Routing && window.leafletPip) {
                return initRoutingControl()
            }
            $wt.load(dependencies);
            $wt.waitUntil( () => L.Routing && window.leafletPip).then(initRoutingControl)
        };
        const findCmapMarker = () => {
            let latLng = [];
            map.eachLayer(layer => {
                if (layer.getLatLng) {
                    latLng[0] = layer.getLatLng().lat;
                    latLng[1] = layer.getLatLng().lng
                }
            }
            );
            return latLng
        }
        ;
        const bindContextMenu = () => {
            if (!config.contextmenu) {
                return
            }
            map.on("contextmenu", evt => {
                let container = L.DomUtil.create("div");
                let startBtn = createButton($wt.label("map", "directions_from", lang), container, "start");
                let destBtn = createButton($wt.label("map", "directions_to", lang), container, "dest");
                startBtn.onclick = () => drawPoint(evt, "start");
                destBtn.onclick = () => drawPoint(evt, "dest");
                L.popup().setContent(container).setLatLng(evt.latlng).openOn(map)
            }
            )
        }
        ;
        const createButton = (label, container, name) => {
            let btn = L.DomUtil.create("button", "", container);
            btn.setAttribute("type", "button");
            btn.innerHTML = label;
            btn.className = "btn_geocoder_" + name;
            return btn
        }
        ;
        const process = () => {
            let routingPanel;
            let routingContainer;
            $wt.waitUntil( () => {
                routingPanel = map.ui.querySelector("#leaflet-wt-anchor-routing");
                routingContainer = map.ui.querySelector(".leaflet-routing-container");
                return routingPanel && routingContainer
            }
            ).then( () => {
                $wt.after(routingContainer, routingPanel);
                update(config.cancel)
            }
            ).catch(console.error)
        }
        ;
        const initRoutingControl = function() {
            let coordinates = map.getCenter();
            let language = map.getUEC("lang", null) || document.lang;
            let lang = (['de', 'it', 'fr'].indexOf(language) !== -1) ? language : "en";
            let directionLanguage = (['es', 'fr', 'en', 'de', 'nl', 'it', 'pl', 'sv'].indexOf(language) !== -1) ? language : "en";
            let routingControlOptions = {
                autocomplete: fieldSearchInit,
                language: directionLanguage,
                serviceUrl: routingService,
                profile: config.profile,
                waypoints: [L.latLng(config.start.coordinates[0], config.start.coordinates[1]), L.latLng(config.dest.coordinates[0], config.dest.coordinates[1])],
                showAlternatives: !0,
                fitSelectedRoutes: config.fitSelectedRoutes,
                geocoder: L.Control.Geocoder.photon({
                    serviceUrl: geocodingService,
                    reverseUrl: reverseGeocodingService,
                    geocodingQueryParams: {
                        lang: lang,
                        lat: coordinates.lat,
                        lon: coordinates.lng,
                        location_bias_scale: 0.2
                    }
                }),
                routeWhileDragging: !1,
                autoRoute: !0,
                altLineOptions: defaultRoutingStyle,
                pointMarkerStyle: {
                    radius: 6,
                    color: '#03f',
                    fillColor: 'white',
                    opacity: 1,
                    fillOpacity: 0.7
                },
                pointMarkerOnFocusStyle: {
                    radius: 6,
                    color: '#03f',
                    fillColor: '#ffd617',
                    opacity: 1,
                    fillOpacity: 1
                },
                geocoderClass: (i, n) => {
                    return (i === 0) ? "startInput" : ((i < n - 1) ? "viaInput" : "endInput")
                }
                ,
                geocoderPlaceholder: (i, n) => {
                    return i === 0 ? $wt.label("map", "start", lang) : i < n - 1 ? L.Util.template($wt.label("map", "via", lang), {
                        viaNumber: i
                    }) : $wt.label("map", "end", lang)
                }
                ,
                createMarker: (i, wp, n) => {
                    let icon = config.start.icon;
                    if (i >= 1) {
                        icon = config.dest.icon
                    }
                    if (i && i < n - 1) {
                        icon = config.via.icon
                    }
                    let marker = L.marker(wp.latLng, {
                        icon: map.icon(icon),
                        draggable: !0
                    });
                    marker.on("add", () => {
                        marker._icon.removeAttribute('role');
                        if (wp.name) {
                            marker._icon.setAttribute('title', wp.name)
                        }
                    }
                    );
                    marker.on("dragend", () => setTimeout( () => {
                        if (wp.name) {
                            marker._icon.setAttribute('title', wp.name)
                        }
                    }
                    , 250));
                    return marker
                }
                ,
                itineraryBuilder: {
                    createContainer: () => L.DomUtil.create('div', 'wt-route--list-container'),
                    createStepsContainer: () => L.DomUtil.create('div', 'wt-route--list-rows'),
                    createStep: function(text, distance, icon, steps) {
                        let row = L.DomUtil.create('div', 'wt-routing-direction', steps);
                        let div = L.DomUtil.create('div', 'wt-routing-icon', row);
                        L.DomUtil.create('span', 'leaflet-routing-icon leaflet-routing-icon-' + icon, div);
                        div = L.DomUtil.create('div', 'wt-routing-text', row);
                        div.appendChild(document.createTextNode(text));
                        div.setAttribute('aria-hidden', !0);
                        div = L.DomUtil.create('div', 'wt-routing-distance', row);
                        div.appendChild(document.createTextNode(distance));
                        div.setAttribute('aria-hidden', !0);
                        let routesIndex = map.ui.querySelector('.leaflet-routing-alternatives-container').childNodes.length;
                        let routes = routingControl._routes[routesIndex];
                        let instr = routes.instructions[steps.childNodes.length - 1];
                        let ariaLabel = (icon === 'arrive' || icon === 'depart') ? text : ['continue', 'bear-right', 'bear-left'].indexOf(icon) !== -1 ? "For " + distance + " " + text.toLowerCase() : "In " + distance + " " + text.toLowerCase();
                        addAccessibility(row, ariaLabel, 'button');
                        if (typeof instr.index === 'number') {
                            this._additionalRowListeners(row, routes.coordinates[instr.index])
                        }
                        return row
                    },
                    _additionalRowListeners: function(row, coordinate) {
                        L.DomEvent.addListener(row, 'focus', function() {
                            routingControl._markerOnFocus = L.circleMarker(coordinate, routingControl.options.pointMarkerOnFocusStyle).addTo(routingControl._map)
                        }, routingControl);
                        L.DomEvent.addListener(row, 'focusout', function() {
                            if (routingControl._markerOnFocus) {
                                routingControl._map.removeLayer(routingControl._markerOnFocus);
                                delete routingControl._markerOnFocus
                            }
                        }, routingControl);
                        L.DomEvent.addListener(row, 'keyup', function(e) {
                            if (e.keyCode === 13) {
                                map.panTo(coordinate);
                                L.DomEvent.stopPropagation(e)
                            }
                            if (e.keyCode === 107) {
                                map.zoomIn();
                                L.DomEvent.stopPropagation(e)
                            }
                            if (e.keyCode === 109) {
                                map.zoomOut();
                                L.DomEvent.stopPropagation(e)
                            }
                        }, routingControl)
                    }
                }
            };
            routingControl = L.Routing.control(routingControlOptions).addTo(map);
            if (areStartAndDestSet()) {
                var isInsideEu = !isOutsideEu(config.start.coordinates[1], config.start.coordinates[0], config.dest.coordinates[1], config.dest.coordinates[0]);
                if (!config.routes || !isInsideEu) {
                    setRouteVisibility(!1)
                }
                drawStraightLine(!isInsideEu)
            }
            routingControl.on("waypointschanged", function(e) {
                let waypoints = e.waypoints;
                if (waypoints[0].latLng) {
                    config.start.coordinates = [waypoints[0].latLng.lat, waypoints[0].latLng.lng]
                } else if (waypoints[0].latLng === null) {
                    config.start.coordinates = [null, null]
                }
                if (waypoints[1].latLng) {
                    config.dest.coordinates = [waypoints[1].latLng.lat, waypoints[1].latLng.lng]
                } else if (waypoints[1].latLng === null) {
                    config.dest.coordinates = [null, null]
                }
                let isInsideEu = !isOutsideEu(config.start.coordinates[1], config.start.coordinates[0], config.dest.coordinates[1], config.dest.coordinates[0]);
                drawStraightLine(!isInsideEu);
                reCalcRoute = !0;
                setTimeout( () => {
                    if (!routingControl) {
                        return
                    }
                    calculateRoute(isInsideEu);
                    update()
                }
                , 10)
            });
            routingControl.on("routingstart", function(e) {
                let coordinates = e.waypoints;
                while (coordinates[0].latLng.lng < -180) {
                    coordinates[0].latLng.lng = (coordinates[0].latLng.lng + 360) % 360
                }
                while (coordinates[0].latLng.lng > 180) {
                    coordinates[0].latLng.lng = (coordinates[0].latLng.lng - 360) % 360
                }
                while (coordinates[1].latLng.lng < -180) {
                    coordinates[1].latLng.lng = (coordinates[1].latLng.lng + 360) % 360
                }
                while (coordinates[1].latLng.lng > 180) {
                    coordinates[1].latLng.lng = (coordinates[1].latLng.lng - 360) % 360
                }
                config.start.coordinates = [coordinates[0].latLng.lat, coordinates[0].latLng.lng];
                config.dest.coordinates = [coordinates[1].latLng.lat, coordinates[1].latLng.lng]
            });
            routingControl.on("routesfound", function(e) {
                this.options.summaryTemplate = (e.routes && e.routes.length > 1) ? "<h2 class='wt-head'>" + $wt.label("map", "via", lang) + "&nbsp;{name}</h2><h3 class='wt-head'>{distance},&nbsp;{time}</h3>" : "<h3 class='wt-head'>{distance},&nbsp;{time}</h3>";
                if (e.routes.length === 1) {
                    if (isFalseRoute(e.routes[0])) {
                        setTimeout( () => {
                            let bounds = (line) ? line.getBounds() : [...e.routes[0].waypoints].map(ref => {
                                return [ref.latLng.lat, ref.latLng.lng]
                            }
                            );
                            map.fitBounds(bounds, {
                                animate: !0,
                                padding: [20, 20]
                            })
                        }
                        , 400)
                    }
                }
                setTimeout( () => map.loading.hide(), 3000)
            });
            routingControl.on("routingerror", function(e) {
                var isInsideEu = !isOutsideEu(config.dest.coordinates[1], config.dest.coordinates[0], config.start.coordinates[1], config.start.coordinates[0]);
                if (config.routes) {
                    if (isInsideEu) {
                        var center = map.getCenter();
                        var popupError = L.popup().setLatLng([center.lat, center.lng]).setContent($wt.label("map", "impossible_route", lang)).openOn(map);
                        setTimeout(function() {
                            map.removeLayer(popupError)
                        }, 5000);
                        removeStraightLine()
                    } else {
                        setRouteVisibility(!1, !1)
                    }
                }
                if (!areCoordinatesInBoundary) {
                    alert("WTERROR: Invalid coordinate value.")
                }
            });
            $wt.waitUntil( () => map.ui.querySelector('.leaflet-routing-geocoders')).then( () => {
                process();
                if (ready) {
                    ready(routingControl)
                }
            }
            )
        };
        const bindRemoveWaypoint = function() {
            setTimeout(function() {
                var removeWaypoints = map.ui.querySelectorAll(".leaflet-routing-remove-waypoint");
                if (!!removeWaypoints.length) {
                    [].forEach.call(removeWaypoints, function(el) {
                        el.addEventListener("keyup", function(e) {
                            if (e.keyCode === 13) {
                                el.click()
                            }
                        });
                        el.addEventListener("click", function() {
                            removeStraightLine()
                        })
                    })
                }
            }, 100)
        };
        const addGeolocateMe = function(origin, geoloc, routingElem) {
            $wt.on(geoloc, "click", function() {
                map.loading.show();
                map.location.get(function(coordinates) {
                    config[origin].coordinates = [coordinates.latitude, coordinates.longitude];
                    routingControl.setWaypoints([L.latLng(config.start.coordinates[0], config.start.coordinates[1]), L.latLng(config.dest.coordinates[0], config.dest.coordinates[1])])
                });
                map.loading.hide()
            });
            $wt.before(geoloc, routingElem.firstChild);
            geoloc.addEventListener("keyup", function(e) {
                if (e.keyCode === 13) {
                    geoloc.click()
                }
            })
        };
        const update = (cancel) => {
            createGeolocSpan();
            improveAccessibility();
            bindRemoveWaypoint();
            if (cancel) {
                createCancelRoutingButton()
            }
        }
        ;
        const createGeolocSpan = function() {
            let geolocStart = document.createElement("span");
            let geolocDest = document.createElement("span");
            addAccessibility(geolocStart, 'Geolocate me as start point', 'button');
            addAccessibility(geolocDest, 'Geolocate me as destination point', 'button');
            geolocStart.innerHTML = geolocDest.innerHTML = `<span class="wt-icon--crosshair wt-icon--m"></span>`;
            let routingContainer = map.ui.querySelector(".leaflet-routing-container");
            geolocStart.className = geolocDest.className = "geolocateRouting";
            if (routingContainer) {
                let routingCtrlFc = routingContainer.firstChild;
                let firstCh = routingCtrlFc.querySelector(".leaflet-routing-geocoder");
                let index = routingCtrlFc.getElementsByClassName("leaflet-routing-geocoder").length - 1 >= 0 ? routingCtrlFc.getElementsByClassName("leaflet-routing-geocoder").length - 1 : 1;
                let secondCh = routingCtrlFc.getElementsByClassName("leaflet-routing-geocoder")[index];
                if (!firstCh.querySelectorAll(".geolocateRouting").length) {
                    addGeolocateMe('start', geolocStart, firstCh)
                }
                if (!secondCh.querySelectorAll(".geolocateRouting").length) {
                    addGeolocateMe('dest', geolocDest, secondCh)
                }
            }
        };
        const improveAccessibility = () => {
            [...map.ui.querySelectorAll(".wt-route--legend")].forEach(elm => elm.remove());
            [...map.ui.querySelectorAll(".leaflet-routing-remove-waypoint")].forEach(elm => {
                addAccessibility(elm, 'Remove ' + getGeocoderType(elm) + ' waypoint', 'button');
                elm.innerHTML = `<span class="wt-icon--close wt-icon--s"></span>`
            }
            );
            [...map.ui.querySelectorAll(".leaflet-routing-geocoder input")].forEach(elm => {
                let geoType = getGeocoderType(elm);
                elm.setAttribute('aria-label', 'Enter ' + geoType + ' text');
                let legend = document.createElement('div');
                legend.className = "wt-route--legend";
                legend.innerHTML = `<span class="wt-icon--location-filled wt-icon--m" style="color: ${config[geoType].icon.color}"></span>`;
                $wt.before(legend, elm.parentNode)
            }
            )
        }
        ;
        const getGeocoderType = (el) => {
            return el.parentNode.querySelector('.startInput') ? 'start' : el.parentNode.querySelector('.endInput') ? 'dest' : 'via'
        }
        ;
        const addAccessibility = (elem, ariaLabel, type) => {
            if (type === 'button') {
                elem.setAttribute('role', 'button')
            }
            elem.setAttribute('tabindex', '0');
            elem.setAttribute('aria-label', ariaLabel)
        }
        ;
        const drawPoint = (evt, origin) => {
            config[origin].coordinates = [evt.latlng.lat, evt.latlng.lng];
            let index = (origin === "start") ? 0 : routingControl.getWaypoints().length - 1;
            routingControl.spliceWaypoints(index, 1, evt.latlng);
            map.closePopup()
        }
        ;
        const isOutsideEu = function(aPointLng, aPointLat, bPointLng, bPointLat) {
            var pointA = leafletPip.pointInLayer([aPointLng, aPointLat], euAreaGeojson);
            var pointB = leafletPip.pointInLayer([bPointLng, bPointLat], euAreaGeojson);
            return (pointA.length < 1 && pointB.length < 1)
        };
        const drawStraightLine = function(forceStraightLine) {
            var isStraightline = config.straightline || forceStraightLine;
            var arePointsSet = areStartAndDestSet();
            removeStraightLine();
            if (isStraightline && arePointsSet) {
                drawLine()
            }
        };
        const areStartAndDestSet = function() {
            return isNumber(config.start.coordinates[0]) && isNumber(config.start.coordinates[1]) && isNumber(config.dest.coordinates[0]) && isNumber(config.dest.coordinates[1])
        };
        const removeStraightLine = function() {
            if (line) {
                map.removeLayer(line);
                map.ui.querySelector("#leaflet-wt-straightline-container").innerHTML = "";
                line = null
            }
        };
        const drawLine = function() {
            var pointA = L.latLng(config.start.coordinates[0], config.start.coordinates[1]);
            var pointB = L.latLng(config.dest.coordinates[0], config.dest.coordinates[1]);
            var points = [pointA, pointB];
            var bearing = calculateBearing(pointA, pointB);
            var display = pointA.lng < pointB.lng ? bearing >= 0 : bearing < 0;
            if (display && areCoordinatesInBoundary) {
                line = L.polyline(points, lineOptions);
                line.addTo(map);
                map.fitBounds(line.getBounds(), {
                    animate: !0,
                    padding: [20, 20]
                })
            }
            var distance = Math.round(pointA.distanceTo(pointB) / 10) / 100;
            var straightLineContainer = map.ui.querySelector("#leaflet-wt-straightline-container");
            if (!straightLineContainer) {
                straightLineContainer = document.createElement("div");
                straightLineContainer.id = "leaflet-wt-straightline-container";
                var leafletWtAnchorRouting = map.ui.querySelectorAll(".leaflet-routing-geocoders");
                if (leafletWtAnchorRouting[0]) {
                    $wt.after(straightLineContainer, leafletWtAnchorRouting[0])
                }
            }
            straightLineContainer.innerHTML = $wt.template(['<h3 class="wt-head">', '<span class="wt-distance-legend"></span>{straightLine}:&nbsp;', '<span class="wt-distance">{distance} {km}</span>', '</h3>'].join(''), {
                straightLine: $wt.label("map", "straight_line_distance", lang),
                distance: distance,
                km: $wt.label("map", "km", lang)
            })
        };
        const areCoordinatesInBoundary = function(longitutePointA, longitudePointB) {
            return longitutePointA < 180 && longitudePointB < 180 && longitutePointA > -180 && longitudePointB > -180
        };
        const calculateBearing = function(pointA, pointB) {
            var rad = Math.PI / 180;
            var deg = 180 / Math.PI;
            var lat1 = pointA.lat * rad;
            var lat2 = pointB.lat * rad;
            var lon1 = pointA.lng * rad;
            var lon2 = pointB.lng * rad;
            var y = Math.sin(lon2 - lon1) * Math.cos(lat2);
            var x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);
            return Math.atan2(y, x) * deg
        };
        const calculateRoute = function(isInsideEu) {
            map.closePopup();
            clearPreviousLeafletLines(!0);
            var areRoutesVisible = isInsideEu && config.routes;
            setRouteVisibility(areRoutesVisible)
        };
        const setRoutingDirectionsVisibility = function(isVisible) {
            var containerRoutingAlternatives = map.ui.querySelector(".leaflet-routing-alternatives-container");
            if (containerRoutingAlternatives) {
                containerRoutingAlternatives.style.display = isVisible ? "block" : "none"
            }
        };
        const setRouteVisibility = function(isVisible) {
            setRoutingDirectionsVisibility(isVisible);
            routingControl.options.lineOptions = isVisible ? lineOptions : hideRouting;
            routingControl.options.altLineOptions = isVisible ? defaultRoutingStyle : hideRouting;
            if (reCalcRoute) {
                routingControl.route();
                reCalcRoute = !1
            }
        };
        const isFalseRoute = function(route) {
            if (route.waypoints[0].latLng.lat !== route.inputWaypoints[0].latLng.lat) {
                return !0
            }
            if (route.waypoints[0].latLng.lng !== route.inputWaypoints[0].latLng.lng) {
                return !0
            }
            if (route.waypoints[1].latLng.lat !== route.inputWaypoints[1].latLng.lat) {
                return !0
            }
            if (route.waypoints[1].latLng.lng !== route.inputWaypoints[1].latLng.lng) {
                return !0
            }
            return !1
        };
        const clearPreviousLeafletLines = function() {
            var containerRoutingAlternatives = map.ui.querySelector(".leaflet-routing-alternatives-container");
            if (containerRoutingAlternatives) {
                containerRoutingAlternatives.innerHTML = "";
                !!routingControl._line && map.removeLayer(routingControl._line);
                if (routingControl._alternatives && routingControl._alternatives.length) {
                    routingControl._alternatives.forEach(function(line) {
                        map.removeLayer(line)
                    })
                }
            }
        };
        const createCancelRoutingButton = function() {
            let routingContainer = map.ui.querySelectorAll(".leaflet-routing-geocoders");
            if (routingContainer.length > 0) {
                let cancel = document.createElement("div");
                cancel.className = "wt-cancel-routing";
                cancel.innerHTML = "<button class='wt-button'>" + config.cancel.label + "</button>";
                $wt.after(cancel, routingContainer[0]);
                map.ui.querySelector(".wt-cancel-routing button").onclick = () => {
                    if (config.cancel.emit) {
                        $wt.trigger(window, config.cancel.emit, {
                            map: map,
                            routingControl: routingControl
                        })
                    } else {
                        if (routingControl) {
                            routingControl.setWaypoints([])
                        }
                        map.panels.close()
                    }
                }
            }
        };
        this.add = function(options={}) {
            map.routing.remove();
            if (Array.isArray(options.start)) {
                options.start = {
                    coordinates: options.start,
                    icon: {
                        type: "slim",
                        size: 30,
                        color: "green"
                    }
                }
            }
            if (Array.isArray(options.dest)) {
                options.dest = {
                    coordinates: options.dest,
                    icon: {
                        type: "slim",
                        size: 30,
                        color: "red"
                    }
                }
            }
            config = $wt.mergeParams(config, options);
            map.menu.add({
                name: "routing",
                tooltip: config.tooltip,
                class: config.class,
                click: () => {
                    if (typeof config.click === 'function') {
                        config.click(map.ui.menu.routing)
                    }
                    loadDependenciesAndInit()
                }
                ,
                after: config.position,
                panel: {
                    collapse: config.collapse,
                    content: `<p>${config.description}</p><div id="leaflet-wt-anchor-routing"></div>`
                }
            });
            map.ui.panels.routing.setAttribute("role", "form");
            setTimeout( () => {
                if (config.collapse === !1) {
                    loadDependenciesAndInit()
                }
            }
            , 0);
            this.ready = fnc => ready = fnc;
            return this
        }
        ;
        this.remove = function() {
            if (routingControl) {
                routingControl.setWaypoints([]);
                map.removeControl(routingControl);
                traced = !1;
                routingControl = null
            }
            map.panels.remove("routing")
        }
        ;
        this.route = function(from, to) {
            config.start.coordinates = from;
            config.dest.coordinates = to;
            if (routingControl && traced) {
                routingControl.setWaypoints([from, to])
            } else if (!window.L.Routing && !window.leafletPip) {
                this.add();
                $wt.load(dependencies, () => {
                    $wt.waitUntil( () => L.Routing && window.leafletPip).then( () => {
                        initRoutingControl();
                        routingControl.setWaypoints([from, to])
                    }
                    )
                }
                )
            } else {
                this.add();
                initRoutingControl();
                routingControl.setWaypoints([from, to])
            }
        }
        ;
        this.clear = function() {
            this.route([null, null], [null, null])
        }
    }
    map.routing = new Routing()
});
L.Map.addInitHook(function() {
    let map = this;
    let lang = map.getUEC("lang", null);
    let locateMarker = !1;
    let giscoLangSupport = ['en', 'de', 'fr', 'it', 'es', 'pl', 'ro', 'nl', 'hu', 'pt', 'el', 'sv', 'cs', 'bg', 'sk', 'da', 'fi', 'lt', 'sl', 'et', 'hr', 'ga', 'lv', 'mt'];
    let params = {
        tooltip: $wt.label("map", "location", lang),
        class: "locate",
        collapse: !0,
        click: !1,
        priority: "panel",
        content: !1,
        maxzoom: 18,
        button: {
            icon: {
                type: "slim",
                size: 30,
                color: "#a00"
            }
        },
        search: {
            icon: {
                type: "slim",
                size: 30,
                color: "#a00"
            }
        },
        geofilters: {
            search_area: "default",
            limit: 4,
            lang: (giscoLangSupport.includes(lang)) ? lang : "en",
            osm_tag: ["place:city", "place:town", "place:village", "place:locality"],
            location_bias_scale: 0.2,
            bbox: !1,
            lat: !0,
            lon: !0
        }
    };
    let EU_COUNTRIES = $wt.map.data.eu27;
    let EXTRA = ["IS", "NO", "LI", "CH", "BA", "ME", "MD", "MK", "GE", "AL", "RS", "TR", "UA", "AD", "LI", "VA", "SM", "XK", "GB"];
    let SEARCH_AREA = [...new Set(EU_COUNTRIES.concat(EXTRA))];
    const fieldSearchInit = (field, callback, config) => {
        $wt.aria.autocomplete(field).search(async () => {
            let coordinates = map.getCenter();
            let tags = config.geofilters.osm_tag;
            let lat = config.geofilters.lat;
            let lon = config.geofilters.lon;
            let url = ["https://gisco-services.ec.europa.eu/api/?q="];
            let limit = config.geofilters.limit;
            let limitFactor = (limit < 1332 ? limit : 1332) * 5;
            if (!Array.isArray(tags)) {
                tags = (tags + "").split(",")
            }
            url.push(encodeURIComponent(field.value));
            url.push(tags.map(tag => `&osm_tag=${tag}`).join(''));
            url.push("&location_bias_scale=" + config.geofilters.location_bias_scale);
            url.push("&limit=" + limitFactor);
            if (config.geofilters.lang) {
                url.push("&lang=" + config.geofilters.lang)
            }
            if (lat === !0) {
                url.push(`&lat=${coordinates.lat}`)
            } else if (lat) {
                url.push(`&lat=${lat}`)
            }
            if (lon === !0) {
                url.push(`&lon=${coordinates.lng}`)
            } else if (lon) {
                url.push(`&lon=${lon}`)
            }
            if (config.geofilters.bbox === !0) {
                url.push(`&bbox=${map.getBounds().toBBoxString()}`)
            }
            return new Promise( (resolve, reject) => {
                $wt.getFile({
                    url: url.join(''),
                    type: "json",
                    error: reject,
                    success: data => {
                        let results = data.features.filter(row => {
                            if (config.geofilters.search_area === "europe") {
                                return SEARCH_AREA.includes(row.properties.countrycode)
                            }
                            return !0
                        }
                        ).map(row => {
                            return {
                                ...row.geometry,
                                ...row.properties
                            }
                        }
                        ).slice(0, limit);
                        resolve(results)
                    }
                })
            }
            )
        }
        ).list(row => {
            return `
        <b>${row.name || row.city}</b> <span>(${row.osm_value})</span>
        <br><small>${row.postcode || ''} ${row.city || row.name}</small>
        <br><small>${row.country} (${row.countrycode})</small>
      `
        }
        ).select(callback)
    }
    ;
    map.on('initRoutingFieldLocationSearch', (evt) => {
        fieldSearchInit(evt.field, evt.select, $wt.mergeParams(params, evt.params))
    }
    );
    const showMe = (row) => {
        if (locateMarker) {
            map.removeLayer(locateMarker)
        }
        let coordinates = row.coordinates.slice().reverse();
        let postcode = row.postcode || '';
        let popup = ['<h4 class="wt-head">' + row.name + '</h4>', row.country ? '<div class="wt-div"><b>Country:</b> ' + row.country + '</div>' : '', row.state ? '<div class="wt-div"><b>State:</b> ' + row.state + '</div>' : '', row.city ? '<div class="wt-div"><b>City:</b> ' + postcode + " " + row.city + '</div>' : ''].join("");
        locateMarker = map.markers(coordinates, {
            icon: params.search.icon
        }).tooltip(popup, {
            sticky: !0,
            direction: "top",
            className: "wt-location-tooltip"
        }).addTo(map);
        map.flyTo(coordinates, 8);
        map.fire("searchLocationMarkerAdd", {
            layer: locateMarker
        })
    }
    ;
    const addMyLocation = (coordinates) => {
        if (locateMarker) {
            map.removeLayer(locateMarker)
        }
        let coords = [coordinates.latitude, coordinates.longitude];
        locateMarker = map.markers(coords, {
            icon: params.button.icon
        }).tooltip($wt.label("map", "geolocation_found", lang), {
            sticky: !0,
            direction: "top",
            className: "wt-location-tooltip"
        }).addTo(map);
        map.setView(coords, params.maxzoom);
        map.loading.hide();
        map.fire("geolocateMeMarkerAdd", {
            layer: locateMarker
        })
    }
    ;
    const geoLocateMe = () => {
        map.loading.show();
        map.location.get(addMyLocation)
    }
    ;
    const removeLocation = () => {
        if (locateMarker) {
            map.removeLayer(locateMarker)
        }
        if (map.location?.field) {
            map.location.field.value = ''
        }
    }
    ;
    const clickMenu = (e) => {
        if (params.priority === "button") {
            return geoLocateMe()
        }
        if (typeof params.click === 'function') {
            params.click(e)
        }
    }
    ;
    const buildPanelContent = () => {
        let content = document.createElement("div");
        content.className = "wt-location-content";
        content.innerHTML = params.content ? params.content : "";
        map.ui.panels.location.body.appendChild(content);
        let toolbar = document.createElement("div");
        toolbar.className = "wt-location-toolbar";
        map.ui.panels.location.body.appendChild(toolbar);
        if (params.button) {
            let locateMe = $wt.label("map", "locate_me", lang);
            let btn = document.createElement("button");
            btn.innerHTML = `
        <span class="wt-icon--crosshair wt-icon--m"></span>
        <span class="wt-offscreen">${locateMe}</span>
      `;
            btn.title = $wt.label("map", "locate_me", lang);
            btn.className = "wt-link locateMe";
            toolbar.appendChild(btn);
            let legend = document.createElement('div');
            legend.className = "wt-route--legend";
            legend.innerHTML = `<span class="wt-icon--location-filled wt-icon--m" style="color: #a00"></span>`;
            toolbar.appendChild(legend);
            $wt.on(btn, "click", geoLocateMe)
        }
        if (params.search) {
            map.location.field = document.createElement("input");
            map.location.field.className = "wt-location-search";
            map.location.field.placeholder = $wt.label("map", "geolocation_placeholder", lang);
            toolbar.appendChild(map.location.field);
            fieldSearchInit(map.location.field, row => {
                map.location.field.value = `${row.name || row.city} ${row.postcode || ''} ${row.city || row.name}`;
                showMe(row)
            }
            , params)
        }
        let removeWaypoint = document.createElement('span');
        removeWaypoint.className = 'wt-remove-location-waypoint';
        removeWaypoint.setAttribute("role", "button");
        removeWaypoint.setAttribute('aria-label', $wt.label("map", "cancelLocation", lang));
        removeWaypoint.innerHTML = "<span class='wt-icon--close wt-icon--s'></span>";
        toolbar.appendChild(removeWaypoint);
        $wt.on(removeWaypoint, 'click', removeLocation);
        let cancel = document.createElement("div");
        cancel.className = "wt-cancel-routing";
        cancel.innerHTML = "<button class='wt-button'>" + $wt.label("map", "cancelLocation", lang) + "</button>";
        map.ui.panels.location.body.appendChild(cancel);
        $wt.on(cancel, 'click', removeLocation)
    }
    ;
    map.location = {
        get: (callback) => {
            if (!navigator.geolocation) {
                alert($wt.label("map", "geolocation_not_supported", lang));
                map.loading.hide();
                return
            }
            navigator.geolocation.getCurrentPosition( (location) => {
                callback({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude
                })
            }
            , () => {
                alert($wt.label("map", "geolocation_failed", lang));
                map.loading.hide()
            }
            )
        }
        ,
        add: (config) => {
            if (map.ui.menu.location || map.ui.panels.location) {
                return
            }
            params = $wt.mergeParams(params, config || {});
            params.priority = (params.search) ? params.priority : "button";
            params.tooltip = (params.priority === "button") ? $wt.label("map", "locate_me", lang) : params.tooltip;
            map.menu.add({
                name: "location",
                tooltip: params.tooltip,
                class: params.class,
                click: clickMenu,
                panel: (params.priority === "button") ? !1 : {
                    collapse: params.collapse,
                    content: " "
                }
            });
            if (params.priority === "panel") {
                buildPanelContent()
            }
        }
    }
});
L.Map.addInitHook(function() {
    var map = this
      , disclaimerLink = document.createElement("a");
    disclaimerLink.className = "wt-link";
    var content = "<h2 class='wt-head'>" + $wt.label("map", "disclaimer_label", map.getUEC("lang", null)) + "</h2>" + "<p>" + $wt.label("map", "disclaimer", map.getUEC("lang", null)) + "</p>";
    var uec = function(config) {
        var language = map.getUEC("lang", document.lang);
        if (typeof config.uec === 'string') {
            content += config.uec
        } else if (typeof config.uec === 'object' && typeof config.uec[language] === 'string') {
            content += config.uec[language]
        }
        disclaimer()
    };
    var disclaimer = function() {
        if (!map.ui) {
            return
        }
        var dom = map.ui.attribution;
        if (dom.disclaimer) {
            map.ui.attribution.innerHTML = map.ui.attribution.innerHTML.replace(dom.disclaimer, "")
        }
        if (dom) {
            dom.innerHTML += " | ";
            disclaimerLink.innerHTML = $wt.label("map", "disclaimer_label", map.getUEC("lang", null));
            disclaimerLink.href = "#info_" + map.id;
            disclaimerLink.onclick = function(e) {
                e.preventDefault();
                map.disclaimer.show()
            }
            ;
            disclaimerLink.setAttribute("role", "button");
            disclaimerLink.setAttribute("aria-controls", "info_" + map.id);
            dom.appendChild(disclaimerLink);
            dom.disclaimer = " | " + disclaimerLink.outerHTML
        }
    };
    map.disclaimer = {
        add: function(config) {
            uec({
                uec: config
            })
        },
        update: function(config) {
            uec({
                uec: config
            })
        },
        show: function() {
            disclaimerLink.open = !0;
            map.info.show('<div class="wt-disclaimer-content">' + content + '</div>', {
                class: "wt-disclaimer"
            });
            map.fire("disclaimerShow")
        },
        hide: function() {
            disclaimerLink.open = !1;
            map.info.close();
            map.fire("disclaimerHide")
        }
    };
    map.on({
        closeInfo: function() {
            disclaimerLink.open = !1
        },
        attributionUpdate: disclaimer,
        disclaimerUEC: uec,
        init: function() {
            $wt.defer(disclaimer)
        }
    })
});
L.Map.addInitHook(function() {
    let map = this;
    let _CACHE = [];
    map.getPane("shadowPane").setAttribute("aria-hidden", !0);
    let _setPos = L.Marker.prototype._setPos;
    L.Marker.include({
        _setPos: function(pos) {
            _setPos.call(this, pos);
            let self = this;
            setTimeout( () => {
                if (self._icon) {
                    if (self._icon.title) {
                        self._icon.setAttribute("aria-label", $wt.filterHtml(self._icon.title))
                    }
                    if (self._events.click) {
                        self._icon.setAttribute("role", "button");
                        if (self._clickAsLink) {
                            self._icon.setAttribute("href", $wt.filterHtml(self._clickAsLink));
                            self._icon.setAttribute("role", "link")
                        } else if (self._clickAsInfoPanel) {
                            self._icon.setAttribute("aria-controls", "info_" + map.id)
                        }
                        self.on("keyup", function(evt) {
                            if (evt.originalEvent.key === 'Enter' && self._popup) {
                                map._current.events.keyboard = !0;
                                map._current.marker.selected = self;
                                self.fire("click")
                            }
                        })
                    } else if (!self._events.click && !self._icon.title) {
                        self._icon.setAttribute("aria-hidden", !0);
                        self._icon.removeAttribute("tabindex");
                        self._icon.removeAttribute("role");
                        self._icon.classList.remove("leaflet-interactive")
                    }
                }
            }
            , 0)
        }
    });
    const markers = function(data, options) {
        let DATA_AGGREGATE = [];
        let TIMER;
        let clusterIndex;
        let centroid = {
            type: 'FeatureCollection',
            features: []
        };
        let geojson = {
            type: 'FeatureCollection',
            features: []
        };
        var graper = function(options) {
            var timer;
            var _circles = [];
            var previous = [];
            var maxSize = 20;
            var minSize = 10;
            var totalValue = 0;
            var canvasSize = 5;
            var points = function(data) {
                this.x = Math.random() + canvasSize;
                this.y = Math.random() + canvasSize;
                this.size = Math.round(data.size + minSize);
                this.color = data.color;
                this.total = data.total;
                this.name = data.name;
                this.features = data.features
            };
            var update = function(x, y) {
                this.x = x || 0;
                this.y = y || 0;
                this.normalize = function() {
                    var scaleFactor = 1 / Math.sqrt(this.x * this.x + this.y * this.y);
                    this.scaleBy(scaleFactor, scaleFactor)
                }
                ;
                this.scaleBy = function(x, y) {
                    this.x *= x || y;
                    this.y *= y || x
                }
            };
            var add = function(circle) {
                _circles.push(circle);
                clearTimeout(timer);
                timer = setTimeout(enterFrame, 5)
            };
            var enterFrame = function() {
                var v = new update();
                var posAndSize = [];
                _circles = _circles.sort(function(a, b) {
                    if (a.size > b.size) {
                        return -1
                    }
                    return 0
                });
                for (var index = 0; index < _circles.length; index++) {
                    var ci = _circles[index];
                    for (var increment = index + 1; increment < _circles.length; increment++) {
                        var cj = _circles[increment];
                        var dx = cj.x - ci.x;
                        var dy = cj.y - ci.y;
                        var radius = ci.size + cj.size + 2;
                        var distance = (dx * dx) + (dy * dy);
                        if (distance < (radius * radius) - 0.01) {
                            v.x = dx;
                            v.y = dy;
                            v.normalize();
                            v.scaleBy((radius - Math.sqrt(distance)) * 0.3);
                            cj.x += v.x;
                            cj.y += v.y;
                            ci.x -= v.x;
                            ci.y -= v.y
                        }
                    }
                }
                for (var i = 0; i < _circles.length; i++) {
                    var obj = _circles[i];
                    posAndSize.push({
                        x: obj.x,
                        y: obj.y,
                        size: obj.size,
                        total: obj.total,
                        color: obj.color,
                        name: obj.name,
                        features: obj.features
                    })
                }
                if (previous === JSON.stringify(posAndSize)) {
                    clearTimeout(timer);
                    end(posAndSize);
                    return
                } else {
                    previous = JSON.stringify(posAndSize)
                }
                clearTimeout(timer);
                timer = setTimeout(enterFrame, 5)
            };
            var end = function(coords) {
                coords.forEach(function(entry) {
                    entry.panTo = [entry.x - canvasSize, entry.y - canvasSize];
                    delete entry.x;
                    delete entry.y
                });
                if (options.ready) {
                    options.ready(coords)
                }
            };
            for (var i = 0; i < options.data.length; i++) {
                totalValue += options.data[i].total
            }
            for (var c = 0; c < options.data.length; c++) {
                var pourcent = Number(((options.data[c].total / totalValue) * 100).toFixed(0));
                var size = Math.round((maxSize * pourcent) / 100);
                options.data[c].pourcent = pourcent;
                options.data[c].size = size
            }
            for (var x = 0; x < options.data.length; x++) {
                add(new points(options.data[x]))
            }
        };
        let _icons = {
            grape: function(feature, higherCluster) {
                var spiderLayer = L.featureGroup();
                var coordinates = feature.geometry.coordinates.slice();
                var toAccessibility = function(layer, nbr, features) {
                    if (nbr === 1) {
                        var cloneFeature = JSON.parse(JSON.stringify(features[0]));
                        cloneFeature.geometry.coordinates = layer._latlng;
                        var singleMarker = _icons.marker(cloneFeature).addTo(spiderLayer);
                        return bindEvents(singleMarker, cloneFeature)
                    }
                    layer.feature = {
                        features: features
                    };
                    layer.on("add", function(evt) {
                        var elm = evt.target;
                        if (elm._icon) {
                            var translation = $wt.template($wt.label("map", "cluster", map.getUEC("lang", null)), {
                                number: nbr
                            });
                            elm._icon.setAttribute("title", translation)
                        }
                    }).addTo(spiderLayer);
                    clusterEVents(layer)
                };
                new graper({
                    data: feature.groups,
                    ready: function(coords) {
                        coords.forEach(function(coord) {
                            var point = map.latLngToContainerPoint(coordinates);
                            var newPoint = L.point([point.x - coord.panTo[0], point.y - coord.panTo[1]]);
                            var newLatLng = map.containerPointToLatLng(newPoint);
                            toAccessibility(L.marker(newLatLng, {
                                icon: map.icon({
                                    icon: "cluster",
                                    text: coord.total,
                                    size: coord.size * 2.05,
                                    color: coord.color
                                })
                            }), coord.total, coord.features)
                        })
                    }
                });
                return spiderLayer
            },
            spider: function(feature) {
                var self = this;
                var spiderLayer = L.featureGroup();
                var count = 0;
                var nbrPoints = feature.features.length;
                var coordinates = feature.geometry.coordinates.slice().reverse();
                var centroid = map.latLngToLayerPoint(coordinates);
                var spiral = spiralPoints((nbrPoints * 2) + 8, centroid);
                spiral.forEach(function(coords, index) {
                    if (index > 5 && index % 2 && count < nbrPoints) {
                        var pos = map.layerPointToLatLng(coords);
                        var feat = JSON.parse(JSON.stringify(feature.features[count]));
                        feat.geometry.coordinates = [pos.lat, pos.lng];
                        feat.group = _options.group(feat);
                        var markerPoint = self.marker(feat).addTo(spiderLayer);
                        L.polyline([pos, coordinates], {
                            weight: 0.75,
                            color: "#444",
                            opacity: 0.5
                        }).addTo(spiderLayer);
                        bindEvents(markerPoint, feat);
                        count++
                    }
                });
                L.circleMarker(coordinates, {
                    radius: 3,
                    fillColor: "#444",
                    fillOpacity: 1,
                    weight: 0
                }).addTo(spiderLayer);
                return spiderLayer
            },
            cluster: function(feature, higherCluster) {
                let dimension = feature.properties.point_count;
                let maxSize = _options.cluster.size.max;
                let lowSize = _options.cluster.size.min;
                let percent = Math.floor((dimension / higherCluster) * 100);
                let newSize = lowSize + (((maxSize - lowSize) / 100) * percent);
                if (_options.cluster.mode === 'grape') {
                    return _icons.grape(feature, higherCluster)
                }
                return L.marker(feature.geometry.coordinates, {
                    icon: (typeof _options.cluster.icon === 'function') ? _options.cluster.icon(feature, _options.color) : map.icon({
                        icon: 'pie',
                        data: feature.groups,
                        size: newSize
                    })
                })
            },
            marker: function(feature) {
                feature.group = _options.group(feature);
                return L.marker(feature.geometry.coordinates, {
                    icon: (typeof feature.group.icon === 'function') ? feature.group.icon(feature) : map.icon($wt.mergeParams({
                        color: feature.group.color || _options.color
                    }, feature.group.icon || _options.icon || _options.icons || {}))
                })
            }
        };
        let _options = $wt.mergeParams({
            transform: !1,
            reverse: !1,
            color: "dodgerblue",
            filter: () => !0,
            group: function() {
                return {
                    name: "Webtools",
                    color: this.color
                }
            },
            icons: {
                spider: _icons.spider,
                cluster: _icons.cluster,
                marker: _icons.marker
            },
            events: {
                tooltip: !1,
                click: {
                    type: "info",
                    content: function(feature, layer) {
                        var p = feature.properties;
                        var content = '';
                        for (var x in p) {
                            if (x !== 'color' && p[x] !== null && p[x] !== '') {
                                content += $wt.template('<tr class="wt-properties-{class}"><td class="wt-td"><h3 class="wt-head">{key}</h3>{value}</td></tr>', {
                                    class: x,
                                    key: x.replace(/_/g, " ").toUpperCase(),
                                    value: p[x]
                                })
                            }
                        }
                        if (content) {
                            return "<table class='wt-table'>" + content + "</table>"
                        }
                        return content
                    },
                    options: {
                        center: !0,
                        selected: {
                            icon: "info",
                            size: 70,
                            color: "#444"
                        }
                    }
                }
            },
            cluster: {
                radius: 80,
                mode: "pie",
                size: {
                    max: 70,
                    min: 40
                },
                country: {
                    zoom: 5,
                    focus: !0
                }
            }
        }, options || {});
        if (Array.isArray(_options.group)) {
            _options.group = $wt.map.rulesToFunction(_options.group)
        }
        if (Array.isArray(_options.filter)) {
            _options.filter = $wt.map.rulesToFunction(_options.filter)
        }
        let _data = (from => {
            let to = [];
            if (Array.isArray(from)) {
                if (typeof from[0] === "number") {
                    _options.cluster = !1;
                    to = [{
                        "type": "FeatureCollection",
                        "features": [{
                            "properties": _options.properties || {},
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [from[1], from[0]]
                            }
                        }]
                    }]
                } else {
                    from.forEach( (item, index) => {
                        if (!item) {
                            console.log("WTINFO: Markers data (" + (index + 1) + ") entry is not managed:", item)
                        } else {
                            to.push((typeof item === "string") ? $wt.absolute(item) : item)
                        }
                    }
                    )
                }
            } else if (typeof from === "string") {
                to = [from]
            } else if (typeof from === "object") {
                to = [from]
            }
            return to
        }
        )(data);
        var spiralPoints = function(count, centerPt) {
            var legLength = 9;
            var separation = 28;
            var lengthFactor = 5;
            var angle = 0;
            var res = [];
            for (var i = count - 1; i >= 0; i--) {
                angle += separation / legLength + i * 0.0005;
                res[i] = new L.Point(Math.round(centerPt.x + legLength * Math.cos(angle)),Math.round(centerPt.y + legLength * Math.sin(angle)));
                legLength += (Math.PI * 2) * lengthFactor / angle
            }
            return res.reverse()
        };
        const next = (data) => {
            if (data && data.features) {
                geojson.features = geojson.features.concat(data.features)
            }
            _data = _data.slice(1);
            if (_data[0]) {
                add()
            } else if (typeof _options._getData === "function") {
                _options._getData(geojson, _MAIN);
                _options._getData = !0
            } else {
                _MAIN.fire("loaded", {
                    data: geojson
                });
                process(geojson)
            }
        }
        ;
        const groupsFeatures = (features) => {
            return Object.values(features.reduce( (arr, feat) => {
                let by = (_options.cluster.by || _options.group)(feat);
                if (!arr[by.name]) {
                    arr[by.name] = {
                        name: by.name,
                        color: by.color || _options.color,
                        icon: by.icon,
                        total: 1,
                        features: [feat]
                    }
                } else {
                    arr[by.name].total++;
                    arr[by.name].features.push(feat)
                }
                return arr
            }
            , {}))
        }
        ;
        const clusterByCountries = () => {
            centroid.features = Object.values(geojson.features.reduce( (temp, feat) => {
                let PROP = feat.properties[_options.cluster.country.property] || !1;
                if (PROP) {
                    let CNTR_ID = PROP.slice(0, 2);
                    let BOUNDS = $wt.map.data.bounds[CNTR_ID];
                    let CNTR_NAME = $wt.map.data.labels[CNTR_ID]?.l || '';
                    let CENTROID = ($wt.map.data.labels[CNTR_ID]?.c || '').slice().reverse();
                    [{
                        id: "FR",
                        ref: "FR1"
                    }, {
                        id: "ES",
                        ref: "ES1"
                    }, {
                        id: "PT",
                        ref: "PT1"
                    }].forEach(cntr => {
                        if (cntr.id === CNTR_ID) {
                            BOUNDS = $wt.map.data.bounds[cntr.ref]
                        }
                    }
                    );
                    if (!temp[CNTR_ID]) {
                        temp[CNTR_ID] = {
                            type: "Feature",
                            properties: {
                                centroid: !0,
                                features: [],
                                population: 0,
                                point_count: 0,
                                CNTR_ID: CNTR_ID,
                                CNTR_NAME: CNTR_NAME,
                                BOUNDS: [[BOUNDS[0], BOUNDS[1]], [BOUNDS[2], BOUNDS[3]]]
                            },
                            geometry: {
                                type: "Point",
                                coordinates: CENTROID
                            }
                        }
                    }
                    temp[CNTR_ID].properties.population++;
                    temp[CNTR_ID].properties.point_count++;
                    temp[CNTR_ID].properties.features.push(feat)
                }
                return temp
            }
            , {}));
            centroid.higherCluster = Math.max.apply(null, centroid.features.map(feat => {
                return Number(feat.properties.population) || 1
            }
            ));
            map.menu.update("home", {
                click: () => {
                    centroid.currentCountry = !1;
                    return !0
                }
            })
        }
        ;
        const process = (data) => {
            geojson = {
                type: "FeatureCollection",
                features: data.features.filter(feat => {
                    let coords = feat.geometry.coordinates;
                    let isValid = coords.length === 2;
                    if (!isValid) {
                        console.log("WTINFO: Invalid coordinates: ", feat)
                    }
                    return isValid && feat.geometry.type === 'Point' && !isNaN(coords[0])
                }
                ).filter(_options.cluster.filter || _options.filter)
            };
            if (_options.reverse) {
                geojson.features = geojson.features.map(reverse)
            }
            if (_options.cluster.country) {
                clusterByCountries()
            }
            zoomend();
            map.on("zoomend", zoomend);
            map.on("zoomstart", zoomstart)
        }
        ;
        var add = function() {
            var from = _data[0];
            if (typeof from === "object") {
                next(from)
            } else if (_CACHE[from]) {
                next(_CACHE[from])
            } else if (typeof from === 'string') {
                map.fire("showLoading");
                var isXLS = "xlsx,xls,ods".indexOf($wt.ext(from)) > -1;
                $wt.getFile({
                    type: (isXLS) ? "xls" : "json",
                    url: from,
                    options: (isXLS) ? $wt.mergeParams({
                        to: "geojson"
                    }, _options.transform || {}) : null,
                    success: function(json) {
                        _CACHE[from] = json;
                        next(json);
                        map.fire("hideLoading")
                    },
                    error: function() {
                        var errorMessage = "WTINFO: Markers data was not loaded from: " + from;
                        if (_MAIN._events.error) {
                            _MAIN.fire("error", {
                                message: errorMessage,
                                status: 404
                            }, !0)
                        } else {
                            console.error(errorMessage)
                        }
                        next();
                        map.fire("hideLoading")
                    }
                })
            } else if (_options._getData) {
                process(geojson);
                delete _options._getData
            } else {
                zoomend();
                map.on("zoomend", zoomend);
                map.on("zoomstart", zoomstart)
            }
        };
        var remove = function() {
            map.off("zoomend", zoomend);
            map.off("moveend", moveend);
            map.off("zoomstart", zoomstart);
            map.off("activeAreaChange", zoomend)
        };
        const bindEvents = (layer, feature) => {
            if (_options.onEachFeature) {
                _options.onEachFeature(feature, layer)
            }
            if (!layer._events || !layer._events.click) {
                if (!layer.feature) {
                    layer.feature = feature
                }
                $wt.map.layersEventsManager(layer, (options || {}).events || _options.events)
            }
        }
        ;
        const clusterEVents = (marker) => {
            marker.on("click", function() {
                map.info.close();
                let CNTR_ID = this.feature.properties?.CNTR_ID;
                let ref = this.feature.features || this.feature.properties.features;
                let bounds = this.feature.properties?.BOUNDS || ref.map(feat => feat.geometry.coordinates.slice().reverse());
                if (CNTR_ID) {
                    centroid.currentCountry = CNTR_ID
                }
                map.flyToBounds(bounds.filter(row => row.length === 2), {
                    padding: [10, 10]
                });
                map.fire("clusterClick", marker)
            });
            marker.on('keyup', (evt) => {
                if (evt.originalEvent.keyCode === 13) {
                    marker.fire("click")
                }
            }
            );
            marker.on('keydown', (evt) => {
                if (evt.originalEvent.keyCode === 32) {
                    evt.originalEvent.preventDefault();
                    marker.fire("click")
                }
            }
            );
            marker.on('add', function() {
                if (marker._icon) {
                    let ref = this.feature.features || this.feature.properties.features;
                    let translation = $wt.template($wt.label("map", "cluster", map.getUEC("lang", null)), {
                        number: ref.length
                    });
                    marker._icon.setAttribute("title", translation)
                }
            })
        }
        ;
        const getAllFeatures = (id) => {
            try {
                return clusterIndex.getLeaves(id, Infinity)
            } catch (e) {
                return []
            }
        }
        ;
        const reverse = (feat) => {
            let cloneFeat = JSON.parse(JSON.stringify(feat));
            if (cloneFeat.geometry.coordinates.slice) {
                cloneFeat.geometry.coordinates = cloneFeat.geometry.coordinates.slice().reverse()
            }
            return cloneFeat
        }
        ;
        const manageClusterIcons = function(feature) {
            let marker;
            let zoom = Math.round(map.getZoom());
            let prop = feature.properties;
            if (prop.cluster && (zoom === 18 || zoom === map.getMaxZoom())) {
                feature.features = getAllFeatures(prop.cluster_id);
                marker = (_options.icons.spider) ? _options.icons.spider(feature) : _icons.spider(feature)
            } else if (prop.centroid) {
                feature.groups = groupsFeatures(prop.features);
                let feat = reverse(feature);
                marker = (_options.icons.cluster || _icons.cluster)(feat, centroid.higherCluster);
                if (_options.cluster.mode !== 'grape') {
                    clusterEVents(marker, feat)
                }
            } else if (prop.cluster) {
                feature.features = getAllFeatures(prop.cluster_id);
                feature.groups = groupsFeatures(feature.features);
                let feat = reverse(feature);
                marker = (_options.icons.cluster || _icons.cluster)(feat, clusterIndex.maxCluster);
                if (_options.cluster.mode !== 'grape') {
                    clusterEVents(marker, feat)
                }
            } else {
                feature.group = (_options.cluster.by || _options.group)(feature);
                let feat = reverse(feature);
                marker = (_options.icons.marker) ? _options.icons.marker(feat) : _icons.marker(feat);
                bindEvents(marker, feature)
            }
            clearTimeout(TIMER);
            TIMER = setTimeout(function() {
                _MAIN.fire("draw", {
                    data: _MAIN.toGeoJSON()
                }, !0)
            }, 50);
            _MAIN.fire("each", {
                layer: marker
            }, !0);
            return marker
        };
        const zoomstart = () => {
            map.off("moveend", moveend);
            map.off("activeAreaChange", moveend)
        }
        ;
        const preFilter = () => {
            let data = geojson.features;
            if (_options.cluster.country && centroid.currentCountry) {
                let key = _options.cluster.country.property;
                data = geojson.features.slice().filter(feat => {
                    return feat.properties[key].includes(centroid.currentCountry)
                }
                )
            }
            clusterIndex = new Supercluster({
                log: !1,
                radius: _options.cluster.radius,
                extent: 256,
                maxZoom: 18
            }).load(data)
        }
        ;
        const moveend = () => {
            let zoom = Math.round(map.getZoom());
            if (_options.cluster) {
                let bounds = map.getBounds();
                let bbox = [bounds.getWest(), bounds.getSouth(), bounds.getEast(), bounds.getNorth()];
                let NEW_DATA = clusterIndex.getClusters(bbox, zoom);
                if (NEW_DATA.length === 0) {
                    return
                }
                let COORDINATES = DATA_AGGREGATE.map(feat => {
                    return String(feat.geometry.coordinates)
                }
                );
                let DIFFERENCE = NEW_DATA.filter(feat => {
                    return COORDINATES.indexOf(String(feat.geometry.coordinates)) < 0
                }
                );
                if (DIFFERENCE.length) {
                    DATA_AGGREGATE = DATA_AGGREGATE.concat(DIFFERENCE);
                    clusterIndex.maxCluster = Math.max.apply(null, DATA_AGGREGATE.map(feat => {
                        return feat.properties.point_count || 1
                    }
                    ));
                    _MAIN_CLUSTER.addData(DIFFERENCE)
                }
            }
        }
        ;
        const zoomend = () => {
            let zoom = Math.round(map.getZoom());
            _MAIN_CLUSTER.clearLayers();
            _MAIN_CENTROID.clearLayers();
            if (_options.cluster && Object.keys(_options.cluster.country) && centroid.features.length) {
                let userZoom = Number(_options.cluster.country.zoom);
                let focus = _options.cluster.country.focus;
                if (centroid.currentCountry && !focus) {
                    _MAIN_CENTROID.addData({
                        type: "FeatureCollection",
                        features: centroid.features.slice().filter(feat => {
                            return feat.properties.CNTR_ID !== centroid.currentCountry
                        }
                        )
                    })
                } else if (zoom < userZoom) {
                    return _MAIN_CENTROID.addData(centroid)
                }
            }
            if (_options.cluster) {
                preFilter();
                let bounds = map.getBounds();
                let bbox = [bounds.getWest(), bounds.getSouth(), bounds.getEast(), bounds.getNorth()];
                try {
                    DATA_AGGREGATE = clusterIndex.getClusters(bbox, zoom)
                } catch (e) {
                    return
                }
                if (DATA_AGGREGATE.length === 0) {
                    return
                }
                clusterIndex.maxCluster = Math.max.apply(null, DATA_AGGREGATE.map( (feat) => {
                    return feat.properties.point_count || 1
                }
                ));
                _MAIN_CLUSTER.addData(DATA_AGGREGATE);
                map.on("moveend", moveend);
                map.on("activeAreaChange", moveend)
            } else if (Object.keys(_MAIN_CLUSTER._layers).length === 0) {
                _MAIN_CLUSTER.addData(geojson)
            }
        }
        ;
        const _MAIN = new L.geoJson(!1);
        const _MAIN_CLUSTER = new L.geoJson(!1,{
            pointToLayer: manageClusterIcons
        }).addTo(_MAIN);
        const _MAIN_CENTROID = new L.geoJson(!1,{
            pointToLayer: manageClusterIcons
        }).addTo(_MAIN);
        _MAIN.fitBounds = function(bounds, options) {
            var x = 0
              , timer = setInterval(function() {
                if (x > 100) {
                    clearInterval(timer)
                } else if (bounds || geojson.features.length) {
                    clearInterval(timer);
                    if (geojson.features.length === 1) {
                        map.setView(geojson.features[0].geometry.coordinates.slice().reverse(), 7)
                    } else {
                        map.flyToBounds(bounds || geojson.features.map(function(feat) {
                            return feat.geometry.coordinates.slice().reverse()
                        }), options || {})
                    }
                }
                x++
            }, 60);
            return this
        }
        ;
        _MAIN.filter = function(fnc) {
            if (Array.isArray(fnc)) {
                _options.filter = $wt.map.rulesToFunction(fnc)
            } else {
                _options.filter = fnc
            }
            return this
        }
        ;
        _MAIN.popup = function(fnc, options) {
            _options.events.click = {
                type: "popup",
                content: fnc,
                options: $wt.mergeParams({}, options || {})
            };
            return this
        }
        ;
        _MAIN.tooltip = function(fnc, options) {
            _options.events.tooltip = {
                content: fnc,
                options: $wt.mergeParams({}, options || {})
            };
            return this
        }
        ;
        _MAIN.info = function(fnc, options) {
            _options.events.click = (fnc === !1) ? !1 : {
                type: "info",
                content: fnc,
                options: $wt.mergeParams({
                    center: !0,
                    selected: {
                        icon: "info",
                        size: 60,
                        color: "#444"
                    }
                }, options || {})
            };
            return this
        }
        ;
        _MAIN.click = function(fnc) {
            _options.events.click = fnc;
            return this
        }
        ;
        _MAIN.group = function(fnc) {
            if (Array.isArray(fnc)) {
                _options.group = $wt.map.rulesToFunction(fnc)
            } else {
                _options.group = fnc
            }
            return this
        }
        ;
        _MAIN.cluster = function(fnc, options) {
            if (fnc === !1) {
                _options.cluster = !1
            } else if (typeof fnc === 'function') {
                _options.icons.cluster = fnc;
                if (options) {
                    _options.cluster = $wt.mergeParams(_options.cluster, options)
                }
            } else {
                _options.cluster = $wt.mergeParams(_options.cluster, fnc)
            }
            return this
        }
        ;
        _MAIN.data = function(fnc) {
            _options._getData = fnc;
            add();
            return this
        }
        ;
        _MAIN.icon = function(fnc) {
            if (typeof fnc === 'function') {
                _options.icons.marker = fnc
            } else {
                _options.icons = $wt.mergeParams(_options.icons, fnc)
            }
            return this
        }
        ;
        _MAIN.transform = function(options) {
            _options.transform = options;
            return this
        }
        ;
        _MAIN.on({
            add: add,
            remove: remove
        });
        return _MAIN
    };
    map.on("showInfo", function() {
        var selectedMarker = map._current.marker.selected;
        if (map._current.marker.selectedIcon) {
            map.removeLayer(map._current.marker.selectedIcon);
            map._current.marker.selectedIcon = !1;
            if (selectedMarker) {
                selectedMarker.setOpacity(1)
            }
        }
        if (selectedMarker._tooltip) {
            setTimeout(function() {
                if (!selectedMarker._tooltip.options.permanent) {
                    map._current.marker.selected.closeTooltip()
                }
            }, 350)
        }
    });
    map.on("closeInfo", function() {
        var selectedMarker = map._current.marker.selected;
        var selectedLayer = map._current.layer.selected;
        if (map._current.marker.selectedIcon) {
            map.removeLayer(map._current.marker.selectedIcon)
        }
        if (selectedLayer) {
            selectedLayer.setStyle(selectedLayer.originalStyle)
        }
        if (selectedMarker) {
            selectedMarker.setOpacity(1);
            if (map._current.events.keyboard) {
                var srcElm = selectedMarker.getElement();
                if (srcElm) {
                    srcElm.focus()
                }
            } else if (selectedMarker._tooltip && !selectedMarker._tooltip.options.permanent) {
                setTimeout( () => {
                    selectedMarker.closeTooltip()
                }
                , 51)
            }
        }
        map._current.layer.selected = !1;
        map._current.events.keyboard = !1;
        map._current.marker.selected = !1;
        map._current.marker.selectedIcon = !1
    });
    map.markers = function(data, options) {
        return new markers(data,options)
    }
});
L.Map.addInitHook(function() {
    let map = this;
    let _queue = [];
    let _process = !1;
    let _request = {};
    let uec = map.getUEC();
    let _china = {
        refMain: !1,
        layer: !1,
        isBoundary: !1,
        taiwanVisible: !1,
        NUTS: !1,
        BOUNDARY: !1
    };
    map.createPane('subOverlayPane');
    map.getPane('subOverlayPane').style.zIndex = 225;
    map.getPane('subOverlayPane').setAttribute("aria-hidden", !0);
    map.createPane('exceptionPane');
    map.getPane('exceptionPane').style.zIndex = 420;
    map.getPane('exceptionPane').setAttribute("aria-hidden", !0);
    map.createPane('hoverOverlayPane');
    map.getPane('hoverOverlayPane').style.zIndex = 410;
    map.getPane('hoverOverlayPane').setAttribute("aria-hidden", !0);
    map.createPane('borderPane');
    map.getPane('borderPane').style.zIndex = 430;
    map.getPane('borderPane').setAttribute("aria-hidden", !0);
    map.getPane('borderPane').style.pointerEvents = 'none';
    var setStyle = L.Path.prototype.setStyle;
    L.Path.prototype.setStyle = function(config) {
        setStyle.call(this, config);
        this.fire("_setStyle", config);
        return this
    }
    ;
    map.on("zoomend", function() {
        if (!map.ui) {
            return
        }
        var zoom = map.getZoom();
        if (zoom < 4) {
            map.ui.classList.add("wt-labels-hide")
        } else {
            map.ui.classList.remove("wt-labels-hide")
        }
    });
    var request = function(config, layer) {
        if (_process) {
            return _queue.push(config)
        }
        var processNext = function() {
            var first = _queue[0];
            _process = !1;
            if (first) {
                _queue = _queue.slice(1);
                request(first, layer)
            } else {
                map.fire("hideLoading")
            }
        };
        if (!config.countries || config.countries.length === 0 || !config.callback) {
            processNext();
            return
        }
        _process = !0;
        config.countries.sort();
        var urlRequest = [config.countries.join(",").toLowerCase(), "scale=" + config.scale + "M", "year=" + config.year];
        if (config.properties) {
            urlRequest.push("properties_only=true")
        } else {
            urlRequest.push("format=pbf")
        }
        if (typeof config.level === 'number') {
            urlRequest.push("level=" + config.level)
        }
        if (config.language) {
            urlRequest.push("language=" + config.language)
        }
        if ($wt.urlParams.wtdebug) {
            urlRequest.push("nocache=" + (Math.random() * 1000))
        }
        var cacheKey = urlRequest.join('_').replace(/,/g, '-').replace(/=/g, '-').replace(/--/g, '-');
        if (_request[cacheKey]) {
            config.callback(JSON.parse(JSON.stringify(_request[cacheKey])));
            processNext();
            return
        }
        map.fire("showLoading");
        $wt.ajax({
            url: "https://jackson.webtools.europa.eu/rest/nuts?countries=" + urlRequest.join("&"),
            binary: !!!config.properties,
            withCredentials: !1,
            success: function(json) {
                var geojson = {};
                if (config.properties) {
                    geojson = JSON.parse(json)
                } else {
                    var pbf = new Pbf(json.response);
                    geojson = geobuf.decode(pbf);
                    if (geojson && geojson.features && geojson.features.length === 0) {
                        console.log("WTINFO: Problem on retrieving some of the countries:", config.countries.join(","));
                        processNext();
                        return
                    }
                    if (geojson && geojson.wtstatus && geojson.wtstatus.success === !1) {
                        console.log(geojson.wtstatus.status || "WTINFO: An error occurred! Check the network requests!");
                        processNext();
                        return
                    }
                    if (geojson && geojson.not_reachable && geojson.not_reachable.length) {
                        console.log("WTINFO: Countries provided not reachable: " + geojson.not_reachable.join(", "))
                    }
                }
                _request[cacheKey] = JSON.parse(JSON.stringify(geojson));
                config.callback(geojson);
                processNext()
            },
            error: function(error) {
                if (!config._counter) {
                    config._counter = 0
                }
                config._counter++;
                if (config._counter < 4) {
                    if (layer && layer._queue) {
                        layer._queue.push(config)
                    } else {
                        _queue.push(config)
                    }
                    processNext()
                } else {
                    delete config._counter;
                    var errorMessage = "WTINFO: Countries data was not loaded for: " + config.countries.join(",");
                    if (layer && layer._events.error) {
                        delete config.next;
                        delete config.callback;
                        delete config.properties;
                        layer.fire("error", {
                            message: errorMessage,
                            status: 404,
                            config: config
                        }, !0)
                    } else {
                        console.log(errorMessage)
                    }
                    processNext()
                }
            }
        })
    };
    map.countries = function(cntr, options) {
        var _MAIN = L.geoJSON();
        L.Util.setOptions(_MAIN, $wt.mergeParams({
            insets: !1,
            border: !1,
            label: !1,
            properties: !1,
            style: {
                weight: 1,
                opacity: 1,
                fillOpacity: 0.2,
                fillColor: "#3388ff"
            },
            events: {
                click: !1,
                tooltip: !1
            },
            year: 2021,
            scale: 10
        }, options || {}));
        if (Array.isArray(_MAIN.options.filter)) {
            _MAIN.options.filter = $wt.map.rulesToFunction(_MAIN.options.filter)
        }
        if (Array.isArray(_MAIN.options.style)) {
            _MAIN.options.style = $wt.map.rulesToFunction(_MAIN.options.style)
        }
        _MAIN._queue = [];
        _MAIN._layers = {};
        _MAIN._countries = $wt.map.shortcutToCountriesList(cntr);
        _MAIN._originalOnEachFeature = _MAIN.options.onEachFeature;
        _MAIN.webtools = {
            countries: [],
            border: []
        };
        var getLanguage = function() {
            if (uec.lang) {
                return uec.lang
            } else if (_MAIN.options.language) {
                return _MAIN.options.language
            } else if (_MAIN.options.label && _MAIN.options.label.language) {
                return _MAIN.options.label.language
            }
            return $wt.lang()
        };
        var border = function() {
            if (_MAIN.options._getData) {
                return
            }
            if (_MAIN.options.isBorder) {
                delete _MAIN.options.onEachFeature
            }
            if (_MAIN.options.border && _MAIN.webtools.border.length > 0 && !_MAIN._border) {
                _MAIN.webtools.border = _MAIN.webtools.border.filter(function(cntr) {
                    return !cntr.match(/KS|XK/i)
                });
                _MAIN._border = map.countries(_MAIN.webtools.border, {
                    label: !1,
                    border: !1,
                    insets: !1,
                    isBorder: !0,
                    pane: "borderPane",
                    smart: !1,
                    static: _MAIN.options.static,
                    year: _MAIN.options.year,
                    scale: _MAIN.options.scale,
                    filter: _MAIN.options.filter,
                    isChoro: _MAIN.options.isChoro,
                    isBubble: _MAIN.options.isBubble,
                    style: $wt.mergeParams({
                        fill: !1,
                        opacity: 1
                    }, _MAIN.options.border || {})
                }).addTo(map);
                map.fire("countriesBorderAdd", {
                    countries: _MAIN.webtools.border
                })
            } else if (_MAIN._border) {
                _MAIN._border.setStyle($wt.mergeParams({
                    fill: !1,
                    opacity: 1
                }, _MAIN.options.border || {})).addTo(map)
            }
        };
        var switchKSLine = function() {
            if (map._useKosovo && map._useSerbia) {
                var isSmart = map._useKosovo.options.smart || !1;
                var scale = Number(map._useKosovo.options.scale);
                var zoom = map.getZoom();
                var targetLayer = map._useSerbia.mainReference;
                if (isSmart) {
                    if (zoom > 10) {
                        map._ks_01.addTo(targetLayer)
                    } else if (zoom > 8) {
                        map._ks_03.addTo(targetLayer)
                    } else {
                        map._ks_10.addTo(targetLayer)
                    }
                } else {
                    if (scale > 9) {
                        map._ks_10.addTo(targetLayer)
                    } else if (scale === 3) {
                        map._ks_03.addTo(targetLayer)
                    } else {
                        map._ks_01.addTo(targetLayer)
                    }
                }
            }
        };
        var checkKosovo = function() {
            if (map._useSerbia && map._useKosovo) {
                map._useKosovo.setStyle({
                    weight: map._useSerbia.options.weight / 2,
                    color: map._useSerbia.options.color,
                    opacity: map._useSerbia.options.opacity
                });
                if (!map._useSerbia.feature.properties.NUTS_ID) {
                    map._useSerbia.feature.properties.NUTS_ID = "RS*0";
                    setTimeout(function() {
                        map._useSerbia.setStyle({
                            fillColor: "transparent"
                        });
                        var cloneOptions = $wt.mergeParams(JSON.parse(JSON.stringify(map._useSerbia.mainReference.options)), {
                            border: !1,
                            style: $wt.mergeParams(map._useSerbia.options.style, {
                                weight: 0,
                                interactive: !1
                            })
                        });
                        var smartOrNot = (map._useSerbia.mainReference.options.smart) ? "smartcountries" : "countries";
                        map[smartOrNot]("RS*0", cloneOptions).addTo(map._useSerbia.mainReference)
                    }, 0)
                }
                if (!map._useKosovo._mask) {
                    map._useKosovo._mask = !0;
                    var ks_options = {
                        style: {
                            weight: map._useSerbia.options.weight,
                            color: "#fff",
                            opacity: 1
                        },
                        pane: "borderPane"
                    };
                    map._ks_01 = L.geoJSON($wt.map.data.kosovo["01"], ks_options);
                    map._ks_03 = L.geoJSON($wt.map.data.kosovo["03"], ks_options);
                    map._ks_10 = L.geoJSON($wt.map.data.kosovo["10"], ks_options);
                    map.on("zoomend", switchKSLine);
                    switchKSLine()
                }
                if (!map._useSerbia.options.border) {
                    map.countries("RS", map._useSerbia.options).data(function(data) {
                        L.geoJSON(data, {
                            pane: "borderPane",
                            style: {
                                weight: map._useSerbia.options.weight,
                                color: map._useSerbia.options.color,
                                fill: !1
                            }
                        }).addTo(map._useSerbia.mainReference)
                    })
                }
            }
        };
        const checkChinaAndTaiwan = () => {
            if (_china.layer) {
                _china.isBoundary = _china.layer.feature.properties.LVL_CODE === null
            }
            if (_china.layer && _china.taiwanVisible && _china.isBoundary) {
                _china.BOUNDARY = _china.BOUNDARY || _china.layer.feature;
                _china.isBoundary = !1;
                _china.refMain.removeLayer(_china.layer);
                map.countries("CN*0", _china.refMain.options).data(data => {
                    _china.NUTS = data.features[0];
                    _china.layer.feature = _china.NUTS;
                    _china.refMain.addData(_china.NUTS)
                }
                )
            } else if (_china.layer && !_china.taiwanVisible && !_china.isBoundary) {
                _china.refMain.removeLayer(_china.layer);
                _china.isBoundary = !0;
                _china.refMain.addData(_china.BOUNDARY)
            }
        }
        ;
        var exception = function(CNTR_ID, layer) {
            if (_MAIN.options.isBorder) {
                return
            }
            if (CNTR_ID === "RS") {
                layer.setStyle({
                    pane: "subOverlayPane"
                });
                if (!map._useSerbia) {
                    map._useSerbia = layer;
                    map._useSerbia.mainReference = _MAIN;
                    checkKosovo(layer)
                }
            } else if (CNTR_ID.match(/KS|XK/i)) {
                layer.setStyle({
                    pane: "hoverOverlayPane"
                });
                if (!map._useKosovo) {
                    map._useKosovo = layer;
                    checkKosovo(layer)
                }
            } else if (CNTR_ID === "TW") {
                layer.on('add', () => {
                    _china.taiwanVisible = !0;
                    checkChinaAndTaiwan()
                }
                );
                layer.on('remove', () => {
                    _china.taiwanVisible = !1;
                    checkChinaAndTaiwan()
                }
                );
                layer.setStyle({
                    pane: "hoverOverlayPane"
                })
            } else if (CNTR_ID === "CN") {
                _china.layer = layer;
                _china.refMain = _MAIN;
                layer.setStyle({
                    pane: "subOverlayPane"
                });
                layer.on('add', checkChinaAndTaiwan)
            }
        };
        var labels = function(feature, layer) {
            if (_MAIN.options.label) {
                var className = feature.properties.CNTR_ID === 'TW' ? "wtLabelItalic" : "";
                var defaultParams = {
                    mode: "hover"
                };
                if (_MAIN.options.label === !0) {
                    _MAIN.options.label = defaultParams
                }
                _MAIN.options.label = $wt.mergeParams(defaultParams, _MAIN.options.label);
                var content = '<b>' + feature.properties.CNTR_NAME + '</b>';
                if (feature.properties.NUTS_NAME) {
                    content = content + '<br>' + feature.properties.NUTS_NAME
                }
                if (_MAIN.options.label.mode === 'hover') {
                    layer.bindTooltip(content, {
                        sticky: !0,
                        direction: 'top',
                        interactive: !1,
                        opacity: 1,
                        className: 'wtLabel ' + className
                    })
                } else if (_MAIN.options.label.mode === 'fixed') {
                    var updateColor = function(config) {
                        var tooltip = layer._fixeLabel.getTooltip();
                        if (tooltip._container) {
                            tooltip._container.style.removeProperty("color");
                            if (config.labelColor) {
                                tooltip._container.style.setProperty("color", config.labelColor, "important")
                            }
                        }
                    };
                    layer._fixeLabel = L.marker(layer.feature.properties.CENTROID, {
                        icon: L.divIcon({
                            className: "wt-marker wt-point",
                            html: '<span></span>',
                            iconSize: [1, 1],
                            iconAnchor: [1, 1],
                            popupAnchor: [1, 1],
                            tooltipAnchor: [1, 1]
                        })
                    }).bindTooltip(feature.properties.NUTS_NAME || feature.properties.CNTR_NAME, {
                        sticky: !1,
                        direction: 'top',
                        interactive: !1,
                        permanent: !0,
                        opacity: 1,
                        className: 'wtLabelFix ' + className
                    }).addTo(map);
                    layer.on("_setStyle", updateColor);
                    updateColor(layer.options)
                }
            }
        };
        const resetUse = (id) => {
            map.use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', "#" + (id || "none"))
        }
        ;
        const useUpdate = () => {
            if (!map.use) {
                map.use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
                map.use.id = "use_" + map.id;
                map.use.setAttribute('tabindex', '-1');
                map.use.addEventListener("focus", resetUse)
            }
            let whereToMove = map.ui.querySelector('.leaflet-border-pane svg g') || map.ui.querySelector('.leaflet-overlay-pane svg g');
            if (whereToMove) {
                whereToMove.appendChild(map.use)
            }
        }
        ;
        map.on("countriesBorderAdd", () => $wt.defer(useUpdate, 250));
        var accessibility = function(feature, layer) {
            layer.on({
                add: function(e) {
                    var srcLayer = e.target;
                    var properties = srcLayer.feature.properties || {};
                    var CNTR_NAME = properties.CNTR_NAME || "";
                    var NUTS_NAME = properties.NUTS_NAME || !1;
                    var content = (NUTS_NAME) ? CNTR_NAME + ", " + NUTS_NAME : CNTR_NAME;
                    if (content && srcLayer._path) {
                        srcLayer._path.setAttribute("aria-label", content)
                    }
                    if (srcLayer._events.click) {
                        srcLayer.options.interactive = !0;
                        srcLayer.options.clickable = !0;
                        if (srcLayer._path) {
                            var isInsets = !1;
                            var current = srcLayer._path;
                            while (current.parentNode) {
                                current = current.parentNode;
                                if (current.className && current.className.indexOf && current.className.indexOf("wt-insets") > -1) {
                                    isInsets = !0;
                                    break
                                }
                            }
                            if (isInsets) {
                                return
                            }
                            srcLayer._path.setAttribute("id", "focus" + srcLayer._leaflet_id);
                            useUpdate();
                            srcLayer._path.addEventListener("mouseover", function() {
                                map.use.disabled = !0;
                                document.activeElement.blur()
                            });
                            srcLayer._path.addEventListener("mouseout", () => {
                                map.use.disabled = !1
                            }
                            );
                            srcLayer._path.addEventListener("focus", () => {
                                if (!map.use.disabled) {
                                    resetUse(srcLayer._path.id);
                                    srcLayer._path.setAttribute("fill-opacity", srcLayer.options.fillOpacity / 2)
                                }
                            }
                            );
                            srcLayer._path.addEventListener("blur", () => {
                                map.use.disabled = !1;
                                resetUse();
                                srcLayer._path.setAttribute("fill-opacity", srcLayer.options.fillOpacity)
                            }
                            );
                            let _clickAsLink = srcLayer._clickAsLink ? "link" : "button";
                            srcLayer._path.setAttribute("role", _clickAsLink);
                            if (srcLayer._clickAsLink) {
                                srcLayer._path.setAttribute("href", $wt.filterHtml(srcLayer._clickAsLink))
                            }
                            srcLayer._path.setAttribute("tabindex", "0")
                        }
                    } else if (!srcLayer.options.clickable && srcLayer._path) {
                        srcLayer._path.setAttribute("class", "leaflet-interactive leaflet-grab")
                    }
                }
            })
        };
        var add = function() {
            if (_MAIN.options.isBorder && (_MAIN.options.isChoro || _MAIN.options.isBubble)) {
                delete _MAIN.options.filter;
                delete _MAIN.options.properties
            }
            _MAIN.options.onEachFeature = function(feature, layer) {
                if (_MAIN.options.isBorder) {
                    return
                }
                layer._map = map;
                exception(feature.properties.CNTR_ID, layer);
                labels(feature, layer);
                if (typeof _MAIN._originalOnEachFeature === "function") {
                    _MAIN._originalOnEachFeature(feature, layer)
                }
                if (_MAIN.options.url) {
                    _MAIN.options.events.click = _MAIN.options.url.replace(/%([\w_\-\:]+)%/ig, '{$1}')
                }
                if (_MAIN.options.events) {
                    $wt.map.layersEventsManager(layer, _MAIN.options.events)
                }
                accessibility(feature, layer);
                $wt.defer(function() {
                    map.fire('onEachFeatureEnd', {
                        layer: _MAIN,
                        options: _MAIN.options
                    });
                    _MAIN.fire("draw", {
                        data: _MAIN.toGeoJSON()
                    }, !0)
                });
                if (!_MAIN.options.isBorder) {
                    _MAIN.fire("each", {
                        layer: layer
                    }, !0)
                }
            }
            ;
            for (var i = 0, l = _MAIN._countries.length; i < l; i++) {
                var countriesToRequest = [];
                var nuts = _MAIN._countries[i];
                for (var ii = 0, ll = nuts.countries.length; ii < ll; ii++) {
                    var country = (nuts.countries[ii]).toUpperCase();
                    _MAIN.webtools.countries.push(country);
                    countriesToRequest.push(country);
                    if (nuts.level === 0 && country.indexOf("-") === -1) {
                        _MAIN.webtools.border.push(country + "*0")
                    } else {
                        _MAIN.webtools.border.push(country)
                    }
                }
                if (!_MAIN._finishAll && countriesToRequest.length) {
                    _queue.push({
                        countries: countriesToRequest,
                        level: nuts.level,
                        scale: _MAIN.options.scale,
                        year: _MAIN.options.year,
                        properties: _MAIN.options.properties,
                        language: getLanguage(),
                        callback: function(data) {
                            if (!_MAIN.allData) {
                                _MAIN.allData = data
                            } else {
                                _MAIN.allData.features = _MAIN.allData.features.concat(data.features)
                            }
                            if (!_MAIN._queue[0]) {
                                if (!_MAIN.options.isBorder) {
                                    if (typeof _MAIN.options._getData === 'function') {
                                        _MAIN.options._getData(_MAIN.allData, _MAIN);
                                        setTimeout(function() {
                                            _MAIN.options._getData = !0
                                        }, 0)
                                    } else {
                                        _MAIN.fire("loaded", {
                                            data: _MAIN.allData
                                        }, !0)
                                    }
                                }
                                _MAIN._finishAll = !0
                            }
                            if (!_MAIN.options._getData) {
                                _MAIN.addData(data)
                            }
                            border()
                        }
                    })
                }
            }
            if (_queue[0]) {
                var first = _queue[0];
                _queue = _queue.slice(1);
                request(first, _MAIN)
            } else if (_MAIN.options._getData) {
                delete _MAIN.options._getData;
                _MAIN.addData(_MAIN.allData);
                border()
            } else {
                border()
            }
            if (!_MAIN.options.isBorder) {
                map.fire("attributionUpdate", {
                    countries: _MAIN.webtools.countries
                })
            }
            map.fire("insetsAdd", {
                countries: _MAIN.webtools.countries,
                options: _MAIN.options,
                layer: _MAIN
            })
        };
        var remove = function() {
            if (_MAIN._border) {
                map.removeLayer(_MAIN._border)
            }
            map._useKosovo = !1;
            map._useSerbia = !1;
            map.off("zoomend", switchKSLine);
            if (!_MAIN.options.isBorder) {
                map.fire("attributionUpdate", {
                    remove: _MAIN.webtools.countries
                })
            }
            map.fire("insetsRemove", {
                countries: _MAIN.webtools.countries,
                options: _MAIN.options,
                layer: _MAIN
            })
        };
        _MAIN.filter = function(fnc) {
            if (Array.isArray(fnc)) {
                this.options.filter = $wt.map.rulesToFunction(fnc)
            } else {
                this.options.filter = fnc
            }
            return this
        }
        ;
        _MAIN.popup = function(fnc, options) {
            this.options.events.click = {
                type: "popup",
                content: fnc,
                options: $wt.mergeParams({}, options || {})
            };
            return this
        }
        ;
        _MAIN.tooltip = function(fnc, options) {
            this.options.events.tooltip = {
                content: fnc,
                options: $wt.mergeParams({}, options || {})
            };
            return this
        }
        ;
        _MAIN.info = function(fnc, options) {
            this.options.events.click = {
                type: "info",
                content: fnc,
                options: $wt.mergeParams({
                    center: !0
                }, options || {})
            };
            return this
        }
        ;
        _MAIN.insets = function(fnc) {
            this.options.insets = fnc;
            return this
        }
        ;
        _MAIN.click = function(fnc) {
            this.options.events.click = fnc;
            return this
        }
        ;
        _MAIN.border = function(fnc) {
            this.options.border = fnc;
            return this
        }
        ;
        _MAIN.style = function(fnc) {
            if (Array.isArray(fnc)) {
                this.options.style = $wt.map.rulesToFunction(fnc)
            } else {
                this.options.style = fnc
            }
            return this
        }
        ;
        _MAIN.data = function(fnc) {
            this.options._getData = fnc;
            add();
            return this
        }
        ;
        _MAIN.labels = function(options) {
            this.options.label = $wt.mergeParams({
                mode: "hover"
            }, options || {});
            return this
        }
        ;
        _MAIN.on({
            add: add,
            remove: remove
        });
        return _MAIN
    }
    ;
    map.on({
        countriesRequest: request
    })
});
L.Map.addInitHook(function() {
    var map = this
      , BOUNDS_WORLD = $wt.map.data.bounds
      , _insets = Object.keys($wt.map.data.outers);
    var chunk = function(arr, len) {
        var chunks = []
          , i = 0
          , n = arr.length;
        while (i < n) {
            chunks.push(arr.slice(i, i += len))
        }
        return chunks
    };
    var getVisibleCountries = function(from) {
        var bounds = map.getBounds()
          , cntr = [];
        for (var id in BOUNDS_WORLD) {
            var ref = BOUNDS_WORLD[id];
            var cntr_id = id.substring(0, 2);
            if (bounds.overlaps([[ref[0], ref[1]], [ref[2], ref[3]]])) {
                if (!cntr[cntr_id]) {
                    cntr.push(cntr_id)
                }
            }
        }
        if (from && Array.isArray(from._countries) && from._options.insets) {
            from._countries.forEach(function(item) {
                var country = item.slice(0, 2);
                if (item.indexOf("-") === -1 && _insets.indexOf(country) > -1 && cntr.indexOf(country) === -1) {
                    cntr.push(country)
                }
            })
        }
        return cntr.filter(function(a, index) {
            return cntr.indexOf(a) === index
        })
    };
    map.getVisibleCountries = getVisibleCountries;
    var smartcountries = function(countries, options) {
        var zoom, currentZoom, timer;
        var _MAIN = L.featureGroup();
        var _CACHE = {
            "60": [],
            "20": [],
            "10": [],
            "03": [],
            "01": []
        };
        _MAIN._countries = countries;
        options = $wt.mergeParams({
            static: !1,
            scale: 10,
            events: {
                tooltip: !1,
                click: !1
            }
        }, options);
        _MAIN._options = options;
        countries = $wt.map.shortcutToCountriesList(countries);
        var createRequest = function(visibleCountry, mode) {
            zoom = map.getZoom();
            if (mode) {
                zoom = "60"
            } else if (zoom <= 4) {
                zoom = "60"
            } else if (zoom <= 6) {
                zoom = "20"
            } else if (zoom <= 8) {
                zoom = "10"
            } else if (zoom <= 10) {
                zoom = "03"
            } else if (zoom <= 18) {
                zoom = "01"
            }
            if (currentZoom && currentZoom !== zoom) {
                _CACHE[currentZoom] = [];
                _CACHE[zoom] = [];
                clear()
            }
            currentZoom = zoom;
            var range = 10;
            for (var x in countries) {
                var level = countries[x].level;
                var toRequest = countries[x].countries.filter(function(cntr) {
                    var isVisible = visibleCountry.indexOf(cntr.slice(0, 2)) > -1;
                    var isNoCache = _CACHE[zoom].indexOf(cntr) === -1;
                    if (isVisible && isNoCache) {
                        _CACHE[zoom].push(cntr);
                        return cntr
                    }
                });
                [].forEach.call(chunk(toRequest, range), function(arr) {
                    $wt.queue.push({
                        params: map.getUEC(),
                        mode: mode,
                        zoom: zoom,
                        level: level,
                        countries: arr
                    }, renderQueue)
                })
            }
        };
        var renderQueue = function() {
            var mode = this.mode;
            var zoom = this.zoom;
            var level = this.level;
            var cntrs = this.countries;
            options.smart = !0;
            if (!mode) {
                options.scale = zoom
            }
            map.countries([{
                level: level,
                countries: cntrs
            }], options).addTo(_MAIN);
            $wt.queue.finish()
        };
        var check = function() {
            clearTimeout(timer);
            timer = setTimeout(function() {
                createRequest(getVisibleCountries(_MAIN), options.static)
            }, 100)
        };
        var clear = function() {
            _MAIN.clearLayers()
        };
        var add = function() {
            check();
            map.on({
                moveend: check
            });
            map.fire("insetsAdd", {
                countries: _MAIN._countries,
                options: _MAIN._options,
                layer: _MAIN,
                force: !0
            })
        };
        var remove = function() {
            map.off({
                moveend: check
            });
            map.fire("insetsRemove", {
                countries: _MAIN._countries,
                options: _MAIN._options,
                layer: _MAIN,
                force: !0
            })
        };
        _MAIN.filter = function(fnc) {
            options.filter = fnc;
            return this
        }
        ;
        _MAIN.popup = function(fnc, _options) {
            options.events.click = {
                type: "popup",
                content: fnc,
                options: $wt.mergeParams({}, _options || {})
            };
            return this
        }
        ;
        _MAIN.tooltip = function(fnc, _options) {
            options.events.tooltip = {
                content: fnc,
                options: $wt.mergeParams({}, _options || {})
            };
            return this
        }
        ;
        _MAIN.info = function(fnc, _options) {
            options.events.click = {
                type: "info",
                content: fnc,
                options: $wt.mergeParams({
                    center: !0
                }, _options || {})
            };
            return this
        }
        ;
        _MAIN.insets = function(fnc) {
            options.insets = fnc;
            return this
        }
        ;
        _MAIN.click = function(fnc) {
            options.events.click = fnc;
            return this
        }
        ;
        _MAIN.border = function(fnc) {
            options.border = fnc;
            return this
        }
        ;
        _MAIN.style = function(fnc) {
            options.style = fnc;
            return this
        }
        ;
        _MAIN.on({
            add: add,
            remove: remove
        });
        return _MAIN
    };
    map.smartcountries = function(countries, options) {
        return new smartcountries(countries,options)
    }
});
L.Map.addInitHook(function() {
    var map = this;
    map.geojson = function(data, options) {
        var _MAIN = new L.geoJSON();
        var _MARKERS = [];
        var _LAYERS = [];
        var _GEOJSON = {
            type: 'FeatureCollection',
            features: []
        };
        var _OPTIONS = $wt.mergeParams({
            events: {
                tooltip: !1,
                click: !1
            }
        }, options || {});
        _OPTIONS._onEachFeature = _OPTIONS.onEachFeature || !1;
        var process = function(geo) {
            if (_OPTIONS._getData) {
                delete _OPTIONS._getData;
                return
            }
            _MAIN.fire("loaded", {
                data: geo
            });
            for (var x in geo.features) {
                var feature = geo.features[x];
                var type = feature.geometry.type;
                var coordinates = feature.geometry.coordinates;
                if (type === "MultiPoint") {
                    for (var y in coordinates) {
                        _MARKERS.push({
                            "type": "Feature",
                            "properties": feature.properties,
                            "geometry": {
                                "type": "Point",
                                "coordinates": coordinates[y]
                            }
                        })
                    }
                } else if (type === "Point") {
                    _MARKERS.push(feature)
                } else {
                    _LAYERS.push(feature)
                }
            }
            if (_MARKERS.length) {
                map.markers({
                    "type": "FeatureCollection",
                    "features": _MARKERS
                }, _OPTIONS).addTo(_MAIN)
            }
            if (_LAYERS.length) {
                _OPTIONS.onEachFeature = function(feature, layer) {
                    _MAIN.fire("each", {
                        layer: layer
                    });
                    $wt.defer(function() {
                        _MAIN.fire("draw", {
                            data: multiLayer.toGeoJSON()
                        })
                    });
                    if (_OPTIONS._onEachFeature) {
                        _OPTIONS._onEachFeature(feature, layer)
                    }
                }
                ;
                var multiLayer = L.geoJSON(_LAYERS, _OPTIONS).addTo(_MAIN);
                if (multiLayer.eachLayer) {
                    multiLayer.eachLayer(function(lay) {
                        if (lay.feature.properties && _OPTIONS.events) {
                            $wt.map.layersEventsManager(lay, _OPTIONS.events)
                        }
                    })
                }
            }
        };
        var queue = function() {
            var srcData = data[0];
            if (srcData) {
                data = data.slice(1);
                aggregate(srcData)
            } else {
                map.fire("hideLoading");
                if (typeof _OPTIONS._getData === 'function') {
                    _OPTIONS._getData(_GEOJSON);
                    _OPTIONS._getData = !0
                } else {
                    data = !1;
                    process(_GEOJSON)
                }
            }
        };
        var aggregate = function(src) {
            if (typeof src === 'object') {
                _GEOJSON.features = _GEOJSON.features.concat(src.features);
                queue()
            } else if (typeof src === 'string') {
                map.fire("showLoading");
                $wt.getFile({
                    url: src,
                    type: "json",
                    success: function(json) {
                        _GEOJSON.features = _GEOJSON.features.concat(json.features);
                        queue()
                    },
                    error: function() {
                        var errorMessage = "WTINFO: Geojson data was not loaded from: " + src;
                        if (_MAIN._events.error) {
                            _MAIN.fire("error", {
                                message: errorMessage,
                                status: 404
                            }, !0)
                        } else {
                            console.error(errorMessage)
                        }
                        queue();
                        map.fire("hideLoading")
                    }
                })
            }
        };
        var add = function() {
            if (data) {
                data = (Array.isArray(data)) ? data : [data];
                queue(data)
            }
        };
        var remove = function() {
            _MARKERS = []
        };
        _MAIN.filter = function(fnc) {
            _OPTIONS.filter = fnc;
            return this
        }
        ;
        _MAIN.popup = function(fnc, options) {
            _OPTIONS.events.click = {
                type: "popup",
                content: fnc,
                options: $wt.mergeParams({}, options || {})
            };
            return this
        }
        ;
        _MAIN.tooltip = function(fnc, options) {
            _OPTIONS.events.tooltip = {
                content: fnc,
                options: $wt.mergeParams({}, options || {})
            };
            return this
        }
        ;
        _MAIN.info = function(fnc, options) {
            _OPTIONS.events.click = {
                type: "info",
                content: fnc,
                options: $wt.mergeParams({
                    center: !0,
                    selected: {
                        icon: "info",
                        size: 60,
                        color: "#444"
                    }
                }, options || {})
            };
            return this
        }
        ;
        _MAIN.click = function(fnc) {
            _OPTIONS.events.click = fnc;
            return this
        }
        ;
        _MAIN.cluster = function(fnc) {
            if (fnc === !1) {
                _OPTIONS.cluster = !1
            } else if (typeof fnc === 'function') {
                _OPTIONS.icons.cluster = fnc
            } else {
                _OPTIONS.cluster = $wt.mergeParams(_OPTIONS.cluster, fnc)
            }
            return this
        }
        ;
        _MAIN.icon = function(fnc) {
            if (typeof fnc === 'function') {
                _OPTIONS.icons.marker = fnc
            } else {
                _OPTIONS.icons = $wt.mergeParams(_OPTIONS.icons, fnc)
            }
            return this
        }
        ;
        _MAIN.group = function(fnc) {
            _OPTIONS.group = fnc;
            return this
        }
        ;
        _MAIN.style = function(fnc) {
            _OPTIONS.style = fnc;
            return this
        }
        ;
        _MAIN.data = function(fnc) {
            _OPTIONS._getData = fnc;
            add();
            return this
        }
        ;
        _MAIN.on({
            add: add,
            remove: remove
        });
        return _MAIN
    }
});
$wt.extend({
    hexToRgb: function(hex) {
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
            return r + r + g + g + b + b
        });
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null
    },
    rgbToHex: function(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    },
    pickHex: function(color1, color2, weight) {
        var ratio = weight / 100;
        var c1 = $wt.hexToRgb(color1);
        var c2 = $wt.hexToRgb(color2);
        var w = ratio * 2 - 1;
        var w1 = (w + 1) / 2;
        var w2 = 1 - w1;
        return $wt.rgbToHex(Math.round(c1.r * w1 + c2.r * w2), Math.round(c1.g * w1 + c2.g * w2), Math.round(c1.b * w1 + c2.b * w2))
    }
});
L.Map.addInitHook(function() {
    var map = this
      , isRefresh = !1
      , series = [];
    var createLegendContent = function(params, data) {
        var items = '';
        var range, i;
        if (params.legend.type === 'list') {
            params.ranges.map(function(range) {
                items += $wt.template(params.legend._template.list, {
                    value: range.legend || '',
                    style: ';background-color: ' + getRangeColor(range, params) + ';'
                })
            });
            items = '<ul>' + items + '</ul>'
        } else if (params.legend.type === 'gradient') {
            var color = "";
            var rules = [];
            for (i = 0; i < params.ranges.length; i++) {
                range = params.ranges[i];
                var stop = range.stop;
                color = getRangeColor(range, params);
                if (stop !== undefined && color) {
                    rules.push(color + " " + stop + "%")
                }
            }
            var min = params.legend.min || data.min;
            var max = params.legend.max || data.max;
            items = $wt.template(params.legend._template.gradient, {
                style: $wt.template(["background: -moz-linear-gradient(left, {colors});", "background: -webkit-linear-gradient(left, {colors});", "background: linear-gradient(to right, {colors});", "filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='{start}', endColortr='{end}',GradientType=1 );"].join(""), {
                    colors: rules.join(","),
                    start: getRangeColor(params.ranges[0], params),
                    end: color
                }),
                min: $wt.formatNumber(min, params.format),
                max: $wt.formatNumber(max, params.format)
            })
        }
        var select = $wt.map.createChoroSelect(data, params);
        var template = params.legend.template;
        template = (typeof template === "string") ? template : (window[template] || template)();
        return $wt.template(template, {
            select: select,
            _header_: params.legend.header || '',
            header: data.title || params.legend.header,
            content: items,
            _footer_: params.legend.footer || '',
            footer: params.legend.footer || ''
        })
    };
    var getRangeColor = function(range, params) {
        var style = $wt.map.getRangeStyle(range, params);
        return style.fillColor || style.color || "#fff"
    };
    var getRegionStyle = function(value, params) {
        var rangeLength = params.ranges.length;
        for (var i = 0; i < rangeLength; i++) {
            var range = params.ranges[i];
            var inRangeNa = !range.from && !range.to;
            var inRange = value >= range.from && value < range.to;
            var inRangeAndBeyond = (value >= range.from && (range.to === "+" || typeof range.to === "undefined"));
            var inRangeAndBelow = (value < range.to && (range.from === "-" || typeof range.from === "undefined"));
            if ((!$wt.map.notSimpleConvertibleNumber(value) && (inRange || inRangeAndBeyond || inRangeAndBelow)) || inRangeNa) {
                return $wt.map.getRangeStyle(range, params)
            }
        }
        return {
            fillColor: '#fff'
        }
    };
    var configureParams = function(data, params) {
        var defaultParams = {
            dataset: {
                options: {
                    sheets: null,
                    sheets_index: 0,
                    sheets_order: 'asc'
                }
            },
            ranges: [],
            legend: {
                type: "list",
                position: "bottomright",
                template: "{select}{_header_}{content}{_footer_}",
                class: "chorojson-legend-container",
                _template: {
                    list: "<li><span style=\"{style}\"></span>{value}</li>",
                    gradient: "<div style=\"{style}\" class=\"chorojson-legend-gradient\"></div><div style='clear:both'><span>{min}</span> <span style=\"float: right;\">{max}</span></div>"
                }
            },
            country: {
                border: !1,
                full: !1,
                year: 2021,
                scale: 10
            },
            styles: {
                "theme_1_20": {
                    "fillColor": "#cddcf0"
                },
                "theme_1_40": {
                    "fillColor": "#aab9e1"
                },
                "theme_1_60": {
                    "fillColor": "#829bcd"
                },
                "theme_1_80": {
                    "fillColor": "#6487c3"
                },
                "theme_1_100": {
                    "fillColor": "#466eb4"
                },
                "theme_1_+": {
                    "fillColor": "#2d50a0"
                },
                "blue_1": {
                    "fillColor": "#cddcf0"
                },
                "blue_2": {
                    "fillColor": "#aab9e1"
                },
                "blue_3": {
                    "fillColor": "#829bcd"
                },
                "blue_4": {
                    "fillColor": "#6487c3"
                },
                "blue_5": {
                    "fillColor": "#466eb4"
                },
                "blue_6": {
                    "fillColor": "#2d50a0"
                },
                "theme_2_25": {
                    "fillColor": "#e1cddc"
                },
                "theme_2_50": {
                    "fillColor": "#cda0c3"
                },
                "theme_2_75": {
                    "fillColor": "#be78aa"
                },
                "theme_2_100": {
                    "fillColor": "#af4b91"
                },
                "theme_2_+": {
                    "fillColor": "#9b3278"
                },
                "theme_2_++": {
                    "fillColor": "#8c2873"
                },
                "purple_1": {
                    "fillColor": "#e1cddc"
                },
                "purple_2": {
                    "fillColor": "#cda0c3"
                },
                "purple_3": {
                    "fillColor": "#be78aa"
                },
                "purple_4": {
                    "fillColor": "#af4b91"
                },
                "purple_5": {
                    "fillColor": "#9b3278"
                },
                "purple_6": {
                    "fillColor": "#8c2873"
                },
                "theme_3_25": {
                    "fillColor": "#fae6c3"
                },
                "theme_3_50": {
                    "fillColor": "#f0cd91"
                },
                "theme_3_75": {
                    "fillColor": "#ecb95f"
                },
                "theme_3_100": {
                    "fillColor": "#e6a532"
                },
                "theme_3_+": {
                    "fillColor": "#dc8c2d"
                },
                "theme_3_++": {
                    "fillColor": "#d76e2d"
                },
                "orange_1": {
                    "fillColor": "#fae6c3"
                },
                "orange_2": {
                    "fillColor": "#f0cd91"
                },
                "orange_3": {
                    "fillColor": "#ecb95f"
                },
                "orange_4": {
                    "fillColor": "#e6a532"
                },
                "orange_5": {
                    "fillColor": "#dc8c2d"
                },
                "orange_6": {
                    "fillColor": "#d76e2d"
                },
                "theme_4_25": {
                    "fillColor": "#c8e1f5"
                },
                "theme_4_50": {
                    "fillColor": "#96c8eb"
                },
                "theme_4_75": {
                    "fillColor": "#64b4e6"
                },
                "theme_4_100": {
                    "fillColor": "#00a0e1"
                },
                "theme_4_+": {
                    "fillColor": "#0087cd"
                },
                "theme_4_++": {
                    "fillColor": "#1978be"
                },
                "sky_1": {
                    "fillColor": "#c8e1f5"
                },
                "sky_2": {
                    "fillColor": "#96c8eb"
                },
                "sky_3": {
                    "fillColor": "#64b4e6"
                },
                "sky_4": {
                    "fillColor": "#00a0e1"
                },
                "sky_5": {
                    "fillColor": "#0087cd"
                },
                "sky_6": {
                    "fillColor": "#1978be"
                },
                "theme_5_25": {
                    "fillColor": "#d7e6c8"
                },
                "theme_5_50": {
                    "fillColor": "#b4d29b"
                },
                "theme_5_75": {
                    "fillColor": "#96be6e"
                },
                "theme_5_100": {
                    "fillColor": "#7daf4b"
                },
                "theme_5_+": {
                    "fillColor": "#5f9b4b"
                },
                "theme_5_++": {
                    "fillColor": "#41914b"
                },
                "green_1": {
                    "fillColor": "#d7e6c8"
                },
                "green_2": {
                    "fillColor": "#b4d29b"
                },
                "green_3": {
                    "fillColor": "#96be6e"
                },
                "green_4": {
                    "fillColor": "#7daf4b"
                },
                "green_5": {
                    "fillColor": "#5f9b4b"
                },
                "green_6": {
                    "fillColor": "#41914b"
                },
                "theme_6_25": {
                    "fillColor": "#e6c8be"
                },
                "theme_6_50": {
                    "fillColor": "#d7968c"
                },
                "theme_6_75": {
                    "fillColor": "#c86e64"
                },
                "theme_6_100": {
                    "fillColor": "#b93c46"
                },
                "theme_6_+": {
                    "fillColor": "#aa192d"
                },
                "theme_6_++": {
                    "fillColor": "#961e2d"
                },
                "red_1": {
                    "fillColor": "#e6c8be"
                },
                "red_2": {
                    "fillColor": "#d7968c"
                },
                "red_3": {
                    "fillColor": "#c86e64"
                },
                "red_4": {
                    "fillColor": "#b93c46"
                },
                "red_5": {
                    "fillColor": "#aa192d"
                },
                "red_6": {
                    "fillColor": "#961e2d"
                },
                "theme_7_25": {
                    "fillColor": "#e6ebc3"
                },
                "theme_7_50": {
                    "fillColor": "#d7dc91"
                },
                "theme_7_75": {
                    "fillColor": "#c8cd64"
                },
                "theme_7_100": {
                    "fillColor": "#b9c337"
                },
                "theme_7_+": {
                    "fillColor": "#a0aa37"
                },
                "theme_7_++": {
                    "fillColor": "#829632"
                },
                "olive_1": {
                    "fillColor": "#e6ebc3"
                },
                "olive_2": {
                    "fillColor": "#d7dc91"
                },
                "olive_3": {
                    "fillColor": "#c8cd64"
                },
                "olive_4": {
                    "fillColor": "#b9c337"
                },
                "olive_5": {
                    "fillColor": "#a0aa37"
                },
                "olive_6": {
                    "fillColor": "#829632"
                },
                "theme_8_25": {
                    "fillColor": "#cde6e6"
                },
                "theme_8_50": {
                    "fillColor": "#a0d2d2"
                },
                "theme_8_75": {
                    "fillColor": "#73bebe"
                },
                "theme_8_100": {
                    "fillColor": "#41afaa"
                },
                "theme_8_+": {
                    "fillColor": "#23969b"
                },
                "theme_8_++": {
                    "fillColor": "#2d828c"
                },
                "cyan_1": {
                    "fillColor": "#cde6e6"
                },
                "cyan_2": {
                    "fillColor": "#a0d2d2"
                },
                "cyan_3": {
                    "fillColor": "#73bebe"
                },
                "cyan_4": {
                    "fillColor": "#41afaa"
                },
                "cyan_5": {
                    "fillColor": "#23969b"
                },
                "cyan_6": {
                    "fillColor": "#2d828c"
                },
                "theme_9_25": {
                    "fillColor": "#f0d2b9"
                },
                "theme_9_50": {
                    "fillColor": "#e6aa82"
                },
                "theme_9_75": {
                    "fillColor": "#dc8755"
                },
                "theme_9_100": {
                    "fillColor": "#d7642d"
                },
                "theme_9_+": {
                    "fillColor": "#c64c28"
                },
                "theme_9_++": {
                    "fillColor": "#b91e23"
                },
                "salmon_1": {
                    "fillColor": "#f0d2b9"
                },
                "salmon_2": {
                    "fillColor": "#e6aa82"
                },
                "salmon_3": {
                    "fillColor": "#dc8755"
                },
                "salmon_4": {
                    "fillColor": "#d7642d"
                },
                "salmon_5": {
                    "fillColor": "#c64c28"
                },
                "salmon_6": {
                    "fillColor": "#b91e23"
                },
                "bicolor_1": {
                    "fillColor": "#d76e2d"
                },
                "bicolor_2": {
                    "fillColor": "#e6a532"
                },
                "bicolor_3": {
                    "fillColor": "#f0cd91"
                },
                "bicolor_4": {
                    "fillColor": "#aab9e1"
                },
                "bicolor_5": {
                    "fillColor": "#6487c3"
                },
                "bicolor_6": {
                    "fillColor": "#2d50a0"
                },
                "typology_1": {
                    "fillColor": "#b91e23"
                },
                "typology_2": {
                    "fillColor": "#ecb95f"
                },
                "typology_3": {
                    "fillColor": "#96be6e"
                },
                "na": {
                    "fillColor": "#96989B"
                },
                "not_available": {
                    "fillColor": "#96989B"
                }
            },
            format: {
                unit: '',
                decimals: 0,
                separator: {
                    thousands: ' ',
                    decimals: ','
                }
            },
            events: {
                click: !1,
                tooltip: {
                    content: "<div><span class='chorojson-tooltip-header'><b>{CNTR_NAME}</b> {NUTS_NAME}</span><span class='chorojson-tooltip-text'>{text}</span><span class='chorojson-tooltip-value'>{value}</span></div>",
                    options: {
                        direction: "top",
                        sticky: !0,
                        className: "chorojson-tooltip"
                    }
                }
            }
        };
        if (typeof (params.legend || {}).template === "object") {
            params.legend._template = params.legend.template;
            delete params.legend.template
        }
        params.dataset = data;
        params = $wt.map.tooltipConversion(params, defaultParams);
        return $wt.mergeParams(defaultParams, params)
    };
    var onDataChange = function(mainLayer, data, reset) {
        var params = mainLayer.params;
        if (!mainLayer._originalOnEachFeature) {
            mainLayer._originalOnEachFeature = params.country.onEachFeature || !1;
            delete params.country.onEachFeature
        }
        var paint = function(feature) {
            var regionStyle = {};
            var featureData = $wt.map.getFeatureData(feature, data);
            var val = featureData ? Number(featureData.value) : null;
            if (val === null) {
                return $wt.mergeParams({
                    fillColor: "transparent",
                    color: "#444",
                    fillOpacity: 0.5,
                    weight: 1
                }, params.country.full || {})
            }
            var ORICEN = (val / data.max) * 100;
            var CEN = ((val - data.min) / (data.max - data.min)) * 100;
            var styles = Object.keys(data.style);
            if (styles.length) {
                var start = styles[0];
                for (var stop in data.style) {
                    var stopVal = Number(stop);
                    var isRegionStyleUndefined = Object.keys(regionStyle).length === 0;
                    if (CEN <= stopVal && isRegionStyleUndefined) {
                        var startC = data.style[start].fillColor;
                        var stopC = data.style[stop].fillColor;
                        if (startC && stopC) {
                            regionStyle.fillColor = $wt.pickHex(startC, stopC, CEN);
                            var hex = !1;
                            if (ctx) {
                                var coordsX = (CEN * 3);
                                coordsX = (coordsX >= 300) ? 299 : (coordsX === 0) ? 1 : coordsX;
                                var p = ctx.getImageData(coordsX, 10, 1, 1).data;
                                hex = "#" + ("000000" + $wt.rgbToHex(p[0], p[1], p[2])).slice(-6)
                            }
                            if ($wt.urlParams.wtdebug) {
                                var str = "VAL\t" + featureData.value + "\n\t" + (CEN + "").split('.')[0] + "% of GRADIANT\n\t" + (ORICEN + "").split('.')[0] + "% of MAX VALUE " + data.max;
                                console.log(str, (CEN * 3));
                                console.log("STAR:" + startC + " %c ... ", 'background: ' + startC + ';');
                                console.log("STOP:" + stopC + " %c ... ", 'background: ' + stopC + ';');
                                console.log("OLDE:" + regionStyle.fillColor + " %c ... ", 'background: ' + regionStyle.fillColor + ';');
                                console.log("%c NEW " + hex + " %c ... ", 'font-weight:bold; color: #fff; background-color: #444', 'background: ' + hex + ';')
                            }
                            if (hex) {
                                regionStyle.fillColor = hex
                            }
                        }
                    }
                    start = stop
                }
            }
            if (data.ranges[0].from || data.ranges[0].to) {
                regionStyle = getRegionStyle(val, params)
            }
            return $wt.mergeParams({
                fillOpacity: 1,
                fillColor: "#fff",
                weight: 1,
                opacity: 1,
                color: "#444"
            }, regionStyle)
        };
        var each = function(feature, layer) {
            var featureData = $wt.map.getFeatureData(feature, data);
            layer.unbindTooltip();
            if (featureData) {
                layer.feature.properties = $wt.mergeParams(layer.feature.properties, {
                    value: $wt.formatNumber(featureData.value, params.format),
                    original: featureData.value,
                    text: featureData.text || "",
                    countryName: feature.properties.CNTR_NAME || '',
                    countryId: feature.properties.CNTR_ID || '',
                    regionName: feature.properties.NUTS_NAME || '',
                    regionId: feature.properties.NUTS_ID || ''
                });
                $wt.map.layersEventsManager(layer, params.events)
            }
            if (typeof mainLayer._originalOnEachFeature === 'function') {
                mainLayer._originalOnEachFeature(feature, layer)
            }
        };
        var refresh = function() {
            [].forEach.call(series, function(layer) {
                layer.setStyle(paint(layer.feature));
                each(layer.feature, layer)
            });
            isRefresh = !1
        };
        if (mainLayer._legend && mainLayer._legend.remove) {
            mainLayer._legend.remove()
        }
        mainLayer._legend = map.legend({
            content: createLegendContent(params, data),
            position: params.legend.position,
            class: params.legend.class
        }).addTo(map);
        var canvas = !1;
        var ctx = !1;
        var gradiant = map.ui.querySelector('.chorojson-legend-gradient');
        if (gradiant) {
            canvas = document.createElement("canvas");
            canvas.setAttribute('style', 'width: 100%; height: 30px;');
            ctx = canvas.getContext("2d");
            gradiant.appendChild(canvas);
            var grad = ctx.createLinearGradient(0, 0, 300, 0);
            var altSize = 100 / params.ranges.length;
            params.ranges.map(function(entry, index) {
                var col = getRangeColor(entry, params);
                var per = (entry.stop || (index * altSize)) / 100;
                grad.addColorStop(per, col)
            });
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, 300, 300)
        }
        if (isRefresh) {
            refresh()
        } else if (mainLayer.countries) {
            mainLayer.addLayer(mainLayer.countries);
            refresh()
        } else {
            mainLayer.countries = map.smartcountries(Object.keys(data.values), $wt.mergeParams({
                isChoro: !0,
                static: !0,
                onEachFeature: function(feature, layer) {
                    series.push(layer);
                    $wt.defer( () => refresh(mainLayer), 250)
                }
            }, params.country)).filter(function(feature) {
                if (params.country.full) {
                    return !0
                }
                return !!$wt.map.getFeatureData(feature, data)
            }).style(paint).addTo(mainLayer)
        }
        if (data.series.length > 1) {
            var selector = map.ui.querySelector(".wtSelector");
            if (selector) {
                selector.onchange = function() {
                    isRefresh = !0;
                    var value = this.options[this.options.selectedIndex].value;
                    params.dataset.options.sheets_index = Number(value);
                    data.values = data.series[value].series;
                    $wt.map.getData(params, function(data) {
                        mainLayer.fire("serieschange", {
                            data: data,
                            value: value
                        });
                        onDataChange(mainLayer, data, !0)
                    })
                }
                ;
                if (!mainLayer._serieInit) {
                    mainLayer._serieInit = !0;
                    mainLayer.fire("seriesinit", {
                        source: selector,
                        data: data,
                        value: selector.options[selector.options.selectedIndex].value
                    })
                }
            } else {
                console.log("WTINFO: You have miss the {select} placeholder.")
            }
        }
        map.uniqueLayer = mainLayer;
        map.fire("hideLoading")
    };
    map.chorojson = function(data, params) {
        params = configureParams(data, params || {});
        var mainLayer = $wt.map.buildFeatureGroup(params);
        mainLayer.on({
            add: function() {
                if (params.ranges.length === 0) {
                    console.log("WTINFO: Ranges parameter is mandatory.");
                    return
                }
                if (map.uniqueLayer && map.uniqueLayer !== mainLayer) {
                    map.uniqueLayer.remove();
                    map.uniqueLayer = !1
                }
                if (params.dataset) {
                    $wt.map.getData(params, function(data) {
                        onDataChange(mainLayer, data, !1)
                    })
                }
            },
            remove: function() {
                mainLayer.removeLayer(mainLayer.countries);
                if (mainLayer._legend) {
                    mainLayer._legend.remove()
                }
            }
        });
        mainLayer.extend({
            update: function(config) {
                map.removeLayer(mainLayer);
                var newParams = config.options || {};
                if (config.data) {
                    mainLayer.params.dataset = config.data
                }
                params = $wt.mergeParams(mainLayer.params, newParams);
                delete (params.dataset || {}).result;
                map.addLayer(mainLayer)
            },
            setData: function(newparams) {
                mainLayer.update(newparams)
            }
        });
        return mainLayer
    }
});
L.Map.addInitHook(function() {
    var map = this;
    var isDrawingBlocked = !1;
    var refreshTimer;
    map.createPane('bubblePane');
    map.getPane('bubblePane').style.zIndex = 450;
    map.getPane("bubblePane").setAttribute("aria-hidden", !0);
    var toRadians = function(angle) {
        return angle * (Math.PI / 180)
    };
    var getPositiveColor = function(styles) {
        return styles[styles.positive] || styles.positive || "#369"
    };
    var getNegativeColor = function(styles) {
        return styles[styles.negative] || styles.negative || "#a00"
    };
    var buildLegendList = function(min, max, options) {
        var negativeValues = options.isNegative;
        var count = 0;
        var ranges = Math.abs(min + max) / 6;
        var list = [];
        for (var i = min; i < max; i += ranges) {
            if (count === 5) {
                ranges++
            }
            var range = [$wt.formatNumber(i, options.format), $wt.formatNumber(i + ranges, options.format)];
            var from = (count === 0) ? $wt.formatNumber(0, options.format) : range[0];
            var to = ((i + ranges) >= max) ? (negativeValues ? ' âˆ' : '+ âˆ') : range[1];
            var operator = negativeValues ? '-' : '';
            var item = $wt.template(["<li class='wt-li'><span style='height:{size}px;width:{size}px; background-color:{color};margin-right:{margin}px'></span>", "{operator} {from}<b>{separator}</b> {operator} {to}", "</li>"].join(""), {
                size: (6 + count),
                margin: 16 - count,
                operator: operator,
                color: options.color,
                separator: options.legend.separator,
                from: from,
                to: to
            }).replace("- 0", "0");
            list.push(item);
            count++
        }
        return list.join("")
    };
    var createLegendContent = function(params, data) {
        var min = data.min;
        var max = data.max;
        var isNegative = min < 0;
        var select = $wt.map.createChoroSelect(data, params);
        var absMax = Math.max(Math.abs(min), Math.abs(max));
        var content = $wt.template("<div><ul class='wt-ul'>{positive}</ul><ul>{negative}</ul></div>", {
            positive: buildLegendList(0, absMax, {
                format: params.format,
                legend: params.legend,
                color: getPositiveColor(params.styles)
            }),
            negative: (isNegative) ? buildLegendList(0, absMax, {
                format: params.format,
                legend: params.legend,
                color: getNegativeColor(params.styles),
                isNegative: !0
            }) : ""
        });
        var template = params.legend.template;
        template = (typeof template === "string") ? template : (window[template] || template)();
        return $wt.template(template, $wt.mergeParams({
            content: content,
            select: select,
            _header_: (params.legend.header || data.title) ? "<h3 class='wt-head bubble-legend-header'>" + (params.legend.header || data.title) + "</h3>" : "",
            _footer_: (params.legend.footer) ? "<p class='wt-paragraph bubble-legend-footer'>" + params.legend.footer + "</p>" : "",
            header: data.title || params.legend.header || ""
        }, params.legend))
    };
    var drawBubbles = function(mainLayer, feature, bounds) {
        if (isDrawingBlocked) {
            return
        }
        var data = mainLayer.data;
        var params = mainLayer.params;
        var featureData = $wt.map.getFeatureData(feature, data);
        var val = featureData ? featureData.value : 0;
        var absoluteValue = Math.abs(val);
        var color = getPositiveColor(params.styles);
        if (val <= 0) {
            color = getNegativeColor(params.styles)
        }
        var zoom = map.getZoom();
        zoom = (zoom < 2) ? 2 : zoom;
        zoom = (zoom > 8) ? 8 : zoom;
        var ratioZoom = {
            2: [2, 2.5],
            3: [1.5, 4.25],
            4: [1.2, 6],
            5: [1, 8.5],
            6: [0.7, 11.5],
            7: [0.5, 14.5],
            8: [0.4, 21.5]
        };
        var max = Math.max(data.max, Math.abs(data.min));
        var percentageOfMax = Math.round((100 / max) * absoluteValue);
        var radius = Math.round((ratioZoom[zoom][1] / 100) * percentageOfMax);
        var increment = ratioZoom[zoom][0];
        var nb = bounds._northEast.lat;
        var eb = bounds._northEast.lng;
        var sb = bounds._southWest.lat;
        var wb = bounds._southWest.lng;
        var s = -70;
        var w = -180;
        for (var ilat = s; ilat <= sb; ilat = ilat + (increment * Math.cos(toRadians(ilat)))) {
            s = ilat
        }
        for (var ilng = w; ilng <= wb; ilng = ilng + increment) {
            w = ilng
        }
        var currentBounds = map.getBounds();
        var geoLayer = L.geoJSON(feature);
        for (ilng = w; ilng <= eb; ilng = ilng + increment) {
            for (ilat = s; ilat <= nb; ilat = ilat + (increment * Math.cos(toRadians(ilat)))) {
                var contains = (map.epsg === 3857) ? currentBounds.contains([ilat, ilng]) : !0;
                if (radius > 2 && contains && leafletPip.pointInLayer([ilng, ilat], geoLayer, !0).length > 0) {
                    L.circleMarker(L.latLng(ilat, ilng), {
                        pane: "bubblePane",
                        radius: radius,
                        weight: 1,
                        color: "#fff",
                        fillColor: color,
                        fillOpacity: 1,
                        opacity: 1,
                        interactive: !1
                    }).addTo(mainLayer.bubbleLayer)
                }
            }
        }
    };
    var configureParams = function(data, params) {
        var defaultParams = {
            dataset: {
                options: {
                    sheets: null,
                    sheets_index: 0,
                    sheets_order: 'asc'
                }
            },
            country: {
                border: !1,
                full: !1,
                year: 2021,
                scale: 60
            },
            styles: {
                positive: "theme_1",
                negative: "theme_6",
                theme_1: "#466eb4",
                theme_2: "#af4b91",
                theme_3: "#e6a532",
                theme_4: "#00a0e1",
                theme_5: "#7daf4b",
                theme_6: "#b93c46",
                theme_7: "#b9c337",
                theme_8: "#41afaa",
                theme_9: "#d7642d"
            },
            format: {
                unit: '',
                decimals: 0,
                separator: {
                    thousands: ' ',
                    decimals: ','
                }
            },
            events: {
                click: !1,
                tooltip: {
                    content: "<div><span class='chorojson-tooltip-header'><b>{CNTR_NAME}</b> {NUTS_NAME}</span><span class='chorojson-tooltip-text'>{text}</span><span class='chorojson-tooltip-value'>{value}</span></div>",
                    options: {
                        direction: "top",
                        sticky: !0,
                        className: "chorojson-tooltip"
                    }
                }
            }
        };
        params = params || {};
        var defLegend = {
            legend: {
                position: "bottomright",
                template: "{select}{_header_}{content}{_footer_}",
                class: "bubble-legend-container",
                separator: "&nbsp;&xharr;&nbsp;"
            }
        };
        params.dataset = data;
        if (params.legend === !0) {
            params.legend = defLegend.legend
        } else if (!params.legend) {
            params.legend = !1
        }
        params = $wt.mergeParams(defLegend, params);
        params = $wt.map.tooltipConversion(params, defaultParams);
        return $wt.mergeParams(defaultParams, params)
    };
    const each = function(mainLayer, layer) {
        let featureData = $wt.map.getFeatureData(layer.feature, mainLayer.data);
        let feature = layer.feature;
        layer.unbindTooltip();
        if (featureData) {
            layer.feature.properties = $wt.mergeParams(feature.properties, {
                value: $wt.formatNumber(featureData.value, mainLayer.params.format),
                original: featureData.value,
                text: featureData.text || "",
                countryName: feature.properties.CNTR_NAME || '',
                countryId: feature.properties.CNTR_ID || '',
                regionName: feature.properties.NUTS_NAME || '',
                regionId: feature.properties.NUTS_ID || ''
            });
            $wt.map.layersEventsManager(layer, mainLayer.params.events)
        }
        if (typeof mainLayer._originalOnEachFeature === 'function') {
            mainLayer._originalOnEachFeature(feature, layer)
        }
    };
    var onDataChange = function(mainLayer, data) {
        mainLayer.data = data;
        var params = mainLayer.params;
        if (mainLayer.countries) {
            map.addLayer(mainLayer.countries);
            refresh(mainLayer)
        } else {
            mainLayer.countries = map.smartcountries(Object.keys(data.values), $wt.mergeParams({
                isBubble: !0,
                static: !0
            }, params.country)).filter(function(feature) {
                if (params.country.full) {
                    return !0
                }
                var featureData = $wt.map.getFeatureData(feature, data);
                return !!featureData
            }).style(params.country.style || function() {
                if (params.country.full === !1) {
                    return {
                        fillOpacity: 0,
                        opacity: 0
                    }
                } else {
                    return $wt.mergeParams({
                        stroke: !0,
                        weight: 0.5,
                        color: "#000",
                        fillColor: "#ccc",
                        fillOpacity: 0.1,
                        opacity: 0.1
                    }, params.country.full)
                }
            }
            ).on("each", (e) => {
                mainLayer._layersCollection.push(e.layer);
                $wt.defer( () => refresh(mainLayer), 250)
            }
            ).addTo(mainLayer)
        }
        if (mainLayer._legend) {
            mainLayer._legend.remove()
        }
        if (params.legend) {
            mainLayer._legend = map.legend({
                content: createLegendContent(params, data),
                position: params.legend.position,
                class: params.legend.class
            }).addTo(map)
        }
        if (data.series.length > 1) {
            var selector = map.ui.querySelector(".wtSelector");
            if (selector) {
                selector.onchange = function() {
                    isRefresh = !0;
                    var value = this.options[this.options.selectedIndex].value;
                    params.dataset.options.sheets_index = Number(value);
                    data.values = data.series[value].series;
                    $wt.map.getData(params, function(data) {
                        mainLayer.fire("serieschange", {
                            data: data,
                            value: value
                        });
                        onDataChange(mainLayer, data)
                    })
                }
                ;
                if (!mainLayer._serieInit) {
                    mainLayer._serieInit = !0;
                    mainLayer.fire("seriesinit", {
                        source: selector,
                        data: data,
                        value: selector.options[selector.options.selectedIndex].value
                    })
                }
            } else {
                console.log("WTINFO: You have miss the {select} placeholder.")
            }
        }
        map.uniqueLayer = mainLayer;
        map.fire("hideLoading")
    };
    var retry = 0;
    var refresh = function(mainLayer) {
        clearTimeout(refreshTimer);
        if (mainLayer._layersCollection.length === 0) {
            if (retry > 3) {
                return
            }
            retry++;
            refreshTimer = setTimeout(function() {
                refresh(mainLayer)
            }, 250);
            return
        }
        var visibleCountries = map.getVisibleCountries();
        refreshTimer = setTimeout(function() {
            mainLayer.bubbleLayer.clearLayers();
            mainLayer._layersCollection.forEach(function(layer) {
                each(mainLayer, layer);
                let props = (layer.feature || {}).properties;
                if (props) {
                    if (visibleCountries.indexOf(props.CNTR_ID) > -1) {
                        drawBubbles(mainLayer, layer.feature, layer.getBounds())
                    }
                }
            })
        }, 250)
    };
    map.bubblegrid = function(data, params) {
        params = configureParams(data, params || {});
        var mainLayer = $wt.map.buildFeatureGroup(params);
        mainLayer._layersCollection = [];
        mainLayer.countries = !1;
        mainLayer.bubbleLayer = L.featureGroup().addTo(mainLayer);
        mainLayer._originalOnEachFeature = params.country.onEachFeature || !1;
        var zoomstart = function() {
            isDrawingBlocked = !0;
            clearTimeout(refreshTimer);
            mainLayer.bubbleLayer.clearLayers()
        };
        var moveend = function() {
            isDrawingBlocked = !1;
            refresh(mainLayer)
        };
        mainLayer.on({
            add: function() {
                retry = 0;
                if (map.uniqueLayer && map.uniqueLayer !== mainLayer) {
                    map.uniqueLayer.remove();
                    map.uniqueLayer = !1
                }
                $wt.load($wt.root + "/libs/leaflet-pip/leaflet-pip.min.js", function() {
                    if (!window.leafletPip) {
                        console.log("WTINFO - Leaflet pip plugins failed.");
                        return
                    }
                    $wt.map.getData(params, function(data) {
                        onDataChange(mainLayer, data)
                    })
                });
                map.on({
                    zoomstart: zoomstart,
                    moveend: moveend
                })
            },
            remove: function() {
                if (mainLayer._legend) {
                    mainLayer._legend.remove()
                }
                if (mainLayer.countries) {
                    map.removeLayer(mainLayer.countries)
                }
                map.off({
                    zoomstart: zoomstart,
                    moveend: moveend
                })
            }
        });
        mainLayer.extend({
            update: function(config) {
                map.removeLayer(mainLayer);
                mainLayer._layersCollection = [];
                mainLayer.countries = !1;
                mainLayer.bubbleLayer.clearLayers();
                var newParams = config.options || {};
                if (config.data) {
                    mainLayer.params.dataset = config.data;
                    mainLayer.data = config.data
                }
                params = $wt.mergeParams(mainLayer.params, newParams);
                delete (params.dataset || {}).result;
                map.addLayer(mainLayer)
            },
            setData: function(newParams) {
                return this.update(newParams)
            }
        });
        return mainLayer
    }
});
L.Map.addInitHook(function() {
    var map = this;
    map.basic = {
        add: function(obj) {
            var params = $wt.mergeParams({
                map: {
                    background: "osmec"
                },
                config: {
                    menu: !0,
                    zoom: !0,
                    mousewheel: !1,
                    touch: !0,
                    fullscreen: !1,
                    footer: {
                        target: !1
                    }
                },
                menu: {
                    home: !0,
                    zoomin: !0,
                    zoomout: !0,
                    fullscreen: !0,
                    print: !0,
                    download: !1
                },
                contact: !1,
                panels: {
                    routing: !1,
                    location: !1,
                    more: !1,
                    disclaimer: !1,
                    layers: !1,
                    story: !1
                },
                layers: {
                    chorojson: !1,
                    bubblegrid: !1,
                    markers: !1,
                    countries: !1,
                    smartcountries: !1,
                    geojson: !1
                }
            }, obj.params);
            obj.UEC = params;
            obj.map = map;
            window.maps = window.maps || [];
            window.maps.push(map);
            if (params.map.background === !1) {
                map.fire("hideLoading")
            } else {
                map._backgroundIsAdd = !1;
                window.addEventListener("wtMapReady", function() {
                    map._backgroundIsAdd = !0;
                    map.background(map.options.background).addTo(map)
                }, {
                    once: !0
                });
                setTimeout(function() {
                    if (!map._backgroundIsAdd) {
                        map._backgroundIsAdd = !0;
                        map.background(map.options.background).addTo(map)
                    }
                }, 1000)
            }
            manageConfigParams(params);
            manageSidebarParams(params);
            managePanelsParams(params);
            manageLayersParams(params);
            if (params.story) {
                map.story.add(params.story)
            }
            setTimeout( () => {
                if (obj.params.ready) {
                    obj.params.ready(map)
                }
                setTimeout( () => {
                    $wt.queue.currentContainer = obj;
                    $wt.queue.finish()
                }
                , 125)
            }
            , 125);
            if (window.IntersectionObserver) {
                const observer = new IntersectionObserver( (entries) => {
                    if (entries[0].isIntersecting) {
                        map.invalidateSize().fire("resize")
                    }
                }
                ,{
                    threshold: 0.5
                });
                observer.observe(map.ui)
            }
            if (map.proj === 4326) {
                map.setView(map.options.center, map.options.zoom)
            }
        }
    };
    var manageConfigParams = function(params) {
        if (params.config) {
            for (var key in params.config) {
                map.fire(key + "UEC", {
                    uec: params.config[key]
                })
            }
        }
    };
    var manageLayersParams = function(params, target) {
        if (params.layers) {
            for (var key in params.layers) {
                var setup = params.layers[key];
                if (setup && typeof map[key] === 'function') {
                    if (Array.isArray(setup)) {
                        var layerGroup = new L.layerGroup();
                        setup.forEach(function(set) {
                            if (typeof set === 'object') {
                                map[key](set.data || set, set.options).addTo(layerGroup)
                            }
                        });
                        layerGroup.addTo(target || map)
                    } else if (typeof setup === 'object') {
                        map[key](setup.data || setup, setup.options).addTo(target || map)
                    }
                }
            }
        }
    };
    var manageSidebarParams = function(params) {
        if (params.sidebar) {
            map.fire("menuUEC", params.sidebar)
        }
    };
    var managePanelsParams = function(params) {
        if (params.panels) {
            for (var key in params.panels) {
                if (params.panels[key] && map[key] && typeof map[key].add === 'function') {
                    map[key].add(params.panels[key])
                }
            }
        }
    }
});
L.Map.addInitHook(function() {
    var map = this;
    if (map.options.isInset) {
        return
    }
    map.fire("init");
    setTimeout(function() {
        map.invalidateSize()
    }, 100);
    window.addEventListener("click", function() {
        setTimeout(function() {
            map.invalidateSize()
        }, 100)
    })
})

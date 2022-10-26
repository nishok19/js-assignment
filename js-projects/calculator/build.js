!(function (t) {
  function e(o) {
    if (n[o]) return n[o].exports;
    var i = (n[o] = { i: o, l: !1, exports: {} });
    return t[o].call(i.exports, i, i.exports, e), (i.l = !0), i.exports;
  }
  var n = {};
  (e.m = t),
    (e.c = n),
    (e.d = function (t, n, o) {
      e.o(t, n) ||
        Object.defineProperty(t, n, {
          configurable: !1,
          enumerable: !0,
          get: o,
        });
    }),
    (e.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(n, "a", n), n;
    }),
    (e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (e.p = "/"),
    e((e.s = 117));
})([
  function (t, e, n) {
    function o(t, e) {
      if (u(t)) return new Date(t.getTime());
      if ("string" != typeof t) return new Date(t);
      var n = e || {},
        o = n.additionalDigits;
      o = null == o ? h : Number(o);
      var l = i(t),
        d = s(l.date, o),
        p = d.year,
        v = d.restDateString,
        g = a(v, p);
      if (g) {
        var m,
          _ = g.getTime(),
          b = 0;
        return (
          l.time && (b = r(l.time)),
          l.timezone
            ? (m = c(l.timezone))
            : ((m = new Date(_ + b).getTimezoneOffset()),
              (m = new Date(_ + b + m * f).getTimezoneOffset())),
          new Date(_ + b + m * f)
        );
      }
      return new Date(t);
    }
    function i(t) {
      var e,
        n = {},
        o = t.split(p);
      if (
        (v.test(o[0])
          ? ((n.date = null), (e = o[0]))
          : ((n.date = o[0]), (e = o[1])),
        e)
      ) {
        var i = S.exec(e);
        i
          ? ((n.time = e.replace(i[1], "")), (n.timezone = i[1]))
          : (n.time = e);
      }
      return n;
    }
    function s(t, e) {
      var n,
        o = m[e],
        i = b[e];
      if ((n = _.exec(t) || i.exec(t))) {
        var s = n[1];
        return { year: parseInt(s, 10), restDateString: t.slice(s.length) };
      }
      if ((n = g.exec(t) || o.exec(t))) {
        var a = n[1];
        return {
          year: 100 * parseInt(a, 10),
          restDateString: t.slice(a.length),
        };
      }
      return { year: null };
    }
    function a(t, e) {
      if (null === e) return null;
      var n, o, i, s;
      if (0 === t.length) return (o = new Date(0)), o.setUTCFullYear(e), o;
      if ((n = y.exec(t)))
        return (
          (o = new Date(0)),
          (i = parseInt(n[1], 10) - 1),
          o.setUTCFullYear(e, i),
          o
        );
      if ((n = C.exec(t))) {
        o = new Date(0);
        var a = parseInt(n[1], 10);
        return o.setUTCFullYear(e, 0, a), o;
      }
      if ((n = T.exec(t))) {
        (o = new Date(0)), (i = parseInt(n[1], 10) - 1);
        var r = parseInt(n[2], 10);
        return o.setUTCFullYear(e, i, r), o;
      }
      if ((n = w.exec(t))) return (s = parseInt(n[1], 10) - 1), l(e, s);
      if ((n = x.exec(t))) {
        s = parseInt(n[1], 10) - 1;
        return l(e, s, parseInt(n[2], 10) - 1);
      }
      return null;
    }
    function r(t) {
      var e, n, o;
      if ((e = k.exec(t)))
        return ((n = parseFloat(e[1].replace(",", "."))) % 24) * d;
      if ((e = L.exec(t)))
        return (
          (n = parseInt(e[1], 10)),
          (o = parseFloat(e[2].replace(",", "."))),
          (n % 24) * d + o * f
        );
      if ((e = O.exec(t))) {
        (n = parseInt(e[1], 10)), (o = parseInt(e[2], 10));
        var i = parseFloat(e[3].replace(",", "."));
        return (n % 24) * d + o * f + 1e3 * i;
      }
      return null;
    }
    function c(t) {
      var e, n;
      return (e = E.exec(t))
        ? 0
        : (e = M.exec(t))
        ? ((n = 60 * parseInt(e[2], 10)), "+" === e[1] ? -n : n)
        : ((e = A.exec(t)),
          e
            ? ((n = 60 * parseInt(e[2], 10) + parseInt(e[3], 10)),
              "+" === e[1] ? -n : n)
            : 0);
    }
    function l(t, e, n) {
      (e = e || 0), (n = n || 0);
      var o = new Date(0);
      o.setUTCFullYear(t, 0, 4);
      var i = o.getUTCDay() || 7,
        s = 7 * e + n + 1 - i;
      return o.setUTCDate(o.getUTCDate() + s), o;
    }
    var u = n(29),
      d = 36e5,
      f = 6e4,
      h = 2,
      p = /[T ]/,
      v = /:/,
      g = /^(\d{2})$/,
      m = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
      _ = /^(\d{4})/,
      b = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
      y = /^-(\d{2})$/,
      C = /^-?(\d{3})$/,
      T = /^-?(\d{2})-?(\d{2})$/,
      w = /^-?W(\d{2})$/,
      x = /^-?W(\d{2})-?(\d{1})$/,
      k = /^(\d{2}([.,]\d*)?)$/,
      L = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
      O = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
      S = /([Z+-].*)$/,
      E = /^(Z)$/,
      M = /^([+-])(\d{2})$/,
      A = /^([+-])(\d{2}):?(\d{2})$/;
    t.exports = o;
  },
  function (t, e, n) {
    "use strict";
    function o(t, e, n, o, i, s, a, r) {
      t = t || {};
      var c = typeof t.default;
      ("object" !== c && "function" !== c) || (t = t.default);
      var l = "function" == typeof t ? t.options : t;
      e && ((l.render = e), (l.staticRenderFns = n), (l._compiled = !0)),
        o && (l.functional = !0),
        s && (l._scopeId = s);
      var u;
      if (
        (a
          ? ((u = function (t) {
              (t =
                t ||
                (this.$vnode && this.$vnode.ssrContext) ||
                (this.parent &&
                  this.parent.$vnode &&
                  this.parent.$vnode.ssrContext)),
                t ||
                  "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                i && i.call(this, t),
                t && t._registeredComponents && t._registeredComponents.add(a);
            }),
            (l._ssrRegister = u))
          : i &&
            (u = r
              ? function () {
                  i.call(this, this.$root.$options.shadowRoot);
                }
              : i),
        u)
      )
        if (l.functional) {
          l._injectStyles = u;
          var d = l.render;
          l.render = function (t, e) {
            return u.call(e), d(t, e);
          };
        } else {
          var f = l.beforeCreate;
          l.beforeCreate = f ? [].concat(f, u) : [u];
        }
      return { exports: t, options: l };
    }
    e.a = o;
  },
  function (t, e) {
    function n(t, e) {
      var n = t[1] || "",
        i = t[3];
      if (!i) return n;
      if (e && "function" == typeof btoa) {
        var s = o(i);
        return [n]
          .concat(
            i.sources.map(function (t) {
              return "/*# sourceURL=" + i.sourceRoot + t + " */";
            })
          )
          .concat([s])
          .join("\n");
      }
      return [n].join("\n");
    }
    function o(t) {
      return (
        "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
        btoa(unescape(encodeURIComponent(JSON.stringify(t)))) +
        " */"
      );
    }
    t.exports = function (t) {
      var e = [];
      return (
        (e.toString = function () {
          return this.map(function (e) {
            var o = n(e, t);
            return e[2] ? "@media " + e[2] + "{" + o + "}" : o;
          }).join("");
        }),
        (e.i = function (t, n) {
          "string" == typeof t && (t = [[null, t, ""]]);
          for (var o = {}, i = 0; i < this.length; i++) {
            var s = this[i][0];
            "number" == typeof s && (o[s] = !0);
          }
          for (i = 0; i < t.length; i++) {
            var a = t[i];
            ("number" == typeof a[0] && o[a[0]]) ||
              (n && !a[2]
                ? (a[2] = n)
                : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
              e.push(a));
          }
        }),
        e
      );
    };
  },
  function (t, e, n) {
    "use strict";
    function o(t, e, n, o) {
      (v = n), (m = o || {});
      var s = Object(l.a)(t, e);
      return (
        i(s),
        function (e) {
          for (var n = [], o = 0; o < s.length; o++) {
            var a = s[o],
              r = d[a.id];
            r.refs--, n.push(r);
          }
          e ? ((s = Object(l.a)(t, e)), i(s)) : (s = []);
          for (var o = 0; o < n.length; o++) {
            var r = n[o];
            if (0 === r.refs) {
              for (var c = 0; c < r.parts.length; c++) r.parts[c]();
              delete d[r.id];
            }
          }
        }
      );
    }
    function i(t) {
      for (var e = 0; e < t.length; e++) {
        var n = t[e],
          o = d[n.id];
        if (o) {
          o.refs++;
          for (var i = 0; i < o.parts.length; i++) o.parts[i](n.parts[i]);
          for (; i < n.parts.length; i++) o.parts.push(a(n.parts[i]));
          o.parts.length > n.parts.length && (o.parts.length = n.parts.length);
        } else {
          for (var s = [], i = 0; i < n.parts.length; i++)
            s.push(a(n.parts[i]));
          d[n.id] = { id: n.id, refs: 1, parts: s };
        }
      }
    }
    function s() {
      var t = document.createElement("style");
      return (t.type = "text/css"), f.appendChild(t), t;
    }
    function a(t) {
      var e,
        n,
        o = document.querySelector("style[" + _ + '~="' + t.id + '"]');
      if (o) {
        if (v) return g;
        o.parentNode.removeChild(o);
      }
      if (b) {
        var i = p++;
        (o = h || (h = s())),
          (e = r.bind(null, o, i, !1)),
          (n = r.bind(null, o, i, !0));
      } else
        (o = s()),
          (e = c.bind(null, o)),
          (n = function () {
            o.parentNode.removeChild(o);
          });
      return (
        e(t),
        function (o) {
          if (o) {
            if (
              o.css === t.css &&
              o.media === t.media &&
              o.sourceMap === t.sourceMap
            )
              return;
            e((t = o));
          } else n();
        }
      );
    }
    function r(t, e, n, o) {
      var i = n ? "" : o.css;
      if (t.styleSheet) t.styleSheet.cssText = y(e, i);
      else {
        var s = document.createTextNode(i),
          a = t.childNodes;
        a[e] && t.removeChild(a[e]),
          a.length ? t.insertBefore(s, a[e]) : t.appendChild(s);
      }
    }
    function c(t, e) {
      var n = e.css,
        o = e.media,
        i = e.sourceMap;
      if (
        (o && t.setAttribute("media", o),
        m.ssrId && t.setAttribute(_, e.id),
        i &&
          ((n += "\n/*# sourceURL=" + i.sources[0] + " */"),
          (n +=
            "\n/*# sourceMappingURL=data:application/json;base64," +
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
            " */")),
        t.styleSheet)
      )
        t.styleSheet.cssText = n;
      else {
        for (; t.firstChild; ) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(n));
      }
    }
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = o);
    var l = n(123),
      u = "undefined" != typeof document;
    if ("undefined" != typeof DEBUG && DEBUG && !u)
      throw new Error(
        "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
      );
    var d = {},
      f = u && (document.head || document.getElementsByTagName("head")[0]),
      h = null,
      p = 0,
      v = !1,
      g = function () {},
      m = null,
      _ = "data-vue-ssr-id",
      b =
        "undefined" != typeof navigator &&
        /msie [6-9]\b/.test(navigator.userAgent.toLowerCase()),
      y = (function () {
        var t = [];
        return function (e, n) {
          return (t[e] = n), t.filter(Boolean).join("\n");
        };
      })();
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = "https://api.subtletab.com/",
      i = (e.G_CAL = {
        URL: {
          BASE: "https://www.googleapis.com/calendar/v3/",
          LIST: "https://www.googleapis.com/calendar/v3/users/me/calendarList",
          REFRESH: "https://api.subtletab.com/integrations/calendar/refresh",
          ORIGIN: "https://www.googleapis.com/calendar",
          KB_INTEGRATION_SUBTLE:
            "https://www.subtletab.com/#/kb/integrations/calendar",
          INTEGRATION_SUBTLE:
            "https://www.subtletab.com/#/integrations/calendar",
        },
      }),
      s = (e.WUNDERLIST = {
        URL: {
          BASE: "https://a.wunderlist.com/api/v1",
          LISTS: "https://a.wunderlist.com/api/v1/lists",
          TASKS: "https://a.wunderlist.com/api/v1/tasks",
          ORIGIN: "https://*.wunderlist.com/",
          KB_INTEGRATION_SUBTLE:
            "https://www.subtletab.com/#/kb/integrations/wunderlist",
          INTEGRATION_SUBTLE:
            "https://www.subtletab.com/#/integrations/wunderlist",
        },
      }),
      a = (e.TODOIST = {
        URL: {
          BASE: "https://todoist.com/sync/v8/sync",
          ORIGIN: "https://*.todoist.com/",
          KB_INTEGRATION_SUBTLE:
            "https://www.subtletab.com/#/kb/integrations/todoist",
          INTEGRATION_SUBTLE:
            "https://www.subtletab.com/#/integrations/todoist",
        },
      }),
      r = {
        THEME: {
          NATURE: "nature",
          ARCHITECTURE: "building",
          TRAVEL: "travel",
          NIGHT: "night",
        },
        STORAGE: {
          SHARED_DATA: "shared-data",
          MISC_SETTINGS: "misc_settings",
          WEATHER: "weather",
          BACKGROUND_SEEN_NIGHT: "bg-seen-night",
          BACKGROUND_SEEN_TRAVEL: "bg-seen-travel",
          BACKGROUND_SEEN_BUILDING: "bg-seen-building",
          BACKGROUND_SEEN_NATURE: "bg-seen-nature",
          BACKGROUND_CUSTOM: "bg-custom",
          BACKGROUND_SEEN_CUSTOM: "bg-seen-custom",
          BACKGROUND_LOCKED: "bg-locked",
          BACKGROUND_HISTORY: "bg_history",
          BACKGROUND_HISTORY_DATA: "bg_history_data",
          CURRENT_PAGE: "current-page",
          SEEN_ONBOARDING: "seen-onboarding",
          NOTES_META: "notes_meta",
          WHATS_NEW: "whats_new",
          CURRENT_CUSTOMIZATION_TAB: "current_c_tab",
          SUBTLE_USER: "subtle_user",
          G_CAL_AUTH: "g_cal_auth",
          TODOS_META: "todos_meta",
          TODO_LISTS_META: "todo_lists_meta",
          TODO_LIST: "todo_list_",
          TODO: "todo_",
          CURRENT_TODO_LIST: "current_todo_list",
          W_CURRENT_TODO_LIST: "w_current_todo_list",
          W_ROOT_REVISION: "w_root_revision",
          W_LISTS: "w_lists",
          W_LISTS_META: "w_lists_meta",
          W_LIST: "w_list_",
          W_TODOS: "w_todos",
          W_TODO: "w_todo_",
          W_TODOS_META: "w_todos_meta",
          W_AUTH: "w_auth",
          T_CURRENT_TODO_LIST: "t_current_todo_list",
          T_LISTS_META: "t_lists_meta",
          T_LIST: "t_list_",
          T_TODO: "t_todo_",
          T_TODOS_META: "t_todos_meta",
          T_AUTH: "t_auth",
          T_SYNC_TOKEN: "t_sync_token",
          BOOKMARKS: "bookmarks",
          TOP_BANNER: "banner",
          NOTIFICATION: "notification",
        },
        SYNC: [
          "shared-data",
          "bg-seen-nature",
          "bg-seen-night",
          "bg-seen-travel",
          "bg-seen-building",
          "current-page",
          "nature",
          "travel",
          "building",
          "night",
          "_details",
          "notes_meta",
          "notes-",
          "bg-custom",
          "bg-seen-custom",
          "misc_settings",
          "subtle_user",
          "bookmarks",
        ],
        URL: {
          WHATS_NEW: o + "whatsnew",
          G_CAL_KB_INTEGRATION: i.URL.KB_INTEGRATION_SUBTLE,
          G_CAL_INTEGRATION: i.URL.INTEGRATION_SUBTLE,
          WUNDERLIST_KB_INTEGRATION: s.URL.KB_INTEGRATION_SUBTLE,
          WUNDERLIST_INTEGRATION: s.URL.INTEGRATION_SUBTLE,
          TODOIST_KB_INTEGRATION: a.URL.KB_INTEGRATION_SUBTLE,
          TODOIST_INTEGRATION: a.URL.INTEGRATION_SUBTLE,
          NOTIFICATIONS: o + "notification",
        },
      };
    e.default = r;
    e.STORAGE = r.STORAGE;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.Append = e.Remove = e.Set = e.Get = void 0);
    var o = n(4),
      i = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(o),
      s = function (t) {
        return (
          i.default.SYNC.indexOf(t) > -1 ||
          t.indexOf("note-") > -1 ||
          0 === t.indexOf("todo")
        );
      },
      a = {
        get: function (t) {
          if (t) {
            var e = localStorage.getItem(t);
            return JSON.parse(e);
          }
        },
        set: function (t, e) {
          if (t && void 0 !== e && null !== e) {
            if (s(t)) {
              var n = {};
              (n[t] = e), chrome.storage.sync.set(n);
            }
            localStorage.setItem(t, JSON.stringify(e));
          }
        },
        setLocal: function (t, e) {
          t &&
            void 0 !== e &&
            null !== e &&
            localStorage.setItem(t, JSON.stringify(e));
        },
        remove: function (t) {
          if (t)
            return (
              s(t) && chrome.storage.sync.remove(t), localStorage.removeItem(t)
            );
        },
        increment: function (t) {
          var e = this.get(t);
          "number" == typeof e && this.set(t, e + 1);
        },
        append: function (t, e) {
          var n = this.get(t) || [];
          n.push(e), this.set(t, n);
        },
        prepend: function (t, e) {
          var n = this.get(t) || [];
          n.unshift(e), this.set(t, n);
        },
        getMap: function (t) {
          var e = localStorage.getItem(t);
          return isNaN(e) ? JSON.parse(e) : e;
        },
        setMap: function (t, e) {
          return localStorage.setItem(t, JSON.stringify(e));
        },
        chromeSync: {
          get: function (t, e) {
            try {
              chrome.storage.sync.get(t, function (t) {
                e && e(t);
              });
            } catch (t) {
              console.log(t);
            }
          },
          set: function (t, e, n) {
            try {
              var o = {};
              (o[t] = e),
                chrome.storage.sync.set(o, function (t) {
                  n && n(t);
                });
            } catch (t) {
              console.log(t);
            }
          },
        },
      };
    e.default = a;
    (e.Get = a.get),
      (e.Set = a.set),
      (e.Remove = a.remove),
      (e.Append = a.append);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.EventBus = void 0);
    var o = n(43),
      i = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(o);
    e.EventBus = new i.default();
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = {
        http: function (t, e, n) {
          return new Promise(function (o, i) {
            var s = new XMLHttpRequest();
            (e = e || "GET"),
              s.open(e, t),
              s.setRequestHeader("chrome-extension", btoa(chrome.runtime.id)),
              (s.onreadystatechange = function () {
                if (4 === s.readyState) {
                  if (s.responseText) return void o(JSON.parse(s.responseText));
                  i(s.status);
                }
              }),
              (s.onerror = function () {
                i(s.status);
              }),
              s.send(JSON.stringify(n));
          });
        },
        Http: function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return new Promise(function (n, o) {
            var s = new XMLHttpRequest(),
              a = e.method || "GET",
              r = e.data,
              c = !1,
              l = !1;
            if ((s.open(a, t), e.headers))
              for (var u = 0; u < e.headers.length; u++)
                e.headers[u].name &&
                  "content-type" === e.headers[u].name.toLowerCase() &&
                  (c = !0),
                  e.headers[u].name &&
                    e.headers[u].value
                      .toLowerCase()
                      .indexOf("x-www-form-urlencoded") > -1 &&
                    (l = !0),
                  s.setRequestHeader(e.headers[u].name, e.headers[u].value);
            if (
              a &&
              ("post" === a.toLowerCase() || "patch" === a.toLowerCase())
            )
              if (
                (c || s.setRequestHeader("Content-type", "application/json"), l)
              ) {
                var d = new FormData();
                for (var f in r) r.hasOwnProperty(f) && d.append(f, r[f]);
                r = d;
              } else r = JSON.stringify(r);
            (s.onreadystatechange = function () {
              if (4 === s.readyState) {
                if (s.responseText && s.status >= 200 && s.status < 300)
                  return void n(i(s.responseText));
                o({ status: s.status, reason: i(s.responseText) });
              }
            }),
              (s.onerror = function () {
                o(s.status);
              }),
              s.send(r);
          });
        },
        isObject: function (t) {
          return t && "[object Object]" === Object.prototype.toString.call(t);
        },
        isArray: function (t) {
          return t && "[object Array]" === Object.prototype.toString.call(t);
        },
        isUndefined: function (t) {
          return void 0 === t;
        },
        isChrome: function () {
          return navigator.userAgent.toLowerCase().search("chrome") > -1;
        },
        isFirefox: function () {
          return navigator.userAgent.toLowerCase().search("firefox") > -1;
        },
        getBrowser: function () {
          return o.isChrome() ? "chrome" : o.isFirefox() ? "firefox" : "";
        },
      },
      i = (e.getString = function (t) {
        try {
          return JSON.parse(t);
        } catch (e) {
          return t;
        }
      });
    e.default = o;
    (e.generateId = function () {
      return "xxxxxxxx-xxxx-Sxxx-Uxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (t) {
          var e = (16 * Math.random()) | 0;
          return ("x" === t ? e : (3 & e) | 8).toString(16);
        }
      );
    }),
      (e.POST = function (t, e) {
        e.headers = e.headers || new Headers();
        var n = e.data,
          o = e.headers,
          i = o && o.has("content-type"),
          s = i && o.get("content-type").indexOf("x-www-form-urlencoded") > -1;
        if (
          (i ||
            (o.set("content-type", "application/json"),
            (n = JSON.stringify(e.data))),
          s)
        ) {
          var a = new FormData();
          for (var r in n) n.hasOwnProperty(r) && a.append(r, n[r]);
          n = a;
        }
        var c = new Request(t, { method: "POST", body: n, headers: o });
        return fetch(c).then(function (t) {
          if (!t.ok) throw t;
          return t.json();
        });
      }),
      (e.Http = o.Http),
      (e.DecryptAuth = function (t) {
        if (!t) return !1;
        try {
          return JSON.parse(window.atob(t));
        } catch (t) {
          return !1;
        }
      }),
      (e.isolateScroll = function (t) {
        var e = document.getElementById(t);
        e &&
          (e.onmousewheel = function (t) {
            (e.scrollTop -= t.wheelDeltaY),
              (t = t || window.event),
              t.preventDefault && t.preventDefault(),
              (t.returnValue = !1);
          });
      }),
      (e.isArray = o.isArray),
      (e.isObject = o.isObject),
      (e.isUndefined = o.isUndefined),
      (e.isValidURL = function (t) {
        var e =
          /(https?:\/\/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9])(:?\d*)\/?([a-z_\/0-9\-#.]*)\??([a-z_\/0-9\-#=&]*)/gi;
        return !!t.match(e);
      }),
      (e.isChromeInternalURL = function (t) {
        var e = /^chrome:\/\//gi;
        return !!t.match(e);
      }),
      (e.isFirefoxInternalUrl = function (t) {
        var e = /^about:/gi;
        return !!t.match(e);
      });
  },
  function (t, e, n) {
    "use strict";
    function o(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i,
      s = (e.MessageTypeEnum = {
        APP: "app",
        NOTES: "notes",
        CUSTOMIZE: "customize",
        TODOS: "todos",
        WEATHER: "weather",
        TODO_WRAPPER: "todoWrapper",
        BACKGROUND: "background",
        HISTORY: "history",
        BACKGROUND_INFO: "backgroundInfo",
        BOOKMARK: "bookmark",
        CONTEXT_MENU: "contextMenu",
        MODAL: "modal",
      }),
      a = (e.Message =
        ((i = {}),
        o(i, s.HISTORY, { LOCK_COMPLETE: "lockComplete" }),
        o(i, s.APP, {
          OPEN_CUSTOMIZE: "OpenCustomize",
          PIN: "pin",
          TOGGLE_BACKGROUND_LOCK: "toggleBackgroundLock",
          TOGGLE_HISTORY: "toggleHistory",
          HIDE_BOOKMARKS: "hideBookmarks",
          BANNER_CLOSE: "closeBanner",
        }),
        o(i, s.TODO_WRAPPER, { REFRESH: "refresh" }),
        o(i, s.BACKGROUND, {
          CHANGE_LOCKED: "changeLocked",
          THEME_RESET: "themeReset",
          TYPE_CHANGED: "typeChanged",
          CHANGE_BACKGROUND: "changeBackground",
        }),
        o(i, s.BACKGROUND_INFO, { WALLPAPER_CHANGED: "wallpaperChanged" }),
        o(i, s.BOOKMARK, {
          EDIT: "edit",
          ADD: "add",
          DELETE: "delete",
          OPEN_NEW_TAB: "open_new_tab",
          HIDE_BAR: "hide_bookmarks",
        }),
        o(i, s.CONTEXT_MENU, { OPEN: "open", CLOSE: "close" }),
        o(i, s.MODAL, {
          OPEN: "open",
          CLOSE: "close",
          ADD: "add",
          EDIT: "edit",
          UPDATE: "update",
        }),
        i));
    (e.AppMessage = a[s.APP]),
      (e.TodoWrapperMessage = a[s.TODO_WRAPPER]),
      (e.BackgroundMessage = a[s.BACKGROUND]),
      (e.HistoryMessage = a[s.HISTORY]),
      (e.BackgroundInfoMessage = a[s.BACKGROUND_INFO]),
      (e.BookmarkMessage = a[s.BOOKMARK]),
      (e.ContextMenuMessage = a[s.CONTEXT_MENU]),
      (e.ModalMessage = a[s.MODAL]);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    (e.TodosType = { WUNDERLIST: "w", DEFAULT: "default", TODOIST: "t" }),
      (e.TodoItemAction = {
        COMPLETE: "completion",
        DELETE: "delete",
        STARRED: "starred",
        EDIT: "edit",
      }),
      (e.TodoListItemAction = {
        SELECT: "select",
        DELETE: "delete",
        CREATE: "create",
        VIEWLIST: "viewList",
      });
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = {
        themes: [
          {
            id: 1,
            lValue: "Nature",
            tags: "nature",
            value: "nature",
            imgUrl: "images/nature_thumbnail.png",
          },
          {
            id: 2,
            lValue: "Architecture",
            tags: "building",
            value: "building",
            imgUrl: "images/architecture_thumbnail.png",
          },
          {
            id: 3,
            lValue: "Travel",
            tags: "travel",
            value: "travel",
            imgUrl: "images/travel_thumbnail.png",
          },
          {
            id: 4,
            lValue: "Night Life",
            tags: "night",
            value: "night",
            imgUrl: "images/night_thumbnail.png",
          },
        ],
        stored: {
          1: {
            1: "./images/backgrounds/nature-1.jpg",
            2: "./images/backgrounds/nature-2.jpg",
            3: "./images/backgrounds/nature-3.jpg",
          },
          2: {
            4: "./images/backgrounds/building-1.jpg",
            5: "./images/backgrounds/building-2.jpg",
            6: "./images/backgrounds/building-3.jpg",
          },
          3: {
            7: "./images/backgrounds/travel-1.jpg",
            8: "./images/backgrounds/travel-2.jpg",
            9: "./images/backgrounds/travel-3.jpg",
          },
          4: {
            10: "./images/backgrounds/night-1.jpg",
            11: "./images/backgrounds/night-2.jpg",
            12: "./images/backgrounds/night-3.jpg",
          },
        },
        customBackgrounds: [
          "https://www.subtletab.com/extras/1.jpg",
          "https://www.subtletab.com/extras/2.jpg",
          "https://www.subtletab.com/extras/3.jpg",
          "https://www.subtletab.com/extras/4.jpg",
          "https://www.subtletab.com/extras/5.jpg",
          "https://www.subtletab.com/extras/6.jpg",
          "https://www.subtletab.com/extras/7.jpg",
          "https://www.subtletab.com/extras/7.jpg",
          "https://www.subtletab.com/extras/8.jpg",
        ],
        storedDetails: {
          1: {
            url: "https://unsplash.com/photos/3l3RwQdHRHg",
            user: "Jonatan Pie",
            area: "Stakkholtsgja canyon, Iceland",
          },
          2: {
            url: "https://unsplash.com/photos/rDJYMootbXQ",
            user: "Redcharlie",
            area: "Callantsoog, Netherlands",
          },
          3: {
            url: "https://unsplash.com/photos/-98y5HIFDs8",
            user: "Ali Al-Mufti",
            area: "Penarth, United Kingdom",
          },
          4: {
            url: "https://unsplash.com/photos/JDN-_FIqB3k",
            user: "All Bong",
            area: "Paris, France",
          },
          5: {
            url: "https://unsplash.com/photos/wJ6xyh1YMxU",
            user: "Christoph Schulz",
            area: "Atlantis, Dubai",
          },
          6: {
            url: "https://unsplash.com/photos/LMq-rTluKfQ",
            user: "Kelvin Zyteng",
            area: "Farrer Park, Singapore",
          },
          7: {
            url: "https://unsplash.com/photos/rgAAcndHGBc",
            user: "Yuliya Kosolapova",
            area: "Aqaba, Jordan",
          },
          8: {
            url: "https://unsplash.com/photos/tPKQwYHy8q4",
            user: "Aneta Ivanova",
            area: "East Mountains",
          },
          9: {
            url: "https://unsplash.com/photos/56R8TzG7Lzc",
            user: "Harley Davidson",
            area: "Bixby Creek Bridge, California",
          },
          10: {
            url: "https://unsplash.com/photos/guvnhd3hbxw",
            user: "Modern Affliction",
            area: "New Zealand",
          },
          11: {
            url: "https://unsplash.com/photos/K8IIPF2KY4Q",
            user: "Robert Wiedemann",
            area: "Bloodmoon",
          },
          12: {
            url: "https://unsplash.com/photos/PSj_dlu_rGg",
            user: "Cody Board",
            area: "Illinois, United States",
          },
        },
      });
  },
  function (t, e, n) {
    function o(t) {
      var e = i(t),
        n = e.getFullYear(),
        o = new Date(0);
      o.setFullYear(n + 1, 0, 4), o.setHours(0, 0, 0, 0);
      var a = s(o),
        r = new Date(0);
      r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0);
      var c = s(r);
      return e.getTime() >= a.getTime()
        ? n + 1
        : e.getTime() >= c.getTime()
        ? n
        : n - 1;
    }
    var i = n(0),
      s = n(12);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return i(t, { weekStartsOn: 1 });
    }
    var i = n(24);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      var e = i(t);
      return e.setHours(0, 0, 0, 0), e;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      n(130);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(49),
      s = n.n(i);
    for (var a in i)
      "default" !== a &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(a);
    var r = n(132),
      c = n(1),
      l = o,
      u = Object(c.a)(s.a, r.a, r.b, !1, l, "data-v-d8d1f16a", null);
    e.default = u.exports;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    (e.titleCase = function (t) {
      try {
        if (!t) return;
        return t.charAt(0).toUpperCase() + t.slice(1);
      } catch (t) {}
    }),
      (e.toDataURL = function (t, e) {
        try {
          var n = new Image();
          (n.crossOrigin = "Anonymous"),
            (n.onload = function () {
              var t = document.createElement("CANVAS"),
                n = t.getContext("2d");
              (t.height = this.naturalHeight),
                (t.width = this.naturalWidth),
                n.drawImage(this, 0, 0),
                e(t.toDataURL());
            }),
            (n.src = t);
        } catch (t) {
          return !1;
        }
      });
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.addAfterInbox =
        e.findInboxListId =
        e.findInboxList =
        e.addTodayList =
        e.showDeleteIcon =
        e.unsetLocalList =
        e.unsetTodoTypeLocalData =
        e.unsetThirdPartyTodoData =
        e.unsetAllLists =
        e.unsetAllTodos =
        e.getLocalLists =
        e.setLocalLists =
        e.unsetLocalLists =
        e.getLocalTodos =
        e.setLocalTodos =
        e.unsetLocalTodo =
        e.unsetLocalTodos =
        e.getLocalKeys =
          void 0);
    var o = n(4),
      i = n(5),
      s = n(9),
      a = n(7),
      r = (e.getLocalKeys = function (t) {
        var e = void 0,
          n = void 0,
          i = void 0,
          a = void 0;
        return (
          t === s.TodosType.TODOIST
            ? ((e = o.STORAGE.T_TODOS_META),
              (n = o.STORAGE.T_TODO),
              (i = o.STORAGE.T_LIST),
              (a = o.STORAGE.T_LISTS_META))
            : t === s.TodosType.WUNDERLIST
            ? ((e = o.STORAGE.W_TODOS_META),
              (n = o.STORAGE.W_TODO),
              (i = o.STORAGE.W_LIST),
              (a = o.STORAGE.W_LISTS_META))
            : t === s.TodosType.DEFAULT &&
              ((e = o.STORAGE.TODOS_META),
              (n = o.STORAGE.TODO),
              (i = o.STORAGE.TODO_LIST),
              (a = o.STORAGE.TODO_LISTS_META)),
          { todoMetaKey: e, todoInitial: n, listInitial: i, listMetaKey: a }
        );
      }),
      c = (e.unsetLocalTodos = function (t) {
        var e = r(t),
          n = (0, i.Get)(e.todoMetaKey);
        return (
          !n ||
          (!(n && !(0, a.isArray)(n)) &&
            ((0, i.Remove)(e.todoMetaKey),
            n.forEach(function (t) {
              (0, i.Remove)(e.todoInitial + t);
            }),
            !0))
        );
      }),
      l = (e.unsetLocalTodo = function (t, e) {
        if (t && e) {
          var n = r(t),
            o = (0, i.Get)(n.todoMetaKey);
          o &&
            (0, a.isArray)(o) &&
            ((0, i.Remove)(n.todoInitial + e),
            o.splice(o.indexOf(e), 1),
            (0, i.Set)(n.todoMetaKey, o));
        }
      }),
      u = (e.setLocalTodos = function (t, e) {
        try {
          if (!t || !e || !e.length) return;
          var n = r(t);
          if (c(t)) {
            var o = [];
            return (
              e.forEach(function (t) {
                o.push(t.id), (0, i.Set)(n.todoInitial + t.id, t);
              }),
              (0, i.Set)(n.todoMetaKey, o),
              !0
            );
          }
        } catch (t) {}
      }),
      d = (e.getLocalTodos = function (t) {
        try {
          var e = [],
            n = r(t),
            o = (0, i.Get)(n.todoMetaKey);
          return o && (0, a.isArray)(o)
            ? (o.forEach(function (t) {
                var o = (0, i.Get)(n.todoInitial + t);
                o && o.id && e.push(o);
              }),
              e)
            : e;
        } catch (t) {}
      }),
      f = (e.unsetLocalLists = function (t) {
        var e = r(t),
          n = (0, i.Get)(e.listMetaKey);
        return (
          !n ||
          (!(n && !(0, a.isArray)(n)) &&
            (n.forEach(function (t) {
              (0, i.Remove)(e.listInitial + t);
            }),
            (0, i.Remove)(e.listMetaKey),
            !0))
        );
      }),
      h = (e.setLocalLists = function (t, e) {
        if (t && e && e.length) {
          var n = r(t);
          f(t);
          var o = [];
          return (
            e.forEach(function (t) {
              o.push(t.id), (0, i.Set)(n.listInitial + t.id, t);
            }),
            (0, i.Set)(n.listMetaKey, o),
            !0
          );
        }
      }),
      p = (e.getLocalLists = function (t) {
        var e = [],
          n = r(t),
          o = (0, i.Get)(n.listMetaKey);
        return o && (0, a.isArray)(o)
          ? (o.forEach(function (t) {
              var o = (0, i.Get)(n.listInitial + t);
              o && o.id && e.push(o);
            }),
            e)
          : e;
      }),
      v = (e.unsetAllTodos = function () {
        c(s.TodosType.TODOIST), c(s.TodosType.WUNDERLIST);
      }),
      g = (e.unsetAllLists = function () {
        f(s.TodosType.TODOIST), f(s.TodosType.WUNDERLIST);
      }),
      m =
        ((e.unsetThirdPartyTodoData = function () {
          g(),
            v(),
            (0, i.Remove)(o.STORAGE.T_SYNC_TOKEN),
            (0, i.Remove)(o.STORAGE.T_CURRENT_TODO_LIST),
            (0, i.Remove)(o.STORAGE.W_CURRENT_TODO_LIST);
        }),
        (e.unsetTodoTypeLocalData = function (t) {
          t && (f(t), c(t));
        })),
      _ = (e.unsetLocalList = function (t, e) {
        if (t && e) {
          var n = r(t),
            o = (0, i.Get)(n.listMetaKey);
          if (o && (0, a.isArray)(o)) {
            o.splice(o.indexOf(e), 1),
              (0, i.Set)(n.listMetaKey, o),
              (0, i.Remove)(n.listInitial + e);
            var s = (0, i.Get)(n.todoMetaKey),
              c = [];
            s &&
              (0, a.isArray)(s) &&
              (s.forEach(function (t) {
                var o = n.todoInitial + t;
                if ((0, i.Get)(o).list === e) return void (0, i.Remove)(o);
                c.push(t);
              }),
              (0, i.Set)(n.todoMetaKey, c));
          }
        }
      }),
      b = (e.showDeleteIcon = function (t) {
        if (t) {
          var e = ["inbox", "today", "due today"],
            n = t.toLowerCase();
          return -1 === e.indexOf(n);
        }
      }),
      y = (e.addTodayList = function () {
        return { id: 1, name: "Today", isDeleted: !1, isArchived: !1 };
      }),
      C = (e.findInboxList = function (t) {
        if (t)
          return t.find(function (t) {
            return "inbox" === t.title.toLowerCase();
          });
      }),
      T = (e.findInboxListId = function (t) {
        return C(t).id;
      }),
      w = (e.addAfterInbox = function (t, e) {
        if (t && e) {
          var n = [],
            o = C(t);
          return t.splice(o, 1), n.push(o), n.concat(e, t);
        }
      });
    e.default = {
      unsetLocalTodos: c,
      unsetLocalTodo: l,
      setLocalTodos: u,
      getLocalTodos: d,
      getLocalLists: p,
      setLocalLists: h,
      unsetLocalLists: f,
      unsetLocalList: _,
      unsetTodoTypeLocalData: m,
      showDeleteIcon: b,
      addTodayList: y,
      findInboxList: C,
      findInboxListId: T,
      addAfterInbox: w,
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = {
      defaultCustomization: {
        showUtilities: {
          showWeather: !0,
          showClock: !0,
          showNotes: !0,
          showTodos: !0,
          showBookmarks: !0,
        },
        clock: {
          showTwelveHour: !0,
          showDay: !0,
          type: "twelve",
          calendar: { isPinned: !1 },
        },
        weather: {
          unit: "c",
          location: { type: "geo", name: "" },
          weatherInfo: { isPinned: !1 },
        },
        background: { themeId: 1, changeInterval: 2, type: "predefined" },
        notes: { isPinned: !1 },
        todos: { type: "default", isPinned: !1 },
      },
      misc: {
        update: { lastChecked: "12", isToBeFetched: !0, isSeen: !0 },
        background: { isLocked: !1, lockedUrl: "", id: "" },
      },
      other: { weather: { showWeatherInfo: !1 } },
    };
    e.default = o;
    (e.DefaultConfig = o.defaultCustomization), (e.MiscConfig = o.misc);
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = Number(e);
      return n.setDate(n.getDate() + o), n;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t).getTime(),
        o = Number(e);
      return new Date(n + o);
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      var e = i(t),
        n = new Date(0);
      return n.setFullYear(e, 0, 4), n.setHours(0, 0, 0, 0), s(n);
    }
    var i = n(11),
      s = n(12);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = n.getTime(),
        s = i(e),
        a = s.getTime();
      return o < a ? -1 : o > a ? 1 : 0;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      n(170);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(62),
      s = n.n(i);
    for (var a in i)
      "default" !== a &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(a);
    var r = n(172),
      c = n(1),
      l = o,
      u = Object(c.a)(s.a, r.a, r.b, !1, l, "data-v-441d28d3", null);
    e.default = u.exports;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = n(173);
    e.default = {
      isTodayDate: function (t) {
        if (!t) return !1;
        t = +new Date(t);
        var e = new Date(),
          n = +e.setHours(0, 0, 0, 0),
          o = +e.setHours(23, 59, 59, 59);
        return n <= t && t <= o;
      },
      getEndOfDay: function (t) {
        var e = new Date().setHours(23, 59, 59, 59);
        return (
          (t = t || 0),
          (e = new Date(+e + 864e5 * t)),
          e.toISOString().substring(0, 10)
        );
      },
      getDueDateString: function (t) {
        if (t) {
          var e = new Date(),
            n = new Date(t),
            i = e.getDate() + e.getMonth() + e.getFullYear(),
            s = n.getDate() + n.getMonth() + n.getFullYear();
          switch (s) {
            case i:
              return { value: "Today", pending: 1 };
            case i + 1:
              return { value: "Tomorrow", pending: 2 };
            case i - 1:
              return { value: "Yesterday", pending: -1 };
          }
          return e.getFullYear() - n.getFullYear() == 0
            ? { value: (0, o.format)(n, "DD MMM"), pending: s - i }
            : { value: (0, o.format)(n, "DD MMM, YYYY"), pending: s - i };
        }
      },
      getDateInputTypeDate: function (t) {
        if (t) return (0, o.format)(t, "YYYY-MM-DD");
      },
    };
  },
  function (t, e, n) {
    function o(t, e) {
      var n = e ? Number(e.weekStartsOn) || 0 : 0,
        o = i(t),
        s = o.getDay(),
        a = (s < n ? 7 : 0) + s - n;
      return o.setDate(o.getDate() - a), o.setHours(0, 0, 0, 0), o;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = i(e),
        r = n.getTime() - n.getTimezoneOffset() * s,
        c = o.getTime() - o.getTimezoneOffset() * s;
      return Math.round((r - c) / a);
    }
    var i = n(13),
      s = 6e4,
      a = 864e5;
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = Number(e),
        a = n.getMonth() + o,
        r = new Date(0);
      r.setFullYear(n.getFullYear(), a, 1), r.setHours(0, 0, 0, 0);
      var c = s(r);
      return n.setMonth(a, Math.min(c, n.getDate())), n;
    }
    var i = n(0),
      s = n(30);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = i(e);
      return n.getTime() - o.getTime();
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      n(165);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(60),
      s = n.n(i);
    for (var a in i)
      "default" !== a &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(a);
    var r = n(276),
      c = n(1),
      l = o,
      u = Object(c.a)(s.a, r.a, r.b, !1, l, null, null);
    e.default = u.exports;
  },
  function (t, e) {
    function n(t) {
      return t instanceof Date;
    }
    t.exports = n;
  },
  function (t, e, n) {
    function o(t) {
      var e = i(t),
        n = e.getFullYear(),
        o = e.getMonth(),
        s = new Date(0);
      return s.setFullYear(n, o + 1, 0), s.setHours(0, 0, 0, 0), s.getDate();
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = Number(e);
      return i(t, 7 * n);
    }
    var i = n(18);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = n.getTime(),
        s = i(e),
        a = s.getTime();
      return o > a ? -1 : o < a ? 1 : 0;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = i(e),
        r = a(n, o),
        c = Math.abs(s(n, o));
      return n.setMonth(n.getMonth() - r * c), r * (c - (a(n, o) === -r));
    }
    var i = n(0),
      s = n(71),
      a = n(21);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t, e) / 1e3;
      return n > 0 ? Math.floor(n) : Math.ceil(n);
    }
    var i = n(27);
    t.exports = o;
  },
  function (t, e, n) {
    var o = n(186),
      i = n(187);
    t.exports = { distanceInWords: o(), format: i() };
  },
  function (t, e, n) {
    function o(t) {
      var e = i(t);
      return e.setHours(23, 59, 59, 999), e;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      var e = i(t),
        n = s(e).getTime() - a(e).getTime();
      return Math.round(n / r) + 1;
    }
    var i = n(0),
      s = n(12),
      a = n(20),
      r = 6048e5;
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e, n) {
      var o = i(t, n),
        s = i(e, n);
      return o.getTime() === s.getTime();
    }
    var i = n(24);
    t.exports = o;
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      n(277);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(98),
      s = n.n(i);
    for (var a in i)
      "default" !== a &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(a);
    var r = n(279),
      c = n(1),
      l = o,
      u = Object(c.a)(s.a, r.a, r.b, !1, l, null, null);
    e.default = u.exports;
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      n(280);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(99),
      s = n.n(i);
    for (var a in i)
      "default" !== a &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(a);
    var r = n(282),
      c = n(1),
      l = o,
      u = Object(c.a)(s.a, r.a, r.b, !1, l, "data-v-4e40ee63", null);
    e.default = u.exports;
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      n(283);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(100),
      s = n.n(i);
    for (var a in i)
      "default" !== a &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(a);
    var r = n(285),
      c = n(1),
      l = o,
      u = Object(c.a)(s.a, r.a, r.b, !1, l, null, null);
    e.default = u.exports;
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      n(286);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(101),
      s = n.n(i);
    for (var a in i)
      "default" !== a &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(a);
    var r = n(288),
      c = n(1),
      l = o,
      u = Object(c.a)(s.a, r.a, r.b, !1, l, null, null);
    e.default = u.exports;
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      return void 0 === t || null === t;
    }
    function i(t) {
      return void 0 !== t && null !== t;
    }
    function s(t) {
      return !0 === t;
    }
    function a(t) {
      return !1 === t;
    }
    function r(t) {
      return (
        "string" == typeof t ||
        "number" == typeof t ||
        "symbol" == typeof t ||
        "boolean" == typeof t
      );
    }
    function c(t) {
      return null !== t && "object" == typeof t;
    }
    function l(t) {
      return "[object Object]" === bo.call(t);
    }
    function u(t) {
      return "[object RegExp]" === bo.call(t);
    }
    function d(t) {
      var e = parseFloat(String(t));
      return e >= 0 && Math.floor(e) === e && isFinite(t);
    }
    function f(t) {
      return null == t
        ? ""
        : "object" == typeof t
        ? JSON.stringify(t, null, 2)
        : String(t);
    }
    function h(t) {
      var e = parseFloat(t);
      return isNaN(e) ? t : e;
    }
    function p(t, e) {
      for (
        var n = Object.create(null), o = t.split(","), i = 0;
        i < o.length;
        i++
      )
        n[o[i]] = !0;
      return e
        ? function (t) {
            return n[t.toLowerCase()];
          }
        : function (t) {
            return n[t];
          };
    }
    function v(t, e) {
      if (t.length) {
        var n = t.indexOf(e);
        if (n > -1) return t.splice(n, 1);
      }
    }
    function g(t, e) {
      return Co.call(t, e);
    }
    function m(t) {
      var e = Object.create(null);
      return function (n) {
        return e[n] || (e[n] = t(n));
      };
    }
    function _(t, e) {
      function n(n) {
        var o = arguments.length;
        return o ? (o > 1 ? t.apply(e, arguments) : t.call(e, n)) : t.call(e);
      }
      return (n._length = t.length), n;
    }
    function b(t, e) {
      return t.bind(e);
    }
    function y(t, e) {
      e = e || 0;
      for (var n = t.length - e, o = new Array(n); n--; ) o[n] = t[n + e];
      return o;
    }
    function C(t, e) {
      for (var n in e) t[n] = e[n];
      return t;
    }
    function T(t) {
      for (var e = {}, n = 0; n < t.length; n++) t[n] && C(e, t[n]);
      return e;
    }
    function w(t, e, n) {}
    function x(t, e) {
      if (t === e) return !0;
      var n = c(t),
        o = c(e);
      if (!n || !o) return !n && !o && String(t) === String(e);
      try {
        var i = Array.isArray(t),
          s = Array.isArray(e);
        if (i && s)
          return (
            t.length === e.length &&
            t.every(function (t, n) {
              return x(t, e[n]);
            })
          );
        if (i || s) return !1;
        var a = Object.keys(t),
          r = Object.keys(e);
        return (
          a.length === r.length &&
          a.every(function (n) {
            return x(t[n], e[n]);
          })
        );
      } catch (t) {
        return !1;
      }
    }
    function k(t, e) {
      for (var n = 0; n < t.length; n++) if (x(t[n], e)) return n;
      return -1;
    }
    function L(t) {
      var e = !1;
      return function () {
        e || ((e = !0), t.apply(this, arguments));
      };
    }
    function O(t) {
      var e = (t + "").charCodeAt(0);
      return 36 === e || 95 === e;
    }
    function S(t, e, n, o) {
      Object.defineProperty(t, e, {
        value: n,
        enumerable: !!o,
        writable: !0,
        configurable: !0,
      });
    }
    function E(t) {
      if (!No.test(t)) {
        var e = t.split(".");
        return function (t) {
          for (var n = 0; n < e.length; n++) {
            if (!t) return;
            t = t[e[n]];
          }
          return t;
        };
      }
    }
    function M(t) {
      return "function" == typeof t && /native code/.test(t.toString());
    }
    function A(t) {
      ti.target && ei.push(ti.target), (ti.target = t);
    }
    function I() {
      ti.target = ei.pop();
    }
    function D(t) {
      return new ni(void 0, void 0, void 0, String(t));
    }
    function N(t) {
      var e = new ni(
        t.tag,
        t.data,
        t.children,
        t.text,
        t.elm,
        t.context,
        t.componentOptions,
        t.asyncFactory
      );
      return (
        (e.ns = t.ns),
        (e.isStatic = t.isStatic),
        (e.key = t.key),
        (e.isComment = t.isComment),
        (e.fnContext = t.fnContext),
        (e.fnOptions = t.fnOptions),
        (e.fnScopeId = t.fnScopeId),
        (e.isCloned = !0),
        e
      );
    }
    function R(t) {
      ci = t;
    }
    function B(t, e, n) {
      t.__proto__ = e;
    }
    function P(t, e, n) {
      for (var o = 0, i = n.length; o < i; o++) {
        var s = n[o];
        S(t, s, e[s]);
      }
    }
    function U(t, e) {
      if (c(t) && !(t instanceof ni)) {
        var n;
        return (
          g(t, "__ob__") && t.__ob__ instanceof li
            ? (n = t.__ob__)
            : ci &&
              !qo() &&
              (Array.isArray(t) || l(t)) &&
              Object.isExtensible(t) &&
              !t._isVue &&
              (n = new li(t)),
          e && n && n.vmCount++,
          n
        );
      }
    }
    function $(t, e, n, o, i) {
      var s = new ti(),
        a = Object.getOwnPropertyDescriptor(t, e);
      if (!a || !1 !== a.configurable) {
        var r = a && a.get;
        r || 2 !== arguments.length || (n = t[e]);
        var c = a && a.set,
          l = !i && U(n);
        Object.defineProperty(t, e, {
          enumerable: !0,
          configurable: !0,
          get: function () {
            var e = r ? r.call(t) : n;
            return (
              ti.target &&
                (s.depend(), l && (l.dep.depend(), Array.isArray(e) && H(e))),
              e
            );
          },
          set: function (e) {
            var o = r ? r.call(t) : n;
            e === o ||
              (e !== e && o !== o) ||
              (c ? c.call(t, e) : (n = e), (l = !i && U(e)), s.notify());
          },
        });
      }
    }
    function j(t, e, n) {
      if (Array.isArray(t) && d(e))
        return (t.length = Math.max(t.length, e)), t.splice(e, 1, n), n;
      if (e in t && !(e in Object.prototype)) return (t[e] = n), n;
      var o = t.__ob__;
      return t._isVue || (o && o.vmCount)
        ? n
        : o
        ? ($(o.value, e, n), o.dep.notify(), n)
        : ((t[e] = n), n);
    }
    function G(t, e) {
      if (Array.isArray(t) && d(e)) return void t.splice(e, 1);
      var n = t.__ob__;
      t._isVue ||
        (n && n.vmCount) ||
        (g(t, e) && (delete t[e], n && n.dep.notify()));
    }
    function H(t) {
      for (var e = void 0, n = 0, o = t.length; n < o; n++)
        (e = t[n]),
          e && e.__ob__ && e.__ob__.dep.depend(),
          Array.isArray(e) && H(e);
    }
    function W(t, e) {
      if (!e) return t;
      for (var n, o, i, s = Object.keys(e), a = 0; a < s.length; a++)
        (n = s[a]),
          (o = t[n]),
          (i = e[n]),
          g(t, n) ? l(o) && l(i) && W(o, i) : j(t, n, i);
      return t;
    }
    function z(t, e, n) {
      return n
        ? function () {
            var o = "function" == typeof e ? e.call(n, n) : e,
              i = "function" == typeof t ? t.call(n, n) : t;
            return o ? W(o, i) : i;
          }
        : e
        ? t
          ? function () {
              return W(
                "function" == typeof e ? e.call(this, this) : e,
                "function" == typeof t ? t.call(this, this) : t
              );
            }
          : e
        : t;
    }
    function F(t, e) {
      return e ? (t ? t.concat(e) : Array.isArray(e) ? e : [e]) : t;
    }
    function K(t, e, n, o) {
      var i = Object.create(t || null);
      return e ? C(i, e) : i;
    }
    function Y(t, e) {
      var n = t.props;
      if (n) {
        var o,
          i,
          s,
          a = {};
        if (Array.isArray(n))
          for (o = n.length; o--; )
            "string" == typeof (i = n[o]) &&
              ((s = wo(i)), (a[s] = { type: null }));
        else if (l(n))
          for (var r in n)
            (i = n[r]), (s = wo(r)), (a[s] = l(i) ? i : { type: i });
        t.props = a;
      }
    }
    function V(t, e) {
      var n = t.inject;
      if (n) {
        var o = (t.inject = {});
        if (Array.isArray(n))
          for (var i = 0; i < n.length; i++) o[n[i]] = { from: n[i] };
        else if (l(n))
          for (var s in n) {
            var a = n[s];
            o[s] = l(a) ? C({ from: s }, a) : { from: a };
          }
      }
    }
    function q(t) {
      var e = t.directives;
      if (e)
        for (var n in e) {
          var o = e[n];
          "function" == typeof o && (e[n] = { bind: o, update: o });
        }
    }
    function Z(t, e, n) {
      function o(o) {
        var i = ui[o] || hi;
        c[o] = i(t[o], e[o], n, o);
      }
      "function" == typeof e && (e = e.options), Y(e, n), V(e, n), q(e);
      var i = e.extends;
      if ((i && (t = Z(t, i, n)), e.mixins))
        for (var s = 0, a = e.mixins.length; s < a; s++)
          t = Z(t, e.mixins[s], n);
      var r,
        c = {};
      for (r in t) o(r);
      for (r in e) g(t, r) || o(r);
      return c;
    }
    function X(t, e, n, o) {
      if ("string" == typeof n) {
        var i = t[e];
        if (g(i, n)) return i[n];
        var s = wo(n);
        if (g(i, s)) return i[s];
        var a = xo(s);
        if (g(i, a)) return i[a];
        return i[n] || i[s] || i[a];
      }
    }
    function J(t, e, n, o) {
      var i = e[t],
        s = !g(n, t),
        a = n[t],
        r = nt(Boolean, i.type);
      if (r > -1)
        if (s && !g(i, "default")) a = !1;
        else if ("" === a || a === Lo(t)) {
          var c = nt(String, i.type);
          (c < 0 || r < c) && (a = !0);
        }
      if (void 0 === a) {
        a = Q(o, i, t);
        var l = ci;
        R(!0), U(a), R(l);
      }
      return a;
    }
    function Q(t, e, n) {
      if (g(e, "default")) {
        var o = e.default;
        return t &&
          t.$options.propsData &&
          void 0 === t.$options.propsData[n] &&
          void 0 !== t._props[n]
          ? t._props[n]
          : "function" == typeof o && "Function" !== tt(e.type)
          ? o.call(t)
          : o;
      }
    }
    function tt(t) {
      var e = t && t.toString().match(/^\s*function (\w+)/);
      return e ? e[1] : "";
    }
    function et(t, e) {
      return tt(t) === tt(e);
    }
    function nt(t, e) {
      if (!Array.isArray(e)) return et(e, t) ? 0 : -1;
      for (var n = 0, o = e.length; n < o; n++) if (et(e[n], t)) return n;
      return -1;
    }
    function ot(t, e, n) {
      if (e)
        for (var o = e; (o = o.$parent); ) {
          var i = o.$options.errorCaptured;
          if (i)
            for (var s = 0; s < i.length; s++)
              try {
                var a = !1 === i[s].call(o, t, e, n);
                if (a) return;
              } catch (t) {
                it(t, o, "errorCaptured hook");
              }
        }
      it(t, e, n);
    }
    function it(t, e, n) {
      if (Do.errorHandler)
        try {
          return Do.errorHandler.call(null, t, e, n);
        } catch (t) {
          st(t, null, "config.errorHandler");
        }
      st(t, e, n);
    }
    function st(t, e, n) {
      if ((!Bo && !Po) || "undefined" == typeof console) throw t;
      console.error(t);
    }
    function at() {
      vi = !1;
      var t = pi.slice(0);
      pi.length = 0;
      for (var e = 0; e < t.length; e++) t[e]();
    }
    function rt(t) {
      return (
        t._withTask ||
        (t._withTask = function () {
          gi = !0;
          var e = t.apply(null, arguments);
          return (gi = !1), e;
        })
      );
    }
    function ct(t, e) {
      var n;
      if (
        (pi.push(function () {
          if (t)
            try {
              t.call(e);
            } catch (t) {
              ot(t, e, "nextTick");
            }
          else n && n(e);
        }),
        vi || ((vi = !0), gi ? fi() : di()),
        !t && "undefined" != typeof Promise)
      )
        return new Promise(function (t) {
          n = t;
        });
    }
    function lt(t) {
      ut(t, Ci), Ci.clear();
    }
    function ut(t, e) {
      var n,
        o,
        i = Array.isArray(t);
      if (!((!i && !c(t)) || Object.isFrozen(t) || t instanceof ni)) {
        if (t.__ob__) {
          var s = t.__ob__.dep.id;
          if (e.has(s)) return;
          e.add(s);
        }
        if (i) for (n = t.length; n--; ) ut(t[n], e);
        else for (o = Object.keys(t), n = o.length; n--; ) ut(t[o[n]], e);
      }
    }
    function dt(t) {
      function e() {
        var t = arguments,
          n = e.fns;
        if (!Array.isArray(n)) return n.apply(null, arguments);
        for (var o = n.slice(), i = 0; i < o.length; i++) o[i].apply(null, t);
      }
      return (e.fns = t), e;
    }
    function ft(t, e, n, i, s) {
      var a, r, c, l;
      for (a in t)
        (r = t[a]),
          (c = e[a]),
          (l = Ti(a)),
          o(r) ||
            (o(c)
              ? (o(r.fns) && (r = t[a] = dt(r)),
                n(l.name, r, l.once, l.capture, l.passive, l.params))
              : r !== c && ((c.fns = r), (t[a] = c)));
      for (a in e) o(t[a]) && ((l = Ti(a)), i(l.name, e[a], l.capture));
    }
    function ht(t, e, n) {
      function a() {
        n.apply(this, arguments), v(r.fns, a);
      }
      t instanceof ni && (t = t.data.hook || (t.data.hook = {}));
      var r,
        c = t[e];
      o(c)
        ? (r = dt([a]))
        : i(c.fns) && s(c.merged)
        ? ((r = c), r.fns.push(a))
        : (r = dt([c, a])),
        (r.merged = !0),
        (t[e] = r);
    }
    function pt(t, e, n) {
      var s = e.options.props;
      if (!o(s)) {
        var a = {},
          r = t.attrs,
          c = t.props;
        if (i(r) || i(c))
          for (var l in s) {
            var u = Lo(l);
            vt(a, c, l, u, !0) || vt(a, r, l, u, !1);
          }
        return a;
      }
    }
    function vt(t, e, n, o, s) {
      if (i(e)) {
        if (g(e, n)) return (t[n] = e[n]), s || delete e[n], !0;
        if (g(e, o)) return (t[n] = e[o]), s || delete e[o], !0;
      }
      return !1;
    }
    function gt(t) {
      for (var e = 0; e < t.length; e++)
        if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
      return t;
    }
    function mt(t) {
      return r(t) ? [D(t)] : Array.isArray(t) ? bt(t) : void 0;
    }
    function _t(t) {
      return i(t) && i(t.text) && a(t.isComment);
    }
    function bt(t, e) {
      var n,
        a,
        c,
        l,
        u = [];
      for (n = 0; n < t.length; n++)
        (a = t[n]),
          o(a) ||
            "boolean" == typeof a ||
            ((c = u.length - 1),
            (l = u[c]),
            Array.isArray(a)
              ? a.length > 0 &&
                ((a = bt(a, (e || "") + "_" + n)),
                _t(a[0]) &&
                  _t(l) &&
                  ((u[c] = D(l.text + a[0].text)), a.shift()),
                u.push.apply(u, a))
              : r(a)
              ? _t(l)
                ? (u[c] = D(l.text + a))
                : "" !== a && u.push(D(a))
              : _t(a) && _t(l)
              ? (u[c] = D(l.text + a.text))
              : (s(t._isVList) &&
                  i(a.tag) &&
                  o(a.key) &&
                  i(e) &&
                  (a.key = "__vlist" + e + "_" + n + "__"),
                u.push(a)));
      return u;
    }
    function yt(t, e) {
      return (
        (t.__esModule || (Xo && "Module" === t[Symbol.toStringTag])) &&
          (t = t.default),
        c(t) ? e.extend(t) : t
      );
    }
    function Ct(t, e, n, o, i) {
      var s = ii();
      return (
        (s.asyncFactory = t),
        (s.asyncMeta = { data: e, context: n, children: o, tag: i }),
        s
      );
    }
    function Tt(t, e, n) {
      if (s(t.error) && i(t.errorComp)) return t.errorComp;
      if (i(t.resolved)) return t.resolved;
      if (s(t.loading) && i(t.loadingComp)) return t.loadingComp;
      if (!i(t.contexts)) {
        var a = (t.contexts = [n]),
          r = !0,
          l = function () {
            for (var t = 0, e = a.length; t < e; t++) a[t].$forceUpdate();
          },
          u = L(function (n) {
            (t.resolved = yt(n, e)), r || l();
          }),
          d = L(function (e) {
            i(t.errorComp) && ((t.error = !0), l());
          }),
          f = t(u, d);
        return (
          c(f) &&
            ("function" == typeof f.then
              ? o(t.resolved) && f.then(u, d)
              : i(f.component) &&
                "function" == typeof f.component.then &&
                (f.component.then(u, d),
                i(f.error) && (t.errorComp = yt(f.error, e)),
                i(f.loading) &&
                  ((t.loadingComp = yt(f.loading, e)),
                  0 === f.delay
                    ? (t.loading = !0)
                    : setTimeout(function () {
                        o(t.resolved) && o(t.error) && ((t.loading = !0), l());
                      }, f.delay || 200)),
                i(f.timeout) &&
                  setTimeout(function () {
                    o(t.resolved) && d(null);
                  }, f.timeout))),
          (r = !1),
          t.loading ? t.loadingComp : t.resolved
        );
      }
      t.contexts.push(n);
    }
    function wt(t) {
      return t.isComment && t.asyncFactory;
    }
    function xt(t) {
      if (Array.isArray(t))
        for (var e = 0; e < t.length; e++) {
          var n = t[e];
          if (i(n) && (i(n.componentOptions) || wt(n))) return n;
        }
    }
    function kt(t) {
      (t._events = Object.create(null)), (t._hasHookEvent = !1);
      var e = t.$options._parentListeners;
      e && St(t, e);
    }
    function Lt(t, e, n) {
      n ? yi.$once(t, e) : yi.$on(t, e);
    }
    function Ot(t, e) {
      yi.$off(t, e);
    }
    function St(t, e, n) {
      (yi = t), ft(e, n || {}, Lt, Ot, t), (yi = void 0);
    }
    function Et(t, e) {
      var n = {};
      if (!t) return n;
      for (var o = 0, i = t.length; o < i; o++) {
        var s = t[o],
          a = s.data;
        if (
          (a && a.attrs && a.attrs.slot && delete a.attrs.slot,
          (s.context !== e && s.fnContext !== e) || !a || null == a.slot)
        )
          (n.default || (n.default = [])).push(s);
        else {
          var r = a.slot,
            c = n[r] || (n[r] = []);
          "template" === s.tag ? c.push.apply(c, s.children || []) : c.push(s);
        }
      }
      for (var l in n) n[l].every(Mt) && delete n[l];
      return n;
    }
    function Mt(t) {
      return (t.isComment && !t.asyncFactory) || " " === t.text;
    }
    function At(t, e) {
      e = e || {};
      for (var n = 0; n < t.length; n++)
        Array.isArray(t[n]) ? At(t[n], e) : (e[t[n].key] = t[n].fn);
      return e;
    }
    function It(t) {
      var e = t.$options,
        n = e.parent;
      if (n && !e.abstract) {
        for (; n.$options.abstract && n.$parent; ) n = n.$parent;
        n.$children.push(t);
      }
      (t.$parent = n),
        (t.$root = n ? n.$root : t),
        (t.$children = []),
        (t.$refs = {}),
        (t._watcher = null),
        (t._inactive = null),
        (t._directInactive = !1),
        (t._isMounted = !1),
        (t._isDestroyed = !1),
        (t._isBeingDestroyed = !1);
    }
    function Dt(t, e, n) {
      (t.$el = e),
        t.$options.render || (t.$options.render = ii),
        Ut(t, "beforeMount");
      var o;
      return (
        (o = function () {
          t._update(t._render(), n);
        }),
        new Ai(t, o, w, null, !0),
        (n = !1),
        null == t.$vnode && ((t._isMounted = !0), Ut(t, "mounted")),
        t
      );
    }
    function Nt(t, e, n, o, i) {
      var s = !!(
        i ||
        t.$options._renderChildren ||
        o.data.scopedSlots ||
        t.$scopedSlots !== _o
      );
      if (
        ((t.$options._parentVnode = o),
        (t.$vnode = o),
        t._vnode && (t._vnode.parent = o),
        (t.$options._renderChildren = i),
        (t.$attrs = o.data.attrs || _o),
        (t.$listeners = n || _o),
        e && t.$options.props)
      ) {
        R(!1);
        for (
          var a = t._props, r = t.$options._propKeys || [], c = 0;
          c < r.length;
          c++
        ) {
          var l = r[c],
            u = t.$options.props;
          a[l] = J(l, u, e, t);
        }
        R(!0), (t.$options.propsData = e);
      }
      n = n || _o;
      var d = t.$options._parentListeners;
      (t.$options._parentListeners = n),
        St(t, n, d),
        s && ((t.$slots = Et(i, o.context)), t.$forceUpdate());
    }
    function Rt(t) {
      for (; t && (t = t.$parent); ) if (t._inactive) return !0;
      return !1;
    }
    function Bt(t, e) {
      if (e) {
        if (((t._directInactive = !1), Rt(t))) return;
      } else if (t._directInactive) return;
      if (t._inactive || null === t._inactive) {
        t._inactive = !1;
        for (var n = 0; n < t.$children.length; n++) Bt(t.$children[n]);
        Ut(t, "activated");
      }
    }
    function Pt(t, e) {
      if (!((e && ((t._directInactive = !0), Rt(t))) || t._inactive)) {
        t._inactive = !0;
        for (var n = 0; n < t.$children.length; n++) Pt(t.$children[n]);
        Ut(t, "deactivated");
      }
    }
    function Ut(t, e) {
      A();
      var n = t.$options[e];
      if (n)
        for (var o = 0, i = n.length; o < i; o++)
          try {
            n[o].call(t);
          } catch (n) {
            ot(n, t, e + " hook");
          }
      t._hasHookEvent && t.$emit("hook:" + e), I();
    }
    function $t() {
      (Ei = xi.length = ki.length = 0), (Li = {}), (Oi = Si = !1);
    }
    function jt() {
      Si = !0;
      var t, e;
      for (
        xi.sort(function (t, e) {
          return t.id - e.id;
        }),
          Ei = 0;
        Ei < xi.length;
        Ei++
      )
        (t = xi[Ei]), (e = t.id), (Li[e] = null), t.run();
      var n = ki.slice(),
        o = xi.slice();
      $t(), Wt(n), Gt(o), Zo && Do.devtools && Zo.emit("flush");
    }
    function Gt(t) {
      for (var e = t.length; e--; ) {
        var n = t[e],
          o = n.vm;
        o._watcher === n && o._isMounted && Ut(o, "updated");
      }
    }
    function Ht(t) {
      (t._inactive = !1), ki.push(t);
    }
    function Wt(t) {
      for (var e = 0; e < t.length; e++) (t[e]._inactive = !0), Bt(t[e], !0);
    }
    function zt(t) {
      var e = t.id;
      if (null == Li[e]) {
        if (((Li[e] = !0), Si)) {
          for (var n = xi.length - 1; n > Ei && xi[n].id > t.id; ) n--;
          xi.splice(n + 1, 0, t);
        } else xi.push(t);
        Oi || ((Oi = !0), ct(jt));
      }
    }
    function Ft(t, e, n) {
      (Ii.get = function () {
        return this[e][n];
      }),
        (Ii.set = function (t) {
          this[e][n] = t;
        }),
        Object.defineProperty(t, n, Ii);
    }
    function Kt(t) {
      t._watchers = [];
      var e = t.$options;
      e.props && Yt(t, e.props),
        e.methods && Qt(t, e.methods),
        e.data ? Vt(t) : U((t._data = {}), !0),
        e.computed && Zt(t, e.computed),
        e.watch && e.watch !== zo && te(t, e.watch);
    }
    function Yt(t, e) {
      var n = t.$options.propsData || {},
        o = (t._props = {}),
        i = (t.$options._propKeys = []);
      !t.$parent || R(!1);
      for (var s in e)
        !(function (s) {
          i.push(s);
          var a = J(s, e, n, t);
          $(o, s, a), s in t || Ft(t, "_props", s);
        })(s);
      R(!0);
    }
    function Vt(t) {
      var e = t.$options.data;
      (e = t._data = "function" == typeof e ? qt(e, t) : e || {}),
        l(e) || (e = {});
      for (
        var n = Object.keys(e),
          o = t.$options.props,
          i = (t.$options.methods, n.length);
        i--;

      ) {
        var s = n[i];
        (o && g(o, s)) || O(s) || Ft(t, "_data", s);
      }
      U(e, !0);
    }
    function qt(t, e) {
      A();
      try {
        return t.call(e, e);
      } catch (t) {
        return ot(t, e, "data()"), {};
      } finally {
        I();
      }
    }
    function Zt(t, e) {
      var n = (t._computedWatchers = Object.create(null)),
        o = qo();
      for (var i in e) {
        var s = e[i],
          a = "function" == typeof s ? s : s.get;
        o || (n[i] = new Ai(t, a || w, w, Di)), i in t || Xt(t, i, s);
      }
    }
    function Xt(t, e, n) {
      var o = !qo();
      "function" == typeof n
        ? ((Ii.get = o ? Jt(e) : n), (Ii.set = w))
        : ((Ii.get = n.get ? (o && !1 !== n.cache ? Jt(e) : n.get) : w),
          (Ii.set = n.set ? n.set : w)),
        Object.defineProperty(t, e, Ii);
    }
    function Jt(t) {
      return function () {
        var e = this._computedWatchers && this._computedWatchers[t];
        if (e) return e.dirty && e.evaluate(), ti.target && e.depend(), e.value;
      };
    }
    function Qt(t, e) {
      t.$options.props;
      for (var n in e) t[n] = null == e[n] ? w : Oo(e[n], t);
    }
    function te(t, e) {
      for (var n in e) {
        var o = e[n];
        if (Array.isArray(o)) for (var i = 0; i < o.length; i++) ee(t, n, o[i]);
        else ee(t, n, o);
      }
    }
    function ee(t, e, n, o) {
      return (
        l(n) && ((o = n), (n = n.handler)),
        "string" == typeof n && (n = t[n]),
        t.$watch(e, n, o)
      );
    }
    function ne(t) {
      var e = t.$options.provide;
      e && (t._provided = "function" == typeof e ? e.call(t) : e);
    }
    function oe(t) {
      var e = ie(t.$options.inject, t);
      e &&
        (R(!1),
        Object.keys(e).forEach(function (n) {
          $(t, n, e[n]);
        }),
        R(!0));
    }
    function ie(t, e) {
      if (t) {
        for (
          var n = Object.create(null),
            o = Xo
              ? Reflect.ownKeys(t).filter(function (e) {
                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
              : Object.keys(t),
            i = 0;
          i < o.length;
          i++
        ) {
          for (var s = o[i], a = t[s].from, r = e; r; ) {
            if (r._provided && g(r._provided, a)) {
              n[s] = r._provided[a];
              break;
            }
            r = r.$parent;
          }
          if (!r && "default" in t[s]) {
            var c = t[s].default;
            n[s] = "function" == typeof c ? c.call(e) : c;
          }
        }
        return n;
      }
    }
    function se(t, e) {
      var n, o, s, a, r;
      if (Array.isArray(t) || "string" == typeof t)
        for (n = new Array(t.length), o = 0, s = t.length; o < s; o++)
          n[o] = e(t[o], o);
      else if ("number" == typeof t)
        for (n = new Array(t), o = 0; o < t; o++) n[o] = e(o + 1, o);
      else if (c(t))
        for (
          a = Object.keys(t), n = new Array(a.length), o = 0, s = a.length;
          o < s;
          o++
        )
          (r = a[o]), (n[o] = e(t[r], r, o));
      return i(n) && (n._isVList = !0), n;
    }
    function ae(t, e, n, o) {
      var i,
        s = this.$scopedSlots[t];
      if (s) (n = n || {}), o && (n = C(C({}, o), n)), (i = s(n) || e);
      else {
        var a = this.$slots[t];
        a && (a._rendered = !0), (i = a || e);
      }
      var r = n && n.slot;
      return r ? this.$createElement("template", { slot: r }, i) : i;
    }
    function re(t) {
      return X(this.$options, "filters", t, !0) || Eo;
    }
    function ce(t, e) {
      return Array.isArray(t) ? -1 === t.indexOf(e) : t !== e;
    }
    function le(t, e, n, o, i) {
      var s = Do.keyCodes[e] || n;
      return i && o && !Do.keyCodes[e]
        ? ce(i, o)
        : s
        ? ce(s, t)
        : o
        ? Lo(o) !== e
        : void 0;
    }
    function ue(t, e, n, o, i) {
      if (n)
        if (c(n)) {
          Array.isArray(n) && (n = T(n));
          var s;
          for (var a in n)
            !(function (a) {
              if ("class" === a || "style" === a || yo(a)) s = t;
              else {
                var r = t.attrs && t.attrs.type;
                s =
                  o || Do.mustUseProp(e, r, a)
                    ? t.domProps || (t.domProps = {})
                    : t.attrs || (t.attrs = {});
              }
              if (!(a in s) && ((s[a] = n[a]), i)) {
                (t.on || (t.on = {}))["update:" + a] = function (t) {
                  n[a] = t;
                };
              }
            })(a);
        } else;
      return t;
    }
    function de(t, e) {
      var n = this._staticTrees || (this._staticTrees = []),
        o = n[t];
      return o && !e
        ? o
        : ((o = n[t] =
            this.$options.staticRenderFns[t].call(
              this._renderProxy,
              null,
              this
            )),
          he(o, "__static__" + t, !1),
          o);
    }
    function fe(t, e, n) {
      return he(t, "__once__" + e + (n ? "_" + n : ""), !0), t;
    }
    function he(t, e, n) {
      if (Array.isArray(t))
        for (var o = 0; o < t.length; o++)
          t[o] && "string" != typeof t[o] && pe(t[o], e + "_" + o, n);
      else pe(t, e, n);
    }
    function pe(t, e, n) {
      (t.isStatic = !0), (t.key = e), (t.isOnce = n);
    }
    function ve(t, e) {
      if (e)
        if (l(e)) {
          var n = (t.on = t.on ? C({}, t.on) : {});
          for (var o in e) {
            var i = n[o],
              s = e[o];
            n[o] = i ? [].concat(i, s) : s;
          }
        } else;
      return t;
    }
    function ge(t) {
      (t._o = fe),
        (t._n = h),
        (t._s = f),
        (t._l = se),
        (t._t = ae),
        (t._q = x),
        (t._i = k),
        (t._m = de),
        (t._f = re),
        (t._k = le),
        (t._b = ue),
        (t._v = D),
        (t._e = ii),
        (t._u = At),
        (t._g = ve);
    }
    function me(t, e, n, o, i) {
      var a,
        r = i.options;
      g(o, "_uid")
        ? ((a = Object.create(o)), (a._original = o))
        : ((a = o), (o = o._original));
      var c = s(r._compiled),
        l = !c;
      (this.data = t),
        (this.props = e),
        (this.children = n),
        (this.parent = o),
        (this.listeners = t.on || _o),
        (this.injections = ie(r.inject, o)),
        (this.slots = function () {
          return Et(n, o);
        }),
        c &&
          ((this.$options = r),
          (this.$slots = this.slots()),
          (this.$scopedSlots = t.scopedSlots || _o)),
        r._scopeId
          ? (this._c = function (t, e, n, i) {
              var s = ke(a, t, e, n, i, l);
              return (
                s &&
                  !Array.isArray(s) &&
                  ((s.fnScopeId = r._scopeId), (s.fnContext = o)),
                s
              );
            })
          : (this._c = function (t, e, n, o) {
              return ke(a, t, e, n, o, l);
            });
    }
    function _e(t, e, n, o, s) {
      var a = t.options,
        r = {},
        c = a.props;
      if (i(c)) for (var l in c) r[l] = J(l, c, e || _o);
      else i(n.attrs) && ye(r, n.attrs), i(n.props) && ye(r, n.props);
      var u = new me(n, r, s, o, t),
        d = a.render.call(null, u._c, u);
      if (d instanceof ni) return be(d, n, u.parent, a);
      if (Array.isArray(d)) {
        for (
          var f = mt(d) || [], h = new Array(f.length), p = 0;
          p < f.length;
          p++
        )
          h[p] = be(f[p], n, u.parent, a);
        return h;
      }
    }
    function be(t, e, n, o) {
      var i = N(t);
      return (
        (i.fnContext = n),
        (i.fnOptions = o),
        e.slot && ((i.data || (i.data = {})).slot = e.slot),
        i
      );
    }
    function ye(t, e) {
      for (var n in e) t[wo(n)] = e[n];
    }
    function Ce(t, e, n, a, r) {
      if (!o(t)) {
        var l = n.$options._base;
        if ((c(t) && (t = l.extend(t)), "function" == typeof t)) {
          var u;
          if (o(t.cid) && ((u = t), void 0 === (t = Tt(u, l, n))))
            return Ct(u, e, n, a, r);
          (e = e || {}), Ae(t), i(e.model) && xe(t.options, e);
          var d = pt(e, t, r);
          if (s(t.options.functional)) return _e(t, d, e, n, a);
          var f = e.on;
          if (((e.on = e.nativeOn), s(t.options.abstract))) {
            var h = e.slot;
            (e = {}), h && (e.slot = h);
          }
          we(e);
          var p = t.options.name || r;
          return new ni(
            "vue-component-" + t.cid + (p ? "-" + p : ""),
            e,
            void 0,
            void 0,
            void 0,
            n,
            { Ctor: t, propsData: d, listeners: f, tag: r, children: a },
            u
          );
        }
      }
    }
    function Te(t, e, n, o) {
      var s = {
          _isComponent: !0,
          parent: e,
          _parentVnode: t,
          _parentElm: n || null,
          _refElm: o || null,
        },
        a = t.data.inlineTemplate;
      return (
        i(a) &&
          ((s.render = a.render), (s.staticRenderFns = a.staticRenderFns)),
        new t.componentOptions.Ctor(s)
      );
    }
    function we(t) {
      for (var e = t.hook || (t.hook = {}), n = 0; n < Ri.length; n++) {
        var o = Ri[n];
        e[o] = Ni[o];
      }
    }
    function xe(t, e) {
      var n = (t.model && t.model.prop) || "value",
        o = (t.model && t.model.event) || "input";
      (e.props || (e.props = {}))[n] = e.model.value;
      var s = e.on || (e.on = {});
      i(s[o])
        ? (s[o] = [e.model.callback].concat(s[o]))
        : (s[o] = e.model.callback);
    }
    function ke(t, e, n, o, i, a) {
      return (
        (Array.isArray(n) || r(n)) && ((i = o), (o = n), (n = void 0)),
        s(a) && (i = Pi),
        Le(t, e, n, o, i)
      );
    }
    function Le(t, e, n, o, s) {
      if (i(n) && i(n.__ob__)) return ii();
      if ((i(n) && i(n.is) && (e = n.is), !e)) return ii();
      Array.isArray(o) &&
        "function" == typeof o[0] &&
        ((n = n || {}), (n.scopedSlots = { default: o[0] }), (o.length = 0)),
        s === Pi ? (o = mt(o)) : s === Bi && (o = gt(o));
      var a, r;
      if ("string" == typeof e) {
        var c;
        (r = (t.$vnode && t.$vnode.ns) || Do.getTagNamespace(e)),
          (a = Do.isReservedTag(e)
            ? new ni(Do.parsePlatformTagName(e), n, o, void 0, void 0, t)
            : i((c = X(t.$options, "components", e)))
            ? Ce(c, n, t, o, e)
            : new ni(e, n, o, void 0, void 0, t));
      } else a = Ce(e, n, t, o);
      return Array.isArray(a)
        ? a
        : i(a)
        ? (i(r) && Oe(a, r), i(n) && Se(n), a)
        : ii();
    }
    function Oe(t, e, n) {
      if (
        ((t.ns = e),
        "foreignObject" === t.tag && ((e = void 0), (n = !0)),
        i(t.children))
      )
        for (var a = 0, r = t.children.length; a < r; a++) {
          var c = t.children[a];
          i(c.tag) && (o(c.ns) || (s(n) && "svg" !== c.tag)) && Oe(c, e, n);
        }
    }
    function Se(t) {
      c(t.style) && lt(t.style), c(t.class) && lt(t.class);
    }
    function Ee(t) {
      (t._vnode = null), (t._staticTrees = null);
      var e = t.$options,
        n = (t.$vnode = e._parentVnode),
        o = n && n.context;
      (t.$slots = Et(e._renderChildren, o)),
        (t.$scopedSlots = _o),
        (t._c = function (e, n, o, i) {
          return ke(t, e, n, o, i, !1);
        }),
        (t.$createElement = function (e, n, o, i) {
          return ke(t, e, n, o, i, !0);
        });
      var i = n && n.data;
      $(t, "$attrs", (i && i.attrs) || _o, null, !0),
        $(t, "$listeners", e._parentListeners || _o, null, !0);
    }
    function Me(t, e) {
      var n = (t.$options = Object.create(t.constructor.options)),
        o = e._parentVnode;
      (n.parent = e.parent),
        (n._parentVnode = o),
        (n._parentElm = e._parentElm),
        (n._refElm = e._refElm);
      var i = o.componentOptions;
      (n.propsData = i.propsData),
        (n._parentListeners = i.listeners),
        (n._renderChildren = i.children),
        (n._componentTag = i.tag),
        e.render &&
          ((n.render = e.render), (n.staticRenderFns = e.staticRenderFns));
    }
    function Ae(t) {
      var e = t.options;
      if (t.super) {
        var n = Ae(t.super);
        if (n !== t.superOptions) {
          t.superOptions = n;
          var o = Ie(t);
          o && C(t.extendOptions, o),
            (e = t.options = Z(n, t.extendOptions)),
            e.name && (e.components[e.name] = t);
        }
      }
      return e;
    }
    function Ie(t) {
      var e,
        n = t.options,
        o = t.extendOptions,
        i = t.sealedOptions;
      for (var s in n)
        n[s] !== i[s] && (e || (e = {}), (e[s] = De(n[s], o[s], i[s])));
      return e;
    }
    function De(t, e, n) {
      if (Array.isArray(t)) {
        var o = [];
        (n = Array.isArray(n) ? n : [n]), (e = Array.isArray(e) ? e : [e]);
        for (var i = 0; i < t.length; i++)
          (e.indexOf(t[i]) >= 0 || n.indexOf(t[i]) < 0) && o.push(t[i]);
        return o;
      }
      return t;
    }
    function Ne(t) {
      this._init(t);
    }
    function Re(t) {
      t.use = function (t) {
        var e = this._installedPlugins || (this._installedPlugins = []);
        if (e.indexOf(t) > -1) return this;
        var n = y(arguments, 1);
        return (
          n.unshift(this),
          "function" == typeof t.install
            ? t.install.apply(t, n)
            : "function" == typeof t && t.apply(null, n),
          e.push(t),
          this
        );
      };
    }
    function Be(t) {
      t.mixin = function (t) {
        return (this.options = Z(this.options, t)), this;
      };
    }
    function Pe(t) {
      t.cid = 0;
      var e = 1;
      t.extend = function (t) {
        t = t || {};
        var n = this,
          o = n.cid,
          i = t._Ctor || (t._Ctor = {});
        if (i[o]) return i[o];
        var s = t.name || n.options.name,
          a = function (t) {
            this._init(t);
          };
        return (
          (a.prototype = Object.create(n.prototype)),
          (a.prototype.constructor = a),
          (a.cid = e++),
          (a.options = Z(n.options, t)),
          (a.super = n),
          a.options.props && Ue(a),
          a.options.computed && $e(a),
          (a.extend = n.extend),
          (a.mixin = n.mixin),
          (a.use = n.use),
          Ao.forEach(function (t) {
            a[t] = n[t];
          }),
          s && (a.options.components[s] = a),
          (a.superOptions = n.options),
          (a.extendOptions = t),
          (a.sealedOptions = C({}, a.options)),
          (i[o] = a),
          a
        );
      };
    }
    function Ue(t) {
      var e = t.options.props;
      for (var n in e) Ft(t.prototype, "_props", n);
    }
    function $e(t) {
      var e = t.options.computed;
      for (var n in e) Xt(t.prototype, n, e[n]);
    }
    function je(t) {
      Ao.forEach(function (e) {
        t[e] = function (t, n) {
          return n
            ? ("component" === e &&
                l(n) &&
                ((n.name = n.name || t), (n = this.options._base.extend(n))),
              "directive" === e &&
                "function" == typeof n &&
                (n = { bind: n, update: n }),
              (this.options[e + "s"][t] = n),
              n)
            : this.options[e + "s"][t];
        };
      });
    }
    function Ge(t) {
      return t && (t.Ctor.options.name || t.tag);
    }
    function He(t, e) {
      return Array.isArray(t)
        ? t.indexOf(e) > -1
        : "string" == typeof t
        ? t.split(",").indexOf(e) > -1
        : !!u(t) && t.test(e);
    }
    function We(t, e) {
      var n = t.cache,
        o = t.keys,
        i = t._vnode;
      for (var s in n) {
        var a = n[s];
        if (a) {
          var r = Ge(a.componentOptions);
          r && !e(r) && ze(n, s, o, i);
        }
      }
    }
    function ze(t, e, n, o) {
      var i = t[e];
      !i || (o && i.tag === o.tag) || i.componentInstance.$destroy(),
        (t[e] = null),
        v(n, e);
    }
    function Fe(t) {
      for (var e = t.data, n = t, o = t; i(o.componentInstance); )
        (o = o.componentInstance._vnode) && o.data && (e = Ke(o.data, e));
      for (; i((n = n.parent)); ) n && n.data && (e = Ke(e, n.data));
      return Ye(e.staticClass, e.class);
    }
    function Ke(t, e) {
      return {
        staticClass: Ve(t.staticClass, e.staticClass),
        class: i(t.class) ? [t.class, e.class] : e.class,
      };
    }
    function Ye(t, e) {
      return i(t) || i(e) ? Ve(t, qe(e)) : "";
    }
    function Ve(t, e) {
      return t ? (e ? t + " " + e : t) : e || "";
    }
    function qe(t) {
      return Array.isArray(t)
        ? Ze(t)
        : c(t)
        ? Xe(t)
        : "string" == typeof t
        ? t
        : "";
    }
    function Ze(t) {
      for (var e, n = "", o = 0, s = t.length; o < s; o++)
        i((e = qe(t[o]))) && "" !== e && (n && (n += " "), (n += e));
      return n;
    }
    function Xe(t) {
      var e = "";
      for (var n in t) t[n] && (e && (e += " "), (e += n));
      return e;
    }
    function Je(t) {
      return es(t) ? "svg" : "math" === t ? "math" : void 0;
    }
    function Qe(t) {
      if (!Bo) return !0;
      if (ns(t)) return !1;
      if (((t = t.toLowerCase()), null != os[t])) return os[t];
      var e = document.createElement(t);
      return t.indexOf("-") > -1
        ? (os[t] =
            e.constructor === window.HTMLUnknownElement ||
            e.constructor === window.HTMLElement)
        : (os[t] = /HTMLUnknownElement/.test(e.toString()));
    }
    function tn(t) {
      if ("string" == typeof t) {
        var e = document.querySelector(t);
        return e || document.createElement("div");
      }
      return t;
    }
    function en(t, e) {
      var n = document.createElement(t);
      return "select" !== t
        ? n
        : (e.data &&
            e.data.attrs &&
            void 0 !== e.data.attrs.multiple &&
            n.setAttribute("multiple", "multiple"),
          n);
    }
    function nn(t, e) {
      return document.createElementNS(Qi[t], e);
    }
    function on(t) {
      return document.createTextNode(t);
    }
    function sn(t) {
      return document.createComment(t);
    }
    function an(t, e, n) {
      t.insertBefore(e, n);
    }
    function rn(t, e) {
      t.removeChild(e);
    }
    function cn(t, e) {
      t.appendChild(e);
    }
    function ln(t) {
      return t.parentNode;
    }
    function un(t) {
      return t.nextSibling;
    }
    function dn(t) {
      return t.tagName;
    }
    function fn(t, e) {
      t.textContent = e;
    }
    function hn(t, e) {
      t.setAttribute(e, "");
    }
    function pn(t, e) {
      var n = t.data.ref;
      if (i(n)) {
        var o = t.context,
          s = t.componentInstance || t.elm,
          a = o.$refs;
        e
          ? Array.isArray(a[n])
            ? v(a[n], s)
            : a[n] === s && (a[n] = void 0)
          : t.data.refInFor
          ? Array.isArray(a[n])
            ? a[n].indexOf(s) < 0 && a[n].push(s)
            : (a[n] = [s])
          : (a[n] = s);
      }
    }
    function vn(t, e) {
      return (
        t.key === e.key &&
        ((t.tag === e.tag &&
          t.isComment === e.isComment &&
          i(t.data) === i(e.data) &&
          gn(t, e)) ||
          (s(t.isAsyncPlaceholder) &&
            t.asyncFactory === e.asyncFactory &&
            o(e.asyncFactory.error)))
      );
    }
    function gn(t, e) {
      if ("input" !== t.tag) return !0;
      var n,
        o = i((n = t.data)) && i((n = n.attrs)) && n.type,
        s = i((n = e.data)) && i((n = n.attrs)) && n.type;
      return o === s || (is(o) && is(s));
    }
    function mn(t, e, n) {
      var o,
        s,
        a = {};
      for (o = e; o <= n; ++o) (s = t[o].key), i(s) && (a[s] = o);
      return a;
    }
    function _n(t, e) {
      (t.data.directives || e.data.directives) && bn(t, e);
    }
    function bn(t, e) {
      var n,
        o,
        i,
        s = t === rs,
        a = e === rs,
        r = yn(t.data.directives, t.context),
        c = yn(e.data.directives, e.context),
        l = [],
        u = [];
      for (n in c)
        (o = r[n]),
          (i = c[n]),
          o
            ? ((i.oldValue = o.value),
              Tn(i, "update", e, t),
              i.def && i.def.componentUpdated && u.push(i))
            : (Tn(i, "bind", e, t), i.def && i.def.inserted && l.push(i));
      if (l.length) {
        var d = function () {
          for (var n = 0; n < l.length; n++) Tn(l[n], "inserted", e, t);
        };
        s ? ht(e, "insert", d) : d();
      }
      if (
        (u.length &&
          ht(e, "postpatch", function () {
            for (var n = 0; n < u.length; n++)
              Tn(u[n], "componentUpdated", e, t);
          }),
        !s)
      )
        for (n in r) c[n] || Tn(r[n], "unbind", t, t, a);
    }
    function yn(t, e) {
      var n = Object.create(null);
      if (!t) return n;
      var o, i;
      for (o = 0; o < t.length; o++)
        (i = t[o]),
          i.modifiers || (i.modifiers = us),
          (n[Cn(i)] = i),
          (i.def = X(e.$options, "directives", i.name, !0));
      return n;
    }
    function Cn(t) {
      return (
        t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".")
      );
    }
    function Tn(t, e, n, o, i) {
      var s = t.def && t.def[e];
      if (s)
        try {
          s(n.elm, t, n, o, i);
        } catch (o) {
          ot(o, n.context, "directive " + t.name + " " + e + " hook");
        }
    }
    function wn(t, e) {
      var n = e.componentOptions;
      if (
        !(
          (i(n) && !1 === n.Ctor.options.inheritAttrs) ||
          (o(t.data.attrs) && o(e.data.attrs))
        )
      ) {
        var s,
          a,
          r = e.elm,
          c = t.data.attrs || {},
          l = e.data.attrs || {};
        i(l.__ob__) && (l = e.data.attrs = C({}, l));
        for (s in l) (a = l[s]), c[s] !== a && xn(r, s, a);
        (jo || Ho) && l.value !== c.value && xn(r, "value", l.value);
        for (s in c)
          o(l[s]) &&
            (Zi(s)
              ? r.removeAttributeNS(qi, Xi(s))
              : Yi(s) || r.removeAttribute(s));
      }
    }
    function xn(t, e, n) {
      t.tagName.indexOf("-") > -1
        ? kn(t, e, n)
        : Vi(e)
        ? Ji(n)
          ? t.removeAttribute(e)
          : ((n =
              "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e),
            t.setAttribute(e, n))
        : Yi(e)
        ? t.setAttribute(e, Ji(n) || "false" === n ? "false" : "true")
        : Zi(e)
        ? Ji(n)
          ? t.removeAttributeNS(qi, Xi(e))
          : t.setAttributeNS(qi, e, n)
        : kn(t, e, n);
    }
    function kn(t, e, n) {
      if (Ji(n)) t.removeAttribute(e);
      else {
        if (
          jo &&
          !Go &&
          "TEXTAREA" === t.tagName &&
          "placeholder" === e &&
          !t.__ieph
        ) {
          var o = function (e) {
            e.stopImmediatePropagation(), t.removeEventListener("input", o);
          };
          t.addEventListener("input", o), (t.__ieph = !0);
        }
        t.setAttribute(e, n);
      }
    }
    function Ln(t, e) {
      var n = e.elm,
        s = e.data,
        a = t.data;
      if (
        !(
          o(s.staticClass) &&
          o(s.class) &&
          (o(a) || (o(a.staticClass) && o(a.class)))
        )
      ) {
        var r = Fe(e),
          c = n._transitionClasses;
        i(c) && (r = Ve(r, qe(c))),
          r !== n._prevClass &&
            (n.setAttribute("class", r), (n._prevClass = r));
      }
    }
    function On(t) {
      if (i(t[ps])) {
        var e = jo ? "change" : "input";
        (t[e] = [].concat(t[ps], t[e] || [])), delete t[ps];
      }
      i(t[vs]) && ((t.change = [].concat(t[vs], t.change || [])), delete t[vs]);
    }
    function Sn(t, e, n) {
      var o = Hi;
      return function i() {
        null !== t.apply(null, arguments) && Mn(e, i, n, o);
      };
    }
    function En(t, e, n, o, i) {
      (e = rt(e)),
        n && (e = Sn(e, t, o)),
        Hi.addEventListener(t, e, Fo ? { capture: o, passive: i } : o);
    }
    function Mn(t, e, n, o) {
      (o || Hi).removeEventListener(t, e._withTask || e, n);
    }
    function An(t, e) {
      if (!o(t.data.on) || !o(e.data.on)) {
        var n = e.data.on || {},
          i = t.data.on || {};
        (Hi = e.elm), On(n), ft(n, i, En, Mn, e.context), (Hi = void 0);
      }
    }
    function In(t, e) {
      if (!o(t.data.domProps) || !o(e.data.domProps)) {
        var n,
          s,
          a = e.elm,
          r = t.data.domProps || {},
          c = e.data.domProps || {};
        i(c.__ob__) && (c = e.data.domProps = C({}, c));
        for (n in r) o(c[n]) && (a[n] = "");
        for (n in c) {
          if (((s = c[n]), "textContent" === n || "innerHTML" === n)) {
            if ((e.children && (e.children.length = 0), s === r[n])) continue;
            1 === a.childNodes.length && a.removeChild(a.childNodes[0]);
          }
          if ("value" === n) {
            a._value = s;
            var l = o(s) ? "" : String(s);
            Dn(a, l) && (a.value = l);
          } else a[n] = s;
        }
      }
    }
    function Dn(t, e) {
      return !t.composing && ("OPTION" === t.tagName || Nn(t, e) || Rn(t, e));
    }
    function Nn(t, e) {
      var n = !0;
      try {
        n = document.activeElement !== t;
      } catch (t) {}
      return n && t.value !== e;
    }
    function Rn(t, e) {
      var n = t.value,
        o = t._vModifiers;
      if (i(o)) {
        if (o.lazy) return !1;
        if (o.number) return h(n) !== h(e);
        if (o.trim) return n.trim() !== e.trim();
      }
      return n !== e;
    }
    function Bn(t) {
      var e = Pn(t.style);
      return t.staticStyle ? C(t.staticStyle, e) : e;
    }
    function Pn(t) {
      return Array.isArray(t) ? T(t) : "string" == typeof t ? _s(t) : t;
    }
    function Un(t, e) {
      var n,
        o = {};
      if (e)
        for (var i = t; i.componentInstance; )
          (i = i.componentInstance._vnode) &&
            i.data &&
            (n = Bn(i.data)) &&
            C(o, n);
      (n = Bn(t.data)) && C(o, n);
      for (var s = t; (s = s.parent); ) s.data && (n = Bn(s.data)) && C(o, n);
      return o;
    }
    function $n(t, e) {
      var n = e.data,
        s = t.data;
      if (!(o(n.staticStyle) && o(n.style) && o(s.staticStyle) && o(s.style))) {
        var a,
          r,
          c = e.elm,
          l = s.staticStyle,
          u = s.normalizedStyle || s.style || {},
          d = l || u,
          f = Pn(e.data.style) || {};
        e.data.normalizedStyle = i(f.__ob__) ? C({}, f) : f;
        var h = Un(e, !0);
        for (r in d) o(h[r]) && Cs(c, r, "");
        for (r in h) (a = h[r]) !== d[r] && Cs(c, r, null == a ? "" : a);
      }
    }
    function jn(t, e) {
      if (e && (e = e.trim()))
        if (t.classList)
          e.indexOf(" ") > -1
            ? e.split(/\s+/).forEach(function (e) {
                return t.classList.add(e);
              })
            : t.classList.add(e);
        else {
          var n = " " + (t.getAttribute("class") || "") + " ";
          n.indexOf(" " + e + " ") < 0 &&
            t.setAttribute("class", (n + e).trim());
        }
    }
    function Gn(t, e) {
      if (e && (e = e.trim()))
        if (t.classList)
          e.indexOf(" ") > -1
            ? e.split(/\s+/).forEach(function (e) {
                return t.classList.remove(e);
              })
            : t.classList.remove(e),
            t.classList.length || t.removeAttribute("class");
        else {
          for (
            var n = " " + (t.getAttribute("class") || "") + " ",
              o = " " + e + " ";
            n.indexOf(o) >= 0;

          )
            n = n.replace(o, " ");
          (n = n.trim()),
            n ? t.setAttribute("class", n) : t.removeAttribute("class");
        }
    }
    function Hn(t) {
      if (t) {
        if ("object" == typeof t) {
          var e = {};
          return !1 !== t.css && C(e, ks(t.name || "v")), C(e, t), e;
        }
        return "string" == typeof t ? ks(t) : void 0;
      }
    }
    function Wn(t) {
      Ds(function () {
        Ds(t);
      });
    }
    function zn(t, e) {
      var n = t._transitionClasses || (t._transitionClasses = []);
      n.indexOf(e) < 0 && (n.push(e), jn(t, e));
    }
    function Fn(t, e) {
      t._transitionClasses && v(t._transitionClasses, e), Gn(t, e);
    }
    function Kn(t, e, n) {
      var o = Yn(t, e),
        i = o.type,
        s = o.timeout,
        a = o.propCount;
      if (!i) return n();
      var r = i === Os ? Ms : Is,
        c = 0,
        l = function () {
          t.removeEventListener(r, u), n();
        },
        u = function (e) {
          e.target === t && ++c >= a && l();
        };
      setTimeout(function () {
        c < a && l();
      }, s + 1),
        t.addEventListener(r, u);
    }
    function Yn(t, e) {
      var n,
        o = window.getComputedStyle(t),
        i = o[Es + "Delay"].split(", "),
        s = o[Es + "Duration"].split(", "),
        a = Vn(i, s),
        r = o[As + "Delay"].split(", "),
        c = o[As + "Duration"].split(", "),
        l = Vn(r, c),
        u = 0,
        d = 0;
      return (
        e === Os
          ? a > 0 && ((n = Os), (u = a), (d = s.length))
          : e === Ss
          ? l > 0 && ((n = Ss), (u = l), (d = c.length))
          : ((u = Math.max(a, l)),
            (n = u > 0 ? (a > l ? Os : Ss) : null),
            (d = n ? (n === Os ? s.length : c.length) : 0)),
        {
          type: n,
          timeout: u,
          propCount: d,
          hasTransform: n === Os && Ns.test(o[Es + "Property"]),
        }
      );
    }
    function Vn(t, e) {
      for (; t.length < e.length; ) t = t.concat(t);
      return Math.max.apply(
        null,
        e.map(function (e, n) {
          return qn(e) + qn(t[n]);
        })
      );
    }
    function qn(t) {
      return 1e3 * Number(t.slice(0, -1));
    }
    function Zn(t, e) {
      var n = t.elm;
      i(n._leaveCb) && ((n._leaveCb.cancelled = !0), n._leaveCb());
      var s = Hn(t.data.transition);
      if (!o(s) && !i(n._enterCb) && 1 === n.nodeType) {
        for (
          var a = s.css,
            r = s.type,
            l = s.enterClass,
            u = s.enterToClass,
            d = s.enterActiveClass,
            f = s.appearClass,
            p = s.appearToClass,
            v = s.appearActiveClass,
            g = s.beforeEnter,
            m = s.enter,
            _ = s.afterEnter,
            b = s.enterCancelled,
            y = s.beforeAppear,
            C = s.appear,
            T = s.afterAppear,
            w = s.appearCancelled,
            x = s.duration,
            k = wi,
            O = wi.$vnode;
          O && O.parent;

        )
          (O = O.parent), (k = O.context);
        var S = !k._isMounted || !t.isRootInsert;
        if (!S || C || "" === C) {
          var E = S && f ? f : l,
            M = S && v ? v : d,
            A = S && p ? p : u,
            I = S ? y || g : g,
            D = S && "function" == typeof C ? C : m,
            N = S ? T || _ : _,
            R = S ? w || b : b,
            B = h(c(x) ? x.enter : x),
            P = !1 !== a && !Go,
            U = Qn(D),
            $ = (n._enterCb = L(function () {
              P && (Fn(n, A), Fn(n, M)),
                $.cancelled ? (P && Fn(n, E), R && R(n)) : N && N(n),
                (n._enterCb = null);
            }));
          t.data.show ||
            ht(t, "insert", function () {
              var e = n.parentNode,
                o = e && e._pending && e._pending[t.key];
              o && o.tag === t.tag && o.elm._leaveCb && o.elm._leaveCb(),
                D && D(n, $);
            }),
            I && I(n),
            P &&
              (zn(n, E),
              zn(n, M),
              Wn(function () {
                Fn(n, E),
                  $.cancelled ||
                    (zn(n, A), U || (Jn(B) ? setTimeout($, B) : Kn(n, r, $)));
              })),
            t.data.show && (e && e(), D && D(n, $)),
            P || U || $();
        }
      }
    }
    function Xn(t, e) {
      function n() {
        w.cancelled ||
          (t.data.show ||
            ((s.parentNode._pending || (s.parentNode._pending = {}))[t.key] =
              t),
          p && p(s),
          y &&
            (zn(s, u),
            zn(s, f),
            Wn(function () {
              Fn(s, u),
                w.cancelled ||
                  (zn(s, d), C || (Jn(T) ? setTimeout(w, T) : Kn(s, l, w)));
            })),
          v && v(s, w),
          y || C || w());
      }
      var s = t.elm;
      i(s._enterCb) && ((s._enterCb.cancelled = !0), s._enterCb());
      var a = Hn(t.data.transition);
      if (o(a) || 1 !== s.nodeType) return e();
      if (!i(s._leaveCb)) {
        var r = a.css,
          l = a.type,
          u = a.leaveClass,
          d = a.leaveToClass,
          f = a.leaveActiveClass,
          p = a.beforeLeave,
          v = a.leave,
          g = a.afterLeave,
          m = a.leaveCancelled,
          _ = a.delayLeave,
          b = a.duration,
          y = !1 !== r && !Go,
          C = Qn(v),
          T = h(c(b) ? b.leave : b),
          w = (s._leaveCb = L(function () {
            s.parentNode &&
              s.parentNode._pending &&
              (s.parentNode._pending[t.key] = null),
              y && (Fn(s, d), Fn(s, f)),
              w.cancelled ? (y && Fn(s, u), m && m(s)) : (e(), g && g(s)),
              (s._leaveCb = null);
          }));
        _ ? _(n) : n();
      }
    }
    function Jn(t) {
      return "number" == typeof t && !isNaN(t);
    }
    function Qn(t) {
      if (o(t)) return !1;
      var e = t.fns;
      return i(e)
        ? Qn(Array.isArray(e) ? e[0] : e)
        : (t._length || t.length) > 1;
    }
    function to(t, e) {
      !0 !== e.data.show && Zn(e);
    }
    function eo(t, e, n) {
      no(t, e, n),
        (jo || Ho) &&
          setTimeout(function () {
            no(t, e, n);
          }, 0);
    }
    function no(t, e, n) {
      var o = e.value,
        i = t.multiple;
      if (!i || Array.isArray(o)) {
        for (var s, a, r = 0, c = t.options.length; r < c; r++)
          if (((a = t.options[r]), i))
            (s = k(o, io(a)) > -1), a.selected !== s && (a.selected = s);
          else if (x(io(a), o))
            return void (t.selectedIndex !== r && (t.selectedIndex = r));
        i || (t.selectedIndex = -1);
      }
    }
    function oo(t, e) {
      return e.every(function (e) {
        return !x(e, t);
      });
    }
    function io(t) {
      return "_value" in t ? t._value : t.value;
    }
    function so(t) {
      t.target.composing = !0;
    }
    function ao(t) {
      t.target.composing && ((t.target.composing = !1), ro(t.target, "input"));
    }
    function ro(t, e) {
      var n = document.createEvent("HTMLEvents");
      n.initEvent(e, !0, !0), t.dispatchEvent(n);
    }
    function co(t) {
      return !t.componentInstance || (t.data && t.data.transition)
        ? t
        : co(t.componentInstance._vnode);
    }
    function lo(t) {
      var e = t && t.componentOptions;
      return e && e.Ctor.options.abstract ? lo(xt(e.children)) : t;
    }
    function uo(t) {
      var e = {},
        n = t.$options;
      for (var o in n.propsData) e[o] = t[o];
      var i = n._parentListeners;
      for (var s in i) e[wo(s)] = i[s];
      return e;
    }
    function fo(t, e) {
      if (/\d-keep-alive$/.test(e.tag))
        return t("keep-alive", { props: e.componentOptions.propsData });
    }
    function ho(t) {
      for (; (t = t.parent); ) if (t.data.transition) return !0;
    }
    function po(t, e) {
      return e.key === t.key && e.tag === t.tag;
    }
    function vo(t) {
      t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb();
    }
    function go(t) {
      t.data.newPos = t.elm.getBoundingClientRect();
    }
    function mo(t) {
      var e = t.data.pos,
        n = t.data.newPos,
        o = e.left - n.left,
        i = e.top - n.top;
      if (o || i) {
        t.data.moved = !0;
        var s = t.elm.style;
        (s.transform = s.WebkitTransform =
          "translate(" + o + "px," + i + "px)"),
          (s.transitionDuration = "0s");
      }
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var _o = Object.freeze({}),
      bo = Object.prototype.toString,
      yo = (p("slot,component", !0), p("key,ref,slot,slot-scope,is")),
      Co = Object.prototype.hasOwnProperty,
      To = /-(\w)/g,
      wo = m(function (t) {
        return t.replace(To, function (t, e) {
          return e ? e.toUpperCase() : "";
        });
      }),
      xo = m(function (t) {
        return t.charAt(0).toUpperCase() + t.slice(1);
      }),
      ko = /\B([A-Z])/g,
      Lo = m(function (t) {
        return t.replace(ko, "-$1").toLowerCase();
      }),
      Oo = Function.prototype.bind ? b : _,
      So = function (t, e, n) {
        return !1;
      },
      Eo = function (t) {
        return t;
      },
      Mo = "data-server-rendered",
      Ao = ["component", "directive", "filter"],
      Io = [
        "beforeCreate",
        "created",
        "beforeMount",
        "mounted",
        "beforeUpdate",
        "updated",
        "beforeDestroy",
        "destroyed",
        "activated",
        "deactivated",
        "errorCaptured",
      ],
      Do = {
        optionMergeStrategies: Object.create(null),
        silent: !1,
        productionTip: !1,
        devtools: !1,
        performance: !1,
        errorHandler: null,
        warnHandler: null,
        ignoredElements: [],
        keyCodes: Object.create(null),
        isReservedTag: So,
        isReservedAttr: So,
        isUnknownElement: So,
        getTagNamespace: w,
        parsePlatformTagName: Eo,
        mustUseProp: So,
        _lifecycleHooks: Io,
      },
      No = /[^\w.$]/,
      Ro = "__proto__" in {},
      Bo = "undefined" != typeof window,
      Po = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
      Uo = Po && WXEnvironment.platform.toLowerCase(),
      $o = Bo && window.navigator.userAgent.toLowerCase(),
      jo = $o && /msie|trident/.test($o),
      Go = $o && $o.indexOf("msie 9.0") > 0,
      Ho = $o && $o.indexOf("edge/") > 0,
      Wo =
        ($o && $o.indexOf("android"),
        ($o && /iphone|ipad|ipod|ios/.test($o)) || "ios" === Uo),
      zo = ($o && /chrome\/\d+/.test($o), {}.watch),
      Fo = !1;
    if (Bo)
      try {
        var Ko = {};
        Object.defineProperty(Ko, "passive", {
          get: function () {
            Fo = !0;
          },
        }),
          window.addEventListener("test-passive", null, Ko);
      } catch (t) {}
    var Yo,
      Vo,
      qo = function () {
        return (
          void 0 === Yo &&
            (Yo =
              !Bo &&
              !Po &&
              "undefined" != typeof global &&
              "server" === global.process.env.VUE_ENV),
          Yo
        );
      },
      Zo = Bo && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
      Xo =
        "undefined" != typeof Symbol &&
        M(Symbol) &&
        "undefined" != typeof Reflect &&
        M(Reflect.ownKeys);
    Vo =
      "undefined" != typeof Set && M(Set)
        ? Set
        : (function () {
            function t() {
              this.set = Object.create(null);
            }
            return (
              (t.prototype.has = function (t) {
                return !0 === this.set[t];
              }),
              (t.prototype.add = function (t) {
                this.set[t] = !0;
              }),
              (t.prototype.clear = function () {
                this.set = Object.create(null);
              }),
              t
            );
          })();
    var Jo = w,
      Qo = 0,
      ti = function () {
        (this.id = Qo++), (this.subs = []);
      };
    (ti.prototype.addSub = function (t) {
      this.subs.push(t);
    }),
      (ti.prototype.removeSub = function (t) {
        v(this.subs, t);
      }),
      (ti.prototype.depend = function () {
        ti.target && ti.target.addDep(this);
      }),
      (ti.prototype.notify = function () {
        for (var t = this.subs.slice(), e = 0, n = t.length; e < n; e++)
          t[e].update();
      }),
      (ti.target = null);
    var ei = [],
      ni = function (t, e, n, o, i, s, a, r) {
        (this.tag = t),
          (this.data = e),
          (this.children = n),
          (this.text = o),
          (this.elm = i),
          (this.ns = void 0),
          (this.context = s),
          (this.fnContext = void 0),
          (this.fnOptions = void 0),
          (this.fnScopeId = void 0),
          (this.key = e && e.key),
          (this.componentOptions = a),
          (this.componentInstance = void 0),
          (this.parent = void 0),
          (this.raw = !1),
          (this.isStatic = !1),
          (this.isRootInsert = !0),
          (this.isComment = !1),
          (this.isCloned = !1),
          (this.isOnce = !1),
          (this.asyncFactory = r),
          (this.asyncMeta = void 0),
          (this.isAsyncPlaceholder = !1);
      },
      oi = { child: { configurable: !0 } };
    (oi.child.get = function () {
      return this.componentInstance;
    }),
      Object.defineProperties(ni.prototype, oi);
    var ii = function (t) {
        void 0 === t && (t = "");
        var e = new ni();
        return (e.text = t), (e.isComment = !0), e;
      },
      si = Array.prototype,
      ai = Object.create(si);
    ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(
      function (t) {
        var e = si[t];
        S(ai, t, function () {
          for (var n = [], o = arguments.length; o--; ) n[o] = arguments[o];
          var i,
            s = e.apply(this, n),
            a = this.__ob__;
          switch (t) {
            case "push":
            case "unshift":
              i = n;
              break;
            case "splice":
              i = n.slice(2);
          }
          return i && a.observeArray(i), a.dep.notify(), s;
        });
      }
    );
    var ri = Object.getOwnPropertyNames(ai),
      ci = !0,
      li = function (t) {
        if (
          ((this.value = t),
          (this.dep = new ti()),
          (this.vmCount = 0),
          S(t, "__ob__", this),
          Array.isArray(t))
        ) {
          (Ro ? B : P)(t, ai, ri), this.observeArray(t);
        } else this.walk(t);
      };
    (li.prototype.walk = function (t) {
      for (var e = Object.keys(t), n = 0; n < e.length; n++) $(t, e[n]);
    }),
      (li.prototype.observeArray = function (t) {
        for (var e = 0, n = t.length; e < n; e++) U(t[e]);
      });
    var ui = Do.optionMergeStrategies;
    (ui.data = function (t, e, n) {
      return n ? z(t, e, n) : e && "function" != typeof e ? t : z(t, e);
    }),
      Io.forEach(function (t) {
        ui[t] = F;
      }),
      Ao.forEach(function (t) {
        ui[t + "s"] = K;
      }),
      (ui.watch = function (t, e, n, o) {
        if ((t === zo && (t = void 0), e === zo && (e = void 0), !e))
          return Object.create(t || null);
        if (!t) return e;
        var i = {};
        C(i, t);
        for (var s in e) {
          var a = i[s],
            r = e[s];
          a && !Array.isArray(a) && (a = [a]),
            (i[s] = a ? a.concat(r) : Array.isArray(r) ? r : [r]);
        }
        return i;
      }),
      (ui.props =
        ui.methods =
        ui.inject =
        ui.computed =
          function (t, e, n, o) {
            if (!t) return e;
            var i = Object.create(null);
            return C(i, t), e && C(i, e), i;
          }),
      (ui.provide = z);
    var di,
      fi,
      hi = function (t, e) {
        return void 0 === e ? t : e;
      },
      pi = [],
      vi = !1,
      gi = !1;
    if ("undefined" != typeof setImmediate && M(setImmediate))
      fi = function () {
        setImmediate(at);
      };
    else if (
      "undefined" == typeof MessageChannel ||
      (!M(MessageChannel) &&
        "[object MessageChannelConstructor]" !== MessageChannel.toString())
    )
      fi = function () {
        setTimeout(at, 0);
      };
    else {
      var mi = new MessageChannel(),
        _i = mi.port2;
      (mi.port1.onmessage = at),
        (fi = function () {
          _i.postMessage(1);
        });
    }
    if ("undefined" != typeof Promise && M(Promise)) {
      var bi = Promise.resolve();
      di = function () {
        bi.then(at), Wo && setTimeout(w);
      };
    } else di = fi;
    var yi,
      Ci = new Vo(),
      Ti = m(function (t) {
        var e = "&" === t.charAt(0);
        t = e ? t.slice(1) : t;
        var n = "~" === t.charAt(0);
        t = n ? t.slice(1) : t;
        var o = "!" === t.charAt(0);
        return (
          (t = o ? t.slice(1) : t), { name: t, once: n, capture: o, passive: e }
        );
      }),
      wi = null,
      xi = [],
      ki = [],
      Li = {},
      Oi = !1,
      Si = !1,
      Ei = 0,
      Mi = 0,
      Ai = function (t, e, n, o, i) {
        (this.vm = t),
          i && (t._watcher = this),
          t._watchers.push(this),
          o
            ? ((this.deep = !!o.deep),
              (this.user = !!o.user),
              (this.lazy = !!o.lazy),
              (this.sync = !!o.sync))
            : (this.deep = this.user = this.lazy = this.sync = !1),
          (this.cb = n),
          (this.id = ++Mi),
          (this.active = !0),
          (this.dirty = this.lazy),
          (this.deps = []),
          (this.newDeps = []),
          (this.depIds = new Vo()),
          (this.newDepIds = new Vo()),
          (this.expression = ""),
          "function" == typeof e
            ? (this.getter = e)
            : ((this.getter = E(e)),
              this.getter || (this.getter = function () {})),
          (this.value = this.lazy ? void 0 : this.get());
      };
    (Ai.prototype.get = function () {
      A(this);
      var t,
        e = this.vm;
      try {
        t = this.getter.call(e, e);
      } catch (t) {
        if (!this.user) throw t;
        ot(t, e, 'getter for watcher "' + this.expression + '"');
      } finally {
        this.deep && lt(t), I(), this.cleanupDeps();
      }
      return t;
    }),
      (Ai.prototype.addDep = function (t) {
        var e = t.id;
        this.newDepIds.has(e) ||
          (this.newDepIds.add(e),
          this.newDeps.push(t),
          this.depIds.has(e) || t.addSub(this));
      }),
      (Ai.prototype.cleanupDeps = function () {
        for (var t = this, e = this.deps.length; e--; ) {
          var n = t.deps[e];
          t.newDepIds.has(n.id) || n.removeSub(t);
        }
        var o = this.depIds;
        (this.depIds = this.newDepIds),
          (this.newDepIds = o),
          this.newDepIds.clear(),
          (o = this.deps),
          (this.deps = this.newDeps),
          (this.newDeps = o),
          (this.newDeps.length = 0);
      }),
      (Ai.prototype.update = function () {
        this.lazy ? (this.dirty = !0) : this.sync ? this.run() : zt(this);
      }),
      (Ai.prototype.run = function () {
        if (this.active) {
          var t = this.get();
          if (t !== this.value || c(t) || this.deep) {
            var e = this.value;
            if (((this.value = t), this.user))
              try {
                this.cb.call(this.vm, t, e);
              } catch (t) {
                ot(
                  t,
                  this.vm,
                  'callback for watcher "' + this.expression + '"'
                );
              }
            else this.cb.call(this.vm, t, e);
          }
        }
      }),
      (Ai.prototype.evaluate = function () {
        (this.value = this.get()), (this.dirty = !1);
      }),
      (Ai.prototype.depend = function () {
        for (var t = this, e = this.deps.length; e--; ) t.deps[e].depend();
      }),
      (Ai.prototype.teardown = function () {
        var t = this;
        if (this.active) {
          this.vm._isBeingDestroyed || v(this.vm._watchers, this);
          for (var e = this.deps.length; e--; ) t.deps[e].removeSub(t);
          this.active = !1;
        }
      });
    var Ii = { enumerable: !0, configurable: !0, get: w, set: w },
      Di = { lazy: !0 };
    ge(me.prototype);
    var Ni = {
        init: function (t, e, n, o) {
          if (
            t.componentInstance &&
            !t.componentInstance._isDestroyed &&
            t.data.keepAlive
          ) {
            var i = t;
            Ni.prepatch(i, i);
          } else {
            (t.componentInstance = Te(t, wi, n, o)).$mount(
              e ? t.elm : void 0,
              e
            );
          }
        },
        prepatch: function (t, e) {
          var n = e.componentOptions;
          Nt(
            (e.componentInstance = t.componentInstance),
            n.propsData,
            n.listeners,
            e,
            n.children
          );
        },
        insert: function (t) {
          var e = t.context,
            n = t.componentInstance;
          n._isMounted || ((n._isMounted = !0), Ut(n, "mounted")),
            t.data.keepAlive && (e._isMounted ? Ht(n) : Bt(n, !0));
        },
        destroy: function (t) {
          var e = t.componentInstance;
          e._isDestroyed || (t.data.keepAlive ? Pt(e, !0) : e.$destroy());
        },
      },
      Ri = Object.keys(Ni),
      Bi = 1,
      Pi = 2,
      Ui = 0;
    !(function (t) {
      t.prototype._init = function (t) {
        var e = this;
        (e._uid = Ui++),
          (e._isVue = !0),
          t && t._isComponent
            ? Me(e, t)
            : (e.$options = Z(Ae(e.constructor), t || {}, e)),
          (e._renderProxy = e),
          (e._self = e),
          It(e),
          kt(e),
          Ee(e),
          Ut(e, "beforeCreate"),
          oe(e),
          Kt(e),
          ne(e),
          Ut(e, "created"),
          e.$options.el && e.$mount(e.$options.el);
      };
    })(Ne),
      (function (t) {
        var e = {};
        e.get = function () {
          return this._data;
        };
        var n = {};
        (n.get = function () {
          return this._props;
        }),
          Object.defineProperty(t.prototype, "$data", e),
          Object.defineProperty(t.prototype, "$props", n),
          (t.prototype.$set = j),
          (t.prototype.$delete = G),
          (t.prototype.$watch = function (t, e, n) {
            var o = this;
            if (l(e)) return ee(o, t, e, n);
            (n = n || {}), (n.user = !0);
            var i = new Ai(o, t, e, n);
            return (
              n.immediate && e.call(o, i.value),
              function () {
                i.teardown();
              }
            );
          });
      })(Ne),
      (function (t) {
        var e = /^hook:/;
        (t.prototype.$on = function (t, n) {
          var o = this,
            i = this;
          if (Array.isArray(t))
            for (var s = 0, a = t.length; s < a; s++) o.$on(t[s], n);
          else
            (i._events[t] || (i._events[t] = [])).push(n),
              e.test(t) && (i._hasHookEvent = !0);
          return i;
        }),
          (t.prototype.$once = function (t, e) {
            function n() {
              o.$off(t, n), e.apply(o, arguments);
            }
            var o = this;
            return (n.fn = e), o.$on(t, n), o;
          }),
          (t.prototype.$off = function (t, e) {
            var n = this,
              o = this;
            if (!arguments.length) return (o._events = Object.create(null)), o;
            if (Array.isArray(t)) {
              for (var i = 0, s = t.length; i < s; i++) n.$off(t[i], e);
              return o;
            }
            var a = o._events[t];
            if (!a) return o;
            if (!e) return (o._events[t] = null), o;
            if (e)
              for (var r, c = a.length; c--; )
                if ((r = a[c]) === e || r.fn === e) {
                  a.splice(c, 1);
                  break;
                }
            return o;
          }),
          (t.prototype.$emit = function (t) {
            var e = this,
              n = e._events[t];
            if (n) {
              n = n.length > 1 ? y(n) : n;
              for (var o = y(arguments, 1), i = 0, s = n.length; i < s; i++)
                try {
                  n[i].apply(e, o);
                } catch (n) {
                  ot(n, e, 'event handler for "' + t + '"');
                }
            }
            return e;
          });
      })(Ne),
      (function (t) {
        (t.prototype._update = function (t, e) {
          var n = this;
          n._isMounted && Ut(n, "beforeUpdate");
          var o = n.$el,
            i = n._vnode,
            s = wi;
          (wi = n),
            (n._vnode = t),
            i
              ? (n.$el = n.__patch__(i, t))
              : ((n.$el = n.__patch__(
                  n.$el,
                  t,
                  e,
                  !1,
                  n.$options._parentElm,
                  n.$options._refElm
                )),
                (n.$options._parentElm = n.$options._refElm = null)),
            (wi = s),
            o && (o.__vue__ = null),
            n.$el && (n.$el.__vue__ = n),
            n.$vnode &&
              n.$parent &&
              n.$vnode === n.$parent._vnode &&
              (n.$parent.$el = n.$el);
        }),
          (t.prototype.$forceUpdate = function () {
            var t = this;
            t._watcher && t._watcher.update();
          }),
          (t.prototype.$destroy = function () {
            var t = this;
            if (!t._isBeingDestroyed) {
              Ut(t, "beforeDestroy"), (t._isBeingDestroyed = !0);
              var e = t.$parent;
              !e ||
                e._isBeingDestroyed ||
                t.$options.abstract ||
                v(e.$children, t),
                t._watcher && t._watcher.teardown();
              for (var n = t._watchers.length; n--; ) t._watchers[n].teardown();
              t._data.__ob__ && t._data.__ob__.vmCount--,
                (t._isDestroyed = !0),
                t.__patch__(t._vnode, null),
                Ut(t, "destroyed"),
                t.$off(),
                t.$el && (t.$el.__vue__ = null),
                t.$vnode && (t.$vnode.parent = null);
            }
          });
      })(Ne),
      (function (t) {
        ge(t.prototype),
          (t.prototype.$nextTick = function (t) {
            return ct(t, this);
          }),
          (t.prototype._render = function () {
            var t = this,
              e = t.$options,
              n = e.render,
              o = e._parentVnode;
            o && (t.$scopedSlots = o.data.scopedSlots || _o), (t.$vnode = o);
            var i;
            try {
              i = n.call(t._renderProxy, t.$createElement);
            } catch (e) {
              ot(e, t, "render"), (i = t._vnode);
            }
            return i instanceof ni || (i = ii()), (i.parent = o), i;
          });
      })(Ne);
    var $i = [String, RegExp, Array],
      ji = {
        name: "keep-alive",
        abstract: !0,
        props: { include: $i, exclude: $i, max: [String, Number] },
        created: function () {
          (this.cache = Object.create(null)), (this.keys = []);
        },
        destroyed: function () {
          var t = this;
          for (var e in t.cache) ze(t.cache, e, t.keys);
        },
        mounted: function () {
          var t = this;
          this.$watch("include", function (e) {
            We(t, function (t) {
              return He(e, t);
            });
          }),
            this.$watch("exclude", function (e) {
              We(t, function (t) {
                return !He(e, t);
              });
            });
        },
        render: function () {
          var t = this.$slots.default,
            e = xt(t),
            n = e && e.componentOptions;
          if (n) {
            var o = Ge(n),
              i = this,
              s = i.include,
              a = i.exclude;
            if ((s && (!o || !He(s, o))) || (a && o && He(a, o))) return e;
            var r = this,
              c = r.cache,
              l = r.keys,
              u =
                null == e.key
                  ? n.Ctor.cid + (n.tag ? "::" + n.tag : "")
                  : e.key;
            c[u]
              ? ((e.componentInstance = c[u].componentInstance),
                v(l, u),
                l.push(u))
              : ((c[u] = e),
                l.push(u),
                this.max &&
                  l.length > parseInt(this.max) &&
                  ze(c, l[0], l, this._vnode)),
              (e.data.keepAlive = !0);
          }
          return e || (t && t[0]);
        },
      },
      Gi = { KeepAlive: ji };
    !(function (t) {
      var e = {};
      (e.get = function () {
        return Do;
      }),
        Object.defineProperty(t, "config", e),
        (t.util = { warn: Jo, extend: C, mergeOptions: Z, defineReactive: $ }),
        (t.set = j),
        (t.delete = G),
        (t.nextTick = ct),
        (t.options = Object.create(null)),
        Ao.forEach(function (e) {
          t.options[e + "s"] = Object.create(null);
        }),
        (t.options._base = t),
        C(t.options.components, Gi),
        Re(t),
        Be(t),
        Pe(t),
        je(t);
    })(Ne),
      Object.defineProperty(Ne.prototype, "$isServer", { get: qo }),
      Object.defineProperty(Ne.prototype, "$ssrContext", {
        get: function () {
          return this.$vnode && this.$vnode.ssrContext;
        },
      }),
      Object.defineProperty(Ne, "FunctionalRenderContext", { value: me }),
      (Ne.version = "2.5.17");
    var Hi,
      Wi,
      zi = p("style,class"),
      Fi = p("input,textarea,option,select,progress"),
      Ki = function (t, e, n) {
        return (
          ("value" === n && Fi(t) && "button" !== e) ||
          ("selected" === n && "option" === t) ||
          ("checked" === n && "input" === t) ||
          ("muted" === n && "video" === t)
        );
      },
      Yi = p("contenteditable,draggable,spellcheck"),
      Vi = p(
        "allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"
      ),
      qi = "http://www.w3.org/1999/xlink",
      Zi = function (t) {
        return ":" === t.charAt(5) && "xlink" === t.slice(0, 5);
      },
      Xi = function (t) {
        return Zi(t) ? t.slice(6, t.length) : "";
      },
      Ji = function (t) {
        return null == t || !1 === t;
      },
      Qi = {
        svg: "http://www.w3.org/2000/svg",
        math: "http://www.w3.org/1998/Math/MathML",
      },
      ts = p(
        "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"
      ),
      es = p(
        "svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",
        !0
      ),
      ns = function (t) {
        return ts(t) || es(t);
      },
      os = Object.create(null),
      is = p("text,number,password,search,email,tel,url"),
      ss = Object.freeze({
        createElement: en,
        createElementNS: nn,
        createTextNode: on,
        createComment: sn,
        insertBefore: an,
        removeChild: rn,
        appendChild: cn,
        parentNode: ln,
        nextSibling: un,
        tagName: dn,
        setTextContent: fn,
        setStyleScope: hn,
      }),
      as = {
        create: function (t, e) {
          pn(e);
        },
        update: function (t, e) {
          t.data.ref !== e.data.ref && (pn(t, !0), pn(e));
        },
        destroy: function (t) {
          pn(t, !0);
        },
      },
      rs = new ni("", {}, []),
      cs = ["create", "activate", "update", "remove", "destroy"],
      ls = {
        create: _n,
        update: _n,
        destroy: function (t) {
          _n(t, rs);
        },
      },
      us = Object.create(null),
      ds = [as, ls],
      fs = { create: wn, update: wn },
      hs = { create: Ln, update: Ln },
      ps = "__r",
      vs = "__c",
      gs = { create: An, update: An },
      ms = { create: In, update: In },
      _s = m(function (t) {
        var e = {},
          n = /;(?![^(]*\))/g,
          o = /:(.+)/;
        return (
          t.split(n).forEach(function (t) {
            if (t) {
              var n = t.split(o);
              n.length > 1 && (e[n[0].trim()] = n[1].trim());
            }
          }),
          e
        );
      }),
      bs = /^--/,
      ys = /\s*!important$/,
      Cs = function (t, e, n) {
        if (bs.test(e)) t.style.setProperty(e, n);
        else if (ys.test(n))
          t.style.setProperty(e, n.replace(ys, ""), "important");
        else {
          var o = ws(e);
          if (Array.isArray(n))
            for (var i = 0, s = n.length; i < s; i++) t.style[o] = n[i];
          else t.style[o] = n;
        }
      },
      Ts = ["Webkit", "Moz", "ms"],
      ws = m(function (t) {
        if (
          ((Wi = Wi || document.createElement("div").style),
          "filter" !== (t = wo(t)) && t in Wi)
        )
          return t;
        for (
          var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0;
          n < Ts.length;
          n++
        ) {
          var o = Ts[n] + e;
          if (o in Wi) return o;
        }
      }),
      xs = { create: $n, update: $n },
      ks = m(function (t) {
        return {
          enterClass: t + "-enter",
          enterToClass: t + "-enter-to",
          enterActiveClass: t + "-enter-active",
          leaveClass: t + "-leave",
          leaveToClass: t + "-leave-to",
          leaveActiveClass: t + "-leave-active",
        };
      }),
      Ls = Bo && !Go,
      Os = "transition",
      Ss = "animation",
      Es = "transition",
      Ms = "transitionend",
      As = "animation",
      Is = "animationend";
    Ls &&
      (void 0 === window.ontransitionend &&
        void 0 !== window.onwebkittransitionend &&
        ((Es = "WebkitTransition"), (Ms = "webkitTransitionEnd")),
      void 0 === window.onanimationend &&
        void 0 !== window.onwebkitanimationend &&
        ((As = "WebkitAnimation"), (Is = "webkitAnimationEnd")));
    var Ds = Bo
        ? window.requestAnimationFrame
          ? window.requestAnimationFrame.bind(window)
          : setTimeout
        : function (t) {
            return t();
          },
      Ns = /\b(transform|all)(,|$)/,
      Rs = Bo
        ? {
            create: to,
            activate: to,
            remove: function (t, e) {
              !0 !== t.data.show ? Xn(t, e) : e();
            },
          }
        : {},
      Bs = [fs, hs, gs, ms, xs, Rs],
      Ps = Bs.concat(ds),
      Us = (function (t) {
        function e(t) {
          return new ni(A.tagName(t).toLowerCase(), {}, [], void 0, t);
        }
        function n(t, e) {
          function n() {
            0 == --n.listeners && a(t);
          }
          return (n.listeners = e), n;
        }
        function a(t) {
          var e = A.parentNode(t);
          i(e) && A.removeChild(e, t);
        }
        function c(t, e, n, o, a, r, c) {
          if (
            (i(t.elm) && i(r) && (t = r[c] = N(t)),
            (t.isRootInsert = !a),
            !l(t, e, n, o))
          ) {
            var u = t.data,
              d = t.children,
              p = t.tag;
            i(p)
              ? ((t.elm = t.ns
                  ? A.createElementNS(t.ns, p)
                  : A.createElement(p, t)),
                m(t),
                h(t, d, e),
                i(u) && g(t, e),
                f(n, t.elm, o))
              : s(t.isComment)
              ? ((t.elm = A.createComment(t.text)), f(n, t.elm, o))
              : ((t.elm = A.createTextNode(t.text)), f(n, t.elm, o));
          }
        }
        function l(t, e, n, o) {
          var a = t.data;
          if (i(a)) {
            var r = i(t.componentInstance) && a.keepAlive;
            if (
              (i((a = a.hook)) && i((a = a.init)) && a(t, !1, n, o),
              i(t.componentInstance))
            )
              return u(t, e), s(r) && d(t, e, n, o), !0;
          }
        }
        function u(t, e) {
          i(t.data.pendingInsert) &&
            (e.push.apply(e, t.data.pendingInsert),
            (t.data.pendingInsert = null)),
            (t.elm = t.componentInstance.$el),
            v(t) ? (g(t, e), m(t)) : (pn(t), e.push(t));
        }
        function d(t, e, n, o) {
          for (var s, a = t; a.componentInstance; )
            if (
              ((a = a.componentInstance._vnode),
              i((s = a.data)) && i((s = s.transition)))
            ) {
              for (s = 0; s < E.activate.length; ++s) E.activate[s](rs, a);
              e.push(a);
              break;
            }
          f(n, t.elm, o);
        }
        function f(t, e, n) {
          i(t) &&
            (i(n)
              ? n.parentNode === t && A.insertBefore(t, e, n)
              : A.appendChild(t, e));
        }
        function h(t, e, n) {
          if (Array.isArray(e))
            for (var o = 0; o < e.length; ++o)
              c(e[o], n, t.elm, null, !0, e, o);
          else
            r(t.text) && A.appendChild(t.elm, A.createTextNode(String(t.text)));
        }
        function v(t) {
          for (; t.componentInstance; ) t = t.componentInstance._vnode;
          return i(t.tag);
        }
        function g(t, e) {
          for (var n = 0; n < E.create.length; ++n) E.create[n](rs, t);
          (O = t.data.hook),
            i(O) && (i(O.create) && O.create(rs, t), i(O.insert) && e.push(t));
        }
        function m(t) {
          var e;
          if (i((e = t.fnScopeId))) A.setStyleScope(t.elm, e);
          else
            for (var n = t; n; )
              i((e = n.context)) &&
                i((e = e.$options._scopeId)) &&
                A.setStyleScope(t.elm, e),
                (n = n.parent);
          i((e = wi)) &&
            e !== t.context &&
            e !== t.fnContext &&
            i((e = e.$options._scopeId)) &&
            A.setStyleScope(t.elm, e);
        }
        function _(t, e, n, o, i, s) {
          for (; o <= i; ++o) c(n[o], s, t, e, !1, n, o);
        }
        function b(t) {
          var e,
            n,
            o = t.data;
          if (i(o))
            for (
              i((e = o.hook)) && i((e = e.destroy)) && e(t), e = 0;
              e < E.destroy.length;
              ++e
            )
              E.destroy[e](t);
          if (i((e = t.children)))
            for (n = 0; n < t.children.length; ++n) b(t.children[n]);
        }
        function y(t, e, n, o) {
          for (; n <= o; ++n) {
            var s = e[n];
            i(s) && (i(s.tag) ? (C(s), b(s)) : a(s.elm));
          }
        }
        function C(t, e) {
          if (i(e) || i(t.data)) {
            var o,
              s = E.remove.length + 1;
            for (
              i(e) ? (e.listeners += s) : (e = n(t.elm, s)),
                i((o = t.componentInstance)) &&
                  i((o = o._vnode)) &&
                  i(o.data) &&
                  C(o, e),
                o = 0;
              o < E.remove.length;
              ++o
            )
              E.remove[o](t, e);
            i((o = t.data.hook)) && i((o = o.remove)) ? o(t, e) : e();
          } else a(t.elm);
        }
        function T(t, e, n, s, a) {
          for (
            var r,
              l,
              u,
              d,
              f = 0,
              h = 0,
              p = e.length - 1,
              v = e[0],
              g = e[p],
              m = n.length - 1,
              b = n[0],
              C = n[m],
              T = !a;
            f <= p && h <= m;

          )
            o(v)
              ? (v = e[++f])
              : o(g)
              ? (g = e[--p])
              : vn(v, b)
              ? (x(v, b, s), (v = e[++f]), (b = n[++h]))
              : vn(g, C)
              ? (x(g, C, s), (g = e[--p]), (C = n[--m]))
              : vn(v, C)
              ? (x(v, C, s),
                T && A.insertBefore(t, v.elm, A.nextSibling(g.elm)),
                (v = e[++f]),
                (C = n[--m]))
              : vn(g, b)
              ? (x(g, b, s),
                T && A.insertBefore(t, g.elm, v.elm),
                (g = e[--p]),
                (b = n[++h]))
              : (o(r) && (r = mn(e, f, p)),
                (l = i(b.key) ? r[b.key] : w(b, e, f, p)),
                o(l)
                  ? c(b, s, t, v.elm, !1, n, h)
                  : ((u = e[l]),
                    vn(u, b)
                      ? (x(u, b, s),
                        (e[l] = void 0),
                        T && A.insertBefore(t, u.elm, v.elm))
                      : c(b, s, t, v.elm, !1, n, h)),
                (b = n[++h]));
          f > p
            ? ((d = o(n[m + 1]) ? null : n[m + 1].elm), _(t, d, n, h, m, s))
            : h > m && y(t, e, f, p);
        }
        function w(t, e, n, o) {
          for (var s = n; s < o; s++) {
            var a = e[s];
            if (i(a) && vn(t, a)) return s;
          }
        }
        function x(t, e, n, a) {
          if (t !== e) {
            var r = (e.elm = t.elm);
            if (s(t.isAsyncPlaceholder))
              return void (i(e.asyncFactory.resolved)
                ? L(t.elm, e, n)
                : (e.isAsyncPlaceholder = !0));
            if (
              s(e.isStatic) &&
              s(t.isStatic) &&
              e.key === t.key &&
              (s(e.isCloned) || s(e.isOnce))
            )
              return void (e.componentInstance = t.componentInstance);
            var c,
              l = e.data;
            i(l) && i((c = l.hook)) && i((c = c.prepatch)) && c(t, e);
            var u = t.children,
              d = e.children;
            if (i(l) && v(e)) {
              for (c = 0; c < E.update.length; ++c) E.update[c](t, e);
              i((c = l.hook)) && i((c = c.update)) && c(t, e);
            }
            o(e.text)
              ? i(u) && i(d)
                ? u !== d && T(r, u, d, n, a)
                : i(d)
                ? (i(t.text) && A.setTextContent(r, ""),
                  _(r, null, d, 0, d.length - 1, n))
                : i(u)
                ? y(r, u, 0, u.length - 1)
                : i(t.text) && A.setTextContent(r, "")
              : t.text !== e.text && A.setTextContent(r, e.text),
              i(l) && i((c = l.hook)) && i((c = c.postpatch)) && c(t, e);
          }
        }
        function k(t, e, n) {
          if (s(n) && i(t.parent)) t.parent.data.pendingInsert = e;
          else for (var o = 0; o < e.length; ++o) e[o].data.hook.insert(e[o]);
        }
        function L(t, e, n, o) {
          var a,
            r = e.tag,
            c = e.data,
            l = e.children;
          if (
            ((o = o || (c && c.pre)),
            (e.elm = t),
            s(e.isComment) && i(e.asyncFactory))
          )
            return (e.isAsyncPlaceholder = !0), !0;
          if (
            i(c) &&
            (i((a = c.hook)) && i((a = a.init)) && a(e, !0),
            i((a = e.componentInstance)))
          )
            return u(e, n), !0;
          if (i(r)) {
            if (i(l))
              if (t.hasChildNodes())
                if (i((a = c)) && i((a = a.domProps)) && i((a = a.innerHTML))) {
                  if (a !== t.innerHTML) return !1;
                } else {
                  for (var d = !0, f = t.firstChild, p = 0; p < l.length; p++) {
                    if (!f || !L(f, l[p], n, o)) {
                      d = !1;
                      break;
                    }
                    f = f.nextSibling;
                  }
                  if (!d || f) return !1;
                }
              else h(e, l, n);
            if (i(c)) {
              var v = !1;
              for (var m in c)
                if (!I(m)) {
                  (v = !0), g(e, n);
                  break;
                }
              !v && c.class && lt(c.class);
            }
          } else t.data !== e.text && (t.data = e.text);
          return !0;
        }
        var O,
          S,
          E = {},
          M = t.modules,
          A = t.nodeOps;
        for (O = 0; O < cs.length; ++O)
          for (E[cs[O]] = [], S = 0; S < M.length; ++S)
            i(M[S][cs[O]]) && E[cs[O]].push(M[S][cs[O]]);
        var I = p("attrs,class,staticClass,staticStyle,key");
        return function (t, n, a, r, l, u) {
          if (o(n)) return void (i(t) && b(t));
          var d = !1,
            f = [];
          if (o(t)) (d = !0), c(n, f, l, u);
          else {
            var h = i(t.nodeType);
            if (!h && vn(t, n)) x(t, n, f, r);
            else {
              if (h) {
                if (
                  (1 === t.nodeType &&
                    t.hasAttribute(Mo) &&
                    (t.removeAttribute(Mo), (a = !0)),
                  s(a) && L(t, n, f))
                )
                  return k(n, f, !0), t;
                t = e(t);
              }
              var p = t.elm,
                g = A.parentNode(p);
              if (
                (c(n, f, p._leaveCb ? null : g, A.nextSibling(p)), i(n.parent))
              )
                for (var m = n.parent, _ = v(n); m; ) {
                  for (var C = 0; C < E.destroy.length; ++C) E.destroy[C](m);
                  if (((m.elm = n.elm), _)) {
                    for (var T = 0; T < E.create.length; ++T)
                      E.create[T](rs, m);
                    var w = m.data.hook.insert;
                    if (w.merged)
                      for (var O = 1; O < w.fns.length; O++) w.fns[O]();
                  } else pn(m);
                  m = m.parent;
                }
              i(g) ? y(g, [t], 0, 0) : i(t.tag) && b(t);
            }
          }
          return k(n, f, d), n.elm;
        };
      })({ nodeOps: ss, modules: Ps });
    Go &&
      document.addEventListener("selectionchange", function () {
        var t = document.activeElement;
        t && t.vmodel && ro(t, "input");
      });
    var $s = {
        inserted: function (t, e, n, o) {
          "select" === n.tag
            ? (o.elm && !o.elm._vOptions
                ? ht(n, "postpatch", function () {
                    $s.componentUpdated(t, e, n);
                  })
                : eo(t, e, n.context),
              (t._vOptions = [].map.call(t.options, io)))
            : ("textarea" === n.tag || is(t.type)) &&
              ((t._vModifiers = e.modifiers),
              e.modifiers.lazy ||
                (t.addEventListener("compositionstart", so),
                t.addEventListener("compositionend", ao),
                t.addEventListener("change", ao),
                Go && (t.vmodel = !0)));
        },
        componentUpdated: function (t, e, n) {
          if ("select" === n.tag) {
            eo(t, e, n.context);
            var o = t._vOptions,
              i = (t._vOptions = [].map.call(t.options, io));
            if (
              i.some(function (t, e) {
                return !x(t, o[e]);
              })
            ) {
              (t.multiple
                ? e.value.some(function (t) {
                    return oo(t, i);
                  })
                : e.value !== e.oldValue && oo(e.value, i)) && ro(t, "change");
            }
          }
        },
      },
      js = {
        bind: function (t, e, n) {
          var o = e.value;
          n = co(n);
          var i = n.data && n.data.transition,
            s = (t.__vOriginalDisplay =
              "none" === t.style.display ? "" : t.style.display);
          o && i
            ? ((n.data.show = !0),
              Zn(n, function () {
                t.style.display = s;
              }))
            : (t.style.display = o ? s : "none");
        },
        update: function (t, e, n) {
          var o = e.value;
          !o != !e.oldValue &&
            ((n = co(n)),
            n.data && n.data.transition
              ? ((n.data.show = !0),
                o
                  ? Zn(n, function () {
                      t.style.display = t.__vOriginalDisplay;
                    })
                  : Xn(n, function () {
                      t.style.display = "none";
                    }))
              : (t.style.display = o ? t.__vOriginalDisplay : "none"));
        },
        unbind: function (t, e, n, o, i) {
          i || (t.style.display = t.__vOriginalDisplay);
        },
      },
      Gs = { model: $s, show: js },
      Hs = {
        name: String,
        appear: Boolean,
        css: Boolean,
        mode: String,
        type: String,
        enterClass: String,
        leaveClass: String,
        enterToClass: String,
        leaveToClass: String,
        enterActiveClass: String,
        leaveActiveClass: String,
        appearClass: String,
        appearActiveClass: String,
        appearToClass: String,
        duration: [Number, String, Object],
      },
      Ws = {
        name: "transition",
        props: Hs,
        abstract: !0,
        render: function (t) {
          var e = this,
            n = this.$slots.default;
          if (
            n &&
            ((n = n.filter(function (t) {
              return t.tag || wt(t);
            })),
            n.length)
          ) {
            var o = this.mode,
              i = n[0];
            if (ho(this.$vnode)) return i;
            var s = lo(i);
            if (!s) return i;
            if (this._leaving) return fo(t, i);
            var a = "__transition-" + this._uid + "-";
            s.key =
              null == s.key
                ? s.isComment
                  ? a + "comment"
                  : a + s.tag
                : r(s.key)
                ? 0 === String(s.key).indexOf(a)
                  ? s.key
                  : a + s.key
                : s.key;
            var c = ((s.data || (s.data = {})).transition = uo(this)),
              l = this._vnode,
              u = lo(l);
            if (
              (s.data.directives &&
                s.data.directives.some(function (t) {
                  return "show" === t.name;
                }) &&
                (s.data.show = !0),
              u &&
                u.data &&
                !po(s, u) &&
                !wt(u) &&
                (!u.componentInstance || !u.componentInstance._vnode.isComment))
            ) {
              var d = (u.data.transition = C({}, c));
              if ("out-in" === o)
                return (
                  (this._leaving = !0),
                  ht(d, "afterLeave", function () {
                    (e._leaving = !1), e.$forceUpdate();
                  }),
                  fo(t, i)
                );
              if ("in-out" === o) {
                if (wt(s)) return l;
                var f,
                  h = function () {
                    f();
                  };
                ht(c, "afterEnter", h),
                  ht(c, "enterCancelled", h),
                  ht(d, "delayLeave", function (t) {
                    f = t;
                  });
              }
            }
            return i;
          }
        },
      },
      zs = C({ tag: String, moveClass: String }, Hs);
    delete zs.mode;
    var Fs = {
        props: zs,
        render: function (t) {
          for (
            var e = this.tag || this.$vnode.data.tag || "span",
              n = Object.create(null),
              o = (this.prevChildren = this.children),
              i = this.$slots.default || [],
              s = (this.children = []),
              a = uo(this),
              r = 0;
            r < i.length;
            r++
          ) {
            var c = i[r];
            if (c.tag)
              if (null != c.key && 0 !== String(c.key).indexOf("__vlist"))
                s.push(c),
                  (n[c.key] = c),
                  ((c.data || (c.data = {})).transition = a);
              else;
          }
          if (o) {
            for (var l = [], u = [], d = 0; d < o.length; d++) {
              var f = o[d];
              (f.data.transition = a),
                (f.data.pos = f.elm.getBoundingClientRect()),
                n[f.key] ? l.push(f) : u.push(f);
            }
            (this.kept = t(e, null, l)), (this.removed = u);
          }
          return t(e, null, s);
        },
        beforeUpdate: function () {
          this.__patch__(this._vnode, this.kept, !1, !0),
            (this._vnode = this.kept);
        },
        updated: function () {
          var t = this.prevChildren,
            e = this.moveClass || (this.name || "v") + "-move";
          t.length &&
            this.hasMove(t[0].elm, e) &&
            (t.forEach(vo),
            t.forEach(go),
            t.forEach(mo),
            (this._reflow = document.body.offsetHeight),
            t.forEach(function (t) {
              if (t.data.moved) {
                var n = t.elm,
                  o = n.style;
                zn(n, e),
                  (o.transform = o.WebkitTransform = o.transitionDuration = ""),
                  n.addEventListener(
                    Ms,
                    (n._moveCb = function t(o) {
                      (o && !/transform$/.test(o.propertyName)) ||
                        (n.removeEventListener(Ms, t),
                        (n._moveCb = null),
                        Fn(n, e));
                    })
                  );
              }
            }));
        },
        methods: {
          hasMove: function (t, e) {
            if (!Ls) return !1;
            if (this._hasMove) return this._hasMove;
            var n = t.cloneNode();
            t._transitionClasses &&
              t._transitionClasses.forEach(function (t) {
                Gn(n, t);
              }),
              jn(n, e),
              (n.style.display = "none"),
              this.$el.appendChild(n);
            var o = Yn(n);
            return this.$el.removeChild(n), (this._hasMove = o.hasTransform);
          },
        },
      },
      Ks = { Transition: Ws, TransitionGroup: Fs };
    (Ne.config.mustUseProp = Ki),
      (Ne.config.isReservedTag = ns),
      (Ne.config.isReservedAttr = zi),
      (Ne.config.getTagNamespace = Je),
      (Ne.config.isUnknownElement = Qe),
      C(Ne.options.directives, Gs),
      C(Ne.options.components, Ks),
      (Ne.prototype.__patch__ = Bo ? Us : w),
      (Ne.prototype.$mount = function (t, e) {
        return (t = t && Bo ? tn(t) : void 0), Dt(this, t, e);
      }),
      Bo &&
        setTimeout(function () {
          Do.devtools && Zo && Zo.emit("init", Ne);
        }, 0),
      (e.default = Ne);
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(17),
      s = o(i),
      a = n(5),
      r = o(a),
      c = n(7),
      l = o(c),
      u = n(4),
      d = o(u),
      f = n(10),
      h = o(f),
      p = n(6),
      v = n(8),
      g = n(45),
      m = n(120),
      _ = o(m),
      b = n(135),
      y = o(b),
      C = n(139),
      T = o(C),
      w = n(148),
      x = o(w),
      k = n(157),
      L = o(k),
      O = n(159),
      S = o(O),
      E = n(298),
      M = o(E),
      A = n(300),
      I = o(A),
      D = n(307),
      N = o(D),
      R = n(311),
      B = o(R),
      P = n(319),
      U = o(P),
      $ = n(323),
      j = o($),
      G = n(327),
      H = o(G),
      W = n(329),
      z = o(W),
      F = void 0,
      K = void 0,
      Y = void 0,
      V = void 0;
    e.default = {
      beforeCreate: function () {
        (F =
          r.default.get(d.default.STORAGE.SHARED_DATA) ||
          s.default.defaultCustomization),
          (K = r.default.get(d.default.STORAGE.SEEN_ONBOARDING) || !1),
          (Y = F.notes.isPinned),
          (V = F.todos.isPinned),
          (window.console.log = function () {});
      },
      data: function () {
        return {
          sharedData: F,
          showCustomizeMenu: !1,
          showNotes: Y,
          isLoading: !0,
          seenOnBoarding: K,
          miscSettings:
            r.default.get(d.default.STORAGE.MISC_SETTINGS) || s.default.misc,
          otherSettings: s.default.other,
          showTodos: V,
          showHistory: !1,
          hideBanner: r.default.get(d.default.STORAGE.TOP_BANNER),
        };
      },
      mounted: function () {
        var t = this,
          e = this;
        document.addEventListener("keydown", function (n) {
          84 === n.keyCode
            ? (e.toggleTodos(!0), t.$ga.event("app", "keydown", "todos"))
            : 78 === n.keyCode
            ? (e.toggleNotes(!0), t.$ga.event("app", "keydown", "notes"))
            : 67 === n.keyCode
            ? (e.toggleCustomizeMenu(!0),
              t.$ga.event("app", "keydown", "customize"))
            : 27 === n.keyCode
            ? (e.closeWindows(), t.$ga.event("app", "keydown", "closeAll"))
            : 87 === n.keyCode
            ? ((e.otherSettings.weather.showWeatherInfo = !0),
              t.$ga.event("app", "keydown", "weather"))
            : 71 === n.keyCode
            ? (t.$ga.event("app", "keydown", "calendar"),
              p.EventBus.$emit("calendar", { message: "open" }))
            : 72 === n.keyCode &&
              (t.$ga.event("app", "keydown", "history"), (t.showHistory = !0));
        }),
          p.EventBus.$on(v.MessageTypeEnum.APP, function (n) {
            if (n && n.message)
              switch (n.message) {
                case v.AppMessage.OPEN_CUSTOMIZE:
                  return (
                    n.tab &&
                      r.default.set(
                        d.default.STORAGE.CURRENT_CUSTOMIZATION_TAB,
                        n.tab
                      ),
                    void e.toggleCustomizeMenu(!0)
                  );
                case v.AppMessage.PIN:
                  return void t.toggleNotesTodoPin(n);
                case v.AppMessage.TOGGLE_HISTORY:
                  t.showHistory = !1;
                  break;
                case v.AppMessage.HIDE_BOOKMARKS:
                  t.sharedData.showUtilities.showBookmarks = !1;
                  break;
                case v.AppMessage.BANNER_CLOSE:
                  t.hideBanner = !0;
              }
          }),
          this.init(),
          this.initWhenIdle();
      },
      computed: {
        isBackgroundChangeLocked: function () {
          return this.miscSettings.background.isLocked || !1;
        },
      },
      watch: {
        sharedData: {
          handler: function (t) {
            r.default.set(d.default.STORAGE.SHARED_DATA, t);
          },
          deep: !0,
        },
        miscSettings: {
          handler: function (t) {
            r.default.set(d.default.STORAGE.MISC_SETTINGS, t);
          },
          deep: !0,
        },
      },
      methods: {
        toggle: function (t, e) {
          p.EventBus.$emit(t, e);
        },
        toggleNotesTodoPin: function (t) {
          var e = t.widget,
            n = t.value;
          "todos" === e && this.sharedData.notes.isPinned
            ? ((this.sharedData.notes.isPinned = !1),
              (this.sharedData.todos.isPinned = !0))
            : "notes" === e && this.sharedData.todos.isPinned
            ? ((this.sharedData.notes.isPinned = !0),
              (this.sharedData.todos.isPinned = !1))
            : (this.sharedData[e].isPinned = n);
        },
        toggleCustomizeMenu: function (t) {
          !this.miscSettings.update.isSeen &&
            this.showCustomizeMenu &&
            (this.miscSettings.update.isSeen = !0),
            (this.showCustomizeMenu = l.default.isUndefined(t)
              ? !this.showCustomizeMenu
              : t),
            (this.showNotes = t ? !t : this.sharedData.notes.isPinned),
            (this.showTodos = t ? !t : this.sharedData.todos.isPinned),
            (this.otherSettings.weather.showWeatherInfo = !1),
            (this.showHistory = !1),
            this.toggle("calendar", { message: "close", force: t });
        },
        stopLoad: function () {
          this.isLoading = !1;
        },
        startLoad: function () {
          this.isLoading = !0;
        },
        stopOnBoarding: function () {
          (this.seenOnBoarding = !0),
            r.default.set(
              d.default.STORAGE.SEEN_ONBOARDING,
              this.seenOnBoarding
            ),
            this.$ga.event("app", "onboarding", "close");
        },
        closeWindows: function () {
          this.toggleCustomizeMenu(!1);
        },
        showUpdateNotification: function (t) {
          if (t) {
            var e = +t.replace(/\./g, ""),
              n = +chrome.runtime.getManifest().version.replace(/\./g, "");
            +this.miscSettings.update.lastChecked < e &&
              n >= e &&
              ((this.miscSettings.update.isSeen = !1),
              (this.miscSettings.update.lastChecked = e),
              r.default.set(
                d.default.STORAGE.CURRENT_CUSTOMIZATION_TAB,
                g.TabTypeEnum.WHATS_NEW
              ));
          }
        },
        checkForUpdates: function () {
          var t = this;
          this.miscSettings.update &&
            this.miscSettings.update.isToBeFetched &&
            l.default.http(d.default.URL.WHATS_NEW).then(function (e) {
              (t.miscSettings.update.isToBeFetched = !1),
                r.default.set(d.default.STORAGE.WHATS_NEW, e.response),
                t.showUpdateNotification(e.response[0].version);
            });
        },
        initWhenIdle: function () {
          var t = this;
          setTimeout(function () {
            t.checkForUpdates(), t.initAnalytics();
          }, 0);
        },
        toggleNotes: function (t) {
          (this.showNotes = (0, c.isUndefined)(t) ? !this.showNotes : t),
            (this.showTodos = !1),
            this.showNotes || (this.showTodos = this.sharedData.todos.isPinned);
        },
        toggleTodos: function (t) {
          (this.showTodos = (0, c.isUndefined)(t) ? !this.showTodos : t),
            (this.showNotes = !1),
            this.showTodos || (this.showNotes = this.sharedData.notes.isPinned);
        },
        generateId: function () {
          return "xxxxxxxx3-0xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (t) {
              var e = (16 * Math.random()) | 0;
              return ("x" === t ? e : (3 & e) | 8).toString(16);
            }
          );
        },
        weatherInfoStateChange: function (t) {
          this.otherSettings.weather.showWeatherInfo = t;
        },
        init: function () {
          var t = r.default.get(d.default.STORAGE.BACKGROUND_CUSTOM);
          t ||
            ((t = h.default.customBackgrounds),
            r.default.set(d.default.STORAGE.BACKGROUND_CUSTOM, t));
        },
        initAnalytics: function () {
          this.seenOnBoarding
            ? navigator.userAgent.indexOf("Firefox") > -1
              ? this.$ga.page("/firefox-app")
              : navigator.userAgent.indexOf("Chrome") > -1 &&
                this.$ga.page("/chrome-app")
            : this.$ga.event("app", "onboarding", "shown");
        },
      },
      components: {
        Background: y.default,
        ClockWrapper: _.default,
        Customize: T.default,
        Weather: x.default,
        Onboarding: M.default,
        Notes: L.default,
        TodoWrapper: S.default,
        History: I.default,
        BackgroundInfo: N.default,
        BookmarksWrapper: B.default,
        ContextMenu: U.default,
        Modal: j.default,
        TopBanner: H.default,
        NotificationWrapper: z.default,
      },
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    e.TabTypeEnum = {
      BACKGROUND: "background",
      GENERAL: "general",
      CLOCK: "clock",
      WEATHER: "weather",
      TODO: "todo",
      WHATS_NEW: "whatsNew",
    };
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(124),
      s = o(i),
      a = n(126),
      r = o(a),
      c = n(6);
    e.default = {
      props: ["settings"],
      data: function () {
        return {
          showCalendar:
            this.settings.calendar && this.settings.calendar.isPinned,
        };
      },
      methods: {
        toggleCalendar: function () {
          (this.showCalendar = !this.showCalendar),
            this.$ga.event(
              "clock",
              "clicked",
              this.showCalendar ? "open" : "close"
            );
        },
      },
      mounted: function () {
        var t = this;
        c.EventBus.$on("calendar", function (e) {
          if (e.force) return void (t.showCalendar = "open" === e.message);
          t.showCalendar = t.settings.calendar.isPinned || "open" === e.message;
        });
      },
      components: { Clock: s.default, Calendar: r.default },
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      i = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
    e.default = {
      data: function () {
        return { hrs: "", min: "", day: "", date: "", month: "" };
      },
      props: ["settings"],
      created: function () {
        this.updateDateTime();
      },
      mounted: function () {
        setInterval(this.updateDateTime, 1e3);
      },
      methods: {
        updateDateTime: function () {
          var t = new Date();
          (this.hrs = t.getHours()),
            "twelve" === this.settings.type &&
              (this.hrs =
                0 !== this.hrs && 12 !== this.hrs ? this.hrs % 12 : 12),
            (this.min = this.getZeroPad(t.getMinutes())),
            (this.day = i[t.getDay()]),
            (this.date = t.getDate()),
            (this.month = o[t.getMonth()]);
        },
        getZeroPad: function (t) {
          return (parseInt(t, 10) >= 10 ? "" : "0") + t;
        },
        concatAMPM: function () {
          if ("twelve" === this.settings.type)
            return this.hrs >= 12 ? "PM" : "AM";
        },
      },
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = n(129),
      i = n(4),
      s = n(5),
      a = n(7),
      r = n(6),
      c = n(14),
      l = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(c);
    e.default = {
      data: function () {
        return {
          events: [],
          auth: (0, a.DecryptAuth)((0, s.Get)(i.STORAGE.G_CAL_AUTH)),
          lists: [],
          now: new Date(),
          isLoading: !0,
          maxHeight: 3.6,
          integrate: { errorTitle: "", errorDesc: "", reIntegration: !1 },
        };
      },
      props: ["settings"],
      mounted: function () {
        var t = this;
        this.auth &&
          this.refreshAuth().then(
            function () {
              t.getList().then(
                function () {
                  (t.isLoading = !1), t.scrollToCurrentEvent();
                },
                function (e) {
                  t.manageReject(e);
                }
              );
            },
            function (e) {
              t.manageReject(e);
            }
          );
      },
      methods: {
        openEvent: function (t) {
          if (t && t.currentTarget) {
            var e = t.currentTarget.getAttribute("link");
            if (!e) return;
            this.$ga.event("calendar", "clicked", "event"),
              window.chrome.tabs.create({ url: e, active: !0 });
          }
        },
        manageReject: function (t) {
          t.status > 400 && t.status < 500
            ? this.resetState()
            : this.errorState(),
            this.$ga.event("calendar", "error", t.status + navigator.onLine);
        },
        errorState: function () {
          navigator.onLine
            ? ((this.integrate.errorTitle = "Some error occurred!"),
              (this.integrate.errorDesc =
                "Please try in new tab or contact support with your authentication code."),
              (this.integrate.reIntegration = !1))
            : ((this.integrate.errorTitle = "You seem offline!"),
              (this.integrate.errorDesc = "Please try once you come online."),
              (this.integrate.reIntegration = !1));
        },
        resetState: function () {
          (this.integrate.errorTitle = "Some error occurred!"),
            (this.integrate.errorDesc =
              "Integrate again or contact support with your authentication code."),
            (this.integrate.reIntegration = !0),
            (0, s.Remove)(i.STORAGE.G_CAL_AUTH);
        },
        skip: function () {
          (this.settings.isPinned = !1),
            r.EventBus.$emit("calendar", { message: "close" }),
            this.$ga.event("calendar", "isSkipped");
        },
        togglePin: function () {
          this.settings &&
            ((this.settings.isPinned = !this.settings.isPinned),
            this.$ga.event("calendar", "isPinned", this.settings.isPinned));
        },
        refreshAuth: function () {
          var t = this;
          return new Promise(function (e, n) {
            var o = +new Date();
            if (((t.auth && t.auth.expiry_date) || n(), o < t.auth.expiry_date))
              return void e();
            if (o >= t.auth.expiry_date) {
              var r = void 0;
              (r = i.G_CAL.URL.REFRESH),
                (0, a.Http)(r, {
                  method: "POST",
                  data: { code: (0, s.Get)(i.STORAGE.G_CAL_AUTH) },
                }).then(
                  function (n) {
                    (0, s.Set)(i.STORAGE.G_CAL_AUTH, n.code),
                      (t.auth = (0, a.DecryptAuth)(n.code)),
                      e();
                  },
                  function (t) {
                    n(t);
                  }
                );
            }
          });
        },
        get: function (t) {
          var e = [
            {
              name: "Authorization",
              value: this.tokenType + " " + this.authCode,
            },
          ];
          return (0, a.Http)(t, { headers: e });
        },
        getList: function () {
          var t = this;
          return this.get(i.G_CAL.URL.LIST)
            .then(function (e) {
              return (
                (t.lists = e.items.filter(function (t) {
                  return t.selected;
                })),
                t.getEvents()
              );
            })
            .catch(function (e) {
              return t.manageReject(e);
            });
        },
        sortEvents: function (t) {
          return (t = t.sort(function (t, e) {
            return (
              (0, o.convertISOToTime)(t.from) - (0, o.convertISOToTime)(e.from)
            );
          }));
        },
        scrollToCurrentEvent: function () {
          var t = this;
          setTimeout(function () {
            var e = (0, o.convertISOToTime)(),
              n = void 0;
            try {
              n = t.events.findIndex(function (t) {
                if (-1 !== t.to) {
                  var n = (0, o.convertISOToTime)(t.to);
                  return e < n;
                }
              });
            } catch (t) {}
            !n ||
              n <= 1 ||
              document
                .querySelector("#g-cal-events")
                .scroll({
                  top:
                    (n - 1) *
                    document.querySelector(".calendar-event").offsetHeight,
                  left: 0,
                  behavior: "smooth",
                });
          }, 500);
        },
        getEvents: function () {
          var t = this,
            e = this.eventsUrls.map(function (e) {
              return t.get(e);
            });
          return Promise.all(e)
            .then(function (e) {
              var n = t.extractEventsFromResponse(e);
              return (
                (n = t.processEventsResponse(n)),
                (n = t.sortEvents(n)),
                (t.maxHeight =
                  n.length > 0 ? Math.min(3.6 * n.length, 14.4) : 7.2),
                (t.events = n),
                !0
              );
            })
            .catch(function (e) {
              return t.manageReject(e);
            });
        },
        extractEventsFromResponse: function (t) {
          for (var e = [], n = 0; n < t.length; n++) e = e.concat(t[n].items);
          return e;
        },
        processEventsResponse: function (t) {
          for (var e = [], n = [], o = 0; o < t.length; o++) {
            var i = t[o];
            if (i && -1 === n.indexOf(i.iCalUID) && "confirmed" === i.status) {
              n.push(i.iCalUID);
              var s = new Date(i.start.dateTime),
                a = new Date(i.end.dateTime),
                r = new Date(),
                c = s <= r && r <= a;
              e.push({
                id: i.id,
                from: (i.start && i.start.dateTime) || -1,
                to: (i.end && i.end.dateTime) || -1,
                summary: i.summary,
                link: i.htmlLink,
                hangoutLink: i.hangoutLink,
                isCurrentEvent: c,
              });
            }
          }
          return e;
        },
        formatTime: function (t) {
          if (t) {
            var e = (0, o.getTime)(t);
            return e.hrs + ":" + e.min + (e.unit ? e.unit : "");
          }
        },
        getEventsUrl: function (t) {
          if (t)
            return (
              i.G_CAL.URL.BASE +
              "calendars/" +
              encodeURIComponent(t) +
              "/events?timeMax=" +
              (0, o.getDate)(this.nextDateTimeStamp).iso +
              "&timeMin=" +
              this.currentDate.iso +
              "&orderBy=startTime&singleEvents=true&fields=items(id,status,start,end,summary,iCalUID,htmlLink,hangoutLink)"
            );
        },
        nextDate: function () {
          var t = this;
          (this.isLoading = !0),
            (this.now = new Date(this.now.getTime() + 864e5)),
            this.getEvents().then(function () {
              t.scrollToCurrentEvent(), (t.isLoading = !1);
            }),
            this.$ga.event("calendar", "clicked", "nextDate");
        },
        prevDate: function () {
          var t = this;
          (this.isLoading = !0),
            (this.now = new Date(this.now.getTime() - 864e5)),
            this.getEvents().then(function () {
              t.scrollToCurrentEvent(), (t.isLoading = !1);
            }),
            this.$ga.event("calendar", "clicked", "prevDate");
        },
        integration: function () {
          (0, s.Set)(i.STORAGE.CURRENT_CUSTOMIZATION_TAB, "clock"),
            r.EventBus.$emit("app", { message: "OpenCustomize" }),
            this.$ga.event("calendar", "clicked", "integrate"),
            chrome.tabs.create({
              url: i.G_CAL.URL.INTEGRATION_SUBTLE,
              active: !0,
            });
        },
        openHangout: function (t) {
          this.$ga.event("calendar", "clicked", "meetlink"),
            window.chrome.tabs.create({ url: t, active: !0 });
        },
      },
      computed: {
        authCode: function () {
          return this.auth.access_token;
        },
        tokenType: function () {
          return this.auth.token_type;
        },
        eventsUrls: function () {
          if (this.lists && this.lists.length > 0) {
            var t = this;
            return this.lists.map(function (e) {
              return t.getEventsUrl(e.id);
            });
          }
        },
        currentDateTimeStamp: function () {
          return this.now.setHours(0, 0, 0, 0), this.now.getTime();
        },
        currentDate: function () {
          return (0, o.getDate)(this.currentDateTimeStamp);
        },
        nextDateTimeStamp: function () {
          return this.currentDateTimeStamp + 864e5;
        },
        maxHeightValue: function () {
          return this.maxHeight + "rem";
        },
        displayDate: function () {
          var t = new Date();
          return this.now.getMonth() === t.getMonth() &&
            this.now.getDate() === t.getDate()
            ? "Today"
            : this.currentDate.day +
                ", " +
                this.currentDate.month +
                " " +
                this.currentDate.date;
        },
      },
      components: { Button: l.default },
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = {
        data: function () {
          return {};
        },
        methods: {
          clicked: function () {
            this.$emit("clicked");
          },
        },
        props: {
          type: { type: String, default: "basic" },
          text: { required: !0 },
          isDisabled: { default: !1 },
          theme: { default: "green" },
          size: String,
          title: { type: String },
        },
        computed: {
          computedClass: function () {
            return this.sizeClass + " " + this.typeClass + " " + this.theme;
          },
          sizeClass: function () {
            return this.size ? this.size : "small";
          },
          typeClass: function () {
            switch (this.type) {
              case "primary":
                return "primary";
              case "save":
                return "save";
              case "green":
                return "green";
              case "secondary":
                return "secondary";
              default:
                return "";
            }
          },
        },
      });
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
          }
          return t;
        },
      s = n(51),
      a = o(s),
      r = n(10),
      c = o(r),
      l = n(5),
      u = o(l),
      d = n(4),
      f = o(d),
      h = n(6),
      p = n(8),
      v = void 0,
      g = void 0,
      m = void 0,
      _ = {
        data: function () {
          return {
            showBackground: !1,
            bgSeen: "",
            tabsCount: "",
            themeId: "",
            defaultImageLoaded: !1,
            bgIndex: 0,
            allBackgrounds: null,
            bgKeys: null,
            themeVal: "",
            backgroundType: this.settings.type || "predefined",
            showLock: !1,
            lockStatus: !1,
          };
        },
        props: ["settings", "miscSettings"],
        mounted: function () {
          var t = this;
          (v = document.getElementById("background")),
            (g = document.getElementById("background-hover")),
            h.EventBus.$on(p.MessageTypeEnum.BACKGROUND, function (e) {
              switch (e.message) {
                case p.BackgroundMessage.CHANGE_LOCKED:
                  return void t.handleBackgroundLock(e.value, e.url, e.id);
                case p.BackgroundMessage.CHANGE_BACKGROUND:
                  return void t.changeBackground(e);
                case p.BackgroundMessage.THEME_RESET:
                case p.BackgroundMessage.TYPE_CHANGED:
                  t.getBg(!0);
              }
            }),
            this.getBg();
        },
        methods: {
          lockFadeInOut: function (t) {
            var e = this;
            clearTimeout(m),
              (this.showLock = !0),
              (this.lockStatus = t),
              (m = setTimeout(function () {
                (e.showLock = !1), (m = 0);
              }, 3e3));
          },
          changeBackground: function (t) {
            if (t.url) {
              var e = new Image();
              (e.src = t.url),
                (e.onload = function () {
                  (g.style.opacity = "1"),
                    (g.style.backgroundImage = "url(" + t.url + ")");
                });
            } else g.style.opacity = "0";
          },
          handleBackgroundLock: function (t, e, n) {
            if (!t || e) {
              var o = this;
              t
                ? ((g.style.opacity = "0"),
                  a.default.cacheBackground(e, function (i) {
                    h.EventBus.$emit(p.MessageTypeEnum.HISTORY, {
                      message: p.HistoryMessage.LOCK_COMPLETE,
                      url: i && e,
                    }),
                      i &&
                        ((o.miscSettings.background.isLocked = !0),
                        (o.miscSettings.background.lockedUrl = e),
                        (o.miscSettings.background.id = n),
                        o.getBg(),
                        o.lockFadeInOut(t));
                  }))
                : ((g.style.opacity = "0"),
                  (o.miscSettings.background.isLocked = !1),
                  (o.miscSettings.background.lockedUrl = ""),
                  (o.miscSettings.background.id = ""),
                  a.default.removeBackgroundCache(),
                  o.lockFadeInOut(t));
            }
          },
          getAllBackgrounds: function (t) {
            var e = u.default.get(f.default.STORAGE.CURRENT_PAGE),
              n = u.default.get(t.value),
              o = c.default.stored[t.id];
            return e && e[t.value] && e[t.value] > 1 && n
              ? n
              : Object.assign({}, o, n);
          },
          getBg: function (t) {
            this.miscSettings.background.isLocked
              ? this.loadLockedBackground()
              : this.settings && "custom" !== this.settings.type
              ? this.getBackground(t)
              : (this.updateLocationInfo({ isHidden: !0 }),
                this.loadCustomBackground(t)),
              (this.backgroundType = this.settings.type);
          },
          loadLockedBackground: function () {
            var t = this;
            chrome.storage.local.get(d.STORAGE.BACKGROUND_LOCKED, function (e) {
              if (e) {
                a.default.setBackgroundWallpaper(
                  e[d.STORAGE.BACKGROUND_LOCKED]
                );
                var n = a.default.getBackgroundInfo({
                  isLocked: !0,
                  id: t.miscSettings && t.miscSettings.background.id,
                });
                t.updateLocationInfo(n);
              } else a.default.removeBackgroundCache(), (t.miscSettings.background.isLocked = !1);
            }),
              this.$emit("stopLoading");
          },
          getBackground: function (t) {
            if (
              !t ||
              this.themeId !== this.settings.themeId ||
              this.backgroundType !== this.settings.type
            ) {
              var e = a.default.getCurrentTheme(this.settings.themeId);
              this.themeVal = e.value;
              var n = u.default.get(e.value);
              this.bgSeen = u.default.get("bg-seen-" + e.value) || [];
              var o = this.getAllBackgrounds(e),
                i = Object.keys(o);
              if (
                ((this.allBackgrounds = o),
                (this.bgKeys = i),
                (this.themeId = e.id),
                navigator.onLine)
              ) {
                chrome.runtime.sendMessage({
                  query: "log",
                  value: "GetBackground Called " + e.id,
                });
                for (var s = 0; s < i.length; s++)
                  if (-1 === this.bgSeen.indexOf(i[s])) {
                    (this.bgIndex = s), this.loadBackground();
                    break;
                  }
                (!n || s >= i.length - 2) &&
                  (chrome.runtime.sendMessage({
                    query: "log",
                    value: "No Local Storage Found for theme " + e.id,
                  }),
                  chrome.runtime.sendMessage({
                    query: "getBackground",
                    theme: e,
                    newPage: !0,
                  })),
                  s >= i.length &&
                    ((v.style.backgroundImage =
                      "url(" + this.getDefaultBg() + ")"),
                    this.$emit("stopLoading"));
              } else
                (v.style.backgroundImage = "url(" + this.getDefaultBg() + ")"),
                  this.$emit("stopLoading");
            }
          },
          loadCustomBackground: function (t) {
            var e = this;
            if (!t || this.backgroundType !== this.settings.type) {
              var n = u.default.get(f.default.STORAGE.BACKGROUND_CUSTOM),
                o = u.default.get(f.default.STORAGE.BACKGROUND_SEEN_CUSTOM);
              if (
                ((o = null === o ? -1 : o),
                this.isLoading(),
                (this.defaultImageLoaded = !1),
                !n || n.length < 1)
              )
                return (
                  (this.defaultImageLoaded = !0),
                  (v.style.backgroundImage =
                    "url(" + this.getDefaultBg() + ")"),
                  this.$emit("stopLoading"),
                  void this.markCustomBgSeen(o)
                );
              o === n.length - 1 ? (o = 0) : o++;
              var i = n[o];
              chrome.runtime.sendMessage(
                { query: "loadCurrentCustomBackground", url: i },
                function (t) {
                  if (t) {
                    if (
                      ((e.defaultImageLoaded = !1),
                      (v.style.backgroundImage = "url(" + i + ")"),
                      a.default.addToHistory(o + "^custom", i, {
                        type: e.settings.type,
                      }),
                      n.length > 1)
                    ) {
                      var s = o === n.length - 1 ? 0 : o + 1,
                        r = n[s];
                      chrome.runtime.sendMessage({
                        query: "loadNextBackground",
                        url: r,
                      });
                    }
                  } else
                    (e.defaultImageLoaded = !0),
                      (v.style.backgroundImage =
                        "url(" + e.getDefaultBg() + ")");
                  e.$emit("stopLoading"), e.markCustomBgSeen(o);
                }
              );
            }
          },
          loadBackground: function () {
            var t = this;
            chrome.runtime.sendMessage({
              query: "log",
              value: "Load Background Called",
            }),
              this.isLoading(),
              (this.defaultImageLoaded = !1);
            var e = this.bgIndex,
              n = a.default.formImgURL(
                this.allBackgrounds[this.bgKeys[e]],
                this.bgKeys[e]
              );
            chrome.runtime.sendMessage(
              { query: "loadCurrentBackground", url: n },
              function (o) {
                if (o) {
                  (t.defaultImageLoaded = !1),
                    (v.style.backgroundImage = "url(" + n + ")"),
                    chrome.runtime.sendMessage({
                      query: "log",
                      value: "Current URL " + n,
                    }),
                    t.$emit("stopLoading");
                  var i = a.default.formImgURL(
                    t.allBackgrounds[t.bgKeys[e + 1]],
                    t.bgKeys[e + 1]
                  );
                  i &&
                    (chrome.runtime.sendMessage({
                      query: "log",
                      value: "Next URL " + i,
                    }),
                    chrome.runtime.sendMessage({
                      query: "loadNextBackground",
                      url: i,
                    }));
                  var s = a.default.getBackgroundInfo({
                    url: n,
                    id: t.bgKeys[t.bgIndex],
                    themeValue: t.themeVal,
                  });
                  a.default.addToHistory(
                    t.bgKeys[e],
                    t.allBackgrounds[t.bgKeys[e]],
                    { type: t.settings.type, theme: t.themeVal, location: s }
                  ),
                    t.updateLocationInfo(s);
                } else
                  (t.defaultImageLoaded = !0),
                    (v.style.backgroundImage = "url(" + t.getDefaultBg() + ")"),
                    chrome.runtime.sendMessage({
                      query: "log",
                      value: "Default URL" + t.settings.themeId,
                    }),
                    t.$emit("stopLoading");
                t.markBgSeen(t.bgKeys[e]);
              }
            );
          },
          resetBackgroundTheme: function () {
            this.getBackground(!0),
              chrome.runtime.sendMessage({ query: "setTabsCount", value: 0 });
          },
          isLoading: function () {
            this.$emit("startLoading");
          },
          markBgSeen: function (t) {
            var e = this;
            chrome.runtime.sendMessage({ query: "getTabsCount" }, function (n) {
              n &&
                (e.settings.changeLocked ||
                  (n % e.settings.changeInterval != 0 || e.defaultImageLoaded
                    ? e.defaultImageLoaded &&
                      chrome.runtime.sendMessage({
                        query: "setTabsCount",
                        value: parseInt(n) - 1,
                      })
                    : (e.bgSeen = a.default.updateBgSeen(
                        t,
                        e.themeVal,
                        e.bgSeen
                      ))));
            });
          },
          getDefaultBg: function () {
            var t = 0,
              e = Math.random(),
              n = this.settings.themeId;
            (t = e < 0.33 ? 0 : (t = e < 0.66 ? 1 : 2)),
              (this.defaultImageLoaded = !0),
              this.settings &&
                this.$ga.event(
                  "background",
                  "default",
                  this.settings.type,
                  this.settings.changeInterval
                ),
              chrome.runtime.sendMessage({
                query: "log",
                value: "getDefaultBg Called with counter, " + t,
              });
            var o = 1 + 3 * (n - 1) + t,
              i = a.default.getBackgroundInfo({ isDefault: !0, id: o });
            return this.updateLocationInfo(i), c.default.stored[n][o];
          },
          markCustomBgSeen: function (t) {
            var e = this;
            chrome.runtime.sendMessage({ query: "getTabsCount" }, function (n) {
              n &&
                (n % e.settings.changeInterval != 0 || e.defaultImageLoaded
                  ? e.defaultImageLoaded &&
                    chrome.runtime.sendMessage({
                      query: "setTabsCount",
                      value: parseInt(n) - 1,
                    })
                  : u.default.set(f.default.STORAGE.BACKGROUND_SEEN_CUSTOM, t));
            });
          },
          updateLocationInfo: function (t) {
            h.EventBus.$emit(
              p.MessageTypeEnum.BACKGROUND_INFO,
              i({ message: p.BackgroundInfoMessage.WALLPAPER_CHANGED }, t)
            );
          },
        },
      };
    e.default = _;
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function i(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s = n(5),
      a = o(s),
      r = n(10),
      c = o(r),
      l = n(15),
      u = n(4),
      d = n(10),
      f = o(d),
      h = {
        getFormattedJSON: function (t) {
          var e = void 0,
            n = void 0,
            o = [];
          (n = window.screen.width),
            (e =
              n <= 1280
                ? "largeImageURL"
                : n <= 1920
                ? "fullHDURL"
                : "imageURL");
          for (var i = 0; i < t.hits.length; i++) o[i] = t.hits[i][e];
          return o;
        },
        formImgURL: function (t, e, n) {
          try {
            if (!t) return !1;
            var o = t.split(",");
            return o.length > 1
              ? "https://farm" +
                  o[1] +
                  ".staticflickr.com/" +
                  o[2] +
                  "/" +
                  e +
                  "_" +
                  this.getSecret(o, n) +
                  this.getWallpaperSize(n)
              : t;
          } catch (t) {}
        },
        getSecret: function (t, e) {
          var n = window.screen.width;
          return n <= 1024 || e ? t[0] : n > 1024 && n < 1920 ? t[3] : t[4];
        },
        getWallpaperSize: function (t) {
          var e = window.screen.width;
          return t
            ? "_m.jpg"
            : e <= 1024
            ? "_b.jpg"
            : e > 1024 && e < 1920
            ? "_h.jpg"
            : "";
        },
        getCurrentTheme: function (t) {
          for (var e = c.default.themes, n = 0; n < e.length; n++)
            if (e[n].id === t) return e[n];
        },
        updateBgSeen: function (t, e, n, o) {
          if (t && e) {
            if (o) {
              var i = n.indexOf(t);
              i > -1 && (n.splice(i, 1), a.default.set("bg-seen-" + e, n));
            } else
              -1 === n.indexOf(t) &&
                (n.push(t), a.default.set("bg-seen-" + e, n));
            return n;
          }
        },
        cacheBackground: function (t, e) {
          -1 === t.search("http") && (t = chrome.runtime.getURL(t)),
            (0, l.toDataURL)(t, function (t) {
              t
                ? chrome.storage.local.set(
                    i({}, u.STORAGE.BACKGROUND_LOCKED, t),
                    function () {
                      e(!0);
                    }
                  )
                : e(!1);
            });
        },
        removeBackgroundCache: function () {
          chrome.storage.local.set(i({}, u.STORAGE.BACKGROUND_LOCKED, ""));
        },
        setBackgroundWallpaper: function (t) {
          if (t) {
            document.getElementById("background").style.backgroundImage =
              "url(" + t + ")";
          }
        },
        addToHistory: function (t, e, n) {
          if (t && e && n) {
            var o = a.default.get(u.STORAGE.BACKGROUND_HISTORY) || [],
              i = a.default.get(u.STORAGE.BACKGROUND_HISTORY_DATA) || {};
            t.length < 3 &&
              (t =
                t +
                (n.type ? "^" + n.type : "") +
                (n.theme ? "^" + n.theme : "")),
              o[0] !== t && o.unshift(t),
              (i[t] = {
                url: e,
                type: n.type,
                theme: n.theme,
                location: n.location,
              });
            o.splice(40).forEach(function (t) {
              delete i[t];
            }),
              a.default.set(u.STORAGE.BACKGROUND_HISTORY, o),
              a.default.set(u.STORAGE.BACKGROUND_HISTORY_DATA, i);
          }
        },
        getBackgroundInfo: function (t) {
          var e = t.id;
          if (t.isLocked) {
            var n = a.default.get(u.STORAGE.MISC_SETTINGS);
            if (n) {
              var o = n.background.id,
                i = a.default.get(u.STORAGE.BACKGROUND_HISTORY_DATA);
              if (i && i[o]) return i[o].location || {};
            }
          } else if (e.length < 3) {
            var s = f.default.storedDetails[e];
            if (s) return { area: s.area, url: s.url, user: s.user };
          } else if (t.themeValue) {
            var r = a.default.get(t.themeValue + "_details");
            if (r && r[e]) {
              var c = r[e];
              return {
                area: decodeURIComponent(c.area),
                url: "https://unsplash.com/photos/" + decodeURIComponent(c.id),
                user: decodeURIComponent(c.user),
              };
            }
          }
          return {};
        },
      };
    e.default = h;
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(10),
      s = o(i),
      a = n(5),
      r = o(a),
      c = n(4),
      l = o(c),
      u = n(142),
      d = o(u),
      f = n(7),
      h = n(17),
      p = n(6),
      v = n(144),
      g = n(145),
      m = n(9),
      _ = n(146),
      b = o(_),
      y = n(16),
      C = n(45),
      T = n(8);
    e.default = {
      components: { WhatsNew: d.default },
      data: function () {
        return {
          selectedTheme: this.settings.background.themeId,
          themes: s.default.themes,
          version: chrome.runtime.getManifest().version,
          activeTab:
            r.default.get(l.default.STORAGE.CURRENT_CUSTOMIZATION_TAB) ||
            C.TabTypeEnum.GENERAL,
          customLocation: "",
          currentBgCustom: "",
          isCustomBgSaveMsg: "",
          calendar: {
            authCode: r.default.get(l.default.STORAGE.G_CAL_AUTH) || "",
            isAuthSaved: !!r.default.get(l.default.STORAGE.G_CAL_AUTH),
            saveMsg: "",
          },
          todos: {
            saveMsg: "",
            type: this.settings.todos.type,
            isAuthCodeBoxVisible: !1,
            authCode: b.default.getAuthCode(this.settings.todos.type),
            isAuthSaved: !!b.default.getAuthCode(this.settings.todos.type),
          },
          locked: { background: this.miscSettings.background.isLocked },
          tabTypeEnum: C.TabTypeEnum,
        };
      },
      mounted: function () {
        this.customLocation =
          this.settings.weather.location.name ||
          (r.default.get(l.default.STORAGE.WEATHER) &&
            r.default.get(l.default.STORAGE.WEATHER).city);
        var t = r.default.get(l.default.STORAGE.BACKGROUND_CUSTOM);
        t &&
          "[object Array]" === Object.prototype.toString.call(t) &&
          t.length &&
          (this.currentBgCustom = t.join("\n")),
          this.$ga.event("customize", "open");
      },
      methods: {
        isActiveTheme: function (t) {
          return this.settings.background.themeId === t + 1;
        },
        selectActive: function (t) {
          (this.settings.background.themeId = t + 1),
            p.EventBus.$emit(T.MessageTypeEnum.BACKGROUND, {
              message: T.BackgroundMessage.THEME_RESET,
            }),
            this.$ga.event(
              "customize",
              "wallpaperCategoryChanged",
              this.themes[t].lValue
            );
        },
        closeCustomizeMenu: function () {
          r.default.remove(l.default.STORAGE.CURRENT_CUSTOMIZATION_TAB),
            this.$emit("closeCustomizeMenu");
        },
        updateCustomLocation: function () {
          this.customLocation !== this.settings.weather.location.name &&
            (this.settings.weather.location.name = this.customLocation);
        },
        saveCustomBg: function () {
          var t = this;
          if (this.currentBgCustom) {
            var e = this.currentBgCustom.split("\n");
            e &&
              e.length &&
              (function (e) {
                for (var n = 0; n < e.length; n++)
                  if (
                    null ===
                    e[n].match(/^(http?|https):\/\/.*(jpeg|png|gif|bmp|jpg)/g)
                  )
                    return (
                      (t.isCustomBgSaveMsg =
                        "<span class='error'>Wallpapers links are not in correct format.</span>"),
                      !1
                    );
                return !0;
              })(e) &&
              ((e = (function (t) {
                return t.reduce(function (t, e) {
                  return (
                    "string" == typeof e && e.length > 5 && t.push(e.trim()), t
                  );
                }, []);
              })(e)),
              r.default.set(l.default.STORAGE.BACKGROUND_CUSTOM, e),
              (this.isCustomBgSaveMsg =
                "<span class='success'>Wallpapers saved successfully.</span>"));
          } else
            this.isCustomBgSaveMsg =
              "<span class='error'>Wallpapers not saved</span>";
          setTimeout(function () {
            t.isCustomBgSaveMsg = "";
          }, 2e3);
        },
        onChange: function (t) {
          try {
            var e = void 0;
            switch (t) {
              case "backgroundInterval":
                e =
                  this.settings.background &&
                  this.settings.background.changeInterval;
                break;
              case "changeTab":
                e = this.activeTab;
                break;
              case "backgroundType":
                (e = this.settings.background && this.settings.background.type),
                  p.EventBus.$emit(T.MessageTypeEnum.BACKGROUND, {
                    message: T.BackgroundMessage.TYPE_CHANGED,
                  });
                break;
              case "weatherLocationType":
                e =
                  this.settings.weather.location &&
                  this.settings.weather.location.type;
            }
            this.$ga.event("customize", t, e);
          } catch (t) {}
        },
        calendarAuthSuccess: function () {
          this.$ga.event("customize", "g_integration", "success"),
            r.default.set(l.default.STORAGE.G_CAL_AUTH, this.calendar.authCode),
            (this.calendar.isAuthSaved = !0),
            (this.calendar.saveMsg =
              '<span class="success">Authentication done successfully.</span>');
        },
        calendarAuthFailed: function (t) {
          this.$ga.event("customize", "g_integration", "failed", t),
            r.default.remove(l.default.STORAGE.G_CAL_AUTH),
            (this.calendar.isAuthSaved = !1),
            (this.calendar.saveMsg =
              '<span class="error">' +
              (t ||
                "Authentication code not copied properly. Try again or contact support.") +
              "</span>");
        },
        calendarAuth: function () {
          var t = this;
          if (this.calendar.isAuthSaved)
            return (
              (this.calendar.authCode = ""),
              r.default.remove(l.default.STORAGE.G_CAL_AUTH),
              (this.calendar.saveMsg =
                '<span class="success">Integration removed successfully</span>'),
              p.EventBus.$emit("calendar", { message: "close", force: "true" }),
              this.settings.clock &&
                this.settings.clock.calendar &&
                (this.settings.clock.calendar = h.DefaultConfig.clock.calendar),
              void (this.calendar.isAuthSaved = !1)
            );
          try {
            var e = (0, f.DecryptAuth)(this.calendar.authCode);
            e.access_token && e.refresh_token
              ? (0, v.getPermission)("calendar").then(
                  function () {
                    t.calendarAuthSuccess();
                  },
                  function () {
                    t.calendarAuthFailed("Integration process aborted.");
                  }
                )
              : this.calendarAuthFailed();
          } catch (t) {
            r.default.remove(l.default.STORAGE.G_CAL_AUTH),
              (this.calendar.saveMsg =
                '<span class="error">Authentication code not copied properly. Try again or contact support.</span>');
          }
        },
        openIntegration: function (t) {
          var e = void 0;
          switch (t) {
            case "calendar":
              e = l.default.URL.G_CAL_KB_INTEGRATION;
              break;
            case "w":
              e = l.default.URL.WUNDERLIST_INTEGRATION;
              break;
            case "t":
              e = l.default.URL.TODOIST_INTEGRATION;
          }
          chrome.tabs.create({ url: e, active: !0 });
        },
        saveAuthCode: function () {
          var t = this,
            e = this.todos.type;
          return this.todos.isAuthSaved
            ? (this.$ga.event("customize", "integration", "revoked", e),
              (this.todos.authCode = ""),
              (this.todos.saveMsg =
                '<span class="success">Integration removed successfully</span>'),
              this.settings.todos &&
                this.todos.type &&
                (this.settings.todos.type = this.todos.type =
                  h.DefaultConfig.todos.type),
              void (this.calendar.isAuthSaved = !1))
            : (0, g.validateAuthCode)(this.todos.type, this.todos.authCode)
            ? void (0, v.getPermission)(e).then(
                function () {
                  e === m.TodosType.WUNDERLIST
                    ? ((t.todos.saveMsg =
                        "<span class='success'>Wunderlist Integrated</span>"),
                      (t.settings.todos.type = e),
                      b.default.storeAuthCode(e, t.todos.authCode),
                      (t.todos.isAuthSaved = !0))
                    : e === m.TodosType.TODOIST &&
                      ((t.settings.todos.type = e),
                      (t.todos.saveMsg =
                        "<span class='success'>Todoist Integrated</span>"),
                      b.default.storeAuthCode(e, t.todos.authCode),
                      (t.todos.isAuthSaved = !0)),
                    t.$ga.event("customize", "integration", e),
                    p.EventBus.$emit(T.MessageTypeEnum.TODO_WRAPPER, {
                      message: T.TodoWrapperMessage.REFRESH,
                    });
                },
                function () {
                  (t.todos.type = t.settings.todos.type = m.TodosType.DEFAULT),
                    (t.todos.saveMsg =
                      "<span class='error'>Invalid auth code</span>"),
                    p.EventBus.$emit(T.MessageTypeEnum.TODO_WRAPPER, {
                      message: T.TodoWrapperMessage.REFRESH,
                    }),
                    t.$ga.event("customize", "integration", "failed");
                }
              )
            : ((this.todos.saveMsg =
                "<span class='error'>Incorrect authentication code, contact support.</span>"),
              void this.$ga.event(
                "customize",
                "integration",
                "incorrect-code",
                e
              ));
        },
        unlockSettings: function (t) {
          switch (t) {
            case C.TabTypeEnum.BACKGROUND:
              p.EventBus.$emit(T.MessageTypeEnum.BACKGROUND, {
                message: T.BackgroundMessage.CHANGE_LOCKED,
                value: !1,
                url: "",
              });
          }
        },
      },
      props: ["settings", "miscSettings"],
      watch: {
        "todos.type": {
          handler: function (t, e) {
            t &&
              (t === m.TodosType.DEFAULT
                ? ((0, y.unsetThirdPartyTodoData)(),
                  (this.todos.isAuthCodeBoxVisible = !1),
                  (this.settings.todos.type = t),
                  (this.todos.authCode = ""))
                : ((this.todos.isAuthCodeBoxVisible = !0),
                  (this.todos.authCode = b.default.getAuthCode(t)),
                  (this.todos.isAuthSaved = !1)));
          },
        },
      },
      computed: {
        isBackgroundWidgetLocked: function () {
          return (
            this.miscSettings &&
            this.miscSettings.background &&
            this.miscSettings.background.isLocked &&
            this.activeTab === C.TabTypeEnum.BACKGROUND
          );
        },
      },
      beforeDestroy: function () {
        r.default.remove(l.default.STORAGE.CURRENT_CUSTOMIZATION_TAB);
      },
    };
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(5),
      s = o(i),
      a = n(4),
      r = o(a),
      c = n(7),
      l = o(c);
    e.default = {
      data: function () {
        return {
          updates: s.default.get(r.default.STORAGE.WHATS_NEW),
          isLoading: !1,
        };
      },
      mounted: function () {
        this.updates || this.getUpdates();
      },
      methods: {
        getUpdates: function () {
          var t = this;
          (this.isLoading = !0),
            l.default.http(r.default.URL.WHATS_NEW).then(function (e) {
              (t.isLoading = !1),
                (t.updates = e.response),
                s.default.set(r.default.STORAGE.WHATS_NEW, e.response);
            });
        },
      },
      filters: {
        date: function (t) {
          if (t) {
            var e = new Date(t);
            return (
              (e = e.toDateString().split(" ")), e[2] + " " + e[1] + ", " + e[3]
            );
          }
        },
      },
    };
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(5),
      s = o(i),
      a = n(151),
      r = o(a),
      c = n(4),
      l = o(c),
      u = n(7),
      d = o(u),
      f = n(152),
      h = o(f);
    e.default = {
      beforeCreate: function () {
        this.localWeather = s.default.get(l.default.STORAGE.WEATHER);
      },
      props: ["settings", "otherSettings"],
      mounted: function () {
        this.checkWeather();
      },
      data: function () {
        return {
          weatherClass: null,
          weatherCity: null,
          temp: null,
          localWeather: this.localWeather,
          error: null,
          isLoading: !1,
          localSettings: Object.assign({}, this.settings),
        };
      },
      methods: {
        toggle: function (t) {
          "showWeatherInfo" === t &&
            (this.otherSettings.weather.showWeatherInfo ||
              this.$ga.event("weatherInfo", "open"),
            (this.otherSettings.weather.showWeatherInfo =
              !this.otherSettings.weather.showWeatherInfo));
        },
        getTemp: function (t, e) {
          if (t && e) return "f" === t ? Math.round(1.8 * e + 32) : e;
        },
        getWeatherClass: function (t) {
          if (t) return r.default[t];
        },
        checkWeather: function (t) {
          if (!navigator.onLine) return void (this.weatherCity = "Offline");
          var e = +new Date();
          if (!this.localWeather || t) return void this.prepareWeatherCall();
          this.localWeather &&
            (e - this.localWeather.updatedOn < 9e5
              ? (this.showWeather(this.localWeather), (this.isLoading = !1))
              : (this.showWeather(this.localWeather),
                this.prepareWeatherCall(!0)));
        },
        getWeather: function (t) {
          var e = this;
          this.localWeather || (this.isLoading = !0),
            chrome.runtime.sendMessage({ query: "startWeather" });
          var n = "https://api.subtletab.com/weather";
          return (
            "custom" !== t.type
              ? (n += "?lat=" + t.lat + "&long=" + t.long + "&type=geo")
              : (n += "?location=" + t.location + "&type=custom"),
            d.default.http(n).then(function (t) {
              (e.isLoading = !1),
                e.updateLocalWeather(t),
                e.showWeather(e.localWeather);
            })
          );
        },
        prepareWeatherCall: function (t) {
          var e = this,
            n = void 0;
          "custom" !== this.settings.location.type
            ? ((this.isLoading = !t),
              navigator.geolocation.getCurrentPosition(
                function (t) {
                  (n = {
                    lat: t.coords.latitude,
                    long: t.coords.longitude,
                    type: "geo",
                  }),
                    e.getWeather(n);
                },
                function (t) {},
                { timeout: 1e4 }
              ))
            : this.settings.location &&
              this.settings.location.name &&
              ((n = { location: this.settings.location.name, type: "custom" }),
              this.getWeather(n));
        },
        showWeather: function (t) {
          var e = t.current;
          (this.temp = this.getTemp(this.settings.unit, e.temp)),
            (this.weatherClass = this.getWeatherClass(e.code)),
            (this.weatherCity = e.city);
        },
        updateLocalWeather: function (t) {
          d.default.isObject(t) &&
            0 !== Object.keys(t).length &&
            ((this.localWeather = t),
            s.default.set(l.default.STORAGE.WEATHER, this.localWeather));
        },
      },
      watch: {
        settings: {
          handler: function (t) {
            this.localSettings.unit !== t.unit
              ? this.checkWeather()
              : (this.localSettings.location.name === t.location.name &&
                  this.localSettings.location.type === t.location.type) ||
                this.checkWeather(!0),
              (this.localSettings = JSON.parse(JSON.stringify(t)));
          },
          deep: !0,
        },
      },
      computed: {
        showWeatherInfo: function () {
          return this.otherSettings.weather.showWeatherInfo || !1;
        },
      },
      components: { WeatherInfo: h.default },
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = {
        props: ["data", "settings"],
        data: function () {
          return {
            getTemp: this.$parent.getTemp,
            getWeatherClass: this.$parent.getWeatherClass,
          };
        },
        methods: {
          isAvailable: function (t) {
            return void 0 === t ? "NA" : t;
          },
        },
        computed: {
          humidity: function () {
            return this.isAvailable(this.data.current.humidity);
          },
          wind: function () {
            return this.isAvailable(this.data.current.wind);
          },
          pollution: function () {
            return this.isAvailable(this.data.pollution.aqi);
          },
        },
      });
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function i(t) {
      if (Array.isArray(t)) {
        for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
        return n;
      }
      return Array.from(t);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s = n(57),
      a = o(s),
      r = n(5),
      c = o(r),
      l = n(4),
      u = o(l),
      d = n(6),
      f = n(8);
    e.default = {
      beforeCreate: function () {
        this.notesMeta = c.default.get(u.default.STORAGE.NOTES_META) || {
          count: 0,
          deletedNotes: [],
          createdNotes: [],
        };
      },
      data: function () {
        return {
          input: "",
          notes: [],
          currentNote: "",
          currentNoteContent: "",
          notesMeta: this.notesMeta,
          errorMessage: null,
          showSidebar: !1,
        };
      },
      mounted: function () {
        this.isolateScroll("note"),
          this.isolateScroll("note-list"),
          document.execCommand("DefaultParagraphSeparator", !1, "p"),
          this.populateNotes(),
          this.addNoteLimit("note"),
          this.$ga.event("notes", "open");
      },
      computed: {
        sortedNoted: function () {
          var t = this.notes;
          return (
            t.sort(function (t, e) {
              return e.updatedOn - t.updatedOn;
            }),
            t
          );
        },
        isPinned: function () {
          return this.settings && this.settings.isPinned;
        },
      },
      methods: {
        handler: function (t) {
          this.debouncedInput(t, this), this.debouncedInputSync(this);
        },
        debouncedInput: (0, a.default)(function (t, e) {
          var n = t.target.innerHTML;
          n.length > 7e3 && (n = n.slice(0, 7e3)),
            (e.currentNote.content = n),
            (e.currentNote.updatedOn = +new Date()),
            c.default.setLocal("note-" + e.currentNote.id, e.currentNote);
        }, 1e3),
        debouncedInputSync: (0, a.default)(function (t) {
          c.default.chromeSync.set("note-" + t.currentNote.id, t.currentNote);
        }, 5e3),
        addNoteLimit: function (t) {
          var e = document.getElementById(t),
            n = this;
          if (e) {
            (e.onkeyup = function (t) {
              e.innerHTML.length > 7e3
                ? ((n.errorMessage = "Content limit reached for this note."),
                  t.preventDefault())
                : 27 === t.which
                ? e.blur()
                : (n.errorMessage = null);
            }),
              (e.onkeydown = function (t) {
                8 !== t.which &&
                  e.innerHTML.length > 7e3 &&
                  ((n.errorMessage = "Content limit reached for this note."),
                  t.preventDefault());
              });
          }
        },
        getNoteTemplate: function () {
          var t = void 0;
          return (
            this.notesMeta.deletedNotes.length
              ? ((t = Math.min.apply(Math, i(this.notesMeta.deletedNotes))),
                this.notesMeta.deletedNotes.splice(
                  this.notesMeta.deletedNotes.indexOf(t),
                  1
                ))
              : (t = this.notesMeta.createdNotes.length + 1),
            {
              id: t,
              createdOn: +new Date(),
              updatedOn: +new Date(),
              content: "New Note",
            }
          );
        },
        sortNotes: function () {
          return this.notes.sort(function (t, e) {
            return e.updatedOn - t.updatedOn;
          });
        },
        isActiveNote: function (t) {
          return this.currentNote.id === t;
        },
        setCurrentNote: function (t) {
          for (var e = 0; e < this.notes.length; e++)
            if (this.notes[e].id === t) {
              this.currentNote = this.notes[e];
              break;
            }
          this.errorMessage = null;
          var n = document.getElementById("note"),
            o = new DOMParser(),
            i = o.parseFromString(
              "<div>" + this.currentNote.content + "</div>",
              "text/html"
            ),
            s = i.getElementsByTagName("body")[0];
          (n.innerHTML = ""),
            n.appendChild(s.firstChild),
            this.$ga.event("notes", "change", "click");
        },
        trimContent: function (t) {
          var e = "";
          return (
            (t = t.replace(/<(?:.|\n)*?>/gm, " ")),
            t.length && t
              ? (t.length > 25 && (e = "..."), t.slice(0, 25) + e)
              : "New Note"
          );
        },
        populateNotes: function () {
          for (
            var t = void 0, e = 0;
            e < this.notesMeta.createdNotes.length;
            e++
          )
            (t = c.default.get("note-" + this.notesMeta.createdNotes[e])) &&
              this.notes.push(t);
          this.notesMeta.createdNotes.length > 0 &&
            this.notes.length > 0 &&
            (this.sortNotes(),
            (this.currentNote = this.notes[0]),
            (this.currentNoteContent = this.currentNote.content));
        },
        isolateScroll: function (t) {
          var e = document.getElementById(t);
          e &&
            (e.onmousewheel = function (t) {
              (e.scrollTop -= t.wheelDeltaY),
                (t = t || window.event),
                t.preventDefault && t.preventDefault(),
                (t.returnValue = !1);
            });
        },
        toggleNoteList: function () {
          this.showSidebar = !this.showSidebar;
        },
        deleteNote: function (t) {
          if (
            (t.preventDefault(),
            t.stopPropagation(),
            confirm("Are you sure you want to delete this note?"))
          ) {
            this.showSidebar = !0;
            for (var e = 0; e < this.notes.length; e++)
              if (this.notes[e].id === this.currentNote.id) {
                this.notes.splice(e, 1);
                break;
              }
            c.default.remove("note-" + this.currentNote.id),
              this.notesMeta.deletedNotes.push(this.currentNote.id),
              this.notesMeta.createdNotes.splice(
                this.notesMeta.createdNotes.indexOf(this.currentNote.id),
                1
              ),
              this.notesMeta.count--,
              this.notes.length > 0 &&
                ((this.currentNote = this.notes[0]),
                this.setCurrentNote(this.currentNote.id)),
              this.$ga.event("notes", "delete");
          }
        },
        createNote: function (t) {
          var e = this;
          if (
            (t.stopPropagation(),
            (this.showSidebar = !0),
            !(this.notes && this.notes.length > 9))
          ) {
            var n = this.getNoteTemplate();
            this.notes.unshift(n),
              this.notesMeta.createdNotes.push(n.id),
              this.notesMeta.count++,
              c.default.set("note-" + n.id, n),
              setTimeout(function () {
                return e.setCurrentNote(n.id);
              }, 100),
              this.$ga.event("notes", "create");
          }
        },
        createFirstNote: function (t) {
          var e = this;
          this.createNote(t),
            (this.showSidebar = !0),
            this.$ga.event("notes", "first"),
            setTimeout(function () {
              e.isolateScroll("note");
            }, 100);
        },
        togglePin: function () {
          d.EventBus.$emit(f.MessageTypeEnum.APP, {
            message: f.AppMessage.PIN,
            widget: "notes",
            value: !this.isPinned,
          });
        },
      },
      props: ["settings"],
      watch: {
        notesMeta: {
          handler: function (t) {
            c.default.set(u.default.STORAGE.NOTES_META, t);
          },
          deep: !0,
        },
      },
      filters: {
        formatDate: function (t) {
          if (t) {
            var e = new Date(t);
            return +new Date() - e >= 864e5
              ? e.toLocaleDateString()
              : e.toLocaleTimeString();
          }
        },
      },
      beforeDestroy: function () {
        this.$ga.event("notes", "close");
      },
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t, e, n) {
        var i,
          s,
          a,
          r = null,
          c = 0;
        n || (n = {});
        var l = function () {
          (c = !1 === n.leading ? 0 : o.now()),
            (r = null),
            (a = t.apply(i, s)),
            r || (i = s = null);
        };
        return function () {
          var u = o.now();
          c || !1 !== n.leading || (c = u);
          var d = e - (u - c);
          return (
            (i = this),
            (s = arguments),
            d <= 0 || d > e
              ? (r && (clearTimeout(r), (r = null)),
                (c = u),
                (a = t.apply(i, s)),
                r || (i = s = null))
              : r || !1 === n.trailing || (r = setTimeout(l, d)),
            a
          );
        };
      });
    var o = function t(e) {
      return e instanceof t
        ? e
        : this instanceof t
        ? void (this._wrapped = e)
        : new t(e);
    };
    o.now =
      Date.now ||
      function () {
        return new Date().getTime();
      };
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(162),
      s = o(i),
      a = n(290),
      r = o(a),
      c = n(295),
      l = o(c),
      u = n(9),
      d = n(6),
      f = n(8);
    e.default = {
      props: ["type", "settings"],
      data: function () {
        return { TodosType: u.TodosType, showTodosSection: !0 };
      },
      mounted: function () {
        var t = this,
          e = this;
        d.EventBus.$on(f.MessageTypeEnum.TODO_WRAPPER, function (n) {
          n.message === f.TodoWrapperMessage.REFRESH &&
            ((t.showTodosSection = !1),
            setTimeout(function () {
              e.showTodosSection = !0;
            }, 100));
        });
      },
      components: {
        Todos: s.default,
        WunderlistTodos: r.default,
        TodoistTodos: l.default,
      },
    };
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(28),
      s = o(i),
      a = n(22),
      r = o(a),
      c = n(39),
      l = o(c),
      u = n(40),
      d = o(u),
      f = n(41),
      h = o(f),
      p = n(42),
      v = o(p),
      g = n(5),
      m = o(g),
      _ = n(4),
      b = n(23),
      y = o(b),
      C = n(7),
      T = n(15),
      w = n(9),
      x = n(16);
    n(6);
    e.default = {
      beforeCreate: function () {
        this.todosMeta = (0, g.Get)(_.STORAGE.TODOS_META) || [];
      },
      data: function () {
        return {
          input: "",
          todoLists: [],
          allTodos: [],
          currentTodo: {},
          currentTodoContent: "",
          todosMeta: this.todosMeta,
          errorMessage: null,
          showSidebar: !1,
          showTodoManager: !1,
          listTitle: "",
          currentListId: (0, g.Get)(_.STORAGE.CURRENT_TODO_LIST) || "inbox",
          showCompletedTodos: !1,
        };
      },
      beforeMount: function () {
        this.populateTodoLists(), this.populateTodos();
      },
      mounted: function () {
        (0, C.isolateScroll)("todos-list"),
          (0, C.isolateScroll)("todo-sidebar");
      },
      computed: {
        todos: function () {
          var t = this;
          return "today" === this.currentListId
            ? this.allTodos.filter(function (t) {
                return y.default.isTodayDate(t.dueOn);
              })
            : this.allTodos.filter(function (e) {
                return e.list === t.currentListId;
              });
        },
        completedTodos: function () {
          return this.todos.filter(function (t) {
            return t.isCompleted;
          });
        },
        incompleteTodos: function () {
          return this.todos.filter(function (t) {
            return !t.isCompleted;
          });
        },
        currentList: function () {
          var t = this;
          return (
            this.todoLists &&
            this.todoLists.find(function (e) {
              return e.id === t.currentListId;
            })
          );
        },
        currentListTitle: function () {
          return this.currentList && (0, T.titleCase)(this.currentList.title);
        },
        todosCount: function () {
          var t = {};
          return this.todoLists && this.allTodos
            ? (this.todoLists.forEach(function (e) {
                e && e.id && (t[e.id] = 0);
              }),
              this.allTodos.forEach(function (e) {
                e &&
                  !e.isCompleted &&
                  e.list &&
                  (t[e.list]++, y.default.isTodayDate(e.dueOn) && t.today++);
              }),
              t)
            : t;
        },
      },
      methods: {
        todoHeaderChanged: function (t) {
          if (t && t.action)
            switch (t.action) {
              case w.TodoListItemAction.DELETE:
                return void this.deleteList(this.currentList);
              case w.TodoListItemAction.VIEWLIST:
                return (
                  this.toggle("showSidebar"), void (this.showTodoManager = !1)
                );
            }
        },
        toggle: function (t) {
          this[t] = !this[t];
        },
        toggleCompletedTodos: function (t) {
          this.showCompletedTodos = t;
        },
        populateTodoLists: function () {
          this.todoLists = [
            { title: "Inbox", id: "inbox" },
            { title: "Due Today", id: "today" },
          ];
          var t = (0, x.getLocalLists)(w.TodosType.DEFAULT);
          this.todoLists = this.todoLists.concat(t);
        },
        populateTodos: function () {
          this.allTodos = (0, x.getLocalTodos)(w.TodosType.DEFAULT) || [];
        },
        createList: function (t) {
          if (t) {
            var e = {
              id: (0, C.generateId)(),
              title: t,
              createdOn: +new Date(),
              updatedOn: +new Date(),
              isDeleted: !1,
            };
            m.default.append(_.STORAGE.TODO_LISTS_META, e.id),
              (0, g.Set)(_.STORAGE.TODO_LIST + e.id, e),
              this.todoLists.push(e),
              this.setActiveList(e.id),
              (this.listTitle = "");
          }
        },
        deleteList: function (t) {
          if (confirm("Are you sure, all todos of list will be deleted?"))
            try {
              (0, x.unsetLocalList)(w.TodosType.DEFAULT, t),
                this.setActiveList("inbox"),
                this.populateTodoLists(),
                this.populateTodos();
            } catch (t) {
              this.manageError(t);
            }
        },
        createTodo: function (t) {
          if (t && t.title) {
            var e = void 0;
            "today" === this.currentListId && (e = y.default.getEndOfDay());
            var n =
                "today" === this.currentListId ? "inbox" : this.currentListId,
              o = {
                id: (0, C.generateId)(),
                title: t.title,
                isStarred: !1,
                isRepeat: !1,
                repeat_type: "",
                list: n,
                isCompleted: !1,
                completedOn: "",
                createdOn: +new Date(),
                updatedOn: +new Date(),
                dueOn: e || t.dueOn,
              };
            m.default.append(_.STORAGE.TODOS_META, o.id),
              (0, g.Set)(_.STORAGE.TODO + o.id, o),
              this.allTodos.push(o);
          }
        },
        getCurrentTodo: function (t) {
          return this.allTodos.find(function (e) {
            return e.id === t;
          });
        },
        getCurrentTodoIndex: function (t) {
          return this.allTodos.findIndex(function (e) {
            return e.id === t;
          });
        },
        changedTodoList: function (t) {
          if (t && t.action)
            switch (t.action) {
              case w.TodoListItemAction.CREATE:
                if (t.data.title) {
                  var e = t.data.title;
                  this.createList(e);
                }
                return;
              case w.TodoListItemAction.SELECT:
                return void (t.list.id && this.setActiveList(t.list.id));
              case w.TodoListItemAction.DELETE:
                return void (t.list.id && this.deleteList(t.list.id));
            }
        },
        changedTodo: function (t) {
          if (t) {
            var e = t.todo && t.todo.id,
              n = this.getCurrentTodo(e);
            if (t.action === w.TodoItemAction.COMPLETE)
              (n.isCompleted = t.value),
                n.isCompleted
                  ? (n.completedOn = +new Date())
                  : (n.completedOn = null);
            else {
              if (t.action === w.TodoItemAction.EDIT)
                return void this.editTodo(t.todo);
              if (t.action === w.TodoItemAction.DELETE)
                return void this.deleteTodo(t.todo);
            }
            (n.updatedOn = +new Date()), (0, g.Set)(_.STORAGE.TODO + n.id, n);
          }
        },
        setActiveList: function (t) {
          (0, g.Set)(_.STORAGE.CURRENT_TODO_LIST, t),
            (this.currentListId = t),
            (this.showSidebar = !1),
            (this.showCompletedTodos = !1);
        },
        deleteTodo: function (t) {
          confirm("Are you sure you want to delete this todo?") &&
            ((0, x.unsetLocalTodo)(w.TodosType.DEFAULT, t.id),
            this.populateTodos());
        },
        editTodo: function (t) {
          !this.showSidebar &&
            t &&
            ((this.showTodoManager = !0),
            (this.currentTodo = Object.assign({}, t)));
        },
        updateTodo: function (t) {
          if (t.action === w.TodoItemAction.EDIT) {
            var e = t.todo,
              n = this.getCurrentTodoIndex(this.currentTodo.id);
            this.$set(this.allTodos, n, e),
              (0, g.Set)(_.STORAGE.TODO + this.currentTodo.id, e),
              (this.showTodoManager = !1);
          }
        },
      },
      components: {
        TodosGroup: s.default,
        AddTodo: r.default,
        TodoList: l.default,
        TodoManager: d.default,
        NoTodo: h.default,
        TodoHeader: v.default,
      },
      props: { settings: Object },
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = n(167),
      i = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(o);
    e.default = {
      data: function () {
        return {};
      },
      components: { TodoItem: i.default },
      props: {
        todos: { required: !0, type: Array },
        isCompletedList: { default: !1 },
      },
      computed: {
        transitionName: function () {
          return this.isCompletedList ? "flip-list" : "list-complete";
        },
      },
      methods: {
        changed: function (t) {
          this.$emit("changed", t);
        },
      },
    };
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(22),
      s = o(i),
      a = n(9),
      r = n(23),
      c = o(r);
    e.default = {
      data: function () {
        return {
          isEditing: !1,
          isCompleted: this.todo.isCompleted,
          showHoverBtn: !1,
        };
      },
      props: { todo: { required: !0 } },
      methods: {
        toggleEditMode: function (t) {
          this.isEditing = t;
        },
        editMode: function () {
          this.$emit("changed", {
            todo: this.todo,
            action: a.TodoItemAction.EDIT,
          }),
            this.$ga.event("todo", "todo-item", "edit-btn");
        },
        changed: function () {
          (this.isCompleted = !this.isCompleted),
            this.$emit("changed", {
              todo: this.todo,
              action: a.TodoItemAction.COMPLETE,
              value: this.isCompleted,
            }),
            this.$ga.event("todo", "todo-item", "complete-btn");
        },
        editTodo: function (t) {
          this.$emit("changed", {
            todo: this.todo,
            action: a.TodoItemAction.EDIT,
            value: t,
          }),
            this.$ga.event("todo", "todo-item", "edited-btn");
        },
        deleteTodo: function (t) {
          this.$emit("changed", {
            todo: this.todo,
            action: a.TodoItemAction.DELETE,
            value: t.id,
          }),
            this.$ga.event("todo", "todo-item", "delete-btn");
        },
      },
      computed: {
        todoTitle: function () {
          return (this.todo && Object.assign({}, this.todo)).title;
        },
        dueString: function () {
          var t = c.default.getDueDateString(this.todo.dueOn);
          return t && t.value;
        },
        isPending: function () {
          var t = c.default.getDueDateString(this.todo.dueOn);
          return t && t.pending >= 0;
        },
      },
      components: { AddTodo: s.default },
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = n(14),
      i = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(o);
    e.default = {
      props: {
        title: String,
        isEditMode: Boolean,
        isCompletedEnabled: { type: Boolean, default: !1 },
        isSticky: { default: !1, type: Boolean },
      },
      data: function () {
        return {
          isTodoEditing: this.isEditMode,
          defaultTitle: this.title,
          showCompleted: !1,
        };
      },
      methods: {
        handleBlurOut: function () {
          this.defaultTitle || this.cancel();
        },
        create: function () {
          this.isEditMode
            ? this.$emit("edit", { title: this.defaultTitle })
            : (this.$emit("create", { title: this.defaultTitle }),
              this.$ga.event("todo", "add-todo", "create")),
            (this.defaultTitle = ""),
            (this.isTodoEditing = !0),
            this.focus();
        },
        moveToBottom: function () {
          var t =
            document.querySelector("#todo") ||
            document.querySelector("#scroll-page");
          t.scroll({ left: 0, top: t.scrollHeight, behaviour: "smooth" });
        },
        focus: function () {
          var t = this;
          this.$nextTick(function () {
            t.moveToBottom();
          }),
            setTimeout(function () {
              t.$nextTick(function () {
                t.$refs.todo.focus();
              });
            }, 400);
        },
        type: function () {
          (this.isTodoEditing = !0), this.focus();
        },
        cancel: function () {
          (this.isTodoEditing = !1),
            (this.defaultTitle = ""),
            this.$emit("toggleEditMode", this.isTodoEditing);
        },
        toggleCompleted: function () {
          (this.showCompleted = !this.showCompleted),
            this.$emit("toggleCompleted", this.showCompleted),
            this.$ga.event("todo", "add-todo", "show-completed");
        },
      },
      components: { Button: i.default },
    };
  },
  function (t, e, n) {
    function o(t, e) {
      var n = Number(e);
      return i(t, n * s);
    }
    var i = n(19),
      s = 36e5;
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = Number(e);
      return s(t, i(t) + n);
    }
    var i = n(11),
      s = n(65);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = Number(e),
        r = a(n, s(n)),
        c = new Date(0);
      return (
        c.setFullYear(o, 0, 4),
        c.setHours(0, 0, 0, 0),
        (n = s(c)),
        n.setDate(n.getDate() + r),
        n
      );
    }
    var i = n(0),
      s = n(20),
      a = n(25);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = Number(e);
      return i(t, n * s);
    }
    var i = n(19),
      s = 6e4;
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = Number(e);
      return i(t, 3 * n);
    }
    var i = n(26);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = Number(e);
      return i(t, 1e3 * n);
    }
    var i = n(19);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = Number(e);
      return i(t, 12 * n);
    }
    var i = n(26);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      return i(t) - i(e);
    }
    var i = n(11);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = i(e);
      return (
        12 * (n.getFullYear() - o.getFullYear()) + (n.getMonth() - o.getMonth())
      );
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      var e = i(t);
      return Math.floor(e.getMonth() / 3) + 1;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = i(e);
      return n.getFullYear() - o.getFullYear();
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = i(e),
        r = a(n, o),
        c = Math.abs(s(n, o));
      return n.setDate(n.getDate() - r * c), r * (c - (a(n, o) === -r));
    }
    var i = n(0),
      s = n(25),
      a = n(21);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = Number(e);
      return i(t, -n);
    }
    var i = n(64);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e, n) {
      var o = n || {},
        h = i(t, e),
        p = o.locale,
        v = c.distanceInWords.localize;
      p &&
        p.distanceInWords &&
        p.distanceInWords.localize &&
        (v = p.distanceInWords.localize);
      var g,
        m,
        _ = { addSuffix: Boolean(o.addSuffix), comparison: h };
      h > 0 ? ((g = s(t)), (m = s(e))) : ((g = s(e)), (m = s(t)));
      var b,
        y = a(m, g),
        C = m.getTimezoneOffset() - g.getTimezoneOffset(),
        T = Math.round(y / 60) - C;
      if (T < 2)
        return o.includeSeconds
          ? y < 5
            ? v("lessThanXSeconds", 5, _)
            : y < 10
            ? v("lessThanXSeconds", 10, _)
            : y < 20
            ? v("lessThanXSeconds", 20, _)
            : y < 40
            ? v("halfAMinute", null, _)
            : y < 60
            ? v("lessThanXMinutes", 1, _)
            : v("xMinutes", 1, _)
          : 0 === T
          ? v("lessThanXMinutes", 1, _)
          : v("xMinutes", T, _);
      if (T < 45) return v("xMinutes", T, _);
      if (T < 90) return v("aboutXHours", 1, _);
      if (T < l) {
        return v("aboutXHours", Math.round(T / 60), _);
      }
      if (T < u) return v("xDays", 1, _);
      if (T < d) {
        return v("xDays", Math.round(T / l), _);
      }
      if (T < f) return (b = Math.round(T / d)), v("aboutXMonths", b, _);
      if ((b = r(m, g)) < 12) {
        return v("xMonths", Math.round(T / d), _);
      }
      var w = b % 12,
        x = Math.floor(b / 12);
      return w < 3
        ? v("aboutXYears", x, _)
        : w < 9
        ? v("overXYears", x, _)
        : v("almostXYears", x + 1, _);
    }
    var i = n(32),
      s = n(0),
      a = n(34),
      r = n(33),
      c = n(35),
      l = 1440,
      u = 2520,
      d = 43200,
      f = 86400;
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = e ? Number(e.weekStartsOn) || 0 : 0,
        o = i(t),
        s = o.getDay(),
        a = 6 + (s < n ? -7 : 0) - (s - n);
      return o.setDate(o.getDate() + a), o.setHours(23, 59, 59, 999), o;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      var e = i(t),
        n = e.getMonth();
      return (
        e.setFullYear(e.getFullYear(), n + 1, 0), e.setHours(23, 59, 59, 999), e
      );
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      var e = i(t);
      return a(e, s(e)) + 1;
    }
    var i = n(0),
      s = n(80),
      a = n(25);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      var e = i(t),
        n = new Date(0);
      return n.setFullYear(e.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      if (i(t)) return !isNaN(t);
      throw new TypeError(toString.call(t) + " is not an instance of Date");
    }
    var i = n(29);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      var e = i(t),
        n = e.getFullYear();
      return n % 400 == 0 || (n % 4 == 0 && n % 100 != 0);
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      var e = i(t),
        n = e.getDay();
      return 0 === n && (n = 7), n;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = i(e);
      return n.getTime() === o.getTime();
    }
    var i = n(85);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      var e = i(t);
      return e.setMinutes(0, 0, 0), e;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      return i(t, e, { weekStartsOn: 1 });
    }
    var i = n(38);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = i(e);
      return n.getTime() === o.getTime();
    }
    var i = n(20);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = i(e);
      return n.getTime() === o.getTime();
    }
    var i = n(89);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      var e = i(t);
      return e.setSeconds(0, 0), e;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = i(e);
      return (
        n.getFullYear() === o.getFullYear() && n.getMonth() === o.getMonth()
      );
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = i(e);
      return n.getTime() === o.getTime();
    }
    var i = n(92);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      var e = i(t),
        n = e.getMonth(),
        o = n - (n % 3);
      return e.setMonth(o, 1), e.setHours(0, 0, 0, 0), e;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = i(e);
      return n.getTime() === o.getTime();
    }
    var i = n(94);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      var e = i(t);
      return e.setMilliseconds(0), e;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = i(e);
      return n.getFullYear() === o.getFullYear();
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = e ? Number(e.weekStartsOn) || 0 : 0,
        o = i(t),
        s = o.getDay(),
        a = 6 + (s < n ? -7 : 0) - (s - n);
      return o.setHours(0, 0, 0, 0), o.setDate(o.getDate() + a), o;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = Number(e),
        a = n.getFullYear(),
        r = n.getDate(),
        c = new Date(0);
      c.setFullYear(a, o, 15), c.setHours(0, 0, 0, 0);
      var l = s(c);
      return n.setMonth(o, Math.min(r, l)), n;
    }
    var i = n(0),
      s = n(30);
    t.exports = o;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = n(9),
      i = n(15),
      s = n(16);
    e.default = {
      data: function () {
        return {
          currentListItemId:
            this.current || (this.list && this.list.length && this.list[0].id),
          title: "",
          titleCase: i.titleCase,
          isEditing: !1,
        };
      },
      props: {
        list: { type: Array, required: !0 },
        current: {},
        isCreateEnabled: { default: !0 },
        isDeleteEnabled: { default: !0 },
        count: { type: Object },
        showTodosCount: { type: Boolean, default: !0 },
      },
      methods: {
        _showDeleteIcon: function (t) {
          if (t && t.title) return (0, s.showDeleteIcon)(t.title);
        },
        itemSelected: function (t) {
          (this.currentListItemId = t.id),
            this.$emit("changed", {
              action: o.TodoListItemAction.SELECT,
              list: t,
            }),
            this.$ga.event("todo", "list", o.TodoListItemAction.SELECT);
        },
        create: function () {
          this.$emit("changed", {
            action: o.TodoListItemAction.CREATE,
            data: { title: this.title },
          }),
            (this.isEditing = !1),
            (this.title = ""),
            this.$ga.event("todo", "list", o.TodoListItemAction.CREATE);
        },
        type: function () {
          var t = this;
          (this.isEditing = !0),
            setTimeout(function () {
              t.$nextTick(function () {
                t.$refs.list.focus();
              });
            }, 400);
        },
        cancel: function () {
          this.isEditing = !1;
        },
        getTodosCount: function (t) {
          return (this.count && this.count[t]) || 0;
        },
        deleteList: function (t) {
          this.$emit("changed", {
            action: o.TodoListItemAction.DELETE,
            list: t,
          }),
            this.$ga.event("todo", "list", o.TodoListItemAction.DELETE);
        },
      },
    };
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(14),
      s = o(i),
      a = n(23),
      r = o(a);
    e.default = {
      mounted: function () {
        this.isEditingDate = this.todo && this.todo.dueOn;
      },
      data: function () {
        return {
          isEditingDate: this.todo && this.todo.dueOn,
          isSubmitDisable: !0,
        };
      },
      methods: {
        update: function () {
          this.$emit("changed", { action: "edit", todo: this._todo }),
            this.$ga.event("todo", "manager", "saved");
        },
      },
      props: { todo: { type: Object, required: !0 } },
      components: { Button: s.default },
      computed: {
        _todo: function () {
          var t = r.default.getDateInputTypeDate(this.todo.dueOn),
            e = Object.assign({}, this.todo);
          return (e.dueOn = t), e;
        },
      },
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = {
        data: function () {
          return {};
        },
        props: { currentListTitle: { type: String } },
        computed: {
          title: function () {
            return this.currentListTitle || "current";
          },
        },
      });
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = n(15),
      i = n(9),
      s = n(16),
      a = n(8),
      r = n(6);
    e.default = {
      data: function () {
        return { titleCase: o.titleCase };
      },
      props: {
        currentList: { default: "" },
        todoType: String,
        isPinned: Boolean,
      },
      methods: {
        _showDeleteIcon: function () {
          if (this.currentList && this.currentList.title)
            return (0, s.showDeleteIcon)(this.currentList.title);
        },
        getIntegrationIcon: function () {
          switch (this.todoType) {
            case i.TodosType.WUNDERLIST:
              return "icon--wunderlist";
            case i.TodosType.TODOIST:
              return "icon--todoist";
          }
        },
        deleteList: function () {
          this.$emit("changed", { action: i.TodoListItemAction.DELETE }),
            this.$ga.event("todo", "header", i.TodoListItemAction.DELETE);
        },
        togglePin: function () {
          r.EventBus.$emit(a.MessageTypeEnum.APP, {
            message: a.AppMessage.PIN,
            widget: "todos",
            value: !this.isPinned,
          }),
            this.$ga.event("todo", "header", a.AppMessage.PIN);
        },
        openTodoCustomize: function () {
          r.EventBus.$emit(a.MessageTypeEnum.APP, {
            message: a.AppMessage.OPEN_CUSTOMIZE,
            tab: "todo",
          }),
            this.$ga.event("todo", "header", a.AppMessage.OPEN_CUSTOMIZE);
        },
        viewList: function () {
          this.$emit("changed", { action: i.TodoListItemAction.VIEWLIST }),
            this.$ga.event("todo", "header", i.TodoListItemAction.VIEWLIST);
        },
      },
    };
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(5),
      s = n(4),
      a = n(7),
      r = n(15),
      c = n(16),
      l = n(9),
      u = n(22),
      d = o(u),
      f = n(28),
      h = o(f),
      p = n(39),
      v = o(p),
      g = n(40),
      m = o(g),
      _ = n(41),
      b = o(_),
      y = n(103),
      C = o(y),
      T = n(42),
      w = o(T),
      x = void 0;
    e.default = {
      beforeMount: function () {},
      data: function () {
        return {
          titleCase: r.titleCase,
          todoLists: [],
          currentTodo: "",
          showSidebar: !1,
          showTodoManager: !1,
          currentList: (0, i.Get)(s.STORAGE.W_CURRENT_TODO_LIST) || {},
          isLoadingTodos: !0,
          wunderlistTaskUrl: s.WUNDERLIST.URL.TASKS,
          showCompletedTodos: !1,
          incompleteTodos: "",
          auth: (0, a.DecryptAuth)((0, i.Get)(s.STORAGE.W_AUTH)),
          todos: [],
          errorState: "",
        };
      },
      mounted: function () {
        if (!this.auth)
          return void this.manageError({
            statusText: "No Auth Code",
            status: 403,
          });
        (0, a.isolateScroll)("incomplete-todos-list"),
          (0, a.isolateScroll)("todo-sidebar"),
          this.init(),
          (x = setInterval(this.sync, 5e3));
      },
      computed: {
        authCode: function () {
          return this.auth.access_token;
        },
        currentListId: function () {
          return this.currentList.id;
        },
        currentListTitle: function () {
          return this.currentList && this.currentList.title;
        },
      },
      methods: {
        todoHeaderChanged: function (t) {
          if (t && t.action)
            switch (t.action) {
              case l.TodoListItemAction.DELETE:
                return void (
                  this.currentList && this.deleteList(this.currentList)
                );
              case l.TodoListItemAction.VIEWLIST:
                return (
                  this.toggle("showSidebar"), void (this.showTodoManager = !1)
                );
            }
        },
        changedTodoList: function (t) {
          if (t && t.action)
            switch (t.action) {
              case l.TodoListItemAction.SELECT:
                return void this.setActiveList(t.list);
              case l.TodoListItemAction.DELETE:
                return void this.deleteList(t.list);
            }
        },
        changedTodo: function (t) {
          if (t && t.action)
            switch (t.action) {
              case l.TodoItemAction.EDIT:
                return void this.editTodo(t.todo);
              case l.TodoItemAction.DELETE:
                return void this.deleteTodo(t.todo);
              case l.TodoItemAction.COMPLETE:
                return void this.checkedTodo(t);
            }
        },
        toggleCompletedTodos: function (t) {
          this.showCompletedTodos = t;
        },
        http: function (t) {
          var e = this,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "GET",
            o = arguments[2],
            i = [
              { name: "X-Client-ID", value: "d63bcf15740b10b6790a" },
              { name: "X-Access-Token", value: this.authCode },
              { name: "Content-Type", value: "application/json" },
            ],
            s = { method: n, data: o, headers: i };
          return (
            (this.errorState = ""),
            (0, a.Http)(t, s).catch(function (t) {
              e.manageError(t);
            })
          );
        },
        toggle: function (t) {
          this.errorState || (this[t] = !this[t]);
        },
        init: function () {
          var t = this;
          if (this.currentList && this.currentList.id)
            return void this.getTodoLists(this.currentList.id).then(
              function (e) {
                return e
                  ? e.revision > t.currentList.revision
                    ? ((t.currentList.revision = e.revision),
                      void t.getTodos(t.currentList.id))
                    : ((t.incompleteTodos = (0, c.getLocalTodos)(
                        l.TodosType.WUNDERLIST
                      )),
                      void (t.incompleteTodos &&
                      (0, a.isArray)(t.incompleteTodos) &&
                      t.incompleteTodos.length
                        ? (t.isLoadingTodos = !1)
                        : t.getTodos(t.currentList.id)))
                  : void t.resetTodos();
              },
              function () {
                t.resetTodos();
              }
            );
          this.resetTodos();
        },
        sync: function () {
          var t = this;
          this.currentList &&
            this.currentList.id &&
            this.getTodoLists(this.currentList.id).then(
              function (e) {
                if (!e) return void t.resetTodos();
                var n = t.currentList.revision;
                e.revision > n &&
                  ((t.currentList = e), t.getTodos(t.currentList.id, !0));
              },
              function () {
                t.resetTodos();
              }
            );
        },
        resetTodos: function () {
          var t = this;
          this.getTodoLists().then(function (e) {
            if (!e || !(0, a.isArray)(e)) return void t.manageError();
            (t.currentList = e[0]), t.getTodos(t.currentList.id);
          });
        },
        getTodoLists: function (t) {
          var e = this,
            n = s.WUNDERLIST.URL.LISTS;
          return this.http(n).then(function (n) {
            if (n)
              return (
                (e.todoLists = n.map(function (t) {
                  return { id: t.id, title: t.title, revision: t.revision };
                })),
                t
                  ? e.todoLists.find(function (e) {
                      return e.id === t;
                    })
                  : e.todoLists
              );
          });
        },
        getTodoList: function (t) {
          var e = s.WUNDERLIST.URL.LISTS + "\\" + t;
          return this.http(e).then(function (t) {
            if (t) return { id: t.id, title: t.title, revision: t.revision };
          });
        },
        getTodos: function (t, e) {
          var n = this;
          if (t) {
            var o = s.WUNDERLIST.URL.TASKS + "?list_id=" + t,
              i = this.http(o);
            return (
              e || (this.isLoadingTodos = !0),
              Promise.all([i]).then(function (t) {
                if (t && (0, a.isArray)(t)) {
                  var e = [].concat(t[0]);
                  (n.incompleteTodos = e.map(function (t) {
                    return n.formatTodoResponse(t);
                  })),
                    (n.isLoadingTodos = !1);
                }
              })
            );
          }
        },
        formatTodoResponse: function (t) {
          return {
            id: t.id,
            title: t.title,
            revision: t.revision,
            isCompleted: t.completed,
            isStarred: t.starred,
            listId: t.list_id,
            dueOn: t.due_date,
            updatedOn: t.completed_at
              ? +new Date(t.completed_at)
              : +new Date(t.created_at),
          };
        },
        createTodo: function (t) {
          var e = this;
          if (t && t.title) {
            var n = { title: t.title, list_id: this.currentListId },
              o = this;
            this.http(this.wunderlistTaskUrl, "POST", n).then(function (t) {
              t &&
                t.id &&
                (o.incompleteTodos.push(e.formatTodoResponse(t)),
                o.$nextTick(function () {
                  var t = document.querySelector("#scroll-page");
                  t.scroll({
                    left: 0,
                    top: t.scrollHeight,
                    behaviour: "smooth",
                  });
                }),
                e.currentList.revision++);
            });
          }
        },
        checkedTodo: function (t) {
          var e = this;
          if (t && t.todo && !(0, a.isUndefined)(t.value)) {
            var n = Object.assign({}, t.todo);
            (n.isCompleted = t.value),
              this.patchTodo(n.id, {
                completed: n.isCompleted,
                revision: n.revision,
              }).then(function (t) {
                var n = e.incompleteTodos.findIndex(function (e) {
                  return e.id === t.id;
                });
                e.incompleteTodos.splice(n, 1);
              });
          }
        },
        setActiveList: function (t) {
          (this.isLoadingTodos = !0),
            (this.showSidebar = !1),
            (this.currentList = t),
            (0, c.unsetLocalTodos)(l.TodosType.WUNDERLIST),
            this.init();
        },
        deleteList: function (t) {
          var e = this;
          if (
            confirm('Are you sure you want to delete "' + t.title + '" list?')
          ) {
            var n =
              s.WUNDERLIST.URL.LISTS + "/" + t.id + "?revision=" + t.revision;
            this.http(n, "DELETE").then(function () {
              e.setActiveList(e.todoLists[0]);
            });
          }
        },
        deleteTodo: function (t) {
          var e = this;
          if (
            t &&
            t.id &&
            !(0, a.isUndefined)(t.revision) &&
            confirm("Are you sure you want to delete this todo?")
          ) {
            var n =
              this.wunderlistTaskUrl + "/" + t.id + "?revision=" + t.revision;
            this.http(n, "DELETE").then(function () {
              var n = e.getTodoIndex(t);
              e.incompleteTodos.splice(n, 1);
            });
          }
        },
        getTodoIndex: function (t) {
          if (t)
            return this.incompleteTodos.findIndex(function (e) {
              return e.id === t.id;
            });
        },
        editTodo: function (t) {
          !this.showSidebar &&
            t &&
            ((this.showTodoManager = !0),
            (this.currentTodo = Object.assign({}, t)));
        },
        updateTodo: function (t) {
          var e = this;
          if (t && t.action && t.action === l.TodoItemAction.EDIT) {
            var n = t.todo;
            this.patchTodo(this.currentTodo.id, {
              title: n.title,
              due_date: n.dueOn,
              revision: this.currentTodo.revision,
            }).then(function (t) {
              if (t && t.id) {
                var n = e.getTodoIndex(t);
                e.$set(e.incompleteTodos, n, t), (e.showTodoManager = !1);
              }
            });
          }
        },
        patchTodo: function (t, e) {
          var n = this,
            o = this.wunderlistTaskUrl + "/" + t;
          return this.http(o, "PATCH", e).then(function (t) {
            return n.currentList.revision++, n.formatTodoResponse(t);
          });
        },
        manageError: function (t) {
          if (
            !navigator.onLine ||
            (t && t.stack && t.stack.indexOf("TypeError") > -1)
          )
            return void (this.errorState = "offline");
          (0, a.isUndefined)(t) ||
            (t.status > 400 && t.status < 500
              ? ((this.errorState = "reIntegrate"),
                clearInterval(x),
                (0, i.Remove)(s.STORAGE.W_AUTH),
                (0, i.Remove)(s.STORAGE.W_CURRENT_TODO_LIST),
                (0, c.unsetLocalTodos)(l.TodosType.WUNDERLIST))
              : [501, 503].indexOf(t.status) > -1 &&
                (this.errorState = "serverIssue"),
            (this.isLoadingTodos = !1),
            this.$ga.event(
              l.TodosType.WUNDERLIST,
              "error",
              t.reason + "-" + t.status
            ));
        },
      },
      watch: {
        currentList: {
          handler: function (t) {
            t &&
              t.id &&
              (0, i.Set)(s.STORAGE.W_CURRENT_TODO_LIST, this.currentList);
          },
        },
        incompleteTodos: {
          handler: function (t) {
            t && t.length && (0, c.setLocalTodos)(l.TodosType.WUNDERLIST, t);
          },
          deep: !0,
        },
      },
      props: { settings: Object },
      components: {
        AddTodo: d.default,
        TodosGroup: h.default,
        TodoList: v.default,
        TodoManager: m.default,
        NoTodo: b.default,
        TodoError: C.default,
        TodoHeader: w.default,
      },
      beforeDestroy: function () {
        clearInterval(x);
      },
    };
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      n(291);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(104),
      s = n.n(i);
    for (var a in i)
      "default" !== a &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(a);
    var r = n(293),
      c = n(1),
      l = o,
      u = Object(c.a)(s.a, r.a, r.b, !1, l, null, null);
    e.default = u.exports;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = n(6),
      i = n(5),
      s = n(4);
    e.default = {
      props: { errorState: { type: String, default: "offline" } },
      methods: {
        reIntegrate: function () {
          (0, i.Set)(s.STORAGE.CURRENT_CUSTOMIZATION_TAB, "todo"),
            o.EventBus.$emit("app", { message: "OpenCustomize" });
        },
      },
    };
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(22),
      s = o(i),
      a = n(28),
      r = o(a),
      c = n(41),
      l = o(c),
      u = n(39),
      d = o(u),
      f = n(40),
      h = o(f),
      p = n(103),
      v = o(p),
      g = n(42),
      m = o(g),
      _ = n(5),
      b = n(4),
      y = n(7),
      C = n(16),
      T = o(C),
      w = n(15),
      x = n(9),
      k = n(23),
      L = o(k),
      O = void 0,
      S = x.TodosType.TODOIST;
    e.default = {
      data: function () {
        return {
          titleCase: w.titleCase,
          auth: (0, y.DecryptAuth)((0, _.Get)(b.STORAGE.T_AUTH)),
          todoLists: [],
          todos: [],
          currentTodo: "",
          showSidebar: !1,
          showTodoManager: !1,
          newTodo: {},
          currentList: (0, _.Get)(b.STORAGE.T_CURRENT_TODO_LIST),
          isLoadingTodos: !0,
          syncTime: "",
          showCompletedTodos: !1,
          isAddTodoSticky: !1,
          syncToken: (0, _.Get)(b.STORAGE.T_SYNC_TOKEN) || "*",
          errorState: "",
        };
      },
      mounted: function () {
        if (!this.authCode)
          return void this.manageError({
            statusText: "No Auth Code",
            status: 403,
          });
        (0, y.isolateScroll)("incomplete-todos-list"),
          (0, y.isolateScroll)("complete-todos-list"),
          (0, y.isolateScroll)("todo-sidebar"),
          this.init(),
          (O = setInterval(this.sync, 5e3));
      },
      computed: {
        currentListId: function () {
          return this.currentList && this.currentList.id;
        },
        tokenType: function () {
          return this.auth.token_type;
        },
        authCode: function () {
          return this.auth.access_token;
        },
        todosMeta: function () {
          return this.todos.map(function (t) {
            return t.id;
          });
        },
        listsMeta: function () {
          return this.todoLists.map(function (t) {
            return t.id;
          });
        },
        visibleLists: function () {
          var t = this.todoLists.filter(function (t) {
            return !t.isDeleted && !t.isArchived;
          });
          return t && t.length > 0 ? this.addTimeBoundList(t) : t;
        },
        currentListIncompleteTodos: function () {
          var t = this;
          return 1 === this.currentListId
            ? this.todos.filter(function (t) {
                return (
                  L.default.isTodayDate(t.dueOn) &&
                  !t.isCompleted &&
                  !t.isDeleted
                );
              })
            : this.todos.filter(function (e) {
                return (
                  e.listId === t.currentListId && !e.isCompleted && !e.isDeleted
                );
              });
        },
        currentListCompleteTodos: function () {
          var t = this;
          return this.todos.filter(function (e) {
            return (
              e.listId === t.currentListId && e.isCompleted && !e.isDeleted
            );
          });
        },
      },
      methods: {
        todoHeaderChanged: function (t) {
          if (t && t.action)
            switch (t.action) {
              case x.TodoListItemAction.DELETE:
                return void this.deleteList(this.currentList);
              case x.TodoListItemAction.VIEWLIST:
                return (
                  this.toggle("showSidebar"), void (this.showTodoManager = !1)
                );
            }
        },
        toggleCompletedTodos: function (t) {
          this.showCompletedTodos = t;
        },
        sortByOrder: function (t, e) {
          return e
            ? t.sort(function (t, e) {
                return e.order - t.order;
              })
            : t.sort(function (t, e) {
                return t.order - e.order;
              });
        },
        syncCall: function (t, e) {
          var n = this;
          return (
            (t = t || b.TODOIST.URL.BASE),
            (e = e
              ? Object.assign({ token: this.authCode }, e)
              : {
                  token: this.authCode,
                  sync_token: this.syncToken,
                  resource_types: ["projects", "items"],
                }),
            (0, y.POST)(t, { data: e })
              .then(function (t) {
                return (n.errorState = ""), t;
              })
              .catch(function (t) {
                n.manageError(t);
              })
          );
        },
        toggle: function (t) {
          this.errorState || (this[t] = !this[t]);
        },
        init: function () {
          if (this.currentList && this.currentList.id && this.syncToken) {
            var t = this.getLocalTodos(),
              e = this.getLocalLists();
            if (e && t)
              return (
                (this.todos = t),
                (this.todoLists = e),
                void (this.isLoadingTodos = !1)
              );
          }
          this.getAll();
        },
        sync: function () {
          var t = this;
          if (this.syncToken) {
            var e = b.TODOIST.URL.BASE;
            return this.syncCall(e).then(function (e) {
              if (e && e.projects && e.items)
                return (
                  e.projects.length > 0 &&
                    (t.updateLists(e.projects),
                    t.visibleLists &&
                      !t.visibleLists.find(function (e) {
                        return e.id === t.currentListId;
                      }) &&
                      t.todoLists.length &&
                      t.setActiveList(t.todoLists[0]),
                    (t.syncToken = e.sync_token)),
                  e.items.length > 0 &&
                    (t.updateTodos(e.items), (t.syncToken = e.sync_token)),
                  !0
                );
            });
          }
        },
        getLocalTodos: function () {
          try {
            return (
              (this.errorState = ""),
              T.default.getLocalTodos(x.TodosType.TODOIST)
            );
          } catch (t) {
            this.manageError({ error: t });
          }
        },
        setLocalTodos: function (t) {
          return T.default.setLocalTodos(x.TodosType.TODOIST, t);
        },
        unsetLocalTodos: function () {
          T.default.unsetLocalTodos(x.TodosType.TODOIST);
        },
        getLocalLists: function () {
          try {
            return (
              (this.errorState = ""),
              T.default.getLocalLists(x.TodosType.TODOIST)
            );
          } catch (t) {
            this.manageError({ error: t });
          }
        },
        setLocalLists: function (t) {
          return T.default.setLocalLists(x.TodosType.TODOIST, t);
        },
        unsetLocalLists: function () {
          T.default.unsetLocalLists(x.TodosType.TODOIST);
        },
        updateLists: function (t) {
          var e = this;
          t.map(function (t) {
            return e.formatListResponse(t);
          }).forEach(function (t) {
            var n = e.listsMeta.indexOf(t.id);
            n > -1
              ? (e.todoLists.splice(n, 1),
                e.$set(e.todoLists, e.todoLists.length, t))
              : e.$set(e.todoLists, e.todoLists.length, t);
          });
        },
        updateTodos: function (t) {
          var e = this;
          t.map(function (t) {
            return e.formatTodoResponse(t);
          }).forEach(function (t) {
            var n = e.todosMeta.indexOf(t.id);
            n > -1
              ? (e.todos.splice(n, 1), e.$set(e.todos, e.todos.length, t))
              : e.$set(e.todos, e.todos.length, t);
          });
        },
        getAll: function () {
          (this.isLoadingTodos = !0), (this.syncToken = "*");
          var t = b.TODOIST.URL.BASE,
            e = void 0,
            n = void 0,
            o = this;
          return this.syncCall(t).then(function (t) {
            t &&
              ((e = t.projects),
              (n = t.items),
              (o.todoLists = e.map(function (t) {
                return o.formatListResponse(t);
              })),
              (o.todos = t.items
                .filter(function (t) {
                  return !t.is_deleted && !t.in_history && !t.is_archived;
                })
                .map(function (t) {
                  return o.formatTodoResponse(t);
                })),
              (o.currentList = o.currentList || o.todoLists[0]),
              (o.syncToken = t.sync_token),
              (o.isLoadingTodos = !1));
          });
        },
        addTimeBoundList: function (t) {
          var e = this.formatListResponse(T.default.addTodayList());
          return T.default.addAfterInbox(t, [e]);
        },
        formatTodoResponse: function (t) {
          return {
            id: t.id,
            title: t.content,
            listId: t.project_id,
            dueOn: t.due && t.due.date,
            isDeleted: !!t.is_deleted,
            isCompleted: !!t.checked,
            order: t.child_order,
          };
        },
        formatListResponse: function (t) {
          return {
            id: t.id,
            title: t.name,
            isDeleted: !!t.is_deleted,
            isArchived: !!t.is_archived,
          };
        },
        setActiveList: function (t) {
          (this.currentList = t), (this.showSidebar = !1);
        },
        changedTodoList: function (t) {
          t &&
            (t.action === x.TodoListItemAction.SELECT
              ? this.setActiveList(t.list)
              : t.action === x.TodoListItemAction.DELETE
              ? this.deleteList(t.list)
              : t.action === x.TodoListItemAction.CREATE &&
                this.createList(t.data && t.data.title));
        },
        patchTodo: function (t, e) {
          var n = this,
            o = (0, y.generateId)(),
            i = (0, y.generateId)(),
            s = [{ type: t, uuid: o, args: e, temp_id: i }];
          return this.syncCall(b.TODOIST.URL.BASE, { commands: s }).then(
            function (t) {
              if (t) {
                var e = t.sync_status[o];
                if (
                  ((n.showSidebar = !1),
                  (n.showTodoManager = !1),
                  (n.isLoadingTodos = !1),
                  "ok" === e)
                )
                  return n.sync();
                e && n.manageError(e);
              }
            }
          );
        },
        createTodo: function (t) {
          var e = this;
          if (t.title) {
            this.newTodo = {};
            var n = this.currentListId,
              o = t.dueOn;
            if (
              (1 === n &&
                ((n = T.default.findInboxListId(this.todoLists)),
                (o = L.default.getEndOfDay(0))),
              n)
            ) {
              var i = { content: t.title, project_id: n, date_string: o };
              this.patchTodo("item_add", i).then(function () {
                e.$nextTick(function () {
                  var t = document.querySelector(".todos");
                  t &&
                    t.scroll &&
                    t.scroll({
                      left: 0,
                      top: t.scrollHeight,
                      behaviour: "smooth",
                    });
                });
              });
            }
          }
        },
        changedTodo: function (t) {
          if (t && t.action)
            switch (t.action) {
              case x.TodoItemAction.COMPLETE:
                return void this.checkedTodo(t);
              case x.TodoItemAction.EDIT:
                return void this.editTodo(t.todo);
              case x.TodoItemAction.DELETE:
                return void this.deleteTodo(t.todo);
            }
        },
        checkedTodo: function (t) {
          var e = t.todo,
            n = t.value,
            o = n ? "item_complete" : "item_uncomplete";
          this.patchTodo(o, { id: e.id });
        },
        deleteTodo: function (t) {
          t &&
            confirm("Are you sure you want to delete this todo?") &&
            ((t.isDeleted = !0), this.patchTodo("item_delete", { id: t.id }));
        },
        editTodo: function (t) {
          this.showSidebar ||
            ((this.currentTodo = Object.assign({}, t)),
            (this.showTodoManager = !0));
        },
        updateTodo: function (t) {
          if (t.action === x.TodoItemAction.EDIT) {
            var e = t.todo;
            this.patchTodo("item_update", {
              id: e.id,
              content: e.title,
              due: { string: e.dueOn },
            });
          }
        },
        createList: function (t) {
          var e = this;
          t &&
            this.patchTodo("project_add", { name: t }).then(function () {
              e.setActiveList(e.todoLists[e.todoLists.length - 1]);
            });
        },
        deleteList: function (t) {
          var e = this;
          t &&
            confirm("Are you sure you want to delete " + t.title + " list?") &&
            this.patchTodo("project_delete", { id: t.id }).then(function () {
              (t.isDeleted = !0), e.setActiveList(e.todoLists[0]);
            });
        },
        manageError: function (t) {
          if (
            !navigator.onLine ||
            (t && t.stack && t.stack.indexOf("TypeError") > -1)
          )
            return void (this.errorState = "offline");
          t instanceof Response ||
            ((t = t || {}),
            (t.status = t.status || t.http_code),
            (t.statusText = t.statusText || t.error)),
            t.status > 400 && t.status < 500
              ? ((this.errorState = "reIntegrate"),
                clearInterval(O),
                (0, _.Remove)(b.STORAGE.T_AUTH),
                (0, _.Remove)(b.STORAGE.T_SYNC_TOKEN),
                this.unsetLocalTodos(),
                this.unsetLocalLists())
              : [501, 503].indexOf(t.status) > -1 &&
                (this.errorState = "serverIssue"),
            (this.isLoadingTodos = !1),
            this.$ga.event(
              S,
              "error",
              t.statusText + "-" + t.status + "-" + t.error_tag
            );
        },
      },
      watch: {
        todos: {
          handler: function (t) {
            t && t.length && this.setLocalTodos(t);
          },
          deep: !0,
        },
        todoLists: {
          handler: function (t) {
            t && t.length && this.setLocalLists(t);
          },
          deep: !0,
        },
        currentList: {
          handler: function (t) {
            (0, y.isUndefined)(t) ||
              (0, y.isUndefined)(t.id) ||
              (0, _.Set)(b.STORAGE.T_CURRENT_TODO_LIST, this.currentList);
          },
        },
        syncToken: {
          handler: function (t) {
            t && (0, _.Set)(b.STORAGE.T_SYNC_TOKEN, t);
          },
        },
      },
      components: {
        AddTodo: s.default,
        TodosGroup: r.default,
        NoTodo: l.default,
        TodoManager: h.default,
        TodoList: d.default,
        TodoError: v.default,
        TodoHeader: m.default,
      },
      beforeDestroy: function () {
        clearInterval(O);
      },
      props: { settings: Object },
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = n(5),
      i = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(o);
    e.default = {
      data: function () {
        return { version: chrome.runtime.getManifest().version };
      },
      mounted: function () {
        i.default.get("sync") &&
          i.default.chromeSync.get(null, function (t) {
            var e = void 0;
            for (e in t) t.hasOwnProperty(e) && i.default.setLocal(e, t[e]);
          });
      },
      props: ["settings"],
      methods: {
        closeOnboarding: function () {
          this.$emit("stopOnboarding");
        },
      },
    };
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(301),
      s = o(i),
      a = n(8),
      r = n(6),
      c = n(5),
      l = n(4),
      u = n(51),
      d = o(u),
      f = n(305),
      h = o(f),
      p = n(17),
      v = o(p),
      g = (0, c.Get)(l.STORAGE.MISC_SETTINGS);
    e.default = {
      data: function () {
        return {
          startIndex: 0,
          urlsData: [],
          lockedUrl: (g && g.background.lockedUrl) || "",
          isLocking: !1,
        };
      },
      mounted: function () {
        var t = this,
          e = (0, c.Get)(l.STORAGE.BACKGROUND_HISTORY_DATA),
          n = (0, c.Get)(l.STORAGE.BACKGROUND_HISTORY);
        if (
          ((n && e && n.length === Object.keys(e).length) ||
            this.resetHistory(),
          (this.urlsData = n.map(function (t) {
            var n = {};
            return (
              (n.id = t),
              -1 === e[t].url.indexOf("http")
                ? ((n.thumb = d.default.formImgURL(e[t].url, t, !0)),
                  (n.original = d.default.formImgURL(e[t].url, t)))
                : (n.thumb = n.original = e[t].url),
              n
            );
          })),
          this.lockedUrl)
        ) {
          var o = this.urlsData.findIndex(function (e) {
            return e.original === t.lockedUrl;
          });
          this.startIndex = parseInt(o / 8, 10);
        }
        r.EventBus.$on(a.MessageTypeEnum.HISTORY, function (e) {
          switch (e.message) {
            case a.HistoryMessage.LOCK_COMPLETE:
              (t.isLocking = !1), (t.lockedUrl = e.url);
          }
        });
      },
      computed: {
        isAllUrlsPresent: function () {
          return 8 === this.currentUrls.length;
        },
        currentUrls: function () {
          return this.urls.slice(8 * this.startIndex, 8 * this.startIndex + 8);
        },
        isNextVisible: function () {
          return this.urls.length / 8 - this.startIndex > 1;
        },
        urls: function () {
          return this.urlsData.map(function (t) {
            return t.thumb;
          });
        },
      },
      methods: {
        resetHistory: function () {
          (g.background = v.default.misc.background),
            (0, c.Set)(l.STORAGE.MISC_SETTINGS, g),
            (0, c.Remove)(l.STORAGE.BACKGROUND_HISTORY),
            (0, c.Remove)(l.STORAGE.BACKGROUND_HISTORY_DATA);
        },
        isLocked: function (t) {
          var e = this.urls.indexOf(t);
          return this.lockedUrl === this.urlsData[e].original;
        },
        close: function () {
          r.EventBus.$emit(a.MessageTypeEnum.APP, {
            message: a.AppMessage.TOGGLE_HISTORY,
            value: !1,
          });
        },
        next: function () {
          this.startIndex++;
        },
        prev: function () {
          this.startIndex--;
        },
        toggleLock: function (t) {
          if (t && !this.isLocking) {
            var e = this.urls.indexOf(t.url);
            -1 !== e &&
              ((this.isLocking = t.value),
              (this.lockedUrl = ""),
              r.EventBus.$emit(a.MessageTypeEnum.BACKGROUND, {
                message: a.BackgroundMessage.CHANGE_LOCKED,
                value: t.value,
                url: this.urlsData[e].original,
                id: this.urlsData[e].id,
              }));
          }
        },
        onChangeBackground: function (t) {
          this.changeBackground(t, this);
        },
        changeBackground: (0, h.default)(function (t, e) {
          if (!t)
            return void r.EventBus.$emit(a.MessageTypeEnum.BACKGROUND, {
              message: a.BackgroundMessage.CHANGE_BACKGROUND,
            });
          var n = e.urls.indexOf(t.url);
          -1 !== n &&
            r.EventBus.$emit(a.MessageTypeEnum.BACKGROUND, {
              message: a.BackgroundMessage.CHANGE_BACKGROUND,
              url: e.urlsData[n].original,
            });
        }, 2e3),
      },
      components: { Thumbnail: s.default },
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    e.default = {
      data: function () {
        return { isLoading: !0, src: "", background: "", isFavourite: !1 };
      },
      props: ["url", "isLocked", "isLocking"],
      mounted: function () {
        this.loadImage(this.url);
      },
      methods: {
        loadImage: function (t) {
          var e = this;
          this.isLoading = !0;
          var n = new Image();
          (n.src = t),
            (n.onload = function () {
              (e.isLoading = !1),
                (e.background = "background-image:url(" + t + ");");
            });
        },
        onMouseLeave: function () {
          this.$emit("changeBackground"), clearTimeout(void 0);
        },
        onMouseEnter: function (t) {
          t || this.$emit("changeBackground", { url: this.url });
        },
        toggleFavourite: function () {
          this.isFavourite = !this.isFavourite;
        },
        toggleLock: function () {
          this.$emit("toggleLock", { value: !this.isLocked, url: this.url });
        },
      },
      watch: {
        url: {
          handler: function (t, e) {
            t !== e && this.loadImage(t);
          },
        },
      },
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = n(6),
      i = n(8);
    e.default = {
      data: function () {
        return { area: "", user: "", url: "", infoReceived: !1 };
      },
      methods: {
        onBgInfoClick: function () {
          this.$ga.event("bgInfo", "clicked");
        },
        updateInfo: function (t) {
          if (t.isHidden)
            return (this.area = ""), (this.url = ""), void (this.user = "");
          t &&
            Object.keys(t).length > 0 &&
            ((this.url = t.url), (this.area = t.area), (this.user = t.user));
        },
      },
      mounted: function () {
        var t = this;
        o.EventBus.$on(i.MessageTypeEnum.BACKGROUND_INFO, function (e) {
          switch (e.message) {
            case i.BackgroundInfoMessage.WALLPAPER_CHANGED:
              t.updateInfo(e), (t.infoReceived = !0);
          }
        });
      },
    };
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(314),
      s = o(i),
      a = n(14),
      r = o(a),
      c = n(6),
      l = n(8),
      u = n(5),
      d = n(4);
    e.default = {
      beforeCreate: function () {
        (this.defaultBookmarks = [
          {
            title: "Apps",
            icon: "http://proxy.duckduckgo.com/ip3/www.google.com/chrome.ico",
            url: "chrome://apps",
          },
          {
            title: "Settings",
            icon: "http://proxy.duckduckgo.com/ip3/www.google.com/chrome.ico",
            url: "chrome://settings",
          },
          {
            title: "Search",
            icon: "http://proxy.duckduckgo.com/ip3/www.google.com.ico",
            url: "https://google.com/",
          },
          {
            title: "Wikipedia",
            icon: "http://proxy.duckduckgo.com/ip3/www.wikipedia.org.ico",
            url: "https://www.wikipedia.org/",
          },
          {
            title: "Youtube",
            icon: "http://proxy.duckduckgo.com/ip3/www.youtube.com.ico",
            url: "https://www.youtube.com",
          },
          {
            title: "Netflix",
            icon: "http://proxy.duckduckgo.com/ip3/www.netflix.com.ico",
            url: "https://netflix.com/",
          },
          {
            title: "Pinterest",
            icon: "http://proxy.duckduckgo.com/ip3/pinterest.com/.ico",
            url: "https://www.pinterest.com/",
          },
          {
            title: "Twitter",
            icon: "http://proxy.duckduckgo.com/ip3/twitter.com/.ico",
            url: "https://www.twitter.com/",
          },
        ]),
          (this.localBookmarks = (0, u.Get)(d.STORAGE.BOOKMARKS)),
          (this.finalBookmarks =
            this.localBookmarks && this.localBookmarks.length
              ? this.localBookmarks
              : this.defaultBookmarks);
      },
      mounted: function () {
        var t = this;
        c.EventBus.$on(l.MessageTypeEnum.BOOKMARK, function (e) {
          switch (e.action) {
            case l.BookmarkMessage.UPDATE:
              if (e.title && e.icon && e.url && t.bookmarks[t.editIndex]) {
                var n = { title: e.title, icon: e.icon, url: e.url };
                t.$ga.event("bookmarks", "update"),
                  t.bookmarks.splice(t.editIndex, 1, n),
                  (t.editIndex = t.rightClickIndex = -1),
                  (0, u.Set)(d.STORAGE.BOOKMARKS, t.bookmarks);
              }
              break;
            case l.BookmarkMessage.ADD:
              var n = e;
              delete n.action,
                (t.bookmarks && t.bookmarks.length) || (t.bookmarks = []),
                t.bookmarks.push(n),
                t.$ga.event("bookmarks", "add"),
                (0, u.Set)(d.STORAGE.BOOKMARKS, t.bookmarks);
              break;
            case l.BookmarkMessage.DELETE:
              t.bookmarks[t.editIndex] &&
                (t.bookmarks.splice(t.editIndex, 1),
                (t.editIndex = t.rightClickIndex = -1),
                t.$ga.event("bookmarks", "delete"),
                (0, u.Set)(d.STORAGE.BOOKMARKS, t.bookmarks));
              break;
            case l.BookmarkMessage.EDIT:
              t.onEdit(t.rightClickIndex);
              break;
            case l.BookmarkMessage.OPEN_NEW_TAB:
              chrome.tabs.create({ url: t.bookmarks[t.rightClickIndex].url });
              break;
            case l.BookmarkMessage.HIDE_BAR:
              confirm(
                "Are you sure you want to disable bookmarks bar? You can enable it again from customize menu."
              ) &&
                c.EventBus.$emit(l.MessageTypeEnum.APP, {
                  message: l.AppMessage.HIDE_BOOKMARKS,
                });
          }
        });
      },
      data: function () {
        return { bookmarks: this.finalBookmarks };
      },
      methods: {
        onRightClick: function (t, e) {
          (this.rightClickIndex = this.editIndex = e),
            t.preventDefault(),
            c.EventBus.$emit(l.MessageTypeEnum.CONTEXT_MENU, {
              action: l.ContextMenuMessage.OPEN,
              event: t,
            }),
            this.$ga.event("bookmarks", "right-clicked");
        },
        onEdit: function (t) {
          (this.editIndex = t),
            c.EventBus.$emit(l.MessageTypeEnum.MODAL, {
              action: l.ModalMessage.OPEN,
              item: this.bookmarks[t],
            });
        },
        onDotClick: function (t) {
          this.$ga.event("bookmarks", "three-dots-clicked"), this.onEdit(t);
        },
        onAddClick: function () {
          (this.editIndex = -1),
            c.EventBus.$emit(l.MessageTypeEnum.MODAL, {
              action: l.ModalMessage.OPEN,
            });
        },
      },
      components: { BookmarkItem: s.default, Button: r.default },
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = {
        data: function () {
          return {
            style:
              'background-image: url("./images/default-bookmark-icon.png");',
          };
        },
        beforeMount: function () {
          this.getIcon(this.item.icon);
        },
        methods: {
          onRightClick: function (t) {
            this.$emit("onRightClick", t, this.index);
          },
          onLinkClick: function (t) {
            chrome.tabs.update({ url: t });
          },
          onDotClick: function (t) {
            t.preventDefault(), this.$emit("onDotClick", this.index);
          },
          getIcon: function (t) {
            var e = this,
              n = new Image();
            (e.style =
              'background-image: url("./images/default-bookmark-icon.png")'),
              (n.onload = function () {
                e.style = 'background-image: url("' + t + '");';
              }),
              (n.src = t);
          },
        },
        props: {
          item: { type: Object, required: !0 },
          index: { type: Number },
        },
        watch: {
          item: {
            handler: function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              t.icon !== e.icon && this.getIcon(t.icon);
            },
          },
        },
      });
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = n(6),
      i = n(8);
    e.default = {
      data: function () {
        return {
          isVisible: !1,
          json: [
            { label: "Edit", value: i.BookmarkMessage.EDIT, separator: !0 },
            { label: "Open in new tab", value: i.BookmarkMessage.OPEN_NEW_TAB },
            {
              label: "Hide All Bookmarks",
              value: i.BookmarkMessage.HIDE_BAR,
              separator: !0,
            },
            {
              label: "Remove",
              value: i.BookmarkMessage.DELETE,
              color: "text-red",
            },
          ],
        };
      },
      mounted: function () {
        var t = this;
        o.EventBus.$on(i.MessageTypeEnum.CONTEXT_MENU, function (e) {
          switch ((console.log("Message on context menu ", e), e.action)) {
            case i.ContextMenuMessage.OPEN:
              (t.isVisible = !1),
                t.position(e.event),
                t.$nextTick(function () {
                  t.isVisible = !0;
                });
              break;
            case i.ContextMenuMessage.CLOSE:
              t.isVisible = !1;
          }
        }),
          document.addEventListener("click", this.handleCloseListener, !0);
      },
      methods: {
        handleCloseListener: function () {
          console.log("Close clicked"), (this.isVisible = !1);
        },
        onClick: function (t) {
          o.EventBus.$emit(i.MessageTypeEnum.BOOKMARK, {
            action: t.target.dataset.value,
            event: t,
          });
        },
        position: function (t) {
          var e = this.$refs.contextMenu;
          180 + t.pageX >= window.innerWidth
            ? (e.style.left = t.pageX - 180 + 2 + "px")
            : (e.style.left = t.pageX + 2 + "px"),
            180 + t.pageY >= window.innerHeight
              ? (e.style.top = t.pageY - 180 + 2 + "px")
              : (e.style.top = t.pageY + 2 + "px");
        },
      },
      beforeDestroy: function () {
        document.removeEventListener("click", this.handleCloseListener);
      },
    };
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(14),
      s = o(i),
      a = n(6),
      r = n(8),
      c = n(7),
      l = n(57),
      u = (o(l), "http://proxy.duckduckgo.com/ip3/");
    e.default = {
      mounted: function () {
        var t = this;
        a.EventBus.$on(r.MessageTypeEnum.MODAL, function (e) {
          switch (((t.isEditMode = !1), e.action)) {
            case r.ModalMessage.OPEN:
              (t.isVisible = !0),
                e.item
                  ? ((t.isEditMode = !0),
                    (t.url = e.item.url),
                    (t.favicon = e.item.icon),
                    (t.title = e.item.title))
                  : t.reset();
              break;
            case r.ModalMessage.CLOSE:
              t.isVisible = !1;
          }
        }),
          this.reset();
      },
      methods: {
        onPaste: function (t) {
          return (
            console.log("on paste", t),
            this.$set(this, "url", t.clipboardData.getData("text")),
            !0
          );
        },
        onClose: function () {
          (this.isVisible = !1), this.reset();
        },
        onFocusURL: function () {
          console.log("on focus on url"), (this.suggestion = {});
        },
        reset: function () {
          (this.title = ""),
            (this.url = ""),
            (this.suggestion = {}),
            (this.error = {}),
            (this.favicon = ""),
            (this.URLWarning = "");
        },
        onSubmit: function (t) {
          if (
            (console.log("BOOKMARK SUBMIT"),
            this.checkURLError(),
            !this.error.url)
          ) {
            if (this.isEditMode)
              return (
                a.EventBus.$emit(r.MessageTypeEnum.BOOKMARK, {
                  action: r.BookmarkMessage.UPDATE,
                  title: this.title,
                  url: this.url,
                  icon: this.suggestion.favicon || this.favicon,
                }),
                this.reset(),
                void (this.isVisible = !1)
              );
            a.EventBus.$emit(r.MessageTypeEnum.BOOKMARK, {
              action: r.BookmarkMessage.ADD,
              title: this.title,
              url: this.url,
              icon: this.suggestion.favicon || this.favicon,
            }),
              this.reset(),
              (this.isVisible = t);
          }
        },
        onRemove: function () {
          a.EventBus.$emit(r.MessageTypeEnum.BOOKMARK, {
            action: r.BookmarkMessage.DELETE,
          }),
            this.reset(),
            (this.isVisible = !1);
        },
        getDefaultFavicon: function () {
          return this.isChromeURL
            ? u + "google.com/chrome.ico"
            : this.isFirefoxURL
            ? u + "mozilla.org/en-GB/firefox.ico"
            : (0, c.isValidURL)(this.url)
            ? u +
              this.parsedURL.hostname +
              this.parsedURL.pathname.replace(/\/$/, "") +
              ".ico"
            : "./images/default-bookmark-icon.png";
        },
        onBlurURL: function () {
          console.log("URL BLUR"),
            (this.url = this.url.trim()),
            this.isURLEmpty ||
              ((this.favicon = this.getDefaultFavicon()),
              this.preloadIcon(this.favicon),
              this.fetchTitleAndIcon(),
              this.checkURLWarning());
        },
        preloadIcon: function (t) {
          try {
            new Image().src = t;
          } catch (t) {}
        },
        fetchTitleAndIcon: function () {
          var t = this;
          this.isChromeURL ||
            this.isFirefoxURL ||
            !this.parsedURL ||
            ((this.isLoading = !0),
            console.log("fetchTitleAndIcon => ", this.parsedURL),
            -1 === this.url.indexOf("http") &&
              (this.url = "http://" + this.url),
            (0, c.Http)(
              "https://api.subtletab.com/bookmark/?url=" + this.url
            ).then(
              function (e) {
                (t.isLoading = !1),
                  t.$set(t.suggestion, "title", e.title),
                  (t.isLoading = !1),
                  e.favicon &&
                    (t.$set(t.suggestion, "favicon", e.favicon),
                    t.preloadIcon(e.favicon));
              },
              function () {
                t.isLoading = !1;
              }
            ));
        },
        onSuggestionClick: function () {
          this.title = this.suggestion.title;
        },
        checkURLWarning: function () {
          this.parsedURL
            ? (this.URLWarning = "")
            : (this.URLWarning = "Warning:  Invalid URL");
        },
        checkURLError: function (t) {
          if (((t = t || this), 0 === t.url.trim().length))
            return (t.error.url = "URL is required"), !0;
          t.error.url = "";
        },
      },
      computed: {
        isInvalidUrl: function () {
          return !(0, c.isValidURL)(this.url);
        },
        parsedURL: function () {
          try {
            var t =
              -1 === this.url.indexOf("http") ? "http://" + this.url : this.url;
            return console.log("ParsedURl", new URL(t)), new URL(t);
          } catch (t) {
            return null;
          }
        },
        isChromeURL: function () {
          return this.parsedURL && "chrome:" === this.parsedURL.protocol;
        },
        isFirefoxURL: function () {
          return this.parsedURL && "about:" === this.parsedURL.protocol;
        },
        isAddButtonDisabled: function () {
          return this.isURLEmpty;
        },
        isURLEmpty: function () {
          return (
            0 === this.url.length ||
            "http://" === this.url ||
            "https://" === this.url
          );
        },
      },
      data: function () {
        return {
          isVisible: !1,
          title: "",
          url: "",
          suggestion: {},
          error: {},
          URLWarning: "",
          isEditMode: !1,
          isLoading: !1,
        };
      },
      components: { Button: s.default },
      beforeDestroy: function () {
        this.reset();
      },
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = n(6),
      i = n(8),
      s = n(5),
      a = n(4);
    e.default = {
      methods: {
        onClose: function () {
          (0, s.Set)(a.STORAGE.TOP_BANNER, !0),
            o.EventBus.$emit(i.MessageTypeEnum.APP, {
              message: i.AppMessage.BANNER_CLOSE,
            });
        },
      },
    };
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(330),
      s = o(i),
      a = n(5),
      r = n(4),
      c = o(r),
      l = n(7),
      u = o(l),
      d = { URL: "url", CLOSE: "close", REMIND: "remind" };
    e.default = {
      created: function () {
        this.notificationObj = (0, a.Get)(r.STORAGE.NOTIFICATION);
      },
      data: function () {
        return { notificationObj: {}, show: !1 };
      },
      mounted: function () {
        var t = this;
        setTimeout(function () {
          t.checkNotification(), t.showNotification();
        }, 1e3);
      },
      methods: {
        showNotification: function () {
          var t = this;
          !this.notificationObj ||
            !this.notificationObj.data ||
            this.notificationObj.seen >= 3 ||
            (this.notificationObj.seen++,
            (0, a.Set)(r.STORAGE.NOTIFICATION, this.notificationObj),
            setTimeout(function () {
              t.$ga.event(
                "app",
                "notification",
                "show",
                t.notificationObj.data.id
              ),
                (t.show = !0);
            }, 100));
        },
        checkNotification: function () {
          var t = this,
            e = +new Date();
          if (
            !(
              this.notificationObj &&
              this.notificationObj.lastChecked &&
              e - this.notificationObj.lastChecked < 36e5
            )
          ) {
            var n =
              c.default.URL.NOTIFICATIONS +
              "?platform=" +
              u.default.getBrowser();
            (0, l.Http)(n, { method: "GET" })
              .then(function (t) {
                return t.response;
              })
              .then(function (e) {
                var n = { data: e };
                (t.notificationObj &&
                  t.notificationObj.data &&
                  e &&
                  t.notificationObj.data.id === e.id) ||
                  ((n.lastChecked = +new Date()),
                  (n.loaded = !0),
                  (n.seen = 0),
                  (0, a.Set)(r.STORAGE.NOTIFICATION, n));
              });
          }
        },
        markSeen: function () {
          (this.notificationObj.seen = 3),
            (this.show = !1),
            (0, a.Set)(r.STORAGE.NOTIFICATION, this.notificationObj);
        },
        takeAction: function (t) {
          switch (t.type) {
            case d.URL:
              chrome.tabs.create(t.url);
              break;
            case d.CLOSE:
              this.markSeen();
          }
        },
        primaryClick: function () {
          var t = this.notificationObj.data.action.primary;
          this.$ga.event(
            "app",
            "notification",
            "primary",
            this.notificationObj.data.id
          ),
            this.takeAction(t, "primary");
        },
        secondaryClick: function () {
          var t = this.notificationObj.data.action.secondary;
          this.$ga.event(
            "app",
            "notification",
            "secondary",
            this.notificationObj.data.id
          ),
            this.takeAction(t, "secondary");
        },
      },
      components: { Notification: s.default },
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = n(14),
      i = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(o);
    e.default = {
      beforeCreate: function () {},
      data: function () {
        var t = {
          resize: !1,
          action: null,
          media: null,
          video: null,
          thumbnail: null,
          text: null,
        };
        return Object.assign({}, t, this.data);
      },
      props: {
        data: { required: !0 },
        primaryClick: { required: !0 },
        secondaryClick: { required: !0 },
      },
      mounted: function () {},
      components: { Button: i.default },
      computed: {
        getMediaHeight: function () {
          return this.media && this.media.h ? this.media.h : "130px";
        },
        getMediaWidth: function () {
          return this.media && this.media.w ? this.media.w : "100%";
        },
        getVideoHeight: function () {
          return this.video && this.video.h ? this.video.h : "auto";
        },
        getVideoWidth: function () {
          return this.video && this.video.w ? this.video.w : "100%";
        },
        getNotificationClass: function () {
          return "notifications" + (this.resize ? " large" : "");
        },
      },
      methods: {
        resizeClick: function () {
          this.resize = !this.resize;
        },
      },
    };
  },
  function (t, e, n) {
    t.exports = n(118);
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      return t && t.__esModule ? t : { default: t };
    }
    var i = n(43),
      s = o(i),
      a = n(119),
      r = o(a),
      c = n(7),
      l = "subtle_user",
      u = void 0;
    localStorage && localStorage[l]
      ? (u = localStorage[l])
      : ((u = (0, c.generateId)()), localStorage.setItem(l, u));
    var d = {
      event: function (t, e, n, o) {
        if (t && e) {
          var i =
            "v=1&tid=UA-111434172-1&cid=" +
            u +
            "&aip=1\n        &t=event&ec=" +
            t +
            "&ea=" +
            e +
            "&sr=" +
            window.screen.width +
            "x" +
            window.screen.height +
            "&dl=" +
            window.location.href;
          n && (i += "&el=" + n), o && (i += "&ev=" + o), this.send(i);
        }
      },
      page: function (t) {
        var e =
          "v=1&tid=UA-111434172-1&cid=" +
          u +
          "&aip=1\n        &t=pageview&dp=" +
          t +
          "&sr=" +
          window.screen.width +
          "x" +
          window.screen.height;
        this.send(e);
      },
      send: function (t) {
        var e = new XMLHttpRequest();
        e.open("GET", "https://www.google-analytics.com/collect?" + t),
          e.send();
      },
    };
    (s.default.prototype.$ga = s.default.$ga = d),
      new s.default({
        el: "#app",
        render: function (t) {
          return t(r.default);
        },
      });
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = n(44),
      i = n.n(o);
    for (var s in o)
      "default" !== s &&
        (function (t) {
          n.d(e, t, function () {
            return o[t];
          });
        })(s);
    var a = n(335),
      r = n(1),
      c = Object(r.a)(i.a, a.a, a.b, !1, null, null, null);
    e.default = c.exports;
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      n(121);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(46),
      s = n.n(i);
    for (var a in i)
      "default" !== a &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(a);
    var r = n(134),
      c = n(1),
      l = o,
      u = Object(c.a)(s.a, r.a, r.b, !1, l, null, null);
    e.default = u.exports;
  },
  function (t, e, n) {
    var o = n(122);
    "string" == typeof o && (o = [[t.i, o, ""]]),
      o.locals && (t.exports = o.locals);
    var i = n(3).default;
    i("8166141c", o, !0, {});
  },
  function (t, e, n) {
    (e = t.exports = n(2)(!1)),
      e.push([
        t.i,
        '.arrow-up{transform:rotate(180deg)}#clock:hover .arrow-up{opacity:1;animation:fade_in .3s;left:calc(50% - 11.5px)}#g-cal{position:absolute;right:0;width:22vw;min-width:300px;margin-bottom:1rem;max-height:40vh;bottom:100%}#g-cal:before{top:99%;right:2rem;border:.7rem solid transparent;border-bottom-color:#fff;content:" ";height:0;width:0;position:absolute;pointer-events:none;transform:rotate(180deg)}',
        "",
      ]);
  },
  function (t, e, n) {
    "use strict";
    function o(t, e) {
      for (var n = [], o = {}, i = 0; i < e.length; i++) {
        var s = e[i],
          a = s[0],
          r = s[1],
          c = s[2],
          l = s[3],
          u = { id: t + ":" + i, css: r, media: c, sourceMap: l };
        o[a] ? o[a].parts.push(u) : n.push((o[a] = { id: a, parts: [u] }));
      }
      return n;
    }
    e.a = o;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = n(47),
      i = n.n(o);
    for (var s in o)
      "default" !== s &&
        (function (t) {
          n.d(e, t, function () {
            return o[t];
          });
        })(s);
    var a = n(125),
      r = n(1),
      c = Object(r.a)(i.a, a.a, a.b, !1, null, null, null);
    e.default = c.exports;
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "flex flex-center" },
          [
            n("transition", [
              t.settings.showDay
                ? n(
                    "div",
                    { staticClass: "date flex flex-flow-column mr-10" },
                    [
                      n("span", { staticClass: "semi-bold" }, [
                        t._v(t._s(t.day)),
                      ]),
                      t._v(" "),
                      n("span", { staticClass: "semi-bold" }, [
                        t._v(t._s(t.date) + " " + t._s(t.month)),
                      ]),
                    ]
                  )
                : t._e(),
            ]),
            t._v(" "),
            n("div", { staticClass: "time" }, [
              t._v(t._s(t.hrs) + ":" + t._s(t.min)),
            ]),
          ],
          1
        );
      },
      i = [];
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      n(127);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(48),
      s = n.n(i);
    for (var a in i)
      "default" !== a &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(a);
    var r = n(133),
      c = n(1),
      l = o,
      u = Object(c.a)(s.a, r.a, r.b, !1, l, null, null);
    e.default = u.exports;
  },
  function (t, e, n) {
    var o = n(128);
    "string" == typeof o && (o = [[t.i, o, ""]]),
      o.locals && (t.exports = o.locals);
    var i = n(3).default;
    i("6c6e9504", o, !0, {});
  },
  function (t, e, n) {
    (e = t.exports = n(2)(!1)),
      e.push([
        t.i,
        "#next-arrow,#prev-arrow{fill:#333;stroke:#333;width:10px;height:10px;position:absolute}#next-arrow{left:6px}#prev-arrow{left:4px;transform:rotate(180deg)}.date-change-icon{border-radius:50%;width:20px;height:20px;transition:background .3s ease-in;background:#eee}.date-change-icon:hover{background:#e3e3e3}.calendar-events{overflow-y:auto;transition:max-height .2s ease-out}.current-event{border-left:5px solid var(--blue);background-color:var(--blueBg)}.calendar-event{padding-left:20px;padding-right:20px;transition:background-color .3s ease}.calendar-event:hover{background-color:hsla(0,0%,80%,.5)}.calendar-event:not(:last-of-type){border-bottom:1px solid hsla(0,0%,80%,.5)}#g-integrate{height:20rem;max-height:40vh}#g-cal-error{background:#d63333}.re-integrate-btn{border:none;line-height:1.5rem;height:1.5rem}#g-cal-events{overflow-y:auto}.event-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.meet button{height:1.75rem!important;padding:0 10px!important;border-radius:4px}",
        "",
      ]);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = function (t) {
        return (parseInt(t, 10) >= 10 ? "" : "0") + t;
      },
      i = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      s = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
    (e.getTime = function (t, e) {
      var n = new Date(t),
        i = n.getHours(),
        s = void 0;
      return (
        e &&
          ((s = i >= 12 ? "PM" : "AM"),
          (i = 0 !== i && 12 !== i ? i % 12 : 12)),
        { hrs: i, min: o(n.getMinutes()), unit: s }
      );
    }),
      (e.getDate = function (t) {
        var e = t ? new Date(t) : new Date();
        return {
          day: s[e.getDay()],
          date: e.getDate(),
          month: i[e.getMonth()],
          iso: e.toISOString(),
        };
      }),
      (e.convertISOToTime = function (t) {
        var e = t && -1 !== t ? new Date(t) : new Date();
        return 3600 * e.getHours() + 60 * e.getMinutes() + e.getSeconds();
      }),
      (e.getISOToDate = function (t) {
        return (t && -1 !== t ? new Date(t) : new Date())
          .toISOString()
          .split("T")[0];
      });
  },
  function (t, e, n) {
    var o = n(131);
    "string" == typeof o && (o = [[t.i, o, ""]]),
      o.locals && (t.exports = o.locals);
    var i = n(3).default;
    i("0f35f0a1", o, !0, {});
  },
  function (t, e, n) {
    (e = t.exports = n(2)(!1)),
      e.push([
        t.i,
        ".btn[data-v-d8d1f16a]{padding:0 10px;color:#fff;margin-left:.3rem}.small[data-v-d8d1f16a]{height:20px;line-height:20px;padding:0 5px;font-size:.9rem}.medium[data-v-d8d1f16a]{padding:5px 10px;line-height:20px;height:29px}.basic[data-v-d8d1f16a]{background:none;color:#666;border:none;box-shadow:none}.primary[data-v-d8d1f16a]{background-color:rgba(33,150,243,.21);color:#2196f3}.primary.blue[data-v-d8d1f16a]{background-color:var(--blue);color:#fff}.primary.green[data-v-d8d1f16a]{background-color:var(--green);color:#fff}.secondary.blue[data-v-d8d1f16a]{color:var(--blue)}.secondary.green[data-v-d8d1f16a]{color:var(--secondaryText);background-color:#fff}.green[data-v-d8d1f16a]{background-color:#7ab800;color:#fff}.save[data-v-d8d1f16a]{background-color:#2196f3;color:#fff}",
        "",
      ]);
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement;
        return (t._self._c || e)(
          "button",
          {
            staticClass: "btn semi-bold basic",
            class: t.computedClass,
            attrs: { title: t.title, disabled: t.isDisabled },
            on: {
              click: function (e) {
                return e.stopPropagation(), t.clicked(e);
              },
            },
          },
          [t._v("\n    " + t._s(t.text) + "\n")]
        );
      },
      i = [];
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", [
          n(
            "div",
            { staticClass: "widget relative pb-5" },
            [
              t.auth
                ? [
                    n(
                      "header",
                      {
                        staticClass: "flex widget-header flex-center relative",
                      },
                      [
                        n("h4", { staticClass: "widget-heading mar-0" }, [
                          t._v("Google Calendar (G)"),
                        ]),
                        t._v(" "),
                        n("div", { staticClass: "button-section flex" }, [
                          n(
                            "div",
                            {
                              staticClass: "tooltip tooltip-left",
                              attrs: {
                                rel: t.settings.isPinned
                                  ? "Stay Closed"
                                  : "Stay Open",
                              },
                            },
                            [
                              n(
                                "svg",
                                {
                                  staticClass: "pointer",
                                  attrs: {
                                    viewBox: "0 0 19 19",
                                    width: "1.2em",
                                    height: "1.2em",
                                  },
                                  on: {
                                    click: function (e) {
                                      return (
                                        e.stopPropagation(), t.togglePin(e)
                                      );
                                    },
                                  },
                                },
                                [
                                  n(
                                    "g",
                                    {
                                      attrs: {
                                        transform:
                                          "translate(1.000000, 0.000000)",
                                        stroke: "#7d7d7d",
                                        "fill-rule": "nonzero",
                                        "stroke-width": "1",
                                        fill: "none",
                                      },
                                    },
                                    [
                                      n("transition", [
                                        t.settings.isPinned
                                          ? n("rect", {
                                              attrs: {
                                                "stroke-opacity": "0.801007699",
                                                "stroke-linecap": "round",
                                                transform:
                                                  "translate(10.960155, 10.960155) rotate(45.000000) translate(-10.960155, -10.960155)",
                                                x: "-3",
                                                y: "9.96015511",
                                                width: "23",
                                                height: "1",
                                                rx: "1",
                                                fill: "#7d7d7d",
                                              },
                                            })
                                          : t._e(),
                                      ]),
                                      t._v(" "),
                                      n("path", {
                                        attrs: {
                                          d: "M7.00281655,13.1229233 L5.02119635,14.6064885 C2.80029168,16.6351126 1.71102055,17.5657233 1.3663145,17.6821377 C0.717957794,17.9011014 0.313245364,17.422429 0.463782908,16.7897514 L0.554073071,16.6003974 L4.87282785,10.9929336 L1.94236285,8.0624593 C1.80229043,7.92389304 1.69177273,7.7573543 1.61501465,7.57223164 C1.46332845,7.2057818 1.46332845,6.7922182 1.61568559,6.42415545 C1.76866074,6.05821492 2.05960746,5.76687235 2.42515545,5.61468559 C2.60729352,5.53854591 2.80269457,5.5 3,5.5 C5.09770613,5.5 6.54093376,5.16919277 7.9623932,4.4677864 C9.04738884,3.92528859 9.87551287,2.99917711 10.6230457,1.44324406 C10.6996323,1.24318117 10.8110815,1.06381172 10.9632597,0.911642801 C11.5519462,0.328947954 12.4998328,0.33172768 13.0834588,0.918354316 L13.0835662,0.918462371 L17.0786457,4.93654123 C17.6652723,5.52016722 17.668052,6.46805376 17.0852572,7.0568413 C16.9348715,7.20868708 16.755096,7.32085792 16.5919941,7.38093962 C14.9978136,8.14453096 14.0717905,8.97257596 13.5301435,10.0577468 C12.8318981,11.453145 12.5,12.8996296 12.5,15 C12.5,15.1964255 12.4603765,15.3933891 12.3855335,15.570902 C12.2343297,15.9391806 11.9424432,16.2302739 11.5748445,16.3833144 C11.3916194,16.4599085 11.1961257,16.5 11,16.5 C10.8038743,16.5 10.6083806,16.4599085 10.4264925,16.3838711 C10.2399036,16.3065049 10.0731494,16.1962259 9.93844661,16.0585534 L7.00281655,13.1229233 Z",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]),
                      ]
                    ),
                    t._v(" "),
                    t.integrate.errorTitle.length
                      ? [
                          n(
                            "section",
                            {
                              staticClass:
                                "semi-bold flex flex-center flex-justify-space-between ph-20 pv-5",
                              attrs: { id: "g-cal-error" },
                            },
                            [
                              n(
                                "span",
                                { staticClass: "white-text semi-bold" },
                                [t._v(t._s(t.integrate.errorTitle))]
                              ),
                              t._v(" "),
                              t.integrate.reIntegration
                                ? n(
                                    "button",
                                    {
                                      staticClass:
                                        "re-integrate-btn btn-no-border btn btn-flat bg-white font-xsmall ph-10 flex flex-center",
                                    },
                                    [
                                      n(
                                        "svg",
                                        {
                                          staticClass: "mr-5",
                                          staticStyle: {
                                            "enable-background":
                                              "new 0 0 489.935 489.935",
                                          },
                                          attrs: {
                                            viewBox: "0 0 489.935 489.935",
                                            height: "1em",
                                            width: "1em",
                                          },
                                        },
                                        [
                                          n("g", [
                                            n("path", {
                                              attrs: {
                                                d: "M278.235,33.267c-116.7,0-211.6,95-211.6,211.7v0.7l-41.9-63.1c-4.1-6.2-12.5-7.9-18.7-3.8c-6.2,4.1-7.9,12.5-3.8,18.7\n                      l60.8,91.5c2.2,3.3,5.7,5.4,9.6,5.9c0.6,0.1,1.1,0.1,1.7,0.1c3.3,0,6.5-1.2,9-3.5l84.5-76.1c5.5-5,6-13.5,1-19.1\n                      c-5-5.5-13.5-6-19.1-1l-56.1,50.7v-1c0-101.9,82.8-184.7,184.6-184.7s184.7,82.8,184.7,184.7s-82.8,184.7-184.6,184.7\n                      c-49.3,0-95.7-19.2-130.5-54.1c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1c40,40,93.1,62,149.6,62\n                      c116.6,0,211.6-94.9,211.6-211.7S394.935,33.267,278.235,33.267z",
                                              },
                                            }),
                                          ]),
                                        ]
                                      ),
                                      t._v(
                                        "\n            Integrate\n          "
                                      ),
                                    ]
                                  )
                                : t._e(),
                            ]
                          ),
                          t._v(" "),
                          n(
                            "section",
                            { staticClass: "flex flex-center ph-20 pv-5" },
                            [
                              n("img", {
                                attrs: {
                                  src: "/images/error_integration.png",
                                  alt: "error in integration",
                                  width: "45px",
                                  height: "45px",
                                },
                              }),
                              t._v(" "),
                              n("div", {
                                staticClass:
                                  "ml-20 error semi-bold font-xsmall",
                                domProps: {
                                  innerHTML: t._s(t.integrate.errorDesc),
                                },
                              }),
                            ]
                          ),
                        ]
                      : [
                          n(
                            "section",
                            {
                              staticClass:
                                "semi-bold flex flex-justify-space-between ph-20 pv-10",
                              attrs: { id: "g-cal-date-selection" },
                            },
                            [
                              n(
                                "div",
                                {
                                  staticClass:
                                    "flex flex-center flex-justify-center date-change-icon mr-10 pointer relative",
                                  on: {
                                    click: function (e) {
                                      t.prevDate();
                                    },
                                  },
                                },
                                [
                                  n(
                                    "svg",
                                    {
                                      attrs: {
                                        width: "5",
                                        height: "11",
                                        viewBox: "0 0 11 20",
                                        id: "prev-arrow",
                                      },
                                    },
                                    [
                                      n("use", {
                                        attrs: {
                                          "xlink:href": "#icon-next-arrow",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              ),
                              t._v(" "),
                              n("span", [
                                t._v(
                                  "\n                  " +
                                    t._s(t.displayDate) +
                                    "\n              "
                                ),
                              ]),
                              t._v(" "),
                              n(
                                "div",
                                {
                                  staticClass:
                                    "flex flex-center flex-justify-center date-change-icon pointer relative",
                                  on: {
                                    click: function (e) {
                                      t.nextDate();
                                    },
                                  },
                                },
                                [
                                  n(
                                    "svg",
                                    {
                                      attrs: {
                                        width: "5",
                                        height: "11",
                                        viewBox: "0 0 11 20",
                                        id: "next-arrow",
                                      },
                                    },
                                    [
                                      n("use", {
                                        attrs: {
                                          "xlink:href": "#icon-next-arrow",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                          t._v(" "),
                          n(
                            "section",
                            {
                              staticClass: "font-small",
                              style: { "max-height": t.maxHeightValue },
                              attrs: { id: "g-cal-events" },
                            },
                            [
                              n("transition", { attrs: { mode: "out-in" } }, [
                                t.isLoading
                                  ? n(
                                      "div",
                                      {
                                        staticClass: "font-center",
                                        staticStyle: { height: "3.6rem" },
                                      },
                                      [
                                        n("img", {
                                          attrs: {
                                            src: "/images/loading.svg",
                                            alt: "loading",
                                            width: "25px",
                                          },
                                        }),
                                        t._v(" "),
                                        n(
                                          "p",
                                          { staticClass: "mar-0 font-xsmall" },
                                          [t._v("Loading...")]
                                        ),
                                      ]
                                    )
                                  : t.events && t.events.length > 0
                                  ? n(
                                      "ul",
                                      { staticClass: "calendar-events mar-0" },
                                      t._l(t.events, function (e) {
                                        return n(
                                          "li",
                                          {
                                            staticClass: "calendar-event pv-5",
                                            class: {
                                              pointer: e.link,
                                              "current-event": e.isCurrentEvent,
                                            },
                                            attrs: { link: e.link },
                                            on: {
                                              click: function (e) {
                                                return (
                                                  e.stopPropagation(),
                                                  t.openEvent(e)
                                                );
                                              },
                                            },
                                          },
                                          [
                                            n(
                                              "div",
                                              {
                                                staticClass:
                                                  "flex flex-justify-space-between flex-center",
                                              },
                                              [
                                                n(
                                                  "div",
                                                  {
                                                    style: {
                                                      "max-width":
                                                        e.isCurrentEvent &&
                                                        e.hangoutLink
                                                          ? "70%"
                                                          : "100%",
                                                    },
                                                  },
                                                  [
                                                    [
                                                      e.from && -1 !== e.from
                                                        ? n(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "event-duration font-xsmall semi-bold",
                                                            },
                                                            [
                                                              t._v(
                                                                "\n                                  " +
                                                                  t._s(
                                                                    t.formatTime(
                                                                      e.from
                                                                    )
                                                                  ) +
                                                                  " - " +
                                                                  t._s(
                                                                    t.formatTime(
                                                                      e.to
                                                                    )
                                                                  ) +
                                                                  "\n                              "
                                                              ),
                                                            ]
                                                          )
                                                        : n(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "event-duration font-xsmall semi-bold",
                                                            },
                                                            [
                                                              t._v(
                                                                "\n                                  Full Day\n                              "
                                                              ),
                                                            ]
                                                          ),
                                                    ],
                                                    t._v(" "),
                                                    n(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "event-title",
                                                        attrs: {
                                                          title: e.summary,
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          "\n                              " +
                                                            t._s(
                                                              e.summary ||
                                                                "Busy"
                                                            ) +
                                                            "\n                          "
                                                        ),
                                                      ]
                                                    ),
                                                  ],
                                                  2
                                                ),
                                                t._v(" "),
                                                e.isCurrentEvent &&
                                                e.hangoutLink
                                                  ? n(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "meet flex-no-shrink",
                                                      },
                                                      [
                                                        n("Button", {
                                                          attrs: {
                                                            text: "Join Meet",
                                                            type: "primary",
                                                            theme: "blue",
                                                            size: "small",
                                                          },
                                                          on: {
                                                            clicked: function (
                                                              n
                                                            ) {
                                                              t.openHangout(
                                                                e.hangoutLink
                                                              );
                                                            },
                                                          },
                                                        }),
                                                      ],
                                                      1
                                                    )
                                                  : t._e(),
                                              ]
                                            ),
                                          ]
                                        );
                                      })
                                    )
                                  : n(
                                      "div",
                                      {
                                        staticClass: "flex flex-center ph-20",
                                        staticStyle: { height: "3.6rem" },
                                      },
                                      [
                                        n("img", {
                                          attrs: {
                                            src: "/images/no_calendar_events.jpg",
                                            alt: "no events",
                                            width: "45px",
                                            height: "45px",
                                          },
                                        }),
                                        t._v(" "),
                                        n(
                                          "p",
                                          {
                                            staticClass:
                                              "ml-20 font-xsmall mar-0",
                                          },
                                          [
                                            n("strong", [
                                              t._v("All Caught Up!"),
                                            ]),
                                            n("br"),
                                            t._v(
                                              "\n                No events scheduled for today.\n              "
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                              ]),
                            ],
                            1
                          ),
                        ],
                  ]
                : n("section", { attrs: { id: "g-integrate" } }, [
                    n(
                      "div",
                      {
                        staticClass:
                          "full-height flex flex-justify-center flex-flow-column flex-center ph-10",
                      },
                      [
                        n("img", {
                          attrs: {
                            src: "images/integrate_google_calendar.png",
                            width: "200px",
                            alt: "integrate google calendar",
                          },
                        }),
                        t._v(" "),
                        n(
                          "p",
                          {
                            staticClass:
                              "font-medium semi-bold font-light-black",
                          },
                          [t._v("Integrate with\n          Google Calendar")]
                        ),
                        t._v(" "),
                        n(
                          "h5",
                          {
                            staticClass: "btn btn-flat",
                            on: { click: t.integration },
                          },
                          [t._v("Integrate")]
                        ),
                        t._v(" "),
                        t.integrate.error
                          ? n("small", { staticClass: "error center" }, [
                              t._v(t._s(t.integrate.error)),
                            ])
                          : t._e(),
                        t._v(" "),
                        t.integrate.error
                          ? t._e()
                          : n(
                              "a",
                              {
                                staticClass: "font-xsmall mar-0 pointer",
                                on: { click: t.skip },
                              },
                              [t._v(" Skip for\n          now ")]
                            ),
                      ]
                    ),
                  ]),
            ],
            2
          ),
        ]);
      },
      i = [];
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass: "relative",
            on: {
              mousedown: function (t) {
                t.stopPropagation();
              },
            },
          },
          [
            n(
              "transition",
              [
                t.showCalendar
                  ? n("Calendar", {
                      attrs: { id: "g-cal", settings: t.settings.calendar },
                    })
                  : t._e(),
              ],
              1
            ),
            t._v(" "),
            n(
              "div",
              {
                staticClass: "flex flex-center pointer",
                on: { click: t.toggleCalendar },
              },
              [
                n(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !t.showCalendar,
                        expression: "!showCalendar",
                      },
                    ],
                    staticClass: "arrow-up font-center opacity-0 mr-10",
                  },
                  [
                    n(
                      "svg",
                      {
                        attrs: {
                          width: "23px",
                          height: "8px",
                          viewBox: "0 0 23 8",
                        },
                      },
                      [
                        n("use", {
                          attrs: { "xlink:href": "#icon-widget-arrow" },
                        }),
                      ]
                    ),
                  ]
                ),
                t._v(" "),
                n("Clock", { attrs: { settings: t.settings } }),
              ],
              1
            ),
          ],
          1
        );
      },
      i = [];
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      n(136);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(50),
      s = n.n(i);
    for (var a in i)
      "default" !== a &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(a);
    var r = n(138),
      c = n(1),
      l = o,
      u = Object(c.a)(s.a, r.a, r.b, !1, l, "data-v-315ea809", null);
    e.default = u.exports;
  },
  function (t, e, n) {
    var o = n(137);
    "string" == typeof o && (o = [[t.i, o, ""]]),
      o.locals && (t.exports = o.locals);
    var i = n(3).default;
    i("f1a3e342", o, !0, {});
  },
  function (t, e, n) {
    (e = t.exports = n(2)(!1)),
      e.push([
        t.i,
        "@keyframes fade-data-v-315ea809{0%{opacity:0}to{opacity:1}}.fade[data-v-315ea809]{animation:fade-data-v-315ea809 .6s ease-in-out}@keyframes unlock-circle-data-v-315ea809{0%{bottom:200px}25%{bottom:200px}50%{bottom:150px}to{bottom:150px}}.lock-wrapper[data-v-315ea809]{height:300px;width:300px;position:absolute;z-index:3;left:calc(50% - 150px);top:calc(50% - 150px);opacity:.7}.lock-base[data-v-315ea809]{background-color:#ecf0f1;width:200px;height:170px;border-radius:30px;margin:0 auto;position:relative;top:100px;z-index:100}.base-bottom[data-v-315ea809]{border:10px solid #ecf0f1;width:200px;height:85px;border-radius:0 0 30px 30px;top:85px;position:relative;opacity:.4}.lock-upper[data-v-315ea809]{position:relative;bottom:200px}.lock-upper-lock[data-v-315ea809]{animation:unlock-circle-data-v-315ea809 2s;bottom:150px}.lock-upper-unlock[data-v-315ea809]{animation:unlock-circle-data-v-315ea809 2s;animation-direction:reverse}.lock-upper-round[data-v-315ea809]{height:100px;border-radius:45px 45px 0 0;border-top:20px solid #ecf0f1;border-right:20px solid #ecf0f1}.lock-upper-left[data-v-315ea809],.lock-upper-round[data-v-315ea809]{width:110px;z-index:10;position:relative;margin:0 auto;border-left:20px solid #ecf0f1}.lock-upper-left[data-v-315ea809]{height:50px}.lock-inside-top[data-v-315ea809]{width:50px;height:50px;border-radius:50px;background-color:#bdc3c7;z-index:300;position:relative;bottom:45px;left:75px}.lock-inside-bottom[data-v-315ea809]{width:30px;height:80px;background-color:#bdc3c7;z-index:300;position:relative;bottom:85px;left:85px}.lock-status[data-v-315ea809]{position:relative;bottom:41px;color:#fff;text-align:center}",
        "",
      ]);
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "fade" },
          [
            n("transition", { attrs: { name: "fade-in-slow" } }, [
              t.showLock
                ? n("div", { staticClass: "lock-wrapper" }, [
                    n("div", { staticClass: "lock-base" }, [
                      n("div", { staticClass: "base-bottom" }),
                      t._v(" "),
                      n("div", { staticClass: "lock-inside-top" }),
                      t._v(" "),
                      n("div", { staticClass: "lock-inside-bottom" }),
                    ]),
                    t._v(" "),
                    n(
                      "div",
                      {
                        staticClass: "lock-upper",
                        class: {
                          "lock-upper-unlock": !t.lockStatus,
                          "lock-upper-lock": t.lockStatus,
                        },
                      },
                      [
                        n("div", { staticClass: "lock-upper-round" }),
                        t._v(" "),
                        n("div", { staticClass: "lock-upper-left" }),
                      ]
                    ),
                    t._v(" "),
                    n("div", { staticClass: "lock-status" }, [
                      t._v(
                        "\n                Wallpaper widget is " +
                          t._s(t.lockStatus ? "locked" : "unlocked") +
                          "\n            "
                      ),
                    ]),
                  ])
                : t._e(),
            ]),
            t._v(" "),
            n("div", { staticClass: "util-overlay" }),
            t._v(" "),
            n("div", { attrs: { id: "background-hover" } }),
            t._v(" "),
            n("div", { attrs: { id: "background" } }),
          ],
          1
        );
      },
      i = [];
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      n(140);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(52),
      s = n.n(i);
    for (var a in i)
      "default" !== a &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(a);
    var r = n(147),
      c = n(1),
      l = o,
      u = Object(c.a)(s.a, r.a, r.b, !1, l, "data-v-dd27159c", null);
    e.default = u.exports;
  },
  function (t, e, n) {
    var o = n(141);
    "string" == typeof o && (o = [[t.i, o, ""]]),
      o.locals && (t.exports = o.locals);
    var i = n(3).default;
    i("71513920", o, !0, {});
  },
  function (t, e, n) {
    (e = t.exports = n(2)(!1)),
      e.push([
        t.i,
        ".cmain[data-v-dd27159c]{position:relative;width:80%;overflow:hidden;height:inherit}.cmain-disabled[data-v-dd27159c]{position:absolute;left:0;right:0;top:0;bottom:0;background:hsla(0,0%,94%,.85);z-index:100000;text-align:center}.container[data-v-dd27159c]{padding:0 1rem;overflow:auto;width:100%;height:inherit}input.pad-0[data-v-dd27159c]{padding:0!important}",
        "",
      ]);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = n(53),
      i = n.n(o);
    for (var s in o)
      "default" !== s &&
        (function (t) {
          n.d(e, t, function () {
            return o[t];
          });
        })(s);
    var a = n(143),
      r = n(1),
      c = Object(r.a)(i.a, a.a, a.b, !1, null, null, null);
    e.default = c.exports;
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", [
          t.isLoading
            ? t._e()
            : n(
                "div",
                { staticClass: "fade_in" },
                [
                  n("small", { staticClass: "semi-bold" }, [
                    t._v(
                      "*Versions not shown are minor fixes and improvements"
                    ),
                  ]),
                  t._v(" "),
                  t._l(t.updates, function (e) {
                    return n("div", { key: e.version }, [
                      n(
                        "div",
                        {
                          staticClass: "flex flex-justify-space-between mb-10",
                        },
                        [
                          n(
                            "h4",
                            { staticClass: "font-medium bold text-green" },
                            [t._v("v" + t._s(e.version))]
                          ),
                          t._v(" "),
                          n("h4", { staticClass: "font-small " }, [
                            t._v(t._s(t._f("date")(e.time))),
                          ]),
                        ]
                      ),
                      t._v(" "),
                      n(
                        "ul",
                        {
                          staticClass: "pl-10 update-list",
                          staticStyle: { "list-style": "disc" },
                        },
                        t._l(e.updates, function (e) {
                          return n(
                            "li",
                            { staticClass: "font-small pl-10 mb-10" },
                            [
                              n(
                                "p",
                                { staticClass: "semi-bold mar-0 font-medium" },
                                [t._v(t._s(e.title))]
                              ),
                              t._v(" "),
                              n("p", { staticClass: "mar-0" }, [
                                t._v(
                                  "\n                        " +
                                    t._s(e.desc) +
                                    "\n                    "
                                ),
                              ]),
                            ]
                          );
                        })
                      ),
                    ]);
                  }),
                ],
                2
              ),
          t._v(" "),
          t.isLoading
            ? n(
                "div",
                {
                  staticClass:
                    "flex flex-flow-column full-height flex-center flex-justify-center",
                },
                [
                  n("img", {
                    attrs: {
                      src: "/images/loading.svg",
                      alt: "loading",
                      width: "100px",
                    },
                  }),
                  t._v(" "),
                  n("p", { staticClass: "bold font-medium" }, [
                    t._v("Loading..."),
                  ]),
                ]
              )
            : t._e(),
        ]);
      },
      i = [];
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.getPermission =
        e.removeOriginPermission =
        e.getOriginPermission =
          void 0);
    var o = n(9),
      i = n(4),
      s = (e.getOriginPermission = function (t) {
        return new Promise(function (e, n) {
          chrome.permissions.contains({ origins: [t] }, function (n) {
            if (n) return void e(!0);
            chrome.permissions.request({ origins: [t] }, function (t) {
              return e(t ? !0 : !1);
            });
          });
        });
      });
    (e.removeOriginPermission = function (t) {
      return new Promise(function (e, n) {
        chrome.permissions.remove({ origins: [t] }, function (t) {
          return e(t ? !0 : !1);
        });
      });
    }),
      (e.getPermission = function (t) {
        return new Promise(function (e, n) {
          var a = void 0;
          switch (t) {
            case o.TodosType.WUNDERLIST:
              a = i.WUNDERLIST.URL.ORIGIN;
              break;
            case o.TodosType.TODOIST:
              a = i.TODOIST.URL.ORIGIN;
              break;
            case o.TodosType.DEFAULT:
              return void n(!1);
            case "calendar":
              a = i.G_CAL.URL.ORIGIN;
              break;
            default:
              return void n(!1);
          }
          s(a).then(function (o) {
            o
              ? e(t)
              : (console.log("not-granted " + chrome.runtime.lastError.message),
                n(!1));
          });
        });
      });
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.validateAuthCode = void 0);
    var o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            },
      i = n(7),
      s = n(9);
    e.validateAuthCode = function (t, e) {
      var n = (0, i.DecryptAuth)(e);
      if (n && (void 0 === n ? "undefined" : o(n)) === o({}))
        switch (t) {
          case s.TodosType.TODOIST:
            return !(!n.access_token || !n.token_type);
          case s.TodosType.WUNDERLIST:
            return !!n.access_token;
        }
      return !1;
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = n(9),
      i = n(5),
      s = n(4);
    e.default = {
      getAuthCode: function (t) {
        return t === o.TodosType.WUNDERLIST
          ? (0, i.Get)(s.STORAGE.W_AUTH)
          : t === o.TodosType.TODOIST
          ? (0, i.Get)(s.STORAGE.T_AUTH)
          : "";
      },
      storeAuthCode: function (t, e) {
        if (e)
          switch (t) {
            case o.TodosType.TODOIST:
              (0, i.Set)(s.STORAGE.T_AUTH, e);
              break;
            case o.TodosType.WUNDERLIST:
              (0, i.Set)(s.STORAGE.W_AUTH, e);
          }
      },
    };
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass: "flex flex-flow-column",
            on: {
              click: function (t) {
                t.stopPropagation();
              },
              mousedown: function (t) {
                t.stopPropagation();
              },
            },
          },
          [
            n("header", [
              n("div", { staticClass: "flex flex-center right" }, [
                n(
                  "div",
                  {
                    staticClass: "close-btn",
                    on: { click: t.closeCustomizeMenu },
                  },
                  [
                    n(
                      "svg",
                      {
                        attrs: {
                          width: "1.5em",
                          height: "1.5em",
                          viewBox: "0 0 12 12",
                        },
                      },
                      [
                        n(
                          "g",
                          {
                            attrs: {
                              stroke: "none",
                              "stroke-width": "1",
                              fill: "none",
                              "fill-rule": "evenodd",
                            },
                          },
                          [
                            n(
                              "g",
                              {
                                attrs: {
                                  id: "close_btn",
                                  "fill-rule": "nonzero",
                                  fill: "#5C5C5C",
                                },
                              },
                              [
                                n("path", {
                                  attrs: {
                                    d: "M6,0 C2.69169231,0 0,2.69146154 0,6 C0,9.30853846 2.69169231,12 6,12 C9.30830769,12 12,9.30853846 12,6 C12,2.69146154 9.30830769,0 6,0 Z M6,11.5384615 C2.94623077,11.5384615 0.461538462,9.05376923 0.461538462,6 C0.461538462,2.94623077 2.94623077,0.461538462 6,0.461538462 C9.05376923,0.461538462 11.5384615,2.94623077 11.5384615,6 C11.5384615,9.05376923 9.05376923,11.5384615 6,11.5384615 Z",
                                  },
                                }),
                                t._v(" "),
                                n("path", {
                                  attrs: {
                                    d: "M8.24007692,3.75992308 C8.14984615,3.66969231 8.004,3.66969231 7.91376923,3.75992308 L6,5.67369231 L4.08623077,3.75992308 C3.996,3.66969231 3.85015385,3.66969231 3.75992308,3.75992308 C3.66969231,3.85015385 3.66969231,3.996 3.75992308,4.08623077 L5.67369231,6 L3.75992308,7.91376923 C3.66969231,8.004 3.66969231,8.14984615 3.75992308,8.24007692 C3.80492308,8.28507692 3.864,8.30769231 3.92307692,8.30769231 C3.98215385,8.30769231 4.04123077,8.28507692 4.08623077,8.24007692 L6,6.32630769 L7.91376923,8.24007692 C7.95876923,8.28507692 8.01784615,8.30769231 8.07692308,8.30769231 C8.136,8.30769231 8.19507692,8.28507692 8.24007692,8.24007692 C8.33030769,8.14984615 8.33030769,8.004 8.24007692,7.91376923 L6.32630769,6 L8.24007692,4.08623077 C8.33030769,3.996 8.33030769,3.85015385 8.24007692,3.75992308 Z",
                                  },
                                }),
                              ]
                            ),
                          ]
                        ),
                      ]
                    ),
                  ]
                ),
              ]),
              t._v(" "),
              n("span", [t._v("Customize (C)")]),
            ]),
            t._v(" "),
            n("div", { staticClass: "flex-grow-1 flex main-window" }, [
              n("aside", { staticClass: "csidebar" }, [
                n("ul", [
                  n("li", [
                    n("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.activeTab,
                          expression: "activeTab",
                        },
                      ],
                      attrs: { type: "radio", value: "general", id: "tab4" },
                      domProps: { checked: t._q(t.activeTab, "general") },
                      on: {
                        change: [
                          function (e) {
                            t.activeTab = "general";
                          },
                          function (e) {
                            t.onChange("changeTab");
                          },
                        ],
                      },
                    }),
                    t._v(" "),
                    n(
                      "label",
                      {
                        staticClass: "flex-center",
                        class: {
                          active: t.activeTab === t.tabTypeEnum.GENERAL,
                        },
                        attrs: { for: "tab4" },
                      },
                      [
                        n("svg", { attrs: { viewBox: "0 0 21 21" } }, [
                          n("use", {
                            attrs: { "xlink:href": "#icon-general" },
                          }),
                        ]),
                        t._v(" "),
                        n("span", [t._v("General")]),
                      ]
                    ),
                  ]),
                  t._v(" "),
                  n("li", [
                    n("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.activeTab,
                          expression: "activeTab",
                        },
                      ],
                      attrs: { type: "radio", id: "tab1" },
                      domProps: {
                        value: t.tabTypeEnum.BACKGROUND,
                        checked: t._q(t.activeTab, t.tabTypeEnum.BACKGROUND),
                      },
                      on: {
                        change: [
                          function (e) {
                            t.activeTab = t.tabTypeEnum.BACKGROUND;
                          },
                          function (e) {
                            t.onChange("changeTab");
                          },
                        ],
                      },
                    }),
                    t._v(" "),
                    n(
                      "label",
                      {
                        staticClass: "flex-center",
                        class: {
                          active: t.activeTab === t.tabTypeEnum.BACKGROUND,
                        },
                        attrs: { for: "tab1" },
                      },
                      [
                        n("svg", { attrs: { viewBox: "0 0 21 21" } }, [
                          n("use", {
                            attrs: { "xlink:href": "#icon-wallpaper" },
                          }),
                        ]),
                        t._v(" "),
                        n("span", [t._v("Wallpaper")]),
                      ]
                    ),
                  ]),
                  t._v(" "),
                  n("li", [
                    n("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.activeTab,
                          expression: "activeTab",
                        },
                      ],
                      attrs: { type: "radio", id: "tab2" },
                      domProps: {
                        value: t.tabTypeEnum.CLOCK,
                        checked: t._q(t.activeTab, t.tabTypeEnum.CLOCK),
                      },
                      on: {
                        change: [
                          function (e) {
                            t.activeTab = t.tabTypeEnum.CLOCK;
                          },
                          function (e) {
                            t.onChange("changeTab");
                          },
                        ],
                      },
                    }),
                    t._v(" "),
                    n(
                      "label",
                      {
                        staticClass: "flex-center",
                        class: { active: t.activeTab === t.tabTypeEnum.CLOCK },
                        attrs: { for: "tab2" },
                      },
                      [
                        n("svg", [
                          n("use", { attrs: { "xlink:href": "#icon-clock" } }),
                        ]),
                        t._v(" "),
                        n("span", [t._v("Time & Calendar")]),
                      ]
                    ),
                  ]),
                  t._v(" "),
                  n("li", [
                    n("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.activeTab,
                          expression: "activeTab",
                        },
                      ],
                      attrs: { type: "radio", id: "tab3" },
                      domProps: {
                        value: t.tabTypeEnum.WEATHER,
                        checked: t._q(t.activeTab, t.tabTypeEnum.WEATHER),
                      },
                      on: {
                        change: [
                          function (e) {
                            t.activeTab = t.tabTypeEnum.WEATHER;
                          },
                          function (e) {
                            t.onChange("changeTab");
                          },
                        ],
                      },
                    }),
                    t._v(" "),
                    n(
                      "label",
                      {
                        staticClass: "flex-center",
                        class: {
                          active: t.activeTab === t.tabTypeEnum.WEATHER,
                        },
                        attrs: { for: "tab3" },
                      },
                      [
                        n("svg", { attrs: { viewBox: "0 0 21 21" } }, [
                          n("use", {
                            attrs: { "xlink:href": "#icon-weather" },
                          }),
                        ]),
                        t._v(" "),
                        n("span", [t._v("Weather")]),
                      ]
                    ),
                  ]),
                  t._v(" "),
                  n("li", [
                    n("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.activeTab,
                          expression: "activeTab",
                        },
                      ],
                      attrs: { type: "radio", id: "tab5" },
                      domProps: {
                        value: t.tabTypeEnum.TODO,
                        checked: t._q(t.activeTab, t.tabTypeEnum.TODO),
                      },
                      on: {
                        change: function (e) {
                          t.activeTab = t.tabTypeEnum.TODO;
                        },
                      },
                    }),
                    t._v(" "),
                    n(
                      "label",
                      {
                        staticClass: "flex-center fill",
                        class: { active: t.activeTab === t.tabTypeEnum.TODO },
                        attrs: { for: "tab5" },
                      },
                      [
                        n(
                          "svg",
                          {
                            staticClass: "fill",
                            attrs: { viewBox: "0 0 512 512" },
                          },
                          [n("use", { attrs: { "xlink:href": "#icon-todo" } })]
                        ),
                        t._v(" "),
                        n("span", [t._v("Todos")]),
                      ]
                    ),
                  ]),
                  t._v(" "),
                  n("li", { staticClass: "separator" }, [
                    n("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.activeTab,
                          expression: "activeTab",
                        },
                      ],
                      attrs: { type: "radio", id: "tab6" },
                      domProps: {
                        value: t.tabTypeEnum.WHATS_NEW,
                        checked: t._q(t.activeTab, t.tabTypeEnum.WHATS_NEW),
                      },
                      on: {
                        change: [
                          function (e) {
                            t.activeTab = t.tabTypeEnum.WHATS_NEW;
                          },
                          function (e) {
                            t.onChange("changeTab");
                          },
                        ],
                      },
                    }),
                    t._v(" "),
                    n(
                      "label",
                      {
                        staticClass: "flex-center",
                        class: {
                          active: t.activeTab === t.tabTypeEnum.WHATS_NEW,
                        },
                        attrs: { for: "tab6" },
                      },
                      [
                        n("svg", { attrs: { viewBox: "0 0 21 21" } }, [
                          n("use", {
                            attrs: { "xlink:href": "#icon-whatsnew" },
                          }),
                        ]),
                        t._v(" "),
                        n("span", [t._v("What's new")]),
                      ]
                    ),
                  ]),
                ]),
              ]),
              t._v(" "),
              n(
                "div",
                { staticClass: "cmain" },
                [
                  n("transition", [
                    t.isBackgroundWidgetLocked
                      ? n("div", { staticClass: "cmain-disabled" }, [
                          n(
                            "div",
                            {
                              staticClass:
                                "flex flex-flow-column flex-justify-center flex-center full-height",
                            },
                            [
                              n(
                                "span",
                                {
                                  staticClass:
                                    "font-black semi-bold mb-5 font-large",
                                },
                                [t._v("Wallpaper customization is locked.")]
                              ),
                              t._v(" "),
                              n("small", { staticClass: "mb-10" }, [
                                t._v(
                                  "You can not customize a locked wallpaper."
                                ),
                              ]),
                              t._v(" "),
                              n(
                                "button",
                                {
                                  staticClass:
                                    "save-button font-xsmall btn semi-bold",
                                  on: {
                                    click: function (e) {
                                      t.unlockSettings(t.activeTab);
                                    },
                                  },
                                },
                                [t._v(" Unlock\n                        ")]
                              ),
                            ]
                          ),
                        ])
                      : t._e(),
                  ]),
                  t._v(" "),
                  n("div", { staticClass: "container" }, [
                    "general" === t.activeTab
                      ? n("section", [
                          n("div", [
                            n(
                              "h4",
                              {
                                staticClass: "font-medium text-black semi-bold",
                              },
                              [t._v("Show/hide Widgets")]
                            ),
                            t._v(" "),
                            n("ul", { staticClass: "ph-10" }, [
                              n("li", { staticClass: "inline-list-item" }, [
                                t._m(0),
                                t._v(" "),
                                n("div", { staticClass: "switch" }, [
                                  n("label", [
                                    n("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            t.settings.showUtilities
                                              .showWeather,
                                          expression:
                                            "settings.showUtilities.showWeather",
                                        },
                                      ],
                                      attrs: { type: "checkbox" },
                                      domProps: {
                                        checked: Array.isArray(
                                          t.settings.showUtilities.showWeather
                                        )
                                          ? t._i(
                                              t.settings.showUtilities
                                                .showWeather,
                                              null
                                            ) > -1
                                          : t.settings.showUtilities
                                              .showWeather,
                                      },
                                      on: {
                                        change: function (e) {
                                          var n =
                                              t.settings.showUtilities
                                                .showWeather,
                                            o = e.target,
                                            i = !!o.checked;
                                          if (Array.isArray(n)) {
                                            var s = t._i(n, null);
                                            o.checked
                                              ? s < 0 &&
                                                t.$set(
                                                  t.settings.showUtilities,
                                                  "showWeather",
                                                  n.concat([null])
                                                )
                                              : s > -1 &&
                                                t.$set(
                                                  t.settings.showUtilities,
                                                  "showWeather",
                                                  n
                                                    .slice(0, s)
                                                    .concat(n.slice(s + 1))
                                                );
                                          } else
                                            t.$set(
                                              t.settings.showUtilities,
                                              "showWeather",
                                              i
                                            );
                                        },
                                      },
                                    }),
                                    t._v(" "),
                                    n("span", { staticClass: "lever mar-0" }),
                                  ]),
                                ]),
                              ]),
                              t._v(" "),
                              n("li", { staticClass: "inline-list-item" }, [
                                t._m(1),
                                t._v(" "),
                                n("div", { staticClass: "switch" }, [
                                  n("label", [
                                    n("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            t.settings.showUtilities.showClock,
                                          expression:
                                            "settings.showUtilities.showClock",
                                        },
                                      ],
                                      attrs: { type: "checkbox" },
                                      domProps: {
                                        checked: Array.isArray(
                                          t.settings.showUtilities.showClock
                                        )
                                          ? t._i(
                                              t.settings.showUtilities
                                                .showClock,
                                              null
                                            ) > -1
                                          : t.settings.showUtilities.showClock,
                                      },
                                      on: {
                                        change: function (e) {
                                          var n =
                                              t.settings.showUtilities
                                                .showClock,
                                            o = e.target,
                                            i = !!o.checked;
                                          if (Array.isArray(n)) {
                                            var s = t._i(n, null);
                                            o.checked
                                              ? s < 0 &&
                                                t.$set(
                                                  t.settings.showUtilities,
                                                  "showClock",
                                                  n.concat([null])
                                                )
                                              : s > -1 &&
                                                t.$set(
                                                  t.settings.showUtilities,
                                                  "showClock",
                                                  n
                                                    .slice(0, s)
                                                    .concat(n.slice(s + 1))
                                                );
                                          } else
                                            t.$set(
                                              t.settings.showUtilities,
                                              "showClock",
                                              i
                                            );
                                        },
                                      },
                                    }),
                                    t._v(" "),
                                    n("span", { staticClass: "lever mar-0" }),
                                  ]),
                                ]),
                              ]),
                              t._v(" "),
                              n("li", { staticClass: "inline-list-item" }, [
                                t._m(2),
                                t._v(" "),
                                n("div", { staticClass: "switch" }, [
                                  n("label", [
                                    n("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            t.settings.showUtilities.showNotes,
                                          expression:
                                            "settings.showUtilities.showNotes",
                                        },
                                      ],
                                      attrs: { type: "checkbox" },
                                      domProps: {
                                        checked: Array.isArray(
                                          t.settings.showUtilities.showNotes
                                        )
                                          ? t._i(
                                              t.settings.showUtilities
                                                .showNotes,
                                              null
                                            ) > -1
                                          : t.settings.showUtilities.showNotes,
                                      },
                                      on: {
                                        change: function (e) {
                                          var n =
                                              t.settings.showUtilities
                                                .showNotes,
                                            o = e.target,
                                            i = !!o.checked;
                                          if (Array.isArray(n)) {
                                            var s = t._i(n, null);
                                            o.checked
                                              ? s < 0 &&
                                                t.$set(
                                                  t.settings.showUtilities,
                                                  "showNotes",
                                                  n.concat([null])
                                                )
                                              : s > -1 &&
                                                t.$set(
                                                  t.settings.showUtilities,
                                                  "showNotes",
                                                  n
                                                    .slice(0, s)
                                                    .concat(n.slice(s + 1))
                                                );
                                          } else
                                            t.$set(
                                              t.settings.showUtilities,
                                              "showNotes",
                                              i
                                            );
                                        },
                                      },
                                    }),
                                    t._v(" "),
                                    n("span", { staticClass: "lever mar-0" }),
                                  ]),
                                ]),
                              ]),
                              t._v(" "),
                              n("li", { staticClass: "inline-list-item" }, [
                                t._m(3),
                                t._v(" "),
                                n("div", { staticClass: "switch" }, [
                                  n("label", [
                                    n("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            t.settings.showUtilities.showTodos,
                                          expression:
                                            "settings.showUtilities.showTodos",
                                        },
                                      ],
                                      attrs: { type: "checkbox" },
                                      domProps: {
                                        checked: Array.isArray(
                                          t.settings.showUtilities.showTodos
                                        )
                                          ? t._i(
                                              t.settings.showUtilities
                                                .showTodos,
                                              null
                                            ) > -1
                                          : t.settings.showUtilities.showTodos,
                                      },
                                      on: {
                                        change: function (e) {
                                          var n =
                                              t.settings.showUtilities
                                                .showTodos,
                                            o = e.target,
                                            i = !!o.checked;
                                          if (Array.isArray(n)) {
                                            var s = t._i(n, null);
                                            o.checked
                                              ? s < 0 &&
                                                t.$set(
                                                  t.settings.showUtilities,
                                                  "showTodos",
                                                  n.concat([null])
                                                )
                                              : s > -1 &&
                                                t.$set(
                                                  t.settings.showUtilities,
                                                  "showTodos",
                                                  n
                                                    .slice(0, s)
                                                    .concat(n.slice(s + 1))
                                                );
                                          } else
                                            t.$set(
                                              t.settings.showUtilities,
                                              "showTodos",
                                              i
                                            );
                                        },
                                      },
                                    }),
                                    t._v(" "),
                                    n("span", { staticClass: "lever mar-0" }),
                                  ]),
                                ]),
                              ]),
                              t._v(" "),
                              n("li", { staticClass: "inline-list-item" }, [
                                t._m(4),
                                t._v(" "),
                                n("div", { staticClass: "switch" }, [
                                  n("label", [
                                    n("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            t.settings.showUtilities
                                              .showBookmarks,
                                          expression:
                                            "settings.showUtilities.showBookmarks",
                                        },
                                      ],
                                      attrs: { type: "checkbox" },
                                      domProps: {
                                        checked: Array.isArray(
                                          t.settings.showUtilities.showBookmarks
                                        )
                                          ? t._i(
                                              t.settings.showUtilities
                                                .showBookmarks,
                                              null
                                            ) > -1
                                          : t.settings.showUtilities
                                              .showBookmarks,
                                      },
                                      on: {
                                        change: function (e) {
                                          var n =
                                              t.settings.showUtilities
                                                .showBookmarks,
                                            o = e.target,
                                            i = !!o.checked;
                                          if (Array.isArray(n)) {
                                            var s = t._i(n, null);
                                            o.checked
                                              ? s < 0 &&
                                                t.$set(
                                                  t.settings.showUtilities,
                                                  "showBookmarks",
                                                  n.concat([null])
                                                )
                                              : s > -1 &&
                                                t.$set(
                                                  t.settings.showUtilities,
                                                  "showBookmarks",
                                                  n
                                                    .slice(0, s)
                                                    .concat(n.slice(s + 1))
                                                );
                                          } else
                                            t.$set(
                                              t.settings.showUtilities,
                                              "showBookmarks",
                                              i
                                            );
                                        },
                                      },
                                    }),
                                    t._v(" "),
                                    n("span", { staticClass: "lever mar-0" }),
                                  ]),
                                ]),
                              ]),
                            ]),
                          ]),
                        ])
                      : t._e(),
                    t._v(" "),
                    t.activeTab === t.tabTypeEnum.BACKGROUND
                      ? n("section", [
                          n("div", [
                            n(
                              "h4",
                              {
                                staticClass: "font-medium text-black semi-bold",
                              },
                              [t._v("\n                            Settings")]
                            ),
                            t._v(" "),
                            n("ul", { staticClass: "ph-10" }, [
                              n("li", { staticClass: "inline-list-item" }, [
                                t._m(5),
                                t._v(" "),
                                n("div", { staticClass: "right" }, [
                                  n("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          t.settings.background.changeInterval,
                                        expression:
                                          "settings.background.changeInterval",
                                      },
                                    ],
                                    staticClass: "filled-in",
                                    attrs: {
                                      type: "radio",
                                      id: "bgInterval1",
                                      value: "1",
                                    },
                                    domProps: {
                                      checked: t._q(
                                        t.settings.background.changeInterval,
                                        "1"
                                      ),
                                    },
                                    on: {
                                      change: [
                                        function (e) {
                                          t.$set(
                                            t.settings.background,
                                            "changeInterval",
                                            "1"
                                          );
                                        },
                                        function (e) {
                                          t.onChange("backgroundInterval");
                                        },
                                      ],
                                    },
                                  }),
                                  t._v(" "),
                                  n(
                                    "label",
                                    {
                                      staticClass: "inline-radio",
                                      attrs: { for: "bgInterval1" },
                                    },
                                    [t._v("1 tab")]
                                  ),
                                  t._v(" "),
                                  n("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          t.settings.background.changeInterval,
                                        expression:
                                          "settings.background.changeInterval",
                                      },
                                    ],
                                    staticClass: "filled-in",
                                    attrs: {
                                      type: "radio",
                                      id: "bgInterval2",
                                      value: "2",
                                    },
                                    domProps: {
                                      checked: t._q(
                                        t.settings.background.changeInterval,
                                        "2"
                                      ),
                                    },
                                    on: {
                                      change: [
                                        function (e) {
                                          t.$set(
                                            t.settings.background,
                                            "changeInterval",
                                            "2"
                                          );
                                        },
                                        function (e) {
                                          t.onChange("backgroundInterval");
                                        },
                                      ],
                                    },
                                  }),
                                  t._v(" "),
                                  n(
                                    "label",
                                    {
                                      staticClass: "inline-radio",
                                      attrs: { for: "bgInterval2" },
                                    },
                                    [t._v("2 tabs")]
                                  ),
                                  t._v(" "),
                                  n("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          t.settings.background.changeInterval,
                                        expression:
                                          "settings.background.changeInterval",
                                      },
                                    ],
                                    staticClass: "filled-in",
                                    attrs: {
                                      type: "radio",
                                      id: "bgInterval5",
                                      value: "5",
                                    },
                                    domProps: {
                                      checked: t._q(
                                        t.settings.background.changeInterval,
                                        "5"
                                      ),
                                    },
                                    on: {
                                      change: [
                                        function (e) {
                                          t.$set(
                                            t.settings.background,
                                            "changeInterval",
                                            "5"
                                          );
                                        },
                                        function (e) {
                                          t.onChange("backgroundInterval");
                                        },
                                      ],
                                    },
                                  }),
                                  t._v(" "),
                                  n(
                                    "label",
                                    {
                                      staticClass: "inline-radio",
                                      attrs: { for: "bgInterval5" },
                                    },
                                    [t._v("5 tabs")]
                                  ),
                                ]),
                              ]),
                              t._v(" "),
                              n("li", { staticClass: "inline-list-item" }, [
                                t._m(6),
                                t._v(" "),
                                n("div", { staticClass: "right" }, [
                                  n("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.settings.background.type,
                                        expression: "settings.background.type",
                                      },
                                    ],
                                    staticClass: "filled-in",
                                    attrs: {
                                      type: "radio",
                                      id: "wallpaperType2",
                                      value: "predefined",
                                    },
                                    domProps: {
                                      checked: t._q(
                                        t.settings.background.type,
                                        "predefined"
                                      ),
                                    },
                                    on: {
                                      change: [
                                        function (e) {
                                          t.$set(
                                            t.settings.background,
                                            "type",
                                            "predefined"
                                          );
                                        },
                                        function (e) {
                                          t.onChange("backgroundType");
                                        },
                                      ],
                                    },
                                  }),
                                  t._v(" "),
                                  n(
                                    "label",
                                    {
                                      staticClass: "inline-radio",
                                      attrs: { for: "wallpaperType2" },
                                    },
                                    [t._v("Default")]
                                  ),
                                  t._v(" "),
                                  n("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.settings.background.type,
                                        expression: "settings.background.type",
                                      },
                                    ],
                                    staticClass: "filled-in",
                                    attrs: {
                                      type: "radio",
                                      id: "wallpaperType1",
                                      value: "custom",
                                    },
                                    domProps: {
                                      checked: t._q(
                                        t.settings.background.type,
                                        "custom"
                                      ),
                                    },
                                    on: {
                                      change: [
                                        function (e) {
                                          t.$set(
                                            t.settings.background,
                                            "type",
                                            "custom"
                                          );
                                        },
                                        function (e) {
                                          t.onChange("backgroundType");
                                        },
                                      ],
                                    },
                                  }),
                                  t._v(" "),
                                  n(
                                    "label",
                                    {
                                      staticClass: "inline-radio",
                                      attrs: { for: "wallpaperType1" },
                                    },
                                    [t._v("Custom")]
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                          t._v(" "),
                          "custom" !== t.settings.background.type
                            ? n(
                                "div",
                                {
                                  class: {
                                    fade_in:
                                      "custom" !== t.settings.background.type,
                                  },
                                },
                                [
                                  n(
                                    "h4",
                                    {
                                      staticClass:
                                        "font-medium text-black semi-bold",
                                    },
                                    [
                                      t._v(
                                        "Default\n                            Category"
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  n(
                                    "ul",
                                    { staticClass: "flex" },
                                    t._l(t.themes, function (e, o) {
                                      return n(
                                        "li",
                                        {
                                          staticClass: "thumbnail",
                                          class: { active: t.isActiveTheme(o) },
                                        },
                                        [
                                          n("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  t.settings.background.themeId,
                                                expression:
                                                  "settings.background.themeId",
                                              },
                                            ],
                                            staticClass: "hide",
                                            attrs: {
                                              type: "radio",
                                              id: e.value,
                                            },
                                            domProps: {
                                              value: e.id,
                                              checked: t._q(
                                                t.settings.background.themeId,
                                                e.id
                                              ),
                                            },
                                            on: {
                                              change: function (n) {
                                                t.$set(
                                                  t.settings.background,
                                                  "themeId",
                                                  e.id
                                                );
                                              },
                                            },
                                          }),
                                          t._v(" "),
                                          n("div", {
                                            staticClass: "thumbnail-image",
                                            style: {
                                              "background-image":
                                                "url(" + e.imgUrl + ")",
                                            },
                                            on: {
                                              click: function (e) {
                                                t.selectActive(o);
                                              },
                                            },
                                          }),
                                          t._v(" "),
                                          n(
                                            "p",
                                            {
                                              staticClass:
                                                "thumbnail-name font-center",
                                            },
                                            [
                                              t._v(
                                                "\n                                    " +
                                                  t._s(e.lValue)
                                              ),
                                            ]
                                          ),
                                        ]
                                      );
                                    })
                                  ),
                                ]
                              )
                            : t._e(),
                          t._v(" "),
                          "custom" === t.settings.background.type
                            ? n(
                                "div",
                                {
                                  class: {
                                    fade_in:
                                      "custom" === t.settings.background.type,
                                  },
                                },
                                [
                                  n(
                                    "h4",
                                    {
                                      staticClass:
                                        "font-medium text-black semi-bold",
                                    },
                                    [
                                      t._v(
                                        "Custom\n                            List"
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  n("small", [
                                    t._v(
                                      "Add each image url in new line and press save\n                            list button. Image url should end with (.png, .jpg)\n                        "
                                    ),
                                  ]),
                                  t._v(" "),
                                  n("textarea", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.currentBgCustom,
                                        expression: "currentBgCustom",
                                      },
                                    ],
                                    attrs: {
                                      name: "",
                                      id: "",
                                      cols: "30",
                                      rows: "15",
                                    },
                                    domProps: { value: t.currentBgCustom },
                                    on: {
                                      input: function (e) {
                                        e.target.composing ||
                                          (t.currentBgCustom = e.target.value);
                                      },
                                    },
                                  }),
                                  t._v(" "),
                                  n(
                                    "button",
                                    {
                                      staticClass:
                                        "save-button font-xsmall btn semi-bold",
                                      attrs: {
                                        disabled:
                                          !t.currentBgCustom.trim().length,
                                      },
                                      on: {
                                        click: function (e) {
                                          return (
                                            e.stopPropagation(),
                                            t.saveCustomBg(e)
                                          );
                                        },
                                      },
                                    },
                                    [
                                      t._v(
                                        "Save\n                            List\n                        "
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  n("span", {
                                    domProps: {
                                      innerHTML: t._s(t.isCustomBgSaveMsg),
                                    },
                                  }),
                                ]
                              )
                            : t._e(),
                        ])
                      : t._e(),
                    t._v(" "),
                    t.activeTab === t.tabTypeEnum.CLOCK
                      ? n("section", [
                          n("div", [
                            n(
                              "h4",
                              {
                                staticClass: "font-medium text-black semi-bold",
                              },
                              [
                                t._v(
                                  "\n                            Integration: Google Calendar"
                                ),
                              ]
                            ),
                            t._v(" "),
                            t.calendar.isAuthSaved
                              ? t._e()
                              : n("small", {}, [
                                  n("strong", [
                                    t._v(
                                      "Authenticate Subtle tab to access your\n                                calendar data, "
                                    ),
                                    n(
                                      "a",
                                      {
                                        staticClass: "semi-bold",
                                        on: {
                                          click: function (e) {
                                            e.stopPropagation(),
                                              t.openIntegration("calendar");
                                          },
                                        },
                                      },
                                      [
                                        t._v(
                                          "click\n                                    here"
                                        ),
                                      ]
                                    ),
                                    t._v(" to start."),
                                  ]),
                                ]),
                            t._v(" "),
                            n(
                              "div",
                              {
                                staticClass: "flex",
                                on: {
                                  keydown: function (t) {
                                    t.stopPropagation();
                                  },
                                },
                              },
                              [
                                n("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.calendar.authCode,
                                      expression: "calendar.authCode",
                                    },
                                  ],
                                  staticClass: "mar-0 font-xsmall pad-0",
                                  attrs: {
                                    type: "text",
                                    readonly: t.calendar.isAuthSaved,
                                    placeholder:
                                      "Paste authentication code obtained from above link here",
                                  },
                                  domProps: { value: t.calendar.authCode },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        t.$set(
                                          t.calendar,
                                          "authCode",
                                          e.target.value
                                        );
                                    },
                                  },
                                }),
                                t._v(" "),
                                n(
                                  "button",
                                  {
                                    staticClass:
                                      "save-button font-xsmall btn semi-bold",
                                    attrs: { disabled: !t.calendar.authCode },
                                    on: { click: t.calendarAuth },
                                  },
                                  [
                                    t._v(
                                      "\n                                " +
                                        t._s(
                                          t.calendar.isAuthSaved
                                            ? "Remove"
                                            : "Save"
                                        ) +
                                        "\n                            "
                                    ),
                                  ]
                                ),
                              ]
                            ),
                            t._v(" "),
                            n("div", {
                              staticClass: "font-xsmall",
                              domProps: { innerHTML: t._s(t.calendar.saveMsg) },
                            }),
                            t._v(" "),
                            n(
                              "h4",
                              {
                                staticClass: "font-medium text-black semi-bold",
                              },
                              [t._v("\n                            Settings")]
                            ),
                            t._v(" "),
                            n("ul", { staticClass: "ph-10" }, [
                              n("li", { staticClass: "inline-list-item" }, [
                                t._m(7),
                                t._v(" "),
                                n("div", { staticClass: "right" }, [
                                  n("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.settings.clock.type,
                                        expression: "settings.clock.type",
                                      },
                                    ],
                                    staticClass: "filled-in",
                                    attrs: {
                                      type: "radio",
                                      id: "clock12",
                                      value: "twelve",
                                    },
                                    domProps: {
                                      checked: t._q(
                                        t.settings.clock.type,
                                        "twelve"
                                      ),
                                    },
                                    on: {
                                      change: function (e) {
                                        t.$set(
                                          t.settings.clock,
                                          "type",
                                          "twelve"
                                        );
                                      },
                                    },
                                  }),
                                  t._v(" "),
                                  n(
                                    "label",
                                    {
                                      staticClass: "inline-radio",
                                      attrs: { for: "clock12" },
                                    },
                                    [
                                      t._v(
                                        "12\n                                        Hour"
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  n("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.settings.clock.type,
                                        expression: "settings.clock.type",
                                      },
                                    ],
                                    staticClass: "filled-in",
                                    attrs: {
                                      type: "radio",
                                      id: "clock24",
                                      value: "twentyfour",
                                    },
                                    domProps: {
                                      checked: t._q(
                                        t.settings.clock.type,
                                        "twentyfour"
                                      ),
                                    },
                                    on: {
                                      change: function (e) {
                                        t.$set(
                                          t.settings.clock,
                                          "type",
                                          "twentyfour"
                                        );
                                      },
                                    },
                                  }),
                                  t._v(" "),
                                  n(
                                    "label",
                                    {
                                      staticClass: "inline-radio",
                                      attrs: { for: "clock24" },
                                    },
                                    [
                                      t._v(
                                        "24\n                                        Hour"
                                      ),
                                    ]
                                  ),
                                ]),
                              ]),
                              t._v(" "),
                              n("li", { staticClass: "inline-list-item" }, [
                                t._m(8),
                                t._v(" "),
                                n("div", { staticClass: "switch" }, [
                                  n("label", [
                                    n("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: t.settings.clock.showDay,
                                          expression: "settings.clock.showDay",
                                        },
                                      ],
                                      attrs: { type: "checkbox" },
                                      domProps: {
                                        checked: Array.isArray(
                                          t.settings.clock.showDay
                                        )
                                          ? t._i(
                                              t.settings.clock.showDay,
                                              null
                                            ) > -1
                                          : t.settings.clock.showDay,
                                      },
                                      on: {
                                        change: function (e) {
                                          var n = t.settings.clock.showDay,
                                            o = e.target,
                                            i = !!o.checked;
                                          if (Array.isArray(n)) {
                                            var s = t._i(n, null);
                                            o.checked
                                              ? s < 0 &&
                                                t.$set(
                                                  t.settings.clock,
                                                  "showDay",
                                                  n.concat([null])
                                                )
                                              : s > -1 &&
                                                t.$set(
                                                  t.settings.clock,
                                                  "showDay",
                                                  n
                                                    .slice(0, s)
                                                    .concat(n.slice(s + 1))
                                                );
                                          } else
                                            t.$set(
                                              t.settings.clock,
                                              "showDay",
                                              i
                                            );
                                        },
                                      },
                                    }),
                                    t._v(" "),
                                    n("span", { staticClass: "lever mar-0" }),
                                  ]),
                                ]),
                              ]),
                            ]),
                          ]),
                        ])
                      : t._e(),
                    t._v(" "),
                    t.activeTab === t.tabTypeEnum.WEATHER
                      ? n("section", [
                          n("div", [
                            n(
                              "h4",
                              {
                                staticClass: "font-medium text-black semi-bold",
                              },
                              [
                                t._v(
                                  "Location\n                            settings"
                                ),
                              ]
                            ),
                            t._v(" "),
                            n("ul", { staticClass: "ph-10" }, [
                              n("li", { staticClass: "inline-list-item" }, [
                                t._m(9),
                                t._v(" "),
                                n("div", { staticClass: "right" }, [
                                  n("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.settings.weather.location.type,
                                        expression:
                                          "settings.weather.location.type",
                                      },
                                    ],
                                    staticClass: "filled-in",
                                    attrs: {
                                      type: "radio",
                                      id: "weather-geo",
                                      value: "geo",
                                    },
                                    domProps: {
                                      checked: t._q(
                                        t.settings.weather.location.type,
                                        "geo"
                                      ),
                                    },
                                    on: {
                                      change: [
                                        function (e) {
                                          t.$set(
                                            t.settings.weather.location,
                                            "type",
                                            "geo"
                                          );
                                        },
                                        function (e) {
                                          t.onChange("weatherLocationType");
                                        },
                                      ],
                                    },
                                  }),
                                  t._v(" "),
                                  n(
                                    "label",
                                    {
                                      staticClass: "inline-radio",
                                      attrs: { for: "weather-geo" },
                                    },
                                    [
                                      t._v(
                                        "Default\n                                        Geolocation"
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  n("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.settings.weather.location.type,
                                        expression:
                                          "settings.weather.location.type",
                                      },
                                    ],
                                    staticClass: "filled-in",
                                    attrs: {
                                      type: "radio",
                                      id: "weather-custom",
                                      value: "custom",
                                    },
                                    domProps: {
                                      checked: t._q(
                                        t.settings.weather.location.type,
                                        "custom"
                                      ),
                                    },
                                    on: {
                                      change: [
                                        function (e) {
                                          t.$set(
                                            t.settings.weather.location,
                                            "type",
                                            "custom"
                                          );
                                        },
                                        function (e) {
                                          t.onChange("weatherLocationType");
                                        },
                                      ],
                                    },
                                  }),
                                  t._v(" "),
                                  n(
                                    "label",
                                    {
                                      staticClass: "inline-radio",
                                      attrs: { for: "weather-custom" },
                                    },
                                    [t._v("Custom")]
                                  ),
                                ]),
                              ]),
                              t._v(" "),
                              n(
                                "li",
                                {
                                  staticClass:
                                    "inline-list-item flex overflow-hidden flex-center flex-justify-space-between",
                                },
                                [
                                  t._m(10),
                                  t._v(" "),
                                  n("div", { staticClass: "right flex" }, [
                                    n("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: t.customLocation,
                                          expression: "customLocation",
                                        },
                                      ],
                                      staticClass: "mar-0 pad-0",
                                      attrs: {
                                        placeholder: "e.g. Mumbai",
                                        type: "text",
                                        disabled:
                                          "geo" ===
                                          t.settings.weather.location.type,
                                      },
                                      domProps: { value: t.customLocation },
                                      on: {
                                        keydown: function (t) {
                                          t.stopPropagation();
                                        },
                                        input: function (e) {
                                          e.target.composing ||
                                            (t.customLocation = e.target.value);
                                        },
                                      },
                                    }),
                                    t._v(" "),
                                    n(
                                      "button",
                                      {
                                        staticClass:
                                          "btn save-button font-xsmall semi-bold",
                                        attrs: {
                                          disabled:
                                            t.customLocation ==
                                            t.settings.weather.location.name,
                                        },
                                        on: {
                                          click: function (e) {
                                            return (
                                              e.stopPropagation(),
                                              t.updateCustomLocation(e)
                                            );
                                          },
                                        },
                                      },
                                      [
                                        t._v(
                                          "\n                                        Save\n                                    "
                                        ),
                                      ]
                                    ),
                                  ]),
                                ]
                              ),
                            ]),
                            t._v(" "),
                            n(
                              "h4",
                              {
                                staticClass: "font-medium text-black semi-bold",
                              },
                              [
                                t._v(
                                  "\n                            Miscellaneous Settings"
                                ),
                              ]
                            ),
                            t._v(" "),
                            n("ul", { staticClass: "ph-10" }, [
                              n("li", { staticClass: "inline-list-item" }, [
                                n(
                                  "span",
                                  { staticClass: "font-small semi-bold" },
                                  [t._v("Temperature Unit")]
                                ),
                                t._v(" "),
                                n("div", { staticClass: "right" }, [
                                  n("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.settings.weather.unit,
                                        expression: "settings.weather.unit",
                                      },
                                    ],
                                    staticClass: "filled-in",
                                    attrs: {
                                      type: "radio",
                                      id: "weather-celcius",
                                      value: "c",
                                    },
                                    domProps: {
                                      checked: t._q(
                                        t.settings.weather.unit,
                                        "c"
                                      ),
                                    },
                                    on: {
                                      change: function (e) {
                                        t.$set(t.settings.weather, "unit", "c");
                                      },
                                    },
                                  }),
                                  t._v(" "),
                                  n(
                                    "label",
                                    {
                                      staticClass: "inline-radio",
                                      attrs: { for: "weather-celcius" },
                                    },
                                    [t._v("Celsius")]
                                  ),
                                  t._v(" "),
                                  n("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.settings.weather.unit,
                                        expression: "settings.weather.unit",
                                      },
                                    ],
                                    staticClass: "filled-in",
                                    attrs: {
                                      type: "radio",
                                      id: "weather-fehren",
                                      value: "f",
                                    },
                                    domProps: {
                                      checked: t._q(
                                        t.settings.weather.unit,
                                        "f"
                                      ),
                                    },
                                    on: {
                                      change: function (e) {
                                        t.$set(t.settings.weather, "unit", "f");
                                      },
                                    },
                                  }),
                                  t._v(" "),
                                  n(
                                    "label",
                                    {
                                      staticClass: "inline-radio",
                                      attrs: { for: "weather-fehren" },
                                    },
                                    [t._v("Fahrenheit")]
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                        ])
                      : t._e(),
                    t._v(" "),
                    t.activeTab === t.tabTypeEnum.TODO
                      ? n("section", [
                          n("div", [
                            n(
                              "h4",
                              {
                                staticClass: "font-medium text-black semi-bold",
                              },
                              [t._v("\n                            Settings")]
                            ),
                            t._v(" "),
                            n("ul", { staticClass: "inline-list" }, [
                              n("li", { staticClass: "inline-list-item" }, [
                                t._m(11),
                                t._v(" "),
                                n("div", { staticClass: "right" }, [
                                  n("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.todos.type,
                                        expression: "todos.type",
                                      },
                                    ],
                                    staticClass: "filled-in",
                                    attrs: {
                                      type: "radio",
                                      id: "defaultTodo",
                                      value: "default",
                                    },
                                    domProps: {
                                      checked: t._q(t.todos.type, "default"),
                                    },
                                    on: {
                                      change: function (e) {
                                        t.$set(t.todos, "type", "default");
                                      },
                                    },
                                  }),
                                  t._v(" "),
                                  n(
                                    "label",
                                    {
                                      staticClass: "inline-radio",
                                      attrs: { for: "defaultTodo" },
                                    },
                                    [t._v("Default")]
                                  ),
                                  t._v(" "),
                                  n("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.todos.type,
                                        expression: "todos.type",
                                      },
                                    ],
                                    staticClass: "filled-in",
                                    attrs: {
                                      type: "radio",
                                      id: "wTodos",
                                      value: "w",
                                    },
                                    domProps: {
                                      checked: t._q(t.todos.type, "w"),
                                    },
                                    on: {
                                      change: function (e) {
                                        t.$set(t.todos, "type", "w");
                                      },
                                    },
                                  }),
                                  t._v(" "),
                                  n(
                                    "label",
                                    {
                                      staticClass: "inline-radio",
                                      attrs: { for: "wTodos" },
                                    },
                                    [t._v("Wunderlist")]
                                  ),
                                  t._v(" "),
                                  n("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.todos.type,
                                        expression: "todos.type",
                                      },
                                    ],
                                    staticClass: "filled-in",
                                    attrs: {
                                      type: "radio",
                                      id: "todoistTodos",
                                      value: "t",
                                    },
                                    domProps: {
                                      checked: t._q(t.todos.type, "t"),
                                    },
                                    on: {
                                      change: function (e) {
                                        t.$set(t.todos, "type", "t");
                                      },
                                    },
                                  }),
                                  t._v(" "),
                                  n(
                                    "label",
                                    {
                                      staticClass: "inline-radio",
                                      attrs: { for: "todoistTodos" },
                                    },
                                    [t._v("Todoist")]
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                          t._v(" "),
                          t.todos.isAuthCodeBoxVisible ||
                          "w" === t.settings.todos.type ||
                          "t" === t.settings.todos.type
                            ? n(
                                "div",
                                {
                                  class: {
                                    fade_in: t.todos.isAuthCodeBoxVisible,
                                  },
                                },
                                [
                                  n(
                                    "h4",
                                    {
                                      staticClass:
                                        "font-medium text-black semi-bold",
                                    },
                                    [
                                      t._v(
                                        "Integrate\n                            " +
                                          t._s(
                                            "w" === t.todos.type
                                              ? "Wunderlist"
                                              : "Todoist"
                                          )
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  t.todos.isAuthSaved
                                    ? t._e()
                                    : n("small", {}, [
                                        n("strong", [
                                          t._v(
                                            "Integrate " +
                                              t._s(
                                                "w" === t.todos.type
                                                  ? "Wunderlist"
                                                  : "Todoist"
                                              ) +
                                              " in Subtle tab,\n                                "
                                          ),
                                          n(
                                            "a",
                                            {
                                              staticClass: "semi-bold",
                                              on: {
                                                click: function (e) {
                                                  e.stopPropagation(),
                                                    t.openIntegration(
                                                      t.todos.type
                                                    );
                                                },
                                              },
                                            },
                                            [t._v("click here")]
                                          ),
                                          t._v(
                                            "\n                                to start.\n                            "
                                          ),
                                        ]),
                                      ]),
                                  t._v(" "),
                                  n(
                                    "div",
                                    {
                                      staticClass: "flex",
                                      on: {
                                        keydown: function (t) {
                                          t.stopPropagation();
                                        },
                                      },
                                    },
                                    [
                                      n("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.todos.authCode,
                                            expression: "todos.authCode",
                                          },
                                        ],
                                        staticClass: "mar-0 font-xsmall pad-0",
                                        attrs: {
                                          type: "text",
                                          readonly: t.todos.isAuthSaved,
                                          placeholder:
                                            "Paste authentication code obtained from above link here",
                                        },
                                        domProps: { value: t.todos.authCode },
                                        on: {
                                          input: function (e) {
                                            e.target.composing ||
                                              t.$set(
                                                t.todos,
                                                "authCode",
                                                e.target.value
                                              );
                                          },
                                        },
                                      }),
                                      t._v(" "),
                                      n(
                                        "button",
                                        {
                                          staticClass:
                                            "save-button font-xsmall btn semi-bold",
                                          attrs: {
                                            disabled: !t.todos.authCode,
                                          },
                                          on: { click: t.saveAuthCode },
                                        },
                                        [
                                          t._v(
                                            t._s(
                                              t.todos.isAuthSaved
                                                ? "Remove"
                                                : "Save"
                                            ) + "\n                            "
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  n("div", {
                                    staticClass: "font-xsmall",
                                    domProps: {
                                      innerHTML: t._s(t.todos.saveMsg),
                                    },
                                  }),
                                ]
                              )
                            : t._e(),
                        ])
                      : t._e(),
                    t._v(" "),
                    t.activeTab === t.tabTypeEnum.WHATS_NEW
                      ? n(
                          "section",
                          { staticClass: "full-height" },
                          [n("whats-new", { staticClass: "full-height" })],
                          1
                        )
                      : t._e(),
                  ]),
                ],
                1
              ),
            ]),
            t._v(" "),
            n(
              "footer",
              {
                staticClass:
                  "customize-footer font-xsmall flex flex-justify-space-between bg-light-grey",
              },
              [
                n("div", { staticClass: "flex" }, [
                  n("span", { staticClass: "version" }, [
                    t._v("v" + t._s(t.version)),
                  ]),
                  t._v(" "),
                  n("span", { staticStyle: { margin: "0 0.5em" } }, [
                    t._v("|"),
                  ]),
                  t._v(" "),
                  t._m(12),
                ]),
                t._v(" "),
                t._m(13),
              ]
            ),
            t._v(" "),
            n("svg", { staticStyle: { display: "none" } }, [
              n("defs", [
                n("g", { attrs: { id: "icon-general" } }, [
                  n("path", {
                    attrs: {
                      d: "M10.05774,8.83187063 L0.45885,8.83187063 C0.503546734,8.83187063 0.53885,8.86729826 0.53885,8.91039111 C0.53885,8.95348396 0.503546734,8.98891159 0.45885,8.98891159 L10.05774,8.98891159 C10.0130433,8.98891159 9.97774,8.95348396 9.97774,8.91039111 C9.97774,8.86729826 10.0130433,8.83187063 10.05774,8.83187063 Z",
                    },
                  }),
                  t._v(" "),
                  n("path", {
                    attrs: {
                      d: "M20.56047,8.83187063 L15.46755,8.83187063 C15.5122467,8.83187063 15.54755,8.86729826 15.54755,8.91039111 C15.54755,8.95348396 15.5122467,8.98891159 15.46755,8.98891159 L20.56047,8.98891159 C20.5157733,8.98891159 20.48047,8.95348396 20.48047,8.91039111 C20.48047,8.86740955 20.5158719,8.83187063 20.56047,8.83187063 Z",
                    },
                  }),
                  t._v(" "),
                  n("path", {
                    attrs: {
                      d: "M7.24563,16.1486849 L0.45885,16.1486849 C0.503546734,16.1486849 0.53885,16.1841125 0.53885,16.2272053 C0.53885,16.2702982 0.503546734,16.3057258 0.45885,16.3057258 L7.24563,16.3057258 C7.20093327,16.3057258 7.16563,16.2702982 7.16563,16.2272053 C7.16563,16.1841125 7.20093327,16.1486849 7.24563,16.1486849 Z",
                    },
                  }),
                  t._v(" "),
                  n("path", {
                    attrs: {
                      d: "M20.56047,16.1486849 L12.76254,16.1486849 C12.8072367,16.1486849 12.84254,16.1841125 12.84254,16.2272053 C12.84254,16.2702982 12.8072367,16.3057258 12.76254,16.3057258 L20.56047,16.3057258 C20.5157733,16.3057258 20.48047,16.2702982 20.48047,16.2272053 C20.48047,16.1842238 20.5158719,16.1486849 20.56047,16.1486849 Z",
                    },
                  }),
                  t._v(" "),
                  n("path", {
                    attrs: {
                      d: "M4.41273,1.95388683 L0.45885,1.95388683 C0.503546734,1.95388683 0.53885,1.98931445 0.53885,2.03240731 C0.53885,2.07550016 0.503546734,2.11092778 0.45885,2.11092778 L4.41273,2.11092778 C4.36803327,2.11092778 4.33273,2.07550016 4.33273,2.03240731 C4.33273,1.98931445 4.36803327,1.95388683 4.41273,1.95388683 Z",
                    },
                  }),
                  t._v(" "),
                  n("path", {
                    attrs: {
                      d: "M20.56047,1.95388683 L9.82296,1.95388683 C9.86765673,1.95388683 9.90296,1.98931445 9.90296,2.03240731 C9.90296,2.07550016 9.86765673,2.11092778 9.82296,2.11092778 L20.56047,2.11092778 C20.5157733,2.11092778 20.48047,2.07550016 20.48047,2.03240731 C20.48047,1.98942575 20.5158719,1.95388683 20.56047,1.95388683 Z",
                    },
                  }),
                  t._v(" "),
                  n("path", {
                    attrs: {
                      d: "M6.00936,3.55593048 C5.17394673,3.55593048 4.49252,2.87210331 4.49252,2.03198583 C4.49252,1.19192447 5.17389062,0.508251908 6.00936,0.508251908 C6.84482938,0.508251908 7.5262,1.19192447 7.5262,2.03198583 C7.5262,2.8722333 6.84485383,3.55593048 6.00936,3.55593048 Z M6.00936,0.351210949 C5.08396963,0.351210949 4.33252,1.10521479 4.33252,2.03198583 C4.33252,2.95892123 5.08392327,3.71297144 6.00936,3.71297144 C6.93479673,3.71297144 7.6862,2.95892123 7.6862,2.03198583 C7.6862,1.10521479 6.93475037,0.351210949 6.00936,0.351210949 Z",
                    },
                  }),
                  t._v(" "),
                  n("path", {
                    attrs: {
                      d: "M8.84226,17.7515715 C8.00682229,17.7515715 7.32542,17.0677197 7.32542,16.2274161 C7.32542,15.3872986 8.00684673,14.7034714 8.84226,14.7034714 C9.67798827,14.7034714 10.35931,15.3871932 10.35931,16.2274161 C10.3594681,17.0677807 9.67807764,17.7515715 8.84226,17.7515715 Z M8.84226,14.5464305 C7.91682327,14.5464305 7.16542,15.3004807 7.16542,16.2274161 C7.16542,17.1546676 7.91671827,17.9086124 8.84226,17.9086124 C9.76790673,17.9086124 10.51931,17.1545622 10.51931,16.2274161 C10.5196089,15.3005556 9.76794582,14.5464305 8.84226,14.5464305 Z",
                    },
                  }),
                  t._v(" "),
                  n("path", {
                    attrs: {
                      d: "M11.65521,10.4345465 C10.8192962,10.4345465 10.13774,9.75063858 10.13774,8.91039111 C10.13774,8.07028052 10.8193695,7.38644645 11.65521,7.38644645 C12.4904621,7.38644645 13.17163,8.07011212 13.17163,8.91039111 C13.17163,9.75072622 12.490406,10.4345465 11.65521,10.4345465 Z M11.65521,7.22940549 C10.7294337,7.22940549 9.97774,7.98337562 9.97774,8.91039111 C9.97774,9.83751199 10.7295386,10.5915875 11.65521,10.5915875 C12.5804586,10.5915875 13.33163,9.83730545 13.33163,8.91039111 C13.33163,7.98348942 12.5804708,7.22940549 11.65521,7.22940549 Z",
                    },
                  }),
                ]),
                t._v(" "),
                n("g", { attrs: { id: "icon-clock" } }, [
                  n("circle", {
                    attrs: {
                      id: "Oval",
                      cx: "10.5",
                      cy: "10.5",
                      r: "9.13133536",
                    },
                  }),
                  t._v(" "),
                  n("polyline", {
                    attrs: {
                      id: "Shape",
                      transform:
                        "translate(10.842248, 8.898166) rotate(-51.000000) translate(-10.842248, -8.898166) ",
                      points:
                        "6.49624149 8.22774104 9.10632618 11.3606903 15.1882544 6.43564197",
                    },
                  }),
                ]),
                t._v(" "),
                n("g", { attrs: { id: "icon-wallpaper" } }, [
                  n("polyline", {
                    attrs: {
                      id: "Shape",
                      points:
                        "0.00857797986 14.8245426 5.23298105 8.6542509 11.1104345 15.595829",
                    },
                  }),
                  t._v(" "),
                  n("polyline", {
                    attrs: {
                      id: "Shape",
                      points:
                        "8.11946374 11.4834513 14.158003 0.170099836 20.8539462 12.7060758",
                    },
                  }),
                  t._v(" "),
                  n("ellipse", {
                    attrs: {
                      id: "Oval",
                      cx: "6.9321391",
                      cy: "3.82227375",
                      rx: "1.95915115",
                      ry: "1.91656091",
                    },
                  }),
                ]),
                t._v(" "),
                n("g", { attrs: { id: "icon-weather" } }, [
                  n("path", {
                    attrs: {
                      d: "M18.9567406,12.9043462 C18.9567406,13.9575538 18.1324913,14.826995 17.1176733,14.826995 L7.25454115,14.826995 C5.60604239,14.826995 4.29641646,13.4258931 4.29641646,11.7177447 C4.29641646,11.0004029 4.53261347,10.3403561 4.93009726,9.81375234 C5.47417955,9.08629676 6.3244414,8.61870636 7.28064838,8.61870636 C7.42397756,8.61870636 7.56569576,8.62292862 7.70419202,8.64487453 C8.00392768,7.38065228 8.77112968,6.30589152 9.80551621,5.63244155 C10.5401671,5.15139885 11.4116559,4.87479193 12.343414,4.87479193 C14.9806708,4.87479193 17.1178155,7.08936565 17.1178155,9.82204956 C17.1178155,10.2237531 17.072187,10.6137227 16.9842469,10.9884235 C17.028217,10.9850358 17.0722344,10.9919093 17.1178155,10.9919093 C18.1325387,10.9918602 18.9567406,11.8527587 18.9567406,12.9043462 Z",
                    },
                  }),
                  t._v(" "),
                  n("path", {
                    attrs: {
                      d: "M9.80542145,5.63278522 C8.77103491,6.30623519 8.00383292,7.38143781 7.70409726,8.64561097 C7.56564838,8.62366506 7.42393017,8.62027743 7.28055362,8.62027743 C6.32439401,8.62027743 5.47408479,9.089488 4.93000249,9.81699267 C3.83861596,9.2211635 3.09420449,8.03628039 3.09420449,6.6691038 C3.09420449,4.70609804 4.63031421,3.11445449 6.52472319,3.11445449 C8.07225187,3.11445449 9.37865586,4.17448644 9.80542145,5.63278522 Z",
                    },
                  }),
                  t._v(" "),
                  n("path", { attrs: { d: "M6.46,0 L6.46,1.86564838" } }),
                  t._v(" "),
                  n("path", { attrs: { d: "M0,6.69375 L1.80049875,6.69375" } }),
                  t._v(" "),
                  n("path", {
                    attrs: {
                      d: "M9.74268828,3.39602011 L11.065818,2.02501403",
                    },
                  }),
                  t._v(" "),
                  n("path", {
                    attrs: {
                      d: "M1.79016958,11.3939565 L3.11329925,10.0229504",
                    },
                  }),
                  t._v(" "),
                  n("path", {
                    attrs: {
                      d: "M1.79016958,2.02501403 L3.11329925,3.39602011",
                    },
                  }),
                ]),
                t._v(" "),
                n("g", { attrs: { id: "icon-whatsnew" } }, [
                  n("path", {
                    attrs: {
                      d: "M17.1432424,1.48612748 C18.8262781,1.48612748 20.1395453,2.95036374 19.9566757,4.62374579 L19.0055056,13.3268203 C18.8462784,14.7829455 17.6770643,15.8494186 16.0271805,15.8494186 L15.6098951,15.8494186 L15.5352461,16.2599727 L15.1542502,18.3553726 C15.0286389,19.0466277 14.1734653,19.3090833 13.681496,18.8089868 L10.9157511,15.9987006 L10.7688351,15.8494186 L10.5593849,15.8494186 L4.62197891,15.8494186 C3.17492962,15.8494186 1.96595019,14.765394 1.8086188,13.3267848 L0.857452054,4.62374096 C0.674511168,2.95069577 1.98743707,1.48612748 3.67080828,1.48612748 L17.1432424,1.48612748 Z",
                    },
                  }),
                  t._v(" "),
                  n("circle", {
                    attrs: {
                      "fill-rule": "nonzero",
                      cx: "6.86892358",
                      cy: "9.03592685",
                      r: "1",
                    },
                  }),
                  t._v(" "),
                  n("circle", {
                    attrs: {
                      "fill-rule": "nonzero",
                      cx: "10.4069865",
                      cy: "9.03592685",
                      r: "1",
                    },
                  }),
                  t._v(" "),
                  n("circle", {
                    attrs: {
                      "fill-rule": "nonzero",
                      cx: "13.9450495",
                      cy: "9.03592685",
                      r: "1",
                    },
                  }),
                ]),
                t._v(" "),
                n("g", { attrs: { id: "icon-todo" } }, [
                  n("path", {
                    attrs: {
                      d: "M370,95.4V53.9h-62.2V12.5H204.2v41.5H142v41.5H69.5v404.1h373.1V95.4H370z M224.9,33.2h62.2v20.7h-62.2V33.2z M162.7,74.7h186.5v62.2H162.7V74.7z M421.8,478.8H90.2V116.1H142v41.4h228v-41.4h51.8V478.8z",
                    },
                  }),
                  t._v(" "),
                  n("rect", {
                    attrs: {
                      width: "20.7",
                      x: "131.6",
                      y: "222.8",
                      height: "20.7",
                    },
                  }),
                  t._v(" "),
                  n("rect", {
                    attrs: {
                      width: "20.7",
                      x: "131.6",
                      y: "307.8",
                      height: "20.7",
                    },
                  }),
                  t._v(" "),
                  n("rect", {
                    attrs: {
                      width: "20.7",
                      x: "131.6",
                      y: "393.8",
                      height: "20.7",
                    },
                  }),
                  t._v(" "),
                  n("rect", {
                    attrs: {
                      width: "207.3",
                      x: "173.1",
                      y: "222.8",
                      height: "20.7",
                    },
                  }),
                  t._v(" "),
                  n("rect", {
                    attrs: {
                      width: "207.3",
                      x: "173.1",
                      y: "307.8",
                      height: "20.7",
                    },
                  }),
                  t._v(" "),
                  n("rect", {
                    attrs: {
                      width: "207.3",
                      x: "173.1",
                      y: "393.8",
                      height: "20.7",
                    },
                  }),
                ]),
              ]),
            ]),
          ]
        );
      },
      i = [
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", [
            n("div", { staticClass: "font-small semi-bold" }, [
              t._v("Weather widget"),
            ]),
            t._v(" "),
            n("small", [t._v("Show/hide weather widget")]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", [
            n("div", { staticClass: "font-small semi-bold" }, [
              t._v(
                "Date &\n                                        Time widget\n                                    "
              ),
            ]),
            t._v(" "),
            n("small", [
              t._v(
                "Show/hide date and time widget\n                                    "
              ),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", [
            n("div", { staticClass: "font-small semi-bold" }, [
              t._v(
                "Notes\n                                        widget\n                                    "
              ),
            ]),
            t._v(" "),
            n("small", [t._v("Show/hide notes widget")]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", [
            n("div", { staticClass: "font-small semi-bold" }, [
              t._v("Todos widget\n                                    "),
            ]),
            t._v(" "),
            n("small", [t._v("Show/hide todos widget")]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", [
            n("div", { staticClass: "font-small semi-bold" }, [
              t._v("Bookmark widget\n                                    "),
            ]),
            t._v(" "),
            n("small", [t._v("Show/hide bookmark widget")]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", [
            n("div", { staticClass: "font-small semi-bold" }, [
              t._v(
                "Wallpaper\n                                        Change Interval (new tabs)\n                                    "
              ),
            ]),
            t._v(" "),
            n("small", [
              t._v(
                "Choose lower value with high internet\n                                        speed to prevent loading.\n                                    "
              ),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", [
            n("div", { staticClass: "font-small semi-bold" }, [
              t._v(
                "Wallpaper\n                                        Type\n                                    "
              ),
            ]),
            t._v(" "),
            n("small", [
              t._v(
                "Choose default for Subtle collection\n                                        or add custom wallpapers\n                                    "
              ),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", [
            n("div", { staticClass: "font-small semi-bold" }, [
              t._v(
                "Clock\n                                        format\n                                    "
              ),
            ]),
            t._v(" "),
            n("small", [
              t._v(
                "Choose 12 hour or 24 hour clock\n                                        format\n                                    "
              ),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", [
            n("div", { staticClass: "font-small semi-bold" }, [
              t._v(
                "Date\n                                        (show/hide)\n                                    "
              ),
            ]),
            t._v(" "),
            n("small", [
              t._v(
                "Show/hide date along with time\n                                    "
              ),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", [
            n("div", { staticClass: "font-small semi-bold" }, [
              t._v(
                "Location\n                                        type\n                                    "
              ),
            ]),
            t._v(" "),
            n("small", [
              t._v(
                "Choose either default geo-location or\n                                        add custom location.\n                                    "
              ),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", [
            n("div", { staticClass: "font-small semi-bold" }, [
              t._v(
                "\n                                        City/Town/Village Name\n                                    "
              ),
            ]),
            t._v(" "),
            n("small", [
              t._v(
                "Enter correct name and press save\n                                        button.\n                                    "
              ),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", [
            n("div", { staticClass: "font-small semi-bold" }, [
              t._v("Todo type"),
            ]),
            t._v(" "),
            n("small", [t._v("Integrate 3rd-party todo applications.")]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "flex" }, [
            n("span", { staticClass: "semi-bold" }, [t._v("Shortcuts")]),
            t._v(" "),
            n("ul", { staticClass: "flex shortcut-bar" }, [
              n("li", [
                n("span", { staticClass: "shortcut-key" }, [t._v("n")]),
                t._v("Notes"),
              ]),
              t._v(" "),
              n("li", [
                n("span", { staticClass: "shortcut-key" }, [t._v("c")]),
                t._v("Customize"),
              ]),
              t._v(" "),
              n("li", [
                n("span", { staticClass: "shortcut-key" }, [t._v("w")]),
                t._v("Forecast"),
              ]),
              t._v(" "),
              n("li", [
                n("span", { staticClass: "shortcut-key" }, [t._v("g")]),
                t._v("Calendar"),
              ]),
              t._v(" "),
              n("li", [
                n("span", { staticClass: "shortcut-key" }, [t._v("h")]),
                t._v("Recent wallpaper"),
              ]),
              t._v(" "),
              n("li", [
                n("span", { staticClass: "shortcut-key" }, [t._v("esc")]),
                t._v(" Close all"),
              ]),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "success-links" }, [
            n(
              "a",
              {
                staticClass: "text-black",
                attrs: {
                  href: "https://goo.gl/forms/XcIS7fojHNT166nA2",
                  target: "_blank",
                },
              },
              [t._v("Support")]
            ),
            t._v(" "),
            n(
              "a",
              {
                staticClass: "text-black",
                attrs: {
                  href: "https://goo.gl/forms/hMD1i4sXIUVwkKtD2",
                  target: "_blank",
                },
              },
              [t._v("Feedback")]
            ),
          ]);
        },
      ];
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      n(149);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(54),
      s = n.n(i);
    for (var a in i)
      "default" !== a &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(a);
    var r = n(156),
      c = n(1),
      l = o,
      u = Object(c.a)(s.a, r.a, r.b, !1, l, null, null);
    e.default = u.exports;
  },
  function (t, e, n) {
    var o = n(150);
    "string" == typeof o && (o = [[t.i, o, ""]]),
      o.locals && (t.exports = o.locals);
    var i = n(3).default;
    i("2ccbb1d3", o, !0, {});
  },
  function (t, e, n) {
    (e = t.exports = n(2)(!1)),
      e.push([
        t.i,
        "#weather:hover .arrow-down{opacity:1;animation:fade_in .4s;left:calc(50% - 11.5px)}",
        "",
      ]);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = {
        0: "tornado",
        1: "day-storm-showers",
        2: "hurricane",
        3: "thunderstorm",
        4: "thunderstorm",
        5: "snow",
        6: "sleet",
        7: "rain-mix",
        8: "rain",
        9: "rain",
        10: "snow-wind",
        11: "showers",
        12: "showers",
        13: "snowflake-cold",
        14: "snow",
        15: "snow-wind",
        16: "snow",
        17: "hail",
        18: "sleet",
        19: "dust",
        20: "fog",
        21: "haze",
        22: "smoke",
        23: "strong-wind",
        24: "windy",
        25: "snowflake-cold",
        26: "cloudy",
        27: "night-cloudy",
        28: "day-cloudy",
        29: "night-cloudy",
        30: "day-cloudy",
        31: "night-clear",
        32: "day-sunny",
        33: "night-clear",
        34: "day-sunny",
        35: "hail",
        36: "hot",
        37: "thunderstorm",
        38: "thunderstorm",
        39: "thunderstorm",
        40: "storm-showers",
        41: "snowflake-cold",
        42: "snow",
        43: "snow",
        44: "cloudy",
        45: "storm-showers",
        46: "snow-wind",
        47: "thunderstorm",
      });
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      n(153);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(55),
      s = n.n(i);
    for (var a in i)
      "default" !== a &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(a);
    var r = n(155),
      c = n(1),
      l = o,
      u = Object(c.a)(s.a, r.a, r.b, !1, l, null, null);
    e.default = u.exports;
  },
  function (t, e, n) {
    var o = n(154);
    "string" == typeof o && (o = [[t.i, o, ""]]),
      o.locals && (t.exports = o.locals);
    var i = n(3).default;
    i("054b7328", o, !0, {});
  },
  function (t, e, n) {
    (e = t.exports = n(2)(!1)),
      e.push([
        t.i,
        '#weatherInfo{min-width:40rem;margin-left:-.5rem;margin-top:1rem}#weatherInfo:before{bottom:100%;left:2rem;content:" ";height:0;width:0;position:absolute;pointer-events:none;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:9px solid hsla(0,0%,100%,.98)}#weatherInfo p{margin:0}#currentWeather{width:38%;flex-shrink:0;padding:.5rem;background:hsla(0,0%,100%,.98);border-radius:5px 0 0 5px}#forecast{width:100%;background:hsla(0,0%,100%,.85);border-radius:0 5px 5px 0}.forecast-pallet:not(:first-of-type){border-left:1px solid rgba(0,0,0,.1)}.forecast-pallet{border-left:1px solid transparent;padding:0 .5rem;text-align:center;flex-basis:100%}.forecast-pallet p{margin-bottom:5px!important}',
        "",
      ]);
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", [
          n(
            "div",
            {
              staticClass: "flex font-black absolute",
              attrs: { id: "weatherInfo" },
            },
            [
              n("div", { attrs: { id: "currentWeather" } }, [
                n("div", { staticClass: "flex flex-center" }, [
                  n("div", { staticClass: "relative" }, [
                    n("div", { staticClass: "temperature-value" }, [
                      t._v(
                        t._s(t.getTemp(t.settings.unit, t.data.current.temp))
                      ),
                    ]),
                    t._v(" "),
                    "f" === this.settings.unit
                      ? n("sup", { staticClass: "temperature-unit" }, [
                          t._v("℉"),
                        ])
                      : t._e(),
                    t._v(" "),
                    "c" === this.settings.unit
                      ? n("sup", { staticClass: "temperature-unit" }, [
                          t._v("℃"),
                        ])
                      : t._e(),
                  ]),
                  t._v(" "),
                  n(
                    "div",
                    { staticClass: "ml-30 semi-bold flex flex-center" },
                    [
                      n("i", {
                        staticClass: "wi",
                        class: "wi-" + t.getWeatherClass(t.data.current.code),
                      }),
                      t._v(" "),
                      n("span", { staticClass: "font-small" }, [
                        t._v(t._s(t.data.current.text)),
                      ]),
                    ]
                  ),
                ]),
                t._v(" "),
                n(
                  "div",
                  {
                    staticClass:
                      "flex font-xsmall flex-justify-space-around flex-end mt-15",
                  },
                  [
                    n("div", [
                      n("p", [
                        n(
                          "svg",
                          { attrs: { viewBox: "0 0 12 17", width: "0.7em" } },
                          [n("use", { attrs: { "xlink:href": "#icon-drop" } })]
                        ),
                        t._v(
                          "\n                        Humid\n                    "
                        ),
                      ]),
                      t._v(" "),
                      n("p", { staticClass: "semi-bold" }, [
                        t._v(t._s(t.humidity) + "%"),
                      ]),
                    ]),
                    t._v(" "),
                    n("div", [
                      n("p", [
                        n(
                          "svg",
                          { attrs: { viewBox: "0 0 14 12", width: "1em" } },
                          [n("use", { attrs: { "xlink:href": "#icon-wind" } })]
                        ),
                        t._v(
                          "\n                        Wind\n                    "
                        ),
                      ]),
                      t._v(" "),
                      n("p", { staticClass: "semi-bold" }, [
                        t._v(t._s(t.wind) + " km/hr"),
                      ]),
                    ]),
                    t._v(" "),
                    n("div", [
                      n("p", [
                        n(
                          "svg",
                          { attrs: { viewBox: "0 0 14 12", width: "1em" } },
                          [
                            n("use", {
                              attrs: { "xlink:href": "#icon-pollution" },
                            }),
                          ]
                        ),
                        t._v(
                          "\n                        Pollution\n                    "
                        ),
                      ]),
                      t._v(" "),
                      n("p", { staticClass: "semi-bold" }, [
                        t._v(t._s(t.pollution) + " AQI"),
                      ]),
                    ]),
                  ]
                ),
              ]),
              t._v(" "),
              n(
                "div",
                { staticClass: "flex flex-center", attrs: { id: "forecast" } },
                t._l(t.data.forecast, function (e) {
                  return n("div", { staticClass: "forecast-pallet" }, [
                    n("p", { staticClass: "semi-bold" }, [t._v(t._s(e.day))]),
                    t._v(" "),
                    n("p", [
                      n("i", {
                        staticClass: "wi tooltip",
                        class: "wi-" + t.getWeatherClass(e.code),
                        attrs: { rel: e.text },
                      }),
                    ]),
                    t._v(" "),
                    n(
                      "div",
                      {
                        staticClass:
                          "flex font-xsmall flex-justify-space-around semi-bold",
                      },
                      [
                        n("p", [
                          t._v(t._s(t.getTemp(t.settings.unit, e.high)) + " "),
                          n("sup", [t._v("°")]),
                        ]),
                        t._v(" "),
                        n("p", { staticClass: "font-light-black" }, [
                          t._v(t._s(t.getTemp(t.settings.unit, e.low)) + " "),
                          n("sup", [t._v("°")]),
                        ]),
                      ]
                    ),
                  ]);
                })
              ),
            ]
          ),
          t._v(" "),
          n(
            "svg",
            { staticStyle: { display: "none" }, attrs: { version: "1.1" } },
            [
              n("defs", [
                n(
                  "g",
                  {
                    attrs: {
                      id: "icon-drop",
                      "fill-rule": "nonzero",
                      fill: "#333",
                    },
                  },
                  [
                    n("path", {
                      attrs: {
                        d: "M7.51729577,1.82901408 C7.13419718,1.2656338 6.79616901,0.747323943 6.48067606,0.274084507 C6.43560563,0.206478873 6.368,0.138873239 6.30039437,0.0938028167 C6.02997183,-0.0864788734 5.66940845,0.00366197167 5.48912676,0.274084507 C5.19616901,0.747323943 4.85814085,1.24309859 4.45250704,1.82901408 C2.67222535,4.44309859 0.0130704225,8.38676056 0.0130704225,10.6402817 C0.0130704225,12.2853521 0.689126761,13.7726761 1.7708169,14.8543662 C2.85250704,15.9135211 4.33983099,16.5895775 5.98490141,16.5895775 C7.62997183,16.5895775 9.11729577,15.9135211 10.1989859,14.831831 C11.2806761,13.7501408 11.9567324,12.2628169 11.9567324,10.6177465 C11.9567324,8.36422535 9.29757746,4.44309859 7.51729577,1.82901408 Z M9.38771831,14.0205634 C8.50884507,14.8994366 7.31447887,15.4177465 5.98490141,15.4177465 C4.65532394,15.4177465 3.46095775,14.8769014 2.58208451,14.0205634 C1.70321127,13.1416901 1.18490141,11.9473239 1.18490141,10.6177465 C1.18490141,8.72478873 3.73138028,4.96140845 5.42152113,2.46 C5.62433803,2.16704225 5.80461972,1.87408451 5.98490141,1.62619718 C6.1651831,1.87408451 6.34546479,2.16704225 6.54828169,2.46 C8.23842254,4.98394366 10.7849014,8.72478873 10.7849014,10.6177465 C10.7849014,11.9473239 10.2440563,13.1416901 9.38771831,14.0205634 Z",
                        id: "Shape",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M8.47785915,9.21211268 C8.1623662,9.18957746 7.89194366,9.43746479 7.86940845,9.75295775 C7.84687324,10.2487324 7.68912676,10.7219718 7.44123944,11.1276056 C7.19335211,11.5332394 6.83278873,11.8938028 6.40461972,12.1191549 C6.13419718,12.2769014 6.02152113,12.6374648 6.17926761,12.9078873 C6.3595493,13.2233803 6.72011268,13.3135211 6.99053521,13.1557746 C7.59898592,12.8177465 8.09476056,12.3219718 8.43278873,11.7585915 C8.79335211,11.1952113 8.99616901,10.5191549 9.01870423,9.82056338 C9.04123944,9.50507042 8.79335211,9.23464789 8.47785915,9.21211268 Z",
                        id: "Shape",
                      },
                    }),
                  ]
                ),
                t._v(" "),
                n(
                  "g",
                  {
                    attrs: {
                      id: "icon-wind",
                      stroke: "#333",
                      "stroke-width": "1",
                      fill: "none",
                      "fill-rule": "evenodd",
                    },
                  },
                  [
                    n("path", {
                      attrs: {
                        d: "M0.379940476,4.55183649 L10.4860459,4.55183649 C11.74239,4.55183649 12.7608929,3.53047666 12.7608929,2.27591824 C12.7608929,1.01885999 11.7395331,0 10.4849746,0 C9.22791635,0 8.20905639,1.01814576 8.20905639,2.27591824 M0.710989624,6.98476989 L6.45267548,6.98476989 C7.16645515,6.98476989 7.74510769,7.56504562 7.74510769,8.2778108 C7.74510769,8.99199626 7.16483201,9.57085171 6.45206683,9.57085171 C5.73788135,9.57085171 5.15902593,8.99240204 5.15902593,8.2778108",
                        id: "cloud-wind",
                      },
                    }),
                  ]
                ),
                t._v(" "),
                n(
                  "g",
                  { attrs: { id: "icon-pollution", "fill-rule": "nonzero" } },
                  [
                    n("path", {
                      attrs: {
                        d: "M11.5386397,3.99200212 C11.6838208,3.67177552 11.7593555,3.32337483 11.7593555,2.96640922 C11.7593555,1.5948386 10.6434928,0.47900412 9.27195039,0.47900412 C8.85804497,0.47900412 8.45636709,0.580289941 8.09633051,0.773845879 C7.62818998,0.281701029 6.98542649,0.0039609375 6.29688012,0.0039609375 C5.39942294,0.0039609375 4.57744412,0.487822607 4.13761854,1.25590441 C3.93730082,1.2048248 3.73106655,1.17901734 3.52178947,1.17901734 C2.15021886,1.17901734 1.03438437,2.29488 1.03438437,3.66642244 C1.03438437,3.92041178 1.07216582,4.16904805 1.14699617,4.408246 C0.603236409,4.87838689 0.284333984,5.5673277 0.284333984,6.29151428 C0.284333984,7.60146818 1.30220719,8.67819704 2.58855121,8.7722703 C2.58576198,8.82033528 2.58435327,8.86851296 2.58435327,8.91660612 C2.58435327,10.2881767 3.70021593,11.4040112 5.07175837,11.4040112 C5.88697541,11.4040112 6.64699943,10.9992624 7.10789922,10.345032 C7.57102477,10.810496 8.20468802,11.0790232 8.87190661,11.0790232 C10.1760848,11.0790232 11.2490102,10.0701939 11.3513103,8.79185128 C12.4690888,8.5376929 13.284334,7.53551266 13.284334,6.36657003 C13.284334,5.26947131 12.55733,4.31118629 11.5386397,3.99200212 Z M10.8595201,8.15818592 C10.7195517,8.17560432 10.6153114,8.29599383 10.6181469,8.43704237 C10.61839,8.44860062 10.618606,8.46018589 10.618606,8.47179815 C10.618606,9.48271353 9.79616044,10.3051591 8.78524507,10.3051591 C8.18586304,10.3051591 7.62307316,10.0109907 7.27980913,9.51827948 C7.22353015,9.4374797 7.1280395,9.392921 7.03028041,9.40129263 C6.93219726,9.40969127 6.84605044,9.46983202 6.8043273,9.55900343 C6.50378562,10.2015399 5.85155427,10.6166919 5.14274688,10.6166919 C4.1318315,10.6166919 3.30938592,9.79424636 3.30938592,8.78333098 C3.30938592,8.66313051 3.32121423,8.54257897 3.34446577,8.42494401 C3.36107401,8.34106563 3.33776846,8.25427068 3.28143546,8.18994412 C3.22896422,8.13007343 3.15334945,8.09601978 3.07427802,8.09601978 C3.06844488,8.09601978 3.06261174,8.09620882 3.05685962,8.09658689 C3.01519048,8.09923341 2.9763839,8.10052966 2.93814444,8.10052966 C1.92722906,8.10052966 1.10478348,7.27808408 1.10478348,6.26716871 C1.10478348,5.67923691 1.39009418,5.12268525 1.8680335,4.77844904 C1.97159872,4.70383347 2.01035129,4.56786192 1.96166078,4.44984888 C1.87011291,4.22805457 1.82366384,3.99291967 1.82366384,3.75097943 C1.82366384,2.74006405 2.64610942,1.91761847 3.6570248,1.91761847 C3.87549745,1.91761847 4.08924419,1.9556689 4.29224282,2.03066254 C4.42864645,2.08105438 4.58074015,2.01672782 4.63955763,1.88375386 C4.93318596,1.22012629 5.59162852,0.791336565 6.31693614,0.791336565 C6.88817867,0.791336565 7.41677988,1.05080323 7.76725431,1.50319555 C7.85629069,1.61821101 8.01942954,1.64410907 8.13976504,1.56236411 C8.44376339,1.35582778 8.79950385,1.24667247 9.16858491,1.24667247 C10.1795003,1.24667247 11.0019459,2.06911805 11.0019459,3.08003343 C11.0019459,3.44417252 10.8953831,3.79602422 10.6938427,4.09748408 C10.6411284,4.17633948 10.6327028,4.27677209 10.6715364,4.36332399 C10.7103429,4.44987588 10.7909807,4.51031368 10.884932,4.52338424 C11.7849638,4.64828362 12.4636873,5.42887103 12.4636873,6.33908375 C12.4638223,7.262313 11.7741076,8.0443857 10.8595201,8.15818592 Z",
                        fill: "#333333",
                      },
                    }),
                    t._v(" "),
                    n(
                      "g",
                      {
                        attrs: {
                          transform: "translate(8.000000, 8.000000)",
                          fill: "#333",
                        },
                      },
                      [
                        n("path", {
                          attrs: {
                            d: "M1.50901563,0.808488281 C1.33354102,0.97946875 1.10200391,1.07366797 0.856933594,1.07366797 C0.69428125,1.07366797 0.53421875,1.03129102 0.394087891,0.951158203 C0.269851563,0.880115234 0.111693359,0.923279297 0.0407011719,1.04738867 C-0.0303164062,1.17154883 0.012796875,1.32975781 0.136931641,1.40077539 C0.355240234,1.52564648 0.604195313,1.59163672 0.856933594,1.59163672 C1.23781836,1.59163672 1.59778125,1.44525977 1.87050195,1.17939453 C1.97292773,1.07955859 1.97500977,0.915611328 1.87522461,0.813185547 C1.77538867,0.710785156 1.61141602,0.708677734 1.50901563,0.808488281 Z",
                            id: "Shape",
                          },
                        }),
                        t._v(" "),
                        n("path", {
                          attrs: {
                            d: "M2.07139258,0.0156914062 C1.92897656,-0.000203125 1.80118555,0.102298828 1.78539258,0.244435547 C1.78313281,0.264621094 1.7801875,0.285060547 1.77658203,0.305195312 C1.75141992,0.445960937 1.84516211,0.580505859 1.98595313,0.605667969 C2.00136523,0.608410156 2.01670117,0.609730469 2.03180859,0.609730469 C2.15487695,0.609730469 2.26403125,0.521675781 2.28642578,0.396296875 C2.29201172,0.364990234 2.29663281,0.333150391 2.30013672,0.301691406 C2.31595508,0.159529297 2.21355469,0.031484375 2.07139258,0.0156914062 Z",
                            id: "Shape",
                          },
                        }),
                      ]
                    ),
                  ]
                ),
              ]),
            ]
          ),
        ]);
      },
      i = [];
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            on: {
              click: function (t) {
                t.stopPropagation();
              },
              mousedown: function (t) {
                t.stopPropagation();
              },
            },
          },
          [
            n("transition", { attrs: { mode: "out-in" } }, [
              t.isLoading
                ? n("div", { key: "loading", staticClass: "weather-loading" }, [
                    t._v("Loading.."),
                  ])
                : n(
                    "div",
                    {
                      key: "notLoading",
                      staticClass: "flex flex-center",
                      attrs: { id: "weather" },
                      on: {
                        click: function (e) {
                          t.toggle("showWeatherInfo");
                        },
                      },
                    },
                    [
                      n(
                        "transition",
                        { attrs: { mode: "out-in", name: "fast-fade" } },
                        [
                          n(
                            "div",
                            {
                              key: t.weatherCity + t.temp,
                              staticClass: "flex flex-center pr-10",
                            },
                            [
                              t.temp
                                ? n("div", { staticClass: "temperature" }, [
                                    n(
                                      "div",
                                      { staticClass: "temperature-value" },
                                      [t._v(t._s(t.temp))]
                                    ),
                                    t._v(" "),
                                    "f" === this.settings.unit
                                      ? n(
                                          "sup",
                                          { staticClass: "temperature-unit" },
                                          [t._v("℉")]
                                        )
                                      : t._e(),
                                    t._v(" "),
                                    "c" === this.settings.unit
                                      ? n(
                                          "sup",
                                          { staticClass: "temperature-unit" },
                                          [t._v("℃")]
                                        )
                                      : t._e(),
                                  ])
                                : t._e(),
                              t._v(" "),
                              n(
                                "div",
                                {
                                  staticClass:
                                    "weather-icon flex flex-center flex-flow-column",
                                },
                                [
                                  n("i", {
                                    staticClass: "wi",
                                    class: "wi-" + t.weatherClass,
                                  }),
                                  t._v(" "),
                                  n("span", { staticClass: "weather-city" }, [
                                    t._v(t._s(t.weatherCity)),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                      t._v(" "),
                      n(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !t.showWeatherInfo,
                              expression: "!showWeatherInfo",
                            },
                          ],
                          staticClass: "arrow-down font-center opacity-0",
                        },
                        [
                          n(
                            "svg",
                            {
                              attrs: {
                                width: "23px",
                                height: "8px",
                                viewBox: "0 0 23 8",
                              },
                            },
                            [
                              n(
                                "g",
                                {
                                  attrs: {
                                    transform:
                                      "translate(-25.000000, -50.000000)",
                                    stroke: "rgba(255,255,255,0.5)",
                                    fill: "rgba(255,255,255,0.5)",
                                    "stroke-width": "2",
                                    "fill-rule": "nonzero",
                                  },
                                },
                                [
                                  n("path", {
                                    attrs: {
                                      d: "M46.4347899,51.1140206 C45.950678,51.012669 45.6164104,51.012669 45.4319868,51.1140206 L36.6142361,55.969398 L27.7791956,51.1140206 C27.5025603,50.9619931 27.0530279,50.9619931 26.7763926,51.1140206 C26.4997572,51.2660481 26.4997572,51.5130927 26.7763926,51.6651202 L36.0955448,56.7865456 C36.2338625,56.8625594 36.4067596,56.9005662 36.5969463,56.9005662 C36.7698434,56.9005662 36.9600302,56.8625594 37.0983479,56.7865456 L46.4175001,51.6651202 C46.6134502,51.5637685 46.6192134,51.3800687 46.4347899,51.1140206 Z",
                                      id: "Shape",
                                    },
                                  }),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
            ]),
            t._v(" "),
            n(
              "transition",
              [
                t.showWeatherInfo && t.localWeather && !t.isLoading
                  ? n("WeatherInfo", {
                      attrs: { data: t.localWeather, settings: t.settings },
                    })
                  : t._e(),
              ],
              1
            ),
          ],
          1
        );
      },
      i = [];
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = n(56),
      i = n.n(o);
    for (var s in o)
      "default" !== s &&
        (function (t) {
          n.d(e, t, function () {
            return o[t];
          });
        })(s);
    var a = n(158),
      r = n(1),
      c = Object(r.a)(i.a, a.a, a.b, !1, null, null, null);
    e.default = c.exports;
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "notes-arrow_box", attrs: { id: "notes" } },
          [
            t.notesMeta.count
              ? t._e()
              : n(
                  "div",
                  {
                    staticClass:
                      "col s12 note full-height relative no-padding flex flex-justify-center flex-flow-column flex-center",
                  },
                  [
                    t._m(0),
                    t._v(" "),
                    n(
                      "h5",
                      {
                        staticClass: "btn btn-flat mt-15",
                        on: { click: t.createFirstNote },
                      },
                      [t._v("Create first note")]
                    ),
                  ]
                ),
            t._v(" "),
            t.notesMeta.count
              ? n("div", { staticClass: "full-height" }, [
                  n(
                    "div",
                    {
                      staticClass:
                        "note full-height no-padding relative flex-flow-column flex",
                    },
                    [
                      n(
                        "header",
                        { staticClass: "flex widget-header flex-center" },
                        [
                          n(
                            "svg",
                            {
                              staticClass:
                                "pointer one-rem-height one-rem-width",
                              attrs: { viewBox: "0 0 23 21", version: "1.1" },
                              on: { click: t.toggleNoteList },
                            },
                            [
                              n(
                                "g",
                                {
                                  attrs: {
                                    stroke: "none",
                                    "stroke-width": "1",
                                    fill: "none",
                                    "fill-rule": "evenodd",
                                  },
                                },
                                [
                                  n(
                                    "g",
                                    {
                                      attrs: {
                                        id: "hamburger",
                                        transform:
                                          "translate(0.000000, 2.000000)",
                                        stroke: "#7d7d7d",
                                        "stroke-width": "4",
                                      },
                                    },
                                    [
                                      n("path", {
                                        attrs: {
                                          d: "M0.132183908,0 L22.8678161,0",
                                          id: "XMLID_6_",
                                        },
                                      }),
                                      t._v(" "),
                                      n("polyline", {
                                        attrs: {
                                          id: "XMLID_9_",
                                          points:
                                            "0.132183908 16.8 20.0697663 16.8 22.8678161 16.8",
                                        },
                                      }),
                                      t._v(" "),
                                      n("path", {
                                        attrs: {
                                          d: "M0.132183908,8.4 L22.8678161,8.4",
                                          id: "XMLID_8_",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                          t._v(" "),
                          n(
                            "h4",
                            { staticClass: "widget-heading ml-10 mv-0" },
                            [t._v("Notes (N)")]
                          ),
                          t._v(" "),
                          n("div", { staticClass: "button-section flex" }, [
                            n(
                              "div",
                              {
                                staticClass: "tooltip",
                                attrs: { rel: "Create" },
                              },
                              [
                                t.sortedNoted.length < 10
                                  ? n(
                                      "svg",
                                      {
                                        staticClass: "pointer",
                                        attrs: {
                                          width: "1.3em",
                                          height: "1.3em",
                                          viewBox: "0 0 49 51",
                                          version: "1.1",
                                        },
                                        on: { click: t.createNote },
                                      },
                                      [
                                        n(
                                          "g",
                                          {
                                            attrs: {
                                              stroke: "none",
                                              "stroke-width": "1",
                                              fill: "none",
                                              "fill-rule": "evenodd",
                                            },
                                          },
                                          [
                                            n(
                                              "g",
                                              {
                                                attrs: {
                                                  id: "create_note",
                                                  transform:
                                                    "translate(0.000000, -4.000000)",
                                                  "fill-rule": "nonzero",
                                                  fill: "#7d7d7d",
                                                },
                                              },
                                              [
                                                n("polyline", {
                                                  attrs: {
                                                    id: "XMLID_5_",
                                                    points:
                                                      "12.0936873 10.8107459 12.0936873 21.4530518 1.13730207 21.4530518",
                                                  },
                                                }),
                                                t._v(" "),
                                                n(
                                                  "g",
                                                  {
                                                    attrs: {
                                                      id: "Group",
                                                      transform:
                                                        "translate(32.503764, 21.426374) rotate(15.000000) translate(-32.503764, -21.426374) translate(19.385379, 2.846686)",
                                                    },
                                                  },
                                                  [
                                                    n("path", {
                                                      attrs: {
                                                        d: "M24.5589684,3.61816066 L19.7169893,0.636528265 C18.0617081,-0.379683526 15.8884477,0.122838788 14.8637498,1.76441168 L14.5034165,2.33393697 L25.3359371,8.98956585 L25.6962705,8.42004056 C26.7209684,6.77846766 26.2029892,4.63437245 24.5589684,3.61816066 Z",
                                                        id: "XMLID_4_",
                                                      },
                                                    }),
                                                    t._v(" "),
                                                    n("path", {
                                                      attrs: {
                                                        d: "M1.80166664,22.66934 L1.82418747,22.6805071 C1.77914581,22.7475101 1.75662498,22.8256802 1.74536456,22.9038504 L0.045041666,36.5054543 C0.022520833,36.7176304 0.123864582,36.9298065 0.304031246,37.0526453 C0.495458326,37.1643169 0.731927073,37.1643169 0.912093737,37.0414781 L12.4427602,29.4813091 C12.5103227,29.4366405 12.5666248,29.3808046 12.6116665,29.3026345 L12.6341873,29.3138017 L24.547708,10.2514552 L13.7264477,3.59582634 L1.80166664,22.66934 Z M4.96584368,33.043634 L1.83544789,31.122882 L2.73628121,23.908895 L11.0802498,29.0457898 L4.96584368,33.043634 Z",
                                                        id: "Shape",
                                                      },
                                                    }),
                                                  ]
                                                ),
                                                t._v(" "),
                                                n("polygon", {
                                                  attrs: {
                                                    id: "XMLID_1_",
                                                    points:
                                                      "36.4387078 30.4872863 35.7743432 30.0852684 34.3330099 31.0344772 34.3330099 51.8165667 2.26334372 51.8165667 2.26334372 21.4418846 11.868479 11.916295 27.7681871 11.916295 29.1644788 9.69402963 10.9338644 9.69402963 0.0112604165 20.5261773 0.0112604165 54.0499992 36.5738328 54.0499992 36.5738328 30.2527759",
                                                  },
                                                }),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    )
                                  : t._e(),
                              ]
                            ),
                            t._v(" "),
                            n(
                              "div",
                              {
                                staticClass: "tooltip",
                                attrs: { rel: "Delete" },
                              },
                              [
                                n(
                                  "svg",
                                  {
                                    staticClass: "pointer widget-header-icon",
                                    attrs: { viewBox: "0 0 30 36" },
                                    on: { click: t.deleteNote },
                                  },
                                  [
                                    n(
                                      "g",
                                      {
                                        attrs: {
                                          stroke: "none",
                                          "stroke-width": "1",
                                          fill: "none",
                                          "fill-rule": "evenodd",
                                        },
                                      },
                                      [
                                        n(
                                          "g",
                                          {
                                            attrs: {
                                              id: "delete_note",
                                              "fill-rule": "nonzero",
                                              fill: "#7d7d7d",
                                            },
                                          },
                                          [
                                            n("polygon", {
                                              attrs: {
                                                points:
                                                  "9.875 11.175 12.125 11.175 12.125 29.175 9.875 29.175",
                                              },
                                            }),
                                            t._v(" "),
                                            n("polygon", {
                                              attrs: {
                                                points:
                                                  "17.375 11.175 19.625 11.175 19.625 29.175 17.375 29.175",
                                              },
                                            }),
                                            t._v(" "),
                                            n("polygon", {
                                              attrs: {
                                                points:
                                                  "0.375 4.425 29.625 4.425 29.625 6.675 0.375 6.675",
                                              },
                                            }),
                                            t._v(" "),
                                            n("path", {
                                              attrs: {
                                                d: "M20.55,5.55 L18.45,5.55 L18.45,3.3 C18.45,2.625 17.925,2.1 17.25,2.1 L12.75,2.1 C12.075,2.1 11.55,2.625 11.55,3.3 L11.55,5.55 L9.45,5.55 L9.45,3.3 C9.45,1.5 10.95,0 12.75,0 L17.25,0 C19.05,0 20.55,1.5 20.55,3.3 L20.55,5.55",
                                              },
                                            }),
                                            t._v(" "),
                                            n("path", {
                                              attrs: {
                                                d: "M21.75,35.925 L8.25,35.925 C6.45,35.925 4.875,34.425 4.725,32.625 L2.625,5.625 L4.875,5.475 L6.975,32.475 C7.05,33.15 7.65,33.675 8.25,33.675 L21.75,33.675 C22.425,33.675 23.025,33.075 23.025,32.475 L25.125,5.475 L27.375,5.625 L25.275,32.625 C25.125,34.5 23.55,35.925 21.75,35.925",
                                              },
                                            }),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                            t._v(" "),
                            n(
                              "div",
                              {
                                staticClass: "tooltip tooltip-left",
                                attrs: {
                                  rel: t.isPinned ? "Stay Closed" : "Stay Open",
                                },
                              },
                              [
                                n(
                                  "svg",
                                  {
                                    staticClass: "pointer widget-header-icon",
                                    attrs: { viewBox: "0 0 19 19" },
                                    on: {
                                      click: function (e) {
                                        return (
                                          e.stopPropagation(), t.togglePin(e)
                                        );
                                      },
                                    },
                                  },
                                  [
                                    n(
                                      "g",
                                      {
                                        attrs: {
                                          transform:
                                            "translate(1.000000, 0.000000)",
                                          stroke: "#7d7d7d",
                                          "fill-rule": "nonzero",
                                          "stroke-width": "1",
                                          fill: "none",
                                        },
                                      },
                                      [
                                        n("transition", [
                                          t.isPinned
                                            ? n("rect", {
                                                attrs: {
                                                  "stroke-opacity":
                                                    "0.801007699",
                                                  "stroke-linecap": "round",
                                                  transform:
                                                    "translate(10.960155, 10.960155) rotate(45.000000) translate(-10.960155, -10.960155)",
                                                  x: "-3",
                                                  y: "9.96015511",
                                                  width: "23",
                                                  height: "1",
                                                  rx: "1",
                                                  fill: "#7d7d7d",
                                                },
                                              })
                                            : t._e(),
                                        ]),
                                        t._v(" "),
                                        n("path", {
                                          attrs: {
                                            d: "M7.00281655,13.1229233 L5.02119635,14.6064885 C2.80029168,16.6351126 1.71102055,17.5657233 1.3663145,17.6821377 C0.717957794,17.9011014 0.313245364,17.422429 0.463782908,16.7897514 L0.554073071,16.6003974 L4.87282785,10.9929336 L1.94236285,8.0624593 C1.80229043,7.92389304 1.69177273,7.7573543 1.61501465,7.57223164 C1.46332845,7.2057818 1.46332845,6.7922182 1.61568559,6.42415545 C1.76866074,6.05821492 2.05960746,5.76687235 2.42515545,5.61468559 C2.60729352,5.53854591 2.80269457,5.5 3,5.5 C5.09770613,5.5 6.54093376,5.16919277 7.9623932,4.4677864 C9.04738884,3.92528859 9.87551287,2.99917711 10.6230457,1.44324406 C10.6996323,1.24318117 10.8110815,1.06381172 10.9632597,0.911642801 C11.5519462,0.328947954 12.4998328,0.33172768 13.0834588,0.918354316 L13.0835662,0.918462371 L17.0786457,4.93654123 C17.6652723,5.52016722 17.668052,6.46805376 17.0852572,7.0568413 C16.9348715,7.20868708 16.755096,7.32085792 16.5919941,7.38093962 C14.9978136,8.14453096 14.0717905,8.97257596 13.5301435,10.0577468 C12.8318981,11.453145 12.5,12.8996296 12.5,15 C12.5,15.1964255 12.4603765,15.3933891 12.3855335,15.570902 C12.2343297,15.9391806 11.9424432,16.2302739 11.5748445,16.3833144 C11.3916194,16.4599085 11.1961257,16.5 11,16.5 C10.8038743,16.5 10.6083806,16.4599085 10.4264925,16.3838711 C10.2399036,16.3065049 10.0731494,16.1962259 9.93844661,16.0585534 L7.00281655,13.1229233 Z",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                        ]
                      ),
                      t._v(" "),
                      t.errorMessage
                        ? n("div", { staticClass: "note-error" }, [
                            t._v(t._s(t.errorMessage)),
                          ])
                        : t._e(),
                      t._v(" "),
                      n(
                        "section",
                        {
                          staticClass:
                            "flex relative note-section flex-flow-column",
                        },
                        [
                          n(
                            "div",
                            {
                              staticClass: "sidebar flex-flow-column flex",
                              class: {
                                "show-sidebar":
                                  t.showSidebar && t.notesMeta.count,
                              },
                            },
                            [
                              n(
                                "transition-group",
                                {
                                  staticClass:
                                    "note-list flex flex-flow-column flex-center",
                                  attrs: {
                                    name: "flip-list",
                                    tag: "ul",
                                    id: "note-list",
                                  },
                                },
                                t._l(t.sortedNoted, function (e, o) {
                                  return n(
                                    "li",
                                    {
                                      key: e.id,
                                      staticClass:
                                        "flex flex-flow-column pointer",
                                      class: { active: t.isActiveNote(e.id) },
                                      on: {
                                        click: function (n) {
                                          t.setCurrentNote(e.id),
                                            (t.showSidebar = !1);
                                        },
                                      },
                                    },
                                    [
                                      n("p", {
                                        staticClass: "note-title",
                                        domProps: {
                                          innerHTML: t._s(
                                            t.trimContent(e.content)
                                          ),
                                        },
                                      }),
                                      t._v(" "),
                                      n("div", { staticClass: "note-data" }, [
                                        t._v(
                                          t._s(t._f("formatDate")(e.createdOn))
                                        ),
                                      ]),
                                    ]
                                  );
                                })
                              ),
                            ],
                            1
                          ),
                          t._v(" "),
                          n("div", {
                            attrs: { id: "note", contenteditable: "true" },
                            domProps: { innerHTML: t._s(t.currentNoteContent) },
                            on: {
                              input: t.handler,
                              click: function (e) {
                                e.stopPropagation(), (t.showSidebar = !1);
                              },
                            },
                          }),
                        ]
                      ),
                    ]
                  ),
                ])
              : t._e(),
          ]
        );
      },
      i = [
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", [
            n("img", { attrs: { src: "images/note_landing_page_icon.png" } }),
          ]);
        },
      ];
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      n(160);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(58),
      s = n.n(i);
    for (var a in i)
      "default" !== a &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(a);
    var r = n(297),
      c = n(1),
      l = o,
      u = Object(c.a)(s.a, r.a, r.b, !1, l, null, null);
    e.default = u.exports;
  },
  function (t, e, n) {
    var o = n(161);
    "string" == typeof o && (o = [[t.i, o, ""]]),
      o.locals && (t.exports = o.locals);
    var i = n(3).default;
    i("0898d460", o, !0, {});
  },
  function (t, e, n) {
    (e = t.exports = n(2)(!1)),
      e.push([
        t.i,
        "#todo{background-color:hsla(0,0%,100%,.9);height:100%;border:0;resize:none;font-size:.9rem;overflow-y:auto;flex:1;border-radius:0 0 3px 3px}#todos ::-webkit-input-placeholder{color:#666}.todo-list-heading{font-weight:500;font-size:1rem;padding:1rem .2rem 0 1.4rem}#todos [type=checkbox]+label{height:auto!important}#todos [type=checkbox]+label:after{border-radius:50%;pointer-events:all!important;top:3px}#todos [type=checkbox].filled-in:checked+label:before{top:3px}#todos [type=checkbox].filled-in:not(:checked)+label:after{border:1px solid #999!important}#todos [type=checkbox].filled-in:checked+label{text-decoration:line-through;color:#666}#todos [type=checkbox].filled-in:not(:checked)+label:after{height:16px;width:16px}#todos [type=checkbox]+label{line-height:20px}div.todos{padding-top:.7rem;margin:0;overflow-y:auto}div.todos ul li{padding:.4rem 0;border-bottom:1px solid #f1f0f09e}",
        "",
      ]);
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      n(163);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(59),
      s = n.n(i);
    for (var a in i)
      "default" !== a &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(a);
    var r = n(289),
      c = n(1),
      l = o,
      u = Object(c.a)(s.a, r.a, r.b, !1, l, "data-v-0ad8aac4", null);
    e.default = u.exports;
  },
  function (t, e, n) {
    var o = n(164);
    "string" == typeof o && (o = [[t.i, o, ""]]),
      o.locals && (t.exports = o.locals);
    var i = n(3).default;
    i("42913c43", o, !0, {});
  },
  function (t, e, n) {
    (e = t.exports = n(2)(!1)),
      e.push([t.i, "#todo[data-v-0ad8aac4]{background:#fff}", ""]);
  },
  function (t, e, n) {
    var o = n(166);
    "string" == typeof o && (o = [[t.i, o, ""]]),
      o.locals && (t.exports = o.locals);
    var i = n(3).default;
    i("d50250d4", o, !0, {});
  },
  function (t, e, n) {
    (e = t.exports = n(2)(!1)),
      e.push([t.i, ".todo{padding-left:1rem;padding-right:1rem}", ""]);
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      n(168);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(61),
      s = n.n(i);
    for (var a in i)
      "default" !== a &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(a);
    var r = n(275),
      c = n(1),
      l = o,
      u = Object(c.a)(s.a, r.a, r.b, !1, l, null, null);
    e.default = u.exports;
  },
  function (t, e, n) {
    var o = n(169);
    "string" == typeof o && (o = [[t.i, o, ""]]),
      o.locals && (t.exports = o.locals);
    var i = n(3).default;
    i("8cd4c7f6", o, !0, {});
  },
  function (t, e, n) {
    (e = t.exports = n(2)(!1)),
      e.push([
        t.i,
        '.todo-btn{display:flex;justify-content:center;align-items:center;justify-items:flex-end;transition:opacity .3s ease-in-out}.todo-btn svg{fill:#666;margin-left:.5rem}.todo-title{padding-left:.5rem}.checkbox,button.checkbox:focus{background:none}.checkbox{border:none;box-shadow:none;padding:0;height:18px;width:18px}.checkbox svg{fill:#767678}.checkbox path{transform-origin:50% 50%}.checkbox path:first-child{animation:checkAnimationBase .225s}.checkbox path:last-child{animation:checkAnimationTick .225s reverse}.checkbox.completed path:first-child{fill:#7ab800;animation:checkAnimationBase .225s}.checkbox.completed path:last-child{fill:#fff;animation:checkAnimationTick .225s}.checkbox:not(.completed):hover path:last-child{opacity:1;visibility:visible}.checkbox:not(.completed) path:last-child{opacity:0;visibility:hidden;transition:opacity .2s ease-in}.todos ul li:hover .todo-btn{opacity:1}.todo-btn,.todo-due{margin-left:auto}.todo-due{position:relative;font-size:.7rem;font-weight:500}.todo-due.overdue{color:#dd4b39!important}.todo-due.pending{color:#008f7a}svg.edit-icon{fill:#767678;transition:all .23s ease-in}svg.edit-icon:hover{fill:#2196f3}@keyframes checkAnimationTick{0%{opacity:0;filter:alpha(opacity=0);transform:scale(1.8)}to{transform:scale(1)}}@keyframes checkAnimationBase{0%{opacity:0;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-webkit-transform:scale(.4);-moz-transform:scale(.4);-o-transform:scale(.4);-ms-transform:scale(.4);transform:scale(.4)}to{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}}',
        "",
      ]);
  },
  function (t, e, n) {
    var o = n(171);
    "string" == typeof o && (o = [[t.i, o, ""]]),
      o.locals && (t.exports = o.locals);
    var i = n(3).default;
    i("2841ee38", o, !0, {});
  },
  function (t, e, n) {
    (e = t.exports = n(2)(!1)),
      e.push([
        t.i,
        ".circle[data-v-441d28d3]{background:none;border:none;box-shadow:none;padding:0;height:18px;width:18px}input[type=text].title[data-v-441d28d3]{box-shadow:0 1px 0 0 rgba(33,150,243,.31);padding:0 0 3px!important;margin-left:.5rem!important;font-size:.9rem}input[type=text].title[data-v-441d28d3]:active,input[type=text].title[data-v-441d28d3]:focus{box-shadow:0 1px 0 0 rgba(33,150,243,.51)}.text-block[data-v-441d28d3]{padding-left:.5rem!important}.add-todo[data-v-441d28d3]{padding:.72rem 1rem}.sticky[data-v-441d28d3]{position:sticky;bottom:-1px;background:#fff}",
        "",
      ]);
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass: "full-width",
            class: { sticky: t.isSticky, "add-todo": !t.isEditMode },
          },
          [
            n("transition", { attrs: { mode: "out-in", name: "fast-fade" } }, [
              t.isTodoEditing
                ? n(
                    "div",
                    { key: "edit", staticClass: "flex flex-center" },
                    [
                      n(
                        "button",
                        { staticClass: "circle", attrs: { title: "Add todo" } },
                        [
                          n(
                            "svg",
                            {
                              staticClass: "svg-fill-light-grey",
                              attrs: {
                                focusable: "false",
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "18",
                                height: "18",
                                viewBox: "0 0 24 24",
                              },
                            },
                            [
                              n("g", { attrs: { "fill-rule": "evenodd" } }, [
                                n("path", {
                                  attrs: {
                                    d: "M3 12c0-4.963 4.037-9 9-9s9 4.037 9 9-4.037 9-9 9-9-4.037-9-9zm-2 0c0 6.065 4.935 11 11 11s11-4.935 11-11S18.065 1 12 1 1 5.935 1 12z",
                                  },
                                }),
                              ]),
                            ]
                          ),
                        ]
                      ),
                      t._v(" "),
                      n("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: t.defaultTitle,
                            expression: "defaultTitle",
                          },
                        ],
                        ref: "todo",
                        staticClass: "mar-0 border-0 pad-0 title",
                        attrs: { type: "text" },
                        domProps: { value: t.defaultTitle },
                        on: {
                          blur: function (e) {
                            return e.stopPropagation(), t.handleBlurOut(e);
                          },
                          keyup: [
                            function (e) {
                              return "button" in e ||
                                !t._k(e.keyCode, "enter", 13, e.key, "Enter")
                                ? (e.stopPropagation(), t.create(e))
                                : null;
                            },
                            function (e) {
                              return "button" in e ||
                                !t._k(e.keyCode, "esc", 27, e.key, "Escape")
                                ? (e.stopPropagation(), t.cancel(e))
                                : null;
                            },
                          ],
                          input: function (e) {
                            e.target.composing ||
                              (t.defaultTitle = e.target.value);
                          },
                        },
                      }),
                      t._v(" "),
                      t.isEditMode
                        ? t._e()
                        : n("Button", {
                            staticClass: "text-blue-hover",
                            attrs: {
                              text: "Add",
                              type: "primary",
                              theme: "blue",
                            },
                            on: { clicked: t.create },
                          }),
                      t._v(" "),
                      t.isEditMode
                        ? n("Button", {
                            attrs: {
                              text: "Save",
                              type: "primary",
                              theme: "blue",
                            },
                            on: { clicked: t.create },
                          })
                        : t._e(),
                    ],
                    1
                  )
                : n(
                    "div",
                    {
                      key: "add",
                      staticClass:
                        "flex flex-center semi-bold flex-justify-space-between",
                    },
                    [
                      n(
                        "div",
                        {
                          staticClass: "flex flex-center pointer",
                          on: { click: t.type },
                        },
                        [
                          n(
                            "svg",
                            {
                              staticClass: "svg-blue-fill",
                              attrs: {
                                focusable: "false",
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "18",
                                height: "18",
                                viewBox: "0 0 24 24",
                              },
                            },
                            [
                              n("path", {
                                attrs: {
                                  "fill-rule": "evenodd",
                                  d: "M20 11h-7V4c0-.553-.447-1-1-1-.552 0-1 .447-1 1v7H4c-.552 0-1 .447-1 1 0 .553.448 1 1 1h7v7c0 .553.448 1 1 1 .553 0 1-.447 1-1v-7h7c.553 0 1-.447 1-1 0-.553-.447-1-1-1",
                                },
                              }),
                            ]
                          ),
                          t._v(" "),
                          n(
                            "span",
                            {
                              staticClass:
                                "text-blue block text-block text-blue-underlined",
                            },
                            [t._v("Add todo")]
                          ),
                        ]
                      ),
                      t._v(" "),
                      t.isCompletedEnabled
                        ? n(
                            "div",
                            {
                              staticClass: "flex flex-center pointer",
                              on: { click: t.toggleCompleted },
                            },
                            [
                              n(
                                "svg",
                                {
                                  staticClass: "svg-fill-light-grey",
                                  staticStyle: {
                                    "enable-background":
                                      "new 0 0 507.289 507.289",
                                  },
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 507.289 507.289",
                                    width: "18",
                                    height: "18",
                                  },
                                },
                                [
                                  n("g", [
                                    n("path", {
                                      attrs: {
                                        d: "M153.712,375.691l-24,21.248c7.642,8.598,15.944,16.585,24.832,23.888l20.288-24.8     C167.265,389.818,160.203,383.018,153.712,375.691z",
                                      },
                                    }),
                                    t._v(" "),
                                    n("path", {
                                      attrs: {
                                        d: "M122.176,326.187l-29.408,12.624c4.547,10.596,9.946,20.805,16.144,30.528l26.992-17.152     C130.64,343.901,126.049,335.207,122.176,326.187z",
                                      },
                                    }),
                                    t._v(" "),
                                    n("path", {
                                      attrs: {
                                        d: "M399.595,66.763c-32.9-19.075-70.253-29.126-108.283-29.136C183.147,37.801,91.764,117.904,77.424,225.115l-54.8-54.8     L0,192.939l91.312,91.312l91.312-91.312L160,170.315l-49.488,49.424c18.803-99.758,114.916-165.384,214.674-146.581     S490.57,188.074,471.767,287.831S356.851,453.216,257.093,434.412c-20.449-3.854-40.095-11.153-58.101-21.586l-16.08,27.664     c103.202,59.835,235.37,24.679,295.205-78.523C537.953,258.766,502.797,126.598,399.595,66.763z",
                                      },
                                    }),
                                    t._v(" "),
                                    n("polygon", {
                                      attrs: {
                                        points:
                                          "267.312,109.627 267.312,285.627 337.712,338.427 356.912,312.827 299.312,269.627 299.312,109.627",
                                      },
                                    }),
                                  ]),
                                ]
                              ),
                              t._v(" "),
                              n(
                                "transition",
                                {
                                  attrs: { mode: "out-in", name: "fast-fade" },
                                },
                                [
                                  t.showCompleted
                                    ? n(
                                        "span",
                                        {
                                          staticClass:
                                            "text-light-grey block text-block font-xsmall",
                                        },
                                        [t._v("Hide completed")]
                                      )
                                    : n(
                                        "span",
                                        {
                                          staticClass:
                                            "text-light-grey block text-block font-xsmall",
                                        },
                                        [t._v("Show completed")]
                                      ),
                                ]
                              ),
                            ],
                            1
                          )
                        : t._e(),
                    ]
                  ),
            ]),
          ],
          1
        );
      },
      i = [];
  },
  function (t, e, n) {
    t.exports = {
      addDays: n(18),
      addHours: n(63),
      addISOYears: n(64),
      addMilliseconds: n(19),
      addMinutes: n(66),
      addMonths: n(26),
      addQuarters: n(67),
      addSeconds: n(68),
      addWeeks: n(31),
      addYears: n(69),
      areRangesOverlapping: n(174),
      closestIndexTo: n(175),
      closestTo: n(176),
      compareAsc: n(21),
      compareDesc: n(32),
      differenceInCalendarDays: n(25),
      differenceInCalendarISOWeeks: n(177),
      differenceInCalendarISOYears: n(70),
      differenceInCalendarMonths: n(71),
      differenceInCalendarQuarters: n(178),
      differenceInCalendarWeeks: n(179),
      differenceInCalendarYears: n(73),
      differenceInDays: n(74),
      differenceInHours: n(180),
      differenceInISOYears: n(181),
      differenceInMilliseconds: n(27),
      differenceInMinutes: n(182),
      differenceInMonths: n(33),
      differenceInQuarters: n(183),
      differenceInSeconds: n(34),
      differenceInWeeks: n(184),
      differenceInYears: n(185),
      distanceInWords: n(76),
      distanceInWordsStrict: n(189),
      distanceInWordsToNow: n(190),
      eachDay: n(191),
      endOfDay: n(36),
      endOfHour: n(192),
      endOfISOWeek: n(193),
      endOfISOYear: n(194),
      endOfMinute: n(195),
      endOfMonth: n(78),
      endOfQuarter: n(196),
      endOfSecond: n(197),
      endOfToday: n(198),
      endOfTomorrow: n(199),
      endOfWeek: n(77),
      endOfYear: n(200),
      endOfYesterday: n(201),
      format: n(202),
      getDate: n(203),
      getDay: n(204),
      getDayOfYear: n(79),
      getDaysInMonth: n(30),
      getDaysInYear: n(205),
      getHours: n(206),
      getISODay: n(83),
      getISOWeek: n(37),
      getISOWeeksInYear: n(207),
      getISOYear: n(11),
      getMilliseconds: n(208),
      getMinutes: n(209),
      getMonth: n(210),
      getOverlappingDaysInRanges: n(211),
      getQuarter: n(72),
      getSeconds: n(212),
      getTime: n(213),
      getYear: n(214),
      isAfter: n(215),
      isBefore: n(216),
      isDate: n(29),
      isEqual: n(217),
      isFirstDayOfMonth: n(218),
      isFriday: n(219),
      isFuture: n(220),
      isLastDayOfMonth: n(221),
      isLeapYear: n(82),
      isMonday: n(222),
      isPast: n(223),
      isSameDay: n(224),
      isSameHour: n(84),
      isSameISOWeek: n(86),
      isSameISOYear: n(87),
      isSameMinute: n(88),
      isSameMonth: n(90),
      isSameQuarter: n(91),
      isSameSecond: n(93),
      isSameWeek: n(38),
      isSameYear: n(95),
      isSaturday: n(225),
      isSunday: n(226),
      isThisHour: n(227),
      isThisISOWeek: n(228),
      isThisISOYear: n(229),
      isThisMinute: n(230),
      isThisMonth: n(231),
      isThisQuarter: n(232),
      isThisSecond: n(233),
      isThisWeek: n(234),
      isThisYear: n(235),
      isThursday: n(236),
      isToday: n(237),
      isTomorrow: n(238),
      isTuesday: n(239),
      isValid: n(81),
      isWednesday: n(240),
      isWeekend: n(241),
      isWithinRange: n(242),
      isYesterday: n(243),
      lastDayOfISOWeek: n(244),
      lastDayOfISOYear: n(245),
      lastDayOfMonth: n(246),
      lastDayOfQuarter: n(247),
      lastDayOfWeek: n(96),
      lastDayOfYear: n(248),
      max: n(249),
      min: n(250),
      parse: n(0),
      setDate: n(251),
      setDay: n(252),
      setDayOfYear: n(253),
      setHours: n(254),
      setISODay: n(255),
      setISOWeek: n(256),
      setISOYear: n(65),
      setMilliseconds: n(257),
      setMinutes: n(258),
      setMonth: n(97),
      setQuarter: n(259),
      setSeconds: n(260),
      setYear: n(261),
      startOfDay: n(13),
      startOfHour: n(85),
      startOfISOWeek: n(12),
      startOfISOYear: n(20),
      startOfMinute: n(89),
      startOfMonth: n(262),
      startOfQuarter: n(92),
      startOfSecond: n(94),
      startOfToday: n(263),
      startOfTomorrow: n(264),
      startOfWeek: n(24),
      startOfYear: n(80),
      startOfYesterday: n(265),
      subDays: n(266),
      subHours: n(267),
      subISOYears: n(75),
      subMilliseconds: n(268),
      subMinutes: n(269),
      subMonths: n(270),
      subQuarters: n(271),
      subSeconds: n(272),
      subWeeks: n(273),
      subYears: n(274),
    };
  },
  function (t, e, n) {
    function o(t, e, n, o) {
      var s = i(t).getTime(),
        a = i(e).getTime(),
        r = i(n).getTime(),
        c = i(o).getTime();
      if (s > a || r > c)
        throw new Error(
          "The start of the range cannot be after the end of the range"
        );
      return s < c && r < a;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      if (!(e instanceof Array))
        throw new TypeError(toString.call(e) + " is not an instance of Array");
      var n,
        o,
        s = i(t),
        a = s.getTime();
      return (
        e.forEach(function (t, e) {
          var s = i(t),
            r = Math.abs(a - s.getTime());
          (void 0 === n || r < o) && ((n = e), (o = r));
        }),
        n
      );
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      if (!(e instanceof Array))
        throw new TypeError(toString.call(e) + " is not an instance of Array");
      var n,
        o,
        s = i(t),
        a = s.getTime();
      return (
        e.forEach(function (t) {
          var e = i(t),
            s = Math.abs(a - e.getTime());
          (void 0 === n || s < o) && ((n = e), (o = s));
        }),
        n
      );
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = i(e),
        r = n.getTime() - n.getTimezoneOffset() * s,
        c = o.getTime() - o.getTimezoneOffset() * s;
      return Math.round((r - c) / a);
    }
    var i = n(12),
      s = 6e4,
      a = 6048e5;
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = s(t),
        o = s(e);
      return 4 * (n.getFullYear() - o.getFullYear()) + (i(n) - i(o));
    }
    var i = n(72),
      s = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e, n) {
      var o = i(t, n),
        r = i(e, n),
        c = o.getTime() - o.getTimezoneOffset() * s,
        l = r.getTime() - r.getTimezoneOffset() * s;
      return Math.round((c - l) / a);
    }
    var i = n(24),
      s = 6e4,
      a = 6048e5;
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t, e) / s;
      return n > 0 ? Math.floor(n) : Math.ceil(n);
    }
    var i = n(27),
      s = 36e5;
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = i(e),
        c = a(n, o),
        l = Math.abs(s(n, o));
      return (n = r(n, c * l)), c * (l - (a(n, o) === -c));
    }
    var i = n(0),
      s = n(70),
      a = n(21),
      r = n(75);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t, e) / s;
      return n > 0 ? Math.floor(n) : Math.ceil(n);
    }
    var i = n(27),
      s = 6e4;
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t, e) / 3;
      return n > 0 ? Math.floor(n) : Math.ceil(n);
    }
    var i = n(33);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t, e) / 7;
      return n > 0 ? Math.floor(n) : Math.ceil(n);
    }
    var i = n(74);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = i(e),
        r = a(n, o),
        c = Math.abs(s(n, o));
      return n.setFullYear(n.getFullYear() - r * c), r * (c - (a(n, o) === -r));
    }
    var i = n(0),
      s = n(73),
      a = n(21);
    t.exports = o;
  },
  function (t, e) {
    function n() {
      function t(t, n, o) {
        o = o || {};
        var i;
        return (
          (i =
            "string" == typeof e[t]
              ? e[t]
              : 1 === n
              ? e[t].one
              : e[t].other.replace("{{count}}", n)),
          o.addSuffix ? (o.comparison > 0 ? "in " + i : i + " ago") : i
        );
      }
      var e = {
        lessThanXSeconds: {
          one: "less than a second",
          other: "less than {{count}} seconds",
        },
        xSeconds: { one: "1 second", other: "{{count}} seconds" },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
          one: "less than a minute",
          other: "less than {{count}} minutes",
        },
        xMinutes: { one: "1 minute", other: "{{count}} minutes" },
        aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
        xHours: { one: "1 hour", other: "{{count}} hours" },
        xDays: { one: "1 day", other: "{{count}} days" },
        aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
        xMonths: { one: "1 month", other: "{{count}} months" },
        aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
        xYears: { one: "1 year", other: "{{count}} years" },
        overXYears: { one: "over 1 year", other: "over {{count}} years" },
        almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
      };
      return { localize: t };
    }
    t.exports = n;
  },
  function (t, e, n) {
    function o() {
      var t = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        e = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        n = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        o = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        a = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        r = ["AM", "PM"],
        c = ["am", "pm"],
        l = ["a.m.", "p.m."],
        u = {
          MMM: function (e) {
            return t[e.getMonth()];
          },
          MMMM: function (t) {
            return e[t.getMonth()];
          },
          dd: function (t) {
            return n[t.getDay()];
          },
          ddd: function (t) {
            return o[t.getDay()];
          },
          dddd: function (t) {
            return a[t.getDay()];
          },
          A: function (t) {
            return t.getHours() / 12 >= 1 ? r[1] : r[0];
          },
          a: function (t) {
            return t.getHours() / 12 >= 1 ? c[1] : c[0];
          },
          aa: function (t) {
            return t.getHours() / 12 >= 1 ? l[1] : l[0];
          },
        };
      return (
        ["M", "D", "DDD", "d", "Q", "W"].forEach(function (t) {
          u[t + "o"] = function (e, n) {
            return i(n[t](e));
          };
        }),
        { formatters: u, formattingTokensRegExp: s(u) }
      );
    }
    function i(t) {
      var e = t % 100;
      if (e > 20 || e < 10)
        switch (e % 10) {
          case 1:
            return t + "st";
          case 2:
            return t + "nd";
          case 3:
            return t + "rd";
        }
      return t + "th";
    }
    var s = n(188);
    t.exports = o;
  },
  function (t, e) {
    function n(t) {
      var e = [];
      for (var n in t) t.hasOwnProperty(n) && e.push(n);
      var i = o.concat(e).sort().reverse();
      return new RegExp("(\\[[^\\[]*\\])|(\\\\)?(" + i.join("|") + "|.)", "g");
    }
    var o = [
      "M",
      "MM",
      "Q",
      "D",
      "DD",
      "DDD",
      "DDDD",
      "d",
      "E",
      "W",
      "WW",
      "YY",
      "YYYY",
      "GG",
      "GGGG",
      "H",
      "HH",
      "h",
      "hh",
      "m",
      "mm",
      "s",
      "ss",
      "S",
      "SS",
      "SSS",
      "Z",
      "ZZ",
      "X",
      "x",
    ];
    t.exports = n;
  },
  function (t, e, n) {
    function o(t, e, n) {
      var o = n || {},
        d = i(t, e),
        f = o.locale,
        h = r.distanceInWords.localize;
      f &&
        f.distanceInWords &&
        f.distanceInWords.localize &&
        (h = f.distanceInWords.localize);
      var p,
        v,
        g = { addSuffix: Boolean(o.addSuffix), comparison: d };
      d > 0 ? ((p = s(t)), (v = s(e))) : ((p = s(e)), (v = s(t)));
      var m,
        _,
        b,
        y,
        C,
        T = Math[o.partialMethod ? String(o.partialMethod) : "floor"],
        w = a(v, p),
        x = v.getTimezoneOffset() - p.getTimezoneOffset(),
        k = T(w / 60) - x;
      if (
        "s" ===
        (m = o.unit
          ? String(o.unit)
          : k < 1
          ? "s"
          : k < 60
          ? "m"
          : k < c
          ? "h"
          : k < l
          ? "d"
          : k < u
          ? "M"
          : "Y")
      )
        return h("xSeconds", w, g);
      if ("m" === m) return h("xMinutes", k, g);
      if ("h" === m) return (_ = T(k / 60)), h("xHours", _, g);
      if ("d" === m) return (b = T(k / c)), h("xDays", b, g);
      if ("M" === m) return (y = T(k / l)), h("xMonths", y, g);
      if ("Y" === m) return (C = T(k / u)), h("xYears", C, g);
      throw new Error("Unknown unit: " + m);
    }
    var i = n(32),
      s = n(0),
      a = n(34),
      r = n(35),
      c = 1440,
      l = 43200,
      u = 525600;
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      return i(Date.now(), t, e);
    }
    var i = n(76);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e, n) {
      var o = i(t),
        s = i(e),
        a = void 0 !== n ? n : 1,
        r = s.getTime();
      if (o.getTime() > r)
        throw new Error("The first date cannot be after the second date");
      var c = [],
        l = o;
      for (l.setHours(0, 0, 0, 0); l.getTime() <= r; )
        c.push(i(l)), l.setDate(l.getDate() + a);
      return c;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      var e = i(t);
      return e.setMinutes(59, 59, 999), e;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return i(t, { weekStartsOn: 1 });
    }
    var i = n(77);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      var e = i(t),
        n = new Date(0);
      n.setFullYear(e + 1, 0, 4), n.setHours(0, 0, 0, 0);
      var o = s(n);
      return o.setMilliseconds(o.getMilliseconds() - 1), o;
    }
    var i = n(11),
      s = n(12);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      var e = i(t);
      return e.setSeconds(59, 999), e;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      var e = i(t),
        n = e.getMonth(),
        o = n - (n % 3) + 3;
      return e.setMonth(o, 0), e.setHours(23, 59, 59, 999), e;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      var e = i(t);
      return e.setMilliseconds(999), e;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o() {
      return i(new Date());
    }
    var i = n(36);
    t.exports = o;
  },
  function (t, e) {
    function n() {
      var t = new Date(),
        e = t.getFullYear(),
        n = t.getMonth(),
        o = t.getDate(),
        i = new Date(0);
      return i.setFullYear(e, n, o + 1), i.setHours(23, 59, 59, 999), i;
    }
    t.exports = n;
  },
  function (t, e, n) {
    function o(t) {
      var e = i(t),
        n = e.getFullYear();
      return e.setFullYear(n + 1, 0, 0), e.setHours(23, 59, 59, 999), e;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e) {
    function n() {
      var t = new Date(),
        e = t.getFullYear(),
        n = t.getMonth(),
        o = t.getDate(),
        i = new Date(0);
      return i.setFullYear(e, n, o - 1), i.setHours(23, 59, 59, 999), i;
    }
    t.exports = n;
  },
  function (t, e, n) {
    function o(t, e, n) {
      var o = e ? String(e) : "YYYY-MM-DDTHH:mm:ss.SSSZ",
        s = n || {},
        a = s.locale,
        r = h.format.formatters,
        c = h.format.formattingTokensRegExp;
      a &&
        a.format &&
        a.format.formatters &&
        ((r = a.format.formatters),
        a.format.formattingTokensRegExp &&
          (c = a.format.formattingTokensRegExp));
      var l = d(t);
      return f(l) ? i(o, r, c)(l) : "Invalid Date";
    }
    function i(t, e, n) {
      var o,
        i,
        a = t.match(n),
        r = a.length;
      for (o = 0; o < r; o++) (i = e[a[o]] || p[a[o]]), (a[o] = i || s(a[o]));
      return function (t) {
        for (var e = "", n = 0; n < r; n++)
          a[n] instanceof Function ? (e += a[n](t, p)) : (e += a[n]);
        return e;
      };
    }
    function s(t) {
      return t.match(/\[[\s\S]/)
        ? t.replace(/^\[|]$/g, "")
        : t.replace(/\\/g, "");
    }
    function a(t, e) {
      e = e || "";
      var n = t > 0 ? "-" : "+",
        o = Math.abs(t),
        i = Math.floor(o / 60),
        s = o % 60;
      return n + r(i, 2) + e + r(s, 2);
    }
    function r(t, e) {
      for (var n = Math.abs(t).toString(); n.length < e; ) n = "0" + n;
      return n;
    }
    var c = n(79),
      l = n(37),
      u = n(11),
      d = n(0),
      f = n(81),
      h = n(35),
      p = {
        M: function (t) {
          return t.getMonth() + 1;
        },
        MM: function (t) {
          return r(t.getMonth() + 1, 2);
        },
        Q: function (t) {
          return Math.ceil((t.getMonth() + 1) / 3);
        },
        D: function (t) {
          return t.getDate();
        },
        DD: function (t) {
          return r(t.getDate(), 2);
        },
        DDD: function (t) {
          return c(t);
        },
        DDDD: function (t) {
          return r(c(t), 3);
        },
        d: function (t) {
          return t.getDay();
        },
        E: function (t) {
          return t.getDay() || 7;
        },
        W: function (t) {
          return l(t);
        },
        WW: function (t) {
          return r(l(t), 2);
        },
        YY: function (t) {
          return r(t.getFullYear(), 4).substr(2);
        },
        YYYY: function (t) {
          return r(t.getFullYear(), 4);
        },
        GG: function (t) {
          return String(u(t)).substr(2);
        },
        GGGG: function (t) {
          return u(t);
        },
        H: function (t) {
          return t.getHours();
        },
        HH: function (t) {
          return r(t.getHours(), 2);
        },
        h: function (t) {
          var e = t.getHours();
          return 0 === e ? 12 : e > 12 ? e % 12 : e;
        },
        hh: function (t) {
          return r(p.h(t), 2);
        },
        m: function (t) {
          return t.getMinutes();
        },
        mm: function (t) {
          return r(t.getMinutes(), 2);
        },
        s: function (t) {
          return t.getSeconds();
        },
        ss: function (t) {
          return r(t.getSeconds(), 2);
        },
        S: function (t) {
          return Math.floor(t.getMilliseconds() / 100);
        },
        SS: function (t) {
          return r(Math.floor(t.getMilliseconds() / 10), 2);
        },
        SSS: function (t) {
          return r(t.getMilliseconds(), 3);
        },
        Z: function (t) {
          return a(t.getTimezoneOffset(), ":");
        },
        ZZ: function (t) {
          return a(t.getTimezoneOffset());
        },
        X: function (t) {
          return Math.floor(t.getTime() / 1e3);
        },
        x: function (t) {
          return t.getTime();
        },
      };
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return i(t).getDate();
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return i(t).getDay();
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return i(t) ? 366 : 365;
    }
    var i = n(82);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return i(t).getHours();
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      var e = i(t),
        n = i(s(e, 60)),
        o = n.valueOf() - e.valueOf();
      return Math.round(o / a);
    }
    var i = n(20),
      s = n(31),
      a = 6048e5;
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return i(t).getMilliseconds();
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return i(t).getMinutes();
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return i(t).getMonth();
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e, n, o) {
      var a = i(t).getTime(),
        r = i(e).getTime(),
        c = i(n).getTime(),
        l = i(o).getTime();
      if (a > r || c > l)
        throw new Error(
          "The start of the range cannot be after the end of the range"
        );
      if (!(a < l && c < r)) return 0;
      var u = c < a ? a : c,
        d = l > r ? r : l,
        f = d - u;
      return Math.ceil(f / s);
    }
    var i = n(0),
      s = 864e5;
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return i(t).getSeconds();
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return i(t).getTime();
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return i(t).getFullYear();
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = i(e);
      return n.getTime() > o.getTime();
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = i(e);
      return n.getTime() < o.getTime();
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = i(e);
      return n.getTime() === o.getTime();
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return 1 === i(t).getDate();
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return 5 === i(t).getDay();
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return i(t).getTime() > new Date().getTime();
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      var e = i(t);
      return s(e).getTime() === a(e).getTime();
    }
    var i = n(0),
      s = n(36),
      a = n(78);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return 1 === i(t).getDay();
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return i(t).getTime() < new Date().getTime();
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = i(e);
      return n.getTime() === o.getTime();
    }
    var i = n(13);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return 6 === i(t).getDay();
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return 0 === i(t).getDay();
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return i(new Date(), t);
    }
    var i = n(84);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return i(new Date(), t);
    }
    var i = n(86);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return i(new Date(), t);
    }
    var i = n(87);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return i(new Date(), t);
    }
    var i = n(88);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return i(new Date(), t);
    }
    var i = n(90);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return i(new Date(), t);
    }
    var i = n(91);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return i(new Date(), t);
    }
    var i = n(93);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      return i(new Date(), t, e);
    }
    var i = n(38);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return i(new Date(), t);
    }
    var i = n(95);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return 4 === i(t).getDay();
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return i(t).getTime() === i(new Date()).getTime();
    }
    var i = n(13);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      var e = new Date();
      return e.setDate(e.getDate() + 1), i(t).getTime() === i(e).getTime();
    }
    var i = n(13);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return 2 === i(t).getDay();
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return 3 === i(t).getDay();
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      var e = i(t),
        n = e.getDay();
      return 0 === n || 6 === n;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e, n) {
      var o = i(t).getTime(),
        s = i(e).getTime(),
        a = i(n).getTime();
      if (s > a)
        throw new Error(
          "The start of the range cannot be after the end of the range"
        );
      return o >= s && o <= a;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      var e = new Date();
      return e.setDate(e.getDate() - 1), i(t).getTime() === i(e).getTime();
    }
    var i = n(13);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      return i(t, { weekStartsOn: 1 });
    }
    var i = n(96);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      var e = i(t),
        n = new Date(0);
      n.setFullYear(e + 1, 0, 4), n.setHours(0, 0, 0, 0);
      var o = s(n);
      return o.setDate(o.getDate() - 1), o;
    }
    var i = n(11),
      s = n(12);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      var e = i(t),
        n = e.getMonth();
      return (
        e.setFullYear(e.getFullYear(), n + 1, 0), e.setHours(0, 0, 0, 0), e
      );
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      var e = i(t),
        n = e.getMonth(),
        o = n - (n % 3) + 3;
      return e.setMonth(o, 0), e.setHours(0, 0, 0, 0), e;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      var e = i(t),
        n = e.getFullYear();
      return e.setFullYear(n + 1, 0, 0), e.setHours(0, 0, 0, 0), e;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o() {
      var t = Array.prototype.slice.call(arguments),
        e = t.map(function (t) {
          return i(t);
        }),
        n = Math.max.apply(null, e);
      return new Date(n);
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o() {
      var t = Array.prototype.slice.call(arguments),
        e = t.map(function (t) {
          return i(t);
        }),
        n = Math.min.apply(null, e);
      return new Date(n);
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = Number(e);
      return n.setDate(o), n;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e, n) {
      var o = n ? Number(n.weekStartsOn) || 0 : 0,
        a = i(t),
        r = Number(e),
        c = a.getDay();
      return s(a, (((r % 7) + 7) % 7 < o ? 7 : 0) + r - c);
    }
    var i = n(0),
      s = n(18);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = Number(e);
      return n.setMonth(0), n.setDate(o), n;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = Number(e);
      return n.setHours(o), n;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = Number(e),
        r = a(n);
      return s(n, o - r);
    }
    var i = n(0),
      s = n(18),
      a = n(83);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = Number(e),
        a = s(n) - o;
      return n.setDate(n.getDate() - 7 * a), n;
    }
    var i = n(0),
      s = n(37);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = Number(e);
      return n.setMilliseconds(o), n;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = Number(e);
      return n.setMinutes(o), n;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = Number(e),
        a = Math.floor(n.getMonth() / 3) + 1,
        r = o - a;
      return s(n, n.getMonth() + 3 * r);
    }
    var i = n(0),
      s = n(97);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = Number(e);
      return n.setSeconds(o), n;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = i(t),
        o = Number(e);
      return n.setFullYear(o), n;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t) {
      var e = i(t);
      return e.setDate(1), e.setHours(0, 0, 0, 0), e;
    }
    var i = n(0);
    t.exports = o;
  },
  function (t, e, n) {
    function o() {
      return i(new Date());
    }
    var i = n(13);
    t.exports = o;
  },
  function (t, e) {
    function n() {
      var t = new Date(),
        e = t.getFullYear(),
        n = t.getMonth(),
        o = t.getDate(),
        i = new Date(0);
      return i.setFullYear(e, n, o + 1), i.setHours(0, 0, 0, 0), i;
    }
    t.exports = n;
  },
  function (t, e) {
    function n() {
      var t = new Date(),
        e = t.getFullYear(),
        n = t.getMonth(),
        o = t.getDate(),
        i = new Date(0);
      return i.setFullYear(e, n, o - 1), i.setHours(0, 0, 0, 0), i;
    }
    t.exports = n;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = Number(e);
      return i(t, -n);
    }
    var i = n(18);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = Number(e);
      return i(t, -n);
    }
    var i = n(63);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = Number(e);
      return i(t, -n);
    }
    var i = n(19);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = Number(e);
      return i(t, -n);
    }
    var i = n(66);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = Number(e);
      return i(t, -n);
    }
    var i = n(26);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = Number(e);
      return i(t, -n);
    }
    var i = n(67);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = Number(e);
      return i(t, -n);
    }
    var i = n(68);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = Number(e);
      return i(t, -n);
    }
    var i = n(31);
    t.exports = o;
  },
  function (t, e, n) {
    function o(t, e) {
      var n = Number(e);
      return i(t, -n);
    }
    var i = n(69);
    t.exports = o;
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass: "flex flex-center",
            on: {
              mouseenter: function (e) {
                t.showHoverBtn = !0;
              },
              mouseleave: function (e) {
                t.showHoverBtn = !1;
              },
            },
          },
          [
            t.isEditing
              ? [
                  n("AddTodo", {
                    attrs: { title: t.todoTitle, isEditMode: t.isEditing },
                    on: { toggleEditMode: t.toggleEditMode, edit: t.editTodo },
                  }),
                ]
              : [
                  n(
                    "button",
                    {
                      staticClass: "checkbox",
                      class: { completed: t.isCompleted },
                      on: { click: t.changed },
                    },
                    [
                      n("transition", { attrs: { name: "fast-fade" } }, [
                        t.isCompleted
                          ? n(
                              "svg",
                              {
                                key: "completed",
                                attrs: {
                                  focusable: "false",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "18",
                                  height: "18",
                                  viewBox: "0 0 24 24",
                                },
                              },
                              [
                                n("g", { attrs: { "fill-rule": "evenodd" } }, [
                                  n("path", {
                                    attrs: {
                                      d: "M11,0 C4.935,0 0,4.935 0,11 C0,17.065 4.935,22 11,22 C17.065,22 22,17.065 22,11 C22,4.935 17.065,0 11,0",
                                    },
                                  }),
                                  t._v(" "),
                                  n("path", {
                                    attrs: {
                                      d: "M15.707,9.207 L10.707,14.207 C10.512,14.402 10.256,14.5 10,14.5 C9.744,14.5 9.488,14.402 9.293,14.207 L6.293,11.207 C5.902,10.816 5.902,10.184 6.293,9.793 C6.684,9.402 7.316,9.402 7.707,9.793 L10,12.086 L14.293,7.793 C14.684,7.402 15.316,7.402 15.707,7.793 C16.098,8.184 16.098,8.816 15.707,9.207",
                                      fill: "#FFFFFF",
                                    },
                                  }),
                                ]),
                              ]
                            )
                          : n(
                              "svg",
                              {
                                key: "not-completed",
                                attrs: {
                                  focusable: "false",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "18",
                                  height: "18",
                                  viewBox: "0 0 24 24",
                                },
                              },
                              [
                                n("g", { attrs: { "fill-rule": "evenodd" } }, [
                                  n("path", {
                                    attrs: {
                                      d: "M3 12c0-4.963 4.037-9 9-9s9 4.037 9 9-4.037 9-9 9-9-4.037-9-9zm-2 0c0 6.065 4.935 11 11 11s11-4.935 11-11S18.065 1 12 1 1 5.935 1 12z",
                                    },
                                  }),
                                  t._v(" "),
                                  n("path", {
                                    attrs: {
                                      d: "M15.293 8.793L11 13.086l-2.293-2.293c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l3 3c.195.195.451.293.707.293.256 0 .512-.098.707-.293l5-5c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0",
                                    },
                                  }),
                                ]),
                              ]
                            ),
                      ]),
                    ],
                    1
                  ),
                  t._v(" "),
                  n(
                    "span",
                    {
                      staticClass: "todo-title",
                      on: {
                        click: function (e) {
                          e.stopPropagation(), t.editMode(t.todo);
                        },
                      },
                    },
                    [t._v(" " + t._s(t.todo.title))]
                  ),
                  t._v(" "),
                  n(
                    "transition",
                    { attrs: { mode: "out-in", name: "fast-fade" } },
                    [
                      t.showHoverBtn
                        ? n(
                            "div",
                            {
                              key: "btn",
                              staticClass: "todo-btn flex-no-shrink",
                            },
                            [
                              n(
                                "svg",
                                {
                                  staticClass: "pointer edit-icon",
                                  staticStyle: {
                                    "enable-background":
                                      "new 0 0 469.331 469.331",
                                  },
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    version: "1.1",
                                    x: "0px",
                                    y: "0px",
                                    viewBox: "0 0 469.331 469.331",
                                    "xml:space": "preserve",
                                    width: "16px",
                                    height: "16px",
                                  },
                                  on: {
                                    click: function (e) {
                                      e.stopPropagation(), t.editMode(t.todo);
                                    },
                                  },
                                },
                                [
                                  n("g", [
                                    n("path", {
                                      attrs: {
                                        d: "M438.931,30.403c-40.4-40.5-106.1-40.5-146.5,0l-268.6,268.5c-2.1,2.1-3.4,4.8-3.8,7.7l-19.9,147.4   c-0.6,4.2,0.9,8.4,3.8,11.3c2.5,2.5,6,4,9.5,4c0.6,0,1.2,0,1.8-0.1l88.8-12c7.4-1,12.6-7.8,11.6-15.2c-1-7.4-7.8-12.6-15.2-11.6   l-71.2,9.6l13.9-102.8l108.2,108.2c2.5,2.5,6,4,9.5,4s7-1.4,9.5-4l268.6-268.5c19.6-19.6,30.4-45.6,30.4-73.3   S458.531,49.903,438.931,30.403z M297.631,63.403l45.1,45.1l-245.1,245.1l-45.1-45.1L297.631,63.403z M160.931,416.803l-44.1-44.1   l245.1-245.1l44.1,44.1L160.931,416.803z M424.831,152.403l-107.9-107.9c13.7-11.3,30.8-17.5,48.8-17.5c20.5,0,39.7,8,54.2,22.4   s22.4,33.7,22.4,54.2C442.331,121.703,436.131,138.703,424.831,152.403z",
                                      },
                                    }),
                                  ]),
                                ]
                              ),
                              t._v(" "),
                              n(
                                "svg",
                                {
                                  staticClass: "delete-icon pointer",
                                  staticStyle: {
                                    "enable-background":
                                      "new 0 0 482.428 482.429",
                                  },
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    version: "1.1",
                                    x: "0px",
                                    y: "0px",
                                    width: "16px",
                                    height: "16px",
                                    viewBox: "0 0 482.428 482.429",
                                    "xml:space": "preserve",
                                  },
                                  on: {
                                    click: function (e) {
                                      e.stopPropagation(), t.deleteTodo(t.todo);
                                    },
                                  },
                                },
                                [
                                  n("g", [
                                    n("g", [
                                      n("path", {
                                        attrs: {
                                          d: "M381.163,57.799h-75.094C302.323,25.316,274.686,0,241.214,0c-33.471,0-61.104,25.315-64.85,57.799h-75.098    c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.369c0,30.39,24.724,55.117,55.112,55.117    h210.236c30.389,0,55.111-24.729,55.111-55.117V166.944c20.369-8.1,34.83-27.977,34.83-51.199v-2.828    C436.274,82.527,411.551,57.799,381.163,57.799z M241.214,26.139c19.037,0,34.927,13.645,38.443,31.66h-76.879    C206.293,39.783,222.184,26.139,241.214,26.139z M375.305,427.312c0,15.978-13,28.979-28.973,28.979H136.096    c-15.973,0-28.973-13.002-28.973-28.979V170.861h268.182V427.312z M410.135,115.744c0,15.978-13,28.979-28.973,28.979H101.266    c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.897c15.973,0,28.973,13.001,28.973,28.979    V115.744z",
                                        },
                                      }),
                                      t._v(" "),
                                      n("path", {
                                        attrs: {
                                          d: "M171.144,422.863c7.218,0,13.069-5.853,13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07    c-7.217,0-13.069,5.854-13.069,13.07v147.154C158.074,417.012,163.926,422.863,171.144,422.863z",
                                        },
                                      }),
                                      t._v(" "),
                                      n("path", {
                                        attrs: {
                                          d: "M241.214,422.863c7.218,0,13.07-5.853,13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07    c-7.217,0-13.069,5.854-13.069,13.07v147.154C228.145,417.012,233.996,422.863,241.214,422.863z",
                                        },
                                      }),
                                      t._v(" "),
                                      n("path", {
                                        attrs: {
                                          d: "M311.284,422.863c7.217,0,13.068-5.853,13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07    c-7.219,0-13.07,5.854-13.07,13.07v147.154C298.213,417.012,304.067,422.863,311.284,422.863z",
                                        },
                                      }),
                                    ]),
                                  ]),
                                ]
                              ),
                            ]
                          )
                        : n(
                            "span",
                            {
                              key: "due-date",
                              staticClass: "todo-due flex-no-shrink",
                              class: {
                                pending: t.isPending,
                                overdue: !t.isPending,
                              },
                            },
                            [t._v(t._s(t.dueString))]
                          ),
                    ]
                  ),
                ],
          ],
          2
        );
      },
      i = [];
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "transition-group",
          { attrs: { name: "flip-list", tag: "ul", mode: "out-in" } },
          t._l(t.todos, function (e) {
            return n(
              "li",
              { key: e.id },
              [
                n("TodoItem", {
                  staticClass: "todo",
                  attrs: { todo: e },
                  on: { changed: t.changed },
                }),
              ],
              1
            );
          })
        );
      },
      i = [];
  },
  function (t, e, n) {
    var o = n(278);
    "string" == typeof o && (o = [[t.i, o, ""]]),
      o.locals && (t.exports = o.locals);
    var i = n(3).default;
    i("ce5cea0a", o, !0, {});
  },
  function (t, e, n) {
    (e = t.exports = n(2)(!1)),
      e.push([
        t.i,
        '.todo-lists>.todo-list:first-child{border-top:1px solid #e4e5e8}.todo-list{font-size:.9rem;transition:all .3s ease-in;box-shadow:0 .35rem 7px -5px #e4e5e8;width:100%;background:#fff;height:3.5rem;line-height:3.1rem;padding:.2rem .4rem .2rem 1.1rem;border-bottom:1px solid #e4e5e8}.todo-list:hover{background-color:#f3f6ff!important}.todo-list-title{margin:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:inherit}.todo-list-title:before{content:"";padding:.1rem;border-radius:50%;height:.75rem;width:.75rem;display:inline-block;margin-right:.4rem;position:relative;top:2px}.todo-list:nth-of-type(10n+1) .todo-list-title:before{background-color:#ffb400}.todo-list:nth-of-type(10n+2) .todo-list-title:before{background-color:#00d1c1}.todo-list:nth-of-type(10n+3) .todo-list-title:before{background-color:#fe626d}.todo-list:nth-of-type(10n+4) .todo-list-title:before{background-color:#7ab800}.todo-list:nth-of-type(10n+5) .todo-list-title:before{background-color:#7b0051}.todo-list:nth-of-type(10n+6) .todo-list-title:before{background-color:#ffaa91}.todo-list:nth-of-type(10n+7) .todo-list-title:before{background-color:#3f51b5}.todo-list:nth-of-type(10n+8) .todo-list-title:before{background-color:#e67e22}.todo-list:nth-of-type(10n+9) .todo-list-title:before{background-color:#9b59b6}.todo-list:nth-of-type(10n) .todo-list-title:before{background-color:#795548}.todo-list.active{font-weight:700;background-color:#f3f6ff!important}.todo-list-count{color:#666;font-size:.8rem}input.create-todo-list{border:none;outline:0;margin:0;height:2.5rem;font-size:.9rem}input.create-todo-list:focus{border:0;box-shadow:none}.todo-list:hover svg.delete-list-icon:not(:hover){fill:#767678}svg.delete-list-icon{fill:transparent;transition:fill .23s ease-in}svg.delete-list-icon:hover{fill:#e56161}',
        "",
      ]);
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.list && t.list.length > 0
          ? n(
              "div",
              { staticClass: "sidebar-container" },
              [
                n(
                  "transition-group",
                  {
                    staticClass: "todo-lists pad-0",
                    attrs: { name: "flip-list", tag: "ul" },
                  },
                  t._l(t.list, function (e) {
                    return n(
                      "li",
                      {
                        key: e.id,
                        staticClass:
                          "flex flex-center flex-justify-space-between pointer todo-list",
                        class: { active: t.currentListItemId == e.id },
                        on: {
                          click: function (n) {
                            t.itemSelected(e);
                          },
                        },
                      },
                      [
                        n(
                          "div",
                          {
                            staticClass: "flex flex-center",
                            staticStyle: { width: "80%" },
                          },
                          [
                            n(
                              "a",
                              {
                                staticClass: "todo-list-title",
                                attrs: { title: e.title },
                              },
                              [t._v(t._s(t.titleCase(e.title)))]
                            ),
                            t._v(" "),
                            t.showTodosCount
                              ? n(
                                  "span",
                                  { staticClass: "todo-list-count ml-10" },
                                  [t._v(t._s(t.getTodosCount(e.id)))]
                                )
                              : t._e(),
                          ]
                        ),
                        t._v(" "),
                        t.isDeleteEnabled
                          ? n(
                              "div",
                              {
                                staticClass: "mr-5",
                                on: {
                                  click: function (n) {
                                    n.stopPropagation(), t.deleteList(e);
                                  },
                                },
                              },
                              [
                                n(
                                  "svg",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: t._showDeleteIcon(e),
                                        expression: "_showDeleteIcon(listItem)",
                                      },
                                    ],
                                    staticClass:
                                      "delete-list-icon pointer one-rem-width one-rem-height",
                                    staticStyle: {
                                      "enable-background":
                                        "new 0 0 482.428 482.429",
                                    },
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      version: "1.1",
                                      x: "0px",
                                      y: "0px",
                                      viewBox: "0 0 482.428 482.429",
                                      "xml:space": "preserve",
                                    },
                                  },
                                  [
                                    n("g", [
                                      n("g", [
                                        n("path", {
                                          attrs: {
                                            d: "M381.163,57.799h-75.094C302.323,25.316,274.686,0,241.214,0c-33.471,0-61.104,25.315-64.85,57.799h-75.098    c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.369c0,30.39,24.724,55.117,55.112,55.117    h210.236c30.389,0,55.111-24.729,55.111-55.117V166.944c20.369-8.1,34.83-27.977,34.83-51.199v-2.828    C436.274,82.527,411.551,57.799,381.163,57.799z M241.214,26.139c19.037,0,34.927,13.645,38.443,31.66h-76.879    C206.293,39.783,222.184,26.139,241.214,26.139z M375.305,427.312c0,15.978-13,28.979-28.973,28.979H136.096    c-15.973,0-28.973-13.002-28.973-28.979V170.861h268.182V427.312z M410.135,115.744c0,15.978-13,28.979-28.973,28.979H101.266    c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.897c15.973,0,28.973,13.001,28.973,28.979    V115.744z",
                                          },
                                        }),
                                        t._v(" "),
                                        n("path", {
                                          attrs: {
                                            d: "M171.144,422.863c7.218,0,13.069-5.853,13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07    c-7.217,0-13.069,5.854-13.069,13.07v147.154C158.074,417.012,163.926,422.863,171.144,422.863z",
                                          },
                                        }),
                                        t._v(" "),
                                        n("path", {
                                          attrs: {
                                            d: "M241.214,422.863c7.218,0,13.07-5.853,13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07    c-7.217,0-13.069,5.854-13.069,13.07v147.154C228.145,417.012,233.996,422.863,241.214,422.863z",
                                          },
                                        }),
                                        t._v(" "),
                                        n("path", {
                                          attrs: {
                                            d: "M311.284,422.863c7.217,0,13.068-5.853,13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07    c-7.219,0-13.07,5.854-13.07,13.07v147.154C298.213,417.012,304.067,422.863,311.284,422.863z",
                                          },
                                        }),
                                      ]),
                                    ]),
                                  ]
                                ),
                              ]
                            )
                          : t._e(),
                      ]
                    );
                  })
                ),
                t._v(" "),
                t.isCreateEnabled
                  ? n("div", [
                      t.isEditing
                        ? n(
                            "div",
                            { staticClass: "flex todo-list relative pointer" },
                            [
                              n("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.title,
                                    expression: "title",
                                  },
                                ],
                                ref: "list",
                                staticClass: "create-todo-list no-focus",
                                attrs: {
                                  type: "text",
                                  placeholder: "Enter list name",
                                },
                                domProps: { value: t.title },
                                on: {
                                  blur: function (e) {
                                    return e.stopPropagation(), t.cancel(e);
                                  },
                                  keyup: [
                                    function (e) {
                                      return "button" in e ||
                                        !t._k(
                                          e.keyCode,
                                          "esc",
                                          27,
                                          e.key,
                                          "Escape"
                                        )
                                        ? (e.stopPropagation(), t.cancel(e))
                                        : null;
                                    },
                                    function (e) {
                                      return "button" in e ||
                                        !t._k(
                                          e.keyCode,
                                          "enter",
                                          13,
                                          e.key,
                                          "Enter"
                                        )
                                        ? (e.stopPropagation(), t.create(e))
                                        : null;
                                    },
                                  ],
                                  input: function (e) {
                                    e.target.composing ||
                                      (t.title = e.target.value);
                                  },
                                },
                              }),
                            ]
                          )
                        : n(
                            "div",
                            {
                              staticClass: "flex flex-center todo-list pointer",
                              on: { click: t.type },
                            },
                            [
                              n(
                                "svg",
                                {
                                  staticClass: "svg-blue-fill",
                                  attrs: {
                                    focusable: "false",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "18",
                                    height: "18",
                                    viewBox: "0 0 24 24",
                                  },
                                },
                                [
                                  n("path", {
                                    attrs: {
                                      "fill-rule": "evenodd",
                                      d: "M20 11h-7V4c0-.553-.447-1-1-1-.552 0-1 .447-1 1v7H4c-.552 0-1 .447-1 1 0 .553.448 1 1 1h7v7c0 .553.448 1 1 1 .553 0 1-.447 1-1v-7h7c.553 0 1-.447 1-1 0-.553-.447-1-1-1",
                                    },
                                  }),
                                ]
                              ),
                              t._v(" "),
                              n(
                                "span",
                                {
                                  staticClass:
                                    "text-blue block text-block ml-5 semi-bold",
                                },
                                [t._v("Create list")]
                              ),
                            ]
                          ),
                    ])
                  : t._e(),
              ],
              1
            )
          : t._e();
      },
      i = [];
  },
  function (t, e, n) {
    var o = n(281);
    "string" == typeof o && (o = [[t.i, o, ""]]),
      o.locals && (t.exports = o.locals);
    var i = n(3).default;
    i("677fbc46", o, !0, {});
  },
  function (t, e, n) {
    (e = t.exports = n(2)(!1)),
      e.push([
        t.i,
        ".todo-manager[data-v-4e40ee63]{background-color:#f3f6ff}.sidebar-container input[data-v-4e40ee63]{margin-bottom:1rem;height:2rem;font-size:.8rem}.sidebar-container select[data-v-4e40ee63]{height:2rem!important;font-size:.8rem;margin-bottom:1rem;background:#f7f7f7}input.todo-title[data-v-4e40ee63]{background:#fff;height:50px!important;border:none!important;box-sizing:border-box!important;max-width:100%;font-size:.9rem;padding:.5rem 10px!important}input.due-date[data-v-4e40ee63]{height:1rem;font-size:.9rem;margin-left:10px!important}input.due-date[data-v-4e40ee63]:focus{box-shadow:none!important}",
        "",
      ]);
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "form",
          {
            staticClass: "todo-manager full-height font-xsmall",
            on: {
              submit: function (e) {
                return e.preventDefault(), t.update(e);
              },
              change: function (e) {
                t.isSubmitDisable = !1;
              },
            },
          },
          [
            n("div", [
              n("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: t._todo.title,
                    expression: "_todo.title",
                  },
                ],
                staticClass: "todo-title no-focus bold mar-0",
                attrs: { type: "text", placeholder: "", required: "" },
                domProps: { value: t._todo.title },
                on: {
                  input: [
                    function (e) {
                      e.target.composing ||
                        t.$set(t._todo, "title", e.target.value);
                    },
                    function (e) {
                      t.isSubmitDisable = !1;
                    },
                  ],
                },
              }),
            ]),
            t._v(" "),
            n(
              "div",
              { staticClass: "ph-10", staticStyle: { padding: "1rem" } },
              [
                n(
                  "div",
                  { staticClass: "flex flex-center pointer font-xsmall" },
                  [
                    n(
                      "svg",
                      {
                        staticClass: "flex-no-shrink",
                        staticStyle: { "enable-background": "new 0 0 512 512" },
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          version: "1.1",
                          x: "0px",
                          y: "0px",
                          viewBox: "0 0 512 512",
                          "xml:space": "preserve",
                          width: "18px",
                          height: "18px",
                        },
                      },
                      [
                        n("g", [
                          n("g", [
                            n("path", {
                              attrs: {
                                d: "M452,40h-24V0h-40v40H124V0H84v40H60C26.916,40,0,66.916,0,100v352c0,33.084,26.916,60,60,60h392    c33.084,0,60-26.916,60-60V100C512,66.916,485.084,40,452,40z M472,452c0,11.028-8.972,20-20,20H60c-11.028,0-20-8.972-20-20V188    h432V452z M472,148H40v-48c0-11.028,8.972-20,20-20h24v40h40V80h264v40h40V80h24c11.028,0,20,8.972,20,20V148z",
                                fill: "#666",
                              },
                            }),
                          ]),
                        ]),
                        t._v(" "),
                        n("g", [
                          n("g", [
                            n("rect", {
                              attrs: {
                                x: "76",
                                y: "230",
                                width: "40",
                                height: "40",
                                fill: "#666",
                              },
                            }),
                          ]),
                        ]),
                        t._v(" "),
                        n("g", [
                          n("g", [
                            n("rect", {
                              attrs: {
                                x: "156",
                                y: "230",
                                width: "40",
                                height: "40",
                                fill: "#666",
                              },
                            }),
                          ]),
                        ]),
                        t._v(" "),
                        n("g", [
                          n("g", [
                            n("rect", {
                              attrs: {
                                x: "236",
                                y: "230",
                                width: "40",
                                height: "40",
                                fill: "#666",
                              },
                            }),
                          ]),
                        ]),
                        t._v(" "),
                        n("g", [
                          n("g", [
                            n("rect", {
                              attrs: {
                                x: "316",
                                y: "230",
                                width: "40",
                                height: "40",
                                fill: "#666",
                              },
                            }),
                          ]),
                        ]),
                        t._v(" "),
                        n("g", [
                          n("g", [
                            n("rect", {
                              attrs: {
                                x: "396",
                                y: "230",
                                width: "40",
                                height: "40",
                                fill: "#666",
                              },
                            }),
                          ]),
                        ]),
                        t._v(" "),
                        n("g", [
                          n("g", [
                            n("rect", {
                              attrs: {
                                x: "76",
                                y: "310",
                                width: "40",
                                height: "40",
                                fill: "#666",
                              },
                            }),
                          ]),
                        ]),
                        t._v(" "),
                        n("g", [
                          n("g", [
                            n("rect", {
                              attrs: {
                                x: "156",
                                y: "310",
                                width: "40",
                                height: "40",
                                fill: "#666",
                              },
                            }),
                          ]),
                        ]),
                        t._v(" "),
                        n("g", [
                          n("g", [
                            n("rect", {
                              attrs: {
                                x: "236",
                                y: "310",
                                width: "40",
                                height: "40",
                                fill: "#666",
                              },
                            }),
                          ]),
                        ]),
                        t._v(" "),
                        n("g", [
                          n("g", [
                            n("rect", {
                              attrs: {
                                x: "316",
                                y: "310",
                                width: "40",
                                height: "40",
                                fill: "#666",
                              },
                            }),
                          ]),
                        ]),
                        t._v(" "),
                        n("g", [
                          n("g", [
                            n("rect", {
                              attrs: {
                                x: "76",
                                y: "390",
                                width: "40",
                                height: "40",
                                fill: "#666",
                              },
                            }),
                          ]),
                        ]),
                        t._v(" "),
                        n("g", [
                          n("g", [
                            n("rect", {
                              attrs: {
                                x: "156",
                                y: "390",
                                width: "40",
                                height: "40",
                                fill: "#666",
                              },
                            }),
                          ]),
                        ]),
                        t._v(" "),
                        n("g", [
                          n("g", [
                            n("rect", {
                              attrs: {
                                x: "236",
                                y: "390",
                                width: "40",
                                height: "40",
                                fill: "#666",
                              },
                            }),
                          ]),
                        ]),
                        t._v(" "),
                        n("g", [
                          n("g", [
                            n("rect", {
                              attrs: {
                                x: "316",
                                y: "390",
                                width: "40",
                                height: "40",
                                fill: "#666",
                              },
                            }),
                          ]),
                        ]),
                        t._v(" "),
                        n("g", [
                          n("g", [
                            n("rect", {
                              attrs: {
                                x: "396",
                                y: "310",
                                width: "40",
                                height: "40",
                                fill: "#666",
                              },
                            }),
                          ]),
                        ]),
                      ]
                    ),
                    t._v(" "),
                    n("transition", { attrs: { mode: "out-in" } }, [
                      n("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: t._todo.dueOn,
                            expression: "_todo.dueOn",
                          },
                        ],
                        key: "dynamic",
                        staticClass: "ml-10 due-date mb-0 border-0",
                        attrs: { type: "date" },
                        domProps: { value: t._todo.dueOn },
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              t.$set(t._todo, "dueOn", e.target.value);
                          },
                        },
                      }),
                    ]),
                  ],
                  1
                ),
              ]
            ),
            t._v(" "),
            n(
              "div",
              { staticClass: "ml-5" },
              [
                n("Button", {
                  staticClass: "btn text-blue-hover ml-10 mt-10",
                  attrs: {
                    text: "Save",
                    type: "save",
                    size: "medium",
                    "is-disabled": t.isSubmitDisable,
                  },
                }),
              ],
              1
            ),
          ]
        );
      },
      i = [];
  },
  function (t, e, n) {
    var o = n(284);
    "string" == typeof o && (o = [[t.i, o, ""]]),
      o.locals && (t.exports = o.locals);
    var i = n(3).default;
    i("942fb362", o, !0, {});
  },
  function (t, e, n) {
    (e = t.exports = n(2)(!1)),
      e.push([
        t.i,
        "#no-todo{text-align:center;flex:1;padding-top:2rem}#no-todo img{display:block;margin-bottom:20px;opacity:.5}#no-todo em{font-size:1rem}",
        "",
      ]);
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass:
              "flex flex-flow-column flex-justify-center flex-center ph-20",
            attrs: { id: "no-todo" },
          },
          [
            n("img", {
              attrs: {
                src: "images/todo-no-item.png",
                alt: "No Todo",
                width: "30%",
              },
            }),
            t._v(" "),
            n("em", { staticClass: "text-light-grey" }, [
              t._v("No tasks to do in "),
              n("strong", [t._v(t._s(t.title))]),
              t._v(" list!"),
            ]),
          ]
        );
      },
      i = [];
  },
  function (t, e, n) {
    var o = n(287);
    "string" == typeof o && (o = [[t.i, o, ""]]),
      o.locals && (t.exports = o.locals);
    var i = n(3).default;
    i("996fdcd0", o, !0, {});
  },
  function (t, e, n) {
    (e = t.exports = n(2)(!1)),
      e.push([t.i, ".svg-blue-stroke-hover:hover g{stroke:#2196f3}", ""]);
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("header", { staticClass: "flex widget-header flex-center" }, [
          n(
            "svg",
            {
              staticClass:
                "pointer flex-no-shrink one-rem-height one-rem-width",
              attrs: { viewBox: "0 0 23 21", version: "1.1" },
              on: { click: t.viewList },
            },
            [
              n(
                "g",
                {
                  attrs: {
                    stroke: "none",
                    "stroke-width": "1",
                    fill: "none",
                    "fill-rule": "evenodd",
                  },
                },
                [
                  n(
                    "g",
                    {
                      attrs: {
                        id: "hamburger",
                        transform: "translate(0.000000, 2.000000)",
                        stroke: "#7d7d7d",
                        "stroke-width": "4",
                      },
                    },
                    [
                      n("path", {
                        attrs: {
                          d: "M0.132183908,0 L22.8678161,0",
                          id: "XMLID_6_",
                        },
                      }),
                      t._v(" "),
                      n("polyline", {
                        attrs: {
                          id: "XMLID_9_",
                          points:
                            "0.132183908 16.8 20.0697663 16.8 22.8678161 16.8",
                        },
                      }),
                      t._v(" "),
                      n("path", {
                        attrs: {
                          d: "M0.132183908,8.4 L22.8678161,8.4",
                          id: "XMLID_8_",
                        },
                      }),
                    ]
                  ),
                ]
              ),
            ]
          ),
          t._v(" "),
          t.getIntegrationIcon()
            ? n("i", {
                staticClass: "integrate-icon mh-5 flex-no-shrink",
                class: t.getIntegrationIcon(),
              })
            : t._e(),
          t._v(" "),
          n("h4", { staticClass: "widget-heading ml-5 mv-0" }, [
            t._v(t._s(t.currentList ? t.titleCase(t.currentList.title) : "")),
          ]),
          t._v(" "),
          n("div", { staticClass: "button-section flex relative" }, [
            n("div", { staticClass: "tooltip", attrs: { rel: "Delete" } }, [
              t._showDeleteIcon()
                ? n(
                    "svg",
                    {
                      staticClass: "delete-icon pointer widget-header-icon",
                      staticStyle: {
                        "enable-background": "new 0 0 482.428 482.429",
                      },
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        version: "1.1",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 482.428 482.429",
                        "xml:space": "preserve",
                      },
                      on: {
                        click: function (e) {
                          return e.stopPropagation(), t.deleteList(e);
                        },
                      },
                    },
                    [
                      n("g", [
                        n("g", [
                          n("path", {
                            attrs: {
                              d: "M381.163,57.799h-75.094C302.323,25.316,274.686,0,241.214,0c-33.471,0-61.104,25.315-64.85,57.799h-75.098    c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.369c0,30.39,24.724,55.117,55.112,55.117    h210.236c30.389,0,55.111-24.729,55.111-55.117V166.944c20.369-8.1,34.83-27.977,34.83-51.199v-2.828    C436.274,82.527,411.551,57.799,381.163,57.799z M241.214,26.139c19.037,0,34.927,13.645,38.443,31.66h-76.879    C206.293,39.783,222.184,26.139,241.214,26.139z M375.305,427.312c0,15.978-13,28.979-28.973,28.979H136.096    c-15.973,0-28.973-13.002-28.973-28.979V170.861h268.182V427.312z M410.135,115.744c0,15.978-13,28.979-28.973,28.979H101.266    c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.897c15.973,0,28.973,13.001,28.973,28.979    V115.744z",
                            },
                          }),
                          t._v(" "),
                          n("path", {
                            attrs: {
                              d: "M171.144,422.863c7.218,0,13.069-5.853,13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07    c-7.217,0-13.069,5.854-13.069,13.07v147.154C158.074,417.012,163.926,422.863,171.144,422.863z",
                            },
                          }),
                          t._v(" "),
                          n("path", {
                            attrs: {
                              d: "M241.214,422.863c7.218,0,13.07-5.853,13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07    c-7.217,0-13.069,5.854-13.069,13.07v147.154C228.145,417.012,233.996,422.863,241.214,422.863z",
                            },
                          }),
                          t._v(" "),
                          n("path", {
                            attrs: {
                              d: "M311.284,422.863c7.217,0,13.068-5.853,13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07    c-7.219,0-13.07,5.854-13.07,13.07v147.154C298.213,417.012,304.067,422.863,311.284,422.863z",
                            },
                          }),
                        ]),
                      ]),
                    ]
                  )
                : t._e(),
            ]),
            t._v(" "),
            n(
              "div",
              {
                staticClass: "tooltip tooltip-left ",
                attrs: { rel: t.isPinned ? "Stay Closed" : "Stay Open" },
              },
              [
                n(
                  "svg",
                  {
                    staticClass:
                      "pointer svg-blue-stroke-hover widget-header-icon",
                    attrs: { viewBox: "0 0 19 19" },
                    on: {
                      click: function (e) {
                        return e.stopPropagation(), t.togglePin(e);
                      },
                    },
                  },
                  [
                    n(
                      "g",
                      {
                        attrs: {
                          transform: "translate(1.000000, 0.000000)",
                          stroke: "#7d7d7d",
                          "fill-rule": "nonzero",
                          "stroke-width": "1",
                          fill: "none",
                        },
                      },
                      [
                        n("transition", [
                          t.isPinned
                            ? n("rect", {
                                staticClass: "svg-blue-fill-hover",
                                attrs: {
                                  "stroke-opacity": "0.801007699",
                                  "stroke-linecap": "round",
                                  transform:
                                    "translate(10.960155, 10.960155) rotate(45.000000) translate(-10.960155, -10.960155)",
                                  x: "-3",
                                  y: "9.96015511",
                                  width: "23",
                                  height: "1",
                                  rx: "1",
                                  fill: "#7d7d7d",
                                },
                              })
                            : t._e(),
                        ]),
                        t._v(" "),
                        n("path", {
                          attrs: {
                            d: "M7.00281655,13.1229233 L5.02119635,14.6064885 C2.80029168,16.6351126 1.71102055,17.5657233 1.3663145,17.6821377 C0.717957794,17.9011014 0.313245364,17.422429 0.463782908,16.7897514 L0.554073071,16.6003974 L4.87282785,10.9929336 L1.94236285,8.0624593 C1.80229043,7.92389304 1.69177273,7.7573543 1.61501465,7.57223164 C1.46332845,7.2057818 1.46332845,6.7922182 1.61568559,6.42415545 C1.76866074,6.05821492 2.05960746,5.76687235 2.42515545,5.61468559 C2.60729352,5.53854591 2.80269457,5.5 3,5.5 C5.09770613,5.5 6.54093376,5.16919277 7.9623932,4.4677864 C9.04738884,3.92528859 9.87551287,2.99917711 10.6230457,1.44324406 C10.6996323,1.24318117 10.8110815,1.06381172 10.9632597,0.911642801 C11.5519462,0.328947954 12.4998328,0.33172768 13.0834588,0.918354316 L13.0835662,0.918462371 L17.0786457,4.93654123 C17.6652723,5.52016722 17.668052,6.46805376 17.0852572,7.0568413 C16.9348715,7.20868708 16.755096,7.32085792 16.5919941,7.38093962 C14.9978136,8.14453096 14.0717905,8.97257596 13.5301435,10.0577468 C12.8318981,11.453145 12.5,12.8996296 12.5,15 C12.5,15.1964255 12.4603765,15.3933891 12.3855335,15.570902 C12.2343297,15.9391806 11.9424432,16.2302739 11.5748445,16.3833144 C11.3916194,16.4599085 11.1961257,16.5 11,16.5 C10.8038743,16.5 10.6083806,16.4599085 10.4264925,16.3838711 C10.2399036,16.3065049 10.0731494,16.1962259 9.93844661,16.0585534 L7.00281655,13.1229233 Z",
                          },
                        }),
                      ],
                      1
                    ),
                  ]
                ),
              ]
            ),
            t._v(" "),
            n(
              "div",
              {
                staticClass: "tooltip",
                attrs: { rel: "Settings" },
                on: {
                  click: function (e) {
                    return e.stopPropagation(), t.openTodoCustomize(e);
                  },
                },
              },
              [
                n(
                  "svg",
                  {
                    staticClass:
                      "widget-header-icon svg-black-fill-hover svg-black-stroke-hover pointer",
                    attrs: {
                      viewBox: "0 0 48 48",
                      fill: "#7d7d7d",
                      stroke: "#7d7d7d",
                    },
                  },
                  [
                    n("g", [
                      n("path", {
                        attrs: {
                          d: "M26,48h-4c-1.654,0-3-1.346-3-3v-3.724c-1.28-0.37-2.512-0.881-3.681-1.527l-2.634,2.635     c-1.134,1.134-3.109,1.132-4.243,0l-2.829-2.828c-0.567-0.566-0.879-1.32-0.879-2.121s0.312-1.555,0.879-2.121l2.635-2.636     c-0.645-1.166-1.156-2.398-1.525-3.679H3c-1.654,0-3-1.346-3-3v-4c0-0.802,0.312-1.555,0.878-2.121     c0.567-0.566,1.32-0.879,2.122-0.879h3.724c0.37-1.278,0.88-2.511,1.526-3.679l-2.634-2.635c-1.17-1.17-1.17-3.072,0-4.242     l2.828-2.829c1.133-1.132,3.109-1.134,4.243,0l2.635,2.635C16.49,7.604,17.722,7.093,19,6.724V3c0-1.654,1.346-3,3-3h4     c1.654,0,3,1.346,3,3v3.724c1.28,0.37,2.512,0.881,3.678,1.525l2.635-2.635c1.134-1.132,3.109-1.134,4.243,0l2.829,2.828     c0.567,0.566,0.879,1.32,0.879,2.121s-0.312,1.555-0.879,2.121l-2.634,2.635c0.646,1.168,1.157,2.4,1.526,3.68H45     c1.654,0,3,1.346,3,3v4c0,0.802-0.312,1.555-0.878,2.121s-1.32,0.879-2.122,0.879h-3.724c-0.37,1.28-0.881,2.513-1.526,3.68     l2.634,2.635c1.17,1.17,1.17,3.072,0,4.242l-2.828,2.829c-1.134,1.133-3.109,1.133-4.243,0L32.68,39.75     c-1.168,0.646-2.401,1.156-3.679,1.526V45C29,46.654,27.655,48,26,48z M15.157,37.498c0.179,0,0.36,0.048,0.521,0.146     c1.416,0.866,2.949,1.502,4.557,1.891C20.684,39.644,21,40.045,21,40.507V45c0,0.552,0.449,1,1,1h4c0.551,0,1-0.448,1-1v-4.493     c0-0.462,0.316-0.863,0.765-0.972c1.606-0.389,3.139-1.023,4.556-1.89c0.396-0.241,0.902-0.18,1.229,0.146l3.178,3.179     c0.375,0.374,1.039,0.376,1.415,0l2.828-2.829c0.39-0.39,0.39-1.024,0-1.414l-3.179-3.179c-0.327-0.326-0.387-0.835-0.146-1.229     c0.865-1.414,1.5-2.947,1.889-4.556c0.108-0.449,0.51-0.766,0.972-0.766H45c0.267,0,0.519-0.104,0.708-0.293     C45.896,26.518,46,26.267,46,25.999v-4c0-0.552-0.449-1-1-1h-4.493c-0.462,0-0.864-0.316-0.972-0.766     c-0.388-1.607-1.023-3.14-1.889-4.556c-0.241-0.394-0.181-0.901,0.146-1.229l3.179-3.179c0.186-0.187,0.293-0.444,0.293-0.707     s-0.107-0.521-0.293-0.707l-2.829-2.828c-0.378-0.377-1.037-0.377-1.415,0l-3.179,3.179c-0.326,0.328-0.833,0.389-1.229,0.146     c-1.413-0.864-2.945-1.5-4.554-1.889C27.317,8.356,27,7.955,27,7.493V3c0-0.552-0.449-1-1-1h-4c-0.551,0-1,0.448-1,1v4.493     c0,0.462-0.316,0.863-0.765,0.972c-1.606,0.388-3.139,1.023-4.556,1.889c-0.395,0.241-0.902,0.181-1.228-0.146l-3.179-3.179     c-0.378-0.377-1.037-0.377-1.415,0L7.03,9.857c-0.39,0.39-0.39,1.024,0,1.414l3.179,3.179c0.327,0.326,0.387,0.835,0.146,1.229     c-0.866,1.416-1.501,2.949-1.889,4.555c-0.108,0.449-0.51,0.766-0.972,0.766H3c-0.267,0-0.519,0.104-0.708,0.293     C2.104,21.48,2,21.731,2,21.999v4c0,0.552,0.449,1,1,1h4.493c0.462,0,0.864,0.316,0.972,0.766     c0.389,1.608,1.024,3.141,1.889,4.555c0.241,0.394,0.181,0.901-0.146,1.229l-3.179,3.18c-0.186,0.187-0.293,0.444-0.293,0.707     s0.107,0.521,0.293,0.707l2.829,2.828c0.377,0.377,1.037,0.377,1.415,0l3.178-3.179C14.643,37.598,14.898,37.498,15.157,37.498z",
                        },
                      }),
                    ]),
                    n("g", [
                      n("path", {
                        attrs: {
                          d: "M24,34c-5.514,0-10-4.486-10-10s4.486-10,10-10s10,4.486,10,10S29.515,34,24,34z M24,16c-4.411,0-8,3.589-8,8     s3.589,8,8,8s8-3.589,8-8S28.412,16,24,16z",
                        },
                      }),
                    ]),
                  ]
                ),
              ]
            ),
          ]),
        ]);
      },
      i = [];
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass: "todos-arrow_box relative flex-flow-column flex",
            attrs: { id: "todos" },
            on: {
              click: function (t) {
                t.stopPropagation();
              },
            },
          },
          [
            n("TodoHeader", {
              attrs: {
                "current-list": { title: t.currentListTitle },
                "is-pinned": t.settings.isPinned,
              },
              on: { changed: t.todoHeaderChanged },
            }),
            t._v(" "),
            n(
              "section",
              {
                staticClass: "flex relative todo-section flex-flow-column",
                on: {
                  click: function (e) {
                    e.stopPropagation(),
                      (t.showTodoManager = t.showSidebar = !1);
                  },
                },
              },
              [
                t.todoLists && t.todoLists.length > 0
                  ? n(
                      "div",
                      {
                        staticClass: "sidebar flex-flow-column flex",
                        class: { "show-sidebar": t.showSidebar },
                        attrs: { id: "todo-sidebar" },
                        on: {
                          click: function (t) {
                            t.stopPropagation();
                          },
                        },
                      },
                      [
                        n("TodoList", {
                          attrs: {
                            list: t.todoLists,
                            current: t.currentListId,
                            count: t.todosCount,
                          },
                          on: { changed: t.changedTodoList },
                        }),
                      ],
                      1
                    )
                  : t._e(),
                t._v(" "),
                n(
                  "div",
                  {
                    staticClass: "sidebar-right flex-flow-column flex",
                    class: { "show-right-sidebar": t.showTodoManager },
                    attrs: { id: "todo-manager-sidebar" },
                    on: {
                      click: function (t) {
                        t.stopPropagation();
                      },
                    },
                  },
                  [
                    t.showTodoManager
                      ? n("TodoManager", {
                          attrs: { todo: t.currentTodo },
                          on: { changed: t.updateTodo },
                        })
                      : t._e(),
                  ],
                  1
                ),
                t._v(" "),
                n(
                  "div",
                  {
                    staticClass: "todos",
                    class: {
                      "disable-pointer": t.showSidebar || t.showTodoManager,
                    },
                    attrs: { id: "todo" },
                  },
                  [
                    n("TodosGroup", {
                      staticClass: "mar-0",
                      attrs: {
                        id: "incomplete-todos-list",
                        todos: t.incompleteTodos,
                      },
                      on: { changed: t.changedTodo, edit: t.changedTodo },
                    }),
                    t._v(" "),
                    n("AddTodo", {
                      staticClass: "pv-10",
                      attrs: {
                        "is-completed-enabled": !!t.completedTodos.length,
                      },
                      on: {
                        create: t.createTodo,
                        toggleCompleted: t.toggleCompletedTodos,
                      },
                    }),
                    t._v(" "),
                    n(
                      "transition",
                      { attrs: { name: "fast-fade", mode: "out-in" } },
                      [
                        t.incompleteTodos.length || t.showCompletedTodos
                          ? t._e()
                          : n("NoTodo", {
                              key: "no",
                              attrs: { currentListTitle: t.currentListTitle },
                            }),
                        t._v(" "),
                        t.showCompletedTodos
                          ? n("TodosGroup", {
                              key: "completed",
                              staticClass: "mar-0",
                              attrs: {
                                id: "complete-todos-list",
                                todos: t.completedTodos,
                                isCompletedList: "true",
                              },
                              on: {
                                changed: t.changedTodo,
                                edit: t.changedTodo,
                              },
                            })
                          : t._e(),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ]
            ),
          ],
          1
        );
      },
      i = [];
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = n(102),
      i = n.n(o);
    for (var s in o)
      "default" !== s &&
        (function (t) {
          n.d(e, t, function () {
            return o[t];
          });
        })(s);
    var a = n(294),
      r = n(1),
      c = Object(r.a)(i.a, a.a, a.b, !1, null, null, null);
    e.default = c.exports;
  },
  function (t, e, n) {
    var o = n(292);
    "string" == typeof o && (o = [[t.i, o, ""]]),
      o.locals && (t.exports = o.locals);
    var i = n(3).default;
    i("185e6c3a", o, !0, {});
  },
  function (t, e, n) {
    (e = t.exports = n(2)(!1)),
      e.push([
        t.i,
        ".error-todo{background-color:hsla(0,0%,100%,.8)}.sync-btn{width:11rem;height:3rem;border-radius:21px;box-shadow:0 4px 16px 0 rgba(0,0,0,.2)}.sync-btn:focus{background-color:#fff}.no-internet{position:absolute;top:0}",
        "",
      ]);
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "full-height bg-white error-todo" }, [
          n(
            "div",
            {
              staticClass:
                "flex flex-flow-column flex-center full-height flex-justify-center",
            },
            [
              "reIntegrate" === t.errorState
                ? [
                    n(
                      "svg",
                      {
                        attrs: {
                          version: "1.1",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 294.951 294.951",
                          "enable-background": "new 0 0 294.951 294.951",
                          width: "4em",
                        },
                      },
                      [
                        n("g", [
                          n("path", {
                            attrs: {
                              d: "m147.475,103.102c-5.22,0-8.701,3.48-8.701,8.701v62.644c0,5.22 3.48,8.701 8.701,8.701 5.22,0 8.701-3.48 8.701-8.701v-62.644c0-5.221-3.481-8.701-8.701-8.701z",
                            },
                          }),
                          t._v(" "),
                          n("path", {
                            attrs: {
                              d: "m152.695,212.73c-3.48-3.48-8.701-3.48-12.181,0-1.74,1.74-1.74,5.22-1.74,6.96 0,3.48 0,5.22 1.74,6.96 1.74,1.74 5.22,1.74 6.96,1.74 1.74,0 5.22,0 3.48-1.74 1.74-1.74 3.48-5.22 3.48-6.96 0.002-3.48 0.002-5.22-1.739-6.96z",
                            },
                          }),
                          t._v(" "),
                          n("path", {
                            attrs: {
                              d: "m288.425,214.47l-102.667-179.232c-6.96-13.921-22.621-22.621-38.283-22.621-15.661,0-29.582,8.701-38.283,22.621l-102.667,179.232c-8.701,13.921-8.701,31.322-5.32907e-15,45.243 6.96,13.921 22.621,22.621 38.283,22.621h205.334c17.401,0 31.322-8.701 38.283-22.621 8.701-13.921 8.701-31.322 0-45.243zm-13.921,38.283c-3.48,8.701-12.181,13.921-22.621,13.921h-207.075c-8.701,0-17.401-5.22-22.621-13.921-5.22-8.701-5.22-19.141 0-27.842l102.667-179.233c3.48-8.701 12.181-13.921 22.621-13.921 10.441,0 19.141,5.22 24.362,13.921l102.667,179.232c5.221,8.701 5.221,19.142 0,27.843z",
                            },
                          }),
                        ]),
                      ]
                    ),
                    t._v(" "),
                    t._m(0),
                    t._v(" "),
                    n(
                      "button",
                      {
                        staticClass:
                          "flex flex-center flex-justify-center font-black font-center bg-white sync-btn",
                      },
                      [
                        n(
                          "svg",
                          {
                            staticStyle: {
                              "enable-background": "new 0 0 85.168 85.168",
                            },
                            attrs: {
                              width: "18px",
                              xmlns: "http://www.w3.org/2000/svg",
                              x: "0px",
                              y: "0px",
                              viewBox: "0 0 85.168 85.168",
                              "xml:space": "preserve",
                            },
                          },
                          [
                            n("g", [
                              n("path", {
                                attrs: {
                                  d: "M61.696,14.999l-4.126,4.457c8.806,5.774,13.923,16.353,12.184,27.41c-1.146,7.288-5.063,13.694-11.027,18.037\n                        c-5.206,3.791-11.43,5.615-17.777,5.252l1.09-1.144c-0.021-0.001-0.044,0.002-0.065,0.001l4.129-4.332l-3.813-3.639l-8.188,8.596\n                        l-0.002-0.003l-3.533,3.71l3.811,3.636l0.002-0.001l8.593,8.189l3.536-3.71l-5.565-5.302c7.616,0.36,15.066-1.853,21.315-6.403\n                        c7.261-5.286,12.028-13.084,13.424-21.956C77.741,34.694,71.897,22.14,61.696,14.999z",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M15.415,38.302c1.146-7.288,5.063-13.694,11.027-18.037c5.206-3.791,11.43-5.615,17.777-5.252l-1.09,1.144\n                        c0.021,0.001,0.044-0.002,0.065-0.001l-4.129,4.332l3.813,3.639l8.188-8.596l0.002,0.003l3.533-3.71L50.79,8.188l-0.002,0.001\n                        L42.195,0l-3.536,3.71l5.565,5.302c-7.616-0.36-15.066,1.853-21.315,6.403c-7.261,5.286-12.028,13.084-13.424,21.956\n                        C7.425,50.475,13.27,63.029,23.47,70.17l4.126-4.457C18.793,59.937,13.676,49.359,15.415,38.302z",
                                },
                              }),
                            ]),
                          ]
                        ),
                        t._v(" "),
                        n(
                          "span",
                          {
                            staticClass: "ml-5 semi-bold text-blue",
                            on: { click: t.reIntegrate },
                          },
                          [t._v("Re-Integrate")]
                        ),
                      ]
                    ),
                  ]
                : t._e(),
              t._v(" "),
              "offline" === t.errorState
                ? [
                    n(
                      "p",
                      {
                        staticClass:
                          "bg-red semi-bold white-text full-width flex-start no-internet font-small mar-0 ph-10",
                      },
                      [
                        t._v(
                          "\n                No internet connection\n            "
                        ),
                      ]
                    ),
                    t._v(" "),
                    n(
                      "svg",
                      {
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 50 50",
                          width: "5em",
                        },
                      },
                      [
                        n("path", {
                          attrs: {
                            d: "M 4.2148438 2.359375 L 2.8007812 3.7734375 L 13.785156 14.757812 C 13.764706 14.756586 13.74509 14.75106 13.724609 14.75 L 18.076172 19.101562 L 18.089844 19.0625 L 37.027344 38 L 36.972656 38 L 38.972656 40 L 39.027344 40 L 46.013672 46.986328 L 47.427734 45.572266 L 41.818359 39.962891 C 46.391069 39.594387 50 35.764711 50 31.099609 C 50 26.539609 46.554906 22.768859 42.128906 22.255859 C 42.138906 22.064859 42.142578 21.878313 42.142578 21.695312 C 42.142578 14.444312 36.243188 8.546875 28.992188 8.546875 C 24.113273 8.546875 19.654533 11.299022 17.396484 15.541016 L 4.2148438 2.359375 z M 28.992188 10.546875 C 35.140188 10.546875 40.142578 15.547313 40.142578 21.695312 C 40.142578 22.111313 40.112875 22.550125 40.046875 23.078125 L 39.908203 24.199219 L 41.039062 24.199219 L 41.130859 24.197266 C 44.921859 24.215266 48 27.304609 48 31.099609 C 48 34.904609 44.903656 38 41.097656 38 L 39.855469 38 L 18.880859 17.025391 C 20.68992 13.11637 24.648888 10.546875 28.992188 10.546875 z M 11.208984 15.066406 C 8.5369844 15.928406 6.5583281 18.347906 6.3613281 21.253906 C 2.5803281 22.629906 5.9211895e-16 26.258078 0 30.330078 C 0 35.662078 4.3379219 40 9.6699219 40 L 36.146484 40 L 34.146484 38 L 9.6699219 38 C 5.4409219 38 2 34.559078 2 30.330078 C 2 26.897078 4.3139531 23.860312 7.6269531 22.945312 L 8.3867188 22.736328 L 8.3457031 21.732422 C 8.3457031 19.122422 10.360109 16.997531 12.912109 16.769531 L 11.208984 15.066406 z",
                          },
                        }),
                      ]
                    ),
                    t._v(" "),
                    t._m(1),
                  ]
                : t._e(),
              t._v(" "),
              "serverIssue" === t.errorState
                ? [
                    n(
                      "p",
                      {
                        staticClass:
                          "bg-red semi-bold white-text full-width flex-start no-internet font-small mar-0 ph-10",
                      },
                      [t._v("\n                Server Issue\n            ")]
                    ),
                    t._v(" "),
                    n(
                      "svg",
                      {
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 50 50",
                          width: "5em",
                        },
                      },
                      [
                        n("path", {
                          attrs: {
                            d: "M 4.2148438 2.359375 L 2.8007812 3.7734375 L 13.785156 14.757812 C 13.764706 14.756586 13.74509 14.75106 13.724609 14.75 L 18.076172 19.101562 L 18.089844 19.0625 L 37.027344 38 L 36.972656 38 L 38.972656 40 L 39.027344 40 L 46.013672 46.986328 L 47.427734 45.572266 L 41.818359 39.962891 C 46.391069 39.594387 50 35.764711 50 31.099609 C 50 26.539609 46.554906 22.768859 42.128906 22.255859 C 42.138906 22.064859 42.142578 21.878313 42.142578 21.695312 C 42.142578 14.444312 36.243188 8.546875 28.992188 8.546875 C 24.113273 8.546875 19.654533 11.299022 17.396484 15.541016 L 4.2148438 2.359375 z M 28.992188 10.546875 C 35.140188 10.546875 40.142578 15.547313 40.142578 21.695312 C 40.142578 22.111313 40.112875 22.550125 40.046875 23.078125 L 39.908203 24.199219 L 41.039062 24.199219 L 41.130859 24.197266 C 44.921859 24.215266 48 27.304609 48 31.099609 C 48 34.904609 44.903656 38 41.097656 38 L 39.855469 38 L 18.880859 17.025391 C 20.68992 13.11637 24.648888 10.546875 28.992188 10.546875 z M 11.208984 15.066406 C 8.5369844 15.928406 6.5583281 18.347906 6.3613281 21.253906 C 2.5803281 22.629906 5.9211895e-16 26.258078 0 30.330078 C 0 35.662078 4.3379219 40 9.6699219 40 L 36.146484 40 L 34.146484 38 L 9.6699219 38 C 5.4409219 38 2 34.559078 2 30.330078 C 2 26.897078 4.3139531 23.860312 7.6269531 22.945312 L 8.3867188 22.736328 L 8.3457031 21.732422 C 8.3457031 19.122422 10.360109 16.997531 12.912109 16.769531 L 11.208984 15.066406 z",
                          },
                        }),
                      ]
                    ),
                    t._v(" "),
                    t._m(2),
                  ]
                : t._e(),
            ],
            2
          ),
        ]);
      },
      i = [
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("p", { staticClass: "font-center" }, [
            n("span", { staticClass: "block semi-bold" }, [
              t._v("Something went wrong"),
            ]),
            t._v(" "),
            n("small", [t._v("Please re-integrate to fix the issue.")]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("p", { staticClass: "font-center" }, [
            n("span", { staticClass: "block semi-bold" }, [
              t._v("You seem offline!"),
            ]),
            t._v(" "),
            n("small", [t._v("Try again once come online.")]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("p", { staticClass: "font-center" }, [
            n("span", { staticClass: "block semi-bold" }, [
              t._v("Some issue with integration service!"),
            ]),
            t._v(" "),
            n("small", [
              t._v("\n                    Contact "),
              n(
                "a",
                {
                  attrs: {
                    href: "mailto:support@subtletab.com",
                    title: "click here to e-mail",
                  },
                },
                [t._v("support")]
              ),
              t._v(
                " with\n                    authentication code\n                "
              ),
            ]),
          ]);
        },
      ];
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass:
              "todos-arrow_box relative flex-flow-column flex text-black",
            attrs: { id: "todos" },
            on: {
              click: function (t) {
                t.stopPropagation();
              },
            },
          },
          [
            n("TodoHeader", {
              attrs: {
                "current-list": t.currentList,
                "todo-type": "w",
                "is-pinned": t.settings.isPinned,
              },
              on: { changed: t.todoHeaderChanged },
            }),
            t._v(" "),
            n(
              "section",
              {
                staticClass: "flex relative todo-section flex-flow-column",
                on: {
                  click: function (e) {
                    e.stopPropagation(),
                      (t.showSidebar = !1),
                      (t.showTodoManager = !1);
                  },
                },
              },
              [
                n(
                  "div",
                  {
                    staticClass: "sidebar flex-flow-column flex",
                    class: { "show-sidebar": t.showSidebar },
                    attrs: { id: "todo-sidebar" },
                    on: {
                      click: function (t) {
                        t.stopPropagation();
                      },
                    },
                  },
                  [
                    n("TodoList", {
                      attrs: {
                        list: t.todoLists,
                        current: t.currentListId,
                        "show-todos-count": !1,
                        "is-create-enabled": !1,
                      },
                      on: { changed: t.changedTodoList },
                    }),
                  ],
                  1
                ),
                t._v(" "),
                n(
                  "div",
                  {
                    staticClass: "sidebar-right flex-flow-column flex",
                    class: { "show-right-sidebar": t.showTodoManager },
                    attrs: { id: "todo-manager-sidebar" },
                    on: {
                      click: function (t) {
                        t.stopPropagation();
                      },
                    },
                  },
                  [
                    t.showTodoManager
                      ? n("TodoManager", {
                          attrs: { todo: t.currentTodo },
                          on: { changed: t.updateTodo },
                        })
                      : t._e(),
                  ],
                  1
                ),
                t._v(" "),
                t.errorState
                  ? n("TodoError", {
                      attrs: { "error-state": t.errorState },
                      on: {
                        click: function (e) {
                          e.stopPropagation(),
                            (t.showSidebar = t.showTodoManager = !1);
                        },
                      },
                    })
                  : t._e(),
                t._v(" "),
                t.errorState
                  ? t._e()
                  : n(
                      "div",
                      {
                        staticClass: "flex flex-flow-column",
                        class: {
                          "flex-justify-center": t.isLoadingTodos,
                          "disable-pointer": t.showSidebar || t.showTodoManager,
                        },
                        staticStyle: { background: "rgba(255,255,255,0.9)" },
                        attrs: { id: "todo" },
                      },
                      [
                        t.isLoadingTodos
                          ? n(
                              "div",
                              {
                                staticClass:
                                  "flex flex-flow-column flex-justify-center flex-center",
                                attrs: { id: "loading-todo" },
                              },
                              [
                                n("img", {
                                  staticStyle: { height: "3.43rem" },
                                  attrs: {
                                    src: "/images/loading.svg",
                                    alt: "Loading...",
                                  },
                                }),
                              ]
                            )
                          : t._e(),
                        t._v(" "),
                        t.isLoadingTodos
                          ? t._e()
                          : [
                              n(
                                "div",
                                {
                                  staticClass: "todos",
                                  attrs: { id: "scroll-page" },
                                },
                                [
                                  t.incompleteTodos.length
                                    ? n("TodosGroup", {
                                        staticClass: "mar-0",
                                        attrs: {
                                          id: "incomplete-todos-list",
                                          todos: t.incompleteTodos,
                                        },
                                        on: { changed: t.changedTodo },
                                      })
                                    : t._e(),
                                  t._v(" "),
                                  n("AddTodo", {
                                    staticClass: "pv-10",
                                    attrs: { "is-completed-enabled": !1 },
                                    on: {
                                      create: t.createTodo,
                                      toggleCompleted: t.toggleCompletedTodos,
                                    },
                                  }),
                                  t._v(" "),
                                  n(
                                    "transition",
                                    {
                                      attrs: {
                                        mode: "out-in",
                                        name: "fast-fade",
                                      },
                                    },
                                    [
                                      t.incompleteTodos.length ||
                                      t.showCompletedTodos
                                        ? t._e()
                                        : n("NoTodo", {
                                            key: "no",
                                            attrs: {
                                              currentListTitle:
                                                t.currentListTitle,
                                            },
                                          }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                      ],
                      2
                    ),
              ],
              1
            ),
          ],
          1
        );
      },
      i = [];
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = n(105),
      i = n.n(o);
    for (var s in o)
      "default" !== s &&
        (function (t) {
          n.d(e, t, function () {
            return o[t];
          });
        })(s);
    var a = n(296),
      r = n(1),
      c = Object(r.a)(i.a, a.a, a.b, !1, null, null, null);
    e.default = c.exports;
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass:
              "todos-arrow_box relative flex-flow-column flex text-black",
            attrs: { id: "todos" },
            on: {
              click: function (t) {
                t.stopPropagation();
              },
            },
          },
          [
            n("TodoHeader", {
              attrs: {
                "current-list": t.currentList,
                "todo-type": "t",
                "is-pinned": t.settings.isPinned,
              },
              on: { changed: t.todoHeaderChanged },
            }),
            t._v(" "),
            n(
              "section",
              {
                staticClass: "flex relative todo-section flex-flow-column",
                on: {
                  click: function (e) {
                    e.stopPropagation(),
                      (t.showTodoManager = t.showSidebar = !1);
                  },
                },
              },
              [
                n(
                  "div",
                  {
                    staticClass: "sidebar flex-flow-column flex",
                    class: { "show-sidebar": t.showSidebar },
                    attrs: { id: "todo-sidebar" },
                    on: {
                      click: function (t) {
                        t.stopPropagation();
                      },
                    },
                  },
                  [
                    n(
                      "div",
                      { staticClass: "sidebar-container" },
                      [
                        n("TodoList", {
                          attrs: {
                            list: t.visibleLists,
                            current: t.currentListId,
                            "show-todos-count": !1,
                            "is-delete-enabled": !0,
                            "is-create-enabled": !0,
                          },
                          on: { changed: t.changedTodoList },
                        }),
                      ],
                      1
                    ),
                  ]
                ),
                t._v(" "),
                n(
                  "div",
                  {
                    staticClass: "sidebar-right flex-flow-column flex",
                    class: { "show-right-sidebar": t.showTodoManager },
                    attrs: { id: "todo-manager-sidebar" },
                    on: {
                      click: function (t) {
                        t.stopPropagation();
                      },
                    },
                  },
                  [
                    t.showTodoManager
                      ? n("TodoManager", {
                          attrs: { todo: t.currentTodo },
                          on: { changed: t.updateTodo },
                        })
                      : t._e(),
                  ],
                  1
                ),
                t._v(" "),
                t.errorState
                  ? n("TodoError", {
                      attrs: { "error-state": t.errorState },
                      on: {
                        click: function (e) {
                          e.stopPropagation(),
                            (t.showSidebar = t.showTodoManager = !1);
                        },
                      },
                    })
                  : t._e(),
                t._v(" "),
                t.errorState
                  ? t._e()
                  : n(
                      "div",
                      {
                        staticClass: "flex flex-flow-column",
                        class: {
                          "flex-justify-center": t.isLoadingTodos,
                          "disable-pointer": t.showSidebar || t.showTodoManager,
                        },
                        attrs: { id: "todo" },
                        on: {
                          click: function (e) {
                            e.stopPropagation(),
                              (t.showSidebar = t.showTodoManager = !1);
                          },
                        },
                      },
                      [
                        t.isLoadingTodos
                          ? n(
                              "div",
                              {
                                staticClass:
                                  "flex flex-flow-column flex-justify-center flex-center",
                                attrs: { id: "loading-todo" },
                              },
                              [
                                n("img", {
                                  staticStyle: { height: "3.43rem" },
                                  attrs: {
                                    src: "/images/loading.svg",
                                    alt: "Loading...",
                                  },
                                }),
                              ]
                            )
                          : t._e(),
                        t._v(" "),
                        t.isLoadingTodos
                          ? t._e()
                          : [
                              n(
                                "div",
                                { staticClass: "todos" },
                                [
                                  t.currentListIncompleteTodos.length
                                    ? n("TodosGroup", {
                                        staticClass: "mar-0",
                                        attrs: {
                                          id: "incomplete-todos-list",
                                          todos: t.sortByOrder(
                                            t.currentListIncompleteTodos
                                          ),
                                        },
                                        on: { changed: t.changedTodo },
                                      })
                                    : t._e(),
                                  t._v(" "),
                                  n("AddTodo", {
                                    staticClass: "pv-10",
                                    attrs: {
                                      "is-sticky": t.isAddTodoSticky,
                                      "is-completed-enabled": !1,
                                    },
                                    on: {
                                      create: t.createTodo,
                                      toggleCompleted: t.toggleCompletedTodos,
                                    },
                                  }),
                                  t._v(" "),
                                  n(
                                    "transition",
                                    [
                                      t.currentListIncompleteTodos.length ||
                                      t.showCompletedTodos
                                        ? t._e()
                                        : n("NoTodo", {
                                            attrs: {
                                              "current-list-title":
                                                t.currentList.title,
                                            },
                                          }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                      ],
                      2
                    ),
              ],
              1
            ),
          ],
          1
        );
      },
      i = [];
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "transition",
          [
            t.type === t.TodosType.DEFAULT && t.showTodosSection
              ? n("Todos", { key: "default", attrs: { settings: t.settings } })
              : t.type === t.TodosType.WUNDERLIST && t.showTodosSection
              ? n("WunderlistTodos", {
                  key: "wunderlist",
                  attrs: { settings: t.settings },
                })
              : t.type === t.TodosType.TODOIST && t.showTodosSection
              ? n("TodoistTodos", {
                  key: "todoist",
                  attrs: { settings: t.settings },
                })
              : t._e(),
          ],
          1
        );
      },
      i = [];
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = n(106),
      i = n.n(o);
    for (var s in o)
      "default" !== s &&
        (function (t) {
          n.d(e, t, function () {
            return o[t];
          });
        })(s);
    var a = n(299),
      r = n(1),
      c = Object(r.a)(i.a, a.a, a.b, !1, null, null, null);
    e.default = c.exports;
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "flex flex-end" }, [
          n("div", { staticClass: "container" }, [
            n("div", { staticClass: "row onboarding-message flex" }, [
              t._m(0),
              t._v(" "),
              n(
                "div",
                {
                  staticClass:
                    "col s6 flex flex-flow-column flex-justify-center",
                },
                [
                  n("h1", [
                    t._v("Hi, Thank you for "),
                    n("br"),
                    t._v(" choosing\n                    "),
                    n("span", { staticClass: "italics semi-bold relative" }, [
                      t._v("Subtle tab"),
                      n("span", { staticClass: "version" }, [
                        t._v("v" + t._s(t.version)),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  n(
                    "div",
                    {
                      staticClass: "onboarding-btn semi-bold",
                      on: { click: t.closeOnboarding },
                    },
                    [t._v("Explore Now")]
                  ),
                ]
              ),
            ]),
            t._v(" "),
            t._m(1),
          ]),
        ]);
      },
      i = [
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "col s6" }, [
            n("img", {
              attrs: {
                src: "images/welcome_mockup.png",
                alt: "Desktop Mockup",
                width: "90%",
              },
            }),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "row change-row" }, [
            n("div", { staticClass: "col s3 center" }, [
              n("div", { staticClass: "change-heading" }, [
                t._v("Inspiring Wallpapers"),
              ]),
              t._v(" "),
              n("div", { staticClass: "change-description" }, [
                t._v("Refreshing wallpapers "),
                n("br"),
                t._v(" of various category"),
              ]),
            ]),
            t._v(" "),
            n("div", { staticClass: "col s3 center" }, [
              n("div", { staticClass: "change-heading" }, [
                t._v("Keeps you updated"),
              ]),
              t._v(" "),
              n("div", { staticClass: "change-description" }, [
                t._v("Latest weather updates "),
                n("br"),
                t._v("with date and time"),
              ]),
            ]),
            t._v(" "),
            n("div", { staticClass: "col s3 center" }, [
              n("div", { staticClass: "change-heading" }, [
                t._v("Todo Widget"),
              ]),
              t._v(" "),
              n("div", { staticClass: "change-description" }, [
                t._v("Manage tasks and "),
                n("br"),
                t._v(" use integrations"),
              ]),
            ]),
            t._v(" "),
            n("div", { staticClass: "col s3 center" }, [
              n("div", { staticClass: "change-heading" }, [
                t._v("Google Calendar Integration"),
              ]),
              t._v(" "),
              n("div", { staticClass: "change-description" }, [
                t._v("Access calendar events "),
                n("br"),
                t._v(" easily on new tab"),
              ]),
            ]),
          ]);
        },
      ];
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = n(107),
      i = n.n(o);
    for (var s in o)
      "default" !== s &&
        (function (t) {
          n.d(e, t, function () {
            return o[t];
          });
        })(s);
    var a = n(306),
      r = n(1),
      c = Object(r.a)(i.a, a.a, a.b, !1, null, null, null);
    e.default = c.exports;
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      n(302);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(108),
      s = n.n(i);
    for (var a in i)
      "default" !== a &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(a);
    var r = n(304),
      c = n(1),
      l = o,
      u = Object(c.a)(s.a, r.a, r.b, !1, l, null, null);
    e.default = u.exports;
  },
  function (t, e, n) {
    var o = n(303);
    "string" == typeof o && (o = [[t.i, o, ""]]),
      o.locals && (t.exports = o.locals);
    var i = n(3).default;
    i("16f5f48a", o, !0, {});
  },
  function (t, e, n) {
    (e = t.exports = n(2)(!1)),
      e.push([
        t.i,
        '.thumbnail-icon{width:2vw;height:2vw;margin:0 5px;background-position:50%;background-size:cover;opacity:0;transition:all 1s;z-index:100}.thumbnail-image{width:100%;height:100%;background-position:50%;border-radius:3px;overflow:hidden;background-repeat:no-repeat}.thumbnail-background{transition:transform 2s linear;background-size:100%;position:absolute;z-index:1;left:0;right:0;bottom:0;top:0}.thumbnail-image:hover .thumbnail-background{transform:scale(1.5)}.thumbnail-icon-section{transition:background .25s ease-in-out;z-index:2}.thumbnail-image:hover .thumbnail-icon-section{background:rgba(0,0,0,.3)}.thumbnail-icon.active,.thumbnail-image:hover .thumbnail-icon{opacity:1}.thumbnail-favourite{background-image:url("/images/mark_favourite.png")}.thumbnail-lock{background-image:url("/images/mark_lock.png")}.thumbnail-favourite.active,.thumbnail-favourite:hover{background-image:url("/images/favourited.png")}.thumbnail-lock.active,.thumbnail-lock:hover{background-image:url("/images/locked.png")}.thumbnail-lock.loading{background-image:url("/images/loading-white.svg")}',
        "",
      ]);
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "full-height" }, [
          n("div", { staticClass: "full-height full-width" }, [
            t.isLoading
              ? n("div", { key: "loading", staticClass: "loading-thumbnail" })
              : n(
                  "div",
                  {
                    key: "loaded",
                    staticClass: "thumbnail-image fade_in relative",
                    on: {
                      mouseleave: t.onMouseLeave,
                      mouseover: function (e) {
                        t.onMouseEnter();
                      },
                      click: function (e) {
                        e.stopPropagation(), t.onMouseEnter(!0);
                      },
                    },
                  },
                  [
                    n("div", {
                      staticClass: "thumbnail-background",
                      style: t.background,
                    }),
                    t._v(" "),
                    n(
                      "section",
                      {
                        staticClass:
                          "flex flex-center full-height flex-justify-center thumbnail-icon-section pointer relative",
                      },
                      [
                        n("div", {
                          staticClass: "thumbnail-icon thumbnail-lock pointer",
                          class: { active: t.isLocked, loading: t.isLocking },
                          on: {
                            click: function (e) {
                              return e.stopPropagation(), t.toggleLock(e);
                            },
                          },
                        }),
                      ]
                    ),
                  ]
                ),
          ]),
        ]);
      },
      i = [];
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (t, e, n) {
        var o;
        return function () {
          var i = this,
            s = arguments,
            a = function () {
              (o = null), n || t.apply(i, s);
            },
            r = n && !o;
          clearTimeout(o), (o = setTimeout(a, e)), r && t.apply(i, s);
        };
      });
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass: "ph-10",
            attrs: { id: "history" },
            on: {
              mousedown: function (t) {
                t.stopPropagation();
              },
              click: function (t) {
                t.stopPropagation();
              },
            },
          },
          [
            n(
              "header",
              { staticClass: "flex flex-justify-space-between pv-5" },
              [
                n(
                  "span",
                  {
                    staticClass: "font-small semi-bold",
                    staticStyle: { "margin-left": "1.6vw" },
                  },
                  [t._v("Recent Wallpapers (H)")]
                ),
                t._v(" "),
                n("div", [
                  n(
                    "svg",
                    {
                      staticClass: "pointer",
                      attrs: {
                        width: "1.2em",
                        height: "1.2em",
                        viewBox: "0 0 12 12",
                      },
                      on: {
                        click: function (e) {
                          return e.stopPropagation(), t.close(e);
                        },
                      },
                    },
                    [
                      n(
                        "g",
                        { attrs: { "fill-rule": "nonzero", fill: "#000" } },
                        [
                          n("path", {
                            attrs: {
                              d: "M6,0 C2.69169231,0 0,2.69146154 0,6 C0,9.30853846 2.69169231,12 6,12 C9.30830769,12 12,9.30853846 12,6 C12,2.69146154 9.30830769,0 6,0 Z M6,11.5384615 C2.94623077,11.5384615 0.461538462,9.05376923 0.461538462,6 C0.461538462,2.94623077 2.94623077,0.461538462 6,0.461538462 C9.05376923,0.461538462 11.5384615,2.94623077 11.5384615,6 C11.5384615,9.05376923 9.05376923,11.5384615 6,11.5384615 Z",
                              id: "Shape",
                            },
                          }),
                          t._v(" "),
                          n("path", {
                            attrs: {
                              d: "M8.24007692,3.75992308 C8.14984615,3.66969231 8.004,3.66969231 7.91376923,3.75992308 L6,5.67369231 L4.08623077,3.75992308 C3.996,3.66969231 3.85015385,3.66969231 3.75992308,3.75992308 C3.66969231,3.85015385 3.66969231,3.996 3.75992308,4.08623077 L5.67369231,6 L3.75992308,7.91376923 C3.66969231,8.004 3.66969231,8.14984615 3.75992308,8.24007692 C3.80492308,8.28507692 3.864,8.30769231 3.92307692,8.30769231 C3.98215385,8.30769231 4.04123077,8.28507692 4.08623077,8.24007692 L6,6.32630769 L7.91376923,8.24007692 C7.95876923,8.28507692 8.01784615,8.30769231 8.07692308,8.30769231 C8.136,8.30769231 8.19507692,8.28507692 8.24007692,8.24007692 C8.33030769,8.14984615 8.33030769,8.004 8.24007692,7.91376923 L6.32630769,6 L8.24007692,4.08623077 C8.33030769,3.996 8.33030769,3.85015385 8.24007692,3.75992308 Z",
                              id: "Shape",
                            },
                          }),
                        ]
                      ),
                    ]
                  ),
                ]),
              ]
            ),
            t._v(" "),
            n(
              "section",
              {
                staticClass: "pb-5 flex flex-center",
                class: { "no-history": t.currentUrls.length <= 6 },
                attrs: { id: "history-thumbs" },
              },
              [
                n(
                  "div",
                  {
                    staticClass: "change-list flex-no-shrink pointer",
                    class: { "opacity-0 disable-pointer": 0 === t.startIndex },
                    on: {
                      click: function (e) {
                        e.stopPropagation(), t.prev();
                      },
                    },
                  },
                  [
                    n(
                      "svg",
                      {
                        attrs: {
                          width: "100%",
                          viewBox: "0 0 11 20",
                          id: "prev-arrow",
                        },
                      },
                      [
                        n("use", {
                          attrs: { "xlink:href": "#icon-next-arrow" },
                        }),
                      ]
                    ),
                  ]
                ),
                t._v(" "),
                n(
                  "div",
                  {
                    staticClass: "flex flex-center flex-grow-1",
                    class: { "flex-justify-space-between": t.isAllUrlsPresent },
                  },
                  t._l(t.currentUrls, function (e, o) {
                    return n("Thumbnail", {
                      key: o,
                      staticClass: "thumbnail",
                      attrs: {
                        url: e,
                        isLocked: t.isLocked(e),
                        isLocking: t.isLocking,
                      },
                      on: {
                        toggleLock: t.toggleLock,
                        changeBackground: t.onChangeBackground,
                      },
                    });
                  })
                ),
                t._v(" "),
                n(
                  "div",
                  {
                    staticClass: "change-list flex-no-shrink pointer",
                    class: { "opacity-0 disable-pointer": !t.isNextVisible },
                    on: {
                      click: function (e) {
                        e.stopPropagation(), t.next();
                      },
                    },
                  },
                  [
                    n(
                      "svg",
                      {
                        attrs: {
                          width: "100%",
                          viewBox: "0 0 11 20",
                          id: "next-arrow",
                        },
                      },
                      [
                        n("use", {
                          attrs: { "xlink:href": "#icon-next-arrow" },
                        }),
                      ]
                    ),
                  ]
                ),
              ]
            ),
          ]
        );
      },
      i = [];
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      n(308);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(109),
      s = n.n(i);
    for (var a in i)
      "default" !== a &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(a);
    var r = n(310),
      c = n(1),
      l = o,
      u = Object(c.a)(s.a, r.a, r.b, !1, l, "data-v-aac23a10", null);
    e.default = u.exports;
  },
  function (t, e, n) {
    var o = n(309);
    "string" == typeof o && (o = [[t.i, o, ""]]),
      o.locals && (t.exports = o.locals);
    var i = n(3).default;
    i("041956c9", o, !0, {});
  },
  function (t, e, n) {
    (e = t.exports = n(2)(!1)),
      e.push([
        t.i,
        ".photo-details[data-v-aac23a10]{font-size:.9rem;background:rgba(0,0,0,.1);padding:5px;border-radius:5px;color:#fff;text-align:center}.photo-location[data-v-aac23a10]{font-weight:500}.photo-user[data-v-aac23a10]{color:#fff;font-size:.7rem}",
        "",
      ]);
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.infoReceived
          ? n(
              "div",
              {
                staticClass:
                  "flex flex-justify-center flex-center ml-20 fade_in",
              },
              [
                n(
                  "a",
                  {
                    staticClass: "photo-details",
                    attrs: { href: t.url, target: "_blank" },
                    on: { click: t.onBgInfoClick },
                  },
                  [
                    n("span", { staticClass: "photo-location" }, [
                      t._v(t._s(t.area)),
                    ]),
                    t._v(" "),
                    t.user
                      ? n("span", { staticClass: "photo-user" }, [
                          t._v("By " + t._s(t.user.split(" ")[0])),
                        ])
                      : t._e(),
                  ]
                ),
              ]
            )
          : t._e();
      },
      i = [];
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      n(312);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(110),
      s = n.n(i);
    for (var a in i)
      "default" !== a &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(a);
    var r = n(318),
      c = n(1),
      l = o,
      u = Object(c.a)(s.a, r.a, r.b, !1, l, null, null);
    e.default = u.exports;
  },
  function (t, e, n) {
    var o = n(313);
    "string" == typeof o && (o = [[t.i, o, ""]]),
      o.locals && (t.exports = o.locals);
    var i = n(3).default;
    i("96def036", o, !0, {});
  },
  function (t, e, n) {
    (e = t.exports = n(2)(!1)),
      e.push([
        t.i,
        "#bookmarks-wrapper{align-items:flex-start;max-width:70%;min-width:65rem;justify-content:center}.bookmark-items{max-width:100%;align-items:flex-start}#add-bookmark{height:2.6rem;width:2.6rem;text-align:center;line-height:2.6rem;font-weight:300;font-size:1.9rem!important;color:#828282;border-radius:5px;background-color:hsla(0,0%,100%,.8);box-shadow:0 2px 3px 0 rgba(0,0,0,.1);flex-shrink:0}",
        "",
      ]);
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      n(315);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(111),
      s = n.n(i);
    for (var a in i)
      "default" !== a &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(a);
    var r = n(317),
      c = n(1),
      l = o,
      u = Object(c.a)(s.a, r.a, r.b, !1, l, null, null);
    e.default = u.exports;
  },
  function (t, e, n) {
    var o = n(316);
    "string" == typeof o && (o = [[t.i, o, ""]]),
      o.locals && (t.exports = o.locals);
    var i = n(3).default;
    i("1cba7dc8", o, !0, {});
  },
  function (t, e, n) {
    (e = t.exports = n(2)(!1)),
      e.push([
        t.i,
        ".bookmark-edit{color:#333;position:absolute;top:1px;right:4px;line-height:0;height:12px;font-size:1.3rem;font-weight:600;width:18px;text-align:center;border-radius:2px;opacity:0;transition:all .2s ease-in;transition-delay:.3s}.bookmark-edit:hover{background:hsla(0,0%,50%,.2)}.bookmark-item{box-shadow:0 2px 2px 0 rgba(0,0,0,.05);background-color:hsla(0,0%,100%,.8);border-radius:5px;transition:background-color .3s ease-in-out,padding-top .2s linear;user-select:none;max-width:6.99rem;min-width:36px;position:relative;color:#000!important}.bookmark-item:hover{background-color:#fff}.bookmark-item:hover .bookmark-edit{opacity:1}.bookmark-favicon{background-repeat:no-repeat;background-position:50%;background-size:16px;width:1.2rem;height:1.2rem;flex-shrink:0}.bookmark-name{font-weight:500;font-size:.7rem;max-width:60px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-left:5px}",
        "",
      ]);
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "a",
          {
            staticClass:
              "bookmark-item flex flex-end mr-10 pv-10 ph-10 text-black",
            attrs: { title: t.item.title, href: t.item.url },
            on: {
              click: function (e) {
                e.preventDefault(), t.onLinkClick(t.item.url);
              },
              contextmenu: function (e) {
                return e.preventDefault(), t.onRightClick(e);
              },
            },
          },
          [
            n(
              "div",
              {
                staticClass: "bookmark-edit",
                attrs: { title: "Edit Bookmark" },
                on: {
                  click: function (e) {
                    return e.stopPropagation(), t.onDotClick(e);
                  },
                },
              },
              [t._v("...")]
            ),
            t._v(" "),
            n("transition", { key: t.style, attrs: { mode: "out-in" } }, [
              n("div", { staticClass: "bookmark-favicon", style: t.style }),
            ]),
            t._v(" "),
            n("div", { staticClass: "bookmark-name" }, [
              t._v(t._s(t.item.title)),
            ]),
          ],
          1
        );
      },
      i = [];
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass: "flex flex-center",
            attrs: { id: "bookmarks-wrapper" },
          },
          [
            n(
              "div",
              { staticClass: "bookmark-items flex flex-center" },
              t._l(t.bookmarks, function (e, o) {
                return n("BookmarkItem", {
                  key: o + e.title,
                  attrs: { item: e, index: o },
                  on: {
                    onDotClick: t.onDotClick,
                    onRightClick: t.onRightClick,
                  },
                });
              })
            ),
            t._v(" "),
            n(
              "div",
              {
                attrs: { id: "add-bookmark" },
                on: {
                  click: function (e) {
                    return e.stopPropagation(), t.onAddClick(e);
                  },
                },
              },
              [t._v("+")]
            ),
          ]
        );
      },
      i = [];
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      n(320);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(112),
      s = n.n(i);
    for (var a in i)
      "default" !== a &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(a);
    var r = n(322),
      c = n(1),
      l = o,
      u = Object(c.a)(s.a, r.a, r.b, !1, l, "data-v-3ae8fa96", null);
    e.default = u.exports;
  },
  function (t, e, n) {
    var o = n(321);
    "string" == typeof o && (o = [[t.i, o, ""]]),
      o.locals && (t.exports = o.locals);
    var i = n(3).default;
    i("6150c216", o, !0, {});
  },
  function (t, e, n) {
    (e = t.exports = n(2)(!1)),
      e.push([
        t.i,
        "#context-menu[data-v-3ae8fa96]{background:#fff;min-width:11rem;box-shadow:0 5px 7px 0 rgba(0,0,0,.2);position:absolute;top:10%;left:10%;border-radius:5px;overflow:hidden}.context-item[data-v-3ae8fa96]{cursor:pointer;transition:all .1s ease-in}.context-item.separator[data-v-3ae8fa96]{border-bottom:1px solid #e3e3e3}.context-item[data-v-3ae8fa96]:hover{background:#7ab800;color:#fff}",
        "",
      ]);
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            ref: "contextMenu",
            staticClass: "font-xsmall",
            attrs: { id: "context-menu" },
          },
          [
            t.isVisible
              ? n(
                  "ul",
                  {
                    staticClass: "mar-0",
                    on: {
                      click: function (e) {
                        return e.stopPropagation(), t.onClick(e);
                      },
                    },
                  },
                  t._l(t.json, function (e) {
                    return n(
                      "li",
                      {
                        staticClass: "context-item pv-5 ph-10",
                        class:
                          (e.color ? e.color : "") +
                          "  " +
                          (e.separator ? "separator" : ""),
                        attrs: { "data-value": e.value },
                      },
                      [t._v("\n            " + t._s(e.label) + "\n        ")]
                    );
                  })
                )
              : t._e(),
          ]
        );
      },
      i = [];
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      n(324);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(113),
      s = n.n(i);
    for (var a in i)
      "default" !== a &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(a);
    var r = n(326),
      c = n(1),
      l = o,
      u = Object(c.a)(s.a, r.a, r.b, !1, l, "data-v-6c8d9f7c", null);
    e.default = u.exports;
  },
  function (t, e, n) {
    var o = n(325);
    "string" == typeof o && (o = [[t.i, o, ""]]),
      o.locals && (t.exports = o.locals);
    var i = n(3).default;
    i("724a93ae", o, !0, {});
  },
  function (t, e, n) {
    (e = t.exports = n(2)(!1)),
      e.push([
        t.i,
        "#modal[data-v-6c8d9f7c]{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.1)}.modal-content[data-v-6c8d9f7c]{background-color:#fff;position:absolute;top:25%;right:calc(50% - 250px);border-radius:5px;box-shadow:0 5px 3px 3px rgba(0,0,0,.1);padding:10px 20px;width:500px}.modal-control[data-v-6c8d9f7c]{float:right;margin-top:20px}.modal-button[data-v-6c8d9f7c]{padding:5px 25px!important;height:auto!important;border-radius:2px}.form-item input[data-v-6c8d9f7c]{margin-bottom:0;border-bottom:1px solid hsla(0,0%,62%,.5);padding-left:0!important;height:auto!important;padding-bottom:.2rem!important;padding-right:0!important}.error[data-v-6c8d9f7c],.suggestion[data-v-6c8d9f7c]{min-height:15px}.warning[data-v-6c8d9f7c]{color:orange}.suggestion-title[data-v-6c8d9f7c]{text-decoration:underline;cursor:pointer}[data-v-6c8d9f7c]::-webkit-input-placeholder{color:#999}",
        "",
      ]);
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.isVisible
          ? n(
              "div",
              {
                staticClass: "fade_in",
                attrs: { id: "modal" },
                on: { click: t.onClose },
              },
              [
                n(
                  "div",
                  {
                    staticClass: "modal-content",
                    on: {
                      keydown: function (t) {
                        t.stopPropagation();
                      },
                      click: function (t) {
                        t.stopPropagation();
                      },
                    },
                  },
                  [
                    n(
                      "div",
                      { staticClass: "modal-header font-medium semi-bold" },
                      [
                        n("span", [
                          t._v(
                            t._s(this.isEditMode ? "Edit" : "Add") + " Link"
                          ),
                        ]),
                        t._v(" "),
                        n(
                          "svg",
                          {
                            staticClass: "pointer",
                            staticStyle: {
                              float: "right",
                              "margin-right": "-10px",
                            },
                            attrs: {
                              viewBox: "0 0 12 12",
                              width: "1em",
                              height: "1em",
                            },
                            on: {
                              click: function (e) {
                                return e.stopPropagation(), t.onClose(e);
                              },
                            },
                          },
                          [n("use", { attrs: { "xlink:href": "#icon-close" } })]
                        ),
                      ]
                    ),
                    t._v(" "),
                    n("section", { staticClass: "modal-form" }, [
                      n(
                        "div",
                        { staticClass: "form-item mt-10" },
                        [
                          n("label", { attrs: { for: "name" } }, [t._v("URL")]),
                          t._v(" "),
                          n("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.url,
                                expression: "url",
                              },
                            ],
                            attrs: {
                              type: "url",
                              id: "url",
                              placeholder: "https://example.com",
                            },
                            domProps: { value: t.url },
                            on: {
                              paste: t.onPaste,
                              focusin: t.onFocusURL,
                              focusout: t.onBlurURL,
                              input: function (e) {
                                e.target.composing || (t.url = e.target.value);
                              },
                            },
                          }),
                          t._v(" "),
                          n("transition", [
                            t.error.url
                              ? n("small", { staticClass: "error" }, [
                                  t._v(t._s(t.error.url)),
                                ])
                              : t._e(),
                            t._v(" "),
                            t.URLWarning
                              ? n("small", { staticClass: "warning" }, [
                                  t._v(t._s(t.URLWarning)),
                                ])
                              : t._e(),
                          ]),
                        ],
                        1
                      ),
                      t._v(" "),
                      n("div", { staticClass: "form-item mt-15" }, [
                        n("label", { attrs: { for: "name" } }, [t._v("NAME")]),
                        t._v(" "),
                        n("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.title,
                              expression: "title",
                            },
                          ],
                          attrs: {
                            type: "text",
                            id: "name",
                            placeholder: "Example title",
                          },
                          domProps: { value: t.title },
                          on: {
                            input: function (e) {
                              e.target.composing || (t.title = e.target.value);
                            },
                          },
                        }),
                        t._v(" "),
                        n(
                          "div",
                          { staticClass: "suggestion font-light-black" },
                          [
                            n("transition", [
                              n(
                                "small",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: t.suggestion.title,
                                      expression: "suggestion.title",
                                    },
                                  ],
                                  staticClass: "fade_in",
                                },
                                [
                                  n("span", { staticClass: "semi-bold" }, [
                                    t._v("Suggestion: "),
                                  ]),
                                  t._v(" "),
                                  n(
                                    "span",
                                    {
                                      staticClass: "suggestion-title",
                                      on: {
                                        click: function (e) {
                                          return (
                                            e.stopPropagation(),
                                            t.onSuggestionClick(e)
                                          );
                                        },
                                      },
                                    },
                                    [t._v(t._s(t.suggestion.title))]
                                  ),
                                ]
                              ),
                            ]),
                          ],
                          1
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    n(
                      "section",
                      { staticClass: "modal-control" },
                      [
                        t.isEditMode
                          ? t._e()
                          : n("Button", {
                              staticClass: "semi-bold font-small",
                              attrs: {
                                text: "Add another",
                                type: "secondary",
                                size: "medium",
                                "is-disabled": t.isAddButtonDisabled,
                              },
                              on: {
                                clicked: function (e) {
                                  t.onSubmit(!0);
                                },
                              },
                            }),
                        t._v(" "),
                        t.isEditMode
                          ? n("Button", {
                              staticClass: "semi-bold font-small",
                              attrs: {
                                text: "Delete",
                                size: "medium",
                                type: "secondary",
                              },
                              on: {
                                clicked: function (e) {
                                  t.onRemove();
                                },
                              },
                            })
                          : t._e(),
                        t._v(" "),
                        n("Button", {
                          staticClass: "modal-button semi-bold font-small",
                          attrs: {
                            text: t.isEditMode ? "Update" : "Add",
                            type: "green",
                            "is-disabled": t.isAddButtonDisabled,
                          },
                          on: { clicked: t.onSubmit },
                        }),
                      ],
                      1
                    ),
                  ]
                ),
              ]
            )
          : t._e();
      },
      i = [];
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = n(114),
      i = n.n(o);
    for (var s in o)
      "default" !== s &&
        (function (t) {
          n.d(e, t, function () {
            return o[t];
          });
        })(s);
    var a = n(328),
      r = n(1),
      c = Object(r.a)(i.a, a.a, a.b, !1, null, null, null);
    e.default = c.exports;
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass:
              "flex flex-center flex-flow-column flex-justify-center covid-19-banner relative",
            staticStyle: { height: "100%" },
          },
          [
            n("div", { staticClass: "font-xsmall bold" }, [
              t._v("BE SUPPORTIVE. BE CAREFUL. BE KIND."),
            ]),
            t._v(" "),
            t._m(0),
            t._v(" "),
            n(
              "svg",
              {
                staticClass: "pointer",
                staticStyle: {
                  float: "right",
                  position: "absolute",
                  right: "1rem",
                  "font-size": "25px",
                },
                attrs: {
                  viewBox: "0 0 12 12",
                  width: "1em",
                  height: "1em",
                  id: "close_btn",
                },
                on: {
                  click: function (e) {
                    return e.stopPropagation(), t.onClose(e);
                  },
                },
              },
              [n("use", { attrs: { "xlink:href": "#icon-close" } })]
            ),
          ]
        );
      },
      i = [
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "font-xsmall" }, [
            t._v(
              "We will deal with this as a community, as a country and as one world. Surely these are tough\n        times but we will overcome this.\n        "
            ),
            n(
              "a",
              {
                staticStyle: {
                  "text-decoration": "underline",
                  color: "#409aeb",
                },
                attrs: {
                  href: "https://www.who.int/COVID-19",
                  title: "WHO info link",
                },
              },
              [t._v("Learn more")]
            ),
          ]);
        },
      ];
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = n(115),
      i = n.n(o);
    for (var s in o)
      "default" !== s &&
        (function (t) {
          n.d(e, t, function () {
            return o[t];
          });
        })(s);
    var a = n(334),
      r = n(1),
      c = Object(r.a)(i.a, a.a, a.b, !1, null, null, null);
    e.default = c.exports;
  },
  function (t, e, n) {
    "use strict";
    function o(t) {
      n(331);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(116),
      s = n.n(i);
    for (var a in i)
      "default" !== a &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(a);
    var r = n(333),
      c = n(1),
      l = o,
      u = Object(c.a)(s.a, r.a, r.b, !1, l, null, null);
    e.default = u.exports;
  },
  function (t, e, n) {
    var o = n(332);
    "string" == typeof o && (o = [[t.i, o, ""]]),
      o.locals && (t.exports = o.locals);
    var i = n(3).default;
    i("867fce16", o, !0, {});
  },
  function (t, e, n) {
    (e = t.exports = n(2)(!1)),
      e.push([
        t.i,
        ".notifications{position:fixed;bottom:4.65rem;left:20px;background:#fff;max-width:25rem;box-shadow:0 0 8px rgba(0,0,0,.3);border-radius:10px;transition:all .3s linear;padding:.9rem 1.4rem .9rem 1.1rem}.notifications.large{max-width:70vw}.meta{margin-right:16px}.heading{font-size:1.1rem;font-weight:500}.subHeading{font-size:1rem;color:#666;line-height:1.35rem}.primary button{box-shadow:0 2px 4px rgba(0,0,0,.25)}.btn-notification{border-radius:4px;padding:.35rem 1.1rem!important;height:auto!important}.btn-notification.shadow{box-shadow:0 2px 4px rgba(0,0,0,.25)!important}.media{margin-left:-11px;margin-right:-15px}",
        "",
      ]);
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { class: t.getNotificationClass }, [
          n("div", { staticClass: "n-container flex flex-center" }, [
            !t.thumbnail || t.media || t.video
              ? t._e()
              : n("div", { staticClass: "meta" }, [
                  t.thumbnail
                    ? n("div", { staticClass: "thumbnail" }, [
                        n("img", {
                          style: {
                            width: t.thumbnail.w,
                            height: t.thumbnail.h,
                          },
                          attrs: {
                            src: t.thumbnail.url,
                            alt: t.thumbnail.alt ? t.thumbnail.alt : "",
                            width: t.thumbnail.w,
                            height: t.thumbnail.h,
                          },
                        }),
                      ])
                    : t._e(),
                ]),
            t._v(" "),
            t.text
              ? n("div", { staticClass: "content" }, [
                  n(
                    "div",
                    {
                      staticClass:
                        "header flex flex-justify-space-between flex-center",
                    },
                    [
                      n("div", { staticClass: "heading flex-grow-1" }, [
                        t._v(
                          "\n                    " +
                            t._s(t.text.heading) +
                            "\n                "
                        ),
                      ]),
                      t._v(" "),
                      t.media || t.video
                        ? n(
                            "div",
                            {
                              staticClass: "resize pointer",
                              on: {
                                click: function (e) {
                                  return e.stopPropagation(), t.resizeClick(e);
                                },
                              },
                            },
                            [
                              n("transition", [
                                t.resize
                                  ? n(
                                      "svg",
                                      {
                                        attrs: {
                                          width: "16",
                                          height: "16",
                                          viewBox: "0 0 16 16",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg",
                                        },
                                      },
                                      [
                                        n(
                                          "g",
                                          {
                                            attrs: {
                                              "clip-path": "url(#clip0)",
                                            },
                                          },
                                          [
                                            n("path", {
                                              attrs: {
                                                d: "M9.29809 7.32703L13.9165 7.32703C14.2617 7.32703 14.5415 7.04721 14.5415 6.70203C14.5415 6.35684 14.2617 6.07703 13.9165 6.07703L10.807 6.07703L15.817 1.06696C16.0611 0.82287 16.0611 0.427151 15.817 0.183089C15.573 -0.0609738 15.1772 -0.061005 14.9332 0.183089L9.92309 5.19315L9.92309 2.08368C9.92309 1.73849 9.64328 1.45868 9.29809 1.45868C8.95291 1.45868 8.67309 1.73849 8.67309 2.08368L8.67309 6.70203C8.67309 7.04218 8.94953 7.32703 9.29809 7.32703Z",
                                                fill: "#333333",
                                              },
                                            }),
                                            t._v(" "),
                                            n("path", {
                                              attrs: {
                                                d: "M0.183074 15.8169C0.427167 16.061 0.822886 16.061 1.06695 15.8169L6.07701 10.8069L6.07701 13.9163C6.07701 14.2615 6.35682 14.5413 6.70201 14.5413C7.0472 14.5413 7.32701 14.2615 7.32701 13.9163L7.32701 9.298C7.32701 8.95844 7.05035 8.673 6.70201 8.673L2.08364 8.673C1.73845 8.673 1.45864 8.95282 1.45864 9.298C1.45864 9.64319 1.73845 9.923 2.08364 9.923L5.19314 9.923L0.183073 14.9331C-0.0610203 15.1772 -0.0610203 15.5729 0.183074 15.8169Z",
                                                fill: "#333333",
                                              },
                                            }),
                                          ]
                                        ),
                                        t._v(" "),
                                        n("defs", [
                                          n(
                                            "clipPath",
                                            { attrs: { id: "clip0" } },
                                            [
                                              n("rect", {
                                                attrs: {
                                                  width: "16",
                                                  height: "16",
                                                  fill: "white",
                                                },
                                              }),
                                            ]
                                          ),
                                        ]),
                                      ]
                                    )
                                  : n(
                                      "svg",
                                      {
                                        attrs: {
                                          width: "16",
                                          height: "16",
                                          viewBox: "0 0 16 16",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          fill: "#333333",
                                        },
                                      },
                                      [
                                        n("path", {
                                          attrs: {
                                            d: "M15.375 0H10.7566C10.4114 0 10.1316 0.279813 10.1316 0.625C10.1316 0.970187 10.4114 1.25 10.7566 1.25H13.8661L8.85606 6.26006C8.61197 6.50416 8.61197 6.89988 8.85606 7.14394C9.10012 7.388 9.49584 7.38803 9.73993 7.14394L14.75 2.13387V5.24334C14.75 5.58853 15.0298 5.86834 15.375 5.86834C15.7202 5.86834 16 5.58853 16 5.24334V0.625C16 0.284844 15.7236 0 15.375 0Z",
                                          },
                                        }),
                                        t._v(" "),
                                        n("path", {
                                          attrs: {
                                            d: "M7.14394 8.85603C6.89984 8.61197 6.50413 8.61194 6.26006 8.85603L1.25 13.8661V10.7566C1.25 10.4114 0.970187 10.1316 0.625 10.1316C0.279813 10.1316 0 10.4114 0 10.7566V15.375C0 15.7145 0.276656 16 0.625 16H5.24337C5.58856 16 5.86837 15.7202 5.86837 15.375C5.86837 15.0298 5.58856 14.75 5.24337 14.75H2.13387L7.14394 9.73991C7.38803 9.49581 7.38803 9.10009 7.14394 8.85603Z",
                                          },
                                        }),
                                      ]
                                    ),
                              ]),
                            ],
                            1
                          )
                        : t._e(),
                    ]
                  ),
                  t._v(" "),
                  t.media && !t.video
                    ? n("div", { staticClass: "media mt-10 mb-10" }, [
                        n("img", {
                          attrs: {
                            src: t.media.url,
                            alt: t.media.alt ? t.media.alt : "",
                            height: t.getMediaHeight,
                            width: t.getMediaWidth,
                          },
                        }),
                      ])
                    : t._e(),
                  t._v(" "),
                  t.video
                    ? n("div", { staticClass: "media mt-10 mb-10" }, [
                        n("video", {
                          attrs: {
                            autoplay: "",
                            loop: "",
                            muted: "",
                            height: t.getVideoHeight,
                            width: t.getVideoWidth,
                            src: t.video.url,
                          },
                          domProps: { muted: !0 },
                        }),
                      ])
                    : t._e(),
                  t._v(" "),
                  n("div", { staticClass: "subHeading" }, [
                    t._v(t._s(t.text.subHeading)),
                  ]),
                ])
              : t._e(),
          ]),
          t._v(" "),
          t.action
            ? n(
                "div",
                {
                  staticClass:
                    "controls mt-15 flex flex-center flex-justify-end",
                },
                [
                  t.action.secondary
                    ? n(
                        "div",
                        { staticClass: "secondary" },
                        [
                          n("Button", {
                            staticClass: "btn-notification",
                            attrs: {
                              text: t.action.secondary.text,
                              type: "secondary",
                              theme: "green",
                              size: "medium",
                            },
                            on: { clicked: t.secondaryClick },
                          }),
                        ],
                        1
                      )
                    : t._e(),
                  t._v(" "),
                  t.action.primary
                    ? n(
                        "div",
                        { staticClass: "primary" },
                        [
                          n("Button", {
                            staticClass: "btn-notification ml-15 shadow",
                            attrs: {
                              text: t.action.primary.text,
                              type: "primary",
                              theme: "green",
                              size: "medium",
                            },
                            on: { clicked: t.primaryClick },
                          }),
                        ],
                        1
                      )
                    : t._e(),
                ]
              )
            : t._e(),
        ]);
      },
      i = [];
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.notificationObj && t.notificationObj.data
          ? n(
              "div",
              { staticClass: "notification-wrapper" },
              [
                n(
                  "transition",
                  { attrs: { name: "slide-up" } },
                  [
                    n("Notification", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: t.show,
                          expression: "show",
                        },
                      ],
                      attrs: {
                        data: t.notificationObj.data,
                        "primary-click": t.primaryClick,
                        "secondary-click": t.secondaryClick,
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            )
          : t._e();
      },
      i = [];
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return i;
      });
    var o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            on: {
              mousedown: function (e) {
                return "button" in e ||
                  !t._k(e.keyCode, "left", 37, e.key, ["Left", "ArrowLeft"])
                  ? "button" in e && 0 !== e.button
                    ? null
                    : t.closeWindows(e)
                  : null;
              },
            },
          },
          [
            t.seenOnBoarding
              ? t._e()
              : n("onboarding", {
                  attrs: { id: "onboarding" },
                  on: { stopOnboarding: t.stopOnBoarding },
                }),
            t._v(" "),
            t.seenOnBoarding
              ? n(
                  "div",
                  [
                    n("div", {
                      class: { "show-loading": t.isLoading },
                      attrs: { id: "loading" },
                    }),
                    t._v(" "),
                    n(
                      "div",
                      {
                        class: { fade_in: !t.isLoading },
                        attrs: { id: "viewport" },
                      },
                      [
                        n("background", {
                          attrs: {
                            settings: t.sharedData.background,
                            "misc-settings": t.miscSettings,
                          },
                          on: {
                            stopLoading: t.stopLoad,
                            startLoading: t.startLoad,
                          },
                        }),
                        t._v(" "),
                        n("transition", [
                          t.hideBanner
                            ? t._e()
                            : n(
                                "div",
                                { attrs: { id: "position--top-banner" } },
                                [n("TopBanner")],
                                1
                              ),
                        ]),
                        t._v(" "),
                        n("div", { attrs: { id: "utilities" } }, [
                          n(
                            "div",
                            { attrs: { id: "position--bottom-right" } },
                            [
                              t.sharedData.showUtilities.showClock
                                ? n("ClockWrapper", {
                                    attrs: {
                                      settings: t.sharedData.clock,
                                      id: "clock",
                                    },
                                  })
                                : t._e(),
                            ],
                            1
                          ),
                          t._v(" "),
                          n(
                            "div",
                            {
                              attrs: { id: "position--top-right" },
                              on: {
                                click: function (t) {
                                  t.stopPropagation();
                                },
                                mousedown: function (t) {
                                  t.stopPropagation();
                                },
                              },
                            },
                            [
                              n(
                                "div",
                                { staticClass: "flex flex-center" },
                                [
                                  n("transition", [
                                    t.sharedData.showUtilities.showTodos
                                      ? n(
                                          "div",
                                          {
                                            staticClass: "todo-widget relative",
                                            on: {
                                              keydown: function (t) {
                                                t.stopPropagation();
                                              },
                                            },
                                          },
                                          [
                                            n(
                                              "div",
                                              {
                                                staticClass:
                                                  "todo-icon pointer",
                                                on: {
                                                  click: function (e) {
                                                    e.stopPropagation(),
                                                      t.toggleTodos();
                                                  },
                                                },
                                              },
                                              [
                                                n(
                                                  "svg",
                                                  {
                                                    attrs: {
                                                      viewBox: "0 0 512 512",
                                                      "enable-background":
                                                        "new 0 0 512 512",
                                                      width: "1.8em",
                                                    },
                                                  },
                                                  [
                                                    n("g", [
                                                      n(
                                                        "g",
                                                        {
                                                          attrs: {
                                                            id: "todo_btn",
                                                          },
                                                        },
                                                        [
                                                          n("path", {
                                                            attrs: {
                                                              d: "M370,95.4V53.9h-62.2V12.5H204.2v41.5H142v41.5H69.5v404.1h373.1V95.4H370z M224.9,33.2h62.2v20.7h-62.2V33.2z M162.7,74.7h186.5v62.2H162.7V74.7z M421.8,478.8H90.2V116.1H142v41.4h228v-41.4h51.8V478.8z",
                                                            },
                                                          }),
                                                          t._v(" "),
                                                          n("rect", {
                                                            attrs: {
                                                              width: "20.7",
                                                              x: "131.6",
                                                              y: "222.8",
                                                              height: "20.7",
                                                            },
                                                          }),
                                                          t._v(" "),
                                                          n("rect", {
                                                            attrs: {
                                                              width: "20.7",
                                                              x: "131.6",
                                                              y: "307.8",
                                                              height: "20.7",
                                                            },
                                                          }),
                                                          t._v(" "),
                                                          n("rect", {
                                                            attrs: {
                                                              width: "20.7",
                                                              x: "131.6",
                                                              y: "393.8",
                                                              height: "20.7",
                                                            },
                                                          }),
                                                          t._v(" "),
                                                          n("rect", {
                                                            attrs: {
                                                              width: "207.3",
                                                              x: "173.1",
                                                              y: "222.8",
                                                              height: "20.7",
                                                            },
                                                          }),
                                                          t._v(" "),
                                                          n("rect", {
                                                            attrs: {
                                                              width: "207.3",
                                                              x: "173.1",
                                                              y: "307.8",
                                                              height: "20.7",
                                                            },
                                                          }),
                                                          t._v(" "),
                                                          n("rect", {
                                                            attrs: {
                                                              width: "207.3",
                                                              x: "173.1",
                                                              y: "393.8",
                                                              height: "20.7",
                                                            },
                                                          }),
                                                        ]
                                                      ),
                                                    ]),
                                                  ]
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            n(
                                              "transition",
                                              [
                                                t.showTodos
                                                  ? n("TodoWrapper", {
                                                      attrs: {
                                                        type: t.sharedData.todos
                                                          .type,
                                                        settings:
                                                          t.sharedData.todos,
                                                      },
                                                    })
                                                  : t._e(),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        )
                                      : t._e(),
                                  ]),
                                  t._v(" "),
                                  n("transition", [
                                    t.sharedData.showUtilities.showNotes
                                      ? n(
                                          "div",
                                          {
                                            staticClass:
                                              "notes-widget relative",
                                            on: {
                                              keydown: function (t) {
                                                t.stopPropagation();
                                              },
                                            },
                                          },
                                          [
                                            n(
                                              "div",
                                              {
                                                staticClass:
                                                  "notes-icon pointer",
                                                on: {
                                                  click: function (e) {
                                                    e.stopPropagation(),
                                                      t.toggleNotes();
                                                  },
                                                },
                                              },
                                              [
                                                n(
                                                  "svg",
                                                  {
                                                    staticStyle: {
                                                      "enable-background":
                                                        "new 0 0 58.27 58.27",
                                                    },
                                                    attrs: {
                                                      x: "0px",
                                                      y: "0px",
                                                      viewBox:
                                                        "0 0 58.27 58.27",
                                                      "xml:space": "preserve",
                                                      width: "1.8em",
                                                    },
                                                  },
                                                  [
                                                    n(
                                                      "g",
                                                      {
                                                        attrs: {
                                                          id: "note_btn",
                                                        },
                                                      },
                                                      [
                                                        n("path", {
                                                          attrs: {
                                                            d: "M56.261,35.724l-2.849-2.85c-1.128-1.127-3.094-1.127-4.222,0L33.799,48.265l-2.121,7.779l-0.519,0.519   c-0.388,0.388-0.389,1.014-0.006,1.405l-0.005,0.02l0.019-0.005c0.194,0.19,0.446,0.288,0.699,0.288   c0.256,0,0.512-0.098,0.707-0.293l0.52-0.52l7.778-2.121l15.39-15.391C57.425,38.781,57.425,36.888,56.261,35.724z M36.108,48.784   l10.243-10.243l4.243,4.243L40.351,53.027L36.108,48.784z M35.206,50.71l3.22,3.22l-4.428,1.208L35.206,50.71z M54.847,38.531   l-2.839,2.839l-4.243-4.243l2.839-2.839c0.372-0.373,1.021-0.373,1.393,0l2.85,2.85C55.231,37.521,55.231,38.147,54.847,38.531z",
                                                          },
                                                        }),
                                                        t._v(" "),
                                                        n("path", {
                                                          attrs: {
                                                            d: "M8.135,36h26c0.552,0,1-0.447,1-1s-0.448-1-1-1h-26c-0.552,0-1,0.447-1,1S7.583,36,8.135,36z",
                                                          },
                                                        }),
                                                        t._v(" "),
                                                        n("path", {
                                                          attrs: {
                                                            d: "M30.135,40h-22c-0.552,0-1,0.447-1,1s0.448,1,1,1h22c0.552,0,1-0.447,1-1S30.688,40,30.135,40z",
                                                          },
                                                        }),
                                                        t._v(" "),
                                                        n("path", {
                                                          attrs: {
                                                            d: "M8.135,18h13c0.552,0,1-0.447,1-1s-0.448-1-1-1h-13c-0.552,0-1,0.447-1,1S7.583,18,8.135,18z",
                                                          },
                                                        }),
                                                        t._v(" "),
                                                        n("path", {
                                                          attrs: {
                                                            d: "M21.135,48c0.552,0,1-0.447,1-1s-0.448-1-1-1h-13c-0.552,0-1,0.447-1,1s0.448,1,1,1H21.135z",
                                                          },
                                                        }),
                                                        t._v(" "),
                                                        n("path", {
                                                          attrs: {
                                                            d: "M37.135,22h-29c-0.552,0-1,0.447-1,1s0.448,1,1,1h29c0.552,0,1-0.447,1-1S37.688,22,37.135,22z",
                                                          },
                                                        }),
                                                        t._v(" "),
                                                        n("path", {
                                                          attrs: {
                                                            d: "M8.135,30h14c0.552,0,1-0.447,1-1s-0.448-1-1-1h-14c-0.552,0-1,0.447-1,1S7.583,30,8.135,30z",
                                                          },
                                                        }),
                                                        t._v(" "),
                                                        n("path", {
                                                          attrs: {
                                                            d: "M38.135,29c0-0.553-0.448-1-1-1h-7c-0.552,0-1,0.447-1,1s0.448,1,1,1h7C37.688,30,38.135,29.553,38.135,29z",
                                                          },
                                                        }),
                                                        t._v(" "),
                                                        n("path", {
                                                          attrs: {
                                                            d: "M26.845,29.709c0.18-0.189,0.29-0.45,0.29-0.71s-0.11-0.52-0.29-0.71c-0.38-0.37-1.05-0.37-1.42,0   c-0.18,0.19-0.29,0.45-0.29,0.71c0,0.271,0.11,0.521,0.29,0.71c0.19,0.181,0.45,0.29,0.71,0.29   C26.395,29.999,26.656,29.89,26.845,29.709z",
                                                          },
                                                        }),
                                                        t._v(" "),
                                                        n("path", {
                                                          attrs: {
                                                            d: "M26.135,56h-23V8h7v2c0,0.553,0.448,1,1,1h23c0.552,0,1-0.447,1-1V8h7v22c0,0.553,0.448,1,1,1s1-0.447,1-1V7   c0-0.553-0.448-1-1-1h-8V4c0-0.553-0.448-1-1-1h-6V1c0-0.553-0.448-1-1-1h-9c-0.552,0-1,0.447-1,1v2h-6c-0.552,0-1,0.447-1,1v2h-8   c-0.552,0-1,0.447-1,1v50c0,0.553,0.448,1,1,1h24c0.552,0,1-0.447,1-1S26.688,56,26.135,56z M19.135,2h7v2v2h-7V4V2z M12.135,5h5v2   c0,0.553,0.448,1,1,1h9c0.552,0,1-0.447,1-1V5h5v2v2h-21V7V5z",
                                                          },
                                                        }),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            n(
                                              "transition",
                                              [
                                                t.showNotes
                                                  ? n("notes", {
                                                      attrs: {
                                                        settings:
                                                          t.sharedData.notes,
                                                      },
                                                    })
                                                  : t._e(),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        )
                                      : t._e(),
                                  ]),
                                ],
                                1
                              ),
                            ]
                          ),
                          t._v(" "),
                          n(
                            "div",
                            { attrs: { id: "position--top-left" } },
                            [
                              n(
                                "transition",
                                [
                                  t.sharedData.showUtilities.showWeather
                                    ? n("weather", {
                                        attrs: {
                                          settings: t.sharedData.weather,
                                          otherSettings: t.otherSettings,
                                        },
                                        on: {
                                          weatherInfoStateChange:
                                            t.weatherInfoStateChange,
                                        },
                                      })
                                    : t._e(),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          t._v(" "),
                          n(
                            "div",
                            { attrs: { id: "position--top-middle" } },
                            [
                              n(
                                "transition",
                                [
                                  t.sharedData.showUtilities.showBookmarks
                                    ? n("BookmarksWrapper", {
                                        staticClass: "pointer fade_in",
                                      })
                                    : t._e(),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          t._v(" "),
                          n("div", { attrs: { id: "position--bottom-left" } }, [
                            n("div", { staticClass: "flex flex-end" }, [
                              n(
                                "div",
                                {
                                  staticClass:
                                    "pointer nav-bar-opener relative",
                                  staticStyle: { height: "2em" },
                                  on: {
                                    click: function (e) {
                                      return (
                                        e.stopPropagation(),
                                        t.toggleCustomizeMenu(e)
                                      );
                                    },
                                  },
                                },
                                [
                                  n(
                                    "svg",
                                    {
                                      attrs: {
                                        "enable-background": "new 0 0 20 20",
                                        height: "1.8em",
                                        version: "1.1",
                                        viewBox: "0 0 100 100",
                                        width: "2em",
                                        "xml:space": "preserve",
                                      },
                                    },
                                    [
                                      n(
                                        "g",
                                        { attrs: { id: "customize_btn" } },
                                        [
                                          n("path", {
                                            attrs: {
                                              d: "M86.139,41.691l-8.095-1.175c-0.276-0.762-0.539-1.506-0.864-2.219l4.987-6.622c1.406-1.882,1.123-4.653-0.673-6.448   l-5.846-5.854c-1.006-1.007-2.358-1.578-3.715-1.578c-1.006,0-1.947,0.32-2.73,0.904l-6.615,4.97   c-0.729-0.337-1.472-0.605-2.22-0.883l-1.179-7.984C58.85,12.447,56.68,11,54.141,11h-8.28c-2.539,0-4.709,1.447-5.048,3.803   l-1.18,7.96c-0.748,0.279-1.495,0.551-2.226,0.892l-6.611-4.96c-0.782-0.584-1.727-0.903-2.731-0.903   c-1.359,0-2.716,0.571-3.722,1.58l-5.856,5.852c-1.799,1.8-2.1,4.572-0.693,6.452l4.94,6.617c-0.337,0.728-0.665,1.473-0.941,2.225   l-7.928,1.175C11.567,42.023,10,44.147,10,46.741v8.276c0,2.594,1.565,4.719,3.862,5.051l8.097,1.176   c0.276,0.763,0.538,1.507,0.863,2.219l-4.987,6.622c-1.407,1.883-1.124,4.654,0.672,6.449l5.846,5.854   c1.005,1.008,2.356,1.582,3.713,1.582c1.006,0,1.951-0.313,2.733-0.896l6.614-4.954c0.728,0.337,1.473,0.635,2.221,0.913   l1.18,8.043C41.152,89.432,43.322,91,45.861,91h8.28c2.539,0,4.709-1.566,5.049-3.924l1.18-8.079   c0.742-0.276,1.488-0.548,2.227-0.892l6.611,4.959c0.779,0.584,1.725,0.903,2.73,0.903c1.358,0,2.717-0.571,3.724-1.579   l5.854-5.853c1.799-1.8,2.1-4.57,0.694-6.453l-4.94-6.615c0.34-0.733,0.666-1.479,0.941-2.225l7.93-1.175   C88.436,59.736,90,57.611,90,55.02v-8.277C90,44.147,88.436,42.023,86.139,41.691z M73.882,58.236   c-0.455,1.479-1.06,2.935-1.796,4.324l-0.749,1.407l6.683,8.925c-0.017,0.025-0.037,0.056-0.068,0.086l-5.854,5.856   c-0.027,0.028-0.056,0.052-0.08,0.067l-8.929-6.666l-1.407,0.75c-1.434,0.761-2.888,1.378-4.326,1.82l-1.523,0.488L54.236,86.68   C54.211,86.688,54.18,87,54.141,87h-8.28c-0.036,0-0.067-0.313-0.093-0.318l-1.596-11.3l-1.526-0.563   c-1.474-0.451-2.928-1.086-4.324-1.824l-1.409-0.764l-8.941,6.664c-0.021-0.015-0.043-0.037-0.066-0.06l-5.852-5.856   c-0.026-0.025-0.049-0.054-0.065-0.076l6.692-8.932l-0.76-1.412c-0.703-1.324-1.304-2.738-1.791-4.324l-0.514-1.521l-11.193-1.574   C14.419,55.104,14,55.063,14,55.02v-8.277c0-0.045,0.419-0.085,0.424-0.12l11.112-1.575l0.526-1.521   c0.456-1.482,1.09-2.938,1.825-4.325l0.762-1.408l-6.674-8.926c0.016-0.025,0.041-0.054,0.072-0.085l5.854-5.854   c0.028-0.028,0.058-0.049,0.083-0.066l8.929,6.671l1.409-0.744c1.436-0.762,2.89-1.363,4.324-1.804l1.524-0.457L45.765,15.2   c0.025-0.007,0.058-0.2,0.096-0.2h8.28c0.037,0,0.068,0.191,0.094,0.198l1.597,11.214l1.524,0.528   c1.486,0.457,2.94,1.092,4.324,1.827l1.409,0.761l8.94-6.665c0.02,0.016,0.043,0.037,0.066,0.061l5.85,5.854   c0.027,0.027,0.051,0.055,0.066,0.078l-6.689,8.932l0.758,1.411c0.693,1.311,1.313,2.765,1.791,4.325l0.516,1.521l11.189,1.575   C85.581,46.656,86,46.696,86,46.741v8.276c0,0.047-0.419,0.086-0.424,0.121l-11.111,1.574L73.882,58.236z",
                                            },
                                          }),
                                          t._v(" "),
                                          n("g", [
                                            n("path", {
                                              attrs: {
                                                d: "M50.001,67.971c-9.61,0-17.428-7.82-17.428-17.43c0-9.61,7.818-17.429,17.428-17.429c9.608,0,17.429,7.818,17.429,17.429    C67.43,60.15,59.609,67.971,50.001,67.971z M50.001,37.187c-7.363,0-13.354,5.991-13.354,13.354    c0,7.363,5.991,13.354,13.354,13.354c7.362,0,13.354-5.988,13.354-13.354C63.354,43.178,57.363,37.187,50.001,37.187z",
                                              },
                                            }),
                                          ]),
                                        ]
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  n(
                                    "div",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: !t.miscSettings.update.isSeen,
                                          expression:
                                            "!miscSettings.update.isSeen",
                                        },
                                      ],
                                      staticClass: "whatsnew-notify",
                                    },
                                    [t._v("!")]
                                  ),
                                ]
                              ),
                              t._v(" "),
                              n(
                                "div",
                                {
                                  staticClass: "pointer ml-20",
                                  on: {
                                    click: function (e) {
                                      e.stopPropagation(), (t.showHistory = !0);
                                    },
                                  },
                                },
                                [
                                  n("transition", [
                                    t.isBackgroundChangeLocked
                                      ? n(
                                          "svg",
                                          {
                                            key: "locked",
                                            attrs: {
                                              width: "2.6em",
                                              height: "1.8em",
                                              viewBox: "0 0 34 26",
                                              version: "1.1",
                                            },
                                          },
                                          [
                                            n(
                                              "g",
                                              {
                                                attrs: {
                                                  stroke: "none",
                                                  "stroke-width": "1",
                                                  fill: "none",
                                                  "fill-rule": "evenodd",
                                                  id: "locked-wallpaper-icon",
                                                },
                                              },
                                              [
                                                n(
                                                  "g",
                                                  {
                                                    attrs: {
                                                      transform:
                                                        "translate(-10.000000, -4.000000)",
                                                    },
                                                  },
                                                  [
                                                    n(
                                                      "g",
                                                      {
                                                        attrs: {
                                                          transform:
                                                            "translate(11.000000, 4.000000)",
                                                        },
                                                      },
                                                      [
                                                        n("path", {
                                                          attrs: {
                                                            d: "M20.3371974,9 C20.3371974,9 13.5581316,9 0,9 L0,25 L29,25 L29,16.4553162",
                                                          },
                                                        }),
                                                        t._v(" "),
                                                        n("path", {
                                                          attrs: {
                                                            d: "M31.8999096,6.20467534 L30.8087788,6.20467534 L30.8087788,3.31324389 C30.8087788,1.48630645 29.3224428,0 27.4955941,0 C25.6686862,0 24.1823798,1.48630645 24.1823798,3.31324389 L24.1823798,6.20467534 L23.0912194,6.20467534 C22.4895129,6.20467534 22,6.69421782 22,7.29589478 L22,14.0452781 C22,14.6469847 22.4895129,15.1364976 23.0912194,15.1364976 L31.8999096,15.1364976 C32.5016161,15.1364976 32.991129,14.6469847 32.991129,14.0452781 L32.991129,7.29592434 C32.991129,6.69421782 32.5016161,6.20467534 31.8999096,6.20467534 Z M24.90982,3.31324389 C24.90982,1.88748355 26.0697746,0.72749934 27.4955645,0.72749934 C28.9213249,0.72749934 30.0812795,1.88748355 30.0812795,3.31324389 L30.0812795,6.20467534 L24.90982,6.20467534 L24.90982,3.31324389 Z M32.2636593,14.0453077 C32.2636593,14.2458667 32.1004686,14.4090574 31.8999096,14.4090574 L23.0912194,14.4090574 C22.8906605,14.4090574 22.7274698,14.2458963 22.7274698,14.0453077 L22.7274698,7.29592434 C22.7274698,7.09536536 22.8906605,6.93217467 23.0912194,6.93217467 L31.8999096,6.93217467 C32.1004686,6.93217467 32.2636593,7.09533579 32.2636593,7.29592434 L32.2636593,14.0453077 Z",
                                                            id: "wallpaper-lock-icon",
                                                            "fill-rule":
                                                              "nonzero",
                                                            stroke: "none",
                                                          },
                                                        }),
                                                        t._v(" "),
                                                        n("polyline", {
                                                          attrs: {
                                                            "stroke-linecap":
                                                              "square",
                                                            transform:
                                                              "translate(4.914229, 21.385445) rotate(-10.000000) translate(-4.914229, -21.385445) ",
                                                            points:
                                                              "0.60663155 23.9218261 5.7429435 18.8490641 9.22182612 22.4984239",
                                                          },
                                                        }),
                                                        t._v(" "),
                                                        n("polyline", {
                                                          attrs: {
                                                            "stroke-linecap":
                                                              "square",
                                                            points:
                                                              "9.4 21.7628663 15.8130386 12.0857913 26.9867739 24.4322118",
                                                          },
                                                        }),
                                                        t._v(" "),
                                                        n("ellipse", {
                                                          attrs: {
                                                            id: "Oval",
                                                            cx: "7.9321391",
                                                            cy: "12.8222737",
                                                            rx: "1.95915115",
                                                            ry: "1.91656091",
                                                          },
                                                        }),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]
                                        )
                                      : n(
                                          "svg",
                                          {
                                            key: "history",
                                            attrs: {
                                              width: "2.6em",
                                              viewBox: "0 0 39 24",
                                              version: "1.1",
                                            },
                                          },
                                          [
                                            n(
                                              "g",
                                              {
                                                attrs: {
                                                  id: "wallpaper-history-icon",
                                                  stroke: "none",
                                                  "stroke-width": "1",
                                                  fill: "none",
                                                  "fill-rule": "evenodd",
                                                },
                                              },
                                              [
                                                n(
                                                  "g",
                                                  {
                                                    attrs: {
                                                      transform:
                                                        "translate(-10.000000, -5.000000)",
                                                    },
                                                  },
                                                  [
                                                    n(
                                                      "g",
                                                      {
                                                        attrs: {
                                                          transform:
                                                            "translate(11.000000, 6.000000)",
                                                        },
                                                      },
                                                      [
                                                        n("rect", {
                                                          attrs: {
                                                            id: "Rectangle",
                                                            x: "0",
                                                            y: "0",
                                                            width: "29",
                                                            height: "16",
                                                          },
                                                        }),
                                                        t._v(" "),
                                                        n(
                                                          "g",
                                                          {
                                                            attrs: {
                                                              id: "Stack-2",
                                                              transform:
                                                                "translate(6.000000, 4.000000)",
                                                            },
                                                          },
                                                          [
                                                            n("path", {
                                                              attrs: {
                                                                d: "M-1.89179639e-16,15.5 L27.2636593,15.5",
                                                                id: "Line",
                                                              },
                                                            }),
                                                            t._v(" "),
                                                            n("path", {
                                                              attrs: {
                                                                d: "M19.5,8 L35.5,8",
                                                                id: "Line-Copy",
                                                                transform:
                                                                  "translate(27.500000, 8.000000) rotate(90.000000) translate(-27.500000, -8.000000) ",
                                                              },
                                                            }),
                                                          ]
                                                        ),
                                                        t._v(" "),
                                                        n(
                                                          "g",
                                                          {
                                                            attrs: {
                                                              id: "Stack-1",
                                                              transform:
                                                                "translate(10.000000, 7.000000)",
                                                            },
                                                          },
                                                          [
                                                            n("path", {
                                                              attrs: {
                                                                d: "M-1.89179639e-16,15.5 L27.2636593,15.5",
                                                                id: "Line",
                                                              },
                                                            }),
                                                            t._v(" "),
                                                            n("path", {
                                                              attrs: {
                                                                d: "M19.5,8 L35.5,8",
                                                                id: "Line-Copy",
                                                                transform:
                                                                  "translate(27.500000, 8.000000) rotate(90.000000) translate(-27.500000, -8.000000) ",
                                                              },
                                                            }),
                                                          ]
                                                        ),
                                                        t._v(" "),
                                                        n("polyline", {
                                                          attrs: {
                                                            id: "Shape",
                                                            "stroke-linecap":
                                                              "square",
                                                            transform:
                                                              "translate(4.914229, 12.385445) rotate(-10.000000) translate(-4.914229, -12.385445) ",
                                                            points:
                                                              "0.60663155 14.9218261 5.7429435 9.84906413 9.22182612 13.4984239",
                                                          },
                                                        }),
                                                        t._v(" "),
                                                        n("polyline", {
                                                          attrs: {
                                                            id: "Shape",
                                                            "stroke-linecap":
                                                              "square",
                                                            points:
                                                              "9.4 12.7628663 15.8130386 3.08579126 26.9867739 15.4322118",
                                                          },
                                                        }),
                                                        t._v(" "),
                                                        n("ellipse", {
                                                          attrs: {
                                                            id: "Oval",
                                                            cx: "7.9321391",
                                                            cy: "3.8222737",
                                                            rx: "1.95915115",
                                                            ry: "1.91656091",
                                                          },
                                                        }),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                  ]),
                                ],
                                1
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          n(
                            "div",
                            { attrs: { id: "position--bottom-middle" } },
                            [
                              n("BackgroundInfo", {
                                staticClass: "pointer ml-20",
                              }),
                            ],
                            1
                          ),
                        ]),
                      ],
                      1
                    ),
                    t._v(" "),
                    n("transition", [
                      t.showCustomizeMenu
                        ? n(
                            "div",
                            { attrs: { id: "customize-section" } },
                            [
                              n("div", {
                                staticClass: "customization-overlay",
                              }),
                              t._v(" "),
                              n("customize", {
                                attrs: {
                                  settings: t.sharedData,
                                  id: "customize",
                                  "misc-settings": t.miscSettings,
                                },
                                on: {
                                  closeCustomizeMenu: t.toggleCustomizeMenu,
                                },
                              }),
                            ],
                            1
                          )
                        : t._e(),
                    ]),
                    t._v(" "),
                    n(
                      "transition",
                      { attrs: { name: "slide-up" } },
                      [t.showHistory ? n("History") : t._e()],
                      1
                    ),
                    t._v(" "),
                    n("ContextMenu"),
                    t._v(" "),
                    n("Modal"),
                    t._v(" "),
                    n("NotificationWrapper"),
                  ],
                  1
                )
              : t._e(),
            t._v(" "),
            n("svg", { staticStyle: { display: "none" } }, [
              n("defs", [
                n("g", { attrs: { id: "icon-next-arrow" } }, [
                  n("path", {
                    attrs: {
                      d: "M1.52721417,18.9863124 C1.39838969,19.1151369 1.2373591,19.1795491 1.06022544,19.1795491 C0.883091787,19.1795491 0.722061192,19.1151369 0.593236715,18.9863124 C0.335587762,18.7286634 0.335587762,18.3099839 0.593236715,18.0523349 L8.8057971,9.83977456 L0.593236715,1.62721417 C0.335587762,1.36956522 0.335587762,0.950885668 0.593236715,0.693236715 C0.850885668,0.435587762 1.26956522,0.435587762 1.52721417,0.693236715 L10.2067633,9.37278583 C10.4644122,9.63043478 10.4644122,10.0491143 10.2067633,10.3067633 L1.52721417,18.9863124 L1.52721417,18.9863124 Z",
                    },
                  }),
                ]),
                t._v(" "),
                n(
                  "g",
                  {
                    attrs: {
                      id: "icon-widget-arrow",
                      transform: "translate(-25.000000, -50.000000)",
                      stroke: "rgba(255,255,255,0.5)",
                      fill: "rgba(255,255,255,0.5)",
                      "stroke-width": "2",
                      "fill-rule": "nonzero",
                    },
                  },
                  [
                    n("path", {
                      attrs: {
                        d: "M46.4347899,51.1140206 C45.950678,51.012669 45.6164104,51.012669 45.4319868,51.1140206 L36.6142361,55.969398 L27.7791956,51.1140206 C27.5025603,50.9619931 27.0530279,50.9619931 26.7763926,51.1140206 C26.4997572,51.2660481 26.4997572,51.5130927 26.7763926,51.6651202 L36.0955448,56.7865456 C36.2338625,56.8625594 36.4067596,56.9005662 36.5969463,56.9005662 C36.7698434,56.9005662 36.9600302,56.8625594 37.0983479,56.7865456 L46.4175001,51.6651202 C46.6134502,51.5637685 46.6192134,51.3800687 46.4347899,51.1140206 Z",
                      },
                    }),
                  ]
                ),
                t._v(" "),
                n(
                  "g",
                  {
                    attrs: {
                      "fill-rule": "nonzero",
                      fill: "#000",
                      id: "icon-close",
                    },
                  },
                  [
                    n("path", {
                      attrs: {
                        d: "M6,0 C2.69169231,0 0,2.69146154 0,6 C0,9.30853846 2.69169231,12 6,12 C9.30830769,12 12,9.30853846 12,6 C12,2.69146154 9.30830769,0 6,0 Z M6,11.5384615 C2.94623077,11.5384615 0.461538462,9.05376923 0.461538462,6 C0.461538462,2.94623077 2.94623077,0.461538462 6,0.461538462 C9.05376923,0.461538462 11.5384615,2.94623077 11.5384615,6 C11.5384615,9.05376923 9.05376923,11.5384615 6,11.5384615 Z",
                        id: "Shape",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M8.24007692,3.75992308 C8.14984615,3.66969231 8.004,3.66969231 7.91376923,3.75992308 L6,5.67369231 L4.08623077,3.75992308 C3.996,3.66969231 3.85015385,3.66969231 3.75992308,3.75992308 C3.66969231,3.85015385 3.66969231,3.996 3.75992308,4.08623077 L5.67369231,6 L3.75992308,7.91376923 C3.66969231,8.004 3.66969231,8.14984615 3.75992308,8.24007692 C3.80492308,8.28507692 3.864,8.30769231 3.92307692,8.30769231 C3.98215385,8.30769231 4.04123077,8.28507692 4.08623077,8.24007692 L6,6.32630769 L7.91376923,8.24007692 C7.95876923,8.28507692 8.01784615,8.30769231 8.07692308,8.30769231 C8.136,8.30769231 8.19507692,8.28507692 8.24007692,8.24007692 C8.33030769,8.14984615 8.33030769,8.004 8.24007692,7.91376923 L6.32630769,6 L8.24007692,4.08623077 C8.33030769,3.996 8.33030769,3.85015385 8.24007692,3.75992308 Z",
                        id: "Shape",
                      },
                    }),
                  ]
                ),
              ]),
            ]),
          ],
          1
        );
      },
      i = [];
  },
]);

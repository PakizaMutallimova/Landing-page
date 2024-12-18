function _extends() {
    return (
        (_extends = Object.assign
            ? Object.assign.bind()
            : function (r) {
                  for (var a = 1; a < arguments.length; a++) {
                      var t = arguments[a];
                      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e]);
                  }
                  return r;
              }),
        _extends.apply(this, arguments)
    );
}
const uriAttributes = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
    SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
    allowedAttribute = (r, a) => {
        const t = r.nodeName.toLowerCase();
        return a.includes(t) ? (uriAttributes.has(t) ? !!SAFE_URL_PATTERN.test(r.nodeValue) : !0) : a.filter((e) => e instanceof RegExp).some((e) => e.test(t));
    };
function sanitizeHtml(r, a, t) {
    if (!r.length) return r;
    if (t && typeof t == "function") return t(r);
    const s = new window.DOMParser().parseFromString(r, "text/html"),
        n = [].concat(...s.body.querySelectorAll("*"));
    for (const l of n) {
        const i = l.nodeName.toLowerCase();
        if (!Object.keys(a).includes(i)) {
            l.remove();
            continue;
        }
        const o = [].concat(...l.attributes),
            u = [].concat(a["*"] || [], a[i] || []);
        for (const c of o) allowedAttribute(c, u) || l.removeAttribute(c.nodeName);
    }
    return s.body.innerHTML;
}
const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i,
    DATA_ATTRIBUTE_PATTERN = /^data-[\w-]*$/i,
    DefaultAllowlist = {
        "*": ["class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN, DATA_ATTRIBUTE_PATTERN],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
        button: ["type"],
        input: [
            "accept",
            "alt",
            "autocomplete",
            "autofocus",
            "capture",
            "checked",
            "dirname",
            "disabled",
            "height",
            "list",
            "max",
            "maxlength",
            "min",
            "minlength",
            "multiple",
            "type",
            "name",
            "pattern",
            "placeholder",
            "readonly",
            "required",
            "size",
            "src",
            "step",
            "value",
            "width",
            "inputmode",
        ],
        select: ["name"],
        textarea: ["name"],
        option: ["value", "selected"],
    };
(window.Joomla = window.Joomla || {}),
    (window.Joomla.Modal = window.Joomla.Modal || {
        current: "",
        setCurrent: (r) => {
            window.Joomla.Modal.current = r;
        },
        getCurrent: () => window.Joomla.Modal.current,
    }),
    ((r) => {
        (r.extend = (t, e) => {
            let s = t;
            return (
                t === null && (s = {}),
                [].slice.call(Object.keys(e)).forEach((n) => {
                    s[n] = e[n];
                }),
                t
            );
        }),
            (r.optionsStorage = r.optionsStorage || null),
            (r.getOptions = (t, e) => (r.optionsStorage || r.loadOptions(), r.optionsStorage[t] !== void 0 ? r.optionsStorage[t] : e)),
            
            
            
            r.loadOptions = (t) => {
                if (!t) {
                    const e = [].slice.call(document.querySelectorAll(".joomla-script-options.new"));
                    let s = 0;
            
                    e.forEach((n) => {
                        const l = n.text || n.textContent;
                        console.log(l);
                        console.log(e);
                        
                        
                        if (!l || l.trim() === "") {
                            console.warn("Empty JSON data found in .joomla-script-options.new element");
                            return;  // Skip empty JSON strings
                        }
            
                        try {
                            const i = JSON.parse(l);
                            if (i) {
                                r.loadOptions(i);
                                s += 1;
                            }
                            n.className = n.className.replace(" new", " loaded");
                        } catch (error) {
                            console.error("Error parsing JSON data:", error);
                            console.error("Invalid JSON:", l);
                        }
                    });
            
                    if (s) return;
                }
            
                if (r.optionsStorage) {
                    t && Object.keys(t).forEach((e) => {
                        if (t[e] !== null && typeof r.optionsStorage[e] === "object" && typeof t[e] === "object") {
                            r.optionsStorage[e] = r.extend(r.optionsStorage[e], t[e]);
                        } else {
                            r.optionsStorage[e] = t[e];
                        }
                    });
                } else {
                    r.optionsStorage = t || {};
                }
            };
            
            (r.Text = {
                strings: {},
                _: (t, e) => {
                    let s = t,
                        n = e;
                    const l = r.getOptions("joomla.jtext");
                    return l && (r.Text.load(l), r.loadOptions({ "joomla.jtext": null })), (n = n === void 0 ? s : n), (s = s.toUpperCase()), r.Text.strings[s] !== void 0 ? r.Text.strings[s] : n;
                },
                load: (t) => (
                    [].slice.call(Object.keys(t)).forEach((e) => {
                        r.Text.strings[e.toUpperCase()] = t[e];
                    }),
                    r.Text
                ),
            }),
            (r.JText = r.Text),
            (r.submitform = (t, e, s) => {
                let n = e;
                const l = t;
                n || (n = document.getElementById("adminForm")), l && (n.task.value = l), (n.noValidate = !s), s ? n.hasAttribute("novalidate") && n.removeAttribute("novalidate") : n.setAttribute("novalidate", "");
                const i = document.createElement("input");
                i.classList.add("hidden"), (i.type = "submit"), n.appendChild(i).click(), n.removeChild(i);
            }),
            (r.submitbutton = (t, e, s) => {
                let n = document.querySelector(e || "form.form-validate"),
                    l = s;
                if ((typeof e == "string" && n === null && (n = document.querySelector(`#${e}`)), n)) {
                    if (l == null) {
                        const i = t.split(".");
                        let o = n.getAttribute("data-cancel-task");
                        o || (o = `${i[0]}.cancel`), (l = t !== o);
                    }
                    (!l || document.formvalidator.isValid(n)) && r.submitform(t, n);
                } else r.submitform(t);
            }),
            (r.checkAll = (t, e) => {
                if (!t.form) return !1;
                const s = e || "cb",
                    n = [].slice.call(t.form.elements);
                let l = 0;
                return (
                    n.forEach((i) => {
                        i.type === t.type && i.id.indexOf(s) === 0 && ((i.checked = t.checked), (l += i.checked ? 1 : 0));
                    }),
                    t.form.boxchecked && ((t.form.boxchecked.value = l), t.form.boxchecked.dispatchEvent(new CustomEvent("change", { bubbles: !0, cancelable: !0 }))),
                    !0
                );
            }),
            (r.isChecked = (t, e) => {
                let s = e;
                if (
                    (typeof s > "u" ? (s = document.getElementById("adminForm")) : typeof e == "string" && (s = document.getElementById(e)),
                    (s.boxchecked.value = t ? parseInt(s.boxchecked.value, 10) + 1 : parseInt(s.boxchecked.value, 10) - 1),
                    s.boxchecked.dispatchEvent(new CustomEvent("change", { bubbles: !0, cancelable: !0 })),
                    !s.elements["checkall-toggle"])
                )
                    return;
                let n = !0,
                    l,
                    i,
                    o;
                for (l = 0, o = s.elements.length; l < o; l++)
                    if (((i = s.elements[l]), i.type === "checkbox" && i.name !== "checkall-toggle" && !i.checked)) {
                        n = !1;
                        break;
                    }
                s.elements["checkall-toggle"].checked = n;
            }),
            (r.tableOrdering = (t, e, s, n) => {
                let l = n;
                typeof l > "u" ? (l = document.getElementById("adminForm")) : typeof n == "string" && (l = document.getElementById(n)), (l.filter_order.value = t), (l.filter_order_Dir.value = e), r.submitform(s, l);
            }),
            (r.listItemTask = (t, e, s = null) => {
                let n = s;
                s !== null ? (n = document.getElementById(s)) : (n = document.adminForm);
                const l = n[t];
                let i = 0,
                    o;
                if (!l) return !1;
                for (; (o = n[`cb${i}`]), !!o; ) (o.checked = !1), (i += 1);
                return (l.checked = !0), (n.boxchecked.value = 1), r.submitform(e, n), !1;
            }),
            (r.replaceTokens = (t) => {
                if (!/^[0-9A-F]{32}$/i.test(t)) return;
                [].slice.call(document.getElementsByTagName("input")).forEach((s) => {
                    s.type === "hidden" && s.value === "1" && s.name.length === 32 && (s.name = t);
                });
            }),
            (r.request = (t) => {
                const e = r.extend({ url: "", method: "GET", data: null, perform: !0, promise: !1 }, t),
                    s = (n, l) => {
                        const i = new XMLHttpRequest();
                        if ((i.open(e.method, e.url, !0), i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("X-Ajax-Engine", "Joomla!"), e.method !== "GET")) {
                            const o = r.getOptions("csrf.token", "");
                            o && ((!e.url.startsWith("http:") && !e.url.startsWith("https:")) || e.url.startsWith(window.location.origin)) && i.setRequestHeader("X-CSRF-Token", o),
                                typeof e.data == "string" && (!e.headers || !e.headers["Content-Type"]) && i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                        }
                        if (
                            (e.headers &&
                                [].slice.call(Object.keys(e.headers)).forEach((o) => {
                                    (o === "Content-Type" && e.headers["Content-Type"] === "false") || i.setRequestHeader(o, e.headers[o]);
                                }),
                            (i.onreadystatechange = () => {
                                i.readyState === 4 && (i.status === 200 ? (e.promise ? n.call(window, i) : n.call(window, i.responseText, i)) : l.call(window, i), e.onComplete && !e.promise && e.onComplete.call(window, i));
                            }),
                            e.perform)
                        ) {
                            if (e.onBefore && e.onBefore.call(window, i) === !1) return e.promise && n.call(window, i), i;
                            i.send(e.data);
                        }
                        return i;
                    };
                if (e.promise)
                    return new Promise((n, l) => {
                        (e.perform = !0), s(n, l);
                    });
                try {
                    return s(e.onSuccess || (() => {}), e.onError || (() => {}));
                } catch (n) {
                    return console.error(n), !1;
                }
            });
        let a;
        (r.enqueueRequest = (t) => {
            if (!t.promise) throw new Error("Joomla.enqueueRequest supports only Joomla.request as Promise");
            return a ? (a = a.then(() => r.request(t))) : (a = r.request(t)), a;
        }),
            (r.sanitizeHtml = (t, e, s) => {
                const n = e == null ? DefaultAllowlist : _extends({}, DefaultAllowlist, e);
                return sanitizeHtml(t, n, s);
            }),
            (r.ajaxErrorsMessages = (t, e) => {
                const s = {};
                if (e === "parsererror") {
                    const n = [];
                    let l = t.responseText.trim();
                    for (let i = l.length - 1; i >= 0; i--) n.unshift(["&#", l[i].charCodeAt(), ";"].join(""));
                    (l = n.join("")), (s.error = [r.Text._("JLIB_JS_AJAX_ERROR_PARSE").replace("%s", l)]);
                } else
                    e === "nocontent"
                        ? (s.error = [r.Text._("JLIB_JS_AJAX_ERROR_NO_CONTENT")])
                        : e === "timeout"
                        ? (s.error = [r.Text._("JLIB_JS_AJAX_ERROR_TIMEOUT")])
                        : e === "abort"
                        ? (s.error = [r.Text._("JLIB_JS_AJAX_ERROR_CONNECTION_ABORT")])
                        : t.responseJSON && t.responseJSON.message
                        ? (s.error = [`${r.Text._("JLIB_JS_AJAX_ERROR_OTHER").replace("%s", t.status)} <em>${t.responseJSON.message}</em>`])
                        : t.statusText
                        ? (s.error = [`${r.Text._("JLIB_JS_AJAX_ERROR_OTHER").replace("%s", t.status)} <em>${t.statusText}</em>`])
                        : (s.error = [r.Text._("JLIB_JS_AJAX_ERROR_OTHER").replace("%s", t.status)]);
                return s;
            });
    })(Joomla);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ var $4cbda5194077ed3c$var$extendStatics = function(d, b) {
    $4cbda5194077ed3c$var$extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return $4cbda5194077ed3c$var$extendStatics(d, b);
};
function $4cbda5194077ed3c$export$a8ba968b8961cb8a(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    $4cbda5194077ed3c$var$extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var $4cbda5194077ed3c$export$18ce0697a983be9b = function() {
    $4cbda5194077ed3c$export$18ce0697a983be9b = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $4cbda5194077ed3c$export$18ce0697a983be9b.apply(this, arguments);
};
function $4cbda5194077ed3c$export$3c9a16f847548506(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function $4cbda5194077ed3c$export$29e00dfd3077644b(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function $4cbda5194077ed3c$export$d5ad3fd78186038f(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function $4cbda5194077ed3c$export$3a84e1ae4e97e9b0(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function $4cbda5194077ed3c$export$d831c04e792af3d(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function $4cbda5194077ed3c$export$6a2a36740a146cb8(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function $4cbda5194077ed3c$export$d1a06452d3489bc7(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function $4cbda5194077ed3c$export$f1db080c865becb9(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function $4cbda5194077ed3c$export$1050f835b63b671e(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function $4cbda5194077ed3c$export$67ebef60e6f28a6(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var $4cbda5194077ed3c$export$45d3717a4c69092e = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function $4cbda5194077ed3c$export$f33643c0debef087(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) $4cbda5194077ed3c$export$45d3717a4c69092e(o, m, p);
}
function $4cbda5194077ed3c$export$19a8beecd37a4c45(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function $4cbda5194077ed3c$export$8d051b38c9118094(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function $4cbda5194077ed3c$export$afc72e2116322959() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat($4cbda5194077ed3c$export$8d051b38c9118094(arguments[i]));
    return ar;
}
function $4cbda5194077ed3c$export$6388937ca91ccae8() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function $4cbda5194077ed3c$export$1216008129fb82ed(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function $4cbda5194077ed3c$export$10c90e4f7922046c(v) {
    return this instanceof $4cbda5194077ed3c$export$10c90e4f7922046c ? (this.v = v, this) : new $4cbda5194077ed3c$export$10c90e4f7922046c(v);
}
function $4cbda5194077ed3c$export$e427f37a30a4de9b(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof $4cbda5194077ed3c$export$10c90e4f7922046c ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function $4cbda5194077ed3c$export$bbd80228419bb833(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: $4cbda5194077ed3c$export$10c90e4f7922046c(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function $4cbda5194077ed3c$export$e3b29a3d6162315f(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof $4cbda5194077ed3c$export$19a8beecd37a4c45 === "function" ? $4cbda5194077ed3c$export$19a8beecd37a4c45(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function $4cbda5194077ed3c$export$4fb47efe1390b86f(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var $4cbda5194077ed3c$var$__setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function $4cbda5194077ed3c$export$c21735bcef00d192(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $4cbda5194077ed3c$export$45d3717a4c69092e(result, mod, k);
    }
    $4cbda5194077ed3c$var$__setModuleDefault(result, mod);
    return result;
}
function $4cbda5194077ed3c$export$da59b14a69baef04(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function $4cbda5194077ed3c$export$d5dcaf168c640c35(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function $4cbda5194077ed3c$export$d40a35129aaff81f(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function $4cbda5194077ed3c$export$81fdc39f203e4e04(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function $4cbda5194077ed3c$export$88ac25d8e944e405(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) env.stack.push({
        async: true
    });
    return value;
}
var $4cbda5194077ed3c$var$_SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function $4cbda5194077ed3c$export$8f076105dc360e92(env) {
    function fail(e) {
        env.error = env.hasError ? new $4cbda5194077ed3c$var$_SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    function next() {
        while(env.stack.length){
            var rec = env.stack.pop();
            try {
                var result = rec.dispose && rec.dispose.call(rec.value);
                if (rec.async) return Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } catch (e) {
                fail(e);
            }
        }
        if (env.hasError) throw env.error;
    }
    return next();
}
var $4cbda5194077ed3c$export$2e2bcd8739ae039 = {
    __extends: $4cbda5194077ed3c$export$a8ba968b8961cb8a,
    __assign: $4cbda5194077ed3c$export$18ce0697a983be9b,
    __rest: $4cbda5194077ed3c$export$3c9a16f847548506,
    __decorate: $4cbda5194077ed3c$export$29e00dfd3077644b,
    __param: $4cbda5194077ed3c$export$d5ad3fd78186038f,
    __metadata: $4cbda5194077ed3c$export$f1db080c865becb9,
    __awaiter: $4cbda5194077ed3c$export$1050f835b63b671e,
    __generator: $4cbda5194077ed3c$export$67ebef60e6f28a6,
    __createBinding: $4cbda5194077ed3c$export$45d3717a4c69092e,
    __exportStar: $4cbda5194077ed3c$export$f33643c0debef087,
    __values: $4cbda5194077ed3c$export$19a8beecd37a4c45,
    __read: $4cbda5194077ed3c$export$8d051b38c9118094,
    __spread: $4cbda5194077ed3c$export$afc72e2116322959,
    __spreadArrays: $4cbda5194077ed3c$export$6388937ca91ccae8,
    __spreadArray: $4cbda5194077ed3c$export$1216008129fb82ed,
    __await: $4cbda5194077ed3c$export$10c90e4f7922046c,
    __asyncGenerator: $4cbda5194077ed3c$export$e427f37a30a4de9b,
    __asyncDelegator: $4cbda5194077ed3c$export$bbd80228419bb833,
    __asyncValues: $4cbda5194077ed3c$export$e3b29a3d6162315f,
    __makeTemplateObject: $4cbda5194077ed3c$export$4fb47efe1390b86f,
    __importStar: $4cbda5194077ed3c$export$c21735bcef00d192,
    __importDefault: $4cbda5194077ed3c$export$da59b14a69baef04,
    __classPrivateFieldGet: $4cbda5194077ed3c$export$d5dcaf168c640c35,
    __classPrivateFieldSet: $4cbda5194077ed3c$export$d40a35129aaff81f,
    __classPrivateFieldIn: $4cbda5194077ed3c$export$81fdc39f203e4e04,
    __addDisposableResource: $4cbda5194077ed3c$export$88ac25d8e944e405,
    __disposeResources: $4cbda5194077ed3c$export$8f076105dc360e92
};


/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $68cb89a3abd471e1$var$t = window, $68cb89a3abd471e1$export$b4d10f6001c083c2 = $68cb89a3abd471e1$var$t.ShadowRoot && (void 0 === $68cb89a3abd471e1$var$t.ShadyCSS || $68cb89a3abd471e1$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $68cb89a3abd471e1$var$s = Symbol(), $68cb89a3abd471e1$var$n = new WeakMap;
class $68cb89a3abd471e1$export$505d1e8739bad805 {
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($68cb89a3abd471e1$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $68cb89a3abd471e1$var$n.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $68cb89a3abd471e1$var$n.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
    constructor(t, e, n){
        if (this._$cssResult$ = !0, n !== $68cb89a3abd471e1$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
}
const $68cb89a3abd471e1$export$8d80f9cac07cdb3 = (t)=>new $68cb89a3abd471e1$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $68cb89a3abd471e1$var$s), $68cb89a3abd471e1$export$dbf350e5966cf602 = (t, ...e)=>{
    const n = 1 === t.length ? t[0] : e.reduce((e, s, n)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[n + 1], t[0]);
    return new $68cb89a3abd471e1$export$505d1e8739bad805(n, t, $68cb89a3abd471e1$var$s);
}, $68cb89a3abd471e1$export$2ca4a66ec4cecb90 = (s, n)=>{
    $68cb89a3abd471e1$export$b4d10f6001c083c2 ? s.adoptedStyleSheets = n.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet) : n.forEach((e)=>{
        const n = document.createElement("style"), o = $68cb89a3abd471e1$var$t.litNonce;
        void 0 !== o && n.setAttribute("nonce", o), n.textContent = e.cssText, s.appendChild(n);
    });
}, $68cb89a3abd471e1$export$ee69dfd951e24778 = $68cb89a3abd471e1$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $68cb89a3abd471e1$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $9f9b02ef11fc3381$var$s;
const $9f9b02ef11fc3381$var$e = window, $9f9b02ef11fc3381$var$r = $9f9b02ef11fc3381$var$e.trustedTypes, $9f9b02ef11fc3381$var$h = $9f9b02ef11fc3381$var$r ? $9f9b02ef11fc3381$var$r.emptyScript : "", $9f9b02ef11fc3381$var$o = $9f9b02ef11fc3381$var$e.reactiveElementPolyfillSupport, $9f9b02ef11fc3381$export$7312b35fbf521afb = {
    toAttribute (t, i) {
        switch(i){
            case Boolean:
                t = t ? $9f9b02ef11fc3381$var$h : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, i) {
        let s = t;
        switch(i){
            case Boolean:
                s = null !== t;
                break;
            case Number:
                s = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    s = JSON.parse(t);
                } catch (t) {
                    s = null;
                }
        }
        return s;
    }
}, $9f9b02ef11fc3381$export$53a6892c50694894 = (t, i)=>i !== t && (i == i || t == t), $9f9b02ef11fc3381$var$l = {
    attribute: !0,
    type: String,
    converter: $9f9b02ef11fc3381$export$7312b35fbf521afb,
    reflect: !1,
    hasChanged: $9f9b02ef11fc3381$export$53a6892c50694894
}, $9f9b02ef11fc3381$var$d = "finalized";
class $9f9b02ef11fc3381$export$c7c07a37856565d extends HTMLElement {
    static addInitializer(t) {
        var i;
        this.finalize(), (null !== (i = this.h) && void 0 !== i ? i : this.h = []).push(t);
    }
    static get observedAttributes() {
        this.finalize();
        const t = [];
        return this.elementProperties.forEach((i, s)=>{
            const e = this._$Ep(s, i);
            void 0 !== e && (this._$Ev.set(e, s), t.push(e));
        }), t;
    }
    static createProperty(t, i = $9f9b02ef11fc3381$var$l) {
        if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
            const s = "symbol" == typeof t ? Symbol() : "__" + t, e = this.getPropertyDescriptor(t, s, i);
            void 0 !== e && Object.defineProperty(this.prototype, t, e);
        }
    }
    static getPropertyDescriptor(t, i, s) {
        return {
            get () {
                return this[i];
            },
            set (e) {
                const r = this[t];
                this[i] = e, this.requestUpdate(t, r, s);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) || $9f9b02ef11fc3381$var$l;
    }
    static finalize() {
        if (this.hasOwnProperty($9f9b02ef11fc3381$var$d)) return !1;
        this[$9f9b02ef11fc3381$var$d] = !0;
        const t = Object.getPrototypeOf(this);
        if (t.finalize(), void 0 !== t.h && (this.h = [
            ...t.h
        ]), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
            const t = this.properties, i = [
                ...Object.getOwnPropertyNames(t),
                ...Object.getOwnPropertySymbols(t)
            ];
            for (const s of i)this.createProperty(s, t[s]);
        }
        return this.elementStyles = this.finalizeStyles(this.styles), !0;
    }
    static finalizeStyles(i) {
        const s = [];
        if (Array.isArray(i)) {
            const e = new Set(i.flat(1 / 0).reverse());
            for (const i of e)s.unshift((0, $68cb89a3abd471e1$export$ee69dfd951e24778)(i));
        } else void 0 !== i && s.push((0, $68cb89a3abd471e1$export$ee69dfd951e24778)(i));
        return s;
    }
    static _$Ep(t, i) {
        const s = i.attribute;
        return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    _$Eu() {
        var t;
        this._$E_ = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (t = this.constructor.h) || void 0 === t || t.forEach((t)=>t(this));
    }
    addController(t) {
        var i, s;
        (null !== (i = this._$ES) && void 0 !== i ? i : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
    }
    removeController(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.splice(this._$ES.indexOf(t) >>> 0, 1);
    }
    _$Eg() {
        this.constructor.elementProperties.forEach((t, i)=>{
            this.hasOwnProperty(i) && (this._$Ei.set(i, this[i]), delete this[i]);
        });
    }
    createRenderRoot() {
        var t;
        const s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $68cb89a3abd471e1$export$2ca4a66ec4cecb90)(s, this.constructor.elementStyles), s;
    }
    connectedCallback() {
        var t;
        void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        var t;
        null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    attributeChangedCallback(t, i, s) {
        this._$AK(t, s);
    }
    _$EO(t, i, s = $9f9b02ef11fc3381$var$l) {
        var e;
        const r = this.constructor._$Ep(t, s);
        if (void 0 !== r && !0 === s.reflect) {
            const h = (void 0 !== (null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) ? s.converter : $9f9b02ef11fc3381$export$7312b35fbf521afb).toAttribute(i, s.type);
            this._$El = t, null == h ? this.removeAttribute(r) : this.setAttribute(r, h), this._$El = null;
        }
    }
    _$AK(t, i) {
        var s;
        const e = this.constructor, r = e._$Ev.get(t);
        if (void 0 !== r && this._$El !== r) {
            const t = e.getPropertyOptions(r), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== (null === (s = t.converter) || void 0 === s ? void 0 : s.fromAttribute) ? t.converter : $9f9b02ef11fc3381$export$7312b35fbf521afb;
            this._$El = r, this[r] = h.fromAttribute(i, t.type), this._$El = null;
        }
    }
    requestUpdate(t, i, s) {
        let e = !0;
        void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || $9f9b02ef11fc3381$export$53a6892c50694894)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(t, s))) : e = !1), !this.isUpdatePending && e && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
        this.isUpdatePending = !0;
        try {
            await this._$E_;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        var t;
        if (!this.isUpdatePending) return;
        this.hasUpdated, this._$Ei && (this._$Ei.forEach((t, i)=>this[i] = t), this._$Ei = void 0);
        let i = !1;
        const s = this._$AL;
        try {
            i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
                var i;
                return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
            }), this.update(s)) : this._$Ek();
        } catch (t) {
            throw i = !1, this._$Ek(), t;
        }
        i && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.forEach((t)=>{
            var i;
            return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
        }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$Ek() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$E_;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        void 0 !== this._$EC && (this._$EC.forEach((t, i)=>this._$EO(i, this[i], t)), this._$EC = void 0), this._$Ek();
    }
    updated(t) {}
    firstUpdated(t) {}
    constructor(){
        super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this._$Eu();
    }
}
$9f9b02ef11fc3381$export$c7c07a37856565d[$9f9b02ef11fc3381$var$d] = !0, $9f9b02ef11fc3381$export$c7c07a37856565d.elementProperties = new Map, $9f9b02ef11fc3381$export$c7c07a37856565d.elementStyles = [], $9f9b02ef11fc3381$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, null == $9f9b02ef11fc3381$var$o || $9f9b02ef11fc3381$var$o({
    ReactiveElement: $9f9b02ef11fc3381$export$c7c07a37856565d
}), (null !== ($9f9b02ef11fc3381$var$s = $9f9b02ef11fc3381$var$e.reactiveElementVersions) && void 0 !== $9f9b02ef11fc3381$var$s ? $9f9b02ef11fc3381$var$s : $9f9b02ef11fc3381$var$e.reactiveElementVersions = []).push("1.6.3");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $7a160706d9f9bf99$var$t;
const $7a160706d9f9bf99$var$i = window, $7a160706d9f9bf99$var$s = $7a160706d9f9bf99$var$i.trustedTypes, $7a160706d9f9bf99$var$e = $7a160706d9f9bf99$var$s ? $7a160706d9f9bf99$var$s.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $7a160706d9f9bf99$var$o = "$lit$", $7a160706d9f9bf99$var$n = `lit$${(Math.random() + "").slice(9)}$`, $7a160706d9f9bf99$var$l = "?" + $7a160706d9f9bf99$var$n, $7a160706d9f9bf99$var$h = `<${$7a160706d9f9bf99$var$l}>`, $7a160706d9f9bf99$var$r = document, $7a160706d9f9bf99$var$u = ()=>$7a160706d9f9bf99$var$r.createComment(""), $7a160706d9f9bf99$var$d = (t)=>null === t || "object" != typeof t && "function" != typeof t, $7a160706d9f9bf99$var$c = Array.isArray, $7a160706d9f9bf99$var$v = (t)=>$7a160706d9f9bf99$var$c(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]), $7a160706d9f9bf99$var$a = "[ 	\n\f\r]", $7a160706d9f9bf99$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $7a160706d9f9bf99$var$_ = /-->/g, $7a160706d9f9bf99$var$m = />/g, $7a160706d9f9bf99$var$p = RegExp(`>|${$7a160706d9f9bf99$var$a}(?:([^\\s"'>=/]+)(${$7a160706d9f9bf99$var$a}*=${$7a160706d9f9bf99$var$a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $7a160706d9f9bf99$var$g = /'/g, $7a160706d9f9bf99$var$$ = /"/g, $7a160706d9f9bf99$var$y = /^(?:script|style|textarea|title)$/i, $7a160706d9f9bf99$var$w = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $7a160706d9f9bf99$export$c0bb0b647f701bb5 = $7a160706d9f9bf99$var$w(1), $7a160706d9f9bf99$export$7ed1367e7fa1ad68 = $7a160706d9f9bf99$var$w(2), $7a160706d9f9bf99$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $7a160706d9f9bf99$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $7a160706d9f9bf99$var$E = new WeakMap, $7a160706d9f9bf99$var$C = $7a160706d9f9bf99$var$r.createTreeWalker($7a160706d9f9bf99$var$r, 129, null, !1);
function $7a160706d9f9bf99$var$P(t, i) {
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $7a160706d9f9bf99$var$e ? $7a160706d9f9bf99$var$e.createHTML(i) : i;
}
const $7a160706d9f9bf99$var$V = (t, i)=>{
    const s = t.length - 1, e = [];
    let l, r = 2 === i ? "<svg>" : "", u = $7a160706d9f9bf99$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let d, c, v = -1, a = 0;
        for(; a < s.length && (u.lastIndex = a, c = u.exec(s), null !== c);)a = u.lastIndex, u === $7a160706d9f9bf99$var$f ? "!--" === c[1] ? u = $7a160706d9f9bf99$var$_ : void 0 !== c[1] ? u = $7a160706d9f9bf99$var$m : void 0 !== c[2] ? ($7a160706d9f9bf99$var$y.test(c[2]) && (l = RegExp("</" + c[2], "g")), u = $7a160706d9f9bf99$var$p) : void 0 !== c[3] && (u = $7a160706d9f9bf99$var$p) : u === $7a160706d9f9bf99$var$p ? ">" === c[0] ? (u = null != l ? l : $7a160706d9f9bf99$var$f, v = -1) : void 0 === c[1] ? v = -2 : (v = u.lastIndex - c[2].length, d = c[1], u = void 0 === c[3] ? $7a160706d9f9bf99$var$p : '"' === c[3] ? $7a160706d9f9bf99$var$$ : $7a160706d9f9bf99$var$g) : u === $7a160706d9f9bf99$var$$ || u === $7a160706d9f9bf99$var$g ? u = $7a160706d9f9bf99$var$p : u === $7a160706d9f9bf99$var$_ || u === $7a160706d9f9bf99$var$m ? u = $7a160706d9f9bf99$var$f : (u = $7a160706d9f9bf99$var$p, l = void 0);
        const w = u === $7a160706d9f9bf99$var$p && t[i + 1].startsWith("/>") ? " " : "";
        r += u === $7a160706d9f9bf99$var$f ? s + $7a160706d9f9bf99$var$h : v >= 0 ? (e.push(d), s.slice(0, v) + $7a160706d9f9bf99$var$o + s.slice(v) + $7a160706d9f9bf99$var$n + w) : s + $7a160706d9f9bf99$var$n + (-2 === v ? (e.push(void 0), i) : w);
    }
    return [
        $7a160706d9f9bf99$var$P(t, r + (t[s] || "<?>") + (2 === i ? "</svg>" : "")),
        e
    ];
};
class $7a160706d9f9bf99$var$N {
    static createElement(t, i) {
        const s = $7a160706d9f9bf99$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
    constructor({ strings: t, _$litType$: i }, e){
        let h;
        this.parts = [];
        let r = 0, d = 0;
        const c = t.length - 1, v = this.parts, [a, f] = $7a160706d9f9bf99$var$V(t, i);
        if (this.el = $7a160706d9f9bf99$var$N.createElement(a, e), $7a160706d9f9bf99$var$C.currentNode = this.el.content, 2 === i) {
            const t = this.el.content, i = t.firstChild;
            i.remove(), t.append(...i.childNodes);
        }
        for(; null !== (h = $7a160706d9f9bf99$var$C.nextNode()) && v.length < c;){
            if (1 === h.nodeType) {
                if (h.hasAttributes()) {
                    const t = [];
                    for (const i of h.getAttributeNames())if (i.endsWith($7a160706d9f9bf99$var$o) || i.startsWith($7a160706d9f9bf99$var$n)) {
                        const s = f[d++];
                        if (t.push(i), void 0 !== s) {
                            const t = h.getAttribute(s.toLowerCase() + $7a160706d9f9bf99$var$o).split($7a160706d9f9bf99$var$n), i = /([.?@])?(.*)/.exec(s);
                            v.push({
                                type: 1,
                                index: r,
                                name: i[2],
                                strings: t,
                                ctor: "." === i[1] ? $7a160706d9f9bf99$var$H : "?" === i[1] ? $7a160706d9f9bf99$var$L : "@" === i[1] ? $7a160706d9f9bf99$var$z : $7a160706d9f9bf99$var$k
                            });
                        } else v.push({
                            type: 6,
                            index: r
                        });
                    }
                    for (const i of t)h.removeAttribute(i);
                }
                if ($7a160706d9f9bf99$var$y.test(h.tagName)) {
                    const t = h.textContent.split($7a160706d9f9bf99$var$n), i = t.length - 1;
                    if (i > 0) {
                        h.textContent = $7a160706d9f9bf99$var$s ? $7a160706d9f9bf99$var$s.emptyScript : "";
                        for(let s = 0; s < i; s++)h.append(t[s], $7a160706d9f9bf99$var$u()), $7a160706d9f9bf99$var$C.nextNode(), v.push({
                            type: 2,
                            index: ++r
                        });
                        h.append(t[i], $7a160706d9f9bf99$var$u());
                    }
                }
            } else if (8 === h.nodeType) {
                if (h.data === $7a160706d9f9bf99$var$l) v.push({
                    type: 2,
                    index: r
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = h.data.indexOf($7a160706d9f9bf99$var$n, t + 1));)v.push({
                        type: 7,
                        index: r
                    }), t += $7a160706d9f9bf99$var$n.length - 1;
                }
            }
            r++;
        }
    }
}
function $7a160706d9f9bf99$var$S(t, i, s = t, e) {
    var o, n, l, h;
    if (i === $7a160706d9f9bf99$export$9c068ae9cc5db4e8) return i;
    let r = void 0 !== e ? null === (o = s._$Co) || void 0 === o ? void 0 : o[e] : s._$Cl;
    const u = $7a160706d9f9bf99$var$d(i) ? void 0 : i._$litDirective$;
    return (null == r ? void 0 : r.constructor) !== u && (null === (n = null == r ? void 0 : r._$AO) || void 0 === n || n.call(r, !1), void 0 === u ? r = void 0 : (r = new u(t), r._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Co) && void 0 !== l ? l : h._$Co = [])[e] = r : s._$Cl = r), void 0 !== r && (i = $7a160706d9f9bf99$var$S(t, r._$AS(t, i.values), r, e)), i;
}
class $7a160706d9f9bf99$var$M {
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        var i;
        const { el: { content: s }, parts: e } = this._$AD, o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : $7a160706d9f9bf99$var$r).importNode(s, !0);
        $7a160706d9f9bf99$var$C.currentNode = o;
        let n = $7a160706d9f9bf99$var$C.nextNode(), l = 0, h = 0, u = e[0];
        for(; void 0 !== u;){
            if (l === u.index) {
                let i;
                2 === u.type ? i = new $7a160706d9f9bf99$var$R(n, n.nextSibling, this, t) : 1 === u.type ? i = new u.ctor(n, u.name, u.strings, this, t) : 6 === u.type && (i = new $7a160706d9f9bf99$var$Z(n, this, t)), this._$AV.push(i), u = e[++h];
            }
            l !== (null == u ? void 0 : u.index) && (n = $7a160706d9f9bf99$var$C.nextNode(), l++);
        }
        return $7a160706d9f9bf99$var$C.currentNode = $7a160706d9f9bf99$var$r, o;
    }
    v(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
}
class $7a160706d9f9bf99$var$R {
    get _$AU() {
        var t, i;
        return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cp;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === (null == t ? void 0 : t.nodeType) && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $7a160706d9f9bf99$var$S(this, t, i), $7a160706d9f9bf99$var$d(t) ? t === $7a160706d9f9bf99$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $7a160706d9f9bf99$export$45b790e32b2810ee && this._$AR(), this._$AH = $7a160706d9f9bf99$export$45b790e32b2810ee) : t !== this._$AH && t !== $7a160706d9f9bf99$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : $7a160706d9f9bf99$var$v(t) ? this.T(t) : this._(t);
    }
    k(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    $(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
    }
    _(t) {
        this._$AH !== $7a160706d9f9bf99$export$45b790e32b2810ee && $7a160706d9f9bf99$var$d(this._$AH) ? this._$AA.nextSibling.data = t : this.$($7a160706d9f9bf99$var$r.createTextNode(t)), this._$AH = t;
    }
    g(t) {
        var i;
        const { values: s, _$litType$: e } = t, o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = $7a160706d9f9bf99$var$N.createElement($7a160706d9f9bf99$var$P(e.h, e.h[0]), this.options)), e);
        if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.v(s);
        else {
            const t = new $7a160706d9f9bf99$var$M(o, this), i = t.u(this.options);
            t.v(s), this.$(i), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $7a160706d9f9bf99$var$E.get(t.strings);
        return void 0 === i && $7a160706d9f9bf99$var$E.set(t.strings, i = new $7a160706d9f9bf99$var$N(t)), i;
    }
    T(t) {
        $7a160706d9f9bf99$var$c(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const o of t)e === i.length ? i.push(s = new $7a160706d9f9bf99$var$R(this.k($7a160706d9f9bf99$var$u()), this.k($7a160706d9f9bf99$var$u()), this, this.options)) : s = i[e], s._$AI(o), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        var s;
        for(null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        var i;
        void 0 === this._$AM && (this._$Cp = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
    }
    constructor(t, i, s, e){
        var o;
        this.type = 2, this._$AH = $7a160706d9f9bf99$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cp = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
    }
}
class $7a160706d9f9bf99$var$k {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t, i = this, s, e) {
        const o = this.strings;
        let n = !1;
        if (void 0 === o) t = $7a160706d9f9bf99$var$S(this, t, i, 0), n = !$7a160706d9f9bf99$var$d(t) || t !== this._$AH && t !== $7a160706d9f9bf99$export$9c068ae9cc5db4e8, n && (this._$AH = t);
        else {
            const e = t;
            let l, h;
            for(t = o[0], l = 0; l < o.length - 1; l++)h = $7a160706d9f9bf99$var$S(this, e[s + l], i, l), h === $7a160706d9f9bf99$export$9c068ae9cc5db4e8 && (h = this._$AH[l]), n || (n = !$7a160706d9f9bf99$var$d(h) || h !== this._$AH[l]), h === $7a160706d9f9bf99$export$45b790e32b2810ee ? t = $7a160706d9f9bf99$export$45b790e32b2810ee : t !== $7a160706d9f9bf99$export$45b790e32b2810ee && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
        }
        n && !e && this.j(t);
    }
    j(t) {
        t === $7a160706d9f9bf99$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
    }
    constructor(t, i, s, e, o){
        this.type = 1, this._$AH = $7a160706d9f9bf99$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $7a160706d9f9bf99$export$45b790e32b2810ee;
    }
}
class $7a160706d9f9bf99$var$H extends $7a160706d9f9bf99$var$k {
    j(t) {
        this.element[this.name] = t === $7a160706d9f9bf99$export$45b790e32b2810ee ? void 0 : t;
    }
    constructor(){
        super(...arguments), this.type = 3;
    }
}
const $7a160706d9f9bf99$var$I = $7a160706d9f9bf99$var$s ? $7a160706d9f9bf99$var$s.emptyScript : "";
class $7a160706d9f9bf99$var$L extends $7a160706d9f9bf99$var$k {
    j(t) {
        t && t !== $7a160706d9f9bf99$export$45b790e32b2810ee ? this.element.setAttribute(this.name, $7a160706d9f9bf99$var$I) : this.element.removeAttribute(this.name);
    }
    constructor(){
        super(...arguments), this.type = 4;
    }
}
class $7a160706d9f9bf99$var$z extends $7a160706d9f9bf99$var$k {
    _$AI(t, i = this) {
        var s;
        if ((t = null !== (s = $7a160706d9f9bf99$var$S(this, t, i, 0)) && void 0 !== s ? s : $7a160706d9f9bf99$export$45b790e32b2810ee) === $7a160706d9f9bf99$export$9c068ae9cc5db4e8) return;
        const e = this._$AH, o = t === $7a160706d9f9bf99$export$45b790e32b2810ee && e !== $7a160706d9f9bf99$export$45b790e32b2810ee || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive, n = t !== $7a160706d9f9bf99$export$45b790e32b2810ee && (e === $7a160706d9f9bf99$export$45b790e32b2810ee || o);
        o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        var i, s;
        "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
    }
    constructor(t, i, s, e, o){
        super(t, i, s, e, o), this.type = 5;
    }
}
class $7a160706d9f9bf99$var$Z {
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $7a160706d9f9bf99$var$S(this, t);
    }
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
}
const $7a160706d9f9bf99$export$8613d1ca9052b22e = {
    O: $7a160706d9f9bf99$var$o,
    P: $7a160706d9f9bf99$var$n,
    A: $7a160706d9f9bf99$var$l,
    C: 1,
    M: $7a160706d9f9bf99$var$V,
    L: $7a160706d9f9bf99$var$M,
    R: $7a160706d9f9bf99$var$v,
    D: $7a160706d9f9bf99$var$S,
    I: $7a160706d9f9bf99$var$R,
    V: $7a160706d9f9bf99$var$k,
    H: $7a160706d9f9bf99$var$L,
    N: $7a160706d9f9bf99$var$z,
    U: $7a160706d9f9bf99$var$H,
    F: $7a160706d9f9bf99$var$Z
}, $7a160706d9f9bf99$var$B = $7a160706d9f9bf99$var$i.litHtmlPolyfillSupport;
null == $7a160706d9f9bf99$var$B || $7a160706d9f9bf99$var$B($7a160706d9f9bf99$var$N, $7a160706d9f9bf99$var$R), (null !== ($7a160706d9f9bf99$var$t = $7a160706d9f9bf99$var$i.litHtmlVersions) && void 0 !== $7a160706d9f9bf99$var$t ? $7a160706d9f9bf99$var$t : $7a160706d9f9bf99$var$i.litHtmlVersions = []).push("2.8.0");
const $7a160706d9f9bf99$export$b3890eb0ae9dca99 = (t, i, s)=>{
    var e, o;
    const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
    let l = n._$litPart$;
    if (void 0 === l) {
        const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
        n._$litPart$ = l = new $7a160706d9f9bf99$var$R(i.insertBefore($7a160706d9f9bf99$var$u(), t), t, void 0, null != s ? s : {});
    }
    return l._$AI(t), l;
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $5710f2aa24bb2884$var$l, $5710f2aa24bb2884$var$o;
const $5710f2aa24bb2884$export$8bf27daf9e8907c9 = (0, $9f9b02ef11fc3381$export$c7c07a37856565d);
class $5710f2aa24bb2884$export$3f2f9f5909897157 extends (0, $9f9b02ef11fc3381$export$c7c07a37856565d) {
    createRenderRoot() {
        var t, e;
        const i = super.createRenderRoot();
        return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i;
    }
    update(t) {
        const i = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $7a160706d9f9bf99$export$b3890eb0ae9dca99)(i, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        var t;
        super.connectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
    }
    disconnectedCallback() {
        var t;
        super.disconnectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
    }
    render() {
        return 0, $7a160706d9f9bf99$export$9c068ae9cc5db4e8;
    }
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
}
$5710f2aa24bb2884$export$3f2f9f5909897157.finalized = !0, $5710f2aa24bb2884$export$3f2f9f5909897157._$litElement$ = !0, null === ($5710f2aa24bb2884$var$l = globalThis.litElementHydrateSupport) || void 0 === $5710f2aa24bb2884$var$l || $5710f2aa24bb2884$var$l.call(globalThis, {
    LitElement: $5710f2aa24bb2884$export$3f2f9f5909897157
});
const $5710f2aa24bb2884$var$n = globalThis.litElementPolyfillSupport;
null == $5710f2aa24bb2884$var$n || $5710f2aa24bb2884$var$n({
    LitElement: $5710f2aa24bb2884$export$3f2f9f5909897157
});
const $5710f2aa24bb2884$export$f5c524615a7708d6 = {
    _$AK: (t, e, i)=>{
        t._$AK(e, i);
    },
    _$AL: (t)=>t._$AL
};
(null !== ($5710f2aa24bb2884$var$o = globalThis.litElementVersions) && void 0 !== $5710f2aa24bb2884$var$o ? $5710f2aa24bb2884$var$o : globalThis.litElementVersions = []).push("3.3.3");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $02879ef98f035a2c$export$6acf61af03e62db = !1;




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $2717378abbd58b74$export$da64fc29f17f9d0e = (e)=>(n)=>"function" == typeof n ? ((e, n)=>(customElements.define(e, n), n))(e, n) : ((e, n)=>{
            const { kind: t, elements: s } = n;
            return {
                kind: t,
                elements: s,
                finisher (n) {
                    customElements.define(e, n);
                }
            };
        })(e, n);


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $27795cf6d1834bb4$var$i = (i, e)=>"method" === e.kind && e.descriptor && !("value" in e.descriptor) ? {
        ...e,
        finisher (n) {
            n.createProperty(e.key, i);
        }
    } : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        originalKey: e.key,
        initializer () {
            "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this));
        },
        finisher (n) {
            n.createProperty(e.key, i);
        }
    }, $27795cf6d1834bb4$var$e = (i, e, n)=>{
    e.constructor.createProperty(n, i);
};
function $27795cf6d1834bb4$export$d541bacb2bda4494(n) {
    return (t, o)=>void 0 !== o ? $27795cf6d1834bb4$var$e(n, t, o) : $27795cf6d1834bb4$var$i(n, t);
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $a51f6cc031a16337$export$ca000e230c0caa3e(t) {
    return (0, $27795cf6d1834bb4$export$d541bacb2bda4494)({
        ...t,
        state: !0
    });
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $7cbc19296fdd824b$export$29fd0ed4087278b5 = (e, t, o)=>{
    Object.defineProperty(t, o, e);
}, $7cbc19296fdd824b$export$18eb0154d0069a01 = (e, t)=>({
        kind: "method",
        placement: "prototype",
        key: t.key,
        descriptor: e
    }), $7cbc19296fdd824b$export$757d561a932dc1cb = ({ finisher: e, descriptor: t })=>(o, n)=>{
        var r;
        if (void 0 === n) {
            const n = null !== (r = o.originalKey) && void 0 !== r ? r : o.key, i = null != t ? {
                kind: "method",
                placement: "prototype",
                key: n,
                descriptor: t(o.key)
            } : {
                ...o,
                key: n
            };
            return null != e && (i.finisher = function(t) {
                e(t, n);
            }), i;
        }
        {
            const r = o.constructor;
            void 0 !== t && Object.defineProperty(o, n, t(n)), null == e || e(r, n);
        }
    };


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $0a03779b0cee1a05$export$b2b799818fbabcf3(e) {
    return (0, $7cbc19296fdd824b$export$757d561a932dc1cb)({
        finisher: (r, t)=>{
            Object.assign(r.prototype[t], e);
        }
    });
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $a612cc005104f476$export$2fa187e846a241c4(i, n) {
    return (0, $7cbc19296fdd824b$export$757d561a932dc1cb)({
        descriptor: (o)=>{
            const t = {
                get () {
                    var o, n;
                    return null !== (n = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== n ? n : null;
                },
                enumerable: !0,
                configurable: !0
            };
            if (n) {
                const n = "symbol" == typeof o ? Symbol() : "__" + o;
                t.get = function() {
                    var o, t;
                    return void 0 === this[n] && (this[n] = null !== (t = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== t ? t : null), this[n];
                };
            }
            return t;
        }
    });
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $d5310e5ef493a173$export$dcd0d083aa86c355(e) {
    return (0, $7cbc19296fdd824b$export$757d561a932dc1cb)({
        descriptor: (r)=>({
                get () {
                    var r, o;
                    return null !== (o = null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelectorAll(e)) && void 0 !== o ? o : [];
                },
                enumerable: !0,
                configurable: !0
            })
    });
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $9af12bc5efc05cde$export$163dfc35cc43f240(e) {
    return (0, $7cbc19296fdd824b$export$757d561a932dc1cb)({
        descriptor: (r)=>({
                async get () {
                    var r;
                    return await this.updateComplete, null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelector(e);
                },
                enumerable: !0,
                configurable: !0
            })
    });
}



/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $7f6c97c5b3dc420b$var$n;
const $7f6c97c5b3dc420b$var$e = null != (null === ($7f6c97c5b3dc420b$var$n = window.HTMLSlotElement) || void 0 === $7f6c97c5b3dc420b$var$n ? void 0 : $7f6c97c5b3dc420b$var$n.prototype.assignedElements) ? (o, n)=>o.assignedElements(n) : (o, n)=>o.assignedNodes(n).filter((o)=>o.nodeType === Node.ELEMENT_NODE);
function $7f6c97c5b3dc420b$export$4682af2d9ee91415(n) {
    const { slot: l, selector: t } = null != n ? n : {};
    return (0, $7cbc19296fdd824b$export$757d561a932dc1cb)({
        descriptor: (o)=>({
                get () {
                    var o;
                    const r = "slot" + (l ? `[name=${l}]` : ":not([name])"), i = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(r), s = null != i ? $7f6c97c5b3dc420b$var$e(i, n) : [];
                    return t ? s.filter((o)=>o.matches(t)) : s;
                },
                enumerable: !0,
                configurable: !0
            })
    });
}




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $9197fad2155ea007$export$1bdbe53f9df1b8(o, n, r) {
    let l, s = o;
    return "object" == typeof o ? (s = o.slot, l = o) : l = {
        flatten: n
    }, r ? (0, $7f6c97c5b3dc420b$export$4682af2d9ee91415)({
        slot: s,
        flatten: n,
        selector: r
    }) : (0, $7cbc19296fdd824b$export$757d561a932dc1cb)({
        descriptor: (e)=>({
                get () {
                    var e, t;
                    const o = "slot" + (s ? `[name=${s}]` : ":not([name])"), n = null === (e = this.renderRoot) || void 0 === e ? void 0 : e.querySelector(o);
                    return null !== (t = null == n ? void 0 : n.assignedNodes(l)) && void 0 !== t ? t : [];
                },
                enumerable: !0,
                configurable: !0
            })
    });
}




const $22c6b0593b9c7388$var$defaultLang = `en-US`;
const $22c6b0593b9c7388$var$defaultTranslation = {
    entity_missing: "Entity data missing",
    line: "Line",
    destination: "Destination",
    departure: "Departure",
    min: "min",
    last_updated: "Last updated",
    now: "Now",
    // configuration translations
    editor_show_name: "Show card name",
    editor_entities: "Entities",
    editor_departures: "Departures",
    editor_title: "Card name",
    editor_show_entity_name: "Show entity name",
    editor_show_departures: "Show departures",
    editor_show_header: "Show departure header",
    editor_show_icon: "Show transport icon",
    editor_show_transport_icon: "Show transport icon",
    editor_max_departures: "Maximum departures to show",
    editor_hide_departed: "Hide already departed",
    editor_show_departed_offeset: "... but show departed number of minutes ago",
    editor_show_time_always: "Always show departure time in HH:MM form",
    editor_hide_line_number: "Hide line number",
    editor_show_updated: `Show 'Last Updated'`,
    editor_direction: `Direction filter`,
    editor_direction_all: `All`,
    editor_direction_left: `Left`,
    editor_direction_right: `Right`,
    language: "Language"
};
const $22c6b0593b9c7388$export$150b732325d14d04 = {
    [$22c6b0593b9c7388$var$defaultLang]: $22c6b0593b9c7388$var$defaultTranslation,
    "sv-SE": {
        entity_missing: "Ingen data hittades",
        line: "Linje",
        destination: "Till",
        departure: "Avresa",
        min: "min",
        last_updated: "Senast uppdaterad",
        now: "Nu",
        editor_show_name: "Visa kortnamn",
        editor_entities: "Enheter",
        editor_departures: "Avg\xe5ngar",
        editor_title: "Kortnamn",
        editor_show_entity_name: "Visa enhetsnamn",
        editor_show_departures: "Visa avg\xe5ngar",
        editor_show_header: "Visa avg\xe5ngshuvud",
        editor_show_icon: "Visa transportikon",
        editor_show_transport_icon: "Visa transportikon",
        editor_max_departures: "Max antal avg\xe5ngar",
        editor_hide_departed: "D\xf6lj redan avg\xe5ngna",
        editor_show_departed_offeset: "... men visa avg\xe5ngna f\xf6r antal minuter sedan",
        editor_show_time_always: "Visa alltid avg\xe5ngstid i HH:MM-form",
        editor_hide_line_number: "D\xf6lj linjenummer",
        editor_show_updated: `Visa 'Senast uppdaterad'`,
        editor_direction: `Riktning filter`,
        editor_direction_all: `Alla`,
        editor_direction_left: `V\xe4nster`,
        editor_direction_right: `H\xf6ger`,
        language: "Spr\xe5k"
    },
    "fr-FR": {
        entity_missing: "Aucune info trouv&eacute;e",
        line: "Ligne",
        destination: "Terminus",
        departure: "D&eacute;part",
        min: "min",
        last_updated: "Mis \xe0 jour",
        now: "Maintenant",
        editor_show_name: "Afficher le nom de la carte",
        editor_entities: "Entit\xe9s",
        editor_departures: "D\xe9parts",
        editor_title: "Nom de la carte",
        editor_show_entity_name: "Afficher le nom de l'entit\xe9",
        editor_show_departures: "Afficher les d\xe9parts",
        editor_show_header: "Afficher l'ent\xeate des d\xe9parts",
        editor_show_icon: "Afficher l'ic\xf4ne de transport",
        editor_show_transport_icon: "Afficher l'ic\xf4ne de transport",
        editor_max_departures: "Nombre maximum de d\xe9parts",
        editor_hide_departed: "Masquer les d\xe9parts pass\xe9s",
        editor_show_departed_offeset: "... mais montrer les d\xe9parts depuis le nombre de minutes",
        editor_show_time_always: "Toujours afficher l'heure de d\xe9part en HH:MM",
        editor_hide_line_number: "Masquer le num\xe9ro de ligne",
        editor_show_updated: `Afficher 'Mis \xe0 jour'`,
        editor_direction: `Filtre de direction`,
        editor_direction_all: `Tous`,
        editor_direction_left: `Gauche`,
        editor_direction_right: `Droite`,
        language: "Langue"
    }
};
const $22c6b0593b9c7388$export$d0d68bb9ed2c643d = Object.keys($22c6b0593b9c7388$export$150b732325d14d04);
const $22c6b0593b9c7388$export$625550452a3fa3ec = (key, lang)=>{
    var _translations_lang;
    var _translations_lang_key;
    return (_translations_lang_key = (_translations_lang = $22c6b0593b9c7388$export$150b732325d14d04[lang]) === null || _translations_lang === void 0 ? void 0 : _translations_lang[key]) !== null && _translations_lang_key !== void 0 ? _translations_lang_key : $22c6b0593b9c7388$var$defaultTranslation[key];
};
const $22c6b0593b9c7388$export$64783e31db14f0ba = (configLang)=>{
    var _ref;
    return (_ref = configLang !== null && configLang !== void 0 ? configLang : navigator.language) !== null && _ref !== void 0 ? _ref : $22c6b0593b9c7388$var$defaultLang;
};
const $22c6b0593b9c7388$export$df5de7d5c552d075 = (lang)=>(key)=>$22c6b0593b9c7388$export$625550452a3fa3ec(key, lang);


class $8606f342b2a743fe$export$8d2c87e174389bfd extends (0, $5710f2aa24bb2884$export$3f2f9f5909897157) {
    setConfig(config) {
        var _config_entities;
        this._config = config;
        this._schema = this.getSchema((0, $22c6b0593b9c7388$export$df5de7d5c552d075)((0, $22c6b0593b9c7388$export$64783e31db14f0ba)()));
        // Migrate to multiple entities
        if (config.entity && !((_config_entities = config.entities) === null || _config_entities === void 0 ? void 0 : _config_entities.length)) {
            const { entity: entity, ...rest } = config;
            this._dispatchConfigChangedEvent({
                ...rest,
                entities: [
                    config.entity
                ]
            });
        }
    }
    _valueChanged(ev) {
        ev.stopPropagation();
        this._dispatchConfigChangedEvent(ev.detail.value);
    }
    _dispatchConfigChangedEvent(newConfig) {
        const event = new Event("config-changed", {
            bubbles: true,
            composed: true
        });
        event.detail = {
            config: newConfig
        };
        this.dispatchEvent(event);
    }
    render() {
        const lang = (0, $22c6b0593b9c7388$export$64783e31db14f0ba)();
        const _ = (0, $22c6b0593b9c7388$export$df5de7d5c552d075)(lang);
        return (0, $7a160706d9f9bf99$export$c0bb0b647f701bb5)`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this._schema || []}
        .computeLabel=${(item, data)=>_(`editor_${item.name}`) || item.label || item.name}
        @value-changed=${this._valueChanged}>
      </ha-form>
    `;
    }
    constructor(...args){
        super(...args);
        this.getSchema = (_)=>{
            var _this__config_entities, _this__config;
            const haveMultipleEntities = ((_this__config = this._config) === null || _this__config === void 0 ? void 0 : (_this__config_entities = _this__config.entities) === null || _this__config_entities === void 0 ? void 0 : _this__config_entities.length) > 1;
            return [
                {
                    name: "title",
                    selector: {
                        text: {}
                    }
                },
                // { name: "language", selector: { select: { mode: 'dropdown', options: languages } } },
                {
                    name: "",
                    type: "expandable",
                    icon: "mdi:database",
                    title: _("editor_entities"),
                    schema: [
                        {
                            name: "show_entity_name",
                            type: "boolean",
                            disabled: haveMultipleEntities
                        },
                        {
                            name: "entities",
                            selector: {
                                entity: {
                                    multiple: true,
                                    filter: [
                                        {
                                            domain: "sensor",
                                            integration: "hasl3"
                                        },
                                        {
                                            domain: "sensor",
                                            integration: "london_tfl"
                                        }
                                    ]
                                }
                            }
                        }
                    ]
                },
                {
                    name: "",
                    type: "expandable",
                    icon: "mdi:clock",
                    title: _("editor_departures"),
                    schema: [
                        {
                            name: "show_departures",
                            type: "boolean"
                        },
                        {
                            name: "show_header",
                            type: "boolean"
                        },
                        {
                            name: "direction",
                            selector: {
                                select: {
                                    options: [
                                        {
                                            value: 0,
                                            label: _(`editor_direction_all`)
                                        },
                                        {
                                            value: 1,
                                            label: _(`editor_direction_left`)
                                        },
                                        {
                                            value: 2,
                                            label: _(`editor_direction_right`)
                                        }
                                    ]
                                }
                            }
                        },
                        {
                            name: "show_icon",
                            type: "boolean"
                        },
                        {
                            name: "hide_line_number",
                            type: "boolean"
                        },
                        {
                            name: "show_time_always",
                            type: "boolean"
                        },
                        {
                            name: "max_departures",
                            selector: {
                                number: {
                                    mode: "box",
                                    min: 1,
                                    max: 10
                                }
                            }
                        },
                        {
                            name: "",
                            type: "grid",
                            schema: [
                                {
                                    name: "hide_departed",
                                    type: "boolean"
                                },
                                {
                                    name: "show_departed_offeset",
                                    selector: {
                                        number: {
                                            mode: "box",
                                            min: 0,
                                            max: 30
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "show_updated",
                    type: "boolean",
                    disabled: haveMultipleEntities
                }
            ];
        };
    }
}
(0, $4cbda5194077ed3c$export$29e00dfd3077644b)([
    (0, $27795cf6d1834bb4$export$d541bacb2bda4494)({
        attribute: false
    })
], $8606f342b2a743fe$export$8d2c87e174389bfd.prototype, "hass", void 0);
(0, $4cbda5194077ed3c$export$29e00dfd3077644b)([
    (0, $a51f6cc031a16337$export$ca000e230c0caa3e)()
], $8606f342b2a743fe$export$8d2c87e174389bfd.prototype, "_config", void 0);
(0, $4cbda5194077ed3c$export$29e00dfd3077644b)([
    (0, $a51f6cc031a16337$export$ca000e230c0caa3e)()
], $8606f342b2a743fe$export$8d2c87e174389bfd.prototype, "_schema", void 0);
$8606f342b2a743fe$export$8d2c87e174389bfd = (0, $4cbda5194077ed3c$export$29e00dfd3077644b)([
    (0, $2717378abbd58b74$export$da64fc29f17f9d0e)("hasl4-departure-card-editor")
], $8606f342b2a743fe$export$8d2c87e174389bfd);


export {$8606f342b2a743fe$export$8d2c87e174389bfd as HASLDepartureCardEditor};
//# sourceMappingURL=hasl4o-departure-card.js.map

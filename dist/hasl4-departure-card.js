
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global =
        typeof globalThis !== 'undefined'
          ? globalThis
          : typeof self !== 'undefined'
          ? self
          : typeof window !== 'undefined'
          ? window
          : typeof global !== 'undefined'
          ? global
          : {};
  
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire55a1"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire55a1"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("9tTrf", function(module, exports) {

$parcel$export(module.exports, "__decorate", function () { return $6e71d36bd176461b$export$29e00dfd3077644b; });
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
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ var $6e71d36bd176461b$var$extendStatics = function(d, b) {
    $6e71d36bd176461b$var$extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return $6e71d36bd176461b$var$extendStatics(d, b);
};
function $6e71d36bd176461b$export$a8ba968b8961cb8a(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    $6e71d36bd176461b$var$extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var $6e71d36bd176461b$export$18ce0697a983be9b = function() {
    $6e71d36bd176461b$export$18ce0697a983be9b = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $6e71d36bd176461b$export$18ce0697a983be9b.apply(this, arguments);
};
function $6e71d36bd176461b$export$3c9a16f847548506(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function $6e71d36bd176461b$export$29e00dfd3077644b(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function $6e71d36bd176461b$export$d5ad3fd78186038f(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function $6e71d36bd176461b$export$3a84e1ae4e97e9b0(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
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
function $6e71d36bd176461b$export$d831c04e792af3d(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function $6e71d36bd176461b$export$6a2a36740a146cb8(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function $6e71d36bd176461b$export$d1a06452d3489bc7(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function $6e71d36bd176461b$export$f1db080c865becb9(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function $6e71d36bd176461b$export$1050f835b63b671e(thisArg, _arguments, P, generator) {
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
function $6e71d36bd176461b$export$67ebef60e6f28a6(thisArg, body) {
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
var $6e71d36bd176461b$export$45d3717a4c69092e = Object.create ? function(o, m, k, k2) {
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
function $6e71d36bd176461b$export$f33643c0debef087(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) $6e71d36bd176461b$export$45d3717a4c69092e(o, m, p);
}
function $6e71d36bd176461b$export$19a8beecd37a4c45(o) {
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
function $6e71d36bd176461b$export$8d051b38c9118094(o, n) {
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
function $6e71d36bd176461b$export$afc72e2116322959() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat($6e71d36bd176461b$export$8d051b38c9118094(arguments[i]));
    return ar;
}
function $6e71d36bd176461b$export$6388937ca91ccae8() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function $6e71d36bd176461b$export$1216008129fb82ed(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function $6e71d36bd176461b$export$10c90e4f7922046c(v) {
    return this instanceof $6e71d36bd176461b$export$10c90e4f7922046c ? (this.v = v, this) : new $6e71d36bd176461b$export$10c90e4f7922046c(v);
}
function $6e71d36bd176461b$export$e427f37a30a4de9b(thisArg, _arguments, generator) {
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
        r.value instanceof $6e71d36bd176461b$export$10c90e4f7922046c ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
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
function $6e71d36bd176461b$export$bbd80228419bb833(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: $6e71d36bd176461b$export$10c90e4f7922046c(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function $6e71d36bd176461b$export$e3b29a3d6162315f(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof $6e71d36bd176461b$export$19a8beecd37a4c45 === "function" ? $6e71d36bd176461b$export$19a8beecd37a4c45(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
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
function $6e71d36bd176461b$export$4fb47efe1390b86f(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var $6e71d36bd176461b$var$__setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function $6e71d36bd176461b$export$c21735bcef00d192(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $6e71d36bd176461b$export$45d3717a4c69092e(result, mod, k);
    }
    $6e71d36bd176461b$var$__setModuleDefault(result, mod);
    return result;
}
function $6e71d36bd176461b$export$da59b14a69baef04(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function $6e71d36bd176461b$export$d5dcaf168c640c35(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function $6e71d36bd176461b$export$d40a35129aaff81f(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function $6e71d36bd176461b$export$81fdc39f203e4e04(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function $6e71d36bd176461b$export$88ac25d8e944e405(env, value, async) {
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
var $6e71d36bd176461b$var$_SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function $6e71d36bd176461b$export$8f076105dc360e92(env) {
    function fail(e) {
        env.error = env.hasError ? new $6e71d36bd176461b$var$_SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
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
var $6e71d36bd176461b$export$2e2bcd8739ae039 = {
    __extends: $6e71d36bd176461b$export$a8ba968b8961cb8a,
    __assign: $6e71d36bd176461b$export$18ce0697a983be9b,
    __rest: $6e71d36bd176461b$export$3c9a16f847548506,
    __decorate: $6e71d36bd176461b$export$29e00dfd3077644b,
    __param: $6e71d36bd176461b$export$d5ad3fd78186038f,
    __metadata: $6e71d36bd176461b$export$f1db080c865becb9,
    __awaiter: $6e71d36bd176461b$export$1050f835b63b671e,
    __generator: $6e71d36bd176461b$export$67ebef60e6f28a6,
    __createBinding: $6e71d36bd176461b$export$45d3717a4c69092e,
    __exportStar: $6e71d36bd176461b$export$f33643c0debef087,
    __values: $6e71d36bd176461b$export$19a8beecd37a4c45,
    __read: $6e71d36bd176461b$export$8d051b38c9118094,
    __spread: $6e71d36bd176461b$export$afc72e2116322959,
    __spreadArrays: $6e71d36bd176461b$export$6388937ca91ccae8,
    __spreadArray: $6e71d36bd176461b$export$1216008129fb82ed,
    __await: $6e71d36bd176461b$export$10c90e4f7922046c,
    __asyncGenerator: $6e71d36bd176461b$export$e427f37a30a4de9b,
    __asyncDelegator: $6e71d36bd176461b$export$bbd80228419bb833,
    __asyncValues: $6e71d36bd176461b$export$e3b29a3d6162315f,
    __makeTemplateObject: $6e71d36bd176461b$export$4fb47efe1390b86f,
    __importStar: $6e71d36bd176461b$export$c21735bcef00d192,
    __importDefault: $6e71d36bd176461b$export$da59b14a69baef04,
    __classPrivateFieldGet: $6e71d36bd176461b$export$d5dcaf168c640c35,
    __classPrivateFieldSet: $6e71d36bd176461b$export$d40a35129aaff81f,
    __classPrivateFieldIn: $6e71d36bd176461b$export$81fdc39f203e4e04,
    __addDisposableResource: $6e71d36bd176461b$export$88ac25d8e944e405,
    __disposeResources: $6e71d36bd176461b$export$8f076105dc360e92
};

});

parcelRegister("58hVP", function(module, exports) {
$parcel$export(module.exports, "css", function () { return (parcelRequire("kdIRT")).css; });
$parcel$export(module.exports, "html", function () { return (parcelRequire("j65ea")).html; });
$parcel$export(module.exports, "LitElement", function () { return (parcelRequire("3FsY2")).LitElement; });
$parcel$export(module.exports, "nothing", function () { return (parcelRequire("j65ea")).nothing; });
parcelRequire("floQr");
parcelRequire("j65ea");
parcelRequire("3FsY2");
parcelRequire("dUhhM");

});
parcelRegister("floQr", function(module, exports) {

$parcel$export(module.exports, "ReactiveElement", function () { return $b2bc16d83319a913$export$c7c07a37856565d; });
$parcel$export(module.exports, "css", function () { return (parcelRequire("kdIRT")).css; });

var $kdIRT = parcelRequire("kdIRT");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $b2bc16d83319a913$var$s;
const $b2bc16d83319a913$var$e = window, $b2bc16d83319a913$var$r = $b2bc16d83319a913$var$e.trustedTypes, $b2bc16d83319a913$var$h = $b2bc16d83319a913$var$r ? $b2bc16d83319a913$var$r.emptyScript : "", $b2bc16d83319a913$var$o = $b2bc16d83319a913$var$e.reactiveElementPolyfillSupport, $b2bc16d83319a913$export$7312b35fbf521afb = {
    toAttribute (t, i) {
        switch(i){
            case Boolean:
                t = t ? $b2bc16d83319a913$var$h : null;
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
}, $b2bc16d83319a913$export$53a6892c50694894 = (t, i)=>i !== t && (i == i || t == t), $b2bc16d83319a913$var$l = {
    attribute: !0,
    type: String,
    converter: $b2bc16d83319a913$export$7312b35fbf521afb,
    reflect: !1,
    hasChanged: $b2bc16d83319a913$export$53a6892c50694894
}, $b2bc16d83319a913$var$d = "finalized";
class $b2bc16d83319a913$export$c7c07a37856565d extends HTMLElement {
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
    static createProperty(t, i = $b2bc16d83319a913$var$l) {
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
        return this.elementProperties.get(t) || $b2bc16d83319a913$var$l;
    }
    static finalize() {
        if (this.hasOwnProperty($b2bc16d83319a913$var$d)) return !1;
        this[$b2bc16d83319a913$var$d] = !0;
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
            for (const i of e)s.unshift((0, $kdIRT.getCompatibleStyle)(i));
        } else void 0 !== i && s.push((0, $kdIRT.getCompatibleStyle)(i));
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
        return (0, $kdIRT.adoptStyles)(s, this.constructor.elementStyles), s;
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
    _$EO(t, i, s = $b2bc16d83319a913$var$l) {
        var e;
        const r = this.constructor._$Ep(t, s);
        if (void 0 !== r && !0 === s.reflect) {
            const h = (void 0 !== (null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) ? s.converter : $b2bc16d83319a913$export$7312b35fbf521afb).toAttribute(i, s.type);
            this._$El = t, null == h ? this.removeAttribute(r) : this.setAttribute(r, h), this._$El = null;
        }
    }
    _$AK(t, i) {
        var s;
        const e = this.constructor, r = e._$Ev.get(t);
        if (void 0 !== r && this._$El !== r) {
            const t = e.getPropertyOptions(r), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== (null === (s = t.converter) || void 0 === s ? void 0 : s.fromAttribute) ? t.converter : $b2bc16d83319a913$export$7312b35fbf521afb;
            this._$El = r, this[r] = h.fromAttribute(i, t.type), this._$El = null;
        }
    }
    requestUpdate(t, i, s) {
        let e = !0;
        void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || $b2bc16d83319a913$export$53a6892c50694894)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(t, s))) : e = !1), !this.isUpdatePending && e && (this._$E_ = this._$Ej());
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
$b2bc16d83319a913$export$c7c07a37856565d[$b2bc16d83319a913$var$d] = !0, $b2bc16d83319a913$export$c7c07a37856565d.elementProperties = new Map, $b2bc16d83319a913$export$c7c07a37856565d.elementStyles = [], $b2bc16d83319a913$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, null == $b2bc16d83319a913$var$o || $b2bc16d83319a913$var$o({
    ReactiveElement: $b2bc16d83319a913$export$c7c07a37856565d
}), (null !== ($b2bc16d83319a913$var$s = $b2bc16d83319a913$var$e.reactiveElementVersions) && void 0 !== $b2bc16d83319a913$var$s ? $b2bc16d83319a913$var$s : $b2bc16d83319a913$var$e.reactiveElementVersions = []).push("1.6.3");

});
parcelRegister("kdIRT", function(module, exports) {

$parcel$export(module.exports, "css", function () { return $eb87d37289b21d7d$export$dbf350e5966cf602; });
$parcel$export(module.exports, "adoptStyles", function () { return $eb87d37289b21d7d$export$2ca4a66ec4cecb90; });
$parcel$export(module.exports, "getCompatibleStyle", function () { return $eb87d37289b21d7d$export$ee69dfd951e24778; });
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $eb87d37289b21d7d$var$t = window, $eb87d37289b21d7d$export$b4d10f6001c083c2 = $eb87d37289b21d7d$var$t.ShadowRoot && (void 0 === $eb87d37289b21d7d$var$t.ShadyCSS || $eb87d37289b21d7d$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $eb87d37289b21d7d$var$s = Symbol(), $eb87d37289b21d7d$var$n = new WeakMap;
class $eb87d37289b21d7d$export$505d1e8739bad805 {
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($eb87d37289b21d7d$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $eb87d37289b21d7d$var$n.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $eb87d37289b21d7d$var$n.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
    constructor(t, e, n){
        if (this._$cssResult$ = !0, n !== $eb87d37289b21d7d$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
}
const $eb87d37289b21d7d$export$8d80f9cac07cdb3 = (t)=>new $eb87d37289b21d7d$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $eb87d37289b21d7d$var$s), $eb87d37289b21d7d$export$dbf350e5966cf602 = (t, ...e)=>{
    const n = 1 === t.length ? t[0] : e.reduce((e, s, n)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[n + 1], t[0]);
    return new $eb87d37289b21d7d$export$505d1e8739bad805(n, t, $eb87d37289b21d7d$var$s);
}, $eb87d37289b21d7d$export$2ca4a66ec4cecb90 = (s, n)=>{
    $eb87d37289b21d7d$export$b4d10f6001c083c2 ? s.adoptedStyleSheets = n.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet) : n.forEach((e)=>{
        const n = document.createElement("style"), o = $eb87d37289b21d7d$var$t.litNonce;
        void 0 !== o && n.setAttribute("nonce", o), n.textContent = e.cssText, s.appendChild(n);
    });
}, $eb87d37289b21d7d$export$ee69dfd951e24778 = $eb87d37289b21d7d$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $eb87d37289b21d7d$export$8d80f9cac07cdb3(e);
    })(t) : t;

});


parcelRegister("j65ea", function(module, exports) {

$parcel$export(module.exports, "html", function () { return $de72a1f5325202e5$export$c0bb0b647f701bb5; });
$parcel$export(module.exports, "noChange", function () { return $de72a1f5325202e5$export$9c068ae9cc5db4e8; });
$parcel$export(module.exports, "nothing", function () { return $de72a1f5325202e5$export$45b790e32b2810ee; });
$parcel$export(module.exports, "render", function () { return $de72a1f5325202e5$export$b3890eb0ae9dca99; });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $de72a1f5325202e5$var$t;
const $de72a1f5325202e5$var$i = window, $de72a1f5325202e5$var$s = $de72a1f5325202e5$var$i.trustedTypes, $de72a1f5325202e5$var$e = $de72a1f5325202e5$var$s ? $de72a1f5325202e5$var$s.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $de72a1f5325202e5$var$o = "$lit$", $de72a1f5325202e5$var$n = `lit$${(Math.random() + "").slice(9)}$`, $de72a1f5325202e5$var$l = "?" + $de72a1f5325202e5$var$n, $de72a1f5325202e5$var$h = `<${$de72a1f5325202e5$var$l}>`, $de72a1f5325202e5$var$r = document, $de72a1f5325202e5$var$u = ()=>$de72a1f5325202e5$var$r.createComment(""), $de72a1f5325202e5$var$d = (t)=>null === t || "object" != typeof t && "function" != typeof t, $de72a1f5325202e5$var$c = Array.isArray, $de72a1f5325202e5$var$v = (t)=>$de72a1f5325202e5$var$c(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]), $de72a1f5325202e5$var$a = "[ 	\n\f\r]", $de72a1f5325202e5$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $de72a1f5325202e5$var$_ = /-->/g, $de72a1f5325202e5$var$m = />/g, $de72a1f5325202e5$var$p = RegExp(`>|${$de72a1f5325202e5$var$a}(?:([^\\s"'>=/]+)(${$de72a1f5325202e5$var$a}*=${$de72a1f5325202e5$var$a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $de72a1f5325202e5$var$g = /'/g, $de72a1f5325202e5$var$$ = /"/g, $de72a1f5325202e5$var$y = /^(?:script|style|textarea|title)$/i, $de72a1f5325202e5$var$w = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $de72a1f5325202e5$export$c0bb0b647f701bb5 = $de72a1f5325202e5$var$w(1), $de72a1f5325202e5$export$7ed1367e7fa1ad68 = $de72a1f5325202e5$var$w(2), $de72a1f5325202e5$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $de72a1f5325202e5$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $de72a1f5325202e5$var$E = new WeakMap, $de72a1f5325202e5$var$C = $de72a1f5325202e5$var$r.createTreeWalker($de72a1f5325202e5$var$r, 129, null, !1);
function $de72a1f5325202e5$var$P(t, i) {
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $de72a1f5325202e5$var$e ? $de72a1f5325202e5$var$e.createHTML(i) : i;
}
const $de72a1f5325202e5$var$V = (t, i)=>{
    const s = t.length - 1, e = [];
    let l, r = 2 === i ? "<svg>" : "", u = $de72a1f5325202e5$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let d, c, v = -1, a = 0;
        for(; a < s.length && (u.lastIndex = a, c = u.exec(s), null !== c);)a = u.lastIndex, u === $de72a1f5325202e5$var$f ? "!--" === c[1] ? u = $de72a1f5325202e5$var$_ : void 0 !== c[1] ? u = $de72a1f5325202e5$var$m : void 0 !== c[2] ? ($de72a1f5325202e5$var$y.test(c[2]) && (l = RegExp("</" + c[2], "g")), u = $de72a1f5325202e5$var$p) : void 0 !== c[3] && (u = $de72a1f5325202e5$var$p) : u === $de72a1f5325202e5$var$p ? ">" === c[0] ? (u = null != l ? l : $de72a1f5325202e5$var$f, v = -1) : void 0 === c[1] ? v = -2 : (v = u.lastIndex - c[2].length, d = c[1], u = void 0 === c[3] ? $de72a1f5325202e5$var$p : '"' === c[3] ? $de72a1f5325202e5$var$$ : $de72a1f5325202e5$var$g) : u === $de72a1f5325202e5$var$$ || u === $de72a1f5325202e5$var$g ? u = $de72a1f5325202e5$var$p : u === $de72a1f5325202e5$var$_ || u === $de72a1f5325202e5$var$m ? u = $de72a1f5325202e5$var$f : (u = $de72a1f5325202e5$var$p, l = void 0);
        const w = u === $de72a1f5325202e5$var$p && t[i + 1].startsWith("/>") ? " " : "";
        r += u === $de72a1f5325202e5$var$f ? s + $de72a1f5325202e5$var$h : v >= 0 ? (e.push(d), s.slice(0, v) + $de72a1f5325202e5$var$o + s.slice(v) + $de72a1f5325202e5$var$n + w) : s + $de72a1f5325202e5$var$n + (-2 === v ? (e.push(void 0), i) : w);
    }
    return [
        $de72a1f5325202e5$var$P(t, r + (t[s] || "<?>") + (2 === i ? "</svg>" : "")),
        e
    ];
};
class $de72a1f5325202e5$var$N {
    static createElement(t, i) {
        const s = $de72a1f5325202e5$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
    constructor({ strings: t, _$litType$: i }, e){
        let h;
        this.parts = [];
        let r = 0, d = 0;
        const c = t.length - 1, v = this.parts, [a, f] = $de72a1f5325202e5$var$V(t, i);
        if (this.el = $de72a1f5325202e5$var$N.createElement(a, e), $de72a1f5325202e5$var$C.currentNode = this.el.content, 2 === i) {
            const t = this.el.content, i = t.firstChild;
            i.remove(), t.append(...i.childNodes);
        }
        for(; null !== (h = $de72a1f5325202e5$var$C.nextNode()) && v.length < c;){
            if (1 === h.nodeType) {
                if (h.hasAttributes()) {
                    const t = [];
                    for (const i of h.getAttributeNames())if (i.endsWith($de72a1f5325202e5$var$o) || i.startsWith($de72a1f5325202e5$var$n)) {
                        const s = f[d++];
                        if (t.push(i), void 0 !== s) {
                            const t = h.getAttribute(s.toLowerCase() + $de72a1f5325202e5$var$o).split($de72a1f5325202e5$var$n), i = /([.?@])?(.*)/.exec(s);
                            v.push({
                                type: 1,
                                index: r,
                                name: i[2],
                                strings: t,
                                ctor: "." === i[1] ? $de72a1f5325202e5$var$H : "?" === i[1] ? $de72a1f5325202e5$var$L : "@" === i[1] ? $de72a1f5325202e5$var$z : $de72a1f5325202e5$var$k
                            });
                        } else v.push({
                            type: 6,
                            index: r
                        });
                    }
                    for (const i of t)h.removeAttribute(i);
                }
                if ($de72a1f5325202e5$var$y.test(h.tagName)) {
                    const t = h.textContent.split($de72a1f5325202e5$var$n), i = t.length - 1;
                    if (i > 0) {
                        h.textContent = $de72a1f5325202e5$var$s ? $de72a1f5325202e5$var$s.emptyScript : "";
                        for(let s = 0; s < i; s++)h.append(t[s], $de72a1f5325202e5$var$u()), $de72a1f5325202e5$var$C.nextNode(), v.push({
                            type: 2,
                            index: ++r
                        });
                        h.append(t[i], $de72a1f5325202e5$var$u());
                    }
                }
            } else if (8 === h.nodeType) {
                if (h.data === $de72a1f5325202e5$var$l) v.push({
                    type: 2,
                    index: r
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = h.data.indexOf($de72a1f5325202e5$var$n, t + 1));)v.push({
                        type: 7,
                        index: r
                    }), t += $de72a1f5325202e5$var$n.length - 1;
                }
            }
            r++;
        }
    }
}
function $de72a1f5325202e5$var$S(t, i, s = t, e) {
    var o, n, l, h;
    if (i === $de72a1f5325202e5$export$9c068ae9cc5db4e8) return i;
    let r = void 0 !== e ? null === (o = s._$Co) || void 0 === o ? void 0 : o[e] : s._$Cl;
    const u = $de72a1f5325202e5$var$d(i) ? void 0 : i._$litDirective$;
    return (null == r ? void 0 : r.constructor) !== u && (null === (n = null == r ? void 0 : r._$AO) || void 0 === n || n.call(r, !1), void 0 === u ? r = void 0 : (r = new u(t), r._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Co) && void 0 !== l ? l : h._$Co = [])[e] = r : s._$Cl = r), void 0 !== r && (i = $de72a1f5325202e5$var$S(t, r._$AS(t, i.values), r, e)), i;
}
class $de72a1f5325202e5$var$M {
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        var i;
        const { el: { content: s }, parts: e } = this._$AD, o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : $de72a1f5325202e5$var$r).importNode(s, !0);
        $de72a1f5325202e5$var$C.currentNode = o;
        let n = $de72a1f5325202e5$var$C.nextNode(), l = 0, h = 0, u = e[0];
        for(; void 0 !== u;){
            if (l === u.index) {
                let i;
                2 === u.type ? i = new $de72a1f5325202e5$var$R(n, n.nextSibling, this, t) : 1 === u.type ? i = new u.ctor(n, u.name, u.strings, this, t) : 6 === u.type && (i = new $de72a1f5325202e5$var$Z(n, this, t)), this._$AV.push(i), u = e[++h];
            }
            l !== (null == u ? void 0 : u.index) && (n = $de72a1f5325202e5$var$C.nextNode(), l++);
        }
        return $de72a1f5325202e5$var$C.currentNode = $de72a1f5325202e5$var$r, o;
    }
    v(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
}
class $de72a1f5325202e5$var$R {
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
        t = $de72a1f5325202e5$var$S(this, t, i), $de72a1f5325202e5$var$d(t) ? t === $de72a1f5325202e5$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $de72a1f5325202e5$export$45b790e32b2810ee && this._$AR(), this._$AH = $de72a1f5325202e5$export$45b790e32b2810ee) : t !== this._$AH && t !== $de72a1f5325202e5$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : $de72a1f5325202e5$var$v(t) ? this.T(t) : this._(t);
    }
    k(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    $(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
    }
    _(t) {
        this._$AH !== $de72a1f5325202e5$export$45b790e32b2810ee && $de72a1f5325202e5$var$d(this._$AH) ? this._$AA.nextSibling.data = t : this.$($de72a1f5325202e5$var$r.createTextNode(t)), this._$AH = t;
    }
    g(t) {
        var i;
        const { values: s, _$litType$: e } = t, o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = $de72a1f5325202e5$var$N.createElement($de72a1f5325202e5$var$P(e.h, e.h[0]), this.options)), e);
        if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.v(s);
        else {
            const t = new $de72a1f5325202e5$var$M(o, this), i = t.u(this.options);
            t.v(s), this.$(i), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $de72a1f5325202e5$var$E.get(t.strings);
        return void 0 === i && $de72a1f5325202e5$var$E.set(t.strings, i = new $de72a1f5325202e5$var$N(t)), i;
    }
    T(t) {
        $de72a1f5325202e5$var$c(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const o of t)e === i.length ? i.push(s = new $de72a1f5325202e5$var$R(this.k($de72a1f5325202e5$var$u()), this.k($de72a1f5325202e5$var$u()), this, this.options)) : s = i[e], s._$AI(o), e++;
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
        this.type = 2, this._$AH = $de72a1f5325202e5$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cp = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
    }
}
class $de72a1f5325202e5$var$k {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t, i = this, s, e) {
        const o = this.strings;
        let n = !1;
        if (void 0 === o) t = $de72a1f5325202e5$var$S(this, t, i, 0), n = !$de72a1f5325202e5$var$d(t) || t !== this._$AH && t !== $de72a1f5325202e5$export$9c068ae9cc5db4e8, n && (this._$AH = t);
        else {
            const e = t;
            let l, h;
            for(t = o[0], l = 0; l < o.length - 1; l++)h = $de72a1f5325202e5$var$S(this, e[s + l], i, l), h === $de72a1f5325202e5$export$9c068ae9cc5db4e8 && (h = this._$AH[l]), n || (n = !$de72a1f5325202e5$var$d(h) || h !== this._$AH[l]), h === $de72a1f5325202e5$export$45b790e32b2810ee ? t = $de72a1f5325202e5$export$45b790e32b2810ee : t !== $de72a1f5325202e5$export$45b790e32b2810ee && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
        }
        n && !e && this.j(t);
    }
    j(t) {
        t === $de72a1f5325202e5$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
    }
    constructor(t, i, s, e, o){
        this.type = 1, this._$AH = $de72a1f5325202e5$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $de72a1f5325202e5$export$45b790e32b2810ee;
    }
}
class $de72a1f5325202e5$var$H extends $de72a1f5325202e5$var$k {
    j(t) {
        this.element[this.name] = t === $de72a1f5325202e5$export$45b790e32b2810ee ? void 0 : t;
    }
    constructor(){
        super(...arguments), this.type = 3;
    }
}
const $de72a1f5325202e5$var$I = $de72a1f5325202e5$var$s ? $de72a1f5325202e5$var$s.emptyScript : "";
class $de72a1f5325202e5$var$L extends $de72a1f5325202e5$var$k {
    j(t) {
        t && t !== $de72a1f5325202e5$export$45b790e32b2810ee ? this.element.setAttribute(this.name, $de72a1f5325202e5$var$I) : this.element.removeAttribute(this.name);
    }
    constructor(){
        super(...arguments), this.type = 4;
    }
}
class $de72a1f5325202e5$var$z extends $de72a1f5325202e5$var$k {
    _$AI(t, i = this) {
        var s;
        if ((t = null !== (s = $de72a1f5325202e5$var$S(this, t, i, 0)) && void 0 !== s ? s : $de72a1f5325202e5$export$45b790e32b2810ee) === $de72a1f5325202e5$export$9c068ae9cc5db4e8) return;
        const e = this._$AH, o = t === $de72a1f5325202e5$export$45b790e32b2810ee && e !== $de72a1f5325202e5$export$45b790e32b2810ee || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive, n = t !== $de72a1f5325202e5$export$45b790e32b2810ee && (e === $de72a1f5325202e5$export$45b790e32b2810ee || o);
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
class $de72a1f5325202e5$var$Z {
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $de72a1f5325202e5$var$S(this, t);
    }
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
}
const $de72a1f5325202e5$export$8613d1ca9052b22e = {
    O: $de72a1f5325202e5$var$o,
    P: $de72a1f5325202e5$var$n,
    A: $de72a1f5325202e5$var$l,
    C: 1,
    M: $de72a1f5325202e5$var$V,
    L: $de72a1f5325202e5$var$M,
    R: $de72a1f5325202e5$var$v,
    D: $de72a1f5325202e5$var$S,
    I: $de72a1f5325202e5$var$R,
    V: $de72a1f5325202e5$var$k,
    H: $de72a1f5325202e5$var$L,
    N: $de72a1f5325202e5$var$z,
    U: $de72a1f5325202e5$var$H,
    F: $de72a1f5325202e5$var$Z
}, $de72a1f5325202e5$var$B = $de72a1f5325202e5$var$i.litHtmlPolyfillSupport;
null == $de72a1f5325202e5$var$B || $de72a1f5325202e5$var$B($de72a1f5325202e5$var$N, $de72a1f5325202e5$var$R), (null !== ($de72a1f5325202e5$var$t = $de72a1f5325202e5$var$i.litHtmlVersions) && void 0 !== $de72a1f5325202e5$var$t ? $de72a1f5325202e5$var$t : $de72a1f5325202e5$var$i.litHtmlVersions = []).push("2.8.0");
const $de72a1f5325202e5$export$b3890eb0ae9dca99 = (t, i, s)=>{
    var e, o;
    const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
    let l = n._$litPart$;
    if (void 0 === l) {
        const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
        n._$litPart$ = l = new $de72a1f5325202e5$var$R(i.insertBefore($de72a1f5325202e5$var$u(), t), t, void 0, null != s ? s : {});
    }
    return l._$AI(t), l;
};

});

parcelRegister("3FsY2", function(module, exports) {
$parcel$export(module.exports, "css", function () { return (parcelRequire("kdIRT")).css; });
$parcel$export(module.exports, "ReactiveElement", function () { return (parcelRequire("floQr")).ReactiveElement; });
$parcel$export(module.exports, "html", function () { return (parcelRequire("j65ea")).html; });
$parcel$export(module.exports, "noChange", function () { return (parcelRequire("j65ea")).noChange; });
$parcel$export(module.exports, "nothing", function () { return (parcelRequire("j65ea")).nothing; });
$parcel$export(module.exports, "render", function () { return (parcelRequire("j65ea")).render; });

$parcel$export(module.exports, "LitElement", function () { return $2abbabc4d60b87e1$export$3f2f9f5909897157; });

var $floQr = parcelRequire("floQr");

var $j65ea = parcelRequire("j65ea");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $2abbabc4d60b87e1$var$l, $2abbabc4d60b87e1$var$o;
const $2abbabc4d60b87e1$export$8bf27daf9e8907c9 = (0, $floQr.ReactiveElement);
class $2abbabc4d60b87e1$export$3f2f9f5909897157 extends (0, $floQr.ReactiveElement) {
    createRenderRoot() {
        var t, e;
        const i = super.createRenderRoot();
        return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i;
    }
    update(t) {
        const i = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $j65ea.render)(i, this.renderRoot, this.renderOptions);
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
        return 0, $j65ea.noChange;
    }
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
}
$2abbabc4d60b87e1$export$3f2f9f5909897157.finalized = !0, $2abbabc4d60b87e1$export$3f2f9f5909897157._$litElement$ = !0, null === ($2abbabc4d60b87e1$var$l = globalThis.litElementHydrateSupport) || void 0 === $2abbabc4d60b87e1$var$l || $2abbabc4d60b87e1$var$l.call(globalThis, {
    LitElement: $2abbabc4d60b87e1$export$3f2f9f5909897157
});
const $2abbabc4d60b87e1$var$n = globalThis.litElementPolyfillSupport;
null == $2abbabc4d60b87e1$var$n || $2abbabc4d60b87e1$var$n({
    LitElement: $2abbabc4d60b87e1$export$3f2f9f5909897157
});
const $2abbabc4d60b87e1$export$f5c524615a7708d6 = {
    _$AK: (t, e, i)=>{
        t._$AK(e, i);
    },
    _$AL: (t)=>t._$AL
};
(null !== ($2abbabc4d60b87e1$var$o = globalThis.litElementVersions) && void 0 !== $2abbabc4d60b87e1$var$o ? $2abbabc4d60b87e1$var$o : globalThis.litElementVersions = []).push("3.3.3");

});

parcelRegister("dUhhM", function(module, exports) {
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $a1fde9e6e437b504$export$6acf61af03e62db = !1;

});


parcelRegister("1WJcw", function(module, exports) {
$parcel$export(module.exports, "customElement", function () { return (parcelRequire("60ueK")).customElement; });
$parcel$export(module.exports, "property", function () { return (parcelRequire("2fGCB")).property; });
$parcel$export(module.exports, "state", function () { return (parcelRequire("9f4dd")).state; });
parcelRequire("60ueK");
parcelRequire("2fGCB");
parcelRequire("9f4dd");
parcelRequire("fAhFI");
parcelRequire("kMk70");
parcelRequire("2shzn");
parcelRequire("1Mkt2");
parcelRequire("1s7BQ");
parcelRequire("39dWA");

});
parcelRegister("60ueK", function(module, exports) {

$parcel$export(module.exports, "customElement", function () { return $45fa32965ce56943$export$da64fc29f17f9d0e; });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $45fa32965ce56943$export$da64fc29f17f9d0e = (e)=>(n)=>"function" == typeof n ? ((e, n)=>(customElements.define(e, n), n))(e, n) : ((e, n)=>{
            const { kind: t, elements: s } = n;
            return {
                kind: t,
                elements: s,
                finisher (n) {
                    customElements.define(e, n);
                }
            };
        })(e, n);

});

parcelRegister("2fGCB", function(module, exports) {

$parcel$export(module.exports, "property", function () { return $1a3e0b430f25b4cf$export$d541bacb2bda4494; });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $1a3e0b430f25b4cf$var$i = (i, e)=>"method" === e.kind && e.descriptor && !("value" in e.descriptor) ? {
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
    }, $1a3e0b430f25b4cf$var$e = (i, e, n)=>{
    e.constructor.createProperty(n, i);
};
function $1a3e0b430f25b4cf$export$d541bacb2bda4494(n) {
    return (t, o)=>void 0 !== o ? $1a3e0b430f25b4cf$var$e(n, t, o) : $1a3e0b430f25b4cf$var$i(n, t);
}

});

parcelRegister("9f4dd", function(module, exports) {

$parcel$export(module.exports, "state", function () { return $6ba8c836674c2e4f$export$ca000e230c0caa3e; });

var $2fGCB = parcelRequire("2fGCB");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $6ba8c836674c2e4f$export$ca000e230c0caa3e(t) {
    return (0, $2fGCB.property)({
        ...t,
        state: !0
    });
}

});

parcelRegister("fAhFI", function(module, exports) {

var $btETT = parcelRequire("btETT");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $b587ed11d9585cb4$export$b2b799818fbabcf3(e) {
    return (0, $btETT.decorateProperty)({
        finisher: (r, t)=>{
            Object.assign(r.prototype[t], e);
        }
    });
}

});
parcelRegister("btETT", function(module, exports) {

$parcel$export(module.exports, "decorateProperty", function () { return $85b2211c1690b065$export$757d561a932dc1cb; });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $85b2211c1690b065$export$29fd0ed4087278b5 = (e, t, o)=>{
    Object.defineProperty(t, o, e);
}, $85b2211c1690b065$export$18eb0154d0069a01 = (e, t)=>({
        kind: "method",
        placement: "prototype",
        key: t.key,
        descriptor: e
    }), $85b2211c1690b065$export$757d561a932dc1cb = ({ finisher: e, descriptor: t })=>(o, n)=>{
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

});


parcelRegister("kMk70", function(module, exports) {

var $btETT = parcelRequire("btETT");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $f207e426d8138ef9$export$2fa187e846a241c4(i, n) {
    return (0, $btETT.decorateProperty)({
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

});

parcelRegister("2shzn", function(module, exports) {

var $btETT = parcelRequire("btETT");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $1c9bd34388ce0f2f$export$dcd0d083aa86c355(e) {
    return (0, $btETT.decorateProperty)({
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

});

parcelRegister("1Mkt2", function(module, exports) {

var $btETT = parcelRequire("btETT");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $14ba26872047dc42$export$163dfc35cc43f240(e) {
    return (0, $btETT.decorateProperty)({
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

});

parcelRegister("1s7BQ", function(module, exports) {

$parcel$export(module.exports, "queryAssignedElements", function () { return $10ee4f083953a4b1$export$4682af2d9ee91415; });

var $btETT = parcelRequire("btETT");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $10ee4f083953a4b1$var$n;
const $10ee4f083953a4b1$var$e = null != (null === ($10ee4f083953a4b1$var$n = window.HTMLSlotElement) || void 0 === $10ee4f083953a4b1$var$n ? void 0 : $10ee4f083953a4b1$var$n.prototype.assignedElements) ? (o, n)=>o.assignedElements(n) : (o, n)=>o.assignedNodes(n).filter((o)=>o.nodeType === Node.ELEMENT_NODE);
function $10ee4f083953a4b1$export$4682af2d9ee91415(n) {
    const { slot: l, selector: t } = null != n ? n : {};
    return (0, $btETT.decorateProperty)({
        descriptor: (o)=>({
                get () {
                    var o;
                    const r = "slot" + (l ? `[name=${l}]` : ":not([name])"), i = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(r), s = null != i ? $10ee4f083953a4b1$var$e(i, n) : [];
                    return t ? s.filter((o)=>o.matches(t)) : s;
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

});

parcelRegister("39dWA", function(module, exports) {

var $btETT = parcelRequire("btETT");

var $1s7BQ = parcelRequire("1s7BQ");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $24ad0755ccd1c108$export$1bdbe53f9df1b8(o, n, r) {
    let l, s = o;
    return "object" == typeof o ? (s = o.slot, l = o) : l = {
        flatten: n
    }, r ? (0, $1s7BQ.queryAssignedElements)({
        slot: s,
        flatten: n,
        selector: r
    }) : (0, $btETT.decorateProperty)({
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

});


parcelRegister("8ZoOn", function(module, exports) {

$parcel$export(module.exports, "getLanguage", function () { return $79b667f7a25f84ab$export$64783e31db14f0ba; });
$parcel$export(module.exports, "translateTo", function () { return $79b667f7a25f84ab$export$df5de7d5c552d075; });
const $79b667f7a25f84ab$var$defaultLang = `en-US`;
const $79b667f7a25f84ab$var$defaultTranslation = {
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
const $79b667f7a25f84ab$export$150b732325d14d04 = {
    [$79b667f7a25f84ab$var$defaultLang]: $79b667f7a25f84ab$var$defaultTranslation,
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
const $79b667f7a25f84ab$export$d0d68bb9ed2c643d = Object.keys($79b667f7a25f84ab$export$150b732325d14d04);
const $79b667f7a25f84ab$export$625550452a3fa3ec = (key, lang)=>{
    var _translations_lang;
    var _translations_lang_key;
    return (_translations_lang_key = (_translations_lang = $79b667f7a25f84ab$export$150b732325d14d04[lang]) === null || _translations_lang === void 0 ? void 0 : _translations_lang[key]) !== null && _translations_lang_key !== void 0 ? _translations_lang_key : $79b667f7a25f84ab$var$defaultTranslation[key];
};
const $79b667f7a25f84ab$export$64783e31db14f0ba = (configLang)=>{
    var _ref;
    return (_ref = configLang !== null && configLang !== void 0 ? configLang : navigator.language) !== null && _ref !== void 0 ? _ref : $79b667f7a25f84ab$var$defaultLang;
};
const $79b667f7a25f84ab$export$df5de7d5c552d075 = (lang)=>(key)=>$79b667f7a25f84ab$export$625550452a3fa3ec(key, lang);

});

parcelRegister("gLERs", function(module, exports) {
module.exports = import("./hasl4-departure-card-editor.js").then(()=>parcelRequire("62UXc"));

});


var $9tTrf = parcelRequire("9tTrf");
parcelRequire("58hVP");
var $j65ea = parcelRequire("j65ea");
var $3FsY2 = parcelRequire("3FsY2");
parcelRequire("1WJcw");
var $2fGCB = parcelRequire("2fGCB");
var $9f4dd = parcelRequire("9f4dd");
var $f76d50a667efc73d$export$6d07abd9f0bba447;
(function(TransportType) {
    TransportType["METRO"] = "METRO";
    TransportType["BUS"] = "BUS";
    TransportType["TRAM"] = "TRAM";
    TransportType["TRAIN"] = "TRAIN";
    TransportType["SHIP"] = "SHIP";
    TransportType["FERRY"] = "FETTRY";
    TransportType["TAXI"] = "TAXI";
})($f76d50a667efc73d$export$6d07abd9f0bba447 || ($f76d50a667efc73d$export$6d07abd9f0bba447 = {}));



var $8ZoOn = parcelRequire("8ZoOn");
const $56b7de6dd6e9553b$export$c2f8e0cc249a8d8f = {
    title: "",
    entities: [],
    show_entity_name: true,
    show_header: true,
    show_icon: true,
    show_departures: true,
    direction: 0,
    max_departures: 5,
    hide_departed: true,
    show_departed_offeset: 5,
    show_updated: true,
    tap_action: "info"
};


parcelRequire("58hVP");
var $kdIRT = parcelRequire("kdIRT");
let $4e579c3c0232edff$var$_ = (t)=>t, $4e579c3c0232edff$var$t, $4e579c3c0232edff$var$t1;
const $4e579c3c0232edff$var$lineColorsStyles = (0, $kdIRT.css)($4e579c3c0232edff$var$t || ($4e579c3c0232edff$var$t = $4e579c3c0232edff$var$_`
    .line-icon {
        border-radius: 3px;
        padding: 3px 3px 0 3px;
        color: #fff;
        min-width: 22px;
        height: 22px;
        font-weight: 500;
        display: inline-block;
        text-align: center;
        text-shadow: 1px 1px 2px var(--outline-color);
    }

    .bus {
        border: 1px solid var(--outline-color);
        color: var(--primary-text-color);
    }

    .red {
        background-color: #d71d24;
    }
    .blue {
        background-color: #0089ca;
    }
    .green {
        background-color: #179d4d;
    }

    .train {
        background-color: #ec619f;
    }

    .tram {
        background-color: #985141;
    }

    .tram_7 {
        background-color: #878a83;
    }

    .tram_12 {
        background-color: #778da7;
    }

    .tram_21 {
        background-color: #b76020;
    }

    .tram_22 {
        background-color: #d77d00;
    }
    `));
const $4e579c3c0232edff$var$departureEntityStyles = (0, $kdIRT.css)($4e579c3c0232edff$var$t1 || ($4e579c3c0232edff$var$t1 = $4e579c3c0232edff$var$_`
    .card-header .name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .departures > :first-child {
        margin-top: 0;
    }

    .departure.departed {
        color: var(--secondary-text-color);
    }

    .departure.departed > .main {
        text-decoration: line-through;
    }

    .row {
        margin-top: 8px;

        display: flex;
        justify-content: space-between;
    }

    .col {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
    }

    .col.icon {
        flex-basis: 40px;
    }

    .row.name {
        height: 40px;
        padding-left: 8px;
        font-weight: 400;
        font-size: large;
        align-items: center;
        justify-content: center;
    }
    .row.header {
        height: 40px;
        font-size: medium;
        font-weight: 400;
        font-family: var(--paper-font-headline_-_font-family);
        letter-spacing: var(--paper-font-headline_-_letter-spacing);
        line-height: var(--paper-font-headline_-_line-height);
        text-rendering: var(--paper-font-common-expensive-kerning_-_text-rendering);
        opacity: var(--dark-primary-opacity);
    }

    .main {
        flex: 2;
    }

    .transport-icon {
        width: 40px;
        height: 40px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

    .warning {
        color: var(--warning-color);
        position: absolute;
        bottom: 0;
        right: 0;
    }

    .warning-message {
        color: var(--warning-color);
        font-size: smaller;
        text-decoration: unset;
    }

    .mr1 {
        margin-right: 8px;
    }

    .updated {
        padding-left: 16px;
        padding-top: 8px;
        font-size: smaller;
    }

    .center { text-align: center; }
    .left { text-align: left; }
    .right { text-align: right; }

    ha-icon {
        transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;
        width: 24px;
        height: 24px;
        color: var(--paper-item-icon-color);
    }
`));
var $4e579c3c0232edff$export$2e2bcd8739ae039 = [
    $4e579c3c0232edff$var$departureEntityStyles,
    $4e579c3c0232edff$var$lineColorsStyles
];


let $b1aade6f82a4b90e$var$_ = (t)=>t, $b1aade6f82a4b90e$var$t, $b1aade6f82a4b90e$var$t1, $b1aade6f82a4b90e$var$t2, $b1aade6f82a4b90e$var$t3, $b1aade6f82a4b90e$var$t4, $b1aade6f82a4b90e$var$t5, $b1aade6f82a4b90e$var$t6, $b1aade6f82a4b90e$var$t7, $b1aade6f82a4b90e$var$t8, $b1aade6f82a4b90e$var$t9, $b1aade6f82a4b90e$var$t10, $b1aade6f82a4b90e$var$t11, $b1aade6f82a4b90e$var$t12, $b1aade6f82a4b90e$var$t13;
const $b1aade6f82a4b90e$var$diffMinutes = (from, to)=>{
    const diffMinutes = Math.ceil((from.getTime() - to.getTime()) / 1000 / 60);
    return diffMinutes;
};

class $b1aade6f82a4b90e$export$7ded24e6705f9c64 extends (0, $3FsY2.LitElement) {
    setConfig(config) {
        this.config = {
            ...(0, $56b7de6dd6e9553b$export$c2f8e0cc249a8d8f),
            ...config
        };
    }
    getCardSize() {
        const singleEntitityExtras = (this.isManyEntitiesSet() ? ()=>0 : ()=>{
            const [_, attrs] = this.getFirstEntity();
            if (!attrs) return 0;
            return this.config.show_entity_name && attrs.friendly_name ? 1 : 0;
        })();
        const deps = this.getDepartures();
        const size = [
            !!this.config.title ? 1 : 0,
            singleEntitityExtras,
            !!this.config.show_header ? 1 : 0,
            (deps === null || deps === void 0 ? void 0 : deps.length) || 0
        ].reduce((sum, entity)=>sum += entity ? entity : 0, 0);
        return Math.max(size, 1);
    }
    getLayoutOptions() {
        return {
            grid_min_columns: 3,
            grid_min_rows: 2
        };
    }
    // configuration card is loaded in async manner
    static async getConfigElement() {
        return await (parcelRequire("gLERs")).then(()=>document.createElement("hasl4-departure-card-editor"));
    }
    render() {
        var _this_config, _this_config1, _this_config2;
        if (!this.config || !this.hass) return 0, $j65ea.nothing;
        const lang = (0, $8ZoOn.getLanguage)((_this_config = this.config) === null || _this_config === void 0 ? void 0 : _this_config.language);
        const _1 = (0, $8ZoOn.translateTo)(lang);
        const departures = ((_this_config1 = this.config) === null || _this_config1 === void 0 ? void 0 : _this_config1.show_departures) ? ()=>{
            const data = this.renderDepartures();
            return data === (0, $j65ea.nothing) ? (0, $j65ea.html)($b1aade6f82a4b90e$var$t || ($b1aade6f82a4b90e$var$t = $b1aade6f82a4b90e$var$_`<span>${0}</span>`), _1(`entity_missing`)) : data;
        } : ()=>(0, $j65ea.nothing);
        const renderLastUpdated = this.isManyEntitiesSet() ? ()=>(0, $j65ea.nothing) : ()=>{
            var _this_config;
            const [data, __] = this.getFirstEntity();
            if (!data) return 0, $j65ea.nothing;
            return ((_this_config = this.config) === null || _this_config === void 0 ? void 0 : _this_config.show_updated) && data.last_updated ? (0, $j65ea.html)($b1aade6f82a4b90e$var$t1 || ($b1aade6f82a4b90e$var$t1 = $b1aade6f82a4b90e$var$_`
                            <div class="updated right">
                                ${0}
                                ${0}
                            </div>`), _1("last_updated"), new Date(data.last_updated).toLocaleTimeString(lang)) : (0, $j65ea.nothing);
        };
        return (0, $j65ea.html)($b1aade6f82a4b90e$var$t3 || ($b1aade6f82a4b90e$var$t3 = $b1aade6f82a4b90e$var$_`
            <ha-card @click="${0}">
                ${0}
                <div class="card-content">
                    ${0}
                    ${0}
                </div>
            </ha-card>
        `), this.clickHandler(), ((_this_config2 = this.config) === null || _this_config2 === void 0 ? void 0 : _this_config2.title) ? (0, $j65ea.html)($b1aade6f82a4b90e$var$t2 || ($b1aade6f82a4b90e$var$t2 = $b1aade6f82a4b90e$var$_`<h1 class="card-header"><div class="name">${0}</div></h1>`), this.config.title) : (0, $j65ea.nothing), departures(), renderLastUpdated());
    }
    getFirstEntity() {
        var _this_config_entities, _this_config, _this_config1, _this_hass;
        const data = (_this_hass = this.hass) === null || _this_hass === void 0 ? void 0 : _this_hass.states[((_this_config = this.config) === null || _this_config === void 0 ? void 0 : (_this_config_entities = _this_config.entities) === null || _this_config_entities === void 0 ? void 0 : _this_config_entities[0]) || ((_this_config1 = this.config) === null || _this_config1 === void 0 ? void 0 : _this_config1.entity)];
        const attrs = data === null || data === void 0 ? void 0 : data.attributes;
        if (data && attrs && $b1aade6f82a4b90e$var$isDepartureAttrs(attrs)) return [
            data,
            attrs
        ];
        return [
            undefined,
            undefined
        ];
    }
    getDeparturesFor(attrs) {
        var _attrs_departures, _this_config;
        if (!attrs) return [];
        const now = new Date();
        return (((_attrs_departures = attrs.departures) === null || _attrs_departures === void 0 ? void 0 : _attrs_departures.filter((d)=>{
            var _this_config, _this_config1;
            if (((_this_config = this.config) === null || _this_config === void 0 ? void 0 : _this_config.direction) === 0) return true;
            return d.direction_code === ((_this_config1 = this.config) === null || _this_config1 === void 0 ? void 0 : _this_config1.direction);
        })// filter by departure time
        .filter((d)=>{
            var _this_config, _this_config1;
            if (!((_this_config = this.config) === null || _this_config === void 0 ? void 0 : _this_config.hide_departed)) return true;
            const diff = $b1aade6f82a4b90e$var$diffMinutes(new Date(d.expected), now);
            return diff + ((_this_config1 = this.config) === null || _this_config1 === void 0 ? void 0 : _this_config1.show_departed_offeset) >= 0;
        })) || []).slice(0, (_this_config = this.config) === null || _this_config === void 0 ? void 0 : _this_config.max_departures);
    }
    getDeparturesCombined(entities) {
        var _this_config;
        const now = new Date();
        return entities// filter invalid entities
        .filter((entity)=>{
            var _this_hass;
            if (!!entity === false) return false;
            const data = (_this_hass = this.hass) === null || _this_hass === void 0 ? void 0 : _this_hass.states[entity];
            if (data === undefined) return false;
            if (!$b1aade6f82a4b90e$var$isDepartureAttrs(data.attributes)) return false;
            return true;
        })// map entity name to departures and gather all together
        .map((entity)=>{
            var _this_hass;
            const state = (_this_hass = this.hass) === null || _this_hass === void 0 ? void 0 : _this_hass.states[entity];
            if ($b1aade6f82a4b90e$var$isDepartureAttrs(state.attributes)) return state.attributes;
        }).flatMap((attrs)=>attrs.departures)// filter by departure time
        .filter((d)=>{
            var _this_config, _this_config1;
            if (!((_this_config = this.config) === null || _this_config === void 0 ? void 0 : _this_config.hide_departed)) return true;
            const diff = $b1aade6f82a4b90e$var$diffMinutes(new Date(d.expected), now);
            return diff + ((_this_config1 = this.config) === null || _this_config1 === void 0 ? void 0 : _this_config1.show_departed_offeset) >= 0;
        })// filter direction
        .filter((d)=>{
            var _this_config, _this_config1;
            if (((_this_config = this.config) === null || _this_config === void 0 ? void 0 : _this_config.direction) === 0) return true;
            return d.direction_code === ((_this_config1 = this.config) === null || _this_config1 === void 0 ? void 0 : _this_config1.direction);
        })// sort by expected departure time
        .sort((a, b)=>new Date(a.expected).getTime() - new Date(b.expected).getTime())// limit to max departures
        .slice(0, (_this_config = this.config) === null || _this_config === void 0 ? void 0 : _this_config.max_departures);
    }
    getDepartures() {
        var _this_config;
        if (this.isManyEntitiesSet()) return this.getDeparturesCombined(((_this_config = this.config) === null || _this_config === void 0 ? void 0 : _this_config.entities) || []);
        const [_, attrs] = this.getFirstEntity();
        if (!attrs) return undefined;
        return this.getDeparturesFor(attrs);
    }
    lineIconClass(type, line, group) {
        let cls = "";
        switch(type){
            case (0, $f76d50a667efc73d$export$6d07abd9f0bba447).BUS:
                cls = `bus bus_${line}`;
                cls = group === "bl\xe5buss" ? `${cls} blue` : cls;
                break;
            case (0, $f76d50a667efc73d$export$6d07abd9f0bba447).METRO:
                cls = `metro metro_${line}`;
                switch(line){
                    case "10":
                    case "11":
                        cls = `${cls} blue`;
                        break;
                    case "13":
                    case "14":
                        cls = `${cls} red`;
                        break;
                    default:
                        cls = `${cls} green`;
                }
                break;
            case (0, $f76d50a667efc73d$export$6d07abd9f0bba447).TRAM:
                cls = `tram tram_${line}`;
                break;
            case (0, $f76d50a667efc73d$export$6d07abd9f0bba447).TRAIN:
                cls = `train train_${line}`;
                break;
        }
        return cls;
    }
    _serviceCall(domain, service, data) {
        this.hass.callService(domain, service, data);
    }
    _showAttributes(el, type, detail, options) {
        const event = new Event(type, {
            bubbles: Boolean(options === null || options === void 0 ? void 0 : options.bubbles),
            cancelable: Boolean(options === null || options === void 0 ? void 0 : options.cancelable),
            composed: Boolean(options === null || options === void 0 ? void 0 : options.composed) || true
        });
        event.detail = detail || {};
        el.dispatchEvent(event);
        return event;
    }
    constructor(...args){
        super(...args);
        this.isManyEntitiesSet = ()=>{
            var _this_config_entities, _this_config;
            return ((_this_config = this.config) === null || _this_config === void 0 ? void 0 : (_this_config_entities = _this_config.entities) === null || _this_config_entities === void 0 ? void 0 : _this_config_entities.length) > 1;
        };
        this.renderDepartures = ()=>{
            var _this_config, _this_config1, _this_config2;
            const renderEntityName = ()=>{
                const [_1, attrs] = this.getFirstEntity();
                if (!attrs) return 0, $j65ea.nothing;
                return this.config.show_entity_name && attrs.friendly_name ? (0, $j65ea.html)($b1aade6f82a4b90e$var$t4 || ($b1aade6f82a4b90e$var$t4 = $b1aade6f82a4b90e$var$_`<div class="row name">${0}</div`), attrs.friendly_name) : (0, $j65ea.nothing);
            };
            const now = new Date();
            const lang = (0, $8ZoOn.getLanguage)((_this_config = this.config) === null || _this_config === void 0 ? void 0 : _this_config.language);
            const _1 = (0, $8ZoOn.translateTo)(lang);
            const departures = this.getDepartures();
            if (!departures) return 0, $j65ea.nothing;
            const isMany = this.isManyEntitiesSet();
            const destinationRegex = ((_this_config1 = this.config) === null || _this_config1 === void 0 ? void 0 : _this_config1.regex) ? {
                search: new RegExp(this.config.regex.search),
                replace: this.config.regex.replace
            } : undefined;
            return (0, $j65ea.html)($b1aade6f82a4b90e$var$t13 || ($b1aade6f82a4b90e$var$t13 = $b1aade6f82a4b90e$var$_`
            <div class="departures">
                ${0}
                ${0}

                ${0}
            </div>
        `), isMany ? "" : renderEntityName(), this.config.show_header ? (0, $j65ea.html)($b1aade6f82a4b90e$var$t6 || ($b1aade6f82a4b90e$var$t6 = $b1aade6f82a4b90e$var$_`
                    <div class="row header">
                        ${0}
                        <div class="col main left">${0}</div>
                        <div class="col right">${0}</div>
                    </div>`), ((_this_config2 = this.config) === null || _this_config2 === void 0 ? void 0 : _this_config2.show_icon) ? (0, $j65ea.html)($b1aade6f82a4b90e$var$t5 || ($b1aade6f82a4b90e$var$t5 = $b1aade6f82a4b90e$var$_`<div class="col icon"></div>`)) : (0, $j65ea.nothing), _1("line"), _1("departure")) : (0, $j65ea.nothing), departures.map((dep)=>{
                var _dep_deviations, _dep_deviations_sort, _dep_deviations1, _this_config, _this_config1, _this_config2;
                const expectedAt = new Date(dep.expected);
                const diff = $b1aade6f82a4b90e$var$diffMinutes(expectedAt, now);
                const isAtThePlatform = diff === 0;
                const isDeparted = diff < 0;
                const hasDeviations = (((_dep_deviations = dep.deviations) === null || _dep_deviations === void 0 ? void 0 : _dep_deviations.length) || 0) > 0;
                const mostImportantDeviation = (_dep_deviations1 = dep.deviations) === null || _dep_deviations1 === void 0 ? void 0 : (_dep_deviations_sort = _dep_deviations1.sort((a, b)=>b.importance_level - a.importance_level)) === null || _dep_deviations_sort === void 0 ? void 0 : _dep_deviations_sort[0];
                const departureTime = ((_this_config = this.config) === null || _this_config === void 0 ? void 0 : _this_config.show_time_always) ? expectedAt.toLocaleTimeString(lang, {
                    hour: "numeric",
                    minute: "numeric"
                }) : (()=>{
                    return isAtThePlatform ? _1("now") : (0, $j65ea.html)($b1aade6f82a4b90e$var$t7 || ($b1aade6f82a4b90e$var$t7 = $b1aade6f82a4b90e$var$_`<ha-relative-time .hass=${0} .datetime=${0}></ha-relative-time>`), this.hass, expectedAt);
                })();
                const icon = {
                    [(0, $f76d50a667efc73d$export$6d07abd9f0bba447).METRO]: "mdi:subway",
                    [(0, $f76d50a667efc73d$export$6d07abd9f0bba447).BUS]: "mdi:bus",
                    [(0, $f76d50a667efc73d$export$6d07abd9f0bba447).TRAM]: "mdi:tram",
                    [(0, $f76d50a667efc73d$export$6d07abd9f0bba447).TRAIN]: "mdi:train",
                    [(0, $f76d50a667efc73d$export$6d07abd9f0bba447).SHIP]: "mdi:ship",
                    [(0, $f76d50a667efc73d$export$6d07abd9f0bba447).FERRY]: "mdi:ferry",
                    [(0, $f76d50a667efc73d$export$6d07abd9f0bba447).TAXI]: "mdi:taxi"
                }[dep.line.transport_mode] || "mdi:train";
                const lineIconClass = this.lineIconClass(dep.line.transport_mode, dep.line.designation, dep.line.group_of_lines);
                // if destinationRegex is set, use it to extract the part of the destination to show
                const destination = (()=>{
                    if (!destinationRegex) return dep.destination;
                    const { search: search, replace: replace } = destinationRegex;
                    return dep.destination.replace(search, replace);
                })();
                return (0, $j65ea.html)($b1aade6f82a4b90e$var$t12 || ($b1aade6f82a4b90e$var$t12 = $b1aade6f82a4b90e$var$_`
                    <div class="row departure fade-in ${0}">
                        ${0}
                        ${0}
                        <div class="col main left">
                            ${0}
                            ${0}
                        </div>
                        <div class="col right">
                            <span class="leaves-in">${0}</span>
                        </div>
                    </div>`), isDeparted ? "departed" : "", ((_this_config1 = this.config) === null || _this_config1 === void 0 ? void 0 : _this_config1.show_icon) ? (0, $j65ea.html)($b1aade6f82a4b90e$var$t8 || ($b1aade6f82a4b90e$var$t8 = $b1aade6f82a4b90e$var$_`
                            <div class="col icon">
                                <ha-icon class="transport-icon" icon="${0}"/>
                            </div>
                        `), icon) : (0, $j65ea.nothing), ((_this_config2 = this.config) === null || _this_config2 === void 0 ? void 0 : _this_config2.hide_line_number) ? (0, $j65ea.nothing) : (0, $j65ea.html)($b1aade6f82a4b90e$var$t10 || ($b1aade6f82a4b90e$var$t10 = $b1aade6f82a4b90e$var$_`
                            <div class="col icon">
                                <span class="line-icon mr1 ${0}">${0}</span>
                                ${0}
                            </div>
                        `), lineIconClass, dep.line.designation, hasDeviations ? (0, $j65ea.html)($b1aade6f82a4b90e$var$t9 || ($b1aade6f82a4b90e$var$t9 = $b1aade6f82a4b90e$var$_`<ha-icon class="warning" icon="mdi:alert"/>`)) : (0, $j65ea.nothing)), destination, hasDeviations ? (0, $j65ea.html)($b1aade6f82a4b90e$var$t11 || ($b1aade6f82a4b90e$var$t11 = $b1aade6f82a4b90e$var$_`<span class="warning-message">${0}</span>`), mostImportantDeviation.message) : (0, $j65ea.nothing), departureTime);
            }));
        };
        this.clickHandler = (entity)=>(e)=>{
                var _this_config;
                const action = (_this_config = this.config) === null || _this_config === void 0 ? void 0 : _this_config.click_action;
                if (action === undefined) return;
                if (action == "info" && entity) {
                    e.preventDefault();
                    this._showAttributes(this, "hass-more-info", {
                        entityId: entity
                    });
                    return;
                } else if ($b1aade6f82a4b90e$var$isEntityInfoAction(action)) {
                    e.preventDefault();
                    this._showAttributes(this, "hass-more-info", {
                        entityId: action.entityId
                    });
                    return;
                } else if ($b1aade6f82a4b90e$var$isServiceCallAction(action)) {
                    e.preventDefault();
                    this._serviceCall(action.domain, action.service, action.data);
                    return;
                }
            };
    }
}
$b1aade6f82a4b90e$export$7ded24e6705f9c64.styles = (0, $4e579c3c0232edff$export$2e2bcd8739ae039);
$b1aade6f82a4b90e$export$7ded24e6705f9c64.getStubConfig = ()=>({
        ...(0, $56b7de6dd6e9553b$export$c2f8e0cc249a8d8f)
    });
(0, $9tTrf.__decorate)([
    (0, $9f4dd.state)()
], $b1aade6f82a4b90e$export$7ded24e6705f9c64.prototype, "config", void 0);
(0, $9tTrf.__decorate)([
    (0, $2fGCB.property)({
        attribute: false
    })
], $b1aade6f82a4b90e$export$7ded24e6705f9c64.prototype, "hass", void 0);
const $b1aade6f82a4b90e$var$isEntityInfoAction = (a)=>a.entityId !== undefined;
const $b1aade6f82a4b90e$var$isServiceCallAction = (a)=>a.service !== undefined;
function $b1aade6f82a4b90e$var$isDepartureAttrs(item) {
    return item.departures !== undefined;
}


customElements.define("hasl4-departure-card", (0, $b1aade6f82a4b90e$export$7ded24e6705f9c64));
window.customCards = window.customCards || [];
window.customCards.push({
    type: "hasl4-departure-card",
    name: "HASL4 Departure card",
    description: "Show departure times for SL Trafik"
});


//# sourceMappingURL=hasl4-departure-card.js.map

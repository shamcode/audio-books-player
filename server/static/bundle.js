(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("bundle", [], factory);
	else if(typeof exports === 'object')
		exports["bundle"] = factory();
	else
		root["bundle"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(34)('wks')
  , uid        = __webpack_require__(22)
  , Symbol     = __webpack_require__(1).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(12)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(4)
  , createDesc = __webpack_require__(32);
module.exports = __webpack_require__(2) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(6)
  , IE8_DOM_DEFINE = __webpack_require__(53)
  , toPrimitive    = __webpack_require__(67)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(2) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(42);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , core      = __webpack_require__(9)
  , ctx       = __webpack_require__(10)
  , hide      = __webpack_require__(3)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(10)
  , call        = __webpack_require__(56)
  , isArrayIter = __webpack_require__(54)
  , anObject    = __webpack_require__(6)
  , toLength    = __webpack_require__(21)
  , getIterFn   = __webpack_require__(68)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(58)
  , $export        = __webpack_require__(14)
  , redefine       = __webpack_require__(63)
  , hide           = __webpack_require__(3)
  , has            = __webpack_require__(7)
  , Iterators      = __webpack_require__(8)
  , $iterCreate    = __webpack_require__(57)
  , setToStringTag = __webpack_require__(17)
  , getPrototypeOf = __webpack_require__(60)
  , ITERATOR       = __webpack_require__(0)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(4).f
  , has = __webpack_require__(7)
  , TAG = __webpack_require__(0)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(34)('keys')
  , uid    = __webpack_require__(22);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(28)
  , defined = __webpack_require__(11);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(19)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define("shamUI",[],t):"object"==typeof exports?exports.shamUI=t():e.shamUI=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=15)}([function(e,t,n){var r,i;r=[t],void 0!==(i=function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t,n){var r=n.initializer();n.initializer=function(){return a.resolve(r)}}Object.defineProperty(e,"__esModule",{value:!0}),e.inject=n;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=new Map,o=function(){function e(){t(this,e)}return r(e,null,[{key:"bind",value:function(e,t){i.set(e,t)}},{key:"resolve",value:function(e){if(i.has(e))return i.get(e)}}]),e}(),a=window.DI||o;window.DI=a,e.default=a}.apply(t,r))&&(e.exports=i)},function(e,t,n){var r,i;r=[t],void 0!==(i=function(e){"use strict";function t(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r,i,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a="transition",s="handler",u="handling",l="handled",c="nohandler",f="transition",d="invalidstate",p="deferred",h="error",v=(e.Fsm=(i=r=function(){function e(){n(this,e),this.targetReplayState="",this.state=void 0,this.priorState=void 0,this._priorAction="",this._currentAction="",this.eventListeners={_anyEvents:[],__listenerUniqueIndex:0},this.eventQueue=[]}return o(e,[{key:"initStates",value:function(){this._states={};for(var e in this)this[e]&&this[e].prototype instanceof v&&(this._states[e]=new this[e](this))}},{key:"run",value:function(){this.initStates(),this.transition(this.constructor.initialState)}},{key:"emit",value:function(e){var t=arguments;this.eventListeners._anyEvents&&this.eventListeners._anyEvents.forEach(function(e){e.callback.apply(void 0,t)}),this.eventListeners[e]&&this.eventListeners[e].forEach(function(e){e.callback.apply(void 0,t)})}},{key:"handle",value:function(e){if(!this.inExitHandler){var t=this._states,n=this.state,r=Array.prototype.slice.call(arguments,0);if(this.currentActionArgs=r,t[n][e]||t[n]._anyEvents||this._anyEvents){var i=t[n][e]?e:"_anyEvents",o="_anyEvents"===i,a=void 0,f=void 0;t[n][i]?(a=t[n][i],f=n+"."+i):(a=this._anyEvents,f="_anyEvents"),this._currentAction||(this._currentAction=f),this.emit(u,{inputType:e,args:r}),a.apply(t[n],o?r:r.slice(1)),this.emit(l,{inputType:e,args:r}),this._priorAction=this._currentAction,this._currentAction="",this.processQueue(s)}else this.emit(c,{inputType:e,args:r});this.currentActionArgs=void 0}}},{key:"transition",value:function(e){if(!this.inExitHandler&&e!==this.state){var t=this.state;if(this._states[e])return t&&this._states[t]&&this._states[t]._onExit&&(this.inExitHandler=!0,this._states[t]._onExit(),this.inExitHandler=!1),this.targetReplayState=e,this.priorState=t,this.state=e,this.emit(f,{fromState:this.priorState,action:this._currentAction,toState:e}),this._states[e]._onEnter&&this._states[e]._onEnter(),void(this.targetReplayState===e&&this.processQueue(a));this.emit(d,{state:this.state,attemptedState:e})}}},{key:"processQueue",value:function(e){for(var n=this,r=a===e?function(e){return a===e.type&&(!e.untilState||e.untilState===n.state)}:function(e){return s===e.type},i=[],o=-1,u=this.eventQueue.length,l=0,c=void 0;++o<u;)c=this.eventQueue[o-l],r(c)&&i.push(this.eventQueue.splice(o-l++)[0]);i.forEach(function(e){n.handle.apply(n,t(e.args))})}},{key:"deferUntilTransition",value:function(e){if(this.currentActionArgs){var t={type:a,untilState:e,args:this.currentActionArgs};this.eventQueue.push(t),this.emit.call(this,p,{state:this.state,queuedArgs:t})}}},{key:"on",value:function(e,t){var n=this;this.eventListeners[e]||(this.eventListeners[e]=[]);var r=this.eventListeners.__listenerUniqueIndex++;return this.eventListeners[e].push({callbackID:r,callback:t}),{eventName:e,callback:t,callbackID:r,off:function(){n.off(e,t,r)}}}},{key:"off",value:function(e,t,n){if(e){if(this.eventListeners[e])if(t)for(var r=0,i=-1,o=this.eventListeners[e].length,a=void 0;++i<o;)a=this.eventListeners[e][i-r],t!==a.callback||void 0!==n&&n!==a.callbackID||this.eventListeners[e].splice(i-r++,1);else this.eventListeners[e]=[]}else this.eventListeners={}}},{key:"one",value:function(e,t){var n=arguments,r=this.on(e,function(){t.apply(void 0,n),r()}).off}},{key:"handleException",value:function(e){this.emit(h,{exception:e,state:this.state,priorState:this.priorState,_currentAction:this._currentAction,_priorAction:this._priorAction,currentActionArgs:this.currentActionArgs})}}]),e}(),r.initialState="uninitialized",i),e.State=function(){function e(t){n(this,e),this._fsm=t}return o(e,[{key:"handle",value:function(e){var t;(t=this._fsm).handle.apply(t,arguments)}},{key:"transition",value:function(e){var t;(t=this._fsm).transition.apply(t,arguments)}},{key:"deferUntilTransition",value:function(){var e;(e=this._fsm).deferUntilTransition.apply(e,arguments)}},{key:"emit",value:function(){var e;(e=this._fsm).emit.apply(e,arguments)}},{key:"handleException",value:function(){var e;(e=this._fsm).handleException.apply(e,arguments)}}]),e}())}.apply(t,r))&&(e.exports=i)},function(e,t,n){var r,i;r=[t],void 0!==(i=function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=function(){function e(){t(this,e)}return n(e,[{key:"predicate",value:function(e,t){}},{key:"resolve",value:function(e){}}]),e}();e.default=r}.apply(t,r))&&(e.exports=i)},function(e,t,n){var r,i;r=[t],void 0!==(i=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,t,n){return e.defaultOptionProps=(e.defaultOptionProps||[]).concat([t]),n}}.apply(t,r))&&(e.exports=i)},function(e,t,n){var r,i;r=[t,n(0)],void 0!==(i=function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){var t=Error.apply(this,arguments);return t.name="AssertError",t}Object.defineProperty(e,"__esModule",{value:!0});var o=n(t),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s="sham-ui";i.prototype=Object.create(Error.prototype,{constructor:{value:i}});var u=function(){function e(){r(this,e)}return a(e,null,[{key:"getStack",value:function(e){try{throw new i(e)}catch(e){return e}}},{key:"error",value:function(t,n){n&&o.default.resolve("logger").error(e.getStack(s+": "+t))}},{key:"warn",value:function(t,n){n&&o.default.resolve("logger").warn(e.getStack(s+": "+t))}}]),e}();e.default={error:u.error,warn:u.warn}}.apply(t,r))&&(e.exports=i)},function(e,t,n){var r,i;r=[t],void 0!==(i=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,t){return function(n,r,i){return n.handlerProps=(n.handlerProps||[]).concat([{selector:t,eventType:e,handlerName:r}]),i}}}.apply(t,r))&&(e.exports=i)},function(e,t,n){var r,i;r=[t,n(0),n(1),n(11),n(12),n(13)],void 0!==(i=function(e,t,n,r,i,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function f(e,t,n,r,i){var o={};return Object.keys(r).forEach(function(e){o[e]=r[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=n.slice().reverse().reduce(function(n,r){return r(e,t,n)||n},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}Object.defineProperty(e,"__esModule",{value:!0}),e.FSM=e.states=void 0;var d,p,h,v,y,b,g,m=a(r),_=a(i),w=a(o),O=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),E=function e(t,n,r){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,r)}if("value"in i)return i.value;var a=i.get;if(void 0!==a)return a.call(r)};e.states={ready:m.default,registration:_.default,rendering:w.default},e.FSM=(g=b=function(e){function t(){u(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return s(e,"ready",p,e),s(e,"registration",h,e),s(e,"rendering",v,e),s(e,"logger",y,e),e.widgets=[],e.idArray=[],e.byType={},e.byId={},e}return c(t,e),O(t,[{key:"ALL",value:function(){this.handle("all")}},{key:"ONLY",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.handle("only",t)}},{key:"FORCE_ALL",value:function(){this.handle("forceAll")}},{key:"FORCE_ONLY",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.handle("forceOnly",t)}},{key:"ONLY_TYPE",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.handle("onlyType",t)}},{key:"register",value:function(e){this.handle("register",e)}},{key:"unregister",value:function(e){this.handle("unregister",e)}},{key:"handleException",value:function(e){this.logger.error(e),E(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"handleException",this).apply(this,arguments)}}]),t}(n.Fsm),b.initialState="ready",d=g,p=f(d.prototype,"ready",[t.inject],{enumerable:!0,initializer:function(){return"state:ready"}}),h=f(d.prototype,"registration",[t.inject],{enumerable:!0,initializer:function(){return"state:registration"}}),v=f(d.prototype,"rendering",[t.inject],{enumerable:!0,initializer:function(){return"state:rendering"}}),y=f(d.prototype,"logger",[t.inject],{enumerable:!0,initializer:function(){return"logger"}}),d)}.apply(t,r))&&(e.exports=i)},function(e,t,n){var r,i;r=[t],void 0!==(i=function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=function(){function e(){t(this,e),this.resolvers=new Set}return n(e,[{key:"registry",value:function(e){return this.resolvers.add(e),this}},{key:"resolve",value:function(e,t){var n=!0,r=!1,i=void 0;try{for(var o,a=this.resolvers.values()[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;s.predicate(e,t)&&s.resolve(t)}}catch(e){r=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw i}}}}]),e}();e.default=r}.apply(t,r))&&(e.exports=i)},function(e,t,n){var r,i;r=[t,n(2)],void 0!==(i=function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(t),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),s(t,[{key:"predicate",value:function(e,t){return e.handlerProps&&"bindEvents"===t.actionSequence[0]&&(void 0!==e.html||void 0!==e.constructor.html)}},{key:"resolve",value:function(e){e.actionSequence=["render","bindEvents"]}}]),t}(a.default);e.default=u}.apply(t,r))&&(e.exports=i)},function(e,t,n){var r,i;r=[t,n(2)],void 0!==(i=function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(t),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),s(t,[{key:"predicate",value:function(e,t){return e.handlerProps&&"render"===t.actionSequence[0]&&(void 0!==e.html||void 0!==e.constructor.html)&&t.bindOnce}},{key:"resolve",value:function(e){e.bindOnce=!1}}]),t}(a.default);e.default=u}.apply(t,r))&&(e.exports=i)},function(e,t,n){var r,i;r=[t,n(3),n(0),n(4),n(14)],void 0!==(i=function(e,t,n,r,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function s(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t,n,r,i){var o={};return Object.keys(r).forEach(function(e){o[e]=r[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=n.slice().reverse().reduce(function(n,r){return r(e,t,n)||n},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c,f,d,p,h,v,y,b,g,m,_,w=o(t),O=o(r),E=o(i),j=a(['Widget "','" hasn\'t sub-element "','" \n                        for bind event "','."'],['Widget "','" hasn\'t sub-element "','" \n                        for bind event "','."']),k=a(["Widget "," doesn't resolve container. Check container selector"],["Widget "," doesn't resolve container. Check container selector"]),P=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),x=(_=m=function(){function e(t,n,r){u(this,e),s(this,"UI",f,this),s(this,"conflictResolver",d,this),s(this,"types",h,this),s(this,"renderAsync",b,this),s(this,"renderDependence",g,this),this.ID=n,this.container=null,this.containerSelector=t,this.options=r,this.UI.render.register(this)}return P(e,[{key:"bindEvents",value:function(){var e=this.handlerProps;if(e){this._bindHandlers=[];var t=!0,n=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value,s=this.container;a.selector&&(s=this.container.querySelector(a.selector),O.default.error((0,E.default)(j,this.ID,a.selector,a.handlerName),!s));var u=void 0;u=(this.defaultOptionProps||[]).includes(a.handlerName)?this.options[a.handlerName].bind(this):this[a.handlerName].bind(this),this._bindHandlers.push({handler:u,element:s,eventType:a.eventType}),s.addEventListener(a.eventType,u)}}catch(e){n=!0,r=e}finally{try{!t&&o.return&&o.return()}finally{if(n)throw r}}}}},{key:"destroy",value:function(){var e=this._bindHandlers;e&&e.forEach(function(e){var t=e.handler,n=e.element,r=e.eventType;n.removeEventListener(r,t)})}},{key:"resolveContainer",value:function(){this.options.cacheParentContainer?(this.containerParentNode||(this.containerParentNode=document.querySelector(this.containerSelector).parentNode),this.container=this.containerParentNode.querySelector(this.containerSelector)):this.container=document.querySelector(this.containerSelector),O.default.error((0,E.default)(k,this.ID),void 0===this.container)}},{key:"render",value:function(){if(void 0===this.html)return null;var e=this.html;return"function"==typeof e&&(e=this.html()),{container:this.container,html:e}}},{key:"options",get:function(){return this._options},set:function(e){this._options={};var t=e||{};for(var n in t)t.hasOwnProperty(n)&&(this._options[n]=t[n]);var r=[this.constructor,this],i=!0,o=!1,a=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var l=s.value,c=l.defaultOptionProps||[],f=!0,d=!1,p=void 0;try{for(var h,v=c[Symbol.iterator]();!(f=(h=v.next()).done);f=!0){var y=h.value;this._options.hasOwnProperty(y)||(this._options[y]=l[y])}}catch(e){d=!0,p=e}finally{try{!f&&v.return&&v.return()}finally{if(d)throw p}}}}catch(e){o=!0,a=e}finally{try{!i&&u.return&&u.return()}finally{if(o)throw a}}this.conflictResolver.resolve(this,this._options)}}],[{key:"renderAsyncWrapper",value:function(e){window.requestAnimationFrame(e)}}]),e}(),m.actionSequence=["bindEvents","render"],m.bindOnce=!0,m.cacheParentContainer=!1,c=_,f=l(c.prototype,"UI",[n.inject],{enumerable:!0,initializer:function(){return"sham-ui"}}),d=l(c.prototype,"conflictResolver",[n.inject],{enumerable:!0,initializer:function(){return"options-conflict-resolver:manager"}}),l(c,"actionSequence",[w.default],(p=Object.getOwnPropertyDescriptor(c,"actionSequence"),p=p?p.value:void 0,{enumerable:!0,configurable:!0,writable:!0,initializer:function(){return p}}),c),h=l(c.prototype,"types",[w.default],{enumerable:!0,initializer:function(){return[]}}),l(c,"bindOnce",[w.default],(v=Object.getOwnPropertyDescriptor(c,"bindOnce"),v=v?v.value:void 0,{enumerable:!0,configurable:!0,writable:!0,initializer:function(){return v}}),c),l(c,"cacheParentContainer",[w.default],(y=Object.getOwnPropertyDescriptor(c,"cacheParentContainer"),y=y?y.value:void 0,{enumerable:!0,configurable:!0,writable:!0,initializer:function(){return y}}),c),b=l(c.prototype,"renderAsync",[w.default],{enumerable:!0,initializer:function(){return!1}}),l(c,"renderAsyncWrapper",[w.default],Object.getOwnPropertyDescriptor(c,"renderAsyncWrapper"),c),g=l(c.prototype,"renderDependence",[w.default],{enumerable:!0,initializer:function(){return[]}}),c);e.default=x}.apply(t,r))&&(e.exports=i)},function(e,t,n){var r,i;r=[t,n(1)],void 0!==(i=function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),o(t,[{key:"_onEnter",value:function(){this.emit("Ready")}},{key:"clear",value:function(){for(var e=0;e<this._fsm.widgets.length;e++)this._fsm.widgets[e].destroy&&(this._fsm.widgets[e].options.beforeDestroy&&this._fsm.widgets[e].options.beforeDestroy.call(this._fsm.widgets[e]),this._fsm.widgets[e].destroy(),this._fsm.widgets[e].options.afterDestroy&&this._fsm.widgets[e].options.afterDestroy.call(this._fsm.widgets[e])),this._fsm.widgets[e].isBinded=!1;this._fsm.widgets=[],this._fsm.idArray=[],this._fsm.byType={},this._fsm.byId={},this._fsm.renderCache={}}},{key:"all",value:function(){this._fsm.changeWidgets=this._fsm.idArray.slice(0),this.transition("rendering")}},{key:"only",value:function(e){this._fsm.changeWidgets=e.slice(0),this.transition("rendering")}},{key:"forceAll",value:function(){this.handle("clear"),this.transition("registration")}},{key:"forceOnly",value:function(e){var t=void 0,n=void 0;for(n=0;n<this._fsm.widgets.length;n++)t=this._fsm.widgets[n],e.indexOf(t)>-1&&(t.destroy&&(t.options.beforeDestroy&&t.options.beforeDestroy.call(t),t.destroy(),t.options.afterDestroy&&t.options.afterDestroy.call(t)),t.resolveContainer(),t.bindEvents&&(t.options.beforeBindEvents&&t.options.beforeBindEvents.call(t),t.bind(),t.options.afterBindEvents&&t.options.afterBindEvents.call(t)),t.isBinded=!1);this._fsm.changeWidgets=e.slice(0),this.transition("rendering")}},{key:"onlyType",value:function(e){var t=e.slice(0),n=void 0,r=void 0,i=void 0;for(i=0;i<t.length;i++)if(r=this._fsm.byType[t[i]])for(var o=0,a=r.length;o<a;o++)n=r[o],this._fsm.changeWidgets.indexOf(n)===-1&&this._fsm.changeWidgets.push(n);this.transition("rendering")}},{key:"register",value:function(e){this._fsm._states.registration.register(e),"bindEvents"===e.options.actionSequence[0]&&(e.resolveContainer(),e.bindEvents&&(e.options.beforeBindEvents&&e.options.beforeBindEvents.call(e),e.bindEvents(),e.options.afterBindEvents&&e.options.afterBindEvents.call(e)))}},{key:"unregister",value:function(e){var t=void 0,n=void 0,r=void 0,i=void 0;if(this._fsm.idArray.indexOf(e)!==-1){if(t=this._fsm.byId[e],t.destroy&&(t.options.beforeDestroy&&t.options.beforeDestroy.call(t),t.destroy(),t.options.afterDestroy&&t.options.afterDestroy.call(t)),t.options.types)for(n=t.options.types,i=0;i<n.length;i++)this._fsm.byType[n[i]].splice(this._fsm.byType[n[i]].indexOf(e),1);for(i=0;i<this._fsm.widgets.length;i++)if(this._fsm.widgets[i].ID===e){r=i;break}this._fsm.widgets.splice(r,1),this._fsm.idArray.splice(this._fsm.idArray.indexOf(e),1),delete this._fsm.byId[e],delete this._fsm.renderCache[e]}}}]),t}(t.State);e.default=a}.apply(t,r))&&(e.exports=i)},function(e,t,n){var r,i;r=[t,n(0),n(1)],void 0!==(i=function(e,t,n){"use strict";function r(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t,n,r,i){var o={};return Object.keys(r).forEach(function(e){o[e]=r[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=n.slice().reverse().reduce(function(n,r){return r(e,t,n)||n},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u,l,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=(u=function(e){function t(){var e,n,a,s;i(this,t);for(var u=arguments.length,c=Array(u),f=0;f<u;f++)c[f]=arguments[f];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r(a,"widgetBinder",l,a),s=n,o(a,s)}return a(t,e),c(t,[{key:"_anyEvents",value:function(){this.deferUntilTransition()}},{key:"_onEnter",value:function(){this.widgetBinder(),this.handle("registrationComplete")}},{key:"register",value:function(e){if(this._fsm.idArray.indexOf(e.ID)===-1){if(e.options.beforeRegister&&e.options.beforeRegister.call(e),this._fsm.idArray.push(e.ID),this._fsm.byId[e.ID]=e,e.options.types)for(var t=0;t<e.options.types.length;t++)void 0===this.byType[e.options.types[t]]&&(this.byType[e.options.types[t]]=[]),this.byType[e.options.types[t]].push(e.ID);this._fsm.widgets.push(e),e.options.afterRegister&&e.options.afterRegister.call(e)}}},{key:"registrationComplete",value:function(){var e=void 0;this.emit("RegistrationComplete");for(var t=0;t<this._fsm.widgets.length;t++)e=this._fsm.widgets[t],"bindEvents"===e.options.actionSequence[0]&&(e.resolveContainer(),e.bindEvents&&(e.options.beforeBindEvents&&e.options.beforeBindEvents.call(e),e.bindEvents(),e.options.afterBindEvents&&e.options.afterBindEvents.call(e)));this._fsm.changeWidgets=this._fsm.idArray.slice(0),this.transition("rendering")}}]),t}(n.State),l=s(u.prototype,"widgetBinder",[t.inject],{enumerable:!0,initializer:function(){return"widget-binder"}}),u);e.default=f}.apply(t,r))&&(e.exports=i)},function(e,t,n){var r,i;r=[t,n(1)],void 0!==(i=function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(){return this.promise=new Promise(function(e,t){this.resolve=e,this.reject=t}.bind(this)),this}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"_anyEvents",value:function(){this.deferUntilTransition()}},{key:"_onEnter",value:function(){var e=this,t=[],n={},r=void 0;this.cmpWidget=function(t,n){var r=e._fsm.idArray.indexOf(t),i=e._fsm.idArray.indexOf(n);return r>i?1:r<i?-1:0},this._fsm.changeWidgets.sort(function(t,n){var r=e._fsm.byId[t].options.renderDependence,i=e._fsm.byId[n].options.renderDependence;return r&&r.length?i&&i.length?r.indexOf(n)!==-1?1:i.indexOf(t)!==-1?-1:e.cmpWidget(t,n):r.indexOf(n)!==-1?1:e.cmpWidget(t,n):i&&i.length&&i.indexOf(t)!==-1?-1:e.cmpWidget(t,n)}),this.rendered=[];for(var i=0;i<this._fsm.changeWidgets.length;i++){var a=this._fsm.byId[this._fsm.changeWidgets[i]];if(a&&a.render&&(!a.options.conditionRender||a.options.conditionRender())){var s=new o;if(t.push(s.promise),n[this._fsm.changeWidgets[i]]=s.promise,a.options.renderDependence&&a.options.renderDependence.length){r=new Array(a.options.renderDependence.length);for(var u=0;u<a.options.renderDependence.length;u++)r[u]=n[a.options.renderDependence[u]]}else r=[];!function(t,n,r){Promise.all(n).then(function(){t.options.renderAsync?t.options.renderAsyncWrapper(function(){e.handle("renderWidget",t,r)}):e.handle("renderWidget",t,r)},e.handleException.bind(e))}(a,r,s)}}Promise.all(t).then(function(){n=null;for(var t=0;t<e.rendered.length;t++)e.emit(["RenderComplete[",e.rendered[t],"]"].join(""));e.emit("RenderComplete",e.rendered),e.transition("ready")},this.handleException.bind(this))}},{key:"_onExit",value:function(){this.rendered=[],this._fsm.changeWidgets=[]}},{key:"renderWidget",value:function(e,t){"render"===e.options.actionSequence[0]&&e.resolveContainer(),e.options.beforeRender&&e.options.beforeRender.call(e),this.rendered.push(e.ID),new Promise(function(t){var n=e.render();if(!n)return void t();var r=n.container.cloneNode(!1);r.innerHTML=n.html,n.container.parentNode.replaceChild(r,n.container),e.container=r,t()}).then(function(){e.options.afterRender&&e.options.afterRender.call(e),"render"===e.options.actionSequence[0]&&e.bindEvents&&!e.isBinded&&(e.options.beforeBindEvents&&e.options.beforeBindEvents.call(e),e.bindEvents(),e.options.afterBindEvents&&e.options.afterBindEvents.call(e),e.options.bindOnce&&(e.isBinded=!0)),t.resolve()}).catch(this.handleException.bind(this))}}]),t}(t.State);e.default=s}.apply(t,r))&&(e.exports=i)},function(e,t,n){var r,i;r=[t],void 0!==(i=function(e){"use strict";function t(e){for(var t="",n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];for(var o=0;o<r.length;o++)t+=e[o]+r[o];return t+=e[r.length],t.split(/(?:\r\n|\n|\r)/).map(function(e){return e.replace(/^\s+/gm,"")}).join(" ").trim()}Object.defineProperty(e,"__esModule",{value:!0}),e.default=t}.apply(t,r))&&(e.exports=i)},function(e,t,n){var r,i;r=[t,n(2),n(4),n(0),n(6),n(10),n(7),n(9),n(8),n(3),n(5),n(1)],void 0!==(i=function(e,t,n,r,i,o,a,s,u,l,c,f){"use strict";function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.handler=e.options=e.FsmStates=e.Fsm=e.FsmState=e.FsmDefault=e.Widget=e.inject=e.DI=e.assert=e.OptionsConflictResolver=e.OptionsConflictResolverManager=void 0,Object.defineProperty(e,"OptionsConflictResolver",{enumerable:!0,get:function(){return d(t).default}}),Object.defineProperty(e,"assert",{enumerable:!0,get:function(){return d(n).default}});var h=d(r),v=d(o),y=d(a),b=d(s),g=d(u),m=d(l),_=d(c),w=e.OptionsConflictResolverManager=y.default,O=e.DI=h.default;e.inject=r.inject,e.Widget=v.default,e.FsmDefault=f.Fsm,e.FsmState=f.State,e.Fsm=i.FSM,e.FsmStates=i.states,e.options=m.default,e.handler=_.default;O.bind("fsm",i.FSM),O.bind("options-conflict-resolver:manager",new w),O.bind("state:ready",i.states.ready),O.bind("state:registration",i.states.registration),O.bind("state:rendering",i.states.rendering),O.bind("logger",console);var E=function e(){p(this,e),O.bind("sham-ui",this),O.resolve("options-conflict-resolver:manager").registry(new g.default).registry(new b.default);var t=O.resolve("fsm");this.render=new t,this.render.run()};e.default=E}.apply(t,r))&&(e.exports=i)}])});

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(13)
  , TAG = __webpack_require__(0)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5)
  , document = __webpack_require__(1).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(13);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(22)('meta')
  , isObject = __webpack_require__(5)
  , has      = __webpack_require__(7)
  , setDesc  = __webpack_require__(4).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(12)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(6)
  , dPs         = __webpack_require__(59)
  , enumBugKeys = __webpack_require__(27)
  , IE_PROTO    = __webpack_require__(18)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(26)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(52).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(3);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(11);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(40), __webpack_require__(23), __webpack_require__(39)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _map, _shamUi, _audioPlayer) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    exports.default = function () {

        // Get logic layer
        const audioService = _shamUi.DI.resolve('service:audio');

        // Data layer
        const links = Array.prototype.slice.call(document.querySelectorAll('.book-part'));
        const mapping = new _map2.default();
        const sources = links.map(link => {
            const source = link.getAttribute('href');
            mapping.set(source, {
                currentTime: parseFloat(link.dataset.position),
                id: link.dataset.id,
                isLoaded: false
            });
            link.onclick = e => {
                e.preventDefault();return true;
            };
            return source;
        });

        // User interaction handler macros
        function updatePosition() {
            audioService.updatePosition(mapping.get(player.url), player.currentTime, player.duration);
        }

        // Create audio-player
        const player = new _audioPlayer2.default('#audio-player', 'audio-player', {
            trackURL: sources,
            onPlay: updatePosition,
            onPause: updatePosition,
            onLoading() {
                const prev = player.previousUrl;
                if (null !== prev) {
                    audioService.markAsListen(mapping.get(prev).id);
                }
                const bookPart = mapping.get(player.url);
                bookPart.isLoaded = true;
                player.audio.audioCurrent.currentTime = bookPart.currentTime;
                updatePosition();
            },
            onTimingUpdate: updatePosition
        });
    };

    var _map2 = _interopRequireDefault(_map);

    var _audioPlayer2 = _interopRequireDefault(_audioPlayer);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb250cm9sbGVycy9tYWluLmpzIl0sIm5hbWVzIjpbImF1ZGlvU2VydmljZSIsInJlc29sdmUiLCJsaW5rcyIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWFwcGluZyIsInNvdXJjZXMiLCJtYXAiLCJsaW5rIiwic291cmNlIiwiZ2V0QXR0cmlidXRlIiwic2V0IiwiY3VycmVudFRpbWUiLCJwYXJzZUZsb2F0IiwiZGF0YXNldCIsInBvc2l0aW9uIiwiaWQiLCJpc0xvYWRlZCIsIm9uY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJ1cGRhdGVQb3NpdGlvbiIsImdldCIsInBsYXllciIsInVybCIsImR1cmF0aW9uIiwidHJhY2tVUkwiLCJvblBsYXkiLCJvblBhdXNlIiwib25Mb2FkaW5nIiwicHJldiIsInByZXZpb3VzVXJsIiwibWFya0FzTGlzdGVuIiwiYm9va1BhcnQiLCJhdWRpbyIsImF1ZGlvQ3VycmVudCIsIm9uVGltaW5nVXBkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O3NCQUdlLFlBQVc7O0FBRXRCO0FBQ0EsY0FBTUEsZUFBZSxXQUFHQyxPQUFILENBQVksZUFBWixDQUFyQjs7QUFFQTtBQUNBLGNBQU1DLFFBQVFDLE1BQU1DLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQyxJQUF0QixDQUE0QkMsU0FBU0MsZ0JBQVQsQ0FBMkIsWUFBM0IsQ0FBNUIsQ0FBZDtBQUNBLGNBQU1DLFVBQVUsbUJBQWhCO0FBQ0EsY0FBTUMsVUFBVVIsTUFBTVMsR0FBTixDQUFXQyxRQUFRO0FBQy9CLGtCQUFNQyxTQUFTRCxLQUFLRSxZQUFMLENBQW1CLE1BQW5CLENBQWY7QUFDQUwsb0JBQVFNLEdBQVIsQ0FBYUYsTUFBYixFQUFxQjtBQUNqQkcsNkJBQWFDLFdBQVlMLEtBQUtNLE9BQUwsQ0FBYUMsUUFBekIsQ0FESTtBQUVqQkMsb0JBQUlSLEtBQUtNLE9BQUwsQ0FBYUUsRUFGQTtBQUdqQkMsMEJBQVU7QUFITyxhQUFyQjtBQUtBVCxpQkFBS1UsT0FBTCxHQUFpQkMsQ0FBRixJQUFTO0FBQUVBLGtCQUFFQyxjQUFGLEdBQW9CLE9BQU8sSUFBUDtBQUFjLGFBQTVEO0FBQ0EsbUJBQU9YLE1BQVA7QUFDSCxTQVRlLENBQWhCOztBQVdBO0FBQ0EsaUJBQVNZLGNBQVQsR0FBMEI7QUFDdEJ6Qix5QkFBYXlCLGNBQWIsQ0FDSWhCLFFBQVFpQixHQUFSLENBQWFDLE9BQU9DLEdBQXBCLENBREosRUFFSUQsT0FBT1gsV0FGWCxFQUdJVyxPQUFPRSxRQUhYO0FBS0g7O0FBRUQ7QUFDQSxjQUFNRixTQUFTLDBCQUFpQixlQUFqQixFQUFrQyxjQUFsQyxFQUFrRDtBQUM3REcsc0JBQVVwQixPQURtRDtBQUU3RHFCLG9CQUFRTixjQUZxRDtBQUc3RE8scUJBQVNQLGNBSG9EO0FBSTdEUSx3QkFBWTtBQUNSLHNCQUFNQyxPQUFPUCxPQUFPUSxXQUFwQjtBQUNBLG9CQUFLLFNBQVNELElBQWQsRUFBcUI7QUFDakJsQyxpQ0FBYW9DLFlBQWIsQ0FBMkIzQixRQUFRaUIsR0FBUixDQUFhUSxJQUFiLEVBQW9CZCxFQUEvQztBQUNIO0FBQ0Qsc0JBQU1pQixXQUFXNUIsUUFBUWlCLEdBQVIsQ0FBYUMsT0FBT0MsR0FBcEIsQ0FBakI7QUFDQVMseUJBQVNoQixRQUFULEdBQW9CLElBQXBCO0FBQ0FNLHVCQUFPVyxLQUFQLENBQWFDLFlBQWIsQ0FBMEJ2QixXQUExQixHQUF3Q3FCLFNBQVNyQixXQUFqRDtBQUNBUztBQUNILGFBYjREO0FBYzdEZSw0QkFBZ0JmO0FBZDZDLFNBQWxELENBQWY7QUFnQkgsSyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3NoYW0vd29yay9hdWRpby1ib29rcy1wbGF5ZXIvY2xpZW50Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgREkgfSBmcm9tICdzaGFtLXVpJztcbmltcG9ydCBBdWRpb1BsYXllciBmcm9tICcuLi93aWRnZXRzL2F1ZGlvLXBsYXllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gR2V0IGxvZ2ljIGxheWVyXG4gICAgY29uc3QgYXVkaW9TZXJ2aWNlID0gREkucmVzb2x2ZSggJ3NlcnZpY2U6YXVkaW8nICk7XG5cbiAgICAvLyBEYXRhIGxheWVyXG4gICAgY29uc3QgbGlua3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5ib29rLXBhcnQnICkgKTtcbiAgICBjb25zdCBtYXBwaW5nID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHNvdXJjZXMgPSBsaW5rcy5tYXAoIGxpbmsgPT4ge1xuICAgICAgICBjb25zdCBzb3VyY2UgPSBsaW5rLmdldEF0dHJpYnV0ZSggJ2hyZWYnICk7XG4gICAgICAgIG1hcHBpbmcuc2V0KCBzb3VyY2UsIHtcbiAgICAgICAgICAgIGN1cnJlbnRUaW1lOiBwYXJzZUZsb2F0KCBsaW5rLmRhdGFzZXQucG9zaXRpb24gKSxcbiAgICAgICAgICAgIGlkOiBsaW5rLmRhdGFzZXQuaWQsXG4gICAgICAgICAgICBpc0xvYWRlZDogZmFsc2VcbiAgICAgICAgfSApO1xuICAgICAgICBsaW5rLm9uY2xpY2sgPSAoIGUgKSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgcmV0dXJuIHRydWU7IH07XG4gICAgICAgIHJldHVybiBzb3VyY2VcbiAgICB9ICk7XG5cbiAgICAvLyBVc2VyIGludGVyYWN0aW9uIGhhbmRsZXIgbWFjcm9zXG4gICAgZnVuY3Rpb24gdXBkYXRlUG9zaXRpb24oKSB7XG4gICAgICAgIGF1ZGlvU2VydmljZS51cGRhdGVQb3NpdGlvbihcbiAgICAgICAgICAgIG1hcHBpbmcuZ2V0KCBwbGF5ZXIudXJsICksXG4gICAgICAgICAgICBwbGF5ZXIuY3VycmVudFRpbWUsXG4gICAgICAgICAgICBwbGF5ZXIuZHVyYXRpb25cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgYXVkaW8tcGxheWVyXG4gICAgY29uc3QgcGxheWVyID0gbmV3IEF1ZGlvUGxheWVyKCAnI2F1ZGlvLXBsYXllcicsICdhdWRpby1wbGF5ZXInLCB7XG4gICAgICAgIHRyYWNrVVJMOiBzb3VyY2VzLFxuICAgICAgICBvblBsYXk6IHVwZGF0ZVBvc2l0aW9uLFxuICAgICAgICBvblBhdXNlOiB1cGRhdGVQb3NpdGlvbixcbiAgICAgICAgb25Mb2FkaW5nKCkge1xuICAgICAgICAgICAgY29uc3QgcHJldiA9IHBsYXllci5wcmV2aW91c1VybDtcbiAgICAgICAgICAgIGlmICggbnVsbCAhPT0gcHJldiApIHtcbiAgICAgICAgICAgICAgICBhdWRpb1NlcnZpY2UubWFya0FzTGlzdGVuKCBtYXBwaW5nLmdldCggcHJldiApLmlkICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBib29rUGFydCA9IG1hcHBpbmcuZ2V0KCBwbGF5ZXIudXJsICk7XG4gICAgICAgICAgICBib29rUGFydC5pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICBwbGF5ZXIuYXVkaW8uYXVkaW9DdXJyZW50LmN1cnJlbnRUaW1lID0gYm9va1BhcnQuY3VycmVudFRpbWU7XG4gICAgICAgICAgICB1cGRhdGVQb3NpdGlvbigpO1xuICAgICAgICB9LFxuICAgICAgICBvblRpbWluZ1VwZGF0ZTogdXBkYXRlUG9zaXRpb25cbiAgICB9ICk7XG59XG4iXX0=

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    let Audio = class Audio {
        updatePosition(bookPart, currentTime, duration) {
            if (bookPart.isLoaded && bookPart.currentTime !== currentTime) {
                bookPart.currentTime = currentTime;
                this.savePosition(bookPart.id, currentTime, bookPart.currentTime >= duration);
            }
        }

        markAsListen(id) {
            this.savePosition(id, 0, true);
        }

        savePosition(id, currentTime, listen) {
            const xhr = new XMLHttpRequest();
            const encodedID = encodeURIComponent(id);
            const encodedCurrentTime = encodeURIComponent(parseInt(currentTime).toString());
            xhr.open('GET', listen ? `listen/${encodedID}` : `/updatePosition/${encodedID}/${encodedCurrentTime}`, true);
            xhr.send();
        }
    };
    exports.default = new Audio();
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9hdWRpby5qcyJdLCJuYW1lcyI6WyJBdWRpbyIsInVwZGF0ZVBvc2l0aW9uIiwiYm9va1BhcnQiLCJjdXJyZW50VGltZSIsImR1cmF0aW9uIiwiaXNMb2FkZWQiLCJzYXZlUG9zaXRpb24iLCJpZCIsIm1hcmtBc0xpc3RlbiIsImxpc3RlbiIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwiZW5jb2RlZElEIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZW5jb2RlZEN1cnJlbnRUaW1lIiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsIm9wZW4iLCJzZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7UUFBTUEsSyxHQUFOLE1BQU1BLEtBQU4sQ0FBWTtBQUNSQyx1QkFBZ0JDLFFBQWhCLEVBQTBCQyxXQUExQixFQUF1Q0MsUUFBdkMsRUFBa0Q7QUFDOUMsZ0JBQUtGLFNBQVNHLFFBQVQsSUFBcUJILFNBQVNDLFdBQVQsS0FBeUJBLFdBQW5ELEVBQWlFO0FBQzdERCx5QkFBU0MsV0FBVCxHQUF1QkEsV0FBdkI7QUFDQSxxQkFBS0csWUFBTCxDQUFtQkosU0FBU0ssRUFBNUIsRUFBZ0NKLFdBQWhDLEVBQTZDRCxTQUFTQyxXQUFULElBQXdCQyxRQUFyRTtBQUNIO0FBQ0o7O0FBRURJLHFCQUFjRCxFQUFkLEVBQW1CO0FBQ2YsaUJBQUtELFlBQUwsQ0FBbUJDLEVBQW5CLEVBQXVCLENBQXZCLEVBQTBCLElBQTFCO0FBQ0g7O0FBRURELHFCQUFjQyxFQUFkLEVBQWtCSixXQUFsQixFQUErQk0sTUFBL0IsRUFBd0M7QUFDcEMsa0JBQU1DLE1BQU0sSUFBSUMsY0FBSixFQUFaO0FBQ0Esa0JBQU1DLFlBQVlDLG1CQUFvQk4sRUFBcEIsQ0FBbEI7QUFDQSxrQkFBTU8scUJBQXFCRCxtQkFBb0JFLFNBQVVaLFdBQVYsRUFBd0JhLFFBQXhCLEVBQXBCLENBQTNCO0FBQ0FOLGdCQUFJTyxJQUFKLENBQ0ksS0FESixFQUVJUixTQUFVLFVBQVNHLFNBQVUsRUFBN0IsR0FBaUMsbUJBQWtCQSxTQUFVLElBQUdFLGtCQUFtQixFQUZ2RixFQUdJLElBSEo7QUFLQUosZ0JBQUlRLElBQUo7QUFDSDtBQXRCTyxLO3NCQXlCRyxJQUFJbEIsS0FBSixFIiwiZmlsZSI6ImF1ZGlvLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3NoYW0vd29yay9hdWRpby1ib29rcy1wbGF5ZXIvY2xpZW50Iiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXVkaW8ge1xuICAgIHVwZGF0ZVBvc2l0aW9uKCBib29rUGFydCwgY3VycmVudFRpbWUsIGR1cmF0aW9uICkge1xuICAgICAgICBpZiAoIGJvb2tQYXJ0LmlzTG9hZGVkICYmIGJvb2tQYXJ0LmN1cnJlbnRUaW1lICE9PSBjdXJyZW50VGltZSApIHtcbiAgICAgICAgICAgIGJvb2tQYXJ0LmN1cnJlbnRUaW1lID0gY3VycmVudFRpbWU7XG4gICAgICAgICAgICB0aGlzLnNhdmVQb3NpdGlvbiggYm9va1BhcnQuaWQsIGN1cnJlbnRUaW1lLCBib29rUGFydC5jdXJyZW50VGltZSA+PSBkdXJhdGlvbiApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYXJrQXNMaXN0ZW4oIGlkICkge1xuICAgICAgICB0aGlzLnNhdmVQb3NpdGlvbiggaWQsIDAsIHRydWUgKTtcbiAgICB9XG5cbiAgICBzYXZlUG9zaXRpb24oIGlkLCBjdXJyZW50VGltZSwgbGlzdGVuICkge1xuICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgY29uc3QgZW5jb2RlZElEID0gZW5jb2RlVVJJQ29tcG9uZW50KCBpZCApO1xuICAgICAgICBjb25zdCBlbmNvZGVkQ3VycmVudFRpbWUgPSBlbmNvZGVVUklDb21wb25lbnQoIHBhcnNlSW50KCBjdXJyZW50VGltZSApLnRvU3RyaW5nKCkgKTtcbiAgICAgICAgeGhyLm9wZW4oXG4gICAgICAgICAgICAnR0VUJyxcbiAgICAgICAgICAgIGxpc3RlbiA/IGBsaXN0ZW4vJHtlbmNvZGVkSUR9YDogYC91cGRhdGVQb3NpdGlvbi8ke2VuY29kZWRJRH0vJHtlbmNvZGVkQ3VycmVudFRpbWV9YCxcbiAgICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgICAgeGhyLnNlbmQoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBdWRpbygpOyJdfQ==

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(23), __webpack_require__(36), __webpack_require__(37)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_shamUi, _main, _audio) {
    'use strict';

    var _shamUi2 = _interopRequireDefault(_shamUi);

    var _main2 = _interopRequireDefault(_main);

    var _audio2 = _interopRequireDefault(_audio);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    _shamUi.DI.bind('service:audio', _audio2.default);

    _shamUi.DI.bind('widget-binder', _main2.default);

    window.onload = () => {
        const UI = new _shamUi2.default();
        UI.render.FORCE_ALL();
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLmpzIl0sIm5hbWVzIjpbImJpbmQiLCJ3aW5kb3ciLCJvbmxvYWQiLCJVSSIsInJlbmRlciIsIkZPUkNFX0FMTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsZUFBR0EsSUFBSCxDQUFTLGVBQVQ7O0FBRUEsZUFBR0EsSUFBSCxDQUFTLGVBQVQ7O0FBRUFDLFdBQU9DLE1BQVAsR0FBZ0IsTUFBTTtBQUNsQixjQUFNQyxLQUFLLHNCQUFYO0FBQ0FBLFdBQUdDLE1BQUgsQ0FBVUMsU0FBVjtBQUNILEtBSEQiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zaGFtL3dvcmsvYXVkaW8tYm9va3MtcGxheWVyL2NsaWVudCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmF1bHQgYXMgU2hhbVVJLCBESSB9IGZyb20gJ3NoYW0tdWknO1xuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9tYWluJztcbmltcG9ydCBhdWRpb1NlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9hdWRpbyc7XG5cbkRJLmJpbmQoICdzZXJ2aWNlOmF1ZGlvJywgYXVkaW9TZXJ2aWNlICk7XG5cbkRJLmJpbmQoICd3aWRnZXQtYmluZGVyJywgY29udHJvbGxlciApO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IFVJID0gbmV3IFNoYW1VSSgpO1xuICAgIFVJLnJlbmRlci5GT1JDRV9BTEwoKTtcbn07Il19

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(76)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _shamUiAudioWidget) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = undefined;

    var _shamUiAudioWidget2 = _interopRequireDefault(_shamUiAudioWidget);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    let Player = class Player extends _shamUiAudioWidget2.default {
        get currentTime() {
            return this.audio.audioCurrent.currentTime;
        }

        get duration() {
            return this.audio.audioCurrent.duration;
        }

        get url() {
            return this.audio.audioList[this.audio.audioCurrentIndex];
        }

        get previousUrl() {
            if (this.audio.audioCurrentIndex > 0) {
                return this.audio.audioList[this.audio.audioCurrentIndex - 1];
            }
            return null;
        }
    };
    exports.default = Player;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL2F1ZGlvLXBsYXllci5qcyJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJjdXJyZW50VGltZSIsImF1ZGlvIiwiYXVkaW9DdXJyZW50IiwiZHVyYXRpb24iLCJ1cmwiLCJhdWRpb0xpc3QiLCJhdWRpb0N1cnJlbnRJbmRleCIsInByZXZpb3VzVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O1FBRXFCQSxNLEdBQU4sTUFBTUEsTUFBTixxQ0FBaUM7QUFDNUMsWUFBSUMsV0FBSixHQUFrQjtBQUNkLG1CQUFPLEtBQUtDLEtBQUwsQ0FBV0MsWUFBWCxDQUF3QkYsV0FBL0I7QUFDSDs7QUFFRCxZQUFJRyxRQUFKLEdBQWU7QUFDWCxtQkFBTyxLQUFLRixLQUFMLENBQVdDLFlBQVgsQ0FBd0JDLFFBQS9CO0FBQ0g7O0FBRUQsWUFBSUMsR0FBSixHQUFVO0FBQ04sbUJBQU8sS0FBS0gsS0FBTCxDQUFXSSxTQUFYLENBQXNCLEtBQUtKLEtBQUwsQ0FBV0ssaUJBQWpDLENBQVA7QUFDSDs7QUFFRCxZQUFJQyxXQUFKLEdBQWtCO0FBQ2QsZ0JBQUssS0FBS04sS0FBTCxDQUFXSyxpQkFBWCxHQUErQixDQUFwQyxFQUF3QztBQUNwQyx1QkFBTyxLQUFLTCxLQUFMLENBQVdJLFNBQVgsQ0FBc0IsS0FBS0osS0FBTCxDQUFXSyxpQkFBWCxHQUErQixDQUFyRCxDQUFQO0FBQ0g7QUFDRCxtQkFBTyxJQUFQO0FBQ0g7QUFsQjJDLEs7c0JBQTNCUCxNIiwiZmlsZSI6ImF1ZGlvLXBsYXllci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zaGFtL3dvcmsvYXVkaW8tYm9va3MtcGxheWVyL2NsaWVudCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdWRpb1BsYXllciBmcm9tICdzaGFtLXVpLWF1ZGlvLXdpZGdldCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIEF1ZGlvUGxheWVyIHtcbiAgICBnZXQgY3VycmVudFRpbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1ZGlvLmF1ZGlvQ3VycmVudC5jdXJyZW50VGltZTtcbiAgICB9XG5cbiAgICBnZXQgZHVyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1ZGlvLmF1ZGlvQ3VycmVudC5kdXJhdGlvbjtcbiAgICB9XG5cbiAgICBnZXQgdXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdWRpby5hdWRpb0xpc3RbIHRoaXMuYXVkaW8uYXVkaW9DdXJyZW50SW5kZXggXTtcbiAgICB9XG5cbiAgICBnZXQgcHJldmlvdXNVcmwoKSB7XG4gICAgICAgIGlmICggdGhpcy5hdWRpby5hdWRpb0N1cnJlbnRJbmRleCA+IDAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdWRpby5hdWRpb0xpc3RbIHRoaXMuYXVkaW8uYXVkaW9DdXJyZW50SW5kZXggLSAxIF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufSJdfQ==

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(41), __esModule: true };

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(71);
__webpack_require__(72);
__webpack_require__(74);
__webpack_require__(70);
__webpack_require__(73);
module.exports = __webpack_require__(9).Map;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(15);

module.exports = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(20)
  , toLength  = __webpack_require__(21)
  , toIndex   = __webpack_require__(66);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx      = __webpack_require__(10)
  , IObject  = __webpack_require__(28)
  , toObject = __webpack_require__(35)
  , toLength = __webpack_require__(21)
  , asc      = __webpack_require__(48);
module.exports = function(TYPE, $create){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
    , create        = $create || asc;
  return function($this, callbackfn, that){
    var O      = toObject($this)
      , self   = IObject(O)
      , f      = ctx(callbackfn, that, 3)
      , length = toLength(self.length)
      , index  = 0
      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5)
  , isArray  = __webpack_require__(55)
  , SPECIES  = __webpack_require__(0)('species');

module.exports = function(original){
  var C;
  if(isArray(original)){
    C = original.constructor;
    // cross-realm fallback
    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
    if(isObject(C)){
      C = C[SPECIES];
      if(C === null)C = undefined;
    }
  } return C === undefined ? Array : C;
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(47);

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP          = __webpack_require__(4).f
  , create      = __webpack_require__(31)
  , redefineAll = __webpack_require__(33)
  , ctx         = __webpack_require__(10)
  , anInstance  = __webpack_require__(24)
  , defined     = __webpack_require__(11)
  , forOf       = __webpack_require__(15)
  , $iterDefine = __webpack_require__(16)
  , step        = __webpack_require__(29)
  , setSpecies  = __webpack_require__(64)
  , DESCRIPTORS = __webpack_require__(2)
  , fastKey     = __webpack_require__(30).fastKey
  , SIZE        = DESCRIPTORS ? '_s' : 'size';

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        anInstance(this, C, 'forEach');
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)dP(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(25)
  , from    = __webpack_require__(44);
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global         = __webpack_require__(1)
  , $export        = __webpack_require__(14)
  , meta           = __webpack_require__(30)
  , fails          = __webpack_require__(12)
  , hide           = __webpack_require__(3)
  , redefineAll    = __webpack_require__(33)
  , forOf          = __webpack_require__(15)
  , anInstance     = __webpack_require__(24)
  , isObject       = __webpack_require__(5)
  , setToStringTag = __webpack_require__(17)
  , dP             = __webpack_require__(4).f
  , each           = __webpack_require__(46)(0)
  , DESCRIPTORS    = __webpack_require__(2);

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function(target, iterable){
      anInstance(target, C, NAME, '_c');
      target._c = new Base;
      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
        anInstance(this, C, KEY);
        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    if('size' in proto)dP(C.prototype, 'size', {
      get: function(){
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(2) && !__webpack_require__(12)(function(){
  return Object.defineProperty(__webpack_require__(26)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(8)
  , ITERATOR   = __webpack_require__(0)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(13);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(6);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(31)
  , descriptor     = __webpack_require__(32)
  , setToStringTag = __webpack_require__(17)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(3)(IteratorPrototype, __webpack_require__(0)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(4)
  , anObject = __webpack_require__(6)
  , getKeys  = __webpack_require__(62);

module.exports = __webpack_require__(2) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(7)
  , toObject    = __webpack_require__(35)
  , IE_PROTO    = __webpack_require__(18)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(7)
  , toIObject    = __webpack_require__(20)
  , arrayIndexOf = __webpack_require__(45)(false)
  , IE_PROTO     = __webpack_require__(18)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(61)
  , enumBugKeys = __webpack_require__(27);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(1)
  , core        = __webpack_require__(9)
  , dP          = __webpack_require__(4)
  , DESCRIPTORS = __webpack_require__(2)
  , SPECIES     = __webpack_require__(0)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(19)
  , defined   = __webpack_require__(11);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(19)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(5);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(25)
  , ITERATOR  = __webpack_require__(0)('iterator')
  , Iterators = __webpack_require__(8);
module.exports = __webpack_require__(9).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(43)
  , step             = __webpack_require__(29)
  , Iterators        = __webpack_require__(8)
  , toIObject        = __webpack_require__(20);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(16)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(49);

// 23.1 Map Objects
module.exports = __webpack_require__(51)('Map', function(get){
  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);

/***/ }),
/* 71 */
/***/ (function(module, exports) {



/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(65)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(16)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = __webpack_require__(14);

$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(50)('Map')});

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69);
var global        = __webpack_require__(1)
  , hide          = __webpack_require__(3)
  , Iterators     = __webpack_require__(8)
  , TO_STRING_TAG = __webpack_require__(0)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 75 */,
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("sham-ui-audio-widget", [], factory);
	else if(typeof exports === 'object')
		exports["sham-ui-audio-widget"] = factory();
	else
		root["sham-ui-audio-widget"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(70)
  , defined = __webpack_require__(15);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(10)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(9)
  , IE8_DOM_DEFINE = __webpack_require__(35)
  , toPrimitive    = __webpack_require__(26)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(3) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , core      = __webpack_require__(0)
  , ctx       = __webpack_require__(33)
  , hide      = __webpack_require__(7)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(5)
  , createDesc = __webpack_require__(13);
module.exports = __webpack_require__(3) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(24)('wks')
  , uid        = __webpack_require__(14)
  , Symbol     = __webpack_require__(1).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(40)
  , enumBugKeys = __webpack_require__(16);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(9)
  , dPs         = __webpack_require__(76)
  , enumBugKeys = __webpack_require__(16)
  , IE_PROTO    = __webpack_require__(23)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(34)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(69).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(21)
  , createDesc     = __webpack_require__(13)
  , toIObject      = __webpack_require__(2)
  , toPrimitive    = __webpack_require__(26)
  , has            = __webpack_require__(4)
  , IE8_DOM_DEFINE = __webpack_require__(35)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(3) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(5).f
  , has = __webpack_require__(4)
  , TAG = __webpack_require__(8)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(24)('keys')
  , uid    = __webpack_require__(14);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(11);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(1)
  , core           = __webpack_require__(0)
  , LIBRARY        = __webpack_require__(18)
  , wksExt         = __webpack_require__(28)
  , defineProperty = __webpack_require__(5).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(8);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(60), __esModule: true };

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(61), __esModule: true };

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(57);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(56);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(65);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11)
  , document = __webpack_require__(1).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(3) && !__webpack_require__(10)(function(){
  return Object.defineProperty(__webpack_require__(34)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(18)
  , $export        = __webpack_require__(6)
  , redefine       = __webpack_require__(42)
  , hide           = __webpack_require__(7)
  , has            = __webpack_require__(4)
  , Iterators      = __webpack_require__(17)
  , $iterCreate    = __webpack_require__(72)
  , setToStringTag = __webpack_require__(22)
  , getPrototypeOf = __webpack_require__(39)
  , ITERATOR       = __webpack_require__(8)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(40)
  , hiddenKeys = __webpack_require__(16).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(4)
  , toObject    = __webpack_require__(43)
  , IE_PROTO    = __webpack_require__(23)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(4)
  , toIObject    = __webpack_require__(2)
  , arrayIndexOf = __webpack_require__(67)(false)
  , IE_PROTO     = __webpack_require__(23)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(6)
  , core    = __webpack_require__(0)
  , fails   = __webpack_require__(10);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(15);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Player"] = factory();
	else
		root["Player"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var P_PADDING = 'P_PADDING';
	var P_LOAD_START = 'P_LOAD_START';
	var P_LOADING = 'P_LOADING';
	var P_PLAY = 'P_PLAY';
	var P_PLAYING = 'P_PLAYING';
	var P_ERROR = 'P_ERROR';
	var P_PAUSE = 'P_PAUSE';
	var P_ENDED = 'P_ENDED';
	var P_ABORT = 'P_ABORT';

	var P_DIR = 1;

	var P_MODE_SINGLE = 'P_MODE_SINGLE';
	var P_MODE_ORDER = 'P_MODE_ORDER';
	var P_MODE_CIRCULATION = 'P_MODE_CIRCULATION';
	var P_MODE_RANDOM = 'P_MODE_RANDOM';

	var P_EMPTY_FUNC = function P_EMPTY_FUNC(state, player) {
	    return player;
	};

	//includes
	if (!Array.prototype.includes) {
	    Array.prototype.includes = function (searchE, fromIndex) {
	        if (this === null || this === void 0) {
	            throw new TypeError('Array.prototype.includes called on null or undefined');
	        }

	        var O = Object(this);
	        var k = void 0,
	            len = parseInt(O.length, 10) || 0,
	            n = parseInt(fromIndex ? fromIndex : 0, 10) || 0;
	        if (len === 0) {
	            return false;
	        }
	        k = n >= 0 ? n : len + n < 0 ? 0 : len + n;

	        var currentE = void 0;
	        while (k < len) {
	            currentE = O[k];
	            if (searchE === currentE || searchE !== searchE && currentE !== currentE) {
	                return true;
	            }
	            k++;
	        }
	        return false;
	    };
	}

	/**
	 * Jin  Music Player
	 *
	 * audioList         播放列表
	 * audioCurrentIndex 当前播放第几首
	 * lastPlayIndex     上一首id
	 * audioCurrent      播放Audio
	 * state             播放状态
	 * playDir           播放方向
	 * errorArray        错误歌曲列表
	 * abortTime         加载超时时间
	 * abortHandler      超时事件句柄
	 * volumeCurrent     声音音量
	 * auto              自动播放
	 * eventHandler      事件句柄
	 * mode              播放模式
	 * callback          歌曲各个阶段的回调函数对象
	 *
	 */

	var Player = function () {
	    function Player(play) {
	        _classCallCheck(this, Player);

	        if (!window.Audio) return 'Your browser does not support [window.Audio]';
	        if (play === void 0) play = {};
	        if ({}.toString(play) !== '[object Object]') throw new Error('Player need {}');
	        this.audioList = [];
	        this.lastPlayIndex = this.audioCurrentIndex = play.audioCurrentIndex ? play.audioCurrentIndex - 1 : 0;
	        this.audioCurrent = new Audio();
	        this.state = P_PADDING;
	        this.playDir = P_DIR;
	        this.errorArray = [];
	        this.abortTime = 20000;
	        this.abortHandler = null;
	        this.volumeCurrent = 1;
	        this.auto = true;
	        this.eventHandler = {};
	        this.mode = P_MODE_ORDER;
	        this.callback = { error: P_EMPTY_FUNC, abort: P_EMPTY_FUNC, loadstart: P_EMPTY_FUNC, loading: P_EMPTY_FUNC,
	            play: P_EMPTY_FUNC, playing: P_EMPTY_FUNC, end: P_EMPTY_FUNC };

	        this.src(play.audioList).setAbortTime(play.abortTime).setAuto(play.auto).setMode(play.mode).setVolume(play.volume).setCallBack(play.callback).addEvent();
	    }

	    Player.prototype.src = function src(source) {
	        var _this2 = this;

	        if (!source) return this;
	        if (typeof source === 'string') {
	            if (!this.audioList.includes(source)) this.audioList.push(source);
	        } else if (Array.isArray(source)) {
	            (function () {
	                var _this = _this2;
	                source = source.filter(function (currentSrc) {
	                    return !_this.audioList.includes(currentSrc);
	                });
	                _this2.audioList = _this2.audioList.concat(source);
	            })();
	        }
	        return this;
	    };

	    Player.prototype.play = function play(n) {
	        if (typeof n === 'number' && this.audioList && this.errorArray.length != this.audioList && n <= this.audioList.length || n > 0) {
	            return this.jump(n - this.audioCurrentIndex - 1);
	        }
	        return !this.audioCurrent.currentSrc ? this.setAudioCurrentIndex().loading() : this.audioPlay();
	    };

	    Player.prototype.next = function next() {
	        return this.reDir().jump(this.mode === P_MODE_SINGLE ? 1 : this.getStep());
	    };

	    Player.prototype.pre = function pre() {
	        return this.reDir(-1).jump(this.mode === P_MODE_SINGLE ? -1 : this.getStep());
	    };

	    Player.prototype.jump = function jump(n) {
	        if (n === void 0) n = this.getStep();
	        if (typeof n !== 'number' || this.audioCurrentIndex + n >= this.audioList.length || this.audioCurrentIndex + n < 0) return this.reAbort().reDir().reState();
	        return this.pause().reAbort().setAudioCurrentIndex(n).loading();
	    };

	    Player.prototype.setMode = function setMode(mode) {
	        var modes = [P_MODE_SINGLE, P_MODE_ORDER, P_MODE_CIRCULATION, P_MODE_RANDOM];
	        if (typeof mode === 'string' && modes.includes(mode)) this.mode = mode;
	        if (typeof mode === 'number' && modes[mode]) this.mode = modes[mode];
	        return this;
	    };

	    Player.prototype.setAuto = function setAuto(auto) {
	        auto = auto === void 0 ? true : auto;
	        this.auto = typeof auto === 'boolean' ? auto : this.auto;
	        return this;
	    };

	    Player.prototype.setAbortTime = function setAbortTime(abortTime) {
	        this.abortTime = abortTime && typeof abortTime === 'number' ? abortTime : this.abortTime;
	        return this;
	    };

	    Player.prototype.setCallBack = function setCallBack(callbackObj) {
	        if ({}.toString(callbackObj) !== '[object Object]') return this;
	        for (var name in callbackObj) {
	            if (this.callback[name] && typeof callbackObj[name] === 'function') {
	                this.callback[name] = callbackObj[name];
	            }
	        }
	        return this;
	    };

	    Player.prototype.runCallBack = function runCallBack(name) {
	        if (name && typeof this.callback[name] === 'function') {
	            this.callback[name].call(this, name, this);
	        }
	        return this;
	    };

	    Player.prototype.setVolume = function setVolume(val) {
	        this.volumeCurrent = typeof val === 'number' && val >= 0 && val <= 1 ? val : this.volumeCurrent;
	        return this.reVolume();
	    };

	    Player.prototype.setAudioCurrentIndex = function setAudioCurrentIndex(n) {
	        this.lastPlayIndex = this.audioCurrentIndex;
	        if (n === void 0) return this;
	        if (this.audioList.length && this.audioCurrentIndex + n >= this.audioList.length) {
	            this.audioCurrentIndex = this.audioList.length - 1;
	            return this;
	        }
	        if (this.audioCurrentIndex + n < 0) {
	            this.audioCurrentIndex = 0;
	            return this;
	        }
	        this.audioCurrentIndex += n;
	        return this;
	    };

	    Player.prototype.setErrorAudio = function setErrorAudio() {
	        if (!this.errorArray.includes(this.audioList[this.audioCurrentIndex])) this.errorArray.push(this.audioList[this.audioCurrentIndex]);
	        return this;
	    };

	    Player.prototype.getErrorAudio = function getErrorAudio(source) {
	        if (source && typeof source === 'string' && this.errorArray.includes(source)) return true;
	        if (source && typeof source === 'number' && source < this.audioList.length && source >= 0 && this.errorArray.includes(this.audioList[source])) return true;
	        return source === void 0 && this.errorArray.includes(this.audioList[this.audioCurrentIndex]) ? true : false;
	    };

	    Player.prototype.getStep = function getStep() {
	        if (this.mode === P_MODE_SINGLE) return 0;
	        if (this.mode === P_MODE_CIRCULATION) {
	            return (this.audioCurrentIndex + 1) % this.audioList.length - this.audioCurrentIndex;
	        }
	        if (this.mode === P_MODE_RANDOM) {
	            return Math.floor(Math.random() * (this.audioList.length - 0) + 0) - this.audioCurrentIndex;
	        }
	        return 1 * this.playDir; //this.mode === P_MODE_ORDER
	    };

	    Player.prototype.pause = function pause() {
	        if (this.audioCurrent) this.audioCurrent.pause();
	        return this.reState(P_PAUSE);
	    };

	    Player.prototype.reload = function reload() {
	        if (this.audioCurrent) {
	            this.audioCurrent.load();
	        }
	        return this;
	    };

	    Player.prototype.audioPlay = function audioPlay() {
	        if (this.audioCurrent) {
	            this.audioCurrent.play();
	        }
	        return this;
	    };

	    Player.prototype.reVolume = function reVolume() {
	        if (this.audioCurrent) this.audioCurrent.volume = this.volumeCurrent;
	        return this;
	    };

	    Player.prototype.loading = function loading() {
	        var _this3 = this;

	        if (this.audioList.length && this.audioCurrentIndex < this.audioList.length && this.audioCurrentIndex >= 0) {
	            // loading    
	            this.reAbort().reState();
	            this.audioCurrent.src = this.audioList[this.audioCurrentIndex];
	            this.abortHandler = setTimeout(function () {
	                var event = document.createEvent('Events');
	                event.initEvent('emptied', false, true);
	                _this3.pause().audioCurrent.dispatchEvent(event);
	            }, this.abortTime);
	            return this.auto ? this.audioPlay() : this;
	        }
	        return this;
	    };

	    Player.prototype.reState = function reState(state) {
	        this.state = state ? state : P_PADDING;
	        return this;
	    };

	    Player.prototype.reDir = function reDir(dir) {
	        this.playDir = dir ? dir * P_DIR : P_DIR;
	        return this;
	    };

	    Player.prototype.reAbort = function reAbort() {
	        clearTimeout(this.abortHandler);
	        this.abortHandler = null;
	        return this;
	    };

	    Player.prototype.addEvent = function addEvent() {
	        var _this4 = this;

	        this.eventHandler = {
	            error: function error() {
	                _this4.reAbort().reState(P_ERROR).setErrorAudio().runCallBack('error');
	                return _this4.auto ? _this4.jump(_this4.mode === P_MODE_SINGLE ? _this4.playDir === P_DIR ? 1 : -1 : _this4.getStep()) : _this4;
	            },
	            loadstart: function loadstart() {
	                return _this4.reState(P_LOAD_START).runCallBack('loadstart');
	            },
	            loadedmetadata: function loadedmetadata() {
	                return _this4.reAbort().reState(P_LOADING).filterErrorAudio().runCallBack('loading').reDir();
	            },
	            emptied: function emptied() {
	                return _this4.reState(P_ABORT).runCallBack('abort');
	            },
	            canplay: function canplay() {
	                return _this4.reState(P_PLAY).runCallBack('play');
	            },
	            playing: function playing() {
	                return _this4.reState(P_PLAYING).runCallBack('playing');
	            },
	            ended: function ended() {
	                _this4.reState(P_ENDED).runCallBack('end');
	                return _this4.auto ? _this4.jump(_this4.getStep()) : _this4.setAudioCurrentIndex();
	            }
	        };
	        for (var eventName in this.eventHandler) {
	            this.audioCurrent.addEventListener(eventName, this.eventHandler[eventName], false);
	        }
	        return this;
	    };

	    Player.prototype.filterErrorAudio = function filterErrorAudio() {
	        if (!this.audioCurrent.src) return this;
	        var audioCurrentSrc = this.audioCurrent.src;
	        this.errorArray = this.errorArray.filter(function (currentSrc) {
	            return currentSrc != audioCurrentSrc;
	        });
	        return this;
	    };

	    Player.prototype.removeEevent = function removeEevent() {
	        for (var eventName in this.eventHandler) {
	            this.audioCurrent.removeEventListener(eventName, this.eventHandler[eventName], false);
	        }
	        return this.reAbort();
	    };

	    return Player;
	}();

	exports.default = Player;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
						"use strict";

						Object.defineProperty(exports, "__esModule", {
												value: true
						});
						exports.default = "\n    <div id=\"player\">\n\t\t<p id=\"current\"></p>\n\t</div>\n\t<div class=\"\">\n\t    <div class=\"play-pause\">\n\t        <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n        </div>\n\t\t<div class=\"pre\">\n\t\t    <i class=\"fa fa-backward\"></i>\n\t\t</div>\n\t\t<input type=\"range\" class=\"timing slider\" min=\"0\" max=\"1\" value=\"0\" name=\"range\" step=\"0.1\">\n\t\t<div class=\"next\">\n\t\t    <i class=\"fa fa-forward\"></i>\n        </div>\n\t\t<input type=\"range\" class=\"volume slider\" min=\"0\" max=\"1\" value=\"1\" name=\"range\" step=\"0.01\">\n\t</div>\n";
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zaGFtL3dvcmsvc2hhbXVpLWF1ZGlvLXdpZGdldCIsInNvdXJjZXNDb250ZW50IjpbXX0=

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(54);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(30);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(29);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(55);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(53);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(31);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(31);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define("shamUI",[],t):"object"==typeof exports?exports.shamUI=t():e.shamUI=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=15)}([function(e,t,n){var r,i;r=[t],void 0!==(i=function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t,n){var r=n.initializer();n.initializer=function(){return a.resolve(r)}}Object.defineProperty(e,"__esModule",{value:!0}),e.inject=n;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=new Map,o=function(){function e(){t(this,e)}return r(e,null,[{key:"bind",value:function(e,t){i.set(e,t)}},{key:"resolve",value:function(e){if(i.has(e))return i.get(e)}}]),e}(),a=window.DI||o;window.DI=a,e.default=a}.apply(t,r))&&(e.exports=i)},function(e,t,n){var r,i;r=[t],void 0!==(i=function(e){"use strict";function t(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r,i,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a="transition",s="handler",u="handling",l="handled",c="nohandler",f="transition",d="invalidstate",p="deferred",h="error",v=(e.Fsm=(i=r=function(){function e(){n(this,e),this.targetReplayState="",this.state=void 0,this.priorState=void 0,this._priorAction="",this._currentAction="",this.eventListeners={_anyEvents:[],__listenerUniqueIndex:0},this.eventQueue=[]}return o(e,[{key:"initStates",value:function(){this._states={};for(var e in this)this[e]&&this[e].prototype instanceof v&&(this._states[e]=new this[e](this))}},{key:"run",value:function(){this.initStates(),this.transition(this.constructor.initialState)}},{key:"emit",value:function(e){var t=arguments;this.eventListeners._anyEvents&&this.eventListeners._anyEvents.forEach(function(e){e.callback.apply(void 0,t)}),this.eventListeners[e]&&this.eventListeners[e].forEach(function(e){e.callback.apply(void 0,t)})}},{key:"handle",value:function(e){if(!this.inExitHandler){var t=this._states,n=this.state,r=Array.prototype.slice.call(arguments,0);if(this.currentActionArgs=r,t[n][e]||t[n]._anyEvents||this._anyEvents){var i=t[n][e]?e:"_anyEvents",o="_anyEvents"===i,a=void 0,f=void 0;t[n][i]?(a=t[n][i],f=n+"."+i):(a=this._anyEvents,f="_anyEvents"),this._currentAction||(this._currentAction=f),this.emit(u,{inputType:e,args:r}),a.apply(t[n],o?r:r.slice(1)),this.emit(l,{inputType:e,args:r}),this._priorAction=this._currentAction,this._currentAction="",this.processQueue(s)}else this.emit(c,{inputType:e,args:r});this.currentActionArgs=void 0}}},{key:"transition",value:function(e){if(!this.inExitHandler&&e!==this.state){var t=this.state;if(this._states[e])return t&&this._states[t]&&this._states[t]._onExit&&(this.inExitHandler=!0,this._states[t]._onExit(),this.inExitHandler=!1),this.targetReplayState=e,this.priorState=t,this.state=e,this.emit(f,{fromState:this.priorState,action:this._currentAction,toState:e}),this._states[e]._onEnter&&this._states[e]._onEnter(),void(this.targetReplayState===e&&this.processQueue(a));this.emit(d,{state:this.state,attemptedState:e})}}},{key:"processQueue",value:function(e){for(var n=this,r=a===e?function(e){return a===e.type&&(!e.untilState||e.untilState===n.state)}:function(e){return s===e.type},i=[],o=-1,u=this.eventQueue.length,l=0,c=void 0;++o<u;)c=this.eventQueue[o-l],r(c)&&i.push(this.eventQueue.splice(o-l++)[0]);i.forEach(function(e){n.handle.apply(n,t(e.args))})}},{key:"deferUntilTransition",value:function(e){if(this.currentActionArgs){var t={type:a,untilState:e,args:this.currentActionArgs};this.eventQueue.push(t),this.emit.call(this,p,{state:this.state,queuedArgs:t})}}},{key:"on",value:function(e,t){var n=this;this.eventListeners[e]||(this.eventListeners[e]=[]);var r=this.eventListeners.__listenerUniqueIndex++;return this.eventListeners[e].push({callbackID:r,callback:t}),{eventName:e,callback:t,callbackID:r,off:function(){n.off(e,t,r)}}}},{key:"off",value:function(e,t,n){if(e){if(this.eventListeners[e])if(t)for(var r=0,i=-1,o=this.eventListeners[e].length,a=void 0;++i<o;)a=this.eventListeners[e][i-r],t!==a.callback||void 0!==n&&n!==a.callbackID||this.eventListeners[e].splice(i-r++,1);else this.eventListeners[e]=[]}else this.eventListeners={}}},{key:"one",value:function(e,t){var n=arguments,r=this.on(e,function(){t.apply(void 0,n),r()}).off}},{key:"handleException",value:function(e){this.emit(h,{exception:e,state:this.state,priorState:this.priorState,_currentAction:this._currentAction,_priorAction:this._priorAction,currentActionArgs:this.currentActionArgs})}}]),e}(),r.initialState="uninitialized",i),e.State=function(){function e(t){n(this,e),this._fsm=t}return o(e,[{key:"handle",value:function(e){var t;(t=this._fsm).handle.apply(t,arguments)}},{key:"transition",value:function(e){var t;(t=this._fsm).transition.apply(t,arguments)}},{key:"deferUntilTransition",value:function(){var e;(e=this._fsm).deferUntilTransition.apply(e,arguments)}},{key:"emit",value:function(){var e;(e=this._fsm).emit.apply(e,arguments)}},{key:"handleException",value:function(){var e;(e=this._fsm).handleException.apply(e,arguments)}}]),e}())}.apply(t,r))&&(e.exports=i)},function(e,t,n){var r,i;r=[t],void 0!==(i=function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=function(){function e(){t(this,e)}return n(e,[{key:"predicate",value:function(e,t){}},{key:"resolve",value:function(e){}}]),e}();e.default=r}.apply(t,r))&&(e.exports=i)},function(e,t,n){var r,i;r=[t],void 0!==(i=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,t,n){return e.defaultOptionProps=(e.defaultOptionProps||[]).concat([t]),n}}.apply(t,r))&&(e.exports=i)},function(e,t,n){var r,i;r=[t,n(0)],void 0!==(i=function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){var t=Error.apply(this,arguments);return t.name="AssertError",t}Object.defineProperty(e,"__esModule",{value:!0});var o=n(t),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s="sham-ui";i.prototype=Object.create(Error.prototype,{constructor:{value:i}});var u=function(){function e(){r(this,e)}return a(e,null,[{key:"getStack",value:function(e){try{throw new i(e)}catch(e){return e}}},{key:"error",value:function(t,n){n&&o.default.resolve("logger").error(e.getStack(s+": "+t))}},{key:"warn",value:function(t,n){n&&o.default.resolve("logger").warn(e.getStack(s+": "+t))}}]),e}();e.default={error:u.error,warn:u.warn}}.apply(t,r))&&(e.exports=i)},function(e,t,n){var r,i;r=[t],void 0!==(i=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,t){return function(n,r,i){return n.handlerProps=(n.handlerProps||[]).concat([{selector:t,eventType:e,handlerName:r}]),i}}}.apply(t,r))&&(e.exports=i)},function(e,t,n){var r,i;r=[t,n(0),n(1),n(11),n(12),n(13)],void 0!==(i=function(e,t,n,r,i,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function f(e,t,n,r,i){var o={};return Object.keys(r).forEach(function(e){o[e]=r[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=n.slice().reverse().reduce(function(n,r){return r(e,t,n)||n},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}Object.defineProperty(e,"__esModule",{value:!0}),e.FSM=e.states=void 0;var d,p,h,v,y,b,g,m=a(r),_=a(i),w=a(o),O=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),E=function e(t,n,r){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,r)}if("value"in i)return i.value;var a=i.get;if(void 0!==a)return a.call(r)};e.states={ready:m.default,registration:_.default,rendering:w.default},e.FSM=(g=b=function(e){function t(){u(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return s(e,"ready",p,e),s(e,"registration",h,e),s(e,"rendering",v,e),s(e,"logger",y,e),e.widgets=[],e.idArray=[],e.byType={},e.byId={},e}return c(t,e),O(t,[{key:"ALL",value:function(){this.handle("all")}},{key:"ONLY",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.handle("only",t)}},{key:"FORCE_ALL",value:function(){this.handle("forceAll")}},{key:"FORCE_ONLY",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.handle("forceOnly",t)}},{key:"ONLY_TYPE",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.handle("onlyType",t)}},{key:"register",value:function(e){this.handle("register",e)}},{key:"unregister",value:function(e){this.handle("unregister",e)}},{key:"handleException",value:function(e){this.logger.error(e),E(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"handleException",this).apply(this,arguments)}}]),t}(n.Fsm),b.initialState="ready",d=g,p=f(d.prototype,"ready",[t.inject],{enumerable:!0,initializer:function(){return"state:ready"}}),h=f(d.prototype,"registration",[t.inject],{enumerable:!0,initializer:function(){return"state:registration"}}),v=f(d.prototype,"rendering",[t.inject],{enumerable:!0,initializer:function(){return"state:rendering"}}),y=f(d.prototype,"logger",[t.inject],{enumerable:!0,initializer:function(){return"logger"}}),d)}.apply(t,r))&&(e.exports=i)},function(e,t,n){var r,i;r=[t],void 0!==(i=function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=function(){function e(){t(this,e),this.resolvers=new Set}return n(e,[{key:"registry",value:function(e){return this.resolvers.add(e),this}},{key:"resolve",value:function(e,t){var n=!0,r=!1,i=void 0;try{for(var o,a=this.resolvers.values()[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;s.predicate(e,t)&&s.resolve(t)}}catch(e){r=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw i}}}}]),e}();e.default=r}.apply(t,r))&&(e.exports=i)},function(e,t,n){var r,i;r=[t,n(2)],void 0!==(i=function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(t),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),s(t,[{key:"predicate",value:function(e,t){return e.handlerProps&&"bindEvents"===t.actionSequence[0]&&(void 0!==e.html||void 0!==e.constructor.html)}},{key:"resolve",value:function(e){e.actionSequence=["render","bindEvents"]}}]),t}(a.default);e.default=u}.apply(t,r))&&(e.exports=i)},function(e,t,n){var r,i;r=[t,n(2)],void 0!==(i=function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(t),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),s(t,[{key:"predicate",value:function(e,t){return e.handlerProps&&"render"===t.actionSequence[0]&&(void 0!==e.html||void 0!==e.constructor.html)&&t.bindOnce}},{key:"resolve",value:function(e){e.bindOnce=!1}}]),t}(a.default);e.default=u}.apply(t,r))&&(e.exports=i)},function(e,t,n){var r,i;r=[t,n(3),n(0),n(4),n(14)],void 0!==(i=function(e,t,n,r,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function s(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t,n,r,i){var o={};return Object.keys(r).forEach(function(e){o[e]=r[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=n.slice().reverse().reduce(function(n,r){return r(e,t,n)||n},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c,f,d,p,h,v,y,b,g,m,_,w=o(t),O=o(r),E=o(i),j=a(['Widget "','" hasn\'t sub-element "','" \n                        for bind event "','."'],['Widget "','" hasn\'t sub-element "','" \n                        for bind event "','."']),k=a(["Widget "," doesn't resolve container. Check container selector"],["Widget "," doesn't resolve container. Check container selector"]),P=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),x=(_=m=function(){function e(t,n,r){u(this,e),s(this,"UI",f,this),s(this,"conflictResolver",d,this),s(this,"types",h,this),s(this,"renderAsync",b,this),s(this,"renderDependence",g,this),this.ID=n,this.container=null,this.containerSelector=t,this.options=r,this.UI.render.register(this)}return P(e,[{key:"bindEvents",value:function(){var e=this.handlerProps;if(e){this._bindHandlers=[];var t=!0,n=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value,s=this.container;a.selector&&(s=this.container.querySelector(a.selector),O.default.error((0,E.default)(j,this.ID,a.selector,a.handlerName),!s));var u=void 0;u=(this.defaultOptionProps||[]).includes(a.handlerName)?this.options[a.handlerName].bind(this):this[a.handlerName].bind(this),this._bindHandlers.push({handler:u,element:s,eventType:a.eventType}),s.addEventListener(a.eventType,u)}}catch(e){n=!0,r=e}finally{try{!t&&o.return&&o.return()}finally{if(n)throw r}}}}},{key:"destroy",value:function(){var e=this._bindHandlers;e&&e.forEach(function(e){var t=e.handler,n=e.element,r=e.eventType;n.removeEventListener(r,t)})}},{key:"resolveContainer",value:function(){this.options.cacheParentContainer?(this.containerParentNode||(this.containerParentNode=document.querySelector(this.containerSelector).parentNode),this.container=this.containerParentNode.querySelector(this.containerSelector)):this.container=document.querySelector(this.containerSelector),O.default.error((0,E.default)(k,this.ID),void 0===this.container)}},{key:"render",value:function(){if(void 0===this.html)return null;var e=this.html;return"function"==typeof e&&(e=this.html()),{container:this.container,html:e}}},{key:"options",get:function(){return this._options},set:function(e){this._options={};var t=e||{};for(var n in t)t.hasOwnProperty(n)&&(this._options[n]=t[n]);var r=[this.constructor,this],i=!0,o=!1,a=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var l=s.value,c=l.defaultOptionProps||[],f=!0,d=!1,p=void 0;try{for(var h,v=c[Symbol.iterator]();!(f=(h=v.next()).done);f=!0){var y=h.value;this._options.hasOwnProperty(y)||(this._options[y]=l[y])}}catch(e){d=!0,p=e}finally{try{!f&&v.return&&v.return()}finally{if(d)throw p}}}}catch(e){o=!0,a=e}finally{try{!i&&u.return&&u.return()}finally{if(o)throw a}}this.conflictResolver.resolve(this,this._options)}}],[{key:"renderAsyncWrapper",value:function(e){window.requestAnimationFrame(e)}}]),e}(),m.actionSequence=["bindEvents","render"],m.bindOnce=!0,m.cacheParentContainer=!1,c=_,f=l(c.prototype,"UI",[n.inject],{enumerable:!0,initializer:function(){return"sham-ui"}}),d=l(c.prototype,"conflictResolver",[n.inject],{enumerable:!0,initializer:function(){return"options-conflict-resolver:manager"}}),l(c,"actionSequence",[w.default],(p=Object.getOwnPropertyDescriptor(c,"actionSequence"),p=p?p.value:void 0,{enumerable:!0,configurable:!0,writable:!0,initializer:function(){return p}}),c),h=l(c.prototype,"types",[w.default],{enumerable:!0,initializer:function(){return[]}}),l(c,"bindOnce",[w.default],(v=Object.getOwnPropertyDescriptor(c,"bindOnce"),v=v?v.value:void 0,{enumerable:!0,configurable:!0,writable:!0,initializer:function(){return v}}),c),l(c,"cacheParentContainer",[w.default],(y=Object.getOwnPropertyDescriptor(c,"cacheParentContainer"),y=y?y.value:void 0,{enumerable:!0,configurable:!0,writable:!0,initializer:function(){return y}}),c),b=l(c.prototype,"renderAsync",[w.default],{enumerable:!0,initializer:function(){return!1}}),l(c,"renderAsyncWrapper",[w.default],Object.getOwnPropertyDescriptor(c,"renderAsyncWrapper"),c),g=l(c.prototype,"renderDependence",[w.default],{enumerable:!0,initializer:function(){return[]}}),c);e.default=x}.apply(t,r))&&(e.exports=i)},function(e,t,n){var r,i;r=[t,n(1)],void 0!==(i=function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),o(t,[{key:"_onEnter",value:function(){this.emit("Ready")}},{key:"clear",value:function(){for(var e=0;e<this._fsm.widgets.length;e++)this._fsm.widgets[e].destroy&&(this._fsm.widgets[e].options.beforeDestroy&&this._fsm.widgets[e].options.beforeDestroy.call(this._fsm.widgets[e]),this._fsm.widgets[e].destroy(),this._fsm.widgets[e].options.afterDestroy&&this._fsm.widgets[e].options.afterDestroy.call(this._fsm.widgets[e])),this._fsm.widgets[e].isBinded=!1;this._fsm.widgets=[],this._fsm.idArray=[],this._fsm.byType={},this._fsm.byId={},this._fsm.renderCache={}}},{key:"all",value:function(){this._fsm.changeWidgets=this._fsm.idArray.slice(0),this.transition("rendering")}},{key:"only",value:function(e){this._fsm.changeWidgets=e.slice(0),this.transition("rendering")}},{key:"forceAll",value:function(){this.handle("clear"),this.transition("registration")}},{key:"forceOnly",value:function(e){var t=void 0,n=void 0;for(n=0;n<this._fsm.widgets.length;n++)t=this._fsm.widgets[n],e.indexOf(t)>-1&&(t.destroy&&(t.options.beforeDestroy&&t.options.beforeDestroy.call(t),t.destroy(),t.options.afterDestroy&&t.options.afterDestroy.call(t)),t.resolveContainer(),t.bindEvents&&(t.options.beforeBindEvents&&t.options.beforeBindEvents.call(t),t.bind(),t.options.afterBindEvents&&t.options.afterBindEvents.call(t)),t.isBinded=!1);this._fsm.changeWidgets=e.slice(0),this.transition("rendering")}},{key:"onlyType",value:function(e){var t=e.slice(0),n=void 0,r=void 0,i=void 0;for(i=0;i<t.length;i++)if(r=this._fsm.byType[t[i]])for(var o=0,a=r.length;o<a;o++)n=r[o],this._fsm.changeWidgets.indexOf(n)===-1&&this._fsm.changeWidgets.push(n);this.transition("rendering")}},{key:"register",value:function(e){this._fsm._states.registration.register(e),"bindEvents"===e.options.actionSequence[0]&&(e.resolveContainer(),e.bindEvents&&(e.options.beforeBindEvents&&e.options.beforeBindEvents.call(e),e.bindEvents(),e.options.afterBindEvents&&e.options.afterBindEvents.call(e)))}},{key:"unregister",value:function(e){var t=void 0,n=void 0,r=void 0,i=void 0;if(this._fsm.idArray.indexOf(e)!==-1){if(t=this._fsm.byId[e],t.destroy&&(t.options.beforeDestroy&&t.options.beforeDestroy.call(t),t.destroy(),t.options.afterDestroy&&t.options.afterDestroy.call(t)),t.options.types)for(n=t.options.types,i=0;i<n.length;i++)this._fsm.byType[n[i]].splice(this._fsm.byType[n[i]].indexOf(e),1);for(i=0;i<this._fsm.widgets.length;i++)if(this._fsm.widgets[i].ID===e){r=i;break}this._fsm.widgets.splice(r,1),this._fsm.idArray.splice(this._fsm.idArray.indexOf(e),1),delete this._fsm.byId[e],delete this._fsm.renderCache[e]}}}]),t}(t.State);e.default=a}.apply(t,r))&&(e.exports=i)},function(e,t,n){var r,i;r=[t,n(0),n(1)],void 0!==(i=function(e,t,n){"use strict";function r(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t,n,r,i){var o={};return Object.keys(r).forEach(function(e){o[e]=r[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=n.slice().reverse().reduce(function(n,r){return r(e,t,n)||n},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u,l,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=(u=function(e){function t(){var e,n,a,s;i(this,t);for(var u=arguments.length,c=Array(u),f=0;f<u;f++)c[f]=arguments[f];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r(a,"widgetBinder",l,a),s=n,o(a,s)}return a(t,e),c(t,[{key:"_anyEvents",value:function(){this.deferUntilTransition()}},{key:"_onEnter",value:function(){this.widgetBinder(),this.handle("registrationComplete")}},{key:"register",value:function(e){if(this._fsm.idArray.indexOf(e.ID)===-1){if(e.options.beforeRegister&&e.options.beforeRegister.call(e),this._fsm.idArray.push(e.ID),this._fsm.byId[e.ID]=e,e.options.types)for(var t=0;t<e.options.types.length;t++)void 0===this.byType[e.options.types[t]]&&(this.byType[e.options.types[t]]=[]),this.byType[e.options.types[t]].push(e.ID);this._fsm.widgets.push(e),e.options.afterRegister&&e.options.afterRegister.call(e)}}},{key:"registrationComplete",value:function(){var e=void 0;this.emit("RegistrationComplete");for(var t=0;t<this._fsm.widgets.length;t++)e=this._fsm.widgets[t],"bindEvents"===e.options.actionSequence[0]&&(e.resolveContainer(),e.bindEvents&&(e.options.beforeBindEvents&&e.options.beforeBindEvents.call(e),e.bindEvents(),e.options.afterBindEvents&&e.options.afterBindEvents.call(e)));this._fsm.changeWidgets=this._fsm.idArray.slice(0),this.transition("rendering")}}]),t}(n.State),l=s(u.prototype,"widgetBinder",[t.inject],{enumerable:!0,initializer:function(){return"widget-binder"}}),u);e.default=f}.apply(t,r))&&(e.exports=i)},function(e,t,n){var r,i;r=[t,n(1)],void 0!==(i=function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(){return this.promise=new Promise(function(e,t){this.resolve=e,this.reject=t}.bind(this)),this}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"_anyEvents",value:function(){this.deferUntilTransition()}},{key:"_onEnter",value:function(){var e=this,t=[],n={},r=void 0;this.cmpWidget=function(t,n){var r=e._fsm.idArray.indexOf(t),i=e._fsm.idArray.indexOf(n);return r>i?1:r<i?-1:0},this._fsm.changeWidgets.sort(function(t,n){var r=e._fsm.byId[t].options.renderDependence,i=e._fsm.byId[n].options.renderDependence;return r&&r.length?i&&i.length?r.indexOf(n)!==-1?1:i.indexOf(t)!==-1?-1:e.cmpWidget(t,n):r.indexOf(n)!==-1?1:e.cmpWidget(t,n):i&&i.length&&i.indexOf(t)!==-1?-1:e.cmpWidget(t,n)}),this.rendered=[];for(var i=0;i<this._fsm.changeWidgets.length;i++){var a=this._fsm.byId[this._fsm.changeWidgets[i]];if(a&&a.render&&(!a.options.conditionRender||a.options.conditionRender())){var s=new o;if(t.push(s.promise),n[this._fsm.changeWidgets[i]]=s.promise,a.options.renderDependence&&a.options.renderDependence.length){r=new Array(a.options.renderDependence.length);for(var u=0;u<a.options.renderDependence.length;u++)r[u]=n[a.options.renderDependence[u]]}else r=[];!function(t,n,r){Promise.all(n).then(function(){t.options.renderAsync?t.options.renderAsyncWrapper(function(){e.handle("renderWidget",t,r)}):e.handle("renderWidget",t,r)},e.handleException.bind(e))}(a,r,s)}}Promise.all(t).then(function(){n=null;for(var t=0;t<e.rendered.length;t++)e.emit(["RenderComplete[",e.rendered[t],"]"].join(""));e.emit("RenderComplete",e.rendered),e.transition("ready")},this.handleException.bind(this))}},{key:"_onExit",value:function(){this.rendered=[],this._fsm.changeWidgets=[]}},{key:"renderWidget",value:function(e,t){"render"===e.options.actionSequence[0]&&e.resolveContainer(),e.options.beforeRender&&e.options.beforeRender.call(e),this.rendered.push(e.ID),new Promise(function(t){var n=e.render();if(!n)return void t();var r=n.container.cloneNode(!1);r.innerHTML=n.html,n.container.parentNode.replaceChild(r,n.container),e.container=r,t()}).then(function(){e.options.afterRender&&e.options.afterRender.call(e),"render"===e.options.actionSequence[0]&&e.bindEvents&&!e.isBinded&&(e.options.beforeBindEvents&&e.options.beforeBindEvents.call(e),e.bindEvents(),e.options.afterBindEvents&&e.options.afterBindEvents.call(e),e.options.bindOnce&&(e.isBinded=!0)),t.resolve()}).catch(this.handleException.bind(this))}}]),t}(t.State);e.default=s}.apply(t,r))&&(e.exports=i)},function(e,t,n){var r,i;r=[t],void 0!==(i=function(e){"use strict";function t(e){for(var t="",n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];for(var o=0;o<r.length;o++)t+=e[o]+r[o];return t+=e[r.length],t.split(/(?:\r\n|\n|\r)/).map(function(e){return e.replace(/^\s+/gm,"")}).join(" ").trim()}Object.defineProperty(e,"__esModule",{value:!0}),e.default=t}.apply(t,r))&&(e.exports=i)},function(e,t,n){var r,i;r=[t,n(2),n(4),n(0),n(6),n(10),n(7),n(9),n(8),n(3),n(5),n(1)],void 0!==(i=function(e,t,n,r,i,o,a,s,u,l,c,f){"use strict";function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.handler=e.options=e.FsmStates=e.Fsm=e.FsmState=e.FsmDefault=e.Widget=e.inject=e.DI=e.assert=e.OptionsConflictResolver=e.OptionsConflictResolverManager=void 0,Object.defineProperty(e,"OptionsConflictResolver",{enumerable:!0,get:function(){return d(t).default}}),Object.defineProperty(e,"assert",{enumerable:!0,get:function(){return d(n).default}});var h=d(r),v=d(o),y=d(a),b=d(s),g=d(u),m=d(l),_=d(c),w=e.OptionsConflictResolverManager=y.default,O=e.DI=h.default;e.inject=r.inject,e.Widget=v.default,e.FsmDefault=f.Fsm,e.FsmState=f.State,e.Fsm=i.FSM,e.FsmStates=i.states,e.options=m.default,e.handler=_.default;O.bind("fsm",i.FSM),O.bind("options-conflict-resolver:manager",new w),O.bind("state:ready",i.states.ready),O.bind("state:registration",i.states.registration),O.bind("state:rendering",i.states.rendering),O.bind("logger",console);var E=function e(){p(this,e),O.bind("sham-ui",this),O.resolve("options-conflict-resolver:manager").registry(new g.default).registry(new b.default);var t=O.resolve("fsm");this.render=new t,this.render.run()};e.default=E}.apply(t,r))&&(e.exports=i)}])});

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(29), __webpack_require__(30), __webpack_require__(46), __webpack_require__(47), __webpack_require__(50), __webpack_require__(48), __webpack_require__(49), __webpack_require__(51), __webpack_require__(45), __webpack_require__(44)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _getOwnPropertyDescriptor, _getPrototypeOf, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _get2, _inherits2, _shamUi, _template, _audioPlayerEs) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = undefined;

    var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

    var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

    var _createClass3 = _interopRequireDefault(_createClass2);

    var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

    var _get3 = _interopRequireDefault(_get2);

    var _inherits3 = _interopRequireDefault(_inherits2);

    var _template2 = _interopRequireDefault(_template);

    var _audioPlayerEs2 = _interopRequireDefault(_audioPlayerEs);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    var _dec, _dec2, _dec3, _dec4, _dec5, _desc, _value, _class, _init, _init2, _init3, _init4, _init5, _init6, _init7, _init8, _init9, _class2, _temp;

    var Audio = (_dec = (0, _shamUi.handler)('click', '.play-pause'), _dec2 = (0, _shamUi.handler)('input', '.volume'), _dec3 = (0, _shamUi.handler)('input', '.timing'), _dec4 = (0, _shamUi.handler)('click', '.pre'), _dec5 = (0, _shamUi.handler)('click', '.next'), (_class = (_temp = _class2 = function (_Widget) {
        (0, _inherits3.default)(Audio, _Widget);

        function Audio() {
            (0, _classCallCheck3.default)(this, Audio);

            var _this = (0, _possibleConstructorReturn3.default)(this, (Audio.__proto__ || (0, _getPrototypeOf2.default)(Audio)).apply(this, arguments));

            var audio = new _audioPlayerEs2.default();
            Object.defineProperty(_this, 'audio', {
                get: function get() {
                    return audio;
                }
            });

            _this.isPlaying = false;
            return _this;
        }

        // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        // Options
        // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


        (0, _createClass3.default)(Audio, [{
            key: 'onPlay',
            value: function onPlay() {}
        }, {
            key: 'onPause',
            value: function onPause() {}
        }, {
            key: 'onTimingUpdate',
            value: function onTimingUpdate() {}
        }, {
            key: 'onLoading',
            value: function onLoading() {}
        }, {
            key: 'playPauseHandler',
            value: function playPauseHandler() {
                var buttonClassList = this.playPauseButton.classList;
                var iconClassList = this.playPauseButton.querySelector('.fa').classList;
                if (this.isPlaying) {
                    this.audio.pause();
                    buttonClassList.remove(this.options.PLAY_BUTTON_CLASS);
                    buttonClassList.add(this.options.PAUSE_BUTTON_CLASS);
                    iconClassList.remove('fa-pause');
                    iconClassList.add('fa-play');
                    this.options.onPause(this.audio);
                } else {
                    this.audio.play();
                    buttonClassList.remove(this.options.PAUSE_BUTTON_CLASS);
                    buttonClassList.add(this.options.PLAY_BUTTON_CLASS);
                    iconClassList.remove('fa-play');
                    iconClassList.add('fa-pause');
                    this.options.onPlay(this.audio);
                }
                this.isPlaying = !this.isPlaying;
            }
        }, {
            key: 'volumeHandler',
            value: function volumeHandler() {
                this.audio.setVolume(parseFloat(this.volumeSlider.value));
            }
        }, {
            key: 'timingUpdate',
            value: function timingUpdate() {
                var context = this.audio.audioCurrent;
                var slider = this.timingSlider;
                slider.max = context.duration;
                slider.value = context.currentTime;
            }
        }, {
            key: 'timingHandler',
            value: function timingHandler() {
                this.audio.audioCurrent.currentTime = this.timingSlider.value;
                this.options.onTimingUpdate(this.audio.audioCurrent.currentTime, this.audio);
            }
        }, {
            key: 'preButtonHandler',
            value: function preButtonHandler() {
                this.audio.pre();
            }
        }, {
            key: 'nextButtonHandler',
            value: function nextButtonHandler() {
                this.audio.next();
            }
        }, {
            key: 'bindEvents',
            value: function bindEvents() {
                (0, _get3.default)(Audio.prototype.__proto__ || (0, _getPrototypeOf2.default)(Audio.prototype), 'bindEvents', this).apply(this, arguments);
                var self = this;
                this.audio.src(this.options.trackURL).setCallBack({
                    loading: function loading(state, player) {
                        self.currentTrack.innerText = player.audioList[player.audioCurrentIndex];
                        self.options.onLoading(player);
                    }
                });

                this.bindedTimingUpdate = this.timingUpdate.bind(this);
                this.audio.audioCurrent.addEventListener('timeupdate', this.bindedTimingUpdate);
            }
        }, {
            key: 'html',
            value: function html() {
                return _template2.default;
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                (0, _get3.default)(Audio.prototype.__proto__ || (0, _getPrototypeOf2.default)(Audio.prototype), 'destroy', this).apply(this, arguments);
                this.audio.audioCurrent.removeEventListener('timeupdate', this.bindedTimingUpdate);
            }
        }, {
            key: 'playPauseButton',
            get: function get() {
                return this.container.querySelector(this.options.PLAY_PAUSE_BUTTON_SELECTOR);
            }
        }, {
            key: 'volumeSlider',
            get: function get() {
                return this.container.querySelector(this.options.VOLUME_SLIDER_SELECTOR);
            }
        }, {
            key: 'timingSlider',
            get: function get() {
                return this.container.querySelector(this.options.TIMING_SLIDER_SELECTOR);
            }
        }, {
            key: 'preButton',
            get: function get() {
                return this.container.querySelector(this.options.PRE_BUTTON_SELECTOR);
            }
        }, {
            key: 'nextButton',
            get: function get() {
                return this.container.querySelector(this.options.NEXT_BUTTON_SELECTOR);
            }
        }, {
            key: 'currentTrack',
            get: function get() {
                return this.container.querySelector(this.options.CURRENT_TRACK_SELECTOR);
            }
        }]);
        return Audio;
    }(_shamUi.Widget), _class2.trackURL = null, _class2.PLAY_PAUSE_BUTTON_SELECTOR = '.play-pause', _class2.VOLUME_SLIDER_SELECTOR = '.volume', _class2.CURRENT_TRACK_SELECTOR = '#current', _class2.TIMING_SLIDER_SELECTOR = '.timing', _class2.PLAY_BUTTON_CLASS = 'playing', _class2.PAUSE_BUTTON_CLASS = 'paused', _class2.PRE_BUTTON_SELECTOR = '.pre', _class2.NEXT_BUTTON_SELECTOR = '.next', _temp), (_applyDecoratedDescriptor(_class, 'trackURL', [_shamUi.options], (_init = (0, _getOwnPropertyDescriptor2.default)(_class, 'trackURL'), _init = _init ? _init.value : undefined, {
        enumerable: true,
        configurable: true,
        writable: true,
        initializer: function initializer() {
            return _init;
        }
    }), _class), _applyDecoratedDescriptor(_class, 'PLAY_PAUSE_BUTTON_SELECTOR', [_shamUi.options], (_init2 = (0, _getOwnPropertyDescriptor2.default)(_class, 'PLAY_PAUSE_BUTTON_SELECTOR'), _init2 = _init2 ? _init2.value : undefined, {
        enumerable: true,
        configurable: true,
        writable: true,
        initializer: function initializer() {
            return _init2;
        }
    }), _class), _applyDecoratedDescriptor(_class, 'VOLUME_SLIDER_SELECTOR', [_shamUi.options], (_init3 = (0, _getOwnPropertyDescriptor2.default)(_class, 'VOLUME_SLIDER_SELECTOR'), _init3 = _init3 ? _init3.value : undefined, {
        enumerable: true,
        configurable: true,
        writable: true,
        initializer: function initializer() {
            return _init3;
        }
    }), _class), _applyDecoratedDescriptor(_class, 'CURRENT_TRACK_SELECTOR', [_shamUi.options], (_init4 = (0, _getOwnPropertyDescriptor2.default)(_class, 'CURRENT_TRACK_SELECTOR'), _init4 = _init4 ? _init4.value : undefined, {
        enumerable: true,
        configurable: true,
        writable: true,
        initializer: function initializer() {
            return _init4;
        }
    }), _class), _applyDecoratedDescriptor(_class, 'TIMING_SLIDER_SELECTOR', [_shamUi.options], (_init5 = (0, _getOwnPropertyDescriptor2.default)(_class, 'TIMING_SLIDER_SELECTOR'), _init5 = _init5 ? _init5.value : undefined, {
        enumerable: true,
        configurable: true,
        writable: true,
        initializer: function initializer() {
            return _init5;
        }
    }), _class), _applyDecoratedDescriptor(_class, 'PLAY_BUTTON_CLASS', [_shamUi.options], (_init6 = (0, _getOwnPropertyDescriptor2.default)(_class, 'PLAY_BUTTON_CLASS'), _init6 = _init6 ? _init6.value : undefined, {
        enumerable: true,
        configurable: true,
        writable: true,
        initializer: function initializer() {
            return _init6;
        }
    }), _class), _applyDecoratedDescriptor(_class, 'PAUSE_BUTTON_CLASS', [_shamUi.options], (_init7 = (0, _getOwnPropertyDescriptor2.default)(_class, 'PAUSE_BUTTON_CLASS'), _init7 = _init7 ? _init7.value : undefined, {
        enumerable: true,
        configurable: true,
        writable: true,
        initializer: function initializer() {
            return _init7;
        }
    }), _class), _applyDecoratedDescriptor(_class, 'PRE_BUTTON_SELECTOR', [_shamUi.options], (_init8 = (0, _getOwnPropertyDescriptor2.default)(_class, 'PRE_BUTTON_SELECTOR'), _init8 = _init8 ? _init8.value : undefined, {
        enumerable: true,
        configurable: true,
        writable: true,
        initializer: function initializer() {
            return _init8;
        }
    }), _class), _applyDecoratedDescriptor(_class, 'NEXT_BUTTON_SELECTOR', [_shamUi.options], (_init9 = (0, _getOwnPropertyDescriptor2.default)(_class, 'NEXT_BUTTON_SELECTOR'), _init9 = _init9 ? _init9.value : undefined, {
        enumerable: true,
        configurable: true,
        writable: true,
        initializer: function initializer() {
            return _init9;
        }
    }), _class), _applyDecoratedDescriptor(_class.prototype, 'onPlay', [_shamUi.options], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'onPlay'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onPause', [_shamUi.options], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'onPause'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onTimingUpdate', [_shamUi.options], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'onTimingUpdate'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onLoading', [_shamUi.options], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'onLoading'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'playPauseHandler', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'playPauseHandler'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'volumeHandler', [_dec2], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'volumeHandler'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'timingHandler', [_dec3], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'timingHandler'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'preButtonHandler', [_dec4], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'preButtonHandler'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'nextButtonHandler', [_dec5], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'nextButtonHandler'), _class.prototype)), _class));
    exports.default = Audio;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hdWRpby5qcyJdLCJuYW1lcyI6WyJBdWRpbyIsImFyZ3VtZW50cyIsImF1ZGlvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJpc1BsYXlpbmciLCJidXR0b25DbGFzc0xpc3QiLCJwbGF5UGF1c2VCdXR0b24iLCJjbGFzc0xpc3QiLCJpY29uQ2xhc3NMaXN0IiwicXVlcnlTZWxlY3RvciIsInBhdXNlIiwicmVtb3ZlIiwib3B0aW9ucyIsIlBMQVlfQlVUVE9OX0NMQVNTIiwiYWRkIiwiUEFVU0VfQlVUVE9OX0NMQVNTIiwib25QYXVzZSIsInBsYXkiLCJvblBsYXkiLCJzZXRWb2x1bWUiLCJwYXJzZUZsb2F0Iiwidm9sdW1lU2xpZGVyIiwidmFsdWUiLCJjb250ZXh0IiwiYXVkaW9DdXJyZW50Iiwic2xpZGVyIiwidGltaW5nU2xpZGVyIiwibWF4IiwiZHVyYXRpb24iLCJjdXJyZW50VGltZSIsIm9uVGltaW5nVXBkYXRlIiwicHJlIiwibmV4dCIsInNlbGYiLCJzcmMiLCJ0cmFja1VSTCIsInNldENhbGxCYWNrIiwibG9hZGluZyIsInN0YXRlIiwicGxheWVyIiwiY3VycmVudFRyYWNrIiwiaW5uZXJUZXh0IiwiYXVkaW9MaXN0IiwiYXVkaW9DdXJyZW50SW5kZXgiLCJvbkxvYWRpbmciLCJiaW5kZWRUaW1pbmdVcGRhdGUiLCJ0aW1pbmdVcGRhdGUiLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb250YWluZXIiLCJQTEFZX1BBVVNFX0JVVFRPTl9TRUxFQ1RPUiIsIlZPTFVNRV9TTElERVJfU0VMRUNUT1IiLCJUSU1JTkdfU0xJREVSX1NFTEVDVE9SIiwiUFJFX0JVVFRPTl9TRUxFQ1RPUiIsIk5FWFRfQlVUVE9OX1NFTEVDVE9SIiwiQ1VSUkVOVF9UUkFDS19TRUxFQ1RPUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBSXFCQSxLLFdBcUZoQixxQkFBUyxPQUFULEVBQWtCLGFBQWxCLEMsVUFzQkEscUJBQVMsT0FBVCxFQUFrQixTQUFsQixDLFVBWUEscUJBQVMsT0FBVCxFQUFrQixTQUFsQixDLFVBTUEscUJBQVMsT0FBVCxFQUFrQixNQUFsQixDLFVBS0EscUJBQVMsT0FBVCxFQUFrQixPQUFsQixDOzs7QUFqSUQseUJBQWM7QUFBQTs7QUFBQSw2SUFDQUMsU0FEQTs7QUFHVixnQkFBTUMsUUFBUSw2QkFBZDtBQUNBQyxtQkFBT0MsY0FBUCxRQUE2QixPQUE3QixFQUFzQztBQUNsQ0MsbUJBRGtDLGlCQUM1QjtBQUFFLDJCQUFPSCxLQUFQO0FBQWU7QUFEVyxhQUF0Qzs7QUFJQSxrQkFBS0ksU0FBTCxHQUFpQixLQUFqQjtBQVJVO0FBU2I7O0FBRUQ7QUFDQTtBQUNBOzs7OztxQ0E2QlMsQ0FBRTs7O3NDQUdELENBQUU7Ozs2Q0FHSyxDQUFFOzs7d0NBR1AsQ0FBRTs7OytDQWtDSztBQUNmLG9CQUFNQyxrQkFBa0IsS0FBS0MsZUFBTCxDQUFxQkMsU0FBN0M7QUFDQSxvQkFBTUMsZ0JBQWdCLEtBQUtGLGVBQUwsQ0FBcUJHLGFBQXJCLENBQW9DLEtBQXBDLEVBQTRDRixTQUFsRTtBQUNBLG9CQUFLLEtBQUtILFNBQVYsRUFBc0I7QUFDbEIseUJBQUtKLEtBQUwsQ0FBV1UsS0FBWDtBQUNBTCxvQ0FBZ0JNLE1BQWhCLENBQXdCLEtBQUtDLE9BQUwsQ0FBYUMsaUJBQXJDO0FBQ0FSLG9DQUFnQlMsR0FBaEIsQ0FBcUIsS0FBS0YsT0FBTCxDQUFhRyxrQkFBbEM7QUFDQVAsa0NBQWNHLE1BQWQsQ0FBc0IsVUFBdEI7QUFDQUgsa0NBQWNNLEdBQWQsQ0FBbUIsU0FBbkI7QUFDQSx5QkFBS0YsT0FBTCxDQUFhSSxPQUFiLENBQXNCLEtBQUtoQixLQUEzQjtBQUNILGlCQVBELE1BT087QUFDSCx5QkFBS0EsS0FBTCxDQUFXaUIsSUFBWDtBQUNBWixvQ0FBZ0JNLE1BQWhCLENBQXdCLEtBQUtDLE9BQUwsQ0FBYUcsa0JBQXJDO0FBQ0FWLG9DQUFnQlMsR0FBaEIsQ0FBcUIsS0FBS0YsT0FBTCxDQUFhQyxpQkFBbEM7QUFDQUwsa0NBQWNHLE1BQWQsQ0FBc0IsU0FBdEI7QUFDQUgsa0NBQWNNLEdBQWQsQ0FBbUIsVUFBbkI7QUFDQSx5QkFBS0YsT0FBTCxDQUFhTSxNQUFiLENBQXFCLEtBQUtsQixLQUExQjtBQUNIO0FBQ0QscUJBQUtJLFNBQUwsR0FBaUIsQ0FBQyxLQUFLQSxTQUF2QjtBQUNIOzs7NENBR2U7QUFDWixxQkFBS0osS0FBTCxDQUFXbUIsU0FBWCxDQUFzQkMsV0FBWSxLQUFLQyxZQUFMLENBQWtCQyxLQUE5QixDQUF0QjtBQUNIOzs7MkNBRWM7QUFDWCxvQkFBTUMsVUFBVSxLQUFLdkIsS0FBTCxDQUFXd0IsWUFBM0I7QUFDQSxvQkFBTUMsU0FBUyxLQUFLQyxZQUFwQjtBQUNBRCx1QkFBT0UsR0FBUCxHQUFhSixRQUFRSyxRQUFyQjtBQUNBSCx1QkFBT0gsS0FBUCxHQUFlQyxRQUFRTSxXQUF2QjtBQUNIOzs7NENBR2U7QUFDWixxQkFBSzdCLEtBQUwsQ0FBV3dCLFlBQVgsQ0FBd0JLLFdBQXhCLEdBQXNDLEtBQUtILFlBQUwsQ0FBa0JKLEtBQXhEO0FBQ0EscUJBQUtWLE9BQUwsQ0FBYWtCLGNBQWIsQ0FBNkIsS0FBSzlCLEtBQUwsQ0FBV3dCLFlBQVgsQ0FBd0JLLFdBQXJELEVBQWtFLEtBQUs3QixLQUF2RTtBQUNIOzs7K0NBR2tCO0FBQ2YscUJBQUtBLEtBQUwsQ0FBVytCLEdBQVg7QUFDSDs7O2dEQUdtQjtBQUNoQixxQkFBSy9CLEtBQUwsQ0FBV2dDLElBQVg7QUFDSDs7O3lDQUVZO0FBQ1QsZ0pBQXFCakMsU0FBckI7QUFDQSxvQkFBTWtDLE9BQU8sSUFBYjtBQUNBLHFCQUFLakMsS0FBTCxDQUNLa0MsR0FETCxDQUNVLEtBQUt0QixPQUFMLENBQWF1QixRQUR2QixFQUVLQyxXQUZMLENBRWtCO0FBQ1ZDLDJCQURVLG1CQUNEQyxLQURDLEVBQ01DLE1BRE4sRUFDZTtBQUNyQk4sNkJBQUtPLFlBQUwsQ0FBa0JDLFNBQWxCLEdBQThCRixPQUFPRyxTQUFQLENBQWtCSCxPQUFPSSxpQkFBekIsQ0FBOUI7QUFDQVYsNkJBQUtyQixPQUFMLENBQWFnQyxTQUFiLENBQXdCTCxNQUF4QjtBQUNIO0FBSlMsaUJBRmxCOztBQVVBLHFCQUFLTSxrQkFBTCxHQUEwQixLQUFLQyxZQUFMLENBQWtCQyxJQUFsQixDQUF3QixJQUF4QixDQUExQjtBQUNBLHFCQUFLL0MsS0FBTCxDQUFXd0IsWUFBWCxDQUF3QndCLGdCQUF4QixDQUEwQyxZQUExQyxFQUF3RCxLQUFLSCxrQkFBN0Q7QUFDSDs7O21DQUVNO0FBQUU7QUFBaUI7OztzQ0FFaEI7QUFDTiw2SUFBa0I5QyxTQUFsQjtBQUNBLHFCQUFLQyxLQUFMLENBQVd3QixZQUFYLENBQXdCeUIsbUJBQXhCLENBQTZDLFlBQTdDLEVBQTJELEtBQUtKLGtCQUFoRTtBQUNIOzs7Z0NBbkdxQjtBQUNsQix1QkFBTyxLQUFLSyxTQUFMLENBQWV6QyxhQUFmLENBQThCLEtBQUtHLE9BQUwsQ0FBYXVDLDBCQUEzQyxDQUFQO0FBQ0g7OztnQ0FFa0I7QUFDZix1QkFBTyxLQUFLRCxTQUFMLENBQWV6QyxhQUFmLENBQThCLEtBQUtHLE9BQUwsQ0FBYXdDLHNCQUEzQyxDQUFQO0FBQ0g7OztnQ0FFa0I7QUFDZix1QkFBTyxLQUFLRixTQUFMLENBQWV6QyxhQUFmLENBQThCLEtBQUtHLE9BQUwsQ0FBYXlDLHNCQUEzQyxDQUFQO0FBQ0g7OztnQ0FFZTtBQUNaLHVCQUFPLEtBQUtILFNBQUwsQ0FBZXpDLGFBQWYsQ0FBOEIsS0FBS0csT0FBTCxDQUFhMEMsbUJBQTNDLENBQVA7QUFDSDs7O2dDQUVnQjtBQUNiLHVCQUFPLEtBQUtKLFNBQUwsQ0FBZXpDLGFBQWYsQ0FBOEIsS0FBS0csT0FBTCxDQUFhMkMsb0JBQTNDLENBQVA7QUFDSDs7O2dDQUVrQjtBQUNmLHVCQUFPLEtBQUtMLFNBQUwsQ0FBZXpDLGFBQWYsQ0FBOEIsS0FBS0csT0FBTCxDQUFhNEMsc0JBQTNDLENBQVA7QUFDSDs7OytCQWhFTXJCLFEsR0FBVyxJLFVBR1hnQiwwQixHQUE2QixhLFVBRzdCQyxzQixHQUF5QixTLFVBR3pCSSxzQixHQUF5QixVLFVBR3pCSCxzQixHQUF5QixTLFVBR3pCeEMsaUIsR0FBb0IsUyxVQUdwQkUsa0IsR0FBcUIsUSxVQUdyQnVDLG1CLEdBQXNCLE0sVUFHdEJDLG9CLEdBQXVCLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JBeENiekQsSyIsImZpbGUiOiJhdWRpby5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zaGFtL3dvcmsvc2hhbXVpLWF1ZGlvLXdpZGdldCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdpZGdldCwgb3B0aW9ucywgaGFuZGxlciB9IGZyb20gJ3NoYW0tdWknO1xuaW1wb3J0IFRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUnO1xuaW1wb3J0IFBsYXllciBmcm9tICdhdWRpby1wbGF5ZXItZXM2JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW8gZXh0ZW5kcyBXaWRnZXQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciggLi4uYXJndW1lbnRzICk7XG5cbiAgICAgICAgY29uc3QgYXVkaW8gPSBuZXcgUGxheWVyKCk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGhpcywgJ2F1ZGlvJywge1xuICAgICAgICAgICAgZ2V0KCkgeyByZXR1cm4gYXVkaW87IH1cbiAgICAgICAgfSApO1xuXG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjpcbiAgICAvLyBPcHRpb25zXG4gICAgLy8gOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjpcbiAgICBAb3B0aW9uc1xuICAgIHN0YXRpYyB0cmFja1VSTCA9IG51bGw7XG5cbiAgICBAb3B0aW9uc1xuICAgIHN0YXRpYyBQTEFZX1BBVVNFX0JVVFRPTl9TRUxFQ1RPUiA9ICcucGxheS1wYXVzZSc7XG5cbiAgICBAb3B0aW9uc1xuICAgIHN0YXRpYyBWT0xVTUVfU0xJREVSX1NFTEVDVE9SID0gJy52b2x1bWUnO1xuXG4gICAgQG9wdGlvbnNcbiAgICBzdGF0aWMgQ1VSUkVOVF9UUkFDS19TRUxFQ1RPUiA9ICcjY3VycmVudCc7XG5cbiAgICBAb3B0aW9uc1xuICAgIHN0YXRpYyBUSU1JTkdfU0xJREVSX1NFTEVDVE9SID0gJy50aW1pbmcnO1xuXG4gICAgQG9wdGlvbnNcbiAgICBzdGF0aWMgUExBWV9CVVRUT05fQ0xBU1MgPSAncGxheWluZyc7XG5cbiAgICBAb3B0aW9uc1xuICAgIHN0YXRpYyBQQVVTRV9CVVRUT05fQ0xBU1MgPSAncGF1c2VkJztcblxuICAgIEBvcHRpb25zXG4gICAgc3RhdGljIFBSRV9CVVRUT05fU0VMRUNUT1IgPSAnLnByZSc7XG5cbiAgICBAb3B0aW9uc1xuICAgIHN0YXRpYyBORVhUX0JVVFRPTl9TRUxFQ1RPUiA9ICcubmV4dCc7XG5cbiAgICBAb3B0aW9uc1xuICAgIG9uUGxheSgpIHt9XG5cbiAgICBAb3B0aW9uc1xuICAgIG9uUGF1c2UoKSB7fVxuXG4gICAgQG9wdGlvbnNcbiAgICBvblRpbWluZ1VwZGF0ZSgpIHt9XG5cbiAgICBAb3B0aW9uc1xuICAgIG9uTG9hZGluZygpIHt9XG5cbiAgICAvLyA6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OlxuICAgIC8vIEVsZW1lbnRzXG4gICAgLy8gOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjpcblxuICAgIGdldCBwbGF5UGF1c2VCdXR0b24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCB0aGlzLm9wdGlvbnMuUExBWV9QQVVTRV9CVVRUT05fU0VMRUNUT1IgKTtcbiAgICB9XG5cbiAgICBnZXQgdm9sdW1lU2xpZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvciggdGhpcy5vcHRpb25zLlZPTFVNRV9TTElERVJfU0VMRUNUT1IgKTtcbiAgICB9XG5cbiAgICBnZXQgdGltaW5nU2xpZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvciggdGhpcy5vcHRpb25zLlRJTUlOR19TTElERVJfU0VMRUNUT1IgKTtcbiAgICB9XG5cbiAgICBnZXQgcHJlQnV0dG9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvciggdGhpcy5vcHRpb25zLlBSRV9CVVRUT05fU0VMRUNUT1IgKTtcbiAgICB9XG5cbiAgICBnZXQgbmV4dEJ1dHRvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoIHRoaXMub3B0aW9ucy5ORVhUX0JVVFRPTl9TRUxFQ1RPUiApO1xuICAgIH1cblxuICAgIGdldCBjdXJyZW50VHJhY2soKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCB0aGlzLm9wdGlvbnMuQ1VSUkVOVF9UUkFDS19TRUxFQ1RPUiApO1xuICAgIH1cblxuICAgIC8vIDo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6XG4gICAgLy8gSGFuZGxlcnNcbiAgICAvLyA6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OlxuICAgIEBoYW5kbGVyKCAnY2xpY2snLCAnLnBsYXktcGF1c2UnIClcbiAgICBwbGF5UGF1c2VIYW5kbGVyKCkge1xuICAgICAgICBjb25zdCBidXR0b25DbGFzc0xpc3QgPSB0aGlzLnBsYXlQYXVzZUJ1dHRvbi5jbGFzc0xpc3Q7XG4gICAgICAgIGNvbnN0IGljb25DbGFzc0xpc3QgPSB0aGlzLnBsYXlQYXVzZUJ1dHRvbi5xdWVyeVNlbGVjdG9yKCAnLmZhJyApLmNsYXNzTGlzdDtcbiAgICAgICAgaWYgKCB0aGlzLmlzUGxheWluZyApIHtcbiAgICAgICAgICAgIHRoaXMuYXVkaW8ucGF1c2UoKTtcbiAgICAgICAgICAgIGJ1dHRvbkNsYXNzTGlzdC5yZW1vdmUoIHRoaXMub3B0aW9ucy5QTEFZX0JVVFRPTl9DTEFTUyApO1xuICAgICAgICAgICAgYnV0dG9uQ2xhc3NMaXN0LmFkZCggdGhpcy5vcHRpb25zLlBBVVNFX0JVVFRPTl9DTEFTUyApO1xuICAgICAgICAgICAgaWNvbkNsYXNzTGlzdC5yZW1vdmUoICdmYS1wYXVzZScgKTtcbiAgICAgICAgICAgIGljb25DbGFzc0xpc3QuYWRkKCAnZmEtcGxheScgKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vblBhdXNlKCB0aGlzLmF1ZGlvICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvLnBsYXkoKTtcbiAgICAgICAgICAgIGJ1dHRvbkNsYXNzTGlzdC5yZW1vdmUoIHRoaXMub3B0aW9ucy5QQVVTRV9CVVRUT05fQ0xBU1MgKTtcbiAgICAgICAgICAgIGJ1dHRvbkNsYXNzTGlzdC5hZGQoIHRoaXMub3B0aW9ucy5QTEFZX0JVVFRPTl9DTEFTUyApO1xuICAgICAgICAgICAgaWNvbkNsYXNzTGlzdC5yZW1vdmUoICdmYS1wbGF5JyApO1xuICAgICAgICAgICAgaWNvbkNsYXNzTGlzdC5hZGQoICdmYS1wYXVzZScgKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vblBsYXkoIHRoaXMuYXVkaW8gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzUGxheWluZyA9ICF0aGlzLmlzUGxheWluZztcbiAgICB9XG5cbiAgICBAaGFuZGxlciggJ2lucHV0JywgJy52b2x1bWUnIClcbiAgICB2b2x1bWVIYW5kbGVyKCkge1xuICAgICAgICB0aGlzLmF1ZGlvLnNldFZvbHVtZSggcGFyc2VGbG9hdCggdGhpcy52b2x1bWVTbGlkZXIudmFsdWUgKSApO1xuICAgIH1cblxuICAgIHRpbWluZ1VwZGF0ZSgpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuYXVkaW8uYXVkaW9DdXJyZW50O1xuICAgICAgICBjb25zdCBzbGlkZXIgPSB0aGlzLnRpbWluZ1NsaWRlcjtcbiAgICAgICAgc2xpZGVyLm1heCA9IGNvbnRleHQuZHVyYXRpb247XG4gICAgICAgIHNsaWRlci52YWx1ZSA9IGNvbnRleHQuY3VycmVudFRpbWU7XG4gICAgfVxuXG4gICAgQGhhbmRsZXIoICdpbnB1dCcsICcudGltaW5nJyApXG4gICAgdGltaW5nSGFuZGxlcigpIHtcbiAgICAgICAgdGhpcy5hdWRpby5hdWRpb0N1cnJlbnQuY3VycmVudFRpbWUgPSB0aGlzLnRpbWluZ1NsaWRlci52YWx1ZTtcbiAgICAgICAgdGhpcy5vcHRpb25zLm9uVGltaW5nVXBkYXRlKCB0aGlzLmF1ZGlvLmF1ZGlvQ3VycmVudC5jdXJyZW50VGltZSwgdGhpcy5hdWRpbyApO1xuICAgIH1cblxuICAgIEBoYW5kbGVyKCAnY2xpY2snLCAnLnByZScgKVxuICAgIHByZUJ1dHRvbkhhbmRsZXIoKSB7XG4gICAgICAgIHRoaXMuYXVkaW8ucHJlKCk7XG4gICAgfVxuXG4gICAgQGhhbmRsZXIoICdjbGljaycsICcubmV4dCcgKVxuICAgIG5leHRCdXR0b25IYW5kbGVyKCkge1xuICAgICAgICB0aGlzLmF1ZGlvLm5leHQoKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICBzdXBlci5iaW5kRXZlbnRzKCAuLi5hcmd1bWVudHMgKTtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuYXVkaW9cbiAgICAgICAgICAgIC5zcmMoIHRoaXMub3B0aW9ucy50cmFja1VSTCApXG4gICAgICAgICAgICAuc2V0Q2FsbEJhY2soIHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nKCBzdGF0ZSwgcGxheWVyICkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRUcmFjay5pbm5lclRleHQgPSBwbGF5ZXIuYXVkaW9MaXN0WyBwbGF5ZXIuYXVkaW9DdXJyZW50SW5kZXggXTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5vcHRpb25zLm9uTG9hZGluZyggcGxheWVyIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IClcbiAgICAgICAgO1xuXG4gICAgICAgIHRoaXMuYmluZGVkVGltaW5nVXBkYXRlID0gdGhpcy50aW1pbmdVcGRhdGUuYmluZCggdGhpcyApO1xuICAgICAgICB0aGlzLmF1ZGlvLmF1ZGlvQ3VycmVudC5hZGRFdmVudExpc3RlbmVyKCAndGltZXVwZGF0ZScsIHRoaXMuYmluZGVkVGltaW5nVXBkYXRlICk7XG4gICAgfVxuXG4gICAgaHRtbCgpIHsgcmV0dXJuIFRlbXBsYXRlIH07XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBzdXBlci5kZXN0cm95KCAuLi5hcmd1bWVudHMgKTtcbiAgICAgICAgdGhpcy5hdWRpby5hdWRpb0N1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RpbWV1cGRhdGUnLCB0aGlzLmJpbmRlZFRpbWluZ1VwZGF0ZSApO1xuICAgIH1cbn1cbiJdfQ==

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(58), __esModule: true };

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(59), __esModule: true };

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(62), __esModule: true };

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(63), __esModule: true };

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(64), __esModule: true };

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(83);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(84);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(85);
var $Object = __webpack_require__(0).Object;
module.exports = function getOwnPropertyDescriptor(it, key){
  return $Object.getOwnPropertyDescriptor(it, key);
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(86);
module.exports = __webpack_require__(0).Object.getPrototypeOf;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(87);
module.exports = __webpack_require__(0).Object.setPrototypeOf;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(90);
__webpack_require__(88);
__webpack_require__(91);
__webpack_require__(92);
module.exports = __webpack_require__(0).Symbol;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(89);
__webpack_require__(93);
module.exports = __webpack_require__(28).f('iterator');

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(2)
  , toLength  = __webpack_require__(81)
  , toIndex   = __webpack_require__(80);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(12)
  , gOPS    = __webpack_require__(38)
  , pIE     = __webpack_require__(21);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(32);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(32);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(19)
  , descriptor     = __webpack_require__(13)
  , setToStringTag = __webpack_require__(22)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(8)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(12)
  , toIObject = __webpack_require__(2);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(14)('meta')
  , isObject = __webpack_require__(11)
  , has      = __webpack_require__(4)
  , setDesc  = __webpack_require__(5).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(10)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(5)
  , anObject = __webpack_require__(9)
  , getKeys  = __webpack_require__(12);

module.exports = __webpack_require__(3) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(2)
  , gOPN      = __webpack_require__(37).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(11)
  , anObject = __webpack_require__(9);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(33)(Function.call, __webpack_require__(20).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(25)
  , defined   = __webpack_require__(15);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(25)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(25)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(66)
  , step             = __webpack_require__(73)
  , Iterators        = __webpack_require__(17)
  , toIObject        = __webpack_require__(2);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(36)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(6)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(19)});

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(6);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(3), 'Object', {defineProperty: __webpack_require__(5).f});

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = __webpack_require__(2)
  , $getOwnPropertyDescriptor = __webpack_require__(20).f;

__webpack_require__(41)('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = __webpack_require__(43)
  , $getPrototypeOf = __webpack_require__(39);

__webpack_require__(41)('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(6);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(78).set});

/***/ }),
/* 88 */
/***/ (function(module, exports) {



/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(79)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(36)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(1)
  , has            = __webpack_require__(4)
  , DESCRIPTORS    = __webpack_require__(3)
  , $export        = __webpack_require__(6)
  , redefine       = __webpack_require__(42)
  , META           = __webpack_require__(75).KEY
  , $fails         = __webpack_require__(10)
  , shared         = __webpack_require__(24)
  , setToStringTag = __webpack_require__(22)
  , uid            = __webpack_require__(14)
  , wks            = __webpack_require__(8)
  , wksExt         = __webpack_require__(28)
  , wksDefine      = __webpack_require__(27)
  , keyOf          = __webpack_require__(74)
  , enumKeys       = __webpack_require__(68)
  , isArray        = __webpack_require__(71)
  , anObject       = __webpack_require__(9)
  , toIObject      = __webpack_require__(2)
  , toPrimitive    = __webpack_require__(26)
  , createDesc     = __webpack_require__(13)
  , _create        = __webpack_require__(19)
  , gOPNExt        = __webpack_require__(77)
  , $GOPD          = __webpack_require__(20)
  , $DP            = __webpack_require__(5)
  , $keys          = __webpack_require__(12)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(37).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(21).f  = $propertyIsEnumerable;
  __webpack_require__(38).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(18)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(7)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27)('asyncIterator');

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27)('observable');

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(82);
var global        = __webpack_require__(1)
  , hide          = __webpack_require__(7)
  , Iterators     = __webpack_require__(17)
  , TO_STRING_TAG = __webpack_require__(8)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=sham-ui-audio-widget.js.map

/***/ })
/******/ ]);
});
//# sourceMappingURL=bundle.js.map
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["NumericKeyboard"] = factory(require("@angular/core"), require("@angular/common"));
	else
		root["NumericKeyboard"] = factory(root["ng"], root["ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_86__, __WEBPACK_EXTERNAL_MODULE_150__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 148);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(25)('wks');
var uid = __webpack_require__(20);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(12)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(5);
var createDesc = __webpack_require__(18);
module.exports = __webpack_require__(3) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(41);
var toPrimitive = __webpack_require__(34);
var dP = Object.defineProperty;

exports.f = __webpack_require__(3) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ZERO = exports.ZERO = 0;
var ONE = exports.ONE = 1;
var TWO = exports.TWO = 2;
var THREE = exports.THREE = 3;
var FOUR = exports.FOUR = 4;
var FIVE = exports.FIVE = 5;
var SIX = exports.SIX = 6;
var SEVEN = exports.SEVEN = 7;
var EIGHT = exports.EIGHT = 8;
var NINE = exports.NINE = 9;
var DOT = exports.DOT = '.';
var DEL = exports.DEL = 'del';
var ENTER = exports.ENTER = 'enter';
var ESC = exports.ESC = 'esc';

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(0);
var ctx = __webpack_require__(33);
var hide = __webpack_require__(4);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
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
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
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
/* 10 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(29);
var defined = __webpack_require__(15);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(49), __esModule: true };

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(25)('keys');
var uid = __webpack_require__(20);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(42);
var enumBugKeys = __webpack_require__(26);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(15);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(75);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 24 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(5).f;
var has = __webpack_require__(8);
var TAG = __webpack_require__(1)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(24);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(36);
var $export = __webpack_require__(9);
var redefine = __webpack_require__(45);
var hide = __webpack_require__(4);
var has = __webpack_require__(8);
var Iterators = __webpack_require__(10);
var $iterCreate = __webpack_require__(61);
var setToStringTag = __webpack_require__(27);
var getPrototypeOf = __webpack_require__(46);
var ITERATOR = __webpack_require__(1)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(67), __esModule: true };

/***/ }),
/* 32 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(51);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(14);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(7);
var dPs = __webpack_require__(62);
var enumBugKeys = __webpack_require__(26);
var IE_PROTO = __webpack_require__(17)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(28)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(63).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(64)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(30)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(31);

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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(3) && !__webpack_require__(12)(function () {
  return Object.defineProperty(__webpack_require__(28)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(8);
var toIObject = __webpack_require__(11);
var arrayIndexOf = __webpack_require__(53)(false);
var IE_PROTO = __webpack_require__(17)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(16);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
var global = __webpack_require__(2);
var hide = __webpack_require__(4);
var Iterators = __webpack_require__(10);
var TO_STRING_TAG = __webpack_require__(1)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(8);
var toObject = __webpack_require__(21);
var IE_PROTO = __webpack_require__(17)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(66);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(10);
module.exports = __webpack_require__(0).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(31);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50);
module.exports = __webpack_require__(0).Object.assign;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(9);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(52) });


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(19);
var gOPS = __webpack_require__(35);
var pIE = __webpack_require__(32);
var toObject = __webpack_require__(21);
var IObject = __webpack_require__(29);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(12)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(11);
var toLength = __webpack_require__(43);
var toAbsoluteIndex = __webpack_require__(54);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(16);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mixins = exports.Options = exports.Key = undefined;

var _getIterator2 = __webpack_require__(56);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _assign = __webpack_require__(13);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(39);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(40);

var _createClass3 = _interopRequireDefault(_createClass2);

var _theme = __webpack_require__(69);

var _theme2 = _interopRequireDefault(_theme);

var _layouts = __webpack_require__(71);

var _layouts2 = _interopRequireDefault(_layouts);

var _keys = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Key = exports.Key = function () {
  function Key(code) {
    (0, _classCallCheck3.default)(this, Key);

    this._code = code;
    this._label = code;
    this._style = null;
    this._activeStyle = null;
  }

  (0, _createClass3.default)(Key, [{
    key: 'addLabel',
    value: function addLabel(label) {
      this._label = label;
    }
  }, {
    key: 'addStyle',
    value: function addStyle(style) {
      var active = {};
      for (var name in style) {
        var s = style[name];
        if (Array.isArray(s) && s.length === 2) {
          style[name] = s[0];
          active[name] = s;
        }
      }
      this._style = style;
      this._activeStyle = active;
    }
  }, {
    key: 'active',
    value: function active(target) {
      if (this._activeStyle) {
        for (var name in this._activeStyle) {
          target.style[name] = this._activeStyle[name][1];
        }
      }
    }
  }, {
    key: 'deactive',
    value: function deactive(target) {
      if (this._activeStyle) {
        for (var name in this._activeStyle) {
          target.style[name] = this._activeStyle[name][0];
        }
      }
    }
  }, {
    key: 'code',
    get: function get() {
      return this._code;
    }
  }, {
    key: 'icon',
    get: function get() {
      return this._label;
    }
  }, {
    key: 'style',
    get: function get() {
      return this._style;
    }
  }]);
  return Key;
}();

var Options = exports.Options = {
  layout: 'number',
  theme: 'default',
  entertext: 'enter'
};

var Mixins = exports.Mixins = {
  init: function init(options) {
    var layout = options.layout,
        theme = options.theme,
        entertext = options.entertext;

    var keys = {};
    if (typeof layout === 'string') {
      if (!_layouts2.default.hasOwnProperty(layout)) {
        throw new Error(layout + ' is not a build-in layout.');
      }
      layout = _layouts2.default[layout];
    } else {
      if (!Array.isArray(layout) || !layout.every(function (i) {
        return Array.isArray(i);
      })) {
        throw new Error('custom layout must be a two-dimensional array.');
      }
    }

    if (typeof theme === 'string') {
      if (!_theme2.default.hasOwnProperty(theme)) {
        throw new Error(theme + ' is not a build-in theme.');
      }
      theme = _theme2.default[theme];
    } else {
      theme = (0, _assign2.default)({}, _theme2.default.default, theme);
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (0, _getIterator3.default)(layout), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var r = _step.value;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = (0, _getIterator3.default)(r), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var c = _step2.value;

            keys[c.key] = new Key(c.key);
            keys[c.key].addStyle((0, _assign2.default)({}, theme.global, theme.key[c.key]));
            if (c.key === _keys.ENTER) {
              keys[c.key].addLabel(entertext);
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    this.kp = (0, _assign2.default)({}, options);
    this.ks = {
      layout: layout,
      theme: theme,
      keys: keys
    };
  },
  destroy: function destroy() {},
  set: function set(key, value) {
    this.ks[key] = value;
  },
  dispatch: function dispatch() /* event, ...args */{
    throw new Error('dispatch method must be overrided!');
  },
  onTouchstart: function onTouchstart(key, event) {
    key.active(event.target);
  },
  onTouchend: function onTouchend(key, event) {
    key.deactive(event.target);
    //event.stopPropagation()
    this.dispatch('press', key.code);
  }
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(57), __esModule: true };

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
__webpack_require__(38);
module.exports = __webpack_require__(65);


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(59);
var step = __webpack_require__(60);
var Iterators = __webpack_require__(10);
var toIObject = __webpack_require__(11);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(30)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(37);
var descriptor = __webpack_require__(18);
var setToStringTag = __webpack_require__(27);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(4)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(5);
var anObject = __webpack_require__(7);
var getKeys = __webpack_require__(19);

module.exports = __webpack_require__(3) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(16);
var defined = __webpack_require__(15);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var get = __webpack_require__(47);
module.exports = __webpack_require__(0).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(24);
var TAG = __webpack_require__(1)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(68);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(3), 'Object', { defineProperty: __webpack_require__(5).f });


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = __webpack_require__(70);

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  default: _default2.default
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(48);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _keys = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  global: {
    color: '#000000',
    backgroundColor: ['#ffffff', '#929ca8']
  },
  key: (0, _defineProperty3.default)({}, _keys.ENTER, {
    color: '#ffffff',
    backgroundColor: ['#007aff', '#0051a8']
  })
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _number = __webpack_require__(72);

var _number2 = _interopRequireDefault(_number);

var _tel = __webpack_require__(73);

var _tel2 = _interopRequireDefault(_tel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  number: _number2.default,
  tel: _tel2.default
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(6);

var keys = _interopRequireWildcard(_keys);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = [[{
  key: keys.ONE
}, {
  key: keys.TWO
}, {
  key: keys.THREE
}, {
  key: keys.DEL,
  rowspan: 2
}], [{
  key: keys.FOUR
}, {
  key: keys.FIVE
}, {
  key: keys.SIX
}], [{
  key: keys.SEVEN
}, {
  key: keys.EIGHT
}, {
  key: keys.NINE
}, {
  key: keys.ENTER,
  rowspan: 2
}], [{
  key: keys.DOT
}, {
  key: keys.ZERO
}, {
  key: keys.ESC
}]];

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(6);

var keys = _interopRequireWildcard(_keys);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = [[{
  key: keys.ONE
}, {
  key: keys.TWO
}, {
  key: keys.THREE
}], [{
  key: keys.FOUR
}, {
  key: keys.FIVE
}, {
  key: keys.SIX
}], [{
  key: keys.SEVEN
}, {
  key: keys.EIGHT
}, {
  key: keys.NINE
}], [{
  key: keys.DEL
}, {
  key: keys.ZERO
}, {
  key: keys.ENTER
}]];

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;base64,d09GRgABAAAAAAfsAAwAAAAAB5wAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABHAAAAHIAAABy2arcWE9TLzIAAAGQAAAAYAAAAGAPEgWBY21hcAAAAfAAAABsAAAAbOm3AapnYXNwAAACXAAAAAgAAAAIAAAAEGdseWYAAAJkAAACfAAAAnw0f1YEaGVhZAAABOAAAAA2AAAANg8HzfloaGVhAAAFGAAAACQAAAAkB8IDzWhtdHgAAAU8AAAAMAAAADAOAABgbG9jYQAABWwAAAAaAAAAGgKeAfxtYXhwAAAFiAAAACAAAAAgAB4ATm5hbWUAAAWoAAACIgAAAiI2PD88cG9zdAAAB8wAAAAgAAAAIAADAAAAAQAAAAoAHgAsAAFsYXRuAAgABAAAAAAAAAABAAAAAWxpZ2EACAAAAAEAAAABAAQABAAAAAEACgAAAAEADAADABYAIgAuAAEAAwAFAAYACwABAAQACQADAAYABwABAAQACgADAAgABAABAAQACgACAAsAAAADA1UBkAAFAAACmQLMAAAAjwKZAswAAAHrADMBCQAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAAAAAAAAAAAAAAEAAAOkCA8D/wABAA8AAQAAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAMAAAAcAAMAAQAAABwABABQAAAAEAAQAAMAAAABACAAZQBsAHPpAv/9//8AAAAAACAAYwBsAHPpAP/9//8AAf/j/6H/m/+VFwkAAwABAAAAAAAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAADAGAAgAOgAwAAGwA8AEgAAAEhIgYHDgExDgEVFBYXMBYXHgEzITI2NRE0JiMTFAYHDgEjISImLwEuATU0Nj8BPgE3PgEzITIWFx4BFRElNycHJwcXBxc3FzcDFv62RlsrK2UICAgIVzk5T0QBSjpQUDpqEA8PJxX+tjE+KqsDBQUDphIkFBQpFwFKFScPDxD++X8df38df38df38dAwBUKytqCRUMDBYIXjk5SFQ6AWg6UP4OFigPEBEvLLIDCwcHCwOsEyINDg0PDxAmFv6Ysn8df34dfn4dfn8dAAAAABEAAABSBAADLgADAAgADAAQABQAGAAcACEAJgArADAANQA6AD8AQwBIAEsAACUhESEBIREhERMzFSM3MxUjNzMVIzczFSM3MxUjJTMVIzU7ARUjNTsBFSM1OwEVIzU7ARUjNTsBFSM1ATMVIzUhMxUjJSEVITUFBycEAPwABAD8LAOo/FiEV1eSWFiSWFiSWFiTV1f9bVhYk1dXklhYklhYk1dXklhY/TNYWAK+WFj91AHy/g4BbnV11gJY/dQCAP4AATNYWFhYWFhYWFjqV1dXV1dXV1dXV1dX/txYWFhYWFj5WFgAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAABAAAtcRXTXw889QALBAAAAAAA1fTE5wAAAADV9MTnAAAAAAQAAy4AAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAABAAAAQAAAAAAAAAAAAAAAAAAAAwEAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAABgBAAAAAAAAAAAAAAAAAoAFAAeACgAMgA8AEYAUADAATQBPgAAAAEAAAAMAEwAEQAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAUAAAAAQAAAAAAAgAHANUAAQAAAAAAAwAUAF0AAQAAAAAABAAUAOoAAQAAAAAABQALADwAAQAAAAAABgAUAJkAAQAAAAAACgAaASYAAwABBAkAAQAoABQAAwABBAkAAgAOANwAAwABBAkAAwAoAHEAAwABBAkABAAoAP4AAwABBAkABQAWAEcAAwABBAkABgAoAK0AAwABBAkACgA0AUB2dWUtbnVtZXJpYy1rZXlib2FyZAB2AHUAZQAtAG4AdQBtAGUAcgBpAGMALQBrAGUAeQBiAG8AYQByAGRWZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADB2dWUtbnVtZXJpYy1rZXlib2FyZAB2AHUAZQAtAG4AdQBtAGUAcgBpAGMALQBrAGUAeQBiAG8AYQByAGR2dWUtbnVtZXJpYy1rZXlib2FyZAB2AHUAZQAtAG4AdQBtAGUAcgBpAGMALQBrAGUAeQBiAG8AYQByAGRSZWd1bGFyAFIAZQBnAHUAbABhAHJ2dWUtbnVtZXJpYy1rZXlib2FyZAB2AHUAZQAtAG4AdQBtAGUAcgBpAGMALQBrAGUAeQBiAG8AYQByAGRGb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"

/***/ }),
/* 75 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mixins = exports.Options = undefined;

var _assign = __webpack_require__(13);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestAnimationFrame = window.requestAnimationFrame || window.setTimeout;
var animation = function animation(iterable) {
  var done = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  var frames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 60;

  var running = true;
  var frame = 0;
  function closure(timestamp) {
    if (!running) {
      return;
    }
    iterable(timestamp, ++frame, frames);
    if (frame < frames) {
      requestAnimationFrame(closure, 0);
    } else {
      done();
    }
  }
  requestAnimationFrame(closure, 0);
  return function () {
    running = false;
  };
};

var KeyboardCenter = function () {

  var activeInput = void 0;

  return {
    register: function register(input) {
      this.unregister();
      activeInput = input;
      document.addEventListener('touchend', this.unregister, false);
    },
    unregister: function unregister(e) {
      if (!activeInput) {
        return;
      }
      if (e && activeInput.ks.keyboardElement.contains(e.target)) {
        return;
      }
      activeInput.closeKeyboard();
      activeInput = null;
      document.removeEventListener('touchend', this.unregister, false);
    }
  };
}();

var Options = exports.Options = {
  type: 'number',
  value: '',
  autofocus: false,
  disabled: false,
  readonly: false,
  maxlength: null,
  name: null,
  placeholder: null,
  format: '^',
  keyboard: null
};

var Mixins = exports.Mixins = {
  init: function init(options) {
    var format = typeof options.format === 'string' ? function (rformat) {
      return function (val) {
        return rformat.test(val);
      };
    }(new RegExp(options.format)) : options.format;

    this.kp = (0, _assign2.default)({}, options, { format: format });
    this.ks = {
      inputElement: null,
      keyboardElement: null,
      keyboard: null,
      rawValue: [],
      cursorPos: 0,
      cursorColor: null,
      cursorTimer: null
    };
  },
  destroy: function destroy() {
    KeyboardCenter.unregister();
  },
  set: function set(key, value) {
    this.ks[key] = value;

    if (key === 'cursorPos' && this.ks.cursorTimer) {
      this.moveCursor();
    }
  },
  setValue: function setValue(val) {
    if (val != null) {
      this.set('rawValue', val.toString().split(''));
    } else {
      this.set('rawValue', []);
    }

    this.set('cursorPos', this.ks.rawValue.length);
  },
  moveCursor: function moveCursor() {
    var cursor = this.ks.inputElement.querySelector('i');
    if (this.ks.cursorPos) {
      var charactor = this.ks.inputElement.querySelector('span:nth-of-type(' + this.ks.cursorPos + ')');
      cursor.style.left = charactor.offsetLeft + charactor.offsetWidth + 'px';
    } else {
      cursor.style.left = 0;
    }
  },
  openKeyboard: function openKeyboard() {
    var _this = this;

    if (this.ks.keyboard) {
      return;
    }

    var container = document.createElement('div');
    var shadow = document.createElement('div');
    var keyboard = document.createElement('div');
    container.style.cssText = 'position:fixed; bottom:0; left:0; width:100%; height:36%;';
    shadow.style.cssText = 'height:100%;';
    keyboard.style.cssText = 'position:absolute; top:0; right: 0; bottom: 0; left:0; transform: translateY(100%); box-shadow: 0 -2px 4px 0 #cfd4da';
    container.appendChild(shadow);
    container.appendChild(keyboard);
    document.body.appendChild(container);

    this.set('keyboardElement', keyboard);
    this.set('keyboard', this.createKeyboard(keyboard, (0, _assign2.default)({ layout: this.kp.type }, this.kp.keyboard), function (key) {
      _this.input(key);
    }));
    animation(function (timestamp, frame, frames) {
      keyboard.style.transform = 'translateY(' + (frames - frame) / frames * 100 + '%)';
    }, function () {}, 10);

    this.set('cursorTimer', 1);
    this.set('cursorPos', this.ks.rawValue.length);

    KeyboardCenter.register(this);
    this.dispatch('focus');
  },
  closeKeyboard: function closeKeyboard() {
    var _this2 = this;

    if (!this.ks.keyboard) {
      return;
    }

    var keyboard = this.ks.keyboard;
    var keyboardElement = this.ks.keyboardElement;
    animation(function (timestamp, frame, frames) {
      keyboardElement.style.transform = 'translateY(' + frame / frames * 100 + '%)';
    }, function () {
      setTimeout(function () {
        _this2.destroyKeyboard(keyboard, keyboardElement);
        document.body.removeChild(keyboardElement.parentNode);
      }, 300);
    }, 10);

    this.set('keyboard', null);
    this.set('keyboardElement', null);

    this.set('cursorTimer', null);
    this.set('cursorPos', 0);

    KeyboardCenter.unregister();
    this.dispatch('blur');
  },
  input: function input(key) {
    var _this3 = this;

    var p = this.kp;
    var s = this.ks;
    var input = function input(key) {
      var isAdd = typeof key !== 'undefined';
      var cursorPos = s.cursorPos;
      var args = isAdd ? [cursorPos, 0, key] : [cursorPos - 1, 1];
      var rawValue = s.rawValue.slice();
      rawValue.splice.apply(rawValue, args);
      if (p.format(rawValue.join(''))) {
        _this3.set('rawValue', rawValue);
        _this3.set('cursorPos', isAdd ? cursorPos + 1 : cursorPos - 1);
        var val = rawValue.join('');
        if (val && p.type === 'number') {
          val = parseFloat(val, 10);
        }
        _this3.dispatch('input', val);
      }
    };
    switch (key) {
      case 'esc':
      case 'enter':
        this.closeKeyboard();
        break;
      case 'del':
        if (s.cursorPos > 0) {
          input();
        }
        break;
      case '.':
        if (s.rawValue.indexOf(key) === -1) {
          if (p.type === 'number' && s.rawValue.length === 0) {
            input(0);
            input(key);
          } else {
            input(key);
          }
        }
        break;
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        if (p.type === 'number' || p.maxlength == null || s.rawValue.length < p.maxlength) {
          input(key);
        }
        break;
    }
  },
  onMounted: function onMounted(el) {
    if (this.kp.autofocus && !this.kp.readonly && !this.kp.disabled) {
      this.openKeyboard();
    }
    this.set('cursorColor', window.getComputedStyle(el).getPropertyValue('color'));
    this.set('inputElement', el);
    this.setValue(this.kp.value);
  },
  onFocus: function onFocus(e) {
    e.stopPropagation();
    this.openKeyboard();
    this.set('cursorPos', +e.target.dataset.index || this.ks.rawValue.length);
  },
  dispatch: function dispatch() /* event, ...args */{
    throw new Error('dispatch method must be overrided!');
  },
  createKeyboard: function createKeyboard() /* el, options, callback */{
    throw new Error('createKeyboard method must be overrided!');
  },
  destroyKeyboard: function destroyKeyboard() /* keyboardClass */{
    throw new Error('destroyKeyboard method must be overrided!');
  }
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(23)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/stylus-loader/index.js!./keyboard.styl", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/stylus-loader/index.js!./keyboard.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(undefined);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: numeric-keyboard;\n  src: url(" + __webpack_require__(74) + ") format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n.numeric-keyboard {\n  width: 100%;\n  height: 100%;\n}\n.numeric-keyboard table {\n  width: 100%;\n  height: 100%;\n  background: #cfd4da;\n  table-layout: fixed;\n  border-collapse: separate;\n  border-spacing: 1px;\n  font-size: 2em;\n  text-align: center;\n}\n.numeric-keyboard td {\n  touch-action: manipulation;\n  transition: background-color 0.5s;\n}\n.numeric-keyboard td[data-icon]::before {\n  content: attr(data-icon);\n  font-family: inherit !important;\n}\n.numeric-keyboard td[data-icon=del]::before,\n.numeric-keyboard td[data-icon=esc]::before {\n  content: attr(data-icon);\n  font-family: numeric-keyboard !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  letter-spacing: 0;\n  -webkit-font-feature-settings: \"liga\";\n  font-feature-settings: \"liga\";\n  -webkit-font-variant-ligatures: discretionary-ligatures;\n  font-variant-ligatures: discretionary-ligatures;\n  -webkit-font-smoothing: antialiased;\n}\n", ""]);

// exports


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(23)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/stylus-loader/index.js!./input.styl", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/stylus-loader/index.js!./input.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(undefined);
// imports


// module
exports.push([module.i, ".numeric-input {\n  display: inline-block;\n  background: #fff;\n  width: 12em;\n  height: 1.2em;\n  padding: 2px;\n  text-align: left;\n}\n.numeric-input.readonly,\n.numeric-input.disabled {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.numeric-input div {\n  position: relative;\n  height: 100%;\n}\n.numeric-input span {\n  float: left;\n  height: 100%;\n  display: table-cell;\n  vertical-align: middle;\n}\n.numeric-input i {\n  pointer-events: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 1px;\n  animation: numeric-input-cursor 1s infinite;\n}\n.numeric-input-placeholder {\n  color: #757575;\n}\n@-moz-keyframes numeric-input-cursor {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes numeric-input-cursor {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@-o-keyframes numeric-input-cursor {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes numeric-input-cursor {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n", ""]);

// exports


/***/ }),
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_86__;

/***/ }),
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(86);
var keyboard_1 = __webpack_require__(55);
var Event;
(function (Event) {
    Event["Press"] = "press";
})(Event || (Event = {}));
var template = "\n<div class=\"numeric-keyboard\">\n  <table>\n    <tr *ngFor=\"let r of ks.layout\">\n      <td *ngFor=\"let c of r\"\n        [attr.rowspan]=\"c.rowspan\"\n        [attr.colspan]=\"c.colspan\"\n        [attr.data-icon]=\"ks.keys[c.key].icon\"\n        [ngStyle]=\"ks.keys[c.key].style\"\n        (touchstart)=\"onTouchstart(ks.keys[c.key], $event)\"\n        (touchend)=\"onTouchend(ks.keys[c.key], $event)\">\n      </td>\n    </tr>\n  </table>\n</div>\n";
var Parent = /** @class */ (function () {
    function Parent() {
    }
    return Parent;
}());
Parent.prototype = keyboard_1.Mixins;
var NumericKeyboard = /** @class */ (function (_super) {
    __extends(NumericKeyboard, _super);
    function NumericKeyboard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.layout = keyboard_1.Options.layout;
        _this.theme = keyboard_1.Options.theme;
        _this.entertext = keyboard_1.Options.entertext;
        _this.onPress = new core_1.EventEmitter();
        return _this;
    }
    NumericKeyboard.prototype.ngOnInit = function () {
        keyboard_1.Mixins.init.call(this, {
            layout: this.layout,
            theme: this.theme,
            entertext: this.entertext
        });
    };
    NumericKeyboard.prototype.ngOnDestroy = function () {
        keyboard_1.Mixins.destroy.call(this);
    };
    NumericKeyboard.prototype.dispatch = function (event, argument) {
        switch (event) {
            case Event.Press:
                this.onPress.emit(argument);
                break;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NumericKeyboard.prototype, "layout", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NumericKeyboard.prototype, "theme", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], NumericKeyboard.prototype, "entertext", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], NumericKeyboard.prototype, "onPress", void 0);
    NumericKeyboard = __decorate([
        core_1.Component({
            selector: 'numeric-keyboard',
            template: template,
            styles: [__webpack_require__(77), __webpack_require__(151)]
        })
    ], NumericKeyboard);
    return NumericKeyboard;
}(Parent));
exports.NumericKeyboard = NumericKeyboard;


/***/ }),
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var module_1 = __webpack_require__(149);
exports.NumericKeyboardModule = module_1.NumericKeyboardModule;
var keys = __webpack_require__(6);
exports.keys = keys;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(86);
var common_1 = __webpack_require__(150);
var keyboard_component_1 = __webpack_require__(99);
var input_component_1 = __webpack_require__(153);
var NumericKeyboardModule = /** @class */ (function () {
    function NumericKeyboardModule() {
    }
    NumericKeyboardModule = __decorate([
        core_1.NgModule({
            declarations: [keyboard_component_1.NumericKeyboard, input_component_1.NumericInput],
            entryComponents: [keyboard_component_1.NumericKeyboard],
            imports: [common_1.CommonModule],
            exports: [keyboard_component_1.NumericKeyboard, input_component_1.NumericInput]
        })
    ], NumericKeyboardModule);
    return NumericKeyboardModule;
}());
exports.NumericKeyboardModule = NumericKeyboardModule;


/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_150__;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(152);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(23)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/stylus-loader/index.js!./keyboard.component.styl", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/stylus-loader/index.js!./keyboard.component.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(undefined);
// imports


// module
exports.push([module.i, ":host .numeric-keyboard {\n  width: inherit;\n  height: inherit;\n}\n", ""]);

// exports


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(86);
var input_1 = __webpack_require__(76);
var keyboard_component_1 = __webpack_require__(99);
var Event;
(function (Event) {
    Event["Focus"] = "focus";
    Event["Blur"] = "blur";
    Event["Input"] = "input";
})(Event || (Event = {}));
var template = "\n<div class=\"numeric-input\" [class.readonly]=\"kp.readonly\" [class.disabled]=\"kp.disabled\" (touchend)=\"handleFocus($event)\">\n  <input type=\"hidden\" [attr.name]=\"kp.name\" [value]=\"kp.ngModel\" />\n  <div *ngIf=\"ks\">\n    <span class=\"numeric-input-placeholder\" *ngIf=\"ks.rawValue.length === 0\">{{kp.placeholder}}</span>\n    <span *ngFor=\"let c of ks.rawValue; let i = index; trackBy: trackByIndex\" [attr.data-index]=\"i + 1\">{{c}}</span>\n    <i *ngIf=\"ks.cursorTimer\" [style.backgroundColor]=\"ks.cursorColor\"></i>\n  </div>\n</div>\n";
var Parent = /** @class */ (function () {
    function Parent() {
    }
    return Parent;
}());
Parent.prototype = input_1.Mixins;
var NumericInput = /** @class */ (function (_super) {
    __extends(NumericInput, _super);
    function NumericInput(element, appRef, componentFactoryResolver, injector) {
        var _this = _super.call(this) || this;
        _this.element = element;
        _this.appRef = appRef;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.injector = injector;
        _this.type = input_1.Options.type;
        _this.value = input_1.Options.value;
        _this.autofocus = input_1.Options.autofocus;
        _this.disabled = input_1.Options.disabled;
        _this.readonly = input_1.Options.readonly;
        _this.maxlength = input_1.Options.maxlength;
        _this.name = input_1.Options.name;
        _this.placeholder = input_1.Options.placeholder;
        _this.format = input_1.Options.format;
        _this.keyboard = input_1.Options.keyboard;
        _this.ngModel = input_1.Options.value;
        _this.onFocus = new core_1.EventEmitter();
        _this.onBlur = new core_1.EventEmitter();
        _this.ngModelChange = new core_1.EventEmitter();
        return _this;
    }
    NumericInput.prototype.ngOnInit = function () {
        var resolvedOptions = {};
        for (var key in input_1.Options) {
            resolvedOptions[key] = this[key];
        }
        input_1.Mixins.init.call(this, resolvedOptions);
        input_1.Mixins.onMounted.call(this, this.element.nativeElement.querySelector('.numeric-input'));
    };
    NumericInput.prototype.ngOnDestroy = function () {
        input_1.Mixins.destroy.call(this);
    };
    NumericInput.prototype.trackByIndex = function (index) {
        return index;
    };
    NumericInput.prototype.handleFocus = function (event) {
        input_1.Mixins.onFocus.call(this, event);
    };
    NumericInput.prototype.moveCursor = function () {
        this.appRef.tick();
        input_1.Mixins.moveCursor.call(this);
    };
    NumericInput.prototype.dispatch = function (event, argument) {
        switch (event) {
            case Event.Focus:
                this.onFocus.emit();
                break;
            case Event.Blur:
                this.onFocus.emit();
                break;
            case Event.Focus:
                this.ngModelChange.emit(argument);
                break;
        }
    };
    NumericInput.prototype.createKeyboard = function (el, options, callback) {
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(keyboard_component_1.NumericKeyboard)
            .create(this.injector);
        Object.assign(componentRef.instance, options);
        componentRef.instance.ngOnInit();
        componentRef.instance.onPress.subscribe(callback);
        this.appRef.attachView(componentRef.hostView);
        el.appendChild(componentRef.hostView.rootNodes[0]);
        return componentRef;
    };
    NumericInput.prototype.destroyKeyboard = function (keyboardClass) {
        keyboardClass.destroy();
        this.appRef.detachView(keyboardClass.hostView);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], NumericInput.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NumericInput.prototype, "value", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], NumericInput.prototype, "autofocus", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], NumericInput.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], NumericInput.prototype, "readonly", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], NumericInput.prototype, "maxlength", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], NumericInput.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], NumericInput.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NumericInput.prototype, "format", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NumericInput.prototype, "keyboard", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NumericInput.prototype, "ngModel", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], NumericInput.prototype, "onFocus", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], NumericInput.prototype, "onBlur", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], NumericInput.prototype, "ngModelChange", void 0);
    NumericInput = __decorate([
        core_1.Component({
            selector: 'numeric-input',
            template: template,
            styles: [__webpack_require__(79), __webpack_require__(154)]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            core_1.ApplicationRef,
            core_1.ComponentFactoryResolver,
            core_1.Injector])
    ], NumericInput);
    return NumericInput;
}(Parent));
exports.NumericInput = NumericInput;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(155);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(23)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/stylus-loader/index.js!./input.component.styl", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/stylus-loader/index.js!./input.component.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(undefined);
// imports


// module
exports.push([module.i, ":host {\n  display: inline-block;\n  background: #fff;\n  width: 12em;\n  height: 1.2em;\n  padding: 2px;\n  text-align: left;\n}\n:host .numeric-input {\n  display: block;\n  background: transparent;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  text-align: inherit;\n}\n", ""]);

// exports


/***/ })
/******/ ]);
});
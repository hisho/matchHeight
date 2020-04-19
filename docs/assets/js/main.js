/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.ts":
/*!************************!*\
  !*** ./src/js/main.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_MatchHeight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/MatchHeight */ "./src/js/modules/MatchHeight.ts");
/* harmony import */ var _modules_MatchHeight__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_MatchHeight__WEBPACK_IMPORTED_MODULE_0__);



/***/ }),

/***/ "./src/js/modules/MatchHeight.ts":
/*!***************************************!*\
  !*** ./src/js/modules/MatchHeight.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* TODO

入れ子状態でも動くようにする(優先度低)
リサイズイベントに対応できるようにする。
byRow: true,
property: 'height',
target: null,
のオプションを用意する
*/
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var MatchHeight = /** @class */ (function () {
    function MatchHeight() {
        this.matchHeightElements = __spread(document.querySelectorAll('[data-match-height]'));
        this.matchHeightElementDataNameList = this.getElementMatchList(this.matchHeightElements, function (el) { return el.dataset.matchHeight; });
        this.matchHeightDataElementsList = this.makeSortElementsLists(this.matchHeightElementDataNameList, this.matchHeightElements, function (el) { return el.dataset.matchHeight; });
        this.init();
    }
    MatchHeight.prototype.init = function () {
        var _this = this;
        this.matchHeightDataElementsList.forEach(function (matchHeightDataElements) {
            var elementHeightLists = matchHeightDataElements.map(function (x) { return x.offsetTop; });
            var elementHeightList = _this.makeSortElementsLists(elementHeightLists, matchHeightDataElements, function (el) { return el.offsetTop; });
            elementHeightList.forEach(function (x) { return _this.setMaxHeight(x, _this.getMaxHeight(x)); });
        });
    };
    MatchHeight.prototype.getElementMatchList = function (elements, func) {
        var elementMatchList = elements.map(function (x) { return func(x); });
        return __spread(new Set(elementMatchList));
    };
    MatchHeight.prototype.makeSortElementsLists = function (array, elements, func) {
        return array.map(function (item) { return elements.filter(function (element) { return item === func(element); }); });
    };
    MatchHeight.prototype.getMaxHeight = function (elements) {
        var heights = elements.map(function (x) { return x.clientHeight; });
        return Math.max.apply(Math, __spread(heights));
    };
    MatchHeight.prototype.setMaxHeight = function (elements, maxHeight) {
        elements.forEach(function (element) { return element.style.height = maxHeight + "px"; });
    };
    return MatchHeight;
}());
if (document.querySelector('[data-match-height]'))
    new MatchHeight();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvTWF0Y2hIZWlnaHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBK0I7Ozs7Ozs7Ozs7OztBQ0EvQjs7Ozs7Ozs7RUFRRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUY7SUFJRTtRQUNFLElBQUksQ0FBQyxtQkFBbUIsWUFBTyxRQUFRLENBQUMsZ0JBQWdCLENBQWMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyw4QkFBOEIsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFDLFlBQUUsSUFBSSxTQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO1FBQ3RILElBQUksQ0FBQywyQkFBMkIsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLDhCQUE4QixFQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxZQUFFLElBQUksU0FBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQXRCLENBQXNCLENBQUMsQ0FBQztRQUMxSixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsMEJBQUksR0FBSjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLE9BQU8sQ0FBQyxpQ0FBdUI7WUFDOUQsSUFBTSxrQkFBa0IsR0FBRyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxTQUFTLEVBQVgsQ0FBVyxDQUFDLENBQUM7WUFDekUsSUFBTSxpQkFBaUIsR0FBRyxLQUFJLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLEVBQUMsdUJBQXVCLEVBQUMsWUFBRSxJQUFJLFNBQUUsQ0FBQyxTQUFTLEVBQVosQ0FBWSxDQUFDLENBQUM7WUFDcEgsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFdBQUMsSUFBSSxZQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQXpDLENBQXlDLENBQUMsQ0FBQztRQUM1RSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx5Q0FBbUIsR0FBbkIsVUFBcUIsUUFBUSxFQUFDLElBQUk7UUFDaEMsSUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQUMsSUFBSSxXQUFJLENBQUMsQ0FBQyxDQUFDLEVBQVAsQ0FBTyxDQUFDLENBQUM7UUFDcEQsZ0JBQVcsSUFBSSxHQUFHLENBQUMsZ0JBQWdCLENBQUMsRUFBQztJQUN2QyxDQUFDO0lBRUQsMkNBQXFCLEdBQXJCLFVBQXVCLEtBQUssRUFBQyxRQUFzQixFQUFDLElBQUk7UUFDdEQsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLGNBQUksSUFBSSxlQUFRLENBQUMsTUFBTSxDQUFDLGlCQUFPLElBQUksV0FBSSxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxFQUFsRCxDQUFrRCxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxRQUF1QjtRQUNsQyxJQUFNLE9BQU8sR0FBWSxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsWUFBWSxFQUFkLENBQWMsQ0FBQyxDQUFDO1FBQzNELE9BQU8sSUFBSSxDQUFDLEdBQUcsT0FBUixJQUFJLFdBQVEsT0FBTyxHQUFFO0lBQzlCLENBQUM7SUFFRCxrQ0FBWSxHQUFaLFVBQWEsUUFBdUIsRUFBQyxTQUFnQjtRQUNuRCxRQUFRLENBQUMsT0FBTyxDQUFDLGlCQUFPLElBQUksY0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQU0sU0FBUyxPQUFJLEVBQXZDLENBQXVDLENBQUM7SUFDdEUsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQztBQUVELElBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBYyxxQkFBcUIsQ0FBQztJQUFFLElBQUksV0FBVyxFQUFFLENBQUMiLCJmaWxlIjoiZG9jcy9hc3NldHMvanMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL21haW4udHNcIik7XG4iLCJpbXBvcnQgJy4vbW9kdWxlcy9NYXRjaEhlaWdodCc7IiwiLyogVE9ET1xuXG7lhaXjgozlrZDnirbmhYvjgafjgoLli5XjgY/jgojjgYbjgavjgZnjgoso5YSq5YWI5bqm5L2OKVxu44Oq44K144Kk44K644Kk44OZ44Oz44OI44Gr5a++5b+c44Gn44GN44KL44KI44GG44Gr44GZ44KL44CCXG5ieVJvdzogdHJ1ZSxcbnByb3BlcnR5OiAnaGVpZ2h0JyxcbnRhcmdldDogbnVsbCxcbuOBruOCquODl+OCt+ODp+ODs+OCkueUqOaEj+OBmeOCi1xuKi9cblxuY2xhc3MgTWF0Y2hIZWlnaHQge1xuICBtYXRjaEhlaWdodEVsZW1lbnRzOiBIVE1MRWxlbWVudFtdXG4gIG1hdGNoSGVpZ2h0RWxlbWVudERhdGFOYW1lTGlzdDogc3RyaW5nW11cbiAgbWF0Y2hIZWlnaHREYXRhRWxlbWVudHNMaXN0OiBIVE1MRWxlbWVudFtdW11cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYXRjaEhlaWdodEVsZW1lbnRzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCdbZGF0YS1tYXRjaC1oZWlnaHRdJyldO1xuICAgIHRoaXMubWF0Y2hIZWlnaHRFbGVtZW50RGF0YU5hbWVMaXN0ID0gdGhpcy5nZXRFbGVtZW50TWF0Y2hMaXN0KHRoaXMubWF0Y2hIZWlnaHRFbGVtZW50cyxlbCA9PiBlbC5kYXRhc2V0Lm1hdGNoSGVpZ2h0KTtcbiAgICB0aGlzLm1hdGNoSGVpZ2h0RGF0YUVsZW1lbnRzTGlzdCA9IHRoaXMubWFrZVNvcnRFbGVtZW50c0xpc3RzKHRoaXMubWF0Y2hIZWlnaHRFbGVtZW50RGF0YU5hbWVMaXN0LHRoaXMubWF0Y2hIZWlnaHRFbGVtZW50cywgZWwgPT4gZWwuZGF0YXNldC5tYXRjaEhlaWdodCk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMubWF0Y2hIZWlnaHREYXRhRWxlbWVudHNMaXN0LmZvckVhY2gobWF0Y2hIZWlnaHREYXRhRWxlbWVudHMgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudEhlaWdodExpc3RzID0gbWF0Y2hIZWlnaHREYXRhRWxlbWVudHMubWFwKHggPT4geC5vZmZzZXRUb3ApO1xuICAgICAgY29uc3QgZWxlbWVudEhlaWdodExpc3QgPSB0aGlzLm1ha2VTb3J0RWxlbWVudHNMaXN0cyhlbGVtZW50SGVpZ2h0TGlzdHMsbWF0Y2hIZWlnaHREYXRhRWxlbWVudHMsZWwgPT4gZWwub2Zmc2V0VG9wKTtcbiAgICAgIGVsZW1lbnRIZWlnaHRMaXN0LmZvckVhY2goeCA9PiB0aGlzLnNldE1heEhlaWdodCh4LHRoaXMuZ2V0TWF4SGVpZ2h0KHgpKSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRFbGVtZW50TWF0Y2hMaXN0IChlbGVtZW50cyxmdW5jKTphbnlbXSB7XG4gICAgY29uc3QgZWxlbWVudE1hdGNoTGlzdCA9IGVsZW1lbnRzLm1hcCh4ID0+IGZ1bmMoeCkpO1xuICAgIHJldHVybiBbLi4ubmV3IFNldChlbGVtZW50TWF0Y2hMaXN0KV1cbiAgfVxuXG4gIG1ha2VTb3J0RWxlbWVudHNMaXN0cyAoYXJyYXksZWxlbWVudHM6SFRNTEVsZW1lbnRbXSxmdW5jKTpIVE1MRWxlbWVudFtdW10ge1xuICAgIHJldHVybiBhcnJheS5tYXAoaXRlbSA9PiBlbGVtZW50cy5maWx0ZXIoZWxlbWVudCA9PiBpdGVtID09PSBmdW5jKGVsZW1lbnQpKSk7XG4gIH1cblxuICBnZXRNYXhIZWlnaHQoZWxlbWVudHM6IEhUTUxFbGVtZW50W10pOm51bWJlciB7XG4gICAgY29uc3QgaGVpZ2h0czpudW1iZXJbXSA9IGVsZW1lbnRzLm1hcCh4ID0+IHguY2xpZW50SGVpZ2h0KTtcbiAgICByZXR1cm4gTWF0aC5tYXgoLi4uaGVpZ2h0cyk7XG4gIH1cblxuICBzZXRNYXhIZWlnaHQoZWxlbWVudHM6IEhUTUxFbGVtZW50W10sbWF4SGVpZ2h0Om51bWJlcikge1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke21heEhlaWdodH1weGApXG4gIH1cbn1cblxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJ1tkYXRhLW1hdGNoLWhlaWdodF0nKSkgbmV3IE1hdGNoSGVpZ2h0KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==
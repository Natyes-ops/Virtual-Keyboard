/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    font-family: Arial, Helvetica, sans-serif;\\r\\n    font-size: 20px;\\r\\n}\\r\\n\\r\\n.keyboard {\\r\\n    max-width: 1020px;\\r\\n    width: 100%;\\r\\n    padding: 20px;\\r\\n    margin: 0 auto;\\r\\n    background: rgba(255, 218, 218, 0.529);\\r\\n}\\r\\n\\r\\n.line {\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\n.line:not(:last-child) {\\r\\n    margin-bottom: 10px;\\r\\n}\\r\\ntextarea {\\r\\n    width: 100%;\\r\\n    min-height: 200px;\\r\\n    margin-bottom: 10px;\\r\\n}\\r\\n.key {\\r\\n    display: inline-block;\\r\\n    width: 60px;\\r\\n    min-height: 20px;\\r\\n    border: 1px solid #000;\\r\\n    transition: background .3s, border .3s, color .3s, border-radius .3s;\\r\\n}\\r\\nbody {\\r\\n    text-align: center;\\r\\n}\\r\\n.title {\\r\\n    padding: 10px;\\r\\n    font-weight: 700;\\r\\n}\\r\\n.descr {\\r\\n    padding: 10px;\\r\\n}\\r\\n.key:hover{\\r\\n    background: red;\\r\\n    color: #fff;\\r\\n    border: 1px solid #fff;\\r\\n}\\r\\nspan {\\r\\n    transition: background .3s, border .3s, color .3s, border-radius .3s;\\r\\n}\\r\\n.key.active{\\r\\n    background: rgb(241, 231, 82);\\r\\n    color: #fff;\\r\\n    border: 1px solid #fff;\\r\\n    border-radius: 20px;\\r\\n}\\r\\nspan.active {\\r\\n    background: rgb(241, 231, 82);\\r\\n    color: #fff;\\r\\n    border-radius: 20px;\\r\\n}\\r\\n.CapsLock.active {\\r\\n    background: red;\\r\\n    color: #fff;\\r\\n    border: 1px solid #fff;\\r\\n    border-radius: 8px;\\r\\n}\\r\\n.key:not(:last-child) {\\r\\n    margin-right: 11px;\\r\\n}\\r\\n.ru > span,\\r\\n.eng > span {\\r\\n    display: block;\\r\\n    padding: 20px;\\r\\n    cursor: pointer;\\r\\n}\\r\\nspan.hidden {\\r\\n    display: none;\\r\\n} \\r\\n.Delete,\\r\\n.Backspace,\\r\\n.Enter,\\r\\n.ShiftRight,\\r\\n.ShiftLeft,\\r\\n.Space,\\r\\n.Tab,\\r\\n.CapsLock\\r\\n{\\r\\n    width: 100%;\\r\\n}\\r\\n.ControlLeft,\\r\\n.ControlRight,\\r\\n.OSLeft  {\\r\\n    width: auto;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n\r\n// eslint-disable-next-line no-undef\r\nlet keys = __webpack_require__(/*! ./keyValue.json */ \"./src/js/keyValue.json\"),\r\n    container = document.createElement(\"div\"),\r\n    text = document.createElement(\"textarea\");\r\n\r\n/* \r\nclass Keys {\r\n    constructor(key, shiftKey, keyEng, shiftKeyEng, keyCode, shiftKeyCode, shiftKeyCodeEng) {\r\n        this.key = key;\r\n        this.shiftKey = shiftKey;\r\n        this.keyEng = keyEng;\r\n        this.shiftKeyEng = shiftKeyEng;\r\n        this.keyCode = keyCode;\r\n        this.shiftKeyCode = shiftKeyCode;\r\n        this.shiftKeyCodeEng = shiftKeyCodeEng;\r\n    }\r\n    returnCode() {\r\n        return this.keyCode;\r\n    }\r\n} \r\n*/\r\ndocument.body.innerHTML += \"<div class='title'>RSS Виртуальная клавиатура</div><div class='descr'>Клавиатура создана в операционной системе Window<br>Для переключения языка комбинация: левыe ctrl + alt</div>\";\r\ncontainer.classList.add(\"keyboard\");\r\ncontainer.append(text);\r\ndocument.body.append(container);\r\n\r\n\r\nfor (let i = 1; i <= 5; i++) {\r\n    let line = document.createElement(\"div\");\r\n    line.classList.add(\"line\", `line-${i}`);\r\n    container.append(line);\r\n}\r\n\r\n// keys.forEach(item => {\r\n//     // let k = new Keys(item.key, item.shiftKey, item.keyEng, item.shiftKeyEng, item.keyCode, item.shiftKeyCode, item.shiftKeyCodeEng);\r\n//     lines[--item.line].innerHtml +=`\r\n//     <div class=\"key ${item.code}\">\r\n//         <span class=\"key-value\">${item.key}</span>\r\n//         <span class=\"shiftKey\">${item.shiftKey}</span>\r\n//         <span class=\"keyEng\">${item.keyEng}</span>\r\n//         <span class=\"shiftKeyEng\">${item.shiftKeyEng}</span>\r\n//     </div>`;\r\n// });\r\n\r\nkeys.forEach(item => {\r\n    let lines = document.querySelectorAll(\".line\");\r\n    lines[--item.line].innerHTML += `\r\n    <div class=\"key ${item.code}\">\r\n    <span class=\"ru\">\r\n        <span class=\"key-value\">${item.key}</span>\r\n        <span class=\"shiftKey hidden\">${item.shiftKey}</span>\r\n    </span>\r\n    <span class=\"eng hidden\">\r\n        <span class=\"key-value\">${item.keyEng}</span>\r\n        <span class=\"shiftKey hidden\">${item.shiftKeyEng}</span>\r\n    </span>\r\n    </div>`;\r\n});\r\n\r\ncontainer.addEventListener(\"mousedown\", (e) => {\r\n    if ((e.target && e.target.matches(\"span\"))) {\r\n        if ((e.target.textContent == \"CapsLock\" || e.target.textContent == \"Shift\" || e.target.textContent == \"Control\" || e.target.textContent == \"Alt\" || e.target.textContent == \"OS\" || e.target.textContent == \"Backspace\" || e.target.textContent == \"Delete\")) {\r\n            text.value += \"\";\r\n        } else if (e.target.textContent == \"Tab\") {\r\n            e.preventDefault();\r\n            text.value += \"\\t\";\r\n        } else if (e.target.textContent == \"Enter\") {\r\n            text.value += \"\\n\";\r\n        } else if (e.target.textContent == \"ArrowLeft\") {\r\n            text.value += \"←\";\r\n        } else if (e.target.textContent == \"ArrowUp\") {\r\n            text.value += \"↑\";\r\n        } else if (e.target.textContent == \"ArrowDown\") {\r\n            text.value += \"↓\";\r\n        } else if (e.target.textContent == \"ArrowRight\") {\r\n            text.value += \"→\";\r\n        } else {\r\n            text.value += e.target.textContent;\r\n        }\r\n        e.target.classList.add(\"active\");\r\n    }\r\n});\r\ncontainer.addEventListener(\"mouseup\", (e) => {\r\n    if ((e.target && e.target.matches(\"span\"))) {\r\n        e.target.classList.remove(\"active\");\r\n    }\r\n});\r\n\r\nlet key = document.querySelectorAll(\".key\");\r\nlet keyRu = document.querySelectorAll(\".ru\");\r\nlet keyEng = document.querySelectorAll(\".eng\");\r\nlet keyValueRu = document.querySelectorAll(\".ru .key-value\");\r\nlet keyShiftRu = document.querySelectorAll(\".ru .shiftKey\");\r\nlet keyValueEng = document.querySelectorAll(\".eng .key-value\");\r\nlet keyShiftEng = document.querySelectorAll(\".eng .shiftKey\");\r\nlet CapsLock = document.querySelector(\".key.CapsLock\");\r\n\r\nwindow.addEventListener(\"keydown\", (e) => {\r\n    key.forEach((item, i) => {\r\n        if (e.ctrlKey && e.altKey && keyEng[i].classList.contains(\"hidden\")) {\r\n            keyRu[i].classList.add(\"hidden\");\r\n            keyEng[i].classList.remove(\"hidden\");\r\n        } else if (e.ctrlKey && e.altKey && keyRu[i].classList.contains(\"hidden\")) {\r\n            keyRu[i].classList.remove(\"hidden\");\r\n            keyEng[i].classList.add(\"hidden\");\r\n        }\r\n        if (e.shiftKey && keyEng[i].classList.contains(\"hidden\")) {\r\n            keyValueRu[i].classList.add(\"hidden\");\r\n            keyShiftRu[i].classList.remove(\"hidden\");\r\n        } else if (e.shiftKey && keyRu[i].classList.contains(\"hidden\")) {\r\n            keyValueEng[i].classList.add(\"hidden\");\r\n            keyShiftEng[i].classList.remove(\"hidden\");\r\n        }\r\n        if (e.key == \"CapsLock\" && keyEng[i].classList.contains(\"hidden\")) {\r\n            CapsLock.classList.add(\"active\");\r\n            keyValueRu[i].classList.toggle(\"hidden\");\r\n            keyShiftRu[i].classList.toggle(\"hidden\");\r\n        } else if (e.key == \"CapsLock\" && keyRu[i].classList.contains(\"hidden\")) {\r\n            CapsLock.classList.add(\"active\");\r\n            keyValueEng[i].classList.add(\"hidden\");\r\n            keyShiftEng[i].classList.add(\"hidden\");\r\n        }\r\n        if (item.classList.contains(e.code)) {\r\n            item.classList.add(\"active\");\r\n        }\r\n    });\r\n    if ((e.key == \"CapsLock\" || e.key == \"Shift\" || e.key == \"Control\" || e.key == \"Alt\" || e.key == \"OS\" || e.key == \"Backspace\" || e.key == \"Delete\")) {\r\n        text.value += \"\";\r\n    } else if (e.key == \"Tab\") {\r\n        e.preventDefault();\r\n        text.value += \"\\t\";\r\n    } else if (e.key == \"Enter\") {\r\n        text.value += \"\\n\";\r\n    } else if (e.key == \"ArrowLeft\") {\r\n        text.value += \"←\";\r\n    } else if (e.key == \"ArrowUp\") {\r\n        text.value += \"↑\";\r\n    } else if (e.key == \"ArrowDown\") {\r\n        text.value += \"↓\";\r\n    } else if (e.key == \"ArrowRight\") {\r\n        text.value += \"→\";\r\n    } else {\r\n        text.value += e.key;\r\n    }\r\n});\r\nwindow.addEventListener(\"keyup\", (e) => {\r\n    key.forEach((item, i) => {\r\n        if ((e.code == \"ShiftLeft\" || e.code == \"ShiftRight\") && keyEng[i].classList.contains(\"hidden\")) {\r\n            keyValueRu[i].classList.remove(\"hidden\");\r\n            keyShiftRu[i].classList.add(\"hidden\");\r\n        } else if ((e.code == \"ShiftLeft\" || e.code == \"ShiftRight\") && keyRu[i].classList.contains(\"hidden\")) {\r\n            keyValueEng[i].classList.remove(\"hidden\");\r\n            keyShiftEng[i].classList.add(\"hidden\");\r\n        }\r\n        if (item.classList.contains(e.code)) {\r\n            item.classList.remove(\"active\");\r\n        }\r\n    });\r\n});\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/script.js?");

/***/ }),

/***/ "./src/js/keyValue.json":
/*!******************************!*\
  !*** ./src/js/keyValue.json ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"key\":\"ё\",\"shiftKey\":\"Ё\",\"keyEng\":\"`\",\"shiftKeyEng\":\"~\",\"code\":\"Backquote\",\"keyCode\":192,\"line\":1},{\"key\":\"1\",\"shiftKey\":\"!\",\"keyEng\":\"1\",\"shiftKeyEng\":\"!\",\"code\":\"Digit1\",\"keyCode\":49,\"line\":1},{\"key\":\"2\",\"shiftKey\":\"\\\\\"\",\"keyEng\":\"2\",\"shiftKeyEng\":\"@\",\"code\":\"Digit2\",\"keyCode\":50,\"line\":1},{\"key\":\"3\",\"shiftKey\":\"№\",\"keyEng\":\"3\",\"shiftKeyEng\":\"#\",\"code\":\"Digit3\",\"keyCode\":51,\"line\":1},{\"key\":\"4\",\"shiftKey\":\";\",\"keyEng\":\"4\",\"shiftKeyEng\":\"$\",\"code\":\"Digit4\",\"keyCode\":52,\"shiftKeyCode\":59,\"shiftKeyCodeEng\":164,\"line\":1},{\"key\":\"5\",\"shiftKey\":\";\",\"keyEng\":\"5\",\"shiftKeyEng\":\"$\",\"code\":\"Digit5\",\"keyCode\":53,\"line\":1},{\"key\":\"6\",\"shiftKey\":\":\",\"keyEng\":\"6\",\"shiftKeyEng\":\"^\",\"code\":\"Digit6\",\"keyCode\":54,\"shiftKeyCode\":58,\"shiftKeyCodeEng\":54,\"line\":1},{\"key\":\"7\",\"shiftKey\":\"?\",\"keyEng\":\"7\",\"shiftKeyEng\":\"&\",\"code\":\"Digit7\",\"keyCode\":55,\"line\":1},{\"key\":\"8\",\"shiftKey\":\"*\",\"keyEng\":\"8\",\"shiftKeyEng\":\"*\",\"code\":\"Digit8\",\"keyCode\":56,\"shiftKeyCode\":106,\"line\":1},{\"key\":\"9\",\"shiftKey\":\"(\",\"keyEng\":\"9\",\"shiftKeyEng\":\"(\",\"code\":\"Digit9\",\"keyCode\":57,\"line\":1},{\"key\":\"0\",\"shiftKey\":\")\",\"keyEng\":\"0\",\"shiftKeyEng\":\")\",\"code\":\"Digit0\",\"keyCode\":48,\"shiftKeyCode\":169,\"line\":1},{\"key\":\"-\",\"shiftKey\":\"_\",\"keyEng\":\"-\",\"shiftKeyEng\":\"_\",\"code\":\"Minus\",\"keyCode\":109,\"shiftKeyCode\":173,\"line\":1},{\"key\":\"=\",\"shiftKey\":\"+\",\"keyEng\":\"=\",\"shiftKeyEng\":\"+\",\"code\":\"Equal\",\"keyCode\":61,\"shiftKeyCode\":107,\"line\":1},{\"key\":\"Backspace\",\"shiftKey\":\"Backspace\",\"keyEng\":\"Backspace\",\"shiftKeyEng\":\"Backspace\",\"code\":\"Backspace\",\"keyCode\":8,\"line\":1},{\"key\":\"Tab\",\"shiftKey\":\"Tab\",\"keyEng\":\"Tab\",\"shiftKeyEng\":\"Tab\",\"code\":\"Tab\",\"keyCode\":9,\"line\":2},{\"key\":\"й\",\"shiftKey\":\"Й\",\"keyEng\":\"q\",\"shiftKeyEng\":\"Q\",\"code\":\"KeyQ\",\"keyCode\":81,\"line\":2},{\"key\":\"ц\",\"shiftKey\":\"Ц\",\"keyEng\":\"w\",\"shiftKeyEng\":\"W\",\"code\":\"KeyW\",\"keyCode\":87,\"line\":2},{\"key\":\"у\",\"shiftKey\":\"У\",\"keyEng\":\"e\",\"shiftKeyEng\":\"E\",\"code\":\"KeyE\",\"keyCode\":69,\"line\":2},{\"key\":\"к\",\"shiftKey\":\"К\",\"keyEng\":\"r\",\"shiftKeyEng\":\"R\",\"code\":\"KeyR\",\"keyCode\":82,\"line\":2},{\"key\":\"е\",\"shiftKey\":\"Е\",\"keyEng\":\"t\",\"shiftKeyEng\":\"T\",\"code\":\"KeyT\",\"keyCode\":84,\"line\":2},{\"key\":\"н\",\"shiftKey\":\"Н\",\"keyEng\":\"y\",\"shiftKeyEng\":\"Y\",\"code\":\"KeyY\",\"keyCode\":89,\"line\":2},{\"key\":\"г\",\"shiftKey\":\"Г\",\"keyEng\":\"u\",\"shiftKeyEng\":\"U\",\"code\":\"KeyU\",\"keyCode\":85,\"line\":2},{\"key\":\"ш\",\"shiftKey\":\"Ш\",\"keyEng\":\"i\",\"shiftKeyEng\":\"I\",\"code\":\"KeyI\",\"keyCode\":73,\"line\":2},{\"key\":\"щ\",\"shiftKey\":\"Щ\",\"keyEng\":\"o\",\"shiftKeyEng\":\"O\",\"code\":\"KeyO\",\"keyCode\":79,\"line\":2},{\"key\":\"з\",\"shiftKey\":\"З\",\"keyEng\":\"p\",\"shiftKeyEng\":\"P\",\"code\":\"KeyP\",\"keyCode\":80,\"line\":2},{\"key\":\"х\",\"shiftKey\":\"Х\",\"keyEng\":\"[\",\"shiftKeyEng\":\"{\",\"code\":\"BracketLeft\",\"keyCode\":219,\"line\":2},{\"key\":\"ъ\",\"shiftKey\":\"Ъ\",\"keyEng\":\"]\",\"shiftKeyEng\":\"}\",\"code\":\"BracketRight\",\"keyCode\":221,\"line\":2},{\"key\":\"\\\\\\\\\",\"shiftKey\":\"/\",\"keyEng\":\"\\\\\\\\\",\"shiftKeyEng\":\"|\",\"keyCode\":220,\"code\":\"Backslash\",\"line\":2},{\"key\":\"Delete\",\"shiftKey\":\"Delete\",\"keyEng\":\"Delete\",\"shiftKeyEng\":\"Delete\",\"code\":\"Delete\",\"keyCode\":46,\"line\":2},{\"key\":\"CapsLock\",\"shiftKey\":\"CapsLock\",\"keyEng\":\"CapsLock\",\"shiftKeyEng\":\"CapsLock\",\"code\":\"CapsLock\",\"keyCode\":20,\"line\":3},{\"key\":\"ф\",\"shiftKey\":\"Ф\",\"keyEng\":\"a\",\"shiftKeyEng\":\"A\",\"code\":\"KeyA\",\"keyCode\":65,\"line\":3},{\"key\":\"ы\",\"shiftKey\":\"Ы\",\"keyEng\":\"s\",\"shiftKeyEng\":\"S\",\"code\":\"KeyS\",\"keyCode\":83,\"line\":3},{\"key\":\"в\",\"shiftKey\":\"В\",\"keyEng\":\"d\",\"shiftKeyEng\":\"D\",\"code\":\"KeyD\",\"keyCode\":68,\"line\":3},{\"key\":\"а\",\"shiftKey\":\"А\",\"keyEng\":\"f\",\"shiftKeyEng\":\"F\",\"code\":\"KeyF\",\"keyCode\":70,\"line\":3},{\"key\":\"п\",\"shiftKey\":\"П\",\"keyEng\":\"g\",\"shiftKeyEng\":\"G\",\"code\":\"KeyG\",\"keyCode\":71,\"line\":3},{\"key\":\"р\",\"shiftKey\":\"Р\",\"keyEng\":\"h\",\"shiftKeyEng\":\"H\",\"code\":\"KeyH\",\"keyCode\":72,\"line\":3},{\"key\":\"о\",\"shiftKey\":\"О\",\"keyEng\":\"j\",\"shiftKeyEng\":\"J\",\"code\":\"KeyJ\",\"keyCode\":74,\"line\":3},{\"key\":\"л\",\"shiftKey\":\"Л\",\"keyEng\":\"k\",\"shiftKeyEng\":\"K\",\"code\":\"KeyK\",\"keyCode\":75,\"line\":3},{\"key\":\"д\",\"shiftKey\":\"Д\",\"keyEng\":\"l\",\"shiftKeyEng\":\"L\",\"code\":\"KeyL\",\"keyCode\":76,\"line\":3},{\"key\":\"ж\",\"shiftKey\":\"Ж\",\"keyEng\":\";\",\"shiftKeyEng\":\":\",\"code\":\"Semicolon\",\"keyCode\":186,\"shiftKeyCodeEng\":58,\"line\":3},{\"key\":\"э\",\"shiftKey\":\"Э\",\"keyEng\":\"\\'\",\"shiftKeyEng\":\"\\\\\"\",\"code\":\"Quote\",\"keyCode\":222,\"line\":3},{\"key\":\"Enter\",\"shiftKey\":\"Enter\",\"keyEng\":\"Enter\",\"shiftKeyEng\":\"Enter\",\"code\":\"Enter\",\"keyCode\":13,\"line\":3},{\"key\":\"Shift\",\"shiftKey\":\"Shift\",\"keyEng\":\"Shift\",\"shiftKeyEng\":\"Shift\",\"keyCode\":16,\"code\":\"ShiftLeft\",\"line\":4},{\"key\":\"я\",\"shiftKey\":\"Я\",\"keyEng\":\"z\",\"shiftKeyEng\":\"Z\",\"code\":\"KeyZ\",\"keyCode\":90,\"line\":4},{\"key\":\"ч\",\"shiftKey\":\"Ч\",\"keyEng\":\"x\",\"shiftKeyEng\":\"X\",\"code\":\"KeyX\",\"keyCode\":88,\"line\":4},{\"key\":\"с\",\"shiftKey\":\"С\",\"keyEng\":\"c\",\"shiftKeyEng\":\"C\",\"code\":\"KeyC\",\"keyCode\":67,\"line\":4},{\"key\":\"м\",\"shiftKey\":\"М\",\"keyEng\":\"v\",\"shiftKeyEng\":\"V\",\"code\":\"KeyV\",\"keyCode\":86,\"line\":4},{\"key\":\"и\",\"shiftKey\":\"И\",\"keyEng\":\"b\",\"shiftKeyEng\":\"B\",\"code\":\"KeyB\",\"keyCode\":66,\"line\":4},{\"key\":\"т\",\"shiftKey\":\"Т\",\"keyEng\":\"n\",\"shiftKeyEng\":\"N\",\"code\":\"KeyN\",\"keyCode\":78,\"line\":4},{\"key\":\"ь\",\"shiftKey\":\"Ь\",\"keyEng\":\"m\",\"shiftKeyEng\":\"M\",\"code\":\"KeyM\",\"keyCode\":77,\"line\":4},{\"key\":\"б\",\"shiftKey\":\"Б\",\"keyEng\":\",\",\"shiftKeyEng\":\"<\",\"code\":\"Comma\",\"keyCode\":188,\"shiftKeyCodeEng\":60,\"line\":4},{\"key\":\"ю\",\"shiftKey\":\"Ю\",\"keyEng\":\".\",\"shiftKeyEng\":\">\",\"code\":\"Period\",\"keyCode\":190,\"line\":4},{\"key\":\".\",\"shiftKey\":\",\",\"keyEng\":\"/\",\"shiftKeyEng\":\"?\",\"code\":\"Slash\",\"keyCode\":190,\"shiftKeyCode\":108,\"KeyCodeEng\":191,\"line\":4},{\"key\":\"↑\",\"shiftKey\":\"↑\",\"keyEng\":\"↑\",\"shiftKeyEng\":\"↑\",\"keyCode\":38,\"code\":\"ArrowUp\",\"line\":4},{\"key\":\"Shift\",\"shiftKey\":\"Shift\",\"keyEng\":\"Shift\",\"shiftKeyEng\":\"Shift\",\"keyCode\":16,\"code\":\"ShiftRight\",\"line\":4},{\"key\":\"Ctrl\",\"shiftKey\":\"Ctrl\",\"keyEng\":\"Ctrl\",\"shiftKeyEng\":\"Ctrl\",\"keyCode\":17,\"code\":\"ControlLeft\",\"line\":5},{\"key\":\"Win\",\"shiftKey\":\"Win\",\"keyEng\":\"Win\",\"shiftKeyEng\":\"Win\",\"code\":\"OSLeft\",\"keyCode\":91,\"line\":5},{\"key\":\"Alt\",\"shiftKey\":\"Alt\",\"keyEng\":\"Alt\",\"shiftKeyEng\":\"Alt\",\"keyCode\":18,\"code\":\"AltLeft\",\"line\":5},{\"key\":\" \",\"shiftKey\":\" \",\"keyEng\":\" \",\"shiftKeyEng\":\" \",\"code\":\"Space\",\"keyCode\":32,\"line\":5},{\"key\":\"Alt\",\"shiftKey\":\"Alt\",\"keyEng\":\"Alt\",\"shiftKeyEng\":\"Alt\",\"code\":\"AltRight\",\"keyCode\":18,\"line\":5},{\"key\":\"←\",\"shiftKey\":\"←\",\"keyEng\":\"←\",\"shiftKeyEng\":\"←\",\"keyCode\":37,\"code\":\"ArrowLeft\",\"line\":5},{\"key\":\"↓\",\"shiftKey\":\"↓\",\"keyEng\":\"↓\",\"shiftKeyEng\":\"↓\",\"keyCode\":40,\"code\":\"ArrowDown\",\"line\":5},{\"key\":\"→\",\"shiftKey\":\"→\",\"keyEng\":\"→\",\"shiftKeyEng\":\"→\",\"keyCode\":40,\"code\":\"ArrowRight\",\"line\":5},{\"key\":\"Ctrl\",\"shiftKey\":\"Ctrl\",\"keyEng\":\"Ctrl\",\"shiftKeyEng\":\"Ctrl\",\"code\":\"ControlRight\",\"keyCode\":17,\"line\":5}]');\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/keyValue.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `#content {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n}\n\n#player-holder {\n  width: 45%;\n  text-align: center;\n}\n\n#computer-holder {\n  width: 45%;\n  text-align: center;\n}\n\nheader {\n  text-align: center;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n}\n\n.gameboard-field {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n  border: 1px solid black;\n  text-align: center;\n\n  padding: 2px;\n  aspect-ratio: 1; /* Makes items square */\n}\n\n.gameboard-container {\n  display: grid;\n  border: 2px solid black;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/factories/Gameboard.js":
/*!************************************!*\
  !*** ./src/factories/Gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createGameboard: () => (/* binding */ createGameboard)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/factories/Ship.js\");\n\n\nconst createGameboard = (rows, cols) => {\n  let board = Array.from({ length: rows }, () => new Array(cols).fill(0));\n  let selectedRow = 0;\n  let selectedCol = 0;\n  const getBoard = () => {\n    return board;\n  };\n  const idxToRowCols = (idx) => {\n    const row = Math.floor(idx / board[0].length);\n\n    const col = idx % board.length;\n\n    return [row, col];\n  };\n  const rowColsToIdx = (row, col) => {\n    return row * board[0].length + col;\n  };\n  const selectField = (row, col) => {\n    selectedCol = col;\n    selectedRow = row;\n  };\n  const selectedField = () => {\n    return [selectedRow, selectedCol];\n  };\n  const placeShip = (startRow, startCol, endRow, endCol) => {\n    const length =\n      Math.abs(endRow - startRow) + Math.abs(endCol - startCol) + 1;\n    const ship = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__.createShip)(length);\n    if (startRow == endRow) {\n      // Horizontal placement\n      const minCol = Math.min(startCol, endCol);\n      const maxCol = Math.max(startCol, endCol);\n      for (let col = minCol; col <= maxCol; col++) {\n        board[startRow][col] = [ship];\n      }\n    } else if (startCol == endCol) {\n      // Vertical placement\n      const minRow = Math.min(startRow, endRow);\n      const maxRow = Math.max(startRow, endRow);\n      for (let row = minRow; row <= maxRow; row++) {\n        board[row][startCol] = [ship];\n      }\n    }\n  };\n  const receiveAttack = (row, col) => {\n    if (board[row][col] != 0) {\n      board[row][col][0].hit();\n      board[row][col].push(\"X\");\n    } else {\n      // missed attack\n      board[row][col] = \"X\";\n    }\n    for (let i = 0; i < board.length; i++) {\n      for (let j = 0; j < board[0].length; j++) {\n        if (Array.isArray(board[i][j])) {\n          if (board[i][j][0].isSunk()) {\n            board[i][j] = \"s\";\n          }\n        }\n      }\n    }\n  };\n  const isValidMove = (row, col) => {\n    if (Array.isArray(board[row][col])) {\n      if (board[row][col][1]) {\n        return false;\n      } else {\n        return true;\n      }\n    } else {\n      if (board[row][col] == \"X\" || board[row][col] == \"s\") {\n        return false;\n      } else {\n        return true;\n      }\n    }\n  };\n  const allSunk = () => {\n    for (let i = 0; i < board.length; i++) {\n      for (let j = 0; j < board[0].length; j++) {\n        if (Array.isArray(board[i][j])) {\n          return false;\n        }\n      }\n    }\n    return true;\n  };\n  return {\n    placeShip,\n    getBoard,\n    receiveAttack,\n    allSunk,\n    isValidMove,\n    selectField,\n    selectedField,\n    idxToRowCols,\n    rowColsToIdx,\n  };\n};\n\n\n//# sourceURL=webpack://battleship/./src/factories/Gameboard.js?");

/***/ }),

/***/ "./src/factories/Player.js":
/*!*********************************!*\
  !*** ./src/factories/Player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createPlayer: () => (/* binding */ createPlayer)\n/* harmony export */ });\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ \"./src/factories/Gameboard.js\");\n\n\nconst createPlayer = (row, col) => {\n  const gameboard = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__.createGameboard)(row, col);\n  return {\n    gameboard,\n  };\n};\n\n\n//# sourceURL=webpack://battleship/./src/factories/Player.js?");

/***/ }),

/***/ "./src/factories/Ship.js":
/*!*******************************!*\
  !*** ./src/factories/Ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createShip: () => (/* binding */ createShip)\n/* harmony export */ });\nconst createShip = (shipLength) => {\n  const length = shipLength;\n  let numberOfHits = 0;\n  const isShip = true;\n  const getLength = () => {\n    return length;\n  };\n  const getNumberOfHits = () => {\n    return numberOfHits;\n  };\n  const getShipStatus = () => {};\n  const hit = () => {\n    numberOfHits += 1;\n  };\n  const isSunk = () => {\n    if (numberOfHits >= shipLength) {\n      return true;\n    } else {\n      return false;\n    }\n  };\n\n  return { getLength, getNumberOfHits, getShipStatus, hit, isSunk, isShip };\n};\n\n\n//# sourceURL=webpack://battleship/./src/factories/Ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_gameController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/gameController */ \"./src/modules/gameController.js\");\n\n\n\nconst startButton = document.getElementById(\"start-button\");\n\nstartButton.addEventListener(\"click\", () => {\n  _modules_gameController__WEBPACK_IMPORTED_MODULE_1__.gameController.gameLoop();\n});\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/displayController.js":
/*!******************************************!*\
  !*** ./src/modules/displayController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayGameboard: () => (/* binding */ displayGameboard)\n/* harmony export */ });\nconst displayGameboard = (() => {\n  const render = (gb, type) => {\n    clear(type);\n    const gameboard = gb.getBoard();\n    const boardContainer = document.createElement(\"div\");\n    // choose the rigth id\n    if (type == \"player\") {\n      boardContainer.id = \"player-board\";\n    } else if (type == \"computer\") {\n      boardContainer.id = \"computer-board\";\n    } else {\n      console.log(\"not implemented type\");\n    }\n    boardContainer.classList.add(\"gameboard-container\");\n    // make rectangle\n    boardContainer.style.gridTemplateRows = `repeat(${gameboard.length}, 0.5fr)`;\n    boardContainer.style.gridTemplateColumns = `repeat(${gameboard[0].length}, 0.5fr)`;\n    for (let i = 0; i < gameboard.length * gameboard[0].length; i++) {\n      const gameBoardField = document.createElement(\"div\");\n      gameBoardField.classList.add(\"gameboard-field\");\n      gameBoardField.addEventListener(\"click\", () => {\n        const row = Math.floor(i / gameboard[0].length);\n        const col = i % gameboard.length;\n        gb.selectField(row, col);\n      });\n      // field content\n      if (Array.isArray(gameboard.flat()[i])) {\n        if (gameboard.flat()[i][0].isShip && gameboard.flat()[i][1] == \"X\") {\n          gameBoardField.textContent = \"xXx\";\n        }\n        if (\n          gameboard.flat()[i][0].isShip &&\n          type == \"player\" &&\n          !gameboard.flat()[i][1]\n        ) {\n          gameBoardField.textContent = \"ship\";\n        }\n      }\n\n      if (gameboard.flat()[i] == \"X\") {\n        gameBoardField.textContent = \"X\";\n      }\n      if (gameboard.flat()[i] == \"s\") {\n        gameBoardField.textContent = \"s\";\n      }\n      boardContainer.appendChild(gameBoardField);\n    }\n\n    // add to right id\n    if (type == \"player\") {\n      const playerBoard = document.getElementById(\"player-board\");\n      playerBoard.appendChild(boardContainer);\n    } else if (type == \"computer\") {\n      const computerBoard = document.getElementById(\"computer-board\");\n      computerBoard.appendChild(boardContainer);\n    } else {\n      console.log(\"not implemented type\");\n    }\n  };\n  const clear = (type) => {\n    if (type == \"player\") {\n      const playerBoard = document.getElementById(\"player-board\");\n      while (playerBoard.firstChild) {\n        playerBoard.removeChild(playerBoard.firstChild);\n      }\n    } else if (type == \"computer\") {\n      const computerBoard = document.getElementById(\"computer-board\");\n      while (computerBoard.firstChild) {\n        computerBoard.removeChild(computerBoard.firstChild);\n      }\n    } else {\n      console.log(\"not implemented type\");\n    }\n  };\n  const setUpPlayerBoard = (player) => {\n    return new Promise((resolve) => {\n      // const computerBoard = document.getElementById(\"computer-board\");\n      const cboard = document.getElementById(\"player-board\");\n      const computerfields = cboard.querySelectorAll(\".gameboard-field\");\n      for (let i = 0; i < computerfields.length; i++) {\n        computerfields[i].addEventListener(\"click\", () => {\n          resolve(player.gameboard.idxToRowCols(i));\n        });\n      }\n    });\n  };\n  const setTempShip = (row, col, player) => {\n    const cboard = document.getElementById(\"player-board\");\n    const computerfields = cboard.querySelectorAll(\".gameboard-field\");\n    const idx = player.gameboard.rowColsToIdx(row, col);\n\n    for (let i = 0; i < computerfields.length; i++) {\n      if (idx == i) {\n        computerfields[i].textContent = \"ship\";\n      }\n    }\n  };\n  const setGameStatus = (statusText) => {\n    const status = document.getElementById(\"game-status\");\n    status.textContent = statusText;\n  };\n  const getNumberOfShips = () => {\n    return Number(document.getElementById(\"number-ships\").value);\n  };\n  return {\n    render,\n    setUpPlayerBoard,\n    setGameStatus,\n    setTempShip,\n    getNumberOfShips,\n  };\n})();\n\n\n//# sourceURL=webpack://battleship/./src/modules/displayController.js?");

/***/ }),

/***/ "./src/modules/gameController.js":
/*!***************************************!*\
  !*** ./src/modules/gameController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameController: () => (/* binding */ gameController)\n/* harmony export */ });\n/* harmony import */ var _factories_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/Player */ \"./src/factories/Player.js\");\n/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController */ \"./src/modules/displayController.js\");\n\n\nconst gameController = (() => {\n  let player;\n  let computer;\n  const setUpGame = async () => {\n    const numberOfShips = _displayController__WEBPACK_IMPORTED_MODULE_1__.displayGameboard.getNumberOfShips();\n\n    player = (0,_factories_Player__WEBPACK_IMPORTED_MODULE_0__.createPlayer)(10, 10);\n    computer = (0,_factories_Player__WEBPACK_IMPORTED_MODULE_0__.createPlayer)(10, 10);\n    _displayController__WEBPACK_IMPORTED_MODULE_1__.displayGameboard.render(player.gameboard, \"player\");\n    _displayController__WEBPACK_IMPORTED_MODULE_1__.displayGameboard.render(computer.gameboard, \"computer\");\n    // let player place ships\n    for (let s = 0; s < numberOfShips; s++) {\n      const coordinates = [];\n      _displayController__WEBPACK_IMPORTED_MODULE_1__.displayGameboard.setGameStatus(\n        `Place ship number ${s + 1} of ${numberOfShips}`\n      );\n      for (let i = 0; i < 3; i++) {\n        _displayController__WEBPACK_IMPORTED_MODULE_1__.displayGameboard.setGameStatus(\n          `Place ship number ${s + 1}s module ${i + 1} of ${3} `\n        );\n        const coordinate = await _displayController__WEBPACK_IMPORTED_MODULE_1__.displayGameboard.setUpPlayerBoard(player);\n\n        // check ship is one ship\n        if (\n          i > 0 &&\n          ((Math.abs(coordinates[i - 1][0] - coordinate[0]) > 1 &&\n            Math.abs(coordinates[i - 1][1] - coordinate[1]) != 0) ||\n            (Math.abs(coordinates[i - 1][0] - coordinate[0]) != 0 &&\n              Math.abs(coordinates[i - 1][1] - coordinate[1]) > 0))\n        ) {\n          console.log(\"wrong\");\n\n          i -= 1;\n          continue;\n        }\n        _displayController__WEBPACK_IMPORTED_MODULE_1__.displayGameboard.setTempShip(coordinate[0], coordinate[1], player);\n\n        coordinates.push(coordinate);\n      }\n      // place ship horizontaly\n      if (coordinates.every((c) => c[0] === coordinates[0][0])) {\n        console.log(\"hi\");\n        const c1 = coordinates.sort((a, b) => a[1] - b[1])[0];\n        const c2 = coordinates.sort((a, b) => a[1] - b[1]).at(-1);\n        player.gameboard.placeShip(c1[0], c1[1], c2[0], c2[1]);\n      }\n      // playe ship verticaly\n      if (coordinates.every((c) => c[1] === coordinates[0][1])) {\n        const c3 = coordinates.sort((a, b) => a[0] - b[0])[0];\n        const c4 = coordinates.sort((a, b) => a[0] - b[0]).at(-1);\n        player.gameboard.placeShip(c3[0], c3[1], c4[0], c4[1]);\n      }\n    }\n\n    computer.gameboard.placeShip(0, 0, 0, 1);\n  };\n\n  const gameLoop = async () => {\n    await setUpGame();\n\n    // game loop\n    for (let i = 0; i < 110; i++) {\n      _displayController__WEBPACK_IMPORTED_MODULE_1__.displayGameboard.setGameStatus(\n        `All ships are set start attacking the enemy we are at round ${i + 1}`\n      );\n      _displayController__WEBPACK_IMPORTED_MODULE_1__.displayGameboard.render(player.gameboard, \"player\");\n      _displayController__WEBPACK_IMPORTED_MODULE_1__.displayGameboard.render(computer.gameboard, \"computer\");\n      // check win conditions\n      if (player.gameboard.allSunk()) {\n        console.log(\"computer has won\");\n        _displayController__WEBPACK_IMPORTED_MODULE_1__.displayGameboard.setGameStatus(`You have lost at round ${i}`);\n        break;\n      }\n\n      if (computer.gameboard.allSunk()) {\n        _displayController__WEBPACK_IMPORTED_MODULE_1__.displayGameboard.setGameStatus(`You have won at round ${i}`);\n        console.log(\"player has won\");\n        break;\n      }\n      let validMove = true;\n      // player move\n      while (validMove) {\n        const playerMoved = await waitForPlayerMove();\n\n        const [row, col] = computer.gameboard.selectedField();\n\n        validMove = computer.gameboard.isValidMove(row, col);\n        if (validMove) {\n          computer.gameboard.receiveAttack(row, col);\n          break;\n        }\n      }\n\n      // computer move\n      while (validMove) {\n        const r = getRandomInt(player.gameboard.getBoard().length);\n        const c = getRandomInt(player.gameboard.getBoard()[0].length);\n        validMove = player.gameboard.isValidMove(r, c);\n\n        if (validMove) {\n          player.gameboard.receiveAttack(r, c);\n          break;\n        }\n      }\n    }\n  };\n\n  const getRandomInt = (max) => {\n    return Math.floor(Math.random() * max);\n  };\n  const waitForPlayerMove = () => {\n    return new Promise((resolve) => {\n      // does not work in gaps\n      // const computerBoard = document.getElementById(\"computer-board\");\n      const computerfields = document.querySelectorAll(\".gameboard-field\");\n      for (let i = 0; i < computerfields.length; i++) {\n        computerfields[i].addEventListener(\"click\", () => {\n          resolve(true);\n        });\n      }\n    });\n  };\n  return {\n    gameLoop,\n  };\n})();\n\n\n//# sourceURL=webpack://battleship/./src/modules/gameController.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
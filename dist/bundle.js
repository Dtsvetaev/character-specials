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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSpecialAttacks: () => (/* binding */ getSpecialAttacks)\n/* harmony export */ });\n/**\r\n * Извлекает массив с вариантами атак персонажа, добавляя описание по умолчанию, если оно отсутствует.\r\n * @param {Object} character - Объект персонажа с информацией об атаках.\r\n * @returns {Array} Массив объектов с полями id, name, icon и description.\r\n */\nfunction getSpecialAttacks(_ref) {\n  var special = _ref.special;\n  return special.map(function (_ref2) {\n    var id = _ref2.id,\n      name = _ref2.name,\n      icon = _ref2.icon,\n      _ref2$description = _ref2.description,\n      description = _ref2$description === void 0 ? 'Описание недоступно' : _ref2$description;\n    return {\n      id: id,\n      name: name,\n      icon: icon,\n      description: description\n    };\n  });\n}\n\n// Пример объекта персонажа\nvar character = {\n  name: 'Лучник',\n  type: 'Bowman',\n  health: 50,\n  level: 3,\n  attack: 40,\n  defence: 10,\n  special: [{\n    id: 8,\n    name: 'Двойной выстрел',\n    icon: 'http://...',\n    description: 'Двойной выстрел наносит двойной урон'\n  }, {\n    id: 9,\n    name: 'Нокаутирующий удар',\n    icon: 'http://...'\n  }]\n};\n\n// Получаем специальные атаки персонажа\nvar specialAttacks = getSpecialAttacks(character);\n\n// Находим элемент с id=\"app\" и выводим специальные атаки\nvar appElement = document.getElementById('app');\nappElement.innerHTML = \"<pre>\".concat(JSON.stringify(specialAttacks, null, 2), \"</pre>\");\n\n//# sourceURL=webpack://character-specials/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const dialog = document.querySelector('dialog')\r\nconst addBtn = document.querySelector('#add-btn')\r\naddBtn.addEventListener('click',() => {\r\n  dialog.showModal()\r\n})\r\n\r\ndialog.addEventListener(\"click\", e => {\r\n  const dialogDimensions = dialog.getBoundingClientRect()\r\n  if (\r\n    e.clientX < dialogDimensions.left ||\r\n    e.clientX > dialogDimensions.right ||\r\n    e.clientY < dialogDimensions.top ||\r\n    e.clientY > dialogDimensions.bottom\r\n  ) {\r\n    dialog.close()\r\n  }\r\n})\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/tasks/route";
exports.ids = ["app/api/tasks/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/server/app-render/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/action-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftasks%2Froute&page=%2Fapi%2Ftasks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2Froute.js&appDir=C%3A%5CUsers%5Cjojo%5CDesktop%5Ctask2%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cjojo%5CDesktop%5Ctask2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftasks%2Froute&page=%2Fapi%2Ftasks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2Froute.js&appDir=C%3A%5CUsers%5Cjojo%5CDesktop%5Ctask2%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cjojo%5CDesktop%5Ctask2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_jojo_Desktop_task2_app_api_tasks_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/tasks/route.js */ \"(rsc)/./app/api/tasks/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/tasks/route\",\n        pathname: \"/api/tasks\",\n        filename: \"route\",\n        bundlePath: \"app/api/tasks/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\jojo\\\\Desktop\\\\task2\\\\app\\\\api\\\\tasks\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_jojo_Desktop_task2_app_api_tasks_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ0YXNrcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdGFza3MlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ0YXNrcyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNqb2pvJTVDRGVza3RvcCU1Q3Rhc2syJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNqb2pvJTVDRGVza3RvcCU1Q3Rhc2syJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNVO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxqb2pvXFxcXERlc2t0b3BcXFxcdGFzazJcXFxcYXBwXFxcXGFwaVxcXFx0YXNrc1xcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdGFza3Mvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS90YXNrc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdGFza3Mvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxqb2pvXFxcXERlc2t0b3BcXFxcdGFzazJcXFxcYXBwXFxcXGFwaVxcXFx0YXNrc1xcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftasks%2Froute&page=%2Fapi%2Ftasks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2Froute.js&appDir=C%3A%5CUsers%5Cjojo%5CDesktop%5Ctask2%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cjojo%5CDesktop%5Ctask2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-action-entry-loader.js?actions=%5B%5B%22C%3A%5C%5CUsers%5C%5Cjojo%5C%5CDesktop%5C%5Ctask2%5C%5Capp%5C%5Capi%5C%5Ctasks%5C%5Croute.js%22%2C%5B%5B%22002bca1b4cf9665a9b46e0b5bbbeb5e256a78ca36c%22%2C%22GET%22%5D%2C%5B%2240be8df2ca51fdc20a02a1fed3dba64a79b68ed061%22%2C%22POST%22%5D%5D%5D%5D&__client_imported__=!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-action-entry-loader.js?actions=%5B%5B%22C%3A%5C%5CUsers%5C%5Cjojo%5C%5CDesktop%5C%5Ctask2%5C%5Capp%5C%5Capi%5C%5Ctasks%5C%5Croute.js%22%2C%5B%5B%22002bca1b4cf9665a9b46e0b5bbbeb5e256a78ca36c%22%2C%22GET%22%5D%2C%5B%2240be8df2ca51fdc20a02a1fed3dba64a79b68ed061%22%2C%22POST%22%5D%5D%5D%5D&__client_imported__=! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"002bca1b4cf9665a9b46e0b5bbbeb5e256a78ca36c\": () => (/* reexport safe */ C_Users_jojo_Desktop_task2_app_api_tasks_route_js__WEBPACK_IMPORTED_MODULE_0__.GET),\n/* harmony export */   \"40be8df2ca51fdc20a02a1fed3dba64a79b68ed061\": () => (/* reexport safe */ C_Users_jojo_Desktop_task2_app_api_tasks_route_js__WEBPACK_IMPORTED_MODULE_0__.POST)\n/* harmony export */ });\n/* harmony import */ var C_Users_jojo_Desktop_task2_app_api_tasks_route_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/api/tasks/route.js */ \"(rsc)/./app/api/tasks/route.js\");\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWZsaWdodC1hY3Rpb24tZW50cnktbG9hZGVyLmpzP2FjdGlvbnM9JTVCJTVCJTIyQyUzQSU1QyU1Q1VzZXJzJTVDJTVDam9qbyU1QyU1Q0Rlc2t0b3AlNUMlNUN0YXNrMiU1QyU1Q2FwcCU1QyU1Q2FwaSU1QyU1Q3Rhc2tzJTVDJTVDcm91dGUuanMlMjIlMkMlNUIlNUIlMjIwMDJiY2ExYjRjZjk2NjVhOWI0NmUwYjViYmJlYjVlMjU2YTc4Y2EzNmMlMjIlMkMlMjJHRVQlMjIlNUQlMkMlNUIlMjI0MGJlOGRmMmNhNTFmZGMyMGEwMmExZmVkM2RiYTY0YTc5YjY4ZWQwNjElMjIlMkMlMjJQT1NUJTIyJTVEJTVEJTVEJTVEJl9fY2xpZW50X2ltcG9ydGVkX189ISIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ2dJO0FBQ0MiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCB7IEdFVCBhcyBcIjAwMmJjYTFiNGNmOTY2NWE5YjQ2ZTBiNWJiYmViNWUyNTZhNzhjYTM2Y1wiIH0gZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGpvam9cXFxcRGVza3RvcFxcXFx0YXNrMlxcXFxhcHBcXFxcYXBpXFxcXHRhc2tzXFxcXHJvdXRlLmpzXCJcbmV4cG9ydCB7IFBPU1QgYXMgXCI0MGJlOGRmMmNhNTFmZGMyMGEwMmExZmVkM2RiYTY0YTc5YjY4ZWQwNjFcIiB9IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxqb2pvXFxcXERlc2t0b3BcXFxcdGFzazJcXFxcYXBwXFxcXGFwaVxcXFx0YXNrc1xcXFxyb3V0ZS5qc1wiXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-action-entry-loader.js?actions=%5B%5B%22C%3A%5C%5CUsers%5C%5Cjojo%5C%5CDesktop%5C%5Ctask2%5C%5Capp%5C%5Capi%5C%5Ctasks%5C%5Croute.js%22%2C%5B%5B%22002bca1b4cf9665a9b46e0b5bbbeb5e256a78ca36c%22%2C%22GET%22%5D%2C%5B%2240be8df2ca51fdc20a02a1fed3dba64a79b68ed061%22%2C%22POST%22%5D%5D%5D%5D&__client_imported__=!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/tasks/route.js":
/*!********************************!*\
  !*** ./app/api/tasks/route.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! private-next-rsc-server-reference */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js\");\n/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-encryption */ \"(rsc)/./node_modules/next/dist/server/app-render/encryption.js\");\n/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.js\");\n/* harmony import */ var _kinde_oss_kinde_auth_nextjs_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kinde-oss/kinde-auth-nextjs/server */ \"(rsc)/./node_modules/@kinde-oss/kinde-auth-nextjs/dist/server.es.js\");\n/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! private-next-rsc-action-validate */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js\");\n/* __next_internal_action_entry_do_not_use__ {\"002bca1b4cf9665a9b46e0b5bbbeb5e256a78ca36c\":\"GET\",\"40be8df2ca51fdc20a02a1fed3dba64a79b68ed061\":\"POST\"} */ \n\n\n\n\nasync function GET() {\n    const tasks = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.task.findMany({\n        include: {\n            creator: true\n        },\n        orderBy: {\n            createdAt: 'desc'\n        }\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json(tasks);\n}\nasync function POST(req) {\n    try {\n        const { getUser } = (0,_kinde_oss_kinde_auth_nextjs_server__WEBPACK_IMPORTED_MODULE_4__.getKindeServerSession)();\n        const user = await getUser();\n        if (!user) return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: 'Unauthorized'\n        }, {\n            status: 401\n        });\n        const body = await req.json();\n        const { title, description } = body;\n        // ✅ Define base URL (fix)\n        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');\n        // ✅ Call AI insight route\n        const aiRes = await fetch(`${baseUrl}/api/ai-insight`, {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify({\n                title,\n                description\n            })\n        });\n        const aiData = aiRes.ok ? await aiRes.json() : {};\n        // ✅ Create task in Prisma\n        const task = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.task.create({\n            data: {\n                title,\n                description,\n                category: aiData.category || null,\n                difficulty: aiData.difficulty || null,\n                estimatedPrice: aiData.estimatedPrice || null,\n                creator: {\n                    connectOrCreate: {\n                        where: {\n                            kindeId: user.id\n                        },\n                        create: {\n                            kindeId: user.id,\n                            name: user.given_name || null,\n                            email: user.email || null,\n                            avatar: user.picture || null\n                        }\n                    }\n                }\n            },\n            include: {\n                creator: true\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json(task, {\n            status: 201\n        });\n    } catch (err) {\n        console.error(err);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: 'Failed'\n        }, {\n            status: 500\n        });\n    }\n}\n\n(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_5__.ensureServerEntryExports)([\n    GET,\n    POST\n]);\n(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__.registerServerReference)(GET, \"002bca1b4cf9665a9b46e0b5bbbeb5e256a78ca36c\", null);\n(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__.registerServerReference)(POST, \"40be8df2ca51fdc20a02a1fed3dba64a79b68ed061\", null);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Rhc2tzL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQzBDO0FBQ047QUFDdUM7QUFFcEUsZUFBZUc7SUFDcEIsTUFBTUMsUUFBUSxNQUFNSCwrQ0FBTUEsQ0FBQ0ksSUFBSSxDQUFDQyxRQUFRLENBQUM7UUFBRUMsU0FBUztZQUFFQyxTQUFTO1FBQUs7UUFBR0MsU0FBUztZQUFFQyxXQUFXO1FBQU87SUFBRTtJQUN0RyxPQUFPVixxREFBWUEsQ0FBQ1csSUFBSSxDQUFDUDtBQUMzQjtBQUVPLGVBQWVRLEtBQUtDLEdBQUc7SUFDNUIsSUFBSTtRQUNGLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUdaLDBGQUFxQkE7UUFDekMsTUFBTWEsT0FBTyxNQUFNRDtRQUNuQixJQUFJLENBQUNDLE1BQU0sT0FBT2YscURBQVlBLENBQUNXLElBQUksQ0FBQztZQUFFSyxPQUFPO1FBQWUsR0FBRztZQUFFQyxRQUFRO1FBQUk7UUFFN0UsTUFBTUMsT0FBTyxNQUFNTCxJQUFJRixJQUFJO1FBQzNCLE1BQU0sRUFBRVEsS0FBSyxFQUFFQyxXQUFXLEVBQUUsR0FBR0Y7UUFFL0IsMEJBQTBCO1FBQzFCLE1BQU1HLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0Msb0JBQW9CLElBQzFDRixDQUFBQSxRQUFRQyxHQUFHLENBQUNFLFVBQVUsR0FBRyxDQUFDLFFBQVEsRUFBRUgsUUFBUUMsR0FBRyxDQUFDRSxVQUFVLEVBQUUsR0FBRyx1QkFBc0I7UUFFM0YsMEJBQTBCO1FBQzFCLE1BQU1DLFFBQVEsTUFBTUMsTUFBTSxHQUFHTixRQUFRLGVBQWUsQ0FBQyxFQUFFO1lBQ3JETyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1lBQzlDWCxNQUFNWSxLQUFLQyxTQUFTLENBQUM7Z0JBQUVaO2dCQUFPQztZQUFZO1FBQzVDO1FBQ0EsTUFBTVksU0FBU04sTUFBTU8sRUFBRSxHQUFHLE1BQU1QLE1BQU1mLElBQUksS0FBSyxDQUFDO1FBRWhELDBCQUEwQjtRQUMxQixNQUFNTixPQUFPLE1BQU1KLCtDQUFNQSxDQUFDSSxJQUFJLENBQUM2QixNQUFNLENBQUM7WUFDcENDLE1BQU07Z0JBQ0poQjtnQkFDQUM7Z0JBQ0FnQixVQUFVSixPQUFPSSxRQUFRLElBQUk7Z0JBQzdCQyxZQUFZTCxPQUFPSyxVQUFVLElBQUk7Z0JBQ2pDQyxnQkFBZ0JOLE9BQU9NLGNBQWMsSUFBSTtnQkFDekM5QixTQUFTO29CQUNQK0IsaUJBQWlCO3dCQUNmQyxPQUFPOzRCQUFFQyxTQUFTMUIsS0FBSzJCLEVBQUU7d0JBQUM7d0JBQzFCUixRQUFROzRCQUNOTyxTQUFTMUIsS0FBSzJCLEVBQUU7NEJBQ2hCQyxNQUFNNUIsS0FBSzZCLFVBQVUsSUFBSTs0QkFDekJDLE9BQU85QixLQUFLOEIsS0FBSyxJQUFJOzRCQUNyQkMsUUFBUS9CLEtBQUtnQyxPQUFPLElBQUk7d0JBQzFCO29CQUNGO2dCQUNGO1lBQ0Y7WUFDQXhDLFNBQVM7Z0JBQUVDLFNBQVM7WUFBSztRQUMzQjtRQUVBLE9BQU9SLHFEQUFZQSxDQUFDVyxJQUFJLENBQUNOLE1BQU07WUFBRVksUUFBUTtRQUFJO0lBQy9DLEVBQUUsT0FBTytCLEtBQUs7UUFDWkMsUUFBUWpDLEtBQUssQ0FBQ2dDO1FBQ2QsT0FBT2hELHFEQUFZQSxDQUFDVyxJQUFJLENBQUM7WUFBRUssT0FBTztRQUFTLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzlEO0FBQ0Y7OztJQXREc0JkO0lBS0FTOztBQUxBVCwwRkFBQUEsQ0FBQUE7QUFLQVMsMEZBQUFBLENBQUFBIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGpvam9cXERlc2t0b3BcXHRhc2syXFxhcHBcXGFwaVxcdGFza3NcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcbmltcG9ydCB7cHJpc21hfSAgZnJvbSAnQC9saWIvcHJpc21hJ1xuaW1wb3J0IHsgZ2V0S2luZGVTZXJ2ZXJTZXNzaW9uIH0gZnJvbSAnQGtpbmRlLW9zcy9raW5kZS1hdXRoLW5leHRqcy9zZXJ2ZXInXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIGNvbnN0IHRhc2tzID0gYXdhaXQgcHJpc21hLnRhc2suZmluZE1hbnkoeyBpbmNsdWRlOiB7IGNyZWF0b3I6IHRydWUgfSwgb3JkZXJCeTogeyBjcmVhdGVkQXQ6ICdkZXNjJyB9IH0pXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih0YXNrcylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBnZXRVc2VyIH0gPSBnZXRLaW5kZVNlcnZlclNlc3Npb24oKVxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRVc2VyKClcbiAgICBpZiAoIXVzZXIpIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9LCB7IHN0YXR1czogNDAxIH0pXG5cbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxLmpzb24oKVxuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0gPSBib2R5XG5cbiAgICAvLyDinIUgRGVmaW5lIGJhc2UgVVJMIChmaXgpXG4gICAgY29uc3QgYmFzZVVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMIFxuICAgICAgfHwgKHByb2Nlc3MuZW52LlZFUkNFTF9VUkwgPyBgaHR0cHM6Ly8ke3Byb2Nlc3MuZW52LlZFUkNFTF9VUkx9YCA6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnKVxuXG4gICAgLy8g4pyFIENhbGwgQUkgaW5zaWdodCByb3V0ZVxuICAgIGNvbnN0IGFpUmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vYXBpL2FpLWluc2lnaHRgLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0aXRsZSwgZGVzY3JpcHRpb24gfSksXG4gICAgfSlcbiAgICBjb25zdCBhaURhdGEgPSBhaVJlcy5vayA/IGF3YWl0IGFpUmVzLmpzb24oKSA6IHt9XG5cbiAgICAvLyDinIUgQ3JlYXRlIHRhc2sgaW4gUHJpc21hXG4gICAgY29uc3QgdGFzayA9IGF3YWl0IHByaXNtYS50YXNrLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgY2F0ZWdvcnk6IGFpRGF0YS5jYXRlZ29yeSB8fCBudWxsLFxuICAgICAgICBkaWZmaWN1bHR5OiBhaURhdGEuZGlmZmljdWx0eSB8fCBudWxsLFxuICAgICAgICBlc3RpbWF0ZWRQcmljZTogYWlEYXRhLmVzdGltYXRlZFByaWNlIHx8IG51bGwsXG4gICAgICAgIGNyZWF0b3I6IHtcbiAgICAgICAgICBjb25uZWN0T3JDcmVhdGU6IHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGtpbmRlSWQ6IHVzZXIuaWQgfSxcbiAgICAgICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgICBraW5kZUlkOiB1c2VyLmlkLFxuICAgICAgICAgICAgICBuYW1lOiB1c2VyLmdpdmVuX25hbWUgfHwgbnVsbCxcbiAgICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwgfHwgbnVsbCxcbiAgICAgICAgICAgICAgYXZhdGFyOiB1c2VyLnBpY3R1cmUgfHwgbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiB7IGNyZWF0b3I6IHRydWUgfSxcbiAgICB9KVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHRhc2ssIHsgc3RhdHVzOiAyMDEgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGYWlsZWQnIH0sIHsgc3RhdHVzOiA1MDAgfSlcbiAgfVxufVxuXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwicHJpc21hIiwiZ2V0S2luZGVTZXJ2ZXJTZXNzaW9uIiwiR0VUIiwidGFza3MiLCJ0YXNrIiwiZmluZE1hbnkiLCJpbmNsdWRlIiwiY3JlYXRvciIsIm9yZGVyQnkiLCJjcmVhdGVkQXQiLCJqc29uIiwiUE9TVCIsInJlcSIsImdldFVzZXIiLCJ1c2VyIiwiZXJyb3IiLCJzdGF0dXMiLCJib2R5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImJhc2VVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQkFTRV9VUkwiLCJWRVJDRUxfVVJMIiwiYWlSZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiYWlEYXRhIiwib2siLCJjcmVhdGUiLCJkYXRhIiwiY2F0ZWdvcnkiLCJkaWZmaWN1bHR5IiwiZXN0aW1hdGVkUHJpY2UiLCJjb25uZWN0T3JDcmVhdGUiLCJ3aGVyZSIsImtpbmRlSWQiLCJpZCIsIm5hbWUiLCJnaXZlbl9uYW1lIiwiZW1haWwiLCJhdmF0YXIiLCJwaWN0dXJlIiwiZXJyIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/tasks/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        'query',\n        'error',\n        'warn'\n    ]\n});\nif (true) globalForPrisma.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkM7QUFFN0MsTUFBTUMsa0JBQWtCQztBQUVqQixNQUFNQyxTQUNYRixnQkFBZ0JFLE1BQU0sSUFDdEIsSUFBSUgsd0RBQVlBLENBQUM7SUFDZkksS0FBSztRQUFDO1FBQVM7UUFBUztLQUFPO0FBQ2pDLEdBQUU7QUFFSixJQUFJQyxJQUFxQyxFQUFFSixnQkFBZ0JFLE1BQU0sR0FBR0E7QUFFcEUsaUVBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9qb1xcRGVza3RvcFxcdGFzazJcXGxpYlxccHJpc21hLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5jb25zdCBnbG9iYWxGb3JQcmlzbWEgPSBnbG9iYWxUaGlzXG5cbmV4cG9ydCBjb25zdCBwcmlzbWEgPVxuICBnbG9iYWxGb3JQcmlzbWEucHJpc21hIHx8XG4gIG5ldyBQcmlzbWFDbGllbnQoe1xuICAgIGxvZzogWydxdWVyeScsICdlcnJvcicsICd3YXJuJ10sXG4gIH0pXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID0gcHJpc21hXG5cbmV4cG9ydCBkZWZhdWx0IHByaXNtYVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJsb2ciLCJwcm9jZXNzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@kinde","vendor-chunks/@kinde-oss","vendor-chunks/cookie","vendor-chunks/destr","vendor-chunks/uncrypto"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftasks%2Froute&page=%2Fapi%2Ftasks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2Froute.js&appDir=C%3A%5CUsers%5Cjojo%5CDesktop%5Ctask2%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cjojo%5CDesktop%5Ctask2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
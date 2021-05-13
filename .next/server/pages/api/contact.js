/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  let nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n\n  __webpack_require__(/*! dotenv */ \"dotenv\").config();\n\n  const transporter = nodemailer.createTransport({\n    port: 587,\n    host: \"mail.privateemail.com\",\n    auth: {\n      user: process.env.user,\n      pass: process.env.password\n    },\n    secure: false\n  });\n  const info = await transporter.sendMail({\n    from: ` 'Contact Email' <${process.env.user}>`,\n    to: process.env.email,\n    subject: `formulario de contacto: ${req.body.name}`,\n    text: `${req.body.message}\n\n    Email: ${req.body.email}\n    `\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0YWZvbGlvLy4vcGFnZXMvYXBpL2NvbnRhY3QuanM/YTBiMSJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJub2RlbWFpbGVyIiwicmVxdWlyZSIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0IiwicG9ydCIsImhvc3QiLCJhdXRoIiwidXNlciIsInByb2Nlc3MiLCJlbnYiLCJwYXNzIiwicGFzc3dvcmQiLCJzZWN1cmUiLCJpbmZvIiwic2VuZE1haWwiLCJmcm9tIiwidG8iLCJlbWFpbCIsInN1YmplY3QiLCJib2R5IiwibmFtZSIsInRleHQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkJBQWUsMENBQWdCQSxHQUFoQixFQUFxQkMsR0FBckIsRUFBMEI7QUFDdkMsTUFBSUMsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLDhCQUFELENBQXhCOztBQUNBQSxvREFBQTs7QUFDQSxRQUFNQyxXQUFXLEdBQUdGLFVBQVUsQ0FBQ0csZUFBWCxDQUEyQjtBQUM3Q0MsUUFBSSxFQUFFLEdBRHVDO0FBRTdDQyxRQUFJLEVBQUUsdUJBRnVDO0FBRzdDQyxRQUFJLEVBQUU7QUFDSkMsVUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFEZDtBQUVKRyxVQUFJLEVBQUVGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRTtBQUZkLEtBSHVDO0FBTzdDQyxVQUFNLEVBQUU7QUFQcUMsR0FBM0IsQ0FBcEI7QUFVQSxRQUFNQyxJQUFJLEdBQUksTUFBTVgsV0FBVyxDQUFDWSxRQUFaLENBQXFCO0FBQ3ZDQyxRQUFJLEVBQUcscUJBQW9CUCxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBSyxHQURMO0FBRXZDUyxNQUFFLEVBQUVSLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUSxLQUZ1QjtBQUd2Q0MsV0FBTyxFQUFHLDJCQUEwQnBCLEdBQUcsQ0FBQ3FCLElBQUosQ0FBU0MsSUFBSyxFQUhYO0FBSXZDQyxRQUFJLEVBQUcsR0FBRXZCLEdBQUcsQ0FBQ3FCLElBQUosQ0FBU0csT0FBUTtBQUM5QjtBQUNBLGFBQWF4QixHQUFHLENBQUNxQixJQUFKLENBQVNGLEtBQU07QUFDNUI7QUFQMkMsR0FBckIsQ0FBcEI7QUFTRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9jb250YWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gIGxldCBub2RlbWFpbGVyID0gcmVxdWlyZSgnbm9kZW1haWxlcicpXG4gIHJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpXG4gIGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICAgIHBvcnQ6IDU4NyxcbiAgICBob3N0OiBcIm1haWwucHJpdmF0ZWVtYWlsLmNvbVwiLFxuICAgIGF1dGg6IHtcbiAgICAgIHVzZXI6IHByb2Nlc3MuZW52LnVzZXIsXG4gICAgICBwYXNzOiBwcm9jZXNzLmVudi5wYXNzd29yZCxcbiAgICB9LFxuICAgIHNlY3VyZTogZmFsc2UsXG4gIH0pXG5cbiAgY29uc3QgaW5mbyA9ICBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbCh7XG4gICAgZnJvbTogYCAnQ29udGFjdCBFbWFpbCcgPCR7cHJvY2Vzcy5lbnYudXNlcn0+YCAsXG4gICAgdG86IHByb2Nlc3MuZW52LmVtYWlsLFxuICAgIHN1YmplY3Q6IGBmb3JtdWxhcmlvIGRlIGNvbnRhY3RvOiAke3JlcS5ib2R5Lm5hbWV9YCAsXG4gICAgdGV4dDogYCR7cmVxLmJvZHkubWVzc2FnZX1cblxuICAgIEVtYWlsOiAke3JlcS5ib2R5LmVtYWlsfVxuICAgIGBcbiAgfSlcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/contact.js\n");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("dotenv");;

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("nodemailer");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();
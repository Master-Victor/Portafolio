/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_victor_workspace_practica_lenguajes_Portafolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_victor_workspace_practica_lenguajes_Portafolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_victor_workspace_practica_lenguajes_Portafolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_victor_workspace_practica_lenguajes_Portafolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/victor/workspace/practica-lenguajes/Portafolio/pages/contact.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar contact = function contact() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      name = _useState[0],\n      setName = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      email = _useState2[0],\n      setEmail = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      message = _useState3[0],\n      setMessage = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      submitted = _useState4[0],\n      setSubmitted = _useState4[1];\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref = (0,_home_victor_workspace_practica_lenguajes_Portafolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_victor_workspace_practica_lenguajes_Portafolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {\n      var data;\n      return _home_victor_workspace_practica_lenguajes_Portafolio_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n\n              if (!(!email || !name || !message)) {\n                _context.next = 4;\n                break;\n              }\n\n              alert('mensaje vacio');\n              return _context.abrupt(\"return\");\n\n            case 4:\n              console.log('Sending');\n              data = {\n                name: name,\n                email: email,\n                message: message\n              };\n              _context.next = 8;\n              return fetch('/api/contact', {\n                method: 'POST',\n                headers: {\n                  'Accept': 'application/json, text/plain, */*',\n                  'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(data)\n              }).then(function (res) {\n                console.log('Response received');\n\n                if (res.status === 200) {\n                  console.log('Response succeeded!');\n                  setSubmitted(true);\n                  setName('');\n                  setEmail('');\n                  setBody('');\n                } else {\n                  console.log(\"error: \", res.status);\n                }\n              });\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return !submitted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__.default, {\n    dark: true,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"container\",\n      style: {\n        backgroundColor: '#eee',\n        width: '50%'\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"main\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          htmlFor: \"name\",\n          style: {\n            color: 'black'\n          },\n          children: \"Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          name: \"name\",\n          onChange: function onChange(e) {\n            setName(e.target.value);\n          },\n          className: \"inputField\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          htmlFor: \"email\",\n          style: {\n            color: 'black'\n          },\n          children: \"Email\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"email\",\n          name: \"email\",\n          onChange: function onChange(e) {\n            setEmail(e.target.value);\n          },\n          className: \"inputField\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          htmlFor: \"message\",\n          style: {\n            color: 'black'\n          },\n          children: \"Message\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          name: \"message\",\n          onChange: function onChange(e) {\n            setMessage(e.target.value);\n          },\n          className: \"inputField\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"submit\",\n          onClick: function onClick(e) {\n            handleSubmit(e);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 9\n  }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__.default, {\n    dark: true,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Mensaje enviado con exito\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 27\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 7\n  }, _this);\n};\n\n_s(contact, \"mgwrmhNP1Nc9tzujb1Aeea7MCVQ=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contact);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGFjdC5qcz8wMGI3Il0sIm5hbWVzIjpbImNvbnRhY3QiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic3VibWl0dGVkIiwic2V0U3VibWl0dGVkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsInN0YXR1cyIsInNldEJvZHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aWR0aCIsImNvbG9yIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBRU1DLCtDQUFRLENBQUMsRUFBRCxDQUZkO0FBQUEsTUFFWEMsSUFGVztBQUFBLE1BRUxDLE9BRks7O0FBQUEsbUJBR1FGLCtDQUFRLENBQUMsRUFBRCxDQUhoQjtBQUFBLE1BR1hHLEtBSFc7QUFBQSxNQUdKQyxRQUhJOztBQUFBLG1CQUlZSiwrQ0FBUSxDQUFDLEVBQUQsQ0FKcEI7QUFBQSxNQUlYSyxPQUpXO0FBQUEsTUFJRkMsVUFKRTs7QUFBQSxtQkFLZ0JOLCtDQUFRLENBQUMsS0FBRCxDQUx4QjtBQUFBLE1BS1hPLFNBTFc7QUFBQSxNQUtBQyxZQUxBOztBQU9sQixNQUFNQyxZQUFZO0FBQUEsMlRBQUcsaUJBQU9DLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCQSxlQUFDLENBQUNDLGNBQUY7O0FBRGlCLG9CQUVkLENBQUNSLEtBQUQsSUFBVSxDQUFDRixJQUFYLElBQW1CLENBQUNJLE9BRk47QUFBQTtBQUFBO0FBQUE7O0FBR2JPLG1CQUFLLENBQUMsZUFBRCxDQUFMO0FBSGE7O0FBQUE7QUFNakJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0VDLGtCQVBlLEdBT1I7QUFDUGQsb0JBQUksRUFBSkEsSUFETztBQUVQRSxxQkFBSyxFQUFMQSxLQUZPO0FBR1BFLHVCQUFPLEVBQVBBO0FBSE8sZUFQUTtBQUFBO0FBQUEscUJBWWJXLEtBQUssQ0FBQyxjQUFELEVBQWlCO0FBQ3hCQyxzQkFBTSxFQUFFLE1BRGdCO0FBRXhCQyx1QkFBTyxFQUFFO0FBQ1AsNEJBQVUsbUNBREg7QUFFUCxrQ0FBZ0I7QUFGVCxpQkFGZTtBQU14QkMsb0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVOLElBQWY7QUFOa0IsZUFBakIsQ0FBTCxDQU9ETyxJQVBDLENBT0ksVUFBQ0MsR0FBRCxFQUFTO0FBQ2ZWLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjs7QUFDQSxvQkFBSVMsR0FBRyxDQUFDQyxNQUFKLEtBQWUsR0FBbkIsRUFBd0I7QUFDdEJYLHlCQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBTiw4QkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBTix5QkFBTyxDQUFDLEVBQUQsQ0FBUDtBQUNBRSwwQkFBUSxDQUFDLEVBQUQsQ0FBUjtBQUNBcUIseUJBQU8sQ0FBQyxFQUFELENBQVA7QUFDRCxpQkFORCxNQU9JO0FBQ0FaLHlCQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXNCUyxHQUFHLENBQUNDLE1BQTFCO0FBQ0g7QUFDTixlQW5CTyxDQVphOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpmLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBaUNBLFNBQVEsQ0FBQ0YsU0FBRixnQkFDSCw4REFBQyx1REFBRDtBQUFRLFFBQUksRUFBRSxJQUFkO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUEyQixXQUFLLEVBQUU7QUFBQ21CLHVCQUFlLEVBQUUsTUFBbEI7QUFBMEJDLGFBQUssRUFBRTtBQUFqQyxPQUFsQztBQUFBLDZCQUNJO0FBQU8saUJBQVMsRUFBQyxNQUFqQjtBQUFBLGdDQUNJO0FBQVEsaUJBQU8sRUFBQyxNQUFoQjtBQUF1QixlQUFLLEVBQUU7QUFBQ0MsaUJBQUssRUFBRTtBQUFSLFdBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBUSxjQUFJLEVBQUMsTUFBYjtBQUFvQixjQUFJLEVBQUMsTUFBekI7QUFBZ0Msa0JBQVEsRUFBRSxrQkFBQ2xCLENBQUQsRUFBSztBQUFDUixtQkFBTyxDQUFDUSxDQUFDLENBQUNtQixNQUFGLENBQVNDLEtBQVYsQ0FBUDtBQUF3QixXQUF4RTtBQUEwRSxtQkFBUyxFQUFDO0FBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFRLGlCQUFPLEVBQUMsT0FBaEI7QUFBd0IsZUFBSyxFQUFFO0FBQUNGLGlCQUFLLEVBQUU7QUFBUixXQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISixlQUlJO0FBQVEsY0FBSSxFQUFDLE9BQWI7QUFBcUIsY0FBSSxFQUFDLE9BQTFCO0FBQWtDLGtCQUFRLEVBQUUsa0JBQUNsQixDQUFELEVBQUs7QUFBQ04sb0JBQVEsQ0FBQ00sQ0FBQyxDQUFDbUIsTUFBRixDQUFTQyxLQUFWLENBQVI7QUFBeUIsV0FBM0U7QUFBNkUsbUJBQVMsRUFBQztBQUF2RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKLGVBS0k7QUFBUSxpQkFBTyxFQUFDLFNBQWhCO0FBQTBCLGVBQUssRUFBRTtBQUFDRixpQkFBSyxFQUFFO0FBQVIsV0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEosZUFNSTtBQUFRLGNBQUksRUFBQyxNQUFiO0FBQW9CLGNBQUksRUFBQyxTQUF6QjtBQUFtQyxrQkFBUSxFQUFFLGtCQUFDbEIsQ0FBRCxFQUFLO0FBQUNKLHNCQUFVLENBQUNJLENBQUMsQ0FBQ21CLE1BQUYsQ0FBU0MsS0FBVixDQUFWO0FBQTJCLFdBQTlFO0FBQWdGLG1CQUFTLEVBQUM7QUFBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSixlQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEEsZUFRQTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXFCLGlCQUFPLEVBQUcsaUJBQUNwQixDQUFELEVBQU87QUFBQ0Qsd0JBQVksQ0FBQ0MsQ0FBRCxDQUFaO0FBQWdCO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERyxnQkFlTCw4REFBQyx1REFBRDtBQUFRLFFBQUksRUFBRSxJQUFkO0FBQUEsMkJBQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FmRjtBQWdCSCxDQXhERDs7R0FBTVgsTzs7QUEwRE4sK0RBQWVBLE9BQWYiLCJmaWxlIjoiLi9wYWdlcy9jb250YWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IGNvbnRhY3QgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtzdWJtaXR0ZWQsIHNldFN1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7IFxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaWYoIWVtYWlsIHx8ICFuYW1lIHx8ICFtZXNzYWdlKXtcbiAgICAgICAgICAgIGFsZXJ0KCdtZW5zYWplIHZhY2lvJylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdTZW5kaW5nJylcbiAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgZW1haWwsXG4gICAgICAgICAgbWVzc2FnZVxuICAgICAgICB9XG4gICAgICBhd2FpdCBmZXRjaCgnL2FwaS9jb250YWN0Jywge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXNwb25zZSByZWNlaXZlZCcpXG4gICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlIHN1Y2NlZWRlZCEnKVxuICAgICAgICAgICAgc2V0U3VibWl0dGVkKHRydWUpXG4gICAgICAgICAgICBzZXROYW1lKCcnKVxuICAgICAgICAgICAgc2V0RW1haWwoJycpXG4gICAgICAgICAgICBzZXRCb2R5KCcnKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBcIixyZXMuc3RhdHVzKVxuICAgICAgICAgIH1cbiAgICB9KVxufVxuICAgIHJldHVybiAoIXN1Ym1pdHRlZCkgPyhcbiAgICAgICAgPExheW91dCBkYXJrPXt0cnVlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlJywgd2lkdGg6ICc1MCUnfX0+XG4gICAgICAgICAgICAgICAgPCBmb3JtIGNsYXNzTmFtZT1cIm1haW5cIiA+XG4gICAgICAgICAgICAgICAgICAgIDwgbGFiZWwgaHRtbEZvcj0nbmFtZScgc3R5bGU9e3tjb2xvcjogJ2JsYWNrJ319Pk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8IGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J25hbWUnIG9uQ2hhbmdlPXsoZSk9PntzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX19IGNsYXNzTmFtZT1cImlucHV0RmllbGRcIiAvPiAgXG4gICAgICAgICAgICAgICAgICAgIDwgbGFiZWwgaHRtbEZvcj0nZW1haWwnIHN0eWxlPXt7Y29sb3I6ICdibGFjayd9fT5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwgaW5wdXQgdHlwZT0nZW1haWwnIG5hbWU9J2VtYWlsJyBvbkNoYW5nZT17KGUpPT57c2V0RW1haWwoZS50YXJnZXQudmFsdWUpfX0gY2xhc3NOYW1lPVwiaW5wdXRGaWVsZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwgbGFiZWwgaHRtbEZvcj0nbWVzc2FnZScgc3R5bGU9e3tjb2xvcjogJ2JsYWNrJ319Pk1lc3NhZ2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8IGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J21lc3NhZ2UnIG9uQ2hhbmdlPXsoZSk9PntzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX19IGNsYXNzTmFtZT1cImlucHV0RmllbGRcIiAvPlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPCBpbnB1dCB0eXBlPSdzdWJtaXQnb25DbGljaz17IChlKSA9PiB7aGFuZGxlU3VibWl0KGUpfSB9Lz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0gPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICk6PExheW91dCBkYXJrPXt0cnVlfT48aDE+TWVuc2FqZSBlbnZpYWRvIGNvbiBleGl0bzwvaDE+PC9MYXlvdXQ+XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

/***/ })

});
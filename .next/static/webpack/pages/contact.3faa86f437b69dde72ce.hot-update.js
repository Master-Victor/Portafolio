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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/victor/workspace/practica-lenguajes/Portafolio/pages/contact.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar contact = function contact() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      name = _useState[0],\n      setName = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      email = _useState2[0],\n      setEmail = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      message = _useState3[0],\n      setMessage = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      submitted = _useState4[0],\n      setSubmitted = _useState4[1];\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    console.log('Sending');\n    var data = {\n      name: name,\n      email: email,\n      message: message\n    };\n    fetch('/api/contact', {\n      method: 'POST',\n      headers: {\n        'Accept': 'application/json, text/plain, */*',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(data)\n    }).then(function (res) {\n      console.log('Response received');\n\n      if (res.status === 200) {\n        console.log('Response succeeded!');\n        setSubmitted(true);\n        setName('');\n        setEmail('');\n        setBody('');\n      } else {\n        console.log(\"error: \", res.status);\n      }\n\n      submitted ? alert('mensaje enviado con exito!') : alert('no se pudo enviar el mensaje');\n    });\n  };\n\n  return !submitted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n    dark: true,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"container\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"main\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          htmlFor: \"name\",\n          children: \"Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          name: \"name\",\n          onChange: function onChange(e) {\n            setName(e.target.value);\n          },\n          className: \"inputField\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          htmlFor: \"email\",\n          children: \"Email\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"email\",\n          name: \"email\",\n          onChange: function onChange(e) {\n            setEmail(e.target.value);\n          },\n          className: \"inputField\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          htmlFor: \"message\",\n          children: \"Message\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          name: \"message\",\n          onChange: function onChange(e) {\n            setMessage(e.target.value);\n          },\n          className: \"inputField\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"submit\",\n          onClick: function onClick(e) {\n            handleSubmit(e);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 9\n  }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n    dark: true,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Mensaje enviado con exito\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 27\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 7\n  }, _this);\n};\n\n_s(contact, \"mgwrmhNP1Nc9tzujb1Aeea7MCVQ=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contact);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGFjdC5qcz8wMGI3Il0sIm5hbWVzIjpbImNvbnRhY3QiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic3VibWl0dGVkIiwic2V0U3VibWl0dGVkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJzZXRCb2R5IiwiYWxlcnQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBRU1DLCtDQUFRLENBQUMsRUFBRCxDQUZkO0FBQUEsTUFFWEMsSUFGVztBQUFBLE1BRUxDLE9BRks7O0FBQUEsbUJBR1FGLCtDQUFRLENBQUMsRUFBRCxDQUhoQjtBQUFBLE1BR1hHLEtBSFc7QUFBQSxNQUdKQyxRQUhJOztBQUFBLG1CQUlZSiwrQ0FBUSxDQUFDLEVBQUQsQ0FKcEI7QUFBQSxNQUlYSyxPQUpXO0FBQUEsTUFJRkMsVUFKRTs7QUFBQSxtQkFLZ0JOLCtDQUFRLENBQUMsS0FBRCxDQUx4QjtBQUFBLE1BS1hPLFNBTFc7QUFBQSxNQUtBQyxZQUxBOztBQU9sQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDeEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0YsUUFBSUMsSUFBSSxHQUFHO0FBQ1BiLFVBQUksRUFBSkEsSUFETztBQUVQRSxXQUFLLEVBQUxBLEtBRk87QUFHUEUsYUFBTyxFQUFQQTtBQUhPLEtBQVg7QUFLQVUsU0FBSyxDQUFDLGNBQUQsRUFBaUI7QUFDbEJDLFlBQU0sRUFBRSxNQURVO0FBRWxCQyxhQUFPLEVBQUU7QUFDUCxrQkFBVSxtQ0FESDtBQUVQLHdCQUFnQjtBQUZULE9BRlM7QUFNbEJDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVOLElBQWY7QUFOWSxLQUFqQixDQUFMLENBT0tPLElBUEwsQ0FPVSxVQUFDQyxHQUFELEVBQVM7QUFDZlYsYUFBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7O0FBQ0EsVUFBSVMsR0FBRyxDQUFDQyxNQUFKLEtBQWUsR0FBbkIsRUFBd0I7QUFDdEJYLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaO0FBQ0FMLG9CQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0FOLGVBQU8sQ0FBQyxFQUFELENBQVA7QUFDQUUsZ0JBQVEsQ0FBQyxFQUFELENBQVI7QUFDQW9CLGVBQU8sQ0FBQyxFQUFELENBQVA7QUFDRCxPQU5ELE1BT0k7QUFDQVosZUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUFzQlMsR0FBRyxDQUFDQyxNQUExQjtBQUNIOztBQUNEaEIsZUFBUyxHQUFHa0IsS0FBSyxDQUFDLDRCQUFELENBQVIsR0FBeUNBLEtBQUssQ0FBQyw4QkFBRCxDQUF2RDtBQUNMLEtBcEJDO0FBcUJMLEdBN0JHOztBQStCQSxTQUFRLENBQUNsQixTQUFGLGdCQUNILDhEQUFDLHVEQUFEO0FBQVEsUUFBSSxFQUFFLElBQWQ7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0k7QUFBTyxpQkFBUyxFQUFDLE1BQWpCO0FBQUEsZ0NBQ0k7QUFBUSxpQkFBTyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBUSxjQUFJLEVBQUMsTUFBYjtBQUFvQixjQUFJLEVBQUMsTUFBekI7QUFBZ0Msa0JBQVEsRUFBRSxrQkFBQ0csQ0FBRCxFQUFLO0FBQUNSLG1CQUFPLENBQUNRLENBQUMsQ0FBQ2dCLE1BQUYsQ0FBU0MsS0FBVixDQUFQO0FBQXdCLFdBQXhFO0FBQTBFLG1CQUFTLEVBQUM7QUFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQVEsaUJBQU8sRUFBQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISixlQUlJO0FBQVEsY0FBSSxFQUFDLE9BQWI7QUFBcUIsY0FBSSxFQUFDLE9BQTFCO0FBQWtDLGtCQUFRLEVBQUUsa0JBQUNqQixDQUFELEVBQUs7QUFBQ04sb0JBQVEsQ0FBQ00sQ0FBQyxDQUFDZ0IsTUFBRixDQUFTQyxLQUFWLENBQVI7QUFBeUIsV0FBM0U7QUFBNkUsbUJBQVMsRUFBQztBQUF2RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKLGVBS0k7QUFBUSxpQkFBTyxFQUFDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxKLGVBTUk7QUFBUSxjQUFJLEVBQUMsTUFBYjtBQUFvQixjQUFJLEVBQUMsU0FBekI7QUFBbUMsa0JBQVEsRUFBRSxrQkFBQ2pCLENBQUQsRUFBSztBQUFDSixzQkFBVSxDQUFDSSxDQUFDLENBQUNnQixNQUFGLENBQVNDLEtBQVYsQ0FBVjtBQUEyQixXQUE5RTtBQUFnRixtQkFBUyxFQUFDO0FBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkosZUFPQTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXFCLGlCQUFPLEVBQUcsaUJBQUNqQixDQUFELEVBQU87QUFBQ0Qsd0JBQVksQ0FBQ0MsQ0FBRCxDQUFaO0FBQWdCO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERyxnQkFjTCw4REFBQyx1REFBRDtBQUFRLFFBQUksRUFBRSxJQUFkO0FBQUEsMkJBQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FkRjtBQWVILENBckREOztHQUFNWCxPOztBQXVETiwrREFBZUEsT0FBZiIsImZpbGUiOiIuL3BhZ2VzL2NvbnRhY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgY29udGFjdCA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3N1Ym1pdHRlZCwgc2V0U3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHsgXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zb2xlLmxvZygnU2VuZGluZycpXG4gICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgfVxuICAgICAgZmV0Y2goJy9hcGkvY29udGFjdCcsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKicsXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnUmVzcG9uc2UgcmVjZWl2ZWQnKVxuICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXNwb25zZSBzdWNjZWVkZWQhJylcbiAgICAgICAgICAgIHNldFN1Ym1pdHRlZCh0cnVlKVxuICAgICAgICAgICAgc2V0TmFtZSgnJylcbiAgICAgICAgICAgIHNldEVtYWlsKCcnKVxuICAgICAgICAgICAgc2V0Qm9keSgnJylcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjogXCIscmVzLnN0YXR1cylcbiAgICAgICAgICB9XG4gICAgICAgICAgc3VibWl0dGVkID8gYWxlcnQoJ21lbnNhamUgZW52aWFkbyBjb24gZXhpdG8hJykgOiBhbGVydCgnbm8gc2UgcHVkbyBlbnZpYXIgZWwgbWVuc2FqZScpIFxuICAgIH0pXG59XG5cbiAgICByZXR1cm4gKCFzdWJtaXR0ZWQpID8oXG4gICAgICAgIDxMYXlvdXQgZGFyaz17dHJ1ZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDwgZm9ybSBjbGFzc05hbWU9XCJtYWluXCIgPlxuICAgICAgICAgICAgICAgICAgICA8IGxhYmVsIGh0bWxGb3I9J25hbWUnPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8IGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J25hbWUnIG9uQ2hhbmdlPXsoZSk9PntzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX19IGNsYXNzTmFtZT1cImlucHV0RmllbGRcIiAvPiAgXG4gICAgICAgICAgICAgICAgICAgIDwgbGFiZWwgaHRtbEZvcj0nZW1haWwnPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPCBpbnB1dCB0eXBlPSdlbWFpbCcgbmFtZT0nZW1haWwnIG9uQ2hhbmdlPXsoZSk9PntzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9fSBjbGFzc05hbWU9XCJpbnB1dEZpZWxkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPCBsYWJlbCBodG1sRm9yPSdtZXNzYWdlJz5NZXNzYWdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPCBpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdtZXNzYWdlJyBvbkNoYW5nZT17KGUpPT57c2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9fSBjbGFzc05hbWU9XCJpbnB1dEZpZWxkXCIgLz5cbiAgICAgICAgICAgICAgICA8IGlucHV0IHR5cGU9J3N1Ym1pdCdvbkNsaWNrPXsgKGUpID0+IHtoYW5kbGVTdWJtaXQoZSl9IH0vPlxuICAgICAgICAgICAgICAgIDwvZm9ybSA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTo8TGF5b3V0IGRhcms9e3RydWV9PjxoMT5NZW5zYWplIGVudmlhZG8gY29uIGV4aXRvPC9oMT48L0xheW91dD5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

/***/ })

});
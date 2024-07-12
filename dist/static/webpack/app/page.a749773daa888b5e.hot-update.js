"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Team/Slide/Slide.tsx":
/*!*********************************************!*\
  !*** ./src/components/Team/Slide/Slide.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Slide: function() { return /* binding */ Slide; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css */ \"(app-pages-browser)/./node_modules/swiper/swiper.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css/pagination */ \"(app-pages-browser)/./node_modules/swiper/modules/pagination.css\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var _Team_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Team.data */ \"(app-pages-browser)/./src/components/Team/Team.data.ts\");\n/* harmony import */ var _components_Reveal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Reveal */ \"(app-pages-browser)/./src/components/Reveal/index.ts\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/modules */ \"(app-pages-browser)/./node_modules/swiper/modules/index.mjs\");\n\n\n\n\n\n\n\n\nfunction Slide() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {\n        breakpoints: {\n            320: {\n                slidesPerView: 1,\n                spaceBetween: 15\n            },\n            678: {\n                slidesPerView: 3,\n                spaceBetween: 15\n            }\n        },\n        freeMode: true,\n        pagination: {\n            clickable: true\n        },\n        mousewheel: {\n            forceToAxis: true,\n            sensitivity: 1\n        },\n        modules: [\n            swiper_modules__WEBPACK_IMPORTED_MODULE_7__.Navigation,\n            swiper_modules__WEBPACK_IMPORTED_MODULE_7__.Pagination,\n            swiper_modules__WEBPACK_IMPORTED_MODULE_7__.Mousewheel,\n            swiper_modules__WEBPACK_IMPORTED_MODULE_7__.Keyboard\n        ],\n        className: \"h-[250px] w-full md:max-w-7xl\",\n        children: _Team_data__WEBPACK_IMPORTED_MODULE_5__.dataTeam.map((param)=>/*#__PURE__*/ {\n            let { id, name, work, image } = param;\n            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {\n                className: \"my-5 cursor-pointer md:px-10 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Reveal__WEBPACK_IMPORTED_MODULE_6__.Reveal, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center bg-pink-950\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: image,\n                                alt: name,\n                                width: 100,\n                                height: 100,\n                                className: \"mr-5 rounded-full\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nahuelscudaletti/Documents/newlanding-thisnight/src/components/Team/Slide/Slide.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col justify-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"text-center\",\n                                        children: name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nahuelscudaletti/Documents/newlanding-thisnight/src/components/Team/Slide/Slide.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-primaryDark\",\n                                        children: work\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nahuelscudaletti/Documents/newlanding-thisnight/src/components/Team/Slide/Slide.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nahuelscudaletti/Documents/newlanding-thisnight/src/components/Team/Slide/Slide.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nahuelscudaletti/Documents/newlanding-thisnight/src/components/Team/Slide/Slide.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/nahuelscudaletti/Documents/newlanding-thisnight/src/components/Team/Slide/Slide.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 21\n                }, this)\n            }, id, false, {\n                fileName: \"/Users/nahuelscudaletti/Documents/newlanding-thisnight/src/components/Team/Slide/Slide.tsx\",\n                lineNumber: 35,\n                columnNumber: 17\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/nahuelscudaletti/Documents/newlanding-thisnight/src/components/Team/Slide/Slide.tsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n_c = Slide;\nvar _c;\n$RefreshReg$(_c, \"Slide\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RlYW0vU2xpZGUvU2xpZGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1CO0FBQ1c7QUFDQTtBQUNvQjtBQUNYO0FBQ0s7QUFDaUM7QUFHdEUsU0FBU1M7SUFDWixxQkFDSSw4REFBQ1IsZ0RBQU1BO1FBQ0hTLGFBQWE7WUFDVCxLQUFLO2dCQUNEQyxlQUFlO2dCQUNmQyxjQUFjO1lBQ2xCO1lBQ0EsS0FBSztnQkFDREQsZUFBZTtnQkFDZkMsY0FBYztZQUNsQjtRQUNKO1FBQ0FDLFVBQVU7UUFDVkMsWUFBWTtZQUNSQyxXQUFXO1FBQ2Y7UUFDQUMsWUFBWTtZQUNSQyxhQUFhO1lBQ2JDLGFBQWE7UUFDakI7UUFDQUMsU0FBUztZQUFDWixzREFBVUE7WUFBRUMsc0RBQVVBO1lBQUVGLHNEQUFVQTtZQUFFRCxvREFBUUE7U0FBQztRQUN2RGUsV0FBVTtrQkFFVGpCLGdEQUFRQSxDQUFDa0IsR0FBRyxDQUFDO2dCQUFDLEVBQUVDLEVBQUUsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRTttQkFDcEMsOERBQUN2QixxREFBV0E7Z0JBQVVrQixXQUFVOzBCQUM1Qiw0RUFBQ2hCLHNEQUFNQTs4QkFDSCw0RUFBQ3NCO3dCQUFJTixXQUFVOzswQ0FDWCw4REFBQ3BCLG1EQUFLQTtnQ0FDRjJCLEtBQUtGO2dDQUNMRyxLQUFLTDtnQ0FDTE0sT0FBTztnQ0FDUEMsUUFBUTtnQ0FDUlYsV0FBVTs7Ozs7OzBDQUVkLDhEQUFDTTtnQ0FBSU4sV0FBVTs7a0RBQ1gsOERBQUNXO3dDQUFHWCxXQUFVO2tEQUFlRzs7Ozs7O2tEQUM3Qiw4REFBQ1M7d0NBQUVaLFdBQVU7a0RBQW9CSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFaL0JGOzs7OztRQWdCTDs7Ozs7O0FBSTdCO0tBN0NnQmIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGVhbS9TbGlkZS9TbGlkZS50c3g/NTRmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3N3aXBlci9jc3MnXG5pbXBvcnQgJ3N3aXBlci9jc3MvcGFnaW5hdGlvbidcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gJ3N3aXBlci9yZWFjdCdcbmltcG9ydCB7IGRhdGFUZWFtIH0gZnJvbSAnLi4vVGVhbS5kYXRhJ1xuaW1wb3J0IHsgUmV2ZWFsIH0gZnJvbSAnQC9jb21wb25lbnRzL1JldmVhbCdcbmltcG9ydCB7IEtleWJvYXJkLCBNb3VzZXdoZWVsLCBOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uIH0gZnJvbSAnc3dpcGVyL21vZHVsZXMnXG5pbXBvcnQgeyBnZXRCYXNlUGF0aCB9IGZyb20gJ0AvdXRpbHMvdXRpbHMnXG5cbmV4cG9ydCBmdW5jdGlvbiBTbGlkZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U3dpcGVyXG4gICAgICAgICAgICBicmVha3BvaW50cz17e1xuICAgICAgICAgICAgICAgIDMyMDoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDE1XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICA2Nzg6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBmcmVlTW9kZT17dHJ1ZX1cbiAgICAgICAgICAgIHBhZ2luYXRpb249e3tcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBtb3VzZXdoZWVsPXt7XG4gICAgICAgICAgICAgICAgZm9yY2VUb0F4aXM6IHRydWUsXG4gICAgICAgICAgICAgICAgc2Vuc2l0aXZpdHk6IDFcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBtb2R1bGVzPXtbTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiwgTW91c2V3aGVlbCwgS2V5Ym9hcmRdfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1bMjUwcHhdIHctZnVsbCBtZDptYXgtdy03eGxcIlxuICAgICAgICA+XG4gICAgICAgICAgICB7ZGF0YVRlYW0ubWFwKCh7IGlkLCBuYW1lLCB3b3JrLCBpbWFnZSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17aWR9IGNsYXNzTmFtZT1cIm15LTUgY3Vyc29yLXBvaW50ZXIgbWQ6cHgtMTAgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxSZXZlYWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGJnLXBpbmstOTUwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTUgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj57bmFtZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlEYXJrXCI+e3dvcmt9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvUmV2ZWFsPlxuICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9Td2lwZXI+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJkYXRhVGVhbSIsIlJldmVhbCIsIktleWJvYXJkIiwiTW91c2V3aGVlbCIsIk5hdmlnYXRpb24iLCJQYWdpbmF0aW9uIiwiU2xpZGUiLCJicmVha3BvaW50cyIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJmcmVlTW9kZSIsInBhZ2luYXRpb24iLCJjbGlja2FibGUiLCJtb3VzZXdoZWVsIiwiZm9yY2VUb0F4aXMiLCJzZW5zaXRpdml0eSIsIm1vZHVsZXMiLCJjbGFzc05hbWUiLCJtYXAiLCJpZCIsIm5hbWUiLCJ3b3JrIiwiaW1hZ2UiLCJkaXYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImg0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Team/Slide/Slide.tsx\n"));

/***/ })

});
webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/Layout */ "./layout/Layout.js");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/index.scss */ "./scss/index.scss");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined,
    _jsxFileName = "/home/solita12/devel/solitaire-webapp/pages/_app.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // import 'bootstrap/dist/js/bootstrap.bundle'

var config = {
  appName: ''
};

var App = function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  var title = pageProps.title,
      description = pageProps.description,
      keywords = pageProps.keywords;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("meta", {
    httpEquiv: "Content-Type",
    content: "text/html; charset=utf-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "theme-color",
    content: "#000000",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "robots",
    content: "index, follow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "icon",
    href: "/icons/favicon.ico",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), "//          ", __jsx("link", {
    rel: "preconnect",
    href: "https://googleads.g.doubleclick.net",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), "//          ", __jsx("link", {
    rel: "preconnect",
    href: "https://adservice.google.mk",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }), "//          ", __jsx("link", {
    rel: "preconnect",
    href: "https://adservice.google.com",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }), "//          ", __jsx("link", {
    rel: "preconnect",
    href: "http://ajax.googleapis.com",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "preconnect",
    href: "http://cookie-script.com",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), "//          ", __jsx("script", {
    "data-ad-client": "ca-pub-8160014187918469",
    async: true,
    src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), __jsx("script", {
    async: true,
    crossOrigin: "anonymous",
    src: "//cookie-script.com/s/1585fc872fa92d28180e2a6e9ead9e0b.js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "57x57",
    href: "/icons/apple-icon-57x57.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "60x60",
    href: "/icons/apple-icon-60x60.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: "/icons/apple-icon-72x72.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "76x76",
    href: "/icons/apple-icon-76x76.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/icons/apple-icon-114x114.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/icons/apple-icon-120x120.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/icons/apple-icon-144x144.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "/icons/apple-icon-152x152.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/icons/apple-icon-180x180.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "192x192",
    href: "/icons/android-icon-192x192.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/icons/favicon-32x32.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
    href: "/icons/favicon-96x96.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/icons/favicon-16x16.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "manifest",
    href: "/manifest.json",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "description",
    content: description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "keywords",
    content: keywords,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }), __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, title)), __jsx(_layout_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pageName: Component.name.toLowerCase(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=_app.js.81b0a10230ec7d333057.hot-update.js.map
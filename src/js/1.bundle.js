webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	  function Bolding(id) {
	    this.element = document.getElementById(id);
	  }
	  Bolding.prototype.fat = function () {
	    console.log('amigo');
	    this.element.style.fontWeight = "bold";
	  };
	  return Bolding;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
]);
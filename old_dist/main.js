(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/CcrCardModels/ccr-card-model.ts":
/*!*************************************************!*\
  !*** ./src/app/CcrCardModels/ccr-card-model.ts ***!
  \*************************************************/
/*! exports provided: SeverityLevel, CcrType, CcrUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeverityLevel", function() { return SeverityLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcrType", function() { return CcrType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcrUtil", function() { return CcrUtil; });
var SeverityLevel;
(function (SeverityLevel) {
    SeverityLevel[SeverityLevel["Informational"] = 0] = "Informational";
    SeverityLevel[SeverityLevel["Warning"] = 1] = "Warning";
    SeverityLevel[SeverityLevel["Immediate"] = 2] = "Immediate";
    SeverityLevel[SeverityLevel["Alert"] = 3] = "Alert";
})(SeverityLevel || (SeverityLevel = {}));
var CcrType;
(function (CcrType) {
    CcrType["Customer"] = "Customer";
    CcrType["Certificate"] = "Certificates";
    CcrType["AppService"] = "Application";
    CcrType["Database"] = "Database";
    CcrType["Storage"] = "Storage";
    CcrType["Misc"] = "Other assets";
})(CcrType || (CcrType = {}));
var CcrUtil = /** @class */ (function () {
    function CcrUtil() {
    }
    CcrUtil.toString = function (ct) {
        return CcrType[ct];
    };
    return CcrUtil;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 767px) {\r\n  /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n  /*.body-content {\r\n    padding-top: 50px;\r\n  }*/\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4RkFBOEY7RUFDOUY7O0tBRUc7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLyogT24gc21hbGwgc2NyZWVucywgdGhlIG5hdiBtZW51IHNwYW5zIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBzY3JlZW4uIExlYXZlIGEgc3BhY2UgZm9yIGl0LiAqL1xyXG4gIC8qLmJvZHktY29udGVudCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICB9Ki9cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\r\n  <div class='row'>\r\n    <!--<div class='col-sm-3'>\r\n      <app-nav-menu></app-nav-menu>\r\n    </div>-->\r\n    <div class='col-sm-12 body-content'>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _services_statusmonitor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/statusmonitor.service */ "./src/app/services/statusmonitor.service.ts");
/* harmony import */ var _installationstatuses_showstatuses_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./installationstatuses/showstatuses.component */ "./src/app/installationstatuses/showstatuses.component.ts");
/* harmony import */ var _customerassets_customerassets_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customerassets/customerassets.component */ "./src/app/customerassets/customerassets.component.ts");
/* harmony import */ var _ccr_card_ccr_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ccr-card/ccr-card.component */ "./src/app/ccr-card/ccr-card.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _installationstatuses_showstatuses_component__WEBPACK_IMPORTED_MODULE_10__["ShowStatusesComponent"],
                _customerassets_customerassets_component__WEBPACK_IMPORTED_MODULE_11__["CustomerAssetsComponent"],
                _ccr_card_ccr_card_component__WEBPACK_IMPORTED_MODULE_12__["CcrCardComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                    { path: '', redirectTo: 'show-statuses', pathMatch: 'full' },
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
                    { path: 'show-statuses', component: _installationstatuses_showstatuses_component__WEBPACK_IMPORTED_MODULE_10__["ShowStatusesComponent"] },
                    { path: 'update-statuses', component: _installationstatuses_showstatuses_component__WEBPACK_IMPORTED_MODULE_10__["ShowStatusesComponent"] },
                    //{ path: 'customer-assets', component: CustomerAssetsComponent },
                    { path: '**', redirectTo: 'home' }
                ])
            ],
            providers: [_services_statusmonitor_service__WEBPACK_IMPORTED_MODULE_9__["StatusMonitorService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/ccr-card/ccr-card.component.css":
/*!*************************************************!*\
  !*** ./src/app/ccr-card/ccr-card.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*:root {\r\n  --rusty-orange: #ed7314;\r\n  --raisin-black: #291f1e;\r\n  --queen-blue: #477998;\r\n  --moss-green: #c4d6b0;\r\n  --olive-drab: #3d3522;\r\n}*/\r\n\r\n:host {\r\n  display: block;\r\n  padding: 0;\r\n  padding-bottom: 0;\r\n  margin-bottom: 10px;\r\n  /*border-top: 6px solid green;*/\r\n  border-top: 6px solid green;\r\n  border-bottom: 1px double black;\r\n}\r\n\r\n:host(.warning) {\r\n  border-top: 6px solid #dfd706;\r\n  /*border-bottom: 6px solid #dfd706;*/\r\n}\r\n\r\n:host(.immediate) {\r\n  border-top: 6px solid orange;\r\n  /*border-bottom: 6px solid orange;*/\r\n}\r\n\r\n:host(.alert1) {\r\n  border-top: 6px solid red;\r\n  /*border-bottom: 6px solid red;*/\r\n}\r\n\r\n.content {\r\n  /*border-right: 10pt solid black;*/\r\n  font-family: 'Segoe UI';\r\n  font-size: small;\r\n  margin: 0 auto;\r\n  width: 100%;\r\n\r\n  /*text-align: left !important;\r\n  align-content: flex-start;\r\n  align-items: flex-start;*/\r\n  position: relative;\r\n  left: 10px;\r\n  /*max-width: 400px;*/\r\n}\r\n\r\n.field {\r\n  width: 60px !important;\r\n  max-width: 60px !important;\r\n  float: left;\r\n  padding: 10px;\r\n  position:relative;\r\n  background-color: #6eb8f8;\r\n  border-left: 10px solid green;\r\n  border-right: 1px double black;\r\n  color: white;\r\n  font-size:x-small;\r\n  font-weight:500;\r\n  text-align: center;\r\n  grid-area: left;\r\n}\r\n\r\n/*.field .fieldDesc{\r\n  position: absolute;\r\n  top: 70px;\r\n  left: 10px;\r\n\r\n}*/\r\n\r\n@media screen and (max-width: 1000px) {\r\n  .content {\r\n    font-size: large;\r\n  }\r\n  .fieldDesc{\r\n    font-size:small;\r\n  }\r\n}\r\n\r\n.field > img {\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n  width: 50%;\r\n  height: 30px;\r\n  /*max-width: 45px !important;*/\r\n  margin: 10px;\r\n  padding-left: 2px;\r\n}\r\n\r\n.warning {\r\n  border-left: 10px solid #dfd706;\r\n  list-style-image: url('li-el-warn.png');\r\n}\r\n\r\n.immediate {\r\n  border-left: 10px solid orange;\r\n  list-style-image: url('li-el-imd.png');\r\n}\r\n\r\n.alert1 {\r\n  border-left: 10px solid red;\r\n  list-style-image: url('li-el-alrt.png');\r\n}\r\n\r\n.content > ul {\r\n  text-align: left !important;\r\n  padding-left: 0;\r\n  list-style-image: url('li-el-info.png');\r\n  min-width: 100% !important;\r\n}\r\n\r\nli:nth-child(2) {\r\n  list-style-image: url('li-el-alrt.png');\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2NyLWNhcmQvY2NyLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUg7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1QixnQ0FBZ0M7Q0FDakM7O0FBRUQ7RUFDRSw4QkFBOEI7RUFDOUIscUNBQXFDO0NBQ3RDOztBQUVEO0VBQ0UsNkJBQTZCO0VBQzdCLG9DQUFvQztDQUNyQzs7QUFFRDtFQUNFLDBCQUEwQjtFQUMxQixpQ0FBaUM7Q0FDbEM7O0FBSUQ7RUFDRSxtQ0FBbUM7RUFDbkMsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTs7RUFFWjs7NEJBRTBCO0VBQzFCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gscUJBQXFCO0NBQ3RCOztBQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0NBQ2pCOztBQUVEOzs7OztHQUtHOztBQUVIO0VBQ0U7SUFDRSxpQkFBaUI7R0FDbEI7RUFDRDtJQUNFLGdCQUFnQjtHQUNqQjtDQUNGOztBQUVEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLGtCQUFrQjtDQUNuQjs7QUFHRDtFQUNFLGdDQUFnQztFQUNoQyx3Q0FBeUQ7Q0FDMUQ7O0FBRUQ7RUFDRSwrQkFBK0I7RUFDL0IsdUNBQXdEO0NBQ3pEOztBQUVEO0VBQ0UsNEJBQTRCO0VBQzVCLHdDQUF5RDtDQUMxRDs7QUFFRDtFQUNFLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsd0NBQXlEO0VBQ3pELDJCQUEyQjtDQUM1Qjs7QUFHRDtFQUNFLHdDQUF5RDtDQUMxRCIsImZpbGUiOiJzcmMvYXBwL2Njci1jYXJkL2Njci1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKjpyb290IHtcclxuICAtLXJ1c3R5LW9yYW5nZTogI2VkNzMxNDtcclxuICAtLXJhaXNpbi1ibGFjazogIzI5MWYxZTtcclxuICAtLXF1ZWVuLWJsdWU6ICM0Nzc5OTg7XHJcbiAgLS1tb3NzLWdyZWVuOiAjYzRkNmIwO1xyXG4gIC0tb2xpdmUtZHJhYjogIzNkMzUyMjtcclxufSovXHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIC8qYm9yZGVyLXRvcDogNnB4IHNvbGlkIGdyZWVuOyovXHJcbiAgYm9yZGVyLXRvcDogNnB4IHNvbGlkIGdyZWVuO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3VibGUgYmxhY2s7XHJcbn1cclxuXHJcbjpob3N0KC53YXJuaW5nKSB7XHJcbiAgYm9yZGVyLXRvcDogNnB4IHNvbGlkICNkZmQ3MDY7XHJcbiAgLypib3JkZXItYm90dG9tOiA2cHggc29saWQgI2RmZDcwNjsqL1xyXG59XHJcblxyXG46aG9zdCguaW1tZWRpYXRlKSB7XHJcbiAgYm9yZGVyLXRvcDogNnB4IHNvbGlkIG9yYW5nZTtcclxuICAvKmJvcmRlci1ib3R0b206IDZweCBzb2xpZCBvcmFuZ2U7Ki9cclxufVxyXG5cclxuOmhvc3QoLmFsZXJ0MSkge1xyXG4gIGJvcmRlci10b3A6IDZweCBzb2xpZCByZWQ7XHJcbiAgLypib3JkZXItYm90dG9tOiA2cHggc29saWQgcmVkOyovXHJcbn1cclxuXHJcblxyXG5cclxuLmNvbnRlbnQge1xyXG4gIC8qYm9yZGVyLXJpZ2h0OiAxMHB0IHNvbGlkIGJsYWNrOyovXHJcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSSc7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLyp0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsqL1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIC8qbWF4LXdpZHRoOiA0MDBweDsqL1xyXG59XHJcblxyXG4uZmllbGQge1xyXG4gIHdpZHRoOiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWF4LXdpZHRoOiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmViOGY4O1xyXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIGdyZWVuO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IGRvdWJsZSBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOngtc21hbGw7XHJcbiAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBncmlkLWFyZWE6IGxlZnQ7XHJcbn1cclxuXHJcbi8qLmZpZWxkIC5maWVsZERlc2N7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNzBweDtcclxuICBsZWZ0OiAxMHB4O1xyXG5cclxufSovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAuY29udGVudCB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gIH1cclxuICAuZmllbGREZXNje1xyXG4gICAgZm9udC1zaXplOnNtYWxsO1xyXG4gIH1cclxufVxyXG5cclxuLmZpZWxkID4gaW1nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIC8qbWF4LXdpZHRoOiA0NXB4ICFpbXBvcnRhbnQ7Ki9cclxuICBtYXJnaW46IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbn1cclxuXHJcblxyXG4ud2FybmluZyB7XHJcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgI2RmZDcwNjtcclxuICBsaXN0LXN0eWxlLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9nZngvbGktZWwtd2Fybi5wbmcnKTtcclxufVxyXG5cclxuLmltbWVkaWF0ZSB7XHJcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgb3JhbmdlO1xyXG4gIGxpc3Qtc3R5bGUtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2dmeC9saS1lbC1pbWQucG5nJyk7XHJcbn1cclxuXHJcbi5hbGVydDEge1xyXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHJlZDtcclxuICBsaXN0LXN0eWxlLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9nZngvbGktZWwtYWxydC5wbmcnKTtcclxufVxyXG5cclxuLmNvbnRlbnQgPiB1bCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBsaXN0LXN0eWxlLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9nZngvbGktZWwtaW5mby5wbmcnKTtcclxuICBtaW4td2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbmxpOm50aC1jaGlsZCgyKSB7XHJcbiAgbGlzdC1zdHlsZS1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvZ2Z4L2xpLWVsLWFscnQucG5nJyk7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ccr-card/ccr-card.component.html":
/*!**************************************************!*\
  !*** ./src/app/ccr-card/ccr-card.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"fieldText !='Application'\" gdAreas=\"field content\"\r\n     gdGap=\"4px\"\r\n     gdRows=\"auto\"\r\n     gdCols=\" 25% 75%\">\r\n\r\n  <div gdArea=\"field\" [ngClass]=\"setFieldStyle()\">\r\n    <img [src]=\"fieldIconUri\" alt=\"fieldIcon\" />\r\n    <div class=\"fieldDesc\">{{ccr.ccrType}}</div>\r\n  </div>\r\n\r\n  <div *ngIf=\"ccr.ccrType=='Customer'\" gdArea=\"content\" class=\"content\">\r\n    <ul class=\"square\">\r\n      <li>{{ ccr.Description }}</li>\r\n      <li>{{ ccr.CustomerId }}</li>\r\n      <li>{{ ccr.PlantName }} </li>\r\n      <li>{{ ccr.LastUpdate | date: shortTime }}</li>\r\n      <li>{{ ccr.Environment }}</li>\r\n    </ul>\r\n    <br />\r\n  </div>\r\n\r\n  <div *ngIf=\"ccr.ccrType=='Application'\" gdArea=\"content\" class=\"content\">\r\n    <ul class=\"square\">\r\n      <li>{{ ccr.ApplicationName }}</li>\r\n      <li>{{ ccr.ApplicationInfo | slice:0:contentViewLimit}}</li>\r\n      <li>{{ ccr.ApplicationVersion }}</li>\r\n      <li>{{ ccr.LicenceExpiryDate }}</li>\r\n      <li>{{ ccr.ApplicationServiceLevel }}</li>\r\n      <li>{{ ccr.ApplicationServiceHealth }}</li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div *ngIf=\"ccr.ccrType=='Certificates'\" gdArea=\"content\" class=\"content\">\r\n    <ul class=\"square\">\r\n      <li>{{ ccr.SslFriendlyName }}</li>\r\n      <li>{{ ccr.SslExpiryDate | date: shortTime }}</li>\r\n      <li>{{ ccr.SslStatus }}</li>\r\n    </ul>\r\n    <br />\r\n    <br />\r\n    <br />\r\n  </div>\r\n\r\n  <div *ngIf=\"ccr.ccrType=='Storage'\" gdArea=\"content\" class=\"content\">\r\n    <ul class=\"square\">\r\n      <li>{{ ccr.StorageBlobNFiles }}</li>\r\n      <li>{{ ccr.StorageBlobSizeMb }}</li>\r\n      <li>{{ ccr.StorageServiceLevel }}</li>\r\n    </ul>\r\n    <br />\r\n    <br />\r\n    <br />\r\n  </div>\r\n\r\n  <div *ngIf=\"ccr.ccrType=='Database'\" gdArea=\"content\" class=\"content\">\r\n    <ul class=\"square\">\r\n      <li>Name: {{ ccr.DatabaseName }}</li>\r\n      <li>Server: {{ ccr.DatabaseServer }}</li>\r\n      <li>Version: {{ ccr.DatabaseVersion }}</li>\r\n      <li>Template: {{ ccr.DatabaseTemplate }}</li>\r\n      <li>Size(MB): {{ ccr.DatabaseSize }}</li>\r\n      <li>Service Level : {{ ccr.DatabaseServiceLevel }}</li>\r\n    </ul> \r\n  </div>\r\n\r\n  <!--<div *ngIf=\"ccr.ccrType=='Database'\" gdArea=\"content\" class=\"content\">\r\n    <br /> Name: {{ ccr.DatabaseName }}\r\n    <br /> Server: {{ ccr.DatabaseServer }}\r\n    <br /> Version: {{ ccr.DatabaseVersion }}\r\n    <br /> Template: {{ ccr.DatabaseTemplate }}\r\n    <br /> Size(MB): {{ ccr.DatabaseSizeMb }} dfdf\r\n    <br /> Service Level : {{ ccr.DatabaseServiceLevel }}\r\n  </div>-->\r\n\r\n  <div *ngIf=\"ccr.ccrType=='Other assets'\" gdArea=\"content\" class=\"content\">\r\n    <ul class=\"square\">\r\n      <li>Pdf-tron: Disabled</li>\r\n      <li>3D-viewer: Disabled</li>\r\n    </ul>\r\n    <br /> <br /> <br /> <br />\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/ccr-card/ccr-card.component.ts":
/*!************************************************!*\
  !*** ./src/app/ccr-card/ccr-card.component.ts ***!
  \************************************************/
/*! exports provided: CcrCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcrCardComponent", function() { return CcrCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ccrcardmodels_ccr_card_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ccrcardmodels/ccr-card-model */ "./src/app/ccrcardmodels/ccr-card-model.ts");



var CcrCardComponent = /** @class */ (function () {
    function CcrCardComponent() {
        this.someField = false;
        this.fieldIconUri = "";
        this.contentViewLimit = 20;
    }
    CcrCardComponent_1 = CcrCardComponent;
    CcrCardComponent.prototype.ngOnInit = function () {
        this.ccrType = this.ccr.ccrType;
        this.someField = true;
        this.setCcrField();
        console.log("fieldicon " + this.fieldIconUri);
        //this.fieldText = CcrUtil.toString(this.ccr.ccrType);
    };
    CcrCardComponent.prototype.setFieldStyle = function () {
        return {
            field: true,
            warning: this.severityLevel == _ccrcardmodels_ccr_card_model__WEBPACK_IMPORTED_MODULE_2__["SeverityLevel"].Warning,
            immediate: this.severityLevel == _ccrcardmodels_ccr_card_model__WEBPACK_IMPORTED_MODULE_2__["SeverityLevel"].Immediate,
            alert1: this.severityLevel == _ccrcardmodels_ccr_card_model__WEBPACK_IMPORTED_MODULE_2__["SeverityLevel"].Alert
        };
    };
    CcrCardComponent.prototype.setCcrField = function () {
        var path = CcrCardComponent_1.fieldIconPath;
        var file = "ssl.svg";
        switch (this.ccrType) {
            case _ccrcardmodels_ccr_card_model__WEBPACK_IMPORTED_MODULE_2__["CcrType"].AppService:
                file = "web-app.svg";
                this.severityLevel = _ccrcardmodels_ccr_card_model__WEBPACK_IMPORTED_MODULE_2__["SeverityLevel"].Warning;
                break;
            case _ccrcardmodels_ccr_card_model__WEBPACK_IMPORTED_MODULE_2__["CcrType"].Certificate:
                file = "ssl.svg";
                break;
            case _ccrcardmodels_ccr_card_model__WEBPACK_IMPORTED_MODULE_2__["CcrType"].Customer:
                file = "customer.svg";
                break;
            case _ccrcardmodels_ccr_card_model__WEBPACK_IMPORTED_MODULE_2__["CcrType"].Storage:
                file = "storage.svg";
                this.severityLevel = _ccrcardmodels_ccr_card_model__WEBPACK_IMPORTED_MODULE_2__["SeverityLevel"].Alert;
                break;
            case _ccrcardmodels_ccr_card_model__WEBPACK_IMPORTED_MODULE_2__["CcrType"].Database:
                file = "database.svg";
                break;
            default:
                file = "other-assets.svg";
                this.severityLevel = _ccrcardmodels_ccr_card_model__WEBPACK_IMPORTED_MODULE_2__["SeverityLevel"].Immediate;
                break;
        }
        this.fieldIconUri = path.concat(file);
    };
    var CcrCardComponent_1;
    CcrCardComponent.fieldIconPath = "../../assets/icons/";
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CcrCardComponent.prototype, "ccr", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.alert1'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CcrCardComponent.prototype, "someField", void 0);
    CcrCardComponent = CcrCardComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ccr-card',
            template: __webpack_require__(/*! ./ccr-card.component.html */ "./src/app/ccr-card/ccr-card.component.html"),
            styles: [__webpack_require__(/*! ./ccr-card.component.css */ "./src/app/ccr-card/ccr-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CcrCardComponent);
    return CcrCardComponent;
}());



/***/ }),

/***/ "./src/app/ccrcardmodels/ccr-card-model.ts":
/*!*************************************************!*\
  !*** ./src/app/ccrcardmodels/ccr-card-model.ts ***!
  \*************************************************/
/*! exports provided: SeverityLevel, CcrType, CcrUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeverityLevel", function() { return SeverityLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcrType", function() { return CcrType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcrUtil", function() { return CcrUtil; });
var SeverityLevel;
(function (SeverityLevel) {
    SeverityLevel[SeverityLevel["Informational"] = 0] = "Informational";
    SeverityLevel[SeverityLevel["Warning"] = 1] = "Warning";
    SeverityLevel[SeverityLevel["Immediate"] = 2] = "Immediate";
    SeverityLevel[SeverityLevel["Alert"] = 3] = "Alert";
})(SeverityLevel || (SeverityLevel = {}));
var CcrType;
(function (CcrType) {
    CcrType["Customer"] = "Customer";
    CcrType["Certificate"] = "Certificates";
    CcrType["AppService"] = "Application";
    CcrType["Database"] = "Database";
    CcrType["Storage"] = "Storage";
    CcrType["Misc"] = "Other assets";
})(CcrType || (CcrType = {}));
var CcrUtil = /** @class */ (function () {
    function CcrUtil() {
    }
    CcrUtil.toString = function (ct) {
        return CcrType[ct];
    };
    return CcrUtil;
}());



/***/ }),

/***/ "./src/app/customerassets/customerassets.component.html":
/*!**************************************************************!*\
  !*** ./src/app/customerassets/customerassets.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header-container\">\r\n  <div fxLayout=\"row wrap\"\r\n       fxLayout.lt-sm=\"column\"\r\n       fxLayoutGap=\"0px\"\r\n       fxLayoutAlign=\"flex-start\">\r\n\r\n    <app-header fxFlex=\"calc(50%)\">\r\n      fxFlex.lt-sm=\"100%\">\r\n    </app-header>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/customerassets/customerassets.component.ts":
/*!************************************************************!*\
  !*** ./src/app/customerassets/customerassets.component.ts ***!
  \************************************************************/
/*! exports provided: CustomerAssetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAssetsComponent", function() { return CustomerAssetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_statusmonitor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/statusmonitor.service */ "./src/app/services/statusmonitor.service.ts");





var CustomerAssetsComponent = /** @class */ (function () {
    function CustomerAssetsComponent(http, _router, _statusMonitorService) {
        this.http = http;
        this._router = _router;
        this._statusMonitorService = _statusMonitorService;
        this.getCustomerAssets();
    }
    CustomerAssetsComponent.prototype.getCustomerAssets = function () {
        var _this = this;
        this._statusMonitorService.getCustomers()
            .subscribe(function (data) { return _this.customerAssetList = data; });
    };
    CustomerAssetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'customer-assets',
            template: __webpack_require__(/*! ./customerassets.component.html */ "./src/app/customerassets/customerassets.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_statusmonitor_service__WEBPACK_IMPORTED_MODULE_4__["StatusMonitorService"]])
    ], CustomerAssetsComponent);
    return CustomerAssetsComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: block;\r\n  padding: 0px;\r\n}\r\n\r\n.header {\r\n  background-color: #fcf3d9;\r\n  border-bottom: 1px solid #f09f02;\r\n  padding-left: 30px;\r\n  margin-bottom: 10px;\r\n  height: 50px;\r\n}\r\n\r\n.left-top {\r\n  display: flex;\r\n  align-items: center;\r\n  grid-area: left;\r\n  line-height: 10px;\r\n}\r\n\r\n.right-bottom {\r\n  grid-area: right;\r\n  display: flex;\r\n  background-color: #f09f02;\r\n  color: white;\r\n  align-items: center;\r\n\r\n}\r\n\r\n.right-bottom > img {\r\n    height: 1.5em;\r\n    width: 2.5em;\r\n    margin-left: 5px;\r\n  }\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLDBCQUEwQjtFQUMxQixpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2Isb0JBQW9COztDQUVyQjs7QUFFQztJQUNFLGNBQWM7SUFDZCxhQUFhO0lBQ2IsaUJBQWlCO0dBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjNkOTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwOWYwMjtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5sZWZ0LXRvcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdyaWQtYXJlYTogbGVmdDtcclxuICBsaW5lLWhlaWdodDogMTBweDtcclxufVxyXG5cclxuLnJpZ2h0LWJvdHRvbSB7XHJcbiAgZ3JpZC1hcmVhOiByaWdodDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDlmMDI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4gIC5yaWdodC1ib3R0b20gPiBpbWcge1xyXG4gICAgaGVpZ2h0OiAxLjVlbTtcclxuICAgIHdpZHRoOiAyLjVlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div gdAreas=\"header1 header2\"\r\n     gdGap=\"0px\"\r\n     gdCols=\" auto auto\">\r\n\r\n  <div gdArea=\"header1\" class=\"header left-top\">\r\n    <img src=\"../../assets/gfx/vnLogo.png\" alt=\"Visionova Logo\" style=\"height:30px\" />\r\n  </div>\r\n  <div gdArea=\"header2\" class=\"header right-bottom\">\r\n    Valid CCR <img src=\"../../assets/icons/heart-rate.svg\" alt=\"Alternate Text\" />\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<customer-assets></customer-assets>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/installationstatuses/showstatuses.component.html":
/*!******************************************************************!*\
  !*** ./src/app/installationstatuses/showstatuses.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header-container\">\r\n  <div fxLayout=\"row wrap\"\r\n       fxLayout.lt-sm=\"column\"\r\n       fxLayoutGap=\"0px\"\r\n       fxLayoutAlign=\"flex-start\">\r\n\r\n    <app-header fxFlex=\"calc(50%)\">\r\n\r\n      <!--fxFlex.lt-lg=\"0 1 calc(33.33%)\"\r\n      fxFlex.lt-md=\"0 1 calc(50%)\"-->\r\n      fxFlex.lt-sm=\"100%\">\r\n    </app-header>\r\n  </div>\r\n</div>\r\n\r\n<!--<p *ngIf=\"!statusList\"><em>Loading...</em></p>-->\r\n<!--<p>\r\n  <a [routerLink]=\"['/update-statuses']\">Hard Update</a>\r\n</p>-->\r\n\r\n<!--<div *ngFor=\"let status of statuses\">\r\n  Installation and customer<hr />\r\n  <br />{{ \"linje: \" + status.PlantName }}\r\n  <br />{{ \"linje: \" + status.LastUpdate }}\r\n  <br />{{ \"linje: \" + status.CustomerId }}\r\n  <br />{{ \"linje: \" + status.Description }}\r\n  <br />{{ \"linje: \" + status.Environment }}\r\n  <br /> Application<hr />   \r\n  <br />{{ \"linje: \" + status.ApplicationName }}\r\n  <br />{{ \"linje: \" + status.ApplicationInfo }}\r\n  <br />{{ \"linje: \" + status.ApplicationVersion }}\r\n  <br />{{ \"linje: \" + status.LicenceExpiryDate }}\r\n  <br />{{ \"linje: \" + status.ApplicationServiceHealth }}\r\n  <br /> SSL<hr />           \r\n  <br />{{ \"linje: \" + status.SslFriendlyName }}\r\n  <br />{{ \"linje: \" + status.SslExpiryDate }}\r\n  <br />{{ \"linje: \" + status.SslStatus }}\r\n  <br /> Storage <hr />      \r\n  <br />{{ \"linje: \" + status.StorageBlobNFiles }}\r\n  <br />{{ \"linje: \" + status.StorageBlobSizeMb }}\r\n  <br />{{ \"linje: \" + status.StorageServiceLevel }}\r\n  <br />{{ \"linje: \" + status.StorageServiceHealth }}\r\n  <br /> Database<hr />      \r\n  <br />{{ \"linje: \" + status.DatabaseName }}\r\n  <br />{{ \"linje: \" + status.DatabaseServer }}\r\n  <br />{{ \"linje: \" + status.DatabaseVersion }}\r\n  <br />{{ \"linje: \" + status.DatabaseTemplate }}\r\n  <br />{{ \"linje: \" + status.DatabaseSizeMb }}\r\n  <br />{{ \"linje: \" + status.DatabaseServiceLevel }}-->\r\n\r\n<div class=\"row-container\">\r\n  <div fxLayout=\"row wrap\"\r\n       fxLayout.lt-sm=\"column\"\r\n       fxLayoutGap=\"0px\"\r\n       fxLayoutAlign=\"flex-start\">\r\n    <ng-container class=\"row\" *ngFor=\"let card of statusCards\">\r\n      <app-ccr-card [ccr]=\"card\"\r\n                    fxFlex=\"0 1 calc(16.66%)\"\r\n                    fxFlex.lt-lg=\"0 1 calc(33.33%)\"\r\n                    fxFlex.lt-md=\"0 1 calc(50%)\"\r\n                    fxFlex.lt-sm=\"100%\"></app-ccr-card>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/installationstatuses/showstatuses.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/installationstatuses/showstatuses.component.ts ***!
  \****************************************************************/
/*! exports provided: ShowStatusesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowStatusesComponent", function() { return ShowStatusesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_statusmonitor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/statusmonitor.service */ "./src/app/services/statusmonitor.service.ts");
/* harmony import */ var _CcrCardModels_ccr_card_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CcrCardModels/ccr-card-model */ "./src/app/CcrCardModels/ccr-card-model.ts");






var ShowStatusesComponent = /** @class */ (function () {
    function ShowStatusesComponent(http, _router, _statusMonitorService) {
        this.http = http;
        this._router = _router;
        this._statusMonitorService = _statusMonitorService;
        this.statusCards = new Array();
    }
    ShowStatusesComponent.prototype.ngOnInit = function () {
        this.getStatuses();
    };
    ShowStatusesComponent.prototype.getStatuses = function () {
        var _this = this;
        this._statusMonitorService.getAllStatuses()
            .subscribe(function (data) {
            _this.statuses = data;
            _this.setCcrCards();
        });
    };
    ShowStatusesComponent.prototype.setCcrCards = function () {
        for (var _i = 0, _a = this.statuses; _i < _a.length; _i++) {
            var status_1 = _a[_i];
            var customerCard = {};
            var applicationCard = {};
            var databaseCard = {};
            var certificatesCard = {};
            var storageCard = {};
            var miscCard = {};
            //customerCard.CustomerId = status.CustomerId;
            customerCard.Description = status_1.Description;
            customerCard.Environment = status_1.Environment;
            customerCard.LastUpdate = status_1.LastUpdate;
            customerCard.PlantName = status_1.PlantName;
            customerCard.ccrType = _CcrCardModels_ccr_card_model__WEBPACK_IMPORTED_MODULE_5__["CcrType"].Customer;
            customerCard.severityLevel = _CcrCardModels_ccr_card_model__WEBPACK_IMPORTED_MODULE_5__["SeverityLevel"].Immediate;
            applicationCard.ApplicationName = status_1.ApplicationName;
            applicationCard.ApplicationInfo = status_1.ApplicationInfo;
            applicationCard.ApplicationVersion = status_1.ApplicationVersion;
            applicationCard.ApplicationServiceLevel = "S1";
            applicationCard.ApplicationServiceHealth = status_1.ApplicationServiceHealth;
            applicationCard.ccrType = _CcrCardModels_ccr_card_model__WEBPACK_IMPORTED_MODULE_5__["CcrType"].AppService;
            applicationCard.severityLevel = _CcrCardModels_ccr_card_model__WEBPACK_IMPORTED_MODULE_5__["SeverityLevel"].Immediate;
            databaseCard.DatabaseName = status_1.DatabaseName;
            databaseCard.DatabaseServer = status_1.DatabaseServer;
            databaseCard.DatabaseServiceLevel = status_1.DatabaseServiceLevel;
            databaseCard.DatabaseSize = status_1.DatabaseSizeMb;
            databaseCard.DatabaseTemplate = status_1.DatabaseTemplate;
            databaseCard.DatabaseVersion = status_1.DatabaseVersion;
            databaseCard.ccrType = _CcrCardModels_ccr_card_model__WEBPACK_IMPORTED_MODULE_5__["CcrType"].Database;
            databaseCard.severityLevel = _CcrCardModels_ccr_card_model__WEBPACK_IMPORTED_MODULE_5__["SeverityLevel"].Alert;
            certificatesCard.SslName = status_1.SslName;
            certificatesCard.SslExpiryDate = status_1.SslExpiryDate;
            certificatesCard.SslStatus = status_1.SslStatus;
            certificatesCard.ccrType = _CcrCardModels_ccr_card_model__WEBPACK_IMPORTED_MODULE_5__["CcrType"].Certificate;
            certificatesCard.severityLevel = _CcrCardModels_ccr_card_model__WEBPACK_IMPORTED_MODULE_5__["SeverityLevel"].Warning;
            storageCard.StorageBlobNFiles = status_1.StorageBlobNFiles;
            storageCard.StorageBlobSizeMb = status_1.StorageBlobSizeMb;
            storageCard.StorageServiceLevel = status_1.StorageSL;
            storageCard.StorageServiceHealth = status_1.StorageSH;
            storageCard.ccrType = _CcrCardModels_ccr_card_model__WEBPACK_IMPORTED_MODULE_5__["CcrType"].Storage;
            storageCard.severityLevel = _CcrCardModels_ccr_card_model__WEBPACK_IMPORTED_MODULE_5__["SeverityLevel"].Informational;
            miscCard.ccrType = _CcrCardModels_ccr_card_model__WEBPACK_IMPORTED_MODULE_5__["CcrType"].Misc;
            this.statusCards.push(customerCard);
            this.statusCards.push(applicationCard);
            this.statusCards.push(databaseCard);
            this.statusCards.push(certificatesCard);
            this.statusCards.push(storageCard);
            this.statusCards.push(miscCard);
        }
    };
    ShowStatusesComponent.prototype.getCcrCards = function () {
        return this.statusCards;
    };
    ShowStatusesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./showstatuses.component.html */ "./src/app/installationstatuses/showstatuses.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_statusmonitor_service__WEBPACK_IMPORTED_MODULE_4__["StatusMonitorService"]])
    ], ShowStatusesComponent);
    return ShowStatusesComponent;
}());



/***/ }),

/***/ "./src/app/services/statusmonitor.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/statusmonitor.service.ts ***!
  \***************************************************/
/*! exports provided: StatusMonitorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusMonitorService", function() { return StatusMonitorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var StatusMonitorService = /** @class */ (function () {
    //private statusList: StatusMonitorData[];
    function StatusMonitorService(_http, baseUrl) {
        this._http = _http;
        this.appUrl = "";
        this.appUrl = baseUrl;
    }
    //getStatusList(): StatusMonitorData[] {
    //  return this.statusList;
    //}
    StatusMonitorService.prototype.getAllStatuses = function () {
        try {
            console.log("inside getallstatuses() in service");
            return this._http.get(this.appUrl + 'api/Installations/Status/All');
        }
        catch (e) {
            console.log(e.message);
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(e.message);
        }
    };
    StatusMonitorService.prototype.getCustomers = function () {
        return this._http.get(this.appUrl + 'api/Customer/All');
    };
    StatusMonitorService.prototype.getCustomerById = function (id) {
        return this._http.get(this.appUrl + "api/Customer/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    StatusMonitorService.prototype.updateEmployee = function (customer) {
        return this._http.put(this.appUrl + 'api/Customer/Edit', customer);
        //.map((response: Response) => response.json()) 
        //.catch(this.errorHandler); 
    };
    StatusMonitorService.prototype.deleteEmployee = function (id) {
        return this._http.delete(this.appUrl + "api/Customer/Delete/" + id);
        //.map((response: Response) => response.json()) 
        //.catch(this.errorHandler); 
    };
    StatusMonitorService.prototype.errorHandler = function (error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
    };
    StatusMonitorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])('BASE_URL')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], String])
    ], StatusMonitorService);
    return StatusMonitorService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
var providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\JoachimKeyser\OneDrive - VisioNova\DEV-VisioNova\source\repos\ValidStatusMonitor\ValidStatusMonitor\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map